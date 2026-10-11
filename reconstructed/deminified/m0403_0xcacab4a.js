// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { v } from "B:/~BUN/root/chunk-bgthmgyc.js";
import { H } from "B:/~BUN/root/chunk-dkxhwhft.js";
import { b, ce } from "B:/~BUN/root/chunk-qe2zga5e.js";
import { nre } from "B:/~BUN/root/chunk-2swveyqa.js";
import { Uw } from "B:/~BUN/root/chunk-2d028bdz.js";
import { P$t } from "B:/~BUN/root/chunk-h85nq95q.js";
import { constants as o } from "fs";
import { lstat as S, mkdir as h, open as c } from "fs/promises";
import { basename as F, dirname as L, isAbsolute as D, join as _ } from "path";
function u() {
  let storeDir = Uw();
  return {
    storeDir: storeDir,
    storePath: _(storeDir, ".credentials.json")
  };
}
var p = 0,
  f = 1048576;
async function N(e) {
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    };
  } catch (error) {
    return {
      kind: "error",
      code: v(error)
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
      code: v(error)
    };
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, o.O_RDONLY | o.O_NOFOLLOW | p)
    };
  } catch (error) {
    let code = v(error);
    if (code === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: code
    };
  }
}
async function B(e, r) {
  let n = o.O_WRONLY | o.O_CREAT | o.O_TRUNC;
  try {
    if ((await S(e)).isSymbolicLink()) return {
      kind: "refused-symlink"
    };
  } catch (error) {
    let code_2 = v(error);
    if (code_2 !== "ENOENT") return {
      kind: "error",
      code: code_2
    };
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n, r)
    };
  } catch (error) {
    return {
      kind: "error",
      code: v(error)
    };
  }
  try {
    return {
      kind: "open",
      fileHandle: await c(e, n | o.O_NOFOLLOW, r)
    };
  } catch (error) {
    let code_3 = v(error);
    if (code_3 === "ELOOP") return {
      kind: "refused-symlink"
    };
    return {
      kind: "error",
      code: code_3
    };
  }
}
function k(e) {
  return e.length > 0 && !e.includes("\x00") && D(e);
}
var A = new Set([".oauth_token", ".api_key", ".session_ingress_token"]);
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
function I(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return "absent";
  return "read-failed";
}
async function E(e) {
  let {
      storePath: storePath
    } = u(),
    n = await N(storePath);
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
              let w = Buffer.alloc(f + 1);
              i.copy(w, 0, 0, d), i = w;
            }
          }
          a = i.toString("utf8", 0, d);
        } catch (error) {
          let code_5 = v(error);
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
var C = {
  readCredentials() {
    return E(R);
  },
  readCredentialsStrict() {
    return E(e => I(e, "win32"));
  },
  async writeCredentials(e) {
    let {
      storeDir: storeDir_2,
      storePath: storePath_2
    } = u();
    try {
      await ce().mkdir(storeDir_2), await nre(storePath_2, b(e), {
        mode: 384,
        exactMode: 384
      });
    } catch (error) {
      return {
        state: "write-failed",
        code: v(error)
      };
    }
    return {
      state: "written"
    };
  },
  async deleteCredentials() {
    let {
      storePath: storePath_3
    } = u();
    return P(storePath_3);
  },
  async discardSpentCredentialFile(e) {
    return P(e);
  },
  async readHandoffCredential(e, {
    symlinkAtPath: symlinkAtPath
  }) {
    if (!k(e)) return {
      state: "read-failed",
      code: "EINVAL"
    };
    let n;
    if (symlinkAtPath === "follow") try {
      n = await c(e, o.O_RDONLY | p);
    } catch (error) {
      return y(v(error));
    } else {
      let t = await N(e);
      switch (t.kind) {
        case "refused-symlink":
          return {
            state: "read-failed",
            code: "ELOOP"
          };
        case "error":
          return y(t.code);
        case "open":
          n = t.fileHandle;
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
          bytesRead: bytesRead_2
        } = await n.read(t, a, t.length - a, a);
        if (bytesRead_2 === 0) break;
        if (a += bytesRead_2, a > P$t) return {
          state: "read-failed",
          code: "EFBIG"
        };
      }
      return {
        state: "present",
        contents: t.toString("utf8", 0, a)
      };
    } catch (error) {
      return y(v(error));
    } finally {
      await n.close().catch(() => {});
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
      });
    } catch (error) {
      return {
        state: "write-failed",
        code: v(error)
      };
    }
    let n = await B(e, 384);
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
          return await n.fileHandle.writeFile(r, {
            encoding: "utf8"
          }), {
            state: "written"
          };
        } catch (error) {
          return {
            state: "write-failed",
            code: v(error)
          };
        } finally {
          await n.fileHandle.close().catch(() => {});
        }
    }
  },
  async probeCredentials() {
    let {
        storePath: storePath_4
      } = u(),
      r;
    try {
      r = await S(storePath_4, {
        bigint: !0
      });
    } catch (error) {
      let code_6 = v(error);
      return R(code_6) === "absent" ? {
        state: "absent"
      } : {
        state: "read-failed",
        code: code_6
      };
    }
    if (r.isSymbolicLink()) return {
      state: "read-failed",
      code: "ELOOP"
    };
    return {
      state: "present",
      version: `${r.dev}:${r.ino}:${r.size}:${r.mtimeNs}`
    };
  }
};
async function P(e) {
  try {
    return await ce().unlink(e), {
      state: "deleted"
    };
  } catch (error) {
    let code_7 = v(error);
    if (code_7 === "ENOENT") return {
      state: "deleted"
    };
    return {
      state: "delete-failed",
      code: code_7
    };
  }
}
var T = Symbol("secureStorage.CredentialsStoreHandle");
function MR(e, r = C) {
  return H() && e !== void 0 ? W(r) : void 0;
}
function C6e(storageV5) {
  return {
    storageV5: storageV5,
    credentials: MR(storageV5)
  };
}
function W(e = C) {
  return {
    ...e,
    [T]: "CredentialsStoreHandle"
  };
}
export { MR, C6e };