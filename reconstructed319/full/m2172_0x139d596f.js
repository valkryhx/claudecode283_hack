// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  zt
} from "B:/~BUN/root/chunk-r5zmhp23.js";
import {
  Ue
} from "B:/~BUN/root/chunk-eev762xg.js";
import {
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  t
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  pe
} from "B:/~BUN/root/chunk-thn0wk2x.js";
import {
  fr
} from "B:/~BUN/root/chunk-1g25msn4.js";
import {
  Oq
} from "B:/~BUN/root/chunk-trf406sb.js";
import {
  _7n,
  b7n
} from "B:/~BUN/root/chunk-yxyf732v.js";
import {
  RF
} from "B:/~BUN/root/chunk-pp5rqp7s.js";
import {
  FQt
} from "B:/~BUN/root/chunk-z7bs0q82.js";
import {
  Hm
} from "B:/~BUN/root/chunk-j05gjqgd.js";
import {
  PL,
  yNt
} from "B:/~BUN/root/chunk-xbhv3nhf.js";
import {
  Oe
} from "B:/~BUN/root/chunk-4qfwb3rf.js";

function Rqr() {
  let e = [Ue()];
  try {
    e.push(Hm())
  } catch {}
  return (a) => e.some((n) => RF(a, n, !0))
}
var h = Oe(FQt(), 1);
import {
  readFile as d,
  stat as R
} from "fs/promises";

function h7n(e, a) {
  return {
    readFileState: a,
    bashTools: _7n(e),
    bashHosts: b7n(e)
  }
}

function g7n(e, a) {
  let n = a;
  if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) return null;
  let c;
  try {
    if (n.signals.manifestDeps?.length) c = n.signals.manifestDeps.map((l) => ({
      file: new RegExp(l.file, "i"),
      pattern: new RegExp(l.pattern)
    }))
  } catch (l) {
    return t(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${l}`, {
      level: "warn"
    }), null
  }
  let o = n.signals.hosts?.map((l) => l.toLowerCase());
  return {
    cli: n.signals.cli,
    hosts: o,
    filesRead: n.signals.filesRead,
    manifestDep: c,
    cwd: n.signals.cwd
  }
}
async function y7n(e, a) {
  let {
    bashTools: n,
    bashHosts: c
  } = a ?? {};
  if (e.cli && n?.size) {
    let i = e.cli.find((s) => n.has(s));
    if (i) return {
      signal: "cli",
      command: i
    }
  }
  if (e.hosts?.length && c?.size) {
    let i = e.hosts.find((s) => c.has(s));
    if (i) return {
      signal: "hosts",
      host: i
    }
  }
  if (e.cwd?.length) {
    let i = pe().replaceAll("\\", "/"),
      s = fr(pe())?.replaceAll("\\", "/"),
      f = [i];
    if (s && i.startsWith(`${s}/`)) f.push(i.slice(s.length + 1));
    for (let p of e.cwd) {
      let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!g) continue;
      if (f.some((r) => h.default.isMatch(r, [g, `${g}/**`], {
          nocase: !0,
          dot: !0
        }))) return {
        signal: "cwd"
      }
    }
  }
  let o = a?.readFileState,
    l = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = Rqr();
    l = yNt(o).filter((s) => !i(s))
  }
  if (e.filesRead?.length && l.length) {
    let i = l.find((s) => h.default.isMatch(s.replaceAll("\\", "/"), e.filesRead, {
      nocase: !0,
      dot: !0
    }));
    if (i) return {
      signal: "filesRead",
      file: i
    }
  }
  if (e.manifestDep && o && l.length > 0) {
    let i = new Map(o.entries()),
      s = (async () => {
        for (let {
            file: p,
            pattern: g
          }
          of e.manifestDep)
          for (let r of l) {
            if (!p.test(r)) continue;
            try {
              let m = i.get(r),
                u = m && PL(m) ? m.content : void 0;
              if (!u) {
                if (q()) {
                  Oq("plugin_relevance");
                  continue
                }
                if ((await R(r)).size > 524288) continue;
                u = await d(r, "utf8")
              }
              if (g.test(u)) return r
            } catch {}
          }
        return null
      })(),
      f = await zt(s, 50, "manifestDep scan").catch(() => null);
    if (f) return {
      signal: "manifestDep",
      file: f
    }
  }
  return null
}
export {
  Rqr,
  h7n,
  g7n,
  y7n
};
