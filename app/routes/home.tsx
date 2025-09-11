import type { Route } from "./+types/home";
import { HomePage } from "~/components/pages/HomePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ministry of Youth and Sports" },
    { name: "description", content: "Ministry of Youth and Sports, Maldives." },
  ];
}

export default function Home() {
  return <HomePage />;
}
