import { getAllPostsWithFrontMatter } from "@/utils";
import { ProjectsPage } from "@/components";
import { useRouter } from "next/router";

export default function Projects({ postsData, t }) {
  const router = useRouter();
  return <ProjectsPage {...{ posts: postsData, t }} router={router} />;
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter();
  return {
    props: {
      postsData,
    },
  };
}
