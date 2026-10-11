// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  S9e,
  w9e,
  v9e,
  ryn,
  oyn,
  Aqr,
  NC,
  oi
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  bRr
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  DBt,
  Gft
} from "B:/~BUN/root/chunk-339q6g5w.js";
import {
  $hr,
  mdo,
  Gse,
  VCt,
  XJt,
  Buo,
  nfo,
  Dbr,
  Rie,
  V7t,
  YZt,
  Bgo,
  zP,
  cV
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  yce
} from "B:/~BUN/root/chunk-gf53qpk6.js";
import {
  bo
} from "B:/~BUN/root/chunk-846280n0.js";
import {
  wBt
} from "B:/~BUN/root/chunk-fct6vke8.js";
import {
  N0t
} from "B:/~BUN/root/chunk-70qv5h0a.js";
import {
  Roe,
  uir
} from "B:/~BUN/root/chunk-fk8afn7x.js";
import {
  lro
} from "B:/~BUN/root/chunk-e9881fq4.js";
import {
  lOe
} from "B:/~BUN/root/chunk-hrk4739b.js";
import {
  H7e
} from "B:/~BUN/root/chunk-90ad133b.js";
import {
  VZr
} from "B:/~BUN/root/chunk-rx5crs76.js";
import {
  dwe
} from "B:/~BUN/root/chunk-21nr7chp.js";

function dir(t, r = new Set, i, o, l, n = !1) {
  let a = r.size > 0;
  if (XJt(t), Gft(t), N0t.of(t).clear(), uir(Roe), zP(), nfo(r), !a) bRr.peek(t)?.clear();
  let s = Dbr();
  if (s?.getTeleportCacheState().status === "active") s.revertTeleportCache("transcript_cleared", "main");
  if (Rie(t, void 0, i, void 0, void 0, l), NC("clear"), cV(), S9e(oi()), v9e(oi()), ryn(oi()), w9e(oi()), oyn(oi()), !n) iCn(), V7t(t.host);
  if (VCt(t, "session_start"), Gse.of(t).reset(), $hr.of(t).clear(), lOe.of(t).reset(), i?.((e) => {
      if (e.storedImagePaths.size === 0 && e.imageDescriptions.size === 0 && Object.keys(e.displayedMessageContent).length === 0) return e;
      return {
        ...e,
        storedImagePaths: new Map,
        imageDescriptions: new Map,
        displayedMessageContent: {}
      }
    }), mdo(), !a) VZr();
  if (wBt(), !a) lro();
  if (Aqr(r), DBt(), Bgo(), YZt().catch(() => {}), Buo(t), o) o.get(H7e).clear(), o.get(dwe).clear(), import("B:/~BUN/root/chunk-1tvgr2wc.js").then(({
    WebFetchCache: e
  }) => o.get(e).clear()), import("B:/~BUN/root/chunk-swdr7d16.js").then(({
    WebFetchHistory: e
  }) => o.get(e).clear()), import("B:/~BUN/root/chunk-59jeb0kx.js").then(({
    ToolSearchDescriptionCache: e
  }) => o.get(e).clear());
  import("B:/~BUN/root/chunk-a9j6mpbv.js").then(({
    clearAgentDefinitionsCache: e
  }) => e())
}

function iCn() {
  let t = bo();
  t.bashPromptSkillCommands = void 0, t.workflowAuthoringSkillAvailable = void 0, yce()
}
export {
  dir,
  iCn
};
