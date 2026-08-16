import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { isSection } from "./lib/section-nav";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Section routes (/about, /services, …) scroll to their own section after
    // mount; the router's restoration scroll-to-top would cancel that, so opt
    // them out per-location. Everything else keeps default behavior.
    scrollRestoration: ({ location }) => !isSection(location.pathname.slice(1)),
    defaultPreloadStaleTime: 0,
  });

  return router;
};
