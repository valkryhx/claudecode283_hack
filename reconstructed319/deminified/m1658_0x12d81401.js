// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { S } from "B:/~BUN/root/chunk-bn4bjw9d.js";
import { s, n } from "B:/~BUN/root/chunk-qey16aan.js";
import { d } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Df } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { aj } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Ze } from "B:/~BUN/root/chunk-cpzw87wr.js";
import { Tt } from "B:/~BUN/root/chunk-dw9hahea.js";
import { OI, NXe } from "B:/~BUN/root/chunk-0jhmwh3q.js";
import { Jn } from "B:/~BUN/root/chunk-yd5nr5hc.js";
import { ke } from "B:/~BUN/root/chunk-bvcekd4j.js";
import { MY } from "B:/~BUN/root/chunk-58807hdh.js";
import { wEt, kEt, vEt, b2t } from "B:/~BUN/root/chunk-5yr8g0ct.js";
import { e, r } from "B:/~BUN/root/chunk-t16eynda.js";
import { y, j } from "B:/~BUN/root/chunk-czy5r8bc.js";
import { w } from "B:/~BUN/root/chunk-4qfwb3rf.js";
j();
import { basename as po, resolve as se } from "path";
function hint() {
  return "Sent to Claude on each fire. Slash commands work.";
}
function validate(mo) {
  return mo.trim() === "" ? null : NXe(mo).error ?? null;
}
function hint_2(uo) {
  if (uo.trim() === "") {
    return;
  }
  let Re = NXe(uo);
  return Re.error ? void 0 : `${Re.human} \xB7 ${Re.cron}`;
}
function Lo(value) {
  return {
    label: aj(value),
    value: value
  };
}
async function e3s(u) {
  return b2t(void 0, u).catch(o => (a(o), []));
}
function ILo(u) {
  let i = S(76),
    {
      task: task,
      onBack: k,
      onEdit: onEdit,
      onDone: onDone,
      refresh: refresh,
      storageV5: storageV5
    } = u,
    [isDisabled, z] = y(!1),
    [p, ee] = y(!1),
    h;
  if (i[0] !== isDisabled || i[1] !== onDone || i[2] !== refresh || i[3] !== storageV5 || i[4] !== task) h = async function I() {
    if (isDisabled) {
      return;
    }
    z(!0);
    ;
    try {
      await kEt(Ke({
        ...task,
        enabled: !task.enabled
      }), void 0, storageV5), await refresh(), onDone(`${task.enabled ? "Disabled" : "Enabled"} scheduled task '${task.id}'.`, {
        display: "system"
      });
    } catch (error) {
      let Be = error;
      a(Be), onDone(`Toggle failed: ${d(Be)}`, {
        display: "system"
      });
    }
  }, i[0] = isDisabled, i[1] = onDone, i[2] = refresh, i[3] = storageV5, i[4] = task, i[5] = h;else h = i[5];
  let I = h,
    U;
  if (i[6] !== isDisabled || i[7] !== onDone || i[8] !== refresh || i[9] !== storageV5 || i[10] !== task.id) U = async function L() {
    if (isDisabled) {
      return;
    }
    z(!0);
    ;
    try {
      await vEt(task.id, void 0, storageV5), await refresh(), onDone(`Removed scheduled task '${task.id}'.`, {
        display: "system"
      });
    } catch (error) {
      let oe = error;
      t(`Failed to remove scheduled task '${task.id}' from daemon.json: ${d(oe)}`, {
        level: "error"
      }), onDone(`Remove failed: ${d(oe)}`, {
        display: "system"
      });
    }
  }, i[6] = isDisabled, i[7] = onDone, i[8] = refresh, i[9] = storageV5, i[10] = task.id, i[11] = U;else U = i[11];
  let L = U;
  if (p) {
    const subtitle = `Delete '${task.id}' from daemon.json. The daemon will stop firing it on its next reconcile.`;
    let onCancel_2;
    if (i[12] === w) onCancel_2 = () => ee(!1), i[12] = onCancel_2;else onCancel_2 = i[12];
    let onConfirm;
    if (i[13] !== L) onConfirm = () => void L(), i[13] = L, i[14] = onConfirm;else onConfirm = i[14];
    let onCancel;
    if (i[15] === w) onCancel = () => ee(!1), i[15] = onCancel;else onCancel = i[15];
    let children;
    if (i[16] !== onConfirm) children = e(Jn, {
      cancelFirst: !0,
      focus: "cancel",
      confirmLabel: "Yes, remove",
      cancelLabel: "No, cancel",
      onConfirm: onConfirm,
      onCancel: onCancel
    }), i[16] = onConfirm, i[17] = children;else children = i[17];
    let f;
    if (i[18] !== subtitle || i[19] !== children) f = e(ke, {
      title: "Remove task?",
      subtitle: subtitle,
      onCancel: onCancel_2,
      color: "error",
      children: children
    }), i[18] = subtitle, i[19] = children, i[20] = f;else f = i[20];
    return f;
  }
  const label = task.enabled ? "Disable" : "Enable";
  let x;
  if (i[21] !== label) x = {
    label: label,
    value: "toggle"
  }, i[21] = label, i[22] = x;else x = i[22];
  let C, E, M;
  if (i[23] === w) C = {
    label: "Edit",
    value: "edit"
  }, E = {
    label: "Remove",
    value: "remove"
  }, M = {
    label: "Back",
    value: "back"
  }, i[23] = C, i[24] = E, i[25] = M;else C = i[23], E = i[24], M = i[25];
  let f;
  if (i[26] !== x) f = [x, C, E, M], i[26] = x, i[27] = f;else f = i[27];
  let options = f;
  const {
    id: F,
    cron: cron
  } = task;
  let Q;
  if (i[28] !== task.cron) Q = OI(task.cron), i[28] = task.cron, i[29] = Q;else Q = i[29];
  let Y;
  if (i[30] !== Q || i[31] !== task.cron) Y = r(n, {
    dimColor: !0,
    children: ["Cron ", cron, " (", Q, ")"]
  }), i[30] = Q, i[31] = task.cron, i[32] = Y;else Y = i[32];
  let G;
  if (i[33] !== task.directory) G = r(n, {
    dimColor: !0,
    children: ["Directory ", task.directory]
  }), i[33] = task.directory, i[34] = G;else G = i[34];
  let D;
  if (i[35] !== task.prompt) D = r(n, {
    dimColor: !0,
    children: ["Prompt ", task.prompt]
  }), i[35] = task.prompt, i[36] = D;else D = i[36];
  const status = task.enabled ? "on" : "off";
  let N;
  if (i[37] !== status) N = e(Tt, {
    status: status,
    withSpace: !0
  }), i[37] = status, i[38] = N;else N = i[38];
  const q = task.enabled ? "enabled" : "disabled";
  let P;
  if (i[39] !== N || i[40] !== q) P = r(n, {
    dimColor: !0,
    children: ["Status ", N, q]
  }), i[39] = N, i[40] = q, i[41] = P;else P = i[41];
  let H;
  if (i[42] !== task.permissionMode) H = aj(task.permissionMode), i[42] = task.permissionMode, i[43] = H;else H = i[43];
  let ie;
  if (i[44] !== H) ie = r(n, {
    dimColor: !0,
    children: ["Mode ", H]
  }), i[44] = H, i[45] = ie;else ie = i[45];
  let T;
  if (i[46] !== task.model) T = task.model && r(n, {
    dimColor: !0,
    children: ["Model ", task.model]
  }), i[46] = task.model, i[47] = T;else T = i[47];
  let K;
  if (i[48] !== task.runTimeoutMinutes) K = r(n, {
    dimColor: !0,
    children: ["Timeout ", task.runTimeoutMinutes, "m"]
  }), i[48] = task.runTimeoutMinutes, i[49] = K;else K = i[49];
  let W;
  if (i[50] !== task.maxQueued) W = r(n, {
    dimColor: !0,
    children: ["Max queue ", task.maxQueued]
  }), i[50] = task.maxQueued, i[51] = W;else W = i[51];
  let O;
  if (i[52] !== Y || i[53] !== G || i[54] !== D || i[55] !== P || i[56] !== ie || i[57] !== T || i[58] !== K || i[59] !== W) O = r(s, {
    flexDirection: "column",
    marginBottom: 1,
    children: [Y, G, D, P, ie, T, K, W]
  }), i[52] = Y, i[53] = G, i[54] = D, i[55] = P, i[56] = ie, i[57] = T, i[58] = K, i[59] = W, i[60] = O;else O = i[60];
  let onChange;
  if (i[61] !== k || i[62] !== onEdit || i[63] !== task || i[64] !== I) onChange = re => {
    if (re === "back") {
      return k();
    }
    if (re === "edit") {
      return onEdit(task);
    }
    if (re === "remove") {
      return ee(!0);
    }
    if (re === "toggle") {
      return void I();
    }
  }, i[61] = k, i[62] = onEdit, i[63] = task, i[64] = I, i[65] = onChange;else onChange = i[65];
  let J;
  if (i[66] !== isDisabled || i[67] !== k || i[68] !== options || i[69] !== onChange) J = e(Ze, {
    options: options,
    isDisabled: isDisabled,
    onChange: onChange,
    onCancel: k
  }), i[66] = isDisabled, i[67] = k, i[68] = options, i[69] = onChange, i[70] = J;else J = i[70];
  let Z;
  if (i[71] !== k || i[72] !== O || i[73] !== J || i[74] !== task.id) Z = r(ke, {
    title: F,
    onCancel: k,
    children: [O, J]
  }), i[71] = k, i[72] = O, i[73] = J, i[74] = task.id, i[75] = Z;else Z = i[75];
  return Z;
}
function MLo(u) {
  let p = S(59),
    {
      defaultDir: o,
      existingIds: existingIds,
      prefill: prefill,
      modelOptions: modelOptions,
      onCancel: onCancel_3,
      onDone: onDone_2,
      onSaved: onSaved,
      storageV5: storageV5_2
    } = u,
    ee;
  if (p[0] !== modelOptions) ee = modelOptions === void 0 ? [{
    label: "default",
    value: ""
  }] : modelOptions, p[0] = modelOptions, p[1] = ee;else ee = p[1];
  let i = ee,
    h = prefill !== void 0,
    U;
  if (p[2] !== existingIds || p[3] !== h || p[4] !== prefill) U = h ? existingIds.filter(item => item !== prefill.id) : existingIds, p[2] = existingIds, p[3] = h, p[4] = prefill, p[5] = U;else U = p[5];
  let I = U;
  const prompt = prefill?.prompt ?? "",
    schedule = prefill?.cron ?? "",
    dir = prefill?.directory ?? o,
    id = prefill?.id ?? "",
    permissionMode = prefill?.permissionMode ?? "dontAsk",
    model = prefill?.model ?? "";
  let M;
  if (p[6] !== prompt || p[7] !== schedule || p[8] !== dir || p[9] !== id || p[10] !== permissionMode || p[11] !== model) M = {
    prompt: prompt,
    schedule: schedule,
    dir: dir,
    id: id,
    permissionMode: permissionMode,
    model: model
  }, p[6] = prompt, p[7] = schedule, p[8] = dir, p[9] = id, p[10] = permissionMode, p[11] = model, p[12] = M;else M = p[12];
  let [values, ce] = y(M),
    [F, We] = y(h),
    [Q, Y] = y(!1),
    G;
  if (p[13] !== o || p[14] !== F) G = function P(D, te) {
    if (D === "id") We(!0);
    ce(N => {
      if (N[D] === te) {
        return N;
      }
      let q = {
        ...N,
        [D]: te
      };
      if (D !== "id" && !F && (D === "prompt" || D === "dir")) q.id = ue(se(Df(q.dir?.trim() || o)), q.prompt ?? "");
      return q;
    });
  }, p[13] = o, p[14] = F, p[15] = G;else G = p[15];
  let onChange_2 = G,
    H;
  if (p[16] !== i || p[17] !== prefill) H = prefill?.model && !i.some(item => item.value === prefill.model) ? [...i, {
    label: prefill.model,
    value: prefill.model
  }] : i, p[16] = i, p[17] = prefill, p[18] = H;else H = p[18];
  let options_2 = H,
    K,
    W;
  if (p[19] === w) K = {
    type: "text",
    key: "prompt",
    label: "Prompt",
    placeholder: "/babysit-prs",
    required: !0,
    hint: hint
  }, W = {
    type: "text",
    key: "schedule",
    label: "Schedule",
    placeholder: "5m, 2h, 1d  or  */15 * * * *",
    required: !0,
    validate: validate,
    hint: hint_2
  }, p[19] = K, p[20] = W;else K = p[19], W = p[20];
  let O;
  if (p[21] !== o) O = {
    type: "text",
    key: "dir",
    label: "Directory",
    placeholder: o
  }, p[21] = o, p[22] = O;else O = p[22];
  let validate_2;
  if (p[23] !== I) validate_2 = re => {
    let J = re.trim();
    if (J !== "" && I.includes(J)) {
      return `id '${J}' is already in use`;
    }
    return null;
  }, p[23] = I, p[24] = validate_2;else validate_2 = p[24];
  let hint_3;
  if (p[25] !== F) hint_3 = () => F ? void 0 : "Auto-generated from prompt and directory.", p[25] = F, p[26] = hint_3;else hint_3 = p[26];
  let pe;
  if (p[27] !== validate_2 || p[28] !== hint_3) pe = {
    type: "text",
    key: "id",
    label: "Id",
    validate: validate_2,
    hint: hint_3
  }, p[27] = validate_2, p[28] = hint_3, p[29] = pe;else pe = p[29];
  let _e;
  if (p[30] === w) _e = {
    type: "select",
    key: "permissionMode",
    label: "Permission mode",
    options: wEt.map(Lo)
  }, p[30] = _e;else _e = p[30];
  let hint_4;
  if (p[31] !== options_2) hint_4 = eo => options_2.find(item => item.value === eo)?.description ?? (eo === "" ? "Uses your configured default model." : void 0), p[31] = options_2, p[32] = hint_4;else hint_4 = p[32];
  let ve;
  if (p[33] !== options_2 || p[34] !== hint_4) ve = {
    type: "select",
    key: "model",
    label: "Model",
    options: options_2,
    hint: hint_4
  }, p[33] = options_2, p[34] = hint_4, p[35] = ve;else ve = p[35];
  let oo;
  if (p[36] !== O || p[37] !== pe || p[38] !== ve) oo = [K, W, O, pe, _e, ve], p[36] = O, p[37] = pe, p[38] = ve, p[39] = oo;else oo = p[39];
  let fields = oo,
    to;
  if (p[40] !== Q || p[41] !== o || p[42] !== h || p[43] !== onDone_2 || p[44] !== onSaved || p[45] !== prefill || p[46] !== storageV5_2 || p[47] !== values) to = async function ye() {
    if (Q) {
      return;
    }
    Y(!0);
    let directory = se(Df(values.dir?.trim() || o));
    let ro = NXe(values.schedule ?? "");
    if (ro.cron === void 0) {
      Y(!1);
      return;
    }
    let id_2 = values.id?.trim() || ue(directory, values.prompt?.trim() ?? "");
    let permissionMode_2 = values.permissionMode ?? "dontAsk";
    let model_2 = values.model?.trim() || void 0;
    let No = {
      id: id_2,
      cron: ro.cron,
      prompt: values.prompt.trim(),
      directory: directory,
      enabled: prefill?.enabled ?? !0,
      permissionMode: permissionMode_2,
      runTimeoutMinutes: prefill?.runTimeoutMinutes ?? 30,
      maxQueued: prefill?.maxQueued ?? 1,
      ...(model_2 && {
        model: model_2
      })
    };
    ;
    try {
      if (h && prefill.id !== id_2) await vEt(prefill.id, void 0, storageV5_2);
      await kEt(No, void 0, storageV5_2), await onSaved();
    } catch (error) {
      let lo = error;
      a(lo), onDone_2(`Save failed: ${d(lo)}`, {
        display: "system"
      });
    }
  }, p[40] = Q, p[41] = o, p[42] = h, p[43] = onDone_2, p[44] = onSaved, p[45] = prefill, p[46] = storageV5_2, p[47] = values, p[48] = to;else to = p[48];
  let ye = to;
  const title = h ? `Edit '${prefill.id}'` : "New scheduled task";
  let onSubmit;
  if (p[49] !== ye) onSubmit = () => void ye(), p[49] = ye, p[50] = onSubmit;else onSubmit = p[50];
  const submitLabel = h ? "Save changes" : "Create task";
  let ao;
  if (p[51] !== fields || p[52] !== onCancel_3 || p[53] !== onChange_2 || p[54] !== title || p[55] !== onSubmit || p[56] !== submitLabel || p[57] !== values) ao = e(MY, {
    title: title,
    subtitle: "Fire a prompt on a recurring schedule",
    fields: fields,
    values: values,
    onChange: onChange_2,
    onSubmit: onSubmit,
    onCancel: onCancel_3,
    submitLabel: submitLabel
  }), p[51] = fields, p[52] = onCancel_3, p[53] = onChange_2, p[54] = title, p[55] = onSubmit, p[56] = submitLabel, p[57] = values, p[58] = ao;else ao = p[58];
  return ao;
}
function T1r(u) {
  return u.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
}
function ue(u, o) {
  let k = T1r(po(u)),
    l = T1r(o.split(/\s+/).slice(0, 4).join(" "));
  return [k, l].filter(Boolean).join("-") || "task";
}
function Ke(u) {
  return {
    id: u.id,
    cron: u.cron,
    prompt: u.prompt,
    directory: u.directory,
    enabled: u.enabled,
    permissionMode: u.permissionMode,
    runTimeoutMinutes: u.runTimeoutMinutes,
    maxQueued: u.maxQueued,
    ...(u.model && {
      model: u.model
    })
  };
}
export { e3s, ILo, MLo, T1r };