(window.webpackJsonp = window.webpackJsonp || []).push([
    [103], {
        1951: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return I.default.createElement(M.DynamicModuleLoader, {
                    strictMode: !0,
                    modules: [v.ContactSuggestionsModule]
                }, I.default.createElement(Y, e))
            }, t.InviteItemStatus = void 0;
            var o = D(n(22)),
                l = B(n(82)),
                a = n(58),
                r = n(113),
                i = n(6),
                u = D(n(2181)),
                c = n(8),
                d = n(617),
                s = D(n(244)),
                f = D(n(594)),
                m = D(n(5)),
                p = D(n(9)),
                g = D(n(340)),
                h = n(61),
                y = n(1893),
                v = n(1886),
                k = n(1892),
                b = n(23),
                E = n(140),
                _ = n(65),
                S = n(194),
                C = n(240),
                w = D(n(1)),
                R = n(1888),
                O = n(11),
                I = B(n(0)),
                M = n(138),
                P = D(n(2)),
                x = D(n(242)),
                j = D(n(13)),
                T = D(n(4));

            function A() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return A = function () {
                    return e
                }, e
            }

            function B(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = A();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                    } return n.default = e, t && t.set(e, n), n
            }

            function D(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const N = (0, w.default)(P.default)({
                    flex: "1",
                    height: 460
                }),
                L = (0, w.default)(P.default)(e => ({
                    width: 372,
                    height: 64,
                    borderRadius: "18px",
                    backgroundColor: e.theme.semanticColors.bgSurfaceSecondary,
                    margin: 12,
                    alignItems: "center",
                    alignSelf: "center",
                    flexDirection: "row",
                    overflow: "hidden"
                })),
                F = (0, w.default)(P.default)({
                    width: 64,
                    height: 64,
                    marginRight: 16
                }),
                z = (0, w.default)(P.default)(e => ({
                    flex: 1,
                    justifyContent: "center"
                })),
                J = (0, w.default)(P.default)(e => ({
                    marginRight: 12,
                    marginLeft: 12,
                    alignItems: "center",
                    justifyContent: "center"
                })),
                W = (0, w.default)(x.default)({
                    marginRight: 12
                }),
                G = {
                    includeGroups: !0,
                    includePages: !1,
                    includeIntegratedMessageSearchResults: !1,
                    includeSecureThreads: !1
                };
            let V;
            t.InviteItemStatus = V,
                function (e) {
                    e[e.UNCLICKED = 0] = "UNCLICKED", e[e.CLICKED = 1] = "CLICKED", e[e.SENDING = 2] = "SENDING"
                }(V || (t.InviteItemStatus = V = {}));
            const U = {
                    goBack: _.RoomActions.roomGoBack,
                    addRoomInvitees: _.RoomActions.addRoomInvitees,
                    searchQueryChanged: b.InboxActions.search.searchQueryChanged,
                    setModalConfirmationBox: _.RoomActions.setModalConfirmationBox,
                    beginJoinRoom: _.RoomActions.beginJoinRoom
                },
                Y = (0, O.connect)((function () {
                    const e = (0, k.getManageParticipantsViewSuggestionsSelector)();
                    return t => {
                        var n;
                        const o = (0, b.getSearchInfo)(t, c.SearchSource.ThreadDetails),
                            l = e(t),
                            {
                                isLoadingMoreSearchResults: a,
                                hasNoSearchResults: r
                            } = (0, R.getSearchStatus)(o, o.mostRecentSearchQuery);
                        return {
                            suggestions: l,
                            roomInfo: null === (n = (0, C.getCurrentRoom)(t)) || void 0 === n ? void 0 : n.roomInfo,
                            userName: (0, h.requireAuthenticationData)(t).firstName,
                            searchResults: {
                                [y.ThreadCategory.Results]: (0, b.selectSearchResultsForThreadDetails)(t)
                            },
                            isLoadingMoreSearchResults: a,
                            hasNoSearchResults: r,
                            funnelSessionId: (0, C.getFunnelSessionId)(t)
                        }
                    }
                }), U)((function (e) {
                    const {
                        roomInfo: t,
                        userName: n,
                        addRoomInvitees: h,
                        roomId: y,
                        searchResults: v = {},
                        suggestions: k = {},
                        searchQueryChanged: b,
                        isLoadingMoreSearchResults: _,
                        hasNoSearchResults: C,
                        setModalConfirmationBox: w,
                        goBack: R,
                        beginJoinRoom: O,
                        onClose: M,
                        funnelSessionId: x
                    } = e, A = (0, i.useTheme)();
                    (0, r.useModalInfo)({
                        title: m.default._("Invited", null, {
                            hk: "4En77p"
                        }).toString(),
                        onGoBack: R
                    });
                    const [B, D] = (0, I.useState)(""), U = (0, I.useRef)({}), [Y, H] = (0, I.useState)({}), q = (0, g.default)(B, 200);
                    (0, I.useEffect)(() => {
                        null != q && b(q, G, c.SearchSource.ThreadDetails)
                    }, [b, q]);
                    const K = (0, I.useCallback)(e => {
                            const t = e.resultId;
                            return H(e => ({
                                ...e,
                                [t]: V.CLICKED
                            })), U.current.resultId = window.setTimeout(() => {
                                H(e => ({
                                    ...e,
                                    [t]: V.SENDING
                                })), y && h(y, [t], x || "")
                            }, 3e3), () => {
                                window.clearTimeout(U.current.resultId)
                            }
                        }, [x, y, h]),
                        X = (0, I.useCallback)(e => {
                            const t = e.resultId;
                            H(e => ({
                                ...e,
                                [t]: V.UNCLICKED
                            })), window.clearTimeout(U.current.resultId)
                        }, []),
                        Q = (0, I.useCallback)(() => {
                            t && (p.default.clipboard.writeClipboard(t.url), w({
                                type: E.RoomConfirmationBoxType.COPY_LINK,
                                timeout: S.ROOM_CONFIRMATION_BOX_TIMEOUT
                            }))
                        }, [t, w]);
                    if (!t) return I.default.createElement(P.default, {
                        css: {
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 12
                        }
                    }, I.default.createElement(l.default, {
                        size: l.SpinnerSize.Medium
                    }));
                    const Z = m.default._("Done", null, {
                            hk: "1pOt6v"
                        }).toString(),
                        $ = m.default._("Join Room", null, {
                            hk: "asQb6"
                        }).toString(),
                        ee = (t.emoji ? t.emoji + " " : "") + (t.name || ""),
                        te = t.audienceType === c.RoomAudienceType.Anyone;
                    return I.default.createElement(j.default, {
                        name: "manageParticipants"
                    }, I.default.createElement(N, null, I.default.createElement(L, null, I.default.createElement(F, null, I.default.createElement(f.default, {
                        size: 64
                    })), I.default.createElement(z, null, I.default.createElement(T.default, {
                        use: "subtext-bold"
                    }, ee), I.default.createElement(T.default, {
                        use: "caption",
                        color: A.semanticColors.textSecondary
                    }, m.default._("Created by {Name of room creator}", [m.default._param("Name of room creator", n)], {
                        hk: "2LxSio"
                    })), te && I.default.createElement(T.default, {
                        use: "caption",
                        color: A.semanticColors.textSecondary
                    }, t.url)), te && I.default.createElement(J, null, I.default.createElement(o.default, {
                        icon: s.default,
                        size: d.RoundButtonSize.Large,
                        "aria-label": m.default._("Copy Link", null, {
                            hk: "3YyBLC"
                        }).toString(),
                        buttonColor: A.colors.base30,
                        telemetryName: "copy_room_url",
                        onClick: Q
                    }))), I.default.createElement(W, {
                        query: B,
                        onQueryChange: D,
                        autoFocus: !0
                    }), I.default.createElement(u.default, {
                        threadCategories: B && v ? v : k,
                        onInvite: K,
                        onUninvite: X,
                        isLoadingMoreSearchResults: _,
                        hasNoSearchResults: C,
                        inviteStatus: Y
                    }), I.default.createElement(a.ModalFooter, {
                        primaryButton: {
                            label: $,
                            telemetryName: "joinRoom",
                            onClick: () => O(t.roomId)
                        },
                        cancelButton: {
                            label: Z,
                            telemetryName: "doneButton",
                            onClick: () => M && M()
                        }
                    })))
                }))
        },
        2178: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = n(58),
                l = R(n(113)),
                a = R(n(2179)),
                r = R(n(2180)),
                i = R(n(1951)),
                u = R(n(604)),
                c = n(2183),
                d = R(n(608)),
                s = R(n(2184)),
                f = n(140),
                m = n(65),
                p = n(240),
                g = n(49),
                h = n(28),
                y = n(11),
                v = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = w();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                k = R(n(601)),
                b = R(n(602)),
                E = R(n(603)),
                _ = R(n(612)),
                S = R(n(613)),
                C = R(n(13));

            function w() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return w = function () {
                    return e
                }, e
            }

            function R(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const O = {
                goBack: m.RoomActions.roomGoBack,
                clearModal: h.AppContextActions.clearModal,
                clearRoomDialog: m.RoomActions.clearRoomDialog,
                setModalConfirmationBox: m.RoomActions.setModalConfirmationBox,
                goToInviteToRoomView: m.RoomActions.goToInviteToRoomView,
                cancelJoinMeetup: g.RtcActions.cancelJoinMeetup
            };
            var I = (0, y.connect)((function (e) {
                return {
                    activeScreenInfo: (0, p.getActiveScreenInfo)(e),
                    confirmationBox: (0, p.getConfirmationBox)(e)
                }
            }), O)((function (e) {
                const {
                    goBack: t,
                    clearModal: n,
                    activeScreenInfo: m,
                    clearRoomDialog: p,
                    confirmationBox: g,
                    setModalConfirmationBox: h,
                    goToInviteToRoomView: y,
                    cancelJoinMeetup: w
                } = e, R = (0, v.useCallback)(() => h(null), [h]), O = (0, v.useCallback)(() => {
                    n(), p(), R(), (null == m ? void 0 : m.screen) === f.RoomScreen.JOIN_ROOM && w()
                }, [p, n, R, w, m]);
                (0, v.useEffect)(() => {
                    m || O()
                }, [m, O]);
                let I = null;
                switch (null == m ? void 0 : m.screen) {
                    case f.RoomScreen.NUX:
                        I = v.default.createElement(d.default, {
                            onClose: O
                        });
                        break;
                    case f.RoomScreen.CREATE_ROOM:
                    case f.RoomScreen.EDIT_ROOM:
                        I = v.default.createElement(b.default, {
                            onClose: O
                        });
                        break;
                    case f.RoomScreen.CREATE_ROOM_ACTIVITY:
                        I = v.default.createElement(E.default, null);
                        break;
                    case f.RoomScreen.CHOOSE_ROOM_ACTIVITY:
                        I = v.default.createElement(k.default, null);
                        break;
                    case f.RoomScreen.CHOOSE_ROOM_PRIVACY:
                        I = v.default.createElement(S.default, null);
                        break;
                    case f.RoomScreen.CHOOSE_ROOM_JOIN_PERMISSION:
                        I = v.default.createElement(_.default, null);
                        break;
                    case f.RoomScreen.YOUR_ROOMS:
                        I = v.default.createElement(s.default, {
                            onClose: O
                        });
                        break;
                    case f.RoomScreen.JOIN_ROOM:
                        I = v.default.createElement(r.default, {
                            roomId: null == m ? void 0 : m.roomId,
                            onClose: O
                        });
                        break;
                    case f.RoomScreen.PRIVACY_POLICY:
                        I = v.default.createElement(u.default, {
                            goBack: t
                        });
                        break;
                    case f.RoomScreen.INVITED_PARTICIPANTS:
                        I = v.default.createElement(a.default, {
                            roomId: null == m ? void 0 : m.roomId
                        });
                        break;
                    case f.RoomScreen.MANAGE_PARTICIPANTS:
                        I = v.default.createElement(i.default, {
                            roomId: null == m ? void 0 : m.roomId,
                            onClose: O
                        })
                }
                let M = null;
                switch (null == g ? void 0 : g.type) {
                    case f.RoomConfirmationBoxType.COPY_LINK:
                        M = {
                            box: v.default.createElement(c.LinkCopiedBox, null),
                            timeout: null == g ? void 0 : g.timeout,
                            onClose: R
                        };
                        break;
                    case f.RoomConfirmationBoxType.PENDING:
                        M = {
                            box: v.default.createElement(c.PendingBox, null),
                            timeout: null == g ? void 0 : g.timeout,
                            onClose: R
                        };
                        break;
                    case f.RoomConfirmationBoxType.ROOM_CREATED:
                        M = {
                            box: v.default.createElement(c.RoomCreatedBox, null),
                            timeout: null == g ? void 0 : g.timeout,
                            onClose: () => {
                                (null == g ? void 0 : g.roomId) && y(g.roomId), R()
                            }
                        };
                        break;
                    case f.RoomConfirmationBoxType.ROOM_CREATION_TIMEOUT:
                        M = {
                            box: v.default.createElement(c.RoomCreationTimeoutBox, null),
                            timeout: null == g ? void 0 : g.timeout,
                            onClose: R
                        }
                }
                return (v.default.createElement(C.default, {
                    name: "roomModal"
                }, v.default.createElement(l.default, {
                    width: 420,
                    onClose: O,
                    hideCloseButton: !0
                }, I, M && v.default.createElement(o.ModalConfirmationBox, {
                    onClose: M.onClose,
                    timeout: M.timeout
                }, M.box))))
            }));
            t.default = I
        },
        2179: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InvitedParticipantsListView = S, t.default = void 0;
            var o = b(n(99)),
                l = n(58),
                a = b(n(45)),
                r = b(n(27)),
                i = b(n(5)),
                u = n(140),
                c = n(65),
                d = n(240),
                s = n(11),
                f = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = k();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                m = b(n(33)),
                p = n(113),
                g = b(n(339)),
                h = b(n(13)),
                y = n(6),
                v = b(n(4));

            function k() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return k = function () {
                    return e
                }, e
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const E = (0, o.default)(m.default, {
                    target: "e1mgg8d00",
                    label: "Container"
                })({
                    name: "1n92wyp",
                    styles: "flex:1;margin-right:12px;margin-left:12px;margin-top:8px;"
                }),
                _ = (0, o.default)(a.default, {
                    target: "e1mgg8d01",
                    label: "ScrollContainer"
                })({
                    name: "1rr4qq7",
                    styles: "flex:1;"
                });

            function S({
                invitedParticipants: e,
                roomId: t,
                setActiveScreen: n,
                goBack: o
            }) {
                const a = (0, y.useTheme)();
                (0, p.useModalInfo)({
                    title: i.default._("Who's Invited", null, {
                        hk: "2CvVNb"
                    }).toString(),
                    onGoBack: o,
                    height: 400
                });
                const c = (0, f.useCallback)(() => {
                    t && n({
                        screen: u.RoomScreen.MANAGE_PARTICIPANTS,
                        roomId: t
                    })
                }, [n, t]);
                if (!e) return null;
                const d = i.default._("Invite", null, {
                    hk: "4voZKM"
                }).toString();
                return (f.default.createElement(h.default, {
                    name: "invitedParticipants"
                }, f.default.createElement(E, null, f.default.createElement(_, null, e.length > 0 ? e.map(e => f.default.createElement(g.default, {
                    profilePictureUrl: (0, r.default)(e.profilePicture),
                    participantName: e.name,
                    key: e.id
                })) : f.default.createElement(v.default, {
                    use: "subtext",
                    wrapText: !0,
                    color: a.semanticColors.textSecondary,
                    textAlign: "center"
                }, i.default._("You haven't invited anyone to join yet.", null, {
                    hk: "17sOt1"
                }).toString()))), f.default.createElement(l.ModalFooter, {
                    primaryButton: {
                        label: d,
                        telemetryName: "inviteParticipantsButton",
                        onClick: c
                    }
                })))
            }
            const C = {
                goBack: c.RoomActions.roomGoBack,
                setActiveScreen: c.RoomActions.setActiveScreen
            };
            var w = (0, s.connect)((function (e) {
                return {
                    invitedParticipants: (0, d.getCurrentRoom)(e).invitedParticipants
                }
            }), C)(S);
            t.default = w
        },
        2180: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = x(n(99)),
                l = P(n(82)),
                a = n(58),
                r = x(n(171)),
                i = x(n(27)),
                u = x(n(59)),
                c = n(8),
                d = x(n(5)),
                s = x(n(102)),
                f = x(n(595)),
                m = x(n(243)),
                p = n(61),
                g = n(65),
                h = n(240),
                y = n(92),
                v = n(49),
                k = n(115),
                b = n(11),
                E = P(n(0)),
                _ = P(n(2)),
                S = x(n(116)),
                C = n(113),
                w = x(n(38)),
                R = x(n(13)),
                O = n(6),
                I = x(n(4));

            function M() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return M = function () {
                    return e
                }, e
            }

            function P(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = M();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                    } return n.default = e, t && t.set(e, n), n
            }

            function x(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const j = (0, o.default)(_.default, {
                    target: "ek52kgk0",
                    label: "MainContent"
                })({
                    name: "1sdy6mu",
                    styles: "margin-right:24px;margin-left:24px;align-items:center;justify-content:center;"
                }),
                T = (0, o.default)(_.default, {
                    target: "ek52kgk1",
                    label: "Title"
                })({
                    name: "kav8mn",
                    styles: "margin-top:12px;margin-bottom:28px;"
                }),
                A = (0, o.default)(I.default, {
                    target: "ek52kgk2",
                    label: "LinkText"
                })({
                    name: "15fzge",
                    styles: "margin-left:4px;"
                }),
                B = (0, o.default)(_.default, {
                    target: "ek52kgk3",
                    label: "PrivacyNotice"
                })({
                    name: "uvsiz1",
                    styles: "flex-direction:row;margin-bottom:10px;justify-content:center;"
                }),
                D = (0, o.default)(_.default, {
                    target: "ek52kgk4",
                    label: "ActiveParticipantsInfo"
                })({
                    name: "1pp2zip",
                    styles: "align-items:center;justify-content:center;margin-bottom:10px;margin-top:10px;"
                }),
                N = (0, o.default)(I.default, {
                    target: "ek52kgk5",
                    label: "ActiveParticipantsText"
                })({
                    name: "1q7njkh",
                    styles: "margin-top:10px;"
                }),
                L = (0, o.default)(_.FocusableView, {
                    target: "ek52kgk6",
                    label: "SpinnerContent"
                })({
                    name: "ll4o86",
                    styles: "flex:1;align-items:center;justify-content:center;height:200px;"
                }),
                F = (0, o.default)(l.default, {
                    target: "ek52kgk7",
                    label: "Spinner"
                })({
                    name: "1qf34hy",
                    styles: "margin:0;margin-left:8px;"
                });
            const z = {
                goBack: g.RoomActions.roomGoBack,
                fetchCurrentRoomInfo: g.RoomActions.fetchCurrentRoomInfo,
                showPrivacyNotice: g.RoomActions.showPrivacyNotice,
                joinMeetup: y.RtcActions.joinMeetup,
                attemptJoinMeetup: y.RtcActions.attemptJoinMeetup,
                abandonJoinMeetup: y.RtcActions.abandonJoinMeetup,
                beginJoinMeetup: y.RtcActions.beginJoinMeetup,
                cancelJoinMeetup: y.RtcActions.cancelJoinMeetup
            };
            var J = (0, b.connect)((function (e, {
                roomId: t
            }) {
                var n, o;
                return {
                    userId: (0, p.requireAuthenticationData)(e).userID,
                    activeParticipants: (0, h.getCurrentRoom)(e).activeParticipants,
                    roomInfo: null === (n = (0, h.getCurrentRoom)(e)) || void 0 === n ? void 0 : n.roomInfo,
                    ownerInfo: null === (o = (0, h.getCurrentRoom)(e)) || void 0 === o ? void 0 : o.ownerInfo,
                    joiningMeetupInfo: (0, v.getJoiningMeetupInfo)(e)
                }
            }), z)((function ({
                goBack: e,
                onClose: t,
                roomId: n,
                fetchCurrentRoomInfo: o,
                userId: p,
                showPrivacyNotice: g,
                activeParticipants: h,
                roomInfo: y,
                ownerInfo: v,
                joinMeetup: b,
                attemptJoinMeetup: M,
                abandonJoinMeetup: P,
                funnelSessionId: x,
                joiningMeetupInfo: z,
                beginJoinMeetup: J,
                cancelJoinMeetup: W
            }) {
                (0, C.useModalInfo)({
                    title: ""
                });
                const G = (0, O.useTheme)();
                (0, E.useEffect)(() => {
                    n && o(n), y && J(null == y ? void 0 : y.url)
                }, [o, n, y, J]);
                const V = (0, f.default)(),
                    U = p === (null == v ? void 0 : v.contactId);
                let Y = y ? y.lockStatus : "";
                U && (Y = c.MeetupLockStatus.OPEN);
                const H = V ? !!(null == z ? void 0 : z.isOpen) : Y === c.MeetupLockStatus.OPEN,
                    q = !!y && y.callStarttimestampMs > Date.now(),
                    K = !y,
                    X = !z || 0 === z.status,
                    Q = !v,
                    Z = K || Q || !h || X,
                    $ = !(U || H || K || Q || q),
                    ee = null == y ? void 0 : y.url,
                    te = (0, E.useCallback)(() => {
                        ee && (b(ee, x), t())
                    }, [b, ee, x, t]),
                    ne = (0, E.useCallback)(() => {
                        ee && M(ee, x)
                    }, [M, ee, x]),
                    oe = (0, E.useCallback)(() => {
                        ee && (P(ee, x), W())
                    }, [P, ee, x, W]);
                (0, E.useEffect)(() => {
                    $ && ne()
                }, [ne, $]);
                const le = (0, E.useCallback)(() => {
                        $ && oe(), W(), e()
                    }, [e, oe, $, W]),
                    ae = (0, s.default)(),
                    re = (0, E.useRef)(),
                    [ie, ue] = (0, E.useState)(!1),
                    [ce, de] = (0, m.default)("joinroom.disclaimer", !1);
                (0, E.useEffect)(() => {
                    de(!0)
                }, [de]);
                const se = (0, E.useRef)(ce).current;
                (0, E.useEffect)(() => {
                    !Z && re.current && re.current.focus()
                }, [Z]), (0, E.useEffect)(() => {
                    if (!K && !Z && !ie) {
                        const e = V ? !(null == z ? void 0 : z.isOpen) : Y === c.MeetupLockStatus.LOCKED_BY_OWNER;
                        if (e || !(null == z ? void 0 : z.isActive)) {
                            let t, n;
                            e ? (t = d.default._("Room Unavailable", null, {
                                hk: "1C8EBw"
                            }).toString(), n = d.default._("Unable to join at this time.", null, {
                                hk: "23u9OO"
                            }).toString()) : (t = d.default._("Room Doesn't Exist", null, {
                                hk: "3VfOyg"
                            }).toString(), n = d.default._("The link has either expired or been disabled.", null, {
                                hk: "2cOGgH"
                            }).toString()), ae.platform.showMessageBox({
                                type: "info",
                                title: t,
                                message: t,
                                detail: n,
                                noLink: !0,
                                cancelId: 0,
                                buttons: [d.default._("OK", null, {
                                    hk: "33rjY6"
                                }).toString()]
                            }).then(le), ue(!0)
                        }
                    }
                }, [ae, K, Z, y, ie, le, Y, V, z]);
                const fe = d.default._("Cancel", null, {
                        hk: "2TBX29"
                    }).toString(),
                    me = d.default._("Join Room", null, {
                        hk: "asQb6"
                    }).toString(),
                    pe = (null == y ? void 0 : y.name) || "",
                    ge = (null == y ? void 0 : y.emoji) ? y.emoji + " " + pe : pe,
                    he = (null == v ? void 0 : v.firstName) || (null == v ? void 0 : v.name) || "",
                    ye = U ? d.default._("Created by you", null, {
                        hk: "FpMhe"
                    }) : d.default._("Created by {Name of room creator}", [d.default._param("Name of room creator", he)], {
                        hk: "2mc753"
                    }),
                    ve = d.default._("Learn more.", null, {
                        hk: "1ezKby"
                    }).toString();
                let ke = null;
                const be = H || Y === c.MeetupLockStatus.LOCKED_BY_OWNER_DISCONNECT;
                if (Z) {
                    const e = d.default._("Loading", null, {
                        hk: "1tAkpZ"
                    }).toString();
                    ke = E.default.createElement(L, {
                        onActivate: null,
                        "aria-label": e
                    }, E.default.createElement(F, {
                        size: l.SpinnerSize.Medium
                    }))
                } else if (be && !ie)
                    if (H) {
                        const e = h ? h.filter(e => e.id !== (null == v ? void 0 : v.contactId) && e.id !== p) : [],
                            t = E.default.createElement(r.default, {
                                size: "small",
                                profilePictureUrls: e.map(e => (0, i.default)(e.profilePicture)),
                                useCountBubble: !0,
                                countBubblePlacement: "right",
                                displayExtraCountPlus: !0
                            }),
                            n = d.default._({
                                "*": "{participantCount} people are in {the name of the room owner}s room",
                                _1: "{participantCount} person is in {the name of the room owner}s room"
                            }, [d.default._param("participantCount", e.length), d.default._plural(e.length), d.default._param("the name of the room owner", he)], {
                                hk: "1lPLGW"
                            });
                        ke = e.length > 0 && E.default.createElement(D, null, t, E.default.createElement(N, {
                            use: "subtext",
                            color: G.colors.base70,
                            textAlign: "center"
                        }, n))
                    } else ke = q ? E.default.createElement(_.default, {
                        css: {
                            marginBottom: 10
                        }
                    }, E.default.createElement(I.default, {
                        use: "subtext",
                        color: G.colors.base70,
                        textAlign: "center"
                    }, (null == y ? void 0 : y.callStarttimestampMs) ? (0, k.computeMessageListTimestamp)(y.callStarttimestampMs) : null)) : E.default.createElement(_.default, {
                        css: {
                            marginBottom: 10
                        }
                    }, E.default.createElement(I.default, {
                        use: "subtext",
                        color: G.colors.base70,
                        textAlign: "center"
                    }, d.default._("Waiting for {owner_first_name} to join", [d.default._param("owner_first_name", he)], {
                        hk: "1QAEBB"
                    })), E.default.createElement(I.default, {
                        use: "subtext",
                        color: G.colors.base70,
                        textAlign: "center"
                    }, d.default._("We've notified {owner_first_name} that you're here. Please wait.", [d.default._param("owner_first_name", he)], {
                        hk: "46BooY"
                    })));
                return (E.default.createElement(R.default, {
                    name: "joinRoomView"
                }, E.default.createElement(j, null, E.default.createElement(w.default, {
                    size: "xxlarge",
                    profilePictureUrl: (null == v ? void 0 : v.profilePicture) ? (0, i.default)(v.profilePicture) : "",
                    includeAppHeaderClipPath: !1
                }), E.default.createElement(T, null, E.default.createElement(I.default, {
                    use: "display",
                    wrapText: !0,
                    textAlign: "center"
                }, ge), E.default.createElement(I.default, {
                    use: "subtext",
                    wrapText: !0,
                    color: G.semanticColors.textSecondary,
                    textAlign: "center"
                }, ye)), E.default.createElement(_.default, null, E.default.createElement(_.default, null, ke), !U && E.default.createElement(B, null, E.default.createElement(I.default, {
                    use: "caption",
                    wrapText: !1,
                    color: G.semanticColors.textSecondary
                }, (0, u.default)({
                    messenger: d.default._("Messenger protects your privacy.", null, {
                        hk: "26orsA"
                    }),
                    workchat: d.default._("Workplace protects your privacy.", null, {
                        hk: "3miHa8"
                    })
                })), E.default.createElement(S.default, {
                    onClick: () => g(),
                    hideUnderline: !0,
                    displayAsLink: !0,
                    "aria-label": ve,
                    telemetryName: "rooms_privacy_policy_link"
                }, E.default.createElement(A, {
                    use: "caption",
                    wrapText: !1,
                    color: G.colors.blue
                }, ve))), !se && !U && E.default.createElement(I.default, {
                    use: "caption",
                    wrapText: !0,
                    textAlign: "center",
                    color: G.semanticColors.textSecondary
                }, (0, u.default)({
                    messenger: d.default._("When you join the room, people with the link or invite will be able to see your name and profile photo and that you're in it. This may include people you're not friends with on Facebook.", null, {
                        hk: "2C5sWY"
                    }),
                    workchat: d.default._("When you join the room, people with the link or invite will be able to see your name and profile photo and that you're in it.", null, {
                        hk: "1FEhit"
                    })
                })))), E.default.createElement(a.ModalFooter, {
                    cancelButton: {
                        label: fe,
                        telemetryName: "closeButton",
                        onClick: le
                    },
                    primaryButton: {
                        label: me,
                        telemetryName: "joinRoomButton",
                        onClick: te
                    }
                })))
            }));
            t.default = J
        },
        2181: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function ({
                threadCategories: e,
                isLoadingMoreSearchResults: t,
                hasNoSearchResults: n,
                inviteStatus: i,
                onInvite: c,
                onUninvite: f
            }) {
                return d.default.createElement(l.default, null, d.default.createElement(y, null, e && Object.keys(e).map(l => {
                    const p = e[l];
                    return (d.default.createElement(d.default.Fragment, {
                        key: l
                    }, d.default.createElement(s.default, {
                        css: {
                            paddingLeft: 12
                        }
                    }, d.default.createElement(m.default, {
                        title: v[l]
                    })), p && p.length > 0 && p.map(e => e.resultId ? d.default.createElement(a.default, {
                        key: e.resultId,
                        pictureUrl: (0, r.default)(e.picture),
                        secondaryPictureUrl: (0, r.default)(e.secondaryPicture),
                        displayName: e.displayName,
                        threadKey: e.resultId,
                        onInvite: () => c(e),
                        onUninvite: () => f(e),
                        inviteStatus: i[e.resultId] ? i[e.resultId] : h.UNCLICKED
                    }) : d.default.createElement(s.default, {
                        css: {
                            paddingLeft: 12
                        }
                    }, d.default.createElement(m.default, {
                        title: e.displayName
                    }))), t && d.default.createElement(o.default, {
                        size: o.SpinnerSize.Small,
                        delay: 300,
                        css: {
                            marginTop: 24,
                            marginBottom: 6
                        }
                    }), n && d.default.createElement(u.NoResultsFound, null)))
                })))
            }, t.InviteItemStatus = void 0;
            var o = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = g();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(82)),
                l = p(n(45)),
                a = p(n(2182)),
                r = p(n(27)),
                i = p(n(5)),
                u = n(1887),
                c = p(n(1)),
                d = p(n(0)),
                s = p(n(2)),
                f = p(n(33)),
                m = p(n(186));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return g = function () {
                    return e
                }, e
            }
            let h;
            t.InviteItemStatus = h,
                function (e) {
                    e[e.UNCLICKED = 0] = "UNCLICKED", e[e.CLICKED = 1] = "CLICKED", e[e.SENDING = 2] = "SENDING"
                }(h || (t.InviteItemStatus = h = {}));
            const y = (0, c.default)(f.default)({
                    paddingRight: 12,
                    paddingBottom: 8
                }),
                v = {
                    recents: null,
                    top_groups: i.default._("Groups", null, {
                        hk: "Y9z2a"
                    }).toString(),
                    connections: i.default._("People", null, {
                        hk: "SdxGQ"
                    }).toString(),
                    results: i.default._("Results", null, {
                        hk: "24rKVD"
                    }).toString()
                }
        },
        2182: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = v();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(16)),
                l = y(n(345)),
                a = n(1951),
                r = y(n(5)),
                i = y(n(245)),
                u = y(n(1)),
                c = n(1920),
                d = n(21),
                s = n(23),
                f = n(11),
                m = y(n(0)),
                p = y(n(2)),
                g = n(6),
                h = y(n(4));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function () {
                    return e
                }, e
            }
            const k = (0, u.default)(p.default)({
                    height: 50,
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    paddingLeft: 12
                }),
                b = (0, u.default)(p.default)(e => ({
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 15,
                    justifyContent: "center",
                    borderBottom: `1px solid ${e.theme.semanticColors.bgLine}`,
                    paddingTop: 8,
                    paddingBottom: 8,
                    flexDirection: "row",
                    flex: 1
                }));
            var E = (0, f.connect)((function (e, t) {
                return {
                    userID: (0, d.requireAuthenticationData)(e).userID,
                    participants: (0, s.getParticipantListForThread)(e, t.threadKey),
                    presence: (0, s.getThreadPresences)(e, t.threadKey),
                    lastMessageInfo: (0, s.getLastMessageInfoForThread)(e, t)
                }
            }))((function (e) {
                const {
                    pictureUrl: t,
                    secondaryPictureUrl: n,
                    displayName: u,
                    onInvite: d,
                    onUninvite: s,
                    inviteStatus: f,
                    userID: y,
                    participants: v,
                    presence: E
                } = e, _ = (0, i.default)(E), S = (0, g.useTheme)(), C = v.filter(e => e.contactId != y);
                let w;
                switch (f) {
                    case a.InviteItemStatus.CLICKED:
                        w = m.default.createElement(o.default, {
                            "aria-label": r.default._("Undo inviting {participant name} to the room", [r.default._param("participant name", u)], {
                                hk: "KDviC"
                            }).toString(),
                            use: o.RectangleButtonUse.Secondary,
                            caption: r.default._("Undo", null, {
                                hk: "fBjWx"
                            }).toString(),
                            telemetryName: "undoInviteButton",
                            size: o.RectangleButtonSize.Small,
                            onClick: s
                        });
                        break;
                    case a.InviteItemStatus.SENDING:
                        w = m.default.createElement(o.default, {
                            "aria-label": r.default._("Invite to {participant name} has already been sent", [r.default._param("participant name", u)], {
                                hk: "osXgm"
                            }).toString(),
                            use: o.RectangleButtonUse.Secondary,
                            caption: r.default._("Sent", null, {
                                hk: "4ylmJC"
                            }).toString(),
                            telemetryName: "sentInviteButton",
                            disabled: !0,
                            size: o.RectangleButtonSize.Small
                        });
                        break;
                    default:
                        w = m.default.createElement(o.default, {
                            "aria-label": r.default._("Send invite to {participant name}", [r.default._param("participant name", u)], {
                                hk: "1Bm7rI"
                            }).toString(),
                            use: o.RectangleButtonUse.Secondary,
                            caption: r.default._("Send", null, {
                                hk: "3qOgLX"
                            }).toString(),
                            telemetryName: "sendInviteButton",
                            disabled: !1,
                            size: o.RectangleButtonSize.Small,
                            onClick: d
                        })
                }
                return (m.default.createElement(k, {
                    role: "link"
                }, m.default.createElement(l.default, {
                    profilePictureUrl: t,
                    secondaryPictureUrl: n,
                    participants: v,
                    viewerId: y,
                    presence: _
                }), m.default.createElement(b, null, m.default.createElement(p.default, {
                    css: {
                        flex: 1
                    }
                }, m.default.createElement(h.default, {
                    use: "body-semibold"
                }, u), v.length > 2 && m.default.createElement(h.default, {
                    use: "caption",
                    color: S.colors.flatBase70
                }, (0, c.displayParticipantNames)(C))), w)))
            }));
            t.default = E
        },
        2183: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LinkCopiedBox = function () {
                return d.default.createElement(g, {
                    role: "alert"
                }, d.default.createElement(h, null, d.default.createElement(y, null, d.default.createElement(c.default, {
                    size: 24
                })), d.default.createElement(s.default, {
                    use: "body-semibold",
                    wrapText: !0,
                    textAlign: "center"
                }, r.default._("Link Copied", null, {
                    hk: "bkPoX"
                }))))
            }, t.PendingBox = function () {
                return d.default.createElement(g, {
                    role: "alert"
                }, d.default.createElement(h, null, d.default.createElement(l.default, {
                    css: {
                        width: 30,
                        height: 30,
                        marginRight: 5
                    }
                }, d.default.createElement(u.default, {
                    size: u.SpinnerSize.Small
                })), d.default.createElement(s.default, {
                    use: "body-semibold",
                    wrapText: !0,
                    textAlign: "center"
                }, r.default._("Creating...", null, {
                    hk: "1HxTAi"
                }))))
            }, t.RoomCreatedBox = function () {
                return d.default.createElement(g, {
                    role: "alert"
                }, d.default.createElement(h, null, d.default.createElement(y, null, d.default.createElement(c.default, {
                    size: 24
                })), d.default.createElement(s.default, {
                    use: "body-semibold",
                    wrapText: !0,
                    textAlign: "center"
                }, r.default._("Created", null, {
                    hk: "1dBpGO"
                }))))
            }, t.RoomCreationTimeoutBox = function () {
                return (0, d.useEffect)(() => {
                    i.default.metrics.trackStrictEvent((0, a.UserInteractionEvent)({
                        event: "impression",
                        target: "room_creation_timeout",
                        surface: "messenger"
                    }))
                }, []), d.default.createElement(g, {
                    role: "alert"
                }, d.default.createElement(h, null, d.default.createElement(l.default, {
                    css: {
                        width: 250
                    }
                }, d.default.createElement(s.default, {
                    use: "body-semibold",
                    wrapText: !0,
                    textAlign: "center"
                }, r.default._("Something went wrong with creating the room. Please try again later.", null, {
                    hk: "2v7zlu"
                })))))
            };
            var o = p(n(99)),
                l = p(n(2)),
                a = n(24),
                r = p(n(5)),
                i = p(n(9)),
                u = m(n(82)),
                c = p(n(114)),
                d = m(n(0)),
                s = p(n(4));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function () {
                    return e
                }, e
            }

            function m(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = f();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                    } return n.default = e, t && t.set(e, n), n
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const g = (0, o.default)(l.default, {
                    target: "e1e8v3lh0",
                    label: "ConfirmationBox"
                })(e => ({
                    height: 90,
                    width: 300,
                    backgroundColor: e.theme.semanticColors.bgElevatedSurface,
                    borderRadius: "4px"
                }), ""),
                h = (0, o.default)(l.default, {
                    target: "e1e8v3lh1",
                    label: "ConfirmationBoxContent"
                })({
                    name: "1qem4nl",
                    styles: "width:100%;height:100%;justify-content:center;align-items:center;flex-direction:row;"
                }),
                y = (0, o.default)(l.default, {
                    target: "e1e8v3lh2",
                    label: "IconContainer"
                })(e => ({
                    marginRight: 6,
                    color: e.theme.semanticColors.textPrimary
                }), "")
        },
        2184: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = w(n(99)),
                l = w(n(2)),
                a = n(66),
                r = C(n(82)),
                i = n(58),
                u = n(113),
                c = w(n(45)),
                d = w(n(13)),
                s = n(6),
                f = w(n(2185)),
                m = w(n(185)),
                p = w(n(5)),
                g = n(101),
                h = n(65),
                y = n(240),
                v = n(115),
                k = n(11),
                b = C(n(0)),
                E = w(n(33)),
                _ = w(n(4));

            function S() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return S = function () {
                    return e
                }, e
            }

            function C(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = S();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                    } return n.default = e, t && t.set(e, n), n
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const R = (0, o.default)(E.default, {
                    target: "ek8xx2u0",
                    label: "Container"
                })({
                    name: "1n92wyp",
                    styles: "flex:1;margin-right:12px;margin-left:12px;margin-top:8px;"
                }),
                O = (0, o.default)(c.default, {
                    target: "ek8xx2u1",
                    label: "ScrollContainer"
                })({
                    name: "1rr4qq7",
                    styles: "flex:1;"
                });

            function I(e, t) {
                return e > (0, m.default)(Date.now()).valueOf() ? (0, v.computeMessageListTimestamp)(e) : function (e) {
                    return 0 === e ? p.default._("Waiting for others to join", null, {
                        hk: "bvLlS"
                    }) : 1 === e ? p.default._("1 person is here", null, {
                        hk: "2f1ZQN"
                    }) : p.default._("{partcipant count} people are here", [p.default._param("partcipant count", e)], {
                        hk: "DqjHi"
                    })
                }(t)
            }
            const M = {
                beginCreateRoom: h.RoomActions.beginCreateRoom,
                beginJoinRoom: h.RoomActions.beginJoinRoom,
                goToInviteToRoomView: h.RoomActions.goToInviteToRoomView
            };
            var P = (0, k.connect)((function (e) {
                return {
                    ownedRooms: (0, y.getOwnedRooms)(e)
                }
            }), M)((function ({
                onClose: e,
                ownedRooms: t,
                beginJoinRoom: n,
                beginCreateRoom: o,
                goToInviteToRoomView: c
            }) {
                const m = (0, s.useTheme)();
                (0, u.useModalInfo)({
                    title: p.default._("Your Rooms", null, {
                        hk: "3bEq6D"
                    }).toString(),
                    height: 400
                });
                const h = p.default._("Close", null, {
                        hk: "XiP8W"
                    }).toString(),
                    y = p.default._("Create New Room", null, {
                        hk: "3fDXDi"
                    }).toString(),
                    v = (0, b.useCallback)(e => {
                        n(e)
                    }, [n]),
                    {
                        showContextMenu: k
                    } = (0, a.useContextMenu)();
                return b.default.createElement(d.default, {
                    name: "yourRoomsView"
                }, b.default.createElement(O, null, b.default.createElement(R, null, t ? t.length > 0 ? t.map(e => b.default.createElement(l.default, {
                    key: e.roomId
                }, b.default.createElement(f.default, {
                    roomName: e.name,
                    emoji: e.emoji,
                    subtitle: I(e.callStarttimestampMs, e.activeParticipantCount),
                    onClick: t => (async (e, t) => {
                        e.stopPropagation(), await k({
                            target: e.currentTarget,
                            items: [(0, g.getGoToInviteToRoomView)(t.roomId), (0, g.getGoToInvitedParticipantsView)(t.roomId), (0, g.getCopyRoomsUrl)(t.url), (0, g.getEditRoom)(t), (0, g.getRevokeRoomItem)(t.roomId, m.colors.red)]
                        })
                    })(t, e),
                    onJoinRoom: () => v(e.roomId),
                    onInvite: () => c(e.roomId),
                    isScheduled: Date.now() < e.callStarttimestampMs,
                    key: e.roomId
                }))) : b.default.createElement(_.default, {
                    use: "subtext",
                    wrapText: !0,
                    color: m.semanticColors.textSecondary,
                    textAlign: "center"
                }, p.default._("You currently don't own any rooms.", null, {
                    hk: "L5hSt"
                }).toString()) : b.default.createElement(r.default, {
                    size: r.SpinnerSize.Medium
                }))), b.default.createElement(i.ModalFooter, {
                    cancelButton: {
                        label: h,
                        telemetryName: "closeYourRoomsModal",
                        onClick: e
                    },
                    primaryButton: {
                        label: y,
                        telemetryName: "goToCreateRoomViewButton",
                        onClick: o
                    }
                }))
            }));
            t.default = P
        },
        2185: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    roomName: t,
                    emoji: n,
                    subtitle: r,
                    isScheduled: c,
                    onClick: f,
                    onJoinRoom: m,
                    onInvite: p,
                    ...k
                } = e, b = (0, l.useTheme)(), E = `${n||""} ${t}`;
                return (u.default.createElement(h, g({
                    "aria-label": t
                }, k), u.default.createElement(y, {
                    telemetryName: "your_room_cell",
                    onActivate: m
                }, u.default.createElement(s.default, {
                    use: "body-semibold"
                }, E), r && u.default.createElement(s.default, {
                    use: "subtext-medium",
                    color: b.colors.base70,
                    wrapText: !1
                }, r)), c ? u.default.createElement(d.default, {
                    "aria-label": a.default._("Invite to room button", null, {
                        hk: "2zwqHu"
                    }).toString(),
                    caption: a.default._("Invite", null, {
                        hk: "3fy3Y9"
                    }),
                    use: d.RectangleButtonUse.MatchTheme,
                    size: d.RectangleButtonSize.Small,
                    telemetryName: "invite-to-room-from-your-rooms",
                    onClick: p
                }) : u.default.createElement(d.default, {
                    "aria-label": a.default._("Join room button", null, {
                        hk: "3ikL84"
                    }).toString(),
                    caption: a.default._("Join", null, {
                        hk: "HhIkN"
                    }),
                    use: d.RectangleButtonUse.MatchTheme,
                    size: d.RectangleButtonSize.Small,
                    telemetryName: "join-room-from-your-rooms",
                    onClick: m
                }), u.default.createElement(v, {
                    use: o.RoundButtonUse.Transparent,
                    size: o.RoundButtonSize.Small,
                    "aria-label": a.default._("More Actions", null, {
                        hk: "1H0alW"
                    }).toString(),
                    telemetryName: "roomCellContextMenuButton",
                    onClick: f,
                    icon: i.default
                })))
            };
            var o = p(n(22)),
                l = n(6),
                a = f(n(5)),
                r = f(n(1)),
                i = f(n(256)),
                u = f(n(0)),
                c = p(n(2)),
                d = p(n(16)),
                s = f(n(4));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function () {
                    return e
                }, e
            }

            function p(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                    } return n.default = e, t && t.set(e, n), n
            }

            function g() {
                return (g = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }).apply(this, arguments)
            }
            const h = (0, r.default)(c.default)(e => ({
                    minHeight: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: 12,
                    marginLeft: 12,
                    ":not(:last-child)": {
                        borderBottom: `1px solid ${e.theme.semanticColors.bgLine}`
                    }
                })),
                y = (0, r.default)(c.FocusableView)({
                    flex: 1,
                    justifyContent: "center"
                }),
                v = (0, r.default)(o.default)(e => ({
                    alignItems: "center",
                    justifyContent: "center",
                    height: 32,
                    width: 32
                }))
        },
        244: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return l.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, l.default.createElement("path", {
                    fill: "currentColor",
                    d: "M21.996 19.317c-1.405 1.406-3.747 1.408-5.23-.075a1.25 1.25 0 00-1.768 1.768c2.423 2.424 6.349 2.494 8.767.076l3.46-3.461c2.419-2.418 2.35-6.344-.075-8.767-2.423-2.424-6.348-2.494-8.766-.076l-.557.557a1.25 1.25 0 001.769 1.768l.556-.556c1.406-1.406 3.747-1.408 5.23.075 1.483 1.483 1.48 3.825.075 5.23l-3.46 3.461z"
                }), l.default.createElement("path", {
                    fill: "currentColor",
                    d: "M14.012 16.69c1.406-1.405 3.747-1.407 5.23.076a1.25 1.25 0 001.768-1.768c-2.423-2.424-6.348-2.493-8.766-.076l-3.462 3.462c-2.418 2.418-2.348 6.343.076 8.766 2.423 2.424 6.349 2.494 8.767.076l.556-.557a1.25 1.25 0 00-1.768-1.768l-.557.556c-1.405 1.406-3.747 1.408-5.23-.075-1.483-1.483-1.48-3.824-.075-5.23l3.461-3.461z"
                }))
            };
            var o, l = (o = n(0)) && o.__esModule ? o : {
                default: o
            }
        },
        246: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o, l = n(8),
                a = (o = n(5)) && o.__esModule ? o : {
                    default: o
                };
            var r = {
                privacyOptions: {
                    [l.RoomAudienceType.Anyone]: a.default._("Friends you invite and people with the link", null, {
                        hk: "2bzOZl"
                    }),
                    [l.RoomAudienceType.InvitedOnly]: a.default._("Only friends you invite", null, {
                        hk: "1ieYA9"
                    })
                },
                joinPermissions: {
                    [l.RoomJoinPermission.AnyoneWhoCanLoadTheLink]: a.default._("Anyone with the link", null, {
                        hk: "36PYjB"
                    }),
                    [l.RoomJoinPermission.RequiresJoinRequest]: a.default._("Only people you approve", null, {
                        hk: "40bObz"
                    })
                }
            };
            t.default = r
        },
        248: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    title: t,
                    subtitle: n,
                    style: o
                } = e, a = e.icon, u = (0, r.useTheme)();
                return l.default.createElement(c, {
                    style: o
                }, l.default.createElement(a, {
                    size: 36,
                    color: u.colors.blueGrey75
                }), l.default.createElement(d, null, l.default.createElement(i.default, {
                    use: "body-semibold",
                    numberOfLines: 1
                }, t), l.default.createElement(i.default, {
                    use: "caption",
                    wrapText: !0,
                    color: u.colors.base70
                }, n)))
            };
            var o = u(n(1)),
                l = u(n(0)),
                a = u(n(2)),
                r = n(6),
                i = u(n(4));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, o.default)(a.default)(e => ({
                    width: "100%",
                    minHeight: 48,
                    paddingTop: 8,
                    paddingBottom: 8,
                    alignItems: "center",
                    flexDirection: "row"
                })),
                d = (0, o.default)(a.default)(e => ({
                    flex: 1,
                    paddingLeft: 16
                }))
        },
        353: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return l.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, l.default.createElement("path", {
                    fill: "currentColor",
                    d: "M18 9c-.69 0-1.25.56-1.25 1.25v6.25a.25.25 0 01-.25.25h-6.25a1.25 1.25 0 100 2.5h6.25a.25.25 0 01.25.25v6.25a1.25 1.25 0 102.5 0V19.5a.25.25 0 01.25-.25h6.25a1.25 1.25 0 100-2.5H19.5a.25.25 0 01-.25-.25v-6.25C19.25 9.56 18.69 9 18 9z"
                }))
            };
            var o, l = (o = n(0)) && o.__esModule ? o : {
                default: o
            }
        },
        594: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return l.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 80 80",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, l.default.createElement("path", {
                    fill: "url(#RoomsRebrandLogoIcon__paint0_linear)",
                    d: "M0 0h80v80H0V0z"
                }), l.default.createElement("g", {
                    filter: "url(#RoomsRebrandLogoIcon__filter0_di)"
                }, l.default.createElement("path", {
                    fill: "url(#RoomsRebrandLogoIcon__paint1_linear)",
                    fillRule: "evenodd",
                    d: "M25.815 55h18.74c3.764 0 6.815-2.985 6.815-6.667V31.667c0-3.682-3.051-6.667-6.814-6.667H25.815C22.05 25 19 27.985 19 31.667v16.666C19 52.015 22.051 55 25.815 55zm7.666-23.333c0-.92.763-1.667 1.704-1.667s1.704.746 1.704 1.667v6.666h6.815c.94 0 1.703.747 1.703 1.667s-.762 1.667-1.703 1.667h-6.815v6.666c0 .92-.763 1.667-1.704 1.667-.94 0-1.704-.746-1.704-1.667v-6.666h-6.814c-.941 0-1.704-.747-1.704-1.667s.763-1.667 1.704-1.667h6.814v-6.666zm29.053 17.332l-6.344-3.106a2.497 2.497 0 01-1.412-2.238v-7.308c0-.948.547-1.815 1.412-2.239l6.344-3.105c1.134-.555 2.466.252 2.466 1.492v15.012c0 1.24-1.332 2.046-2.466 1.492z",
                    clipRule: "evenodd"
                })), l.default.createElement("defs", null, l.default.createElement("linearGradient", {
                    id: "RoomsRebrandLogoIcon__paint0_linear",
                    x1: ".001",
                    x2: "87.324",
                    y1: "79.984",
                    y2: "6.965",
                    gradientUnits: "userSpaceOnUse"
                }, l.default.createElement("stop", {
                    stopColor: "#09F"
                }), l.default.createElement("stop", {
                    offset: ".5",
                    stopColor: "#9F33FF"
                }), l.default.createElement("stop", {
                    offset: ".821",
                    stopColor: "#FF529D"
                }), l.default.createElement("stop", {
                    offset: "1",
                    stopColor: "#FF7161"
                })), l.default.createElement("linearGradient", {
                    id: "RoomsRebrandLogoIcon__paint1_linear",
                    x1: "21.558",
                    x2: "45.958",
                    y1: "53.332",
                    y2: "15.918",
                    gradientUnits: "userSpaceOnUse"
                }, l.default.createElement("stop", {
                    stopColor: "#fff"
                }), l.default.createElement("stop", {
                    offset: ".51",
                    stopColor: "#F2F2F2"
                }), l.default.createElement("stop", {
                    offset: "1",
                    stopColor: "#fff"
                })), l.default.createElement("filter", {
                    id: "RoomsRebrandLogoIcon__filter0_di",
                    width: "60",
                    height: "44",
                    x: "14",
                    y: "20",
                    colorInterpolationFilters: "sRGB",
                    filterUnits: "userSpaceOnUse"
                }, l.default.createElement("feFlood", {
                    floodOpacity: "0",
                    result: "BackgroundImageFix"
                }), l.default.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }), l.default.createElement("feOffset", {
                    dx: "2",
                    dy: "2"
                }), l.default.createElement("feGaussianBlur", {
                    stdDeviation: "3.5"
                }), l.default.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                }), l.default.createElement("feBlend", {
                    in2: "BackgroundImageFix",
                    result: "effect1_dropShadow"
                }), l.default.createElement("feBlend", {
                    in: "SourceGraphic",
                    in2: "effect1_dropShadow",
                    result: "shape"
                }), l.default.createElement("feColorMatrix", {
                    in: "SourceAlpha",
                    result: "hardAlpha",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                }), l.default.createElement("feOffset", {
                    dx: "-1",
                    dy: "-1"
                }), l.default.createElement("feGaussianBlur", {
                    stdDeviation: "1.5"
                }), l.default.createElement("feComposite", {
                    in2: "hardAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic"
                }), l.default.createElement("feColorMatrix", {
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                }), l.default.createElement("feBlend", {
                    in2: "shape",
                    result: "effect2_innerShadow"
                }))))
            };
            var o, l = (o = n(0)) && o.__esModule ? o : {
                default: o
            }
        },
        601: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ChooseRoomActivityForm = O, t.default = void 0;
            var o = v(n(33)),
                l = v(n(13)),
                a = n(6),
                r = v(n(353)),
                i = v(n(5)),
                u = n(140),
                c = n(65),
                d = v(n(1)),
                s = n(11),
                f = v(n(0)),
                m = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = y();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(2)),
                p = n(113),
                g = v(n(45)),
                h = v(n(4));

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function () {
                    return e
                }, e
            }

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const k = (0, d.default)(g.default)(e => ({
                    width: "100%",
                    height: 500,
                    padding: "2px 12px 16px 12px",
                    alignItems: "center"
                })),
                b = (0, d.default)(o.default)(e => ({
                    width: "100%",
                    display: "grid",
                    marginTop: 24,
                    gridTemplateColumns: "repeat(auto-fill, 82px)",
                    columnGap: 12,
                    rowGap: 36
                })),
                E = (0, d.default)(m.FocusableView)(e => ({
                    flexGrow: 0,
                    justifyContent: "start",
                    alignItems: "center"
                })),
                _ = (0, d.default)(m.default)(e => ({
                    width: 50,
                    height: 50,
                    backgroundColor: e.theme.semanticColors.bgSurfaceSecondary,
                    borderRadius: "50%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 12,
                    marginBottom: 12,
                    color: e.theme.semanticColors.textPrimary
                }));

            function S(e) {
                const {
                    emoji: t,
                    label: n
                } = e, o = (0, a.useTheme)().select({
                    mac: "headline",
                    win: "display"
                });
                return f.default.createElement(E, {
                    role: "button",
                    onActivate: () => {
                        e.onSelect && e.onSelect([t, n])
                    }
                }, f.default.createElement(_, null, f.default.createElement(h.default, {
                    use: o
                }, t)), f.default.createElement(h.default, {
                    use: "caption",
                    numberOfLines: 2,
                    textAlign: "center"
                }, n))
            }

            function C(e) {
                const {
                    onClick: t
                } = e;
                return (f.default.createElement(E, {
                    role: "button",
                    onActivate: () => {
                        t && t()
                    }
                }, f.default.createElement(_, null, f.default.createElement(r.default, {
                    size: 24
                })), f.default.createElement(h.default, {
                    use: "caption"
                }, i.default._("New", null, {
                    hk: "1lraKx"
                }))))
            }

            function w(e) {
                const {
                    activities: t,
                    customActivity: n,
                    onBeginCreateActivity: o,
                    onSelectActivity: l
                } = e;
                return (f.default.createElement(b, null, f.default.createElement(C, {
                    onClick: o
                }), n && f.default.createElement(S, {
                    key: n[0] + n[1],
                    emoji: n[0],
                    label: n[1],
                    onSelect: l
                }), t.map(e => f.default.createElement(S, {
                    key: e[0] + e[1],
                    emoji: e[0],
                    label: e[1],
                    onSelect: l
                }))))
            }
            const R = [
                ["????", i.default._("Hanging Out", null, {
                    hk: "2a7k5m"
                }).toString()],
                ["??????", i.default._("Join Me!", null, {
                    hk: "3Aog3q"
                }).toString()],
                ["????", i.default._("Here All Day", null, {
                    hk: "32xs9N"
                }).toString()],
                ["????", i.default._("Keep Me Company", null, {
                    hk: "2DwYRg"
                }).toString()],
                ["????", i.default._("Trying Rooms", null, {
                    hk: "w36ms"
                }).toString()],
                ["????", i.default._("Bored At Home", null, {
                    hk: "1aahqW"
                }).toString()],
                ["????", i.default._("Is This On?", null, {
                    hk: "3plNXA"
                }).toString()],
                ["????", i.default._("TGIF", null, {
                    hk: "2xIiS6"
                }).toString()],
                ["????", i.default._("Grad Party", null, {
                    hk: "1AVXSl"
                }).toString()],
                ["????", i.default._("Happy Hour", null, {
                    hk: "3dcuL2"
                }).toString()],
                ["?????????????", i.default._("Multi-Tasking", null, {
                    hk: "4gHn4Q"
                }).toString()],
                ["??????", i.default._("Rise and Shine", null, {
                    hk: "XnpEs"
                }).toString()],
                ["??????", i.default._("Coffee Chat", null, {
                    hk: "3z7SIx"
                }).toString()],
                ["????", i.default._("Workout", null, {
                    hk: "NX2XG"
                }).toString()],
                ["????", i.default._("Study Break", null, {
                    hk: "dQISK"
                }).toString()],
                ["????", i.default._("TV Time", null, {
                    hk: "1IzEUu"
                }).toString()],
                ["????", i.default._("Family", null, {
                    hk: "RwBoN"
                }).toString()],
                ["????", i.default._("Dinner", null, {
                    hk: "4bWFn9"
                }).toString()],
                ["????", i.default._("Lunch Club", null, {
                    hk: "1F5gyq"
                }).toString()],
                ["????", i.default._("Game Night", null, {
                    hk: "8Sn8F"
                }).toString()],
                ["????", i.default._("Birthday", null, {
                    hk: "31xqV3"
                }).toString()],
                ["????", i.default._("Karaoke", null, {
                    hk: "1SShlv"
                }).toString()],
                ["????", i.default._("Dance Party", null, {
                    hk: "1Ow7Q2"
                }).toString()],
                ["????", i.default._("Squad Hang", null, {
                    hk: "1mLNwT"
                }).toString()]
            ];

            function O(e) {
                const {
                    customActivity: t,
                    selectRoomActivity: n,
                    setRoomScreen: o,
                    goBack: a
                } = e;
                return (0, p.useModalInfo)({
                    title: i.default._("Pick Activity", null, {
                        hk: "45vIYr"
                    }).toString(),
                    onGoBack: a
                }), f.default.createElement(l.default, {
                    name: "chooseRoomActivity"
                }, f.default.createElement(k, null, f.default.createElement(w, {
                    onBeginCreateActivity: () => {
                        o({
                            screen: u.RoomScreen.CREATE_ROOM_ACTIVITY
                        })
                    },
                    onSelectActivity: e => {
                        n(e)
                    },
                    activities: R,
                    customActivity: t
                })))
            }
            const I = {
                goBack: c.RoomActions.roomGoBack,
                selectRoomActivity: c.RoomActions.selectRoomActivity,
                setRoomScreen: c.RoomActions.setActiveScreen
            };
            var M = (0, s.connect)(e => ({
                customActivity: e.room.roomCreationData.customActivity
            }), I)(O);
            t.default = M
        },
        602: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CreateARoomDialog = z, t.default = void 0;
            var o = j(n(13)),
                l = j(n(246)),
                a = j(n(59)),
                r = n(39),
                i = n(8),
                u = j(n(161)),
                c = j(n(594)),
                d = j(n(5)),
                s = j(n(595)),
                f = n(144),
                m = n(21),
                p = n(140),
                g = n(65),
                h = n(240),
                y = j(n(1)),
                v = n(11),
                k = x(n(0)),
                b = x(n(2)),
                E = j(n(265)),
                _ = j(n(116)),
                S = n(58),
                C = n(113),
                w = n(373),
                R = n(6),
                O = j(n(191)),
                I = j(n(249)),
                M = j(n(4));

            function P() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return P = function () {
                    return e
                }, e
            }

            function x(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = P();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                    } return n.default = e, t && t.set(e, n), n
            }

            function j(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const T = (0, y.default)(b.default)({
                    width: 80,
                    height: 80,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    overflow: "hidden"
                }),
                A = (0, y.default)(b.default)({
                    width: "100%",
                    flexGrow: 1,
                    padding: "2px 24px 16px 24px",
                    alignItems: "center"
                }),
                B = (0, y.default)(b.FocusableView)({
                    width: "100%",
                    flexDirection: "row",
                    minHeight: 48,
                    paddingTop: 8,
                    paddingBottom: 8,
                    alignItems: "center"
                }),
                D = (0, y.default)(b.default)({
                    flexGrow: 1
                }),
                N = (0, y.default)(b.default)(e => ({
                    width: "100%",
                    height: 1,
                    backgroundColor: e.theme.semanticColors.bgLine
                })),
                L = (0, y.default)(M.default)({
                    marginLeft: 4,
                    display: "inline"
                }),
                F = {
                    cancel: d.default._("Cancel", null, {
                        hk: "36ZETq"
                    }),
                    close: d.default._("Close", null, {
                        hk: "XiP8W"
                    }),
                    createRoom: d.default._("Create Room", null, {
                        hk: "4Fl80M"
                    }),
                    editRoom: d.default._("Save", null, {
                        hk: "2vCSnX"
                    }),
                    whoCanDiscover: d.default._("Who can discover and join?", null, {
                        hk: "33QsKA"
                    }),
                    whoCanJoin: d.default._("Who can join?", null, {
                        hk: "3csm0D"
                    }),
                    scheduleForLater: d.default._("Schedule for later", null, {
                        hk: "1u1N5K"
                    }),
                    weProtectYourPrivacy: (0, a.default)({
                        messenger: d.default._("Messenger protects your privacy.", null, {
                            hk: "z0V1n"
                        }),
                        workchat: d.default._("Workplace protects your privacy.", null, {
                            hk: "2KV0BV"
                        })
                    }),
                    learnMore: d.default._("Learn more.", null, {
                        hk: "1aFfVi"
                    }),
                    whenYouJoin: (0, a.default)({
                        messenger: d.default._("When you join the room, people with the link or invite will be able to see your name and profile photo and that you're in it. This may include people you're not friends with on Facebook.", null, {
                            hk: "3I0Jcr"
                        }),
                        workchat: d.default._("When you join the room, people with the link or invite will be able to see your name and profile photo and that you're in it.", null, {
                            hk: "1oVjbH"
                        })
                    }),
                    roomActivity: d.default._("Room Activity", null, {
                        hk: "MdVro"
                    }),
                    on: d.default._("On", null, {
                        hk: "2Txd08"
                    }),
                    off: d.default._("Off", null, {
                        hk: "1v4PEp"
                    }),
                    startTime: d.default._("Start time", null, {
                        hk: "1OFAiO"
                    })
                };

            function z(e) {
                const {
                    activeScreenInfo: t,
                    activity: n,
                    goBack: a,
                    privacySetting: f,
                    joinPermission: m,
                    selectRoomScreen: g,
                    scheduledForDate: h,
                    scheduledForTime: y,
                    setScheduleForDate: v,
                    setScheduleForTime: b,
                    createRoom: P,
                    updateRoom: x,
                    firstName: j,
                    previousScreen: z,
                    goToInviteToRoomView: W,
                    onClose: G,
                    isNetworkConnected: V
                } = e;
                let U = n;
                U || (U = ["????", d.default._("{user's name}'s Room", [d.default._param("user's name", j)], {
                    hk: "BLbkG"
                }).toString()]);
                const Y = U[0],
                    H = U[1],
                    q = (0, R.useTheme)(),
                    K = (0, s.default)();
                (0, C.useModalInfo)({
                    onGoBack: null != z ? a : null
                });
                const X = (0, k.useMemo)(() => new Date, []);
                if (!t) return null;
                const Q = t.screen !== p.RoomScreen.EDIT_ROOM;
                return (k.default.createElement(o.default, {
                    name: "createARoom"
                }, k.default.createElement(A, null, k.default.createElement(T, null, k.default.createElement(c.default, {
                    size: 80
                })), k.default.createElement(M.default, {
                    use: "title",
                    style: {
                        marginTop: 16
                    }
                }, Y, " ", H), k.default.createElement(B, {
                    style: {
                        marginTop: 24
                    },
                    onActivate: () => {
                        g({
                            screen: p.RoomScreen.CHOOSE_ROOM_ACTIVITY
                        })
                    }
                }, k.default.createElement(D, null, k.default.createElement(M.default, {
                    use: "body-semibold"
                }, F.roomActivity), k.default.createElement(M.default, {
                    use: "caption"
                }, Y, " ", H)), k.default.createElement(u.default, {
                    size: 18,
                    color: q.semanticColors.textSecondary
                })), k.default.createElement(N, null), k.default.createElement(B, {
                    onActivate: () => {
                        Q && g(K ? {
                            screen: p.RoomScreen.CHOOSE_ROOM_JOIN_PERMISSION
                        } : {
                            screen: p.RoomScreen.CHOOSE_ROOM_PRIVACY
                        })
                    }
                }, k.default.createElement(D, null, k.default.createElement(M.default, {
                    use: "body-semibold",
                    color: Q ? void 0 : q.semanticColors.textSecondary
                }, K && m !== i.RoomJoinPermission.Unknown ? F.whoCanJoin : F.whoCanDiscover), k.default.createElement(M.default, {
                    use: "caption",
                    color: Q ? void 0 : q.semanticColors.textSecondary
                }, K && m !== i.RoomJoinPermission.Unknown ? l.default.joinPermissions[m] : l.default.privacyOptions[f])), k.default.createElement(u.default, {
                    size: 18,
                    color: q.semanticColors.textSecondary
                })), k.default.createElement(N, null), k.default.createElement(B, {
                    onActivate: () => {}
                }, k.default.createElement(D, null, k.default.createElement(M.default, {
                    use: "body-semibold"
                }, F.scheduleForLater)), k.default.createElement(I.default, {
                    css: {
                        marginRight: 8
                    },
                    isChecked: null != h,
                    onToggle: e => {
                        if (e) {
                            const e = new Date;
                            v(e), b((0, r.getSecondsOfToday)(e))
                        } else v(null), b(null)
                    }
                }), k.default.createElement(M.default, {
                    use: "body"
                }, h ? F.on : F.off)), k.default.createElement(N, null), h && null != y && k.default.createElement(k.default.Fragment, null, k.default.createElement(B, {
                    onActivate: () => {}
                }, k.default.createElement(D, null, k.default.createElement(M.default, {
                    use: "body-semibold"
                }, F.startTime)), k.default.createElement(E.default, {
                    date: h,
                    minDate: X,
                    onChange: v,
                    fontSize: 17
                }), k.default.createElement(M.default, {
                    css: {
                        marginLeft: 12
                    },
                    use: "body"
                }, k.default.createElement(O.default, {
                    onTimeChange: b,
                    timeSeconds: y,
                    textUse: "body",
                    fontSize: 17
                }))), k.default.createElement(N, null)), k.default.createElement(M.default, {
                    css: {
                        width: "100%",
                        marginTop: 8
                    },
                    use: "caption",
                    color: q.semanticColors.textSecondary
                }, F.weProtectYourPrivacy, k.default.createElement(_.default, {
                    onClick: () => {
                        g({
                            screen: p.RoomScreen.PRIVACY_POLICY
                        })
                    },
                    displayAsLink: !0,
                    hideUnderline: !0
                }, k.default.createElement(L, {
                    use: "caption",
                    wrapText: !1,
                    color: q.colors.blue
                }, F.learnMore))), k.default.createElement(M.default, {
                    css: {
                        width: "100%",
                        marginTop: 8
                    },
                    use: "caption",
                    numberOfLines: 10,
                    color: q.semanticColors.textSecondary
                }, F.whenYouJoin)), k.default.createElement(S.ModalFooter, {
                    cancelButton: {
                        label: null != z ? F.cancel.toString() : F.close.toString(),
                        telemetryName: "cancelButton",
                        onClick: () => null != z ? a() : G()
                    },
                    primaryButton: t.screen === p.RoomScreen.EDIT_ROOM ? {
                        label: F.editRoom.toString(),
                        telemetryName: "editRoom",
                        onClick: () => {
                            V ? (x({
                                roomId: t.roomId,
                                emoji: Y,
                                startTimeMs: h && null != y ? J(h, y) : Date.now(),
                                name: H,
                                audienceType: f
                            }), W(t.roomId)) : (0, w.showNoNetworkMessageBox)()
                        }
                    } : {
                        label: F.createRoom.toString(),
                        telemetryName: "createRoom",
                        onClick: () => {
                            if (!V) return void(0, w.showNoNetworkMessageBox)();
                            let e = null;
                            h && null != y && (e = J(h, y));
                            const t = {
                                emoji: Y,
                                callstartTimestampMs: e,
                                name: H,
                                audienceType: f,
                                inviteeType: i.RoomInviteeType.Unknown,
                                linkSurface: i.RoomLinkSurface.Messenger
                            };
                            K && (t.joinPermission = m), P(t)
                        }
                    }
                })))
            }

            function J(e, t) {
                const n = new Date(e),
                    {
                        hour: o,
                        minute: l
                    } = (0, r.getComponentsFromSeconds)(t, "24h");
                return n.setHours(parseInt(o)), n.setMinutes(parseInt(l)), n.setSeconds(0), n.setMilliseconds(0), n.getTime()
            }
            const W = {
                goBack: g.RoomActions.roomGoBack,
                selectRoomScreen: g.RoomActions.setActiveScreen,
                setScheduleForDate: g.RoomActions.selectScheduleForDate,
                setScheduleForTime: g.RoomActions.selectScheduleForTime,
                createRoom: g.RoomActions.createRoom,
                updateRoom: g.RoomActions.updateRoomInfo,
                goToInviteToRoomView: g.RoomActions.goToInviteToRoomView
            };
            var G = (0, v.connect)((function (e) {
                const t = (0, m.requireAuthenticationData)(e);
                return {
                    activeScreenInfo: (0, h.getActiveScreenInfo)(e),
                    activity: e.room.roomCreationData.activity,
                    scheduledForDate: e.room.roomCreationData.scheduledForDate,
                    scheduledForTime: e.room.roomCreationData.scheduledForTime,
                    privacySetting: e.room.roomCreationData.roomPrivacy,
                    joinPermission: e.room.roomCreationData.roomJoinPermission,
                    firstName: t.firstName,
                    previousScreen: (0, h.getPreviousScreenInfo)(e),
                    isNetworkConnected: (0, f.isAppNetworkConnected)(e)
                }
            }), W)(z);
            t.default = G
        },
        603: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CreateRoomActivityForm = w, t.default = void 0;
            var o = v(n(16)),
                l = h(n(13)),
                a = h(n(5)),
                r = n(65),
                i = h(n(1)),
                u = n(11),
                c = v(n(0)),
                d = h(n(2)),
                s = h(n(142)),
                f = n(113),
                m = h(n(60)),
                p = n(6),
                g = h(n(4));

            function h(e) {
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
                var n = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                    } return n.default = e, t && t.set(e, n), n
            }
            const k = (0, i.default)(d.default)(e => ({
                    width: "100%",
                    height: 500,
                    alignItems: "center"
                })),
                b = (0, i.default)(d.default)(e => ({
                    width: "100%",
                    flexGrow: 1,
                    paddingLeft: 38,
                    paddingRight: 38
                })),
                E = (0, i.default)(d.default)(e => ({
                    width: 80,
                    height: 80,
                    marginTop: 24,
                    marginBottom: 24,
                    alignSelf: "center",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center"
                })),
                _ = (0, i.default)(d.default)(e => ({
                    width: "100%",
                    padding: "12px 10px"
                })),
                S = (0, i.default)(m.default)(e => ({
                    borderColor: e.theme.semanticColors.bgLine,
                    borderWidth: 3,
                    borderRadius: 8
                })),
                C = (0, i.default)(d.default)(e => ({
                    alignSelf: "flex-end",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    padding: 12
                }));

            function w(e) {
                const {
                    saveCustomRoomActivity: t,
                    goBack: n
                } = e;
                (0, f.useModalInfo)({
                    title: a.default._("New Room Activity", null, {
                        hk: "2a2qJU"
                    }).toString(),
                    onGoBack: n
                });
                const r = (0, p.useTheme)(),
                    [i, u] = (0, c.useState)("????"),
                    [d, m] = (0, c.useState)("");
                return c.default.createElement(l.default, {
                    name: "createRoomActivity"
                }, c.default.createElement(k, null, c.default.createElement(b, null, c.default.createElement(E, null, c.default.createElement(g.default, {
                    use: "hero"
                }, i)), c.default.createElement(_, null, c.default.createElement(S, {
                    placeholder: a.default._("Type your activity", null, {
                        hk: "t3gBz"
                    }),
                    value: d,
                    onChange: m
                })), c.default.createElement(s.default, {
                    defaultSkintone: null,
                    onEmojiClick: u,
                    pickerType: "compact",
                    categoryPickerStyle: {
                        backgroundColor: r.semanticColors.bgSurface
                    }
                })), c.default.createElement(C, null, c.default.createElement(o.default, {
                    telemetryName: "cancelButton",
                    size: o.RectangleButtonSize.Small,
                    "aria-label": a.default._("Done", null, {
                        hk: "2XV9sq"
                    }).toString(),
                    caption: a.default._("Done", null, {
                        hk: "2XV9sq"
                    }).toString(),
                    disabled: d.trim().length < 1 || d.length > 20,
                    onClick: () => {
                        t([i, d])
                    }
                }))))
            }
            const R = {
                goBack: r.RoomActions.roomGoBack,
                saveCustomRoomActivity: r.RoomActions.saveCustomRoomActivity
            };
            var O = (0, u.connect)((function (e) {
                return {}
            }), R)(w);
            t.default = O
        },
        604: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                (0, g.useModalInfo)({
                    onGoBack: e.goBack
                });
                const t = (0, y.useTheme)(),
                    n = (0, y.isAppDarkTheme)(t.name) ? f.default.createElement("img", {
                        src: u.default
                    }) : f.default.createElement("img", {
                        src: c.default
                    });
                return f.default.createElement(h.default, {
                    name: "privacyNotice"
                }, f.default.createElement(b, null, n, f.default.createElement(E, {
                    use: "display",
                    numberOfLines: 2,
                    textAlign: "center"
                }, _.howWeProtect.toString()), f.default.createElement(p.default, {
                    title: d.default._("Room Link Privacy", null, {
                        hk: "1ZWhVq"
                    }),
                    subtitle: d.default._("Room links are unique and can be regenerated at any time.", null, {
                        hk: "28aTck"
                    }),
                    icon: i.default,
                    style: {
                        marginTop: 24
                    }
                }), f.default.createElement(p.default, {
                    title: d.default._("Prevent Unwanted Participants", null, {
                        hk: "3OEarR"
                    }),
                    subtitle: d.default._("You can always lock your room if you don't want new people to join. The host can remove people at any time.", null, {
                        hk: "2cjAFs"
                    }),
                    icon: r.default
                }), f.default.createElement(p.default, {
                    title: d.default._("Block People and Give Feedback", null, {
                        hk: "1FPLBk"
                    }),
                    subtitle: (0, l.default)({
                        messenger: d.default._("You can block anyone in a room on Facebook and Messenger. Anyone in a room can give feedback on the room. Messenger is encrypted, but not end-to-end encrypted.", null, {
                            hk: "1mGuIm"
                        }),
                        workchat: d.default._("You can block anyone in a room on Workplace. Anyone in a room can give feedback on the room. Workplace is encrypted, but not end-to-end encrypted.", null, {
                            hk: "14dlii"
                        })
                    }),
                    icon: a.default
                })), f.default.createElement(o.ModalFooter, {
                    cancelButton: {
                        label: _.ok.toString(),
                        telemetryName: "closeButton",
                        onClick: () => {
                            e.goBack && e.goBack()
                        }
                    }
                }))
            };
            var o = n(58),
                l = k(n(59)),
                a = k(n(163)),
                r = k(n(605)),
                i = k(n(244)),
                u = k(n(606)),
                c = k(n(607)),
                d = k(n(5)),
                s = k(n(1)),
                f = k(n(0)),
                m = k(n(2)),
                p = k(n(248)),
                g = n(113),
                h = k(n(13)),
                y = n(6),
                v = k(n(4));

            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const b = (0, s.default)(m.default)({
                    flexGrow: 1,
                    padding: "12px 22px 0 22px",
                    alignItems: "center",
                    justifyContent: "center"
                }),
                E = (0, s.default)(v.default)({
                    marginTop: 16,
                    marginLeft: 39,
                    marginRight: 39
                }),
                _ = {
                    howWeProtect: (0, l.default)({
                        messenger: d.default._("How Messenger Protects your Privacy in Rooms", null, {
                            hk: "3d1aEn"
                        }),
                        workchat: d.default._("How Workplace Protects your Privacy in Rooms", null, {
                            hk: "XD7zw"
                        })
                    }),
                    ok: d.default._("OK", null, {
                        hk: "3d0SyZ"
                    })
                }
        },
        605: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return l.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, l.default.createElement("path", {
                    fill: "currentColor",
                    d: "M17.25 12.305C17.25 16.207 19.446 18 22 18s4.75-1.793 4.75-5.695C26.75 9.123 24.75 7 22 7s-4.75 2.123-4.75 5.305zM29.94 28c.69 0 1.06-.595 1.06-1.335C31 22.985 26.835 20 22 20s-9 2.985-9 6.665c0 .74.37 1.335 1.06 1.335h15.88zM13.865 12.502a1 1 0 00-1.73-1.004l-3.829 6.595a.25.25 0 01-.393.051l-2.206-2.206a1 1 0 00-1.414 1.414l3.355 3.355a1 1 0 001.572-.205l4.645-8z"
                }))
            };
            var o, l = (o = n(0)) && o.__esModule ? o : {
                default: o
            }
        },
        606: function (e, t, n) {
            e.exports = n.p + "assets/assets/images/rebrand-shield-dark.png"
        },
        607: function (e, t, n) {
            e.exports = n.p + "assets/assets/images/rebrand-shield-light.png"
        },
        608: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RoomsNuxInterstitial = S, t.default = void 0;
            var o = n(58),
                l = n(113),
                a = b(n(13)),
                r = b(n(609)),
                i = b(n(263)),
                u = b(n(244)),
                c = b(n(610)),
                d = b(n(611)),
                s = b(n(5)),
                f = n(65),
                m = b(n(1)),
                p = n(11),
                g = b(n(0)),
                h = b(n(2)),
                y = b(n(248)),
                v = n(6),
                k = b(n(4));

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const E = (0, m.default)(h.default)(e => ({
                    flexGrow: 1,
                    width: "100%",
                    height: "100%",
                    padding: 24,
                    alignItems: "center",
                    justifyContent: "center"
                })),
                _ = {
                    cancel: s.default._("Cancel", null, {
                        hk: "36ZETq"
                    }),
                    tryIt: s.default._("Try It", null, {
                        hk: "1pAgah"
                    })
                };

            function S({
                onClose: e,
                beginCreateRoom: t
            }) {
                (0, l.useModalInfo)({
                    onGoBack: null
                });
                const n = (0, v.useTheme)(),
                    f = (0, v.isAppDarkTheme)(n.name) ? g.default.createElement("img", {
                        src: c.default
                    }) : g.default.createElement("img", {
                        src: d.default
                    });
                return g.default.createElement(a.default, {
                    name: "privacyInterstitial"
                }, g.default.createElement(E, null, f, g.default.createElement(k.default, {
                    use: "title",
                    style: {
                        marginTop: 16
                    }
                }, "Introducing Rooms"), g.default.createElement(y.default, {
                    title: s.default._("Invite With a Link", null, {
                        hk: "3yFML5"
                    }),
                    subtitle: s.default._("Video chat with anyone just by sending a link.", null, {
                        hk: "nkweI"
                    }),
                    icon: u.default,
                    style: {
                        marginTop: 24
                    }
                }), g.default.createElement(y.default, {
                    title: s.default._("Join Without an Account", null, {
                        hk: "4frjcu"
                    }),
                    subtitle: s.default._("There???s nothing to download or install.", null, {
                        hk: "ECFXK"
                    }),
                    icon: i.default
                }), g.default.createElement(y.default, {
                    title: s.default._("Use Any Device", null, {
                        hk: "4jRiaF"
                    }),
                    subtitle: s.default._("Anyone can join from their computer, phone or tablet.", null, {
                        hk: "1BDqYx"
                    }),
                    icon: r.default
                })), g.default.createElement(o.ModalFooter, {
                    cancelButton: {
                        label: _.cancel.toString(),
                        telemetryName: "cancelButton",
                        onClick: e
                    },
                    primaryButton: {
                        label: _.tryIt.toString(),
                        telemetryName: "tryItButton",
                        onClick: t
                    }
                }))
            }
            const C = {
                beginCreateRoom: f.RoomActions.beginCreateRoom
            };
            var w = (0, p.connect)(null, C)(S);
            t.default = w
        },
        609: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return l.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, l.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M9 7.5a2 2 0 00-2 2V22a2 2 0 002 2h6.18a.25.25 0 01.242.31l-.233.933a1 1 0 01-.97.757h-.969a1.25 1.25 0 100 2.5h9.5a1.25 1.25 0 100-2.5h-.97a1 1 0 01-.97-.758l-.232-.931A.25.25 0 0120.82 24H27a2 2 0 002-2V9.5a2 2 0 00-2-2H9zm.75 2.5a.25.25 0 00-.25.25v9.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25H9.75z",
                    clipRule: "evenodd"
                }))
            };
            var o, l = (o = n(0)) && o.__esModule ? o : {
                default: o
            }
        },
        610: function (e, t, n) {
            e.exports = n.p + "assets/assets/images/rebrand-rooms-interstitial-dark.png"
        },
        611: function (e, t, n) {
            e.exports = n.p + "assets/assets/images/rebrand-rooms-interstitial-light.png"
        },
        612: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SelectRoomJoinPermissionForm = w, t.default = void 0;
            var o = k(n(33)),
                l = k(n(13)),
                a = n(8),
                r = k(n(114)),
                i = k(n(5)),
                u = n(65),
                c = k(n(1)),
                d = n(11),
                s = k(n(0)),
                f = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = v();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(2)),
                m = n(113),
                p = k(n(246)),
                g = k(n(45)),
                h = n(6),
                y = k(n(4));

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function () {
                    return e
                }, e
            }

            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const b = (0, c.default)(g.default)({
                    width: "100%",
                    padding: "12px 24px 12px 24px",
                    alignItems: "center"
                }),
                E = (0, c.default)(f.FocusableView)({
                    width: "100%",
                    paddingTop: 12,
                    paddingBottom: 12,
                    flexDirection: "row"
                }),
                _ = (0, c.default)(f.default)(e => ({
                    width: "100%",
                    height: 1,
                    backgroundColor: e.theme.semanticColors.bgLine
                })),
                S = (0, c.default)(f.default)(e => ({
                    width: 24,
                    height: 24
                }));

            function C(e) {
                const {
                    optionSetting: t,
                    goBack: n,
                    selectedJoinPermission: o,
                    setJoinPermission: l
                } = e, a = (0, h.useTheme)(), i = p.default.joinPermissions[t];
                return s.default.createElement(E, {
                    role: "radio",
                    "aria-checked": t === o,
                    onActivate: () => {
                        l(t), n()
                    }
                }, s.default.createElement(y.default, {
                    style: {
                        flex: 1
                    },
                    wrapText: !0
                }, i), s.default.createElement(S, null, t === o && s.default.createElement(r.default, {
                    color: a.semanticColors.textPrimary,
                    size: 24
                })))
            }

            function w(e) {
                const {
                    roomJoinPermission: t,
                    setJoinPermission: n,
                    goBack: r
                } = e, u = (0, h.useTheme)();
                return (0, m.useModalInfo)({
                    title: i.default._("Who Can Join?", null, {
                        hk: "V2d4E"
                    }).toString(),
                    onGoBack: r
                }), s.default.createElement(l.default, {
                    name: "selectRoomJoinPermission"
                }, s.default.createElement(b, null, s.default.createElement(o.default, {
                    role: "radiogroup"
                }, s.default.createElement(C, {
                    optionSetting: a.RoomJoinPermission.AnyoneWhoCanLoadTheLink,
                    selectedJoinPermission: t,
                    setJoinPermission: n,
                    goBack: r
                }), s.default.createElement(_, null), s.default.createElement(C, {
                    optionSetting: a.RoomJoinPermission.RequiresJoinRequest,
                    selectedJoinPermission: t,
                    setJoinPermission: n,
                    goBack: r
                })), s.default.createElement(_, null), s.default.createElement(y.default, {
                    use: "caption",
                    style: {
                        marginTop: 12,
                        color: u.semanticColors.textSecondary
                    },
                    wrapText: !0
                }, i.default._("People with the link or room invite can join, even if they don???t have Facebook or Messenger.", null, {
                    hk: "2P106X"
                }))))
            }
            const R = {
                goBack: u.RoomActions.roomGoBack,
                setJoinPermission: u.RoomActions.selectRoomJoinPermission
            };
            var O = (0, d.connect)(e => ({
                roomJoinPermission: e.room.roomCreationData.roomJoinPermission
            }), R)(w);
            t.default = O
        },
        613: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SelectRoomPrivacyForm = w, t.default = void 0;
            var o = k(n(33)),
                l = k(n(13)),
                a = n(8),
                r = k(n(114)),
                i = k(n(5)),
                u = n(65),
                c = k(n(1)),
                d = n(11),
                s = k(n(0)),
                f = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = v();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            a && (a.get || a.set) ? Object.defineProperty(n, l, a) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(2)),
                m = n(113),
                p = k(n(246)),
                g = k(n(45)),
                h = n(6),
                y = k(n(4));

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function () {
                    return e
                }, e
            }

            function k(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const b = (0, c.default)(g.default)({
                    width: "100%",
                    padding: "12px 24px 12px 24px",
                    alignItems: "center"
                }),
                E = (0, c.default)(f.FocusableView)({
                    width: "100%",
                    paddingTop: 12,
                    paddingBottom: 12,
                    flexDirection: "row"
                }),
                _ = (0, c.default)(f.default)(e => ({
                    width: "100%",
                    height: 1,
                    backgroundColor: e.theme.semanticColors.bgLine
                })),
                S = (0, c.default)(f.default)(e => ({
                    width: 24,
                    height: 24
                }));

            function C(e) {
                const {
                    optionSetting: t,
                    goBack: n,
                    selectedPrivacySetting: o,
                    setPrivacySetting: l
                } = e, a = (0, h.useTheme)(), i = p.default.privacyOptions[t];
                return s.default.createElement(E, {
                    role: "radio",
                    "aria-checked": t === o,
                    onActivate: () => {
                        l(t), n()
                    }
                }, s.default.createElement(y.default, {
                    style: {
                        flex: 1
                    },
                    wrapText: !0
                }, i), s.default.createElement(S, null, t === o && s.default.createElement(r.default, {
                    color: a.semanticColors.textPrimary,
                    size: 24
                })))
            }

            function w(e) {
                const {
                    roomPrivacy: t,
                    setPrivacySetting: n,
                    goBack: r
                } = e;
                return (0, m.useModalInfo)({
                    title: i.default._("Who Can Discover and Join?", null, {
                        hk: "1H6wH7"
                    }).toString(),
                    onGoBack: r
                }), s.default.createElement(l.default, {
                    name: "selectRoomPrivacy"
                }, s.default.createElement(b, null, s.default.createElement(o.default, {
                    role: "radiogroup"
                }, s.default.createElement(C, {
                    optionSetting: a.RoomAudienceType.Anyone,
                    selectedPrivacySetting: t,
                    setPrivacySetting: n,
                    goBack: r
                }), s.default.createElement(_, null), s.default.createElement(C, {
                    optionSetting: a.RoomAudienceType.InvitedOnly,
                    selectedPrivacySetting: t,
                    setPrivacySetting: n,
                    goBack: r
                })), s.default.createElement(_, null), s.default.createElement(y.default, {
                    use: "caption",
                    style: {
                        marginTop: 12
                    },
                    wrapText: !0
                }, i.default._("People with the link or room invite can join, even if they don???t have Facebook or Messenger.", null, {
                    hk: "2P106X"
                }))))
            }
            const R = {
                goBack: u.RoomActions.roomGoBack,
                setPrivacySetting: u.RoomActions.selectRoomPrivacy
            };
            var O = (0, d.connect)(e => ({
                roomPrivacy: e.room.roomCreationData.roomPrivacy
            }), R)(w);
            t.default = O
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/RoomModal.bundle.js.map