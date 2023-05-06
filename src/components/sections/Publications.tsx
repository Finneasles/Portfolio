import React from "react";
import { Post } from "@/components";

export const Section = ({ allPosts }) => {
  return (
    <section>
      <h2 className={"section-title"}>Publications</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2 lg:grid-cols-2 lg:flex-row lg:gap-4">
        {allPosts
          .filter((post) => post.frontMatter.project !== true)
          .map((e: any) => {
            return <Post key={e.slug} data={e} />;
          })}
      </div>
    </section>
  );
};

export default Section;
