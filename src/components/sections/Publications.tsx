import React from "react";
import { Post } from "@/components";

export const PostSection = ({ allPosts }) => {
  return (
    <section>
      <h2 className="mb-12 text-left text-2xl font-bold uppercase text-gray-900 dark:text-white md:text-4xl">
        Latest Publications
      </h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-2
     lg:grid-cols-2 lg:flex-row lg:gap-4"
      >
        {allPosts.map((e: any) => {
          return <Post key={e.slug} data={e} />;
        })}
      </div>
    </section>
  );
};

export default PostSection;
