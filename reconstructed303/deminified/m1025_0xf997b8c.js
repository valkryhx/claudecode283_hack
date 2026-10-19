// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
function t(r, inlinedByCreate, printed, readByKit = !1, needsDesignSystem = !1) {
  return {
    path: `artifact-type/reference/${r}`,
    inlinedByCreate: inlinedByCreate,
    printed: printed,
    readByKit: readByKit,
    needsDesignSystem: needsDesignSystem
  };
}
var o9r = new Map([["design", [t("format.md", !0, !0, !0), t("design-system-components.md", !0, !1, !0, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0)]], ["migrated-design", [t("format.md", !0, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0)]], ["slides", [t("format.md", !0, !0, !0), t("fonts.md", !0, !0, !0), t("craft.md", !1, !0), t("deck-files.md", !1, !1, !0)]]]),
  d = [t("format.md", !1, !0), t("fonts.md", !1, !0), t("craft.md", !1, !0)];
function n(r) {
  return (r === void 0 ? void 0 : o9r.get(r)) ?? d;
}
function les(r) {
  return n(r).filter(item => item.inlinedByCreate).map(item => item.path);
}
function des(r) {
  return n(r).filter(item => item.inlinedByCreate && item.needsDesignSystem).map(item => item.path);
}
function Mir(r) {
  return n(r).filter(item => item.printed).map(item => item.path);
}
function ces(r) {
  return n(r).filter(item => item.readByKit).map(item => item.path);
}
export { o9r, les, des, Mir, ces };