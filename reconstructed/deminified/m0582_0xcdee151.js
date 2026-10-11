// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { q } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { te, v, B } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { B2 } from "B:/~BUN/root/chunk-54p0h65d.js";
import { J, t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { re } from "B:/~BUN/root/chunk-y04k89s2.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { O } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { ar, _b } from "B:/~BUN/root/chunk-290k5gh5.js";
import { P1r, JE } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { wt } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { Jo } from "B:/~BUN/root/chunk-tsjnk8ma.js";
import { he } from "B:/~BUN/root/chunk-3rzkfay5.js";
import { ae, C, u, $e } from "B:/~BUN/root/chunk-n8qdr73v.js";
import { constants as y } from "fs";
import { open as M, realpath as G } from "fs/promises";
import { isAbsolute as U } from "path";
var cer = "org-tip:",
  evn = "custom-tip-",
  x = 500,
  j = 200,
  h = 262144,
  R = "Tip",
  k = /^[A-Za-z0-9._-]{1,64}$/,
  H = 40,
  P = ["policySettings", "flagSettings", "userSettings"],
  X = [..._b],
  K = "org-tip:file:",
  Y = new Set(["EAGAIN", "EBUSY", "EINTR", "EIO", "EMFILE", "ENFILE"]),
  W = /[\p{Cc}\p{Cf}\u2028\u2029\u180e\ufe00-\ufe0f\u{e0100}-\u{e01ef}]/gu;
function N(e) {
  return wt(e).replace(/[\t\n\r\u2028\u2029]+/g, " ").replace(W, "").replace(/ {2,}/g, " ").trim();
}
function Z(e) {
  if (e === void 0) return R;
  let i = re(N(e), H);
  return i === "" ? R : i;
}
var Q = f(() => $e([C(ae()), u({
  tips: C(ae())
}).transform(e => e.tips)]));
async function V(e) {
  try {
    let i = O() === "windows" ? 0 : y.O_NOFOLLOW | y.O_NONBLOCK,
      r = await M(await G(e), y.O_RDONLY | i),
      n;
    try {
      let d = await r.stat();
      if (!d.isFile()) return m("tips_org_tips_file_load", "not_regular_file"), t(`spinnerTipsOverride.tipsFile ${e} is not a regular file; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      if (d.size > h) return m("tips_org_tips_file_load", "too_large"), t(`spinnerTipsOverride.tipsFile ${e} is larger than ${h} bytes; ignoring it`, {
        level: "warn"
      }), {
        entries: [],
        transient: !1
      };
      let c = Buffer.alloc(h + 1),
        {
          bytesRead: bytesRead
        } = await r.read(c, 0, c.length, 0);
      if (bytesRead > h) return m("tips_org_tips_file_load", "too_large"), {
        entries: [],
        transient: !1
      };
      n = Jo(c.toString("utf8", 0, bytesRead));
    } finally {
      await r.close();
    }
    let a = Q().safeParse(J(n)),
      entries = a.success ? P1r().parse(a.data) : void 0;
    if (entries === void 0) return m("tips_org_tips_file_load", "wrong_shape"), t(`spinnerTipsOverride.tipsFile ${e} must be a JSON array of tips (or {"tips": [...]}); ignoring it`, {
      level: "warn"
    }), {
      entries: [],
      transient: !1
    };
    return _("tips_org_tips_file_load"), {
      entries: entries,
      transient: !1
    };
  } catch (error) {
    let r = v(error),
      n = B(error) ? "not_found" : r === "ELOOP" || r === "EISDIR" ? "not_regular_file" : error instanceof SyntaxError ? "parse_failed" : "read_failed";
    return m("tips_org_tips_file_load", n), t(B(error) ? `spinnerTipsOverride.tipsFile ${e} does not exist; no file tips loaded` : `spinnerTipsOverride.tipsFile ${e} could not be read: ${te(error).message}`, {
      level: "warn"
    }), {
      entries: [],
      transient: r !== void 0 && Y.has(r)
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
    let r = V(e).then(n => {
      if (n.transient) this.#e.delete(e);
      return n;
    });
    return this.#e.set(e, r), r;
  }
}
var ee = new q(() => new L());
function ie() {
  if (JE()?.spinnerTipsOverride?.tipsFile) return t("spinnerTipsOverride.tipsFile from remote managed settings is ignored; ship inline tips or install the file path via managed-settings.json", {
    level: "warn"
  }), !0;
  return !1;
}
function ne(e) {
  if (!e) return;
  if (!U(e) && e !== "~" && !e.startsWith("~/")) {
    t(`spinnerTipsOverride.tipsFile must be an absolute or ~/ path (got "${e}"); ignoring it`, {
      level: "warn"
    });
    return;
  }
  if (B2(e)) {
    t("spinnerTipsOverride.tipsFile must be a local path, not a network (UNC) path; ignoring it", {
      level: "warn"
    });
    return;
  }
  try {
    let i = Ye(e);
    return B2(i) ? void 0 : i;
  } catch (error) {
    t(`spinnerTipsOverride.tipsFile "${e}" is not a usable path: ${te(error).message}`, {
      level: "warn"
    });
    return;
  }
}
function b(e) {
  let i = [];
  for (let source of e) {
    if (!ar(source)) continue;
    let override = he(source)?.spinnerTipsOverride;
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
function Tue() {
  let e = b(P);
  if (A(e, "excludeDefault") !== !0) return !1;
  return e.some(item => !!item.override.tipsFile) || e.some(item => (item.override.tips?.length ?? 0) > 0);
}
async function xGt(e) {
  let i = b(P),
    r = b(X);
  if (i.length === 0 && r.length === 0) return {
    tips: [],
    trustedCount: 0
  };
  let n = Z(A(i, "label")),
    a = i.find(item => !!item.override.tipsFile),
    l = a?.source,
    d = ne(l === "policySettings" && ie() ? void 0 : a?.override.tipsFile);
  for (let {
    source: source_2,
    override: override_2
  } of r) if (override_2.tipsFile || override_2.label !== void 0) t(`spinnerTipsOverride.tipsFile/label in ${source_2} are ignored; set them in user or managed settings`, {
    level: "warn"
  });
  let c = d ? (await ee.of(e).read(d)).entries : [],
    g = new Set(),
    tips = [],
    E = (id, o, cooldownSessions, priority, label) => {
      if (tips.length >= j) return;
      let F = N(o);
      if (F === "") {
        t(`spinnerTipsOverride: tip "${id}" is empty after sanitizing; dropped`, {
          level: "warn"
        });
        return;
      }
      if (F.length > x) {
        t(`spinnerTipsOverride: tip "${id}" is longer than ${x} characters; dropped`, {
          level: "warn"
        });
        return;
      }
      if (g.has(id)) {
        t(`spinnerTipsOverride: duplicate tip id "${id}"; keeping the first`, {
          level: "warn"
        });
        return;
      }
      g.add(id), tips.push({
        id: id,
        label: label,
        content: async () => F,
        cooldownSessions: cooldownSessions,
        priority: priority,
        isRelevant: async () => !0,
        providerAgnostic: !0
      });
    },
    I = 0;
  for (let {
    source: source_3,
    override: override_3
  } of i) {
    for (let p of override_3.tips ?? []) w(p, `${evn}${I++}`, n, E);
    if (source_3 === l) c.forEach((item, index) => w(item, `${K}${index}`, n, E));
  }
  let trustedCount = tips.length;
  for (let {
    source: source_4,
    override: override_4
  } of r) for (let p of override_4.tips ?? []) {
    let T = `${evn}${I++}`;
    if (typeof p === "string") w(p, T, R, E);else t(`spinnerTipsOverride: object tip entries in ${source_4} are ignored; only plain strings are read from project settings`, {
      level: "warn"
    });
  }
  return {
    tips: tips,
    trustedCount: trustedCount
  };
}
function w(e, i, r, n) {
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
  if (typeof e.id !== "string" || !k.test(e.id)) {
    t('spinnerTipsOverride: tip object needs an "id" of 1-64 letters, digits, ".", "_" or "-"; dropped', {
      level: "warn"
    });
    return;
  }
  let a = typeof e.cooldownSessions === "number" && Number.isInteger(e.cooldownSessions) && e.cooldownSessions >= 0 ? Math.min(e.cooldownSessions, 1000) : 0,
    l = typeof e.priority === "number" && Number.isFinite(e.priority) ? Math.max(-10, Math.min(10, Math.trunc(e.priority))) : 0;
  n(`${cer}${e.id}`, e.text, a, l, r);
}
export { cer, evn, Tue, xGt };