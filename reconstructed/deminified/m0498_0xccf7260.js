// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v, Et } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { ns } from "B:/~BUN/root/chunk-54p0h65d.js";
import { we, hm, N2 } from "B:/~BUN/root/chunk-4rk7cwxz.js";
import { b, Ade } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { d } from "B:/~BUN/root/chunk-zs3ycjed.js";
import { pe } from "B:/~BUN/root/chunk-nf4z9ga7.js";
import { rde, Ye } from "B:/~BUN/root/chunk-qqgpf856.js";
import { Tw, pln, Cp } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { stat as c } from "fs/promises";
import { dirname as l, resolve as a } from "path";
async function ose(directoryPath, r) {
  if (!directoryPath) return {
    resultType: "emptyPath"
  };
  if (hm() === null) return {
    resultType: "invalidPath",
    directoryPath: directoryPath,
    containsNullByte: !1
  };
  let absolutePath;
  try {
    absolutePath = a(Ye(directoryPath));
  } catch (error) {
    let containsNullByte = error instanceof rde;
    if (!containsNullByte) d(Error("validateDirectoryForWorkspace: expandPath threw"));
    return {
      resultType: "invalidPath",
      directoryPath: directoryPath,
      containsNullByte: containsNullByte
    };
  }
  if (ns(directoryPath) || (await Ade(absolutePath, N2()))) return {
    resultType: "networkPath",
    directoryPath: directoryPath,
    absolutePath: absolutePath
  };
  try {
    if (!(await c(absolutePath)).isDirectory()) return {
      resultType: "notADirectory",
      directoryPath: directoryPath,
      absolutePath: absolutePath
    };
  } catch (error) {
    if (!Et(error)) d(Object.assign(Error("validateDirectoryForWorkspace: unexpected stat errno"), {
      code: v(error)
    }));
    return {
      resultType: "pathNotFound",
      directoryPath: directoryPath,
      absolutePath: absolutePath
    };
  }
  let n = r.blockReadsOutsideWorkingDirectories ? pln(r) : Tw(r),
    s = we();
  for (let workingDir of n) if (Cp(absolutePath, workingDir, {
    caseFold: !1
  })) return {
    resultType: "alreadyInWorkingDirectory",
    directoryPath: directoryPath,
    absolutePath: absolutePath,
    workingDir: workingDir,
    isExactMatch: a(workingDir) === absolutePath,
    isOriginalCwd: workingDir === s
  };
  return {
    resultType: "success",
    absolutePath: absolutePath
  };
}
function sse(t) {
  switch (t.resultType) {
    case "emptyPath":
      return "Please provide a directory path.";
    case "invalidPath":
      {
        let r = pe.bold(b(t.directoryPath));
        return t.containsNullByte ? `Path ${r} contains a null character, so it can't be used as a working directory. Remove the null character from the path or from the settings entry that lists it.` : `Path ${r} couldn't be resolved, so it can't be used as a working directory. Check the path or the settings entry that lists it.`;
      }
    case "pathNotFound":
      return `Path ${pe.bold(t.absolutePath)} was not found.`;
    case "networkPath":
      return `${pe.bold(t.directoryPath)} is a network path, which cannot be added as a working directory. On Windows, map the share to a drive letter and pass it at launch with --add-dir (a drive letter added mid-session does not yet carry remote-read trust).`;
    case "notADirectory":
      {
        let r = l(t.absolutePath);
        return `${pe.bold(t.directoryPath)} is not a directory. Did you mean to add the parent directory ${pe.bold(r)}?`;
      }
    case "alreadyInWorkingDirectory":
      {
        let r = pe.bold(t.directoryPath);
        if (t.isExactMatch) return t.isOriginalCwd ? `${r} is already the current working directory.` : `${r} is already added as a working directory.`;
        let e = t.isOriginalCwd ? "the current working directory" : "the additional working directory";
        return `${r} is already accessible within ${e} ${pe.bold(t.workingDir)}.`;
      }
    case "success":
      return `Added ${pe.bold(t.absolutePath)} as a working directory.`;
  }
}
export { ose, sse };