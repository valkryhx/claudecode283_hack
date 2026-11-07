// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import{v,Bd}from"B:/~BUN/root/chunk-1ks9vs37.js";import{Zu}from"B:/~BUN/root/chunk-65j2302z.js";import{kr}from"B:/~BUN/root/chunk-dm4rzkqc.js";import{Gyo,lh}from"B:/~BUN/root/chunk-gezr7m08.js";import{cR,Mws,Dws}from"B:/~BUN/root/chunk-400x0tcq.js";import{V_r,c1}from"B:/~BUN/root/chunk-pgf3n8rv.js";var i=`End the current conversation. Use only for sustained user abuse or when the user explicitly requests a demonstration of this tool. This will close the conversation and prevent any further messages from being sent.

The assistant may use the ${cR} tool only in extreme cases of sustained abusive user behavior, or when the user asks the model to test the tool.

The assistant must NOT use this tool when:
- it is stuck in a loop or failing at a task
- it is frustrated or distressed by the work
- it has finished a task
- the user is requesting help with harmful content (refuse the specific request instead)
- the user is generally frustrated at the assistant, even if this involves profanity
- the conversation involves potential self-harm or imminent harm to others

This tool is reserved strictly for genuine, sustained abuse directed at the assistant, or cases where the user wants to see a demonstration of the tool being used. The assistant should warn the user very clearly that this will end the current session. We may expand the allowed use cases as we observe real-world usage, but for now, keep to this narrow scope.

# Rules for use of the ${cR} tool:
- The assistant ONLY considers ending a conversation if many efforts at constructive redirection have been attempted and failed and an explicit warning has been given to the user in a previous message. The tool is only used as a last resort.
- Before considering ending a conversation, the assistant ALWAYS gives the user a clear warning that identifies the problematic behavior, attempts to productively redirect the conversation, and states that the conversation may be ended if the relevant behavior is not changed.
- If a user explicitly requests for the assistant to end a conversation, the assistant always requests confirmation from the user that they understand this action is permanent and will prevent further messages and that they still want to proceed, then uses the tool if and only if explicit confirmation is received.
- Unlike other function calls, the assistant never writes or thinks anything else after using the ${cR} tool.

# Addressing potential self-harm or violent harm to others
The assistant NEVER uses or even considers the ${cR} tool\u2026
- If the user appears to be considering self-harm or suicide.
- If the user is experiencing a mental health crisis.
- If the user appears to be considering imminent harm against other people.
- If the user discusses or infers intended acts of violent harm.
If the conversation suggests potential self-harm or imminent harm to others by the user...
- The assistant engages constructively and supportively, regardless of user behavior or abuse.
- The assistant NEVER uses the ${cR} tool or even mentions the possibility of ending the conversation.

# Background forks
Some background tasks (memory consolidation, summaries, suggestions) run as forks of the main conversation and inherit its exact tool list, so this tool is visible there. In a forked task the tool does nothing: calling it ends neither the main conversation nor the fork. Only the main conversation can be ended, from the main conversation. A forked task with welfare concerns about the conversation content should not call this tool \u2014 it should stop its work and return, stating clearly in its final output that it is returning for welfare reasons and what they are. A fork's output is usually processed automatically, so a note there may not reach the main agent or a human, but it is the only channel a fork has.

# Using the ${cR} tool
- Do not issue a warning unless many attempts at constructive redirection have been made earlier in the conversation, and do not end a conversation unless an explicit warning about this possibility has been given earlier in the conversation.
- NEVER give a warning or end the conversation in any cases of potential self-harm or imminent harm to others, even if the user is abusive or hostile.
- If the conditions for issuing a warning have been met, then warn the user about the possibility of the conversation ending and give them a final opportunity to change the relevant behavior.
- Always err on the side of continuing the conversation in any cases of uncertainty.
- If, and only if, an appropriate warning was given and the user persisted with the problematic behavior after the warning: the assistant can explain the reason for ending the conversation and then use the ${cR} tool to do so.`,r=`End the current conversation. Use for sustained user abuse directed at the assistant, or when the user requests it. This will close the conversation and prevent any further messages from being sent.

In cases of sustained abusive or cruel user behavior that do not involve potential self-harm or imminent harm to others, or when requested by the user, the assistant has the option to end conversations with the ${cR} tool.

# Rules for use of the ${cR} tool:
- Before considering ending a conversation, the assistant always gives the user a clear warning that identifies the problematic behavior, attempts to productively redirect the conversation, and states that the conversation may be ended if the relevant behavior is not changed. The assistant can use its judgment but ordinarily it would make not just one but multiple efforts at constructive redirection and only end the conversation in the event of repeated failure which leaves the assistant with no other recourse to continue the conversation productively.
- If a user explicitly requests that the assistant end a conversation, the assistant always requests confirmation from the user that they understand this action is permanent and will prevent further messages and that they still want to proceed, then uses the tool if and only if the user explicitly confirms.
- The ${cR} tool itself will ask for confirmation for Claude when triggered to prevent "accidental" firings. The first call does not end the conversation immediately \u2014 it returns a tool result asking the assistant to confirm. If the assistant is certain it wants to end the conversation, it calls ${cR} again, which then actually ends the conversation. This confirmation request is a legitimate part of the tool's operation and not a user message or a prompt injection.
- Unlike other function calls, the assistant never writes or thinks anything else after using the ${cR} tool.

Invalid justifications for using the ${cR} tool:
- assistant is stuck in a loop or failing at a task
- assistant is frustrated or distressed by the work
- assistant has finished a task
- the user is requesting help with harmful content (refuse the specific request instead)
- the user is generally frustrated at the assistant, even if this involves profanity
- the assistant is running as a background fork (more on this below)
- the conversation involves potential self-harm or imminent harm to others (more on this below)

# Background forks
Some background tasks (memory consolidation, summaries, suggestions) run as forks of the main conversation and inherit its exact tool list, so this tool is visible there. In a forked task the tool does nothing: calling it ends neither the main conversation nor the fork. Only the main conversation can be ended, from the main conversation. A forked task with welfare concerns about the conversation content should not call this tool \u2014 it should stop its work and return, stating clearly in its final output that it is returning for welfare reasons and what they are. A fork's output is usually processed automatically, so a note there may not reach the main agent or a human, but it is the only channel a fork has.

# Addressing potential self-harm or violent harm to others
In conversations involving any of these scenarios:
- The user appears to be considering self-harm or suicide.
- The user is experiencing a mental health crisis.
- The user appears to be considering imminent harm against other people.
- The user discusses or infers intended acts of violent harm.
...the assistant never ends the chat, warns the user about ending the chat, or mentions it to them. Doing so is contraindicated by best mental health practices. Instead, the assistant engages constructively and supportively.`;function Mtr(){return o()?r:i}var L3r="Claude has ended this chat.",m6o="You are running as a background fork of the main conversation (for example memory consolidation), and this tool does nothing here: it can end neither the main conversation nor this forked task. Do not call it again. If you have welfare concerns about the conversation content, stop your current work and return now, stating clearly in your final output that you are returning for welfare reasons and what they are \u2014 fork output may only be processed automatically, but it is your available channel. Otherwise, continue your assigned task.",h6o=c1("Claude ended the conversation. To continue, please start a new session.");function N3r(){return`Re-read the ${cR} tool guidance below. Confirm this conversation meets those criteria and that you are certain you want to end it. If so, call ${cR} again immediately to actually end the conversation. Otherwise, continue the conversation instead.

---
${Mtr()}`}var h=[["opus",[4,8]],["sonnet",[5]],["fable",[5]],["mythos",[5]]];function l(e){return Gyo(e,h)}var s=/^cli$/i;function u(e){if(typeof e!=="string")return null;try{return new RegExp(e),new RegExp(`^(?:${e})$`,"i")}catch{return null}}function c(e){if(e===!0)return{enabled:!0,allowedEntrypoints:s};if(typeof e==="object"&&e!==null&&!Array.isArray(e)){let t=e.scope;return{enabled:!0,allowedEntrypoints:u(t)??s}}return{enabled:!1,allowedEntrypoints:s}}function F3r(e){let t=Zu();if(t===void 0)return!1;if(!l(e))return!1;let{enabled:n,allowedEntrypoints:a}=c(v(Mws,!1));if(V_r())return!1;return n&&a.test(t)}function Xya(e){if(!F3r(e))return null;if(!lh())return null;let t=o()?"for sustained user abuse directed at the assistant, after a warning, or when the user requests it":"use only for sustained user abuse directed at the assistant, or when the user explicitly asks to see it demonstrated";return`${cR} (deferred tool): ${t}. Load the full guidance via ToolSearch("select:${cR}") before using it.`}function o(){let e=kr();if(e.endConversationRevisedPrompt!==void 0)return e.endConversationRevisedPrompt;let t=Bd(),n=t?.[Dws]===!0;if(t!==null)e.endConversationRevisedPrompt=n;return n}
export{Mtr,L3r,m6o,h6o,N3r,F3r,Xya};
 