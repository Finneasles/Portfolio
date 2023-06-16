---
title: "likesArr"
categories: [ "Arrays","JavaScript" ]
comments: false
relatedArticles: false
date: "Apr 13, 2023"
repoName: "Practice"
---

```js

export const likes = (a: string[], maxUsers: number = 4): string => {
  const stringArr: string[] = ["likes this", "like this", "no one likes this"];
  switch (a.length) {
    case 0:
      return stringArr[2];
    case 1:
    case 2:
      return [
        a.join(" and "),
        a.length == 1 ? stringArr[0] : stringArr[1],
      ].join(" ");
    case 3:
      return [
        a.slice(0, maxUsers / 2).join(", ") + " and " + a[2],
        stringArr[1],
      ].join(" ");
    default:
      return (
        a.slice(0, maxUsers / 2).join(", ") +
        ` and ${a.length - maxUsers / 2} others ` +
        stringArr[1]
      );
  }
};

```
