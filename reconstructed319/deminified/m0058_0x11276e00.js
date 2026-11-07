// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var Itt = String.raw`\$\{([A-Za-z_][A-Za-z0-9_]*)(?::-[^}]*)?\}`;
function m5(e) {
  return new RegExp(Itt).test(e);
}
function Mtt(e) {
  let n = [],
    r = 0;
  for (let t of e.matchAll(new RegExp(Itt, "g"))) n.push(e.slice(r, t.index)), r = t.index + t[0].length;
  return n.push(e.slice(r)), n;
}
function $ln(e) {
  return e.replace(new RegExp(Itt, "g"), n => "x".repeat(n.length));
}
function sqe(e) {
  return e.replace(new RegExp(Itt, "g"), (n, r) => `\${${r}}`);
}
export { Itt, m5, Mtt, $ln, sqe };