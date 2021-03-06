(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        810: function (e, t, n) {
            "use strict";
            n.r(t),
                function (e) {
                    /**!
                     * @fileOverview Kickass library to create and place poppers near their reference elements.
                     * @version 1.16.0
                     * @license
                     * Copyright (c) 2016 Federico Zivolo and contributors
                     *
                     * Permission is hereby granted, free of charge, to any person obtaining a copy
                     * of this software and associated documentation files (the "Software"), to deal
                     * in the Software without restriction, including without limitation the rights
                     * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                     * copies of the Software, and to permit persons to whom the Software is
                     * furnished to do so, subject to the following conditions:
                     *
                     * The above copyright notice and this permission notice shall be included in all
                     * copies or substantial portions of the Software.
                     *
                     * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                     * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                     * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                     * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                     * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                     * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                     * SOFTWARE.
                     */
                    var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                        r = function () {
                            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                                if (n && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                            return 0
                        }();
                    var o = n && window.Promise ? function (e) {
                        var t = !1;
                        return function () {
                            t || (t = !0, window.Promise.resolve().then((function () {
                                t = !1, e()
                            })))
                        }
                    } : function (e) {
                        var t = !1;
                        return function () {
                            t || (t = !0, setTimeout((function () {
                                t = !1, e()
                            }), r))
                        }
                    };

                    function i(e) {
                        return e && "[object Function]" === {}.toString.call(e)
                    }

                    function a(e, t) {
                        if (1 !== e.nodeType) return [];
                        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                        return t ? n[t] : n
                    }

                    function f(e) {
                        return "HTML" === e.nodeName ? e : e.parentNode || e.host
                    }

                    function s(e) {
                        if (!e) return document.body;
                        switch (e.nodeName) {
                            case "HTML":
                            case "BODY":
                                return e.ownerDocument.body;
                            case "#document":
                                return e.body
                        }
                        var t = a(e),
                            n = t.overflow,
                            r = t.overflowX,
                            o = t.overflowY;
                        return /(auto|scroll|overlay)/.test(n + o + r) ? e : s(f(e))
                    }

                    function l(e) {
                        return e && e.referenceNode ? e.referenceNode : e
                    }
                    var p = n && !(!window.MSInputMethodContext || !document.documentMode),
                        u = n && /MSIE 10/.test(navigator.userAgent);

                    function c(e) {
                        return 11 === e ? p : 10 === e ? u : p || u
                    }

                    function d(e) {
                        if (!e) return document.documentElement;
                        for (var t = c(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                        var r = n && n.nodeName;
                        return r && "BODY" !== r && "HTML" !== r ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? d(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                    }

                    function h(e) {
                        return null !== e.parentNode ? h(e.parentNode) : e
                    }

                    function m(e, t) {
                        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                            r = n ? e : t,
                            o = n ? t : e,
                            i = document.createRange();
                        i.setStart(r, 0), i.setEnd(o, 0);
                        var a, f, s = i.commonAncestorContainer;
                        if (e !== s && t !== s || r.contains(o)) return "BODY" === (f = (a = s).nodeName) || "HTML" !== f && d(a.firstElementChild) !== a ? d(s) : s;
                        var l = h(e);
                        return l.host ? m(l.host, t) : m(e, h(t).host)
                    }

                    function g(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                            n = "top" === t ? "scrollTop" : "scrollLeft",
                            r = e.nodeName;
                        if ("BODY" === r || "HTML" === r) {
                            var o = e.ownerDocument.documentElement,
                                i = e.ownerDocument.scrollingElement || o;
                            return i[n]
                        }
                        return e[n]
                    }

                    function v(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = g(t, "top"),
                            o = g(t, "left"),
                            i = n ? -1 : 1;
                        return e.top += r * i, e.bottom += r * i, e.left += o * i, e.right += o * i, e
                    }

                    function b(e, t) {
                        var n = "x" === t ? "Left" : "Top",
                            r = "Left" === n ? "Right" : "Bottom";
                        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + r + "Width"], 10)
                    }

                    function w(e, t, n, r) {
                        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], c(10) ? parseInt(n["offset" + e]) + parseInt(r["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(r["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
                    }

                    function y(e) {
                        var t = e.body,
                            n = e.documentElement,
                            r = c(10) && getComputedStyle(n);
                        return {
                            height: w("Height", t, n, r),
                            width: w("Width", t, n, r)
                        }
                    }
                    var E = function (e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        },
                        O = function () {
                            function e(e, t) {
                                for (var n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                                }
                            }
                            return function (t, n, r) {
                                return n && e(t.prototype, n), r && e(t, r), t
                            }
                        }(),
                        x = function (e, t, n) {
                            return t in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n, e
                        },
                        L = Object.assign || function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                            }
                            return e
                        };

                    function M(e) {
                        return L({}, e, {
                            right: e.left + e.width,
                            bottom: e.top + e.height
                        })
                    }

                    function T(e) {
                        var t = {};
                        try {
                            if (c(10)) {
                                t = e.getBoundingClientRect();
                                var n = g(e, "top"),
                                    r = g(e, "left");
                                t.top += n, t.left += r, t.bottom += n, t.right += r
                            } else t = e.getBoundingClientRect()
                        } catch (e) {}
                        var o = {
                                left: t.left,
                                top: t.top,
                                width: t.right - t.left,
                                height: t.bottom - t.top
                            },
                            i = "HTML" === e.nodeName ? y(e.ownerDocument) : {},
                            f = i.width || e.clientWidth || o.width,
                            s = i.height || e.clientHeight || o.height,
                            l = e.offsetWidth - f,
                            p = e.offsetHeight - s;
                        if (l || p) {
                            var u = a(e);
                            l -= b(u, "x"), p -= b(u, "y"), o.width -= l, o.height -= p
                        }
                        return M(o)
                    }

                    function D(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            r = c(10),
                            o = "HTML" === t.nodeName,
                            i = T(e),
                            f = T(t),
                            l = s(e),
                            p = a(t),
                            u = parseFloat(p.borderTopWidth, 10),
                            d = parseFloat(p.borderLeftWidth, 10);
                        n && o && (f.top = Math.max(f.top, 0), f.left = Math.max(f.left, 0));
                        var h = M({
                            top: i.top - f.top - u,
                            left: i.left - f.left - d,
                            width: i.width,
                            height: i.height
                        });
                        if (h.marginTop = 0, h.marginLeft = 0, !r && o) {
                            var m = parseFloat(p.marginTop, 10),
                                g = parseFloat(p.marginLeft, 10);
                            h.top -= u - m, h.bottom -= u - m, h.left -= d - g, h.right -= d - g, h.marginTop = m, h.marginLeft = g
                        }
                        return (r && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (h = v(h, t)), h
                    }

                    function k(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = e.ownerDocument.documentElement,
                            r = D(e, n),
                            o = Math.max(n.clientWidth, window.innerWidth || 0),
                            i = Math.max(n.clientHeight, window.innerHeight || 0),
                            a = t ? 0 : g(n),
                            f = t ? 0 : g(n, "left"),
                            s = {
                                top: a - r.top + r.marginTop,
                                left: f - r.left + r.marginLeft,
                                width: o,
                                height: i
                            };
                        return M(s)
                    }

                    function N(e) {
                        var t = e.nodeName;
                        if ("BODY" === t || "HTML" === t) return !1;
                        if ("fixed" === a(e, "position")) return !0;
                        var n = f(e);
                        return !!n && N(n)
                    }

                    function C(e) {
                        if (!e || !e.parentElement || c()) return document.documentElement;
                        for (var t = e.parentElement; t && "none" === a(t, "transform");) t = t.parentElement;
                        return t || document.documentElement
                    }

                    function F(e, t, n, r) {
                        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            i = {
                                top: 0,
                                left: 0
                            },
                            a = o ? C(e) : m(e, l(t));
                        if ("viewport" === r) i = k(a, o);
                        else {
                            var p = void 0;
                            "scrollParent" === r ? "BODY" === (p = s(f(t))).nodeName && (p = e.ownerDocument.documentElement) : p = "window" === r ? e.ownerDocument.documentElement : r;
                            var u = D(p, a, o);
                            if ("HTML" !== p.nodeName || N(a)) i = u;
                            else {
                                var c = y(e.ownerDocument),
                                    d = c.height,
                                    h = c.width;
                                i.top += u.top - u.marginTop, i.bottom = d + u.top, i.left += u.left - u.marginLeft, i.right = h + u.left
                            }
                        }
                        var g = "number" == typeof (n = n || 0);
                        return i.left += g ? n : n.left || 0, i.top += g ? n : n.top || 0, i.right -= g ? n : n.right || 0, i.bottom -= g ? n : n.bottom || 0, i
                    }

                    function P(e) {
                        return e.width * e.height
                    }

                    function S(e, t, n, r, o) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                        if (-1 === e.indexOf("auto")) return e;
                        var a = F(n, r, i, o),
                            f = {
                                top: {
                                    width: a.width,
                                    height: t.top - a.top
                                },
                                right: {
                                    width: a.right - t.right,
                                    height: a.height
                                },
                                bottom: {
                                    width: a.width,
                                    height: a.bottom - t.bottom
                                },
                                left: {
                                    width: t.left - a.left,
                                    height: a.height
                                }
                            },
                            s = Object.keys(f).map((function (e) {
                                return L({
                                    key: e
                                }, f[e], {
                                    area: P(f[e])
                                })
                            })).sort((function (e, t) {
                                return t.area - e.area
                            })),
                            l = s.filter((function (e) {
                                var t = e.width,
                                    r = e.height;
                                return t >= n.clientWidth && r >= n.clientHeight
                            })),
                            p = l.length > 0 ? l[0].key : s[0].key,
                            u = e.split("-")[1];
                        return p + (u ? "-" + u : "")
                    }

                    function B(e, t, n) {
                        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                            o = r ? C(t) : m(t, l(n));
                        return D(n, o, r)
                    }

                    function H(e) {
                        var t = e.ownerDocument.defaultView.getComputedStyle(e),
                            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                            r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                        return {
                            width: e.offsetWidth + r,
                            height: e.offsetHeight + n
                        }
                    }

                    function W(e) {
                        var t = {
                            left: "right",
                            right: "left",
                            bottom: "top",
                            top: "bottom"
                        };
                        return e.replace(/left|right|bottom|top/g, (function (e) {
                            return t[e]
                        }))
                    }

                    function A(e, t, n) {
                        n = n.split("-")[0];
                        var r = H(e),
                            o = {
                                width: r.width,
                                height: r.height
                            },
                            i = -1 !== ["right", "left"].indexOf(n),
                            a = i ? "top" : "left",
                            f = i ? "left" : "top",
                            s = i ? "height" : "width",
                            l = i ? "width" : "height";
                        return o[a] = t[a] + t[s] / 2 - r[s] / 2, o[f] = n === f ? t[f] - r[l] : t[W(f)], o
                    }

                    function j(e, t) {
                        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                    }

                    function R(e, t, n) {
                        return (void 0 === n ? e : e.slice(0, function (e, t, n) {
                            if (Array.prototype.findIndex) return e.findIndex((function (e) {
                                return e[t] === n
                            }));
                            var r = j(e, (function (e) {
                                return e[t] === n
                            }));
                            return e.indexOf(r)
                        }(e, "name", n))).forEach((function (e) {
                            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                            var n = e.function || e.fn;
                            e.enabled && i(n) && (t.offsets.popper = M(t.offsets.popper), t.offsets.reference = M(t.offsets.reference), t = n(t, e))
                        })), t
                    }

                    function I() {
                        if (!this.state.isDestroyed) {
                            var e = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            e.offsets.reference = B(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = S(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = A(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = R(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                        }
                    }

                    function Y(e, t) {
                        return e.some((function (e) {
                            var n = e.name;
                            return e.enabled && n === t
                        }))
                    }

                    function U(e) {
                        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++) {
                            var o = t[r],
                                i = o ? "" + o + n : e;
                            if (void 0 !== document.body.style[i]) return i
                        }
                        return null
                    }

                    function V() {
                        return this.state.isDestroyed = !0, Y(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[U("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }

                    function _(e) {
                        var t = e.ownerDocument;
                        return t ? t.defaultView : window
                    }

                    function q(e, t, n, r) {
                        n.updateBound = r, _(e).addEventListener("resize", n.updateBound, {
                            passive: !0
                        });
                        var o = s(e);
                        return function e(t, n, r, o) {
                            var i = "BODY" === t.nodeName,
                                a = i ? t.ownerDocument.defaultView : t;
                            a.addEventListener(n, r, {
                                passive: !0
                            }), i || e(s(a.parentNode), n, r, o), o.push(a)
                        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
                    }

                    function z() {
                        this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate))
                    }

                    function G() {
                        var e, t;
                        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, _(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function (e) {
                            e.removeEventListener("scroll", t.updateBound)
                        })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                    }

                    function X(e) {
                        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                    }

                    function J(e, t) {
                        Object.keys(t).forEach((function (n) {
                            var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && X(t[n]) && (r = "px"), e.style[n] = t[n] + r
                        }))
                    }
                    var K = n && /Firefox/i.test(navigator.userAgent);

                    function Q(e, t, n) {
                        var r = j(e, (function (e) {
                                return e.name === t
                            })),
                            o = !!r && e.some((function (e) {
                                return e.name === n && e.enabled && e.order < r.order
                            }));
                        if (!o) {
                            var i = "`" + t + "`",
                                a = "`" + n + "`";
                            console.warn(a + " modifier is required by " + i + " modifier in order to work, be sure to include it before " + i + "!")
                        }
                        return o
                    }
                    var Z = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                        $ = Z.slice(3);

                    function ee(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = $.indexOf(e),
                            r = $.slice(n + 1).concat($.slice(0, n));
                        return t ? r.reverse() : r
                    }
                    var te = "flip",
                        ne = "clockwise",
                        re = "counterclockwise";

                    function oe(e, t, n, r) {
                        var o = [0, 0],
                            i = -1 !== ["right", "left"].indexOf(r),
                            a = e.split(/(\+|\-)/).map((function (e) {
                                return e.trim()
                            })),
                            f = a.indexOf(j(a, (function (e) {
                                return -1 !== e.search(/,|\s/)
                            })));
                        a[f] && -1 === a[f].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        var s = /\s*,\s*|\s+/,
                            l = -1 !== f ? [a.slice(0, f).concat([a[f].split(s)[0]]), [a[f].split(s)[1]].concat(a.slice(f + 1))] : [a];
                        return (l = l.map((function (e, r) {
                            var o = (1 === r ? !i : i) ? "height" : "width",
                                a = !1;
                            return e.reduce((function (e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
                            }), []).map((function (e) {
                                return function (e, t, n, r) {
                                    var o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                        i = +o[1],
                                        a = o[2];
                                    if (!i) return e;
                                    if (0 === a.indexOf("%")) {
                                        var f = void 0;
                                        switch (a) {
                                            case "%p":
                                                f = n;
                                                break;
                                            case "%":
                                            case "%r":
                                            default:
                                                f = r
                                        }
                                        return M(f)[t] / 100 * i
                                    }
                                    if ("vh" === a || "vw" === a) {
                                        return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * i
                                    }
                                    return i
                                }(e, o, t, n)
                            }))
                        }))).forEach((function (e, t) {
                            e.forEach((function (n, r) {
                                X(n) && (o[t] += n * ("-" === e[r - 1] ? -1 : 1))
                            }))
                        })), o
                    }
                    var ie = {
                            placement: "bottom",
                            positionFixed: !1,
                            eventsEnabled: !0,
                            removeOnDestroy: !1,
                            onCreate: function () {},
                            onUpdate: function () {},
                            modifiers: {
                                shift: {
                                    order: 100,
                                    enabled: !0,
                                    fn: function (e) {
                                        var t = e.placement,
                                            n = t.split("-")[0],
                                            r = t.split("-")[1];
                                        if (r) {
                                            var o = e.offsets,
                                                i = o.reference,
                                                a = o.popper,
                                                f = -1 !== ["bottom", "top"].indexOf(n),
                                                s = f ? "left" : "top",
                                                l = f ? "width" : "height",
                                                p = {
                                                    start: x({}, s, i[s]),
                                                    end: x({}, s, i[s] + i[l] - a[l])
                                                };
                                            e.offsets.popper = L({}, a, p[r])
                                        }
                                        return e
                                    }
                                },
                                offset: {
                                    order: 200,
                                    enabled: !0,
                                    fn: function (e, t) {
                                        var n = t.offset,
                                            r = e.placement,
                                            o = e.offsets,
                                            i = o.popper,
                                            a = o.reference,
                                            f = r.split("-")[0],
                                            s = void 0;
                                        return s = X(+n) ? [+n, 0] : oe(n, i, a, f), "left" === f ? (i.top += s[0], i.left -= s[1]) : "right" === f ? (i.top += s[0], i.left += s[1]) : "top" === f ? (i.left += s[0], i.top -= s[1]) : "bottom" === f && (i.left += s[0], i.top += s[1]), e.popper = i, e
                                    },
                                    offset: 0
                                },
                                preventOverflow: {
                                    order: 300,
                                    enabled: !0,
                                    fn: function (e, t) {
                                        var n = t.boundariesElement || d(e.instance.popper);
                                        e.instance.reference === n && (n = d(n));
                                        var r = U("transform"),
                                            o = e.instance.popper.style,
                                            i = o.top,
                                            a = o.left,
                                            f = o[r];
                                        o.top = "", o.left = "", o[r] = "";
                                        var s = F(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                        o.top = i, o.left = a, o[r] = f, t.boundaries = s;
                                        var l = t.priority,
                                            p = e.offsets.popper,
                                            u = {
                                                primary: function (e) {
                                                    var n = p[e];
                                                    return p[e] < s[e] && !t.escapeWithReference && (n = Math.max(p[e], s[e])), x({}, e, n)
                                                },
                                                secondary: function (e) {
                                                    var n = "right" === e ? "left" : "top",
                                                        r = p[n];
                                                    return p[e] > s[e] && !t.escapeWithReference && (r = Math.min(p[n], s[e] - ("right" === e ? p.width : p.height))), x({}, n, r)
                                                }
                                            };
                                        return l.forEach((function (e) {
                                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                            p = L({}, p, u[t](e))
                                        })), e.offsets.popper = p, e
                                    },
                                    priority: ["left", "right", "top", "bottom"],
                                    padding: 5,
                                    boundariesElement: "scrollParent"
                                },
                                keepTogether: {
                                    order: 400,
                                    enabled: !0,
                                    fn: function (e) {
                                        var t = e.offsets,
                                            n = t.popper,
                                            r = t.reference,
                                            o = e.placement.split("-")[0],
                                            i = Math.floor,
                                            a = -1 !== ["top", "bottom"].indexOf(o),
                                            f = a ? "right" : "bottom",
                                            s = a ? "left" : "top",
                                            l = a ? "width" : "height";
                                        return n[f] < i(r[s]) && (e.offsets.popper[s] = i(r[s]) - n[l]), n[s] > i(r[f]) && (e.offsets.popper[s] = i(r[f])), e
                                    }
                                },
                                arrow: {
                                    order: 500,
                                    enabled: !0,
                                    fn: function (e, t) {
                                        var n;
                                        if (!Q(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                        var r = t.element;
                                        if ("string" == typeof r) {
                                            if (!(r = e.instance.popper.querySelector(r))) return e
                                        } else if (!e.instance.popper.contains(r)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                        var o = e.placement.split("-")[0],
                                            i = e.offsets,
                                            f = i.popper,
                                            s = i.reference,
                                            l = -1 !== ["left", "right"].indexOf(o),
                                            p = l ? "height" : "width",
                                            u = l ? "Top" : "Left",
                                            c = u.toLowerCase(),
                                            d = l ? "left" : "top",
                                            h = l ? "bottom" : "right",
                                            m = H(r)[p];
                                        s[h] - m < f[c] && (e.offsets.popper[c] -= f[c] - (s[h] - m)), s[c] + m > f[h] && (e.offsets.popper[c] += s[c] + m - f[h]), e.offsets.popper = M(e.offsets.popper);
                                        var g = s[c] + s[p] / 2 - m / 2,
                                            v = a(e.instance.popper),
                                            b = parseFloat(v["margin" + u], 10),
                                            w = parseFloat(v["border" + u + "Width"], 10),
                                            y = g - e.offsets.popper[c] - b - w;
                                        return y = Math.max(Math.min(f[p] - m, y), 0), e.arrowElement = r, e.offsets.arrow = (x(n = {}, c, Math.round(y)), x(n, d, ""), n), e
                                    },
                                    element: "[x-arrow]"
                                },
                                flip: {
                                    order: 600,
                                    enabled: !0,
                                    fn: function (e, t) {
                                        if (Y(e.instance.modifiers, "inner")) return e;
                                        if (e.flipped && e.placement === e.originalPlacement) return e;
                                        var n = F(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                            r = e.placement.split("-")[0],
                                            o = W(r),
                                            i = e.placement.split("-")[1] || "",
                                            a = [];
                                        switch (t.behavior) {
                                            case te:
                                                a = [r, o];
                                                break;
                                            case ne:
                                                a = ee(r);
                                                break;
                                            case re:
                                                a = ee(r, !0);
                                                break;
                                            default:
                                                a = t.behavior
                                        }
                                        return a.forEach((function (f, s) {
                                            if (r !== f || a.length === s + 1) return e;
                                            r = e.placement.split("-")[0], o = W(r);
                                            var l = e.offsets.popper,
                                                p = e.offsets.reference,
                                                u = Math.floor,
                                                c = "left" === r && u(l.right) > u(p.left) || "right" === r && u(l.left) < u(p.right) || "top" === r && u(l.bottom) > u(p.top) || "bottom" === r && u(l.top) < u(p.bottom),
                                                d = u(l.left) < u(n.left),
                                                h = u(l.right) > u(n.right),
                                                m = u(l.top) < u(n.top),
                                                g = u(l.bottom) > u(n.bottom),
                                                v = "left" === r && d || "right" === r && h || "top" === r && m || "bottom" === r && g,
                                                b = -1 !== ["top", "bottom"].indexOf(r),
                                                w = !!t.flipVariations && (b && "start" === i && d || b && "end" === i && h || !b && "start" === i && m || !b && "end" === i && g),
                                                y = !!t.flipVariationsByContent && (b && "start" === i && h || b && "end" === i && d || !b && "start" === i && g || !b && "end" === i && m),
                                                E = w || y;
                                            (c || v || E) && (e.flipped = !0, (c || v) && (r = a[s + 1]), E && (i = function (e) {
                                                return "end" === e ? "start" : "start" === e ? "end" : e
                                            }(i)), e.placement = r + (i ? "-" + i : ""), e.offsets.popper = L({}, e.offsets.popper, A(e.instance.popper, e.offsets.reference, e.placement)), e = R(e.instance.modifiers, e, "flip"))
                                        })), e
                                    },
                                    behavior: "flip",
                                    padding: 5,
                                    boundariesElement: "viewport",
                                    flipVariations: !1,
                                    flipVariationsByContent: !1
                                },
                                inner: {
                                    order: 700,
                                    enabled: !1,
                                    fn: function (e) {
                                        var t = e.placement,
                                            n = t.split("-")[0],
                                            r = e.offsets,
                                            o = r.popper,
                                            i = r.reference,
                                            a = -1 !== ["left", "right"].indexOf(n),
                                            f = -1 === ["top", "left"].indexOf(n);
                                        return o[a ? "left" : "top"] = i[n] - (f ? o[a ? "width" : "height"] : 0), e.placement = W(t), e.offsets.popper = M(o), e
                                    }
                                },
                                hide: {
                                    order: 800,
                                    enabled: !0,
                                    fn: function (e) {
                                        if (!Q(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                        var t = e.offsets.reference,
                                            n = j(e.instance.modifiers, (function (e) {
                                                return "preventOverflow" === e.name
                                            })).boundaries;
                                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                            if (!0 === e.hide) return e;
                                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                        } else {
                                            if (!1 === e.hide) return e;
                                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                        }
                                        return e
                                    }
                                },
                                computeStyle: {
                                    order: 850,
                                    enabled: !0,
                                    fn: function (e, t) {
                                        var n = t.x,
                                            r = t.y,
                                            o = e.offsets.popper,
                                            i = j(e.instance.modifiers, (function (e) {
                                                return "applyStyle" === e.name
                                            })).gpuAcceleration;
                                        void 0 !== i && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                        var a = void 0 !== i ? i : t.gpuAcceleration,
                                            f = d(e.instance.popper),
                                            s = T(f),
                                            l = {
                                                position: o.position
                                            },
                                            p = function (e, t) {
                                                var n = e.offsets,
                                                    r = n.popper,
                                                    o = n.reference,
                                                    i = Math.round,
                                                    a = Math.floor,
                                                    f = function (e) {
                                                        return e
                                                    },
                                                    s = i(o.width),
                                                    l = i(r.width),
                                                    p = -1 !== ["left", "right"].indexOf(e.placement),
                                                    u = -1 !== e.placement.indexOf("-"),
                                                    c = t ? p || u || s % 2 == l % 2 ? i : a : f,
                                                    d = t ? i : f;
                                                return {
                                                    left: c(s % 2 == 1 && l % 2 == 1 && !u && t ? r.left - 1 : r.left),
                                                    top: d(r.top),
                                                    bottom: d(r.bottom),
                                                    right: c(r.right)
                                                }
                                            }(e, window.devicePixelRatio < 2 || !K),
                                            u = "bottom" === n ? "top" : "bottom",
                                            c = "right" === r ? "left" : "right",
                                            h = U("transform"),
                                            m = void 0,
                                            g = void 0;
                                        if (g = "bottom" === u ? "HTML" === f.nodeName ? -f.clientHeight + p.bottom : -s.height + p.bottom : p.top, m = "right" === c ? "HTML" === f.nodeName ? -f.clientWidth + p.right : -s.width + p.right : p.left, a && h) l[h] = "translate3d(" + m + "px, " + g + "px, 0)", l[u] = 0, l[c] = 0, l.willChange = "transform";
                                        else {
                                            var v = "bottom" === u ? -1 : 1,
                                                b = "right" === c ? -1 : 1;
                                            l[u] = g * v, l[c] = m * b, l.willChange = u + ", " + c
                                        }
                                        var w = {
                                            "x-placement": e.placement
                                        };
                                        return e.attributes = L({}, w, e.attributes), e.styles = L({}, l, e.styles), e.arrowStyles = L({}, e.offsets.arrow, e.arrowStyles), e
                                    },
                                    gpuAcceleration: !0,
                                    x: "bottom",
                                    y: "right"
                                },
                                applyStyle: {
                                    order: 900,
                                    enabled: !0,
                                    fn: function (e) {
                                        var t, n;
                                        return J(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function (e) {
                                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                        })), e.arrowElement && Object.keys(e.arrowStyles).length && J(e.arrowElement, e.arrowStyles), e
                                    },
                                    onLoad: function (e, t, n, r, o) {
                                        var i = B(o, t, e, n.positionFixed),
                                            a = S(n.placement, i, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                        return t.setAttribute("x-placement", a), J(t, {
                                            position: n.positionFixed ? "fixed" : "absolute"
                                        }), n
                                    },
                                    gpuAcceleration: void 0
                                }
                            }
                        },
                        ae = function () {
                            function e(t, n) {
                                var r = this,
                                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                E(this, e), this.scheduleUpdate = function () {
                                    return requestAnimationFrame(r.update)
                                }, this.update = o(this.update.bind(this)), this.options = L({}, e.Defaults, a), this.state = {
                                    isDestroyed: !1,
                                    isCreated: !1,
                                    scrollParents: []
                                }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(L({}, e.Defaults.modifiers, a.modifiers)).forEach((function (t) {
                                    r.options.modifiers[t] = L({}, e.Defaults.modifiers[t] || {}, a.modifiers ? a.modifiers[t] : {})
                                })), this.modifiers = Object.keys(this.options.modifiers).map((function (e) {
                                    return L({
                                        name: e
                                    }, r.options.modifiers[e])
                                })).sort((function (e, t) {
                                    return e.order - t.order
                                })), this.modifiers.forEach((function (e) {
                                    e.enabled && i(e.onLoad) && e.onLoad(r.reference, r.popper, r.options, e, r.state)
                                })), this.update();
                                var f = this.options.eventsEnabled;
                                f && this.enableEventListeners(), this.state.eventsEnabled = f
                            }
                            return O(e, [{
                                key: "update",
                                value: function () {
                                    return I.call(this)
                                }
                            }, {
                                key: "destroy",
                                value: function () {
                                    return V.call(this)
                                }
                            }, {
                                key: "enableEventListeners",
                                value: function () {
                                    return z.call(this)
                                }
                            }, {
                                key: "disableEventListeners",
                                value: function () {
                                    return G.call(this)
                                }
                            }]), e
                        }();
                    ae.Utils = ("undefined" != typeof window ? window : e).PopperUtils, ae.placements = Z, ae.Defaults = ie, t.default = ae
                }.call(this, n(54))
        },
        91: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = u(n(1)),
                o = n(267),
                i = u(n(810)),
                a = n(46),
                f = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                            i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                s = u(n(175)),
                l = u(n(389));

            function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function () {
                    return e
                }, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return (c = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = {
                    opacity: 0
                },
                h = (0, a.animated)(r.default.div(e => ({
                    position: "absolute"
                })));

            function m(e, t) {
                let n = "top",
                    r = {};
                switch (e.split("-")[0]) {
                    case "top":
                        n = "bottom", r.borderRight = "none", r.borderBottom = "none";
                        break;
                    case "bottom":
                        n = "top", r.borderLeft = "none", r.borderTop = "none";
                        break;
                    case "left":
                        n = "right", r.borderLeft = "none", r.borderBottom = "none";
                        break;
                    case "right":
                        n = "left", r.borderRight = "none", r.borderTop = "none"
                }
                return {
                    position: "absolute",
                    [n]: t / 2 * -1,
                    transform: "rotate(45deg)",
                    ...r
                }
            }
            var g = (0, f.forwardRef)((function (e, t) {
                const {
                    children: n,
                    target: r,
                    modifiers: p,
                    placement: u,
                    onReferenceOutOfViewport: g,
                    onFlipped: v,
                    disableDefaultAnimation: b,
                    layerProps: w,
                    isBlocking: y,
                    isModal: E,
                    springProps: O,
                    showArrow: x,
                    arrowSize: L,
                    arrowStyle: M,
                    ...T
                } = e, [D, k] = (0, f.useState)(null), [N, C] = (0, f.useState)(null), F = (0, f.useRef)(), P = (0, f.useRef)(null), S = (0, f.useCallback)(e => {
                    "function" == typeof t ? t(e) : null != t && (t.current = e), F.current = e
                }, [t]), B = (0, f.useCallback)(e => {
                    v && e.originalPlacement !== e.placement && v(e.placement)
                }, [v]), H = (0, f.useCallback)(e => {
                    C({
                        ...e.arrowStyles,
                        ...m(e.placement, L || 0)
                    })
                }, [L]);
                (0, f.useEffect)(() => {
                    let e;
                    e = r ? (0, o.isHTMLElement)(r) ? r : (0, o.isEvent)(r) ? {
                        getBoundingClientRect: () => ({
                            top: r.pageY,
                            right: r.pageX,
                            bottom: r.pageY,
                            left: r.pageX,
                            width: 0,
                            height: 0
                        }),
                        clientWidth: 0,
                        clientHeight: 0
                    } : {
                        getBoundingClientRect: () => ({
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }),
                        clientWidth: 0,
                        clientHeight: 0
                    } : {
                        getBoundingClientRect: () => ({
                            top: 0,
                            right: 0,
                            bottom: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }),
                        clientWidth: 0,
                        clientHeight: 0
                    };
                    const t = navigator.platform.includes("Win"),
                        n = !b,
                        a = new i.default(e, F.current, {
                            placement: u,
                            modifiers: {
                                ...p || {},
                                applyStyle: {
                                    enabled: !1
                                },
                                preventOverflow: {
                                    boundariesElement: "window",
                                    ...p && p.preventOverflow ? p.preventOverflow : {}
                                },
                                computeStyle: {
                                    gpuAcceleration: !t && n
                                },
                                flip: {
                                    enabled: !0,
                                    flipVariationsByContent: !0,
                                    padding: 15
                                },
                                arrow: {
                                    enabled: x,
                                    element: P.current
                                }
                            },
                            onCreate: e => {
                                B(e), k(e.styles), H(e)
                            },
                            onUpdate: e => {
                                B(e), e.hide && g && g(), k(e.styles), H(e)
                            }
                        });
                    return () => {
                        a.destroy()
                    }
                }, [r, p, u, H, x, B, g, b]);
                const W = f.default.createElement(a.Spring, {
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: 1
                    },
                    native: !0
                }, t => f.default.createElement(h, c({}, T, {
                    style: {
                        ...O || (b ? {} : t),
                        ...e.style || {},
                        ...null != D ? D : d
                    },
                    ref: S
                }), x && f.default.createElement("div", {
                    ref: P,
                    style: {
                        ...M,
                        height: L,
                        width: L,
                        boxShadow: "inherit",
                        ...null != N ? N : d
                    }
                }), n));
                return (f.default.createElement(s.default, w || {}, y || E ? f.default.createElement(l.default, {
                    transparent: !E
                }, W) : W))
            }));
            t.default = g
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/Popover.bundle.js.map