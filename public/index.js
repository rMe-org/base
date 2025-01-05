(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports("modulepreload")) return; for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i); new MutationObserver(i => { for (const r of i) if (r.type === "childList") for (const o of r.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(o) }).observe(document, { childList: !0, subtree: !0 }); function t(i) { const r = {}; return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r } function n(i) { if (i.ep) return; i.ep = !0; const r = t(i); fetch(i.href, r) } })();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya = "168", Bi = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Ui = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, ru = 0, Ja = 1, ou = 2, Yc = 1, au = 2, Tn = 3, Pn = 0, Ot = 1, Xt = 2, Cn = 0, zi = 1, Qa = 2, el = 3, tl = 4, lu = 5, li = 100, cu = 101, hu = 102, uu = 103, du = 104, fu = 200, pu = 201, mu = 202, gu = 203, Co = 204, Po = 205, _u = 206, vu = 207, xu = 208, yu = 209, Mu = 210, Su = 211, bu = 212, Eu = 213, Tu = 214, wu = 0, Au = 1, Ru = 2, yr = 3, Cu = 4, Pu = 5, Lu = 6, Du = 7, qc = 0, Iu = 1, Nu = 2, qn = 0, Uu = 1, Ou = 2, Fu = 3, Bu = 4, zu = 5, ku = 6, Hu = 7, nl = "attached", Vu = "detached", Kc = 300, Wi = 301, Xi = 302, Lo = 303, Do = 304, Lr = 306, ji = 1e3, Wn = 1001, Mr = 1002, At = 1003, $c = 1004, vs = 1005, Ht = 1006, fr = 1007, An = 1008, Ln = 1009, Zc = 1010, Jc = 1011, As = 1012, Ma = 1013, hi = 1014, Qt = 1015, es = 1016, Sa = 1017, ba = 1018, Yi = 1020, Qc = 35902, eh = 1021, th = 1022, jt = 1023, nh = 1024, ih = 1025, ki = 1026, qi = 1027, Ea = 1028, Ta = 1029, sh = 1030, wa = 1031, Aa = 1033, pr = 33776, mr = 33777, gr = 33778, _r = 33779, Io = 35840, No = 35841, Uo = 35842, Oo = 35843, Fo = 36196, Bo = 37492, zo = 37496, ko = 37808, Ho = 37809, Vo = 37810, Go = 37811, Wo = 37812, Xo = 37813, jo = 37814, Yo = 37815, qo = 37816, Ko = 37817, $o = 37818, Zo = 37819, Jo = 37820, Qo = 37821, vr = 36492, ea = 36494, ta = 36495, rh = 36283, na = 36284, ia = 36285, sa = 36286, Rs = 2300, Cs = 2301, Wr = 2302, il = 2400, sl = 2401, rl = 2402, Gu = 2500, Wu = 0, oh = 1, ra = 2, Xu = 3200, ah = 3201, lh = 0, ju = 1, Gn = "", Pt = "srgb", Et = "srgb-linear", Ra = "display-p3", Dr = "display-p3-linear", Sr = "linear", st = "srgb", br = "rec709", Er = "p3", pi = 7680, ol = 519, Yu = 512, qu = 513, Ku = 514, ch = 515, $u = 516, Zu = 517, Ju = 518, Qu = 519, oa = 35044, hh = 35048, al = "300 es", Rn = 2e3, Tr = 2001; class ui { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n = this._listeners; n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e, t) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[e] !== void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { if (this._listeners === void 0) return; const i = this._listeners[e]; if (i !== void 0) { const r = i.indexOf(t); r !== -1 && i.splice(r, 1) } } dispatchEvent(e) { if (this._listeners === void 0) return; const n = this._listeners[e.type]; if (n !== void 0) { e.target = this; const i = n.slice(0); for (let r = 0, o = i.length; r < o; r++)i[r].call(this, e); e.target = null } } } const Tt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]; let ll = 1234567; const Ss = Math.PI / 180, Ki = 180 / Math.PI; function en() { const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (Tt[s & 255] + Tt[s >> 8 & 255] + Tt[s >> 16 & 255] + Tt[s >> 24 & 255] + "-" + Tt[e & 255] + Tt[e >> 8 & 255] + "-" + Tt[e >> 16 & 15 | 64] + Tt[e >> 24 & 255] + "-" + Tt[t & 63 | 128] + Tt[t >> 8 & 255] + "-" + Tt[t >> 16 & 255] + Tt[t >> 24 & 255] + Tt[n & 255] + Tt[n >> 8 & 255] + Tt[n >> 16 & 255] + Tt[n >> 24 & 255]).toLowerCase() } function bt(s, e, t) { return Math.max(e, Math.min(t, s)) } function Ca(s, e) { return (s % e + e) % e } function ed(s, e, t, n, i) { return n + (s - e) * (i - n) / (t - e) } function td(s, e, t) { return s !== e ? (t - s) / (e - s) : 0 } function bs(s, e, t) { return (1 - t) * s + t * e } function nd(s, e, t, n) { return bs(s, e, 1 - Math.exp(-t * n)) } function id(s, e = 1) { return e - Math.abs(Ca(s, e * 2) - e) } function sd(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s)) } function rd(s, e, t) { return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10)) } function od(s, e) { return s + Math.floor(Math.random() * (e - s + 1)) } function ad(s, e) { return s + Math.random() * (e - s) } function ld(s) { return s * (.5 - Math.random()) } function cd(s) { s !== void 0 && (ll = s); let e = ll += 1831565813; return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296 } function hd(s) { return s * Ss } function ud(s) { return s * Ki } function dd(s) { return (s & s - 1) === 0 && s !== 0 } function fd(s) { return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2)) } function pd(s) { return Math.pow(2, Math.floor(Math.log(s) / Math.LN2)) } function md(s, e, t, n, i) { const r = Math.cos, o = Math.sin, a = r(t / 2), l = o(t / 2), c = r((e + n) / 2), h = o((e + n) / 2), u = r((e - n) / 2), d = o((e - n) / 2), p = r((n - e) / 2), g = o((n - e) / 2); switch (i) { case "XYX": s.set(a * h, l * u, l * d, a * c); break; case "YZY": s.set(l * d, a * h, l * u, a * c); break; case "ZXZ": s.set(l * u, l * d, a * h, a * c); break; case "XZX": s.set(a * h, l * g, l * p, a * c); break; case "YXY": s.set(l * p, a * h, l * g, a * c); break; case "ZYZ": s.set(l * g, l * p, a * h, a * c); break; default: console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i) } } function Jt(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint32Array: return s / 4294967295; case Uint16Array: return s / 65535; case Uint8Array: return s / 255; case Int32Array: return Math.max(s / 2147483647, -1); case Int16Array: return Math.max(s / 32767, -1); case Int8Array: return Math.max(s / 127, -1); default: throw new Error("Invalid component type.") } } function $e(s, e) { switch (e.constructor) { case Float32Array: return s; case Uint32Array: return Math.round(s * 4294967295); case Uint16Array: return Math.round(s * 65535); case Uint8Array: return Math.round(s * 255); case Int32Array: return Math.round(s * 2147483647); case Int16Array: return Math.round(s * 32767); case Int8Array: return Math.round(s * 127); default: throw new Error("Invalid component type.") } } const Nt = { DEG2RAD: Ss, RAD2DEG: Ki, generateUUID: en, clamp: bt, euclideanModulo: Ca, mapLinear: ed, inverseLerp: td, lerp: bs, damp: nd, pingpong: id, smoothstep: sd, smootherstep: rd, randInt: od, randFloat: ad, randFloatSpread: ld, seededRandom: cd, degToRad: hd, radToDeg: ud, isPowerOfTwo: dd, ceilPowerOfTwo: fd, floorPowerOfTwo: pd, setQuaternionFromProperEuler: md, normalize: $e, denormalize: Jt }; class le { constructor(e = 0, t = 0) { le.prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e, t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this.x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const t = this.x, n = this.y, i = e.elements; return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e.x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this.x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this.y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-this.y, -this.x) + Math.PI } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(bt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this } rotateAround(e, t) { const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, o = this.y - e.y; return this.x = r * n - o * i + e.x, this.y = r * i + o * n + e.y, this } random() { return this.x = Math.random(), this.y = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y } } class Oe { constructor(e, t, n, i, r, o, a, l, c) { Oe.prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c) } set(e, t, n, i, r, o, a, l, c) { const h = this.elements; return h[0] = e, h[1] = i, h[2] = a, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = o, h[8] = c, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this } setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], g = n[8], _ = i[0], m = i[3], f = i[6], y = i[1], v = i[4], b = i[7], I = i[2], R = i[5], w = i[8]; return r[0] = o * _ + a * y + l * I, r[3] = o * m + a * v + l * R, r[6] = o * f + a * b + l * w, r[1] = c * _ + h * y + u * I, r[4] = c * m + h * v + u * R, r[7] = c * f + h * b + u * w, r[2] = d * _ + p * y + g * I, r[5] = d * m + p * v + g * R, r[8] = d * f + p * b + g * w, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8]; return t * o * h - t * a * c - n * r * h + n * a * l + i * r * c - i * o * l } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = h * o - a * c, d = a * l - h * r, p = c * r - o * l, g = t * u + n * d + i * p; if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const _ = 1 / g; return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (a * n - i * o) * _, e[3] = d * _, e[4] = (h * t - i * l) * _, e[5] = (i * r - a * t) * _, e[6] = p * _, e[7] = (n * l - c * t) * _, e[8] = (o * t - n * r) * _, this } transpose() { let e; const t = this.elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e).invert().transpose() } transposeIntoArray(e) { const t = this.elements; return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this } setUvTransform(e, t, n, i, r, o, a) { const l = Math.cos(r), c = Math.sin(r); return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -i * c, i * l, -i * (-c * o + l * a) + a + t, 0, 0, 1), this } scale(e, t) { return this.premultiply(Xr.makeScale(e, t)), this } rotate(e) { return this.premultiply(Xr.makeRotation(-e)), this } translate(e, t) { return this.premultiply(Xr.makeTranslation(e, t)), this } makeTranslation(e, t) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this } makeRotation(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this } makeScale(e, t) { return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 9; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e } clone() { return new this.constructor().fromArray(this.elements) } } const Xr = new Oe; function uh(s) { for (let e = s.length - 1; e >= 0; --e)if (s[e] >= 65535) return !0; return !1 } function Ps(s) { return document.createElementNS("http://www.w3.org/1999/xhtml", s) } function gd() { const s = Ps("canvas"); return s.style.display = "block", s } const cl = {}; function Hi(s) { s in cl || (cl[s] = !0, console.warn(s)) } function _d(s, e, t) { return new Promise(function (n, i) { function r() { switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) { case s.WAIT_FAILED: i(); break; case s.TIMEOUT_EXPIRED: setTimeout(r, t); break; default: n() } } setTimeout(r, t) }) } const hl = new Oe().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199), ul = new Oe().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735), os = { [Et]: { transfer: Sr, primaries: br, luminanceCoefficients: [.2126, .7152, .0722], toReference: s => s, fromReference: s => s }, [Pt]: { transfer: st, primaries: br, luminanceCoefficients: [.2126, .7152, .0722], toReference: s => s.convertSRGBToLinear(), fromReference: s => s.convertLinearToSRGB() }, [Dr]: { transfer: Sr, primaries: Er, luminanceCoefficients: [.2289, .6917, .0793], toReference: s => s.applyMatrix3(ul), fromReference: s => s.applyMatrix3(hl) }, [Ra]: { transfer: st, primaries: Er, luminanceCoefficients: [.2289, .6917, .0793], toReference: s => s.convertSRGBToLinear().applyMatrix3(ul), fromReference: s => s.applyMatrix3(hl).convertLinearToSRGB() } }, vd = new Set([Et, Dr]), We = { enabled: !0, _workingColorSpace: Et, get workingColorSpace() { return this._workingColorSpace }, set workingColorSpace(s) { if (!vd.has(s)) throw new Error(`Unsupported working color space, "${s}".`); this._workingColorSpace = s }, convert: function (s, e, t) { if (this.enabled === !1 || e === t || !e || !t) return s; const n = os[e].toReference, i = os[t].fromReference; return i(n(s)) }, fromWorkingColorSpace: function (s, e) { return this.convert(s, this._workingColorSpace, e) }, toWorkingColorSpace: function (s, e) { return this.convert(s, e, this._workingColorSpace) }, getPrimaries: function (s) { return os[s].primaries }, getTransfer: function (s) { return s === Gn ? Sr : os[s].transfer }, getLuminanceCoefficients: function (s, e = this._workingColorSpace) { return s.fromArray(os[e].luminanceCoefficients) } }; function Vi(s) { return s < .04045 ? s * .0773993808 : Math.pow(s * .9478672986 + .0521327014, 2.4) } function jr(s) { return s < .0031308 ? s * 12.92 : 1.055 * Math.pow(s, .41666) - .055 } let mi; class xd { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src; let t; if (e instanceof HTMLCanvasElement) t = e; else { mi === void 0 && (mi = Ps("canvas")), mi.width = e.width, mi.height = e.height; const n = mi.getContext("2d"); e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = mi } return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") } static sRGBToLinear(e) { if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) { const t = Ps("canvas"); t.width = e.width, t.height = e.height; const n = t.getContext("2d"); n.drawImage(e, 0, 0, e.width, e.height); const i = n.getImageData(0, 0, e.width, e.height), r = i.data; for (let o = 0; o < r.length; o++)r[o] = Vi(r[o] / 255) * 255; return n.putImageData(i, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n = 0; n < t.length; n++)t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Vi(t[n] / 255) * 255) : t[n] = Vi(t[n]); return { data: t, width: e.width, height: e.height } } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e } } let yd = 0; class dh { constructor(e = null) { this.isSource = !0, Object.defineProperty(this, "id", { value: yd++ }), this.uuid = en(), this.data = e, this.dataReady = !0, this.version = 0 } set needsUpdate(e) { e === !0 && this.version++ } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const n = { uuid: this.uuid, url: "" }, i = this.data; if (i !== null) { let r; if (Array.isArray(i)) { r = []; for (let o = 0, a = i.length; o < a; o++)i[o].isDataTexture ? r.push(Yr(i[o].image)) : r.push(Yr(i[o])) } else r = Yr(i); n.url = r } return t || (e.images[this.uuid] = n), n } } function Yr(s) { return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? xd.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {}) } let Md = 0; class vt extends ui { constructor(e = vt.DEFAULT_IMAGE, t = vt.DEFAULT_MAPPING, n = Wn, i = Wn, r = Ht, o = An, a = jt, l = Ln, c = vt.DEFAULT_ANISOTROPY, h = Gn) { super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Md++ }), this.uuid = en(), this.name = "", this.source = new dh(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = o, this.anisotropy = c, this.format = a, this.internalFormat = null, this.type = l, this.offset = new le(0, 0), this.repeat = new le(1, 1), this.center = new le(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Oe, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.pmremVersion = 0 } get image() { return this.source.data } set image(e = null) { this.source.data = e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this.constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this } toJSON(e) { const t = e === void 0 || typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid]; const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !== Kc) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) { case ji: e.x = e.x - Math.floor(e.x); break; case Wn: e.x = e.x < 0 ? 0 : 1; break; case Mr: Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x); break }if (e.y < 0 || e.y > 1) switch (this.wrapT) { case ji: e.y = e.y - Math.floor(e.y); break; case Wn: e.y = e.y < 0 ? 0 : 1; break; case Mr: Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y); break }return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++, this.source.needsUpdate = !0) } set needsPMREMUpdate(e) { e === !0 && this.pmremVersion++ } } vt.DEFAULT_IMAGE = null; vt.DEFAULT_MAPPING = Kc; vt.DEFAULT_ANISOTROPY = 1; class tt { constructor(e = 0, t = 0, n = 0, i = 1) { tt.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = i } get width() { return this.z } set width(e) { this.z = e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, i) { return this.x = e, this.y = t, this.z = n, this.w = i, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; case 3: this.w = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; case 3: return this.w; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, r = this.w, o = e.elements; return this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r, this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r, this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r, this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r, this } divideScalar(e) { return this.multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(e) { let t, n, i, r; const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], g = l[9], _ = l[2], m = l[6], f = l[10]; if (Math.abs(h - d) < .01 && Math.abs(u - _) < .01 && Math.abs(g - m) < .01) { if (Math.abs(h + d) < .1 && Math.abs(u + _) < .1 && Math.abs(g + m) < .1 && Math.abs(c + p + f - 3) < .1) return this.set(1, 0, 0, 0), this; t = Math.PI; const v = (c + 1) / 2, b = (p + 1) / 2, I = (f + 1) / 2, R = (h + d) / 4, w = (u + _) / 4, F = (g + m) / 4; return v > b && v > I ? v < .01 ? (n = 0, i = .707106781, r = .707106781) : (n = Math.sqrt(v), i = R / n, r = w / n) : b > I ? b < .01 ? (n = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(b), n = R / i, r = F / i) : I < .01 ? (n = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(I), n = w / r, i = F / r), this.set(n, i, r, t), this } let y = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h)); return Math.abs(y) < .001 && (y = 1), this.x = (m - g) / y, this.y = (u - _) / y, this.z = (d - h) / y, this.w = Math.acos((c + p + f - 1) / 2), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z, yield this.w } } class Sd extends ui { constructor(e = 1, t = 1, n = {}) { super(), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new tt(0, 0, e, t), this.scissorTest = !1, this.viewport = new tt(0, 0, e, t); const i = { width: e, height: t, depth: 1 }; n = Object.assign({ generateMipmaps: !1, internalFormat: null, minFilter: Ht, depthBuffer: !0, stencilBuffer: !1, resolveDepthBuffer: !0, resolveStencilBuffer: !0, depthTexture: null, samples: 0, count: 1 }, n); const r = new vt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace); r.flipY = !1, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = []; const o = n.count; for (let a = 0; a < o; a++)this.textures[a] = r.clone(), this.textures[a].isRenderTargetTexture = !0; this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples } get texture() { return this.textures[0] } set texture(e) { this.textures[0] = e } setSize(e, t, n = 1) { if (this.width !== e || this.height !== t || this.depth !== n) { this.width = e, this.height = t, this.depth = n; for (let i = 0, r = this.textures.length; i < r; i++)this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n; this.dispose() } this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0; for (let n = 0, i = e.textures.length; n < i; n++)this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = !0; const t = Object.assign({}, e.texture.image); return this.texture.source = new dh(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } class Dn extends Sd { constructor(e = 1, t = 1, n = {}) { super(e, t, n), this.isWebGLRenderTarget = !0 } } class fh extends vt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = At, this.minFilter = At, this.wrapR = Wn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = new Set } addLayerUpdate(e) { this.layerUpdates.add(e) } clearLayerUpdates() { this.layerUpdates.clear() } } class bd extends vt { constructor(e = null, t = 1, n = 1, i = 1) { super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = At, this.minFilter = At, this.wrapR = Wn, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } class nn { constructor(e = 0, t = 0, n = 0, i = 1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = i } static slerpFlat(e, t, n, i, r, o, a) { let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3]; const d = r[o + 0], p = r[o + 1], g = r[o + 2], _ = r[o + 3]; if (a === 0) { e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u; return } if (a === 1) { e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = _; return } if (u !== _ || l !== d || c !== p || h !== g) { let m = 1 - a; const f = l * d + c * p + h * g + u * _, y = f >= 0 ? 1 : -1, v = 1 - f * f; if (v > Number.EPSILON) { const I = Math.sqrt(v), R = Math.atan2(I, f * y); m = Math.sin(m * R) / I, a = Math.sin(a * R) / I } const b = a * y; if (l = l * m + d * b, c = c * m + p * b, h = h * m + g * b, u = u * m + _ * b, m === 1 - a) { const I = 1 / Math.sqrt(l * l + c * c + h * h + u * u); l *= I, c *= I, h *= I, u *= I } } e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u } static multiplyQuaternionsFlat(e, t, n, i, r, o) { const a = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[o], d = r[o + 1], p = r[o + 2], g = r[o + 3]; return e[t] = a * g + h * u + l * p - c * d, e[t + 1] = l * g + h * d + c * u - a * p, e[t + 2] = c * g + h * p + a * d - l * u, e[t + 3] = h * g - a * u - l * d - c * p, e } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this._onChangeCallback() } set(e, t, n, i) { return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t = !0) { const n = e._x, i = e._y, r = e._z, o = e._order, a = Math.cos, l = Math.sin, c = a(n / 2), h = a(i / 2), u = a(r / 2), d = l(n / 2), p = l(i / 2), g = l(r / 2); switch (o) { case "XYZ": this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g; break; case "YXZ": this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g; break; case "ZXY": this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g; break; case "ZYX": this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g; break; case "YZX": this._x = d * h * u + c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u - d * p * g; break; case "XZY": this._x = d * h * u - c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u + d * p * g; break; default: console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o) }return t === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { const n = t / 2, i = Math.sin(n); return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { const t = e.elements, n = t[0], i = t[4], r = t[8], o = t[1], a = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + a + u; if (d > 0) { const p = .5 / Math.sqrt(d + 1); this._w = .25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (o - i) * p } else if (n > a && n > u) { const p = 2 * Math.sqrt(1 + n - a - u); this._w = (h - l) / p, this._x = .25 * p, this._y = (i + o) / p, this._z = (r + c) / p } else if (a > u) { const p = 2 * Math.sqrt(1 + a - n - u); this._w = (r - c) / p, this._x = (i + o) / p, this._y = .25 * p, this._z = (l + h) / p } else { const p = 2 * Math.sqrt(1 + u - n - a); this._w = (o - i) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = .25 * p } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) + 1; return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(Math.abs(bt(this.dot(e), -1, 1))) } rotateTowards(e, t) { const n = this.angleTo(e); if (n === 0) return this; const i = Math.min(1, t / n); return this.slerp(e, i), this } identity() { return this.set(0, 0, 0, 1) } invert() { return this.conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w) } normalize() { let e = this.length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this, e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e, t) { const n = e._x, i = e._y, r = e._z, o = e._w, a = t._x, l = t._y, c = t._z, h = t._w; return this._x = n * h + o * a + i * c - r * l, this._y = i * h + o * l + r * a - n * c, this._z = r * h + o * c + n * l - i * a, this._w = o * h - n * a - i * l - r * c, this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1) return this.copy(e); const n = this._x, i = this._y, r = this._z, o = this._w; let a = o * e._w + n * e._x + i * e._y + r * e._z; if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o, this._x = n, this._y = i, this._z = r, this; const l = 1 - a * a; if (l <= Number.EPSILON) { const p = 1 - t; return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this } const c = Math.sqrt(l), h = Math.atan2(c, a), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c; return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n); return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t)) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._w } } class C { constructor(e = 0, t = 0, n = 0) { C.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e, this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) { case 0: this.x = t; break; case 1: this.y = t; break; case 2: this.z = t; break; default: throw new Error("index is out of range: " + e) }return this } getComponent(e) { switch (e) { case 0: return this.x; case 1: return this.y; case 2: return this.z; default: throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z, this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x, this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this.z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e, this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this } applyEuler(e) { return this.applyQuaternion(dl.setFromEuler(e)) } applyAxisAngle(e, t) { return this.applyQuaternion(dl.setFromAxisAngle(e, t)) } applyMatrix3(e) { const t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this } applyNormalMatrix(e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const t = this.x, n = this.y, i = this.z, r = e.elements, o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]); return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o, this } applyQuaternion(e) { const t = this.x, n = this.y, i = this.z, r = e.x, o = e.y, a = e.z, l = e.w, c = 2 * (o * i - a * n), h = 2 * (a * t - r * i), u = 2 * (r * n - o * t); return this.x = t + l * c + o * u - a * h, this.y = n + l * h + a * c - r * u, this.z = i + l * u + r * h - o * c, this } project(e) { return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(e) { const t = this.x, n = this.y, i = this.z, r = e.elements; return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize() } divide(e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this.multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x + this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e, t) { const n = e.x, i = e.y, r = e.z, o = t.x, a = t.y, l = t.z; return this.x = i * l - r * a, this.y = r * o - n * l, this.z = n * a - i * o, this } projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0, 0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(e) { return qr.copy(this).projectOnVector(e), this.sub(qr) } reflect(e) { return this.sub(qr.copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(bt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(e)) } distanceToSquared(e) { const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z; return t * t + n * n + i * i } manhattanDistanceTo(e) { return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t, n) { const i = Math.sin(t) * e; return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this } setFromCylindrical(e) { return this.setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t, n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13], this.z = t[14], this } setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = i, this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t * 4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this.x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y === this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this } randomDirection() { const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t); return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this } *[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } } const qr = new C, dl = new nn; class In { constructor(e = new C(1 / 0, 1 / 0, 1 / 0), t = new C(-1 / 0, -1 / 0, -1 / 0)) { this.isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max.copy(t), this } setFromArray(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t += 3)this.expandByPoint(qt.fromArray(e, t)); return this } setFromBufferAttribute(e) { this.makeEmpty(); for (let t = 0, n = e.count; t < n; t++)this.expandByPoint(qt.fromBufferAttribute(e, t)); return this } setFromPoints(e) { this.makeEmpty(); for (let t = 0, n = e.length; t < n; t++)this.expandByPoint(e[t]); return this } setFromCenterAndSize(e, t) { const n = qt.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max.copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this.expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e), this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e), this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (n !== void 0) { const r = n.getAttribute("position"); if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let o = 0, a = r.count; o < a; o++)e.isMesh === !0 ? e.getVertexPosition(o, qt) : qt.fromBufferAttribute(r, o), qt.applyMatrix4(e.matrixWorld), this.expandByPoint(qt); else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Os.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Os.copy(n.boundingBox)), Os.applyMatrix4(e.matrixWorld), this.union(Os) } const i = e.children; for (let r = 0, o = i.length; r < o; r++)this.expandByObject(i[r], t); return this } containsPoint(e) { return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z } containsBox(e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e, t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(e) { return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z } intersectsSphere(e) { return this.clampPoint(e.center, qt), qt.distanceToSquared(e.center) <= e.radius * e.radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (this.isEmpty()) return !1; this.getCenter(as), Fs.subVectors(this.max, as), gi.subVectors(e.a, as), _i.subVectors(e.b, as), vi.subVectors(e.c, as), Un.subVectors(_i, gi), On.subVectors(vi, _i), Qn.subVectors(gi, vi); let t = [0, -Un.z, Un.y, 0, -On.z, On.y, 0, -Qn.z, Qn.y, Un.z, 0, -Un.x, On.z, 0, -On.x, Qn.z, 0, -Qn.x, -Un.y, Un.x, 0, -On.y, On.x, 0, -Qn.y, Qn.x, 0]; return !Kr(t, gi, _i, vi, Fs) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Kr(t, gi, _i, vi, Fs)) ? !1 : (Bs.crossVectors(Un, On), t = [Bs.x, Bs.y, Bs.z], Kr(t, gi, _i, vi, Fs)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(e) { return this.clampPoint(e, qt).distanceTo(e) } getBoundingSphere(e) { return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(qt).length() * .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max), this } applyMatrix4(e) { return this.isEmpty() ? this : (xn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), xn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), xn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), xn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), xn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), xn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), xn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), xn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(xn), this) } translate(e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this.min) && e.max.equals(this.max) } } const xn = [new C, new C, new C, new C, new C, new C, new C, new C], qt = new C, Os = new In, gi = new C, _i = new C, vi = new C, Un = new C, On = new C, Qn = new C, as = new C, Fs = new C, Bs = new C, ei = new C; function Kr(s, e, t, n, i) { for (let r = 0, o = s.length - 3; r <= o; r += 3) { ei.fromArray(s, r); const a = i.x * Math.abs(ei.x) + i.y * Math.abs(ei.y) + i.z * Math.abs(ei.z), l = e.dot(ei), c = t.dot(ei), h = n.dot(ei); if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1 } return !0 } const Ed = new In, ls = new C, $r = new C; class pn { constructor(e = new C, t = -1) { this.isSphere = !0, this.center = e, this.radius = t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e, t) { const n = this.center; t !== void 0 ? n.copy(t) : Ed.setFromPoints(e).getCenter(n); let i = 0; for (let r = 0, o = e.length; r < o; r++)i = Math.max(i, n.distanceToSquared(e[r])); return this.radius = Math.sqrt(i), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius, this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0), this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this.radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this.radius } intersectsSphere(e) { const t = this.radius + e.radius; return e.center.distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this.radius } clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this; ls.subVectors(e, this.center); const t = ls.lengthSq(); if (t > this.radius * this.radius) { const n = Math.sqrt(t), i = (n - this.radius) * .5; this.center.addScaledVector(ls, i / n), this.radius += i } return this } union(e) { return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : ($r.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(ls.copy(e.center).add($r)), this.expandByPoint(ls.copy(e.center).sub($r))), this) } equals(e) { return e.center.equals(this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(this) } } const yn = new C, Zr = new C, zs = new C, Fn = new C, Jr = new C, ks = new C, Qr = new C; class ts { constructor(e = new C, t = new C(0, 0, -1)) { this.origin = e, this.direction = t } set(e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this.origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e).sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, yn)), this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this.direction); return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(e)) } distanceSqToPoint(e) { const t = yn.subVectors(e, this.origin).dot(this.direction); return t < 0 ? this.origin.distanceToSquared(e) : (yn.copy(this.origin).addScaledVector(this.direction, t), yn.distanceToSquared(e)) } distanceSqToSegment(e, t, n, i) { Zr.copy(e).add(t).multiplyScalar(.5), zs.copy(t).sub(e).normalize(), Fn.copy(this.origin).sub(Zr); const r = e.distanceTo(t) * .5, o = -this.direction.dot(zs), a = Fn.dot(this.direction), l = -Fn.dot(zs), c = Fn.lengthSq(), h = Math.abs(1 - o * o); let u, d, p, g; if (h > 0) if (u = o * l - a, d = o * a - l, g = r * h, u >= 0) if (d >= -g) if (d <= g) { const _ = 1 / h; u *= _, d *= _, p = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * l) + c } else d = r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c; else d = -r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c; else d <= -g ? (u = Math.max(0, -(-o * r + a)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(o * r + a)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c); else d = o > 0 ? -r : r, u = Math.max(0, -(o * d + a)), p = -u * u + d * (d + 2 * l) + c; return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Zr).addScaledVector(zs, d), p } intersectSphere(e, t) { yn.subVectors(e.center, this.origin); const n = yn.dot(this.direction), i = yn.dot(yn) - n * n, r = e.radius * e.radius; if (i > r) return null; const o = Math.sqrt(r - i), a = n - o, l = n + o; return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t) } intersectsSphere(e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n : null } intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null : this.at(n, t) } intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t === 0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, i, r, o, a, l; const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin; return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || r > i || ((r > n || isNaN(n)) && (n = r), (o < i || isNaN(i)) && (i = o), u >= 0 ? (a = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || a > i) || ((a > n || n !== n) && (n = a), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t) } intersectsBox(e) { return this.intersectBox(e, yn) !== null } intersectTriangle(e, t, n, i, r) { Jr.subVectors(t, e), ks.subVectors(n, e), Qr.crossVectors(Jr, ks); let o = this.direction.dot(Qr), a; if (o > 0) { if (i) return null; a = 1 } else if (o < 0) a = -1, o = -o; else return null; Fn.subVectors(this.origin, e); const l = a * this.direction.dot(ks.crossVectors(Fn, ks)); if (l < 0) return null; const c = a * this.direction.dot(Jr.cross(Fn)); if (c < 0 || l + c > o) return null; const h = -a * Fn.dot(Qr); return h < 0 ? null : this.at(h / o, r) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this.direction) } clone() { return new this.constructor().copy(this) } } class Ie { constructor(e, t, n, i, r, o, a, l, c, h, u, d, p, g, _, m) { Ie.prototype.isMatrix4 = !0, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, o, a, l, c, h, u, d, p, g, _, m) } set(e, t, n, i, r, o, a, l, c, h, u, d, p, g, _, m) { const f = this.elements; return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = r, f[5] = o, f[9] = a, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = g, f[11] = _, f[15] = m, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } clone() { return new Ie().fromArray(this.elements) } copy(e) { const t = this.elements, n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { const t = this.elements, n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t, n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this } extractRotation(e) { const t = this.elements, n = e.elements, i = 1 / xi.setFromMatrixColumn(e, 0).length(), r = 1 / xi.setFromMatrixColumn(e, 1).length(), o = 1 / xi.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromEuler(e) { const t = this.elements, n = e.x, i = e.y, r = e.z, o = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r); if (e.order === "XYZ") { const d = o * h, p = o * u, g = a * h, _ = a * u; t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + g * c, t[5] = d - _ * c, t[9] = -a * l, t[2] = _ - d * c, t[6] = g + p * c, t[10] = o * l } else if (e.order === "YXZ") { const d = l * h, p = l * u, g = c * h, _ = c * u; t[0] = d + _ * a, t[4] = g * a - p, t[8] = o * c, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = p * a - g, t[6] = _ + d * a, t[10] = o * l } else if (e.order === "ZXY") { const d = l * h, p = l * u, g = c * h, _ = c * u; t[0] = d - _ * a, t[4] = -o * u, t[8] = g + p * a, t[1] = p + g * a, t[5] = o * h, t[9] = _ - d * a, t[2] = -o * c, t[6] = a, t[10] = o * l } else if (e.order === "ZYX") { const d = o * h, p = o * u, g = a * h, _ = a * u; t[0] = l * h, t[4] = g * c - p, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = p * c - g, t[2] = -c, t[6] = a * l, t[10] = o * l } else if (e.order === "YZX") { const d = o * l, p = o * c, g = a * l, _ = a * c; t[0] = l * h, t[4] = _ - d * u, t[8] = g * u + p, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -c * h, t[6] = p * u + g, t[10] = d - _ * u } else if (e.order === "XZY") { const d = o * l, p = o * c, g = a * l, _ = a * c; t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = o * h, t[9] = p * u - g, t[2] = g * u - p, t[6] = a * h, t[10] = _ * u + d } return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this.compose(Td, e, wd) } lookAt(e, t, n) { const i = this.elements; return zt.subVectors(e, t), zt.lengthSq() === 0 && (zt.z = 1), zt.normalize(), Bn.crossVectors(n, zt), Bn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? zt.x += 1e-4 : zt.z += 1e-4, zt.normalize(), Bn.crossVectors(n, zt)), Bn.normalize(), Hs.crossVectors(zt, Bn), i[0] = Bn.x, i[4] = Hs.x, i[8] = zt.x, i[1] = Bn.y, i[5] = Hs.y, i[9] = zt.y, i[2] = Bn.z, i[6] = Hs.z, i[10] = zt.z, this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements, i = t.elements, r = this.elements, o = n[0], a = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], g = n[2], _ = n[6], m = n[10], f = n[14], y = n[3], v = n[7], b = n[11], I = n[15], R = i[0], w = i[4], F = i[8], E = i[12], S = i[1], P = i[5], G = i[9], k = i[13], $ = i[2], K = i[6], W = i[10], J = i[14], H = i[3], ce = i[7], fe = i[11], ve = i[15]; return r[0] = o * R + a * S + l * $ + c * H, r[4] = o * w + a * P + l * K + c * ce, r[8] = o * F + a * G + l * W + c * fe, r[12] = o * E + a * k + l * J + c * ve, r[1] = h * R + u * S + d * $ + p * H, r[5] = h * w + u * P + d * K + p * ce, r[9] = h * F + u * G + d * W + p * fe, r[13] = h * E + u * k + d * J + p * ve, r[2] = g * R + _ * S + m * $ + f * H, r[6] = g * w + _ * P + m * K + f * ce, r[10] = g * F + _ * G + m * W + f * fe, r[14] = g * E + _ * k + m * J + f * ve, r[3] = y * R + v * S + b * $ + I * H, r[7] = y * w + v * P + b * K + I * ce, r[11] = y * F + v * G + b * W + I * fe, r[15] = y * E + v * k + b * J + I * ve, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], o = e[1], a = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], g = e[3], _ = e[7], m = e[11], f = e[15]; return g * (+r * l * u - i * c * u - r * a * d + n * c * d + i * a * p - n * l * p) + _ * (+t * l * p - t * c * d + r * o * d - i * o * p + i * c * h - r * l * h) + m * (+t * c * u - t * a * p - r * o * u + n * o * p + r * a * h - n * c * h) + f * (-i * a * h - t * l * u + t * a * d + i * o * u - n * o * d + n * l * h) } transpose() { const e = this.elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { const i = this.elements; return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this } invert() { const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], o = e[4], a = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], f = e[15], y = u * m * c - _ * d * c + _ * l * p - a * m * p - u * l * f + a * d * f, v = g * d * c - h * m * c - g * l * p + o * m * p + h * l * f - o * d * f, b = h * _ * c - g * u * c + g * a * p - o * _ * p - h * a * f + o * u * f, I = g * u * l - h * _ * l - g * a * d + o * _ * d + h * a * m - o * u * m, R = t * y + n * v + i * b + r * I; if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0); const w = 1 / R; return e[0] = y * w, e[1] = (_ * d * r - u * m * r - _ * i * p + n * m * p + u * i * f - n * d * f) * w, e[2] = (a * m * r - _ * l * r + _ * i * c - n * m * c - a * i * f + n * l * f) * w, e[3] = (u * l * r - a * d * r - u * i * c + n * d * c + a * i * p - n * l * p) * w, e[4] = v * w, e[5] = (h * m * r - g * d * r + g * i * p - t * m * p - h * i * f + t * d * f) * w, e[6] = (g * l * r - o * m * r - g * i * c + t * m * c + o * i * f - t * l * f) * w, e[7] = (o * d * r - h * l * r + h * i * c - t * d * c - o * i * p + t * l * p) * w, e[8] = b * w, e[9] = (g * u * r - h * _ * r - g * n * p + t * _ * p + h * n * f - t * u * f) * w, e[10] = (o * _ * r - g * a * r + g * n * c - t * _ * c - o * n * f + t * a * f) * w, e[11] = (h * a * r - o * u * r - h * n * c + t * u * c + o * n * p - t * a * p) * w, e[12] = I * w, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * w, e[14] = (g * a * i - o * _ * i - g * n * l + t * _ * l + o * n * m - t * a * m) * w, e[15] = (o * u * i - h * a * i + h * n * l - t * u * l - o * n * d + t * a * d) * w, this } scale(e) { const t = this.elements, n = e.x, i = e.y, r = e.z; return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this } getMaxScaleOnAxis() { const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n, i)) } makeTranslation(e, t, n) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this } makeRotationX(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this } makeRotationY(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this } makeRotationZ(e) { const t = Math.cos(e), n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this } makeRotationAxis(e, t) { const n = Math.cos(t), i = Math.sin(t), r = 1 - n, o = e.x, a = e.y, l = e.z, c = r * o, h = r * a; return this.set(c * o + n, c * a - i * l, c * l + i * a, 0, c * a + i * l, h * a + n, h * l - i * o, 0, c * l - i * a, h * l + i * o, r * l * l + n, 0, 0, 0, 0, 1), this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this } makeShear(e, t, n, i, r, o) { return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this } compose(e, t, n) { const i = this.elements, r = t._x, o = t._y, a = t._z, l = t._w, c = r + r, h = o + o, u = a + a, d = r * c, p = r * h, g = r * u, _ = o * h, m = o * u, f = a * u, y = l * c, v = l * h, b = l * u, I = n.x, R = n.y, w = n.z; return i[0] = (1 - (_ + f)) * I, i[1] = (p + b) * I, i[2] = (g - v) * I, i[3] = 0, i[4] = (p - b) * R, i[5] = (1 - (d + f)) * R, i[6] = (m + y) * R, i[7] = 0, i[8] = (g + v) * w, i[9] = (m - y) * w, i[10] = (1 - (d + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this } decompose(e, t, n) { const i = this.elements; let r = xi.set(i[0], i[1], i[2]).length(); const o = xi.set(i[4], i[5], i[6]).length(), a = xi.set(i[8], i[9], i[10]).length(); this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], Kt.copy(this); const c = 1 / r, h = 1 / o, u = 1 / a; return Kt.elements[0] *= c, Kt.elements[1] *= c, Kt.elements[2] *= c, Kt.elements[4] *= h, Kt.elements[5] *= h, Kt.elements[6] *= h, Kt.elements[8] *= u, Kt.elements[9] *= u, Kt.elements[10] *= u, t.setFromRotationMatrix(Kt), n.x = r, n.y = o, n.z = a, this } makePerspective(e, t, n, i, r, o, a = Rn) { const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i); let p, g; if (a === Rn) p = -(o + r) / (o - r), g = -2 * o * r / (o - r); else if (a === Tr) p = -o / (o - r), g = -o * r / (o - r); else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a); return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this } makeOrthographic(e, t, n, i, r, o, a = Rn) { const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (o - r), d = (t + e) * c, p = (n + i) * h; let g, _; if (a === Rn) g = (o + r) * u, _ = -2 * u; else if (a === Tr) g = r * u, _ = -1 * u; else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a); return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this } equals(e) { const t = this.elements, n = e.elements; for (let i = 0; i < 16; i++)if (t[i] !== n[i]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this.elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e } } const xi = new C, Kt = new Ie, Td = new C(0, 0, 0), wd = new C(1, 1, 1), Bn = new C, Hs = new C, zt = new C, fl = new Ie, pl = new nn; class fn { constructor(e = 0, t = 0, n = 0, i = fn.DEFAULT_ORDER) { this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = i } get x() { return this._x } set x(e) { this._x = e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e, this._onChangeCallback() } set(e, t, n, i = this._order) { return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this } clone() { return new this.constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this } setFromRotationMatrix(e, t = this._order, n = !0) { const i = e.elements, r = i[0], o = i[4], a = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], p = i[10]; switch (t) { case "XYZ": this._y = Math.asin(bt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-o, r)) : (this._x = Math.atan2(d, c), this._z = 0); break; case "YXZ": this._x = Math.asin(-bt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0); break; case "ZXY": this._x = Math.asin(bt(d, -1, 1)), Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, r)); break; case "ZYX": this._y = Math.asin(-bt(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-o, c)); break; case "YZX": this._z = Math.asin(bt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, p)); break; case "XZY": this._z = Math.asin(-bt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-h, p), this._y = 0); break; default: console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t) }return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(e, t, n) { return fl.makeRotationFromQuaternion(e), this.setFromRotationMatrix(fl, t, n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(e) { return pl.setFromEuler(this), this.setFromQuaternion(pl, e) } equals(e) { return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this._onChangeCallback = e, this } _onChangeCallback() { } *[Symbol.iterator]() { yield this._x, yield this._y, yield this._z, yield this._order } } fn.DEFAULT_ORDER = "XYZ"; class Pa { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e | 0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !== 0 } } let Ad = 0; const ml = new C, yi = new nn, Mn = new Ie, Vs = new C, cs = new C, Rd = new C, Cd = new nn, gl = new C(1, 0, 0), _l = new C(0, 1, 0), vl = new C(0, 0, 1), xl = { type: "added" }, Pd = { type: "removed" }, Mi = { type: "childadded", child: null }, eo = { type: "childremoved", child: null }; class it extends ui { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: Ad++ }), this.uuid = en(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = it.DEFAULT_UP.clone(); const e = new C, t = new fn, n = new nn, i = new C(1, 1, 1); function r() { n.setFromEuler(t, !1) } function o() { t.setFromQuaternion(n, void 0, !1) } t._onChange(r), n._onChange(o), Object.defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e }, rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0, value: i }, modelViewMatrix: { value: new Ie }, normalMatrix: { value: new Oe } }), this.matrix = new Ie, this.matrixWorld = new Ie, this.matrixAutoUpdate = it.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Pa, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {} } onBeforeShadow() { } onAfterShadow() { } onBeforeRender() { } onAfterRender() { } applyMatrix4(e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this.quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion.setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return yi.setFromAxisAngle(e, t), this.quaternion.multiply(yi), this } rotateOnWorldAxis(e, t) { return yi.setFromAxisAngle(e, t), this.quaternion.premultiply(yi), this } rotateX(e) { return this.rotateOnAxis(gl, e) } rotateY(e) { return this.rotateOnAxis(_l, e) } rotateZ(e) { return this.rotateOnAxis(vl, e) } translateOnAxis(e, t) { return ml.copy(e).applyQuaternion(this.quaternion), this.position.add(ml.multiplyScalar(t)), this } translateX(e) { return this.translateOnAxis(gl, e) } translateY(e) { return this.translateOnAxis(_l, e) } translateZ(e) { return this.translateOnAxis(vl, e) } localToWorld(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Mn.copy(this.matrixWorld).invert()) } lookAt(e, t, n) { e.isVector3 ? Vs.copy(e) : Vs.set(e, t, n); const i = this.parent; this.updateWorldMatrix(!0, !1), cs.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Mn.lookAt(cs, Vs, this.up) : Mn.lookAt(Vs, cs, this.up), this.quaternion.setFromRotationMatrix(Mn), i && (Mn.extractRotation(i.matrixWorld), yi.setFromRotationMatrix(Mn), this.quaternion.premultiply(yi.invert())) } add(e) { if (arguments.length > 1) { for (let t = 0; t < arguments.length; t++)this.add(arguments[t]); return this } return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(xl), Mi.child = e, this.dispatchEvent(Mi), Mi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++)this.remove(arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Pd), eo.child = e, this.dispatchEvent(eo), eo.child = null), this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this), this } clear() { return this.remove(...this.children) } attach(e) { return this.updateWorldMatrix(!0, !1), Mn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Mn.multiply(e.parent.matrixWorld)), e.applyMatrix4(Mn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(xl), Mi.child = e, this.dispatchEvent(Mi), Mi.child = null, this } getObjectById(e) { return this.getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name", e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, i = this.children.length; n < i; n++) { const o = this.children[n].getObjectByProperty(e, t); if (o !== void 0) return o } } getObjectsByProperty(e, t, n = []) { this[e] === t && n.push(this); const i = this.children; for (let r = 0, o = i.length; r < o; r++)i[r].getObjectsByProperty(e, t, n); return n } getWorldPosition(e) { return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(cs, e, Rd), e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(cs, Cd, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this.matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() { } traverse(e) { e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverse(e) } traverseVisible(e) { if (this.visible === !1) return; e(this); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].traverseVisible(e) } traverseAncestors(e) { const t = this.parent; t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, i = t.length; n < i; n++)t[n].updateMatrixWorld(e) } updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === !0) { const i = this.children; for (let r = 0, o = i.length; r < o; r++)i[r].updateWorldMatrix(!1, !0) } } toJSON(e) { const t = e === void 0 || typeof e == "string", n = {}; t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" }); const i = {}; i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === !0 && (i.castShadow = !0), this.receiveShadow === !0 && (i.receiveShadow = !0), this.visible === !1 && (i.visible = !1), this.frustumCulled === !1 && (i.frustumCulled = !1), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(a => ({ boxInitialized: a.boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(), sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius, sphereCenter: a.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })); function r(a, l) { return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid } if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid); else if (this.isMesh || this.isLine || this.isPoints) { i.geometry = r(e.geometries, this.geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !== void 0) { const l = a.shapes; if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) { const u = l[c]; r(e.shapes, u) } else r(e.shapes, l) } } if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) { const a = []; for (let l = 0, c = this.material.length; l < c; l++)a.push(r(e.materials, this.material[l])); i.material = a } else i.material = r(e.materials, this.material); if (this.children.length > 0) { i.children = []; for (let a = 0; a < this.children.length; a++)i.children.push(this.children[a].toJSON(e).object) } if (this.animations.length > 0) { i.animations = []; for (let a = 0; a < this.animations.length; a++) { const l = this.animations[a]; i.animations.push(r(e.animations, l)) } } if (t) { const a = o(e.geometries), l = o(e.materials), c = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), p = o(e.animations), g = o(e.nodes); a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g) } return n.object = i, n; function o(a) { const l = []; for (const c in a) { const h = a[c]; delete h.metadata, l.push(h) } return l } } clone(e) { return new this.constructor().copy(this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let n = 0; n < e.children.length; n++) { const i = e.children[n]; this.add(i.clone()) } return this } } it.DEFAULT_UP = new C(0, 1, 0); it.DEFAULT_MATRIX_AUTO_UPDATE = !0; it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0; const $t = new C, Sn = new C, to = new C, bn = new C, Si = new C, bi = new C, yl = new C, no = new C, io = new C, so = new C; class hn { constructor(e = new C, t = new C, n = new C) { this.a = e, this.b = t, this.c = n } static getNormal(e, t, n, i) { i.subVectors(n, t), $t.subVectors(e, t), i.cross($t); const r = i.lengthSq(); return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0) } static getBarycoord(e, t, n, i, r) { $t.subVectors(i, t), Sn.subVectors(n, t), to.subVectors(e, t); const o = $t.dot($t), a = $t.dot(Sn), l = $t.dot(to), c = Sn.dot(Sn), h = Sn.dot(to), u = o * c - a * a; if (u === 0) return r.set(0, 0, 0), null; const d = 1 / u, p = (c * l - a * h) * d, g = (o * h - a * l) * d; return r.set(1 - p - g, g, p) } static containsPoint(e, t, n, i) { return this.getBarycoord(e, t, n, i, bn) === null ? !1 : bn.x >= 0 && bn.y >= 0 && bn.x + bn.y <= 1 } static getInterpolation(e, t, n, i, r, o, a, l) { return this.getBarycoord(e, t, n, i, bn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, bn.x), l.addScaledVector(o, bn.y), l.addScaledVector(a, bn.z), l) } static isFrontFacing(e, t, n, i) { return $t.subVectors(n, t), Sn.subVectors(e, t), $t.cross(Sn).dot(i) < 0 } set(e, t, n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t, n, i) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this } setFromAttributeAndIndices(e, t, n, i) { return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return $t.subVectors(this.c, this.b), Sn.subVectors(this.a, this.b), $t.cross(Sn).length() * .5 } getMidpoint(e) { return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return hn.getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a, this.b, this.c) } getBarycoord(e, t) { return hn.getBarycoord(e, this.a, this.b, this.c, t) } getInterpolation(e, t, n, i, r) { return hn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r) } containsPoint(e) { return hn.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return hn.isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(this) } closestPointToPoint(e, t) { const n = this.a, i = this.b, r = this.c; let o, a; Si.subVectors(i, n), bi.subVectors(r, n), no.subVectors(e, n); const l = Si.dot(no), c = bi.dot(no); if (l <= 0 && c <= 0) return t.copy(n); io.subVectors(e, i); const h = Si.dot(io), u = bi.dot(io); if (h >= 0 && u <= h) return t.copy(i); const d = l * u - h * c; if (d <= 0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(Si, o); so.subVectors(e, r); const p = Si.dot(so), g = bi.dot(so); if (g >= 0 && p <= g) return t.copy(r); const _ = p * c - l * g; if (_ <= 0 && c >= 0 && g <= 0) return a = c / (c - g), t.copy(n).addScaledVector(bi, a); const m = h * g - p * u; if (m <= 0 && u - h >= 0 && p - g >= 0) return yl.subVectors(r, i), a = (u - h) / (u - h + (p - g)), t.copy(i).addScaledVector(yl, a); const f = 1 / (m + _ + d); return o = _ * f, a = d * f, t.copy(n).addScaledVector(Si, o).addScaledVector(bi, a) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } } const ph = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, zn = { h: 0, s: 0, l: 0 }, Gs = { h: 0, s: 0, l: 0 }; function ro(s, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s } let Se = class { constructor(e, t, n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n) } set(e, t, n) { if (t === void 0 && n === void 0) { const i = e; i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i) } else this.setRGB(e, t, n); return this } setScalar(e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = Pt) { return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, We.toWorkingColorSpace(this, t), this } setRGB(e, t, n, i = We.workingColorSpace) { return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this, i), this } setHSL(e, t, n, i = We.workingColorSpace) { if (e = Ca(e, 1), t = bt(t, 0, 1), n = bt(n, 0, 1), t === 0) this.r = this.g = this.b = n; else { const r = n <= .5 ? n * (1 + t) : n + t - n * t, o = 2 * n - r; this.r = ro(o, r, e + 1 / 3), this.g = ro(o, r, e), this.b = ro(o, r, e - 1 / 3) } return We.toWorkingColorSpace(this, i), this } setStyle(e, t = Pt) { function n(r) { r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.") } let i; if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) { let r; const o = i[1], a = i[2]; switch (o) { case "rgb": case "rgba": if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t); if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t); break; case "hsl": case "hsla": if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t); break; default: console.warn("THREE.Color: Unknown color model " + e) } } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) { const r = i[1], o = r.length; if (o === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t); if (o === 6) return this.setHex(parseInt(r, 16), t); console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0) return this.setColorName(e, t); return this } setColorName(e, t = Pt) { const n = ph[e.toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r, this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b, this } copySRGBToLinear(e) { return this.r = Vi(e.r), this.g = Vi(e.g), this.b = Vi(e.b), this } copyLinearToSRGB(e) { return this.r = jr(e.r), this.g = jr(e.g), this.b = jr(e.b), this } convertSRGBToLinear() { return this.copySRGBToLinear(this), this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e = Pt) { return We.fromWorkingColorSpace(wt.copy(this), e), Math.round(bt(wt.r * 255, 0, 255)) * 65536 + Math.round(bt(wt.g * 255, 0, 255)) * 256 + Math.round(bt(wt.b * 255, 0, 255)) } getHexString(e = Pt) { return ("000000" + this.getHex(e).toString(16)).slice(-6) } getHSL(e, t = We.workingColorSpace) { We.fromWorkingColorSpace(wt.copy(this), t); const n = wt.r, i = wt.g, r = wt.b, o = Math.max(n, i, r), a = Math.min(n, i, r); let l, c; const h = (a + o) / 2; if (a === o) l = 0, c = 0; else { const u = o - a; switch (c = h <= .5 ? u / (o + a) : u / (2 - o - a), o) { case n: l = (i - r) / u + (i < r ? 6 : 0); break; case i: l = (r - n) / u + 2; break; case r: l = (n - i) / u + 4; break }l /= 6 } return e.h = l, e.s = c, e.l = h, e } getRGB(e, t = We.workingColorSpace) { return We.fromWorkingColorSpace(wt.copy(this), t), e.r = wt.r, e.g = wt.g, e.b = wt.b, e } getStyle(e = Pt) { We.fromWorkingColorSpace(wt.copy(this), e); const t = wt.r, n = wt.g, i = wt.b; return e !== Pt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})` } offsetHSL(e, t, n) { return this.getHSL(zn), this.setHSL(zn.h + e, zn.s + t, zn.l + n) } add(e) { return this.r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g += e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this.r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this.g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this } lerpHSL(e, t) { this.getHSL(zn), e.getHSL(Gs); const n = bs(zn.h, Gs.h, t), i = bs(zn.s, Gs.s, t), r = bs(zn.l, Gs.l, t); return this.setHSL(n, i, r), this } setFromVector3(e) { return this.r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { const t = this.r, n = this.g, i = this.b, r = e.elements; return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this } equals(e) { return e.r === this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this } toJSON() { return this.getHex() } *[Symbol.iterator]() { yield this.r, yield this.g, yield this.b } }; const wt = new Se; Se.NAMES = ph; let Ld = 0; class dn extends ui { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ld++ }), this.uuid = en(), this.name = "", this.type = "Material", this.blending = zi, this.side = Pn, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = Co, this.blendDst = Po, this.blendEquation = li, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Se(0, 0, 0), this.blendAlpha = 0, this.depthFunc = yr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = ol, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = pi, this.stencilZFail = pi, this.stencilZPass = pi, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e } onBeforeRender() { } onBeforeCompile() { } customProgramCacheKey() { return this.onBeforeCompile.toString() } setValues(e) { if (e !== void 0) for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(`THREE.Material: parameter '${t}' has value of undefined.`); continue } const i = this[t]; if (i === void 0) { console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`); continue } i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n } } toJSON(e) { const t = e === void 0 || typeof e == "string"; t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } }; n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== zi && (n.blending = this.blending), this.side !== Pn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== Co && (n.blendSrc = this.blendSrc), this.blendDst !== Po && (n.blendDst = this.blendDst), this.blendEquation !== li && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== yr && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ol && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== pi && (n.stencilFail = this.stencilFail), this.stencilZFail !== pi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== pi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData); function i(r) { const o = []; for (const a in r) { const l = r[a]; delete l.metadata, o.push(l) } return o } if (t) { const r = i(e.textures), o = i(e.images); r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !== null) { const i = t.length; n = new Array(i); for (let r = 0; r !== i; ++r)n[r] = t[r].clone() } return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this.dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this.version++ } onBuild() { console.warn("Material: onBuild() has been removed.") } } class Xn extends dn { constructor(e) { super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Se(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fn, this.combine = qc, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this } } const ft = new C, Ws = new le; class Dt { constructor(e, t, n = !1) { if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array."); this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = oa, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = Qt, this.version = 0 } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return Hi("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, t, n) { e *= this.itemSize, n *= t.itemSize; for (let i = 0, r = this.itemSize; i < r; i++)this.array[e + i] = t.array[n + i]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++)Ws.fromBufferAttribute(this, t), Ws.applyMatrix3(e), this.setXY(t, Ws.x, Ws.y); else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++)ft.fromBufferAttribute(this, t), ft.applyMatrix3(e), this.setXYZ(t, ft.x, ft.y, ft.z); return this } applyMatrix4(e) { for (let t = 0, n = this.count; t < n; t++)ft.fromBufferAttribute(this, t), ft.applyMatrix4(e), this.setXYZ(t, ft.x, ft.y, ft.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)ft.fromBufferAttribute(this, t), ft.applyNormalMatrix(e), this.setXYZ(t, ft.x, ft.y, ft.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)ft.fromBufferAttribute(this, t), ft.transformDirection(e), this.setXYZ(t, ft.x, ft.y, ft.z); return this } set(e, t = 0) { return this.array.set(e, t), this } getComponent(e, t) { let n = this.array[e * this.itemSize + t]; return this.normalized && (n = Jt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = $e(n, this.array)), this.array[e * this.itemSize + t] = n, this } getX(e) { let t = this.array[e * this.itemSize]; return this.normalized && (t = Jt(t, this.array)), t } setX(e, t) { return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize] = t, this } getY(e) { let t = this.array[e * this.itemSize + 1]; return this.normalized && (t = Jt(t, this.array)), t } setY(e, t) { return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 1] = t, this } getZ(e) { let t = this.array[e * this.itemSize + 2]; return this.normalized && (t = Jt(t, this.array)), t } setZ(e, t) { return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 2] = t, this } getW(e) { let t = this.array[e * this.itemSize + 3]; return this.normalized && (t = Jt(t, this.array)), t } setW(e, t) { return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this } setXYZW(e, t, n, i, r) { return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array), r = $e(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this } onUpload(e) { return this.onUploadCallback = e, this } clone() { return new this.constructor(this.array, this.itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized }; return this.name !== "" && (e.name = this.name), this.usage !== oa && (e.usage = this.usage), e } } class mh extends Dt { constructor(e, t, n) { super(new Uint16Array(e), t, n) } } class gh extends Dt { constructor(e, t, n) { super(new Uint32Array(e), t, n) } } class tn extends Dt { constructor(e, t, n) { super(new Float32Array(e), t, n) } } let Dd = 0; const Gt = new Ie, oo = new it, Ei = new C, kt = new In, hs = new In, _t = new C; class rn extends ui { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Dd++ }), this.uuid = en(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this.index = new (uh(e) ? gh : mh)(e, 1) : this.index = e, this } getAttribute(e) { return this.attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !== void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t, materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange.start = e, this.drawRange.count = t } applyMatrix4(e) { const t = this.attributes.position; t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes.normal; if (n !== void 0) { const r = new Oe().getNormalMatrix(e); n.applyNormalMatrix(r), n.needsUpdate = !0 } const i = this.attributes.tangent; return i !== void 0 && (i.transformDirection(e), i.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this } applyQuaternion(e) { return Gt.makeRotationFromQuaternion(e), this.applyMatrix4(Gt), this } rotateX(e) { return Gt.makeRotationX(e), this.applyMatrix4(Gt), this } rotateY(e) { return Gt.makeRotationY(e), this.applyMatrix4(Gt), this } rotateZ(e) { return Gt.makeRotationZ(e), this.applyMatrix4(Gt), this } translate(e, t, n) { return Gt.makeTranslation(e, t, n), this.applyMatrix4(Gt), this } scale(e, t, n) { return Gt.makeScale(e, t, n), this.applyMatrix4(Gt), this } lookAt(e) { return oo.lookAt(e), oo.updateMatrix(), this.applyMatrix4(oo.matrix), this } center() { return this.computeBoundingBox(), this.boundingBox.getCenter(Ei).negate(), this.translate(Ei.x, Ei.y, Ei.z), this } setFromPoints(e) { const t = []; for (let n = 0, i = e.length; n < i; n++) { const r = e[n]; t.push(r.x, r.y, r.z || 0) } return this.setAttribute("position", new tn(t, 3)), this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new In); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new C(-1 / 0, -1 / 0, -1 / 0), new C(1 / 0, 1 / 0, 1 / 0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) { const r = t[n]; kt.setFromBufferAttribute(r), this.morphTargetsRelative ? (_t.addVectors(this.boundingBox.min, kt.min), this.boundingBox.expandByPoint(_t), _t.addVectors(this.boundingBox.max, kt.max), this.boundingBox.expandByPoint(_t)) : (this.boundingBox.expandByPoint(kt.min), this.boundingBox.expandByPoint(kt.max)) } } else this.boundingBox.makeEmpty(); (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere = new pn); const e = this.attributes.position, t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new C, 1 / 0); return } if (e) { const n = this.boundingSphere.center; if (kt.setFromBufferAttribute(e), t) for (let r = 0, o = t.length; r < o; r++) { const a = t[r]; hs.setFromBufferAttribute(a), this.morphTargetsRelative ? (_t.addVectors(kt.min, hs.min), kt.expandByPoint(_t), _t.addVectors(kt.max, hs.max), kt.expandByPoint(_t)) : (kt.expandByPoint(hs.min), kt.expandByPoint(hs.max)) } kt.getCenter(n); let i = 0; for (let r = 0, o = e.count; r < o; r++)_t.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(_t)); if (t) for (let r = 0, o = t.length; r < o; r++) { const a = t[r], l = this.morphTargetsRelative; for (let c = 0, h = a.count; c < h; c++)_t.fromBufferAttribute(a, c), l && (Ei.fromBufferAttribute(e, c), _t.add(Ei)), i = Math.max(i, n.distanceToSquared(_t)) } this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this) } } computeTangents() { const e = this.index, t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) { console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"); return } const n = t.position, i = t.normal, r = t.uv; this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Dt(new Float32Array(4 * n.count), 4)); const o = this.getAttribute("tangent"), a = [], l = []; for (let F = 0; F < n.count; F++)a[F] = new C, l[F] = new C; const c = new C, h = new C, u = new C, d = new le, p = new le, g = new le, _ = new C, m = new C; function f(F, E, S) { c.fromBufferAttribute(n, F), h.fromBufferAttribute(n, E), u.fromBufferAttribute(n, S), d.fromBufferAttribute(r, F), p.fromBufferAttribute(r, E), g.fromBufferAttribute(r, S), h.sub(c), u.sub(c), p.sub(d), g.sub(d); const P = 1 / (p.x * g.y - g.x * p.y); isFinite(P) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -p.y).multiplyScalar(P), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(P), a[F].add(_), a[E].add(_), a[S].add(_), l[F].add(m), l[E].add(m), l[S].add(m)) } let y = this.groups; y.length === 0 && (y = [{ start: 0, count: e.count }]); for (let F = 0, E = y.length; F < E; ++F) { const S = y[F], P = S.start, G = S.count; for (let k = P, $ = P + G; k < $; k += 3)f(e.getX(k + 0), e.getX(k + 1), e.getX(k + 2)) } const v = new C, b = new C, I = new C, R = new C; function w(F) { I.fromBufferAttribute(i, F), R.copy(I); const E = a[F]; v.copy(E), v.sub(I.multiplyScalar(I.dot(E))).normalize(), b.crossVectors(R, E); const P = b.dot(l[F]) < 0 ? -1 : 1; o.setXYZW(F, v.x, v.y, v.z, P) } for (let F = 0, E = y.length; F < E; ++F) { const S = y[F], P = S.start, G = S.count; for (let k = P, $ = P + G; k < $; k += 3)w(e.getX(k + 0)), w(e.getX(k + 1)), w(e.getX(k + 2)) } } computeVertexNormals() { const e = this.index, t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute("normal"); if (n === void 0) n = new Dt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n); else for (let d = 0, p = n.count; d < p; d++)n.setXYZ(d, 0, 0, 0); const i = new C, r = new C, o = new C, a = new C, l = new C, c = new C, h = new C, u = new C; if (e) for (let d = 0, p = e.count; d < p; d += 3) { const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2); i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), o.fromBufferAttribute(t, m), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), a.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), a.add(h), l.add(h), c.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z) } else for (let d = 0, p = t.count; d < p; d += 3)i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z); this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { const e = this.attributes.normal; for (let t = 0, n = e.count; t < n; t++)_t.fromBufferAttribute(e, t), _t.normalize(), e.setXYZ(t, _t.x, _t.y, _t.z) } toNonIndexed() { function e(a, l) { const c = a.array, h = a.itemSize, u = a.normalized, d = new c.constructor(l.length * h); let p = 0, g = 0; for (let _ = 0, m = l.length; _ < m; _++) { a.isInterleavedBufferAttribute ? p = l[_] * a.data.stride + a.offset : p = l[_] * h; for (let f = 0; f < h; f++)d[g++] = c[p++] } return new Dt(d, h, u) } if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const t = new rn, n = this.index.array, i = this.attributes; for (const a in i) { const l = i[a], c = e(l, n); t.setAttribute(a, c) } const r = this.morphAttributes; for (const a in r) { const l = [], c = r[a]; for (let h = 0, u = c.length; h < u; h++) { const d = c[h], p = e(d, n); l.push(p) } t.morphAttributes[a] = l } t.morphTargetsRelative = this.morphTargetsRelative; const o = this.groups; for (let a = 0, l = o.length; a < l; a++) { const c = o[a]; t.addGroup(c.start, c.count, c.materialIndex) } return t } toJSON() { const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in l) l[c] !== void 0 && (e[c] = l[c]); return e } e.data = { attributes: {} }; const t = this.index; t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) }); const n = this.attributes; for (const l in n) { const c = n[l]; e.data.attributes[l] = c.toJSON(e.data) } const i = {}; let r = !1; for (const l in this.morphAttributes) { const c = this.morphAttributes[l], h = []; for (let u = 0, d = c.length; u < d; u++) { const p = c[u]; h.push(p.toJSON(e.data)) } h.length > 0 && (i[l] = h, r = !0) } r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative); const o = this.groups; o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o))); const a = this.boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), e } clone() { return new this.constructor().copy(this) } copy(e) { this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null; const t = {}; this.name = e.name; const n = e.index; n !== null && this.setIndex(n.clone(t)); const i = e.attributes; for (const c in i) { const h = i[c]; this.setAttribute(c, h.clone(t)) } const r = e.morphAttributes; for (const c in r) { const h = [], u = r[c]; for (let d = 0, p = u.length; d < p; d++)h.push(u[d].clone(t)); this.morphAttributes[c] = h } this.morphTargetsRelative = e.morphTargetsRelative; const o = e.groups; for (let c = 0, h = o.length; c < h; c++) { const u = o[c]; this.addGroup(u.start, u.count, u.materialIndex) } const a = e.boundingBox; a !== null && (this.boundingBox = a.clone()); const l = e.boundingSphere; return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this } dispose() { this.dispatchEvent({ type: "dispose" }) } } const Ml = new Ie, ti = new ts, Xs = new pn, Sl = new C, Ti = new C, wi = new C, Ai = new C, ao = new C, js = new C, Ys = new le, qs = new le, Ks = new le, bl = new C, El = new C, Tl = new C, $s = new C, Zs = new C; class Ut extends it { constructor(e = new rn, t = new Xn) { super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } getVertexPosition(e, t) { const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, o = n.morphTargetsRelative; t.fromBufferAttribute(i, e); const a = this.morphTargetInfluences; if (r && a) { js.set(0, 0, 0); for (let l = 0, c = r.length; l < c; l++) { const h = a[l], u = r[l]; h !== 0 && (ao.fromBufferAttribute(u, e), o ? js.addScaledVector(ao, h) : js.addScaledVector(ao.sub(t), h)) } t.add(js) } return t } raycast(e, t) { const n = this.geometry, i = this.material, r = this.matrixWorld; i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Xs.copy(n.boundingSphere), Xs.applyMatrix4(r), ti.copy(e.ray).recast(e.near), !(Xs.containsPoint(ti.origin) === !1 && (ti.intersectSphere(Xs, Sl) === null || ti.origin.distanceToSquared(Sl) > (e.far - e.near) ** 2)) && (Ml.copy(r).invert(), ti.copy(e.ray).applyMatrix4(Ml), !(n.boundingBox !== null && ti.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, ti))) } _computeIntersections(e, t, n) { let i; const r = this.geometry, o = this.material, a = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange; if (a !== null) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) { const m = d[g], f = o[m.materialIndex], y = Math.max(m.start, p.start), v = Math.min(a.count, Math.min(m.start + m.count, p.start + p.count)); for (let b = y, I = v; b < I; b += 3) { const R = a.getX(b), w = a.getX(b + 1), F = a.getX(b + 2); i = Js(this, f, e, n, c, h, u, R, w, F), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = m.materialIndex, t.push(i)) } } else { const g = Math.max(0, p.start), _ = Math.min(a.count, p.start + p.count); for (let m = g, f = _; m < f; m += 3) { const y = a.getX(m), v = a.getX(m + 1), b = a.getX(m + 2); i = Js(this, o, e, n, c, h, u, y, v, b), i && (i.faceIndex = Math.floor(m / 3), t.push(i)) } } else if (l !== void 0) if (Array.isArray(o)) for (let g = 0, _ = d.length; g < _; g++) { const m = d[g], f = o[m.materialIndex], y = Math.max(m.start, p.start), v = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count)); for (let b = y, I = v; b < I; b += 3) { const R = b, w = b + 1, F = b + 2; i = Js(this, f, e, n, c, h, u, R, w, F), i && (i.faceIndex = Math.floor(b / 3), i.face.materialIndex = m.materialIndex, t.push(i)) } } else { const g = Math.max(0, p.start), _ = Math.min(l.count, p.start + p.count); for (let m = g, f = _; m < f; m += 3) { const y = m, v = m + 1, b = m + 2; i = Js(this, o, e, n, c, h, u, y, v, b), i && (i.faceIndex = Math.floor(m / 3), t.push(i)) } } } } function Id(s, e, t, n, i, r, o, a) { let l; if (e.side === Ot ? l = n.intersectTriangle(o, r, i, !0, a) : l = n.intersectTriangle(i, r, o, e.side === Pn, a), l === null) return null; Zs.copy(a), Zs.applyMatrix4(s.matrixWorld); const c = t.ray.origin.distanceTo(Zs); return c < t.near || c > t.far ? null : { distance: c, point: Zs.clone(), object: s } } function Js(s, e, t, n, i, r, o, a, l, c) { s.getVertexPosition(a, Ti), s.getVertexPosition(l, wi), s.getVertexPosition(c, Ai); const h = Id(s, e, t, n, Ti, wi, Ai, $s); if (h) { i && (Ys.fromBufferAttribute(i, a), qs.fromBufferAttribute(i, l), Ks.fromBufferAttribute(i, c), h.uv = hn.getInterpolation($s, Ti, wi, Ai, Ys, qs, Ks, new le)), r && (Ys.fromBufferAttribute(r, a), qs.fromBufferAttribute(r, l), Ks.fromBufferAttribute(r, c), h.uv1 = hn.getInterpolation($s, Ti, wi, Ai, Ys, qs, Ks, new le)), o && (bl.fromBufferAttribute(o, a), El.fromBufferAttribute(o, l), Tl.fromBufferAttribute(o, c), h.normal = hn.getInterpolation($s, Ti, wi, Ai, bl, El, Tl, new C), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)); const u = { a, b: l, c, normal: new C, materialIndex: 0 }; hn.getNormal(Ti, wi, Ai, u.normal), h.face = u } return h } class Ds extends rn { constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) { super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: o }; const a = this; i = Math.floor(i), r = Math.floor(r), o = Math.floor(o); const l = [], c = [], h = [], u = []; let d = 0, p = 0; g("z", "y", "x", -1, -1, n, t, e, o, r, 0), g("z", "y", "x", 1, -1, n, t, -e, o, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, o, 2), g("x", "z", "y", 1, -1, e, n, -t, i, o, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new tn(c, 3)), this.setAttribute("normal", new tn(h, 3)), this.setAttribute("uv", new tn(u, 2)); function g(_, m, f, y, v, b, I, R, w, F, E) { const S = b / w, P = I / F, G = b / 2, k = I / 2, $ = R / 2, K = w + 1, W = F + 1; let J = 0, H = 0; const ce = new C; for (let fe = 0; fe < W; fe++) { const ve = fe * P - k; for (let He = 0; He < K; He++) { const Je = He * S - G; ce[_] = Je * y, ce[m] = ve * v, ce[f] = $, c.push(ce.x, ce.y, ce.z), ce[_] = 0, ce[m] = 0, ce[f] = R > 0 ? 1 : -1, h.push(ce.x, ce.y, ce.z), u.push(He / w), u.push(1 - fe / F), J += 1 } } for (let fe = 0; fe < F; fe++)for (let ve = 0; ve < w; ve++) { const He = d + ve + K * fe, Je = d + ve + K * (fe + 1), V = d + (ve + 1) + K * (fe + 1), ee = d + (ve + 1) + K * fe; l.push(He, Je, ee), l.push(Je, V, ee), H += 6 } a.addGroup(p, H, E), p += H, d += J } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Ds(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments) } } function $i(s) { const e = {}; for (const t in s) { e[t] = {}; for (const n in s[t]) { const i = s[t][n]; i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i } } return e } function Ct(s) { const e = {}; for (let t = 0; t < s.length; t++) { const n = $i(s[t]); for (const i in n) e[i] = n[i] } return e } function Nd(s) { const e = []; for (let t = 0; t < s.length; t++)e.push(s[t].clone()); return e } function _h(s) { const e = s.getRenderTarget(); return e === null ? s.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : We.workingColorSpace } const Ir = { clone: $i, merge: Ct }; var Ud = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Od = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`; class sn extends dn { constructor(e) { super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ud, this.fragmentShader = Od, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = { clipCullDistance: !1, multiDraw: !1 }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = $i(e.uniforms), this.uniformsGroups = Nd(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this } toJSON(e) { const t = super.toJSON(e); t.glslVersion = this.glslVersion, t.uniforms = {}; for (const i in this.uniforms) { const o = this.uniforms[i].value; o && o.isTexture ? t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ? t.uniforms[i] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[i] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[i] = { type: "v3", value: o.toArray() } : o && o.isVector4 ? t.uniforms[i] = { type: "v4", value: o.toArray() } : o && o.isMatrix3 ? t.uniforms[i] = { type: "m3", value: o.toArray() } : o && o.isMatrix4 ? t.uniforms[i] = { type: "m4", value: o.toArray() } : t.uniforms[i] = { value: o } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping; const n = {}; for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0); return Object.keys(n).length > 0 && (t.extensions = n), t } } let vh = class extends it { constructor() { super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ie, this.projectionMatrix = new Ie, this.projectionMatrixInverse = new Ie, this.coordinateSystem = Rn } copy(e, t) { return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super.getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert() } clone() { return new this.constructor().copy(this) } }; const kn = new C, wl = new le, Al = new le; class Lt extends vh { constructor(e = 50, t = 1, n = .1, i = 2e3) { super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this } setFocalLength(e) { const t = .5 * this.getFilmHeight() / e; this.fov = Ki * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { const e = Math.tan(Ss * .5 * this.fov); return .5 * this.getFilmHeight() / e } getEffectiveFOV() { return Ki * 2 * Math.atan(Math.tan(Ss * .5 * this.fov) / this.zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect, 1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } getViewBounds(e, t, n) { kn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(kn.x, kn.y).multiplyScalar(-e / kn.z), kn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(kn.x, kn.y).multiplyScalar(-e / kn.z) } getViewSize(e, t) { return this.getViewBounds(e, wl, Al), t.subVectors(Al, wl) } setViewOffset(e, t, n, i, r, o) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let t = e * Math.tan(Ss * .5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -.5 * i; const o = this.view; if (this.view !== null && this.view.enabled) { const l = o.fullWidth, c = o.fullHeight; r += o.offsetX * i / l, t -= o.offsetY * n / c, i *= o.width / l, n *= o.height / c } const a = this.filmOffset; a !== 0 && (r += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t } } const Ri = -90, Ci = 1; class Fd extends it { constructor(e, t, n) { super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const i = new Lt(Ri, Ci, e, t); i.layers = this.layers, this.add(i); const r = new Lt(Ri, Ci, e, t); r.layers = this.layers, this.add(r); const o = new Lt(Ri, Ci, e, t); o.layers = this.layers, this.add(o); const a = new Lt(Ri, Ci, e, t); a.layers = this.layers, this.add(a); const l = new Lt(Ri, Ci, e, t); l.layers = this.layers, this.add(l); const c = new Lt(Ri, Ci, e, t); c.layers = this.layers, this.add(c) } updateCoordinateSystem() { const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, o, a, l] = t; for (const c of t) this.remove(c); if (e === Rn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1); else if (e === Tr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1); else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (const c of t) this.add(c), c.updateMatrixWorld() } update(e, t) { this.parent === null && this.updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: i } = this; this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem()); const [r, o, a, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled; e.xr.enabled = !1; const _ = n.texture.generateMipmaps; n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, o), e.setRenderTarget(n, 2, i), e.render(t, a), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = !0 } } class xh extends vt { constructor(e, t, n, i, r, o, a, l, c, h) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : Wi, super(e, t, n, i, r, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !1 } get images() { return this.image } set images(e) { this.image = e } } class Bd extends Dn {
	constructor(e = 1, t = {}) { super(e, e, t), this.isWebGLCubeRenderTarget = !0; const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n]; this.texture = new xh(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ht } fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const n = {
			uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`}, i = new Ds(5, 5, 5), r = new sn({ name: "CubemapFromEquirect", uniforms: $i(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Ot, blending: Cn }); r.uniforms.tEquirect.value = t; const o = new Ut(i, r), a = t.minFilter; return t.minFilter === An && (t.minFilter = Ht), new Fd(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this
	} clear(e, t, n, i) { const r = e.getRenderTarget(); for (let o = 0; o < 6; o++)e.setRenderTarget(this, o), e.clear(t, n, i); e.setRenderTarget(r) }
} const lo = new C, zd = new C, kd = new Oe; class Vn { constructor(e = new C(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this.constant = t } set(e, t) { return this.normal.copy(e), this.constant = t, this } setComponents(e, t, n, i) { return this.normal.set(e, t, n), this.constant = i, this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t.dot(this.normal), this } setFromCoplanarPoints(e, t, n) { const i = lo.subVectors(n, t).cross(zd.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(i, e), this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant, this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e), this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(), this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, t) { const n = e.delta(lo), i = this.normal.dot(n); if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null; const r = -(e.start.dot(this.normal) + this.constant) / i; return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r) } intersectsLine(e) { const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this.constant) } applyMatrix4(e, t) { const n = t || kd.getNormalMatrix(e), i = this.coplanarPoint(lo).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize(); return this.constant = -i.dot(r), this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e.normal.equals(this.normal) && e.constant === this.constant } clone() { return new this.constructor().copy(this) } } const ni = new pn, Qs = new C; class La { constructor(e = new Vn, t = new Vn, n = new Vn, i = new Vn, r = new Vn, o = new Vn) { this.planes = [e, t, n, i, r, o] } set(e, t, n, i, r, o) { const a = this.planes; return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(o), this } copy(e) { const t = this.planes; for (let n = 0; n < 6; n++)t[n].copy(e.planes[n]); return this } setFromProjectionMatrix(e, t = Rn) { const n = this.planes, i = e.elements, r = i[0], o = i[1], a = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], p = i[8], g = i[9], _ = i[10], m = i[11], f = i[12], y = i[13], v = i[14], b = i[15]; if (n[0].setComponents(l - r, d - c, m - p, b - f).normalize(), n[1].setComponents(l + r, d + c, m + p, b + f).normalize(), n[2].setComponents(l + o, d + h, m + g, b + y).normalize(), n[3].setComponents(l - o, d - h, m - g, b - y).normalize(), n[4].setComponents(l - a, d - u, m - _, b - v).normalize(), t === Rn) n[5].setComponents(l + a, d + u, m + _, b + v).normalize(); else if (t === Tr) n[5].setComponents(a, u, _, v).normalize(); else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld); else { const t = e.geometry; t.boundingSphere === null && t.computeBoundingSphere(), ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld) } return this.intersectsSphere(ni) } intersectsSprite(e) { return ni.center.set(0, 0, 0), ni.radius = .7071067811865476, ni.applyMatrix4(e.matrixWorld), this.intersectsSphere(ni) } intersectsSphere(e) { const t = this.planes, n = e.center, i = -e.radius; for (let r = 0; r < 6; r++)if (t[r].distanceToPoint(n) < i) return !1; return !0 } intersectsBox(e) { const t = this.planes; for (let n = 0; n < 6; n++) { const i = t[n]; if (Qs.x = i.normal.x > 0 ? e.max.x : e.min.x, Qs.y = i.normal.y > 0 ? e.max.y : e.min.y, Qs.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Qs) < 0) return !1 } return !0 } containsPoint(e) { const t = this.planes; for (let n = 0; n < 6; n++)if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this.constructor().copy(this) } } function yh() { let s = null, e = !1, t = null, n = null; function i(r, o) { t(r, o), n = s.requestAnimationFrame(i) } return { start: function () { e !== !0 && t !== null && (n = s.requestAnimationFrame(i), e = !0) }, stop: function () { s.cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (r) { t = r }, setContext: function (r) { s = r } } } function Hd(s) { const e = new WeakMap; function t(a, l) { const c = a.array, h = a.usage, u = c.byteLength, d = s.createBuffer(); s.bindBuffer(l, d), s.bufferData(l, c, h), a.onUploadCallback(); let p; if (c instanceof Float32Array) p = s.FLOAT; else if (c instanceof Uint16Array) a.isFloat16BufferAttribute ? p = s.HALF_FLOAT : p = s.UNSIGNED_SHORT; else if (c instanceof Int16Array) p = s.SHORT; else if (c instanceof Uint32Array) p = s.UNSIGNED_INT; else if (c instanceof Int32Array) p = s.INT; else if (c instanceof Int8Array) p = s.BYTE; else if (c instanceof Uint8Array) p = s.UNSIGNED_BYTE; else if (c instanceof Uint8ClampedArray) p = s.UNSIGNED_BYTE; else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c); return { buffer: d, type: p, bytesPerElement: c.BYTES_PER_ELEMENT, version: a.version, size: u } } function n(a, l, c) { const h = l.array, u = l._updateRange, d = l.updateRanges; if (s.bindBuffer(c, a), u.count === -1 && d.length === 0 && s.bufferSubData(c, 0, h), d.length !== 0) { for (let p = 0, g = d.length; p < g; p++) { const _ = d[p]; s.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count) } l.clearUpdateRanges() } u.count !== -1 && (s.bufferSubData(c, u.offset * h.BYTES_PER_ELEMENT, h, u.offset, u.count), u.count = -1), l.onUploadCallback() } function i(a) { return a.isInterleavedBufferAttribute && (a = a.data), e.get(a) } function r(a) { a.isInterleavedBufferAttribute && (a = a.data); const l = e.get(a); l && (s.deleteBuffer(l.buffer), e.delete(a)) } function o(a, l) { if (a.isInterleavedBufferAttribute && (a = a.data), a.isGLBufferAttribute) { const h = e.get(a); (!h || h.version < a.version) && e.set(a, { buffer: a.buffer, type: a.type, bytesPerElement: a.elementSize, version: a.version }); return } const c = e.get(a); if (c === void 0) e.set(a, t(a, l)); else if (c.version < a.version) { if (c.size !== a.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."); n(c.buffer, a, l), c.version = a.version } } return { get: i, remove: r, update: o } } class Nr extends rn { constructor(e = 1, t = 1, n = 1, i = 1) { super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i }; const r = e / 2, o = t / 2, a = Math.floor(n), l = Math.floor(i), c = a + 1, h = l + 1, u = e / a, d = t / l, p = [], g = [], _ = [], m = []; for (let f = 0; f < h; f++) { const y = f * d - o; for (let v = 0; v < c; v++) { const b = v * u - r; g.push(b, -y, 0), _.push(0, 0, 1), m.push(v / a), m.push(1 - f / l) } } for (let f = 0; f < l; f++)for (let y = 0; y < a; y++) { const v = y + c * f, b = y + c * (f + 1), I = y + 1 + c * (f + 1), R = y + 1 + c * f; p.push(v, b, R), p.push(b, I, R) } this.setIndex(p), this.setAttribute("position", new tn(g, 3)), this.setAttribute("normal", new tn(_, 3)), this.setAttribute("uv", new tn(m, 2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters), this } static fromJSON(e) { return new Nr(e.width, e.height, e.widthSegments, e.heightSegments) } } var Vd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Gd = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Wd = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Xd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, jd = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Yd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, qd = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Kd = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, $d = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Zd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Jd = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Qd = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, ef = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, tf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, nf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, sf = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, rf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, of = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, af = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, lf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, cf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, hf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, uf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, df = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, ff = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, pf = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, mf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, gf = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, _f = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, vf = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, xf = "gl_FragColor = linearToOutputTexel( gl_FragColor );", yf = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Mf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Sf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, bf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Ef = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Tf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, wf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Af = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Rf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Cf = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, Pf = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Lf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Df = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, If = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Nf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, Uf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, Of = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Ff = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Bf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, zf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, kf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, Hf = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, Vf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, Gf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Wf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Xf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, jf = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Yf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, qf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Kf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, $f = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Zf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Jf = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Qf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, ep = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, tp = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, np = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ip = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, sp = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, rp = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, op = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, ap = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, lp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, cp = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, hp = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, up = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, dp = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, fp = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, pp = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, mp = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, gp = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, _p = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, vp = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, xp = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, yp = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Mp = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Sp = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, bp = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Ep = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Tp = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, wp = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, Ap = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Rp = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Cp = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, Pp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Lp = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, Dp = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Ip = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Np = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Up = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, Op = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, Fp = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, Bp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, zp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, kp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, Hp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`; const Vp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Gp = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Wp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Xp = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, jp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Yp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, qp = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Kp = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, $p = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, Zp = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Jp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Qp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, em = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, tm = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, nm = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, im = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, sm = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, rm = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, om = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, am = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, lm = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, cm = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, hm = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, um = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, dm = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, fm = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, pm = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, mm = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, gm = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, _m = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, vm = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, xm = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, ym = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Mm = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ne = { alphahash_fragment: Vd, alphahash_pars_fragment: Gd, alphamap_fragment: Wd, alphamap_pars_fragment: Xd, alphatest_fragment: jd, alphatest_pars_fragment: Yd, aomap_fragment: qd, aomap_pars_fragment: Kd, batching_pars_vertex: $d, batching_vertex: Zd, begin_vertex: Jd, beginnormal_vertex: Qd, bsdfs: ef, iridescence_fragment: tf, bumpmap_pars_fragment: nf, clipping_planes_fragment: sf, clipping_planes_pars_fragment: rf, clipping_planes_pars_vertex: of, clipping_planes_vertex: af, color_fragment: lf, color_pars_fragment: cf, color_pars_vertex: hf, color_vertex: uf, common: df, cube_uv_reflection_fragment: ff, defaultnormal_vertex: pf, displacementmap_pars_vertex: mf, displacementmap_vertex: gf, emissivemap_fragment: _f, emissivemap_pars_fragment: vf, colorspace_fragment: xf, colorspace_pars_fragment: yf, envmap_fragment: Mf, envmap_common_pars_fragment: Sf, envmap_pars_fragment: bf, envmap_pars_vertex: Ef, envmap_physical_pars_fragment: Uf, envmap_vertex: Tf, fog_vertex: wf, fog_pars_vertex: Af, fog_fragment: Rf, fog_pars_fragment: Cf, gradientmap_pars_fragment: Pf, lightmap_pars_fragment: Lf, lights_lambert_fragment: Df, lights_lambert_pars_fragment: If, lights_pars_begin: Nf, lights_toon_fragment: Of, lights_toon_pars_fragment: Ff, lights_phong_fragment: Bf, lights_phong_pars_fragment: zf, lights_physical_fragment: kf, lights_physical_pars_fragment: Hf, lights_fragment_begin: Vf, lights_fragment_maps: Gf, lights_fragment_end: Wf, logdepthbuf_fragment: Xf, logdepthbuf_pars_fragment: jf, logdepthbuf_pars_vertex: Yf, logdepthbuf_vertex: qf, map_fragment: Kf, map_pars_fragment: $f, map_particle_fragment: Zf, map_particle_pars_fragment: Jf, metalnessmap_fragment: Qf, metalnessmap_pars_fragment: ep, morphinstance_vertex: tp, morphcolor_vertex: np, morphnormal_vertex: ip, morphtarget_pars_vertex: sp, morphtarget_vertex: rp, normal_fragment_begin: op, normal_fragment_maps: ap, normal_pars_fragment: lp, normal_pars_vertex: cp, normal_vertex: hp, normalmap_pars_fragment: up, clearcoat_normal_fragment_begin: dp, clearcoat_normal_fragment_maps: fp, clearcoat_pars_fragment: pp, iridescence_pars_fragment: mp, opaque_fragment: gp, packing: _p, premultiplied_alpha_fragment: vp, project_vertex: xp, dithering_fragment: yp, dithering_pars_fragment: Mp, roughnessmap_fragment: Sp, roughnessmap_pars_fragment: bp, shadowmap_pars_fragment: Ep, shadowmap_pars_vertex: Tp, shadowmap_vertex: wp, shadowmask_pars_fragment: Ap, skinbase_vertex: Rp, skinning_pars_vertex: Cp, skinning_vertex: Pp, skinnormal_vertex: Lp, specularmap_fragment: Dp, specularmap_pars_fragment: Ip, tonemapping_fragment: Np, tonemapping_pars_fragment: Up, transmission_fragment: Op, transmission_pars_fragment: Fp, uv_pars_fragment: Bp, uv_pars_vertex: zp, uv_vertex: kp, worldpos_vertex: Hp, background_vert: Vp, background_frag: Gp, backgroundCube_vert: Wp, backgroundCube_frag: Xp, cube_vert: jp, cube_frag: Yp, depth_vert: qp, depth_frag: Kp, distanceRGBA_vert: $p, distanceRGBA_frag: Zp, equirect_vert: Jp, equirect_frag: Qp, linedashed_vert: em, linedashed_frag: tm, meshbasic_vert: nm, meshbasic_frag: im, meshlambert_vert: sm, meshlambert_frag: rm, meshmatcap_vert: om, meshmatcap_frag: am, meshnormal_vert: lm, meshnormal_frag: cm, meshphong_vert: hm, meshphong_frag: um, meshphysical_vert: dm, meshphysical_frag: fm, meshtoon_vert: pm, meshtoon_frag: mm, points_vert: gm, points_frag: _m, shadow_vert: vm, shadow_frag: xm, sprite_vert: ym, sprite_frag: Mm }, re = { common: { diffuse: { value: new Se(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Oe }, alphaMap: { value: null }, alphaMapTransform: { value: new Oe }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Oe } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Oe }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Oe } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Oe } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Oe }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Oe }, normalScale: { value: new le(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Oe }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Oe } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Oe } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Oe } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Se(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Se(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Oe }, alphaTest: { value: 0 }, uvTransform: { value: new Oe } }, sprite: { diffuse: { value: new Se(16777215) }, opacity: { value: 1 }, center: { value: new le(.5, .5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Oe }, alphaMap: { value: null }, alphaMapTransform: { value: new Oe }, alphaTest: { value: 0 } } }, Zt = { basic: { uniforms: Ct([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.fog]), vertexShader: Ne.meshbasic_vert, fragmentShader: Ne.meshbasic_frag }, lambert: { uniforms: Ct([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new Se(0) } }]), vertexShader: Ne.meshlambert_vert, fragmentShader: Ne.meshlambert_frag }, phong: { uniforms: Ct([re.common, re.specularmap, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.fog, re.lights, { emissive: { value: new Se(0) }, specular: { value: new Se(1118481) }, shininess: { value: 30 } }]), vertexShader: Ne.meshphong_vert, fragmentShader: Ne.meshphong_frag }, standard: { uniforms: Ct([re.common, re.envmap, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.roughnessmap, re.metalnessmap, re.fog, re.lights, { emissive: { value: new Se(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag }, toon: { uniforms: Ct([re.common, re.aomap, re.lightmap, re.emissivemap, re.bumpmap, re.normalmap, re.displacementmap, re.gradientmap, re.fog, re.lights, { emissive: { value: new Se(0) } }]), vertexShader: Ne.meshtoon_vert, fragmentShader: Ne.meshtoon_frag }, matcap: { uniforms: Ct([re.common, re.bumpmap, re.normalmap, re.displacementmap, re.fog, { matcap: { value: null } }]), vertexShader: Ne.meshmatcap_vert, fragmentShader: Ne.meshmatcap_frag }, points: { uniforms: Ct([re.points, re.fog]), vertexShader: Ne.points_vert, fragmentShader: Ne.points_frag }, dashed: { uniforms: Ct([re.common, re.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ne.linedashed_vert, fragmentShader: Ne.linedashed_frag }, depth: { uniforms: Ct([re.common, re.displacementmap]), vertexShader: Ne.depth_vert, fragmentShader: Ne.depth_frag }, normal: { uniforms: Ct([re.common, re.bumpmap, re.normalmap, re.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ne.meshnormal_vert, fragmentShader: Ne.meshnormal_frag }, sprite: { uniforms: Ct([re.sprite, re.fog]), vertexShader: Ne.sprite_vert, fragmentShader: Ne.sprite_frag }, background: { uniforms: { uvTransform: { value: new Oe }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ne.background_vert, fragmentShader: Ne.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Oe } }, vertexShader: Ne.backgroundCube_vert, fragmentShader: Ne.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ne.cube_vert, fragmentShader: Ne.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ne.equirect_vert, fragmentShader: Ne.equirect_frag }, distanceRGBA: { uniforms: Ct([re.common, re.displacementmap, { referencePosition: { value: new C }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ne.distanceRGBA_vert, fragmentShader: Ne.distanceRGBA_frag }, shadow: { uniforms: Ct([re.lights, re.fog, { color: { value: new Se(0) }, opacity: { value: 1 } }]), vertexShader: Ne.shadow_vert, fragmentShader: Ne.shadow_frag } }; Zt.physical = { uniforms: Ct([Zt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Oe }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Oe }, clearcoatNormalScale: { value: new le(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Oe }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Oe }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Oe }, sheen: { value: 0 }, sheenColor: { value: new Se(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Oe }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Oe }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Oe }, transmissionSamplerSize: { value: new le }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Oe }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Se(0) }, specularColor: { value: new Se(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Oe }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Oe }, anisotropyVector: { value: new le }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Oe } }]), vertexShader: Ne.meshphysical_vert, fragmentShader: Ne.meshphysical_frag }; const er = { r: 0, b: 0, g: 0 }, ii = new fn, Sm = new Ie; function bm(s, e, t, n, i, r, o) { const a = new Se(0); let l = r === !0 ? 0 : 1, c, h, u = null, d = 0, p = null; function g(y) { let v = y.isScene === !0 ? y.background : null; return v && v.isTexture && (v = (y.backgroundBlurriness > 0 ? t : e).get(v)), v } function _(y) { let v = !1; const b = g(y); b === null ? f(a, l) : b && b.isColor && (f(b, 1), v = !0); const I = s.xr.getEnvironmentBlendMode(); I === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : I === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o), (s.autoClear || v) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil)) } function m(y, v) { const b = g(v); b && (b.isCubeTexture || b.mapping === Lr) ? (h === void 0 && (h = new Ut(new Ds(1, 1, 1), new sn({ name: "BackgroundCubeMaterial", uniforms: $i(Zt.backgroundCube.uniforms), vertexShader: Zt.backgroundCube.vertexShader, fragmentShader: Zt.backgroundCube.fragmentShader, side: Ot, depthTest: !1, depthWrite: !1, fog: !1 })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function (I, R, w) { this.matrixWorld.copyPosition(w.matrixWorld) }, Object.defineProperty(h.material, "envMap", { get: function () { return this.uniforms.envMap.value } }), i.update(h)), ii.copy(v.backgroundRotation), ii.x *= -1, ii.y *= -1, ii.z *= -1, b.isCubeTexture && b.isRenderTargetTexture === !1 && (ii.y *= -1, ii.z *= -1), h.material.uniforms.envMap.value = b, h.material.uniforms.flipEnvMap.value = b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = v.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sm.makeRotationFromEuler(ii)), h.material.toneMapped = We.getTransfer(b.colorSpace) !== st, (u !== b || d !== b.version || p !== s.toneMapping) && (h.material.needsUpdate = !0, u = b, d = b.version, p = s.toneMapping), h.layers.enableAll(), y.unshift(h, h.geometry, h.material, 0, 0, null)) : b && b.isTexture && (c === void 0 && (c = new Ut(new Nr(2, 2), new sn({ name: "BackgroundMaterial", uniforms: $i(Zt.background.uniforms), vertexShader: Zt.background.vertexShader, fragmentShader: Zt.background.fragmentShader, side: Pn, depthTest: !1, depthWrite: !1, fog: !1 })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function () { return this.uniforms.t2D.value } }), i.update(c)), c.material.uniforms.t2D.value = b, c.material.uniforms.backgroundIntensity.value = v.backgroundIntensity, c.material.toneMapped = We.getTransfer(b.colorSpace) !== st, b.matrixAutoUpdate === !0 && b.updateMatrix(), c.material.uniforms.uvTransform.value.copy(b.matrix), (u !== b || d !== b.version || p !== s.toneMapping) && (c.material.needsUpdate = !0, u = b, d = b.version, p = s.toneMapping), c.layers.enableAll(), y.unshift(c, c.geometry, c.material, 0, 0, null)) } function f(y, v) { y.getRGB(er, _h(s)), n.buffers.color.setClear(er.r, er.g, er.b, v, o) } return { getClearColor: function () { return a }, setClearColor: function (y, v = 1) { a.set(y), l = v, f(a, l) }, getClearAlpha: function () { return l }, setClearAlpha: function (y) { l = y, f(a, l) }, render: _, addToRenderList: m } } function Em(s, e) { const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null); let r = i, o = !1; function a(S, P, G, k, $) { let K = !1; const W = u(k, G, P); r !== W && (r = W, c(r.object)), K = p(S, k, G, $), K && g(S, k, G, $), $ !== null && e.update($, s.ELEMENT_ARRAY_BUFFER), (K || o) && (o = !1, b(S, P, G, k), $ !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get($).buffer)) } function l() { return s.createVertexArray() } function c(S) { return s.bindVertexArray(S) } function h(S) { return s.deleteVertexArray(S) } function u(S, P, G) { const k = G.wireframe === !0; let $ = n[S.id]; $ === void 0 && ($ = {}, n[S.id] = $); let K = $[P.id]; K === void 0 && (K = {}, $[P.id] = K); let W = K[k]; return W === void 0 && (W = d(l()), K[k] = W), W } function d(S) { const P = [], G = [], k = []; for (let $ = 0; $ < t; $++)P[$] = 0, G[$] = 0, k[$] = 0; return { geometry: null, program: null, wireframe: !1, newAttributes: P, enabledAttributes: G, attributeDivisors: k, object: S, attributes: {}, index: null } } function p(S, P, G, k) { const $ = r.attributes, K = P.attributes; let W = 0; const J = G.getAttributes(); for (const H in J) if (J[H].location >= 0) { const fe = $[H]; let ve = K[H]; if (ve === void 0 && (H === "instanceMatrix" && S.instanceMatrix && (ve = S.instanceMatrix), H === "instanceColor" && S.instanceColor && (ve = S.instanceColor)), fe === void 0 || fe.attribute !== ve || ve && fe.data !== ve.data) return !0; W++ } return r.attributesNum !== W || r.index !== k } function g(S, P, G, k) { const $ = {}, K = P.attributes; let W = 0; const J = G.getAttributes(); for (const H in J) if (J[H].location >= 0) { let fe = K[H]; fe === void 0 && (H === "instanceMatrix" && S.instanceMatrix && (fe = S.instanceMatrix), H === "instanceColor" && S.instanceColor && (fe = S.instanceColor)); const ve = {}; ve.attribute = fe, fe && fe.data && (ve.data = fe.data), $[H] = ve, W++ } r.attributes = $, r.attributesNum = W, r.index = k } function _() { const S = r.newAttributes; for (let P = 0, G = S.length; P < G; P++)S[P] = 0 } function m(S) { f(S, 0) } function f(S, P) { const G = r.newAttributes, k = r.enabledAttributes, $ = r.attributeDivisors; G[S] = 1, k[S] === 0 && (s.enableVertexAttribArray(S), k[S] = 1), $[S] !== P && (s.vertexAttribDivisor(S, P), $[S] = P) } function y() { const S = r.newAttributes, P = r.enabledAttributes; for (let G = 0, k = P.length; G < k; G++)P[G] !== S[G] && (s.disableVertexAttribArray(G), P[G] = 0) } function v(S, P, G, k, $, K, W) { W === !0 ? s.vertexAttribIPointer(S, P, G, $, K) : s.vertexAttribPointer(S, P, G, k, $, K) } function b(S, P, G, k) { _(); const $ = k.attributes, K = G.getAttributes(), W = P.defaultAttributeValues; for (const J in K) { const H = K[J]; if (H.location >= 0) { let ce = $[J]; if (ce === void 0 && (J === "instanceMatrix" && S.instanceMatrix && (ce = S.instanceMatrix), J === "instanceColor" && S.instanceColor && (ce = S.instanceColor)), ce !== void 0) { const fe = ce.normalized, ve = ce.itemSize, He = e.get(ce); if (He === void 0) continue; const Je = He.buffer, V = He.type, ee = He.bytesPerElement, _e = V === s.INT || V === s.UNSIGNED_INT || ce.gpuType === Ma; if (ce.isInterleavedBufferAttribute) { const ue = ce.data, we = ue.stride, Le = ce.offset; if (ue.isInstancedInterleavedBuffer) { for (let ke = 0; ke < H.locationSize; ke++)f(H.location + ke, ue.meshPerAttribute); S.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = ue.meshPerAttribute * ue.count) } else for (let ke = 0; ke < H.locationSize; ke++)m(H.location + ke); s.bindBuffer(s.ARRAY_BUFFER, Je); for (let ke = 0; ke < H.locationSize; ke++)v(H.location + ke, ve / H.locationSize, V, fe, we * ee, (Le + ve / H.locationSize * ke) * ee, _e) } else { if (ce.isInstancedBufferAttribute) { for (let ue = 0; ue < H.locationSize; ue++)f(H.location + ue, ce.meshPerAttribute); S.isInstancedMesh !== !0 && k._maxInstanceCount === void 0 && (k._maxInstanceCount = ce.meshPerAttribute * ce.count) } else for (let ue = 0; ue < H.locationSize; ue++)m(H.location + ue); s.bindBuffer(s.ARRAY_BUFFER, Je); for (let ue = 0; ue < H.locationSize; ue++)v(H.location + ue, ve / H.locationSize, V, fe, ve * ee, ve / H.locationSize * ue * ee, _e) } } else if (W !== void 0) { const fe = W[J]; if (fe !== void 0) switch (fe.length) { case 2: s.vertexAttrib2fv(H.location, fe); break; case 3: s.vertexAttrib3fv(H.location, fe); break; case 4: s.vertexAttrib4fv(H.location, fe); break; default: s.vertexAttrib1fv(H.location, fe) } } } } y() } function I() { F(); for (const S in n) { const P = n[S]; for (const G in P) { const k = P[G]; for (const $ in k) h(k[$].object), delete k[$]; delete P[G] } delete n[S] } } function R(S) { if (n[S.id] === void 0) return; const P = n[S.id]; for (const G in P) { const k = P[G]; for (const $ in k) h(k[$].object), delete k[$]; delete P[G] } delete n[S.id] } function w(S) { for (const P in n) { const G = n[P]; if (G[S.id] === void 0) continue; const k = G[S.id]; for (const $ in k) h(k[$].object), delete k[$]; delete G[S.id] } } function F() { E(), o = !0, r !== i && (r = i, c(r.object)) } function E() { i.geometry = null, i.program = null, i.wireframe = !1 } return { setup: a, reset: F, resetDefaultState: E, dispose: I, releaseStatesOfGeometry: R, releaseStatesOfProgram: w, initAttributes: _, enableAttribute: m, disableUnusedAttributes: y } } function Tm(s, e, t) { let n; function i(c) { n = c } function r(c, h) { s.drawArrays(n, c, h), t.update(h, n, 1) } function o(c, h, u) { u !== 0 && (s.drawArraysInstanced(n, c, h, u), t.update(h, n, u)) } function a(c, h, u) { if (u === 0) return; e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u); let p = 0; for (let g = 0; g < u; g++)p += h[g]; t.update(p, n, 1) } function l(c, h, u, d) { if (u === 0) return; const p = e.get("WEBGL_multi_draw"); if (p === null) for (let g = 0; g < c.length; g++)o(c[g], h[g], d[g]); else { p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u); let g = 0; for (let _ = 0; _ < u; _++)g += h[_]; for (let _ = 0; _ < d.length; _++)t.update(g, n, d[_]) } } this.setMode = i, this.render = r, this.renderInstances = o, this.renderMultiDraw = a, this.renderMultiDrawInstances = l } function wm(s, e, t, n) { let i; function r() { if (i !== void 0) return i; if (e.has("EXT_texture_filter_anisotropic") === !0) { const R = e.get("EXT_texture_filter_anisotropic"); i = s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else i = 0; return i } function o(R) { return !(R !== jt && n.convert(R) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)) } function a(R) { const w = R === es && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float")); return !(R !== Ln && n.convert(R) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && R !== Qt && !w) } function l(R) { if (R === "highp") { if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp"; R = "mediump" } return R === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } let c = t.precision !== void 0 ? t.precision : "highp"; const h = l(c); h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h); const u = t.logarithmicDepthBuffer === !0, d = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), p = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_TEXTURE_SIZE), _ = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), m = s.getParameter(s.MAX_VERTEX_ATTRIBS), f = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), y = s.getParameter(s.MAX_VARYING_VECTORS), v = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), b = p > 0, I = s.getParameter(s.MAX_SAMPLES); return { isWebGL2: !0, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: o, textureTypeReadable: a, precision: c, logarithmicDepthBuffer: u, maxTextures: d, maxVertexTextures: p, maxTextureSize: g, maxCubemapSize: _, maxAttributes: m, maxVertexUniforms: f, maxVaryings: y, maxFragmentUniforms: v, vertexTextures: b, maxSamples: I } } function Am(s) { const e = this; let t = null, n = 0, i = !1, r = !1; const o = new Vn, a = new Oe, l = { value: null, needsUpdate: !1 }; this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (u, d) { const p = u.length !== 0 || d || n !== 0 || i; return i = d, n = u.length, p }, this.beginShadows = function () { r = !0, h(null) }, this.endShadows = function () { r = !1 }, this.setGlobalState = function (u, d) { t = h(u, d, 0) }, this.setState = function (u, d, p) { const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, f = s.get(u); if (!i || g === null || g.length === 0 || r && !m) r ? h(null) : c(); else { const y = r ? 0 : n, v = y * 4; let b = f.clippingState || null; l.value = b, b = h(g, d, v, p); for (let I = 0; I !== v; ++I)b[I] = t[I]; f.clippingState = b, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += y } }; function c() { l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0 } function h(u, d, p, g) { const _ = u !== null ? u.length : 0; let m = null; if (_ !== 0) { if (m = l.value, g !== !0 || m === null) { const f = p + _ * 4, y = d.matrixWorldInverse; a.getNormalMatrix(y), (m === null || m.length < f) && (m = new Float32Array(f)); for (let v = 0, b = p; v !== _; ++v, b += 4)o.copy(u[v]).applyMatrix4(y, a), o.normal.toArray(m, b), m[b + 3] = o.constant } l.value = m, l.needsUpdate = !0 } return e.numPlanes = _, e.numIntersection = 0, m } } function Rm(s) { let e = new WeakMap; function t(o, a) { return a === Lo ? o.mapping = Wi : a === Do && (o.mapping = Xi), o } function n(o) { if (o && o.isTexture) { const a = o.mapping; if (a === Lo || a === Do) if (e.has(o)) { const l = e.get(o).texture; return t(l, o.mapping) } else { const l = o.image; if (l && l.height > 0) { const c = new Bd(l.height); return c.fromEquirectangularTexture(s, o), e.set(o, c), o.addEventListener("dispose", i), t(c.texture, o.mapping) } else return null } } return o } function i(o) { const a = o.target; a.removeEventListener("dispose", i); const l = e.get(a); l !== void 0 && (e.delete(a), l.dispose()) } function r() { e = new WeakMap } return { get: n, dispose: r } } class Ur extends vh { constructor(e = -1, t = 1, n = 1, i = -1, r = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = o, this.updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this } setViewOffset(e, t, n, i, r, o) { this.view === null && (this.view = { enabled: !0, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = o, this.updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2; let r = n - e, o = n + e, a = i + t, l = i - t; if (this.view !== null && this.view.enabled) { const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom; r += c * this.view.offsetX, o = r + c * this.view.width, a -= h * this.view.offsetY, l = a - h * this.view.height } this.projectionMatrix.makeOrthographic(r, o, a, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t } } const Oi = 4, Rl = [.125, .215, .35, .446, .526, .582], ci = 20, co = new Ur, Cl = new Se; let ho = null, uo = 0, fo = 0, po = !1; const ai = (1 + Math.sqrt(5)) / 2, Pi = 1 / ai, Pl = [new C(-ai, Pi, 0), new C(ai, Pi, 0), new C(-Pi, 0, ai), new C(Pi, 0, ai), new C(0, ai, -Pi), new C(0, ai, Pi), new C(-1, 1, -1), new C(1, 1, -1), new C(-1, 1, 1), new C(1, 1, 1)]; class Ll { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, i = 100) { ho = this._renderer.getRenderTarget(), uo = this._renderer.getActiveCubeFace(), fo = this._renderer.getActiveMipmapLevel(), po = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(256); const r = this._allocateTargets(); return r.depthBuffer = !0, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r } fromEquirectangular(e, t = null) { return this._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e, t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = Nl(), this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this._equirectMaterial === null && (this._equirectMaterial = Il(), this._compileMaterial(this._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose(); for (let e = 0; e < this._lodPlanes.length; e++)this._lodPlanes[e].dispose() } _cleanup(e) { this._renderer.setRenderTarget(ho, uo, fo), this._renderer.xr.enabled = po, e.scissorTest = !1, tr(e, 0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === Wi || e.mapping === Xi ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), ho = this._renderer.getRenderTarget(), uo = this._renderer.getActiveCubeFace(), fo = this._renderer.getActiveMipmapLevel(), po = this._renderer.xr.enabled, this._renderer.xr.enabled = !1; const n = t || this._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Ht, minFilter: Ht, generateMipmaps: !1, type: es, format: jt, colorSpace: Et, depthBuffer: !1 }, i = Dl(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) { this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Dl(e, t, n); const { _lodMax: r } = this; ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Cm(r)), this._blurMaterial = Pm(r, e, t) } return i } _compileMaterial(e) { const t = new Ut(this._lodPlanes[0], e); this._renderer.compile(t, co) } _sceneToCubeUV(e, t, n, i) { const a = new Lt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping; h.getClearColor(Cl), h.toneMapping = qn, h.autoClear = !1; const p = new Xn({ name: "PMREM.Background", side: Ot, depthWrite: !1, depthTest: !1 }), g = new Ut(new Ds, p); let _ = !1; const m = e.background; m ? m.isColor && (p.color.copy(m), e.background = null, _ = !0) : (p.color.copy(Cl), _ = !0); for (let f = 0; f < 6; f++) { const y = f % 3; y === 0 ? (a.up.set(0, l[f], 0), a.lookAt(c[f], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[f]), a.lookAt(0, c[f], 0)) : (a.up.set(0, l[f], 0), a.lookAt(0, 0, c[f])); const v = this._cubeSize; tr(i, y * v, f > 2 ? v : 0, v, v), h.setRenderTarget(i), _ && h.render(g, a), h.render(e, a) } g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m } _textureToCubeUV(e, t) { const n = this._renderer, i = e.mapping === Wi || e.mapping === Xi; i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Nl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Il()); const r = i ? this._cubemapMaterial : this._equirectMaterial, o = new Ut(this._lodPlanes[0], r), a = r.uniforms; a.envMap.value = e; const l = this._cubeSize; tr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, co) } _applyPMREM(e) { const t = this._renderer, n = t.autoClear; t.autoClear = !1; const i = this._lodPlanes.length; for (let r = 1; r < i; r++) { const o = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), a = Pl[(i - r - 1) % Pl.length]; this._blur(e, r - 1, r, o, a) } t.autoClear = n } _blur(e, t, n, i, r) { const o = this._pingPongRenderTarget; this._halfBlur(e, o, t, n, i, "latitudinal", r), this._halfBlur(o, e, n, n, i, "longitudinal", r) } _halfBlur(e, t, n, i, r, o, a) { const l = this._renderer, c = this._blurMaterial; o !== "latitudinal" && o !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!"); const h = 3, u = new Ut(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * ci - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : ci; m > ci && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ci}`); const f = []; let y = 0; for (let w = 0; w < ci; ++w) { const F = w / _, E = Math.exp(-F * F / 2); f.push(E), w === 0 ? y += E : w < m && (y += 2 * E) } for (let w = 0; w < f.length; w++)f[w] = f[w] / y; d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a); const { _lodMax: v } = this; d.dTheta.value = g, d.mipInt.value = v - n; const b = this._sizeLods[i], I = 3 * b * (i > v - Oi ? i - v + Oi : 0), R = 4 * (this._cubeSize - b); tr(t, I, R, 3 * b, 2 * b), l.setRenderTarget(t), l.render(u, co) } } function Cm(s) { const e = [], t = [], n = []; let i = s; const r = s - Oi + 1 + Rl.length; for (let o = 0; o < r; o++) { const a = Math.pow(2, i); t.push(a); let l = 1 / a; o > s - Oi ? l = Rl[o - s + Oi - 1] : o === 0 && (l = 0), n.push(l); const c = 1 / (a - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, g = 6, _ = 3, m = 2, f = 1, y = new Float32Array(_ * g * p), v = new Float32Array(m * g * p), b = new Float32Array(f * g * p); for (let R = 0; R < p; R++) { const w = R % 3 * 2 / 3 - 1, F = R > 2 ? 0 : -1, E = [w, F, 0, w + 2 / 3, F, 0, w + 2 / 3, F + 1, 0, w, F, 0, w + 2 / 3, F + 1, 0, w, F + 1, 0]; y.set(E, _ * g * R), v.set(d, m * g * R); const S = [R, R, R, R, R, R]; b.set(S, f * g * R) } const I = new rn; I.setAttribute("position", new Dt(y, _)), I.setAttribute("uv", new Dt(v, m)), I.setAttribute("faceIndex", new Dt(b, f)), e.push(I), i > Oi && i-- } return { lodPlanes: e, sizeLods: t, sigmas: n } } function Dl(s, e, t) { const n = new Dn(s, e, t); return n.texture.mapping = Lr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n } function tr(s, e, t, n, i) { s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i) } function Pm(s, e, t) {
	const n = new Float32Array(ci), i = new C(0, 1, 0); return new sn({
		name: "SphericalGaussianBlur", defines: { n: ci, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: Da(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: Cn, depthTest: !1, depthWrite: !1
	})
} function Il() {
	return new sn({
		name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: Da(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: Cn, depthTest: !1, depthWrite: !1
	})
} function Nl() {
	return new sn({
		name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: Da(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Cn, depthTest: !1, depthWrite: !1
	})
} function Da() {
	return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`} function Lm(s) { let e = new WeakMap, t = null; function n(a) { if (a && a.isTexture) { const l = a.mapping, c = l === Lo || l === Do, h = l === Wi || l === Xi; if (c || h) { let u = e.get(a); const d = u !== void 0 ? u.texture.pmremVersion : 0; if (a.isRenderTargetTexture && a.pmremVersion !== d) return t === null && (t = new Ll(s)), u = c ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), u.texture; if (u !== void 0) return u.texture; { const p = a.image; return c && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new Ll(s)), u = c ? t.fromEquirectangular(a) : t.fromCubemap(a), u.texture.pmremVersion = a.pmremVersion, e.set(a, u), a.addEventListener("dispose", r), u.texture) : null } } } return a } function i(a) { let l = 0; const c = 6; for (let h = 0; h < c; h++)a[h] !== void 0 && l++; return l === c } function r(a) { const l = a.target; l.removeEventListener("dispose", r); const c = e.get(l); c !== void 0 && (e.delete(l), c.dispose()) } function o() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n, dispose: o } } function Dm(s) { const e = {}; function t(n) { if (e[n] !== void 0) return e[n]; let i; switch (n) { case "WEBGL_depth_texture": i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture"); break; case "EXT_texture_filter_anisotropic": i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic"); break; case "WEBGL_compressed_texture_s3tc": i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"); break; case "WEBGL_compressed_texture_pvrtc": i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"); break; default: i = s.getExtension(n) }return e[n] = i, i } return { has: function (n) { return t(n) !== null }, init: function () { t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent") }, get: function (n) { const i = t(n); return i === null && Hi("THREE.WebGLRenderer: " + n + " extension not supported."), i } } } function Im(s, e, t, n) { const i = {}, r = new WeakMap; function o(u) { const d = u.target; d.index !== null && e.remove(d.index); for (const g in d.attributes) e.remove(d.attributes[g]); for (const g in d.morphAttributes) { const _ = d.morphAttributes[g]; for (let m = 0, f = _.length; m < f; m++)e.remove(_[m]) } d.removeEventListener("dispose", o), delete i[d.id]; const p = r.get(d); p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries-- } function a(u, d) { return i[d.id] === !0 || (d.addEventListener("dispose", o), i[d.id] = !0, t.memory.geometries++), d } function l(u) { const d = u.attributes; for (const g in d) e.update(d[g], s.ARRAY_BUFFER); const p = u.morphAttributes; for (const g in p) { const _ = p[g]; for (let m = 0, f = _.length; m < f; m++)e.update(_[m], s.ARRAY_BUFFER) } } function c(u) { const d = [], p = u.index, g = u.attributes.position; let _ = 0; if (p !== null) { const y = p.array; _ = p.version; for (let v = 0, b = y.length; v < b; v += 3) { const I = y[v + 0], R = y[v + 1], w = y[v + 2]; d.push(I, R, R, w, w, I) } } else if (g !== void 0) { const y = g.array; _ = g.version; for (let v = 0, b = y.length / 3 - 1; v < b; v += 3) { const I = v + 0, R = v + 1, w = v + 2; d.push(I, R, R, w, w, I) } } else return; const m = new (uh(d) ? gh : mh)(d, 1); m.version = _; const f = r.get(u); f && e.remove(f), r.set(u, m) } function h(u) { const d = r.get(u); if (d) { const p = u.index; p !== null && d.version < p.version && c(u) } else c(u); return r.get(u) } return { get: a, update: l, getWireframeAttribute: h } } function Nm(s, e, t) { let n; function i(d) { n = d } let r, o; function a(d) { r = d.type, o = d.bytesPerElement } function l(d, p) { s.drawElements(n, p, r, d * o), t.update(p, n, 1) } function c(d, p, g) { g !== 0 && (s.drawElementsInstanced(n, p, r, d * o, g), t.update(p, n, g)) } function h(d, p, g) { if (g === 0) return; e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, g); let m = 0; for (let f = 0; f < g; f++)m += p[f]; t.update(m, n, 1) } function u(d, p, g, _) { if (g === 0) return; const m = e.get("WEBGL_multi_draw"); if (m === null) for (let f = 0; f < d.length; f++)c(d[f] / o, p[f], _[f]); else { m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, _, 0, g); let f = 0; for (let y = 0; y < g; y++)f += p[y]; for (let y = 0; y < _.length; y++)t.update(f, n, _[y]) } } this.setMode = i, this.setIndex = a, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u } function Um(s) { const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 }; function n(r, o, a) { switch (t.calls++, o) { case s.TRIANGLES: t.triangles += a * (r / 3); break; case s.LINES: t.lines += a * (r / 2); break; case s.LINE_STRIP: t.lines += a * (r - 1); break; case s.LINE_LOOP: t.lines += a * r; break; case s.POINTS: t.points += a * r; break; default: console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } } function i() { t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e, render: t, programs: null, autoReset: !0, reset: i, update: n } } function Om(s, e, t) { const n = new WeakMap, i = new tt; function r(o, a, l) { const c = o.morphTargetInfluences, h = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, u = h !== void 0 ? h.length : 0; let d = n.get(a); if (d === void 0 || d.count !== u) { let S = function () { F.dispose(), n.delete(a), a.removeEventListener("dispose", S) }; var p = S; d !== void 0 && d.texture.dispose(); const g = a.morphAttributes.position !== void 0, _ = a.morphAttributes.normal !== void 0, m = a.morphAttributes.color !== void 0, f = a.morphAttributes.position || [], y = a.morphAttributes.normal || [], v = a.morphAttributes.color || []; let b = 0; g === !0 && (b = 1), _ === !0 && (b = 2), m === !0 && (b = 3); let I = a.attributes.position.count * b, R = 1; I > e.maxTextureSize && (R = Math.ceil(I / e.maxTextureSize), I = e.maxTextureSize); const w = new Float32Array(I * R * 4 * u), F = new fh(w, I, R, u); F.type = Qt, F.needsUpdate = !0; const E = b * 4; for (let P = 0; P < u; P++) { const G = f[P], k = y[P], $ = v[P], K = I * R * 4 * P; for (let W = 0; W < G.count; W++) { const J = W * E; g === !0 && (i.fromBufferAttribute(G, W), w[K + J + 0] = i.x, w[K + J + 1] = i.y, w[K + J + 2] = i.z, w[K + J + 3] = 0), _ === !0 && (i.fromBufferAttribute(k, W), w[K + J + 4] = i.x, w[K + J + 5] = i.y, w[K + J + 6] = i.z, w[K + J + 7] = 0), m === !0 && (i.fromBufferAttribute($, W), w[K + J + 8] = i.x, w[K + J + 9] = i.y, w[K + J + 10] = i.z, w[K + J + 11] = $.itemSize === 4 ? i.w : 1) } } d = { count: u, texture: F, size: new le(I, R) }, n.set(a, d), a.addEventListener("dispose", S) } if (o.isInstancedMesh === !0 && o.morphTexture !== null) l.getUniforms().setValue(s, "morphTexture", o.morphTexture, t); else { let g = 0; for (let m = 0; m < c.length; m++)g += c[m]; const _ = a.morphTargetsRelative ? 1 : 1 - g; l.getUniforms().setValue(s, "morphTargetBaseInfluence", _), l.getUniforms().setValue(s, "morphTargetInfluences", c) } l.getUniforms().setValue(s, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(s, "morphTargetsTextureSize", d.size) } return { update: r } } function Fm(s, e, t, n) { let i = new WeakMap; function r(l) { const c = n.render.frame, h = l.geometry, u = e.get(l, h); if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) { const d = l.skeleton; i.get(d) !== c && (d.update(), i.set(d, c)) } return u } function o() { i = new WeakMap } function a(l) { const c = l.target; c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor) } return { update: r, dispose: o } } class Mh extends vt { constructor(e, t, n, i, r, o, a, l, c, h = ki) { if (h !== ki && h !== qi) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"); n === void 0 && h === ki && (n = hi), n === void 0 && h === qi && (n = Yi), super(null, i, r, o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : At, this.minFilter = l !== void 0 ? l : At, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e), this.compareFunction = e.compareFunction, this } toJSON(e) { const t = super.toJSON(e); return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t } } const Sh = new vt, Ul = new Mh(1, 1), bh = new fh, Eh = new bd, Th = new xh, Ol = [], Fl = [], Bl = new Float32Array(16), zl = new Float32Array(9), kl = new Float32Array(4); function ns(s, e, t) { const n = s[0]; if (n <= 0 || n > 0) return s; const i = e * t; let r = Ol[i]; if (r === void 0 && (r = new Float32Array(i), Ol[i] = r), e !== 0) { n.toArray(r, 0); for (let o = 1, a = 0; o !== e; ++o)a += t, s[o].toArray(r, a) } return r } function mt(s, e) { if (s.length !== e.length) return !1; for (let t = 0, n = s.length; t < n; t++)if (s[t] !== e[t]) return !1; return !0 } function gt(s, e) { for (let t = 0, n = e.length; t < n; t++)s[t] = e[t] } function Or(s, e) { let t = Fl[e]; t === void 0 && (t = new Int32Array(e), Fl[e] = t); for (let n = 0; n !== e; ++n)t[n] = s.allocateTextureUnit(); return t } function Bm(s, e) { const t = this.cache; t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e) } function zm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (mt(t, e)) return; s.uniform2fv(this.addr, e), gt(t, e) } } function km(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b); else { if (mt(t, e)) return; s.uniform3fv(this.addr, e), gt(t, e) } } function Hm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (mt(t, e)) return; s.uniform4fv(this.addr, e), gt(t, e) } } function Vm(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (mt(t, e)) return; s.uniformMatrix2fv(this.addr, !1, e), gt(t, e) } else { if (mt(t, n)) return; kl.set(n), s.uniformMatrix2fv(this.addr, !1, kl), gt(t, n) } } function Gm(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (mt(t, e)) return; s.uniformMatrix3fv(this.addr, !1, e), gt(t, e) } else { if (mt(t, n)) return; zl.set(n), s.uniformMatrix3fv(this.addr, !1, zl), gt(t, n) } } function Wm(s, e) { const t = this.cache, n = e.elements; if (n === void 0) { if (mt(t, e)) return; s.uniformMatrix4fv(this.addr, !1, e), gt(t, e) } else { if (mt(t, n)) return; Bl.set(n), s.uniformMatrix4fv(this.addr, !1, Bl), gt(t, n) } } function Xm(s, e) { const t = this.cache; t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e) } function jm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (mt(t, e)) return; s.uniform2iv(this.addr, e), gt(t, e) } } function Ym(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (mt(t, e)) return; s.uniform3iv(this.addr, e), gt(t, e) } } function qm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (mt(t, e)) return; s.uniform4iv(this.addr, e), gt(t, e) } } function Km(s, e) { const t = this.cache; t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e) } function $m(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y); else { if (mt(t, e)) return; s.uniform2uiv(this.addr, e), gt(t, e) } } function Zm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z); else { if (mt(t, e)) return; s.uniform3uiv(this.addr, e), gt(t, e) } } function Jm(s, e) { const t = this.cache; if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w); else { if (mt(t, e)) return; s.uniform4uiv(this.addr, e), gt(t, e) } } function Qm(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i); let r; this.type === s.SAMPLER_2D_SHADOW ? (Ul.compareFunction = ch, r = Ul) : r = Sh, t.setTexture2D(e || r, i) } function eg(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Eh, i) } function tg(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Th, i) } function ng(s, e, t) { const n = this.cache, i = t.allocateTextureUnit(); n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || bh, i) } function ig(s) { switch (s) { case 5126: return Bm; case 35664: return zm; case 35665: return km; case 35666: return Hm; case 35674: return Vm; case 35675: return Gm; case 35676: return Wm; case 5124: case 35670: return Xm; case 35667: case 35671: return jm; case 35668: case 35672: return Ym; case 35669: case 35673: return qm; case 5125: return Km; case 36294: return $m; case 36295: return Zm; case 36296: return Jm; case 35678: case 36198: case 36298: case 36306: case 35682: return Qm; case 35679: case 36299: case 36307: return eg; case 35680: case 36300: case 36308: case 36293: return tg; case 36289: case 36303: case 36311: case 36292: return ng } } function sg(s, e) { s.uniform1fv(this.addr, e) } function rg(s, e) { const t = ns(e, this.size, 2); s.uniform2fv(this.addr, t) } function og(s, e) { const t = ns(e, this.size, 3); s.uniform3fv(this.addr, t) } function ag(s, e) { const t = ns(e, this.size, 4); s.uniform4fv(this.addr, t) } function lg(s, e) { const t = ns(e, this.size, 4); s.uniformMatrix2fv(this.addr, !1, t) } function cg(s, e) { const t = ns(e, this.size, 9); s.uniformMatrix3fv(this.addr, !1, t) } function hg(s, e) { const t = ns(e, this.size, 16); s.uniformMatrix4fv(this.addr, !1, t) } function ug(s, e) { s.uniform1iv(this.addr, e) } function dg(s, e) { s.uniform2iv(this.addr, e) } function fg(s, e) { s.uniform3iv(this.addr, e) } function pg(s, e) { s.uniform4iv(this.addr, e) } function mg(s, e) { s.uniform1uiv(this.addr, e) } function gg(s, e) { s.uniform2uiv(this.addr, e) } function _g(s, e) { s.uniform3uiv(this.addr, e) } function vg(s, e) { s.uniform4uiv(this.addr, e) } function xg(s, e, t) { const n = this.cache, i = e.length, r = Or(t, i); mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r)); for (let o = 0; o !== i; ++o)t.setTexture2D(e[o] || Sh, r[o]) } function yg(s, e, t) { const n = this.cache, i = e.length, r = Or(t, i); mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r)); for (let o = 0; o !== i; ++o)t.setTexture3D(e[o] || Eh, r[o]) } function Mg(s, e, t) { const n = this.cache, i = e.length, r = Or(t, i); mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r)); for (let o = 0; o !== i; ++o)t.setTextureCube(e[o] || Th, r[o]) } function Sg(s, e, t) { const n = this.cache, i = e.length, r = Or(t, i); mt(n, r) || (s.uniform1iv(this.addr, r), gt(n, r)); for (let o = 0; o !== i; ++o)t.setTexture2DArray(e[o] || bh, r[o]) } function bg(s) { switch (s) { case 5126: return sg; case 35664: return rg; case 35665: return og; case 35666: return ag; case 35674: return lg; case 35675: return cg; case 35676: return hg; case 5124: case 35670: return ug; case 35667: case 35671: return dg; case 35668: case 35672: return fg; case 35669: case 35673: return pg; case 5125: return mg; case 36294: return gg; case 36295: return _g; case 36296: return vg; case 35678: case 36198: case 36298: case 36306: case 35682: return xg; case 35679: case 36299: case 36307: return yg; case 35680: case 36300: case 36308: case 36293: return Mg; case 36289: case 36303: case 36311: case 36292: return Sg } } class Eg { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = ig(t.type) } } class Tg { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = bg(t.type) } } class wg { constructor(e) { this.id = e, this.seq = [], this.map = {} } setValue(e, t, n) { const i = this.seq; for (let r = 0, o = i.length; r !== o; ++r) { const a = i[r]; a.setValue(e, t[a.id], n) } } } const mo = /(\w+)(\])?(\[|\.)?/g; function Hl(s, e) { s.seq.push(e), s.map[e.id] = e } function Ag(s, e, t) { const n = s.name, i = n.length; for (mo.lastIndex = 0; ;) { const r = mo.exec(n), o = mo.lastIndex; let a = r[1]; const l = r[2] === "]", c = r[3]; if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === i) { Hl(t, c === void 0 ? new Eg(a, s, e) : new Tg(a, s, e)); break } else { let u = t.map[a]; u === void 0 && (u = new wg(a), Hl(t, u)), t = u } } } class xr { constructor(e, t) { this.seq = [], this.map = {}; const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let i = 0; i < n; ++i) { const r = e.getActiveUniform(t, i), o = e.getUniformLocation(t, r.name); Ag(r, o, this) } } setValue(e, t, n, i) { const r = this.map[t]; r !== void 0 && r.setValue(e, n, i) } setOptional(e, t, n) { const i = t[n]; i !== void 0 && this.setValue(e, n, i) } static upload(e, t, n, i) { for (let r = 0, o = t.length; r !== o; ++r) { const a = t[r], l = n[a.id]; l.needsUpdate !== !1 && a.setValue(e, l.value, i) } } static seqWithValue(e, t) { const n = []; for (let i = 0, r = e.length; i !== r; ++i) { const o = e[i]; o.id in t && n.push(o) } return n } } function Vl(s, e, t) { const n = s.createShader(e); return s.shaderSource(n, t), s.compileShader(n), n } const Rg = 37297; let Cg = 0; function Pg(s, e) {
	const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length); for (let o = i; o < r; o++) { const a = o + 1; n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`) } return n.join(`
`)
} function Lg(s) { const e = We.getPrimaries(We.workingColorSpace), t = We.getPrimaries(s); let n; switch (e === t ? n = "" : e === Er && t === br ? n = "LinearDisplayP3ToLinearSRGB" : e === br && t === Er && (n = "LinearSRGBToLinearDisplayP3"), s) { case Et: case Dr: return [n, "LinearTransferOETF"]; case Pt: case Ra: return [n, "sRGBTransferOETF"]; default: return console.warn("THREE.WebGLProgram: Unsupported color space:", s), [n, "LinearTransferOETF"] } } function Gl(s, e, t) {
	const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim(); if (n && i === "") return ""; const r = /ERROR: 0:(\d+)/.exec(i); if (r) {
		const o = parseInt(r[1]); return t.toUpperCase() + `

`+ i + `

`+ Pg(s.getShaderSource(e), o)
	} else return i
} function Dg(s, e) { const t = Lg(e); return `vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }` } function Ig(s, e) { let t; switch (e) { case Uu: t = "Linear"; break; case Ou: t = "Reinhard"; break; case Fu: t = "Cineon"; break; case Bu: t = "ACESFilmic"; break; case ku: t = "AgX"; break; case Hu: t = "Neutral"; break; case zu: t = "Custom"; break; default: console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" }return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }" } const nr = new C; function Ng() {
	We.getLuminanceCoefficients(nr); const s = nr.x.toFixed(4), e = nr.y.toFixed(4), t = nr.z.toFixed(4); return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
} function Ug(s) {
	return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(xs).join(`
`)
} function Og(s) {
	const e = []; for (const t in s) { const n = s[t]; n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`)
} function Fg(s, e) { const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES); for (let i = 0; i < n; i++) { const r = s.getActiveAttrib(e, i), o = r.name; let a = 1; r.type === s.FLOAT_MAT2 && (a = 2), r.type === s.FLOAT_MAT3 && (a = 3), r.type === s.FLOAT_MAT4 && (a = 4), t[o] = { type: r.type, location: s.getAttribLocation(e, o), locationSize: a } } return t } function xs(s) { return s !== "" } function Wl(s, e) { const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps; return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows) } function Xl(s, e) { return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) } const Bg = /^[ \t]*#include +<([\w\d./]+)>/gm; function aa(s) { return s.replace(Bg, kg) } const zg = new Map; function kg(s, e) { let t = Ne[e]; if (t === void 0) { const n = zg.get(e); if (n !== void 0) t = Ne[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n); else throw new Error("Can not resolve #include <" + e + ">") } return aa(t) } const Hg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g; function jl(s) { return s.replace(Hg, Vg) } function Vg(s, e, t, n) { let i = ""; for (let r = parseInt(e); r < parseInt(t); r++)i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r); return i } function Yl(s) {
	let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`; return s.precision === "highp" ? e += `
#define HIGH_PRECISION`: s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION`: s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e
} function Gg(s) { let e = "SHADOWMAP_TYPE_BASIC"; return s.shadowMapType === Yc ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === au ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === Tn && (e = "SHADOWMAP_TYPE_VSM"), e } function Wg(s) { let e = "ENVMAP_TYPE_CUBE"; if (s.envMap) switch (s.envMapMode) { case Wi: case Xi: e = "ENVMAP_TYPE_CUBE"; break; case Lr: e = "ENVMAP_TYPE_CUBE_UV"; break }return e } function Xg(s) { let e = "ENVMAP_MODE_REFLECTION"; if (s.envMap) switch (s.envMapMode) { case Xi: e = "ENVMAP_MODE_REFRACTION"; break }return e } function jg(s) { let e = "ENVMAP_BLENDING_NONE"; if (s.envMap) switch (s.combine) { case qc: e = "ENVMAP_BLENDING_MULTIPLY"; break; case Iu: e = "ENVMAP_BLENDING_MIX"; break; case Nu: e = "ENVMAP_BLENDING_ADD"; break }return e } function Yg(s) { const e = s.envMapCubeUVHeight; if (e === null) return null; const t = Math.log2(e) - 2, n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t } } function qg(s, e, t, n) {
	const i = s.getContext(), r = t.defines; let o = t.vertexShader, a = t.fragmentShader; const l = Gg(t), c = Wg(t), h = Xg(t), u = jg(t), d = Yg(t), p = Ug(t), g = Og(r), _ = i.createProgram(); let m, f, y = t.glslVersion ? "#version " + t.glslVersion + `
`: ""; t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(xs).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(xs).join(`
`), f.length > 0 && (f += `
`)) : (m = [Yl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(xs).join(`
`), f = [Yl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== qn ? "#define TONE_MAPPING" : "", t.toneMapping !== qn ? Ne.tonemapping_pars_fragment : "", t.toneMapping !== qn ? Ig("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ne.colorspace_pars_fragment, Dg("linearToOutputTexel", t.outputColorSpace), Ng(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(xs).join(`
`)), o = aa(o), o = Wl(o, t), o = Xl(o, t), a = aa(a), a = Wl(a, t), a = Xl(a, t), o = jl(o), a = jl(a), t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
`+ m, f = ["#define varying in", t.glslVersion === al ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === al ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
`+ f); const v = y + m + o, b = y + f + a, I = Vl(i, i.VERTEX_SHADER, v), R = Vl(i, i.FRAGMENT_SHADER, b); i.attachShader(_, I), i.attachShader(_, R), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_); function w(P) {
		if (s.debug.checkShaderErrors) {
			const G = i.getProgramInfoLog(_).trim(), k = i.getShaderInfoLog(I).trim(), $ = i.getShaderInfoLog(R).trim(); let K = !0, W = !0; if (i.getProgramParameter(_, i.LINK_STATUS) === !1) if (K = !1, typeof s.debug.onShaderError == "function") s.debug.onShaderError(i, _, I, R); else {
				const J = Gl(i, I, "vertex"), H = Gl(i, R, "fragment"); console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: `+ P.name + `
Material Type: `+ P.type + `

Program Info Log: `+ G + `
`+ J + `
`+ H)
			} else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (k === "" || $ === "") && (W = !1); W && (P.diagnostics = { runnable: K, programLog: G, vertexShader: { log: k, prefix: m }, fragmentShader: { log: $, prefix: f } })
		} i.deleteShader(I), i.deleteShader(R), F = new xr(i, _), E = Fg(i, _)
	} let F; this.getUniforms = function () { return F === void 0 && w(this), F }; let E; this.getAttributes = function () { return E === void 0 && w(this), E }; let S = t.rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return S === !1 && (S = i.getProgramParameter(_, Rg)), S }, this.destroy = function () { n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0 }, this.type = t.shaderType, this.name = t.shaderName, this.id = Cg++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = I, this.fragmentShader = R, this
} let Kg = 0; class $g { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(e) { const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e); return o.has(i) === !1 && (o.add(i), i.usedTimes++), o.has(r) === !1 && (o.add(r), r.usedTimes++), this } remove(e) { const t = this.materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this.materialCache.clear() } _getShaderCacheForMaterial(e) { const t = this.materialCache; let n = t.get(e); return n === void 0 && (n = new Set, t.set(e, n)), n } _getShaderStage(e) { const t = this.shaderCache; let n = t.get(e); return n === void 0 && (n = new Zg(e), t.set(e, n)), n } } class Zg { constructor(e) { this.id = Kg++, this.code = e, this.usedTimes = 0 } } function Jg(s, e, t, n, i, r, o) { const a = new Pa, l = new $g, c = new Set, h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures; let p = i.precision; const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function _(E) { return c.add(E), E === 0 ? "uv" : `uv${E}` } function m(E, S, P, G, k) { const $ = G.fog, K = k.geometry, W = E.isMeshStandardMaterial ? G.environment : null, J = (E.isMeshStandardMaterial ? t : e).get(E.envMap || W), H = J && J.mapping === Lr ? J.image.height : null, ce = g[E.type]; E.precision !== null && (p = i.getMaxPrecision(E.precision), p !== E.precision && console.warn("THREE.WebGLProgram.getParameters:", E.precision, "not supported, using", p, "instead.")); const fe = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, ve = fe !== void 0 ? fe.length : 0; let He = 0; K.morphAttributes.position !== void 0 && (He = 1), K.morphAttributes.normal !== void 0 && (He = 2), K.morphAttributes.color !== void 0 && (He = 3); let Je, V, ee, _e; if (ce) { const Xe = Zt[ce]; Je = Xe.vertexShader, V = Xe.fragmentShader } else Je = E.vertexShader, V = E.fragmentShader, l.update(E), ee = l.getVertexShaderID(E), _e = l.getFragmentShaderID(E); const ue = s.getRenderTarget(), we = k.isInstancedMesh === !0, Le = k.isBatchedMesh === !0, ke = !!E.map, ot = !!E.matcap, A = !!J, ct = !!E.aoMap, Ke = !!E.lightMap, Qe = !!E.bumpMap, Me = !!E.normalMap, ht = !!E.displacementMap, Ce = !!E.emissiveMap, De = !!E.metalnessMap, T = !!E.roughnessMap, x = E.anisotropy > 0, z = E.clearcoat > 0, q = E.dispersion > 0, Q = E.iridescence > 0, Z = E.sheen > 0, be = E.transmission > 0, oe = x && !!E.anisotropyMap, de = z && !!E.clearcoatMap, Ue = z && !!E.clearcoatNormalMap, te = z && !!E.clearcoatRoughnessMap, he = Q && !!E.iridescenceMap, Ve = Q && !!E.iridescenceThicknessMap, Re = Z && !!E.sheenColorMap, pe = Z && !!E.sheenRoughnessMap, Pe = !!E.specularMap, Fe = !!E.specularColorMap, rt = !!E.specularIntensityMap, L = be && !!E.transmissionMap, ne = be && !!E.thicknessMap, X = !!E.gradientMap, Y = !!E.alphaMap, se = E.alphaTest > 0, Ee = !!E.alphaHash, Ge = !!E.extensions; let ut = qn; E.toneMapped && (ue === null || ue.isXRRenderTarget === !0) && (ut = s.toneMapping); const yt = { shaderID: ce, shaderType: E.type, shaderName: E.name, vertexShader: Je, fragmentShader: V, defines: E.defines, customVertexShaderID: ee, customFragmentShaderID: _e, isRawShaderMaterial: E.isRawShaderMaterial === !0, glslVersion: E.glslVersion, precision: p, batching: Le, batchingColor: Le && k._colorsTexture !== null, instancing: we, instancingColor: we && k.instanceColor !== null, instancingMorph: we && k.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: ue === null ? s.outputColorSpace : ue.isXRRenderTarget === !0 ? ue.texture.colorSpace : Et, alphaToCoverage: !!E.alphaToCoverage, map: ke, matcap: ot, envMap: A, envMapMode: A && J.mapping, envMapCubeUVHeight: H, aoMap: ct, lightMap: Ke, bumpMap: Qe, normalMap: Me, displacementMap: d && ht, emissiveMap: Ce, normalMapObjectSpace: Me && E.normalMapType === ju, normalMapTangentSpace: Me && E.normalMapType === lh, metalnessMap: De, roughnessMap: T, anisotropy: x, anisotropyMap: oe, clearcoat: z, clearcoatMap: de, clearcoatNormalMap: Ue, clearcoatRoughnessMap: te, dispersion: q, iridescence: Q, iridescenceMap: he, iridescenceThicknessMap: Ve, sheen: Z, sheenColorMap: Re, sheenRoughnessMap: pe, specularMap: Pe, specularColorMap: Fe, specularIntensityMap: rt, transmission: be, transmissionMap: L, thicknessMap: ne, gradientMap: X, opaque: E.transparent === !1 && E.blending === zi && E.alphaToCoverage === !1, alphaMap: Y, alphaTest: se, alphaHash: Ee, combine: E.combine, mapUv: ke && _(E.map.channel), aoMapUv: ct && _(E.aoMap.channel), lightMapUv: Ke && _(E.lightMap.channel), bumpMapUv: Qe && _(E.bumpMap.channel), normalMapUv: Me && _(E.normalMap.channel), displacementMapUv: ht && _(E.displacementMap.channel), emissiveMapUv: Ce && _(E.emissiveMap.channel), metalnessMapUv: De && _(E.metalnessMap.channel), roughnessMapUv: T && _(E.roughnessMap.channel), anisotropyMapUv: oe && _(E.anisotropyMap.channel), clearcoatMapUv: de && _(E.clearcoatMap.channel), clearcoatNormalMapUv: Ue && _(E.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: te && _(E.clearcoatRoughnessMap.channel), iridescenceMapUv: he && _(E.iridescenceMap.channel), iridescenceThicknessMapUv: Ve && _(E.iridescenceThicknessMap.channel), sheenColorMapUv: Re && _(E.sheenColorMap.channel), sheenRoughnessMapUv: pe && _(E.sheenRoughnessMap.channel), specularMapUv: Pe && _(E.specularMap.channel), specularColorMapUv: Fe && _(E.specularColorMap.channel), specularIntensityMapUv: rt && _(E.specularIntensityMap.channel), transmissionMapUv: L && _(E.transmissionMap.channel), thicknessMapUv: ne && _(E.thicknessMap.channel), alphaMapUv: Y && _(E.alphaMap.channel), vertexTangents: !!K.attributes.tangent && (Me || x), vertexColors: E.vertexColors, vertexAlphas: E.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4, pointsUvs: k.isPoints === !0 && !!K.attributes.uv && (ke || Y), fog: !!$, useFog: E.fog === !0, fogExp2: !!$ && $.isFogExp2, flatShading: E.flatShading === !0, sizeAttenuation: E.sizeAttenuation === !0, logarithmicDepthBuffer: u, skinning: k.isSkinnedMesh === !0, morphTargets: K.morphAttributes.position !== void 0, morphNormals: K.morphAttributes.normal !== void 0, morphColors: K.morphAttributes.color !== void 0, morphTargetsCount: ve, morphTextureStride: He, numDirLights: S.directional.length, numPointLights: S.point.length, numSpotLights: S.spot.length, numSpotLightMaps: S.spotLightMap.length, numRectAreaLights: S.rectArea.length, numHemiLights: S.hemi.length, numDirLightShadows: S.directionalShadowMap.length, numPointLightShadows: S.pointShadowMap.length, numSpotLightShadows: S.spotShadowMap.length, numSpotLightShadowsWithMaps: S.numSpotLightShadowsWithMaps, numLightProbes: S.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o.numIntersection, dithering: E.dithering, shadowMapEnabled: s.shadowMap.enabled && P.length > 0, shadowMapType: s.shadowMap.type, toneMapping: ut, decodeVideoTexture: ke && E.map.isVideoTexture === !0 && We.getTransfer(E.map.colorSpace) === st, premultipliedAlpha: E.premultipliedAlpha, doubleSided: E.side === Xt, flipSided: E.side === Ot, useDepthPacking: E.depthPacking >= 0, depthPacking: E.depthPacking || 0, index0AttributeName: E.index0AttributeName, extensionClipCullDistance: Ge && E.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Ge && E.extensions.multiDraw === !0 || Le) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: E.customProgramCacheKey() }; return yt.vertexUv1s = c.has(1), yt.vertexUv2s = c.has(2), yt.vertexUv3s = c.has(3), c.clear(), yt } function f(E) { const S = []; if (E.shaderID ? S.push(E.shaderID) : (S.push(E.customVertexShaderID), S.push(E.customFragmentShaderID)), E.defines !== void 0) for (const P in E.defines) S.push(P), S.push(E.defines[P]); return E.isRawShaderMaterial === !1 && (y(S, E), v(S, E), S.push(s.outputColorSpace)), S.push(E.customProgramCacheKey), S.join() } function y(E, S) { E.push(S.precision), E.push(S.outputColorSpace), E.push(S.envMapMode), E.push(S.envMapCubeUVHeight), E.push(S.mapUv), E.push(S.alphaMapUv), E.push(S.lightMapUv), E.push(S.aoMapUv), E.push(S.bumpMapUv), E.push(S.normalMapUv), E.push(S.displacementMapUv), E.push(S.emissiveMapUv), E.push(S.metalnessMapUv), E.push(S.roughnessMapUv), E.push(S.anisotropyMapUv), E.push(S.clearcoatMapUv), E.push(S.clearcoatNormalMapUv), E.push(S.clearcoatRoughnessMapUv), E.push(S.iridescenceMapUv), E.push(S.iridescenceThicknessMapUv), E.push(S.sheenColorMapUv), E.push(S.sheenRoughnessMapUv), E.push(S.specularMapUv), E.push(S.specularColorMapUv), E.push(S.specularIntensityMapUv), E.push(S.transmissionMapUv), E.push(S.thicknessMapUv), E.push(S.combine), E.push(S.fogExp2), E.push(S.sizeAttenuation), E.push(S.morphTargetsCount), E.push(S.morphAttributeCount), E.push(S.numDirLights), E.push(S.numPointLights), E.push(S.numSpotLights), E.push(S.numSpotLightMaps), E.push(S.numHemiLights), E.push(S.numRectAreaLights), E.push(S.numDirLightShadows), E.push(S.numPointLightShadows), E.push(S.numSpotLightShadows), E.push(S.numSpotLightShadowsWithMaps), E.push(S.numLightProbes), E.push(S.shadowMapType), E.push(S.toneMapping), E.push(S.numClippingPlanes), E.push(S.numClipIntersection), E.push(S.depthPacking) } function v(E, S) { a.disableAll(), S.supportsVertexTextures && a.enable(0), S.instancing && a.enable(1), S.instancingColor && a.enable(2), S.instancingMorph && a.enable(3), S.matcap && a.enable(4), S.envMap && a.enable(5), S.normalMapObjectSpace && a.enable(6), S.normalMapTangentSpace && a.enable(7), S.clearcoat && a.enable(8), S.iridescence && a.enable(9), S.alphaTest && a.enable(10), S.vertexColors && a.enable(11), S.vertexAlphas && a.enable(12), S.vertexUv1s && a.enable(13), S.vertexUv2s && a.enable(14), S.vertexUv3s && a.enable(15), S.vertexTangents && a.enable(16), S.anisotropy && a.enable(17), S.alphaHash && a.enable(18), S.batching && a.enable(19), S.dispersion && a.enable(20), S.batchingColor && a.enable(21), E.push(a.mask), a.disableAll(), S.fog && a.enable(0), S.useFog && a.enable(1), S.flatShading && a.enable(2), S.logarithmicDepthBuffer && a.enable(3), S.skinning && a.enable(4), S.morphTargets && a.enable(5), S.morphNormals && a.enable(6), S.morphColors && a.enable(7), S.premultipliedAlpha && a.enable(8), S.shadowMapEnabled && a.enable(9), S.doubleSided && a.enable(10), S.flipSided && a.enable(11), S.useDepthPacking && a.enable(12), S.dithering && a.enable(13), S.transmission && a.enable(14), S.sheen && a.enable(15), S.opaque && a.enable(16), S.pointsUvs && a.enable(17), S.decodeVideoTexture && a.enable(18), S.alphaToCoverage && a.enable(19), E.push(a.mask) } function b(E) { const S = g[E.type]; let P; if (S) { const G = Zt[S]; P = Ir.clone(G.uniforms) } else P = E.uniforms; return P } function I(E, S) { let P; for (let G = 0, k = h.length; G < k; G++) { const $ = h[G]; if ($.cacheKey === S) { P = $, ++P.usedTimes; break } } return P === void 0 && (P = new qg(s, S, E, r), h.push(P)), P } function R(E) { if (--E.usedTimes === 0) { const S = h.indexOf(E); h[S] = h[h.length - 1], h.pop(), E.destroy() } } function w(E) { l.remove(E) } function F() { l.dispose() } return { getParameters: m, getProgramCacheKey: f, getUniforms: b, acquireProgram: I, releaseProgram: R, releaseShaderCache: w, programs: h, dispose: F } } function Qg() { let s = new WeakMap; function e(o) { return s.has(o) } function t(o) { let a = s.get(o); return a === void 0 && (a = {}, s.set(o, a)), a } function n(o) { s.delete(o) } function i(o, a, l) { s.get(o)[a] = l } function r() { s = new WeakMap } return { has: e, get: t, remove: n, update: i, dispose: r } } function e_(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id } function ql(s, e) { return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id } function Kl() { const s = []; let e = 0; const t = [], n = [], i = []; function r() { e = 0, t.length = 0, n.length = 0, i.length = 0 } function o(u, d, p, g, _, m) { let f = s[e]; return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: p, groupOrder: g, renderOrder: u.renderOrder, z: _, group: m }, s[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = _, f.group = m), e++, f } function a(u, d, p, g, _, m) { const f = o(u, d, p, g, _, m); p.transmission > 0 ? n.push(f) : p.transparent === !0 ? i.push(f) : t.push(f) } function l(u, d, p, g, _, m) { const f = o(u, d, p, g, _, m); p.transmission > 0 ? n.unshift(f) : p.transparent === !0 ? i.unshift(f) : t.unshift(f) } function c(u, d) { t.length > 1 && t.sort(u || e_), n.length > 1 && n.sort(d || ql), i.length > 1 && i.sort(d || ql) } function h() { for (let u = e, d = s.length; u < d; u++) { const p = s[u]; if (p.id === null) break; p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null } } return { opaque: t, transmissive: n, transparent: i, init: r, push: a, unshift: l, finish: h, sort: c } } function t_() { let s = new WeakMap; function e(n, i) { const r = s.get(n); let o; return r === void 0 ? (o = new Kl, s.set(n, [o])) : i >= r.length ? (o = new Kl, r.push(o)) : o = r[i], o } function t() { s = new WeakMap } return { get: e, dispose: t } } function n_() { const s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { direction: new C, color: new Se }; break; case "SpotLight": t = { position: new C, direction: new C, color: new Se, distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 }; break; case "PointLight": t = { position: new C, color: new Se, distance: 0, decay: 0 }; break; case "HemisphereLight": t = { direction: new C, skyColor: new Se, groundColor: new Se }; break; case "RectAreaLight": t = { color: new Se, position: new C, halfWidth: new C, halfHeight: new C }; break }return s[e.id] = t, t } } } function i_() { const s = {}; return { get: function (e) { if (s[e.id] !== void 0) return s[e.id]; let t; switch (e.type) { case "DirectionalLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new le }; break; case "SpotLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new le }; break; case "PointLight": t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new le, shadowCameraNear: 1, shadowCameraFar: 1e3 }; break }return s[e.id] = t, t } } } let s_ = 0; function r_(s, e) { return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0) } function o_(s) { const e = new n_, t = i_(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 }; for (let c = 0; c < 9; c++)n.probe.push(new C); const i = new C, r = new Ie, o = new Ie; function a(c) { let h = 0, u = 0, d = 0; for (let E = 0; E < 9; E++)n.probe[E].set(0, 0, 0); let p = 0, g = 0, _ = 0, m = 0, f = 0, y = 0, v = 0, b = 0, I = 0, R = 0, w = 0; c.sort(r_); for (let E = 0, S = c.length; E < S; E++) { const P = c[E], G = P.color, k = P.intensity, $ = P.distance, K = P.shadow && P.shadow.map ? P.shadow.map.texture : null; if (P.isAmbientLight) h += G.r * k, u += G.g * k, d += G.b * k; else if (P.isLightProbe) { for (let W = 0; W < 9; W++)n.probe[W].addScaledVector(P.sh.coefficients[W], k); w++ } else if (P.isDirectionalLight) { const W = e.get(P); if (W.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) { const J = P.shadow, H = t.get(P); H.shadowIntensity = J.intensity, H.shadowBias = J.bias, H.shadowNormalBias = J.normalBias, H.shadowRadius = J.radius, H.shadowMapSize = J.mapSize, n.directionalShadow[p] = H, n.directionalShadowMap[p] = K, n.directionalShadowMatrix[p] = P.shadow.matrix, y++ } n.directional[p] = W, p++ } else if (P.isSpotLight) { const W = e.get(P); W.position.setFromMatrixPosition(P.matrixWorld), W.color.copy(G).multiplyScalar(k), W.distance = $, W.coneCos = Math.cos(P.angle), W.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), W.decay = P.decay, n.spot[_] = W; const J = P.shadow; if (P.map && (n.spotLightMap[I] = P.map, I++, J.updateMatrices(P), P.castShadow && R++), n.spotLightMatrix[_] = J.matrix, P.castShadow) { const H = t.get(P); H.shadowIntensity = J.intensity, H.shadowBias = J.bias, H.shadowNormalBias = J.normalBias, H.shadowRadius = J.radius, H.shadowMapSize = J.mapSize, n.spotShadow[_] = H, n.spotShadowMap[_] = K, b++ } _++ } else if (P.isRectAreaLight) { const W = e.get(P); W.color.copy(G).multiplyScalar(k), W.halfWidth.set(P.width * .5, 0, 0), W.halfHeight.set(0, P.height * .5, 0), n.rectArea[m] = W, m++ } else if (P.isPointLight) { const W = e.get(P); if (W.color.copy(P.color).multiplyScalar(P.intensity), W.distance = P.distance, W.decay = P.decay, P.castShadow) { const J = P.shadow, H = t.get(P); H.shadowIntensity = J.intensity, H.shadowBias = J.bias, H.shadowNormalBias = J.normalBias, H.shadowRadius = J.radius, H.shadowMapSize = J.mapSize, H.shadowCameraNear = J.camera.near, H.shadowCameraFar = J.camera.far, n.pointShadow[g] = H, n.pointShadowMap[g] = K, n.pointShadowMatrix[g] = P.shadow.matrix, v++ } n.point[g] = W, g++ } else if (P.isHemisphereLight) { const W = e.get(P); W.skyColor.copy(P.color).multiplyScalar(k), W.groundColor.copy(P.groundColor).multiplyScalar(k), n.hemi[f] = W, f++ } } m > 0 && (s.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = re.LTC_FLOAT_1, n.rectAreaLTC2 = re.LTC_FLOAT_2) : (n.rectAreaLTC1 = re.LTC_HALF_1, n.rectAreaLTC2 = re.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d; const F = n.hash; (F.directionalLength !== p || F.pointLength !== g || F.spotLength !== _ || F.rectAreaLength !== m || F.hemiLength !== f || F.numDirectionalShadows !== y || F.numPointShadows !== v || F.numSpotShadows !== b || F.numSpotMaps !== I || F.numLightProbes !== w) && (n.directional.length = p, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = f, n.directionalShadow.length = y, n.directionalShadowMap.length = y, n.pointShadow.length = v, n.pointShadowMap.length = v, n.spotShadow.length = b, n.spotShadowMap.length = b, n.directionalShadowMatrix.length = y, n.pointShadowMatrix.length = v, n.spotLightMatrix.length = b + I - R, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = R, n.numLightProbes = w, F.directionalLength = p, F.pointLength = g, F.spotLength = _, F.rectAreaLength = m, F.hemiLength = f, F.numDirectionalShadows = y, F.numPointShadows = v, F.numSpotShadows = b, F.numSpotMaps = I, F.numLightProbes = w, n.version = s_++) } function l(c, h) { let u = 0, d = 0, p = 0, g = 0, _ = 0; const m = h.matrixWorldInverse; for (let f = 0, y = c.length; f < y; f++) { const v = c[f]; if (v.isDirectionalLight) { const b = n.directional[u]; b.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), b.direction.sub(i), b.direction.transformDirection(m), u++ } else if (v.isSpotLight) { const b = n.spot[p]; b.position.setFromMatrixPosition(v.matrixWorld), b.position.applyMatrix4(m), b.direction.setFromMatrixPosition(v.matrixWorld), i.setFromMatrixPosition(v.target.matrixWorld), b.direction.sub(i), b.direction.transformDirection(m), p++ } else if (v.isRectAreaLight) { const b = n.rectArea[g]; b.position.setFromMatrixPosition(v.matrixWorld), b.position.applyMatrix4(m), o.identity(), r.copy(v.matrixWorld), r.premultiply(m), o.extractRotation(r), b.halfWidth.set(v.width * .5, 0, 0), b.halfHeight.set(0, v.height * .5, 0), b.halfWidth.applyMatrix4(o), b.halfHeight.applyMatrix4(o), g++ } else if (v.isPointLight) { const b = n.point[d]; b.position.setFromMatrixPosition(v.matrixWorld), b.position.applyMatrix4(m), d++ } else if (v.isHemisphereLight) { const b = n.hemi[_]; b.direction.setFromMatrixPosition(v.matrixWorld), b.direction.transformDirection(m), _++ } } } return { setup: a, setupView: l, state: n } } function $l(s) { const e = new o_(s), t = [], n = []; function i(h) { c.camera = h, t.length = 0, n.length = 0 } function r(h) { t.push(h) } function o(h) { n.push(h) } function a() { e.setup(t) } function l(h) { e.setupView(t, h) } const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} }; return { init: i, state: c, setupLights: a, setupLightsView: l, pushLight: r, pushShadow: o } } function a_(s) { let e = new WeakMap; function t(i, r = 0) { const o = e.get(i); let a; return o === void 0 ? (a = new $l(s), e.set(i, [a])) : r >= o.length ? (a = new $l(s), o.push(a)) : a = o[r], a } function n() { e = new WeakMap } return { get: t, dispose: n } } class wh extends dn { constructor(e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = Xu, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this } } class Ah extends dn { constructor(e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } } const l_ = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, c_ = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`; function h_(s, e, t) { let n = new La; const i = new le, r = new le, o = new tt, a = new wh({ depthPacking: ah }), l = new Ah, c = {}, h = t.maxTextureSize, u = { [Pn]: Ot, [Ot]: Pn, [Xt]: Xt }, d = new sn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new le }, radius: { value: 4 } }, vertexShader: l_, fragmentShader: c_ }), p = d.clone(); p.defines.HORIZONTAL_PASS = 1; const g = new rn; g.setAttribute("position", new Dt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const _ = new Ut(g, d), m = this; this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Yc; let f = this.type; this.render = function (R, w, F) { if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || R.length === 0) return; const E = s.getRenderTarget(), S = s.getActiveCubeFace(), P = s.getActiveMipmapLevel(), G = s.state; G.setBlending(Cn), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(!0), G.setScissorTest(!1); const k = f !== Tn && this.type === Tn, $ = f === Tn && this.type !== Tn; for (let K = 0, W = R.length; K < W; K++) { const J = R[K], H = J.shadow; if (H === void 0) { console.warn("THREE.WebGLShadowMap:", J, "has no shadow."); continue } if (H.autoUpdate === !1 && H.needsUpdate === !1) continue; i.copy(H.mapSize); const ce = H.getFrameExtents(); if (i.multiply(ce), r.copy(H.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / ce.x), i.x = r.x * ce.x, H.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / ce.y), i.y = r.y * ce.y, H.mapSize.y = r.y)), H.map === null || k === !0 || $ === !0) { const ve = this.type !== Tn ? { minFilter: At, magFilter: At } : {}; H.map !== null && H.map.dispose(), H.map = new Dn(i.x, i.y, ve), H.map.texture.name = J.name + ".shadowMap", H.camera.updateProjectionMatrix() } s.setRenderTarget(H.map), s.clear(); const fe = H.getViewportCount(); for (let ve = 0; ve < fe; ve++) { const He = H.getViewport(ve); o.set(r.x * He.x, r.y * He.y, r.x * He.z, r.y * He.w), G.viewport(o), H.updateMatrices(J, ve), n = H.getFrustum(), b(w, F, H.camera, J, this.type) } H.isPointLightShadow !== !0 && this.type === Tn && y(H, F), H.needsUpdate = !1 } f = this.type, m.needsUpdate = !1, s.setRenderTarget(E, S, P) }; function y(R, w) { const F = e.update(_); d.defines.VSM_SAMPLES !== R.blurSamples && (d.defines.VSM_SAMPLES = R.blurSamples, p.defines.VSM_SAMPLES = R.blurSamples, d.needsUpdate = !0, p.needsUpdate = !0), R.mapPass === null && (R.mapPass = new Dn(i.x, i.y)), d.uniforms.shadow_pass.value = R.map.texture, d.uniforms.resolution.value = R.mapSize, d.uniforms.radius.value = R.radius, s.setRenderTarget(R.mapPass), s.clear(), s.renderBufferDirect(w, null, F, d, _, null), p.uniforms.shadow_pass.value = R.mapPass.texture, p.uniforms.resolution.value = R.mapSize, p.uniforms.radius.value = R.radius, s.setRenderTarget(R.map), s.clear(), s.renderBufferDirect(w, null, F, p, _, null) } function v(R, w, F, E) { let S = null; const P = F.isPointLight === !0 ? R.customDistanceMaterial : R.customDepthMaterial; if (P !== void 0) S = P; else if (S = F.isPointLight === !0 ? l : a, s.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) { const G = S.uuid, k = w.uuid; let $ = c[G]; $ === void 0 && ($ = {}, c[G] = $); let K = $[k]; K === void 0 && (K = S.clone(), $[k] = K, w.addEventListener("dispose", I)), S = K } if (S.visible = w.visible, S.wireframe = w.wireframe, E === Tn ? S.side = w.shadowSide !== null ? w.shadowSide : w.side : S.side = w.shadowSide !== null ? w.shadowSide : u[w.side], S.alphaMap = w.alphaMap, S.alphaTest = w.alphaTest, S.map = w.map, S.clipShadows = w.clipShadows, S.clippingPlanes = w.clippingPlanes, S.clipIntersection = w.clipIntersection, S.displacementMap = w.displacementMap, S.displacementScale = w.displacementScale, S.displacementBias = w.displacementBias, S.wireframeLinewidth = w.wireframeLinewidth, S.linewidth = w.linewidth, F.isPointLight === !0 && S.isMeshDistanceMaterial === !0) { const G = s.properties.get(S); G.light = F } return S } function b(R, w, F, E, S) { if (R.visible === !1) return; if (R.layers.test(w.layers) && (R.isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && S === Tn) && (!R.frustumCulled || n.intersectsObject(R))) { R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, R.matrixWorld); const k = e.update(R), $ = R.material; if (Array.isArray($)) { const K = k.groups; for (let W = 0, J = K.length; W < J; W++) { const H = K[W], ce = $[H.materialIndex]; if (ce && ce.visible) { const fe = v(R, ce, E, S); R.onBeforeShadow(s, R, w, F, k, fe, H), s.renderBufferDirect(F, null, k, fe, R, H), R.onAfterShadow(s, R, w, F, k, fe, H) } } } else if ($.visible) { const K = v(R, $, E, S); R.onBeforeShadow(s, R, w, F, k, K, null), s.renderBufferDirect(F, null, k, K, R, null), R.onAfterShadow(s, R, w, F, k, K, null) } } const G = R.children; for (let k = 0, $ = G.length; k < $; k++)b(G[k], w, F, E, S) } function I(R) { R.target.removeEventListener("dispose", I); for (const F in c) { const E = c[F], S = R.target.uuid; S in E && (E[S].dispose(), delete E[S]) } } } function u_(s) { function e() { let L = !1; const ne = new tt; let X = null; const Y = new tt(0, 0, 0, 0); return { setMask: function (se) { X !== se && !L && (s.colorMask(se, se, se, se), X = se) }, setLocked: function (se) { L = se }, setClear: function (se, Ee, Ge, ut, yt) { yt === !0 && (se *= ut, Ee *= ut, Ge *= ut), ne.set(se, Ee, Ge, ut), Y.equals(ne) === !1 && (s.clearColor(se, Ee, Ge, ut), Y.copy(ne)) }, reset: function () { L = !1, X = null, Y.set(-1, 0, 0, 0) } } } function t() { let L = !1, ne = null, X = null, Y = null; return { setTest: function (se) { se ? _e(s.DEPTH_TEST) : ue(s.DEPTH_TEST) }, setMask: function (se) { ne !== se && !L && (s.depthMask(se), ne = se) }, setFunc: function (se) { if (X !== se) { switch (se) { case wu: s.depthFunc(s.NEVER); break; case Au: s.depthFunc(s.ALWAYS); break; case Ru: s.depthFunc(s.LESS); break; case yr: s.depthFunc(s.LEQUAL); break; case Cu: s.depthFunc(s.EQUAL); break; case Pu: s.depthFunc(s.GEQUAL); break; case Lu: s.depthFunc(s.GREATER); break; case Du: s.depthFunc(s.NOTEQUAL); break; default: s.depthFunc(s.LEQUAL) }X = se } }, setLocked: function (se) { L = se }, setClear: function (se) { Y !== se && (s.clearDepth(se), Y = se) }, reset: function () { L = !1, ne = null, X = null, Y = null } } } function n() { let L = !1, ne = null, X = null, Y = null, se = null, Ee = null, Ge = null, ut = null, yt = null; return { setTest: function (Xe) { L || (Xe ? _e(s.STENCIL_TEST) : ue(s.STENCIL_TEST)) }, setMask: function (Xe) { ne !== Xe && !L && (s.stencilMask(Xe), ne = Xe) }, setFunc: function (Xe, vn, ln) { (X !== Xe || Y !== vn || se !== ln) && (s.stencilFunc(Xe, vn, ln), X = Xe, Y = vn, se = ln) }, setOp: function (Xe, vn, ln) { (Ee !== Xe || Ge !== vn || ut !== ln) && (s.stencilOp(Xe, vn, ln), Ee = Xe, Ge = vn, ut = ln) }, setLocked: function (Xe) { L = Xe }, setClear: function (Xe) { yt !== Xe && (s.clearStencil(Xe), yt = Xe) }, reset: function () { L = !1, ne = null, X = null, Y = null, se = null, Ee = null, Ge = null, ut = null, yt = null } } } const i = new e, r = new t, o = new n, a = new WeakMap, l = new WeakMap; let c = {}, h = {}, u = new WeakMap, d = [], p = null, g = !1, _ = null, m = null, f = null, y = null, v = null, b = null, I = null, R = new Se(0, 0, 0), w = 0, F = !1, E = null, S = null, P = null, G = null, k = null; const $ = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let K = !1, W = 0; const J = s.getParameter(s.VERSION); J.indexOf("WebGL") !== -1 ? (W = parseFloat(/^WebGL (\d)/.exec(J)[1]), K = W >= 1) : J.indexOf("OpenGL ES") !== -1 && (W = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]), K = W >= 2); let H = null, ce = {}; const fe = s.getParameter(s.SCISSOR_BOX), ve = s.getParameter(s.VIEWPORT), He = new tt().fromArray(fe), Je = new tt().fromArray(ve); function V(L, ne, X, Y) { const se = new Uint8Array(4), Ee = s.createTexture(); s.bindTexture(L, Ee), s.texParameteri(L, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(L, s.TEXTURE_MAG_FILTER, s.NEAREST); for (let Ge = 0; Ge < X; Ge++)L === s.TEXTURE_3D || L === s.TEXTURE_2D_ARRAY ? s.texImage3D(ne, 0, s.RGBA, 1, 1, Y, 0, s.RGBA, s.UNSIGNED_BYTE, se) : s.texImage2D(ne + Ge, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, se); return Ee } const ee = {}; ee[s.TEXTURE_2D] = V(s.TEXTURE_2D, s.TEXTURE_2D, 1), ee[s.TEXTURE_CUBE_MAP] = V(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), ee[s.TEXTURE_2D_ARRAY] = V(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), ee[s.TEXTURE_3D] = V(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), i.setClear(0, 0, 0, 1), r.setClear(1), o.setClear(0), _e(s.DEPTH_TEST), r.setFunc(yr), Qe(!1), Me(Ja), _e(s.CULL_FACE), ct(Cn); function _e(L) { c[L] !== !0 && (s.enable(L), c[L] = !0) } function ue(L) { c[L] !== !1 && (s.disable(L), c[L] = !1) } function we(L, ne) { return h[L] !== ne ? (s.bindFramebuffer(L, ne), h[L] = ne, L === s.DRAW_FRAMEBUFFER && (h[s.FRAMEBUFFER] = ne), L === s.FRAMEBUFFER && (h[s.DRAW_FRAMEBUFFER] = ne), !0) : !1 } function Le(L, ne) { let X = d, Y = !1; if (L) { X = u.get(ne), X === void 0 && (X = [], u.set(ne, X)); const se = L.textures; if (X.length !== se.length || X[0] !== s.COLOR_ATTACHMENT0) { for (let Ee = 0, Ge = se.length; Ee < Ge; Ee++)X[Ee] = s.COLOR_ATTACHMENT0 + Ee; X.length = se.length, Y = !0 } } else X[0] !== s.BACK && (X[0] = s.BACK, Y = !0); Y && s.drawBuffers(X) } function ke(L) { return p !== L ? (s.useProgram(L), p = L, !0) : !1 } const ot = { [li]: s.FUNC_ADD, [cu]: s.FUNC_SUBTRACT, [hu]: s.FUNC_REVERSE_SUBTRACT }; ot[uu] = s.MIN, ot[du] = s.MAX; const A = { [fu]: s.ZERO, [pu]: s.ONE, [mu]: s.SRC_COLOR, [Co]: s.SRC_ALPHA, [Mu]: s.SRC_ALPHA_SATURATE, [xu]: s.DST_COLOR, [_u]: s.DST_ALPHA, [gu]: s.ONE_MINUS_SRC_COLOR, [Po]: s.ONE_MINUS_SRC_ALPHA, [yu]: s.ONE_MINUS_DST_COLOR, [vu]: s.ONE_MINUS_DST_ALPHA, [Su]: s.CONSTANT_COLOR, [bu]: s.ONE_MINUS_CONSTANT_COLOR, [Eu]: s.CONSTANT_ALPHA, [Tu]: s.ONE_MINUS_CONSTANT_ALPHA }; function ct(L, ne, X, Y, se, Ee, Ge, ut, yt, Xe) { if (L === Cn) { g === !0 && (ue(s.BLEND), g = !1); return } if (g === !1 && (_e(s.BLEND), g = !0), L !== lu) { if (L !== _ || Xe !== F) { if ((m !== li || v !== li) && (s.blendEquation(s.FUNC_ADD), m = li, v = li), Xe) switch (L) { case zi: s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA); break; case Qa: s.blendFunc(s.ONE, s.ONE); break; case el: s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE); break; case tl: s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA); break; default: console.error("THREE.WebGLState: Invalid blending: ", L); break } else switch (L) { case zi: s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA); break; case Qa: s.blendFunc(s.SRC_ALPHA, s.ONE); break; case el: s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE); break; case tl: s.blendFunc(s.ZERO, s.SRC_COLOR); break; default: console.error("THREE.WebGLState: Invalid blending: ", L); break }f = null, y = null, b = null, I = null, R.set(0, 0, 0), w = 0, _ = L, F = Xe } return } se = se || ne, Ee = Ee || X, Ge = Ge || Y, (ne !== m || se !== v) && (s.blendEquationSeparate(ot[ne], ot[se]), m = ne, v = se), (X !== f || Y !== y || Ee !== b || Ge !== I) && (s.blendFuncSeparate(A[X], A[Y], A[Ee], A[Ge]), f = X, y = Y, b = Ee, I = Ge), (ut.equals(R) === !1 || yt !== w) && (s.blendColor(ut.r, ut.g, ut.b, yt), R.copy(ut), w = yt), _ = L, F = !1 } function Ke(L, ne) { L.side === Xt ? ue(s.CULL_FACE) : _e(s.CULL_FACE); let X = L.side === Ot; ne && (X = !X), Qe(X), L.blending === zi && L.transparent === !1 ? ct(Cn) : ct(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.blendColor, L.blendAlpha, L.premultipliedAlpha), r.setFunc(L.depthFunc), r.setTest(L.depthTest), r.setMask(L.depthWrite), i.setMask(L.colorWrite); const Y = L.stencilWrite; o.setTest(Y), Y && (o.setMask(L.stencilWriteMask), o.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), o.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Ce(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? _e(s.SAMPLE_ALPHA_TO_COVERAGE) : ue(s.SAMPLE_ALPHA_TO_COVERAGE) } function Qe(L) { E !== L && (L ? s.frontFace(s.CW) : s.frontFace(s.CCW), E = L) } function Me(L) { L !== ru ? (_e(s.CULL_FACE), L !== S && (L === Ja ? s.cullFace(s.BACK) : L === ou ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : ue(s.CULL_FACE), S = L } function ht(L) { L !== P && (K && s.lineWidth(L), P = L) } function Ce(L, ne, X) { L ? (_e(s.POLYGON_OFFSET_FILL), (G !== ne || k !== X) && (s.polygonOffset(ne, X), G = ne, k = X)) : ue(s.POLYGON_OFFSET_FILL) } function De(L) { L ? _e(s.SCISSOR_TEST) : ue(s.SCISSOR_TEST) } function T(L) { L === void 0 && (L = s.TEXTURE0 + $ - 1), H !== L && (s.activeTexture(L), H = L) } function x(L, ne, X) { X === void 0 && (H === null ? X = s.TEXTURE0 + $ - 1 : X = H); let Y = ce[X]; Y === void 0 && (Y = { type: void 0, texture: void 0 }, ce[X] = Y), (Y.type !== L || Y.texture !== ne) && (H !== X && (s.activeTexture(X), H = X), s.bindTexture(L, ne || ee[L]), Y.type = L, Y.texture = ne) } function z() { const L = ce[H]; L !== void 0 && L.type !== void 0 && (s.bindTexture(L.type, null), L.type = void 0, L.texture = void 0) } function q() { try { s.compressedTexImage2D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function Q() { try { s.compressedTexImage3D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function Z() { try { s.texSubImage2D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function be() { try { s.texSubImage3D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function oe() { try { s.compressedTexSubImage2D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function de() { try { s.compressedTexSubImage3D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function Ue() { try { s.texStorage2D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function te() { try { s.texStorage3D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function he() { try { s.texImage2D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function Ve() { try { s.texImage3D.apply(s, arguments) } catch (L) { console.error("THREE.WebGLState:", L) } } function Re(L) { He.equals(L) === !1 && (s.scissor(L.x, L.y, L.z, L.w), He.copy(L)) } function pe(L) { Je.equals(L) === !1 && (s.viewport(L.x, L.y, L.z, L.w), Je.copy(L)) } function Pe(L, ne) { let X = l.get(ne); X === void 0 && (X = new WeakMap, l.set(ne, X)); let Y = X.get(L); Y === void 0 && (Y = s.getUniformBlockIndex(ne, L.name), X.set(L, Y)) } function Fe(L, ne) { const Y = l.get(ne).get(L); a.get(ne) !== Y && (s.uniformBlockBinding(ne, Y, L.__bindingPointIndex), a.set(ne, Y)) } function rt() { s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(!0, !0, !0, !0), s.clearColor(0, 0, 0, 0), s.depthMask(!0), s.depthFunc(s.LESS), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), c = {}, H = null, ce = {}, h = {}, u = new WeakMap, d = [], p = null, g = !1, _ = null, m = null, f = null, y = null, v = null, b = null, I = null, R = new Se(0, 0, 0), w = 0, F = !1, E = null, S = null, P = null, G = null, k = null, He.set(0, 0, s.canvas.width, s.canvas.height), Je.set(0, 0, s.canvas.width, s.canvas.height), i.reset(), r.reset(), o.reset() } return { buffers: { color: i, depth: r, stencil: o }, enable: _e, disable: ue, bindFramebuffer: we, drawBuffers: Le, useProgram: ke, setBlending: ct, setMaterial: Ke, setFlipSided: Qe, setCullFace: Me, setLineWidth: ht, setPolygonOffset: Ce, setScissorTest: De, activeTexture: T, bindTexture: x, unbindTexture: z, compressedTexImage2D: q, compressedTexImage3D: Q, texImage2D: he, texImage3D: Ve, updateUBOMapping: Pe, uniformBlockBinding: Fe, texStorage2D: Ue, texStorage3D: te, texSubImage2D: Z, texSubImage3D: be, compressedTexSubImage2D: oe, compressedTexSubImage3D: de, scissor: Re, viewport: pe, reset: rt } } function Zl(s, e, t, n) { const i = d_(n); switch (t) { case eh: return s * e; case nh: return s * e; case ih: return s * e * 2; case Ea: return s * e / i.components * i.byteLength; case Ta: return s * e / i.components * i.byteLength; case sh: return s * e * 2 / i.components * i.byteLength; case wa: return s * e * 2 / i.components * i.byteLength; case th: return s * e * 3 / i.components * i.byteLength; case jt: return s * e * 4 / i.components * i.byteLength; case Aa: return s * e * 4 / i.components * i.byteLength; case pr: case mr: return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8; case gr: case _r: return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16; case No: case Oo: return Math.max(s, 16) * Math.max(e, 8) / 4; case Io: case Uo: return Math.max(s, 8) * Math.max(e, 8) / 2; case Fo: case Bo: return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8; case zo: return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16; case ko: return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16; case Ho: return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16; case Vo: return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16; case Go: return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16; case Wo: return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16; case Xo: return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16; case jo: return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16; case Yo: return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16; case qo: return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16; case Ko: return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16; case $o: return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16; case Zo: return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16; case Jo: return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16; case Qo: return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16; case vr: case ea: case ta: return Math.ceil(s / 4) * Math.ceil(e / 4) * 16; case rh: case na: return Math.ceil(s / 4) * Math.ceil(e / 4) * 8; case ia: case sa: return Math.ceil(s / 4) * Math.ceil(e / 4) * 16 }throw new Error(`Unable to determine texture byte length for ${t} format.`) } function d_(s) { switch (s) { case Ln: case Zc: return { byteLength: 1, components: 1 }; case As: case Jc: case es: return { byteLength: 2, components: 1 }; case Sa: case ba: return { byteLength: 2, components: 4 }; case hi: case Ma: case Qt: return { byteLength: 4, components: 1 }; case Qc: return { byteLength: 4, components: 3 } }throw new Error(`Unknown texture type ${s}.`) } function f_(s, e, t, n, i, r, o) { const a = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), c = new le, h = new WeakMap; let u; const d = new WeakMap; let p = !1; try { p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch { } function g(T, x) { return p ? new OffscreenCanvas(T, x) : Ps("canvas") } function _(T, x, z) { let q = 1; const Q = De(T); if ((Q.width > z || Q.height > z) && (q = z / Math.max(Q.width, Q.height)), q < 1) if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) { const Z = Math.floor(q * Q.width), be = Math.floor(q * Q.height); u === void 0 && (u = g(Z, be)); const oe = x ? g(Z, be) : u; return oe.width = Z, oe.height = be, oe.getContext("2d").drawImage(T, 0, 0, Z, be), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Q.width + "x" + Q.height + ") to (" + Z + "x" + be + ")."), oe } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Q.width + "x" + Q.height + ")."), T; return T } function m(T) { return T.generateMipmaps && T.minFilter !== At && T.minFilter !== Ht } function f(T) { s.generateMipmap(T) } function y(T, x, z, q, Q = !1) { if (T !== null) { if (s[T] !== void 0) return s[T]; console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'") } let Z = x; if (x === s.RED && (z === s.FLOAT && (Z = s.R32F), z === s.HALF_FLOAT && (Z = s.R16F), z === s.UNSIGNED_BYTE && (Z = s.R8)), x === s.RED_INTEGER && (z === s.UNSIGNED_BYTE && (Z = s.R8UI), z === s.UNSIGNED_SHORT && (Z = s.R16UI), z === s.UNSIGNED_INT && (Z = s.R32UI), z === s.BYTE && (Z = s.R8I), z === s.SHORT && (Z = s.R16I), z === s.INT && (Z = s.R32I)), x === s.RG && (z === s.FLOAT && (Z = s.RG32F), z === s.HALF_FLOAT && (Z = s.RG16F), z === s.UNSIGNED_BYTE && (Z = s.RG8)), x === s.RG_INTEGER && (z === s.UNSIGNED_BYTE && (Z = s.RG8UI), z === s.UNSIGNED_SHORT && (Z = s.RG16UI), z === s.UNSIGNED_INT && (Z = s.RG32UI), z === s.BYTE && (Z = s.RG8I), z === s.SHORT && (Z = s.RG16I), z === s.INT && (Z = s.RG32I)), x === s.RGB && z === s.UNSIGNED_INT_5_9_9_9_REV && (Z = s.RGB9_E5), x === s.RGBA) { const be = Q ? Sr : We.getTransfer(q); z === s.FLOAT && (Z = s.RGBA32F), z === s.HALF_FLOAT && (Z = s.RGBA16F), z === s.UNSIGNED_BYTE && (Z = be === st ? s.SRGB8_ALPHA8 : s.RGBA8), z === s.UNSIGNED_SHORT_4_4_4_4 && (Z = s.RGBA4), z === s.UNSIGNED_SHORT_5_5_5_1 && (Z = s.RGB5_A1) } return (Z === s.R16F || Z === s.R32F || Z === s.RG16F || Z === s.RG32F || Z === s.RGBA16F || Z === s.RGBA32F) && e.get("EXT_color_buffer_float"), Z } function v(T, x) { let z; return T ? x === null || x === hi || x === Yi ? z = s.DEPTH24_STENCIL8 : x === Qt ? z = s.DEPTH32F_STENCIL8 : x === As && (z = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === hi || x === Yi ? z = s.DEPTH_COMPONENT24 : x === Qt ? z = s.DEPTH_COMPONENT32F : x === As && (z = s.DEPTH_COMPONENT16), z } function b(T, x) { return m(T) === !0 || T.isFramebufferTexture && T.minFilter !== At && T.minFilter !== Ht ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1 } function I(T) { const x = T.target; x.removeEventListener("dispose", I), w(x), x.isVideoTexture && h.delete(x) } function R(T) { const x = T.target; x.removeEventListener("dispose", R), E(x) } function w(T) { const x = n.get(T); if (x.__webglInit === void 0) return; const z = T.source, q = d.get(z); if (q) { const Q = q[x.__cacheKey]; Q.usedTimes--, Q.usedTimes === 0 && F(T), Object.keys(q).length === 0 && d.delete(z) } n.remove(T) } function F(T) { const x = n.get(T); s.deleteTexture(x.__webglTexture); const z = T.source, q = d.get(z); delete q[x.__cacheKey], o.memory.textures-- } function E(T) { const x = n.get(T); if (T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget) for (let q = 0; q < 6; q++) { if (Array.isArray(x.__webglFramebuffer[q])) for (let Q = 0; Q < x.__webglFramebuffer[q].length; Q++)s.deleteFramebuffer(x.__webglFramebuffer[q][Q]); else s.deleteFramebuffer(x.__webglFramebuffer[q]); x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer[q]) } else { if (Array.isArray(x.__webglFramebuffer)) for (let q = 0; q < x.__webglFramebuffer.length; q++)s.deleteFramebuffer(x.__webglFramebuffer[q]); else s.deleteFramebuffer(x.__webglFramebuffer); if (x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && s.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer) for (let q = 0; q < x.__webglColorRenderbuffer.length; q++)x.__webglColorRenderbuffer[q] && s.deleteRenderbuffer(x.__webglColorRenderbuffer[q]); x.__webglDepthRenderbuffer && s.deleteRenderbuffer(x.__webglDepthRenderbuffer) } const z = T.textures; for (let q = 0, Q = z.length; q < Q; q++) { const Z = n.get(z[q]); Z.__webglTexture && (s.deleteTexture(Z.__webglTexture), o.memory.textures--), n.remove(z[q]) } n.remove(T) } let S = 0; function P() { S = 0 } function G() { const T = S; return T >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + i.maxTextures), S += 1, T } function k(T) { const x = []; return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join() } function $(T, x) { const z = n.get(T); if (T.isVideoTexture && ht(T), T.isRenderTargetTexture === !1 && T.version > 0 && z.__version !== T.version) { const q = T.image; if (q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found."); else if (q.complete === !1) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete"); else { Je(z, T, x); return } } t.bindTexture(s.TEXTURE_2D, z.__webglTexture, s.TEXTURE0 + x) } function K(T, x) { const z = n.get(T); if (T.version > 0 && z.__version !== T.version) { Je(z, T, x); return } t.bindTexture(s.TEXTURE_2D_ARRAY, z.__webglTexture, s.TEXTURE0 + x) } function W(T, x) { const z = n.get(T); if (T.version > 0 && z.__version !== T.version) { Je(z, T, x); return } t.bindTexture(s.TEXTURE_3D, z.__webglTexture, s.TEXTURE0 + x) } function J(T, x) { const z = n.get(T); if (T.version > 0 && z.__version !== T.version) { V(z, T, x); return } t.bindTexture(s.TEXTURE_CUBE_MAP, z.__webglTexture, s.TEXTURE0 + x) } const H = { [ji]: s.REPEAT, [Wn]: s.CLAMP_TO_EDGE, [Mr]: s.MIRRORED_REPEAT }, ce = { [At]: s.NEAREST, [$c]: s.NEAREST_MIPMAP_NEAREST, [vs]: s.NEAREST_MIPMAP_LINEAR, [Ht]: s.LINEAR, [fr]: s.LINEAR_MIPMAP_NEAREST, [An]: s.LINEAR_MIPMAP_LINEAR }, fe = { [Yu]: s.NEVER, [Qu]: s.ALWAYS, [qu]: s.LESS, [ch]: s.LEQUAL, [Ku]: s.EQUAL, [Ju]: s.GEQUAL, [$u]: s.GREATER, [Zu]: s.NOTEQUAL }; function ve(T, x) { if (x.type === Qt && e.has("OES_texture_float_linear") === !1 && (x.magFilter === Ht || x.magFilter === fr || x.magFilter === vs || x.magFilter === An || x.minFilter === Ht || x.minFilter === fr || x.minFilter === vs || x.minFilter === An) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(T, s.TEXTURE_WRAP_S, H[x.wrapS]), s.texParameteri(T, s.TEXTURE_WRAP_T, H[x.wrapT]), (T === s.TEXTURE_3D || T === s.TEXTURE_2D_ARRAY) && s.texParameteri(T, s.TEXTURE_WRAP_R, H[x.wrapR]), s.texParameteri(T, s.TEXTURE_MAG_FILTER, ce[x.magFilter]), s.texParameteri(T, s.TEXTURE_MIN_FILTER, ce[x.minFilter]), x.compareFunction && (s.texParameteri(T, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(T, s.TEXTURE_COMPARE_FUNC, fe[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { if (x.magFilter === At || x.minFilter !== vs && x.minFilter !== An || x.type === Qt && e.has("OES_texture_float_linear") === !1) return; if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) { const z = e.get("EXT_texture_filter_anisotropic"); s.texParameterf(T, z.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy } } } function He(T, x) { let z = !1; T.__webglInit === void 0 && (T.__webglInit = !0, x.addEventListener("dispose", I)); const q = x.source; let Q = d.get(q); Q === void 0 && (Q = {}, d.set(q, Q)); const Z = k(x); if (Z !== T.__cacheKey) { Q[Z] === void 0 && (Q[Z] = { texture: s.createTexture(), usedTimes: 0 }, o.memory.textures++, z = !0), Q[Z].usedTimes++; const be = Q[T.__cacheKey]; be !== void 0 && (Q[T.__cacheKey].usedTimes--, be.usedTimes === 0 && F(x)), T.__cacheKey = Z, T.__webglTexture = Q[Z].texture } return z } function Je(T, x, z) { let q = s.TEXTURE_2D; (x.isDataArrayTexture || x.isCompressedArrayTexture) && (q = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (q = s.TEXTURE_3D); const Q = He(T, x), Z = x.source; t.bindTexture(q, T.__webglTexture, s.TEXTURE0 + z); const be = n.get(Z); if (Z.version !== be.__version || Q === !0) { t.activeTexture(s.TEXTURE0 + z); const oe = We.getPrimaries(We.workingColorSpace), de = x.colorSpace === Gn ? null : We.getPrimaries(x.colorSpace), Ue = x.colorSpace === Gn || oe === de ? s.NONE : s.BROWSER_DEFAULT_WEBGL; s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, Ue); let te = _(x.image, !1, i.maxTextureSize); te = Ce(x, te); const he = r.convert(x.format, x.colorSpace), Ve = r.convert(x.type); let Re = y(x.internalFormat, he, Ve, x.colorSpace, x.isVideoTexture); ve(q, x); let pe; const Pe = x.mipmaps, Fe = x.isVideoTexture !== !0, rt = be.__version === void 0 || Q === !0, L = Z.dataReady, ne = b(x, te); if (x.isDepthTexture) Re = v(x.format === qi, x.type), rt && (Fe ? t.texStorage2D(s.TEXTURE_2D, 1, Re, te.width, te.height) : t.texImage2D(s.TEXTURE_2D, 0, Re, te.width, te.height, 0, he, Ve, null)); else if (x.isDataTexture) if (Pe.length > 0) { Fe && rt && t.texStorage2D(s.TEXTURE_2D, ne, Re, Pe[0].width, Pe[0].height); for (let X = 0, Y = Pe.length; X < Y; X++)pe = Pe[X], Fe ? L && t.texSubImage2D(s.TEXTURE_2D, X, 0, 0, pe.width, pe.height, he, Ve, pe.data) : t.texImage2D(s.TEXTURE_2D, X, Re, pe.width, pe.height, 0, he, Ve, pe.data); x.generateMipmaps = !1 } else Fe ? (rt && t.texStorage2D(s.TEXTURE_2D, ne, Re, te.width, te.height), L && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, te.width, te.height, he, Ve, te.data)) : t.texImage2D(s.TEXTURE_2D, 0, Re, te.width, te.height, 0, he, Ve, te.data); else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) { Fe && rt && t.texStorage3D(s.TEXTURE_2D_ARRAY, ne, Re, Pe[0].width, Pe[0].height, te.depth); for (let X = 0, Y = Pe.length; X < Y; X++)if (pe = Pe[X], x.format !== jt) if (he !== null) if (Fe) { if (L) if (x.layerUpdates.size > 0) { const se = Zl(pe.width, pe.height, x.format, x.type); for (const Ee of x.layerUpdates) { const Ge = pe.data.subarray(Ee * se / pe.data.BYTES_PER_ELEMENT, (Ee + 1) * se / pe.data.BYTES_PER_ELEMENT); t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, X, 0, 0, Ee, pe.width, pe.height, 1, he, Ge, 0, 0) } x.clearLayerUpdates() } else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, X, 0, 0, 0, pe.width, pe.height, te.depth, he, pe.data, 0, 0) } else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, X, Re, pe.width, pe.height, te.depth, 0, pe.data, 0, 0); else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"); else Fe ? L && t.texSubImage3D(s.TEXTURE_2D_ARRAY, X, 0, 0, 0, pe.width, pe.height, te.depth, he, Ve, pe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, X, Re, pe.width, pe.height, te.depth, 0, he, Ve, pe.data) } else { Fe && rt && t.texStorage2D(s.TEXTURE_2D, ne, Re, Pe[0].width, Pe[0].height); for (let X = 0, Y = Pe.length; X < Y; X++)pe = Pe[X], x.format !== jt ? he !== null ? Fe ? L && t.compressedTexSubImage2D(s.TEXTURE_2D, X, 0, 0, pe.width, pe.height, he, pe.data) : t.compressedTexImage2D(s.TEXTURE_2D, X, Re, pe.width, pe.height, 0, pe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Fe ? L && t.texSubImage2D(s.TEXTURE_2D, X, 0, 0, pe.width, pe.height, he, Ve, pe.data) : t.texImage2D(s.TEXTURE_2D, X, Re, pe.width, pe.height, 0, he, Ve, pe.data) } else if (x.isDataArrayTexture) if (Fe) { if (rt && t.texStorage3D(s.TEXTURE_2D_ARRAY, ne, Re, te.width, te.height, te.depth), L) if (x.layerUpdates.size > 0) { const X = Zl(te.width, te.height, x.format, x.type); for (const Y of x.layerUpdates) { const se = te.data.subarray(Y * X / te.data.BYTES_PER_ELEMENT, (Y + 1) * X / te.data.BYTES_PER_ELEMENT); t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, Y, te.width, te.height, 1, he, Ve, se) } x.clearLayerUpdates() } else t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, he, Ve, te.data) } else t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Re, te.width, te.height, te.depth, 0, he, Ve, te.data); else if (x.isData3DTexture) Fe ? (rt && t.texStorage3D(s.TEXTURE_3D, ne, Re, te.width, te.height, te.depth), L && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, he, Ve, te.data)) : t.texImage3D(s.TEXTURE_3D, 0, Re, te.width, te.height, te.depth, 0, he, Ve, te.data); else if (x.isFramebufferTexture) { if (rt) if (Fe) t.texStorage2D(s.TEXTURE_2D, ne, Re, te.width, te.height); else { let X = te.width, Y = te.height; for (let se = 0; se < ne; se++)t.texImage2D(s.TEXTURE_2D, se, Re, X, Y, 0, he, Ve, null), X >>= 1, Y >>= 1 } } else if (Pe.length > 0) { if (Fe && rt) { const X = De(Pe[0]); t.texStorage2D(s.TEXTURE_2D, ne, Re, X.width, X.height) } for (let X = 0, Y = Pe.length; X < Y; X++)pe = Pe[X], Fe ? L && t.texSubImage2D(s.TEXTURE_2D, X, 0, 0, he, Ve, pe) : t.texImage2D(s.TEXTURE_2D, X, Re, he, Ve, pe); x.generateMipmaps = !1 } else if (Fe) { if (rt) { const X = De(te); t.texStorage2D(s.TEXTURE_2D, ne, Re, X.width, X.height) } L && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, he, Ve, te) } else t.texImage2D(s.TEXTURE_2D, 0, Re, he, Ve, te); m(x) && f(q), be.__version = Z.version, x.onUpdate && x.onUpdate(x) } T.__version = x.version } function V(T, x, z) { if (x.image.length !== 6) return; const q = He(T, x), Q = x.source; t.bindTexture(s.TEXTURE_CUBE_MAP, T.__webglTexture, s.TEXTURE0 + z); const Z = n.get(Q); if (Q.version !== Z.__version || q === !0) { t.activeTexture(s.TEXTURE0 + z); const be = We.getPrimaries(We.workingColorSpace), oe = x.colorSpace === Gn ? null : We.getPrimaries(x.colorSpace), de = x.colorSpace === Gn || be === oe ? s.NONE : s.BROWSER_DEFAULT_WEBGL; s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, de); const Ue = x.isCompressedTexture || x.image[0].isCompressedTexture, te = x.image[0] && x.image[0].isDataTexture, he = []; for (let Y = 0; Y < 6; Y++)!Ue && !te ? he[Y] = _(x.image[Y], !0, i.maxCubemapSize) : he[Y] = te ? x.image[Y].image : x.image[Y], he[Y] = Ce(x, he[Y]); const Ve = he[0], Re = r.convert(x.format, x.colorSpace), pe = r.convert(x.type), Pe = y(x.internalFormat, Re, pe, x.colorSpace), Fe = x.isVideoTexture !== !0, rt = Z.__version === void 0 || q === !0, L = Q.dataReady; let ne = b(x, Ve); ve(s.TEXTURE_CUBE_MAP, x); let X; if (Ue) { Fe && rt && t.texStorage2D(s.TEXTURE_CUBE_MAP, ne, Pe, Ve.width, Ve.height); for (let Y = 0; Y < 6; Y++) { X = he[Y].mipmaps; for (let se = 0; se < X.length; se++) { const Ee = X[se]; x.format !== jt ? Re !== null ? Fe ? L && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se, 0, 0, Ee.width, Ee.height, Re, Ee.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se, Pe, Ee.width, Ee.height, 0, Ee.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Fe ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se, 0, 0, Ee.width, Ee.height, Re, pe, Ee.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se, Pe, Ee.width, Ee.height, 0, Re, pe, Ee.data) } } } else { if (X = x.mipmaps, Fe && rt) { X.length > 0 && ne++; const Y = De(he[0]); t.texStorage2D(s.TEXTURE_CUBE_MAP, ne, Pe, Y.width, Y.height) } for (let Y = 0; Y < 6; Y++)if (te) { Fe ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, he[Y].width, he[Y].height, Re, pe, he[Y].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Pe, he[Y].width, he[Y].height, 0, Re, pe, he[Y].data); for (let se = 0; se < X.length; se++) { const Ge = X[se].image[Y].image; Fe ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se + 1, 0, 0, Ge.width, Ge.height, Re, pe, Ge.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se + 1, Pe, Ge.width, Ge.height, 0, Re, pe, Ge.data) } } else { Fe ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, 0, 0, Re, pe, he[Y]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, 0, Pe, Re, pe, he[Y]); for (let se = 0; se < X.length; se++) { const Ee = X[se]; Fe ? L && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se + 1, 0, 0, Re, pe, Ee.image[Y]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + Y, se + 1, Pe, Re, pe, Ee.image[Y]) } } } m(x) && f(s.TEXTURE_CUBE_MAP), Z.__version = Q.version, x.onUpdate && x.onUpdate(x) } T.__version = x.version } function ee(T, x, z, q, Q, Z) { const be = r.convert(z.format, z.colorSpace), oe = r.convert(z.type), de = y(z.internalFormat, be, oe, z.colorSpace); if (!n.get(x).__hasExternalTextures) { const te = Math.max(1, x.width >> Z), he = Math.max(1, x.height >> Z); Q === s.TEXTURE_3D || Q === s.TEXTURE_2D_ARRAY ? t.texImage3D(Q, Z, de, te, he, x.depth, 0, be, oe, null) : t.texImage2D(Q, Z, de, te, he, 0, be, oe, null) } t.bindFramebuffer(s.FRAMEBUFFER, T), Me(x) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, q, Q, n.get(z).__webglTexture, 0, Qe(x)) : (Q === s.TEXTURE_2D || Q >= s.TEXTURE_CUBE_MAP_POSITIVE_X && Q <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, q, Q, n.get(z).__webglTexture, Z), t.bindFramebuffer(s.FRAMEBUFFER, null) } function _e(T, x, z) { if (s.bindRenderbuffer(s.RENDERBUFFER, T), x.depthBuffer) { const q = x.depthTexture, Q = q && q.isDepthTexture ? q.type : null, Z = v(x.stencilBuffer, Q), be = x.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, oe = Qe(x); Me(x) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, oe, Z, x.width, x.height) : z ? s.renderbufferStorageMultisample(s.RENDERBUFFER, oe, Z, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, Z, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, be, s.RENDERBUFFER, T) } else { const q = x.textures; for (let Q = 0; Q < q.length; Q++) { const Z = q[Q], be = r.convert(Z.format, Z.colorSpace), oe = r.convert(Z.type), de = y(Z.internalFormat, be, oe, Z.colorSpace), Ue = Qe(x); z && Me(x) === !1 ? s.renderbufferStorageMultisample(s.RENDERBUFFER, Ue, de, x.width, x.height) : Me(x) ? a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, Ue, de, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, de, x.width, x.height) } } s.bindRenderbuffer(s.RENDERBUFFER, null) } function ue(T, x) { if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(s.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture"); (!n.get(x.depthTexture).__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = !0), $(x.depthTexture, 0); const q = n.get(x.depthTexture).__webglTexture, Q = Qe(x); if (x.depthTexture.format === ki) Me(x) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, q, 0, Q) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, q, 0); else if (x.depthTexture.format === qi) Me(x) ? a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, q, 0, Q) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, q, 0); else throw new Error("Unknown depthTexture format") } function we(T) { const x = n.get(T), z = T.isWebGLCubeRenderTarget === !0; if (x.__boundDepthTexture !== T.depthTexture) { const q = T.depthTexture; if (x.__depthDisposeCallback && x.__depthDisposeCallback(), q) { const Q = () => { delete x.__boundDepthTexture, delete x.__depthDisposeCallback, q.removeEventListener("dispose", Q) }; q.addEventListener("dispose", Q), x.__depthDisposeCallback = Q } x.__boundDepthTexture = q } if (T.depthTexture && !x.__autoAllocateDepthBuffer) { if (z) throw new Error("target.depthTexture not supported in Cube render targets"); ue(x.__webglFramebuffer, T) } else if (z) { x.__webglDepthbuffer = []; for (let q = 0; q < 6; q++)if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[q]), x.__webglDepthbuffer[q] === void 0) x.__webglDepthbuffer[q] = s.createRenderbuffer(), _e(x.__webglDepthbuffer[q], T, !1); else { const Q = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Z = x.__webglDepthbuffer[q]; s.bindRenderbuffer(s.RENDERBUFFER, Z), s.framebufferRenderbuffer(s.FRAMEBUFFER, Q, s.RENDERBUFFER, Z) } } else if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0) x.__webglDepthbuffer = s.createRenderbuffer(), _e(x.__webglDepthbuffer, T, !1); else { const q = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Q = x.__webglDepthbuffer; s.bindRenderbuffer(s.RENDERBUFFER, Q), s.framebufferRenderbuffer(s.FRAMEBUFFER, q, s.RENDERBUFFER, Q) } t.bindFramebuffer(s.FRAMEBUFFER, null) } function Le(T, x, z) { const q = n.get(T); x !== void 0 && ee(q.__webglFramebuffer, T, T.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), z !== void 0 && we(T) } function ke(T) { const x = T.texture, z = n.get(T), q = n.get(x); T.addEventListener("dispose", R); const Q = T.textures, Z = T.isWebGLCubeRenderTarget === !0, be = Q.length > 1; if (be || (q.__webglTexture === void 0 && (q.__webglTexture = s.createTexture()), q.__version = x.version, o.memory.textures++), Z) { z.__webglFramebuffer = []; for (let oe = 0; oe < 6; oe++)if (x.mipmaps && x.mipmaps.length > 0) { z.__webglFramebuffer[oe] = []; for (let de = 0; de < x.mipmaps.length; de++)z.__webglFramebuffer[oe][de] = s.createFramebuffer() } else z.__webglFramebuffer[oe] = s.createFramebuffer() } else { if (x.mipmaps && x.mipmaps.length > 0) { z.__webglFramebuffer = []; for (let oe = 0; oe < x.mipmaps.length; oe++)z.__webglFramebuffer[oe] = s.createFramebuffer() } else z.__webglFramebuffer = s.createFramebuffer(); if (be) for (let oe = 0, de = Q.length; oe < de; oe++) { const Ue = n.get(Q[oe]); Ue.__webglTexture === void 0 && (Ue.__webglTexture = s.createTexture(), o.memory.textures++) } if (T.samples > 0 && Me(T) === !1) { z.__webglMultisampledFramebuffer = s.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, z.__webglMultisampledFramebuffer); for (let oe = 0; oe < Q.length; oe++) { const de = Q[oe]; z.__webglColorRenderbuffer[oe] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, z.__webglColorRenderbuffer[oe]); const Ue = r.convert(de.format, de.colorSpace), te = r.convert(de.type), he = y(de.internalFormat, Ue, te, de.colorSpace, T.isXRRenderTarget === !0), Ve = Qe(T); s.renderbufferStorageMultisample(s.RENDERBUFFER, Ve, he, T.width, T.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + oe, s.RENDERBUFFER, z.__webglColorRenderbuffer[oe]) } s.bindRenderbuffer(s.RENDERBUFFER, null), T.depthBuffer && (z.__webglDepthRenderbuffer = s.createRenderbuffer(), _e(z.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(s.FRAMEBUFFER, null) } } if (Z) { t.bindTexture(s.TEXTURE_CUBE_MAP, q.__webglTexture), ve(s.TEXTURE_CUBE_MAP, x); for (let oe = 0; oe < 6; oe++)if (x.mipmaps && x.mipmaps.length > 0) for (let de = 0; de < x.mipmaps.length; de++)ee(z.__webglFramebuffer[oe][de], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + oe, de); else ee(z.__webglFramebuffer[oe], T, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0); m(x) && f(s.TEXTURE_CUBE_MAP), t.unbindTexture() } else if (be) { for (let oe = 0, de = Q.length; oe < de; oe++) { const Ue = Q[oe], te = n.get(Ue); t.bindTexture(s.TEXTURE_2D, te.__webglTexture), ve(s.TEXTURE_2D, Ue), ee(z.__webglFramebuffer, T, Ue, s.COLOR_ATTACHMENT0 + oe, s.TEXTURE_2D, 0), m(Ue) && f(s.TEXTURE_2D) } t.unbindTexture() } else { let oe = s.TEXTURE_2D; if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (oe = T.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(oe, q.__webglTexture), ve(oe, x), x.mipmaps && x.mipmaps.length > 0) for (let de = 0; de < x.mipmaps.length; de++)ee(z.__webglFramebuffer[de], T, x, s.COLOR_ATTACHMENT0, oe, de); else ee(z.__webglFramebuffer, T, x, s.COLOR_ATTACHMENT0, oe, 0); m(x) && f(oe), t.unbindTexture() } T.depthBuffer && we(T) } function ot(T) { const x = T.textures; for (let z = 0, q = x.length; z < q; z++) { const Q = x[z]; if (m(Q)) { const Z = T.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : s.TEXTURE_2D, be = n.get(Q).__webglTexture; t.bindTexture(Z, be), f(Z), t.unbindTexture() } } } const A = [], ct = []; function Ke(T) { if (T.samples > 0) { if (Me(T) === !1) { const x = T.textures, z = T.width, q = T.height; let Q = s.COLOR_BUFFER_BIT; const Z = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, be = n.get(T), oe = x.length > 1; if (oe) for (let de = 0; de < x.length; de++)t.bindFramebuffer(s.FRAMEBUFFER, be.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + de, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, be.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + de, s.TEXTURE_2D, null, 0); t.bindFramebuffer(s.READ_FRAMEBUFFER, be.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, be.__webglFramebuffer); for (let de = 0; de < x.length; de++) { if (T.resolveDepthBuffer && (T.depthBuffer && (Q |= s.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (Q |= s.STENCIL_BUFFER_BIT)), oe) { s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, be.__webglColorRenderbuffer[de]); const Ue = n.get(x[de]).__webglTexture; s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, Ue, 0) } s.blitFramebuffer(0, 0, z, q, 0, 0, z, q, Q, s.NEAREST), l === !0 && (A.length = 0, ct.length = 0, A.push(s.COLOR_ATTACHMENT0 + de), T.depthBuffer && T.resolveDepthBuffer === !1 && (A.push(Z), ct.push(Z), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, ct)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, A)) } if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), oe) for (let de = 0; de < x.length; de++) { t.bindFramebuffer(s.FRAMEBUFFER, be.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + de, s.RENDERBUFFER, be.__webglColorRenderbuffer[de]); const Ue = n.get(x[de]).__webglTexture; t.bindFramebuffer(s.FRAMEBUFFER, be.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + de, s.TEXTURE_2D, Ue, 0) } t.bindFramebuffer(s.DRAW_FRAMEBUFFER, be.__webglMultisampledFramebuffer) } else if (T.depthBuffer && T.resolveDepthBuffer === !1 && l) { const x = T.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT; s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [x]) } } } function Qe(T) { return Math.min(i.maxSamples, T.samples) } function Me(T) { const x = n.get(T); return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1 } function ht(T) { const x = o.render.frame; h.get(T) !== x && (h.set(T, x), T.update()) } function Ce(T, x) { const z = T.colorSpace, q = T.format, Q = T.type; return T.isCompressedTexture === !0 || T.isVideoTexture === !0 || z !== Et && z !== Gn && (We.getTransfer(z) === st ? (q !== jt || Q !== Ln) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", z)), x } function De(T) { return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c } this.allocateTextureUnit = G, this.resetTextureUnits = P, this.setTexture2D = $, this.setTexture2DArray = K, this.setTexture3D = W, this.setTextureCube = J, this.rebindTextures = Le, this.setupRenderTarget = ke, this.updateRenderTargetMipmap = ot, this.updateMultisampleRenderTarget = Ke, this.setupDepthRenderbuffer = we, this.setupFrameBufferTexture = ee, this.useMultisampledRTT = Me } function p_(s, e) { function t(n, i = Gn) { let r; const o = We.getTransfer(i); if (n === Ln) return s.UNSIGNED_BYTE; if (n === Sa) return s.UNSIGNED_SHORT_4_4_4_4; if (n === ba) return s.UNSIGNED_SHORT_5_5_5_1; if (n === Qc) return s.UNSIGNED_INT_5_9_9_9_REV; if (n === Zc) return s.BYTE; if (n === Jc) return s.SHORT; if (n === As) return s.UNSIGNED_SHORT; if (n === Ma) return s.INT; if (n === hi) return s.UNSIGNED_INT; if (n === Qt) return s.FLOAT; if (n === es) return s.HALF_FLOAT; if (n === eh) return s.ALPHA; if (n === th) return s.RGB; if (n === jt) return s.RGBA; if (n === nh) return s.LUMINANCE; if (n === ih) return s.LUMINANCE_ALPHA; if (n === ki) return s.DEPTH_COMPONENT; if (n === qi) return s.DEPTH_STENCIL; if (n === Ea) return s.RED; if (n === Ta) return s.RED_INTEGER; if (n === sh) return s.RG; if (n === wa) return s.RG_INTEGER; if (n === Aa) return s.RGBA_INTEGER; if (n === pr || n === mr || n === gr || n === _r) if (o === st) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) { if (n === pr) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT; if (n === mr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (n === gr) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (n === _r) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null; else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) { if (n === pr) return r.COMPRESSED_RGB_S3TC_DXT1_EXT; if (n === mr) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (n === gr) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (n === _r) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (n === Io || n === No || n === Uo || n === Oo) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) { if (n === Io) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (n === No) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (n === Uo) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (n === Oo) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (n === Fo || n === Bo || n === zo) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) { if (n === Fo || n === Bo) return o === st ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2; if (n === zo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (n === ko || n === Ho || n === Vo || n === Go || n === Wo || n === Xo || n === jo || n === Yo || n === qo || n === Ko || n === $o || n === Zo || n === Jo || n === Qo) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) { if (n === ko) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR; if (n === Ho) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR; if (n === Vo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR; if (n === Go) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR; if (n === Wo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR; if (n === Xo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR; if (n === jo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR; if (n === Yo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR; if (n === qo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR; if (n === Ko) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR; if (n === $o) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR; if (n === Zo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR; if (n === Jo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR; if (n === Qo) return o === st ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (n === vr || n === ea || n === ta) if (r = e.get("EXT_texture_compression_bptc"), r !== null) { if (n === vr) return o === st ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (n === ea) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (n === ta) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (n === rh || n === na || n === ia || n === sa) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) { if (n === vr) return r.COMPRESSED_RED_RGTC1_EXT; if (n === na) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (n === ia) return r.COMPRESSED_RED_GREEN_RGTC2_EXT; if (n === sa) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return n === Yi ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null } return { convert: t } } class m_ extends Lt { constructor(e = []) { super(), this.isArrayCamera = !0, this.cameras = e } } class jn extends it { constructor() { super(), this.isGroup = !0, this.type = "Group" } } const g_ = { type: "move" }; class go { constructor() { this._targetRay = null, this._grip = null, this._hand = null } getHandSpace() { return this._hand === null && (this._hand = new jn, this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this._targetRay === null && (this._targetRay = new jn, this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new C, this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new C), this._targetRay } getGripSpace() { return this._grip === null && (this._grip = new jn, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new C, this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new C), this._grip } dispatchEvent(e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this } connect(e) { if (e && e.hand) { const t = this._hand; if (t) for (const n of e.hand.values()) this._getHandJoint(t, n) } return this.dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let i = null, r = null, o = null; const a = this._targetRay, l = this._grip, c = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (c && e.hand) { o = !0; for (const _ of e.hand.values()) { const m = t.getJointPose(_, n), f = this._getHandJoint(c, _); m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = m.radius), f.visible = m !== null } const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = .02, g = .005; c.inputState.pinching && d > p + g ? (c.inputState.pinching = !1, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = !0, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (l.hasLinearVelocity = !0, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1, r.angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1)); a !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = !1, i.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(g_))) } return a !== null && (a.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = o !== null), this } _getHandJoint(e, t) { if (e.joints[t.jointName] === void 0) { const n = new jn; n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n) } return e.joints[t.jointName] } } const __ = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, v_ = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`; class x_ { constructor() { this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0 } init(e, t, n) { if (this.texture === null) { const i = new vt, r = e.properties.get(i); r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i } } getMesh(e) { if (this.texture !== null && this.mesh === null) { const t = e.cameras[0].viewport, n = new sn({ vertexShader: __, fragmentShader: v_, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } }); this.mesh = new Ut(new Nr(20, 20), n) } return this.mesh } reset() { this.texture = null, this.mesh = null } getDepthTexture() { return this.texture } } class y_ extends ui { constructor(e, t) { super(); const n = this; let i = null, r = 1, o = null, a = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, g = null; const _ = new x_, m = t.getContextAttributes(); let f = null, y = null; const v = [], b = [], I = new le; let R = null; const w = new Lt; w.layers.enable(1), w.viewport = new tt; const F = new Lt; F.layers.enable(2), F.viewport = new tt; const E = [w, F], S = new m_; S.layers.enable(1), S.layers.enable(2); let P = null, G = null; this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function (V) { let ee = v[V]; return ee === void 0 && (ee = new go, v[V] = ee), ee.getTargetRaySpace() }, this.getControllerGrip = function (V) { let ee = v[V]; return ee === void 0 && (ee = new go, v[V] = ee), ee.getGripSpace() }, this.getHand = function (V) { let ee = v[V]; return ee === void 0 && (ee = new go, v[V] = ee), ee.getHandSpace() }; function k(V) { const ee = b.indexOf(V.inputSource); if (ee === -1) return; const _e = v[ee]; _e !== void 0 && (_e.update(V.inputSource, V.frame, c || o), _e.dispatchEvent({ type: V.type, data: V.inputSource })) } function $() { i.removeEventListener("select", k), i.removeEventListener("selectstart", k), i.removeEventListener("selectend", k), i.removeEventListener("squeeze", k), i.removeEventListener("squeezestart", k), i.removeEventListener("squeezeend", k), i.removeEventListener("end", $), i.removeEventListener("inputsourceschange", K); for (let V = 0; V < v.length; V++) { const ee = b[V]; ee !== null && (b[V] = null, v[V].disconnect(ee)) } P = null, G = null, _.reset(), e.setRenderTarget(f), p = null, d = null, u = null, i = null, y = null, Je.stop(), n.isPresenting = !1, e.setPixelRatio(R), e.setSize(I.width, I.height, !1), n.dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (V) { r = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this.setReferenceSpaceType = function (V) { a = V, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.") }, this.getReferenceSpace = function () { return c || o }, this.setReferenceSpace = function (V) { c = V }, this.getBaseLayer = function () { return d !== null ? d : p }, this.getBinding = function () { return u }, this.getFrame = function () { return g }, this.getSession = function () { return i }, this.setSession = async function (V) { if (i = V, i !== null) { if (f = e.getRenderTarget(), i.addEventListener("select", k), i.addEventListener("selectstart", k), i.addEventListener("selectend", k), i.addEventListener("squeeze", k), i.addEventListener("squeezestart", k), i.addEventListener("squeezeend", k), i.addEventListener("end", $), i.addEventListener("inputsourceschange", K), m.xrCompatible !== !0 && await t.makeXRCompatible(), R = e.getPixelRatio(), e.getSize(I), i.renderState.layers === void 0) { const ee = { antialias: m.antialias, alpha: !0, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r }; p = new XRWebGLLayer(i, t, ee), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), y = new Dn(p.framebufferWidth, p.framebufferHeight, { format: jt, type: Ln, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil }) } else { let ee = null, _e = null, ue = null; m.depth && (ue = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ee = m.stencil ? qi : ki, _e = m.stencil ? Yi : hi); const we = { colorFormat: t.RGBA8, depthFormat: ue, scaleFactor: r }; u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(we), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, !1), y = new Dn(d.textureWidth, d.textureHeight, { format: jt, type: Ln, depthTexture: new Mh(d.textureWidth, d.textureHeight, _e, void 0, void 0, void 0, void 0, void 0, void 0, ee), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === !1 }) } y.isXRRenderTarget = !0, this.setFoveation(l), c = null, o = await i.requestReferenceSpace(a), Je.setContext(i), Je.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this.getEnvironmentBlendMode = function () { if (i !== null) return i.environmentBlendMode }, this.getDepthTexture = function () { return _.getDepthTexture() }; function K(V) { for (let ee = 0; ee < V.removed.length; ee++) { const _e = V.removed[ee], ue = b.indexOf(_e); ue >= 0 && (b[ue] = null, v[ue].disconnect(_e)) } for (let ee = 0; ee < V.added.length; ee++) { const _e = V.added[ee]; let ue = b.indexOf(_e); if (ue === -1) { for (let Le = 0; Le < v.length; Le++)if (Le >= b.length) { b.push(_e), ue = Le; break } else if (b[Le] === null) { b[Le] = _e, ue = Le; break } if (ue === -1) break } const we = v[ue]; we && we.connect(_e) } } const W = new C, J = new C; function H(V, ee, _e) { W.setFromMatrixPosition(ee.matrixWorld), J.setFromMatrixPosition(_e.matrixWorld); const ue = W.distanceTo(J), we = ee.projectionMatrix.elements, Le = _e.projectionMatrix.elements, ke = we[14] / (we[10] - 1), ot = we[14] / (we[10] + 1), A = (we[9] + 1) / we[5], ct = (we[9] - 1) / we[5], Ke = (we[8] - 1) / we[0], Qe = (Le[8] + 1) / Le[0], Me = ke * Ke, ht = ke * Qe, Ce = ue / (-Ke + Qe), De = Ce * -Ke; if (ee.matrixWorld.decompose(V.position, V.quaternion, V.scale), V.translateX(De), V.translateZ(Ce), V.matrixWorld.compose(V.position, V.quaternion, V.scale), V.matrixWorldInverse.copy(V.matrixWorld).invert(), we[10] === -1) V.projectionMatrix.copy(ee.projectionMatrix), V.projectionMatrixInverse.copy(ee.projectionMatrixInverse); else { const T = ke + Ce, x = ot + Ce, z = Me - De, q = ht + (ue - De), Q = A * ot / x * T, Z = ct * ot / x * T; V.projectionMatrix.makePerspective(z, q, Q, Z, T, x), V.projectionMatrixInverse.copy(V.projectionMatrix).invert() } } function ce(V, ee) { ee === null ? V.matrixWorld.copy(V.matrix) : V.matrixWorld.multiplyMatrices(ee.matrixWorld, V.matrix), V.matrixWorldInverse.copy(V.matrixWorld).invert() } this.updateCamera = function (V) { if (i === null) return; let ee = V.near, _e = V.far; _.texture !== null && (_.depthNear > 0 && (ee = _.depthNear), _.depthFar > 0 && (_e = _.depthFar)), S.near = F.near = w.near = ee, S.far = F.far = w.far = _e, (P !== S.near || G !== S.far) && (i.updateRenderState({ depthNear: S.near, depthFar: S.far }), P = S.near, G = S.far); const ue = V.parent, we = S.cameras; ce(S, ue); for (let Le = 0; Le < we.length; Le++)ce(we[Le], ue); we.length === 2 ? H(S, w, F) : S.projectionMatrix.copy(w.projectionMatrix), fe(V, S, ue) }; function fe(V, ee, _e) { _e === null ? V.matrix.copy(ee.matrixWorld) : (V.matrix.copy(_e.matrixWorld), V.matrix.invert(), V.matrix.multiply(ee.matrixWorld)), V.matrix.decompose(V.position, V.quaternion, V.scale), V.updateMatrixWorld(!0), V.projectionMatrix.copy(ee.projectionMatrix), V.projectionMatrixInverse.copy(ee.projectionMatrixInverse), V.isPerspectiveCamera && (V.fov = Ki * 2 * Math.atan(1 / V.projectionMatrix.elements[5]), V.zoom = 1) } this.getCamera = function () { return S }, this.getFoveation = function () { if (!(d === null && p === null)) return l }, this.setFoveation = function (V) { l = V, d !== null && (d.fixedFoveation = V), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = V) }, this.hasDepthSensing = function () { return _.texture !== null }, this.getDepthSensingMesh = function () { return _.getMesh(S) }; let ve = null; function He(V, ee) { if (h = ee.getViewerPose(c || o), g = ee, h !== null) { const _e = h.views; p !== null && (e.setRenderTargetFramebuffer(y, p.framebuffer), e.setRenderTarget(y)); let ue = !1; _e.length !== S.cameras.length && (S.cameras.length = 0, ue = !0); for (let Le = 0; Le < _e.length; Le++) { const ke = _e[Le]; let ot = null; if (p !== null) ot = p.getViewport(ke); else { const ct = u.getViewSubImage(d, ke); ot = ct.viewport, Le === 0 && (e.setRenderTargetTextures(y, ct.colorTexture, d.ignoreDepthValues ? void 0 : ct.depthStencilTexture), e.setRenderTarget(y)) } let A = E[Le]; A === void 0 && (A = new Lt, A.layers.enable(Le), A.viewport = new tt, E[Le] = A), A.matrix.fromArray(ke.transform.matrix), A.matrix.decompose(A.position, A.quaternion, A.scale), A.projectionMatrix.fromArray(ke.projectionMatrix), A.projectionMatrixInverse.copy(A.projectionMatrix).invert(), A.viewport.set(ot.x, ot.y, ot.width, ot.height), Le === 0 && (S.matrix.copy(A.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)), ue === !0 && S.cameras.push(A) } const we = i.enabledFeatures; if (we && we.includes("depth-sensing")) { const Le = u.getDepthInformation(_e[0]); Le && Le.isValid && Le.texture && _.init(e, Le, i.renderState) } } for (let _e = 0; _e < v.length; _e++) { const ue = b[_e], we = v[_e]; ue !== null && we !== void 0 && we.update(ue, ee, c || o) } ve && ve(V, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null } const Je = new yh; Je.setAnimationLoop(He), this.setAnimationLoop = function (V) { ve = V }, this.dispose = function () { } } } const si = new fn, M_ = new Ie; function S_(s, e) { function t(m, f) { m.matrixAutoUpdate === !0 && m.updateMatrix(), f.value.copy(m.matrix) } function n(m, f) { f.color.getRGB(m.fogColor.value, _h(s)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density) } function i(m, f, y, v, b) { f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), u(m, f)) : f.isMeshPhongMaterial ? (r(m, f), h(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, b)) : f.isMeshMatcapMaterial ? (r(m, f), g(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), _(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (o(m, f), f.isLineDashedMaterial && a(m, f)) : f.isPointsMaterial ? l(m, f, y, v) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1) } function r(m, f) { m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Ot && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Ot && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest); const y = e.get(f), v = y.envMap, b = y.envMapRotation; v && (m.envMap.value = v, si.copy(b), si.x *= -1, si.y *= -1, si.z *= -1, v.isCubeTexture && v.isRenderTargetTexture === !1 && (si.y *= -1, si.z *= -1), m.envMapRotation.value.setFromMatrix4(M_.makeRotationFromEuler(si)), m.flipEnvMap.value = v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform)) } function o(m, f) { m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)) } function a(m, f) { m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale } function l(m, f, y, v) { m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * y, m.scale.value = v * .5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest) } function c(m, f) { m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest) } function h(m, f) { m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4) } function u(m, f) { f.gradientMap && (m.gradientMap.value = f.gradientMap) } function d(m, f) { m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity) } function p(m, f, y) { m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Ot && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = y.texture, m.transmissionSamplerSize.value.set(y.width, y.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform)) } function g(m, f) { f.matcap && (m.matcap.value = f.matcap) } function _(m, f) { const y = e.get(f).light; m.referencePosition.value.setFromMatrixPosition(y.matrixWorld), m.nearDistance.value = y.shadow.camera.near, m.farDistance.value = y.shadow.camera.far } return { refreshFogUniforms: n, refreshMaterialUniforms: i } } function b_(s, e, t, n) { let i = {}, r = {}, o = []; const a = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS); function l(y, v) { const b = v.program; n.uniformBlockBinding(y, b) } function c(y, v) { let b = i[y.id]; b === void 0 && (g(y), b = h(y), i[y.id] = b, y.addEventListener("dispose", m)); const I = v.program; n.updateUBOMapping(y, I); const R = e.render.frame; r[y.id] !== R && (d(y), r[y.id] = R) } function h(y) { const v = u(); y.__bindingPointIndex = v; const b = s.createBuffer(), I = y.__size, R = y.usage; return s.bindBuffer(s.UNIFORM_BUFFER, b), s.bufferData(s.UNIFORM_BUFFER, I, R), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, v, b), b } function u() { for (let y = 0; y < a; y++)if (o.indexOf(y) === -1) return o.push(y), y; return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 } function d(y) { const v = i[y.id], b = y.uniforms, I = y.__cache; s.bindBuffer(s.UNIFORM_BUFFER, v); for (let R = 0, w = b.length; R < w; R++) { const F = Array.isArray(b[R]) ? b[R] : [b[R]]; for (let E = 0, S = F.length; E < S; E++) { const P = F[E]; if (p(P, R, E, I) === !0) { const G = P.__offset, k = Array.isArray(P.value) ? P.value : [P.value]; let $ = 0; for (let K = 0; K < k.length; K++) { const W = k[K], J = _(W); typeof W == "number" || typeof W == "boolean" ? (P.__data[0] = W, s.bufferSubData(s.UNIFORM_BUFFER, G + $, P.__data)) : W.isMatrix3 ? (P.__data[0] = W.elements[0], P.__data[1] = W.elements[1], P.__data[2] = W.elements[2], P.__data[3] = 0, P.__data[4] = W.elements[3], P.__data[5] = W.elements[4], P.__data[6] = W.elements[5], P.__data[7] = 0, P.__data[8] = W.elements[6], P.__data[9] = W.elements[7], P.__data[10] = W.elements[8], P.__data[11] = 0) : (W.toArray(P.__data, $), $ += J.storage / Float32Array.BYTES_PER_ELEMENT) } s.bufferSubData(s.UNIFORM_BUFFER, G, P.__data) } } } s.bindBuffer(s.UNIFORM_BUFFER, null) } function p(y, v, b, I) { const R = y.value, w = v + "_" + b; if (I[w] === void 0) return typeof R == "number" || typeof R == "boolean" ? I[w] = R : I[w] = R.clone(), !0; { const F = I[w]; if (typeof R == "number" || typeof R == "boolean") { if (F !== R) return I[w] = R, !0 } else if (F.equals(R) === !1) return F.copy(R), !0 } return !1 } function g(y) { const v = y.uniforms; let b = 0; const I = 16; for (let w = 0, F = v.length; w < F; w++) { const E = Array.isArray(v[w]) ? v[w] : [v[w]]; for (let S = 0, P = E.length; S < P; S++) { const G = E[S], k = Array.isArray(G.value) ? G.value : [G.value]; for (let $ = 0, K = k.length; $ < K; $++) { const W = k[$], J = _(W), H = b % I, ce = H % J.boundary, fe = H + ce; b += ce, fe !== 0 && I - fe < J.storage && (b += I - fe), G.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = b, b += J.storage } } } const R = b % I; return R > 0 && (b += I - R), y.__size = b, y.__cache = {}, this } function _(y) { const v = { boundary: 0, storage: 0 }; return typeof y == "number" || typeof y == "boolean" ? (v.boundary = 4, v.storage = 4) : y.isVector2 ? (v.boundary = 8, v.storage = 8) : y.isVector3 || y.isColor ? (v.boundary = 16, v.storage = 12) : y.isVector4 ? (v.boundary = 16, v.storage = 16) : y.isMatrix3 ? (v.boundary = 48, v.storage = 48) : y.isMatrix4 ? (v.boundary = 64, v.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), v } function m(y) { const v = y.target; v.removeEventListener("dispose", m); const b = o.indexOf(v.__bindingPointIndex); o.splice(b, 1), s.deleteBuffer(i[v.id]), delete i[v.id], delete r[v.id] } function f() { for (const y in i) s.deleteBuffer(i[y]); o = [], i = {}, r = {} } return { bind: l, update: c, dispose: f } } class E_ { constructor(e = {}) { const { canvas: t = gd(), context: n = null, depth: i = !0, stencil: r = !1, alpha: o = !1, antialias: a = !1, premultipliedAlpha: l = !0, preserveDrawingBuffer: c = !1, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = !1 } = e; this.isWebGLRenderer = !0; let d; if (n !== null) { if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163."); d = n.getContextAttributes().alpha } else d = o; const p = new Uint32Array(4), g = new Int32Array(4); let _ = null, m = null; const f = [], y = []; this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this._outputColorSpace = Pt, this.toneMapping = qn, this.toneMappingExposure = 1; const v = this; let b = !1, I = 0, R = 0, w = null, F = -1, E = null; const S = new tt, P = new tt; let G = null; const k = new Se(0); let $ = 0, K = t.width, W = t.height, J = 1, H = null, ce = null; const fe = new tt(0, 0, K, W), ve = new tt(0, 0, K, W); let He = !1; const Je = new La; let V = !1, ee = !1; const _e = new Ie, ue = new C, we = new tt, Le = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 }; let ke = !1; function ot() { return w === null ? J : 1 } let A = n; function ct(M, D) { return t.getContext(M, D) } try { const M = { alpha: !0, depth: i, stencil: r, antialias: a, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u }; if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ya}`), t.addEventListener("webglcontextlost", X, !1), t.addEventListener("webglcontextrestored", Y, !1), t.addEventListener("webglcontextcreationerror", se, !1), A === null) { const D = "webgl2"; if (A = ct(D, M), A === null) throw ct(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.") } } catch (M) { throw console.error("THREE.WebGLRenderer: " + M.message), M } let Ke, Qe, Me, ht, Ce, De, T, x, z, q, Q, Z, be, oe, de, Ue, te, he, Ve, Re, pe, Pe, Fe, rt; function L() { Ke = new Dm(A), Ke.init(), Pe = new p_(A, Ke), Qe = new wm(A, Ke, e, Pe), Me = new u_(A), ht = new Um(A), Ce = new Qg, De = new f_(A, Ke, Me, Ce, Qe, Pe, ht), T = new Rm(v), x = new Lm(v), z = new Hd(A), Fe = new Em(A, z), q = new Im(A, z, ht, Fe), Q = new Fm(A, q, z, ht), Ve = new Om(A, Qe, De), Ue = new Am(Ce), Z = new Jg(v, T, x, Ke, Qe, Fe, Ue), be = new S_(v, Ce), oe = new t_, de = new a_(Ke), he = new bm(v, T, x, Me, Q, d, l), te = new h_(v, Q, Qe), rt = new b_(A, ht, Qe, Me), Re = new Tm(A, Ke, ht), pe = new Nm(A, Ke, ht), ht.programs = Z.programs, v.capabilities = Qe, v.extensions = Ke, v.properties = Ce, v.renderLists = oe, v.shadowMap = te, v.state = Me, v.info = ht } L(); const ne = new y_(v, A); this.xr = ne, this.getContext = function () { return A }, this.getContextAttributes = function () { return A.getContextAttributes() }, this.forceContextLoss = function () { const M = Ke.get("WEBGL_lose_context"); M && M.loseContext() }, this.forceContextRestore = function () { const M = Ke.get("WEBGL_lose_context"); M && M.restoreContext() }, this.getPixelRatio = function () { return J }, this.setPixelRatio = function (M) { M !== void 0 && (J = M, this.setSize(K, W, !1)) }, this.getSize = function (M) { return M.set(K, W) }, this.setSize = function (M, D, U = !0) { if (ne.isPresenting) { console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } K = M, W = D, t.width = Math.floor(M * J), t.height = Math.floor(D * J), U === !0 && (t.style.width = M + "px", t.style.height = D + "px"), this.setViewport(0, 0, M, D) }, this.getDrawingBufferSize = function (M) { return M.set(K * J, W * J).floor() }, this.setDrawingBufferSize = function (M, D, U) { K = M, W = D, J = U, t.width = Math.floor(M * U), t.height = Math.floor(D * U), this.setViewport(0, 0, M, D) }, this.getCurrentViewport = function (M) { return M.copy(S) }, this.getViewport = function (M) { return M.copy(fe) }, this.setViewport = function (M, D, U, B) { M.isVector4 ? fe.set(M.x, M.y, M.z, M.w) : fe.set(M, D, U, B), Me.viewport(S.copy(fe).multiplyScalar(J).round()) }, this.getScissor = function (M) { return M.copy(ve) }, this.setScissor = function (M, D, U, B) { M.isVector4 ? ve.set(M.x, M.y, M.z, M.w) : ve.set(M, D, U, B), Me.scissor(P.copy(ve).multiplyScalar(J).round()) }, this.getScissorTest = function () { return He }, this.setScissorTest = function (M) { Me.setScissorTest(He = M) }, this.setOpaqueSort = function (M) { H = M }, this.setTransparentSort = function (M) { ce = M }, this.getClearColor = function (M) { return M.copy(he.getClearColor()) }, this.setClearColor = function () { he.setClearColor.apply(he, arguments) }, this.getClearAlpha = function () { return he.getClearAlpha() }, this.setClearAlpha = function () { he.setClearAlpha.apply(he, arguments) }, this.clear = function (M = !0, D = !0, U = !0) { let B = 0; if (M) { let N = !1; if (w !== null) { const ie = w.texture.format; N = ie === Aa || ie === wa || ie === Ta } if (N) { const ie = w.texture.type, ae = ie === Ln || ie === hi || ie === As || ie === Yi || ie === Sa || ie === ba, me = he.getClearColor(), ge = he.getClearAlpha(), Te = me.r, Ae = me.g, xe = me.b; ae ? (p[0] = Te, p[1] = Ae, p[2] = xe, p[3] = ge, A.clearBufferuiv(A.COLOR, 0, p)) : (g[0] = Te, g[1] = Ae, g[2] = xe, g[3] = ge, A.clearBufferiv(A.COLOR, 0, g)) } else B |= A.COLOR_BUFFER_BIT } D && (B |= A.DEPTH_BUFFER_BIT), U && (B |= A.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), A.clear(B) }, this.clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this.clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this.dispose = function () { t.removeEventListener("webglcontextlost", X, !1), t.removeEventListener("webglcontextrestored", Y, !1), t.removeEventListener("webglcontextcreationerror", se, !1), oe.dispose(), de.dispose(), Ce.dispose(), T.dispose(), x.dispose(), Q.dispose(), Fe.dispose(), rt.dispose(), Z.dispose(), ne.dispose(), ne.removeEventListener("sessionstart", ln), ne.removeEventListener("sessionend", Xa), Jn.stop() }; function X(M) { M.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), b = !0 } function Y() { console.log("THREE.WebGLRenderer: Context Restored."), b = !1; const M = ht.autoReset, D = te.enabled, U = te.autoUpdate, B = te.needsUpdate, N = te.type; L(), ht.autoReset = M, te.enabled = D, te.autoUpdate = U, te.needsUpdate = B, te.type = N } function se(M) { console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", M.statusMessage) } function Ee(M) { const D = M.target; D.removeEventListener("dispose", Ee), Ge(D) } function Ge(M) { ut(M), Ce.remove(M) } function ut(M) { const D = Ce.get(M).programs; D !== void 0 && (D.forEach(function (U) { Z.releaseProgram(U) }), M.isShaderMaterial && Z.releaseShaderCache(M)) } this.renderBufferDirect = function (M, D, U, B, N, ie) { D === null && (D = Le); const ae = N.isMesh && N.matrixWorld.determinant() < 0, me = tu(M, D, U, B, N); Me.setMaterial(B, ae); let ge = U.index, Te = 1; if (B.wireframe === !0) { if (ge = q.getWireframeAttribute(U), ge === void 0) return; Te = 2 } const Ae = U.drawRange, xe = U.attributes.position; let je = Ae.start * Te, at = (Ae.start + Ae.count) * Te; ie !== null && (je = Math.max(je, ie.start * Te), at = Math.min(at, (ie.start + ie.count) * Te)), ge !== null ? (je = Math.max(je, 0), at = Math.min(at, ge.count)) : xe != null && (je = Math.max(je, 0), at = Math.min(at, xe.count)); const lt = at - je; if (lt < 0 || lt === 1 / 0) return; Fe.setup(N, B, me, U, ge); let Ft, Ye = Re; if (ge !== null && (Ft = z.get(ge), Ye = pe, Ye.setIndex(Ft)), N.isMesh) B.wireframe === !0 ? (Me.setLineWidth(B.wireframeLinewidth * ot()), Ye.setMode(A.LINES)) : Ye.setMode(A.TRIANGLES); else if (N.isLine) { let ye = B.linewidth; ye === void 0 && (ye = 1), Me.setLineWidth(ye * ot()), N.isLineSegments ? Ye.setMode(A.LINES) : N.isLineLoop ? Ye.setMode(A.LINE_LOOP) : Ye.setMode(A.LINE_STRIP) } else N.isPoints ? Ye.setMode(A.POINTS) : N.isSprite && Ye.setMode(A.TRIANGLES); if (N.isBatchedMesh) if (N._multiDrawInstances !== null) Ye.renderMultiDrawInstances(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount, N._multiDrawInstances); else if (Ke.get("WEBGL_multi_draw")) Ye.renderMultiDraw(N._multiDrawStarts, N._multiDrawCounts, N._multiDrawCount); else { const ye = N._multiDrawStarts, Mt = N._multiDrawCounts, qe = N._multiDrawCount, Yt = ge ? z.get(ge).bytesPerElement : 1, fi = Ce.get(B).currentProgram.getUniforms(); for (let Bt = 0; Bt < qe; Bt++)fi.setValue(A, "_gl_DrawID", Bt), Ye.render(ye[Bt] / Yt, Mt[Bt]) } else if (N.isInstancedMesh) Ye.renderInstances(je, lt, N.count); else if (U.isInstancedBufferGeometry) { const ye = U._maxInstanceCount !== void 0 ? U._maxInstanceCount : 1 / 0, Mt = Math.min(U.instanceCount, ye); Ye.renderInstances(je, lt, Mt) } else Ye.render(je, lt) }; function yt(M, D, U) { M.transparent === !0 && M.side === Xt && M.forceSinglePass === !1 ? (M.side = Ot, M.needsUpdate = !0, Us(M, D, U), M.side = Pn, M.needsUpdate = !0, Us(M, D, U), M.side = Xt) : Us(M, D, U) } this.compile = function (M, D, U = null) { U === null && (U = M), m = de.get(U), m.init(D), y.push(m), U.traverseVisible(function (N) { N.isLight && N.layers.test(D.layers) && (m.pushLight(N), N.castShadow && m.pushShadow(N)) }), M !== U && M.traverseVisible(function (N) { N.isLight && N.layers.test(D.layers) && (m.pushLight(N), N.castShadow && m.pushShadow(N)) }), m.setupLights(); const B = new Set; return M.traverse(function (N) { const ie = N.material; if (ie) if (Array.isArray(ie)) for (let ae = 0; ae < ie.length; ae++) { const me = ie[ae]; yt(me, U, N), B.add(me) } else yt(ie, U, N), B.add(ie) }), y.pop(), m = null, B }, this.compileAsync = function (M, D, U = null) { const B = this.compile(M, D, U); return new Promise(N => { function ie() { if (B.forEach(function (ae) { Ce.get(ae).currentProgram.isReady() && B.delete(ae) }), B.size === 0) { N(M); return } setTimeout(ie, 10) } Ke.get("KHR_parallel_shader_compile") !== null ? ie() : setTimeout(ie, 10) }) }; let Xe = null; function vn(M) { Xe && Xe(M) } function ln() { Jn.stop() } function Xa() { Jn.start() } const Jn = new yh; Jn.setAnimationLoop(vn), typeof self < "u" && Jn.setContext(self), this.setAnimationLoop = function (M) { Xe = M, ne.setAnimationLoop(M), M === null ? Jn.stop() : Jn.start() }, ne.addEventListener("sessionstart", ln), ne.addEventListener("sessionend", Xa), this.render = function (M, D) { if (D !== void 0 && D.isCamera !== !0) { console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."); return } if (b === !0) return; if (M.matrixWorldAutoUpdate === !0 && M.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === !0 && D.updateMatrixWorld(), ne.enabled === !0 && ne.isPresenting === !0 && (ne.cameraAutoUpdate === !0 && ne.updateCamera(D), D = ne.getCamera()), M.isScene === !0 && M.onBeforeRender(v, M, D, w), m = de.get(M, y.length), m.init(D), y.push(m), _e.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), Je.setFromProjectionMatrix(_e), ee = this.localClippingEnabled, V = Ue.init(this.clippingPlanes, ee), _ = oe.get(M, f.length), _.init(), f.push(_), ne.enabled === !0 && ne.isPresenting === !0) { const ie = v.xr.getDepthSensingMesh(); ie !== null && kr(ie, D, -1 / 0, v.sortObjects) } kr(M, D, 0, v.sortObjects), _.finish(), v.sortObjects === !0 && _.sort(H, ce), ke = ne.enabled === !1 || ne.isPresenting === !1 || ne.hasDepthSensing() === !1, ke && he.addToRenderList(_, M), this.info.render.frame++, V === !0 && Ue.beginShadows(); const U = m.state.shadowsArray; te.render(U, M, D), V === !0 && Ue.endShadows(), this.info.autoReset === !0 && this.info.reset(); const B = _.opaque, N = _.transmissive; if (m.setupLights(), D.isArrayCamera) { const ie = D.cameras; if (N.length > 0) for (let ae = 0, me = ie.length; ae < me; ae++) { const ge = ie[ae]; Ya(B, N, M, ge) } ke && he.render(M); for (let ae = 0, me = ie.length; ae < me; ae++) { const ge = ie[ae]; ja(_, M, ge, ge.viewport) } } else N.length > 0 && Ya(B, N, M, D), ke && he.render(M), ja(_, M, D); w !== null && (De.updateMultisampleRenderTarget(w), De.updateRenderTargetMipmap(w)), M.isScene === !0 && M.onAfterRender(v, M, D), Fe.resetDefaultState(), F = -1, E = null, y.pop(), y.length > 0 ? (m = y[y.length - 1], V === !0 && Ue.setGlobalState(v.clippingPlanes, m.state.camera)) : m = null, f.pop(), f.length > 0 ? _ = f[f.length - 1] : _ = null }; function kr(M, D, U, B) { if (M.visible === !1) return; if (M.layers.test(D.layers)) { if (M.isGroup) U = M.renderOrder; else if (M.isLOD) M.autoUpdate === !0 && M.update(D); else if (M.isLight) m.pushLight(M), M.castShadow && m.pushShadow(M); else if (M.isSprite) { if (!M.frustumCulled || Je.intersectsSprite(M)) { B && we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(_e); const ae = Q.update(M), me = M.material; me.visible && _.push(M, ae, me, U, we.z, null) } } else if ((M.isMesh || M.isLine || M.isPoints) && (!M.frustumCulled || Je.intersectsObject(M))) { const ae = Q.update(M), me = M.material; if (B && (M.boundingSphere !== void 0 ? (M.boundingSphere === null && M.computeBoundingSphere(), we.copy(M.boundingSphere.center)) : (ae.boundingSphere === null && ae.computeBoundingSphere(), we.copy(ae.boundingSphere.center)), we.applyMatrix4(M.matrixWorld).applyMatrix4(_e)), Array.isArray(me)) { const ge = ae.groups; for (let Te = 0, Ae = ge.length; Te < Ae; Te++) { const xe = ge[Te], je = me[xe.materialIndex]; je && je.visible && _.push(M, ae, je, U, we.z, xe) } } else me.visible && _.push(M, ae, me, U, we.z, null) } } const ie = M.children; for (let ae = 0, me = ie.length; ae < me; ae++)kr(ie[ae], D, U, B) } function ja(M, D, U, B) { const N = M.opaque, ie = M.transmissive, ae = M.transparent; m.setupLightsView(U), V === !0 && Ue.setGlobalState(v.clippingPlanes, U), B && Me.viewport(S.copy(B)), N.length > 0 && Ns(N, D, U), ie.length > 0 && Ns(ie, D, U), ae.length > 0 && Ns(ae, D, U), Me.buffers.depth.setTest(!0), Me.buffers.depth.setMask(!0), Me.buffers.color.setMask(!0), Me.setPolygonOffset(!1) } function Ya(M, D, U, B) { if ((U.isScene === !0 ? U.overrideMaterial : null) !== null) return; m.state.transmissionRenderTarget[B.id] === void 0 && (m.state.transmissionRenderTarget[B.id] = new Dn(1, 1, { generateMipmaps: !0, type: Ke.has("EXT_color_buffer_half_float") || Ke.has("EXT_color_buffer_float") ? es : Ln, minFilter: An, samples: 4, stencilBuffer: r, resolveDepthBuffer: !1, resolveStencilBuffer: !1, colorSpace: We.workingColorSpace })); const ie = m.state.transmissionRenderTarget[B.id], ae = B.viewport || S; ie.setSize(ae.z, ae.w); const me = v.getRenderTarget(); v.setRenderTarget(ie), v.getClearColor(k), $ = v.getClearAlpha(), $ < 1 && v.setClearColor(16777215, .5), v.clear(), ke && he.render(U); const ge = v.toneMapping; v.toneMapping = qn; const Te = B.viewport; if (B.viewport !== void 0 && (B.viewport = void 0), m.setupLightsView(B), V === !0 && Ue.setGlobalState(v.clippingPlanes, B), Ns(M, U, B), De.updateMultisampleRenderTarget(ie), De.updateRenderTargetMipmap(ie), Ke.has("WEBGL_multisampled_render_to_texture") === !1) { let Ae = !1; for (let xe = 0, je = D.length; xe < je; xe++) { const at = D[xe], lt = at.object, Ft = at.geometry, Ye = at.material, ye = at.group; if (Ye.side === Xt && lt.layers.test(B.layers)) { const Mt = Ye.side; Ye.side = Ot, Ye.needsUpdate = !0, qa(lt, U, B, Ft, Ye, ye), Ye.side = Mt, Ye.needsUpdate = !0, Ae = !0 } } Ae === !0 && (De.updateMultisampleRenderTarget(ie), De.updateRenderTargetMipmap(ie)) } v.setRenderTarget(me), v.setClearColor(k, $), Te !== void 0 && (B.viewport = Te), v.toneMapping = ge } function Ns(M, D, U) { const B = D.isScene === !0 ? D.overrideMaterial : null; for (let N = 0, ie = M.length; N < ie; N++) { const ae = M[N], me = ae.object, ge = ae.geometry, Te = B === null ? ae.material : B, Ae = ae.group; me.layers.test(U.layers) && qa(me, D, U, ge, Te, Ae) } } function qa(M, D, U, B, N, ie) { M.onBeforeRender(v, D, U, B, N, ie), M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, M.matrixWorld), M.normalMatrix.getNormalMatrix(M.modelViewMatrix), N.onBeforeRender(v, D, U, B, M, ie), N.transparent === !0 && N.side === Xt && N.forceSinglePass === !1 ? (N.side = Ot, N.needsUpdate = !0, v.renderBufferDirect(U, D, B, N, M, ie), N.side = Pn, N.needsUpdate = !0, v.renderBufferDirect(U, D, B, N, M, ie), N.side = Xt) : v.renderBufferDirect(U, D, B, N, M, ie), M.onAfterRender(v, D, U, B, N, ie) } function Us(M, D, U) { D.isScene !== !0 && (D = Le); const B = Ce.get(M), N = m.state.lights, ie = m.state.shadowsArray, ae = N.state.version, me = Z.getParameters(M, N.state, ie, D, U), ge = Z.getProgramCacheKey(me); let Te = B.programs; B.environment = M.isMeshStandardMaterial ? D.environment : null, B.fog = D.fog, B.envMap = (M.isMeshStandardMaterial ? x : T).get(M.envMap || B.environment), B.envMapRotation = B.environment !== null && M.envMap === null ? D.environmentRotation : M.envMapRotation, Te === void 0 && (M.addEventListener("dispose", Ee), Te = new Map, B.programs = Te); let Ae = Te.get(ge); if (Ae !== void 0) { if (B.currentProgram === Ae && B.lightsStateVersion === ae) return $a(M, me), Ae } else me.uniforms = Z.getUniforms(M), M.onBeforeCompile(me, v), Ae = Z.acquireProgram(me, ge), Te.set(ge, Ae), B.uniforms = me.uniforms; const xe = B.uniforms; return (!M.isShaderMaterial && !M.isRawShaderMaterial || M.clipping === !0) && (xe.clippingPlanes = Ue.uniform), $a(M, me), B.needsLights = iu(M), B.lightsStateVersion = ae, B.needsLights && (xe.ambientLightColor.value = N.state.ambient, xe.lightProbe.value = N.state.probe, xe.directionalLights.value = N.state.directional, xe.directionalLightShadows.value = N.state.directionalShadow, xe.spotLights.value = N.state.spot, xe.spotLightShadows.value = N.state.spotShadow, xe.rectAreaLights.value = N.state.rectArea, xe.ltc_1.value = N.state.rectAreaLTC1, xe.ltc_2.value = N.state.rectAreaLTC2, xe.pointLights.value = N.state.point, xe.pointLightShadows.value = N.state.pointShadow, xe.hemisphereLights.value = N.state.hemi, xe.directionalShadowMap.value = N.state.directionalShadowMap, xe.directionalShadowMatrix.value = N.state.directionalShadowMatrix, xe.spotShadowMap.value = N.state.spotShadowMap, xe.spotLightMatrix.value = N.state.spotLightMatrix, xe.spotLightMap.value = N.state.spotLightMap, xe.pointShadowMap.value = N.state.pointShadowMap, xe.pointShadowMatrix.value = N.state.pointShadowMatrix), B.currentProgram = Ae, B.uniformsList = null, Ae } function Ka(M) { if (M.uniformsList === null) { const D = M.currentProgram.getUniforms(); M.uniformsList = xr.seqWithValue(D.seq, M.uniforms) } return M.uniformsList } function $a(M, D) { const U = Ce.get(M); U.outputColorSpace = D.outputColorSpace, U.batching = D.batching, U.batchingColor = D.batchingColor, U.instancing = D.instancing, U.instancingColor = D.instancingColor, U.instancingMorph = D.instancingMorph, U.skinning = D.skinning, U.morphTargets = D.morphTargets, U.morphNormals = D.morphNormals, U.morphColors = D.morphColors, U.morphTargetsCount = D.morphTargetsCount, U.numClippingPlanes = D.numClippingPlanes, U.numIntersection = D.numClipIntersection, U.vertexAlphas = D.vertexAlphas, U.vertexTangents = D.vertexTangents, U.toneMapping = D.toneMapping } function tu(M, D, U, B, N) { D.isScene !== !0 && (D = Le), De.resetTextureUnits(); const ie = D.fog, ae = B.isMeshStandardMaterial ? D.environment : null, me = w === null ? v.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace : Et, ge = (B.isMeshStandardMaterial ? x : T).get(B.envMap || ae), Te = B.vertexColors === !0 && !!U.attributes.color && U.attributes.color.itemSize === 4, Ae = !!U.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), xe = !!U.morphAttributes.position, je = !!U.morphAttributes.normal, at = !!U.morphAttributes.color; let lt = qn; B.toneMapped && (w === null || w.isXRRenderTarget === !0) && (lt = v.toneMapping); const Ft = U.morphAttributes.position || U.morphAttributes.normal || U.morphAttributes.color, Ye = Ft !== void 0 ? Ft.length : 0, ye = Ce.get(B), Mt = m.state.lights; if (V === !0 && (ee === !0 || M !== E)) { const Vt = M === E && B.id === F; Ue.setState(B, M, Vt) } let qe = !1; B.version === ye.__version ? (ye.needsLights && ye.lightsStateVersion !== Mt.state.version || ye.outputColorSpace !== me || N.isBatchedMesh && ye.batching === !1 || !N.isBatchedMesh && ye.batching === !0 || N.isBatchedMesh && ye.batchingColor === !0 && N.colorTexture === null || N.isBatchedMesh && ye.batchingColor === !1 && N.colorTexture !== null || N.isInstancedMesh && ye.instancing === !1 || !N.isInstancedMesh && ye.instancing === !0 || N.isSkinnedMesh && ye.skinning === !1 || !N.isSkinnedMesh && ye.skinning === !0 || N.isInstancedMesh && ye.instancingColor === !0 && N.instanceColor === null || N.isInstancedMesh && ye.instancingColor === !1 && N.instanceColor !== null || N.isInstancedMesh && ye.instancingMorph === !0 && N.morphTexture === null || N.isInstancedMesh && ye.instancingMorph === !1 && N.morphTexture !== null || ye.envMap !== ge || B.fog === !0 && ye.fog !== ie || ye.numClippingPlanes !== void 0 && (ye.numClippingPlanes !== Ue.numPlanes || ye.numIntersection !== Ue.numIntersection) || ye.vertexAlphas !== Te || ye.vertexTangents !== Ae || ye.morphTargets !== xe || ye.morphNormals !== je || ye.morphColors !== at || ye.toneMapping !== lt || ye.morphTargetsCount !== Ye) && (qe = !0) : (qe = !0, ye.__version = B.version); let Yt = ye.currentProgram; qe === !0 && (Yt = Us(B, D, N)); let fi = !1, Bt = !1, Hr = !1; const dt = Yt.getUniforms(), Nn = ye.uniforms; if (Me.useProgram(Yt.program) && (fi = !0, Bt = !0, Hr = !0), B.id !== F && (F = B.id, Bt = !0), fi || E !== M) { dt.setValue(A, "projectionMatrix", M.projectionMatrix), dt.setValue(A, "viewMatrix", M.matrixWorldInverse); const Vt = dt.map.cameraPosition; Vt !== void 0 && Vt.setValue(A, ue.setFromMatrixPosition(M.matrixWorld)), Qe.logarithmicDepthBuffer && dt.setValue(A, "logDepthBufFC", 2 / (Math.log(M.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && dt.setValue(A, "isOrthographic", M.isOrthographicCamera === !0), E !== M && (E = M, Bt = !0, Hr = !0) } if (N.isSkinnedMesh) { dt.setOptional(A, N, "bindMatrix"), dt.setOptional(A, N, "bindMatrixInverse"); const Vt = N.skeleton; Vt && (Vt.boneTexture === null && Vt.computeBoneTexture(), dt.setValue(A, "boneTexture", Vt.boneTexture, De)) } N.isBatchedMesh && (dt.setOptional(A, N, "batchingTexture"), dt.setValue(A, "batchingTexture", N._matricesTexture, De), dt.setOptional(A, N, "batchingIdTexture"), dt.setValue(A, "batchingIdTexture", N._indirectTexture, De), dt.setOptional(A, N, "batchingColorTexture"), N._colorsTexture !== null && dt.setValue(A, "batchingColorTexture", N._colorsTexture, De)); const Vr = U.morphAttributes; if ((Vr.position !== void 0 || Vr.normal !== void 0 || Vr.color !== void 0) && Ve.update(N, U, Yt), (Bt || ye.receiveShadow !== N.receiveShadow) && (ye.receiveShadow = N.receiveShadow, dt.setValue(A, "receiveShadow", N.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Nn.envMap.value = ge, Nn.flipEnvMap.value = ge.isCubeTexture && ge.isRenderTargetTexture === !1 ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && D.environment !== null && (Nn.envMapIntensity.value = D.environmentIntensity), Bt && (dt.setValue(A, "toneMappingExposure", v.toneMappingExposure), ye.needsLights && nu(Nn, Hr), ie && B.fog === !0 && be.refreshFogUniforms(Nn, ie), be.refreshMaterialUniforms(Nn, B, J, W, m.state.transmissionRenderTarget[M.id]), xr.upload(A, Ka(ye), Nn, De)), B.isShaderMaterial && B.uniformsNeedUpdate === !0 && (xr.upload(A, Ka(ye), Nn, De), B.uniformsNeedUpdate = !1), B.isSpriteMaterial && dt.setValue(A, "center", N.center), dt.setValue(A, "modelViewMatrix", N.modelViewMatrix), dt.setValue(A, "normalMatrix", N.normalMatrix), dt.setValue(A, "modelMatrix", N.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) { const Vt = B.uniformsGroups; for (let Gr = 0, su = Vt.length; Gr < su; Gr++) { const Za = Vt[Gr]; rt.update(Za, Yt), rt.bind(Za, Yt) } } return Yt } function nu(M, D) { M.ambientLightColor.needsUpdate = D, M.lightProbe.needsUpdate = D, M.directionalLights.needsUpdate = D, M.directionalLightShadows.needsUpdate = D, M.pointLights.needsUpdate = D, M.pointLightShadows.needsUpdate = D, M.spotLights.needsUpdate = D, M.spotLightShadows.needsUpdate = D, M.rectAreaLights.needsUpdate = D, M.hemisphereLights.needsUpdate = D } function iu(M) { return M.isMeshLambertMaterial || M.isMeshToonMaterial || M.isMeshPhongMaterial || M.isMeshStandardMaterial || M.isShadowMaterial || M.isShaderMaterial && M.lights === !0 } this.getActiveCubeFace = function () { return I }, this.getActiveMipmapLevel = function () { return R }, this.getRenderTarget = function () { return w }, this.setRenderTargetTextures = function (M, D, U) { Ce.get(M.texture).__webglTexture = D, Ce.get(M.depthTexture).__webglTexture = U; const B = Ce.get(M); B.__hasExternalTextures = !0, B.__autoAllocateDepthBuffer = U === void 0, B.__autoAllocateDepthBuffer || Ke.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = !1) }, this.setRenderTargetFramebuffer = function (M, D) { const U = Ce.get(M); U.__webglFramebuffer = D, U.__useDefaultFramebuffer = D === void 0 }, this.setRenderTarget = function (M, D = 0, U = 0) { w = M, I = D, R = U; let B = !0, N = null, ie = !1, ae = !1; if (M) { const ge = Ce.get(M); if (ge.__useDefaultFramebuffer !== void 0) Me.bindFramebuffer(A.FRAMEBUFFER, null), B = !1; else if (ge.__webglFramebuffer === void 0) De.setupRenderTarget(M); else if (ge.__hasExternalTextures) De.rebindTextures(M, Ce.get(M.texture).__webglTexture, Ce.get(M.depthTexture).__webglTexture); else if (M.depthBuffer) { const xe = M.depthTexture; if (ge.__boundDepthTexture !== xe) { if (xe !== null && Ce.has(xe) && (M.width !== xe.image.width || M.height !== xe.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size."); De.setupDepthRenderbuffer(M) } } const Te = M.texture; (Te.isData3DTexture || Te.isDataArrayTexture || Te.isCompressedArrayTexture) && (ae = !0); const Ae = Ce.get(M).__webglFramebuffer; M.isWebGLCubeRenderTarget ? (Array.isArray(Ae[D]) ? N = Ae[D][U] : N = Ae[D], ie = !0) : M.samples > 0 && De.useMultisampledRTT(M) === !1 ? N = Ce.get(M).__webglMultisampledFramebuffer : Array.isArray(Ae) ? N = Ae[U] : N = Ae, S.copy(M.viewport), P.copy(M.scissor), G = M.scissorTest } else S.copy(fe).multiplyScalar(J).floor(), P.copy(ve).multiplyScalar(J).floor(), G = He; if (Me.bindFramebuffer(A.FRAMEBUFFER, N) && B && Me.drawBuffers(M, N), Me.viewport(S), Me.scissor(P), Me.setScissorTest(G), ie) { const ge = Ce.get(M.texture); A.framebufferTexture2D(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, A.TEXTURE_CUBE_MAP_POSITIVE_X + D, ge.__webglTexture, U) } else if (ae) { const ge = Ce.get(M.texture), Te = D || 0; A.framebufferTextureLayer(A.FRAMEBUFFER, A.COLOR_ATTACHMENT0, ge.__webglTexture, U || 0, Te) } F = -1 }, this.readRenderTargetPixels = function (M, D, U, B, N, ie, ae) { if (!(M && M.isWebGLRenderTarget)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); return } let me = Ce.get(M).__webglFramebuffer; if (M.isWebGLCubeRenderTarget && ae !== void 0 && (me = me[ae]), me) { Me.bindFramebuffer(A.FRAMEBUFFER, me); try { const ge = M.texture, Te = ge.format, Ae = ge.type; if (!Qe.textureFormatReadable(Te)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."); return } if (!Qe.textureTypeReadable(Ae)) { console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."); return } D >= 0 && D <= M.width - B && U >= 0 && U <= M.height - N && A.readPixels(D, U, B, N, Pe.convert(Te), Pe.convert(Ae), ie) } finally { const ge = w !== null ? Ce.get(w).__webglFramebuffer : null; Me.bindFramebuffer(A.FRAMEBUFFER, ge) } } }, this.readRenderTargetPixelsAsync = async function (M, D, U, B, N, ie, ae) { if (!(M && M.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."); let me = Ce.get(M).__webglFramebuffer; if (M.isWebGLCubeRenderTarget && ae !== void 0 && (me = me[ae]), me) { Me.bindFramebuffer(A.FRAMEBUFFER, me); try { const ge = M.texture, Te = ge.format, Ae = ge.type; if (!Qe.textureFormatReadable(Te)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format."); if (!Qe.textureTypeReadable(Ae)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type."); if (D >= 0 && D <= M.width - B && U >= 0 && U <= M.height - N) { const xe = A.createBuffer(); A.bindBuffer(A.PIXEL_PACK_BUFFER, xe), A.bufferData(A.PIXEL_PACK_BUFFER, ie.byteLength, A.STREAM_READ), A.readPixels(D, U, B, N, Pe.convert(Te), Pe.convert(Ae), 0), A.flush(); const je = A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE, 0); await _d(A, je, 4); try { A.bindBuffer(A.PIXEL_PACK_BUFFER, xe), A.getBufferSubData(A.PIXEL_PACK_BUFFER, 0, ie) } finally { A.deleteBuffer(xe), A.deleteSync(je) } return ie } } finally { const ge = w !== null ? Ce.get(w).__webglFramebuffer : null; Me.bindFramebuffer(A.FRAMEBUFFER, ge) } } }, this.copyFramebufferToTexture = function (M, D = null, U = 0) { M.isTexture !== !0 && (Hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."), D = arguments[0] || null, M = arguments[1]); const B = Math.pow(2, -U), N = Math.floor(M.image.width * B), ie = Math.floor(M.image.height * B), ae = D !== null ? D.x : 0, me = D !== null ? D.y : 0; De.setTexture2D(M, 0), A.copyTexSubImage2D(A.TEXTURE_2D, U, 0, 0, ae, me, N, ie), Me.unbindTexture() }, this.copyTextureToTexture = function (M, D, U = null, B = null, N = 0) { M.isTexture !== !0 && (Hi("WebGLRenderer: copyTextureToTexture function signature has changed."), B = arguments[0] || null, M = arguments[1], D = arguments[2], N = arguments[3] || 0, U = null); let ie, ae, me, ge, Te, Ae; U !== null ? (ie = U.max.x - U.min.x, ae = U.max.y - U.min.y, me = U.min.x, ge = U.min.y) : (ie = M.image.width, ae = M.image.height, me = 0, ge = 0), B !== null ? (Te = B.x, Ae = B.y) : (Te = 0, Ae = 0); const xe = Pe.convert(D.format), je = Pe.convert(D.type); De.setTexture2D(D, 0), A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment); const at = A.getParameter(A.UNPACK_ROW_LENGTH), lt = A.getParameter(A.UNPACK_IMAGE_HEIGHT), Ft = A.getParameter(A.UNPACK_SKIP_PIXELS), Ye = A.getParameter(A.UNPACK_SKIP_ROWS), ye = A.getParameter(A.UNPACK_SKIP_IMAGES), Mt = M.isCompressedTexture ? M.mipmaps[N] : M.image; A.pixelStorei(A.UNPACK_ROW_LENGTH, Mt.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, Mt.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, me), A.pixelStorei(A.UNPACK_SKIP_ROWS, ge), M.isDataTexture ? A.texSubImage2D(A.TEXTURE_2D, N, Te, Ae, ie, ae, xe, je, Mt.data) : M.isCompressedTexture ? A.compressedTexSubImage2D(A.TEXTURE_2D, N, Te, Ae, Mt.width, Mt.height, xe, Mt.data) : A.texSubImage2D(A.TEXTURE_2D, N, Te, Ae, ie, ae, xe, je, Mt), A.pixelStorei(A.UNPACK_ROW_LENGTH, at), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, lt), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Ft), A.pixelStorei(A.UNPACK_SKIP_ROWS, Ye), A.pixelStorei(A.UNPACK_SKIP_IMAGES, ye), N === 0 && D.generateMipmaps && A.generateMipmap(A.TEXTURE_2D), Me.unbindTexture() }, this.copyTextureToTexture3D = function (M, D, U = null, B = null, N = 0) { M.isTexture !== !0 && (Hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."), U = arguments[0] || null, B = arguments[1] || null, M = arguments[2], D = arguments[3], N = arguments[4] || 0); let ie, ae, me, ge, Te, Ae, xe, je, at; const lt = M.isCompressedTexture ? M.mipmaps[N] : M.image; U !== null ? (ie = U.max.x - U.min.x, ae = U.max.y - U.min.y, me = U.max.z - U.min.z, ge = U.min.x, Te = U.min.y, Ae = U.min.z) : (ie = lt.width, ae = lt.height, me = lt.depth, ge = 0, Te = 0, Ae = 0), B !== null ? (xe = B.x, je = B.y, at = B.z) : (xe = 0, je = 0, at = 0); const Ft = Pe.convert(D.format), Ye = Pe.convert(D.type); let ye; if (D.isData3DTexture) De.setTexture3D(D, 0), ye = A.TEXTURE_3D; else if (D.isDataArrayTexture || D.isCompressedArrayTexture) De.setTexture2DArray(D, 0), ye = A.TEXTURE_2D_ARRAY; else { console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."); return } A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL, D.flipY), A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), A.pixelStorei(A.UNPACK_ALIGNMENT, D.unpackAlignment); const Mt = A.getParameter(A.UNPACK_ROW_LENGTH), qe = A.getParameter(A.UNPACK_IMAGE_HEIGHT), Yt = A.getParameter(A.UNPACK_SKIP_PIXELS), fi = A.getParameter(A.UNPACK_SKIP_ROWS), Bt = A.getParameter(A.UNPACK_SKIP_IMAGES); A.pixelStorei(A.UNPACK_ROW_LENGTH, lt.width), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, lt.height), A.pixelStorei(A.UNPACK_SKIP_PIXELS, ge), A.pixelStorei(A.UNPACK_SKIP_ROWS, Te), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Ae), M.isDataTexture || M.isData3DTexture ? A.texSubImage3D(ye, N, xe, je, at, ie, ae, me, Ft, Ye, lt.data) : D.isCompressedArrayTexture ? A.compressedTexSubImage3D(ye, N, xe, je, at, ie, ae, me, Ft, lt.data) : A.texSubImage3D(ye, N, xe, je, at, ie, ae, me, Ft, Ye, lt), A.pixelStorei(A.UNPACK_ROW_LENGTH, Mt), A.pixelStorei(A.UNPACK_IMAGE_HEIGHT, qe), A.pixelStorei(A.UNPACK_SKIP_PIXELS, Yt), A.pixelStorei(A.UNPACK_SKIP_ROWS, fi), A.pixelStorei(A.UNPACK_SKIP_IMAGES, Bt), N === 0 && D.generateMipmaps && A.generateMipmap(ye), Me.unbindTexture() }, this.initRenderTarget = function (M) { Ce.get(M).__webglFramebuffer === void 0 && De.setupRenderTarget(M) }, this.initTexture = function (M) { M.isCubeTexture ? De.setTextureCube(M, 0) : M.isData3DTexture ? De.setTexture3D(M, 0) : M.isDataArrayTexture || M.isCompressedArrayTexture ? De.setTexture2DArray(M, 0) : De.setTexture2D(M, 0), Me.unbindTexture() }, this.resetState = function () { I = 0, R = 0, w = null, Me.reset(), Fe.reset() }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } get coordinateSystem() { return Rn } get outputColorSpace() { return this._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; const t = this.getContext(); t.drawingBufferColorSpace = e === Ra ? "display-p3" : "srgb", t.unpackColorSpace = We.workingColorSpace === Dr ? "display-p3" : "srgb" } } class Ia { constructor(e, t = 1, n = 1e3) { this.isFog = !0, this.name = "", this.color = new Se(e), this.near = t, this.far = n } clone() { return new Ia(this.color, this.near, this.far) } toJSON() { return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far } } } class T_ extends it { constructor() { super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new fn, this.environmentIntensity = 1, this.environmentRotation = new fn, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t } } class w_ { constructor(e, t) { this.isInterleavedBuffer = !0, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = oa, this._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.version = 0, this.uuid = en() } onUploadCallback() { } set needsUpdate(e) { e === !0 && this.version++ } get updateRange() { return Hi("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e, t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges.length = 0 } copy(e) { return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this } copyAt(e, t, n) { e *= this.stride, n *= t.stride; for (let i = 0, r = this.stride; i < r; i++)this.array[e + i] = t.array[n + i]; return this } set(e, t = 0) { return this.array.set(e, t), this } clone(e) { e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = en()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer); const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride); return n.setUsage(this.usage), n } onUpload(e) { return this.onUploadCallback = e, this } toJSON(e) { return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = en()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride } } } const Rt = new C; class Na { constructor(e, t, n, i = !1) { this.isInterleavedBufferAttribute = !0, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i } get count() { return this.data.count } get array() { return this.data.array } set needsUpdate(e) { this.data.needsUpdate = e } applyMatrix4(e) { for (let t = 0, n = this.data.count; t < n; t++)Rt.fromBufferAttribute(this, t), Rt.applyMatrix4(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z); return this } applyNormalMatrix(e) { for (let t = 0, n = this.count; t < n; t++)Rt.fromBufferAttribute(this, t), Rt.applyNormalMatrix(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z); return this } transformDirection(e) { for (let t = 0, n = this.count; t < n; t++)Rt.fromBufferAttribute(this, t), Rt.transformDirection(e), this.setXYZ(t, Rt.x, Rt.y, Rt.z); return this } getComponent(e, t) { let n = this.array[e * this.data.stride + this.offset + t]; return this.normalized && (n = Jt(n, this.array)), n } setComponent(e, t, n) { return this.normalized && (n = $e(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this } setX(e, t) { return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this } setY(e, t) { return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this } setZ(e, t) { return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this } setW(e, t) { return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this } getX(e) { let t = this.data.array[e * this.data.stride + this.offset]; return this.normalized && (t = Jt(t, this.array)), t } getY(e) { let t = this.data.array[e * this.data.stride + this.offset + 1]; return this.normalized && (t = Jt(t, this.array)), t } getZ(e) { let t = this.data.array[e * this.data.stride + this.offset + 2]; return this.normalized && (t = Jt(t, this.array)), t } getW(e) { let t = this.data.array[e * this.data.stride + this.offset + 3]; return this.normalized && (t = Jt(t, this.array)), t } setXY(e, t, n) { return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this } setXYZ(e, t, n, i) { return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this } setXYZW(e, t, n, i, r) { return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array), r = $e(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this } clone(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]) } return new Dt(new this.array.constructor(t), this.itemSize, this.normalized) } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new Na(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized) } toJSON(e) { if (e === void 0) { console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data."); const t = []; for (let n = 0; n < this.count; n++) { const i = n * this.data.stride + this.offset; for (let r = 0; r < this.itemSize; r++)t.push(this.data.array[i + r]) } return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized } } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: !0, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized } } } const Jl = new C, Ql = new tt, ec = new tt, A_ = new C, tc = new Ie, ir = new C, _o = new pn, nc = new Ie, vo = new ts; class R_ extends Ut { constructor(e, t) { super(e, t), this.isSkinnedMesh = !0, this.type = "SkinnedMesh", this.bindMode = nl, this.bindMatrix = new Ie, this.bindMatrixInverse = new Ie, this.boundingBox = null, this.boundingSphere = null } computeBoundingBox() { const e = this.geometry; this.boundingBox === null && (this.boundingBox = new In), this.boundingBox.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, ir), this.boundingBox.expandByPoint(ir) } computeBoundingSphere() { const e = this.geometry; this.boundingSphere === null && (this.boundingSphere = new pn), this.boundingSphere.makeEmpty(); const t = e.getAttribute("position"); for (let n = 0; n < t.count; n++)this.getVertexPosition(n, ir), this.boundingSphere.expandByPoint(ir) } copy(e, t) { return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } raycast(e, t) { const n = this.material, i = this.matrixWorld; n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), _o.copy(this.boundingSphere), _o.applyMatrix4(i), e.ray.intersectsSphere(_o) !== !1 && (nc.copy(i).invert(), vo.copy(e.ray).applyMatrix4(nc), !(this.boundingBox !== null && vo.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, vo))) } getVertexPosition(e, t) { return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t } bind(e, t) { this.skeleton = e, t === void 0 && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert() } pose() { this.skeleton.pose() } normalizeSkinWeights() { const e = new tt, t = this.geometry.attributes.skinWeight; for (let n = 0, i = t.count; n < i; n++) { e.fromBufferAttribute(t, n); const r = 1 / e.manhattanLength(); r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w) } } updateMatrixWorld(e) { super.updateMatrixWorld(e), this.bindMode === nl ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Vu ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode) } applyBoneTransform(e, t) { const n = this.skeleton, i = this.geometry; Ql.fromBufferAttribute(i.attributes.skinIndex, e), ec.fromBufferAttribute(i.attributes.skinWeight, e), Jl.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0); for (let r = 0; r < 4; r++) { const o = ec.getComponent(r); if (o !== 0) { const a = Ql.getComponent(r); tc.multiplyMatrices(n.bones[a].matrixWorld, n.boneInverses[a]), t.addScaledVector(A_.copy(Jl).applyMatrix4(tc), o) } } return t.applyMatrix4(this.bindMatrixInverse) } } class Rh extends it { constructor() { super(), this.isBone = !0, this.type = "Bone" } } class Ch extends vt { constructor(e = null, t = 1, n = 1, i, r, o, a, l, c = At, h = At, u, d) { super(null, o, a, l, c, h, i, r, u, d), this.isDataTexture = !0, this.image = { data: e, width: t, height: n }, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1 } } const ic = new Ie, C_ = new Ie; class Ua { constructor(e = [], t = []) { this.uuid = en(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init() } init() { const e = this.bones, t = this.boneInverses; if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses(); else if (e.length !== t.length) { console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = []; for (let n = 0, i = this.bones.length; n < i; n++)this.boneInverses.push(new Ie) } } calculateInverses() { this.boneInverses.length = 0; for (let e = 0, t = this.bones.length; e < t; e++) { const n = new Ie; this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n) } } pose() { for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && n.matrixWorld.copy(this.boneInverses[e]).invert() } for (let e = 0, t = this.bones.length; e < t; e++) { const n = this.bones[e]; n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale)) } } update() { const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture; for (let r = 0, o = e.length; r < o; r++) { const a = e[r] ? e[r].matrixWorld : C_; ic.multiplyMatrices(a, t[r]), ic.toArray(n, r * 16) } i !== null && (i.needsUpdate = !0) } clone() { return new Ua(this.bones, this.boneInverses) } computeBoneTexture() { let e = Math.sqrt(this.bones.length * 4); e = Math.ceil(e / 4) * 4, e = Math.max(e, 4); const t = new Float32Array(e * e * 4); t.set(this.boneMatrices); const n = new Ch(t, e, e, jt, Qt); return n.needsUpdate = !0, this.boneMatrices = t, this.boneTexture = n, this } getBoneByName(e) { for (let t = 0, n = this.bones.length; t < n; t++) { const i = this.bones[t]; if (i.name === e) return i } } dispose() { this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null) } fromJSON(e, t) { this.uuid = e.uuid; for (let n = 0, i = e.bones.length; n < i; n++) { const r = e.bones[n]; let o = t[r]; o === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), o = new Rh), this.bones.push(o), this.boneInverses.push(new Ie().fromArray(e.boneInverses[n])) } return this.init(), this } toJSON() { const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] }; e.uuid = this.uuid; const t = this.bones, n = this.boneInverses; for (let i = 0, r = t.length; i < r; i++) { const o = t[i]; e.bones.push(o.uuid); const a = n[i]; e.boneInverses.push(a.toArray()) } return e } } class un extends Dt { constructor(e, t, n, i = 1) { super(e, t, n), this.isInstancedBufferAttribute = !0, this.meshPerAttribute = i } copy(e) { return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this } toJSON() { const e = super.toJSON(); return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = !0, e } } const Li = new Ie, sc = new Ie, sr = [], rc = new In, P_ = new Ie, us = new Ut, ds = new pn; class Ph extends Ut { constructor(e, t, n) { super(e, t), this.isInstancedMesh = !0, this.instanceMatrix = new un(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null; for (let i = 0; i < n; i++)this.setMatrixAt(i, P_) } computeBoundingBox() { const e = this.geometry, t = this.count; this.boundingBox === null && (this.boundingBox = new In), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, Li), rc.copy(e.boundingBox).applyMatrix4(Li), this.boundingBox.union(rc) } computeBoundingSphere() { const e = this.geometry, t = this.count; this.boundingSphere === null && (this.boundingSphere = new pn), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty(); for (let n = 0; n < t; n++)this.getMatrixAt(n, Li), ds.copy(e.boundingSphere).applyMatrix4(Li), this.boundingSphere.union(ds) } copy(e, t) { return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this } getColorAt(e, t) { t.fromArray(this.instanceColor.array, e * 3) } getMatrixAt(e, t) { t.fromArray(this.instanceMatrix.array, e * 16) } getMorphAt(e, t) { const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, o = e * r + 1; for (let a = 0; a < n.length; a++)n[a] = i[o + a] } raycast(e, t) { const n = this.matrixWorld, i = this.count; if (us.geometry = this.geometry, us.material = this.material, us.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), ds.copy(this.boundingSphere), ds.applyMatrix4(n), e.ray.intersectsSphere(ds) !== !1)) for (let r = 0; r < i; r++) { this.getMatrixAt(r, Li), sc.multiplyMatrices(n, Li), us.matrixWorld = sc, us.raycast(e, sr); for (let o = 0, a = sr.length; o < a; o++) { const l = sr[o]; l.instanceId = r, l.object = this, t.push(l) } sr.length = 0 } } setColorAt(e, t) { this.instanceColor === null && (this.instanceColor = new un(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3) } setMatrixAt(e, t) { t.toArray(this.instanceMatrix.array, e * 16) } setMorphAt(e, t) { const n = t.morphTargetInfluences, i = n.length + 1; this.morphTexture === null && (this.morphTexture = new Ch(new Float32Array(i * this.count), i, this.count, Ea, Qt)); const r = this.morphTexture.source.data.data; let o = 0; for (let c = 0; c < n.length; c++)o += n[c]; const a = this.geometry.morphTargetsRelative ? 1 : 1 - o, l = i * e; r[l] = a, r.set(n, l + 1) } updateMorphTargets() { } dispose() { return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this } } class Lh extends dn { constructor(e) { super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Se(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this } } const wr = new C, Ar = new C, oc = new Ie, fs = new ts, rr = new pn, xo = new C, ac = new C; class Oa extends it { constructor(e = new rn, t = new Lh) { super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = [0]; for (let i = 1, r = t.count; i < r; i++)wr.fromBufferAttribute(t, i - 1), Ar.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += wr.distanceTo(Ar); e.setAttribute("lineDistance", new tn(n, 1)) } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), rr.copy(n.boundingSphere), rr.applyMatrix4(i), rr.radius += r, e.ray.intersectsSphere(rr) === !1) return; oc.copy(i).invert(), fs.copy(e.ray).applyMatrix4(oc); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position; if (h !== null) { const p = Math.max(0, o.start), g = Math.min(h.count, o.start + o.count); for (let _ = p, m = g - 1; _ < m; _ += c) { const f = h.getX(_), y = h.getX(_ + 1), v = or(this, e, fs, l, f, y); v && t.push(v) } if (this.isLineLoop) { const _ = h.getX(g - 1), m = h.getX(p), f = or(this, e, fs, l, _, m); f && t.push(f) } } else { const p = Math.max(0, o.start), g = Math.min(d.count, o.start + o.count); for (let _ = p, m = g - 1; _ < m; _ += c) { const f = or(this, e, fs, l, _, _ + 1); f && t.push(f) } if (this.isLineLoop) { const _ = or(this, e, fs, l, g - 1, p); _ && t.push(_) } } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } } function or(s, e, t, n, i, r) { const o = s.geometry.attributes.position; if (wr.fromBufferAttribute(o, i), Ar.fromBufferAttribute(o, r), t.distanceSqToSegment(wr, Ar, xo, ac) > n) return; xo.applyMatrix4(s.matrixWorld); const l = e.ray.origin.distanceTo(xo); if (!(l < e.near || l > e.far)) return { distance: l, point: ac.clone().applyMatrix4(s.matrixWorld), index: i, face: null, faceIndex: null, object: s } } const lc = new C, cc = new C; class L_ extends Oa { constructor(e, t) { super(e, t), this.isLineSegments = !0, this.type = "LineSegments" } computeLineDistances() { const e = this.geometry; if (e.index === null) { const t = e.attributes.position, n = []; for (let i = 0, r = t.count; i < r; i += 2)lc.fromBufferAttribute(t, i), cc.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + lc.distanceTo(cc); e.setAttribute("lineDistance", new tn(n, 1)) } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry."); return this } } class D_ extends Oa { constructor(e, t) { super(e, t), this.isLineLoop = !0, this.type = "LineLoop" } } class Dh extends dn { constructor(e) { super(), this.isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new Se(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this } } const hc = new Ie, la = new ts, ar = new pn, lr = new C; class I_ extends it { constructor(e = new rn, t = new Dh) { super(), this.isPoints = !0, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e, t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this } raycast(e, t) { const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), ar.copy(n.boundingSphere), ar.applyMatrix4(i), ar.radius += r, e.ray.intersectsSphere(ar) === !1) return; hc.copy(i).invert(), la.copy(e.ray).applyMatrix4(hc); const a = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = a * a, c = n.index, u = n.attributes.position; if (c !== null) { const d = Math.max(0, o.start), p = Math.min(c.count, o.start + o.count); for (let g = d, _ = p; g < _; g++) { const m = c.getX(g); lr.fromBufferAttribute(u, m), uc(lr, m, l, i, e, t, this) } } else { const d = Math.max(0, o.start), p = Math.min(u.count, o.start + o.count); for (let g = d, _ = p; g < _; g++)lr.fromBufferAttribute(u, g), uc(lr, g, l, i, e, t, this) } } updateMorphTargets() { const t = this.geometry.morphAttributes, n = Object.keys(t); if (n.length > 0) { const i = t[n[0]]; if (i !== void 0) { this.morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let r = 0, o = i.length; r < o; r++) { const a = i[r].name || String(r); this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = r } } } } } function uc(s, e, t, n, i, r, o) { const a = la.distanceSqToPoint(s); if (a < t) { const l = new C; la.closestPointToPoint(s, l), l.applyMatrix4(n); const c = i.ray.origin.distanceTo(l); if (c < i.near || c > i.far) return; r.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null, object: o }) } } class Fr extends dn { constructor(e) { super(), this.isMeshStandardMaterial = !0, this.defines = { STANDARD: "" }, this.type = "MeshStandardMaterial", this.color = new Se(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Se(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = lh, this.normalScale = new le(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fn, this.envMapIntensity = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this } } class mn extends Fr { constructor(e) { super(), this.isMeshPhysicalMaterial = !0, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new le(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function () { return bt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1) }, set: function (t) { this.ior = (1 + .4 * t) / (1 - .4 * t) } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Se(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Se(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Se(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e) } get anisotropy() { return this._anisotropy } set anisotropy(e) { this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e } get clearcoat() { return this._clearcoat } set clearcoat(e) { this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e } get iridescence() { return this._iridescence } set iridescence(e) { this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e } get dispersion() { return this._dispersion } set dispersion(e) { this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e } get sheen() { return this._sheen } set sheen(e) { this._sheen > 0 != e > 0 && this.version++, this._sheen = e } get transmission() { return this._transmission } set transmission(e) { this._transmission > 0 != e > 0 && this.version++, this._transmission = e } copy(e) { return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this } } function cr(s, e, t) { return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s) } function N_(s) { return ArrayBuffer.isView(s) && !(s instanceof DataView) } function U_(s) { function e(i, r) { return s[i] - s[r] } const t = s.length, n = new Array(t); for (let i = 0; i !== t; ++i)n[i] = i; return n.sort(e), n } function dc(s, e, t) { const n = s.length, i = new s.constructor(n); for (let r = 0, o = 0; o !== n; ++r) { const a = t[r] * e; for (let l = 0; l !== e; ++l)i[o++] = s[a + l] } return i } function Ih(s, e, t, n) { let i = 1, r = s[0]; for (; r !== void 0 && r[n] === void 0;)r = s[i++]; if (r === void 0) return; let o = r[n]; if (o !== void 0) if (Array.isArray(o)) do o = r[n], o !== void 0 && (e.push(r.time), t.push.apply(t, o)), r = s[i++]; while (r !== void 0); else if (o.toArray !== void 0) do o = r[n], o !== void 0 && (e.push(r.time), o.toArray(t, t.length)), r = s[i++]; while (r !== void 0); else do o = r[n], o !== void 0 && (e.push(r.time), t.push(o)), r = s[i++]; while (r !== void 0) } class Is { constructor(e, t, n, i) { this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {} } evaluate(e) { const t = this.parameterPositions; let n = this._cachedIndex, i = t[n], r = t[n - 1]; n: { e: { let o; t: { i: if (!(e < i)) { for (let a = n + 2; ;) { if (i === void 0) { if (e < r) break i; return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } if (n === a) break; if (r = i, i = t[++n], e < i) break e } o = t.length; break t } if (!(e >= r)) { const a = t[1]; e < a && (n = 2, r = a); for (let l = n - 2; ;) { if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (n === l) break; if (i = r, r = t[--n - 1], e >= r) break e } o = n, n = 0; break t } break n } for (; n < o;) { const a = n + o >>> 1; e < t[a] ? o = a : n = a + 1 } if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0); if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1) } this._cachedIndex = n, this.intervalChanged_(n, r, i) } return this.interpolate_(n, r, e, i) } getSettings_() { return this.settings || this.DefaultSettings_ } copySampleValue_(e) { const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i; for (let o = 0; o !== i; ++o)t[o] = n[r + o]; return t } interpolate_() { throw new Error("call to abstract method") } intervalChanged_() { } } class O_ extends Is { constructor(e, t, n, i) { super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: il, endingEnd: il } } intervalChanged_(e, t, n) { const i = this.parameterPositions; let r = e - 2, o = e + 1, a = i[r], l = i[o]; if (a === void 0) switch (this.getSettings_().endingStart) { case sl: r = e, a = 2 * t - n; break; case rl: r = i.length - 2, a = t + i[r] - i[r + 1]; break; default: r = e, a = n }if (l === void 0) switch (this.getSettings_().endingEnd) { case sl: o = e, l = 2 * n - t; break; case rl: o = 1, l = n + i[1] - i[0]; break; default: o = e - 1, l = t }const c = (n - t) * .5, h = this.valueSize; this._weightPrev = c / (t - a), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = o * h } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, f = -d * m + 2 * d * _ - d * g, y = (1 + d) * m + (-1.5 - 2 * d) * _ + (-.5 + d) * g + 1, v = (-1 - p) * m + (1.5 + p) * _ + .5 * g, b = p * m - p * _; for (let I = 0; I !== a; ++I)r[I] = f * o[h + I] + y * o[c + I] + v * o[l + I] + b * o[u + I]; return r } } class F_ extends Is { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = e * a, c = l - a, h = (n - t) / (i - t), u = 1 - h; for (let d = 0; d !== a; ++d)r[d] = o[c + d] * u + o[l + d] * h; return r } } class B_ extends Is { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e) { return this.copySampleValue_(e - 1) } } class gn { constructor(e, t, n, i) { if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined"); if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e); this.name = e, this.times = cr(t, this.TimeBufferType), this.values = cr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation) } static toJSON(e) { const t = e.constructor; let n; if (t.toJSON !== this.toJSON) n = t.toJSON(e); else { n = { name: e.name, times: cr(e.times, Array), values: cr(e.values, Array) }; const i = e.getInterpolation(); i !== e.DefaultInterpolation && (n.interpolation = i) } return n.type = e.ValueTypeName, n } InterpolantFactoryMethodDiscrete(e) { return new B_(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodLinear(e) { return new F_(this.times, this.values, this.getValueSize(), e) } InterpolantFactoryMethodSmooth(e) { return new O_(this.times, this.values, this.getValueSize(), e) } setInterpolation(e) { let t; switch (e) { case Rs: t = this.InterpolantFactoryMethodDiscrete; break; case Cs: t = this.InterpolantFactoryMethodLinear; break; case Wr: t = this.InterpolantFactoryMethodSmooth; break }if (t === void 0) { const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name; if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation); else throw new Error(n); return console.warn("THREE.KeyframeTrack:", n), this } return this.createInterpolant = t, this } getInterpolation() { switch (this.createInterpolant) { case this.InterpolantFactoryMethodDiscrete: return Rs; case this.InterpolantFactoryMethodLinear: return Cs; case this.InterpolantFactoryMethodSmooth: return Wr } } getValueSize() { return this.values.length / this.times.length } shift(e) { if (e !== 0) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] += e } return this } scale(e) { if (e !== 1) { const t = this.times; for (let n = 0, i = t.length; n !== i; ++n)t[n] *= e } return this } trim(e, t) { const n = this.times, i = n.length; let r = 0, o = i - 1; for (; r !== i && n[r] < e;)++r; for (; o !== -1 && n[o] > t;)--o; if (++o, r !== 0 || o !== i) { r >= o && (o = Math.max(o, 1), r = o - 1); const a = this.getValueSize(); this.times = n.slice(r, o), this.values = this.values.slice(r * a, o * a) } return this } validate() { let e = !0; const t = this.getValueSize(); t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = !1); const n = this.times, i = this.values, r = n.length; r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = !1); let o = null; for (let a = 0; a !== r; a++) { const l = n[a]; if (typeof l == "number" && isNaN(l)) { console.error("THREE.KeyframeTrack: Time is not a valid number.", this, a, l), e = !1; break } if (o !== null && o > l) { console.error("THREE.KeyframeTrack: Out of order keys.", this, a, l, o), e = !1; break } o = l } if (i !== void 0 && N_(i)) for (let a = 0, l = i.length; a !== l; ++a) { const c = i[a]; if (isNaN(c)) { console.error("THREE.KeyframeTrack: Value is not a valid number.", this, a, c), e = !1; break } } return e } optimize() { const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === Wr, r = e.length - 1; let o = 1; for (let a = 1; a < r; ++a) { let l = !1; const c = e[a], h = e[a + 1]; if (c !== h && (a !== 1 || c !== e[0])) if (i) l = !0; else { const u = a * n, d = u - n, p = u + n; for (let g = 0; g !== n; ++g) { const _ = t[u + g]; if (_ !== t[d + g] || _ !== t[p + g]) { l = !0; break } } } if (l) { if (a !== o) { e[o] = e[a]; const u = a * n, d = o * n; for (let p = 0; p !== n; ++p)t[d + p] = t[u + p] } ++o } } if (r > 0) { e[o] = e[r]; for (let a = r * n, l = o * n, c = 0; c !== n; ++c)t[l + c] = t[a + c]; ++o } return o !== e.length ? (this.times = e.slice(0, o), this.values = t.slice(0, o * n)) : (this.times = e, this.values = t), this } clone() { const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t); return i.createInterpolant = this.createInterpolant, i } } gn.prototype.TimeBufferType = Float32Array; gn.prototype.ValueBufferType = Float32Array; gn.prototype.DefaultInterpolation = Cs; class is extends gn { constructor(e, t, n) { super(e, t, n) } } is.prototype.ValueTypeName = "bool"; is.prototype.ValueBufferType = Array; is.prototype.DefaultInterpolation = Rs; is.prototype.InterpolantFactoryMethodLinear = void 0; is.prototype.InterpolantFactoryMethodSmooth = void 0; class Nh extends gn { } Nh.prototype.ValueTypeName = "color"; class Zi extends gn { } Zi.prototype.ValueTypeName = "number"; class z_ extends Is { constructor(e, t, n, i) { super(e, t, n, i) } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = (n - t) / (i - t); let c = e * a; for (let h = c + a; c !== h; c += 4)nn.slerpFlat(r, 0, o, c - a, o, c, l); return r } } class Ji extends gn { InterpolantFactoryMethodLinear(e) { return new z_(this.times, this.values, this.getValueSize(), e) } } Ji.prototype.ValueTypeName = "quaternion"; Ji.prototype.InterpolantFactoryMethodSmooth = void 0; class ss extends gn { constructor(e, t, n) { super(e, t, n) } } ss.prototype.ValueTypeName = "string"; ss.prototype.ValueBufferType = Array; ss.prototype.DefaultInterpolation = Rs; ss.prototype.InterpolantFactoryMethodLinear = void 0; ss.prototype.InterpolantFactoryMethodSmooth = void 0; class Qi extends gn { } Qi.prototype.ValueTypeName = "vector"; class k_ { constructor(e = "", t = -1, n = [], i = Gu) { this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = en(), this.duration < 0 && this.resetDuration() } static parse(e) { const t = [], n = e.tracks, i = 1 / (e.fps || 1); for (let o = 0, a = n.length; o !== a; ++o)t.push(V_(n[o]).scale(i)); const r = new this(e.name, e.duration, t, e.blendMode); return r.uuid = e.uuid, r } static toJSON(e) { const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode }; for (let r = 0, o = n.length; r !== o; ++r)t.push(gn.toJSON(n[r])); return i } static CreateFromMorphTargetSequence(e, t, n, i) { const r = t.length, o = []; for (let a = 0; a < r; a++) { let l = [], c = []; l.push((a + r - 1) % r, a, (a + 1) % r), c.push(0, 1, 0); const h = U_(l); l = dc(l, 1, h), c = dc(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), o.push(new Zi(".morphTargetInfluences[" + t[a].name + "]", l, c).scale(1 / n)) } return new this(e, -1, o) } static findByName(e, t) { let n = e; if (!Array.isArray(e)) { const i = e; n = i.geometry && i.geometry.animations || i.animations } for (let i = 0; i < n.length; i++)if (n[i].name === t) return n[i]; return null } static CreateClipsFromMorphTargetSequences(e, t, n) { const i = {}, r = /^([\w-]*?)([\d]+)$/; for (let a = 0, l = e.length; a < l; a++) { const c = e[a], h = c.name.match(r); if (h && h.length > 1) { const u = h[1]; let d = i[u]; d || (i[u] = d = []), d.push(c) } } const o = []; for (const a in i) o.push(this.CreateFromMorphTargetSequence(a, i[a], t, n)); return o } static parseAnimation(e, t) { if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null; const n = function (u, d, p, g, _) { if (p.length !== 0) { const m = [], f = []; Ih(p, m, f, g), m.length !== 0 && _.push(new u(d, m, f)) } }, i = [], r = e.name || "default", o = e.fps || 30, a = e.blendMode; let l = e.length || -1; const c = e.hierarchy || []; for (let u = 0; u < c.length; u++) { const d = c[u].keys; if (!(!d || d.length === 0)) if (d[0].morphTargets) { const p = {}; let g; for (g = 0; g < d.length; g++)if (d[g].morphTargets) for (let _ = 0; _ < d[g].morphTargets.length; _++)p[d[g].morphTargets[_]] = -1; for (const _ in p) { const m = [], f = []; for (let y = 0; y !== d[g].morphTargets.length; ++y) { const v = d[g]; m.push(v.time), f.push(v.morphTarget === _ ? 1 : 0) } i.push(new Zi(".morphTargetInfluence[" + _ + "]", m, f)) } l = p.length * o } else { const p = ".bones[" + t[u].name + "]"; n(Qi, p + ".position", d, "pos", i), n(Ji, p + ".quaternion", d, "rot", i), n(Qi, p + ".scale", d, "scl", i) } } return i.length === 0 ? null : new this(r, l, i, a) } resetDuration() { const e = this.tracks; let t = 0; for (let n = 0, i = e.length; n !== i; ++n) { const r = this.tracks[n]; t = Math.max(t, r.times[r.times.length - 1]) } return this.duration = t, this } trim() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].trim(0, this.duration); return this } validate() { let e = !0; for (let t = 0; t < this.tracks.length; t++)e = e && this.tracks[t].validate(); return e } optimize() { for (let e = 0; e < this.tracks.length; e++)this.tracks[e].optimize(); return this } clone() { const e = []; for (let t = 0; t < this.tracks.length; t++)e.push(this.tracks[t].clone()); return new this.constructor(this.name, this.duration, e, this.blendMode) } toJSON() { return this.constructor.toJSON(this) } } function H_(s) { switch (s.toLowerCase()) { case "scalar": case "double": case "float": case "number": case "integer": return Zi; case "vector": case "vector2": case "vector3": case "vector4": return Qi; case "color": return Nh; case "quaternion": return Ji; case "bool": case "boolean": return is; case "string": return ss }throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s) } function V_(s) { if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse"); const e = H_(s.type); if (s.times === void 0) { const t = [], n = []; Ih(s.keys, t, n, "value"), s.times = t, s.values = n } return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation) } const Yn = { enabled: !1, files: {}, add: function (s, e) { this.enabled !== !1 && (this.files[s] = e) }, get: function (s) { if (this.enabled !== !1) return this.files[s] }, remove: function (s) { delete this.files[s] }, clear: function () { this.files = {} } }; class Uh { constructor(e, t, n) { const i = this; let r = !1, o = 0, a = 0, l; const c = []; this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function (h) { a++, r === !1 && i.onStart !== void 0 && i.onStart(h, o, a), r = !0 }, this.itemEnd = function (h) { o++, i.onProgress !== void 0 && i.onProgress(h, o, a), o === a && (r = !1, i.onLoad !== void 0 && i.onLoad()) }, this.itemError = function (h) { i.onError !== void 0 && i.onError(h) }, this.resolveURL = function (h) { return l ? l(h) : h }, this.setURLModifier = function (h) { return l = h, this }, this.addHandler = function (h, u) { return c.push(h, u), this }, this.removeHandler = function (h) { const u = c.indexOf(h); return u !== -1 && c.splice(u, 2), this }, this.getHandler = function (h) { for (let u = 0, d = c.length; u < d; u += 2) { const p = c[u], g = c[u + 1]; if (p.global && (p.lastIndex = 0), p.test(h)) return g } return null } } } const G_ = new Uh; class rs { constructor(e) { this.manager = e !== void 0 ? e : G_, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {} } load() { } loadAsync(e, t) { const n = this; return new Promise(function (i, r) { n.load(e, i, t, r) }) } parse() { } setCrossOrigin(e) { return this.crossOrigin = e, this } setWithCredentials(e) { return this.withCredentials = e, this } setPath(e) { return this.path = e, this } setResourcePath(e) { return this.resourcePath = e, this } setRequestHeader(e) { return this.requestHeader = e, this } } rs.DEFAULT_MATERIAL_NAME = "__DEFAULT"; const En = {}; class W_ extends Error { constructor(e, t) { super(e), this.response = t } } class Oh extends rs { constructor(e) { super(e) } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = Yn.get(e); if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => { t && t(r), this.manager.itemEnd(e) }, 0), r; if (En[e] !== void 0) { En[e].push({ onLoad: t, onProgress: n, onError: i }); return } En[e] = [], En[e].push({ onLoad: t, onProgress: n, onError: i }); const o = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), a = this.mimeType, l = this.responseType; fetch(o).then(c => { if (c.status === 200 || c.status === 0) { if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c; const h = En[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0; let _ = 0; const m = new ReadableStream({ start(f) { y(); function y() { u.read().then(({ done: v, value: b }) => { if (v) f.close(); else { _ += b.byteLength; const I = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p }); for (let R = 0, w = h.length; R < w; R++) { const F = h[R]; F.onProgress && F.onProgress(I) } f.enqueue(b), y() } }, v => { f.error(v) }) } } }); return new Response(m) } else throw new W_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c) }).then(c => { switch (l) { case "arraybuffer": return c.arrayBuffer(); case "blob": return c.blob(); case "document": return c.text().then(h => new DOMParser().parseFromString(h, a)); case "json": return c.json(); default: if (a === void 0) return c.text(); { const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d); return c.arrayBuffer().then(g => p.decode(g)) } } }).then(c => { Yn.add(e, c); const h = En[e]; delete En[e]; for (let u = 0, d = h.length; u < d; u++) { const p = h[u]; p.onLoad && p.onLoad(c) } }).catch(c => { const h = En[e]; if (h === void 0) throw this.manager.itemError(e), c; delete En[e]; for (let u = 0, d = h.length; u < d; u++) { const p = h[u]; p.onError && p.onError(c) } this.manager.itemError(e) }).finally(() => { this.manager.itemEnd(e) }), this.manager.itemStart(e) } setResponseType(e) { return this.responseType = e, this } setMimeType(e) { return this.mimeType = e, this } } class X_ extends rs { constructor(e) { super(e) } load(e, t, n, i) { this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this, o = Yn.get(e); if (o !== void 0) return r.manager.itemStart(e), setTimeout(function () { t && t(o), r.manager.itemEnd(e) }, 0), o; const a = Ps("img"); function l() { h(), Yn.add(e, this), t && t(this), r.manager.itemEnd(e) } function c(u) { h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e) } function h() { a.removeEventListener("load", l, !1), a.removeEventListener("error", c, !1) } return a.addEventListener("load", l, !1), a.addEventListener("error", c, !1), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (a.crossOrigin = this.crossOrigin), r.manager.itemStart(e), a.src = e, a } } class ys extends rs { constructor(e) { super(e) } load(e, t, n, i) { const r = new vt, o = new X_(this.manager); return o.setCrossOrigin(this.crossOrigin), o.setPath(this.path), o.load(e, function (a) { r.image = a, r.needsUpdate = !0, t !== void 0 && t(r) }, n, i), r } } class Br extends it { constructor(e, t = 1) { super(), this.isLight = !0, this.type = "Light", this.color = new Se(e), this.intensity = t } dispose() { } copy(e, t) { return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this } toJSON(e) { const t = super.toJSON(e); return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t } } class j_ extends Br { constructor(e, t, n) { super(e, n), this.isHemisphereLight = !0, this.type = "HemisphereLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Se(t) } copy(e, t) { return super.copy(e, t), this.groundColor.copy(e.groundColor), this } } const yo = new Ie, fc = new C, pc = new C; class Fa { constructor(e) { this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new le(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ie, this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new La, this._frameExtents = new le(1, 1), this._viewportCount = 1, this._viewports = [new tt(0, 0, 1, 1)] } getViewportCount() { return this._viewportCount } getFrustum() { return this._frustum } updateMatrices(e) { const t = this.camera, n = this.matrix; fc.setFromMatrixPosition(e.matrixWorld), t.position.copy(fc), pc.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(pc), t.updateMatrixWorld(), yo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(yo), n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(yo) } getViewport(e) { return this._viewports[e] } getFrameExtents() { return this._frameExtents } dispose() { this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose() } copy(e) { return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this } clone() { return new this.constructor().copy(this) } toJSON() { const e = {}; return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e } } class Y_ extends Fa { constructor() { super(new Lt(50, 1, .5, 500)), this.isSpotLightShadow = !0, this.focus = 1 } updateMatrices(e) { const t = this.camera, n = Ki * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far; (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e) } copy(e) { return super.copy(e), this.focus = e.focus, this } } class q_ extends Br { constructor(e, t, n = 0, i = Math.PI / 3, r = 0, o = 2) { super(e, t), this.isSpotLight = !0, this.type = "SpotLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it, this.distance = n, this.angle = i, this.penumbra = r, this.decay = o, this.map = null, this.shadow = new Y_ } get power() { return this.intensity * Math.PI } set power(e) { this.intensity = e / Math.PI } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } const mc = new Ie, ps = new C, Mo = new C; class K_ extends Fa { constructor() { super(new Lt(90, 1, .5, 500)), this.isPointLightShadow = !0, this._frameExtents = new le(4, 2), this._viewportCount = 6, this._viewports = [new tt(2, 1, 1, 1), new tt(0, 1, 1, 1), new tt(3, 1, 1, 1), new tt(1, 1, 1, 1), new tt(3, 0, 1, 1), new tt(1, 0, 1, 1)], this._cubeDirections = [new C(1, 0, 0), new C(-1, 0, 0), new C(0, 0, 1), new C(0, 0, -1), new C(0, 1, 0), new C(0, -1, 0)], this._cubeUps = [new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 1, 0), new C(0, 0, 1), new C(0, 0, -1)] } updateMatrices(e, t = 0) { const n = this.camera, i = this.matrix, r = e.distance || n.far; r !== n.far && (n.far = r, n.updateProjectionMatrix()), ps.setFromMatrixPosition(e.matrixWorld), n.position.copy(ps), Mo.copy(n.position), Mo.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Mo), n.updateMatrixWorld(), i.makeTranslation(-ps.x, -ps.y, -ps.z), mc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(mc) } } class $_ extends Br { constructor(e, t, n = 0, i = 2) { super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new K_ } get power() { return this.intensity * 4 * Math.PI } set power(e) { this.intensity = e / (4 * Math.PI) } dispose() { this.shadow.dispose() } copy(e, t) { return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this } } class Z_ extends Fa { constructor() { super(new Ur(-5, 5, 5, -5, .5, 500)), this.isDirectionalLightShadow = !0 } } class Fh extends Br { constructor(e, t) { super(e, t), this.isDirectionalLight = !0, this.type = "DirectionalLight", this.position.copy(it.DEFAULT_UP), this.updateMatrix(), this.target = new it, this.shadow = new Z_ } dispose() { this.shadow.dispose() } copy(e) { return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this } } class Es { static decodeText(e) { if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e); let t = ""; for (let n = 0, i = e.length; n < i; n++)t += String.fromCharCode(e[n]); try { return decodeURIComponent(escape(t)) } catch { return t } } static extractUrlBase(e) { const t = e.lastIndexOf("/"); return t === -1 ? "./" : e.slice(0, t + 1) } static resolveURL(e, t) { return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e) } } class J_ extends rs { constructor(e) { super(e), this.isImageBitmapLoader = !0, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" } } setOptions(e) { return this.options = e, this } load(e, t, n, i) { e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e); const r = this, o = Yn.get(e); if (o !== void 0) { if (r.manager.itemStart(e), o.then) { o.then(c => { t && t(c), r.manager.itemEnd(e) }).catch(c => { i && i(c) }); return } return setTimeout(function () { t && t(o), r.manager.itemEnd(e) }, 0), o } const a = {}; a.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", a.headers = this.requestHeader; const l = fetch(e, a).then(function (c) { return c.blob() }).then(function (c) { return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" })) }).then(function (c) { return Yn.add(e, c), t && t(c), r.manager.itemEnd(e), c }).catch(function (c) { i && i(c), Yn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e) }); Yn.add(e, l), r.manager.itemStart(e) } } class Q_ { constructor(e = !0) { this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 } start() { this.startTime = gc(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0 } stop() { this.getElapsedTime(), this.running = !1, this.autoStart = !1 } getElapsedTime() { return this.getDelta(), this.elapsedTime } getDelta() { let e = 0; if (this.autoStart && !this.running) return this.start(), 0; if (this.running) { const t = gc(); e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e } return e } } function gc() { return (typeof performance > "u" ? Date : performance).now() } const Ba = "\\[\\]\\.:\\/", ev = new RegExp("[" + Ba + "]", "g"), za = "[^" + Ba + "]", tv = "[^" + Ba.replace("\\.", "") + "]", nv = /((?:WC+[\/:])*)/.source.replace("WC", za), iv = /(WCOD+)?/.source.replace("WCOD", tv), sv = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", za), rv = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", za), ov = new RegExp("^" + nv + iv + sv + rv + "$"), av = ["material", "materials", "bones", "map"]; class lv { constructor(e, t, n) { const i = n || Ze.parseTrackName(t); this._targetGroup = e, this._bindings = e.subscribe_(t, i) } getValue(e, t) { this.bind(); const n = this._targetGroup.nCachedObjects_, i = this._bindings[n]; i !== void 0 && i.getValue(e, t) } setValue(e, t) { const n = this._bindings; for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)n[i].setValue(e, t) } bind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].bind() } unbind() { const e = this._bindings; for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)e[t].unbind() } } class Ze { constructor(e, t, n) { this.path = t, this.parsedPath = n || Ze.parseTrackName(t), this.node = Ze.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } static create(e, t, n) { return e && e.isAnimationObjectGroup ? new Ze.Composite(e, t, n) : new Ze(e, t, n) } static sanitizeNodeName(e) { return e.replace(/\s/g, "_").replace(ev, "") } static parseTrackName(e) { const t = ov.exec(e); if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e); const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf("."); if (i !== void 0 && i !== -1) { const r = n.nodeName.substring(i + 1); av.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r) } if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e); return n } static findNode(e, t) { if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e; if (e.skeleton) { const n = e.skeleton.getBoneByName(t); if (n !== void 0) return n } if (e.children) { const n = function (r) { for (let o = 0; o < r.length; o++) { const a = r[o]; if (a.name === t || a.uuid === t) return a; const l = n(a.children); if (l) return l } return null }, i = n(e.children); if (i) return i } return null } _getValue_unavailable() { } _setValue_unavailable() { } _getValue_direct(e, t) { e[t] = this.targetObject[this.propertyName] } _getValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)e[t++] = n[i] } _getValue_arrayElement(e, t) { e[t] = this.resolvedProperty[this.propertyIndex] } _getValue_toArray(e, t) { this.resolvedProperty.toArray(e, t) } _setValue_direct(e, t) { this.targetObject[this.propertyName] = e[t] } _setValue_direct_setNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0 } _setValue_direct_setMatrixWorldNeedsUpdate(e, t) { this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_array(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++] } _setValue_array_setNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++]; this.targetObject.needsUpdate = !0 } _setValue_array_setMatrixWorldNeedsUpdate(e, t) { const n = this.resolvedProperty; for (let i = 0, r = n.length; i !== r; ++i)n[i] = e[t++]; this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_arrayElement(e, t) { this.resolvedProperty[this.propertyIndex] = e[t] } _setValue_arrayElement_setNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0 } _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0 } _setValue_fromArray(e, t) { this.resolvedProperty.fromArray(e, t) } _setValue_fromArray_setNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0 } _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) { this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0 } _getValue_unbound(e, t) { this.bind(), this.getValue(e, t) } _setValue_unbound(e, t) { this.bind(), this.setValue(e, t) } bind() { let e = this.node; const t = this.parsedPath, n = t.objectName, i = t.propertyName; let r = t.propertyIndex; if (e || (e = Ze.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) { console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + "."); return } if (n) { let c = t.objectIndex; switch (n) { case "materials": if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.materials) { console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this); return } e = e.material.materials; break; case "bones": if (!e.skeleton) { console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this); return } e = e.skeleton.bones; for (let h = 0; h < e.length; h++)if (e[h].name === c) { c = h; break } break; case "map": if ("map" in e) { e = e.map; break } if (!e.material) { console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this); return } if (!e.material.map) { console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this); return } e = e.material.map; break; default: if (e[n] === void 0) { console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this); return } e = e[n] }if (c !== void 0) { if (e[c] === void 0) { console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e); return } e = e[c] } } const o = e[i]; if (o === void 0) { const c = t.nodeName; console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e); return } let a = this.Versioning.None; this.targetObject = e, e.needsUpdate !== void 0 ? a = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (a = this.Versioning.MatrixWorldNeedsUpdate); let l = this.BindingType.Direct; if (r !== void 0) { if (i === "morphTargetInfluences") { if (!e.geometry) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this); return } if (!e.geometry.morphAttributes) { console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this); return } e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]) } l = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r } else o.fromArray !== void 0 && o.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (l = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = i; this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][a] } unbind() { this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound } } Ze.Composite = lv; Ze.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }; Ze.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }; Ze.prototype.GetterByBindingType = [Ze.prototype._getValue_direct, Ze.prototype._getValue_array, Ze.prototype._getValue_arrayElement, Ze.prototype._getValue_toArray]; Ze.prototype.SetterByBindingTypeAndVersioning = [[Ze.prototype._setValue_direct, Ze.prototype._setValue_direct_setNeedsUpdate, Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Ze.prototype._setValue_array, Ze.prototype._setValue_array_setNeedsUpdate, Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Ze.prototype._setValue_arrayElement, Ze.prototype._setValue_arrayElement_setNeedsUpdate, Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Ze.prototype._setValue_fromArray, Ze.prototype._setValue_fromArray_setNeedsUpdate, Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]]; class Be { constructor(e) { this.value = e } clone() { return new Be(this.value.clone === void 0 ? this.value : this.value.clone()) } } const _c = new Ie; class cv { constructor(e, t, n = 0, i = 1 / 0) { this.ray = new ts(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Pa, this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} } } set(e, t) { this.ray.set(e, t) } setFromCamera(e, t) { t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, .5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type) } setFromXRController(e) { return _c.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(_c), this } intersectObject(e, t = !0, n = []) { return ca(e, this, n, t), n.sort(vc), n } intersectObjects(e, t = !0, n = []) { for (let i = 0, r = e.length; i < r; i++)ca(e[i], this, n, t); return n.sort(vc), n } } function vc(s, e) { return s.distance - e.distance } function ca(s, e, t, n) { let i = !0; if (s.layers.test(e.layers) && s.raycast(e, t) === !1 && (i = !1), i === !0 && n === !0) { const r = s.children; for (let o = 0, a = r.length; o < a; o++)ca(r[o], e, t, !0) } } class xc { constructor(e = 1, t = 0, n = 0) { return this.radius = e, this.phi = t, this.theta = n, this } set(e, t, n) { return this.radius = e, this.phi = t, this.theta = n, this } copy(e) { return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this } makeSafe() { return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this } setFromVector3(e) { return this.setFromCartesianCoords(e.x, e.y, e.z) } setFromCartesianCoords(e, t, n) { return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(bt(t / this.radius, -1, 1))), this } clone() { return new this.constructor().copy(this) } } class hv extends ui { constructor(e, t) { super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null } } connect() { } disconnect() { } dispose() { } update() { } } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: ya } })); typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ya); const yc = { type: "change" }, ka = { type: "start" }, Bh = { type: "end" }, hr = new ts, Mc = new Vn, uv = Math.cos(70 * Nt.DEG2RAD), pt = new C, It = 2 * Math.PI, et = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, So = 1e-6; class dv extends hv { constructor(e, t = null) { super(e, t), this.state = et.NONE, this.enabled = !0, this.target = new C, this.cursor = new C, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Bi.ROTATE, MIDDLE: Bi.DOLLY, RIGHT: Bi.PAN }, this.touches = { ONE: Ui.ROTATE, TWO: Ui.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new C, this._lastQuaternion = new nn, this._lastTargetPosition = new C, this._quat = new nn().setFromUnitVectors(e.up, new C(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new xc, this._sphericalDelta = new xc, this._scale = 1, this._panOffset = new C, this._rotateStart = new le, this._rotateEnd = new le, this._rotateDelta = new le, this._panStart = new le, this._panEnd = new le, this._panDelta = new le, this._dollyStart = new le, this._dollyEnd = new le, this._dollyDelta = new le, this._dollyDirection = new C, this._mouse = new le, this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = pv.bind(this), this._onPointerDown = fv.bind(this), this._onPointerUp = mv.bind(this), this._onContextMenu = Sv.bind(this), this._onMouseWheel = vv.bind(this), this._onKeyDown = xv.bind(this), this._onTouchStart = yv.bind(this), this._onTouchMove = Mv.bind(this), this._onMouseDown = gv.bind(this), this._onMouseMove = _v.bind(this), this._interceptControlDown = bv.bind(this), this._interceptControlUp = Ev.bind(this), this.domElement !== null && this.connect(), this.update() } connect() { this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: !0, capture: !0 }), this.domElement.style.touchAction = "none" } disconnect() { this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "auto" } dispose() { this.disconnect() } getPolarAngle() { return this._spherical.phi } getAzimuthalAngle() { return this._spherical.theta } getDistance() { return this.object.position.distanceTo(this.target) } listenToKeyEvents(e) { e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e } stopListenToKeyEvents() { this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null) } saveState() { this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom } reset() { this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(yc), this.update(), this.state = et.NONE } update(e = null) { const t = this.object.position; pt.copy(t).sub(this.target), pt.applyQuaternion(this._quat), this._spherical.setFromVector3(pt), this.autoRotate && this.state === et.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi); let n = this.minAzimuthAngle, i = this.maxAzimuthAngle; isFinite(n) && isFinite(i) && (n < -Math.PI ? n += It : n > Math.PI && (n -= It), i < -Math.PI ? i += It : i > Math.PI && (i -= It), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor); let r = !1; if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius); else { const o = this._spherical.radius; this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = o != this._spherical.radius } if (pt.setFromSpherical(this._spherical), pt.applyQuaternion(this._quatInverse), t.copy(this.target).add(pt), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) { let o = null; if (this.object.isPerspectiveCamera) { const a = pt.length(); o = this._clampDistance(a * this._scale); const l = a - o; this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l } else if (this.object.isOrthographicCamera) { const a = new C(this._mouse.x, this._mouse.y, 0); a.unproject(this.object); const l = this.object.zoom; this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom; const c = new C(this._mouse.x, this._mouse.y, 0); c.unproject(this.object), this.object.position.sub(c).add(a), this.object.updateMatrixWorld(), o = pt.length() } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1; o !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position) : (hr.origin.copy(this.object.position), hr.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(hr.direction)) < uv ? this.object.lookAt(this.target) : (Mc.setFromNormalAndCoplanarPoint(this.object.up, this.target), hr.intersectPlane(Mc, this.target)))) } else if (this.object.isOrthographicCamera) { const o = this.object.zoom; this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), o !== this.object.zoom && (this.object.updateProjectionMatrix(), r = !0) } return this._scale = 1, this._performCursorZoom = !1, r || this._lastPosition.distanceToSquared(this.object.position) > So || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > So || this._lastTargetPosition.distanceToSquared(this.target) > So ? (this.dispatchEvent(yc), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1 } _getAutoRotationAngle(e) { return e !== null ? It / 60 * this.autoRotateSpeed * e : It / 60 / 60 * this.autoRotateSpeed } _getZoomScale(e) { const t = Math.abs(e * .01); return Math.pow(.95, this.zoomSpeed * t) } _rotateLeft(e) { this._sphericalDelta.theta -= e } _rotateUp(e) { this._sphericalDelta.phi -= e } _panLeft(e, t) { pt.setFromMatrixColumn(t, 0), pt.multiplyScalar(-e), this._panOffset.add(pt) } _panUp(e, t) { this.screenSpacePanning === !0 ? pt.setFromMatrixColumn(t, 1) : (pt.setFromMatrixColumn(t, 0), pt.crossVectors(this.object.up, pt)), pt.multiplyScalar(e), this._panOffset.add(pt) } _pan(e, t) { const n = this.domElement; if (this.object.isPerspectiveCamera) { const i = this.object.position; pt.copy(i).sub(this.target); let r = pt.length(); r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix) } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1) } _dollyOut(e) { this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1) } _dollyIn(e) { this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1) } _updateZoomParameters(e, t) { if (!this.zoomToCursor) return; this._performCursorZoom = !0; const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, o = n.width, a = n.height; this._mouse.x = i / o * 2 - 1, this._mouse.y = -(r / a) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize() } _clampDistance(e) { return Math.max(this.minDistance, Math.min(this.maxDistance, e)) } _handleMouseDownRotate(e) { this._rotateStart.set(e.clientX, e.clientY) } _handleMouseDownDolly(e) { this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY) } _handleMouseDownPan(e) { this._panStart.set(e.clientX, e.clientY) } _handleMouseMoveRotate(e) { this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed); const t = this.domElement; this._rotateLeft(It * this._rotateDelta.x / t.clientHeight), this._rotateUp(It * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update() } _handleMouseMoveDolly(e) { this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update() } _handleMouseMovePan(e) { this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update() } _handleMouseWheel(e) { this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update() } _handleKeyDown(e) { let t = !1; switch (e.code) { case this.keys.UP: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(It * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, this.keyPanSpeed), t = !0; break; case this.keys.BOTTOM: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateUp(-It * this.rotateSpeed / this.domElement.clientHeight) : this._pan(0, -this.keyPanSpeed), t = !0; break; case this.keys.LEFT: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(It * this.rotateSpeed / this.domElement.clientHeight) : this._pan(this.keyPanSpeed, 0), t = !0; break; case this.keys.RIGHT: e.ctrlKey || e.metaKey || e.shiftKey ? this._rotateLeft(-It * this.rotateSpeed / this.domElement.clientHeight) : this._pan(-this.keyPanSpeed, 0), t = !0; break }t && (e.preventDefault(), this.update()) } _handleTouchStartRotate(e) { if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY); else { const t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), i = .5 * (e.pageY + t.y); this._rotateStart.set(n, i) } } _handleTouchStartPan(e) { if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY); else { const t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), i = .5 * (e.pageY + t.y); this._panStart.set(n, i) } } _handleTouchStartDolly(e) { const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i); this._dollyStart.set(0, r) } _handleTouchStartDollyPan(e) { this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e) } _handleTouchStartDollyRotate(e) { this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e) } _handleTouchMoveRotate(e) { if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY); else { const n = this._getSecondPointerPosition(e), i = .5 * (e.pageX + n.x), r = .5 * (e.pageY + n.y); this._rotateEnd.set(i, r) } this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed); const t = this.domElement; this._rotateLeft(It * this._rotateDelta.x / t.clientHeight), this._rotateUp(It * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd) } _handleTouchMovePan(e) { if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY); else { const t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), i = .5 * (e.pageY + t.y); this._panEnd.set(n, i) } this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd) } _handleTouchMoveDolly(e) { const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i); this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd); const o = (e.pageX + t.x) * .5, a = (e.pageY + t.y) * .5; this._updateZoomParameters(o, a) } _handleTouchMoveDollyPan(e) { this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e) } _handleTouchMoveDollyRotate(e) { this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e) } _addPointer(e) { this._pointers.push(e.pointerId) } _removePointer(e) { delete this._pointerPositions[e.pointerId]; for (let t = 0; t < this._pointers.length; t++)if (this._pointers[t] == e.pointerId) { this._pointers.splice(t, 1); return } } _isTrackingPointer(e) { for (let t = 0; t < this._pointers.length; t++)if (this._pointers[t] == e.pointerId) return !0; return !1 } _trackPointer(e) { let t = this._pointerPositions[e.pointerId]; t === void 0 && (t = new le, this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY) } _getSecondPointerPosition(e) { const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0]; return this._pointerPositions[t] } _customWheelEvent(e) { const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY }; switch (t) { case 1: n.deltaY *= 16; break; case 2: n.deltaY *= 100; break }return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n } } function fv(s) { this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s) && (this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s))) } function pv(s) { this.enabled !== !1 && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s)) } function mv(s) { switch (this._removePointer(s), this._pointers.length) { case 0: this.domElement.releasePointerCapture(s.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Bh), this.state = et.NONE; break; case 1: const e = this._pointers[0], t = this._pointerPositions[e]; this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y }); break } } function gv(s) { let e; switch (s.button) { case 0: e = this.mouseButtons.LEFT; break; case 1: e = this.mouseButtons.MIDDLE; break; case 2: e = this.mouseButtons.RIGHT; break; default: e = -1 }switch (e) { case Bi.DOLLY: if (this.enableZoom === !1) return; this._handleMouseDownDolly(s), this.state = et.DOLLY; break; case Bi.ROTATE: if (s.ctrlKey || s.metaKey || s.shiftKey) { if (this.enablePan === !1) return; this._handleMouseDownPan(s), this.state = et.PAN } else { if (this.enableRotate === !1) return; this._handleMouseDownRotate(s), this.state = et.ROTATE } break; case Bi.PAN: if (s.ctrlKey || s.metaKey || s.shiftKey) { if (this.enableRotate === !1) return; this._handleMouseDownRotate(s), this.state = et.ROTATE } else { if (this.enablePan === !1) return; this._handleMouseDownPan(s), this.state = et.PAN } break; default: this.state = et.NONE }this.state !== et.NONE && this.dispatchEvent(ka) } function _v(s) { switch (this.state) { case et.ROTATE: if (this.enableRotate === !1) return; this._handleMouseMoveRotate(s); break; case et.DOLLY: if (this.enableZoom === !1) return; this._handleMouseMoveDolly(s); break; case et.PAN: if (this.enablePan === !1) return; this._handleMouseMovePan(s); break } } function vv(s) { this.enabled === !1 || this.enableZoom === !1 || this.state !== et.NONE || (s.preventDefault(), this.dispatchEvent(ka), this._handleMouseWheel(this._customWheelEvent(s)), this.dispatchEvent(Bh)) } function xv(s) { this.enabled === !1 || this.enablePan === !1 || this._handleKeyDown(s) } function yv(s) { switch (this._trackPointer(s), this._pointers.length) { case 1: switch (this.touches.ONE) { case Ui.ROTATE: if (this.enableRotate === !1) return; this._handleTouchStartRotate(s), this.state = et.TOUCH_ROTATE; break; case Ui.PAN: if (this.enablePan === !1) return; this._handleTouchStartPan(s), this.state = et.TOUCH_PAN; break; default: this.state = et.NONE }break; case 2: switch (this.touches.TWO) { case Ui.DOLLY_PAN: if (this.enableZoom === !1 && this.enablePan === !1) return; this._handleTouchStartDollyPan(s), this.state = et.TOUCH_DOLLY_PAN; break; case Ui.DOLLY_ROTATE: if (this.enableZoom === !1 && this.enableRotate === !1) return; this._handleTouchStartDollyRotate(s), this.state = et.TOUCH_DOLLY_ROTATE; break; default: this.state = et.NONE }break; default: this.state = et.NONE }this.state !== et.NONE && this.dispatchEvent(ka) } function Mv(s) { switch (this._trackPointer(s), this.state) { case et.TOUCH_ROTATE: if (this.enableRotate === !1) return; this._handleTouchMoveRotate(s), this.update(); break; case et.TOUCH_PAN: if (this.enablePan === !1) return; this._handleTouchMovePan(s), this.update(); break; case et.TOUCH_DOLLY_PAN: if (this.enableZoom === !1 && this.enablePan === !1) return; this._handleTouchMoveDollyPan(s), this.update(); break; case et.TOUCH_DOLLY_ROTATE: if (this.enableZoom === !1 && this.enableRotate === !1) return; this._handleTouchMoveDollyRotate(s), this.update(); break; default: this.state = et.NONE } } function Sv(s) { this.enabled !== !1 && s.preventDefault() } function bv(s) { s.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 })) } function Ev(s) { s.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: !0, capture: !0 })) } class Tv { constructor() { this.gl = new _n, this.params = { positions: new C(0, 1, 0), intensity: { lookAt: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : .5 } }, this.rotation = new C, this.instance = new Lt(80, this.gl.sizes.width / this.gl.sizes.height, .1, 10), this.instance.position.y = this.params.positions.y, this.cameraGroup = new jn, this.cameraGroup.position.z = -.5, this.cameraGroup.add(this.instance) } setOrbitControls() { this.controls = new dv(this.instance, this.gl.canvas), this.controls.enableDamping = !0 } resize() { this.instance.aspect = this.gl.sizes.width / this.gl.sizes.height, this.instance.updateProjectionMatrix() } update() { this.instance.position.z = this.params.positions.z + this.gl.controler.progress.value, this.gl.mouse.normalized.eased.current.x > 0 ? this.rotation.z = this.gl.mouse.normalized.eased.current.y : this.rotation.z = -this.gl.mouse.normalized.eased.current.y, this.instance.rotation.z = Math.PI + Nt.damp(this.instance.rotation.y, this.rotation.z, 1e-4, this.gl.time.delta) * .05; let e = 1.5 - this.gl.controler.progress.join + .75 * this.gl.controler.progress.join; this.instance.lookAt(-this.gl.mouse.normalized.eased.current.x * this.params.intensity.lookAt * (1 - this.gl.controler.progress.join), this.gl.mouse.normalized.eased.current.y * this.params.intensity.lookAt * (1 - this.gl.controler.progress.join) + e, 5 + this.gl.controler.progress.value + this.gl.camera.cameraGroup.position.z) } } var wv = `varying vec2 vUv;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

  vUv = uv;
}`, Av = `const float PI = 3.1415926;

uniform sampler2D tDiffuse;
uniform float uGlowJoin;

varying vec2 vUv;

void main() {
  vec4 color = texture2D(tDiffuse, vUv);
  color.rgb = mix( 
    vec3(0.914,0.808,0.835),
    color.rgb,
    clamp((1.0 - vUv.y) * 2.0, 0.0, 1.0)
  );
  color.rgb *= mix( 
    vec3(0.541,0.455,0.714),
    vec3(1.0),
    clamp((vUv.y * 2.0) + .25, 0.0, 1.0)
  );

  float sunDistance = clamp(distance(vUv, vec2(0.0, 1.0)) * 1.5, 0.0, 1.0);
  sunDistance = 1.0 - sunDistance;

  float rightGlowDistance = clamp(distance(vUv, vec2(1.0, 0.5)) * 2.0, 0.0, 1.0);
  rightGlowDistance = smoothstep(0.0, 1.0, rightGlowDistance);
  rightGlowDistance = rightGlowDistance;
  vec3 rightGlow = mix(
    vec3(0.856,0.752,0.751),
    vec3(1.0),
    rightGlowDistance 
  );

  float leftGlowDistance = clamp(distance(vUv, vec2(0.0, 0.5)) * 3.0, 0.0, 1.0);
  leftGlowDistance = smoothstep(0.0, 1.0, leftGlowDistance);
  leftGlowDistance = leftGlowDistance;
  vec3 leftGlow = mix(
    vec3(0.956,0.852,0.7),
    vec3(1.0),
    leftGlowDistance 
  );

  
  
  float mask = uGlowJoin;

  
  
  
  

  
  
  

  color.rgb *= rightGlow;
  color.rgb *= leftGlow;
  color.rgb += sunDistance * 0.2;

  gl_FragColor = color;
}`; const Rv = {
	name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}; class zr { constructor() { this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1 } setSize() { } render() { console.error("THREE.Pass: .render() must be implemented in derived pass.") } dispose() { } } const Cv = new Ur(-1, 1, 1, -1, 0, 1); class Pv extends rn { constructor() { super(), this.setAttribute("position", new tn([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3)), this.setAttribute("uv", new tn([0, 2, 0, 0, 2, 0], 2)) } } const Lv = new Pv; class Dv { constructor(e) { this._mesh = new Ut(Lv, e) } dispose() { this._mesh.geometry.dispose() } render(e) { e.render(this._mesh, Cv) } get material() { return this._mesh.material } set material(e) { this._mesh.material = e } } class ha extends zr { constructor(e, t) { super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof sn ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = Ir.clone(e.uniforms), this.material = new sn({ name: e.name !== void 0 ? e.name : "unspecified", defines: Object.assign({}, e.defines), uniforms: this.uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader })), this.fsQuad = new Dv(this.material) } render(e, t, n) { this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e)) } dispose() { this.material.dispose(), this.fsQuad.dispose() } } class Sc extends zr { constructor(e, t) { super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1 } render(e, t, n) { const i = e.getContext(), r = e.state; r.buffers.color.setMask(!1), r.buffers.depth.setMask(!1), r.buffers.color.setLocked(!0), r.buffers.depth.setLocked(!0); let o, a; this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), r.buffers.stencil.setTest(!0), r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE), r.buffers.stencil.setFunc(i.ALWAYS, o, 4294967295), r.buffers.stencil.setClear(a), r.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), r.buffers.color.setLocked(!1), r.buffers.depth.setLocked(!1), r.buffers.color.setMask(!0), r.buffers.depth.setMask(!0), r.buffers.stencil.setLocked(!1), r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295), r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP), r.buffers.stencil.setLocked(!0) } } class Iv extends zr { constructor() { super(), this.needsSwap = !1 } render(e) { e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1) } } class Nv { constructor(e, t) { if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) { const n = e.getSize(new le); this._width = n.width, this._height = n.height, t = new Dn(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: es }), t.texture.name = "EffectComposer.rt1" } else this._width = t.width, this._height = t.height; this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new ha(Rv), this.copyPass.material.blending = Cn, this.clock = new Q_ } swapBuffers() { const e = this.readBuffer; this.readBuffer = this.writeBuffer, this.writeBuffer = e } addPass(e) { this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio) } insertPass(e, t) { this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio) } removePass(e) { const t = this.passes.indexOf(e); t !== -1 && this.passes.splice(t, 1) } isLastEnabledPass(e) { for (let t = e + 1; t < this.passes.length; t++)if (this.passes[t].enabled) return !1; return !0 } render(e) { e === void 0 && (e = this.clock.getDelta()); const t = this.renderer.getRenderTarget(); let n = !1; for (let i = 0, r = this.passes.length; i < r; i++) { const o = this.passes[i]; if (o.enabled !== !1) { if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(i), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), o.needsSwap) { if (n) { const a = this.renderer.getContext(), l = this.renderer.state.buffers.stencil; l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295) } this.swapBuffers() } Sc !== void 0 && (o instanceof Sc ? n = !0 : o instanceof Iv && (n = !1)) } } this.renderer.setRenderTarget(t) } reset(e) { if (e === void 0) { const t = this.renderer.getSize(new le); this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio) } this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2 } setSize(e, t) { this._width = e, this._height = t; const n = this._width * this._pixelRatio, i = this._height * this._pixelRatio; this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i); for (let r = 0; r < this.passes.length; r++)this.passes[r].setSize(n, i) } setPixelRatio(e) { this._pixelRatio = e, this.setSize(this._width, this._height) } dispose() { this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose() } } class Uv extends zr { constructor(e, t, n = null, i = null, r = null) { super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = i, this.clearAlpha = r, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new Se } render(e, t, n) { const i = e.autoClear; e.autoClear = !1; let r, o; this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (r = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(r), this.overrideMaterial !== null && (this.scene.overrideMaterial = o), e.autoClear = i } } const Ov = {
	name: "GammaCorrectionShader", uniforms: { tDiffuse: { value: null } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = sRGBTransferOETF( tex );

		}`}; class Fv { constructor() { this.gl = new _n, this.instance = new E_({ canvas: this.gl.canvas, powerPreference: "high-performance" }), this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height), this.instance.setPixelRatio(this.gl.sizes.pixelRatio), this.instance.shadowMap.enabled = !0, this.target = new Dn(this.gl.sizes.width, this.gl.sizes.height, { samples: 2 }), this.postProcessing = new ha({ uniforms: { tDiffuse: new Be, uGlowJoin: new Be(0) }, vertexShader: wv, fragmentShader: Av }), this.renderPass = new Uv(this.gl.scene, this.gl.camera.instance), this.gammaCorrectionPass = new ha(Ov), this.composer = new Nv(this.instance, this.target), this.composer.setPixelRatio(this.gl.sizes.pixelRatio), this.composer.setSize(this.gl.sizes.width, this.gl.sizes.height), this.composer.addPass(this.gammaCorrectionPass), this.composer.addPass(this.renderPass), this.composer.addPass(this.postProcessing) } update() { this.postProcessing.material.uniforms.uGlowJoin.value = this.gl.controler.progress.join, this.composer.render() } resize() { this.instance.setSize(this.gl.sizes.width, this.gl.sizes.height), this.instance.setPixelRatio(this.gl.sizes.pixelRatio), this.target.setSize(this.gl.sizes.width, this.gl.sizes.height), this.composer.setSize(this.gl.sizes.width, this.gl.sizes.height), this.composer.setPixelRatio(this.gl.sizes.pixelRatio) } } const zh = /\bvoid\s+main\s*\(\s*\)\s*{/g; function ua(s) { const e = /^[ \t]*#include +<([\w\d./]+)>/gm; function t(n, i) { let r = Ne[i]; return r ? ua(r) : n } return s.replace(e, t) } const St = []; for (let s = 0; s < 256; s++)St[s] = (s < 16 ? "0" : "") + s.toString(16); function Bv() { const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0; return (St[s & 255] + St[s >> 8 & 255] + St[s >> 16 & 255] + St[s >> 24 & 255] + "-" + St[e & 255] + St[e >> 8 & 255] + "-" + St[e >> 16 & 15 | 64] + St[e >> 24 & 255] + "-" + St[t & 63 | 128] + St[t >> 8 & 255] + "-" + St[t >> 16 & 255] + St[t >> 24 & 255] + St[n & 255] + St[n >> 8 & 255] + St[n >> 16 & 255] + St[n >> 24 & 255]).toUpperCase() } const ri = Object.assign || function () { let s = arguments[0]; for (let e = 1, t = arguments.length; e < t; e++) { let n = arguments[e]; if (n) for (let i in n) Object.prototype.hasOwnProperty.call(n, i) && (s[i] = n[i]) } return s }, zv = Date.now(), bc = new WeakMap, Ec = new Map; let kv = 1e10; function Rr(s, e) { const t = Wv(e); let n = bc.get(s); if (n || bc.set(s, n = Object.create(null)), n[t]) return new n[t]; const i = `_onBeforeCompile${t}`, r = function (c, h) { s.onBeforeCompile.call(this, c, h); const u = this.customProgramCacheKey() + "|" + c.vertexShader + "|" + c.fragmentShader; let d = Ec[u]; if (!d) { const p = Hv(this, c, e, t); d = Ec[u] = p } c.vertexShader = d.vertexShader, c.fragmentShader = d.fragmentShader, ri(c.uniforms, this.uniforms), e.timeUniform && (c.uniforms[e.timeUniform] = { get value() { return Date.now() - zv } }), this[i] && this[i](c) }, o = function () { return a(e.chained ? s : s.clone()) }, a = function (c) { const h = Object.create(c, l); return Object.defineProperty(h, "baseMaterial", { value: s }), Object.defineProperty(h, "id", { value: kv++ }), h.uuid = Bv(), h.uniforms = ri({}, c.uniforms, e.uniforms), h.defines = ri({}, c.defines, e.defines), h.defines[`TROIKA_DERIVED_MATERIAL_${t}`] = "", h.extensions = ri({}, c.extensions, e.extensions), h._listeners = void 0, h }, l = { constructor: { value: o }, isDerivedMaterial: { value: !0 }, customProgramCacheKey: { writable: !0, configurable: !0, value: function () { return s.customProgramCacheKey() + "|" + t } }, onBeforeCompile: { get() { return r }, set(c) { this[i] = c } }, copy: { writable: !0, configurable: !0, value: function (c) { return s.copy.call(this, c), !s.isShaderMaterial && !s.isDerivedMaterial && (ri(this.extensions, c.extensions), ri(this.defines, c.defines), ri(this.uniforms, Ir.clone(c.uniforms))), this } }, clone: { writable: !0, configurable: !0, value: function () { const c = new s.constructor; return a(c).copy(this) } }, getDepthMaterial: { writable: !0, configurable: !0, value: function () { let c = this._depthMaterial; return c || (c = this._depthMaterial = Rr(s.isDerivedMaterial ? s.getDepthMaterial() : new wh({ depthPacking: ah }), e), c.defines.IS_DEPTH_MATERIAL = "", c.uniforms = this.uniforms), c } }, getDistanceMaterial: { writable: !0, configurable: !0, value: function () { let c = this._distanceMaterial; return c || (c = this._distanceMaterial = Rr(s.isDerivedMaterial ? s.getDistanceMaterial() : new Ah, e), c.defines.IS_DISTANCE_MATERIAL = "", c.uniforms = this.uniforms), c } }, dispose: { writable: !0, configurable: !0, value() { const { _depthMaterial: c, _distanceMaterial: h } = this; c && c.dispose(), h && h.dispose(), s.dispose.call(this) } } }; return n[t] = o, new o } function Hv(s, { vertexShader: e, fragmentShader: t }, n, i) {
	let { vertexDefs: r, vertexMainIntro: o, vertexMainOutro: a, vertexTransform: l, fragmentDefs: c, fragmentMainIntro: h, fragmentMainOutro: u, fragmentColorTransform: d, customRewriter: p, timeUniform: g } = n; if (r = r || "", o = o || "", a = a || "", c = c || "", h = h || "", u = u || "", (l || p) && (e = ua(e)), (d || p) && (t = t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm, `
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`), t = ua(t)), p) { let _ = p({ vertexShader: e, fragmentShader: t }); e = _.vertexShader, t = _.fragmentShader } if (d) {
		let _ = []; t = t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, m => (_.push(m), "")), u = `${d}
${_.join(`
`)}
${u}`
	} if (g) {
		const _ = `
uniform float ${g};
`; r = _ + r, c = _ + c
	} return l && (e = `vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`, r = `${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`, o = `
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${o}
`, e = e.replace(/\b(position|normal|uv)\b/g, (_, m, f, y) => /\battribute\s+vec[23]\s+$/.test(y.substr(0, f)) ? m : `troika_${m}_${i}`), s.map && s.map.channel > 0 || (e = e.replace(/\bMAP_UV\b/g, `troika_uv_${i}`))), e = Tc(e, i, r, o, a), t = Tc(t, i, c, h, u), { vertexShader: e, fragmentShader: t }
} function Tc(s, e, t, n, i) {
	return (n || i || t) && (s = s.replace(zh, `
${t}
void troikaOrigMain${e}() {`), s += `
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`), s
} function Vv(s, e) { return s === "uniforms" ? void 0 : typeof e == "function" ? e.toString() : e } let Gv = 0; const wc = new Map; function Wv(s) { const e = JSON.stringify(s, Vv); let t = wc.get(e); return t == null && wc.set(e, t = ++Gv), t } const Xv = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" }; function jv(s) { let e = Xv[s.type]; return e ? Zt[e] : s } function Ac(s) { let e = /\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g, t = Object.create(null), n; for (; (n = e.exec(s)) !== null;)t[n[2]] = n[1]; return t } function Yv(s) {
	let e = [], t = ""; const n = Rr(s, {
		chained: !0, customRewriter({ vertexShader: r, fragmentShader: o }) {
			let a = [], l = [], c = [], h = Ac(r), u = Ac(o); return e.forEach(d => { let p = h[d], g = u[d]; const _ = p || g; if (_) { const m = new RegExp(`\\buniform\\s+${_}\\s+${d}\\s*;`, "g"), f = new RegExp(`\\b${d}\\b`, "g"), y = `troika_attr_${d}`, v = `troika_vary_${d}`; if (a.push(`attribute ${_} ${y};`), p && (r = r.replace(m, ""), r = r.replace(f, y)), g) { o = o.replace(m, ""), o = o.replace(f, v); let b = `varying ${g} ${v};`; a.push(b), c.push(b), l.push(`${v} = ${y};`) } } }), r = `${a.join(`
`)}
${r.replace(zh, `
$&
${l.join(`
`)}`)}`, c.length && (o = `${c.join(`
`)}
${o}`), { vertexShader: r, fragmentShader: o }
		}
	}); n.setUniformNames = function (r) { e = r || []; const o = e.sort().join("|"); o !== t && (t = o, this.needsUpdate = !0) }; const i = n.customProgramCacheKey(); return n.customProgramCacheKey = function () { return i + "|" + t }, n.isInstancedUniformsMaterial = !0, n
} class kh extends Ph { constructor(e, t, n) { super(e, t, n), this._maxCount = n, this._instancedUniformNames = [] } get geometry() { let e = this._derivedGeometry; const t = this._baseGeometry; return (!e || e.baseGeometry !== t) && (e = this._derivedGeometry = Object.create(t), e.baseGeometry = t, e.attributes = Object.create(t.attributes), t.addEventListener("dispose", function n() { t.removeEventListener("dispose", n), e.dispose() })), e } set geometry(e) { this._baseGeometry = e } get material() { let e = this._derivedMaterial; const t = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = new Xn); return (!e || e.baseMaterial !== t) && (e = this._derivedMaterial = Yv(t), t.addEventListener("dispose", function n() { t.removeEventListener("dispose", n), e.dispose() })), e.setUniformNames(this._instancedUniformNames), e } set material(e) { if (Array.isArray(e)) throw new Error("InstancedUniformsMesh does not support multiple materials"); for (; e && e.isInstancedUniformsMaterial;)e = e.baseMaterial; this._baseMaterial = e } get customDepthMaterial() { return this.material.getDepthMaterial() } get customDistanceMaterial() { return this.material.getDistanceMaterial() } setUniformAt(e, t, n) { const i = this.geometry.attributes, r = `troika_attr_${e}`; let o = i[r]; if (!o) { const a = qv(this._baseMaterial, e), l = Kv(a); if (o = i[r] = new un(new Float32Array(l * this._maxCount), l), a !== null) for (let c = 0; c < this._maxCount; c++)Rc(o, c, a); this._instancedUniformNames = [...this._instancedUniformNames, e] } Rc(o, t, n), o.needsUpdate = !0 } unsetUniform(e) { this.geometry.deleteAttribute(`troika_attr_${e}`), this._instancedUniformNames = this._instancedUniformNames.filter(t => t !== e) } } function Rc(s, e, t) { let n = s.itemSize; n === 1 ? s.setX(e, t) : n === 2 ? s.setXY(e, t.x, t.y) : n === 3 ? t.isColor ? s.setXYZ(e, t.r, t.g, t.b) : s.setXYZ(e, t.x, t.y, t.z) : n === 4 ? s.setXYZW(e, t.x, t.y, t.z, t.w) : t.toArray ? t.toArray(s.array, e * n) : s.set(t, e * n) } function qv(s, e) { let t = s.uniforms; return t && t[e] || (t = jv(s).uniforms, t && t[e]) ? t[e].value : null } function Kv(s) { return s == null ? 0 : typeof s == "number" ? 1 : s.isVector2 ? 2 : s.isVector3 || s.isColor ? 3 : s.isVector4 || s.isQuaternion ? 4 : s.elements ? s.elements.length : Array.isArray(s) ? s.length : 0 } var Cc = `vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

float snoise(vec3 v){ 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  
  vec3 x1 = x0 - i1 + 1.0 * C.xxx;
  vec3 x2 = x0 - i2 + 2.0 * C.xxx;
  vec3 x3 = x0 - 1. + 3.0 * C.xxx;

  i = mod(i, 289.0 ); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  float n_ = 1.0/7.0; 
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z *ns.z);  

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}`, Pc = `float smootherstep(float edge0, float edge1, float x) 
{
  x = clamp((x - edge0)/(edge1 - edge0), 0., 1.);
  return x * x * x * (x * (x * 6. - 15.) + 10.);
}`, $v = `mat3 getRotationMatrix(vec3 axis, float angle) {
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat3(
        oc * axis.x * axis.x + c,          oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,
        oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c,          oc * axis.y * axis.z - axis.x * s,
        oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c
    );
}

vec3 rotateVertex(vec3 position, vec3 axis, float angle) {
  
  mat3 rotationMatrix = getRotationMatrix(axis, angle);
  
  
  return rotationMatrix * position;
}`; class Ha { constructor() { this.palette = [15325951, 12710330, 16772064, 15595002], this.fog = { default: new Se(16773078), join: new Se(16777215) } } } class Zv {
	constructor() {
		this.gl = new _n, this.colors = new Ha, this.params = { grid: new le(30, 32), dimensions: new C(1, 1, 1), gap: .15, colors: { offset: 2 }, explosion: { filter: .4, strength: 20, probability: 17 } }, this.positions = new Float32Array(this.params.grid.x * this.params.grid.y * 3), this.geometry = this.gl.assets.models.cubeSurroundings.geometry.clone(), this.material = new Fr({
			precision: "highp",
			color: 0,
			roughness: 0,
			emissive: 16745564,
			emissiveIntensity: 0.8,
			side: Xt,
			transparent: true,
			opacity: 0.75
		}), this.modifiedMaterial = Rr(this.material, {
			uniforms: { tMatcap: new Be(this.gl.assets.textures.matcap), tAo: new Be(this.gl.assets.textures.ao), tMaskTop: new Be(this.gl.assets.textures.masks.top), uTime: new Be(0), uRotationTime: new Be(0), uCurrentPosition: new Be(0), uInitialAnimation: new Be(0), uTouchPositions: new Be(new Array(16).fill(new C)), uTouchPulseStrength: new Be(new Array(16).fill(new C)), uFinalPulseStrength: new Be(0), uGrid: new Be(this.params.grid), uDisplacementHeight: new Be(this.gl.controler.displacement.height), uDisplacementShrink: new Be(this.gl.controler.displacement.shrink), uDisplacementNoiseSpeed: new Be(this.gl.controler.displacement.noise.speed), uDisplacementNoiseHeight: new Be(this.gl.controler.displacement.noise.height), uColorFrom: new Be(new Se(this.colors.palette[this.params.colors.offset])), uColorTo: new Be(new Se(this.colors.palette[this.params.colors.offset + 1])), uColorProgress: new Be(0), uJoin: new Be(0) }, vertexDefs: `
        ${Pc}
        ${Cc}
        ${$v}

        varying vec3 vInstanceNormal;
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying float vExplodeWave;

        attribute vec2 aInstanceUV;
        attribute float aDisplacementStrength;
        attribute float aExplodePositionY;

        uniform vec2 uGrid;
        uniform float uTime;
        uniform float uRotationTime;
        uniform float uJoin;
        uniform float uFinalPulseStrength;
        uniform float uCurrentPosition;
        uniform float uInitialAnimation;
        uniform float uDisplacementHeight;
        uniform float uDisplacementShrink;
        uniform float uDisplacementNoiseSpeed;
        uniform float uDisplacementNoiseHeight;
        
      `, vertexMainOutro: `
        vInstanceNormal = normalMatrix * mat3(instanceMatrix) * normal;
        vUv = uv;
      `, fragmentDefs: `
        ${Pc}
        ${Cc}

        float pulseSoft(vec2 pulseInitialDimensions, float pulseProgress, float pulseSize, vec3 worldPosition, vec3 currentPosition) {
        
          float pulseX = distance(worldPosition.x, currentPosition.x);
          pulseX = 1.0 - smoothstep(pulseInitialDimensions.x - pulseSize + pulseProgress, pulseInitialDimensions.x + pulseProgress, pulseX);
          pulseX *= step(abs(worldPosition.x - currentPosition.x), pulseInitialDimensions.x + pulseProgress) ;

          float pulseZ = distance(worldPosition.z, currentPosition.z);
          pulseZ = 1.0 - smoothstep(pulseInitialDimensions.y - pulseSize + pulseProgress, pulseInitialDimensions.y + pulseProgress, pulseZ);
          pulseZ *= step(abs(worldPosition.z - currentPosition.z), pulseInitialDimensions.y + pulseProgress) ;
          
          return clamp(pulseZ * pulseX, 0.0, 1.0);
        }

        float pulseHard(vec2 pulseInitialDimensions, float pulseProgress, float pulseSize, vec3 worldPosition, vec3 currentPosition) {
        
          float pulseX = distance(worldPosition.x, currentPosition.x);
          pulseX = 1.0 - smoothstep(pulseInitialDimensions.x + pulseProgress, pulseInitialDimensions.x - pulseSize + pulseProgress, pulseX);
          pulseX *= step(abs(worldPosition.x - currentPosition.x), pulseInitialDimensions.x + pulseProgress) * step(abs(worldPosition.z - currentPosition.z), pulseInitialDimensions.y + pulseProgress);

          float pulseZ = distance(worldPosition.z, currentPosition.z);
          pulseZ = 1.0 - smoothstep(pulseInitialDimensions.y + pulseProgress, pulseInitialDimensions.y - pulseSize + pulseProgress, pulseZ);
          pulseZ *= step(abs(worldPosition.z - currentPosition.z), pulseInitialDimensions.y + pulseProgress) * step(abs(worldPosition.x - currentPosition.x), pulseInitialDimensions.x + pulseProgress);
          
          return clamp(pulseZ + pulseX, 0.0, 1.0);
        }

        const float AO_INTENSITY = 0.035;
        const float BLOOM_STRENGTH = 0.2;
        const float BOTTOM_LIGHT_STRENGTH = 1.;
        const float SHADOW_STRENGTH = 0.25;
        const float SHADOW_SCALE = 1.;
        const vec3 COLOR_PURPLE = vec3(0.569,0.275,1.);
        const vec3 COLOR_GREEN = vec3(0.,0.698,0.38);
        const vec3 COLOR_CORAL = vec3(1.,0.6,0.38);
        const vec3 COLOR_BLUE = vec3(0.624,0.824,0.941);
        const vec3 OVERLAY_PURPLE = mix(vec3(1.0), COLOR_PURPLE, 0.25);

        uniform sampler2D tMatcap;
        uniform sampler2D tAo;
        uniform float uTime;
        uniform float uJoin;
        uniform float uCurrentPosition;
        uniform vec3 uTouchPositions[16];
        uniform float uTouchPulseStrength[16];
        uniform float uFinalPulseStrength;

        varying vec3 vInstanceNormal;
        varying vec2 vUv;
        varying vec3 vWorldPosition;
        varying float vExplodeWave;
      `, fragmentColorTransform: `
        /* 
          Touch Positions
        */
        float touchPulse = 0.;
        for(int i = 0; i < 16; i++) {
          float intensity = smootherstep(0.23, 0.18, uTouchPulseStrength[i]);

          touchPulse += pulseSoft(vec2(0.0, 0.0), intensity * 0.85, 0.5, vWorldPosition, uTouchPositions[i]) * sin(intensity * PI);
          // touchPulse *= 1.0 - smoothstep(1.0, 0.0, distance(uTouchPositions[i], vWorldPosition) * SHADOW_SCALE) * 10.;
          // touchPulse *= intensity;
          
        }

        touchPulse = clamp(0.0, 1.0, touchPulse);

        /* 
          Final Pulse
        */
        float finalPulse = pulseSoft(vec2(0.0, 5.0), uJoin * 2., 0.75, vWorldPosition, vec3(0.0, 0.0, uCurrentPosition));
          
        /* 
          Bottom Light
        */
        float bottomNoise = 0.5 + snoise(vec3(vWorldPosition.x * 0.3, vWorldPosition.z * 0.3, uTime * 0.0002)) * 0.5;
        bottomNoise = smoothstep(0.0, 1.0, bottomNoise);

        // float bottomLightIntensity = bottomNoise * step(vWorldPosition.y, -0.01);
        float bottomLightIntensity = bottomNoise * step(-0.03 + vExplodeWave, vWorldPosition.y - vExplodeWave) * step(vWorldPosition.y + vExplodeWave, -0.01 + vExplodeWave);
        vec3 bottomColor = COLOR_PURPLE * vec3(bottomLightIntensity);
        
        gl_FragColor.rgb -= bottomLightIntensity * BOTTOM_LIGHT_STRENGTH;
        gl_FragColor.rgb += bottomColor.rgb * BOTTOM_LIGHT_STRENGTH;
        gl_FragColor.rgb -= bottomNoise * BLOOM_STRENGTH;
        gl_FragColor.rgb += bottomNoise * COLOR_PURPLE * BLOOM_STRENGTH;
        gl_FragColor.rgb += touchPulse;
        gl_FragColor.rgb += finalPulse * sin(uFinalPulseStrength * PI);
      `}), this.modifiedMaterial.onBeforeCompile = e => {
				e.vertexShader = e.vertexShader.replace("#include <begin_vertex>", `
          #include <begin_vertex>

          float distanceFromCameraNormalized = distance(uCurrentPosition - 5., aInstanceUV.y);
          distanceFromCameraNormalized = smoothstep(4., 1., distanceFromCameraNormalized);

          float modifiedDisplacementStrength = aDisplacementStrength;
          modifiedDisplacementStrength = smoothstep(0.0, 1.0, modifiedDisplacementStrength);
          modifiedDisplacementStrength = smootherstep(0.0, uDisplacementShrink, modifiedDisplacementStrength) * uDisplacementHeight;

          float movementNoise = snoise(vec3(aInstanceUV.x, uTime * uDisplacementNoiseSpeed, aInstanceUV.y));

          float adjustedMovementNoise = movementNoise * modifiedDisplacementStrength * 5. * (1.0 - uJoin);
          adjustedMovementNoise *= uDisplacementNoiseHeight;
          adjustedMovementNoise *= distanceFromCameraNormalized;

          float worldNoise = 0.5 + snoise(vec3(aInstanceUV.x * 0.1, 0.0, aInstanceUV.y * 0.1)) * 0.5;
          worldNoise *= distanceFromCameraNormalized * 1.5;

          float explodeWave = sin(smoothstep(0.0 + uFinalPulseStrength * 3.5, 4.0 + uFinalPulseStrength * 3.5, abs(aInstanceUV.x)) * PI) * sin(uFinalPulseStrength * PI) * 1.5;

          float rotationIntensity = aExplodePositionY * uJoin * 0.2;
          rotationIntensity += (fract(uRotationTime * 0.000005 * aExplodePositionY) * PI * 2.) * uJoin;
          transformed = rotateVertex(transformed, vec3(1.0, 0.0, 0.0), rotationIntensity);
          transformed = rotateVertex(transformed, vec3(0.0, 1.0, 0.0), rotationIntensity);

          transformed.y += adjustedMovementNoise * (1.0 - uJoin) * uInitialAnimation;
          transformed.y += modifiedDisplacementStrength * distanceFromCameraNormalized * 2. * (1.0 - uJoin) * uInitialAnimation;
          transformed.y += smoothstep(0.0, 1.0, worldNoise) * modifiedDisplacementStrength * (1.0 - uJoin) * uInitialAnimation;
          transformed.y += aExplodePositionY * uJoin;
          transformed.y += explodeWave;
          transformed.y += sin(movementNoise + uTime * 0.001) * uJoin * aExplodePositionY * 0.05;

          vWorldPosition = (modelMatrix * instanceMatrix * vec4(transformed, 1.0)).xyz;
          vExplodeWave = explodeWave;
        `), e.fragmentShader = e.fragmentShader.replace("vec4 diffuseColor = vec4( diffuse, opacity );", `
          /* 
            Matcap
          */
          vec3 matcapNormal = normalize(vInstanceNormal);

          vec3 viewDir = normalize(vViewPosition);
          vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
          vec3 y = cross( viewDir, x );
          vec2 matcapUV = vec2( dot( x, matcapNormal ), dot( y, matcapNormal ) ) * 0.495 + 0.5; 

          vec4 textureMatcap = texture2D( tMatcap, matcapUV );

          /* 
            AO
          */
          vec4 textureAo = texture2D(tAo, vUv);

          /* 
            Bottom Gradient
          */
          vec3 bottomGradient = clamp( // Gradient
            mix(
              mix(vec3(0.8,0.908,0.776), vec3(0.124,0.471,0.837), clamp(-vViewPosition.x * 0.5, 0.0, 1.0)), 
              vec3(0.914,0.749,0.757), 
              vViewPosition.z * 0.2
            ), 
          0.0, 1.0); 

          /* 
            Final Color
          */
          vec4 diffuseColor = vec4(textureMatcap.rgb, opacity );
          diffuseColor.rgb *= mix(
            bottomGradient, 
            vec3(1.0),
            smoothstep((uJoin) * 10., (uJoin - .2) * 10., distance(vWorldPosition, vec3(0.0, 0.0, uCurrentPosition)))
          ); // Fade na konci

          diffuseColor = clamp(diffuseColor, 0.0, 1.0);
          // diffuseColor.rgb *= vec3(vViewPosition.x, vViewPosition.y, vViewPosition.z - 4.);
        `)
			}, this.attributes = { instanceUV: new Float32Array(this.params.grid.x * this.params.grid.y * 2), displacementValue: new Float32Array(this.params.grid.x * this.params.grid.y), explodePositionY: new Float32Array(this.params.grid.x * this.params.grid.y) }, this.dummy = new it, this.instance = new kh(this.geometry, this.modifiedMaterial, this.params.grid.x * this.params.grid.y), this.instance.frustumCulled = !1, this.instance.receiveShadow = !0, this.instance.instanceMatrix.setUsage(hh), this.gl.scene.add(this.instance), this.instance.renderOrder = 1, this.createMesh()
	} createMesh() { for (let e = 0; e < this.params.grid.x; e++)for (let t = 0; t < this.params.grid.y; t++) { let n = e + t * this.params.grid.x; this.positions[n * 3] = e - this.params.grid.x / 2, this.positions[n * 3 + 1] = 0, this.positions[n * 3 + 2] = t, this.dummy.position.x = this.positions[n * 3], this.dummy.position.x *= this.gl.controler.globalScale, this.dummy.position.y = this.positions[n * 3 + 1], this.dummy.position.z = this.positions[n * 3 + 2], this.dummy.position.z *= this.gl.controler.globalScale, this.dummy.scale.x = this.params.dimensions.x - this.params.gap / 2, this.dummy.scale.x *= this.gl.controler.globalScale, this.dummy.scale.y = this.params.dimensions.y, this.dummy.scale.y *= this.gl.controler.globalScale, this.dummy.scale.z = this.params.dimensions.z - this.params.gap / 2, this.dummy.scale.z *= this.gl.controler.globalScale, this.attributes.instanceUV[n * 2] = this.dummy.position.x, this.attributes.instanceUV[n * 2 + 1] = this.dummy.position.z; let i = Math.abs(Math.sin(this.dummy.position.z) * this.gl.controler.curve.surroundings - this.dummy.position.x); i /= this.params.grid.x / 2 * this.gl.controler.globalScale, this.attributes.displacementValue[n] = i; let r = i > this.params.explosion.filter ? i : 0; this.attributes.explodePositionY[n + Math.round(-1 + Math.random() * 2)] = n % this.params.explosion.probability == !1 ? this.params.explosion.strength * r * Math.random() : 0, this.dummy.updateMatrix(), this.instance.setMatrixAt(n, this.dummy.matrix), this.instance.instanceMatrix.needsUpdate = !0 } this.geometry.setAttribute("aInstanceUV", new un(this.attributes.instanceUV, 2)), this.geometry.setAttribute("aDisplacementStrength", new un(this.attributes.displacementValue, 1)), this.geometry.setAttribute("aExplodePositionY", new un(this.attributes.explodePositionY, 1)) } updateTick() { let e = this.gl.controler.progress.stepScaled >= 0 ? Math.floor(this.gl.controler.progress.stepScaled / this.params.grid.y) : Math.ceil(this.gl.controler.progress.stepScaled / this.params.grid.y); for (let t = 0; t < this.params.grid.x; t++)for (let n = 0; n < this.params.grid.y; n++) { let i = t + n * this.params.grid.x, r = this.positions[i * 3 + 2] - this.gl.controler.progress.stepScaled % this.params.grid.y - this.gl.camera.cameraGroup.position.z, o = this.positions[i * 3 + 2]; r < 0 && (o = this.positions[i * 3 + 2] + this.params.grid.y), r > this.params.grid.y && (o = this.positions[i * 3 + 2] - this.params.grid.y), this.dummy.position.x = this.positions[i * 3], this.dummy.position.x *= this.gl.controler.globalScale, this.dummy.position.y = this.positions[i * 3 + 1], this.dummy.position.z = o + this.params.grid.y * e, this.dummy.position.z *= this.gl.controler.globalScale, this.attributes.instanceUV[i * 2] = this.dummy.position.x, this.attributes.instanceUV[i * 2 + 1] = this.dummy.position.z; let a = Math.abs(Math.sin(this.dummy.position.z) * this.gl.controler.curve.surroundings - this.dummy.position.x); a /= this.params.grid.x / 2 * this.gl.controler.globalScale, this.attributes.displacementValue[i] = a, this.dummy.updateMatrix(), this.instance.setMatrixAt(i, this.dummy.matrix), this.instance.instanceMatrix.needsUpdate = !0 } this.geometry.attributes.aDisplacementStrength.needsUpdate = !0, this.geometry.setAttribute("aInstanceUV", new un(this.attributes.instanceUV, 2)), this.geometry.setAttribute("aDisplacementStrength", new un(this.attributes.displacementValue, 1)) } update() { this.instance.material.uniforms.uTime.value += this.gl.time.delta * (1 - this.gl.controler.progress.hover), this.instance.material.uniforms.uRotationTime.value += this.gl.time.delta * (1 - this.gl.controler.progress.hover), this.instance.material.uniforms.uCurrentPosition.value = this.gl.controler.progress.value + 7 + this.gl.camera.cameraGroup.position.z, this.instance.material.uniforms.uJoin.value = this.gl.controler.progress.join }
} var Jv = `#include <fog_pars_vertex>
float remap(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

const float PI = 3.1415926;

attribute vec3 aInstancePosition;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vInstanceColor;
varying vec3 vInstancePosition;
varying vec3 vViewPosition;
varying vec3 vNormal;

uniform float uCurrentPosition;
uniform float uGlowJoin;

void main() {
  #include <begin_vertex>
  #include <project_vertex>
  #include <fog_vertex>

  vWorldPosition = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;

  
  
  
  

  

  
  vUv = uv;
  vNormal = normalMatrix * mat3(instanceMatrix) * normal;
  mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
  vViewPosition = -mvPosition.xyz;
  vInstanceColor = instanceColor;
  vInstancePosition = aInstancePosition;

  gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);

}`, Qv = `#include <fog_pars_fragment>
float remap(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

const float VOLUME_INTENSITY = 0.45;
const float VOLUME_SIZE = 0.7;
const float AO_INTENSITY = 0.2;
const float COLOR_INTENSITY_LAND = 0.5;
const float COLOR_INTENSITY_JOIN = 0.5;
const vec3 COLOR_PURPLE = vec3(1.0, 0.388, 0.125);
const float LIGHTNESS_SIDE = 0.1;
const float LIGHTNESS_TOP = 1.0;
const vec3 OVERLAY_PURPLE = mix(vec3(1.0), COLOR_PURPLE, 0.25);
const float GLOWUP_INTENSITY = 0.4;

varying vec2 vUv;
varying vec3 vWorldPosition;
varying vec3 vInstanceColor;
varying vec3 vInstancePosition;
varying vec3 vViewPosition;
varying vec3 vNormal;

uniform sampler2D tMaskTop;
uniform sampler2D tBase;
uniform sampler2D tAo;
uniform sampler2D tMatcap;
uniform vec2 uTextureCoords;
uniform float uGlowDistance;
uniform float uJoin;
uniform float uOutlineStrength;
uniform float uOpacity;
uniform float uColorTopStrength;
uniform float uColorSideStrength;
uniform float uTime;
uniform float uCurrentPosition;

void main() {
  vec2 baseUv = clamp(vec2(vUv.x + uTextureCoords.x, vUv.y + uTextureCoords.y), vec2(0.0 + uTextureCoords), vec2(0.25 + uTextureCoords));
  vec4 textureBase = texture2D(tBase, baseUv);

  

  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
  vec3 y = cross( viewDir, x );
  vec2 matcapUV = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; 

  vec4 textureMatcap = texture2D( tMatcap, matcapUV );

  /* 
    Textures
  */
  vec4 textureMaskTop = texture2D(tMaskTop, vUv);
  vec4 textureMaskBottom = texture2D(tMaskTop, vec2(vUv.x, 1.0 - vUv.y));

  
  textureBase = clamp(textureBase, 0.0, 1.0);
  vec4 textureAo = texture2D(tAo, vUv);

  /* 
    Volumes
  */
  float volumeEffect = distance(vWorldPosition, vInstancePosition);
  volumeEffect = smoothstep(VOLUME_SIZE, 0.0, volumeEffect);
  volumeEffect *= textureMaskTop.r;
  

  float volumeGlow = distance(vWorldPosition, vInstancePosition);
  volumeGlow = smoothstep(.5, 0.0, volumeGlow);

  float joinGlow = distance(vWorldPosition.z, vInstancePosition.z);
  joinGlow = smoothstep(0.3, 0.4, joinGlow);

  float distanceIntensity = 0.0;
  distanceIntensity += remap(uGlowDistance, 0.0, 1.0, 0.6, 0.8); 
  
  
  /* 
    Sides
  */
  vec3 sideColor = COLOR_PURPLE;
  
  
  
  sideColor *= textureMaskTop.r;
  sideColor += 1.0 - textureMaskTop.r;
  

  vec3 topColor = vInstanceColor;
  topColor *= LIGHTNESS_TOP;
  
  topColor *= 1.0 - textureMaskTop.r;
  topColor += textureMaskTop.r;
  topColor = mix(vec3(1.0), topColor, clamp(uColorTopStrength * distanceIntensity + uJoin, 0.0, 1.0));

  vec3 defautColor = vec3(1.);
  defautColor *= sideColor;
  

  vec3 targetColor = mix(defautColor, mix(COLOR_PURPLE, vec3(0.0, 0.0, 1.0), 0.25), uJoin);
  
  
  float joinEffect = smoothstep(uJoin * 5., (uJoin - 0.5) * 5., distance(vWorldPosition, vec3(0.0, 0.0, uCurrentPosition)));
  
  
  /* 
    Color
  */
  
  vec3 color = textureMatcap.rgb;
  
  color *= targetColor;
  color -= volumeEffect * uJoin; 
  color += (textureMatcap.rgb * 0.5) * (1. - uJoin) * (1.0 - textureMaskTop.r); 
  color -= (1.0 - textureAo.rgb) * (AO_INTENSITY * (1.0 - joinEffect * 0.5)); 
  color += smoothstep(0.5, 1.0, textureMatcap.r) * (1.0 - textureAo.r) * 0.65 * (1.0 - uJoin * 0.85); 
  color *= textureBase.rgb; 
  color += (1. - textureBase.rgb) * joinEffect * 2.; 
  color += volumeGlow * GLOWUP_INTENSITY * joinEffect * (1.0 + sin(uTime * 0.005) * 0.25); 
  color += smoothstep(0.6, 0.3, textureMatcap.b) * (1.0 - textureBase.r) * 3.0; 
  color += smoothstep(0.9, 1.0, fract(uTime * 0.00075 - vWorldPosition.z * 0.1)) * 0.2 * joinEffect; 
  color += joinGlow * joinEffect * 0.3; 

  gl_FragColor = vec4(color, mix(textureMaskTop.r, 1.0, mix(0.85, 1.0, 1.0 - textureBase.r)) * mix(mix(uOpacity, 1.0, 1.0 - textureBase.r), 1.0, joinEffect));

  /* 
    Add Fog
  */
  #include <fog_fragment>
}`; function e0(s, e, t) { var n = Math.max(0, Math.min(1, (t - s) / (e - s))); return n * n * (3 - 2 * n) } function t0(s) { return s < .5 ? 4 * s * s * s : 1 - Math.pow(-2 * s + 2, 3) / 2 } function n0(s) { const t = 9.149999999999999; return s < .5 ? Math.pow(2 * s, 2) * ((t + 1) * 2 * s - t) / 2 : (Math.pow(2 * s - 2, 2) * ((t + 1) * (s * 2 - 2) + t) + 2) / 2 } function bo(s, e, t, n, i) { s = Math.min(Math.max(s, e), t); const r = (s - e) / (t - e); return n + r * (i - n) } function Di(s, e, t) { return (1 - t) * s + t * e } function i0(s) { const e = Math.floor(s / 4), t = s % 4; return new le(t / 4, e / 4) } class s0 { constructor() { this.gl = new _n, this.colors = new Ha, this.params = { count: 16, dimensions: new C(1, .245, 1), gap: .5, start: { dimensions: new C(3.25, 1.5, 0) }, join: { offset: 5 } }, this.positions = { start: new Float32Array(this.params.count * 3), target: new Float32Array(this.params.count * 3), floatTime: 0 }, this.rotations = { start: new Float32Array(this.params.count * 3), target: new Float32Array(this.params.count * 3) }, this.aInstancePositions = new Float32Array(this.params.count * 3), this.previousNormalizedDistance = new Array(this.params.count), this.geometry = this.gl.assets.models.cubeDetailed.geometry.clone(), this.material = new sn({ fog: !0, vertexShader: Jv, fragmentShader: Qv, transparent: !0, side: Xt, forceSinglePass: !1, precision: "lowp", uniforms: Ir.merge([re.fog, { uTime: new Be(0), uTextureCoords: new Be(new le), uGlowDistance: new Be(0), uJoin: new Be(0), uInitialAnimation: new Be(0), uOutlineStrength: new Be(0), uOpacity: new Be(.8), uColorTopStrength: new Be(0), uColorSideStrength: new Be(1), uCurrentPosition: new Be(0), tMaskTop: new Be(this.gl.assets.textures.masks.top), tBase: new Be(this.gl.assets.textures.base), tAo: new Be(this.gl.assets.textures.ao), tMatcap: new Be(this.gl.assets.textures.matcap) }]) }), this.dummy = new it, this.instance = new kh(this.geometry, this.material, this.params.count), this.instance.frustumCulled = !1, this.instance.castShadow = !0, this.instance.renderOrder = 2, this.instance.instanceMatrix.setUsage(hh), this.gl.scene.add(this.instance), this.createMesh(), this.setColors(), this.setTextureCoords() } setRandomColors() { for (let e = 0; e < this.params.count; e++)this.instance.setColorAt(e, new Se(Math.random() * 16777215)) } setColors() { for (let e = 0; e < this.params.count; e++)this.instance.setColorAt(e, new Se(this.colors.palette[e % this.colors.palette.length])) } setTextureCoords() { for (let e = 0; e < this.params.count; e++)this.instance.setUniformAt("uTextureCoords", e, i0(e)) } createMesh() { for (let e = 0; e < this.params.count; e++) { let t = this.params.start.dimensions.x + (Math.random() - .5), n = this.params.start.dimensions.y + (Math.random() - .5); this.positions.start[e * 3] = e % 2 == 0 ? t : -t, this.positions.start[e * 3 + 1] = n, this.positions.start[e * 3 + 2] = e, this.positions.target[e * 3] = 0, this.positions.target[e * 3 + 1] = this.params.dimensions.y / 2, this.positions.target[e * 3 + 2] = e; let i = Math.PI / (3 + (Math.random() - .5)), r = Math.PI / (8 + (Math.random() - .5)), o = Math.PI * (Math.random() - .5) / 6; this.rotations.start[e * 3] = -i, this.rotations.start[e * 3 + 1] = e % 2 == 0 ? r : -r, this.rotations.start[e * 3 + 2] = o, this.rotations.target[e * 3] = 0, this.rotations.target[e * 3 + 1] = 0, this.rotations.target[e * 3 + 2] = 0 } } update() { let e = this.gl.controler.progress.step >= 0 ? Math.floor(this.gl.controler.progress.step / this.params.count) : Math.ceil(this.gl.controler.progress.step / this.params.count); this.positions.floatTime += this.gl.time.delta * (1 - this.gl.controler.progress.hover); let t = [], n = []; for (let i = 0; i < this.params.count; i++) { let r = this.positions.target[i * 3 + 2] - this.gl.controler.progress.step % this.params.count, o = this.positions.target[i * 3 + 2]; r < 0 && (o = this.positions.target[i * 3 + 2] + this.params.count), r > this.params.count && (o = this.positions.target[i * 3 + 2] - this.params.count); let a = o + this.params.count * e; a -= this.gl.controler.progress.value - 1, a /= this.params.count; let l = o + this.params.count * e; l -= this.gl.controler.progress.scroll.slowDown.startPosition - 1, l /= this.params.count; let c = this.gl.camera.instance.position.z - (o + this.params.count * e + -this.params.join.offset); o += this.params.gap * c / 2 * this.gl.controler.progress.scroll.join; let h = bo(a, .19, .45, 1, 0); h = t0(h), h = Di(h, 1, this.gl.controler.progress.scroll.slowDown.value); let u = bo(l, .22, .37, 0, 1), d = bo(a, .19, .22, 1, 0); d = n0(d); let p = Math.sin(this.dummy.position.z) * this.gl.controler.curve.icons * (1 - this.gl.controler.progress.scroll.slowDown.value * u), g = Math.sin(this.positions.start[i * 3 + 2] + this.positions.floatTime * .001) * .25; this.dummy.position.z = o + this.params.count * e, this.dummy.position.x = Di(this.positions.start[i * 3], this.positions.target[i * 3] + p, h), this.dummy.position.y = Di(this.positions.start[i * 3 + 1], this.positions.target[i * 3 + 1], h) + g * (1 - h), this.dummy.position.y -= d * .025, this.dummy.rotation.x = Di(this.rotations.start[i * 3], this.rotations.target[i * 3], h), this.dummy.rotation.y = Di(this.rotations.start[i * 3 + 1], this.rotations.target[i * 3 + 1], h), this.dummy.rotation.z = Di(this.rotations.start[i * 3 + 2], this.rotations.target[i * 3 + 2], h); let _ = Math.abs(this.dummy.position.z - this.instance.material.uniforms.uCurrentPosition.value), m = Math.sin(e0(-3 + this.gl.controler.progress.join * 4, 0 + this.gl.controler.progress.join * 4, _) * Math.PI); this.dummy.position.y += m * Math.sin(this.gl.controler.progress.join * Math.PI) * .1, this.dummy.scale.set(this.params.dimensions.x - this.params.gap / 2, 1, this.params.dimensions.z - this.params.gap / 2), this.aInstancePositions[i * 3] = this.dummy.position.x, this.aInstancePositions[i * 3 + 1] = this.dummy.position.y, this.aInstancePositions[i * 3 + 2] = this.dummy.position.z, this.dummy.updateMatrix(), this.instance.setMatrixAt(i, this.dummy.matrix), this.instance.instanceMatrix.needsUpdate = !0, t[i] = new C(this.dummy.position.x, this.dummy.position.y, this.dummy.position.z), n[i] = a } this.geometry.setAttribute("aInstancePosition", new un(this.aInstancePositions, 3)), this.gl.world.surroundings.instance.material.uniforms.uTouchPositions.value = t, this.gl.world.surroundings.instance.material.uniforms.uTouchPulseStrength.value = n, this.instance.material.uniforms.uJoin.value = this.gl.controler.progress.join, this.instance.material.uniforms.uTime.value += this.gl.time.delta, this.instance.material.uniforms.uCurrentPosition.value = this.gl.controler.progress.value + 7 } } class r0 { constructor() { this.gl = new _n, this.hemisphereLight = new j_(this.gl.colors.fog.default, 0, 1), this.gl.scene.add(this.hemisphereLight), this.shadowMapDiameter = new le(3, 6), this.directionalLight = new Fh(this.gl.colors.fog.default, 2), this.directionalLight.position.set(2, 3, 0), this.directionalLight.shadow.mapSize.width = 512, this.directionalLight.shadow.mapSize.height = 512, this.directionalLight.shadow.camera.near = 1, this.directionalLight.shadow.camera.far = 8, this.directionalLight.shadow.camera.left = -this.shadowMapDiameter.y, this.directionalLight.shadow.camera.right = this.shadowMapDiameter.y, this.directionalLight.shadow.camera.top = this.shadowMapDiameter.x, this.directionalLight.shadow.camera.bottom = -this.shadowMapDiameter.x, this.directionalLight.shadow.intensity = 1, this.directionalLight.castShadow = !0, this.gl.scene.add(this.directionalLight), this.gl.scene.add(this.directionalLight.target) } update() { this.directionalLight.target.position.z = this.gl.controler.progress.value + this.shadowMapDiameter.y, this.directionalLight.position.z = this.gl.controler.progress.value + this.shadowMapDiameter.y } } class o0 { constructor() { this.icons = new s0, this.surroundings = new Zv, this.lighting = new r0 } resize() { } update() { this.icons.update(), this.surroundings.update(), this.lighting.update() } } class Hh { constructor() { this.callbacks = {}, this.callbacks.base = {} } on(e, t) { return typeof e > "u" || e === "" ? (console.warn("wrong names"), !1) : typeof t > "u" ? (console.warn("wrong callback"), !1) : (this.resolveNames(e).forEach(i => { const r = this.resolveName(i); this.callbacks[r.namespace] instanceof Object || (this.callbacks[r.namespace] = {}), this.callbacks[r.namespace][r.value] instanceof Array || (this.callbacks[r.namespace][r.value] = []), this.callbacks[r.namespace][r.value].push(t) }), this) } off(e) { return typeof e > "u" || e === "" ? (console.warn("wrong name"), !1) : (this.resolveNames(e).forEach(n => { const i = this.resolveName(n); if (i.namespace !== "base" && i.value === "") delete this.callbacks[i.namespace]; else if (i.namespace === "base") for (const r in this.callbacks) this.callbacks[r] instanceof Object && this.callbacks[r][i.value] instanceof Array && (delete this.callbacks[r][i.value], Object.keys(this.callbacks[r]).length === 0 && delete this.callbacks[r]); else this.callbacks[i.namespace] instanceof Object && this.callbacks[i.namespace][i.value] instanceof Array && (delete this.callbacks[i.namespace][i.value], Object.keys(this.callbacks[i.namespace]).length === 0 && delete this.callbacks[i.namespace]) }), this) } trigger(e, t) { if (typeof e > "u" || e === "") return console.warn("wrong name"), !1; let n = null; const i = t instanceof Array ? t : []; let r = this.resolveNames(e); if (r = this.resolveName(r[0]), r.namespace === "base") for (const o in this.callbacks) this.callbacks[o] instanceof Object && this.callbacks[o][r.value] instanceof Array && this.callbacks[o][r.value].forEach(function (a) { a.apply(this, i) }); else if (this.callbacks[r.namespace] instanceof Object) { if (r.value === "") return console.warn("wrong name"), this; this.callbacks[r.namespace][r.value].forEach(function (o) { o.apply(this, i) }) } return n } resolveNames(e) { let t = e; return t = t.replace(/[^a-zA-Z0-9 ,/.]/g, ""), t = t.replace(/[,/]+/g, " "), t = t.split(" "), t } resolveName(e) { const t = {}, n = e.split("."); return t.original = e, t.value = n[0], t.namespace = "base", n.length > 1 && n[1] !== "" && (t.namespace = n[1]), t } } class a0 extends Hh { constructor() { super(), this.start = Date.now(), this.current = this.start, this.elapsed = 0, this.delta = 16, window.requestAnimationFrame(() => { this.tick() }) } tick() { const e = Date.now(); this.delta = e - this.current, this.current = e, this.elapsed = this.current - this.start, this.trigger("tick"), window.requestAnimationFrame(() => { this.tick() }) } } class l0 extends Hh { constructor() { super(), this.setSize(), window.addEventListener("resize", () => { this.setSize(), this.trigger("resize") }) } setSize() { this.width = document.querySelector("[data-gl-wrapper]").clientWidth, this.height = document.querySelector("[data-gl-wrapper]").clientHeight, this.width > 768 ? this.pixelRatio = Math.min(window.devicePixelRatio, 1.5) : this.pixelRatio = Math.min(window.devicePixelRatio, 2) } } function c0(s) { if (s && !(typeof window > "u")) { var e = document.createElement("style"); return e.setAttribute("type", "text/css"), e.innerHTML = s, document.head.appendChild(e), s } } function Fi(s, e) { var t = s.__state.conversionName.toString(), n = Math.round(s.r), i = Math.round(s.g), r = Math.round(s.b), o = s.a, a = Math.round(s.h), l = s.s.toFixed(1), c = s.v.toFixed(1); if (e || t === "THREE_CHAR_HEX" || t === "SIX_CHAR_HEX") { for (var h = s.hex.toString(16); h.length < 6;)h = "0" + h; return "#" + h } else { if (t === "CSS_RGB") return "rgb(" + n + "," + i + "," + r + ")"; if (t === "CSS_RGBA") return "rgba(" + n + "," + i + "," + r + "," + o + ")"; if (t === "HEX") return "0x" + s.hex.toString(16); if (t === "RGB_ARRAY") return "[" + n + "," + i + "," + r + "]"; if (t === "RGBA_ARRAY") return "[" + n + "," + i + "," + r + "," + o + "]"; if (t === "RGB_OBJ") return "{r:" + n + ",g:" + i + ",b:" + r + "}"; if (t === "RGBA_OBJ") return "{r:" + n + ",g:" + i + ",b:" + r + ",a:" + o + "}"; if (t === "HSV_OBJ") return "{h:" + a + ",s:" + l + ",v:" + c + "}"; if (t === "HSVA_OBJ") return "{h:" + a + ",s:" + l + ",v:" + c + ",a:" + o + "}" } return "unknown format" } var Lc = Array.prototype.forEach, ms = Array.prototype.slice, j = { BREAK: {}, extend: function (e) { return this.each(ms.call(arguments, 1), function (t) { var n = this.isObject(t) ? Object.keys(t) : []; n.forEach((function (i) { this.isUndefined(t[i]) || (e[i] = t[i]) }).bind(this)) }, this), e }, defaults: function (e) { return this.each(ms.call(arguments, 1), function (t) { var n = this.isObject(t) ? Object.keys(t) : []; n.forEach((function (i) { this.isUndefined(e[i]) && (e[i] = t[i]) }).bind(this)) }, this), e }, compose: function () { var e = ms.call(arguments); return function () { for (var t = ms.call(arguments), n = e.length - 1; n >= 0; n--)t = [e[n].apply(this, t)]; return t[0] } }, each: function (e, t, n) { if (e) { if (Lc && e.forEach && e.forEach === Lc) e.forEach(t, n); else if (e.length === e.length + 0) { var i = void 0, r = void 0; for (i = 0, r = e.length; i < r; i++)if (i in e && t.call(n, e[i], i) === this.BREAK) return } else for (var o in e) if (t.call(n, e[o], o) === this.BREAK) return } }, defer: function (e) { setTimeout(e, 0) }, debounce: function (e, t, n) { var i = void 0; return function () { var r = this, o = arguments; function a() { i = null, n || e.apply(r, o) } var l = n || !i; clearTimeout(i), i = setTimeout(a, t), l && e.apply(r, o) } }, toArray: function (e) { return e.toArray ? e.toArray() : ms.call(e) }, isUndefined: function (e) { return e === void 0 }, isNull: function (e) { return e === null }, isNaN: function (s) { function e(t) { return s.apply(this, arguments) } return e.toString = function () { return s.toString() }, e }(function (s) { return isNaN(s) }), isArray: Array.isArray || function (s) { return s.constructor === Array }, isObject: function (e) { return e === Object(e) }, isNumber: function (e) { return e === e + 0 }, isString: function (e) { return e === e + "" }, isBoolean: function (e) { return e === !1 || e === !0 }, isFunction: function (e) { return e instanceof Function } }, h0 = [{ litmus: j.isString, conversions: { THREE_CHAR_HEX: { read: function (e) { var t = e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i); return t === null ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString() + t[1].toString() + t[2].toString() + t[2].toString() + t[3].toString() + t[3].toString(), 0) } }, write: Fi }, SIX_CHAR_HEX: { read: function (e) { var t = e.match(/^#([A-F0-9]{6})$/i); return t === null ? !1 : { space: "HEX", hex: parseInt("0x" + t[1].toString(), 0) } }, write: Fi }, CSS_RGB: { read: function (e) { var t = e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/); return t === null ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]) } }, write: Fi }, CSS_RGBA: { read: function (e) { var t = e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/); return t === null ? !1 : { space: "RGB", r: parseFloat(t[1]), g: parseFloat(t[2]), b: parseFloat(t[3]), a: parseFloat(t[4]) } }, write: Fi } } }, { litmus: j.isNumber, conversions: { HEX: { read: function (e) { return { space: "HEX", hex: e, conversionName: "HEX" } }, write: function (e) { return e.hex } } } }, { litmus: j.isArray, conversions: { RGB_ARRAY: { read: function (e) { return e.length !== 3 ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2] } }, write: function (e) { return [e.r, e.g, e.b] } }, RGBA_ARRAY: { read: function (e) { return e.length !== 4 ? !1 : { space: "RGB", r: e[0], g: e[1], b: e[2], a: e[3] } }, write: function (e) { return [e.r, e.g, e.b, e.a] } } } }, { litmus: j.isObject, conversions: { RGBA_OBJ: { read: function (e) { return j.isNumber(e.r) && j.isNumber(e.g) && j.isNumber(e.b) && j.isNumber(e.a) ? { space: "RGB", r: e.r, g: e.g, b: e.b, a: e.a } : !1 }, write: function (e) { return { r: e.r, g: e.g, b: e.b, a: e.a } } }, RGB_OBJ: { read: function (e) { return j.isNumber(e.r) && j.isNumber(e.g) && j.isNumber(e.b) ? { space: "RGB", r: e.r, g: e.g, b: e.b } : !1 }, write: function (e) { return { r: e.r, g: e.g, b: e.b } } }, HSVA_OBJ: { read: function (e) { return j.isNumber(e.h) && j.isNumber(e.s) && j.isNumber(e.v) && j.isNumber(e.a) ? { space: "HSV", h: e.h, s: e.s, v: e.v, a: e.a } : !1 }, write: function (e) { return { h: e.h, s: e.s, v: e.v, a: e.a } } }, HSV_OBJ: { read: function (e) { return j.isNumber(e.h) && j.isNumber(e.s) && j.isNumber(e.v) ? { space: "HSV", h: e.h, s: e.s, v: e.v } : !1 }, write: function (e) { return { h: e.h, s: e.s, v: e.v } } } } }], gs = void 0, ur = void 0, da = function () { ur = !1; var e = arguments.length > 1 ? j.toArray(arguments) : arguments[0]; return j.each(h0, function (t) { if (t.litmus(e)) return j.each(t.conversions, function (n, i) { if (gs = n.read(e), ur === !1 && gs !== !1) return ur = gs, gs.conversionName = i, gs.conversion = n, j.BREAK }), j.BREAK }), ur }, Dc = void 0, Cr = { hsv_to_rgb: function (e, t, n) { var i = Math.floor(e / 60) % 6, r = e / 60 - Math.floor(e / 60), o = n * (1 - t), a = n * (1 - r * t), l = n * (1 - (1 - r) * t), c = [[n, l, o], [a, n, o], [o, n, l], [o, a, n], [l, o, n], [n, o, a]][i]; return { r: c[0] * 255, g: c[1] * 255, b: c[2] * 255 } }, rgb_to_hsv: function (e, t, n) { var i = Math.min(e, t, n), r = Math.max(e, t, n), o = r - i, a = void 0, l = void 0; if (r !== 0) l = o / r; else return { h: NaN, s: 0, v: 0 }; return e === r ? a = (t - n) / o : t === r ? a = 2 + (n - e) / o : a = 4 + (e - t) / o, a /= 6, a < 0 && (a += 1), { h: a * 360, s: l, v: r / 255 } }, rgb_to_hex: function (e, t, n) { var i = this.hex_with_component(0, 2, e); return i = this.hex_with_component(i, 1, t), i = this.hex_with_component(i, 0, n), i }, component_from_hex: function (e, t) { return e >> t * 8 & 255 }, hex_with_component: function (e, t, n) { return n << (Dc = t * 8) | e & ~(255 << Dc) } }, u0 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (s) { return typeof s } : function (s) { return s && typeof Symbol == "function" && s.constructor === Symbol && s !== Symbol.prototype ? "symbol" : typeof s }, on = function (s, e) { if (!(s instanceof e)) throw new TypeError("Cannot call a class as a function") }, an = function () { function s(e, t) { for (var n = 0; n < t.length; n++) { var i = t[n]; i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i) } } return function (e, t, n) { return t && s(e.prototype, t), n && s(e, n), e } }(), Kn = function s(e, t, n) { e === null && (e = Function.prototype); var i = Object.getOwnPropertyDescriptor(e, t); if (i === void 0) { var r = Object.getPrototypeOf(e); return r === null ? void 0 : s(r, t, n) } else { if ("value" in i) return i.value; var o = i.get; return o === void 0 ? void 0 : o.call(n) } }, $n = function (s, e) { if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e); s.prototype = Object.create(e && e.prototype, { constructor: { value: s, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(s, e) : s.__proto__ = e) }, Zn = function (s, e) { if (!s) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e && (typeof e == "object" || typeof e == "function") ? e : s }, xt = function () { function s() { if (on(this, s), this.__state = da.apply(this, arguments), this.__state === !1) throw new Error("Failed to interpret color arguments"); this.__state.a = this.__state.a || 1 } return an(s, [{ key: "toString", value: function () { return Fi(this) } }, { key: "toHexString", value: function () { return Fi(this, !0) } }, { key: "toOriginal", value: function () { return this.__state.conversion.write(this) } }]), s }(); function Va(s, e, t) { Object.defineProperty(s, e, { get: function () { return this.__state.space === "RGB" ? this.__state[e] : (xt.recalculateRGB(this, e, t), this.__state[e]) }, set: function (i) { this.__state.space !== "RGB" && (xt.recalculateRGB(this, e, t), this.__state.space = "RGB"), this.__state[e] = i } }) } function Ga(s, e) { Object.defineProperty(s, e, { get: function () { return this.__state.space === "HSV" ? this.__state[e] : (xt.recalculateHSV(this), this.__state[e]) }, set: function (n) { this.__state.space !== "HSV" && (xt.recalculateHSV(this), this.__state.space = "HSV"), this.__state[e] = n } }) } xt.recalculateRGB = function (s, e, t) { if (s.__state.space === "HEX") s.__state[e] = Cr.component_from_hex(s.__state.hex, t); else if (s.__state.space === "HSV") j.extend(s.__state, Cr.hsv_to_rgb(s.__state.h, s.__state.s, s.__state.v)); else throw new Error("Corrupted color state") }; xt.recalculateHSV = function (s) { var e = Cr.rgb_to_hsv(s.r, s.g, s.b); j.extend(s.__state, { s: e.s, v: e.v }), j.isNaN(e.h) ? j.isUndefined(s.__state.h) && (s.__state.h = 0) : s.__state.h = e.h }; xt.COMPONENTS = ["r", "g", "b", "h", "s", "v", "hex", "a"]; Va(xt.prototype, "r", 2); Va(xt.prototype, "g", 1); Va(xt.prototype, "b", 0); Ga(xt.prototype, "h"); Ga(xt.prototype, "s"); Ga(xt.prototype, "v"); Object.defineProperty(xt.prototype, "a", { get: function () { return this.__state.a }, set: function (e) { this.__state.a = e } }); Object.defineProperty(xt.prototype, "hex", { get: function () { return this.__state.space !== "HEX" && (this.__state.hex = Cr.rgb_to_hex(this.r, this.g, this.b), this.__state.space = "HEX"), this.__state.hex }, set: function (e) { this.__state.space = "HEX", this.__state.hex = e } }); var di = function () { function s(e, t) { on(this, s), this.initialValue = e[t], this.domElement = document.createElement("div"), this.object = e, this.property = t, this.__onChange = void 0, this.__onFinishChange = void 0 } return an(s, [{ key: "onChange", value: function (t) { return this.__onChange = t, this } }, { key: "onFinishChange", value: function (t) { return this.__onFinishChange = t, this } }, { key: "setValue", value: function (t) { return this.object[this.property] = t, this.__onChange && this.__onChange.call(this, t), this.updateDisplay(), this } }, { key: "getValue", value: function () { return this.object[this.property] } }, { key: "updateDisplay", value: function () { return this } }, { key: "isModified", value: function () { return this.initialValue !== this.getValue() } }]), s }(), d0 = { HTMLEvents: ["change"], MouseEvents: ["click", "mousemove", "mousedown", "mouseup", "mouseover"], KeyboardEvents: ["keydown"] }, Vh = {}; j.each(d0, function (s, e) { j.each(s, function (t) { Vh[t] = e }) }); var f0 = /(\d+(\.\d+)?)px/; function cn(s) { if (s === "0" || j.isUndefined(s)) return 0; var e = s.match(f0); return j.isNull(e) ? 0 : parseFloat(e[1]) } var O = { makeSelectable: function (e, t) { e === void 0 || e.style === void 0 || (e.onselectstart = t ? function () { return !1 } : function () { }, e.style.MozUserSelect = t ? "auto" : "none", e.style.KhtmlUserSelect = t ? "auto" : "none", e.unselectable = t ? "on" : "off") }, makeFullscreen: function (e, t, n) { var i = n, r = t; j.isUndefined(r) && (r = !0), j.isUndefined(i) && (i = !0), e.style.position = "absolute", r && (e.style.left = 0, e.style.right = 0), i && (e.style.top = 0, e.style.bottom = 0) }, fakeEvent: function (e, t, n, i) { var r = n || {}, o = Vh[t]; if (!o) throw new Error("Event type " + t + " not supported."); var a = document.createEvent(o); switch (o) { case "MouseEvents": { var l = r.x || r.clientX || 0, c = r.y || r.clientY || 0; a.initMouseEvent(t, r.bubbles || !1, r.cancelable || !0, window, r.clickCount || 1, 0, 0, l, c, !1, !1, !1, !1, 0, null); break } case "KeyboardEvents": { var h = a.initKeyboardEvent || a.initKeyEvent; j.defaults(r, { cancelable: !0, ctrlKey: !1, altKey: !1, shiftKey: !1, metaKey: !1, keyCode: void 0, charCode: void 0 }), h(t, r.bubbles || !1, r.cancelable, window, r.ctrlKey, r.altKey, r.shiftKey, r.metaKey, r.keyCode, r.charCode); break } default: { a.initEvent(t, r.bubbles || !1, r.cancelable || !0); break } }j.defaults(a, i), e.dispatchEvent(a) }, bind: function (e, t, n, i) { var r = i || !1; return e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && e.attachEvent("on" + t, n), O }, unbind: function (e, t, n, i) { var r = i || !1; return e.removeEventListener ? e.removeEventListener(t, n, r) : e.detachEvent && e.detachEvent("on" + t, n), O }, addClass: function (e, t) { if (e.className === void 0) e.className = t; else if (e.className !== t) { var n = e.className.split(/ +/); n.indexOf(t) === -1 && (n.push(t), e.className = n.join(" ").replace(/^\s+/, "").replace(/\s+$/, "")) } return O }, removeClass: function (e, t) { if (t) if (e.className === t) e.removeAttribute("class"); else { var n = e.className.split(/ +/), i = n.indexOf(t); i !== -1 && (n.splice(i, 1), e.className = n.join(" ")) } else e.className = void 0; return O }, hasClass: function (e, t) { return new RegExp("(?:^|\\s+)" + t + "(?:\\s+|$)").test(e.className) || !1 }, getWidth: function (e) { var t = getComputedStyle(e); return cn(t["border-left-width"]) + cn(t["border-right-width"]) + cn(t["padding-left"]) + cn(t["padding-right"]) + cn(t.width) }, getHeight: function (e) { var t = getComputedStyle(e); return cn(t["border-top-width"]) + cn(t["border-bottom-width"]) + cn(t["padding-top"]) + cn(t["padding-bottom"]) + cn(t.height) }, getOffset: function (e) { var t = e, n = { left: 0, top: 0 }; if (t.offsetParent) do n.left += t.offsetLeft, n.top += t.offsetTop, t = t.offsetParent; while (t); return n }, isActive: function (e) { return e === document.activeElement && (e.type || e.href) } }, Gh = function (s) { $n(e, s); function e(t, n) { on(this, e); var i = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i; i.__prev = i.getValue(), i.__checkbox = document.createElement("input"), i.__checkbox.setAttribute("type", "checkbox"); function o() { r.setValue(!r.__prev) } return O.bind(i.__checkbox, "change", o, !1), i.domElement.appendChild(i.__checkbox), i.updateDisplay(), i } return an(e, [{ key: "setValue", value: function (n) { var i = Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), this.__prev = this.getValue(), i } }, { key: "updateDisplay", value: function () { return this.getValue() === !0 ? (this.__checkbox.setAttribute("checked", "checked"), this.__checkbox.checked = !0, this.__prev = !0) : (this.__checkbox.checked = !1, this.__prev = !1), Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this) } }]), e }(di), p0 = function (s) { $n(e, s); function e(t, n, i) { on(this, e); var r = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = i, a = r; if (r.__select = document.createElement("select"), j.isArray(o)) { var l = {}; j.each(o, function (c) { l[c] = c }), o = l } return j.each(o, function (c, h) { var u = document.createElement("option"); u.innerHTML = h, u.setAttribute("value", c), a.__select.appendChild(u) }), r.updateDisplay(), O.bind(r.__select, "change", function () { var c = this.options[this.selectedIndex].value; a.setValue(c) }), r.domElement.appendChild(r.__select), r } return an(e, [{ key: "setValue", value: function (n) { var i = Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, n); return this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()), i } }, { key: "updateDisplay", value: function () { return O.isActive(this.__select) ? this : (this.__select.value = this.getValue(), Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this)) } }]), e }(di), m0 = function (s) { $n(e, s); function e(t, n) { on(this, e); var i = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), r = i; function o() { r.setValue(r.__input.value) } function a() { r.__onFinishChange && r.__onFinishChange.call(r, r.getValue()) } return i.__input = document.createElement("input"), i.__input.setAttribute("type", "text"), O.bind(i.__input, "keyup", o), O.bind(i.__input, "change", o), O.bind(i.__input, "blur", a), O.bind(i.__input, "keydown", function (l) { l.keyCode === 13 && this.blur() }), i.updateDisplay(), i.domElement.appendChild(i.__input), i } return an(e, [{ key: "updateDisplay", value: function () { return O.isActive(this.__input) || (this.__input.value = this.getValue()), Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this) } }]), e }(di); function Ic(s) { var e = s.toString(); return e.indexOf(".") > -1 ? e.length - e.indexOf(".") - 1 : 0 } var Wh = function (s) { $n(e, s); function e(t, n, i) { on(this, e); var r = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = i || {}; return r.__min = o.min, r.__max = o.max, r.__step = o.step, j.isUndefined(r.__step) ? r.initialValue === 0 ? r.__impliedStep = 1 : r.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(r.initialValue)) / Math.LN10)) / 10 : r.__impliedStep = r.__step, r.__precision = Ic(r.__impliedStep), r } return an(e, [{ key: "setValue", value: function (n) { var i = n; return this.__min !== void 0 && i < this.__min ? i = this.__min : this.__max !== void 0 && i > this.__max && (i = this.__max), this.__step !== void 0 && i % this.__step !== 0 && (i = Math.round(i / this.__step) * this.__step), Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "setValue", this).call(this, i) } }, { key: "min", value: function (n) { return this.__min = n, this } }, { key: "max", value: function (n) { return this.__max = n, this } }, { key: "step", value: function (n) { return this.__step = n, this.__impliedStep = n, this.__precision = Ic(n), this } }]), e }(di); function g0(s, e) { var t = Math.pow(10, e); return Math.round(s * t) / t } var Pr = function (s) { $n(e, s); function e(t, n, i) { on(this, e); var r = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, i)); r.__truncationSuspended = !1; var o = r, a = void 0; function l() { var g = parseFloat(o.__input.value); j.isNaN(g) || o.setValue(g) } function c() { o.__onFinishChange && o.__onFinishChange.call(o, o.getValue()) } function h() { c() } function u(g) { var _ = a - g.clientY; o.setValue(o.getValue() + _ * o.__impliedStep), a = g.clientY } function d() { O.unbind(window, "mousemove", u), O.unbind(window, "mouseup", d), c() } function p(g) { O.bind(window, "mousemove", u), O.bind(window, "mouseup", d), a = g.clientY } return r.__input = document.createElement("input"), r.__input.setAttribute("type", "text"), O.bind(r.__input, "change", l), O.bind(r.__input, "blur", h), O.bind(r.__input, "mousedown", p), O.bind(r.__input, "keydown", function (g) { g.keyCode === 13 && (o.__truncationSuspended = !0, this.blur(), o.__truncationSuspended = !1, c()) }), r.updateDisplay(), r.domElement.appendChild(r.__input), r } return an(e, [{ key: "updateDisplay", value: function () { return this.__input.value = this.__truncationSuspended ? this.getValue() : g0(this.getValue(), this.__precision), Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this) } }]), e }(Wh); function Nc(s, e, t, n, i) { return n + (i - n) * ((s - e) / (t - e)) } var fa = function (s) { $n(e, s); function e(t, n, i, r, o) { on(this, e); var a = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n, { min: i, max: r, step: o })), l = a; a.__background = document.createElement("div"), a.__foreground = document.createElement("div"), O.bind(a.__background, "mousedown", c), O.bind(a.__background, "touchstart", d), O.addClass(a.__background, "slider"), O.addClass(a.__foreground, "slider-fg"); function c(_) { document.activeElement.blur(), O.bind(window, "mousemove", h), O.bind(window, "mouseup", u), h(_) } function h(_) { _.preventDefault(); var m = l.__background.getBoundingClientRect(); return l.setValue(Nc(_.clientX, m.left, m.right, l.__min, l.__max)), !1 } function u() { O.unbind(window, "mousemove", h), O.unbind(window, "mouseup", u), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue()) } function d(_) { _.touches.length === 1 && (O.bind(window, "touchmove", p), O.bind(window, "touchend", g), p(_)) } function p(_) { var m = _.touches[0].clientX, f = l.__background.getBoundingClientRect(); l.setValue(Nc(m, f.left, f.right, l.__min, l.__max)) } function g() { O.unbind(window, "touchmove", p), O.unbind(window, "touchend", g), l.__onFinishChange && l.__onFinishChange.call(l, l.getValue()) } return a.updateDisplay(), a.__background.appendChild(a.__foreground), a.domElement.appendChild(a.__background), a } return an(e, [{ key: "updateDisplay", value: function () { var n = (this.getValue() - this.__min) / (this.__max - this.__min); return this.__foreground.style.width = n * 100 + "%", Kn(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "updateDisplay", this).call(this) } }]), e }(Wh), Xh = function (s) { $n(e, s); function e(t, n, i) { on(this, e); var r = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)), o = r; return r.__button = document.createElement("div"), r.__button.innerHTML = i === void 0 ? "Fire" : i, O.bind(r.__button, "click", function (a) { return a.preventDefault(), o.fire(), !1 }), O.addClass(r.__button, "button"), r.domElement.appendChild(r.__button), r } return an(e, [{ key: "fire", value: function () { this.__onChange && this.__onChange.call(this), this.getValue().call(this.object), this.__onFinishChange && this.__onFinishChange.call(this, this.getValue()) } }]), e }(di), pa = function (s) { $n(e, s); function e(t, n) { on(this, e); var i = Zn(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n)); i.__color = new xt(i.getValue()), i.__temp = new xt(0); var r = i; i.domElement = document.createElement("div"), O.makeSelectable(i.domElement, !1), i.__selector = document.createElement("div"), i.__selector.className = "selector", i.__saturation_field = document.createElement("div"), i.__saturation_field.className = "saturation-field", i.__field_knob = document.createElement("div"), i.__field_knob.className = "field-knob", i.__field_knob_border = "2px solid ", i.__hue_knob = document.createElement("div"), i.__hue_knob.className = "hue-knob", i.__hue_field = document.createElement("div"), i.__hue_field.className = "hue-field", i.__input = document.createElement("input"), i.__input.type = "text", i.__input_textShadow = "0 1px 1px ", O.bind(i.__input, "keydown", function (_) { _.keyCode === 13 && u.call(this) }), O.bind(i.__input, "blur", u), O.bind(i.__selector, "mousedown", function () { O.addClass(this, "drag").bind(window, "mouseup", function () { O.removeClass(r.__selector, "drag") }) }), O.bind(i.__selector, "touchstart", function () { O.addClass(this, "drag").bind(window, "touchend", function () { O.removeClass(r.__selector, "drag") }) }); var o = document.createElement("div"); j.extend(i.__selector.style, { width: "122px", height: "102px", padding: "3px", backgroundColor: "#222", boxShadow: "0px 1px 3px rgba(0,0,0,0.3)" }), j.extend(i.__field_knob.style, { position: "absolute", width: "12px", height: "12px", border: i.__field_knob_border + (i.__color.v < .5 ? "#fff" : "#000"), boxShadow: "0px 1px 3px rgba(0,0,0,0.5)", borderRadius: "12px", zIndex: 1 }), j.extend(i.__hue_knob.style, { position: "absolute", width: "15px", height: "2px", borderRight: "4px solid #fff", zIndex: 1 }), j.extend(i.__saturation_field.style, { width: "100px", height: "100px", border: "1px solid #555", marginRight: "3px", display: "inline-block", cursor: "pointer" }), j.extend(o.style, { width: "100%", height: "100%", background: "none" }), Uc(o, "top", "rgba(0,0,0,0)", "#000"), j.extend(i.__hue_field.style, { width: "15px", height: "100px", border: "1px solid #555", cursor: "ns-resize", position: "absolute", top: "3px", right: "3px" }), v0(i.__hue_field), j.extend(i.__input.style, { outline: "none", textAlign: "center", color: "#fff", border: 0, fontWeight: "bold", textShadow: i.__input_textShadow + "rgba(0,0,0,0.7)" }), O.bind(i.__saturation_field, "mousedown", a), O.bind(i.__saturation_field, "touchstart", a), O.bind(i.__field_knob, "mousedown", a), O.bind(i.__field_knob, "touchstart", a), O.bind(i.__hue_field, "mousedown", l), O.bind(i.__hue_field, "touchstart", l); function a(_) { p(_), O.bind(window, "mousemove", p), O.bind(window, "touchmove", p), O.bind(window, "mouseup", c), O.bind(window, "touchend", c) } function l(_) { g(_), O.bind(window, "mousemove", g), O.bind(window, "touchmove", g), O.bind(window, "mouseup", h), O.bind(window, "touchend", h) } function c() { O.unbind(window, "mousemove", p), O.unbind(window, "touchmove", p), O.unbind(window, "mouseup", c), O.unbind(window, "touchend", c), d() } function h() { O.unbind(window, "mousemove", g), O.unbind(window, "touchmove", g), O.unbind(window, "mouseup", h), O.unbind(window, "touchend", h), d() } function u() { var _ = da(this.value); _ !== !1 ? (r.__color.__state = _, r.setValue(r.__color.toOriginal())) : this.value = r.__color.toString() } function d() { r.__onFinishChange && r.__onFinishChange.call(r, r.__color.toOriginal()) } i.__saturation_field.appendChild(o), i.__selector.appendChild(i.__field_knob), i.__selector.appendChild(i.__saturation_field), i.__selector.appendChild(i.__hue_field), i.__hue_field.appendChild(i.__hue_knob), i.domElement.appendChild(i.__input), i.domElement.appendChild(i.__selector), i.updateDisplay(); function p(_) { _.type.indexOf("touch") === -1 && _.preventDefault(); var m = r.__saturation_field.getBoundingClientRect(), f = _.touches && _.touches[0] || _, y = f.clientX, v = f.clientY, b = (y - m.left) / (m.right - m.left), I = 1 - (v - m.top) / (m.bottom - m.top); return I > 1 ? I = 1 : I < 0 && (I = 0), b > 1 ? b = 1 : b < 0 && (b = 0), r.__color.v = I, r.__color.s = b, r.setValue(r.__color.toOriginal()), !1 } function g(_) { _.type.indexOf("touch") === -1 && _.preventDefault(); var m = r.__hue_field.getBoundingClientRect(), f = _.touches && _.touches[0] || _, y = f.clientY, v = 1 - (y - m.top) / (m.bottom - m.top); return v > 1 ? v = 1 : v < 0 && (v = 0), r.__color.h = v * 360, r.setValue(r.__color.toOriginal()), !1 } return i } return an(e, [{ key: "updateDisplay", value: function () { var n = da(this.getValue()); if (n !== !1) { var i = !1; j.each(xt.COMPONENTS, function (a) { if (!j.isUndefined(n[a]) && !j.isUndefined(this.__color.__state[a]) && n[a] !== this.__color.__state[a]) return i = !0, {} }, this), i && j.extend(this.__color.__state, n) } j.extend(this.__temp.__state, this.__color.__state), this.__temp.a = 1; var r = this.__color.v < .5 || this.__color.s > .5 ? 255 : 0, o = 255 - r; j.extend(this.__field_knob.style, { marginLeft: 100 * this.__color.s - 7 + "px", marginTop: 100 * (1 - this.__color.v) - 7 + "px", backgroundColor: this.__temp.toHexString(), border: this.__field_knob_border + "rgb(" + r + "," + r + "," + r + ")" }), this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + "px", this.__temp.s = 1, this.__temp.v = 1, Uc(this.__saturation_field, "left", "#fff", this.__temp.toHexString()), this.__input.value = this.__color.toString(), j.extend(this.__input.style, { backgroundColor: this.__color.toHexString(), color: "rgb(" + r + "," + r + "," + r + ")", textShadow: this.__input_textShadow + "rgba(" + o + "," + o + "," + o + ",.7)" }) } }]), e }(di), _0 = ["-moz-", "-o-", "-webkit-", "-ms-", ""]; function Uc(s, e, t, n) { s.style.background = "", j.each(_0, function (i) { s.style.cssText += "background: " + i + "linear-gradient(" + e + ", " + t + " 0%, " + n + " 100%); " }) } function v0(s) { s.style.background = "", s.style.cssText += "background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);", s.style.cssText += "background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s.style.cssText += "background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s.style.cssText += "background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);", s.style.cssText += "background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);" } var x0 = { load: function (e, t) { var n = t || document, i = n.createElement("link"); i.type = "text/css", i.rel = "stylesheet", i.href = e, n.getElementsByTagName("head")[0].appendChild(i) }, inject: function (e, t) { var n = t || document, i = document.createElement("style"); i.type = "text/css", i.innerHTML = e; var r = n.getElementsByTagName("head")[0]; try { r.appendChild(i) } catch { } } }, y0 = `<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`, M0 = function (e, t) { var n = e[t]; return j.isArray(arguments[2]) || j.isObject(arguments[2]) ? new p0(e, t, arguments[2]) : j.isNumber(n) ? j.isNumber(arguments[2]) && j.isNumber(arguments[3]) ? j.isNumber(arguments[4]) ? new fa(e, t, arguments[2], arguments[3], arguments[4]) : new fa(e, t, arguments[2], arguments[3]) : j.isNumber(arguments[4]) ? new Pr(e, t, { min: arguments[2], max: arguments[3], step: arguments[4] }) : new Pr(e, t, { min: arguments[2], max: arguments[3] }) : j.isString(n) ? new m0(e, t) : j.isFunction(n) ? new Xh(e, t, "") : j.isBoolean(n) ? new Gh(e, t) : null }; function S0(s) { setTimeout(s, 1e3 / 60) } var b0 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || S0, E0 = function () { function s() { on(this, s), this.backgroundElement = document.createElement("div"), j.extend(this.backgroundElement.style, { backgroundColor: "rgba(0,0,0,0.8)", top: 0, left: 0, display: "none", zIndex: "1000", opacity: 0, WebkitTransition: "opacity 0.2s linear", transition: "opacity 0.2s linear" }), O.makeFullscreen(this.backgroundElement), this.backgroundElement.style.position = "fixed", this.domElement = document.createElement("div"), j.extend(this.domElement.style, { position: "fixed", display: "none", zIndex: "1001", opacity: 0, WebkitTransition: "-webkit-transform 0.2s ease-out, opacity 0.2s linear", transition: "transform 0.2s ease-out, opacity 0.2s linear" }), document.body.appendChild(this.backgroundElement), document.body.appendChild(this.domElement); var e = this; O.bind(this.backgroundElement, "click", function () { e.hide() }) } return an(s, [{ key: "show", value: function () { var t = this; this.backgroundElement.style.display = "block", this.domElement.style.display = "block", this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)", this.layout(), j.defer(function () { t.backgroundElement.style.opacity = 1, t.domElement.style.opacity = 1, t.domElement.style.webkitTransform = "scale(1)" }) } }, { key: "hide", value: function () { var t = this, n = function i() { t.domElement.style.display = "none", t.backgroundElement.style.display = "none", O.unbind(t.domElement, "webkitTransitionEnd", i), O.unbind(t.domElement, "transitionend", i), O.unbind(t.domElement, "oTransitionEnd", i) }; O.bind(this.domElement, "webkitTransitionEnd", n), O.bind(this.domElement, "transitionend", n), O.bind(this.domElement, "oTransitionEnd", n), this.backgroundElement.style.opacity = 0, this.domElement.style.opacity = 0, this.domElement.style.webkitTransform = "scale(1.1)" } }, { key: "layout", value: function () { this.domElement.style.left = window.innerWidth / 2 - O.getWidth(this.domElement) / 2 + "px", this.domElement.style.top = window.innerHeight / 2 - O.getHeight(this.domElement) / 2 + "px" } }]), s }(), T0 = c0(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`); x0.inject(T0); var Oc = "dg", Fc = 72, Bc = 20, Ls = "Default", Ms = function () { try { return !!window.localStorage } catch { return !1 } }(), Ts = void 0, zc = !0, Ii = void 0, Eo = !1, jh = [], nt = function s(e) { var t = this, n = e || {}; this.domElement = document.createElement("div"), this.__ul = document.createElement("ul"), this.domElement.appendChild(this.__ul), O.addClass(this.domElement, Oc), this.__folders = {}, this.__controllers = [], this.__rememberedObjects = [], this.__rememberedObjectIndecesToControllers = [], this.__listening = [], n = j.defaults(n, { closeOnTop: !1, autoPlace: !0, width: s.DEFAULT_WIDTH }), n = j.defaults(n, { resizable: n.autoPlace, hideable: n.autoPlace }), j.isUndefined(n.load) ? n.load = { preset: Ls } : n.preset && (n.load.preset = n.preset), j.isUndefined(n.parent) && n.hideable && jh.push(this), n.resizable = j.isUndefined(n.parent) && n.resizable, n.autoPlace && j.isUndefined(n.scrollable) && (n.scrollable = !0); var i = Ms && localStorage.getItem(Ni(this, "isLocal")) === "true", r = void 0, o = void 0; if (Object.defineProperties(this, { parent: { get: function () { return n.parent } }, scrollable: { get: function () { return n.scrollable } }, autoPlace: { get: function () { return n.autoPlace } }, closeOnTop: { get: function () { return n.closeOnTop } }, preset: { get: function () { return t.parent ? t.getRoot().preset : n.load.preset }, set: function (d) { t.parent ? t.getRoot().preset = d : n.load.preset = d, C0(this), t.revert() } }, width: { get: function () { return n.width }, set: function (d) { n.width = d, _a(t, d) } }, name: { get: function () { return n.name }, set: function (d) { n.name = d, o && (o.innerHTML = n.name) } }, closed: { get: function () { return n.closed }, set: function (d) { n.closed = d, n.closed ? O.addClass(t.__ul, s.CLASS_CLOSED) : O.removeClass(t.__ul, s.CLASS_CLOSED), this.onResize(), t.__closeButton && (t.__closeButton.innerHTML = d ? s.TEXT_OPEN : s.TEXT_CLOSED) } }, load: { get: function () { return n.load } }, useLocalStorage: { get: function () { return i }, set: function (d) { Ms && (i = d, d ? O.bind(window, "unload", r) : O.unbind(window, "unload", r), localStorage.setItem(Ni(t, "isLocal"), d)) } } }), j.isUndefined(n.parent)) { if (this.closed = n.closed || !1, O.addClass(this.domElement, s.CLASS_MAIN), O.makeSelectable(this.domElement, !1), Ms && i) { t.useLocalStorage = !0; var a = localStorage.getItem(Ni(this, "gui")); a && (n.load = JSON.parse(a)) } this.__closeButton = document.createElement("div"), this.__closeButton.innerHTML = s.TEXT_CLOSED, O.addClass(this.__closeButton, s.CLASS_CLOSE_BUTTON), n.closeOnTop ? (O.addClass(this.__closeButton, s.CLASS_CLOSE_TOP), this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0])) : (O.addClass(this.__closeButton, s.CLASS_CLOSE_BOTTOM), this.domElement.appendChild(this.__closeButton)), O.bind(this.__closeButton, "click", function () { t.closed = !t.closed }) } else { n.closed === void 0 && (n.closed = !0); var l = document.createTextNode(n.name); O.addClass(l, "controller-name"), o = Wa(t, l); var c = function (d) { return d.preventDefault(), t.closed = !t.closed, !1 }; O.addClass(this.__ul, s.CLASS_CLOSED), O.addClass(o, "title"), O.bind(o, "click", c), n.closed || (this.closed = !1) } n.autoPlace && (j.isUndefined(n.parent) && (zc && (Ii = document.createElement("div"), O.addClass(Ii, Oc), O.addClass(Ii, s.CLASS_AUTO_PLACE_CONTAINER), document.body.appendChild(Ii), zc = !1), Ii.appendChild(this.domElement), O.addClass(this.domElement, s.CLASS_AUTO_PLACE)), this.parent || _a(t, n.width)), this.__resizeHandler = function () { t.onResizeDebounced() }, O.bind(window, "resize", this.__resizeHandler), O.bind(this.__ul, "webkitTransitionEnd", this.__resizeHandler), O.bind(this.__ul, "transitionend", this.__resizeHandler), O.bind(this.__ul, "oTransitionEnd", this.__resizeHandler), this.onResize(), n.resizable && R0(this), r = function () { Ms && localStorage.getItem(Ni(t, "isLocal")) === "true" && localStorage.setItem(Ni(t, "gui"), JSON.stringify(t.getSaveObject())) }, this.saveToLocalStorageIfPossible = r; function h() { var u = t.getRoot(); u.width += 1, j.defer(function () { u.width -= 1 }) } n.parent || h() }; nt.toggleHide = function () { Eo = !Eo, j.each(jh, function (s) { s.domElement.style.display = Eo ? "none" : "" }) }; nt.CLASS_AUTO_PLACE = "a"; nt.CLASS_AUTO_PLACE_CONTAINER = "ac"; nt.CLASS_MAIN = "main"; nt.CLASS_CONTROLLER_ROW = "cr"; nt.CLASS_TOO_TALL = "taller-than-window"; nt.CLASS_CLOSED = "closed"; nt.CLASS_CLOSE_BUTTON = "close-button"; nt.CLASS_CLOSE_TOP = "close-top"; nt.CLASS_CLOSE_BOTTOM = "close-bottom"; nt.CLASS_DRAG = "drag"; nt.DEFAULT_WIDTH = 245; nt.TEXT_CLOSED = "Close Controls"; nt.TEXT_OPEN = "Open Controls"; nt._keydownHandler = function (s) { document.activeElement.type !== "text" && (s.which === Fc || s.keyCode === Fc) && nt.toggleHide() }; O.bind(window, "keydown", nt._keydownHandler, !1); j.extend(nt.prototype, { add: function (e, t) { return ws(this, e, t, { factoryArgs: Array.prototype.slice.call(arguments, 2) }) }, addColor: function (e, t) { return ws(this, e, t, { color: !0 }) }, remove: function (e) { this.__ul.removeChild(e.__li), this.__controllers.splice(this.__controllers.indexOf(e), 1); var t = this; j.defer(function () { t.onResize() }) }, destroy: function () { if (this.parent) throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead."); this.autoPlace && Ii.removeChild(this.domElement); var e = this; j.each(this.__folders, function (t) { e.removeFolder(t) }), O.unbind(window, "keydown", nt._keydownHandler, !1), kc(this) }, addFolder: function (e) { if (this.__folders[e] !== void 0) throw new Error('You already have a folder in this GUI by the name "' + e + '"'); var t = { name: e, parent: this }; t.autoPlace = this.autoPlace, this.load && this.load.folders && this.load.folders[e] && (t.closed = this.load.folders[e].closed, t.load = this.load.folders[e]); var n = new nt(t); this.__folders[e] = n; var i = Wa(this, n.domElement); return O.addClass(i, "folder"), n }, removeFolder: function (e) { this.__ul.removeChild(e.domElement.parentElement), delete this.__folders[e.name], this.load && this.load.folders && this.load.folders[e.name] && delete this.load.folders[e.name], kc(e); var t = this; j.each(e.__folders, function (n) { e.removeFolder(n) }), j.defer(function () { t.onResize() }) }, open: function () { this.closed = !1 }, close: function () { this.closed = !0 }, hide: function () { this.domElement.style.display = "none" }, show: function () { this.domElement.style.display = "" }, onResize: function () { var e = this.getRoot(); if (e.scrollable) { var t = O.getOffset(e.__ul).top, n = 0; j.each(e.__ul.childNodes, function (i) { e.autoPlace && i === e.__save_row || (n += O.getHeight(i)) }), window.innerHeight - t - Bc < n ? (O.addClass(e.domElement, nt.CLASS_TOO_TALL), e.__ul.style.height = window.innerHeight - t - Bc + "px") : (O.removeClass(e.domElement, nt.CLASS_TOO_TALL), e.__ul.style.height = "auto") } e.__resize_handle && j.defer(function () { e.__resize_handle.style.height = e.__ul.offsetHeight + "px" }), e.__closeButton && (e.__closeButton.style.width = e.width + "px") }, onResizeDebounced: j.debounce(function () { this.onResize() }, 50), remember: function () { if (j.isUndefined(Ts) && (Ts = new E0, Ts.domElement.innerHTML = y0), this.parent) throw new Error("You can only call remember on a top level GUI."); var e = this; j.each(Array.prototype.slice.call(arguments), function (t) { e.__rememberedObjects.length === 0 && A0(e), e.__rememberedObjects.indexOf(t) === -1 && e.__rememberedObjects.push(t) }), this.autoPlace && _a(this, this.width) }, getRoot: function () { for (var e = this; e.parent;)e = e.parent; return e }, getSaveObject: function () { var e = this.load; return e.closed = this.closed, this.__rememberedObjects.length > 0 && (e.preset = this.preset, e.remembered || (e.remembered = {}), e.remembered[this.preset] = dr(this)), e.folders = {}, j.each(this.__folders, function (t, n) { e.folders[n] = t.getSaveObject() }), e }, save: function () { this.load.remembered || (this.load.remembered = {}), this.load.remembered[this.preset] = dr(this), ma(this, !1), this.saveToLocalStorageIfPossible() }, saveAs: function (e) { this.load.remembered || (this.load.remembered = {}, this.load.remembered[Ls] = dr(this, !0)), this.load.remembered[e] = dr(this), this.preset = e, ga(this, e, !0), this.saveToLocalStorageIfPossible() }, revert: function (e) { j.each(this.__controllers, function (t) { this.getRoot().load.remembered ? Yh(e || this.getRoot(), t) : t.setValue(t.initialValue), t.__onFinishChange && t.__onFinishChange.call(t, t.getValue()) }, this), j.each(this.__folders, function (t) { t.revert(t) }), e || ma(this.getRoot(), !1) }, listen: function (e) { var t = this.__listening.length === 0; this.__listening.push(e), t && qh(this.__listening) }, updateDisplay: function () { j.each(this.__controllers, function (e) { e.updateDisplay() }), j.each(this.__folders, function (e) { e.updateDisplay() }) } }); function Wa(s, e, t) { var n = document.createElement("li"); return e && n.appendChild(e), t ? s.__ul.insertBefore(n, t) : s.__ul.appendChild(n), s.onResize(), n } function kc(s) { O.unbind(window, "resize", s.__resizeHandler), s.saveToLocalStorageIfPossible && O.unbind(window, "unload", s.saveToLocalStorageIfPossible) } function ma(s, e) { var t = s.__preset_select[s.__preset_select.selectedIndex]; e ? t.innerHTML = t.value + "*" : t.innerHTML = t.value } function w0(s, e, t) { if (t.__li = e, t.__gui = s, j.extend(t, { options: function (o) { if (arguments.length > 1) { var a = t.__li.nextElementSibling; return t.remove(), ws(s, t.object, t.property, { before: a, factoryArgs: [j.toArray(arguments)] }) } if (j.isArray(o) || j.isObject(o)) { var l = t.__li.nextElementSibling; return t.remove(), ws(s, t.object, t.property, { before: l, factoryArgs: [o] }) } }, name: function (o) { return t.__li.firstElementChild.firstElementChild.innerHTML = o, t }, listen: function () { return t.__gui.listen(t), t }, remove: function () { return t.__gui.remove(t), t } }), t instanceof fa) { var n = new Pr(t.object, t.property, { min: t.__min, max: t.__max, step: t.__step }); j.each(["updateDisplay", "onChange", "onFinishChange", "step", "min", "max"], function (r) { var o = t[r], a = n[r]; t[r] = n[r] = function () { var l = Array.prototype.slice.call(arguments); return a.apply(n, l), o.apply(t, l) } }), O.addClass(e, "has-slider"), t.domElement.insertBefore(n.domElement, t.domElement.firstElementChild) } else if (t instanceof Pr) { var i = function (o) { if (j.isNumber(t.__min) && j.isNumber(t.__max)) { var a = t.__li.firstElementChild.firstElementChild.innerHTML, l = t.__gui.__listening.indexOf(t) > -1; t.remove(); var c = ws(s, t.object, t.property, { before: t.__li.nextElementSibling, factoryArgs: [t.__min, t.__max, t.__step] }); return c.name(a), l && c.listen(), c } return o }; t.min = j.compose(i, t.min), t.max = j.compose(i, t.max) } else t instanceof Gh ? (O.bind(e, "click", function () { O.fakeEvent(t.__checkbox, "click") }), O.bind(t.__checkbox, "click", function (r) { r.stopPropagation() })) : t instanceof Xh ? (O.bind(e, "click", function () { O.fakeEvent(t.__button, "click") }), O.bind(e, "mouseover", function () { O.addClass(t.__button, "hover") }), O.bind(e, "mouseout", function () { O.removeClass(t.__button, "hover") })) : t instanceof pa && (O.addClass(e, "color"), t.updateDisplay = j.compose(function (r) { return e.style.borderLeftColor = t.__color.toString(), r }, t.updateDisplay), t.updateDisplay()); t.setValue = j.compose(function (r) { return s.getRoot().__preset_select && t.isModified() && ma(s.getRoot(), !0), r }, t.setValue) } function Yh(s, e) { var t = s.getRoot(), n = t.__rememberedObjects.indexOf(e.object); if (n !== -1) { var i = t.__rememberedObjectIndecesToControllers[n]; if (i === void 0 && (i = {}, t.__rememberedObjectIndecesToControllers[n] = i), i[e.property] = e, t.load && t.load.remembered) { var r = t.load.remembered, o = void 0; if (r[s.preset]) o = r[s.preset]; else if (r[Ls]) o = r[Ls]; else return; if (o[n] && o[n][e.property] !== void 0) { var a = o[n][e.property]; e.initialValue = a, e.setValue(a) } } } } function ws(s, e, t, n) { if (e[t] === void 0) throw new Error('Object "' + e + '" has no property "' + t + '"'); var i = void 0; if (n.color) i = new pa(e, t); else { var r = [e, t].concat(n.factoryArgs); i = M0.apply(s, r) } n.before instanceof di && (n.before = n.before.__li), Yh(s, i), O.addClass(i.domElement, "c"); var o = document.createElement("span"); O.addClass(o, "property-name"), o.innerHTML = i.property; var a = document.createElement("div"); a.appendChild(o), a.appendChild(i.domElement); var l = Wa(s, a, n.before); return O.addClass(l, nt.CLASS_CONTROLLER_ROW), i instanceof pa ? O.addClass(l, "color") : O.addClass(l, u0(i.getValue())), w0(s, l, i), s.__controllers.push(i), i } function Ni(s, e) { return document.location.href + "." + e } function ga(s, e, t) { var n = document.createElement("option"); n.innerHTML = e, n.value = e, s.__preset_select.appendChild(n), t && (s.__preset_select.selectedIndex = s.__preset_select.length - 1) } function Hc(s, e) { e.style.display = s.useLocalStorage ? "block" : "none" } function A0(s) { var e = s.__save_row = document.createElement("li"); O.addClass(s.domElement, "has-save"), s.__ul.insertBefore(e, s.__ul.firstChild), O.addClass(e, "save-row"); var t = document.createElement("span"); t.innerHTML = "&nbsp;", O.addClass(t, "button gears"); var n = document.createElement("span"); n.innerHTML = "Save", O.addClass(n, "button"), O.addClass(n, "save"); var i = document.createElement("span"); i.innerHTML = "New", O.addClass(i, "button"), O.addClass(i, "save-as"); var r = document.createElement("span"); r.innerHTML = "Revert", O.addClass(r, "button"), O.addClass(r, "revert"); var o = s.__preset_select = document.createElement("select"); if (s.load && s.load.remembered ? j.each(s.load.remembered, function (u, d) { ga(s, d, d === s.preset) }) : ga(s, Ls, !1), O.bind(o, "change", function () { for (var u = 0; u < s.__preset_select.length; u++)s.__preset_select[u].innerHTML = s.__preset_select[u].value; s.preset = this.value }), e.appendChild(o), e.appendChild(t), e.appendChild(n), e.appendChild(i), e.appendChild(r), Ms) { var a = document.getElementById("dg-local-explain"), l = document.getElementById("dg-local-storage"), c = document.getElementById("dg-save-locally"); c.style.display = "block", localStorage.getItem(Ni(s, "isLocal")) === "true" && l.setAttribute("checked", "checked"), Hc(s, a), O.bind(l, "change", function () { s.useLocalStorage = !s.useLocalStorage, Hc(s, a) }) } var h = document.getElementById("dg-new-constructor"); O.bind(h, "keydown", function (u) { u.metaKey && (u.which === 67 || u.keyCode === 67) && Ts.hide() }), O.bind(t, "click", function () { h.innerHTML = JSON.stringify(s.getSaveObject(), void 0, 2), Ts.show(), h.focus(), h.select() }), O.bind(n, "click", function () { s.save() }), O.bind(i, "click", function () { var u = prompt("Enter a new preset name."); u && s.saveAs(u) }), O.bind(r, "click", function () { s.revert() }) } function R0(s) { var e = void 0; s.__resize_handle = document.createElement("div"), j.extend(s.__resize_handle.style, { width: "6px", marginLeft: "-3px", height: "200px", cursor: "ew-resize", position: "absolute" }); function t(r) { return r.preventDefault(), s.width += e - r.clientX, s.onResize(), e = r.clientX, !1 } function n() { O.removeClass(s.__closeButton, nt.CLASS_DRAG), O.unbind(window, "mousemove", t), O.unbind(window, "mouseup", n) } function i(r) { return r.preventDefault(), e = r.clientX, O.addClass(s.__closeButton, nt.CLASS_DRAG), O.bind(window, "mousemove", t), O.bind(window, "mouseup", n), !1 } O.bind(s.__resize_handle, "mousedown", i), O.bind(s.__closeButton, "mousedown", i), s.domElement.insertBefore(s.__resize_handle, s.domElement.firstElementChild) } function _a(s, e) { s.domElement.style.width = e + "px", s.__save_row && s.autoPlace && (s.__save_row.style.width = e + "px"), s.__closeButton && (s.__closeButton.style.width = e + "px") } function dr(s, e) { var t = {}; return j.each(s.__rememberedObjects, function (n, i) { var r = {}, o = s.__rememberedObjectIndecesToControllers[i]; j.each(o, function (a, l) { r[l] = e ? a.initialValue : a.getValue() }), t[i] = r }), t } function C0(s) { for (var e = 0; e < s.__preset_select.length; e++)s.__preset_select[e].value === s.preset && (s.__preset_select.selectedIndex = e) } function qh(s) { s.length !== 0 && b0.call(window, function () { qh(s) }), j.each(s, function (e) { e.updateDisplay() }) } var P0 = nt, Kh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}; function $h(s) { return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s } var Zh = { exports: {} }; (function (s, e) { (function (t, n) { s.exports = n() })(Kh, function () { var t = function () { function n(p) { return o.appendChild(p.dom), p } function i(p) { for (var g = 0; g < o.children.length; g++)o.children[g].style.display = g === p ? "block" : "none"; r = p } var r = 0, o = document.createElement("div"); o.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", o.addEventListener("click", function (p) { p.preventDefault(), i(++r % o.children.length) }, !1); var a = (performance || Date).now(), l = a, c = 0, h = n(new t.Panel("FPS", "#0ff", "#002")), u = n(new t.Panel("MS", "#0f0", "#020")); if (self.performance && self.performance.memory) var d = n(new t.Panel("MB", "#f08", "#201")); return i(0), { REVISION: 16, dom: o, addPanel: n, showPanel: i, begin: function () { a = (performance || Date).now() }, end: function () { c++; var p = (performance || Date).now(); if (u.update(p - a, 200), p > l + 1e3 && (h.update(1e3 * c / (p - l), 100), l = p, c = 0, d)) { var g = performance.memory; d.update(g.usedJSHeapSize / 1048576, g.jsHeapSizeLimit / 1048576) } return p }, update: function () { a = this.end() }, domElement: o, setMode: i } }; return t.Panel = function (n, i, r) { var o = 1 / 0, a = 0, l = Math.round, c = l(window.devicePixelRatio || 1), h = 80 * c, u = 48 * c, d = 3 * c, p = 2 * c, g = 3 * c, _ = 15 * c, m = 74 * c, f = 30 * c, y = document.createElement("canvas"); y.width = h, y.height = u, y.style.cssText = "width:80px;height:48px"; var v = y.getContext("2d"); return v.font = "bold " + 9 * c + "px Helvetica,Arial,sans-serif", v.textBaseline = "top", v.fillStyle = r, v.fillRect(0, 0, h, u), v.fillStyle = i, v.fillText(n, d, p), v.fillRect(g, _, m, f), v.fillStyle = r, v.globalAlpha = .9, v.fillRect(g, _, m, f), { dom: y, update: function (b, I) { o = Math.min(o, b), a = Math.max(a, b), v.fillStyle = r, v.globalAlpha = 1, v.fillRect(0, 0, h, _), v.fillStyle = i, v.fillText(l(b) + " " + n + " (" + l(o) + "-" + l(a) + ")", d, p), v.drawImage(y, g + c, _, m - c, f, g, _, m - c, f), v.fillRect(g + m - c, _, c, f), v.fillStyle = r, v.globalAlpha = .9, v.fillRect(g + m - c, _, c, l((1 - b / I) * f)) } } }, t }) })(Zh); var L0 = Zh.exports; const D0 = $h(L0); class I0 { constructor() { this.gl = new _n, this.urlParams = new URLSearchParams(window.location.search), this.isDebug = false, this.isDebug && (this.gui = new P0({ width: 300 }), this.folderProgress = this.gui.addFolder("Progress"), this.folderProgress.add(this.gl.controler.progress, "value").min(-90).max(90).step(.1).name("progress").onChange(() => { }), this.folderProgress.add(this.gl.controler.progress, "speed").min(-.01).max(.01).step(.001), this.folderProgress.add(this.gl.controler.progress.scroll.slowDown, "value").min(0).max(1).step(.01), this.folderCurve = this.gui.addFolder("Curve"), this.folderCurve.add(this.gl.controler.curve, "icons").min(-3).max(3).step(.001), this.folderDisplacement = this.gui.addFolder("Displacement"), this.folderDisplacement.add(this.gl.controler.displacement, "height").min(0).max(5).step(.001).onChange(() => { this.gl.world.surroundings.instance.material.uniforms.uDisplacementHeight.value = this.gl.controler.displacement.height }), this.folderDisplacement.add(this.gl.controler.displacement, "shrink").min(0).max(5).step(.001).onChange(() => { this.gl.world.surroundings.instance.material.uniforms.uDisplacementShrink.value = this.gl.controler.displacement.shrink }), this.folderDisplacement.add(this.gl.controler.displacement.noise, "speed").min(0).max(.01).step(1e-4).name("noise speed").onChange(() => { this.gl.world.surroundings.instance.material.uniforms.uDisplacementNoiseSpeed.value = this.gl.controler.displacement.noise.speed }), this.folderDisplacement.add(this.gl.controler.displacement.noise, "height").min(0).max(.2).step(.001).name("noise strength").onChange(() => { this.gl.world.surroundings.instance.material.uniforms.uDisplacementNoiseHeight.value = this.gl.controler.displacement.noise.height }), this.gui.add(this, "toggleText").name("Toggle Text Content"), this.gui.add(this, "toggleScrollTreshold").name("Toggle Scroll Treshold"), this.stats = new D0, this.stats.showPanel(0), document.body.appendChild(this.stats.dom)) } toggleText() { document.querySelector('[data-gl-text="wrapper"]').classList.toggle("active") } toggleScrollTreshold() { document.querySelector('[data-gl-scroll="base"]').classList.toggle("active") } } class N0 { constructor() { this.gl = new _n, this.default = { current: new le, eased: { current: new le, intesity: .005 } }, this.normalized = { current: new le, previous: new le, direction: new le, pace: 0, paceSeparated: new le, paceSeparatedOnDrag: new le, eased: { current: new le, previous: new le, direction: new le, intesity: .0015, pace: 0, paceSeparated: new le, paceSeparatedOnDrag: new le, paceIntensity: .0025 } }, this.isMouseHolding = !1, this.isMouseMoved = !1, this.drag = { start: new le, distance: new le, side: "left" }, document.addEventListener("pointermove", this.mousemove.bind(this)), document.addEventListener("pointerdown", this.down.bind(this)), document.addEventListener("pointerup", this.up.bind(this)) } mousemove(e) { e.pointerType == "mouse" && (this.isMouseMoved = !0, this.default.current.x = e.clientX, this.default.current.y = e.clientY, this.normalized.current.x = e.clientX / this.gl.sizes.width * 2 - 1, this.normalized.current.y = -(e.clientY / this.gl.sizes.height) * 2 + 1, this.normalized.direction.subVectors(this.normalized.current, this.normalized.previous).normalize(), this.isMouseHolding ? (this.drag.distance = this.drag.start.distanceTo(this.default.current), this.drag.start.x < this.default.current.x ? this.drag.side = "right" : this.drag.side = "left") : this.drag.distance = 0) } touchmove(e) { e.touches && (this.isMouseMoved = !0, this.normalized.current.x = e.touches[0].pageX / this.gl.sizes.width * 2 - 1, this.normalized.current.y = -(e.touches[0].pageY / this.gl.sizes.height) * 2 + 1) } down(e) { this.isMouseHolding = !0, this.drag.start.copy(this.default.current) } up(e) { this.isMouseHolding = !1 } update() { this.normalized.pace = this.normalized.current.distanceTo(this.normalized.previous), this.normalized.paceSeparated.x = this.normalized.current.x - this.normalized.previous.x, this.normalized.paceSeparated.y = this.normalized.current.y - this.normalized.previous.y, this.isMouseHolding ? (this.normalized.paceSeparatedOnDrag.x = this.normalized.current.x - this.normalized.previous.x, this.normalized.paceSeparatedOnDrag.y = this.normalized.current.y - this.normalized.previous.y) : (this.normalized.paceSeparatedOnDrag.x = 0, this.normalized.paceSeparatedOnDrag.y = 0), this.normalized.previous.copy(this.normalized.current), this.default.eased.current.x = Nt.damp(this.default.eased.current.x, this.default.current.x, this.default.eased.intesity, this.gl.time.delta), this.default.eased.current.y = Nt.damp(this.default.eased.current.y, this.default.current.y, this.default.eased.intesity, this.gl.time.delta), this.normalized.eased.previous.copy(this.normalized.eased.current), this.normalized.eased.current.x = Nt.damp(this.normalized.eased.current.x, this.normalized.current.x, this.normalized.eased.intesity, this.gl.time.delta), this.normalized.eased.current.y = Nt.damp(this.normalized.eased.current.y, this.normalized.current.y, this.normalized.eased.intesity, this.gl.time.delta), this.normalized.eased.direction.subVectors(this.normalized.eased.current, this.normalized.eased.previous).normalize(), this.normalized.eased.pace = Nt.damp(this.normalized.eased.pace, this.normalized.pace, this.normalized.eased.paceIntensity, this.gl.time.delta), this.normalized.eased.paceSeparated.x = Nt.damp(this.normalized.eased.paceSeparated.x, this.normalized.paceSeparated.x, this.normalized.eased.paceIntensity, this.gl.time.delta), this.normalized.eased.paceSeparated.y = Nt.damp(this.normalized.eased.paceSeparated.y, this.normalized.paceSeparated.y, this.normalized.eased.paceIntensity, this.gl.time.delta), this.normalized.eased.paceSeparatedOnDrag.x = Nt.damp(this.normalized.eased.paceSeparatedOnDrag.x, this.normalized.paceSeparatedOnDrag.x, this.normalized.eased.paceIntensity, this.gl.time.delta), this.normalized.eased.paceSeparatedOnDrag.y = Nt.damp(this.normalized.eased.paceSeparatedOnDrag.y, this.normalized.paceSeparatedOnDrag.y, this.normalized.eased.paceIntensity, this.gl.time.delta) } } function Vc(s, e) { if (e === Wu) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s; if (e === ra || e === oh) { let t = s.getIndex(); if (t === null) { const o = [], a = s.getAttribute("position"); if (a !== void 0) { for (let l = 0; l < a.count; l++)o.push(l); s.setIndex(o), t = s.getIndex() } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s } const n = t.count - 2, i = []; if (e === ra) for (let o = 1; o <= n; o++)i.push(t.getX(0)), i.push(t.getX(o)), i.push(t.getX(o + 1)); else for (let o = 0; o < n; o++)o % 2 === 0 ? (i.push(t.getX(o)), i.push(t.getX(o + 1)), i.push(t.getX(o + 2))) : (i.push(t.getX(o + 2)), i.push(t.getX(o + 1)), i.push(t.getX(o))); i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."); const r = s.clone(); return r.setIndex(i), r.clearGroups(), r } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s } class U0 extends rs { constructor(e) { super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function (t) { return new k0(t) }), this.register(function (t) { return new H0(t) }), this.register(function (t) { return new $0(t) }), this.register(function (t) { return new Z0(t) }), this.register(function (t) { return new J0(t) }), this.register(function (t) { return new G0(t) }), this.register(function (t) { return new W0(t) }), this.register(function (t) { return new X0(t) }), this.register(function (t) { return new j0(t) }), this.register(function (t) { return new z0(t) }), this.register(function (t) { return new Y0(t) }), this.register(function (t) { return new V0(t) }), this.register(function (t) { return new K0(t) }), this.register(function (t) { return new q0(t) }), this.register(function (t) { return new F0(t) }), this.register(function (t) { return new Q0(t) }), this.register(function (t) { return new ex(t) }) } load(e, t, n, i) { const r = this; let o; if (this.resourcePath !== "") o = this.resourcePath; else if (this.path !== "") { const c = Es.extractUrlBase(e); o = Es.resolveURL(c, this.path) } else o = Es.extractUrlBase(e); this.manager.itemStart(e); const a = function (c) { i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e) }, l = new Oh(this.manager); l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function (c) { try { r.parse(c, o, function (h) { t(h), r.manager.itemEnd(e) }, a) } catch (h) { a(h) } }, n, a) } setDRACOLoader(e) { return this.dracoLoader = e, this } setDDSLoader() { throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".') } setKTX2Loader(e) { return this.ktx2Loader = e, this } setMeshoptDecoder(e) { return this.meshoptDecoder = e, this } register(e) { return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this } unregister(e) { return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this } parse(e, t, n, i) { let r; const o = {}, a = {}, l = new TextDecoder; if (typeof e == "string") r = JSON.parse(e); else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === Jh) { try { o[ze.KHR_BINARY_GLTF] = new tx(e) } catch (u) { i && i(u); return } r = JSON.parse(o[ze.KHR_BINARY_GLTF].content) } else r = JSON.parse(l.decode(e)); else r = e; if (r.asset === void 0 || r.asset.version[0] < 2) { i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")); return } const c = new px(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder }); c.fileLoader.setRequestHeader(this.requestHeader); for (let h = 0; h < this.pluginCallbacks.length; h++) { const u = this.pluginCallbacks[h](c); u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[u.name] = u, o[u.name] = !0 } if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) { const u = r.extensionsUsed[h], d = r.extensionsRequired || []; switch (u) { case ze.KHR_MATERIALS_UNLIT: o[u] = new B0; break; case ze.KHR_DRACO_MESH_COMPRESSION: o[u] = new nx(r, this.dracoLoader); break; case ze.KHR_TEXTURE_TRANSFORM: o[u] = new ix; break; case ze.KHR_MESH_QUANTIZATION: o[u] = new sx; break; default: d.indexOf(u) >= 0 && a[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".') } } c.setExtensions(o), c.setPlugins(a), c.parse(n, i) } parseAsync(e, t) { const n = this; return new Promise(function (i, r) { n.parse(e, t, i, r) }) } } function O0() { let s = {}; return { get: function (e) { return s[e] }, add: function (e, t) { s[e] = t }, remove: function (e) { delete s[e] }, removeAll: function () { s = {} } } } const ze = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" }; class F0 { constructor(e) { this.parser = e, this.name = ze.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} } } _markDefs() { const e = this.parser, t = this.parser.json.nodes || []; for (let n = 0, i = t.length; n < i; n++) { const r = t[n]; r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light) } } _loadLight(e) { const t = this.parser, n = "light:" + e; let i = t.cache.get(n); if (i) return i; const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e]; let c; const h = new Se(16777215); l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Et); const u = l.range !== void 0 ? l.range : 0; switch (l.type) { case "directional": c = new Fh(h), c.target.position.set(0, 0, -1), c.add(c.target); break; case "point": c = new $_(h), c.distance = u; break; case "spot": c = new q_(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target); break; default: throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type) }return c.position.set(0, 0, 0), c.decay = 2, wn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i } getDependency(e, t) { if (e === "light") return this._loadLight(t) } createNodeAttachment(e) { const t = this, n = this.parser, r = n.json.nodes[e], a = (r.extensions && r.extensions[this.name] || {}).light; return a === void 0 ? null : this._loadLight(a).then(function (l) { return n._getNodeRef(t.cache, a, l) }) } } class B0 { constructor() { this.name = ze.KHR_MATERIALS_UNLIT } getMaterialType() { return Xn } extendParams(e, t, n) { const i = []; e.color = new Se(1, 1, 1), e.opacity = 1; const r = t.pbrMetallicRoughness; if (r) { if (Array.isArray(r.baseColorFactor)) { const o = r.baseColorFactor; e.color.setRGB(o[0], o[1], o[2], Et), e.opacity = o[3] } r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, Pt)) } return Promise.all(i) } } class z0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_EMISSIVE_STRENGTH } extendMaterialParams(e, t) { const i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = i.extensions[this.name].emissiveStrength; return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve() } } class k0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_CLEARCOAT } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; if (o.clearcoatFactor !== void 0 && (t.clearcoat = o.clearcoatFactor), o.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), o.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), o.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), o.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), o.clearcoatNormalTexture.scale !== void 0)) { const a = o.clearcoatNormalTexture.scale; t.clearcoatNormalScale = new le(a, a) } return Promise.all(r) } } class H0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_DISPERSION } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = i.extensions[this.name]; return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve() } } class V0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_IRIDESCENCE } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return o.iridescenceFactor !== void 0 && (t.iridescence = o.iridescenceFactor), o.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", o.iridescenceTexture)), o.iridescenceIor !== void 0 && (t.iridescenceIOR = o.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), o.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = o.iridescenceThicknessMinimum), o.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = o.iridescenceThicknessMaximum), o.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", o.iridescenceThicknessTexture)), Promise.all(r) } } class G0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_SHEEN } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = []; t.sheenColor = new Se(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1; const o = i.extensions[this.name]; if (o.sheenColorFactor !== void 0) { const a = o.sheenColorFactor; t.sheenColor.setRGB(a[0], a[1], a[2], Et) } return o.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = o.sheenRoughnessFactor), o.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", o.sheenColorTexture, Pt)), o.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(r) } } class W0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_TRANSMISSION } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return o.transmissionFactor !== void 0 && (t.transmission = o.transmissionFactor), o.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", o.transmissionTexture)), Promise.all(r) } } class X0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_VOLUME } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; t.thickness = o.thicknessFactor !== void 0 ? o.thicknessFactor : 0, o.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0; const a = o.attenuationColor || [1, 1, 1]; return t.attenuationColor = new Se().setRGB(a[0], a[1], a[2], Et), Promise.all(r) } } class j0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_IOR } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const i = this.parser.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = i.extensions[this.name]; return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve() } } class Y0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_SPECULAR } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; t.specularIntensity = o.specularFactor !== void 0 ? o.specularFactor : 1, o.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", o.specularTexture)); const a = o.specularColorFactor || [1, 1, 1]; return t.specularColor = new Se().setRGB(a[0], a[1], a[2], Et), o.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", o.specularColorTexture, Pt)), Promise.all(r) } } class q0 { constructor(e) { this.parser = e, this.name = ze.EXT_MATERIALS_BUMP } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return t.bumpScale = o.bumpFactor !== void 0 ? o.bumpFactor : 1, o.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", o.bumpTexture)), Promise.all(r) } } class K0 { constructor(e) { this.parser = e, this.name = ze.KHR_MATERIALS_ANISOTROPY } getMaterialType(e) { const n = this.parser.json.materials[e]; return !n.extensions || !n.extensions[this.name] ? null : mn } extendMaterialParams(e, t) { const n = this.parser, i = n.json.materials[e]; if (!i.extensions || !i.extensions[this.name]) return Promise.resolve(); const r = [], o = i.extensions[this.name]; return o.anisotropyStrength !== void 0 && (t.anisotropy = o.anisotropyStrength), o.anisotropyRotation !== void 0 && (t.anisotropyRotation = o.anisotropyRotation), o.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", o.anisotropyTexture)), Promise.all(r) } } class $0 { constructor(e) { this.parser = e, this.name = ze.KHR_TEXTURE_BASISU } loadTexture(e) { const t = this.parser, n = t.json, i = n.textures[e]; if (!i.extensions || !i.extensions[this.name]) return null; const r = i.extensions[this.name], o = t.options.ktx2Loader; if (!o) { if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures"); return null } return t.loadTextureImage(e, r.source, o) } } class Z0 { constructor(e) { this.parser = e, this.name = ze.EXT_TEXTURE_WEBP, this.isSupported = null } loadTexture(e) { const t = this.name, n = this.parser, i = n.json, r = i.textures[e]; if (!r.extensions || !r.extensions[t]) return null; const o = r.extensions[t], a = i.images[o.source]; let l = n.textureLoader; if (a.uri) { const c = n.options.manager.getHandler(a.uri); c !== null && (l = c) } return this.detectSupport().then(function (c) { if (c) return n.loadTextureImage(e, o.source, l); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { const t = new Image; t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } } class J0 { constructor(e) { this.parser = e, this.name = ze.EXT_TEXTURE_AVIF, this.isSupported = null } loadTexture(e) { const t = this.name, n = this.parser, i = n.json, r = i.textures[e]; if (!r.extensions || !r.extensions[t]) return null; const o = r.extensions[t], a = i.images[o.source]; let l = n.textureLoader; if (a.uri) { const c = n.options.manager.getHandler(a.uri); c !== null && (l = c) } return this.detectSupport().then(function (c) { if (c) return n.loadTextureImage(e, o.source, l); if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported."); return n.loadTexture(e) }) } detectSupport() { return this.isSupported || (this.isSupported = new Promise(function (e) { const t = new Image; t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function () { e(t.height === 1) } })), this.isSupported } } class Q0 { constructor(e) { this.name = ze.EXT_MESHOPT_COMPRESSION, this.parser = e } loadBufferView(e) { const t = this.parser.json, n = t.bufferViews[e]; if (n.extensions && n.extensions[this.name]) { const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), o = this.parser.options.meshoptDecoder; if (!o || !o.supported) { if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files"); return null } return r.then(function (a) { const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(a, l, c); return o.decodeGltfBufferAsync ? o.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function (p) { return p.buffer }) : o.ready.then(function () { const p = new ArrayBuffer(h * u); return o.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p }) }) } else return null } } class ex { constructor(e) { this.name = ze.EXT_MESH_GPU_INSTANCING, this.parser = e } createNodeMesh(e) { const t = this.parser.json, n = t.nodes[e]; if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null; const i = t.meshes[n.mesh]; for (const c of i.primitives) if (c.mode !== Wt.TRIANGLES && c.mode !== Wt.TRIANGLE_STRIP && c.mode !== Wt.TRIANGLE_FAN && c.mode !== void 0) return null; const o = n.extensions[this.name].attributes, a = [], l = {}; for (const c in o) a.push(this.parser.getDependency("accessor", o[c]).then(h => (l[c] = h, l[c]))); return a.length < 1 ? null : (a.push(this.parser.createNodeMesh(e)), Promise.all(a).then(c => { const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = []; for (const g of u) { const _ = new Ie, m = new C, f = new nn, y = new C(1, 1, 1), v = new Ph(g.geometry, g.material, d); for (let b = 0; b < d; b++)l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, b), l.ROTATION && f.fromBufferAttribute(l.ROTATION, b), l.SCALE && y.fromBufferAttribute(l.SCALE, b), v.setMatrixAt(b, _.compose(m, f, y)); for (const b in l) if (b === "_COLOR_0") { const I = l[b]; v.instanceColor = new un(I.array, I.itemSize, I.normalized) } else b !== "TRANSLATION" && b !== "ROTATION" && b !== "SCALE" && g.geometry.setAttribute(b, l[b]); it.prototype.copy.call(v, g), this.parser.assignFinalMaterial(v), p.push(v) } return h.isGroup ? (h.clear(), h.add(...p), h) : p[0] })) } } const Jh = "glTF", _s = 12, Gc = { JSON: 1313821514, BIN: 5130562 }; class tx { constructor(e) { this.name = ze.KHR_BINARY_GLTF, this.content = null, this.body = null; const t = new DataView(e, 0, _s), n = new TextDecoder; if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, !0), length: t.getUint32(8, !0) }, this.header.magic !== Jh) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header."); if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected."); const i = this.header.length - _s, r = new DataView(e, _s); let o = 0; for (; o < i;) { const a = r.getUint32(o, !0); o += 4; const l = r.getUint32(o, !0); if (o += 4, l === Gc.JSON) { const c = new Uint8Array(e, _s + o, a); this.content = n.decode(c) } else if (l === Gc.BIN) { const c = _s + o; this.body = e.slice(c, c + a) } o += a } if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.") } } class nx { constructor(e, t) { if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided."); this.name = ze.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload() } decodePrimitive(e, t) { const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, o = e.extensions[this.name].attributes, a = {}, l = {}, c = {}; for (const h in o) { const u = va[h] || h.toLowerCase(); a[u] = o[h] } for (const h in e.attributes) { const u = va[h] || h.toLowerCase(); if (o[h] !== void 0) { const d = n.accessors[e.attributes[h]], p = Gi[d.componentType]; c[u] = p.name, l[u] = d.normalized === !0 } } return t.getDependency("bufferView", r).then(function (h) { return new Promise(function (u, d) { i.decodeDracoFile(h, function (p) { for (const g in p.attributes) { const _ = p.attributes[g], m = l[g]; m !== void 0 && (_.normalized = m) } u(p) }, a, c, Et, d) }) }) } } class ix { constructor() { this.name = ze.KHR_TEXTURE_TRANSFORM } extendTexture(e, t) { return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = !0), e } } class sx { constructor() { this.name = ze.KHR_MESH_QUANTIZATION } } class Qh extends Is { constructor(e, t, n, i) { super(e, t, n, i) } copySampleValue_(e) { const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i; for (let o = 0; o !== i; o++)t[o] = n[r + o]; return t } interpolate_(e, t, n, i) { const r = this.resultBuffer, o = this.sampleValues, a = this.valueSize, l = a * 2, c = a * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, g = e * c, _ = g - c, m = -2 * p + 3 * d, f = p - d, y = 1 - m, v = f - d + u; for (let b = 0; b !== a; b++) { const I = o[_ + b + a], R = o[_ + b + l] * h, w = o[g + b + a], F = o[g + b] * h; r[b] = y * I + v * R + m * w + f * F } return r } } const rx = new nn; class ox extends Qh { interpolate_(e, t, n, i) { const r = super.interpolate_(e, t, n, i); return rx.fromArray(r).normalize().toArray(r), r } } const Wt = { FLOAT: 5126, FLOAT_MAT3: 35675, FLOAT_MAT4: 35676, FLOAT_VEC2: 35664, FLOAT_VEC3: 35665, FLOAT_VEC4: 35666, LINEAR: 9729, REPEAT: 10497, SAMPLER_2D: 35678, POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6, UNSIGNED_BYTE: 5121, UNSIGNED_SHORT: 5123 }, Gi = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, Wc = { 9728: At, 9729: Ht, 9984: $c, 9985: fr, 9986: vs, 9987: An }, Xc = { 33071: Wn, 33648: Mr, 10497: ji }, To = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, va = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Hn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, ax = { CUBICSPLINE: void 0, LINEAR: Cs, STEP: Rs }, wo = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" }; function lx(s) { return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new Fr({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: !1, depthTest: !0, side: Pn })), s.DefaultMaterial } function oi(s, e, t) { for (const n in t.extensions) s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]) } function wn(s, e) { e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras)) } function cx(s, e, t) { let n = !1, i = !1, r = !1; for (let c = 0, h = e.length; c < h; c++) { const u = e[c]; if (u.POSITION !== void 0 && (n = !0), u.NORMAL !== void 0 && (i = !0), u.COLOR_0 !== void 0 && (r = !0), n && i && r) break } if (!n && !i && !r) return Promise.resolve(s); const o = [], a = [], l = []; for (let c = 0, h = e.length; c < h; c++) { const u = e[c]; if (n) { const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position; o.push(d) } if (i) { const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal; a.push(d) } if (r) { const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color; l.push(d) } } return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l)]).then(function (c) { const h = c[0], u = c[1], d = c[2]; return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = !0, s }) } function hx(s, e) { if (s.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++)s.morphTargetInfluences[t] = e.weights[t]; if (e.extras && Array.isArray(e.extras.targetNames)) { const t = e.extras.targetNames; if (s.morphTargetInfluences.length === t.length) { s.morphTargetDictionary = {}; for (let n = 0, i = t.length; n < i; n++)s.morphTargetDictionary[t[n]] = n } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.") } } function ux(s) { let e; const t = s.extensions && s.extensions[ze.KHR_DRACO_MESH_COMPRESSION]; if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Ao(t.attributes) : e = s.indices + ":" + Ao(s.attributes) + ":" + s.mode, s.targets !== void 0) for (let n = 0, i = s.targets.length; n < i; n++)e += ":" + Ao(s.targets[n]); return e } function Ao(s) { let e = ""; const t = Object.keys(s).sort(); for (let n = 0, i = t.length; n < i; n++)e += t[n] + ":" + s[t[n]] + ";"; return e } function xa(s) { switch (s) { case Int8Array: return 1 / 127; case Uint8Array: return 1 / 255; case Int16Array: return 1 / 32767; case Uint16Array: return 1 / 65535; default: throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.") } } function dx(s) { return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png" } const fx = new Ie; class px { constructor(e = {}, t = {}) { this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new O0, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {}; let n = !1, i = -1, r = !1, o = -1; if (typeof navigator < "u") { const a = navigator.userAgent; n = /^((?!chrome|android).)*safari/i.test(a) === !0; const l = a.match(/Version\/(\d+)/); i = n && l ? parseInt(l[1], 10) : -1, r = a.indexOf("Firefox") > -1, o = r ? a.match(/Firefox\/([0-9]+)\./)[1] : -1 } typeof createImageBitmap > "u" || n && i < 17 || r && o < 98 ? this.textureLoader = new ys(this.options.manager) : this.textureLoader = new J_(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new Oh(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0) } setExtensions(e) { this.extensions = e } setPlugins(e) { this.plugins = e } parse(e, t) { const n = this, i = this.json, r = this.extensions; this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function (o) { return o._markDefs && o._markDefs() }), Promise.all(this._invokeAll(function (o) { return o.beforeRoot && o.beforeRoot() })).then(function () { return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]) }).then(function (o) { const a = { scene: o[0][i.scene || 0], scenes: o[0], animations: o[1], cameras: o[2], asset: i.asset, parser: n, userData: {} }; return oi(r, a, i), wn(a, i), Promise.all(n._invokeAll(function (l) { return l.afterRoot && l.afterRoot(a) })).then(function () { for (const l of a.scenes) l.updateMatrixWorld(); e(a) }) }).catch(t) } _markDefs() { const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || []; for (let i = 0, r = t.length; i < r; i++) { const o = t[i].joints; for (let a = 0, l = o.length; a < l; a++)e[o[a]].isBone = !0 } for (let i = 0, r = e.length; i < r; i++) { const o = e[i]; o.mesh !== void 0 && (this._addNodeRef(this.meshCache, o.mesh), o.skin !== void 0 && (n[o.mesh].isSkinnedMesh = !0)), o.camera !== void 0 && this._addNodeRef(this.cameraCache, o.camera) } } _addNodeRef(e, t) { t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++) } _getNodeRef(e, t, n) { if (e.refs[t] <= 1) return n; const i = n.clone(), r = (o, a) => { const l = this.associations.get(o); l != null && this.associations.set(a, l); for (const [c, h] of o.children.entries()) r(h, a.children[c]) }; return r(n, i), i.name += "_instance_" + e.uses[t]++, i } _invokeOne(e) { const t = Object.values(this.plugins); t.push(this); for (let n = 0; n < t.length; n++) { const i = e(t[n]); if (i) return i } return null } _invokeAll(e) { const t = Object.values(this.plugins); t.unshift(this); const n = []; for (let i = 0; i < t.length; i++) { const r = e(t[i]); r && n.push(r) } return n } getDependency(e, t) { const n = e + ":" + t; let i = this.cache.get(n); if (!i) { switch (e) { case "scene": i = this.loadScene(t); break; case "node": i = this._invokeOne(function (r) { return r.loadNode && r.loadNode(t) }); break; case "mesh": i = this._invokeOne(function (r) { return r.loadMesh && r.loadMesh(t) }); break; case "accessor": i = this.loadAccessor(t); break; case "bufferView": i = this._invokeOne(function (r) { return r.loadBufferView && r.loadBufferView(t) }); break; case "buffer": i = this.loadBuffer(t); break; case "material": i = this._invokeOne(function (r) { return r.loadMaterial && r.loadMaterial(t) }); break; case "texture": i = this._invokeOne(function (r) { return r.loadTexture && r.loadTexture(t) }); break; case "skin": i = this.loadSkin(t); break; case "animation": i = this._invokeOne(function (r) { return r.loadAnimation && r.loadAnimation(t) }); break; case "camera": i = this.loadCamera(t); break; default: if (i = this._invokeOne(function (r) { return r != this && r.getDependency && r.getDependency(e, t) }), !i) throw new Error("Unknown type: " + e); break }this.cache.add(n, i) } return i } getDependencies(e) { let t = this.cache.get(e); if (!t) { const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || []; t = Promise.all(i.map(function (r, o) { return n.getDependency(e, o) })), this.cache.add(e, t) } return t } loadBuffer(e) { const t = this.json.buffers[e], n = this.fileLoader; if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported."); if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body); const i = this.options; return new Promise(function (r, o) { n.load(Es.resolveURL(t.uri, i.path), r, void 0, function () { o(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".')) }) }) } loadBufferView(e) { const t = this.json.bufferViews[e]; return this.getDependency("buffer", t.buffer).then(function (n) { const i = t.byteLength || 0, r = t.byteOffset || 0; return n.slice(r, r + i) }) } loadAccessor(e) { const t = this, n = this.json, i = this.json.accessors[e]; if (i.bufferView === void 0 && i.sparse === void 0) { const o = To[i.type], a = Gi[i.componentType], l = i.normalized === !0, c = new a(i.count * o); return Promise.resolve(new Dt(c, o, l)) } const r = []; return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function (o) { const a = o[0], l = To[i.type], c = Gi[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === !0; let _, m; if (p && p !== u) { const f = Math.floor(d / p), y = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count; let v = t.cache.get(y); v || (_ = new c(a, f * p, i.count * p / h), v = new w_(_, p / h), t.cache.add(y, v)), m = new Na(v, l, d % p / h, g) } else a === null ? _ = new c(i.count * l) : _ = new c(a, d, i.count * l), m = new Dt(_, l, g); if (i.sparse !== void 0) { const f = To.SCALAR, y = Gi[i.sparse.indices.componentType], v = i.sparse.indices.byteOffset || 0, b = i.sparse.values.byteOffset || 0, I = new y(o[1], v, i.sparse.count * f), R = new c(o[2], b, i.sparse.count * l); a !== null && (m = new Dt(m.array.slice(), m.itemSize, m.normalized)); for (let w = 0, F = I.length; w < F; w++) { const E = I[w]; if (m.setX(E, R[w * l]), l >= 2 && m.setY(E, R[w * l + 1]), l >= 3 && m.setZ(E, R[w * l + 2]), l >= 4 && m.setW(E, R[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.") } } return m }) } loadTexture(e) { const t = this.json, n = this.options, r = t.textures[e].source, o = t.images[r]; let a = this.textureLoader; if (o.uri) { const l = n.manager.getHandler(o.uri); l !== null && (a = l) } return this.loadTextureImage(e, r, a) } loadTextureImage(e, t, n) { const i = this, r = this.json, o = r.textures[e], a = r.images[t], l = (a.uri || a.bufferView) + ":" + o.sampler; if (this.textureCache[l]) return this.textureCache[l]; const c = this.loadImageSource(t, n).then(function (h) { h.flipY = !1, h.name = o.name || a.name || "", h.name === "" && typeof a.uri == "string" && a.uri.startsWith("data:image/") === !1 && (h.name = a.uri); const d = (r.samplers || {})[o.sampler] || {}; return h.magFilter = Wc[d.magFilter] || Ht, h.minFilter = Wc[d.minFilter] || An, h.wrapS = Xc[d.wrapS] || ji, h.wrapT = Xc[d.wrapT] || ji, i.associations.set(h, { textures: e }), h }).catch(function () { return null }); return this.textureCache[l] = c, c } loadImageSource(e, t) { const n = this, i = this.json, r = this.options; if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then(u => u.clone()); const o = i.images[e], a = self.URL || self.webkitURL; let l = o.uri || "", c = !1; if (o.bufferView !== void 0) l = n.getDependency("bufferView", o.bufferView).then(function (u) { c = !0; const d = new Blob([u], { type: o.mimeType }); return l = a.createObjectURL(d), l }); else if (o.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView"); const h = Promise.resolve(l).then(function (u) { return new Promise(function (d, p) { let g = d; t.isImageBitmapLoader === !0 && (g = function (_) { const m = new vt(_); m.needsUpdate = !0, d(m) }), t.load(Es.resolveURL(u, r.path), g, void 0, p) }) }).then(function (u) { return c === !0 && a.revokeObjectURL(l), wn(u, o), u.userData.mimeType = o.mimeType || dx(o.uri), u }).catch(function (u) { throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u }); return this.sourceCache[e] = h, h } assignTexture(e, t, n, i) { const r = this; return this.getDependency("texture", n.index).then(function (o) { if (!o) return null; if (n.texCoord !== void 0 && n.texCoord > 0 && (o = o.clone(), o.channel = n.texCoord), r.extensions[ze.KHR_TEXTURE_TRANSFORM]) { const a = n.extensions !== void 0 ? n.extensions[ze.KHR_TEXTURE_TRANSFORM] : void 0; if (a) { const l = r.associations.get(o); o = r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(o, a), r.associations.set(o, l) } } return i !== void 0 && (o.colorSpace = i), e[t] = o, o }) } assignFinalMaterial(e) { const t = e.geometry; let n = e.material; const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, o = t.attributes.normal === void 0; if (e.isPoints) { const a = "PointsMaterial:" + n.uuid; let l = this.cache.get(a); l || (l = new Dh, dn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = !1, this.cache.add(a, l)), n = l } else if (e.isLine) { const a = "LineBasicMaterial:" + n.uuid; let l = this.cache.get(a); l || (l = new Lh, dn.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(a, l)), n = l } if (i || r || o) { let a = "ClonedMaterial:" + n.uuid + ":"; i && (a += "derivative-tangents:"), r && (a += "vertex-colors:"), o && (a += "flat-shading:"); let l = this.cache.get(a); l || (l = n.clone(), r && (l.vertexColors = !0), o && (l.flatShading = !0), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(a, l), this.associations.set(l, this.associations.get(n))), n = l } e.material = n } getMaterialType() { return Fr } loadMaterial(e) { const t = this, n = this.json, i = this.extensions, r = n.materials[e]; let o; const a = {}, l = r.extensions || {}, c = []; if (l[ze.KHR_MATERIALS_UNLIT]) { const u = i[ze.KHR_MATERIALS_UNLIT]; o = u.getMaterialType(), c.push(u.extendParams(a, r, t)) } else { const u = r.pbrMetallicRoughness || {}; if (a.color = new Se(1, 1, 1), a.opacity = 1, Array.isArray(u.baseColorFactor)) { const d = u.baseColorFactor; a.color.setRGB(d[0], d[1], d[2], Et), a.opacity = d[3] } u.baseColorTexture !== void 0 && c.push(t.assignTexture(a, "map", u.baseColorTexture, Pt)), a.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, a.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(a, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(a, "roughnessMap", u.metallicRoughnessTexture))), o = this._invokeOne(function (d) { return d.getMaterialType && d.getMaterialType(e) }), c.push(Promise.all(this._invokeAll(function (d) { return d.extendMaterialParams && d.extendMaterialParams(e, a) }))) } r.doubleSided === !0 && (a.side = Xt); const h = r.alphaMode || wo.OPAQUE; if (h === wo.BLEND ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, h === wo.MASK && (a.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : .5)), r.normalTexture !== void 0 && o !== Xn && (c.push(t.assignTexture(a, "normalMap", r.normalTexture)), a.normalScale = new le(1, 1), r.normalTexture.scale !== void 0)) { const u = r.normalTexture.scale; a.normalScale.set(u, u) } if (r.occlusionTexture !== void 0 && o !== Xn && (c.push(t.assignTexture(a, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (a.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && o !== Xn) { const u = r.emissiveFactor; a.emissive = new Se().setRGB(u[0], u[1], u[2], Et) } return r.emissiveTexture !== void 0 && o !== Xn && c.push(t.assignTexture(a, "emissiveMap", r.emissiveTexture, Pt)), Promise.all(c).then(function () { const u = new o(a); return r.name && (u.name = r.name), wn(u, r), t.associations.set(u, { materials: e }), r.extensions && oi(i, u, r), u }) } createUniqueName(e) { const t = Ze.sanitizeNodeName(e || ""); return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t) } loadGeometries(e) { const t = this, n = this.extensions, i = this.primitiveCache; function r(a) { return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a, t).then(function (l) { return jc(l, a, t) }) } const o = []; for (let a = 0, l = e.length; a < l; a++) { const c = e[a], h = ux(c), u = i[h]; if (u) o.push(u.promise); else { let d; c.extensions && c.extensions[ze.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = jc(new rn, c, t), i[h] = { primitive: c, promise: d }, o.push(d) } } return Promise.all(o) } loadMesh(e) { const t = this, n = this.json, i = this.extensions, r = n.meshes[e], o = r.primitives, a = []; for (let l = 0, c = o.length; l < c; l++) { const h = o[l].material === void 0 ? lx(this.cache) : this.getDependency("material", o[l].material); a.push(h) } return a.push(t.loadGeometries(o)), Promise.all(a).then(function (l) { const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = []; for (let p = 0, g = h.length; p < g; p++) { const _ = h[p], m = o[p]; let f; const y = c[p]; if (m.mode === Wt.TRIANGLES || m.mode === Wt.TRIANGLE_STRIP || m.mode === Wt.TRIANGLE_FAN || m.mode === void 0) f = r.isSkinnedMesh === !0 ? new R_(_, y) : new Ut(_, y), f.isSkinnedMesh === !0 && f.normalizeSkinWeights(), m.mode === Wt.TRIANGLE_STRIP ? f.geometry = Vc(f.geometry, oh) : m.mode === Wt.TRIANGLE_FAN && (f.geometry = Vc(f.geometry, ra)); else if (m.mode === Wt.LINES) f = new L_(_, y); else if (m.mode === Wt.LINE_STRIP) f = new Oa(_, y); else if (m.mode === Wt.LINE_LOOP) f = new D_(_, y); else if (m.mode === Wt.POINTS) f = new I_(_, y); else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode); Object.keys(f.geometry.morphAttributes).length > 0 && hx(f, r), f.name = t.createUniqueName(r.name || "mesh_" + e), wn(f, r), m.extensions && oi(i, f, m), t.assignFinalMaterial(f), u.push(f) } for (let p = 0, g = u.length; p < g; p++)t.associations.set(u[p], { meshes: e, primitives: p }); if (u.length === 1) return r.extensions && oi(i, u[0], r), u[0]; const d = new jn; r.extensions && oi(i, d, r), t.associations.set(d, { meshes: e }); for (let p = 0, g = u.length; p < g; p++)d.add(u[p]); return d }) } loadCamera(e) { let t; const n = this.json.cameras[e], i = n[n.type]; if (!i) { console.warn("THREE.GLTFLoader: Missing camera parameters."); return } return n.type === "perspective" ? t = new Lt(Nt.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new Ur(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), wn(t, n), Promise.resolve(t) } loadSkin(e) { const t = this.json.skins[e], n = []; for (let i = 0, r = t.joints.length; i < r; i++)n.push(this._loadNodeShallow(t.joints[i])); return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function (i) { const r = i.pop(), o = i, a = [], l = []; for (let c = 0, h = o.length; c < h; c++) { const u = o[c]; if (u) { a.push(u); const d = new Ie; r !== null && d.fromArray(r.array, c * 16), l.push(d) } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]) } return new Ua(a, l) }) } loadAnimation(e) { const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, o = [], a = [], l = [], c = [], h = []; for (let u = 0, d = i.channels.length; u < d; u++) { const p = i.channels[u], g = i.samplers[p.sampler], _ = p.target, m = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, y = i.parameters !== void 0 ? i.parameters[g.output] : g.output; _.node !== void 0 && (o.push(this.getDependency("node", m)), a.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", y)), c.push(g), h.push(_)) } return Promise.all([Promise.all(o), Promise.all(a), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function (u) { const d = u[0], p = u[1], g = u[2], _ = u[3], m = u[4], f = []; for (let y = 0, v = d.length; y < v; y++) { const b = d[y], I = p[y], R = g[y], w = _[y], F = m[y]; if (b === void 0) continue; b.updateMatrix && b.updateMatrix(); const E = n._createAnimationTracks(b, I, R, w, F); if (E) for (let S = 0; S < E.length; S++)f.push(E[S]) } return new k_(r, void 0, f) }) } createNodeMesh(e) { const t = this.json, n = this, i = t.nodes[e]; return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function (r) { const o = n._getNodeRef(n.meshCache, i.mesh, r); return i.weights !== void 0 && o.traverse(function (a) { if (a.isMesh) for (let l = 0, c = i.weights.length; l < c; l++)a.morphTargetInfluences[l] = i.weights[l] }), o }) } loadNode(e) { const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), o = [], a = i.children || []; for (let c = 0, h = a.length; c < h; c++)o.push(n.getDependency("node", a[c])); const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin); return Promise.all([r, Promise.all(o), l]).then(function (c) { const h = c[0], u = c[1], d = c[2]; d !== null && h.traverse(function (p) { p.isSkinnedMesh && p.bind(d, fx) }); for (let p = 0, g = u.length; p < g; p++)h.add(u[p]); return h }) } _loadNodeShallow(e) { const t = this.json, n = this.extensions, i = this; if (this.nodeCache[e] !== void 0) return this.nodeCache[e]; const r = t.nodes[e], o = r.name ? i.createUniqueName(r.name) : "", a = [], l = i._invokeOne(function (c) { return c.createNodeMesh && c.createNodeMesh(e) }); return l && a.push(l), r.camera !== void 0 && a.push(i.getDependency("camera", r.camera).then(function (c) { return i._getNodeRef(i.cameraCache, r.camera, c) })), i._invokeAll(function (c) { return c.createNodeAttachment && c.createNodeAttachment(e) }).forEach(function (c) { a.push(c) }), this.nodeCache[e] = Promise.all(a).then(function (c) { let h; if (r.isBone === !0 ? h = new Rh : c.length > 1 ? h = new jn : c.length === 1 ? h = c[0] : h = new it, h !== c[0]) for (let u = 0, d = c.length; u < d; u++)h.add(c[u]); if (r.name && (h.userData.name = r.name, h.name = o), wn(h, r), r.extensions && oi(n, h, r), r.matrix !== void 0) { const u = new Ie; u.fromArray(r.matrix), h.applyMatrix4(u) } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale); return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h }), this.nodeCache[e] } loadScene(e) { const t = this.extensions, n = this.json.scenes[e], i = this, r = new jn; n.name && (r.name = i.createUniqueName(n.name)), wn(r, n), n.extensions && oi(t, r, n); const o = n.nodes || [], a = []; for (let l = 0, c = o.length; l < c; l++)a.push(i.getDependency("node", o[l])); return Promise.all(a).then(function (l) { for (let h = 0, u = l.length; h < u; h++)r.add(l[h]); const c = h => { const u = new Map; for (const [d, p] of i.associations) (d instanceof dn || d instanceof vt) && u.set(d, p); return h.traverse(d => { const p = i.associations.get(d); p != null && u.set(d, p) }), u }; return i.associations = c(r), r }) } _createAnimationTracks(e, t, n, i, r) { const o = [], a = e.name ? e.name : e.uuid, l = []; Hn[r.path] === Hn.weights ? e.traverse(function (d) { d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid) }) : l.push(a); let c; switch (Hn[r.path]) { case Hn.weights: c = Zi; break; case Hn.rotation: c = Ji; break; case Hn.position: case Hn.scale: c = Qi; break; default: switch (n.itemSize) { case 1: c = Zi; break; case 2: case 3: default: c = Qi; break }break }const h = i.interpolation !== void 0 ? ax[i.interpolation] : Cs, u = this._getArrayFromAccessor(n); for (let d = 0, p = l.length; d < p; d++) { const g = new c(l[d] + "." + Hn[r.path], t.array, u, h); i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), o.push(g) } return o } _getArrayFromAccessor(e) { let t = e.array; if (e.normalized) { const n = xa(t.constructor), i = new Float32Array(t.length); for (let r = 0, o = t.length; r < o; r++)i[r] = t[r] * n; t = i } return t } _createCubicSplineTrackInterpolant(e) { e.createInterpolant = function (n) { const i = this instanceof Ji ? ox : Qh; return new i(this.times, this.values, this.getValueSize() / 3, n) }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0 } } function mx(s, e, t) { const n = e.attributes, i = new In; if (n.POSITION !== void 0) { const a = t.json.accessors[n.POSITION], l = a.min, c = a.max; if (l !== void 0 && c !== void 0) { if (i.set(new C(l[0], l[1], l[2]), new C(c[0], c[1], c[2])), a.normalized) { const h = xa(Gi[a.componentType]); i.min.multiplyScalar(h), i.max.multiplyScalar(h) } } else { console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION."); return } } else return; const r = e.targets; if (r !== void 0) { const a = new C, l = new C; for (let c = 0, h = r.length; c < h; c++) { const u = r[c]; if (u.POSITION !== void 0) { const d = t.json.accessors[u.POSITION], p = d.min, g = d.max; if (p !== void 0 && g !== void 0) { if (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) { const _ = xa(Gi[d.componentType]); l.multiplyScalar(_) } a.max(l) } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.") } } i.expandByVector(a) } s.boundingBox = i; const o = new pn; i.getCenter(o.center), o.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = o } function jc(s, e, t) { const n = e.attributes, i = []; function r(o, a) { return t.getDependency("accessor", o).then(function (l) { s.setAttribute(a, l) }) } for (const o in n) { const a = va[o] || o.toLowerCase(); a in s.attributes || i.push(r(n[o], a)) } if (e.indices !== void 0 && !s.index) { const o = t.getDependency("accessor", e.indices).then(function (a) { s.setIndex(a) }); i.push(o) } return We.workingColorSpace !== Et && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`), wn(s, e), mx(s, e, t), Promise.all(i).then(function () { return e.targets !== void 0 ? cx(s, e.targets, t) : s }) } class gx { constructor() { this.gl = new _n, this.gltfLoader = new U0(this.gl.loadingManager), this.models = { cubeDetailed: null, cubeSurroundings: null }, this.textures = { matcap: new ys(this.gl.loadingManager).load(window.jasperAssets.textures.matcap), masks: { top: new ys(this.gl.loadingManager).load(window.jasperAssets.textures.masks.top) }, base: new ys(this.gl.loadingManager).load(window.jasperAssets.textures.base), ao: new ys(this.gl.loadingManager).load(window.jasperAssets.textures.ao) }, this.textures.masks.top.flipY = !1, this.textures.base.flipY = !1, this.textures.base.minFilter = At, this.textures.ao.flipY = !1, this.load() } load() { this.gltfLoader.load(window.jasperAssets.models.cubeDetailed, e => { this.models.cubeDetailed = e.scene.children[0] }), this.gltfLoader.load(window.jasperAssets.models.cubeSurroundings, e => { this.models.cubeSurroundings = e.scene.children[0] }) } } var eu = { exports: {} }; (function (s, e) { (function (t, n) { s.exports = n() })(Kh, function () { var t = 0; function n(_) { return "__private_" + t++ + "_" + _ } function i(_, m) { if (!Object.prototype.hasOwnProperty.call(_, m)) throw new TypeError("attempted to use private field on non-instance"); return _ } function r() { } r.prototype = { on: function (_, m, f) { var y = this.e || (this.e = {}); return (y[_] || (y[_] = [])).push({ fn: m, ctx: f }), this }, once: function (_, m, f) { var y = this; function v() { y.off(_, v), m.apply(f, arguments) } return v._ = m, this.on(_, v, f) }, emit: function (_) { for (var m = [].slice.call(arguments, 1), f = ((this.e || (this.e = {}))[_] || []).slice(), y = 0, v = f.length; y < v; y++)f[y].fn.apply(f[y].ctx, m); return this }, off: function (_, m) { var f = this.e || (this.e = {}), y = f[_], v = []; if (y && m) for (var b = 0, I = y.length; b < I; b++)y[b].fn !== m && y[b].fn._ !== m && v.push(y[b]); return v.length ? f[_] = v : delete f[_], this } }; var o = r; o.TinyEmitter = r; var a, l = "virtualscroll", c = n("options"), h = n("el"), u = n("emitter"), d = n("event"), p = n("touchStart"), g = n("bodyTouchAction"); return function () { function _(f) { var y = this; Object.defineProperty(this, c, { writable: !0, value: void 0 }), Object.defineProperty(this, h, { writable: !0, value: void 0 }), Object.defineProperty(this, u, { writable: !0, value: void 0 }), Object.defineProperty(this, d, { writable: !0, value: void 0 }), Object.defineProperty(this, p, { writable: !0, value: void 0 }), Object.defineProperty(this, g, { writable: !0, value: void 0 }), this._onWheel = function (v) { var b = i(y, c)[c], I = i(y, d)[d]; I.deltaX = v.wheelDeltaX || -1 * v.deltaX, I.deltaY = v.wheelDeltaY || -1 * v.deltaY, a.isFirefox && v.deltaMode === 1 && (I.deltaX *= b.firefoxMultiplier, I.deltaY *= b.firefoxMultiplier), I.deltaX *= b.mouseMultiplier, I.deltaY *= b.mouseMultiplier, y._notify(v) }, this._onMouseWheel = function (v) { var b = i(y, d)[d]; b.deltaX = v.wheelDeltaX ? v.wheelDeltaX : 0, b.deltaY = v.wheelDeltaY ? v.wheelDeltaY : v.wheelDelta, y._notify(v) }, this._onTouchStart = function (v) { var b = v.targetTouches ? v.targetTouches[0] : v; i(y, p)[p].x = b.pageX, i(y, p)[p].y = b.pageY }, this._onTouchMove = function (v) { var b = i(y, c)[c]; b.preventTouch && !v.target.classList.contains(b.unpreventTouchClass) && v.preventDefault(); var I = i(y, d)[d], R = v.targetTouches ? v.targetTouches[0] : v; I.deltaX = (R.pageX - i(y, p)[p].x) * b.touchMultiplier, I.deltaY = (R.pageY - i(y, p)[p].y) * b.touchMultiplier, i(y, p)[p].x = R.pageX, i(y, p)[p].y = R.pageY, y._notify(v) }, this._onKeyDown = function (v) { var b = i(y, d)[d]; b.deltaX = b.deltaY = 0; var I = window.innerHeight - 40; switch (v.keyCode) { case 37: case 38: b.deltaY = i(y, c)[c].keyStep; break; case 39: case 40: b.deltaY = -i(y, c)[c].keyStep; break; case 32: b.deltaY = I * (v.shiftKey ? 1 : -1); break; default: return }y._notify(v) }, i(this, h)[h] = window, f && f.el && (i(this, h)[h] = f.el, delete f.el), a || (a = { hasWheelEvent: "onwheel" in document, hasMouseWheelEvent: "onmousewheel" in document, hasTouch: "ontouchstart" in document, hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, hasPointer: !!window.navigator.msPointerEnabled, hasKeyDown: "onkeydown" in document, isFirefox: navigator.userAgent.indexOf("Firefox") > -1 }), i(this, c)[c] = Object.assign({ mouseMultiplier: 1, touchMultiplier: 2, firefoxMultiplier: 15, keyStep: 120, preventTouch: !1, unpreventTouchClass: "vs-touchmove-allowed", useKeyboard: !0, useTouch: !0 }, f), i(this, u)[u] = new o, i(this, d)[d] = { y: 0, x: 0, deltaX: 0, deltaY: 0 }, i(this, p)[p] = { x: null, y: null }, i(this, g)[g] = null, i(this, c)[c].passive !== void 0 && (this.listenerOptions = { passive: i(this, c)[c].passive }) } var m = _.prototype; return m._notify = function (f) { var y = i(this, d)[d]; y.x += y.deltaX, y.y += y.deltaY, i(this, u)[u].emit(l, { x: y.x, y: y.y, deltaX: y.deltaX, deltaY: y.deltaY, originalEvent: f }) }, m._bind = function () { a.hasWheelEvent && i(this, h)[h].addEventListener("wheel", this._onWheel, this.listenerOptions), a.hasMouseWheelEvent && i(this, h)[h].addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions), a.hasTouch && i(this, c)[c].useTouch && (i(this, h)[h].addEventListener("touchstart", this._onTouchStart, this.listenerOptions), i(this, h)[h].addEventListener("touchmove", this._onTouchMove, this.listenerOptions)), a.hasPointer && a.hasTouchWin && (i(this, g)[g] = document.body.style.msTouchAction, document.body.style.msTouchAction = "none", i(this, h)[h].addEventListener("MSPointerDown", this._onTouchStart, !0), i(this, h)[h].addEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && i(this, c)[c].useKeyboard && document.addEventListener("keydown", this._onKeyDown) }, m._unbind = function () { a.hasWheelEvent && i(this, h)[h].removeEventListener("wheel", this._onWheel), a.hasMouseWheelEvent && i(this, h)[h].removeEventListener("mousewheel", this._onMouseWheel), a.hasTouch && (i(this, h)[h].removeEventListener("touchstart", this._onTouchStart), i(this, h)[h].removeEventListener("touchmove", this._onTouchMove)), a.hasPointer && a.hasTouchWin && (document.body.style.msTouchAction = i(this, g)[g], i(this, h)[h].removeEventListener("MSPointerDown", this._onTouchStart, !0), i(this, h)[h].removeEventListener("MSPointerMove", this._onTouchMove, !0)), a.hasKeyDown && i(this, c)[c].useKeyboard && document.removeEventListener("keydown", this._onKeyDown) }, m.on = function (f, y) { i(this, u)[u].on(l, f, y); var v = i(this, u)[u].e; v && v[l] && v[l].length === 1 && this._bind() }, m.off = function (f, y) { i(this, u)[u].off(l, f, y); var v = i(this, u)[u].e; (!v[l] || v[l].length <= 0) && this._unbind() }, m.destroy = function () { i(this, u)[u].off(), this._unbind() }, _ }() }) })(eu); var _x = eu.exports; const vx = $h(_x); class xx { constructor() { gsap.registerPlugin(ScrollTrigger), this.gl = new _n, this.virtualScroll = new vx, this.flags = { isHovering: !1, isHoveringPrevious: !1, isOnScreen: !0, isEnd: !1, isScrolling: !1, isExploding: !1, isReducedMotionAnimationFired: !1 }, this.progress = { value: 0, step: 0, stepScaled: 0, previous: 0, speed: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 3e-4 : 7e-4, scroll: { slowDown: { startPosition: 0, value: 0 }, join: 0, velocity: 0, trigger: { connect: { value: 0, target: 0 }, join: { value: 0, target: 0 } } }, hover: 0, join: 0 }, this.curve = { icons: .5, surroundings: 1 }, this.displacement = { height: 1, shrink: 1.25, noise: { speed: 25e-5, height: .1 } }, this.outline = { strength: 0 }, this.globalScale = 1 / 3, this.selectors = { title: document.querySelectorAll(".jasper__text-content__title"), subtitle: document.querySelectorAll(".jasper__text-content__subtitle"), buttons: document.querySelectorAll(".jasper__text-content__buttons") }, this.raycaster = new cv, this.raycaster.far = 5, this.intersected = null, this.projected = { position: new C, dom: { wrapper: document.querySelector('[data-gl-tooltip="wrapper"]'), container: document.querySelector('[data-gl-tooltip="container"]') }, instanceID: 0 }, this.scroll = { velocity: { previousState: !1 } }, this.setListeners(), this.setReducedMotionAnimationTrigger() } setListeners() { document.addEventListener("mouseout", () => { this.flags.isOnScreen = !1 }), document.addEventListener("mousemove", () => { this.flags.isOnScreen = !0 }), window.matchMedia("(prefers-reduced-motion: reduce)").matches || this.virtualScroll.on(e => { -e.deltaY < 5 ? this.progress.scroll.velocity = 0 : this.progress.scroll.velocity = -e.deltaY * 2e-4 }) } setReducedMotionAnimationTrigger() { let e = document.querySelector('[data-gl-reduced-motion="trigger"]'); e.addEventListener("click", () => { this.flags.isReducedMotionAnimationFired ? (this.joinLeaveAnimation(), this.flags.isReducedMotionAnimationFired = !1, e.querySelector('[data-gl-reduced-motion="text"]').textContent = "Connect Pathways") : (this.joinEnterAnimation(), this.flags.isReducedMotionAnimationFired = !0, e.querySelector('[data-gl-reduced-motion="text"]').textContent = "Reset") }) } initialAnimations() { if (gsap.to("[data-gl-loader]", { autoAlpha: 0, duration: 1, delay: .25 }), window.matchMedia("(prefers-reduced-motion: reduce)").matches) gsap.set(this.gl.world.surroundings.instance.material.uniforms.uInitialAnimation, { value: 1 }); else { gsap.to(this.gl.world.surroundings.instance.material.uniforms.uInitialAnimation, { value: 1, duration: 1.5, delay: .25, ease: "expo.out" }); let e = [...document.querySelectorAll('[data-gl-animation="item"]')]; e.length && gsap.fromTo(e, { autoAlpha: 0, y: "2rem" }, { autoAlpha: 1, y: "0rem", ease: "expo.out(3)", duration: .75, delay: .25, overwrite: !0, stagger: .05 }) } } join() { window.matchMedia("(prefers-reduced-motion: reduce)").matches || ScrollTrigger.create({ trigger: '[data-gl-scroll="join"]', scrub: !0, start: "top bottom", end: "bottom bottom", onEnter: () => { this.joinEnterAnimation() }, onLeaveBack: () => { this.joinLeaveAnimation() } }) } setScrollTrigger() { window.matchMedia("(prefers-reduced-motion: reduce)").matches || (this.connectTimeline = gsap.timeline({ paused: !0 }), ScrollTrigger.create({ trigger: '[data-gl-scroll="connect"]', ease: "none", scrub: !0, start: "top bottom", end: "bottom bottom", onUpdate: e => { this.progress.scroll.trigger.connect.target = e.progress } }), this.connectTimeline.fromTo(this.progress.scroll.slowDown, { value: 0 }, { value: 1, ease: "expo.inOut" }, 0), this.connectTimeline.fromTo(this.gl.camera.cameraGroup.position, { z: 0 }, { z: 4, ease: "expo.inOut", onUpdate: () => { this.gl.world.surroundings.updateTick() } }, 0), this.joinTimeline = gsap.timeline({ paused: !0 }), ScrollTrigger.create({ trigger: '[data-gl-scroll="join"]', ease: "none", scrub: !0, start: "top bottom", end: "bottom bottom", onEnter: () => { this.gl.world.surroundings.instance.material.uniforms.uRotationTime.value = 0 }, onUpdate: e => { this.progress.scroll.trigger.join.target = e.progress } }), this.joinTimeline.fromTo(this.progress.scroll, { join: 0 }, { join: 1, ease: "back.inOut(2)" }), this.joinTimeline.fromTo(this.progress, { join: 0 }, { join: 1, ease: "expo.out" }, .35), this.joinTimeline.fromTo(this.gl.world.surroundings.instance.material.uniforms.uFinalPulseStrength, { value: 0 }, { value: 1, ease: "expo.out" }, .35), this.joinTimeline.fromTo([this.gl.scene.fog.color, this.gl.scene.background, this.gl.world.lighting.hemisphereLight.color, this.gl.world.lighting.directionalLight.color], { r: this.gl.colors.fog.default.r, g: this.gl.colors.fog.default.g, b: this.gl.colors.fog.default.b }, { r: this.gl.colors.fog.join.r, g: this.gl.colors.fog.join.g, b: this.gl.colors.fog.join.b, ease: "expo.out" }, .35), this.joinTimeline.fromTo(this.gl.camera.instance, { zoom: 1 }, { zoom: 1.15, ease: "back.inOut(3)", onUpdate: () => { this.gl.camera.instance.updateProjectionMatrix() } }, .2), this.joinTimeline.fromTo(this.gl.camera.instance.position, { y: 1 }, { y: 1.5, ease: "back.inOut(3)" }, .2)) } joinEnterAnimation() { let e = 1; this.gl.world.surroundings.instance.material.uniforms.uRotationTime.value = 0, gsap.to(this.progress.scroll.slowDown, { value: 1, ease: "expo.inOut", overwrite: !0, duration: e }), gsap.to(this.gl.camera.cameraGroup.position, { z: 4, ease: "expo.inOut", overwrite: !0, duration: e, onUpdate: () => { this.gl.world.surroundings.updateTick() } }), gsap.to(this.progress.scroll, { join: 1, ease: "back.inOut(2)", duration: .5, overwrite: !0, delay: e }), gsap.to(this.progress, { join: 1, ease: "expo.out", duration: 1.5, overwrite: !0, delay: e + .35 }), gsap.fromTo(this.gl.world.surroundings.instance.material.uniforms.uFinalPulseStrength, { value: 0 }, { value: 1, ease: "expo.out", duration: 1.5, overwrite: !0, delay: e + .35 }), gsap.to(this.gl.camera.instance, { zoom: 1.15, ease: "back.inOut(3)", duration: .5, overwrite: !0, delay: e + .2, onUpdate: () => { this.gl.camera.instance.updateProjectionMatrix() } }), gsap.to(this.gl.camera.instance.position, { y: 1.5, ease: "back.inOut(3)", duration: .5, overwrite: !0, delay: e + .2 }) } joinLeaveAnimation() { gsap.to(this.progress.scroll.slowDown, { value: 0, ease: "power2.inOut", duration: .75, overwrite: !0 }), gsap.to(this.gl.camera.cameraGroup.position, { z: 0, ease: "power2.inOut", duration: .75, overwrite: !0, onUpdate: () => { this.gl.world.surroundings.updateTick() } }), gsap.to(this.progress.scroll, { join: 0, ease: "expo.inOut", duration: .75, overwrite: !0 }), gsap.to(this.progress, { join: 0, ease: "power2.inOut", duration: .75, overwrite: !0, onComplete: () => { this.gl.controler.flags.isExploding = !1 } }), gsap.to(this.gl.camera.instance, { zoom: 1, ease: "power2.inOut", duration: .75, overwrite: !0, onUpdate: () => { this.gl.camera.instance.updateProjectionMatrix() } }), gsap.to(this.gl.camera.instance.position, { y: 1, ease: "power2.inOut", duration: .75, overwrite: !0 }) } listenForScrollChange() { this.lenis.velocity == 0 && (this.flags.isScrolling = !1), this.flags.isScrolling != this.scroll.velocity.previousState && (this.flags.isScrolling, this.flags.isScrolling), this.scroll.velocity.previousState = this.flags.isScrolling } updateScene() { this.gl.world.surroundings.updateMesh() } progressLoop() { let e = this.progress.speed * (1 - this.progress.scroll.slowDown.value), t = this.progress.scroll.velocity * (1 - this.progress.scroll.slowDown.value), n = 1 - this.progress.hover; this.progress.value += (this.gl.time.delta * e + t) * n, this.progress.step = Math.floor(this.progress.value), this.progress.stepScaled = Math.floor(this.progress.value / this.globalScale), this.progress.step != this.progress.previous && this.gl.world.surroundings.updateTick(), this.progress.previous = this.progress.step } raycastLoop() { this.raycaster.setFromCamera({ x: this.gl.mouse.normalized.current.x, y: this.gl.mouse.normalized.current.y }, this.gl.camera.instance), this.gl.world.icons.instance.computeBoundingSphere(), this.intersected = this.raycaster.intersectObject(this.gl.world.icons.instance), this.intersected.length ? (this.flags.isHovering = !0, this.projected.instanceID = this.intersected[0].instanceId) : this.flags.isHovering = !1, this.flags.isHovering != this.flags.isHoveringPrevious && (this.flags.isHovering && this.flags.isOnScreen && !this.flags.isScrolling && !this.flags.isEnd && this.gl.mouse.isMouseMoved ? this.hoverIn() : this.hoverOut()), this.flags.isHoveringPrevious = this.flags.isHovering } projectLoop() { const e = new Ie, t = new C, n = new nn, i = new C; this.gl.world.icons.instance.getMatrixAt(this.projected.instanceID, e), e.decompose(t, n, i); const r = t.clone(); r.project(this.gl.camera.instance); const o = r.x * this.gl.sizes.width * .5, a = -r.y * this.gl.sizes.height * .5; this.projected.dom.wrapper.style.transform = `translateX(${o}px) translateY(${a}px)` } smoothScrollTrigger() { if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) { let e = .005; this.progress.scroll.trigger.connect.value = Nt.damp(this.progress.scroll.trigger.connect.value, this.progress.scroll.trigger.connect.target, e, this.gl.time.delta), this.connectTimeline.progress(this.progress.scroll.trigger.connect.value), this.progress.scroll.trigger.join.value = Nt.damp(this.progress.scroll.trigger.join.value, this.progress.scroll.trigger.join.target, e, this.gl.time.delta), this.joinTimeline.progress(this.progress.scroll.trigger.join.value) } } update() { this.progressLoop() } } let Ro = null; class _n {
	constructor(e) {
		if (Ro) return Ro; Ro = this, this.isLoaded = !1, this.canvas = e, this.time = new a0, this.sizes = new l0, this.mouse = new N0, this.colors = new Ha, this.scene = new T_, this.scene.fog = new Ia(this.colors.fog.default, 0, 9), this.scene.background = new Se(this.colors.fog.default), this.camera = new Tv, this.renderer = new Fv, this.loadingManager = new Uh, window.jasperAssets.logs && (this.loadingManager.onProgress = (t, n, i) => {
			console.log("Loading file: " + t + `.
Loaded `+ n + " of " + i + " files.")
		}), this.loadingManager.onLoad = () => { this.controler = new xx, this.world = new o0, this.debug = new I0, this.isLoaded = !0, this.controler.initialAnimations(), this.controler.join(), this.sizes.setSize() }, this.assets = new gx, this.time.on("tick", () => { this.update() }), this.sizes.on("resize", () => { this.resize() })
	} update() { this.isLoaded && (this.debug.isDebug && this.debug.stats.begin(), this.renderer.update(), this.controler.update(), this.world.update(), this.camera.update(), this.mouse.update(), this.debug.isDebug && this.debug.stats.end()) } resize() { this.camera.resize(), this.renderer.resize(), this.world.resize() }
} class yx { static isWebGL2Available() { try { const e = document.createElement("canvas"); return !!(window.WebGL2RenderingContext && e.getContext("webgl2")) } catch { return !1 } } static isColorSpaceAvailable(e) { try { const t = document.createElement("canvas"), n = window.WebGL2RenderingContext && t.getContext("webgl2"); return n.drawingBufferColorSpace = e, n.drawingBufferColorSpace === e } catch { return !1 } } static getWebGL2ErrorMessage() { return this.getErrorMessage(2) } static getErrorMessage(e) { const t = { 1: "WebGL", 2: "WebGL 2" }, n = { 1: window.WebGLRenderingContext, 2: window.WebGL2RenderingContext }; let i = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>'; const r = document.createElement("div"); return r.id = "webglmessage", r.style.fontFamily = "monospace", r.style.fontSize = "13px", r.style.fontWeight = "normal", r.style.textAlign = "center", r.style.background = "#fff", r.style.color = "#000", r.style.padding = "1.5em", r.style.width = "400px", r.style.margin = "5em auto 0", n[e] ? i = i.replace("$0", "graphics card") : i = i.replace("$0", "browser"), i = i.replace("$1", t[e]), r.innerHTML = i, r } static isWebGLAvailable() { console.warn("isWebGLAvailable() has been deprecated and will be removed in r178. Use isWebGL2Available() instead."); try { const e = document.createElement("canvas"); return !!(window.WebGLRenderingContext && (e.getContext("webgl") || e.getContext("experimental-webgl"))) } catch { return !1 } } static getWebGLErrorMessage() { return console.warn("getWebGLErrorMessage() has been deprecated and will be removed in r178. Use getWebGL2ErrorMessage() instead."), this.getErrorMessage(1) } } const Mx = yx, Sx = document.querySelector("[data-gl-canvas]"); Mx.isWebGL2Available() ? new _n(Sx) : (console.log("WebGL 2.0 is not available - initializing fallback."), document.documentElement.classList.add("gl-fallback"));
//# sourceMappingURL=feedbacknew-f952699d.js.map
