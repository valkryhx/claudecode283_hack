// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { q } from "B:/~BUN/root/chunk-game8aqv.js";
import { k } from "B:/~BUN/root/chunk-y2g9f85n.js";
import { _, ie } from "B:/~BUN/root/chunk-2pp12te6.js";
import { eK } from "B:/~BUN/root/chunk-nsneqfcc.js";
import { rHe } from "B:/~BUN/root/chunk-hacd8gcc.js";
import { b0r } from "B:/~BUN/root/chunk-v8nkpg4j.js";
import { QGn } from "B:/~BUN/root/chunk-ca2qz097.js";
import { X } from "B:/~BUN/root/chunk-g9pw24zp.js";
import { constants as o } from "fs";
import { lstat as S, mkdir as H, open as c } from "fs/promises";
import { basename as h, dirname as F, isAbsolute as L, join as D } from "path";
function u() {
  let storeDir = rHe();
  return storeDir === null ? null : {
    storeDir: storeDir,
    storePath: D(storeDir, ".credentials.json")
  };
}
var p = 0,
  f = 1048576;
async function b(e) {
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    };
  } catch (error) {
    return {
      kind: "error",
      code: k(error)
    };
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | p)
    };
  } catch (error) {
    return {
      kind: "error",
      code: k(error)
    };
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | o.O_NOFOLLOW | p)
    };
  } catch (error) {
    let code = k(error);
    if (code === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: code
    };
  }
}
async function v(e, t) {
  let n = o.O_WRONLY | o.O_CREAT | o.O_TRUNC;
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    };
  } catch (error) {
    let code_2 = k(error);
    if (code_2 !== "ENOENT") return {
      kind: "error",
      code: code_2
    };
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n, t)
    };
  } catch (error) {
    return {
      kind: "error",
      code: k(error)
    };
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n | o.O_NOFOLLOW, t)
    };
  } catch (error) {
    let code_3 = k(error);
    if (code_3 === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: code_3
    };
  }
}
function E(e) {
  return e.length > 0 && !e.includes("\x00") && L(e);
}
var T = new Set([".oauth_token", ".api_key", ".session_ingress_token"]);
function y(code_4) {
  return code_4 === "ENOENT" ? {
    state: "absent"
  } : {
    state: "read-failed",
    code: code_4
  };
}
function R(e) {
  return e === "ENOENT" ? "absent" : "read-failed";
}
function B(e, t) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && t !== "win32") return "absent";
  return "read-failed";
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
    case "open":
      {
        let {
            fileHandle: fileHandle
          } = n,
          a,
          uid,
          mode;
        try {
          let s = await fileHandle.stat();
          if (!s.isFile()) {
            if (s.isDirectory()) return e("EISDIR") === "absent" ? {
              state: "absent"
            } : {
              state: "read-failed",
              code: "EISDIR"
            };
            return {
              state: "corrupt"
            };
          }
          if (s.size > f) return {
            state: "corrupt"
          };
          uid = s.uid, mode = s.mode;
          let i = Buffer.alloc(Math.min(s.size, f) + 1),
            d = 0;
          for (;;) {
            let {
              bytesRead: bytesRead
            } = await fileHandle.read(i, d, i.length - d, d);
            if (bytesRead === 0) break;
            if (d += bytesRead, d === i.length) {
              if (i.length > f) return {
                state: "corrupt"
              };
              let g = Buffer.alloc(f + 1);
              i.copy(g, 0, 0, d), i = g;
            }
          }
          a = i.toString("utf8", 0, d);
        } catch (error) {
          let code_5 = k(error);
          return e(code_5) === "absent" ? {
            state: "absent"
          } : {
            state: "read-failed",
            code: code_5
          };
        } finally {
          await fileHandle.close().catch(() => {});
        }
        let data;
        try {
          data = JSON.parse(a);
        } catch {
          return {
            state: "corrupt"
          };
        }
        if (data === null) return {
          state: "absent"
        };
        return {
          state: "present",
          data: data,
          uid: uid,
          mode: mode
        };
      }
  }
}
var O = {
  readCredentials() {
    return P(R);
  },
  readCredentialsStrict() {
    return P(e => B(e, "win32"));
  },
  async writeCredentials(e) {
    let t = u();
    if (t === null) return {
      state: "write-failed",
      code: "ENOTSUP"
    };
    let {
      storeDir: storeDir_2,
      storePath: storePath
    } = t;
    try {
      await ie().mkdir(storeDir_2), await eK(storePath, _(e), {
        mode: 384,
        exactMode: 384,
        flush: !0,
        flushForgivesEbadf: !0
      });
    } catch (error) {
      return await b0r(error), {
        state: "write-failed",
        code: k(error)
      };
    }
    return {
      state: "written"
    };
  },
  async deleteCredentials() {
    let e = u();
    return e === null ? {
      state: "delete-failed",
      code: "ENOTSUP"
    } : N(e.storePath);
  },
  async discardSpentCredentialFile(e) {
    if (q()) return {
      state: "delete-failed",
      code: "ENOTSUP"
    };
    return N(e);
  },
  async readHandoffCredential(e, {
    symlinkAtPath: symlinkAtPath
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
    if (symlinkAtPath === "follow") try {
      n = await c(e, o.O_RDONLY | p);
    } catch (error) {
      return y(k(error));
    } else {
      let r = await b(e);
      switch (r.kind) {
        case "refused-symlink":
          return {
            state: "read-failed",
            code: "ELOOP"
          };
        case "error":
          return y(r.code);
        case "open":
          n = r.fileHandle;
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
          bytesRead: bytesRead_2
        } = await n.read(r, a, r.length - a, a);
        if (bytesRead_2 === 0) break;
        if (a += bytesRead_2, a > QGn) return {
          state: "read-failed",
          code: "EFBIG"
        };
      }
      return {
        state: "present",
        contents: r.toString("utf8", 0, a)
      };
    } catch (error) {
      return y(k(error));
    } finally {
      await n.close().catch(() => {});
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
      });
    } catch (error) {
      return {
        state: "write-failed",
        code: k(error)
      };
    }
    let n = await v(e, 384);
    switch (n.kind) {
      case "refused-symlink":
        return {
          state: "write-failed",
          code: "ELOOP"
        };
      case "error":
        return {
          state: "write-failed",
          code: n.code
        };
      case "open":
        try {
          return await n.fileHandle.writeFile(t, {
            encoding: "utf8"
          }), {
            state: "written"
          };
        } catch (error) {
          return {
            state: "write-failed",
            code: k(error)
          };
        } finally {
          await n.fileHandle.close().catch(() => {});
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
      });
    } catch (error) {
      let code_6 = k(error);
      return R(code_6) === "absent" ? {
        state: "absent"
      } : {
        state: "read-failed",
        code: code_6
      };
    }
    if (t.isSymbolicLink()) return {
      state: "read-failed",
      code: "ELOOP"
    };
    return {
      state: "present",
      version: `${t.dev}:${t.ino}:${t.size}:${t.mtimeNs}`
    };
  }
};
async function N(e) {
  try {
    return await ie().unlink(e), {
      state: "deleted"
    };
  } catch (error) {
    let code_7 = k(error);
    if (code_7 === "ENOENT") return {
      state: "deleted"
    };
    return {
      state: "delete-failed",
      code: code_7
    };
  }
}
var A = Symbol("secureStorage.CredentialsStoreHandle");
function TA(e, t = O) {
  return X() && e !== void 0 ? I(t) : void 0;
}
function xFt(storageV5) {
  return {
    storageV5: storageV5,
    credentials: TA(storageV5)
  };
}
function I(e = O) {
  return {
    ...e,
    [A]: "CredentialsStoreHandle"
  };
}
export { TA, xFt };