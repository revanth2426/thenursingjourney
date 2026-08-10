import { useMemo, useState } from "react";
import { Search, Instagram, Youtube, ExternalLink, Layers, Download, Send } from "lucide-react";

import { resources, resourceCategories } from "@/data/resources";
import { socials, resourceLinks } from "@/data/site";
import { Reveal } from "@/components/Reveal";

/** How many resource tiles to reveal per "load more" click. */
const PAGE_SIZE = 5;

export function ResourceLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof resourceCategories)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Only enabled resources are shown and used to derive categories.
  const enabledResources = useMemo(() => resources.filter((r) => r.enabled), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return enabledResources.filter((r) => {
      const inCategory = category === "All" || r.category === category;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = [r.subject, r.semester, r.units, r.category, r.tag, ...r.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category, enabledResources]);

  const shown = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  // Reset visible count when filters change
  const handleCategoryChange = (c: (typeof resourceCategories)[number]) => {
    setCategory(c);
    setVisibleCount(PAGE_SIZE);
  };

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section id="resources" className="bg-card py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-center font-display text-3xl sm:text-4xl">
            Free Nursing <span className="text-gradient-gold">Study Resources</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Unit-wise notes, MCQs & important questions — straight from our Instagram
            classroom.
          </p>
        </Reveal>

        {/* ---- Search bar ---- */}
        <Reveal delay={80}>
          <div className="mx-auto mt-8 max-w-xl">
            <label htmlFor="resource-search" className="sr-only">
              Search study resources
            </label>
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                aria-hidden
              />
              <input
                id="resource-search"
                type="search"
                value={query}
                onChange={(e) => handleQueryChange(e.target.value)}
                placeholder="Search a subject, unit or topic — e.g. Anatomy, Unit 3, NORCET"
                className="min-h-12 w-full rounded-full border border-input bg-background pr-4 pl-12 text-sm outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40"
              />
            </div>
          </div>
        </Reveal>

        {/* ---- Category filter pills ---- */}
        <Reveal delay={120}>
          <ul className="mt-5 flex flex-wrap justify-center gap-2">
            {resourceCategories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => handleCategoryChange(c)}
                  aria-pressed={category === c}
                  className={`inline-flex min-h-11 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                    category === c
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground/80 hover:border-ring hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---- Resource grid + Load More tile ---- */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((r, i) => (
            <Reveal
              key={r.id}
              as="li"
              delay={Math.min(i, 6) * 60}
              className="h-full"
            >
              <article className="card-soft hover-lift flex h-full flex-col overflow-hidden">
                {/* Category header strip */}
                <div className="surface-space starfield flex min-w-0 items-center gap-2 px-5 py-3">
                  <Layers className="h-4 w-4 shrink-0 text-neon-soft" aria-hidden />
                  <span className="min-w-0 truncate text-[0.7rem] font-semibold tracking-[0.2em] text-primary-foreground/90 uppercase">
                    {r.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg leading-snug">{r.subject}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {r.semester}
                    </span>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {r.units}
                    </span>
                    <span className="rounded-full bg-accent/25 px-3 py-1 text-xs font-bold text-accent-foreground">
                      {r.tag}
                    </span>
                  </div>

                  {/* ---- Action buttons ---- */}
                  <div className="mt-5 flex flex-wrap gap-3">
                    {r.instagramEnabled && (
                      <a
                        href={r.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-semibold text-council transition-colors hover:border-ring hover:text-navy-ink focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <Instagram className="h-3.5 w-3.5" aria-hidden />
                        Instagram
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
                    )}

                    {r.downloadEnabled && (r.downloadUrl || resourceLinks.defaultDownloadUrl) && (
                      <a
                        href={r.downloadUrl || resourceLinks.defaultDownloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-background px-3.5 text-xs font-semibold text-studies transition-colors hover:border-ring hover:text-navy-ink focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden />
                        Download
                      </a>
                    )}

                    {r.telegramEnabled && (r.telegramUrl || resourceLinks.defaultTelegramUrl) && (
                      <a
                        href={r.telegramUrl || resourceLinks.defaultTelegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-council/40 bg-council/10 px-3.5 text-xs font-semibold text-council transition-colors hover:bg-council/20 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                      >
                        <Send className="h-3.5 w-3.5" aria-hidden />
                        Telegram
                        <ExternalLink className="h-3 w-3" aria-hidden />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* ---- "Explore More" tile (only when more items exist) ---- */}
          {hasMore && (
            <li className="h-full">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="card-soft hover-lift flex h-full min-h-[14rem] flex-col items-center justify-center gap-3 border-2 border-dashed border-border p-7 text-center transition-colors hover:border-ring"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" aria-hidden />
                </span>
                <span className="font-display text-base font-semibold text-foreground">
                  Explore More
                </span>
                <span className="text-xs text-muted-foreground">
                  Show {Math.min(PAGE_SIZE, filtered.length - visibleCount)} more
                  resources
                </span>
              </button>
            </li>
          )}
        </ul>

        {/* ---- Empty state ---- */}
        {filtered.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            No resources matched your search. Try another subject or unit.
          </p>
        )}

        {/* ---- Instagram / YouTube CTA banner ---- */}
        <Reveal delay={100}>
          <div className="surface-space starfield mt-12 grid gap-5 rounded-3xl p-7 text-center sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:text-left">
            <p className="mx-auto font-display text-lg leading-snug text-primary-foreground sm:text-xl">
              New notes and MCQs posted regularly — follow along on{" "}
              <span className="text-gradient-gold">Instagram & YouTube</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full px-5 font-semibold text-navy-deep transition-transform hover:scale-[1.03]"
                style={{ backgroundImage: "var(--gradient-gold)" }}
              >
                <Instagram className="h-5 w-5" aria-hidden />
                Instagram
              </a>
              <a
                href={socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-neon/50 bg-neon/10 px-5 font-semibold text-primary-foreground transition-colors hover:bg-neon/20"
              >
                <Youtube className="h-5 w-5" aria-hidden />
                YouTube
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
