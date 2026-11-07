// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { De } from "B:/~BUN/root/chunk-vz9zea4j.js";
var a = 50;
function Y6e() {
  let s = De(),
    t = [],
    n = 0;
  return {
    publish(line, level, notice) {
      let u = notice === void 0 ? {
        line: line,
        level: level
      } : {
        line: line,
        level: level,
        notice: notice
      };
      if (n === 0) {
        t = [...t, u].slice(-a);
        return;
      }
      s.emit(u);
    },
    takeBacklog() {
      let e = t;
      return t = [], e;
    },
    subscribe(e) {
      n += 1;
      let i = s.subscribe(e);
      return () => {
        n -= 1, i();
      };
    }
  };
}
export { Y6e };