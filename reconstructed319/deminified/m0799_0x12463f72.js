// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { k, qt } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { Ks } from "B:/~BUN/root/chunk-h4acfc9y.js";
import { Ee, Vs, lne } from "B:/~BUN/root/chunk-game8aqv.js";
import { _, u$e } from "B:/~BUN/root/chunk-2pp12te6.js";
import { a } from "B:/~BUN/root/chunk-xrwdh0g4.js";
import { Se } from "B:/~BUN/root/chunk-x24hm796.js";
import { qte, mt } from "B:/~BUN/root/chunk-d10hhz4p.js";
import { sk, utn, Gc } from "B:/~BUN/root/chunk-j05gjqgd.js";
import { stat as d } from "fs/promises";
import { dirname as l, resolve as n } from "path";
async function sIe(directoryPath, r) {
  if (!directoryPath) return {
    resultType: "emptyPath"
  };
  if (Vs() === null) return {
    resultType: "invalidPath",
    directoryPath: directoryPath,
    containsNullByte: !1
  };
  let absolutePath;
  try {
    absolutePath = n(mt(directoryPath));
  } catch (error) {
    let containsNullByte = error instanceof qte;
    if (!containsNullByte) a(Error("validateDirectoryForWorkspace: expandPath threw"));
    return {
      resultType: "invalidPath",
      directoryPath: directoryPath,
      containsNullByte: containsNullByte
    };
  }
  if (Ks(directoryPath) || (await u$e(absolutePath, lne()))) return {
    resultType: "networkPath",
    directoryPath: directoryPath,
    absolutePath: absolutePath
  };
  try {
    if (!(await d(absolutePath)).isDirectory()) return {
      resultType: "notADirectory",
      directoryPath: directoryPath,
      absolutePath: absolutePath
    };
  } catch (error) {
    if (!qt(error)) a(Object.assign(Error("validateDirectoryForWorkspace: unexpected stat errno"), {
      code: k(error)
    }));
    return {
      resultType: "pathNotFound",
      directoryPath: directoryPath,
      absolutePath: absolutePath
    };
  }
  let s = r.blockReadsOutsideWorkingDirectories || r.blockWritesOutsideWorkingDirectories ? utn(r) : sk(r),
    c = Ee();
  for (let workingDir of s) if (Gc(absolutePath, workingDir, {
    caseFold: !1
  })) return {
    resultType: "alreadyInWorkingDirectory",
    directoryPath: directoryPath,
    absolutePath: absolutePath,
    workingDir: workingDir,
    isExactMatch: n(workingDir) === absolutePath,
    isOriginalCwd: workingDir === c
  };
  return {
    resultType: "success",
    absolutePath: absolutePath
  };
}
function iIe(t) {
  switch (t.resultType) {
    case "emptyPath":
      return "Please provide a directory path.";
    case "invalidPath":
      {
        let r = Se.bold(_(t.directoryPath));
        return t.containsNullByte ? `Path ${r} contains a null character, so it can't be used as a working directory. Remove the null character from the path or from the settings entry that lists it.` : `Path ${r} couldn't be resolved, so it can't be used as a working directory. Check the path or the settings entry that lists it.`;
      }
    case "pathNotFound":
      return `Path ${Se.bold(t.absolutePath)} was not found.`;
    case "networkPath":
      return `${Se.bold(t.directoryPath)} is a network path, which cannot be added as a working directory. On Windows, map the share to a drive letter and pass it at launch with --add-dir (a drive letter added mid-session does not yet carry remote-read trust).`;
    case "notADirectory":
      {
        let r = l(t.absolutePath);
        return `${Se.bold(t.directoryPath)} is not a directory. Did you mean to add the parent directory ${Se.bold(r)}?`;
      }
    case "alreadyInWorkingDirectory":
      {
        let r = Se.bold(t.directoryPath);
        if (t.isExactMatch) return t.isOriginalCwd ? `${r} is already the current working directory.` : `${r} is already added as a working directory.`;
        let e = t.isOriginalCwd ? "the current working directory" : "the additional working directory";
        return `${r} is already accessible within ${e} ${Se.bold(t.workingDir)}.`;
      }
    case "success":
      return `Added ${Se.bold(t.absolutePath)} as a working directory.`;
  }
}
export { sIe, iIe };