// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import "B:/~BUN/root/chunk-9ka04m0y.js";
import "B:/~BUN/root/chunk-rwkgcmm8.js";
import "B:/~BUN/root/chunk-rpez7z7a.js";
import "B:/~BUN/root/chunk-hg8ngszx.js";
import "B:/~BUN/root/chunk-jthpk6wv.js";
import "B:/~BUN/root/chunk-3aez4b53.js";
import "B:/~BUN/root/chunk-89mss1tj.js";
import "B:/~BUN/root/chunk-4bx17ygx.js";
import { Qs } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { f } from "B:/~BUN/root/chunk-frrkt2bs.js";
import "B:/~BUN/root/chunk-nggrknsv.js";
import { Rqs } from "B:/~BUN/root/chunk-8ye9n4fk.js";
import "B:/~BUN/root/chunk-kzgf20y6.js";
import "B:/~BUN/root/chunk-fbyz9h0p.js";
import "B:/~BUN/root/chunk-jpdys232.js";
import "B:/~BUN/root/chunk-6za2ez23.js";
import "B:/~BUN/root/chunk-xf0m410v.js";
import "B:/~BUN/root/chunk-c09hf5e4.js";
import "B:/~BUN/root/chunk-je1b1drr.js";
import "B:/~BUN/root/chunk-rvc0n7zm.js";
import "B:/~BUN/root/chunk-7c8rc0p5.js";
import "B:/~BUN/root/chunk-d9rmnpx3.js";
import "B:/~BUN/root/chunk-psh1mp8h.js";
import "B:/~BUN/root/chunk-yt0knyw7.js";
import "B:/~BUN/root/chunk-d8fk23v1.js";
import "B:/~BUN/root/chunk-gyr2a6wz.js";
import "B:/~BUN/root/chunk-yw21pggd.js";
import "B:/~BUN/root/chunk-8z3a373v.js";
import "B:/~BUN/root/chunk-x50ytcx8.js";
import "B:/~BUN/root/chunk-a3eqgdv2.js";
import "B:/~BUN/root/chunk-vpgpdrbv.js";
import "B:/~BUN/root/chunk-a0k8qg0d.js";
import "B:/~BUN/root/chunk-fsp20me0.js";
import "B:/~BUN/root/chunk-cqkcn3bx.js";
import "B:/~BUN/root/chunk-nxwmyxnk.js";
import "B:/~BUN/root/chunk-j704adqd.js";
import "B:/~BUN/root/chunk-ek28wssa.js";
import "B:/~BUN/root/chunk-4bgg5sdy.js";
import "B:/~BUN/root/chunk-xrp58hm9.js";
import "B:/~BUN/root/chunk-2zk4vqr8.js";
import "B:/~BUN/root/chunk-k9zm82w3.js";
import "B:/~BUN/root/chunk-yrjpmz6e.js";
import "B:/~BUN/root/chunk-j8w5f307.js";
import "B:/~BUN/root/chunk-6ft8yhc8.js";
import "B:/~BUN/root/chunk-nvgn0qsr.js";
import "B:/~BUN/root/chunk-wegca9zh.js";
import "B:/~BUN/root/chunk-pjgzz98k.js";
import "B:/~BUN/root/chunk-6a9s3k2y.js";
import "B:/~BUN/root/chunk-k8003a0x.js";
import { ut, ca } from "B:/~BUN/root/chunk-1gpjpba6.js";
import "B:/~BUN/root/chunk-5ygt6t95.js";
import "B:/~BUN/root/chunk-9kme2ye7.js";
import "B:/~BUN/root/chunk-8pmnanyd.js";
import "B:/~BUN/root/chunk-4sfz9tbn.js";
import "B:/~BUN/root/chunk-j0ghr71r.js";
import "B:/~BUN/root/chunk-b0487zs4.js";
import { M, De } from "B:/~BUN/root/chunk-g3snhg6n.js";
import "B:/~BUN/root/chunk-59tbtn9n.js";
import "B:/~BUN/root/chunk-3rzwkd15.js";
import "B:/~BUN/root/chunk-bp5d1azq.js";
import "B:/~BUN/root/chunk-eya7pdzx.js";
import "B:/~BUN/root/chunk-648jq7hr.js";
import "B:/~BUN/root/chunk-shj1mfyk.js";
var u = null,
  l = f(() => {
    let r = {
      autoMemoryEnabled: M().optional(),
      autoDreamEnabled: M().optional()
    };
    return De(r).refine(a => Object.values(a).some(item => item !== void 0), {
      error: `it sets none of ${new Intl.ListFormat("en", {
        type: "disjunction"
      }).format(Object.keys(r))}`
    });
  });
async function S(r, a) {
  let o = l().safeParse(r);
  if (!o.success) {
    let t = o.error.issues[0];
    return {
      ok: !1,
      error: t ? t.path.length > 0 ? `Not a memory settings edit (${t.path.map(String).join(".")}: ${t.message}).` : `Not a memory settings edit: ${t.message}.` : "Not a memory settings edit."
    };
  }
  let e = o.data,
    is_first_enable = e.autoDreamEnabled === !0 && ut().autoDreamEnabled === void 0,
    written = e,
    error,
    s = Rqs(e.accountMemory),
    m = await ca("userSettings", t => {
      if (error = s === void 0 ? void 0 : u?.accountSettingRaiseRefusal(t, s), error !== void 0) return null;
      return written = {
        ...e,
        ...(e.autoMemoryEnabled !== void 0 && e.accountMemory === void 0 && u?.accountKeyKeptWithAutoMemory(t, e.autoMemoryEnabled))
      }, written;
    }, void 0, a);
  if (m.error) return {
    ok: !1,
    error: m.error.message
  };
  if (error !== void 0) return {
    ok: !1,
    error: error
  };
  if (typeof e.autoMemoryEnabled === "boolean") await Qs("tengu_auto_memory_toggled", {
    enabled: e.autoMemoryEnabled
  });
  if (typeof e.autoDreamEnabled === "boolean") await Qs("tengu_auto_dream_toggled", {
    enabled: e.autoDreamEnabled,
    is_first_enable: is_first_enable
  });
  return {
    ok: !0,
    written: written
  };
}
export { S as runMemorySettingsEdit };