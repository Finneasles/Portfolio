import { useRouter } from "next/router";
import { Four0FourPage } from "@/components";

export default function _404({t}) {
  const router = useRouter();
  return <Four0FourPage  {...{t}} router={router} />;
}
