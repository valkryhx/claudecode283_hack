// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { d } from "B:/~BUN/root/chunk-3aez4b53.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { _, t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Pe } from "B:/~BUN/root/chunk-fbyz9h0p.js";
import { O, Hd } from "B:/~BUN/root/chunk-nggrknsv.js";
import { gn } from "B:/~BUN/root/chunk-pjgzz98k.js";
import { Be } from "B:/~BUN/root/chunk-d9rmnpx3.js";
import { k5 } from "B:/~BUN/root/chunk-vpgpdrbv.js";
import { ek, Hle } from "B:/~BUN/root/chunk-2ypz4cxh.js";
import { pt } from "B:/~BUN/root/chunk-cqkcn3bx.js";
import { o, Bu, u } from "B:/~BUN/root/chunk-g3snhg6n.js";
import { join as l } from "path";
function Zqt() {
  return l(Pe(), "daemon.status.json");
}
function eKt() {
  return Be.state("daemon-status");
}
async function y8r(workers, n) {
  let r = {
    supervisorPid: process.pid,
    supervisorProcStart: Hle(),
    writtenAt: Date.now(),
    workers: workers
  };
  if (W() && n !== void 0) try {
    let e = await n.write(eKt(), _(r, null, 2), {
      mode: 438 & ~process.umask()
    });
    if (!e.ok) t(`writeDaemonStatus: ${e.error.code}`);
    return e.ok;
  } catch (error) {
    return t(`writeDaemonStatus: ${d(error)}`), !1;
  }
  try {
    return await gn().atomicWrite(Zqt(), _(r, null, 2)), !0;
  } catch (error) {
    return t(`writeDaemonStatus: ${d(error)}`), !1;
  }
}
async function _8r(s) {
  if (W() && s !== void 0) {
    try {
      let n = await s.delete(eKt());
      if (!n.ok) t(`removeDaemonStatus: ${n.error.code}`);
    } catch (error) {
      t(`removeDaemonStatus: ${d(error)}`);
    }
    return;
  }
  try {
    await gn().delete(Zqt());
  } catch {}
}
async function Jsr(s) {
  let n;
  if (W() && s !== void 0) {
    let i;
    try {
      i = await s.readText([eKt()]);
    } catch {
      return null;
    }
    if (!i.ok) return null;
    let c = i.value.items[0];
    if (!c.found) return null;
    n = c.value;
  } else try {
    n = await gn().read(Zqt());
  } catch {
    return null;
  }
  let r = pt(n, !1);
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null) return null;
  try {
    process.kill(e.supervisorPid, 0);
  } catch {
    return null;
  }
  let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : void 0;
  if (!(await ek(e.supervisorPid, a))) return null;
  return r;
}
var m = 4096,
  p = 200,
  Qsr = 64,
  f = 32;
function S(s) {
  let n = [],
    r = u({
      servedFolder: u({
        dir: o().min(1).max(m),
        sessions: Bu().positive().max(Qsr)
      })
    });
  for (let e of Object.values(s?.workers ?? {})) {
    let a = r.safeParse(e);
    if (a.success) n.push(a.data.servedFolder);
  }
  return n;
}
async function b8r(s, n) {
  try {
    let r = await Jsr(n);
    return r?.supervisorPid === s ? S(r) : [];
  } catch (error) {
    t(`readServedFolders: ${d(error)}`);
  }
  return [];
}
function S8r(s) {
  let r = s.slice(0, f).map(({
      dir: dir,
      sessions: sessions
    }) => `serving tools: ${sessions} ${O(sessions, "cloud session")} in ${k5(Hd(dir), p)}`),
    e = s.length - r.length;
  return e > 0 ? r.concat(`serving tools: and ${e} more ${O(e, "folder")}`) : r;
}
export { Zqt, eKt, y8r, _8r, Jsr, Qsr, b8r, S8r };