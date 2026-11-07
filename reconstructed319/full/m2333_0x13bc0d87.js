// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import "B:/~BUN/root/chunk-j6pt0v41.js";
import "B:/~BUN/root/chunk-q78ga0zw.js";
import "B:/~BUN/root/chunk-db8vh085.js";
import "B:/~BUN/root/chunk-game8aqv.js";
import "B:/~BUN/root/chunk-y1kkrqy9.js";
import "B:/~BUN/root/chunk-2pp12te6.js";
import "B:/~BUN/root/chunk-dayhhbfr.js";
import "B:/~BUN/root/chunk-15vbkr6z.js";
import "B:/~BUN/root/chunk-n8cnxns2.js";
import "B:/~BUN/root/chunk-09sn55yf.js";
import "B:/~BUN/root/chunk-jdtvghyw.js";
import "B:/~BUN/root/chunk-xrwdh0g4.js";
import "B:/~BUN/root/chunk-mwfggkjt.js";
import "B:/~BUN/root/chunk-4jt3t3ds.js";
import {
  ed
} from "B:/~BUN/root/chunk-nk52yc3v.js";
import {
  _a
} from "B:/~BUN/root/chunk-5xe4wxb1.js";
import {
  o,
  oe,
  C,
  u
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
var i = p(() => u({
    skills: C(oe()),
    nextCursor: o().nullish()
  })),
  s = p(() => u({
    skill: oe()
  }));

function c(t, e) {
  return _a(t.client).request({
    method: "skills/list",
    params: e === void 0 ? {} : {
      cursor: e
    }
  }, i(), {
    timeout: ed()
  })
}

function S(t, e, l) {
  return _a(t.client).request({
    method: "skills/get",
    params: {
      uri: e
    }
  }, s(), {
    timeout: ed(),
    signal: l?.signal
  })
}
export {
  S as getMcpSkill, c as listMcpSkillPage
};
