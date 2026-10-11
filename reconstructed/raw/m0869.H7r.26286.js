async function H7r(e,r,s,g,f){let w=await vTn(e,r,s,g,f);if(w.kind==="refused")return w.message;if(w.kind==="ready")return null;return w.written??=_r(e,s,w).finally(()=>f.probes.delete(e)),w.written}
