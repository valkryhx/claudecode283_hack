// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n, pU } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { ze } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { ir } from "B:/~BUN/root/chunk-4r6zcwth.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { Eue } from "B:/~BUN/root/chunk-z5tnpw18.js";
import { vWt } from "B:/~BUN/root/chunk-bm2wsr80.js";
import { jr } from "B:/~BUN/root/chunk-1xe8mz4a.js";
import { ko } from "B:/~BUN/root/chunk-v1xd9kf3.js";
import { Xe } from "B:/~BUN/root/chunk-parcaazx.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { ose, sse } from "B:/~BUN/root/chunk-v8xy4z2n.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { R, X, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
var options = [{
  value: "yes-session",
  label: "Yes, for this session"
}, {
  value: "yes-remember",
  label: "Yes, and remember this directory"
}, {
  value: "no",
  label: "No"
}];
function x() {
  let I = w(1),
    i;
  if (I[0] === S) i = e(n, {
    dimColor: !0,
    children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }), I[0] = i;else i = I[0];
  return i;
}
function q(I) {
  let d = w(5),
    {
      path: i
    } = I,
    c;
  if (d[0] !== i) c = e(n, {
    color: "permission",
    children: i
  }), d[0] = i, d[1] = c;else c = d[1];
  let p;
  if (d[2] === S) p = e(x, {}), d[2] = p;else p = d[2];
  let t;
  if (d[3] !== c) t = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [c, p]
  }), d[3] = c, d[4] = t;else t = d[4];
  return t;
}
function z(I) {
  let f = w(16),
    {
      value: value,
      onChange: onChange,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      onSubmit: onSubmit,
      error: error,
      suggestions: suggestions,
      selectedSuggestion: selectedSuggestion
    } = I,
    K;
  if (f[0] === S) K = e(n, {
    children: "Enter the path to the directory:"
  }), f[0] = K;else K = f[0];
  let h;
  if (f[1] !== cursorOffset || f[2] !== onChange || f[3] !== onChangeCursorOffset || f[4] !== onSubmit || f[5] !== value) h = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    paddingLeft: 1,
    children: e(Qn, {
      showCursor: !0,
      focus: !0,
      placeholder: `Directory path${Z.ellipsis}`,
      value: value,
      onChange: onChange,
      onSubmit: onSubmit,
      columns: 80,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      disableCursorMovementForUpDownKeys: !0
    })
  }), f[1] = cursorOffset, f[2] = onChange, f[3] = onChangeCursorOffset, f[4] = onSubmit, f[5] = value, f[6] = h;else h = f[6];
  let v;
  if (f[7] !== selectedSuggestion || f[8] !== suggestions) v = suggestions.length > 0 && e(s, {
    marginBottom: 1,
    children: e(Eue, {
      suggestions: suggestions,
      selectedSuggestion: selectedSuggestion,
      noPad: !0
    })
  }), f[7] = selectedSuggestion, f[8] = suggestions, f[9] = v;else v = f[9];
  let o;
  if (f[10] !== error) o = e(ko, {
    error: error
  }), f[10] = error, f[11] = o;else o = f[11];
  let T;
  if (f[12] !== h || f[13] !== v || f[14] !== o) T = r(s, {
    flexDirection: "column",
    children: [K, h, v, o]
  }), f[12] = h, f[13] = v, f[14] = o, f[15] = T;else T = f[15];
  return T;
}
function dje(I) {
  let o = w(38),
    {
      onAddDirectory: onAddDirectory,
      onAlreadyAccessible: onAlreadyAccessible,
      onCancel: onCancel,
      permissionContext: permissionContext,
      directoryPath: t
    } = I,
    C = ir(),
    [value_2, onChange_3] = g(""),
    [cursorOffset_2, onChangeCursorOffset_2] = g(0),
    [error_2, v] = g(null),
    T;
  if (o[0] === S) T = [], o[0] = T;else T = o[0];
  let [suggestions_2, de] = g(T),
    [selectedSuggestion_2, E] = g(0),
    me;
  if (o[1] !== C) me = async pe => {
    if (!pe) {
      de([]), E(0);
      return;
    }
    let _e = await vWt(C, pe);
    de(_e), E(0);
  }, o[1] = C, o[2] = me;else me = o[2];
  let B = pU(me, 100),
    fe,
    he;
  if (o[3] !== B || o[4] !== value_2) fe = () => {
    B(value_2);
  }, he = [value_2, B], o[3] = B, o[4] = value_2, o[5] = fe, o[6] = he;else fe = o[5], he = o[6];
  R(fe, he);
  let be;
  if (o[7] === S) be = et => {
    let Se = et.id + "/";
    onChange_3(Se), onChangeCursorOffset_2(Se.length), v(null);
  }, o[7] = be;else be = o[7];
  let tt = be,
    Ce;
  if (o[8] !== onAddDirectory || o[9] !== onAlreadyAccessible || o[10] !== permissionContext) Ce = async ot => {
    let A = await ose(ot, permissionContext);
    if (A.resultType === "success") {
      onAddDirectory(A.absolutePath, !1);
      return;
    }
    if (A.resultType === "alreadyInWorkingDirectory" && !A.isExactMatch && onAlreadyAccessible?.(A)) {
      return;
    }
    v(sse(A));
  }, o[8] = onAddDirectory, o[9] = onAlreadyAccessible, o[10] = permissionContext, o[11] = Ce;else Ce = o[11];
  let onSubmit_2 = Ce,
    ve;
  if (o[12] === S) ve = {
    context: "Settings"
  }, o[12] = ve;else ve = o[12];
  ze("confirm:no", onCancel, ve);
  let we;
  if (o[13] !== selectedSuggestion_2 || o[14] !== suggestions_2) we = l => {
    if (suggestions_2.length > 0) {
      if (l.key === "tab") {
        l.preventDefault();
        let De = suggestions_2[selectedSuggestion_2];
        if (De) tt(De);
        return;
      }
      if (l.key === "up" || l.ctrl && l.key === "p") {
        l.preventDefault(), E(Ae => Ae <= 0 ? suggestions_2.length - 1 : Ae - 1);
        return;
      }
      if (l.key === "down" || l.ctrl && l.key === "n") {
        l.preventDefault(), E(ke => ke >= suggestions_2.length - 1 ? 0 : ke + 1);
        return;
      }
    }
  }, o[13] = selectedSuggestion_2, o[14] = suggestions_2, o[15] = we;else we = o[15];
  let onKeyDown = we,
    xe;
  if (o[16] !== t || o[17] !== onAddDirectory || o[18] !== onCancel) xe = rt => {
    if (!t) {
      return;
    }
    xt: switch (rt) {
      case "yes-session":
        {
          onAddDirectory(t, !1);
          break xt;
        }
      case "yes-remember":
        {
          onAddDirectory(t, !0);
          break xt;
        }
      case "no":
        {
          onCancel();
        }
    }
  }, o[16] = t, o[17] = onAddDirectory, o[18] = onCancel, o[19] = xe;else xe = o[19];
  let onChange_2 = xe,
    inputGuide;
  if (o[20] !== t) inputGuide = t ? void 0 : r(ye, {
    children: [e(F, {
      chord: "tab",
      action: "complete"
    }), e(F, {
      chord: "enter",
      action: "add"
    }), e(Xe, {
      action: "confirm:no",
      context: "Settings",
      fallback: "Esc",
      description: "cancel"
    })]
  }), o[20] = t, o[21] = inputGuide;else inputGuide = o[21];
  let children;
  if (o[22] !== cursorOffset_2 || o[23] !== value_2 || o[24] !== t || o[25] !== error_2 || o[26] !== onChange_2 || o[27] !== onSubmit_2 || o[28] !== selectedSuggestion_2 || o[29] !== suggestions_2) children = t ? r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(q, {
      path: t
    }), e(Fe, {
      options: options,
      onChange: onChange_2,
      onCancel: () => onChange_2("no")
    })]
  }) : r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(x, {}), e(z, {
      value: value_2,
      onChange: onChange_3,
      cursorOffset: cursorOffset_2,
      onChangeCursorOffset: onChangeCursorOffset_2,
      onSubmit: onSubmit_2,
      error: error_2,
      suggestions: suggestions_2,
      selectedSuggestion: selectedSuggestion_2
    })]
  }), o[22] = cursorOffset_2, o[23] = value_2, o[24] = t, o[25] = error_2, o[26] = onChange_2, o[27] = onSubmit_2, o[28] = selectedSuggestion_2, o[29] = suggestions_2, o[30] = children;else children = o[30];
  let children_2;
  if (o[31] !== onCancel || o[32] !== inputGuide || o[33] !== children) children_2 = e(ge, {
    title: "Add directory to workspace",
    onCancel: onCancel,
    color: "permission",
    isCancelActive: !1,
    inputGuide: inputGuide,
    children: children
  }), o[31] = onCancel, o[32] = inputGuide, o[33] = children, o[34] = children_2;else children_2 = o[34];
  let Pe;
  if (o[35] !== onKeyDown || o[36] !== children_2) Pe = e(jr, {
    onKeyDown: onKeyDown,
    children: children_2
  }), o[35] = onKeyDown, o[36] = children_2, o[37] = Pe;else Pe = o[37];
  return Pe;
}
export { dje };