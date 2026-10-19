// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, F$ } from "B:/~BUN/root/chunk-damrp3r8.js";
import { rt } from "B:/~BUN/root/chunk-pw5vpw1q.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { qr } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { xCe } from "B:/~BUN/root/chunk-wng69n5z.js";
import { myn } from "B:/~BUN/root/chunk-kxp9j9f6.js";
import { ko } from "B:/~BUN/root/chunk-r9cctkt4.js";
import { ls } from "B:/~BUN/root/chunk-fzhngknh.js";
import { gt } from "B:/~BUN/root/chunk-vs438w4e.js";
import { e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { Obe, Ibe } from "B:/~BUN/root/chunk-2tf4j7v3.js";
import { P, Z, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function inputFilter(l) {
  return l.replace(/[\r\n]/g, "");
}
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
function O() {
  let R = w(1),
    i;
  if (R[0] === S) i = e(n, {
    dimColor: !0,
    children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }), R[0] = i;else i = R[0];
  return i;
}
function M(R) {
  let d = w(5),
    {
      path: i
    } = R,
    a;
  if (d[0] !== i) a = e(n, {
    color: "permission",
    children: i
  }), d[0] = i, d[1] = a;else a = d[1];
  let p;
  if (d[2] === S) p = e(O, {}), d[2] = p;else p = d[2];
  let t;
  if (d[3] !== a) t = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [a, p]
  }), d[3] = a, d[4] = t;else t = d[4];
  return t;
}
function Y(R) {
  let m = w(16),
    {
      value: value,
      onChange: onChange,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      onSubmit: onSubmit,
      error: error,
      suggestions: suggestions,
      selectedSuggestion: selectedSuggestion
    } = R,
    E;
  if (m[0] === S) E = e(n, {
    children: "Enter the path to the directory:"
  }), m[0] = E;else E = m[0];
  let f;
  if (m[1] !== cursorOffset || m[2] !== onChange || m[3] !== onChangeCursorOffset || m[4] !== onSubmit || m[5] !== value) f = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    paddingLeft: 1,
    children: e(Lr, {
      showCursor: !0,
      focus: !0,
      placeholder: `Directory path${te.ellipsis}`,
      value: value,
      onChange: onChange,
      onSubmit: onSubmit,
      columns: 80,
      cursorOffset: cursorOffset,
      onChangeCursorOffset: onChangeCursorOffset,
      inputFilter: inputFilter,
      disableCursorMovementForUpDownKeys: !0
    })
  }), m[1] = cursorOffset, m[2] = onChange, m[3] = onChangeCursorOffset, m[4] = onSubmit, m[5] = value, m[6] = f;else f = m[6];
  let v;
  if (m[7] !== selectedSuggestion || m[8] !== suggestions) v = suggestions.length > 0 && e(s, {
    marginBottom: 1,
    children: e(xCe, {
      suggestions: suggestions,
      selectedSuggestion: selectedSuggestion,
      noPad: !0
    })
  }), m[7] = selectedSuggestion, m[8] = suggestions, m[9] = v;else v = m[9];
  let o;
  if (m[10] !== error) o = e(ls, {
    error: error
  }), m[10] = error, m[11] = o;else o = m[11];
  let F;
  if (m[12] !== f || m[13] !== v || m[14] !== o) F = r(s, {
    flexDirection: "column",
    children: [E, f, v, o]
  }), m[12] = f, m[13] = v, m[14] = o, m[15] = F;else F = m[15];
  return F;
}
function ztt(R) {
  let o = w(38),
    {
      onAddDirectory: onAddDirectory,
      onAlreadyAccessible: onAlreadyAccessible,
      onCancel: onCancel,
      permissionContext: permissionContext,
      directoryPath: t
    } = R,
    C = qr(),
    [value_2, onChange_3] = y(""),
    [cursorOffset_2, onChangeCursorOffset_2] = y(0),
    [error_2, v] = y(null),
    F;
  if (o[0] === S) F = [], o[0] = F;else F = o[0];
  let [suggestions_2, ge] = y(F),
    [selectedSuggestion_2, K] = y(0),
    de;
  if (o[1] !== C) de = async pe => {
    if (!pe) {
      ge([]), K(0);
      return;
    }
    let _e = await myn(C, pe);
    ge(_e), K(0);
  }, o[1] = C, o[2] = de;else de = o[2];
  let T = F$(de, 100),
    me,
    fe;
  if (o[3] !== T || o[4] !== value_2) me = () => {
    T(value_2);
  }, fe = [value_2, T], o[3] = T, o[4] = value_2, o[5] = me, o[6] = fe;else me = o[5], fe = o[6];
  P(me, fe);
  let he;
  if (o[7] === S) he = et => {
    let ye = et.id + "/";
    onChange_3(ye), onChangeCursorOffset_2(ye.length), v(null);
  }, o[7] = he;else he = o[7];
  let tt = he,
    Ce;
  if (o[8] !== onAddDirectory || o[9] !== onAlreadyAccessible || o[10] !== permissionContext) Ce = async ot => {
    let x = await Obe(ot, permissionContext);
    if (x.resultType === "success") {
      onAddDirectory(x.absolutePath, !1);
      return;
    }
    if (x.resultType === "alreadyInWorkingDirectory" && !x.isExactMatch && onAlreadyAccessible?.(x)) {
      return;
    }
    v(Ibe(x));
  }, o[8] = onAddDirectory, o[9] = onAlreadyAccessible, o[10] = permissionContext, o[11] = Ce;else Ce = o[11];
  let onSubmit_2 = Ce,
    ve;
  if (o[12] === S) ve = {
    context: "Settings"
  }, o[12] = ve;else ve = o[12];
  rt("confirm:no", onCancel, ve);
  let we;
  if (o[13] !== selectedSuggestion_2 || o[14] !== suggestions_2) we = g => {
    if (suggestions_2.length > 0) {
      if (g.name === "tab") {
        g.preventDefault();
        let De = suggestions_2[selectedSuggestion_2];
        if (De) tt(De);
        return;
      }
      if (g.name === "up" || g.ctrl && g.name === "p") {
        g.preventDefault(), K(xe => xe <= 0 ? suggestions_2.length - 1 : xe - 1);
        return;
      }
      if (g.name === "down" || g.ctrl && g.name === "n") {
        g.preventDefault(), K(Ae => Ae >= suggestions_2.length - 1 ? 0 : Ae + 1);
        return;
      }
    }
  }, o[13] = selectedSuggestion_2, o[14] = suggestions_2, o[15] = we;else we = o[15];
  let onKeyDown = we,
    Oe;
  if (o[16] !== t || o[17] !== onAddDirectory || o[18] !== onCancel) Oe = nt => {
    if (!t) {
      return;
    }
    kt: switch (nt) {
      case "yes-session":
        {
          onAddDirectory(t, !1);
          break kt;
        }
      case "yes-remember":
        {
          onAddDirectory(t, !0);
          break kt;
        }
      case "no":
        {
          onCancel();
        }
    }
  }, o[16] = t, o[17] = onAddDirectory, o[18] = onCancel, o[19] = Oe;else Oe = o[19];
  let onChange_2 = Oe,
    inputGuide;
  if (o[20] !== t) inputGuide = t ? void 0 : r(Se, {
    children: [e(q, {
      chord: "tab",
      action: "complete"
    }), e(q, {
      chord: "enter",
      action: "add"
    }), e(gt, {
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
    children: [e(M, {
      path: t
    }), e(Xe, {
      options: options,
      onChange: onChange_2,
      onCancel: () => onChange_2("no")
    })]
  }) : r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(O, {}), e(Y, {
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
  if (o[31] !== onCancel || o[32] !== inputGuide || o[33] !== children) children_2 = e(be, {
    title: "Add directory to workspace",
    onCancel: onCancel,
    color: "permission",
    isCancelActive: !1,
    inputGuide: inputGuide,
    children: children
  }), o[31] = onCancel, o[32] = inputGuide, o[33] = children, o[34] = children_2;else children_2 = o[34];
  let Pe;
  if (o[35] !== onKeyDown || o[36] !== children_2) Pe = e(ko, {
    onKeyDown: onKeyDown,
    children: children_2
  }), o[35] = onKeyDown, o[36] = children_2, o[37] = Pe;else Pe = o[37];
  return Pe;
}
export { ztt };