(window.webpackJsonp = window.webpackJsonp || []).push([[93], {
    1868: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(32)
            , r = a(1958)
            , l = g(a(1961))
            , o = g(a(1962))
            , u = g(a(619))
            , i = a(21)
            , s = a(258)
            , d = a(53)
            , c = a(2056)
            , f = a(49)
            , p = a(11)
            , m = g(a(0))
            , h = a(138);
        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var y = (0,
            p.connect)((function (e) {
                return {
                    isFirstRunComplete: !(0,
                        i.getIsFirstRun)(e) || (0,
                            d.readyToShowMessages)(e),
                    canLoadDynamicModules: !(0,
                        i.getPendingTokenExchange)(e),
                    loadTincanModule: (0,
                        n.isGatekeeperEnabled)(e, "archon_enable_tincan")
                }
            }
            ))((function (e) {
                const t = (0,
                    u.default)(e.isFirstRunComplete) && e.isFirstRunComplete ? m.default.createElement(o.default, null) : m.default.createElement(l.default, null);
                if (e.canLoadDynamicModules) {
                    const a = [s.InboxModule, f.RtcModule, c.LoggingModule];
                    return e.loadTincanModule && a.push(r.TincanModule),
                        m.default.createElement(h.DynamicModuleLoader, {
                            modules: a,
                            strictMode: !0
                        }, t)
                }
                return t
            }
            ));
        t.default = y
    },
    1870: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = s(a(1))
            , r = s(a(0))
            , l = s(a(2))
            , o = a(1880)
            , u = s(a(1935))
            , i = s(a(4));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0,
            n.default)(l.default)(e => ({
                paddingBottom: 32,
                paddingLeft: 24,
                paddingRight: 24,
                backgroundColor: e.theme.colors.base10
            }));
        var c = function (e) {
            const { back: t, isCompactMode: a } = e
                , { selectedPane: n } = (0,
                    o.useSettingsNav)()
                , s = null != n ? o.SettingsTitleByKey[n] : null;
            return r.default.createElement(l.default, null, r.default.createElement(u.default, {
                back: t,
                isCompactMode: a
            }), r.default.createElement(d, null, !a && null != s && r.default.createElement(i.default, {
                use: "title",
                css: {
                    marginBottom: 12
                }
            }, s), e.children))
        };
        t.default = c
    },
    1872: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LearnMoreLink = m,
            t.default = function (e) {
                const { title: t, description: a, learnMoreUrl: n } = e
                    , l = (0,
                        r.default)("setting")
                    , i = (0,
                        r.default)("setting");
                return o.default.createElement(u.default, null, o.default.createElement(d.default, {
                    id: l,
                    use: "body",
                    css: {
                        marginBottom: 6
                    },
                    wrapText: !0
                }, t), e.children({
                    titleId: l,
                    descriptionId: i
                }), "function" == typeof a ? a() : o.default.createElement(d.default, {
                    id: i,
                    use: "body",
                    css: {
                        marginTop: 8,
                        fontStyle: "italic"
                    },
                    wrapText: !0
                }, a), o.default.createElement(m, {
                    url: n
                }), o.default.createElement(f, null))
            }
            ;
        var n = c(a(9))
            , r = c(a(591))
            , l = c(a(1))
            , o = c(a(0))
            , u = c(a(2))
            , i = c(a(116))
            , s = c(a(338))
            , d = c(a(4));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0,
            l.default)(u.default)(e => ({
                height: 1,
                backgroundColor: e.theme.colors.base30,
                marginTop: 24,
                marginBottom: 24
            }))
            , p = (0,
                l.default)(d.default)({
                    marginTop: 8,
                    marginLeft: 4,
                    display: "inline"
                });
        function m(e) {
            const { url: t } = e;
            return t ? o.default.createElement(i.default, {
                onClick: e => {
                    n.default.platform.openExternalURL(t)
                }
                ,
                displayAsLink: !0,
                "aria-label": s.default.learnMore
            }, o.default.createElement(p, {
                use: "body-semibold",
                wrapText: !0
            }, s.default.learnMore)) : null
        }
    },
    1875: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { value: t, onToggle: a, ...u } = e;
                return (n.default.createElement(r.default, {
                    css: {
                        height: 30,
                        flexDirection: "row",
                        alignItems: "center"
                    }
                }, n.default.createElement(l.default, i({}, u, {
                    onToggle: a,
                    isChecked: t
                })), n.default.createElement(o.default, {
                    use: "body",
                    css: {
                        marginLeft: 8
                    },
                    wrapText: !0
                })))
            }
            ;
        var n = u(a(0))
            , r = u(a(2))
            , l = u(a(249))
            , o = u(a(4));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function i() {
            return (i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
    },
    1880: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.useSettingsNav = t.SettingsNavContextProvider = t.SettingsNavContext = t.SettingsTitleByKey = void 0;
        var n = i(a(338))
            , r = i(a(5))
            , l = i(a(118))
            , o = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = u();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function u() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function () {
                return e
            }
                ,
                e
        }
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = {
            general: n.default.general,
            availability: n.default.availability,
            notifications: n.default.notifications,
            "legal-policies": n.default.legalAndPolicies,
            locale: r.default._("Language", null, {
                hk: "CuQJq"
            }).toString(),
            theme: n.default.appearance,
            rtc: n.default.rtcPreferences,
            help: n.default.help,
            "account-settings": n.default.accountSettings,
            "report-problem": n.default.reportProblem,
            "log-out": n.default.logOut,
            "dev-settings-sync-watchdog": "Sync Watchdog",
            gatekeepers: "Gatekeepers"
        };
        t.SettingsTitleByKey = s;
        const d = (0,
            o.createContext)({
                selectedPane: null,
                setSelectedPane: () => { }
                ,
                isDetailActive: !1,
                setIsDetailActive: () => { }
            });
        t.SettingsNavContext = d;
        t.SettingsNavContextProvider = e => {
            const { globalSettings: { enableSystemTray: t, enableOpenAtLogin: a } } = (0,
                l.default)()
                , n = t || a ? "general" : "availability"
                , [r, u] = (0,
                    o.useState)(n)
                , [i, s] = (0,
                    o.useState)(!1)
                , c = (0,
                    o.useMemo)(() => ({
                        selectedPane: r,
                        setSelectedPane: u,
                        isDetailActive: i,
                        setIsDetailActive: s
                    }), [r, u, i, s]);
            return o.default.createElement(d.Provider, {
                value: c
            }, e.children)
        }
            ;
        t.useSettingsNav = () => (0,
            o.useContext)(d)
    },
    1886: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ContactSuggestionsModule = void 0;
        var n, r = a(1990), l = (n = a(1991)) && n.__esModule ? n : {
            default: n
        };
        const o = {
            id: "contactSuggestions",
            reducerMap: {
                contactSuggestions: r.ContactSuggestionsReducer
            },
            sagas: [l.default]
        };
        t.ContactSuggestionsModule = o
    },
    1887: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.NoResultsFound = function () {
                return u.default.createElement(o.default, {
                    delay: 300
                }, u.default.createElement(l.default, null, u.default.createElement(d, {
                    use: "subtext"
                }, n.default._("No results found", null, {
                    hk: "3Bv3qN"
                }))))
            }
            ;
        var n = s(a(5))
            , r = s(a(1))
            , l = s(a(2))
            , o = s(a(1903))
            , u = s(a(0))
            , i = s(a(4));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0,
            r.default)(i.default)(e => ({
                color: e.theme.colors.base60,
                margin: "24px auto"
            }))
    },
    1888: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getSearchStatus = function (e, t) {
                if (null == e || null == t)
                    return {
                        isLoadingMoreSearchResults: !1,
                        hasNoSearchResults: !0
                    };
                const { searchQueryStatus: a, searchResults: r } = e
                    , l = t.length > 0 && 0 === t.trim().length
                    , o = null != a && a.statusPrimary === n.SearchQueryStatusType.Pending
                    , u = null == a || null == r ? !0 === l : a.statusPrimary === n.SearchQueryStatusType.Complete && 0 === r.length;
                return {
                    isLoadingMoreSearchResults: o,
                    hasNoSearchResults: u
                }
            }
            ;
        var n = a(8)
    },
    1892: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getForwardViewSuggestionsSelector = function () {
                return f(5, [o.ThreadCategory.Recents, o.ThreadCategory.TopGroups, o.ThreadCategory.Connections])
            }
            ,
            t.getManageParticipantsViewSuggestionsSelector = function () {
                return f(3, [o.ThreadCategory.TopGroups, o.ThreadCategory.Connections])
            }
            ,
            t.getSuggestionsSelector = f,
            t.selectOmnipickerSuggestions = void 0;
        var n, r = a(21), l = a(53), o = a(1893), u = (n = a(59)) && n.__esModule ? n : {
            default: n
        }, i = a(8), s = a(348);
        const d = []
            , c = (0,
                s.createSelectorCreator)(s.defaultMemoize, () => !0);
        function f(e, t) {
            const a = c(l.selectRecentThreads, e => e.slice(0, 5))
                , n = c(a, l.selectRecentGroupThreads, (t, a) => a.filter(e => !t.some(t => t.threadKey === e.threadKey)).slice(0, e));
            return (0,
                s.createSelector)(a, n, e => e.contactSuggestions.fetchedContacts, r.requireAuthenticationData, (e, a, n, r) => {
                    const l = e.map(({ otherParticipantProfilePicture: e, threadName: t, threadKey: a }) => ({
                        picture: e,
                        displayName: t,
                        resultId: a
                    }))
                        , u = a.map(({ otherParticipantProfilePicture: e, threadName: t, threadKey: a }) => ({
                            picture: e,
                            displayName: t,
                            resultId: a
                        }))
                        , i = n.filter(({ contactId: e }) => e !== r.userID).filter(e => 0 === e.blockedByViewerStatus).filter(({ contactId: e }) => !l || !l.some(({ resultId: t }) => t === e)).filter(({ contactId: e }) => !u || !u.some(({ resultId: t }) => t === e)).map(({ profilePicture: e, name: t, contactId: a }) => ({
                            picture: e,
                            displayName: t,
                            resultId: a
                        }))
                        , s = {};
                    return l && t.some(e => e === o.ThreadCategory.Recents) && (s[o.ThreadCategory.Recents] = l),
                        u.length > 0 && t.some(e => e === o.ThreadCategory.TopGroups) && (s[o.ThreadCategory.TopGroups] = u),
                        i.length > 0 && t.some(e => e === o.ThreadCategory.Connections) && (s[o.ThreadCategory.Connections] = i),
                        s
                }
                )
        }
        const p = (0,
            s.createSelector)(e => e.contactSuggestions.fetchedContacts, e => {
                var t;
                return null === (t = e.inbox.newThreadInfo) || void 0 === t ? void 0 : t.recipients
            }
                , (e, t) => {
                    if (!e)
                        return d;
                    let a = e;
                    return t && (a = a.filter(e => !t.some(t => t.contactId === e.contactId))),
                        a.slice(0, 10).map(e => ({
                            contactId: e.contactId,
                            profilePicture: e.profilePicture,
                            name: e.name,
                            isOnlineIndicatorVisible: e.presenceStatus === i.PresenceType.Active,
                            lastActiveTimestampMs: e.lastActiveTimestampMs,
                            nickname: (0,
                                u.default)({
                                    messenger: void 0,
                                    workchat: [e.workCompanyName, e.workJobTitle].filter(Boolean).join("??????")
                                }),
                            resultType: (0,
                                u.default)({
                                    messenger: void 0,
                                    workchat: e.workForeignEntityType === i.WorkForeignEntityType.Foreign ? i.SearchResultType.NonContact : i.SearchResultType.Contact
                                })
                        }))
                }
            );
        t.selectOmnipickerSuggestions = p
    },
    1893: function (e, t, a) {
        "use strict";
        let n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ThreadCategory = void 0,
            t.ThreadCategory = n,
            function (e) {
                e.Recents = "recents",
                    e.TopGroups = "top_groups",
                    e.Connections = "connections",
                    e.Results = "results"
            }(n || (t.ThreadCategory = n = {}))
    },
    1894: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n, r = (n = a(1)) && n.__esModule ? n : {
            default: n
        };
        var l = (0,
            r.default)("hr")(e => {
                var t, a, n, r;
                return {
                    marginLeft: null !== (t = e.marginHorizontal) && void 0 !== t ? t : 8,
                    marginRight: null !== (a = e.marginHorizontal) && void 0 !== a ? a : 8,
                    marginTop: null !== (n = e.marginVertical) && void 0 !== n ? n : 8,
                    marginBottom: null !== (r = e.marginVertical) && void 0 !== r ? r : 8,
                    border: 0,
                    borderBottom: `1px solid ${e.theme.semanticColors.bgLine}`
                }
            }
            );
        t.default = l
    },
    1895: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = c;
        var n = d(a(2007))
            , r = d(a(2012))
            , l = d(a(1))
            , o = d(a(2))
            , u = d(a(0))
            , i = d(a(22))
            , s = d(a(4));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c(e) {
            const { isAnimating: t, isCompactMode: a, isCollapsed: l, onDetailViewActivated: o } = e;
            return (u.default.createElement(c.Container, null, u.default.createElement(n.default, {
                onThreadActivated: o,
                isCollapsed: l
            }), u.default.createElement(r.default, {
                isAnimating: t,
                isCompactMode: a,
                isMasterCollapsed: l,
                onThreadActivated: o
            })))
        }
        c.Container = (0,
            l.default)(o.default)(e => ({
                flex: 1,
                paddingTop: e.theme.select({
                    mac: 22,
                    windows: 32
                }),
                borderRight: e.theme.select({
                    highContrast: `1px solid ${e.theme.colors.base80}`
                })
            })),
            c.Header = {
                Container: (0,
                    l.default)(o.default)({
                        flexDirection: "row",
                        height: 48,
                        padding: 12,
                        alignItems: "center",
                        justifyContent: "space-between"
                    }),
                LeftContainer: (0,
                    l.default)(o.default)(e => ({
                        marginRight: e.isCollapsed ? void 0 : 12,
                        justifyContent: "center",
                        flex: e.isCollapsed ? 1 : void 0,
                        flexDirection: "row"
                    })),
                TitleContainer: (0,
                    l.default)(o.default)(e => ({
                        flex: 1,
                        flexDirection: "column",
                        alignItems: e.center ? "center" : "flex-start"
                    })),
                Title: (0,
                    l.default)(s.default)({
                        marginBottom: 2
                    }),
                RightContainer: (0,
                    l.default)(o.default)({
                        flexDirection: "row"
                    }),
                Button: (0,
                    l.default)(i.default)({
                        margin: "0 3px",
                        ":last-child": {
                            marginRight: "0"
                        },
                        ":first-of-type": {
                            marginLeft: "0"
                        }
                    })
            }
    },
    1903: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const t = (0,
                    n.default)(e.delay);
                if (e.delay && e.delay > 0 && !t)
                    return null;
                return (r.default.createElement(r.default.Fragment, null, e.children || null))
            }
            ;
        var n = l(a(342))
            , r = l(a(0));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1924: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = V(a(1964))
            , r = V(a(1970))
            , l = V(a(1971))
            , o = V(a(1972))
            , u = V(a(1973))
            , i = V(a(1974))
            , s = V(a(1976))
            , d = a(196)
            , c = V(a(27))
            , f = a(8)
            , p = a(83)
            , m = V(a(5))
            , h = a(84)
            , g = V(a(343))
            , y = a(28)
            , v = V(a(1977))
            , b = V(a(1))
            , w = V(a(1980))
            , M = V(a(627))
            , _ = G(a(13))
            , E = a(6)
            , S = V(a(656))
            , k = V(a(141))
            , O = a(52)
            , P = a(21)
            , T = a(23)
            , C = a(162)
            , I = a(49)
            , j = G(a(41))
            , x = V(a(1982))
            , R = V(a(1988))
            , A = V(a(1989))
            , D = a(11)
            , N = G(a(0))
            , L = V(a(2))
            , W = a(253)
            , K = V(a(589))
            , z = G(a(82))
            , F = V(a(372))
            , B = V(a(374));
        function U() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return U = function () {
                return e
            }
                ,
                e
        }
        function G(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = U();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function V(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function H() {
            return (H = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        const q = (0,
            b.default)(K.default)(e => ({
                flex: 1
            }))
            , J = (0,
                b.default)(L.default)(e => ({
                    flex: 1,
                    backgroundColor: e.theme.semanticColors.bgSurface,
                    backgroundImage: e.backgroundUrl ? `url('${e.backgroundUrl}')` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }));
        function Q(e) {
            const { threadTheme: t } = (0,
                j.useThreadTheme)()
                , a = (0,
                    E.useTheme)();
            return N.default.createElement(L.default, {
                css: {
                    backgroundColor: (null == t ? void 0 : t.headerBackgroundColor) || a.semanticColors.bgSurface,
                    top: 0,
                    left: 0,
                    right: 0,
                    height: e.isOmnipicker ? "auto" : a.select({
                        mac: 70,
                        windows: 80
                    }),
                    padding: e.isOmnipicker ? a.select({
                        mac: "24px 12px 12px 12px",
                        windows: "36px 12px 12px 12px"
                    }) : "14px 12px 0px 12px",
                    flexDirection: "row",
                    alignItems: "center",
                    borderBottom: a.select({
                        highContrast: `1px solid ${a.colors.base80}`
                    })
                }
            }, e.children)
        }
        const Y = (0,
            b.default)(L.default)(e => ({
                flex: 1,
                zIndex: k.default.MessagesList
            }));
        function $(e) {
            const { threadTheme: t } = (0,
                j.useThreadTheme)()
                , a = (0,
                    c.default)(t.background);
            return N.default.createElement(J, {
                backgroundUrl: a
            }, e.children)
        }
        const X = (0,
            b.default)(L.default)({
                height: 44,
                width: "100%"
            });
        const Z = {
            markAsRead: T.InboxActions.threads.markThreadAsRead,
            sendQuickReply: T.InboxActions.messages.sendQuickReply,
            fetchEarlierMessages: T.InboxActions.messages.fetchEarlierMessages,
            fetchNewerMessages: T.InboxActions.messages.fetchNewerMessages,
            clearMessageIsland: T.InboxActions.messageIsland.clearMessageIsland,
            logMessagesRead: C.LoggingActions.logMessagesRead,
            sendPostback: T.InboxActions.messages.sendPostback,
            cleanUpThread: T.InboxActions.threads.cleanUpThread,
            openMessageSearchInThread: T.InboxActions.messageSearch.openMessageSearchInThread
        };
        var ee = (0,
            D.connect)((function () {
                const { selectGroupedMessageModel: e } = (0,
                    T.getCommonInstanceSelectors)();
                return (t, { threadKey: a, isTearaway: n }) => {
                    var r, l, o;
                    const u = (0,
                        P.requireAuthenticationData)(t)
                        , i = u.userID
                        , s = Boolean(u.isWorkplaceAccount)
                        , d = n ? null : (0,
                            T.getNewThreadInfo)(t)
                        , c = (0,
                            T.isMessageSearchOpen)(t, a)
                        , f = (0,
                            T.getMessageSearchResults)(t, a)
                        , p = (0,
                            T.getThread)(t, a)
                        , m = (0,
                            T.getParticipantListForThread)(t, a)
                        , h = e(t, {
                            threadKey: a
                        })
                        , g = Boolean(p && (0,
                            O.isP2PThread)(p.threadType) && (0,
                                O.isThreadBlockedByViewer)(i, p.threadType, m, s))
                        , v = c && null != f && f.length > 0
                        , b = (null === (r = h[h.length - 1]) || void 0 === r ? void 0 : r.messageOTIDs) || []
                        , w = b[b.length - 1] || null
                        , M = (0,
                            T.getLastReadInfoForThread)(t, a)
                        , _ = !w || !!(M[w] && M[w].length > 2)
                        , E = w ? w + _.toString() : ""
                        , S = null != a && null != (null === (l = (0,
                            T.getPinnedMessageForThread)(t, a)) || void 0 === l ? void 0 : l.message);
                    return {
                        authData: u,
                        didUserMarkPrimaryThreadAsUnread: (0,
                            T.getDidUserMarkOpenThreadAsUnread)(t),
                        readyToShowMessages: (0,
                            T.readyToShowMessages)(t),
                        hasInitialSyncCompleted: (0,
                            T.hasInitialSyncCompleted)(t),
                        isLoadingMessages: (0,
                            T.isLoadingMessages)(t, a),
                        isDisplayingAllMessages: (0,
                            T.isDisplayingAllMessages)(t, a),
                        messageCount: (0,
                            T.getMessageIdsForThread)(t, a).length,
                        userId: i,
                        messageGroupInfo: h,
                        isBlockedP2PThread: g,
                        thread: p,
                        quickReplies: (0,
                            T.getQuickReplies)(t, a),
                        newThreadInfo: d,
                        participants: m,
                        isWorkplace: s,
                        isModalActive: null != (0,
                            y.currentModal)(t),
                        isNetworkConnected: (0,
                            y.isAppNetworkConnected)(t),
                        isRtcEnabled: (0,
                            I.isRtcEnabled)(t),
                        rtcStackStatus: (0,
                            I.getRtcStackStatus)(t),
                        showMessageSearch: c,
                        unreadUnmutedThreads: (0,
                            T.selectUnreadBadgeCount)(t),
                        nullstateDetails: (0,
                            T.getNullstateDetails)(t, a),
                        messageIsland: (0,
                            T.getMessageIsland)(t, a),
                        isMessageSearchMode: v,
                        firstMessageOTID: (null === (o = h[0]) || void 0 === o ? void 0 : o.messageOTIDs[0]) || null,
                        lastMessageOTID: w,
                        lastMessageHash: E,
                        threadHasPinnedMessage: S
                    }
                }
            }
            ), Z)((function (e) {
                const { isTearaway: t, authData: a, didUserMarkPrimaryThreadAsUnread: c, readyToShowMessages: y, isLoadingMessages: b, thread: k, userId: O, messageGroupInfo: P, messageCount: T, firstMessageOTID: C, lastMessageOTID: I, sendQuickReply: D, fetchEarlierMessages: L, fetchNewerMessages: K, clearMessageIsland: U, isDisplayingAllMessages: G, lastMessageHash: V, quickReplies: J, newThreadInfo: Z, logMessagesRead: ee, participants: te, isBlockedP2PThread: ae, isWorkplace: ne, isModalActive: re, isNetworkConnected: le, isRtcEnabled: oe, rtcStackStatus: ue, showMessageSearch: ie, sendPostback: se, cleanUpThread: de, nullstateDetails: ce, unreadUnmutedThreads: fe, hasInitialSyncCompleted: pe, messageIsland: me, openMessageSearchInThread: he, isMessageSearchMode: ge, threadKey: ye, markAsRead: ve, threadHasPinnedMessage: be, ...we } = e
                    , Me = t ? m.default._("{app name}: {Current chat name}", [m.default._param("app name", p.displayName), m.default._param("Current chat name", null == k ? void 0 : k.threadName)], {
                        hk: "1cj4OP"
                    }) : p.displayName;
                (0,
                    g.default)(Me);
                const _e = null != me
                    , Ee = null != Z && Z.isNewThreadOpen
                    , Se = null != (null == me ? void 0 : me.fetchInfo) && (null == me ? void 0 : me.fetchInfo.loadMoreStateNewer) !== f.MessagesLoadMoreState.FullyLoaded
                    , ke = ce && ce.ctas && ce.ctas.length > 0
                    , Oe = ce && ce.ctaType === f.NullstateCTAType.GetStarted
                    , Pe = Boolean(J && J.length > 0)
                    , Te = (0,
                        E.useTheme)();
                (0,
                    r.default)(ye, de);
                const [Ce, Ie, je] = (0,
                    s.default)(k, P);
                (0,
                    o.default)({
                        firstMessageOTID: C,
                        lastMessageOTID: I,
                        threadKey: ye,
                        hasInitialSyncCompleted: pe,
                        hasMessages: P.length > 0,
                        isInMessageIsland: _e,
                        isNewThread: Boolean(Ee),
                        logMessagesRead: ee,
                        readyToShowMessages: y,
                        threadExists: null != k
                    }),
                    (0,
                        u.default)(me),
                    (0,
                        l.default)(c, I, ye, ve);
                const xe = (0,
                    N.useCallback)((e, t) => {
                        null != k && D(e, t, k.threadKey)
                    }
                        , [D, k])
                    , Re = d.KeyboardShortcuts[d.KeyboardAction.OpenMessageSearch]
                    , Ae = Te.select({
                        ...Re
                    })
                    , De = (0,
                        _.useWithSurface)("open_message_search", e => ye && he(ye));
                (0,
                    h.useShortcut)(Ae, e => {
                        De(e)
                    }
                    );
                const Ne = (0,
                    N.useCallback)((e, t) => {
                        k && se(k.threadKey, e, t)
                    }
                        , [k, se])
                    , Le = (0,
                        N.useRef)(null)
                    , { datePill: We, dateIntersectionObserver: Ke } = (0,
                        i.default)(ne && !be, Le, [null == k ? void 0 : k.threadKey]);
                return N.default.createElement(_.default, {
                    name: "messagesList"
                }, N.default.createElement(j.default, {
                    threadKey: ye,
                    isAppDarkTheme: (0,
                        E.isAppDarkTheme)(Te.name)
                }, N.default.createElement($, null, N.default.createElement(q, {
                    loaded: !(null == k && !Ee) && y,
                    renderLoadingContent: () => N.default.createElement(Q, null, N.default.createElement(F.default, we, N.default.createElement(W.ChatHeaderShimmer, null))),
                    renderLoadedContent: () => N.default.createElement(N.default.Fragment, null, N.default.createElement(Q, {
                        isOmnipicker: Ee
                    }, N.default.createElement(F.default, H({}, we, {
                        unreadCount: fe
                    }), Ee ? N.default.createElement(A.default, null) : ie ? N.default.createElement(R.default, {
                        threadKey: ye
                    }) : N.default.createElement(x.default, {
                        threadKey: ye,
                        inNullState: Boolean(ke && k)
                    }))), We, ke && k ? N.default.createElement(S.default, {
                        thread: k,
                        nullstate: ce
                    }) : N.default.createElement(Y, {
                        "data-automation-id": "message-list"
                    }, null != k && null != ye && P.length > 0 ? N.default.createElement(B.default, {
                        key: k.threadKey,
                        threadKey: k.threadKey,
                        lastMessageOTID: I,
                        onScrolledToTop: () => L(k.threadKey),
                        onScrolledToBottom: Se ? () => K(k.threadKey) : void 0,
                        isInMessageIsland: _e,
                        shouldShowSentinel: !b && !G,
                        itemCount: T,
                        clearMessageIsland: () => U(ye, !0),
                        shouldShowTopLoadingSpinner: !G,
                        shouldShowBottomLoadingSpinner: Se || !1,
                        bottomItemSenderViewer: P[P.length - 1].isSenderViewer,
                        bottomItemHash: V,
                        showingQuickReplies: Pe,
                        quickReplies: J || [],
                        sendQuickReply: xe,
                        isMessageSearchMode: ge && !b,
                        scrollViewRef: Le
                    }, be && N.default.createElement(v.default, {
                        threadKey: ye
                    }), N.default.createElement(n.default, {
                        isBlockedP2PThread: ae,
                        threadKey: k.threadKey,
                        parentThreadKey: k.parentThreadKey,
                        messageGroupInfo: P,
                        participants: te,
                        userId: O,
                        isNetworkConnected: le,
                        isRtcEnabled: oe,
                        rtcStackStatus: ue,
                        isWorkchat: a.isWorkplaceAccount || !1,
                        showUnreadDivider: Ce,
                        lastReadWatermarkTimestampMs: Ie,
                        unreadMessagesCount: je,
                        dateIntersectionObserver: Ke
                    }), Pe && N.default.createElement(X, null)) : !G && (!Z || !Z.isNewThreadOpen) && N.default.createElement(z.default, {
                        delay: 100,
                        size: z.SpinnerSize.Medium
                    })), ke && N.default.createElement(M.default, {
                        nullstate: ce,
                        sendPostback: Ne
                    }), !Oe && N.default.createElement(w.default, {
                        threadKey: ye
                    }))
                }))))
            }
            ));
        t.default = ee
    },
    1925: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const t = (0,
                    n.useRef)(null)
                    , a = e.currentDate;
                return (0,
                    n.useEffect)(() => {
                        if (null !== e.dateIntersectionObserver) {
                            const a = t.current
                                , n = e.dateIntersectionObserver.getObserver();
                            if (a && n)
                                return n.observe(a),
                                    () => n.unobserve(a)
                        }
                        return () => { }
                    }
                        , [t]),
                    n.default.createElement("div", {
                        ref: t,
                        id: (++l).toString(),
                        style: {
                            visibility: "hidden"
                        }
                    }, a)
            }
            ;
        var n = function (e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = r();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var l in e)
                if (Object.prototype.hasOwnProperty.call(e, l)) {
                    var o = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                    o && (o.get || o.set) ? Object.defineProperty(a, l, o) : a[l] = e[l]
                }
            a.default = e,
                t && t.set(e, a);
            return a
        }(a(0));
        function r() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return r = function () {
                return e
            }
                ,
                e
        }
        let l = 0
    },
    1926: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                if ("fulfilled" === window.interactiveDeferred.status)
                    return;
                throw window.interactiveDeferred.promise
            }
    },
    1927: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ContactSuggestionsActions = void 0;
        const n = {
            loadContactSuggestions: (0,
                a(76).actionCreator)("contact_suggestion/load_contacts", e => ({
                    contacts: e
                }))
        };
        t.ContactSuggestionsActions = n
    },
    1928: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(53)
            , r = a(11)
            , l = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = u();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , o = a(35);
        function u() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function () {
                return e
            }
                ,
                e
        }
        const i = l.default.lazy(() => Promise.all([a.e(9), a.e(13), a.e(10), a.e(18), a.e(95)]).then(a.t.bind(null, 2133, 7)));
        var s = (0,
            r.connect)((function (e, t) {
                return {
                    showMediaViewer: null != (0,
                        n.getMediaViewerInfo)(e, t.threadKey)
                }
            }
            ), {})((function (e) {
                const { showMediaViewer: t, isThreadOpenInTearaway: a, threadKey: n } = e
                    , { inPortal: r } = (0,
                        o.useWindowContext)();
                return !t || !r && a || null == n ? null : l.default.createElement(l.Suspense, {
                    fallback: null
                }, l.default.createElement(i, {
                    threadKey: n
                }))
            }
            ));
        t.default = s
    },
    1929: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = d(a(9))
            , r = d(a(1992))
            , l = a(11)
            , o = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = s();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , u = d(a(1993))
            , i = a(35);
        function s() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return s = function () {
                return e
            }
                ,
                e
        }
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = o.default.lazy(() => Promise.all([a.e(0), a.e(29), a.e(96)]).then(a.t.bind(null, 2152, 7)))
            , f = o.default.lazy(() => Promise.all([a.e(0), a.e(23), a.e(84)]).then(a.t.bind(null, 2153, 7)))
            , p = o.default.lazy(() => Promise.all([a.e(0), a.e(23), a.e(102)]).then(a.t.bind(null, 2158, 7)))
            , m = o.default.lazy(() => Promise.all([a.e(9), a.e(91)]).then(a.t.bind(null, 2159, 7)))
            , h = o.default.lazy(() => Promise.all([a.e(0), a.e(89)]).then(a.t.bind(null, 2160, 7)))
            , g = o.default.lazy(() => Promise.all([a.e(0), a.e(88)]).then(a.t.bind(null, 2161, 7)))
            , y = o.default.lazy(() => Promise.all([a.e(0), a.e(87)]).then(a.t.bind(null, 2162, 7)))
            , v = o.default.lazy(() => a.e(86).then(a.t.bind(null, 2165, 7)))
            , b = o.default.lazy(() => a.e(92).then(a.t.bind(null, 2166, 7)))
            , w = o.default.lazy(() => Promise.all([a.e(10), a.e(18), a.e(90)]).then(a.t.bind(null, 2167, 7)))
            , M = o.default.lazy(() => Promise.all([a.e(17), a.e(30)]).then(a.t.bind(null, 646, 7)))
            , _ = o.default.lazy(() => Promise.all([a.e(17), a.e(27)]).then(a.t.bind(null, 629, 7)))
            , E = o.default.lazy(() => a.e(32).then(a.t.bind(null, 635, 7)))
            , S = o.default.lazy(() => Promise.all([a.e(14), a.e(97)]).then(a.t.bind(null, 2168, 7)))
            , k = o.default.lazy(() => Promise.all([a.e(0), a.e(25)]).then(a.t.bind(null, 647, 7)))
            , O = o.default.lazy(() => Promise.all([a.e(0), a.e(31)]).then(a.t.bind(null, 648, 7)))
            , P = o.default.lazy(() => Promise.all([a.e(8), a.e(14), a.e(20), a.e(18), a.e(103)]).then(a.t.bind(null, 2178, 7)))
            , T = o.default.lazy(() => a.e(106).then(a.t.bind(null, 2186, 7)))
            , C = o.default.lazy(() => Promise.all([a.e(8), a.e(11), a.e(26)]).then(a.t.bind(null, 643, 7)))
            , I = o.default.lazy(() => Promise.all([a.e(13), a.e(14), a.e(105)]).then(a.t.bind(null, 2187, 7)))
            , j = o.default.lazy(() => Promise.all([a.e(8), a.e(11), a.e(16), a.e(19), a.e(36)]).then(a.t.bind(null, 657, 7)))
            , x = o.default.lazy(() => a.e(100).then(a.t.bind(null, 2191, 7)))
            , R = o.default.lazy(() => Promise.all([a.e(8), a.e(11), a.e(19), a.e(99)]).then(a.t.bind(null, 2192, 7)));
        var A = (0,
            l.connect)((function (e) {
                return e.appContext.modal
            }
            ))((function ({ currentModal: e, hostWindowKey: t, modalOptions: a }) {
                const { windowKey: l, inPortal: s } = (0,
                    i.useWindowContext)()
                    , d = a && a.disableWindowResize
                    , A = (0,
                        o.useMemo)(() => {
                            if (e && (l === t || !s && null == t))
                                switch (e.type) {
                                    case "Notifications":
                                        return o.default.createElement(c, {
                                            threadKey: e.threadKey
                                        });
                                    case "AddPeople":
                                        return o.default.createElement(f, {
                                            threadKey: e.threadKey
                                        });
                                    case "GroupMembers":
                                        return o.default.createElement(m, {
                                            threadKey: e.threadKey
                                        });
                                    case "MembershipRequests":
                                        return o.default.createElement(b, {
                                            threadKey: e.threadKey
                                        });
                                    case "EditThreadName":
                                        return o.default.createElement(h, {
                                            threadKey: e.threadKey
                                        });
                                    case "EditThreadEmoji":
                                        return o.default.createElement(g, {
                                            threadKey: e.threadKey
                                        });
                                    case "EditThreadColor":
                                        return o.default.createElement(y, {
                                            threadKey: e.threadKey
                                        });
                                    case "EditNicknames":
                                        return o.default.createElement(v, {
                                            threadKey: e.threadKey
                                        });
                                    case "Forward":
                                        return o.default.createElement(w, {
                                            forwardViewInfo: e.forwardViewInfo
                                        });
                                    case "OsmetaUpgradeWelcome":
                                        return o.default.createElement(M, {
                                            isBeta: n.default.platform.isWindowsStoreBeta()
                                        });
                                    case "FeedbackForm":
                                        return o.default.createElement(_, {
                                            promotion: e.promotion
                                        });
                                    case "Reactions":
                                        return o.default.createElement(E, {
                                            reactions: e.reactions
                                        });
                                    case "Payment":
                                        return o.default.createElement(S, {
                                            threadKey: e.threadKey,
                                            transactionId: e.transactionId
                                        });
                                    case "CreatePoll":
                                        return o.default.createElement(k, {
                                            threadKey: e.threadKey
                                        });
                                    case "ConsumePoll":
                                        return o.default.createElement(O, {
                                            threadKey: e.threadKey,
                                            pollId: e.pollId,
                                            title: e.title
                                        });
                                    case "Location":
                                        return o.default.createElement(u.default, {
                                            locationUrl: e.url
                                        });
                                    case "Room":
                                        return o.default.createElement(P, null);
                                    case "RingParticipants":
                                        return o.default.createElement(p, {
                                            threadKey: e.threadKey,
                                            isAudioCall: e.isAudioCall
                                        });
                                    case "ThreadDescription":
                                        return o.default.createElement(T, {
                                            threadKey: e.threadKey,
                                            isEditing: e.isEditing
                                        });
                                    case "DoNotDisturb":
                                        return o.default.createElement(C, null);
                                    case "JoinRoomFromLink":
                                        return o.default.createElement(r.default, null);
                                    case "StickerStoreView":
                                        return o.default.createElement(I, null);
                                    case "CustomUserStatus":
                                        return o.default.createElement(j, null);
                                    case "ReportParticipant":
                                        return o.default.createElement(x, {
                                            threadKey: e.threadKey
                                        });
                                    case "RemindMe":
                                        return o.default.createElement(R, {
                                            threadKey: e.threadKey,
                                            messageId: e.messageId
                                        });
                                    default:
                                        return null
                                }
                            return null
                        }
                            , [e, t, s, l]);
                return (0,
                    o.useEffect)(() => (d && A && n.default.window.setResizable(!1),
                        () => {
                            d && A && n.default.window.setResizable(!0)
                        }
                    ), [d, A]),
                    o.default.createElement(o.Suspense, {
                        fallback: null
                    }, A)
            }
            ));
        t.default = A
    },
    1930: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return l.default.createElement(r.default, null, e.title && l.default.createElement(i, null, l.default.createElement(o.default, {
                    use: "title-semibold"
                }, e.title), e.accessory), e.children)
            }
            ;
        var n = u(a(1))
            , r = u(a(2))
            , l = u(a(0))
            , o = u(a(4));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0,
            n.default)(r.default)({
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center"
            })
    },
    1931: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = w(a(587))
            , r = w(a(27))
            , l = w(a(5))
            , o = w(a(1))
            , u = w(a(2001))
            , i = a(101)
            , s = a(28)
            , d = a(21)
            , c = a(23)
            , f = a(11)
            , p = b(a(0))
            , m = b(a(22))
            , h = a(66)
            , g = w(a(339))
            , y = a(6);
        function v() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return v = function () {
                return e
            }
                ,
                e
        }
        function b(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = v();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const M = (0,
            o.default)(m.default)({
                alignItems: "center",
                justifyContent: "center",
                height: 24,
                width: 24
            });
        const _ = {
            removeParticipantFromThread: c.InboxActions.participants.removeParticipantFromThread,
            clearModal: s.AppContextActions.clearModal,
            setAdminStatus: c.InboxActions.participants.setAdminStatus
        };
        var E = (0,
            f.connect)((function (e, { threadKey: t }) {
                const a = (0,
                    d.requireAuthenticationData)(e);
                return {
                    participants: (0,
                        c.selectSortedParticipantListForThread)(e, {
                            threadKey: t
                        }),
                    participantPresences: (0,
                        c.getParticipantPresencesForThread)(e, {
                            threadKey: t
                        }),
                    viewerId: a.userID
                }
            }
            ), _)((function (e) {
                const { participants: t, participantPresences: a, viewerId: o, threadKey: s, onlyAdmins: d, limit: c = 1 / 0, padded: f = !0 } = e
                    , { showContextMenu: v } = (0,
                        h.useContextMenu)()
                    , [b, w] = (0,
                        p.useState)(void 0)
                    , _ = (0,
                        y.useTheme)()
                    , E = t.filter(e => e.isAdmin)
                    , S = E.some(e => e.contactId === o)
                    , k = d ? E : t;
                return p.default.createElement(p.default.Fragment, null, k.slice(0, c).map(e => p.default.createElement(g.default, {
                    profilePictureUrl: (0,
                        r.default)(e.profilePicture),
                    participantName: e.name,
                    key: e.contactId,
                    subtitle: p.default.createElement(n.default, {
                        name: null,
                        participant: e
                    }),
                    presenceStatus: a[e.contactId] || null,
                    doNotDisturbEnabled: e.doNotDisturbEnabled,
                    padded: f
                }, p.default.createElement(M, {
                    use: m.RoundButtonUse.Transparent,
                    size: m.RoundButtonSize.Small,
                    "aria-label": l.default._("More Actions", null, {
                        hk: "4azb7J"
                    }).toString(),
                    telemetryName: "group_member_context_menu",
                    onClick: t => (async (e, t) => {
                        const a = S && o !== t.contactId ? (0,
                            i.getRemoveParticipantMenuItem)(t.contactId, s, S, !0) : o === t.contactId ? (0,
                                i.getLeaveGroupActionItem)(o, s, _.colors.red, void 0, !0) : null;
                        w(t.contactId),
                            await v({
                                target: e.currentTarget,
                                items: [(0,
                                    i.getMessageUser)(o, t.contactId, t.name), {
                                    type: "separator"
                                }, (0,
                                    i.getViewProfileMenuItem)(t), {
                                    type: "separator"
                                }, (0,
                                    i.getSetAdminMenuItem)(o, S, t.isAdmin, s, t.contactId, t.firstName || t.name, S && E.length > 1 && t.isAdmin), a]
                            }),
                            w(void 0)
                    }
                    )(t, e),
                    pressed: e.contactId === b,
                    icon: u.default,
                    iconColor: _.colors.base70
                }))))
            }
            ));
        t.default = E
    },
    1932: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.UIScalingOptions = void 0;
        t.UIScalingOptions = ["small", "normal", "large", "x-large", "xx-large"]
    },
    1933: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t) {
                return t < 10 ? `${e.select({
                    mac: "cmd",
                    windows: "ctrl"
                })}+${(t + 1) % 10}` : null
            }
    },
    1934: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                return (0,
                    r.default)() ? 40 : 62
            }
            ;
        var n, r = (n = a(593)) && n.__esModule ? n : {
            default: n
        }
    },
    1935: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { back: t, forward: a, isCompactMode: n } = e
                    , { selectedPane: r, isDetailActive: l } = (0,
                        c.useSettingsNav)()
                    , o = () => { }
                    , i = null != r ? c.SettingsTitleByKey[r] : null;
                return u.default.createElement(h, null, n && u.default.createElement(g, null, u.default.createElement(y, null, u.default.createElement(f.default, {
                    use: "subtext-semibold"
                }, l && i ? i : d.default.settings)), u.default.createElement(v, {
                    back: t || o
                }), u.default.createElement(b, {
                    forward: a || o
                })))
            }
            ;
        var n = m(a(5))
            , r = m(a(1))
            , l = m(a(260))
            , o = m(a(628))
            , u = m(a(0))
            , i = m(a(2))
            , s = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = p();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(22))
            , d = m(a(338))
            , c = a(1880)
            , f = m(a(4));
        function p() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return p = function () {
                return e
            }
                ,
                e
        }
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const h = (0,
            r.default)(i.default)(e => ({
                backgroundColor: "transparent",
                paddingTop: 32
            }))
            , g = (0,
                r.default)(i.default)({
                    width: "100%",
                    height: 38,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 8,
                    paddingRight: 8
                })
            , y = (0,
                r.default)(i.default)({
                    width: "100%",
                    alignItems: "center",
                    position: "absolute"
                })
            , v = e => {
                const { isDetailActive: t } = (0,
                    c.useSettingsNav)();
                return (u.default.createElement(s.default, {
                    telemetryName: "settingsBackButton",
                    icon: l.default,
                    size: s.RoundButtonSize.Small,
                    use: s.RoundButtonUse.Transparent,
                    "aria-label": n.default._("Go back", null, {
                        hk: "aN3r6"
                    }).toString(),
                    onClick: e.back,
                    disabled: !t
                }))
            }
            , b = e => {
                const { isDetailActive: t, selectedPane: a } = (0,
                    c.useSettingsNav)();
                return (u.default.createElement(s.default, {
                    telemetryName: "settingsForwardButton",
                    icon: o.default,
                    size: s.RoundButtonSize.Small,
                    use: s.RoundButtonUse.Transparent,
                    "aria-label": n.default._("Go forward", null, {
                        hk: "25DZT5"
                    }).toString(),
                    onClick: e.forward,
                    disabled: null == a || t
                }))
            }
    },
    1936: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const [t, a] = (0,
                    l.useState)(r.default.get(e));
                return (0,
                    l.useEffect)(() => {
                        r.default.set(e, t)
                    }
                        , [e, t]),
                    [t, e => {
                        a(e)
                    }
                    ]
            }
            ;
        var n, r = (n = a(355)) && n.__esModule ? n : {
            default: n
        }, l = a(0)
    },
    1958: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.TincanModule = void 0;
        var n = a(1959)
            , r = a(1960);
        const l = {
            id: "tincan",
            reducerMap: {
                tincan: n.TincanReducer
            },
            sagas: [r.TincanSaga]
        };
        t.TincanModule = l
    },
    1959: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.TincanReducer = t.initialState = void 0;
        var n = a(51);
        const r = {};
        t.initialState = r;
        const l = (0,
            n.makeReducer)(r, (e, t) => { }
            );
        t.TincanReducer = l
    },
    1960: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.TincanSaga = function* () {
                const e = yield (0,
                    u.fork)((function* () {
                        yield (0,
                            u.call)(o.default.msys.waitForMailbox);
                        const e = yield (0,
                            l.getSyncChannel)();
                        yield (0,
                            u.call)(s),
                            yield (0,
                                u.fork)(i, e)
                    }
                    ));
                try {
                    yield (0,
                        u.call)(l.waitUntillCancelled)
                } finally {
                    yield (0,
                        u.cancel)(e)
                }
            }
            ,
            t._listenToSyncChannel = i,
            t.initializeTincan = s;
        var n, r = a(21), l = a(74), o = (n = a(9)) && n.__esModule ? n : {
            default: n
        }, u = a(17);
        function* i(e) {
            e.close()
        }
        function* s() {
            yield (0,
                u.call)(o.default.msys.configureTincanHandlers);
            const { userID: e } = yield (0,
                u.select)(r.requireAuthenticationData)
                , t = yield (0,
                    u.call)(o.default.msys.generateTincanKeys, e);
            yield (0,
                u.call)(o.default.authentication.setTincanKeys, e, t)
        }
    },
    1961: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(21)
            , r = a(8)
            , l = y(a(5))
            , o = y(a(9))
            , u = y(a(1))
            , i = g(a(198))
            , s = a(53)
            , d = a(11)
            , c = g(a(0))
            , f = y(a(119))
            , p = g(a(82))
            , m = y(a(4));
        function h() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return h = function () {
                return e
            }
                ,
                e
        }
        function g(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = h();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const v = (0,
            u.default)(p.default)({
                margin: 0,
                marginBottom: "auto"
            })
            , b = (0,
                u.default)(i.FooterContainer)({
                    flexDirection: "column",
                    alignItems: "center"
                })
            , w = (0,
                u.default)(m.default)({
                    opacity: .34
                });
        var M = (0,
            d.connect)((function (e) {
                return {
                    initialSyncNetworkBytesReceived: (0,
                        s.getInitialSyncNetworkBytesReceived)(e),
                    isUpgrading: (0,
                        n.getDidTryUpgradeOnRun)(e)
                }
            }
            ))((function (e) {
                const t = e.isUpgrading ? l.default._("Your Messenger Just Got Better", null, {
                    hk: "FdlRM"
                }) : l.default._("Getting Started...", null, {
                    hk: "41rbQo"
                });
                let a = l.default._("Please be patient while we sync your preferences, contacts and messages.", null, {
                    hk: "3YzKLO"
                })
                    , n = void 0;
                if (e.initialSyncNetworkBytesReceived) {
                    const t = 1048576
                        , a = e.initialSyncNetworkBytesReceived / t;
                    a > 0 && (n = l.default._("Synced {mb_received} MB", [l.default._param("mb_received", a.toLocaleString(document.documentElement.lang, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }))], {
                        hk: "bBU46"
                    }))
                }
                return (0,
                    c.useLayoutEffect)(() => {
                        o.default.performance.markEvent(r.PerformanceEvents.FIRST_RUN_RENDERED)
                    }
                        , []),
                    c.default.createElement(i.Container, null, c.default.createElement(i.Header, {
                        logo: f.default,
                        title: t,
                        subtitle: a
                    }), c.default.createElement(i.NoticesContainer, null, c.default.createElement(v, {
                        size: p.SpinnerSize.Medium
                    })), c.default.createElement(b, null, c.default.createElement(w, {
                        use: "body"
                    }, n), c.default.createElement(m.default, {
                        use: "body-semibold"
                    }, l.default._("Syncing messages...", null, {
                        hk: "2ziyne"
                    }))))
            }
            ));
        t.default = M
    },
    1962: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(32)
            , r = L(a(1963))
            , l = L(a(1995))
            , o = L(a(1924))
            , u = L(a(1998))
            , i = L(a(59))
            , s = a(8)
            , d = a(83)
            , c = L(a(5))
            , f = a(84)
            , p = a(72)
            , m = L(a(2006))
            , h = L(a(247))
            , g = L(a(1895))
            , y = L(a(1))
            , v = L(a(2026))
            , b = L(a(1928))
            , w = L(a(346))
            , M = L(a(2027))
            , _ = L(a(2028))
            , E = a(6)
            , S = a(28)
            , k = a(21)
            , O = a(23)
            , P = L(a(1929))
            , T = a(11)
            , C = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = N();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , I = L(a(2))
            , j = L(a(593))
            , x = (L(a(356)),
                L(a(250)))
            , R = L(a(357))
            , A = L(a(615))
            , D = L(a(13));
        function N() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return N = function () {
                return e
            }
                ,
                e
        }
        function L(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function W() {
            return (W = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        const K = (0,
            y.default)(I.default)({
                flex: 1
            });
        const z = {
            showModal: S.AppContextActions.showModal,
            switchToNewThread: O.InboxActions.newThread.switchToNewThread,
            closeTearawayThread: O.InboxActions.threads.closeTearawayThread,
            openOrFocusPortalWindow: S.AppContextActions.openOrFocusPortalWindow,
            closePortalWindow: S.AppContextActions.closePortalWindow
        };
        var F = (0,
            T.connect)((function (e) {
                const t = (0,
                    k.requireAuthenticationData)(e);
                return {
                    primaryThreadKey: (0,
                        O.getprimaryThreadKey)(e),
                    isThreadPrimaryAndTearaway: (0,
                        O.isThreadPrimaryAndTearaway)(e),
                    userFirstName: t.firstName,
                    userID: t.userID,
                    didTryOsmetaUpgrade: (0,
                        k.getDidTryUpgradeOnRun)(e),
                    settingsWindowOpenOptions: (0,
                        S.getPortalWindowOpenOptions)(e, s.PortalKey.Settings),
                    isCompactModeEnabled: (0,
                        n.isGatekeeperEnabled)(e, "archon_enable_compact_mode"),
                    isSidebarEnabled: (0,
                        n.isGatekeeperEnabled)(e, "worchon_enable_sidebar"),
                    isSavedMessagesEnabled: (0,
                        n.isGatekeeperEnabled)(e, "worchon_saved_messages")
                }
            }
            ), z)((function ({ primaryThreadKey: e, isThreadPrimaryAndTearaway: t, userFirstName: a, userID: n, didTryOsmetaUpgrade: y, showModal: S, switchToNewThread: k, openOrFocusPortalWindow: O, closeTearawayThread: T, settingsWindowOpenOptions: I, isCompactModeEnabled: N, closePortalWindow: L, isSidebarEnabled: z, isSavedMessagesEnabled: F }) {
                (0,
                    h.default)({
                        width: 800,
                        height: 660,
                        resizable: !0,
                        persistentWindowKey: `INBOX_${n}`,
                        maximizable: !0,
                        hideOnClose: !0
                    }),
                    (0,
                        f.useShortcut)("command+n", k);
                const [B] = (0,
                    p.useUserSetting)("showSidebar");
                (0,
                    C.useEffect)(() => {
                        y && S({
                            type: "OsmetaUpgradeWelcome"
                        }, null)
                    }
                        , [y, S]);
                const U = (0,
                    C.useCallback)(() => {
                        O({
                            portalKey: s.PortalKey.Settings
                        })
                    }
                        , [O])
                    , G = (0,
                        C.useCallback)(() => L(s.PortalKey.Settings), [L]);
                (0,
                    f.useShortcut)("command+,", U);
                const V = (0,
                    E.useTheme)()
                    , H = (0,
                        j.default)()
                    , q = (0,
                        C.useRef)(null);
                return (0,
                    m.default)(),
                    C.default.createElement(x.default, {
                        listenToGlobalErrors: !1,
                        fallback: (e, t) => C.default.createElement(R.default, {
                            showBugButton: !0,
                            onRestart: () => window.location.reload()
                        }),
                        component: "inbox-screen"
                    }, C.default.createElement(K, {
                        "data-automation-id": "inbox-screen"
                    }, C.default.createElement(C.default.Fragment, null, C.default.createElement(A.default, {
                        persistentStorageKey: "inbox",
                        collapseMode: N ? "hide_master" : "collapse_master",
                        renderMaster: ({ isCollapsed: e, isAnimating: t, isCompactMode: a, activateDetailView: n }) => C.default.createElement(g.default, {
                            isCollapsed: e,
                            isAnimating: t,
                            isCompactMode: a,
                            onDetailViewActivated: n
                        }),
                        canCollapseMaster: !0,
                        renderDetail: a => t ? C.default.createElement(v.default, {
                            onCloseClicked: () => T(e || ""),
                            onFocusClicked: () => {
                                var t;
                                null === (t = q.current) || void 0 === t || t.focusThreadTearaway(e || "")
                            }
                        }) : C.default.createElement(o.default, W({}, a, {
                            threadKey: e,
                            isTearaway: !1
                        })),
                        renderSidebar: z && B ? (0,
                            i.default)({
                                workchat: () => C.default.createElement(u.default, null),
                                messenger: void 0
                            }) : void 0,
                        startOnDetailView: !0,
                        denseThreadList: H
                    }), C.default.createElement(D.default, {
                        name: "modal"
                    }, C.default.createElement(P.default, null)), null != I && C.default.createElement(w.default, {
                        id: s.PortalKey.Settings,
                        width: 800,
                        title: c.default._("{app name} Settings", [c.default._param("app name", d.displayName)], {
                            hk: "49eVu9"
                        }).toString(),
                        resizable: "windows" === V.os,
                        modal: !0,
                        onClose: G
                    }, C.default.createElement(_.default, {
                        settingsPane: I.startingPane
                    })), C.default.createElement(r.default, {
                        ref: q
                    }), C.default.createElement(b.default, {
                        threadKey: e,
                        isThreadOpenInTearaway: t
                    }), C.default.createElement(l.default, null), (0,
                        i.default)({
                            workchat: F ? C.default.createElement(M.default, null) : null,
                            messenger: null
                        }))))
            }
            ));
        t.default = F
    },
    1963: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(32)
            , r = a(23)
            , l = p(a(1924))
            , o = p(a(1928))
            , u = p(a(346))
            , i = p(a(13))
            , s = p(a(1929))
            , d = a(11)
            , c = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = f();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function f() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return f = function () {
                return e
            }
                ,
                e
        }
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = c.default.forwardRef((function (e, t) {
            const { closeTearawayThread: a, openedPopoutKeys: n, areChatTearawaysEnabled: r } = e
                , l = (0,
                    c.useRef)({});
            return (0,
                c.useImperativeHandle)(t, () => ({
                    focusThreadTearaway: e => {
                        var t;
                        null === (t = l.current[e]) || void 0 === t || t.focus()
                    }
                })),
                r ? c.default.createElement(c.default.Fragment, null, n.map(e => c.default.createElement(h, {
                    ref: t => {
                        l.current[e] = t
                    }
                    ,
                    key: e,
                    threadKey: e,
                    onClose: a
                }))) : null
        }
        ))
            , h = c.default.memo(c.default.forwardRef((function (e, t) {
                const { onClose: a, threadKey: n } = e
                    , r = (0,
                        c.useCallback)(() => {
                            a(n)
                        }
                            , [a, n]);
                return c.default.createElement(u.default, {
                    ref: t,
                    id: `thread${n}`,
                    maximizable: !1,
                    title: "Messenger",
                    modal: !1,
                    width: 800,
                    height: 600,
                    resizable: !0,
                    skipParent: !0,
                    onClose: r
                }, c.default.createElement(i.default, {
                    name: "modal"
                }, c.default.createElement(s.default, null)), c.default.createElement(l.default, {
                    threadKey: n,
                    activateMasterView: () => { }
                    ,
                    isCompactMode: !1,
                    isTearaway: !0
                }), c.default.createElement(o.default, {
                    threadKey: n,
                    isThreadOpenInTearaway: !1
                }))
            }
            )));
        const g = {
            closeTearawayThread: r.InboxActions.threads.closeTearawayThread
        };
        var y = (0,
            d.connect)((function (e) {
                return {
                    openedPopoutKeys: e.inbox.tearawayThreadKeys,
                    areChatTearawaysEnabled: (0,
                        n.isGatekeeperEnabled)(e, "archon_enable_chat_tearaways")
                }
            }
            ), g, null, {
                forwardRef: !0
            })(m);
        t.default = y
    },
    1964: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ isBlockedP2PThread: e, threadKey: t, parentThreadKey: a, messageGroupInfo: u, participants: i, userId: s, isNetworkConnected: d, isRtcEnabled: c, rtcStackStatus: f, isWorkchat: p, showUnreadDivider: m, lastReadWatermarkTimestampMs: h, unreadMessagesCount: g, dateIntersectionObserver: y }) {
                return l.default.createElement(o.default, {
                    reverse: !0
                }, l.default.createElement(r.default, null, u.map((r, o) => l.default.createElement(n.default, {
                    key: o,
                    unreadMessagesCount: g,
                    rtcStackStatus: f,
                    isRtcEnabled: c,
                    isNetworkConnected: d,
                    userId: s,
                    parentThreadKey: a,
                    threadKey: t,
                    isBlockedP2PThread: e,
                    groupInfo: r,
                    index: o,
                    participants: i,
                    messageGroupInfo: u,
                    showUnreadDivider: m,
                    lastReadWatermarkTimestampMs: h,
                    isWorkchat: p,
                    dateIntersectionObserver: y
                }))))
            }
            ;
        var n = u(a(1965))
            , r = u(a(1969))
            , l = u(a(0))
            , o = u(a(33));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1965: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ index: e, groupInfo: t, messageGroupInfo: a, showUnreadDivider: s, lastReadWatermarkTimestampMs: d, isWorkchat: c, unreadMessagesCount: f, parentThreadKey: p, threadKey: m, isNetworkConnected: h, isBlockedP2PThread: g, userId: y, isRtcEnabled: v, rtcStackStatus: b, dateIntersectionObserver: w, participants: M }) {
                const { messageOTIDs: _, isSenderViewer: E, groupMessageInfo: S, timestampMs: k, replySnippet: O, replySnippetType: P, messagesToIgnore: T, duplicateMessageCount: C, lastMessageTimestamp: I } = t
                    , j = e === a.length - 1 ? _[0] : _[_.length - 1]
                    , x = e > 0 ? a[e - 1].lastMessageTimestamp : Number.NEGATIVE_INFINITY
                    , R = 1 === _.length && "typing_indicator" === _[0]
                    , A = s && null != d && d >= x && d < I && !E && !R;
                return k ? i.default.createElement(l.default, {
                    timestampMs: k,
                    previousMessageTimestamp: x,
                    isWorkchat: c,
                    groupKey: j,
                    dateIntersectionObserver: w
                }) : i.default.createElement(o.default, {
                    key: j
                }, w && i.default.createElement(n.default, {
                    key: j,
                    currentDate: I,
                    dateIntersectionObserver: w
                }), A && i.default.createElement(r.default, {
                    newMessagesCount: f
                }), i.default.createElement(u.default, {
                    messageOTIDs: _,
                    threadKey: m,
                    parentThreadKey: p,
                    isBlockedP2PThread: g,
                    isSenderViewer: E,
                    replySnippet: O,
                    replySnippetType: P,
                    groupMessageInfo: S,
                    duplicateMessageCount: C,
                    messagesToIgnore: T,
                    participants: M,
                    userId: y,
                    isNetworkConnected: h,
                    isRtcEnabled: v,
                    rtcStackStatus: b
                }))
            }
            ;
        var n = s(a(1925))
            , r = s(a(1966))
            , l = s(a(1967))
            , o = s(a(2))
            , u = s(a(125))
            , i = s(a(0));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1966: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ newMessagesCount: e }) {
                const t = (0,
                    l.useTheme)()
                    , a = n.default._({
                        "*": "{number} new messages",
                        _1: "1 new message"
                    }, [n.default._plural(e, "number")], {
                        hk: "2HPbju"
                    });
                return o.default.createElement(d, null, o.default.createElement(c, null), o.default.createElement(f, null, o.default.createElement(i.default, {
                    use: "subtext",
                    numberOfLines: 1,
                    color: t.semanticColors.primary
                }, a)), o.default.createElement(c, null))
            }
            ;
        var n = s(a(5))
            , r = s(a(1))
            , l = a(6)
            , o = s(a(0))
            , u = s(a(2))
            , i = s(a(4));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0,
            r.default)(u.default)(e => ({
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                paddingLeft: 8,
                paddingRight: 8
            }))
            , c = (0,
                r.default)(u.default)(e => ({
                    flex: "1 1 auto",
                    height: 1,
                    opacity: .2,
                    backgroundColor: e.theme.semanticColors.primary
                }))
            , f = (0,
                r.default)(u.default)(e => ({
                    width: "auto",
                    margin: "0 auto",
                    textAlign: "center",
                    background: e.theme.semanticColors.bgSurface,
                    padding: 5
                }))
    },
    1967: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ timestampMs: e, isWorkchat: t, previousMessageTimestamp: a, groupKey: d, dateIntersectionObserver: c }) {
                const f = t ? e => (0,
                    i.extractTimeWithFormat)(e, {
                        hour: "numeric",
                        minute: "numeric"
                    }) : i.computeMessageListTimestamp
                    , p = (0,
                        l.default)(e, f)
                    , m = (0,
                        l.default)(e, e => (0,
                            i.extractDateWithFormat)(e, {
                                weekday: "short",
                                month: "short",
                                day: "numeric"
                            }))
                    , h = null != e && !(0,
                        i.isSameDay)(e, a);
                return t ? s.default.createElement(o.default, null, c && s.default.createElement(n.default, {
                    key: d,
                    currentDate: a,
                    dateIntersectionObserver: c
                }), h && s.default.createElement(r.default, {
                    date: m
                }), s.default.createElement(u.default, {
                    capitalize: !0,
                    key: p,
                    messageText: p
                })) : s.default.createElement(u.default, {
                    capitalize: !0,
                    key: p,
                    messageText: p
                })
            }
            ;
        var n = d(a(1925))
            , r = d(a(1968))
            , l = d(a(639))
            , o = d(a(2))
            , u = d(a(362))
            , i = a(115)
            , s = d(a(0));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1968: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ date: e }) {
                const t = (0,
                    r.useTheme)();
                return (l.default.createElement(s, null, l.default.createElement(d, null), l.default.createElement(c, null, l.default.createElement(u.default, {
                    use: "caption-bold",
                    color: t.colors.base70,
                    numberOfLines: 1
                }, e)), l.default.createElement(d, null)))
            }
            ;
        var n = i(a(1))
            , r = a(6)
            , l = i(a(0))
            , o = i(a(2))
            , u = i(a(4));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0,
            n.default)(o.default)(e => ({
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                paddingLeft: 8,
                paddingRight: 8
            }))
            , d = (0,
                n.default)(o.default)(e => ({
                    flex: "1 1 auto",
                    height: 1,
                    opacity: .2,
                    backgroundColor: e.theme.semanticColors.secondary
                }))
            , c = (0,
                n.default)(o.default)(e => ({
                    width: "auto",
                    margin: "0 auto",
                    textAlign: "center",
                    background: e.theme.semanticColors.bgSurface,
                    padding: 5
                }))
    },
    1969: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n, r = (n = a(366)) && n.__esModule ? n : {
            default: n
        }, l = function (e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = o();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            a.default = e,
                t && t.set(e, a);
            return a
        }(a(0));
        function o() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function () {
                return e
            }
                ,
                e
        }
        var u = e => {
            const [t, a] = (0,
                l.useState)("")
                , n = (0,
                    l.useMemo)(() => ({
                        selectedMessageOTID: t,
                        setSelectedMessageOTID: a,
                        clearSelectedMessageOTID: () => a("")
                    }), [t, a]);
            return l.default.createElement(r.default.Provider, {
                value: n
            }, e.children)
        }
            ;
        t.default = u
    },
    1970: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t) {
                (0,
                    n.useEffect)(() => () => {
                        e && t(e)
                    }
                        , [e, t])
            }
            ;
        var n = a(0)
    },
    1971: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t, a, n) {
                const { bridge: u, inPortal: i } = (0,
                    l.useWindowContext)()
                    , s = (0,
                        o.useRef)(!1)
                    , d = (0,
                        r.default)(t, !0).current
                    , c = (0,
                        o.useRef)(e);
                c.current = e,
                    (0,
                        o.useEffect)(() => {
                            s.current = u.window.isActive();
                            const e = [u.window.addBlurListener(() => {
                                s.current = !1
                            }
                            ), u.window.addFocusListener(() => {
                                s.current = !0,
                                    !a || c.current && !i || n(a)
                            }
                            )];
                            return () => {
                                e.map(e => e())
                            }
                        }
                            , [u, a, i, n]),
                    (0,
                        o.useEffect)(() => {
                            a && d && s.current && (!e || i) && n(a)
                        }
                            , [a, d, e, i, n])
            }
            ;
        var n, r = (n = a(190)) && n.__esModule ? n : {
            default: n
        }, l = a(35), o = a(0)
    },
    1972: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { firstMessageOTID: t, lastMessageOTID: a, threadKey: s, hasMessages: d, isInMessageIsland: c, isNewThread: f, readyToShowMessages: p, hasInitialSyncCompleted: m, threadExists: h, logMessagesRead: g } = e
                    , y = (0,
                        u.default)(t, !0).current
                    , v = (0,
                        u.default)(a, !0).current
                    , b = (0,
                        u.default)(s, !0).current
                    , w = (0,
                        u.default)(h, !1).current;
                (function (e) {
                    (0,
                        i.useLayoutEffect)(() => {
                            e || (o.default.asl.incrementStat(l.AslStat.InboxShimmerRendered, 1),
                                o.default.performance.markEvent(r.PerformanceEvents.SHIMMER_RENDERED))
                        }
                            , [e])
                }
                )(p),
                    function (e, t, a, n) {
                        (0,
                            i.useLayoutEffect)(() => {
                                a && (t ? (o.default.asl.incrementStat(l.AslStat.InboxCreateThreadRendered, 1),
                                    o.default.performance.markEvent(r.PerformanceEvents.CREATE_THREAD_RENDERED)) : e && n && (o.default.asl.incrementStat(l.AslStat.InboxMessagesRendered, 1),
                                        o.default.performance.markEvent(r.PerformanceEvents.MESSAGES_RENDERED)))
                            }
                                , [e, t, a, n])
                    }(d, f, p, m),
                    function (e, t, a) {
                        (0,
                            i.useEffect)(() => {
                                e && t && a && (o.default.asl.incrementStat(l.AslStat.InboxStaleMessagesRendered, 1),
                                    o.default.performance.markEvent(r.PerformanceEvents.STALE_MESSAGES_RENDERED),
                                    o.default.diagnostics.setCrashReporterApplicationState("interactive"))
                            }
                                , [e, t, a])
                    }(h, w, p),
                    function (e, t, a, l, u, s) {
                        const d = (0,
                            i.useRef)((0,
                                n.debounceWithArgsSelector)((e, t) => {
                                    null != e && u(e, t)
                                }
                                    , e => e.find(e => !0 === e[1]) || e[0], 200));
                        (0,
                            i.useEffect)(() => {
                                if (null != s && t && document.hasFocus()) {
                                    const t = !a && e;
                                    t && (l ? o.default.performance.markEvent(r.PerformanceEvents.NEWER_MESSAGES_LOADED) : d.current(s, t))
                                }
                            }
                                , [e, t, a, l, u, s])
                    }(v, d, b, c, g, s),
                    function (e, t, a) {
                        (0,
                            i.useEffect)(() => {
                                if (e) {
                                    !a && t && o.default.performance.markEvent(r.PerformanceEvents.EARLIER_MESSAGES_LOADED)
                                }
                            }
                                , [a, t, e])
                    }(d, y, b)
            }
            ;
        var n = a(117)
            , r = a(8)
            , l = a(67)
            , o = s(a(9))
            , u = s(a(190))
            , i = a(0);
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1973: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                var t;
                const a = null != e;
                (0,
                    r.useLayoutEffect)(() => {
                        if (e && e.fetchInfo && e.orderedMessageOTIDs.length > 0) {
                            const t = document.getElementById(e.fetchInfo.anchoredMessageId)
                                , a = setTimeout(() => (window.requestAnimationFrame(() => {
                                    t && (0,
                                        n.scrollAndBounceMessage)(t, 1e3)
                                }
                                ),
                                    () => clearTimeout(a)), 500)
                        }
                    }
                        , [a, null == e ? void 0 : null === (t = e.fetchInfo) || void 0 === t ? void 0 : t.anchoredMessageId])
            }
            ;
        var n = a(625)
            , r = a(0)
    },
    1974: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t, a = []) {
                const [o, i] = (0,
                    c.useState)(null)
                    , s = (0,
                        c.useRef)(null)
                    , [f, p] = (0,
                        c.useState)(!1)
                    , m = (0,
                        c.useRef)();
                (0,
                    c.useEffect)(() => {
                        i(null)
                    }
                        , a),
                    (0,
                        c.useEffect)(() => {
                            if (e)
                                return m.current = new n.DateIntersectionObserver(i, t),
                                    m.current.observer.disconnect()
                        }
                            , [e, t]);
                const g = (0,
                    c.useCallback)((0,
                        r.throttle)(() => {
                            p(!0),
                                s.current && clearTimeout(s.current),
                                s.current = setTimeout(() => p(!1), 500)
                        }
                            , 450), [p])
                    , { current: y } = t;
                if ((0,
                    c.useEffect)(() => {
                        if (e && y)
                            return y.addEventListener("scroll", g),
                                () => y.removeEventListener("scroll", g)
                    }
                        , [e, y, g]),
                    !e)
                    return {};
                return {
                    datePill: c.default.createElement(h, {
                        visible: Boolean(o && !(0,
                            l.isToday)(new Date(o)) && f)
                    }, c.default.createElement(u.default, {
                        type: u.NotificationTypes.MESSAGE_TEXT,
                        text: (0,
                            d.extractDateWithFormat)(null != o ? o : 0, {
                                weekday: "short",
                                month: "short",
                                day: "numeric"
                            })
                    })),
                    dateIntersectionObserver: m.current
                }
            }
            ;
        var n = a(1975)
            , r = a(117)
            , l = a(39)
            , o = m(a(1))
            , u = p(a(369))
            , i = a(261)
            , s = m(a(141))
            , d = a(115)
            , c = p(a(0));
        function f() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return f = function () {
                return e
            }
                ,
                e
        }
        function p(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = f();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const h = (0,
            o.default)(i.CenteringWrapper)(({ visible: e }) => ({
                top: 70,
                paddingTop: 2,
                zIndex: s.default.Tooltip,
                opacity: e ? 1 : 0,
                transition: "0.2s opacity",
                pointerEvents: e ? "all" : "none"
            }))
    },
    1975: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.DateIntersectionObserver = void 0;
        t.DateIntersectionObserver = class {
            constructor(e, t) {
                this.observer = void 0,
                    this.previousYs = new Map,
                    this.previousRatios = new Map,
                    this.initializeDateNeeded = !0,
                    this.observer = new IntersectionObserver(t => {
                        this.initializeDateNeeded ? this.initializeDate(t, e) : this.updateDate(t, e)
                    }
                        , {
                            root: t.current,
                            threshold: [0, .1, .2, .3, .4, .5, .6, .7, .8, .9, 1]
                        })
            }
            initializeDate(e, t) {
                let a;
                e.forEach(e => {
                    const n = e.boundingClientRect.y
                        , r = e.intersectionRatio;
                    (n < a || !a) && 1 === e.intersectionRatio && (a = n,
                        t(parseInt(e.target.innerHTML))),
                        this.previousYs.set(e.target.id, n),
                        this.previousRatios.set(e.target.id, r)
                }
                ),
                    this.initializeDateNeeded = !1
            }
            getObserver() {
                return this.observer
            }
            updateDate(e, t) {
                e.forEach(e => {
                    const a = e.boundingClientRect.y
                        , n = e.intersectionRatio
                        , r = e.isIntersecting
                        , l = this.previousYs.get(e.target.id)
                        , o = this.previousRatios.get(e.target.id)
                        , u = parseInt(e.target.innerHTML);
                    l && a < l ? o && n < o && r && t(u) : l && a > l && r && o && n > o && t(u),
                        this.previousYs.set(e.target.id, a),
                        this.previousRatios.set(e.target.id, n)
                }
                )
            }
        }
    },
    1976: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getUnreadMessageCount = l,
            t.default = void 0;
        var n = a(0);
        function r(e, t) {
            return e.lastMessageTimestamp > t
        }
        function l(e, t) {
            return -1 === e ? 0 : t.filter(t => r(t, e) && function (e) {
                return "number" != typeof e.timestampMs
            }(t) && function (e) {
                return !(1 === e.messageOTIDs.length && "typing_indicator" === e.messageOTIDs[0])
            }(t)).reduce((e, t) => e + t.messageOTIDs.length, 0)
        }
        var o = function (e, t) {
            const [a, o] = (0,
                n.useState)(-1)
                , u = (0,
                    n.useRef)(null)
                , i = (0,
                    n.useRef)(!1);
            (0,
                n.useEffect)(() => {
                    if (null == e || 0 === t.length)
                        return;
                    let n = a;
                    const l = e.threadKey;
                    l !== u.current && (i.current = !1,
                        u.current = l);
                    const s = e.lastReadWatermarkTimestampMs;
                    if (i.current || (o(s),
                        n = s,
                        i.current = !0),
                        i.current && -1 !== n) {
                        t.filter(e => r(e, n) && e.isSenderViewer).length > 0 && (o(-1),
                            n = -1)
                    }
                }
                    , [e, t, a]);
            const s = l(a, t);
            return [s > 0, a, s]
        };
        t.default = o
    },
    1977: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(166)
            , r = M(a(5))
            , l = M(a(1978))
            , o = a(21)
            , u = M(a(1))
            , i = M(a(2))
            , s = w(a(22))
            , d = a(6)
            , c = M(a(4))
            , f = M(a(141))
            , p = M(a(1979))
            , m = M(a(634))
            , h = a(23)
            , g = a(644)
            , y = a(11)
            , v = w(a(0));
        function b() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return b = function () {
                return e
            }
                ,
                e
        }
        function w(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = b();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function M(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const _ = (0,
            u.default)(i.default)({
                top: 2,
                position: "sticky",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                zIndex: f.default.Tooltip,
                height: 35
            })
            , E = u.default.div(({ theme: e }) => {
                let [t, a, r] = e.themeIsDark ? ["#FFFFFF", .25, .1] : ["#000000", .12, .2];
                return {
                    maxWidth: "90%",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 10,
                    paddingRight: 4,
                    backgroundColor: (0,
                        n.addAlpha)(e.themeIsDark ? e.semanticColors.bgSurfaceSecondary : e.semanticColors.bgSurface, .9),
                    borderRadius: 18,
                    boxShadow: `0 4px 14px 0 ${(0,
                        n.addAlpha)(t, a)}, 0 0 1px 0 ${(0,
                            n.addAlpha)(t, r)}}`,
                    shadowRadius: 14,
                    cursor: "pointer"
                }
            }
            )
            , S = (0,
                u.default)(i.default)({
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline"
                })
            , k = (0,
                u.default)(i.default)({
                    marginRight: 9.6
                })
            , O = (0,
                u.default)(c.default)({
                    marginRight: 8
                })
            , P = (0,
                u.default)(c.default)({
                    marginRight: 8,
                    flex: 1
                });
        const T = {
            unpinMessage: h.InboxActions.messages.unpinMessage,
            goToMessage: h.InboxActions.messageIsland.goToMessage
        };
        var C = (0,
            y.connect)((function () {
                return (e, { threadKey: t }) => {
                    var a, n, r;
                    const l = (0,
                        h.getPinnedMessageForThread)(e, t).message;
                    return {
                        pinnedMessage: l,
                        isSenderViewer: (null === (a = (0,
                            o.requireAuthenticationData)(e)) || void 0 === a ? void 0 : a.userID) === l.senderId,
                        senderNickname: null === (n = (0,
                            h.getParticipantMapForThread)(e, t)) || void 0 === n ? void 0 : null === (r = n[l.senderId]) || void 0 === r ? void 0 : r.nickname
                    }
                }
            }
            ), T)((function ({ pinnedMessage: e, isSenderViewer: t, senderNickname: a, goToMessage: n, unpinMessage: o }) {
                const u = (0,
                    d.useTheme)()
                    , c = (0,
                        l.default)(500)
                    , [f, h] = (0,
                        v.useState)(!1)
                    , y = r.default._("Unpin", null, {
                        hk: "3aTm4E"
                    }).toString()
                    , b = t ? r.default._("You", null, {
                        hk: "4gk10t"
                    }).toString() : null != a ? a : e.name
                    , w = e.text && e.text.trim().length > 0 ? e.text : r.default._("Pinned message", null, {
                        hk: "3JBUwe"
                    }).toString();
                return v.default.createElement(_, null, v.default.createElement(E, {
                    theme: u,
                    style: c,
                    onClick: () => n(e.messageId, e.threadKey)
                }, v.default.createElement(k, null, v.default.createElement(m.default, {
                    size: 14,
                    color: u.colors.base50
                })), v.default.createElement(S, null, v.default.createElement(O, {
                    use: "body-semibold"
                }, b), v.default.createElement(P, {
                    use: "subtext",
                    numberOfLines: 1
                }, w)), v.default.createElement(i.default, {
                    onMouseEnter: () => h(!0),
                    onMouseLeave: () => h(!1)
                }, v.default.createElement(s.default, {
                    size: s.RoundButtonSize.XSmall,
                    title: y,
                    "aria-label": y,
                    icon: p.default,
                    iconColor: u.colors.base70,
                    buttonColor: f ? u.colors.base40 : u.colors.base20,
                    activateOnHover: !0,
                    onClick: t => {
                        (0,
                            g.unpinConfirm)(() => o(e.threadKey, e.messageId))(),
                            t.stopPropagation()
                    }
                    ,
                    telemetryName: "unpin_message"
                }))))
            }
            ));
        t.default = C
    },
    1978: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e = 250) {
                const [t, a] = (0,
                    n.useState)(0);
                return (0,
                    n.useLayoutEffect)(() => (window.requestAnimationFrame(() => {
                        a(1)
                    }
                    ),
                        () => {
                            a(0)
                        }
                    ), []),
                {
                    opacity: t,
                    transition: `opacity ${e}ms ease-in`
                }
            }
            ;
        var n = a(0)
    },
    1979: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M27.091 12.091a2.25 2.25 0 10-3.182-3.182l-5.732 5.732a.25.25 0 01-.354 0L12.091 8.91a2.25 2.25 0 10-3.182 3.182l5.732 5.732a.25.25 0 010 .354L8.91 23.909a2.25 2.25 0 003.182 3.182l5.732-5.732a.25.25 0 01.354 0l5.732 5.732a2.25 2.25 0 103.182-3.182l-5.732-5.732a.25.25 0 010-.354l5.732-5.732z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    1980: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return l.default.createElement(l.Suspense, {
                    fallback: l.default.createElement(n.default, null)
                }, l.default.createElement(s, e))
            }
            ;
        var n = u(a(1981))
            , r = u(a(1926))
            , l = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = o();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function o() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function () {
                return e
            }
                ,
                e
        }
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = l.default.lazy(() => Promise.all([a.e(10), a.e(24)]).then(a.t.bind(null, 264, 7)));
        function s(e) {
            return (0,
                r.default)(),
                l.default.createElement(i, e)
        }
    },
    1981: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                return o.default.createElement(i, null, o.default.createElement(s, null, o.default.createElement(d, null)))
            }
            ;
        var n = u(a(2))
            , r = a(100)
            , l = u(a(1))
            , o = u(a(0));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0,
            l.default)(n.default)(e => ({
                flexDirection: "column",
                borderTop: e.theme.select({
                    highContrast: `1px solid ${e.theme.colors.base80}`
                })
            }))
            , s = (0,
                l.default)(n.default)({
                    flexDirection: "row",
                    padding: "8px 12px 8px 8px"
                })
            , d = (0,
                l.default)(n.default)(e => ({
                    flex: 1,
                    padding: "4px 4px",
                    margin: "0px 4px",
                    overflowY: "auto",
                    borderRadius: 18,
                    height: 34,
                    ...(0,
                        r.ShimmerAnimationStyles)(e)
                }))
    },
    1982: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = S(a(1983))
            , r = S(a(1985))
            , l = S(a(27))
            , o = S(a(59))
            , u = a(8)
            , i = S(a(588))
            , s = S(a(254))
            , d = a(35)
            , c = S(a(13))
            , f = a(6)
            , p = a(52)
            , m = a(101)
            , h = a(28)
            , g = a(21)
            , y = a(32)
            , v = a(23)
            , b = a(49)
            , w = a(11)
            , M = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = E();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , _ = S(a(253));
        function E() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return E = function () {
                return e
            }
                ,
                e
        }
        function S(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const k = {
            changeChatPhoto: v.InboxActions.threads.changeChatPhoto,
            showModal: h.AppContextActions.showModal,
            startCall: b.RtcActions.startCall
        };
        var O = (0,
            w.connect)((function (e, { threadKey: t }) {
                const a = (0,
                    v.getThread)(e, t);
                if (!a)
                    throw new Error("Tried to render connected chat header without an opened thread");
                const n = (0,
                    g.requireAuthenticationData)(e)
                    , r = (0,
                        v.getThreadPresences)(e, a.threadKey);
                return {
                    authData: n,
                    isNetworkConnected: (0,
                        h.isAppNetworkConnected)(e),
                    isRtcEnabled: (0,
                        b.isRtcEnabled)(e),
                    rtcStackStatus: (0,
                        b.getRtcStackStatus)(e),
                    callStatus: a.ongoingCallState || u.RtcCallStatus.NONE,
                    viewerId: n.userID,
                    threadCapabilities: a.capabilities,
                    threadKey: a.threadKey,
                    threadName: a.threadName,
                    threadType: a.threadType,
                    isPinned: a.isPinned,
                    openedThreadFolderParentKey: a.parentThreadKey,
                    threadPictureUrl: (0,
                        l.default)(a.threadPicture),
                    otherProfilePictureUrl: (0,
                        l.default)(a.otherParticipantProfilePicture),
                    membershipRequests: (0,
                        v.getMembershipRequests)(e, t),
                    participants: (0,
                        v.getParticipantListForThread)(e, t),
                    participantStatus: (0,
                        v.getOppositeParticipantStatus)(e, t),
                    presence: r,
                    isMuted: a.isMuted,
                    isSidebarEnabled: (0,
                        y.isGatekeeperEnabled)(e, "worchon_enable_sidebar"),
                    linkedGroupId: (0,
                        v.getLinkedGroupId)(e, t)
                }
            }
            ), k)((function (e) {
                const { authData: t, isNetworkConnected: a, isRtcEnabled: l, rtcStackStatus: h, callStatus: g, threadCapabilities: y, threadKey: v, threadName: E, threadType: S, threadPictureUrl: k, membershipRequests: O, otherProfilePictureUrl: P, participants: T, participantStatus: C, viewerId: I, presence: j, isMuted: x, isPinned: R, inNullState: A, openedThreadFolderParentKey: D, changeChatPhoto: N, showModal: L, startCall: W, linkedGroupId: K, isSidebarEnabled: z } = e
                    , { windowKey: F } = (0,
                        d.useWindowContext)()
                    , B = (0,
                        f.useTheme)()
                    , U = (0,
                        i.default)()
                    , G = (0,
                        w.useSelector)(e => (0,
                            b.getIsInCall)(e, U)) ? u.RtcCallStatus.NONE : g
                    , V = (0,
                        M.useMemo)(() => {
                            let e = [];
                            return G === u.RtcCallStatus.NONE && (e = [(0,
                                m.getAudioCallMenuItem)(t.userID, v, y, {
                                    isNetworkConnected: a,
                                    isRtcEnabled: l,
                                    rtcStackStatus: h,
                                    participants: T
                                }, u.OutgoingCallSource.CHAT_HEADER, void 0, F), (0,
                                    m.getVideoCallMenuItem)(t.userID, v, y, {
                                        isNetworkConnected: a,
                                        isRtcEnabled: l,
                                        rtcStackStatus: h,
                                        participants: T
                                    }, u.OutgoingCallSource.CHAT_HEADER, void 0, F)]),
                                e.push((0,
                                    m.getMessageSearchMenuItem)(v, B, y)),
                                e
                        }
                            , [G, t.userID, v, y, a, l, h, T, F, B])
                    , H = (0,
                        M.useCallback)(e => D === u.ThreadFolderParentKey.MessageRequests ? null : (0,
                            r.default)(t, v, S, y, k, T, O, I, x, B, A, e, F, K, R), [D, t, y, v, S, k, T, O, I, x, B, A, F, K, R])
                    , q = (0,
                        M.useCallback)(() => {
                            L({
                                type: "GroupMembers",
                                threadKey: v
                            }, F)
                        }
                            , [L, v, F])
                    , J = (0,
                        M.useMemo)(() => (0,
                            p.isRtcAllowed)(y, l, I, S, T, D), [y, l, I, S, T, D])
                    , Q = (0,
                        M.useCallback)(e => {
                            W(v, S, u.OutgoingCallSource.CHAT_HEADER, e === u.RtcCallStatus.AUDIO)
                        }
                            , [W, v, S]);
                return M.default.createElement(c.default, {
                    name: "chatHeader"
                }, M.default.createElement(s.default, {
                    fileTypes: ["image/png", "image/jpeg"],
                    multiple: !1,
                    onFilesSelected: e => {
                        1 === e.length && N(v, e[0].path, e[0].type)
                    }
                }, e => M.default.createElement(_.default, {
                    threadName: E,
                    threadType: S,
                    threadPictureUrl: k || P,
                    participants: T,
                    viewerId: I,
                    presence: j,
                    participantStatus: C,
                    commands: V,
                    overflowCommands: H(e),
                    callStatus: G,
                    onJoinCallClick: J ? Q : void 0,
                    inNullState: A,
                    onClick: (0,
                        o.default)({
                            messenger: (0,
                                p.isGroupThreadType)(S) ? q : void 0,
                            workchat: void 0
                        }),
                    caption: M.default.createElement(n.default, {
                        threadKey: v
                    }),
                    isSidebarEnabled: z
                })))
            }
            ));
        t.default = O
    },
    1983: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(8)
            , r = M(a(5))
            , l = M(a(1984))
            , o = a(28)
            , u = a(21)
            , i = a(23)
            , s = M(a(1))
            , d = M(a(116))
            , c = M(a(368))
            , f = M(a(587))
            , p = a(35)
            , m = a(6)
            , h = a(632)
            , g = a(52)
            , y = a(11)
            , v = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = w();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , b = M(a(4));
        function w() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return w = function () {
                return e
            }
                ,
                e
        }
        function M(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const _ = (0,
            s.default)(b.default)({
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline"
            })
            , E = s.default.span({
                textOverflow: "ellipsis",
                overflow: "hidden"
            })
            , S = (0,
                s.default)(d.default)({
                    fontWeight: "bold",
                    cursor: "default",
                    "&:hover": {
                        textDecoration: "none"
                    }
                });
        const k = {
            showModal: o.AppContextActions.showModal
        };
        var O = (0,
            y.connect)((function (e, { threadKey: t }) {
                var a;
                const n = (0,
                    i.getThread)(e, t);
                return {
                    threadType: (0,
                        i.getThreadType)(e, t),
                    participants: (0,
                        i.getParticipantListForThread)(e, t),
                    participantStatus: (0,
                        i.getOppositeParticipantStatus)(e, t),
                    chatDescription: (0,
                        i.getThreadDescription)(e, t),
                    groupDescription: (0,
                        i.getLinkedGroupDescription)(e, t),
                    viewerId: (0,
                        u.requireAuthenticationData)(e).userID,
                    cannotReplyReason: null !== (a = null == n ? void 0 : n.cannotReplyReason) && void 0 !== a ? a : null
                }
            }
            ), k)((function ({ threadType: e, participants: t, participantStatus: a, chatDescription: o, groupDescription: u, viewerId: i, cannotReplyReason: s, showModal: d, threadKey: y }) {
                var b, w, M;
                const k = (0,
                    m.useTheme)()
                    , O = null !== (b = null != u ? u : o) && void 0 !== b ? b : ""
                    , P = null !== (w = null == O ? void 0 : O.split("\n")[0]) && void 0 !== w ? w : ""
                    // [URL:REGEX]#4
                    , T = Boolean(null === (M = (0,
                        h.getURLMatches)(O)) || void 0 === M ? void 0 : M.length)
                    , [C, I] = (0,
                        l.default)()
                    , { windowKey: j } = (0,
                        p.useWindowContext)()
                    , x = (0,
                        v.useCallback)(() => {
                            d({
                                type: "GroupMembers",
                                threadKey: y
                            }, j)
                        }
                            , [d, y, j])
                    , R = (0,
                        v.useCallback)(e => {
                            e.stopPropagation(),
                                d({
                                    type: "ThreadDescription",
                                    threadKey: y
                                }, j)
                        }
                            , [d, y, j]);
                if ((0,
                    g.isGroupThreadType)(e)) {
                    const e = t.some(e => e.workForeignEntityType === n.WorkForeignEntityType.Foreign);
                    return (v.default.createElement(_, {
                        use: "subtext-medium",
                        color: k.colors.base70,
                        wrapText: !1
                    }, e && v.default.createElement(v.default.Fragment, null, v.default.createElement(c.default, {
                        isGroupChat: !0
                    }), "????"), v.default.createElement(E, {
                        ref: I,
                        onClick: x
                    }, r.default._("{number} members", [r.default._param("number", t.length)], {
                        hk: "2aHdTp"
                    }), P && v.default.createElement(v.default.Fragment, null, "??????", P, "??")), P && (C || T) && v.default.createElement(S, {
                        telemetryName: "thread_description_read_more",
                        "aria-label": r.default._("Read full description of this thread", null, {
                            hk: "3J9UEW"
                        }).toString(),
                        displayAsLink: !1,
                        onClick: R
                    }, r.default._("Read More", null, {
                        hk: "46e8Mi"
                    }))))
                }
                const A = t[0] // [URL:REGEX]#5 -> t[0] (ContactID) check
                    , D = t.find(e => e.contactId !== i);
                return null == D && 1 === t.length ? v.default.createElement(f.default, {
                    name: null,
                    participant: A,
                    status: a,
                    showCompany: !1
                }) : null != D ? v.default.createElement(f.default, {
                    name: null,
                    participant: D,
                    status: a,
                    isDeactivated: "recipients_inactive_work_account" === s,
                    showCompany: A.workCompanyId !== D.workCompanyId
                }) : null
            }
            ));
        t.default = O
    },
    1984: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                //[URL:REGEX] REACT STATUS
                // r object -> ReactDOM
                const [e, t] = (0,
                    r.useState)(!1)
                    , a = (0,
                        r.useRef)()
                    , { current: l } = a
                    , { window: o } = (0,
                        n.useWindowContext)();
                return (0,
                    r.useLayoutEffect)(() => {
                        if (l) {
                            const e = new o.ResizeObserver(() => {
                                t(l.offsetWidth < l.scrollWidth)
                            }
                            );
                            return e.observe(l),
                                () => e.unobserve(l)
                        }
                    }
                        , [l, o.ResizeObserver]),
                    [e, a]
            }
            ;
        var n = a(35)
            , r = a(0)
    },
    1985: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = f(a(187))
            , r = a(8)
            , l = a(592)
            , o = f(a(5))
            , u = f(a(9))
            , i = a(52)
            , s = f(a(1986))
            , d = f(a(1987))
            , c = a(101);
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = (e, t, a, f, p, m, h, g, y, v, b, w, M, _, E) => {
            const S = (0,
                i.isViewerPartOfThread)(g, m)
                , k = m.some(e => e.contactId === g && e.isAdmin)
                , O = (0,
                    i.isThreadWithPage)(e.userID, a, m)
                , P = (0,
                    i.isGroupThreadType)(a) ? (0,
                        c.getAddPeopleMenuItem)(t, M, !S) : null
                , T = (0,
                    i.isGroupThreadType)(a) ? (0,
                        c.getLeaveGroupActionItem)(g, t, v.colors.red, !S) : null
                , C = (0,
                    i.isGroupThreadType)(a) ? (0,
                        c.getGroupMembersMenuItem)(t, h.length, M, !S, k) : null
                , I = 1 === m.length && m[0].contactId === e.userID ? null : (0,
                    c.getReportingMenuItem)(t, a, O, !S || b)
                , j = _ ? {
                    id: "view_linked_group",
                    label: o.default._("View Workplace Group", null, {
                        hk: "1JenT6"
                    }).toString(),
                    icon: d.default,
                    onClick: () => u.default.platform.openExternalURL((0,
                        n.default)((0,
                            l.getHostName)(), `/groups/${_}/`))
                } : null;
            let x = null;
            const R = (0,
                i.getPeer)(g, a, m);
            return R && R.workForeignEntityType === r.WorkForeignEntityType.Foreign && (x = (0,
                i.isParticipantBlocked)(R) ? (0,
                    c.getUnblockMenuItem)(R.contactId, R.name) : (0,
                        c.getBlockMenuItem)(R.contactId, R.name)),
                [P, a == r.ThreadType.OnetoOne ? (A = m.find(t => t.contactId !== e.userID),
                    A ? {
                        id: A.contactId,
                        icon: s.default,
                        label: o.default._("View Profile", null, {
                            hk: "58qDx"
                        }).toString(),
                        onClick: () => {
                            u.default.platform.openExternalURL((0,
                                n.default)(u.default.platform.hostname, A.contactId))
                        }
                    } : null) : null, (0,
                        i.isPeerBlockedByViewer)(e.userID, a, m) || O ? null : (0,
                            c.getThreadCustomizationMenuItem)(t, a, f, v, null != p && p.length > 0, M, !S, w), (0,
                                c.getPinItem)(E, t), (0,
                                    i.isPeerBlockedByViewer)(e.userID, a, m) ? null : (0,
                                        c.getNotificationsItem)(y, t, M, !S), (0,
                                            c.getOpenGalleryMenuItem)(t, !S), {
                        type: "separator"
                    }, C, j, {
                        type: "separator"
                    }, x, I, T, {
                        type: "separator"
                    }];
            var A
        }
            ;
        t.default = p
    },
    1986: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18 18c-2.554 0-4.75-1.793-4.75-5.695C13.25 9.123 15.25 7 18 7s4.75 2.123 4.75 5.305C22.75 16.207 20.554 18 18 18zm9 8.665c0 .74-.37 1.335-1.06 1.335H10.06C9.37 28 9 27.405 9 26.665 9 22.985 13.165 20 18 20s9 2.985 9 6.665z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    1987: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("g", {
                    id: "WorkplaceGroupIcon__workplace-group",
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1"
                }, r.default.createElement("path", {
                    id: "WorkplaceGroupIcon__Bounding-Box",
                    d: "M0 36h36V0H0z"
                }), r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M18 2.6C9.5 2.6 2.6 9.5 2.6 18S9.5 33.4 18 33.4 33.4 26.5 33.4 18 26.5 2.6 18 2.6zm5.6 11.6c0-1.4.5-2.2.9-2.2s.6.2.6.2c0-.3.2-.5.9-.5 1.8 0 2.4.7 2.4 2.6.2.1.2.3.2.7 0 .3-.1.6-.3.7-.2 1.5-1.1 2.6-2.4 2.6s-2.2-1.1-2.4-2.6c-.2-.1-.3-.4-.3-.7.1-.4.2-.7.4-.8zm-6.7-4.1c.4 0 .8.2.8.2.3-.2.6-.6 1.2-.6 1.3 0 3.3 1.7 3.3 4 0 1-.4 1.5-.4 2 0 .8.8.8.8 1.1 0 .3-.6.5-1.6.5-.4 0-.8 0-1.2-.1-.5.5-1.1.9-1.9.9-.7 0-1.2-.4-1.7-.8h-.3c-1.1 0-1.9-1.7-1.9-3.6.2-1.8 1.9-3.6 2.9-3.6zm-9.3 4.1c0-1.4.4-2.2.9-2.2.4 0 .6.2.6.2 0-.3.2-.5.9-.5 1.8 0 2.4.7 2.4 2.6.2.1.2.3.2.7 0 .3-.1.6-.3.7-.2 1.5-1.1 2.6-2.4 2.6S7.8 17 7.6 15.6c-.2-.1-.3-.4-.3-.7 0-.3.1-.6.3-.7zm4.6 5.8c-.6.8-1.1 1.8-1.3 2.8-.1.4-.4.7-.7.7H6.4c-.3 0-.6-.3-.6-.8 0-2.1 1.9-3.8 4.2-3.8.8 0 1.5.2 2.1.5.2.1.2.4.1.6zm10.7 4.2h-9.7c-.5 0-.9-.4-.9-.9 0-2.5 2.6-4.5 5.7-4.5s5.7 2 5.7 4.5c0 .5-.4.9-.8.9zm6.7-.7h-3.7c-.4 0-.7-.3-.7-.7-.2-1-.7-2-1.3-2.8-.1-.2-.1-.4.1-.5.6-.3 1.3-.5 2.1-.5 2.3 0 4.2 1.7 4.2 3.8-.1.3-.4.7-.7.7z",
                    clipRule: "evenodd"
                })))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    1988: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = c(a(618))
            , r = c(a(190))
            , l = a(23)
            , o = c(a(645))
            , u = a(11)
            , i = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = d();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , s = c(a(13));
        function d() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return d = function () {
                return e
            }
                ,
                e
        }
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = {
            issueMessageSearchQuery: l.InboxActions.messageSearch.issueMessageSearchQuery,
            selectMessageSearchResult: l.InboxActions.messageSearch.selectMessageSearchResult,
            clearMessageSearchInfo: l.InboxActions.messageSearch.clearMessageSearchInfo
        };
        var p = (0,
            u.connect)((function (e, { threadKey: t }) {
                if (!t)
                    throw new Error("Tried to render connected message search without an opened thread");
                return {
                    searchResults: (0,
                        l.getMessageSearchResults)(e, t),
                    searchQuery: (0,
                        l.getMessageSearchQuery)(e, t),
                    searchQueryStatus: (0,
                        l.getMessageSearchQueryStatus)(e, t)
                }
            }
            ), f)((function ({ threadKey: e, searchResults: t, searchQuery: a, searchQueryStatus: l, selectMessageSearchResult: u, issueMessageSearchQuery: d, clearMessageSearchInfo: c }) {
                const f = (0,
                    r.default)(e, !1)
                    , p = (0,
                        n.default)()
                    , m = (0,
                        i.useCallback)(t => {
                            f.current ? p() : d(t, e)
                        }
                            , [d, e])
                    , h = (0,
                        i.useCallback)(a => {
                            const n = t && (t[a] || t[0])
                                , r = null == n ? void 0 : n.messageId;
                            r && u(r, e)
                        }
                            , [t, e, u])
                    , g = (0,
                        i.useCallback)(() => {
                            c(e)
                        }
                            , [e, c]);
                return i.default.createElement(s.default, {
                    name: "messageSearch"
                }, i.default.createElement(o.default, {
                    initialQuery: a || void 0,
                    searchResultCount: t ? t.length : null,
                    searchQueryStatus: l,
                    onSelectResult: h,
                    issueSearchQuery: m,
                    onClose: g
                }))
            }
            ));
        t.default = p
    },
    1989: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return c.default.createElement(f.DynamicModuleLoader, {
                    strictMode: !0,
                    modules: [o.ContactSuggestionsModule]
                }, c.default.createElement(y, e))
            }
            ;
        var n = a(8)
            , r = m(a(340))
            , l = a(21)
            , o = a(1886)
            , u = a(1892)
            , i = a(23)
            , s = m(a(655))
            , d = a(11)
            , c = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = p();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , f = a(138);
        function p() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return p = function () {
                return e
            }
                ,
                e
        }
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const h = {
            includeGroups: !0,
            includePages: !1,
            includeIntegratedMessageSearchResults: !1,
            includeSecureThreads: !1
        };
        const g = {
            updateNewThreadRecipients: i.InboxActions.newThread.updateNewThreadRecipients,
            searchQueryChanged: i.InboxActions.search.searchQueryChanged
        }
            , y = (0,
                d.connect)((function (e) {
                    const t = (0,
                        l.requireAuthenticationData)(e)
                        , { searchResults: a, searchQueryStatus: r } = (0,
                            i.getSearchInfo)(e, n.SearchSource.Omnipicker)
                        , o = t.userID
                        , s = (0,
                            i.getNewThreadInfo)(e)
                        , d = null == a ? (0,
                            u.selectOmnipickerSuggestions)(e) : a.filter(({ resultId: e }) => Boolean(e)).map(({ resultId: e, title: t, subtitle: a, profilePicture: n, secondaryProfilePicture: r, resultType: l, isOnlineIndicatorVisible: o, lastActiveTimestampMs: u }) => ({
                                contactId: e,
                                profilePicture: n,
                                secondaryProfilePicture: r,
                                name: t,
                                nickname: a || void 0,
                                resultType: l,
                                isOnlineIndicatorVisible: o,
                                lastActiveTimestampMs: u
                            }));
                    return {
                        newThreadInfo: s,
                        contactSuggestionsMinusViewer: s && s.recipients.length > 0 && d ? d.filter(e => e.contactId !== o) : d,
                        isLoadingMoreContacts: null != r && r.statusPrimary === n.SearchQueryStatusType.Pending,
                        userId: o
                    }
                }
                ), g)((function (e) {
                    const { newThreadInfo: t, contactSuggestionsMinusViewer: a, isLoadingMoreContacts: l, userId: o, searchQueryChanged: u, updateNewThreadRecipients: i } = e
                        , [d, f] = (0,
                            c.useState)(null)
                        , p = (0,
                            r.default)(d, 200);
                    return (0,
                        c.useEffect)(() => {
                            if (null == p)
                                return;
                            const e = null == t || null != t && 0 === t.recipients.length;
                            u(p, {
                                ...h,
                                includeGroups: e,
                                includePages: e
                            }, n.SearchSource.Omnipicker)
                        }
                            , [u, p, t]),
                        t ? c.default.createElement(s.default, {
                            selectedUsers: t.recipients,
                            onChange: i,
                            onSearchQueryChange: f,
                            suggestions: a,
                            isLoadingMoreContacts: l,
                            viewerId: o
                        }) : null
                }
                ))
    },
    1990: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ContactSuggestionsReducer = void 0;
        var n = a(1927);
        const r = (0,
            a(51).makeReducer)({
                fetchedContacts: []
            }, (e, t) => {
                switch (t.type) {
                    case n.ContactSuggestionsActions.loadContactSuggestions.type:
                        e.fetchedContacts = t.payload.contacts
                }
            }
            );
        t.ContactSuggestionsReducer = r
    },
    1991: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function* () {
                yield (0,
                    s.call)(i.default.msys.waitForMailbox),
                    yield (0,
                        s.call)(d)
            }
            ,
            t.fetchContactSuggestions = d;
        var n, r = a(21), l = a(77), o = a(1927), u = a(8), i = (n = a(9)) && n.__esModule ? n : {
            default: n
        }, s = a(17);
        function* d() {
            const e = yield (0,
                s.select)(r.requireAuthenticationData)
                , t = yield (0,
                    s.call)(i.default.msys.fetchContactList, u.ContactType.User, !0, 16, 50);
            (0,
                l.rewriteFallbackUrls)(t, ["profilePicture"], e.accessToken),
                yield (0,
                    s.put)(o.ContactSuggestionsActions.loadContactSuggestions(t))
        }
    },
    1992: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(58)
            , r = m(a(195))
            , l = m(a(5))
            , o = a(49)
            , u = m(a(1))
            , i = a(28)
            , s = a(11)
            , d = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = p();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , c = m(a(13))
            , f = m(a(60));
        function p() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return p = function () {
                return e
            }
                ,
                e
        }
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const h = (0,
            u.default)(f.default)(e => ({
                margin: "0 12px",
                backgroundColor: e.theme.select({
                    light: e.theme.colors.base10,
                    dark: e.theme.colors.base50
                }),
                border: `1px solid ${e.theme.colors.base40}`
            }));
        const g = {
            beginJoinMeetup: o.RtcActions.beginJoinMeetup,
            clearModal: i.AppContextActions.clearModal
        };
        var y = (0,
            s.connect)(null, g)((function ({ beginJoinMeetup: e, clearModal: t }) {
                const [a, o] = (0,
                    d.useState)("")
                    , u = null != (0,
                        r.default)(a);
                return d.default.createElement(c.default, {
                    name: "joinRoomFromLinkModal"
                }, d.default.createElement(n.Modal, {
                    width: 362,
                    height: 147,
                    onHideModal: t
                }, d.default.createElement(n.ModalHeader, {
                    title: l.default._("Join a Room", null, {
                        hk: "3tq7VI"
                    }),
                    onClose: t
                }), d.default.createElement(h, {
                    onChange: e => o(e),
                    value: a
                }), d.default.createElement(n.ModalFooter, {
                    cancelButton: {
                        label: l.default._("Cancel", null, {
                            hk: "2LhY6r"
                        }).toString(),
                        telemetryName: "cancel",
                        onClick: () => t()
                    },
                    primaryButton: {
                        label: l.default._("Join Room", null, {
                            hk: "1s4498"
                        }).toString(),
                        telemetryName: "joinRoom",
                        disabled: !u,
                        onClick: () => {
                            e(a)
                        }
                    }
                })))
            }
            ));
        t.default = y
    },
    1993: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(58)
            , r = c(a(13))
            , l = c(a(5))
            , o = c(a(1994))
            , u = a(28)
            , i = a(11)
            , s = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = d();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function d() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return d = function () {
                return e
            }
                ,
                e
        }
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = {
            clearModal: u.AppContextActions.clearModal
        };
        var p = (0,
            i.connect)(null, f)((function (e) {
                const { locationUrl: t, clearModal: a } = e
                    , u = l.default._("Live Location", null, {
                        hk: "28YFla"
                    }).toString()
                    , { partitionId: i } = (0,
                        o.default)()
                    , d = (0,
                        s.useRef)(null);
                return (0,
                    s.useEffect)(() => {
                        d.current && d.current.addEventListener("dom-ready", () => {
                            d.current.insertCSS("html{ overflow: hidden !important;}")
                        }
                        )
                    }
                    ),
                    s.default.createElement(r.default, {
                        name: "locationModal"
                    }, s.default.createElement(n.Modal, {
                        width: 398,
                        height: 450,
                        "aria-label": u,
                        onHideModal: a
                    }, s.default.createElement(n.ModalHeader, {
                        title: u,
                        onClose: a
                    }), s.default.createElement("webview", {
                        ref: d,
                        partition: i,
                        src: t,
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })))
            }
            ));
        t.default = p
    },
    1994: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                const e = window.location.search;
                return (0,
                    n.parseQueryString)(e)
            }
            ;
        var n = a(104)
    },
    1995: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = p(a(1996))
            , r = p(a(1997))
            , l = a(61)
            , o = a(140)
            , u = a(240)
            , i = a(146)
            , s = a(92)
            , d = a(11)
            , c = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = f();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function f() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return f = function () {
                return e
            }
                ,
                e
        }
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = {
            clearMeetupCreation: s.RtcActions.clearMeetupCreation,
            cancelJoinMeetup: s.RtcActions.cancelJoinMeetup,
            attemptJoinMeetup: s.RtcActions.attemptJoinMeetup,
            abandonJoinMeetup: s.RtcActions.abandonJoinMeetup,
            joinMeetup: s.RtcActions.joinMeetup
        };
        var h = (0,
            d.connect)((function (e) {
                return {
                    joiningMeetupLink: (0,
                        i.getJoiningMeetupUrl)(e),
                    joiningMeetupInfo: (0,
                        i.getJoiningMeetupInfo)(e),
                    joiningMeetupOwner: (0,
                        i.getMeetupOwnerContact)(e),
                    shouldAttemptJoin: (0,
                        i.shouldAttemptJoinMeetup)(e),
                    isCreatingMeetup: e.rtc.isCreatingMeetup,
                    createMeetupError: (0,
                        i.getMeetupCreationError)(e),
                    viewerId: (0,
                        l.requireAuthenticationData)(e).userID,
                    activeScreenInfo: (0,
                        u.getActiveScreenInfo)(e)
                }
            }
            ), m)((function (e) {
                const { abandonJoinMeetup: t, attemptJoinMeetup: a, isCreatingMeetup: l, createMeetupError: u, clearMeetupCreation: i, joiningMeetupLink: s, joiningMeetupInfo: d, joiningMeetupOwner: f, shouldAttemptJoin: p, viewerId: m, cancelJoinMeetup: h, joinMeetup: g, activeScreenInfo: y } = e
                    , v = m !== (null == f ? void 0 : f.contactId) && (null == d ? void 0 : d.isActive) && !(null == d ? void 0 : d.isOpen)
                    , b = (0,
                        c.useCallback)(() => {
                            s && g(s)
                        }
                            , [g, s])
                    , w = (0,
                        c.useCallback)(() => {
                            s && v && a(s)
                        }
                            , [a, s, v])
                    , M = (0,
                        c.useCallback)(() => {
                            s && v && t(s)
                        }
                            , [t, s, v]);
                return s && (null == y ? void 0 : y.screen) !== o.RoomScreen.JOIN_ROOM ? c.default.createElement(r.default, {
                    onClose: h,
                    onAttemptJoin: w,
                    onAbandonJoin: M,
                    onJoin: b,
                    joiningMeetupInfo: d,
                    meetupOwner: f,
                    viewerId: m,
                    shouldAttemptJoin: p
                }) : l || u ? c.default.createElement(n.default, {
                    isCreatingMeetup: l,
                    createMeetupError: u,
                    onClose: i
                }) : null
            }
            ));
        t.default = h
    },
    1996: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { isCreatingMeetup: t, createMeetupError: a, onClose: r } = e
                    , l = (0,
                        s.useRef)();
                let c;
                (0,
                    s.useEffect)(() => {
                        !t && l.current && l.current.focus()
                    }
                        , [t]);
                const f = n.default._("Cancel", null, {
                    hk: "19sgzF"
                }).toString()
                    , p = n.default._("Creating Room Link...", null, {
                        hk: "1DBQfA"
                    }).toString();
                c = t ? s.default.createElement(m, {
                    onActivate: null,
                    "aria-label": p
                }, s.default.createElement(g, {
                    size: u.SpinnerSize.Medium
                }), s.default.createElement(d.default, {
                    use: "body-bold"
                }, p)) : s.default.createElement(s.default.Fragment, null, s.default.createElement(i.ModalHeader, {
                    onClose: r,
                    title: n.default._("Room Creation Failed", null, {
                        hk: "rY44h"
                    })
                }), s.default.createElement(h, null, s.default.createElement(d.default, {
                    use: "body",
                    wrapText: !0
                }, a)), s.default.createElement(y, null, s.default.createElement(v, null, s.default.createElement(o.default, {
                    elementRef: l,
                    "aria-label": f,
                    use: o.RectangleButtonUse.Secondary,
                    caption: f,
                    onClick: r,
                    autoFocus: !0,
                    telemetryName: "cancel-join"
                }))));
                const b = n.default._("New Room", null, {
                    hk: "3Xvsvr"
                }).toString();
                return (s.default.createElement(i.Modal, {
                    "aria-label": b,
                    modalType: "standard",
                    height: t ? 110 : 150,
                    width: 300,
                    onHideModal: r
                }, c))
            }
            ;
        var n = p(a(5))
            , r = p(a(1))
            , l = f(a(2))
            , o = f(a(16))
            , u = f(a(82))
            , i = a(58)
            , s = f(a(0))
            , d = p(a(4));
        function c() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return c = function () {
                return e
            }
                ,
                e
        }
        function f(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = c();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0,
            r.default)(l.FocusableView)({
                flexDirection: "row",
                padding: 10,
                alignItems: "center",
                justifyContent: "center"
            })
            , h = (0,
                r.default)(l.default)({
                    padding: 10,
                    textAlign: "center",
                    justifyContent: "center",
                    flex: "1 1 auto"
                })
            , g = (0,
                r.default)(u.default)({
                    margin: 0,
                    marginRight: 8
                })
            , y = (0,
                r.default)(l.default)({
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center"
                })
            , v = (0,
                r.default)(l.default)({
                    flexDirection: "row",
                    marginLeft: "auto",
                    marginTop: 20
                })
    },
    1997: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = _(a(27))
            , r = a(8)
            , l = _(a(5))
            , o = _(a(102))
            , u = _(a(595))
            , i = _(a(243))
            , s = a(28)
            , d = _(a(1))
            , c = M(a(2))
            , f = M(a(16))
            , p = M(a(82))
            , m = a(58)
            , h = a(6)
            , g = a(11)
            , y = M(a(0))
            , v = _(a(38))
            , b = _(a(4));
        function w() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return w = function () {
                return e
            }
                ,
                e
        }
        function M(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = w();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const E = (0,
            d.default)(c.default)({
                padding: 20,
                flex: 1
            })
            , S = (0,
                d.default)(c.default)({
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                })
            , k = (0,
                d.default)(c.FocusableView)({
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                })
            , O = (0,
                d.default)(c.default)({
                    flex: 1,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginTop: 30
                })
            , P = (0,
                d.default)(c.default)({
                    flexDirection: "row",
                    marginLeft: "auto",
                    marginTop: 20
                })
            , T = (0,
                d.default)(p.default)({
                    margin: 0,
                    marginLeft: 8
                })
            , C = (0,
                d.default)(f.default)({
                    ":not(:first-child)": {
                        marginLeft: 8
                    }
                })
            , I = (0,
                d.default)(b.default)({
                    textAlign: "center"
                })
            , j = (0,
                d.default)(I)({
                    marginTop: 12
                })
            , x = (0,
                d.default)(I)({
                    marginTop: 20
                });
        const R = {
            clearModal: s.AppContextActions.clearModal
        };
        var A = (0,
            g.connect)((function (e) {
                return {
                    currentModal: (0,
                        s.currentModal)(e)
                }
            }
            ), R)((function (e) {
                const { joiningMeetupInfo: t, meetupOwner: a, shouldAttemptJoin: s, viewerId: d, onClose: c, onAttemptJoin: g, onAbandonJoin: b, onJoin: w, currentModal: M, clearModal: _ } = e
                    , R = (0,
                        o.default)()
                    , A = (0,
                        y.useRef)()
                    , [D, N] = (0,
                        y.useState)(!1)
                    , L = (0,
                        h.useTheme)()
                    , [W, K] = (0,
                        i.default)("joinMeetup.disclaimer.count", 1)
                    , z = (0,
                        u.default)();
                (0,
                    y.useEffect)(() => {
                        K(e => e + 1)
                    }
                        , []);
                const F = (0,
                    y.useRef)(W).current;
                let B;
                const U = !t || 0 === t.status
                    , G = !a && !U && (null == t ? void 0 : t.isActive)
                    , V = !t || U || G
                    , H = null == t ? void 0 : t.isOpen;
                (0,
                    y.useEffect)(() => {
                        !V && A.current && A.current.focus()
                    }
                        , [V]),
                    (0,
                        y.useEffect)(() => {
                            !s || U || G || H || g()
                        }
                            , [g, s, H, U, G]);
                const q = (0,
                    y.useCallback)(() => {
                        U || G || H || b(),
                            c()
                    }
                        , [c, b, H, U, G]);
                if ((0,
                    y.useEffect)(() => {
                        if (!U && !V && t && !D) {
                            const e = z ? !t.isOpen : t.lockStatus === r.MeetupLockStatus.LOCKED_BY_OWNER;
                            if (e || !t.isActive) {
                                let t, a;
                                e ? (t = l.default._("Room Unavailable", null, {
                                    hk: "1C8EBw"
                                }).toString(),
                                    a = l.default._("Unable to join at this time.", null, {
                                        hk: "23u9OO"
                                    }).toString()) : (t = l.default._("Room Doesn't Exist", null, {
                                        hk: "3VfOyg"
                                    }).toString(),
                                        a = l.default._("The link has either expired or been disabled.", null, {
                                            hk: "2cOGgH"
                                        }).toString()),
                                    R.platform.showMessageBox({
                                        type: "info",
                                        title: t,
                                        message: t,
                                        detail: a,
                                        noLink: !0,
                                        cancelId: 0,
                                        buttons: [l.default._("OK", null, {
                                            hk: "33rjY6"
                                        }).toString()]
                                    }).then(c),
                                    N(!0)
                            } else
                                "JoinRoomFromLink" === (null == M ? void 0 : M.type) && _()
                        }
                    }
                        , [R, U, V, t, D, c, M, _, z]),
                    !t || U || G) {
                    const e = l.default._("Loading", null, {
                        hk: "1tAkpZ"
                    }).toString();
                    B = y.default.createElement(k, {
                        onActivate: null,
                        "aria-label": e
                    }, y.default.createElement(T, {
                        size: p.SpinnerSize.Medium
                    }))
                } else {
                    const e = l.default._("Cancel", null, {
                        hk: "19sgzF"
                    }).toString()
                        , o = l.default._("Join", null, {
                            hk: "pwOjn"
                        }).toString();
                    let u = ""
                        , i = ""
                        , s = t.lockStatus;
                    const c = a && d === a.contactId;
                    c && (s = r.MeetupLockStatus.OPEN);
                    const p = a ? a.firstName || a.name : ""
                        , m = z ? !!t.isOpen : s === r.MeetupLockStatus.OPEN;
                    (m || s === r.MeetupLockStatus.LOCKED_BY_OWNER_DISCONNECT) && (null == t ? void 0 : t.isActive) && !D ? (m ? (u = c ? l.default._("Your Room", null, {
                        hk: "aGJDM"
                    }).toString() : l.default._("{owner_first_name}'s Room", [l.default._param("owner_first_name", p)], {
                        hk: "4zUg3I"
                    }).toString(),
                        i = l.default._({
                            "*": "{participant_count} people are here",
                            _1: "{participant_count} person is here"
                        }, [l.default._param("participant_count", t.participantCount), l.default._plural(t.participantCount)], {
                            hk: "3vBlHb"
                        }).toString()) : (u = l.default._("Waiting for {owner_first_name} to join", [l.default._param("owner_first_name", p)], {
                            hk: "3P8ySi"
                        }).toString(),
                            i = l.default._("We've notified {owner_first_name} that you're here. Please wait.", [l.default._param("owner_first_name", p)], {
                                hk: "46BooY"
                            }).toString()),
                        B = y.default.createElement(y.default.Fragment, null, y.default.createElement(S, null, t.isActive ? y.default.createElement(v.default, {
                            profilePictureUrl: (0,
                                n.default)(a.profilePicture),
                            size: "xlarge"
                        }) : null, y.default.createElement(j, {
                            use: "title",
                            wrapText: !0
                        }, u), y.default.createElement(x, {
                            use: "body",
                            wrapText: !0,
                            color: L.semanticColors.textSecondary
                        }, i)), y.default.createElement(O, null, F <= 3 && y.default.createElement(I, {
                            use: "caption",
                            wrapText: !0,
                            color: L.semanticColors.textSecondary
                        }, l.default._("People can see when you're in the room.", null, {
                            hk: "47aNw4"
                        })), y.default.createElement(P, null, y.default.createElement(C, {
                            elementRef: A,
                            "aria-label": e,
                            use: f.RectangleButtonUse.Secondary,
                            caption: e,
                            onClick: q,
                            autoFocus: !0,
                            telemetryName: "cancel-join"
                        }), y.default.createElement(C, {
                            use: f.RectangleButtonUse.Primary,
                            "aria-label": o,
                            caption: o,
                            onClick: w,
                            telemetryName: "join-meetup",
                            disabled: !m || !(null == t ? void 0 : t.isActive)
                        }))))) : B = null
                }
                if (null === B)
                    return null;
                {
                    const e = l.default._("Join Room", null, {
                        hk: "Nyfir"
                    }).toString();
                    return (y.default.createElement(m.Modal, {
                        modalType: "autosize",
                        width: 400,
                        onHideModal: c,
                        "aria-label": e
                    }, y.default.createElement(E, null, B)))
                }
            }
            ));
        t.default = A
    },
    1998: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = k(a(1999))
            , r = k(a(2e3))
            , l = k(a(2002))
            , o = k(a(27))
            , u = a(8)
            , i = k(a(5))
            , s = k(a(245))
            , d = a(72)
            , c = a(21)
            , f = a(23)
            , p = k(a(1))
            , m = k(a(2))
            , h = k(a(22))
            , g = k(a(173))
            , y = k(a(38))
            , v = k(a(45))
            , b = a(164)
            , w = a(52)
            , M = k(a(50))
            , _ = a(11)
            , E = k(a(0))
            , S = k(a(4));
        function k(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const O = (0,
            p.default)(v.default)(e => ({
                flexShrink: 0,
                padding: 12,
                paddingTop: (0,
                    b.getTitleBarHeight)(e.theme) + 30,
                backgroundColor: e.theme.semanticColors.bgSurfaceBlurred,
                height: "100%"
            }))
            , P = (0,
                p.default)(m.default)({
                    marginBottom: 12,
                    alignItems: "center"
                })
            , T = (0,
                p.default)(h.default)(e => ({
                    position: "absolute",
                    right: 10,
                    top: (0,
                        b.getTitleBarHeight)(e.theme) + 10
                }));
        var C = (0,
            _.connect)((function (e) {
                var t;
                const a = (0,
                    f.getprimaryThreadKey)(e)
                    , n = (0,
                        f.getThread)(e, a)
                    , r = (0,
                        c.requireAuthenticationData)(e);
                return {
                    thread: n,
                    description: a ? null !== (t = (0,
                        f.getLinkedGroupDescription)(e, a)) && void 0 !== t ? t : (0,
                            f.getThreadDescription)(e, a) : null,
                    presence: a ? (0,
                        f.getThreadPresences)(e, a) : null,
                    participants: (0,
                        f.getParticipantListForThread)(e, a),
                    viewerId: r.userID
                }
            }
            ), {})((function ({ thread: e, viewerId: t, participants: a, presence: c }) {
                const f = (0,
                    s.default)(c)
                    , [, p] = (0,
                        d.useUserSetting)("showSidebar");
                if (!e)
                    return null;
                const m = 2 === a.length ? a.find(e => e.contactId !== t) : void 0
                    , h = (0,
                        o.default)(e.threadPicture);
                return E.default.createElement(O, {
                    role: "complementary"
                }, E.default.createElement(T, {
                    "aria-label": i.default._("Close Sidebar", null, {
                        hk: "2LcKyZ"
                    }).toString(),
                    telemetryName: "close-sidebar",
                    icon: M.default,
                    onClick: () => p(!1, {
                        userInitiated: !0
                    })
                }), E.default.createElement(P, null, !h && a.length > 2 ? E.default.createElement(g.default, {
                    size: "large",
                    viewerId: t,
                    participants: a,
                    presence: f
                }) : E.default.createElement(y.default, {
                    size: "xxlarge",
                    profilePictureUrl: h,
                    isDndModeOn: null == m ? void 0 : m.doNotDisturbEnabled,
                    presence: e.threadType === u.ThreadType.OnetoOne ? f : void 0
                })), E.default.createElement(S.default, {
                    use: "title",
                    textAlign: "center",
                    css: {
                        marginBottom: 3
                    },
                    numberOfLines: 3
                }, e.threadName), e.threadType === u.ThreadType.OnetoOne && E.default.createElement(l.default, {
                    otherParticipant: m
                }), (0,
                    w.isGroupThreadType)(e.threadType) && E.default.createElement(E.default.Fragment, null, E.default.createElement(n.default, {
                        threadKey: e.threadKey
                    }), E.default.createElement(r.default, {
                        threadKey: e.threadKey
                    })))
            }
            ));
        t.default = C
    },
    1999: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = v(a(5))
            , r = v(a(9))
            , l = a(28)
            , o = a(23)
            , u = v(a(1))
            , i = y(a(16))
            , s = v(a(1894))
            , d = a(351)
            , c = a(35)
            , f = a(6)
            , p = a(11)
            , m = y(a(0))
            , h = v(a(4));
        function g() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return g = function () {
                return e
            }
                ,
                e
        }
        function y(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = g();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const b = (0,
            u.default)(h.default)({
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
            })
            , w = (0,
                u.default)(i.default)({
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 8
                });
        const M = {
            showModal: l.AppContextActions.showModal
        };
        var _ = (0,
            p.connect)((function (e, { threadKey: t }) {
                return {
                    chatDescription: (0,
                        o.getThreadDescription)(e, t),
                    groupDescription: (0,
                        o.getLinkedGroupDescription)(e, t)
                }
            }
            ), M)((function ({ groupDescription: e, chatDescription: t, showModal: a, threadKey: l }) {
                var o;
                const u = (0,
                    f.useTheme)()
                    , p = null !== (o = null != e ? e : t) && void 0 !== o ? o : ""
                    , h = (0,
                        d.getURLRanges)(p)
                    , g = (0,
                        m.useCallback)(e => {
                            e && r.default.platform.openExternalURL(e)
                        }
                            , [])
                    , { windowKey: y } = (0,
                        c.useWindowContext)();
                return m.default.createElement(m.default.Fragment, null, p && m.default.createElement(m.default.Fragment, null, m.default.createElement(b, {
                    wrapText: !0,
                    use: "body",
                    color: u.semanticColors.textSecondary
                }, m.default.createElement(d.TextWithAnnotations, {
                    messageText: p,
                    isSenderViewer: !1,
                    isEmployee: !1,
                    mentionIds: null,
                    mentionLengths: null,
                    mentionOffsets: null,
                    participants: [],
                    onMentionClick: () => { }
                    ,
                    onUrlClick: g,
                    onContextMenu: () => { }
                    ,
                    urlRanges: h,
                    userID: "",
                    threadKey: ""
                })), m.default.createElement(w, {
                    size: i.RectangleButtonSize.Small,
                    onClick: () => a({
                        type: "ThreadDescription",
                        threadKey: l,
                        isEditing: !0
                    }, y),
                    caption: n.default._("Edit Description", null, {
                        hk: "12l2KQ"
                    }),
                    "aria-label": n.default._("Edit Description", null, {
                        hk: "12l2KQ"
                    }).toString(),
                    telemetryName: "sidebar-pariticipants-show-more"
                })), m.default.createElement(s.default, {
                    marginHorizontal: 0,
                    marginVertical: 18
                }))
            }
            ));
        t.default = _
    },
    2e3: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = g(a(1930))
            , r = g(a(5))
            , l = a(28)
            , o = a(23)
            , u = g(a(16))
            , i = h(a(22))
            , s = a(35)
            , d = g(a(1931))
            , c = g(a(361))
            , f = a(11)
            , p = h(a(0));
        function m() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return m = function () {
                return e
            }
                ,
                e
        }
        function h(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = m();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = {
            showModal: l.AppContextActions.showModal
        };
        var v = (0,
            f.connect)((function (e, { threadKey: t }) {
                return {
                    numberOfParticipants: (0,
                        o.getParticipantListForThread)(e, t).length
                }
            }
            ), y)((function ({ threadKey: e, numberOfParticipants: t, showModal: a }) {
                const [l, o] = (0,
                    p.useState)(10);
                (0,
                    p.useEffect)(() => {
                        o(10)
                    }
                        , [e]);
                const { windowKey: f } = (0,
                    s.useWindowContext)()
                    , m = r.default._("Show More", null, {
                        hk: "2KuDEd"
                    })
                    , h = r.default._("Add People", null, {
                        hk: "1MYftH"
                    }).toString();
                return p.default.createElement(n.default, {
                    title: 0 === t ? r.default._("Members", null, {
                        hk: "3X8Bcc"
                    }) : r.default._("Members ({number of memebers})", [r.default._param("number of memebers", t)], {
                        hk: "rBVo7"
                    }),
                    accessory: p.default.createElement(i.default, {
                        icon: c.default,
                        size: i.RoundButtonSize.Small,
                        telemetryName: "sidebar-add-participant",
                        title: h,
                        "aria-label": h,
                        onClick: () => a({
                            type: "AddPeople",
                            threadKey: e
                        }, f)
                    })
                }, p.default.createElement(d.default, {
                    threadKey: e,
                    limit: l,
                    padded: !1
                }), t > l && p.default.createElement(u.default, {
                    onClick: () => o(1 / 0),
                    caption: m,
                    "aria-label": m.toString(),
                    telemetryName: "sidebar-pariticipants-show-more"
                }))
            }
            ));
        t.default = v
    },
    2001: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M12.5 18A2.25 2.25 0 118 18a2.25 2.25 0 014.5 0zM20.25 18a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM25.75 20.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2002: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ otherParticipant: e }) {
                const t = (0,
                    o.default)()
                    , a = (0,
                        f.useTheme)();
                if (!e)
                    return null;
                const { emailAddress: u, phoneNumber: i, workJobTitle: s, workCompanyName: c, statusText: w, statusEmoji: M, workLocation: _, workDepartment: k, workDivision: P, workOrganization: T } = e
                    , C = [k, P, T].filter(Boolean).join(", ");
                return v.default.createElement(v.default.Fragment, null, Boolean(s) && v.default.createElement(b.default, {
                    numberOfLines: 2,
                    textAlign: "center",
                    use: "body",
                    css: {
                        marginBottom: 3
                    },
                    color: a.semanticColors.textSecondary
                }, l.default._("{job title} at {company name}", [l.default._param("job title", s), l.default._param("company name", c)], {
                    hk: "2CH6S6"
                })), Boolean(w) && v.default.createElement(b.default, {
                    use: "subtext",
                    color: a.semanticColors.textSecondary,
                    textAlign: "center"
                }, M, "??", w), v.default.createElement(d.default, {
                    marginHorizontal: 0,
                    marginVertical: 18
                }), v.default.createElement(n.default, {
                    title: l.default._("Details", null, {
                        hk: "3IefoX"
                    })
                }, Boolean(u) && v.default.createElement(O, {
                    icon: h.default,
                    label: l.default._("Email", null, {
                        hk: "1Vyn4n"
                    })
                }, v.default.createElement(E, {
                    href: `mailto:${u}`
                }, v.default.createElement(S, {
                    use: "body"
                }, u))), Boolean(i) && v.default.createElement(O, {
                    icon: y.default,
                    label: l.default._("Phone", null, {
                        hk: "3tLI59"
                    })
                }, v.default.createElement(E, {
                    href: `tel:${i}`
                }, v.default.createElement(S, {
                    use: "body"
                }, i))), null != e.gmtOffsetMinutes && v.default.createElement(O, {
                    icon: m.default,
                    label: l.default._("Local Time", null, {
                        hk: "3pfzWT"
                    })
                }, l.default._("{time} local time", [l.default._param("time", new Intl.DateTimeFormat(void 0, {
                    hour: "numeric",
                    minute: "numeric"
                }).format((0,
                    r.getLocalTime)(t, e.gmtOffsetMinutes)))], {
                    hk: "1Zdzv4"
                })), Boolean(_) && v.default.createElement(O, {
                    icon: g.default,
                    label: l.default._("Location", null, {
                        hk: "329XG1"
                    })
                }, v.default.createElement(b.default, {
                    numberOfLines: 3
                }, _)), Boolean(C) && v.default.createElement(O, {
                    icon: p.default,
                    label: l.default._("Business Unit", null, {
                        hk: "3Njr8A"
                    })
                }, v.default.createElement(b.default, {
                    numberOfLines: 3
                }, C))))
            }
            ;
        var n = w(a(1930))
            , r = a(39)
            , l = w(a(5))
            , o = w(a(641))
            , u = w(a(1))
            , i = w(a(2))
            , s = a(22)
            , d = w(a(1894))
            , c = w(a(116))
            , f = a(6)
            , p = w(a(2003))
            , m = w(a(352))
            , h = w(a(2004))
            , g = w(a(2005))
            , y = w(a(145))
            , v = w(a(0))
            , b = w(a(4));
        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const M = (0,
            u.default)(i.default)({
                marginTop: 10,
                flexDirection: "row",
                alignItems: "flex-start"
            })
            , _ = (0,
                u.default)(i.default)({
                    marginRight: 8,
                    flexShrink: 0,
                    flexGrow: 0
                })
            , E = (0,
                u.default)(c.default)({
                    fontWeight: "bold",
                    cursor: "default",
                    textDecoration: "none",
                    "&:hover": {
                        textDecoration: "none"
                    }
                })
            , S = (0,
                u.default)(b.default)({
                    userSelect: "all"
                })
            , k = (0,
                u.default)(i.default)({
                    flexShrink: 1,
                    marginTop: 4
                });
        function O({ label: e, icon: t, children: a }) {
            const n = (0,
                f.useTheme)()
                , r = v.default.createElement(S, {
                    use: "body"
                }, a);
            return v.default.createElement(M, null, v.default.createElement(_, {
                "aria-label": e.toString()
            }, v.default.createElement(t, {
                color: n.semanticColors.textSecondary,
                size: s.ICON_SIZES.medium
            })), v.default.createElement(k, null, r))
        }
    },
    2003: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M11.5 9v1.5a.5.5 0 01-.5.5h-1a3 3 0 00-3 3v4a1 1 0 001 1h7.5a.5.5 0 00.5-.5V18a1 1 0 011-1h2a1 1 0 011 1v.5a.5.5 0 00.5.5H28a1 1 0 001-1v-4a3 3 0 00-3-3h-1a.5.5 0 01-.5-.5V9a3 3 0 00-3-3h-7a3 3 0 00-3 3zm10-.5h-7a.5.5 0 00-.5.5v1.5a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V9a.5.5 0 00-.5-.5z",
                    clipRule: "evenodd"
                }), r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M15.5 21a.5.5 0 01.5.5v.5a1 1 0 001 1h2a1 1 0 001-1v-.5a.5.5 0 01.5-.5H27a1 1 0 011 1v4a3 3 0 01-3 3H11a3 3 0 01-3-3v-4a1 1 0 011-1h6.5z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2004: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M7 13c0-.468.08-.917.228-1.334.113-.32.52-.37.75-.119l5.296 5.777a1 1 0 010 1.352l-5.295 5.777c-.23.25-.638.201-.751-.119A3.993 3.993 0 017 23V13zM11 27h14c.554 0 1.082-.113 1.562-.317.29-.122.34-.491.128-.723l-5.401-5.893a.73.73 0 00-1.078 0 3 3 0 01-4.422 0 .73.73 0 00-1.078 0L9.31 25.96c-.212.232-.161.6.128.723.48.204 1.008.317 1.562.317zM29 23V13c0-.468-.08-.917-.228-1.334-.113-.32-.52-.37-.75-.119l-5.296 5.777a1 1 0 000 1.352l5.296 5.777c.23.25.637.201.75-.119.148-.417.228-.866.228-1.334zM26.562 9.317c.29.122.34.492.128.723l-7.953 8.676a1 1 0 01-1.474 0L9.31 10.04c-.212-.231-.161-.6.128-.723A3.987 3.987 0 0111 9h14c.554 0 1.082.113 1.562.317z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2005: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M7.026 14.412L26.023 8.08c1.173-.391 2.288.724 1.898 1.897l-6.333 18.998c-.455 1.364-2.383 1.368-2.844.006l-2.33-6.888a4 4 0 00-2.507-2.507l-6.888-2.33c-1.362-.46-1.358-2.39.007-2.844z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2006: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                const [e, t] = (0,
                    r.useUserSetting)("uiScale")
                    , a = (0,
                        o.useCallback)(() => {
                            const a = Math.min(l.UIScalingOptions.indexOf(e) + 1, l.UIScalingOptions.length - 1);
                            t(l.UIScalingOptions[a], {
                                userInitiated: !0
                            })
                        }
                            , [e, t])
                    , u = (0,
                        o.useCallback)(() => {
                            const a = Math.max(l.UIScalingOptions.indexOf(e) - 1, 0);
                            t(l.UIScalingOptions[a], {
                                userInitiated: !0
                            })
                        }
                            , [e, t]);
                (0,
                    n.useShortcut)("command+=", a),
                    (0,
                        n.useShortcut)("command+-", u),
                    (0,
                        n.useShortcut)("ctrl+=", a),
                    (0,
                        n.useShortcut)("ctrl+-", u)
            }
            ;
        var n = a(84)
            , r = a(72)
            , l = a(1932)
            , o = a(0)
    },
    2007: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = j(a(2008))
            , r = j(a(2009))
            , l = j(a(27))
            , o = j(a(59))
            , u = a(8)
            , i = j(a(5))
            , s = a(101)
            , d = a(139)
            , c = a(23)
            , f = a(349)
            , p = j(a(1895))
            , m = I(a(2))
            , h = a(66)
            , g = j(a(13))
            , y = a(6)
            , v = j(a(2010))
            , b = a(28)
            , w = a(49)
            , M = a(11)
            , _ = I(a(0))
            , E = a(22)
            , S = j(a(589))
            , k = j(a(2011))
            , O = a(100)
            , P = j(a(73))
            , T = j(a(4));
        function C() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return C = function () {
                return e
            }
                ,
                e
        }
        function I(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = C();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function j(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const x = {
            createMeetup: w.RtcActions.createMeetup,
            switchToNewThread: c.InboxActions.newThread.switchToNewThread,
            openOrFocusPortalWindow: b.AppContextActions.openOrFocusPortalWindow
        };
        var R = (0,
            M.connect)((function (e) {
                return {
                    readyToShowMessages: (0,
                        c.readyToShowMessages)(e),
                    profilePicture: (0,
                        c.getUserProfilePicture)(e),
                    openedThreadFolderParentKey: (0,
                        c.getOpenedThreadFolderParentKey)(e),
                    unreadPendingThreadCount: (0,
                        c.getUnreadPendingThreadCount)(e),
                    hasUnreadMarketplaceThreads: (0,
                        c.getHasUnreadMarketplaceThread)(e),
                    isNetworkConnected: (0,
                        b.isAppNetworkConnected)(e),
                    isRtcReady: (0,
                        w.isRtcReady)(e),
                    isWorkplaceRoomsEnabled: (0,
                        d.isGatekeeperEnabled)(e, "worchon_rooms_enabled"),
                    dndAffectingState: (0,
                        o.default)({
                            messenger: void 0,
                            workchat: {
                                userStatus: (0,
                                    c.getUserStatus)(e),
                                affectingSchedule: (0,
                                    f.getAffectingSchedule)(e),
                                affectingEvent: (0,
                                    f.getAffectingEvent)(e)
                            }
                        })
                }
            }
            ), x)((function (e) {
                const { isCollapsed: t, onThreadActivated: a, readyToShowMessages: d, profilePicture: c, switchToNewThread: f, openOrFocusPortalWindow: b, openedThreadFolderParentKey: w, unreadPendingThreadCount: M, hasUnreadMarketplaceThreads: C, isNetworkConnected: I, createMeetup: j, isRtcReady: x, isWorkplaceRoomsEnabled: R } = e
                    , A = (0,
                        y.useTheme)()
                    , { showContextMenu: D } = (0,
                        h.useContextMenu)()
                    , N = (0,
                        _.useRef)(null)
                    , L = (0,
                        _.useCallback)(() => {
                            f(),
                                a()
                        }
                            , [f, a])
                    , W = (0,
                        _.useCallback)(() => {
                            j("archon_header")
                        }
                            , [j])
                    , K = (0,
                        _.useCallback)(() => {
                            b({
                                portalKey: u.PortalKey.Settings
                            })
                        }
                            , [b])
                    , z = i.default._("Compose Message", null, {
                        hk: "aWcHv"
                    }).toString()
                    , F = (0,
                        _.useMemo)(() => C && w !== u.ThreadFolderParentKey.Marketplace ? M + 1 : M, [C, w, M])
                    , B = F > 0 ? i.default._("{number of unread threads in other folders not currently open} message requests", [i.default._param("number of unread threads in other folders not currently open", F)], {
                        hk: "HthoH"
                    }).toString() : i.default._("Settings", null, {
                        hk: "15gue2"
                    }).toString()
                    , U = i.default._("Profile Menu", null, {
                        hk: "31vE9u"
                    })
                    , G = _.default.createElement(p.default.Header.Button, {
                        size: E.RoundButtonSize.Large,
                        icon: v.default,
                        title: z,
                        "aria-label": z,
                        telemetryName: "composeNewChatButton",
                        onClick: L,
                        disabled: !d
                    })
                    , V = (0,
                        _.useMemo)(() => (0,
                            s.getThreadFolderMenuItems)(w, M, C, K, A), [w, M, C, K, A, e.dndAffectingState])
                    , H = (0,
                        _.useCallback)(() => {
                            D({
                                items: V,
                                target: N.current
                            })
                        }
                            , [D, V]);
                return _.default.createElement(g.default, {
                    name: "thread_list_header"
                }, _.default.createElement(p.default.Header.Container, null, _.default.createElement(p.default.Header.LeftContainer, {
                    isCollapsed: t
                }, t ? G : _.default.createElement(m.default, {
                    css: {
                        width: 32,
                        height: 32
                    }
                }, _.default.createElement(S.default, {
                    loaded: d && null != c,
                    "aria-label": B,
                    renderLoadingContent: () => _.default.createElement(O.CircleShimmer, {
                        size: 32
                    }),
                    renderLoadedContent: () => {
                        var t;
                        return (_.default.createElement(P.default, {
                            tooltipProps: {
                                children: () => _.default.createElement(T.default, {
                                    use: "caption",
                                    color: A.semanticColors.textPrimary
                                }, U)
                            },
                            delay: 1e3
                        }, _.default.createElement(m.FocusableView, {
                            ref: N,
                            role: "button",
                            "aria-label": B,
                            onActivate: H
                        }, _.default.createElement(k.default, {
                            profilePictureUrl: (0,
                                l.default)(c),
                            unreadCount: F,
                            userStatus: null === (t = e.dndAffectingState) || void 0 === t ? void 0 : t.userStatus
                        }))))
                    }
                }))), !t && _.default.createElement(_.default.Fragment, null, _.default.createElement(r.default, {
                    isNetworkConnected: I
                }), _.default.createElement(p.default.Header.RightContainer, null, (0,
                    o.default)({
                        messenger: G,
                        workchat: _.default.createElement(_.default.Fragment, null, R && _.default.createElement(n.default, {
                            onCreateRoom: W,
                            isRtcReady: x
                        }), G)
                    })))))
            }
            ));
        t.default = R
    },
    2008: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { onCreateRoom: t, isRtcReady: a } = e;
                return (u.default.createElement(i.DynamicModuleLoader, {
                    strictMode: !0,
                    modules: [r.RoomModule]
                }, u.default.createElement(l.default.Header.Button, {
                    size: s.RoundButtonSize.Large,
                    icon: o.default,
                    title: c,
                    "aria-label": c,
                    telemetryName: "createMeetupButton",
                    onClick: t,
                    disabled: !a
                })))
            }
            ;
        var n = d(a(5))
            , r = a(652)
            , l = d(a(1895))
            , o = d(a(651))
            , u = d(a(0))
            , i = a(138)
            , s = a(22);
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = n.default._("New Room", null, {
            hk: "3ubgJ1"
        }).toString()
    },
    2009: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const t = (0,
                    o.useTheme)();
                return (u.default.createElement(l.default.Header.TitleContainer, {
                    center: !1
                }, u.default.createElement(l.default.Header.Title, {
                    use: "title"
                }, r.default._("{app name}", [r.default._param("app name", n.displayName)], {
                    hk: "45YK8x"
                })), !e.isNetworkConnected && u.default.createElement(i.default, {
                    use: "caption",
                    color: t.semanticColors.textSecondary
                }, r.default._("No Internet Connection", null, {
                    hk: "hslny"
                }))))
            }
            ;
        var n = a(83)
            , r = s(a(5))
            , l = s(a(1895))
            , o = a(6)
            , u = s(a(0))
            , i = s(a(4));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    2010: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"
                }), r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2011: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return (0,
                    r.default)({
                        messenger: i.default.createElement(y, e),
                        workchat: i.default.createElement(v, e)
                    })
            }
            ;
        var n = f(a(38))
            , r = f(a(59))
            , l = a(8)
            , o = a(72)
            , u = f(a(1))
            , i = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = c();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , s = f(a(2))
            , d = f(a(4));
        function c() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return c = function () {
                return e
            }
                ,
                e
        }
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function p() {
            return (p = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        const m = (0,
            u.default)(s.default)(e => ({
                height: 12,
                width: 12,
                backgroundColor: e.theme.colors.red,
                borderRadius: "100%"
            }))
            , h = u.default.div({
                left: 22,
                height: 12,
                width: 12,
                position: "absolute"
            })
            , g = (0,
                u.default)(d.default)(e => ({
                    textAlign: "center",
                    fontSize: e.unreadCount >= 10 ? 8 : 9,
                    color: e.theme.semanticColors.textWhite
                }))
            , y = (0,
                i.memo)((function ({ profilePictureUrl: e, unreadCount: t, isAvailable: a = !1, isDndModeOn: r = !1 }) {
                    return i.default.createElement(s.default, null, i.default.createElement(n.default, {
                        size: "small",
                        profilePictureUrl: e,
                        includeAppHeaderClipPath: t > 0,
                        presence: a ? l.PresenceType.Active : l.PresenceType.Offline,
                        isDndModeOn: r
                    }), t > 0 && i.default.createElement(h, null, i.default.createElement(m, null, i.default.createElement(g, {
                        use: "caption",
                        unreadCount: t
                    }, t))))
                }
                ));
        function v(e) {
            var t;
            const [a] = (0,
                o.useUserSetting)("showAsAvailable");
            return (i.default.createElement(y, p({
                isAvailable: a,
                isDndModeOn: (null === (t = e.userStatus) || void 0 === t ? void 0 : t.doNotDisturbEnabled) || !1
            }, e)))
        }
    },
    2012: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = _(a(2013))
            , r = _(a(2015))
            , l = _(a(2016))
            , o = a(8)
            , u = _(a(340))
            , i = _(a(1934))
            , s = _(a(593))
            , d = a(23)
            , c = _(a(2021))
            , f = _(a(2022))
            , p = a(11)
            , m = M(a(0))
            , h = a(597)
            , g = a(640)
            , y = _(a(589))
            , v = _(a(242))
            , b = M(a(13));
        function w() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return w = function () {
                return e
            }
                ,
                e
        }
        function M(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = w();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const E = {
            includeGroups: !0,
            includePages: !0,
            includeIntegratedMessageSearchResults: !0,
            includeSecureThreads: !1
        };
        const S = {
            searchQueryChanged: d.InboxActions.search.searchQueryChanged,
            openThread: d.InboxActions.threads.openThread,
            openThreadFromSearchResult: d.InboxActions.search.openThreadFromSearchResult
        };
        var k = (0,
            p.connect)((function (e) {
                return {
                    readyToShowMessages: (0,
                        d.readyToShowMessages)(e),
                    loadingFirstPage: (0,
                        d.loadingFirstPage)(e),
                    hasInitialSyncCompleted: (0,
                        d.hasInitialSyncCompleted)(e)
                }
            }
            ), S)((function (e) {
                const { searchQueryChanged: t, readyToShowMessages: a, isAnimating: d, isMasterCollapsed: p, isCompactMode: w, hasInitialSyncCompleted: M, onThreadActivated: _, loadingFirstPage: S } = e
                    , k = (0,
                        b.useWithSurface)("search_threads")
                    , O = (0,
                        m.useRef)(null)
                    , P = (0,
                        m.useRef)(null)
                    , T = (0,
                        m.useRef)(null)
                    , C = (0,
                        i.default)()
                    , [I, j] = (0,
                        m.useState)(null)
                    , x = (0,
                        u.default)(I, 200);
                (0,
                    m.useEffect)(() => {
                        null != x && (k(),
                            t(x, E, o.SearchSource.ThreadList))
                    }
                        , [k, t, x]);
                const R = (0,
                    m.useCallback)(() => {
                        j(null),
                            _()
                    }
                        , [_])
                    , A = (0,
                        s.default)() ? g.ChatCellShimmer : h.ChatCellShimmer
                    , D = !I || p;
                return m.default.createElement(b.default, {
                    name: "threadsList"
                }, !p && m.default.createElement(v.default, {
                    query: I || "",
                    ref: O,
                    onQueryChange: j,
                    onKeyDown: e => {
                        "ArrowDown" == e.key && (e.preventDefault(),
                            I && !D && T.current ? T.current.focus() : P.current && P.current.focus())
                    }
                    ,
                    disabled: S || !a || !M
                }), a && !M && window.navigator.onLine && m.default.createElement(r.default, null), m.default.createElement(c.default, {
                    compact: p
                }), m.default.createElement(f.default, {
                    compact: p
                }), m.default.createElement(y.default, {
                    loaded: !S && a,
                    renderLoadingContent: () => m.default.createElement(m.default.Fragment, null, [...Array(Math.ceil(window.innerHeight / C))].map((e, t) => m.default.createElement(A, {
                        key: t,
                        index: t,
                        compact: p
                    }))),
                    renderLoadedContent: () => !I || D ? m.default.createElement(l.default, {
                        isAnimating: d,
                        isCompactMode: w,
                        isCollapsed: p,
                        onThreadActivated: _,
                        ref: P
                    }) : m.default.createElement(n.default, {
                        query: I,
                        onSearchResultActivated: R,
                        ref: T
                    })
                }))
            }
            ));
        t.default = k
    },
    2013: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(1887)
            , r = _(a(2014))
            , l = _(a(1933))
            , o = a(8)
            , u = a(23)
            , i = _(a(1))
            , s = _(a(2))
            , d = _(a(1934))
            , c = _(a(33))
            , f = _(a(186))
            , p = a(6)
            , m = a(1888)
            , h = a(11)
            , g = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = M();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , y = a(597)
            , v = _(a(589))
            , b = _(a(45))
            , w = _(a(13));
        function M() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return M = function () {
                return e
            }
                ,
                e
        }
        function _(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const E = (0,
            i.default)(s.default)({
                marginLeft: 12
            });
        function S(e) {
            return g.default.createElement(g.default.Fragment, null, [...Array(e)].map((e, t) => g.default.createElement(y.ChatCellShimmer, {
                key: t,
                index: t
            })))
        }
        var k = (0,
            h.connect)((function (e) {
                return {
                    searchInfo: (0,
                        u.getSearchInfo)(e, o.SearchSource.ThreadList)
                }
            }
            ), null, null, {
                forwardRef: !0
            })((0,
                g.forwardRef)((function (e, t) {
                    const { query: a, onSearchResultActivated: o } = e
                        , u = (0,
                            d.default)()
                        , i = (0,
                            p.useTheme)()
                        , { searchResults: s } = e.searchInfo
                        , { isLoadingMoreSearchResults: h, hasNoSearchResults: y } = (0,
                            m.getSearchStatus)(e.searchInfo, a)
                        , M = s && s.findIndex(e => !e.resultId);
                    return g.default.createElement(w.default, {
                        name: "search_results",
                        key: "search_results"
                    }, g.default.createElement(b.default, null, g.default.createElement(c.default, {
                        css: {
                            flex: 1
                        }
                    }, g.default.createElement(v.default, {
                        loaded: !!s || y,
                        renderLoadingContent: () => S(Math.ceil(window.innerHeight / u)),
                        renderLoadedContent: () => g.default.createElement(g.default.Fragment, null, s && s.map((e, a) => {
                            if (e.resultId) {
                                const n = null == M || -1 === M || a < M;
                                return (g.default.createElement(r.default, {
                                    shortcut: n ? (0,
                                        l.default)(i, a) : null,
                                    onSearchResultActivated: o,
                                    searchResult: e,
                                    key: `${a}:${e.resultId}`,
                                    ref: 0 === a ? t : null
                                }))
                            }
                            return g.default.createElement(E, {
                                key: a
                            }, g.default.createElement(f.default, {
                                title: e.title
                            }))
                        }
                        ), h && S(3), y && g.default.createElement(n.NoResultsFound, null))
                    }))))
                }
                )));
        t.default = k
    },
    2014: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n, r = a(8), l = a(84), o = a(21), u = a(53), i = a(23), s = a(11), d = function (e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = f();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            a.default = e,
                t && t.set(e, a);
            return a
        }(a(0)), c = (n = a(654)) && n.__esModule ? n : {
            default: n
        };
        function f() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return f = function () {
                return e
            }
                ,
                e
        }
        const p = {
            openThreadFromSearchResult: i.InboxActions.search.openThreadFromSearchResult,
            openMessageSearchFromGlobalSearchResult: i.InboxActions.messageSearch.openMessageSearchFromGlobalSearchResult
        };
        var m = (0,
            s.connect)((function (e, t) {
                const { searchResult: a } = t
                    , n = (0,
                        o.requireAuthenticationData)(e);
                return {
                    participants: null == a.resultId ? [] : (0,
                        u.getParticipantListForThread)(e, a.resultId),
                    viewerId: n.userID
                }
            }
            ), p, null, {
                forwardRef: !0
            })((0,
                d.forwardRef)((function (e, t) {
                    const { shortcut: a, searchResult: n, onSearchResultActivated: o, openThreadFromSearchResult: u, openMessageSearchFromGlobalSearchResult: i, participants: s, viewerId: f } = e
                        , p = (0,
                            d.useCallback)(() => (n.resultType === r.SearchResultType.IntegratedMessageSearchThread ? i(n) : (o(),
                                u(n)),
                                !0), [n, i, o, u]);
                    return (0,
                        l.useShortcut)(a, p),
                        d.default.createElement(c.default, {
                            searchResult: n,
                            shortcut: a,
                            onClick: p,
                            participants: s,
                            viewerId: f,
                            ref: t
                        })
                }
                )));
        t.default = m
    },
    2015: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                const e = (0,
                    u.useTheme)();
                if (!(0,
                    l.default)(1500))
                    return null;
                return (i.default.createElement(d.default, {
                    tooltipProps: {
                        children: () => i.default.createElement(c.default, {
                            use: "caption",
                            color: e.semanticColors.textPrimary
                        }, r.default._("Syncing new messages", null, {
                            hk: "1YxnIl"
                        }).toString())
                    },
                    delay: 1e3
                }, i.default.createElement(h, null, i.default.createElement(g, null, i.default.createElement(y, null)))))
            }
            ;
        var n = a(37)
            , r = f(a(5))
            , l = f(a(342))
            , o = f(a(1))
            , u = a(6)
            , i = f(a(0))
            , s = f(a(2))
            , d = f(a(73))
            , c = f(a(4));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0,
            n.keyframes)({
                "0%": {
                    transform: "translateX(0%)"
                },
                "50%": {
                    transform: "translateX(100%)"
                },
                "100%": {
                    transform: "translateX(0%)"
                }
            })
            , m = (0,
                n.keyframes)({
                    "0%": {
                        width: 0
                    },
                    "25%": {
                        width: "20%"
                    },
                    "50%": {
                        width: 0
                    },
                    "75%": {
                        width: "20%"
                    },
                    "100%": {
                        width: 0
                    }
                })
            , h = (0,
                o.default)(s.default)(e => ({
                    backgroundColor: e.theme.colors.base20,
                    width: "100%",
                    height: 4,
                    marginBottom: 4
                }))
            , g = (0,
                o.default)(s.default)({
                    width: "100%",
                    height: 4,
                    animation: `${p} 3s linear infinite`
                })
            , y = (0,
                o.default)(s.default)(e => ({
                    backgroundColor: e.theme.colors.base50,
                    height: 4,
                    animation: `${m} 3s linear infinite`
                }))
    },
    2016: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = j(a(2017))
            , r = j(a(2018))
            , l = j(a(1933))
            , o = j(a(59))
            , u = a(8)
            , i = j(a(163))
            , s = j(a(2019))
            , d = j(a(5))
            , c = a(84)
            , f = a(21)
            , p = a(77)
            , m = a(23)
            , h = j(a(1))
            , g = j(a(590))
            , y = j(a(16))
            , v = j(a(33))
            , b = I(a(82))
            , w = j(a(2020))
            , M = j(a(614))
            , _ = a(6)
            , E = a(11)
            , S = I(a(0))
            , k = j(a(2))
            , O = j(a(45))
            , P = j(a(359))
            , T = j(a(13));
        function C() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return C = function () {
                return e
            }
                ,
                e
        }
        function I(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = C();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function j(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const x = (0,
            h.default)(k.default)({
                padding: 12
            });
        const R = {
            fetchEarlierThreads: m.InboxActions.threads.fetchEarlierThreads,
            openPrevThread: m.InboxActions.threads.openPrevThread,
            openNextThread: m.InboxActions.threads.openNextThread,
            openPrevUnreadThread: m.InboxActions.threads.openPrevUnreadThread,
            openNextUnreadThread: m.InboxActions.threads.openNextUnreadThread,
            openThreadFolder: m.InboxActions.threads.openThreadFolder
        };
        var A = (0,
            E.connect)((function (e) {
                const t = (0,
                    f.requireAuthenticationData)(e)
                    , a = (0,
                        m.getOpenedThreadFolderParentKey)(e);
                return {
                    openedThreadFolderParentKey: a,
                    newThreadInfo: (0,
                        m.getNewThreadInfo)(e),
                    threadKeys: (0,
                        m.getOrderedThreadKeys)(e),
                    selectedThreadKey: (0,
                        m.getprimaryThreadKey)(e),
                    isDisplayingAllThreads: (0,
                        m.isDisplayingAllThreads)(e, a),
                    isLoadingThreads: (0,
                        m.isLoadingThreads)(e, a),
                    isWorkchat: t.isWorkplaceAccount
                }
            }
            ), R, null, {
                forwardRef: !0
            })((0,
                S.forwardRef)((function (e, t) {
                    const { isAnimating: a, isCompactMode: f, isCollapsed: m, onThreadActivated: h, openedThreadFolderParentKey: E, newThreadInfo: k, threadKeys: C, selectedThreadKey: I, isDisplayingAllThreads: j, isLoadingThreads: R, openPrevThread: A, openNextThread: D, openPrevUnreadThread: N, openNextUnreadThread: L, fetchEarlierThreads: W, openThreadFolder: K, isWorkchat: z } = e
                        , F = !j && R && C.length > 0
                        , B = !j && !R && C.length > 0
                        , U = (0,
                            S.useCallback)(() => (A(),
                                !0), [A])
                        , G = (0,
                            S.useCallback)(() => (D(),
                                !0), [D])
                        , V = (0,
                            S.useCallback)(() => (N(),
                                !0), [N])
                        , H = (0,
                            S.useCallback)(() => (L(),
                                !0), [L]);
                    (0,
                        c.useShortcut)("option+up", U),
                        (0,
                            c.useShortcut)("option+down", G),
                        (0,
                            c.useShortcut)("option+shift+up", V),
                        (0,
                            c.useShortcut)("option+shift+down", H);
                    const q = (0,
                        _.useTheme)()
                        , J = !(k && k.isNewThreadOpen) && (a || !f)
                        , Q = d.default._("Back To {folder name}", [d.default._param("folder name", (0,
                            P.default)(u.ThreadFolderParentKey.Inbox))], {
                            hk: "4e4d5l"
                        });
                    return S.default.createElement(T.default, {
                        name: "threads",
                        key: "thread_list"
                    }, E === u.ThreadFolderParentKey.MessageRequests && S.default.createElement(x, null, S.default.createElement(g.default, {
                        icon: (0,
                            o.default)({
                                messenger: s.default,
                                workchat: i.default
                            }),
                        title: (0,
                            P.default)(u.ThreadFolderParentKey.MessageRequests),
                        message: (0,
                            o.default)({
                                messenger: d.default._("Open a chat to get more info about who's messaging you. They won't know you've seen it until you reply.", null, {
                                    hk: "29awjW"
                                }),
                                workchat: d.default._("Open a chat to get more information about who's messaging you from outside your Workplace community. Always check the sender???s identity before you share any information. Their name and photo may not be genuine.", null, {
                                    hk: "PoxEo"
                                })
                            })
                    })), !(0,
                        p.folderIsPushed)(E) && !R && 0 === C.length && S.default.createElement(x, null, S.default.createElement(g.default, {
                            icon: s.default,
                            title: d.default._("No Messages", null, {
                                hk: "1zrJVB"
                            }),
                            message: d.default._("There are no messages in the ???{folder name}??? folder.", [d.default._param("folder name", (0,
                                P.default)(E))], {
                                hk: "2w4jXE"
                            }).toString(),
                            renderActions: E !== u.ThreadFolderParentKey.Inbox ? () => S.default.createElement(y.default, {
                                caption: Q,
                                telemetryName: "switch_to_inbox",
                                "aria-label": Q.toString(),
                                onClick: () => K(u.ThreadFolderParentKey.Inbox),
                                style: {
                                    width: "100%"
                                }
                            }) : void 0
                        })), S.default.createElement(O.default, null, E === u.ThreadFolderParentKey.Inbox && !z && S.default.createElement(w.default, null), S.default.createElement(v.default, {
                            css: {
                                flex: 1
                            }
                        }, S.default.createElement("div", {
                            style: {
                                marginTop: 1
                            }
                        }), E === u.ThreadFolderParentKey.Inbox && k && S.default.createElement(n.default, {
                            compact: m,
                            onNewMessageActivated: h,
                            selected: k.isNewThreadOpen && (a || !f)
                        }), C.map((e, a) => S.default.createElement(S.default.Fragment, {
                            key: e
                        }, a === C.length - 3 && B && S.default.createElement(M.default, {
                            atSentinel: () => W(E)
                        }), S.default.createElement(r.default, {
                            isFirstItem: 0 === a,
                            onThreadActivated: h,
                            key: `${a}:${e}`,
                            threadKey: e,
                            compact: m,
                            shortcut: (0,
                                l.default)(q, a),
                            isSelected: I === e && J,
                            ref: 0 === a ? t : null
                        }))), F && S.default.createElement(b.default, {
                            size: b.SpinnerSize.Small,
                            delay: 200,
                            css: {
                                marginTop: 2,
                                marginBottom: 12
                            },
                            accomodateDiagonalSize: !0
                        }))))
                }
                )));
        t.default = A
    },
    2017: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n, r = a(53), l = a(23), o = a(11), u = (n = a(0)) && n.__esModule ? n : {
            default: n
        }, i = a(252);
        const s = {
            openNewThreadCell: l.InboxActions.newThread.openNewThreadCell,
            deleteNewThread: l.InboxActions.newThread.deleteNewThread
        };
        var d = (0,
            o.connect)((function (e) {
                return {
                    newThreadInfo: (0,
                        r.getNewThreadInfo)(e)
                }
            }
            ), s)((function (e) {
                const { newThreadInfo: t, onNewMessageActivated: a, selected: n, openNewThreadCell: r, deleteNewThread: l, compact: o } = e;
                if (!t)
                    throw new Error("tried to render a new message item while not in new thread creation mode");
                return (u.default.createElement(i.NewMessageChatCell, {
                    onClick: () => {
                        r(),
                            a()
                    }
                    ,
                    compact: o,
                    selected: n,
                    onDelete: l,
                    recipients: t.recipients
                }))
            }
            ));
        t.default = d
    },
    2018: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = w(a(27))
            , r = a(8)
            , l = a(84)
            , o = w(a(588))
            , u = w(a(243))
            , i = w(a(342))
            , s = a(101)
            , d = w(a(1894))
            , c = a(52)
            , f = a(28)
            , p = a(21)
            , m = a(23)
            , h = a(49)
            , g = a(11)
            , y = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = b();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , v = w(a(252));
        function b() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return b = function () {
                return e
            }
                ,
                e
        }
        function w(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const M = {
            openThread: m.InboxActions.threads.openThread,
            startCall: h.RtcActions.startCall
        };
        var _ = (0,
            g.connect)((function () {
                const e = (0,
                    m.getCommonInstanceSelectors)();
                return (t, a) => ({
                    authData: (0,
                        p.requireAuthenticationData)(t),
                    thread: (0,
                        m.getThread)(t, a.threadKey),
                    presence: (0,
                        m.getThreadPresences)(t, a.threadKey),
                    participants: (0,
                        m.getParticipantListForThread)(t, a.threadKey),
                    participantStatus: e.selectOppositeParticipantStatus(t, a),
                    deliveryStatus: e.selectDeliveryStatusForThread(t, a),
                    lastMessageInfo: (0,
                        m.getLastMessageInfoForThread)(t, a),
                    lastMessageSeenHeadsUrls: e.selectLastMessageSeenHeadUrls(t, a),
                    isOfflineThread: (0,
                        m.getOfflineThreadingIds)(t).has(a.threadKey),
                    isNetworkConnected: (0,
                        f.isAppNetworkConnected)(t),
                    isRtcEnabled: (0,
                        h.isRtcEnabled)(t),
                    rtcStackStatus: (0,
                        h.getRtcStackStatus)(t),
                    isLastPinned: (0,
                        m.isLastPinnedThread)(t, a.threadKey)
                })
            }
            ), M, null, {
                forwardRef: !0
            })((0,
                y.forwardRef)((function (e, t) {
                    const a = (0,
                        y.useRef)(null);
                    (0,
                        y.useEffect)(() => {
                            window.requestAnimationFrame(() => {
                                a.current && e.isSelected && a.current.scrollIntoView({
                                    block: "nearest"
                                })
                            }
                            )
                        }
                            , [e.isSelected]);
                    const { onThreadActivated: f, openThread: p, startCall: m, compact: b, threadKey: w, participants: M, thread: _, isLastPinned: E, isFirstItem: S } = e
                        , [k, O] = (0,
                            u.default)(`blockedParticipantsDialog.${w}`, void 0)
                        , P = e.authData.userID
                        , T = (0,
                            o.default)()
                        , C = (0,
                            g.useSelector)(e => (0,
                                h.getIsInCall)(e, T))
                        , I = (0,
                            y.useCallback)(e => {
                                const t = (0,
                                    c.selectBlockedParticipants)(M);
                                t.length > 0 && _ && !(0,
                                    c.isP2PThread)(_.threadType) && !k ? (0,
                                        c.showBlockedParticipantsDialog)({
                                            blockedParticipants: t,
                                            onOK: () => {
                                                e(w),
                                                    O(!0)
                                            }
                                            ,
                                            onLeave: () => {
                                                (0,
                                                    s.showLeaveGroupConfirmation)(P, w)
                                            }
                                        }) : e(w)
                            }
                                , [P, M, _, O, k, w])
                        , j = (0,
                            y.useCallback)(() => {
                                I(e => {
                                    f(),
                                        p(e)
                                }
                                )
                            }
                                , [f, p, I])
                        , x = (0,
                            y.useMemo)(() => (0,
                                c.isRtcAllowed)((null == _ ? void 0 : _.capabilities) || "", e.isRtcEnabled, P, (null == _ ? void 0 : _.threadType) || r.ThreadType.Unknown, M, null == _ ? void 0 : _.parentThreadKey), [_, e.isRtcEnabled, P, M])
                        , R = (0,
                            y.useCallback)(e => {
                                var t;
                                m(w, null !== (t = null == _ ? void 0 : _.threadType) && void 0 !== t ? t : r.ThreadType.Unknown, r.OutgoingCallSource.CHAT_HEADER, e === r.RtcCallStatus.AUDIO)
                            }
                                , [m, _, w]);
                    return (0,
                        l.useShortcut)(e.shortcut, j),
                        (0,
                            i.default)(e.isOfflineThread ? 750 : null) && e.thread ? y.default.createElement("div", {
                                ref: a
                            }, y.default.createElement(v.default, {
                                authData: e.authData,
                                compact: b,
                                participants: e.participants,
                                participantStatus: e.participantStatus,
                                profilePictureUrl: (0,
                                    n.default)(e.thread.threadPicture) || (0,
                                        n.default)(e.thread.otherParticipantProfilePicture),
                                listItem: e.thread,
                                selected: e.isSelected,
                                presence: e.presence,
                                onClick: j,
                                deliveryStatus: e.deliveryStatus,
                                lastMessageInfo: e.lastMessageInfo,
                                lastMessageSeenHeadsUrls: e.lastMessageSeenHeadsUrls,
                                isNetworkConnected: e.isNetworkConnected,
                                isRtcEnabled: e.isRtcEnabled,
                                rtcStackStatus: e.rtcStackStatus,
                                callStatus: C ? r.RtcCallStatus.NONE : e.thread.ongoingCallState,
                                onJoinCallClick: x ? R : void 0,
                                ref: t,
                                isLastPinned: E,
                                isFirstItem: S
                            }), E && y.default.createElement(d.default, null)) : null
                }
                )));
        t.default = _
    },
    2019: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18 28.074c6.394 0 11-4.467 11-10.57v-.002c0-6.103-4.606-10.498-11-10.498-6.392 0-10.998 4.395-11 10.498v.002c.001 2.091.415 3.98 1.384 5.562.458.747.563 1.664.29 2.5l-.728 2.41c-.2.614.373 1.188.964.986l3.668-1.125a4.26 4.26 0 012.39-.09c.953.232 1.967.327 3.032.327zM13 19.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2020: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                return l.default.createElement(l.Suspense, {
                    fallback: l.default.createElement(n.default, null)
                }, l.default.createElement(s, null))
            }
            ;
        var n = u(a(653))
            , r = u(a(1926))
            , l = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = o();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function o() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function () {
                return e
            }
                ,
                e
        }
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = l.default.lazy(() => Promise.all([a.e(20), a.e(34)]).then(a.t.bind(null, 650, 7)));
        function s() {
            return (0,
                r.default)(),
                l.default.createElement(i, null)
        }
    },
    2021: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = s(a(5))
            , r = a(139)
            , l = a(23)
            , o = a(11)
            , u = s(a(0))
            , i = s(a(638));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = {
            recover: l.InboxActions.misc.recoverFromMsysStall
        };
        var c = (0,
            o.connect)((function (e) {
                return {
                    isMsysStalled: e.inbox.isMsysStalled,
                    watchdogRemediationsEnabled: (0,
                        r.isGatekeeperEnabled)(e, "archon_enable_sync_watchdog_remediations")
                }
            }
            ), d)((function (e) {
                const { isMsysStalled: t, watchdogRemediationsEnabled: a } = e;
                return t ? u.default.createElement(i.default, {
                    wrapText: !0,
                    compact: e.compact,
                    message: a ? n.default._("We've lost connection with the server and need to restart the application. A bug report has automatically been filed.", null, {
                        hk: "4gVJwl"
                    }) : n.default._("We've lost connection with the server. A bug report has automatically been filed.", null, {
                        hk: "cXZtt"
                    }),
                    actions: a ? [{
                        content: n.default._("Restart", null, {
                            hk: "AH7yY"
                        }),
                        onActivate: e.recover
                    }] : []
                }) : null
            }
            ));
        t.default = c
    },
    2022: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = f(a(2023))
            , r = f(a(2024))
            , l = f(a(2025))
            , o = a(28)
            , u = f(a(1))
            , i = f(a(2))
            , s = a(11)
            , d = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = c();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function c() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return c = function () {
                return e
            }
                ,
                e
        }
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0,
            u.default)(i.default)({
                padding: 12
            });
        const m = {
            showModal: o.AppContextActions.showModal,
            promotionAction: o.AppContextActions.promotionAction,
            promotionImpression: o.AppContextActions.promotionImpression
        };
        var h = (0,
            s.connect)((function (e) {
                return {
                    currentPromotion: (0,
                        o.getCurrentPromotion)(e)
                }
            }
            ), m)((function (e) {
                const { compact: t, currentPromotion: a, promotionAction: o, promotionImpression: u } = e
                    , i = (0,
                        d.useCallback)(() => {
                            a && o(a, "DISMISS")
                        }
                            , [a, o]);
                if (!a || t)
                    return null;
                let s = null;
                switch (a.type) {
                    case "feedback":
                        s = d.default.createElement(r.default, {
                            onDismiss: i,
                            promotion: a
                        });
                        break;
                    case "announcement":
                        a.qpInfo && (s = d.default.createElement(n.default, {
                            onDismiss: i,
                            promotion: a
                        }));
                        break;
                    case "generic":
                        s = d.default.createElement(l.default, {
                            onDismiss: i,
                            promotionAction: o,
                            promotion: a,
                            trackImpression: u
                        })
                }
                return s ? d.default.createElement(p, null, s) : null
            }
            ));
        t.default = h
    },
    2023: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ promotion: e, onDismiss: t }) {
                if (!e.qpInfo)
                    return null;
                return (n.default.createElement(r.default, {
                    title: e.qpInfo.title,
                    message: e.qpInfo.subTitle,
                    onDismiss: t
                }))
            }
            ;
        var n = l(a(0))
            , r = l(a(590));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    2024: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n, r = a(83), l = (n = a(5)) && n.__esModule ? n : {
            default: n
        }, o = a(28), u = a(32), i = a(11), s = f(a(0)), d = f(a(590));
        function c() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return c = function () {
                return e
            }
                ,
                e
        }
        function f(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = c();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        const p = {
            showModal: o.AppContextActions.showModal,
            promotionAction: o.AppContextActions.promotionAction
        };
        var m = (0,
            i.connect)((function (e) {
                return {
                    enableOsmetaInterruptiveFeedback: (0,
                        u.isGatekeeperEnabled)(e, "archon_enable_interruptive_osmeta_feedback")
                }
            }
            ), p)((function ({ promotion: e, showModal: t, enableOsmetaInterruptiveFeedback: a, onDismiss: n, promotionAction: o }) {
                const u = (0,
                    s.useCallback)(() => {
                        t({
                            type: "FeedbackForm",
                            promotion: e
                        }, null),
                            o(e, "PRIMARY")
                    }
                        , [t, e, o]);
                return a ? null : s.default.createElement(d.default, {
                    title: l.default._("Let us know how we're doing!", null, {
                        hk: "1l1F8j"
                    }),
                    message: l.default._("Your feedback will be used to improve {app name}.", [l.default._param("app name", r.displayName)], {
                        hk: "fXJcv"
                    }),
                    onDismiss: n,
                    renderActions: () => s.default.createElement(d.QPBannerPrimaryButton, {
                        caption: l.default._("Give Feedback", null, {
                            hk: "2l68ei"
                        }),
                        onClick: u
                    })
                })
            }
            ));
        t.default = m
    },
    2025: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ promotion: e, onDismiss: t, promotionAction: a, trackImpression: n }) {
                const u = (0,
                    l.useCallback)((n, l, o) => {
                        if (o && t(),
                            l) {
                            var u;
                            const t = new URL(l)
                                , a = null === (u = e.qpInfo) || void 0 === u ? void 0 : u.promotionID;
                            a && (null == t || t.searchParams.append("promotionID", a)),
                                r.default.platform.openExternalURL(t.toString())
                        }
                        a(e, n)
                    }
                        , [t, e, a])
                    , i = (0,
                        l.useCallback)(() => {
                            var t, a, n, r, l;
                            return u("PRIMARY", null === (t = e.qpInfo) || void 0 === t ? void 0 : null === (a = t.primaryAction) || void 0 === a ? void 0 : a.url, null !== (n = null === (r = e.qpInfo) || void 0 === r ? void 0 : null === (l = r.primaryAction) || void 0 === l ? void 0 : l.dismiss_promotion) && void 0 !== n && n)
                        }
                            , [u, e.qpInfo])
                    , s = (0,
                        l.useCallback)(() => {
                            var t, a, n, r, l;
                            return u("SECONDARY", null === (t = e.qpInfo) || void 0 === t ? void 0 : null === (a = t.secondaryAction) || void 0 === a ? void 0 : a.url, null !== (n = null === (r = e.qpInfo) || void 0 === r ? void 0 : null === (l = r.secondaryAction) || void 0 === l ? void 0 : l.dismiss_promotion) && void 0 !== n && n)
                        }
                            , [u, e.qpInfo]);
                if ((0,
                    l.useEffect)(() => {
                        e.qpInfo && n(e)
                    }
                        , [n, e]),
                    !e.qpInfo)
                    return null;
                return (l.default.createElement(o.default, {
                    title: e.qpInfo.title,
                    message: e.qpInfo.subTitle,
                    onDismiss: e.qpInfo.isNonDismissable ? void 0 : t,
                    heroIcon: e.qpInfo.imageUrl,
                    footer: e.qpInfo.footer,
                    renderActions: () => {
                        var t, a, n, r, u, d;
                        return (l.default.createElement(l.default.Fragment, null, (null === (t = e.qpInfo) || void 0 === t ? void 0 : t.primaryAction) && l.default.createElement(o.QPBannerPrimaryButton, {
                            caption: null === (a = e.qpInfo) || void 0 === a ? void 0 : null === (n = a.primaryAction) || void 0 === n ? void 0 : n.title_text,
                            onClick: i
                        }), (null === (r = e.qpInfo) || void 0 === r ? void 0 : r.secondaryAction) && l.default.createElement(o.QPBannerSecondaryButton, {
                            caption: null === (u = e.qpInfo) || void 0 === u ? void 0 : null === (d = u.secondaryAction) || void 0 === d ? void 0 : d.title_text,
                            onClick: s
                        })))
                    }
                }))
            }
            ;
        var n, r = (n = a(9)) && n.__esModule ? n : {
            default: n
        }, l = i(a(0)), o = i(a(590));
        function u() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return u = function () {
                return e
            }
                ,
                e
        }
        function i(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = u();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
    },
    2026: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { onCloseClicked: t, onFocusClicked: a } = e
                    , l = (0,
                        n.useTheme)();
                return u.default.createElement(p, null, u.default.createElement(h, null, u.default.createElement(o.default, {
                    size: 35,
                    color: l.colors.flatBase60
                })), u.default.createElement(m, {
                    use: "title",
                    wrapText: !0
                }, r.default._("This chat is open in another window", null, {
                    hk: "14fC4w"
                })), u.default.createElement(g, null, u.default.createElement(y, {
                    "aria-label": r.default._("Close Window", null, {
                        hk: "4lESeq"
                    }).toString(),
                    telemetryName: "closeTearawayButton",
                    caption: r.default._("Close Window", null, {
                        hk: "4lESeq"
                    }),
                    onClick: t
                }), u.default.createElement(y, {
                    "aria-label": r.default._("Show Chat", null, {
                        hk: "1jjarw"
                    }).toString(),
                    telemetryName: "closeTearawayButton",
                    use: s.RectangleButtonUse.Primary,
                    caption: r.default._("Show Chat", null, {
                        hk: "1jjarw"
                    }),
                    onClick: a
                })))
            }
            ;
        var n = a(6)
            , r = f(a(5))
            , l = f(a(1))
            , o = f(a(622))
            , u = f(a(0))
            , i = f(a(2))
            , s = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = c();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(16))
            , d = f(a(4));
        function c() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return c = function () {
                return e
            }
                ,
                e
        }
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0,
            l.default)(i.default)({
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            })
            , m = (0,
                l.default)(d.default)({
                    padding: "10px 0px"
                })
            , h = (0,
                l.default)(i.default)({
                    padding: 10
                })
            , g = (0,
                l.default)(i.default)({
                    padding: 15,
                    flexDirection: "row"
                })
            , y = (0,
                l.default)(s.default)({
                    margin: "0px 8px"
                })
    },
    2027: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(23)
            , r = a(11)
            , l = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = o();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0));
        function o() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function () {
                return e
            }
                ,
                e
        }
        const u = l.default.lazy(() => a.e(104).then(a.t.bind(null, 2193, 7)));
        var i = (0,
            r.connect)((function (e) {
                return {
                    showSavedMessages: (0,
                        n.getShouldShowSavedMessagesViewer)(e)
                }
            }
            ), {})((function (e) {
                return e.showSavedMessages ? l.default.createElement(l.Suspense, {
                    fallback: null
                }, l.default.createElement(u, null)) : null
            }
            ));
        t.default = i
    },
    2028: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ settingsPane: e }) {
                const t = (0,
                    l.default)();
                (0,
                    i.default)(n.default.settings),
                    (0,
                        u.default)({
                            width: 680,
                            height: 580,
                            resizable: !0,
                            maximizable: !1
                        }),
                    (0,
                        o.default)("settings");
                return s.default.createElement(f.default, {
                    onEvent: (e, a, n, l) => {
                        t.metrics.trackStrictEvent((0,
                            r.UserInteractionEvent)({
                                event: n,
                                target: a,
                                surface: e,
                                context: l
                            }))
                    }
                }, s.default.createElement(p.default, {
                    name: "settings"
                }, s.default.createElement(d.SettingsNavContextProvider, null, s.default.createElement(c.default, {
                    settingsPane: e
                }))))
            }
            ;
        var n = m(a(338))
            , r = a(24)
            , l = m(a(102))
            , o = m(a(2029))
            , u = m(a(247))
            , i = m(a(343))
            , s = m(a(0))
            , d = a(1880)
            , c = m(a(2030))
            , f = m(a(122))
            , p = m(a(13));
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    2029: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                (0,
                    o.useEffect)(() => {
                        l.default.metrics.trackStrictEvent((0,
                            r.ImpressionEvent)({
                                target: `window:${e}`,
                                targetType: "screen",
                                surface: "root"
                            }))
                    }
                        , [])
            }
            ;
        var n, r = a(24), l = (n = a(9)) && n.__esModule ? n : {
            default: n
        }, o = a(0)
    },
    2030: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ settingsPane: e }) {
                const t = (0,
                    r.useRef)(null)
                    , { setIsDetailActive: a, setSelectedPane: s } = (0,
                        i.useSettingsNav)();
                (0,
                    r.useEffect)(() => {
                        e && s(e)
                    }
                        , [e, s]);
                return (0,
                    n.default)(t),
                    r.default.createElement(l.default, {
                        persistentStorageKey: "settings",
                        renderMaster: ({ activateDetailView: e, isCompactMode: t }) => r.default.createElement(u.default, {
                            activateDetailView: () => {
                                a(!0),
                                    e()
                            }
                            ,
                            isCompactMode: t
                        }),
                        renderDetail: ({ activateMasterView: e, isCompactMode: t }) => r.default.createElement(o.default, {
                            activateMasterView: () => {
                                a(!1),
                                    e()
                            }
                            ,
                            isCompactMode: t
                        }),
                        containerRef: t
                    })
            }
            ;
        var n = d(a(626))
            , r = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = s();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , l = d(a(615))
            , o = d(a(2031))
            , u = d(a(2046))
            , i = a(1880);
        function s() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return s = function () {
                return e
            }
                ,
                e
        }
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    2031: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { activateMasterView: t, isCompactMode: a } = e
                    , { selectedPane: n } = (0,
                        u.useSettingsNav)();
                return l.default.createElement(v, null, (() => {
                    if (n && b[n]) {
                        const e = b[n];
                        return (l.default.createElement(e, {
                            back: t,
                            isCompactMode: a
                        }))
                    }
                    return !1
                }
                )())
            }
            ;
        var n = a(164)
            , r = y(a(1))
            , l = y(a(0))
            , o = y(a(45))
            , u = a(1880)
            , i = y(a(2032))
            , s = y(a(2033))
            , d = y(a(2034))
            , c = y(a(2035))
            , f = y(a(2037))
            , p = y(a(2038))
            , m = y(a(2041))
            , h = y(a(2044))
            , g = y(a(2045));
        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const v = (0,
            r.default)(o.default)(e => ({
                flex: 1,
                marginTop: (0,
                    n.getTitleBarHeight)(e.theme)
            }))
            , b = {
                general: d.default,
                availability: i.default,
                notifications: p.default,
                locale: f.default,
                "legal-policies": c.default,
                theme: g.default,
                rtc: m.default,
                "dev-settings-sync-watchdog": h.default,
                gatekeepers: s.default
            }
    },
    2032: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { back: t, isCompactMode: a } = e
                    , [i, m] = (0,
                        u.useUserSetting)("showAsAvailable")
                    , h = [(0,
                        o.default)("settings"), (0,
                            o.default)("settings"), (0,
                                o.default)("settings")]
                    , b = [(0,
                        o.default)("settings"), (0,
                            o.default)("settings"), (0,
                                o.default)("settings")]
                    , w = (0,
                        o.default)("settings");
                return s.default.createElement(n.default, {
                    isCompactMode: a,
                    back: t
                }, s.default.createElement(c.default, {
                    title: l.default._("Show Active Status", null, {
                        hk: "2M1gAB"
                    }),
                    description: () => s.default.createElement(d.default, {
                        css: {
                            marginTop: 16
                        }
                    }, i ? s.default.createElement(y, {
                        ids: h
                    }) : s.default.createElement(v, {
                        ids: b
                    }))
                }, ({ titleId: e }) => s.default.createElement(f.default, {
                    value: i,
                    "aria-labelledby": e,
                    "aria-describedby": (i ? h : b).concat(w).join(" "),
                    onToggle: () => {
                        m(!i, {
                            userInitiated: !0
                        })
                    }
                })), s.default.createElement(p.default, {
                    use: "body",
                    wrapText: !0,
                    id: w
                }, (0,
                    r.default)({
                        messenger: l.default._("Your friends and contacts will see when you're active or recently active. You'll appear active or recently active unless you turn off the setting every place you're using Messenger or Facebook. You'll also see when your friends and contacts are active or recently active.", null, {
                            hk: "3MXZi"
                        }),
                        workchat: l.default._("Your coworkers will see when you're active or recently active. You'll appear active or recently active unless you turn off the setting every place you're using Workplace Chat or Workplace. You'll also see when your coworkers are active or recently active.", null, {
                            hk: "2QJFSg"
                        })
                    }), s.default.createElement(g, {
                        url: (0,
                            r.default)({
                                messenger: "https://www.facebook.com/help/448141485230424",
                                workchat: "https://www.facebook.com/help/work-chat/682468881954082"
                            })
                    })))
            }
            ;
        var n = h(a(1870))
            , r = h(a(59))
            , l = h(a(5))
            , o = h(a(591))
            , u = a(72)
            , i = h(a(1))
            , s = h(a(0))
            , d = h(a(2))
            , c = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = m();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(1872))
            , f = h(a(1875))
            , p = h(a(4));
        function m() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return m = function () {
                return e
            }
                ,
                e
        }
        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0,
            i.default)(c.LearnMoreLink)({
                marginLeft: 6,
                display: "inline"
            });
        function y(e) {
            return s.default.createElement(p.default, {
                use: "body-bold",
                id: e.ids[0]
            }, l.default._("Active Status: On", null, {
                hk: "1UGo31"
            }))
        }
        function v(e) {
            return s.default.createElement(p.default, {
                use: "body-bold",
                id: e.ids[0]
            }, l.default._("Active Status: Off", null, {
                hk: "4AnTsG"
            }))
        }
    },
    2033: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { isCompactMode: t, back: a } = e
                    , [n = {}, l] = (0,
                        r.default)("gatekeeper_overrides")
                    , o = (e, t) => {
                        l({
                            ...n,
                            [e]: t
                        })
                    }
                    , u = e => {
                        const t = {
                            ...n
                        };
                        delete t[e],
                            l(t)
                    }
                    ;
                return s.default.createElement(f.default, {
                    isCompactMode: t,
                    back: a
                }, s.default.createElement(h, {
                    onSave: e => {
                        o(e, !0)
                    }
                }), Object.keys(n).sort().map(e => s.default.createElement(y, {
                    key: e,
                    name: e,
                    value: n[e],
                    onToggle: o,
                    onRemove: u
                })))
            }
            ;
        var n = m(a(5))
            , r = m(a(1936))
            , l = m(a(1))
            , o = m(a(262))
            , u = m(a(60))
            , i = a(6)
            , s = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = p();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , d = m(a(1872))
            , c = m(a(1875))
            , f = m(a(1870));
        function p() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return p = function () {
                return e
            }
                ,
                e
        }
        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function h(e) {
            const { onSave: t } = e
                , [a, n] = (0,
                    s.useState)("");
            return s.default.createElement(d.default, {
                title: "Add a gatekeeper to override"
            }, () => s.default.createElement(u.default, {
                autoFocus: !0,
                enableClearButton: !0,
                placeholder: "Press Enter to add the gatekeeper",
                value: a,
                onKeyPress: e => {
                    "Enter" === e.key && (t(a),
                        n(""))
                }
                ,
                onChange: n
            }))
        }
        const g = l.default.div({
            display: "flex",
            justifyContent: "space-between"
        });
        function y(e) {
            const { name: t, value: a, onToggle: r, onRemove: l } = e
                , u = (0,
                    i.useTheme)();
            return s.default.createElement(d.default, {
                key: t,
                title: t
            }, () => s.default.createElement(g, null, s.default.createElement(c.default, {
                value: a,
                onToggle: e => r(t, e)
            }), s.default.createElement(o.default, {
                "aria-label": n.default._("Remove the override", null, {
                    hk: "1VHZ4F"
                }).toString(),
                color: u.semanticColors.secondary,
                telemetryName: "removeGatekeeperOverride",
                onClick: () => {
                    l(t)
                }
            })))
        }
    },
    2034: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = y(a(1870))
            , r = a(8)
            , l = a(83)
            , o = y(a(5))
            , u = y(a(9))
            , i = a(72)
            , s = y(a(118))
            , d = y(a(1875))
            , c = a(6)
            , f = a(32)
            , p = a(11)
            , m = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = g();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , h = y(a(1872));
        function g() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return g = function () {
                return e
            }
                ,
                e
        }
        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var v = (0,
            p.connect)((function (e) {
                return {
                    enableBetaOptIn: (0,
                        f.isGatekeeperEnabled)(e, "archon_enable_beta_opt_in")
                }
            }
            ))((function (e) {
                const { back: t, isCompactMode: a, enableBetaOptIn: f } = e
                    , { globalSettings: { enableSystemTray: p, enableOpenAtLogin: g, enableLocalServer: y } } = (0,
                        s.default)()
                    , [v, b] = (0,
                        i.useGlobalSetting)("useSystemTray")
                    , { systemSettings: { launchOnStartup: { windowsStartupTask: w, electronLoginItemSettings: M } } } = (0,
                        s.default)()
                    , _ = (0,
                        m.useMemo)(() => u.default.platform.isWindowsStore(), [])
                    , E = (0,
                        m.useCallback)(e => {
                            u.default.settings.startup.setStartupTaskSetting(e)
                        }
                            , [])
                    , [S, k] = (0,
                        i.useUserSetting)("useLocalServer")
                    , [O, P] = (0,
                        i.useUserSetting)("betaOptIn")
                    , T = {
                        mac: {
                            title: o.default._("Show a Menu bar icon for {app name}", [o.default._param("app name", l.displayName)], {
                                hk: "2UIfEX"
                            }).toString(),
                            description: o.default._("Make finding the app easier by allowing it to appear in the Mac Menu bar.", null, {
                                hk: "1s1jEc"
                            }).toString()
                        },
                        windows: {
                            title: o.default._("Show {app name} in the notification area", [o.default._param("app name", l.displayName)], {
                                hk: "23GWoU"
                            }).toString(),
                            description: o.default._("Make finding the app easier by allowing it to appear in the notification area (system tray) located in the Windows taskbar.", null, {
                                hk: "3csxgx"
                            }).toString()
                        }
                    }
                    , C = (0,
                        c.useTheme)();
                return m.default.createElement(n.default, {
                    isCompactMode: a,
                    back: t
                }, f && m.default.createElement(h.default, {
                    title: o.default._("New! Opt in to get more frequent updates", null, {
                        hk: "3fgJDW"
                    }),
                    description: o.default._("Join our beta to get more frequent updates and test new features before they reach the public. Thank you for using the app and sharing your feedback!", null, {
                        hk: "1RMJ2n"
                    })
                }, ({ titleId: e, descriptionId: t }) => m.default.createElement(d.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: O,
                    onToggle: e => {
                        P(!O, {
                            userInitiated: !0
                        })
                    }
                })), p && m.default.createElement(h.default, C.select(T), ({ titleId: e, descriptionId: t }) => m.default.createElement(d.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: v,
                    onToggle: () => {
                        b(!v)
                    }
                })), y && m.default.createElement(h.default, {
                    title: o.default._("Enable Web to Desktop App Integrations", null, {
                        hk: "1hHyi3"
                    }),
                    description: o.default._("This setting improves the overall facebook.com experience when this application is running. This includes optionally disabling the new-message chime in the browser when the message is also received here.", null, {
                        hk: "4dG0yj"
                    })
                }, ({ titleId: e, descriptionId: t }) => m.default.createElement(d.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: S,
                    onToggle: e => {
                        k(!S, {
                            userInitiated: !0
                        })
                    }
                })), g && m.default.createElement(h.default, {
                    title: o.default._("Launch {app name} on startup", [o.default._param("app name", l.displayName)], {
                        hk: "bw6uo"
                    }),
                    description: o.default._("Have the {app name} app open automatically when you login to your computer.", [o.default._param("app name", l.displayName)], {
                        hk: "3DHRvU"
                    })
                }, ({ titleId: e, descriptionId: t }) => _ ? m.default.createElement(d.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: w.state === r.WindowsStartupTaskState.enabled,
                    disabled: null != w.error || w.state === r.WindowsStartupTaskState.disabledByPolicy || w.state === r.WindowsStartupTaskState.disabledByUser,
                    onToggle: e => {
                        E(e)
                    }
                }) : m.default.createElement(d.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: Boolean(null == M ? void 0 : M.openAtLogin),
                    onToggle: e => {
                        E(e)
                    }
                })))
            }
            ));
        t.default = v
    },
    2035: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { back: t, isCompactMode: a } = e;
                return (i.default.createElement(n.default, {
                    isCompactMode: a,
                    back: t
                }, r.default.map(({ href: e, text: t }) => i.default.createElement(c, {
                    key: e,
                    href: e
                }, t)), i.default.createElement(c, {
                    onClick: o.default.window.createLicenseWindow,
                    displayAsLink: !0
                }, l.default._("Third Party Notices", null, {
                    hk: "46Zuxx"
                }))))
            }
            ;
        var n = d(a(1870))
            , r = d(a(2036))
            , l = d(a(5))
            , o = d(a(9))
            , u = d(a(1))
            , i = d(a(0))
            , s = d(a(116));
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0,
            u.default)(s.default)(e => ({
                color: e.theme.semanticColors.textPrimary,
                marginTop: "0.5em",
                marginBottom: "0.5em"
            }))
    },
    2036: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n, r = (n = a(5)) && n.__esModule ? n : {
            default: n
        };
        var l = [{
            href: "https://www.workplace.com/legal/FB_Work_Privacy",
            text: r.default._("Privacy Policy", null, {
                hk: "2piEjE"
            })
        }, {
            href: "https://www.workplace.com/legal/FB_Work_AUP",
            text: r.default._("Acceptable Use Policy", null, {
                hk: "fpHR8"
            })
        }, {
            href: "https://www.workplace.com/legal/FB_Work_EnterpriseAgreement",
            text: r.default._("Workplace Terms of Service", null, {
                hk: "2T78uV"
            })
        }, {
            href: "https://www.workplace.com/legal/Workplace_GDPR_Addendum",
            text: r.default._("Workplace GDPR addendum", null, {
                hk: "2Yv1OZ"
            })
        }, {
            href: "https://www.workplace.com/legal/FB_Work_Cookies",
            text: r.default._("Cookies", null, {
                hk: "2HyeLT"
            })
        }];
        t.default = l
    },
    2037: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const t = (0,
                    o.default)()
                    , { back: a, isCompactMode: f } = e
                    , [p, m] = (0,
                        u.useGlobalSetting)("preferredLocaleKey")
                    , h = (0,
                        i.useMemo)(() => t.intl.getLocaleList().filter(e => !e.localeKey.includes("fb")), [t])
                    , g = (0,
                        i.useMemo)(() => ["os", ...h], [h])
                    , y = p ? h.findIndex(e => e.localeKey === p) + 1 : 0;
                return i.default.createElement(n.default, {
                    isCompactMode: f,
                    back: a
                }, i.default.createElement(c.default, {
                    title: "",
                    description: l.default._("Change the language {product_name} is displayed in. You must restart the application for the changes to take effect", [l.default._param("product_name", r.displayName)], {
                        hk: "4vH08o"
                    }).toString()
                }, ({ titleId: e, descriptionId: t }) => i.default.createElement(s.default, {
                    items: g.map(e => "os" === e ? d.default.systemLanguage : e.displayName),
                    initialSelectedIndex: y,
                    onSelectionChanged: (e, t) => {
                        "os" === g[t] ? m(null) : m(g[t].localeKey)
                    }
                })))
            }
            ;
        var n = p(a(1870))
            , r = a(83)
            , l = p(a(5))
            , o = p(a(102))
            , u = a(72)
            , i = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = f();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , s = p(a(160))
            , d = p(a(338))
            , c = p(a(1872));
        function f() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return f = function () {
                return e
            }
                ,
                e
        }
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    2038: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = c(a(2039))
            , r = c(a(2040))
            , l = c(a(1870))
            , o = c(a(5))
            , u = a(72)
            , i = c(a(0))
            , s = c(a(1872))
            , d = c(a(1875));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = function (e) {
            const { back: t, isCompactMode: a } = e
                , [c, f] = (0,
                    u.useUserSetting)("notifications.showPreviews")
                , [p, m] = (0,
                    u.useUserSetting)("notifications.useSound");
            return i.default.createElement(l.default, {
                back: t,
                isCompactMode: a
            }, i.default.createElement(n.default, null, o.default._("When You Get Notified", null, {
                hk: "3qnanR"
            })), i.default.createElement(r.default, null), i.default.createElement(n.default, null, o.default._("How You Get Notified", null, {
                hk: "2WagMe"
            })), i.default.createElement(s.default, {
                title: o.default._("Show previews", null, {
                    hk: "YK0Lr"
                }),
                description: o.default._("Show message previews when you're not using the app.", null, {
                    hk: "3WqXkY"
                })
            }, ({ titleId: e, descriptionId: t }) => i.default.createElement(d.default, {
                "aria-labelledby": e,
                "aria-describedby": t,
                value: c,
                onToggle: () => {
                    f(!c, {
                        userInitiated: !0
                    })
                }
            })), i.default.createElement(s.default, {
                title: o.default._("Notification Sounds", null, {
                    hk: "3Pj1T2"
                }),
                description: o.default._("Use sounds to notify you about incoming messages, calls or video chats.", null, {
                    hk: "1aOKOz"
                })
            }, ({ titleId: e, descriptionId: t }) => i.default.createElement(d.default, {
                "aria-labelledby": e,
                "aria-describedby": t,
                value: p,
                onToggle: () => {
                    m(!p, {
                        userInitiated: !0
                    })
                }
            })))
        };
        t.default = f
    },
    2039: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ children: e }) {
                return r.default.createElement(u, {
                    use: "title",
                    wrapText: !0
                }, e)
            }
            ;
        var n = o(a(1))
            , r = o(a(0))
            , l = o(a(4));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const u = (0,
            n.default)(l.default)({
                marginTop: 24,
                marginBottom: 12
            })
    },
    2040: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(39)
            , r = h(a(5))
            , l = h(a(1))
            , o = a(349)
            , u = a(11)
            , i = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = m();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , s = h(a(167))
            , d = h(a(103))
            , c = h(a(120))
            , f = h(a(191))
            , p = h(a(4));
        function m() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return m = function () {
                return e
            }
                ,
                e
        }
        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0,
            l.default)(p.default)(e => ({
                marginBottom: 3,
                color: e.theme.colors.base70
            }))
            , y = l.default.div({
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap"
            })
            , v = l.default.div({
                minWidth: "3em",
                marginRight: 12,
                paddingBottom: 12
            })
            , b = (0,
                l.default)(p.default)({
                    marginTop: 24,
                    marginBottom: 12
                })
            , w = l.default.div(e => ({
                opacity: e.disabled ? .5 : 1
            }));
        function M({ label: e, disabled: t, onChange: a, checked: n }) {
            return i.default.createElement(v, null, i.default.createElement(s.default, {
                label: e.toString(),
                checked: n,
                size: "small",
                disabled: t,
                onChange: a
            }))
        }
        const _ = {
            setNotificationSchedule: o.NotificationActions.setSchedule,
            setNotificationScheduleAlways: o.NotificationActions.setScheduleNotifyAlways
        };
        var E = (0,
            u.connect)((function (e) {
                return {
                    initialSchedule: (0,
                        o.getNotificationSchedule)(e),
                    initialNotifyAlways: (0,
                        o.isScheduleAlwaysEnabledSelector)(e)
                }
            }
            ), _)((function ({ initialNotifyAlways: e, initialSchedule: t, setNotificationSchedule: a, setNotificationScheduleAlways: l }) {
                const u = (0,
                    i.useMemo)(() => (0,
                        n.getFirstDayOfWeek)(), [])
                    , p = (0,
                        i.useMemo)(() => (0,
                            o.getScheduleDefault)(), [])
                    , [m, h] = (0,
                        i.useState)(e)
                    , [v, _] = (0,
                        i.useState)((0,
                            o.isScheduleAlwaysEnabled)(t))
                    , [E, S] = (0,
                        i.useState)(t)
                    , [k, O] = (0,
                        i.useState)(E.daily_start_seconds);
                (0,
                    i.useEffect)(() => {
                        m ? l() : v ? (_(!1),
                            S(p)) : a(E)
                    }
                        , [E, m, a, l, p, v, _]);
                const P = i.default.createElement(M, {
                    label: r.default._("Sun", null, {
                        hk: "1weJq"
                    }),
                    checked: !v && E.sunday,
                    onChange: e => S({
                        ...E,
                        sunday: e
                    }),
                    disabled: m
                });
                return (i.default.createElement(i.default.Fragment, null, i.default.createElement(s.default, {
                    label: r.default._("Receive notifications at any time", null, {
                        hk: "1jcHEA"
                    }),
                    checked: m,
                    onChange: e => h(e),
                    size: "small"
                }), i.default.createElement(w, {
                    disabled: m
                }, i.default.createElement(b, {
                    wrapText: !0
                }, r.default._("Only notify me between:", null, {
                    hk: "XbaQZ"
                })), i.default.createElement(c.default, null, i.default.createElement(d.default, {
                    style: {
                        marginRight: 12
                    }
                }, i.default.createElement(g, null, r.default._("From", null, {
                    hk: "XSq65"
                })), v ? i.default.createElement(f.default, {
                    timeSeconds: p.daily_start_seconds,
                    onTimeChange: () => { }
                    ,
                    disabled: m
                }) : i.default.createElement(f.default, {
                    timeSeconds: E.daily_start_seconds,
                    onTimeChange: e => {
                        S({
                            ...E,
                            daily_start_seconds: e
                        }),
                            O(e)
                    }
                    ,
                    disabled: m
                })), i.default.createElement(d.default, null, i.default.createElement(g, null, r.default._("To", null, {
                    hk: "3x5mwT"
                })), v ? i.default.createElement(f.default, {
                    timeSeconds: p.daily_end_seconds,
                    onTimeChange: () => { }
                    ,
                    disabled: m
                }) : i.default.createElement(f.default, {
                    timeSeconds: E.daily_end_seconds,
                    minSeconds: k,
                    onTimeChange: e => S({
                        ...E,
                        daily_end_seconds: e
                    }),
                    disabled: m
                }))), i.default.createElement(b, null, r.default._("On these days:", null, {
                    hk: "4valvy"
                })), i.default.createElement(y, null, "sun" === u && P, i.default.createElement(M, {
                    label: r.default._("Mon", null, {
                        hk: "3Q65rL"
                    }),
                    checked: E.monday,
                    onChange: e => S({
                        ...E,
                        monday: e
                    }),
                    disabled: m
                }), i.default.createElement(M, {
                    label: r.default._("Tue", null, {
                        hk: "1G4PVC"
                    }),
                    checked: E.tuesday,
                    onChange: e => S({
                        ...E,
                        tuesday: e
                    }),
                    disabled: m
                }), i.default.createElement(M, {
                    label: r.default._("Wed", null, {
                        hk: "3yrbSI"
                    }),
                    checked: E.wednesday,
                    onChange: e => S({
                        ...E,
                        wednesday: e
                    }),
                    disabled: m
                }), i.default.createElement(M, {
                    label: r.default._("Thu", null, {
                        hk: "3XtRFo"
                    }),
                    checked: E.thursday,
                    onChange: e => S({
                        ...E,
                        thursday: e
                    }),
                    disabled: m
                }), i.default.createElement(M, {
                    label: r.default._("Fri", null, {
                        hk: "3zqFwj"
                    }),
                    checked: E.friday,
                    onChange: e => S({
                        ...E,
                        friday: e
                    }),
                    disabled: m
                }), i.default.createElement(M, {
                    label: r.default._("Sat", null, {
                        hk: "HuSum"
                    }),
                    checked: !v && E.saturday,
                    onChange: e => S({
                        ...E,
                        saturday: e
                    }),
                    disabled: m
                }), "mon" === u && P))))
            }
            ));
        t.default = E
    },
    2041: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = u(a(2042))
            , r = u(a(2043))
            , l = u(a(588))
            , o = u(a(0));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = function (e) {
            const { back: t, isCompactMode: a } = e;
            return (0,
                l.default)() ? o.default.createElement(n.default, {
                    back: t,
                    isCompactMode: a
                }) : o.default.createElement(r.default, {
                    back: t,
                    isCompactMode: a
                })
        };
        t.default = i
    },
    2042: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = c(a(5))
            , r = a(72)
            , l = a(139)
            , o = c(a(1872))
            , u = c(a(1875))
            , i = c(a(1870))
            , s = a(11)
            , d = c(a(0));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = (0,
            s.connect)((function (e) {
                return {
                    enableMicrophoneNoiseSuppressionFeature: (0,
                        l.isGatekeeperEnabled)(e, "archon_enable_microphone_noise_suppression")
                }
            }
            ))((function (e) {
                const { back: t, isCompactMode: a, enableMicrophoneNoiseSuppressionFeature: l } = e
                    , [s, c] = (0,
                        r.useUserSetting)("rtcPreferences.enableNoiseSuppression");
                return d.default.createElement(i.default, {
                    back: t,
                    isCompactMode: a
                }, l && d.default.createElement(o.default, {
                    title: n.default._("Remove Microphone Noise", null, {
                        hk: "3nsa30"
                    }).toString(),
                    description: n.default._("Reduces background noise from your microphone. Turn this off if you want others to hear music or other sounds you're playing. You will need to restart the app to see the changes take effect.", null, {
                        hk: "440oXg"
                    })
                }, ({ titleId: e, descriptionId: t }) => d.default.createElement(u.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: s,
                    onToggle: e => c(e, {
                        userInitiated: !0
                    })
                })))
            }
            ));
        t.default = f
    },
    2043: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = h(a(1870))
            , r = a(616)
            , l = h(a(5))
            , o = a(72)
            , u = a(49)
            , i = h(a(160))
            , s = m(a(82))
            , d = a(11)
            , c = m(a(0))
            , f = h(a(1872));
        function p() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return p = function () {
                return e
            }
                ,
                e
        }
        function m(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = p();
            if (t && t.has(e))
                return t.get(e);
            var a = {}
                , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var r in e)
                if (Object.prototype.hasOwnProperty.call(e, r)) {
                    var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                    l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                }
            return a.default = e,
                t && t.set(e, a),
                a
        }
        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function g(e, t) {
            const a = t.findIndex(t => t.id === e);
            return Math.max(a, 0)
        }
        const y = {
            beginFetchMediaDevices: u.RtcActions.beginFetchMediaDevices
        };
        var v = (0,
            d.connect)((function (e) {
                return {
                    isLoading: (0,
                        u.getIsLoadingMediaDevices)(e),
                    mediaDevices: (0,
                        u.getMediaDevices)(e)
                }
            }
            ), y)((function (e) {
                const { back: t, isCompactMode: a, isLoading: u, mediaDevices: d, beginFetchMediaDevices: p } = e
                    , [m, h] = (0,
                        o.useUserSetting)("rtcPreferences.videoInput")
                    , [y, v] = (0,
                        o.useUserSetting)("rtcPreferences.audioInput")
                    , [b, w] = (0,
                        o.useUserSetting)("rtcPreferences.audioOutput")
                    , [M, _] = (0,
                        c.useState)([])
                    , [E, S] = (0,
                        c.useState)([])
                    , [k, O] = (0,
                        c.useState)([])
                    , P = (e, t, a, n) => {
                        const l = e.findIndex(e => e.id === r.DefaultDeviceId) >= 0
                            , o = n === r.DefaultDeviceId;
                        a(e),
                            !l && o && e.length > 0 && t(e[0].id, {
                                userInitiated: !1
                            })
                    }
                    ;
                return (0,
                    c.useEffect)(() => {
                        p()
                    }
                        , []),
                    (0,
                        c.useEffect)(() => {
                            u || (P(d.filter(e => "videoinput" == e.kind), h, _, m),
                                P(d.filter(e => "audioinput" == e.kind), v, S, m),
                                P(d.filter(e => "audiooutput" == e.kind), w, O, m))
                        }
                            , [u]),
                    c.default.createElement(n.default, {
                        isCompactMode: a,
                        back: t
                    }, c.default.createElement(f.default, {
                        title: l.default._("Camera", null, {
                            hk: "2kKEBG"
                        }).toString()
                    }, () => u ? c.default.createElement(s.default, {
                        size: s.SpinnerSize.Small
                    }) : c.default.createElement(i.default, {
                        items: M.map(e => e.label),
                        initialSelectedIndex: g(m, M),
                        onSelectionChanged: (e, t) => {
                            const a = M[t];
                            h(a.id, {
                                userInitiated: !0
                            })
                        }
                    })), c.default.createElement(f.default, {
                        title: l.default._("Microphone", null, {
                            hk: "2EPiRu"
                        }).toString()
                    }, () => u ? c.default.createElement(s.default, {
                        size: s.SpinnerSize.Small
                    }) : c.default.createElement(i.default, {
                        items: E.map(e => e.label),
                        initialSelectedIndex: g(y, E),
                        onSelectionChanged: (e, t) => {
                            const a = E[t];
                            v(a.id, {
                                userInitiated: !0
                            })
                        }
                    })), c.default.createElement(f.default, {
                        title: l.default._("Audio Output", null, {
                            hk: "4x7aC8"
                        }).toString()
                    }, () => u ? c.default.createElement(s.default, {
                        size: s.SpinnerSize.Small
                    }) : c.default.createElement(i.default, {
                        items: k.map(e => e.label),
                        initialSelectedIndex: g(b, k),
                        onSelectionChanged: (e, t) => {
                            const a = k[t];
                            w(a.id, {
                                userInitiated: !0
                            })
                        }
                    })))
            }
            ));
        t.default = v
    },
    2044: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = p(a(1870))
            , r = p(a(9))
            , l = p(a(1936))
            , o = a(23)
            , u = p(a(16))
            , i = p(a(60))
            , s = a(11)
            , d = p(a(0))
            , c = p(a(1872))
            , f = p(a(1875));
        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = {
            runWatchdog: o.InboxActions.sync.forceSyncWatchdogRun
        };
        var h = (0,
            s.connect)(null, m)((function (e) {
                const { isCompactMode: t, back: a, runWatchdog: o } = e
                    , [s, p] = (0,
                        l.default)("force_watchdog_fail")
                    , [m, h] = (0,
                        l.default)("watchdog_run_interval");
                return d.default.createElement(n.default, {
                    isCompactMode: t,
                    back: a
                }, d.default.createElement(c.default, {
                    title: "Force sync watchdog to fail",
                    description: "Failure in this context means watchdog completes but finds sync problems."
                }, ({ titleId: e, descriptionId: t }) => d.default.createElement(f.default, {
                    value: !!s,
                    onToggle: () => {
                        const e = !s;
                        r.default.log.debug(`INTERN SETTINGS: Setting watchdog failure forcing override = ${e}.`),
                            p(e)
                    }
                })), d.default.createElement(c.default, {
                    title: "Sync watchdog interval (seconds)",
                    description: "Changes to this interval will not be applied until the previous delay is completed."
                }, ({ titleId: e, descriptionId: t }) => d.default.createElement(i.default, {
                    value: m ? m.toString() : "",
                    onChange: e => {
                        const t = Number.parseInt(e) || void 0;
                        r.default.log.debug(`INTERN SETTINGS: Setting watchdog interval to ${t} seconds.`),
                            h(t)
                    }
                })), d.default.createElement(c.default, {
                    title: "Run watchdog",
                    description: "Does not reset the delay for next watchdog run."
                }, ({ titleId: e, descriptionId: t }) => d.default.createElement(u.default, {
                    "aria-label": "Run",
                    telemetryName: "run-watchdog-button",
                    caption: "Run",
                    onClick: o
                })))
            }
            ));
        t.default = h
    },
    2045: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = v(a(1875))
            , r = v(a(1870))
            , l = a(1932)
            , o = a(83)
            , u = a(165)
            , i = v(a(5))
            , s = a(72)
            , d = a(32)
            , c = v(a(658))
            , f = a(596)
            , p = a(11)
            , m = v(a(0))
            , h = v(a(160))
            , g = v(a(338))
            , y = v(a(1872));
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var b = (0,
            p.connect)((function (e) {
                return {
                    enableDenseThreadListSetting: (0,
                        d.isGatekeeperEnabled)(e, "archon_enable_dense_thread_list")
                }
            }
            ))((function (e) {
                const { back: t, isCompactMode: a, enableDenseThreadListSetting: d } = e
                    , [p, v] = (0,
                        s.useUserSetting)("themePreference")
                    , [b, w] = (0,
                        s.useUserSetting)("uiScale")
                    , [M, _] = (0,
                        s.useUserSetting)("denseThreadList")
                    , [E, S] = (0,
                        s.useGlobalSetting)("enableHardwareAcceleration")
                    , [k, O] = (0,
                        s.useUserSetting)("emojiSkintone")
                    , P = ["os", ...Object.values((0,
                        u.getColorThemes)()).map(e => e.name)]
                    , T = i.default._("Theme", null, {
                        hk: "2StXCe"
                    })
                    , C = i.default._("Emoji Skintone", null, {
                        hk: "3UOajV"
                    })
                    , I = i.default._("Zoom Level", null, {
                        hk: "33o2ky"
                    })
                    , j = i.default._("Compact Inbox", null, {
                        hk: "1sSm0I"
                    })
                    , x = i.default._("Hardware Acceleration", null, {
                        hk: "2sqlHr"
                    });
                return m.default.createElement(r.default, {
                    isCompactMode: a,
                    back: t
                }, m.default.createElement(m.default.Fragment, null, m.default.createElement(y.default, {
                    title: T
                }, () => m.default.createElement(h.default, {
                    items: P.map(e => "os" === e ? g.default.systemDefault : (0,
                        f.getThemeLabel)((0,
                            u.getColorTheme)(e).name)),
                    initialSelectedIndex: P.indexOf(p),
                    selectedIndex: P.indexOf(p),
                    onSelectionChanged: (e, t) => {
                        v(P[t], {
                            userInitiated: !0
                        })
                    }
                })), m.default.createElement(y.default, {
                    title: C
                }, () => m.default.createElement(c.default, {
                    selectedSkintone: k,
                    onSkintoneSelected: e => O(e, {
                        userInitiated: !0
                    })
                })), m.default.createElement(y.default, {
                    title: I,
                    description: i.default._("Make things in {app name} look larger or smaller", [i.default._param("app name", o.displayName)], {
                        hk: "4vXwIB"
                    })
                }, ({ titleId: e, descriptionId: t }) => m.default.createElement(h.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    items: l.UIScalingOptions.map(e => function (e) {
                        switch (e) {
                            case "small":
                                return i.default._("Small (80%)", null, {
                                    hk: "14wElj"
                                }).toString();
                            case "normal":
                                return i.default._("Normal (100%)", null, {
                                    hk: "3r1zxL"
                                }).toString();
                            case "large":
                                return i.default._("Large (125%)", null, {
                                    hk: "85zqw"
                                }).toString();
                            case "x-large":
                                return i.default._("Extra Large (150%)", null, {
                                    hk: "3wK1yJ"
                                }).toString();
                            case "xx-large":
                                return i.default._("Extra-Extra Large (200%)", null, {
                                    hk: "3DeYwl"
                                }).toString()
                        }
                        return ""
                    }(e)),
                    initialSelectedIndex: l.UIScalingOptions.indexOf(b),
                    selectedIndex: l.UIScalingOptions.indexOf(b),
                    onSelectionChanged: (e, t) => {
                        w(l.UIScalingOptions[t], {
                            userInitiated: !0
                        })
                    }
                })), d && m.default.createElement(y.default, {
                    title: j,
                    description: i.default._("Hides message previews to display more threads", null, {
                        hk: "nbZ8J"
                    }).toString()
                }, ({ titleId: e, descriptionId: t }) => m.default.createElement(n.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: M,
                    onToggle: () => {
                        _(!M, {
                            userInitiated: !0
                        })
                    }
                })), m.default.createElement(y.default, {
                    title: x,
                    description: i.default._("You will need to restart the app to see the changes take effect.", null, {
                        hk: "214Tcc"
                    }).toString()
                }, ({ titleId: e, descriptionId: t }) => m.default.createElement(n.default, {
                    "aria-labelledby": e,
                    "aria-describedby": t,
                    value: E,
                    onToggle: () => S(!E)
                }))))
            }
            ));
        t.default = b
    },
    2046: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var n = a(596)
            , r = a(24)
            , l = U(a(187))
            , o = U(a(59))
            , u = a(8)
            , i = a(592)
            , s = a(83)
            , d = a(165)
            , c = U(a(5))
            , f = U(a(102))
            , p = U(a(2047))
            , m = a(72)
            , h = U(a(118))
            , g = a(28)
            , y = a(168)
            , v = a(61)
            , b = U(a(1))
            , w = a(2048)
            , M = U(a(2049))
            , _ = U(a(360))
            , E = U(a(78))
            , S = U(a(163))
            , k = U(a(2050))
            , O = U(a(2051))
            , P = U(a(620))
            , T = U(a(358))
            , C = U(a(2052))
            , I = U(a(2053))
            , j = U(a(2054))
            , x = a(32)
            , R = a(11)
            , A = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = B();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(0))
            , D = U(a(2))
            , N = U(a(45))
            , L = U(a(186))
            , W = U(a(338))
            , K = U(a(2055))
            , z = U(a(1935))
            , F = a(6);
        function B() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return B = function () {
                return e
            }
                ,
                e
        }
        function U(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function G() {
            return (G = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        const V = e => A.default.createElement(D.default, {
            css: {
                paddingLeft: 12
            }
        }, A.default.createElement(L.default, G({}, e, {
            css: void 0
        })));
        b.default.div(e => ({
            width: 80,
            height: 24,
            color: e.theme.semanticColors.textWhite,
            backgroundColor: e.theme.colors.blue,
            textAlign: "center",
            fontSize: "0.7em",
            fontWeight: 700,
            textTransform: "uppercase",
            borderRadius: "999em",
            padding: "4px 0",
            marginLeft: 8
        }));
        const H = {
            openPortalWindow: g.AppContextActions.openOrFocusPortalWindow,
            startLogout: y.AuthenticationActions.startLogout
        };
        var q = (0,
            R.connect)((function (e) {
                return {
                    userID: (0,
                        v.requireAuthenticationData)(e).userID,
                    enableBetaOptIn: (0,
                        x.isGatekeeperEnabled)(e, "archon_enable_beta_opt_in")
                }
            }
            ), H)((function (e) {
                const { userID: t, enableBetaOptIn: a, activateDetailView: g, isCompactMode: y, openPortalWindow: v, startLogout: b } = e
                    , x = (0,
                        f.default)()
                    , R = (0,
                        F.useTheme)()
                    , [L] = (0,
                        m.useGlobalSetting)("preferredLocaleKey")
                    , B = (0,
                        A.useMemo)(() => x.intl.getLocaleList(), [x])
                    , U = (0,
                        A.useMemo)(() => {
                            if (null == L)
                                return W.default.systemLanguage;
                            {
                                const e = B.find(e => e.localeKey === L);
                                return e ? e.displayName : ""
                            }
                        }
                            , [L, B])
                    , [G] = (0,
                        m.useUserSetting)("notifications.doNotDisturb")
                    , [H] = (0,
                        m.useUserSetting)("showAsAvailable")
                    , [q] = (0,
                        m.useUserSetting)("themePreference")
                    , { globalSettings: { enableSystemTray: J, enableOpenAtLogin: Q }, systemSettings: { notificationSettings: Y } } = (0,
                        h.default)()
                    , $ = (0,
                        w.shouldShowOSNotificationWarning)(Y, G)
                    , X = a || J || Q ? A.default.createElement(K.default, {
                        color: R.colors.base80,
                        iconClass: I.default,
                        iconColor: R.colors.base10,
                        settingsPaneKey: "general",
                        activateDetailView: g,
                        isCompactMode: y
                    }) : null
                    , Z = A.default.createElement(K.default, {
                        color: R.colors.green,
                        iconClass: M.default,
                        settingsPaneKey: "availability",
                        subtitle: H ? W.default.on : W.default.off,
                        activateDetailView: g,
                        isCompactMode: y
                    })
                    , ee = R.select({
                        mac: c.default._("Check your System Preferences to enable {App name} notifications.", [c.default._param("App name", s.displayName)], {
                            hk: "4wJU39"
                        }),
                        windows: c.default._("Check your Windows settings to enable {App name} notifications.", [c.default._param("App name", s.displayName)], {
                            hk: "XmHkd"
                        })
                    })
                    , te = A.default.createElement(K.default, {
                        color: R.colors.purple,
                        iconClass: _.default,
                        settingsPaneKey: "notifications",
                        subtitle: G ? W.default.off : W.default.on,
                        activateDetailView: g,
                        isCompactMode: y,
                        statusIcon: $ ? S.default : void 0,
                        tooltipText: $ ? ee : void 0
                    })
                    , ae = A.default.createElement(K.default, {
                        color: R.colors.blue,
                        iconClass: O.default,
                        settingsPaneKey: "locale",
                        subtitle: U,
                        activateDetailView: g,
                        isCompactMode: y
                    })
                    , ne = A.default.createElement(K.default, {
                        color: R.colors.base80,
                        iconClass: T.default,
                        iconColor: R.colors.base10,
                        settingsPaneKey: "theme",
                        subtitle: "os" === q ? W.default.systemDefault : (0,
                            n.getThemeLabel)((0,
                                d.getColorTheme)(q).name),
                        activateDetailView: g,
                        isCompactMode: y
                    })
                    , re = (0,
                        p.default)() ? A.default.createElement(K.default, {
                            color: R.colors.green,
                            iconClass: E.default,
                            settingsPaneKey: "rtc",
                            activateDetailView: g,
                            isCompactMode: y
                        }) : null
                    , le = A.default.createElement(K.default, {
                        color: R.colors.purple,
                        iconClass: P.default,
                        settingsPaneKey: "log-out",
                        onClick: async () => {
                            0 === (await x.platform.showMessageBox({
                                type: "info",
                                message: c.default._("Are you sure you want to log out?", null, {
                                    hk: "21BO6c"
                                }).toString(),
                                noLink: !0,
                                cancelId: 1,
                                buttons: [c.default._("Log Out", null, {
                                    hk: "1vf1wY"
                                }).toString(), c.default._("Cancel", null, {
                                    hk: "3xkGXq"
                                }).toString()]
                            })).response && (x.metrics.trackStrictEventImmediate((0,
                                r.ClientAuthenticationEvent)({
                                    action: "logOut",
                                    channel: "Manual"
                                })),
                                b())
                        }
                        ,
                        activateDetailView: g,
                        isCompactMode: y
                    })
                    , oe = A.default.createElement(K.default, {
                        color: R.colors.blue,
                        enabled: !0,
                        iconClass: I.default,
                        onClick: () => {
                            x.platform.openExternalURL((0,
                                l.default)((0,
                                    i.getHostName)(), "settings"), t)
                        }
                        ,
                        settingsPaneKey: "account-settings",
                        activateDetailView: g,
                        isCompactMode: y
                    })
                    , ue = A.default.createElement(K.default, {
                        color: R.colors.coral,
                        iconClass: S.default,
                        settingsPaneKey: "report-problem",
                        onClick: () => {
                            v({
                                portalKey: u.PortalKey.Feedback
                            })
                        }
                        ,
                        activateDetailView: g,
                        isCompactMode: y
                    })
                    , ie = A.default.createElement(K.default, {
                        color: R.colors.sky,
                        enabled: !0,
                        iconClass: C.default,
                        onClick: () => {
                            x.platform.openExternalURL((0,
                                o.default)({
                                    messenger: "https://www.facebook.com/help/messenger-app/?helpref=about_content",
                                    workchat: "https://www.workplace.com/help/work/682468881954082/"
                                }))
                        }
                        ,
                        settingsPaneKey: "help",
                        activateDetailView: g,
                        isCompactMode: y
                    })
                    , se = A.default.createElement(K.default, {
                        color: R.colors.base70,
                        iconClass: S.default,
                        enabled: !0,
                        settingsPaneKey: "legal-policies",
                        activateDetailView: g,
                        isCompactMode: y
                    });
                return K.default,
                    R.colors.steel,
                    k.default,
                    K.default,
                    R.colors.steel,
                    j.default,
                    A.default.createElement(D.default, {
                        css: {
                            flex: 1
                        }
                    }, A.default.createElement(z.default, {
                        forward: g,
                        isCompactMode: y
                    }), A.default.createElement(N.default, null, A.default.createElement(V, {
                        title: W.default.preferences.toString()
                    }), X, Z, te, ne, re, ae, !1, A.default.createElement(V, {
                        title: W.default.accountAndSupport.toString()
                    }), le, oe, ue, ie, se))
            }
            ));
        t.default = q
    },
    2047: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                const e = (0,
                    o.useSelector)(e => (0,
                        l.isGatekeeperEnabled)(e, "archon_enable_microphone_noise_suppression"));
                return !(0,
                    r.default)() || e
            }
            ;
        var n, r = (n = a(588)) && n.__esModule ? n : {
            default: n
        }, l = a(139), o = a(11)
    },
    2048: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.isOSNotificationSettingOff = o,
            t.shouldShowOSNotificationWarning = function (e, t) {
                return null != e && o(e) && !t
            }
            ;
        var n, r = a(8), l = (n = a(9)) && n.__esModule ? n : {
            default: n
        };
        function o(e) {
            const t = l.default.platform.isMacPlatform()
                , a = l.default.platform.isWindowsPlatform();
            return t && (null == e ? void 0 : e.notificationsSetting) === r.MacNotificationSetting.Disabled || a && null != e.notificationsSetting && e.notificationsSetting !== r.WindowsNotificationSetting.enabled
        }
    },
    2049: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M22.278 25.778a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z"
                }), r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M28.734 20.414c-.071.32-.435.463-.735.331A5.5 5.5 0 0020.745 28c.133.3-.011.664-.33.735-.778.174-1.586.266-2.415.266-6.075 0-11-4.925-11-11S11.925 7 18 7s11 4.925 11 11c0 .83-.092 1.637-.266 2.414z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2050: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M22 18a4 4 0 11-8 0 4 4 0 018 0z"
                }), r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M30.576 19.38a2.451 2.451 0 000-2.76C27.486 12.07 22.057 9 18 9s-9.486 3.07-12.577 7.62a2.451 2.451 0 000 2.76C8.513 23.93 13.943 27 18 27s9.486-3.07 12.576-7.62zM24 18a6 6 0 11-12 0 6 6 0 0112 0z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2051: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M17.793 10.02c.411-.442.882-.949 1.749-.949 2.921 0 4.125 2.427 4.125 2.97 0 .317-.152.46-.459.46-.364 0-.654-.393-.966-.815-.363-.49-.755-1.02-1.325-1.02-.346 0-.459.357-.459 1.376 0 .374-.122.558-.24.736-.11.167-.218.33-.218.639 0 .374.145.636.273.866.098.177.185.335.185.509 0 .28-.164.458-.458.458-.25 0-.48-.236-.707-.468-.221-.226-.439-.449-.668-.449-.288 0-.458.177-.458.459 0 .208.09.357.19.523.126.208.268.442.268.852 0 .437-.338.667-.68.9-.346.236-.695.474-.695.933 0 .324.127.549.247.762.108.193.211.376.211.613 0 .3-.293.458-.916.458-.773 0-1.138-.58-1.457-1.086-.249-.396-.47-.747-.835-.747-.348 0-.62.112-.895.225-.28.116-.566.233-.938.233-.537 0-.661-.38-.779-.742-.105-.324-.206-.633-.596-.633-.604 0-.873.828-1.116 1.576-.2.614-.382 1.174-.718 1.174C9.11 19.833 9 19.195 9 18c0-4.122 2.805-7.792 5.958-7.792.367 0 .622.11.882.223.27.117.543.236.952.236.401 0 .683-.304 1.001-.646zm5.415 3.855c-.657 0-.916.382-.916.917 0 .786-.115.916-.459.916-.616 0-.916.575-.916.917 0 .327.192.458.458.458.192 0 .278-.096.371-.2.11-.124.23-.258.546-.258.615 0 .916-.356.916-.917 0-.795.333-.922.597-1.023.175-.067.32-.122.32-.352 0-.326-.372-.458-.917-.458zm.917 8.708c-.233 0-.25.174-.27.386-.018.176-.037.38-.188.531-.337.337-.459.53-.459.917 0 .276.134.458.459.458.35 0 .916-.561.916-1.375 0-.67-.165-.917-.458-.917zm-7.333 2.75c.347 0 .664-.201 1-.415.381-.243.787-.501 1.291-.501.374 0 .645.228.915.457.271.23.543.46.919.46.873 0 1.375-.735 1.375-1.834 0-.986-.764-2.292-1.375-2.292-.178 0-.217.157-.263.34-.065.261-.144.577-.654.577-.506 0-.582-.31-.645-.57-.046-.187-.085-.347-.272-.347-1.022 0-2.75 1.637-2.75 3.209 0 .687.133.916.459.916zm4.125-6.875c.865 0 1.833.803 1.833 1.375 0 .269-.163.459-.458.459-.298 0-.446-.084-.616-.18-.227-.128-.494-.279-1.218-.279-.664 0-.916-.11-.916-.458 0-.41.439-.917 1.375-.917zM18.004 29c-6.075 0-11-4.925-11-11s4.925-11 11-11c6.076 0 11 4.925 11 11s-4.924 11-11 11z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2052: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-1.311-15.93c-.314.192-.585.482-.832.892a1 1 0 01-1.713-1.032c.365-.606.844-1.164 1.502-1.566.663-.406 1.446-.614 2.354-.614 2.396 0 4.5 1.565 4.5 4 0 1.865-1.227 2.827-2.065 3.483l-.067.053c-.913.717-1.368 1.13-1.368 1.964a1 1 0 11-2 0c0-1.865 1.227-2.827 2.065-3.483l.067-.053c.913-.717 1.368-1.13 1.368-1.964 0-1.043-.896-2-2.5-2-.592 0-1.003.132-1.311.32zM19.25 24a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2053: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M19.842 7.526A1.5 1.5 0 0018.419 6.5h-.838a1.5 1.5 0 00-1.423 1.026l-.352 1.056c-.157.472-.541.827-1.006 1.003a8.93 8.93 0 00-.487.202c-.453.204-.976.225-1.42.002l-.997-.498a1.5 1.5 0 00-1.732.281l-.592.592a1.5 1.5 0 00-.28 1.732l.497.996c.223.445.202.968-.002 1.421-.072.16-.139.323-.202.487-.176.465-.531.849-1.003 1.006l-1.056.352A1.5 1.5 0 006.5 17.581v.838a1.5 1.5 0 001.026 1.423l1.056.352c.472.157.827.541 1.003 1.006.063.164.13.327.202.487.204.453.225.976.002 1.42l-.498.997a1.5 1.5 0 00.281 1.732l.593.592a1.5 1.5 0 001.73.28l.998-.497c.444-.223.967-.202 1.42.002.16.072.323.139.487.202.465.176.849.531 1.006 1.003l.352 1.056a1.5 1.5 0 001.423 1.026h.838a1.5 1.5 0 001.423-1.026l.352-1.056c.157-.472.541-.827 1.006-1.003.164-.063.327-.13.486-.202.454-.204.977-.225 1.421-.002l.997.498a1.5 1.5 0 001.732-.281l.592-.592a1.5 1.5 0 00.28-1.732l-.497-.996c-.223-.445-.202-.968.002-1.421.072-.16.139-.323.202-.487.176-.465.531-.849 1.003-1.006l1.056-.352a1.5 1.5 0 001.026-1.423v-.838a1.5 1.5 0 00-1.026-1.423l-1.056-.352c-.472-.157-.827-.541-1.003-1.006a8.991 8.991 0 00-.202-.487c-.204-.453-.225-.976-.002-1.42l.498-.997a1.5 1.5 0 00-.281-1.732l-.593-.592a1.5 1.5 0 00-1.73-.28l-.998.497c-.444.223-.967.202-1.42-.002a8.938 8.938 0 00-.487-.202c-.465-.176-.849-.531-1.006-1.003l-.352-1.056zM18 23.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2054: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M8.34 10.61c-.52.227-.84.75-.84 1.319v.073C7.5 23 15 29 18 29s10.5-6 10.5-16.998v-.073c0-.569-.32-1.092-.84-1.319-.809-.351-1.652-.655-2.529-.972-1.918-.692-4-1.444-6.247-2.88a1.644 1.644 0 00-1.768 0c-2.246 1.436-4.329 2.188-6.247 2.88-.877.317-1.72.62-2.529.973z"
                }))
            }
            ;
        var n, r = (n = a(0)) && n.__esModule ? n : {
            default: n
        }
    },
    2055: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const t = (0,
                    u.useTheme)()
                    , { color: a, enabled: d = !0, iconClass: c, iconColor: h, isCompactMode: g, onClick: y, activateDetailView: v, settingsPaneKey: b, subtitle: w, statusIcon: M, tooltipText: _ } = e
                    , { selectedPane: E, setSelectedPane: S } = (0,
                        o.useSettingsNav)()
                    , k = o.SettingsTitleByKey[b]
                    , O = c
                    , P = O && r.default.createElement(p, {
                        color: a
                    }, r.default.createElement(O, {
                        size: 26,
                        color: h || t.semanticColors.textWhite
                    }))
                    , T = (0,
                        n.default)(l.FocusableView)(e => ({
                            flexDirection: "row",
                            alignItems: "center"
                        }))
                    , C = M
                    , I = C && r.default.createElement(C, {
                        size: 16,
                        color: t.colors.base70
                    });
                let j = I;
                if (C && _) {
                    const e = r.default.createElement(s.default, {
                        use: "caption",
                        color: t.semanticColors.textPrimary
                    }, _);
                    j = r.default.createElement(m, null, r.default.createElement(i.default, {
                        delay: 1e3,
                        tooltipProps: {
                            children: e
                        }
                    }, I))
                }
                return (r.default.createElement(f, {
                    isCompactMode: g,
                    selected: null != b && E === b
                }, r.default.createElement(T, {
                    role: "button",
                    disabled: !d,
                    onActivate: d ? y || (b ? () => {
                        S(b),
                            v()
                    }
                        : null) : null
                }, P, r.default.createElement(l.default, {
                    css: {
                        flex: 1
                    }
                }, r.default.createElement(s.default, {
                    use: "body-semibold",
                    wrapText: !0
                }, k), r.default.createElement(s.default, {
                    use: "subtext"
                }, w)), j)))
            }
            ;
        var n = c(a(1))
            , r = c(a(0))
            , l = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = d();
                if (t && t.has(e))
                    return t.get(e);
                var a = {}
                    , n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var l = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                        l && (l.get || l.set) ? Object.defineProperty(a, r, l) : a[r] = e[r]
                    }
                a.default = e,
                    t && t.set(e, a);
                return a
            }(a(2))
            , o = a(1880)
            , u = a(6)
            , i = c(a(73))
            , s = c(a(4));
        function d() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return d = function () {
                return e
            }
                ,
                e
        }
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0,
            n.default)(l.default)(e => ({
                width: "100%",
                height: 48,
                paddingLeft: 12,
                paddingTop: 8,
                paddingBottom: 8,
                paddingRight: 8,
                backgroundColor: e.selected && !e.isCompactMode ? e.theme.semanticColors.bgSelected : void 0
            }))
            , p = (0,
                n.default)(l.default)(e => ({
                    borderRadius: "50%",
                    backgroundColor: e.color || e.theme.colors.green,
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    marginRight: 12
                }))
            , m = (0,
                n.default)(l.default)({
                    paddingRight: 4
                })
    },
    2056: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LoggingModule = t._loggingModule = void 0;
        var n, r = a(2057), l = (n = a(2059)) && n.__esModule ? n : {
            default: n
        }, o = a(21), u = a(23);
        const i = {
            id: "logging",
            reducerMap: {
                logging: r.LoggingReducer
            },
            sagas: [l.default]
        };
        t._loggingModule = i;
        const s = [o.AuthenticationModule, u.InboxModule, i];
        t.LoggingModule = s
    },
    2057: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.LoggingReducer = void 0;
        var n = a(2058)
            , r = a(162)
            , l = a(8);
        const o = (0,
            a(51).makeReducer)((0,
                n.getDefaultLoggingState)(), (e, t) => {
                    switch (t.type) {
                        case r.LoggingActions.updateMessageReadAlreadyLogged.type:
                            {
                                const { threadKey: a, earliestMessageTimestamp: n, latestMessageTimestamp: r } = t.payload;
                                e.threadLoggingInfo[a] || (e.threadLoggingInfo[a] = {
                                    messageReadAlreadyLogged: {
                                        earliestMessageTimestamp: Number.POSITIVE_INFINITY,
                                        latestMessageTimestamp: 0
                                    }
                                });
                                const l = e.threadLoggingInfo[a].messageReadAlreadyLogged;
                                l.earliestMessageTimestamp = Math.min(l.earliestMessageTimestamp, n),
                                    l.latestMessageTimestamp = Math.max(l.latestMessageTimestamp, r);
                                break
                            }
                        case r.LoggingActions.createMessageSendInfo.type:
                            {
                                const { offlineThreadingIds: a, attachmentInfo: n, startingNewThread: r, sendSource: l } = t.payload;
                                a.map(t => e.messageSendInfo[t] = {
                                    sentTimestamp: Date.now(),
                                    hasAttachment: null != n && null != n[t],
                                    attachmentTypes: n && n[t] ? n[t].attachmentTypes : [],
                                    numberAttachments: n && n[t] ? n[t].numberAttachments : 0,
                                    totalAttachmentSize: n && n[t] ? n[t].totalAttachmentSize : 0,
                                    startingNewThread: r || !1,
                                    sendSource: l || null
                                });
                                break
                            }
                        case r.LoggingActions.updateMessageSendServerReceivedInfo.type:
                            for (const a in t.payload.loggingInfo) {
                                const { messages: n, deliveryInfo: r } = t.payload.loggingInfo[a]
                                    , o = e => e.sendStatusV2 === l.MessageSendStatus.ServerReceived && e.timestampMs > r.latestDelivery
                                    , u = t => {
                                        const a = e.messageSendInfo[t.offlineThreadingId];
                                        a && !a.serverReceivedTimestamp && (a.serverReceivedTimestamp = Date.now())
                                    }
                                    ;
                                n.filter(o).forEach(u)
                            }
                            break;
                        case r.LoggingActions.updateMessageSendDeliveredInfoAndLog.type:
                            for (const a in t.payload.loggingInfo) {
                                const { messages: n, deliveryInfo: r } = t.payload.loggingInfo[a]
                                    , o = e => e.sendStatusV2 === l.MessageSendStatus.ServerReceived && e.timestampMs <= r.latestDelivery
                                    , u = t => {
                                        const a = e.messageSendInfo[t.offlineThreadingId];
                                        a && !a.deliveredTimestamp && (a.serverReceivedTimestamp || (a.serverReceivedTimestamp = Date.now()),
                                            a.deliveredTimestamp = Date.now(),
                                            a.messageId = t.messageId)
                                    }
                                    ;
                                n.filter(o).forEach(u)
                            }
                            break;
                        case r.LoggingActions.cleanUpMessageSends.type:
                            {
                                const { offlineThreadingIds: a } = t.payload;
                                a.forEach(t => {
                                    e.messageSendInfo[t] = null,
                                        delete e.messageSendInfo[t]
                                }
                                )
                            }
                    }
                }
            );
        t.LoggingReducer = o
    },
    2058: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getDefaultLoggingState = void 0;
        t.getDefaultLoggingState = () => ({
            threadLoggingInfo: {},
            messageSendInfo: {}
        })
    },
    2059: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function* () {
                yield (0,
                    s.takeLatest)(r.LoggingActions.logMessagesRead.type, p),
                    yield (0,
                        s.takeLatest)(r.LoggingActions.updateMessageSendDeliveredInfoAndLog.type, m),
                    yield (0,
                        s.takeLatest)(r.LoggingActions.logMessageSendFailures.type, h);
                const e = (0,
                    n.createRef)({})
                    , t = (0,
                        n.createRef)({});
                yield (0,
                    s.takeLatest)(r.LoggingActions.markExperimentImpression.type, c, e, t),
                    yield (0,
                        s.takeLatest)(i.AppContextActions.setWindowFocusState.type, f, e, t)
            }
            ,
            t._markExperimentImpression = c,
            t._logPendingImpressions = f,
            t._logMessagesRead = p,
            t._logMessageSend = m,
            t._logMessageSendFailed = h;
        var n = a(74)
            , r = a(162)
            , l = a(2060)
            , o = d(a(47))
            , u = d(a(9))
            , i = a(28)
            , s = a(17);
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function* c(e, t, a) {
            const { experiment: n } = a.payload;
            n.canLogExposure && null == t[n.experimentName] && null == e[n.experimentName] && null != n.conditionFBID && ((yield (0,
                s.select)(i.isWindowFocused)) ? (t.current[n.experimentName] = n,
                    delete e.current[n.experimentName],
                    yield (0,
                        s.call)(u.default.metrics.trackExperimentImpressions, n)) : e.current[n.experimentName] = n)
        }
        function* f(e, t, a) {
            a.payload.isFocused && (yield (0,
                s.delay)((0,
                    o.default)({
                        seconds: 5
                    })),
                yield (0,
                    s.call)(u.default.metrics.trackExperimentImpressions, ...Object.values(e.current)),
                t.current = {
                    ...t.current,
                    ...e.current
                },
                e.current = {})
        }
        function* p(e) {
            const { threadKey: t, isThreadFocused: a } = e.payload
                , n = yield (0,
                    s.select)(l.getLoggingMessageReadEvents, t, a);
            u.default.metrics.trackStrictEvents(n),
                0 !== n.length && (yield (0,
                    s.put)(r.LoggingActions.updateMessageReadAlreadyLogged(t, n[n.length - 1].sentTimestamp, n[0].sentTimestamp)))
        }
        function* m(e) {
            const { events: t, ids: a } = yield (0,
                s.select)(l.getMessageSendEvents);
            t.length > 0 && (yield (0,
                s.put)(r.LoggingActions.cleanUpMessageSends(a)),
                yield (0,
                    s.call)(u.default.metrics.trackStrictEvents, t))
        }
        function* h(e) {
            const t = e.payload.loggingInfo
                , a = Object.values(t).reduce((e, { messages: t }) => (e.push(...t),
                    e), [])
                , { events: n, ids: o } = yield (0,
                    s.select)(l.getMessageSendFailedEvents, a);
            n.length > 0 && (yield (0,
                s.put)(r.LoggingActions.cleanUpMessageSends(o)),
                yield (0,
                    s.call)(u.default.metrics.trackStrictEvents, n))
        }
    },
    2060: function (e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getLoggingMessageReadEvents = function (e, t, a) {
                const r = (0,
                    l.getUserIDForLogging)(e)
                    , s = (0,
                        o.getMessagesMap)(e, t)
                    , d = (0,
                        o.getMessageIdsForThread)(e, t);
                if (!t || !s)
                    return u;
                const c = i(e)
                    , f = (0,
                        o.getCurentUserReadTimestamp)(e, t);
                return d.map(e => {
                    const l = s[e].message;
                    return l.isAdminMessage || l.senderId === r || function (e, t, a) {
                        if (!t)
                            return a && a > e.timestampMs;
                        const n = t.messageReadAlreadyLogged;
                        return e.timestampMs >= n.earliestMessageTimestamp && e.timestampMs <= n.latestMessageTimestamp || a && a > e.timestampMs
                    }(l, c, f) ? null : (0,
                        n.IncomingMessageReadEvent)({
                            threadKey: t,
                            message: l,
                            isThreadFocused: a
                        })
                }
                ).filter(Boolean)
            }
            ,
            t.getLoggingInfoForOpenThread = i,
            t.getMessageSendEvents = function (e) {
                const t = []
                    , a = [];
                for (const r of Object.keys(e.logging.messageSendInfo)) {
                    const l = e.logging.messageSendInfo[r];
                    l && l.messageId && l.sentTimestamp && l.serverReceivedTimestamp && l.deliveredTimestamp && (t.push((0,
                        n.MessageSendEvent)({
                            messageId: l.messageId,
                            sentTimestamp: l.sentTimestamp,
                            serverReceivedTimestamp: l.serverReceivedTimestamp,
                            deliveredTimestamp: l.deliveredTimestamp,
                            hasAttachment: l.hasAttachment || !1,
                            attachmentTypes: l.attachmentTypes,
                            numberAttachments: l.numberAttachments || 0,
                            totalAttachmentSize: l.totalAttachmentSize || 0,
                            startingNewThread: l.startingNewThread || !1,
                            sendSource: l.sendSource || null
                        })),
                        a.push(r))
                }
                return {
                    events: t,
                    ids: a
                }
            }
            ,
            t.getMessageSendFailedEvents = function (e, t) {
                const a = []
                    , l = [];
                for (const o of t) {
                    const t = o.sendStatusV2 === r.MessageSendStatus.NonRetriableError || o.sendStatusV2 === r.MessageSendStatus.RetriableError
                        , u = e.logging.messageSendInfo[o.offlineThreadingId];
                    null != u && t && (a.push((0,
                        n.MessageSendFailedEvent)({
                            messageId: o.offlineThreadingId,
                            timeoutInMilliseconds: 0,
                            hasAttachment: o.hasAttachment || !1,
                            attachmentTypes: u.attachmentTypes,
                            numberAttachments: u.numberAttachments || 0,
                            totalAttachmentSize: u.totalAttachmentSize || 0
                        })),
                        l.push(o.offlineThreadingId))
                }
                return {
                    events: a,
                    ids: l
                }
            }
            ;
        var n = a(24)
            , r = a(8)
            , l = a(21)
            , o = a(23);
        const u = [];
        function i(e) {
            const t = (0,
                o.getprimaryThreadKey)(e);
            return t ? e.logging.threadLoggingInfo[t] : null
        }
    }
}]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/InboxScreen.bundle.js.map
