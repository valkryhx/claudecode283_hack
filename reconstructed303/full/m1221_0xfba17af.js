// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  F,
  Ze,
  hc,
  a1
} from "B:/~BUN/root/chunk-rpez7z7a.js";
import {
  $n,
  Na,
  kI,
  Ds
} from "B:/~BUN/root/chunk-4bx17ygx.js";
import {
  vT,
  JA,
  tOt,
  ISr
} from "B:/~BUN/root/chunk-9grc6xh0.js";
import {
  _o,
  se,
  t
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  O
} from "B:/~BUN/root/chunk-nggrknsv.js";
import {
  he
} from "B:/~BUN/root/chunk-4qqgabd5.js";
import {
  nn
} from "B:/~BUN/root/chunk-6a9s3k2y.js";
import {
  Gn,
  du,
  vX,
  Mh,
  Du
} from "B:/~BUN/root/chunk-c44qc88s.js";
import {
  xd
} from "B:/~BUN/root/chunk-0n2201tc.js";
import {
  le
} from "B:/~BUN/root/chunk-e7tskyjv.js";
import {
  Je
} from "B:/~BUN/root/chunk-r0jnxjth.js";
import {
  xr
} from "B:/~BUN/root/chunk-vttg4n7q.js";
import {
  Kpe
} from "B:/~BUN/root/chunk-m42n0wc9.js";
import {
  Ngo
} from "B:/~BUN/root/chunk-nq10jsxs.js";
import {
  d4e
} from "B:/~BUN/root/chunk-8wgge4at.js";
import {
  randomUUID as k
} from "crypto";
import {
  resolve as P
} from "path";

function h(e, o) {
  let s = hc();
  if (s.some((m) => $n(P(m)) === o)) return !1;
  return a1([...s, o]), vT(e), JA(e, "directory_added"), d4e(), !0
}
async function WOn(e, o, s) {
  let n = {
    type: "addDirectories",
    directories: [o],
    destination: s ? "localSettings" : "session"
  };
  e.setToolPermissionContext((i) => du(i, n)), h(e.session, o), Je.refreshConfig(), e.storageV5 ? ISr(o, e.storageV5) : ISr(o), Ngo("--add-dir", o, e.storageV5);
  let d;
  if (s) try {
    await vX(n, e.storageV5), d = `Added ${he.bold(o)} as a working directory and saved to local settings`
  } catch (i) {
    d = `Added ${he.bold(o)} as a working directory. Failed to save to local settings: ${i instanceof Error?i.message:"Unknown error"}`
  } else d = `Added ${he.bold(o)} as a working directory for this session`;
  let u = k();
  return tOt(e.session, o, "slash_command", {
    storageV5: e.storageV5,
    credentials: e.credentials
  }).then(async ({
    results: i,
    systemMessages: l
  }) => {
    for (let r of i)
      if (!r.succeeded && r.output) t(`DirectoryAdded hook failed: ${r.output}`, {
        level: "error"
      });
    let a = F(i, (r) => !r.succeeded),
      g = [...await Promise.all(l.map((r, f) => Kpe(r, `add-dir-${u}-${f}`, "systemMessage", {
        storageV5: e.storageV5
      }).then((p) => `DirectoryAdded hook: ${p}`))), ...a > 0 ? [`${a} DirectoryAdded ${O(a,"hook")} failed; output is in the debug log, not shown here`] : []];
    if (g.length > 0) e.messageQueue.enqueuePendingNotification({
      value: g.join(`
`),
      mode: "task-notification",
      skipAttachments: !0,
      agentId: Ze(),
      isMeta: !0
    })
  }).catch((i) => {
    e.messageQueue.enqueuePendingNotification({
      value: `DirectoryAdded hook execution failed: ${i instanceof Error?i.message:String(i)}`,
      mode: "task-notification",
      skipAttachments: !0,
      agentId: Ze(),
      isMeta: !0
    })
  }), d
}

function I3t(e, o) {
  let s = le(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = se(),
    {
      resolvedPath: n,
      isCanonical: d
    } = _o(m, o.absolutePath),
    {
      resolvedPath: u,
      isCanonical: i
    } = _o(m, o.workingDir),
    l = he.bold(Gn(o.directoryPath));
  if (!d || !i) {
    if ([o.absolutePath, o.workingDir].some((c) => Ds(c) || Na(c) || kI(c))) return null;
    return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`
  }
  if (!Mh(o.absolutePath, {
      ...s,
      additionalWorkingDirectories: new Map
    }) || !Du(n, u, {
      caseFold: !1,
      skipPrivateAlias: !0,
      uncShapeParity: !0
    })) {
    let c = Gn(n);
    return n === o.absolutePath ? `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.` : `${l} leads outside the working directory through a link (it resolves to ${he.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`
  }
  if (n === u) return null;
  let a = `${l} is inside the current working directory ${he.bold(Gn(o.workingDir))}`,
    g = nn("projectSettings"),
    r = g && !xr("skills", {
      explicitlyRequested: !0
    }) && !xd("skills"),
    f = g && !xr("agents") && !xd("agents");
  if (!r && !f) return `${a}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let p = r && f ? "skills, commands, and agents" : r ? "skills and commands" : "agents",
    y = h(e.session, o.absolutePath);
  if (y) Je.refreshConfig();
  return y ? `${a}; loading its ${p} for this session.` : `${a}; its ${p} are already included for this session.`
}
export {
  WOn,
  I3t
};
