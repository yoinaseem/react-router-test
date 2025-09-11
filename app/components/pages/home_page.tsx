import { Link } from "react-router";
import { FormsList } from "~/components/forms_list";

export function HomePage() {
  return (
    <main className="mb-24">
      {/* Hero Section */}
      <section>
        <div className="w-full h-75 overflow-hidden">
          <img src="https://www.coast2coastcaravans.kiwi.nz/wp-content/uploads/2013/05/placeholder-862x647.png" className="w-full h-full object-cover"></img>
        </div>
      </section>
      {/* FormList Container */}
      <section>
        <div className="container w-5xl mx-auto mt-12 font-sans flex flex-col gap-10">
          <h1 className="font-semibold text-4xl">Welcome</h1>
          <p className="text-2xl">Please choose a form from below for your required purpose.</p>
        </div>
        <div className="container w-5xl mx-auto mt-10 rounded-lg bg-custom-gray-light border border-custom-gray-dark px-8 py-8">
          {/* INSERT COMPONENT FOR FORMS_CARD */}
          <FormsList/>
        </div>
      </section>
    </main>
  );
}
