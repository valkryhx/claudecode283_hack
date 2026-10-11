// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { w } from "B:/~BUN/root/chunk-x9hkq9y1.js";
import { s, n } from "B:/~BUN/root/chunk-1gn8pz4b.js";
import { l } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { nd } from "B:/~BUN/root/chunk-54p0h65d.js";
import { t } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { u2 } from "B:/~BUN/root/chunk-ah3egpyh.js";
import { Fe } from "B:/~BUN/root/chunk-bt71g93n.js";
import { et } from "B:/~BUN/root/chunk-zg8y1401.js";
import { qn } from "B:/~BUN/root/chunk-pet3tnhj.js";
import { ge } from "B:/~BUN/root/chunk-51erc9xb.js";
import { CH } from "B:/~BUN/root/chunk-p273pdav.js";
import { Ck, cTe } from "B:/~BUN/root/chunk-5a1m1kxy.js";
import { xje, Pje, Ije, uQe } from "B:/~BUN/root/chunk-rg6271cv.js";
import { e, r } from "B:/~BUN/root/chunk-qkvevvte.js";
import { g, N } from "B:/~BUN/root/chunk-rnj6pcz5.js";
import { S } from "B:/~BUN/root/chunk-yv67t8hr.js";
N();
import { basename as po, resolve as se } from "path";
function hint() {
  return "Sent to Claude on each fire. Slash commands work.";
}
function validate(mo) {
  return mo.trim() === "" ? null : cTe(mo).error ?? null;
}
function hint_2(uo) {
  if (uo.trim() === "") {
    return;
  }
  let $e = cTe(uo);
  return $e.error ? void 0 : `${$e.human} \xB7 ${$e.cron}`;
}
function Lo(value) {
  return {
    label: u2(value),
    value: value
  };
}
async function gYr(u) {
  return uQe(void 0, u).catch(o => (d(o), []));
}
function EQn(u) {
  let i = w(76),
    {
      task: task,
      onBack: k,
      onEdit: onEdit,
      onDone: onDone,
      refresh: refresh,
      storageV5: storageV5
    } = u,
    [isDisabled, U] = g(!1),
    [p, ee] = g(!1),
    b;
  if (i[0] !== isDisabled || i[1] !== onDone || i[2] !== refresh || i[3] !== storageV5 || i[4] !== task) b = async function I() {
    if (isDisabled) {
      return;
    }
    U(!0);
    ;
    try {
      await Pje(Ze({
        ...task,
        enabled: !task.enabled
      }), void 0, storageV5), await refresh(), onDone(`${task.enabled ? "Disabled" : "Enabled"} scheduled task '${task.id}'.`, {
        display: "system"
      });
    } catch (error) {
      let Ve = error;
      d(Ve), onDone(`Toggle failed: ${l(Ve)}`, {
        display: "system"
      });
    }
  }, i[0] = isDisabled, i[1] = onDone, i[2] = refresh, i[3] = storageV5, i[4] = task, i[5] = b;else b = i[5];
  let I = b,
    Y;
  if (i[6] !== isDisabled || i[7] !== onDone || i[8] !== refresh || i[9] !== storageV5 || i[10] !== task.id) Y = async function j() {
    if (isDisabled) {
      return;
    }
    U(!0);
    ;
    try {
      await Ije(task.id, void 0, storageV5), await refresh(), onDone(`Removed scheduled task '${task.id}'.`, {
        display: "system"
      });
    } catch (error) {
      let oe = error;
      t(`Failed to remove scheduled task '${task.id}' from daemon.json: ${l(oe)}`, {
        level: "error"
      }), onDone(`Remove failed: ${l(oe)}`, {
        display: "system"
      });
    }
  }, i[6] = isDisabled, i[7] = onDone, i[8] = refresh, i[9] = storageV5, i[10] = task.id, i[11] = Y;else Y = i[11];
  let j = Y;
  if (p) {
    const subtitle = `Delete '${task.id}' from daemon.json. The daemon will stop firing it on its next reconcile.`;
    let onCancel_2;
    if (i[12] === S) onCancel_2 = () => ee(!1), i[12] = onCancel_2;else onCancel_2 = i[12];
    let onConfirm;
    if (i[13] !== j) onConfirm = () => void j(), i[13] = j, i[14] = onConfirm;else onConfirm = i[14];
    let onCancel;
    if (i[15] === S) onCancel = () => ee(!1), i[15] = onCancel;else onCancel = i[15];
    let children;
    if (i[16] !== onConfirm) children = e(qn, {
      cancelFirst: !0,
      focus: "cancel",
      confirmLabel: "Yes, remove",
      cancelLabel: "No, cancel",
      onConfirm: onConfirm,
      onCancel: onCancel
    }), i[16] = onConfirm, i[17] = children;else children = i[17];
    let f;
    if (i[18] !== subtitle || i[19] !== children) f = e(ge, {
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
  if (i[23] === S) C = {
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
    id: L,
    cron: cron
  } = task;
  let F;
  if (i[28] !== task.cron) F = Ck(task.cron), i[28] = task.cron, i[29] = F;else F = i[29];
  let G;
  if (i[30] !== F || i[31] !== task.cron) G = r(n, {
    dimColor: !0,
    children: ["Cron ", cron, " (", F, ")"]
  }), i[30] = F, i[31] = task.cron, i[32] = G;else G = i[32];
  let H;
  if (i[33] !== task.directory) H = r(n, {
    dimColor: !0,
    children: ["Directory ", task.directory]
  }), i[33] = task.directory, i[34] = H;else H = i[34];
  let D;
  if (i[35] !== task.prompt) D = r(n, {
    dimColor: !0,
    children: ["Prompt ", task.prompt]
  }), i[35] = task.prompt, i[36] = D;else D = i[36];
  const status = task.enabled ? "on" : "off";
  let Q;
  if (i[37] !== status) Q = e(et, {
    status: status,
    withSpace: !0
  }), i[37] = status, i[38] = Q;else Q = i[38];
  const q = task.enabled ? "enabled" : "disabled";
  let P;
  if (i[39] !== Q || i[40] !== q) P = r(n, {
    dimColor: !0,
    children: ["Status ", Q, q]
  }), i[39] = Q, i[40] = q, i[41] = P;else P = i[41];
  let K;
  if (i[42] !== task.permissionMode) K = u2(task.permissionMode), i[42] = task.permissionMode, i[43] = K;else K = i[43];
  let ie;
  if (i[44] !== K) ie = r(n, {
    dimColor: !0,
    children: ["Mode ", K]
  }), i[44] = K, i[45] = ie;else ie = i[45];
  let T;
  if (i[46] !== task.model) T = task.model && r(n, {
    dimColor: !0,
    children: ["Model ", task.model]
  }), i[46] = task.model, i[47] = T;else T = i[47];
  let W;
  if (i[48] !== task.runTimeoutMinutes) W = r(n, {
    dimColor: !0,
    children: ["Timeout ", task.runTimeoutMinutes, "m"]
  }), i[48] = task.runTimeoutMinutes, i[49] = W;else W = i[49];
  let Z;
  if (i[50] !== task.maxQueued) Z = r(n, {
    dimColor: !0,
    children: ["Max queue ", task.maxQueued]
  }), i[50] = task.maxQueued, i[51] = Z;else Z = i[51];
  let O;
  if (i[52] !== G || i[53] !== H || i[54] !== D || i[55] !== P || i[56] !== ie || i[57] !== T || i[58] !== W || i[59] !== Z) O = r(s, {
    flexDirection: "column",
    marginBottom: 1,
    children: [G, H, D, P, ie, T, W, Z]
  }), i[52] = G, i[53] = H, i[54] = D, i[55] = P, i[56] = ie, i[57] = T, i[58] = W, i[59] = Z, i[60] = O;else O = i[60];
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
  if (i[66] !== isDisabled || i[67] !== k || i[68] !== options || i[69] !== onChange) J = e(Fe, {
    options: options,
    isDisabled: isDisabled,
    onChange: onChange,
    onCancel: k
  }), i[66] = isDisabled, i[67] = k, i[68] = options, i[69] = onChange, i[70] = J;else J = i[70];
  let _;
  if (i[71] !== k || i[72] !== O || i[73] !== J || i[74] !== task.id) _ = r(ge, {
    title: L,
    onCancel: k,
    children: [O, J]
  }), i[71] = k, i[72] = O, i[73] = J, i[74] = task.id, i[75] = _;else _ = i[75];
  return _;
}
function TQn(u) {
  let p = w(59),
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
    b = prefill !== void 0,
    Y;
  if (p[2] !== existingIds || p[3] !== b || p[4] !== prefill) Y = b ? existingIds.filter(item => item !== prefill.id) : existingIds, p[2] = existingIds, p[3] = b, p[4] = prefill, p[5] = Y;else Y = p[5];
  let I = Y;
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
  let [values, ce] = g(M),
    [L, _e] = g(b),
    [F, G] = g(!1),
    H;
  if (p[13] !== o || p[14] !== L) H = function P(D, te) {
    if (D === "id") _e(!0);
    ce(Q => {
      if (Q[D] === te) {
        return Q;
      }
      let q = {
        ...Q,
        [D]: te
      };
      if (D !== "id" && !L && (D === "prompt" || D === "dir")) q.id = ue(se(nd(q.dir?.trim() || o)), q.prompt ?? "");
      return q;
    });
  }, p[13] = o, p[14] = L, p[15] = H;else H = p[15];
  let onChange_2 = H,
    K;
  if (p[16] !== i || p[17] !== prefill) K = prefill?.model && !i.some(item => item.value === prefill.model) ? [...i, {
    label: prefill.model,
    value: prefill.model
  }] : i, p[16] = i, p[17] = prefill, p[18] = K;else K = p[18];
  let options_2 = K,
    W,
    Z;
  if (p[19] === S) W = {
    type: "text",
    key: "prompt",
    label: "Prompt",
    placeholder: "/babysit-prs",
    required: !0,
    hint: hint
  }, Z = {
    type: "text",
    key: "schedule",
    label: "Schedule",
    placeholder: "5m, 2h, 1d  or  */15 * * * *",
    required: !0,
    validate: validate,
    hint: hint_2
  }, p[19] = W, p[20] = Z;else W = p[19], Z = p[20];
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
  if (p[25] !== L) hint_3 = () => L ? void 0 : "Auto-generated from prompt and directory.", p[25] = L, p[26] = hint_3;else hint_3 = p[26];
  let pe;
  if (p[27] !== validate_2 || p[28] !== hint_3) pe = {
    type: "text",
    key: "id",
    label: "Id",
    validate: validate_2,
    hint: hint_3
  }, p[27] = validate_2, p[28] = hint_3, p[29] = pe;else pe = p[29];
  let eo;
  if (p[30] === S) eo = {
    type: "select",
    key: "permissionMode",
    label: "Permission mode",
    options: xje.map(Lo)
  }, p[30] = eo;else eo = p[30];
  let hint_4;
  if (p[31] !== options_2) hint_4 = oo => options_2.find(item => item.value === oo)?.description ?? (oo === "" ? "Uses your configured default model." : void 0), p[31] = options_2, p[32] = hint_4;else hint_4 = p[32];
  let ke;
  if (p[33] !== options_2 || p[34] !== hint_4) ke = {
    type: "select",
    key: "model",
    label: "Model",
    options: options_2,
    hint: hint_4
  }, p[33] = options_2, p[34] = hint_4, p[35] = ke;else ke = p[35];
  let to;
  if (p[36] !== O || p[37] !== pe || p[38] !== ke) to = [W, Z, O, pe, eo, ke], p[36] = O, p[37] = pe, p[38] = ke, p[39] = to;else to = p[39];
  let fields = to,
    io;
  if (p[40] !== F || p[41] !== o || p[42] !== b || p[43] !== onDone_2 || p[44] !== onSaved || p[45] !== prefill || p[46] !== storageV5_2 || p[47] !== values) io = async function ve() {
    if (F) {
      return;
    }
    G(!0);
    let directory = se(nd(values.dir?.trim() || o));
    let no = cTe(values.schedule ?? "");
    if (no.cron === void 0) {
      G(!1);
      return;
    }
    let id_2 = values.id?.trim() || ue(directory, values.prompt?.trim() ?? "");
    let permissionMode_2 = values.permissionMode ?? "dontAsk";
    let model_2 = values.model?.trim() || void 0;
    let No = {
      id: id_2,
      cron: no.cron,
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
      if (b && prefill.id !== id_2) await Ije(prefill.id, void 0, storageV5_2);
      await Pje(No, void 0, storageV5_2), await onSaved(id_2, b);
    } catch (error) {
      let lo = error;
      d(lo), onDone_2(`Save failed: ${l(lo)}`, {
        display: "system"
      });
    }
  }, p[40] = F, p[41] = o, p[42] = b, p[43] = onDone_2, p[44] = onSaved, p[45] = prefill, p[46] = storageV5_2, p[47] = values, p[48] = io;else io = p[48];
  let ve = io;
  const title = b ? `Edit '${prefill.id}'` : "New scheduled task";
  let onSubmit;
  if (p[49] !== ve) onSubmit = () => void ve(), p[49] = ve, p[50] = onSubmit;else onSubmit = p[50];
  const submitLabel = b ? "Save changes" : "Create task";
  let ao;
  if (p[51] !== fields || p[52] !== onCancel_3 || p[53] !== onChange_2 || p[54] !== title || p[55] !== onSubmit || p[56] !== submitLabel || p[57] !== values) ao = e(CH, {
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
function Qbn(u) {
  return u.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
}
function ue(u, o) {
  let k = Qbn(po(u)),
    a = Qbn(o.split(/\s+/).slice(0, 4).join(" "));
  return [k, a].filter(Boolean).join("-") || "task";
}
function Ze(u) {
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
export { gYr, EQn, TQn, Qbn };