// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { nnt } from "B:/~BUN/root/chunk-1g25msn4.js";
import { ro, fP, jA } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { createHash as w } from "crypto";
import { constants as c } from "fs";
import { lstat as g, open as y, readdir as F, rm as u } from "fs/promises";
import { basename as m, join as h } from "path";
var S = 300000;
async function DSs(a, target, s = 384) {
  let r = await F(a.at).catch(() => []);
  await Promise.all(r.filter(item => jA(item, m(target))).map(async item => {
    let l = h(a.at, item),
      d = await g(l).catch(() => {
        return;
      });
    if (d !== void 0 && d.mtimeMs < Date.now() - S) await u(l, {
      force: !0
    }).catch(() => {});
  }));
  let path = h(a.at, m(fP(target))),
    i = await y(path, c.O_WRONLY | c.O_CREAT | c.O_EXCL | ro, 384).catch(async t => {
      throw await a.release(), t;
    }),
    o = w("sha256"),
    size = 0,
    p = !1;
  return {
    async write(t) {
      o.update(t), size += t.byteLength, await i.writeFile(t);
    },
    async finish() {
      if (s !== 384) await i.chmod(s);
      let {
        dev: dev,
        ino: ino
      } = await i.stat();
      return await i.close(), p = !0, {
        path: path,
        placeAt: h(a.at, m(target)),
        target: target,
        size: size,
        sha256: o.digest("hex"),
        identity: `${dev}:${ino}`,
        release: a.release
      };
    },
    async discard() {
      if (!p) await i.close().catch(() => {}), await u(path, {
        force: !0
      }).catch(() => {}), await a.release();
    }
  };
}
async function lGe(a, n, s) {
  let r = await nnt(a).catch(() => null);
  if (r === null) return null;
  try {
    let e = await r.stat();
    if (!e.isFile() || e.size !== n || s !== void 0 && (e.dev !== s.dev || e.ino !== s.ino)) return null;
    let i = w("sha256");
    for await (let o of r.createReadStream({
      autoClose: !1,
      end: n - 1,
      highWaterMark: 1048576
    })) i.update(o);
    return i.digest("hex");
  } catch {
    return null;
  } finally {
    await r.close().catch(() => {});
  }
}
export { DSs, lGe };