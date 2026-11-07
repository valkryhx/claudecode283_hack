// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Bo, S0, dv } from "B:/~BUN/root/chunk-game8aqv.js";
import { i, mP } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { rr, Ct } from "B:/~BUN/root/chunk-thn0wk2x.js";
import { JD } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { be } from "B:/~BUN/root/chunk-7wn6n2hd.js";
import { Te } from "B:/~BUN/root/chunk-8f4z6bdn.js";
import { hV, Gt, Kf } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { Bl } from "B:/~BUN/root/chunk-q8sf8fhe.js";
import { Br } from "B:/~BUN/root/chunk-vxjrk7vf.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { zG } from "B:/~BUN/root/chunk-p13t3he7.js";
import { jl } from "B:/~BUN/root/chunk-rzc1dapy.js";
import { lCt } from "B:/~BUN/root/chunk-4zrrye7q.js";
import { Io } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { gm, yUe } from "B:/~BUN/root/chunk-merv3av7.js";
import { G } from "B:/~BUN/root/chunk-tmdrwqnv.js";
import { MPe } from "B:/~BUN/root/chunk-9834xxs4.js";
import { JB } from "B:/~BUN/root/chunk-27h4st9h.js";
import { KOn } from "B:/~BUN/root/chunk-cxcakgnv.js";
import { QWe } from "B:/~BUN/root/chunk-vyjvp8sa.js";
import { O2r } from "B:/~BUN/root/chunk-ze602be8.js";
import { Mot, i8s, a8s, l8s, d8s, c8s, u8s, f8s, p8s, m8s, h8s, g8s, y8s, _8s, Dot, M3n, D3n, b8s } from "B:/~BUN/root/chunk-16frjjz9.js";
import { Wne } from "B:/~BUN/root/chunk-0yg1pq2n.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { fa } from "B:/~BUN/root/chunk-t99rgr48.js";
import { LM } from "B:/~BUN/root/chunk-fd5dzvk6.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { ne, e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { Ho, ko, O, Z, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { m2e, RKi } from "B:/~BUN/root/chunk-xr3thd43.js";
import { UX } from "B:/~BUN/root/chunk-7mppcgdr.js";
import { JJi, XUt as children_2, SWn, wWn } from "B:/~BUN/root/chunk-zvpxvfbv.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
function NFo(o, t, l) {
  if (Te() !== "firstParty" || !hV() || !QWe()) return;
  let d = Wne.of(o);
  return {
    current: () => d.peek(t, l),
    settled: d.read(t, l)
  };
}
function X(o) {
  switch (o) {
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
      return [];
  }
}
function Ve(L) {
  return L.mainLoopModel;
}
function Ye(W) {
  return W.mcp;
}
function Xe(V) {
  return V.toolPermissionContext.mode;
}
function Ke(Ze) {
  return Ze.remoteSessionName;
}
function qe(et) {
  return et.id;
}
function ze(tt) {
  return Bo(tt).cwd;
}
function Fe(ot) {
  return ot.length > 0;
}
function Je(nt, Y) {
  return [Y > 0 && r(gm.Row, {
    children: [e(ne, {
      children: " "
    }), e(ne, {
      children: ""
    })]
  }, `gap-${Y}`), ...nt.map((item, index) => {
    let {
      label: label,
      value: value,
      linkify: linkify
    } = item;
    return r(gm.Row, {
      children: [e(ne, {
        children: label !== void 0 ? `${label}:` : ""
      }), e(H, {
        value: value,
        linkify: linkify
      })]
    }, `${Y}-${index}`);
  })];
}
function Qe(children, p) {
  return r(s, {
    flexDirection: "row",
    gap: 1,
    paddingX: 1,
    children: [e(Tt, {
      status: "warning"
    }), typeof children === "string" ? e(n, {
      wrap: "wrap",
      children: children
    }) : children]
  }, p);
}
var FFo = " (details in the --debug log)";
function dWr({
  sessionId: o,
  remoteSessionName: remoteSessionName,
  cwd: l,
  accountStatus: accountStatus,
  machineStatus: machineStatus,
  webSetupStatus: webSetupStatus
}) {
  let a = i.CLAUDE_CODE_TMUX_SESSION,
    P = m2e(),
    p = RKi(),
    value_3 = rr()?.sessionId,
    value_2 = remoteSessionName ?? JB(o) ?? e(n, {
      dimColor: !0,
      children: "/rename to add a name"
    }),
    m = dv(),
    value_4 = "";
  if (m.length > 0) {
    let g = m.map(item => item.kind === "plugin" ? `plugin:${item.name}@${item.marketplace}` : `server:${item.name}`).join(", "),
      h = Te() !== "firstParty" ? "not available on third-party providers" : !zG() ? "not currently available" : lCt(be("policySettings")) ? "blocked by org policy" : void 0;
    value_4 = h ? `Configured but not active (${h}): ${g}` : `Listening for messages from ${g}`;
  }
  return [{
    label: "Version",
    value: `${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.319",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-11-05T18:14:18Z",
      GIT_SHA: "fbdd7e02e8530e4c2ade8cc67d30104e53d2c8f2",
      HOOKS_WORKER_URL: "B:/~BUN/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
      DD_SOURCEMAP_GROUP: "win32"
    }.VERSION}${UX()}`
  }, ...[], {
    label: "Session name",
    value: value_2
  }, {
    label: value_3 === o ? "Cloud session ID" : "Session ID",
    value: o
  }, ...(value_3 !== void 0 && value_3 !== o ? [{
    label: "Cloud session ID",
    value: value_3
  }] : []), {
    label: "Session kind",
    value: !Gt() ? "interactive" : Kf() ? "background job \xB7 unattended" : "background job \xB7 attached"
  }, ...(a ? [{
    label: "tmux session",
    value: a
  }] : []), ...(value_4 ? [{
    label: "Channels",
    value: value_4
  }] : []), ...(jl() && mP.CLAUDE_CODE_MESSAGING_SOCKET ? [{
    label: "Peer address",
    value: `uds:${mP.CLAUDE_CODE_MESSAGING_SOCKET}`
  }] : []), ...(jl() && !mP.CLAUDE_CODE_MESSAGING_SOCKET && O2r() !== void 0 ? [{
    label: "Peer address",
    value: `unavailable \u2014 ${O2r()}${FFo}`
  }] : []), ...(S0() ? [{
    label: "Memory",
    value: KOn() ? "Paused for this session \xB7 /pause-memory to resume" : "Paused for this session \xB7 see /account-memory"
  }] : []), ...[], {
    label: "cwd",
    value: l
  }, ...M3n(accountStatus), ...l8s(), ...X(webSetupStatus), ...fe(), ...D3n()];
}
function fe() {
  let o = JD();
  if (o.length === 0) return [];
  return [{
    label: "Organization configuration",
    value: wWn(o).map(item => SWn(item) ? JJi(item) : item)
  }, ...(o.includes("hipaa") ? [{
    value: e(n, {
      dimColor: !0,
      children: children_2
    })
  }] : [])];
}
function cWr({
  mainLoopModel: mainLoopModel,
  mcp: mcp,
  theme: theme,
  ideInstallationStatus: ideInstallationStatus,
  permissionMode: permissionMode
}) {
  return [{
    label: "Model",
    value: b8s(mainLoopModel)
  }, ...d8s(), ...(Ct() ? [] : [...c8s(mcp.clients, ideInstallationStatus, theme), ...u8s(mcp.clients, theme), ...a8s(), ...i8s()]), ...p8s(), ...m8s(permissionMode), ...h8s()];
}
async function HFo(o, t, l) {
  return (await Promise.all([g8s(), _8s(t), y8s(t), Ct() ? [] : f8s(o, t, l)])).flat();
}
function H(o) {
  let c = S(9),
    {
      value: t,
      linkify: linkify_2
    } = o,
    d = linkify_2 === void 0 ? !1 : linkify_2;
  if (Array.isArray(t)) {
    let children_3;
    if (c[0] !== t) {
      let a;
      if (c[2] !== t.length) a = (P, p) => r(n, {
        children: [P, p < t.length - 1 ? "," : ""]
      }, p), c[2] = t.length, c[3] = a;else a = c[3];
      children_3 = t.map(a);
      c[0] = t, c[1] = children_3;
    } else children_3 = c[1];
    let a;
    if (c[4] !== children_3) a = e(s, {
      flexWrap: "wrap",
      columnGap: 1,
      flexShrink: 99,
      children: children_3
    }), c[4] = children_3, c[5] = a;else a = c[5];
    return a;
  }
  if (typeof t === "string") {
    let u;
    if (c[6] !== d || c[7] !== t) u = d ? e(LM, {
      children: t
    }) : e(n, {
      children: t
    }), c[6] = d, c[7] = t, c[8] = u;else u = c[8];
    return u;
  }
  return t;
}
function uWr(o) {
  let a = S(26),
    {
      credentials: credentials,
      ideInstallationStatus: ideInstallationStatus_2,
      diagnosticsPromise: d,
      getWebSetupRead: getWebSetupRead,
      getMachineStatusRead: getMachineStatusRead
    } = o,
    P;
  if (a[0] !== credentials) P = () => Dot(credentials), a[0] = credentials, a[1] = P;else P = a[1];
  let [accountStatusRead] = y(P),
    f;
  if (a[2] !== getMachineStatusRead) f = () => getMachineStatusRead(), a[2] = getMachineStatusRead, a[3] = f;else f = a[3];
  let [machineStatusRead] = y(f),
    I;
  if (a[4] !== getWebSetupRead) I = () => getWebSetupRead(), a[4] = getWebSetupRead, a[5] = I;else I = a[5];
  let [m] = y(I),
    b;
  if (a[6] !== m) b = () => m?.current(), a[6] = m, a[7] = b;else b = a[7];
  let [webSetupStatus_2, h] = y(b),
    C,
    A;
  if (a[8] !== m) C = () => {
    let N = !0;
    return m?.settled.then(() => {
      if (N) h(m.current());
    }), () => {
      N = !1;
    };
  }, A = [m], a[8] = m, a[9] = C, a[10] = A;else C = a[9], A = a[10];
  O(C, A);
  let flexGrow = Bl() ? 1 : void 0,
    M;
  if (a[11] !== accountStatusRead || a[12] !== ideInstallationStatus_2 || a[13] !== machineStatusRead || a[14] !== webSetupStatus_2) M = e(Ho, {
    fallback: null,
    children: e(U, {
      ideInstallationStatus: ideInstallationStatus_2,
      accountStatusRead: accountStatusRead,
      machineStatusRead: machineStatusRead,
      webSetupStatus: webSetupStatus_2
    })
  }), a[11] = accountStatusRead, a[12] = ideInstallationStatus_2, a[13] = machineStatusRead, a[14] = webSetupStatus_2, a[15] = M;else M = a[15];
  let D;
  if (a[16] !== d) D = e(Ho, {
    fallback: null,
    children: e(B, {
      promise: d
    })
  }), a[16] = d, a[17] = D;else D = a[17];
  let L;
  if (a[18] !== flexGrow || a[19] !== M || a[20] !== D) L = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: flexGrow,
    children: [M, D]
  }), a[18] = flexGrow, a[19] = M, a[20] = D, a[21] = L;else L = a[21];
  let W;
  if (a[22] === w) W = e(n, {
    dimColor: !0,
    italic: !1,
    children: e(gt, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel",
      ...fa(!1)
    })
  }), a[22] = W;else W = a[22];
  let V;
  if (a[23] !== flexGrow || a[24] !== L) V = r(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: flexGrow,
    children: [L, W]
  }), a[23] = flexGrow, a[24] = L, a[25] = V;else V = a[25];
  return V;
}
function U(o) {
  let h = S(18),
    {
      ideInstallationStatus: ideInstallationStatus_3,
      accountStatusRead: accountStatusRead_2,
      machineStatusRead: machineStatusRead_2,
      webSetupStatus: webSetupStatus_3
    } = o,
    accountStatus_2 = accountStatusRead_2 === void 0 ? void 0 : ko(accountStatusRead_2),
    machineStatus_2 = machineStatusRead_2 === void 0 ? void 0 : ko(machineStatusRead_2),
    P = G(Ve),
    mainLoopModel_2 = MPe() ?? P,
    mcp_2 = G(Ye),
    permissionMode_2 = G(Xe),
    remoteSessionName_2 = G(Ke),
    [theme_2] = Br(),
    sessionId = Io(qe),
    cwd = yUe(Io(ze)),
    C;
  if (h[0] !== accountStatus_2 || h[1] !== cwd || h[2] !== ideInstallationStatus_3 || h[3] !== machineStatus_2 || h[4] !== mainLoopModel_2 || h[5] !== mcp_2 || h[6] !== permissionMode_2 || h[7] !== remoteSessionName_2 || h[8] !== sessionId || h[9] !== theme_2 || h[10] !== webSetupStatus_3) C = Mot([dWr({
    sessionId: sessionId,
    remoteSessionName: remoteSessionName_2,
    cwd: cwd,
    accountStatus: accountStatus_2,
    machineStatus: machineStatus_2,
    webSetupStatus: webSetupStatus_3
  }), cWr({
    mainLoopModel: mainLoopModel_2,
    mcp: mcp_2,
    theme: theme_2,
    ideInstallationStatus: ideInstallationStatus_3,
    permissionMode: permissionMode_2
  })]), h[0] = accountStatus_2, h[1] = cwd, h[2] = ideInstallationStatus_3, h[3] = machineStatus_2, h[4] = mainLoopModel_2, h[5] = mcp_2, h[6] = permissionMode_2, h[7] = remoteSessionName_2, h[8] = sessionId, h[9] = theme_2, h[10] = webSetupStatus_3, h[11] = C;else C = h[11];
  let A = C,
    N;
  if (h[12] === w) N = Ct() && r(n, {
    dimColor: !0,
    children: ["Model and cwd are the", " ", rr()?.sessionId ? "cloud" : "remote", " session's; the other rows describe this terminal. /mcp asks the session too."]
  }), h[12] = N;else N = h[12];
  let columns;
  if (h[13] === w) columns = [{
    bold: !0
  }, {
    width: "fill"
  }], h[13] = columns;else columns = h[13];
  let children_4;
  if (h[14] !== A) children_4 = A.filter(Fe).flatMap(Je), h[14] = A, h[15] = children_4;else children_4 = h[15];
  let D;
  if (h[16] !== children_4) D = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [N, e(gm, {
      columns: columns,
      children: children_4
    })]
  }), h[16] = children_4, h[17] = D;else D = h[17];
  return D;
}
function B(o) {
  let d = S(5),
    {
      promise: promise
    } = o,
    l = ko(promise);
  if (l.length === 0) {
    return null;
  }
  let c;
  if (d[0] === w) c = e(n, {
    bold: !0,
    children: "System diagnostics"
  }), d[0] = c;else c = d[0];
  let u;
  if (d[1] !== l) u = l.map(Qe), d[1] = l, d[2] = u;else u = d[2];
  let a;
  if (d[3] !== u) a = r(s, {
    flexDirection: "column",
    paddingBottom: 1,
    children: [c, u]
  }), d[3] = u, d[4] = a;else a = d[4];
  return a;
}
export { NFo, FFo, dWr, cWr, HFo, uWr };