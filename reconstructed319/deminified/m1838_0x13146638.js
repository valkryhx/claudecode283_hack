// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { b, f } from "B:/~BUN/root/chunk-drx9cnw1.js";
import { d, k, tr, K, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Pe } from "B:/~BUN/root/chunk-vz9zea4j.js";
import { H } from "B:/~BUN/root/chunk-game8aqv.js";
import { J, zt } from "B:/~BUN/root/chunk-r5zmhp23.js";
import { W } from "B:/~BUN/root/chunk-ppmmt0c3.js";
import { l } from "B:/~BUN/root/chunk-mb9chr1y.js";
import { g, m, c } from "B:/~BUN/root/chunk-3z3yrbk4.js";
import { vt, sg, t, _, h0 } from "B:/~BUN/root/chunk-2pp12te6.js";
import { Ue } from "B:/~BUN/root/chunk-eev762xg.js";
import { P, Q, tt } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { St } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { qO, zn } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { $c, wVn, i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { fxo, QNr, pxo, ixe, GUs, ndn, rdn, Kea, qea, jO, vC, $A, BR, ba } from "B:/~BUN/root/chunk-wthaftk0.js";
import { au } from "B:/~BUN/root/chunk-gq1er5y2.js";
import { ELr, TLr, Ape, jAe, Cc, c5 } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { jr, I1s, bxe, GO, fo, sme } from "B:/~BUN/root/chunk-46ahshhq.js";
import { pae, rY, ut, lt } from "B:/~BUN/root/chunk-3mm90xb6.js";
import { zc } from "B:/~BUN/root/chunk-wt8tyqt4.js";
import { aQo, lQo, nhi as onFailure, rhi as onConnectAnswer, PJr, mQo, D6t, shi, IJr, lEe, Vo, sIt } from "B:/~BUN/root/chunk-27h4st9h.js";
import { Xwo } from "B:/~BUN/root/chunk-1ks9vs37.js";
import { lFr } from "B:/~BUN/root/chunk-1g25msn4.js";
import { xV, Bet, es } from "B:/~BUN/root/chunk-0s9zh2h6.js";
import { AU } from "B:/~BUN/root/chunk-xgg9zsk6.js";
import { Kvr } from "B:/~BUN/root/chunk-3kdxvefh.js";
import { qr } from "B:/~BUN/root/chunk-vmp6vbba.js";
import { ryn } from "B:/~BUN/root/chunk-k7x9nacc.js";
import { yVt, vVr, vjo } from "B:/~BUN/root/chunk-mp7wp3ne.js";
import { FOe, HOe, $Oe } from "B:/~BUN/root/chunk-eqb5w0h9.js";
import { fZs } from "B:/~BUN/root/chunk-jq1q6cvf.js";
import { IXn, MXn } from "B:/~BUN/root/chunk-cy64s7x4.js";
import { SQe } from "B:/~BUN/root/chunk-xdzcgcjh.js";
import { jqi, jQe, Wqi, Y$n, Vqi, l4, qqi } from "B:/~BUN/root/chunk-xxhz3cx4.js";
import { zd } from "B:/~BUN/root/chunk-79595s9y.js";
import { nt } from "B:/~BUN/root/chunk-tq5dzbq9.js";
import { kd } from "B:/~BUN/root/chunk-jbjsy1k0.js";
import { EY } from "B:/~BUN/root/chunk-bnk7yrnd.js";
import { X509Certificate as Bi } from "crypto";
import { execFile as Oi } from "child_process";
import { constants as Ni, statSync as Di } from "fs";
import { access as Ii, mkdir as Pt, open as $i, readFile as be, rmdir as rr, stat as yr, unlink as he, writeFile as Ve } from "fs/promises";
import { homedir as Rt, tmpdir as Mi } from "os";
import { delimiter as Re, join as q, parse as Li } from "path";
var Wt = ["registry.npmjs.org", "jsr.io", "npm.jsr.io", "pypi.org", "files.pythonhosted.org", "index.crates.io", "proxy.golang.org"];
import { X509Certificate as Or } from "crypto";
import { open as Nr } from "fs/promises";
var Dr = 65536;
function Ce(e) {
  let blocks = e.match(jO);
  if (!blocks) return {
    ok: !1,
    reason: "no certificate block"
  };
  if (!e.split(jO).every((item, index) => index === blocks.length ? /^[ \t\r\n]*$/.test(item) : index === 0 && item === "" || /^[ \t\r\n]*\n$/.test(item))) return {
    ok: !1,
    reason: "something other than certificate blocks that each start a line"
  };
  let ders = [];
  for (let a of blocks) {
    let s = a.replace(/^-----BEGIN CERTIFICATE-----/, "").replace(/-----END CERTIFICATE-----$/, "");
    if (!/^[A-Za-z0-9+/= \t\r\n]*$/.test(s)) return {
      ok: !1,
      reason: "a certificate block holds more than base64"
    };
    try {
      ders.push(new Or(a).raw.toString("base64"));
    } catch {
      return {
        ok: !1,
        reason: "a certificate block does not parse"
      };
    }
  }
  return {
    ok: !0,
    blocks: blocks,
    ders: ders
  };
}
function pe(e, n) {
  if (e === n) return "same";
  let r = Ce(e),
    o = Ce(n);
  if (!r.ok || !o.ok || r.ders.length !== o.ders.length) return "different";
  if (r.ders.every((item, index) => item === o.ders[index])) return "same";
  return r.ders.length === 2 && r.ders[0] === o.ders[1] && r.ders[1] === o.ders[0] ? "swapped" : "different";
}
async function de(e) {
  let n;
  try {
    n = await Nr(e, Cc());
    let r = await n.stat();
    if (!r.isFile() || r.size > Dr) return {
      state: "unreadable"
    };
    let o = Buffer.alloc(r.size + 1),
      {
        bytesRead: bytesRead
      } = await n.read(o, 0, o.length, 0);
    if (bytesRead !== r.size) return {
      state: "failed"
    };
    return {
      state: "read",
      text: new TextDecoder("utf-8", {
        fatal: !0,
        ignoreBOM: !0
      }).decode(o.subarray(0, bytesRead))
    };
  } catch (error) {
    if (K(error)) return {
      state: "missing"
    };
    return {
      state: qt(error) || error instanceof TypeError ? "unreadable" : "failed"
    };
  } finally {
    await n?.close().catch(() => {});
  }
}
async function Ee(e, n) {
  let r = await de(e);
  return r.state === "read" ? pe(r.text, n) : "different";
}
import { createHash as Lr } from "crypto";
import { isIP as Gr } from "net";
var clientProcess = "<non-linux>";
var Xt = {
  maxBusyTunnels: 1 / 0,
  tunnelIdleAfterMs: 5000,
  clientGoneIdleAfterMs: 1000,
  tunnelStalledMaxMs: 660000,
  idleTunnelFactor: 4,
  tunnelWaitTimeoutMs: 60000,
  waitingClientBufferBytes: 16384,
  abandonedNoteAfterMs: 1000,
  tunnelQueueMax: 4096,
  tunnelGateTickMs: 100,
  dialRefusedBackoffBaseMs: 250,
  dialRefusedBackoffMaxMs: 5000,
  dialRefusedMemoryMs: 30000,
  openTunnelsReportAt: 64,
  openTunnelsReportIntervalMs: 60000
};
function Jt(admit, refuse, isStalled) {
  return {
    admit: admit,
    refuse: refuse,
    isStalled: isStalled,
    state: "new",
    askedAt: 0,
    turn: 0,
    opened: !1,
    counted: !1,
    clientGone: !1,
    lastByteAt: 0,
    waitingSince: 0,
    hasWaited: !1
  };
}
function Yt(e, open_peak) {
  return {
    max_busy_tunnels: Number.isFinite(e) ? e : 0,
    open_peak: open_peak,
    busy_peak: 0,
    waited: 0,
    waiting_peak: 0,
    max_wait_ms: 0,
    total_wait_ms: 0,
    wait_timeouts: 0,
    left_while_waiting: 0,
    queue_overflows: 0,
    upgrades_refused_429: 0,
    upgrades_refused_503: 0,
    idle_uncounted: 0
  };
}
var Ir = ["busy_peak", "waited", "waiting_peak", "idle_uncounted", "wait_timeouts", "left_while_waiting", "queue_overflows"];
function Kt(e, generation) {
  let r = {
      generation: generation,
      limit: e.max_busy_tunnels
    },
    o = [{
      ...r,
      reason: b("open_peak"),
      count: e.open_peak,
      wait_ms: e.max_wait_ms,
      total_wait_ms: e.total_wait_ms
    }];
  for (let a of Ir) if (e[a] > 0) o.push({
    ...r,
    reason: f(a),
    count: e[a]
  });
  for (let http_status of [429, 503]) {
    let count = e[`upgrades_refused_${http_status}`];
    if (count > 0) o.push({
      ...r,
      reason: b("upgrades_refused"),
      count: count,
      http_status: http_status
    });
  }
  return o;
}
function Vt(e, n) {
  return Math.max(e + 1, Math.floor(n / 1000));
}
class Qe {
  limits;
  pooled;
  sendReport;
  now;
  enabled;
  holders = new Set();
  opened = 0;
  counted = 0;
  queue = [];
  turns = 0;
  ceiling = 1 / 0;
  probeAt = 0;
  probing = !1;
  probeStep = 1;
  refusedAt = 0;
  refusedStatus = 429;
  failedTrials = 0;
  pumping = !1;
  stopped = !1;
  ticker;
  reportTimer;
  window;
  openPeak = 0;
  busySampledAt = -1 / 0;
  busySampledOpen = 0;
  constructor(e, n, r, o = () => performance.now()) {
    this.limits = e;
    this.pooled = n;
    this.sendReport = r;
    this.now = o;
    this.enabled = Number.isFinite(e.maxBusyTunnels), this.window = Yt(e.maxBusyTunnels, 0);
  }
  request(e) {
    if (e.askedAt = this.now(), e.turn = this.turns++, !this.enabled) {
      this.admit(e);
      return;
    }
    if (this.queue.length >= this.limits.tunnelQueueMax) {
      e.state = "done", this.window.queue_overflows++, this.startReport(), e.refuse({
        why: "queue_full",
        refusedStatus: this.refusing()
      });
      return;
    }
    if (e.state = "waiting", e.waitingSince = e.askedAt, this.queue.push(e), this.pump(), e.state === "waiting") this.noteWaiting(e);
  }
  release(e) {
    if (e?.state === "waiting") return e.state = "done", this.queue.splice(this.queue.indexOf(e), 1), this.window.left_while_waiting++, this.stopTickerIfIdle(), {
      waitedMs: this.noteWaitOver(e),
      refusedStatus: this.refusing()
    };
    if (e?.state !== "holding") return;
    this.drop(e), e.state = "done", this.pump();
    return;
  }
  clientLeft(e) {
    if (e?.state === "holding") e.clientGone = !0, e.lastByteAt = this.now();
  }
  dialing(e) {
    if (e?.opened) e.opened = !1, this.opened--, this.touch(e);
  }
  tookPooled(e) {
    if (e?.state === "holding" && !e.opened) e.opened = !0, this.opened++;
  }
  dialOpened(e) {
    if (e?.state !== "holding" || e.opened) return;
    if (e.opened = !0, this.opened++, e.lastByteAt = this.now(), this.probing) {
      if (this.failedTrials = 0, this.refusedStatus === 503) this.probeStep++;
      this.ceiling = this.opened + this.pooled() + this.probeStep;
    }
    this.pump();
  }
  noteUpgradeRefused(e) {
    if (e === 429) this.window.upgrades_refused_429++;else this.window.upgrades_refused_503++;
    this.startReport();
  }
  dialRefused(e, n) {
    if (e.state !== "holding") return;
    let r = this.now();
    if (this.drop(e), this.ceiling = n === 429 ? this.opened + this.pooled() : 0, this.probing = !1, this.refusedAt = r, this.refusedStatus = n, r >= this.probeAt) {
      let a = Math.min(this.limits.dialRefusedBackoffBaseMs * 2 ** this.failedTrials, this.limits.dialRefusedBackoffMaxMs);
      this.failedTrials++, this.probeAt = r + a * (0.5 + Math.random() / 2);
    }
    e.state = "waiting", e.waitingSince = r;
    let o = 0;
    while (o < this.queue.length && this.queue[o].turn < e.turn) o++;
    this.queue.splice(o, 0, e), this.noteWaiting(e);
  }
  touch(e) {
    if (e?.state !== "holding") return;
    if (e.lastByteAt = this.now(), !e.counted) e.counted = !0, this.counted++;
  }
  tick() {
    let e = this.now();
    while (this.queue.length > 0 && e - this.queue[0].askedAt >= this.limits.tunnelWaitTimeoutMs) {
      let n = this.queue.shift();
      n.state = "done", this.window.wait_timeouts++;
      let waitedMs = this.noteWaitOver(n),
        status = this.refusing();
      n.refuse(status ? {
        why: "dial_refused",
        status: status,
        waitedMs: waitedMs
      } : {
        why: "wait_timeout",
        waitedMs: waitedMs
      });
    }
    if (this.queue.length > 0 && this.holders.size >= this.ceiling && e >= this.probeAt && this.holders.size === this.opened) this.ceiling = this.holders.size + 1, this.probing = !0, this.probeStep = 1;
    this.pump();
  }
  stop() {
    if (this.stopped) return;
    this.stopped = !0, clearInterval(this.ticker), this.ticker = void 0, this.flushReport();
  }
  snapshot() {
    let {
      maxBusyTunnels: maxBusyTunnels,
      idleTunnelFactor: idleTunnelFactor
    } = this.limits;
    return {
      maxBusyTunnels: this.enabled ? maxBusyTunnels : null,
      maxOpenTunnels: this.enabled ? maxBusyTunnels * idleTunnelFactor : null,
      busyTunnels: this.enabled ? this.counted : null,
      openTunnels: this.open(),
      openTunnelsPeak: this.openPeak,
      connectsWaitingForTunnel: this.queue.length
    };
  }
  flushReport() {
    clearTimeout(this.reportTimer), this.reportTimer = void 0;
    let window = this.window;
    if (this.window = Yt(this.limits.maxBusyTunnels, this.open()), this.window.waiting_peak = this.queue.length, this.isWorthReporting(window)) this.sendReport(window);
    if (this.isWorthReporting(this.window)) this.startReport();
  }
  open() {
    return this.holders.size + this.pooled();
  }
  admit(e) {
    e.state = "holding", e.counted = !0, e.lastByteAt = this.now(), this.holders.add(e), this.counted++, e.admit();
    let n = this.open();
    if (n > this.openPeak) this.openPeak = n;
    if (n > this.window.open_peak) {
      if (this.window.open_peak = n, n >= this.limits.openTunnelsReportAt) this.startReport();
    }
    let lastByteAt = e.lastByteAt;
    if (n >= this.limits.openTunnelsReportAt && (lastByteAt - this.busySampledAt >= 1000 || n * 4 >= this.busySampledOpen * 5)) {
      this.busySampledAt = lastByteAt, this.busySampledOpen = n;
      let o = 0;
      for (let a of this.holders) if (!this.isIdle(a, lastByteAt)) o++;
      if (o > this.window.busy_peak) this.window.busy_peak = o;
    }
  }
  isIdle(e, n) {
    let r = n - e.lastByteAt;
    if (e.clientGone) return r >= this.limits.clientGoneIdleAfterMs;
    return e.opened && r >= this.limits.tunnelIdleAfterMs && (r >= this.limits.tunnelStalledMaxMs || !e.isStalled());
  }
  refusing() {
    return this.holders.size >= this.ceiling ? this.refusedStatus : void 0;
  }
  drop(e) {
    if (this.holders.delete(e), e.counted) e.counted = !1, this.counted--;
    if (e.opened) e.opened = !1, this.opened--;
  }
  findRoom() {
    let e = this.now();
    if (e - this.refusedAt > this.limits.dialRefusedMemoryMs) this.ceiling = 1 / 0, this.probing = !1, this.failedTrials = 0;
    let {
      maxBusyTunnels: maxBusyTunnels_2,
      idleTunnelFactor: idleTunnelFactor_2
    } = this.limits;
    if (this.pooled() === 0 && this.holders.size >= Math.min(this.ceiling, maxBusyTunnels_2 * idleTunnelFactor_2)) return !1;
    if (this.counted < maxBusyTunnels_2) return !0;
    for (let o of this.holders) if (o.counted && this.isIdle(o, e)) o.counted = !1, this.counted--, this.window.idle_uncounted++;
    return this.counted < maxBusyTunnels_2;
  }
  pump() {
    if (this.pumping || this.stopped) return;
    this.pumping = !0;
    try {
      while (this.queue.length > 0 && this.findRoom()) {
        let e = this.queue.shift();
        this.noteWaitOver(e), this.admit(e);
      }
    } finally {
      this.pumping = !1;
    }
    this.stopTickerIfIdle();
  }
  noteWaiting(e) {
    if (!e.hasWaited) e.hasWaited = !0, this.window.waited++;
    if (this.queue.length > this.window.waiting_peak) this.window.waiting_peak = this.queue.length;
    if (this.startReport(), !this.stopped) this.ticker ??= setInterval($r, this.limits.tunnelGateTickMs, this);
  }
  noteWaitOver(e) {
    let n = this.now();
    this.window.total_wait_ms += Math.round(n - e.waitingSince);
    let r = Math.round(n - e.askedAt);
    if (r > this.window.max_wait_ms) this.window.max_wait_ms = r;
    return r;
  }
  stopTickerIfIdle() {
    if (this.queue.length === 0) clearInterval(this.ticker), this.ticker = void 0;
  }
  isWorthReporting(e) {
    return e.open_peak >= this.limits.openTunnelsReportAt || e.waiting_peak > 0 || e.queue_overflows > 0 || e.left_while_waiting > 0 || e.upgrades_refused_429 > 0 || e.upgrades_refused_503 > 0;
  }
  startReport() {
    if (!this.stopped) this.reportTimer ??= setTimeout(Mr, this.limits.openTunnelsReportIntervalMs, this);
  }
}
function $r(e) {
  e.tick();
}
function Mr(e) {
  e.flushReport();
}
var Qt = 524288,
  Fr = 30000,
  control = 0,
  Hr = 1,
  Ur = 2,
  Wr = 3,
  Zt = 4,
  et = 2,
  Yr = {
    openTimeoutMs: 1e4,
    openMaxAttempts: 3,
    openBackoffBaseMs: 100,
    sendHighWater: 4194304,
    sendLowWater: 1048576,
    drainPollMs: 50,
    sendPauseAfterPendingBytes: 0,
    pendingBytesCap: 33554432,
    sendStallTimeoutMs: 180000,
    receiveHighWater: 4194304,
    receiveLowWater: 1048576,
    downloadQueuedReportBytes: 16777216,
    uploadQueuedReportBytes: 16777216,
    poolMax: 4,
    poolIdleTtlMs: 1e4,
    poolMaxAgeMs: 2700000,
    finGraceMs: 1e4,
    peerLookupWaitMs: 10
  };
function at(e) {
  let n = e.length,
    r = [],
    o = n;
  while (o > 127) r.push(o & 127 | 128), o >>>= 7;
  r.push(o);
  let uint8Array = new Uint8Array(1 + r.length + n);
  return uint8Array[0] = 10, uint8Array.set(r, 1), uint8Array.set(e, 1 + r.length), uint8Array;
}
function rt(e, n = 0) {
  let r = [16, e];
  if (n !== 0) r.push(24, n);
  return new Uint8Array(r);
}
function Xr(e) {
  let n = {
    data: e.subarray(0, 0),
    control: control,
    version: 0
  };
  return lEe(e, {
    onVarint(o, a) {
      if (o === 2) n.control = a;else if (o === 3) n.version = a;
    },
    onBytes(o, a) {
      if (o === 1) n.data = a;
    }
  }) ? n : null;
}
function Ae(e) {
  let n = ndn(e);
  if (n.startsWith("*.")) return "*." + Ae(n.slice(2));
  let r = n.replace(/\.+$/, "").toLowerCase(),
    o = rdn(r).replace(/\.+$/, "");
  return o !== "" ? o : r;
}
function Jr(e) {
  let n = e.split(".").map(Number);
  return n[0] === 10 || n[0] === 172 && n[1] >= 16 && n[1] <= 31 || n[0] === 192 && n[1] === 168 || n[0] === 100 && n[1] >= 64 && n[1] <= 127;
}
function st(e, n) {
  return e === void 0 || Kr(n, e.includeHosts);
}
function Kr(e, n) {
  let r = Ae(e);
  for (let o of n) {
    let a = Ae(o);
    if (a === "") continue;
    if (a === "*") return !0;
    if (a.startsWith("*.")) {
      let h = a.slice(1);
      if (r.endsWith(h)) return !0;
      continue;
    }
    if (!a.includes("*")) {
      if (r === a) return !0;
      continue;
    }
    if (new RegExp("^" + a.split("*").map(item => item.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("[^.]+") + "$").test(r)) return !0;
  }
  return !1;
}
function Vr(e) {
  let n = Ae(e);
  if (n === "localhost" || n === "ip6-localhost" || n === "ip6-loopback" || n === "metadata.google.internal" || n === "instance-data" || n === "instance-data.ec2.internal" || n.endsWith(".localhost")) return "blocked_hostname";
  let r = n.normalize("NFKC");
  if (r.includes("[") || r.includes(":")) return "ipv6_literal";
  let o = n.split("."),
    a = /^(0|[1-9]\d{0,2})$/;
  if (!(o.length === 4 && o.every(item => a.test(item) && Number(item) <= 255))) return qea(n) !== null || Kea(n) ? "noncanonical_ipv4" : null;
  let h = o.map(Number);
  if (h[0] === 0) return "unspecified";
  if (h[0] === 127) return "loopback";
  if (h[0] === 169 && h[1] === 254) return "link_local";
  if (n === "100.100.100.200") return "metadata_alibaba";
  if (n === "168.63.129.16") return "metadata_azure";
  if (n === "192.0.0.192") return "metadata_reserved";
  return null;
}
function zr(e) {
  if (!e) return "peer_unreadable";
  if (e.includes(":")) return Qr(e);
  let n = e.split(".").map(Number);
  if (n.length !== 4 || n.some(item => !Number.isFinite(item) || item < 0 || item > 255)) return "peer_unreadable";
  return rn(n, e);
}
function rn(e, n) {
  if (e[0] === 0) return "unspecified";
  if (e[0] === 127) return "loopback";
  if (e[0] === 169 && e[1] === 254) return "link_local";
  if (n === "100.100.100.200") return "metadata_alibaba";
  if (n === "168.63.129.16") return "metadata_azure";
  if (n === "192.0.0.192") return "metadata_reserved";
  return null;
}
function Qr(e) {
  let n = Zr(e);
  if (!n) return "peer_unreadable";
  let r = n.slice(0, 12),
    o = r.every((item, index) => item === (index === 10 || index === 11 ? 255 : 0)),
    a = r.every(item => item === 0),
    s = n[0] === 0 && n[1] === 100 && n[2] === 255 && n[3] === 155 && r.slice(4).every(item => item === 0);
  if (o || a || s) {
    let u = [n[12], n[13], n[14], n[15]],
      y = u.join(".");
    if (a && u.every(item => item === 0)) return "unspecified";
    if (a && u[0] === 0 && u[1] === 0 && u[2] === 0 && u[3] === 1) return "loopback";
    return rn(u, y);
  }
  if (((n[0] ?? 0) & 224) === 32) return null;
  if ((n[0] ?? 0) === 254 && ((n[1] ?? 0) & 192) === 128) return "link_local";
  if (((n[0] ?? 0) & 254) === 252) return "unique_local";
  return "v6_non_global";
}
function Zr(e) {
  let n = e.indexOf("%"),
    o = (n >= 0 ? e.slice(0, n) : e).toLowerCase().split("::");
  if (o.length > 2) return null;
  let a = o[0] ? o[0].split(":") : [],
    s = o.length === 2 && o[1] ? o[1].split(":") : [],
    h = o.length === 2 ? s : a,
    u = h.at(-1),
    y = [];
  if (u && u.includes(".")) {
    let R = u.split(".").map(Number);
    if (R.length !== 4 || R.some(item => !Number.isFinite(item) || item < 0 || item > 255)) return null;
    y = R, h.pop();
  }
  let p = R => {
      let v = [];
      for (let A of R) {
        if (!/^[0-9a-f]{1,4}$/.test(A)) return null;
        let B = parseInt(A, 16);
        v.push(B >> 8, B & 255);
      }
      return v;
    },
    w = p(o.length === 2 ? a : []),
    S = p(h);
  if (w === null || S === null) return null;
  let x = o.length === 2 ? w : S,
    E = o.length === 2 ? (S ?? []).concat(y) : y,
    T = 16 - x.length - E.length;
  if (T < 0 || o.length === 1 && T !== 0) return null;
  let C = x.concat(Array(T).fill(0), E);
  return C.length === 16 ? C : null;
}
function on(e, n, r) {
  let directUpstream = n.directUpstream;
  if (!directUpstream) return;
  if (directUpstream.writeBuf.length > 0) directUpstream.writeBuf.push(r), directUpstream.writeBufBytes += r.length;else {
    let a = directUpstream.write(r);
    if (a < r.length) directUpstream.writeBuf.push(r.subarray(a)), directUpstream.writeBufBytes += r.length - a;
  }
  if (directUpstream.writeBufBytes > n.limits.pendingBytesCap) {
    U(n.ctx, "direct_writebuf_cap", `direct-upstream write buffer exceeded ${n.limits.pendingBytesCap} bytes`, V(n)), n.closed = !0;
    try {
      directUpstream.end();
    } catch {}
    e.end();
  }
}
var an = "[\\u0000-\\u001f\\u007f-\\u009f]",
  regExp = new RegExp(an, "u"),
  regExp_2 = new RegExp(an, "gu");
function ne(e, n, r) {
  let o = e.badEventBudgets.get(n);
  if (!o) o = {
    bucket: $Oe(FOe, HOe),
    suppressed: 0
  }, e.badEventBudgets.set(n, o);
  if (!o.bucket.tryConsume()) return o.suppressed++, !1;
  return m("agent_proxy_request", n, o.suppressed > 0 ? {
    ...r,
    suppressed_since_last: o.suppressed
  } : r), o.suppressed = 0, !0;
}
function U(e, kind, r, o) {
  let a = {
    ts: new Date().toISOString(),
    kind: kind,
    detail: r.replace(regExp_2, "?"),
    host: o?.replace(regExp_2, "?")
  };
  if (e.failures.push(a), e.failures.length > aQo) e.failures.shift();
  e.onFailure?.(a);
}
function V(e) {
  return e.connectAuthority || void 0;
}
function sn(e, n, r, o, a, s) {
  e.write(`HTTP/1.1 ${n} ${r}\r
Content-Type: ${o}\r
Content-Length: ${Buffer.byteLength(a)}\r
` + (s === void 0 ? "" : `Retry-After: ${s}\r
`) + `Connection: close\r
\r
` + a);
}
function Z(e, n, r, o, a) {
  sn(e, n, r, "text/plain; charset=utf-8", `agent-proxy relay: ${o}
GET /__agentproxy/status on this proxy port shows proxy state and recent failures.
`, a);
}
function to(limits, pool, ctx) {
  return {
    connectBuf: Buffer.alloc(0),
    pending: [],
    pendingBytes: 0,
    startedAt: Date.now(),
    uploadBytes: 0,
    downloadBytes: 0,
    pendingPeakBytes: 0,
    uploadPauses: 0,
    uploadAborted: !1,
    connectRejected: !1,
    wsOpen: !1,
    established: !1,
    closed: !1,
    connectLine: "",
    connectAuthority: "",
    clientProcess: clientProcess,
    wsAttempt: 0,
    paused: !1,
    sendStallBuffered: 0,
    sendStallSince: 0,
    readPaused: !1,
    limits: limits,
    pool: pool,
    finSeen: !1,
    localClosed: !1,
    ctx: ctx
  };
}
function no(e, n, r, o) {
  let a = () => new Promise((s, h) => {
    let u = !1,
      y = gn(e, n),
      p = setTimeout(() => {
        if (u) return;
        u = !0;
        try {
          y.close();
        } catch {}
        h(Error("handshake timeout"));
      }, r);
    y.onopen = () => {
      if (u) return;
      u = !0, clearTimeout(p);
      try {
        y.close();
      } catch {}
      s();
    }, y.onerror = w => {
      if (u) return;
      u = !0, clearTimeout(p), h(Error(w?.message ?? "WebSocket error"));
    };
  });
  return (async () => {
    let s;
    for (let h = 0; h < o; h++) try {
      await a();
      return;
    } catch (error) {
      if (s = error, h + 1 < o) await J(Math.min(200 * 2 ** h, 2000));
    }
    throw s;
  })();
}
var ro = 1048576,
  oo = 33554432;
function io(e) {
  return new Promise((n, r) => {
    let o = !1,
      a = Buffer.alloc(0),
      s = Bun.listen({
        hostname: "127.0.0.1",
        port: 0,
        socket: {
          data(w, S) {
            if (o) return;
            a = Buffer.concat([a, S]);
            let x = a.indexOf(`\r
\r
`);
            if (x < 0) return;
            let E = /sec-websocket-key: *(\S+)/i.exec(a.subarray(0, x).toString("latin1"))?.[1] ?? "",
              T = Lr("sha1").update(E + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").digest("base64");
            if (w.write(`HTTP/1.1 101 Switching Protocols\r
Upgrade: websocket\r
Connection: Upgrade\r
Sec-WebSocket-Accept: ${T}\r
\r
`), o = !0, typeof w.pause === "function") w.pause();
          }
        }
      }),
      h = !1,
      u = w => {
        if (h) return;
        h = !0, clearTimeout(y);
        try {
          p.close();
        } catch {}
        if (s.stop(!0), w instanceof Error) r(w);else n(w);
      },
      y = setTimeout(w => w(Error("handshake timeout")), e, u),
      p = new globalThis.WebSocket(`ws://127.0.0.1:${s.port}/`);
    p.binaryType = "arraybuffer", p.onerror = () => u(Error("WebSocket error")), p.onclose = () => u(Error("closed before the check completed")), p.onopen = () => {
      let uint8Array_2 = new Uint8Array(ro);
      try {
        for (let S = 0; S < oo; S += uint8Array_2.length) if (p.send(uint8Array_2), p.bufferedAmount > 0) {
          u(!0);
          return;
        }
      } catch {
        u(Error("send failed"));
        return;
      }
      u(!1);
    };
  });
}
async function un(e) {
  let n = e.getToken ?? (() => e.token),
    r = {
      connectHeader: () => "Basic " + Buffer.from(`${e.sessionId}:${n()}`).toString("base64"),
      wsHeader: () => `Bearer ${n()}`
    },
    o = {
      ...Yr,
      ...e.limits
    },
    a = [],
    s = 0,
    h = {
      statusProvider: e.statusProvider,
      failures: [],
      onFailure: e.onFailure,
      onConnectAnswer: e.onConnectAnswer,
      downloadQueuedBytes: 0,
      downloadQueuedPeakBytes: 0,
      uploadPausedClients: 0,
      uploadPauses: 0,
      selective: e.selective,
      upstreamOpened: !1,
      badEventBudgets: new Map(),
      gate: new Qe({
        ...Xt,
        ...e.tunnelGateLimits
      }, () => a.length, p => {
        s = Vt(s, Date.now());
        for (let w of Kt(p, s)) l("tengu_agent_proxy_open_tunnels", w);
      })
    },
    u = so(e.wsUrl, r, o, h, a);
  function runStartupChecks() {
    no(e.wsUrl, r, o.openTimeoutMs, o.openMaxAttempts).then(() => {
      t("[agent-proxy] startup reachability probe: ok");
    }).catch(w => {
      if (h.upstreamOpened) {
        t(`[agent-proxy] startup reachability probe failed (${w?.message ?? String(w)}) after a tunnel already opened; ignoring`, {
          level: "warn"
        });
        return;
      }
      h.startupError = `hosted agent-proxy unreachable at startup: ${w?.message ?? String(w)}. Tunneled CONNECTs get one dial attempt and return 502 if that fails, until one reaches upstream (which clears this). A dial refused as busy may wait, then return 429 or 503. Inference is force-tunneled, so a session without the hosted proxy is non-functional regardless. Check network egress to the CCR base URL.`.replace(regExp_2, "?"), t(`[agent-proxy] ${h.startupError}`, {
        level: "error"
      }), c("agent_proxy_init", "agent_proxy_startup_probe_failed");
    });
    let p;
    if (h.checkBufferedAmount = () => p ??= io(o.openTimeoutMs).then(w => {
      if (h.bufferedAmountTrusted = w, !w) t("[agent-proxy] WebSocket.bufferedAmount stays 0 with bytes queued: the upload gate cannot engage on this runtime", {
        level: "warn"
      }), c("agent_proxy_init", "agent_proxy_buffered_amount_untrusted");
    }).catch(w => {
      t(`[agent-proxy] bufferedAmount self-check did not run: ${w?.message ?? String(w)}`, {
        level: "warn"
      });
    }), h.upstreamOpened) h.checkBufferedAmount();
  }
  return t(`[agent-proxy] relay listening on 127.0.0.1:${u.port}`), {
    ...u,
    runStartupChecks: runStartupChecks
  };
}
function en(e) {
  if (e.ctx.downloadQueuedBytes -= e.writeBufBytes, e.writeBufBytes = 0, e.writeBuf = [], Me(e), ce(e), e.writeBufPeakBytes > e.limits.receiveHighWater || e.writeBufPeakBytes >= e.limits.downloadQueuedReportBytes) l("tengu_agent_proxy_download_queue", {
    download_queued_peak_bytes: e.writeBufPeakBytes
  });
  if (e.writeBufPeakBytes = 0, e.uploadPauses > 0 || e.pendingPeakBytes >= e.limits.uploadQueuedReportBytes) l("tengu_agent_proxy_upload_queue", {
    upload_queued_peak_bytes: e.pendingPeakBytes,
    upload_pauses: e.uploadPauses,
    upload_aborted: e.uploadAborted
  });
  e.pendingPeakBytes = 0, e.uploadPauses = 0;
}
function ao() {
  return "pause" in globalThis.WebSocket.prototype;
}
function so(e, n, r, o, a) {
  let s = [],
    h = Bun.listen({
      hostname: "127.0.0.1",
      port: 0,
      socket: {
        open(u) {
          if (sIt("relay_connections"), u.data = {
            ...to(r, a, o),
            writeBuf: [],
            writeBufBytes: 0,
            writeBufPeakBytes: 0,
            endAfterDrain: !1,
            destroyAfterDrain: !1
          }, typeof u.pause === "function") u.data.clientRead = u;
        },
        data(u, y) {
          let p = u.data;
          if (p.closed) return;
          let w = {
            write: S => {
              let x = typeof S === "string" ? Buffer.from(S, "utf8") : S,
                E = p.writeBuf.length > 0 ? 0 : u.write(x);
              if (E < 0 || E === x.length) return;
              let T = x.subarray(E);
              if (p.writeBuf.push(T), p.writeBufBytes += T.length, p.ctx.downloadQueuedBytes += T.length, p.writeBufBytes > p.writeBufPeakBytes) p.writeBufPeakBytes = p.writeBufBytes;
              if (p.ctx.downloadQueuedBytes > p.ctx.downloadQueuedPeakBytes) p.ctx.downloadQueuedPeakBytes = p.ctx.downloadQueuedBytes;
              if (p.writeBufBytes > p.limits.receiveHighWater) ho(p);
            },
            queuedBytes: () => p.writeBufBytes,
            end: () => {
              if (ce(p), p.writeBuf.length > 0) {
                p.endAfterDrain = !0;
                return;
              }
              u.end();
            },
            destroy: () => {
              if (ce(p), p.writeBuf.length > 0) {
                p.destroyAfterDrain = !0;
                return;
              }
              u.terminate();
            }
          };
          p.client = w, co(w, p, y, e, n);
        },
        drain(u) {
          let y = u.data;
          while (y.writeBuf.length > 0) {
            let p = y.writeBuf[0],
              w = u.write(p);
            if (w < 0) break;
            if (y.writeBufBytes -= w, y.ctx.downloadQueuedBytes -= w, w < p.length) {
              y.writeBuf[0] = p.subarray(w);
              break;
            }
            y.writeBuf.shift();
          }
          if (y.writeBufBytes <= y.limits.receiveLowWater) Me(y);
          if (y.writeBuf.length > 0) return;
          if (y.destroyAfterDrain) {
            y.destroyAfterDrain = !1, u.terminate();
            return;
          }
          if (y.endAfterDrain) y.endAfterDrain = !1, u.end();
        },
        close(u) {
          let y = u.data;
          if (en(y), cn(y)) return;
          if (y.localClosed && y.finCloseTimer) return;
          if (!y.closed && hn(y)) return;
          te(y);
        },
        error(u, y) {
          t(`[agent-proxy] client socket error: ${y.message}`);
          let p = u.data;
          if (en(p), p.localClosed && p.finCloseTimer) return;
          te(p);
        }
      }
    });
  return {
    port: h.port,
    stop: () => {
      o.gate.stop(), bo(a), h.stop(!0);
    }
  };
}
async function uo(e, n) {
  let [r] = await Promise.all([(async () => n.ctx.statusProvider?.())().catch(o => {
    t(`[agent-proxy] GET /__agentproxy/status: could not read the session's proxy state (${o instanceof Error ? o.message : String(o)}); answered with the relay's own fields only`, {
      level: "warn"
    });
    return;
  }), n.ctx.checkBufferedAmount?.()]);
  try {
    sn(e, 200, "OK", "application/json", _(lo(n, r), null, 2) + `
`), n.clientRead?.resume(), e.end();
  } catch (error) {
    t(`[agent-proxy] GET /__agentproxy/status: could not send the answer (${error instanceof Error ? error.message : String(error)}); closing the connection`, {
      level: "warn"
    }), e.destroy();
  }
}
function lo(e, n) {
  return {
    ...n,
    startupError: e.ctx.startupError,
    recentRelayFailures: e.ctx.failures,
    downloadQueuedBytes: e.ctx.downloadQueuedBytes,
    downloadQueuedPeakBytes: e.ctx.downloadQueuedPeakBytes,
    downloadReceivePauseSupported: ao(),
    downloadReceiveGateEnabled: Number.isFinite(e.limits.receiveHighWater),
    uploadPausedClients: e.ctx.uploadPausedClients,
    uploadPauses: e.ctx.uploadPauses,
    uploadPauseSupported: e.clientRead !== void 0,
    uploadGateEnabled: Number.isFinite(e.limits.sendPauseAfterPendingBytes),
    bufferedAmountTrusted: e.ctx.bufferedAmountTrusted ?? null,
    ...e.ctx.gate.snapshot()
  };
}
function co(e, n, r, o, a) {
  if (!n.ws && !n.tunnel && !n.directUpstream && !n.directDialing) {
    if (n.connectBuf = Buffer.concat([n.connectBuf, r]), n.connectBuf[0] === 22) {
      if (ne(n.ctx, "agent_proxy_request_tls_to_relay")) t("[agent-proxy] client sent TLS to the relay port (HTTPS_PROXY must be an http:// URL)", {
        level: "warn"
      });
      U(n.ctx, "tls_to_relay", "client opened TLS to the relay port; HTTPS_PROXY must be an http:// URL pointing at this port"), n.closed = !0, e.end();
      return;
    }
    let s = n.connectBuf.indexOf(`\r
\r
`);
    if (s === -1) {
      if (n.connectBuf.length > 8192) n.closed = !0, Z(e, 400, "Bad Request", "request headers exceeded 8 KiB before the end of the CONNECT request"), e.end(), ne(n.ctx, "agent_proxy_request_header_too_long"), U(n.ctx, "header_too_long", "headers exceeded 8 KiB");
      return;
    }
    let h = n.connectBuf.subarray(0, s).toString("utf8"),
      u = tt(h, `\r
`),
      y = u.match(/^CONNECT\s+(\S+)\s+HTTP\/1\.[01]$/i);
    if (!y) {
      if (/^GET\s+\/__agentproxy\/status(\?\S*)?\s+HTTP\/1\.[01]$/i.test(u)) {
        n.closed = !0, n.clientRead?.pause(), uo(e, n);
        return;
      }
      n.closed = !0, Z(e, 405, "Method Not Allowed", "this proxy only accepts HTTPS CONNECT tunnels. Plain-HTTP/absolute-form requests are not supported \u2014 common causes are axios releases before 1.16.1 (broken HTTPS proxy handling) or a tool configured with HTTP_PROXY pointing at this relay."), e.end(), ne(n.ctx, "agent_proxy_request_not_connect");
      let [x = "", E = ""] = u.split(/\s+/),
        T = x;
      try {
        let C = new URL(E);
        T = `${x} ${C.protocol}//${C.host}`;
      } catch {}
      U(n.ctx, "not_connect", `non-CONNECT request: ${T.slice(0, 120)}`);
      return;
    }
    n.connectLine = u, n.connectAuthority = y[1] ?? "";
    let p = n.connectBuf.subarray(s + 4);
    if (p.length > 0) {
      if (Ze(e, n, Buffer.from(p)), n.closed) return;
    }
    n.connectBuf = Buffer.alloc(0);
    let selective = n.ctx.selective,
      connectAuthority = n.connectAuthority;
    if (selective && connectAuthority) {
      let x = connectAuthority.lastIndexOf(":"),
        E = x > 0 ? connectAuthority.slice(0, x) : connectAuthority,
        T = Ae(E.replace(/^\[|\]$/g, ""));
      if (regExp.test(T)) U(n.ctx, "selective_invalid_host", "control byte in CONNECT host", T);else if (Gr(T) === 4 && !Jr(T)) ;else if (!st(selective, T)) {
        let C = x > 0 ? Number(connectAuthority.slice(x + 1)) : 443;
        _o(e, n, T, C);
        return;
      }
    }
    n.tunnel = Jt(() => yo(e, n, o, a), x => mo(e, n, x), () => n.paused || n.pendingBytes > 0 || e.queuedBytes() > 0 || n.ws?.isPaused === !0 || (n.ws?.bufferedAmount ?? 0) > 0), n.ctx.gate.request(n.tunnel);
    return;
  }
  if (n.directUpstream) {
    on(e, n, r);
    return;
  }
  if (n.directDialing) {
    Ze(e, n, Buffer.from(r));
    return;
  }
  if (!n.wsOpen || n.paused) {
    Ze(e, n, Buffer.from(r));
    let s = n.tunnel?.state === "waiting" ? Math.max(n.limits.sendPauseAfterPendingBytes, n.ctx.gate.limits.waitingClientBufferBytes) : n.limits.sendPauseAfterPendingBytes;
    if (!n.closed && n.pendingBytes > s) go(n);
    return;
  }
  if (n.redialEligible = !1, n.ws) ct(n, n.ws, r), dn(n);
}
function Ze(e, n, r) {
  if (n.pending.push(r), n.pendingBytes += r.length, n.pendingBytes > n.pendingPeakBytes) n.pendingPeakBytes = n.pendingBytes;
  if (n.pendingBytes > n.limits.pendingBytesCap) t(`[agent-proxy] pending buffer cap (${n.limits.pendingBytesCap}) exceeded; aborting request`, {
    level: "warn"
  }), ln(e, n, "pending_overflow", n.established ? `upload aborted: more than ${n.limits.pendingBytesCap} request bytes buffered while the tunnel was not draining` : "too much request data buffered while the upstream tunnel was unavailable (pending buffer cap exceeded)");
}
function ln(e, n, r, o) {
  if (ne(n.ctx, `agent_proxy_request_${r}`), U(n.ctx, r, o, V(n)), n.closed = !0, n.uploadAborted = !0, !n.established) Z(e, 502, "Bad Gateway", o), e.end();else {
    n.pending = [], n.pendingBytes = 0;
    let a = hn(n);
    if (e.destroy(), a) return;
  }
  te(n);
}
function dn(e) {
  if (e.paused || !e.ws) return;
  if (e.ws.bufferedAmount > e.limits.sendHighWater) e.paused = !0, e.sendStallBuffered = e.ws.bufferedAmount, e.sendStallSince = Date.now(), e.drainTimer = setInterval(po, e.limits.drainPollMs, e);
}
function po(e) {
  let ws = e.ws;
  if (!ws || ws.readyState !== WebSocket.OPEN || e.closed) {
    ge(e);
    return;
  }
  let r = Date.now();
  if (ws.bufferedAmount < e.sendStallBuffered) e.sendStallBuffered = ws.bufferedAmount, e.sendStallSince = r;else if (e.readPaused && e.client && r - e.sendStallSince > e.limits.sendStallTimeoutMs) {
    ge(e);
    let o = Math.round((r - e.sendStallSince) / 1000);
    t(`[agent-proxy] tunnel accepted no request bytes for ${o}s; aborting request`, {
      level: "warn"
    }), ln(e.client, e, "upload_stalled", `upload aborted: the tunnel accepted no request bytes for ${o}s`);
    return;
  }
  if (ws.bufferedAmount > e.limits.sendLowWater) return;
  while (e.pending.length > 0 && ws.bufferedAmount <= e.limits.sendHighWater) {
    let o = e.pending.shift();
    e.pendingBytes -= o.length, e.redialEligible = !1, ct(e, ws, o);
  }
  if (e.sendStallBuffered = ws.bufferedAmount, e.sendStallSince = r, e.pending.length === 0) e.paused = !1, ge(e), ce(e);
}
function ge(e) {
  if (e.drainTimer) clearInterval(e.drainTimer), e.drainTimer = void 0;
}
function go(e) {
  if (e.readPaused || !e.clientRead) return;
  e.readPaused = !0, e.uploadPauses++, e.ctx.uploadPausedClients++, e.ctx.uploadPauses++, e.clientRead.pause();
}
function ce(e) {
  if (!e.readPaused || !e.clientRead) return;
  e.readPaused = !1, e.ctx.uploadPausedClients--, e.clientRead.resume();
}
function ho(e) {
  let ws_2 = e.ws;
  if (!ws_2?.pause || ws_2.readyState !== WebSocket.OPEN || ws_2.isPaused === !0) return;
  ws_2.pause();
}
function Me(e) {
  let ws_3 = e.ws;
  if (!ws_3?.resume || ws_3.readyState !== WebSocket.OPEN || ws_3.isPaused === !1) return;
  ws_3.resume();
}
var $e = "Run fewer downloads or requests at once, or close idle connections, then retry.";
function mo(e, n, r) {
  if (n.closed) return;
  n.closed = !0;
  let {
      maxBusyTunnels: maxBusyTunnels_3,
      idleTunnelFactor: idleTunnelFactor_3,
      tunnelQueueMax: tunnelQueueMax
    } = n.ctx.gate.limits,
    h = `too many connections are open through this proxy (new ones wait once ${maxBusyTunnels_3} are busy or ${maxBusyTunnels_3 * idleTunnelFactor_3} are open)`,
    u = 429,
    y,
    p;
  switch (r.why) {
    case "wait_timeout":
      y = "tunnel_wait_timeout", p = `${h}. This connection waited ${Math.round(r.waitedMs / 1000)} s for a tunnel. ${$e}`;
      break;
    case "queue_full":
      y = "tunnel_queue_full", u = r.refusedStatus ?? 429, p = r.refusedStatus ? `the egress proxy recently refused new tunnels with HTTP ${u}, and ${tunnelQueueMax} connections are already waiting. ${u === 429 ? $e : "Retry in a few seconds."}` : `${h}, and ${tunnelQueueMax} more are already waiting. ${$e}`;
      break;
    case "dial_refused":
      u = r.status, y = "ws_open_refused", p = `this connection waited ${Math.round(r.waitedMs / 1000)} s for a tunnel, and the egress proxy recently refused new ones with HTTP ${u === 429 ? `429 (too many connections or requests). ${$e}` : "503 (busy or unavailable). Retry in a few seconds."}`;
      break;
  }
  if (ne(n.ctx, `agent_proxy_request_${y}`)) t(`[agent-proxy] CONNECT refused: ${y}`, {
    level: "warn"
  });
  Z(e, u, u === 429 ? "Too Many Requests" : "Service Unavailable", p, 5), e.end(), U(n.ctx, y, p, V(n)), te(n);
}
function yo(e, n, r, o) {
  let a = wo(n);
  if (a) {
    n.ws = a.ws, n.wsOpen = !0, n.pinger = a.pinger, n.wsMeta = a.meta, n.ctx.gate.tookPooled(n.tunnel);
    let s = n.pending.slice();
    n.redialEligible = !0;
    let h = !1,
      u = y => {
        if (h || n.closed) return;
        if (h = !0, n.redialEligible = !1, t(`[agent-proxy] pooled ws failed before response (${y}); falling through to fresh dial`), n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
        if (n.pooledDeadline = void 0, n.pinger) clearInterval(n.pinger), n.pinger = void 0;
        a.ws.onopen = a.ws.onmessage = a.ws.onerror = a.ws.onclose = null;
        try {
          a.ws.close();
        } catch {}
        if (n.ws = void 0, n.wsOpen = !1, n.wsMeta = void 0, ge(n), n.paused = !1, n.pending = [...s, ...n.pending], n.pendingBytes = n.pending.reduce((acc, item) => acc + item.length, 0), n.pendingBytes > n.pendingPeakBytes) n.pendingPeakBytes = n.pendingBytes;
        n.uploadBytes = 0, it(e, n, r, o);
      };
    n.pooledDeadline = () => {
      if (n.openTimer = void 0, n.closed || n.established) return;
      if (n.redialEligible) {
        u("pooled ws unresponsive");
        return;
      }
      n.closed = !0, ne(n.ctx, "agent_proxy_request_ws_error"), Z(e, 502, "Bad Gateway", "the pooled tunnel to the CCR agent-proxy became unresponsive before a response was received"), e.end(), U(n.ctx, "ws_error", "pooled tunnel unresponsive before first response", V(n)), te(n);
    }, n.openTimer = setTimeout(Po, n.limits.openTimeoutMs, n), fn(e, n, a.ws, u), pn(n, a.ws, o.connectHeader());
    return;
  }
  it(e, n, r, o);
}
function _o(e, n, hostname, port) {
  let a = Vr(hostname);
  if (a) {
    n.closed = !0, Z(e, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${hostname} (${a})`), e.end(), ne(n.ctx, "agent_proxy_direct_blocked_" + a), U(n.ctx, "direct_blocked", a, V(n));
    return;
  }
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    n.closed = !0, Z(e, 400, "Bad Request", "invalid CONNECT port"), e.end(), ne(n.ctx, "agent_proxy_request_bad_connect_port"), U(n.ctx, "bad_connect_port", "invalid CONNECT port", V(n));
    return;
  }
  n.directDialing = !0;
  let s = !1,
    h = setTimeout(() => {
      if (n.closed) return;
      s = !0, n.closed = !0, n.directDialing = !1, Z(e, 504, "Gateway Timeout", `agent-proxy selective relay: direct dial to ${hostname}:${port} timed out after ${n.limits.openTimeoutMs}ms`), e.end(), U(n.ctx, "direct_dial_timeout", `${hostname}:${port}`, V(n));
    }, n.limits.openTimeoutMs);
  Bun.connect({
    hostname: hostname,
    port: port,
    socket: {
      open(u) {
        if (clearTimeout(h), n.closed || s) {
          u.end();
          return;
        }
        let y = zr(u.remoteAddress);
        if (y) {
          u.end(), n.closed = !0, n.directDialing = !1, Z(e, 403, "Forbidden", `agent-proxy selective relay: normal-networking refused ${hostname} ` + `\u2014 resolved to a blocked address (${y})`), e.end(), ne(n.ctx, "agent_proxy_direct_peer_blocked_" + y), U(n.ctx, "direct_peer_blocked", y, V(n));
          return;
        }
        n.directUpstream = {
          write: p => u.write(p),
          end: () => u.end(),
          writeBuf: [],
          writeBufBytes: 0
        }, n.directDialing = !1, e.write(`HTTP/1.1 200 Connection Established\r
\r
`), n.established = !0;
        for (let p of n.pending) on(e, n, p);
        n.pending = [], n.pendingBytes = 0;
      },
      data(u, y) {
        if (n.closed) return;
        e.write(y);
      },
      drain() {
        let directUpstream_2 = n.directUpstream;
        if (!directUpstream_2) return;
        while (directUpstream_2.writeBuf.length > 0) {
          let y = directUpstream_2.writeBuf[0];
          if (!y) {
            directUpstream_2.writeBuf.shift();
            continue;
          }
          let p = directUpstream_2.write(y);
          if (directUpstream_2.writeBufBytes -= p, p < y.length) {
            directUpstream_2.writeBuf[0] = y.subarray(p);
            return;
          }
          directUpstream_2.writeBuf.shift();
        }
      },
      close() {
        if (!n.closed) n.closed = !0, e.end();
      },
      error(u, y) {
        if (clearTimeout(h), n.closed) return;
        if (n.closed = !0, !n.established) Z(e, 502, "Bad Gateway", `normal-networking dial failed: ${y?.message ?? String(y)}`), e.end();else e.destroy();
        U(n.ctx, n.established ? "direct_upstream_error" : "direct_dial_failed", y?.message ?? String(y), V(n));
      }
    }
  }).catch(u => {
    if (clearTimeout(h), n.directDialing = !1, n.closed) return;
    n.closed = !0, Z(e, 502, "Bad Gateway", `normal-networking dial failed: ${u?.message ?? String(u)}`), e.end(), U(n.ctx, "direct_dial_failed", u?.message ?? String(u), V(n));
  });
}
function wo(e) {
  let {
    pool: pool_2,
    limits: limits_2
  } = e;
  while (pool_2.length > 0) {
    let o = pool_2.pop();
    if (o.ws.readyState !== WebSocket.OPEN) {
      clearInterval(o.pinger);
      continue;
    }
    if (Date.now() - o.idleSince > limits_2.poolIdleTtlMs || Date.now() - o.meta.openedAt > limits_2.poolMaxAgeMs) {
      clearInterval(o.pinger);
      try {
        o.ws.close();
      } catch {}
      continue;
    }
    return o;
  }
  return;
}
function cn(e) {
  let {
    ws: ws_4,
    wsMeta: r
  } = e;
  if (!ws_4 || !r?.v2 || !e.finSeen || ws_4.readyState !== WebSocket.OPEN || !e.established || e.closed || !e.pinger || e.pool.length >= e.limits.poolMax || Date.now() - r.openedAt > e.limits.poolMaxAgeMs) return !1;
  ge(e), Me(e), ce(e), ws_4.onmessage = null, ws_4.onerror = null;
  let pool_3 = e.pool;
  return ws_4.onclose = () => To(pool_3, ws_4), pool_3.push({
    ws: ws_4,
    pinger: e.pinger,
    idleSince: Date.now(),
    meta: r
  }), e.ws = void 0, e.pinger = void 0, e.wsMeta = void 0, e.ctx.gate.release(e.tunnel), !0;
}
function To(e, n) {
  let r = e.findIndex(item => item.ws === n);
  if (r >= 0) clearInterval(e[r].pinger), e.splice(r, 1);
}
function bo(e) {
  for (let n of e) {
    clearInterval(n.pinger), n.ws.onclose = null;
    try {
      n.ws.close();
    } catch {}
  }
  e.length = 0;
}
function fn(e, n, r, o) {
  r.onmessage = a => {
    let s = a.data instanceof ArrayBuffer ? new Uint8Array(a.data) : new Uint8Array(Buffer.from(a.data)),
      h = Xr(s);
    if (!h) return;
    if (h.control !== control) {
      So(e, n, r, h);
      return;
    }
    if (h.data.length > 0) {
      if (!n.wsMeta?.v2) {
        dt(e, n, "server sent data before HELLO_ACK");
        return;
      }
      if (n.localClosed) {
        n.ctx.gate.touch(n.tunnel);
        return;
      }
      if (!n.established) {
        n.established = !0;
        let u = Buffer.from(h.data.subarray(0, 16)).toString("utf8").match(/^HTTP\/1\.[01] ([45]\d\d)/);
        if (u) n.connectRejected = !0, U(n.ctx, "connect_rejected", `gateway answered ${u[1]} to CONNECT (policy denial or upstream failure)`, V(n));
        if (n.ctx.onConnectAnswer?.(n.connectAuthority, h.data), n.redialEligible = !1, n.pooledDeadline) {
          if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
          n.pooledDeadline = void 0;
        }
        g("agent_proxy_request");
      }
      n.downloadBytes += h.data.length, sIt("relay_bytes", h.data.length), n.ctx.gate.touch(n.tunnel), e.write(h.data);
    }
  }, r.onerror = a => {
    let s = "message" in a ? String(a.message) : "websocket error";
    if (t(`[agent-proxy] ws error: ${s}`), n.closed) return;
    if (o && n.redialEligible && !n.established) {
      o(`ws error: ${s}`);
      return;
    }
    if (n.closed = !0, n.localClosed) {
      te(n);
      return;
    }
    if (!n.established) ne(n.ctx, "agent_proxy_request_ws_error"), Z(e, 502, "Bad Gateway", `the WebSocket tunnel to the CCR agent-proxy reported an error (${s.slice(0, 120)})`), e.end(), U(n.ctx, "ws_error", `tunnel error before response: ${s.slice(0, 120)}`, V(n));else tn(e, n, `tunnel error: ${Q(s, 120)}`);
    te(n);
  }, r.onclose = a => {
    if (n.closed) return;
    if (o && n.redialEligible && !n.established) {
      o("closed before response");
      return;
    }
    if (n.closed = !0, n.localClosed) {
      te(n);
      return;
    }
    if (!n.established) ne(n.ctx, "agent_proxy_request_ws_error"), Z(e, 502, "Bad Gateway", "the WebSocket tunnel to the CCR agent-proxy closed before a response was received"), e.end(), U(n.ctx, "ws_error", "tunnel closed before response", V(n));else tn(e, n, `tunnel closed (code ${a.code}${a.reason ? `, ${Q(a.reason, 120)}` : ""})`, a.code);
    te(n);
  };
}
function tn(e, n, r, close_code) {
  if (n.connectRejected) {
    e.destroy();
    return;
  }
  let elapsed_ms = Date.now() - n.startedAt;
  ne(n.ctx, "agent_proxy_request_ws_closed_mid_exchange", {
    elapsed_ms: elapsed_ms,
    upload_bytes: n.uploadBytes,
    download_bytes: n.downloadBytes,
    upload_paused: n.readPaused,
    pending_bytes: n.pendingBytes,
    ...(close_code !== void 0 && {
      close_code: close_code
    })
  }), U(n.ctx, "ws_closed_mid_exchange", `${r} after ${Math.round(elapsed_ms / 1000)}s; ${n.uploadBytes} B sent, ${n.downloadBytes} B received, client ${n.readPaused ? "paused" : "reading"}, ${n.pendingBytes} B still queued in the relay`, V(n)), e.destroy();
}
function So(e, n, r, o) {
  if (o.control === Ur) {
    if (n.wsMeta && !n.wsMeta.v2) {
      if (o.version !== et) {
        dt(e, n, `server acknowledged protocol version ${o.version}, expected ${et}`);
        return;
      }
      if (n.wsMeta.v2 = !0, n.helloAckDeadline) {
        if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
        n.helloAckDeadline = void 0;
      }
      t("[agent-proxy] tunnel protocol v2 negotiated");
    }
    return;
  }
  if (!n.wsMeta?.v2) return;
  if (o.control === Wr) {
    xo(e, n, r);
    return;
  }
}
function xo(e, n, r) {
  if (n.finSeen) return;
  if (n.closed) {
    if (n.finCloseTimer && r.readyState === WebSocket.OPEN) n.finSeen = !0, r.send(rt(Zt)), te(n);
    return;
  }
  if (n.finSeen = !0, r.send(rt(Zt)), n.finCloseTimer) clearTimeout(n.finCloseTimer), n.finCloseTimer = void 0;
  if (!n.localClosed) e.end();
  if (ge(n), n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
  n.pooledDeadline = void 0, n.paused = !1, n.pending = [], n.pendingBytes = 0;
  let o = cn(n);
  if (n.closed = !0, !o) te(n);
}
function pn(e, n, r) {
  let o = `${e.connectLine}\r
Proxy-Authorization: ${r}\r
X-Agent-Proxy-Client-Process: ${e.clientProcess}\r
\r
`;
  n.send(at(Buffer.from(o, "utf8")));
  for (let a of e.pending) ct(e, n, a);
  e.pending = [], e.pendingBytes = 0, ce(e), dn(e);
}
function gn(e, n) {
  let headers = {
    "Content-Type": "application/proto",
    Authorization: n.wsHeader()
  };
  sIt("relay_dials");
  let o = new globalThis.WebSocket(e, {
    headers: headers,
    proxy: BR(e),
    tls: vC(void 0) || void 0
  });
  return o.binaryType = "arraybuffer", o;
}
function it(e, n, r, o) {
  if (n.wsAttempt === 0) n.probeErrorAtDial = n.ctx.startupError;
  n.ctx.gate.dialing(n.tunnel);
  let a = gn(r, o);
  n.ws = a, n.wsOpen = !1, n.wsMeta = void 0;
  let s = () => {
      a.onopen = a.onmessage = a.onerror = a.onclose = null;
      try {
        a.close();
      } catch {}
    },
    h = u => {
      if (n.closed) return;
      if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
      s();
      let probeErrorAtDial = n.probeErrorAtDial,
        p = u.match(/(?:Expected 101 status code|Proxy connection failed): (\d{3})\b/)?.[1],
        w = p === "429" ? 429 : p === "503" ? 503 : void 0;
      if (w !== void 0) {
        if (n.ctx.gate.noteUpgradeRefused(w), n.ctx.gate.enabled && n.tunnel) {
          if (t(`[agent-proxy] ws open refused with ${w}; waiting to dial again`), n.ws = void 0, n.failOrRetry = void 0, n.ctx.gate.dialRefused(n.tunnel, w), n.pendingBytes <= n.ctx.gate.limits.waitingClientBufferBytes) ce(n);
          return;
        }
      }
      n.wsAttempt++;
      let S = probeErrorAtDial ? 1 : n.limits.openMaxAttempts;
      if (n.wsAttempt < S) {
        let E = n.limits.openBackoffBaseMs * 2 ** (n.wsAttempt - 1);
        t(`[agent-proxy] ws open failed (${u}); retry ${n.wsAttempt}/${S - 1} in ${E}ms`), n.openTimer = setTimeout(it, E, e, n, r, o);
        return;
      }
      t(`[agent-proxy] ws open failed (${u}); attempts exhausted`), n.closed = !0, ne(n.ctx, "agent_proxy_request_ws_error");
      let x = `could not open the WebSocket tunnel to the CCR agent-proxy (${u.slice(0, 120)}) after ${n.wsAttempt} ${P(n.wsAttempt, "attempt")}`;
      Z(e, 502, "Bad Gateway", probeErrorAtDial ? `${x}. Also: ${probeErrorAtDial}` : x), e.end(), U(n.ctx, "ws_open_failed", `tunnel open failed after ${n.wsAttempt} ${P(n.wsAttempt, "attempt")}: ${u.slice(0, 120)}`, V(n)), te(n);
    };
  n.failOrRetry = h, n.openTimer = setTimeout(Eo, n.limits.openTimeoutMs, n), a.onopen = () => {
    if (n.closed) return;
    if (n.openTimer) clearTimeout(n.openTimer), n.openTimer = void 0;
    n.failOrRetry = void 0, n.wsOpen = !0, n.wsMeta = {
      v2: !1,
      openedAt: Date.now()
    }, n.ctx.startupError = void 0, n.ctx.upstreamOpened = !0, fn(e, n, a), a.send(rt(Hr, et)), pn(n, a, o.connectHeader()), n.ctx.checkBufferedAmount?.(), n.pinger = setInterval(Co, Fr, a), n.helloAckDeadline = () => {
      n.openTimer = void 0, n.helloAckDeadline = void 0, dt(e, n, `no HELLO_ACK within ${n.limits.openTimeoutMs}ms`);
    }, n.openTimer = setTimeout(vo, n.limits.openTimeoutMs, n), n.ctx.gate.dialOpened(n.tunnel);
  }, a.onerror = u => {
    let y = "message" in u ? String(u.message) : "websocket error";
    t(`[agent-proxy] ws error: ${y}`), h(y);
  }, a.onclose = () => h("closed before open");
}
function Co(e) {
  if (e.readyState === WebSocket.OPEN) e.send(at(new Uint8Array(0)));
}
function Eo(e) {
  if (e.ws && e.ws.readyState === WebSocket.CONNECTING) t("[agent-proxy] ws open timeout"), e.failOrRetry?.("handshake timeout");
}
function Ao(e) {
  if (e.clientProcessWait === void 0) return;
  clearTimeout(e.clientProcessWait), e.clientProcessWait = void 0, e.clientRead?.resume();
}
function Po(e) {
  e.pooledDeadline?.();
}
function vo(e) {
  e.helloAckDeadline?.();
}
function dt(e, n, r) {
  if (n.closed) return;
  n.closed = !0, t(`[agent-proxy] tunnel protocol v2 negotiation failed: ${r}`, {
    level: "warn"
  }), ne(n.ctx, "agent_proxy_request_v2_not_acked"), Z(e, 502, "Bad Gateway", `requires tunnel protocol v2; the server did not acknowledge the negotiation (${r}) \u2014 server too old or connection broken`), e.end(), U(n.ctx, "v2_not_acked", `tunnel protocol v2 not acknowledged: ${r}`, V(n)), te(n);
}
function hn(e) {
  if (!e.wsMeta?.v2 || e.finSeen || e.localClosed || e.ws?.readyState !== WebSocket.OPEN) return !1;
  if (e.localClosed = !0, e.redialEligible = !1, e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
  return e.pooledDeadline = void 0, e.finCloseTimer = setTimeout(Ro, e.limits.finGraceMs, e), e.ctx.gate.clientLeft(e.tunnel), !0;
}
function Ro(e) {
  if (e.finCloseTimer = void 0, e.finSeen) return;
  te(e);
}
function ct(e, n, r) {
  if (n.readyState !== WebSocket.OPEN) return;
  e.uploadBytes += r.length, sIt("relay_bytes", r.length), e.ctx.gate.touch(e.tunnel);
  for (let o = 0; o < r.length; o += Qt) {
    let a = r.subarray(o, o + Qt);
    n.send(at(a));
  }
}
function te(e) {
  if (!e) return;
  if (e.directUpstream) {
    try {
      e.directUpstream.end();
    } catch {}
    e.directUpstream = void 0;
  }
  if (e.closed = !0, e.pinger) clearInterval(e.pinger);
  if (e.openTimer) clearTimeout(e.openTimer), e.openTimer = void 0;
  if (e.finCloseTimer) clearTimeout(e.finCloseTimer), e.finCloseTimer = void 0;
  if (ge(e), Me(e), ce(e), Ao(e), e.pending = [], e.pendingBytes = 0, e.failOrRetry = void 0, e.redialEligible = !1, e.pooledDeadline = void 0, e.helloAckDeadline = void 0, e.ws && e.ws.readyState <= WebSocket.OPEN) try {
    e.ws.close();
  } catch {}
  e.ws = void 0;
  let n = e.ctx.gate.release(e.tunnel);
  if (n && n.waitedMs >= e.ctx.gate.limits.abandonedNoteAfterMs && !e.uploadAborted) {
    let r = `the client closed after waiting ${Math.round(n.waitedMs / 1000)} s for a tunnel`;
    U(e.ctx, n.refusedStatus ? "ws_open_refused" : "tunnel_wait_abandoned", n.refusedStatus ? `${r}, after the egress proxy refused new ones with HTTP ${n.refusedStatus}` : `${r}, with too many connections busy`, V(e));
  }
}
import { constants as Fe } from "fs";
import { chmod as Jo, lstat as He, open as Rn, readdir as Ko, readlink as zo, rename as Qo, stat as gt, symlink as Zo, unlink as Ge } from "fs/promises";
import { basename as je, dirname as ei, join as we } from "path";
import { createHash as wn, X509Certificate as ko } from "crypto";
import { constants as Bo } from "fs";
import { chmod as Oo, lstat as Tn, mkdir as No, open as Do, readdir as Io, rename as $o, unlink as mn } from "fs/promises";
import { basename as Mo, join as Lo } from "path";
var javaHook = {
    hook: "/etc/ca-certificates/update.d/jks-keystore",
    postinst: "/var/lib/dpkg/info/ca-certificates-java.postinst",
    jar: "/usr/share/ca-certificates-java/ca-certificates-java.jar",
    knownSha256: {
      hook: ["254a87ea1f9fe37751e3ed90a79013f3424c7a5fe26bfe59fac312abff82dbda"],
      postinst: ["4d76cba4f4a8583c70bb4632e9c2c00a669396500b686c1f32cd2046a9e1e110"],
      jar: ["42a384eebe60fbe91a40d295fe5f1ff85e3a0db0d3a91016cd83994105d6b5c0"]
    },
    defaults: "/etc/default/cacerts",
    stateDir: "/var/lib/ca-certificates-java",
    dpkgStatus: "/var/lib/dpkg/status",
    dpkgUpdates: "/var/lib/dpkg/updates",
    dpkgUnincorporatedTriggers: "/var/lib/dpkg/triggers/Unincorp",
    dpkgTriggerInterest: "/var/lib/dpkg/triggers/update-ca-certificates-java",
    cacerts: "/etc/ssl/certs/java/cacerts"
  },
  Go = "changeit",
  Fo = ["pending", "fresh", "convert_pkcs12_keystore_to_jks"],
  yn = 262144,
  Ho = 33554432,
  Uo = 4194304,
  Wo = 4277010157,
  jo = 2,
  Sn = 2,
  Le = "X.509",
  xn = 20,
  Yo = /^-----(?:BEGIN ([^-\n]*)-----[\s\S]*?^-----END \1-----)?/m;
async function Cn(e, n, r) {
  try {
    if (i.CCR_AGENT_PROXY_JAVA_STORE_DIRECT_DISABLED) return "disabled";
    for (let E of ["hook", "postinst", "jar"]) {
      let T = await _e(r[E], yn);
      if (T === void 0 || !r.knownSha256[E].includes(wn("sha256").update(T.bytes).digest("hex"))) return "package";
    }
    if ((await _e(r.dpkgTriggerInterest, 1024))?.bytes.toString("latin1") !== `ca-certificates-java
`) return "package";
    let a = await _e(r.defaults, yn);
    if (a === void 0 || i.CACERT_UPDATES === "disabled" || (i.DPKG_MAINTSCRIPT_PACKAGE ?? "") !== "" || i.DPKG_ADMINDIR !== void 0 || i.DPKG_ROOT !== void 0 || a.bytes.toString("latin1").split(`
`).filter(item => !/^[ \t]*(#.*)?$/.test(item)).join(`
`) !== "cacerts_updates=yes") return "settings";
    for (let E of Fo) if (await _n(Lo(r.stateDir, E))) return "unfinished";
    let s = await _e(r.dpkgStatus, Ho),
      h = (await _n(r.dpkgUnincorporatedTriggers)) ? await _e(r.dpkgUnincorporatedTriggers, 1) : {
        bytes: Buffer.alloc(0)
      };
    if (s === void 0 || s.bytes.includes(`
Triggers-Pending:`) || s.bytes.includes(`
Triggers-Awaited:`) || h?.bytes.length !== 0 || (await Io(r.dpkgUpdates)).length !== 0) return "unfinished";
    if ((await $c("java")) === null) return "no_java";
    let u = e.startsWith("0") ? null : Yo.exec(e),
      y;
    try {
      y = new ko(u?.[1] === "CERTIFICATE" ? u[0] : "").raw;
    } catch {
      return "certificate";
    }
    let p = `debian:${Mo(n)}`;
    if (!/^[\x21-\x40\x5b-\x7e]+$/.test(p)) return "alias";
    let w = await _e(r.cacerts, Uo),
      S = w && Xo(w.bytes);
    if (w === void 0 || S === void 0 || w.nlink !== 1) return "store";
    if (S.includes(p)) return "alias";
    let x = qo(w.bytes, p, y);
    try {
      let E = await qO(r.cacerts, x, w.mode);
      try {
        let T = await Tn(E);
        if (T.uid !== w.uid || T.gid !== w.gid) return await mn(E), "store";
        await Oo(E, w.mode), await $o(E, r.cacerts);
      } catch (error) {
        throw await mn(E).catch(() => {}), error;
      }
    } catch {
      return "write";
    }
    return await No(r.stateDir, {
      recursive: !0
    }).catch(() => {}), "added";
  } catch {
    return "error";
  }
}
function Xo(e) {
  let n = [],
    textDecoder = new TextDecoder("utf-8", {
      fatal: !0,
      ignoreBOM: !0
    });
  try {
    if (e.readUInt32BE(0) !== Wo || e.readUInt32BE(4) !== jo) return;
    let o = 12;
    for (let a = e.readUInt32BE(8); a > 0; a--) {
      if (e.readUInt32BE(o) !== Sn) return;
      o += 4;
      let s = o + 2 + e.readUInt16BE(o),
        h = e.subarray(o + 2, s);
      if (h.some(item => item === 0 || item >= 240)) return;
      n.push(textDecoder.decode(h)), o = s + 8;
      let u = o + 2 + e.readUInt16BE(o);
      if (e.toString("utf8", o + 2, u) !== Le) return;
      o = u + 4 + e.readUInt32BE(u);
    }
    if (o + xn !== e.length || !En(e.subarray(0, o)).equals(e.subarray(o))) return;
  } catch {
    return;
  }
  return n;
}
function qo(e, n, r) {
  let o = Buffer.alloc(6 + n.length + 8 + 2 + Le.length + 4),
    a = o.writeUInt32BE(Sn, 0);
  a = o.writeUInt16BE(n.length, a), a += o.write(n, a, "latin1"), a = o.writeBigUInt64BE(BigInt(Date.now()), a), a = o.writeUInt16BE(Le.length, a), a += o.write(Le, a, "latin1"), o.writeUInt32BE(r.length, a);
  let s = Buffer.concat([e.subarray(0, e.length - xn), o, r]);
  return s.writeUInt32BE(e.readUInt32BE(8) + 1, 8), Buffer.concat([s, En(s)]);
}
function En(e) {
  return wn("sha1").update(Buffer.from(Go, "utf16le").swap16()).update("Mighty Aphrodite", "utf8").update(e).digest();
}
async function _n(e) {
  return Tn(e).then(() => !0, n => {
    if (K(n)) return !1;
    throw n;
  });
}
async function _e(e, n) {
  let r;
  try {
    r = await Do(e, Bo.O_RDONLY | c5());
    let o = await r.stat();
    if (!o.isFile() || o.size > n) return;
    return {
      bytes: await r.readFile(),
      mode: o.mode & 511,
      nlink: o.nlink,
      uid: o.uid,
      gid: o.gid
    };
  } catch {
    return;
  } finally {
    await r?.close().catch(() => {});
  }
}
var direct = {
    script: "update-ca-certificates",
    conf: "/etc/ca-certificates.conf",
    distCertsDir: "/usr/share/ca-certificates",
    localCertsDir: "/usr/local/share/ca-certificates",
    certsDir: "/etc/ssl/certs",
    bundle: "/etc/ssl/certs/ca-certificates.crt",
    hooksDir: "/etc/ca-certificates/update.d",
    restorecon: "/sbin/restorecon",
    rehash: ["openssl", "rehash", "."],
    listHooks: ["run-parts", "--test", "--", "/etc/ca-certificates/update.d"],
    javaHook: javaHook
  },
  ti = ["CERTSCONF=/etc/ca-certificates.conf", "CERTSDIR=/usr/share/ca-certificates", "LOCALCERTSDIR=/usr/local/share/ca-certificates", "ETCCERTSDIR=/etc/ssl/certs", "HOOKSDIR=/etc/ca-certificates/update.d"],
  ni = 65536,
  ri = 262144,
  oi = 1048576,
  ii = 4194304,
  maxBuffer = 1048576,
  An = 2048;
async function ht(e, n) {
  let {
      anchorPath: anchorPath,
      link: link,
      layout: layout,
      recordPath: recordPath,
      timeoutMs: timeoutMs
    } = n,
    u = Buffer.from(e, "utf8"),
    y;
  try {
    y = await si(anchorPath, link, u, layout);
  } catch (error) {
    y = {
      reason: "layout",
      detail: d(error)
    };
  }
  if ("reason" in y) return t(`[agent-proxy] direct CA install not attempted (${y.reason}: ${y.detail}); using ${layout.script}`), {
    outcome: "not_attempted",
    reason: y.reason
  };
  await Ge(recordPath).catch(() => {});
  let p;
  try {
    p = await Rn(anchorPath, Fe.O_WRONLY | Fe.O_CREAT | Fe.O_EXCL, 420), await p.writeFile(u), await p.chmod(420), await p.close();
  } catch (error) {
    if (p) await p.close().catch(() => {}), await Ge(anchorPath).catch(() => {});
    return t(`[agent-proxy] direct CA install not attempted (anchor: ${d(error)}); using ${layout.script}`), {
      outcome: "not_attempted",
      reason: "anchor_create"
    };
  }
  let w = !1,
    S = async (step, B) => {
      if (t(`[agent-proxy] direct CA install abandoned at ${step} (${B}); running ${layout.script} instead`, {
        level: "warn"
      }), w) await Ge(link).catch(() => {});
      return {
        outcome: "abandoned",
        step: step
      };
    };
  try {
    let A = await qO(we(ei(layout.certsDir), je(layout.bundle)), y.bundle, 420);
    try {
      await Jo(A, 420), await Qo(A, layout.bundle);
    } catch (error) {
      throw await Ge(A).catch(() => {}), error;
    }
  } catch (error) {
    return await S("bundle", d(error));
  }
  try {
    await Zo(anchorPath, link), w = !0;
  } catch (error) {
    return await S("link", d(error));
  }
  let x = Date.now() + timeoutMs,
    E = (A, input) => ut(A[0], A.slice(1), {
      timeout: Math.max(1, x - Date.now()),
      cwd: layout.certsDir,
      ...(input === void 0 ? {
        stdin: "ignore"
      } : {
        input: input
      }),
      maxBuffer: maxBuffer,
      preserveOutputOnError: !0
    }),
    T = await E(layout.rehash);
  if (pt("openssl rehash", T), T.exitCode !== 0) return await S("rehash", ft(T));
  let C = [];
  if ((await gt(layout.hooksDir).catch(() => {
    return;
  }))?.isDirectory()) {
    let A = await E(layout.listHooks);
    if (A.exitCode !== 0) return pt("run-parts", A), await S("hooks", ft(A));
    C = A.stdout.split(`
`).filter(item => item.length > 0);
  }
  let javaStore;
  for (let A of C) {
    if (A === layout.javaHook?.hook) {
      if (javaStore = await Cn(e, link, layout.javaHook), t(javaStore === "added" ? `[agent-proxy] direct CA install: CA added to ${layout.javaHook.cacerts} without running ${A}` : `[agent-proxy] direct CA install: running ${A}, not adding to the Java store directly (${javaStore})`), javaStore === "added") continue;
    }
    let B = await E([A], `+${link}
`);
    if (pt(A, B), B.exitCode === void 0) return t(`[agent-proxy] direct CA install: hook ${A} gave no exit status (${ft(B)}); not recording the install, so the next start redoes it`, {
      level: "warn"
    }), {
      outcome: "hook_incomplete"
    };
    if (B.exitCode !== 0) t(`[agent-proxy] direct CA install: hook ${A} exit status ${B.exitCode} ignored, as ${layout.script} ignores it`);
  }
  return {
    outcome: "installed",
    ...(javaStore && {
      javaStore: javaStore
    })
  };
}
async function si(e, n, r, o) {
  let a = o.script.includes("/") ? o.script : await $c(o.script),
    s = a ? await We(a, ni) : void 0;
  if (s === void 0 || !s.subarray(0, 9).equals(Buffer.from("#!/bin/sh")) || !ti.every(item => s.includes(item))) return {
    reason: "script",
    detail: a ?? o.script
  };
  let h = await We(o.conf, ri);
  if (h === void 0 || h.length === 0) return {
    reason: "conf",
    detail: o.conf
  };
  for (let detail of [o.certsDir, o.localCertsDir, o.distCertsDir]) if (!(await He(detail).catch(() => {
    return;
  }))?.isDirectory()) return {
    reason: "layout",
    detail: detail
  };
  if (!(await He(o.bundle).catch(() => {
    return;
  }))?.isFile()) return {
    reason: "layout",
    detail: o.bundle
  };
  if (await vn(o.restorecon)) return {
    reason: "layout",
    detail: o.restorecon
  };
  for (let T of [e, n]) if (await vn(T)) return {
    reason: "anchor_present",
    detail: `${T} exists`
  };
  let u = [],
    y = detail_2 => ({
      reason: "unsynced",
      detail: detail_2
    });
  for (let T of h.toString("utf8").split(`
`)) {
    if (T === "" || T.startsWith("#")) continue;
    if (T.startsWith("!")) {
      let v = we(o.certsDir, `${je(T.slice(1), ".crt")}.pem`);
      if ((await He(v).catch(() => {
        return;
      }))?.isSymbolicLink()) return y(`${v} still linked`);
      continue;
    }
    let C = we(o.distCertsDir, T);
    if (!(await gt(C).catch(() => {
      return;
    }))?.isFile()) continue;
    let R = await Pn(C, o);
    if (R === void 0) return y(C);
    u.push(R);
  }
  let p = je(e),
    w = [p];
  for (let T of await Ko(o.localCertsDir, {
    withFileTypes: !0
  })) {
    let C = await gt(we(o.localCertsDir, T.name));
    if (C.isDirectory()) return y(`${T.name} is a directory`);
    if (C.isFile() && T.name.endsWith(".crt")) w.push(T.name);
  }
  w.sort();
  let S = Bn(r);
  for (let T of w) {
    if (T === p) {
      u.push(S);
      continue;
    }
    let C = we(o.localCertsDir, T),
      R = await Pn(C, o);
    if (R === void 0) return y(C);
    u.push(R);
  }
  let x = await We(o.bundle, ii),
    E = Buffer.concat(u.filter(item => item !== S));
  if (x === void 0 || !x.equals(E)) return y("bundle differs from what the script would build");
  return {
    bundle: Buffer.concat(u)
  };
}
async function Pn(e, n) {
  let r = je(e, ".crt").replace(/ /g, "_").replace(/[()]/g, "=").replace(/,/g, "_") + ".pem";
  if ((await zo(we(n.certsDir, r)).catch(() => {
    return;
  })) !== e) return;
  let a = await We(e, oi);
  return a && Bn(a);
}
function Bn(e) {
  return e.length === 0 || e.at(-1) === 10 ? e : Buffer.concat([e, Buffer.from(`
`)]);
}
async function vn(e) {
  return He(e).then(() => !0, n => {
    if (K(n)) return !1;
    throw n;
  });
}
async function We(e, n) {
  let r;
  try {
    r = await Rn(e, Fe.O_RDONLY | c5());
    let o = await r.stat();
    if (!o.isFile() || o.size > n) return;
    return await r.readFile();
  } catch {
    return;
  } finally {
    await r?.close().catch(() => {});
  }
}
function ft(e) {
  if (e.exitCode !== void 0) return `exit status ${e.exitCode}`;
  if (e.timedOut) return "still running at the deadline";
  if (e.maxBufferExceeded) return "output over the cap";
  return `did not run (${e.error ?? "unknown"})`;
}
function pt(e, n) {
  let r = `${n.stdout}
${n.stderr}`.trim();
  if (!r) return;
  if (r.length > An) r = `${r.slice(0, An)}\u2026 (${r.length} chars)`;
  t(`[agent-proxy] ${e}: ${r}`);
}
import { createHash as yt, X509Certificate as ui } from "crypto";
import { mkdir as _t, open as Fn, readdir as Hn, readFile as wt, realpath as Tt, rename as li, stat as di, unlink as oe, writeFile as se } from "fs/promises";
import { homedir as On } from "os";
import { basename as ci, dirname as Xe, join as ae } from "path";
var Te = "changeit",
  fi = /[\s'"]/,
  Un = "# >>> ccr-agent-proxy (managed by Claude Code) >>>",
  Ye = "# <<< ccr-agent-proxy <<<",
  Wn = ".ca-v2",
  pi = 4277010157,
  gi = 33554432,
  hi = 2,
  mi = 2,
  yi = 20,
  _i = /^Your keystore contains 0 entries\s*$/m,
  wi = 3000,
  jn = 16,
  Yn = 16777216,
  Ti = ".checked-v1";
function bt(e, n = [...fxo, ...QNr, ...pxo]) {
  let r = yt("sha256").update([...n].sort().join(`
`)).digest("hex").slice(0, 16);
  return `${e}${Wn}-${r}.pem`;
}
function Xn(e, n, r) {
  let o = r?.trim();
  if (o?.includes("javax.net.ssl.trustStore=")) return o;
  let a = qn(e, n).join(" ");
  return o ? `${a} ${o}` : a;
}
function qn(e, n) {
  return n === "JKS" ? [`-Djavax.net.ssl.trustStore=${e}`, "-Djavax.net.ssl.trustStoreType=JKS"] : [`-Djavax.net.ssl.trustStore=${e}`, `-Djavax.net.ssl.trustStorePassword=${Te}`, "-Djavax.net.ssl.trustStoreType=PKCS12"];
}
async function Je(e) {
  let failureCodes = [],
    r = {
      failureCodes: failureCodes
    },
    o = {
      used: !1
    },
    a = ae(e.stateDir, "agent-proxy-ca.crt");
  try {
    await _t(e.stateDir, {
      recursive: !0
    }), await se(a, e.ccrCa, "utf8");
  } catch (error) {
    return t(`[agent-proxy] tool trust setup skipped: cannot write CA file: ${d(error)}`, {
      level: "warn"
    }), m("agent_proxy_tool_trust", "ca_file_write_failed"), r;
  }
  let s = await Nn(e.keytoolBin, bi),
    h = await Nn(e.certutilBin, () => $c("certutil")),
    u = e.nssRecords ?? !i.CCR_AGENT_PROXY_NSS_RECORDS_DISABLED ? e.stateDir : void 0,
    [y, p] = await Promise.all([(async () => {
      if (!s) {
        t("[agent-proxy] no keytool found; skipping JVM truststore");
        return;
      }
      let path = ae(e.stateDir, "java-truststore.p12"),
        x = e.bazelrcPath ?? "/etc/bazel.bazelrc",
        E,
        T = [],
        C = e.ccrCa.match(jO),
        R = async () => {
          let {
              cacerts: cacerts,
              store: store
            } = await Dn(s, T),
            usable = store !== void 0 && C !== null && C.every(item => {
              let G = qe(item);
              return G.length >= 64 && G[0] === 48 && store.includes(G);
            }) && In(store) === "clean";
          return {
            cacerts: cacerts,
            usable: usable
          };
        },
        v = await R(),
        A = await Kn(path),
        B = A.state === "file" && (await Ee(bt(path), e.ccrCa)) === "same";
      if (!v.usable && !B) await e.systemTrust?.then(() => {}, () => {}), v = await R();
      if (v.cacerts && v.usable) t(`[agent-proxy] JDK truststore at ${v.cacerts} already holds the CA; using it`), E = {
        path: v.cacerts,
        type: "JKS",
        source: "system"
      };else if (B) t(`[agent-proxy] reusing JVM truststore at ${path}`), E = {
        path: path,
        type: "PKCS12",
        source: "reused"
      };else {
        let M = I => Si(s, v.cacerts, e.ccrCa, a, path, I),
          O = [],
          path_2 = await M(O);
        if (O[0] === "java_truststore_seed_failed") o.used = !0, t("[agent-proxy] keytool seed failed; trying once more after a pause"), await (e.seedRetryPause?.() ?? J(wi)), path_2 = await M(failureCodes);else failureCodes.push(...O);
        if (!path_2) {
          await Dn(s, T);
          for (let {
            cacerts: cacerts_2,
            store: store_2
          } of T) {
            let D = In(store_2);
            if (D !== "part_written") {
              r.rejectedJdkStorePath = D === "failed_filter" ? cacerts_2 : void 0;
              break;
            }
          }
          if (await Ci(s, path, A, r.rejectedJdkStorePath, x, failureCodes)) r.retiredJavaTrustStorePath = path;
          return;
        }
        E = {
          path: path_2,
          type: "PKCS12",
          source: "built"
        };
      }
      if (fi.test(E.path)) {
        t(`[agent-proxy] truststore path contains JVM-unsafe characters; not emitting JAVA_TOOL_OPTIONS: ${E.path}`, {
          level: "warn"
        }), failureCodes.push("jvm_unsafe_truststore_path");
        return;
      }
      return r.javaTrustStorePath = E.path, r.javaTrustStoreType = E.type, await Ei(E.path, E.type, x, failureCodes), E.source;
    })(), (async () => {
      if (!h) {
        t("[agent-proxy] certutil not found; skipping NSS trust for browsers");
        return;
      }
      return Ai(a, e.ccrCa, e.nssDbDirs ?? [ae(On(), ".pki", "nssdb"), ae(SQe(), "pki", "nssdb")], h, u, failureCodes);
    })(), Ri(e.caBundlePath, e.botoConfigPath ?? ae(On(), ".boto"), failureCodes), ki(e, e.profileDPath ?? "/etc/profile.d/ccr-agent-proxy-ca.sh", failureCodes).then(S => {
      r.profileDPath = S;
    })]),
    w = p === void 0 ? void 0 : {
      nss_dbs_unchanged: p.unchanged,
      ...(u !== void 0 && {
        nss_dbs_certutil_skipped: p.byRecord
      })
    };
  if (failureCodes.length === 0) g("agent_proxy_tool_trust", {
    reused: y === "reused",
    ...(y && {
      store: f(y)
    }),
    ...(o.used && {
      java_seed_retried: !0
    }),
    ...w
  });else {
    let S = failureCodes[0];
    if (o.used || w) c("agent_proxy_tool_trust", S, {
      ...(o.used && {
        java_seed_retried: !0
      }),
      ...w
    });else c("agent_proxy_tool_trust", S);
  }
  return r;
}
async function Nn(e, n) {
  if (e) return Tt(e).catch(() => {
    return;
  });
  return (await n()) ?? void 0;
}
async function bi() {
  let e = [await $c("keytool"), i.JAVA_HOME ? ae(i.JAVA_HOME, "bin", "keytool") : void 0],
    n;
  for (let r of e) {
    if (!r) continue;
    let o = await Tt(r).catch(() => {
      return;
    });
    if (!o) continue;
    if (n ??= o, await Jn(o)) return o;
  }
  return n;
}
async function Jn(e) {
  let n = Xe(Xe(e));
  for (let r of [ae(n, "lib", "security", "cacerts"), ae(n, "jre", "lib", "security", "cacerts")]) {
    let o = await Tt(r).catch(() => {
      return;
    });
    if (o) return o;
  }
  return;
}
async function Kn(e) {
  let n;
  try {
    n = await Fn(e, Cc());
    let r = await n.stat();
    return r.isFile() ? {
      state: "file",
      identity: `${r.ino}:${r.size}:${r.mtimeMs}`
    } : {
      state: "unusable"
    };
  } catch (error) {
    return {
      state: qt(error) ? "unusable" : "unknown"
    };
  } finally {
    await n?.close().catch(() => {});
  }
}
function Vn(e) {
  if (QNr.size === 0) return !0;
  try {
    if (!GUs(e)) new ui(e).publicKey.export({
      type: "spki",
      format: "der"
    });
    return !0;
  } catch {
    return !1;
  }
}
async function Qn(e, n) {
  let r;
  try {
    r = await Fn(e, Cc());
    let o = await r.stat();
    if (!o.isFile() || o.size > n) return;
    let a = Buffer.alloc(o.size + 1),
      {
        bytesRead: bytesRead_2
      } = await r.read(a, 0, a.length, 0);
    return bytesRead_2 === o.size ? a.subarray(0, bytesRead_2) : void 0;
  } catch {
    return;
  } finally {
    await r?.close().catch(() => {});
  }
}
async function Dn(e, n) {
  let cacerts_3 = await Jn(e),
    store_3 = cacerts_3 === void 0 ? void 0 : await Qn(cacerts_3, gi);
  if (cacerts_3 !== void 0 && store_3 !== void 0) n.unshift({
    cacerts: cacerts_3,
    store: store_3
  });
  return {
    cacerts: cacerts_3,
    store: store_3
  };
}
function In(e) {
  let n = [],
    r = !1;
  try {
    if (e.readUInt32BE(0) !== pi || e.readUInt32BE(4) !== hi) return "failed_filter";
    let o = 12;
    for (let s = e.readUInt32BE(8); s > 0; s--) {
      if (e.readUInt32BE(o) !== mi) return "failed_filter";
      o += 4, o += 2 + e.readUInt16BE(o), o += 8, o += 2 + e.readUInt16BE(o);
      let h = e.readUInt32BE(o);
      if (o += 4, o + h > e.length) return "part_written";
      let u = e.toString("base64", o, o + h).replace(/.{64}(?=.)/g, `$&
`);
      n.push(`-----BEGIN CERTIFICATE-----
${u}
-----END CERTIFICATE-----`), o += h;
    }
    let a = o + yi;
    if (a < e.length) return "failed_filter";
    r = a === e.length;
  } catch {
    return "part_written";
  }
  if (!n.every(Vn) || (ixe(n.join(`
`), "agent proxy trust")?.match(jO)?.length ?? 0) !== n.length) return "failed_filter";
  return r ? "clean" : "part_written";
}
async function Si(e, n, r, o, a, s) {
  if (!n) {
    t(`[agent-proxy] no JDK cacerts found near ${e}; skipping JVM truststore`), s.push("jdk_cacerts_not_found");
    return;
  }
  let h = `${a}.${process.pid}.tmp`;
  await oe(h).catch(() => {});
  let u = await ie(e, ["-importkeystore", "-noprompt", "-srckeystore", n, "-srcstorepass", Te, "-destkeystore", h, "-deststoretype", "PKCS12", "-deststorepass", Te]);
  if (!u.ok) {
    t(`[agent-proxy] keytool importkeystore failed: ${u.detail}`, {
      level: "warn"
    }), s.push("java_truststore_seed_failed"), await oe(h).catch(() => {});
    return;
  }
  let y = await xi(e, h);
  if (!y.ok) {
    t(`[agent-proxy] could not filter the JVM truststore: ${y.detail}`, {
      level: "warn"
    }), s.push("java_truststore_filter_failed"), await oe(h).catch(() => {});
    return;
  }
  let p = await $n(e, h, "ccr-agent-proxy", o);
  if (!p.ok) {
    t(`[agent-proxy] keytool importcert failed: ${p.detail}`, {
      level: "warn"
    }), s.push("java_truststore_import_failed"), await oe(h).catch(() => {});
    return;
  }
  let w = ve(r),
    S = !0;
  if (w !== void 0) {
    let C = `${h}.second.crt`,
      R = await se(C, `${w}
`, "utf8").then(() => $n(e, h, "ccr-agent-proxy-2", C), v => ({
        ok: !1,
        detail: d(v)
      }));
    if (await oe(C).catch(() => {}), !R.ok) t(`[agent-proxy] could not import the second certificate: ${R.detail}; the store holds the first only and is rebuilt on the next start`, {
      level: "warn"
    }), s.push("java_truststore_second_import_failed"), S = !1;
  }
  let x = bt(a);
  await oe(x).catch(() => {});
  let E = Xe(a),
    T = `${ci(a)}${Wn}-`;
  for (let C of await Hn(E).catch(() => [])) if (C.startsWith(T)) await oe(ae(E, C)).catch(() => {});
  try {
    await li(h, a).catch(async () => {
      await se(a, await wt(h)), await oe(h).catch(() => {});
    });
  } catch (error) {
    t(`[agent-proxy] could not move JVM truststore into place: ${d(error)}`, {
      level: "warn"
    }), s.push("java_truststore_publish_failed"), await oe(h).catch(() => {});
    return;
  }
  if (S) await se(x, r, "utf8").catch(C => {
    t(`[agent-proxy] could not record the truststore's CA: ${d(C)}`);
  });
  return t(`[agent-proxy] JVM truststore built at ${a}`), a;
}
function Zn() {
  return {
    ...es(),
    _JAVA_OPTIONS: void 0,
    JAVA_TOOL_OPTIONS: void 0
  };
}
async function mt(e, n) {
  let r = await ie(e, ["-list", "-rfc", "-keystore", n, "-storetype", "PKCS12", "-storepass", Te, "-J-Duser.language=en"], Zn());
  if (!r.ok) return {
    ok: !1,
    detail: r.detail,
    aliases: []
  };
  let o = r.stdout.split(/^Alias name: /m).slice(1),
    a = ixe(r.stdout, "agent proxy trust");
  if (a === void 0 || o.length === 0 && !_i.test(r.stdout) || o.some(item => !item.match(jO))) return {
    ok: !1,
    detail: `no usable listing (${o.length} entries read)`,
    aliases: []
  };
  return {
    ok: !0,
    detail: "",
    aliases: o.filter(item => item.match(jO)?.some(u => !a.includes(u) || !Vn(u))).map(item => item.slice(0, item.indexOf(`
`)).trimEnd())
  };
}
async function xi(e, n) {
  let r = await mt(e, n);
  if (!r.ok || r.aliases.length === 0) return r;
  if (r.aliases.some(item => item.startsWith("-"))) return {
    ok: !1,
    detail: "an entry to remove has an unsafe alias"
  };
  t(`[agent-proxy] removing ${r.aliases.length} denied or unreadable entries from the JVM truststore`);
  for (let a of r.aliases) {
    let s = await ie(e, ["-delete", "-alias", a, "-keystore", n, "-storetype", "PKCS12", "-storepass", Te], Zn());
    if (!s.ok) return s;
  }
  let o = await mt(e, n);
  return o.ok && o.aliases.length > 0 ? {
    ok: !1,
    detail: `${o.aliases.length} entries remain`
  } : o;
}
function $n(e, n, r, o) {
  return ie(e, ["-importcert", "-noprompt", "-alias", r, "-file", o, "-keystore", n, "-storetype", "PKCS12", "-storepass", Te]);
}
async function Ci(e, n, r, o, a, s) {
  let h = await de(bt(n)),
    u = r.state !== "unknown" && h.state !== "failed" && !(r.state === "file" && h.state === "read");
  if (u && r.state === "file") {
    let S = await mt(e, n);
    u = !S.ok || S.aliases.length > 0;
  }
  let y = await Kn(n),
    p = y.state === "file" && r.state === "file" && y.identity === r.identity,
    w = u && (p || y.state === "unusable");
  try {
    let S = await wt(a, "utf8").catch(T => {
        if (K(T)) return "";
        throw T;
      }),
      {
        block: block,
        rest: rest
      } = er(S);
    if (w && block.includes(n) || o !== void 0 && block.includes(o)) await se(a, rest, "utf8"), t(`[agent-proxy] removed Bazel trust block from ${a}`);
  } catch (error) {
    t(`[agent-proxy] could not update ${a}: ${d(error)}`), s.push("bazelrc_write_failed");
  }
  if (w && p) await oe(n).catch(() => {});
  return w;
}
function er(rest_2) {
  let n = rest_2.indexOf(Un),
    r = rest_2.indexOf(Ye);
  return n >= 0 && r > n ? {
    block: rest_2.slice(n, r + Ye.length),
    rest: rest_2.slice(0, n) + rest_2.slice(r + Ye.length).replace(/^\n/, "")
  } : {
    block: "",
    rest: rest_2
  };
}
async function Ei(e, n, r, o) {
  let a = qn(e, n).map(item => `--host_jvm_args=${item}`).join(" "),
    s = `${Un}
# Bazel's repository downloader runs on its embedded JDK and ignores
# JAVA_TOOL_OPTIONS; carry the agent-proxy truststore via startup options.
startup ${a}
${Ye}
`,
    h;
  try {
    h = await wt(r, "utf8");
  } catch (error) {
    if (!K(error)) {
      t(`[agent-proxy] could not read ${r}: ${d(error)}`), o.push("bazelrc_write_failed");
      return;
    }
    h = "";
  }
  let u = er(h).rest.trimEnd(),
    y = u ? `${u}

${s}` : s;
  if (y === h) return;
  try {
    await se(r, y, "utf8"), t(`[agent-proxy] wrote Bazel trust block to ${r}`);
  } catch (error) {
    t(`[agent-proxy] could not write ${r}: ${d(error)}`), o.push("bazelrc_write_failed");
  }
}
async function Ai(e, n, r, o, a, s) {
  let unchanged = 0,
    byRecord = 0,
    y = n.match(jO)?.[0],
    p = ve(n),
    w = `${e}.${process.pid}.second`,
    S = y === void 0 ? void 0 : p === void 0 ? [y] : [y, p];
  if (p !== void 0) await se(w, `${p}
`, "utf8").catch(() => {});
  for (let x of r) {
    let E = await _t(x, {
      recursive: !0
    }).then(B => B === void 0 ? "was_there" : "new", B => {
      t(`[agent-proxy] could not create NSS dir ${x}: ${d(B)}`);
      return;
    });
    if (E === void 0) {
      s.push("nss_add_failed");
      continue;
    }
    let T = `sql:${x}`,
      C = a === void 0 ? void 0 : Pi(a, x),
      R = C === void 0 || S === void 0 ? void 0 : await Mn(x, S, o);
    if (C !== void 0 && R !== void 0) {
      let B = await de(C);
      if (B.state === "read" && B.text === R) {
        t(`[agent-proxy] NSS DB at ${x} matches the record of an earlier start that found the served certificates trusted; left as is without running certutil`), unchanged++, byRecord++;
        continue;
      }
    }
    if (E === "was_there" && S !== void 0 && (await vi(o, T, S).catch(B => (t(`[agent-proxy] NSS check of ${x} threw, taken as a difference: ${d(B)}`), !1)))) {
      if (t(`[agent-proxy] NSS DB at ${x} already holds the served certificates, trusted; left as is`), unchanged++, C !== void 0 && R !== void 0 && (await Mn(x, S, o)) === R) await zn(C, R).catch(B => {
        t(`[agent-proxy] could not record the NSS check of ${x}: ${d(B)}; the next start will run certutil again`);
      });else if (C !== void 0) t(`[agent-proxy] NSS check of ${x} not recorded: the directory ${R === void 0 ? `has an entry that is not a regular file, more than ${jn} entries or ${Yn / 1024 / 1024} MiB, or it or certutil could not be read` : "changed or became unreadable during the check"}; the next start will run certutil again`);
      continue;
    }
    if (E === "was_there") await ie(o, ["-D", "-d", T, "-n", "ccr-agent-proxy"]), await ie(o, ["-D", "-d", T, "-n", "ccr-agent-proxy-2"]);
    let v = Ln(T, "ccr-agent-proxy", e),
      A = await ie(o, v);
    if (!A.ok) await ie(o, ["-N", "--empty-password", "-d", T]), A = await ie(o, v);
    if (A.ok) {
      if (t(`[agent-proxy] MITM CA added to NSS DB at ${x}`), p !== void 0) {
        let B = await ie(o, Ln(T, "ccr-agent-proxy-2", w));
        if (!B.ok) t(`[agent-proxy] could not add the second certificate to the NSS DB at ${x}: ${B.detail}; it holds the first only`), s.push("nss_second_add_failed");
      }
    } else t(`[agent-proxy] certutil -A failed for ${x}: ${A.detail}`), s.push("nss_add_failed");
  }
  return await oe(w).catch(() => {}), {
    unchanged: unchanged,
    byRecord: byRecord
  };
}
function Pi(e, n) {
  let r = yt("sha256").update(n).digest("hex").slice(0, 16);
  return ae(e, `nssdb-${r}${Ti}`);
}
async function Mn(e, n, r) {
  let o = yt("sha256");
  o.update(`${n.length}\x00`);
  for (let a of n.map(item => qe(item).toString("base64")).sort()) o.update(`${a}\x00`);
  try {
    let a = await di(r);
    o.update(`${r}\x00${a.size}\x00${a.mtimeMs}\x00`);
    let s = (await Hn(e)).sort();
    if (s.length > jn) return;
    let h = Yn;
    for (let u of s) {
      let y = await Qn(ae(e, u), h);
      if (y === void 0) return;
      h -= y.length, o.update(`${u}\x00${y.length}\x00`), o.update(y);
    }
  } catch {
    return;
  }
  return o.digest("hex");
}
function Ln(e, n, r) {
  return ["-A", "-d", e, "-t", "C,,", "-n", n, "-i", r];
}
async function vi(e, n, r) {
  let o = await ie(e, ["-L", "-d", n]);
  if (!o.ok) return !1;
  let a = o.stdout.split(`
`).map(item => item.trim().split(/\s+/)),
    s = ["ccr-agent-proxy", "ccr-agent-proxy-2"];
  for (let [y, p] of s.entries()) {
    let w = a.filter(item => item.length === 2 && item[0] === p).map(item => item[1]),
      S = y < r.length ? 1 : 0;
    if (w.length !== S || w.some(item => item !== "C,,")) return !1;
  }
  let h = new Set();
  for (let y of s.slice(0, r.length)) {
    let p = await ie(e, ["-L", "-d", n, "-n", y, "-a"]);
    if (!p.ok) return !1;
    for (let w of p.stdout.match(jO) ?? []) h.add(qe(w).toString("base64"));
  }
  let u = new Set(r.map(item => qe(item).toString("base64")));
  return h.size === u.size && [...u].every(item => h.has(item));
}
async function Ri(e, n, r) {
  let o = `[Boto]
ca_certificates_file = ${e}
`;
  try {
    await se(n, o, {
      flag: "wx",
      mode: 420
    }), t(`[agent-proxy] wrote ${n} for gsutil trust`);
  } catch (error) {
    if (k(error) === "EEXIST") return;
    t(`[agent-proxy] could not write ${n}: ${d(error)}`), r.push("boto_write_failed");
  }
}
async function ki(e, n, r) {
  if (!e.hasSystemCa) {
    await oe(n).catch(() => {});
    return;
  }
  let o = ["# Managed by Claude Code (CCR agent-proxy). Re-exports CA-trust env", "# vars for login shells that start from a scrubbed environment. Each", "# export is set-if-absent so an explicit value in the shell wins.", "# HTTPS_PROXY is intentionally NOT set here: the relay port is", "# ephemeral and persisting it would break all HTTPS in login shells", "# once the relay process exits. Scrubbed login shells dial direct.", `if [ -r ${nr(e.caBundlePath)} ]; then`];
  for (let s of [...ELr, ...TLr]) o.push("  " + Gn(s, e.caBundlePath));
  for (let [s, h] of Object.entries(jAe)) o.push("  " + Gn(s, h));
  o.push("fi");
  let a = o.join(`
`) + `
`;
  try {
    return await _t(Xe(n), {
      recursive: !0
    }), await se(n, a, {
      mode: 420
    }), t(`[agent-proxy] wrote ${n} for login-shell trust`), n;
  } catch (error) {
    t(`[agent-proxy] could not write ${n}: ${d(error)}`), r.push("profile_d_write_failed");
    return;
  }
}
function Gn(e, n) {
  return `if [ -z "\${${e}:-}" ]; then ${e}=${nr(n)}; fi; export ${e}`;
}
function nr(e) {
  return `'${e.replace(/'/g, "'\\''")}'`;
}
function ve(e) {
  let n = e.match(jO) ?? [];
  return n.length === 2 && n[1] !== n[0] ? n[1] : void 0;
}
function qe(e) {
  return Buffer.from(e.replace(/-----(?:BEGIN|END) CERTIFICATE-----/g, ""), "base64");
}
async function ie(e, n, env) {
  let o = await ut(e, n, {
    timeout: 20000,
    preserveOutputOnError: !0,
    useCwd: !1,
    env: env
  });
  if (o.code === 0) return {
    ok: !0,
    stdout: o.stdout,
    detail: ""
  };
  return {
    ok: !1,
    stdout: o.stdout,
    detail: `${o.error ?? `exit ${o.code}`} ${o.stderr.slice(0, 200)}`.trim()
  };
}
var tia = "/run/ccr/session_token",
  _r = ["/etc/ssl/certs/ca-certificates.crt", "/etc/pki/tls/certs/ca-bundle.crt", "/etc/ssl/cert.pem"],
  nia = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "169.254.0.0/16", "api.anthropic.com", "api-staging.anthropic.com", "api-pr-preview.anthropic.com", "mcp-proxy.anthropic.com", "mcp-proxy-staging.anthropic.com", ...Wt, "host.docker.internal"],
  noProxy = [...nia, "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local"].join(","),
  ria = ["127.0.0.1", "localhost", "::1", "127.0.0.0/8", "0.0.0.0/8", "169.254.0.0/16", "host.docker.internal", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10", ".svc.cluster.local", "*.svc.cluster.local"].join(","),
  oia = ["localhost", "127.0.0.1", "::1", "127.0.0.0/8", "0.0.0.0/8", "::", "host.docker.internal", "10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10"].join(","),
  aga = ["169.254.0.0/16", ".svc.cluster.local", "*.svc.cluster.local"].join(",");
class wr {
  state = {
    enabled: !1,
    noProxy: noProxy
  };
  relay = void 0;
  generation = 0;
  activate(e, n) {
    this.state = e, this.relay = n, lQo(`${ue(n.port)}/__agentproxy/status`);
  }
  reset() {
    this.generation++, this.state = {
      enabled: !1,
      noProxy: noProxy
    }, D6t(void 0), IJr(void 0), Kvr(void 0), lQo(void 0), this.relay?.stop(), this.relay = void 0;
  }
}
var sia = new W(() => new wr());
function ke() {
  return sia.of(H().host);
}
async function lga(e) {
  let runtime = ke();
  i.unset("AGENT_PROXY_URL"), i.unset("AGENT_PROXY_AUTH_TOKEN");
  let CCR_AGENT_PROXY_RELAY_MODE = i.CCR_AGENT_PROXY_RELAY_MODE,
    CCR_AGENT_PROXY_INCLUDE_HOSTS = i.CCR_AGENT_PROXY_INCLUDE_HOSTS,
    CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED = i.CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED,
    CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED = i.CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED,
    h = i.CCR_AGENT_PROXY_MAX_BUSY_TUNNELS,
    CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY = i.CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY,
    CCR_AGENT_PROXY_CA_WATCH_ENABLED = i.CCR_AGENT_PROXY_CA_WATCH_ENABLED,
    CCR_AGENT_PROXY_CA_CERT_B64 = i.CCR_AGENT_PROXY_CA_CERT_B64;
  if (i.unset("CCR_AGENT_PROXY_RELAY_MODE"), i.unset("CCR_AGENT_PROXY_INCLUDE_HOSTS"), i.unset("CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED"), i.unset("CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED"), i.unset("CCR_AGENT_PROXY_CA_CERT_B64"), !Pe(process.env.CLAUDE_CODE_REMOTE)) return runtime.state;
  let w = performance.now(),
    route;
  if (CCR_AGENT_PROXY_RELAY_MODE === yVt || vVr()) {
    let proxyUrl = vjo();
    if (proxyUrl === void 0 || !xt()) return t("[agent-proxy] the agent proxy standalone relay mode is set; hosted relay not started"), runtime.state;
    t("[agent-proxy] the agent proxy standalone relay mode is set; governed git goes through its forwarder, and no relay is started"), route = {
      kind: "standalone",
      proxyUrl: proxyUrl
    };
  } else {
    if (!i.CCR_AGENT_PROXY_ENABLED) return runtime.state;
    let tokenIsHandedOver = kd(),
      ee,
      me = process.env.CLAUDE_CODE_REMOTE_SESSION_ID,
      z = "sessionIngressAuth";
    if (tokenIsHandedOver) {
      if (ee = e?.toolContainerToken, ee === void 0) return t("[agent-proxy] a tool container's daemon was handed no token (CCR_AGENT_PROXY_TOKEN_FILE_DESCRIPTOR, or agent_proxy_token with --session-tunnel); proxy disabled"), runtime.state;
      me = "tool-container", z = "the launcher";
    }
    if (!me) return t("[agent-proxy] CLAUDE_CODE_REMOTE_SESSION_ID unset; proxy disabled", {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_no_session_id"), runtime.state;
    let Y = e?.tokenPath ?? tia,
      le = tokenIsHandedOver ? {
        existed: !1,
        token: ee ?? null
      } : await Ji(Y),
      {
        existed: existed,
        token: token
      } = le;
    if (!token && !tokenIsHandedOver) token = zd();
    if (!token) return t("[agent-proxy] no session token; proxy disabled"), m("agent_proxy_init", "agent_proxy_init_no_token"), runtime.state;
    t(`[agent-proxy] token via ${existed ? Y : z}`), EY(Oe => t(`[agent-proxy] ${Oe}`, {
      level: "warn"
    })), route = {
      kind: "relay",
      sessionId: me,
      token: token,
      tokenIsHandedOver: tokenIsHandedOver,
      unlinkTokenPath: existed ? Y : void 0
    };
  }
  let baseUrl = e?.ccrBaseUrl ?? process.env.ANTHROPIC_BASE_URL ?? "https://api.anthropic.com",
    caBundlePath = e?.caBundlePath ?? (xt() ? q(Ue(), "ccr", "ca-bundle.crt") : q(Rt(), ".ccr", "ca-bundle.crt")),
    systemCa = e?.systemCaPath ? await be(e.systemCaPath, "utf8").catch(() => "") : await cZs(),
    C = ixe(systemCa, "agent proxy trust") ?? "",
    R = await Vi(C, caBundlePath),
    localCa = R ? `${C}
${R}` : C,
    envCa;
  if (CCR_AGENT_PROXY_CA_CERT_B64 !== void 0 && St()) t("[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: essential traffic only; fetching the CA as before");else if (CCR_AGENT_PROXY_CA_CERT_B64 !== void 0) {
    let L = lia(CCR_AGENT_PROXY_CA_CERT_B64);
    if (L.ok) envCa = L.pem;else t(`[agent-proxy] CCR_AGENT_PROXY_CA_CERT_B64 ignored: ${L.reason}; fetching the CA instead`, {
      level: "warn"
    }), c("agent_proxy_init", "agent_proxy_init_ca_env_invalid");
  }
  let governedGitTools = xt(),
    caSource = envCa !== void 0 ? "env" : "fetch",
    pathProbes = {
      budgetMs: e?.pathProbeBudgetMs ?? Fi,
      caSource: caSource
    },
    installedClisScan = governedGitTools ? void 0 : Wi(pathProbes),
    selective_2;
  if (CCR_AGENT_PROXY_RELAY_MODE === "selective") {
    let includeHosts = (CCR_AGENT_PROXY_INCLUDE_HOSTS ?? "").split(",").map(item => item.trim()).filter(item => item.length > 0);
    if (includeHosts.length > 0) selective_2 = {
      includeHosts: includeHosts
    }, t(`[agent-proxy] selective relay: ${includeHosts.length} include hosts; unlisted use normal networking`);else t("[agent-proxy] CCR_AGENT_PROXY_RELAY_MODE=selective but include-host " + "list is empty/unparsable \u2014 FAIL-CLOSED to tunnel-all", {
      level: "warn"
    }), c("agent_proxy_init", "agent_proxy_selective_empty_include");
  }
  let G = oia,
    D = {
      runtime: runtime,
      generation: runtime.generation,
      route: route,
      baseUrl: baseUrl,
      caBundlePath: caBundlePath,
      systemCa: systemCa,
      localCa: localCa,
      hasSystemCa: C !== "",
      governedGitTools: governedGitTools,
      selective: selective_2,
      noProxy: CCR_AGENT_PROXY_NO_PROXY_LOCAL_ONLY ? G : selective_2 ? ria : noProxy,
      bundleCoversEveryHost: C !== "",
      receiveGateDisabled: Boolean(CCR_AGENT_PROXY_RECEIVE_GATE_DISABLED),
      uploadGateDisabled: Boolean(CCR_AGENT_PROXY_UPLOAD_GATE_DISABLED),
      maxBusyTunnels: h,
      caWatchEnabled: Boolean(CCR_AGENT_PROXY_CA_WATCH_ENABLED),
      pathProbes: pathProbes,
      installedClisScan: installedClisScan,
      envCa: envCa,
      caSource: caSource,
      opts: e && {
        ...e,
        toolContainerToken: void 0
      }
    };
  qr("agent_proxy_inputs_ms", performance.now() - w, w);
  let F = await Sr(D, 1);
  if (route.kind === "standalone" && F.outcome === "fatal") D6t(Tr);
  if (F.outcome === "retry") c("agent_proxy_init", "agent_proxy_init_ca_exhausted_retrying", {
    ca_source: f(caSource)
  }), Gi(D, F).catch(L => {
    t(`[agent-proxy] retry loop crashed: ${d(L)}; proxy stays disabled`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_retry_loop_crashed");
  });
  return runtime.state;
}
var Tr = "Anthropic-managed GitHub access through this session's proxy could not be set up: git and gh fail TLS verification against github.com. Never disable TLS verification or edit the git config file named by $GIT_CONFIG_GLOBAL to get past it; tell the user that GitHub access is not available in this session.",
  or = 300000,
  br = 3600000;
function Et(e, n) {
  if (e.generation !== n || e.state.enabled || sg()) return "exit";
  return Vo() ? "defer" : null;
}
function dZs(e, n) {
  return Math.min(AU(e - 1, n, or), or);
}
async function Gi(e, n) {
  let {
      runtime: runtime_2,
      generation: generation_2,
      caSource: caSource_2,
      opts: opts
    } = e,
    h = Date.now(),
    u = opts?.retryBadAfterMs ?? br,
    y = !1;
  for (let p = 2;; p++) {
    let w = opts?.retryDelayMs?.(p) ?? dZs(p, n.retryAfter);
    t(`[agent-proxy] ${n.detail}; attempt ${p} in ${(w / 1000).toFixed(1)}s`, {
      level: "warn"
    }), await J(w, void 0, {
      unref: !0
    });
    let S = Et(runtime_2, generation_2);
    if (S === "exit") return;
    if (S === "defer") continue;
    let x = await Sr(e, p);
    if (x.outcome !== "retry") return;
    if (n = x, !y && Date.now() - h >= u) y = !0, t(`[agent-proxy] ${n.detail}; still failing after ${p} attempts over ${Math.round((Date.now() - h) / 60000)} min \u2014 counting as exhausted, retrying anyway`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_ca_exhausted", {
      ca_source: f(caSource_2)
    });
  }
}
async function Sr(e, attempts) {
  let {
      runtime: runtime_3,
      route: route_2,
      baseUrl: baseUrl_2,
      caBundlePath: caBundlePath_2,
      systemCa: systemCa_2,
      localCa: localCa_2,
      hasSystemCa: hasSystemCa,
      governedGitTools: governedGitTools_2,
      selective: selective_3,
      noProxy: noProxy_2,
      bundleCoversEveryHost: bundleCoversEveryHost,
      receiveGateDisabled: receiveGateDisabled,
      uploadGateDisabled: uploadGateDisabled,
      maxBusyTunnels: maxBusyTunnels_4,
      caWatchEnabled: caWatchEnabled,
      pathProbes: pathProbes_2,
      installedClisScan: installedClisScan_2,
      envCa: envCa_2,
      caSource: caSource_3,
      opts: opts_2
    } = e,
    j = (z, Y) => {
      if (attempts === 1) qr(z, performance.now() - Y, Y);
    },
    I;
  if (envCa_2 !== void 0) I = envCa_2;else {
    let z = performance.now(),
      Y = await It(baseUrl_2, {
        budgetMs: opts_2?.caFetchBudgetMs ?? (attempts === 1 ? 5000 : 15000),
        tries: attempts === 1 ? 3 : 1,
        viaStandaloneProxy: route_2.kind === "standalone"
      });
    if (j("agent_proxy_ca_fetch_ms", z), Y.outcome !== "ok") return gr(Y, caSource_3);
    I = Y.ccrCa;
  }
  let G = performance.now(),
    D = await $t(localCa_2, I, caBundlePath_2);
  if (D.outcome !== "ok") return j("agent_proxy_trust_write_ms", G), gr(D, caSource_3);
  if (!governedGitTools_2) await ua(opts_2?.awsConfigPath ?? q(Rt(), ".aws", "config"));
  if (j("agent_proxy_trust_write_ms", G), route_2.kind === "standalone") {
    let z = Et(runtime_3, e.generation);
    if (z) return z === "exit" ? {
      outcome: "stale"
    } : {
      outcome: "retry",
      detail: "shutdown claimed during bring-up",
      retryAfter: null
    };
    let Y = {
      enabled: !0,
      caBundlePath: caBundlePath_2,
      hasSystemCa: hasSystemCa,
      bundleCoversEveryHost: bundleCoversEveryHost,
      noProxy: noProxy_2,
      selective: !1,
      governedGitTools: !0
    };
    runtime_3.state = Y, runtime_3.relay = void 0;
    let le = await ar(Y, caBundlePath_2, route_2, selective_3, pathProbes_2);
    if (runtime_3.state !== Y) return {
      outcome: "stale"
    };
    return IJr(ir(Y)), t(`[agent-proxy] governed git routed through the agent proxy standalone forwarder (CA from ${caSource_3})`), g("agent_proxy_init", {
      attempts: attempts,
      ca_source: f(caSource_3),
      standalone: !0
    }), D6t(i.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG && !le ? Tr : Ke(caBundlePath_2, void 0)), {
      outcome: "ok"
    };
  }
  let {
    sessionId: sessionId,
    token: token_2,
    tokenIsHandedOver: tokenIsHandedOver_2,
    unlinkTokenPath: unlinkTokenPath
  } = route_2;
  try {
    let wsUrl = baseUrl_2.replace(/^http/, "ws") + Xwo + "/ws",
      readmePath = mQo(caBundlePath_2),
      token_3 = token_2 ?? "",
      Be = performance.now(),
      installedProxyPreconfiguredClis = await installedClisScan_2,
      Oe,
      kr = () => Oe ??= Xi().catch(() => []).finally(() => {
        Oe = void 0;
      }),
      re = await un({
        wsUrl: wsUrl,
        sessionId: sessionId,
        token: token_3,
        getToken: tokenIsHandedOver_2 ? () => token_3 : () => zd() || token_3,
        selective: selective_3,
        limits: {
          ...(receiveGateDisabled && {
            receiveHighWater: 1 / 0
          }),
          ...(uploadGateDisabled && {
            sendPauseAfterPendingBytes: 1 / 0,
            sendStallTimeoutMs: 1 / 0
          })
        },
        tunnelGateLimits: {
          ...(maxBusyTunnels_4 !== void 0 && {
            maxBusyTunnels: maxBusyTunnels_4
          })
        },
        statusProvider: async () => {
          let gitConfigConflicts = await kr();
          if (gitConfigConflicts.length > 0) t(`[agent-proxy] git config may defeat proxy routing: ${gitConfigConflicts.join(", ")}`, {
            level: "warn"
          });
          return {
            ...runtime_3.state,
            ...(gitConfigConflicts.length > 0 && {
              gitConfigConflicts: gitConfigConflicts
            }),
            readmePath: readmePath,
            gitConfigInjection: At(),
            gitSshRewrite: At() && Bt()
          };
        },
        onFailure: onFailure,
        onConnectAnswer: onConnectAnswer
      }),
      Br = vt(async () => re.stop()),
      X = {
        enabled: !0,
        port: re.port,
        caBundlePath: caBundlePath_2,
        hasSystemCa: hasSystemCa,
        bundleCoversEveryHost: bundleCoversEveryHost,
        noProxy: noProxy_2,
        selective: Boolean(selective_3),
        governedGitTools: governedGitTools_2,
        installedProxyPreconfiguredClis: installedProxyPreconfiguredClis
      };
    j("agent_proxy_relay_up_ms", Be);
    let Mt = Et(runtime_3, e.generation);
    if (Mt) return re.stop(), Br(), Mt === "exit" ? {
      outcome: "stale"
    } : {
      outcome: "retry",
      detail: "shutdown claimed during bring-up",
      retryAfter: null
    };
    if (runtime_3.activate(X, re), !selective_3 && !governedGitTools_2) Kvr({
      proxyUrl: ue(re.port),
      gatewayCa: I
    });
    if (governedGitTools_2) await ar(X, caBundlePath_2, {
      kind: "relay",
      port: re.port
    }, selective_3, pathProbes_2);else {
      let N = await Pr({
        kind: "relay",
        port: re.port
      }, caBundlePath_2, sessionId, selective_3, pathProbes_2).catch(xe => {
        t(`[agent-proxy] gh stand-in shim write failed: ${d(xe)}`, {
          level: "warn"
        }), c("agent_proxy_gh_shim", "arm_failed");
        return;
      });
      if (N) X.ghShimDir = N.shimDir, X.ghStandin = N.standin, X.ghStandinEnterprise = N.enterprise, X.ghStandinAnyHost = N.anyHost, X.ghStandinNoJq = N.noJq;
    }
    if (runtime_3.state !== X) return {
      outcome: "stale"
    };
    re.runStartupChecks(), IJr(ir(X)), t(`[agent-proxy] enabled on 127.0.0.1:${re.port} (CA from ${caSource_3})`), g("agent_proxy_init", {
      attempts: attempts,
      ca_source: f(caSource_3)
    }), D6t(Ke(caBundlePath_2, void 0)), Ve(readmePath, qi(re.port, caBundlePath_2), "utf8").then(() => {
      if (runtime_3.state !== X) return;
      D6t(Ke(caBundlePath_2, readmePath));
    }).catch(N => {
      if (t(`[agent-proxy] README write failed: ${N instanceof Error ? N.message : String(N)}`), runtime_3.state !== X) return;
      D6t(Ke(caBundlePath_2, void 0));
    });
    let Lt = Nt(caBundlePath_2),
      installDeferred = !1;
    if (!governedGitTools_2 && caSource_3 === "env") {
      let N = await de(Lt);
      installDeferred = N.state === "read" && pe(N.text, I) !== "same" && uZs(systemCa_2, N.text);
    }
    let systemTrust = governedGitTools_2 || installDeferred ? void 0 : Dt(e, I, Lt),
      ze = installDeferred ? Promise.withResolvers() : void 0,
      toolTrust,
      Gt = !1;
    if (opts_2?.toolTrust !== !1 && !governedGitTools_2) toolTrust = Je({
      ccrCa: I,
      caBundlePath: caBundlePath_2,
      hasSystemCa: X.hasSystemCa ?? !1,
      stateDir: q(caBundlePath_2, ".."),
      systemTrust: systemTrust ?? ze?.promise,
      ...(opts_2?.toolTrust ?? {})
    }).then(N => {
      if (runtime_3.state !== X) return;
      if (Ot(X, N), N.profileDPath) {
        let profileDPath = N.profileDPath;
        vt(() => he(profileDPath).catch(() => {}));
      }
      if (N.failureCodes.length > 0) X.toolTrustFailureCodes = N.failureCodes;
    }).catch(N => {
      t(`[agent-proxy] tool trust setup failed: ${N instanceof Error ? N.message : String(N)}`, {
        level: "warn"
      }), c("agent_proxy_tool_trust", "setup_threw"), Gt = !0;
    });
    let trust = {
      ccrCa: I,
      systemTrust: systemTrust,
      toolTrust: toolTrust,
      installIncomplete: !1,
      installRetries: 0
    };
    if (caWatchEnabled && !governedGitTools_2) Promise.all([systemTrust, toolTrust]).then(async ([N]) => {
      let xe = opts_2?.toolTrust === !1 || (await vr(caBundlePath_2, I));
      if (runtime_3.state === X && trust.ccrCa === I) trust.installIncomplete = installDeferred || Gt || !xe || Rr(N, X.toolTrustFailureCodes ?? []);
    }).catch(() => {});
    let embeddedEndpoint = !selective_3 && !governedGitTools_2,
      afterStart;
    if (caSource_3 === "env") afterStart = aa(e, X, I, {
      systemTrust: systemTrust,
      toolTrust: toolTrust,
      installDeferred: installDeferred,
      onInstallSettled: () => ze?.resolve(),
      embeddedEndpoint: embeddedEndpoint,
      relayPort: re.port,
      ...(caWatchEnabled && {
        trust: trust
      })
    }).catch(N => {
      t(`[agent-proxy] CA reconcile crashed: ${d(N)}`, {
        level: "warn"
      }), c("agent_proxy_ca_reconcile", "reconcile_threw");
    }).finally(() => ze?.resolve());
    let intervalMs = opts_2?.caWatchIntervalMs ?? oa;
    if (caWatchEnabled && !governedGitTools_2 && intervalMs > 0) sa(e, X, trust, {
      intervalMs: intervalMs,
      afterStart: afterStart,
      embeddedEndpoint: embeddedEndpoint,
      relayPort: re.port
    }).catch(N => {
      t(`[agent-proxy] CA watch crashed: ${d(N)}`, {
        level: "warn"
      }), c("agent_proxy_ca_watch", "watch_threw");
    });
    if (unlinkTokenPath) await he(unlinkTokenPath).catch(() => {
      t("[agent-proxy] token file unlink failed", {
        level: "warn"
      });
    });
    return {
      outcome: "ok"
    };
  } catch (error) {
    return t(`[agent-proxy] relay start failed: ${error instanceof Error ? error.message : String(error)}; proxy disabled`, {
      level: "warn"
    }), m("agent_proxy_init", "agent_proxy_init_relay_start_failed"), {
      outcome: "fatal"
    };
  }
}
function ir(e) {
  return e.ghStandin ? shi({
    enterprise: e.ghStandinEnterprise === !0,
    anyHost: e.ghStandinAnyHost === !0,
    noJq: e.ghStandinNoJq === !0,
    runner: e.governedGitTools === !0
  }) : void 0;
}
async function ar(e, n, r, o, a) {
  let s = !1,
    [git_config, u] = await Promise.all([i.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG ? Ui(r, n).catch(y => (t(`[agent-proxy] governed git config append failed: ${d(y)}`, {
      level: "warn"
    }), c("agent_proxy_tool_scoped", "git_config_append_failed"), s = !0, !1)) : !1, i.CLAUDE_CODE_AGENT_PROXY_GH_SHIM ? Pr(r, n, void 0, o, a).catch(y => {
      t(`[agent-proxy] gh shim write failed: ${d(y)}`, {
        level: "warn"
      }), c("agent_proxy_tool_scoped", "gh_shim_write_failed"), c("agent_proxy_gh_shim", "arm_failed"), s = !0;
      return;
    }) : void 0]);
  if (u) e.ghShimDir = u.shimDir, e.ghStandin = u.standin, e.ghStandinEnterprise = u.enterprise, e.ghStandinAnyHost = u.anyHost, e.ghStandinNoJq = u.noJq;
  if (!s) g("agent_proxy_tool_scoped", {
    git_config: git_config,
    gh_shim: Boolean(u)
  });
  return git_config;
}
var xr = [{
    clis: ["gh"],
    realCredentialEnv: ["GH_TOKEN", "GITHUB_TOKEN"],
    placeholders: {
      GH_TOKEN: xV,
      GITHUB_TOKEN: xV
    }
  }, {
    clis: ["aws"],
    realCredentialEnv: ["AWS_ACCESS_KEY_ID", "AWS_SECRET_ACCESS_KEY", "AWS_SESSION_TOKEN", "AWS_PROFILE", "AWS_SHARED_CREDENTIALS_FILE", "AWS_CONFIG_FILE", "AWS_WEB_IDENTITY_TOKEN_FILE", "AWS_ROLE_ARN", "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "AWS_CONTAINER_CREDENTIALS_FULL_URI"],
    placeholders: {
      AWS_ACCESS_KEY_ID: xV,
      AWS_SECRET_ACCESS_KEY: xV
    }
  }, {
    clis: ["gcloud", "bq", "gsutil"],
    realCredentialEnv: ["CLOUDSDK_AUTH_ACCESS_TOKEN", "GOOGLE_APPLICATION_CREDENTIALS"],
    placeholders: {
      CLOUDSDK_AUTH_ACCESS_TOKEN: xV
    }
  }],
  OXn = xr.flatMap(item => Object.keys(item.placeholders)),
  Fi = 1000;
function fe(e) {
  return Bet(e)?.trim() || void 0;
}
function dga() {
  let state = ke().state;
  if (!state.enabled || !state.port || !state.caBundlePath || state.governedGitTools || !state.bundleCoversEveryHost) return null;
  return {
    proxyUrl: ue(state.port),
    noProxy: state.noProxy,
    caBundlePath: state.caBundlePath
  };
}
function cga() {
  let state_2 = ke().state;
  if (state_2.enabled && state_2.governedGitTools) {
    let o = {};
    if (state_2.ghShimDir) {
      let a = Bet("PATH") ?? "";
      if (o.PATH = a ? `${state_2.ghShimDir}${Re}${a}` : state_2.ghShimDir, state_2.ghStandin && a) o.PATH = `${a}${Re}${state_2.ghShimDir}`;
    }
    return o;
  }
  if (!state_2.enabled || !state_2.port || !state_2.caBundlePath) {
    if (process.env.HTTPS_PROXY && process.env.SSL_CERT_FILE) {
      let o = {};
      for (let a of ["HTTPS_PROXY", "https_proxy", "NO_PROXY", "no_proxy", ...Ape]) if (process.env[a]) o[a] = process.env[a];
      for (let a of [...Object.keys(jAe), ...OXn]) {
        let s = Bet(a);
        if (s) o[a] = s;
      }
      return o;
    }
    return {};
  }
  let n = ue(state_2.port),
    r = {
      HTTPS_PROXY: n,
      https_proxy: n,
      NO_PROXY: state_2.noProxy,
      no_proxy: state_2.noProxy
    };
  for (let o of ELr) r[o] = state_2.caBundlePath;
  if (state_2.bundleCoversEveryHost) {
    for (let o of TLr) r[o] = state_2.caBundlePath;
    for (let [o, a] of Object.entries(jAe)) if (Bet(o) === void 0) r[o] = a;
  }
  if (state_2.javaTrustStorePath && state_2.javaTrustStoreType) r.JAVA_TOOL_OPTIONS = Xn(state_2.javaTrustStorePath, state_2.javaTrustStoreType, fe("JAVA_TOOL_OPTIONS"));
  if (fe("GIT_TERMINAL_PROMPT") === void 0) r.GIT_TERMINAL_PROMPT = pae.GIT_TERMINAL_PROMPT;
  if (fe("GIT_ASKPASS") === void 0) r.GIT_ASKPASS = pae.GIT_ASKPASS;
  if (fe("GCM_INTERACTIVE") === void 0) r.GCM_INTERACTIVE = pae.GCM_INTERACTIVE;
  if (At()) {
    let o = [["credential.interactive", "false"]];
    if (Bt()) o.push(...I1s.map(item => [`url.https://${jr}/.insteadOf`, item]));
    Object.assign(r, rY(void 0, o));
  }
  for (let o of xr) if (!o.realCredentialEnv.some(item => Bet(item))) Object.assign(r, o.placeholders);
  if (state_2.ghShimDir) r.PATH = [fe("PATH"), state_2.ghShimDir].filter(Boolean).join(Re);
  return r;
}
function uga() {
  let state_3 = ke().state;
  return state_3.enabled && state_3.ghStandin ? state_3.ghShimDir : void 0;
}
function xt() {
  return Boolean(i.CLAUDE_CODE_AGENT_PROXY_GIT_CONFIG || i.CLAUDE_CODE_AGENT_PROXY_GH_SHIM);
}
var sr = "# >>> claude agent-proxy governed-git (auto-generated; do not edit) >>>",
  Ct = "# <<< claude agent-proxy governed-git <<<",
  Hi = '"!f() { case $1 in get) echo quit=true ;; esac; }; f"';
function Cr() {
  let CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS = i.CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS;
  if (!CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS || CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS.trim() === "") return [jr];
  let n = [],
    r = 0;
  for (let o of CLAUDE_CODE_AGENT_PROXY_GIT_HOSTS.split(",")) {
    let a = o.trim();
    if (a === "") continue;
    let s = GO(a);
    if (s === "" || s.length > 255 || !bxe.test(s)) {
      r++;
      continue;
    }
    let h = fo(s) ? jr : s;
    if (!n.includes(h)) n.push(h);
  }
  if (r > 0) t(`[agent-proxy] governed git: ignored ${r} governed-host ${P(r, "entry", "entries")} that ${P(r, "is", "are")} not a bare hostname`, {
    level: "warn"
  });
  return n;
}
async function Ui(e, n) {
  let r;
  switch (e.kind) {
    case "relay":
      r = ue(e.port);
      break;
    case "standalone":
      r = e.proxyUrl;
      break;
  }
  let GIT_CONFIG_GLOBAL = process.env.GIT_CONFIG_GLOBAL;
  if (!GIT_CONFIG_GLOBAL) return t("[agent-proxy] governed git config arm set but GIT_CONFIG_GLOBAL is unset; skipping (refusing to write a shared global config)", {
    level: "warn"
  }), !1;
  if ([n, r].some(item => /[\n\r"]/.test(item))) return t("[agent-proxy] governed git: the CA bundle path or the proxy URL contains a newline or quote; skipping git config arm", {
    level: "warn"
  }), !1;
  let a = Cr();
  if (a.length === 0) return t("[agent-proxy] governed git: the governed-host list carried no usable host; skipping git config arm", {
    level: "warn"
  }), !1;
  let s = [sr];
  for (let p of a) if (s.push(`[http "https://${p}/"]`, `	proxy = ${r}`, `	sslCAInfo = ${n}`, ...(p === jr ? [] : ["\textraHeader =", "\tcookieFile ="]), `[credential "https://${p}/"]`, ...(p === jr ? [] : ["\thelper =", `	helper = ${Hi}`]), "\tinteractive = false"), p === jr && Bt()) s.push(`[url "https://${jr}/"]`, ...I1s.map(item => `	insteadOf = ${item}`));
  s.push(Ct);
  let h = "";
  try {
    h = await be(GIT_CONFIG_GLOBAL, "utf8");
  } catch (error) {
    if (!K(error)) throw error;
  }
  let u = h.indexOf(sr);
  if (u !== -1) {
    let p = h.indexOf(Ct, u);
    h = p !== -1 ? h.slice(0, u) + h.slice(p + Ct.length).replace(/^\n/, "") : h.slice(0, u);
  }
  let y = h.length > 0 && !h.endsWith(`
`) ? h + `
` : h;
  return await zn(GIT_CONFIG_GLOBAL, y + s.join(`
`) + `
`, 384), t(`[agent-proxy] governed git: relay routing for ${a.length} governed ${P(a.length, "host")} appended to ${GIT_CONFIG_GLOBAL}`), !0;
}
async function Er(e, n) {
  let r = (i.PATH ?? "").split(Re);
  for (let o of r) {
    if (!o || o === n) continue;
    let a = q(o, e);
    try {
      if (await Ii(a, Ni.X_OK), (await yr(a)).isFile()) return a;
    } catch {}
  }
  return;
}
async function kt(e, n, {
  budgetMs: budgetMs,
  caSource: caSource_4
}) {
  let a = `${e} timed out`,
    s = performance.now(),
    h = ryn(),
    u = MXn(IXn);
  try {
    return {
      value: await zt(n(), budgetMs, a)
    };
  } catch (error) {
    let p = ryn(),
      timedOut = d(error) === a,
      errno = tr(error);
    return {
      failure: {
        timedOut: timedOut,
        detail: timedOut ? a : `${e} failed (${d(error)})`,
        fields: {
          ca_source: f(caSource_4),
          ...(errno !== void 0 && {
            errno: errno
          }),
          elapsed_ms: Math.round(performance.now() - s),
          loop_lag_max_ms: Math.round(u.stop()),
          ...(h && p && {
            cpu_delta_ms: Math.round(p.cpuTimeMs - h.cpuTimeMs),
            major_fault_delta: p.majorPageFaults - h.majorPageFaults
          })
        }
      }
    };
  } finally {
    u.stop();
  }
}
async function Wi(e) {
  let n = new Set(),
    r = await kt("installed-CLI PATH sweep", () => wVn(PJr, n), e);
  if ("failure" in r) t(`[agent-proxy] ${r.failure.detail}; naming only the CLIs resolved so far`, {
    level: "warn"
  }), c("agent_proxy_init", r.failure.timedOut ? "agent_proxy_path_probe_timeout" : "agent_proxy_path_probe_failed", r.failure.fields);
  return PJr.filter(item => n.has(item));
}
var ur = 65536,
  lr = `#!/bin/sh
# claude agent-proxy governed-git gh shim (auto-generated; per-session).
`;
async function Ar(e) {
  try {
    await using n = await $i(e, Cc());
    let r = await h0(n, ur + 1);
    return r.length > ur ? "" : r.toString("utf8");
  } catch (error) {
    if (!qt(error)) t(`[agent-proxy] gh shim at ${e} could not be read (${k(error) ?? "no error code"}); treated as not a shim`, {
      level: "warn"
    });
    return "";
  }
}
function dr(e, n) {
  let r = URL.parse(sme(n))?.hostname;
  return r !== void 0 && st(e, r);
}
async function cr(e, n) {
  let r = await kt("jq PATH probe", () => Er("jq", e), n);
  if ("failure" in r) return t(`[agent-proxy] ${r.failure.detail}; taking jq as installed`, {
    level: "warn"
  }), c("agent_proxy_gh_shim", r.failure.timedOut ? "jq_path_probe_timeout" : "jq_path_probe_failed", r.failure.fields), !1;
  return r.value === void 0;
}
function fr(e, n, r) {
  vt(async () => {
    if ((await Ar(e)) !== n) return;
    if (await he(e).catch(() => {}), r) {
      let o = q(e, "..");
      await rr(o).then(() => rr(q(o, ".."))).catch(() => {});
    }
  });
}
async function Pr(e, caBundlePath_3, r, o, a) {
  c("agent_proxy_gh_shim", "skipped_windows");
  return;
  if (!p) {
    let anyHost = s && o === void 0,
      C = s ? [] : Cr().filter(item => item !== jr && !item.endsWith(jQe) && dr(o, item)),
      port_2;
    switch (e.kind) {
      case "relay":
        port_2 = e.port;
        break;
      case "standalone":
        port_2 = Y$n;
        break;
    }
    let v = qqi({
      command: w,
      port: port_2,
      caBundlePath: caBundlePath_3,
      ghesHosts: anyHost ? l4 : C
    });
    return await zn(u, v, 493), fr(u, v, s), t(`[agent-proxy] no gh on PATH; gh stand-in shim at ${u}`), g("agent_proxy_gh_shim", {
      standin: !0,
      ...(s && {
        hosted: !0
      })
    }), {
      shimDir: h,
      standin: !0,
      enterprise: C.length > 0,
      anyHost: anyHost,
      noJq: await cr(h, a)
    };
  }
  switch (e.kind) {
    case "relay":
      S = "", x = `HTTPS_PROXY='${ue(e.port)}' https_proxy='${ue(e.port)}' \\
`;
      break;
    case "standalone":
      S = Vqi(), x = "";
      break;
  }
}
function At() {
  return fe("GIT_CONFIG_COUNT") === void 0;
}
function Bt() {
  return fe("SSH_AUTH_SOCK") === void 0 && fe("GIT_SSH_COMMAND") === void 0;
}
function Ke(caBundlePath_4, n) {
  let state_4 = ke().state;
  if (state_4.governedGitTools) {
    let a = n ? `see ${n} and ` : "",
      s = state_4.ghStandin === !0,
      h = vVr() ? "other network traffic goes through the same proxy, and other tools that reach github.com there (curl, npm, or gh run with a GitHub token of its own) fail TLS verification: only git and gh trust that CA bundle." : "other network traffic uses this machine's own egress.";
    return `GitHub access for git${s ? " and gh" : ""} goes through a pre-configured session proxy (CA bundle: ${caBundlePath_4}) via per-session git config${s ? " and a gh PATH shim" : ""}; ${h} If ${s ? "git or gh fail" : "git fails"} against github.com (TLS or HTTP errors, or a transfer cut off with connection reset / unexpected disconnect), ${a}check the git config file named by $GIT_CONFIG_GLOBAL; never disable TLS verification or remove the proxy/sslCAInfo entries there.` + (state_4.ghShimDir && !s ? " `gh` in a Bash command is this machine's own GitHub CLI, with its own sign-in and network path." : "");
  }
  let installedClis = (state_4.installedProxyPreconfiguredClis ?? []).filter(item => !(state_4.ghStandin === !0 && item === "gh"));
  return {
    caBundlePath: caBundlePath_4,
    hasReadme: n !== void 0,
    installedClis: installedClis
  };
}
var ji = [["git_http_proxy_configured", /^http\.(.+\.)?proxy$/m], ["git_ssl_cainfo_configured", /^http\.(.+\.)?sslcainfo$/m], ["git_https_to_ssh_insteadof_configured", /^url\.(git@|ssh:\/\/).*\.insteadof$/m]];
function Yi() {
  let e = Li(Mi()).root;
  try {
    let n = Rt();
    if (n && Di(n).isDirectory()) return n;
    return e;
  } catch {
    return e;
  }
}
async function Xi() {
  let e = new Set(),
    n = await Promise.all(["--global", "--system"].map(item => lt("git", ["config", item, "--list", "--name-only"], {
      timeout: 5000,
      preserveOutputOnError: !0,
      cwd: Yi()
    })));
  for (let r of n) {
    if (r.code !== 0) continue;
    for (let [o, a] of ji) if (a.test(r.stdout)) e.add(o);
  }
  return [...e];
}
function qi(e, n) {
  let r = q(n, ".."),
    o = `http://127.0.0.1:${e}`;
  return `# Claude Code agent proxy

Outbound HTTPS from this session goes through a local proxy at ${o}
(set via HTTPS_PROXY) which tunnels to a policy-enforcing egress proxy. TLS is
re-terminated there, so every tool must trust the CA bundle at
${n}. The standard CA environment variables, the system trust
store (where possible), a JVM truststore, the Bazel system bazelrc, the
browser NSS store, and gsutil's boto config are already set up.

## Quick diagnosis

1. Run: curl -sS ${o}/__agentproxy/status
   It reports proxy state, which trust and git accommodations are active
   (javaTrustStorePath, toolTrustFailureCodes, gitSshRewrite,
   gitConfigConflicts), and the most recent proxy-side failures.
2. Find the failure class below and apply the matching fix; gitConfigConflicts
   codes map to the git section, toolTrustFailureCodes to the JVM section.
3. Never disable TLS verification, never unset HTTPS_PROXY, and do not retry
   policy denials (403/407) \u2014 report them instead.

## Failure classes and fixes

### "certificate verify failed" / "self-signed certificate in chain" / PKIX errors

The failing tool is not reading the pre-set CA configuration. In order:

- If the tool has a CA flag or env var, point it at ${n}
  (examples: --cacert, SSL_CERT_FILE, NODE_EXTRA_CA_CERTS, REQUESTS_CA_BUNDLE,
  AWS_CA_BUNDLE, DENO_CERT, CARGO_HTTP_CAINFO, PIP_CERT, GIT_SSL_CAINFO,
  BUNDLE_SSL_CA_CERT, HEX_CACERTS_PATH, NIX_SSL_CERT_FILE).
- Tool config files override environment variables. If one of these sets its
  own CA or disables verification, point it at the bundle instead:
  pip.conf "cert", npm "cafile" (npm config get cafile), ~/.curlrc "cacert",
  .wgetrc "ca_certificate", conda "ssl_verify", git "http.sslCAInfo",
  gradle.properties / MAVEN_OPTS "-Djavax.net.ssl.trustStore".
- JVM tools (Maven, Gradle, plain Java): when a JDK is present,
  JAVA_TOOL_OPTIONS points JVMs at a truststore that holds the proxy CA: the
  JDK's own store if the system trust install already added the CA there,
  otherwise ${r}/java-truststore.p12 (password "changeit"). Confirm
  javaTrustStorePath is set in the status output before pointing a build at it
  (toolTrustFailureCodes explains why it is missing). If the image or the
  build sets its own trustStore, that one wins \u2014 import the proxy CA into it
  with
  keytool -importcert -noprompt -alias ccr-agent-proxy -file ${r}/agent-proxy-ca.crt -keystore <their store>
  or point the build at the ready-made one. Bazel reads the managed block in
  /etc/bazel.bazelrc rather than JAVA_TOOL_OPTIONS.

### "405 Method Not Allowed" from the proxy

The tool sent a plain-HTTP (non-CONNECT) request: usually axios older than
1.16.1 (upgrade it) or a tool configured with HTTP_PROXY (unset HTTP_PROXY for
that tool \u2014 only HTTPS_PROXY is supported).

### 403 / 407 from the proxy

Most often the destination host is not allowed for this session. Do not retry
or route around it \u2014 report the blocked host.
Note: curl hides response bodies on failed CONNECTs; the status endpoint
records the reason.

### 429 / 503 from the proxy

Too many connections or requests went through the proxy, or the egress proxy
was busy. The proxy can hold a connection for about a minute before it refuses
it, so a tool with a short timeout of its own may report only a timeout. Run
fewer downloads or requests at once, then retry. connectsWaitingForTunnel and
openTunnels in the status output show the load. busyTunnels includes idle
connections until one has to wait, so alone it does not show load, and it can
pass maxBusyTunnels.

### "connection reset" / "unexpected disconnect" / "RPC failed" mid-transfer

Once a tunnel is up the proxy cannot send an error response, so a connection
it aborts (tunnel to the egress proxy lost, or an upload the tunnel stopped
accepting) reaches the tool as a bare reset. recentRelayFailures in the status
output names the host and reason; check it before concluding the remote
service refused the operation.

### Tool ignores the proxy entirely (timeouts with no proxy error)

Some clients do not read HTTPS_PROXY: Node's built-in fetch (run that command
with NODE_USE_ENV_PROXY=1 on Node >= 22.21), aiohttp (pass trust_env=True),
Ruby bundler (reads only HTTP_PROXY, which this proxy does not serve),
hand-rolled Go dialers. Prefer the tool's own proxy option where one exists.

### git

SSH-form GitHub remotes (git@github.com:...) are rewritten to HTTPS
automatically unless this session has its own SSH setup or supplies its own
GIT_CONFIG_* (see gitSshRewrite in the status output). A gitconfig that sets
http.proxy / http.<url>.proxy (even empty), its own http.sslCAInfo, or an
https-to-ssh insteadOf makes git bypass the proxy or fail verification \u2014 the
status output's gitConfigConflicts codes name which of these were detected;
adjust those keys for this session if git times out.

### docker build / docker run

Processes inside containers cannot reach 127.0.0.1:${e} and do not trust
the CA. Workarounds: run builds with --network host, copy ${n}
into the build context and install it in an early layer, and pass proxy/CA
settings explicitly to the build.

### Not supported through the proxy (report, do not work around)

gRPC / HTTP/2-only APIs, WebSocket upgrades, client-mTLS, certificate-pinned
clients (e.g. Snowflake, ngrok), non-443 HTTPS ports, raw-TCP databases.

If a tool still cannot work through the proxy, report it so the policy or
tooling can be fixed.
`;
}
async function Ji(e) {
  try {
    return {
      existed: !0,
      token: (await be(e, "utf8")).trim() || null
    };
  } catch (error) {
    if (K(error)) return {
      existed: !1,
      token: null
    };
    return t(`[agent-proxy] token read failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    }), {
      existed: !1,
      token: null
    };
  }
}
async function cZs(e = _r) {
  for (let n of e) try {
    return await be(n, "utf8");
  } catch {}
  return "";
}
var Ki = 1048576;
async function Vi(e, n) {
  let r = new Set(),
    o = [],
    a = e;
  for (let s of Ape) {
    let h = process.env[s]?.trim();
    if (!h || h === n || r.has(h) || _r.includes(h)) continue;
    r.add(h);
    let u;
    try {
      let w = await yr(h);
      if (!w.isFile() || w.size > Ki) continue;
      u = await be(h, "utf8");
    } catch (error) {
      if (!K(error)) t(`[agent-proxy] could not read customer CA bundle from ${s}: ${error instanceof Error ? error.message : String(error)}`, {
        level: "warn"
      });
      continue;
    }
    let y = u.match(jO);
    if (!y) continue;
    let p = 0;
    for (let w of y) {
      if (a.includes(w)) continue;
      o.push(w), a += `
${w}`, p++;
    }
    if (p > 0) t(`[agent-proxy] folded ${p} customer CA cert(s) from ${s} into the relay bundle`);
  }
  if (o.length === 0) return "";
  return ixe(o.join(`
`), "agent proxy trust") ?? o.flatMap(item => ixe(item, "agent proxy trust") ?? []).join(`
`);
}
var zi = [{
    dir: "/usr/local/share/ca-certificates",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-certificates"],
    link: "/etc/ssl/certs/ccr-agent-proxy.pem",
    direct: direct
  }, {
    dir: "/etc/pki/ca-trust/source/anchors",
    name: "ccr-agent-proxy.crt",
    refresh: ["update-ca-trust", "extract"]
  }],
  Qi = 1e4;
function Ot(e, n) {
  if (n.javaTrustStorePath && n.javaTrustStoreType) e.javaTrustStorePath = n.javaTrustStorePath, e.javaTrustStoreType = n.javaTrustStoreType;else if (e.javaTrustStorePath === n.retiredJavaTrustStorePath || e.javaTrustStorePath === n.rejectedJdkStorePath) e.javaTrustStorePath = void 0, e.javaTrustStoreType = void 0;
}
async function iia(e, n, {
  systemCa: systemCa_3,
  recordPath: recordPath_2,
  timeoutMs: a = Qi
}) {
  let s = await Ee(recordPath_2, e),
    h = uZs(systemCa_3, e) && s !== "different",
    u = () => zn(recordPath_2, e).catch(x => {
      t(`[agent-proxy] could not record the system trust install: ${d(x)}`);
    }),
    y = {},
    p = ve(e),
    w = pr(e),
    S = !1;
  for (let {
    dir: dir,
    name: name,
    refresh: refresh,
    link: link_2,
    direct: R
  } of n) try {
    let anchorPath_2 = q(dir, name),
      A = link_2 ? {
        path: q(dir, name.replace(/\.crt$/, "-2.crt")),
        link: link_2.replace(/\.pem$/, "-2.pem")
      } : void 0,
      B = A === void 0 ? void 0 : await de(A.path),
      M = B === void 0 || B.state === "missing",
      O = A !== void 0 && p !== void 0 && M,
      j = h ? await de(anchorPath_2) : void 0;
    if (j?.state === "read") {
      let G = pe(j.text, e);
      if (M ? G === "same" && s === "same" : G !== "different" && B?.state === "read" && pe(B.text, pr(j.text)) === "same") {
        if (t(`[agent-proxy] CA already in the system trust store${G === "swapped" ? ", its two certificates in the other order" : ""}; install skipped`), s === "swapped") await u();
        return g("agent_proxy_system_trust", {
          reused: !0,
          ...(O && {
            old_layout: !0
          }),
          ...(s === "swapped" && {
            swapped: !0
          })
        }), S ? "failed" : "reused";
      }
    }
    if (R && link_2 && M) {
      let G = Date.now() + a,
        D = !1,
        F = await ht(e, {
          anchorPath: anchorPath_2,
          link: link_2,
          layout: R,
          recordPath: recordPath_2,
          timeoutMs: a
        }),
        L = F.outcome === "installed" ? F.javaStore : void 0;
      if (F.outcome === "installed" && p !== void 0 && A) D = !0, F = await ht(w, {
        anchorPath: A.path,
        link: A.link,
        layout: R,
        recordPath: recordPath_2,
        timeoutMs: Math.max(1, G - Date.now())
      });
      switch (F.outcome) {
        case "installed":
          return await u(), t("[agent-proxy] CA installed to system trust directly"), g("agent_proxy_system_trust", {
            reused: !1,
            method: f("direct"),
            ...(L && {
              java_store: f(L)
            }),
            ...(D && F.javaStore && {
              second_anchor_java_store: f(F.javaStore)
            })
          }), S ? "failed" : "installed";
        case "hook_incomplete":
          return c("agent_proxy_system_trust", "hook_incomplete"), "failed";
        case "abandoned":
          {
            let step_2 = F.step;
            y = {
              direct_failed_step: f(step_2)
            };
            break;
          }
        case "not_attempted":
          {
            let ee = f(F.reason);
            y = D ? {
              second_anchor_direct_skipped: ee
            } : {
              direct_skipped: ee
            };
            break;
          }
      }
    } else if (R && link_2) y = {
      direct_skipped: f("anchor_present")
    };
    if (await Ve(anchorPath_2, e, "utf8"), await he(recordPath_2).catch(() => {}), A && (p !== void 0 || !M)) await Ve(A.path, w, "utf8"), await he(A.link).catch(() => {});
    if (link_2) await he(link_2).catch(() => {});
    let I = await new Promise(G => {
      Oi(refresh[0], refresh.slice(1), {
        timeout: a,
        cwd: "/",
        windowsHide: !0,
        ...au("helper")
      }, D => G(D ? K(D) ? 127 : 1 : 0));
    });
    if (I === 0) return await u(), t(`[agent-proxy] CA installed to system trust via ${refresh[0]}`), g("agent_proxy_system_trust", {
      reused: !1,
      method: f("refresh"),
      ...y
    }), S ? "failed" : "installed";
    S = !0, t(`[agent-proxy] ${refresh[0]} exited ${I}; falling back to env-var trust`, {
      level: "warn"
    });
  } catch (error) {
    if (K(error)) continue;
    S = !0, t(`[agent-proxy] system trust install via ${dir} failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
  }
  if (n.length > 0) c("agent_proxy_system_trust", "unavailable", y);
  return S ? "failed" : "no_store";
}
function pr(e) {
  return `${ve(e) ?? e.match(jO)?.[0] ?? e.trimEnd()}
`;
}
function Zi(e) {
  try {
    return new Bi(e), !0;
  } catch {
    return !1;
  }
}
var ea = 65536,
  ta = {
    oversized: "ca-cert response is larger than any certificate bundle",
    no_certificate: "ca-cert response contains no certificate",
    unparseable_certificate: "ca-cert response contains a certificate that does not parse",
    stray_marker: "ca-cert response has PEM framing outside its certificates (truncated, or not a certificate bundle)"
  };
function aia(bundle) {
  if (bundle.length > ea) return {
    ok: !1,
    problem: "oversized"
  };
  let n = bundle.match(jO);
  if (!n) return {
    ok: !1,
    problem: "no_certificate"
  };
  if (!n.every(Zi)) return {
    ok: !1,
    problem: "unparseable_certificate"
  };
  if (bundle.replace(jO, "").includes("-----BEGIN")) return {
    ok: !1,
    problem: "stray_marker"
  };
  return {
    ok: !0,
    bundle: bundle
  };
}
function uZs(e, n) {
  let r = n.match(jO);
  return r !== null && r.every(item => e.includes(item));
}
function gr(e, n) {
  if (e.outcome === "retry") return e;
  return t(`[agent-proxy] ${e.detail}; proxy disabled`, {
    level: "warn"
  }), m("agent_proxy_init", `agent_proxy_init_ca_${e.code}`, {
    ca_source: f(n)
  }), e;
}
var na = 65536;
function lia(e) {
  let n = e.trim();
  if (n === "") return {
    ok: !1,
    reason: "empty"
  };
  if (!/^[A-Za-z0-9+/=]+$/.test(n)) return {
    ok: !1,
    reason: "not base64"
  };
  let r = Buffer.from(n, "base64");
  if (r.length === 0 || r.length > na) return {
    ok: !1,
    reason: `decoded to ${r.length} bytes`
  };
  let o = Ce(r.toString("utf8"));
  return o.ok ? {
    ok: !0,
    pem: o.blocks.join(`
`) + `
`
  } : o;
}
var ra = 3,
  oa = 3600000,
  hr = 3;
function Nt(e) {
  return q(e, "..", "system-trust.ca.pem");
}
var ia = /^(nss_|java_truststore_)/;
async function vr(e, n) {
  return (await Ee(q(e, "..", "agent-proxy-ca.crt"), n)) !== "different";
}
function Rr(e, n) {
  return e === "failed" || n.some(item => ia.test(item));
}
function Dt(e, n, recordPath_3, o, systemCa_4 = e.systemCa) {
  return iia(n, e.opts?.systemTrustTargets ?? zi, {
    systemCa: systemCa_4,
    recordPath: recordPath_3
  }).catch(() => "failed").then(s => (o?.(), s));
}
async function aa(e, n, r, {
  systemTrust: systemTrust_2,
  toolTrust: toolTrust_2,
  installDeferred: installDeferred_2,
  onInstallSettled: onInstallSettled,
  embeddedEndpoint: embeddedEndpoint_2,
  relayPort: relayPort,
  trust: trust_2
}) {
  let {
      runtime: runtime_4,
      baseUrl: baseUrl_3,
      localCa: localCa_3,
      caBundlePath: caBundlePath_5,
      governedGitTools: governedGitTools_3,
      opts: opts_3
    } = e,
    R = Nt(caBundlePath_5),
    v = installDeferred_2,
    A = D => {
      v = !1;
      let F = Dt(e, D, R, onInstallSettled);
      if (trust_2) trust_2.systemTrust = F;
      return F;
    },
    B = Date.now(),
    M = !1,
    O;
  for (let D = 1;; D++) {
    if (D > 1) {
      let F = O?.outcome === "retry" ? O : void 0;
      await J(opts_3?.retryDelayMs?.(D) ?? dZs(D, F?.retryAfter ?? null), void 0, {
        unref: !0
      });
    }
    if (runtime_4.state !== n) return;
    if (St()) {
      if (v) await A(r);
      return;
    }
    if (O = await It(baseUrl_3, {
      budgetMs: opts_3?.caFetchBudgetMs ?? 15000,
      tries: 1
    }), O.outcome !== "retry") break;
    if (onInstallSettled(), v && D >= ra) {
      if (runtime_4.state !== n) return;
      await A(r);
    }
    if (!M && Date.now() - B >= (opts_3?.retryBadAfterMs ?? br)) M = !0, t(`[agent-proxy] CA reconcile: ${O.detail}; still failing after ${D} attempts, retrying anyway`, {
      level: "warn"
    }), c("agent_proxy_ca_reconcile", "fetch_still_failing");
  }
  if (runtime_4.state !== n || O === void 0) return;
  if (O.outcome !== "ok") {
    if (t(`[agent-proxy] CA reconcile: ${O.detail}; the bundle keeps the environment's CA`, {
      level: "warn"
    }), c("agent_proxy_ca_reconcile", "fetch_http_error"), v) await A(r);
    return;
  }
  let j = pe(O.ccrCa, r);
  if (j === "same") {
    if (g("agent_proxy_ca_reconcile", {
      changed: !1
    }), v) await A(r);
    return;
  }
  let I = await $t(localCa_3, O.ccrCa, caBundlePath_5);
  if (I.outcome !== "ok") {
    if (t(`[agent-proxy] CA reconcile: ${I.detail}; the bundle keeps the environment's CA`, {
      level: "warn"
    }), c("agent_proxy_ca_reconcile", "write_failed"), v && runtime_4.state === n) await A(O.ccrCa);
    return;
  }
  if (trust_2) trust_2.ccrCa = O.ccrCa, trust_2.systemTrust = void 0, trust_2.installIncomplete = !0;
  if (runtime_4.state !== n) return;
  if (t(`[agent-proxy] CA reconcile: the served CA differs from the environment${j === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten`), g("agent_proxy_ca_reconcile", {
    changed: !0,
    ...(j === "swapped" && {
      swapped: !0
    })
  }), embeddedEndpoint_2) Kvr({
    proxyUrl: ue(relayPort),
    gatewayCa: O.ccrCa
  });
  if (governedGitTools_3) return;
  if (await systemTrust_2, runtime_4.state !== n) return;
  let systemTrust_3 = A(O.ccrCa);
  if (await systemTrust_3, opts_3?.toolTrust === !1 || runtime_4.state !== n) return;
  if (await toolTrust_2, runtime_4.state !== n) return;
  await Je({
    ccrCa: O.ccrCa,
    caBundlePath: caBundlePath_5,
    hasSystemCa: n.hasSystemCa ?? !1,
    stateDir: q(caBundlePath_5, ".."),
    systemTrust: systemTrust_3,
    ...(opts_3?.toolTrust ?? {})
  }).then(D => {
    if (runtime_4.state !== n) return;
    Ot(n, D), n.toolTrustFailureCodes = D.failureCodes.length > 0 ? D.failureCodes : void 0;
  }).catch(D => {
    t(`[agent-proxy] CA reconcile: tool trust rebuild failed: ${d(D)}`, {
      level: "warn"
    }), c("agent_proxy_ca_reconcile", "tool_trust_rebuild_threw");
  });
}
function mr(e, n, r, ccrCa) {
  let {
      runtime: runtime_5,
      caBundlePath: caBundlePath_6,
      opts: opts_4
    } = e,
    u = Nt(caBundlePath_6),
    {
      systemTrust: systemTrust_4,
      toolTrust: toolTrust_3
    } = r,
    w = [],
    S = !1,
    systemTrust_5 = (async () => {
      if (await systemTrust_4, runtime_5.state !== n) return;
      let C = opts_4?.systemCaPath ? await be(opts_4.systemCaPath, "utf8").catch(() => "") : await cZs(),
        R = await systemTrust_4;
      if (R === "failed" || R === void 0) await he(u).catch(() => {});
      return Dt(e, ccrCa, u, void 0, C);
    })(),
    T = (async () => {
      if (await systemTrust_5, opts_4?.toolTrust === !1 || runtime_5.state !== n) return;
      if (await toolTrust_3, runtime_5.state !== n) return;
      await Je({
        ccrCa: ccrCa,
        caBundlePath: caBundlePath_6,
        hasSystemCa: n.hasSystemCa ?? !1,
        stateDir: q(caBundlePath_6, ".."),
        systemTrust: systemTrust_5,
        ...(opts_4?.toolTrust ?? {})
      }).then(C => {
        if (runtime_5.state !== n) return;
        Ot(n, C), n.toolTrustFailureCodes = C.failureCodes.length > 0 ? C.failureCodes : void 0, w = C.failureCodes;
      }).catch(C => {
        t(`[agent-proxy] CA watch: tool trust rebuild failed: ${d(C)}`, {
          level: "warn"
        }), S = !0;
      });
    })().then(async () => {
      if (runtime_5.state !== n) return;
      let C = opts_4?.toolTrust === !1 || (await vr(caBundlePath_6, ccrCa)),
        R = S || !C || Rr(await systemTrust_5, w);
      if (runtime_5.state === n) r.installIncomplete = R;
    });
  return r.ccrCa = ccrCa, r.systemTrust = systemTrust_5, r.toolTrust = T, T;
}
async function sa(e, n, r, {
  intervalMs: intervalMs_2,
  afterStart: afterStart_2,
  embeddedEndpoint: embeddedEndpoint_3,
  relayPort: relayPort_2
}) {
  let {
    runtime: runtime_6,
    baseUrl: baseUrl_4,
    localCa: localCa_4,
    caBundlePath: caBundlePath_7,
    opts: opts_5
  } = e;
  await afterStart_2;
  let x = !1,
    E = (T, C) => {
      if (t(`[agent-proxy] CA watch: ${T}; checking again later`), !x) x = !0, c("agent_proxy_ca_watch", C);
    };
  for (;;) {
    if (await J(intervalMs_2, void 0, {
      unref: !0
    }), runtime_6.state !== n || sg() || St()) return;
    let T = await It(baseUrl_4, {
      budgetMs: opts_5?.caFetchBudgetMs ?? 15000,
      tries: 1
    });
    if (runtime_6.state !== n) return;
    if (T.outcome !== "ok") {
      E(T.detail, T.outcome === "retry" ? "fetch_failed" : "fetch_http_error");
      continue;
    }
    if (!Ce(T.ccrCa).ok) {
      E("the served CA does not parse", "unparsable");
      continue;
    }
    let C = pe(T.ccrCa, r.ccrCa);
    if (C === "same") {
      if (x = !1, !r.installIncomplete) continue;
      if (r.installRetries >= hr) {
        t(`[agent-proxy] CA watch: a trust store did not take the CA after ${hr} more tries; leaving it until the CA changes`, {
          level: "warn"
        }), c("agent_proxy_ca_watch", "install_incomplete"), r.installIncomplete = !1;
        continue;
      }
      r.installRetries++, t("[agent-proxy] CA watch: trust stores refreshing again for the CA the bundle holds"), await mr(e, n, r, T.ccrCa);
      continue;
    }
    let R = await $t(localCa_4, T.ccrCa, caBundlePath_7);
    if (R.outcome !== "ok") {
      E(R.detail, "write_failed");
      continue;
    }
    if (x = !1, r.installRetries = 0, runtime_6.state !== n) return;
    if (t(`[agent-proxy] CA watch: the served CA changed${C === "swapped" ? " (the same two certificates, in the other order)" : ""}; bundle rewritten, trust stores refreshing`), g("agent_proxy_ca_watch", {
      changed: !0,
      ...(C === "swapped" && {
        swapped: !0
      })
    }), embeddedEndpoint_3) Kvr({
      proxyUrl: ue(relayPort_2),
      gatewayCa: T.ccrCa
    });
    await mr(e, n, r, T.ccrCa);
  }
}
async function It(e, {
  budgetMs: budgetMs_2,
  tries: tries,
  viaStandaloneProxy = !1
}) {
  let signal = AbortSignal.timeout(budgetMs_2),
    s = "",
    retryAfter = null;
  for (let y = 0; y < tries; y++) {
    retryAfter = null;
    try {
      let url = `${e}${Xwo}/ca-cert`,
        w = await fetch(url, {
          signal: signal,
          ...(viaStandaloneProxy && ba({
            url: url
          })),
          ...$A(void 0)
        });
      if (w.status >= 500 || w.status === 408 || w.status === 429) {
        s = `status ${w.status}`, retryAfter = w.headers.get("retry-after");
        continue;
      }
      if (!w.ok) return {
        outcome: "fatal",
        code: "http_error",
        detail: `ca-cert fetch ${w.status}`
      };
      let S = aia(await w.text());
      if (!S.ok) {
        s = ta[S.problem];
        continue;
      }
      return {
        outcome: "ok",
        ccrCa: S.bundle
      };
    } catch (error) {
      s = error instanceof Error ? error.message : String(error);
    }
  }
  return {
    outcome: "retry",
    detail: `ca-cert fetch exhausted (${s})`,
    retryAfter: retryAfter
  };
}
async function $t(e, n, r) {
  try {
    await Pt(q(r, ".."), {
      recursive: !0
    }), await zn(r, la(e, n));
  } catch (error) {
    let detail_3 = `ca-bundle write failed (${d(error)})`;
    if (lFr(error)) return {
      outcome: "retry",
      detail: detail_3,
      retryAfter: null
    };
    return {
      outcome: "fatal",
      code: "write_failed",
      detail: detail_3
    };
  }
  return {
    outcome: "ok"
  };
}
async function ua(e) {
  try {
    await Pt(q(e, ".."), {
      recursive: !0,
      mode: 448
    }), await Ve(e, `[default]
s3 =
  payload_signing_enabled = false
`, {
      flag: "wx",
      mode: 384
    });
  } catch (error) {
    if (k(error) === "EEXIST") return;
    t(`[agent-proxy] aws config write failed: ${error instanceof Error ? error.message : String(error)}`, {
      level: "warn"
    });
  }
}
function ue(e) {
  return `http://127.0.0.1:${e}`;
}
function la(e, n) {
  return e + `
` + n;
}
export { tia, nia, noProxy as wjo, ria, oia, aga, sia, lga, dZs, OXn, dga, cga, uga, cZs, iia, aia, uZs, lia };