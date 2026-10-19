// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { Nt } from "B:/~BUN/root/chunk-89mss1tj.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { ce } from "B:/~BUN/root/chunk-nxwmyxnk.js";
import { yr } from "B:/~BUN/root/chunk-2zk4vqr8.js";
import { qEn, KEn } from "B:/~BUN/root/chunk-nmd5625s.js";
import { Zse } from "B:/~BUN/root/chunk-k382hx6g.js";
import { SDt } from "B:/~BUN/root/chunk-r0jnxjth.js";
import { nA, Rft } from "B:/~BUN/root/chunk-h1tq8zce.js";
import { em } from "B:/~BUN/root/chunk-hkc0g0wr.js";
import { ve } from "B:/~BUN/root/chunk-ef0msk7r.js";
function uir() {
  let e = [Pe()];
  try {
    e.push(em());
  } catch {}
  return l => e.some(item => Zse(l, item, !0));
}
var h = ve(SDt(), 1);
import { readFile as d, stat as R } from "fs/promises";
function zEn(e, readFileState) {
  return {
    readFileState: readFileState,
    bashTools: qEn(e),
    bashHosts: KEn(e)
  };
}
function GEn(e, l) {
  let n = l;
  if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) return null;
  let manifestDep;
  try {
    if (n.signals.manifestDeps?.length) manifestDep = n.signals.manifestDeps.map(item => ({
      file: new RegExp(item.file, "i"),
      pattern: new RegExp(item.pattern)
    }));
  } catch (error) {
    return t(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${error}`, {
      level: "warn"
    }), null;
  }
  let hosts = n.signals.hosts?.map(a => a.toLowerCase());
  return {
    cli: n.signals.cli,
    hosts: hosts,
    filesRead: n.signals.filesRead,
    manifestDep: manifestDep,
    cwd: n.signals.cwd
  };
}
async function VEn(e, l) {
  let {
    bashTools: bashTools,
    bashHosts: bashHosts
  } = l ?? {};
  if (e.cli && bashTools?.size) {
    let command = e.cli.find(item => bashTools.has(item));
    if (command) return {
      signal: "cli",
      command: command
    };
  }
  if (e.hosts?.length && bashHosts?.size) {
    let host = e.hosts.find(item => bashHosts.has(item));
    if (host) return {
      signal: "hosts",
      host: host
    };
  }
  if (e.cwd?.length) {
    let i = ce().replaceAll("\\", "/"),
      s = yr(ce())?.replaceAll("\\", "/"),
      f = [i];
    if (s && i.startsWith(`${s}/`)) f.push(i.slice(s.length + 1));
    for (let p of e.cwd) {
      let g = p.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!g) continue;
      if (f.some(item => h.default.isMatch(item, [g, `${g}/**`], {
        nocase: !0,
        dot: !0
      }))) return {
        signal: "cwd"
      };
    }
  }
  let o = l?.readFileState,
    a = [];
  if (o && (e.filesRead?.length || e.manifestDep)) {
    let i = uir();
    a = Rft(o).filter(item => !i(item));
  }
  if (e.filesRead?.length && a.length) {
    let file = a.find(item => h.default.isMatch(item.replaceAll("\\", "/"), e.filesRead, {
      nocase: !0,
      dot: !0
    }));
    if (file) return {
      signal: "filesRead",
      file: file
    };
  }
  if (e.manifestDep && o && a.length > 0) {
    let i = new Map(o.entries()),
      s = (async () => {
        for (let {
          file: file_2,
          pattern: pattern
        } of e.manifestDep) for (let r of a) {
          if (!file_2.test(r)) continue;
          try {
            let m = i.get(r),
              u = m && nA(m) ? m.content : void 0;
            if (!u) {
              if ((await R(r)).size > 524288) continue;
              u = await d(r, "utf8");
            }
            if (pattern.test(u)) return r;
          } catch {}
        }
        return null;
      })(),
      file_3 = await Nt(s, 50, "manifestDep scan").catch(() => null);
    if (file_3) return {
      signal: "manifestDep",
      file: file_3
    };
  }
  return null;
}
export { uir, zEn, GEn, VEn };