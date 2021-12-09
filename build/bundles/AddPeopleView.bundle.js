(window.webpackJsonp = window.webpackJsonp || []).push([
    [84], {
        2153: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return f.default.createElement(h.DynamicModuleLoader, {
                    strictMode: !0,
                    modules: [i.ContactSuggestionsModule]
                }, f.default.createElement(M, e))
            };
            var n = b(a(1902)),
                r = a(8),
                o = b(a(5)),
                l = b(a(9)),
                d = b(a(340)),
                u = b(a(341)),
                i = a(1886),
                s = a(28),
                c = a(23),
                p = a(11),
                f = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = y();
                    if (t && t.has(e)) return t.get(e);
                    var a = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(a, r, o) : a[r] = e[r]
                        } a.default = e, t && t.set(e, a);
                    return a
                }(a(0)),
                h = a(138),
                g = a(58),
                m = b(a(242));

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function () {
                    return e
                }, e
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const S = {
                includeGroups: !1,
                includePages: !1,
                includeIntegratedMessageSearchResults: !1,
                includeSecureThreads: !1
            };
            const P = {
                    addParticipantsToThread: c.InboxActions.participants.addParticipantsToThread,
                    clearModal: s.AppContextActions.clearModal,
                    searchQueryChanged: c.InboxActions.search.searchQueryChanged
                },
                M = (0, p.connect)((function (e, {
                    threadKey: t
                }) {
                    const a = (0, c.getThread)(e, t),
                        n = (0, c.getSearchInfo)(e, r.SearchSource.ThreadDetails),
                        o = e.contactSuggestions.fetchedContacts.slice(0, 50);
                    return {
                        thread: a,
                        participants: (0, c.getParticipantListForThread)(e, t),
                        searchInfo: n,
                        orderedContacts: o,
                        addPeopleRequestRequiresAdminApproval: (0, c.addPeopleRequestRequiresAdminApproval)(e, t)
                    }
                }), P)((function (e) {
                    const {
                        searchQueryChanged: t,
                        searchInfo: a,
                        addParticipantsToThread: i,
                        thread: s,
                        participants: c,
                        orderedContacts: p,
                        clearModal: h,
                        addPeopleRequestRequiresAdminApproval: y
                    } = e, [b, P] = (0, f.useState)(""), M = (0, u.default)(null == s ? void 0 : s.threadKey), A = (0, d.default)(b, 200);
                    if ((0, f.useEffect)(() => {
                            null != A && t(A, S, r.SearchSource.ThreadDetails)
                        }, [t, A]), null == s) return h(), null;
                    const _ = o.default._("Add People", null, {
                            hk: "1lKKBg"
                        }),
                        k = y ? o.default._("Admin Approval", null, {
                            hk: "1P2i7g"
                        }).toString() : o.default._("Add People?", null, {
                            hk: "13TNqx"
                        }).toString(),
                        v = y ? o.default._("New people need to be approved by group admins listed under Chat Members.", null, {
                            hk: "48Uw4G"
                        }).toString() : o.default._("People you add will see all previous messages in this conversation.", null, {
                            hk: "1KmhKF"
                        }).toString();
                    return f.default.createElement(g.Modal, {
                        onHideModal: h,
                        "aria-label": _.toString()
                    }, f.default.createElement(g.ModalHeader, {
                        title: _,
                        onClose: h
                    }), f.default.createElement(m.default, {
                        query: b || "",
                        onQueryChange: P,
                        autoFocus: !0
                    }), f.default.createElement(n.default, {
                        onSubmit: async e => {
                            0 === (await l.default.platform.showMessageBox({
                                type: "info",
                                noLink: !0,
                                cancelId: 1,
                                detail: v,
                                message: k,
                                buttons: [o.default._("OK", null, {
                                    hk: "sRMH2"
                                }).toString(), o.default._("Cancel", null, {
                                    hk: "2LhY6r"
                                }).toString()]
                            })).response && (i(e, s.threadKey), h())
                        },
                        submitButtonText: o.default._("Add", null, {
                            hk: "1zeRck"
                        }).toString(),
                        submitButtonAriaLabel: o.default._("Confirm Adding Participants", null, {
                            hk: "2cJOys"
                        }).toString(),
                        submitButtonTelemetryName: "add_people",
                        participants: c,
                        searchInfo: a,
                        searchQuery: b,
                        orderedContacts: p,
                        threadTheme: M
                    }))
                }))
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/AddPeopleView.bundle.js.map