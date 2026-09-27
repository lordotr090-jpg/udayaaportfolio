# G. Udayaa Kumar — Portfolio Website

A static portfolio site: plain HTML, CSS and JavaScript. No build step, no backend,
no API keys, no paid services.

## Files

```
index.html                    ← page content
css/style.css                 ← all styling
js/script.js                  ← renders the project grid + filters, mobile menu
js/projects-data.js           ← ⭐ EDIT THIS to add your real projects
assets/resume/Resume_G_Udayaa.pdf   ← your résumé (already in place; the
                                       "Download résumé" button links to it)
assets/images/                ← put project thumbnail images here
```

## How to add your real work

Open `js/projects-data.js`. Each project is one block like this:

```js
{
  title: "Wedding Photography — Add your project name",
  category: "Photography",
  description: "Replace this with a short description of a real wedding or event shoot.",
  thumbnail: "",
  link: DRIVE_FOLDER_URL
}
```

- **category** must be exactly one of: `Photography`, `Graphic Design`, `Photo Editing`, `Video`, `Social Media`.
- **thumbnail** — either:
  - leave `""` to show a placeholder card that says "add a thumbnail", or
  - put an image file in `assets/images/` and set this to `"assets/images/yourfile.jpg"`, or
  - use a public Google Drive image: right-click the file → Share → "Anyone with the
    link" → copy the file ID from the link → use
    `"https://drive.google.com/thumbnail?id=FILE_ID&sz=w800"`.
- **link** — the Google Drive folder or file link for that specific project (right-click
  in Drive → Share → make sure link sharing is on → Copy link). Leaving it as
  `DRIVE_FOLDER_URL` sends people to your main portfolio folder until you add a
  specific link.

Add or remove `{ ... }` blocks freely — the page rebuilds the grid and category
filters automatically from this file. Never put private/restricted Drive links here;
only share links that are safe for a visitor to open.

## Before you publish, double check

- [ ] Every placeholder project (titled "Add your project name") is replaced or removed
- [ ] Every Drive link is set to "Anyone with the link can view"
- [ ] Your résumé PDF in `assets/resume/` is your latest version
- [ ] Thumbnails are your own images (avoid anything copyrighted that isn't yours)

## Deploy — GitHub Pages (free)

1. Create a new GitHub repository and push this folder to it:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. On GitHub, go to your repo → **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch", branch
   `main`, folder `/ (root)`. Save.
4. GitHub gives you a URL like `https://YOUR_USERNAME.github.io/YOUR_REPO/` within a
   few minutes.

## Deploy — Cloudflare Pages (free)

1. Push the project to GitHub (steps above).
2. Go to the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to
   Git**, and pick your repository.
3. Build settings: leave **Framework preset** as "None", **Build command** empty,
   **Build output directory** set to `/` (the repo root, since this is a static site
   with no build step).
4. Click **Save and Deploy**. Cloudflare gives you a `*.pages.dev` URL, and you can
   attach a custom domain for free afterwards under the project's "Custom domains" tab.

## Deploy — Vercel (free tier — check the terms first)

1. Push the project to GitHub.
2. Go to vercel.com → **Add New → Project** → import the repository.
3. Framework preset: "Other". Leave build command and output directory blank/default
   for a static site — Vercel will serve the files as-is.
4. Deploy; Vercel gives you a `*.vercel.app` URL.

**Before using Vercel for this:** Vercel's free "Hobby" plan is intended for personal,
non-commercial use, and its terms have changed over time regarding freelance/commercial
sites. Since this site exists partly to attract paid freelance work, check Vercel's
current Terms of Service / plan page yourself before relying on the free tier for that
purpose — GitHub Pages and Cloudflare Pages don't carry that restriction, which is why
they're listed first.

## Notes

- The site is fully responsive (phone/tablet/desktop), keyboard-navigable, and
  respects the operating system's "reduce motion" setting.
- All content (bio, skills, work history, education, contact details) is taken
  directly from the résumé you provided — update `index.html` directly if any of
  those facts change.
