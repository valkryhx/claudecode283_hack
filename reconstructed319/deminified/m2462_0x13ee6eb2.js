// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { wt } from "B:/~BUN/root/chunk-3001qdv8.js";
import { je } from "B:/~BUN/root/chunk-4qfwb3rf.js";
var t = "B:/~BUN/root/core.bash.async.d.ts-a6e9688e.txt.zst";
var e = wt(t, import.meta.dirname);
var s = "B:/~BUN/root/core.bash.sync.d.ts-84d57078.txt.zst";
var sync = wt(s, import.meta.dirname);
var o = "B:/~BUN/root/core.powershell.async.d.ts-8a8d72fb.txt.zst";
var r = wt(o, import.meta.dirname);
var a = "B:/~BUN/root/core.powershell.sync.d.ts-93f6616d.txt.zst";
var sync_2 = wt(a, import.meta.dirname);
var d = je("B:/~BUN/root/team.async.d.ts-t0nj35ss.txt");
var sync_3 = je("B:/~BUN/root/team.sync.d.ts-w4kr6kyy.txt");
var O = {
  core: {
    bash: {
      async: e,
      sync: sync
    },
    powershell: {
      async: r,
      sync: sync_2
    }
  },
  team: {
    async: d,
    sync: sync_3
  }
};
export { O as HELPER_DTS };