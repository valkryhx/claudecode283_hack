// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  Me
} from "B:/~BUN/root/chunk-ekrhn4q1.js";
import {
  P,
  te
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  Jd
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  d
} from "B:/~BUN/root/chunk-zs3ycjed.js";
import {
  St
} from "B:/~BUN/root/chunk-bt3h0syz.js";
import {
  K
} from "B:/~BUN/root/chunk-5px6g0cn.js";
import {
  dr
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  bV,
  wvo,
  Uit,
  ZA,
  UT
} from "B:/~BUN/root/chunk-1mdeqc2r.js";
import {
  lcr,
  N6t
} from "B:/~BUN/root/chunk-0s6c091w.js";
import {
  ES
} from "B:/~BUN/root/chunk-na2t7g12.js";
import {
  o,
  s_e
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  L
} from "B:/~BUN/root/chunk-z1enakv9.js";
var h = {
  supported: !0,
  refusedInputFields: N6t,
  decidingInputFields: ["command", "run_in_background", "dangerouslyDisableSandbox"]
};

function E() {
  return import.meta.require("B:/~BUN/root/chunk-b4ydy462.js").PowerShellTool
}

function K9n(e, r) {
  let t = E(),
    i = lcr({
      edition: r?.powershell?.edition ?? null,
      buildTools: [],
      onWindows: !0,
      backgroundRuns: !1
    }),
    n = f(t.inputSchema, ["run_in_background"]).extend({
      [dr]: o().optional().describe("Optional. Names the attached computer this runs on \u2014 the attached-machines note says which computers serve PowerShell. While exactly one does it may be omitted and the call runs there; when several do, name one. It never runs in this session's own environment, which has no PowerShell. The result says where it ran.")
    }),
    s = Object.defineProperties({}, {
      ...Object.getOwnPropertyDescriptors(t),
      inputSchema: {
        value: n,
        enumerable: !0
      },
      prompt: {
        value: async () => i,
        enumerable: !0
      },
      isEnabled: {
        value: () => !0,
        enumerable: !0
      },
      remoteExecution: {
        value: h,
        enumerable: !0
      },
      suppressesAllPermissionUpdates: {
        value: () => !0,
        enumerable: !0
      },
      call: {
        value: async () => {
          throw new P(`PowerShell runs only on ${e}; the session runs it there and it cannot run here.`, "session-channel PowerShell tool called without being routed to its machine")
        },
        enumerable: !0
      }
    });
  return wvo(s)
}

function l4r(e, r) {
  if (ES()) return 0;
  let t = L(r.filter((n) => n.tool === St).map((n) => n.host));
  if (t.length === 0) return 0;
  let i;
  try {
    i = t.map((n) => ({
      tool: K9n(n, void 0),
      machine: n
    }))
  } catch (n) {
    return d(te(n)), 0
  }
  return e.presentUntilAnnounced(i, bV), i.length
}

function f(e, r) {
  if (!(e instanceof s_e)) throw TypeError("PowerShellTool no longer declares an object schema");
  let t = r.filter((n) => (n in e.shape)),
    i = Object.fromEntries(t.map((n) => [n, !0]));
  return t.length === 0 ? e : e.omit(i)
}
import {
  posix as c
} from "path";
var B = c.dirname(Uit),
  S = "/mnt/user-data/working",
  p = c.join(S, Uit),
  Qyn = 32,
  mgt = 524288,
  c4r = 2097152,
  Y9n = 200,
  T = 237,
  H = 4,
  g = "CLAUDE.md",
  X9n = "rules",
  J9n = "output-styles",
  ggt = "settings.json",
  m = ".md",
  O = /[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,
  b = /^\p{M}/u;

function M(e) {
  return e !== "" && e === e.trim() && Buffer.byteLength(e, "utf8") <= T && !e.startsWith(".") && !ZA(e) && !e.includes("\\") && !O.test(e) && !b.test(e) && !e.endsWith("~") && !e.endsWith(".swp") && !e.endsWith(".tmp")
}

function _(e) {
  return e.length > m.length && e.endsWith(m)
}

function Q9n(e) {
  return UT(e)
}

function y(e) {
  return _(Q9n(e))
}

function hgt(e) {
  if (e.length > Y9n || !Jd(e) || e.normalize("NFC") !== e) return null;
  let r = e.split("/");
  if (!r.every(M)) return null;
  let [t, ...i] = r;
  if (i.length === 0) return t === g ? "claude_md" : null;
  let n = i.slice(0, -1),
    s = i.at(-1) ?? "";
  if (!_(s) || n.some(y)) return null;
  if (i.length > H) return null;
  return t === X9n ? "rule" : t === J9n ? "output_style" : null
}

function aWt(e) {
  return hgt(e) !== null
}

function Zyn(e) {
  let r = hgt(e);
  return r === null ? null : {
    destination: e,
    kind: r
  }
}
var F = 8,
  Z9n = 256;

function d4r() {
  let e = [],
    r = 0,
    t = !1,
    i = !1,
    n = Me();
  return {
    noteStagedRow(s) {
      if (s.mount_path !== p) return !1;
      let u = s.content_sha256,
        l = typeof u === "string" && u.length > 0 && u.length <= Z9n ? u : null;
      if (l === null) {
        if (!i) i = !0, K("warn", "home_seed_stage_without_usable_etag", {});
        return !1
      }
      r++;
      let a = {
        etag: l,
        beforeFirstCommand: !t,
        ordinal: r
      };
      e = [...e, a].slice(-F);
      try {
        n.emit(a)
      } catch {
        K("error", "home_seed_announcement_listener_threw", {})
      }
      return !0
    },
    markFirstCommandDequeued() {
      t = !0
    },
    firstCommandDequeued() {
      return t
    },
    announcements() {
      return e
    },
    announcementCount() {
      return r
    },
    announcementForEtag(s) {
      return e.findLast((u) => u.etag === s)
    },
    announced: {
      subscribe: n.subscribe
    }
  }
}
export {
  K9n,
  l4r,
  Qyn,
  mgt,
  c4r,
  Y9n,
  X9n,
  J9n,
  ggt,
  Q9n,
  hgt,
  aWt,
  Zyn,
  Z9n,
  d4r
};
