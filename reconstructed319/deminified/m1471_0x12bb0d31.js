// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
var pwn = "you are not signed in, or this machine is not authorized to write to the session",
  Gdi = "without your deny and ask rules";
function Vdi({
  completion: completion,
  status: status,
  description = u,
  afterFirstReply = r
}) {
  let t;
  completion.then(outcome => {
    t = {
      outcome: outcome,
      atMs: Date.now()
    };
  });
  let d = afterFirstReply,
    o,
    l = new Promise(e => {
      o = e;
    });
  return {
    completion: completion,
    status: status,
    description: description,
    outcome: () => t?.outcome,
    settledAtMs: () => t?.atMs,
    async afterFirstReply(e) {
      let i = d;
      if (d = null, i === null) return r();
      try {
        return await i(e, o);
      } finally {
        o(void 0);
      }
    },
    readBack: l
  };
}
function r() {
  return Promise.resolve("skipped");
}
function u() {
  return null;
}
export { pwn, Gdi, Vdi };