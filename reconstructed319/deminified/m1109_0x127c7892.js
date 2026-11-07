// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { readFileSync as i } from "fs";
import { readFile as d } from "fs/promises";
import { isAbsolute as c, join as u } from "path";
var g = [40, 181, 47, 253];
function s(r) {
  return r.length >= 4 && g.every((item, index) => r[index] === item);
}
function o(r, t) {
  return c(r) ? r : u(t, r);
}
async function NAt(r, t) {
  let e = await d(o(r, t));
  return (s(e) ? await Bun.zstdDecompress(e) : e).toString("utf8");
}
function wt(r, t) {
  return d7o(r, t).toString("utf8");
}
function d7o(r, t) {
  let path = o(r, t);
  try {
    let n = i(path);
    return s(n) ? Bun.zstdDecompressSync(n) : n;
  } catch (n) {
    throw Object.assign(Error("embedded asset is missing or corrupt", {
      cause: n
    }), {
      path: path
    });
  }
}
export { NAt, wt, d7o };