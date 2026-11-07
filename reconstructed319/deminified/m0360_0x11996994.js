// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { K } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { mkdir as v, readFile as g } from "fs/promises";
import { dirname as P } from "path";
function Uye(e, f, c) {
  let {
    defaultValue: defaultValue,
    mode: mode,
    ensureDir = !1,
    indent: indent,
    trailingNewline = !1
  } = c;
  function u() {
    return S(defaultValue) ? defaultValue() : defaultValue;
  }
  async function read() {
    let n;
    try {
      n = await g(e, "utf8");
    } catch (error) {
      if (K(error)) return u();
      throw error;
    }
    let r;
    try {
      r = ee(n);
    } catch (error) {
      return t(`jsonStore: ${e} is not valid JSON: ${error}`, {
        level: "warn"
      }), u();
    }
    let o = f().safeParse(r);
    if (!o.success) return t(`jsonStore: ${e} failed schema validation: ${o.error.message}`, {
      level: "warn"
    }), u();
    return o.data;
  }
  async function write(n) {
    if (ensureDir !== !1) await v(P(e), {
      recursive: !0,
      mode: ensureDir === !0 ? void 0 : ensureDir.mode
    });
    let r = _(n, null, indent) + (trailingNewline ? `
` : "");
    await zn(e, r, mode);
  }
  let l = Promise.resolve();
  function update(n) {
    let r = l.then(async () => {
      let o = n(await read());
      return await write(o), o;
    });
    return l = r.then(() => {
      return;
    }, () => {
      return;
    }), r;
  }
  return {
    path() {
      return e;
    },
    read: read,
    write: write,
    update: update
  };
}
function S(e) {
  return typeof e === "function";
}
export { Uye };