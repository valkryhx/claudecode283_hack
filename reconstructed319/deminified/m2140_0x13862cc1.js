// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { z, LN, q } from "B:/~BUN/root/chunk-game8aqv.js";
import { k, tr } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { we, Ao } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { qi, Oh, ms, v } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { AN } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Iw } from "B:/~BUN/root/chunk-1g25msn4.js";
import { ro } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { tn } from "B:/~BUN/root/chunk-1fg2bpc3.js";
import { KCe, hR } from "B:/~BUN/root/chunk-7pxn9dsp.js";
import { rve } from "B:/~BUN/root/chunk-j3dtncp6.js";
import { R8, e3e, dIe } from "B:/~BUN/root/chunk-k6fyzzmm.js";
import { lGe } from "B:/~BUN/root/chunk-ekfahkar.js";
import { nse } from "B:/~BUN/root/chunk-zx0hhrva.js";
import { D } from "B:/~BUN/root/chunk-8mqsat26.js";
import { Go } from "B:/~BUN/root/chunk-cf143bsb.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { constants as G } from "fs";
import { lstat as se, open as X, readdir as de } from "fs/promises";
import { basename as K, dirname as V, join as U } from "path";
import { lstat as I, readdir as B, realpath as Q } from "fs/promises";
import { join as W, posix as ee } from "path";
var te = "/.uploads-in-place",
  oe = /^\/\.uploads-in-place\/([0-9a-f]{32})\/([0-9a-f-]{36})-([0-9a-f]{64})$/,
  limit = 500,
  ie = 31457280,
  re = 1e4;
async function Y(s) {
  let n = AbortSignal.timeout(re);
  return Ao(ae(n, s), n, () => Error("the pass is out of time")).catch(() => ({
    removed_count: 0,
    kept_changed_file_count: 0,
    kept_in_store_file_count: 0,
    failed_count: 1,
    whyFailed: "pass_deadline"
  }));
}
async function ae(signal, n) {
  let t = {
      removed_count: 0,
      kept_changed_file_count: 0,
      kept_in_store_file_count: 0,
      failed_count: 0
    },
    _ = [];
  try {
    let l = await Q(hR()).catch(e => {
      if (k(e) !== "ENOENT") u(t, tr(e) ?? "unknown");
      return;
    });
    if (l === void 0) return t;
    let p = ["", ...(await B(l, {
        withFileTypes: !0
      })).filter(item => item.isDirectory()).map(item => item.name)],
      O = [];
    for (let e of p) {
      let o = await R8(W(l, e), 0);
      if (o === "absent") continue;
      if (typeof o === "string") {
        u(t, o);
        continue;
      }
      _.push(o);
      for (let h of await B(o.at, {
        withFileTypes: !0
      })) if (h.isFile()) O.push({
        in: o,
        name: h.name,
        path: ee.join(KCe, e, h.name)
      });
    }
    if (O.length === 0) return t;
    let [{
        openFilestoreReader: openFilestoreReader
      }, {
        hashStandingFile: hashStandingFile,
        sameFileUntouched: sameFileUntouched
      }] = await Promise.all([import("B:/~BUN/root/chunk-r0jrwgpt.js"), import("B:/~BUN/root/chunk-bf81775t.js")]),
      b = await openFilestoreReader(signal);
    if (!b.ok) return u(t, "no_store_credential"), t;
    let {
        reader: reader,
        facts: facts
      } = b,
      r = await reader.listDirectory(te, {
        limit: limit,
        recursive: !0,
        signal: signal
      });
    if (!r.ok) {
      if (!r.notFound) u(t, "records_not_read");
      return t;
    }
    if (r.more) u(t, "records_page_cut");
    let E = r.directories.flatMap(item => {
        let [, md5, h, d_2] = oe.exec(item) ?? [];
        return md5 !== void 0 && h !== void 0 && n.has(h) ? [{
          md5: md5,
          d: d_2
        }] : [];
      }),
      T = new Map();
    for (let e of O) {
      let o = nt(`${facts.filesystemId}
${e.path}`),
        h = E.filter(item => item.d === o);
      if (h.length === 0) continue;
      if (signal.aborted) {
        u(t, "pass_deadline");
        break;
      }
      let w = W(e.in.at, e.name),
        [N, L] = await Promise.all([I(w), I(w, {
          bigint: !0
        })]).catch(() => []);
      if (N === void 0 || L === void 0) {
        u(t, "look_failed");
        continue;
      }
      if (!N.isFile() || N.size > ie) {
        t.kept_changed_file_count++;
        continue;
      }
      let R = await hashStandingFile(w, L);
      if (typeof R === "string") {
        u(t, `hash_${R}`);
        continue;
      }
      if (!h.some(item => item.md5 === R.md5)) {
        t.kept_changed_file_count++;
        continue;
      }
      let f = await facts.holdsAt(e.path, {
        signal: signal
      });
      if (f === "a_file") {
        t.kept_in_store_file_count++;
        continue;
      }
      if (f !== "nothing") {
        u(t, "store_gave_no_answer");
        continue;
      }
      if (!T.has(e.in)) T.set(e.in, await e3e(e.in));
      let d = T.get(e.in);
      if (d !== !0) u(t, d ?? "unknown");else if (!(await I(w, {
        bigint: !0
      }).then(y => sameFileUntouched(R.opened, y), () => !1))) t.kept_changed_file_count++;else if (signal.aborted) u(t, "pass_deadline");else if (await rve(w, N)) t.removed_count++;else u(t, "unlink_failed");
    }
  } catch (error) {
    a(error), u(t, "staged_pass_threw");
  } finally {
    await Promise.all(_.map(item => item.release()));
  }
  return t;
}
function u(s, n) {
  s.failed_count++, s.whyFailed = n;
}
var H = ".saved-uploads.jsonl",
  le = 1048576,
  ce = /^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(\.\d+)?(Z|[+-]\d\d:\d\d)$/,
  fe = 86400000,
  _e = 300000,
  ue = 2000;
function J() {
  return (tn() || i.CLAUDE_CODE_REMOTE === !0 && i.CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") && i.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE !== "self_hosted" && LN() === null && !q();
}
async function Z(s) {
  let n = await X(U(s, H), Go | ro).catch(t => k(t) === "ENOENT" ? "" : void 0);
  if (typeof n !== "object") return n;
  try {
    let t = await n.stat(),
      _ = t.isFile() ? await Iw(n, le, t.size) : void 0;
    return _ === void 0 || _.overLimit ? void 0 : _.bytes.toString("utf8");
  } finally {
    await n.close();
  }
}
async function vnr(file_uuid, {
  path: path,
  sha256: sha256,
  size: size
}, l = !1) {
  try {
    if (!J() || K(path) === H) return !1;
    let p = l ? await R8(V(path), 0) : await dIe(V(path));
    if (typeof p === "string") return c("bridge_attachment_deleted_copy", p), !1;
    try {
      let O = await Z(p.at);
      if (O === void 0) return c("bridge_attachment_deleted_copy", "record_unreadable"), !1;
      let S = AN({
        name: K(path),
        file_uuid: file_uuid,
        sha256: sha256,
        size: size
      });
      if (O.includes(S)) return !0;
      let F = await X(U(p.at, H), G.O_WRONLY | G.O_APPEND | G.O_CREAT | Go | ro, 384);
      try {
        await F.appendFile(S);
      } finally {
        await F.close();
      }
      return !0;
    } finally {
      await p.release();
    }
  } catch (error) {
    return a(error), c("bridge_attachment_deleted_copy", "not_recorded"), !1;
  }
}
async function Enr(s, n) {
  let t = n?.report ?? me,
    _ = new Set();
  try {
    let l = s?.internal?.removed_chat_files;
    if (!D(l) || !J()) return _;
    let p = Object.keys(l);
    if (p.length === 0) return _;
    let O = Date.now(),
      S = p.map(item => {
        let o = l[item];
        return {
          id: item.toLowerCase(),
          age: typeof o === "string" && ce.test(o) ? O - Date.parse(o) : Number.NaN
        };
      }),
      F = new Set(S.filter(({
        age: age
      }) => !(age >= -_e)).map(({
        id: id
      }) => id)),
      P = new Set(S.filter(({
        id: id_2,
        age: age_2
      }) => age_2 > fe && !F.has(id_2)).map(({
        id: id_3
      }) => id_3)),
      b = new Set(S.map(({
        id: id_4
      }) => id_4).filter(item => !F.has(item) && !P.has(item))),
      A = !0,
      C = !1;
    if (n === void 0) {
      if (await we(ms().catch(() => null), ue), A = v("tengu_cozy_hamming", !1) === !0, C = v("tengu_mossy_kepler", !1) === !0, !A && !C) {
        if (Oh() && !qi()) t("sad", "flags_not_fetched");
        return _;
      }
    }
    if (A) _ = b;
    let r = {
        listed_count: b.size,
        too_old_count: P.size,
        recorded_count: 0,
        removed_count: 0,
        kept_changed_file_count: 0,
        staged_removed_count: 0,
        kept_in_store_file_count: 0,
        failed_count: F.size
      },
      E = S.some(({
        age: age_3
      }) => Number.isNaN(age_3)) ? "list_value_unknown" : "check_ahead_of_clock",
      T = n === void 0 ? nse().map(item => U(item, z())) : [n.folder];
    for (let e of A && b.size > 0 ? T : []) {
      let o = await R8(e, 0);
      if (o === "absent") continue;
      if (typeof o === "string") {
        r.failed_count++, E = o;
        continue;
      }
      try {
        let h = (await Z(o.at))?.split(`
`).filter(f => f !== ""),
          w = (h ?? []).flatMap(item => {
            let d = et(item, !1);
            return D(d) && typeof d.name === "string" && typeof d.file_uuid === "string" ? [{
              name: d.name,
              file_uuid: d.file_uuid,
              sha256: d.sha256,
              size: d.size
            }] : [];
          });
        if (w.length !== h?.length) {
          r.failed_count++, E = "record_unreadable";
          continue;
        }
        let N = new Set(w.filter(item => !b.has(item.file_uuid.toLowerCase())).map(item => item.name)),
          L = new Set(await de(o.at)),
          R;
        for (let f of new Set(w.map(item => item.name))) {
          if (N.has(f)) continue;
          if (r.recorded_count++, !L.has(f)) continue;
          let d = U(o.at, f),
            y = await se(d).catch(() => {
              return;
            });
          if (y === void 0) {
            r.failed_count++, E = "look_failed";
            continue;
          }
          let j = w.filter(item => item.name === f && item.size === y.size),
            x = y.isFile() && j.length > 0 ? await lGe(d, y.size, y) : null;
          if (x === null || !j.some(item => item.sha256 === x)) {
            r.kept_changed_file_count++;
            continue;
          }
          if (R ??= await e3e(o), R !== !0) r.failed_count++, E = R;else if (await rve(d, y)) r.removed_count++;else r.failed_count++, E = "unlink_failed";
        }
      } finally {
        await o.release();
      }
    }
    if (C && b.size > 0) {
      let e = await Y(b);
      r.staged_removed_count = e.removed_count, r.kept_in_store_file_count = e.kept_in_store_file_count, r.kept_changed_file_count += e.kept_changed_file_count, r.failed_count += e.failed_count, E = e.whyFailed ?? E;
    }
    if (r.failed_count > 0) t("sad", E, r);else t("ok", void 0, r);
  } catch (error) {
    a(error), t("bad", "threw");
  }
  return _;
}
function me(s, n, t) {
  switch (s) {
    case "ok":
      g("bridge_attachment_deleted_copy", t);
      break;
    case "sad":
      c("bridge_attachment_deleted_copy", n ?? "unknown", t);
      break;
    case "bad":
      m("bridge_attachment_deleted_copy", n ?? "unknown");
      break;
  }
}
export { vnr, Enr };