/* ==============================================================================
 * m1460.bo   [m1460_0xd973957.js @ 3227]
 * --------------------------------------------------------------------------
 * 作用: (no note)
 * 原文: claudecode283/modules/m1460_0xd973957.js  字符偏移 3227
 * 说明: 由 tools/extract.mjs 抽取，忠实原文，仅格式化；标识符仍为 Bun 压缩名。
 * ============================================================================== */
async function bo(o, l, {
  promptFramed: a
} = {}) {
  let u = Ji(uO(o), `agent-${l}.jsonl`),
    d;
  try {
    d = await C8e(u)
  } catch (G) {
    return t(`readWorkflowAgentTranscript: ${u} not readable (${G instanceof Error?G.message:String(G)})`), null
  }
  let f = d.filter(UP),
    h = f.findIndex((G) => G.type === "user"),
    x = h === -1 ? void 0 : f[h];
  for (let G = h + 1; h !== -1 && G < f.length; G++) {
    let nt = f[G];
    if (nt === void 0 || nt.type !== "user" || nt.isMeta === !0) break;
    x = nt
  }
  let y = x?.type === "user" ? x.message?.content : void 0,
    A = typeof y === "string" ? y : cs(y).trim(),
    k = a ? j7r(A) : A,
    C = [],
    W = BKt(),
    L = new Map,
    D = {
      pendingCreates: new Map,
      tasks: new Map
    },
    M = void 0,
    q = "",
    H = "";
  for (let [G, nt] of f.entries()) {
    if (nt.type === "user") {
      let K = nt.message?.content;
      if (Array.isArray(K))
        for (let Y of K) {
          if (!yn(Y) || Y.type !== "tool_result" || typeof Y.tool_use_id !== "string") continue;
          let mt = Y.is_error === !0;
          jKt(W, Y.tool_use_id, nt.isVirtual === !0, mt);
          let it = Yi(Y.content),
            pt = it;
          L.set(Y.tool_use_id, {
            ...as(pt, Vi),
            isError: mt
          }), qwr(D, {
            tool_use_id: Y.tool_use_id,
            is_error: mt,
            content: it
          })
        }
      continue
    }
    if (nt.type !== "assistant" || !Array.isArray(nt.message?.content)) continue;
    let gt = nt.message.id || `entry-${G}`;
    H = gt;
    let Q = "";
    for (let K of nt.message.content) {
      if (!yn(K)) continue;
      if (K.type === "tool_use" && typeof K.name === "string") {
        if (W7r(W, {
            id: K.id,
            name: K.name
          }, nt.isVirtual === !0), C.push({
            id: typeof K.id === "string" ? K.id : "",
            name: K.name,
            input: K.input,
            responseKey: gt
          }), typeof K.id === "string" && K.id !== "") Vwr(D, K);
        if (K.name === Mb) M = K.input;
        if (K.name === bi && K.input !== void 0) try {
          Q = b(K.input, null, 2)
        } catch {
          Q = String(K.input)
        }
      } else if (K.type === "text" && typeof K.text === "string") Q += K.text
    }
    if (Q) q = Q
  }
  let z = C,
    E = z.length - ho,
    B = z.map((G, nt) => {
      let gt = G.responseKey === H,
        Q = (nt >= E || gt) && !xo.includes(G.name);
      return {
        name: G.name,
        summary: WKt(G.input),
        fromLastResponse: gt,
        fields: Q ? zi(G.input) : [],
        result: Gi(G.id ? L.get(G.id) : void 0, Q)
      }
    }),
    O = Kwr(D),
    rt = O.length > 0 ? O : Gwr(M);
  return {
    prompt: k,
    toolCalls: B,
    finalText: q,
    tasks: rt
  }
}
