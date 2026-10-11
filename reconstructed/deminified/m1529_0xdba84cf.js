// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { y, c } from "B:/~BUN/root/chunk-kks4mj3w.js";
import { f } from "B:/~BUN/root/chunk-zv3zxqya.js";
import { i } from "B:/~BUN/root/chunk-728mwbhs.js";
import { JFt, Oe, p$, ane } from "B:/~BUN/root/chunk-yehxgs7w.js";
import { Yu, Mse, XTt } from "B:/~BUN/root/chunk-at7axhcd.js";
import { Ilo, hW, ztt, Kwe, Lse } from "B:/~BUN/root/chunk-116h9ckm.js";
import { ev, F7, Wao } from "B:/~BUN/root/chunk-7z8vew74.js";
import { w4 } from "B:/~BUN/root/chunk-s9g1bc10.js";
import { $0e, H7, J_ } from "B:/~BUN/root/chunk-ndb6ecfp.js";
import { me } from "B:/~BUN/root/chunk-fk6j5yf3.js";
import { dTt, uTt, dw, Cse } from "B:/~BUN/root/chunk-0mrty9z0.js";
import { r5t, o5t, s5t, wT, t8, Ope } from "B:/~BUN/root/chunk-8qbd7aj8.js";
import { rh } from "B:/~BUN/root/chunk-d36ctpgs.js";
import { tu } from "B:/~BUN/root/chunk-h9ex720v.js";
import { Ize, U6t, ewe } from "B:/~BUN/root/chunk-xanxfwr0.js";
import { iWe, qj } from "B:/~BUN/root/chunk-xdjz6v9t.js";
import { pF } from "B:/~BUN/root/chunk-zfb6h1v8.js";
import { yur } from "B:/~BUN/root/chunk-q86sc2gv.js";
import { eh } from "B:/~BUN/root/chunk-zav2qxje.js";
import { o, M, ae, C, Qe, fe, z } from "B:/~BUN/root/chunk-n8qdr73v.js";
var w = null,
  F = null,
  k = null;
function B(e, s = ", and ") {
  let t = e.join(s);
  return t === "" ? "" : ` ${t[0].toUpperCase()}${t.slice(1)}.`;
}
var D = " `preflight.js` at the artifact root is reserved: it runs against open pages when Claude publishes updates, and it must be a JavaScript module of at most 8 KiB whose default export is a function, or the publish is refused.";
function T(e) {
  let s = ["publish", "list", "read"];
  if (e.liveEditOn) s.push("sync");
  if (e.readPageDataOpen) s.push("read_page_data");
  if (e.roomOn) s.push("room_send");
  if (e.deleteOn || e.assetsOn) s.push("delete");
  if (e.openOn) s.push("open");
  if (e.pinOn) s.push("pin", "unpin");
  if (e.handlersOn) s.push("get_endpoints", "call_endpoint", "run_script");
  if (e.quickstartOn) s.push("quickstart");
  return s;
}
function G(e) {
  let s = [...XTt, "types"];
  if (e.multiFileOn) s.push("files");
  if (e.assetsOn) s.push("assets");
  return s;
}
function H(e) {
  return ` 'read_page_data' reads the declared data island from the published artifact at \`url\`, validates it against the interaction schema named by \`schema\` (available: ${e.map(item => `'${item}'`).join(", ")}), and returns only its validated typed entries, never page content. It refuses when the island does not match its contract.`;
}
function J(e) {
  return `One of ${T(e).map(item => `'${item}'`).join(", ")}. Omitting it means 'publish'. **Calls** in the description says what each one does and takes, except as noted here.${e.readPageDataOpen ? H(e.enabledSchemaNames) : ""}${e.handlersOn && k ? k.HANDLERS_CLAUSE : ""}`;
}
function m(e, s) {
  let t = e.description ?? "";
  for (let [n, h] of s) t = t.replace(n, h);
  return e.describe(t);
}
function Y(e, s) {
  let shape = s.shape,
    n = (...h) => Object.fromEntries(h.filter(item => item in shape).map(item => [item, shape[item]]));
  return Qe({
    action: z(T(e)).optional().describe(J(e)),
    file_path: o().optional().describe(`publish: the local page Claude publishes (.html, or .md only when a skill says so).${e.typesOn ? " For an Artifact created from an Artifact type, it is one of that Artifact's data files." : ""}${e.assetsOn ? " With `asset: true`, it is the local file Claude uploads." : ""} A short, distinctive basename also serves as the title when nothing else gives one.`),
    ...(e.assetsOn && {
      asset: M().optional().describe(e.copyOn ? "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page \u2014 or, with `from_url` and `asset_ids` in place of `file_path`, copies those assets of another artifact into it server side (see **Calls**)." : "publish with `url`: true uploads `file_path` (or each of `file_paths`) to that artifact's asset store instead of publishing it as the page (see **Calls**)."),
      ...("file_paths" in shape && {
        file_paths: m(shape.file_paths, [["upload_asset:", "publish with `asset: true` only:"]])
      }),
      ...(e.copyOn && "from_url" in shape && {
        from_url: m(shape.from_url, [["copy_from only:", "publish with `asset: true`, in place of `file_path`:"], ["one you can open", "one the person can open"]]),
        asset_ids: m(shape.asset_ids, [["copy_from only:", "publish with `asset: true` and `from_url` only:"], ["(its list_assets or upload_asset results)", '(from a `scope: "assets"` listing of it, or an upload result)']])
      })
    }),
    ...("favicon" in shape && {
      favicon: shape.favicon.describe("Deprecated; Claude omits it and uses `icon`.")
    }),
    ...("icon" in shape && {
      icon: shape.icon.describe(`One short generic word for the artifact's browser-tab icon, such as chart, calendar, recipe, code or map: a plain signifier, never a product or brand name. Claude includes it on every page's first publish and omits it on a redeploy so the artifact keeps its icon, passing a new one only when the person asks.${e.typesOn ? " Ignored on an Artifact created from an Artifact type." : ""}`)
    }),
    ...("files" in shape && !e.copyOn && {
      files: shape.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + D + (e.livePathsOn && w ? w.CORE_FILES_LIVE_DESCRIBE : ""))
    }),
    ...("files" in shape && e.copyOn && {
      files: shape.files.describe(`Supporting files to publish alongside the page, as a map {"published/path": "source/path" | {from, contentType} | {artifact, path, ver?} | null}. The key is what the HTML references. The source is a path on disk, or {from, contentType} when the type cannot be inferred from the published extension. An {artifact, path} source copies that Artifact's published file on the server: an Artifact the person can open, with its type carried over, never an HTML, SVG or XML document, and at most ${Mse} source Artifact versions per publish. null removes that path on an update, and files left out are kept. A plain list publishes each file at its own spelling. Sources must be under the working directory or Claude's scratchpad directory.` + D + (e.livePathsOn && w ? w.CORE_FILES_LIVE_DESCRIBE : ""))
    }),
    ...("root" in shape && {
      root: shape.root.describe("The base directory that relative `files` sources resolve against, like a bundler root. It never changes published paths. It is relative to the working directory, or absolute within it or within Claude's scratchpad directory." + (e.typesOn ? " It requires `files`, except on an Artifact made from a type, where a data `file_path` under it is served at its path relative to it." : " It requires `files`."))
    }),
    ...("live" in shape && w && {
      live: shape.live.describe(w.CORE_LIVE_FIELD_DESCRIBE)
    }),
    ...n("pr_review"),
    ...(e.pinOn && "pin" in shape && {
      pin: shape.pin.describe("publish only: true also pins the published artifact to the person's claude.ai sidebar once it is published. Claude passes it only when the person asked for that. A failed pin never fails the publish, and the result says so.")
    }),
    limit: shape.limit.describe(`list only: the maximum number of artifacts to return (default ${ane}).`),
    scope: z(G(e)).optional().describe(`list: which listing to return. 'mine' is the default. The others are ${["'shared'", "'all'", e.typeCatalogOn ? "'types'" : "", e.multiFileOn ? "'files' (with `url`)" : "", e.assetsOn ? "'assets' (with `url`, continued with `after`)" : ""].filter(Boolean).reduce((acc, item, b, a) => acc + (b === 0 ? "" : b === a.length - 1 ? " and " : ", ") + item, "")}. See **Calls**.`),
    ...(e.typeCatalogOn && {
      type_query: o().max(200).optional().describe("list with scope 'types' only: limits the listing to the types whose title or description match this text best, ignoring case; a type that matches less well is left out, so a narrowed listing is not the whole catalog. Claude omits it when choosing a type for a request, unless a listing made without it says more types exist than it shows."),
      type: o().max(200).optional().describe("list only: the name of a published Artifact type, as a 'types' listing shows it (case does not matter). The listing then shows the Artifacts made from that type instead of the person's gallery. Claude passes this or `type_url`, not both.")
    }),
    ...n("intent", "design_systems"),
    title: o().optional().describe(`publish: the fallback title for an HTML page whose file has no <title>. It is a name, not a summary, and Claude keeps it the same across redeploys.${e.typeCreateOn ? " On a `type_url` create, it is the new Artifact's name: what the person called it, or a short descriptive name. If it is left out, the Artifact is named after the type." : ""}`),
    description: o().max(1000).optional().describe("publish: one sentence for the subtitle on the gallery card."),
    ...("session_context" in shape && {
      session_context: shape.session_context.describe(`Context stored with the version so that a later session can pick up the work: ${Wao}. Required on an artifact's first publish. After that, Claude omits it unless things changed, since it replaces the stored text.`)
    }),
    ...("label" in shape && {
      label: shape.label.describe(`A short name for this publish, at most ${p$} characters (e.g. "Draft to legal"). Optional. It is a few words, not a description.`)
    }),
    ...n("deadline"),
    ...n("overwrite_unread"),
    url: o().optional().describe(`An existing artifact's claude.ai URL. On a publish, it is the artifact to update in place, which must be one the person owns or was given edit access to (a read of it says "writer"); Claude omits it for a new artifact or a redeploy in the same conversation (see **To update an artifact from an earlier conversation**). For read, delete and the other calls that take a URL, it is the artifact to act on.`),
    ...((e.typeCreateOn || e.typeCatalogOn) && {
      type_url: o().max(2048).optional().describe((e.typeCreateOn ? "publish: the Artifact type to create this new, private Artifact from (a link from a 'types' listing). Claude omits `url`. Any `file_path`/`files` passed become the new Artifact's own files beside the type's fixed ones." : "An Artifact type's link.") + (e.typeCatalogOn ? ` read (no \`url\`): the type to describe. list: the type whose Artifacts to list, or Claude names the type with \`type\` instead.${e.typeCreateOn ? "" : " Creating an Artifact from a type is not available in this session, so it is accepted only with those two actions."}` : ""))
    }),
    ...("auto_open" in shape && {
      auto_open: shape.auto_open.describe('Only with `type_url` and no `file_path`: when the new Artifact opens for the person. Claude passes "after_first_write" when it will fill the Artifact right after creating it with a files publish to its url, so the person does not first see it empty. The Artifact then opens on that first write. Otherwise Claude omits it, and the Artifact opens when created; Claude always omits it for a type whose content it writes through a connector, such as a Claude Docs document, since no publish or store write follows to open it.')
    }),
    prompt: o().optional().describe("read, for an artifact shared with the person: what Claude needs from it, which steers the isolated summary."),
    force: M().optional().describe("publish: a last-resort overwrite that **discards** the newer published version. On a conflict, Claude merges its changes onto the newer content that the rejection hands it and publishes again. Claude passes true only when the person explicitly said to discard that specific version, and the server may still refuse it over a version saved from inside the page."),
    ...((e.assetsOn || e.multiFileOn) && {
      out_dir: shape.out_dir.describe("read with `path`: the directory to save into. The default is this artifact's folder in Claude's scratchpad directory, where saving needs no approval." + (e.multiFileOn ? " A published file lands at <out_dir>/<published path>, and saving it outside that default folder asks the person first." : "") + (e.assetsOn ? " An asset's file is named by its id plus its type's extension; saving it outside the default folder is an ordinary file save the person may be asked to approve." : ""))
    }),
    ...((e.assetsOn || e.multiFileOn || e.handlersOn) && {
      path: o().max(e.handlersOn && F ? F.MAX_HANDLER_TARGET_CHARS : ev).optional().describe([e.multiFileOn ? `read: the file's published path inside the artifact, exactly as a 'files' listing printed it ("index.html" is the page itself). The file is saved locally, the result says where, and a small text file's contents are included.` : "", e.assetsOn ? `${e.multiFileOn ? "It can instead be an" : "read: an"} uploaded asset's id (32 hex characters, from an 'assets' listing or an upload result), and that asset is saved to a local file. delete: the id of the one asset to remove.` : "", e.livePathsOn ? "sync: the live file to address." : "", e.handlersOn && k ? k.CALL_HANDLER_PATH_DESCRIBE : ""].filter(Boolean).join(" "))
    }),
    ...("paths" in shape && {
      paths: shape.paths.describe(`read: several published paths in place of \`path\`, up to ${F7} in one call. Each file is saved as a single \`path\` would be, and the result lists where each one landed, or why it could not be read, with small text files' contents included while they fit.`)
    }),
    ...(e.handlersOn && n("method", "body", "body_file", "mode", "script")),
    ...(e.assetsOn && {
      after: o().regex(w4).optional().describe("list with scope 'assets' only: the `next` value from a previous listing, passed to continue it.")
    }),
    ...("page" in shape && {
      page: shape.page.describe(`read only: true returns the rendered page in cases where a read otherwise returns something else.${B([e.liveEditOn && w ? w.CORE_PAGE_LIVE_CLAUSE : "", e.typeCatalogOn ? "a typed Artifact's read leaves out the type's own page" : ""].filter(Boolean))}`)
    }),
    ...("schema" in shape && {
      schema: shape.schema.describe(`The registered interaction schema to validate the page's data island against. Required for read_page_data (e.g. "workshop-decisions"), and meaningless for every other action.`)
    }),
    ...("topic" in shape && {
      topic: shape.topic.describe('room_send only: the event topic, which the page listens to through its room capability. It is lowercase and starts with a letter, followed by letters, digits, "_", "-" or ".", at most 48 characters.')
    }),
    ...(e.roomOn && {
      data: fe(o(), ae()).optional().describe("room_send: the event payload, a JSON object of at most 4 KiB when serialized. Claude omits it for a bare signal.")
    }),
    ...("capabilities" in shape && {
      capabilities: shape.capabilities.describe(`publish: the runtime capabilities this page declares, as {name: config}. Claude loads the \`${eh}\` skill before passing it. On a redeploy Claude omits the field to keep what the page has, and {} clears it.`),
      contract: shape.contract.describe("publish: the artifact's runtime version. Leaving it out keeps the current version (the default), 'latest' upgrades, and an exact version pins or rolls back. It changes how the published page behaves, so Claude passes it only when the author explicitly intends that change.")
    })
  });
}
var x = f(() => Y(t8(), wT()));
function K(e) {
  let action = e.shape.action;
  return Object.keys(hW).filter(item => Ope(action, item));
}
function X() {
  return [...Object.keys(r5t(!0)), ...Object.keys(s5t()), ...Object.keys(o5t()), "data", "out_dir"];
}
function W(e, s, t) {
  let n = K(s);
  if (n.length === 0) return t;
  let shape_2 = s.shape,
    u = Object.fromEntries(X().filter(item => item in shape_2).map(item => [item, shape_2[item]]));
  return Qe({
    ...u,
    ...t.shape,
    action: z([...T(e), ...n]).optional().describe(t.shape.action.description ?? "")
  });
}
var q = f(() => W(t8(), wT(), x()));
function Z(e, s) {
  let shape_3 = s.shape,
    n = s5t();
  return Qe({
    action: z(["read", "reply", "resolve", "watch"]).describe("'read' reads the comment threads on the artifact at `url` (add `thread_id` for one thread, or `cursor` to continue a listing); 'reply' posts `text` into the thread `thread_id`; 'resolve' marks that thread resolved; 'watch' manages this session's artifact watches \u2014 with `url` it starts watching that artifact (`on: false` stops), with no `url` it lists this session's watches and rooms" + (e.watchRail === "live" ? ", and `replies: true` re-enables automatic comment replies that were stopped or paused for the artifact at `url` (only when the user explicitly asked; approved the way a publish is)." : ".")),
    url: o().optional().describe("The artifact's claude.ai URL. Required for every action except a bare 'watch' listing."),
    thread_id: m(n.thread_id, [["comments: read just", "read: read just"], ['action "comments"', 'action "read"']]),
    text: n.text,
    cursor: m(n.cursor, [["comments only:", "read only:"]]),
    acknowledge_duplicate: n.acknowledge_duplicate,
    on: M().optional().describe("watch only: false stops watching the artifact at `url`; omit (or true) to start."),
    ...(e.watchRail === "live" && {
      replies: M().optional().describe("watch only: true re-enables automatic comment replies for the artifact at `url` after the user stopped or paused them \u2014 pass it ONLY when the user explicitly asked to resume.")
    }),
    ...(e.livePathsOn && "path" in shape_3 && {
      path: shape_3.path.describe("watch only: the live file to listen to; required when the Artifact has more than one.")
    })
  });
}
function Q(e) {
  let shape_4 = e.shape,
    t = "old_str" in shape_4,
    n = r5t(t);
  return Qe({
    action: z([...$0e, ...H7, ...(t ? [J_] : []), dw, Cse]).describe(`Reads: 'get' (one document: \`collection\` + \`doc_id\`), 'list' (a page of a collection: \`collection\`, with optional \`query.limit\`/\`query.cursor\`), 'query' (filtered: \`collection\` + \`query\`), 'profiles' (people's display names: \`ids\`, nothing else). Writes: 'set' (replace) or 'update' (merge) with \`collection\`, \`doc_id\`, and either \`data\` or \`file_path\`;${t ? " 'str_replace' with `collection`, `doc_id`, `field`, `old_str`, `new_str` \u2014 swaps one exact, unique piece of text inside a string field without resending the field (`replace_all`: every occurrence);" : ""} 'delete' with \`collection\` + \`doc_id\`; 'batch' with \`writes\`. Every action takes the artifact's \`url\`.`),
    url: o().optional().describe("The artifact's claude.ai URL. Required."),
    writes: m(n.writes, [["write_db with db_op 'batch' only:", "action 'batch' only:"], ["separate write_db calls", "separate calls"]]),
    collection: m(n.collection, [["Required for read_db and write_db.", "Required for every action except 'batch' and 'profiles'."]]),
    ids: C(o()).min(1).max(iWe).optional().describe(`action 'profiles' only: the people to name, 1-${iWe} ids exactly as a document or live event showed them ("u_" plus 22 characters).`),
    doc_id: m(n.doc_id, [["Required for db_op", "Required for action"]]),
    query: m(n.query, [["Options for db_op", "Options for action"]]),
    ...(n.field !== void 0 && {
      field: m(n.field, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]),
      old_str: m(n.old_str, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]),
      new_str: m(n.new_str, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]),
      replace_all: m(n.replace_all, [["write_db with db_op 'str_replace' only:", "action 'str_replace' only:"]]),
      if_version: m(n.if_version, [["write_db with db_op 'set', 'update', 'str_replace' or 'delete'", "action 'set', 'update', 'str_replace' or 'delete'"], ["every read_db document", "every document a get, list or query returns"]])
    }),
    data: fe(o(), ae()).optional().describe('set and update: the document fields to write, as a JSON object \u2014 pass exactly one of `data` or `file_path`. In an update, a field given as `{"__delete__": true}` is removed instead.'),
    file_path: o().optional().describe("set and update: a local JSON file whose top-level object is sent as the document \u2014 an alternative to inline `data`, so a large document need not pass through the conversation."),
    ...("out_dir" in shape_4 && {
      out_dir: shape_4.out_dir.describe("get, list and query: when given, each returned document is written as pretty-printed JSON to <out_dir>/<collection path>/<doc_id>.json (directories created as needed) and the result lists the files instead of the document contents \u2014 use it for large documents or many of them.")
    }),
    as_level: m(n.as_level, [["read_db and write_db only: act", "Act"]])
  });
}
function ee(e) {
  let s = o5t(),
    t = [];
  if (e.verifyOn) t.push("verify");
  if (e.previewOn) t.push("preview");
  return Qe({
    action: z(t.length > 0 ? t : ["verify"]).describe(((e.verifyOn ? dTt : "") + (e.previewOn ? uTt : "")).trim()),
    ...(e.verifyOn && {
      url: o().optional().describe("verify: the artifact's claude.ai URL \u2014 omit to target this session's most recent publish.")
    }),
    ...(e.previewOn && {
      file_path: o().optional().describe("preview: the local .html page to render."),
      widths: s.widths,
      themes: s.themes
    })
  });
}
var hJr = f(() => Z(t8(), wT())),
  yJr = f(() => Q(wT())),
  _Jr = f(() => ee(t8()));
function Xtr(e, s, t) {
  let n = t !== void 0 && typeof s === "object" && s !== null ? t(s, e) : s;
  return ewe(me(e), n, "ask");
}
function Jtr(e, s, t, n, h, u, b = {
  deny: null,
  ask: () => null
}) {
  let a = me(h),
    r = u !== void 0 && typeof t === "object" && t !== null ? u(t, h) : t,
    rule = b.deny ?? ewe(a, r, "deny");
  if (rule) return {
    behavior: "deny",
    message: `Permission to use ${e} has been denied by your rule ${qj(rule)}.`,
    decisionReason: {
      type: "rule",
      rule: rule
    }
  };
  let p = s(),
    rule_2 = p?.behavior === "deny" ? null : b.ask() ?? ewe(a, r, "ask");
  if (!rule_2) return p;
  return p?.behavior === "ask" ? {
    ...p,
    matchedAskRule: p.matchedAskRule ?? rule_2
  } : {
    behavior: "ask",
    message: `Your ask rule ${qj(rule_2)} covers this call, and its full permission check could not complete \u2014 approving covers only this call.`,
    updatedInput: {
      ...n,
      [tu]: !1
    },
    suppressAlwaysAllowRule: !0,
    decisionReason: {
      type: "rule",
      rule: rule_2
    }
  };
}
async function bJr(e, rule_3, t) {
  if (rule_3 === null || e.behavior === "deny") return e;
  return e.behavior === "ask" ? {
    ...e,
    matchedAskRule: e.matchedAskRule ?? rule_3
  } : {
    behavior: "ask",
    message: await t(),
    decisionReason: {
      type: "rule",
      rule: rule_3
    },
    ...("updatedInput" in e && e.updatedInput !== void 0 && {
      updatedInput: e.updatedInput
    })
  };
}
function E(e) {
  let s = e?.action;
  return typeof s === "string" ? s : void 0;
}
function fqt(e, s) {
  if (e === void 0 || !("updatedInput" in e) || e.updatedInput === void 0) return e;
  return {
    ...e,
    updatedInput: s(e.updatedInput)
  };
}
var te = [[/action:? "upload_asset"|\bupload_asset\b/g, "publish with `asset: true`"], [/action:? "read_file"|\bread_file\b/g, "read with a file `path`"], [/action:? "read_asset"|\bread_asset\b/g, "read with an asset id as `path`"], [/action:? "list_files"|\blist_files\b/g, 'list with `scope: "files"`'], [/action:? "list_assets"|\blist_assets\b/g, 'list with `scope: "assets"`'], [/action:? "list_types"|\blist_types\b/g, 'list with `scope: "types"`'], [/action:? "describe_type"|\bdescribe_type\b/g, "read with `type_url`"], [/action:? "delete_asset"|\bdelete_asset\b/g, "delete with an asset id as `path`"], [/action:? "copy_from"|\bcopy_from\b/g, "publish with `asset: true` and `from_url`"], [/`asset_id`/g, "`path` (the asset id)"], [/\basset_id\b/g, "path (the asset id)"]];
function L(e) {
  let s = JFt.exec(e),
    t = s === null ? e.length : s.index,
    n = e.slice(0, t);
  for (let [h, u] of te) n = n.replace(h, u);
  return n + e.slice(t);
}
function se(e) {
  if (typeof e !== "object" || e === null || !("action" in e)) return e;
  let {
    action: action_2,
    ...t
  } = e;
  return t;
}
function V(e) {
  return e !== void 0 && e.behavior === "deny" ? {
    ...e,
    message: L(e.message)
  } : e;
}
var U = {
    delete: 'deleting a whole Artifact is not available in this session \u2014 `delete` here takes `path` (an uploaded asset\'s id, from a `scope: "assets"` listing) and removes that one asset',
    read_asset: "`path` looks like an uploaded asset's id, but this session cannot read an artifact's asset store \u2014 pass a file's published path",
    delete_asset: "`path` looks like an uploaded asset's id, but this session cannot change an artifact's asset store",
    read_file: "reading one published file by `path` is not available in this session \u2014 `path` here takes an uploaded asset's id; read the whole artifact with `url` alone",
    describe_type: "`type_url` here only starts a new Artifact from that type \u2014 reading a type's details is not available in this session",
    copy_from: "copying another artifact's assets (`from_url`) is not available in this session \u2014 `asset: true` here takes a local `file_path` to upload"
  },
  ne = new Set(["body"]);
function P(e) {
  let s = e ?? "publish";
  if (Ope(wT().shape.action, s)) return null;
  return Object.hasOwn(U, s) ? U[s] : `action "${s}" is not available in this session`;
}
function SJr(e, s = {}) {
  let t = Yu,
    n = e,
    h = a => (r, ...d) => n[a].call(e, t() ? Kwe(r) : r, ...d),
    u = a => n[a] === void 0 ? {} : {
      [a]: h(a)
    },
    b = {
      get inputSchema() {
        return t() ? q() : n.inputSchema;
      },
      get inputJSONSchema() {
        return t() ? pF(x()) : n.inputJSONSchema;
      },
      streamedInputRepairExemptKeys() {
        let a = n.streamedInputRepairExemptKeys?.();
        return t() ? new Set([...(a ?? []), ...ne]) : a;
      },
      prompt(a, ...r) {
        return t() ? Promise.resolve(yur(a?.tools)) : n.prompt.call(e, a, ...r);
      },
      isConcurrencySafe: h("isConcurrencySafe"),
      isReadOnly: h("isReadOnly"),
      ...u("isDestructive"),
      ...u("ignoresWholeToolAllowRule"),
      ...u("suppressesAlwaysAllowRule"),
      ...u("getPath"),
      toAutoClassifierInput: h("toAutoClassifierInput"),
      ...u("staleServerClassifierContext"),
      description: h("description"),
      ...u("getToolUseSummary"),
      ...(n.permissionCheckFailureDecision !== void 0 && {
        permissionCheckFailureDecision(a, ...r) {
          let d = r[0],
            p = t(),
            l = p ? Kwe(a) : a,
            _ = me(d),
            R = {
              name: n.name,
              ruleContentField: n.ruleContentField
            };
          return Jtr(n.name, () => {
            let O = n.permissionCheckFailureDecision.call(e, l, ...r);
            return p ? V(fqt(O, Lse)) : O;
          }, l, a, d, s.ruleTargetInput, {
            deny: U6t(_, R, l, "deny"),
            ask: () => U6t(_, R, l, "ask")
          });
        }
      }),
      async checkPermissions(a, ...r) {
        let d = r[0],
          p = t(),
          l = p ? Kwe(a) : a;
        if (p) {
          let v = P(E(l));
          if (v !== null) return {
            behavior: "deny",
            message: v,
            decisionReason: {
              type: "other",
              reason: v
            }
          };
        }
        let _ = p ? l : Lse(a),
          R = _ !== a,
          O = p ? _ : se(_),
          S = {
            name: n.name,
            ruleContentField: n.ruleContentField
          },
          A = me(d),
          rule_4 = (R ? rh(A, S, O, "deny") : null) ?? U6t(A, S, l, "deny");
        if (rule_4) return {
          behavior: "deny",
          message: `Permission to use ${S.name} has been denied by your rule ${qj(rule_4)}.`,
          decisionReason: {
            type: "rule",
            rule: rule_4
          }
        };
        let N = await n.checkPermissions.call(e, l, ...r),
          g = p ? V(fqt(N, Lse)) : N;
        if (g.behavior !== "deny") {
          let v = (R ? rh(A, S, O, "ask") : null) ?? U6t(A, S, l, "ask") ?? Xtr(d, l, s.ruleTargetInput);
          if (v) return g.behavior === "ask" ? {
            ...g,
            matchedAskRule: v
          } : {
            behavior: "ask",
            message: await n.description.call(e, l, ...r),
            decisionReason: {
              type: "rule",
              rule: v
            },
            ...("updatedInput" in g && g.updatedInput !== void 0 && {
              updatedInput: g.updatedInput
            })
          };
        }
        return g;
      },
      ...(n.validateInput !== void 0 && {
        async validateInput(a, ...r) {
          if (!t()) return n.validateInput.call(e, a, ...r);
          let d = Kwe(a),
            p = E(d),
            message = P(p);
          if (message !== null) return {
            result: !1,
            message: message,
            errorCode: 8
          };
          if (p !== void 0 && ztt(p)) i("tengu_artifact_legacy_verb", {
            verb: c(p),
            disposition: y("served")
          });
          let _ = await n.validateInput.call(e, d, ...r);
          return _.result ? _ : {
            ..._,
            message: L(_.message)
          };
        }
      }),
      async call(a, ...r) {
        if (!t()) return n.call.call(e, a, ...r);
        let d = Kwe(a),
          p = P(E(d));
        if (p !== null) throw new Oe(p, "core_verb_unavailable");
        try {
          return await n.call.call(e, d, ...r);
        } catch (error) {
          if (error instanceof Oe) error.message = L(error.message);
          throw error;
        }
      },
      hookMatcherFamilyNames(a) {
        let r = Ize(n, a);
        return r === void 0 ? [] : [r.tool.name];
      },
      coerceInput(a) {
        let r = E(a);
        if (t()) {
          if (r !== void 0 && Ilo.includes(r)) {
            let input = Lse(a);
            return input === a ? null : {
              input: input,
              shapeClass: `artifact_legacy_verb_${r}`
            };
          }
        } else {
          let input_2 = Kwe(a);
          if (input_2 !== a) return {
            input: input_2,
            shapeClass: `artifact_core_verb_${r ?? "publish"}`
          };
        }
        return n.coerceInput?.call(e, a) ?? null;
      }
    };
  return Object.defineProperties(Object.defineProperties({}, Object.getOwnPropertyDescriptors(e)), Object.getOwnPropertyDescriptors(b));
}
export { hJr, yJr, _Jr, Xtr, Jtr, bJr, fqt, SJr };