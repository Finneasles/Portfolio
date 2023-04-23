import { Homepage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";

export default function About({ postsData }) {
  return <Homepage posts={postsData} />;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("posts");
  return {
    props: {
      postsData,
    },
  };
}
