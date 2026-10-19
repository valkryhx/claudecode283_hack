// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function Bsn(e) {
  return (e.denyMatchNames ?? []).filter(item => item.includes(":"));
}
function RFs(e, a) {
  let l;
  return e.map(item => {
    if (item.loadedFrom !== "mcp") return item;
    let i = Bsn(item);
    if (i.length === 0) return item;
    l ??= new Set([...a.map(item => item.name), ...e.map(item => item.name)]);
    let t = i.filter(r => r !== item.name && l.has(r)),
      s = item.reservedLabels ?? [];
    if (t.length === s.length && t.every((item, index) => item === s[index])) return item;
    return {
      ...item,
      reservedLabels: t.length === 0 ? void 0 : t
    };
  });
}
var go = "Skill",
  DG = "skill__";
function ZOe(e) {
  return DG + e.replaceAll(":", "__").replace(/[^a-zA-Z0-9_-]/g, "_");
}
function AFs(e) {
  let a = [...(e.aliases ?? []), ...(e.shedAliases ?? []), ...(e.unqualifiedName != null ? [e.unqualifiedName] : []), ...Bsn(e)];
  return a.length ? a.map(ZOe) : void 0;
}
export { Bsn, RFs, go, DG, ZOe, AFs };