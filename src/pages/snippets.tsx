import { PublicationsPage } from "@/components";
import { getAllPostsWithFrontMatter } from "@/utils";
import { useRouter } from "next/router";

export default function Home({ postsData , t}) {
  const router = useRouter();
  return (
    <PublicationsPage
      {...{ t, posts: postsData }}
      router={router}
    />
  );
}

export async function getStaticProps() {
  const postsData = await getAllPostsWithFrontMatter();
  return {
    props: {
      postsData,
    },
  };
}
