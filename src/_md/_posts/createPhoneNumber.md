---
title: "createPhoneNumber"
categories: [ "Numbers","JavaScript" ]
comments: false
relatedArticles: false
date: "Mar 24, 2023"
repoName: "Practice"
---

```js

export function createPhoneNumber(numbers: number[]): string {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6, 10).join("")}`;
}

```
