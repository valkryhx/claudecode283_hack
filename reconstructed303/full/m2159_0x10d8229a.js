// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  x
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  J,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  sj
} from "B:/~BUN/root/chunk-xyxdcn7p.js";
import {
  m,
  p
} from "B:/~BUN/root/chunk-kzgf20y6.js";
import {
  y9r,
  fTn
} from "B:/~BUN/root/chunk-8h1fsq3k.js";
import {
  o,
  T,
  u
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var l = f(() => u({
    deviceId: o(),
    name: o().default("Browser"),
    osPlatform: o().optional()
  })),
  ntr = "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.",
  g5s = "Chrome can't be reached right now. Make sure Chrome is open with the Claude extension and signed in to the same claude.ai account, then try again.",
  J3o = "That browser isn't connected right now. Make sure Chrome is open with the Claude extension on that computer, then try again.";
class rtr extends x {
  listEmpty;
  namedABrowser;
  constructor(e, r) {
    if (r) super(J3o, "claude-in-chrome browser not listed");
    else super(J3o, "claude-in-chrome switch request named no browser");
    this.listEmpty = e, this.namedABrowser = r
  }
}
class lqr extends x {
  constructor(e) {
    super(e, "claude-in-chrome tool call failed")
  }
}

function Q3o(e) {
  return e instanceof rtr
}

function otr(e) {
  if (WGt(e)) p("chrome_browser_picker", "bridge_unreachable");
  else if (Q3o(e) && e.namedABrowser) p("chrome_browser_picker", "browser_not_listed", {
    list_empty: e.listEmpty
  });
  else if (Q3o(e)) m("chrome_browser_picker", "invalid_request");
  else m("chrome_browser_picker", "select_failed")
}
class dqr extends x {
  constructor() {
    super(g5s, "claude-in-chrome bridge not reachable")
  }
}

function WGt(e) {
  return e instanceof dqr
}

function jei(e) {
  if (WGt(e)) return [];
  throw e
}
async function mSn(e) {
  let r = await e5o(e, "list_connected_browsers", {});
  if (!r) return [];
  let s = T(l()).safeParse(J(r));
  if (!s.success) throw new Z3o;
  return s.data
}
class Z3o extends x {
  constructor() {
    super("Claude Code couldn't read the browser list it got back. This is a bug on our side, not a problem with your setup.", "claude-in-chrome browser list in an unknown shape")
  }
}
async function str(e, r, s = (n) => n) {
  if (typeof r !== "string" || r === "") throw new rtr(!1, !1);
  try {
    await s(e5o(e, "select_browser", {
      deviceId: r
    }))
  } catch (n) {
    if (!(n instanceof lqr)) throw n;
    t(`claude-in-chrome select_browser refused: ${n.message}`);
    let c = await s(mSn(e));
    if (c.some((i) => i.deviceId === r)) throw n;
    throw new rtr(c.length === 0, !0)
  }
}
async function e5o(e, r, s) {
  let n = y9r(),
    c = await sj(e, {
      name: r,
      arguments: s
    }, void 0, !0),
    i = Array.isArray(c.content) ? c.content[0] : void 0,
    a = i && typeof i === "object" && "text" in i && typeof i.text === "string" ? i.text : void 0;
  if (y9r() !== n && a !== void 0 && fTn(a)) throw t(`claude-in-chrome bridge not reachable: ${a}`, {
    level: "error"
  }), new dqr;
  if (c.isError) throw new lqr(a || `${r} failed`);
  return a
}
export {
  ntr,
  g5s,
  J3o,
  rtr,
  lqr,
  Q3o,
  otr,
  dqr,
  WGt,
  jei,
  mSn,
  Z3o,
  str,
  e5o
};
