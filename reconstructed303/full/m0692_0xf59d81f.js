// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  L,
  j,
  ii,
  yu
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  z
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  se
} from "B:/~BUN/root/chunk-6za2ez23.js";
class i {
  directories = [];
  announced = new Set;
  get() {
    return this.directories
  }
  publish(o) {
    let t = L([...o.additionalWorkingDirectories.values()].map((e) => e.path)).sort(),
      n = this.directories;
    if (n.length === t.length && n.every((e, s) => e === t[s])) return !1;
    return this.directories = t, !0
  }
  noteAnnounced(o) {
    for (let t of o) this.announced.add(t)
  }
  everAnnounced() {
    return [...this.announced]
  }
  reset() {
    this.directories = [], this.announced.clear()
  }
}
var d = new z(() => new i);

function r() {
  return d.of(j().host)
}

function f7() {
  let o = r(),
    t = ii(),
    n = yu();
  return o.noteAnnounced([...t === null ? [] : [t], ...n === null ? [] : [n], ...c(), ...o.get()]), o.get()
}

function Ues() {
  return r().everAnnounced()
}

function JTn(o) {
  return r().publish(o)
}

function c() {
  try {
    return [se().cwd()]
  } catch {
    return []
  }
}
export {
  f7,
  Ues,
  JTn
};
