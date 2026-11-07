// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function no(r) {
  return r.map(item => {
    let n = String(item);
    if (n === "") return "''";
    if (/^[A-Za-z0-9_./:=@+,-]+$/.test(n)) return n;
    return "'" + n.replaceAll("'", `'"'"'`) + "'";
  }).join(" ");
}
export { no };