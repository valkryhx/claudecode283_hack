// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { st, Gl, cB } from "B:/~BUN/root/chunk-game8aqv.js";
import { En, Ba, HE, Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { t, io, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { P } from "B:/~BUN/root/chunk-n8cnxns2.js";
import { rNr } from "B:/~BUN/root/chunk-3xdsa4p8.js";
import { Kt } from "B:/~BUN/root/chunk-6n5g80b8.js";
import { I8t, kx, iA, _oo } from "B:/~BUN/root/chunk-27h4st9h.js";
import { sm, mse, Ly, Gc } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { Mr } from "B:/~BUN/root/chunk-xqymp2nr.js";
import { fd } from "B:/~BUN/root/chunk-79dw4seg.js";
import { ur } from "B:/~BUN/root/chunk-y5gyn2hc.js";
import { se } from "B:/~BUN/root/chunk-9bs2y8fc.js";
import { OTe } from "B:/~BUN/root/chunk-tdg0k3wq.js";
import { Ge } from "B:/~BUN/root/chunk-z7bs0q82.js";
import { Qls } from "B:/~BUN/root/chunk-4vcs773m.js";
import { hat } from "B:/~BUN/root/chunk-hxv3mx7q.js";
import { U } from "B:/~BUN/root/chunk-5ha2avah.js";
import { randomUUID as w } from "crypto";
import { join as h, resolve as D } from "path";
function k(e, o) {
  let n = Gl();
  if (n.some(item => En(D(item)) === o)) return !1;
  return cB([...n, o]), kx(e), iA(e, "directory_added"), hat(), !0;
}
async function pnr(e, o, n) {
  let a = {
    type: "addDirectories",
    directories: [o],
    destination: n ? "localSettings" : "session"
  };
  e.setToolPermissionContext(i => sm(i, a)), k(e.session, o), Ge.refreshConfig(), e.storageV5 ? _oo(o, e.storageV5) : _oo(o), Qls("--add-dir", o, e.storageV5);
  let d;
  if (n) try {
    await mse(a, e.storageV5), d = `Added ${Se.bold(o)} as a working directory and saved to local settings`;
  } catch (error) {
    d = `Added ${Se.bold(o)} as a working directory. Failed to save to local settings: ${error instanceof Error ? error.message : "Unknown error"}`;
  } else d = `Added ${Se.bold(o)} as a working directory for this session`;
  let f = w();
  return I8t(e.session, o, "slash_command", {
    storageV5: e.storageV5,
    credentials: e.credentials
  }).then(async ({
    results: results,
    systemMessages: systemMessages
  }) => {
    for (let s of results) if (!s.succeeded && s.output) t(`DirectoryAdded hook failed: ${s.output}`, {
      level: "error"
    });
    let r = U(results, s => !s.succeeded),
      g = [...(await Promise.all(systemMessages.map((item, index) => OTe(item, `add-dir-${f}-${index}`, "systemMessage", {
        storageV5: e.storageV5
      }).then(u => `DirectoryAdded hook: ${u}`)))), ...(r > 0 ? [`${r} DirectoryAdded ${P(r, "hook")} failed; output is in the debug log, not shown here`] : [])];
    if (g.length > 0) e.messageQueue.enqueuePendingNotification({
      value: g.join(`
`),
      mode: "task-notification",
      skipAttachments: !0,
      agentId: st(),
      isMeta: !0
    });
  }).catch(i => {
    e.messageQueue.enqueuePendingNotification({
      value: `DirectoryAdded hook execution failed: ${i instanceof Error ? i.message : String(i)}`,
      mode: "task-notification",
      skipAttachments: !0,
      agentId: st(),
      isMeta: !0
    });
  }), d;
}
function wwn(e, o) {
  let n = se(e);
  if (o.isExactMatch || !o.isOriginalCwd) return null;
  let m = ie(),
    {
      resolvedPath: resolvedPath,
      isCanonical: isCanonical
    } = io(m, o.absolutePath),
    {
      resolvedPath: resolvedPath_2,
      isCanonical: isCanonical_2
    } = io(m, o.workingDir),
    l = Se.bold(Mr(o.directoryPath));
  if (!isCanonical || !isCanonical_2) {
    if ([o.absolutePath, o.workingDir].some(item => Ks(item) || Ba(item) || HE(item))) return null;
    return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`;
  }
  if (!Ly(o.absolutePath, {
    ...n,
    additionalWorkingDirectories: new Map()
  }) || !Gc(resolvedPath, resolvedPath_2, {
    caseFold: !1,
    skipPrivateAlias: !0,
    uncShapeParity: !0
  })) {
    let c = Mr(resolvedPath);
    return resolvedPath === o.absolutePath ? `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.` : `${l} leads outside the working directory through a link (it resolves to ${Se.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`;
  }
  if (resolvedPath === resolvedPath_2) return null;
  let r = `${l} is inside the current working directory ${Se.bold(Mr(o.workingDir))}`,
    g = Kt("projectSettings"),
    s = g && !ur("skills", {
      explicitlyRequested: !0
    }) && !fd("skills"),
    p = g && !ur("agents") && !fd("agents");
  if (!s && !p) return `${r}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
  let u = s && p ? "skills, commands, and agents" : s ? "skills and commands" : "agents";
  if (rNr([o.absolutePath, h(o.absolutePath, ".claude"), h(o.absolutePath, ".claude", "skills"), h(o.absolutePath, ".claude", "commands")])) return `${r}; it is in a connector-downloads folder, where Claude Code saves files downloaded from claude.ai connectors, so its ${u} weren't loaded. To load them, copy the folder to a place outside connector-downloads and add the copy.`;
  let y = k(e.session, o.absolutePath);
  if (y) Ge.refreshConfig();
  return y ? `${r}; loading its ${u} for this session.` : `${r}; its ${u} are already included for this session.`;
}
export { pnr, wwn };