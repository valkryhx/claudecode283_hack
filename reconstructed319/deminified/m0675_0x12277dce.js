// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { x } from "B:/~BUN/root/chunk-mwfggkjt.js";
import { fP, Is } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { Ive } from "B:/~BUN/root/chunk-0ye1geyg.js";
import { hQn } from "B:/~BUN/root/chunk-hbs53sn0.js";
import { SQe } from "B:/~BUN/root/chunk-xdzcgcjh.js";
import { Of } from "B:/~BUN/root/chunk-bvb659eh.js";
import { link as _, mkdir as E, stat as p, unlink as h, writeFile as C } from "fs/promises";
import { join as a, sep as D } from "path";
import { open as m } from "fs/promises";
var d = 25;
async function u(s) {
  let t = await m(s, "r");
  try {
    let n = Buffer.alloc(32);
    await t.read(n, 0, n.length, 0);
    let e = Buffer.alloc(n.readUInt32LE(20));
    await t.read(e, 0, e.length, n.length);
    for (let r = 0; r < e.length; r += e.readUInt32LE(r + 4)) {
      if (e.readUInt32LE(r) !== d) continue;
      let o = e.readUInt32LE(r + 64);
      for (let l = 0; l < o; l++) {
        let c = r + 72 + l * 80;
        if (e.toString("latin1", c, c + 16) !== "__info_plist\x00\x00\x00\x00") continue;
        let f = Buffer.alloc(Number(e.readBigUInt64LE(c + 40)));
        return await t.read(f, 0, f.length, e.readUInt32LE(c + 48)), f;
      }
    }
    return null;
  } finally {
    await t.close();
  }
}
async function L() {
  let s = a(SQe(), "claude");
  if (!Nhn()) return null;
  if (Ive(process.execPath) !== void 0) return null;
  let t = a(s, "ClaudeCode.app", "Contents", "MacOS"),
    n = a(t, "claude");
  try {
    let e = await u(process.execPath);
    if (e === null) return null;
    let ino = (await p(process.execPath)).ino;
    await E(t, {
      recursive: !0
    }), await C(a(t, "..", "Info.plist"), e);
    try {
      if ((await p(n)).ino === ino) return n;
    } catch {}
    let o = fP(n);
    await _(process.execPath, o);
    try {
      await Is(o, n);
    } finally {
      await h(o).catch(() => {});
    }
    return n;
  } catch {
    return null;
  }
}
async function P9s() {
  if (x() !== "macos") return;
  if (i.CLAUDE_BG_TCC_DISCLAIMED) {
    delete process.env.CLAUDE_BG_TCC_DISCLAIMED;
    return;
  }
  let t = (i.CLAUDE_PTY_HOST_NO_STABLE_PATH === "1" || i.CLAUDE_CODE_DISABLE_BG_STABLE_PATH ? null : await L()) ?? process.execPath,
    e = [...(Of() ? [t] : [t, process.argv[1]]), ...process.argv.slice(2)],
    r = hQn(process.env);
  r.CLAUDE_BG_TCC_DISCLAIMED = "1", delete r.CLAUDE_PTY_HOST_NO_STABLE_PATH;
  try {
    process.execve(t, e, r, {
      macDisclaimResponsibility: !0
    });
  } catch {}
}
function Nhn() {
  return process.execPath.startsWith(a(SQe(), "claude", "versions") + D);
}
export { P9s, Nhn };