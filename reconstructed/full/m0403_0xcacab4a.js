// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.283
import {
  v
} from "B:/~BUN/root/chunk-bgthmgyc.js";
import {
  H
} from "B:/~BUN/root/chunk-dkxhwhft.js";
import {
  b,
  ce
} from "B:/~BUN/root/chunk-qe2zga5e.js";
import {
  nre
} from "B:/~BUN/root/chunk-2swveyqa.js";
import {
  Uw
} from "B:/~BUN/root/chunk-2d028bdz.js";
import {
  P$t
} from "B:/~BUN/root/chunk-h85nq95q.js";
import {
  constants as o
} from "fs";
import {
  lstat as S,
  mkdir as h,
  open as c
} from "fs/promises";
import {
  basename as F,
  dirname as L,
  isAbsolute as D,
  join as _
} from "path";

function u() {
  let e = Uw();
  return {
    storeDir: e,
    storePath: _(e, ".credentials.json")
  }
}
var p = 0,
  f = 1048576;
async function N(e) {
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    }
  } catch (r) {
    return {
      kind: "error",
      code: v(r)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | p)
    }
  } catch (r) {
    return {
      kind: "error",
      code: v(r)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | o.O_NOFOLLOW | p)
    }
  } catch (r) {
    let n = v(r);
    if (n === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: n
    }
  }
}
async function B(e, r) {
  let n = o.O_WRONLY | o.O_CREAT | o.O_TRUNC;
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    }
  } catch (t) {
    let a = v(t);
    if (a !== "ENOENT") return {
      kind: "error",
      code: a
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n, r)
    }
  } catch (t) {
    return {
      kind: "error",
      code: v(t)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n | o.O_NOFOLLOW, r)
    }
  } catch (t) {
    let a = v(t);
    if (a === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: a
    }
  }
}

function k(e) {
  return e.length > 0 && !e.includes("\x00") && D(e)
}
var A = new Set([".oauth_token", ".api_key", ".session_ingress_token"]);

function y(e) {
  return e === "ENOENT" ? {
    state: "absent"
  } : {
    state: "read-failed",
    code: e
  }
}

function R(e) {
  return e === "ENOENT" ? "absent" : "read-failed"
}

function I(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return "absent";
  return "read-failed"
}
async function E(e) {
  let {
    storePath: r
  } = u(), n = await N(r);
  switch (n.kind) {
    case "refused-symlink":
      return {
        state: "refused-symlink"
      };
    case "error":
      return e(n.code) === "absent" ? {
        state: "absent"
      } : {
        state: "read-failed",
        code: n.code
      };
    case "open": {
      let {
        fileHandle: t
      } = n, a, l, O;
      try {
        let s = await t.stat();
        if (!s.isFile()) {
          if (s.isDirectory()) return e("EISDIR") === "absent" ? {
            state: "absent"
          } : {
            state: "read-failed",
            code: "EISDIR"
          };
          return {
            state: "corrupt"
          }
        }
        if (s.size > f) return {
          state: "corrupt"
        };
        l = s.uid, O = s.mode;
        let i = Buffer.alloc(Math.min(s.size, f) + 1),
          d = 0;
        for (;;) {
          let {
            bytesRead: g
          } = await t.read(i, d, i.length - d, d);
          if (g === 0) break;
          if (d += g, d === i.length) {
            if (i.length > f) return {
              state: "corrupt"
            };
            let w = Buffer.alloc(f + 1);
            i.copy(w, 0, 0, d), i = w
          }
        }
        a = i.toString("utf8", 0, d)
      } catch (s) {
        let i = v(s);
        return e(i) === "absent" ? {
          state: "absent"
        } : {
          state: "read-failed",
          code: i
        }
      } finally {
        await t.close().catch(() => {})
      }
      let m;
      try {
        m = JSON.parse(a)
      } catch {
        return {
          state: "corrupt"
        }
      }
      if (m === null) return {
        state: "absent"
      };
      return {
        state: "present",
        data: m,
        uid: l,
        mode: O
      }
    }
  }
}
var C = {
  readCredentials() {
    return E(R)
  },
  readCredentialsStrict() {
    return E((e) => I(e, "win32"))
  },
  async writeCredentials(e) {
    let {
      storeDir: r,
      storePath: n
    } = u();
    try {
      await ce().mkdir(r), await nre(n, b(e), {
        mode: 384,
        exactMode: 384
      })
    } catch (t) {
      return {
        state: "write-failed",
        code: v(t)
      }
    }
    return {
      state: "written"
    }
  },
  async deleteCredentials() {
    let {
      storePath: e
    } = u();
    return P(e)
  },
  async discardSpentCredentialFile(e) {
    return P(e)
  },
  async readHandoffCredential(e, {
    symlinkAtPath: r
  }) {
    if (!k(e)) return {
      state: "read-failed",
      code: "EINVAL"
    };
    let n;
    if (r === "follow") try {
      n = await c(e, o.O_RDONLY | p)
    } catch (t) {
      return y(v(t))
    } else {
      let t = await N(e);
      switch (t.kind) {
        case "refused-symlink":
          return {
            state: "read-failed", code: "ELOOP"
          };
        case "error":
          return y(t.code);
        case "open":
          n = t.fileHandle
      }
    }
    try {
      if (!(await n.stat()).isFile()) return {
        state: "read-failed",
        code: "EINVAL"
      };
      let t = Buffer.alloc(P$t + 1),
        a = 0;
      for (;;) {
        let {
          bytesRead: l
        } = await n.read(t, a, t.length - a, a);
        if (l === 0) break;
        if (a += l, a > P$t) return {
          state: "read-failed",
          code: "EFBIG"
        }
      }
      return {
        state: "present",
        contents: t.toString("utf8", 0, a)
      }
    } catch (t) {
      return y(v(t))
    } finally {
      await n.close().catch(() => {})
    }
  },
  async writeHandoffCredential(e, r) {
    if (!k(e)) return {
      state: "write-failed",
      code: "EINVAL"
    };
    if (!A.has(F(e))) return {
      state: "write-failed",
      code: "EINVAL"
    };
    try {
      await h(L(e), {
        recursive: !0,
        mode: 448
      })
    } catch (t) {
      return {
        state: "write-failed",
        code: v(t)
      }
    }
    let n = await B(e, 384);
    switch (n.kind) {
      case "refused-symlink":
        return {
          state: "write-failed", code: "ELOOP"
        };
      case "error":
        return {
          state: "write-failed", code: n.code
        };
      case "open":
        try {
          return await n.fileHandle.writeFile(r, {
            encoding: "utf8"
          }), {
            state: "written"
          }
        } catch (t) {
          return {
            state: "write-failed",
            code: v(t)
          }
        } finally {
          await n.fileHandle.close().catch(() => {})
        }
    }
  },
  async probeCredentials() {
    let {
      storePath: e
    } = u(), r;
    try {
      r = await S(e, {
        bigint: !0
      })
    } catch (n) {
      let t = v(n);
      return R(t) === "absent" ? {
        state: "absent"
      } : {
        state: "read-failed",
        code: t
      }
    }
    if (r.isSymbolicLink()) return {
      state: "read-failed",
      code: "ELOOP"
    };
    return {
      state: "present",
      version: `${r.dev}:${r.ino}:${r.size}:${r.mtimeNs}`
    }
  }
};
async function P(e) {
  try {
    return await ce().unlink(e), {
      state: "deleted"
    }
  } catch (r) {
    let n = v(r);
    if (n === "ENOENT") return {
      state: "deleted"
    };
    return {
      state: "delete-failed",
      code: n
    }
  }
}
var T = Symbol("secureStorage.CredentialsStoreHandle");

function MR(e, r = C) {
  return H() && e !== void 0 ? W(r) : void 0
}

function C6e(e) {
  return {
    storageV5: e,
    credentials: MR(e)
  }
}

function W(e = C) {
  return {
    ...e,
    [T]: "CredentialsStoreHandle"
  }
}
export {
  MR,
  C6e
};
