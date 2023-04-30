import { ProjectsPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";

export default function Home({ postsData }) {
  return <ProjectsPage pageTitle={"Projects"} posts={postsData}/>;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("posts");
  return {
    props: {
      postsData,
    },
  };
}