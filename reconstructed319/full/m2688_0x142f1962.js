// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Tme
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b,
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  tr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  nf
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  ro
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  ry
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  Ol
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  F1,
  DX
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  sz
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  uO
} from "B:/~BUN/root/chunk-x6frvp1m.js";
import {
  Ble
} from "B:/~BUN/root/chunk-2n5m7hvm.js";
import {
  Jnr,
  ZBe,
  e1e,
  vRt
} from "B:/~BUN/root/chunk-j3dtncp6.js";
import {
  pRt
} from "B:/~BUN/root/chunk-e58v73vz.js";
import {
  Xnr,
  kRt
} from "B:/~BUN/root/chunk-err758sh.js";
import {
  FWt,
  HWt,
  o4n,
  jun
} from "B:/~BUN/root/chunk-z1s6qa6a.js";
import {
  IMt
} from "B:/~BUN/root/chunk-cxcakgnv.js";
import {
  ase
} from "B:/~BUN/root/chunk-17caj8fw.js";
import {
  nt
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
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
  r4n = 134217728,
  z = new Set(["csv", "docx", "jsonl", "log", "md", "ndjson", "ods", "odt", "parquet", "pdf", "pptx", "rtf", "tsv", "txt", "xls", "xlsm", "xlsx", "zip"]),
  k = new Set(["cmakecache.txt", "cmakelists.txt", "conanfile.txt", "constraints.txt", "requirements.txt"]),
  X = /^test.*\.txt$/;

function UUr(e) {
  if (e.includes(R.sep)) return "has_directory";
  if (Buffer.byteLength(e) > Jnr) return "too_long";
  if (!nf(e)) return "odd_spelling";
  let s = ZBe(e);
  if (s !== void 0) return s;
  let o = Ol(e),
    d = o.lastIndexOf(".");
  if (d <= 0) return "no_suffix";
  if (!z.has(o.slice(d + 1))) return "not_data";
  return k.has(o) || X.test(o) ? "project_file" : void 0
}
async function K(e, {
  fileUuid: s,
  name: o
}, d) {
  let r = await e1e(e, o);
  if (r !== void 0) return {
    outcome: r.outcome === "refused_name" ? `refused_${r.refusal}` : r.outcome,
    bytes: 0
  };
  let t = pRt(s, void 0);
  if (t === void 0) return {
    outcome: "source_missing",
    bytes: 0
  };
  if (t.size > d) return {
    outcome: "over_byte_budget",
    bytes: 0
  };
  let a = await Ble(t.path, t.size);
  if (a === null) return {
    outcome: "source_unreadable",
    bytes: 0
  };
  if (nt(a) !== t.sha256) return {
    outcome: "source_changed",
    bytes: 0
  };
  let u = await BUr(e, o, a, void 0);
  if (u.outcome === "placed") await WUr(e, {
    fileUuid: s,
    name: o
  }, t);
  return u.outcome === "refused_name" ? {
    outcome: `refused_${u.refusal}`,
    bytes: 0
  } : {
    outcome: u.outcome,
    bytes: u.outcome === "placed" ? a.length : 0
  }
}
async function BUr(e, s, o, d) {
  return await jUr(e, s, o, (r) => vRt(r, e, s, d))
}
async function jUr(e, s, o, d) {
  let r = R.join(e, `${Xnr(s)}${Date.now()}.${Math.random().toString(36).slice(2)}`),
    t = await H(r, A.O_WRONLY | A.O_CREAT | A.O_EXCL | ro, 384);
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
async function WUr(e, {
  fileUuid: s,
  name: o
}, {
  size: d,
  sha256: r
}) {
  let t = Tme(),
    a = HWt(o),
    u = R.join(e, o),
    h = t.get(a);
  t.delete(a);
  let w = await v(u).catch(() => {
    return
  });
  if (w === void 0) return;
  let S = t.size >= FWt && t.keys().next().value;
  if (typeof S === "string") t.delete(S);
  t.set(a, {
    path: u,
    fileUuid: s.toLowerCase(),
    dev: w.dev,
    ino: w.ino,
    mtimeMs: Math.floor(w.mtimeMs),
    size: d,
    sha256: r,
    ...h !== void 0 && h.path !== u && {
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
async function mma(e, s, o = j, d = r4n) {
  let {
    fileNames: r
  } = e;
  if (r === void 0) return;
  let t = performance.now(),
    {
      outcome: a,
      filesWait: u,
      counts: h,
      lastErrorCode: w,
      ...S
    } = r === "malformed" ? {
      ...N,
      outcome: "malformed"
    } : await Y(r, e, s, o, d).catch((y) => ({
      ...N,
      outcome: "failed",
      lastErrorCode: tr(y) ?? b("unknown")
    })),
    C = r === "malformed" ? 0 : r.length,
    F = {
      outcome: f(a),
      files_wait: f(u),
      files_wait_ms: S.filesWaitMs,
      duration_ms: Math.round(performance.now() - t),
      approx_copied_bytes: Number(S.copiedBytes.toPrecision(2)),
      files_listed: C,
      files_named_in_call: S.namedInCall,
      files_named_in_call_placed: S.namedInCallPlaced,
      files_named_in_call_already_present: S.namedInCallAlreadyPresent,
      ...uO(h, (y, E) => `files_${E}`),
      ...w !== void 0 && {
        last_error_code: w
      }
    };
  l("tengu_turn_handoff_files_by_name", F), V(w !== void 0 || a === "malformed" ? "warn" : "info", "turn_handoff_files_by_name", F);
  let I = (h.placed ?? 0) + (h.already_present ?? 0) + (h.present_under_another_name ?? 0),
    T = ase(Object.entries(h), ([y, E]) => y.startsWith("refused_") || y === "repeated_name" || y === "path_occupied" ? E : 0);
  if (a === "aborted");
  else if (a === "not_applicable") c("ccr_turn_handoff_files_by_name", a);
  else if (a !== "finished") m("ccr_turn_handoff_files_by_name", a);
  else if (T === C) c("ccr_turn_handoff_files_by_name", "all_skipped_by_rule");
  else if (I + T === C) g("ccr_turn_handoff_files_by_name");
  else if (I > 0) c("ccr_turn_handoff_files_by_name", "some_files_absent");
  else m("ccr_turn_handoff_files_by_name", "all_files_absent")
}
async function Y(e, s, o, d, r) {
  let t = DX(),
    [a, u] = await Promise.all([pe(), t].map((n) => U(n).catch(() => {
      return
    })));
  if (!ry() || !sz(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND) || u === void 0 || a !== u) return {
    ...N,
    outcome: "not_applicable"
  };
  let h = performance.now(),
    w = await IMt(o),
    S = Math.round(performance.now() - h);
  await kRt(t, F1), await jun();
  let C = s.messages.at(-1),
    F = C?.type === "assistant" && Array.isArray(C.message.content) ? C.message.content.flatMap((n) => n.type === "tool_use" && s.toolUseIDs.includes(n.id) && typeof n.input === "object" && n.input !== null ? Object.values(n.input).flatMap((p) => typeof p === "string" ? [p, p.replaceAll("\\", "")] : []) : []) : [],
    I = new Set(e.filter(({
      name: n
    }) => n !== "" && F.some((p) => p.includes(n)))),
    T = new Map;
  for (let {
      name: n,
      fileUuid: p
    }
    of e) T.set(n, (T.get(n) ?? new Set).add(p.toLowerCase()));
  let y = {},
    E = new Set,
    O = 0,
    M = 0,
    L = 0,
    x, B = !1,
    D = performance.now() + d;
  for (let n of e.toSorted((p, _) => Number(I.has(_)) - Number(I.has(p)))) {
    if (o.aborted) {
      B = !0;
      break
    }
    let p = UUr(n.name),
      _;
    if (p !== void 0) _ = `refused_${p}`;
    else if (T.get(n.name)?.size !== 1) _ = "repeated_name";
    else if (E.has(n.fileUuid.toLowerCase())) _ = "present_under_another_name";
    else if (performance.now() > D) _ = "over_time_budget";
    else try {
      let P = await K(t, n, r - O);
      _ = P.outcome, O += P.bytes
    } catch (P) {
      x = tr(P) ?? b("unknown"), _ = "copy_failed"
    }
    if (y[_] = (y[_] ?? 0) + 1, _ === "placed" || _ === "already_present") E.add(n.fileUuid.toLowerCase());
    if (I.has(n) && _ === "placed") M++;
    else if (I.has(n) && _ === "already_present") L++
  }
  if ((y.placed ?? 0) > 0) await o4n();
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
  r4n,
  UUr,
  BUr,
  jUr,
  WUr,
  mma
};
