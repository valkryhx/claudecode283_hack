// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Sf, xrn } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Xj, Eoe } from "B:/~BUN/root/chunk-6wjpaxb7.js";
var f = 256;
function xsr(e) {
  return e.tools.length === 0 && e.passthrough.length === 0 && e.plumbing.length === 0 && e.ignored.length === 0;
}
class fO {
  #e = new Map();
  #t = 0;
  #n = new Set();
  #o = !1;
  #r = void 0;
  #s = new Set();
  accept(e, {
    instanceId: instanceId,
    now: s,
    transport: transport
  }) {
    let name = e.host.name,
      m = e.tools.filter(item => !Xj.has(item.name)).map(item => item.name),
      ignoredTools = [...e.ignored, ...m],
      removed = [...this.#e.values()].filter(item => item.instanceId === instanceId).map(item => item.name);
    if (xsr(e)) {
      this.#e = c(this.#e, removed);
      let o = this.#e.get(name),
        heldByAnother = o !== void 0 && o.instanceId !== instanceId;
      for (let g of heldByAnother ? removed : [...removed, name]) if (this.#s.size < f) this.#s.add(g);
      return this.#t++, this.#i(), {
        status: "withdrawn",
        ignoredTools: ignoredTools,
        removed: removed,
        heldByAnother: heldByAnother
      };
    }
    let i = this.#e.get(name),
      h = e.tools.filter(item => Xj.has(item.name)),
      protocol = xrn((h[0] ?? e.tools[0])?.protocol_versions ?? [Sf]),
      l = {
        name: name,
        instanceId: instanceId,
        description: e.host,
        servedTools: new Set(h.map(item => item.name)),
        plumbing: e.plumbing,
        passthrough: new Map(e.passthrough.map(item => [item.name, item])),
        protocol: protocol,
        status: "online",
        awayReason: void 0,
        takenOverAt: i === void 0 ? void 0 : i.instanceId !== instanceId ? s : i.takenOverAt,
        lastHeardAt: s,
        transport: transport
      };
    return this.#e = new Map([...c(this.#e, removed), [name, l]]), this.#s.delete(name), this.#t++, this.#i(), {
      status: "announced",
      served: l.servedTools.size,
      passthroughAdopted: l.passthrough.size,
      protocolVersion: protocol.kind === "compatible" ? protocol.version : null,
      ignoredTools: ignoredTools,
      displaced: i !== void 0 && i.instanceId !== instanceId ? i.instanceId : void 0
    };
  }
  hasAnnouncedThisLife() {
    return this.#o;
  }
  withdrawnThisLife(e) {
    return this.#s.has(e);
  }
  onNextAnnounce(e) {
    return this.#n.add(e), () => {
      this.#n.delete(e);
    };
  }
  announceWaitExpired() {
    return this.#r;
  }
  markAnnounceWaitExpired(e) {
    this.#r = e;
  }
  #i() {
    this.#o = !0;
    let e = [...this.#n];
    this.#n.clear();
    for (let t of e) try {
      t();
    } catch {}
  }
  heard(e, lastHeardAt, epoch) {
    this.#a(e, n => ({
      ...n,
      status: "online",
      awayReason: void 0,
      lastHeardAt: lastHeardAt,
      description: epoch !== void 0 && epoch !== n.description.epoch ? {
        ...n.description,
        epoch: epoch
      } : n.description
    }));
  }
  markAway(e, awayReason) {
    this.#a(e, s => ({
      ...s,
      status: "offline",
      awayReason: awayReason
    }));
  }
  clear() {
    this.#e = new Map(), this.#t++;
  }
  generation() {
    return this.#t;
  }
  entries() {
    return [...this.#e.values()];
  }
  handleFor(hostName) {
    let t = this.#e.get(hostName);
    if (t === void 0) return;
    let {
      instanceId: instanceId_2
    } = t;
    return {
      instanceId: instanceId_2,
      hostName: hostName,
      live: () => {
        let n = this.#e.get(hostName);
        return n !== void 0 && n.instanceId === instanceId_2 ? {
          status: n.status,
          lastHeardAt: n.lastHeardAt
        } : void 0;
      },
      epoch: () => {
        let n = this.#e.get(hostName);
        return n !== void 0 && n.instanceId === instanceId_2 ? n.description.epoch : void 0;
      },
      heard: (n, r) => this.heard(instanceId_2, n, r),
      markAway: n => this.markAway(instanceId_2, n)
    };
  }
  hostsForTable() {
    return this.entries().map(item => ({
      kind: "remote",
      source: "session",
      name: item.name,
      status: item.status,
      enforcement: "self",
      description: item.description,
      servedTools: item.servedTools,
      ...(item.plumbing.some(item => Eoe.has(item)) && {
        plumbingTools: new Set(item.plumbing.filter(item => Eoe.has(item)))
      }),
      ...(item.passthrough.size > 0 && {
        passthroughTools: new Map([...item.passthrough.values()].map(item => [item.name, {
          localName: item.local_name
        }]))
      }),
      protocol: item.protocol,
      transport: item.transport,
      ...(item.takenOverAt !== void 0 && {
        takenOverAt: item.takenOverAt
      })
    }));
  }
  #a(e, t) {
    let s = this.entries().find(item => item.instanceId === e);
    if (s === void 0) return;
    let n = t(s);
    if (this.#e = new Map([...this.#e, [s.name, n]]), n.status !== s.status || n.awayReason !== s.awayReason || n.description !== s.description) this.#t++;
  }
}
function c(e, t) {
  return new Map([...e].filter(([s]) => !t.includes(s)));
}
export { xsr, fO };