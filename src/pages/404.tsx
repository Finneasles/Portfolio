import { useRouter } from "next/router";
import { Four0FourPage } from "@/components";
import { useEffect } from "react";

export default function _404() {
  const router = useRouter();
  return <Four0FourPage router={router} />;
}
