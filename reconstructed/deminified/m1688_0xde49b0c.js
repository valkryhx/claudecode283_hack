// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { jw } from "B:/~BUN/root/chunk-kbd7ddta.js";
import { si } from "B:/~BUN/root/chunk-yv67t8hr.js";
class x {
  marshaller;
  serializer;
  deserializer;
  serdeContext;
  defaultContentType;
  constructor({
    marshaller: marshaller,
    serializer: serializer,
    deserializer: deserializer,
    serdeContext: serdeContext,
    defaultContentType: defaultContentType
  }) {
    this.marshaller = marshaller, this.serializer = serializer, this.deserializer = deserializer, this.serdeContext = serdeContext, this.defaultContentType = defaultContentType;
  }
  async serializeEventStream({
    eventStream: eventStream,
    requestSchema: requestSchema,
    initialRequest: initialRequest
  }) {
    let marshaller_2 = this.marshaller,
      d = requestSchema.getEventStreamMember(),
      p = requestSchema.getMemberSchema(d),
      serializer_2 = this.serializer,
      f = this.defaultContentType,
      h = Symbol("initialRequestMarker"),
      S = {
        async *[Symbol.asyncIterator]() {
          if (initialRequest) {
            let headers = {
              ":event-type": {
                type: "string",
                value: "initial-request"
              },
              ":message-type": {
                type: "string",
                value: "event"
              },
              ":content-type": {
                type: "string",
                value: f
              }
            };
            serializer_2.write(requestSchema, initialRequest);
            let body = serializer_2.flush();
            yield {
              [h]: !0,
              headers: headers,
              body: body
            };
          }
          for await (let r of eventStream) yield r;
        }
      };
    return marshaller_2.serialize(S, r => {
      if (r[h]) return {
        headers: r.headers,
        body: r.body
      };
      let t = Object.keys(r).find(item => item !== "__type") ?? "",
        {
          additionalHeaders: additionalHeaders,
          body: body_2,
          eventType: l,
          explicitPayloadContentType: explicitPayloadContentType
        } = this.writeEventBody(t, p, r);
      return {
        headers: {
          ":event-type": {
            type: "string",
            value: l
          },
          ":message-type": {
            type: "string",
            value: "event"
          },
          ":content-type": {
            type: "string",
            value: explicitPayloadContentType ?? f
          },
          ...additionalHeaders
        },
        body: body_2
      };
    });
  }
  async deserializeEventStream({
    response: response,
    responseSchema: responseSchema,
    initialResponseContainer: initialResponseContainer
  }) {
    let marshaller_3 = this.marshaller,
      d = responseSchema.getEventStreamMember(),
      y = responseSchema.getMemberSchema(d).getMemberSchemas(),
      f = Symbol("initialResponseMarker"),
      h = marshaller_3.deserialize(response.body, async $unknown => {
        let e = Object.keys($unknown).find(item => item !== "__type") ?? "",
          n = $unknown[e].body;
        if (e === "initial-response") {
          let l = await this.deserializer.read(responseSchema, n);
          return delete l[d], {
            [f]: !0,
            ...l
          };
        } else if (e in y) {
          let l = y[e];
          if (l.isStructSchema()) {
            let c = {},
              u = !1;
            for (let [s, v] of l.structIterator()) {
              let {
                eventHeader: eventHeader,
                eventPayload: eventPayload
              } = v.getMergedTraits();
              if (u = u || Boolean(eventHeader || eventPayload), eventPayload) {
                if (v.isBlobSchema()) c[s] = n;else if (v.isStringSchema()) c[s] = (this.serdeContext?.utf8Encoder ?? z.toUtf8)(n);else if (v.isStructSchema()) c[s] = await this.deserializer.read(v, n);
              } else if (eventHeader) {
                let b = $unknown[e].headers[s]?.value;
                if (b != null) if (v.isNumericSchema()) {
                  if (b && typeof b === "object" && "bytes" in b) c[s] = BigInt(b.toString());else c[s] = Number(b);
                } else c[s] = b;
              }
            }
            if (u) return {
              [e]: c
            };
          }
          return {
            [e]: await this.deserializer.read(l, n)
          };
        } else return {
          $unknown: $unknown
        };
      }),
      S = h[Symbol.asyncIterator](),
      r = await S.next();
    if (r.done) return h;
    if (r.value?.[f]) {
      if (!responseSchema) throw Error("@smithy::core/protocols - initial-response event encountered in event stream but no response schema given.");
      for (let [t, e] of Object.entries(r.value)) initialResponseContainer[t] = e;
    }
    return {
      async *[Symbol.asyncIterator]() {
        if (!r?.value?.[f]) yield r.value;
        while (!0) {
          let {
            done: done,
            value: value
          } = await S.next();
          if (done) break;
          yield value;
        }
      }
    };
  }
  writeEventBody(a, i, o) {
    let serializer_3 = this.serializer,
      eventType = a,
      p = null,
      explicitPayloadContentType_2,
      f = (() => i.getSchema()[4].includes(a))(),
      additionalHeaders_2 = {};
    if (!f) {
      let [t, e] = o[a];
      eventType = t, serializer_3.write(15, e);
    } else {
      let t = i.getMemberSchema(a);
      if (t.isStructSchema()) {
        for (let [e, n] of t.structIterator()) {
          let {
            eventHeader: eventHeader_2,
            eventPayload: eventPayload_2
          } = n.getMergedTraits();
          if (eventPayload_2) {
            p = e;
            break;
          } else if (eventHeader_2) {
            let value_2 = o[a][e],
              type = "binary";
            if (n.isNumericSchema()) {
              if (-2147483648 <= value_2 && value_2 <= 2147483647) type = "integer";else type = "long";
            } else if (n.isTimestampSchema()) type = "timestamp";else if (n.isStringSchema()) type = "string";else if (n.isBooleanSchema()) type = "boolean";
            if (value_2 != null) additionalHeaders_2[e] = {
              type: type,
              value: value_2
            }, delete o[a][e];
          }
        }
        if (p !== null) {
          let e = t.getMemberSchema(p);
          if (e.isBlobSchema()) explicitPayloadContentType_2 = "application/octet-stream";else if (e.isStringSchema()) explicitPayloadContentType_2 = "text/plain";
          serializer_3.write(e, o[a][p]);
        } else serializer_3.write(t, o[a]);
      } else throw Error("@smithy/core/event-streams - non-struct member not supported in event stream union.");
    }
    let S = serializer_3.flush();
    return {
      body: typeof S === "string" ? (this.serdeContext?.utf8Decoder ?? z.fromUtf8)(S) : S,
      eventType: eventType,
      explicitPayloadContentType: explicitPayloadContentType_2,
      additionalHeaders: additionalHeaders_2
    };
  }
}
var z, E;
var M = si(() => {
  z = jw();
  E = x;
});
M();
export { E as EventStreamSerde };