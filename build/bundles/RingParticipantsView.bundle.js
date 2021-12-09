(window.webpackJsonp = window.webpackJsonp || []).push([
    [102], {
        2158: function (t, e, a) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = e.IconContainer = void 0;
            var n = C(a(1902)),
                r = a(8),
                l = C(a(5)),
                o = C(a(341)),
                i = a(21),
                c = a(49),
                u = C(a(1)),
                d = a(28),
                s = a(23),
                p = a(11),
                f = C(a(0)),
                h = C(a(2)),
                m = a(58);

            function C(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            const b = (0, u.default)(h.default)(t => ({
                alignItems: "center",
                justifyContent: "center",
                height: 24,
                width: 24,
                borderRadius: "50%",
                color: t.theme.colors.base10,
                backgroundColor: t.isChecked ? t.theme.colors.base80 : void 0,
                border: `2px solid ${t.theme.colors.base50}`,
                marginRight: 12
            }));
            e.IconContainer = b;
            const g = {
                startCallForParticipants: c.RtcActions.startCallForParticipants,
                clearModal: d.AppContextActions.clearModal
            };
            var M = (0, p.connect)((function (t, {
                threadKey: e
            }) {
                const a = (0, s.getThread)(t, e),
                    n = (0, i.requireAuthenticationData)(t);
                return {
                    thread: a,
                    participants: (0, s.getParticipantListForThread)(t, e).filter(t => t.contactId != n.userID)
                }
            }), g)((function (t) {
                const {
                    threadKey: e,
                    isAudioCall: a,
                    thread: i,
                    participants: c,
                    startCallForParticipants: u,
                    clearModal: d
                } = t, s = (0, o.default)(e);
                if (null == i) return d(), null;
                const p = l.default._("Call Group Members", null, {
                    hk: "3nkng0"
                });
                return (f.default.createElement(m.Modal, {
                    onHideModal: d,
                    "aria-label": p.toString()
                }, f.default.createElement(m.ModalHeader, {
                    title: p,
                    onClose: d
                }), f.default.createElement(n.default, {
                    onSubmit: t => {
                        u(t, e, r.OutgoingCallSource.CHAT_HEADER, a), d()
                    },
                    submitButtonText: l.default._("Call", null, {
                        hk: "3BPtme"
                    }).toString(),
                    submitButtonAriaLabel: l.default._("Confirm Calling Selected Participants", null, {
                        hk: "1H9GzY"
                    }).toString(),
                    submitButtonTelemetryName: "ring_participants",
                    participants: c,
                    threadTheme: s
                })))
            }));
            e.default = M
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/RingParticipantsView.bundle.js.map