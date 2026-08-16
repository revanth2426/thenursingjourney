import { Link } from "@tanstack/react-router";

export function TermsOfServiceLink() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground">
          Need our Terms of Service?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Review our terms and conditions for using our services.
        </p>
        <div className="mt-6">
          <Link
            to="/terms-of-service"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-neon-soft px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neon-soft/90"
          >
            Read Terms of Service
          </Link>
        </div>
      </div>
    </section>
  );
}