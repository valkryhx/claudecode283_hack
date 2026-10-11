// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { qvn } from "B:/~BUN/root/chunk-jpnyq4t7.js";
import { y } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { Me } from "B:/~BUN/root/chunk-ekrhn4q1.js";
import { R, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var entries = [];
class i {
  #n = Me();
  #o = {
    entries: entries,
    loading: !1
  };
  #t = !1;
  #i = 0;
  #e = 0;
  getSnapshot = () => this.#o;
  subscribe = e => this.#n.subscribe(e);
  #r(e) {
    let t = this.#o,
      r = {
        ...t,
        ...e
      };
    if (r.entries === t.entries && r.loading === t.loading) return;
    this.#o = r, this.#n.emit();
  }
  get pending() {
    return this.#e !== 0;
  }
  clear() {
    this.#t = !1, this.#r({
      entries: entries
    });
  }
  beginLoad() {
    if (this.#e = ++this.#i, !this.#t) this.#r({
      loading: !0
    });
    return this.#e;
  }
  endLoad(e) {
    if (e !== this.#e) return;
    this.#e = 0, this.#r({
      loading: !1
    });
  }
  setEntries(e) {
    this.#t = !0, this.#r({
      entries: e.length === 0 ? entries : e
    });
  }
  get known() {
    return this.#t;
  }
}
function y1e() {
  return {
    roster: null,
    selection: null,
    view: null,
    attach: null,
    editor: null,
    deleteConfirm: null,
    earlier: new i(),
    agentLastUsedMigrationDone: !1,
    scope: null,
    resultSeen: {
      entryChannel: y("unknown"),
      openFinished: null,
      emitted: new Set()
    },
    fleetNudgeStore: null,
    killRing: qvn()
  };
}
function lQn({
  selection: selection,
  view: view,
  attach: attach,
  editor: editor,
  deleteConfirm: deleteConfirm
}, {
  clock: clock,
  groupsEnabled: groupsEnabled
}) {
  R(() => {
    let d = selection.attachView({
        clock: clock,
        onError: editor.setError
      }),
      p = view.attachView({
        groupsEnabled: groupsEnabled
      }),
      c = attach.attachView(),
      h = editor.attachView(),
      S = deleteConfirm.attachView();
    return () => {
      S(), h(), c(), p(), d();
    };
  }, [selection, view, attach, editor, deleteConfirm, clock]);
}
export { y1e, lQn };