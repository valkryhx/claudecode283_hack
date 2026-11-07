// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.
// Version: 2.1.319
var eRe = "Remote Control is only available with claude.ai subscriptions. Please use `/login` to sign in with your claude.ai account.",
  Qnn = "Error: You must be logged in to use Remote Control.\n\nRemote Control is only available with claude.ai subscriptions. Run `claude auth login` to sign in with your claude.ai account.",
  p$n = "To sandbox sessions, set sandbox.enabled to true in settings.",
  Znn = "bridge_folder_already_served",
  TQe = "Remote Control disconnected.",
  obe = "/login",
  ern = "Remote Control got an unexpected server response \u2014 try again after updating Claude Code",
  sbe = "the session refused a request that only the computer it is bound to can sign, so signing in again won't fix it",
  m$n = "Remote Control could not verify the signed-in account \u2014 run /remote-control to reconnect",
  S_o = "signed-in claude.ai account or organization changed on this machine \u2014 run /remote-control to start a session for the current account, or /login to switch back, then /remote-control",
  $Cs = "Remote Control stopped \u2014 the app running this session is signed out of Claude. Sign in there, then turn Remote Control back on",
  UCs = "Remote Control stopped \u2014 the app running this session is now signed in to a different Claude account",
  ogt = "Previous session is unavailable \u2014 run /remote-control to start a new one",
  trn = "Trusted devices now required \u2014 run /remote-control to start a new session",
  BCs = "queued";
export {
  eRe,
  Qnn,
  p$n,
  Znn,
  TQe,
  obe,
  ern,
  sbe,
  m$n,
  S_o,
  $Cs,
  UCs,
  ogt,
  trn,
  BCs
};
