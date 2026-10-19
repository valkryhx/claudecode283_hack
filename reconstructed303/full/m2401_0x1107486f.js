// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  x
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  f
} from "B:/~BUN/root/chunk-frrkt2bs.js";
import {
  pd
} from "B:/~BUN/root/chunk-hkc0g0wr.js";
import {
  JQe
} from "B:/~BUN/root/chunk-8ye9n4fk.js";
import {
  Dn
} from "B:/~BUN/root/chunk-pystvv3m.js";
import {
  o,
  T,
  u,
  De,
  C
} from "B:/~BUN/root/chunk-g3snhg6n.js";
var a = "anthropic/uploadsUnderSessionRules",
  AWt = "repo_rules";

function WZs() {
  return {
    experimental: {
      [a]: {
        v: 1
      }
    }
  }
}
var b = f(() => u({
    experimental: u({
      [a]: u({
        v: C(1)
      })
    })
  })),
  p = "anthropic/monitorUnderSessionRules";

function zZs() {
  return {
    experimental: {
      [p]: {
        v: 1
      }
    }
  }
}
var z = f(() => u({
  experimental: u({
    [p]: u({
      v: C(1)
    })
  })
}));
var m = f(() => {
  let e = De({
    projectSettings: T(o()).optional(),
    localSettings: T(o()).optional()
  });
  return De({
    deny: e,
    ask: e
  })
});

function QWr(e, t, s) {
  if (!Dn(t) || !(AWt in t)) return {
    args: t,
    rules: s
  };
  let {
    [AWt]: i, ...c
  } = t, n = JQe(i) ? void 0 : m().safeParse(i).data;
  if (n === void 0) throw new x(`${e} was not run: its ${AWt} could not be read. Retrying won't help.`, "call: the repo rules it brought could not be read");
  let r = s ?? pd();
  return {
    args: c,
    rules: {
      ...r,
      alwaysDenyRules: l(r.alwaysDenyRules, n.deny),
      alwaysAskRules: l(r.alwaysAskRules, n.ask)
    }
  }
}

function l(e, t) {
  return {
    ...e,
    projectSettings: [...e.projectSettings ?? [], ...t.projectSettings ?? []],
    localSettings: [...e.localSettings ?? [], ...t.localSettings ?? []]
  }
}
export {
  AWt,
  WZs,
  zZs,
  QWr
};
