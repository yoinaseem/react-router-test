import type { Route } from "./+types/home";
import { HomePage } from "~/components/pages/HomePage";
import axios from "~/lib/axios";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ministry of Youth and Sports" },
    { name: "description", content: "Ministry of Youth and Sports, Maldives." },
  ];
}


export async function loader() {
  const res = await axios.get("/api/forms");
  // console.log(res.data.data);
  return res.data.data;
}

export default function Home() {
  return <HomePage />;
}
