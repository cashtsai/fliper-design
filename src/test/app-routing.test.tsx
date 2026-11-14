import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

const paths = ["/", "/brand-story", "/design-heritage", "/foundations/logo", "/foundations/accessibility", "/foundations/color", "/foundations/typography", "/foundations/spacing", "/foundations/motifs", "/components/byline", "/components/editors-note", "/components/code-mark", "/components/cover-card", "/components/kicker", "/components/buttons", "/cover-system", "/patterns", "/platforms"];

describe("App routing", () => {
  it.each(paths)("matches a page for %s", (p) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes(p).at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
