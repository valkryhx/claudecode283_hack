// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Me
} from "B:/~BUN/root/chunk-rwkgcmm8.js";
import {
  L,
  K,
  IDe,
  xJn,
  N1r,
  fye
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  b
} from "B:/~BUN/root/chunk-jthpk6wv.js";
import {
  x,
  H,
  k,
  Fr
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  _,
  J
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  a
} from "B:/~BUN/root/chunk-yt0knyw7.js";
import {
  l
} from "B:/~BUN/root/chunk-c09hf5e4.js";
import {
  X
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  P5t,
  $In,
  jRt
} from "B:/~BUN/root/chunk-sg9k8m28.js";
import {
  CH
} from "B:/~BUN/root/chunk-9w4ppz44.js";
import {
  lE
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  An
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  uE
} from "B:/~BUN/root/chunk-gyr2a6wz.js";
import {
  tv
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  xt
} from "B:/~BUN/root/chunk-kad4nq7y.js";
import {
  Zs
} from "B:/~BUN/root/chunk-wegca9zh.js";
import {
  uG
} from "B:/~BUN/root/chunk-dn8rakwm.js";
import {
  Deo,
  pOn
} from "B:/~BUN/root/chunk-6xthqt8b.js";
import {
  mto
} from "B:/~BUN/root/chunk-sn0w05nq.js";
import {
  oTs
} from "B:/~BUN/root/chunk-351qj2sm.js";
import {
  EN,
  IAr,
  Rzn
} from "B:/~BUN/root/chunk-ma5pke8s.js";
import {
  Ur
} from "B:/~BUN/root/chunk-hdc8p5sh.js";
import {
  o,
  U0e
} from "B:/~BUN/root/chunk-g3snhg6n.js";
import {
  Us
} from "B:/~BUN/root/chunk-t7350kw8.js";
import {
  open as R,
  unlink as S
} from "fs/promises";
import {
  dirname as T,
  join as h
} from "path";
var USt = 64,
  E = 262144,
  N = new Set(["ELOOP", "ENXIO"]);

function BSt(e) {
  return e.normalize("NFC")
}

function IWt() {
  return fye() === null && uE() && CH(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)
}

function MWt(e) {
  let t = IDe();
  return t.size > 0 && e.some(({
    fileUuid: r,
    name: s
  }) => {
    let n = t.get(BSt(s));
    return n !== void 0 && n.fileUuid !== r.toLowerCase()
  })
}

function uzr(e) {
  return e.length > 0 && IWt() && (xJn() !== "done" || MWt(e))
}
var g = ".placed-by-name.json";

function A() {
  let e = EN();
  return [e, ...fye() === null ? Rzn().map((t) => h(t, K())).filter((t) => t !== e) : []].map((t) => h(t, g))
}
async function v(e) {
  if (T(e) === IAr()) {
    await S(h(e, g));
    return
  }
  let t = await P5t(e, 0);
  if (typeof t !== "string") try {
    if (await $In(t) === !0) await S(h(t.at, g))
  } finally {
    await t.release()
  }
}
async function oyn() {
  if (xJn() !== "done") {
    X("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: b("table_unread")
    });
    return
  }
  try {
    let e = await jRt(EN());
    try {
      await An(h(e.at, g), _([...IDe()]), 384)
    } finally {
      await e.release()
    }
    await Promise.allSettled(A().slice(1).map((t) => v(T(t))))
  } catch (e) {
    X("warn", "turn_handoff_files_by_name_table", {
      state: "not_stored",
      error_code: Fr(e) ?? b("unknown")
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
    dev: i,
    ino: c,
    mtimeMs: f,
    size: p,
    sha256: m,
    ambiguous: d
  } = r;
  return typeof s === "string" && typeof n === "string" && [i, c, f, p].every((u) => typeof u === "number" && Number.isFinite(u)) && typeof m === "string" && (d === void 0 || d === !0)
}

function syn() {
  let e = xJn();
  if (e !== void 0) return e === "done" ? Promise.resolve() : e;
  let t = F().then((r) => {
    if (N1r(r.state === "table_unread" ? void 0 : "done"), r.state !== "table_absent") X("info", "turn_handoff_files_by_name_table", r)
  });
  return N1r(t), t
}
async function F() {
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
    let n = await R(e, Us | Zs);
    try {
      let i = await n.stat(),
        c = i.isFile() && i.size <= E ? await lE(n, E, i.size) : void 0;
      t = c === void 0 || c.overLimit ? void 0 : J(c.bytes.toString("utf8"))
    } finally {
      await n.close()
    }
  } catch (n) {
    let i = k(n);
    return {
      state: i === "ENOENT" ? "table_absent" : i === void 0 || N.has(i) ? "table_damaged" : "table_unread",
      rows: 0
    }
  }
  if (!Array.isArray(t) || t.length > USt || !t.every(C)) return {
    state: "table_damaged",
    rows: 0
  };
  let r = IDe(),
    s = [...r];
  r.clear();
  for (let [n, i] of t) {
    let {
      path: c,
      fileUuid: f,
      dev: p,
      ino: m,
      mtimeMs: d,
      size: u,
      sha256: y,
      ambiguous: w
    } = i;
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
  for (let [n, i] of s) r.delete(n), r.set(n, i);
  for (let n of [...r.keys()].slice(0, Math.max(0, r.size - USt))) r.delete(n);
  return {
    state: "table_read",
    rows: t.length
  }
}
var M = {
  supported: !0,
  refusedInputFields: pOn,
  decidingInputFields: ["command", "run_in_background", "dangerouslyDisableSandbox"]
};

function D() {
  return import.meta.require("B:/~BUN/root/chunk-h2p5pgvh.js").PowerShellTool
}

function pzr(e, t) {
  let r = D(),
    s = Deo({
      edition: t?.powershell?.edition ?? null,
      buildTools: [],
      onWindows: !0,
      backgroundRuns: !1
    }),
    n = I(r.inputSchema, ["run_in_background"]).extend({
      [Ur]: o().optional().describe("Optional. Names the attached computer this runs on \u2014 the attached-machines note says which computers serve PowerShell. While exactly one does it may be omitted and the call runs there; when several do, name one. It never runs in this session's own environment, which has no PowerShell. The result says where it ran.")
    }),
    i = Object.defineProperties({}, {
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
        value: M,
        enumerable: !0
      },
      suppressesAllPermissionUpdates: {
        value: () => !0,
        enumerable: !0
      },
      call: {
        value: async () => {
          throw new x(`PowerShell runs only on ${e}; the session runs it there and it cannot run here.`, "session-channel PowerShell tool called without being routed to its machine")
        },
        enumerable: !0
      }
    });
  return oTs(i)
}

function IKo(e, t) {
  if (tv()) return 0;
  let r = L(t.filter((n) => n.tool === xt).map((n) => n.host));
  if (r.length === 0) return 0;
  let s;
  try {
    s = r.map((n) => ({
      tool: pzr(n, void 0),
      machine: n
    }))
  } catch (n) {
    return l(H(n)), 0
  }
  return e.presentUntilAnnounced(s, uG), s.length
}

function I(e, t) {
  if (!(e instanceof U0e)) throw TypeError("PowerShellTool no longer declares an object schema");
  let r = t.filter((n) => (n in e.shape)),
    s = Object.fromEntries(r.map((n) => [n, !0]));
  return r.length === 0 ? e : e.omit(s)
}
var O = 8,
  fzr = 256;

function MKo(e = () => performance.now()) {
  let t = [],
    r = [],
    s = 0,
    n = 0,
    i = !1,
    c = !1,
    f = !1,
    p = Me();
  return {
    noteStagedRow(m) {
      if (m.mount_path !== mto) return !1;
      let d = m.content_sha256,
        u = typeof d === "string" && d.length > 0 && d.length <= fzr ? d : null;
      if (u === null) {
        if (!f) f = !0, X("warn", "home_seed_stage_without_usable_etag", {});
        return !1
      }
      n++;
      let y = {
        etag: u,
        beforeFirstCommand: !i && !c,
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
        X("error", "home_seed_announcement_listener_threw", {})
      }
      return !0
    },
    noteStagedRowRead(m) {
      if (m.mount_path !== mto) return;
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
      i = !0
    },
    firstCommandDequeued() {
      return i
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
  USt,
  BSt,
  IWt,
  MWt,
  uzr,
  oyn,
  syn,
  pzr,
  IKo,
  fzr,
  MKo
};
