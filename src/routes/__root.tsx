import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { images } from "../data/site-images";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Agent recovery links */}
        <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4 text-left">
          <p className="mb-2 text-sm font-semibold text-foreground">Looking for something?</p>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/" className="text-primary hover:underline">
                → Homepage
              </a>
            </li>
            <li>
              <a href="/sitemap.xml" className="text-primary hover:underline">
                → Sitemap
              </a>
            </li>
            <li>
              <a href="/llms.txt" className="text-primary hover:underline">
                → Agent Instructions
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "The Nursing Journey – Siva Naik",
      description: "Nursing study materials, council registration assistance, and career guidance for nursing students and professionals in India.",
      url: "https://thenursingjourney.in/",
      telephone: "+91-94949-59401",
      areaServed: ["Andhra Pradesh", "Telangana"],
      founder: {
        "@type": "Person",
        name: "Siva Naik",
        jobTitle: "ICU Staff Nurse",
        sameAs: [
          "https://www.linkedin.com/in/siva-naik",
          "https://twitter.com/nursing_sivanaik",
          "https://www.instagram.com/nursing_sivanaik",
          "https://www.youtube.com/@thenursingjourney",
        ],
      },
      sameAs: [
        "https://www.instagram.com/nursing_sivanaik",
        "https://www.youtube.com/@thenursingjourney",
        "https://www.threads.net/@nursing_sivanaik",
        "https://t.me/thenursingjourney",
      ],
    };

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "author", content: "Siva Naik" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://thenursingjourney.in/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", type: "image/png", href: images.favicon.src },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap",
        },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(jsonLd),
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#home")?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="sr-only focus:not-sr-only focus:fixed focus:inset-x-0 focus:top-0 focus:z-[100] focus:bg-primary focus:py-3 focus:text-center focus:text-primary-foreground focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
