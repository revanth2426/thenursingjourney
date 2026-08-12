// ============================================================================
//  SITE IMAGES — CONTROL EVERY IMAGE FROM THIS ONE FILE
// ============================================================================
//  This is the single source of truth for every image on the website.
//  Navbar, Footer, Hero, favicon, and the social-share (OG) image all read
//  from here — so you only ever edit THIS file to swap any picture.
//
//  HOW TO USE (step by step):
//
//  1. DROP THE FILE IN THE RIGHT FOLDER
//     - Big photos used by the site      ->  put them in  src/assets/
//     - Browser/favicon / public files   ->  put them in  public/
//
//  2. MAKE IT IMPORTABLE
//     For files inside src/assets you must add an import at the top of this
//     file (like the two below). Then point the entry's `src` at that import.
//     For files in public/ just write the path as a plain string, e.g.
//     "/favicon.png" (public files are NOT imported, they are served as-is).
//
//  3. FILL IN EACH FIELD
//     { src, alt, width, height, fileName, location, note }
//
//     src       -> how the browser loads the image (auto-fills from import)
//     alt       -> text shown if the image fails + read by screen readers
//                  (accessibility). Describe what the photo actually shows.
//     width     -> the image file's REAL width in pixels (intrinsic size).
//                  Used to stop the layout from jumping while it loads.
//     height    -> the image file's REAL height in pixels.
//     fileName  -> just the file name, for your reference.
//     location  -> where the file lives in the repo, for your reference.
//     note      -> where on the page it appears + recommended display size.
//
//  DIMENSION / FORMAT CHEAT SHEET (recommended):
//    - Logo (navbar ~44-48px circle, footer ~56px circle)
//        -> square PNG/JPG/SVG, at least 512x512, ideally 1024x1024 so it
//           stays sharp when the circle is scaled up.
//    - Hero portrait (right side of the top section)
//        -> portrait photo, roughly 4:5 to 5:6 ratio (e.g. 912x1104 like now).
//           Keep it under ~250 KB. Resize to ~1000px wide max; huge files
//           slow the page down.
//    - Favicon (browser tab icon)
//        -> square PNG, 32x32 or 48x48 (SVG/ICO also fine). Keep tiny.
//    - OG / social-share image (shown when your link is pasted on WhatsApp,
//      Instagram DM, Facebook, Twitter...)  -> 1200x630 px, JPG/PNG, < 1 MB.
//
//  SWAPPING AN IMAGE:
//    1. Put the new file in the folder above.
//    2. Update the `src` (and width/height/alt) for that entry here.
//    3. Done — Navbar, Footer and Hero update automatically.
// ============================================================================

// Imports for images stored in src/assets (add new ones here as needed):
import nursePortrait from "@/assets/profile.jpeg";
import logo from "@/assets/logo.jpg";

export type SiteImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fileName: string;
  location: string;
  note: string;
};

export const images = {
  logo: {
    src: logo,
    alt: "The Nursing Journey – Siva Naik logo",
    width: 1024,
    height: 1024,
    fileName: "logo.jpg",
    location: "src/assets/logo.jpg",
    note: "Shown in the Navbar (circular, ~44px) and Footer (~56px). Square image, 1024x1024.",
  },

  heroPortrait: {
    src: nursePortrait,
    alt: "Siva Naik, ICU Staff Nurse",
    width: 912,
    height: 1104,
    fileName: "nurse-portrait.jpg",
    location: "src/assets/nurse-portrait.jpg",
    note: "Hero section, right side. Portrait 4:5 / 5:6 ratio, max ~1000px wide, keep under ~250 KB.",
  },

  favicon: {
    src: "/favicon.png",
    alt: "",
    width: 32,
    height: 32,
    fileName: "favicon.png",
    location: "public/favicon.png",
    note: "Browser tab icon. Square PNG, 32x32 or 48x48, keep tiny.",
  },

  // OPTIONAL: social-share image for WhatsApp/Instagram/Facebook/Twitter.
  // Add it to the route meta (src/routes/index.tsx + src/routes/__root.tsx)
  // when ready. If you add a file here, put it in src/assets and import it above.
  // ogImage: {
  //   src: "...", // import from assets
  //   alt: "The Nursing Journey – Siva Naik",
  //   width: 1200,
  //   height: 630,
  //   fileName: "og-image.jpg",
  //   location: "src/assets/og-image.jpg",
  //   note: "Social-share card. MUST be 1200x630 px, < 1 MB.",
  // },
} satisfies Record<string, SiteImage>;
