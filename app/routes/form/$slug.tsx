import { FormPage } from "~/components/pages/FormPage";
import type { Route } from "./+types/home";
import type { LoaderFunctionArgs } from "react-router";
import { useLoaderData } from "react-router";
import axios from "~/lib/axios";
import type { FormData, ApiCollectionResponse } from "~/types";

// The loader function runs on the server
export async function loader({ params }: LoaderFunctionArgs) {
  if (!params.slug) {
    throw new Response("Not Found", { status: 404 });
  }
  console.log("PARAMS", params);
  try {
    // ONE API call is enough now, thanks to your backend update
    const res = await axios.get<ApiCollectionResponse<FormData>>(
      `/api/forms?slug=${params.slug}`
    );
    // The API returns an array, so we take the first (and only) item
    const form = res.data.data[0];

    if (!form) {
      throw new Response("Form Not Found", { status: 404 });
    }
    console.log(form);

    // No transformation needed! Just return the clean form data.
    return { form };

  } catch (error: any) {
    // console.error(error);
    throw new Response("Form Not Found", { status: 404 });
  }
}

export function meta({ data }: Route.MetaArgs) {
  const formName = data?.form?.name || "Registration Form";
  const formDes = data?.form?.description || "Register";
  return [
    { title: formName },
    { name: formDes},
    { content: "Ministry of Youth and Sports, Maldives."},
  ];
}

export default function DynamicFormRoute() {
  const { form } = useLoaderData() as { form: FormData };

  return <FormPage form={form} />;
}
