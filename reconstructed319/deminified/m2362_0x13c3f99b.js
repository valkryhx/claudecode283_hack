// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.319
import { bQ, ige, eW, U5o } from "B:/~BUN/root/chunk-ahv8vexc.js";
import { j0, sge, t1e } from "B:/~BUN/root/chunk-z2e0ksra.js";
import { dvn } from "B:/~BUN/root/chunk-849qxzy0.js";
function qwn(e) {
  if (!e) return {};
  if (e instanceof Headers) return Object.fromEntries(e.entries());
  if (Array.isArray(e)) return Object.fromEntries(e);
  return {
    ...e
  };
}
function ERt(e = fetch, t) {
  if (!t) return e;
  return async (r, s) => {
    let a = {
      ...t,
      ...s,
      headers: s?.headers ? {
        ...qwn(t.headers),
        ...qwn(s.headers)
      } : t.headers
    };
    return e(r, a);
  };
}
var m = {
  initialReconnectionDelay: 1000,
  maxReconnectionDelay: 30000,
  reconnectionDelayGrowFactor: 1.5,
  maxRetries: 2
};
class oge extends Error {
  constructor(e, t) {
    super(`Streamable HTTP error: ${t}`);
    this.code = e;
  }
}
class err {
  constructor(e, t) {
    this._hasCompletedAuthFlow = !1, this._url = e, this._resourceMetadataUrl = void 0, this._scope = void 0, this._requestInit = t?.requestInit, this._authProvider = t?.authProvider, this._fetch = t?.fetch, this._fetchWithInit = ERt(t?.fetch, t?.requestInit), this._sessionId = t?.sessionId, this._reconnectionOptions = t?.reconnectionOptions ?? m;
  }
  async _authThenStart() {
    if (!this._authProvider) throw new j0("No auth provider");
    let e;
    try {
      e = await sge(this._authProvider, {
        serverUrl: this._url,
        resourceMetadataUrl: this._resourceMetadataUrl,
        scope: this._scope,
        fetchFn: this._fetchWithInit
      });
    } catch (error) {
      throw this.onerror?.(error), error;
    }
    if (e !== "AUTHORIZED") throw new j0();
    return await this._startOrAuthSse({
      resumptionToken: void 0
    });
  }
  async _commonHeaders() {
    let e = {};
    if (this._authProvider) {
      let r = await this._authProvider.tokens();
      if (r) e.Authorization = `Bearer ${r.access_token}`;
    }
    if (this._sessionId) e["mcp-session-id"] = this._sessionId;
    if (this._protocolVersion) e["mcp-protocol-version"] = this._protocolVersion;
    let t = qwn(this._requestInit?.headers);
    return new Headers({
      ...e,
      ...t
    });
  }
  async _startOrAuthSse(e) {
    let {
      resumptionToken: resumptionToken
    } = e;
    try {
      let headers = await this._commonHeaders();
      if (headers.set("Accept", "text/event-stream"), resumptionToken) headers.set("last-event-id", resumptionToken);
      let s = await (this._fetch ?? fetch)(this._url, {
        method: "GET",
        headers: headers,
        signal: this._abortController?.signal
      });
      if (!s.ok) {
        if (await s.body?.cancel(), s.status === 401 && this._authProvider) return await this._authThenStart();
        if (s.status === 405) return;
        throw new oge(s.status, `Failed to open SSE stream: ${s.statusText}`);
      }
      this._handleSseStream(s.body, e, !0);
    } catch (error) {
      throw this.onerror?.(error), error;
    }
  }
  _getNextReconnectionDelay(e) {
    if (this._serverRetryMs !== void 0) return this._serverRetryMs;
    let initialReconnectionDelay = this._reconnectionOptions.initialReconnectionDelay,
      reconnectionDelayGrowFactor = this._reconnectionOptions.reconnectionDelayGrowFactor,
      maxReconnectionDelay = this._reconnectionOptions.maxReconnectionDelay;
    return Math.min(initialReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, e), maxReconnectionDelay);
  }
  _scheduleReconnection(e, t = 0) {
    let maxRetries = this._reconnectionOptions.maxRetries;
    if (t >= maxRetries) {
      this.onerror?.(Error(`Maximum reconnection attempts (${maxRetries}) exceeded.`));
      return;
    }
    let s = this._getNextReconnectionDelay(t);
    this._reconnectionTimeout = setTimeout(() => {
      this._startOrAuthSse(e).catch(a => {
        this.onerror?.(Error(`Failed to reconnect SSE stream: ${a instanceof Error ? a.message : String(a)}`)), this._scheduleReconnection(e, t + 1);
      });
    }, s);
  }
  _handleSseStream(e, t, r) {
    if (!e) return;
    let {
        onresumptiontoken: onresumptiontoken,
        replayMessageId: replayMessageId
      } = t,
      resumptionToken_2,
      n = !1,
      u = !1;
    (async () => {
      try {
        let l = e.pipeThrough(new TextDecoderStream()).pipeThrough(new dvn({
          onRetry: o => {
            this._serverRetryMs = o;
          }
        })).getReader();
        while (!0) {
          let {
            value: value,
            done: done
          } = await l.read();
          if (done) break;
          if (value.id) resumptionToken_2 = value.id, n = !0, onresumptiontoken?.(value.id);
          if (!value.data) continue;
          if (!value.event || value.event === "message") try {
            let h = eW.parse(JSON.parse(value.data));
            if (ige(h)) {
              if (u = !0, replayMessageId !== void 0) h.id = replayMessageId;
            }
            this.onmessage?.(h);
          } catch (error) {
            this.onerror?.(error);
          }
        }
        if ((r || n) && !u && this._abortController && !this._abortController.signal.aborted) this._scheduleReconnection({
          resumptionToken: resumptionToken_2,
          onresumptiontoken: onresumptiontoken,
          replayMessageId: replayMessageId
        }, 0);
      } catch (error) {
        if (this.onerror?.(Error(`SSE stream disconnected: ${error}`)), (r || n) && !u && this._abortController && !this._abortController.signal.aborted) try {
          this._scheduleReconnection({
            resumptionToken: resumptionToken_2,
            onresumptiontoken: onresumptiontoken,
            replayMessageId: replayMessageId
          }, 0);
        } catch (error) {
          this.onerror?.(Error(`Failed to reconnect: ${error instanceof Error ? error.message : String(error)}`));
        }
      }
    })();
  }
  async start() {
    if (this._abortController) throw Error("StreamableHTTPClientTransport already started! If using Client class, note that connect() calls start() automatically.");
    this._abortController = new AbortController();
  }
  async finishAuth(authorizationCode) {
    if (!this._authProvider) throw new j0("No auth provider");
    if ((await sge(this._authProvider, {
      serverUrl: this._url,
      authorizationCode: authorizationCode,
      resourceMetadataUrl: this._resourceMetadataUrl,
      scope: this._scope,
      fetchFn: this._fetchWithInit
    })) !== "AUTHORIZED") throw new j0("Failed to authorize");
  }
  async close() {
    if (this._reconnectionTimeout) clearTimeout(this._reconnectionTimeout), this._reconnectionTimeout = void 0;
    this._abortController?.abort(), this.onclose?.();
  }
  async send(e, t) {
    try {
      let {
        resumptionToken: resumptionToken_3,
        onresumptiontoken: onresumptiontoken_2
      } = t || {};
      if (resumptionToken_3) {
        this._startOrAuthSse({
          resumptionToken: resumptionToken_3,
          replayMessageId: bQ(e) ? e.id : void 0
        }).catch(i => this.onerror?.(i));
        return;
      }
      let headers_2 = await this._commonHeaders();
      headers_2.set("content-type", "application/json"), headers_2.set("accept", "application/json, text/event-stream");
      let d = {
          ...this._requestInit,
          method: "POST",
          headers: headers_2,
          body: JSON.stringify(e),
          signal: this._abortController?.signal
        },
        n = await (this._fetch ?? fetch)(this._url, d),
        u = n.headers.get("mcp-session-id");
      if (u) this._sessionId = u;
      if (!n.ok) {
        let i = await n.text().catch(() => null);
        if (n.status === 401 && this._authProvider) {
          if (this._hasCompletedAuthFlow) throw new oge(401, "Server returned 401 after successful authentication");
          let {
            resourceMetadataUrl: resourceMetadataUrl,
            scope: scope
          } = t1e(n);
          if (this._resourceMetadataUrl = resourceMetadataUrl, this._scope = scope, (await sge(this._authProvider, {
            serverUrl: this._url,
            resourceMetadataUrl: this._resourceMetadataUrl,
            scope: this._scope,
            fetchFn: this._fetchWithInit
          })) !== "AUTHORIZED") throw new j0();
          return this._hasCompletedAuthFlow = !0, this.send(e);
        }
        if (n.status === 403 && this._authProvider) {
          let {
            resourceMetadataUrl: resourceMetadataUrl_2,
            scope: scope_2,
            error: error_2
          } = t1e(n);
          if (error_2 === "insufficient_scope") {
            let f = n.headers.get("WWW-Authenticate");
            if (this._lastUpscopingHeader === f) throw new oge(403, "Server returned 403 after trying upscoping");
            if (scope_2) this._scope = scope_2;
            if (resourceMetadataUrl_2) this._resourceMetadataUrl = resourceMetadataUrl_2;
            if (this._lastUpscopingHeader = f ?? void 0, (await sge(this._authProvider, {
              serverUrl: this._url,
              resourceMetadataUrl: this._resourceMetadataUrl,
              scope: this._scope,
              fetchFn: this._fetch
            })) !== "AUTHORIZED") throw new j0();
            return this.send(e);
          }
        }
        throw new oge(n.status, `Error POSTing to endpoint: ${i}`);
      }
      if (this._hasCompletedAuthFlow = !1, this._lastUpscopingHeader = void 0, n.status === 202) {
        if (await n.body?.cancel(), U5o(e)) this._startOrAuthSse({
          resumptionToken: void 0
        }).catch(i => this.onerror?.(i));
        return;
      }
      let l = (Array.isArray(e) ? e : [e]).filter(item => "method" in item && "id" in item && item.id !== void 0).length > 0,
        _ = n.headers.get("content-type");
      if (l) {
        if (_?.includes("text/event-stream")) this._handleSseStream(n.body, {
          onresumptiontoken: onresumptiontoken_2
        }, !1);else if (_?.includes("application/json")) {
          let i = await n.json(),
            o = Array.isArray(i) ? i.map(item => eW.parse(item)) : [eW.parse(i)];
          for (let c of o) this.onmessage?.(c);
        } else throw await n.body?.cancel(), new oge(-1, `Unexpected content type: ${_}`);
      } else await n.body?.cancel();
    } catch (error) {
      throw this.onerror?.(error), error;
    }
  }
  get sessionId() {
    return this._sessionId;
  }
  async terminateSession() {
    if (!this._sessionId) return;
    try {
      let headers_3 = await this._commonHeaders(),
        t = {
          ...this._requestInit,
          method: "DELETE",
          headers: headers_3,
          signal: this._abortController?.signal
        },
        r = await (this._fetch ?? fetch)(this._url, t);
      if (await r.body?.cancel(), !r.ok && r.status !== 405) throw new oge(r.status, `Failed to terminate session: ${r.statusText}`);
      this._sessionId = void 0;
    } catch (error) {
      throw this.onerror?.(error), error;
    }
  }
  setProtocolVersion(e) {
    this._protocolVersion = e;
  }
  get protocolVersion() {
    return this._protocolVersion;
  }
  async resumeStream(resumptionToken_4, t) {
    await this._startOrAuthSse({
      resumptionToken: resumptionToken_4,
      onresumptiontoken: t?.onresumptiontoken
    });
  }
}
export { qwn, ERt, oge, err };