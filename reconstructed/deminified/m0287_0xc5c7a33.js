// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { b, J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Cn } from "B:/~BUN/root/chunk-2swveyqa.js";
import { mkdir as v, readFile as g } from "fs/promises";
import { dirname as P } from "path";
function rX(e, f, c) {
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
      if (B(error)) return u();
      throw error;
    }
    let r;
    try {
      r = J(n);
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
    let r = b(n, null, indent) + (trailingNewline ? `
` : "");
    await Cn(e, r, mode);
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
export { rX };