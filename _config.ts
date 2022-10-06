import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import sass from "lume/plugins/sass.ts";

const site = lume();

site.use(code_highlight());
site.use(sass());

export default site;
