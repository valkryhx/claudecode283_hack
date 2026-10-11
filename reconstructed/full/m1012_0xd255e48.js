// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  qe,
  xu,
  vj
} from "B:/~BUN/root/chunk-4rk7cwxz.js";
import {
  xn,
  Wi,
  FC,
  ns
} from "B:/~BUN/root/chunk-54p0h65d.js";
import {
  cR,
  dR,
  Ort,
  XNn
} from "B:/~BUN/root/chunk-3jyp964r.js";
import {
  jo,
  ce,
  t
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  I
} from "B:/~BUN/root/chunk-y04k89s2.js";
import {
  pe
} from "B:/~BUN/root/chunk-nf4z9ga7.js";
import {
  ar
} from "B:/~BUN/root/chunk-290k5gh5.js";
import {
  Rn,
  vc,
  ZV,
  qy,
  Cp
} from "B:/~BUN/root/chunk-d36ctpgs.js";
import {
  bd
} from "B:/~BUN/root/chunk-mrt797ke.js";
import {
  Br
} from "B:/~BUN/root/chunk-3daz140w.js";
import {
  me
} from "B:/~BUN/root/chunk-fk6j5yf3.js";
import {
  Ge
} from "B:/~BUN/root/chunk-d8zzdckb.js";
import {
  oae
} from "B:/~BUN/root/chunk-1xb1enjd.js";
import {
  kkr
} from "B:/~BUN/root/chunk-9sy3w2pa.js";
import {
  dwt
} from "B:/~BUN/root/chunk-19rbt2k7.js";
import {
  U
} from "B:/~BUN/root/chunk-z1enakv9.js";
import {
  randomUUID as k
} from "crypto";
import {
  resolve as P
} from "path";

function h(e, o) {
  let s = xu();
  if (s.some((m) => xn(P(m)) === o)) return !1;
  return vj([...s, o]), cR(e), dR(e, "directory_added"), dwt(), !0
}
async function N4t(e, o, s) {
  let n = {
    type: "addDirectories",
    directories: [o],
    destination: s ? "localSettings" : "session"
  };
  e.setToolPermissionContext((i) => vc(i, n)), h(e.session, o), Ge.refreshConfig(), e.storageV5 ? XNn(o, e.storageV5) : XNn(o), kkr("--add-dir", o, e.storageV5);
  let d;
  if (s) try {
    await ZV(n, e.storageV5), d = `Added ${pe.bold(o)} as a working directory and saved to local settings`
  } catch (i) {
    d = `Added ${pe.bold(o)} as a working directory. Failed to save to local settings: ${i instanceof Error?i.message:"Unknown error"}`
  } else d = `Added ${pe.bold(o)} as a working directory for this session`;
  let u = k();
  return Ort(e.session, o, "slash_command", {
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
    let a = U(i, (r) => !r.succeeded),
      g = [...await Promise.all(l.map((r, f) => oae(r, `add-dir-${u}-${f}`, "systemMessage", {
        storageV5: e.storageV5
      }).then((p) => `DirectoryAdded hook: ${p}`))), ...a > 0 ? [`${a} DirectoryAdded ${I(a,"hook")} failed; output is in the debug log, not shown here`] : []];
    if (g.length > 0) e.messageQueue.enqueuePendingNotification({
      value: g.join(`
`),
      mode: "task-notification",
      skipAttachments: !0,
      agentId: qe(),
      isMeta: !0
    })
  }).catch((i) => {
    e.messageQueue.enqueuePendingNotification({
      value: `DirectoryAdded hook execution failed: ${i instanceof Error?i.message:String(i)}`,
      mode: "task-notification",
      skipAttachments: !0,
      agentId: qe(),
      isMeta: !0
    })
  }), d
}

function cwt(e, o) {
  let s = me(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = ce(),
    {
      resolvedPath: n,
      isCanonical: d
    } = jo(m, o.absolutePath),
    {
      resolvedPath: u,
      isCanonical: i
    } = jo(m, o.workingDir),
    l = pe.bold(Rn(o.directoryPath));
  if (!d || !i) {
    if ([o.absolutePath, o.workingDir].some((c) => ns(c) || Wi(c) || FC(c))) return null;
    return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`
  }
  if (!qy(o.absolutePath, {
      ...s,
      additionalWorkingDirectories: new Map
    }) || !Cp(n, u, {
      caseFold: !1,
      skipPrivateAlias: !0,
      uncShapeParity: !0
    })) {
    let c = Rn(n);
    return n === o.absolutePath ? `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.` : `${l} leads outside the working directory through a link (it resolves to ${pe.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`
  }
  if (n === u) return null;
  let a = `${l} is inside the current working directory ${pe.bold(Rn(o.workingDir))}`,
    g = ar("projectSettings"),
    r = g && !Br("skills", {
      explicitlyRequested: !0
    }) && !bd("skills"),
    f = g && !Br("agents") && !bd("agents");
  if (!r && !f) return `${a}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let p = r && f ? "skills, commands, and agents" : r ? "skills and commands" : "agents",
    y = h(e.session, o.absolutePath);
  if (y) Ge.refreshConfig();
  return y ? `${a}; loading its ${p} for this session.` : `${a}; its ${p} are already included for this session.`
}
export {
  N4t,
  cwt
};
