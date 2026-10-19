// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { b } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { hn, oi, ZD, fc, L_t, d7e } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import { VE } from "B:/~BUN/root/chunk-h2myanpn.js";
import { Lv } from "B:/~BUN/root/chunk-nz6ywek4.js";
import { Nk, $q, Iho } from "B:/~BUN/root/chunk-vnmfp48d.js";
import { nd, CT } from "B:/~BUN/root/chunk-9grc6xh0.js";
async function Lye(n, i, r) {
  let o = ZD(n),
    {
      name: name,
      marketplace: marketplace
    } = fc(o);
  if (marketplace === hn && Nk().nameRegistration === void 0) await nd(r);
  let l = $q(name, marketplace, i),
    m = L_t(marketplace);
  if (!m && marketplace !== oi && !d7e(name, marketplace)) return l;
  let s = !1;
  try {
    s = await c(o, name, marketplace, r);
  } catch (error) {
    t(`Plugin telemetry: could not read the marketplace catalog to confirm "${n}" exists (${d(error)}); logging its name as third-party`);
  }
  return {
    ...l,
    ...(m && marketplace !== void 0 && {
      marketplace_name_redacted: Iho(marketplace)
    }),
    ...(!s && {
      plugin_name_redacted: b(Lv)
    })
  };
}
async function c(n, i, r, o) {
  if (d7e(i, r)) return !0;
  if (r === oi) return VE(i) !== void 0;
  return (await CT(n, o)) !== null;
}
export { Lye };