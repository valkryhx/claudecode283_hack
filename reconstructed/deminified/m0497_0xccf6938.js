// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { b, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { o, C, u, ut, z } from "B:/~BUN/root/chunk-n8qdr73v.js";
var c = "ui://",
  d = "ui/resourceUri",
  p = 4096,
  _ = "mcp-app",
  g = 1024,
  l = "[!#$%&'*+.^_`|~0-9A-Za-z-]+",
  regExp = new RegExp(`^[ \\t]*(${l})/(${l})`),
  regExp_2 = new RegExp(`[ \\t\\r\\n]*;[ \\t\\r\\n]*(?:(${l})=(?:(${l})|"((?:[^"\\\\]|\\\\.)*)")(?=[ \\t\\r\\n]*(?:;|$)))?`, "y"),
  A = f(() => u({
    ui: ut({
      resourceUri: o().startsWith(c).optional(),
      visibility: C(z(["model", "app"])).optional()
    }).refine(r => b(r).length <= p).optional().catch(void 0),
    [d]: o().startsWith(c).max(p).optional().catch(void 0)
  }));
function R(r) {
  let e = r?.ui;
  if (e === void 0 || e === null) return !1;
  if (typeof e !== "object" || Array.isArray(e)) return !0;
  let n = Object.hasOwn(e, "visibility") ? Reflect.get(e, "visibility") : void 0;
  if (n === void 0 || n === null) return !1;
  return !Array.isArray(n) || !n.includes("model");
}
function qet({
  uri: uri,
  mimeType: mimeType
}) {
  if (uri.slice(0, c.length).toLowerCase() === c) return !0;
  if (mimeType === void 0 || mimeType.length > g) return !1;
  let n = regExp.exec(mimeType);
  if (n?.[1]?.toLowerCase() !== "text" || n[2]?.toLowerCase() !== "html") return !1;
  regExp_2.lastIndex = n[0].length;
  for (let i = regExp_2.exec(mimeType); i !== null; i = regExp_2.exec(mimeType)) {
    let [, s, M, E] = i,
      m = M ?? E?.replace(/\\(.)/g, "$1");
    if (s?.toLowerCase() === "profile" && m?.toLowerCase() === _) return !0;
  }
  return !1;
}
function Q8t(r, e, n) {
  let i = R(r);
  if (i) t(`MCP server "${e}": tool "${n}" is kept from the model (its _meta.ui.visibility omits "model" or cannot be read); hosts still see it in mcp_status`);
  return i;
}
function M2e(r) {
  return r.filter(item => item.mcpInfo?.hiddenFromModel !== !0);
}
function Z8t(r) {
  let e = A().safeParse(r ?? {});
  if (!e.success) return;
  let {
      ui: ui,
      [d]: i
    } = e.data,
    s = {
      ...(ui !== void 0 && {
        ui: ui
      }),
      ...(i !== void 0 && {
        [d]: i
      })
    };
  return Object.keys(s).length > 0 ? s : void 0;
}
export { qet, Q8t, M2e, Z8t };