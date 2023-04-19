import React from "react";

export const Grid = () => {
  const Item = ({ title, description, href }) => {
    return (
      <a href={href}>
        <h2>{title} &rarr;</h2>
        <p>{description}</p>
      </a>
    );
  };

  return (
    <div>
      <Item
        href="https://nextjs.org/docs"
        title={"Documentation"}
        description={
          "Find in-depth information about Next.js features and API."
        }
      />
      <Item
        href="https://nextjs.org/learn"
        title={"Learn"}
        description={
          "Learn about Next.js in an interactive course with quizzes!"
        }
      />
      <Item
        href="https://nextjs.org/examples"
        title={"Examples"}
        description={
          "Discover and deploy boilerplate example Next.js projects."
        }
      />
      <Item
        href="https://nextjs.org/deploy"
        title={"Deploy"}
        description={
          "Instantly deploy your Next.js site to a public URL with Vercel."
        }
      />
    </div>
  );
};

export default Grid;
