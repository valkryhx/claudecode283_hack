// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
function KUe(t, r) {
  switch (r) {
    case "bash":
      return `!${t}`;
    default:
      return t
  }
}

function Mk(t) {
  if (t.startsWith("!")) return "bash";
  return "prompt"
}

function HM(t) {
  if (Mk(t) === "prompt") return t;
  return t.slice(1)
}

function fVt(t) {
  return t === "!"
}

function zQs({
  nextValue: t,
  value: r,
  cursorOffset: n,
  mode: o
}) {
  let e = Mk(t);
  if (n !== 0 || e === "prompt" || e === o) return !1;
  return t.length === r.length + 1 || r.length === 0
}
export {
  KUe,
  Mk,
  HM,
  fVt,
  zQs
};
