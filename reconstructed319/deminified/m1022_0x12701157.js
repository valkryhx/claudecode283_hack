// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { SS } from "B:/~BUN/root/chunk-wgm0dv7j.js";
import { i } from "B:/~BUN/root/chunk-j6pt0v41.js";
import { e } from "B:/~BUN/root/chunk-t16eynda.js";
import { Ho, ko, O, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
j();
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
function Rvt(r, n, options = {}) {
  let o = U(r),
    d = ++o.run,
    f = options.marksJobBlocked === !0 && !!i.CLAUDE_JOB_DIR;
  return new Promise((l, a) => {
    let m = !1;
    function R(s) {
      if (m || o.run !== d) return;
      m = !0, a(s);
    }
    function g(s) {
      let p = o.jobWrites.then(s).catch(() => {
        return;
      });
      return o.jobWrites = p, p;
    }
    function b(s) {
      for (let p = s; p < n.length; p++) {
        let v = !1,
          J = !0,
          A = !1,
          w,
          V = !1,
          M = () => {
            if (f && !w && !v && !V) w = g(() => import("B:/~BUN/root/chunk-gpa9abd9.js").then(c => c.markStartupDialogBlocked()));
          },
          N = () => {
            let c = w;
            if (w = void 0, V = !0, c) g(async () => {
              let z = await c;
              if (z) {
                let F = await import("B:/~BUN/root/chunk-gpa9abd9.js");
                await F.clearStartupDialogBlocked(z);
              }
            });
          },
          _ = c => {
            if (v || m || o.run !== d) return;
            if (v = !0, A = c === "stop", N(), !J) y(A ? "done" : b(p + 1));
          },
          dialog;
        try {
          dialog = n[p](_);
        } catch (error) {
          return R(error), "failed";
        } finally {
          J = !1;
        }
        if (v) {
          if (A) return "done";
          continue;
        }
        if (dialog instanceof Promise) dialog = dialog.catch(c => (R(c), new Promise(() => {}))), dialog.then(c => {
          if (c !== null && c !== void 0) M();
        });else if (dialog === null || dialog === void 0) {
          v = !0;
          continue;
        } else M();
        return {
          key: ++o.keys,
          dialog: dialog,
          pass: () => _(),
          tornDown: N,
          replaced: N,
          options: options
        };
      }
      return "done";
    }
    function y(s) {
      if (s === "failed" || o.run !== d) return;
      if (s === "done") {
        P(o, null), l();
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
      P(o, s);
    }
    y(b(0));
  });
}
function IM(r, dialog_3, options_2 = {}) {
  let o = U(r);
  o.run++;
  let replaced = () => {},
    f = new Promise(a => {
      replaced = a;
    }),
    l = {
      key: ++o.keys,
      dialog: dialog_3,
      pass: () => {},
      tornDown: () => {},
      replaced: replaced,
      options: options_2
    };
  return P(o, l), {
    update: dialog_4 => {
      if (o.screen?.key === l.key) P(o, {
        ...l,
        dialog: dialog_4
      });
    },
    replaced: f
  };
}
function P(tree, screen) {
  if (tree.screen && tree.screen.key !== screen?.key) tree.screen.replaced();
  if (tree.screen = screen, !tree.rendered && screen === null) return;
  tree.rendered = !0, tree.root.render(e(q, {
    tree: tree,
    screen: screen
  }));
}
function q(r) {
  let o = S(8),
    {
      tree: tree_2,
      screen: screen_2
    } = r,
    d,
    f;
  if (o[0] !== tree_2) d = () => () => {
    tree_2.rendered = !1, tree_2.screen?.tornDown();
  }, f = [tree_2], o[0] = tree_2, o[1] = d, o[2] = f;else d = o[1], f = o[2];
  if (O(d, f), screen_2 === null) {
    return null;
  }
  let children;
  if (o[3] !== screen_2) children = e(C, {
    screen: screen_2
  }), o[3] = screen_2, o[4] = children;else children = o[4];
  let a;
  if (o[5] !== screen_2.key || o[6] !== children) a = e(Ho, {
    fallback: null,
    children: children
  }, screen_2.key), o[5] = screen_2.key, o[6] = children, o[7] = a;else a = o[7];
  return a;
}
function C(r) {
  let d = S(12),
    {
      screen: screen_3
    } = r,
    children_2 = screen_3.dialog instanceof Promise ? ko(screen_3.dialog) : screen_3.dialog,
    o = children_2 !== null && children_2 !== void 0,
    f,
    l;
  if (d[0] !== screen_3 || d[1] !== o) f = () => {
    if (!o) screen_3.pass();
  }, l = [screen_3, o], d[0] = screen_3, d[1] = o, d[2] = f, d[3] = l;else f = d[2], l = d[3];
  if (O(f, l), !o) {
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
  if (d[4] !== onChangeAppState || d[5] !== session) onChangeAppState_2 = onChangeAppState && (b => onChangeAppState(b, session)), d[4] = onChangeAppState, d[5] = session, d[6] = onChangeAppState_2;else onChangeAppState_2 = d[6];
  let y;
  if (d[7] !== children_2 || d[8] !== session || d[9] !== storageV5 || d[10] !== onChangeAppState_2) y = e(SS, {
    session: session,
    storageV5: storageV5,
    onChangeAppState: onChangeAppState_2,
    children: children_2
  }), d[7] = children_2, d[8] = session, d[9] = storageV5, d[10] = onChangeAppState_2, d[11] = y;else y = d[11];
  return y;
}
export { Rvt, IM };