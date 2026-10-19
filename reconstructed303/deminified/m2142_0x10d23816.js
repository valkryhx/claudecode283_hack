// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { xc } from "B:/~BUN/root/chunk-nbjke4gr.js";
import { Te } from "B:/~BUN/root/chunk-smy4yvhm.js";
import { s, n, dn, ot } from "B:/~BUN/root/chunk-damrp3r8.js";
import { F } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { jr } from "B:/~BUN/root/chunk-jthpk6wv.js";
import { w } from "B:/~BUN/root/chunk-rysqv8v1.js";
import { Wf, _n } from "B:/~BUN/root/chunk-6za2ez23.js";
import { O } from "B:/~BUN/root/chunk-nggrknsv.js";
import { Oe } from "B:/~BUN/root/chunk-g5gf7tps.js";
import { i } from "B:/~BUN/root/chunk-1kfn24jp.js";
import { eor, Znt, OVt, IVt, lor, wce, nJo } from "B:/~BUN/root/chunk-3yw4brjw.js";
import { cce } from "B:/~BUN/root/chunk-vw193yjw.js";
import { bl, us } from "B:/~BUN/root/chunk-b900np4s.js";
import { gs, qr } from "B:/~BUN/root/chunk-xc1c9t20.js";
import { Gn, vft } from "B:/~BUN/root/chunk-c44qc88s.js";
import { te } from "B:/~BUN/root/chunk-9tx73f8x.js";
import { Se } from "B:/~BUN/root/chunk-7dpyfa5r.js";
import { be } from "B:/~BUN/root/chunk-nyga36vf.js";
import { q } from "B:/~BUN/root/chunk-bf7csy4f.js";
import { ql, tn } from "B:/~BUN/root/chunk-2fh8t7m0.js";
import { ft } from "B:/~BUN/root/chunk-jh7dpafw.js";
import { Lr } from "B:/~BUN/root/chunk-rxj6qxcq.js";
import { jWt } from "B:/~BUN/root/chunk-kxp9j9f6.js";
import { Wtt, VGt } from "B:/~BUN/root/chunk-7b6c5n9a.js";
import { ko } from "B:/~BUN/root/chunk-r9cctkt4.js";
import { ls } from "B:/~BUN/root/chunk-fzhngknh.js";
import { Q, e, r } from "B:/~BUN/root/chunk-x2hkxw5q.js";
import { ae, P, Z, A, y, B } from "B:/~BUN/root/chunk-5hr2ysa5.js";
import { S } from "B:/~BUN/root/chunk-ef0msk7r.js";
B();
function Xt(W) {
  return e(tn.Item, {
    label: Gn(W.title),
    meta: Le(W)
  }, W.draft_id);
}
function Jt(ne) {
  return e(tn.Item, {
    label: Gn(ne.title),
    meta: Le(ne)
  }, ne.draft_id);
}
var Fe = ["bug", "idea", "missing_capability"],
  xt = {
    bug: "bug",
    idea: "idea",
    missing_capability: "missing capability"
  },
  Ne = [void 0, ...OVt],
  Ke = [void 0, ...IVt];
function rt(h) {
  return h === void 0 ? "(none)" : h.replace(/_/g, " ");
}
function st(h) {
  return ["type", "title", "area", "failure_mode", "task_category", "details", ...(h.transcriptAvailable ? ["transcript"] : []), "send"];
}
var Pe = 500,
  at = 6,
  lt = 3,
  dt = 5;
function Xwt({
  messages: h,
  onDone: onDone,
  abortSignal: c,
  onWriteNew: onWriteNew
}) {
  let [f, C] = y(null),
    [defaultFocusIndex, onFocus] = y(0),
    J = ot(),
    [m, L] = y("list"),
    [o, I] = y(null),
    [D, H] = y(!1),
    [G, _, M] = xc(0),
    [T, k, Y] = xc(null),
    [cursorOffset, onCursorChange] = y(null),
    ce = A(-1 / 0),
    [error, R] = y(null),
    [oe, ue] = y(null),
    columns = Te().columns - 6,
    x = dn(),
    le = A(0),
    W = A(!1),
    ne = A(0),
    fe = A(!1),
    we = A(!1),
    {
      storageV5: storageV5,
      credentials: credentials
    } = Oe(),
    host = gs(),
    ie = qr(t => t.id),
    hasWriteNew = onWriteNew !== void 0,
    de = ae(async () => {
      let {
        queued: queued
      } = await wce(void 0, storageV5).catch(() => ({
        queued: [],
        expired: []
      }));
      nJo(F(queued, l => l.source_session_id === ie)), C(queued);
      let a = queued.length - (hasWriteNew ? 0 : 1);
      return onFocus(l => Math.min(l, Math.max(0, a))), queued;
    }, [ie, hasWriteNew, storageV5, onFocus]);
  P(() => {
    de().then(t => {
      i("tengu_feedback_queue_opened", {
        queued_count: jr(t.length),
        this_session_count: jr(F(t, a => a.source_session_id === ie))
      });
    });
  }, [de, ie]);
  let thisSession = (f ?? []).filter(item => item.source_session_id === ie),
    others = (f ?? []).filter(item => item.source_session_id !== ie),
    re = [...thisSession, ...others],
    isSelected = hasWriteNew && defaultFocusIndex === re.length,
    Qe = re.length + (hasWriteNew ? 1 : 0),
    Dt = re[defaultFocusIndex],
    Ie = o ? Znt(o.request_ids).length : 0,
    pe = ae(t => {
      if (t === void 0) onDone();else onDone(t, {
        display: "system"
      });
    }, [onDone]),
    N = Z(() => o ? st(o) : [], [o]),
    ke = ae(t => {
      le.current = x.now(), _(t.length - 1);
    }, [x, _]),
    p = N[G],
    he = p === "title" || p === "area" || p === "details",
    onOpen = ae(t => {
      I(t), H(t.transcriptAvailable), R(null), k({
        type: t.type,
        title: Gn(t.title),
        area: Gn(t.area ?? ""),
        failureMode: t.failure_mode,
        taskCategory: t.task_category,
        details: vft(t.details)
      }), onCursorChange(null), ce.current = -1 / 0, ke(st(t)), ne.current = x.now(), W.current = !1, we.current = !1, L("review");
    }, [x, ke, k]),
    Ze = ae(async t => {
      let a = x.now(),
        current = ne.current;
      if (ne.current = Math.max(a, current), a - current < Pe || fe.current || W.current) return;
      fe.current = !0;
      try {
        await VGt(t, "panel", storageV5).catch(() => {}), await de(), L("list"), I(null);
      } finally {
        fe.current = !1;
      }
    }, [de, x, storageV5]),
    xe = ae(t => {
      I(t), C(g => g ? g.map(item => item.draft_id === t.draft_id ? t : item) : g);
      let {
        transcriptAvailable: transcriptAvailable,
        ...l
      } = t;
      return lor(l, new Date(), storageV5).then(g => {
        if (!g.success) R(g.reason === "too_large" ? "That draft is too large to save. Trim the details." : "Could not save the draft to disk.");
      });
    }, [storageV5]),
    ve = ae(() => {
      let t = Y();
      if (!o || !t) return o;
      let a = Gn(o.title),
        l = Gn(o.area ?? ""),
        g = vft(o.details),
        title = t.title === a || t.title.trim() === "" ? o.title : t.title.trim(),
        Ce = t.area === l ? o.area ?? "" : t.area.trim(),
        details = t.details === g ? o.details : t.details.trim() === "" ? "" : t.details;
      if (t.type === o.type && title === o.title && (Ce === "" ? void 0 : Ce) === o.area && t.failureMode === o.failure_mode && t.taskCategory === o.task_category && details === o.details) return o;
      return {
        ...o,
        type: t.type,
        title: title,
        area: Ce === "" ? void 0 : Ce,
        failure_mode: t.failureMode,
        task_category: t.taskCategory,
        details: details
      };
    }, [o, Y]),
    et = ae(() => {
      let t = ve();
      if (t && t !== o) {
        if (o && t.details === "" && o.details !== "" && x.now() - ce.current < Pe) t = {
          ...t,
          details: o.details
        };
        xe(t);
      }
    }, [ve, o, xe, x]),
    j = ae(t => {
      onCursorChange(null), R(a => a === De ? null : a), _(a => {
        let l = Math.max(0, Math.min(N.length - 1, a + t));
        if (l !== a && N[l] === "send") le.current = x.now();
        return l;
      });
    }, [N, x, _]),
    Tt = ae((t, a) => {
      if (t === "type") k(l => {
        if (!l) return l;
        let g = Fe.indexOf(l.type),
          type = Fe[(g + a + Fe.length) % Fe.length];
        return type ? {
          ...l,
          type: type
        } : l;
      });else if (t === "failure_mode") k(l => {
        if (!l) return l;
        let g = Ne.indexOf(l.failureMode),
          v = Ne.length;
        return {
          ...l,
          failureMode: Ne[(g + a + v) % v]
        };
      });else if (t === "task_category") k(l => {
        if (!l) return l;
        let g = Ke.indexOf(l.taskCategory),
          v = Ke.length;
        return {
          ...l,
          taskCategory: Ke[(g + a + v) % v]
        };
      });else if (t === "transcript") H(l => !l);
    }, [k]),
    Rt = ae(async () => {
      if (!o || W.current || fe.current) return;
      let t = x.now(),
        current_2 = le.current;
      if (le.current = Math.max(t, current_2), t - current_2 < Pe) return;
      if (Y()?.title.trim() === "") {
        R("Title is blank. Type a title, or press esc on the field to restore it.");
        return;
      }
      let draft = ve() ?? o;
      if (W.current = !0, L("submitting"), R(null), draft !== o) await xe(draft);
      let g;
      try {
        g = await Wtt({
          draft: draft,
          includeTranscript: D && draft.transcriptAvailable,
          currentSessionMessages: h,
          signal: c,
          storageV5: storageV5,
          host: host,
          credentials: credentials
        });
      } catch {
        g = {
          success: !1,
          error: "Couldn't send feedback. The draft is still queued. Try again later."
        };
      }
      if (W.current = !1, g.success) await de(), ue(g.feedbackId), L("receipt");else {
        if (R(g.error), g.payloadTooLarge) {
          let v = N.indexOf("transcript");
          if (v >= 0) _(v);
        }
        L("review");
      }
    }, [o, Y, D, h, c, de, x, ve, xe, storageV5, credentials, host, N, _]);
  function onKeyDown(t) {
    if (t.ctrl || t.meta) return;
    if (m === "submitting") {
      t.preventDefault();
      return;
    }
    if (t.key === "escape" && !(m === "review" && he)) return;
    if (m === "receipt") {
      if (t.preventDefault(), (f?.length ?? 0) > 0) L("list"), I(null);else pe(`Feedback sent (receipt ${oe})`);
      return;
    }
    if (m === "list") {
      if (!f) {
        t.preventDefault();
        return;
      }
      if (t.key.toLowerCase() === "w" && onWriteNew) {
        t.preventDefault(), onWriteNew();
        return;
      }
      if (Qe === 0) {
        t.preventDefault(), pe();
        return;
      }
      if (re.length > 0) return;
      if (t.key === "up" || t.key === "down") t.preventDefault();else if (t.key === "return" && onWriteNew) t.preventDefault(), onWriteNew();else if (t.key !== "escape") t.preventDefault(), pe();
      return;
    }
    if (m === "review" && o) {
      if (we.current) {
        t.preventDefault();
        return;
      }
      if (he) {
        if (t.key === "escape") t.preventDefault(), onCancel();
        return;
      }
      let a = N[M()];
      if (t.key === "up") t.preventDefault(), j(-1);else if (t.key === "down") t.preventDefault(), j(1);else if (t.key === "left" || t.key === "right") t.preventDefault(), Tt(a, t.key === "left" ? -1 : 1);else if (t.key === " " && a === "transcript") t.preventDefault(), H(l => !l);else if (t.key === "return") {
        if (t.preventDefault(), a === "send") Rt();else j(1);
      } else if (t.key.toLowerCase() === "d" && a !== "title" && a !== "area" && a !== "details") t.preventDefault(), Ze(o);
    }
  }
  let onExit = ae(() => {
      if (we.current || W.current || fe.current) return;
      we.current = !0, et(), ne.current = -1 / 0, L("list"), I(null);
    }, [et]),
    onCancel = ae(() => {
      if (m !== "review") {
        pe();
        return;
      }
      let t = N[M()];
      if (t !== "title" && t !== "area" && t !== "details") {
        onExit();
        return;
      }
      k(a => a && o ? {
        ...a,
        [t]: t === "details" ? vft(o.details) : Gn(o[t] ?? "")
      } : a), onCursorChange(null), ke(N), R(a => a === De ? null : a);
    }, [m, o, N, M, onExit, k, ke, pe]),
    nt = !(J && re.length > 0),
    inputGuide = m === "list" ? r(Se, {
      children: [Qe > 0 && nt && e(q, {
        chord: "enter",
        action: isSelected ? "write new feedback" : "review"
      }), Dt !== void 0 && nt && e(q, {
        chord: "d",
        action: "discard"
      }), e(q, {
        chord: "esc",
        action: "close"
      })]
    }) : m === "review" ? r(Se, {
      children: [e(q, {
        chord: ["up", "down"],
        action: "move"
      }), (p === "type" || p === "failure_mode" || p === "task_category" || p === "transcript") && e(q, {
        chord: ["left", "right"],
        action: "change"
      }), e(q, {
        chord: "enter",
        action: p === "send" ? "send" : "next"
      }), p === "details" && e(q, {
        chord: cce() ? "shift+enter" : "ctrl+j",
        action: "new line"
      }), !he && e(q, {
        chord: "d",
        action: "discard"
      }), e(q, {
        chord: "esc",
        action: he ? "cancel edit" : "later"
      })]
    }) : null;
  return e(ko, {
    onKeyDown: onKeyDown,
    children: r(be, {
      title: "Feedback drafts",
      onCancel: onCancel,
      isCancelActive: m !== "submitting" && !he,
      hideInputGuide: m === "receipt" || m === "submitting",
      inputGuide: inputGuide,
      children: [m === "list" && f === null && e(n, {
        dimColor: !0,
        children: "Loading\u2026"
      }), m === "list" && f !== null && re.length === 0 && r(s, {
        flexDirection: "column",
        gap: 1,
        children: [e(n, {
          children: "No feedback drafts queued."
        }), e(n, {
          dimColor: !0,
          children: "Claude drafts feedback at high-signal moments; drafts appear here for your review."
        }), onWriteNew ? r(s, {
          flexDirection: "column",
          gap: 1,
          children: [e(vt, {
            isSelected: isSelected
          }), e(n, {
            dimColor: !0,
            children: "/bug works anytime. Any other key closes this panel."
          })]
        }) : e(n, {
          dimColor: !0,
          children: "Any key closes this panel."
        })]
      }), m === "list" && f !== null && re.length > 0 && r(s, {
        flexDirection: "column",
        children: [e(Ct, {
          thisSession: thisSession,
          others: others,
          hasWriteNew: hasWriteNew,
          defaultFocusIndex: defaultFocusIndex,
          onFocus: onFocus,
          onOpen: onOpen,
          onWriteNew: () => onWriteNew?.(),
          onDiscard: t => void Ze(t)
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            wrap: "wrap",
            children: "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days."
          })
        })]
      }), m === "review" && o && T && r(s, {
        flexDirection: "column",
        children: [r(s, {
          children: [e(K, {
            isFocused: p === "type"
          }), e(n, {
            children: "Type: "
          }), e(ye, {
            value: xt[T.type],
            isFocused: p === "type"
          })]
        }), e(Me, {
          label: "Title:",
          value: T.title,
          isFocused: p === "title",
          bold: !0,
          columns: columns,
          cursorOffset: cursorOffset,
          onChange: title_2 => k(a => a ? {
            ...a,
            title: title_2
          } : a),
          onCursorChange: onCursorChange,
          onNext: () => j(1),
          onPrev: () => j(-1),
          onExit: onExit
        }), e(Me, {
          label: "Area:",
          value: T.area,
          isFocused: p === "area",
          dim: !0,
          columns: columns,
          cursorOffset: cursorOffset,
          onChange: area => k(a => a ? {
            ...a,
            area: area
          } : a),
          onCursorChange: onCursorChange,
          onNext: () => j(1),
          onPrev: () => j(-1),
          onExit: onExit
        }), r(s, {
          children: [e(K, {
            isFocused: p === "failure_mode"
          }), e(n, {
            children: "Failure mode: "
          }), e(ye, {
            value: rt(T.failureMode),
            isFocused: p === "failure_mode"
          })]
        }), r(s, {
          children: [e(K, {
            isFocused: p === "task_category"
          }), e(n, {
            children: "Task: "
          }), e(ye, {
            value: rt(T.taskCategory),
            isFocused: p === "task_category"
          })]
        }), e(Me, {
          label: "Details:",
          value: T.details,
          isFocused: p === "details",
          dim: !0,
          multiline: !0,
          columns: columns,
          cursorOffset: cursorOffset,
          onChange: details_2 => {
            let a = Buffer.byteLength(details_2, "utf8");
            if (a > eor && a >= Buffer.byteLength(T.details, "utf8")) {
              R(De);
              return;
            }
            k(l => {
              if (l && l.details.trim() !== "" && details_2.trim() === "") ce.current = x.now();
              return l ? {
                ...l,
                details: details_2
              } : l;
            }), R(l => l === De ? null : l);
          },
          onCursorChange: onCursorChange,
          onNext: () => j(1),
          onPrev: () => j(-1),
          onExit: onExit
        }), o.transcriptAvailable ? r(s, {
          flexDirection: "column",
          children: [r(s, {
            children: [e(K, {
              isFocused: p === "transcript"
            }), e(n, {
              children: "Send transcript: "
            }), e(ye, {
              value: D ? "yes" : "no",
              isFocused: p === "transcript"
            }), r(n, {
              dimColor: !0,
              children: [" \xB7 ", D ? "sends this conversation to Anthropic" : "report only"]
            })]
          }), o.source_session_id !== ie && e(s, {
            marginLeft: 4,
            children: r(n, {
              dimColor: !0,
              wrap: "wrap",
              children: ["from ", Gn(o.cwd), " \xB7 session", " ", Gn(o.source_session_id)]
            })
          })]
        }) : r(s, {
          children: [e(K, {
            isFocused: !1
          }), r(n, {
            children: ["Send transcript: ", e(n, {
              dimColor: !0,
              children: "expired (report only)"
            })]
          })]
        }), r(s, {
          marginTop: 1,
          children: [e(K, {
            isFocused: !1
          }), r(n, {
            dimColor: !0,
            wrap: "wrap",
            children: ["Environment info (", Gn(o.os), ", v", Gn(o.cli_version), ",", " ", Gn(o.model), o.effort !== void 0 && r(Q, {
              children: [", effort", " ", Gn(o.effort)]
            }), o.thinking_type !== void 0 && r(Q, {
              children: [", thinking ", o.thinking_type, o.thinking_budget !== void 0 && r(Q, {
                children: [" (budget ", o.thinking_budget, ")"]
              })]
            }), o.assistant_turn_count !== void 0 && r(Q, {
              children: [", turn ", o.assistant_turn_count, o.message_count !== void 0 && r(Q, {
                children: ["/", o.message_count]
              }), o.subagent_count !== void 0 && o.subagent_count > 0 && r(Q, {
                children: [" ", "with ", o.subagent_count, " ", O(o.subagent_count, "subagent")]
              })]
            }), ", drafted ", Ft(o.created_at), " ago)", Ie > 0 ? ` and ${Ie} API request ${O(Ie, "id")} are` : " is", " ", "always attached."]
          })]
        }), error && e(s, {
          marginTop: 1,
          children: e(ls, {
            error: error
          })
        }), r(s, {
          marginTop: 1,
          children: [e(K, {
            isFocused: p === "send"
          }), e(n, {
            bold: p === "send",
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
      }), m === "submitting" && e(n, {
        children: "Sending feedback\u2026"
      }), m === "receipt" && r(s, {
        flexDirection: "column",
        children: [r(n, {
          color: "success",
          children: [e(ft, {
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
  });
}
var De = `That edit would push Details past the ${Math.floor(eor / 1024)}KB limit. Trim the details first.`;
function ct(h, u) {
  return Wf(h.replace(/\r\n|\r/g, `
`)).split(`
`).map(item => _n(item)).join(u ? `
` : " ");
}
function K(h) {
  let f = w(3),
    {
      isFocused: isFocused
    } = h;
  const color = isFocused ? "suggestion" : void 0,
    children = isFocused ? `${te.pointer} ` : "  ";
  let C;
  if (f[0] !== color || f[1] !== children) C = e(n, {
    color: color,
    children: children
  }), f[0] = color, f[1] = children, f[2] = C;else C = f[2];
  return C;
}
function ye(h) {
  let d = w(6),
    {
      value: u,
      isFocused: isFocused_2
    } = h;
  if (!isFocused_2) {
    let f;
    if (d[0] !== u) f = e(n, {
      dimColor: !0,
      children: u
    }), d[0] = u, d[1] = f;else f = d[1];
    return f;
  }
  let f;
  if (d[2] === S) f = r(n, {
    dimColor: !0,
    children: [te.triangleLeft, " "]
  }), d[2] = f;else f = d[2];
  let C;
  if (d[3] === S) C = r(n, {
    dimColor: !0,
    children: [" ", te.triangleRight]
  }), d[3] = C;else C = d[3];
  let b;
  if (d[4] !== u) b = r(n, {
    children: [f, u, C]
  }), d[4] = u, d[5] = b;else b = d[5];
  return b;
}
function Me(h) {
  let G = w(24),
    {
      label: u,
      value: value,
      isFocused: isFocused_3,
      bold: bold,
      dim: C,
      multiline: b,
      columns: columns_2,
      cursorOffset: cursorOffset_2,
      onChange: onChange,
      onCursorChange: L,
      onNext: o,
      onPrev: I,
      onExit: onExit_2
    } = h,
    H = ot(),
    _;
  if (G[0] !== isFocused_3) _ = e(K, {
    isFocused: isFocused_3
  }), G[0] = isFocused_3, G[1] = _;else _ = G[1];
  let M;
  if (G[2] !== u) M = e(n, {
    children: u
  }), G[2] = u, G[3] = M;else M = G[3];
  let T;
  if (G[4] !== _ || G[5] !== M) T = r(s, {
    children: [_, M]
  }), G[4] = _, G[5] = M, G[6] = T;else T = G[6];
  let k;
  if (G[7] !== bold || G[8] !== columns_2 || G[9] !== cursorOffset_2 || G[10] !== C || G[11] !== isFocused_3 || G[12] !== H || G[13] !== b || G[14] !== onChange || G[15] !== L || G[16] !== onExit_2 || G[17] !== o || G[18] !== I || G[19] !== value) k = e(s, {
    marginLeft: 4,
    children: isFocused_3 ? e(s, {
      borderStyle: b && !H ? "single" : void 0,
      borderLeft: !0,
      borderTop: !1,
      borderBottom: !1,
      borderRight: !1,
      borderDimColor: !0,
      paddingLeft: b && !H ? 1 : 0,
      children: e(Lr, {
        value: value,
        onChange: onChange,
        columns: b && !H ? columns_2 - 2 : columns_2,
        onSubmit: o,
        onExit: onExit_2,
        onHistoryUp: I,
        onHistoryDown: o,
        cursorOffset: cursorOffset_2 ?? value.length,
        onChangeCursorOffset: L,
        multiline: b,
        inputFilter: Y => ct(Y, b),
        clearOnSubmit: !1,
        disableCtrlCClear: !0,
        disableBackslashReturn: b,
        disableCursorMovementForUpDownKeys: !b,
        disableEscapeDoublePress: !0,
        showCursor: !0,
        focus: !0
      })
    }) : b ? e(jWt, {
      value: value,
      bold: bold,
      dim: C,
      columns: columns_2
    }) : e(n, {
      bold: bold,
      dimColor: C,
      wrap: "wrap",
      children: Gn(value)
    })
  }), G[7] = bold, G[8] = columns_2, G[9] = cursorOffset_2, G[10] = C, G[11] = isFocused_3, G[12] = H, G[13] = b, G[14] = onChange, G[15] = L, G[16] = onExit_2, G[17] = o, G[18] = I, G[19] = value, G[20] = k;else k = G[20];
  let U;
  if (G[21] !== T || G[22] !== k) U = r(s, {
    flexDirection: "column",
    children: [T, k]
  }), G[21] = T, G[22] = k, G[23] = U;else U = G[23];
  return U;
}
var label = "+ Write new feedback";
function vt(h) {
  let f = w(3),
    {
      isSelected: isSelected_2
    } = h;
  const color_2 = isSelected_2 ? "suggestion" : void 0,
    d = isSelected_2 ? `${te.pointer} ` : "  ";
  let C;
  if (f[0] !== color_2 || f[1] !== d) C = r(n, {
    color: color_2,
    children: [d, label]
  }), f[0] = color_2, f[1] = d, f[2] = C;else C = f[2];
  return C;
}
function Ct(h) {
  let o = w(34),
    {
      thisSession: thisSession_2,
      others: others_2,
      hasWriteNew: hasWriteNew_2,
      defaultFocusIndex: defaultFocusIndex_2,
      onFocus: onFocus_2,
      onOpen: onOpen_2,
      onWriteNew: onWriteNew_2,
      onDiscard: onDiscard
    } = h,
    {
      rows: rows
    } = us(Te()),
    L = bl(),
    I;
  if (o[0] !== others_2 || o[1] !== thisSession_2) I = [...thisSession_2, ...others_2], o[0] = others_2, o[1] = thisSession_2, o[2] = I;else I = o[2];
  let D = I,
    H = (thisSession_2.length > 0 ? 1 : 0) + (others_2.length > 0 ? 1 : 0) + D.length + (hasWriteNew_2 ? 2 : 0),
    G = Math.max(dt, rows - lt - (L ? 0 : at));
  const visibleCount = H > G ? G - 2 : G;
  let onSelect;
  if (o[3] !== onOpen_2 || o[4] !== onWriteNew_2 || o[5] !== D) onSelect = T => {
    let k = D[T];
    if (k) onOpen_2(k);else onWriteNew_2();
  }, o[3] = onOpen_2, o[4] = onWriteNew_2, o[5] = D, o[6] = onSelect;else onSelect = o[6];
  let onRowKeyDown;
  if (o[7] !== onDiscard || o[8] !== D) onRowKeyDown = (U, z) => {
    let ce = D[z];
    if (U.key.toLowerCase() === "d" && ce && !U.ctrl && !U.meta) U.preventDefault(), onDiscard(ce);
  }, o[7] = onDiscard, o[8] = D, o[9] = onRowKeyDown;else onRowKeyDown = o[9];
  let se;
  if (o[10] !== thisSession_2.length) se = thisSession_2.length > 0 && e(ql.Heading, {
    children: e(n, {
      bold: !0,
      children: "This session"
    })
  }, "this-session"), o[10] = thisSession_2.length, o[11] = se;else se = o[11];
  let R;
  if (o[12] !== thisSession_2) R = thisSession_2.map(Xt), o[12] = thisSession_2, o[13] = R;else R = o[13];
  let oe;
  if (o[14] !== others_2.length) oe = others_2.length > 0 && e(ql.Heading, {
    children: e(n, {
      bold: !0,
      children: "Other sessions"
    })
  }, "other-sessions"), o[14] = others_2.length, o[15] = oe;else oe = o[15];
  let ue;
  if (o[16] !== others_2) ue = others_2.map(Jt), o[16] = others_2, o[17] = ue;else ue = o[17];
  let ee;
  if (o[18] !== hasWriteNew_2) ee = hasWriteNew_2 && e(ql.Heading, {}, "gap"), o[18] = hasWriteNew_2, o[19] = ee;else ee = o[19];
  let x;
  if (o[20] !== hasWriteNew_2) x = hasWriteNew_2 && e(tn.Item, {
    label: label
  }, "write-new"), o[20] = hasWriteNew_2, o[21] = x;else x = o[21];
  let le;
  if (o[22] !== defaultFocusIndex_2 || o[23] !== onFocus_2 || o[24] !== x || o[25] !== visibleCount || o[26] !== onSelect || o[27] !== onRowKeyDown || o[28] !== se || o[29] !== R || o[30] !== oe || o[31] !== ue || o[32] !== ee) le = r(tn, {
    visibleCount: visibleCount,
    defaultFocusIndex: defaultFocusIndex_2,
    overflowHint: "count",
    onFocus: onFocus_2,
    onSelect: onSelect,
    onRowKeyDown: onRowKeyDown,
    children: [se, R, oe, ue, ee, x]
  }), o[22] = defaultFocusIndex_2, o[23] = onFocus_2, o[24] = x, o[25] = visibleCount, o[26] = onSelect, o[27] = onRowKeyDown, o[28] = se, o[29] = R, o[30] = oe, o[31] = ue, o[32] = ee, o[33] = le;else le = o[33];
  return le;
}
function Le(h) {
  return [xt[h.type], Ft(h.created_at), Gn(h.cwd), h.transcriptAvailable ? "transcript available" : "transcript expired (report only)"];
}
function Ft(h, u = Date.now()) {
  let c = u - Date.parse(h);
  if (!Number.isFinite(c) || c < 0) return "now";
  let d = Math.floor(c / 60000);
  if (d < 60) return `${Math.max(1, d)}m`;
  let f = Math.floor(d / 60);
  if (f < 24) return `${f}h`;
  return `${Math.floor(f / 24)}d`;
}
export { Xwt };