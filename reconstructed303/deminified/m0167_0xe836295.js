// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { k } from "B:/~BUN/root/chunk-3aez4b53.js";
import { W } from "B:/~BUN/root/chunk-hg8ngszx.js";
import { _, se } from "B:/~BUN/root/chunk-6za2ez23.js";
import { Uhe } from "B:/~BUN/root/chunk-rvc0n7zm.js";
import { jx } from "B:/~BUN/root/chunk-q4sexgb0.js";
import { hun } from "B:/~BUN/root/chunk-gvbpfcgq.js";
import { constants as o } from "fs";
import { lstat as S, mkdir as H, open as c } from "fs/promises";
import { basename as h, dirname as F, isAbsolute as L, join as D } from "path";
function u() {
  let storeDir = jx();
  return {
    storeDir: storeDir,
    storePath: D(storeDir, ".credentials.json")
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
async function v(e, r) {
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
      fileHandle: await c(e, n, r)
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
      fileHandle: await c(e, n | o.O_NOFOLLOW, r)
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
function R(e) {
  return e.length > 0 && !e.includes("\x00") && L(e);
}
var B = new Set([".oauth_token", ".api_key", ".session_ingress_token"]);
function y(code_4) {
  return code_4 === "ENOENT" ? {
    state: "absent"
  } : {
    state: "read-failed",
    code: code_4
  };
}
function E(e) {
  return e === "ENOENT" ? "absent" : "read-failed";
}
function A(e, r) {
  if (e === "ENOENT" || e === "EISDIR" || e === "ENOTDIR") return "absent";
  if ((e === "EACCES" || e === "EPERM") && r !== "win32") return "absent";
  return "read-failed";
}
async function P(e) {
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
var C = {
  readCredentials() {
    return P(E);
  },
  readCredentialsStrict() {
    return P(e => A(e, "win32"));
  },
  async writeCredentials(e) {
    let {
      storeDir: storeDir_2,
      storePath: storePath_2
    } = u();
    try {
      await se().mkdir(storeDir_2), await Uhe(storePath_2, _(e), {
        mode: 384,
        exactMode: 384
      });
    } catch (error) {
      return {
        state: "write-failed",
        code: k(error)
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
    return b(storePath_3);
  },
  async discardSpentCredentialFile(e) {
    return b(e);
  },
  async readHandoffCredential(e, {
    symlinkAtPath: symlinkAtPath
  }) {
    if (!R(e)) return {
      state: "read-failed",
      code: "EINVAL"
    };
    let n;
    if (symlinkAtPath === "follow") try {
      n = await c(e, o.O_RDONLY | p);
    } catch (error) {
      return y(k(error));
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
      let t = Buffer.alloc(hun + 1),
        a = 0;
      for (;;) {
        let {
          bytesRead: bytesRead_2
        } = await n.read(t, a, t.length - a, a);
        if (bytesRead_2 === 0) break;
        if (a += bytesRead_2, a > hun) return {
          state: "read-failed",
          code: "EFBIG"
        };
      }
      return {
        state: "present",
        contents: t.toString("utf8", 0, a)
      };
    } catch (error) {
      return y(k(error));
    } finally {
      await n.close().catch(() => {});
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
          return await n.fileHandle.writeFile(r, {
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
    let {
        storePath: storePath_4
      } = u(),
      r;
    try {
      r = await S(storePath_4, {
        bigint: !0
      });
    } catch (error) {
      let code_6 = k(error);
      return E(code_6) === "absent" ? {
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
async function b(e) {
  try {
    return await se().unlink(e), {
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
var I = Symbol("secureStorage.CredentialsStoreHandle");
function jE(e, r = C) {
  return W() && e !== void 0 ? T(r) : void 0;
}
function Wmt(storageV5) {
  return {
    storageV5: storageV5,
    credentials: jE(storageV5)
  };
}
function T(e = C) {
  return {
    ...e,
    [I]: "CredentialsStoreHandle"
  };
}
export { jE, Wmt };