// ============================================================================
//  RESOURCE LIBRARY DATA — single source of truth for all resource tiles
// ============================================================================
//  HOW TO EDIT
//  -----------
//  1. SHOW / HIDE a tile entirely  →  set `enabled: false`
//  2. SHOW / HIDE action buttons   →  toggle `instagramEnabled`, `downloadEnabled`,
//     or `telegramEnabled` on each entry.
//  3. ADD a new resource           →  push a new object to the `resources` array
//     with a unique `id`. Set `enabled: true` and the URLs you want.
//  4. REMOVE a resource            →  set `enabled: false` (or delete the entry).
//  5. DOWNLOAD / TELEGRAM URLs     →  set `downloadUrl` / `telegramUrl` per tile,
//     or leave them empty and use the defaults from `links.ts`.
//  6. CATEGORIES are auto-derived from enabled resources — no manual list needed.
// ============================================================================

import { resourceLinks } from "@/data/links";

export type ResourceCategory =
  | "Mental Health"
  | "Anatomy"
  | "Foundation"
  | "Adult Health"
  | "Pathology"
  | "Pharmacology"
  | "Community Health"
  | "Nursing Education";

export type Resource = {
  id: string;
  /** Master toggle — tile is completely removed when false. */
  enabled: boolean;
  subject: string;
  semester: string;
  units: string;
  category: ResourceCategory;
  tag: "Notes" | "Important Questions" | "MCQs";
  tags: string[];
  instagramUrl: string;
  instagramEnabled: boolean;
  /** Leave empty to fall back to `resourceLinks.defaultDownloadUrl`. */
  downloadUrl?: string;
  downloadEnabled: boolean;
  /** Leave empty to fall back to `resourceLinks.defaultTelegramUrl`. */
  telegramUrl?: string;
  telegramEnabled: boolean;
};

export const resources: Resource[] = [
  {
    id: "mhn-1",
    enabled: true,
    subject: "Mental Health Nursing I",
    semester: "5th Semester",
    units: "Unit I–IV",
    category: "Mental Health",
    tag: "Notes",
    tags: ["mood disorders", "neurotic disorders", "schizophrenia", "psychiatry"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    // The PDF file for Mental Health Nursing I is not uploaded yet. Per the
    // convention in `src/data/links.ts` (defaultDownloadUrl), downloads fall
    // back to the Telegram channel where the notes are shared until the file
    // is published. Replace with "/downloads/mental-health-nursing-1.pdf"
    // here once the PDF is added to `public/downloads/`.
    downloadUrl: "https://t.me/thenursingjouneryWithSIVANAIK",
    telegramEnabled: false,
  },
  {
    id: "mhn-2",
    enabled: true,
    subject: "Mental Health Nursing II",
    semester: "6th Semester",
    units: "Unit V–VIII",
    category: "Mental Health",
    tag: "Important Questions",
    tags: [
      "substance use disorders",
      "personality disorders",
      "organic brain disorders",
      "psychiatric emergencies",
      "crisis intervention",
    ],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "anat-1",
    enabled: true,
    subject: "Human Anatomy — All Major Organs",
    semester: "1st Semester",
    units: "Full Series",
    category: "Anatomy",
    tag: "Notes",
    tags: ["heart", "lungs", "brain", "kidney", "liver", "anatomy"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "nf-1",
    enabled: true,
    subject: "Nursing Foundation I",
    semester: "1st Semester",
    units: "Unit 1–7",
    category: "Foundation",
    tag: "Important Questions",
    tags: ["fundamentals", "nursing process", "vital signs"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "nf-2",
    enabled: true,
    subject: "Nursing Foundation II",
    semester: "2nd Semester",
    units: "Unit 1–9",
    category: "Foundation",
    tag: "Notes",
    tags: ["procedures", "infection control", "documentation"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "ahn-1",
    enabled: true,
    subject: "Adult Health Nursing I",
    semester: "3rd Semester",
    units: "Unit 1–10",
    category: "Adult Health",
    tag: "Important Questions",
    tags: ["medical surgical", "cardiac", "respiratory", "gi"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "path-1",
    enabled: true,
    subject: "Pathology & Genetics",
    semester: "4th Semester",
    units: "Unit 1–8",
    category: "Pathology",
    tag: "Notes",
    tags: ["inflammation", "neoplasia", "genetics"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "pharm-1",
    enabled: true,
    subject: "Pharmacology I",
    semester: "4th Semester",
    units: "Unit 1–6",
    category: "Pharmacology",
    tag: "MCQs",
    tags: ["drugs", "dosage", "antibiotics"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "pharm-2",
    enabled: true,
    subject: "Pharmacology II",
    semester: "5th Semester",
    units: "Unit 1–7",
    category: "Pharmacology",
    tag: "Important Questions",
    tags: ["cns drugs", "cvs drugs", "chemotherapy"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "chn-1",
    enabled: true,
    subject: "Community Health Nursing I",
    semester: "5th Semester",
    units: "Unit 1–9",
    category: "Community Health",
    tag: "Notes",
    tags: ["primary health care", "epidemiology", "national programmes"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "edu-1",
    enabled: true,
    subject: "Educational Technology & Nursing Education",
    semester: "5th Semester",
    units: "Unit 1–8",
    category: "Nursing Education",
    tag: "Important Questions",
    tags: ["teaching methods", "av aids", "curriculum"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
  {
    id: "norcet-1",
    enabled: true,
    subject: "AIIMS NORCET Rapid Revision",
    semester: "Exam Prep",
    units: "MCQ Series",
    category: "Foundation",
    tag: "MCQs",
    tags: ["norcet", "aiims", "competitive exam", "practice"],
    instagramUrl: "https://www.instagram.com/nursing_sivanaik",
    instagramEnabled: true,
    downloadEnabled: false,
    telegramEnabled: false,
  },
];

// ---------------------------------------------------------------------------
//  CATEGORIES — auto-derived from enabled resources so removing a resource
//  automatically removes its category if no other resource uses it.
// ---------------------------------------------------------------------------
export const resourceCategories: ("All" | ResourceCategory)[] = [
  "All",
  ...Array.from(
    new Set(resources.filter((r) => r.enabled).map((r) => r.category)),
  ),
];
