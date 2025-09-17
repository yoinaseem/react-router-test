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
    const res = await axios.get<ApiCollectionResponse<FormData>>(
      `/api/forms?slug=${params.slug}`
    );
    const form = res.data.data[0];

    if (!form) {
      throw new Response("Form Not Found", { status: 404 });
    }
    console.log(form);

    return { form };

  } catch (error: any) {
    console.error(error);
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
