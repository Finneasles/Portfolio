# Portfolio

## [![Netlify Status](https://api.netlify.com/api/v1/badges/9d9e824a-0954-43cf-92de-9393a1f2f882/deploy-status)](https://app.netlify.com/sites/radiant-choux-7aba5d/deploys) — [![Web Icon](/public/images/web-icon.png) Live Deployment](https://radiant-choux-7aba5d.netlify.app/) — [![Figma Logo](/public/images/figma-icon.png) Open in Figma](https://www.figma.com/file/N3t38qnVsBG5MFeYvP5p4x/FI6-Portfolio-Template-Made-by-Fin?node-id=0-1&t=6hYwn2zwh31VdVat-0)

A portfolio website built using Next.js, TypeScript, Tailwind CSS, and Markdown. The website is designed to showcase and distribute my work and publications.

![Portfolio Thumbnail](/public/images/thumb-min.png)

## Technologies

- [Next.js](http://next.js/)
- [Tailwinds](http://tailwinds.com/)
- [TypeScript](http://typejs.org/)
- [Markdown](http://markdown.org/)
- [MongoDB](http://mongodb.org/)

---

## Sitemap

```mermaid
    flowchart TD
    A(Homepage)-->B(About)
    A-->C(Projects)
    A-->G(Content)
    G-->Z(Categories)
    Z-->K(Category)
    K-->V(Product)
    K-->R(Article)
    K-->I(Image)
    K-->O(Video)
    K-->N(URL)
    A-->P(Hire/Contact)
    C-->V
    Q(Additional Pages)
    Q-->S(Authentication)
    Q-->Y(404)
    Q-->U(Privacy Policy)
```

---

## Installation

1. Install the dependencies:

    ```bash
    npm i
    # or
    yarn
    ```

2. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
