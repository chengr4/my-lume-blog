import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(jsx_preact());
site.use(code_highlight());
site.use(tailwindcss());
site.use(postcss());
site.ignore("README.md");

export default site;
