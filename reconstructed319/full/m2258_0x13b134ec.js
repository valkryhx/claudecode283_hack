// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  f
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  s,
  n,
  sn
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  S8,
  p6r,
  hqt,
  Une,
  m6r,
  h6r
} from "B:/~BUN/root/chunk-xf5c537t.js";
import {
  Ze
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  n_,
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  is
} from "B:/~BUN/root/chunk-09epe94m.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  O,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function Ue() {
  l("tengu_grove_privacy_settings_viewed", {})
}
var ue = ` _____________
 |          \\  \\
 | NEW TERMS \\__\\
 |              |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |  ----------  |
 |              |
 |______________|`,
  U = {
    label: "Accept terms \xB7 Help improve our AI models: OFF",
    value: "accept_opt_out"
  };

function de() {
  let a = S(9),
    m;
  if (a[0] === w) m = r(n, {
    children: ["An update to our Consumer Terms and Privacy Policy will take effect on", " ", e(n, {
      bold: !0,
      children: "October 8, 2025"
    }), ". You can accept the updated terms today."]
  }), a[0] = m;
  else m = a[0];
  let u;
  if (a[1] === w) u = e(n, {
    children: "What's changing?"
  }), a[1] = u;
  else u = a[1];
  let i, _;
  if (a[2] === w) i = e(n, {
    children: "\xB7 "
  }), _ = e(n, {
    bold: !0,
    children: "Help improve our AI models "
  }), a[2] = i, a[3] = _;
  else i = a[2], _ = a[3];
  let v;
  if (a[4] === w) v = e(s, {
    paddingLeft: 1,
    children: r(n, {
      children: [i, _, r(n, {
        children: ["\u2014 Allow the use of your chats and coding sessions to train and improve Anthropic AI models. Change anytime in your Privacy Settings (", e(sn, {
          url: "https://claude.ai/settings/data-privacy-controls"
        }), ")."]
      })]
    })
  }), a[4] = v;
  else v = a[4];
  let t;
  if (a[5] === w) t = r(s, {
    flexDirection: "column",
    children: [u, v, e(s, {
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
  }), a[5] = t;
  else t = a[5];
  let k;
  if (a[6] === w) k = e(sn, {
    url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
  }), a[6] = k;
  else k = a[6];
  let h;
  if (a[7] === w) h = e(sn, {
    url: "https://anthropic.com/legal/terms"
  }), a[7] = h;
  else h = a[7];
  let c;
  if (a[8] === w) c = r(ne, {
    children: [m, t, r(n, {
      children: ["Learn more (", k, ") or read the updated Consumer Terms (", h, ") and Privacy Policy (", e(sn, {
        url: "https://anthropic.com/legal/privacy"
      }), ")"]
    })]
  }), a[8] = c;
  else c = a[8];
  return c
}

function pe() {
  let a = S(7),
    m;
  if (a[0] === w) m = e(n, {
    children: "We've updated our Consumer Terms and Privacy Policy."
  }), a[0] = m;
  else m = a[0];
  let u;
  if (a[1] === w) u = e(n, {
    children: "What's changing?"
  }), a[1] = u;
  else u = a[1];
  let i;
  if (a[2] === w) i = r(s, {
    flexDirection: "column",
    children: [e(n, {
      bold: !0,
      children: "Help improve our AI models"
    }), e(n, {
      children: "Allow the use of your chats and coding sessions to train and improve Anthropic AI models. You can change this anytime in Privacy Settings"
    }), e(sn, {
      url: "https://claude.ai/settings/data-privacy-controls"
    })]
  }), a[2] = i;
  else i = a[2];
  let _;
  if (a[3] === w) _ = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [u, i, r(s, {
      flexDirection: "column",
      children: [e(n, {
        bold: !0,
        children: "How this affects data retention"
      }), e(n, {
        children: "Turning ON the improve Claude setting extends data retention from 30 days to 5 years. Turning it OFF keeps the default 30-day data retention. Delete data anytime."
      })]
    })]
  }), a[3] = _;
  else _ = a[3];
  let v;
  if (a[4] === w) v = e(sn, {
    url: "https://www.anthropic.com/news/updates-to-our-consumer-terms"
  }), a[4] = v;
  else v = a[4];
  let t;
  if (a[5] === w) t = e(sn, {
    url: "https://anthropic.com/legal/terms"
  }), a[5] = t;
  else t = a[5];
  let k;
  if (a[6] === w) k = r(ne, {
    children: [m, _, r(n, {
      children: ["Learn more (", v, ") or read the updated Consumer Terms (", t, ") and Privacy Policy (", e(sn, {
        url: "https://anthropic.com/legal/privacy"
      }), ")"]
    })]
  }), a[6] = k;
  else k = a[6];
  return k
}

function L1r(a) {
  let o = S(52),
    {
      showIfAlreadyViewed: m,
      location: u,
      onDone: i
    } = a,
    [_, v] = y(null),
    [t, k] = y(null),
    [h, c] = y(!1),
    {
      credentials: p,
      storageV5: G
    } = Fe(),
    J, T;
  if (o[0] !== p || o[1] !== u || o[2] !== i || o[3] !== m || o[4] !== G) J = () => {
    let X = async function X() {
      let [N, C] = await Promise.all([S8(p), Une(p)]);
      if (N.success) h6r(N.data, G, p);
      let d = C.success ? C.data : null;
      k(d);
      let Q = m6r(N, C, m);
      if (v(Q), !Q) {
        i("skip_rendering");
        return
      }
      p6r(p), l("tengu_grove_policy_viewed", {
        location: f(u),
        dismissable: d?.notice_is_grace_period
      })
    };
    X()
  }, T = [m, u, i, p, G], o[0] = p, o[1] = u, o[2] = i, o[3] = m, o[4] = G, o[5] = J, o[6] = T;
  else J = o[5], T = o[6];
  if (O(J, T), _ === null) {
    return null
  }
  if (!_) {
    return null
  }
  let V;
  if (o[7] !== p || o[8] !== t?.notice_is_grace_period || o[9] !== i) V = async function g(L) {
    Z: switch (L) {
      case "accept_opt_in": {
        let F = await hqt(!0, p, {
          onlyIfUnset: !0
        }) === !1;
        if (l("tengu_grove_policy_submitted", {
            state: !F,
            dismissable: t?.notice_is_grace_period
          }), F) {
          c(!0);
          return
        }
        break Z
      }
      case "accept_opt_out": {
        await hqt(!1, p), l("tengu_grove_policy_submitted", {
          state: !1,
          dismissable: t?.notice_is_grace_period
        });
        break Z
      }
      case "defer": {
        l("tengu_grove_policy_dismissed", {
          state: !0
        });
        break Z
      }
      case "escape": {
        l("tengu_grove_policy_escaped", {})
      }
    }
    i(L)
  }, o[7] = p, o[8] = t?.notice_is_grace_period, o[9] = i, o[10] = V;
  else V = o[10];
  let g = V,
    Ie;
  if (o[11] !== t?.domain_excluded) Ie = t?.domain_excluded ? [{
    label: "Accept terms \xB7 Help improve our AI models: OFF (for emails with your domain)",
    value: "accept_opt_out"
  }] : [{
    label: "Accept terms \xB7 Help improve our AI models: ON",
    value: "accept_opt_in"
  }, U], o[11] = t?.domain_excluded, o[12] = Ie;
  else Ie = o[12];
  let ee = Ie;
  if (t?.grove_locked_by_claude_science) {
    let E;
    if (o[13] === w) E = [U], o[13] = E;
    else E = o[13];
    ee = E
  }
  let E;
  if (o[14] !== t?.notice_is_grace_period || o[15] !== g) E = function R() {
    if (t?.notice_is_grace_period) {
      g("defer");
      return
    }
    g("escape")
  }, o[14] = t?.notice_is_grace_period, o[15] = g, o[16] = E;
  else E = o[16];
  let R = E,
    Se;
  if (o[17] !== i) Se = function I() {
    i("accept_opt_out")
  }, o[17] = i, o[18] = Se;
  else Se = o[18];
  let I = Se;
  if (h) {
    const P = u !== "settings";
    let K;
    if (o[19] === w) K = r(Ce, {
      children: [e(Y, {
        chord: "enter",
        action: "continue"
      }), e(Y, {
        chord: "escape",
        action: "close"
      })]
    }), o[19] = K;
    else K = o[19];
    let D;
    if (o[20] !== I) D = [{
      action: "confirm:yes",
      run: I
    }], o[20] = I, o[21] = D;
    else D = o[21];
    let W;
    if (o[22] === w) W = e(n, {
      children: "This setting wasn't turned on. It's off for your account. You can review it any time with /privacy-settings."
    }), o[22] = W;
    else W = o[22];
    let b;
    if (o[23] !== D) b = e(n_, {
      scope: "Confirmation",
      claimFocus: !0,
      bindings: D,
      children: W
    }), o[23] = D, o[24] = b;
    else b = o[24];
    let H;
    if (o[25] !== I || o[26] !== b || o[27] !== P) H = e(ke, {
      title: "Help improve our AI models",
      color: "professionalBlue",
      onCancel: I,
      exitOnCtrlCD: P,
      inputGuide: K,
      children: b
    }), o[25] = I, o[26] = b, o[27] = P, o[28] = H;
    else H = o[28];
    return H
  }
  const P = u !== "settings";
  let K;
  if (o[29] === w) K = r(Ce, {
    children: [e(Y, {
      chord: "enter",
      action: "confirm"
    }), e(Y, {
      chord: "escape",
      action: "cancel"
    })]
  }), o[29] = K;
  else K = o[29];
  let D;
  if (o[30] !== t?.notice_is_grace_period) D = e(s, {
    flexDirection: "column",
    gap: 1,
    flexGrow: 1,
    children: t?.notice_is_grace_period ? e(de, {}) : e(pe, {})
  }), o[30] = t?.notice_is_grace_period, o[31] = D;
  else D = o[31];
  let W;
  if (o[32] === w) W = e(s, {
    flexShrink: 0,
    children: e(n, {
      color: "professionalBlue",
      children: ue
    })
  }), o[32] = W;
  else W = o[32];
  let b;
  if (o[33] !== D) b = r(s, {
    flexDirection: "row",
    children: [D, W]
  }), o[33] = D, o[34] = b;
  else b = o[34];
  let H;
  if (o[35] === w) H = r(s, {
    flexDirection: "column",
    children: [e(n, {
      bold: !0,
      children: "Please select how you'd like to continue"
    }), e(n, {
      children: "Your choice takes effect immediately upon confirmation."
    })]
  }), o[35] = H;
  else H = o[35];
  let oe;
  if (o[36] !== t?.notice_is_grace_period) oe = t?.notice_is_grace_period ? [{
    label: "Not now",
    value: "defer"
  }] : [], o[36] = t?.notice_is_grace_period, o[37] = oe;
  else oe = o[37];
  let te;
  if (o[38] !== ee || o[39] !== oe) te = [...ee, ...oe], o[38] = ee, o[39] = oe, o[40] = te;
  else te = o[40];
  let ie;
  if (o[41] !== g) ie = (qe) => g(qe), o[41] = g, o[42] = ie;
  else ie = o[42];
  let ae;
  if (o[43] !== R || o[44] !== te || o[45] !== ie) ae = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [H, e(Ze, {
      options: te,
      onChange: ie,
      onCancel: R
    })]
  }), o[43] = R, o[44] = te, o[45] = ie, o[46] = ae;
  else ae = o[46];
  let Pe;
  if (o[47] !== R || o[48] !== b || o[49] !== ae || o[50] !== P) Pe = r(ke, {
    title: "Updates to Consumer Terms and Policies",
    color: "professionalBlue",
    onCancel: R,
    exitOnCtrlCD: P,
    inputGuide: K,
    children: [b, ae]
  }), o[47] = R, o[48] = b, o[49] = ae, o[50] = P, o[51] = Pe;
  else Pe = o[51];
  return Pe
}

function N1r(a) {
  let c = S(27),
    {
      settings: m,
      domainExcluded: u,
      lockedByClaudeScience: i,
      onDone: _
    } = a,
    [v, t] = y(m.grove_enabled),
    {
      credentials: k
    } = Fe(),
    h = u || i,
    p;
  if (c[0] === w) p = [], c[0] = p;
  else p = c[0];
  O(Ue, p);
  let G;
  if (c[1] !== k || c[2] !== v || c[3] !== h) G = function T(o) {
    if (o.ctrl || o.meta) {
      return
    }
    if (!h && (o.key === "tab" || o.key === "return" || o.key === " ")) {
      o.preventDefault();
      let J = !v;
      t(J), hqt(J, k)
    }
  }, c[1] = k, c[2] = v, c[3] = h, c[4] = G;
  else G = c[4];
  let T = G,
    N;
  if (c[5] === w) N = e(n, {
    color: "error",
    children: "false"
  }), c[5] = N;
  else N = c[5];
  let C = N;
  if (i) {
    let d;
    if (c[6] === w) d = e(n, {
      dimColor: !0,
      children: "false"
    }), c[6] = d;
    else d = c[6];
    C = d
  } else if (u) {
    let d;
    if (c[7] === w) d = e(n, {
      color: "error",
      children: "false (for emails with your domain)"
    }), c[7] = d;
    else d = c[7];
    C = d
  } else if (v) {
    let d;
    if (c[8] === w) d = e(n, {
      color: "success",
      children: "true"
    }), c[8] = d;
    else d = c[8];
    C = d
  }
  let d;
  if (c[9] !== h) d = h ? e(Y, {
    chord: "escape",
    action: "cancel"
  }) : r(Ce, {
    children: [e(Y, {
      chord: ["enter", "tab", "space"],
      action: "toggle"
    }), e(Y, {
      chord: "escape",
      action: "cancel"
    })]
  }), c[9] = h, c[10] = d;
  else d = c[10];
  let Q;
  if (c[11] === w) Q = r(n, {
    children: ["Review and manage your privacy settings at", " ", e(sn, {
      url: "https://claude.ai/settings/data-privacy-controls"
    })]
  }), c[11] = Q;
  else Q = c[11];
  let X;
  if (c[12] === w) X = e(s, {
    width: 44,
    children: e(n, {
      bold: !0,
      children: "Help improve our AI models"
    })
  }), c[12] = X;
  else X = c[12];
  let V;
  if (c[13] !== C) V = r(s, {
    children: [X, e(s, {
      children: C
    })]
  }), c[13] = C, c[14] = V;
  else V = c[14];
  let L;
  if (c[15] !== i) L = i && e(n, {
    dimColor: !0,
    children: "Not available for this account."
  }), c[15] = i, c[16] = L;
  else L = c[16];
  let F;
  if (c[17] !== V || c[18] !== L) F = r(s, {
    flexDirection: "column",
    children: [V, L]
  }), c[17] = V, c[18] = L, c[19] = F;
  else F = c[19];
  let Z;
  if (c[20] !== T || c[21] !== F) Z = r(is, {
    gap: 1,
    onKeyDown: T,
    children: [Q, F]
  }), c[20] = T, c[21] = F, c[22] = Z;
  else Z = c[22];
  let g;
  if (c[23] !== _ || c[24] !== Z || c[25] !== d) g = e(ke, {
    title: "Data privacy",
    color: "professionalBlue",
    onCancel: _,
    inputGuide: d,
    children: Z
  }), c[23] = _, c[24] = Z, c[25] = d, c[26] = g;
  else g = c[26];
  return g
}
export {
  L1r,
  N1r
};
