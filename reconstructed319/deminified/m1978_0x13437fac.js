// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { ble } from "B:/~BUN/root/chunk-hx3amhsz.js";
import { Et } from "B:/~BUN/root/chunk-2f1svh63.js";
import { en } from "B:/~BUN/root/chunk-mdq0dxn3.js";
var rni = t => `${t.path} (${en(t.bytes)})`;
var sGo = (t, r) => [t].filter(item => item > 0).map(item => `and ${item} more ${P(item, r)} not named here`);
var FKr = t => (/^ */.exec(t)?.[0] ?? "") + Et(t, ble);
var iGo = t => [t].filter(item => item > 0).map(item => `${item} ${P(item, "entry stays", "entries stay")} on this machine (secrets, links, ignored files)`);
var aGo = t => [t ?? []].flat().flatMap(item => [`Writes this manifest first, to ${item.path}:`, ...item.text.trimEnd().split(`
`)]);
var a = t => `stays here: ${t.path} (${t.words})`;
var lGo = t => [...t.files.map(rni), ...sGo(t.unnamed?.files ?? 0, "file"), ...t.stays.map(a), ...sGo(t.unnamed?.stays ?? 0, "entry")].map(FKr);
export { rni, sGo, FKr, iGo, aGo, lGo };