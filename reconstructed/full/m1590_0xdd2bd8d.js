// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import "B:/~BUN/root/chunk-bvn0mpsk.js";
import "B:/~BUN/root/chunk-ekrhn4q1.js";
import "B:/~BUN/root/chunk-4rk7cwxz.js";
import "B:/~BUN/root/chunk-dkxhwhft.js";
import "B:/~BUN/root/chunk-kks4mj3w.js";
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Q,
  Ht
} from "B:/~BUN/root/chunk-17wqwt36.js";
import "B:/~BUN/root/chunk-54p0h65d.js";
import {
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import "B:/~BUN/root/chunk-4p6z9qq1.js";
import "B:/~BUN/root/chunk-0fnha6bz.js";
import "B:/~BUN/root/chunk-y04k89s2.js";
import {
  tt
} from "B:/~BUN/root/chunk-py7yqpgt.js";
import "B:/~BUN/root/chunk-shgdrs47.js";
import "B:/~BUN/root/chunk-zv3zxqya.js";
import "B:/~BUN/root/chunk-6j6ra85q.js";
import "B:/~BUN/root/chunk-nkmmqnq7.js";
import "B:/~BUN/root/chunk-zksmb712.js";
import "B:/~BUN/root/chunk-zs3ycjed.js";
import "B:/~BUN/root/chunk-zk6g628v.js";
import "B:/~BUN/root/chunk-e7p62566.js";
import "B:/~BUN/root/chunk-728mwbhs.js";
import "B:/~BUN/root/chunk-51n463p1.js";
import {
  KK
} from "B:/~BUN/root/chunk-8tye9ns0.js";
import {
  doe,
  kIe,
  Str
} from "B:/~BUN/root/chunk-m2n01fyt.js";
import {
  u$r,
  aLo,
  lLo
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import "B:/~BUN/root/chunk-0bx1tycm.js";
import {
  k,
  Re
} from "B:/~BUN/root/chunk-yv67t8hr.js";
var M = k(function(ke, D) {
  var Fe = Re("path");
  D.exports = {
    isSupported: !1
  }
});
var S = {
  pxPerToken: 28,
  maxTargetPx: 1568,
  maxTargetTokens: 1568
};

function _(o, r) {
  return Math.floor((o - 1) / r) + 1
}

function I(o, r, i) {
  return _(o, i) * _(r, i)
}

function A(o, r, i) {
  let {
    pxPerToken: d,
    maxTargetPx: p,
    maxTargetTokens: f
  } = i;
  if (o <= p && r <= p && I(o, r, d) <= f) return [o, r];
  if (r > o) {
    let [n, s] = A(r, o, i);
    return [s, n]
  }
  let C = o / r,
    b = o,
    e = 1;
  for (;;) {
    if (e + 1 === b) return [e, Math.max(Math.round(e / C), 1)];
    let n = Math.floor((e + b) / 2),
      s = Math.max(Math.round(n / C), 1);
    if (n <= p && I(n, s, d) <= f) e = n;
    else b = n
  }
}
var R = 0.1,
  v = 1;
var B = `Scale factor in [${R}, ${v}] for the returned image; 1 (default) uses the full image token budget, 0.5 returns an image at half the width and height (~quarter of the tokens). Coordinates are ALWAYS in the full-resolution coordinate frame (reported with every scaled screenshot), never in the scaled image's own pixels.`;

function c() {
  let o = KK();
  if (o.inputModule) return o.inputModule;
  let r = M();
  if (!r.isSupported) throw Error("@ant/computer-use-input is not supported on this platform");
  return o.inputModule = r
}
var h = 0.75,
  U = 5000;

function E(o, r, i) {
  let d = Math.round(o * i),
    p = Math.round(r * i);
  return A(d, p, S)
}
async function w() {
  let {
    stdout: o,
    code: r
  } = await tt("pbpaste", [], {
    useCwd: !1
  });
  if (r !== 0) throw Error(`pbpaste exited with code ${r}`);
  return o
}
async function T(o) {
  let {
    code: r
  } = await tt("pbcopy", [], {
    input: o,
    useCwd: !1
  });
  if (r !== 0) throw Error(`pbcopy exited with code ${r}`)
}

function L(o) {
  if (o.length !== 1) return !1;
  let r = o[0].toLowerCase();
  return r === "escape" || r === "esc"
}
var x = 50,
  N = 50;
async function g(o, r, i) {
  await o.moveMouse(r, i, !1), await Q(x)
}
async function F(o, r) {
  let i;
  while ((i = r.pop()) !== void 0) try {
    await o.key(i, "release")
  } catch {}
}
async function O(o, r, i) {
  let d = [];
  try {
    for (let p of r) await o.key(p, "press"), d.push(p);
    return await i()
  } finally {
    await F(o, d)
  }
}
async function H(o, r) {
  let i;
  try {
    i = await w()
  } catch {
    t("[computer-use] pbpaste before paste failed; proceeding without restore")
  }
  try {
    if (await T(r), await w() !== r) throw Error("Clipboard write did not round-trip.");
    await o.keys(["command", "v"]), await Q(100)
  } finally {
    if (typeof i === "string") try {
      await T(i)
    } catch {
      t("[computer-use] clipboard restore after paste failed")
    }
  }
}
async function z(o, r, i, d) {
  if (!d) {
    await g(o, r, i);
    return
  }
  let p = await o.mouseLocation(),
    f = r - p.x,
    C = i - p.y,
    b = Math.hypot(f, C);
  if (b < 1) return;
  let e = Math.min(b / 2000, 0.5);
  if (e < 0.03) {
    await g(o, r, i);
    return
  }
  let n = 60,
    s = 1000 / n,
    a = Math.floor(e * n);
  for (let u = 1; u <= a; u++) {
    let m = u / a,
      y = 1 - Math.pow(1 - m, 3);
    if (await o.moveMouse(Math.round(p.x + f * y), Math.round(p.y + C * y), !1), u < a) await Q(s)
  }
  await Q(x)
}

function Ke(o) {
  throw Error("createCliExecutor called on win32. Computer control is macOS-only.")
}
async function Qe(o) {
  if (o.length === 0) return;
  await doe().apps.unhide([...o])
}
export {
  Ke as createCliExecutor, Qe as unhideComputerUseApps
};
