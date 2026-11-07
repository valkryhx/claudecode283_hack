// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function pVi(e) {
  let n = e.indexOf(":");
  if (n <= 0) return;
  let i = e.slice(n + 1);
  return i.endsWith("/SKILL.md") && /^[A-Za-z][A-Za-z0-9+.-]*:./.test(i) ? {
    server: e.slice(0, n),
    uri: i
  } : void 0
}

function KHn(e) {
  return (e.denyMatchNames ?? []).filter((n) => n.includes(":"))
}

function mVi(e, n) {
  let i;
  return e.map((r) => {
    if (r.loadedFrom !== "mcp") return r;
    let s = KHn(r);
    if (s.length === 0) return r;
    i ??= new Set([...n.map((t) => t.name), ...e.map((t) => t.name)]);
    let a = s.filter((t) => t !== r.name && i.has(t)),
      l = r.reservedLabels ?? [];
    if (a.length === l.length && a.every((t, d) => t === l[d])) return r;
    return {
      ...r,
      reservedLabels: a.length === 0 ? void 0 : a
    }
  })
}
var $r = "Skill",
  RD = "skill__";

function yQe(e) {
  return RD + e.replaceAll(":", "__").replace(/[^a-zA-Z0-9_-]/g, "_")
}

function hVi(e) {
  let n = [...e.aliases ?? [], ...e.shedAliases ?? [], ...e.unqualifiedName != null ? [e.unqualifiedName] : [], ...KHn(e), ...e.directoryListingName !== void 0 ? [e.directoryListingName] : []];
  return n.length ? n.map(yQe) : void 0
}
export {
  pVi,
  KHn,
  mVi,
  $r,
  RD,
  yQe,
  hVi
};
