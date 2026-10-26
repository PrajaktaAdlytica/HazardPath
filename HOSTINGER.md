# Host HazardPath on ordinary Hostinger PHP/HTML hosting

This React/Vite site compiles into static HTML, CSS, JavaScript, images and videos. It does not need a Node.js web-app slot, a running Node server, PHP conversion or a database. Forms and sign-in remain explicitly labelled frontend previews; hosting does not activate email delivery or authentication.

You still need an active web/cloud hosting plan with an available ordinary website slot. Domain registration alone does not provide hosting. A full ordinary-website allowance cannot be bypassed by selecting PHP.

## Connect GitHub (recommended)

1. In hPanel, open Websites and select **Add website / Create website** on the hosting plan.
2. Choose **Custom PHP/HTML website** or the equivalent empty/custom site option. Do not choose Node.js web app, Horizons or Website Builder.
3. Select your already-purchased domain. If it already belongs to a live site, back up that site and resolve its assignment before replacing anything.
4. Open the new website's Dashboard → Advanced → Git. On the newer UI, click **Connect with GitHub**, authorize access to `PrajaktaAdlytica/HazardPath`, and select the repository.
5. Choose branch **hostinger**, not `main`. The `main` branch contains editable source. The `hostinger` branch contains compiled deployable files, including `index.html` and `.htaccess` at its root.
6. Deploy into the website's **public_html** document root. On the legacy form, leave the install-directory field empty to use public_html; on newer forms, select public_html if it asks for a destination. Do not create a nested public_html/public_html folder.
7. First deployment needs an empty destination. Back up existing content first; remove only the new site's default placeholder if applicable. Do not upload the ZIP first if using Git.
8. Click Deploy. Enable automatic deployment if available. New GitHub App connections support push deployment. In the legacy interface, configure the supplied auto-deploy webhook in GitHub as documented by Hostinger.
9. For a private repo on the legacy interface, generate the site's SSH key in hPanel, add its public key to this repository under Settings → Deploy keys (read-only access is enough), and use `git@github.com:PrajaktaAdlytica/HazardPath.git`.
10. The repository's GitHub Actions workflow builds on pushes to `main`, runs tests, then updates `hostinger`. Wait for **Build Hostinger static branch** to succeed before triggering a manual Hostinger deployment. If your account disables Actions, use the ZIP alternative below.

Hostinger's ordinary Git deployment serves files; it does not run the Vite build for you. This is why the separate compiled branch is necessary.

## Connect the purchased domain

If the domain and hosting are in the same Hostinger account, select that domain during setup and follow the connection prompt. If hPanel reports it is not pointing to the hosting, use the DNS values shown for this specific hosting plan. Do not guess IP addresses or nameservers. Preserve existing email MX/TXT records. Once connected, check SSL in the website dashboard and confirm both your apex domain and www work over HTTPS. DNS propagation may take time.

## Manual ZIP alternative

Use the supplied `HazardPath-Hostinger.zip`. Open the website File Manager → public_html, back up existing content, upload and extract the ZIP directly there. The result must be `public_html/index.html`, alongside `assets/`, `art/`, `brand/`, `video/` and `.htaccess`. Remove or rename only a conflicting default placeholder such as `default.php` after backing it up.

To build a new upload locally: `npm ci`, then `npm run build`. Upload the **contents of dist/client/**, not the whole repository, `dist/server/`, or a folder named dist. Ensure hidden `.htaccess` is included. The included rewrite rules make direct visits and refreshes on routes such as `/products/climate-desk` work.

## Check after deployment

- Open the homepage in a fresh tab: intro plays once and disappears.
- Navigate away and return using site links: intro stays dismissed.
- Reload/open the homepage afresh: intro can play again.
- Test a direct nested URL and refresh it.
- Check at phone and desktop widths, the menu, video loading, favicon, HTTPS and form preview messages.
- If changes appear stale, clear Hostinger's site cache and reload.

## Official sources (researched 26 October 2026)

- https://www.hostinger.com/support/1583214-how-to-add-a-website-in-hostinger/
- https://docs.hostinger.com/websites/git
- https://www.hostinger.com/support/1583302-how-to-deploy-a-git-repository-in-hostinger/
- https://www.hostinger.com/support/6976044-parameters-and-limits-of-hosting-plans-in-hostinger/
- https://www.hostinger.com/support/how-to-upload-a-website-from-backups/

Hostinger UI labels and Git features can differ by account. This handoff does not claim that hosting, DNS or SSL has been configured in your account.
