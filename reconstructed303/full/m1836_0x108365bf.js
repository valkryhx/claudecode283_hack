// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  Nt
} from "B:/~BUN/root/chunk-89mss1tj.js";
import {
  Pe
} from "B:/~BUN/root/chunk-fbyz9h0p.js";
import {
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  ce
} from "B:/~BUN/root/chunk-nxwmyxnk.js";
import {
  yr
} from "B:/~BUN/root/chunk-2zk4vqr8.js";
import {
  qEn,
  KEn
} from "B:/~BUN/root/chunk-nmd5625s.js";
import {
  Zse
} from "B:/~BUN/root/chunk-k382hx6g.js";
import {
  SDt
} from "B:/~BUN/root/chunk-r0jnxjth.js";
import {
  nA,
  Rft
} from "B:/~BUN/root/chunk-h1tq8zce.js";
import {
  em
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  ve
} from "B:/~BUN/root/chunk-ef0msk7r.js";

function uir() {
  let e = [Pe()];
  try {
    e.push(em())
  } catch {}
  return (l) => e.some((n) => Zse(l, n, !0))
}
var h = ve(SDt(), 1);
import {
  readFile as d,
  stat as R
} from "fs/promises";

function zEn(e, l) {
  return {
    readFileState: l,
    bashTools: qEn(e),
    bashHosts: KEn(e)
  }
}

function GEn(e, l) {
  let n = l;
  if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) return null;
  let c;
  try {
    if (n.signals.manifestDeps?.length) c = n.signals.manifestDeps.map((a) => ({
      file: new RegExp(a.file, "i"),
      pattern: new RegExp(a.pattern)
    }))
  } catch (a) {
    return t(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${a}`, {
      level: "warn"
    }), null
  }
  let o = n.signals.hosts?.map((a) => a.toLowerCase());
  return {
    cli: n.signals.cli,
    hosts: o,
    filesRead: n.signals.filesRead,
    manifestDep: c,
    cwd: n.signals.cwd
  }
}
async function VEn(e, l) {
  let {
    bashTools: n,
    bashHosts: c
  } = l ?? {};
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
    let i = ce().replaceAll("\\", "/"),
      s = yr(ce())?.replaceAll("\\", "/"),
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
  let o = l?.readFileState,
    a = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = uir();
    a = Rft(o).filter((s) => !i(s))
  }
  if (e.filesRead?.length && a.length) {
    let i = a.find((s) => h.default.isMatch(s.replaceAll("\\", "/"), e.filesRead, {
      nocase: !0,
      dot: !0
    }));
    if (i) return {
      signal: "filesRead",
      file: i
    }
  }
  if (e.manifestDep && o && a.length > 0) {
    let i = new Map(o.entries()),
      s = (async () => {
        for (let {
            file: p,
            pattern: g
          }
          of e.manifestDep)
          for (let r of a) {
            if (!p.test(r)) continue;
            try {
              let m = i.get(r),
                u = m && nA(m) ? m.content : void 0;
              if (!u) {
                if ((await R(r)).size > 524288) continue;
                u = await d(r, "utf8")
              }
              if (g.test(u)) return r
            } catch {}
          }
        return null
      })(),
      f = await Nt(s, 50, "manifestDep scan").catch(() => null);
    if (f) return {
      signal: "manifestDep",
      file: f
    }
  }
  return null
}
export {
  uir,
  zEn,
  GEn,
  VEn
};
