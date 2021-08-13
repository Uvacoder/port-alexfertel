const fs = require("fs");

const globby = require("globby");

(async () => {
  const pages = await globby(["pages/*.tsx", "!pages/_*.tsx"]);

  const sitemap = pages
    .map((page) => {
      const path = page.replace("pages", "").replace(".tsx", "");
      const route = path === "/index" ? "" : path;

      return `https://alexfertel.vercel.app${route}`;
    })
    .join("\n");

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/sitemap.txt", sitemap);
})();
