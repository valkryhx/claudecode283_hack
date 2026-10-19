// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  k
} from "B:/~BUN/root/chunk-3aez4b53.js";
import {
  W
} from "B:/~BUN/root/chunk-hg8ngszx.js";
import {
  _,
  se
} from "B:/~BUN/root/chunk-6za2ez23.js";
import {
  Uhe
} from "B:/~BUN/root/chunk-rvc0n7zm.js";
import {
  jx
} from "B:/~BUN/root/chunk-q4sexgb0.js";
import {
  hun
} from "B:/~BUN/root/chunk-gvbpfcgq.js";
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
  let e = jx();
  return {
    storeDir: e,
    storePath: D(e, ".credentials.json")
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
      code: k(r)
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
      code: k(r)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | o.O_NOFOLLOW | p)
    }
  } catch (r) {
    let n = k(r);
    if (n === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: n
    }
  }
}
async function v(e, r) {
  let n = o.O_WRONLY | o.O_CREAT | o.O_TRUNC;
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    }
  } catch (t) {
    let a = k(t);
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
      code: k(t)
    }
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n | o.O_NOFOLLOW, r)
    }
  } catch (t) {
    let a = k(t);
    if (a === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: a
    }
  }
}

function R(e) {
  return e.length > 0 && !e.includes("\x00") && L(e)
}
var B = new Set([".oauth_token", ".api_key", ".session_ingress_token"]);

function y(e) {
  return e === "ENOENT" ? {
    state: "absent"
  } : {
    state: "read-failed",
    code: e
  }
}

function E(e) {
  return e === "ENOENT" ? "absent" : "read-failed"
}

function A(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return "absent";
  return "read-failed"
}
async function P(e) {
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
        let i = k(s);
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
    return P(E)
  },
  readCredentialsStrict() {
    return P((e) => A(e, "win32"))
  },
  async writeCredentials(e) {
    let {
      storeDir: r,
      storePath: n
    } = u();
    try {
      await se().mkdir(r), await Uhe(n, _(e), {
        mode: 384,
        exactMode: 384
      })
    } catch (t) {
      return {
        state: "write-failed",
        code: k(t)
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
    return b(e)
  },
  async discardSpentCredentialFile(e) {
    return b(e)
  },
  async readHandoffCredential(e, {
    symlinkAtPath: r
  }) {
    if (!R(e)) return {
      state: "read-failed",
      code: "EINVAL"
    };
    let n;
    if (r === "follow") try {
      n = await c(e, o.O_RDONLY | p)
    } catch (t) {
      return y(k(t))
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
      let t = Buffer.alloc(hun + 1),
        a = 0;
      for (;;) {
        let {
          bytesRead: l
        } = await n.read(t, a, t.length - a, a);
        if (l === 0) break;
        if (a += l, a > hun) return {
          state: "read-failed",
          code: "EFBIG"
        }
      }
      return {
        state: "present",
        contents: t.toString("utf8", 0, a)
      }
    } catch (t) {
      return y(k(t))
    } finally {
      await n.close().catch(() => {})
    }
  },
  async writeHandoffCredential(e, r) {
    if (!R(e)) return {
      state: "write-failed",
      code: "EINVAL"
    };
    if (!B.has(h(e))) return {
      state: "write-failed",
      code: "EINVAL"
    };
    try {
      await H(F(e), {
        recursive: !0,
        mode: 448
      })
    } catch (t) {
      return {
        state: "write-failed",
        code: k(t)
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
          return await n.fileHandle.writeFile(r, {
            encoding: "utf8"
          }), {
            state: "written"
          }
        } catch (t) {
          return {
            state: "write-failed",
            code: k(t)
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
      let t = k(n);
      return E(t) === "absent" ? {
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
async function b(e) {
  try {
    return await se().unlink(e), {
      state: "deleted"
    }
  } catch (r) {
    let n = k(r);
    if (n === "ENOENT") return {
      state: "deleted"
    };
    return {
      state: "delete-failed",
      code: n
    }
  }
}
var I = Symbol("secureStorage.CredentialsStoreHandle");

function jE(e, r = C) {
  return W() && e !== void 0 ? T(r) : void 0
}

function Wmt(e) {
  return {
    storageV5: e,
    credentials: jE(e)
  }
}

function T(e = C) {
  return {
    ...e,
    [I]: "CredentialsStoreHandle"
  }
}
export {
  jE,
  Wmt
};
