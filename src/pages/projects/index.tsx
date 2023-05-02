import { ProjectsPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";

export default function Home({ postsData }) {
  const router = useRouter();
  return (
    <ProjectsPage pageTitle={"Projects"} posts={postsData} router={router} />
  );
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter("posts");
  return {
    props: {
      postsData,
    },
  };
}
