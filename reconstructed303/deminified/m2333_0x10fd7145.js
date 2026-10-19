// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { at, K, de } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { ln } from "B:/~BUN/root/chunk-jpdys232.js";
import { g, m, p } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { ba, vle, E } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { a } from "B:/~BUN/root/chunk-yt0knyw7.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { At, l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { Yy } from "B:/~BUN/root/chunk-ejm0pmyj.js";
import { IJ } from "B:/~BUN/root/chunk-h9p45fg5.js";
import { NMt, jct, IUe, j5e, owo, ejn } from "B:/~BUN/root/chunk-dn8rakwm.js";
import { xce, gTn, SEt, hTn, wEt } from "B:/~BUN/root/chunk-gz1fzwqn.js";
import { xM, PM } from "B:/~BUN/root/chunk-8pqw0dhk.js";
import { Bes, jes, L_e } from "B:/~BUN/root/chunk-q8z9v9ca.js";
import { AKt, xKt, _9r, Ces, yTn, Uir, b9r, _Tn, bTn } from "B:/~BUN/root/chunk-p8gd2veh.js";
import { Dn } from "B:/~BUN/root/chunk-pystvv3m.js";
import { st } from "B:/~BUN/root/chunk-7aw74be3.js";
import { posix as ae } from "path";
var path = "/v1/claudeai-agents/mcp",
  serverId = "f688f3fc-1d05-5bd1-9c48-9854ec083044",
  W = new at(() => ({}));
var Y = /^file_[A-Za-z0-9_-]{1,128}$/,
  maxFiles = 20,
  v = 268435456,
  expiresInSeconds = 3600,
  mustStartWithinMs_2 = 2700000,
  timeoutMs = 600000,
  nothingDone = "No task was started.",
  F = "Start the task without files.",
  b = {
    tool: "start_task",
    arg: "files",
    feature: "managed_agents_task_file_upload",
    local: "path",
    ref: "file_id",
    refWord: "id",
    maxFiles: maxFiles,
    nothingDone: nothingDone
  };
function Q(e) {
  return gTn(e, {
    path: path,
    serverId: serverId
  });
}
function D(e, r) {
  let n = de(),
    host = n ? W.peek(r)?.host : void 0,
    o = host?.servers.get(e.name);
  if (!(n ? host !== void 0 && o !== void 0 && e.config.type === "http" && e.config.url === o && host.heldSinceBoot(e.name) : Q(e)) || !E("tengu_twinkling_cosmos", !1)) return;
  return {
    host: host
  };
}
async function Hti(e, r, n, u, o) {
  let files = r.files;
  if (!Array.isArray(files) || files.length === 0) return {};
  let i;
  try {
    let f = D(e, o);
    if (f === void 0) return {};
    let {
      host: host_2
    } = f;
    i = host_2 === void 0 ? await J(files, n, u) : await ee(files, host_2, n, u);
  } catch (f) {
    l(f), i = {
      error: `The files could not be attached. ${nothingDone} ${F}`,
      code: "unexpected"
    };
  }
  if ("error" in i) {
    if (i.code !== "canceled" && i.code !== "upload_canceled") m("managed_agents_task_file_upload", i.code);
    return {
      error: i.error
    };
  }
  return g("managed_agents_task_file_upload"), {
    input: {
      ...r,
      files: i.files
    }
  };
}
var mustStartWithinMs = 600000,
  H = "start-task-upload-before-ask",
  ue = v,
  ce = 300000,
  weakMap = new WeakMap();
function $ti(e, r, n, u, o, toolUseId) {
  let files_2 = r.files;
  if (toolUseId === "" || !Array.isArray(files_2) || files_2.length === 0 || !files_2.every(item => Dn(item) && typeof item.path === "string" && item.file_id === void 0) || e.config.type !== "http" || !Yy(e.config.url)) return;
  let f = D(e, o);
  if (f === void 0) return;
  let {
      host: host_3
    } = f,
    T = files_2,
    pathFormKey = _(r);
  return {
    prepare: () => {
      let S = jes(o, toolUseId, pathFormKey),
        A = S && weakMap.get(S);
      if (A !== void 0) return A;
      let y = {
        toolUseId: toolUseId,
        pathFormKey: pathFormKey,
        files: [],
        uploadStartedAt: Date.now(),
        state: "uploading",
        remove: R => Z(R, host_3)
      };
      Bes(o, y);
      let w = fe(y, T, host_3, n, u, o).then(R => {
        if ("error" in R) return R;
        let files_3 = y.files;
        return {
          input: {
            ...r,
            files: files_3
          },
          description: `Attaches ${T.map((item, index) => `${SEt(String(item.path))} as ${SEt(files_3[index]?.name ?? "")} (${pe(files_3[index]?.file_id)})`).join("; ")}`,
          release: () => L_e(o, y)
        };
      });
      return weakMap.set(y, w), w;
    }
  };
}
async function fe(e, r, n, u, o, s) {
  let i = {
      mustStartWithinMs: mustStartWithinMs,
      maxTotalBytes: n === void 0 ? ue : void 0,
      onUploaded: T => {
        if (e.state === "deleted") e.remove([T.file_id]);else e.files.push(T);
      }
    },
    f,
    h = !!a.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES;
  if (h) xM("tool_exec", H);
  try {
    f = n === void 0 ? await J(r, u, o, i) : await ee(r, n, u, o, i);
  } catch (T) {
    l(T), f = {
      error: `The files could not be attached. ${nothingDone} ${F}`,
      code: "unexpected"
    };
  } finally {
    if (h) PM("tool_exec", H);
  }
  if (!("error" in f) && e.state === "deleted") f = P("canceled");
  if ("error" in f) {
    if (await L_e(s, e), f.code !== "canceled" && f.code !== "upload_canceled") m("managed_agents_task_file_upload", f.code);
    return {
      error: f.error
    };
  }
  return g("managed_agents_task_file_upload"), e.state = "pending", {
    ok: !0
  };
}
async function Z(e, r) {
  if (r === void 0) {
    await Lir(e);
    return;
  }
  await Promise.all(e.map(item => r.delete?.(item)));
}
function pe(e) {
  return e !== void 0 && Y.test(e) ? e : "?";
}
async function Uti(e, r, n) {
  let u = D(e, r);
  if (u === void 0 || !Array.isArray(n)) return;
  let o = n.flatMap(item => Dn(item) && typeof item.file_id === "string" ? [item.file_id] : []);
  await Z(o, u.host);
}
function Bti(e) {
  if (Date.now() > e + expiresInSeconds * 1000 - ce) return `The files for this task were uploaded about an hour before this approval and have expired or are about to. Call start_task again to upload them afresh. ${nothingDone}`;
  let r = IJ(),
    n = xce();
  if (n !== void 0) return (n === "egress_blocked" ? C() : x()).error;
  return r ? L().error : void 0;
}
function jti(e, r) {
  let n = Uir(r);
  if (n === void 0 || de() || !Q(e) || !E("tengu_twinkling_cosmos", !1)) return;
  return `In this session, files the user attached to the chat are usually in ${n}. To give one to the task, put its full path in files as an object, such as files: [{"path": "${n}/report.csv"}]. Do that rather than copying the file's text into task_description.`;
}
function Wti(e, r, n, u) {
  let files_4 = r.files;
  if (files_4 === void 0 || files_4 === null || Array.isArray(files_4) && files_4.length === 0 || D(e, u) === void 0) return;
  let s = wEt(files_4, b),
    i = Array.isArray(s) ? void 0 : s,
    {
      files: files_5,
      ...h
    } = r,
    T = Array.isArray(s) ? {
      ...h,
      files: s.map((item, index) => ({
        file_id: `file_${index}`,
        name: `file_${index}`
      }))
    } : h,
    k = hTn(T, n, {
      ...b,
      ignoreInside: b.arg
    });
  if (i === void 0 && k === void 0) return;
  if (i === void 0) p("managed_agents_task_file_upload", "input_schema");else m("managed_agents_task_file_upload", i.code);
  if (k === void 0) return i.error;
  let S = ` ${nothingDone}`,
    A = i === void 0 ? "" : ` ${i.error.endsWith(S) ? i.error.slice(0, -S.length) : i.error}`;
  return `Cannot call start_task with these arguments: ${k.listed}.${A}${k.takes} ${nothingDone}`;
}
var q = {
  mustStartWithinMs: mustStartWithinMs_2
};
async function J(e, r, n, u = q) {
  let o = wEt(e, b);
  if (!Array.isArray(o)) return o;
  let s = IJ(),
    i = xce();
  if (i !== void 0) return i === "egress_blocked" ? C() : x();
  if (s) return L();
  if (!vle()) return ne();
  for (let k of o) try {
    await jct(k, r);
  } catch (error) {
    return t(`[start_task files] rejected path: ${k} (${d(error)})`), I(k, _9r(error), "here", r);
  }
  let files_6 = [],
    h = Date.now() + u.mustStartWithinMs,
    T = u.maxTotalBytes === void 0 ? void 0 : {
      remainingBytes: u.maxTotalBytes
    };
  for (let k of o) {
    if (n.aborted) return P("canceled");
    if (Date.now() > h) return U();
    let realPath, requiredDigest;
    try {
      ({
        realPath: realPath,
        requiredDigest: requiredDigest
      } = await jct(k, r));
    } catch (error) {
      return t(`[start_task files] rejected path: ${k} (${d(error)})`), I(k, _9r(error), "here", r);
    }
    let y = await Dir(realPath, requiredDigest, n, T);
    if (!y.ok) return t(`[start_task files] not uploaded: ${k} (${y.code})`), I(k, y.code, "here", r);
    let w = {
      file_id: y.file_id,
      name: y.name
    };
    files_6.push(w), u.onUploaded?.(w);
  }
  if (n.aborted) return P("canceled");
  if (Date.now() > h + timeoutMs) return U();
  return {
    files: files_6
  };
}
async function ee(e, r, n, u, o = q) {
  let s = wEt(e, b);
  if (!Array.isArray(s)) return s;
  let i = IJ(),
    f = xce();
  if (f !== void 0) return f === "egress_blocked" ? C() : x();
  if (i) return L();
  let h = "elsewhere",
    files_7 = [],
    k = Date.now() + o.mustStartWithinMs;
  for (let S of s) {
    if (u.aborted) return P("canceled");
    if (Date.now() > k) return U();
    if (r.ruleItCannotApply(n) !== void 0) return {
      error: `Cannot attach files: this session's limits on reading files cannot be applied in its cloud environment, where the upload would happen. ${nothingDone} ${F}`,
      code: "rule_not_applicable"
    };
    if (!xKt(ae.basename(S))) return {
      error: `Cannot attach "${S}": a file handed to a task from this session's cloud environment needs a plain name, without a backslash, a control character or a character that changes text direction. Copy or rename it and attach that. ${nothingDone}`,
      code: "name_not_plain"
    };
    let A = await r.upload(S, u);
    if (!A.ok) return I(S, A.code, h, n);
    if (!Y.test(A.file_id) || !xKt(A.name)) return I(S, "bad_answer", h, n);
    let y = {
      file_id: A.file_id,
      name: A.name
    };
    files_7.push(y), o.onUploaded?.(y);
  }
  if (u.aborted) return P("canceled");
  if (Date.now() > k + timeoutMs) return U();
  return {
    files: files_7
  };
}
async function Dir(e, r, signal, u) {
  let name = await NMt(e);
  if (AKt.test(name)) return {
    ok: !1,
    code: "name_direction"
  };
  let s = await IUe(e, v);
  if (!("buf" in s)) return {
    ok: !1,
    code: s.refusal
  };
  if (u !== void 0) {
    if (s.buf.length > u.remainingBytes) return {
      ok: !1,
      code: "too_large_total"
    };
    u.remainingBytes -= s.buf.length;
  }
  if (r !== void 0 && st(s.buf) !== r) return {
    ok: !1,
    code: "path_rejected"
  };
  await ba();
  let oauthToken = vle();
  if (!oauthToken) return {
    ok: !1,
    code: "no_token"
  };
  let f;
  try {
    let h = await owo(s.buf, name, {
      oauthToken: oauthToken,
      sessionId: K(),
      baseUrl: ln().BASE_API_URL
    }, {
      signal: signal,
      expiresInSeconds: expiresInSeconds,
      timeoutMs: timeoutMs,
      retryAfterTimeout: !1
    });
    if (h.success) return {
      ok: !0,
      file_id: h.fileId,
      name: name
    };
    f = h.reason;
  } catch (error) {
    t(`[start_task files] upload threw: ${d(error)}`, {
      level: "error"
    }), f = "network";
  }
  return {
    ok: !1,
    code: `upload_${f}`
  };
}
var te = {
    file_read: !0,
    too_large: !0,
    auth: !0,
    forbidden: !0,
    canceled: !0,
    server: !0,
    network: !0
  },
  he = {
    auth: !0,
    forbidden: !0,
    not_found: !0,
    server: !0,
    network: !0
  },
  i9r = ["egress_blocked", "essential_traffic", "no_token", "timeout", "unexpected", ...Object.keys(he).map(item => `delete_${item}`)],
  timeoutMs_2 = 5000,
  V = "start_task upload cleanup timed out";
async function Lir(e) {
  if (e.length === 0) return;
  let r;
  try {
    r = await Nt(_e(e), timeoutMs_2, V);
  } catch (error) {
    if (error instanceof Error && error.message === V) r = "timeout";else l(error), r = "unexpected";
  }
  if (r === void 0) g("managed_agents_task_file_cleanup");else p("managed_agents_task_file_cleanup", r);
  return r;
}
async function _e(e) {
  let r = ln().BASE_API_URL;
  try {
    j5e(r);
  } catch {
    return "egress_blocked";
  }
  if (At()) return "essential_traffic";
  await ba();
  let oauthToken_2 = vle();
  if (!oauthToken_2) return "no_token";
  let u = {
      oauthToken: oauthToken_2,
      sessionId: K(),
      baseUrl: r
    },
    s = (await Promise.all(e.map(item => ejn(item, u, {
      timeoutMs: timeoutMs_2
    })))).find(item => !item.success);
  return s !== void 0 && !s.success ? `delete_${s.reason}` : void 0;
}
var a9r = [...Object.keys(b9r), ...Object.keys(te).map(item => `upload_${item}`), "path_rejected", "no_token", "name_direction", "too_large_total"];
function I(e, code, n, u) {
  if (_Tn(code)) return bTn(e, code, v, nothingDone);
  if (n === "elsewhere" && code === "upload_auth") return {
    error: `The sign-in of this session's cloud environment was not accepted while uploading "${e}". ${nothingDone} ${F}`,
    code: code
  };
  let o = code.startsWith("upload_") ? code.slice(7) : void 0;
  if (o !== void 0 && me(o)) return X(e, o);
  switch (code) {
    case "path_rejected":
      return {
        error: n === "here" ? yTn(e, u, nothingDone) : `Cannot attach "${e}": only files in this session's working folder (unless that is the home folder) or in its uploads or outputs folder can be attached, by the absolute path of a regular file there. ${nothingDone}`,
        code: code
      };
    case "credential_name":
      return {
        error: Ces(e, n === "here" ? u : {
          isRemoteMode: !0
        }, nothingDone),
        code: code
      };
    case "too_large_total":
      return {
        error: `Cannot attach "${e}": with the files before it, the files named to start_task add up to more than ${v / 1048576} MiB, the most one call may attach. Attach fewer or smaller files. ${nothingDone}`,
        code: code
      };
    case "name_direction":
      return {
        error: `Cannot attach "${e}": its name contains a character that changes text direction, so the task could show it under a different name. Rename it, or copy it under a name without that character, and attach that. ${nothingDone}`,
        code: code
      };
    case "no_token":
      return n === "here" ? ne() : {
        error: `This session's cloud environment has no sign-in to upload files with. ${nothingDone} ${F}`,
        code: code
      };
    case "canceled":
      return P("canceled");
    case "egress_blocked":
      return C();
    case "essential_traffic":
      return x();
    case "policy_pending":
      return {
        error: `This session's cloud environment has not yet loaded its organization's policy, so it cannot tell whether files may be uploaded. ${nothingDone} Try again in a moment, or start the task without files.`,
        code: code
      };
    case "container_too_old":
      return {
        error: `This session's cloud environment runs an older version of Claude Code, which cannot attach files to a task. ${nothingDone} ${F}`,
        code: code
      };
    case "no_answer":
      return {
        ...X(e, "network"),
        code: code
      };
    case "no_container":
    case "container_unreachable":
      return {
        error: `This session's cloud environment could not be reached, so the files were not attached. ${nothingDone} Try again, or start the task without files.`,
        code: code
      };
    default:
      return {
        error: `The files could not be attached. ${nothingDone} ${F}`,
        code: "unexpected"
      };
  }
}
function me(e) {
  return Object.hasOwn(te, e);
}
function U() {
  return {
    error: `Attaching these files is taking too long: the first ones would expire before the task could copy them. ${nothingDone} Attach fewer or smaller files, or start the task without files.`,
    code: "uploads_too_slow"
  };
}
function x() {
  return {
    error: `Uploading files to Anthropic is turned off by CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC. ${nothingDone} ${F}`,
    code: "essential_traffic"
  };
}
function L() {
  return {
    error: `This organization's policy has not loaded yet, so files cannot be attached right now. ${nothingDone} Try again in a minute; if it is refused again, tell the user and offer to start the task without the files.`,
    code: "policy_pending"
  };
}
function C() {
  return {
    error: `Uploading files to Anthropic is not available in this configuration. ${nothingDone} ${F}`,
    code: "egress_blocked"
  };
}
function ne() {
  return {
    error: `Attaching files needs a claude.ai sign-in (run /login). ${nothingDone}`,
    code: "no_token"
  };
}
function P(code_2) {
  return {
    error: `Attaching files was interrupted. ${nothingDone}`,
    code: code_2
  };
}
function X(e, r) {
  let code_3 = `upload_${r}`;
  switch (r) {
    case "auth":
      return {
        error: `The session's sign-in was not accepted while uploading "${e}". The person may need to sign in again, or restart the session. ${nothingDone}`,
        code: code_3
      };
    case "forbidden":
      return {
        error: `This session's sign-in may not upload files, so "${e}" was not attached. ${nothingDone} ${F}`,
        code: code_3
      };
    case "too_large":
      return {
        error: `The Files API refused "${e}" as too large. ${nothingDone}`,
        code: code_3
      };
    case "canceled":
      return P(code_3);
    case "server":
      return {
        error: `The Files API did not accept "${e}". ${nothingDone} Start the task without this file, or tell the user.`,
        code: code_3
      };
    case "file_read":
    case "network":
      return {
        error: `The upload of "${e}" did not complete. ${nothingDone} Try again, or start the task without this file.`,
        code: code_3
      };
  }
}
export { Hti, $ti, Uti, Bti, jti, Wti, Dir, i9r, Lir, a9r };