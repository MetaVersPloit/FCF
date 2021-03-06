(window.webpackJsonp = window.webpackJsonp || []).push([
    [36], {
        657: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = l(39),
                u = w(l(5)),
                n = w(l(143)),
                d = l(23),
                r = w(l(1)),
                o = l(28),
                i = l(11),
                f = y(l(0)),
                s = y(l(16)),
                c = w(l(582)),
                m = w(l(370)),
                p = w(l(160)),
                g = w(l(103)),
                b = w(l(120)),
                S = l(58),
                h = w(l(60)),
                E = w(l(249)),
                k = w(l(4));

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function () {
                    return e
                }, e
            }

            function y(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = v();
                if (t && t.has(e)) return t.get(e);
                var l = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var u in e)
                    if (Object.prototype.hasOwnProperty.call(e, u)) {
                        var n = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                        n && (n.get || n.set) ? Object.defineProperty(l, u, n) : l[u] = e[u]
                    } return l.default = e, t && t.set(e, l), l
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const x = r.default.div({
                    display: "flex",
                    flexDirection: "column",
                    margin: 12
                }),
                C = r.default.div({
                    marginTop: 12
                }),
                M = (0, r.default)(k.default)(e => ({
                    marginBottom: 6,
                    color: e.theme.semanticColors.secondary
                })),
                _ = r.default.div({
                    marginTop: 24
                }),
                T = (0, r.default)(s.default)({
                    minWidth: 0,
                    padding: 6,
                    borderRadius: 5,
                    background: "rgba(255,255,255,.34)",
                    border: "1px solid rgba(0,0,0,.12)"
                }),
                j = (0, r.default)(h.default)({
                    width: "100%",
                    padding: "2px 10px 3px",
                    borderRadius: 5,
                    background: "rgba(255,255,255,.34)",
                    border: "1px solid rgba(0,0,0,.12)"
                }),
                D = r.default.div({
                    marginTop: 6
                }),
                R = u.default._("Set Status", null, {
                    hk: "1DLwLp"
                }).toString(),
                O = u.default._("Save", null, {
                    hk: "1clGc5"
                }).toString(),
                B = u.default._("Cancel", null, {
                    hk: "2u5Dtk"
                }).toString(),
                z = u.default._("Clear", null, {
                    hk: "1HhNQF"
                }).toString(),
                I = [{
                    label: u.default._("1 hour", null, {
                        hk: "7grwU"
                    }).toString(),
                    value: "1hour"
                }, {
                    label: u.default._("2 hours", null, {
                        hk: "Zk01c"
                    }).toString(),
                    value: "2hours"
                }, {
                    label: u.default._("4 hours", null, {
                        hk: "KKlep"
                    }).toString(),
                    value: "4hours"
                }, {
                    label: u.default._("Today", null, {
                        hk: "1DanCN"
                    }).toString(),
                    value: "today"
                }, {
                    label: u.default._("This week", null, {
                        hk: "2i3Gpv"
                    }).toString(),
                    value: "thisweek"
                }, {
                    label: u.default._("Until I change it", null, {
                        hk: "bojMO"
                    }).toString(),
                    value: "indefinite"
                }, {
                    label: u.default._("Custom...", null, {
                        hk: "3rpiCQ"
                    }).toString(),
                    value: "custom"
                }];
            const U = {
                closeModal: o.AppContextActions.clearModal,
                setUserStatus: d.InboxActions.contacts.setAvailabilityStatus,
                clearStatus: () => d.InboxActions.contacts.setAvailabilityStatus({
                    statusText: "",
                    emoji: "",
                    dndEnabled: !1,
                    timespan: null,
                    untilTimestamp: null
                })
            };
            var N = (0, i.connect)((function (e) {
                return (0, d.getOwnStatus)(e)
            }), U)((function ({
                closeModal: e,
                testCloseModal: t,
                setUserStatus: l,
                clearStatus: d,
                statusText: r,
                emoji: o,
                endDate: i,
                doNotDisturbEnabled: h
            }) {
                const k = (0, f.useCallback)(() => {
                        t ? t() : e()
                    }, [e, t]),
                    v = (0, f.useMemo)(() => I.findIndex(e => "custom" === e.value), []),
                    [y, w] = (0, f.useState)("" === o ? "????" : o),
                    [U, N] = (0, f.useState)(r),
                    [P, A] = (0, f.useState)(h),
                    [H, L] = (0, f.useState)(9999999999 !== i ? i : (0, a.getUnixTimestamp)(new Date)),
                    [W, G] = (0, f.useState)(function (e) {
                        return 9999999999 === e ? I.findIndex(e => "today" === e.value) : -1 === e ? I.findIndex(e => "indefinite" === e.value) : I.findIndex(e => "custom" === e.value)
                    }(i)),
                    K = W === v,
                    [F, J] = (0, f.useState)(!1),
                    Q = (0, f.useRef)(null),
                    X = (0, f.useRef)(null),
                    [Y, Z] = (0, n.default)(Q, X),
                    q = (0, f.useMemo)(() => I.map(e => e.label), []);
                return (0, f.useEffect)(() => {
                    J("" !== U.trim())
                }, [U]), f.default.createElement(S.Modal, {
                    width: 330,
                    onHideModal: k,
                    "aria-label": R,
                    modalType: "autosize"
                }, f.default.createElement(S.ModalHeader, {
                    title: R,
                    onClose: k
                }), f.default.createElement(x, null, f.default.createElement(C, null, f.default.createElement(M, null, u.default._("Status", null, {
                    hk: "3KBA8a"
                })), f.default.createElement(b.default, null, f.default.createElement(g.default, null, f.default.createElement(T, {
                    "aria-label": "Choose status emoji",
                    telemetryName: "userStatusModalEmoji",
                    use: s.RectangleButtonUse.Secondary,
                    size: s.RectangleButtonSize.Small,
                    caption: y,
                    onClick: () => Z(!Y),
                    elementRef: X
                }), Y && f.default.createElement(c.default, {
                    ref: Q,
                    onPickEmoji: e => {
                        w(e), Z(!1)
                    },
                    target: X.current,
                    positionBottom: -26,
                    positionRight: 26
                })), f.default.createElement(g.default, {
                    grow: 3
                }, f.default.createElement(j, {
                    placeholder: u.default._("What's your status?", null, {
                        hk: "3Ii2Yn"
                    }),
                    value: U,
                    onChange: N,
                    maxLength: 79
                })))), f.default.createElement(C, null, f.default.createElement(M, null, u.default._("Duration", null, {
                    hk: "2HGCFX"
                })), f.default.createElement(p.default, {
                    items: q,
                    initialSelectedIndex: W,
                    onSelectionChanged: (e, t) => {
                        G(t)
                    }
                }), K && f.default.createElement(D, null, f.default.createElement(m.default, {
                    date: new Date(1e3 * H),
                    onDateTimeChange: L,
                    hideLabels: !0
                }))), f.default.createElement(C, null, f.default.createElement(b.default, null, f.default.createElement(M, null, u.default._("Do Not Disturb", null, {
                    hk: "36Dxsw"
                }))), f.default.createElement(b.default, null, f.default.createElement(g.default, null, f.default.createElement(E.default, {
                    isChecked: P,
                    onToggle: () => A(!P)
                })), f.default.createElement(g.default, null, P ? "On" : "Off"))), f.default.createElement(_, null, f.default.createElement(b.default, {
                    justify: "space-between"
                }, f.default.createElement(g.default, null, f.default.createElement(s.default, {
                    "aria-label": z,
                    telemetryName: "userStatusModalCancel",
                    use: s.RectangleButtonUse.Secondary,
                    size: s.RectangleButtonSize.Medium,
                    caption: z,
                    onClick: () => {
                        d(), k()
                    },
                    wrapText: !1
                })), f.default.createElement(g.default, null, f.default.createElement(b.default, null, f.default.createElement(g.default, null, f.default.createElement(s.default, {
                    "aria-label": B,
                    telemetryName: "userStatusModalCancel",
                    use: s.RectangleButtonUse.Secondary,
                    size: s.RectangleButtonSize.Medium,
                    caption: B,
                    onClick: k,
                    wrapText: !1
                })), f.default.createElement(g.default, null, f.default.createElement(s.default, {
                    "aria-label": O,
                    telemetryName: "userStatusModalSave",
                    use: s.RectangleButtonUse.Primary,
                    size: s.RectangleButtonSize.Medium,
                    caption: O,
                    onClick: () => {
                        const e = I[W].value,
                            t = "custom" === e;
                        l({
                            statusText: U.trim(),
                            emoji: y,
                            timespan: t ? null : e,
                            dndEnabled: P,
                            untilTimestamp: t ? H : null
                        }), k()
                    },
                    wrapText: !1,
                    disabled: !F
                }))))))))
            }));
            t.default = N
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/UserStatusModal.bundle.js.map