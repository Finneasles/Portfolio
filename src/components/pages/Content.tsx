import {
  Author,
  CommentSection,
  Layout,
  MdContent,
  RelatedArticlesSection,
  Thumbnail,
} from "@/components";
import { useState } from "react";

export const Page = ({ source,router }) => {
  const [author] = useState(source.frontMatter.author);
  const [title] = useState(source.frontMatter.title);
  const [description] = useState(source.frontMatter.description);
  const [thumbnail] = useState(source.frontMatter.figure);
  const [thumbnailCaption] = useState(source.frontMatter.figcaption);
  const [content] = useState(source.markdownBody);
  const [comments] = useState(source.frontMatter.comments);
  const [relatedArticles] = useState(source.frontMatter.relatedArticles);

  return (
    <Layout title={title} router={router}>
      <div>
        <main className="px-6 pt-32 pb-16 bg-white dark:bg-gray-900 lg:px-32 lg:pt-60 lg:pb-32">
          <article className="w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 not-format lg:mb-6">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
                {title}
              </h1>
              {description ? <p className="mb-12">{description}</p> : null}
              {thumbnail ? (
                <Thumbnail
                  alt={title + " Thumbnail"}
                  caption={thumbnailCaption}
                />
              ) : null}
            </header>
            <MdContent source={content} />
            <footer>
              {author ? <Author data={author} /> : null}
              {comments ? <CommentSection /> : null}
            </footer>
          </article>
        </main>
        {relatedArticles ? <RelatedArticlesSection /> : null}
      </div>
    </Layout>
  );
};

export default Page;
