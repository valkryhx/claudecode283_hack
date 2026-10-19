// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k, Wt } from "B:/~BUN/root/chunk-3aez4b53.js";
import { Ds } from "B:/~BUN/root/chunk-4bx17ygx.js";
import { ke, ii, J5 } from "B:/~BUN/root/chunk-rpez7z7a.js";
import { _, LTe } from "B:/~BUN/root/chunk-6za2ez23.js";
import { l } from "B:/~BUN/root/chunk-c09hf5e4.js";
import { he } from "B:/~BUN/root/chunk-4qqgabd5.js";
import { Nne, it } from "B:/~BUN/root/chunk-ek28wssa.js";
import { FT, d2n, Du } from "B:/~BUN/root/chunk-c44qc88s.js";
import { stat as c } from "fs/promises";
import { dirname as d, resolve as a } from "path";
async function Obe(directoryPath, r) {
  if (!directoryPath) return {
    resultType: "emptyPath"
  };
  if (ii() === null) return {
    resultType: "invalidPath",
    directoryPath: directoryPath,
    containsNullByte: !1
  };
  let absolutePath;
  try {
    absolutePath = a(it(directoryPath));
  } catch (error) {
    let containsNullByte = error instanceof Nne;
    if (!containsNullByte) l(Error("validateDirectoryForWorkspace: expandPath threw"));
    return {
      resultType: "invalidPath",
      directoryPath: directoryPath,
      containsNullByte: containsNullByte
    };
  }
  if (Ds(directoryPath) || (await LTe(absolutePath, J5()))) return {
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
    if (!Wt(error)) l(Object.assign(Error("validateDirectoryForWorkspace: unexpected stat errno"), {
      code: k(error)
    }));
    return {
      resultType: "pathNotFound",
      directoryPath: directoryPath,
      absolutePath: absolutePath
    };
  }
  let n = r.blockReadsOutsideWorkingDirectories ? d2n(r) : FT(r),
    s = ke();
  for (let workingDir of n) if (Du(absolutePath, workingDir, {
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
function Ibe(t) {
  switch (t.resultType) {
    case "emptyPath":
      return "Please provide a directory path.";
    case "invalidPath":
      {
        let r = he.bold(_(t.directoryPath));
        return t.containsNullByte ? `Path ${r} contains a null character, so it can't be used as a working directory. Remove the null character from the path or from the settings entry that lists it.` : `Path ${r} couldn't be resolved, so it can't be used as a working directory. Check the path or the settings entry that lists it.`;
      }
    case "pathNotFound":
      return `Path ${he.bold(t.absolutePath)} was not found.`;
    case "networkPath":
      return `${he.bold(t.directoryPath)} is a network path, which cannot be added as a working directory. On Windows, map the share to a drive letter and pass it at launch with --add-dir (a drive letter added mid-session does not yet carry remote-read trust).`;
    case "notADirectory":
      {
        let r = d(t.absolutePath);
        return `${he.bold(t.directoryPath)} is not a directory. Did you mean to add the parent directory ${he.bold(r)}?`;
      }
    case "alreadyInWorkingDirectory":
      {
        let r = he.bold(t.directoryPath);
        if (t.isExactMatch) return t.isOriginalCwd ? `${r} is already the current working directory.` : `${r} is already added as a working directory.`;
        let e = t.isOriginalCwd ? "the current working directory" : "the additional working directory";
        return `${r} is already accessible within ${e} ${he.bold(t.workingDir)}.`;
      }
    case "success":
      return `Added ${he.bold(t.absolutePath)} as a working directory.`;
  }
}
export { Obe, Ibe };