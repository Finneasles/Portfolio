import { AboutPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";

export default function About({ postsData }) {
  return <AboutPage pageTitle={"About"}  />;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("posts");
  return {
    props: {
      postsData,
    },
  };
}
