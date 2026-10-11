// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { Ii } from "B:/~BUN/root/chunk-bt71g93n.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { s, n, _t } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { hr } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { I } from "B:/~BUN/root/chunk-y04k89s2.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { af, Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Pkn, $je, tbt, nbt, Fkn, GQ, RXr } from "B:/~BUN/root/chunk-gn719r3c.js";
import { Ube } from "B:/~BUN/root/chunk-9jvj58wt.js";
import { ol, As } from "B:/~BUN/root/chunk-syke822n.js";
import { ir } from "B:/~BUN/root/chunk-4r6zcwth.js";
import { Rn, J3e } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { Kc, kn } from "B:/~BUN/root/chunk-87fmbjg1.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { xgt } from "B:/~BUN/root/chunk-bm2wsr80.js";
import { jr } from "B:/~BUN/root/chunk-1xe8mz4a.js";
import { ko } from "B:/~BUN/root/chunk-v1xd9kf3.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Aje, M_t } from "B:/~BUN/root/chunk-f0qx42vc.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { se, R, X, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { U } from "B:/~BUN/root/chunk-z1enakv9.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
function Xt(W) {
  return e(kn.Item, {
    label: Rn(W.title),
    meta: Me(W)
  }, W.draft_id);
}
function Jt(ne) {
  return e(kn.Item, {
    label: Rn(ne.title),
    meta: Me(ne)
  }, ne.draft_id);
}
var Te = ["bug", "idea", "missing_capability"],
  wt = {
    bug: "bug",
    idea: "idea",
    missing_capability: "missing capability"
  },
  Ne = [void 0, ...tbt],
  Ke = [void 0, ...nbt];
function rt(h) {
  return h === void 0 ? "(none)" : h.replace(/_/g, " ");
}
function st(h) {
  return ["type", "title", "area", "failure_mode", "task_category", "details", ...(h.transcriptAvailable ? ["transcript"] : []), "send"];
}
var Pe = 500,
  ot = 6,
  at = 3,
  lt = 5;
function AJe({
  messages: h,
  onDone: onDone,
  abortSignal: c,
  onWriteNew: onWriteNew
}) {
  let [f, C] = g(null),
    [defaultFocusIndex, onFocus] = g(0),
    Q = _t(),
    [m, M] = g("list"),
    [o, O] = g(null),
    [D, H] = g(!1),
    [q, _, A] = Ii(0),
    [E, k, G] = Ii(null),
    [cursorOffset, onCursorChange] = g(null),
    ce = T(-1 / 0),
    [error, B] = g(null),
    [ae, ue] = g(null),
    columns = ve().columns - 6,
    x = Yt(),
    le = T(0),
    W = T(!1),
    ne = T(0),
    fe = T(!1),
    xe = T(!1),
    {
      storageV5: storageV5,
      credentials: credentials
    } = ke(),
    ie = ir(t => t.id),
    hasWriteNew = onWriteNew !== void 0,
    de = se(async () => {
      let {
        queued: queued
      } = await GQ(void 0, storageV5).catch(() => ({
        queued: [],
        expired: []
      }));
      RXr(U(queued, l => l.source_session_id === ie)), C(queued);
      let a = queued.length - (hasWriteNew ? 0 : 1);
      return onFocus(l => Math.min(l, Math.max(0, a))), queued;
    }, [ie, hasWriteNew, storageV5, onFocus]);
  R(() => {
    de().then(t => {
      i("tengu_feedback_queue_opened", {
        queued_count: hr(t.length),
        this_session_count: hr(U(t, a => a.source_session_id === ie))
      });
    });
  }, [de, ie]);
  let thisSession = (f ?? []).filter(item => item.source_session_id === ie),
    others = (f ?? []).filter(item => item.source_session_id !== ie),
    re = [...thisSession, ...others],
    isSelected = hasWriteNew && defaultFocusIndex === re.length,
    ze = re.length + (hasWriteNew ? 1 : 0),
    Ct = re[defaultFocusIndex],
    Oe = o ? $je(o.request_ids).length : 0,
    pe = se(t => {
      if (t === void 0) onDone();else onDone(t, {
        display: "system"
      });
    }, [onDone]),
    K = X(() => o ? st(o) : [], [o]),
    Ce = se(t => {
      le.current = x.now(), _(t.length - 1);
    }, [x, _]),
    p = K[q],
    he = p === "title" || p === "area" || p === "details",
    onOpen = se(t => {
      O(t), H(t.transcriptAvailable), B(null), k({
        type: t.type,
        title: Rn(t.title),
        area: Rn(t.area ?? ""),
        failureMode: t.failure_mode,
        taskCategory: t.task_category,
        details: J3e(t.details)
      }), onCursorChange(null), ce.current = -1 / 0, Ce(st(t)), ne.current = x.now(), W.current = !1, xe.current = !1, M("review");
    }, [x, Ce, k]),
    Qe = se(async t => {
      let a = x.now(),
        current = ne.current;
      if (ne.current = Math.max(a, current), a - current < Pe || fe.current || W.current) return;
      fe.current = !0;
      try {
        await M_t(t, "panel", storageV5).catch(() => {}), await de(), M("list"), O(null);
      } finally {
        fe.current = !1;
      }
    }, [de, x, storageV5]),
    Fe = se(t => {
      O(t), C(b => b ? b.map(item => item.draft_id === t.draft_id ? t : item) : b);
      let {
        transcriptAvailable: transcriptAvailable,
        ...l
      } = t;
      return Fkn(l, new Date(), storageV5).then(b => {
        if (!b.success) B(b.reason === "too_large" ? "That draft is too large to save. Trim the details." : "Could not save the draft to disk.");
      });
    }, [storageV5]),
    De = se(() => {
      let t = G();
      if (!o || !t) return o;
      let a = Rn(o.title),
        l = Rn(o.area ?? ""),
        b = J3e(o.details),
        title = t.title === a || t.title.trim() === "" ? o.title : t.title.trim(),
        _e = t.area === l ? o.area ?? "" : t.area.trim(),
        details = t.details === b ? o.details : t.details.trim() === "" ? "" : t.details;
      if (t.type === o.type && title === o.title && (_e === "" ? void 0 : _e) === o.area && t.failureMode === o.failure_mode && t.taskCategory === o.task_category && details === o.details) return o;
      return {
        ...o,
        type: t.type,
        title: title,
        area: _e === "" ? void 0 : _e,
        failure_mode: t.failureMode,
        task_category: t.taskCategory,
        details: details
      };
    }, [o, G]),
    Ze = se(() => {
      let t = De();
      if (t && t !== o) {
        if (o && t.details === "" && o.details !== "" && x.now() - ce.current < Pe) t = {
          ...t,
          details: o.details
        };
        Fe(t);
      }
    }, [De, o, Fe, x]),
    j = se(t => {
      onCursorChange(null), B(a => a === Re ? null : a), _(a => {
        let l = Math.max(0, Math.min(K.length - 1, a + t));
        if (l !== a && K[l] === "send") le.current = x.now();
        return l;
      });
    }, [K, x, _]),
    Dt = se((t, a) => {
      if (t === "type") k(l => {
        if (!l) return l;
        let b = Te.indexOf(l.type),
          type = Te[(b + a + Te.length) % Te.length];
        return type ? {
          ...l,
          type: type
        } : l;
      });else if (t === "failure_mode") k(l => {
        if (!l) return l;
        let b = Ne.indexOf(l.failureMode),
          v = Ne.length;
        return {
          ...l,
          failureMode: Ne[(b + a + v) % v]
        };
      });else if (t === "task_category") k(l => {
        if (!l) return l;
        let b = Ke.indexOf(l.taskCategory),
          v = Ke.length;
        return {
          ...l,
          taskCategory: Ke[(b + a + v) % v]
        };
      });else if (t === "transcript") H(l => !l);
    }, [k]),
    Tt = se(async () => {
      if (!o || W.current || fe.current) return;
      let t = x.now(),
        current_2 = le.current;
      if (le.current = Math.max(t, current_2), t - current_2 < Pe) return;
      if (G()?.title.trim() === "") {
        B("Title is blank. Type a title, or press esc on the field to restore it.");
        return;
      }
      let draft = De() ?? o;
      if (W.current = !0, M("submitting"), B(null), draft !== o) await Fe(draft);
      let b;
      try {
        b = await Aje({
          draft: draft,
          includeTranscript: D && draft.transcriptAvailable,
          currentSessionMessages: h,
          signal: c,
          storageV5: storageV5,
          credentials: credentials
        });
      } catch {
        b = {
          success: !1,
          error: "Couldn't send feedback. The draft is still queued. Try again later."
        };
      }
      if (W.current = !1, b.success) await de(), ue(b.feedbackId), M("receipt");else {
        if (B(b.error), b.payloadTooLarge) {
          let v = K.indexOf("transcript");
          if (v >= 0) _(v);
        }
        M("review");
      }
    }, [o, G, D, h, c, de, x, De, Fe, storageV5, credentials, K, _]);
  function onKeyDown(t) {
    if (t.ctrl || t.meta) return;
    if (m === "submitting") {
      t.preventDefault();
      return;
    }
    if (t.key === "escape" && !(m === "review" && he)) return;
    if (m === "receipt") {
      if (t.preventDefault(), (f?.length ?? 0) > 0) M("list"), O(null);else pe(`Feedback sent (receipt ${ae})`);
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
      if (ze === 0) {
        t.preventDefault(), pe();
        return;
      }
      if (re.length > 0) return;
      if (t.key === "up" || t.key === "down") t.preventDefault();else if (t.key === "return" && onWriteNew) t.preventDefault(), onWriteNew();else if (t.key !== "escape") t.preventDefault(), pe();
      return;
    }
    if (m === "review" && o) {
      if (xe.current) {
        t.preventDefault();
        return;
      }
      if (he) {
        if (t.key === "escape") t.preventDefault(), onCancel();
        return;
      }
      let a = K[A()];
      if (t.key === "up") t.preventDefault(), j(-1);else if (t.key === "down") t.preventDefault(), j(1);else if (t.key === "left" || t.key === "right") t.preventDefault(), Dt(a, t.key === "left" ? -1 : 1);else if (t.key === " " && a === "transcript") t.preventDefault(), H(l => !l);else if (t.key === "return") {
        if (t.preventDefault(), a === "send") Tt();else j(1);
      } else if (t.key.toLowerCase() === "d" && a !== "title" && a !== "area" && a !== "details") t.preventDefault(), Qe(o);
    }
  }
  let onExit = se(() => {
      if (xe.current || W.current || fe.current) return;
      xe.current = !0, Ze(), ne.current = -1 / 0, M("list"), O(null);
    }, [Ze]),
    onCancel = se(() => {
      if (m !== "review") {
        pe();
        return;
      }
      let t = K[A()];
      if (t !== "title" && t !== "area" && t !== "details") {
        onExit();
        return;
      }
      k(a => a && o ? {
        ...a,
        [t]: t === "details" ? J3e(o.details) : Rn(o[t] ?? "")
      } : a), onCursorChange(null), Ce(K), B(a => a === Re ? null : a);
    }, [m, o, K, A, onExit, k, Ce, pe]),
    nt = !(Q && re.length > 0),
    inputGuide = m === "list" ? r(ye, {
      children: [ze > 0 && nt && e(F, {
        chord: "enter",
        action: isSelected ? "write new feedback" : "review"
      }), Ct !== void 0 && nt && e(F, {
        chord: "d",
        action: "discard"
      }), e(F, {
        chord: "esc",
        action: "close"
      })]
    }) : m === "review" ? r(ye, {
      children: [e(F, {
        chord: ["up", "down"],
        action: "move"
      }), (p === "type" || p === "failure_mode" || p === "task_category" || p === "transcript") && e(F, {
        chord: ["left", "right"],
        action: "change"
      }), e(F, {
        chord: "enter",
        action: p === "send" ? "send" : "next"
      }), p === "details" && e(F, {
        chord: Ube() ? "shift+enter" : "ctrl+j",
        action: "new line"
      }), !he && e(F, {
        chord: "d",
        action: "discard"
      }), e(F, {
        chord: "esc",
        action: he ? "cancel edit" : "later"
      })]
    }) : null;
  return e(jr, {
    onKeyDown: onKeyDown,
    children: r(ge, {
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
          children: [e(kt, {
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
        children: [e(xt, {
          thisSession: thisSession,
          others: others,
          hasWriteNew: hasWriteNew,
          defaultFocusIndex: defaultFocusIndex,
          onFocus: onFocus,
          onOpen: onOpen,
          onWriteNew: () => onWriteNew?.(),
          onDiscard: t => void Qe(t)
        }), e(s, {
          marginTop: 1,
          children: e(n, {
            dimColor: !0,
            wrap: "wrap",
            children: "Drafts live only on this machine and are never sent without you. Unsent drafts expire after 30 days."
          })
        })]
      }), m === "review" && o && E && r(s, {
        flexDirection: "column",
        children: [r(s, {
          children: [e(P, {
            isFocused: p === "type"
          }), e(n, {
            children: "Type: "
          }), e(we, {
            value: wt[E.type],
            isFocused: p === "type"
          })]
        }), e(Ae, {
          label: "Title:",
          value: E.title,
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
        }), e(Ae, {
          label: "Area:",
          value: E.area,
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
          children: [e(P, {
            isFocused: p === "failure_mode"
          }), e(n, {
            children: "Failure mode: "
          }), e(we, {
            value: rt(E.failureMode),
            isFocused: p === "failure_mode"
          })]
        }), r(s, {
          children: [e(P, {
            isFocused: p === "task_category"
          }), e(n, {
            children: "Task: "
          }), e(we, {
            value: rt(E.taskCategory),
            isFocused: p === "task_category"
          })]
        }), e(Ae, {
          label: "Details:",
          value: E.details,
          isFocused: p === "details",
          dim: !0,
          multiline: !0,
          columns: columns,
          cursorOffset: cursorOffset,
          onChange: details_2 => {
            let a = Buffer.byteLength(details_2, "utf8");
            if (a > Pkn && a >= Buffer.byteLength(E.details, "utf8")) {
              B(Re);
              return;
            }
            k(l => {
              if (l && l.details.trim() !== "" && details_2.trim() === "") ce.current = x.now();
              return l ? {
                ...l,
                details: details_2
              } : l;
            }), B(l => l === Re ? null : l);
          },
          onCursorChange: onCursorChange,
          onNext: () => j(1),
          onPrev: () => j(-1),
          onExit: onExit
        }), o.transcriptAvailable ? r(s, {
          flexDirection: "column",
          children: [r(s, {
            children: [e(P, {
              isFocused: p === "transcript"
            }), e(n, {
              children: "Send transcript: "
            }), e(we, {
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
              children: ["from ", Rn(o.cwd), " \xB7 session", " ", Rn(o.source_session_id)]
            })
          })]
        }) : r(s, {
          children: [e(P, {
            isFocused: !1
          }), r(n, {
            children: ["Send transcript: ", e(n, {
              dimColor: !0,
              children: "expired (report only)"
            })]
          })]
        }), r(s, {
          marginTop: 1,
          children: [e(P, {
            isFocused: !1
          }), r(n, {
            dimColor: !0,
            wrap: "wrap",
            children: ["Environment info (", Rn(o.os), ", v", Rn(o.cli_version), ",", " ", Rn(o.model), o.effort !== void 0 && r(V, {
              children: [", effort", " ", Rn(o.effort)]
            }), o.thinking_type !== void 0 && r(V, {
              children: [", thinking ", o.thinking_type, o.thinking_budget !== void 0 && r(V, {
                children: [" (budget ", o.thinking_budget, ")"]
              })]
            }), o.assistant_turn_count !== void 0 && r(V, {
              children: [", turn ", o.assistant_turn_count, o.message_count !== void 0 && r(V, {
                children: ["/", o.message_count]
              }), o.subagent_count !== void 0 && o.subagent_count > 0 && r(V, {
                children: [" ", "with ", o.subagent_count, " ", I(o.subagent_count, "subagent")]
              })]
            }), ", drafted ", vt(o.created_at), " ago)", Oe > 0 ? ` and ${Oe} API request ${I(Oe, "id")} are` : " is", " ", "always attached."]
          })]
        }), error && e(s, {
          marginTop: 1,
          children: e(ko, {
            error: error
          })
        }), r(s, {
          marginTop: 1,
          children: [e(P, {
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
          children: [e(et, {
            status: "success",
            withSpace: !0
          }), "Feedback sent (receipt ", ae, "). Thanks!"]
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
var Re = `That edit would push Details past the ${Math.floor(Pkn / 1024)}KB limit. Trim the details first.`;
function dt(h, u) {
  return af(h.replace(/\r\n|\r/g, `
`)).split(`
`).map(item => Tn(item)).join(u ? `
` : " ");
}
function P(h) {
  let f = w(3),
    {
      isFocused: isFocused
    } = h;
  const color = isFocused ? "suggestion" : void 0,
    children = isFocused ? `${Z.pointer} ` : "  ";
  let C;
  if (f[0] !== color || f[1] !== children) C = e(n, {
    color: color,
    children: children
  }), f[0] = color, f[1] = children, f[2] = C;else C = f[2];
  return C;
}
function we(h) {
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
    children: [Z.triangleLeft, " "]
  }), d[2] = f;else f = d[2];
  let C;
  if (d[3] === S) C = r(n, {
    dimColor: !0,
    children: [" ", Z.triangleRight]
  }), d[3] = C;else C = d[3];
  let y;
  if (d[4] !== u) y = r(n, {
    children: [f, u, C]
  }), d[4] = u, d[5] = y;else y = d[5];
  return y;
}
function Ae(h) {
  let q = w(24),
    {
      label: u,
      value: value,
      isFocused: isFocused_3,
      bold: bold,
      dim: C,
      multiline: y,
      columns: columns_2,
      cursorOffset: cursorOffset_2,
      onChange: onChange,
      onCursorChange: M,
      onNext: o,
      onPrev: O,
      onExit: onExit_2
    } = h,
    H = _t(),
    _;
  if (q[0] !== isFocused_3) _ = e(P, {
    isFocused: isFocused_3
  }), q[0] = isFocused_3, q[1] = _;else _ = q[1];
  let A;
  if (q[2] !== u) A = e(n, {
    children: u
  }), q[2] = u, q[3] = A;else A = q[3];
  let E;
  if (q[4] !== _ || q[5] !== A) E = r(s, {
    children: [_, A]
  }), q[4] = _, q[5] = A, q[6] = E;else E = q[6];
  let k;
  if (q[7] !== bold || q[8] !== columns_2 || q[9] !== cursorOffset_2 || q[10] !== C || q[11] !== isFocused_3 || q[12] !== H || q[13] !== y || q[14] !== onChange || q[15] !== M || q[16] !== onExit_2 || q[17] !== o || q[18] !== O || q[19] !== value) k = e(s, {
    marginLeft: 4,
    children: isFocused_3 ? e(s, {
      borderStyle: y && !H ? "single" : void 0,
      borderLeft: !0,
      borderTop: !1,
      borderBottom: !1,
      borderRight: !1,
      borderDimColor: !0,
      paddingLeft: y && !H ? 1 : 0,
      children: e(Qn, {
        value: value,
        onChange: onChange,
        columns: y && !H ? columns_2 - 2 : columns_2,
        onSubmit: o,
        onExit: onExit_2,
        onHistoryUp: O,
        onHistoryDown: o,
        cursorOffset: cursorOffset_2 ?? value.length,
        onChangeCursorOffset: M,
        multiline: y,
        inputFilter: G => dt(G, y),
        clearOnSubmit: !1,
        disableCtrlCClear: !0,
        disableBackslashReturn: y,
        disableCursorMovementForUpDownKeys: !y,
        disableEscapeDoublePress: !0,
        showCursor: !0,
        focus: !0
      })
    }) : y ? e(xgt, {
      value: value,
      bold: bold,
      dim: C,
      columns: columns_2
    }) : e(n, {
      bold: bold,
      dimColor: C,
      wrap: "wrap",
      children: Rn(value)
    })
  }), q[7] = bold, q[8] = columns_2, q[9] = cursorOffset_2, q[10] = C, q[11] = isFocused_3, q[12] = H, q[13] = y, q[14] = onChange, q[15] = M, q[16] = onExit_2, q[17] = o, q[18] = O, q[19] = value, q[20] = k;else k = q[20];
  let Y;
  if (q[21] !== E || q[22] !== k) Y = r(s, {
    flexDirection: "column",
    children: [E, k]
  }), q[21] = E, q[22] = k, q[23] = Y;else Y = q[23];
  return Y;
}
var label = "+ Write new feedback";
function kt(h) {
  let f = w(3),
    {
      isSelected: isSelected_2
    } = h;
  const color_2 = isSelected_2 ? "suggestion" : void 0,
    d = isSelected_2 ? `${Z.pointer} ` : "  ";
  let C;
  if (f[0] !== color_2 || f[1] !== d) C = r(n, {
    color: color_2,
    children: [d, label]
  }), f[0] = color_2, f[1] = d, f[2] = C;else C = f[2];
  return C;
}
function xt(h) {
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
    } = As(ve()),
    M = ol(),
    O;
  if (o[0] !== others_2 || o[1] !== thisSession_2) O = [...thisSession_2, ...others_2], o[0] = others_2, o[1] = thisSession_2, o[2] = O;else O = o[2];
  let D = O,
    H = (thisSession_2.length > 0 ? 1 : 0) + (others_2.length > 0 ? 1 : 0) + D.length + (hasWriteNew_2 ? 2 : 0),
    q = Math.max(lt, rows - at - (M ? 0 : ot));
  const visibleCount = H > q ? q - 2 : q;
  let onSelect;
  if (o[3] !== onOpen_2 || o[4] !== onWriteNew_2 || o[5] !== D) onSelect = E => {
    let k = D[E];
    if (k) onOpen_2(k);else onWriteNew_2();
  }, o[3] = onOpen_2, o[4] = onWriteNew_2, o[5] = D, o[6] = onSelect;else onSelect = o[6];
  let onRowKeyDown;
  if (o[7] !== onDiscard || o[8] !== D) onRowKeyDown = (Y, ee) => {
    let ce = D[ee];
    if (Y.key.toLowerCase() === "d" && ce && !Y.ctrl && !Y.meta) Y.preventDefault(), onDiscard(ce);
  }, o[7] = onDiscard, o[8] = D, o[9] = onRowKeyDown;else onRowKeyDown = o[9];
  let oe;
  if (o[10] !== thisSession_2.length) oe = thisSession_2.length > 0 && e(Kc.Heading, {
    children: e(n, {
      bold: !0,
      children: "This session"
    })
  }, "this-session"), o[10] = thisSession_2.length, o[11] = oe;else oe = o[11];
  let B;
  if (o[12] !== thisSession_2) B = thisSession_2.map(Xt), o[12] = thisSession_2, o[13] = B;else B = o[13];
  let ae;
  if (o[14] !== others_2.length) ae = others_2.length > 0 && e(Kc.Heading, {
    children: e(n, {
      bold: !0,
      children: "Other sessions"
    })
  }, "other-sessions"), o[14] = others_2.length, o[15] = ae;else ae = o[15];
  let ue;
  if (o[16] !== others_2) ue = others_2.map(Jt), o[16] = others_2, o[17] = ue;else ue = o[17];
  let te;
  if (o[18] !== hasWriteNew_2) te = hasWriteNew_2 && e(Kc.Heading, {}, "gap"), o[18] = hasWriteNew_2, o[19] = te;else te = o[19];
  let x;
  if (o[20] !== hasWriteNew_2) x = hasWriteNew_2 && e(kn.Item, {
    label: label
  }, "write-new"), o[20] = hasWriteNew_2, o[21] = x;else x = o[21];
  let le;
  if (o[22] !== defaultFocusIndex_2 || o[23] !== onFocus_2 || o[24] !== x || o[25] !== visibleCount || o[26] !== onSelect || o[27] !== onRowKeyDown || o[28] !== oe || o[29] !== B || o[30] !== ae || o[31] !== ue || o[32] !== te) le = r(kn, {
    visibleCount: visibleCount,
    defaultFocusIndex: defaultFocusIndex_2,
    overflowHint: "count",
    onFocus: onFocus_2,
    onSelect: onSelect,
    onRowKeyDown: onRowKeyDown,
    children: [oe, B, ae, ue, te, x]
  }), o[22] = defaultFocusIndex_2, o[23] = onFocus_2, o[24] = x, o[25] = visibleCount, o[26] = onSelect, o[27] = onRowKeyDown, o[28] = oe, o[29] = B, o[30] = ae, o[31] = ue, o[32] = te, o[33] = le;else le = o[33];
  return le;
}
function Me(h) {
  return [wt[h.type], vt(h.created_at), Rn(h.cwd), h.transcriptAvailable ? "transcript available" : "transcript expired (report only)"];
}
function vt(h, u = Date.now()) {
  let c = u - Date.parse(h);
  if (!Number.isFinite(c) || c < 0) return "now";
  let d = Math.floor(c / 60000);
  if (d < 60) return `${Math.max(1, d)}m`;
  let f = Math.floor(d / 60);
  if (f < 24) return `${f}h`;
  return `${Math.floor(f / 24)}d`;
}
export { AJe };