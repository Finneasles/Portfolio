---
title: "Class"
categories: [ "Classes","JavaScript" ]
comments: false
relatedArticles: false
date: "Mar 24, 2023"
repoName: "Practice"
---

```js

export class ClassName {
  static func(number: number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return number < 0 ? 0 : sum;
  }
}

```
