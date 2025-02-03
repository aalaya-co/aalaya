import type { MetaFunction } from "@remix-run/node";
import HomePage from "~/pages/home.page";

export const meta: MetaFunction = () => {
  return [
    { title: "Aalaya :: Building Dreams" },
    { name: "description", content: "Welcome to Aalaya :: Building Dreams" },
  ];
};

export default function Index() {
  return (<HomePage />);
}
