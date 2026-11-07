// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Ee,
  LN
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  R,
  k,
  wr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  af
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  eV,
  MX,
  Lyo,
  hR,
  zht
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  mt,
  Ac
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  xf
} from "B:/~BUN/root/chunk-x1xft50h.js";
import {
  sk,
  xue,
  Ly,
  Gc
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  K9,
  aJe,
  YSr,
  $0e,
  OQt
} from "B:/~BUN/root/chunk-6bx54the.js";
import {
  ze
} from "B:/~BUN/root/chunk-xwzn0yxv.js";
import {
  homedir as g,
  tmpdir as _
} from "os";
import {
  dirname as c
} from "path";
var KIe = /[\u202a-\u202e\u2066-\u2069]/;

function Gpi(e) {
  let t = /([^/\\\n\r\u2028\u2029])([ \u202F])((?:AM|PM)\.png)$/.exec(e);
  return t === null ? void 0 : `${e.slice(0,t.index)}${t[1]}${t[2]===" "?"\u202F":" "}${t[3]}`
}

function CEn(e) {
  return e !== "" && e !== "." && e !== ".." && e.length <= 255 && !/[/\\\p{Cc}]/u.test(e) && !KIe.test(e)
}

function Wir(e, t) {
  return $0e(e, t)
}

function MAt(e, t, r) {
  let o = [mt(e), t.realPath];
  if (o.some((n) => K9(n, r))) throw o.some((s) => K9(s, {
    ...r,
    blockReadsOutsideWorkingDirectories: !1
  })) ? new R(`read not allowed under --restricted: ${e}`, "fileInputs/screenPath: restricted mode refused a file the upload screen passed") : new R(`read not allowed under permissions.blockReadsOutsideWorkingDirectories: ${e}`, "fileInputs/screenPath: read block refused a file the upload screen passed")
}

function Mlt(e) {
  return e instanceof aJe ? "credential_name" : "path_rejected"
}
var C = new Map([
  ["claudeInChrome/fileUpload: path read not allowed by session permissions", "read_not_allowed"],
  ["claudeInChrome/fileUpload: path matches a read deny rule", "read_deny_rule"],
  ["claudeInChrome/fileUpload: path matches a read ask rule", "read_ask_rule"],
  ["claudeInChrome/fileUpload: Read tool denied or ask-gated for this session", "read_tool_restricted"],
  ["claudeInChrome/fileUpload: path outside the working directories under the read block", "read_block"],
  ["claudeInChrome/fileUpload: restricted mode refused a file only an allow rule opens", "restricted_mode"],
  ["claudeInChrome/fileUpload: kernel or device path, or one of Claude Code's own credentials", "own_credential_or_device"],
  ["claudeInChrome/fileUpload: network path rejected before filesystem access", "network_path"],
  ["claudeInChrome/fileUpload: network path rejected", "network_path"],
  ["claudeInChrome/fileUpload: over-long path rejected", "too_long"],
  ["claudeInChrome/fileUpload: suspicious Windows path pattern rejected", "odd_spelling"],
  ["claudeInChrome/fileUpload: unvettable path ancestry rejected before filesystem access", "unvettable_ancestry"]
]);

function Vpi(e) {
  if (wr(e)) return "not_found";
  if (e instanceof aJe) return "credential_name";
  if (e instanceof YSr) return "outside_working_folders";
  return (e instanceof R ? C.get(e.telemetryMessage) : void 0) ?? (k(e) === void 0 ? "other" : "fs_error")
}

function zir(e) {
  return e === "/sessions" || e.startsWith("/sessions/")
}

function s7o(e, t, r) {
  let o = {
    reason: f(t),
    fileRefPathKind: b("other")
  };
  if (zir(e)) return {
    ...o,
    fileRefPathKind: b("vm_sessions")
  };
  if (Ac(e) === null) return o;
  try {
    let n = {
        caseFold: !0,
        uncShapeParity: !0
      },
      s = g(),
      d = af(),
      i = c(Ee()),
      l = [
        ["uploads", [eV]],
        ["outputs", [MX]],
        ["project_files", [zht]],
        ["claude_config", d === null ? [] : [d]],
        ["working_folder", [...sk(r)]],
        ["tmp", [xf(), _()]],
        ["beside_working_folder", i === c(i) || Gc(s, i, n) ? [] : [i]],
        ["home", [s, Lyo]]
      ].find(([, p]) => p.some((m) => Gc(e, m, n)))?.[0];
    return l === void 0 ? o : {
      ...o,
      fileRefPathKind: f(l)
    }
  } catch (n) {
    let s = k(n);
    if (s !== "ENOENT" && s !== "ERR_SYSTEM_ERROR") a(n);
    return o
  }
}

function Gir(e, t, r) {
  let o = DAt(t) === void 0 ? "Tell the user it was not attached." : "If the user wants it sent, ask them to attach it to the chat themselves.";
  return `Cannot attach "${e}": its name or folder is one that credentials are kept under (such as .env, a .pem or .key file, or .ssh), so it is not sent on Claude's word alone. ${o} ${r}`
}

function Vir(e, t, r) {
  let o = DAt(t),
    n = o === void 0 ? "Ask the user to share the file with this session, or to add its folder with /add-dir." : `Files the user attached to this chat are usually in ${o}; give the full path of one of those. If the file is not there, ask the user to attach it to the chat.`;
  return `Cannot attach "${e}": only files this session is allowed to read can be attached. ${n} ${r}`
}
var u = /(?:^|[\\/])\.\.namedfork(?:[\\/]|$)/i,
  w = new Set(["session", "cliArg"]);

function Kpi({
  realPath: e,
  sessionRoot: t
}, r) {
  if (xue(e, r)) return !1;
  if (u.test(e)) return !1;
  if (OQt()) return t === "attachments";
  if (t !== void 0) return !0;
  return Ly(e, r, void 0, [Ee(), ...Array.from(r.additionalWorkingDirectories.values()).filter(({
    source: o
  }) => w.has(o)).map(({
    path: o
  }) => o)])
}

function qpi(e) {
  return u.test(e)
}

function Ypi(e, t, r) {
  return `Cannot send ${e} ${t}: this path goes through a file's named fork (a part spelled "..namedfork"), and no file is sent to a connector by such a path, wherever it lies. To send that file, give its own path, without the fork. ${r}`
}

function Xpi(e, t, r, o) {
  let n = DAt(r),
    s = n === void 0 ? "" : ` Files the user attached to this chat are usually in ${n}.`,
    d = r.blockReadsOutsideWorkingDirectories === !0,
    i = d ? ` This session also blocks reads outside its working directories (permissions.blockReadsOutsideWorkingDirectories): a file in one of the folders kept for attachments and outputs is sent only if that setting lets the ${ze} tool read it.` : "";
  if (OQt()) {
    let l = d ? `This session also blocks reads outside its working directories (permissions.blockReadsOutsideWorkingDirectories), so an attached file is sent only if that setting lets the ${ze} tool read it. To send this file, the user can ask in a session that runs no background job, which can send a file that is in the folder it was started in or in a folder added for it (--add-dir, or /add-dir with "Yes, for this session", or a folder allowed on a prompt), if that session may read it.` : 'To send this file, the user can ask in a session that runs no background job, which can send a file that is in the folder it was started in or in a folder added for it (--add-dir, or /add-dir with "Yes, for this session", or a folder allowed on a prompt), if that session may read it; or, if this chat is open in claude.ai, attach the file to it there.';
    return LN() === null ? `Cannot send ${e} ${t}: this session runs a background job, and from a background job only a file the user attached to the chat since the job last started can be sent to a connector; a file attached before it restarted, or before a window took it over, has to be attached again. ${l} ${o}` : `Cannot send ${e} ${t}: this session runs a background job, and a background job can send to a connector only a file that Claude Code has on record as attached by the user. This session keeps no such record, so no file can be sent from it, not even one attached to the chat. To send this file, the user can ask in a session that runs no background job, which can send a file that is in the folder it was started in or in a folder added for it (--add-dir, or /add-dir with "Yes, for this session", or a folder allowed on a prompt), if that session may read it. ${o}`
  }
  return `Cannot send ${e} ${t}: a file can be sent to a connector only if it exists, this session may read it, it is not one of the files Claude Code keeps for itself (its configuration folder, with its settings, its saved sessions and its sign-in), and it is in the folder Claude Code started in, in a folder added for this session, or in the folders a hosted session keeps for attachments and outputs. If the path is or goes through a link, the file it leads to must be in one of these folders. To send a file from another folder, tell the user to type /add-dir and that folder's path and to choose "Yes, for this session" (or to start Claude Code with --add-dir and that path), then to ask again. A folder added with "Yes, and remember this directory" or listed in a settings file does not count: if /add-dir answers that the folder is "already added" or "already accessible", a session that the user starts in that folder counts it as the folder Claude Code started in. A picture pasted from the clipboard is not a file: the path Claude Code gives for it is Claude Code's own temporary copy, which cannot be sent. Tell the user to save the picture as a file in the folder Claude Code started in, then to drag that file in and ask again.${s}${i} ${o}`
}

function DAt(e) {
  if (e.isRemoteMode !== !0) return;
  try {
    return hR()
  } catch {
    return
  }
}
var i7o = {
  too_large: !0,
  hard_links: !0,
  not_regular: !0,
  moved: !0,
  grew: !0,
  open_failed: !0,
  read_failed: !0
};

function LAt(e) {
  return Object.hasOwn(i7o, e)
}

function Kir(e, t, r, o) {
  switch (t) {
    case "too_large":
      return {
        error: `Cannot attach "${e}": files over ${r/1048576} MiB cannot be attached. ${o}`, code: "too_large"
      };
    case "hard_links":
      return {
        error: `Cannot attach "${e}": the file has more than one hard link, which can point at a file outside the folders this session may read. Copy the file and attach the copy. ${o}`, code: "hard_links"
      };
    case "not_regular":
      return {
        error: `Cannot attach "${e}": it is not a regular file. Attach files one at a time, not a folder. ${o}`, code: "not_regular"
      };
    case "moved":
    case "grew":
    case "open_failed":
    case "read_failed":
      return {
        error: `Could not read "${e}". ${o}`, code: t
      }
  }
}
export {
  KIe,
  Gpi,
  CEn,
  Wir,
  MAt,
  Mlt,
  Vpi,
  zir,
  s7o,
  Gir,
  Vir,
  Kpi,
  qpi,
  Ypi,
  Xpi,
  DAt,
  i7o,
  LAt,
  Kir
};
