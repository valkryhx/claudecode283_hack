// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  vJn,
  rSt,
  oSt,
  kJn,
  TJn,
  iSt,
  CJn,
  bVo,
  vI,
  js
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  lJ
} from "B:/~BUN/root/chunk-hb6x4e3n.js";
import {
  Ufn,
  H1t
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  Mus,
  ySe,
  b9t,
  oDn,
  Cfs,
  lNn,
  QL,
  BJt,
  YSe,
  h9,
  HHn,
  Zbs
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  Ao
} from "B:/~BUN/root/chunk-s6czymtt.js";
import {
  kfn
} from "B:/~BUN/root/chunk-m94tqsvv.js";
import {
  wNs
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  kAo
} from "B:/~BUN/root/chunk-z8fd2x5s.js";
import {
  msn
} from "B:/~BUN/root/chunk-3d7bmmrg.js";
import {
  uen
} from "B:/~BUN/root/chunk-351qj2sm.js";
import {
  Ebe,
  Eeo
} from "B:/~BUN/root/chunk-2v0bh1zr.js";
import {
  pas
} from "B:/~BUN/root/chunk-5yj77z2d.js";
import {
  ZKe
} from "B:/~BUN/root/chunk-4rtd9bc2.js";
import {
  dAe
} from "B:/~BUN/root/chunk-7z9zq0ck.js";
import {
  qCt
} from "B:/~BUN/root/chunk-44xtz7dy.js";
import {
  Zis
} from "B:/~BUN/root/chunk-d66nsegc.js";
import {
  _Fe
} from "B:/~BUN/root/chunk-35hke8sn.js";

function keo(t, r = new Set, s, o, n, m = !1) {
  let a = r.size > 0;
  if (oDn(t), H1t(t), msn.of(t).clear(), Eeo(Ebe), QL(), wNs(r), !a) uen.peek(t)?.clear();
  let l = BJt();
  if (l?.getTeleportCacheState().status === "active") l.revertTeleportCache("transcript_cleared", "main");
  if (YSe(t, void 0, s, void 0, void 0, n), vI("clear"), h9(), vJn(js()), oSt(js()), kJn(js()), rSt(js()), TJn(js()), iSt(js()), CJn(js()), !m) iur(), lNn(t.host);
  if (b9t(t, "session_start"), ySe.of(t).reset(), kAo.of(t).clear(), ZKe.of(t).reset(), s?.((e) => {
      if (e.storedImagePaths.size === 0 && e.imageDescriptions.size === 0 && Object.keys(e.displayedMessageContent).length === 0) return e;
      return {
        ...e,
        storedImagePaths: new Map,
        imageDescriptions: new Map,
        displayedMessageContent: {}
      }
    }), Mus(), !a) Zis();
  if (kfn(), !a) pas();
  if (bVo(r), Ufn(), Zbs(), HHn().catch(() => {}), Cfs(t), o) o.get(qCt).clear(), o.get(_Fe).clear(), o.get(dAe).clear(), import("B:/~BUN/root/chunk-6aram9w2.js").then(({
    WebFetchCache: e
  }) => o.get(e).clear()), import("B:/~BUN/root/chunk-1sg84bv4.js").then(({
    WebFetchHistory: e
  }) => o.get(e).clear()), import("B:/~BUN/root/chunk-g1jpcgnm.js").then(({
    ToolSearchDescriptionCache: e
  }) => o.get(e).clear());
  import("B:/~BUN/root/chunk-kcj3k1mk.js").then(({
    clearAgentDefinitionsCache: e
  }) => e())
}

function iur() {
  let t = Ao();
  t.bashPromptSkillCommands = void 0, t.workflowAuthoringSkillAvailable = void 0, lJ()
}
export {
  keo,
  iur
};
