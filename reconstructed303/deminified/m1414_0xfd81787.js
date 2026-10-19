// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { H, k, G } from "B:/~BUN/root/chunk-3aez4b53.js";
import { z, hP } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { J, kDe, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ne } from "B:/~BUN/root/chunk-nggrknsv.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import { I } from "B:/~BUN/root/chunk-je1b1drr.js";
import { it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { nn, ef } from "B:/~BUN/root/chunk-6a9s3k2y.js";
import { eUo, N_ } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { g, m } from "B:/~BUN/root/chunk-kzgf20y6.js";
import { Bo } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { me } from "B:/~BUN/root/chunk-1gpjpba6.js";
import { oe, T, u, $e } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { constants as F } from "fs";
import { open as M, realpath as U } from "fs/promises";
import { isAbsolute as j } from "path";
var H8r = "org-tip:",
  mir = "custom-tip-",
  x = 500,
  B = 200,
  v = 262144,
  w = "Tip",
  X = /^[A-Za-z0-9._-]{1,64}$/,
  K = 40,
  P = ["policySettings", "flagSettings", "userSettings"],
  Y = [...ef],
  W = "org-tip:file:",
  Z = new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]),
  q = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function N(e) {
  return kDe(e).replace(/[\t\n\r\u2028\u2029]+/g, " ").replace(q, "").replace(/ {2,}/g, " ").trim();
}
function Q(e) {
  if (e === void 0) return w;
  let i = ne(N(e), K);
  return i === "" ? w : i;
}
var V = f(() => $e([T(oe()), u({
  tips: T(oe())
}).transform(e => e.tips)]));
async function ee(e) {
  try {
    let i = I() === "windows" ? 0 : F.O_NOFOLLOW | F.O_NONBLOCK,
      r = await M(await U(e), F.O_RDONLY | i),
      n;
    try {
      let d = await r.stat();
      if (!d.isFile()) return m("tips_org_tips_file_load", "not_regular_file"), t(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      if (d.size > v) return m("tips_org_tips_file_load", "too_large"), t(`spinnerTipsOverride.tipsFile ${e} is larger than ${v} bytes; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      let c = Buffer.alloc(v + 1),
        {
          bytesRead: bytesRead
        } = await r.read(c, 0, c.length, 0);
      if (bytesRead > v) return m("tips_org_tips_file_load", "too_large"), {
        entries: [],
        transient: !1
      };
      n = Bo(c.toString("utf8", 0, bytesRead));
    } finally {
      await r.close();
    }
    let a = V().safeParse(J(n)),
      entries = a.success ? eUo().parse(a.data) : void 0;
    if (entries === void 0) return m("tips_org_tips_file_load", "wrong_shape"), t(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, {
      level: "warn"
    }), {
      entries: [],
      transient: !1
    };
    return g("tips_org_tips_file_load"), {
      entries: entries,
      transient: !1
    };
  } catch (error) {
    let r = k(error),
      n = G(error) ? "not_found" : r === "ELOOP" || r === "EISDIR" ? "not_regular_file" : error instanceof SyntaxError ? "parse_failed" : "read_failed";
    return m("tips_org_tips_file_load", n), t(G(error) ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded` : `spinnerTipsOverride.tipsFile ${e} could not be read: ${H(error).message}`, {
      level: "warn"
    }), {
      entries: [],
      transient: r !== void 0 && Z.has(r)
    };
  }
}
class L {
  #e = new Map();
  get size() {
    return this.#e.size;
  }
  read(e) {
    let i = this.#e.get(e);
    if (i) return i;
    let r = ee(e).then(n => {
      if (n.transient) this.#e.delete(e);
      return n;
    });
    return this.#e.set(e, r), r;
  }
}
var te = new z(() => new L());
function ie() {
  if (N_()?.spinnerTipsOverride?.tipsFile) return t("spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json", {
    level: "warn"
  }), !0;
  return !1;
}
function re(e) {
  if (!e) return;
  if (!j(e) && e !== "~" && !e.startsWith("~/")) {
    t(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, {
      level: "warn"
    });
    return;
  }
  if (hP(e)) {
    t("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", {
      level: "warn"
    });
    return;
  }
  try {
    let i = it(e);
    return hP(i) ? void 0 : i;
  } catch (error) {
    t(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${H(error).message}`, {
      level: "warn"
    });
    return;
  }
}
function R(e) {
  let i = [];
  for (let source of e) {
    if (!nn(source)) continue;
    let override = me(source)?.spinnerTipsOverride;
    if (override) i.push({
      source: source,
      override: override
    });
  }
  return i;
}
function A(e, i) {
  return e.find(item => item.override[i] !== void 0)?.override[i];
}
function SRe() {
  let e = R(P);
  if (A(e, "excludeDefault") !== !0) return !1;
  return e.some(item => !!item.override.tipsFile) || e.some(item => (item.override.tips?.length ?? 0) > 0);
}
async function ZEn(e) {
  let i = R(P),
    r = R(Y);
  if (i.length === 0 && r.length === 0) return {
    tips: [],
    trustedCount: 0
  };
  let n = Q(A(i, "label")),
    a = i.find(item => !!item.override.tipsFile),
    l = a?.source,
    d = re(l === "policySettings" && ie() ? void 0 : a?.override.tipsFile);
  for (let {
    source: source_2,
    override: override_2
  } of r) if (override_2.tipsFile || override_2.label !== void 0) t(`spinnerTipsOverride.tipsFile/label in ${source_2} are ignored; set them in user or managed settings`, {
    level: "warn"
  });
  let c = d ? (await te.of(e).read(d)).entries : [],
    _ = new Set(),
    tips = [],
    h = (id, o, cooldownSessions, priority, label) => {
      if (tips.length >= B) return;
      let E = N(o);
      if (E === "") {
        t(`spinnerTipsOverride: tip "${id}" is empty after sanitizing; dropped`, {
          level: "warn"
        });
        return;
      }
      if (E.length > x) {
        t(`spinnerTipsOverride: tip "${id}" is longer than ${x} characters; dropped`, {
          level: "warn"
        });
        return;
      }
      if (_.has(id)) {
        t(`spinnerTipsOverride: duplicate tip id "${id}"; keeping the first`, {
          level: "warn"
        });
        return;
      }
      _.add(id), tips.push({
        id: id,
        label: label,
        content: async () => E,
        cooldownSessions: cooldownSessions,
        priority: priority,
        isRelevant: async () => !0,
        providerAgnostic: !0
      });
    },
    b = 0;
  for (let {
    source: source_3,
    override: override_3
  } of i) {
    for (let p of override_3.tips ?? []) y(p, `${mir}${b++}`, n, h);
    if (source_3 === l) c.forEach((item, index) => y(item, `${W}${index}`, n, h));
  }
  let trustedCount = tips.length;
  for (let {
    source: source_4,
    override: override_4
  } of r) for (let p of override_4.tips ?? []) {
    let O = `${mir}${b++}`;
    if (typeof p === "string") y(p, O, w, h);else t(`spinnerTipsOverride: object tip entries in ${source_4} are ignored; only plain strings are read from project settings`, {
      level: "warn"
    });
  }
  return {
    tips: tips,
    trustedCount: trustedCount
  };
}
function y(e, i, r, n) {
  if (typeof e === "string") {
    n(i, e, 0, 0, r);
    return;
  }
  if (typeof e.text !== "string") {
    t('spinnerTipsOverride: tip object without a "text" string; dropped', {
      level: "warn"
    });
    return;
  }
  if (typeof e.id !== "string" || !X.test(e.id)) {
    t('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', {
      level: "warn"
    });
    return;
  }
  let a = typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0 ? Math.min(e.cooldownSessions, 1000) : 0,
    l = typeof e.priority === "number" && Number.isFinite(e.priority) ? Math.max(-10, Math.min(10, Math.trunc(e.priority))) : 0;
  n(`${H8r}${e.id}`, e.text, a, l, r);
}
export { H8r, mir, SRe, ZEn };