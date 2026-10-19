// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  d
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  i
} from "B:/~BUN/root/chunk-1kfn24jp.js";
import {
  _,
  J,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Sbt
} from "B:/~BUN/root/chunk-yrjpmz6e.js";
import {
  O_t,
  Q8n
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Ne
} from "B:/~BUN/root/chunk-nvdqbkrt.js";
import {
  Y8,
  k0n,
  Uio,
  Uus,
  Bus,
  Amr,
  Wus,
  zus,
  _6e,
  rH,
  nd,
  PFn,
  Epe,
  PZ,
  Tpe,
  Ys,
  My,
  E6e
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  g_n,
  h_n
} from "B:/~BUN/root/chunk-yacpdvqs.js";
import {
  readFile as P
} from "fs/promises";
import {
  join as h
} from "path";
async function M() {
  try {
    let a = await P(Uio(), "utf-8"),
      e = O_t().safeParse(J(a));
    if (!e.success) return t(`Invalid known_marketplaces.json in zip cache: ${e.error.message}`, {
      level: "error"
    }), {};
    return e.data
  } catch {
    return {}
  }
}
async function S(a) {
  await Amr(Uio(), _(a, null, 2))
}
async function F(a, e) {
  let l = k0n();
  if (!l) return;
  let r = await I(e);
  if (r !== null) {
    let o = Wus(a);
    await Amr(h(l, o), r)
  }
}
async function I(a) {
  let e = [h(a, ".claude-plugin", "marketplace.json"), h(a, "marketplace.json"), a];
  for (let l of e) try {
    return await P(l, "utf-8")
  } catch {}
  return null
}
async function w(a) {
  let e = await nd(a),
    l = Object.entries(Q8n(e)).filter(([s, c]) => Epe(s, c) === null && !PZ(s, c));
  for (let [s, c] of l) {
    if (!c.installLocation) continue;
    try {
      await F(s, c.installLocation)
    } catch (f) {
      t(`Failed to save marketplace JSON for ${s}: ${f}`)
    }
  }
  let o = {
    ...await M(),
    ...Object.fromEntries(l)
  };
  await S(o)
}

function Pet(a, e, l) {
  let r = Ne(),
    o = (r.headlessInstallPass ?? Promise.resolve()).then(() => v(a, e, l));
  return r.headlessInstallPass = o.then(() => {
    return
  }, () => {
    return
  }), o
}
async function v(a, e, l) {
  let r = Y8();
  t(`installPluginsForHeadless: starting${r?" (zip cache mode)":""}`);
  let o = await PFn(),
    s, c = () => s !== void 0 && Ne().pluginLoadCacheOnly === s;
  if (o) _6e(), My("headlessPluginInstall: seed marketplaces registered"), s = E6e(e, "headlessPluginInstall");
  if (r) await se().mkdir(Uus()), await se().mkdir(Bus());
  let f = Object.keys(rH()).length,
    g = {
      marketplaces_installed: 0,
      delisted_count: 0
    },
    p = o;
  try {
    if (f === 0) t("installPluginsForHeadless: no marketplaces declared");
    else {
      let u = await Sbt("headless_marketplace_reconcile", () => g_n({
        skip: r ? (n, C) => !zus(C) : void 0,
        onProgress: (n) => {
          if (n.type === "installed") a?.({
            status: "installed",
            name: n.name
          }), t(`installPluginsForHeadless: installed marketplace ${n.name}`);
          else if (n.type === "failed") a?.({
            status: "failed",
            name: n.name,
            error: n.error
          }), t(`installPluginsForHeadless: failed to install marketplace ${n.name}: ${n.error}`)
        },
        storageV5: e
      }), (n) => ({
        installed_count: n.installed.length,
        updated_count: n.updated.length,
        failed_count: n.failed.length,
        skipped_count: n.skipped.length
      }));
      if (u.skipped.length > 0) t(`installPluginsForHeadless: skipped ${u.skipped.length} marketplace(s) unsupported by zip cache: ${u.skipped.join(", ")}`);
      let k = u.installed.length + u.updated.length;
      if (k > 0) _6e(), My("headlessPluginInstall: marketplaces reconciled"), s = E6e(e, "headlessPluginInstall"), p = !0;
      g.marketplaces_installed = k
    }
    if (r) s = void 0, await w(e);
    let m = await h_n(e);
    if (g.delisted_count = m.length, m.length > 0) p = !0, s = void 0;
    if (p && !c()) My("headlessPluginInstall: plugins changed"), E6e(e, "headlessPluginInstall");
    return y(e, l), p
  } catch (m) {
    if (t(`installPluginsForHeadless: failed: ${d(m)}`, {
        level: "error"
      }), p && !c()) {
      if (W() && e !== void 0) My("headlessPluginInstall: pass failed after a change");
      E6e(e, "headlessPluginInstall")
    }
    return y(e, l), !1
  } finally {
    i("tengu_headless_plugin_install", g)
  }
}

function y(a, e) {
  if (Tpe(e)) Ys(a, e).catch(() => {})
}
export {
  Pet
};
