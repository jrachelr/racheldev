---
title: Scroll to Top Button
subtitle: Adding a UI element to scroll to the top of the search page
date: "2023-08-04"
tags:
  - "#coding"
  - "#react"
  - "#nextjs"
  - "#frontend"
  - "#opensource"
---

Working on a feature for [# 🚀 Feature: Add a 'back to top' button for long search results](https://github.com/JoshuaKGoldberg/tidelift-me-up-site/issues/7). My first attempt was close, my approach was roughly:

1. Add a link to the page with an `href="#title"`
2. The button has an `onClick` that:
   1. Takes the clicked link’s `href`, removes the `#`, and finds an element by that ID (so, `"title"`)
   2. Calls `window.scrollTo` with a `top` equal to that element’s bounding client rectangle’s top

```ts
<Link href="#title" onClick={(event) => { event.preventDefault(); const targetID = event.currentTarget.href.replace(/.+#/, ""); const element = document.getElementById(targetId); window.scrollTo({ behavior: "smooth", top: element?.getBoundingClientRec().top }); }) > Scroll to Top </Link>
```

##### Streamlining the title

Rather than constructing the title from the `event.currentTarget,` you can keep a constant in your code. That way it never has to re-read it from the DOM element.

```ts
const targetID = "title";

<Link href={`#${targetID}`}`
onClick={(event) => { event.preventDefault(); const element = document.getElementById(targetId); window.scrollTo({ behavior: "smooth", top: element?.getBoundingClientRec().top }); }) > Scroll to Top
</Link>
```

Re-using constants instead of accessing dynamic DOM attributes is generally a good idea. It’s less code you have to write. And it means you don’t have to risk reaching into the document (which users might have toyed with).

##### An alternative: React Refs

In theory, the code could avoid the `getElementById` call altogether by using a React “ref” (reference to some information separate from your React state). Refs can be used for a few things, so there are a couple of docs pages:

- [Referencing values with Refs](https://react.dev/learn/referencing-values-with-refs)
- [Manipulating the DOM with Refs](https://react.dev/learn/manipulating-the-dom-with-refs)
  Specifically, what can happen here is use a DOM reference to store the HTML `<h1>` in state, then pass it to the `ResultsDisplay` component as a prop:

```ts
const [title, setTitle] = useState<HTMLHeadingElement | undefined>(); // ...
return (
  <>
    {" "}
    <h1 ref={(element) => setTitle(element || undefined)}>...</h1> <ResultsDisplay title={title} />
  </>
);
```

Then, `ResultsDisplay` could call the element’s `.scrollIntoView`:

```ts
<Link onClick={() => { title?.scrollIntoView(); });
```

However this only works on Next.js client components, therefore:

##### Streamlining the Scroll

You can achieve this with even less code by avoiding `#title` altogether. Calling `document.body.scrollTo` and telling it `top: 0` will scroll to the top of the `<body>` element.

```ts
<Link href={`#${targetID}`} onClick={(event) => { event.preventDefault(); document.body.scrollTo({ behavior: "smooth", top: 0 }); }) > Scroll to Top </Link>
```

In this instance we need to use `document.body.scrollTo` rather than `window.scrollTo` as the `<body>` element has a vertical scrollbar. The owner of the app set a `height: 100%` in the body's CSS at some point for an unrelated styling reason.

```ts
<button onClick={() => { document.body.scrollTo({ behavior: "smooth", top: 0 }); }) > Scroll to Top </button>
```

This feature has taken on more of a `<button>` than `<Link>` element, so is updated accordingly.
