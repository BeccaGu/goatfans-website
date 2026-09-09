# GOATFANS — GitHub Pages v3

Four complete static pages: Home (`index.html`), Services (`services.html`), Work (`work.html`) and About (`about.html`). No build step, package installation, font files or logo image needed. The wordmark is ordinary GOATFANS text with both A letters normal.

## Publish on GitHub Pages

1. Unzip the download. Upload the **contents** of `goatfans-v3` to your repository root (or the folder already configured for Pages). Keep the `assets` folder structure intact.
2. Upload your five photos to `assets/images/`, using exactly the lowercase names below. The original photos were not available in this task, so they are not included in this ZIP. Reserved image spaces display neutral captions until you add them. Do not replace existing photographs with the empty image directory when updating an existing repository.
3. In the repository’s Settings → Pages, choose the branch and root folder containing `index.html`, then save. If Pages is already configured, keep your existing publishing setup.
4. Keep an existing `CNAME` file if you use a custom domain; none is invented here.

All internal URLs are relative, so the site works at both a domain root and a GitHub project subpath.

## The only required images

| Filename | Placement | Suggested shape |
| --- | --- | --- |
| `home-hero.jpg` | Home, after the eyebrow | Landscape, 16:9 |
| `home-secondary.jpg` | Home, after “Independent music.” | Landscape, 16:9 |
| `playlist-cover.jpg` | Home, left of playlist copy | Square |
| `about-goatfans.jpg` | About, above the origin story | Landscape, 16:9 |
| `about-chris.jpg` | About, Chris profile | Portrait, 4:5 |

Aim for roughly 1600–2400 pixels wide and sensible compression. Cropping uses `object-fit: cover`; adjust `object-position` in CSS if needed. No Work images or logo PNG are referenced. You may delete your old logo PNG.

## Typography and layout

Headings and wordmark: Futura, Futura PT, Century Gothic, Avenir Next, Arial, sans-serif. Body and UI: Helvetica, Helvetica Neue, Arial, sans-serif. Futura and Helvetica depend on fonts installed on the visitor’s device; no fonts are downloaded. Tight tracking, large editorial images and responsive layouts are included. The playlist stays image-left/copy-right on desktop and image-first on mobile.

## Links and embeds

The original Bilibili, RED, Douyin, YouTube and Apple Music playlist destinations are preserved, plus Chris’s Instagram and Apple Music links. Work order is Teddy Swims, Cleo Sol, Fender, Dunoon. Teddy uses a Bilibili player; Cleo and Fender use YouTube privacy-enhanced players, including Fender’s 3-second start. Each player has a direct watch link. Video covers come from the platforms; no thumbnail downloads are needed. Playback may depend on region, platform policy or browser settings.

Dunoon retains the agreed temporary GOATFANS Bilibili profile link, labelled as a profile destination rather than a project video. Replace that link in the Dunoon article in `work.html` when the final video URL is supplied. Cleo uses the agreed three paragraphs and editorial metadata, with no claim of official collaboration.

All contact links use `info@goatfans.com`. The footer on all pages reads “London, UK / Shenzhen, China”.

## Verification

See `VERIFICATION.md` for route, asset, link and content checks, including missing supplied photos and any third-party checks that could not be confirmed. No third-party page availability or embedded playback is guaranteed by local checks.
