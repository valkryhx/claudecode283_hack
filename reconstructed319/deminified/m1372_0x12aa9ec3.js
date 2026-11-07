// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { fe } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { dm, $n } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { sp } from "B:/~BUN/root/chunk-fzefftbw.js";
import { dU, uU } from "B:/~BUN/root/chunk-esnm3r09.js";
import { NHt } from "B:/~BUN/root/chunk-eds8xkh8.js";
import { gfs, t_r, n_r, kfs } from "B:/~BUN/root/chunk-ex2shtaj.js";
var d = 14,
  f = 10;
async function Git() {
  try {
    let e = NHt();
    if (e === void 0) return [];
    if (uU() !== null) return [];
    let {
      enabled: enabled
    } = await e;
    if (enabled.length === 0) return [];
    let u = sp(),
      l = dU(),
      numStartups = fe().numStartups,
      g = Date.now(),
      r = [];
    for (let n of enabled) {
      let {
        marketplace: marketplace
      } = $n(n.repository);
      if (!marketplace || dm(marketplace)) continue;
      if (kfs(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = t_r(n.repository);
      if (!i) continue;
      if (gfs(n.repository)) continue;
      let {
        sessionsSinceLastUse: sessionsSinceLastUse,
        daysSinceLastUse: daysSinceLastUse
      } = n_r(i, numStartups, g);
      if (daysSinceLastUse >= d && sessionsSinceLastUse >= f) r.push({
        pluginId: n.repository,
        name: n.name,
        daysSinceLastUse: daysSinceLastUse
      });
    }
    return r.sort((itemA, itemB) => itemB.daysSinceLastUse - itemA.daysSinceLastUse), r;
  } catch (error) {
    return t(`plugin-disuse tip: failed to compute disused plugins: ${error}`, {
      level: "error"
    }), [];
  }
}
function Wai(e) {
  if (uU() !== null) return null;
  let s = t_r(e);
  if (!s) return null;
  if (gfs(e)) return 0;
  return n_r(s, fe().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
export { Git, Wai };