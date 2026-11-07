// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Zf
} from "B:/~BUN/root/chunk-cpzw87wr.js";
import {
  Re
} from "B:/~BUN/root/chunk-qr2xxkqa.js";
import {
  Rn,
  ot,
  s,
  n
} from "B:/~BUN/root/chunk-qey16aan.js";
import {
  bo
} from "B:/~BUN/root/chunk-drx9cnw1.js";
import {
  S
} from "B:/~BUN/root/chunk-bn4bjw9d.js";
import {
  P
} from "B:/~BUN/root/chunk-n8cnxns2.js";
import {
  _h,
  Nn
} from "B:/~BUN/root/chunk-jdtvghyw.js";
import {
  Fe
} from "B:/~BUN/root/chunk-vxjrk7vf.js";
import {
  l
} from "B:/~BUN/root/chunk-mb9chr1y.js";
import {
  Mr,
  wUt
} from "B:/~BUN/root/chunk-xqymp2nr.js";
import {
  uVr,
  oTt,
  Qgn,
  Zgn,
  bVr,
  Ake,
  rZs
} from "B:/~BUN/root/chunk-zk8rd694.js";
import {
  lke
} from "B:/~BUN/root/chunk-crjx6seq.js";
import {
  Bl,
  As
} from "B:/~BUN/root/chunk-q8sf8fhe.js";
import {
  ei,
  Io
} from "B:/~BUN/root/chunk-03yjyf4y.js";
import {
  re
} from "B:/~BUN/root/chunk-xkw95p5n.js";
import {
  Ce
} from "B:/~BUN/root/chunk-cync0e08.js";
import {
  ke
} from "B:/~BUN/root/chunk-bvcekd4j.js";
import {
  Y
} from "B:/~BUN/root/chunk-c1v460b9.js";
import {
  hc,
  Tn
} from "B:/~BUN/root/chunk-md70d2gd.js";
import {
  Tt
} from "B:/~BUN/root/chunk-dw9hahea.js";
import {
  Ir
} from "B:/~BUN/root/chunk-39zyvd3e.js";
import {
  Xun
} from "B:/~BUN/root/chunk-cbbfqbjt.js";
import {
  is
} from "B:/~BUN/root/chunk-09epe94m.js";
import {
  Mvt,
  bmn
} from "B:/~BUN/root/chunk-8q3bh152.js";
import {
  Ys
} from "B:/~BUN/root/chunk-28bb8488.js";
import {
  ne,
  e,
  r
} from "B:/~BUN/root/chunk-t16eynda.js";
import {
  ue,
  O,
  Z,
  A,
  y,
  j
} from "B:/~BUN/root/chunk-czy5r8bc.js";
import {
  U
} from "B:/~BUN/root/chunk-5ha2avah.js";
import {
  w
} from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();

function Xt(G) {
  return e(Tn.Item, {
    label: Mr(G.title),
    meta: Me(G)
  }, G.draft_id)
}

function Jt(ee) {
  return e(Tn.Item, {
    label: Mr(ee.title),
    meta: Me(ee)
  }, ee.draft_id)
}
var _e = ["bug", "idea", "missing_capability"],
  kt = {
    bug: "bug",
    idea: "idea",
    missing_capability: "missing capability"
  },
  Ne = [void 0, ...Qgn],
  Ke = [void 0, ...Zgn];

function rt(p) {
  return p === void 0 ? "(none)" : p.replace(/_/g, " ")
}

function st(p) {
  return ["type", "title", "area", "failure_mode", "task_category", "details", ...p.transcriptAvailable ? ["transcript"] : [], "send"]
}
var Pe = 500,
  at = 6,
  lt = 3,
  dt = 5;

function gGt({
  messages: p,
  onDone: c,
  abortSignal: u,
  onWriteNew: d
}) {
  let [h, C] = y(null), [b, R] = y(0), J = ot(), [f, E] = y("list"), [i, L] = y(null), [F, N] = y(!1), [K, D, B] = Zf(0), [_, k, H] = Zf(null), [q, z] = y(null), de = A(-1 / 0), [se, T] = y(null), [oe, ce] = y(null), Q = Re().columns - 6, x = Rn(), ae = A(0), G = A(!1), ee = A(0), fe = A(!1), ye = A(!1), {
    storageV5: V,
    credentials: je
  } = Fe(), Ve = ei(), te = Io((t) => t.id), me = d !== void 0, le = ue(async () => {
    let {
      queued: t
    } = await Ake(void 0, V).catch(() => ({
      queued: [],
      expired: []
    }));
    rZs(U(t, (a) => a.source_session_id === te)), C(t);
    let o = t.length - (me ? 0 : 1);
    return R((a) => Math.min(a, Math.max(0, o))), t
  }, [te, me, V, R]);
  O(() => {
    le().then((t) => {
      l("tengu_feedback_queue_opened", {
        queued_count: bo(t.length),
        this_session_count: bo(U(t, (o) => o.source_session_id === te))
      })
    })
  }, [le, te]);
  let Xe = (h ?? []).filter((t) => t.source_session_id === te),
    Je = (h ?? []).filter((t) => t.source_session_id !== te),
    ie = [...Xe, ...Je],
    ze = me && b === ie.length,
    Qe = ie.length + (me ? 1 : 0),
    Ft = ie[b],
    Oe = i ? oTt(i.request_ids).length : 0,
    pe = ue((t) => {
      if (t === void 0) c();
      else c(t, {
        display: "system"
      })
    }, [c]),
    M = Z(() => i ? st(i) : [], [i]),
    we = ue((t) => {
      ae.current = x.now(), D(t.length - 1)
    }, [x, D]),
    m = M[K],
    he = m === "title" || m === "area" || m === "details",
    Dt = ue((t) => {
      L(t), N(t.transcriptAvailable), T(null), k({
        type: t.type,
        title: Mr(t.title),
        area: Mr(t.area ?? ""),
        failureMode: t.failure_mode,
        taskCategory: t.task_category,
        details: wUt(t.details)
      }), z(null), de.current = -1 / 0, we(st(t)), ee.current = x.now(), G.current = !1, ye.current = !1, E("review")
    }, [x, we, k]),
    Ze = ue(async (t) => {
      let o = x.now(),
        a = ee.current;
      if (ee.current = Math.max(o, a), o - a < Pe || fe.current || G.current) return;
      fe.current = !0;
      try {
        await bmn(t, "panel", V).catch(() => {}), await le(), E("list"), L(null)
      } finally {
        fe.current = !1
      }
    }, [le, x, V]),
    xe = ue((t) => {
      L(t), C((g) => g ? g.map((v) => v.draft_id === t.draft_id ? t : v) : g);
      let {
        transcriptAvailable: o,
        ...a
      } = t;
      return bVr(a, new Date, V).then((g) => {
        if (!g.success) T(g.reason === "too_large" ? "That draft is too large to save. Trim the details." : "Could not save the draft to disk.")
      })
    }, [V]),
    ve = ue(() => {
      let t = H();
      if (!i || !t) return i;
      let o = Mr(i.title),
        a = Mr(i.area ?? ""),
        g = wUt(i.details),
        v = t.title === o || t.title.trim() === "" ? i.title : t.title.trim(),
        De = t.area === a ? i.area ?? "" : t.area.trim(),
        it = t.details === g ? i.details : t.details.trim() === "" ? "" : t.details;
      if (t.type === i.type && v === i.title && (De === "" ? void 0 : De) === i.area && t.failureMode === i.failure_mode && t.taskCategory === i.task_category && it === i.details) return i;
      return {
        ...i,
        type: t.type,
        title: v,
        area: De === "" ? void 0 : De,
        failure_mode: t.failureMode,
        task_category: t.taskCategory,
        details: it
      }
    }, [i, H]),
    et = ue(() => {
      let t = ve();
      if (t && t !== i) {
        if (i && t.details === "" && i.details !== "" && x.now() - de.current < Pe) t = {
          ...t,
          details: i.details
        };
        xe(t)
      }
    }, [ve, i, xe, x]),
    W = ue((t) => {
      z(null), T((o) => o === Te ? null : o), D((o) => {
        let a = Math.max(0, Math.min(M.length - 1, o + t));
        if (a !== o && M[a] === "send") ae.current = x.now();
        return a
      })
    }, [M, x, D]),
    _t = ue((t, o) => {
      if (t === "type") k((a) => {
        if (!a) return a;
        let g = _e.indexOf(a.type),
          v = _e[(g + o + _e.length) % _e.length];
        return v ? {
          ...a,
          type: v
        } : a
      });
      else if (t === "failure_mode") k((a) => {
        if (!a) return a;
        let g = Ne.indexOf(a.failureMode),
          v = Ne.length;
        return {
          ...a,
          failureMode: Ne[(g + o + v) % v]
        }
      });
      else if (t === "task_category") k((a) => {
        if (!a) return a;
        let g = Ke.indexOf(a.taskCategory),
          v = Ke.length;
        return {
          ...a,
          taskCategory: Ke[(g + o + v) % v]
        }
      });
      else if (t === "transcript") N((a) => !a)
    }, [k]),
    Rt = ue(async () => {
      if (!i || G.current || fe.current) return;
      let t = x.now(),
        o = ae.current;
      if (ae.current = Math.max(t, o), t - o < Pe) return;
      if (H()?.title.trim() === "") {
        T("Title is blank. Type a title, or press esc on the field to restore it.");
        return
      }
      let a = ve() ?? i;
      if (G.current = !0, E("submitting"), T(null), a !== i) await xe(a);
      let g;
      try {
        g = await Mvt({
          draft: a,
          includeTranscript: F && a.transcriptAvailable,
          currentSessionMessages: p,
          signal: u,
          storageV5: V,
          host: Ve,
          credentials: je
        })
      } catch {
        g = {
          success: !1,
          error: "Couldn't send feedback. The draft is still queued. Try again later."
        }
      }
      if (G.current = !1, g.success) await le(), ce(g.feedbackId), E("receipt");
      else {
        if (T(g.error), g.payloadTooLarge) {
          let v = M.indexOf("transcript");
          if (v >= 0) D(v)
        }
        E("review")
      }
    }, [i, H, F, p, u, le, x, ve, xe, V, je, Ve, M, D]);

  function St(t) {
    if (t.ctrl || t.meta) return;
    if (f === "submitting") {
      t.preventDefault();
      return
    }
    if (t.key === "escape" && !(f === "review" && he)) return;
    if (f === "receipt") {
      if (t.preventDefault(), (h?.length ?? 0) > 0) E("list"), L(null);
      else pe(`Feedback sent (receipt ${oe})`);
      return
    }
    if (f === "list") {
      if (!h) {
        t.preventDefault();
        return
      }
      if (t.key.toLowerCase() === "w" && d) {
        t.preventDefault(), d();
        return
      }
      if (Qe === 0) {
        t.preventDefault(), pe();
        return
      }
      if (ie.length > 0) return;
      if (t.key === "up" || t.key === "down") t.preventDefault();
      else if (t.key === "return" && d) t.preventDefault(), d();
      else if (t.key !== "escape") t.preventDefault(), pe();
      return
    }
    if (f === "review" && i) {
      if (ye.current) {
        t.preventDefault();
        return
      }
      if (he) {
        if (t.key === "escape") t.preventDefault(), tt();
        return
      }
      let o = M[B()];
      if (t.key === "up") t.preventDefault(), W(-1);
      else if (t.key === "down") t.preventDefault(), W(1);
      else if (t.key === "left" || t.key === "right") t.preventDefault(), _t(o, t.key === "left" ? -1 : 1);
      else if (t.key === " " && o === "transcript") t.preventDefault(), N((a) => !a);
      else if (t.key === "return")
        if (t.preventDefault(), o === "send") Rt();
        else W(1);
      else if (t.key.toLowerCase() === "d" && o !== "title" && o !== "area" && o !== "details") t.preventDefault(), Ze(i)
    }
  }
  let ge = ue(() => {
      if (ye.current || G.current || fe.current) return;
      ye.current = !0, et(), ee.current = -1 / 0, E("list"), L(null)
    }, [et]),
    tt = ue(() => {
      if (f !== "review") {
        pe();
        return
      }
      let t = M[B()];
      if (t !== "title" && t !== "area" && t !== "details") {
        ge();
        return
      }
      k((o) => o && i ? {
        ...o,
        [t]: t === "details" ? wUt(i.details) : Mr(i[t] ?? "")
      } : o), z(null), we(M), T((o) => o === Te ? null : o)
    }, [f, i, M, B, ge, k, we, pe]),
    nt = !(J && ie.length > 0),
    Et = f === "list" ? r(Ce, {
      children: [Qe > 0 && nt && e(Y, {
        chord: "enter",
        action: ze ? "write new feedback" : "review"
      }), Ft !== void 0 && nt && e(Y, {
        chord: "d",
        action: "discard"
      }), e(Y, {
        chord: "esc",
        action: "close"
      })]
    }) : f === "review" ? r(Ce, {
      children: [e(Y, {
        chord: ["up", "down"],
        action: "move"
      }), (m === "type" || m === "failure_mode" || m === "task_category" || m === "transcript") && e(Y, {
        chord: ["left", "right"],
        action: "change"
      }), e(Y, {
        chord: "enter",
        action: m === "send" ? "send" : "next"
      }), m === "details" && e(Y, {
        chord: lke() ? "shift+enter" : "ctrl+j",
        action: "new line"
      }), !he && e(Y, {
        chord: "d",
        action: "discard"
      }), e(Y, {
        chord: "esc",
        action: he ? "cancel edit" : "later"
      })]
    }) : null;
  return e(is, {
    onKeyDown: St,
    children: r(ke, {
      title: "Feedback drafts",
      onCancel: tt,
      isCancelActive: f !== "submitting" && !he,
      hideInputGuide: f === "receipt" || f === "submitting",
      inputGuide: Et,
      children: [f === "list" && h === null && e(n, {
        dimColor: !0,
        children: "Loading\u2026"
      }), f === "list" && h !== null && ie.length === 0 && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "No feedback drafts queued."
        }), e(n, {
          dimColor: !0,
          children: "Claude drafts feedback at high-signal moments; drafts appear here for your review."
        }), d ? r(s, {
          flexDirection: "column",
          gap: 1,
          children: [e(xt, {
            isSelected: ze
          }), e(n, {
            dimColor: !0,
            children: "/bug works anytime. Any other key closes this panel."
          })]
        }) : e(n, {
          dimColor: !0,
          children: "Any key closes this panel."
        })]
      }), f === "list" && h !== null && ie.length > 0 && r(s, {
        flexDirection: "column",
        children: [e(vt, {
          thisSession: Xe,
          others: Je,
          hasWriteNew: me,
          defaultFocusIndex: b,
          onFocus: R,
          onOpen: Dt,
          onWriteNew: () => d?.(),
          onDiscard: (t) => void Ze(t)
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            wrap: "wrap",
            children: "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days."
          })
        })]
      }), f === "review" && i && _ && r(s, {
        flexDirection: "column",
        children: [r(s, {
          children: [e(I, {
            isFocused: m === "type"
          }), e(n, {
            children: "Type: "
          }), e(be, {
            value: kt[_.type],
            isFocused: m === "type"
          })]
        }), e(Ae, {
          label: "Title:",
          value: _.title,
          isFocused: m === "title",
          bold: !0,
          columns: Q,
          cursorOffset: q,
          onChange: (t) => k((o) => o ? {
            ...o,
            title: t
          } : o),
          onCursorChange: z,
          onNext: () => W(1),
          onPrev: () => W(-1),
          onExit: ge
        }), e(Ae, {
          label: "Area:",
          value: _.area,
          isFocused: m === "area",
          dim: !0,
          columns: Q,
          cursorOffset: q,
          onChange: (t) => k((o) => o ? {
            ...o,
            area: t
          } : o),
          onCursorChange: z,
          onNext: () => W(1),
          onPrev: () => W(-1),
          onExit: ge
        }), r(s, {
          children: [e(I, {
            isFocused: m === "failure_mode"
          }), e(n, {
            children: "Failure mode: "
          }), e(be, {
            value: rt(_.failureMode),
            isFocused: m === "failure_mode"
          })]
        }), r(s, {
          children: [e(I, {
            isFocused: m === "task_category"
          }), e(n, {
            children: "Task: "
          }), e(be, {
            value: rt(_.taskCategory),
            isFocused: m === "task_category"
          })]
        }), e(Ae, {
          label: "Details:",
          value: _.details,
          isFocused: m === "details",
          dim: !0,
          multiline: !0,
          columns: Q,
          cursorOffset: q,
          onChange: (t) => {
            let o = Buffer.byteLength(t, "utf8");
            if (o > uVr && o >= Buffer.byteLength(_.details, "utf8")) {
              T(Te);
              return
            }
            k((a) => {
              if (a && a.details.trim() !== "" && t.trim() === "") de.current = x.now();
              return a ? {
                ...a,
                details: t
              } : a
            }), T((a) => a === Te ? null : a)
          },
          onCursorChange: z,
          onNext: () => W(1),
          onPrev: () => W(-1),
          onExit: ge
        }), i.transcriptAvailable ? r(s, {
          flexDirection: "column",
          children: [r(s, {
            children: [e(I, {
              isFocused: m === "transcript"
            }), e(n, {
              children: "Send transcript: "
            }), e(be, {
              value: F ? "yes" : "no",
              isFocused: m === "transcript"
            }), r(n, {
              dimColor: !0,
              children: [" \xB7 ", F ? "sends this conversation to Anthropic" : "report only"]
            })]
          }), i.source_session_id !== te && e(s, {
            marginLeft: 4,
            children: r(n, {
              dimColor: !0,
              wrap: "wrap",
              children: ["from ", Mr(i.cwd), " \xB7 session", " ", Mr(i.source_session_id)]
            })
          })]
        }) : r(s, {
          children: [e(I, {
            isFocused: !1
          }), r(n, {
            children: ["Send transcript: ", e(n, {
              dimColor: !0,
              children: "expired (report only)"
            })]
          })]
        }), r(s, {
          marginTop: 1,
          children: [e(I, {
            isFocused: !1
          }), r(n, {
            dimColor: !0,
            wrap: "wrap",
            children: ["Environment info (", Mr(i.os), ", v", Mr(i.cli_version), ",", " ", Mr(i.model), i.effort !== void 0 && r(ne, {
              children: [", effort", " ", Mr(i.effort)]
            }), i.thinking_type !== void 0 && r(ne, {
              children: [", thinking ", i.thinking_type, i.thinking_budget !== void 0 && r(ne, {
                children: [" (budget ", i.thinking_budget, ")"]
              })]
            }), i.assistant_turn_count !== void 0 && r(ne, {
              children: [", turn ", i.assistant_turn_count, i.message_count !== void 0 && r(ne, {
                children: ["/", i.message_count]
              }), i.subagent_count !== void 0 && i.subagent_count > 0 && r(ne, {
                children: [" ", "with ", i.subagent_count, " ", P(i.subagent_count, "subagent")]
              })]
            }), ", drafted ", Ct(i.created_at), " ago)", Oe > 0 ? ` and ${Oe} API request ${P(Oe,"id")} are` : " is", " ", "always attached."]
          })]
        }), se && e(s, {
          marginTop: 1,
          children: e(Ys, {
            error: se
          })
        }), r(s, {
          marginTop: 1,
          children: [e(I, {
            isFocused: m === "send"
          }), e(n, {
            bold: m === "send",
            children: "Send feedback"
          })]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            wrap: "wrap",
            children: "We may use these reports to debug related issues and improve Claude Code. Turn off Claude-drafted feedback anytime in /config."
          })
        })]
      }), f === "submitting" && e(n, {
        children: "Sending feedback\u2026"
      }), f === "receipt" && r(s, {
        flexDirection: "column",
        children: [r(n, {
          color: "success",
          children: [e(Tt, {
            status: "success",
            withSpace: !0
          }), "Feedback sent (receipt ", oe, "). Thanks!"]
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            italic: !0,
            children: "Any key to continue"
          })
        })]
      })]
    })
  })
}
var Te = `That edit would push Details past the ${Math.floor(uVr/1024)}KB limit. Trim the details first.`;

function ct(p, c) {
  return _h(p.replace(/\r\n|\r/g, `
`)).split(`
`).map((u) => Nn(u)).join(c ? `
` : " ")
}

function I(p) {
  let h = S(3),
    {
      isFocused: c
    } = p;
  const u = c ? "suggestion" : void 0,
    d = c ? `${re.pointer} ` : "  ";
  let C;
  if (h[0] !== u || h[1] !== d) C = e(n, {
    color: u,
    children: d
  }), h[0] = u, h[1] = d, h[2] = C;
  else C = h[2];
  return C
}

function be(p) {
  let d = S(6),
    {
      value: c,
      isFocused: u
    } = p;
  if (!u) {
    let h;
    if (d[0] !== c) h = e(n, {
      dimColor: !0,
      children: c
    }), d[0] = c, d[1] = h;
    else h = d[1];
    return h
  }
  let h;
  if (d[2] === w) h = r(n, {
    dimColor: !0,
    children: [re.triangleLeft, " "]
  }), d[2] = h;
  else h = d[2];
  let C;
  if (d[3] === w) C = r(n, {
    dimColor: !0,
    children: [" ", re.triangleRight]
  }), d[3] = C;
  else C = d[3];
  let b;
  if (d[4] !== c) b = r(n, {
    children: [h, c, C]
  }), d[4] = c, d[5] = b;
  else b = d[5];
  return b
}

function Ae(p) {
  let K = S(24),
    {
      label: c,
      value: u,
      isFocused: d,
      bold: h,
      dim: C,
      multiline: b,
      columns: R,
      cursorOffset: J,
      onChange: f,
      onCursorChange: E,
      onNext: i,
      onPrev: L,
      onExit: F
    } = p,
    N = ot(),
    D;
  if (K[0] !== d) D = e(I, {
    isFocused: d
  }), K[0] = d, K[1] = D;
  else D = K[1];
  let B;
  if (K[2] !== c) B = e(n, {
    children: c
  }), K[2] = c, K[3] = B;
  else B = K[3];
  let _;
  if (K[4] !== D || K[5] !== B) _ = r(s, {
    children: [D, B]
  }), K[4] = D, K[5] = B, K[6] = _;
  else _ = K[6];
  let k;
  if (K[7] !== h || K[8] !== R || K[9] !== J || K[10] !== C || K[11] !== d || K[12] !== N || K[13] !== b || K[14] !== f || K[15] !== E || K[16] !== F || K[17] !== i || K[18] !== L || K[19] !== u) k = e(s, {
    marginLeft: 4,
    children: d ? e(s, {
      borderStyle: b && !N ? "single" : void 0,
      borderLeft: !0,
      borderTop: !1,
      borderBottom: !1,
      borderRight: !1,
      borderDimColor: !0,
      paddingLeft: b && !N ? 1 : 0,
      children: e(Ir, {
        value: u,
        onChange: f,
        columns: b && !N ? R - 2 : R,
        onSubmit: i,
        onExit: F,
        onHistoryUp: L,
        onHistoryDown: i,
        cursorOffset: J ?? u.length,
        onChangeCursorOffset: E,
        multiline: b,
        inputFilter: (H) => ct(H, b),
        clearOnSubmit: !1,
        disableCtrlCClear: !0,
        disableBackslashReturn: b,
        disableCursorMovementForUpDownKeys: !b,
        disableEscapeDoublePress: !0,
        showCursor: !0,
        focus: !0
      })
    }) : b ? e(Xun, {
      value: u,
      bold: h,
      dim: C,
      columns: R
    }) : e(n, {
      bold: h,
      dimColor: C,
      wrap: "wrap",
      children: Mr(u)
    })
  }), K[7] = h, K[8] = R, K[9] = J, K[10] = C, K[11] = d, K[12] = N, K[13] = b, K[14] = f, K[15] = E, K[16] = F, K[17] = i, K[18] = L, K[19] = u, K[20] = k;
  else k = K[20];
  let q;
  if (K[21] !== _ || K[22] !== k) q = r(s, {
    flexDirection: "column",
    children: [_, k]
  }), K[21] = _, K[22] = k, K[23] = q;
  else q = K[23];
  return q
}
var Ie = "+ Write new feedback";

function xt(p) {
  let h = S(3),
    {
      isSelected: c
    } = p;
  const u = c ? "suggestion" : void 0,
    d = c ? `${re.pointer} ` : "  ";
  let C;
  if (h[0] !== u || h[1] !== d) C = r(n, {
    color: u,
    children: [d, Ie]
  }), h[0] = u, h[1] = d, h[2] = C;
  else C = h[2];
  return C
}

function vt(p) {
  let i = S(34),
    {
      thisSession: c,
      others: u,
      hasWriteNew: d,
      defaultFocusIndex: h,
      onFocus: C,
      onOpen: b,
      onWriteNew: R,
      onDiscard: J
    } = p,
    {
      rows: f
    } = As(Re()),
    E = Bl(),
    L;
  if (i[0] !== u || i[1] !== c) L = [...c, ...u], i[0] = u, i[1] = c, i[2] = L;
  else L = i[2];
  let F = L,
    N = (c.length > 0 ? 1 : 0) + (u.length > 0 ? 1 : 0) + F.length + (d ? 2 : 0),
    K = Math.max(dt, f - lt - (E ? 0 : at));
  const D = N > K ? K - 2 : K;
  let B;
  if (i[3] !== b || i[4] !== R || i[5] !== F) B = (_) => {
    let k = F[_];
    if (k) b(k);
    else R()
  }, i[3] = b, i[4] = R, i[5] = F, i[6] = B;
  else B = i[6];
  let H;
  if (i[7] !== J || i[8] !== F) H = (q, z) => {
    let de = F[z];
    if (q.key.toLowerCase() === "d" && de && !q.ctrl && !q.meta) q.preventDefault(), J(de)
  }, i[7] = J, i[8] = F, i[9] = H;
  else H = i[9];
  let se;
  if (i[10] !== c.length) se = c.length > 0 && e(hc.Heading, {
    children: e(n, {
      bold: !0,
      children: "This session"
    })
  }, "this-session"), i[10] = c.length, i[11] = se;
  else se = i[11];
  let T;
  if (i[12] !== c) T = c.map(Xt), i[12] = c, i[13] = T;
  else T = i[13];
  let oe;
  if (i[14] !== u.length) oe = u.length > 0 && e(hc.Heading, {
    children: e(n, {
      bold: !0,
      children: "Other sessions"
    })
  }, "other-sessions"), i[14] = u.length, i[15] = oe;
  else oe = i[15];
  let ce;
  if (i[16] !== u) ce = u.map(Jt), i[16] = u, i[17] = ce;
  else ce = i[17];
  let Q;
  if (i[18] !== d) Q = d && e(hc.Heading, {}, "gap"), i[18] = d, i[19] = Q;
  else Q = i[19];
  let x;
  if (i[20] !== d) x = d && e(Tn.Item, {
    label: Ie
  }, "write-new"), i[20] = d, i[21] = x;
  else x = i[21];
  let ae;
  if (i[22] !== h || i[23] !== C || i[24] !== x || i[25] !== D || i[26] !== B || i[27] !== H || i[28] !== se || i[29] !== T || i[30] !== oe || i[31] !== ce || i[32] !== Q) ae = r(Tn, {
    visibleCount: D,
    defaultFocusIndex: h,
    overflowHint: "count",
    onFocus: C,
    onSelect: B,
    onRowKeyDown: H,
    children: [se, T, oe, ce, Q, x]
  }), i[22] = h, i[23] = C, i[24] = x, i[25] = D, i[26] = B, i[27] = H, i[28] = se, i[29] = T, i[30] = oe, i[31] = ce, i[32] = Q, i[33] = ae;
  else ae = i[33];
  return ae
}

function Me(p) {
  return [kt[p.type], Ct(p.created_at), Mr(p.cwd), p.transcriptAvailable ? "transcript available" : "transcript expired (report only)"]
}

function Ct(p) {
  let c = Date.now() - Date.parse(p);
  if (!Number.isFinite(c) || c < 0) return "now";
  let u = Math.floor(c / 60000);
  if (u < 60) return `${Math.max(1,u)}m`;
  let d = Math.floor(u / 60);
  if (d < 24) return `${d}h`;
  return `${Math.floor(d/24)}d`
}
export {
  gGt
};
