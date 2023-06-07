import { NextRouter } from "next/router";
import React, { useEffect } from 'react';

export const Section = ({ data ,router} :{ data: any, router: NextRouter }) => {
  const url = router.pathname.split('/');
  const slug = url[url.length - 1];
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://f1n.disqus.com/embed.js';
    script.setAttribute('data-timestamp', new Date().toString());
    (document.head || document.body).appendChild(script);
    return () => {
      (document.head || document.body).removeChild(script);
    };
  }, []);

  return <div id="disqus_thread"></div>;
};

export default Section;
