// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n, HG } from "B:/~BUN/root/chunk-qey16aan.js";
import { pt } from "B:/~BUN/root/chunk-v95bwhaa.js";
import { Ir } from "B:/~BUN/root/chunk-39zyvd3e.js";
import { re } from "B:/~BUN/root/chunk-xkw95p5n.js";
import { Io } from "B:/~BUN/root/chunk-03yjyf4y.js";
import { Y } from "B:/~BUN/root/chunk-c1v460b9.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Ce } from "B:/~BUN/root/chunk-cync0e08.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { pUe } from "B:/~BUN/root/chunk-014t6da7.js";
import { p4n } from "B:/~BUN/root/chunk-cbbfqbjt.js";
import { is } from "B:/~BUN/root/chunk-09epe94m.js";
import { Ys } from "B:/~BUN/root/chunk-28bb8488.js";
import { gt } from "B:/~BUN/root/chunk-sx03ea6s.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { sIe, iIe } from "B:/~BUN/root/chunk-6dpcedmk.js";
import { O, Z, y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
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
function P() {
  let R = S(1),
    i;
  if (R[0] === w) i = e(n, {
    dimColor: !0,
    children: "Claude Code will be able to read files in this directory and make edits when auto-accept edits is on."
  }), R[0] = i;else i = R[0];
  return i;
}
function M(R) {
  let d = S(5),
    {
      path: i
    } = R,
    a;
  if (d[0] !== i) a = e(n, {
    color: "permission",
    children: i
  }), d[0] = i, d[1] = a;else a = d[1];
  let p;
  if (d[2] === w) p = e(P, {}), d[2] = p;else p = d[2];
  let t;
  if (d[3] !== a) t = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [a, p]
  }), d[3] = a, d[4] = t;else t = d[4];
  return t;
}
function q(R) {
  let m = S(16),
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
  if (m[0] === w) E = e(n, {
    children: "Enter the path to the directory:"
  }), m[0] = E;else E = m[0];
  let f;
  if (m[1] !== cursorOffset || m[2] !== onChange || m[3] !== onChangeCursorOffset || m[4] !== onSubmit || m[5] !== value) f = e(s, {
    borderDimColor: !0,
    borderStyle: "round",
    marginTop: 1,
    paddingLeft: 1,
    children: e(Ir, {
      showCursor: !0,
      focus: !0,
      placeholder: `Directory path${re.ellipsis}`,
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
    children: e(pUe, {
      suggestions: suggestions,
      selectedSuggestion: selectedSuggestion,
      noPad: !0
    })
  }), m[7] = selectedSuggestion, m[8] = suggestions, m[9] = v;else v = m[9];
  let o;
  if (m[10] !== error) o = e(Ys, {
    error: error
  }), m[10] = error, m[11] = o;else o = m[11];
  let F;
  if (m[12] !== f || m[13] !== v || m[14] !== o) F = r(s, {
    flexDirection: "column",
    children: [E, f, v, o]
  }), m[12] = f, m[13] = v, m[14] = o, m[15] = F;else F = m[15];
  return F;
}
function Pvt(R) {
  let o = S(38),
    {
      onAddDirectory: onAddDirectory,
      onAlreadyAccessible: onAlreadyAccessible,
      onCancel: onCancel,
      permissionContext: permissionContext,
      directoryPath: t
    } = R,
    C = Io(),
    [value_2, onChange_3] = y(""),
    [cursorOffset_2, onChangeCursorOffset_2] = y(0),
    [error_2, v] = y(null),
    F;
  if (o[0] === w) F = [], o[0] = F;else F = o[0];
  let [suggestions_2, ge] = y(F),
    [selectedSuggestion_2, K] = y(0),
    de;
  if (o[1] !== C) de = async pe => {
    if (!pe) {
      ge([]), K(0);
      return;
    }
    let _e = await p4n(C, pe);
    ge(_e), K(0);
  }, o[1] = C, o[2] = de;else de = o[2];
  let T = HG(de, 100),
    me,
    fe;
  if (o[3] !== T || o[4] !== value_2) me = () => {
    T(value_2);
  }, fe = [value_2, T], o[3] = T, o[4] = value_2, o[5] = me, o[6] = fe;else me = o[5], fe = o[6];
  O(me, fe);
  let he;
  if (o[7] === w) he = et => {
    let ye = et.id + "/";
    onChange_3(ye), onChangeCursorOffset_2(ye.length), v(null);
  }, o[7] = he;else he = o[7];
  let tt = he,
    be;
  if (o[8] !== onAddDirectory || o[9] !== onAlreadyAccessible || o[10] !== permissionContext) be = async ot => {
    let x = await sIe(ot, permissionContext);
    if (x.resultType === "success") {
      onAddDirectory(x.absolutePath, !1);
      return;
    }
    if (x.resultType === "alreadyInWorkingDirectory" && !x.isExactMatch && onAlreadyAccessible?.(x)) {
      return;
    }
    v(iIe(x));
  }, o[8] = onAddDirectory, o[9] = onAlreadyAccessible, o[10] = permissionContext, o[11] = be;else be = o[11];
  let onSubmit_2 = be,
    Se;
  if (o[12] === w) Se = {
    context: "Settings"
  }, o[12] = Se;else Se = o[12];
  pt("confirm:no", onCancel, Se);
  let ve;
  if (o[13] !== selectedSuggestion_2 || o[14] !== suggestions_2) ve = g => {
    if (suggestions_2.length > 0) {
      if (g.name === "tab") {
        g.preventDefault();
        let we = suggestions_2[selectedSuggestion_2];
        if (we) tt(we);
        return;
      }
      if (g.name === "up" || g.ctrl && g.name === "p") {
        g.preventDefault(), K(De => De <= 0 ? suggestions_2.length - 1 : De - 1);
        return;
      }
      if (g.name === "down" || g.ctrl && g.name === "n") {
        g.preventDefault(), K(xe => xe >= suggestions_2.length - 1 ? 0 : xe + 1);
        return;
      }
    }
  }, o[13] = selectedSuggestion_2, o[14] = suggestions_2, o[15] = ve;else ve = o[15];
  let onKeyDown = ve,
    Ae;
  if (o[16] !== t || o[17] !== onAddDirectory || o[18] !== onCancel) Ae = rt => {
    if (!t) {
      return;
    }
    kt: switch (rt) {
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
  }, o[16] = t, o[17] = onAddDirectory, o[18] = onCancel, o[19] = Ae;else Ae = o[19];
  let onChange_2 = Ae,
    inputGuide;
  if (o[20] !== t) inputGuide = t ? void 0 : r(Ce, {
    children: [e(Y, {
      chord: "tab",
      action: "complete"
    }), e(Y, {
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
    }), e(Ze, {
      options: options,
      onChange: onChange_2,
      onCancel: () => onChange_2("no")
    })]
  }) : r(s, {
    flexDirection: "column",
    gap: 1,
    children: [e(P, {}), e(q, {
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
  if (o[31] !== onCancel || o[32] !== inputGuide || o[33] !== children) children_2 = e(ke, {
    title: "Add directory to workspace",
    onCancel: onCancel,
    color: "permission",
    isCancelActive: !1,
    inputGuide: inputGuide,
    children: children
  }), o[31] = onCancel, o[32] = inputGuide, o[33] = children, o[34] = children_2;else children_2 = o[34];
  let Oe;
  if (o[35] !== onKeyDown || o[36] !== children_2) Oe = e(is, {
    onKeyDown: onKeyDown,
    children: children_2
  }), o[35] = onKeyDown, o[36] = children_2, o[37] = Oe;else Oe = o[37];
  return Oe;
}
export { Pvt };