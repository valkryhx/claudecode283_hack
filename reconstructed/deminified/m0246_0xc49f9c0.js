// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { readFileSync as o } from "fs";
import { readFile as i } from "fs/promises";
import { isAbsolute as d, join as c } from "path";
var u = [40, 181, 47, 253];
function s(r) {
  return r.length >= 4 && u.every((item, index) => r[index] === item);
}
function BWn(r, t) {
  return d(r) ? r : c(t, r);
}
async function Gge(r, t) {
  let e = await i(BWn(r, t));
  return (s(e) ? await Bun.zstdDecompress(e) : e).toString("utf8");
}
function je(r, t) {
  return WIr(r, t).toString("utf8");
}
function WIr(r, t) {
  let path = BWn(r, t);
  try {
    let n = o(path);
    return s(n) ? Bun.zstdDecompressSync(n) : n;
  } catch (n) {
    throw Object.assign(Error("embedded asset is missing or corrupt", {
      cause: n
    }), {
      path: path
    });
  }
}
export { BWn, Gge, je, WIr };