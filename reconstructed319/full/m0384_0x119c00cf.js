// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  Kz,
  EWn,
  kAe
} from "B:/~BUN/root/chunk-5az22yft.js";
import {
  it
} from "B:/~BUN/root/chunk-09e9xfa4.js";

function WZ(e, t) {
  let r = e?.[t.argument],
    {
      entryKey: n
    } = t;
  if (n === void 0) return [{
    entry: void 0,
    value: r
  }];
  if (!Array.isArray(r)) return [];
  let i = [];
  for (let [o, a] of r.entries())
    if (it(a)) i.push({
      entry: o,
      value: Object.hasOwn(a, n) ? a[n] : void 0
    });
  return i
}

function tZt(e, t, r) {
  let {
    entryKey: n
  } = t;
  if (n === void 0) {
    let o = r.get(void 0);
    return o === void 0 ? {
      ...e
    } : {
      ...e,
      [t.argument]: o
    }
  }
  let i = e[t.argument];
  if (!Array.isArray(i)) return {
    ...e
  };
  return {
    ...e,
    [t.argument]: i.map((o, a) => {
      let s = r.get(a);
      return s === void 0 || !it(o) ? o : {
        ...o,
        [n]: s
      }
    })
  }
}

function Dys(e, t) {
  let r = e[t.argument];
  if (t.entryKey === void 0 || !Array.isArray(r)) return {
    ...e
  };
  return {
    ...e,
    [t.argument]: r.map((n) => it(n) ? {
      ...n
    } : n)
  }
}

function wJe(e) {
  return typeof e === "string" && e.startsWith("sha256:")
}
var Y0e = [{
    path: kAe,
    serverId: Kz,
    policy: "allow_cobalt_plinth",
    uploadPathPrefix: `${kAe}/upload/`,
    ccrEntryPath: EWn
  }],
  f = {
    connectorOrigin: "https://drivemcp.googleapis.com",
    connectorPath: "/mcp/v1",
    desktopMark: "googleDriveFill",
    desktopHostFillMark: "googleDriveHostFill",
    toolName: "create_file",
    argument: "base64Content",
    wrongArguments: ["content"],
    textArgument: "textContent",
    flag: "tengu_clever_bonbon",
    policy: "allow_drive_file_references",
    serviceName: "Google Drive",
    referenceEffect: "uploads the content of the local file it names to Google Drive",
    descriptionHint: "FILE REFERENCES: to upload a file you can read here, don't type its base64; set base64Content to a file reference, sha256:<64 lowercase hex>:<its absolute path, with / between folders>. The app fills in the file's content once the user approves the call.",
    uploadEvent: "tengu_mcp_drive_file_reference_upload",
    featureName: "mcp_drive_file_reference",
    maxFileBytes: 10485760,
    maxFileText: "10 MB"
  },
  l = {
    connectorOrigin: "https://gmailmcp.googleapis.com",
    connectorPath: "/mcp/v1",
    argument: "attachments",
    entryKey: "content",
    wrongArguments: [],
    flag: "tengu_snug_pine",
    serviceName: "Gmail",
    policy: "allow_gmail_file_references",
    referenceEffect: "attaches the content of the local file it names to this Gmail email or draft, for the call's recipients",
    uploadEvent: "tengu_mcp_gmail_file_reference_upload",
    featureName: "mcp_gmail_file_reference",
    maxFileBytes: 10485760,
    maxFileText: "10 MB",
    maxTotalBytes: 24117248,
    maxTotalText: "23 MB",
    maxAttachments: 10,
    proxyFills: {
      toolName: "send_message",
      descriptionIncludes: "ATTACHMENTS: to attach a file from this session"
    }
  },
  c = "FILE REFERENCES: to attach a file you can read here, don't type its base64; set the attachment's content to a file reference, sha256:<64 lowercase hex>:<its absolute path, with / between folders>, and set filename to the file's name. The app fills in the file's content once the user approves the call. An update_draft call removes a draft's files, so to change a draft that has files, make a new draft with the same files.",
  hfo = {
    ...l,
    toolName: "create_draft",
    descriptionHint: c,
    recipientCheck: "draft"
  },
  p = {
    ...l,
    toolName: "update_draft",
    recipientCheck: "never"
  },
  m = {
    ...l,
    toolName: "reply",
    recipientCheck: "other_tool"
  },
  d = {
    ...l,
    toolName: "forward",
    recipientCheck: "other_tool"
  },
  u = {
    ...l,
    toolName: "send_message",
    descriptionHint: c,
    recipientCheck: "send"
  },
  q$ = [f, hfo, p, u, m, d];
export {
  WZ,
  tZt,
  Dys,
  wJe,
  Y0e,
  hfo,
  q$
};
