---
title: "isSquare"
categories: [ "Shapes","JavaScript" ]
comments: false
relatedArticles: false
date: "Mar 29, 2023"
repoName: "Practice"
---

```js

export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) {
    return null;
  }
  const arr: number[] = [];
  while (l > 0 && w > 0) {
    if (l > w) {
      arr.push(w);
      l -= w;
    } else {
      arr.push(l);
      w -= l;
    }
  }
  return arr;
};

```
