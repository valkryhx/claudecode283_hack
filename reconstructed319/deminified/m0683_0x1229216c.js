// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { t, _ } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { P, _l } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { Dn } from "B:/~BUN/root/chunk-9jpwd6f1.js";
import { Ve } from "B:/~BUN/root/chunk-myfamxtp.js";
import { Nte } from "B:/~BUN/root/chunk-2f1svh63.js";
import { cT, ESe } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { et } from "B:/~BUN/root/chunk-fkr27nhj.js";
import { o, Xc, u } from "B:/~BUN/root/chunk-4bfd0jkf.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { join as l } from "path";
function t_n() {
  return l(Ue(), "daemon.status.json");
}
function n_n() {
  return Ve.state("daemon-status");
}
async function EGo(workers, n) {
  let r = {
    supervisorPid: process.pid,
    supervisorProcStart: ESe(),
    writtenAt: Date.now(),
    workers: workers
  };
  if (X() && n !== void 0) try {
    let e = await n.write(n_n(), _(r, null, 2), {
      mode: 438 & ~process.umask()
    });
    if (!e.ok) t(`writeDaemonStatus: ${e.error.code}`);
    return e.ok;
  } catch (error) {
    return t(`writeDaemonStatus: ${d(error)}`), !1;
  }
  try {
    return await Dn().atomicWrite(t_n(), _(r, null, 2)), !0;
  } catch (error) {
    return t(`writeDaemonStatus: ${d(error)}`), !1;
  }
}
async function TGo(s) {
  if (X() && s !== void 0) {
    try {
      let n = await s.delete(n_n());
      if (!n.ok) t(`removeDaemonStatus: ${n.error.code}`);
    } catch (error) {
      t(`removeDaemonStatus: ${d(error)}`);
    }
    return;
  }
  try {
    await Dn().delete(t_n());
  } catch {}
}
async function YKr(s) {
  let n;
  if (X() && s !== void 0) {
    let i;
    try {
      i = await s.readText([n_n()]);
    } catch {
      return null;
    }
    if (!i.ok) return null;
    let c = i.value.items[0];
    if (!c.found) return null;
    n = c.value;
  } else try {
    n = await Dn().read(t_n());
  } catch {
    return null;
  }
  let r = et(n, !1);
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null) return null;
  try {
    process.kill(e.supervisorPid, 0);
  } catch {
    return null;
  }
  let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : void 0;
  if (!(await cT(e.supervisorPid, a))) return null;
  return r;
}
var m = 4096,
  p = 200,
  XKr = 64,
  f = 32;
function S(s) {
  let n = [],
    r = u({
      servedFolder: u({
        dir: o().min(1).max(m),
        sessions: Xc().positive().max(XKr)
      })
    });
  for (let e of Object.values(s?.workers ?? {})) {
    let a = r.safeParse(e);
    if (a.success) n.push(a.data.servedFolder);
  }
  return n;
}
async function CGo(s, n) {
  try {
    let r = await YKr(n);
    return r?.supervisorPid === s ? S(r) : [];
  } catch (error) {
    t(`readServedFolders: ${d(error)}`);
  }
  return [];
}
function RGo(s) {
  let r = s.slice(0, f).map(({
      dir: dir,
      sessions: sessions
    }) => `serving tools: ${sessions} ${P(sessions, "cloud session")} in ${Nte(_l(dir), p)}`),
    e = s.length - r.length;
  return e > 0 ? r.concat(`serving tools: and ${e} more ${P(e, "folder")}`) : r;
}
export { t_n, n_n, EGo, TGo, YKr, XKr, CGo, RGo };