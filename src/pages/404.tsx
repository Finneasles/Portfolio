import { Four0FourPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";

export default function Home({ postsData }) {
  return <Four0FourPage posts={postsData}/>;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("posts");
  return {
    props: {
      postsData,
    },
  };
}