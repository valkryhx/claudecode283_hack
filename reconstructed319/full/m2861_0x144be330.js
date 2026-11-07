// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import "B:/~BUN/root/chunk-vz9zea4j.js";
import "B:/~BUN/root/chunk-wt4dg253.js";
import "B:/~BUN/root/chunk-drx9cnw1.js";
import "B:/~BUN/root/chunk-y2g9f85n.js";
import "B:/~BUN/root/chunk-r5zmhp23.js";
import "B:/~BUN/root/chunk-h4acfc9y.js";
import "B:/~BUN/root/chunk-ppmmt0c3.js";
import "B:/~BUN/root/chunk-eev762xg.js";
import "B:/~BUN/root/chunk-kjwczfsg.js";
import {
  i
} from "B:/~BUN/root/chunk-j6pt0v41.js";
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
  hR
} from "B:/~BUN/root/chunk-7pxn9dsp.js";
import {
  Is
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  p
} from "B:/~BUN/root/chunk-z6138ats.js";
import {
  Te
} from "B:/~BUN/root/chunk-8f4z6bdn.js";
import "B:/~BUN/root/chunk-zpne314q.js";
import {
  o,
  E,
  I,
  u,
  He,
  B
} from "B:/~BUN/root/chunk-4bfd0jkf.js";
import {
  fm
} from "B:/~BUN/root/chunk-tq5dzbq9.js";
import "B:/~BUN/root/chunk-12nc74pv.js";
import "B:/~BUN/root/chunk-9wbhv9z5.js";
import {
  lstat as c,
  mkdir as P,
  rm as F
} from "fs/promises";
import {
  posix as h
} from "path";
var R = p(() => He({
    file_uuid: o().min(1).max(256),
    name: o().min(1),
    keep_existing: I().optional()
  })),
  W = p(() => u({
    outcome: B(["placed", "kept", "too_large", "failed"]),
    reason: o().regex(/^[a-z_]{1,32}$/).optional(),
    sha256: o().regex(fm).optional(),
    size: E().int().nonnegative().optional()
  }));
async function M(y, r, {
  heldDirectory: w,
  isPlaceableName: g,
  placeUnlessFileStands: _,
  refuseLinkToNetworkPath: A
}) {
  let t = R().parse(y);
  if (!g(t.name)) throw Error('name must be a file name of at most 255 bytes, with no directory, that does not begin with ".stage-tmp."');
  if (Te() !== "firstParty") return {
    summary: "not downloaded: not permitted on this API provider",
    output: {
      outcome: "failed",
      reason: "not_first_party"
    }
  };
  let a = hR();
  await A(a), await P(a, {
    recursive: !0
  });
  await using l = await w(a);
  let s = h.join(l.path, t.name);
  if (t.keep_existing && await c(s).then((n) => n.isFile(), () => !1)) return {
    summary: "left the file that was there",
    output: {
      outcome: "kept"
    }
  };
  let [{
    DOWNLOAD_TRIES: f,
    downloadWithRetries: b
  }, {
    openSpill: z
  }, {
    getBridgeAccessToken: k,
    getBridgeBaseUrlOverride: T,
    isBridgeFileLoginRefused: v
  }, {
    settleStoredLoginRefusal: x
  }] = await Promise.all([import("B:/~BUN/root/chunk-4ng3jwh1.js"), import("B:/~BUN/root/chunk-z2kzm89w.js"), import("B:/~BUN/root/chunk-b8gcvcy8.js"), import("B:/~BUN/root/chunk-g01bqwf1.js")]);
  if (await x(), v()) return {
    summary: "not downloaded (reason code: stored_login_refused)",
    output: {
      outcome: "failed",
      reason: "stored_login_refused"
    }
  };
  let d = new AbortController,
    m = () => d.abort();
  if (r.addEventListener("abort", m, {
      once: !0
    }), r.aborted) m();
  let e = await b(t.keep_existing ? f.noTurn : f.startsTurn, 0, d, void 0, {
    fileUuid: t.file_uuid,
    baseUrl: T() ?? i.ANTHROPIC_BASE_URL,
    modelCopy: !1,
    forPrefetch: !1,
    maxBytes: 0,
    spillTo: () => z({
      at: l.path,
      release: async () => {}
    }, h.join(a, t.name), 292),
    token: k,
    admitBytes: () => !0
  });
  if (r.removeEventListener("abort", m), "failure" in e) return e.failure === "too_large" ? {
    summary: "not downloaded: over 500 MiB",
    output: {
      outcome: "too_large"
    }
  } : {
    summary: `not downloaded (reason code: ${e.failure})`,
    output: {
      outcome: "failed",
      reason: e.failure
    }
  };
  if ("writeFailed" in e) return {
    summary: "not placed: a write to disk failed",
    output: {
      outcome: "failed",
      reason: "write"
    }
  };
  if ("data" in e) return {
    summary: "not placed: the file is empty",
    output: {
      outcome: "failed",
      reason: "empty"
    }
  };
  try {
    r.throwIfAborted();
    let n = await c(e.file.path);
    if (`${n.dev}:${n.ino}` !== e.file.identity) return {
      summary: "not placed: the downloaded file was replaced",
      output: {
        outcome: "failed",
        reason: "replaced"
      }
    };
    if (!t.keep_existing) await Is(e.file.path, s);
    else if (!await _(e.file.path, s)) return {
      summary: "left the file that was there",
      output: {
        outcome: "kept"
      }
    };
    return {
      summary: `placed ${e.file.size} bytes`,
      output: {
        outcome: "placed",
        sha256: e.file.sha256,
        size: e.file.size
      }
    }
  } finally {
    await F(e.file.path, {
      force: !0
    }).catch(() => {})
  }
}
export {
  M as fetchAttachmentHere
};
