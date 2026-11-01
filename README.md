# Serrurier Ali website

## Run the site

- `npm install` installs dependencies.
- `npm run dev` starts the local development server.
- `npm run build` checks and builds the production site.

## Where to make edits

- **Business name, phone, email, images, enabled sections, and verified business details:** `src/data/businessInfo.js`
- **Service cards:** `src/data/services.js`
- **All French and English text:** `src/data/translations.js`
- **Brand colors, typography, spacing, and responsive styles:** `src/styles/global.css` (`:root` contains the main color and sizing variables)
- **Page section order:** `src/App.jsx`
- **Individual section layouts:** `src/components/`

The service-area section appears when `features.serviceArea` is enabled and at least one entry has been added to `serviceAreas`. Emergency content is controlled by `features.emergencySection`. Availability, response times, licensing, insurance, and qualifications only appear when their corresponding `confirmed` setting is enabled and text has been supplied.

The reusable SVG logo is in `src/components/BrandLogo.jsx`; the matching browser favicon is `public/favicon.svg`.

## Privacy policy

The page is available at `/privacy-policy`. Paste the separately supplied French and English policy text into the `policyText` values in `src/data/privacyPolicy.js`. Replace the date, privacy contact details, and responsible person's title in that same file. The page intentionally contains no drafted policy language.
