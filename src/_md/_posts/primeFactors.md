---
title: "primeFactors"
categories: [ "Numbers","JavaScript" ]
comments: false
relatedArticles: false
date: "Apr 13, 2023"
repoName: "Practice"
---

```js

export const primeFactors = ({
  n,
}: {
  n: number;
}): string | undefined | any => {
  let factors: string[] = [];
  let d: number = 2;
  while (n > 1) {
    if (n % d === 0) {
      let p = 0;
      while (n % d === 0) {
        p++;
        n = n / d;
      }
      factors.push(`(${d}${p > 1 ? `**${p}` : ""})`);
    }
    d++;
  }
  return factors.join("");
};

```
