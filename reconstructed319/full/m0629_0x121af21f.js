// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  q
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  k
} from "B:/~BUN/root/chunk-y2g9f85n.js";
import {
  _,
  ie
} from "B:/~BUN/root/chunk-2pp12te6.js";
import {
  eK
} from "B:/~BUN/root/chunk-nsneqfcc.js";
import {
  rHe
} from "B:/~BUN/root/chunk-hacd8gcc.js";
import {
  b0r
} from "B:/~BUN/root/chunk-v8nkpg4j.js";
import {
  QGn
} from "B:/~BUN/root/chunk-ca2qz097.js";
import {
  X
} from "B:/~BUN/root/chunk-g9pw24zp.js";
import {
  constants as o
} from "fs";
import {
  lstat as S,
  mkdir as H,
  open as c
} from "fs/promises";
import {
  basename as h,
  dirname as F,
  isAbsolute as L,
  join as D
} from "path";

function u() {
  let e = rHe();
  return e === null ? null : {
    storeDir: e,
    storePath: D(e, ".credentials.json")
  }
}
var p = 0,
  f = 1048576;
async function b(e) {
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    }
  } catch (t) {
    return {
      kind: "error",
      code: k(t)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | p)
    }
  } catch (t) {
    return {
      kind: "error",
      code: k(t)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | o.O_NOFOLLOW | p)
    }
  } catch (t) {
    let n = k(t);
    if (n === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: n
    }
  }
}
async function v(e, t) {
  let n = o.O_WRONLY | o.O_CREAT | o.O_TRUNC;
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    }
  } catch (r) {
    let a = k(r);
    if (a !== "ENOENT") return {
      kind: "error",
      code: a
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n, t)
    }
  } catch (r) {
    return {
      kind: "error",
      code: k(r)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n | o.O_NOFOLLOW, t)
    }
  } catch (r) {
    let a = k(r);
    if (a === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: a
    }
  }
}

function E(e) {
  return e.length > 0 && !e.includes("\x00") && L(e)
}
var T = new Set([".oauth_token", ".api_key", ".session_ingress_token"]);

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

function B(e, t) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && t !== "win32") return "absent";
  return "read-failed"
}
async function P(e) {
  let t = u();
  if (t === null) return {
    state: "absent"
  };
  let n = await b(t.storePath);
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
        fileHandle: r
      } = n, a, l, w;
      try {
        let s = await r.stat();
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
        l = s.uid, w = s.mode;
        let i = Buffer.alloc(Math.min(s.size, f) + 1),
          d = 0;
        for (;;) {
          let {
            bytesRead: C
          } = await r.read(i, d, i.length - d, d);
          if (C === 0) break;
          if (d += C, d === i.length) {
            if (i.length > f) return {
              state: "corrupt"
            };
            let g = Buffer.alloc(f + 1);
            i.copy(g, 0, 0, d), i = g
          }
        }
        a = i.toString("utf8", 0, d)
      } catch (s) {
        let i = k(s);
        return e(i) === "absent" ? {
          state: "absent"
        } : {
          state: "read-failed",
          code: i
        }
      } finally {
        await r.close().catch(() => {})
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
        mode: w
      }
    }
  }
}
var O = {
  readCredentials() {
    return P(R)
  },
  readCredentialsStrict() {
    return P((e) => B(e, "win32"))
  },
  async writeCredentials(e) {
    let t = u();
    if (t === null) return {
      state: "write-failed",
      code: "ENOTSUP"
    };
    let {
      storeDir: n,
      storePath: r
    } = t;
    try {
      await ie().mkdir(n), await eK(r, _(e), {
        mode: 384,
        exactMode: 384,
        flush: !0,
        flushForgivesEbadf: !0
      })
    } catch (a) {
      return await b0r(a), {
        state: "write-failed",
        code: k(a)
      }
    }
    return {
      state: "written"
    }
  },
  async deleteCredentials() {
    let e = u();
    return e === null ? {
      state: "delete-failed",
      code: "ENOTSUP"
    } : N(e.storePath)
  },
  async discardSpentCredentialFile(e) {
    if (q()) return {
      state: "delete-failed",
      code: "ENOTSUP"
    };
    return N(e)
  },
  async readHandoffCredential(e, {
    symlinkAtPath: t
  }) {
    if (q()) return {
      state: "read-failed",
      code: "ENOTSUP"
    };
    if (!E(e)) return {
      state: "read-failed",
      code: "EINVAL"
    };
    let n;
    if (t === "follow") try {
      n = await c(e, o.O_RDONLY | p)
    } catch (r) {
      return y(k(r))
    } else {
      let r = await b(e);
      switch (r.kind) {
        case "refused-symlink":
          return {
            state: "read-failed", code: "ELOOP"
          };
        case "error":
          return y(r.code);
        case "open":
          n = r.fileHandle
      }
    }
    try {
      if (!(await n.stat()).isFile()) return {
        state: "read-failed",
        code: "EINVAL"
      };
      let r = Buffer.alloc(QGn + 1),
        a = 0;
      for (;;) {
        let {
          bytesRead: l
        } = await n.read(r, a, r.length - a, a);
        if (l === 0) break;
        if (a += l, a > QGn) return {
          state: "read-failed",
          code: "EFBIG"
        }
      }
      return {
        state: "present",
        contents: r.toString("utf8", 0, a)
      }
    } catch (r) {
      return y(k(r))
    } finally {
      await n.close().catch(() => {})
    }
  },
  async writeHandoffCredential(e, t) {
    if (q()) return {
      state: "write-failed",
      code: "ENOTSUP"
    };
    if (!E(e)) return {
      state: "write-failed",
      code: "EINVAL"
    };
    if (!T.has(h(e))) return {
      state: "write-failed",
      code: "EINVAL"
    };
    try {
      await H(F(e), {
        recursive: !0,
        mode: 448
      })
    } catch (r) {
      return {
        state: "write-failed",
        code: k(r)
      }
    }
    let n = await v(e, 384);
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
          return await n.fileHandle.writeFile(t, {
            encoding: "utf8"
          }), {
            state: "written"
          }
        } catch (r) {
          return {
            state: "write-failed",
            code: k(r)
          }
        } finally {
          await n.fileHandle.close().catch(() => {})
        }
    }
  },
  async probeCredentials() {
    let e = u();
    if (e === null) return {
      state: "absent"
    };
    let t;
    try {
      t = await S(e.storePath, {
        bigint: !0
      })
    } catch (n) {
      let r = k(n);
      return R(r) === "absent" ? {
        state: "absent"
      } : {
        state: "read-failed",
        code: r
      }
    }
    if (t.isSymbolicLink()) return {
      state: "read-failed",
      code: "ELOOP"
    };
    return {
      state: "present",
      version: `${t.dev}:${t.ino}:${t.size}:${t.mtimeNs}`
    }
  }
};
async function N(e) {
  try {
    return await ie().unlink(e), {
      state: "deleted"
    }
  } catch (t) {
    let n = k(t);
    if (n === "ENOENT") return {
      state: "deleted"
    };
    return {
      state: "delete-failed",
      code: n
    }
  }
}
var A = Symbol("secureStorage.CredentialsStoreHandle");

function TA(e, t = O) {
  return X() && e !== void 0 ? I(t) : void 0
}

function xFt(e) {
  return {
    storageV5: e,
    credentials: TA(e)
  }
}

function I(e = O) {
  return {
    ...e,
    [A]: "CredentialsStoreHandle"
  }
}
export {
  TA,
  xFt
};
