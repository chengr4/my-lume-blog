import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import sass from "lume/plugins/sass.ts";
import date from "lume/plugins/date.ts";

const site = lume();

site.use(code_highlight());
site.use(sass());
site.use(date());

export default site;
