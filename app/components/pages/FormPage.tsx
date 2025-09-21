import { useState, useMemo } from "react";
import { Footer } from "../layout/footer";
import { FormRenderer } from "~/components/FormRenderer";
import { ConfirmationDialog } from "~/components/ui/ConfirmationDialog";
import type { FormData } from "~/types";
import { evaluateFieldVisibility } from "~/utils/formDependencies";
interface FormPageProps {
  form: FormData;
}

export function FormPage({ form }: FormPageProps) {
  // Initialize form state
  const [formState, setFormState] = useState<Record<string, any>>({});

  // State for confirmation dialog
  const [showClearConfirmation, setShowClearConfirmation] = useState(false);

  // Handle form submission
  const handleSubmit = () => {
    console.log("Form submitted with data:", formState);
    // implement POST request
  };

  const handleInputChange = (name: string, value: any) => {
    // Create a new form state with the updated value
    const newFormState = {
      ...formState,
      [name]: value,
    };

    // Check all fields to see if they should be hidden and clear their values if needed
    const updatedFormState = { ...newFormState };
    form.sections.forEach((section) => {
      section.fields.forEach((field) => {
        // Skip the field that just changed
        if (field.name === name) return;

        // Check if this field should be visible based on the new form state
        const shouldBeVisible = evaluateFieldVisibility(
          field,
          form.sections,
          newFormState
        );

        // If the field should not be visible and has a value, clear it
        if (!shouldBeVisible && updatedFormState[field.name] !== undefined) {
          delete updatedFormState[field.name];
        }
      });
    });

    setFormState(updatedFormState);
  };

  // Request to clear the form
  const requestClearForm = () => {
    setShowClearConfirmation(true);
  };

  // Actually clear the form
  const handleClearForm = () => {
    setFormState({});
    setShowClearConfirmation(false);
  };

  // Cancel clearing the form
  const handleCancelClear = () => {
    setShowClearConfirmation(false);
  };

  // Calculate progress for each section
  const sectionProgress = useMemo(() => {
    return form.sections.map((section) => {
      const visibleFields = section.fields.filter((field) =>
        evaluateFieldVisibility(field, form.sections, formState)
      );
      // Get all required fields in this section
      const requiredFields = visibleFields.filter((field) => field.is_required);

      // Count how many required fields are filled
      const filledFields = requiredFields.filter((field) => {
        const value = formState[field.name];
        if (value === null || value === undefined) return false;
        if (typeof value === "string") return value.trim() !== "";
        if (Array.isArray(value)) return value.length > 0;
        return true;
      }).length;

      // Calculate progress percentage
      const progress =
        requiredFields.length > 0
          ? Math.round((filledFields / requiredFields.length) * 100)
          : 0;

      return {
        sectionId: section.id,
        sectionTitle: section.title,
        progress,
        filledFields,
        totalFields: requiredFields.length,
      };
    });
  }, [form.sections, formState]);

  return (
    <main>
      <section>
        <div className="container mx-auto w-5xl text-4xl font-semibold mt-10">
          <h1>{form.name}</h1>
        </div>
      </section>
      <section>
        <div className="container mx-auto w-5xl mt-12">
          <FormRenderer
            sections={form.sections}
            onInputChange={handleInputChange}
            formState={formState}
          />
        </div>
      </section>
      <Footer
        onSubmit={handleSubmit}
        sectionProgress={sectionProgress}
        onClearForm={requestClearForm}
      />

      <ConfirmationDialog
        isOpen={showClearConfirmation}
        title="Clear Form"
        message="Are you sure you want to clear all form fields? This action cannot be undone."
        confirmButtonText="Clear Form"
        cancelButtonText="Cancel"
        onConfirm={handleClearForm}
        onCancel={handleCancelClear}
      />
    </main>
  );
}
