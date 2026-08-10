# Richard Sartell Engineering Portfolio

Static portfolio website for Richard "Thai" Sartell, designed for GitHub Pages and focused on embedded systems, Linux systems engineering, electronics, PCB work, firmware verification, and hardware/software interfaces.

## Preview Locally

No build step is required.

Open `index.html` directly in a browser, or run a small local server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Edit Project Text

Homepage project summaries live in `index.html` under the `#projects` section.

Detailed case-study scaffolds live in:

- `projects/syndex.html`
- `projects/linux-internet-connection-sharing.html`
- `projects/smart-network-attached-storage.html`
- `projects/electrocardiogram-acquisition-system.html`

Search for `TODO` to find placeholder URLs, missing media, and sections that need confirmed details.

## Add Images And Media

Place public portfolio assets in:

- `assets/images/` for photos, screenshots, Open Graph images, and favicon updates
- `assets/diagrams/` for exported architecture diagrams, schematics, or PCB visuals
- `assets/resume/` for resume PDFs

Use approved project photos, architecture diagrams, PCB screenshots, oscilloscope captures, test plots, or short videos/GIFs. Do not add proprietary product screenshots, internal network diagrams, source code, IP addresses, customer information, or confidential client artifacts.

## Replace Placeholder URLs

In `index.html`, replace:

- GitHub `href="#"` links
- LinkedIn `href="#"` links
- `mailto:your.email@example.com`

The current JavaScript prevents placeholder links from navigating and shows a short notice.

## Enable GitHub Pages

1. Commit and push this repository to GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` > `Pages`.
4. Under `Build and deployment`, choose `Deploy from a branch`.
5. Select the `main` branch and `/ (root)` folder.
6. Save. GitHub Pages will publish the static site from `index.html`.

## Add A Custom Domain Later

1. Add the custom domain in `Settings` > `Pages`.
2. Create a `CNAME` file at the repo root containing only the domain name, for example:

```txt
www.example.com
```

3. Configure DNS with your domain provider using GitHub Pages' current DNS instructions.
4. Revisit `Settings` > `Pages` and enable HTTPS once DNS is verified.
