# The Crew Reborn

Project site for a fan project that brings The Crew (2014) back to life on PS4, offline on your own home server.

Live: https://thecrewreborn.github.io/

## Editing

- Videos and screenshots: `assets/content.js`. The first video shows large; more videos appear as a list below it.
- Screenshots go in `assets/shots/`, then get an entry in `assets/content.js`.
- Page text: English in `index.html`, German in `assets/site.js`. Both use the same `data-i18n` keys.
- After changing CSS or JS, bump the `?v=` number on the three asset links in `index.html`, so browsers skip their cached copy.
- Preview locally: `python3 -m http.server` in this folder.

The YouTube player loads only after a click, so the page sets no third-party cookies before that.

The Crew is a trademark of Ubisoft Entertainment. PlayStation and PS4 are trademarks of Sony Interactive Entertainment. This project is not affiliated with or endorsed by Ubisoft or Sony.
