# imler.co

Portfolio site for Frank Imler, Creative Director.

Single static page (`index.html`). Project content and images pull from Frank's Adobe Portfolio (frankimler.myportfolio.com), so case studies are edited there.

Hosted on GitHub Pages. `CNAME` points the site at imler.co.

## Hours (`/hours/`)

`hours/index.html` is a private freelance time tracker (clients, projects, start/stop timer, manual entries, reports, CSV export) styled to match the site. It's a single self-contained file, served at imler.co/hours/ and marked `noindex` so search engines skip it. Entries are saved in the browser's localStorage, so they stay on the device you use; the Clients tab has backup and restore.

## October 2026 Conference Jeopardy (`/26jeopardy/`)

`26jeopardy/index.html` is a self-contained Jeopardy game built from the October 2026 General Conference talks: a 6×5 board, team scoring, a hidden Daily Double and Final Jeopardy. Marked `noindex`. Game progress is saved in the browser's localStorage; "New game" resets it.
