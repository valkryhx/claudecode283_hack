// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Y, Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import { lt } from "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-1kfn24jp.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import { z6 } from "B:/~BUN/root/chunk-8w42v0dp.js";
import { t_e, OVe, gKr } from "B:/~BUN/root/chunk-5c2pwbes.js";
import { L$o, Uqs, Bqs } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { R, Ue } from "B:/~BUN/root/chunk-ef0msk7r.js";
var U = R(function (ke, M) {
  var Fe = Ue("path");
  M.exports = {
    isSupported: !1
  };
});
var S = {
  pxPerToken: 28,
  maxTargetPx: 1568,
  maxTargetTokens: 1568
};
function _(o, r) {
  return Math.floor((o - 1) / r) + 1;
}
function I(o, r, i) {
  return _(o, i) * _(r, i);
}
function A(o, r, i) {
  let {
    pxPerToken: pxPerToken,
    maxTargetPx: maxTargetPx,
    maxTargetTokens: maxTargetTokens
  } = i;
  if (o <= maxTargetPx && r <= maxTargetPx && I(o, r, pxPerToken) <= maxTargetTokens) return [o, r];
  if (r > o) {
    let [n, s] = A(r, o, i);
    return [s, n];
  }
  let C = o / r,
    b = o,
    e = 1;
  for (;;) {
    if (e + 1 === b) return [e, Math.max(Math.round(e / C), 1)];
    let n = Math.floor((e + b) / 2),
      s = Math.max(Math.round(n / C), 1);
    if (n <= maxTargetPx && I(n, s, pxPerToken) <= maxTargetTokens) e = n;else b = n;
  }
}
var v = 0.1,
  D = 1;
var B = `Scale factor in [${v}, ${D}] for the returned image; 1 (default) uses the full image token budget, 0.5 returns an image at half the width and height (~quarter of the tokens). Coordinates are ALWAYS in the full-resolution coordinate frame (reported with every scaled screenshot), never in the scaled image's own pixels.`;
function l() {
  let o = z6();
  if (o.inputModule) return o.inputModule;
  let r = U();
  if (!r.isSupported) throw Error("@ant/computer-use-input is not supported on this platform");
  return o.inputModule = r;
}
var h = 0.75,
  L = 5000;
function E(o, r, i) {
  let c = Math.round(o * i),
    p = Math.round(r * i);
  return A(c, p, S);
}
async function w() {
  let {
    stdout: stdout,
    code: code
  } = await lt("pbpaste", [], {
    useCwd: !1
  });
  if (code !== 0) throw Error(`pbpaste exited with code ${code}`);
  return stdout;
}
async function T(input) {
  let {
    code: code_2
  } = await lt("pbcopy", [], {
    input: input,
    useCwd: !1
  });
  if (code_2 !== 0) throw Error(`pbcopy exited with code ${code_2}`);
}
function F(o) {
  if (o.length !== 1) return !1;
  let r = o[0].toLowerCase();
  return r === "escape" || r === "esc";
}
var x = 50,
  N = 50;
async function g(o, r, i) {
  await o.moveMouse(r, i, !1), await Y(x);
}
async function k(o, r) {
  let i;
  while ((i = r.pop()) !== void 0) try {
    await o.key(i, "release");
  } catch {}
}
async function O(o, r, i) {
  let c = [];
  try {
    for (let p of r) await o.key(p, "press"), c.push(p);
    return await i();
  } finally {
    await k(o, c);
  }
}
async function H(o, r) {
  let i;
  try {
    i = await w();
  } catch {
    t("[computer-use] pbpaste before paste failed; proceeding without restore");
  }
  try {
    if (await T(r), (await w()) !== r) throw Error("Clipboard write did not round-trip.");
    await o.keys(["command", "v"]), await Y(100);
  } finally {
    if (typeof i === "string") try {
      await T(i);
    } catch {
      t("[computer-use] clipboard restore after paste failed");
    }
  }
}
async function z(o, r, i, c) {
  if (!c) {
    await g(o, r, i);
    return;
  }
  let p = await o.mouseLocation(),
    f = r - p.x,
    C = i - p.y,
    b = Math.hypot(f, C);
  if (b < 1) return;
  let e = Math.min(b / 2000, 0.5);
  if (e < 0.03) {
    await g(o, r, i);
    return;
  }
  let n = 60,
    s = 1000 / n,
    a = Math.floor(e * n);
  for (let u = 1; u <= a; u++) {
    let m = u / a,
      y = 1 - Math.pow(1 - m, 3);
    if (await o.moveMouse(Math.round(p.x + f * y), Math.round(p.y + C * y), !1), u < a) await Y(s);
  }
  await Y(x);
}
function Ke(o) {
  throw Error("createCliExecutor called on win32. Computer control is macOS-only.");
}
async function Qe(o) {
  if (o.length === 0) return;
  await t_e().apps.unhide([...o]);
}
export { Ke as createCliExecutor, Qe as unhideComputerUseApps };