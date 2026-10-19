// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.303
import { fHt } from "B:/~BUN/root/chunk-64gzckqq.js";
import { AO } from "B:/~BUN/root/chunk-ckxm3hbs.js";
import { bg, t1o } from "B:/~BUN/root/chunk-07c8fw5z.js";
import { jjo, rC } from "B:/~BUN/root/chunk-80e5c2dj.js";
import { R } from "B:/~BUN/root/chunk-ef0msk7r.js";
var RXe = R(function (Re) {
  var f = fHt(),
    d = rC(),
    ue = jjo(),
    Y = bg(),
    M = AO(),
    _ = t1o(),
    K = "X-Amz-Algorithm",
    j = "X-Amz-Credential",
    U = "X-Amz-Date",
    Q = "X-Amz-SignedHeaders",
    V = "X-Amz-Expires",
    v = "X-Amz-Signature",
    x = "X-Amz-Security-Token",
    Ae = "X-Amz-Region-Set",
    P = "authorization",
    N = U.toLowerCase(),
    q = "date",
    z = [P, N, q],
    B = v.toLowerCase(),
    T = "x-amz-content-sha256",
    X = x.toLowerCase(),
    Ee = "host",
    F = {
      authorization: !0,
      "cache-control": !0,
      connection: !0,
      expect: !0,
      from: !0,
      "keep-alive": !0,
      "max-forwards": !0,
      pragma: !0,
      referer: !0,
      te: !0,
      trailer: !0,
      "transfer-encoding": !0,
      upgrade: !0,
      "user-agent": !0,
      "x-amzn-trace-id": !0
    },
    W = /^proxy-/,
    Z = /^sec-/,
    he = [/^proxy-/i, /^sec-/i],
    w = "AWS4-HMAC-SHA256",
    fe = "AWS4-ECDSA-P256-SHA256",
    J = "AWS4-HMAC-SHA256-PAYLOAD",
    ee = "UNSIGNED-PAYLOAD",
    te = 50,
    b = "aws4_request",
    se = 604800,
    y = {},
    D = [],
    H = (e, t, r) => `${e}/${t}/${r}/${b}`,
    re = async (e, t, r, s, n) => {
      let a = await G(e, t.secretAccessKey, t.accessKeyId),
        o = `${r}:${s}:${n}:${f.toHex(a)}:${t.sessionToken}`;
      if (o in y) return y[o];
      D.push(o);
      while (D.length > te) delete y[D.shift()];
      let i = `AWS4${t.secretAccessKey}`;
      for (let c of [r, s, n, b]) i = await G(e, i, c);
      return y[o] = i;
    },
    le = () => {
      D.length = 0, Object.keys(y).forEach(item => {
        delete y[item];
      });
    },
    G = (e, t, r) => {
      let s = new e(t);
      return s.update(d.toUint8Array(r)), s.digest();
    },
    I = ({
      headers: headers
    }, t, r) => {
      let s = {};
      for (let n of Object.keys(headers).sort()) {
        if (headers[n] == null) continue;
        let a = n.toLowerCase();
        if (a in F || t?.has(a) || W.test(a) || Z.test(a)) {
          if (!r || r && !r.has(a)) continue;
        }
        s[a] = headers[n].trim().replace(/\s+/g, " ");
      }
      return s;
    },
    S = async ({
      headers: headers_2,
      body: body
    }, r) => {
      for (let s of Object.keys(headers_2)) if (s.toLowerCase() === T) return headers_2[s];
      if (body == null) return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";else if (typeof body === "string" || ArrayBuffer.isView(body) || ue.isArrayBuffer(body)) {
        let s = new r();
        return s.update(d.toUint8Array(body)), f.toHex(await s.digest());
      }
      return ee;
    };
  class ne {
    format(e) {
      let t = [];
      for (let n of Object.keys(e)) {
        let a = d.fromUtf8(n);
        t.push(Uint8Array.from([a.byteLength]), a, this.formatHeaderValue(e[n]));
      }
      let uint8Array = new Uint8Array(t.reduce((acc, item) => acc + item.byteLength, 0)),
        s = 0;
      for (let n of t) uint8Array.set(n, s), s += n.byteLength;
      return uint8Array;
    }
    formatHeaderValue(e) {
      switch (e.type) {
        case "boolean":
          return Uint8Array.from([e.value ? 0 : 1]);
        case "byte":
          return Uint8Array.from([2, e.value]);
        case "short":
          let dataView = new DataView(new ArrayBuffer(3));
          return dataView.setUint8(0, 3), dataView.setInt16(1, e.value, !1), new Uint8Array(dataView.buffer);
        case "integer":
          let dataView_2 = new DataView(new ArrayBuffer(5));
          return dataView_2.setUint8(0, 4), dataView_2.setInt32(1, e.value, !1), new Uint8Array(dataView_2.buffer);
        case "long":
          let uint8Array_2 = new Uint8Array(9);
          return uint8Array_2[0] = 5, uint8Array_2.set(e.value.bytes, 1), uint8Array_2;
        case "binary":
          let dataView_3 = new DataView(new ArrayBuffer(3 + e.value.byteLength));
          dataView_3.setUint8(0, 6), dataView_3.setUint16(1, e.value.byteLength, !1);
          let uint8Array_3 = new Uint8Array(dataView_3.buffer);
          return uint8Array_3.set(e.value, 3), uint8Array_3;
        case "string":
          let o = d.fromUtf8(e.value),
            dataView_4 = new DataView(new ArrayBuffer(3 + o.byteLength));
          dataView_4.setUint8(0, 7), dataView_4.setUint16(1, o.byteLength, !1);
          let uint8Array_4 = new Uint8Array(dataView_4.buffer);
          return uint8Array_4.set(o, 3), uint8Array_4;
        case "timestamp":
          let uint8Array_5 = new Uint8Array(9);
          return uint8Array_5[0] = 8, uint8Array_5.set(C.fromNumber(e.value.valueOf()).bytes, 1), uint8Array_5;
        case "uuid":
          if (!ge.test(e.value)) throw Error(`Invalid UUID received: ${e.value}`);
          let uint8Array_6 = new Uint8Array(17);
          return uint8Array_6[0] = 9, uint8Array_6.set(f.fromHex(e.value.replace(/\-/g, "")), 1), uint8Array_6;
      }
    }
  }
  var ge = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  class C {
    bytes;
    constructor(e) {
      if (this.bytes = e, e.byteLength !== 8) throw Error("Int64 buffers must be exactly 8 bytes");
    }
    static fromNumber(e) {
      if (e > 9223372036854776000 || e < -9223372036854776000) throw Error(`${e} is too large (or, if negative, too small) to represent as an Int64`);
      let uint8Array_7 = new Uint8Array(8);
      for (let r = 7, s = Math.abs(Math.round(e)); r > -1 && s > 0; r--, s /= 256) uint8Array_7[r] = s;
      if (e < 0) k(uint8Array_7);
      return new C(uint8Array_7);
    }
    valueOf() {
      let e = this.bytes.slice(0),
        t = e[0] & 128;
      if (t) k(e);
      return parseInt(f.toHex(e), 16) * (t ? -1 : 1);
    }
    toString() {
      return String(this.valueOf());
    }
  }
  function k(e) {
    for (let t = 0; t < 8; t++) e[t] ^= 255;
    for (let t = 7; t > -1; t--) if (e[t]++, e[t] !== 0) break;
  }
  var ae = (e, t) => {
      e = e.toLowerCase();
      for (let r of Object.keys(t)) if (e === r.toLowerCase()) return !0;
      return !1;
    },
    oe = (e, t = {}) => {
      let {
        headers: headers_3,
        query = {}
      } = Y.HttpRequest.clone(e);
      for (let n of Object.keys(headers_3)) {
        let a = n.toLowerCase();
        if (a.slice(0, 6) === "x-amz-" && !t.unhoistableHeaders?.has(a) || t.hoistableHeaders?.has(a)) query[n] = headers_3[n], delete headers_3[n];
      }
      return {
        ...e,
        headers: headers_3,
        query: query
      };
    },
    m = e => {
      e = Y.HttpRequest.clone(e);
      for (let t of Object.keys(e.headers)) if (z.indexOf(t.toLowerCase()) > -1) delete e.headers[t];
      return e;
    },
    ie = ({
      query: query_2 = {}
    }) => {
      let t = [],
        r = {};
      for (let s of Object.keys(query_2)) {
        if (s.toLowerCase() === B) continue;
        let n = _.escapeUri(s);
        t.push(n);
        let a = query_2[s];
        if (typeof a === "string") r[n] = `${n}=${_.escapeUri(a)}`;else if (Array.isArray(a)) r[n] = a.slice(0).reduce((acc, item) => acc.concat([`${n}=${_.escapeUri(item)}`]), []).sort().join("&");
      }
      return t.sort().map(item => r[item]).filter(item => item).join("&");
    },
    de = e => ye(e).toISOString().replace(/\.\d{3}Z$/, "Z"),
    ye = e => {
      if (typeof e === "number") return new Date(e * 1000);
      if (typeof e === "string") {
        if (Number(e)) return new Date(Number(e) * 1000);
        return new Date(e);
      }
      return e;
    };
  class L {
    service;
    regionProvider;
    credentialProvider;
    sha256;
    uriEscapePath;
    applyChecksum;
    constructor({
      applyChecksum: applyChecksum,
      credentials: credentials,
      region: region,
      service: service,
      sha256: sha256,
      uriEscapePath = !0
    }) {
      this.service = service, this.sha256 = sha256, this.uriEscapePath = uriEscapePath, this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : !0, this.regionProvider = M.normalizeProvider(region), this.credentialProvider = M.normalizeProvider(credentials);
    }
    createCanonicalRequest(e, t, r) {
      let s = Object.keys(t).sort();
      return `${e.method}
${this.getCanonicalPath(e)}
${ie(e)}
${s.map(item => `${item}:${t[item]}`).join(`
`)}

${s.join(";")}
${r}`;
    }
    async createStringToSign(e, t, r, s) {
      let n = new this.sha256();
      n.update(d.toUint8Array(r));
      let a = await n.digest();
      return `${s}
${e}
${t}
${f.toHex(a)}`;
    }
    getCanonicalPath({
      path: path
    }) {
      if (this.uriEscapePath) {
        let t = [];
        for (let n of path.split("/")) {
          if (n?.length === 0) continue;
          if (n === ".") continue;
          if (n === "..") t.pop();else t.push(n);
        }
        let r = `${path?.startsWith("/") ? "/" : ""}${t.join("/")}${t.length > 0 && path?.endsWith("/") ? "/" : ""}`;
        return _.escapeUri(r).replace(/%2F/g, "/");
      }
      return path;
    }
    validateResolvedCredentials(e) {
      if (typeof e !== "object" || typeof e.accessKeyId !== "string" || typeof e.secretAccessKey !== "string") throw Error("Resolved credential object is not valid");
    }
    formatDate(e) {
      let longDate = de(e).replace(/[\-:]/g, "");
      return {
        longDate: longDate,
        shortDate: longDate.slice(0, 8)
      };
    }
    getCanonicalHeaderList(e) {
      return Object.keys(e).sort().join(";");
    }
  }
  class ce extends L {
    headerFormatter = new ne();
    constructor({
      applyChecksum: applyChecksum_2,
      credentials: credentials_2,
      region: region_2,
      service: service_2,
      sha256: sha256_2,
      uriEscapePath: uriEscapePath_2 = !0
    }) {
      super({
        applyChecksum: applyChecksum_2,
        credentials: credentials_2,
        region: region_2,
        service: service_2,
        sha256: sha256_2,
        uriEscapePath: uriEscapePath_2
      });
    }
    async presign(e, t = {}) {
      let {
          signingDate = new Date(),
          expiresIn = 3600,
          unsignableHeaders: unsignableHeaders,
          unhoistableHeaders: unhoistableHeaders,
          signableHeaders: signableHeaders,
          hoistableHeaders: hoistableHeaders,
          signingRegion: signingRegion,
          signingService: signingService
        } = t,
        u = await this.credentialProvider();
      this.validateResolvedCredentials(u);
      let h = signingRegion ?? (await this.regionProvider()),
        {
          longDate: longDate_2,
          shortDate: shortDate
        } = this.formatDate(signingDate);
      if (expiresIn > se) return Promise.reject("Signature version 4 presigned URLs must have an expiration date less than one week in the future");
      let p = H(shortDate, h, signingService ?? this.service),
        E = oe(m(e), {
          unhoistableHeaders: unhoistableHeaders,
          hoistableHeaders: hoistableHeaders
        });
      if (u.sessionToken) E.query[x] = u.sessionToken;
      E.query[K] = w, E.query[j] = `${u.accessKeyId}/${p}`, E.query[U] = longDate_2, E.query[V] = expiresIn.toString(10);
      let O = I(E, unsignableHeaders, signableHeaders);
      return E.query[Q] = this.getCanonicalHeaderList(O), E.query[v] = await this.getSignature(longDate_2, p, this.getSigningKey(u, h, shortDate, signingService), this.createCanonicalRequest(E, O, await S(e, this.sha256))), E;
    }
    async sign(e, t) {
      if (typeof e === "string") return this.signString(e, t);else if (e.headers && e.payload) return this.signEvent(e, t);else if (e.message) return this.signMessage(e, t);else return this.signRequest(e, t);
    }
    async signEvent({
      headers: headers_4,
      payload: t
    }, {
      signingDate: signingDate_2 = new Date(),
      priorSignature: priorSignature,
      signingRegion: signingRegion_2,
      signingService: signingService_2
    }) {
      let signingRegion_3 = signingRegion_2 ?? (await this.regionProvider()),
        {
          shortDate: shortDate_2,
          longDate: longDate_3
        } = this.formatDate(signingDate_2),
        A = H(shortDate_2, signingRegion_3, signingService_2 ?? this.service),
        u = await S({
          headers: {},
          body: t
        }, this.sha256),
        h = new this.sha256();
      h.update(headers_4);
      let l = f.toHex(await h.digest()),
        g = [J, longDate_3, A, priorSignature, l, u].join(`
`);
      return this.signString(g, {
        signingDate: signingDate_2,
        signingRegion: signingRegion_3,
        signingService: signingService_2
      });
    }
    async signMessage(e, {
      signingDate: signingDate_3 = new Date(),
      signingRegion: signingRegion_4,
      signingService: signingService_3
    }) {
      return this.signEvent({
        headers: this.headerFormatter.format(e.message.headers),
        payload: e.message.body
      }, {
        signingDate: signingDate_3,
        signingRegion: signingRegion_4,
        signingService: signingService_3,
        priorSignature: e.priorSignature
      }).then(signature => ({
        message: e.message,
        signature: signature
      }));
    }
    async signString(e, {
      signingDate: signingDate_4 = new Date(),
      signingRegion: signingRegion_5,
      signingService: signingService_4
    } = {}) {
      let n = await this.credentialProvider();
      this.validateResolvedCredentials(n);
      let a = signingRegion_5 ?? (await this.regionProvider()),
        {
          shortDate: shortDate_3
        } = this.formatDate(signingDate_4),
        i = new this.sha256(await this.getSigningKey(n, a, shortDate_3, signingService_4));
      return i.update(d.toUint8Array(e)), f.toHex(await i.digest());
    }
    async signRequest(e, {
      signingDate: signingDate_5 = new Date(),
      signableHeaders: signableHeaders_2,
      unsignableHeaders: unsignableHeaders_2,
      signingRegion: signingRegion_6,
      signingService: signingService_5
    } = {}) {
      let o = await this.credentialProvider();
      this.validateResolvedCredentials(o);
      let i = signingRegion_6 ?? (await this.regionProvider()),
        c = m(e),
        {
          longDate: longDate_4,
          shortDate: shortDate_4
        } = this.formatDate(signingDate_5),
        h = H(shortDate_4, i, signingService_5 ?? this.service);
      if (c.headers[N] = longDate_4, o.sessionToken) c.headers[X] = o.sessionToken;
      let l = await S(c, this.sha256);
      if (!ae(T, c.headers) && this.applyChecksum) c.headers[T] = l;
      let g = I(c, unsignableHeaders_2, signableHeaders_2),
        p = await this.getSignature(longDate_4, h, this.getSigningKey(o, i, shortDate_4, signingService_5), this.createCanonicalRequest(c, g, l));
      return c.headers[P] = `${w} Credential=${o.accessKeyId}/${h}, SignedHeaders=${this.getCanonicalHeaderList(g)}, Signature=${p}`, c;
    }
    async getSignature(e, t, r, s) {
      let n = await this.createStringToSign(e, t, s, w),
        a = new this.sha256(await r);
      return a.update(d.toUint8Array(n)), f.toHex(await a.digest());
    }
    getSigningKey(e, t, r, s) {
      return re(this.sha256, e, r, t, s || this.service);
    }
  }
  var pe = {
    SignatureV4a: null
  };
  Re.ALGORITHM_IDENTIFIER = w;
  Re.ALGORITHM_IDENTIFIER_V4A = fe;
  Re.ALGORITHM_QUERY_PARAM = K;
  Re.ALWAYS_UNSIGNABLE_HEADERS = F;
  Re.AMZ_DATE_HEADER = N;
  Re.AMZ_DATE_QUERY_PARAM = U;
  Re.AUTH_HEADER = P;
  Re.CREDENTIAL_QUERY_PARAM = j;
  Re.DATE_HEADER = q;
  Re.EVENT_ALGORITHM_IDENTIFIER = J;
  Re.EXPIRES_QUERY_PARAM = V;
  Re.GENERATED_HEADERS = z;
  Re.HOST_HEADER = Ee;
  Re.KEY_TYPE_IDENTIFIER = b;
  Re.MAX_CACHE_SIZE = te;
  Re.MAX_PRESIGNED_TTL = se;
  Re.PROXY_HEADER_PATTERN = W;
  Re.REGION_SET_PARAM = Ae;
  Re.SEC_HEADER_PATTERN = Z;
  Re.SHA256_HEADER = T;
  Re.SIGNATURE_HEADER = B;
  Re.SIGNATURE_QUERY_PARAM = v;
  Re.SIGNED_HEADERS_QUERY_PARAM = Q;
  Re.SignatureV4 = ce;
  Re.SignatureV4Base = L;
  Re.TOKEN_HEADER = X;
  Re.TOKEN_QUERY_PARAM = x;
  Re.UNSIGNABLE_PATTERNS = he;
  Re.UNSIGNED_PAYLOAD = ee;
  Re.clearCredentialCache = le;
  Re.createScope = H;
  Re.getCanonicalHeaders = I;
  Re.getCanonicalQuery = ie;
  Re.getPayloadHash = S;
  Re.getSigningKey = re;
  Re.hasHeader = ae;
  Re.moveHeadersToQuery = oe;
  Re.prepareRequest = m;
  Re.signatureV4aContainer = pe;
});
export { RXe };