---
title: "useCountryCode"
categories: [ "React","Hooks", "JavaScript" ]
comments: false
relatedArticles: false
date: "May 8, 2023"
repoName: "Practice"
---

```js

import { useState, useEffect } from "react";

const useCountryCode = () => {
  const [countryCode, setCountryCode] = useState("");

  useEffect(() => {
    const getCountryCode = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setCountryCode(data.country_code);
      } catch (error) {
        console.error(error);
      }
    };

    getCountryCode();
  }, []);

  return { countryCode, setCountryCode };
};

export default useCountryCode;

```
