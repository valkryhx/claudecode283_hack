// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  vo,
  cP,
  t_
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  a,
  oC
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  Rr,
  Tt
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  zD
} from "B:/~BUN/root/chunk-h9p45fg5.js";
import {
  me
} from "B:/~BUN/root/chunk-1gpjpba6.js";
import {
  xe
} from "B:/~BUN/root/chunk-8pmnanyd.js";
import {
  Z3,
  Ht,
  Dp
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  w
} from "B:/~BUN/root/chunk-rysqv8v1.js";
import {
  bl
} from "B:/~BUN/root/chunk-b900np4s.js";
import {
  br
} from "B:/~BUN/root/chunk-g5gf7tps.js";
import {
  s,
  n
} from "B:/~BUN/root/chunk-damrp3r8.js";
import {
  W$
} from "B:/~BUN/root/chunk-jh5vsjwc.js";
import {
  Ki
} from "B:/~BUN/root/chunk-19m6yp46.js";
import {
  _ot
} from "B:/~BUN/root/chunk-2ym72j6h.js";
import {
  qr
} from "B:/~BUN/root/chunk-xc1c9t20.js";
import {
  V
} from "B:/~BUN/root/chunk-tgzmva3g.js";
import {
  Kye
} from "B:/~BUN/root/chunk-msja8jzc.js";
import {
  nN
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Htn
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  EPe
} from "B:/~BUN/root/chunk-arcgcnq8.js";
import {
  tPe,
  Yws
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  hor
} from "B:/~BUN/root/chunk-3ssfhh38.js";
import {
  aVe,
  N3o,
  F3o,
  H3o,
  $3o,
  U3o,
  B3o,
  j3o,
  W3o,
  z3o,
  G3o,
  V3o,
  q3o,
  lVe,
  lSn,
  dSn,
  K3o
} from "B:/~BUN/root/chunk-czr5vftx.js";
import {
  wz
} from "B:/~BUN/root/chunk-w83t0s5z.js";
import {
  ft
} from "B:/~BUN/root/chunk-jh7dpafw.js";
import {
  lp
} from "B:/~BUN/root/chunk-hc3r626b.js";
import {
  gt
} from "B:/~BUN/root/chunk-vs438w4e.js";
import {
  Q,
  e,
  r
} from "B:/~BUN/root/chunk-x2hkxw5q.js";
import {
  Xr,
  $r,
  P,
  Z,
  y,
  B
} from "B:/~BUN/root/chunk-5hr2ysa5.js";
import {
  eW
} from "B:/~BUN/root/chunk-fck2jn8z.js";
import {
  ZGs,
  myt,
  Pcn,
  Ocn
} from "B:/~BUN/root/chunk-dq3y90rd.js";
import {
  He
} from "B:/~BUN/root/chunk-8znbjmp4.js";
import {
  S
} from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
var nqr = {
    memory: void 0,
    load: void 0,
    disk: void 0
  },
  Mt = He({
    value: !1
  }, (i) => {
    i.value = !1
  });

function jGt(i) {
  return
}

function rqr(i, t, o) {
  if (xe() !== "firstParty" || !Z3() || !EPe()) return;
  let u = wz.of(i);
  return {
    current: () => u.peek(t, o),
    settled: u.read(t, o)
  }
}

function z(i) {
  switch (i) {
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

function Ue(D) {
  return D.mainLoopModel
}

function Ge(T) {
  return T.mcp
}

function Be(G) {
  return G.toolPermissionContext.mode
}

function We(H) {
  return H.id
}

function ze(Ve) {
  return vo(Ve).cwd
}

function Ke(Xe) {
  return Xe.length > 0
}

function Ye(qe, W) {
  return [W > 0 && r(lp.Row, {
    children: [e(Q, {
      children: " "
    }), e(Q, {
      children: ""
    })]
  }, `gap-${W}`), ...qe.map((i, Qe) => {
    let {
      label: ce,
      value: Je
    } = i;
    return r(lp.Row, {
      children: [e(Q, {
        children: ce !== void 0 ? `${ce}:` : ""
      }), e(N, {
        value: Je
      })]
    }, `${W}-${Qe}`)
  })]
}

function Fe(C, f) {
  return r(s, {
    flexDirection: "row",
    gap: 1,
    paddingX: 1,
    children: [e(ft, {
      status: "warning"
    }), typeof C === "string" ? e(n, {
      wrap: "wrap",
      children: C
    }) : C]
  }, f)
}
var oqr = " (details in the --debug log)";

function Ker({
  sessionId: i,
  cwd: t,
  accountStatus: o,
  machineStatus: u,
  webSetupStatus: d
}) {
  let m = a.CLAUDE_CODE_TMUX_SESSION,
    l = tPe(),
    C = Yws(),
    f = Rr()?.sessionId,
    g = nN(i) ?? e(n, {
      dimColor: !0,
      children: "/rename to add a name"
    }),
    h = t_(),
    c = "";
  if (h.length > 0) {
    let v = h.map((M) => M.kind === "plugin" ? `plugin:${M.name}@${M.marketplace}` : `server:${M.name}`).join(", "),
      p = xe() !== "firstParty" ? "not available on third-party providers" : !W$() ? "not currently available" : _ot(me("policySettings")) ? "blocked by org policy" : void 0;
    c = p ? `Configured but not active (${p}): ${v}` : `Listening for messages from ${v}`
  }
  return [{
    label: "Version",
    value: `${{ISSUES_EXPLAINER:"report the issue at https://github.com/anthropics/claude-code/issues",PACKAGE_URL:"@anthropic-ai/claude-code",README_URL:"https://code.claude.com/docs/en/overview",VERSION:"2.1.303",FEEDBACK_CHANNEL:"https://github.com/anthropics/claude-code/issues",BUILD_TIME:"2026-10-18T20:20:57Z",GIT_SHA:"07df2aedd2d01d2f60907b8404acbda187b04072",HOOKS_WORKER_URL:"B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",DD_SOURCEMAP_GROUP:"win32"}.VERSION}${eW()}`
  }, ...[], {
    label: "Session name",
    value: g
  }, {
    label: f === i ? "Cloud session ID" : "Session ID",
    value: i
  }, ...f !== void 0 && f !== i ? [{
    label: "Cloud session ID",
    value: f
  }] : [], {
    label: "Session kind",
    value: !Ht() ? "interactive" : Dp() ? "background job \xB7 unattended" : "background job \xB7 attached"
  }, ...m ? [{
    label: "tmux session",
    value: m
  }] : [], ...c ? [{
    label: "Channels",
    value: c
  }] : [], ...Ki() && oC.CLAUDE_CODE_MESSAGING_SOCKET ? [{
    label: "Peer address",
    value: `uds:${oC.CLAUDE_CODE_MESSAGING_SOCKET}`
  }] : [], ...Ki() && !oC.CLAUDE_CODE_MESSAGING_SOCKET && hor() !== void 0 ? [{
    label: "Peer address",
    value: `unavailable \u2014 ${hor()}${oqr}`
  }] : [], ...cP() ? [{
    label: "Memory",
    value: Htn() ? "Paused for this session \xB7 /pause-memory to resume" : "Paused for this session \xB7 see /account-memory"
  }] : [], ...[], {
    label: "cwd",
    value: t
  }, ...lSn(o), ...z(d), ...pe(), ...dSn()]
}

function pe() {
  let i = zD();
  if (i.length === 0) return [];
  return [{
    label: "Organization configuration",
    value: Ocn(i).map((t) => Pcn(t) ? ZGs(t) : t)
  }, ...i.includes("hipaa") ? [{
    value: e(n, {
      dimColor: !0,
      children: myt
    })
  }] : []]
}

function Yer({
  mainLoopModel: i,
  mcp: t,
  theme: o,
  ideInstallationStatus: u,
  permissionMode: d
}) {
  return [{
    label: "Model",
    value: K3o(i)
  }, ...H3o(), ...Tt() ? [] : [...$3o(t.clients, u, o), ...U3o(t.clients, o), ...F3o(), ...N3o()], ...j3o(), ...W3o(d), ...z3o()]
}
async function sqr(i, t, o) {
  return (await Promise.all([G3o(), q3o(t), V3o(t), Tt() ? [] : B3o(i, t, o)])).flat()
}

function N(i) {
  let o = w(8),
    {
      value: t
    } = i;
  if (Array.isArray(t)) {
    let u;
    if (o[0] !== t) {
      let d;
      if (o[2] !== t.length) d = (m, l) => r(n, {
        children: [m, l < t.length - 1 ? "," : ""]
      }, l), o[2] = t.length, o[3] = d;
      else d = o[3];
      u = t.map(d);
      o[0] = t, o[1] = u
    } else u = o[1];
    let d;
    if (o[4] !== u) d = e(s, {
      flexWrap: "wrap",
      columnGap: 1,
      flexShrink: 99,
      children: u
    }), o[4] = u, o[5] = d;
    else d = o[5];
    return d
  }
  if (typeof t === "string") {
    let u;
    if (o[6] !== t) u = e(n, {
      children: t
    }), o[6] = t, o[7] = u;
    else u = o[7];
    return u
  }
  return t
}

function Xer(i) {
  let l = w(26),
    {
      credentials: t,
      ideInstallationStatus: o,
      diagnosticsPromise: u,
      getWebSetupRead: d,
      getMachineStatusRead: m
    } = i,
    C;
  if (l[0] !== t) C = () => lVe(t), l[0] = t, l[1] = C;
  else C = l[1];
  let [f] = y(C), E;
  if (l[2] !== m) E = () => m(), l[2] = m, l[3] = E;
  else E = l[3];
  let [g] = y(E), h;
  if (l[4] !== d) h = () => d(), l[4] = d, l[5] = h;
  else h = l[5];
  let [c] = y(h), v;
  if (l[6] !== c) v = () => c?.current(), l[6] = c, l[7] = v;
  else v = l[7];
  let [p, M] = y(v), x, A;
  if (l[8] !== c) x = () => {
    let L = !0;
    return c?.settled.then(() => {
      if (L) M(c.current())
    }), () => {
      L = !1
    }
  }, A = [c], l[8] = c, l[9] = x, l[10] = A;
  else x = l[9], A = l[10];
  P(x, A);
  let b = bl() ? 1 : void 0,
    R;
  if (l[11] !== f || l[12] !== o || l[13] !== g || l[14] !== p) R = e(Xr, {
    fallback: null,
    children: e(j, {
      ideInstallationStatus: o,
      accountStatusRead: f,
      machineStatusRead: g,
      webSetupStatus: p
    })
  }), l[11] = f, l[12] = o, l[13] = g, l[14] = p, l[15] = R;
  else R = l[15];
  let D;
  if (l[16] !== u) D = e(Xr, {
    fallback: null,
    children: e(U, {
      promise: u
    })
  }), l[16] = u, l[17] = D;
  else D = l[17];
  let T;
  if (l[18] !== b || l[19] !== R || l[20] !== D) T = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: b,
    children: [R, D]
  }), l[18] = b, l[19] = R, l[20] = D, l[21] = T;
  else T = l[21];
  let G;
  if (l[22] === S) G = e(n, {
    dimColor: !0,
    children: e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    })
  }), l[22] = G;
  else G = l[22];
  let H;
  if (l[23] !== b || l[24] !== T) H = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: b,
    children: [T, G]
  }), l[23] = b, l[24] = T, l[25] = H;
  else H = l[25];
  return H
}

function j(i) {
  let p = w(17),
    {
      ideInstallationStatus: t,
      accountStatusRead: o,
      machineStatusRead: u,
      webSetupStatus: d
    } = i,
    m = o === void 0 ? void 0 : $r(o),
    l = u === void 0 ? void 0 : $r(u),
    C = V(Ue),
    f = Kye() ?? C,
    E = V(Ge),
    g = V(Be),
    [h] = br(),
    c = qr(We),
    v = qr(ze),
    M;
  if (p[0] !== m || p[1] !== v || p[2] !== t || p[3] !== l || p[4] !== f || p[5] !== E || p[6] !== g || p[7] !== c || p[8] !== h || p[9] !== d) M = aVe([Ker({
    sessionId: c,
    cwd: v,
    accountStatus: m,
    machineStatus: l,
    webSetupStatus: d
  }), Yer({
    mainLoopModel: f,
    mcp: E,
    theme: h,
    ideInstallationStatus: t,
    permissionMode: g
  })]), p[0] = m, p[1] = v, p[2] = t, p[3] = l, p[4] = f, p[5] = E, p[6] = g, p[7] = c, p[8] = h, p[9] = d, p[10] = M;
  else M = p[10];
  let x = M,
    A;
  if (p[11] === S) A = Tt() && r(n, {
    dimColor: !0,
    children: ["Model and cwd are the", " ", Rr()?.sessionId ? "cloud" : "remote", " session's; the other rows describe this terminal. /mcp asks the session too."]
  }), p[11] = A;
  else A = p[11];
  let L;
  if (p[12] === S) L = [{
    bold: !0
  }, {
    width: "fill"
  }], p[12] = L;
  else L = p[12];
  let b;
  if (p[13] !== x) b = x.filter(Ke).flatMap(Ye), p[13] = x, p[14] = b;
  else b = p[14];
  let R;
  if (p[15] !== b) R = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [A, e(lp, {
      columns: L,
      children: b
    })]
  }), p[15] = b, p[16] = R;
  else R = p[16];
  return R
}

function U(i) {
  let u = w(5),
    {
      promise: t
    } = i,
    o = $r(t);
  if (o.length === 0) {
    return null
  }
  let d;
  if (u[0] === S) d = e(n, {
    bold: !0,
    children: "System diagnostics"
  }), u[0] = d;
  else d = u[0];
  let m;
  if (u[1] !== o) m = o.map(Fe), u[1] = o, u[2] = m;
  else m = u[2];
  let l;
  if (u[3] !== m) l = r(s, {
    flexDirection: "column",
    paddingBottom: 1,
    children: [d, m]
  }), u[3] = m, u[4] = l;
  else l = u[4];
  return l
}
export {
  nqr,
  jGt,
  rqr,
  oqr,
  Ker,
  Yer,
  sqr,
  Xer
};
