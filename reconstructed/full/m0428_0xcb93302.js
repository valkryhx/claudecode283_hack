// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  l
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  b,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  Se
} from "B:/~BUN/root/chunk-4p6z9qq1.js";
import {
  I,
  Sxe
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  Qt
} from "B:/~BUN/root/chunk-bpp59nyd.js";
import {
  Ae
} from "B:/~BUN/root/chunk-5w2ecytn.js";
import {
  M_,
  _J
} from "B:/~BUN/root/chunk-83yxmdy5.js";
import {
  ct
} from "B:/~BUN/root/chunk-tsjnk8ma.js";
import {
  cde
} from "B:/~BUN/root/chunk-w5bkq1td.js";
import {
  o,
  VS,
  u
} from "B:/~BUN/root/chunk-n8qdr73v.js";
import {
  join as d
} from "path";

function Sht() {
  return d(Se(), "daemon.status.json")
}

function wht() {
  return Ae.state("daemon-status")
}
async function CQn(s, n) {
  let r = {
    supervisorPid: process.pid,
    supervisorProcStart: _J(),
    writtenAt: Date.now(),
    workers: s
  };
  if (H() && n !== void 0) try {
    let e = await n.write(wht(), b(r, null, 2), {
      mode: 438 & ~process.umask()
    });
    if (!e.ok) t(`writeDaemonStatus: ${e.error.code}`);
    return e.ok
  } catch (e) {
    return t(`writeDaemonStatus: ${l(e)}`), !1
  }
  try {
    return await Qt().atomicWrite(Sht(), b(r, null, 2)), !0
  } catch (e) {
    return t(`writeDaemonStatus: ${l(e)}`), !1
  }
}
async function RQn(s) {
  if (H() && s !== void 0) {
    try {
      let n = await s.delete(wht());
      if (!n.ok) t(`removeDaemonStatus: ${n.error.code}`)
    } catch (n) {
      t(`removeDaemonStatus: ${l(n)}`)
    }
    return
  }
  try {
    await Qt().delete(Sht())
  } catch {}
}
async function Zbn(s) {
  let n;
  if (H() && s !== void 0) {
    let i;
    try {
      i = await s.readText([wht()])
    } catch {
      return null
    }
    if (!i.ok) return null;
    let c = i.value.items[0];
    if (!c.found) return null;
    n = c.value
  } else try {
    n = await Qt().read(Sht())
  } catch {
    return null
  }
  let r = ct(n, !1);
  if (!r || typeof r !== "object") return null;
  let e = r;
  if (typeof e.supervisorPid !== "number" || typeof e.workers !== "object" || e.workers === null) return null;
  try {
    process.kill(e.supervisorPid, 0)
  } catch {
    return null
  }
  let a = typeof e.supervisorProcStart === "string" ? e.supervisorProcStart : void 0;
  if (!await M_(e.supervisorPid, a)) return null;
  return r
}
var m = 4096,
  p = 200,
  eSn = 64,
  f = 32;

function S(s) {
  let n = [],
    r = u({
      servedFolder: u({
        dir: o().min(1).max(m),
        sessions: VS().positive().max(eSn)
      })
    });
  for (let e of Object.values(s?.workers ?? {})) {
    let a = r.safeParse(e);
    if (a.success) n.push(a.data.servedFolder)
  }
  return n
}
async function AQn(s, n) {
  try {
    let r = await Zbn(n);
    return r?.supervisorPid === s ? S(r) : []
  } catch (r) {
    t(`readServedFolders: ${l(r)}`)
  }
  return []
}

function xQn(s) {
  let r = s.slice(0, f).map(({
      dir: a,
      sessions: i
    }) => `serving tools: ${i} ${I(i,"cloud session")} in ${cde(Sxe(a),p)}`),
    e = s.length - r.length;
  return e > 0 ? r.concat(`serving tools: and ${e} more ${I(e,"folder")}`) : r
}
export {
  Sht,
  wht,
  CQn,
  RQn,
  Zbn,
  eSn,
  AQn,
  xQn
};
