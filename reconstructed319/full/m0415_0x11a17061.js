// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  qe,
  F
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  Vs,
  ye,
  Pc,
  er
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  g,
  m,
  c
} from "B:/~BUN/root/chunk-3z3yrbk4.js";
import {
  OC
} from "B:/~BUN/root/chunk-y1kkrqy9.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  a
} from "B:/~BUN/root/chunk-xrwdh0g4.js";
import {
  ks
} from "B:/~BUN/root/chunk-d10hhz4p.js";
import {
  $o,
  hf
} from "B:/~BUN/root/chunk-6n5g80b8.js";
import {
  un,
  Ym,
  be
} from "B:/~BUN/root/chunk-7wn6n2hd.js";
import {
  Qa,
  oJ,
  Us,
  YL
} from "B:/~BUN/root/chunk-1ks9vs37.js";
import {
  qRs,
  Pqi,
  E2e
} from "B:/~BUN/root/chunk-hvykkx00.js";
import {
  he
} from "B:/~BUN/root/chunk-fet34rqr.js";

function Lpt() {
  return Iys() ? pfo() : void 0
}

function Iys() {
  if (!er()) {
    let e = E2e({
      anthropicAuthEnabled: Qa(),
      oauthScopes: oJ(OC) ? [OC] : []
    });
    return Pqi({
      isSubscriber: e
    })
  }
  return !1
}

function Mys() {
  try {
    let e = Lpt(),
      n = e === void 0 ? h : `${e.project?.taggedId}|${e.project?.source}|${e.ignored.join(",")}`;
    if (e !== void 0 && n !== A.last) {
      let {
        project: r,
        ignored: o
      } = e;
      if (o.length > 0)
        if (t(`Attribution Project: ignored a value that names no Project (from ${o.join(", ")})`, {
            level: "warn"
          }), r === void 0) m("attribution_project", "not_a_project_id");
        else c("attribution_project", "not_a_project_id");
      else if (r !== void 0) g("attribution_project");
      if (r !== void 0) t(`Attribution Project: ${r.taggedId} (from ${r.source})`)
    }
    return A.last = n, e?.project
  } catch (e) {
    if (A.last !== P) A.last = P, m("attribution_project", "resolution_failed"), a(qe(F(e), "attribution Project resolution failed"));
    return
  }
}

function pfo() {
  let e = [],
    n = i.CLAUDE_CODE_ATTRIBUTION_PROJECT;
  if (n !== void 0 && n.trim() !== "") {
    let u = Bwr(n);
    if (u !== void 0) return {
      project: {
        taggedId: u,
        source: "harness"
      },
      written: n.trim(),
      ignored: e
    };
    e.push("harness")
  }
  let r = $o(),
    o = r.includes("userSettings") && Ym(),
    s, d = null;
  for (let u = r.length - 1; u >= 0; u--) {
    let f = r[u];
    if (f === "projectSettings" && o) continue;
    if (be(f)?.attributionProject === void 0) continue;
    if (hf.has(f)) {
      if (s === void 0)
        if (ye()) {
          let b = Vs();
          s = b !== null && YL(b)
        } else s = Us();
      if (!s) continue
    }
    d = f;
    break
  }
  let l = d === null ? void 0 : be(d)?.attributionProject;
  if (d !== null && typeof l === "string" && l.trim() !== "") {
    let u = T[d],
      f = Bwr(l);
    if (f !== void 0) return {
      project: {
        taggedId: f,
        source: u
      },
      written: l.trim(),
      ignored: e
    };
    e.push(u)
  }
  let p = be("policySettings")?.attributionProjectPolicy,
    j = typeof p === "object" && p !== null && "default" in p ? p.default : void 0;
  if (typeof j === "string" && j.trim() !== "") {
    let u = Bwr(j);
    if (u !== void 0) return {
      project: {
        taggedId: u,
        source: "admin_default"
      },
      written: j.trim(),
      ignored: e
    };
    e.push("admin_default")
  }
  return {
    project: void 0,
    written: void 0,
    ignored: e
  }
}

function Bwr(e) {
  let n = e.trim();
  if (E.test(n)) {
    let o = BigInt(`0x${n.replaceAll("-","")}`),
      s = "";
    while (o > 0n) s = S[Number(o % 58n)] + s, o /= 58n;
    return `claude_proj_01${s.padStart(_,S[0])}`
  }
  if (!qRs.test(n)) return;
  let r = 0n;
  for (let o of n.slice(-_)) r = r * 58n + BigInt(S.indexOf(o));
  return r <= I ? n : void 0
}

function w0t(e) {
  let {
    project: n,
    written: r,
    ignored: o
  } = e;
  if (n === void 0) return;
  let [s] = o, d = s === void 0 ? "" : `; ignored the invalid ${eZt(s)}`;
  return {
    name: r ?? n.taggedId,
    origin: `${mfo(n.source)}${d}`
  }
}

function eZt(e) {
  switch (e) {
    case "harness":
      return "CLAUDE_CODE_ATTRIBUTION_PROJECT";
    case "admin_default":
      return "your organization's default Project";
    case "flag":
      return "attributionProject in --settings";
    default:
      return `attributionProject in ${mfo(e)}`
  }
}

function mfo(e) {
  switch (e) {
    case "harness":
      return "CLAUDE_CODE_ATTRIBUTION_PROJECT";
    case "admin_default":
      return "your organization's default";
    case "user":
      return ks(un("userSettings") ?? "~/.claude/settings.json");
    case "project":
      return ".claude/settings.json";
    case "local":
      return ".claude/settings.local.json";
    case "flag":
      return Pc()?.attributionProject === void 0 ? "--settings" : "set with /project";
    case "managed":
      return "managed settings"
  }
}
var T = {
    userSettings: "user",
    projectSettings: "project",
    localSettings: "local",
    flagSettings: "flag",
    policySettings: "managed"
  },
  E = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  S = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  _ = 22,
  I = (1n << 128n) - 1n,
  h = "not sent",
  P = "failed",
  A = he({
    last: void 0
  }, (e) => {
    e.last = void 0
  });
export {
  Lpt,
  Iys,
  Mys,
  pfo,
  Bwr,
  w0t,
  eZt,
  mfo
};
