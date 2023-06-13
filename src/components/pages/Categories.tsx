import {
  RelatedArticlesSection,
  CommentSection,
  MdContent,
  Thumbnail,
  Author,
  Layout,
} from "@/components";
import { useState } from "react";

export const Page = ({ categories , router}) => {
return (
    <Layout
      title={"title"}
      router={router}
    >
      {JSON.stringify(categories)}
    </Layout>
  );
};

export default Page;
