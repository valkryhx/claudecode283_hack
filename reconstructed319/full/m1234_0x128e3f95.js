// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import * as r from "fs/promises";
import * as o from "path";

function AEn(e = {}) {
  return {
    fs: r,
    path: o,
    platform: () => x(),
    ...e
  }
}
async function xEn(e, t) {
  return t.isRootNameExchangeable === !0 ? e.path.join(await e.fs.realpath(e.path.dirname(t.realRoot)), e.path.basename(t.realRoot)) : e.fs.realpath(t.realRoot)
}
export {
  AEn,
  xEn
};
