// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Ve, d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { bc, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { gd, O2 } from "B:/~BUN/root/chunk-a0k8qg0d.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Xnn } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { pfe, __, cRs, BBn, jBn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { w_e } from "B:/~BUN/root/chunk-kyvzxx43.js";
import { N } from "B:/~BUN/root/chunk-nkxgam12.js";
var X = "<cloud-transcript-unavailable>";
function Abn(e) {
  let o = e.length;
  while (o > 0 && e[o - 1] === "/") o -= 1;
  return o === 0 && e.startsWith("/") ? "/" : e.slice(0, o);
}
function Y(e) {
  return e !== "" && e !== "." && e !== ".." && !/[\p{Cc}\p{Cf}\u2028\u2029\\:]/u.test(e);
}
function q(e, o) {
  let n = Abn(o.containerProjectDir),
    r = Abn(o.deviceLaunchDir);
  if (!n.startsWith("/") || !r.startsWith("/") || n === "/") return null;
  if (!Xnn(e, n)) return null;
  if (e === n || e === `${n}/`) return r;
  let c = e.slice(n.length + 1).split("/"),
    a = c.at(-1) === "" ? c.slice(0, -1) : c;
  return a.length > 0 && a.every(Y) ? `${r === "/" ? "" : r}/${a.join("/")}` : null;
}
var D = {
    Read: {
      input: "file_path",
      responseNested: [["file", "filePath"], ["file", "outputDir"]]
    },
    Write: {
      input: "file_path",
      responseMembers: ["filePath"]
    },
    Edit: {
      input: "file_path",
      responseMembers: ["filePath"]
    },
    MultiEdit: {
      input: "file_path",
      responseMembers: ["filePath"]
    },
    NotebookEdit: {
      input: "notebook_path",
      responseMembers: ["notebook_path"]
    },
    Glob: {
      input: "path",
      responseArrays: ["filenames"]
    },
    Grep: {
      input: "path",
      responseArrays: ["filenames"]
    },
    LSP: {
      input: "filePath",
      responseMembers: ["filePath"]
    },
    Bash: {
      responseMembers: ["rawOutputPath", "persistedOutputPath"]
    },
    Agent: {
      input: "cwd",
      responseMembers: ["worktreePath", "outputFile"]
    },
    Workflow: {
      input: "scriptPath",
      responseMembers: ["scriptPath", "transcriptDir"]
    },
    EnterWorktree: {
      input: "path",
      responseMembers: ["worktreePath"]
    },
    ExitWorktree: {
      responseMembers: ["worktreePath", "originalCwd"]
    }
  },
  de = new Set(Object.values(D).flatMap(item => item.responseMembers ?? [])),
  pe = new Set(Object.values(D).flatMap(item => (item.responseNested ?? []).map(([o, n]) => `${o}/${n}`)));
function Xzt(e) {
  return e.replace(/~/g, "~0").replace(/\//g, "~1");
}
function Jzt(e) {
  return e.split("/").slice(1).map(item => item.replace(/~1/g, "/").replace(/~0/g, "~"));
}
function R6o(e) {
  let o = Jzt(e),
    n = o[0] === "tool_calls" ? o.slice(2) : o;
  if (n[0] === "tool_input") return n.length >= 1;
  if (n[0] === "tool_response") return n.length === 2 && (n[1] === "filePath" || n[1] === "notebook_path" || n[1] === "file") || n.length === 3 && n[1] === "file" && n[2] === "filePath";
  return !1;
}
function A6o(e) {
  let o = Jzt(e),
    n = o[0] === "tool_calls" ? o.slice(2) : o;
  return n[0] === "tool_response" && (n.length === 2 && de.has(n[1] ?? "") || n.length === 3 && pe.has(`${n[1]}/${n[2]}`));
}
function B2e(e) {
  return fe.test(e) || L.test(e);
}
function xbn(e, o) {
  return Q(e, o)?.input;
}
var fe = /(?:^|_)(?:path|paths|file|files|filename|filenames|dir|directory|directories|cwd|filepath|filepaths|abspath|realpath|fullpath|relpath|dirname|basename|pathname|folder|folders|dirs|workdir|outdir|rootdir|basedir|tmpdir|subdir|srcdir|destdir|builddir|datadir|homedir)$|(?:Path|Paths|File|Files|Filename|Filenames|Dir|Dirs|Directory|Directories|Folder|Folders|Cwd)$/,
  L = /(?:^|_)(?:uri|uris|url|urls)$|(?:Uri|Uris|Url|Urls|URI|URIs|URL|URLs)$/,
  z = /^(?:https?|s3|gs|ftps?|mailto|data):[^\p{Cc}\p{Cf}\p{Z}\s]*$/iu,
  me = 4,
  members = 256;
function S(e, o, n, r, c, a = 0, m = !1, s = !1) {
  if (a > me || a > 0 && c.members <= 0) {
    if (typeof e === "object" && e !== null) v(r, o);
    return e;
  }
  if (Array.isArray(e)) {
    let i = !1,
      p = e.map((item, index) => {
        let k = `${o}/${index}`;
        if (k in r.paths || r.listed.has(k)) return item;
        let _ = m && !(P(item) && Object.keys(item).some(B2e)),
          y = m && typeof item === "string" ? s && z.test(item) ? item : E(item, k, n, r) : S(item, k, n, r, c, a + 1, _, _ && s);
        return i ||= y !== item, y;
      });
    return i ? p : e;
  }
  if (!P(e)) return e;
  let h = e,
    u = !1;
  for (let [i, p] of Object.entries(e)) {
    let f = `${o}/${Xzt(i)}`;
    if (a > 0) {
      if (c.members -= 1, c.members < 0) {
        v(r, o);
        break;
      }
    }
    let g = p,
      k = !1;
    if ((m || B2e(i)) && !(f in r.paths) && !r.listed.has(f)) {
      let _ = s || L.test(i);
      if (typeof p === "string") k = !0, g = _ && z.test(p) ? p : E(p, f, n, r);else if (Array.isArray(p)) k = !0, g = S(p, f, n, r, c, a + 1, !0, _);
    }
    if (!k && g === p && typeof p === "object" && p !== null) {
      let y = (m || B2e(i)) && !(P(p) && Object.keys(p).some(B2e));
      g = S(p, f, n, r, c, a + 1, y, y && (s || L.test(i)));
    }
    if (g !== p) {
      if (!u) h = {
        ...e
      }, u = !0;
      h[i] = g;
    }
  }
  return h;
}
function V(e, o, n, r, c, a) {
  if (a && typeof e === "string") return E(e, o, n, r);
  return S(e, o, n, r, c, 0, a && Array.isArray(e));
}
function Z(e) {
  let o = e.trim();
  return o !== e || /^~[^/]*(?:$|\/)/.test(o) || /^[$%`!=]/.test(o);
}
function K(e) {
  return Object.hasOwn(D, e);
}
function Q(e, o) {
  let n = gd(e);
  if (K(n)) return D[n];
  let r = O2(n, o).map(gd).find(K);
  return r === void 0 ? void 0 : D[r];
}
function v(e, o) {
  if (!e.listed.has(o)) e.listed.add(o), e.untranslated.push(o);
}
var P = N;
function E(e, o, n, r) {
  if (typeof e !== "string") return e;
  if (Z(e)) return v(r, o), e;
  if (!e.startsWith("/")) {
    let a = (e.endsWith("/") ? e.slice(0, -1) : e).split("/").filter(item => item !== ".");
    if (e !== "" && a.length > 0 && !a.every(Y)) v(r, o);
    return e;
  }
  let c = q(e, n);
  if (c === null) return v(r, o), e;
  return r.paths[o] = e, c;
}
function x(e, o, n, r, c) {
  if (!P(e) || !(o in e)) return e;
  let a = E(e[o], n, r, c);
  return a === e[o] ? e : {
    ...e,
    [o]: a
  };
}
function he(e, o, n, r, c) {
  if (!P(e) || !Array.isArray(e[o])) return e;
  let a = !1,
    m = e[o].map((item, index) => {
      let u = E(item, `${n}/${index}`, r, c);
      return a ||= u !== item, u;
    });
  return a ? {
    ...e,
    [o]: m
  } : e;
}
function U(e, o, n, r, c) {
  let a = Q(e.tool_name, c);
  if (a === void 0 || !P(e.tool_input)) {
    let u = {
        members: members
      },
      tool_input = V(e.tool_input, `${o}/tool_input`, n, r, u, !0);
    return "tool_response" in e ? {
      ...e,
      tool_input: tool_input,
      tool_response: V(e.tool_response, `${o}/tool_response`, n, r, u, !1)
    } : {
      ...e,
      tool_input: tool_input
    };
  }
  let m = a.input === void 0 ? e.tool_input : x(e.tool_input, a.input, `${o}/tool_input/${a.input}`, n, r);
  if (!("tool_response" in e)) return {
    ...e,
    tool_input: S(m, `${o}/tool_input`, n, r, {
      members: members
    })
  };
  let tool_response = e.tool_response;
  for (let u of a.responseMembers ?? []) tool_response = x(tool_response, u, `${o}/tool_response/${u}`, n, r);
  for (let [u, i] of a.responseNested ?? []) if (P(tool_response) && P(tool_response[u])) tool_response = {
    ...tool_response,
    [u]: x(tool_response[u], i, `${o}/tool_response/${u}/${i}`, n, r)
  };
  for (let u of a.responseArrays ?? []) tool_response = he(tool_response, u, `${o}/tool_response/${u}`, n, r);
  let h = {
    members: members
  };
  return {
    ...e,
    tool_input: S(m, `${o}/tool_input`, n, r, h),
    tool_response: S(tool_response, `${o}/tool_response`, n, r, h)
  };
}
function x6o(e, o, n, r) {
  let c = {
      paths: {},
      untranslated: [],
      listed: new Set()
    },
    a = Z(e.cwd) ? null : q(e.cwd, o);
  if (a === null) v(c, "/cwd");
  let cwd = a ?? Abn(o.deviceLaunchDir),
    s = {
      ...e,
      cwd: cwd,
      transcript_path: X
    };
  if ("agent_transcript_path" in s) s = {
    ...s,
    agent_transcript_path: X
  };
  switch (s.hook_event_name) {
    case "PreToolUse":
    case "PostToolUse":
    case "PostToolUseFailure":
    case "PermissionDenied":
      s = U(s, "", o, c, r);
      break;
    case "PermissionRequest":
      if (s = U(s, "", o, c, r), s.permission_suggestions !== void 0) v(c, "/permission_suggestions");
      break;
    case "PostToolBatch":
      s = {
        ...s,
        tool_calls: s.tool_calls.map((item, index) => U(item, `/tool_calls/${index}`, o, c, r))
      };
      break;
    default:
      break;
  }
  let cloud_session = {
    id: n.cloudSessionId,
    container_cwd: o.containerCwd,
    container_project_dir: o.containerProjectDir,
    device_launch_dir: o.deviceLaunchDir,
    original: {
      cwd: e.cwd,
      transcript_path: e.transcript_path,
      ...("agent_transcript_path" in e && {
        agent_transcript_path: e.agent_transcript_path
      }),
      paths: c.paths
    }
  };
  return {
    input: {
      ...s,
      cloud_session: cloud_session
    },
    untranslated: c.untranslated
  };
}
import { readlink as ke, realpath as be } from "fs/promises";
import { posix as w } from "path";
var ee = 3,
  ge = 64,
  re = ["PreToolUse", "PostToolUse", "PostToolUseFailure", "UserPromptSubmit"],
  te = [...re, "PostToolBatch", "UserPromptExpansion", "Stop"];
function ie() {
  let e = !1,
    o = null,
    n = 0,
    r = !1,
    c = 0,
    a = new Set();
  return {
    skipped({
      event: event,
      agentId: agentId,
      machine: machine,
      inTurn: inTurn
    }, i) {
      if (!e) e = !0, r = !1, c = 0;
      let p = agentId ?? "main",
        f = inTurn && o !== i && agentId === void 0 && te.includes(event),
        hookSpecificOutput = inTurn && (r || n < ee) && !a.has(p) && (agentId === void 0 || c < ge) && oe(event, "Hooks that run on the user's own machine are paused because it did not answer in time. Tool calls proceed without them. If the user asks whether their hooks ran, say they were paused.");
      if (f) o = i;
      if (hookSpecificOutput) a.add(p), c += agentId === void 0 ? 0 : 1, n += r ? 0 : 1, r = !0;
      return {
        ...(f && {
          systemMessage: `Paused hooks from "${machine}" because it did not answer in time. Tool calls continue without them.`
        }),
        ...(hookSpecificOutput && {
          hookSpecificOutput: hookSpecificOutput
        })
      };
    },
    answered({
      event: event_2,
      agentId: agentId_2,
      machine: machine_2,
      inTurn: inTurn_2
    }, i) {
      if (e = !1, !inTurn_2 || __(i)) return i;
      let p = agentId_2 ?? "main",
        f = o !== null && agentId_2 === void 0 && te.includes(event_2),
        g = a.has(p) && oe(event_2, `Hooks from a machine the user attached are running.${n >= ee ? " Later changes are not announced." : ""}`);
      if (!f && !g) return i;
      if (f) o = null;
      if (g) a.delete(p);
      let hookSpecificOutput_2 = i.hookSpecificOutput,
        _ = hookSpecificOutput_2 !== void 0 && "additionalContext" in hookSpecificOutput_2 ? hookSpecificOutput_2.additionalContext : void 0;
      return {
        ...i,
        ...(f && {
          systemMessage: ne(i.systemMessage, `Resumed hooks from "${machine_2}".`)
        }),
        ...(g && {
          hookSpecificOutput: {
            ...g,
            ...hookSpecificOutput_2,
            additionalContext: ne(_, g.additionalContext)
          }
        })
      };
    }
  };
}
function oe(e, additionalContext) {
  let hookEventName = re.find(item => item === e);
  return hookEventName && {
    hookEventName: hookEventName,
    additionalContext: additionalContext
  };
}
function ne(e, o) {
  return e === void 0 ? o : `${e}
${o}`;
}
var _e = 1044480,
  GZn = {
    PreToolUse: 15,
    PostToolUse: 15,
    PostToolUseFailure: 15,
    PostToolBatch: 15,
    PermissionDenied: 15,
    SubagentStart: 15,
    UserPromptSubmit: 30,
    UserPromptExpansion: 30,
    Stop: 120,
    StopFailure: 120,
    SubagentStop: 120
  },
  we = 5000,
  ye = 30;
function ae(e) {
  return (e.timeoutS ?? GZn[e.event]) * 1000 + we;
}
function Pe(e) {
  return Math.ceil(ae(e) / 1000) + ye;
}
function kei(e) {
  let o = e.install ?? BBn,
    n = e.remove ?? jBn,
    r = e.absence ?? ie(),
    c = new Set(),
    a = () => e.registry.current()?.displayName ?? "the attached machine",
    m = (u, systemMessage, p) => c.has(u) ? p : (c.add(u), {
      ...p,
      systemMessage: systemMessage
    }),
    s = (u, outcome, p = {}) => e.telemetry.forwarded({
      event: u.event,
      outcome: outcome,
      fieldsDropped: p.fieldsDropped ?? !1,
      blocked: p.blocked ?? !1,
      rttMs: p.rttMs ?? 0,
      errorRepliesIgnored: p.errorRepliesIgnored ?? 0,
      malformedRepliesIgnored: p.malformedRepliesIgnored ?? 0
    }),
    forwardToDevice = (u, i, p = e.registry.generation()) => async (f, toolUseID, signal, _, y) => {
      let j = () => {
        let b = e.registry.current();
        return b !== null && b.instanceId === u && e.now() < b.leaseExpiresAt && b.entries.some(item => item.id === i.id);
      };
      if (!j()) return s(i, "owner_gone"), {};
      if (e.registry.isAway(u)) return s(i, "away_skipped"), se({}, () => r.skipped({
        event: i.event,
        agentId: f.agent_id,
        machine: a(),
        inTurn: y !== void 0
      }, u));
      let input = null,
        B = 0,
        W = !1;
      try {
        let b = bc(f);
        W = !(await Re(b, e.toolAliases(), {
          realpath: e.realpath ?? Se,
          readlink: e.readlink ?? ve
        })), B = Buffer.byteLength(w_e(b), "utf8"), input = b;
      } catch {}
      let H = B > _e;
      if (input === null || H) return t(`Device hook ${i.id}: input ${H ? "exceeds what the device accepts" : "is not plain serialisable data"}; not forwarded`, {
        level: "warn"
      }), s(i, H ? "input_too_large" : "input_unclonable"), i.event === "PreToolUse" ? {
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "deny",
          permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the tool call ${H ? "is too large to forward to the attached machine; retry with a smaller input" : "could not be forwarded to the attached machine; retry with plain input"}`
        }
      } : {};
      if (W) return s(i, "input_unresolvable"), i.event === "PreToolUse" ? {
        hookSpecificOutput: {
          hookEventName: "PreToolUse",
          permissionDecision: "deny",
          permissionDecisionReason: `[hook on ${e.registry.current()?.displayName ?? "your machine"}]: not run \u2014 the path this tool call names could not be resolved for the attached machine; retry with a plain path`
        }
      } : {};
      if (cRs(input, e.toolAliases())) return s(i, "after_edit_held"), {};
      let J;
      try {
        let issuedAt = e.now(),
          machine_3 = a(),
          deadlineMs = ae(i),
          R = e.sender.sendDeviceHookCallback({
            callbackId: i.id,
            input: input,
            toolUseID: toolUseID,
            issuedAt: issuedAt,
            deadlineMs: deadlineMs,
            ...(signal !== void 0 && {
              signal: signal
            })
          }),
          promise = new Promise(ue => {
            J = e.setTimer(() => ue("deadline"), deadlineMs);
          }),
          F = await Promise.race([R.reply, promise]),
          O = {
            rttMs: e.now() - issuedAt,
            errorRepliesIgnored: R.errorRepliesIgnored(),
            malformedRepliesIgnored: R.malformedRepliesIgnored()
          };
        if (F === "deadline") {
          if (e.registry.recordMiss(u, p), R.reply.catch(() => {}), R.cancel(), s(i, "deadline", O), p !== e.registry.generation()) return {};
          return m(`deadline:${i.event}`, `A ${i.event} hook on ${machine_3} did not answer within ${Math.round(deadlineMs / 1000)}s; continuing without it. If it keeps missing, hooks from that machine pause until it registers again.`, {});
        }
        if ("malformed" in F) return s(i, "malformed", O), {};
        if (!j()) return s(i, "owner_gone", O), {};
        e.registry.recordHit(u);
        let {
          answer: answer,
          report: report
        } = pfe(F.answer, i.event);
        if (s(i, "answered", {
          ...O,
          fieldsDropped: report.dropped.length > 0 || report.truncated.length > 0,
          blocked: __(answer)
        }), e.registry.isAway(u)) return answer;
        let ce = {
          event: i.event,
          agentId: input.agent_id,
          machine: machine_3,
          inTurn: y !== void 0
        };
        return se(answer, () => r.answered(ce, answer));
      } catch (error) {
        if (Ve(error)) throw s(i, "aborted"), error;
        return t(`Device hook ${i.id}: forwarding failed internally: ${d(error)}`, {
          level: "error"
        }), s(i, "internal_error"), {};
      } finally {
        J?.clear();
      }
    };
  return {
    forwardToDevice: forwardToDevice,
    installForOwner(u) {
      c.clear();
      let i = e.registry.generation(),
        p = {};
      for (let f of u.entries) {
        let g = p[f.event] ?? [];
        g.push({
          ...(f.matcher !== void 0 && {
            matcher: f.matcher
          }),
          hooks: [{
            type: "callback",
            timeout: Pe(f),
            callback: forwardToDevice(u.instanceId, f, i)
          }]
        }), p[f.event] = g;
      }
      o(u.instanceId, p, "forwarded");
    },
    removeForOwner(u) {
      n(u, "forwarded");
    }
  };
}
function se(e, o) {
  try {
    return o();
  } catch (n) {
    return l(Error("Device hooks: the away notice failed internally", {
      cause: n
    })), e;
  }
}
function Eei(e, o) {
  let n = setTimeout(e, o);
  return n.unref(), {
    clear: () => clearTimeout(n)
  };
}
var Se = e => be(e),
  ve = e => ke(e),
  Te = 40;
async function Re(e, o, n) {
  let r = "tool_calls" in e && Array.isArray(e.tool_calls) ? e.tool_calls : [e],
    c = !0;
  for (let a of r) {
    let m = De(a, o);
    if (m !== null && !(await Ee(m, n))) c = !1;
  }
  return c;
}
function De(e, o) {
  if (typeof e !== "object" || e === null || !("tool_name" in e) || typeof e.tool_name !== "string") return null;
  let n = "tool_input" in e ? e.tool_input : void 0;
  if (typeof n !== "object" || n === null) return null;
  let member = xbn(e.tool_name, o);
  if (member === void 0) return null;
  let fields = n,
    value = fields[member];
  return typeof value === "string" && w.isAbsolute(value) ? {
    fields: fields,
    member: member,
    value: value
  } : null;
}
async function Ee({
  fields: fields_2,
  member: member_2,
  value: value_2
}, r) {
  let c = w.normalize(value_2),
    a = [];
  for (let m = 0; m <= Te; m++) try {
    let s = await r.realpath(c),
      h = a.length === 0 ? s : w.join(s, ...a);
    if (h !== value_2) fields_2[member_2] = h;
    return !0;
  } catch {
    let s = await r.readlink(c).catch(() => null);
    if (s !== null) {
      let u = w.dirname(c),
        i = await r.realpath(u).catch(() => u);
      c = w.normalize(w.join(w.resolve(i, s), ...a)), a = [];
      continue;
    }
    let h = w.dirname(c);
    if (h === c) return !0;
    a.unshift(w.basename(c)), c = h;
  }
  return !1;
}
export { Abn, Xzt, Jzt, R6o, A6o, B2e, xbn, x6o, GZn, kei, Eei };