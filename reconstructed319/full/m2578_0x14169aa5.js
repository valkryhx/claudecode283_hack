// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  R
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  t,
  ee
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  fq
} from "B:/~BUN/root/chunk-mcdkvptw.js";
import {
  p9o,
  Msr
} from "B:/~BUN/root/chunk-m5r98b9b.js";
import {
  o,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
var d = p(() => u({
    deviceId: o(),
    name: o().default("Browser"),
    osPlatform: o().optional()
  })),
  oWr = "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.",
  Psa = "Chrome can't be reached right now. Make sure Chrome is open with the Claude extension and signed in to the same claude.ai account, then try again.",
  t8s = "That browser isn't connected right now. Make sure Chrome is open with the Claude extension on that computer, then try again.";
class sWr extends R {
  listEmpty;
  namedABrowser;
  constructor(e, r) {
    if (r) super(t8s, "claude-in-chrome browser not listed");
    else super(t8s, "claude-in-chrome switch request named no browser");
    this.listEmpty = e, this.namedABrowser = r
  }
}
class IFo extends R {
  constructor(e) {
    super(e, "claude-in-chrome tool call failed")
  }
}

function n8s(e) {
  return e instanceof sWr
}

function iWr(e) {
  if (umn(e)) c("chrome_browser_picker", "bridge_unreachable");
  else if (n8s(e) && e.namedABrowser) c("chrome_browser_picker", "browser_not_listed", {
    list_empty: e.listEmpty
  });
  else if (n8s(e)) m("chrome_browser_picker", "invalid_request");
  else m("chrome_browser_picker", "select_failed")
}
class MFo extends R {
  constructor() {
    super(Psa, "claude-in-chrome bridge not reachable")
  }
}

function umn(e) {
  return e instanceof MFo
}

function sha(e) {
  if (umn(e)) return [];
  throw e
}
async function O3n(e) {
  let r = await o8s(e, "list_connected_browsers", {});
  if (!r) return [];
  let s = C(d()).safeParse(ee(r));
  if (!s.success) throw new r8s;
  return s.data
}
class r8s extends R {
  constructor() {
    super("Claude Code couldn't read the browser list it got back. This is a bug on our side, not a problem with your setup.", "claude-in-chrome browser list in an unknown shape")
  }
}
async function aWr(e, r, s = (n) => n) {
  if (typeof r !== "string" || r === "") throw new sWr(!1, !1);
  try {
    await s(o8s(e, "select_browser", {
      deviceId: r
    }))
  } catch (n) {
    if (!(n instanceof IFo)) throw n;
    t(`claude-in-chrome select_browser refused: ${n.message}`);
    let a = await s(O3n(e));
    if (a.some((i) => i.deviceId === r)) throw n;
    throw new sWr(a.length === 0, !0)
  }
}
async function o8s(e, r, s) {
  let n = p9o(),
    a = await fq(e, {
      name: r,
      arguments: s
    }, void 0, !0),
    i = Array.isArray(a.content) ? a.content[0] : void 0,
    l = i && typeof i === "object" && "text" in i && typeof i.text === "string" ? i.text : void 0;
  if (p9o() !== n && l !== void 0 && Msr(l)) throw t(`claude-in-chrome bridge not reachable: ${l}`, {
    level: "error"
  }), new MFo;
  if (a.isError) throw new IFo(l || `${r} failed`);
  return l
}
export {
  oWr,
  Psa,
  t8s,
  sWr,
  IFo,
  n8s,
  iWr,
  MFo,
  umn,
  sha,
  O3n,
  r8s,
  aWr,
  o8s
};
