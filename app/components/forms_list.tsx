import { Link } from "react-router";
import { FileText } from "@phosphor-icons/react";

export function FormsList() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl">Forms</h2>
      <div className="mt-4 flex flex-col gap-3 px-1">
        {forms.map((form) => (
          <div
            key={form.slug}
            className="flex gap-3 text-custom-blue font-semibold"
          >
            <FileText size={22} />
            <Link to={`/form/${form.slug}`}>{form.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const forms = [
  {
    name: "Club Registration Form",
    slug: "club-register",
  },
  {
    name: "Tournament Registration Form",
    slug: "tournament-register",
  },
];
