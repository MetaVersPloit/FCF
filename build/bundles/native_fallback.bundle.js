! function (e) {
    function l(l) {
        for (var o, a, c = l[0], u = l[1], i = l[2], d = 0, s = []; d < c.length; d++) a = c[d], Object.prototype.hasOwnProperty.call(r, a) && r[a] && s.push(r[a][0]), r[a] = 0;
        for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (e[o] = u[o]);
        for (f && f(l); s.length;) s.shift()();
        return n.push.apply(n, i || []), t()
    }

    function t() {
        for (var e, l = 0; l < n.length; l++) {
            for (var t = n[l], o = !0, c = 1; c < t.length; c++) {
                var u = t[c];
                0 !== r[u] && (o = !1)
            }
            o && (n.splice(l--, 1), e = a(a.s = t[0]))
        }
        return e
    }
    var o = {},
        r = {
            111: 0
        },
        n = [];

    function a(l) {
        if (o[l]) return o[l].exports;
        var t = o[l] = {
            i: l,
            l: !1,
            exports: {}
        };
        return e[l].call(t.exports, t, t.exports, a), t.l = !0, t.exports
    }
    a.e = function (e) {
        var l = [],
            t = r[e];
        if (0 !== t)
            if (t) l.push(t[2]);
            else {
                var o = new Promise((function (l, o) {
                    t = r[e] = [l, o]
                }));
                l.push(t[2] = o);
                var n, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute("nonce", a.nc), c.src = function (e) {
                    return a.p + "" + ({
                        3: "Popover",
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
                        80: "locale84"
                    } [e] || e) + ".bundle.js"
                }(e);
                var u = new Error;
                n = function (l) {
                    c.onerror = c.onload = null, clearTimeout(i);
                    var t = r[e];
                    if (0 !== t) {
                        if (t) {
                            var o = l && ("load" === l.type ? "missing" : l.type),
                                n = l && l.target && l.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + o + ": " + n + ")", u.name = "ChunkLoadError", u.type = o, u.request = n, t[1](u)
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
            } return Promise.all(l)
    }, a.m = e, a.c = o, a.d = function (e, l, t) {
        a.o(e, l) || Object.defineProperty(e, l, {
            enumerable: !0,
            get: t
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, l) {
        if (1 & l && (e = a(e)), 8 & l) return e;
        if (4 & l && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (a.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & l && "string" != typeof e)
            for (var o in e) a.d(t, o, function (l) {
                return e[l]
            }.bind(null, o));
        return t
    }, a.n = function (e) {
        var l = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(l, "a", l), l
    }, a.o = function (e, l) {
        return Object.prototype.hasOwnProperty.call(e, l)
    }, a.p = "bundles/", a.oe = function (e) {
        throw console.error(e), e
    };
    var c = window.webpackJsonp = window.webpackJsonp || [],
        u = c.push.bind(c);
    c.push = l, c = c.slice();
    for (var i = 0; i < c.length; i++) l(c[i]);
    var f = u;
    n.push([1461, 2, 1, 4, 7, 12, 21, 35]), t()
}({
    1461: function (e, l, t) {
        t(106), e.exports = t(1462)
    },
    1462: function (e, l, t) {
        "use strict";
        var o = t(37),
            r = h(t(9)),
            n = h(t(108)),
            a = h(t(1)),
            c = h(t(2)),
            u = h(t(201)),
            i = t(6),
            f = h(t(29)),
            d = h(t(0)),
            s = h(t(357)),
            p = h(t(524));

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const v = (0, a.default)(c.default)({
            height: "100vh",
            width: "100vw"
        });

        function m() {
            return d.default.createElement(i.ThemeContextProvider, null, d.default.createElement(o.Global, {
                styles: u.default
            }), d.default.createElement(v, null, d.default.createElement(s.default, {
                onRestart: () => {
                    r.default.app.relaunch()
                }
            })), d.default.createElement(p.default, null))
        }(0, n.default)(() => {
            const e = document.getElementById("root");
            e && f.default.render(d.default.createElement(m, null), e)
        })
    }
});
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/native_fallback.bundle.js.map