import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";
import { Homepage } from "@/components";

export default function Home({ postsData, t }) {
  const router = useRouter();
  return <Homepage {...{ posts: postsData, router, t }} />;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter();
  return {
    props: {
      postsData,
    },
  };
}
