(window.webpackJsonp = window.webpackJsonp || []).push([
    [35], {
        1463: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return n.default.createElement("svg", {
                    viewBox: "0 0 140 140",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, n.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, n.default.createElement("path", {
                    fill: "#000",
                    d: "M70 0C31.3 0 0 31.3 0 70c0 13 3.6 25.3 9.8 35.7l-7 31.5 31.5-7C44.7 136.4 57 140 70 140c38.7 0 70-31.3 70-70S108.7 0 70 0z"
                }), n.default.createElement("path", {
                    fill: "#FFF",
                    d: "M108.5 90.8c-1.3 1.6-4 4-7.6 4-5.4 0-7.2-3.9-8.8-8l-8-19.9-8.2 19.9c-1.4 3.4-2.9 8-8.8 8s-7.4-4.6-8.8-8L44.4 53.9h11.8L67 81l8.3-20.1c1.3-3.2 2.8-8 8.7-8 5.9 0 7.4 4.8 8.7 8l8.8 21.8c3.6-5.4 5.7-11.8 5.7-18.8 0-18.8-15.3-34-34.2-34-10.8 0-20.9 4.2-28.5 11.8C37 49.2 32.8 59.3 32.8 70S37 90.8 44.6 98.4c7.6 7.6 17.8 11.8 28.5 11.8 3.7 0 6.4-.3 9.9-1.3v10.7c-3.6.8-6.2 1-9.9 1-6.8 0-13.5-1.3-19.8-4-6-2.5-11.5-6.2-16.1-10.8-4.7-4.6-8.3-10-10.9-16.1-2.6-6.2-4-12.9-4-19.7s1.3-13.4 4-19.7c2.6-6 6.2-11.4 10.9-16.1 4.7-4.6 10.1-8.3 16.1-10.8 6.3-2.6 12.9-4 19.7-4 24.6 0 44.6 19.9 44.6 44.4 0 10.2-3.4 19.6-9.1 27z"
                })))
            };
            var a, n = (a = l(0)) && a.__esModule ? a : {
                default: a
            }
        },
        1464: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return n.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 140 140",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, n.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, n.default.createElement("path", {
                    fill: "#FFF",
                    d: "M70 0C31.3 0 0 31.3 0 70c0 13 3.6 25.3 9.8 35.7l-7 31.5 31.5-7C44.7 136.4 57 140 70 140c38.7 0 70-31.3 70-70S108.7 0 70 0z"
                }), n.default.createElement("path", {
                    fill: "#000",
                    d: "M108.5 90.8c-1.3 1.6-4 4-7.6 4-5.4 0-7.2-3.9-8.8-8l-8-19.9-8.2 19.9c-1.4 3.4-2.9 8-8.8 8s-7.4-4.6-8.8-8L44.4 53.9h11.8L67 81l8.3-20.1c1.3-3.2 2.8-8 8.7-8 5.9 0 7.4 4.8 8.7 8l8.8 21.8c3.6-5.4 5.7-11.8 5.7-18.8 0-18.8-15.3-34-34.2-34-10.8 0-20.9 4.2-28.5 11.8C37 49.2 32.8 59.3 32.8 70S37 90.8 44.6 98.4c7.6 7.6 17.8 11.8 28.5 11.8 3.7 0 6.4-.3 9.9-1.3v10.7c-3.6.8-6.2 1-9.9 1-6.8 0-13.5-1.3-19.8-4-6-2.5-11.5-6.2-16.1-10.8-4.7-4.6-8.3-10-10.9-16.1-2.6-6.2-4-12.9-4-19.7s1.3-13.4 4-19.7c2.6-6 6.2-11.4 10.9-16.1 4.7-4.6 10.1-8.3 16.1-10.8 6.3-2.6 12.9-4 19.7-4 24.6 0 44.6 19.9 44.6 44.4 0 10.2-3.4 19.6-9.1 27z"
                })))
            };
            var a, n = (a = l(0)) && a.__esModule ? a : {
                default: a
            }
        },
        524: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const t = (0, p.useTheme)(),
                    l = (0, o.default)(),
                    n = (0, f.useMemo)(() => l.window.getWindow(), [l]),
                    u = (0, f.useMemo)(() => l.updates.isUpdateSupported(), [l]),
                    [s, v] = (0, f.useState)(() => n.isMaximized()),
                    [E, M] = (0, f.useState)(() => n.isFullScreen()),
                    B = (0, f.useMemo)(() => n.isResizable, [n]),
                    {
                        globalSettings: O
                    } = (0, i.default)(),
                    F = () => v(!0),
                    L = () => v(!1),
                    j = () => M(!0),
                    I = () => M(!1),
                    U = O.enableVersionBadge && e.storeIsAvailable;
                if ((0, f.useEffect)(() => (n && (n.on("maximize", F), n.on("unmaximize", L), n.on("enter-full-screen", j), n.on("leave-full-screen", I)), () => {
                        n && (n.removeListener("maximize", F), n.removeListener("unmaximize", L), n.removeListener("enter-full-screen", j), n.removeListener("leave-full-screen", I))
                    }), [n]), !n) return null;
                const D = e => f.default.createElement(b.default, {
                        isDev: !1,
                        version: l.platform.getAppVersion(),
                        buildInfo: l.platform.getBuildInfo(),
                        lastUpdateEvent: l.updates.getLastUpdateEvent(),
                        updateBadgeEnabled: e
                    }),
                    T = () => f.default.createElement(h.default, {
                        lastUpdateEvent: l.updates.getLastUpdateEvent()
                    });
                return (f.default.createElement(f.default.Fragment, null, f.default.createElement(m.default, {
                    name: "titlebar"
                }, "mac" === t.os ? f.default.createElement(a.default, null, O.enableUpdateBadge && u && T(), U && D(O.enableUpdateBadge), O.enablePerformanceInformation && e.showPerformanceInformation && f.default.createElement(g.default, null)) : f.default.createElement(a.default, null, f.default.createElement(w, null, f.default.createElement(C, {
                    onClick: () => l.platform.openMenuOptions()
                }, t.themeIsDark ? f.default.createElement(c.default, {
                    color: t.colors.base10,
                    size: 18
                }) : f.default.createElement(d.default, {
                    color: t.colors.base10,
                    size: 18
                }))), f.default.createElement(z, null, O.enableUpdateBadge && u && T(), U && D(O.enableUpdateBadge), O.enablePerformanceInformation && e.showPerformanceInformation && f.default.createElement(g.default, null), f.default.createElement(k, {
                    onClick: () => n.minimize()
                }, _), !s && !E && f.default.createElement(k, {
                    onClick: () => l.window.maximize(),
                    disabled: !B
                }, P), (s || E) && f.default.createElement(k, {
                    disabled: !B,
                    onClick: () => {
                        E ? n.setFullScreen(!1) : s && n.unmaximize()
                    }
                }, S), f.default.createElement(y, {
                    onClick: () => {
                        l.asl.incrementStat(r.AslStat.WindowCloseFromTitleBar, 1), n.close()
                    }
                }, x))))))
            };
            var a = E(l(379)),
                n = l(164),
                r = l(67),
                o = E(l(102)),
                i = E(l(118)),
                u = E(l(1)),
                d = E(l(1463)),
                c = E(l(1464)),
                f = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = v();
                    if (t && t.has(e)) return t.get(e);
                    var l = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = a ? Object.getOwnPropertyDescriptor(e, n) : null;
                            r && (r.get || r.set) ? Object.defineProperty(l, n, r) : l[n] = e[n]
                        } l.default = e, t && t.set(e, l);
                    return l
                }(l(0)),
                s = E(l(2)),
                m = E(l(13)),
                p = l(6),
                g = E(l(525)),
                h = E(l(526)),
                b = E(l(316));

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function () {
                    return e
                }, e
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const w = (0, u.default)(s.default)({
                    height: "fit-content",
                    flexDirection: "row",
                    marginTop: -3
                }),
                z = (0, u.default)(s.default)({
                    height: "fit-content",
                    flexDirection: "row",
                    pointerEvents: "none",
                    marginTop: -3
                }),
                M = (0, u.default)(s.default)(e => ({
                    width: 46,
                    height: (0, n.getTitleBarHeight)(e.theme),
                    justifyContent: "center",
                    alignItems: "center",
                    pointerEvents: "auto",
                    fontFamily: "PlatformAgnosticSegoeMDL2",
                    WebkitAppRegion: "no-drag",
                    opacity: e.disabled ? .25 : 1,
                    transition: "background-color 125ms ease-in, color 125ms ease-in"
                })),
                C = (0, u.default)(M)(e => ({
                    width: (0, n.getTitleBarHeight)(e.theme),
                    margin: 2
                })),
                k = (0, u.default)(M)(e => ({
                    ":hover": e.disabled ? {} : {
                        backgroundColor: e.theme.colors.base50
                    },
                    ":active": e.disabled ? {} : {
                        backgroundColor: e.theme.colors.base60
                    }
                })),
                y = (0, u.default)(M)(e => ({
                    ":hover": {
                        color: "white",
                        backgroundColor: e.theme.colors.scarlet,
                        ":active": {
                            backgroundColor: "rgba(255,49,30,0.7)"
                        }
                    }
                })),
                _ = f.default.createElement("span", null, "???"),
                P = f.default.createElement("span", null, "???"),
                S = f.default.createElement("span", null, "???"),
                x = f.default.createElement("span", null, "???")
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/TitleBar.bundle.js.map