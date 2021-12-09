! function (e) {
    function t(t) {
        for (var r, o, u = t[0], i = t[1], c = t[2], s = 0, d = []; s < u.length; s++) o = u[s], Object.prototype.hasOwnProperty.call(n, o) && n[o] && d.push(n[o][0]), n[o] = 0;
        for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
        for (f && f(t); d.length;) d.shift()();
        return a.push.apply(a, c || []), l()
    }

    function l() {
        for (var e, t = 0; t < a.length; t++) {
            for (var l = a[t], r = !0, u = 1; u < l.length; u++) {
                var i = l[u];
                0 !== n[i] && (r = !1)
            }
            r && (a.splice(t--, 1), e = o(o.s = l[0]))
        }
        return e
    }
    var r = {},
        n = {
            113: 0
        },
        a = [];

    function o(t) {
        if (r[t]) return r[t].exports;
        var l = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(l.exports, l, l.exports, o), l.l = !0, l.exports
    }
    o.e = function (e) {
        var t = [],
            l = n[e];
        if (0 !== l)
            if (l) t.push(l[2]);
            else {
                var r = new Promise((function (t, r) {
                    l = n[e] = [t, r]
                }));
                t.push(l[2] = r);
                var a, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, o.nc && u.setAttribute("nonce", o.nc), u.src = function (e) {
                    return o.p + "" + ({
                        1: "Popover~feedback~incoming_call~messenger~missed_call~native_fallback~rooms_incoming~uiexplorer",
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
                var i = new Error;
                a = function (t) {
                    u.onerror = u.onload = null, clearTimeout(c);
                    var l = n[e];
                    if (0 !== l) {
                        if (l) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                a = t && t.target && t.target.src;
                            i.message = "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")", i.name = "ChunkLoadError", i.type = r, i.request = a, l[1](i)
                        }
                        n[e] = void 0
                    }
                };
                var c = setTimeout((function () {
                    a({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = a, document.head.appendChild(u)
            } return Promise.all(t)
    }, o.m = e, o.c = r, o.d = function (e, t, l) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: l
        })
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var l = Object.create(null);
        if (o.r(l), Object.defineProperty(l, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) o.d(l, r, function (t) {
                return e[t]
            }.bind(null, r));
        return l
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "bundles/", o.oe = function (e) {
        throw console.error(e), e
    };
    var u = window.webpackJsonp = window.webpackJsonp || [],
        i = u.push.bind(u);
    u.push = t, u = u.slice();
    for (var c = 0; c < u.length; c++) t(u[c]);
    var f = i;
    a.push([1471, 2, 5, 9, 22]), l()
}({
    1471: function (e, t, l) {
        l(106), e.exports = l(1472)
    },
    1472: function (e, t, l) {
        "use strict";
        var r = l(37),
            n = d(l(9)),
            a = d(l(108)),
            o = d(l(201)),
            u = d(l(1473)),
            i = l(6),
            c = d(l(29)),
            f = function (e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var l = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, n) : null;
                        a && (a.get || a.set) ? Object.defineProperty(l, n, a) : l[n] = e[n]
                    } l.default = e, t && t.set(e, l);
                return l
            }(l(0));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function () {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function p() {
            const e = (0, f.useMemo)(() => (0, o.default)(n.default.platform.osName), []);
            return (f.default.createElement(i.ThemeContextProvider, {
                theme: (0, i.getTheme)("dark", n.default.platform.osName)
            }, f.default.createElement(r.Global, {
                styles: e
            }), f.default.createElement(u.default, null)))
        }(0, a.default)(() => {
            const e = document.getElementById("root");
            e && c.default.render(f.default.createElement(p, null), e)
        })
    },
    1473: function (e, t, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function (e) {
            const [t, l] = function () {
                const [e, t] = (0, p.useState)(null), [l, r] = (0, p.useState)(null), [n, a] = (0, p.useState)(!1);
                return (0, p.useEffect)(() => {
                    const e = {
                            fetchWindowIcons: !0,
                            thumbnailSize: {
                                width: u.TILE_WIDTH * window.devicePixelRatio,
                                height: u.TILE_HEIGHT * window.devicePixelRatio
                            }
                        },
                        l = e => e.reduce((e, t) => e.set(t.id, t), new Map);
                    s.default.rtc.getDesktopCapturerSources({
                        types: ["window"],
                        ...e
                    }).then(e => {
                        a(e.some(e => e.thumbnail.isEmpty())), r(l(e))
                    }), s.default.rtc.getDesktopCapturerSources({
                        types: ["screen"],
                        ...e
                    }).then(e => t(l(e)))
                }, []), [{
                    screens: e,
                    windows: l
                }, n]
            }(), [r, a] = (0, p.useState)(null), [c, m] = (0, p.useState)("screens"), b = t[c], y = (0, g.useTheme)(), S = (0, p.useCallback)(() => {
                const e = s.default.rtc.getSelectDisplayMediaDeferred();
                e && r && e.resolve(r)
            }, [r]), E = (0, p.useCallback)(() => {
                const e = s.default.rtc.getSelectDisplayMediaDeferred();
                e && e.reject(new Error("User canceled screen/window selection."))
            }, []);
            return p.default.createElement(w, null, p.default.createElement(k, {
                textAlign: "center",
                use: "body-semibold",
                numberOfLines: 1
            }, f.default._("Share Screen", null, {
                hk: "1V7lYf"
            })), p.default.createElement(P, null, p.default.createElement(o.default, {
                telemetryName: "screenShareSourceSelection",
                options: [{
                    name: f.default._("Your Entire Screen", null, {
                        hk: "1Kcnix"
                    }).toString(),
                    key: "screens",
                    ariaLabel: f.default._("Your Entire Screen", null, {
                        hk: "1Kcnix"
                    }).toString()
                }, {
                    name: f.default._("Application Window", null, {
                        hk: "1ds2wR"
                    }).toString(),
                    key: "windows",
                    ariaLabel: f.default._("Application Window", null, {
                        hk: "1ds2wR"
                    }).toString()
                }],
                selectedOptionKey: c,
                onSelectionChange: e => m(e)
            })), l && s.default.platform.isMacPlatform && p.default.createElement(_, null, p.default.createElement(O, null, p.default.createElement(d.default, {
                size: 24,
                color: y.colors.honey
            }), p.default.createElement(h.default, {
                use: "body-bold",
                numberOfLines: 1 / 0,
                style: {
                    flexShrink: 1
                }
            }, f.default._("Please grant {app name} the Screen Recording permission in System Preferences.", [f.default._param("app name", i.displayName)], {
                hk: "4brcSf"
            }))), p.default.createElement(n.default, {
                "aria-label": f.default._("Open System Preferences", null, {
                    hk: "3tWjmb"
                }).toString(),
                telemetryName: "ScreenSharingSytemPreferences",
                caption: f.default._("Open System Preferences", null, {
                    hk: "3tWjmb"
                }).toString(),
                size: n.RectangleButtonSize.Medium,
                use: n.RectangleButtonUse.Secondary,
                onClick: () => {
                    s.default.platform.openExternalURL("x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"), E()
                }
            })), p.default.createElement(x, null, b ? [...b.values()].map(e => p.default.createElement(u.default, {
                key: e.id,
                source: e,
                onSelect: () => a(e.id),
                selected: e.id === r
            })) : p.default.createElement(C, null)), p.default.createElement(v, null, p.default.createElement(n.default, {
                "aria-label": f.default._("Cancel Screen Sharing", null, {
                    hk: "2dC9e"
                }).toString(),
                telemetryName: "ScreenSharingCancelSourceSelection",
                caption: f.default._("Cancel", null, {
                    hk: "2O2yFw"
                }).toString(),
                size: n.RectangleButtonSize.Medium,
                use: n.RectangleButtonUse.Secondary,
                onClick: E
            }), p.default.createElement(j, {
                disabled: null === r,
                "aria-label": f.default._("Start Screen Sharing", null, {
                    hk: "3Hr4Te"
                }).toString(),
                telemetryName: "ScreenSharingSelectSource",
                caption: f.default._("Share", null, {
                    hk: "3Mgdak"
                }).toString(),
                size: n.RectangleButtonSize.Medium,
                use: n.RectangleButtonUse.Primary,
                onClick: S
            })))
        };
        var r = S(l(99)),
            n = y(l(16)),
            a = y(l(82)),
            o = S(l(344)),
            u = y(l(1475)),
            i = l(83),
            c = l(165),
            f = S(l(5)),
            s = S(l(9)),
            d = S(l(163)),
            p = y(l(0)),
            m = S(l(2)),
            g = l(6),
            h = S(l(4));

        function b() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return b = function () {
                return e
            }, e
        }

        function y(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = b();
            if (t && t.has(e)) return t.get(e);
            var l = {},
                r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, n) : null;
                    a && (a.get || a.set) ? Object.defineProperty(l, n, a) : l[n] = e[n]
                } return l.default = e, t && t.set(e, l), l
        }

        function S(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const w = (0, r.default)(m.default, {
                target: "e8uxrqi0",
                label: "Container"
            })(e => ({
                height: "100vh",
                width: "100vw",
                display: "flex",
                backgroundColor: (0, c.getColorTheme)("light").colors.base60,
                ...e.theme.effects.blur
            }), ""),
            x = (0, r.default)(m.default, {
                target: "e8uxrqi1",
                label: "ScrollView"
            })(e => ({
                overflowY: "scroll",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexShrink: 1,
                flexGrow: 1,
                padding: "1px 4px 52px",
                marginTop: 12,
                marginLeft: 8,
                marginRight: 4,
                "::-webkit-scrollbar": {
                    width: 4,
                    backgroundColor: "transparent"
                },
                "::-webkit-scrollbar-thumb": {
                    backgroundColor: e.theme.colors.base50,
                    borderRadius: "mac" === e.theme.os ? 2 : 0,
                    marginRight: 3
                }
            }), ""),
            v = (0, r.default)(m.default, {
                target: "e8uxrqi2",
                label: "ButtonContainer"
            })(e => ({
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: 12,
                backgroundColor: e.theme.semanticColors.bgSurfaceBlurred,
                ...e.theme.effects.blur
            }), ""),
            E = (0, r.default)(m.default, {
                target: "e8uxrqi3",
                label: "LoadingContainer"
            })({
                name: "cry1ct",
                styles: "display:flex;flex-grow:1;height:100%;margin-bottom:40px;justify-content:center;align-items:center;"
            }),
            k = (0, r.default)(h.default, {
                target: "e8uxrqi4",
                label: "Title"
            })({
                name: "g1jgi3",
                styles: "padding:14px;padding-bottom:20px;"
            }),
            _ = (0, r.default)(m.default, {
                target: "e8uxrqi5",
                label: "PermissionsError"
            })(e => ({
                padding: 8,
                margin: 14,
                marginBottom: 0,
                borderRadius: "mac" === e.theme.os ? 4 : 0,
                border: `1px solid ${e.theme.colors.base30}`
            }), ""),
            O = (0, r.default)(m.default, {
                target: "e8uxrqi6",
                label: "ErrorMessage"
            })({
                name: "1c7sp5u",
                styles: "margin-bottom:12px;flex-direction:row;align-items:center;& svg{flex-shrink:0;margin-right:8px;}"
            }),
            P = (0, r.default)(m.default, {
                target: "e8uxrqi7",
                label: "TabbarContainer"
            })({
                name: "1ho43uv",
                styles: "margin-left:12px;margin-right:12px;"
            }),
            j = (0, r.default)(n.default, {
                target: "e8uxrqi8",
                label: "StartScreenSharingButton"
            })({
                name: "1qhmto6",
                styles: "margin-left:12px;"
            });

        function C() {
            return p.default.createElement(E, null, p.default.createElement(a.default, {
                size: a.SpinnerSize.Small,
                delay: 200,
                css: {
                    marginTop: 2,
                    marginBottom: 12
                },
                accomodateDiagonalSize: !0
            }))
        }
    },
    1475: function (e, t, l) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function (e) {
            const {
                source: t,
                onSelect: l,
                selected: r
            } = e;
            return (a.default.createElement(i, {
                onClick: l,
                active: r
            }, a.default.createElement(c, {
                src: t.thumbnail.toDataURL()
            }), a.default.createElement(f, null, t.appIcon && a.default.createElement(d, {
                src: t.appIcon.toDataURL()
            }), a.default.createElement(s, {
                numberOfLines: 1,
                wrapText: !1,
                use: "subtext-semibold"
            }, t.name))))
        }, t.TILE_HEIGHT = t.TILE_WIDTH = void 0;
        var r = u(l(2)),
            n = u(l(1)),
            a = u(l(0)),
            o = u(l(4));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.TILE_WIDTH = 232;
        t.TILE_HEIGHT = 130;
        const i = (0, n.default)(r.default)(e => ({
                width: 232,
                backgroundColor: e.theme.colors.flatBase40,
                marginBottom: 18,
                borderRadius: "mac" === e.theme.os ? 4 : 0,
                border: `1px solid ${e.active?e.theme.colors.blue:e.theme.colors.base30}`,
                boxShadow: e.active ? `0 0 0 1px ${e.theme.colors.blue}` : void 0,
                userSelect: "none",
                overflow: "hidden"
            })),
            c = n.default.img({
                width: 232,
                height: 130,
                objectFit: "cover"
            }),
            f = (0, n.default)(r.default)({
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                height: 36,
                padding: "0 10px"
            }),
            s = (0, n.default)(o.default)({
                flexGrow: 1,
                flexShrink: 1
            }),
            d = n.default.img({
                width: 22,
                height: 22,
                objectFit: "contain",
                marginRight: 8
            })
    }
});
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/screensharing.bundle.js.map