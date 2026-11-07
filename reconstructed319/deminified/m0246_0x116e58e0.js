// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function pVi(e) {
  let n = e.indexOf(":");
  if (n <= 0) return;
  let uri = e.slice(n + 1);
  return uri.endsWith("/SKILL.md") && /^[A-Za-z][A-Za-z0-9+.-]*:./.test(uri) ? {
    server: e.slice(0, n),
    uri: uri
  } : void 0;
}
function KHn(e) {
  return (e.denyMatchNames ?? []).filter(item => item.includes(":"));
}
function mVi(e, n) {
  let i;
  return e.map(item => {
    if (item.loadedFrom !== "mcp") return item;
    let s = KHn(item);
    if (s.length === 0) return item;
    i ??= new Set([...n.map(item => item.name), ...e.map(item => item.name)]);
    let a = s.filter(t => t !== item.name && i.has(t)),
      l = item.reservedLabels ?? [];
    if (a.length === l.length && a.every((item, index) => item === l[index])) return item;
    return {
      ...item,
      reservedLabels: a.length === 0 ? void 0 : a
    };
  });
}
var $r = "Skill",
  RD = "skill__";
function yQe(e) {
  return RD + e.replaceAll(":", "__").replace(/[^a-zA-Z0-9_-]/g, "_");
}
function hVi(e) {
  let n = [...(e.aliases ?? []), ...(e.shedAliases ?? []), ...(e.unqualifiedName != null ? [e.unqualifiedName] : []), ...KHn(e), ...(e.directoryListingName !== void 0 ? [e.directoryListingName] : [])];
  return n.length ? n.map(yQe) : void 0;
}
export { pVi, KHn, mVi, $r, RD, yQe, hVi };