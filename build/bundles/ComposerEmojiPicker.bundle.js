(window.webpackJsonp = window.webpackJsonp || []).push([
    [16], {
        582: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = h(n(142)),
                a = h(n(658)),
                l = h(n(188)),
                r = h(n(91)),
                u = h(n(5)),
                i = n(72),
                f = h(n(1)),
                c = g(n(0)),
                d = h(n(2)),
                s = g(n(16)),
                p = h(n(4));

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function () {
                    return e
                }, e
            }

            function g(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = o ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const b = (0, f.default)(d.default)(e => ({
                boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.20)",
                backgroundColor: e.theme.semanticColors.bgSurfaceBlurred,
                backdropFilter: "blur(15px)",
                pointerEvents: "auto",
                bottom: `${e.positionBottom}px`,
                right: `${e.positionRight}px`,
                width: 340,
                height: 324
            }));
            var k = c.default.forwardRef((function (e, t) {
                var n, a;
                const [u] = (0, i.useUserSetting)("emojiSkintone"), {
                    target: f,
                    onPickEmoji: d,
                    sortedEmojiFrequencyList: s
                } = e;
                return c.default.createElement(r.default, {
                    target: f,
                    placement: "right-end",
                    disableDefaultAnimation: !0,
                    ref: t
                }, c.default.createElement(l.default, null, c.default.createElement(b, {
                    positionBottom: null !== (n = e.positionBottom) && void 0 !== n ? n : 40,
                    positionRight: null !== (a = e.positionRight) && void 0 !== a ? a : -18
                }, null == u ? c.default.createElement(w, null) : c.default.createElement(o.default, {
                    defaultSkintone: u,
                    onEmojiClick: d,
                    pickerType: "compact",
                    sortedEmojiFrequencyList: s
                }))))
            }));
            t.default = k;
            const y = (0, f.default)(d.default)({
                    flex: 1,
                    padding: 10
                }),
                E = (0, f.default)(d.default)({
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }),
                j = (0, f.default)(p.default)(e => ({
                    textAlign: "center",
                    marginTop: 5,
                    marginBottom: 5,
                    color: e.theme.semanticColors.textSecondary
                })),
                S = (0, f.default)(s.default)({
                    marginRight: "auto",
                    marginLeft: "auto"
                });

            function w() {
                const e = (0, i.useUserSetting)("emojiSkintone")[1],
                    [t, n] = (0, c.useState)("none"),
                    o = u.default._("Done", null, {
                        hk: "3yPNrM"
                    });
                return c.default.createElement(y, null, c.default.createElement(E, null, c.default.createElement(p.default, {
                    use: "title"
                }, u.default._("Emoji Skintone", null, {
                    hk: "2M2scA"
                })), c.default.createElement(j, {
                    use: "subtext",
                    wrapText: !0
                }, u.default._("Select a default skintone. This can be changed anytime in preferences", null, {
                    hk: "4cs2o5"
                })), c.default.createElement(a.default, {
                    selectedSkintone: t,
                    onSkintoneSelected: e => n(e)
                })), c.default.createElement(S, {
                    "aria-label": o.toString(),
                    telemetryName: "emoji_firstrun_done",
                    size: s.RectangleButtonSize.Medium,
                    use: s.RectangleButtonUse.MatchTheme,
                    caption: o,
                    onClick: () => {
                        e(t, {
                            userInitiated: !0
                        })
                    }
                }))
            }
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/ComposerEmojiPicker.bundle.js.map