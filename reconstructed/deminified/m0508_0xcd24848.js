// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
var l = [];
class $oe {
  #n = () => l;
  #l = () => !0;
  #t = () => !1;
  #e = l;
  #s = () => !1;
  #o;
  #i = new WeakMap();
  provide(o, t = () => !0, e = () => !1) {
    this.#n = o, this.#l = t, this.#t = e, this.#o = void 0;
  }
  presentUntilAnnounced(o, t) {
    this.#e = o, this.#s = t, this.#o = void 0;
  }
  presentable() {
    return this.#l();
  }
  tools() {
    let source = this.#n();
    if (this.#e.some(({
      machine: machine
    }) => this.#t(machine))) {
      let e = this.#e.filter(({
        machine: machine_2
      }) => !this.#t(machine_2));
      this.#e = e.length > 0 ? e : l;
    }
    let pending = this.#s() ? this.#e : l;
    if (this.#o === void 0 || this.#o.source !== source || this.#o.pending !== pending) {
      let e = [...source, ...pending.filter(({
        tool: tool,
        machine: machine_3
      }) => !source.some(item => item.machine === machine_3 && item.tool.name === tool.name))];
      for (let {
        tool: tool_2,
        machine: machine_4
      } of e) this.#i.set(tool_2, machine_4);
      this.#o = {
        source: source,
        pending: pending,
        tools: e.map(({
          tool: tool_3
        }) => tool_3)
      };
    }
    return this.#o.tools;
  }
  machineFor(o) {
    return this.tools(), this.#i.get(o);
  }
}
function ype(o) {
  return o.toolState?.get($oe).tools() ?? a;
}
var a = [];
export { $oe, ype };