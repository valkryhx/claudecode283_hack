/* ==============================================================================
 * m1569.checkPermissions   [m1569_0xdceb889.js @ 64578]
 * --------------------------------------------------------------------------
 * 作用: 权限对话框：返回 behavior:'ask'（Review dynamic workflow before running），按脚本/名字匹配 allow/deny，allow 命中直接放行。
 * 标识: r=input  n=ctx
 * 原文: claudecode283/modules/m1569_0xdceb889.js  字符偏移 64578
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async checkPermissions(r, n) {
  let s = _r(e, n),
    a = s.permissions(),
    w = Ke(r) !== void 0,
    h = r.scriptPath || w ? void 0 : r.name,
    g = (O) => h ? PR(a, Fd, O).get(h) : void 0,
    k = g("deny");
  if (k) return {
    behavior: "deny",
    message: `Workflow ${h} blocked by permission rules`,
    decisionReason: {
      type: "rule",
      rule: k
    }
  };
  let R = w ? Ke(r) : void 0;
  if (R && hr(R) === "read") return {
    behavior: "allow",
    updatedInput: r,
    decisionReason: {
      type: "other",
      reason: TAe
    }
  };
  let I = r;
  if (w);
  else if (r.scriptPath) {
    let O = await NKt(r.scriptPath, s),
      K = "error" in O && r.resumeFromRunId && STn(r.scriptPath, s) === null ? rsr(await vTn(r.resumeFromRunId, r.scriptPath, s.storageV5, s.signal, s.toolState.get(wSt)), r.scriptPath) : void 0;
    if (K !== void 0) I = {
      ...r,
      script: K
    };
    else if ("error" in O) return {
      behavior: "deny",
      message: O.error,
      decisionReason: {
        type: "other",
        reason: "workflow scriptPath outside the readable set"
      }
    };
    else I = {
      ...r,
      script: O.script
    }
  } else if (r.name) {
    let O = await TSt(r.name, oe(), s.storageV5);
    I = {
      ...r,
      script: O?.script
    }
  }
  let x = w && he()?.RUN_OP_CONSENT_MESSAGE || "Review dynamic workflow before running",
    Z = g("ask");
  if (Z) return {
    behavior: "ask",
    message: x,
    updatedInput: I,
    decisionReason: {
      type: "rule",
      rule: Z
    }
  };
  let F = g("allow");
  if (F) return {
    behavior: "allow",
    updatedInput: I,
    decisionReason: {
      type: "rule",
      rule: F
    }
  };
  return {
    behavior: "ask",
    message: x,
    updatedInput: I,
    ...h && {
      suggestions: [{
        type: "addRules",
        rules: [{
          toolName: Fd,
          ruleContent: h
        }],
        behavior: "allow",
        destination: "localSettings"
      }]
    }
  }
}
