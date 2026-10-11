// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ne } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { Nn } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { ag, iJ, Ee, le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { Je } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { s, n, _t, SA } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { Ji } from "B:/~BUN/root/chunk-thz7h362.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { $re } from "B:/~BUN/root/chunk-9451qw24.js";
import { $p } from "B:/~BUN/root/chunk-sv155qry.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { R, Gr, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
function x2t() {
  let o = Nn.CLAUDE_CODE_FORCE_FIRST_LAUNCH;
  if (o === void 0) return;
  if (iJ(o)) return {
    pretendLastSeen: o
  };
  return Ne(o) ? {
    pretendLastSeen: void 0
  } : void 0;
}
function RQ(o, t = {
  ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
  PACKAGE_URL: "@anthropic-ai/claude-code",
  README_URL: "https://code.claude.com/docs/en/overview",
  VERSION: "2.1.283",
  FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
  BUILD_TIME: "2026-09-25T00:44:42Z",
  GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
  HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
  DD_SOURCEMAP_GROUP: "win32"
}.VERSION) {
  if (!iJ(t)) return !1;
  if (!iJ(o)) return !0;
  try {
    return ag(t, o);
  } catch {
    return !0;
  }
}
function _e(u) {
  return RQ(u.lastClawdEntranceVersion) ? {
    ...u,
    lastClawdEntranceVersion: {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.283",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-09-25T00:44:42Z",
      GIT_SHA: "4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION
  } : u;
}
var P = {
  dot: "\xB7",
  wave: "~"
};
function a(pose, offset, length, x_2) {
  return Array.from({
    length: length
  }, () => ({
    pose: pose,
    offset: offset,
    x: x_2
  }));
}
function z(x_3) {
  return [{
    pose: "default",
    offset: 1,
    x: x_3,
    poof: "dot"
  }, {
    pose: "default",
    offset: 1,
    x: x_3,
    poof: "wave"
  }];
}
var jump = [...z(), ...a("arms-up", 0, 3), ...a("default", 0, 1), ...z(), ...a("arms-up", 0, 3), ...a("default", 0, 1)],
  look = [...a("look-right", 0, 5), ...a("look-left", 0, 5), ...a("default", 0, 1)],
  ee = [...a("default", 0, 12), ...a("look-right", 0, 5), ...a("look-left", 0, 5)],
  D = [jump, look],
  J = {
    pose: "default",
    offset: 0
  },
  X = 60;
function ne(o, t) {
  if (!t || o.length === 0) return o;
  let c = o[0],
    l = c.x !== void 0 && c.x !== 0 ? c : J,
    length_2 = Math.max(1, Math.round(t / X));
  return [...Array.from({
    length: length_2
  }, () => l), ...o];
}
var oe = o => o + 1,
  x = 3,
  width = 9,
  celebrate = [...jump, ...a("default", 1, 3)],
  spin = [...a("look-left", 0, 2), ...a("look-right", 0, 2), ...a("look-left", 0, 2), ...a("arms-up", 0, 3), ...a("default", 0, 1)],
  skip = [...a("default", 1, 1, -width), ...a("arms-up", 0, 2, -6), ...a("default", 0, 1, -6), ...a("default", 1, 1, -6), ...a("arms-up", 0, 2, -3), ...a("default", 0, 1, -3), ...a("default", 1, 1, -3), ...a("arms-up", 0, 2, 0), ...z(0), ...a("default", 0, 1, 0)],
  A = {
    jump: jump,
    look: look,
    celebrate: celebrate,
    skip: skip,
    spin: spin
  };
function Fre(o) {
  let t = w(16),
    c;
  if (t[0] !== o) c = o === void 0 ? {} : o, t[0] = o, t[1] = c;else c = t[1];
  let {
      autoplay: autoplay,
      sequence: sequence,
      delayMs: delayMs,
      onComplete: onComplete,
      reserveCrouchRow: reserveCrouchRow
    } = c,
    ie = autoplay === void 0 ? !1 : autoplay,
    f = reserveCrouchRow === void 0 ? !1 : reserveCrouchRow,
    {
      pose: pose_2,
      bounceOffset: C,
      x: p,
      poof: poof,
      onClick: onClick
    } = W(ie, sequence, delayMs, onComplete);
  const height = f ? x + 1 : x;
  let children;
  if (t[2] !== pose_2) children = e($re, {
    pose: pose_2
  }), t[2] = pose_2, t[3] = children;else children = t[3];
  let m;
  if (t[4] !== C || t[5] !== children || t[6] !== p) m = e(s, {
    marginTop: C,
    marginLeft: p,
    flexShrink: 0,
    children: children
  }), t[4] = C, t[5] = children, t[6] = p, t[7] = m;else m = t[7];
  let E;
  if (t[8] !== C || t[9] !== poof) E = poof && C > 0 ? r(V, {
    children: [e(s, {
      position: "absolute",
      top: x - 1,
      left: 0,
      children: e(n, {
        color: "inactive",
        children: P[poof]
      })
    }), e(s, {
      position: "absolute",
      top: x - 1,
      right: 0,
      children: e(n, {
        color: "inactive",
        children: P[poof]
      })
    })]
  }) : null, t[8] = C, t[9] = poof, t[10] = E;else E = t[10];
  let B;
  if (t[11] !== onClick || t[12] !== height || t[13] !== m || t[14] !== E) B = e(SA, {
    children: r(s, {
      height: height,
      width: width,
      flexDirection: "column",
      flexShrink: 0,
      overflow: "hidden",
      onClick: onClick,
      children: [m, E]
    })
  }), t[11] = onClick, t[12] = height, t[13] = m, t[14] = E, t[15] = B;else B = t[15];
  return B;
}
function W(o, t, c, l) {
  let d = w(38),
    i = _t(),
    O;
  if (d[0] !== i) O = () => $p(Je().prefersReducedMotion) || i, d[0] = i, d[1] = O;else O = d[1];
  let [u] = g(O),
    ie = (o || t !== void 0) && !u,
    [f, q] = g(ie ? 0 : -1),
    C;
  if (d[2] !== o || d[3] !== c || d[4] !== t) C = () => ne(t ? A[t] : o ? ee : jump, t ? c : void 0), d[2] = o, d[3] = c, d[4] = t, d[5] = C;else C = d[5];
  let [p, F] = g(C),
    I;
  if (d[6] !== l) I = () => l?.(), d[6] = l, d[7] = I;else I = d[7];
  let k = Gr(I),
    S = T(!t),
    m = Yt(),
    E;
  if (d[8] !== k || d[9] !== u) E = () => {
    if (u) k();
  }, d[8] = k, d[9] = u, d[10] = E;else E = d[10];
  let B;
  if (d[11] !== u) B = [u], d[11] = u, d[12] = B;else B = d[12];
  R(E, B);
  let pe;
  if (d[13] !== o || d[14] !== f || d[15] !== u) pe = () => {
    if (o || u || f !== -1 || !S.current) {
      return;
    }
    F(D[Math.floor(Math.random() * D.length)]), q(0);
  }, d[13] = o, d[14] = f, d[15] = u, d[16] = pe;else pe = d[16];
  let onClick_2 = pe,
    me;
  if (d[17] !== o || d[18] !== m || d[19] !== k || d[20] !== f || d[21] !== p || d[22] !== t) me = () => {
    if (f === -1) {
      return;
    }
    if (f >= p.length) {
      S.current = !0, k(), q(o && !t ? 0 : -1);
      return;
    }
    return m.setTimeout(() => q(oe), X);
  }, d[17] = o, d[18] = m, d[19] = k, d[20] = f, d[21] = p, d[22] = t, d[23] = me;else me = d[23];
  let ye;
  if (d[24] !== o || d[25] !== m || d[26] !== f || d[27] !== p || d[28] !== t) ye = [f, p, o, t, m], d[24] = o, d[25] = m, d[26] = f, d[27] = p, d[28] = t, d[29] = ye;else ye = d[29];
  R(me, ye);
  let he;
  if (d[30] !== t) he = t ? A[t].at(-1) : J, d[30] = t, d[31] = he;else he = d[31];
  let Be = he,
    y = f >= 0 && f < p.length ? p[f] : Be;
  const x_4 = y.x ?? 0;
  let xe;
  if (d[32] !== y.offset || d[33] !== y.poof || d[34] !== y.pose || d[35] !== onClick_2 || d[36] !== x_4) xe = {
    pose: y.pose,
    bounceOffset: y.offset,
    x: x_4,
    poof: y.poof,
    onClick: onClick_2
  }, d[32] = y.offset, d[33] = y.poof, d[34] = y.pose, d[35] = onClick_2, d[36] = x_4, d[37] = xe;else xe = d[37];
  return xe;
}
var se = ["skip", "jump", "look", "spin"];
function fe() {
  if (Ji.clawdEntranceTaken) return;
  if (!x2t() && !RQ(le().lastClawdEntranceVersion)) return;
  return Ji.clawdEntranceTaken = !0, se[Math.floor(Math.random() * se.length)];
}
function OSn(o) {
  let c = w(6),
    {
      storageV5: storageV5
    } = ke(),
    l;
  if (c[0] !== o) l = () => o ? fe() : void 0, c[0] = o, c[1] = l;else l = c[1];
  let [i] = g(l),
    d,
    O;
  if (c[2] !== i || c[3] !== storageV5) d = () => {
    if (i === void 0 || !RQ(le().lastClawdEntranceVersion)) {
      return;
    }
    Ee(_e, storageV5);
  }, O = [i, storageV5], c[2] = i, c[3] = storageV5, c[4] = d, c[5] = O;else d = c[4], O = c[5];
  return R(d, O), i;
}
export { x2t, RQ, Fre, OSn };