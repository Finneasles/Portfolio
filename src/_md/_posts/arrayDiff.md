---
title: "arrayDiff"
categories: [ "Arrays","JavaScript" ]
comments: false
relatedArticles: false
date: "Mar 24, 2023"
repoName: "Practice"
---

```js

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter((x) => !b.includes(x));
}

```
