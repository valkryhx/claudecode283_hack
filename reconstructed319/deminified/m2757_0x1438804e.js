// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { nn } from "B:/~BUN/root/chunk-y1kkrqy9.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { ul, sH, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { St, a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { $u } from "B:/~BUN/root/chunk-grwykqvw.js";
import { oN } from "B:/~BUN/root/chunk-zn7b14jn.js";
import { Fir, h6t } from "B:/~BUN/root/chunk-mcffcnn9.js";
import { GTe, $0e, Vce } from "B:/~BUN/root/chunk-6bx54the.js";
import { sC, iC } from "B:/~BUN/root/chunk-r1gg0qbg.js";
import { qui, Yui, CIe, Xui, tvn, fve, y1e } from "B:/~BUN/root/chunk-2r6mec8n.js";
import { sW } from "B:/~BUN/root/chunk-5zpqxean.js";
import { KIe, CEn, Mlt, Gir, Vir, DAt, i7o, LAt, Kir } from "B:/~BUN/root/chunk-9hkf26x4.js";
import { Zle } from "B:/~BUN/root/chunk-bf2nn51k.js";
import { gpt, l_e, Rgs, qSr } from "B:/~BUN/root/chunk-8ytf4evt.js";
import { AL } from "B:/~BUN/root/chunk-s937snw9.js";
import { it } from "B:/~BUN/root/chunk-09e9xfa4.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { posix as te } from "path";
var maxFiles = 20,
  P = l_e,
  expiresInSeconds = 3600,
  mustStartWithinMs_2 = 2700000,
  timeoutMs = 600000,
  x = {
    arg: "files",
    feature: "managed_agents_task_file_upload",
    local: "path",
    ref: "file_id",
    refWord: "id",
    maxFiles: maxFiles
  },
  D = {
    start_task: {
      words: {
        ...x,
        tool: "start_task",
        nothingDone: "No task was started."
      },
      withoutFiles: "Start the task without files.",
      offerWithoutFiles: "start the task without files",
      offerWithoutTheFiles: "start the task without the files",
      withoutThisFile: "Start the task without this file",
      offerWithoutThisFile: "start the task without this file",
      wordsArg: "task_description"
    },
    update_task: {
      words: {
        ...x,
        tool: "update_task",
        nothingDone: "Nothing was sent to the task."
      },
      withoutFiles: "Send the update without files.",
      offerWithoutFiles: "send the update without files",
      offerWithoutTheFiles: "send the update without the files",
      withoutThisFile: "Send the update without this file",
      offerWithoutThisFile: "send the update without this file",
      wordsArg: "update_instructions"
    }
  };
function C(r, e) {
  let n = q(),
    host = n ? Xui.peek(e)?.host : void 0;
  if (!(n ? host !== void 0 && tvn(host, r) : y1e(r)) || !v("tengu_twinkling_cosmos", !1)) return;
  return {
    host: host
  };
}
async function Aga(r, e, n, s, o, f) {
  let files = n.files;
  if (!Array.isArray(files) || files.length === 0) return {};
  let h = D[e],
    l;
  try {
    let k = C(r, f);
    if (k === void 0) return {};
    let {
      host: host_2
    } = k;
    l = host_2 === void 0 ? await Y(files, h, s, o) : await G(files, h, host_2, s, o);
  } catch (k) {
    a(k), l = {
      error: `The files could not be attached. ${h.words.nothingDone} ${h.withoutFiles}`,
      code: "unexpected"
    };
  }
  if ("error" in l) {
    if (l.code !== "canceled" && l.code !== "upload_canceled") m("managed_agents_task_file_upload", l.code);
    return {
      error: l.error
    };
  }
  return g("managed_agents_task_file_upload"), {
    input: {
      ...n,
      files: l.files
    }
  };
}
var mustStartWithinMs = 600000,
  N = "start-task-upload-before-ask",
  ie = P,
  se = 300000,
  weakMap = new WeakMap();
function xga(r, e, n, s, o, f, toolUseId) {
  let files_2 = n.files;
  if (toolUseId === "" || !Array.isArray(files_2) || files_2.length === 0 || !files_2.every(item => it(item) && typeof item.path === "string" && item.file_id === void 0) || r.config.type !== "http" || !$u(r.config.url)) return;
  let l = C(r, f);
  if (l === void 0) return;
  let {
      host: host_3
    } = l,
    T = files_2,
    pathFormKey = _(n);
  return {
    prepare: () => {
      let p = Yui(f, toolUseId, pathFormKey),
        w = p && weakMap.get(p);
      if (w !== void 0) return w;
      let S = {
        toolUseId: toolUseId,
        pathFormKey: pathFormKey,
        files: [],
        uploadStartedAt: Date.now(),
        state: "uploading",
        remove: y => X(y, host_3)
      };
      qui(f, S);
      let E = ae(S, D[e], T, host_3, s, o, f).then(y => {
        if ("error" in y) return y;
        let files_3 = S.files;
        return {
          input: {
            ...n,
            files: files_3
          },
          description: `Attaches ${T.map((item, index) => `${Zle(String(item.path))} as ${Zle(files_3[index]?.name ?? "")} (${de(files_3[index]?.file_id)})`).join("; ")}`,
          release: () => CIe(f, S)
        };
      });
      return weakMap.set(S, E), E;
    }
  };
}
async function ae(r, e, n, s, o, f, u) {
  let h = {
      mustStartWithinMs: mustStartWithinMs,
      maxTotalBytes: s === void 0 ? ie : void 0,
      onUploaded: T => {
        if (r.state === "deleted") r.remove([T.file_id]);else r.files.push(T);
      }
    },
    l,
    k = !!i.CLAUDE_CODE_REMOTE_SEND_KEEPALIVES;
  if (k) sC("tool_exec", N);
  try {
    l = s === void 0 ? await Y(n, e, o, f, h) : await G(n, e, s, o, f, h);
  } catch (T) {
    a(T), l = {
      error: `The files could not be attached. ${e.words.nothingDone} ${e.withoutFiles}`,
      code: "unexpected"
    };
  } finally {
    if (k) iC("tool_exec", N);
  }
  if (!("error" in l) && r.state === "deleted") l = A("canceled", e);
  if ("error" in l) {
    if (await CIe(u, r), l.code !== "canceled" && l.code !== "upload_canceled") m("managed_agents_task_file_upload", l.code);
    return {
      error: l.error
    };
  }
  return g("managed_agents_task_file_upload"), r.state = "pending", {
    ok: !0
  };
}
async function X(r, e) {
  if (e === void 0) {
    await e4r(r);
    return;
  }
  await Promise.all(r.map(item => e.delete?.(item)));
}
function de(r) {
  return r !== void 0 && fve.test(r) ? r : "?";
}
async function Pga(r, e, n) {
  let s = C(r, e);
  if (s === void 0 || !Array.isArray(n)) return;
  let o = n.flatMap(item => it(item) && typeof item.file_id === "string" ? [item.file_id] : []);
  await X(o, s.host);
}
function Oga(r, e) {
  let n = D[e];
  if (Date.now() > r + expiresInSeconds * 1000 - se) return `The files for this task were uploaded about an hour before this approval and have expired or are about to. Call ${e} again to upload them afresh. ${n.words.nothingDone}`;
  let s = oN(),
    o = sW();
  if (o !== void 0) return (o === "egress_blocked" ? b(n) : U(n)).error;
  return s ? M(n).error : void 0;
}
function Iga(r, e, n) {
  let s = DAt(n);
  if (s === void 0 || q() || !y1e(r) || !v("tengu_twinkling_cosmos", !1)) return;
  return `In this session, files the user attached to the chat are usually in ${s}. To give one to the task, put its full path in files as an object, such as files: [{"path": "${s}/report.csv"}]. Do that rather than copying the file's text into ${D[e].wordsArg}.`;
}
function Mga(r, e, n, s, o) {
  let files_4 = n.files;
  if (files_4 === void 0 || files_4 === null || Array.isArray(files_4) && files_4.length === 0 || C(r, o) === void 0) return;
  let {
      words: words
    } = D[e],
    h = h6t(files_4, words),
    l = Array.isArray(h) ? void 0 : h,
    {
      files: files_5,
      ...T
    } = n,
    F = Array.isArray(h) ? {
      ...T,
      files: h.map((item, index) => ({
        file_id: `file_${index}`,
        name: `file_${index}`
      }))
    } : T,
    p = Fir(F, s, {
      ...words,
      ignoreInside: words.arg
    });
  if (l === void 0 && p === void 0) return;
  if (l === void 0) c("managed_agents_task_file_upload", "input_schema");else m("managed_agents_task_file_upload", l.code);
  if (p === void 0) return l.error;
  let w = ` ${words.nothingDone}`,
    S = l === void 0 ? "" : ` ${l.error.endsWith(w) ? l.error.slice(0, -w.length) : l.error}`;
  return `Cannot call ${e} with these arguments: ${p.listed}.${S}${p.takes} ${words.nothingDone}`;
}
var V = {
  mustStartWithinMs: mustStartWithinMs_2
};
async function Y(r, e, n, s, o = V) {
  let f = h6t(r, e.words);
  if (!Array.isArray(f)) return f;
  let u = oN(),
    h = sW();
  if (h !== void 0) return h === "egress_blocked" ? b(e) : U(e);
  if (u) return M(e);
  if (!sH()) return Q(e);
  for (let F of f) try {
    await $0e(F, n);
  } catch (error) {
    return t(`[task files] rejected path: ${F} (${d(error)})`), R(F, Mlt(error), "here", n, e);
  }
  let files_6 = [],
    k = Date.now() + o.mustStartWithinMs,
    T = o.maxTotalBytes === void 0 ? void 0 : {
      remainingBytes: o.maxTotalBytes
    };
  for (let F of f) {
    if (s.aborted) return A("canceled", e);
    if (Date.now() > k) return I(e);
    let realPath, requiredDigest;
    try {
      ({
        realPath: realPath,
        requiredDigest: requiredDigest
      } = await $0e(F, n));
    } catch (error) {
      return t(`[task files] rejected path: ${F} (${d(error)})`), R(F, Mlt(error), "here", n, e);
    }
    let S = await Zqr(realPath, requiredDigest, s, T);
    if (!S.ok) return t(`[task files] not uploaded: ${F} (${S.code})`), R(F, S.code, "here", n, e);
    let E = {
      file_id: S.file_id,
      name: S.name
    };
    files_6.push(E), o.onUploaded?.(E);
  }
  if (s.aborted) return A("canceled", e);
  if (Date.now() > k + timeoutMs) return I(e);
  return {
    files: files_6
  };
}
async function G(r, e, n, s, o, f = V) {
  let u = h6t(r, e.words);
  if (!Array.isArray(u)) return u;
  let h = oN(),
    l = sW();
  if (l !== void 0) return l === "egress_blocked" ? b(e) : U(e);
  if (h) return M(e);
  let k = "elsewhere",
    files_7 = [],
    F = Date.now() + f.mustStartWithinMs;
  for (let p of u) {
    if (o.aborted) return A("canceled", e);
    if (Date.now() > F) return I(e);
    if (n.ruleItCannotApply(s) !== void 0) return {
      error: `Cannot attach files: this session's limits on reading files cannot be applied in its cloud environment, where the upload would happen. ${e.words.nothingDone} ${e.withoutFiles}`,
      code: "rule_not_applicable"
    };
    if (!CEn(te.basename(p))) return {
      error: `Cannot attach "${p}": a file handed to a task from this session's cloud environment needs a plain name, without a backslash, a control character or a character that changes text direction. Copy or rename it and attach that. ${e.words.nothingDone}`,
      code: "name_not_plain"
    };
    let w = await n.upload(p, o);
    if (!w.ok) return R(p, w.code, k, s, e);
    if (!fve.test(w.file_id) || !CEn(w.name)) return R(p, "bad_answer", k, s, e);
    let S = {
      file_id: w.file_id,
      name: w.name
    };
    files_7.push(S), f.onUploaded?.(S);
  }
  if (o.aborted) return A("canceled", e);
  if (Date.now() > F + timeoutMs) return I(e);
  return {
    files: files_7
  };
}
async function Zqr(r, e, signal, s) {
  let name = await GTe(r);
  if (KIe.test(name)) return {
    ok: !1,
    code: "name_direction"
  };
  let f = await Vce(r, P);
  if (!("buf" in f)) return {
    ok: !1,
    code: f.refusal
  };
  if (s !== void 0) {
    if (f.buf.length > s.remainingBytes) return {
      ok: !1,
      code: "too_large_total"
    };
    s.remainingBytes -= f.buf.length;
  }
  if (e !== void 0 && nt(f.buf) !== e) return {
    ok: !1,
    code: "path_rejected"
  };
  await ul();
  let oauthToken = sH();
  if (!oauthToken) return {
    ok: !1,
    code: "no_token"
  };
  let h;
  try {
    let l = await Rgs(f.buf, name, {
      oauthToken: oauthToken,
      isStoredLogin: !0,
      sessionId: z(),
      baseUrl: nn().BASE_API_URL
    }, {
      signal: signal,
      expiresInSeconds: expiresInSeconds,
      timeoutMs: timeoutMs,
      retryAfterTimeout: !1
    });
    if (l.success) return {
      ok: !0,
      file_id: l.fileId,
      name: name
    };
    h = l.reason;
  } catch (error) {
    if (error instanceof AL) return {
      ok: !1,
      code: "egress_blocked"
    };
    t(`[task files] upload threw: ${d(error)}`, {
      level: "error"
    }), h = "network";
  }
  return {
    ok: !1,
    code: `upload_${h}`
  };
}
var Z = {
    file_read: !0,
    too_large: !0,
    auth: !0,
    forbidden: !0,
    canceled: !0,
    server: !0,
    network: !0
  },
  ue = {
    auth: !0,
    forbidden: !0,
    not_found: !0,
    server: !0,
    network: !0
  },
  F2o = ["egress_blocked", "essential_traffic", "no_token", "timeout", "unexpected", ...Object.keys(ue).map(item => `delete_${item}`)],
  timeoutMs_2 = 5000,
  j = "start_task upload cleanup timed out";
async function e4r(r) {
  if (r.length === 0) return;
  let e;
  try {
    e = await zt(le(r), timeoutMs_2, j);
  } catch (error) {
    if (error instanceof Error && error.message === j) e = "timeout";else a(error), e = "unexpected";
  }
  if (e === void 0) g("managed_agents_task_file_cleanup");else c("managed_agents_task_file_cleanup", e);
  return e;
}
async function le(r) {
  let e = nn().BASE_API_URL;
  try {
    gpt(e);
  } catch {
    return "egress_blocked";
  }
  if (St()) return "essential_traffic";
  await ul();
  let oauthToken_2 = sH();
  if (!oauthToken_2) return "no_token";
  let s = {
      oauthToken: oauthToken_2,
      isStoredLogin: !0,
      sessionId: z(),
      baseUrl: e
    },
    f = (await Promise.all(r.map(item => qSr(item, s, {
      timeoutMs: timeoutMs_2
    })))).find(item => !item.success);
  return f !== void 0 && !f.success ? `delete_${f.reason}` : void 0;
}
var H2o = [...Object.keys(i7o), ...Object.keys(Z).map(item => `upload_${item}`), "path_rejected", "no_token", "name_direction", "too_large_total"];
function R(r, code, n, s, o) {
  let {
    tool: tool,
    nothingDone: nothingDone
  } = o.words;
  if (n === "elsewhere" && code === "too_large") return {
    error: `Cannot attach "${r}": it is larger than this session's cloud environment can attach. ${nothingDone}`,
    code: code
  };
  if (LAt(code)) return Kir(r, code, P, nothingDone);
  if (n === "elsewhere" && code === "upload_auth") return {
    error: `The sign-in of this session's cloud environment was not accepted while uploading "${r}". ${nothingDone} ${o.withoutFiles}`,
    code: code
  };
  let h = code.startsWith("upload_") ? code.slice(7) : void 0;
  if (h !== void 0 && fe(h)) return H(r, h, o);
  switch (code) {
    case "egress_blocked":
      return b(o);
    case "path_rejected":
      return {
        error: n === "here" ? Vir(r, s, nothingDone) : `Cannot attach "${r}": only files in this session's working folder (unless that is the home folder) or in its uploads or outputs folder can be attached, by the absolute path of a regular file there. ${nothingDone}`,
        code: code
      };
    case "credential_name":
      return {
        error: Gir(r, n === "here" ? s : {
          isRemoteMode: !0
        }, nothingDone),
        code: code
      };
    case "too_large_total":
      return {
        error: `Cannot attach "${r}": with the files before it, the files named to ${tool} add up to more than ${P / 1048576} MiB, the most one call may attach. Attach fewer or smaller files. ${nothingDone}`,
        code: code
      };
    case "name_direction":
      return {
        error: `Cannot attach "${r}": its name contains a character that changes text direction, so the task could show it under a different name. Rename it, or copy it under a name without that character, and attach that. ${nothingDone}`,
        code: code
      };
    case "no_token":
      return n === "here" ? Q(o) : {
        error: `This session's cloud environment has no sign-in to upload files with. ${nothingDone} ${o.withoutFiles}`,
        code: code
      };
    case "canceled":
      return A("canceled", o);
    case "egress_blocked":
      return b(o);
    case "essential_traffic":
      return U(o);
    case "policy_pending":
      return {
        error: `This session's cloud environment has not yet loaded its organization's policy, so it cannot tell whether files may be uploaded. ${nothingDone} Try again in a moment, or ${o.offerWithoutFiles}.`,
        code: code
      };
    case "repo_rules_unread":
      return {
        error: `This session's cloud environment could not read the repository's permission rules, so the files were not attached. ${nothingDone} Retrying won't help: tell the user that .claude/settings.json or .claude/settings.local.json may have to be fixed or removed.`,
        code: code
      };
    case "container_too_old":
      return {
        error: `This session's cloud environment runs an older version of Claude Code, which cannot attach files to a task. ${nothingDone} ${o.withoutFiles}`,
        code: code
      };
    case "no_answer":
      return {
        ...H(r, "network", o),
        code: code
      };
    case "no_container":
    case "container_unreachable":
      return {
        error: `This session's cloud environment could not be reached, so the files were not attached. ${nothingDone} Try again, or ${o.offerWithoutFiles}.`,
        code: code
      };
    default:
      return {
        error: `The files could not be attached. ${nothingDone} ${o.withoutFiles}`,
        code: "unexpected"
      };
  }
}
function fe(r) {
  return Object.hasOwn(Z, r);
}
function I(r) {
  return {
    error: `Attaching these files is taking too long: the first ones would expire before the task could copy them. ${r.words.nothingDone} Attach fewer or smaller files, or ${r.offerWithoutFiles}.`,
    code: "uploads_too_slow"
  };
}
function U(r) {
  return {
    error: `Uploading files to Anthropic is turned off by CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC. ${r.words.nothingDone} ${r.withoutFiles}`,
    code: "essential_traffic"
  };
}
function M(r) {
  return {
    error: `This organization's policy has not loaded yet, so files cannot be attached right now. ${r.words.nothingDone} Try again in a minute; if it is refused again, tell the user and offer to ${r.offerWithoutTheFiles}.`,
    code: "policy_pending"
  };
}
function b(r) {
  return {
    error: `Uploading files to Anthropic is not available in this configuration. ${r.words.nothingDone} ${r.withoutFiles}`,
    code: "egress_blocked"
  };
}
function Q(r) {
  return {
    error: `Attaching files needs a claude.ai sign-in (run /login). ${r.words.nothingDone}`,
    code: "no_token"
  };
}
function A(code_2, e) {
  return {
    error: `Attaching files was interrupted. ${e.words.nothingDone}`,
    code: code_2
  };
}
function H(r, e, n) {
  let code_3 = `upload_${e}`,
    {
      nothingDone: nothingDone_2
    } = n.words;
  switch (e) {
    case "auth":
      return {
        error: `The session's sign-in was not accepted while uploading "${r}". The person may need to sign in again, or restart the session. ${nothingDone_2}`,
        code: code_3
      };
    case "forbidden":
      return {
        error: `This session's sign-in may not upload files, so "${r}" was not attached. ${nothingDone_2} ${n.withoutFiles}`,
        code: code_3
      };
    case "too_large":
      return {
        error: `The Files API refused "${r}" as too large. ${nothingDone_2}`,
        code: code_3
      };
    case "canceled":
      return A(code_3, n);
    case "server":
      return {
        error: `The Files API did not accept "${r}". ${nothingDone_2} ${n.withoutThisFile}, or tell the user.`,
        code: code_3
      };
    case "file_read":
    case "network":
      return {
        error: `The upload of "${r}" did not complete. ${nothingDone_2} Try again, or ${n.offerWithoutThisFile}.`,
        code: code_3
      };
  }
}
export { Aga, xga, Pga, Oga, Iga, Mga, Zqr, F2o, e4r, H2o };