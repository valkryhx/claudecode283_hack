// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
function t(r, inlinedByCreate, printed, readByKit = !1, needsDesignSystem = !1) {
  return {
    path: `artifact-type/reference/${r}`,
    inlinedByCreate: inlinedByCreate,
    printed: printed,
    readByKit: readByKit,
    needsDesignSystem: needsDesignSystem
  };
}
var D2o = new Map([["design", [t("format.md", !0, !0, !0), t("design-system-components.md", !0, !1, !0, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0)]], ["migrated-design", [t("format.md", !0, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0)]], ["slides", [t("format.md", !0, !0, !0), t("fonts.md", !0, !0, !0), t("craft.md", !1, !0), t("deck-files.md", !1, !1, !0)]]]),
  d = [t("format.md", !1, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0)];
function n(r) {
  return (r === void 0 ? void 0 : D2o.get(r)) ?? d;
}
function noi(r) {
  return n(r).filter(item => item.inlinedByCreate).map(item => item.path);
}
function roi(r) {
  return n(r).filter(item => item.inlinedByCreate && item.needsDesignSystem).map(item => item.path);
}
function Qqr(r) {
  return n(r).filter(item => item.printed).map(item => item.path);
}
function ooi(r) {
  return n(r).filter(item => item.readByKit).map(item => item.path);
}
export { D2o, noi, roi, Qqr, ooi };