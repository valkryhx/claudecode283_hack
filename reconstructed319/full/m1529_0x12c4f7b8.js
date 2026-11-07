// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  fTr
} from "B:/~BUN/root/chunk-detjgwj4.js";
import {
  cde
} from "B:/~BUN/root/chunk-27h4st9h.js";
var P6o = new Set(["invoke-command", "start-job", "start-threadjob", "register-scheduledjob"]),
  O6o = new Set(["invoke-command", "invoke-expression", "start-job", "start-threadjob", "register-scheduledjob", "register-engineevent", "register-objectevent", "register-wmievent", "new-pssession", "enter-pssession"]),
  I6o = new Set(["import-module", "ipmo", "install-module", "save-module", "update-module", "install-script", "save-script"]),
  o = ["pwsh", "powershell", "cmd", "bash", "wsl", "sh", "start-process", "start", "add-type", "new-object"];

function s(t) {
  return Object.entries(cde).filter(([, e]) => t.has(e.toLowerCase())).map(([e]) => e)
}
var r = new Set(["invoke-webrequest", "invoke-restmethod"]),
  n = new Set(["set-alias", "sal", "new-alias", "nal", "set-variable", "sv", "new-variable", "nv"]),
  i = new Set(["invoke-wmimethod", "iwmi", "invoke-cimmethod", "icim", "wmic", "wmic.exe"]),
  a = new Set(["select-object", "sort-object", "group-object", "where-object", "measure-object", "write-output", "write-host", "start-sleep", "format-table", "format-list", "format-wide", "format-custom", "out-string", "out-host", "ipconfig", "hostname", "route", "arp"]),
  Hdi = (() => {
    let t = new Set([...o, ...P6o, ...O6o, ...I6o, ...r, ...n, ...i, ...a, "foreach-object", ...fTr.filter((e) => !e.includes(" "))]);
    return new Set([...t, ...s(t)])
  })();
export {
  P6o,
  O6o,
  I6o,
  Hdi
};
