/* ==========================================================================
 * m1569.checkPermissions  ->  checkPermissions   [m1569_0xdceb889.js @ 64578]
 * 由 tools/rename.mjs 按 rename-map.json 做作用域感知重命名。
 * 未收录的标识符保持 Bun 压缩名；字符串/属性名/控制流未改动。
 * 名字证据等级见 naming-map.json / NAMING-METHOD.md。
 * ========================================================================== */
async checkPermissions(input, ctx) {
  let session = resolveToolContext(e, ctx),
    permissions = session.permissions(),
    hasScriptPath = getScriptPath(input) !== void 0,
    workflowName = input.scriptPath || hasScriptPath ? void 0 : input.name,
    lookupRule = O => workflowName ? permissionQuery(permissions, WORKFLOW_TOOL_NAME, O).get(workflowName) : void 0,
    denyRule = lookupRule("deny");
  if (denyRule) return {
    behavior: "deny",
    message: `Workflow ${workflowName} blocked by permission rules`,
    decisionReason: {
      type: "rule",
      rule: denyRule
    }
  };
  let R = hasScriptPath ? getScriptPath(input) : void 0;
  if (R && hr(R) === "read") return {
    behavior: "allow",
    updatedInput: input,
    decisionReason: {
      type: "other",
      reason: TAe
    }
  };
  let I = input;
  if (hasScriptPath) ;else if (input.scriptPath) {
    let O = await NKt(input.scriptPath, session),
      K = "error" in O && input.resumeFromRunId && STn(input.scriptPath, session) === null ? rsr(await vTn(input.resumeFromRunId, input.scriptPath, session.storageV5, session.signal, session.toolState.get(wSt)), input.scriptPath) : void 0;
    if (K !== void 0) I = {
      ...input,
      script: K
    };else if ("error" in O) return {
      behavior: "deny",
      message: O.error,
      decisionReason: {
        type: "other",
        reason: "workflow scriptPath outside the readable set"
      }
    };else I = {
      ...input,
      script: O.script
    };
  } else if (input.name) {
    let O = await TSt(input.name, oe(), session.storageV5);
    I = {
      ...input,
      script: O?.script
    };
  }
  let x = hasScriptPath && he()?.RUN_OP_CONSENT_MESSAGE || "Review dynamic workflow before running",
    Z = lookupRule("ask");
  if (Z) return {
    behavior: "ask",
    message: x,
    updatedInput: I,
    decisionReason: {
      type: "rule",
      rule: Z
    }
  };
  let F = lookupRule("allow");
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
    ...(workflowName && {
      suggestions: [{
        type: "addRules",
        rules: [{
          toolName: WORKFLOW_TOOL_NAME,
          ruleContent: workflowName
        }],
        behavior: "allow",
        destination: "localSettings"
      }]
    })
  };
}
