// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  X5,
  IDe
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  b,
  c
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  Fr
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  g,
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  mc
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  Zs
} from "B:/~BUN/root/chunk-wegca9zh.js";
import {
  uE
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  vl
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  K7
} from "B:/~BUN/root/chunk-sg9k8m28.js";
import {
  DN,
  Wee,
  CH
} from "B:/~BUN/root/chunk-9w4ppz44.js";
import {
  hO
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  eit
} from "B:/~BUN/root/chunk-hf4a8gft.js";
import {
  Rut
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  Akn,
  dRe,
  cRe,
  srt
} from "B:/~BUN/root/chunk-tezeeef5.js";
import {
  iyn,
  Det
} from "B:/~BUN/root/chunk-0an1fxbc.js";
import {
  USt,
  BSt,
  oyn,
  syn
} from "B:/~BUN/root/chunk-k9gn0mp5.js";
import {
  st
} from "B:/~BUN/root/chunk-7aw74be3.js";
import {
  constants as A
} from "fs";
import {
  lstat as v,
  open as H,
  realpath as U,
  unlink as W
} from "fs/promises";
import {
  posix as R
} from "path";
var j = 3000,
  ryn = 134217728,
  z = new Set(["csv", "docx", "jsonl", "log", "md", "ndjson", "ods", "odt", "parquet", "pdf", "pptx", "rtf", "tsv", "txt", "xls", "xlsm", "xlsx", "zip"]),
  k = new Set(["cmakecache.txt", "cmakelists.txt", "conanfile.txt", "constraints.txt", "requirements.txt"]),
  K = /^test.*\.txt$/;

function qQn(e) {
  if (e.includes(R.sep)) return "has_directory";
  if (Buffer.byteLength(e) > Akn) return "too_long";
  if (!mc(e)) return "odd_spelling";
  let l = dRe(e);
  if (l !== void 0) return l;
  let o = vl(e),
    d = o.lastIndexOf(".");
  if (d <= 0) return "no_suffix";
  if (!z.has(o.slice(d + 1))) return "not_data";
  return k.has(o) || K.test(o) ? "project_file" : void 0
}
async function Y(e, {
  fileUuid: l,
  name: o
}, d) {
  let r = await cRe(e, o);
  if (r !== void 0) return {
    outcome: r.outcome === "refused_name" ? `refused_${r.refusal}` : r.outcome,
    bytes: 0
  };
  let t = eit(l, void 0);
  if (t === void 0) return {
    outcome: "source_missing",
    bytes: 0
  };
  if (t.size > d) return {
    outcome: "over_byte_budget",
    bytes: 0
  };
  let s = await K7(t.path, t.size);
  if (s === null) return {
    outcome: "source_unreadable",
    bytes: 0
  };
  if (st(s) !== t.sha256) return {
    outcome: "source_changed",
    bytes: 0
  };
  let f = await KQn(e, o, s);
  if (f.outcome === "placed") await XQn(e, {
    fileUuid: l,
    name: o
  }, t);
  return f.outcome === "refused_name" ? {
    outcome: `refused_${f.refusal}`,
    bytes: 0
  } : {
    outcome: f.outcome,
    bytes: f.outcome === "placed" ? s.length : 0
  }
}
async function KQn(e, l, o) {
  return await YQn(e, l, o, (d) => srt(d, e, l))
}
async function YQn(e, l, o, d) {
  let r = R.join(e, `${iyn(l)}${Date.now()}.${Math.random().toString(36).slice(2)}`),
    t = await H(r, A.O_WRONLY | A.O_CREAT | A.O_EXCL | Zs, 384);
  try {
    try {
      await t.writeFile(o)
    } finally {
      await t.close()
    }
    return await d(r)
  } finally {
    await W(r).catch(() => {})
  }
}
async function XQn(e, {
  fileUuid: l,
  name: o
}, {
  size: d,
  sha256: r
}) {
  let t = IDe(),
    s = BSt(o),
    f = R.join(e, o),
    h = t.get(s);
  t.delete(s);
  let w = await v(f).catch(() => {
    return
  });
  if (w === void 0) return;
  let S = t.size >= USt && t.keys().next().value;
  if (typeof S === "string") t.delete(S);
  t.set(s, {
    path: f,
    fileUuid: l.toLowerCase(),
    dev: w.dev,
    ino: w.ino,
    mtimeMs: Math.floor(w.mtimeMs),
    size: d,
    sha256: r,
    ...h !== void 0 && h.path !== f && {
      ambiguous: !0
    }
  })
}
var N = {
  filesWait: "not_reached",
  filesWaitMs: 0,
  copiedBytes: 0,
  namedInCall: 0,
  namedInCallPlaced: 0,
  namedInCallAlreadyPresent: 0,
  counts: {}
};
async function QZs(e, l, o = j, d = ryn) {
  let {
    fileNames: r
  } = e;
  if (r === void 0) return;
  let t = performance.now(),
    {
      outcome: s,
      filesWait: f,
      counts: h,
      lastErrorCode: w,
      ...S
    } = r === "malformed" ? {
      ...N,
      outcome: "malformed"
    } : await q(r, e, l, o, d).catch((y) => ({
      ...N,
      outcome: "failed",
      lastErrorCode: Fr(y) ?? b("unknown")
    })),
    C = r === "malformed" ? 0 : r.length,
    F = {
      outcome: c(s),
      files_wait: c(f),
      files_wait_ms: S.filesWaitMs,
      duration_ms: Math.round(performance.now() - t),
      approx_copied_bytes: Number(S.copiedBytes.toPrecision(2)),
      files_listed: C,
      files_named_in_call: S.namedInCall,
      files_named_in_call_placed: S.namedInCallPlaced,
      files_named_in_call_already_present: S.namedInCallAlreadyPresent,
      ...hO(h, (y, E) => `files_${E}`),
      ...w !== void 0 && {
        last_error_code: w
      }
    };
  i("tengu_turn_handoff_files_by_name", F), X(w !== void 0 || s === "malformed" ? "warn" : "info", "turn_handoff_files_by_name", F);
  let I = (h.placed ?? 0) + (h.already_present ?? 0) + (h.present_under_another_name ?? 0),
    T = X5(Object.entries(h), ([y, E]) => y.startsWith("refused_") || y === "repeated_name" || y === "path_occupied" ? E : 0);
  if (s === "aborted");
  else if (s === "not_applicable") p("ccr_turn_handoff_files_by_name", s);
  else if (s !== "finished") m("ccr_turn_handoff_files_by_name", s);
  else if (T === C) p("ccr_turn_handoff_files_by_name", "all_skipped_by_rule");
  else if (I + T === C) g("ccr_turn_handoff_files_by_name");
  else if (I > 0) p("ccr_turn_handoff_files_by_name", "some_files_absent");
  else m("ccr_turn_handoff_files_by_name", "all_files_absent")
}
async function q(e, l, o, d, r) {
  let t = Wee(),
    [s, f] = await Promise.all([ce(), t].map((n) => U(n).catch(() => {
      return
    })));
  if (!uE() || !CH(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND) || f === void 0 || s !== f) return {
    ...N,
    outcome: "not_applicable"
  };
  let h = performance.now(),
    w = await Rut(o),
    S = Math.round(performance.now() - h);
  await Det(t, DN), await syn();
  let C = l.messages.at(-1),
    F = C?.type === "assistant" && Array.isArray(C.message.content) ? C.message.content.flatMap((n) => n.type === "tool_use" && l.toolUseIDs.includes(n.id) && typeof n.input === "object" && n.input !== null ? Object.values(n.input).flatMap((_) => typeof _ === "string" ? [_, _.replaceAll("\\", "")] : []) : []) : [],
    I = new Set(e.filter(({
      name: n
    }) => n !== "" && F.some((_) => _.includes(n)))),
    T = new Map;
  for (let {
      name: n,
      fileUuid: _
    }
    of e) T.set(n, (T.get(n) ?? new Set).add(_.toLowerCase()));
  let y = {},
    E = new Set,
    O = 0,
    M = 0,
    L = 0,
    x, B = !1,
    D = performance.now() + d;
  for (let n of e.toSorted((_, u) => Number(I.has(u)) - Number(I.has(_)))) {
    if (o.aborted) {
      B = !0;
      break
    }
    let _ = qQn(n.name),
      u;
    if (_ !== void 0) u = `refused_${_}`;
    else if (T.get(n.name)?.size !== 1) u = "repeated_name";
    else if (E.has(n.fileUuid.toLowerCase())) u = "present_under_another_name";
    else if (performance.now() > D) u = "over_time_budget";
    else try {
      let P = await Y(t, n, r - O);
      u = P.outcome, O += P.bytes
    } catch (P) {
      x = Fr(P) ?? b("unknown"), u = "copy_failed"
    }
    if (y[u] = (y[u] ?? 0) + 1, u === "placed" || u === "already_present") E.add(n.fileUuid.toLowerCase());
    if (I.has(n) && u === "placed") M++;
    else if (I.has(n) && u === "already_present") L++
  }
  if ((y.placed ?? 0) > 0) await oyn();
  return {
    outcome: B ? "aborted" : "finished",
    filesWait: w,
    filesWaitMs: S,
    copiedBytes: O,
    namedInCall: I.size,
    namedInCallPlaced: M,
    namedInCallAlreadyPresent: L,
    counts: y,
    ...x !== void 0 && {
      lastErrorCode: x
    }
  }
}
export {
  ryn,
  qQn,
  KQn,
  YQn,
  XQn,
  QZs
};
