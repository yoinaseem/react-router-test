import { useMemo } from "react";
import { Footer } from "~/components/layout/Footer";
import { FormRenderer } from "~/components/FormRenderer";

// Define the types for your data here so this component knows what to expect
// You can export these from your route file if you prefer
// FormPage.tsx
// export interface Field {
//   name: string;
//   placeholder: string;
//   type: 'text-input' | 'select-input';
//   required: boolean;
//   section: string;
// }

// export interface FormData {
//   title: string;
//   fields: Field[];
// }

interface FormPageProps {
  form: FormData;
}

export function FormPage({ form }: FormPageProps) {

  return (
    <main>
      <section>
        <div className="container mx-auto w-5xl text-4xl font-semibold mt-10">
          <h1>{form.name}</h1>
        </div>
      </section>
      <section>
        <div className="container mx-auto w-5xl mt-12">
          <FormRenderer sections={form.sections} />
        </div>
      </section>
      <Footer />
    </main>
  );
}