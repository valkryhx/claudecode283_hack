// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  vs,
  Oy,
  Wh
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  w
} from "B:/~BUN/root/chunk-x9hkq9y1.js";
import {
  ol
} from "B:/~BUN/root/chunk-syke822n.js";
import {
  a,
  Gw
} from "B:/~BUN/root/chunk-nkmmqnq7.js";
import {
  oJ,
  vt,
  xp
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  Zn
} from "B:/~BUN/root/chunk-1x7a47hz.js";
import {
  lr,
  Lt
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  he
} from "B:/~BUN/root/chunk-3rzkfay5.js";
import {
  Ie
} from "B:/~BUN/root/chunk-sd4cj2qx.js";
import {
  f$
} from "B:/~BUN/root/chunk-4h4gje25.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-1gn8pz4b.js";
import {
  qQ
} from "B:/~BUN/root/chunk-edggnar8.js";
import {
  Ws
} from "B:/~BUN/root/chunk-mmnpv22v.js";
import {
  Qje
} from "B:/~BUN/root/chunk-by3kce33.js";
import {
  ir
} from "B:/~BUN/root/chunk-4r6zcwth.js";
import {
  W
} from "B:/~BUN/root/chunk-h23911wn.js";
import {
  eoe
} from "B:/~BUN/root/chunk-ph7apw4w.js";
import {
  tF
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  Lme
} from "B:/~BUN/root/chunk-jz4j9jvf.js";
import {
  lkn
} from "B:/~BUN/root/chunk-91sz5k2c.js";
import {
  VPe,
  Q5r,
  Z5r,
  e8r,
  t8r,
  n8r,
  r8r,
  o8r,
  s8r,
  i8r,
  a8r,
  l8r,
  qPe,
  aGt,
  lGt,
  c8r
} from "B:/~BUN/root/chunk-4fpbgyj9.js";
import {
  DH
} from "B:/~BUN/root/chunk-db33zsv9.js";
import {
  et
} from "B:/~BUN/root/chunk-zg8y1401.js";
import {
  hd
} from "B:/~BUN/root/chunk-rd1ccb7k.js";
import {
  Xe
} from "B:/~BUN/root/chunk-parcaazx.js";
import {
  V,
  e,
  r
} from "B:/~BUN/root/chunk-qkvevvte.js";
import {
  Hue
} from "B:/~BUN/root/chunk-hkm1a44r.js";
import {
  Sr,
  mr,
  R,
  X,
  g,
  N
} from "B:/~BUN/root/chunk-rnj6pcz5.js";
import {
  fN
} from "B:/~BUN/root/chunk-45e6pkwp.js";
import {
  lne,
  u$t,
  p$t
} from "B:/~BUN/root/chunk-erkcnv3k.js";
import {
  S
} from "B:/~BUN/root/chunk-yv67t8hr.js";
N();

function gZn(l, t, o) {
  if (Ie() !== "firstParty" || !oJ() || !Lme()) return;
  let i = DH.of(l);
  return {
    current: () => i.peek(t, o),
    settled: i.read(t, o)
  }
}

function B(l) {
  switch (l) {
    case "connected":
      return [{
        label: "Cloud sessions",
        value: "GitHub connected"
      }];
    case "not_connected":
      return [{
        label: "Cloud sessions",
        value: "Not set up \xB7 /web-setup to connect GitHub"
      }];
    case "unknown":
    case void 0:
      return []
  }
}

function ke(M) {
  return M.mainLoopModel
}

function Oe(_) {
  return _.mcp
}

function Te(j) {
  return j.toolPermissionContext.mode
}

function Ne($e) {
  return $e.id
}

function Ge(Be) {
  return vs(Be).cwd
}

function _e(We) {
  return We.length > 0
}

function je(Ue, H) {
  return [H > 0 && r(hd.Row, {
    children: [e(V, {
      children: " "
    }), e(V, {
      children: ""
    })]
  }, `gap-${H}`), ...Ue.map((l, Ye) => {
    let {
      label: se,
      value: Ke
    } = l;
    return r(hd.Row, {
      children: [e(V, {
        children: se !== void 0 ? `${se}:` : ""
      }), e(O, {
        value: Ke
      })]
    }, `${H}-${Ye}`)
  })]
}

function He(m, h) {
  return r(s, {
    flexDirection: "row",
    gap: 1,
    paddingX: 1,
    children: [e(et, {
      status: "warning"
    }), typeof m === "string" ? e(n, {
      wrap: "wrap",
      children: m
    }) : m]
  }, h)
}
var hZn = " (details in the --debug log)";

function _wn({
  sessionId: l,
  cwd: t,
  accountStatus: o,
  webSetupStatus: i
}) {
  let u = a.CLAUDE_CODE_TMUX_SESSION,
    d = Hue(),
    c = lr()?.sessionId,
    h = tF(l) ?? e(n, {
      dimColor: !0,
      children: "/rename to add a name"
    }),
    p = Wh(),
    f = "";
  if (p.length > 0) {
    let b = p.map((v) => v.kind === "plugin" ? `plugin:${v.name}@${v.marketplace}` : `server:${v.name}`).join(", "),
      y = Ie() !== "firstParty" ? "not available on third-party providers" : !qQ() ? "not currently available" : Qje(he("policySettings")) ? "blocked by org policy" : void 0;
    f = y ? `Configured but not active (${y}): ${b}` : `Listening for messages from ${b}`
  }
  return [{
    label: "Version",
    value: `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.283",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-09-25T00:44:42Z",GIT_SHA:"4631ccd7cfe41e69bc72d3b5b9dc7282536e4985",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION}${fN()}`
  }, ...[], {
    label: "Session name",
    value: h
  }, {
    label: c === l ? "Cloud session ID" : "Session ID",
    value: l
  }, ...c !== void 0 && c !== l ? [{
    label: "Cloud session ID",
    value: c
  }] : [], {
    label: "Session kind",
    value: !vt() ? "interactive" : xp() ? "background job \xB7 unattended" : "background job \xB7 attached"
  }, ...u ? [{
    label: "tmux session",
    value: u
  }] : [], ...f ? [{
    label: "Channels",
    value: f
  }] : [], ...Ws() && Gw.CLAUDE_CODE_MESSAGING_SOCKET ? [{
    label: "Peer address",
    value: `uds:${Gw.CLAUDE_CODE_MESSAGING_SOCKET}`
  }] : [], ...Ws() && !Gw.CLAUDE_CODE_MESSAGING_SOCKET && lkn() !== void 0 ? [{
    label: "Peer address",
    value: `unavailable \u2014 ${lkn()}${hZn}`
  }] : [], ...Oy() ? [{
    label: "Memory",
    value: "Paused for this session \xB7 /pause-memory to resume"
  }] : [], {
    label: "cwd",
    value: t
  }, ...aGt(o), ...B(i), ...le(), ...lGt()]
}

function le() {
  let l = f$();
  return l.length > 0 ? [{
    label: "Compliance",
    value: p$t(l).map((t) => u$t(t) ? lne(t) : t)
  }] : []
}

function bwn({
  mainLoopModel: l,
  mcp: t,
  theme: o,
  ideInstallationStatus: i,
  permissionMode: u
}) {
  return [{
    label: "Model",
    value: c8r(l)
  }, ...e8r(), ...Lt() ? [] : [...t8r(t.clients, i, o), ...n8r(t.clients, o), ...Z5r(), ...Q5r()], ...o8r(), ...s8r(u)]
}
async function yZn(l, t, o) {
  return (await Promise.all([i8r(), l8r(t), a8r(t), Lt() ? [] : r8r(l, t, o)])).flat()
}

function O(l) {
  let o = w(8),
    {
      value: t
    } = l;
  if (Array.isArray(t)) {
    let i;
    if (o[0] !== t) {
      let u;
      if (o[2] !== t.length) u = (d, c) => r(n, {
        children: [d, c < t.length - 1 ? "," : ""]
      }, c), o[2] = t.length, o[3] = u;
      else u = o[3];
      i = t.map(u);
      o[0] = t, o[1] = i
    } else i = o[1];
    let u;
    if (o[4] !== i) u = e(s, {
      flexWrap: "wrap",
      columnGap: 1,
      flexShrink: 99,
      children: i
    }), o[4] = i, o[5] = u;
    else u = o[5];
    return u
  }
  if (typeof t === "string") {
    let i;
    if (o[6] !== t) i = e(n, {
      children: t
    }), o[6] = t, o[7] = i;
    else i = o[7];
    return i
  }
  return t
}

function Swn(l) {
  let d = w(23),
    {
      credentials: t,
      ideInstallationStatus: o,
      diagnosticsPromise: i,
      getWebSetupRead: u
    } = l,
    c;
  if (d[0] !== t) c = () => qPe(t), d[0] = t, d[1] = c;
  else c = d[1];
  let [m] = g(c), h;
  if (d[2] !== u) h = () => u(), d[2] = u, d[3] = h;
  else h = d[3];
  let [p] = g(h), f;
  if (d[4] !== p) f = () => p?.current(), d[4] = p, d[5] = f;
  else f = d[5];
  let [b, y] = g(f), v, E;
  if (d[6] !== p) v = () => {
    let A = !0;
    return p?.settled.then(() => {
      if (A) y(p.current())
    }), () => {
      A = !1
    }
  }, E = [p], d[6] = p, d[7] = v, d[8] = E;
  else v = d[7], E = d[8];
  R(v, E);
  let C = ol() ? 1 : void 0,
    P;
  if (d[9] !== m || d[10] !== o || d[11] !== b) P = e(Sr, {
    fallback: null,
    children: e(T, {
      ideInstallationStatus: o,
      accountStatusRead: m,
      webSetupStatus: b
    })
  }), d[9] = m, d[10] = o, d[11] = b, d[12] = P;
  else P = d[12];
  let I;
  if (d[13] !== i) I = e(Sr, {
    fallback: null,
    children: e(G, {
      promise: i
    })
  }), d[13] = i, d[14] = I;
  else I = d[14];
  let M;
  if (d[15] !== C || d[16] !== P || d[17] !== I) M = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: C,
    children: [P, I]
  }), d[15] = C, d[16] = P, d[17] = I, d[18] = M;
  else M = d[18];
  let _;
  if (d[19] === S) _ = e(n, {
    dimColor: !0,
    children: e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    })
  }), d[19] = _;
  else _ = d[19];
  let j;
  if (d[20] !== C || d[21] !== M) j = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: C,
    children: [M, _]
  }), d[20] = C, d[21] = M, d[22] = j;
  else j = d[22];
  return j
}

function T(l) {
  let y = w(16),
    {
      ideInstallationStatus: t,
      accountStatusRead: o,
      webSetupStatus: i
    } = l,
    u = o === void 0 ? void 0 : mr(o),
    d = W(ke),
    c = eoe() ?? d,
    m = W(Oe),
    h = W(Te),
    [p] = Zn(),
    f = ir(Ne),
    b = ir(Ge),
    v;
  if (y[0] !== u || y[1] !== b || y[2] !== t || y[3] !== c || y[4] !== m || y[5] !== h || y[6] !== f || y[7] !== p || y[8] !== i) v = VPe([_wn({
    sessionId: f,
    cwd: b,
    accountStatus: u,
    webSetupStatus: i
  }), bwn({
    mainLoopModel: c,
    mcp: m,
    theme: p,
    ideInstallationStatus: t,
    permissionMode: h
  })]), y[0] = u, y[1] = b, y[2] = t, y[3] = c, y[4] = m, y[5] = h, y[6] = f, y[7] = p, y[8] = i, y[9] = v;
  else v = y[9];
  let E = v,
    A;
  if (y[10] === S) A = Lt() && r(n, {
    dimColor: !0,
    children: ["Model and cwd are the", " ", lr()?.sessionId ? "cloud" : "remote", " session's; the other rows describe this terminal. /mcp asks the session too."]
  }), y[10] = A;
  else A = y[10];
  let C;
  if (y[11] === S) C = [{
    bold: !0
  }, {
    width: "fill"
  }], y[11] = C;
  else C = y[11];
  let P;
  if (y[12] !== E) P = E.filter(_e).flatMap(je), y[12] = E, y[13] = P;
  else P = y[13];
  let I;
  if (y[14] !== P) I = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [A, e(hd, {
      columns: C,
      children: P
    })]
  }), y[14] = P, y[15] = I;
  else I = y[15];
  return I
}

function G(l) {
  let i = w(5),
    {
      promise: t
    } = l,
    o = mr(t);
  if (o.length === 0) {
    return null
  }
  let u;
  if (i[0] === S) u = e(n, {
    bold: !0,
    children: "System diagnostics"
  }), i[0] = u;
  else u = i[0];
  let d;
  if (i[1] !== o) d = o.map(He), i[1] = o, i[2] = d;
  else d = i[2];
  let c;
  if (i[3] !== d) c = r(s, {
    flexDirection: "column",
    paddingBottom: 1,
    children: [u, d]
  }), i[3] = d, i[4] = c;
  else c = i[4];
  return c
}
export {
  gZn,
  hZn,
  _wn,
  bwn,
  yZn,
  Swn
};
