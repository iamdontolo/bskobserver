# BSK Observer — Online Newspaper Website

A responsive, animated, multi-page newspaper website for **BSK Observer**, Sierra Leone's independent digital newspaper.

## Run locally

Click the preview link below or paste in your browser:


https://iamdontolo.github.io/bskobserver/index.html



## Structure

- `index.html` — Home page with hero, top stories, categories, daily-rotating feed, newsletter, trust band
- `about.html`, `contact.html`, `categories.html`, `live-tv.html`, `advertise.html`,
  `submit-story.html`, `donate.html`, `faq.html`, `editorial-policy.html`
- `css/styles.css` — design system + components
- `js/layout.js` — shared header/footer/nav/ticker (injected into every page)
- `js/stories.js` — sample article data (rotates daily on the front page)
- `js/main.js` — mobile nav, scroll reveal, newsletter/form handlers, back-to-top, daily feed rendering
- `assets/` — logo and photojournalism imagery

## Daily updates

The "Latest — Updated Daily" grid uses `js/stories.js` and reorders itself
each calendar day, so the front page shows a fresh selection every 24 hours
with no manual edits. Add or replace entries in `js/stories.js` to publish
new posts.

## Editing content

All copy is inline in the HTML files. Update headlines, sections, and links
directly. The design system tokens live at the top of `css/styles.css`.

© 2025 BSK Observer · A publication of BSK TV Network.
