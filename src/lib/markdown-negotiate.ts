import { SITE_PAGES, type SitePage } from "./site-pages";

const ACCEPT = "text/markdown";

function parseAcceptMarkdown(acceptHeader: string | null): boolean {
  if (!acceptHeader) return false;
  const parts = acceptHeader.split(",").map((p) => p.trim().toLowerCase());
  return parts.some((part) => part.startsWith("text/markdown"));
}

export async function tryServeMarkdown(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Check if this is a markdown request via Accept header or .md suffix
  const acceptHeader = request.headers.get("accept");
  const wantsMarkdown = parseAcceptMarkdown(acceptHeader) || pathname.endsWith(".md");
  if (!wantsMarkdown) return null;

  // Find matching page
  const page = SITE_PAGES.find(
    (p) => pathname === p.path || pathname === p.path + ".md",
  );
  if (!page) return null;

  // Return markdown with proper headers
  const markdown = page.markdown || generateMarkdown(page);
  const headers = new Headers({
    "content-type": "text/markdown; charset=utf-8",
    "vary": "Accept, Accept-Encoding",
    "cache-control": "public, max-age=3600",
  });

  return new Response(markdown, { headers });
}

function generateMarkdown(page: SitePage): string {
  return `# ${page.title}

> ${page.description}

## About

This page is part of The Nursing Journey by Siva Naik.

- Website: https://thenursingjourney.in
- WhatsApp: +91 94949 59401
- Email: contact@thenursingjourney.in

## Sitemap

- [Homepage](/)
- [About](/about)
- [Services](/services)
- [Resources](/resources)
- [Why Us](/why-us)
- [Contact](/contact)
- [Privacy Policy](/privacy-policy)
- [Terms of Service](/terms-of-service)
- [Refund Policy](/refund-policy)
`;
}
