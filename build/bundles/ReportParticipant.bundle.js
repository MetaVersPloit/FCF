(window.webpackJsonp = window.webpackJsonp || []).push([
    [100], {
        2191: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = w(a(16)),
                n = w(a(339)),
                l = w(a(587)),
                o = w(a(27)),
                i = w(a(5)),
                u = w(a(9)),
                d = a(21),
                c = w(a(1)),
                p = a(28),
                f = a(23),
                s = a(11),
                h = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = b();
                    if (t && t.has(e)) return t.get(e);
                    var a = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, n) : null;
                            l && (l.get || l.set) ? Object.defineProperty(a, n, l) : a[n] = e[n]
                        } a.default = e, t && t.set(e, a);
                    return a
                }(a(0)),
                y = a(58),
                m = w(a(45));

            function b() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return b = function () {
                    return e
                }, e
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const g = c.default.div({
                    display: "flex",
                    flexDirection: "column",
                    margin: 12,
                    maxHeight: 400
                }),
                v = i.default._("Report a Chat Member", null, {
                    hk: "3u7RYm"
                }).toString();
            const M = {
                closeModal: p.AppContextActions.clearModal
            };
            var k = (0, s.connect)((function (e, {
                threadKey: t
            }) {
                const a = (0, f.getThread)(e, t),
                    r = (0, d.requireAuthenticationData)(e);
                return {
                    thread: a,
                    participants: (0, f.selectSortedParticipantListForThread)(e, {
                        threadKey: t
                    }),
                    viewerId: r.userID,
                    authData: (0, d.requireAuthenticationData)(e)
                }
            }), M)((function ({
                closeModal: e,
                participants: t,
                viewerId: a,
                thread: d,
                authData: c
            }) {
                null == d || d.threadType;
                const p = (0, h.useCallback)(t => {
                    d && u.default.window.createReportingWindow({
                        title: v,
                        authData: c,
                        responsibleID: t,
                        threadKey: d.threadKey,
                        threadType: d.threadType,
                        isPageThread: !1
                    }), e()
                }, [c, e, d]);
                return (h.default.createElement(y.Modal, {
                    width: 450,
                    onHideModal: e,
                    "aria-label": v,
                    modalType: "autosize"
                }, h.default.createElement(y.ModalHeader, {
                    title: v,
                    onClose: e
                }), h.default.createElement(g, null, h.default.createElement(m.default, {
                    key: "memberships"
                }, t.filter(e => e.contactId !== a).map(e => h.default.createElement(n.default, {
                    profilePictureUrl: (0, o.default)(e.profilePicture),
                    participantName: e.name,
                    key: e.contactId,
                    subtitle: h.default.createElement(l.default, {
                        name: null,
                        participant: e
                    })
                }, h.default.createElement(r.default, {
                    caption: i.default._("Report", null, {
                        hk: "4ARgVU"
                    }),
                    telemetryName: "report_group_participant",
                    "aria-label": i.default._("Report", null, {
                        hk: "4ARgVU"
                    }).toString(),
                    onClick: () => p(e.contactId)
                })))))))
            }));
            t.default = k
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/ReportParticipant.bundle.js.map