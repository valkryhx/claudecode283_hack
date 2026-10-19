// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ejr, Tjr } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { x, d, k, Ts } from "B:/~BUN/root/chunk-3aez4b53.js";
import { g, m, p, po } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { _, J, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { fet } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { dl } from "B:/~BUN/root/chunk-7c8rc0p5.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { eS, id, Zd } from "B:/~BUN/root/chunk-8v3gkznb.js";
import { wpt } from "B:/~BUN/root/chunk-92fjqg3t.js";
import { Oa } from "B:/~BUN/root/chunk-v6pbq6dm.js";
import { mkdir as M, readFile as O, rm as W, writeFile as j } from "fs/promises";
import { join as F } from "path";
class SwarmPaneError extends Error {
  constructor(e) {
    super(e);
    this.name = "SwarmPaneError";
  }
}
var A = /\p{Cc}/u;
function DOs(e) {
  return A.test(e);
}
function dpt(e) {
  let r = A.exec(e);
  if (r) {
    let n = r[0].codePointAt(0);
    throw new SwarmPaneError(`Refusing to send command containing control character U+${n.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`);
  }
}
function Tnn(e) {
  return e === "tmux" || e === "iterm2";
}
function NWn(e) {
  return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function eko(e) {
  return e.replaceAll("@", "-");
}
function C(e) {
  return F(fet(), NWn(e));
}
function EBe(e) {
  return F(C(e), "config.json");
}
function I(e) {
  return Be.team(NWn(e));
}
function P(e) {
  let r = "failureClass" in e ? `/${e.failureClass}` : "",
    n = "telemetryCode" in e && e.telemetryCode !== void 0 ? ` [${e.telemetryCode}]` : "";
  return `${e.code}${r}${n}`;
}
function E(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockSuspect";
}
function D(e) {
  return e.code === "Unavailable" && e.telemetryCode === "LockContended";
}
function v(e) {
  return e.code === "Unavailable" || e.code === "NotFound" || e.code === "Failed" && (e.failureClass === "permission" || e.failureClass === "resource" || e.failureClass === "environment" || e.failureClass === "unknown" && Ts(e.cause));
}
function S(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let r = e,
    members = Array.isArray(r.members) ? r.members.filter(L) : [];
  return Array.isArray(r.members) && members.length === r.members.length ? r : {
    ...r,
    members: members
  };
}
function L(e) {
  return typeof e === "object" && e !== null && "agentId" in e && typeof e.agentId === "string" && "name" in e && typeof e.name === "string";
}
async function Ub(e, r) {
  if (r) {
    let n = await r.read([I(e)]);
    if (!n.ok) return t(`[TeammateTool] Failed to read team file for ${e}: ${n.error.code}`), null;
    let i = n.value.items[0];
    if (!i.found) return null;
    try {
      return S(J(Buffer.from(i.value).toString("utf8")));
    } catch (error) {
      return t(`[TeammateTool] Failed to read team file for ${e}: ${d(error)}`), null;
    }
  }
  try {
    let n = await O(EBe(e), "utf-8");
    return S(J(n));
  } catch (error) {
    if (k(error) === "ENOENT") return null;
    return t(`[TeammateTool] Failed to read team file for ${e}: ${d(error)}`), null;
  }
}
function bRr(e, r) {
  if (Ts(r)) t(`[TeammateTool] Failed to write team file for ${e} (${k(r)}): ${d(r)}`, {
    level: "error"
  });else if (U(r)) t(`[TeammateTool] Failed to write team file for ${e}: ${d(r)}`, {
    level: "error"
  });else l(r);
}
function U(e) {
  if (!(e instanceof Error) || e.cause === void 0 || e.cause === null) return !1;
  let cause = e.cause;
  if (typeof cause !== "object" || typeof cause.code !== "string") return !1;
  return v(cause);
}
var z = {
  realpath: !1,
  retries: {
    retries: 10,
    minTimeout: 5,
    maxTimeout: 100
  },
  onCompromised: () => {}
};
function B(e) {
  return new x(`Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`, "Team file missing (session team not initialized)");
}
async function Rve(e, r, n, i) {
  if (i) return K(e, r, n, i);
  let a = EBe(e),
    u;
  try {
    u = await dl(a, {
      lockfilePath: `${a}.lock`,
      ...z
    });
  } catch (error) {
    if (k(error) === "ENOENT") throw B(e);
    throw error;
  }
  try {
    let s = await Ub(e);
    if (!s) throw Error("Team config file unreadable (lock acquired, read failed)");
    let c = r(s);
    if (c === !1) return;
    try {
      await SRr(e, s);
    } catch (error) {
      if (!n?.bestEffortWrite) throw error;
      bRr(e, error);
    }
    return c;
  } finally {
    try {
      await u();
    } catch (error) {
      t(`[TeammateTool] updateTeamFile lock release failed: ${d(error)}`);
    }
  }
}
async function tko(e, r, n) {
  try {
    await Rve(e, i => {
      let a = i.members.findIndex(item => item.agentId === r);
      if (a === -1) return !1;
      i.members.splice(a, 1);
    }, void 0, n);
  } catch (error) {
    t(`[TeammateTool] removeTeamMember(${r}) failed: ${d(error)}`);
  }
}
async function K(e, r, n, i) {
  let a = I(e),
    u = 5,
    s = wpt(50),
    c,
    y = f => {
      if (f === void 0) return {
        skip: !0,
        result: {
          kind: "missing"
        }
      };
      let T;
      try {
        T = S(J(Buffer.from(f.value).toString("utf8"))) ?? void 0;
      } catch (error) {
        return {
          skip: !0,
          result: {
            kind: "unreadable",
            parseError: d(error)
          }
        };
      }
      if (!T) return {
        skip: !0,
        result: {
          kind: "unreadable"
        }
      };
      let result;
      try {
        result = r(T);
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
      return c = result, {
        write: _(T, null, 2),
        result: {
          kind: "applied",
          result: result
        }
      };
    },
    o;
  for (let f = 1;; f++) {
    if (o = await i.update(a, y), !o.ok) {
      if (E(o.error) && f < 5) {
        await s(f);
        continue;
      }
      break;
    }
    let result_2 = o.value.result;
    if (result_2 === void 0 || result_2.kind === "declined") return;
    switch (result_2.kind) {
      case "missing":
        throw B(e);
      case "unreadable":
        if (result_2.parseError !== void 0) t(`[TeammateTool] Failed to read team file for ${e}: ${result_2.parseError}`);
        if (f < 5) {
          await s(f);
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
  let w = D(o.error);
  if (w) p("swarm_team_file_update", "lock_contended");
  if (!n?.bestEffortWrite) {
    let f = new x(`Team file update failed (${P(o.error)}) for ${e}`, "Team file update failed (storage v5)");
    if (f.cause = o.error, !w && !v(o.error)) m("swarm_team_file_update", o.error.code);
    throw f;
  }
  if (!E(o.error) && v(o.error)) t(`[TeammateTool] Failed to update team file for ${e} (${P(o.error)})`, {
    level: "error"
  });else {
    let f = new x(`Team file update failed (${P(o.error)}) for ${e}`, "Team file update failed (storage v5)");
    f.cause = o.error, m("swarm_team_file_update", o.error.code), l(f);
  }
  return c;
}
async function SRr(e, r, n) {
  if (n) {
    let a = await n.write(I(e), _(r, null, 2), {
      precondition: {
        type: "none"
      }
    });
    if (!a.ok) {
      let u = new x(`Team file write failed (${P(a.error)}) for ${e}`, "Team file write failed (storage v5)");
      throw u.cause = a.error, u;
    }
    return;
  }
  let i = C(e);
  await M(i, {
    recursive: !0
  }), await j(EBe(e), _(r, null, 2));
}
async function h8e(e, r, n) {
  let i = r.agentId || r.name;
  if (!i) return t("[TeammateTool] removeTeammateFromTeamFile called with no identifier"), !1;
  let a = !1;
  try {
    let u = (await Rve(e, s => {
      a = !1;
      let c = s.members.length;
      s.members = s.members.filter(item => {
        if (r.agentId && item.agentId === r.agentId) return !1;
        if (r.name && item.name === r.name) return !1;
        return !0;
      });
      let y = s.members.length !== c;
      return a = !y, y;
    }, {
      bestEffortWrite: !0
    }, n)) ?? !1;
    if (u) t(`[TeammateTool] Removed teammate from team file: ${i}`);else if (a) t(`[TeammateTool] Teammate ${i} not found in team file for "${e}"`);
    return u;
  } catch (error) {
    return t(`[TeammateTool] Cannot remove teammate ${i} from "${e}": ${d(error)}`), !1;
  }
}
async function Cnn(e, r, n, i) {
  let a = !1;
  try {
    let u = (await Rve(e, s => {
      let c = s.members.findIndex(item => item.agentId === r),
        y = s.members[c];
      if (!y) return a = !1, !1;
      if (n?.onlyIfJoinedBefore !== void 0 && y.joinedAt >= n.onlyIfJoinedBefore) return a = !0, !1;
      return a = !1, s.members.splice(c, 1), !0;
    }, {
      bestEffortWrite: !0
    }, i)) ?? !1;
    if (u) t(`[TeammateTool] Removed member ${r} from team ${e}`);else if (a) t(`[TeammateTool] Skipped stale removal of ${r} from team ${e} (re-added after removal was initiated)`);
    return u;
  } catch (error) {
    return t(`[TeammateTool] removeMemberByAgentId(${r}) failed for team ${e}: ${d(error)}`), !1;
  }
}
async function wRr(e, r, n, i) {
  let a = "unchanged";
  try {
    if (await Rve(e, u => {
      let s = u.members.find(item => item.name === r);
      if (!s) return a = "absent", !1;
      if (s.mode === n) return a = "unchanged", !1;
      a = "set", s.mode = n;
    }, void 0, i), a === "absent") t(`[TeammateTool] Cannot set member mode: member ${r} not found in team ${e}`);else if (a === "set") t(`[TeammateTool] Set member ${r} in team ${e} to mode: ${n}`);
  } catch (error) {
    t(`[TeammateTool] Cannot set member mode: ${d(error)}`);
  }
}
async function Rnn(e, r, n) {
  if (!Zd()) return;
  let i = r ?? id(),
    a = eS();
  if (i && a) await wRr(i, a, e, n);
}
async function Ann(e, r, n, i) {
  let a = "unchanged";
  try {
    if (await Rve(e, u => {
      let s = u.members.find(item => item.name === r);
      if (!s) return a = "absent", !1;
      if (s.isActive === n) return a = "unchanged", !1;
      a = "set", s.isActive = n;
    }, void 0, i), a === "absent") t(`[TeammateTool] Cannot set member active: member ${r} not found in team ${e}`);else if (a === "set") t(`[TeammateTool] Set member ${r} in team ${e} to ${n ? "active" : "idle"}`);
  } catch (error) {
    t(`[TeammateTool] Cannot set member active: ${d(error)}`);
  }
}
function nko(e) {
  Ejr().add(e);
}
async function Xoi(e) {
  return po("swarm_session_cleanup", async () => {
    let r = Ejr();
    if (r.size === 0) return;
    let n = Array.from(r);
    t(`cleanupSessionTeams: removing ${n.length} orphan team dir(s): ${n.join(", ")}`), await Promise.allSettled(n.map(item => V(item, e))), await Promise.allSettled(n.map(item => q(item))), r.clear();
  });
}
function R(e, r) {
  return `${e}:${r}`;
}
function rko(e, r) {
  if (Tnn(e) && r) Tjr().add(R(e, r));
}
async function V(e, r) {
  let n = await Ub(e, r);
  if (!n) return;
  let i = Tjr(),
    a = n.members.filter(item => item.name !== Oa && item.tmuxPaneId && item.backendType && Tnn(item.backendType) && i.has(R(item.backendType, item.tmuxPaneId)));
  if (a.length === 0) return;
  let [{
    ensureBackendsRegistered: ensureBackendsRegistered,
    getBackendByType: getBackendByType
  }, {
    isInsideTmux: isInsideTmux
  }] = await Promise.all([import("B:/~BUN/root/chunk-dtmhqcmf.js"), import("B:/~BUN/root/chunk-73njs60w.js")]);
  await ensureBackendsRegistered();
  let y = !(await isInsideTmux());
  await Promise.allSettled(a.map(async item => {
    if (!item.tmuxPaneId || !item.backendType || !Tnn(item.backendType)) return;
    let w = await getBackendByType(item.backendType).killPane(item.tmuxPaneId, y);
    t(`cleanupSessionTeams: killPane ${item.name} (${item.backendType} ${item.tmuxPaneId}) \u2192 ${w}`);
  }));
}
async function q(e) {
  return po("swarm_team_cleanup", async () => {
    let r = C(e);
    try {
      await W(r, {
        recursive: !0,
        force: !0
      }), t(`[TeammateTool] Cleaned up team directory: ${r}`);
    } catch (error) {
      t(`[TeammateTool] Failed to clean up team directory ${r}: ${d(error)}`);
    }
  });
}
export { SwarmPaneError as wj, DOs, dpt, Tnn, NWn, eko, EBe, Ub, bRr, Rve, tko, SRr, h8e, Cnn, wRr, Rnn, Ann, nko, Xoi, rko };