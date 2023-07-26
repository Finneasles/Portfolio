import React, { useEffect } from "react";
import { useRemark } from "react-remark";

export const Component = ({ source }) => {
  const [content, setSource] = useRemark();
  useEffect(() => {
    setSource(source);
  }, [setSource, source]);

  return (
    <article className="flex flex-col">
      {content}
    </article>
  );
};

export default Component;
