(window.webpackJsonp = window.webpackJsonp || []).push([
    [92], {
        2166: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = v(l(16)),
                n = A(l(339)),
                r = A(l(587)),
                u = A(l(5)),
                o = A(l(9)),
                i = A(l(1)),
                d = l(28),
                c = l(23),
                f = l(11),
                s = v(l(0)),
                p = A(l(2)),
                m = l(58),
                b = A(l(45)),
                h = A(l(186)),
                g = A(l(249)),
                k = A(l(4));

            function A(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function () {
                    return e
                }, e
            }

            function v(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = y();
                if (t && t.has(e)) return t.get(e);
                var l = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = a ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(l, n, r) : l[n] = e[n]
                    } return l.default = e, t && t.set(e, l), l
            }
            const w = (0, i.default)(p.default)({
                flexDirection: "row",
                alignItems: "center"
            }),
                _ = (0, i.default)(p.default)({
                    width: 8
                }),
                E = (0, i.default)(p.default)({
                    flex: 1
                }),
                q = (0, i.default)(p.default)({
                    flexDirection: "row",
                    justifyContent: "space-between"
                }),
                M = (0, i.default)(k.default)({
                    flex: 1
                }),
                C = (0, i.default)("tr")(e => ({
                    marginTop: 9,
                    marginBottom: 9,
                    borderBottomStyle: "solid",
                    borderBottomWidth: 1,
                    borderBottomColor: e.theme.colors.base50
                })),
                P = (0, i.default)(p.default)({
                    alignItems: "center",
                    flexDirection: "row",
                    paddingLeft: 12
                }),
                S = (0, i.default)(k.default)({
                    flex: 1,
                    marginLeft: 10,
                    maxWidth: 100
                }),
                x = (0, i.default)(b.default)({
                    paddingRight: 12
                });
            var O = (0, f.connect)((function (e, {
                threadKey: t
            }) {
                const l = (0, c.getThreadModel)(e, t);
                if (!l) throw new Error("A valid thread model is required to render the GroupMembershipRequestsView");
                return {
                    requiresAdminApproval: l.needsAdminApprovalForNewParticipant,
                    groupMembershipRequests: (0, c.getMembershipRequests)(e, t)
                }
            }))((function (e) {
                const {
                    groupMembershipRequests: t,
                    requiresAdminApproval: l,
                    threadKey: i
                } = e, p = (0, f.useDispatch)(), b = (0, s.useCallback)(() => {
                    p(d.AppContextActions.clearModal())
                }, [p]), k = (0, s.useCallback)((e, t, l) => {
                    p(c.InboxActions.participants.respondToAdminApprovalRequest(e, [t], l))
                }, [p]), A = (0, s.useCallback)((e, t) => {
                    p(c.InboxActions.participants.respondToAdminApprovalRequest(e, t, !0))
                }, [p]), y = (0, s.useCallback)((e, t) => {
                    p(c.InboxActions.participants.setNeedsAdminApprovalForNewParticipant(e, t))
                }, [p]), v = (0, s.useCallback)(async (e, l) => {
                    if (t.length > 0 && !1 === e) {
                        0 === (await o.default.platform.showMessageBox({
                            type: "info",
                            detail: u.default._("Would you like to approve all pending member requests? New members will be able to see all previous messages.", null, {
                                hk: "DUPzP"
                            }).toString(),
                            message: u.default._("Approve All Requests?", null, {
                                hk: "22IVxv"
                            }).toString(),
                            noLink: !0,
                            cancelId: 1,
                            buttons: [u.default._("Approve", null, {
                                hk: "6rUuD"
                            }).toString(), u.default._("Cancel", null, {
                                hk: "2LhY6r"
                            }).toString()]
                        })).response && y(l, e)
                    } else y(l, e)
                }, [t, y]), O = u.default._("Member Requests", null, {
                    hk: "1bSL0o"
                }).toString(), I = u.default._("Accept", null, {
                    hk: "2lVCe2"
                }).toString(), R = u.default._("Decline", null, {
                    hk: "2SNGjQ"
                }).toString();
                return s.default.createElement(m.Modal, {
                    onHideModal: b,
                    "aria-label": O
                }, s.default.createElement(m.ModalHeader, {
                    title: O,
                    onClose: b
                }), s.default.createElement(m.ModalContent, null, s.default.createElement(x, null, s.default.createElement(q, null, s.default.createElement(M, {
                    use: "body-medium",
                    numberOfLines: 2
                }, u.default._("Require Admin Approval", null, {
                    hk: "PeWeq"
                })), s.default.createElement(P, null, s.default.createElement(g.default, {
                    isChecked: l,
                    onToggle: e => v(e, i)
                }), s.default.createElement(S, {
                    use: "body",
                    numberOfLines: 2
                }, l ? u.default._("On", null, {
                    hk: "1SgIVB"
                }) : u.default._("Off", null, {
                    hk: "1jKFkQ"
                })))), s.default.createElement(C, null), s.default.createElement(h.default, {
                    title: u.default._("Requests", null, {
                        hk: "maUL3"
                    }).toString(),
                    action: {
                        title: u.default._("Accept All", null, {
                            hk: "3Gdozc"
                        }).toString(),
                        onClick: () => {
                            t.length > 0 && A(i, t.map(e => e.contactId))
                        },
                        disabled: t.length < 1
                    }
                }), t.map(e => s.default.createElement(w, {
                    key: e.contactId
                }, s.default.createElement(E, null, s.default.createElement(n.default, {
                    profilePictureUrl: e.profilePictureUrl,
                    participantName: e.contactName,
                    subtitle: s.default.createElement(r.default, {
                        participant: null,
                        name: e.subscribeSource
                    })
                })), s.default.createElement(a.default, {
                    "aria-label": R,
                    caption: R,
                    telemetryName: "approve_request",
                    onClick: () => {
                        k(e.threadKey, e.contactId, !1)
                    }
                }), s.default.createElement(_, null), s.default.createElement(a.default, {
                    "aria-label": I,
                    caption: I,
                    telemetryName: "approve_request",
                    use: a.RectangleButtonUse.Primary,
                    onClick: () => {
                        k(e.threadKey, e.contactId, !0)
                    }
                }))))))
            }));
            t.default = O
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/GroupMembershipRequestsView.bundle.js.map