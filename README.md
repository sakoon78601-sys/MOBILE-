# Mobile Shop Pro — Website

Marketing & sales website for Mobile Shop Pro, Pakistan's #1 mobile shop management system.

## Pages

| File | URL |
|------|-----|
| `index.html` | Homepage (hero, features, testimonials) |
| `pages/pricing.html` | Plans, coupon codes, NayaPay payment |
| `pages/activate.html` | License activation & status check |
| `pages/partners.html` | Partner/affiliate registration & dashboard |

## Backend

All dynamic features (payment verification, license delivery, coupon validation, partner program) are powered by the Google Apps Script backend in `check.gs`.

**GAS URL** configured in `js/main.js` → `GAS_URL` constant.

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your site will be live at `https://yourusername.github.io/repo-name/`

## NayaPay Number

Update the NayaPay number in `pages/pricing.html` (search for `03XX-XXXXXXX`).

## Fonts

- **Syne** — display / headings
- **DM Sans** — body text

Both loaded from Google Fonts (no installation needed).
