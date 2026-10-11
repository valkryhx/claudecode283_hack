// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { le } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { Zg } from "B:/~BUN/root/chunk-spgj5paf.js";
import { QT } from "B:/~BUN/root/chunk-hfe3cbfz.js";
import { YM } from "B:/~BUN/root/chunk-384x2wn9.js";
import { Tln } from "B:/~BUN/root/chunk-hhgrczac.js";
import { ahr, ZXt, eJt, dhr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { op, or } from "B:/~BUN/root/chunk-gsxez0fk.js";
var d = 14,
  f = 10;
async function eOe() {
  try {
    let e = Tln();
    if (e === void 0) return [];
    if (YM() !== null) return [];
    let {
      enabled: enabled
    } = await e;
    if (enabled.length === 0) return [];
    let u = Zg(),
      l = QT(),
      numStartups = le().numStartups,
      g = Date.now(),
      r = [];
    for (let n of enabled) {
      let {
        marketplace: marketplace
      } = or(n.repository);
      if (!marketplace || op(marketplace)) continue;
      if (dhr(n, u, l) !== "user-install") continue;
      if (p(n)) continue;
      let i = ZXt(n.repository);
      if (!i) continue;
      if (ahr(n.repository)) continue;
      let {
        sessionsSinceLastUse: sessionsSinceLastUse,
        daysSinceLastUse: daysSinceLastUse
      } = eJt(i, numStartups, g);
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
function eZr(e) {
  if (YM() !== null) return null;
  let s = ZXt(e);
  if (!s) return null;
  if (ahr(e)) return 0;
  return eJt(s, le().numStartups, Date.now()).daysSinceLastUse;
}
function p(e) {
  return Boolean(e.themesPath || e.themesPaths?.length || e.outputStylesPath || e.outputStylesPaths?.length || e.monitors?.length || e.workflowsPath || e.workflowsPaths?.length);
}
export { eOe, eZr };