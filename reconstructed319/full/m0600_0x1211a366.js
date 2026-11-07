// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  basename as t,
  join as o
} from "path";
var Glt = "bundles",
  lJr = 3600000,
  XEn = o("claude.app", "Contents", "MacOS", "claude"),
  n = String.raw`(\d[A-Za-z0-9._+-]*)@[0-9a-f]{12}\.[0-9a-f]{8}`,
  JEn = new RegExp(`^${n}$`),
  r = new RegExp(String.raw`[\\/]versions[\\/]bundles[\\/]${n}[\\/]claude\.app[\\/]Contents[\\/]MacOS[\\/]claude$`);

function Ive(e) {
  return r.exec(e)?.[1]
}

function QEn(e) {
  return Ive(e) ?? t(e)
}

function ZEn(e) {
  return e.uid === process.getuid?.() && (e.mode & 18) === 0
}
export {
  Glt,
  lJr,
  XEn,
  JEn,
  Ive,
  QEn,
  ZEn
};
