import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { resolve } from "path";
import { readFileSync, unlinkSync } from "fs";

/**
 * Inline CSS Plugin — zero dependencies.
 * After Vite builds, reads the single CSS bundle, injects it as a <style>
 * tag into index.html <head>, and removes the .css file from dist/.
 * Only runs during `vite build` (production).
 */
function inlineCssPlugin(): Plugin {
  return {
    name: "inline-css",
    enforce: "post",
    apply: "build",
    generateBundle(_, bundle) {
      // Find the CSS asset
      const cssKey = Object.keys(bundle).find((k) => k.endsWith(".css"));
      if (!cssKey) return;
      const cssAsset = bundle[cssKey];
      if (cssAsset.type !== "asset") return;

      // Find the HTML asset
      const htmlKey = Object.keys(bundle).find((k) => k.endsWith(".html"));
      if (!htmlKey) return;
      const htmlAsset = bundle[htmlKey];
      if (htmlAsset.type !== "asset") return;

      // Inject CSS into <head> and remove the <link> tag
      const cssContent = typeof cssAsset.source === "string"
        ? cssAsset.source
        : new TextDecoder().decode(cssAsset.source);

      let html = typeof htmlAsset.source === "string"
        ? htmlAsset.source
        : new TextDecoder().decode(htmlAsset.source);

      // Remove the <link rel="stylesheet"> for this CSS file
      const linkRegex = new RegExp(
        `<link[^>]*href="[^"]*${cssKey.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`,
        "g"
      );
      html = html.replace(linkRegex, "");

      // Inject the CSS as a <style> block at the end of <head>
      html = html.replace("</head>", `<style>${cssContent}</style>\n</head>`);

      htmlAsset.source = html;

      // Remove the CSS file from the bundle
      delete bundle[cssKey];
    },
  };
}

export default defineConfig({
  plugins: [TanStackRouterVite(), react(), tailwindcss(), inlineCssPlugin()],
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
  build: {
    cssCodeSplit: false,
  },
});
