// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.283
import { k } from "B:/~BUN/root/chunk-yv67t8hr.js";
var q6e = k(function (ge, gt) {
  (function (g, Z) {
    typeof ge === "object" && typeof gt < "u" ? Z(ge) : typeof define === "function" && define.amd ? define(["exports"], Z) : (g = typeof globalThis < "u" ? globalThis : g || self, Z(g.acorn = {}));
  })(ge, function (g) {
    var Z = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 80, 3, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 343, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 726, 6, 110, 6, 6, 9, 4759, 9, 787719, 239],
      Te = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 2, 60, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 42, 9, 8936, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 496, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4153, 7, 221, 3, 5761, 15, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 4191],
      bt = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65",
      Le = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CD\uA7D0\uA7D1\uA7D3\uA7D5-\uA7DC\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC",
      be = {
        3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
        5: "class enum extends super const export import",
        6: "enum",
        strict: "implements interface let package private protected public static yield",
        strictBind: "eval arguments"
      },
      ye = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
      yt = {
        5: ye,
        "5module": ye + " export import",
        6: ye + " const class extends export import super"
      },
      _t = /^in(stanceof)?$/,
      regExp = new RegExp("[" + Le + "]"),
      regExp_2 = new RegExp("[" + Le + bt + "]");
    function _e(e, t) {
      var i = 65536;
      for (var s = 0; s < t.length; s += 2) {
        if (i += t[s], i > e) return !1;
        if (i += t[s + 1], i >= e) return !0;
      }
      return !1;
    }
    function isIdentifierStart(e, t) {
      if (e < 65) return e === 36;
      if (e < 91) return !0;
      if (e < 97) return e === 95;
      if (e < 123) return !0;
      if (e <= 65535) return e >= 170 && regExp.test(String.fromCharCode(e));
      if (t === !1) return !1;
      return _e(e, Te);
    }
    function isIdentifierChar(e, t) {
      if (e < 48) return e === 36;
      if (e < 58) return !0;
      if (e < 65) return !1;
      if (e < 91) return !0;
      if (e < 97) return e === 95;
      if (e < 123) return !0;
      if (e <= 65535) return e >= 170 && regExp_2.test(String.fromCharCode(e));
      if (t === !1) return !1;
      return _e(e, Te) || _e(e, Z);
    }
    var TokenType = function (t, i) {
      if (i === void 0) i = {};
      this.label = t, this.keyword = i.keyword, this.beforeExpr = !!i.beforeExpr, this.startsExpr = !!i.startsExpr, this.isLoop = !!i.isLoop, this.isAssign = !!i.isAssign, this.prefix = !!i.prefix, this.postfix = !!i.postfix, this.binop = i.binop || null, this.updateContext = null;
    };
    function E(e, binop) {
      return new TokenType(e, {
        beforeExpr: !0,
        binop: binop
      });
    }
    var P = {
        beforeExpr: !0
      },
      I = {
        startsExpr: !0
      },
      keywordTypes = {};
    function m(e, t) {
      if (t === void 0) t = {};
      return t.keyword = e, keywordTypes[e] = new TokenType(e, t);
    }
    var tokTypes = {
        num: new TokenType("num", I),
        regexp: new TokenType("regexp", I),
        string: new TokenType("string", I),
        name: new TokenType("name", I),
        privateId: new TokenType("privateId", I),
        eof: new TokenType("eof"),
        bracketL: new TokenType("[", {
          beforeExpr: !0,
          startsExpr: !0
        }),
        bracketR: new TokenType("]"),
        braceL: new TokenType("{", {
          beforeExpr: !0,
          startsExpr: !0
        }),
        braceR: new TokenType("}"),
        parenL: new TokenType("(", {
          beforeExpr: !0,
          startsExpr: !0
        }),
        parenR: new TokenType(")"),
        comma: new TokenType(",", P),
        semi: new TokenType(";", P),
        colon: new TokenType(":", P),
        dot: new TokenType("."),
        question: new TokenType("?", P),
        questionDot: new TokenType("?."),
        arrow: new TokenType("=>", P),
        template: new TokenType("template"),
        invalidTemplate: new TokenType("invalidTemplate"),
        ellipsis: new TokenType("...", P),
        backQuote: new TokenType("`", I),
        dollarBraceL: new TokenType("${", {
          beforeExpr: !0,
          startsExpr: !0
        }),
        eq: new TokenType("=", {
          beforeExpr: !0,
          isAssign: !0
        }),
        assign: new TokenType("_=", {
          beforeExpr: !0,
          isAssign: !0
        }),
        incDec: new TokenType("++/--", {
          prefix: !0,
          postfix: !0,
          startsExpr: !0
        }),
        prefix: new TokenType("!/~", {
          beforeExpr: !0,
          prefix: !0,
          startsExpr: !0
        }),
        logicalOR: E("||", 1),
        logicalAND: E("&&", 2),
        bitwiseOR: E("|", 3),
        bitwiseXOR: E("^", 4),
        bitwiseAND: E("&", 5),
        equality: E("==/!=/===/!==", 6),
        relational: E("</>/<=/>=", 7),
        bitShift: E("<</>>/>>>", 8),
        plusMin: new TokenType("+/-", {
          beforeExpr: !0,
          binop: 9,
          prefix: !0,
          startsExpr: !0
        }),
        modulo: E("%", 10),
        star: E("*", 10),
        slash: E("/", 10),
        starstar: new TokenType("**", {
          beforeExpr: !0
        }),
        coalesce: E("??", 1),
        _break: m("break"),
        _case: m("case", P),
        _catch: m("catch"),
        _continue: m("continue"),
        _debugger: m("debugger"),
        _default: m("default", P),
        _do: m("do", {
          isLoop: !0,
          beforeExpr: !0
        }),
        _else: m("else", P),
        _finally: m("finally"),
        _for: m("for", {
          isLoop: !0
        }),
        _function: m("function", I),
        _if: m("if"),
        _return: m("return", P),
        _switch: m("switch"),
        _throw: m("throw", P),
        _try: m("try"),
        _var: m("var"),
        _const: m("const"),
        _while: m("while", {
          isLoop: !0
        }),
        _with: m("with"),
        _new: m("new", {
          beforeExpr: !0,
          startsExpr: !0
        }),
        _this: m("this", I),
        _super: m("super", I),
        _class: m("class", I),
        _extends: m("extends", P),
        _export: m("export"),
        _import: m("import", I),
        _null: m("null", I),
        _true: m("true", I),
        _false: m("false", I),
        _in: m("in", {
          beforeExpr: !0,
          binop: 7
        }),
        _instanceof: m("instanceof", {
          beforeExpr: !0,
          binop: 7
        }),
        _typeof: m("typeof", {
          beforeExpr: !0,
          prefix: !0,
          startsExpr: !0
        }),
        _void: m("void", {
          beforeExpr: !0,
          prefix: !0,
          startsExpr: !0
        }),
        _delete: m("delete", {
          beforeExpr: !0,
          prefix: !0,
          startsExpr: !0
        })
      },
      lineBreak = /\r\n?|\n|\u2028|\u2029/,
      Re = new RegExp(lineBreak.source, "g");
    function isNewLine(e) {
      return e === 10 || e === 13 || e === 8232 || e === 8233;
    }
    function Oe(e, t, i) {
      if (i === void 0) i = e.length;
      for (var s = t; s < i; s++) {
        var r = e.charCodeAt(s);
        if (isNewLine(r)) return s < i - 1 && r === 13 && e.charCodeAt(s + 1) === 10 ? s + 2 : s + 1;
      }
      return -1;
    }
    var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
      C = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
      Be = Object.prototype,
      {
        hasOwnProperty: hasOwnProperty,
        toString: toString
      } = Be,
      H = Object.hasOwn || function (e, t) {
        return hasOwnProperty.call(e, t);
      },
      De = Array.isArray || function (e) {
        return toString.call(e) === "[object Array]";
      },
      Fe = Object.create(null);
    function U(e) {
      return Fe[e] || (Fe[e] = new RegExp("^(?:" + e.replace(/ /g, "|") + ")$"));
    }
    function D(e) {
      if (e <= 65535) return String.fromCharCode(e);
      return e -= 65536, String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320);
    }
    var At = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/,
      Position = function (t, i) {
        this.line = t, this.column = i;
      };
    Position.prototype.offset = function offset(t) {
      return new Position(this.line, this.column + t);
    };
    var SourceLocation = function (t, i, s) {
      if (this.start = i, this.end = s, t.sourceFile !== null) this.source = t.sourceFile;
    };
    function getLineInfo(e, t) {
      for (var i = 1, s = 0;;) {
        var r = Oe(e, s, t);
        if (r < 0) return new Position(i, t - s);
        ++i, s = r;
      }
    }
    var defaultOptions = {
        ecmaVersion: null,
        sourceType: "script",
        onInsertedSemicolon: null,
        onTrailingComma: null,
        allowReserved: null,
        allowReturnOutsideFunction: !1,
        allowImportExportEverywhere: !1,
        allowAwaitOutsideFunction: null,
        allowSuperOutsideMethod: null,
        allowHashBang: !1,
        checkPrivateFields: !0,
        locations: !1,
        onToken: null,
        onComment: null,
        ranges: !1,
        program: null,
        sourceFile: null,
        directSourceFile: null,
        preserveParens: !1
      },
      Me = !1;
    function It(e) {
      var t = {};
      for (var i in defaultOptions) t[i] = e && H(e, i) ? e[i] : defaultOptions[i];
      if (t.ecmaVersion === "latest") t.ecmaVersion = 1e8;else if (t.ecmaVersion == null) {
        if (!Me && typeof console === "object" && console.warn) Me = !0, console.warn(`Since Acorn 8.0.0, options.ecmaVersion is required.
Defaulting to 2020, but this will stop working in the future.`);
        t.ecmaVersion = 11;
      } else if (t.ecmaVersion >= 2015) t.ecmaVersion -= 2009;
      if (t.allowReserved == null) t.allowReserved = t.ecmaVersion < 5;
      if (!e || e.allowHashBang == null) t.allowHashBang = t.ecmaVersion >= 14;
      if (De(t.onToken)) {
        var onToken = t.onToken;
        t.onToken = function onToken(r) {
          return onToken.push(r);
        };
      }
      if (De(t.onComment)) t.onComment = Et(t, t.onComment);
      return t;
    }
    function Et(e, t) {
      return function (i, value, start, end, u, o) {
        var h = {
          type: i ? "Block" : "Line",
          value: value,
          start: start,
          end: end
        };
        if (e.locations) h.loc = new SourceLocation(this, u, o);
        if (e.ranges) h.range = [start, end];
        t.push(h);
      };
    }
    var ee = 1,
      z = 2,
      ke = 4,
      Ue = 8,
      we = 16,
      qe = 32,
      oe = 64,
      je = 128,
      G = 256,
      te = 512,
      he = ee | z | G;
    function Ae(e, t) {
      return z | (e ? ke : 0) | (t ? Ue : 0);
    }
    var ce = 0,
      Ie = 1,
      F = 2,
      Ge = 3,
      He = 4,
      We = 5,
      Parser = function (t, i, s) {
        this.options = t = It(t), this.sourceFile = t.sourceFile, this.keywords = U(yt[t.ecmaVersion >= 6 ? 6 : t.sourceType === "module" ? "5module" : 5]);
        var r = "";
        if (t.allowReserved !== !0) {
          if (r = be[t.ecmaVersion >= 6 ? 6 : t.ecmaVersion === 5 ? 5 : 3], t.sourceType === "module") r += " await";
        }
        this.reservedWords = U(r);
        var n = (r ? r + " " : "") + be.strict;
        if (this.reservedWordsStrict = U(n), this.reservedWordsStrictBind = U(n + " " + be.strictBind), this.input = String(i), this.containsEsc = !1, s) this.pos = s, this.lineStart = this.input.lastIndexOf(`
`, s - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;else this.pos = this.lineStart = 0, this.curLine = 1;
        if (this.type = tokTypes.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = t.sourceType === "module", this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.potentialArrowInForAwait = !1, this.yieldPos = this.awaitPos = this.awaitIdentPos = 0, this.labels = [], this.undefinedExports = Object.create(null), this.pos === 0 && t.allowHashBang && this.input.slice(0, 2) === "#!") this.skipLineComment(2);
        this.scopeStack = [], this.enterScope(ee), this.regexpState = null, this.privateNameStack = [];
      },
      R = {
        inFunction: {
          configurable: !0
        },
        inGenerator: {
          configurable: !0
        },
        inAsync: {
          configurable: !0
        },
        canAwait: {
          configurable: !0
        },
        allowSuper: {
          configurable: !0
        },
        allowDirectSuper: {
          configurable: !0
        },
        treatFunctionsAsVar: {
          configurable: !0
        },
        allowNewDotTarget: {
          configurable: !0
        },
        inClassStaticBlock: {
          configurable: !0
        }
      };
    Parser.prototype.parse = function parse() {
      var t = this.options.program || this.startNode();
      return this.nextToken(), this.parseTopLevel(t);
    }, R.inFunction.get = function () {
      return (this.currentVarScope().flags & z) > 0;
    }, R.inGenerator.get = function () {
      return (this.currentVarScope().flags & Ue) > 0;
    }, R.inAsync.get = function () {
      return (this.currentVarScope().flags & ke) > 0;
    }, R.canAwait.get = function () {
      for (var e = this.scopeStack.length - 1; e >= 0; e--) {
        var t = this.scopeStack[e],
          flags = t.flags;
        if (flags & (G | te)) return !1;
        if (flags & z) return (flags & ke) > 0;
      }
      return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
    }, R.allowSuper.get = function () {
      var e = this.currentThisScope(),
        flags_2 = e.flags;
      return (flags_2 & oe) > 0 || this.options.allowSuperOutsideMethod;
    }, R.allowDirectSuper.get = function () {
      return (this.currentThisScope().flags & je) > 0;
    }, R.treatFunctionsAsVar.get = function () {
      return this.treatFunctionsAsVarInScope(this.currentScope());
    }, R.allowNewDotTarget.get = function () {
      for (var e = this.scopeStack.length - 1; e >= 0; e--) {
        var t = this.scopeStack[e],
          flags_3 = t.flags;
        if (flags_3 & (G | te) || flags_3 & z && !(flags_3 & we)) return !0;
      }
      return !1;
    }, R.inClassStaticBlock.get = function () {
      return (this.currentVarScope().flags & G) > 0;
    }, Parser.extend = function extend() {
      var t = [],
        i = arguments.length;
      while (i--) t[i] = arguments[i];
      var s = this;
      for (var r = 0; r < t.length; r++) s = t[r](s);
      return s;
    }, Parser.parse = function parse(t, i) {
      return new this(i, t).parse();
    }, Parser.parseExpressionAt = function parseExpressionAt(t, i, s) {
      var r = new this(s, t, i);
      return r.nextToken(), r.parseExpression();
    }, Parser.tokenizer = function tokenizer(t, i) {
      return new this(i, t);
    }, Object.defineProperties(Parser.prototype, R);
    var A = Parser.prototype,
      Pt = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
    A.strictDirective = function strictDirective(e) {
      if (this.options.ecmaVersion < 5) return !1;
      for (;;) {
        C.lastIndex = e, e += C.exec(this.input)[0].length;
        var t = Pt.exec(this.input.slice(e));
        if (!t) return !1;
        if ((t[1] || t[2]) === "use strict") {
          C.lastIndex = e + t[0].length;
          var i = C.exec(this.input),
            s = i.index + i[0].length,
            r = this.input.charAt(s);
          return r === ";" || r === "}" || lineBreak.test(i[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(r) || r === "!" && this.input.charAt(s + 1) === "=");
        }
        if (e += t[0].length, C.lastIndex = e, e += C.exec(this.input)[0].length, this.input[e] === ";") e++;
      }
    }, A.eat = function eat(e) {
      if (this.type === e) return this.next(), !0;else return !1;
    }, A.isContextual = function isContextual(e) {
      return this.type === tokTypes.name && this.value === e && !this.containsEsc;
    }, A.eatContextual = function eatContextual(e) {
      if (!this.isContextual(e)) return !1;
      return this.next(), !0;
    }, A.expectContextual = function expectContextual(e) {
      if (!this.eatContextual(e)) this.unexpected();
    }, A.canInsertSemicolon = function canInsertSemicolon() {
      return this.type === tokTypes.eof || this.type === tokTypes.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    }, A.insertSemicolon = function insertSemicolon() {
      if (this.canInsertSemicolon()) {
        if (this.options.onInsertedSemicolon) this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
        return !0;
      }
    }, A.semicolon = function semicolon() {
      if (!this.eat(tokTypes.semi) && !this.insertSemicolon()) this.unexpected();
    }, A.afterTrailingComma = function afterTrailingComma(e, t) {
      if (this.type === e) {
        if (this.options.onTrailingComma) this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
        if (!t) this.next();
        return !0;
      }
    }, A.expect = function expect(e) {
      this.eat(e) || this.unexpected();
    }, A.unexpected = function unexpected(e) {
      this.raise(e != null ? e : this.start, "Unexpected token");
    };
    var pe = function () {
      this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
    };
    A.checkPatternErrors = function checkPatternErrors(e, t) {
      if (!e) return;
      if (e.trailingComma > -1) this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");
      var i = t ? e.parenthesizedAssign : e.parenthesizedBind;
      if (i > -1) this.raiseRecoverable(i, t ? "Assigning to rvalue" : "Parenthesized pattern");
    }, A.checkExpressionErrors = function checkExpressionErrors(e, t) {
      if (!e) return !1;
      var {
        shorthandAssign: shorthandAssign,
        doubleProto: doubleProto
      } = e;
      if (!t) return shorthandAssign >= 0 || doubleProto >= 0;
      if (shorthandAssign >= 0) this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
      if (doubleProto >= 0) this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
    }, A.checkYieldAwaitInDefaultParams = function checkYieldAwaitInDefaultParams() {
      if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) this.raise(this.yieldPos, "Yield expression cannot be a default value");
      if (this.awaitPos) this.raise(this.awaitPos, "Await expression cannot be a default value");
    }, A.isSimpleAssignTarget = function isSimpleAssignTarget(e) {
      if (e.type === "ParenthesizedExpression") return this.isSimpleAssignTarget(e.expression);
      return e.type === "Identifier" || e.type === "MemberExpression";
    };
    var p = Parser.prototype;
    p.parseTopLevel = function parseTopLevel(e) {
      var t = Object.create(null);
      if (!e.body) e.body = [];
      while (this.type !== tokTypes.eof) {
        var i = this.parseStatement(null, !0, t);
        e.body.push(i);
      }
      if (this.inModule) for (var s = 0, r = Object.keys(this.undefinedExports); s < r.length; s += 1) {
        var n = r[s];
        this.raiseRecoverable(this.undefinedExports[n].start, "Export '" + n + "' is not defined");
      }
      return this.adaptDirectivePrologue(e.body), this.next(), e.sourceType = this.options.sourceType, this.finishNode(e, "Program");
    };
    var Ee = {
        kind: "loop"
      },
      Nt = {
        kind: "switch"
      };
    p.isLet = function isLet(e) {
      if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
      C.lastIndex = this.pos;
      var t = C.exec(this.input),
        i = this.pos + t[0].length,
        s = this.input.charCodeAt(i);
      if (s === 91 || s === 92) return !0;
      if (e) return !1;
      if (s === 123 || s > 55295 && s < 56320) return !0;
      if (isIdentifierStart(s, !0)) {
        var r = i + 1;
        while (isIdentifierChar(s = this.input.charCodeAt(r), !0)) ++r;
        if (s === 92 || s > 55295 && s < 56320) return !0;
        var n = this.input.slice(i, r);
        if (!_t.test(n)) return !0;
      }
      return !1;
    }, p.isAsyncFunction = function isAsyncFunction() {
      if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
      C.lastIndex = this.pos;
      var e = C.exec(this.input),
        t = this.pos + e[0].length,
        i;
      return !lineBreak.test(this.input.slice(this.pos, t)) && this.input.slice(t, t + 8) === "function" && (t + 8 === this.input.length || !(isIdentifierChar(i = this.input.charCodeAt(t + 8)) || i > 55295 && i < 56320));
    }, p.isUsingKeyword = function isUsingKeyword(e, t) {
      if (this.options.ecmaVersion < 17 || !this.isContextual(e ? "await" : "using")) return !1;
      C.lastIndex = this.pos;
      var i = C.exec(this.input),
        s = this.pos + i[0].length;
      if (lineBreak.test(this.input.slice(this.pos, s))) return !1;
      if (e) {
        var r = s + 5,
          n;
        if (this.input.slice(s, r) !== "using" || r === this.input.length || isIdentifierChar(n = this.input.charCodeAt(r)) || n > 55295 && n < 56320) return !1;
        C.lastIndex = r;
        var u = C.exec(this.input);
        if (u && lineBreak.test(this.input.slice(r, r + u[0].length))) return !1;
      }
      if (t) {
        var o = s + 2,
          h;
        if (this.input.slice(s, o) === "of") {
          if (o === this.input.length || !isIdentifierChar(h = this.input.charCodeAt(o)) && !(h > 55295 && h < 56320)) return !1;
        }
      }
      var l = this.input.charCodeAt(s);
      return isIdentifierStart(l, !0) || l === 92;
    }, p.isAwaitUsing = function isAwaitUsing(e) {
      return this.isUsingKeyword(!0, e);
    }, p.isUsing = function isUsing(e) {
      return this.isUsingKeyword(!1, e);
    }, p.parseStatement = function parseStatement(e, t, i) {
      var s = this.type,
        r = this.startNode(),
        n;
      if (this.isLet(e)) s = tokTypes._var, n = "let";
      switch (s) {
        case tokTypes._break:
        case tokTypes._continue:
          return this.parseBreakContinueStatement(r, s.keyword);
        case tokTypes._debugger:
          return this.parseDebuggerStatement(r);
        case tokTypes._do:
          return this.parseDoStatement(r);
        case tokTypes._for:
          return this.parseForStatement(r);
        case tokTypes._function:
          if (e && (this.strict || e !== "if" && e !== "label") && this.options.ecmaVersion >= 6) this.unexpected();
          return this.parseFunctionStatement(r, !1, !e);
        case tokTypes._class:
          if (e) this.unexpected();
          return this.parseClass(r, !0);
        case tokTypes._if:
          return this.parseIfStatement(r);
        case tokTypes._return:
          return this.parseReturnStatement(r);
        case tokTypes._switch:
          return this.parseSwitchStatement(r);
        case tokTypes._throw:
          return this.parseThrowStatement(r);
        case tokTypes._try:
          return this.parseTryStatement(r);
        case tokTypes._const:
        case tokTypes._var:
          if (n = n || this.value, e && n !== "var") this.unexpected();
          return this.parseVarStatement(r, n);
        case tokTypes._while:
          return this.parseWhileStatement(r);
        case tokTypes._with:
          return this.parseWithStatement(r);
        case tokTypes.braceL:
          return this.parseBlock(!0, r);
        case tokTypes.semi:
          return this.parseEmptyStatement(r);
        case tokTypes._export:
        case tokTypes._import:
          if (this.options.ecmaVersion > 10 && s === tokTypes._import) {
            C.lastIndex = this.pos;
            var u = C.exec(this.input),
              o = this.pos + u[0].length,
              h = this.input.charCodeAt(o);
            if (h === 40 || h === 46) return this.parseExpressionStatement(r, this.parseExpression());
          }
          if (!this.options.allowImportExportEverywhere) {
            if (!t) this.raise(this.start, "'import' and 'export' may only appear at the top level");
            if (!this.inModule) this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
          }
          return s === tokTypes._import ? this.parseImport(r) : this.parseExport(r, i);
        default:
          if (this.isAsyncFunction()) {
            if (e) this.unexpected();
            return this.next(), this.parseFunctionStatement(r, !0, !e);
          }
          var l = this.isAwaitUsing(!1) ? "await using" : this.isUsing(!1) ? "using" : null;
          if (l) {
            if (t && this.options.sourceType === "script") this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script`");
            if (l === "await using") {
              if (!this.canAwait) this.raise(this.start, "Await using cannot appear outside of async function");
              this.next();
            }
            return this.next(), this.parseVar(r, !1, l), this.semicolon(), this.finishNode(r, "VariableDeclaration");
          }
          var d = this.value,
            y = this.parseExpression();
          if (s === tokTypes.name && y.type === "Identifier" && this.eat(tokTypes.colon)) return this.parseLabeledStatement(r, d, y, e);else return this.parseExpressionStatement(r, y);
      }
    }, p.parseBreakContinueStatement = function parseBreakContinueStatement(e, t) {
      var i = t === "break";
      if (this.next(), this.eat(tokTypes.semi) || this.insertSemicolon()) e.label = null;else if (this.type !== tokTypes.name) this.unexpected();else e.label = this.parseIdent(), this.semicolon();
      var s = 0;
      for (; s < this.labels.length; ++s) {
        var r = this.labels[s];
        if (e.label == null || r.name === e.label.name) {
          if (r.kind != null && (i || r.kind === "loop")) break;
          if (e.label && i) break;
        }
      }
      if (s === this.labels.length) this.raise(e.start, "Unsyntactic " + t);
      return this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
    }, p.parseDebuggerStatement = function parseDebuggerStatement(e) {
      return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
    }, p.parseDoStatement = function parseDoStatement(e) {
      if (this.next(), this.labels.push(Ee), e.body = this.parseStatement("do"), this.labels.pop(), this.expect(tokTypes._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6) this.eat(tokTypes.semi);else this.semicolon();
      return this.finishNode(e, "DoWhileStatement");
    }, p.parseForStatement = function parseForStatement(e) {
      this.next();
      var t = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
      if (this.labels.push(Ee), this.enterScope(0), this.expect(tokTypes.parenL), this.type === tokTypes.semi) {
        if (t > -1) this.unexpected(t);
        return this.parseFor(e, null);
      }
      var i = this.isLet();
      if (this.type === tokTypes._var || this.type === tokTypes._const || i) {
        var s = this.startNode(),
          r = i ? "let" : this.value;
        return this.next(), this.parseVar(s, !0, r), this.finishNode(s, "VariableDeclaration"), this.parseForAfterInit(e, s, t);
      }
      var n = this.isContextual("let"),
        u = !1,
        o = this.isUsing(!0) ? "using" : this.isAwaitUsing(!0) ? "await using" : null;
      if (o) {
        var h = this.startNode();
        if (this.next(), o === "await using") this.next();
        return this.parseVar(h, !0, o), this.finishNode(h, "VariableDeclaration"), this.parseForAfterInit(e, h, t);
      }
      var containsEsc = this.containsEsc,
        d = new pe(),
        start_2 = this.start,
        S = t > -1 ? this.parseExprSubscripts(d, "await") : this.parseExpression(!0, d);
      if (this.type === tokTypes._in || (u = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
        if (t > -1) {
          if (this.type === tokTypes._in) this.unexpected(t);
          e.await = !0;
        } else if (u && this.options.ecmaVersion >= 8) {
          if (S.start === start_2 && !containsEsc && S.type === "Identifier" && S.name === "async") this.unexpected();else if (this.options.ecmaVersion >= 9) e.await = !1;
        }
        if (n && u) this.raise(S.start, "The left-hand side of a for-of loop may not start with 'let'.");
        return this.toAssignable(S, !1, d), this.checkLValPattern(S), this.parseForIn(e, S);
      } else this.checkExpressionErrors(d, !0);
      if (t > -1) this.unexpected(t);
      return this.parseFor(e, S);
    }, p.parseForAfterInit = function parseForAfterInit(e, t, i) {
      if ((this.type === tokTypes._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && t.declarations.length === 1) {
        if (this.options.ecmaVersion >= 9) if (this.type === tokTypes._in) {
          if (i > -1) this.unexpected(i);
        } else e.await = i > -1;
        return this.parseForIn(e, t);
      }
      if (i > -1) this.unexpected(i);
      return this.parseFor(e, t);
    }, p.parseFunctionStatement = function parseFunctionStatement(e, t, i) {
      return this.next(), this.parseFunction(e, ie | (i ? 0 : Pe), !1, t);
    }, p.parseIfStatement = function parseIfStatement(e) {
      return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement("if"), e.alternate = this.eat(tokTypes._else) ? this.parseStatement("if") : null, this.finishNode(e, "IfStatement");
    }, p.parseReturnStatement = function parseReturnStatement(e) {
      if (!this.inFunction && !this.options.allowReturnOutsideFunction) this.raise(this.start, "'return' outside of function");
      if (this.next(), this.eat(tokTypes.semi) || this.insertSemicolon()) e.argument = null;else e.argument = this.parseExpression(), this.semicolon();
      return this.finishNode(e, "ReturnStatement");
    }, p.parseSwitchStatement = function parseSwitchStatement(e) {
      this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(tokTypes.braceL), this.labels.push(Nt), this.enterScope(0);
      var t;
      for (var i = !1; this.type !== tokTypes.braceR;) if (this.type === tokTypes._case || this.type === tokTypes._default) {
        var s = this.type === tokTypes._case;
        if (t) this.finishNode(t, "SwitchCase");
        if (e.cases.push(t = this.startNode()), t.consequent = [], this.next(), s) t.test = this.parseExpression();else {
          if (i) this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
          i = !0, t.test = null;
        }
        this.expect(tokTypes.colon);
      } else {
        if (!t) this.unexpected();
        t.consequent.push(this.parseStatement(null));
      }
      if (this.exitScope(), t) this.finishNode(t, "SwitchCase");
      return this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
    }, p.parseThrowStatement = function parseThrowStatement(e) {
      if (this.next(), lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) this.raise(this.lastTokEnd, "Illegal newline after throw");
      return e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
    };
    var Vt = [];
    p.parseCatchClauseParam = function parseCatchClauseParam() {
      var e = this.parseBindingAtom(),
        t = e.type === "Identifier";
      return this.enterScope(t ? qe : 0), this.checkLValPattern(e, t ? He : F), this.expect(tokTypes.parenR), e;
    }, p.parseTryStatement = function parseTryStatement(e) {
      if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === tokTypes._catch) {
        var t = this.startNode();
        if (this.next(), this.eat(tokTypes.parenL)) t.param = this.parseCatchClauseParam();else {
          if (this.options.ecmaVersion < 10) this.unexpected();
          t.param = null, this.enterScope(0);
        }
        t.body = this.parseBlock(!1), this.exitScope(), e.handler = this.finishNode(t, "CatchClause");
      }
      if (e.finalizer = this.eat(tokTypes._finally) ? this.parseBlock() : null, !e.handler && !e.finalizer) this.raise(e.start, "Missing catch or finally clause");
      return this.finishNode(e, "TryStatement");
    }, p.parseVarStatement = function parseVarStatement(e, t, i) {
      return this.next(), this.parseVar(e, !1, t, i), this.semicolon(), this.finishNode(e, "VariableDeclaration");
    }, p.parseWhileStatement = function parseWhileStatement(e) {
      return this.next(), e.test = this.parseParenExpression(), this.labels.push(Ee), e.body = this.parseStatement("while"), this.labels.pop(), this.finishNode(e, "WhileStatement");
    }, p.parseWithStatement = function parseWithStatement(e) {
      if (this.strict) this.raise(this.start, "'with' in strict mode");
      return this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement("with"), this.finishNode(e, "WithStatement");
    }, p.parseEmptyStatement = function parseEmptyStatement(e) {
      return this.next(), this.finishNode(e, "EmptyStatement");
    }, p.parseLabeledStatement = function parseLabeledStatement(e, name, i, s) {
      for (var r = 0, labels = this.labels; r < labels.length; r += 1) {
        var u = labels[r];
        if (u.name === name) this.raise(i.start, "Label '" + name + "' is already declared");
      }
      var kind = this.type.isLoop ? "loop" : this.type === tokTypes._switch ? "switch" : null;
      for (var h = this.labels.length - 1; h >= 0; h--) {
        var l = this.labels[h];
        if (l.statementStart === e.start) l.statementStart = this.start, l.kind = kind;else break;
      }
      return this.labels.push({
        name: name,
        kind: kind,
        statementStart: this.start
      }), e.body = this.parseStatement(s ? s.indexOf("label") === -1 ? s + "label" : s : "label"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
    }, p.parseExpressionStatement = function parseExpressionStatement(e, t) {
      return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
    }, p.parseBlock = function parseBlock(e, t, i) {
      if (e === void 0) e = !0;
      if (t === void 0) t = this.startNode();
      if (t.body = [], this.expect(tokTypes.braceL), e) this.enterScope(0);
      while (this.type !== tokTypes.braceR) {
        var s = this.parseStatement(null);
        t.body.push(s);
      }
      if (i) this.strict = !1;
      if (this.next(), e) this.exitScope();
      return this.finishNode(t, "BlockStatement");
    }, p.parseFor = function parseFor(e, t) {
      return e.init = t, this.expect(tokTypes.semi), e.test = this.type === tokTypes.semi ? null : this.parseExpression(), this.expect(tokTypes.semi), e.update = this.type === tokTypes.parenR ? null : this.parseExpression(), this.expect(tokTypes.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, "ForStatement");
    }, p.parseForIn = function parseForIn(e, t) {
      var i = this.type === tokTypes._in;
      if (this.next(), t.type === "VariableDeclaration" && t.declarations[0].init != null && (!i || this.options.ecmaVersion < 8 || this.strict || t.kind !== "var" || t.declarations[0].id.type !== "Identifier")) this.raise(t.start, (i ? "for-in" : "for-of") + " loop variable declaration may not have an initializer");
      return e.left = t, e.right = i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(tokTypes.parenR), e.body = this.parseStatement("for"), this.exitScope(), this.labels.pop(), this.finishNode(e, i ? "ForInStatement" : "ForOfStatement");
    }, p.parseVar = function parseVar(e, t, i, s) {
      e.declarations = [], e.kind = i;
      for (;;) {
        var r = this.startNode();
        if (this.parseVarId(r, i), this.eat(tokTypes.eq)) r.init = this.parseMaybeAssign(t);else if (!s && i === "const" && !(this.type === tokTypes._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) this.unexpected();else if (!s && (i === "using" || i === "await using") && this.options.ecmaVersion >= 17 && this.type !== tokTypes._in && !this.isContextual("of")) this.raise(this.lastTokEnd, "Missing initializer in " + i + " declaration");else if (!s && r.id.type !== "Identifier" && !(t && (this.type === tokTypes._in || this.isContextual("of")))) this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");else r.init = null;
        if (e.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(tokTypes.comma)) break;
      }
      return e;
    }, p.parseVarId = function parseVarId(e, t) {
      e.id = t === "using" || t === "await using" ? this.parseIdent() : this.parseBindingAtom(), this.checkLValPattern(e.id, t === "var" ? Ie : F, !1);
    };
    var ie = 1,
      Pe = 2,
      ze = 4;
    p.parseFunction = function parseFunction(e, t, i, s, r) {
      if (this.initFunction(e), this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !s) {
        if (this.type === tokTypes.star && t & Pe) this.unexpected();
        e.generator = this.eat(tokTypes.star);
      }
      if (this.options.ecmaVersion >= 8) e.async = !!s;
      if (t & ie) {
        if (e.id = t & ze && this.type !== tokTypes.name ? null : this.parseIdent(), e.id && !(t & Pe)) this.checkLValSimple(e.id, this.strict || e.generator || e.async ? this.treatFunctionsAsVar ? Ie : F : Ge);
      }
      var yieldPos = this.yieldPos,
        awaitPos = this.awaitPos,
        awaitIdentPos = this.awaitIdentPos;
      if (this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ae(e.async, e.generator)), !(t & ie)) e.id = this.type === tokTypes.name ? this.parseIdent() : null;
      return this.parseFunctionParams(e), this.parseFunctionBody(e, i, !1, r), this.yieldPos = yieldPos, this.awaitPos = awaitPos, this.awaitIdentPos = awaitIdentPos, this.finishNode(e, t & ie ? "FunctionDeclaration" : "FunctionExpression");
    }, p.parseFunctionParams = function parseFunctionParams(e) {
      this.expect(tokTypes.parenL), e.params = this.parseBindingList(tokTypes.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
    }, p.parseClass = function parseClass(e, t) {
      this.next();
      var strict = this.strict;
      this.strict = !0, this.parseClassId(e, t), this.parseClassSuper(e);
      var s = this.enterClassBody(),
        r = this.startNode(),
        n = !1;
      r.body = [], this.expect(tokTypes.braceL);
      while (this.type !== tokTypes.braceR) {
        var u = this.parseClassElement(e.superClass !== null);
        if (u) {
          if (r.body.push(u), u.type === "MethodDefinition" && u.kind === "constructor") {
            if (n) this.raiseRecoverable(u.start, "Duplicate constructor in the same class");
            n = !0;
          } else if (u.key && u.key.type === "PrivateIdentifier" && Tt(s, u)) this.raiseRecoverable(u.key.start, "Identifier '#" + u.key.name + "' has already been declared");
        }
      }
      return this.strict = strict, this.next(), e.body = this.finishNode(r, "ClassBody"), this.exitClassBody(), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
    }, p.parseClassElement = function parseClassElement(e) {
      if (this.eat(tokTypes.semi)) return null;
      var ecmaVersion = this.options.ecmaVersion,
        i = this.startNode(),
        s = "",
        r = !1,
        n = !1,
        u = "method",
        o = !1;
      if (this.eatContextual("static")) {
        if (ecmaVersion >= 13 && this.eat(tokTypes.braceL)) return this.parseClassStaticBlock(i), i;
        if (this.isClassElementNameStart() || this.type === tokTypes.star) o = !0;else s = "static";
      }
      if (i.static = o, !s && ecmaVersion >= 8 && this.eatContextual("async")) if ((this.isClassElementNameStart() || this.type === tokTypes.star) && !this.canInsertSemicolon()) n = !0;else s = "async";
      if (!s && (ecmaVersion >= 9 || !n) && this.eat(tokTypes.star)) r = !0;
      if (!s && !n && !r) {
        var h = this.value;
        if (this.eatContextual("get") || this.eatContextual("set")) if (this.isClassElementNameStart()) u = h;else s = h;
      }
      if (s) i.computed = !1, i.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc), i.key.name = s, this.finishNode(i.key, "Identifier");else this.parseClassElementName(i);
      if (ecmaVersion < 13 || this.type === tokTypes.parenL || u !== "method" || r || n) {
        var l = !i.static && le(i, "constructor"),
          d = l && e;
        if (l && u !== "method") this.raise(i.key.start, "Constructor can't have get/set modifier");
        i.kind = l ? "constructor" : u, this.parseClassMethod(i, r, n, d);
      } else this.parseClassField(i);
      return i;
    }, p.isClassElementNameStart = function isClassElementNameStart() {
      return this.type === tokTypes.name || this.type === tokTypes.privateId || this.type === tokTypes.num || this.type === tokTypes.string || this.type === tokTypes.bracketL || this.type.keyword;
    }, p.parseClassElementName = function parseClassElementName(e) {
      if (this.type === tokTypes.privateId) {
        if (this.value === "constructor") this.raise(this.start, "Classes can't have an element named '#constructor'");
        e.computed = !1, e.key = this.parsePrivateIdent();
      } else this.parsePropertyName(e);
    }, p.parseClassMethod = function parseClassMethod(e, t, i, s) {
      var r = e.key;
      if (e.kind === "constructor") {
        if (t) this.raise(r.start, "Constructor can't be a generator");
        if (i) this.raise(r.start, "Constructor can't be an async method");
      } else if (e.static && le(e, "prototype")) this.raise(r.start, "Classes may not have a static property named prototype");
      var n = e.value = this.parseMethod(t, i, s);
      if (e.kind === "get" && n.params.length !== 0) this.raiseRecoverable(n.start, "getter should have no params");
      if (e.kind === "set" && n.params.length !== 1) this.raiseRecoverable(n.start, "setter should have exactly one param");
      if (e.kind === "set" && n.params[0].type === "RestElement") this.raiseRecoverable(n.params[0].start, "Setter cannot use rest params");
      return this.finishNode(e, "MethodDefinition");
    }, p.parseClassField = function parseClassField(e) {
      if (le(e, "constructor")) this.raise(e.key.start, "Classes can't have a field named 'constructor'");else if (e.static && le(e, "prototype")) this.raise(e.key.start, "Classes can't have a static field named 'prototype'");
      if (this.eat(tokTypes.eq)) this.enterScope(te | oe), e.value = this.parseMaybeAssign(), this.exitScope();else e.value = null;
      return this.semicolon(), this.finishNode(e, "PropertyDefinition");
    }, p.parseClassStaticBlock = function parseClassStaticBlock(e) {
      e.body = [];
      var labels_2 = this.labels;
      this.labels = [], this.enterScope(G | oe);
      while (this.type !== tokTypes.braceR) {
        var i = this.parseStatement(null);
        e.body.push(i);
      }
      return this.next(), this.exitScope(), this.labels = labels_2, this.finishNode(e, "StaticBlock");
    }, p.parseClassId = function parseClassId(e, t) {
      if (this.type === tokTypes.name) {
        if (e.id = this.parseIdent(), t) this.checkLValSimple(e.id, F, !1);
      } else {
        if (t === !0) this.unexpected();
        e.id = null;
      }
    }, p.parseClassSuper = function parseClassSuper(e) {
      e.superClass = this.eat(tokTypes._extends) ? this.parseExprSubscripts(null, !1) : null;
    }, p.enterClassBody = function enterClassBody() {
      var e = {
        declared: Object.create(null),
        used: []
      };
      return this.privateNameStack.push(e), e.declared;
    }, p.exitClassBody = function exitClassBody() {
      var e = this.privateNameStack.pop(),
        {
          declared: declared,
          used: used
        } = e;
      if (!this.options.checkPrivateFields) return;
      var s = this.privateNameStack.length,
        r = s === 0 ? null : this.privateNameStack[s - 1];
      for (var n = 0; n < used.length; ++n) {
        var u = used[n];
        if (!H(declared, u.name)) if (r) r.used.push(u);else this.raiseRecoverable(u.start, "Private field '#" + u.name + "' must be declared in an enclosing class");
      }
    };
    function Tt(e, t) {
      var i = t.key.name,
        s = e[i],
        r = "true";
      if (t.type === "MethodDefinition" && (t.kind === "get" || t.kind === "set")) r = (t.static ? "s" : "i") + t.kind;
      if (s === "iget" && r === "iset" || s === "iset" && r === "iget" || s === "sget" && r === "sset" || s === "sset" && r === "sget") return e[i] = "true", !1;else if (!s) return e[i] = r, !1;else return !0;
    }
    function le(e, t) {
      var {
        computed: computed,
        key: key
      } = e;
      return !computed && (key.type === "Identifier" && key.name === t || key.type === "Literal" && key.value === t);
    }
    p.parseExportAllDeclaration = function parseExportAllDeclaration(e, t) {
      if (this.options.ecmaVersion >= 11) if (this.eatContextual("as")) e.exported = this.parseModuleExportName(), this.checkExport(t, e.exported, this.lastTokStart);else e.exported = null;
      if (this.expectContextual("from"), this.type !== tokTypes.string) this.unexpected();
      if (e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16) e.attributes = this.parseWithClause();
      return this.semicolon(), this.finishNode(e, "ExportAllDeclaration");
    }, p.parseExport = function parseExport(e, t) {
      if (this.next(), this.eat(tokTypes.star)) return this.parseExportAllDeclaration(e, t);
      if (this.eat(tokTypes._default)) return this.checkExport(t, "default", this.lastTokStart), e.declaration = this.parseExportDefaultDeclaration(), this.finishNode(e, "ExportDefaultDeclaration");
      if (this.shouldParseExportStatement()) {
        if (e.declaration = this.parseExportDeclaration(e), e.declaration.type === "VariableDeclaration") this.checkVariableExport(t, e.declaration.declarations);else this.checkExport(t, e.declaration.id, e.declaration.id.start);
        if (e.specifiers = [], e.source = null, this.options.ecmaVersion >= 16) e.attributes = [];
      } else {
        if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) {
          if (this.type !== tokTypes.string) this.unexpected();
          if (e.source = this.parseExprAtom(), this.options.ecmaVersion >= 16) e.attributes = this.parseWithClause();
        } else {
          for (var i = 0, specifiers = e.specifiers; i < specifiers.length; i += 1) {
            var r = specifiers[i];
            if (this.checkUnreserved(r.local), this.checkLocalExport(r.local), r.local.type === "Literal") this.raise(r.local.start, "A string literal cannot be used as an exported binding without `from`.");
          }
          if (e.source = null, this.options.ecmaVersion >= 16) e.attributes = [];
        }
        this.semicolon();
      }
      return this.finishNode(e, "ExportNamedDeclaration");
    }, p.parseExportDeclaration = function parseExportDeclaration(e) {
      return this.parseStatement(null);
    }, p.parseExportDefaultDeclaration = function parseExportDefaultDeclaration() {
      var e;
      if (this.type === tokTypes._function || (e = this.isAsyncFunction())) {
        var t = this.startNode();
        if (this.next(), e) this.next();
        return this.parseFunction(t, ie | ze, !1, e);
      } else if (this.type === tokTypes._class) {
        var i = this.startNode();
        return this.parseClass(i, "nullableID");
      } else {
        var s = this.parseMaybeAssign();
        return this.semicolon(), s;
      }
    }, p.checkExport = function checkExport(e, t, i) {
      if (!e) return;
      if (typeof t !== "string") t = t.type === "Identifier" ? t.name : t.value;
      if (H(e, t)) this.raiseRecoverable(i, "Duplicate export '" + t + "'");
      e[t] = !0;
    }, p.checkPatternExport = function checkPatternExport(e, t) {
      var i = t.type;
      if (i === "Identifier") this.checkExport(e, t, t.start);else if (i === "ObjectPattern") for (var s = 0, properties = t.properties; s < properties.length; s += 1) {
        var n = properties[s];
        this.checkPatternExport(e, n);
      } else if (i === "ArrayPattern") for (var u = 0, elements = t.elements; u < elements.length; u += 1) {
        var h = elements[u];
        if (h) this.checkPatternExport(e, h);
      } else if (i === "Property") this.checkPatternExport(e, t.value);else if (i === "AssignmentPattern") this.checkPatternExport(e, t.left);else if (i === "RestElement") this.checkPatternExport(e, t.argument);
    }, p.checkVariableExport = function checkVariableExport(e, t) {
      if (!e) return;
      for (var i = 0, s = t; i < s.length; i += 1) {
        var r = s[i];
        this.checkPatternExport(e, r.id);
      }
    }, p.shouldParseExportStatement = function shouldParseExportStatement() {
      return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
    }, p.parseExportSpecifier = function parseExportSpecifier(e) {
      var t = this.startNode();
      return t.local = this.parseModuleExportName(), t.exported = this.eatContextual("as") ? this.parseModuleExportName() : t.local, this.checkExport(e, t.exported, t.exported.start), this.finishNode(t, "ExportSpecifier");
    }, p.parseExportSpecifiers = function parseExportSpecifiers(e) {
      var t = [],
        i = !0;
      this.expect(tokTypes.braceL);
      while (!this.eat(tokTypes.braceR)) {
        if (!i) {
          if (this.expect(tokTypes.comma), this.afterTrailingComma(tokTypes.braceR)) break;
        } else i = !1;
        t.push(this.parseExportSpecifier(e));
      }
      return t;
    }, p.parseImport = function parseImport(e) {
      if (this.next(), this.type === tokTypes.string) e.specifiers = Vt, e.source = this.parseExprAtom();else e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === tokTypes.string ? this.parseExprAtom() : this.unexpected();
      if (this.options.ecmaVersion >= 16) e.attributes = this.parseWithClause();
      return this.semicolon(), this.finishNode(e, "ImportDeclaration");
    }, p.parseImportSpecifier = function parseImportSpecifier() {
      var e = this.startNode();
      if (e.imported = this.parseModuleExportName(), this.eatContextual("as")) e.local = this.parseIdent();else this.checkUnreserved(e.imported), e.local = e.imported;
      return this.checkLValSimple(e.local, F), this.finishNode(e, "ImportSpecifier");
    }, p.parseImportDefaultSpecifier = function parseImportDefaultSpecifier() {
      var e = this.startNode();
      return e.local = this.parseIdent(), this.checkLValSimple(e.local, F), this.finishNode(e, "ImportDefaultSpecifier");
    }, p.parseImportNamespaceSpecifier = function parseImportNamespaceSpecifier() {
      var e = this.startNode();
      return this.next(), this.expectContextual("as"), e.local = this.parseIdent(), this.checkLValSimple(e.local, F), this.finishNode(e, "ImportNamespaceSpecifier");
    }, p.parseImportSpecifiers = function parseImportSpecifiers() {
      var e = [],
        t = !0;
      if (this.type === tokTypes.name) {
        if (e.push(this.parseImportDefaultSpecifier()), !this.eat(tokTypes.comma)) return e;
      }
      if (this.type === tokTypes.star) return e.push(this.parseImportNamespaceSpecifier()), e;
      this.expect(tokTypes.braceL);
      while (!this.eat(tokTypes.braceR)) {
        if (!t) {
          if (this.expect(tokTypes.comma), this.afterTrailingComma(tokTypes.braceR)) break;
        } else t = !1;
        e.push(this.parseImportSpecifier());
      }
      return e;
    }, p.parseWithClause = function parseWithClause() {
      var e = [];
      if (!this.eat(tokTypes._with)) return e;
      this.expect(tokTypes.braceL);
      var t = {},
        i = !0;
      while (!this.eat(tokTypes.braceR)) {
        if (!i) {
          if (this.expect(tokTypes.comma), this.afterTrailingComma(tokTypes.braceR)) break;
        } else i = !1;
        var s = this.parseImportAttribute(),
          r = s.key.type === "Identifier" ? s.key.name : s.key.value;
        if (H(t, r)) this.raiseRecoverable(s.key.start, "Duplicate attribute key '" + r + "'");
        t[r] = !0, e.push(s);
      }
      return e;
    }, p.parseImportAttribute = function parseImportAttribute() {
      var e = this.startNode();
      if (e.key = this.type === tokTypes.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never"), this.expect(tokTypes.colon), this.type !== tokTypes.string) this.unexpected();
      return e.value = this.parseExprAtom(), this.finishNode(e, "ImportAttribute");
    }, p.parseModuleExportName = function parseModuleExportName() {
      if (this.options.ecmaVersion >= 13 && this.type === tokTypes.string) {
        var e = this.parseLiteral(this.value);
        if (At.test(e.value)) this.raise(e.start, "An export name cannot include a lone surrogate.");
        return e;
      }
      return this.parseIdent(!0);
    }, p.adaptDirectivePrologue = function adaptDirectivePrologue(e) {
      for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
    }, p.isDirectiveCandidate = function isDirectiveCandidate(e) {
      return this.options.ecmaVersion >= 5 && e.type === "ExpressionStatement" && e.expression.type === "Literal" && typeof e.expression.value === "string" && (this.input[e.start] === '"' || this.input[e.start] === "'");
    };
    var N = Parser.prototype;
    N.toAssignable = function toAssignable(e, t, i) {
      if (this.options.ecmaVersion >= 6 && e) switch (e.type) {
        case "Identifier":
          if (this.inAsync && e.name === "await") this.raise(e.start, "Cannot use 'await' as identifier inside an async function");
          break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          if (e.type = "ObjectPattern", i) this.checkPatternErrors(i, !0);
          for (var s = 0, properties_2 = e.properties; s < properties_2.length; s += 1) {
            var n = properties_2[s];
            if (this.toAssignable(n, t), n.type === "RestElement" && (n.argument.type === "ArrayPattern" || n.argument.type === "ObjectPattern")) this.raise(n.argument.start, "Unexpected token");
          }
          break;
        case "Property":
          if (e.kind !== "init") this.raise(e.key.start, "Object pattern can't contain getter or setter");
          this.toAssignable(e.value, t);
          break;
        case "ArrayExpression":
          if (e.type = "ArrayPattern", i) this.checkPatternErrors(i, !0);
          this.toAssignableList(e.elements, t);
          break;
        case "SpreadElement":
          if (e.type = "RestElement", this.toAssignable(e.argument, t), e.argument.type === "AssignmentPattern") this.raise(e.argument.start, "Rest elements cannot have a default value");
          break;
        case "AssignmentExpression":
          if (e.operator !== "=") this.raise(e.left.end, "Only '=' operator can be used for specifying default value.");
          e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(e.expression, t, i);
          break;
        case "ChainExpression":
          this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (!t) break;
        default:
          this.raise(e.start, "Assigning to rvalue");
      } else if (i) this.checkPatternErrors(i, !0);
      return e;
    }, N.toAssignableList = function toAssignableList(e, t) {
      var i = e.length;
      for (var s = 0; s < i; s++) {
        var r = e[s];
        if (r) this.toAssignable(r, t);
      }
      if (i) {
        var n = e[i - 1];
        if (this.options.ecmaVersion === 6 && t && n && n.type === "RestElement" && n.argument.type !== "Identifier") this.unexpected(n.argument.start);
      }
      return e;
    }, N.parseSpread = function parseSpread(e) {
      var t = this.startNode();
      return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
    }, N.parseRestBinding = function parseRestBinding() {
      var e = this.startNode();
      if (this.next(), this.options.ecmaVersion === 6 && this.type !== tokTypes.name) this.unexpected();
      return e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
    }, N.parseBindingAtom = function parseBindingAtom() {
      if (this.options.ecmaVersion >= 6) switch (this.type) {
        case tokTypes.bracketL:
          var e = this.startNode();
          return this.next(), e.elements = this.parseBindingList(tokTypes.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");
        case tokTypes.braceL:
          return this.parseObj(!0);
      }
      return this.parseIdent();
    }, N.parseBindingList = function parseBindingList(e, t, i, s) {
      var r = [],
        n = !0;
      while (!this.eat(e)) {
        if (n) n = !1;else this.expect(tokTypes.comma);
        if (t && this.type === tokTypes.comma) r.push(null);else if (i && this.afterTrailingComma(e)) break;else if (this.type === tokTypes.ellipsis) {
          var u = this.parseRestBinding();
          if (this.parseBindingListItem(u), r.push(u), this.type === tokTypes.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
          this.expect(e);
          break;
        } else r.push(this.parseAssignableListItem(s));
      }
      return r;
    }, N.parseAssignableListItem = function parseAssignableListItem(e) {
      var t = this.parseMaybeDefault(this.start, this.startLoc);
      return this.parseBindingListItem(t), t;
    }, N.parseBindingListItem = function parseBindingListItem(e) {
      return e;
    }, N.parseMaybeDefault = function parseMaybeDefault(e, t, i) {
      if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(tokTypes.eq)) return i;
      var s = this.startNodeAt(e, t);
      return s.left = i, s.right = this.parseMaybeAssign(), this.finishNode(s, "AssignmentPattern");
    }, N.checkLValSimple = function checkLValSimple(e, t, i) {
      if (t === void 0) t = ce;
      var s = t !== ce;
      switch (e.type) {
        case "Identifier":
          if (this.strict && this.reservedWordsStrictBind.test(e.name)) this.raiseRecoverable(e.start, (s ? "Binding " : "Assigning to ") + e.name + " in strict mode");
          if (s) {
            if (t === F && e.name === "let") this.raiseRecoverable(e.start, "let is disallowed as a lexically bound name");
            if (i) {
              if (H(i, e.name)) this.raiseRecoverable(e.start, "Argument name clash");
              i[e.name] = !0;
            }
            if (t !== We) this.declareName(e.name, t, e.start);
          }
          break;
        case "ChainExpression":
          this.raiseRecoverable(e.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (s) this.raiseRecoverable(e.start, "Binding member expression");
          break;
        case "ParenthesizedExpression":
          if (s) this.raiseRecoverable(e.start, "Binding parenthesized expression");
          return this.checkLValSimple(e.expression, t, i);
        default:
          this.raise(e.start, (s ? "Binding" : "Assigning to") + " rvalue");
      }
    }, N.checkLValPattern = function checkLValPattern(e, t, i) {
      if (t === void 0) t = ce;
      switch (e.type) {
        case "ObjectPattern":
          for (var s = 0, properties_3 = e.properties; s < properties_3.length; s += 1) {
            var n = properties_3[s];
            this.checkLValInnerPattern(n, t, i);
          }
          break;
        case "ArrayPattern":
          for (var u = 0, elements_2 = e.elements; u < elements_2.length; u += 1) {
            var h = elements_2[u];
            if (h) this.checkLValInnerPattern(h, t, i);
          }
          break;
        default:
          this.checkLValSimple(e, t, i);
      }
    }, N.checkLValInnerPattern = function checkLValInnerPattern(e, t, i) {
      if (t === void 0) t = ce;
      switch (e.type) {
        case "Property":
          this.checkLValInnerPattern(e.value, t, i);
          break;
        case "AssignmentPattern":
          this.checkLValPattern(e.left, t, i);
          break;
        case "RestElement":
          this.checkLValPattern(e.argument, t, i);
          break;
        default:
          this.checkLValPattern(e, t, i);
      }
    };
    var TokContext = function (t, i, s, r, n) {
        this.token = t, this.isExpr = !!i, this.preserveSpace = !!s, this.override = r, this.generator = !!n;
      },
      tokContexts = {
        b_stat: new TokContext("{", !1),
        b_expr: new TokContext("{", !0),
        b_tmpl: new TokContext("${", !1),
        p_stat: new TokContext("(", !1),
        p_expr: new TokContext("(", !0),
        q_tmpl: new TokContext("`", !0, !0, function (e) {
          return e.tryReadTemplateToken();
        }),
        f_stat: new TokContext("function", !1),
        f_expr: new TokContext("function", !0),
        f_expr_gen: new TokContext("function", !0, !1, null, !0),
        f_gen: new TokContext("function", !1, !1, null, !0)
      },
      K = Parser.prototype;
    K.initialContext = function initialContext() {
      return [tokContexts.b_stat];
    }, K.curContext = function curContext() {
      return this.context[this.context.length - 1];
    }, K.braceIsBlock = function braceIsBlock(e) {
      var t = this.curContext();
      if (t === tokContexts.f_expr || t === tokContexts.f_stat) return !0;
      if (e === tokTypes.colon && (t === tokContexts.b_stat || t === tokContexts.b_expr)) return !t.isExpr;
      if (e === tokTypes._return || e === tokTypes.name && this.exprAllowed) return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
      if (e === tokTypes._else || e === tokTypes.semi || e === tokTypes.eof || e === tokTypes.parenR || e === tokTypes.arrow) return !0;
      if (e === tokTypes.braceL) return t === tokContexts.b_stat;
      if (e === tokTypes._var || e === tokTypes._const || e === tokTypes.name) return !1;
      return !this.exprAllowed;
    }, K.inGeneratorContext = function inGeneratorContext() {
      for (var e = this.context.length - 1; e >= 1; e--) {
        var t = this.context[e];
        if (t.token === "function") return t.generator;
      }
      return !1;
    }, K.updateContext = function updateContext(e) {
      var t,
        i = this.type;
      if (i.keyword && e === tokTypes.dot) this.exprAllowed = !1;else if (t = i.updateContext) t.call(this, e);else this.exprAllowed = i.beforeExpr;
    }, K.overrideContext = function overrideContext(e) {
      if (this.curContext() !== e) this.context[this.context.length - 1] = e;
    }, tokTypes.parenR.updateContext = tokTypes.braceR.updateContext = function updateContext() {
      if (this.context.length === 1) {
        this.exprAllowed = !0;
        return;
      }
      var e = this.context.pop();
      if (e === tokContexts.b_stat && this.curContext().token === "function") e = this.context.pop();
      this.exprAllowed = !e.isExpr;
    }, tokTypes.braceL.updateContext = function updateContext(e) {
      this.context.push(this.braceIsBlock(e) ? tokContexts.b_stat : tokContexts.b_expr), this.exprAllowed = !0;
    }, tokTypes.dollarBraceL.updateContext = function updateContext() {
      this.context.push(tokContexts.b_tmpl), this.exprAllowed = !0;
    }, tokTypes.parenL.updateContext = function updateContext(e) {
      var t = e === tokTypes._if || e === tokTypes._for || e === tokTypes._with || e === tokTypes._while;
      this.context.push(t ? tokContexts.p_stat : tokContexts.p_expr), this.exprAllowed = !0;
    }, tokTypes.incDec.updateContext = function updateContext() {}, tokTypes._function.updateContext = tokTypes._class.updateContext = function updateContext(e) {
      if (e.beforeExpr && e !== tokTypes._else && !(e === tokTypes.semi && this.curContext() !== tokContexts.p_stat) && !(e === tokTypes._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((e === tokTypes.colon || e === tokTypes.braceL) && this.curContext() === tokContexts.b_stat)) this.context.push(tokContexts.f_expr);else this.context.push(tokContexts.f_stat);
      this.exprAllowed = !1;
    }, tokTypes.colon.updateContext = function updateContext() {
      if (this.curContext().token === "function") this.context.pop();
      this.exprAllowed = !0;
    }, tokTypes.backQuote.updateContext = function updateContext() {
      if (this.curContext() === tokContexts.q_tmpl) this.context.pop();else this.context.push(tokContexts.q_tmpl);
      this.exprAllowed = !1;
    }, tokTypes.star.updateContext = function updateContext(e) {
      if (e === tokTypes._function) {
        var t = this.context.length - 1;
        if (this.context[t] === tokContexts.f_expr) this.context[t] = tokContexts.f_expr_gen;else this.context[t] = tokContexts.f_gen;
      }
      this.exprAllowed = !0;
    }, tokTypes.name.updateContext = function updateContext(e) {
      var t = !1;
      if (this.options.ecmaVersion >= 6 && e !== tokTypes.dot) {
        if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) t = !0;
      }
      this.exprAllowed = t;
    };
    var f = Parser.prototype;
    f.checkPropClash = function checkPropClash(e, t, i) {
      if (this.options.ecmaVersion >= 9 && e.type === "SpreadElement") return;
      if (this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand)) return;
      var s = e.key,
        r;
      switch (s.type) {
        case "Identifier":
          r = s.name;
          break;
        case "Literal":
          r = String(s.value);
          break;
        default:
          return;
      }
      var kind_2 = e.kind;
      if (this.options.ecmaVersion >= 6) {
        if (r === "__proto__" && kind_2 === "init") {
          if (t.proto) if (i) {
            if (i.doubleProto < 0) i.doubleProto = s.start;
          } else this.raiseRecoverable(s.start, "Redefinition of __proto__ property");
          t.proto = !0;
        }
        return;
      }
      r = "$" + r;
      var u = t[r];
      if (u) {
        var o;
        if (kind_2 === "init") o = this.strict && u.init || u.get || u.set;else o = u.init || u[kind_2];
        if (o) this.raiseRecoverable(s.start, "Redefinition of property");
      } else u = t[r] = {
        init: !1,
        get: !1,
        set: !1
      };
      u[kind_2] = !0;
    }, f.parseExpression = function parseExpression(e, t) {
      var start_3 = this.start,
        startLoc = this.startLoc,
        r = this.parseMaybeAssign(e, t);
      if (this.type === tokTypes.comma) {
        var n = this.startNodeAt(start_3, startLoc);
        n.expressions = [r];
        while (this.eat(tokTypes.comma)) n.expressions.push(this.parseMaybeAssign(e, t));
        return this.finishNode(n, "SequenceExpression");
      }
      return r;
    }, f.parseMaybeAssign = function parseMaybeAssign(e, t, i) {
      if (this.isContextual("yield")) if (this.inGenerator) return this.parseYield(e);else this.exprAllowed = !1;
      var s = !1,
        r = -1,
        n = -1,
        u = -1;
      if (t) r = t.parenthesizedAssign, n = t.trailingComma, u = t.doubleProto, t.parenthesizedAssign = t.trailingComma = -1;else t = new pe(), s = !0;
      var start_4 = this.start,
        startLoc_2 = this.startLoc;
      if (this.type === tokTypes.parenL || this.type === tokTypes.name) this.potentialArrowAt = this.start, this.potentialArrowInForAwait = e === "await";
      var l = this.parseMaybeConditional(e, t);
      if (i) l = i.call(this, l, start_4, startLoc_2);
      if (this.type.isAssign) {
        var d = this.startNodeAt(start_4, startLoc_2);
        if (d.operator = this.value, this.type === tokTypes.eq) l = this.toAssignable(l, !1, t);
        if (!s) t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1;
        if (t.shorthandAssign >= l.start) t.shorthandAssign = -1;
        if (this.type === tokTypes.eq) this.checkLValPattern(l);else this.checkLValSimple(l);
        if (d.left = l, this.next(), d.right = this.parseMaybeAssign(e), u > -1) t.doubleProto = u;
        return this.finishNode(d, "AssignmentExpression");
      } else if (s) this.checkExpressionErrors(t, !0);
      if (r > -1) t.parenthesizedAssign = r;
      if (n > -1) t.trailingComma = n;
      return l;
    }, f.parseMaybeConditional = function parseMaybeConditional(e, t) {
      var start_5 = this.start,
        startLoc_3 = this.startLoc,
        r = this.parseExprOps(e, t);
      if (this.checkExpressionErrors(t)) return r;
      if (this.eat(tokTypes.question)) {
        var n = this.startNodeAt(start_5, startLoc_3);
        return n.test = r, n.consequent = this.parseMaybeAssign(), this.expect(tokTypes.colon), n.alternate = this.parseMaybeAssign(e), this.finishNode(n, "ConditionalExpression");
      }
      return r;
    }, f.parseExprOps = function parseExprOps(e, t) {
      var start_6 = this.start,
        startLoc_4 = this.startLoc,
        r = this.parseMaybeUnary(t, !1, !1, e);
      if (this.checkExpressionErrors(t)) return r;
      return r.start === start_6 && r.type === "ArrowFunctionExpression" ? r : this.parseExprOp(r, start_6, startLoc_4, -1, e);
    }, f.parseExprOp = function parseExprOp(e, t, i, s, r) {
      var binop_2 = this.type.binop;
      if (binop_2 != null && (!r || this.type !== tokTypes._in)) {
        if (binop_2 > s) {
          var u = this.type === tokTypes.logicalOR || this.type === tokTypes.logicalAND,
            o = this.type === tokTypes.coalesce;
          if (o) binop_2 = tokTypes.logicalAND.binop;
          var h = this.value;
          this.next();
          var start_7 = this.start,
            startLoc_5 = this.startLoc,
            y = this.parseExprOp(this.parseMaybeUnary(null, !1, !1, r), start_7, startLoc_5, binop_2, r),
            S = this.buildBinary(t, i, e, y, h, u || o);
          if (u && this.type === tokTypes.coalesce || o && (this.type === tokTypes.logicalOR || this.type === tokTypes.logicalAND)) this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
          return this.parseExprOp(S, t, i, s, r);
        }
      }
      return e;
    }, f.buildBinary = function buildBinary(e, t, i, s, r, n) {
      if (s.type === "PrivateIdentifier") this.raise(s.start, "Private identifier can only be left side of binary expression");
      var u = this.startNodeAt(e, t);
      return u.left = i, u.operator = r, u.right = s, this.finishNode(u, n ? "LogicalExpression" : "BinaryExpression");
    }, f.parseMaybeUnary = function parseMaybeUnary(e, t, i, s) {
      var start_8 = this.start,
        startLoc_6 = this.startLoc,
        u;
      if (this.isContextual("await") && this.canAwait) u = this.parseAwait(s), t = !0;else if (this.type.prefix) {
        var o = this.startNode(),
          h = this.type === tokTypes.incDec;
        if (o.operator = this.value, o.prefix = !0, this.next(), o.argument = this.parseMaybeUnary(null, !0, h, s), this.checkExpressionErrors(e, !0), h) this.checkLValSimple(o.argument);else if (this.strict && o.operator === "delete" && Ke(o.argument)) this.raiseRecoverable(o.start, "Deleting local variable in strict mode");else if (o.operator === "delete" && Ne(o.argument)) this.raiseRecoverable(o.start, "Private fields can not be deleted");else t = !0;
        u = this.finishNode(o, h ? "UpdateExpression" : "UnaryExpression");
      } else if (!t && this.type === tokTypes.privateId) {
        if ((s || this.privateNameStack.length === 0) && this.options.checkPrivateFields) this.unexpected();
        if (u = this.parsePrivateIdent(), this.type !== tokTypes._in) this.unexpected();
      } else {
        if (u = this.parseExprSubscripts(e, s), this.checkExpressionErrors(e)) return u;
        while (this.type.postfix && !this.canInsertSemicolon()) {
          var l = this.startNodeAt(start_8, startLoc_6);
          l.operator = this.value, l.prefix = !1, l.argument = u, this.checkLValSimple(u), this.next(), u = this.finishNode(l, "UpdateExpression");
        }
      }
      if (!i && this.eat(tokTypes.starstar)) {
        if (t) this.unexpected(this.lastTokStart);else return this.buildBinary(start_8, startLoc_6, u, this.parseMaybeUnary(null, !1, !1, s), "**", !1);
      } else return u;
    };
    function Ke(e) {
      return e.type === "Identifier" || e.type === "ParenthesizedExpression" && Ke(e.expression);
    }
    function Ne(e) {
      return e.type === "MemberExpression" && e.property.type === "PrivateIdentifier" || e.type === "ChainExpression" && Ne(e.expression) || e.type === "ParenthesizedExpression" && Ne(e.expression);
    }
    f.parseExprSubscripts = function parseExprSubscripts(e, t) {
      var start_9 = this.start,
        startLoc_7 = this.startLoc,
        r = this.parseExprAtom(e, t);
      if (r.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") return r;
      var n = this.parseSubscripts(r, start_9, startLoc_7, !1, t);
      if (e && n.type === "MemberExpression") {
        if (e.parenthesizedAssign >= n.start) e.parenthesizedAssign = -1;
        if (e.parenthesizedBind >= n.start) e.parenthesizedBind = -1;
        if (e.trailingComma >= n.start) e.trailingComma = -1;
      }
      return n;
    }, f.parseSubscripts = function parseSubscripts(e, t, i, s, r) {
      var n = this.options.ecmaVersion >= 8 && e.type === "Identifier" && e.name === "async" && this.lastTokEnd === e.end && !this.canInsertSemicolon() && e.end - e.start === 5 && this.potentialArrowAt === e.start,
        u = !1;
      while (!0) {
        var o = this.parseSubscript(e, t, i, s, n, u, r);
        if (o.optional) u = !0;
        if (o === e || o.type === "ArrowFunctionExpression") {
          if (u) {
            var h = this.startNodeAt(t, i);
            h.expression = o, o = this.finishNode(h, "ChainExpression");
          }
          return o;
        }
        e = o;
      }
    }, f.shouldParseAsyncArrow = function shouldParseAsyncArrow() {
      return !this.canInsertSemicolon() && this.eat(tokTypes.arrow);
    }, f.parseSubscriptAsyncArrow = function parseSubscriptAsyncArrow(e, t, i, s) {
      return this.parseArrowExpression(this.startNodeAt(e, t), i, !0, s);
    }, f.parseSubscript = function parseSubscript(e, t, i, s, r, n, u) {
      var o = this.options.ecmaVersion >= 11,
        h = o && this.eat(tokTypes.questionDot);
      if (s && h) this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
      var l = this.eat(tokTypes.bracketL);
      if (l || h && this.type !== tokTypes.parenL && this.type !== tokTypes.backQuote || this.eat(tokTypes.dot)) {
        var d = this.startNodeAt(t, i);
        if (d.object = e, l) d.property = this.parseExpression(), this.expect(tokTypes.bracketR);else if (this.type === tokTypes.privateId && e.type !== "Super") d.property = this.parsePrivateIdent();else d.property = this.parseIdent(this.options.allowReserved !== "never");
        if (d.computed = !!l, o) d.optional = h;
        e = this.finishNode(d, "MemberExpression");
      } else if (!s && this.eat(tokTypes.parenL)) {
        var y = new pe(),
          yieldPos_2 = this.yieldPos,
          awaitPos_2 = this.awaitPos,
          awaitIdentPos_2 = this.awaitIdentPos;
        this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0;
        var ve = this.parseExprList(tokTypes.parenR, this.options.ecmaVersion >= 8, !1, y);
        if (r && !h && this.shouldParseAsyncArrow()) {
          if (this.checkPatternErrors(y, !1), this.checkYieldAwaitInDefaultParams(), this.awaitIdentPos > 0) this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
          return this.yieldPos = yieldPos_2, this.awaitPos = awaitPos_2, this.awaitIdentPos = awaitIdentPos_2, this.parseSubscriptAsyncArrow(t, i, ve, u);
        }
        this.checkExpressionErrors(y, !0), this.yieldPos = yieldPos_2 || this.yieldPos, this.awaitPos = awaitPos_2 || this.awaitPos, this.awaitIdentPos = awaitIdentPos_2 || this.awaitIdentPos;
        var Y = this.startNodeAt(t, i);
        if (Y.callee = e, Y.arguments = ve, o) Y.optional = h;
        e = this.finishNode(Y, "CallExpression");
      } else if (this.type === tokTypes.backQuote) {
        if (h || n) this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
        var X = this.startNodeAt(t, i);
        X.tag = e, X.quasi = this.parseTemplate({
          isTagged: !0
        }), e = this.finishNode(X, "TaggedTemplateExpression");
      }
      return e;
    }, f.parseExprAtom = function parseExprAtom(e, t, i) {
      if (this.type === tokTypes.slash) this.readRegexp();
      var s,
        r = this.potentialArrowAt === this.start;
      switch (this.type) {
        case tokTypes._super:
          if (!this.allowSuper) this.raise(this.start, "'super' keyword outside a method");
          if (s = this.startNode(), this.next(), this.type === tokTypes.parenL && !this.allowDirectSuper) this.raise(s.start, "super() call outside constructor of a subclass");
          if (this.type !== tokTypes.dot && this.type !== tokTypes.bracketL && this.type !== tokTypes.parenL) this.unexpected();
          return this.finishNode(s, "Super");
        case tokTypes._this:
          return s = this.startNode(), this.next(), this.finishNode(s, "ThisExpression");
        case tokTypes.name:
          var start_10 = this.start,
            startLoc_8 = this.startLoc,
            containsEsc_2 = this.containsEsc,
            h = this.parseIdent(!1);
          if (this.options.ecmaVersion >= 8 && !containsEsc_2 && h.name === "async" && !this.canInsertSemicolon() && this.eat(tokTypes._function)) return this.overrideContext(tokContexts.f_expr), this.parseFunction(this.startNodeAt(start_10, startLoc_8), 0, !1, !0, t);
          if (r && !this.canInsertSemicolon()) {
            if (this.eat(tokTypes.arrow)) return this.parseArrowExpression(this.startNodeAt(start_10, startLoc_8), [h], !1, t);
            if (this.options.ecmaVersion >= 8 && h.name === "async" && this.type === tokTypes.name && !containsEsc_2 && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
              if (h = this.parseIdent(!1), this.canInsertSemicolon() || !this.eat(tokTypes.arrow)) this.unexpected();
              return this.parseArrowExpression(this.startNodeAt(start_10, startLoc_8), [h], !0, t);
            }
          }
          return h;
        case tokTypes.regexp:
          var l = this.value;
          return s = this.parseLiteral(l.value), s.regex = {
            pattern: l.pattern,
            flags: l.flags
          }, s;
        case tokTypes.num:
        case tokTypes.string:
          return this.parseLiteral(this.value);
        case tokTypes._null:
        case tokTypes._true:
        case tokTypes._false:
          return s = this.startNode(), s.value = this.type === tokTypes._null ? null : this.type === tokTypes._true, s.raw = this.type.keyword, this.next(), this.finishNode(s, "Literal");
        case tokTypes.parenL:
          var start_11 = this.start,
            y = this.parseParenAndDistinguishExpression(r, t);
          if (e) {
            if (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(y)) e.parenthesizedAssign = start_11;
            if (e.parenthesizedBind < 0) e.parenthesizedBind = start_11;
          }
          return y;
        case tokTypes.bracketL:
          return s = this.startNode(), this.next(), s.elements = this.parseExprList(tokTypes.bracketR, !0, !0, e), this.finishNode(s, "ArrayExpression");
        case tokTypes.braceL:
          return this.overrideContext(tokContexts.b_expr), this.parseObj(!1, e);
        case tokTypes._function:
          return s = this.startNode(), this.next(), this.parseFunction(s, 0);
        case tokTypes._class:
          return this.parseClass(this.startNode(), !1);
        case tokTypes._new:
          return this.parseNew();
        case tokTypes.backQuote:
          return this.parseTemplate();
        case tokTypes._import:
          if (this.options.ecmaVersion >= 11) return this.parseExprImport(i);else return this.unexpected();
        default:
          return this.parseExprAtomDefault();
      }
    }, f.parseExprAtomDefault = function parseExprAtomDefault() {
      this.unexpected();
    }, f.parseExprImport = function parseExprImport(e) {
      var t = this.startNode();
      if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword import");
      if (this.next(), this.type === tokTypes.parenL && !e) return this.parseDynamicImport(t);else if (this.type === tokTypes.dot) {
        var i = this.startNodeAt(t.start, t.loc && t.loc.start);
        return i.name = "import", t.meta = this.finishNode(i, "Identifier"), this.parseImportMeta(t);
      } else this.unexpected();
    }, f.parseDynamicImport = function parseDynamicImport(e) {
      if (this.next(), e.source = this.parseMaybeAssign(), this.options.ecmaVersion >= 16) {
        if (!this.eat(tokTypes.parenR)) {
          if (this.expect(tokTypes.comma), !this.afterTrailingComma(tokTypes.parenR)) {
            if (e.options = this.parseMaybeAssign(), !this.eat(tokTypes.parenR)) {
              if (this.expect(tokTypes.comma), !this.afterTrailingComma(tokTypes.parenR)) this.unexpected();
            }
          } else e.options = null;
        } else e.options = null;
      } else if (!this.eat(tokTypes.parenR)) {
        var start_12 = this.start;
        if (this.eat(tokTypes.comma) && this.eat(tokTypes.parenR)) this.raiseRecoverable(start_12, "Trailing comma is not allowed in import()");else this.unexpected(start_12);
      }
      return this.finishNode(e, "ImportExpression");
    }, f.parseImportMeta = function parseImportMeta(e) {
      this.next();
      var containsEsc_3 = this.containsEsc;
      if (e.property = this.parseIdent(!0), e.property.name !== "meta") this.raiseRecoverable(e.property.start, "The only valid meta property for import is 'import.meta'");
      if (containsEsc_3) this.raiseRecoverable(e.start, "'import.meta' must not contain escaped characters");
      if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) this.raiseRecoverable(e.start, "Cannot use 'import.meta' outside a module");
      return this.finishNode(e, "MetaProperty");
    }, f.parseLiteral = function parseLiteral(e) {
      var t = this.startNode();
      if (t.value = e, t.raw = this.input.slice(this.start, this.end), t.raw.charCodeAt(t.raw.length - 1) === 110) t.bigint = t.value != null ? t.value.toString() : t.raw.slice(0, -1).replace(/_/g, "");
      return this.next(), this.finishNode(t, "Literal");
    }, f.parseParenExpression = function parseParenExpression() {
      this.expect(tokTypes.parenL);
      var e = this.parseExpression();
      return this.expect(tokTypes.parenR), e;
    }, f.shouldParseArrow = function shouldParseArrow(e) {
      return !this.canInsertSemicolon();
    }, f.parseParenAndDistinguishExpression = function parseParenAndDistinguishExpression(e, t) {
      var start_13 = this.start,
        startLoc_9 = this.startLoc,
        r,
        n = this.options.ecmaVersion >= 8;
      if (this.options.ecmaVersion >= 6) {
        this.next();
        var start_14 = this.start,
          startLoc_10 = this.startLoc,
          h = [],
          l = !0,
          d = !1,
          y = new pe(),
          yieldPos_3 = this.yieldPos,
          awaitPos_3 = this.awaitPos,
          Q;
        this.yieldPos = 0, this.awaitPos = 0;
        while (this.type !== tokTypes.parenR) if (l ? l = !1 : this.expect(tokTypes.comma), n && this.afterTrailingComma(tokTypes.parenR, !0)) {
          d = !0;
          break;
        } else if (this.type === tokTypes.ellipsis) {
          if (Q = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === tokTypes.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
          break;
        } else h.push(this.parseMaybeAssign(!1, y, this.parseParenItem));
        var lastTokEnd = this.lastTokEnd,
          lastTokEndLoc = this.lastTokEndLoc;
        if (this.expect(tokTypes.parenR), e && this.shouldParseArrow(h) && this.eat(tokTypes.arrow)) return this.checkPatternErrors(y, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = yieldPos_3, this.awaitPos = awaitPos_3, this.parseParenArrowList(start_13, startLoc_9, h, t);
        if (!h.length || d) this.unexpected(this.lastTokStart);
        if (Q) this.unexpected(Q);
        if (this.checkExpressionErrors(y, !0), this.yieldPos = yieldPos_3 || this.yieldPos, this.awaitPos = awaitPos_3 || this.awaitPos, h.length > 1) r = this.startNodeAt(start_14, startLoc_10), r.expressions = h, this.finishNodeAt(r, "SequenceExpression", lastTokEnd, lastTokEndLoc);else r = h[0];
      } else r = this.parseParenExpression();
      if (this.options.preserveParens) {
        var X = this.startNodeAt(start_13, startLoc_9);
        return X.expression = r, this.finishNode(X, "ParenthesizedExpression");
      } else return r;
    }, f.parseParenItem = function parseParenItem(e) {
      return e;
    }, f.parseParenArrowList = function parseParenArrowList(e, t, i, s) {
      return this.parseArrowExpression(this.startNodeAt(e, t), i, !1, s);
    };
    var Lt = [];
    f.parseNew = function parseNew() {
      if (this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword new");
      var e = this.startNode();
      if (this.next(), this.options.ecmaVersion >= 6 && this.type === tokTypes.dot) {
        var t = this.startNodeAt(e.start, e.loc && e.loc.start);
        t.name = "new", e.meta = this.finishNode(t, "Identifier"), this.next();
        var containsEsc_4 = this.containsEsc;
        if (e.property = this.parseIdent(!0), e.property.name !== "target") this.raiseRecoverable(e.property.start, "The only valid meta property for new is 'new.target'");
        if (containsEsc_4) this.raiseRecoverable(e.start, "'new.target' must not contain escaped characters");
        if (!this.allowNewDotTarget) this.raiseRecoverable(e.start, "'new.target' can only be used in functions and class static block");
        return this.finishNode(e, "MetaProperty");
      }
      var start_15 = this.start,
        startLoc_11 = this.startLoc;
      if (e.callee = this.parseSubscripts(this.parseExprAtom(null, !1, !0), start_15, startLoc_11, !0, !1), this.eat(tokTypes.parenL)) e.arguments = this.parseExprList(tokTypes.parenR, this.options.ecmaVersion >= 8, !1);else e.arguments = Lt;
      return this.finishNode(e, "NewExpression");
    }, f.parseTemplateElement = function parseTemplateElement(e) {
      var isTagged = e.isTagged,
        i = this.startNode();
      if (this.type === tokTypes.invalidTemplate) {
        if (!isTagged) this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
        i.value = {
          raw: this.value.replace(/\r\n?/g, `
`),
          cooked: null
        };
      } else i.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, `
`),
        cooked: this.value
      };
      return this.next(), i.tail = this.type === tokTypes.backQuote, this.finishNode(i, "TemplateElement");
    }, f.parseTemplate = function parseTemplate(e) {
      if (e === void 0) e = {};
      var isTagged_2 = e.isTagged;
      if (isTagged_2 === void 0) isTagged_2 = !1;
      var i = this.startNode();
      this.next(), i.expressions = [];
      var s = this.parseTemplateElement({
        isTagged: isTagged_2
      });
      i.quasis = [s];
      while (!s.tail) {
        if (this.type === tokTypes.eof) this.raise(this.pos, "Unterminated template literal");
        this.expect(tokTypes.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(tokTypes.braceR), i.quasis.push(s = this.parseTemplateElement({
          isTagged: isTagged_2
        }));
      }
      return this.next(), this.finishNode(i, "TemplateLiteral");
    }, f.isAsyncProp = function isAsyncProp(e) {
      return !e.computed && e.key.type === "Identifier" && e.key.name === "async" && (this.type === tokTypes.name || this.type === tokTypes.num || this.type === tokTypes.string || this.type === tokTypes.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === tokTypes.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    }, f.parseObj = function parseObj(e, t) {
      var i = this.startNode(),
        s = !0,
        r = {};
      i.properties = [], this.next();
      while (!this.eat(tokTypes.braceR)) {
        if (!s) {
          if (this.expect(tokTypes.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(tokTypes.braceR)) break;
        } else s = !1;
        var n = this.parseProperty(e, t);
        if (!e) this.checkPropClash(n, r, t);
        i.properties.push(n);
      }
      return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
    }, f.parseProperty = function parseProperty(e, t) {
      var i = this.startNode(),
        s,
        r,
        n,
        u;
      if (this.options.ecmaVersion >= 9 && this.eat(tokTypes.ellipsis)) {
        if (e) {
          if (i.argument = this.parseIdent(!1), this.type === tokTypes.comma) this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
          return this.finishNode(i, "RestElement");
        }
        if (i.argument = this.parseMaybeAssign(!1, t), this.type === tokTypes.comma && t && t.trailingComma < 0) t.trailingComma = this.start;
        return this.finishNode(i, "SpreadElement");
      }
      if (this.options.ecmaVersion >= 6) {
        if (i.method = !1, i.shorthand = !1, e || t) n = this.start, u = this.startLoc;
        if (!e) s = this.eat(tokTypes.star);
      }
      var containsEsc_5 = this.containsEsc;
      if (this.parsePropertyName(i), !e && !containsEsc_5 && this.options.ecmaVersion >= 8 && !s && this.isAsyncProp(i)) r = !0, s = this.options.ecmaVersion >= 9 && this.eat(tokTypes.star), this.parsePropertyName(i);else r = !1;
      return this.parsePropertyValue(i, e, s, r, n, u, t, containsEsc_5), this.finishNode(i, "Property");
    }, f.parseGetterSetter = function parseGetterSetter(e) {
      var t = e.key.name;
      this.parsePropertyName(e), e.value = this.parseMethod(!1), e.kind = t;
      var i = e.kind === "get" ? 0 : 1;
      if (e.value.params.length !== i) {
        var start_16 = e.value.start;
        if (e.kind === "get") this.raiseRecoverable(start_16, "getter should have no params");else this.raiseRecoverable(start_16, "setter should have exactly one param");
      } else if (e.kind === "set" && e.value.params[0].type === "RestElement") this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
    }, f.parsePropertyValue = function parsePropertyValue(e, t, i, s, r, n, u, o) {
      if ((i || s) && this.type === tokTypes.colon) this.unexpected();
      if (this.eat(tokTypes.colon)) e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, u), e.kind = "init";else if (this.options.ecmaVersion >= 6 && this.type === tokTypes.parenL) {
        if (t) this.unexpected();
        e.method = !0, e.value = this.parseMethod(i, s), e.kind = "init";
      } else if (!t && !o && this.options.ecmaVersion >= 5 && !e.computed && e.key.type === "Identifier" && (e.key.name === "get" || e.key.name === "set") && this.type !== tokTypes.comma && this.type !== tokTypes.braceR && this.type !== tokTypes.eq) {
        if (i || s) this.unexpected();
        this.parseGetterSetter(e);
      } else if (this.options.ecmaVersion >= 6 && !e.computed && e.key.type === "Identifier") {
        if (i || s) this.unexpected();
        if (this.checkUnreserved(e.key), e.key.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = r;
        if (t) e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key));else if (this.type === tokTypes.eq && u) {
          if (u.shorthandAssign < 0) u.shorthandAssign = this.start;
          e.value = this.parseMaybeDefault(r, n, this.copyNode(e.key));
        } else e.value = this.copyNode(e.key);
        e.kind = "init", e.shorthand = !0;
      } else this.unexpected();
    }, f.parsePropertyName = function parsePropertyName(e) {
      if (this.options.ecmaVersion >= 6) if (this.eat(tokTypes.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(tokTypes.bracketR), e.key;else e.computed = !1;
      return e.key = this.type === tokTypes.num || this.type === tokTypes.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
    }, f.initFunction = function initFunction(e) {
      if (e.id = null, this.options.ecmaVersion >= 6) e.generator = e.expression = !1;
      if (this.options.ecmaVersion >= 8) e.async = !1;
    }, f.parseMethod = function parseMethod(e, t, i) {
      var s = this.startNode(),
        yieldPos_4 = this.yieldPos,
        awaitPos_4 = this.awaitPos,
        awaitIdentPos_3 = this.awaitIdentPos;
      if (this.initFunction(s), this.options.ecmaVersion >= 6) s.generator = e;
      if (this.options.ecmaVersion >= 8) s.async = !!t;
      return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, this.enterScope(Ae(t, s.generator) | oe | (i ? je : 0)), this.expect(tokTypes.parenL), s.params = this.parseBindingList(tokTypes.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(s, !1, !0, !1), this.yieldPos = yieldPos_4, this.awaitPos = awaitPos_4, this.awaitIdentPos = awaitIdentPos_3, this.finishNode(s, "FunctionExpression");
    }, f.parseArrowExpression = function parseArrowExpression(e, t, i, s) {
      var yieldPos_5 = this.yieldPos,
        awaitPos_5 = this.awaitPos,
        awaitIdentPos_4 = this.awaitIdentPos;
      if (this.enterScope(Ae(i, !1) | we), this.initFunction(e), this.options.ecmaVersion >= 8) e.async = !!i;
      return this.yieldPos = 0, this.awaitPos = 0, this.awaitIdentPos = 0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0, !1, s), this.yieldPos = yieldPos_5, this.awaitPos = awaitPos_5, this.awaitIdentPos = awaitIdentPos_4, this.finishNode(e, "ArrowFunctionExpression");
    }, f.parseFunctionBody = function parseFunctionBody(e, t, i, s) {
      var r = t && this.type !== tokTypes.braceL,
        strict_2 = this.strict,
        u = !1;
      if (r) e.body = this.parseMaybeAssign(s), e.expression = !0, this.checkParams(e, !1);else {
        var o = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
        if (!strict_2 || o) {
          if (u = this.strictDirective(this.end), u && o) this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");
        }
        var labels_3 = this.labels;
        if (this.labels = [], u) this.strict = !0;
        if (this.checkParams(e, !strict_2 && !u && !t && !i && this.isSimpleParamList(e.params)), this.strict && e.id) this.checkLValSimple(e.id, We);
        e.body = this.parseBlock(!1, void 0, u && !strict_2), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = labels_3;
      }
      this.exitScope();
    }, f.isSimpleParamList = function isSimpleParamList(e) {
      for (var t = 0, i = e; t < i.length; t += 1) {
        var s = i[t];
        if (s.type !== "Identifier") return !1;
      }
      return !0;
    }, f.checkParams = function checkParams(e, t) {
      var i = Object.create(null);
      for (var s = 0, params = e.params; s < params.length; s += 1) {
        var n = params[s];
        this.checkLValInnerPattern(n, Ie, t ? null : i);
      }
    }, f.parseExprList = function parseExprList(e, t, i, s) {
      var r = [],
        n = !0;
      while (!this.eat(e)) {
        if (!n) {
          if (this.expect(tokTypes.comma), t && this.afterTrailingComma(e)) break;
        } else n = !1;
        var u = void 0;
        if (i && this.type === tokTypes.comma) u = null;else if (this.type === tokTypes.ellipsis) {
          if (u = this.parseSpread(s), s && this.type === tokTypes.comma && s.trailingComma < 0) s.trailingComma = this.start;
        } else u = this.parseMaybeAssign(!1, s);
        r.push(u);
      }
      return r;
    }, f.checkUnreserved = function checkUnreserved(e) {
      var {
        start: start_17,
        end: end_2,
        name: name_2
      } = e;
      if (this.inGenerator && name_2 === "yield") this.raiseRecoverable(start_17, "Cannot use 'yield' as identifier inside a generator");
      if (this.inAsync && name_2 === "await") this.raiseRecoverable(start_17, "Cannot use 'await' as identifier inside an async function");
      if (!(this.currentThisScope().flags & he) && name_2 === "arguments") this.raiseRecoverable(start_17, "Cannot use 'arguments' in class field initializer");
      if (this.inClassStaticBlock && (name_2 === "arguments" || name_2 === "await")) this.raise(start_17, "Cannot use " + name_2 + " in class static initialization block");
      if (this.keywords.test(name_2)) this.raise(start_17, "Unexpected keyword '" + name_2 + "'");
      if (this.options.ecmaVersion < 6 && this.input.slice(start_17, end_2).indexOf("\\") !== -1) return;
      var r = this.strict ? this.reservedWordsStrict : this.reservedWords;
      if (r.test(name_2)) {
        if (!this.inAsync && name_2 === "await") this.raiseRecoverable(start_17, "Cannot use keyword 'await' outside an async function");
        this.raiseRecoverable(start_17, "The keyword '" + name_2 + "' is reserved");
      }
    }, f.parseIdent = function parseIdent(e) {
      var t = this.parseIdentNode();
      if (this.next(!!e), this.finishNode(t, "Identifier"), !e) {
        if (this.checkUnreserved(t), t.name === "await" && !this.awaitIdentPos) this.awaitIdentPos = t.start;
      }
      return t;
    }, f.parseIdentNode = function parseIdentNode() {
      var e = this.startNode();
      if (this.type === tokTypes.name) e.name = this.value;else if (this.type.keyword) {
        if (e.name = this.type.keyword, (e.name === "class" || e.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) this.context.pop();
        this.type = tokTypes.name;
      } else this.unexpected();
      return e;
    }, f.parsePrivateIdent = function parsePrivateIdent() {
      var e = this.startNode();
      if (this.type === tokTypes.privateId) e.name = this.value;else this.unexpected();
      if (this.next(), this.finishNode(e, "PrivateIdentifier"), this.options.checkPrivateFields) if (this.privateNameStack.length === 0) this.raise(e.start, "Private field '#" + e.name + "' must be declared in an enclosing class");else this.privateNameStack[this.privateNameStack.length - 1].used.push(e);
      return e;
    }, f.parseYield = function parseYield(e) {
      if (!this.yieldPos) this.yieldPos = this.start;
      var t = this.startNode();
      if (this.next(), this.type === tokTypes.semi || this.canInsertSemicolon() || this.type !== tokTypes.star && !this.type.startsExpr) t.delegate = !1, t.argument = null;else t.delegate = this.eat(tokTypes.star), t.argument = this.parseMaybeAssign(e);
      return this.finishNode(t, "YieldExpression");
    }, f.parseAwait = function parseAwait(e) {
      if (!this.awaitPos) this.awaitPos = this.start;
      var t = this.startNode();
      return this.next(), t.argument = this.parseMaybeUnary(null, !0, !1, e), this.finishNode(t, "AwaitExpression");
    };
    var fe = Parser.prototype;
    fe.raise = function raise(e, t) {
      var i = getLineInfo(this.input, e);
      if (t += " (" + i.line + ":" + i.column + ")", this.sourceFile) t += " in " + this.sourceFile;
      var s = SyntaxError(t);
      throw s.pos = e, s.loc = i, s.raisedAt = this.pos, s;
    }, fe.raiseRecoverable = fe.raise, fe.curPosition = function curPosition() {
      if (this.options.locations) return new Position(this.curLine, this.pos - this.lineStart);
    };
    var q = Parser.prototype,
      Rt = function (t) {
        this.flags = t, this.var = [], this.lexical = [], this.functions = [];
      };
    q.enterScope = function enterScope(e) {
      this.scopeStack.push(new Rt(e));
    }, q.exitScope = function exitScope() {
      this.scopeStack.pop();
    }, q.treatFunctionsAsVarInScope = function treatFunctionsAsVarInScope(e) {
      return e.flags & z || !this.inModule && e.flags & ee;
    }, q.declareName = function declareName(e, t, i) {
      var s = !1;
      if (t === F) {
        var r = this.currentScope();
        if (s = r.lexical.indexOf(e) > -1 || r.functions.indexOf(e) > -1 || r.var.indexOf(e) > -1, r.lexical.push(e), this.inModule && r.flags & ee) delete this.undefinedExports[e];
      } else if (t === He) {
        var n = this.currentScope();
        n.lexical.push(e);
      } else if (t === Ge) {
        var u = this.currentScope();
        if (this.treatFunctionsAsVar) s = u.lexical.indexOf(e) > -1;else s = u.lexical.indexOf(e) > -1 || u.var.indexOf(e) > -1;
        u.functions.push(e);
      } else for (var o = this.scopeStack.length - 1; o >= 0; --o) {
        var h = this.scopeStack[o];
        if (h.lexical.indexOf(e) > -1 && !(h.flags & qe && h.lexical[0] === e) || !this.treatFunctionsAsVarInScope(h) && h.functions.indexOf(e) > -1) {
          s = !0;
          break;
        }
        if (h.var.push(e), this.inModule && h.flags & ee) delete this.undefinedExports[e];
        if (h.flags & he) break;
      }
      if (s) this.raiseRecoverable(i, "Identifier '" + e + "' has already been declared");
    }, q.checkLocalExport = function checkLocalExport(e) {
      if (this.scopeStack[0].lexical.indexOf(e.name) === -1 && this.scopeStack[0].var.indexOf(e.name) === -1) this.undefinedExports[e.name] = e;
    }, q.currentScope = function currentScope() {
      return this.scopeStack[this.scopeStack.length - 1];
    }, q.currentVarScope = function currentVarScope() {
      for (var e = this.scopeStack.length - 1;; e--) {
        var t = this.scopeStack[e];
        if (t.flags & (he | te | G)) return t;
      }
    }, q.currentThisScope = function currentThisScope() {
      for (var e = this.scopeStack.length - 1;; e--) {
        var t = this.scopeStack[e];
        if (t.flags & (he | te | G) && !(t.flags & we)) return t;
      }
    };
    var Node = function (t, i, s) {
        if (this.type = "", this.start = i, this.end = 0, t.options.locations) this.loc = new SourceLocation(t, s);
        if (t.options.directSourceFile) this.sourceFile = t.options.directSourceFile;
        if (t.options.ranges) this.range = [i, 0];
      },
      ae = Parser.prototype;
    ae.startNode = function startNode() {
      return new Node(this, this.start, this.startLoc);
    }, ae.startNodeAt = function startNodeAt(e, t) {
      return new Node(this, e, t);
    };
    function Qe(e, t, i, s) {
      if (e.type = t, e.end = i, this.options.locations) e.loc.end = s;
      if (this.options.ranges) e.range[1] = i;
      return e;
    }
    ae.finishNode = function finishNode(e, t) {
      return Qe.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
    }, ae.finishNodeAt = function finishNodeAt(e, t, i, s) {
      return Qe.call(this, e, t, i, s);
    }, ae.copyNode = function copyNode(e) {
      var t = new Node(this, e.start, this.startLoc);
      for (var i in e) t[i] = e[i];
      return t;
    };
    var Ot = "Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sunu Sunuwar Todhri Todr Tulu_Tigalari Tutg Unknown Zzzz",
      Ye = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
      Xe = Ye + " Extended_Pictographic",
      Ze = Xe,
      Je = Ze + " EBase EComp EMod EPres ExtPict",
      $e = Je,
      Bt = $e,
      Dt = {
        9: Ye,
        10: Xe,
        11: Ze,
        12: Je,
        13: $e,
        14: Bt
      },
      Ft = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji",
      Mt = {
        9: "",
        10: "",
        11: "",
        12: "",
        13: "",
        14: Ft
      },
      et = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
      tt = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
      it = tt + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
      st = it + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho",
      at = st + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi",
      rt = at + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith",
      Ut = rt + " " + Ot,
      qt = {
        9: tt,
        10: it,
        11: st,
        12: at,
        13: rt,
        14: Ut
      },
      nt = {};
    function jt(e) {
      var t = nt[e] = {
        binary: U(Dt[e] + " " + et),
        binaryOfStrings: U(Mt[e]),
        nonBinary: {
          General_Category: U(et),
          Script: U(qt[e])
        }
      };
      t.nonBinary.Script_Extensions = t.nonBinary.Script, t.nonBinary.gc = t.nonBinary.General_Category, t.nonBinary.sc = t.nonBinary.Script, t.nonBinary.scx = t.nonBinary.Script_Extensions;
    }
    for (var Ve = 0, ut = [9, 10, 11, 12, 13, 14]; Ve < ut.length; Ve += 1) {
      var Gt = ut[Ve];
      jt(Gt);
    }
    var c = Parser.prototype,
      de = function (t, i) {
        this.parent = t, this.base = i || this;
      };
    de.prototype.separatedFrom = function separatedFrom(t) {
      for (var i = this; i; i = i.parent) for (var s = t; s; s = s.parent) if (i.base === s.base && i !== s) return !0;
      return !1;
    }, de.prototype.sibling = function sibling() {
      return new de(this.parent, this.base);
    };
    var O = function (t) {
      this.parser = t, this.validFlags = "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "") + (t.options.ecmaVersion >= 13 ? "d" : "") + (t.options.ecmaVersion >= 15 ? "v" : ""), this.unicodeProperties = nt[t.options.ecmaVersion >= 14 ? 14 : t.options.ecmaVersion], this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchV = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = Object.create(null), this.backReferenceNames = [], this.branchID = null;
    };
    O.prototype.reset = function reset(t, i, s) {
      var r = s.indexOf("v") !== -1,
        n = s.indexOf("u") !== -1;
      if (this.start = t | 0, this.source = i + "", this.flags = s, r && this.parser.options.ecmaVersion >= 15) this.switchU = !0, this.switchV = !0, this.switchN = !0;else this.switchU = n && this.parser.options.ecmaVersion >= 6, this.switchV = !1, this.switchN = n && this.parser.options.ecmaVersion >= 9;
    }, O.prototype.raise = function raise(t) {
      this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
    }, O.prototype.at = function (t, i) {
      if (i === void 0) i = !1;
      var source = this.source,
        r = source.length;
      if (t >= r) return -1;
      var n = source.charCodeAt(t);
      if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r) return n;
      var u = source.charCodeAt(t + 1);
      return u >= 56320 && u <= 57343 ? (n << 10) + u - 56613888 : n;
    }, O.prototype.nextIndex = function nextIndex(t, i) {
      if (i === void 0) i = !1;
      var source_2 = this.source,
        r = source_2.length;
      if (t >= r) return r;
      var n = source_2.charCodeAt(t),
        u;
      if (!(i || this.switchU) || n <= 55295 || n >= 57344 || t + 1 >= r || (u = source_2.charCodeAt(t + 1)) < 56320 || u > 57343) return t + 1;
      return t + 2;
    }, O.prototype.current = function current(t) {
      if (t === void 0) t = !1;
      return this.at(this.pos, t);
    }, O.prototype.lookahead = function lookahead(t) {
      if (t === void 0) t = !1;
      return this.at(this.nextIndex(this.pos, t), t);
    }, O.prototype.advance = function advance(t) {
      if (t === void 0) t = !1;
      this.pos = this.nextIndex(this.pos, t);
    }, O.prototype.eat = function eat(t, i) {
      if (i === void 0) i = !1;
      if (this.current(i) === t) return this.advance(i), !0;
      return !1;
    }, O.prototype.eatChars = function eatChars(t, i) {
      if (i === void 0) i = !1;
      var pos = this.pos;
      for (var r = 0, n = t; r < n.length; r += 1) {
        var u = n[r],
          o = this.at(pos, i);
        if (o === -1 || o !== u) return !1;
        pos = this.nextIndex(pos, i);
      }
      return this.pos = pos, !0;
    }, c.validateRegExpFlags = function validateRegExpFlags(e) {
      var {
          validFlags: validFlags,
          flags: flags_4
        } = e,
        s = !1,
        r = !1;
      for (var n = 0; n < flags_4.length; n++) {
        var u = flags_4.charAt(n);
        if (validFlags.indexOf(u) === -1) this.raise(e.start, "Invalid regular expression flag");
        if (flags_4.indexOf(u, n + 1) > -1) this.raise(e.start, "Duplicate regular expression flag");
        if (u === "u") s = !0;
        if (u === "v") r = !0;
      }
      if (this.options.ecmaVersion >= 15 && s && r) this.raise(e.start, "Invalid regular expression flag");
    };
    function Ht(e) {
      for (var t in e) return !0;
      return !1;
    }
    c.validateRegExpPattern = function validateRegExpPattern(e) {
      if (this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && Ht(e.groupNames)) e.switchN = !0, this.regexp_pattern(e);
    }, c.regexp_pattern = function regexp_pattern(e) {
      if (e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames = Object.create(null), e.backReferenceNames.length = 0, e.branchID = null, this.regexp_disjunction(e), e.pos !== e.source.length) {
        if (e.eat(41)) e.raise("Unmatched ')'");
        if (e.eat(93) || e.eat(125)) e.raise("Lone quantifier brackets");
      }
      if (e.maxBackReference > e.numCapturingParens) e.raise("Invalid escape");
      for (var t = 0, backReferenceNames = e.backReferenceNames; t < backReferenceNames.length; t += 1) {
        var s = backReferenceNames[t];
        if (!e.groupNames[s]) e.raise("Invalid named capture referenced");
      }
    }, c.regexp_disjunction = function regexp_disjunction(e) {
      var t = this.options.ecmaVersion >= 16;
      if (t) e.branchID = new de(e.branchID, null);
      this.regexp_alternative(e);
      while (e.eat(124)) {
        if (t) e.branchID = e.branchID.sibling();
        this.regexp_alternative(e);
      }
      if (t) e.branchID = e.branchID.parent;
      if (this.regexp_eatQuantifier(e, !0)) e.raise("Nothing to repeat");
      if (e.eat(123)) e.raise("Lone quantifier brackets");
    }, c.regexp_alternative = function regexp_alternative(e) {
      while (e.pos < e.source.length && this.regexp_eatTerm(e));
    }, c.regexp_eatTerm = function regexp_eatTerm(e) {
      if (this.regexp_eatAssertion(e)) {
        if (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e)) {
          if (e.switchU) e.raise("Invalid quantifier");
        }
        return !0;
      }
      if (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e)) return this.regexp_eatQuantifier(e), !0;
      return !1;
    }, c.regexp_eatAssertion = function regexp_eatAssertion(e) {
      var pos_2 = e.pos;
      if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36)) return !0;
      if (e.eat(92)) {
        if (e.eat(66) || e.eat(98)) return !0;
        e.pos = pos_2;
      }
      if (e.eat(40) && e.eat(63)) {
        var i = !1;
        if (this.options.ecmaVersion >= 9) i = e.eat(60);
        if (e.eat(61) || e.eat(33)) {
          if (this.regexp_disjunction(e), !e.eat(41)) e.raise("Unterminated group");
          return e.lastAssertionIsQuantifiable = !i, !0;
        }
      }
      return e.pos = pos_2, !1;
    }, c.regexp_eatQuantifier = function regexp_eatQuantifier(e, t) {
      if (t === void 0) t = !1;
      if (this.regexp_eatQuantifierPrefix(e, t)) return e.eat(63), !0;
      return !1;
    }, c.regexp_eatQuantifierPrefix = function regexp_eatQuantifierPrefix(e, t) {
      return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
    }, c.regexp_eatBracedQuantifier = function regexp_eatBracedQuantifier(e, t) {
      var pos_3 = e.pos;
      if (e.eat(123)) {
        var s = 0,
          r = -1;
        if (this.regexp_eatDecimalDigits(e)) {
          if (s = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e)) r = e.lastIntValue;
          if (e.eat(125)) {
            if (r !== -1 && r < s && !t) e.raise("numbers out of order in {} quantifier");
            return !0;
          }
        }
        if (e.switchU && !t) e.raise("Incomplete quantifier");
        e.pos = pos_3;
      }
      return !1;
    }, c.regexp_eatAtom = function regexp_eatAtom(e) {
      return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
    }, c.regexp_eatReverseSolidusAtomEscape = function regexp_eatReverseSolidusAtomEscape(e) {
      var pos_4 = e.pos;
      if (e.eat(92)) {
        if (this.regexp_eatAtomEscape(e)) return !0;
        e.pos = pos_4;
      }
      return !1;
    }, c.regexp_eatUncapturingGroup = function regexp_eatUncapturingGroup(e) {
      var pos_5 = e.pos;
      if (e.eat(40)) {
        if (e.eat(63)) {
          if (this.options.ecmaVersion >= 16) {
            var i = this.regexp_eatModifiers(e),
              s = e.eat(45);
            if (i || s) {
              for (var r = 0; r < i.length; r++) {
                var n = i.charAt(r);
                if (i.indexOf(n, r + 1) > -1) e.raise("Duplicate regular expression modifiers");
              }
              if (s) {
                var u = this.regexp_eatModifiers(e);
                if (!i && !u && e.current() === 58) e.raise("Invalid regular expression modifiers");
                for (var o = 0; o < u.length; o++) {
                  var h = u.charAt(o);
                  if (u.indexOf(h, o + 1) > -1 || i.indexOf(h) > -1) e.raise("Duplicate regular expression modifiers");
                }
              }
            }
          }
          if (e.eat(58)) {
            if (this.regexp_disjunction(e), e.eat(41)) return !0;
            e.raise("Unterminated group");
          }
        }
        e.pos = pos_5;
      }
      return !1;
    }, c.regexp_eatCapturingGroup = function regexp_eatCapturingGroup(e) {
      if (e.eat(40)) {
        if (this.options.ecmaVersion >= 9) this.regexp_groupSpecifier(e);else if (e.current() === 63) e.raise("Invalid group");
        if (this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;
        e.raise("Unterminated group");
      }
      return !1;
    }, c.regexp_eatModifiers = function regexp_eatModifiers(e) {
      var t = "",
        i = 0;
      while ((i = e.current()) !== -1 && Wt(i)) t += D(i), e.advance();
      return t;
    };
    function Wt(e) {
      return e === 105 || e === 109 || e === 115;
    }
    c.regexp_eatExtendedAtom = function regexp_eatExtendedAtom(e) {
      return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
    }, c.regexp_eatInvalidBracedQuantifier = function regexp_eatInvalidBracedQuantifier(e) {
      if (this.regexp_eatBracedQuantifier(e, !0)) e.raise("Nothing to repeat");
      return !1;
    }, c.regexp_eatSyntaxCharacter = function regexp_eatSyntaxCharacter(e) {
      var t = e.current();
      if (ot(t)) return e.lastIntValue = t, e.advance(), !0;
      return !1;
    };
    function ot(e) {
      return e === 36 || e >= 40 && e <= 43 || e === 46 || e === 63 || e >= 91 && e <= 94 || e >= 123 && e <= 125;
    }
    c.regexp_eatPatternCharacters = function regexp_eatPatternCharacters(e) {
      var pos_6 = e.pos,
        i = 0;
      while ((i = e.current()) !== -1 && !ot(i)) e.advance();
      return e.pos !== pos_6;
    }, c.regexp_eatExtendedPatternCharacter = function regexp_eatExtendedPatternCharacter(e) {
      var t = e.current();
      if (t !== -1 && t !== 36 && !(t >= 40 && t <= 43) && t !== 46 && t !== 63 && t !== 91 && t !== 94 && t !== 124) return e.advance(), !0;
      return !1;
    }, c.regexp_groupSpecifier = function regexp_groupSpecifier(e) {
      if (e.eat(63)) {
        if (!this.regexp_eatGroupName(e)) e.raise("Invalid group");
        var t = this.options.ecmaVersion >= 16,
          i = e.groupNames[e.lastStringValue];
        if (i) if (t) for (var s = 0, r = i; s < r.length; s += 1) {
          var n = r[s];
          if (!n.separatedFrom(e.branchID)) e.raise("Duplicate capture group name");
        } else e.raise("Duplicate capture group name");
        if (t) (i || (e.groupNames[e.lastStringValue] = [])).push(e.branchID);else e.groupNames[e.lastStringValue] = !0;
      }
    }, c.regexp_eatGroupName = function regexp_eatGroupName(e) {
      if (e.lastStringValue = "", e.eat(60)) {
        if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
        e.raise("Invalid capture group name");
      }
      return !1;
    }, c.regexp_eatRegExpIdentifierName = function regexp_eatRegExpIdentifierName(e) {
      if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
        e.lastStringValue += D(e.lastIntValue);
        while (this.regexp_eatRegExpIdentifierPart(e)) e.lastStringValue += D(e.lastIntValue);
        return !0;
      }
      return !1;
    }, c.regexp_eatRegExpIdentifierStart = function regexp_eatRegExpIdentifierStart(e) {
      var pos_7 = e.pos,
        i = this.options.ecmaVersion >= 11,
        s = e.current(i);
      if (e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i)) s = e.lastIntValue;
      if (zt(s)) return e.lastIntValue = s, !0;
      return e.pos = pos_7, !1;
    };
    function zt(e) {
      return isIdentifierStart(e, !0) || e === 36 || e === 95;
    }
    c.regexp_eatRegExpIdentifierPart = function regexp_eatRegExpIdentifierPart(e) {
      var pos_8 = e.pos,
        i = this.options.ecmaVersion >= 11,
        s = e.current(i);
      if (e.advance(i), s === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(e, i)) s = e.lastIntValue;
      if (Kt(s)) return e.lastIntValue = s, !0;
      return e.pos = pos_8, !1;
    };
    function Kt(e) {
      return isIdentifierChar(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
    }
    c.regexp_eatAtomEscape = function regexp_eatAtomEscape(e) {
      if (this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) return !0;
      if (e.switchU) {
        if (e.current() === 99) e.raise("Invalid unicode escape");
        e.raise("Invalid escape");
      }
      return !1;
    }, c.regexp_eatBackReference = function regexp_eatBackReference(e) {
      var pos_9 = e.pos;
      if (this.regexp_eatDecimalEscape(e)) {
        var lastIntValue = e.lastIntValue;
        if (e.switchU) {
          if (lastIntValue > e.maxBackReference) e.maxBackReference = lastIntValue;
          return !0;
        }
        if (lastIntValue <= e.numCapturingParens) return !0;
        e.pos = pos_9;
      }
      return !1;
    }, c.regexp_eatKGroupName = function regexp_eatKGroupName(e) {
      if (e.eat(107)) {
        if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;
        e.raise("Invalid named reference");
      }
      return !1;
    }, c.regexp_eatCharacterEscape = function regexp_eatCharacterEscape(e) {
      return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
    }, c.regexp_eatCControlLetter = function regexp_eatCControlLetter(e) {
      var pos_10 = e.pos;
      if (e.eat(99)) {
        if (this.regexp_eatControlLetter(e)) return !0;
        e.pos = pos_10;
      }
      return !1;
    }, c.regexp_eatZero = function regexp_eatZero(e) {
      if (e.current() === 48 && !xe(e.lookahead())) return e.lastIntValue = 0, e.advance(), !0;
      return !1;
    }, c.regexp_eatControlEscape = function regexp_eatControlEscape(e) {
      var t = e.current();
      if (t === 116) return e.lastIntValue = 9, e.advance(), !0;
      if (t === 110) return e.lastIntValue = 10, e.advance(), !0;
      if (t === 118) return e.lastIntValue = 11, e.advance(), !0;
      if (t === 102) return e.lastIntValue = 12, e.advance(), !0;
      if (t === 114) return e.lastIntValue = 13, e.advance(), !0;
      return !1;
    }, c.regexp_eatControlLetter = function regexp_eatControlLetter(e) {
      var t = e.current();
      if (ht(t)) return e.lastIntValue = t % 32, e.advance(), !0;
      return !1;
    };
    function ht(e) {
      return e >= 65 && e <= 90 || e >= 97 && e <= 122;
    }
    c.regexp_eatRegExpUnicodeEscapeSequence = function regexp_eatRegExpUnicodeEscapeSequence(e, t) {
      if (t === void 0) t = !1;
      var pos_11 = e.pos,
        s = t || e.switchU;
      if (e.eat(117)) {
        if (this.regexp_eatFixedHexDigits(e, 4)) {
          var lastIntValue_2 = e.lastIntValue;
          if (s && lastIntValue_2 >= 55296 && lastIntValue_2 <= 56319) {
            var pos_12 = e.pos;
            if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
              var lastIntValue_3 = e.lastIntValue;
              if (lastIntValue_3 >= 56320 && lastIntValue_3 <= 57343) return e.lastIntValue = (lastIntValue_2 - 55296) * 1024 + (lastIntValue_3 - 56320) + 65536, !0;
            }
            e.pos = pos_12, e.lastIntValue = lastIntValue_2;
          }
          return !0;
        }
        if (s && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && Qt(e.lastIntValue)) return !0;
        if (s) e.raise("Invalid unicode escape");
        e.pos = pos_11;
      }
      return !1;
    };
    function Qt(e) {
      return e >= 0 && e <= 1114111;
    }
    c.regexp_eatIdentityEscape = function regexp_eatIdentityEscape(e) {
      if (e.switchU) {
        if (this.regexp_eatSyntaxCharacter(e)) return !0;
        if (e.eat(47)) return e.lastIntValue = 47, !0;
        return !1;
      }
      var t = e.current();
      if (t !== 99 && (!e.switchN || t !== 107)) return e.lastIntValue = t, e.advance(), !0;
      return !1;
    }, c.regexp_eatDecimalEscape = function regexp_eatDecimalEscape(e) {
      e.lastIntValue = 0;
      var t = e.current();
      if (t >= 49 && t <= 57) {
        do e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance(); while ((t = e.current()) >= 48 && t <= 57);
        return !0;
      }
      return !1;
    };
    var ct = 0,
      M = 1,
      T = 2;
    c.regexp_eatCharacterClassEscape = function regexp_eatCharacterClassEscape(e) {
      var t = e.current();
      if (Yt(t)) return e.lastIntValue = -1, e.advance(), M;
      var i = !1;
      if (e.switchU && this.options.ecmaVersion >= 9 && ((i = t === 80) || t === 112)) {
        e.lastIntValue = -1, e.advance();
        var s;
        if (e.eat(123) && (s = this.regexp_eatUnicodePropertyValueExpression(e)) && e.eat(125)) {
          if (i && s === T) e.raise("Invalid property name");
          return s;
        }
        e.raise("Invalid property name");
      }
      return ct;
    };
    function Yt(e) {
      return e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87;
    }
    c.regexp_eatUnicodePropertyValueExpression = function regexp_eatUnicodePropertyValueExpression(e) {
      var pos_13 = e.pos;
      if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
        var lastStringValue = e.lastStringValue;
        if (this.regexp_eatUnicodePropertyValue(e)) {
          var lastStringValue_2 = e.lastStringValue;
          return this.regexp_validateUnicodePropertyNameAndValue(e, lastStringValue, lastStringValue_2), M;
        }
      }
      if (e.pos = pos_13, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
        var lastStringValue_3 = e.lastStringValue;
        return this.regexp_validateUnicodePropertyNameOrValue(e, lastStringValue_3);
      }
      return ct;
    }, c.regexp_validateUnicodePropertyNameAndValue = function regexp_validateUnicodePropertyNameAndValue(e, t, i) {
      if (!H(e.unicodeProperties.nonBinary, t)) e.raise("Invalid property name");
      if (!e.unicodeProperties.nonBinary[t].test(i)) e.raise("Invalid property value");
    }, c.regexp_validateUnicodePropertyNameOrValue = function regexp_validateUnicodePropertyNameOrValue(e, t) {
      if (e.unicodeProperties.binary.test(t)) return M;
      if (e.switchV && e.unicodeProperties.binaryOfStrings.test(t)) return T;
      e.raise("Invalid property name");
    }, c.regexp_eatUnicodePropertyName = function regexp_eatUnicodePropertyName(e) {
      var t = 0;
      e.lastStringValue = "";
      while (pt(t = e.current())) e.lastStringValue += D(t), e.advance();
      return e.lastStringValue !== "";
    };
    function pt(e) {
      return ht(e) || e === 95;
    }
    c.regexp_eatUnicodePropertyValue = function regexp_eatUnicodePropertyValue(e) {
      var t = 0;
      e.lastStringValue = "";
      while (Xt(t = e.current())) e.lastStringValue += D(t), e.advance();
      return e.lastStringValue !== "";
    };
    function Xt(e) {
      return pt(e) || xe(e);
    }
    c.regexp_eatLoneUnicodePropertyNameOrValue = function regexp_eatLoneUnicodePropertyNameOrValue(e) {
      return this.regexp_eatUnicodePropertyValue(e);
    }, c.regexp_eatCharacterClass = function regexp_eatCharacterClass(e) {
      if (e.eat(91)) {
        var t = e.eat(94),
          i = this.regexp_classContents(e);
        if (!e.eat(93)) e.raise("Unterminated character class");
        if (t && i === T) e.raise("Negated character class may contain strings");
        return !0;
      }
      return !1;
    }, c.regexp_classContents = function regexp_classContents(e) {
      if (e.current() === 93) return M;
      if (e.switchV) return this.regexp_classSetExpression(e);
      return this.regexp_nonEmptyClassRanges(e), M;
    }, c.regexp_nonEmptyClassRanges = function regexp_nonEmptyClassRanges(e) {
      while (this.regexp_eatClassAtom(e)) {
        var lastIntValue_4 = e.lastIntValue;
        if (e.eat(45) && this.regexp_eatClassAtom(e)) {
          var lastIntValue_5 = e.lastIntValue;
          if (e.switchU && (lastIntValue_4 === -1 || lastIntValue_5 === -1)) e.raise("Invalid character class");
          if (lastIntValue_4 !== -1 && lastIntValue_5 !== -1 && lastIntValue_4 > lastIntValue_5) e.raise("Range out of order in character class");
        }
      }
    }, c.regexp_eatClassAtom = function regexp_eatClassAtom(e) {
      var pos_14 = e.pos;
      if (e.eat(92)) {
        if (this.regexp_eatClassEscape(e)) return !0;
        if (e.switchU) {
          var i = e.current();
          if (i === 99 || dt(i)) e.raise("Invalid class escape");
          e.raise("Invalid escape");
        }
        e.pos = pos_14;
      }
      var s = e.current();
      if (s !== 93) return e.lastIntValue = s, e.advance(), !0;
      return !1;
    }, c.regexp_eatClassEscape = function regexp_eatClassEscape(e) {
      var pos_15 = e.pos;
      if (e.eat(98)) return e.lastIntValue = 8, !0;
      if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;
      if (!e.switchU && e.eat(99)) {
        if (this.regexp_eatClassControlLetter(e)) return !0;
        e.pos = pos_15;
      }
      return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
    }, c.regexp_classSetExpression = function regexp_classSetExpression(e) {
      var t = M,
        i;
      if (this.regexp_eatClassSetRange(e)) ;else if (i = this.regexp_eatClassSetOperand(e)) {
        if (i === T) t = T;
        var pos_16 = e.pos;
        while (e.eatChars([38, 38])) {
          if (e.current() !== 38 && (i = this.regexp_eatClassSetOperand(e))) {
            if (i !== T) t = M;
            continue;
          }
          e.raise("Invalid character in character class");
        }
        if (pos_16 !== e.pos) return t;
        while (e.eatChars([45, 45])) {
          if (this.regexp_eatClassSetOperand(e)) continue;
          e.raise("Invalid character in character class");
        }
        if (pos_16 !== e.pos) return t;
      } else e.raise("Invalid character in character class");
      for (;;) {
        if (this.regexp_eatClassSetRange(e)) continue;
        if (i = this.regexp_eatClassSetOperand(e), !i) return t;
        if (i === T) t = T;
      }
    }, c.regexp_eatClassSetRange = function regexp_eatClassSetRange(e) {
      var pos_17 = e.pos;
      if (this.regexp_eatClassSetCharacter(e)) {
        var lastIntValue_6 = e.lastIntValue;
        if (e.eat(45) && this.regexp_eatClassSetCharacter(e)) {
          var lastIntValue_7 = e.lastIntValue;
          if (lastIntValue_6 !== -1 && lastIntValue_7 !== -1 && lastIntValue_6 > lastIntValue_7) e.raise("Range out of order in character class");
          return !0;
        }
        e.pos = pos_17;
      }
      return !1;
    }, c.regexp_eatClassSetOperand = function regexp_eatClassSetOperand(e) {
      if (this.regexp_eatClassSetCharacter(e)) return M;
      return this.regexp_eatClassStringDisjunction(e) || this.regexp_eatNestedClass(e);
    }, c.regexp_eatNestedClass = function regexp_eatNestedClass(e) {
      var pos_18 = e.pos;
      if (e.eat(91)) {
        var i = e.eat(94),
          s = this.regexp_classContents(e);
        if (e.eat(93)) {
          if (i && s === T) e.raise("Negated character class may contain strings");
          return s;
        }
        e.pos = pos_18;
      }
      if (e.eat(92)) {
        var r = this.regexp_eatCharacterClassEscape(e);
        if (r) return r;
        e.pos = pos_18;
      }
      return null;
    }, c.regexp_eatClassStringDisjunction = function regexp_eatClassStringDisjunction(e) {
      var pos_19 = e.pos;
      if (e.eatChars([92, 113])) {
        if (e.eat(123)) {
          var i = this.regexp_classStringDisjunctionContents(e);
          if (e.eat(125)) return i;
        } else e.raise("Invalid escape");
        e.pos = pos_19;
      }
      return null;
    }, c.regexp_classStringDisjunctionContents = function regexp_classStringDisjunctionContents(e) {
      var t = this.regexp_classString(e);
      while (e.eat(124)) if (this.regexp_classString(e) === T) t = T;
      return t;
    }, c.regexp_classString = function regexp_classString(e) {
      var t = 0;
      while (this.regexp_eatClassSetCharacter(e)) t++;
      return t === 1 ? M : T;
    }, c.regexp_eatClassSetCharacter = function regexp_eatClassSetCharacter(e) {
      var pos_20 = e.pos;
      if (e.eat(92)) {
        if (this.regexp_eatCharacterEscape(e) || this.regexp_eatClassSetReservedPunctuator(e)) return !0;
        if (e.eat(98)) return e.lastIntValue = 8, !0;
        return e.pos = pos_20, !1;
      }
      var i = e.current();
      if (i < 0 || i === e.lookahead() && Zt(i)) return !1;
      if (Jt(i)) return !1;
      return e.advance(), e.lastIntValue = i, !0;
    };
    function Zt(e) {
      return e === 33 || e >= 35 && e <= 38 || e >= 42 && e <= 44 || e === 46 || e >= 58 && e <= 64 || e === 94 || e === 96 || e === 126;
    }
    function Jt(e) {
      return e === 40 || e === 41 || e === 45 || e === 47 || e >= 91 && e <= 93 || e >= 123 && e <= 125;
    }
    c.regexp_eatClassSetReservedPunctuator = function regexp_eatClassSetReservedPunctuator(e) {
      var t = e.current();
      if ($t(t)) return e.lastIntValue = t, e.advance(), !0;
      return !1;
    };
    function $t(e) {
      return e === 33 || e === 35 || e === 37 || e === 38 || e === 44 || e === 45 || e >= 58 && e <= 62 || e === 64 || e === 96 || e === 126;
    }
    c.regexp_eatClassControlLetter = function regexp_eatClassControlLetter(e) {
      var t = e.current();
      if (xe(t) || t === 95) return e.lastIntValue = t % 32, e.advance(), !0;
      return !1;
    }, c.regexp_eatHexEscapeSequence = function regexp_eatHexEscapeSequence(e) {
      var pos_21 = e.pos;
      if (e.eat(120)) {
        if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
        if (e.switchU) e.raise("Invalid escape");
        e.pos = pos_21;
      }
      return !1;
    }, c.regexp_eatDecimalDigits = function regexp_eatDecimalDigits(e) {
      var pos_22 = e.pos,
        i = 0;
      e.lastIntValue = 0;
      while (xe(i = e.current())) e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();
      return e.pos !== pos_22;
    };
    function xe(e) {
      return e >= 48 && e <= 57;
    }
    c.regexp_eatHexDigits = function regexp_eatHexDigits(e) {
      var pos_23 = e.pos,
        i = 0;
      e.lastIntValue = 0;
      while (lt(i = e.current())) e.lastIntValue = 16 * e.lastIntValue + ft(i), e.advance();
      return e.pos !== pos_23;
    };
    function lt(e) {
      return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
    }
    function ft(e) {
      if (e >= 65 && e <= 70) return 10 + (e - 65);
      if (e >= 97 && e <= 102) return 10 + (e - 97);
      return e - 48;
    }
    c.regexp_eatLegacyOctalEscapeSequence = function regexp_eatLegacyOctalEscapeSequence(e) {
      if (this.regexp_eatOctalDigit(e)) {
        var lastIntValue_8 = e.lastIntValue;
        if (this.regexp_eatOctalDigit(e)) {
          var lastIntValue_9 = e.lastIntValue;
          if (lastIntValue_8 <= 3 && this.regexp_eatOctalDigit(e)) e.lastIntValue = lastIntValue_8 * 64 + lastIntValue_9 * 8 + e.lastIntValue;else e.lastIntValue = lastIntValue_8 * 8 + lastIntValue_9;
        } else e.lastIntValue = lastIntValue_8;
        return !0;
      }
      return !1;
    }, c.regexp_eatOctalDigit = function regexp_eatOctalDigit(e) {
      var t = e.current();
      if (dt(t)) return e.lastIntValue = t - 48, e.advance(), !0;
      return e.lastIntValue = 0, !1;
    };
    function dt(e) {
      return e >= 48 && e <= 55;
    }
    c.regexp_eatFixedHexDigits = function regexp_eatFixedHexDigits(e, t) {
      var pos_24 = e.pos;
      e.lastIntValue = 0;
      for (var s = 0; s < t; ++s) {
        var r = e.current();
        if (!lt(r)) return e.pos = pos_24, !1;
        e.lastIntValue = 16 * e.lastIntValue + ft(r), e.advance();
      }
      return !0;
    };
    var Token = function (t) {
        if (this.type = t.type, this.value = t.value, this.start = t.start, this.end = t.end, t.options.locations) this.loc = new SourceLocation(t, t.startLoc, t.endLoc);
        if (t.options.ranges) this.range = [t.start, t.end];
      },
      x = Parser.prototype;
    if (x.next = function next(e) {
      if (!e && this.type.keyword && this.containsEsc) this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
      if (this.options.onToken) this.options.onToken(new Token(this));
      this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
    }, x.getToken = function getToken() {
      return this.next(), new Token(this);
    }, typeof Symbol < "u") x[Symbol.iterator] = function () {
      var e = this;
      return {
        next: function next() {
          var value_2 = e.getToken();
          return {
            done: value_2.type === tokTypes.eof,
            value: value_2
          };
        }
      };
    };
    x.nextToken = function nextToken() {
      var e = this.curContext();
      if (!e || !e.preserveSpace) this.skipSpace();
      if (this.start = this.pos, this.options.locations) this.startLoc = this.curPosition();
      if (this.pos >= this.input.length) return this.finishToken(tokTypes.eof);
      if (e.override) return e.override(this);else this.readToken(this.fullCharCodeAtPos());
    }, x.readToken = function readToken(e) {
      if (isIdentifierStart(e, this.options.ecmaVersion >= 6) || e === 92) return this.readWord();
      return this.getTokenFromCode(e);
    }, x.fullCharCodeAtPos = function fullCharCodeAtPos() {
      var e = this.input.charCodeAt(this.pos);
      if (e <= 55295 || e >= 56320) return e;
      var t = this.input.charCodeAt(this.pos + 1);
      return t <= 56319 || t >= 57344 ? e : (e << 10) + t - 56613888;
    }, x.skipBlockComment = function skipBlockComment() {
      var e = this.options.onComment && this.curPosition(),
        pos_25 = this.pos,
        i = this.input.indexOf("*/", this.pos += 2);
      if (i === -1) this.raise(this.pos - 2, "Unterminated comment");
      if (this.pos = i + 2, this.options.locations) for (var s = void 0, r = pos_25; (s = Oe(this.input, r, this.pos)) > -1;) ++this.curLine, r = this.lineStart = s;
      if (this.options.onComment) this.options.onComment(!0, this.input.slice(pos_25 + 2, i), pos_25, this.pos, e, this.curPosition());
    }, x.skipLineComment = function skipLineComment(e) {
      var pos_26 = this.pos,
        i = this.options.onComment && this.curPosition(),
        s = this.input.charCodeAt(this.pos += e);
      while (this.pos < this.input.length && !isNewLine(s)) s = this.input.charCodeAt(++this.pos);
      if (this.options.onComment) this.options.onComment(!1, this.input.slice(pos_26 + e, this.pos), pos_26, this.pos, i, this.curPosition());
    }, x.skipSpace = function skipSpace() {
      e: while (this.pos < this.input.length) {
        var e = this.input.charCodeAt(this.pos);
        switch (e) {
          case 32:
          case 160:
            ++this.pos;
            break;
          case 13:
            if (this.input.charCodeAt(this.pos + 1) === 10) ++this.pos;
          case 10:
          case 8232:
          case 8233:
            if (++this.pos, this.options.locations) ++this.curLine, this.lineStart = this.pos;
            break;
          case 47:
            switch (this.input.charCodeAt(this.pos + 1)) {
              case 42:
                this.skipBlockComment();
                break;
              case 47:
                this.skipLineComment(2);
                break;
              default:
                break e;
            }
            break;
          default:
            if (e > 8 && e < 14 || e >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(e))) ++this.pos;else break e;
        }
      }
    }, x.finishToken = function finishToken(e, t) {
      if (this.end = this.pos, this.options.locations) this.endLoc = this.curPosition();
      var i = this.type;
      this.type = e, this.value = t, this.updateContext(i);
    }, x.readToken_dot = function readToken_dot() {
      var e = this.input.charCodeAt(this.pos + 1);
      if (e >= 48 && e <= 57) return this.readNumber(!0);
      var t = this.input.charCodeAt(this.pos + 2);
      if (this.options.ecmaVersion >= 6 && e === 46 && t === 46) return this.pos += 3, this.finishToken(tokTypes.ellipsis);else return ++this.pos, this.finishToken(tokTypes.dot);
    }, x.readToken_slash = function readToken_slash() {
      var e = this.input.charCodeAt(this.pos + 1);
      if (this.exprAllowed) return ++this.pos, this.readRegexp();
      if (e === 61) return this.finishOp(tokTypes.assign, 2);
      return this.finishOp(tokTypes.slash, 1);
    }, x.readToken_mult_modulo_exp = function readToken_mult_modulo_exp(e) {
      var t = this.input.charCodeAt(this.pos + 1),
        i = 1,
        s = e === 42 ? tokTypes.star : tokTypes.modulo;
      if (this.options.ecmaVersion >= 7 && e === 42 && t === 42) ++i, s = tokTypes.starstar, t = this.input.charCodeAt(this.pos + 2);
      if (t === 61) return this.finishOp(tokTypes.assign, i + 1);
      return this.finishOp(s, i);
    }, x.readToken_pipe_amp = function readToken_pipe_amp(e) {
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === e) {
        if (this.options.ecmaVersion >= 12) {
          var i = this.input.charCodeAt(this.pos + 2);
          if (i === 61) return this.finishOp(tokTypes.assign, 3);
        }
        return this.finishOp(e === 124 ? tokTypes.logicalOR : tokTypes.logicalAND, 2);
      }
      if (t === 61) return this.finishOp(tokTypes.assign, 2);
      return this.finishOp(e === 124 ? tokTypes.bitwiseOR : tokTypes.bitwiseAND, 1);
    }, x.readToken_caret = function readToken_caret() {
      var e = this.input.charCodeAt(this.pos + 1);
      if (e === 61) return this.finishOp(tokTypes.assign, 2);
      return this.finishOp(tokTypes.bitwiseXOR, 1);
    }, x.readToken_plus_min = function readToken_plus_min(e) {
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === e) {
        if (t === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) return this.skipLineComment(3), this.skipSpace(), this.nextToken();
        return this.finishOp(tokTypes.incDec, 2);
      }
      if (t === 61) return this.finishOp(tokTypes.assign, 2);
      return this.finishOp(tokTypes.plusMin, 1);
    }, x.readToken_lt_gt = function readToken_lt_gt(e) {
      var t = this.input.charCodeAt(this.pos + 1),
        i = 1;
      if (t === e) {
        if (i = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2, this.input.charCodeAt(this.pos + i) === 61) return this.finishOp(tokTypes.assign, i + 1);
        return this.finishOp(tokTypes.bitShift, i);
      }
      if (t === 33 && e === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) return this.skipLineComment(4), this.skipSpace(), this.nextToken();
      if (t === 61) i = 2;
      return this.finishOp(tokTypes.relational, i);
    }, x.readToken_eq_excl = function readToken_eq_excl(e) {
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 61) return this.finishOp(tokTypes.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
      if (e === 61 && t === 62 && this.options.ecmaVersion >= 6) return this.pos += 2, this.finishToken(tokTypes.arrow);
      return this.finishOp(e === 61 ? tokTypes.eq : tokTypes.prefix, 1);
    }, x.readToken_question = function readToken_question() {
      var ecmaVersion_2 = this.options.ecmaVersion;
      if (ecmaVersion_2 >= 11) {
        var t = this.input.charCodeAt(this.pos + 1);
        if (t === 46) {
          var i = this.input.charCodeAt(this.pos + 2);
          if (i < 48 || i > 57) return this.finishOp(tokTypes.questionDot, 2);
        }
        if (t === 63) {
          if (ecmaVersion_2 >= 12) {
            var s = this.input.charCodeAt(this.pos + 2);
            if (s === 61) return this.finishOp(tokTypes.assign, 3);
          }
          return this.finishOp(tokTypes.coalesce, 2);
        }
      }
      return this.finishOp(tokTypes.question, 1);
    }, x.readToken_numberSign = function readToken_numberSign() {
      var ecmaVersion_3 = this.options.ecmaVersion,
        t = 35;
      if (ecmaVersion_3 >= 13) {
        if (++this.pos, t = this.fullCharCodeAtPos(), isIdentifierStart(t, !0) || t === 92) return this.finishToken(tokTypes.privateId, this.readWord1());
      }
      this.raise(this.pos, "Unexpected character '" + D(t) + "'");
    }, x.getTokenFromCode = function getTokenFromCode(e) {
      switch (e) {
        case 46:
          return this.readToken_dot();
        case 40:
          return ++this.pos, this.finishToken(tokTypes.parenL);
        case 41:
          return ++this.pos, this.finishToken(tokTypes.parenR);
        case 59:
          return ++this.pos, this.finishToken(tokTypes.semi);
        case 44:
          return ++this.pos, this.finishToken(tokTypes.comma);
        case 91:
          return ++this.pos, this.finishToken(tokTypes.bracketL);
        case 93:
          return ++this.pos, this.finishToken(tokTypes.bracketR);
        case 123:
          return ++this.pos, this.finishToken(tokTypes.braceL);
        case 125:
          return ++this.pos, this.finishToken(tokTypes.braceR);
        case 58:
          return ++this.pos, this.finishToken(tokTypes.colon);
        case 96:
          if (this.options.ecmaVersion < 6) break;
          return ++this.pos, this.finishToken(tokTypes.backQuote);
        case 48:
          var t = this.input.charCodeAt(this.pos + 1);
          if (t === 120 || t === 88) return this.readRadixNumber(16);
          if (this.options.ecmaVersion >= 6) {
            if (t === 111 || t === 79) return this.readRadixNumber(8);
            if (t === 98 || t === 66) return this.readRadixNumber(2);
          }
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
          return this.readNumber(!1);
        case 34:
        case 39:
          return this.readString(e);
        case 47:
          return this.readToken_slash();
        case 37:
        case 42:
          return this.readToken_mult_modulo_exp(e);
        case 124:
        case 38:
          return this.readToken_pipe_amp(e);
        case 94:
          return this.readToken_caret();
        case 43:
        case 45:
          return this.readToken_plus_min(e);
        case 60:
        case 62:
          return this.readToken_lt_gt(e);
        case 61:
        case 33:
          return this.readToken_eq_excl(e);
        case 63:
          return this.readToken_question();
        case 126:
          return this.finishOp(tokTypes.prefix, 1);
        case 35:
          return this.readToken_numberSign();
      }
      this.raise(this.pos, "Unexpected character '" + D(e) + "'");
    }, x.finishOp = function finishOp(e, t) {
      var i = this.input.slice(this.pos, this.pos + t);
      return this.pos += t, this.finishToken(e, i);
    }, x.readRegexp = function readRegexp() {
      var e,
        t,
        pos_27 = this.pos;
      for (;;) {
        if (this.pos >= this.input.length) this.raise(pos_27, "Unterminated regular expression");
        var s = this.input.charAt(this.pos);
        if (lineBreak.test(s)) this.raise(pos_27, "Unterminated regular expression");
        if (!e) {
          if (s === "[") t = !0;else if (s === "]" && t) t = !1;else if (s === "/" && !t) break;
          e = s === "\\";
        } else e = !1;
        ++this.pos;
      }
      var pattern = this.input.slice(pos_27, this.pos);
      ++this.pos;
      var pos_28 = this.pos,
        flags_5 = this.readWord1();
      if (this.containsEsc) this.unexpected(pos_28);
      var o = this.regexpState || (this.regexpState = new O(this));
      o.reset(pos_27, pattern, flags_5), this.validateRegExpFlags(o), this.validateRegExpPattern(o);
      var value_3 = null;
      try {
        value_3 = new RegExp(pattern, flags_5);
      } catch (error) {}
      return this.finishToken(tokTypes.regexp, {
        pattern: pattern,
        flags: flags_5,
        value: value_3
      });
    }, x.readInt = function readInt(e, t, i) {
      var s = this.options.ecmaVersion >= 12 && t === void 0,
        r = i && this.input.charCodeAt(this.pos) === 48,
        pos_29 = this.pos,
        u = 0,
        o = 0;
      for (var h = 0, l = t == null ? 1 / 0 : t; h < l; ++h, ++this.pos) {
        var d = this.input.charCodeAt(this.pos),
          y = void 0;
        if (s && d === 95) {
          if (r) this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
          if (o === 95) this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
          if (h === 0) this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
          o = d;
          continue;
        }
        if (d >= 97) y = d - 97 + 10;else if (d >= 65) y = d - 65 + 10;else if (d >= 48 && d <= 57) y = d - 48;else y = 1 / 0;
        if (y >= e) break;
        o = d, u = u * e + y;
      }
      if (s && o === 95) this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
      if (this.pos === pos_29 || t != null && this.pos - pos_29 !== t) return null;
      return u;
    };
    function ei(e, t) {
      if (t) return parseInt(e, 8);
      return parseFloat(e.replace(/_/g, ""));
    }
    function xt(e) {
      if (typeof BigInt !== "function") return null;
      return BigInt(e.replace(/_/g, ""));
    }
    x.readRadixNumber = function readRadixNumber(e) {
      var pos_30 = this.pos;
      this.pos += 2;
      var i = this.readInt(e);
      if (i == null) this.raise(this.start + 2, "Expected number in radix " + e);
      if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) i = xt(this.input.slice(pos_30, this.pos)), ++this.pos;else if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
      return this.finishToken(tokTypes.num, i);
    }, x.readNumber = function readNumber(e) {
      var pos_31 = this.pos;
      if (!e && this.readInt(10, void 0, !0) === null) this.raise(pos_31, "Invalid number");
      var i = this.pos - pos_31 >= 2 && this.input.charCodeAt(pos_31) === 48;
      if (i && this.strict) this.raise(pos_31, "Invalid number");
      var s = this.input.charCodeAt(this.pos);
      if (!i && !e && this.options.ecmaVersion >= 11 && s === 110) {
        var r = xt(this.input.slice(pos_31, this.pos));
        if (++this.pos, isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
        return this.finishToken(tokTypes.num, r);
      }
      if (i && /[89]/.test(this.input.slice(pos_31, this.pos))) i = !1;
      if (s === 46 && !i) ++this.pos, this.readInt(10), s = this.input.charCodeAt(this.pos);
      if ((s === 69 || s === 101) && !i) {
        if (s = this.input.charCodeAt(++this.pos), s === 43 || s === 45) ++this.pos;
        if (this.readInt(10) === null) this.raise(pos_31, "Invalid number");
      }
      if (isIdentifierStart(this.fullCharCodeAtPos())) this.raise(this.pos, "Identifier directly after number");
      var n = ei(this.input.slice(pos_31, this.pos), i);
      return this.finishToken(tokTypes.num, n);
    }, x.readCodePoint = function readCodePoint() {
      var e = this.input.charCodeAt(this.pos),
        t;
      if (e === 123) {
        if (this.options.ecmaVersion < 6) this.unexpected();
        var i = ++this.pos;
        if (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, t > 1114111) this.invalidStringToken(i, "Code point out of bounds");
      } else t = this.readHexChar(4);
      return t;
    }, x.readString = function readString(e) {
      var t = "",
        i = ++this.pos;
      for (;;) {
        if (this.pos >= this.input.length) this.raise(this.start, "Unterminated string constant");
        var s = this.input.charCodeAt(this.pos);
        if (s === e) break;
        if (s === 92) t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos;else if (s === 8232 || s === 8233) {
          if (this.options.ecmaVersion < 10) this.raise(this.start, "Unterminated string constant");
          if (++this.pos, this.options.locations) this.curLine++, this.lineStart = this.pos;
        } else {
          if (isNewLine(s)) this.raise(this.start, "Unterminated string constant");
          ++this.pos;
        }
      }
      return t += this.input.slice(i, this.pos++), this.finishToken(tokTypes.string, t);
    };
    var mt = {};
    x.tryReadTemplateToken = function tryReadTemplateToken() {
      this.inTemplateElement = !0;
      try {
        this.readTmplToken();
      } catch (error) {
        if (error === mt) this.readInvalidTemplateToken();else throw error;
      }
      this.inTemplateElement = !1;
    }, x.invalidStringToken = function invalidStringToken(e, t) {
      if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw mt;else this.raise(e, t);
    }, x.readTmplToken = function readTmplToken() {
      var e = "",
        pos_32 = this.pos;
      for (;;) {
        if (this.pos >= this.input.length) this.raise(this.start, "Unterminated template");
        var i = this.input.charCodeAt(this.pos);
        if (i === 96 || i === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
          if (this.pos === this.start && (this.type === tokTypes.template || this.type === tokTypes.invalidTemplate)) if (i === 36) return this.pos += 2, this.finishToken(tokTypes.dollarBraceL);else return ++this.pos, this.finishToken(tokTypes.backQuote);
          return e += this.input.slice(pos_32, this.pos), this.finishToken(tokTypes.template, e);
        }
        if (i === 92) e += this.input.slice(pos_32, this.pos), e += this.readEscapedChar(!0), pos_32 = this.pos;else if (isNewLine(i)) {
          switch (e += this.input.slice(pos_32, this.pos), ++this.pos, i) {
            case 13:
              if (this.input.charCodeAt(this.pos) === 10) ++this.pos;
            case 10:
              e += `
`;
              break;
            default:
              e += String.fromCharCode(i);
              break;
          }
          if (this.options.locations) ++this.curLine, this.lineStart = this.pos;
          pos_32 = this.pos;
        } else ++this.pos;
      }
    }, x.readInvalidTemplateToken = function readInvalidTemplateToken() {
      for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {
        case "\\":
          ++this.pos;
          break;
        case "$":
          if (this.input[this.pos + 1] !== "{") break;
        case "`":
          return this.finishToken(tokTypes.invalidTemplate, this.input.slice(this.start, this.pos));
        case "\r":
          if (this.input[this.pos + 1] === `
`) ++this.pos;
        case `
`:
        case "\u2028":
        case "\u2029":
          ++this.curLine, this.lineStart = this.pos + 1;
          break;
      }
      this.raise(this.start, "Unterminated template");
    }, x.readEscapedChar = function readEscapedChar(e) {
      var t = this.input.charCodeAt(++this.pos);
      switch (++this.pos, t) {
        case 110:
          return `
`;
        case 114:
          return "\r";
        case 120:
          return String.fromCharCode(this.readHexChar(2));
        case 117:
          return D(this.readCodePoint());
        case 116:
          return "\t";
        case 98:
          return "\b";
        case 118:
          return "\v";
        case 102:
          return "\f";
        case 13:
          if (this.input.charCodeAt(this.pos) === 10) ++this.pos;
        case 10:
          if (this.options.locations) this.lineStart = this.pos, ++this.curLine;
          return "";
        case 56:
        case 57:
          if (this.strict) this.invalidStringToken(this.pos - 1, "Invalid escape sequence");
          if (e) {
            var i = this.pos - 1;
            this.invalidStringToken(i, "Invalid escape sequence in template string");
          }
        default:
          if (t >= 48 && t <= 55) {
            var s = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
              r = parseInt(s, 8);
            if (r > 255) s = s.slice(0, -1), r = parseInt(s, 8);
            if (this.pos += s.length - 1, t = this.input.charCodeAt(this.pos), (s !== "0" || t === 56 || t === 57) && (this.strict || e)) this.invalidStringToken(this.pos - 1 - s.length, e ? "Octal literal in template string" : "Octal literal in strict mode");
            return String.fromCharCode(r);
          }
          if (isNewLine(t)) {
            if (this.options.locations) this.lineStart = this.pos, ++this.curLine;
            return "";
          }
          return String.fromCharCode(t);
      }
    }, x.readHexChar = function readHexChar(e) {
      var pos_33 = this.pos,
        i = this.readInt(16, e);
      if (i === null) this.invalidStringToken(pos_33, "Bad character escape sequence");
      return i;
    }, x.readWord1 = function readWord1() {
      this.containsEsc = !1;
      var e = "",
        t = !0,
        pos_34 = this.pos,
        s = this.options.ecmaVersion >= 6;
      while (this.pos < this.input.length) {
        var r = this.fullCharCodeAtPos();
        if (isIdentifierChar(r, s)) this.pos += r <= 65535 ? 1 : 2;else if (r === 92) {
          this.containsEsc = !0, e += this.input.slice(pos_34, this.pos);
          var pos_35 = this.pos;
          if (this.input.charCodeAt(++this.pos) !== 117) this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
          ++this.pos;
          var u = this.readCodePoint();
          if (!(t ? isIdentifierStart : isIdentifierChar)(u, s)) this.invalidStringToken(pos_35, "Invalid Unicode escape");
          e += D(u), pos_34 = this.pos;
        } else break;
        t = !1;
      }
      return e + this.input.slice(pos_34, this.pos);
    }, x.readWord = function readWord() {
      var e = this.readWord1(),
        t = tokTypes.name;
      if (this.keywords.test(e)) t = keywordTypes[e];
      return this.finishToken(t, e);
    };
    var version = "8.15.0";
    Parser.acorn = {
      Parser: Parser,
      version: version,
      defaultOptions: defaultOptions,
      Position: Position,
      SourceLocation: SourceLocation,
      getLineInfo: getLineInfo,
      Node: Node,
      TokenType: TokenType,
      tokTypes: tokTypes,
      keywordTypes: keywordTypes,
      TokContext: TokContext,
      tokContexts: tokContexts,
      isIdentifierChar: isIdentifierChar,
      isIdentifierStart: isIdentifierStart,
      Token: Token,
      isNewLine: isNewLine,
      lineBreak: lineBreak,
      lineBreakG: Re,
      nonASCIIwhitespace: nonASCIIwhitespace
    };
    function ti(e, t) {
      return Parser.parse(e, t);
    }
    function ii(e, t, i) {
      return Parser.parseExpressionAt(e, t, i);
    }
    function si(e, t) {
      return Parser.tokenizer(e, t);
    }
    g.Node = Node, g.Parser = Parser, g.Position = Position, g.SourceLocation = SourceLocation, g.TokContext = TokContext, g.Token = Token, g.TokenType = TokenType, g.defaultOptions = defaultOptions, g.getLineInfo = getLineInfo, g.isIdentifierChar = isIdentifierChar, g.isIdentifierStart = isIdentifierStart, g.isNewLine = isNewLine, g.keywordTypes = keywordTypes, g.lineBreak = lineBreak, g.lineBreakG = Re, g.nonASCIIwhitespace = nonASCIIwhitespace, g.parse = ti, g.parseExpressionAt = ii, g.tokContexts = tokContexts, g.tokTypes = tokTypes, g.tokenizer = si, g.version = version;
  });
});
export { q6e };