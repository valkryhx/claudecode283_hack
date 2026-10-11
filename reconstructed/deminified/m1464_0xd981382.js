// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { ve } from "B:/~BUN/root/chunk-cxqcvpm0.js";
import { s, n, _r } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { l, Zd } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { Ndt, Ndn, vOo, NR, XCe, it, sh, fye, x, Ee } from "B:/~BUN/root/chunk-gf53qpk6.js";
import { ke } from "B:/~BUN/root/chunk-kss0wzj5.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { _, m } from "B:/~BUN/root/chunk-51n463p1.js";
import { Tn } from "B:/~BUN/root/chunk-rwwxddqq.js";
import { Yt } from "B:/~BUN/root/chunk-jdm3bsma.js";
import { Gi, yh, gc, rs, Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { Fj, L8r } from "B:/~BUN/root/chunk-1a6hgte8.js";
import { Wt } from "B:/~BUN/root/chunk-r2yrqvry.js";
import { F } from "B:/~BUN/root/chunk-acd2tycn.js";
import { ye } from "B:/~BUN/root/chunk-41008fhm.js";
import { Sae, wae, lEe, VKe, nI, WEe, Li } from "B:/~BUN/root/chunk-1mdeqc2r.js";
import { Qn } from "B:/~BUN/root/chunk-jcnv9sfw.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { sDn, vRt, apo, rie, lpo, cpo, dpo, upo, zyr, Gyr } from "B:/~BUN/root/chunk-3jyp964r.js";
import { Hj } from "B:/~BUN/root/chunk-dk0c0nrh.js";
import { Fre } from "B:/~BUN/root/chunk-sxyam0fw.js";
import { Yv } from "B:/~BUN/root/chunk-3qb0jwrq.js";
import { jr } from "B:/~BUN/root/chunk-1xe8mz4a.js";
import { ur } from "B:/~BUN/root/chunk-ehewxxqw.js";
import { V, e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { Ko } from "B:/~BUN/root/chunk-v8s05yj9.js";
import { Z } from "B:/~BUN/root/chunk-08bth2fj.js";
import { R, Gr, T, g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S, hn } from "B:/~BUN/root/chunk-yv67t8hr.js";
import { stripVTControlCharacters as Ft } from "util";
N();
function Qs(Ae) {
  return Ae === 0 ? 1 : 0;
}
function Zs(un) {
  return Math.max(0, un - 1);
}
function ei($t) {
  return $t === 0 ? 0 : $t - 1;
}
function ni(Mt) {
  return Mt === 2 ? 2 : Mt + 1;
}
function oi(ai) {
  return Math.max(0, ai - 1);
}
function Eo(E) {
  if (sh(it()) && Sae() && !wae()) lEe(E);
}
var pe = Ndn,
  Ao = "https://www.anthropic.com/legal/consumer-terms",
  Bo = 2000,
  $o = 30,
  Mo = 500,
  mn = 1000,
  Fo = 1e5,
  Oo = 1e6;
function We(E) {
  let a = E.trim();
  if (a === "") return {
    ok: !1,
    error: "Enter an amount"
  };
  let o = /^([0-9]+)(?:\.([0-9]{1,2}))?$/.exec(a);
  if (!o) return {
    ok: !1,
    error: "Enter an amount like 20 or 20.50"
  };
  let cents = Number(o[1]) * 100 + Number((o[2] ?? "").padEnd(2, "0"));
  if (cents <= 0) return {
    ok: !1,
    error: "Enter an amount"
  };
  if (cents > Oo) return {
    ok: !1,
    error: `Enter an amount of ${Oo / 100} or less`
  };
  return {
    ok: !0,
    cents: cents
  };
}
function ln(E) {
  return E % 100 === 0 ? String(E / 100) : (E / 100).toFixed(2);
}
function Ie(E) {
  let W = w(6),
    [value, o] = g(E),
    [cursor, f] = g(E.length),
    C = T(!0),
    k = T(E),
    v = T(E.length),
    u = T(!1),
    p = T(null),
    M = T(!1),
    Y;
  if (W[0] === S) Y = () => {
    M.current = !1;
  }, W[0] = Y;else Y = W[0];
  R(Y);
  let K;
  if (W[1] === S) {
    let I = (D, G) => {
      let P = D.slice(G.length);
      o(P), p.current = P.length, v.current = P.length, f(P.length);
    };
    K = O => {
      let current = k.current;
      if (C.current) {
        if (C.current = !1, current !== "" && !u.current && v.current === current.length && O.length > current.length && O.startsWith(current)) {
          M.current = !0, I(O, current);
          return;
        }
      } else if (M.current && O.startsWith(current)) {
        I(O, current);
        return;
      }
      o(O);
    };
    W[1] = K;
  } else K = W[1];
  let setValue = K,
    Q;
  if (W[2] === S) Q = U => {
    let current_2 = p.current;
    if (current_2 !== null) {
      p.current = null, v.current = current_2, f(current_2);
      return;
    }
    if (U !== k.current.length) u.current = !0;
    v.current = U, f(U);
  }, W[2] = Q;else Q = W[2];
  let setCursor = Q,
    X;
  if (W[3] !== cursor || W[4] !== value) X = {
    value: value,
    setValue: setValue,
    cursor: cursor,
    setCursor: setCursor
  }, W[3] = cursor, W[4] = value, W[5] = X;else X = W[5];
  return X;
}
function ySn(E) {
  let k = w(8),
    {
      onDone: onDone,
      initialStep: initialStep,
      entryReason: entryReason,
      onBeforePurchase: onBeforePurchase,
      onPurchaseSuccess: onPurchaseSuccess
    } = E,
    v;
  if (k[0] === S) v = {
    s: "loading"
  }, k[0] = v;else v = k[0];
  let [step, setStep] = g(v),
    M;
  if (k[1] !== entryReason || k[2] !== initialStep || k[3] !== onBeforePurchase || k[4] !== onDone || k[5] !== onPurchaseSuccess || k[6] !== step) M = e(Hj, {
    children: e(So, {
      onDone: onDone,
      step: step,
      setStep: setStep,
      initialStep: initialStep,
      entryReason: entryReason,
      onBeforePurchase: onBeforePurchase,
      onPurchaseSuccess: onPurchaseSuccess
    })
  }), k[1] = entryReason, k[2] = initialStep, k[3] = onBeforePurchase, k[4] = onDone, k[5] = onPurchaseSuccess, k[6] = step, k[7] = M;else M = k[7];
  return M;
}
function So({
  onDone: onDone_2,
  step: step_2,
  setStep: setStep_2,
  initialStep: initialStep_2,
  entryReason: entryReason_2,
  onBeforePurchase: onBeforePurchase_2,
  onPurchaseSuccess: onPurchaseSuccess_2
}) {
  let {
      storageV5: storageV5,
      credentials: credentials
    } = ke(),
    p = L8r(step_2.s),
    [M, W] = g(step_2.s),
    [Y, K] = g(!1);
  if (M !== step_2.s) K(Gs(M)), W(step_2.s);
  let D = _r(Fj, M),
    G = Y && !D && p(),
    [currency, I] = g("USD"),
    [presets, j] = g([]),
    [stripeProductId, Q] = g(),
    [U, B] = g(null);
  async function L(h = !0) {
    if (h) setStep_2({
      s: "loading"
    });
    try {
      let A = NR(),
        usage;
      if (A) usage = {
        is_enabled: A.isEnabled,
        monthly_limit: A.spendLimitCents,
        used_credits: A.usedCents,
        currency: A.currency,
        utilization: A.spendLimitCents && A.spendLimitCents > 0 ? A.usedCents / A.spendLimitCents * 100 : 0
      };
      let [J, balance, pm, ce] = await Promise.all([usage ? Promise.resolve(null) : nI(credentials), rie(credentials), dpo(credentials), cpo(credentials)]),
        ue = (ce?.currency ?? balance?.currency ?? "USD").toUpperCase();
      I(ue);
      let be = ce?.bundles ?? [];
      j(be.length > 0 ? be : ue === "USD" ? lpo : []), Q(ce?.stripe_product_id);
      let _e = ce?.expiry_policy_months ?? balance?.expiry_policy_months ?? null;
      if (B(_e), x("tengu_satchel_banjo", !1)) {
        if (_e !== null) if (Number.isInteger(_e) && _e > 0) _("extra_usage_expiry_notice");else m("extra_usage_expiry_notice", "invalid_months");
      }
      if (!usage && J === null) {
        setStep_2({
          s: "error",
          msg: "Couldn't load usage credit status \u2014 try /login if your session expired."
        });
        return;
      }
      if (usage ??= J?.extra_usage ?? {
        is_enabled: !1,
        monthly_limit: null,
        used_credits: null,
        utilization: null
      }, initialStep_2 === "buy_select") {
        if (!pm) return i("tengu_extra_usage_inline_dialog_fallback_browser", {
          reason: y("no_payment_method")
        }), `No card on file \u2014 add a payment method at ${pe}`;
        setStep_2({
          s: "buy_select",
          pm: pm
        });
        return;
      }
      if (!VKe(usage)) {
        setStep_2({
          s: "not_enabled",
          pm: pm
        });
        return;
      }
      setStep_2({
        s: "enabled",
        usage: usage,
        balance: balance,
        pm: pm
      });
    } catch (error) {
      t(`Failed to load extra usage status: ${error}`, {
        level: "error"
      }), setStep_2({
        s: "error",
        msg: "Couldn't load usage credit status"
      });
    }
  }
  let X = Gr(L),
    H = Gr(h => onDone_2(h));
  R(() => {
    i("tengu_extra_usage_inline_dialog_shown", {
      entry_reason: entryReason_2 ? y(entryReason_2) : void 0
    }), X().then(h => {
      if (h !== void 0) H(h);
    });
  }, [entryReason_2]);
  function ae(h) {
    i("tengu_extra_usage_inline_dialog_cancel", {
      from_step: c(h)
    }), onDone_2(void 0, {
      display: "skip"
    });
  }
  function onConfirm() {
    i("tengu_extra_usage_inline_dialog_enable_confirm", {}), setStep_2({
      s: "enabling",
      work: sDn(credentials).then(async success => {
        if (i("tengu_extra_usage_inline_dialog_enable_result", {
          success: success
        }), !success) return !1;
        if (!NR()) Eo(storageV5), await Ee(A => {
          if (!A.oauthAccount) return A;
          if (A.oauthAccount.hasExtraUsageEnabled === !0) return A;
          return {
            ...A,
            oauthAccount: {
              ...A.oauthAccount,
              hasExtraUsageEnabled: !0
            }
          };
        }, storageV5);
        return await L(!1), !0;
      })
    });
  }
  function onDone_3(h) {
    if (!h) setStep_2({
      s: "error",
      msg: "Couldn't turn on usage credits"
    });
  }
  function ee(h, A) {
    switch (h) {
      case "continue":
        onDone_2("Continuing with usage credits");
        break;
      case "buy":
        if (!A.pm) i("tengu_extra_usage_inline_dialog_fallback_browser", {
          reason: y("no_payment_method")
        }), onDone_2(`No card on file \u2014 add a payment method at ${pe}`);else setStep_2({
          s: "buy_select",
          pm: A.pm
        });
        break;
      case "adjust":
        setStep_2({
          s: "adjust_limit",
          current: A.usage.monthly_limit
        });
        break;
      case "auto_reload":
        if (!A.pm) i("tengu_extra_usage_inline_dialog_fallback_browser", {
          reason: y("no_payment_method")
        }), onDone_2(`No card on file \u2014 add a payment method at ${pe}`);else setStep_2({
          s: "auto_reload_config",
          current: A.balance?.auto_reload_settings,
          pm: A.pm
        });
        break;
      case "manage":
        Ko(pe), onDone_2(`Opening ${pe}`);
        break;
    }
  }
  function le(enabled, threshold_cents, reload_to_cents) {
    i("tengu_extra_usage_inline_dialog_auto_reload", {
      enabled: enabled,
      threshold_cents: threshold_cents,
      reload_to_cents: reload_to_cents,
      currency: fye(currency)
    });
    let J = apo(enabled, threshold_cents, reload_to_cents, currency, credentials),
      work = enabled ? J.then(async fe => {
        if (fe.ok) await L(!1);
        return fe;
      }) : J;
    setStep_2({
      s: "auto_reload_saving",
      enabled: enabled,
      work: work
    });
  }
  function se(h, A) {
    if (!h.ok) {
      setStep_2({
        s: "error",
        msg: h.reason ? `Failed to update auto-reload: ${h.reason}` : "Failed to update auto-reload"
      });
      return;
    }
    if (!A) L();
  }
  async function me(h, bundle) {
    if (i("tengu_extra_usage_inline_dialog_buy_confirm", {
      amount_cents: h,
      preset: !!bundle,
      currency: fye(currency)
    }), setStep_2({
      s: "buy_purchasing"
    }), onBeforePurchase_2) {
      if (!(await onBeforePurchase_2().catch(() => !1))) {
        setStep_2({
          s: "error",
          msg: "Couldn't turn on usage credits \u2014 no charge was made."
        });
        return;
      }
    }
    let credit = bundle?.local_credit_minor_units ?? h;
    try {
      let J = await upo(bundle?.id ? {
        kind: "bundle",
        bundle: bundle
      } : {
        kind: "custom",
        amountCents: h
      }, credentials);
      if (J.payment_status === "success") i("tengu_extra_usage_inline_dialog_buy_result", {
        status: y("success")
      }), setStep_2({
        s: "buy_success",
        credit: credit
      });else if (J.payment_status === "pending_invoice" && J.purchase_id) setStep_2({
        s: "buy_polling",
        purchaseId: J.purchase_id,
        credit: credit
      });else if (J.payment_status === "requires_action") i("tengu_extra_usage_inline_dialog_buy_result", {
        status: y("3ds_fallback")
      }), setStep_2({
        s: "error",
        msg: `Your card requires additional verification \u2014 this purchase was not completed. Try again at ${pe}`
      });else setStep_2({
        s: "error",
        msg: "Unexpected purchase state"
      });
    } catch (error) {
      let oe = XCe(error);
      if (Zd(error, fe => XCe(fe) !== null)) t(`Extra usage credit purchase failed: ${oe ?? l(error)}`, {
        level: "error"
      });else d(error);
      i("tengu_extra_usage_inline_dialog_buy_result", {
        status: y("failed")
      }), setStep_2({
        s: "error",
        msg: oe ? `Purchase failed: ${oe}` : "Purchase failed"
      });
    }
  }
  async function q(h, A) {
    i("tengu_extra_usage_inline_dialog_adjust_limit", {
      old_cents: A ?? void 0,
      new_cents: h ?? void 0,
      unlimited: h === null,
      currency: fye(currency)
    }), setStep_2({
      s: "adjusting"
    });
    let ne = await vRt(h, currency, credentials);
    if (!ne.ok) {
      setStep_2({
        s: "error",
        msg: ne.reason ? `Failed to update spend limit: ${ne.reason}` : "Failed to update spend limit"
      });
      return;
    }
    onDone_2(h === null ? "Monthly limit set to unlimited" : `Monthly limit updated to ${Li(h, currency, "fit")}`);
  }
  let expiryNotice = ta(U),
    expiryMonths = expiryNotice !== null ? U : null;
  if (G) return e(s, {
    paddingTop: 1,
    children: e(ur, {
      message: "Loading usage credit status\u2026"
    })
  });
  switch (step_2.s) {
    case "loading":
      return e(s, {
        paddingTop: 1,
        children: e(ur, {
          message: "Loading usage credit status\u2026"
        })
      });
    case "enabling":
      return e(Co, {
        message: "Turning on usage credits\u2026",
        work: step_2.work,
        failure: !1,
        onDone: onDone_3
      });
    case "adjusting":
      return e(s, {
        paddingTop: 1,
        children: e(ur, {
          message: "Updating spend limit\u2026"
        })
      });
    case "auto_reload_saving":
      return step_2.enabled ? e(Co, {
        message: "Turning on auto-reload\u2026",
        work: step_2.work,
        failure: {
          ok: !1,
          reason: null
        },
        onDone: h => se(h, !0)
      }) : e(v2t, {
        message: "Turning off auto-reload\u2026",
        work: step_2.work,
        failure: {
          ok: !1,
          reason: null
        },
        onDone: h => se(h, !1)
      });
    case "buy_purchasing":
      return e(Dn, {
        message: "Processing payment\u2026 (may take a few seconds)"
      });
    case "buy_success":
      {
        let message = `Added ${Li(step_2.credit, currency)} of usage credits`;
        return e(vt, {
          message: message,
          onDone: () => (Eo(storageV5), onPurchaseSuccess_2 ? onPurchaseSuccess_2(message) : onDone_2(message))
        });
      }
    case "buy_polling":
      return e(_t, {
        purchaseId: step_2.purchaseId,
        onSuccess: () => setStep_2({
          s: "buy_success",
          credit: step_2.credit
        }),
        onError: msg => setStep_2({
          s: "error",
          msg: msg
        })
      });
    case "not_enabled":
      return e(mt, {
        pm: step_2.pm,
        onConfirm: onConfirm,
        onCancel: () => ae("not_enabled")
      });
    case "enabled":
      return e(ft, {
        step: step_2,
        currency: currency,
        onAction: h => ee(h, step_2),
        onCancel: () => ae("enabled")
      });
    case "buy_select":
      return e(gt, {
        pm: step_2.pm,
        presets: presets,
        currency: currency,
        expiryNotice: expiryNotice,
        onConfirm: bundle_2 => setStep_2({
          s: "buy_confirm",
          pm: step_2.pm,
          cents: bundle_2.local_price_minor_units,
          bundle: bundle_2
        }),
        onCustom: () => setStep_2({
          s: "buy_custom",
          pm: step_2.pm
        }),
        onCancel: () => initialStep_2 === "buy_select" ? ae("buy_select") : void L()
      });
    case "buy_custom":
      return e(yt, {
        pm: step_2.pm,
        initialCents: step_2.cents,
        currency: currency,
        onConfirm: cents_2 => setStep_2({
          s: "buy_confirm",
          pm: step_2.pm,
          cents: cents_2
        }),
        onCancel: () => setStep_2({
          s: "buy_select",
          pm: step_2.pm
        })
      });
    case "buy_confirm":
      return e(pt, {
        pm: step_2.pm,
        cents: step_2.cents,
        bundle: step_2.bundle,
        currency: currency,
        stripeProductId: stripeProductId,
        expiryMonths: expiryMonths,
        onConfirm: () => me(step_2.cents, step_2.bundle),
        onCancel: () => setStep_2(step_2.bundle ? {
          s: "buy_select",
          pm: step_2.pm
        } : {
          s: "buy_custom",
          pm: step_2.pm,
          cents: step_2.cents
        })
      });
    case "adjust_limit":
      return e(bt, {
        current: step_2.current,
        currency: currency,
        onConfirm: h => q(h, step_2.current),
        onCancel: () => void L()
      });
    case "auto_reload_config":
      return e(ht, {
        current: step_2.current,
        pm: step_2.pm,
        currency: currency,
        onSave: (h, A) => le(!0, h, A),
        onTurnOff: () => le(!1),
        onCancel: () => void L()
      });
    case "error":
      return e(dt, {
        msg: step_2.msg,
        onClose: () => ae("error")
      });
  }
}
function dt(E) {
  let b = w(9),
    {
      msg: a,
      onClose: o
    } = E,
    f;
  if (b[0] !== o) f = {
    "confirm:yes": () => {
      Ko(pe), o();
    }
  }, b[0] = o, b[1] = f;else f = b[1];
  let C;
  if (b[2] === S) C = {
    context: "Confirmation"
  }, b[2] = C;else C = b[2];
  Wt(f, C);
  let inputGuide;
  if (b[3] === S) inputGuide = r(ye, {
    children: [e(F, {
      chord: "enter",
      action: `open ${pe}`
    }), e(F, {
      chord: "escape",
      action: "cancel"
    })]
  }), b[3] = inputGuide;else inputGuide = b[3];
  let children;
  if (b[4] !== a) children = e(s, {
    flexDirection: "column",
    gap: 1,
    children: e(n, {
      color: "error",
      children: a
    })
  }), b[4] = a, b[5] = children;else children = b[5];
  let u;
  if (b[6] !== o || b[7] !== children) u = e(ge, {
    title: "Usage credits",
    onCancel: o,
    color: "error",
    inputGuide: inputGuide,
    children: children
  }), b[6] = o, b[7] = children, b[8] = u;else u = b[8];
  return u;
}
function Pe(E) {
  return `${E.brand ?? E.type} \xB7\xB7\xB7\xB7${E.last4 ?? ""}`;
}
function mt(E) {
  let u = w(64),
    {
      pm: pm_2,
      onConfirm: onConfirm_2,
      onCancel: onCancel
    } = E,
    f = Gi(),
    {
      refusedWithin: refusedWithin,
      noteRefused: noteRefused,
      epoch: epoch
    } = rs(),
    p;
  if (u[0] !== f || u[1] !== noteRefused || u[2] !== refusedWithin) p = function M() {
    if (f() || refusedWithin()) {
      return noteRefused(), !0;
    }
    return !1;
  }, u[0] = f, u[1] = noteRefused, u[2] = refusedWithin, u[3] = p;else p = u[3];
  let M = p,
    W = yh(),
    Y = gc(epoch),
    K = T(!1),
    D,
    G,
    P,
    onCancel_2,
    flexDirection,
    gap,
    re,
    Q,
    U,
    title,
    onCancel_3,
    color,
    H,
    refuseInput,
    openedAt,
    hideIndexes,
    confirmLabel,
    cancelLabel,
    focus,
    onConfirm_3;
  if (u[4] !== f || u[5] !== Y.remountKey || u[6] !== noteRefused || u[7] !== onCancel || u[8] !== onConfirm_2 || u[9] !== pm_2 || u[10] !== M || u[11] !== refusedWithin || u[12] !== W) {
    let z = function z(q) {
      return () => {
        if (K.current) {
          return;
        }
        if (f() || refusedWithin()) {
          noteRefused();
          return;
        }
        K.current = !0, q();
      };
    };
    P = ge;
    title = "Turn on usage credits";
    onCancel_3 = z(onCancel);
    color = "suggestion";
    G = s;
    flexDirection = "column";
    gap = 1;
    if (u[33] === S) re = e(n, {
      children: "Keep using Claude when you hit a limit."
    }), u[33] = re;else re = u[33];
    let children_2;
    if (u[34] !== pm_2) children_2 = pm_2 ? `Card on file: ${Pe(pm_2)}` : `No card on file \u2014 add one at ${pe} before buying.`, u[34] = pm_2, u[35] = children_2;else children_2 = u[35];
    if (u[36] !== children_2) Q = e(n, {
      dimColor: !0,
      children: children_2
    }), u[36] = children_2, u[37] = Q;else Q = u[37];
    if (u[38] === S) U = r(n, {
      dimColor: !0,
      children: ["By turning on, you agree to turn on usage credits as defined in our Help Center article:", `
`, Ndt]
    }), u[38] = U;else U = u[38];
    D = qn;
    H = Y.remountKey;
    refuseInput = M;
    openedAt = W;
    hideIndexes = !0;
    confirmLabel = "Turn on";
    cancelLabel = "Cancel";
    focus = "cancel";
    onConfirm_3 = z(onConfirm_2);
    onCancel_2 = z(onCancel);
    u[4] = f, u[5] = Y.remountKey, u[6] = noteRefused, u[7] = onCancel, u[8] = onConfirm_2, u[9] = pm_2, u[10] = M, u[11] = refusedWithin, u[12] = W, u[13] = D, u[14] = G, u[15] = P, u[16] = onCancel_2, u[17] = flexDirection, u[18] = gap, u[19] = re, u[20] = Q, u[21] = U, u[22] = title, u[23] = onCancel_3, u[24] = color, u[25] = H, u[26] = refuseInput, u[27] = openedAt, u[28] = hideIndexes, u[29] = confirmLabel, u[30] = cancelLabel, u[31] = focus, u[32] = onConfirm_3;
  } else D = u[13], G = u[14], P = u[15], onCancel_2 = u[16], flexDirection = u[17], gap = u[18], re = u[19], Q = u[20], U = u[21], title = u[22], onCancel_3 = u[23], color = u[24], H = u[25], refuseInput = u[26], openedAt = u[27], hideIndexes = u[28], confirmLabel = u[29], cancelLabel = u[30], focus = u[31], onConfirm_3 = u[32];
  let ie;
  if (u[39] !== D || u[40] !== onCancel_2 || u[41] !== H || u[42] !== refuseInput || u[43] !== openedAt || u[44] !== hideIndexes || u[45] !== confirmLabel || u[46] !== cancelLabel || u[47] !== focus || u[48] !== onConfirm_3) ie = e(D, {
    refuseInput: refuseInput,
    openedAt: openedAt,
    hideIndexes: hideIndexes,
    confirmLabel: confirmLabel,
    cancelLabel: cancelLabel,
    focus: focus,
    onConfirm: onConfirm_3,
    onCancel: onCancel_2
  }, H), u[39] = D, u[40] = onCancel_2, u[41] = H, u[42] = refuseInput, u[43] = openedAt, u[44] = hideIndexes, u[45] = confirmLabel, u[46] = cancelLabel, u[47] = focus, u[48] = onConfirm_3, u[49] = ie;else ie = u[49];
  let children_3;
  if (u[50] !== G || u[51] !== flexDirection || u[52] !== gap || u[53] !== re || u[54] !== Q || u[55] !== U || u[56] !== ie) children_3 = r(G, {
    flexDirection: flexDirection,
    gap: gap,
    children: [re, Q, U, ie]
  }), u[50] = G, u[51] = flexDirection, u[52] = gap, u[53] = re, u[54] = Q, u[55] = U, u[56] = ie, u[57] = children_3;else children_3 = u[57];
  let A;
  if (u[58] !== P || u[59] !== title || u[60] !== onCancel_3 || u[61] !== color || u[62] !== children_3) A = e(P, {
    title: title,
    onCancel: onCancel_3,
    color: color,
    children: children_3
  }), u[58] = P, u[59] = title, u[60] = onCancel_3, u[61] = color, u[62] = children_3, u[63] = A;else A = u[63];
  return A;
}
function zo(E) {
  return Tn(Ft(E)).trim();
}
function ra(E, a) {
  let o = b => new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime();
  return Math.round((o(a) - o(E)) / 86400000);
}
function Go(E, a) {
  if (!x("tengu_juniper_bassoon", !1)) return null;
  let o = null;
  for (let u of E?.promo_tranches ?? []) {
    let p = u.remaining_amount_minor_units,
      expiresMs = Date.parse(u.expires_at ?? "");
    if (typeof p !== "number" || p <= 0 || Number.isNaN(expiresMs)) continue;
    if (expiresMs <= a.getTime()) continue;
    let currency_2 = zo(u.currency ?? "");
    if (!currency_2) continue;
    if (!o || expiresMs < o.expiresMs) {
      let Y = u.name ? zo(u.name) : "";
      o = {
        expiresMs: expiresMs,
        amountMinorUnits: p,
        currency: currency_2,
        name: Y || null
      };
    }
  }
  if (!o) return null;
  let b = Li(o.amountMinorUnits, o.currency),
    f = o.name ? ` \xB7 ${o.name}` : "";
  if (o.expiresMs - a.getTime() < 864000000) {
    let u = ra(a, new Date(o.expiresMs)),
      p = u <= 0 ? "today" : u === 1 ? "in 1 day" : `in ${u} days`;
    return {
      text: `${b} of your balance expires ${p}${f}`,
      urgent: !0
    };
  }
  let date = new Date(o.expiresMs),
    v = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      ...(date.getFullYear() !== a.getFullYear() && {
        year: "numeric"
      })
    });
  return {
    text: `${b} expires ${v}${f}`,
    urgent: !1
  };
}
function ta(E) {
  if (!x("tengu_satchel_banjo", !1)) return null;
  if (E === null || !Number.isInteger(E) || E <= 0) return null;
  return `Usage credits are valid for ${E} ${E === 1 ? "month" : "months"}. Learn more: ${vOo}`;
}
function ft(E) {
  let p = w(61),
    {
      step: step_3,
      currency: currency_3,
      onAction: b,
      onCancel: onCancel_4
    } = E,
    {
      columns: columns
    } = ve(),
    width = Math.min(columns - 6, 50),
    {
      usage: usage_2,
      balance: balance_2
    } = step_3,
    M;
  if (p[0] !== currency_3 || p[1] !== usage_2.used_credits) M = usage_2.used_credits !== null ? Li(usage_2.used_credits, currency_3) : "\u2014", p[0] = currency_3, p[1] = usage_2.used_credits, p[2] = M;else M = p[2];
  let W = M,
    Y;
  if (p[3] !== currency_3 || p[4] !== usage_2.monthly_limit) Y = usage_2.monthly_limit !== null ? Li(usage_2.monthly_limit, currency_3, "fit") : "Unlimited", p[3] = currency_3, p[4] = usage_2.monthly_limit, p[5] = Y;else Y = p[5];
  let K = Y,
    D;
  if (p[6] !== usage_2.utilization) D = usage_2.utilization !== null ? Math.round(usage_2.utilization) : 0, p[6] = usage_2.utilization, p[7] = D;else D = p[7];
  let G = D,
    P;
  if (p[8] !== balance_2 || p[9] !== currency_3) P = balance_2 ? Li(balance_2.amount, currency_3) : "\u2014", p[8] = balance_2, p[9] = currency_3, p[10] = P;else P = p[10];
  let I = P,
    O = balance_2?.auto_reload_settings?.enabled === !0,
    j,
    re;
  if (p[11] !== balance_2) {
    let date_2 = new Date();
    let date_3 = new Date(date_2.getFullYear(), date_2.getMonth() + 1, 1);
    j = date_3.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric"
    });
    re = Go(balance_2, date_2);
    p[11] = balance_2, p[12] = j, p[13] = re;
  } else j = p[12], re = p[13];
  let B = re,
    L = usage_2.is_enabled === !1;
  const label = `${I} balance \xB7 auto-reload ${O ? "on" : "off"}
`;
  let H;
  if (p[14] !== label) H = {
    label: label,
    value: "auto_reload"
  }, p[14] = label, p[15] = H;else H = p[15];
  let ae;
  if (p[16] === S) ae = {
    label: "Buy more",
    value: "buy"
  }, p[16] = ae;else ae = p[16];
  let te;
  if (p[17] !== L) te = L ? [] : [{
    label: "Continue with usage credits",
    value: "continue"
  }], p[17] = L, p[18] = te;else te = p[18];
  let de, ee;
  if (p[19] === S) de = {
    label: "Adjust monthly limit",
    value: "adjust"
  }, ee = {
    label: "Manage on claude.ai",
    value: "manage"
  }, p[19] = de, p[20] = ee;else de = p[19], ee = p[20];
  let le;
  if (p[21] !== H || p[22] !== te) le = [H, ae, ...te, de, ee], p[21] = H, p[22] = te, p[23] = le;else le = p[23];
  let options = le,
    me;
  if (p[24] !== L || p[25] !== usage_2.disabled_reason) me = L && e(n, {
    color: "warning",
    children: usage_2.disabled_reason === "out_of_credits" ? "Out of usage credits \u2014 buy more below to keep going." : "You've hit your monthly limit \u2014 raise it below, or it resets next month."
  }), p[24] = L, p[25] = usage_2.disabled_reason, p[26] = me;else me = p[26];
  let q;
  if (p[27] !== B) q = B !== null && B.urgent && e(n, {
    color: "warning",
    children: B.text
  }), p[27] = B, p[28] = q;else q = p[28];
  let z;
  if (p[29] !== W) z = r(n, {
    children: [W, " spent"]
  }), p[29] = W, p[30] = z;else z = p[30];
  const ratio = G / 100;
  let h;
  if (p[31] !== ratio || p[32] !== width) h = e(Yv, {
    ratio: ratio,
    width: width,
    fillColor: "rate_limit_fill",
    emptyColor: "rate_limit_empty"
  }), p[31] = ratio, p[32] = width, p[33] = h;else h = p[33];
  let A;
  if (p[34] !== G) A = r(n, {
    children: [G, "% used"]
  }), p[34] = G, p[35] = A;else A = p[35];
  let ne;
  if (p[36] !== z || p[37] !== h || p[38] !== A) ne = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [z, h, A]
  }), p[36] = z, p[37] = h, p[38] = A, p[39] = ne;else ne = p[39];
  let J;
  if (p[40] !== K || p[41] !== j) J = r(n, {
    dimColor: !0,
    children: ["Resets ", j, " \xB7 ", K, " monthly limit"]
  }), p[40] = K, p[41] = j, p[42] = J;else J = p[42];
  let oe;
  if (p[43] !== B) oe = B !== null && !B.urgent && e(n, {
    dimColor: !0,
    children: B.text
  }), p[43] = B, p[44] = oe;else oe = p[44];
  let fe;
  if (p[45] !== ne || p[46] !== J || p[47] !== oe) fe = r(s, {
    flexDirection: "column",
    children: [ne, J, oe]
  }), p[45] = ne, p[46] = J, p[47] = oe, p[48] = fe;else fe = p[48];
  let ce;
  if (p[49] !== b || p[50] !== onCancel_4 || p[51] !== options) ce = e(Fe, {
    options: options,
    onChange: b,
    onCancel: onCancel_4,
    visibleOptionCount: options.length
  }), p[49] = b, p[50] = onCancel_4, p[51] = options, p[52] = ce;else ce = p[52];
  let children_4;
  if (p[53] !== me || p[54] !== q || p[55] !== fe || p[56] !== ce) children_4 = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [me, q, fe, ce]
  }), p[53] = me, p[54] = q, p[55] = fe, p[56] = ce, p[57] = children_4;else children_4 = p[57];
  let be;
  if (p[58] !== onCancel_4 || p[59] !== children_4) be = e(ge, {
    title: "Usage credits",
    onCancel: onCancel_4,
    color: "suggestion",
    children: children_4
  }), p[58] = onCancel_4, p[59] = children_4, p[60] = be;else be = p[60];
  return be;
}
function gt(E) {
  let u = w(30),
    {
      pm: pm_3,
      presets: presets_2,
      currency: currency_4,
      expiryNotice: f,
      onConfirm: onConfirm_4,
      onCustom: onCustom,
      onCancel: onCancel_5
    } = E,
    p;
  if (u[0] !== currency_4 || u[1] !== presets_2) {
    let M;
    if (u[3] !== currency_4) M = (W, Y) => {
      let K = W.credit_minor_units > 0 ? Math.round(W.discount_minor_units / W.credit_minor_units * 100) : 0;
      return {
        label: Li(W.local_credit_minor_units, currency_4, "fit"),
        description: K > 0 ? `Save ${K}%` : void 0,
        value: `p${Y}`
      };
    }, u[3] = currency_4, u[4] = M;else M = u[4];
    let D, G;
    if (u[5] === S) D = {
      label: "Custom amount\u2026",
      value: "custom"
    }, G = {
      label: "Cancel",
      value: "cancel"
    }, u[5] = D, u[6] = G;else D = u[5], G = u[6];
    p = [...presets_2.map(M), D, G];
    u[0] = currency_4, u[1] = presets_2, u[2] = p;
  } else p = u[2];
  let options_2 = p,
    M;
  if (u[7] !== onCancel_5 || u[8] !== onConfirm_4 || u[9] !== onCustom || u[10] !== presets_2) M = function j(I) {
    if (I === "custom") {
      return onCustom();
    }
    if (I === "cancel") {
      return onCancel_5();
    }
    let O = Number(I.slice(1));
    onConfirm_4(presets_2[O]);
  }, u[7] = onCancel_5, u[8] = onConfirm_4, u[9] = onCustom, u[10] = presets_2, u[11] = M;else M = u[11];
  let onChange = M,
    D;
  if (u[12] !== pm_3) D = Pe(pm_3), u[12] = pm_3, u[13] = D;else D = u[13];
  let G;
  if (u[14] !== D) G = r(n, {
    dimColor: !0,
    children: ["Payment: ", D]
  }), u[14] = D, u[15] = G;else G = u[15];
  let re;
  if (u[16] !== onChange || u[17] !== onCancel_5 || u[18] !== options_2) re = e(Fe, {
    options: options_2,
    onChange: onChange,
    onCancel: onCancel_5,
    visibleOptionCount: options_2.length
  }), u[16] = onChange, u[17] = onCancel_5, u[18] = options_2, u[19] = re;else re = u[19];
  let Q;
  if (u[20] === S) Q = e(n, {
    dimColor: !0,
    children: "By confirming, you allow Anthropic to charge your card in the amount above."
  }), u[20] = Q;else Q = u[20];
  let U;
  if (u[21] !== f) U = f !== null && e(n, {
    dimColor: !0,
    children: f
  }), u[21] = f, u[22] = U;else U = u[22];
  let children_5;
  if (u[23] !== G || u[24] !== re || u[25] !== U) children_5 = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [G, re, Q, U]
  }), u[23] = G, u[24] = re, u[25] = U, u[26] = children_5;else children_5 = u[26];
  let L;
  if (u[27] !== onCancel_5 || u[28] !== children_5) L = e(ge, {
    title: "Buy usage credits",
    onCancel: onCancel_5,
    color: "suggestion",
    children: children_5
  }), u[27] = onCancel_5, u[28] = children_5, u[29] = L;else L = u[29];
  return L;
}
function he(E) {
  let C = w(11),
    {
      label: a,
      value: o,
      bold: bold,
      dim: f
    } = E,
    k;
  if (C[0] !== bold || C[1] !== f || C[2] !== a) k = e(n, {
    dimColor: f,
    bold: bold,
    children: a
  }), C[0] = bold, C[1] = f, C[2] = a, C[3] = k;else k = C[3];
  let v;
  if (C[4] !== bold || C[5] !== f || C[6] !== o) v = e(n, {
    dimColor: f,
    bold: bold,
    children: o
  }), C[4] = bold, C[5] = f, C[6] = o, C[7] = v;else v = C[7];
  let u;
  if (C[8] !== k || C[9] !== v) u = r(s, {
    justifyContent: "space-between",
    children: [k, v]
  }), C[8] = k, C[9] = v, C[10] = u;else u = C[10];
  return u;
}
function pt(E) {
  let D = w(82),
    {
      pm: pm_4,
      cents: cents_3,
      bundle: bundle_3,
      currency: currency_5,
      stripeProductId: stripeProductId_2,
      expiryMonths: expiryMonths_2,
      onConfirm: onConfirm_5,
      onCancel: onCancel_6
    } = E,
    {
      credentials: credentials_2
    } = ke(),
    [M, W] = g(!1),
    Y = bundle_3 ? bundle_3.local_credit_minor_units : cents_3,
    K = Y - cents_3,
    G;
  if (D[0] !== Y || D[1] !== K) G = Y > 0 && K > 0 ? Math.round(K / Y * 100) : 0, D[0] = Y, D[1] = K, D[2] = G;else G = D[2];
  let P = G,
    [I, O] = g("loading"),
    j,
    re;
  if (D[3] !== cents_3 || D[4] !== credentials_2 || D[5] !== currency_5 || D[6] !== stripeProductId_2) j = () => {
    let Q = !0;
    return zyr(cents_3, currency_5, stripeProductId_2, credentials_2).then(U => {
      if (Q) O(U);
    }), () => {
      Q = !1;
    };
  }, re = [cents_3, currency_5, stripeProductId_2, credentials_2], D[3] = cents_3, D[4] = credentials_2, D[5] = currency_5, D[6] = stripeProductId_2, D[7] = j, D[8] = re;else j = D[7], re = D[8];
  R(j, re);
  let disabled = I === "loading",
    L = I === null,
    X = disabled || L ? 0 : I.tax_minor_units,
    amountCents = cents_3 + X,
    ae;
  if (D[9] !== currency_5 || D[10] !== disabled || D[11] !== L || D[12] !== amountCents) ae = L ? [{
    label: "Go back",
    value: "no"
  }] : [{
    label: disabled ? "Pay (calculating\u2026)" : `Pay ${Li(amountCents, currency_5)} now`,
    value: "yes",
    disabled: disabled
  }, {
    label: "Go back",
    value: "no"
  }], D[9] = currency_5, D[10] = disabled, D[11] = L, D[12] = amountCents, D[13] = ae;else ae = D[13];
  let options_3 = ae,
    {
      columns: columns_2
    } = ve(),
    width_2 = Math.max(0, Math.min(columns_2 - 6, 44)),
    label_3 = disabled || L ? "Tax" : I.tax_label ?? "Tax",
    children_6;
  if (D[14] !== width_2) children_6 = "\u2500".repeat(width_2), D[14] = width_2, D[15] = children_6;else children_6 = D[15];
  let me;
  if (D[16] !== children_6) me = e(n, {
    dimColor: !0,
    children: children_6
  }), D[16] = children_6, D[17] = me;else me = D[17];
  let q = me;
  if (M) {
    let onBack;
    if (D[18] === S) onBack = () => W(!1), D[18] = onBack;else onBack = D[18];
    let ie;
    if (D[19] !== currency_5 || D[20] !== onConfirm_5 || D[21] !== amountCents) ie = e(Ge, {
      question: "Buy usage credits for",
      amountCents: amountCents,
      currency: currency_5,
      onConfirm: onConfirm_5,
      onBack: onBack
    }), D[19] = currency_5, D[20] = onConfirm_5, D[21] = amountCents, D[22] = ie;else ie = D[22];
    return ie;
  }
  const label_2 = expiryMonths_2 !== null ? `Usage credits (valid for ${expiryMonths_2} ${expiryMonths_2 === 1 ? "mo" : "mos"})` : "Subtotal";
  let value_2;
  if (D[23] !== Y || D[24] !== currency_5) value_2 = Li(Y, currency_5), D[23] = Y, D[24] = currency_5, D[25] = value_2;else value_2 = D[25];
  let h;
  if (D[26] !== label_2 || D[27] !== value_2) h = e(he, {
    label: label_2,
    value: value_2
  }), D[26] = label_2, D[27] = value_2, D[28] = h;else h = D[28];
  let A;
  if (D[29] !== cents_3 || D[30] !== currency_5 || D[31] !== K || D[32] !== P || D[33] !== q) A = K > 0 && r(V, {
    children: [e(he, {
      label: `Discount${P > 0 ? ` (${P}%)` : ""}`,
      value: `\u2212${Li(K, currency_5)}`
    }), q, e(he, {
      label: "Subtotal after discount",
      value: Li(cents_3, currency_5)
    })]
  }), D[29] = cents_3, D[30] = currency_5, D[31] = K, D[32] = P, D[33] = q, D[34] = A;else A = D[34];
  let ne;
  if (D[35] !== currency_5 || D[36] !== I || D[37] !== label_3 || D[38] !== disabled || D[39] !== L) ne = disabled ? e(he, {
    label: label_3,
    value: "\u2026",
    dim: !0
  }) : L ? e(he, {
    label: label_3,
    value: "\u2014",
    dim: !0
  }) : e(he, {
    label: `${label_3} (${yr(I.tax_rate_pct)})`,
    value: Li(I.tax_minor_units, currency_5)
  }), D[35] = currency_5, D[36] = I, D[37] = label_3, D[38] = disabled, D[39] = L, D[40] = ne;else ne = D[40];
  let value_3;
  if (D[41] !== currency_5 || D[42] !== disabled || D[43] !== L || D[44] !== amountCents) value_3 = disabled ? "\u2026" : L ? "\u2014" : Li(amountCents, currency_5), D[41] = currency_5, D[42] = disabled, D[43] = L, D[44] = amountCents, D[45] = value_3;else value_3 = D[45];
  let oe;
  if (D[46] !== value_3) oe = e(he, {
    label: "Total due",
    value: value_3,
    bold: !0
  }), D[46] = value_3, D[47] = oe;else oe = D[47];
  let fe;
  if (D[48] !== width_2 || D[49] !== q || D[50] !== A || D[51] !== ne || D[52] !== oe || D[53] !== h) fe = r(s, {
    flexDirection: "column",
    width: width_2,
    children: [h, A, ne, q, oe]
  }), D[48] = width_2, D[49] = q, D[50] = A, D[51] = ne, D[52] = oe, D[53] = h, D[54] = fe;else fe = D[54];
  let ce;
  if (D[55] === S) ce = e(n, {
    children: "Payment "
  }), D[55] = ce;else ce = D[55];
  let children_7;
  if (D[56] !== pm_4) children_7 = Pe(pm_4), D[56] = pm_4, D[57] = children_7;else children_7 = D[57];
  let be;
  if (D[58] !== children_7) be = e(n, {
    dimColor: !0,
    children: children_7
  }), D[58] = children_7, D[59] = be;else be = D[59];
  let _e;
  if (D[60] !== width_2 || D[61] !== be) _e = r(s, {
    width: width_2,
    children: [ce, be]
  }), D[60] = width_2, D[61] = be, D[62] = _e;else _e = D[62];
  let Ve;
  if (D[63] !== L) Ve = L && e(n, {
    color: "warning",
    children: `Couldn't calculate tax. Try again, or buy at ${pe}`
  }), D[63] = L, D[64] = Ve;else Ve = D[64];
  let onChange_2;
  if (D[65] !== onCancel_6) onChange_2 = Ke => {
    if (Ke !== "yes") {
      onCancel_6();
      return;
    }
    W(!0);
  }, D[65] = onCancel_6, D[66] = onChange_2;else onChange_2 = D[66];
  let qe;
  if (D[67] !== onCancel_6 || D[68] !== options_3 || D[69] !== onChange_2) qe = e(Fe, {
    options: options_3,
    onChange: onChange_2,
    onCancel: onCancel_6,
    visibleOptionCount: 2
  }), D[67] = onCancel_6, D[68] = options_3, D[69] = onChange_2, D[70] = qe;else qe = D[70];
  let Oe;
  if (D[71] !== L) Oe = !L && e(n, {
    dimColor: !0,
    children: "By confirming, you allow Anthropic to charge your card in the amount above."
  }), D[71] = L, D[72] = Oe;else Oe = D[72];
  let children_8;
  if (D[73] !== fe || D[74] !== _e || D[75] !== Ve || D[76] !== qe || D[77] !== Oe) children_8 = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [fe, _e, Ve, qe, Oe]
  }), D[73] = fe, D[74] = _e, D[75] = Ve, D[76] = qe, D[77] = Oe, D[78] = children_8;else children_8 = D[78];
  let un;
  if (D[79] !== onCancel_6 || D[80] !== children_8) un = e(ge, {
    title: "Buy usage credits",
    onCancel: onCancel_6,
    color: "suggestion",
    children: children_8
  }), D[79] = onCancel_6, D[80] = children_8, D[81] = un;else un = D[81];
  return un;
}
function yr(E) {
  return `${Number(E.toFixed(2))}%`;
}
function yt(E) {
  let k = w(9),
    {
      pm: pm_5,
      initialCents: initialCents,
      currency: currency_6,
      onConfirm: f,
      onCancel: onCancel_7
    } = E,
    v;
  if (k[0] !== pm_5) v = Pe(pm_5), k[0] = pm_5, k[1] = v;else v = k[1];
  const subtitle = `Payment: ${v}`,
    initial = initialCents ? String(initialCents / 100) : "75",
    minCents = currency_6 === "USD" ? Mo : void 0;
  let W;
  if (k[2] !== currency_6 || k[3] !== onCancel_7 || k[4] !== f || k[5] !== subtitle || k[6] !== initial || k[7] !== minCents) W = e(vo, {
    title: "Buy usage credits",
    subtitle: subtitle,
    initial: initial,
    minCents: minCents,
    currency: currency_6,
    footer: "By confirming, you allow Anthropic to charge your card in the amount above.",
    onSubmit: f,
    onCancel: onCancel_7
  }), k[2] = currency_6, k[3] = onCancel_7, k[4] = f, k[5] = subtitle, k[6] = initial, k[7] = minCents, k[8] = W;else W = k[8];
  return W;
}
var sn = "yes";
function Ge(E) {
  let I = w(30),
    {
      question: question,
      amountCents: amountCents_2,
      currency: currency_7,
      onConfirm: onConfirm_6,
      onBack: C
    } = E,
    {
      columns: columns_3
    } = ve(),
    [value_4, onChange_3] = g(""),
    [cursorOffset, onChangeCursorOffset] = g(0),
    [W, Y] = g(!1),
    K = T(!1),
    D = value_4.trim().toLowerCase() === sn,
    color_2 = W && !D ? "error" : D ? "success" : void 0,
    O;
  if (I[0] !== C) O = {
    "confirm:no": C
  }, I[0] = C, I[1] = O;else O = I[1];
  let j;
  if (I[2] === S) j = {
    context: "Settings"
  }, I[2] = j;else j = I[2];
  Wt(O, j);
  let re;
  if (I[3] !== amountCents_2 || I[4] !== currency_7) re = Li(amountCents_2, currency_7), I[3] = amountCents_2, I[4] = currency_7, I[5] = re;else re = I[5];
  let Q;
  if (I[6] !== question || I[7] !== re) Q = r(n, {
    children: [question, " ", re, "."]
  }), I[6] = question, I[7] = re, I[8] = Q;else Q = I[8];
  const dimColor = !color_2;
  let B;
  if (I[9] !== color_2 || I[10] !== dimColor) B = r(n, {
    color: color_2,
    dimColor: dimColor,
    children: ["Type ", sn, " to confirm."]
  }), I[9] = color_2, I[10] = dimColor, I[11] = B;else B = I[11];
  const borderColor = color_2 ?? "warning";
  let onSubmit;
  if (I[12] !== onConfirm_6) onSubmit = H => {
    if (H.trim().toLowerCase() === sn) {
      if (K.current) {
        return;
      }
      K.current = !0, onConfirm_6();
    } else onChange_3(""), onChangeCursorOffset(0), Y(!0);
  }, I[12] = onConfirm_6, I[13] = onSubmit;else onSubmit = I[13];
  let children_9;
  if (I[14] !== columns_3 || I[15] !== cursorOffset || I[16] !== C || I[17] !== onSubmit || I[18] !== value_4) children_9 = e(Qn, {
    value: value_4,
    disableEscapeDoublePress: !0,
    onChange: onChange_3,
    onSubmit: onSubmit,
    onExit: C,
    focus: !0,
    showCursor: !0,
    columns: columns_3,
    cursorOffset: cursorOffset,
    onChangeCursorOffset: onChangeCursorOffset
  }), I[14] = columns_3, I[15] = cursorOffset, I[16] = C, I[17] = onSubmit, I[18] = value_4, I[19] = children_9;else children_9 = I[19];
  let te;
  if (I[20] !== borderColor || I[21] !== children_9) te = e(s, {
    borderStyle: "single",
    borderColor: borderColor,
    paddingX: 1,
    children: children_9
  }), I[20] = borderColor, I[21] = children_9, I[22] = te;else te = I[22];
  let children_10;
  if (I[23] !== te || I[24] !== Q || I[25] !== B) children_10 = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [Q, B, te]
  }), I[23] = te, I[24] = Q, I[25] = B, I[26] = children_10;else children_10 = I[26];
  let ee;
  if (I[27] !== C || I[28] !== children_10) ee = e(ge, {
    title: "Confirm amount",
    onCancel: C,
    color: "warning",
    isCancelActive: !1,
    children: children_10
  }), I[27] = C, I[28] = children_10, I[29] = ee;else ee = I[29];
  return ee;
}
function bt(E) {
  let k = w(70),
    {
      current: current_3,
      currency: currency_8,
      onConfirm: onConfirm_7,
      onCancel: onCancel_8
    } = E,
    {
      columns: columns_4
    } = ve(),
    v;
  if (k[0] !== current_3) v = current_3 !== null ? ln(current_3) : "150", k[0] = current_3, k[1] = v;else v = k[1];
  let u = v,
    {
      value: value_5,
      setValue: M,
      cursor: W,
      setCursor: Y
    } = Ie(u),
    [K, D] = g(0),
    G;
  if (k[2] === S) G = ["set", "unlimited", "cancel"], k[2] = G;else G = k[2];
  let P = G,
    [I, O] = g(0),
    [j, re] = g(!1),
    Q,
    U,
    B,
    children_12,
    color_3,
    H,
    gap_2,
    onKeyDown,
    de,
    ee,
    le,
    title_2,
    onCancel_9;
  if (k[3] !== I || k[4] !== columns_4 || k[5] !== j || k[6] !== currency_8 || k[7] !== W || k[8] !== K || k[9] !== onCancel_8 || k[10] !== onConfirm_7 || k[11] !== Y || k[12] !== M || k[13] !== value_5) {
    H = hn;
    fe: {
      let q = We(value_5);
      children_12 = !q.ok && (value_5.trim() !== "" || K === 1) ? q.error : "";
      let ie = function ie() {
        let z = P[I];
        if (z === "set") {
          if (!q.ok) {
            return;
          }
          if (q.cents > Fo) {
            re(!0);
            return;
          }
          onConfirm_7(q.cents);
        } else if (z === "unlimited") onConfirm_7(null);else onCancel_8();
      };
      let ne = function ne(h) {
        if (h.key === "tab") {
          h.preventDefault(), D(Qs);
          return;
        }
        if (K !== 1) {
          return;
        }
        if (h.key === "up") h.preventDefault(), D(0);else if (h.key === "down") h.preventDefault();else if (h.key === "left") h.preventDefault(), O(Zs);else if (h.key === "right") h.preventDefault(), O(A => Math.min(P.length - 1, A + 1));else if (h.key === "return") h.preventDefault(), ie();
      };
      let J;
      if (k[27] === S) J = {
        set: "Set limit",
        unlimited: "Set to unlimited",
        cancel: "Cancel"
      }, k[27] = J;else J = k[27];
      B = J;
      if (j && q.ok) {
        let onBack_2;
        if (k[28] === S) onBack_2 = () => re(!1), k[28] = onBack_2;else onBack_2 = k[28];
        H = e(Ge, {
          question: "Set your monthly spend limit to",
          amountCents: q.cents,
          currency: currency_8,
          onConfirm: () => onConfirm_7(q.cents),
          onBack: onBack_2
        });
        break fe;
      }
      U = ge;
      title_2 = "Set monthly spend limit";
      onCancel_9 = onCancel_8;
      color_3 = "suggestion";
      Q = jr;
      gap_2 = 1;
      onKeyDown = ne;
      if (k[29] === S) de = e(n, {
        children: "You can set a maximum amount you can spend on usage credits per month."
      }), k[29] = de;else de = k[29];
      const borderColor_2 = K === 0 ? "suggestion" : "inactive";
      let children_11;
      if (k[30] !== currency_8) children_11 = WEe(currency_8), k[30] = currency_8, k[31] = children_11;else children_11 = k[31];
      let ue;
      if (k[32] !== children_11) ue = e(n, {
        children: children_11
      }), k[32] = children_11, k[33] = ue;else ue = k[33];
      let onSubmit_2, onHistoryDown;
      if (k[34] === S) onSubmit_2 = () => D(1), onHistoryDown = () => D(1), k[34] = onSubmit_2, k[35] = onHistoryDown;else onSubmit_2 = k[34], onHistoryDown = k[35];
      const focus_2 = K === 0;
      const showCursor = K === 0;
      let Ke;
      if (k[36] !== columns_4 || k[37] !== W || k[38] !== Y || k[39] !== M || k[40] !== focus_2 || k[41] !== showCursor || k[42] !== value_5) Ke = e(Qn, {
        value: value_5,
        onChange: M,
        onSubmit: onSubmit_2,
        onHistoryDown: onHistoryDown,
        disableCursorMovementForUpDownKeys: !0,
        focus: focus_2,
        showCursor: showCursor,
        columns: columns_4,
        cursorOffset: W,
        onChangeCursorOffset: Y
      }), k[36] = columns_4, k[37] = W, k[38] = Y, k[39] = M, k[40] = focus_2, k[41] = showCursor, k[42] = value_5, k[43] = Ke;else Ke = k[43];
      if (k[44] !== borderColor_2 || k[45] !== ue || k[46] !== Ke) ee = r(s, {
        borderStyle: "single",
        borderColor: borderColor_2,
        paddingX: 1,
        children: [ue, Ke]
      }), k[44] = borderColor_2, k[45] = ue, k[46] = Ke, k[47] = ee;else ee = k[47];
      le = q.ok && r(n, {
        color: "success",
        children: ["Monthly limit: ", Li(q.cents, currency_8)]
      });
    }
    k[3] = I, k[4] = columns_4, k[5] = j, k[6] = currency_8, k[7] = W, k[8] = K, k[9] = onCancel_8, k[10] = onConfirm_7, k[11] = Y, k[12] = M, k[13] = value_5, k[14] = Q, k[15] = U, k[16] = B, k[17] = children_12, k[18] = color_3, k[19] = H, k[20] = gap_2, k[21] = onKeyDown, k[22] = de, k[23] = ee, k[24] = le, k[25] = title_2, k[26] = onCancel_9;
  } else Q = k[14], U = k[15], B = k[16], children_12 = k[17], color_3 = k[18], H = k[19], gap_2 = k[20], onKeyDown = k[21], de = k[22], ee = k[23], le = k[24], title_2 = k[25], onCancel_9 = k[26];
  if (H !== hn) return H;
  let J;
  if (k[48] !== children_12) J = children_12 && e(n, {
    color: "error",
    children: children_12
  }), k[48] = children_12, k[49] = J;else J = k[49];
  let oe;
  if (k[50] === S) oe = e(n, {
    dimColor: !0,
    children: "This spend limit goes into effect immediately."
  }), k[50] = oe;else oe = k[50];
  let ce;
  if (k[51] !== I || k[52] !== B || k[53] !== K) ce = e(s, {
    flexDirection: "row",
    gap: 2,
    children: P.map((item, index) => r(n, {
      color: K === 1 && I === index ? "suggestion" : void 0,
      children: [K === 1 && I === index ? Z.pointer : " ", " ", B[item]]
    }, item))
  }), k[51] = I, k[52] = B, k[53] = K, k[54] = ce;else ce = k[54];
  let children_13;
  if (k[55] !== Q || k[56] !== J || k[57] !== ce || k[58] !== gap_2 || k[59] !== onKeyDown || k[60] !== de || k[61] !== ee || k[62] !== le) children_13 = r(Q, {
    gap: gap_2,
    onKeyDown: onKeyDown,
    children: [de, ee, le, J, oe, ce]
  }), k[55] = Q, k[56] = J, k[57] = ce, k[58] = gap_2, k[59] = onKeyDown, k[60] = de, k[61] = ee, k[62] = le, k[63] = children_13;else children_13 = k[63];
  let be;
  if (k[64] !== U || k[65] !== color_3 || k[66] !== children_13 || k[67] !== title_2 || k[68] !== onCancel_9) be = e(U, {
    title: title_2,
    onCancel: onCancel_9,
    color: color_3,
    children: children_13
  }), k[64] = U, k[65] = color_3, k[66] = children_13, k[67] = title_2, k[68] = onCancel_9, k[69] = be;else be = k[69];
  return be;
}
function ht(E) {
  let p = w(134),
    {
      current: current_4,
      pm: pm_6,
      currency: currency_9,
      onSave: onSave,
      onTurnOff: onTurnOff,
      onCancel: onCancel_10
    } = E,
    {
      columns: columns_5
    } = ve(),
    u = current_4?.enabled === !0,
    M;
  if (p[0] !== current_4) M = current_4?.threshold_in_minor_units != null ? ln(current_4.threshold_in_minor_units) : "5", p[0] = current_4, p[1] = M;else M = p[1];
  let W = M,
    Y;
  if (p[2] !== current_4) Y = current_4?.reload_to_in_minor_units != null ? ln(current_4.reload_to_in_minor_units) : "15", p[2] = current_4, p[3] = Y;else Y = p[3];
  let K = Y,
    {
      value: value_6,
      setValue: G,
      cursor: P,
      setCursor: I
    } = Ie(W),
    {
      value: value_7,
      setValue: j,
      cursor: re,
      setCursor: Q
    } = Ie(K),
    [U, B] = g(0),
    L;
  if (p[4] !== u) L = u ? ["save", "off", "cancel"] : ["save", "cancel"], p[4] = u, p[5] = L;else L = p[5];
  let X = L,
    [H, ae] = g(0),
    [te, de] = g(!1),
    ee,
    le,
    se,
    me,
    q,
    z,
    ie,
    title_3,
    onCancel_11,
    color_4,
    J,
    gap_3,
    onKeyDown_2,
    ce,
    ue,
    be,
    _e;
  if (p[6] !== H || p[7] !== X || p[8] !== columns_5 || p[9] !== te || p[10] !== currency_9 || p[11] !== P || p[12] !== re || p[13] !== U || p[14] !== u || p[15] !== onCancel_10 || p[16] !== onSave || p[17] !== onTurnOff || p[18] !== pm_6 || p[19] !== value_7 || p[20] !== I || p[21] !== Q || p[22] !== j || p[23] !== G || p[24] !== value_6) {
    J = hn;
    zi: {
      z = We(value_6);
      q = We(value_7);
      me = !z.ok ? z.error : !q.ok ? q.error : q.cents <= z.cents ? "Reload-to must be above threshold" : currency_9 === "USD" && q.cents - z.cents < mn ? `Reload must be at least ${Li(mn, currency_9, "whole")} above threshold` : "";
      let Ve = !me;
      let children_15 = !z.ok && (value_6.trim() !== "" || U !== 0) ? z.error : "";
      let children_17 = !q.ok && (value_7.trim() !== "" || U === 2) ? q.error : "";
      let Oe = function Oe() {
        let qe = X[H];
        if (qe === "save") {
          if (!z.ok || !q.ok || !Ve) {
            return;
          }
          de(!0);
          return;
        } else if (qe === "off") onTurnOff();else onCancel_10();
      };
      let Ae;
      if (p[42] === S) Ae = () => B(ei), p[42] = Ae;else Ae = p[42];
      let un = Ae;
      let Qe;
      if (p[43] === S) Qe = () => B(ni), p[43] = Qe;else Qe = p[43];
      let ri = Qe;
      let Ze;
      if (p[44] !== Oe || p[45] !== X.length || p[46] !== U) Ze = function Ct(we) {
        if (we.key === "tab") {
          if (we.preventDefault(), we.shift) un();else ri();
          return;
        }
        if (U !== 2) {
          return;
        }
        if (we.key === "up") we.preventDefault(), un();else if (we.key === "down") we.preventDefault();else if (we.key === "left") we.preventDefault(), ae(oi);else if (we.key === "right") we.preventDefault(), ae(ti => Math.min(X.length - 1, ti + 1));else if (we.key === "return") we.preventDefault(), Oe();
      }, p[44] = Oe, p[45] = X.length, p[46] = U, p[47] = Ze;else Ze = p[47];
      let Ct = Ze;
      let save = u ? "Agree and save" : "Agree and turn on";
      let en;
      if (p[48] !== save) en = {
        save: save,
        off: "Turn off",
        cancel: "Cancel"
      }, p[48] = save, p[49] = en;else en = p[49];
      se = en;
      if (te && z.ok && q.ok) {
        let onBack_3;
        if (p[50] === S) onBack_3 = () => de(!1), p[50] = onBack_3;else onBack_3 = p[50];
        J = e(Ge, {
          question: "Auto-reload will top your balance up to",
          amountCents: q.cents,
          currency: currency_9,
          onConfirm: () => onSave(z.cents, q.cents),
          onBack: onBack_3
        });
        break zi;
      }
      le = ge;
      title_3 = "Auto-reload";
      onCancel_11 = onCancel_10;
      color_4 = "suggestion";
      ee = jr;
      gap_3 = 1;
      onKeyDown_2 = Ct;
      let Be;
      if (p[51] !== u) Be = u && e(n, {
        color: "success",
        children: " \xB7 Currently on"
      }), p[51] = u, p[52] = Be;else Be = p[52];
      if (p[53] !== Be) ce = r(n, {
        children: ["Automatically buy more usage credits when your balance is low.", Be]
      }), p[53] = Be, p[54] = ce;else ce = p[54];
      let je;
      if (p[55] !== pm_6) je = Pe(pm_6), p[55] = pm_6, p[56] = je;else je = p[56];
      if (p[57] !== je) ue = r(n, {
        dimColor: !0,
        children: ["Card on file: ", je]
      }), p[57] = je, p[58] = ue;else ue = p[58];
      let dn;
      if (p[59] === S) dn = e(n, {
        dimColor: !0,
        children: "When usage credit balance falls below:"
      }), p[59] = dn;else dn = p[59];
      const borderColor_3 = children_15 ? "error" : U === 0 ? "suggestion" : "inactive";
      let children_14;
      if (p[60] !== currency_9) children_14 = WEe(currency_9), p[60] = currency_9, p[61] = children_14;else children_14 = p[61];
      let En;
      if (p[62] !== children_14) En = e(n, {
        children: children_14
      }), p[62] = children_14, p[63] = En;else En = p[63];
      let onSubmit_3, onHistoryDown_2;
      if (p[64] === S) onSubmit_3 = () => B(1), onHistoryDown_2 = () => B(1), p[64] = onSubmit_3, p[65] = onHistoryDown_2;else onSubmit_3 = p[64], onHistoryDown_2 = p[65];
      const focus_3 = U === 0;
      const showCursor_2 = U === 0;
      let An;
      if (p[66] !== columns_5 || p[67] !== P || p[68] !== I || p[69] !== G || p[70] !== focus_3 || p[71] !== showCursor_2 || p[72] !== value_6) An = e(Qn, {
        value: value_6,
        onChange: G,
        onSubmit: onSubmit_3,
        onHistoryDown: onHistoryDown_2,
        disableCursorMovementForUpDownKeys: !0,
        focus: focus_3,
        showCursor: showCursor_2,
        columns: columns_5,
        cursorOffset: P,
        onChangeCursorOffset: I
      }), p[66] = columns_5, p[67] = P, p[68] = I, p[69] = G, p[70] = focus_3, p[71] = showCursor_2, p[72] = value_6, p[73] = An;else An = p[73];
      let kt;
      if (p[74] !== borderColor_3 || p[75] !== En || p[76] !== An) kt = r(s, {
        borderStyle: "single",
        borderColor: borderColor_3,
        paddingX: 1,
        children: [En, An]
      }), p[74] = borderColor_3, p[75] = En, p[76] = An, p[77] = kt;else kt = p[77];
      be = r(s, {
        flexDirection: "column",
        children: [dn, kt, children_15 && e(n, {
          color: "error",
          children: children_15
        })]
      });
      let Rt;
      if (p[78] === S) Rt = e(n, {
        dimColor: !0,
        children: "Reload balance to:"
      }), p[78] = Rt;else Rt = p[78];
      const borderColor_4 = children_17 ? "error" : U === 1 ? "suggestion" : "inactive";
      let children_16;
      if (p[79] !== currency_9) children_16 = WEe(currency_9), p[79] = currency_9, p[80] = children_16;else children_16 = p[80];
      let $n;
      if (p[81] !== children_16) $n = e(n, {
        children: children_16
      }), p[81] = children_16, p[82] = $n;else $n = p[82];
      let onSubmit_4, onHistoryUp, onHistoryDown_3;
      if (p[83] === S) onSubmit_4 = () => B(2), onHistoryUp = () => B(0), onHistoryDown_3 = () => B(2), p[83] = onSubmit_4, p[84] = onHistoryUp, p[85] = onHistoryDown_3;else onSubmit_4 = p[83], onHistoryUp = p[84], onHistoryDown_3 = p[85];
      const focus_4 = U === 1;
      const showCursor_3 = U === 1;
      let Mn;
      if (p[86] !== columns_5 || p[87] !== re || p[88] !== value_7 || p[89] !== Q || p[90] !== j || p[91] !== focus_4 || p[92] !== showCursor_3) Mn = e(Qn, {
        value: value_7,
        onChange: j,
        onSubmit: onSubmit_4,
        onHistoryUp: onHistoryUp,
        onHistoryDown: onHistoryDown_3,
        disableCursorMovementForUpDownKeys: !0,
        focus: focus_4,
        showCursor: showCursor_3,
        columns: columns_5,
        cursorOffset: re,
        onChangeCursorOffset: Q
      }), p[86] = columns_5, p[87] = re, p[88] = value_7, p[89] = Q, p[90] = j, p[91] = focus_4, p[92] = showCursor_3, p[93] = Mn;else Mn = p[93];
      let Et;
      if (p[94] !== borderColor_4 || p[95] !== $n || p[96] !== Mn) Et = r(s, {
        borderStyle: "single",
        borderColor: borderColor_4,
        paddingX: 1,
        children: [$n, Mn]
      }), p[94] = borderColor_4, p[95] = $n, p[96] = Mn, p[97] = Et;else Et = p[97];
      _e = r(s, {
        flexDirection: "column",
        children: [Rt, Et, children_17 && e(n, {
          color: "error",
          children: children_17
        })]
      });
      ie = z.ok && q.ok && Ve && r(n, {
        color: "success",
        children: ["Tops up to ", Li(q.cents, currency_9), " when your balance falls below", " ", Li(z.cents, currency_9)]
      });
    }
    p[6] = H, p[7] = X, p[8] = columns_5, p[9] = te, p[10] = currency_9, p[11] = P, p[12] = re, p[13] = U, p[14] = u, p[15] = onCancel_10, p[16] = onSave, p[17] = onTurnOff, p[18] = pm_6, p[19] = value_7, p[20] = I, p[21] = Q, p[22] = j, p[23] = G, p[24] = value_6, p[25] = ee, p[26] = le, p[27] = se, p[28] = me, p[29] = q, p[30] = z, p[31] = ie, p[32] = title_3, p[33] = onCancel_11, p[34] = color_4, p[35] = J, p[36] = gap_3, p[37] = onKeyDown_2, p[38] = ce, p[39] = ue, p[40] = be, p[41] = _e;
  } else ee = p[25], le = p[26], se = p[27], me = p[28], q = p[29], z = p[30], ie = p[31], title_3 = p[32], onCancel_11 = p[33], color_4 = p[34], J = p[35], gap_3 = p[36], onKeyDown_2 = p[37], ce = p[38], ue = p[39], be = p[40], _e = p[41];
  if (J !== hn) return J;
  let Ae;
  if (p[98] !== pm_6) Ae = Pe(pm_6), p[98] = pm_6, p[99] = Ae;else Ae = p[99];
  let Qe;
  if (p[100] !== Ae) Qe = r(n, {
    dimColor: !0,
    children: ["By selecting Agree, you authorize Anthropic to automatically charge", " ", Ae, " on a recurring basis whenever your balance reaches the threshold, per the Consumer Terms (", Ao, "). Turn off any time here or at ", pe, "."]
  }), p[100] = Ae, p[101] = Qe;else Qe = p[101];
  let Ze;
  if (p[102] !== H || p[103] !== se || p[104] !== X || p[105] !== U) Ze = X.map((item, index) => r(n, {
    color: U === 2 && H === index ? "suggestion" : void 0,
    children: [U === 2 && H === index ? Z.pointer : " ", " ", se[item]]
  }, item)), p[102] = H, p[103] = se, p[104] = X, p[105] = U, p[106] = Ze;else Ze = p[106];
  let en;
  if (p[107] !== H || p[108] !== X || p[109] !== me || p[110] !== U || p[111] !== q || p[112] !== z) en = me && z.ok && q.ok && U === 2 && X[H] === "save" && r(n, {
    color: "error",
    children: ["\xB7 ", me]
  }), p[107] = H, p[108] = X, p[109] = me, p[110] = U, p[111] = q, p[112] = z, p[113] = en;else en = p[113];
  let Be;
  if (p[114] !== Ze || p[115] !== en) Be = r(s, {
    flexDirection: "row",
    gap: 2,
    children: [Ze, en]
  }), p[114] = Ze, p[115] = en, p[116] = Be;else Be = p[116];
  let children_18;
  if (p[117] !== ee || p[118] !== ie || p[119] !== Qe || p[120] !== Be || p[121] !== gap_3 || p[122] !== onKeyDown_2 || p[123] !== ce || p[124] !== ue || p[125] !== be || p[126] !== _e) children_18 = r(ee, {
    gap: gap_3,
    onKeyDown: onKeyDown_2,
    children: [ce, ue, be, _e, ie, Qe, Be]
  }), p[117] = ee, p[118] = ie, p[119] = Qe, p[120] = Be, p[121] = gap_3, p[122] = onKeyDown_2, p[123] = ce, p[124] = ue, p[125] = be, p[126] = _e, p[127] = children_18;else children_18 = p[127];
  let dn;
  if (p[128] !== le || p[129] !== title_3 || p[130] !== onCancel_11 || p[131] !== color_4 || p[132] !== children_18) dn = e(le, {
    title: title_3,
    onCancel: onCancel_11,
    color: color_4,
    children: children_18
  }), p[128] = le, p[129] = title_3, p[130] = onCancel_11, p[131] = color_4, p[132] = children_18, p[133] = dn;else dn = p[133];
  return dn;
}
function vo(E) {
  let P = w(51),
    {
      title: title_4,
      subtitle: o,
      initial: initial_2,
      minCents: minCents_2,
      currency: currency_10,
      footer: k,
      onSubmit: onSubmit_5,
      onCancel: u
    } = E,
    {
      columns: columns_6
    } = ve(),
    {
      value: value_8,
      setValue: W,
      cursor: Y,
      setCursor: K
    } = Ie(initial_2),
    [D, G] = g(!1),
    I;
  if (P[0] !== value_8) I = We(value_8), P[0] = value_8, P[1] = I;else I = P[1];
  let O = I,
    j = O.ok && minCents_2 !== void 0 && O.cents < minCents_2,
    re;
  if (P[2] !== D || P[3] !== j || P[4] !== currency_10 || P[5] !== minCents_2 || P[6] !== O.error || P[7] !== O.ok || P[8] !== value_8) re = !O.ok && (value_8.trim() !== "" || D) ? O.error : j && minCents_2 !== void 0 ? `Minimum is ${Li(minCents_2, currency_10, "whole")}` : "", P[2] = D, P[3] = j, P[4] = currency_10, P[5] = minCents_2, P[6] = O.error, P[7] = O.ok, P[8] = value_8, P[9] = re;else re = P[9];
  let children_20 = re,
    U;
  if (P[10] !== j || P[11] !== onSubmit_5 || P[12] !== O.cents || P[13] !== O.ok) U = function B() {
    if (!O.ok || j) {
      G(!0);
      return;
    }
    onSubmit_5(O.cents);
  }, P[10] = j, P[11] = onSubmit_5, P[12] = O.cents, P[13] = O.ok, P[14] = U;else U = P[14];
  let onSubmit_6 = U,
    L;
  if (P[15] !== o) L = e(n, {
    dimColor: !0,
    children: o
  }), P[15] = o, P[16] = L;else L = P[16];
  let children_19;
  if (P[17] !== currency_10) children_19 = WEe(currency_10), P[17] = currency_10, P[18] = children_19;else children_19 = P[18];
  let H;
  if (P[19] !== children_19) H = e(n, {
    children: children_19
  }), P[19] = children_19, P[20] = H;else H = P[20];
  let ae;
  if (P[21] !== columns_6 || P[22] !== Y || P[23] !== u || P[24] !== K || P[25] !== W || P[26] !== onSubmit_6 || P[27] !== value_8) ae = e(Qn, {
    value: value_8,
    onChange: W,
    onSubmit: onSubmit_6,
    onExit: u,
    focus: !0,
    showCursor: !0,
    columns: columns_6,
    cursorOffset: Y,
    onChangeCursorOffset: K
  }), P[21] = columns_6, P[22] = Y, P[23] = u, P[24] = K, P[25] = W, P[26] = onSubmit_6, P[27] = value_8, P[28] = ae;else ae = P[28];
  let te;
  if (P[29] !== H || P[30] !== ae) te = r(s, {
    flexDirection: "row",
    gap: 1,
    children: [H, ae]
  }), P[29] = H, P[30] = ae, P[31] = te;else te = P[31];
  let de;
  if (P[32] !== k) de = k && e(n, {
    dimColor: !0,
    children: k
  }), P[32] = k, P[33] = de;else de = P[33];
  let ee;
  if (P[34] !== j || P[35] !== currency_10 || P[36] !== O.cents || P[37] !== O.ok) ee = O.ok && !j && r(n, {
    color: "success",
    children: ["Buys ", Li(O.cents, currency_10), " of usage credits"]
  }), P[34] = j, P[35] = currency_10, P[36] = O.cents, P[37] = O.ok, P[38] = ee;else ee = P[38];
  let le;
  if (P[39] !== children_20) le = children_20 && e(n, {
    color: "error",
    children: children_20
  }), P[39] = children_20, P[40] = le;else le = P[40];
  let children_21;
  if (P[41] !== ee || P[42] !== le || P[43] !== L || P[44] !== te || P[45] !== de) children_21 = r(s, {
    flexDirection: "column",
    gap: 1,
    children: [L, te, de, ee, le]
  }), P[41] = ee, P[42] = le, P[43] = L, P[44] = te, P[45] = de, P[46] = children_21;else children_21 = P[46];
  let me;
  if (P[47] !== u || P[48] !== children_21 || P[49] !== title_4) me = e(ge, {
    title: title_4,
    onCancel: u,
    color: "suggestion",
    children: children_21
  }), P[47] = u, P[48] = children_21, P[49] = title_4, P[50] = me;else me = P[50];
  return me;
}
function _t(E) {
  let p = w(11),
    {
      purchaseId: purchaseId,
      onSuccess: onSuccess,
      onError: onError
    } = E,
    {
      credentials: credentials_3
    } = ke(),
    C = T(0),
    k = Gr(onSuccess),
    v = Gr(onError),
    u = Yt(),
    M;
  if (p[0] !== u || p[1] !== credentials_3 || p[2] !== purchaseId || p[3] !== v || p[4] !== k) M = () => {
    let W = !1;
    let Y;
    let D = function D(K) {
      i("tengu_extra_usage_inline_dialog_buy_result", {
        status: c(K)
      });
    };
    async function I() {
      if (W) {
        return;
      }
      if (C.current = C.current + 1, C.current > $o) {
        W = !0, v(`Purchase timed out \u2014 check ${pe}`);
        return;
      }
      ;
      try {
        let P = await Gyr(purchaseId, credentials_3);
        if (W) {
          return;
        }
        if (P.status === "paid") W = !0, D("success"), k();else if (P.status === "failed") W = !0, D("failed"), v("Payment failed");else if (P.status === "action_needed") W = !0, D("3ds_fallback"), v(`Your card requires additional verification \u2014 this purchase was not completed. Try again at ${pe}`);else Y = u.setTimeout(I, Bo);
      } catch (error) {
        let O = error;
        if (W) {
          return;
        }
        if (W = !0, Zd(O)) t(`Purchase status poll failed: ${l(O)}`, {
          level: "error"
        });else d(O);
        v("Failed to check purchase status");
      }
    }
    return I(), () => {
      W = !0, Y?.();
    };
  }, p[0] = u, p[1] = credentials_3, p[2] = purchaseId, p[3] = v, p[4] = k, p[5] = M;else M = p[5];
  let G;
  if (p[6] !== u || p[7] !== credentials_3 || p[8] !== purchaseId) G = [u, purchaseId, credentials_3], p[6] = u, p[7] = credentials_3, p[8] = purchaseId, p[9] = G;else G = p[9];
  R(M, G);
  let j;
  if (p[10] === S) j = e(Dn, {
    message: "Confirming payment\u2026 (may take a few seconds)"
  }), p[10] = j;else j = p[10];
  return j;
}
function Dn(E) {
  let o = w(3),
    {
      message: a
    } = E,
    b;
  if (o[0] === S) b = e(Fre, {
    autoplay: !0
  }), o[0] = b;else b = o[0];
  let f;
  if (o[1] !== a) f = r(s, {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    paddingTop: 2,
    children: [b, e(n, {
      dimColor: !0,
      children: a
    })]
  }), o[1] = a, o[2] = f;else f = o[2];
  return f;
}
function vt(E) {
  let b = w(7),
    {
      message: a,
      onDone: o
    } = E,
    f;
  if (b[0] !== o) f = e(Fre, {
    sequence: "celebrate",
    reserveCrouchRow: !0,
    onComplete: o
  }), b[0] = o, b[1] = f;else f = b[1];
  let C;
  if (b[2] !== a) C = e(s, {
    marginTop: 1,
    children: e(n, {
      color: "success",
      children: a
    })
  }), b[2] = a, b[3] = C;else C = b[3];
  let k;
  if (b[4] !== f || b[5] !== C) k = r(s, {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    paddingTop: 1,
    children: [f, C]
  }), b[4] = f, b[5] = C, b[6] = k;else k = b[6];
  return k;
}
function Co(E) {
  let u = w(15),
    {
      message: a,
      work: work_2,
      onDone: onDone_4,
      failure: f
    } = E,
    C = T(null),
    k = T(!1),
    v = T(!1),
    p;
  if (u[0] !== f || u[1] !== onDone_4) p = M => {
    let W = M ?? {
      value: f
    };
    if (C.current = W, k.current && !v.current) onDone_4(W.value);
  }, u[0] = f, u[1] = onDone_4, u[2] = p;else p = u[2];
  let Y = Gr(p),
    K;
  if (u[3] !== Y || u[4] !== work_2) K = () => (work_2.then(value_9 => Y({
    value: value_9
  })).catch(G => {
    d(G), Y(null);
  }), () => {
    v.current = !0;
  }), u[3] = Y, u[4] = work_2, u[5] = K;else K = u[5];
  let P;
  if (u[6] !== work_2) P = [work_2], u[6] = work_2, u[7] = P;else P = u[7];
  R(K, P);
  let I;
  if (u[8] !== onDone_4) I = e(Fre, {
    sequence: "celebrate",
    reserveCrouchRow: !0,
    onComplete: () => {
      if (k.current = !0, C.current && !v.current) onDone_4(C.current.value);
    }
  }), u[8] = onDone_4, u[9] = I;else I = u[9];
  let O;
  if (u[10] !== a) O = e(s, {
    marginTop: 1,
    children: e(n, {
      dimColor: !0,
      children: a
    })
  }), u[10] = a, u[11] = O;else O = u[11];
  let j;
  if (u[12] !== I || u[13] !== O) j = r(s, {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    paddingTop: 1,
    children: [I, O]
  }), u[12] = I, u[13] = O, u[14] = j;else j = u[14];
  return j;
}
function v2t(E) {
  let C = w(10),
    {
      message: message_2,
      work: work_3,
      onDone: onDone_5,
      failure: failure
    } = E,
    k;
  if (C[0] !== failure || C[1] !== onDone_5) k = v => onDone_5(v ? v.value : failure), C[0] = failure, C[1] = onDone_5, C[2] = k;else k = C[2];
  let u = Gr(k),
    p;
  if (C[3] !== u || C[4] !== work_3) p = () => {
    let M = !1;
    return work_3.then(value_10 => {
      if (!M) u({
        value: value_10
      });
    }).catch(Y => {
      if (d(Y), !M) u(null);
    }), () => {
      M = !0;
    };
  }, C[3] = u, C[4] = work_3, C[5] = p;else p = C[5];
  let K;
  if (C[6] !== work_3) K = [work_3], C[6] = work_3, C[7] = K;else K = C[7];
  R(p, K);
  let D;
  if (C[8] !== message_2) D = e(s, {
    paddingTop: 1,
    children: e(ur, {
      message: message_2
    })
  }), C[8] = message_2, C[9] = D;else D = C[9];
  return D;
}
function Gs(E) {
  switch (E) {
    case "loading":
    case "enabling":
    case "adjusting":
    case "auto_reload_saving":
    case "buy_purchasing":
    case "buy_polling":
      return !0;
    case "not_enabled":
    case "enabled":
    case "buy_select":
    case "buy_custom":
    case "buy_confirm":
    case "buy_success":
    case "adjust_limit":
    case "auto_reload_config":
    case "error":
      return !1;
  }
}
export { ySn, v2t };