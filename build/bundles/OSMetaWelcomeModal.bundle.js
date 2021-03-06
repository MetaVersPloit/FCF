(window.webpackJsonp = window.webpackJsonp || []).push([
    [30], {
        1810: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return n.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, n.default.createElement("path", {
                    fill: "currentColor",
                    d: "M11 7.5a1.5 1.5 0 013 0V8a.5.5 0 00.5.5h7A.5.5 0 0022 8v-.5a1.5 1.5 0 013 0V8c0 .276.225.497.499.53A4 4 0 0129 12.5a1 1 0 01-1 1H8a1 1 0 01-1-1 4 4 0 013.501-3.97c.274-.033.499-.254.499-.53v-.5zM8 15.5a1 1 0 00-1 1v8a4 4 0 004 4h14a4 4 0 004-4v-8a1 1 0 00-1-1H8z"
                }))
            };
            var a, n = (a = l(0)) && a.__esModule ? a : {
                default: a
            }
        },
        646: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.OSMetaWelcomeModalBase = j, t.default = void 0;
            var a = b(l(539)),
                n = b(l(5)),
                u = b(l(1)),
                o = b(l(1810)),
                r = b(l(276)),
                d = b(l(358)),
                i = l(28),
                f = l(11),
                c = b(l(0)),
                s = b(l(2)),
                m = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = E();
                    if (t && t.has(e)) return t.get(e);
                    var l = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var u = a ? Object.getOwnPropertyDescriptor(e, n) : null;
                            u && (u.get || u.set) ? Object.defineProperty(l, n, u) : l[n] = e[n]
                        } l.default = e, t && t.set(e, l);
                    return l
                }(l(16)),
                g = l(58),
                p = b(l(13)),
                h = l(6),
                w = b(l(4));

            function E() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return E = function () {
                    return e
                }, e
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const M = (0, u.default)(s.default)({
                    flex: 1,
                    paddingTop: 42,
                    paddingBottom: 24
                }),
                y = (0, u.default)(s.default)({
                    padding: "0 30px"
                }),
                _ = (0, u.default)(s.default)({
                    alignItems: "center",
                    paddingBottom: 24
                }),
                k = u.default.div(e => ({
                    height: 0,
                    borderTopColor: e.theme.semanticColors.bgLine,
                    borderTopStyle: "solid",
                    borderWidth: 1,
                    marginLeft: 12,
                    marginRight: 12,
                    marginTop: 12,
                    marginBottom: 24
                })),
                v = (0, u.default)(s.default)({
                    padding: "0 24px"
                }),
                x = (0, u.default)(s.default)({
                    flexDirection: "row",
                    alignItems: "center",
                    minHeight: 36,
                    "&:not(last-child)": {
                        marginBottom: 18
                    }
                }),
                B = (0, u.default)(s.default)({
                    flex: 1,
                    paddingLeft: 12
                }),
                C = (0, u.default)(s.default)({
                    alignSelf: "flex-start"
                }),
                O = (0, u.default)(s.default)({
                    marginTop: "auto",
                    padding: "0 98px"
                });

            function T({
                icon: e,
                title: t,
                subtitle: l
            }) {
                const a = (0, h.useTheme)();
                return (c.default.createElement(x, null, c.default.createElement(C, null, c.default.createElement(e, {
                    size: 32,
                    color: a.semanticColors.textPrimary
                })), c.default.createElement(B, null, c.default.createElement(w.default, {
                    use: "body-semibold"
                }, t), c.default.createElement(w.default, {
                    use: "caption",
                    color: a.semanticColors.textSecondary,
                    wrapText: !0
                }, l))))
            }

            function j({
                onHideModal: e,
                isBeta: t
            }) {
                const l = (0, h.useTheme)();
                return (c.default.createElement(g.Modal, {
                    width: 340,
                    height: 513,
                    "aria-label": n.default._("Welcome", null, {
                        hk: "45ftFN"
                    }).toString(),
                    onHideModal: () => {}
                }, c.default.createElement(p.default, {
                    name: "osmetaUpgradeWelcome"
                }, c.default.createElement(M, null, c.default.createElement(y, null, c.default.createElement(_, null, c.default.createElement("img", {
                    src: a.default,
                    width: "158",
                    height: "90"
                })), c.default.createElement(w.default, {
                    use: "title",
                    wrapText: !0,
                    textAlign: "center",
                    css: {
                        marginBottom: 8
                    }
                }, t ? n.default._("Welcome to Messenger Desktop Beta", null, {
                    hk: "25D6Kj"
                }) : n.default._("Welcome to the new Messenger", null, {
                    hk: "GbxiE"
                })), c.default.createElement(w.default, {
                    use: "caption",
                    color: l.semanticColors.textSecondary,
                    wrapText: !0,
                    textAlign: "center"
                }, n.default._("Designed for desktop and how you use it", null, {
                    hk: "2UBlfN"
                }))), c.default.createElement(k, null), c.default.createElement(v, null, c.default.createElement(T, {
                    icon: d.default,
                    title: n.default._("Dark Mode", null, {
                        hk: "2dFJGd"
                    }),
                    subtitle: n.default._("Less glare at night and in low light", null, {
                        hk: "3NQotn"
                    })
                }), c.default.createElement(T, {
                    icon: r.default,
                    title: n.default._("Drag and Drop", null, {
                        hk: "2Ajgx7"
                    }),
                    subtitle: n.default._("Easily share files and images", null, {
                        hk: "1XDuXT"
                    })
                }), c.default.createElement(T, {
                    icon: o.default,
                    title: n.default._("Always Improving", null, {
                        hk: "3A2HCI"
                    }),
                    subtitle: n.default._("Regular updates bring the best features to your desktop", null, {
                        hk: "2QKM1N"
                    })
                })), c.default.createElement(O, null, c.default.createElement(m.default, {
                    "aria-label": n.default._("Continue", null, {
                        hk: "4mVnrz"
                    }).toString(),
                    telemetryName: "osmetaUpgradeModalContinueButton",
                    onClick: () => e(),
                    caption: n.default._("Continue", null, {
                        hk: "4mVnrz"
                    }),
                    size: m.RectangleButtonSize.Medium,
                    use: m.RectangleButtonUse.Primary
                }))))))
            }
            const D = {
                clearModal: i.AppContextActions.clearModal
            };
            var z = (0, f.connect)(null, D)((function ({
                clearModal: e,
                isBeta: t
            }) {
                return c.default.createElement(j, {
                    isBeta: t,
                    onHideModal: e
                })
            }));
            t.default = z
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/OSMetaWelcomeModal.bundle.js.map