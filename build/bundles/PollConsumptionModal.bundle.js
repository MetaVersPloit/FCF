(window.webpackJsonp = window.webpackJsonp || []).push([
    [31], {
        353: function (e, t, l) {
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
                    d: "M18 9c-.69 0-1.25.56-1.25 1.25v6.25a.25.25 0 01-.25.25h-6.25a1.25 1.25 0 100 2.5h6.25a.25.25 0 01.25.25v6.25a1.25 1.25 0 102.5 0V19.5a.25.25 0 01.25-.25h6.25a1.25 1.25 0 100-2.5H19.5a.25.25 0 01-.25-.25v-6.25C19.25 9.56 18.69 9 18 9z"
                }))
            };
            var o, n = (o = l(0)) && o.__esModule ? o : {
                default: o
            }
        },
        648: function (e, t, l) {
            "use strict";
            (function (e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var o = l(325),
                    n = y(l(550)),
                    a = l(87),
                    i = l(53),
                    r = y(l(5)),
                    d = y(l(148)),
                    c = y(l(341)),
                    u = l(23),
                    s = y(l(1)),
                    f = y(l(353)),
                    p = l(28),
                    m = l(11),
                    h = I(l(0)),
                    g = I(l(2)),
                    b = l(58),
                    v = y(l(13)),
                    E = l(6),
                    O = y(l(4));

                function S() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap;
                    return S = function () {
                        return e
                    }, e
                }

                function I(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = S();
                    if (t && t.has(e)) return t.get(e);
                    var l = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, n) : null;
                            a && (a.get || a.set) ? Object.defineProperty(l, n, a) : l[n] = e[n]
                        } return l.default = e, t && t.set(e, l), l
                }

                function y(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                const C = (0, s.default)(g.default)({
                    paddingTop: 24,
                    paddingLeft: 18,
                    paddingRight: 18
                });
                const w = {
                    clearModal: p.AppContextActions.clearModal,
                    updatePoll: u.InboxActions.polls.updatePoll,
                    fetchPollDetails: u.InboxActions.polls.fetchPollDetails,
                    clearPollDetails: u.InboxActions.polls.clearPollDetails
                };
                var P = (0, m.connect)((function () {
                    const e = (0, i.getPollDetailsSelector)();
                    return (t, l) => ({
                        options: e(t, l)
                    })
                }), w)((function (t) {
                    const {
                        threadKey: l,
                        pollId: i,
                        title: u,
                        options: s,
                        clearModal: p,
                        closeModal: m,
                        updatePoll: S,
                        fetchPollDetails: I,
                        clearPollDetails: y
                    } = t;
                    (0, h.useEffect)(() => {
                        I(l, i)
                    }, [i]);
                    const [w, P] = (0, h.useState)(() => s.filter(e => e.selected)), [k, M] = (0, h.useState)(void 0), [B, _] = (0, h.useState)(!1), [x, A] = (0, h.useState)([]), [D, T] = (0, h.useState)(void 0), j = (0, h.useRef)([]), z = (0, d.default)(s), V = (0, E.useTheme)(), F = (0, c.default)(l);
                    (0, h.useEffect)(() => {
                        if (z !== s) {
                            const e = s.map(e => !j.current.includes(e.optionId) && e.selected ? e : null).filter(Boolean).filter(e => !w.some(t => t.optionId === (null == e ? void 0 : e.optionId)));
                            P(w.concat(e))
                        }
                    }, [s, z, w]);
                    const H = (0, h.useCallback)(e => {
                            w.some(t => t.optionId == e.optionId) ? P(w.filter(t => t.optionId !== e.optionId)) : P([...w, e]), j.current.includes(e.optionId) || j.current.push(e.optionId)
                        }, [w]),
                        L = () => {
                            p(), m && m(), y(l, i)
                        },
                        W = r.default._("Vote", null, {
                            hk: "3LIAW8"
                        }).toString(),
                        J = r.default._("Submit", null, {
                            hk: "2V5k1r"
                        }).toString(),
                        N = (0, h.useCallback)((e, t, l) => {
                            const o = null == t ? void 0 : t.trim();
                            o && o.length > 0 ? x[e] = {
                                title: o,
                                isSelected: l
                            } : x.splice(e, 1), A([...x]), T(void 0), M(void 0)
                        }, [x]),
                        R = (0, h.useCallback)(() => {
                            if (x.length > 0) return !0;
                            const e = s.filter(e => e.selected).map(e => e.optionId),
                                t = w.map(e => e.optionId);
                            return !(0, a.arrayEqualsIgnoreOrder)(e, t)
                        }, [s, x.length, w]);
                    let q = [];
                    x.length > 0 && (q = x.map((e, t) => h.default.createElement(o.SelectableOption, {
                        key: e.title,
                        enableSelectingOptions: !0,
                        isSelected: e.isSelected,
                        onActivate: () => N(t, e.title, !e.isSelected),
                        threadTheme: F
                    }, h.default.createElement(o.EditableOption, {
                        showTextInput: D === t,
                        uneditedElement: h.default.createElement(o.OptionContent, {
                            optionString: e.title,
                            onActivate: () => {
                                M(e.title), T(t)
                            }
                        }),
                        inputValue: k,
                        finalize: () => N(t, k, e.isSelected),
                        onChange: e => M(e)
                    }))));
                    const K = (0, h.useCallback)((t, l) => h.default.createElement(o.SelectableOption, {
                            key: l,
                            id: l,
                            onIconClick: () => _(!0),
                            enableSelectingOptions: !0,
                            isSelected: !t,
                            threadTheme: F,
                            iconContainerBackgroundColor: t ? "undefined" : V.colors.base50,
                            icon: t ? h.default.createElement(h.default.Fragment, null) : h.default.createElement(f.default, {
                                size: 16,
                                color: V.select({
                                    light: V.semanticColors.bgSurfaceSecondary,
                                    dark: V.colors.flatBase50
                                })
                            })
                        }, h.default.createElement(o.EditableOption, {
                            showTextInput: t,
                            uneditedElement: h.default.createElement(g.FocusableView, {
                                onActivate: () => _(!0)
                            }, h.default.createElement(o.PollOptionContainer, null, h.default.createElement(O.default, {
                                use: "body-semibold",
                                textAlign: "left",
                                color: V.semanticColors.textTertiary
                            }, o.addOptionString))),
                            inputValue: k,
                            finalize: () => {
                                const t = null == k ? void 0 : k.trim();
                                null != k && null != t && t.length > 0 && (A([...x, {
                                    title: t,
                                    isSelected: !1
                                }]), e(() => _(!0))), M(void 0), _(!1)
                            },
                            onChange: e => M(e)
                        })), [k, V, F, x]),
                        G = B && null != k && k.length > 0;
                    return (0, h.useLayoutEffect)(() => {
                        G && e(() => {
                            var e;
                            return null === (e = document.getElementById("addOption2")) || void 0 === e ? void 0 : e.scrollIntoView({
                                behavior: "smooth"
                            })
                        })
                    }, [G]), q = q.concat([K(B, "addOption1"), G ? K(!1, "addOption2") : null].filter(Boolean)), h.default.createElement(v.default, {
                        name: "pollConsumptionModal"
                    }, h.default.createElement(b.Modal, {
                        modalType: "autosize",
                        "aria-label": W,
                        onHideModal: p
                    }, h.default.createElement(b.ModalHeader, {
                        title: W,
                        hideCloseButton: !0
                    }), h.default.createElement(C, null, h.default.createElement(n.default, {
                        pollId: i,
                        title: u,
                        options: s,
                        threadTheme: F,
                        enableSelectingOptions: !0,
                        additionalOptions: q,
                        onOptionClick: H,
                        selectedOptions: w
                    })), h.default.createElement(b.ModalFooter, {
                        cancelButton: {
                            label: o.cancelButtonString,
                            telemetryName: "cancelPollButton",
                            onClick: L
                        },
                        primaryButton: {
                            label: J,
                            telemetryName: "votePollButton",
                            onClick: () => {
                                S(l, i, w.map(e => e.optionId), x), L()
                            },
                            disabled: !R()
                        },
                        threadColor: null == F ? void 0 : F.color,
                        gradientColors: null == F ? void 0 : F.gradientColors
                    })))
                }));
                t.default = P
            }).call(this, l(231).setImmediate)
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/PollConsumptionModal.bundle.js.map