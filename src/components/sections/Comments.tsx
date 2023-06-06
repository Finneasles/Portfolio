import { DiscussionEmbed } from "disqus-react";
import { NextRouter } from "next/router";
import { Button } from "@/components";
import Image from "next/image";
import React from "react";

export const Section = ({ data ,router} :{ data: any, router: NextRouter }) => {
  const url = router.pathname.split('/');
  const slug = url[url.length - 1];
  return (
    <DiscussionEmbed
    shortname='f1n'
    config={
        {
            url: process.env.NEXT_PUBLIC_SITE_URL + router.pathname,
            identifier: slug,
            title: data.title,
            language: 'en'
        }
    }
/>
  );
};

export default Section;
