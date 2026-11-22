// @ts-check
import { defineConfig } from "astro/config";
import { siteUrl } from "./src/lib/site.ts";

// Fully static: Cloudflare serves dist/ as assets (wrangler.jsonc).
export default defineConfig({
  site: siteUrl,
  // `contact.html`, not `contact/index.html`, so pages live at their no-slash address.
  build: { format: "file" },
  trailingSlash: "never",
});
