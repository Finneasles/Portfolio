import { DiscussionEmbed } from "disqus-react";
import { NextRouter } from "next/router";
import React, { useEffect } from 'react';
import { Button } from "@/components";
import Image from "next/image";

export const Section = ({ data ,router} :{ data: any, router: NextRouter }) => {
  const url = router.pathname.split('/');
  const slug = url[url.length - 1];
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f1n.disqus.com/embed.js';
    script.setAttribute('data-timestamp', new Date().toString());
    script.setAttribute('data-theme', 'dark');
    (document.head || document.body).appendChild(script);
    return () => {
      (document.head || document.body).removeChild(script);
    };
  }, []);

  return <div id="disqus_thread"></div>;
};

export default Section;
