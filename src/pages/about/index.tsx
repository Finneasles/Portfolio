import { AboutPage } from "@/components";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  return <AboutPage pageTitle={"About"} router={router} />;
}
