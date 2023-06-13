import { collateCategories } from "@/utils";
import { CatPage } from "@/components";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/router";

function Content({ categories }) {
  const router = useRouter();
  return <CatPage categories={categories} router={router} />;
}

export default Content;

export async function getStaticProps() {
  const categories = await collateCategories();
  return {
    props: {
      categories
    },
  };
}
