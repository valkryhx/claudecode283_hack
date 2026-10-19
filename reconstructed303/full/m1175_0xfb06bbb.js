// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.303
import {
  at,
  j
} from "B:/~BUN/root/chunk-rpez7z7a.js";
class n {
  announcementSlotWinner = null;
  announcementSlotGovernance = null;
  announcementSlotReleased = !1;
  countedNoticeImpressions = new Set;
  startupAnnouncementPick = void 0;
  companyAnnouncement = null;
  fotwContent = null;
  ccCeMigrateGroup = void 0;
  savedModelSuccessorDrawnAt = null;
  reset() {
    this.announcementSlotWinner = null, this.announcementSlotGovernance = null, this.announcementSlotReleased = !1, this.countedNoticeImpressions.clear(), this.startupAnnouncementPick = void 0, this.companyAnnouncement = null, this.fotwContent = null, this.ccCeMigrateGroup = void 0, this.savedModelSuccessorDrawnAt = null
  }
}
var Reo = new at(() => new n);

function FP() {
  return Reo.of(j())
}
export {
  Reo,
  FP
};
