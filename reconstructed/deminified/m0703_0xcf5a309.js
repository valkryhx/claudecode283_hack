// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { W_ } from "B:/~BUN/root/chunk-9hqq0jcs.js";
import { a } from "B:/~BUN/root/chunk-nkmmqnq7.js";
import { e } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Sr, mr, R, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
N();
var weakMap = new WeakMap();
function U(root) {
  let n = weakMap.get(root);
  if (!n) n = {
    root: root,
    screen: null,
    rendered: !1,
    run: 0,
    keys: 0,
    jobWrites: Promise.resolve()
  }, weakMap.set(root, n);
  return n;
}
function tje(r, n, options = {}) {
  let o = U(r),
    d = ++o.run,
    f = options.marksJobBlocked === !0 && !!a.CLAUDE_JOB_DIR;
  return new Promise((l, i) => {
    let S = !1;
    function k(s) {
      if (S || o.run !== d) return;
      S = !0, i(s);
    }
    function m(s) {
      let p = o.jobWrites.then(s).catch(() => {
        return;
      });
      return o.jobWrites = p, p;
    }
    function A(s) {
      for (let p = s; p < n.length; p++) {
        let v = !1,
          J = !0,
          j = !1,
          h,
          V = !1,
          M = () => {
            if (f && !h && !v && !V) h = m(() => import("B:/~BUN/root/chunk-dcbe03mz.js").then(c => c.markStartupDialogBlocked()));
          },
          D = () => {
            let c = h;
            if (h = void 0, V = !0, c) m(async () => {
              let z = await c;
              if (z) {
                let F = await import("B:/~BUN/root/chunk-dcbe03mz.js");
                await F.clearStartupDialogBlocked(z);
              }
            });
          },
          _ = c => {
            if (v || S || o.run !== d) return;
            if (v = !0, j = c === "stop", D(), !J) y(j ? "done" : A(p + 1));
          },
          dialog;
        try {
          dialog = n[p](_);
        } catch (error) {
          return k(error), "failed";
        } finally {
          J = !1;
        }
        if (v) {
          if (j) return "done";
          continue;
        }
        if (dialog instanceof Promise) dialog = dialog.catch(c => (k(c), new Promise(() => {}))), dialog.then(c => {
          if (c !== null && c !== void 0) M();
        });else if (dialog === null || dialog === void 0) {
          v = !0;
          continue;
        } else M();
        return {
          key: ++o.keys,
          dialog: dialog,
          pass: () => _(),
          tornDown: D,
          replaced: D,
          options: options
        };
      }
      return "done";
    }
    function y(s) {
      if (s === "failed" || o.run !== d) return;
      if (s === "done") {
        b(o, null), l();
        return;
      }
      if (!o.rendered && s.dialog instanceof Promise) {
        o.screen = s, s.dialog.then(dialog_2 => {
          if (o.screen !== s || o.run !== d) return;
          if (dialog_2 === null || dialog_2 === void 0) s.pass();else y({
            ...s,
            dialog: dialog_2
          });
        });
        return;
      }
      b(o, s);
    }
    y(A(0));
  });
}
function sO(r, dialog_3, options_2 = {}) {
  let o = U(r);
  o.run++;
  let replaced = () => {},
    f = new Promise(i => {
      replaced = i;
    }),
    l = {
      key: ++o.keys,
      dialog: dialog_3,
      pass: () => {},
      tornDown: () => {},
      replaced: replaced,
      options: options_2
    };
  return b(o, l), {
    update: dialog_4 => {
      if (o.screen?.key === l.key) b(o, {
        ...l,
        dialog: dialog_4
      });
    },
    replaced: f
  };
}
function b(tree, screen) {
  if (tree.screen && tree.screen.key !== screen?.key) tree.screen.replaced();
  if (tree.screen = screen, !tree.rendered && screen === null) return;
  tree.rendered = !0, tree.root.render(e(q, {
    tree: tree,
    screen: screen
  }));
}
function q(r) {
  let o = w(8),
    {
      tree: tree_2,
      screen: screen_2
    } = r,
    d,
    f;
  if (o[0] !== tree_2) d = () => () => {
    tree_2.rendered = !1, tree_2.screen?.tornDown();
  }, f = [tree_2], o[0] = tree_2, o[1] = d, o[2] = f;else d = o[1], f = o[2];
  if (R(d, f), screen_2 === null) {
    return null;
  }
  let children;
  if (o[3] !== screen_2) children = e(O, {
    screen: screen_2
  }), o[3] = screen_2, o[4] = children;else children = o[4];
  let i;
  if (o[5] !== screen_2.key || o[6] !== children) i = e(Sr, {
    fallback: null,
    children: children
  }, screen_2.key), o[5] = screen_2.key, o[6] = children, o[7] = i;else i = o[7];
  return i;
}
function O(r) {
  let d = w(12),
    {
      screen: screen_3
    } = r,
    children_2 = screen_3.dialog instanceof Promise ? mr(screen_3.dialog) : screen_3.dialog,
    o = children_2 !== null && children_2 !== void 0,
    f,
    l;
  if (d[0] !== screen_3 || d[1] !== o) f = () => {
    if (!o) screen_3.pass();
  }, l = [screen_3, o], d[0] = screen_3, d[1] = o, d[2] = f, d[3] = l;else f = d[2], l = d[3];
  if (R(f, l), !o) {
    return null;
  }
  let {
    session: session,
    onChangeAppState: onChangeAppState,
    storageV5: storageV5
  } = screen_3.options;
  if (!session) {
    return children_2;
  }
  let onChangeAppState_2;
  if (d[4] !== onChangeAppState || d[5] !== session) onChangeAppState_2 = onChangeAppState && (A => onChangeAppState(A, session)), d[4] = onChangeAppState, d[5] = session, d[6] = onChangeAppState_2;else onChangeAppState_2 = d[6];
  let y;
  if (d[7] !== children_2 || d[8] !== session || d[9] !== storageV5 || d[10] !== onChangeAppState_2) y = e(W_, {
    session: session,
    storageV5: storageV5,
    onChangeAppState: onChangeAppState_2,
    children: children_2
  }), d[7] = children_2, d[8] = session, d[9] = storageV5, d[10] = onChangeAppState_2, d[11] = y;else y = d[11];
  return y;
}
export { tje, sO };