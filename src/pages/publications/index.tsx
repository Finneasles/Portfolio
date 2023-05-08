import { PublicationsPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";

export default function Home({ postsData }) {
  const router = useRouter();
  return (
    <PublicationsPage
      pageTitle={"Publications"}
      router={router}
      posts={postsData}
    />
  );
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("_posts");
  return {
    props: {
      postsData,
    },
  };
}
