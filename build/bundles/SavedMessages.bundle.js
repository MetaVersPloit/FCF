(window.webpackJsonp = window.webpackJsonp || []).push([
    [104], {
        2193: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = a(58),
                s = w(a(5)),
                n = a(139),
                o = a(23),
                i = w(a(1)),
                u = a(115),
                d = w(a(633)),
                r = w(a(50)),
                f = a(11),
                m = b(a(0)),
                c = w(a(2)),
                g = b(a(22)),
                p = b(a(82)),
                h = w(a(172)),
                v = w(a(38)),
                E = w(a(614)),
                y = a(6),
                S = w(a(4));

            function M() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return M = function () {
                    return e
                }, e
            }

            function b(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = M();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if (Object.prototype.hasOwnProperty.call(e, s)) {
                        var n = l ? Object.getOwnPropertyDescriptor(e, s) : null;
                        n && (n.get || n.set) ? Object.defineProperty(a, s, n) : a[s] = e[s]
                    } return a.default = e, t && t.set(e, a), a
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const x = (0, i.default)(c.default)({
                    width: "100%",
                    height: "100%"
                }),
                k = (0, i.default)(c.default)({
                    flexBasis: 48,
                    alignItems: "center",
                    justifyContent: "center"
                }),
                _ = (0, i.default)(S.default)({
                    display: "flex",
                    flexDirection: "row",
                    gap: 6,
                    justifyContent: "center"
                }),
                P = (0, i.default)(c.default)({
                    position: "absolute",
                    right: 12,
                    top: 12
                }),
                O = (0, i.default)(c.default)({
                    flex: "auto",
                    margin: "24px 0",
                    overflowY: "scroll"
                }),
                z = (0, i.default)(c.default)({
                    minWidth: 320,
                    maxWidth: "60%",
                    alignSelf: "center"
                }),
                L = (0, i.default)(c.default)({
                    flex: "auto"
                }),
                T = (0, i.default)(S.default)(e => ({
                    marginBottom: 3,
                    color: e.theme.select({
                        dark: e.theme.colors.base70,
                        light: e.theme.colors.base60
                    }),
                    userSelect: "none"
                })),
                j = (0, i.default)(c.default)({
                    flexDirection: "row"
                }),
                I = (0, i.default)(c.default)({
                    margin: "6px 0",
                    padding: "5px 12px",
                    flexDirection: "row"
                }),
                D = (0, i.default)(S.default)(e => ({
                    marginLeft: 12,
                    color: e.theme.select({
                        dark: e.theme.colors.base70,
                        light: e.theme.colors.base60
                    })
                })),
                A = (0, i.default)(c.default)(e => ({
                    margin: "4px 0 0 12px"
                })),
                B = (0, i.default)(c.default)(e => ({
                    paddingRight: 12
                })),
                F = (0, i.default)(c.default)({
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }),
                R = (0, i.default)(c.default)({
                    position: "fixed",
                    right: 12,
                    top: 52
                });
            const C = {
                closeModal: o.InboxActions.messages.closeSavedMessagesViewer,
                loadOlder: () => o.InboxActions.messages.issueFetchSavedMessagesPage(!0),
                loadLatest: () => o.InboxActions.messages.issueFetchSavedMessagesPage(!1),
                removeFromSaved: (e, t) => o.InboxActions.messages.saveOrUnsaveMessage(e, t, !1),
                jumpToMessage: (e, t) => o.InboxActions.messageSearch.selectMessageSearchResult(t, e)
            };
            var W = (0, f.connect)((function (e) {
                const t = (0, o.getSavedMessagesPagingInfo)(e);
                return {
                    savedMessages: (0, o.getSavedMessagesFlat)(e),
                    isLoadingNewer: Boolean(!t || (null == t ? void 0 : t.isLoadingAfter)),
                    isLoadingOlder: Boolean(!t || (null == t ? void 0 : t.isLoadingBefore)),
                    isEmployee: (0, n.isGatekeeperEnabled)(e, "is_employee")
                }
            }), C)((function (e) {
                const {
                    savedMessages: t,
                    isLoadingOlder: a,
                    isLoadingNewer: n,
                    isEmployee: o,
                    loadOlder: i,
                    loadLatest: f,
                    removeFromSaved: c,
                    closeModal: M
                } = e, b = (0, y.useTheme)(), w = Boolean(e.savedMessages.length), C = (0, m.useCallback)(() => {
                    a || i()
                }, [a, i]);
                (0, m.useEffect)(() => {
                    f()
                }, [f]);
                const W = Date.now();
                return (m.default.createElement(l.Modal, {
                    modalType: "fullscreen",
                    onHideModal: e.closeModal
                }, m.default.createElement(x, null, m.default.createElement(k, null, m.default.createElement(_, {
                    use: "body-semibold"
                }, m.default.createElement(d.default, {
                    size: 19,
                    color: b.colors.orchid
                }), s.default._("Saved Messages", null, {
                    hk: "36bisH"
                })), m.default.createElement(P, null, m.default.createElement(g.default, {
                    telemetryName: "closeSavedMessagesView",
                    "aria-label": s.default._("Close", null, {
                        hk: "1aJ7E"
                    }).toString(),
                    size: g.RoundButtonSize.Small,
                    icon: r.default,
                    onClick: M
                }))), m.default.createElement(O, null, n && !w && m.default.createElement(p.default, {
                    size: p.SpinnerSize.Medium
                }), (n || a) && w && m.default.createElement(R, null, m.default.createElement(p.default, {
                    size: p.SpinnerSize.Small
                })), w && m.default.createElement(z, null, t.map(e => {
                    const t = (0, u.computeMessageListTimestamp)(e.message.saveActionTimestampMs),
                        a = (0, u.isSameDay)(W, e.message.saveActionTimestampMs),
                        l = (0, u.computeMessageListTimestamp)(e.message.timestampMs),
                        n = (0, u.isSameDay)(W, e.message.timestampMs);
                    return m.default.createElement(I, {
                        key: e.message.messageId
                    }, m.default.createElement(B, null, m.default.createElement(v.default, {
                        profilePictureUrl: e.message.profilePicture.primaryUrl,
                        size: "small"
                    })), m.default.createElement(L, null, m.default.createElement(j, null, m.default.createElement(T, {
                        use: "caption"
                    }, e.message.name), m.default.createElement(D, {
                        use: "caption"
                    }, s.default._("Sent {timePreposition} {sentTime}", [s.default._param("timePreposition", n ? "at" : "on"), s.default._param("sentTime", l)], {
                        hk: "2zH8gz"
                    })), m.default.createElement(D, {
                        use: "caption"
                    }, s.default._("Saved {timePreposition} {savedTime}", [s.default._param("timePreposition", a ? "at" : "on"), s.default._param("savedTime", t)], {
                        hk: "Gy8ew"
                    }))), m.default.createElement(j, null, m.default.createElement(h.default, {
                        key: e.message.messageId,
                        showReactionPicker: !1,
                        canSeeDelivery: !1,
                        isFirst: !0,
                        isLast: !0,
                        messageReactions: [],
                        message: e,
                        isSenderViewer: !1,
                        isWindowFocused: !1,
                        fullWidth: !0,
                        isEmployee: o
                    }), m.default.createElement(A, null, m.default.createElement(g.default, {
                        telemetryName: "removeFromSaved",
                        "aria-label": s.default._("Remove from saved messages", null, {
                            hk: "3HxzWi"
                        }).toString(),
                        size: g.RoundButtonSize.Small,
                        icon: r.default,
                        onClick: () => c(e.message.threadKey, e.message.messageId)
                    })))))
                }), !a && m.default.createElement(E.default, {
                    atSentinel: C
                })), !a && !n && !w && m.default.createElement(F, null, m.default.createElement(S.default, {
                    use: "body-semibold"
                }, s.default._("No saved messages", null, {
                    hk: "1J6OoK"
                }), " ", "?????????????"), m.default.createElement(S.default, {
                    use: "subtext"
                }, s.default._('Try saving messages by right-clicking on a message and choosing "Save Message". You\'ll find them here then.', null, {
                    hk: "1Xo8R8"
                })))))))
            }));
            t.default = W
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/SavedMessages.bundle.js.map