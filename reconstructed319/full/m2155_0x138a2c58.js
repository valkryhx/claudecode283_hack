// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  d
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  t,
  _,
  ee,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  J1t
} from "B:/~BUN/root/chunk-f9dwrymq.js";
import {
  qBt,
  WLr
} from "B:/~BUN/root/chunk-3xdsa4p8.js";
import {
  Ae
} from "B:/~BUN/root/chunk-eds8xkh8.js";
import {
  _re,
  llr,
  PQo,
  ngi,
  rgi,
  e7r,
  sgi,
  igi,
  vct,
  mW,
  Nc,
  epr,
  xEe,
  Hde,
  OEe,
  ki,
  xS,
  xct
} from "B:/~BUN/root/chunk-27h4st9h.js";
import {
  mYn,
  hYn
} from "B:/~BUN/root/chunk-6zbax2rj.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  readFile as P
} from "fs/promises";
import {
  join as h
} from "path";
async function M() {
  try {
    let a = await P(PQo(), "utf-8"),
      e = qBt().safeParse(ee(a));
    if (!e.success) return t(`Invalid known_marketplaces.json in zip cache: ${e.error.message}`, {
      level: "error"
    }), {};
    return e.data
  } catch {
    return {}
  }
}
async function S(a) {
  await e7r(PQo(), _(a, null, 2))
}
async function F(a, e) {
  let s = llr();
  if (!s) return;
  let r = await I(e);
  if (r !== null) {
    let o = sgi(a);
    await e7r(h(s, o), r)
  }
}
async function I(a) {
  let e = [h(a, ".claude-plugin", "marketplace.json"), h(a, "marketplace.json"), a];
  for (let s of e) try {
    return await P(s, "utf-8")
  } catch {}
  return null
}
async function w(a) {
  let e = await Nc(a),
    s = Object.entries(WLr(e)).filter(([i, c]) => xEe(i, c) === null && !Hde(i, c));
  for (let [i, c] of s) {
    if (!c.installLocation) continue;
    try {
      await F(i, c.installLocation)
    } catch (f) {
      t(`Failed to save marketplace JSON for ${i}: ${f}`)
    }
  }
  let o = {
    ...await M(),
    ...Object.fromEntries(s)
  };
  await S(o)
}

function ckt(a, e, s) {
  let r = Ae(),
    o = (r.headlessInstallPass ?? Promise.resolve()).then(() => v(a, e, s));
  return r.headlessInstallPass = o.then(() => {
    return
  }, () => {
    return
  }), o
}
async function v(a, e, s) {
  let r = _re();
  t(`installPluginsForHeadless: starting${r?" (zip cache mode)":""}`);
  let o = await epr(),
    i, c = () => i !== void 0 && Ae().pluginLoadCacheOnly === i;
  if (o) vct(), xS("headlessPluginInstall: seed marketplaces registered"), i = xct(e, "headlessPluginInstall");
  if (r) await ie().mkdir(ngi()), await ie().mkdir(rgi());
  let f = Object.keys(mW()).length,
    g = {
      marketplaces_installed: 0,
      delisted_count: 0
    },
    p = o;
  try {
    if (f === 0) t("installPluginsForHeadless: no marketplaces declared");
    else {
      let u = await J1t("headless_marketplace_reconcile", () => mYn({
        skip: r ? (n, C) => !igi(C) : void 0,
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
      if (k > 0) vct(), xS("headlessPluginInstall: marketplaces reconciled"), i = xct(e, "headlessPluginInstall"), p = !0;
      g.marketplaces_installed = k
    }
    if (r) i = void 0, await w(e);
    let m = await hYn(e);
    if (g.delisted_count = m.length, m.length > 0) p = !0, i = void 0;
    if (p && !c()) xS("headlessPluginInstall: plugins changed"), xct(e, "headlessPluginInstall");
    return y(e, s), p
  } catch (m) {
    if (t(`installPluginsForHeadless: failed: ${d(m)}`, {
        level: "error"
      }), p && !c()) {
      if (X() && e !== void 0) xS("headlessPluginInstall: pass failed after a change");
      xct(e, "headlessPluginInstall")
    }
    return y(e, s), !1
  } finally {
    l("tengu_headless_plugin_install", g)
  }
}

function y(a, e) {
  if (OEe(e)) ki(a, e).catch(() => {})
}
export {
  ckt
};
