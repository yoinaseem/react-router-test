import { FormPage } from "~/components/pages/form_page";
import type { Route } from "./+types/home";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";

const getFormData = (slug: string | undefined) => {
  if (slug === "club-register") {
    return {
      title: "Club Registration Form",
      fields: [
        {
          name: "Name",
          placeholder: "Full-name",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Club Name",
          placeholder: "Club Name",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Position in Club",
          placeholder: "Select Position",
          type: "select-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Sport",
          placeholder: "Select Sport",
          type: "select-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Street Address",
          placeholder: "House/Apartment, Road",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Island City",
          placeholder: "Select Island/City",
          type: "select-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Contact Number",
          placeholder: "Contact Number",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Email",
          placeholder: "Email",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Website",
          placeholder: "Club Website",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
      ],
    };
  }
  if (slug === "tournament-register") {
    return {
      title: "Tournament Registration Form",
      fields: [
        {
          name: "Name",
          placeholder: "Full-name",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Club Name",
          placeholder: "Club Name",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Position in Club",
          placeholder: "Select Position",
          type: "select-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Sport",
          placeholder: "Select Sport",
          type: "select-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
        {
          name: "Street Address",
          placeholder: "House/Apartment, Road",
          type: "text-input",
          default: undefined,
          required: true,
          section: "General Information",
          col_span: 'col-span-2',
        },
      ],
    };  
  } else {
    return undefined;
  }
};

// The loader function runs on the server
export async function loader({ params }: LoaderFunctionArgs) {
  const formData = getFormData(params.slug);
  if (!formData) {
    throw new Response("Not Found", { status: 404 });
  }
  // The returned data is provided to the component via useLoaderData
  return { formData };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Registration Form" },
    {
      name: "description",
      content: "Ministry of Youth and Sports, Maldives.!",
    },
  ];
}

export default function DynamicFormRoute() {
  const { formData } = useLoaderData() as any;

  return <FormPage formData={formData} />;
}