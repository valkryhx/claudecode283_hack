// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { c } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { s, n, zt } from "B:/~BUN/root/chunk-damrp3r8.js";
import { woe, Var, bTt, LRe, qar } from "B:/~BUN/root/chunk-6g3t7qy0.js";
import { Xe } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { ko } from "B:/~BUN/root/chunk-r9cctkt4.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { P, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function Pe() {
  i("tengu_grove_privacy_settings_viewed", {});
}
var children = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`;
function J() {
  let a = w(9),
    f;
  if (a[0] === S) f = r(n, {
    children: ["An update to our Consumer Terms and Privacy Policy will take effect on", " ", e(n, {
      bold: !0,
      children: "October 8, 2025"
    }), ". You can accept the updated terms today."]
  }), a[0] = f;else f = a[0];
  let l;
  if (a[1] === S) l = e(n, {
    children: "What's changing?"
  }), a[1] = l;else l = a[1];
  let p, g;
  if (a[2] === S) p = e(n, {
    children: "\xB7 "
  }), g = e(n, {
    bold: !0,
    children: "Help improve our AI models "
  }), a[2] = p, a[3] = g;else p = a[2], g = a[3];
  let A;
  if (a[4] === S) A = e(s, {
    paddingLeft: 1,
    children: r(n, {
      children: [p, g, r(n, {
        children: ["\u2014 Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (", e(zt, {
          url: "https://claude.ai/settings/data-privacy-controls"
        }), ")."]
      })]
    })
  }), a[4] = A;else A = a[4];
  let o;
  if (a[5] === S) o = r(s, {
    flexDirection: "column",
    children: [l, A, e(s, {
      paddingLeft: 1,
      children: r(n, {
        children: [e(n, {
          children: "\xB7 "
        }), e(n, {
          bold: !0,
          children: "Updates to data retention "
        }), e(n, {
          children: "\u2014 To help us improve our AI models and safety protections, we're extending data retention to 5 years."
        })]
      })
    })]
  }), a[5] = o;else o = a[5];
  let d;
  if (a[6] === S) d = e(zt, {
    url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
  }), a[6] = d;else d = a[6];
  let u;
  if (a[7] === S) u = e(zt, {
    url: "https://anthropic.com/legal/terms"
  }), a[7] = u;else u = a[7];
  let t;
  if (a[8] === S) t = r(Q, {
    children: [f, o, r(n, {
      children: ["Learn more (", d, ") or read the updated Consumer Terms (", u, ") and Privacy Policy (", e(zt, {
        url: "https://anthropic.com/legal/privacy"
      }), ")"]
    })]
  }), a[8] = t;else t = a[8];
  return t;
}
function X() {
  let a = w(7),
    f;
  if (a[0] === S) f = e(n, {
    children: "We've updated our Consumer Terms and Privacy Policy."
  }), a[0] = f;else f = a[0];
  let l;
  if (a[1] === S) l = e(n, {
    children: "What's changing?"
  }), a[1] = l;else l = a[1];
  let p;
  if (a[2] === S) p = r(s, {
    flexDirection: "column",
    children: [e(n, {
      bold: !0,
      children: "Help improve our AI models"
    }), e(n, {
      children: "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings"
    }), e(zt, {
      url: "https://claude.ai/settings/data-privacy-controls"
    })]
  }), a[2] = p;else p = a[2];
  let g;
  if (a[3] === S) g = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [l, p, r(s, {
      flexDirection: "column",
      children: [e(n, {
        bold: !0,
        children: "How this affects data retention"
      }), e(n, {
        children: "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime."
      })]
    })]
  }), a[3] = g;else g = a[3];
  let A;
  if (a[4] === S) A = e(zt, {
    url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
  }), a[4] = A;else A = a[4];
  let o;
  if (a[5] === S) o = e(zt, {
    url: "https://anthropic.com/legal/terms"
  }), a[5] = o;else o = a[5];
  let d;
  if (a[6] === S) d = r(Q, {
    children: [f, g, r(n, {
      children: ["Learn more (", A, ") or read the updated Consumer Terms (", o, ") and Privacy Policy (", e(zt, {
        url: "https://anthropic.com/legal/privacy"
      }), ")"]
    })]
  }), a[6] = d;else d = a[6];
  return d;
}
function OZn(a) {
  let t = w(38),
    {
      showIfAlreadyViewed: showIfAlreadyViewed,
      location: location,
      onDone: onDone
    } = a,
    [g, A] = y(null),
    [o, d] = y(null),
    {
      credentials: credentials
    } = Oe(),
    h,
    O;
  if (t[0] !== credentials || t[1] !== location || t[2] !== onDone || t[3] !== showIfAlreadyViewed) h = () => {
    let T = async function T() {
      let [R, I] = await Promise.all([woe(credentials), LRe(credentials)]);
      let v = I.success ? I.data : null;
      d(v);
      let m = qar(R, I, showIfAlreadyViewed);
      if (A(m), !m) {
        onDone("skip_rendering");
        return;
      }
      Var(credentials), i("tengu_grove_policy_viewed", {
        location: c(location),
        dismissable: v?.notice_is_grace_period
      });
    };
    T();
  }, O = [showIfAlreadyViewed, location, onDone, credentials], t[0] = credentials, t[1] = location, t[2] = onDone, t[3] = showIfAlreadyViewed, t[4] = h, t[5] = O;else h = t[4], O = t[5];
  if (P(h, O), g === null) {
    return null;
  }
  if (!g) {
    return null;
  }
  let E;
  if (t[6] !== credentials || t[7] !== o?.notice_is_grace_period || t[8] !== onDone) E = async function _(k) {
    G: switch (k) {
      case "accept_opt_in":
        {
          await bTt(!0, credentials), i("tengu_grove_policy_submitted", {
            state: !0,
            dismissable: o?.notice_is_grace_period
          });
          break G;
        }
      case "accept_opt_out":
        {
          await bTt(!1, credentials), i("tengu_grove_policy_submitted", {
            state: !1,
            dismissable: o?.notice_is_grace_period
          });
          break G;
        }
      case "defer":
        {
          i("tengu_grove_policy_dismissed", {
            state: !0
          });
          break G;
        }
      case "escape":
        {
          i("tengu_grove_policy_escaped", {});
        }
    }
    onDone(k);
  }, t[6] = credentials, t[7] = o?.notice_is_grace_period, t[8] = onDone, t[9] = E;else E = t[9];
  let _ = E,
    de;
  if (t[10] !== o?.domain_excluded) de = o?.domain_excluded ? [{
    label: "Accept terms \xB7 Help improve our AI models: OFF (for emails with your domain)",
    value: "accept_opt_out"
  }] : [{
    label: "Accept terms \xB7 Help improve our AI models: ON",
    value: "accept_opt_in"
  }, {
    label: "Accept terms \xB7 Help improve our AI models: OFF",
    value: "accept_opt_out"
  }], t[10] = o?.domain_excluded, t[11] = de;else de = t[11];
  let Z = de,
    pe;
  if (t[12] !== o?.notice_is_grace_period || t[13] !== _) pe = function C() {
    if (o?.notice_is_grace_period) {
      _("defer");
      return;
    }
    _("escape");
  }, t[12] = o?.notice_is_grace_period, t[13] = _, t[14] = pe;else pe = t[14];
  let onCancel = pe;
  const exitOnCtrlCD = location !== "settings";
  let inputGuide;
  if (t[15] === S) inputGuide = r(Se, {
    children: [e(q, {
      chord: "enter",
      action: "confirm"
    }), e(q, {
      chord: "escape",
      action: "cancel"
    })]
  }), t[15] = inputGuide;else inputGuide = t[15];
  let N;
  if (t[16] !== o?.notice_is_grace_period) N = e(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: 1,
    children: o?.notice_is_grace_period ? e(J, {}) : e(X, {})
  }), t[16] = o?.notice_is_grace_period, t[17] = N;else N = t[17];
  let me;
  if (t[18] === S) me = e(s, {
    flexShrink: 0,
    children: e(n, {
      color: "professionalBlue",
      children: children
    })
  }), t[18] = me;else me = t[18];
  let F;
  if (t[19] !== N) F = r(s, {
    flexDirection: "row",
    children: [N, me]
  }), t[19] = N, t[20] = F;else F = t[20];
  let ge;
  if (t[21] === S) ge = r(s, {
    flexDirection: "column",
    children: [e(n, {
      bold: !0,
      children: "Please select how you'd like to continue"
    }), e(n, {
      children: "Your choice takes effect immediately upon confirmation."
    })]
  }), t[21] = ge;else ge = t[21];
  let V;
  if (t[22] !== o?.notice_is_grace_period) V = o?.notice_is_grace_period ? [{
    label: "Not now",
    value: "defer"
  }] : [], t[22] = o?.notice_is_grace_period, t[23] = V;else V = t[23];
  let options;
  if (t[24] !== Z || t[25] !== V) options = [...Z, ...V], t[24] = Z, t[25] = V, t[26] = options;else options = t[26];
  let onChange;
  if (t[27] !== _) onChange = Ie => _(Ie), t[27] = _, t[28] = onChange;else onChange = t[28];
  let H;
  if (t[29] !== onCancel || t[30] !== options || t[31] !== onChange) H = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [ge, e(Xe, {
      options: options,
      onChange: onChange,
      onCancel: onCancel
    })]
  }), t[29] = onCancel, t[30] = options, t[31] = onChange, t[32] = H;else H = t[32];
  let _e;
  if (t[33] !== onCancel || t[34] !== F || t[35] !== H || t[36] !== exitOnCtrlCD) _e = r(be, {
    title: "Updates to Consumer Terms and Policies",
    color: "professionalBlue",
    onCancel: onCancel,
    exitOnCtrlCD: exitOnCtrlCD,
    inputGuide: inputGuide,
    children: [F, H]
  }), t[33] = onCancel, t[34] = F, t[35] = H, t[36] = exitOnCtrlCD, t[37] = _e;else _e = t[37];
  return _e;
}
function IZn(a) {
  let d = w(21),
    {
      settings: settings,
      domainExcluded: domainExcluded,
      onDone: p
    } = a,
    [g, A] = y(settings.grove_enabled),
    {
      credentials: credentials_2
    } = Oe(),
    u;
  if (d[0] === S) u = [], d[0] = u;else u = d[0];
  P(Pe, u);
  let t;
  if (d[1] !== credentials_2 || d[2] !== domainExcluded || d[3] !== g) t = function R(h) {
    if (h.ctrl || h.meta) {
      return;
    }
    if (!domainExcluded && (h.key === "tab" || h.key === "return" || h.key === " ")) {
      h.preventDefault();
      let O = !g;
      A(O), bTt(O, credentials_2);
    }
  }, d[1] = credentials_2, d[2] = domainExcluded, d[3] = g, d[4] = t;else t = d[4];
  let onKeyDown = t,
    I;
  if (d[5] === S) I = e(n, {
    color: "error",
    children: "false"
  }), d[5] = I;else I = d[5];
  let children_2 = I;
  if (domainExcluded) {
    let m;
    if (d[6] === S) m = e(n, {
      color: "error",
      children: "false (for emails with your domain)"
    }), d[6] = m;else m = d[6];
    children_2 = m;
  } else if (g) {
    let m;
    if (d[7] === S) m = e(n, {
      color: "success",
      children: "true"
    }), d[7] = m;else m = d[7];
    children_2 = m;
  }
  let inputGuide_2;
  if (d[8] !== domainExcluded) inputGuide_2 = domainExcluded ? e(q, {
    chord: "escape",
    action: "cancel"
  }) : r(Se, {
    children: [e(q, {
      chord: ["enter", "tab", "space"],
      action: "toggle"
    }), e(q, {
      chord: "escape",
      action: "cancel"
    })]
  }), d[8] = domainExcluded, d[9] = inputGuide_2;else inputGuide_2 = d[9];
  let T;
  if (d[10] === S) T = r(n, {
    children: ["Review and manage your privacy settings at", " ", e(zt, {
      url: "https://claude.ai/settings/data-privacy-controls"
    })]
  }), d[10] = T;else T = d[10];
  let E;
  if (d[11] === S) E = e(s, {
    width: 44,
    children: e(n, {
      bold: !0,
      children: "Help improve our AI models"
    })
  }), d[11] = E;else E = d[11];
  let k;
  if (d[12] !== children_2) k = r(s, {
    children: [E, e(s, {
      children: children_2
    })]
  }), d[12] = children_2, d[13] = k;else k = d[13];
  let children_3;
  if (d[14] !== onKeyDown || d[15] !== k) children_3 = r(ko, {
    gap: 1,
    onKeyDown: onKeyDown,
    children: [T, k]
  }), d[14] = onKeyDown, d[15] = k, d[16] = children_3;else children_3 = d[16];
  let _;
  if (d[17] !== p || d[18] !== inputGuide_2 || d[19] !== children_3) _ = e(be, {
    title: "Data privacy",
    color: "professionalBlue",
    onCancel: p,
    inputGuide: inputGuide_2,
    children: children_3
  }), d[17] = p, d[18] = inputGuide_2, d[19] = children_3, d[20] = _;else _ = d[20];
  return _;
}
export { OZn, IZn };