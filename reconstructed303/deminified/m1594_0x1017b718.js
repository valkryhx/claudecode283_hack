// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { ui, at, j, K } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { arn } from "B:/~BUN/root/chunk-mtfk0qfd.js";
import { t } from "B:/~BUN/root/chunk-6za2ez23.js";
import { lH } from "B:/~BUN/root/chunk-0g1grf6f.js";
class f {
  #e = new Map();
  #n;
  #t = new Map();
  #s = 0;
  #i = !1;
  #o = !1;
  savesWith(e) {
    this.#n = e;
  }
  hold(e, ending, deleteFile) {
    if (this.#n?.isOn()) this.#t.delete(e), this.#e.set(e, {
      ending: ending,
      deleteFile: deleteFile,
      lostAtHold: this.#n.lostSoFar()
    });
  }
  forget(e) {
    this.#e.delete(e), this.#t.delete(e);
  }
  withdraw(e) {
    let n = [];
    for (let [s, {
      ending: ending_2,
      deleteFile: deleteFile_2
    }] of this.#e) if (ending_2.toolUseId !== void 0 && e(ending_2.toolUseId)) {
      let r = this.#t.has(s);
      this.forget(s), deleteFile_2(r), n.push(s), t(`MCP task endings: a rewind removes the call that started task ${s}, so its saved ending is being deleted`);
    }
    return n;
  }
  get isConversationSaved() {
    return this.#n?.isOn() ?? !1;
  }
  isHeld(e) {
    return this.#e.has(e);
  }
  look(e, n) {
    if (this.#e.size === 0) return;
    let s = K(),
      i = new Map();
    for (let d = 0; d < n; d++) {
      let r = e[d],
        o = z9r(r);
      if (o !== void 0) {
        let a = this.#e.get(o);
        if (a?.ending.sessionId === s && a.ending.runId === sar(r)) i.set(o, r.uuid);
      } else if (i.size === 0) continue;else if (r.type === "system" && r.subtype === "compact_boundary") i.clear();else if (g(r)) {
        for (let [a, u] of i) this.#t.set(a, [u, r.uuid]);
        i.clear();
      }
    }
    return this.#s++, d => {
      if (this.#s--, d) this.#a();else this.#d([...this.#e.keys()]);
    };
  }
  #r() {
    if (this.#s > 0) return [];
    let e = [];
    for (let [n, s] of this.#t) {
      let i = this.#e.get(n);
      if (i !== void 0) e.push([n, i, s]);
    }
    return e;
  }
  #d(e) {
    for (let n of e) this.#e.delete(n), this.#t.delete(n), t(`MCP task endings: part of the conversation may not have been saved, so the saved ending of task ${n} is left for the next resume`, {
      level: "warn"
    });
  }
  async #a() {
    let e = this.#n;
    if (e === void 0) return;
    if (this.#i) {
      this.#o = !0;
      return;
    }
    this.#i = !0;
    try {
      for (let n = this.#r(); n.length > 0; n = this.#r()) {
        this.#o = !1;
        let s = await e.save(n.flatMap(([,, o]) => o)).catch(() => !1),
          i = e.lostSoFar(),
          d = n.filter(([o, a]) => this.#e.get(o) === a),
          r = d.filter(([, o]) => o.lostAtHold === i);
        if (this.#d(d.filter(([, o]) => o.lostAtHold !== i).map(([o]) => o)), !s) {
          if (this.#o) continue;
          if (r.length > 0) t(`MCP task endings: the conversation is not confirmed saved, so ${r.length} saved ending(s) are kept and checked again at the next save or resume`);
          return;
        }
        for (let [o, a] of r) this.#e.delete(o), this.#t.delete(o), a.deleteFile(!0), t(`MCP task endings: the model has read the notification of task ${o}, so its saved ending is being deleted`);
      }
    } catch (error) {
      l(error);
    } finally {
      this.#i = !1;
    }
  }
}
function g(e) {
  if (e.type !== "assistant" || e.message.model === ui) return !1;
  let {
    content: content
  } = e.message;
  return Array.isArray(content) && content.some(item => item.type === "tool_use" || item.type === "text" && item.text.trim() !== "");
}
var gNe = new at(() => new f());
function ets() {
  return gNe.peek(j())?.isConversationSaved ?? !1;
}
function DCn(e, n, s) {
  try {
    gNe.peek(j())?.hold(e, n, s);
  } catch (error) {
    l(error);
  }
}
function tts(e) {
  gNe.peek(j())?.forget(e);
}
function YEt(e, n, s) {
  try {
    let i = gNe.peek(s ?? j())?.look(e, n);
    return i && (d => {
      try {
        i(d);
      } catch (error) {
        l(error);
      }
    });
  } catch (error) {
    l(error);
    return;
  }
}
function z9r(e) {
  return arn.exec(c(e) ?? "")?.[1];
}
function sar(e) {
  if (e.type === "user") return e.origin?.kind === "task-notification" && e.origin.subkind === void 0 ? lH(e.origin.runId) : void 0;
  return e.type === "attachment" && e.attachment?.type === "queued_command" && e.attachment.commandMode === "task-notification" && (e.attachment.origin == null || e.attachment.origin.kind === "task-notification" && e.attachment.origin.subkind === void 0) ? lH(e.attachment.runId) : void 0;
}
function c(e) {
  if (sar(e) === void 0) return;
  if (e.type === "attachment") return e.attachment.type === "queued_command" && typeof e.attachment.prompt === "string" ? e.attachment.prompt : void 0;
  let n = e.type === "user" ? e.message?.content : void 0,
    s = Array.isArray(n) ? n[0] : n;
  if (typeof s === "string") return s;
  return typeof s === "object" && s !== null && "text" in s && typeof s.text === "string" ? s.text : void 0;
}
export { gNe, ets, DCn, tts, YEt, z9r, sar };