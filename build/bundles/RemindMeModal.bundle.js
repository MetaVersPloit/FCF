(window.webpackJsonp = window.webpackJsonp || []).push([
    [99], {
        2192: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = l(39),
                n = _(l(5)),
                u = _(l(1)),
                r = l(28),
                o = l(23),
                d = l(11),
                i = S(l(0)),
                s = S(l(16)),
                c = _(l(370)),
                f = _(l(160)),
                m = _(l(103)),
                O = _(l(120)),
                p = l(58),
                g = _(l(4));

            function M() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return M = function () {
                    return e
                }, e
            }

            function S(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = M();
                if (t && t.has(e)) return t.get(e);
                var l = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var u = a ? Object.getOwnPropertyDescriptor(e, n) : null;
                        u && (u.get || u.set) ? Object.defineProperty(l, n, u) : l[n] = e[n]
                    } return l.default = e, t && t.set(e, l), l
            }

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const R = u.default.div({
                    display: "flex",
                    flexDirection: "column",
                    margin: 12
                }),
                b = u.default.div({
                    marginTop: 12
                }),
                w = (0, u.default)(g.default)(e => ({
                    marginBottom: 6,
                    color: e.theme.semanticColors.secondary
                })),
                h = u.default.div({
                    marginTop: 24
                }),
                v = u.default.div({
                    marginTop: 6
                }),
                T = n.default._("Set Message Reminder", null, {
                    hk: "3HMYjA"
                }).toString(),
                y = n.default._("Save", null, {
                    hk: "1RuS4F"
                }).toString(),
                H = n.default._("Cancel", null, {
                    hk: "1Jwo0I"
                }).toString();
            var E;
            ! function (e) {
                e.HALF_HOUR = "30minutes", e.HOUR = "1hour", e.TWO_HOURS = "2hours", e.TOMORROW_9_AM = "tomorrow9am", e.CUSTOM = "custom"
            }(E || (E = {}));
            const U = [{
                    label: n.default._("in 30 minutes", null, {
                        hk: "36rrms"
                    }).toString(),
                    value: E.HALF_HOUR
                }, {
                    label: n.default._("in 1 hour", null, {
                        hk: "3hUceg"
                    }).toString(),
                    value: E.HOUR
                }, {
                    label: n.default._("in 2 hours", null, {
                        hk: "2lmaWK"
                    }).toString(),
                    value: E.TWO_HOURS
                }, {
                    label: n.default._("tomorrow at 9am", null, {
                        hk: "ECw1E"
                    }).toString(),
                    value: E.TOMORROW_9_AM
                }, {
                    label: n.default._("Custom...", null, {
                        hk: "1ZVnbi"
                    }).toString(),
                    value: E.CUSTOM
                }],
                C = Object.freeze({
                    [E.HALF_HOUR]: () => (0, a.addHours)(new Date, .5),
                    [E.HOUR]: () => (0, a.addHours)(new Date, 1),
                    [E.TWO_HOURS]: () => (0, a.addHours)(new Date, 2),
                    [E.TOMORROW_9_AM]: () => (0, a.getUnixTimestamp)((0, a.getTomorrowAt)(new Date, {
                        hours: 9
                    })),
                    [E.CUSTOM]: e => e
                });
            const k = {
                closeModal: r.AppContextActions.clearModal,
                setMessageReminder: o.InboxActions.messages.setMessageReminder
            };
            var A = (0, d.connect)(null, k)((function ({
                threadKey: e,
                messageId: t,
                testCloseModal: l,
                closeModal: a,
                setMessageReminder: u
            }) {
                const r = (0, i.useCallback)(() => {
                        l ? l() : a()
                    }, [a, l]),
                    o = (0, i.useMemo)(() => U.findIndex(({
                        value: e
                    }) => e === E.CUSTOM), []),
                    [d, g] = (0, i.useState)(U.findIndex(({
                        value: e
                    }) => e === E.HOUR)),
                    [M, S] = (0, i.useState)((new Date).getTime()),
                    _ = d === o,
                    k = (0, i.useMemo)(() => U.map(e => e.label), []);
                return i.default.createElement(p.Modal, {
                    width: 330,
                    onHideModal: r,
                    "aria-label": T,
                    modalType: "autosize"
                }, i.default.createElement(p.ModalHeader, {
                    title: T,
                    onClose: r
                }), i.default.createElement(R, null, i.default.createElement(b, null, i.default.createElement(w, null, n.default._("Remind me...", null, {
                    hk: "3bzaS2"
                })), i.default.createElement(f.default, {
                    items: k,
                    initialSelectedIndex: d,
                    onSelectionChanged: (e, t) => {
                        g(t)
                    }
                }), _ && i.default.createElement(v, null, i.default.createElement(c.default, {
                    date: new Date(M),
                    onDateTimeChange: S,
                    hideLabels: !0
                }))), i.default.createElement(h, null, i.default.createElement(O.default, {
                    justify: "space-between"
                }, i.default.createElement(m.default, null, i.default.createElement(O.default, null, i.default.createElement(m.default, null, i.default.createElement(s.default, {
                    "aria-label": H,
                    telemetryName: "userStatusModalCancel",
                    use: s.RectangleButtonUse.Secondary,
                    size: s.RectangleButtonSize.Medium,
                    caption: H,
                    onClick: r,
                    wrapText: !1
                })), i.default.createElement(m.default, null, i.default.createElement(s.default, {
                    "aria-label": y,
                    telemetryName: "userStatusModalSave",
                    use: s.RectangleButtonUse.Primary,
                    size: s.RectangleButtonSize.Medium,
                    caption: y,
                    onClick: () => {
                        const l = function (e, t) {
                            const {
                                value: l
                            } = U[e];
                            return C[l](t)
                        }(d, M);
                        u(e, t, l), r()
                    },
                    wrapText: !1
                }))))))))
            }));
            t.default = A
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/RemindMeModal.bundle.js.map