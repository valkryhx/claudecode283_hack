// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { Vcn, uIo } from "B:/~BUN/root/chunk-game8aqv.js";
import { R, d, k, tr, ci } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { g, m, c, ao } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { t, _, ee } from "B:/~BUN/root/chunk-2pp12te6.js";
import { drt } from "B:/~BUN/root/chunk-eev762xg.js";
import { Zd } from "B:/~BUN/root/chunk-3vtkd50k.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { CE, kc, Fc } from "B:/~BUN/root/chunk-trd3c21n.js";
import { $Dt } from "B:/~BUN/root/chunk-1jrzd264.js";
import { hl } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { randomUUID as M } from "crypto";
import { mkdir as j, open as O, readFile as D, rename as W, rm as L, stat as U, writeFile as C } from "fs/promises";
import { join as F } from "path";
class SwarmPaneError extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError";
  }
}
var I = /\p{Cc}/u;
function vLi(e) {
  return I.test(e);
}
function LDt(e) {
  let r = I.exec(e);
  if (r) {
    let n = r[0].codePointAt(0);
    throw new SwarmPaneError(`Refusing to send command containing control character U+${n.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`);
  }
}
function BMn(e) {
  return e === "tmux" || e === "iterm2";
}
function nSr(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function qms(e) {
  return e.replaceAll("@", "-");
}
function jMn(e) {
  return F(drt(), nSr(e));
}
function GXe(e) {
  return F(jMn(e), "config.json");
}
function E(e) {
  return Ve.team(nSr(e));
}
function P(e) {
  let r = "failureClass" in e ? `/${e.failureClass}` : "",
    n = "telemetryCode" in e && e.telemetryCode !== void 0 ? ` [${e.telemetryCode}]` : "";
  return `${e.code}${r}${n}`;
}
function A(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect";
}
function z(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended";
}
function S(e) {
  return e.code === "Unavailable" || e.code === "NotFound" || e.code === "Failed" && (e.failureClass === "permission" || e.failureClass === "resource" || e.failureClass === "environment" || e.failureClass === "unknown" && ci(e.cause));
}
function x(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let r = e,
    members = Array.isArray(r.members) ? r.members.filter(V) : [],
    leadProcess = K(r.leadProcess) ? r.leadProcess : void 0;
  return Array.isArray(r.members) && members.length === r.members.length && leadProcess === r.leadProcess ? r : {
    ...r,
    members: members,
    leadProcess: leadProcess
  };
}
function K(e) {
  return typeof e === "object" && e !== null && "pid" in e && Number.isSafeInteger(e.pid) && "pidSpace" in e && typeof e.pidSpace === "string" && "claimedAt" in e && Number.isFinite(e.claimedAt) && (!("procStart" in e) || typeof e.procStart === "string");
}
function V(e) {
  return typeof e === "object" && e !== null && "agentId" in e && typeof e.agentId === "string" && "name" in e && typeof e.name === "string";
}
async function IS(e, r) {
  if (r) {
    let n = await r.read([E(e)]);
    if (!n.ok) return t(`[TeammateTool] Failed to read team file for ${e}: ${n.error.code}`), null;
    let i = n.value.items[0];
    if (!i.found) return null;
    try {
      return x(ee(Buffer.from(i.value).toString("utf8")));
    } catch (error) {
      return t(`[TeammateTool] Failed to read team file for ${e}: ${d(error)}`), null;
    }
  }
  try {
    let n = await D(GXe(e), "utf-8");
    return x(ee(n));
  } catch (error) {
    if (k(error) === "ENOENT") return null;
    return t(`[TeammateTool] Failed to read team file for ${e}: ${d(error)}`), null;
  }
}
function rSr(e, r) {
  if (ci(r)) t(`[TeammateTool] Failed to write team file for ${e} (${k(r)}): ${d(r)}`, {
    level: "error"
  });else if (q(r)) t(`[TeammateTool] Failed to write team file for ${e}: ${d(r)}`, {
    level: "error"
  });else a(r);
}
function q(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null) return !1;
  let cause = e.cause;
  if (typeof cause !== "object" || typeof cause.code !== "string") return !1;
  return S(cause);
}
var H = {
  realpath: !1,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: () => {}
};
function v(e) {
  return new R(`Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`, "Team file missing (session team not initialized)");
}
async function Ioe(e, r, n, i) {
  if (i) return J(e, r, n, i);
  let o = GXe(e),
    u;
  try {
    u = await Zd(o, {
      lockfilePath: `${o}.lock`,
      ...H
    });
  } catch (error) {
    if (k(error) === "ENOENT") throw v(e);
    throw error;
  }
  try {
    let l = await IS(e);
    if (!l) throw Error("Team config file unreadable (lock acquired, read failed)");
    let f = r(l);
    if (f === !1) return;
    try {
      let p = _(l, null, 2),
        s = await O(o, "r+");
      try {
        await C(s, p), await s.truncate(Buffer.byteLength(p));
      } finally {
        await s.close();
      }
    } catch (error) {
      if (!n?.bestEffortWrite) throw k(error) === "ENOENT" ? v(e) : error;
      rSr(e, error);
    }
    return f;
  } finally {
    try {
      await u();
    } catch (error) {
      t(`[TeammateTool] updateTeamFile lock release failed: ${d(error)}`);
    }
  }
}
async function Yms(e, r, n) {
  try {
    await Ioe(e, i => {
      let o = i.members.findIndex(item => item.agentId === r);
      if (o === -1) return !1;
      i.members.splice(o, 1);
    }, void 0, n);
  } catch (error) {
    t(`[TeammateTool] removeTeamMember(${r}) failed: ${d(error)}`);
  }
}
async function J(e, r, n, i) {
  let o = E(e),
    u = 5,
    l = $Dt(50),
    f,
    p = T => {
      if (T === void 0) return {
        skip: !0,
        result: {
          kind: "missing"
        }
      };
      let y;
      try {
        y = x(ee(Buffer.from(T.value).toString("utf8"))) ?? void 0;
      } catch (error) {
        return {
          skip: !0,
          result: {
            kind: "unreadable",
            parseError: d(error)
          }
        };
      }
      if (!y) return {
        skip: !0,
        result: {
          kind: "unreadable"
        }
      };
      let result;
      try {
        result = r(y);
      } catch (error_2) {
        return {
          skip: !0,
          result: {
            kind: "threw",
            error: error_2
          }
        };
      }
      if (result === !1) return {
        skip: !0,
        result: {
          kind: "declined"
        }
      };
      return f = result, {
        write: _(y, null, 2),
        result: {
          kind: "applied",
          result: result
        }
      };
    },
    s;
  for (let T = 1;; T++) {
    if (s = await i.update(o, p), !s.ok) {
      if (A(s.error) && T < 5) {
        await l(T);
        continue;
      }
      break;
    }
    let result_2 = s.value.result;
    if (result_2 === void 0 || result_2.kind === "declined") return;
    switch (result_2.kind) {
      case "missing":
        throw v(e);
      case "unreadable":
        if (result_2.parseError !== void 0) t(`[TeammateTool] Failed to read team file for ${e}: ${result_2.parseError}`);
        if (T < 5) {
          await l(T);
          continue;
        }
        throw Error("Team config file unreadable (lock acquired, read failed)");
      case "threw":
        throw result_2.error;
      case "applied":
        return g("swarm_team_file_update"), result_2.result;
      default:
        return result_2;
    }
  }
  let w = z(s.error);
  if (w) c("swarm_team_file_update", "lock_contended");
  if (!n?.bestEffortWrite) {
    let T = new R(`Team file update failed (${P(s.error)}) for ${e}`, "Team file update failed (storage v5)");
    if (T.cause = s.error, !w && !S(s.error)) m("swarm_team_file_update", s.error.code);
    throw T;
  }
  if (!A(s.error) && S(s.error)) t(`[TeammateTool] Failed to update team file for ${e} (${P(s.error)})`, {
    level: "error"
  });else {
    let T = new R(`Team file update failed (${P(s.error)}) for ${e}`, "Team file update failed (storage v5)");
    T.cause = s.error, m("swarm_team_file_update", s.error.code), a(T);
  }
  return f;
}
async function Xms(e, r, n) {
  if (n) {
    let o = await n.write(E(e), _(r, null, 2), {
      precondition: {
        type: "none"
      }
    });
    if (!o.ok) {
      let u = new R(`Team file write failed (${P(o.error)}) for ${e}`, "Team file write failed (storage v5)");
      throw u.cause = o.error, u;
    }
    return;
  }
  let i = jMn(e);
  await j(i, {
    recursive: !0
  }), await C(GXe(e), _(r, null, 2));
}
async function ept(e, r, n) {
  let i = r.agentId || r.name;
  if (!i) return t("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), !1;
  let o = !1;
  try {
    let u = (await Ioe(e, l => {
      o = !1;
      let f = l.members.length;
      l.members = l.members.filter(item => {
        if (r.agentId && item.agentId === r.agentId) return !1;
        if (r.name && item.name === r.name) return !1;
        return !0;
      });
      let p = l.members.length !== f;
      return o = !p, p;
    }, {
      bestEffortWrite: !0
    }, n)) ?? !1;
    if (u) t(`[TeammateTool] Removed teammate from team file: ${i}`);else if (o) t(`[TeammateTool] Teammate ${i} not found in team file for "${e}"`);
    return u;
  } catch (error) {
    return t(`[TeammateTool] Cannot remove teammate ${i} from "${e}": ${d(error)}`), !1;
  }
}
async function tpt(e, r, n, i) {
  let u = (await IS(e, i).catch(() => null))?.members.find(f => f.agentId === r),
    l = u !== void 0 && u.joinedAt >= Date.parse(n);
  if (l) t(`[TeammateTool] Ignoring a shutdown approval for ${r}: it was sent before this member joined`);
  return l;
}
async function WMn(e, r, n, i) {
  let o = !1;
  try {
    let u = (await Ioe(e, l => {
      let f = l.members.findIndex(item => item.agentId === r),
        p = l.members[f];
      if (!p) return o = !1, !1;
      if (n?.onlyIfJoinedBefore !== void 0 && p.joinedAt >= n.onlyIfJoinedBefore) return o = !0, !1;
      return o = !1, l.members.splice(f, 1), !0;
    }, {
      bestEffortWrite: !0
    }, i)) ?? !1;
    if (u) t(`[TeammateTool] Removed member ${r} from team ${e}`);else if (o) t(`[TeammateTool] Skipped stale removal of ${r} from team ${e} (re-added after removal was initiated)`);
    return u;
  } catch (error) {
    return t(`[TeammateTool] removeMemberByAgentId(${r}) failed for team ${e}: ${d(error)}`), !1;
  }
}
async function wco(e, r, n, i) {
  let o = "unchanged";
  try {
    if (await Ioe(e, u => {
      let l = u.members.find(item => item.name === r);
      if (!l) return o = "absent", !1;
      if (l.mode === n) return o = "unchanged", !1;
      o = "set", l.mode = n;
    }, void 0, i), o === "absent") t(`[TeammateTool] Cannot set member mode: member ${r} not found in team ${e}`);else if (o === "set") t(`[TeammateTool] Set member ${r} in team ${e} to mode: ${n}`);
  } catch (error) {
    t(`[TeammateTool] Cannot set member mode: ${d(error)}`);
  }
}
async function zMn(e, r, n) {
  if (!Fc()) return;
  let i = r ?? kc(),
    o = CE();
  if (i && o) await wco(i, o, e, n);
}
async function GMn(e, r, n, i) {
  let o = "unchanged";
  try {
    if (await Ioe(e, u => {
      let l = u.members.find(item => item.name === r);
      if (!l) return o = "absent", !1;
      if (l.isActive === n) return o = "unchanged", !1;
      o = "set", l.isActive = n;
    }, void 0, i), o === "absent") t(`[TeammateTool] Cannot set member active: member ${r} not found in team ${e}`);else if (o === "set") t(`[TeammateTool] Set member ${r} in team ${e} to ${n ? "active" : "idle"}`);
  } catch (error) {
    t(`[TeammateTool] Cannot set member active: ${d(error)}`);
  }
}
function Jms(e) {
  Vcn().add(e);
}
async function lSa(e) {
  return ao("swarm_session_cleanup", async () => {
    let r = Vcn();
    if (r.size === 0) return;
    let n = Array.from(r);
    t(`cleanupSessionTeams: removing ${n.length} orphan team dir(s): ${n.join(", ")}`), await Promise.allSettled(n.map(item => N(item, e)));
    let i = await Promise.allSettled(n.map(item => oSr(item)));
    r.clear();
    for (let o of i) if (o.status === "rejected") throw o.reason;
  }).catch(() => {});
}
function B(e, r) {
  return `${e}:${r}`;
}
function Qms(e, r) {
  if (BMn(e) && r) uIo().add(B(e, r));
}
async function N(e, r) {
  let n = await IS(e, r);
  if (!n) return;
  let i = uIo(),
    o = n.members.filter(item => item.name !== hl && item.tmuxPaneId && item.backendType && BMn(item.backendType) && i.has(B(item.backendType, item.tmuxPaneId)));
  if (o.length === 0) return;
  let [{
    ensureBackendsRegistered: ensureBackendsRegistered,
    getBackendByType: getBackendByType
  }, {
    isInsideTmux: isInsideTmux
  }] = await Promise.all([import("B:/~BUN/root/chunk-a9gmfq9m.js"), import("B:/~BUN/root/chunk-0yr3nzvr.js")]);
  await ensureBackendsRegistered();
  let p = !(await isInsideTmux());
  await Promise.allSettled(o.map(async item => {
    if (!item.tmuxPaneId || !item.backendType || !BMn(item.backendType)) return;
    let w = await getBackendByType(item.backendType).killPane(item.tmuxPaneId, p);
    t(`cleanupSessionTeams: killPane ${item.name} (${item.backendType} ${item.tmuxPaneId}) \u2192 ${w}`);
  }));
}
var Y = 3;
async function oSr(e) {
  return ao("swarm_team_cleanup", async () => {
    let r = jMn(e);
    try {
      let n = `${r}.deleted-${M()}`,
        i = await W(r, n).then(() => n, () => r);
      for (let o = 1;; o++) {
        if (await L(i, {
          recursive: !0,
          force: !0
        }), await U(i).then(() => !1, l => k(l) === "ENOENT")) break;
        if (o === Y) throw t(`[TeammateTool] ${i} still exists after ${o} delete attempts`), Error("team folder still exists after every delete attempt");
      }
      t(`[TeammateTool] Cleaned up team directory: ${r}`);
    } catch (error) {
      throw t(`[TeammateTool] Failed to clean up team directory ${r}: ${d(error)}`), error;
    }
  }, r => tr(r) ?? "error");
}
export { SwarmPaneError as I2, vLi, LDt, BMn, nSr, qms, jMn, GXe, IS, rSr, Ioe, Yms, Xms, ept, tpt, WMn, wco, zMn, GMn, Jms, lSa, Qms, oSr };