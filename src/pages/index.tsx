import { Homepage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";

export default function Home({ postsData }) {
  return <Homepage posts={postsData}/>;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("posts");
  return {
    props: {
      postsData,
    },
  };
}