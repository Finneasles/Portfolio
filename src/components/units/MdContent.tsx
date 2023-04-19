import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const MdContent = ({ source }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return (
    <article
      className="lg:prose-md prose prose-slate mb-8
     prose-img:rounded-xl dark:prose-headings:text-gray-200
    dark:prose-p:text-slate-400"
    >
      {content}
    </article>
  );
};

export default MdContent;
