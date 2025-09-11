import { useMemo } from "react";
import { Footer } from "~/components/layout/Footer";
import { FormRenderer } from "~/components/FormRenderer";

// Define the types for your data here so this component knows what to expect
// You can export these from your route file if you prefer
interface Field {
  name: string;
  placeholder: string;
  type: 'text-input' | 'select-input';
  required: boolean;
  section: string;
}
interface FormData {
  title: string;
  fields: Field[];
}
interface FormPageProps {
  formData: FormData;
}

export function FormPage({ formData }: FormPageProps) {
  const groupedFields = useMemo(() => {
    if (!formData?.fields) return {};
    return formData.fields.reduce((acc, field) => {
      const section = field.section || "General";
      if (!acc[section]) {
        acc[section] = [];
      }
      acc[section].push(field);
      return acc;
    }, {} as Record<string, Field[]>);
  }, [formData?.fields]);

  return (
    <main>
      <section>
        <div className="container mx-auto w-5xl text-4xl font-semibold mt-10">
          <h1>{formData.title}</h1>
        </div>
      </section>
      <section>
        <div className="container mx-auto w-5xl mt-12">
          <FormRenderer groupedFields={groupedFields} />
        </div>
      </section>
      <Footer />
    </main>
  );
}