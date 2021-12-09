(window.webpackJsonp = window.webpackJsonp || []).push([
    [96], {
        2152: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = y(n(185)),
                r = y(n(5)),
                u = y(n(341)),
                a = y(n(1)),
                l = n(28),
                i = n(23),
                d = n(11),
                f = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var u = o ? Object.getOwnPropertyDescriptor(e, r) : null;
                            u && (u.get || u.set) ? Object.defineProperty(n, r, u) : n[r] = e[r]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                c = y(n(2)),
                s = n(58),
                h = y(n(649)),
                m = y(n(13));

            function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function () {
                    return e
                }, e
            }

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const b = (0, a.default)(c.default)({
                    padding: "0 12px",
                    flex: 1
                }),
                D = [{
                    id: 0,
                    label: r.default._("For 15 Minutes", null, {
                        hk: "UD37O"
                    }).toString(),
                    info: {
                        muteDuration: 15,
                        muteDurationUnit: "minute"
                    }
                }, {
                    id: 1,
                    label: r.default._("For 1 Hour", null, {
                        hk: "9Bu82"
                    }).toString(),
                    info: {
                        muteDuration: 1,
                        muteDurationUnit: "hour"
                    }
                }, {
                    id: 2,
                    label: r.default._("For 8 Hours", null, {
                        hk: "OOEXg"
                    }).toString(),
                    info: {
                        muteDuration: 8,
                        muteDurationUnit: "hour"
                    }
                }, {
                    id: 3,
                    label: r.default._("For 24 Hours", null, {
                        hk: "2H1lhC"
                    }).toString(),
                    info: {
                        muteDuration: 1,
                        muteDurationUnit: "day"
                    }
                }, {
                    id: 4,
                    label: r.default._("Until I turn it back on", null, {
                        hk: "dVj0j"
                    }).toString(),
                    info: {
                        muteDuration: null,
                        muteDurationUnit: null
                    }
                }],
                g = r.default._("Mute notifications for this conversation", null, {
                    hk: "246Esv"
                }).toString(),
                v = r.default._("Confirm", null, {
                    hk: "4pQ7nt"
                }).toString();
            const M = {
                muteThread: i.InboxActions.threads.muteThread,
                unmuteThread: i.InboxActions.threads.unmuteThread,
                muteThreadIndefinitely: i.InboxActions.threads.muteThreadIndefinitely,
                clearModal: l.AppContextActions.clearModal
            };
            var O = (0, d.connect)((function (e, {
                threadKey: t
            }) {
                return {
                    thread: (0, i.getThread)(e, t)
                }
            }), M)((function ({
                thread: e,
                clearModal: t,
                muteThread: n,
                muteThreadIndefinitely: r
            }) {
                const [a, l] = (0, f.useState)(0), i = (0, u.default)(null == e ? void 0 : e.threadKey);
                return null == e ? (t(), null) : f.default.createElement(m.default, {
                    name: "MuteThreadNotifications"
                }, f.default.createElement(s.Modal, {
                    modalType: "autosize",
                    width: 340,
                    "aria-label": g,
                    onHideModal: t
                }, f.default.createElement(s.ModalHeader, {
                    title: g,
                    onClose: t
                }), f.default.createElement(b, null, f.default.createElement(h.default, {
                    options: D,
                    selectedOptionId: a,
                    onSelectOption: l,
                    threadTheme: i
                })), f.default.createElement(s.ModalFooter, {
                    primaryButton: {
                        label: v,
                        telemetryName: "notification_view_confirm",
                        onClick: () => {
                            const u = D[a];
                            if (null == u.info.muteDuration || null == u.info.muteDurationUnit) r(e.threadKey);
                            else {
                                const t = (0, o.default)(Date.now()).add(u.info.muteDuration, u.info.muteDurationUnit).valueOf();
                                n(e.threadKey, t)
                            }
                            t()
                        }
                    },
                    threadColor: null == i ? void 0 : i.color,
                    gradientColors: null == i ? void 0 : i.gradientColors
                })))
            }));
            t.default = O
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/NotificationsView.bundle.js.map