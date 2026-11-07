// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  De
} from "B:/~BUN/root/chunk-vz9zea4j.js";
import {
  z,
  Tme,
  a$r,
  _Oo,
  LN
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  b
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  R,
  F,
  k,
  tr
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  _,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  V
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  R8,
  e3e,
  dIe
} from "B:/~BUN/root/chunk-k6fyzzmm.js";
import {
  Iw
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  ro,
  zn
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  ry
} from "B:/~BUN/root/chunk-65j2302z.js";
import {
  cr
} from "B:/~BUN/root/chunk-wxhfn3za.js";
import {
  sz
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  VZ
} from "B:/~BUN/root/chunk-dcmvdxnm.js";
import {
  A6o,
  qtr
} from "B:/~BUN/root/chunk-3krf0304.js";
import {
  e3o
} from "B:/~BUN/root/chunk-wgc548g7.js";
import {
  TMi
} from "B:/~BUN/root/chunk-kk81ayzj.js";
import {
  jk
} from "B:/~BUN/root/chunk-zy4xrndc.js";
import {
  Av,
  hLt,
  nse
} from "B:/~BUN/root/chunk-zx0hhrva.js";
import {
  kt
} from "B:/~BUN/root/chunk-86hj8bna.js";
import {
  o,
  hqe
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  Go
} from "B:/~BUN/root/chunk-cf143bsb.js";
import {
  L
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  open as H,
  unlink as S
} from "fs/promises";
import {
  dirname as T,
  join as h
} from "path";
var FWt = 64,
  E = 262144,
  N = new Set(["ELOOP", "ENXIO"]);

function HWt(e) {
  return e.normalize("NFC")
}

function fkt() {
  return LN() === null && ry() && sz(i.CLAUDE_CODE_REMOTE_SESSION_ID, i.CLAUDE_CODE_ENVIRONMENT_KIND)
}

function Uun(e) {
  let t = Tme();
  return t.size > 0 && e.some(({
    fileUuid: r,
    name: s
  }) => {
    let n = t.get(HWt(s));
    return n !== void 0 && n.fileUuid !== r.toLowerCase()
  })
}

function sDo(e) {
  return e.length > 0 && fkt() && (a$r() !== "done" || Uun(e))
}
var g = ".placed-by-name.json";

function A() {
  let e = Av();
  return [e, ...LN() === null ? nse().map((t) => h(t, z())).filter((t) => t !== e) : []].map((t) => h(t, g))
}
async function v(e) {
  if (T(e) === hLt()) {
    await S(h(e, g));
    return
  }
  let t = await R8(e, 0);
  if (typeof t !== "string") try {
    if (await e3e(t) === !0) await S(h(t.at, g))
  } finally {
    await t.release()
  }
}
async function o4n() {
  if (a$r() !== "done") {
    V("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: b("table_unread")
    });
    return
  }
  try {
    let e = await dIe(Av());
    try {
      await zn(h(e.at, g), _([...Tme()]), 384)
    } finally {
      await e.release()
    }
    await Promise.allSettled(A().slice(1).map((t) => v(T(t))))
  } catch (e) {
    V("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: tr(e) ?? b("unknown")
    })
  }
}

function C(e) {
  if (!Array.isArray(e) || e.length !== 2) return !1;
  let [t, r] = e;
  if (typeof t !== "string" || typeof r !== "object" || r === null) return !1;
  let {
    path: s,
    fileUuid: n,
    dev: l,
    ino: c,
    mtimeMs: f,
    size: p,
    sha256: m,
    ambiguous: d
  } = r;
  return typeof s === "string" && typeof n === "string" && [l, c, f, p].every((u) => typeof u === "number" && Number.isFinite(u)) && typeof m === "string" && (d === void 0 || d === !0)
}

function jun() {
  let e = a$r();
  if (e !== void 0) return e === "done" ? Promise.resolve() : e;
  let t = M().then((r) => {
    if (_Oo(r.state === "table_unread" ? void 0 : "done"), r.state !== "table_absent") V("info", "turn_handoff_files_by_name_table", r)
  });
  return _Oo(t), t
}
async function M() {
  let [e, ...t] = A(), r = await P(e);
  if (r.state !== "table_absent") return r;
  for (let s of t) {
    let n = await P(s);
    if (n.state === "table_read") return n
  }
  return r
}
async function P(e) {
  let t;
  try {
    let n = await H(e, Go | ro);
    try {
      let l = await n.stat(),
        c = l.isFile() && l.size <= E ? await Iw(n, E, l.size) : void 0;
      t = c === void 0 || c.overLimit ? void 0 : ee(c.bytes.toString("utf8"))
    } finally {
      await n.close()
    }
  } catch (n) {
    let l = k(n);
    return {
      state: l === "ENOENT" ? "table_absent" : l === void 0 || N.has(l) ? "table_damaged" : "table_unread",
      rows: 0
    }
  }
  if (!Array.isArray(t) || t.length > FWt || !t.every(C)) return {
    state: "table_damaged",
    rows: 0
  };
  let r = Tme(),
    s = [...r];
  r.clear();
  for (let [n, l] of t) {
    let {
      path: c,
      fileUuid: f,
      dev: p,
      ino: m,
      mtimeMs: d,
      size: u,
      sha256: y,
      ambiguous: w
    } = l;
    r.set(n, {
      path: c,
      fileUuid: f.toLowerCase(),
      dev: p,
      ino: m,
      mtimeMs: d,
      size: u,
      sha256: y,
      ...w && {
        ambiguous: w
      },
      fromEarlierProcess: !0
    })
  }
  for (let [n, l] of s) r.delete(n), r.set(n, l);
  for (let n of [...r.keys()].slice(0, Math.max(0, r.size - FWt))) r.delete(n);
  return {
    state: "table_read",
    rows: t.length
  }
}
var D = {
  supported: !0,
  refusedInputFields: qtr,
  decidingInputFields: ["command", "run_in_background", "dangerouslyDisableSandbox"]
};

function I() {
  return import.meta.require("B:/~BUN/root/chunk-939483qt.js").PowerShellTool
}

function iDo(e, t) {
  let r = I(),
    s = A6o({
      edition: t?.powershell?.edition ?? null,
      buildTools: [],
      onWindows: !0,
      backgroundRuns: !1
    }),
    n = x(r.inputSchema, ["run_in_background"]).extend({
      [cr]: o().optional().describe("Optional. Names the attached computer this runs on \u2014 the attached-machines note says which computers serve PowerShell. While exactly one does it may be omitted and the call runs there; when several do, name one. It never runs in this session's own environment, which has no PowerShell. The result says where it ran.")
    }),
    l = Object.defineProperties({}, {
      ...Object.getOwnPropertyDescriptors(r),
      inputSchema: {
        value: n,
        enumerable: !0
      },
      prompt: {
        value: async () => s,
        enumerable: !0
      },
      isEnabled: {
        value: () => !0,
        enumerable: !0
      },
      remoteExecution: {
        value: D,
        enumerable: !0
      },
      suppressesAllPermissionUpdates: {
        value: () => !0,
        enumerable: !0
      },
      call: {
        value: async () => {
          throw new R(`PowerShell runs only on ${e}; the session runs it there and it cannot run here.`, "session-channel PowerShell tool called without being routed to its machine")
        },
        enumerable: !0
      }
    });
  return TMi(l)
}

function C4s(e, t) {
  if (jk()) return 0;
  let r = L(t.filter((n) => n.tool === kt).map((n) => n.host));
  if (r.length === 0) return 0;
  let s;
  try {
    s = r.map((n) => ({
      tool: iDo(n, void 0),
      machine: n
    }))
  } catch (n) {
    return a(F(n)), 0
  }
  return e.presentUntilAnnounced(s, VZ), s.length
}

function x(e, t) {
  if (!(e instanceof hqe)) throw TypeError("PowerShellTool no longer declares an object schema");
  let r = t.filter((n) => (n in e.shape)),
    s = Object.fromEntries(r.map((n) => [n, !0]));
  return r.length === 0 ? e : e.omit(s)
}
var O = 8,
  aDo = 256;

function R4s(e = () => performance.now()) {
  let t = [],
    r = [],
    s = 0,
    n = 0,
    l = !1,
    c = !1,
    f = !1,
    p = De();
  return {
    noteStagedRow(m) {
      if (m.mount_path !== e3o) return !1;
      let d = m.content_sha256,
        u = typeof d === "string" && d.length > 0 && d.length <= aDo ? d : null;
      if (u === null) {
        if (!f) f = !0, V("warn", "home_seed_stage_without_usable_etag", {});
        return !1
      }
      n++;
      let y = {
        etag: u,
        beforeFirstCommand: !l && !c,
        ordinal: n
      };
      t = [...t, y].slice(-O), r = [...r, {
        etag: u,
        ordinal: n,
        heardAtMs: e(),
        turnsAtHoldBefore: s
      }].slice(-O);
      try {
        p.emit(y)
      } catch {
        V("error", "home_seed_announcement_listener_threw", {})
      }
      return !0
    },
    noteStagedRowRead(m) {
      if (m.mount_path !== e3o) return;
      let d = r.find((u) => u.etag === m.content_sha256);
      if (d === void 0) return {
        onRecord: !1
      };
      return r = r.filter((u) => u !== d), {
        onRecord: !0,
        ordinal: d.ordinal,
        behindMs: Math.round(e() - d.heardAtMs),
        turnsAtHoldBefore: d.turnsAtHoldBefore,
        turnAtHoldMeanwhile: s > d.turnsAtHoldBefore
      }
    },
    markTurnAtHold() {
      s++
    },
    markUserFrameDelivered() {
      c = !0
    },
    markFirstCommandDequeued() {
      l = !0
    },
    firstCommandDequeued() {
      return l
    },
    announcements() {
      return t
    },
    announcementCount() {
      return n
    },
    announcementForEtag(m) {
      return t.findLast((d) => d.etag === m)
    },
    announced: {
      subscribe: p.subscribe
    }
  }
}
export {
  FWt,
  HWt,
  fkt,
  Uun,
  sDo,
  o4n,
  jun,
  iDo,
  C4s,
  aDo,
  R4s
};
