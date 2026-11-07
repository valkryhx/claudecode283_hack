// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
import {
  H
} from "B:/~BUN/root/chunk-game8aqv.js";
import {
  Je
} from "B:/~BUN/root/chunk-9wbhv9z5.js";
class e {
  announcementSlotWinner = null;
  announcementSlotGovernance = null;
  announcementSlotReleased = !1;
  countedNoticeImpressions = new Set;
  startupAnnouncementPick = void 0;
  companyAnnouncement = null;
  fotwContent = null;
  ccCeMigrateGroup = void 0;
  savedModelSuccessorDrawnAt = null;
  emergencyTipShown = null;
  voiceFooterHintCounted = !1;
  voiceFooterHintUnderCap = void 0;
  isLogoRetired = !1;
  reset() {
    this.announcementSlotWinner = null, this.announcementSlotGovernance = null, this.announcementSlotReleased = !1, this.countedNoticeImpressions.clear(), this.startupAnnouncementPick = void 0, this.companyAnnouncement = null, this.fotwContent = null, this.ccCeMigrateGroup = void 0, this.savedModelSuccessorDrawnAt = null
  }
}
var k6o = new Je(() => new e);

function UT() {
  return k6o.of(H())
}
export {
  k6o,
  UT
};
