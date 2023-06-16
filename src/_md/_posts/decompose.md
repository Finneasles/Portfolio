---
title: "decompose"
categories: [ "Arrays","JavaScript" ]
comments: false
relatedArticles: false
date: "Mar 29, 2023"
repoName: "Practice"
---

```js

export const decompose = (n: number): null | number[] => {
  const recursInt = (n: number, i: number): number[] | null => {
    if (n === 0) return [];
    for (let k = i; k >= 1; k--) {
      if (n - k * k >= 0) {
        const arr = recursInt(n - k * k, k - 1);
        if (arr !== null) return [...arr, k];
      }
    }
    return null;
  };
  return recursInt(n * n, n - 1);
};

```
