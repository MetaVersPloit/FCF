! function (e) {
    function t(t) {
        for (var o, a, c = t[0], u = t[1], i = t[2], s = 0, d = []; s < c.length; s++) a = c[s], Object.prototype.hasOwnProperty.call(r, a) && r[a] && d.push(r[a][0]), r[a] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        for (f && f(t); d.length;) d.shift()();
        return n.push.apply(n, i || []), l()
    }

    function l() {
        for (var e, t = 0; t < n.length; t++) {
            for (var l = n[t], o = !0, c = 1; c < l.length; c++) {
                var u = l[c];
                0 !== r[u] && (o = !1)
            }
            o && (n.splice(t--, 1), e = a(a.s = l[0]))
        }
        return e
    }
    var o = {},
        r = {
            112: 0
        },
        n = [];

    function a(t) {
        if (o[t]) return o[t].exports;
        var l = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(l.exports, l, l.exports, a), l.l = !0, l.exports
    }
    a.e = function (e) {
        var t = [],
            l = r[e];
        if (0 !== l)
            if (l) t.push(l[2]);
            else {
                var o = new Promise((function (t, o) {
                    l = r[e] = [t, o]
                }));
                t.push(l[2] = o);
                var n, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute("nonce", a.nc), c.src = function (e) {
                    return a.p + "" + ({
                        7: "ContextMenu~InboxScreen~TitleBar~native_fallback~uiexplorer",
                        12: "InboxScreen~TitleBar~native_fallback~uiexplorer",
                        21: "TitleBar~native_fallback~uiexplorer",
                        35: "TitleBar",
                        38: "locale0",
                        39: "locale10",
                        40: "locale12",
                        41: "locale14",
                        42: "locale16",
                        43: "locale18",
                        44: "locale2",
                        45: "locale20",
                        46: "locale22",
                        47: "locale24",
                        48: "locale26",
                        49: "locale28",
                        50: "locale30",
                        51: "locale32",
                        52: "locale34",
                        53: "locale36",
                        54: "locale38",
                        55: "locale4",
                        56: "locale40",
                        57: "locale42",
                        58: "locale44",
                        59: "locale46",
                        60: "locale48",
                        61: "locale50",
                        62: "locale52",
                        63: "locale54",
                        64: "locale56",
                        65: "locale58",
                        66: "locale6",
                        67: "locale60",
                        68: "locale62",
                        69: "locale64",
                        70: "locale66",
                        71: "locale68",
                        72: "locale70",
                        73: "locale72",
                        74: "locale74",
                        75: "locale76",
                        76: "locale78",
                        77: "locale8",
                        78: "locale80",
                        79: "locale82",
                        80: "locale84",
                        85: "ContextMenu"
                    } [e] || e) + ".bundle.js"
                }(e);
                var u = new Error;
                n = function (t) {
                    c.onerror = c.onload = null, clearTimeout(i);
                    var l = r[e];
                    if (0 !== l) {
                        if (l) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                n = t && t.target && t.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")", u.name = "ChunkLoadError", u.type = o, u.request = n, l[1](u)
                        }
                        r[e] = void 0
                    }
                };
                var i = setTimeout((function () {
                    n({
                        type: "timeout",
                        target: c
                    })
                }), 12e4);
                c.onerror = c.onload = n, document.head.appendChild(c)
            } return Promise.all(t)
    }, a.m = e, a.c = o, a.d = function (e, t, l) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: l
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if (a.r(l), Object.defineProperty(l, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) a.d(l, o, function (t) {
                return e[t]
            }.bind(null, o));
        return l
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "bundles/", a.oe = function (e) {
        throw console.error(e), e
    };
    var c = window.webpackJsonp = window.webpackJsonp || [],
        u = c.push.bind(c);
    c.push = t, c = c.slice();
    for (var i = 0; i < c.length; i++) t(c[i]);
    var f = u;
    n.push([1466, 2, 1, 4, 5, 3, 6, 15, 83]), l()
}({
    1466: function (e, t, l) {
        l(106), e.exports = l(1467)
    },
    1467: function (e, t, l) {
        "use strict";
        var o = u(l(1468)),
            r = u(l(108)),
            n = u(l(29)),
            a = u(l(0)),
            c = u(l(126));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            return a.default.createElement(c.default, {
                hideTitlebar: !0
            }, a.default.createElement(o.default, null))
        }(0, r.default)(() => {
            const e = document.getElementById("root");
            e && n.default.render(a.default.createElement(i, null), e)
        })
    },
    1468: function (e, t, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function () {
            const e = window.location.search,
                t = (0, r.parseQueryString)(e),
                l = (e, t, l, r) => {
                    n.default.metrics.trackStrictEvent((0, o.UserInteractionEvent)({
                        event: l,
                        target: t,
                        surface: e,
                        context: r
                    }))
                };
            if (t.dialog_props) {
                const e = JSON.parse(t.dialog_props);
                return (c.default.createElement(i.default, {
                    onEvent: l
                }, c.default.createElement(a.default, {
                    name: "roomsIncomingDialog"
                }, c.default.createElement(u.default, s({}, e, {
                    onAcceptCall: n.default.rooms.joinRoom,
                    onRejectCall: n.default.rooms.reject
                })))))
            }
            return null
        };
        var o = l(24),
            r = l(104),
            n = f(l(9)),
            a = f(l(13)),
            c = f(l(0)),
            u = f(l(528)),
            i = f(l(122));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s() {
            return (s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var l = arguments[t];
                    for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o])
                }
                return e
            }).apply(this, arguments)
        }
    }
});
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/rooms_incoming.bundle.js.map