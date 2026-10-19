// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ue } from "B:/~BUN/root/chunk-hb6x4e3n.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Sp, Cn } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { up } from "B:/~BUN/root/chunk-efcxwmhb.js";
import { QVn } from "B:/~BUN/root/chunk-nvdqbkrt.js";
import { yD, bD } from "B:/~BUN/root/chunk-472kxa0t.js";
import { Cho, lUn, dUn, Pho } from "B:/~BUN/root/chunk-vnmfp48d.js";
var d = 14,
  f = 10;
async function sKe() {
  try {
    let e = QVn();
    if (e === void 0) return [];
    if (bD() !== null) return [];
    let {
      enabled: enabled
    } = await e;
    if (enabled.length === 0) return [];
    let u = up(),
      l = yD(),
      numStartups = ue().numStartups,
      g = Date.now(),
      r = [];
    for (let n of enabled) {
      let {
        marketplace: marketplace
      } = Cn(n.repository);
      if (!marketplace || Sp(marketplace)) continue;
      if (Pho(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = lUn(n.repository);
      if (!i) continue;
      if (Cho(n.repository)) continue;
      let {
        sessionsSinceLastUse: sessionsSinceLastUse,
        daysSinceLastUse: daysSinceLastUse
      } = dUn(i, numStartups, g);
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
function ans(e) {
  if (bD() !== null) return null;
  let s = lUn(e);
  if (!s) return null;
  if (Cho(e)) return 0;
  return dUn(s, ue().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
export { sKe, ans };