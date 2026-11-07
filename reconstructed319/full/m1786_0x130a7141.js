// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  F,
  k,
  K
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  C0
} from "B:/~BUN/root/chunk-h4acfc9y.js";
import {
  W
} from "B:/~BUN/root/chunk-ppmmt0c3.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  Q
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  x
} from "B:/~BUN/root/chunk-mwfggkjt.js";
import {
  mt
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  Kt,
  hf
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  lHs,
  Pw
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  g,
  m
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  gs
} from "B:/~BUN/root/chunk-fkr27nhj.js";
import {
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  oe,
  C,
  u,
  Be
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  s4e
} from "B:/~BUN/root/chunk-12nc74pv.js";
import {
  constants as E
} from "fs";
import {
  open as M,
  realpath as G
} from "fs/promises";
import {
  isAbsolute as U
} from "path";
var i2o = "org-tip:",
  Oqr = "custom-tip-",
  I = 500,
  j = 200,
  S = 262144,
  w = "Tip",
  B = /^[A-Za-z0-9._-]{1,64}$/,
  H = 40,
  P = ["policySettings", "flagSettings", "userSettings"],
  X = [...hf],
  Y = "org-tip:file:",
  J = new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]),
  Z = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;

function N(e) {
  return s4e(e).replace(/[\t\n\r\u2028\u2029]+/g, " ").replace(Z, "").replace(/ {2,}/g, " ").trim()
}

function q(e) {
  if (e === void 0) return w;
  let i = Q(N(e), H);
  return i === "" ? w : i
}
var V = p(() => Be([C(oe()), u({
  tips: C(oe())
}).transform((e) => e.tips)]));
async function te(e) {
  try {
    let i = x() === "windows" ? 0 : E.O_NOFOLLOW | E.O_NONBLOCK,
      r = await M(await G(e), E.O_RDONLY | i),
      n;
    try {
      let f = await r.stat();
      if (!f.isFile()) return m("tips_org_tips_file_load", "not_regular_file"), t(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      if (f.size > S) return m("tips_org_tips_file_load", "too_large"), t(`spinnerTipsOverride.tipsFile ${e} is larger than ${S} bytes; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      let c = Buffer.alloc(S + 1),
        {
          bytesRead: _
        } = await r.read(c, 0, c.length, 0);
      if (_ > S) return m("tips_org_tips_file_load", "too_large"), {
        entries: [],
        transient: !1
      };
      n = gs(c.toString("utf8", 0, _))
    } finally {
      await r.close()
    }
    let l = V().safeParse(ee(n)),
      d = l.success ? lHs().parse(l.data) : void 0;
    if (d === void 0) return m("tips_org_tips_file_load", "wrong_shape"), t(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, {
      level: "warn"
    }), {
      entries: [],
      transient: !1
    };
    return g("tips_org_tips_file_load"), {
      entries: d,
      transient: !1
    }
  } catch (i) {
    let r = k(i),
      n = K(i) ? "not_found" : r === "ELOOP" || r === "EISDIR" ? "not_regular_file" : i instanceof SyntaxError ? "parse_failed" : "read_failed";
    return m("tips_org_tips_file_load", n), t(K(i) ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded` : `spinnerTipsOverride.tipsFile ${e} could not be read: ${F(i).message}`, {
      level: "warn"
    }), {
      entries: [],
      transient: r !== void 0 && J.has(r)
    }
  }
}
class L {
  #e = new Map;
  get size() {
    return this.#e.size
  }
  read(e) {
    let i = this.#e.get(e);
    if (i) return i;
    let r = te(e).then((n) => {
      if (n.transient) this.#e.delete(e);
      return n
    });
    return this.#e.set(e, r), r
  }
}
var ie = new W(() => new L);

function re() {
  if (Pw()?.spinnerTipsOverride?.tipsFile) return t("spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json", {
    level: "warn"
  }), !0;
  return !1
}

function ne(e) {
  if (!e) return;
  if (!U(e) && e !== "~" && !e.startsWith("~/")) {
    t(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, {
      level: "warn"
    });
    return
  }
  if (C0(e)) {
    t("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", {
      level: "warn"
    });
    return
  }
  try {
    let i = mt(e);
    return C0(i) ? void 0 : i
  } catch (i) {
    t(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${F(i).message}`, {
      level: "warn"
    });
    return
  }
}

function R(e) {
  let i = [];
  for (let r of e) {
    if (!Kt(r)) continue;
    let n = be(r)?.spinnerTipsOverride;
    if (n) i.push({
      source: r,
      override: n
    })
  }
  return i
}

function A(e, i) {
  return e.find((r) => r.override[i] !== void 0)?.override[i]
}

function SOe() {
  let e = R(P);
  if (A(e, "excludeDefault") !== !0) return !1;
  return e.some((i) => !!i.override.tipsFile) || e.some((i) => (i.override.tips?.length ?? 0) > 0)
}
async function A7n(e) {
  let i = R(P),
    r = R(X);
  if (i.length === 0 && r.length === 0) return {
    tips: [],
    trustedCount: 0
  };
  let n = q(A(i, "label")),
    l = i.find((s) => !!s.override.tipsFile),
    d = l?.source,
    f = ne(d === "policySettings" && re() ? void 0 : l?.override.tipsFile);
  for (let {
      source: s,
      override: o
    }
    of r)
    if (o.tipsFile || o.label !== void 0) t(`spinnerTipsOverride.tipsFile/label in ${s} are ignored; set them in user or managed settings`, {
      level: "warn"
    });
  let c = f ? (await ie.of(e).read(f)).entries : [],
    _ = new Set,
    O = [],
    v = (s, o, a, T, D) => {
      if (O.length >= j) return;
      let h = N(o);
      if (h === "") {
        t(`spinnerTipsOverride: tip "${s}" is empty after sanitizing; dropped`, {
          level: "warn"
        });
        return
      }
      if (h.length > I) {
        t(`spinnerTipsOverride: tip "${s}" is longer than ${I} characters; dropped`, {
          level: "warn"
        });
        return
      }
      if (_.has(s)) {
        t(`spinnerTipsOverride: duplicate tip id "${s}"; keeping the first`, {
          level: "warn"
        });
        return
      }
      _.add(s), O.push({
        id: s,
        label: D,
        content: async () => h,
        cooldownSessions: a,
        priority: T,
        isRelevant: async () => !0,
        providerAgnostic: !0
      })
    },
    b = 0;
  for (let {
      source: s,
      override: o
    }
    of i) {
    for (let a of o.tips ?? []) y(a, `${Oqr}${b++}`, n, v);
    if (s === d) c.forEach((a, T) => y(a, `${Y}${T}`, n, v))
  }
  let z = O.length;
  for (let {
      source: s,
      override: o
    }
    of r)
    for (let a of o.tips ?? []) {
      let T = `${Oqr}${b++}`;
      if (typeof a === "string") y(a, T, w, v);
      else t(`spinnerTipsOverride: object tip entries in ${s} are ignored; only plain strings are read from project settings`, {
        level: "warn"
      })
    }
  return {
    tips: O,
    trustedCount: z
  }
}

function y(e, i, r, n) {
  if (typeof e === "string") {
    n(i, e, 0, 0, r);
    return
  }
  if (typeof e.text !== "string") {
    t('spinnerTipsOverride: tip object without a "text" string; dropped', {
      level: "warn"
    });
    return
  }
  if (typeof e.id !== "string" || !B.test(e.id)) {
    t('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', {
      level: "warn"
    });
    return
  }
  let l = typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0 ? Math.min(e.cooldownSessions, 1000) : 0,
    d = typeof e.priority === "number" && Number.isFinite(e.priority) ? Math.max(-10, Math.min(10, Math.trunc(e.priority))) : 0;
  n(`${i2o}${e.id}`, e.text, l, d, r)
}
export {
  i2o,
  Oqr,
  SOe,
  A7n
};
