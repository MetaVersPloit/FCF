(window.webpackJsonp = window.webpackJsonp || []).push([
    [28], {
        116: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    children: t,
                    className: r,
                    hideUnderline: a
                } = e, l = function(e) {
                    return null != e.onClick ? e.onClick : t => {
                        n.default.platform.openExternalURL(e.href), t.preventDefault()
                    }
                }(e), i = e.href ? {
                    href: e.href
                } : {};
                return o.default.createElement(u, s({
                    telemetryName: e.telemetryName,
                    onActivate: l,
                    as: e.href || e.displayAsLink ? "a" : "button",
                    hideUnderline: a,
                    className: r
                }, i), t)
            };
            var n = i(r(9)),
                a = i(r(1)),
                o = i(r(0)),
                l = r(2);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const u = (0, a.default)(l.FocusableView)(e => ({
                border: "none",
                display: "inline",
                padding: 0,
                margin: 0,
                ":hover, :active": {
                    textDecoration: e.hideUnderline ? void 0 : "underline"
                },
                color: "inherit",
                fontSize: "inherit",
                fontWeight: "inherit",
                backgroundColor: "transparent",
                cursor: "pointer"
            }))
        },
        125: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.MessageTagText = void 0;
            var n = w(r(1789)),
                a = r(87),
                o = w(r(59)),
                l = r(8),
                i = r(101),
                s = r(41),
                u = w(r(1)),
                c = r(35),
                d = w(r(600)),
                f = w(r(326)),
                h = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = _();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                p = w(r(2)),
                m = r(66),
                g = w(r(38)),
                y = r(6),
                v = w(r(73)),
                b = w(r(4));

            function _() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return _ = function() {
                    return e
                }, e
            }

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const C = (0, u.default)(p.default)({
                    flex: "auto"
                }),
                E = (0, u.default)(p.default)({
                    padding: "5px 12px",
                    flexDirection: "row"
                }),
                k = (0, u.default)(p.default)(e => ({
                    alignSelf: "flex-end",
                    paddingRight: 12,
                    marginBottom: e.lastMessageHasReactions ? e.lastMessageMultiSeenHeads ? "40px" : "18px" : e.lastMessageMultiSeenHeads ? "23px" : "0"
                })),
                x = (0, u.default)(p.default)({
                    flex: "auto"
                }),
                M = (0, u.default)(b.default)(e => ({
                    color: e.threadTheme.adminTextColor || e.theme.select({
                        dark: e.theme.colors.base70,
                        light: e.theme.colors.base60
                    }),
                    userSelect: "none"
                }));
            t.MessageTagText = M;
            const S = (0, u.default)(M)({
                    marginLeft: 12,
                    marginBottom: 2,
                    direction: "ltr"
                }),
                O = (0, u.default)(p.default)(e => ({
                    flexDirection: "row",
                    marginLeft: e.isSenderViewer ? "auto" : 10,
                    marginRight: e.isSenderViewer ? void 0 : "auto",
                    paddingRight: 28,
                    marginBottom: 2
                }));
            var T = (0, h.memo)((function({
                messageOTIDs: e,
                threadKey: t,
                parentThreadKey: r,
                isBlockedP2PThread: a,
                isSenderViewer: u,
                replySnippet: p,
                replySnippetType: _,
                groupMessageInfo: w,
                messagesToIgnore: T = new Set,
                duplicateMessageCount: I = {},
                userId: R,
                participants: A,
                isNetworkConnected: P,
                isRtcEnabled: j,
                rtcStackStatus: D
            }) {
                const {
                    windowKey: z
                } = (0, c.useWindowContext)(), F = (0, y.useTheme)(), {
                    threadTheme: B
                } = (0, s.useThreadTheme)(), {
                    showContextMenu: L
                } = (0, m.useContextMenu)(), N = Boolean(_ && _ === l.MessageReplySourceType.Forward), U = N ? d.default : f.default, W = p ? h.default.createElement(O, {
                    isSenderViewer: u
                }, h.default.createElement(U, {
                    size: 16,
                    color: B.adminTextColor || F.colors.base60
                }), h.default.createElement(M, {
                    use: "caption",
                    threadTheme: B
                }, p)) : null, H = async (e, n, a, s) => {
                    if (!A) return;
                    const u = A.filter(e => e.isAdmin),
                        c = u.some(e => e.contactId === R),
                        d = r === l.ThreadFolderParentKey.MessageRequests,
                        f = A.find(e => e.contactId === n);
                    f && await L({
                        target: e.currentTarget,
                        items: [d ? null : (0, i.getEditNicknamesItem)(t, z, !0), (0, i.getMessageUser)(R, n, a), (0, i.getViewProfileMenuItem)(f), {
                            type: "separator"
                        }, d ? null : (0, i.getSetAdminMenuItem)(R, c, s, t, n, a, c && u.length > 1 && s), d ? null : (0, i.getRemoveParticipantMenuItem)(n, t, c, !0), {
                            type: "separator"
                        }, d ? null : (0, i.getAudioCallMenuItemForUser)(R, n, {
                            isNetworkConnected: P,
                            isRtcEnabled: j,
                            rtcStackStatus: D,
                            participants: [f]
                        }, l.OutgoingCallSource.CONTEXT_MENU, !0), d ? null : (0, i.getVideoCallMenuItemForUser)(R, n, {
                            isNetworkConnected: P,
                            isRtcEnabled: j,
                            rtcStackStatus: D,
                            participants: [f]
                        }, l.OutgoingCallSource.CONTEXT_MENU, !0), {
                            type: "separator"
                        }, (0, o.default)({
                            messenger: (0, i.getBlockOrUnblockMessengerMenuItem)(f, !0),
                            workchat: null
                        })]
                    })
                };
                return h.default.createElement(E, null, w && !u && h.default.createElement(k, {
                    lastMessageMultiSeenHeads: w.lastMessageHasMultipleHeads,
                    onClick: e => H(e, w.participantId, w.participantName, w.participantIsAdmin),
                    onContextMenu: e => H(e, w.participantId, w.participantName, w.participantIsAdmin),
                    lastMessageHasReactions: w.lastMessageHasReactions
                }, h.default.createElement(v.default, {
                    tooltipProps: {
                        children: h.default.createElement(b.default, {
                            use: "caption"
                        }, w.fullName),
                        placement: "left"
                    }
                }, h.default.createElement(g.default, {
                    profilePictureUrl: w.profilePictureUrl,
                    size: "small"
                }))), h.default.createElement(x, null, W, !W && w && !u && h.default.createElement(S, {
                    use: "caption",
                    threadTheme: B
                }, (0, o.default)({
                    workchat: w.fullName,
                    messenger: w.participantName
                })), h.default.createElement(C, null, e.map((r, o) => T.has(r) ? null : h.default.createElement(n.default, {
                    key: r,
                    messageOTID: r,
                    isBlockedP2PThread: a,
                    isFirst: 0 === o,
                    isLast: o === e.length - 1,
                    isSenderViewer: u,
                    threadKey: t,
                    duplicates: I[e[o]],
                    isForwardedMessage: N
                })))))
            }), a.caution_deepEquals);
            t.default = T
        },
        142: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                currentEmoji: e,
                isWorkplace: t,
                threadTheme: r,
                onEmojiClick: l,
                showHotlike: i,
                defaultSkintone: s,
                className: u,
                pickerType: c = "normal",
                sortedEmojiFrequencyList: d,
                categoryPickerStyle: f,
                accessibilityRole: h
            }) {
                const [p, m] = (0, y.useState)(o.EmojiCategory.SmileysAndPeople), g = (0, y.useRef)(null), v = (0, _.useTheme)(), w = t ? "#485566" : v.semanticColors.primary, C = (r || {
                    color: w
                }).color, E = "normal" === c ? 52 : 39, M = "normal" === c ? 6 : 8, T = "normal" === c || !d || d && 0 === d.length ? Object.values(o.EmojiCategory).filter(e => e !== o.EmojiCategory.FrequentlyUsed) : Object.values(o.EmojiCategory), I = (0, y.useMemo)(() => {
                    const e = {
                            ...o.default
                        },
                        t = d ? d.slice(0, 16) : [];
                    return e[o.EmojiCategory.FrequentlyUsed] = t,
                        function(e, t, r, n, a) {
                            const l = [];
                            for (const i of e) {
                                const e = Object.values(o.EmojiCategory).includes(i);
                                l.push({
                                    type: "header",
                                    title: i,
                                    header: S[i],
                                    rowHeight: 32,
                                    category: i
                                });
                                const s = n[i],
                                    u = O("compact" === a ? s.filter(e => "HOTLIKE" !== e) : s, t);
                                for (const t of u) l.push({
                                    type: "emoji",
                                    emojis: t,
                                    modifySkintones: i !== o.EmojiCategory.FrequentlyUsed,
                                    rowHeight: r,
                                    category: e ? i : void 0
                                })
                            }
                            return l
                        }(T, M, E, e, c)
                }, [E, M, c, d, T]), R = (0, y.useCallback)(e => {
                    if (m(e), g.current)
                        for (let t = 0; t < I.length; t++) {
                            const r = I[t];
                            if ("header" === r.type && r.title && r.title === e) {
                                g.current.scrollToItem(t, "start");
                                break
                            }
                        }
                }, [m, g, I]);
                return y.default.createElement(b.default, {
                    name: "emojiPicker"
                }, y.default.createElement(k, {
                    className: u
                }, y.default.createElement(x, null, y.default.createElement(a.default, {
                    onEmojiClick: l,
                    hotlikeColor: C,
                    currentEmoji: e,
                    showHotlike: i,
                    defaultSkintone: s,
                    listRef: g,
                    pickerType: c,
                    rows: I,
                    onCategoryChanged: m,
                    currentCategory: p,
                    accessibilityRole: h
                })), y.default.createElement(n.default, {
                    currentCategory: p,
                    onCategoryChanged: R,
                    categories: T,
                    style: f
                })))
            }, t.HOTLIKE = t.EMOJI_CATEGORIES_HEADER_DISPLAY = t.EMOJI_CATEGORIES_ICONS = t.COMPACT_PICKER_BUTTON_DIMS = t.NORMAL_PICKER_BUTTON_DIMS = t.SECTION_HEADER_HEIGHT = t.COMPACT_EMOJIS_PER_ROW = t.NORMAL_EMOJIS_PER_ROW = t.COMPACT_PICKER_ROW_HEIGHT = t.NORMAL_PICKER_ROW_HEIGHT = void 0;
            var n = E(r(1748)),
                a = E(r(1749)),
                o = C(r(1753)),
                l = E(r(5)),
                i = E(r(1)),
                s = E(r(1754)),
                u = E(r(1755)),
                c = E(r(1756)),
                d = E(r(352)),
                f = E(r(299)),
                h = E(r(1757)),
                p = E(r(1758)),
                m = E(r(1759)),
                g = E(r(1760)),
                y = C(r(0)),
                v = E(r(2)),
                b = E(r(13)),
                _ = r(6);

            function w() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return w = function() {
                    return e
                }, e
            }

            function C(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = w();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.NORMAL_PICKER_ROW_HEIGHT = 52;
            t.COMPACT_PICKER_ROW_HEIGHT = 39;
            t.NORMAL_EMOJIS_PER_ROW = 6;
            t.COMPACT_EMOJIS_PER_ROW = 8;
            t.SECTION_HEADER_HEIGHT = 32;
            t.NORMAL_PICKER_BUTTON_DIMS = 36;
            t.COMPACT_PICKER_BUTTON_DIMS = 32;
            const k = (0, i.default)(v.default)({
                    borderRadius: 4,
                    pointerEvents: "auto",
                    paddingTop: 4,
                    flex: 1
                }),
                x = (0, i.default)(v.default)(e => ({
                    flex: "1 1 0px",
                    overflow: "hidden"
                })),
                M = {
                    [o.EmojiCategory.FrequentlyUsed]: d.default,
                    [o.EmojiCategory.SmileysAndPeople]: f.default,
                    [o.EmojiCategory.AnimalsAndNature]: s.default,
                    [o.EmojiCategory.FoodAndDrink]: p.default,
                    [o.EmojiCategory.Activity]: g.default,
                    [o.EmojiCategory.TravelAndPlaces]: c.default,
                    [o.EmojiCategory.Objects]: u.default,
                    [o.EmojiCategory.Symbols]: m.default,
                    [o.EmojiCategory.Flags]: h.default
                };
            t.EMOJI_CATEGORIES_ICONS = M;
            const S = {
                [o.EmojiCategory.FrequentlyUsed]: l.default._("Frequently Used", null, {
                    hk: "3FMkwn"
                }),
                [o.EmojiCategory.SmileysAndPeople]: l.default._("Smileys & People", null, {
                    hk: "2r8GYf"
                }),
                [o.EmojiCategory.AnimalsAndNature]: l.default._("Animals & Nature", null, {
                    hk: "4Apiy1"
                }),
                [o.EmojiCategory.FoodAndDrink]: l.default._("Food & Drink", null, {
                    hk: "3Uvce2"
                }),
                [o.EmojiCategory.Activity]: l.default._("Activity", null, {
                    hk: "1hX0GJ"
                }),
                [o.EmojiCategory.TravelAndPlaces]: l.default._("Travel & Places", null, {
                    hk: "17mLNj"
                }),
                [o.EmojiCategory.Objects]: l.default._("Objects", null, {
                    hk: "3Q1Zr"
                }),
                [o.EmojiCategory.Symbols]: l.default._("Symbols", null, {
                    hk: "aqajj"
                }),
                [o.EmojiCategory.Flags]: l.default._("Flags", null, {
                    hk: "35jKkl"
                })
            };
            t.EMOJI_CATEGORIES_HEADER_DISPLAY = S;

            function O(e, t) {
                const r = [];
                let n = 0;
                for (; n < e.length;) r.push(e.slice(n, t + n)), n += t;
                return r
            }
            t.HOTLIKE = "HOTLIKE", o.default[o.EmojiCategory.SmileysAndPeople].unshift("HOTLIKE")
        },
        1481: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    ctaItem: t,
                    sendPostback: r
                } = e, n = t.title, a = (0, i.useCallback)(() => {
                    r && r(n, t.platformToken)
                }, [t, r, n]);
                return i.default.createElement(c, {
                    size: o.PillSize.Medium,
                    onClick: a
                }, i.default.createElement(l.TextPill, {
                    text: n
                }))
            };
            var n, a = (n = r(1)) && n.__esModule ? n : {
                    default: n
                },
                o = u(r(127)),
                l = r(149),
                i = u(r(0));

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function u(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }
            const c = (0, a.default)(o.default)({
                margin: "8px 4px"
            })
        },
        1487: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = l(r(1488)),
                a = r(538),
                o = l(r(0));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = e => function(e) {
                const t = /^\/groups\/\S+\/permalink\/\d+\//;
                try {
                    const r = new URL(e.actionUrl);
                    return (r.hostname.endsWith("facebook.com") || r.hostname.endsWith("workplace.com")) && t.test(r.pathname)
                } catch (e) {}
                return !1
            }(e.attachment) ? o.default.createElement(n.default, e) : o.default.createElement(a.RegularXMA, e);
            t.default = i
        },
        1488: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t;
                const {
                    attachment: r
                } = e, l = null === (t = r.previewUrlInfo) || void 0 === t ? void 0 : t.primaryUrl;
                return c.default.createElement(m, null, l && c.default.createElement(n.default, {
                    imageUrl: (0, a.default)(r.previewUrlInfo)
                }), c.default.createElement(E, null, c.default.createElement(u.default, {
                    source: r.descriptionText,
                    allowedTypes: ["emphasis", "strong", "root", "text", "heading", "list", "listItem", "code", "inlineCode", "paragraph", "blockquote", "delete"],
                    renderers: x,
                    unwrapDisallowed: !0
                })), c.default.createElement(g, null, c.default.createElement(i.default, {
                    profilePictureUrl: (0, a.default)(r.headerImageUrlInfo),
                    size: "xsmall"
                }), c.default.createElement(y, {
                    use: "body-semibold"
                }, o.default._("{author name} posted in {group name}", [o.default._param("author name", r.headerTitle), o.default._param("group name", r.sourceText)], {
                    hk: "2iF0y7"
                }))))
            };
            var n = h(r(277)),
                a = h(r(27)),
                o = h(r(5)),
                l = h(r(1)),
                i = h(r(38)),
                s = r(6),
                u = h(r(1489)),
                c = h(r(0)),
                d = h(r(2)),
                f = h(r(4));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const m = (0, l.default)(d.default)({
                    width: 600,
                    minHeight: 62
                }),
                g = (0, l.default)(d.default)(e => ({
                    backgroundColor: e.theme.semanticColors.bgSurfaceSecondary,
                    padding: "10px 12px",
                    borderTop: `1px solid ${e.theme.semanticColors.bgSurface}`,
                    boxShadow: `0 -5px 15px 10px ${e.theme.semanticColors.bgSurfaceSecondary}`,
                    flexDirection: "row",
                    alignItems: "center"
                })),
                y = (0, l.default)(f.default)({
                    flexShrink: 1,
                    marginLeft: 10
                }),
                v = (0, l.default)(f.default)(e => ({
                    marginTop: 3,
                    marginBottom: 3,
                    whiteSpace: "normal"
                }));

            function b({
                children: e,
                ...t
            }) {
                const r = (0, s.useTheme)();
                return (c.default.createElement(v, p({
                    use: "subtext",
                    color: r.semanticColors.textSecondary
                }, t), e))
            }
            const _ = (0, l.default)(b)(({
                    theme: e
                }) => ({
                    paddingLeft: 6,
                    marginLeft: 4,
                    fontStyle: "italic",
                    borderLeft: `2px solid ${e.semanticColors.textTertiary}`
                })),
                w = (0, l.default)(b)(({
                    listStyle: e
                }) => ({
                    marginLeft: 16,
                    display: "list-item",
                    listStyleType: "ordered" === e ? "decimal" : "disc",
                    overflow: "visible"
                })),
                C = (0, l.default)(b)(e => ({
                    display: "inline"
                })),
                E = (0, l.default)(d.default)(e => ({
                    maxHeight: 150,
                    padding: "6px 12px"
                })),
                k = e => {
                    var t, r, n, a;
                    return "string" == typeof e || "number" == typeof e ? e : null !== (t = null === (r = e.props) || void 0 === r ? void 0 : r.value) && void 0 !== t ? t : null === (n = e.props) || void 0 === n ? void 0 : null === (a = n.children) || void 0 === a ? void 0 : a.map(k).join("")
                },
                x = {
                    list: v,
                    text: C,
                    listItem: ({
                        children: e,
                        ordered: t
                    }) => c.default.createElement(w, {
                        listStyle: t ? "ordered" : "unordered"
                    }, e),
                    code: ({
                        value: e
                    }) => c.default.createElement(b, {
                        code: !0
                    }, e),
                    inlineCode: ({
                        children: e
                    }) => c.default.createElement(C, {
                        code: !0
                    }, e),
                    heading: ({
                        level: e,
                        children: t
                    }) => c.default.createElement(b, {
                        use: 1 === e ? "subtext-bold" : "subtext-semibold"
                    }, t.map(k).join("")),
                    paragraph: v,
                    blockquote: ({
                        children: e
                    }) => c.default.createElement(_, null, e),
                    delete: ({
                        children: e
                    }) => c.default.createElement(C, {
                        strikeThrough: !0
                    }, e)
                }
        },
        1489: function(e, t, r) {
            "use strict";

            function n(e) {
                return function(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
                        return r
                    }
                }(e) || function(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }
            var a = r(95),
                o = r(1490),
                l = r(1503),
                i = r(3),
                s = r(1559),
                u = r(1561),
                c = r(1562),
                d = r(1563),
                f = r(1564),
                h = r(1565),
                p = r(1566),
                m = r(1567),
                g = r(1568),
                y = Object.keys(m),
                v = function(e) {
                    var t = e.source || e.children || "",
                        r = e.parserOptions;
                    if (e.allowedTypes && e.disallowedTypes) throw new Error("Only one of `allowedTypes` and `disallowedTypes` should be defined");
                    var n = a(m, e.renderers),
                        i = [
                            [l, r]
                        ].concat(e.plugins || []).reduce(b, o()),
                        p = i.parse(t),
                        v = a(e, {
                            renderers: n,
                            definitions: h(p)
                        }),
                        _ = function(e) {
                            var t = [f, s()],
                                r = e.disallowedTypes;
                            e.allowedTypes && (r = y.filter((function(t) {
                                return "root" !== t && -1 === e.allowedTypes.indexOf(t)
                            })));
                            var n = e.unwrapDisallowed ? "unwrap" : "remove";
                            r && r.length > 0 && t.push(c.ofType(r, n));
                            e.allowNode && t.push(c.ifNotMatch(e.allowNode, n));
                            var a = !e.escapeHtml && !e.skipHtml,
                                o = (e.astPlugins || []).some((function(e) {
                                    return (Array.isArray(e) ? e[0] : e).identity === g.HtmlParser
                                }));
                            a && !o && t.push(u);
                            return e.astPlugins ? t.concat(e.astPlugins) : t
                        }(e),
                        w = i.runSync(p),
                        C = _.reduce((function(e, t) {
                            return t(e, v)
                        }), w);
                    return d(C, v)
                };

            function b(e, t) {
                return Array.isArray(t) ? e.use.apply(e, n(t)) : e.use(t)
            }
            v.defaultProps = {
                renderers: {},
                escapeHtml: !0,
                skipHtml: !1,
                sourcePos: !1,
                rawSourcePos: !1,
                transformLinkUri: p,
                astPlugins: [],
                plugins: [],
                parserOptions: {}
            }, v.propTypes = {
                className: i.string,
                source: i.string,
                children: i.string,
                sourcePos: i.bool,
                rawSourcePos: i.bool,
                escapeHtml: i.bool,
                skipHtml: i.bool,
                allowNode: i.func,
                allowedTypes: i.arrayOf(i.oneOf(y)),
                disallowedTypes: i.arrayOf(i.oneOf(y)),
                transformLinkUri: i.oneOfType([i.func, i.bool]),
                linkTarget: i.oneOfType([i.func, i.string]),
                transformImageUri: i.func,
                astPlugins: i.arrayOf(i.func),
                unwrapDisallowed: i.bool,
                renderers: i.object,
                plugins: i.array,
                parserOptions: i.object
            }, v.types = y, v.renderers = m, v.uriTransformer = p, e.exports = v
        },
        1490: function(e, t, r) {
            "use strict";
            var n = r(1491),
                a = r(1492),
                o = r(1493),
                l = r(1499),
                i = r(1501),
                s = r(1502);
            e.exports = function e() {
                var t = [],
                    r = l(),
                    v = {},
                    b = !1,
                    _ = -1;
                return w.data = function(e, t) {
                    if (i(e)) return 2 === arguments.length ? (m("data", b), v[e] = t, w) : c.call(v, e) && v[e] || null;
                    if (e) return m("data", b), v = e, w;
                    return v
                }, w.freeze = C, w.attachers = t, w.use = function(e) {
                    var r;
                    if (m("use", b), null == e);
                    else if ("function" == typeof e) i.apply(null, arguments);
                    else {
                        if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
                        "length" in e ? l(e) : a(e)
                    }
                    r && (v.settings = n(v.settings || {}, r));
                    return w;

                    function a(e) {
                        l(e.plugins), e.settings && (r = n(r || {}, e.settings))
                    }

                    function o(e) {
                        if ("function" == typeof e) i(e);
                        else {
                            if ("object" != typeof e) throw new Error("Expected usable value, not `" + e + "`");
                            "length" in e ? i.apply(null, e) : a(e)
                        }
                    }

                    function l(e) {
                        var t, r;
                        if (null == e);
                        else {
                            if (!("object" == typeof e && "length" in e)) throw new Error("Expected a list of plugins, not `" + e + "`");
                            for (t = e.length, r = -1; ++r < t;) o(e[r])
                        }
                    }

                    function i(e, r) {
                        var a = E(e);
                        a ? (s(a[1]) && s(r) && (r = n(a[1], r)), a[1] = r) : t.push(u.call(arguments))
                    }
                }, w.parse = function(e) {
                    var t, r = o(e);
                    if (C(), h("parse", t = w.Parser), f(t)) return new t(String(r), r).parse();
                    return t(String(r), r)
                }, w.stringify = function(e, t) {
                    var r, n = o(t);
                    if (C(), p("stringify", r = w.Compiler), g(e), f(r)) return new r(e, n).compile();
                    return r(e, n)
                }, w.run = k, w.runSync = function(e, t) {
                    var r, n = !1;
                    return k(e, t, (function(e, t) {
                        n = !0, a(e), r = t
                    })), y("runSync", "run", n), r
                }, w.process = x, w.processSync = function(e) {
                    var t, r = !1;
                    return C(), h("processSync", w.Parser), p("processSync", w.Compiler), x(t = o(e), (function(e) {
                        r = !0, a(e)
                    })), y("processSync", "process", r), t
                }, w;

                function w() {
                    for (var r = e(), a = t.length, o = -1; ++o < a;) r.use.apply(null, t[o]);
                    return r.data(n(!0, {}, v)), r
                }

                function C() {
                    var e, n, a, o;
                    if (b) return w;
                    for (; ++_ < t.length;) n = (e = t[_])[0], null, !1 !== (a = e[1]) && (!0 === a && (e[1] = void 0), "function" == typeof(o = n.apply(w, e.slice(1))) && r.use(o));
                    return b = !0, _ = 1 / 0, w
                }

                function E(e) {
                    for (var r, n = t.length, a = -1; ++a < n;)
                        if ((r = t[a])[0] === e) return r
                }

                function k(e, t, n) {
                    if (g(e), C(), n || "function" != typeof t || (n = t, t = null), !n) return new Promise(a);

                    function a(a, l) {
                        r.run(e, o(t), (function(t, r, o) {
                            r = r || e, t ? l(t) : a ? a(r) : n(null, r, o)
                        }))
                    }
                    a(null, n)
                }

                function x(e, t) {
                    if (C(), h("process", w.Parser), p("process", w.Compiler), !t) return new Promise(r);

                    function r(r, n) {
                        var a = o(e);
                        d.run(w, {
                            file: a
                        }, (function(e) {
                            e ? n(e) : r ? r(a) : t(null, a)
                        }))
                    }
                    r(null, t)
                }
            }().freeze();
            var u = [].slice,
                c = {}.hasOwnProperty,
                d = l().use((function(e, t) {
                    t.tree = e.parse(t.file)
                })).use((function(e, t, r) {
                    e.run(t.tree, t.file, (function(e, n, a) {
                        e ? r(e) : (t.tree = n, t.file = a, r())
                    }))
                })).use((function(e, t) {
                    t.file.contents = e.stringify(t.tree, t.file)
                }));

            function f(e) {
                return "function" == typeof e && function(e) {
                    var t;
                    for (t in e) return !0;
                    return !1
                }(e.prototype)
            }

            function h(e, t) {
                if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Parser`")
            }

            function p(e, t) {
                if ("function" != typeof t) throw new Error("Cannot `" + e + "` without `Compiler`")
            }

            function m(e, t) {
                if (t) throw new Error(["Cannot invoke `" + e + "` on a frozen processor.\nCreate a new ", "processor first, by invoking it: use `processor()` instead of ", "`processor`."].join(""))
            }

            function g(e) {
                if (!e || !i(e.type)) throw new Error("Expected node, got `" + e + "`")
            }

            function y(e, t, r) {
                if (!r) throw new Error("`" + e + "` finished async. Use `" + t + "` instead")
            }
        },
        1491: function(e, t, r) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                a = Object.prototype.toString,
                o = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                i = function(e) {
                    return "function" == typeof Array.isArray ? Array.isArray(e) : "[object Array]" === a.call(e)
                },
                s = function(e) {
                    if (!e || "[object Object]" !== a.call(e)) return !1;
                    var t, r = n.call(e, "constructor"),
                        o = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
                    if (e.constructor && !r && !o) return !1;
                    for (t in e);
                    return void 0 === t || n.call(e, t)
                },
                u = function(e, t) {
                    o && "__proto__" === t.name ? o(e, t.name, {
                        enumerable: !0,
                        configurable: !0,
                        value: t.newValue,
                        writable: !0
                    }) : e[t.name] = t.newValue
                },
                c = function(e, t) {
                    if ("__proto__" === t) {
                        if (!n.call(e, t)) return;
                        if (l) return l(e, t).value
                    }
                    return e[t]
                };
            e.exports = function e() {
                var t, r, n, a, o, l, d = arguments[0],
                    f = 1,
                    h = arguments.length,
                    p = !1;
                for ("boolean" == typeof d && (p = d, d = arguments[1] || {}, f = 2), (null == d || "object" != typeof d && "function" != typeof d) && (d = {}); f < h; ++f)
                    if (null != (t = arguments[f]))
                        for (r in t) n = c(d, r), d !== (a = c(t, r)) && (p && a && (s(a) || (o = i(a))) ? (o ? (o = !1, l = n && i(n) ? n : []) : l = n && s(n) ? n : {}, u(d, {
                            name: r,
                            newValue: e(p, l, a)
                        })) : void 0 !== a && u(d, {
                            name: r,
                            newValue: a
                        }));
                return d
            }
        },
        1492: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                if (e) throw e
            }
        },
        1493: function(e, t, r) {
            "use strict";
            var n = r(1494),
                a = r(1496);
            e.exports = a;
            var o = a.prototype;

            function l(e, t, r) {
                var a = this.path,
                    o = new n(e, t, r);
                return a && (o.name = a + ":" + o.name, o.file = a), o.fatal = !1, this.messages.push(o), o
            }
            o.message = l, o.info = function() {
                var e = this.message.apply(this, arguments);
                return e.fatal = null, e
            }, o.fail = function() {
                var e = this.message.apply(this, arguments);
                throw e.fatal = !0, e
            }, o.warn = l
        },
        1494: function(e, t, r) {
            "use strict";
            var n = r(1495);

            function a() {}
            e.exports = l, a.prototype = Error.prototype, l.prototype = new a;
            var o = l.prototype;

            function l(e, t, r) {
                var a, o, l;
                "string" == typeof t && (r = t, t = null), a = function(e) {
                    var t, r = [null, null];
                    "string" == typeof e && (-1 === (t = e.indexOf(":")) ? r[1] = e : (r[0] = e.slice(0, t), r[1] = e.slice(t + 1)));
                    return r
                }(r), o = n(t) || "1:1", l = {
                    start: {
                        line: null,
                        column: null
                    },
                    end: {
                        line: null,
                        column: null
                    }
                }, t && t.position && (t = t.position), t && (t.start ? (l = t, t = t.start) : l.start = t), e.stack && (this.stack = e.stack, e = e.message), this.message = e, this.name = o, this.reason = e, this.line = t ? t.line : null, this.column = t ? t.column : null, this.location = l, this.source = a[0], this.ruleId = a[1]
            }
            o.file = "", o.name = "", o.reason = "", o.message = "", o.stack = "", o.fatal = null, o.column = null, o.line = null
        },
        1495: function(e, t, r) {
            "use strict";
            var n = {}.hasOwnProperty;

            function a(e) {
                return e && "object" == typeof e || (e = {}), l(e.line) + ":" + l(e.column)
            }

            function o(e) {
                return e && "object" == typeof e || (e = {}), a(e.start) + "-" + a(e.end)
            }

            function l(e) {
                return e && "number" == typeof e ? e : 1
            }
            e.exports = function(e) {
                if (!e || "object" != typeof e) return null;
                if (n.call(e, "position") || n.call(e, "type")) return o(e.position);
                if (n.call(e, "start") || n.call(e, "end")) return o(e);
                if (n.call(e, "line") || n.call(e, "column")) return a(e);
                return null
            }
        },
        1496: function(e, t, r) {
            "use strict";
            (function(t) {
                var n = r(227),
                    a = r(1497),
                    o = r(1498);
                e.exports = u;
                var l = {}.hasOwnProperty,
                    i = u.prototype;
                i.toString = function(e) {
                    var t = this.contents || "";
                    return o(t) ? t.toString(e) : String(t)
                };
                var s = ["history", "path", "basename", "stem", "extname", "dirname"];

                function u(e) {
                    var r, n, a;
                    if (e) {
                        if ("string" == typeof e || o(e)) e = {
                            contents: e
                        };
                        else if ("message" in e && "messages" in e) return e
                    } else e = {};
                    if (!(this instanceof u)) return new u(e);
                    for (this.data = {}, this.messages = [], this.history = [], this.cwd = t.cwd(), n = -1, a = s.length; ++n < a;) r = s[n], l.call(e, r) && (this[r] = e[r]);
                    for (r in e) - 1 === s.indexOf(r) && (this[r] = e[r])
                }

                function c(e, t) {
                    if (-1 !== e.indexOf(n.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + n.sep + "`")
                }

                function d(e, t) {
                    if (!e) throw new Error("`" + t + "` cannot be empty")
                }

                function f(e, t) {
                    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too")
                }
                Object.defineProperty(i, "path", {
                    get: function() {
                        return this.history[this.history.length - 1]
                    },
                    set: function(e) {
                        d(e, "path"), e !== this.path && this.history.push(e)
                    }
                }), Object.defineProperty(i, "dirname", {
                    get: function() {
                        return "string" == typeof this.path ? n.dirname(this.path) : void 0
                    },
                    set: function(e) {
                        f(this.path, "dirname"), this.path = n.join(e || "", this.basename)
                    }
                }), Object.defineProperty(i, "basename", {
                    get: function() {
                        return "string" == typeof this.path ? n.basename(this.path) : void 0
                    },
                    set: function(e) {
                        d(e, "basename"), c(e, "basename"), this.path = n.join(this.dirname || "", e)
                    }
                }), Object.defineProperty(i, "extname", {
                    get: function() {
                        return "string" == typeof this.path ? n.extname(this.path) : void 0
                    },
                    set: function(e) {
                        var t = e || "";
                        if (c(t, "extname"), f(this.path, "extname"), t) {
                            if ("." !== t.charAt(0)) throw new Error("`extname` must start with `.`");
                            if (-1 !== t.indexOf(".", 1)) throw new Error("`extname` cannot contain multiple dots")
                        }
                        this.path = a(this.path, t)
                    }
                }), Object.defineProperty(i, "stem", {
                    get: function() {
                        return "string" == typeof this.path ? n.basename(this.path, this.extname) : void 0
                    },
                    set: function(e) {
                        d(e, "stem"), c(e, "stem"), this.path = n.join(this.dirname || "", e + (this.extname || ""))
                    }
                })
            }).call(this, r(223))
        },
        1497: function(e, t, r) {
            "use strict";
            var n = r(227);
            e.exports = function(e, t) {
                if ("string" != typeof e) return e;
                if (0 === e.length) return e;
                var r = n.basename(e, n.extname(e)) + t;
                return n.join(n.dirname(e), r)
            }
        },
        1498: function(e, t) {
            function r(e) {
                return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            /*!
             * Determine if an object is a Buffer
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            e.exports = function(e) {
                return null != e && (r(e) || function(e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
                }(e) || !!e._isBuffer)
            }
        },
        1499: function(e, t, r) {
            "use strict";
            var n = r(1500);
            e.exports = o, o.wrap = n;
            var a = [].slice;

            function o() {
                var e = [],
                    t = {
                        run: function() {
                            var t = -1,
                                r = a.call(arguments, 0, -1),
                                o = arguments[arguments.length - 1];
                            if ("function" != typeof o) throw new Error("Expected function as last argument, not " + o);

                            function l(i) {
                                var s = e[++t],
                                    u = a.call(arguments, 0),
                                    c = u.slice(1),
                                    d = r.length,
                                    f = -1;
                                if (i) o(i);
                                else {
                                    for (; ++f < d;) null !== c[f] && void 0 !== c[f] || (c[f] = r[f]);
                                    r = c, s ? n(s, l).apply(null, r) : o.apply(null, [null].concat(r))
                                }
                            }
                            l.apply(null, [null].concat(r))
                        },
                        use: function(r) {
                            if ("function" != typeof r) throw new Error("Expected `fn` to be a function, not " + r);
                            return e.push(r), t
                        }
                    };
                return t
            }
        },
        1500: function(e, t, r) {
            "use strict";
            var n = [].slice;
            e.exports = function(e, t) {
                var r;
                return function() {
                    var t, l = n.call(arguments, 0),
                        i = e.length > l.length;
                    i && l.push(a);
                    try {
                        t = e.apply(null, l)
                    } catch (e) {
                        if (i && r) throw e;
                        return a(e)
                    }
                    i || (t && "function" == typeof t.then ? t.then(o, a) : t instanceof Error ? a(t) : o(t))
                };

                function a() {
                    r || (r = !0, t.apply(null, arguments))
                }

                function o(e) {
                    a(null, e)
                }
            }
        },
        1501: function(e, t) {
            var r = Object.prototype.toString;
            e.exports = function(e) {
                return "[object String]" === r.call(e)
            }
        },
        1502: function(e, t, r) {
            "use strict";
            var n = Object.prototype.toString;
            e.exports = function(e) {
                var t;
                return "[object Object]" === n.call(e) && (null === (t = Object.getPrototypeOf(e)) || t === Object.getPrototypeOf({}))
            }
        },
        1503: function(e, t, r) {
            "use strict";
            var n = r(1504),
                a = r(95),
                o = r(1506);

            function l(e) {
                var t = n(o);
                t.prototype.options = a(t.prototype.options, this.data("settings"), e), this.Parser = t
            }
            e.exports = l, l.Parser = o
        },
        1504: function(e, t, r) {
            "use strict";
            var n = r(95),
                a = r(1505);
            e.exports = function(e) {
                var t, r, o;
                for (r in a(i, e), a(l, i), t = i.prototype)(o = t[r]) && "object" == typeof o && (t[r] = "concat" in o ? o.concat() : n(o));
                return i;

                function l(t) {
                    return e.apply(this, t)
                }

                function i() {
                    return this instanceof i ? e.apply(this, arguments) : new l(arguments)
                }
            }
        },
        1505: function(e, t) {
            "function" == typeof Object.create ? e.exports = function(e, t) {
                t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }))
            } : e.exports = function(e, t) {
                if (t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }
            }
        },
        1506: function(e, t, r) {
            "use strict";
            var n = r(95),
                a = r(1507),
                o = r(1508),
                l = r(1509),
                i = r(1510),
                s = r(1516);

            function u(e, t) {
                this.file = t, this.offset = {}, this.options = n(this.options), this.setOptions({}), this.inList = !1, this.inBlock = !1, this.inLink = !1, this.atStart = !0, this.toOffset = o(t).toOffset, this.unescape = l(this, "escape"), this.decode = i(this)
            }
            e.exports = u;
            var c = u.prototype;

            function d(e) {
                var t, r = [];
                for (t in e) r.push(t);
                return r
            }
            c.setOptions = r(1517), c.parse = r(1520), c.options = r(533), c.exitStart = a("atStart", !0), c.enterList = a("inList", !1), c.enterLink = a("inLink", !1), c.enterBlock = a("inBlock", !1), c.interruptParagraph = [
                ["thematicBreak"],
                ["atxHeading"],
                ["fencedCode"],
                ["blockquote"],
                ["html"],
                ["setextHeading", {
                    commonmark: !1
                }],
                ["definition", {
                    commonmark: !1
                }],
                ["footnote", {
                    commonmark: !1
                }]
            ], c.interruptList = [
                ["atxHeading", {
                    pedantic: !1
                }],
                ["fencedCode", {
                    pedantic: !1
                }],
                ["thematicBreak", {
                    pedantic: !1
                }],
                ["definition", {
                    commonmark: !1
                }],
                ["footnote", {
                    commonmark: !1
                }]
            ], c.interruptBlockquote = [
                ["indentedCode", {
                    commonmark: !0
                }],
                ["fencedCode", {
                    commonmark: !0
                }],
                ["atxHeading", {
                    commonmark: !0
                }],
                ["setextHeading", {
                    commonmark: !0
                }],
                ["thematicBreak", {
                    commonmark: !0
                }],
                ["html", {
                    commonmark: !0
                }],
                ["list", {
                    commonmark: !0
                }],
                ["definition", {
                    commonmark: !1
                }],
                ["footnote", {
                    commonmark: !1
                }]
            ], c.blockTokenizers = {
                newline: r(1524),
                indentedCode: r(1525),
                fencedCode: r(1526),
                blockquote: r(1527),
                atxHeading: r(1528),
                thematicBreak: r(1529),
                list: r(1530),
                setextHeading: r(1532),
                html: r(1533),
                footnote: r(1534),
                definition: r(1536),
                table: r(1537),
                paragraph: r(1538)
            }, c.inlineTokenizers = {
                escape: r(1539),
                autoLink: r(1541),
                url: r(1542),
                html: r(1544),
                link: r(1545),
                reference: r(1546),
                strong: r(1547),
                emphasis: r(1549),
                deletion: r(1552),
                code: r(1554),
                break: r(1556),
                text: r(1558)
            }, c.blockMethods = d(c.blockTokenizers), c.inlineMethods = d(c.inlineTokenizers), c.tokenizeBlock = s("block"), c.tokenizeInline = s("inline"), c.tokenizeFactory = s
        },
        1507: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r) {
                return function() {
                    var n = r || this,
                        a = n[e];
                    return n[e] = !t,
                        function() {
                            n[e] = a
                        }
                }
            }
        },
        1508: function(e, t, r) {
            "use strict";

            function n(e) {
                return function(t) {
                    var r = -1,
                        n = e.length;
                    if (t < 0) return {};
                    for (; ++r < n;)
                        if (e[r] > t) return {
                            line: r + 1,
                            column: t - (e[r - 1] || 0) + 1,
                            offset: t
                        };
                    return {}
                }
            }

            function a(e) {
                return function(t) {
                    var r = t && t.line,
                        n = t && t.column;
                    if (!isNaN(r) && !isNaN(n) && r - 1 in e) return (e[r - 2] || 0) + n - 1 || 0;
                    return -1
                }
            }
            e.exports = function(e) {
                var t = function(e) {
                    var t = [],
                        r = e.indexOf("\n");
                    for (; - 1 !== r;) t.push(r + 1), r = e.indexOf("\n", r + 1);
                    return t.push(e.length + 1), t
                }(String(e));
                return {
                    toPosition: n(t),
                    toOffset: a(t)
                }
            }
        },
        1509: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return function(r) {
                    var n, a = 0,
                        o = r.indexOf("\\"),
                        l = e[t],
                        i = [];
                    for (; - 1 !== o;) i.push(r.slice(a, o)), a = o + 1, (n = r.charAt(a)) && -1 !== l.indexOf(n) || i.push("\\"), o = r.indexOf("\\", a);
                    return i.push(r.slice(a)), i.join("")
                }
            }
        },
        1510: function(e, t, r) {
            "use strict";
            var n = r(95),
                a = r(317);
            e.exports = function(e) {
                return o.raw = function(e, o, l) {
                    return a(e, n(l, {
                        position: t(o),
                        warning: r
                    }))
                }, o;

                function t(t) {
                    for (var r = e.offset, n = t.line, a = []; ++n && n in r;) a.push((r[n] || 0) + 1);
                    return {
                        start: t,
                        indent: a
                    }
                }

                function r(t, r, n) {
                    3 !== n && e.file.message(t, r)
                }

                function o(n, o, l) {
                    a(n, {
                        position: t(o),
                        warning: r,
                        text: l,
                        reference: l,
                        textContext: e,
                        referenceContext: e
                    })
                }
            }
        },
        1511: function(e) {
            e.exports = JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}')
        },
        1512: function(e) {
            e.exports = JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}')
        },
        1513: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                var t = "string" == typeof e ? e.charCodeAt(0) : e;
                return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57
            }
        },
        1514: function(e, t, r) {
            "use strict";
            var n = r(532),
                a = r(228);
            e.exports = function(e) {
                return n(e) || a(e)
            }
        },
        1515: function(e, t, r) {
            "use strict";
            var n;
            e.exports = function(e) {
                var t, r = "&" + e + ";";
                if ((n = n || document.createElement("i")).innerHTML = r, 59 === (t = n.textContent).charCodeAt(t.length - 1) && "semi" !== e) return !1;
                return t !== r && t
            }
        },
        1516: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return function(t, r) {
                    var o, l, i, s, u, c, d = this,
                        f = d.offset,
                        h = [],
                        p = d[e + "Methods"],
                        m = d[e + "Tokenizers"],
                        g = r.line,
                        y = r.column;
                    if (!t) return h;
                    w.now = b, w.file = d.file, v("");
                    for (; t;) {
                        for (o = -1, l = p.length, u = !1; ++o < l && (s = p[o], !(i = m[s]) || i.onlyAtStart && !d.atStart || i.notInList && d.inList || i.notInBlock && d.inBlock || i.notInLink && d.inLink || (c = t.length, i.apply(d, [w, t]), !(u = c !== t.length))););
                        u || d.file.fail(new Error("Infinite loop"), w.now())
                    }
                    return d.eof = b(), h;

                    function v(e) {
                        for (var t = -1, r = e.indexOf("\n"); - 1 !== r;) g++, t = r, r = e.indexOf("\n", r + 1); - 1 === t ? y += e.length : y = e.length - t, g in f && (-1 !== t ? y += f[g] : y <= f[g] && (y = f[g] + 1))
                    }

                    function b() {
                        var e = {
                            line: g,
                            column: y
                        };
                        return e.offset = d.toOffset(e), e
                    }

                    function _(e) {
                        this.start = e, this.end = b()
                    }

                    function w(e) {
                        var r, o = function() {
                                var e = [],
                                    t = g + 1;
                                return function() {
                                    for (var r = g + 1; t < r;) e.push((f[t] || 0) + 1), t++;
                                    return e
                                }
                            }(),
                            l = (r = b(), function(e, t) {
                                var n = e.position,
                                    a = n ? n.start : r,
                                    o = [],
                                    l = n && n.end.line,
                                    i = r.line;
                                if (e.position = new _(a), n && t && n.indent) {
                                    if (o = n.indent, l < i) {
                                        for (; ++l < i;) o.push((f[l] || 0) + 1);
                                        o.push(r.column)
                                    }
                                    t = o.concat(t)
                                }
                                return e.position.indent = t || [], e
                            }),
                            i = b();
                        return function(e) {
                            t.substring(0, e.length) !== e && d.file.fail(new Error("Incorrectly eaten value: please report this warning on http://git.io/vg5Ft"), b())
                        }(e), s.reset = u, u.test = c, s.test = c, t = t.substring(e.length), v(e), o = o(), s;

                        function s(e, t) {
                            return l(function(e, t) {
                                var r = t ? t.children : h,
                                    o = r[r.length - 1];
                                return o && e.type === o.type && e.type in n && a(o) && a(e) && (e = n[e.type].call(d, o, e)), e !== o && r.push(e), d.atStart && 0 !== h.length && d.exitStart(), e
                            }(l(e), t), o)
                        }

                        function u() {
                            var r = s.apply(null, arguments);
                            return g = i.line, y = i.column, t = e + t, r
                        }

                        function c() {
                            var r = l({});
                            return g = i.line, y = i.column, t = e + t, r.position
                        }
                    }
                }
            };
            var n = {
                text: function(e, t) {
                    return e.value += t.value, e
                },
                blockquote: function(e, t) {
                    if (this.options.commonmark) return t;
                    return e.children = e.children.concat(t.children), e
                }
            };

            function a(e) {
                var t, r;
                return "text" !== e.type || !e.position || (t = e.position.start, r = e.position.end, t.line !== r.line || r.column - t.column === e.value.length)
            }
        },
        1517: function(e, t, r) {
            "use strict";
            var n = r(95),
                a = r(1518),
                o = r(533);
            e.exports = function(e) {
                var t, r, l = this.options;
                if (null == e) e = {};
                else {
                    if ("object" != typeof e) throw new Error("Invalid value `" + e + "` for setting `options`");
                    e = n(e)
                }
                for (t in o) {
                    if (null == (r = e[t]) && (r = l[t]), "blocks" !== t && "boolean" != typeof r || "blocks" === t && "object" != typeof r) throw new Error("Invalid value `" + r + "` for setting `options." + t + "`");
                    e[t] = r
                }
                return this.options = e, this.escape = a(e), this
            }
        },
        1518: function(e, t, r) {
            "use strict";
            e.exports = l;
            var n = ["\\", "`", "*", "{", "}", "[", "]", "(", ")", "#", "+", "-", ".", "!", "_", ">"],
                a = n.concat(["~", "|"]),
                o = a.concat(["\n", '"', "$", "%", "&", "'", ",", "/", ":", ";", "<", "=", "?", "@", "^"]);

            function l(e) {
                var t = e || {};
                return t.commonmark ? o : t.gfm ? a : n
            }
            l.default = n, l.gfm = a, l.commonmark = o
        },
        1519: function(e) {
            e.exports = JSON.parse('["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","legend","li","link","main","menu","menuitem","meta","nav","noframes","ol","optgroup","option","p","param","pre","section","source","title","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]')
        },
        1520: function(e, t, r) {
            "use strict";
            var n = r(95),
                a = r(1521);
            e.exports = function() {
                var e, t = String(this.file),
                    r = {
                        line: 1,
                        column: 1,
                        offset: 0
                    },
                    l = n(r);
                65279 === (t = t.replace(o, "\n")).charCodeAt(0) && (t = t.slice(1), l.column++, l.offset++);
                e = {
                    type: "root",
                    children: this.tokenizeBlock(t, l),
                    position: {
                        start: r,
                        end: this.eof || n(r)
                    }
                }, this.options.position || a(e, !0);
                return e
            };
            var o = /\r\n|\r/g
        },
        1521: function(e, t, r) {
            "use strict";
            var n = r(229);

            function a(e) {
                delete e.position
            }

            function o(e) {
                e.position = void 0
            }
            e.exports = function(e, t) {
                return n(e, t ? a : o), e
            }
        },
        1522: function(e, t, r) {
            "use strict";
            e.exports = a;
            var n = r(1523);

            function a(e, t, r, a) {
                var l;

                function i(e, n, s) {
                    var u, c = [];
                    return (t && !l(e, n, s[s.length - 1] || null) || !1 !== (c = o(r(e, s)))[0]) && e.children && "skip" !== c[0] && !1 === (u = o(function(e, t) {
                        var r, n = a ? -1 : 1,
                            o = (a ? e.length : -1) + n;
                        for (; o > -1 && o < e.length;) {
                            if (!1 === (r = i(e[o], o, t))[0]) return r;
                            o = "number" == typeof r[1] ? r[1] : o + n
                        }
                    }(e.children, s.concat(e))))[0] ? u : c
                }
                "function" == typeof t && "function" != typeof r && (a = r, r = t, t = null), l = n(t), i(e, null, [])
            }

            function o(e) {
                return null !== e && "object" == typeof e && "length" in e ? e : "number" == typeof e ? [!0, e] : [e]
            }
            a.CONTINUE = !0, a.SKIP = "skip", a.EXIT = !1
        },
        1523: function(e, t, r) {
            "use strict";

            function n(e) {
                if ("string" == typeof e) return function(e) {
                    return function(t) {
                        return Boolean(t && t.type === e)
                    }
                }(e);
                if (null == e) return l;
                if ("object" == typeof e) return ("length" in e ? o : a)(e);
                if ("function" == typeof e) return e;
                throw new Error("Expected function, string, or object as test")
            }

            function a(e) {
                return function(t) {
                    var r;
                    for (r in e)
                        if (t[r] !== e[r]) return !1;
                    return !0
                }
            }

            function o(e) {
                var t = function(e) {
                        for (var t = [], r = e.length, a = -1; ++a < r;) t[a] = n(e[a]);
                        return t
                    }(e),
                    r = t.length;
                return function() {
                    var e = -1;
                    for (; ++e < r;)
                        if (t[e].apply(this, arguments)) return !0;
                    return !1
                }
            }

            function l() {
                return !0
            }
            e.exports = n
        },
        1524: function(e, t, r) {
            "use strict";
            var n = r(71);
            e.exports = function(e, t, r) {
                var a, o, l, i, s = t.charAt(0);
                if ("\n" !== s) return;
                if (r) return !0;
                i = 1, a = t.length, o = s, l = "";
                for (; i < a && (s = t.charAt(i), n(s));) l += s, "\n" === s && (o += l, l = ""), i++;
                e(o)
            }
        },
        1525: function(e, t, r) {
            "use strict";
            var n = r(318),
                a = r(319);
            e.exports = function(e, t, r) {
                var n, l, i, s = -1,
                    u = t.length,
                    c = "",
                    d = "",
                    f = "",
                    h = "";
                for (; ++s < u;)
                    if (n = t.charAt(s), i)
                        if (i = !1, c += f, d += h, f = "", h = "", "\n" === n) f = n, h = n;
                        else
                            for (c += n, d += n; ++s < u;) {
                                if (!(n = t.charAt(s)) || "\n" === n) {
                                    h = n, f = n;
                                    break
                                }
                                c += n, d += n
                            } else if (" " === n && t.charAt(s + 1) === n && t.charAt(s + 2) === n && t.charAt(s + 3) === n) f += o, s += 3, i = !0;
                            else if ("\t" === n) f += n, i = !0;
                else {
                    for (l = "";
                        "\t" === n || " " === n;) l += n, n = t.charAt(++s);
                    if ("\n" !== n) break;
                    f += l + n, h += n
                }
                if (d) return !!r || e(c)({
                    type: "code",
                    lang: null,
                    value: a(d)
                })
            };
            var o = n(" ", 4)
        },
        1526: function(e, t, r) {
            "use strict";
            var n = r(319);
            e.exports = function(e, t, r) {
                var a, o, l, i, s, u, c, d, f, h, p, m = this.options,
                    g = t.length + 1,
                    y = 0,
                    v = "";
                if (!m.gfm) return;
                for (; y < g && (" " === (l = t.charAt(y)) || "\t" === l);) v += l, y++;
                if (h = y, "~" !== (l = t.charAt(y)) && "`" !== l) return;
                y++, o = l, a = 1, v += l;
                for (; y < g && (l = t.charAt(y)) === o;) v += l, a++, y++;
                if (a < 3) return;
                for (; y < g && (" " === (l = t.charAt(y)) || "\t" === l);) v += l, y++;
                i = "", s = "";
                for (; y < g && "\n" !== (l = t.charAt(y)) && "~" !== l && "`" !== l;) " " === l || "\t" === l ? s += l : (i += s + l, s = ""), y++;
                if ((l = t.charAt(y)) && "\n" !== l) return;
                if (r) return !0;
                (p = e.now()).column += v.length, p.offset += v.length, v += i, i = this.decode.raw(this.unescape(i), p), s && (v += s);
                s = "", d = "", f = "", u = "", c = "";
                for (; y < g;)
                    if (l = t.charAt(y), u += d, c += f, d = "", f = "", "\n" === l) {
                        for (u ? (d += l, f += l) : v += l, s = "", y++; y < g && " " === (l = t.charAt(y));) s += l, y++;
                        if (d += s, f += s.slice(h), !(s.length >= 4)) {
                            for (s = ""; y < g && (l = t.charAt(y)) === o;) s += l, y++;
                            if (d += s, f += s, !(s.length < a)) {
                                for (s = ""; y < g && (" " === (l = t.charAt(y)) || "\t" === l);) d += l, f += l, y++;
                                if (!l || "\n" === l) break
                            }
                        }
                    } else u += l, f += l, y++;
                return e(v += u + d)({
                    type: "code",
                    lang: i || null,
                    value: n(c)
                })
            }
        },
        1527: function(e, t, r) {
            "use strict";
            var n = r(156),
                a = r(320);
            e.exports = function(e, t, r) {
                var o, l, i, s, u, c, d, f, h, p = this.offset,
                    m = this.blockTokenizers,
                    g = this.interruptBlockquote,
                    y = e.now(),
                    v = y.line,
                    b = t.length,
                    _ = [],
                    w = [],
                    C = [],
                    E = 0;
                for (; E < b && (" " === (l = t.charAt(E)) || "\t" === l);) E++;
                if (">" !== t.charAt(E)) return;
                if (r) return !0;
                E = 0;
                for (; E < b;) {
                    for (s = t.indexOf("\n", E), d = E, f = !1, -1 === s && (s = b); E < b && (" " === (l = t.charAt(E)) || "\t" === l);) E++;
                    if (">" === t.charAt(E) ? (E++, f = !0, " " === t.charAt(E) && E++) : E = d, u = t.slice(E, s), !f && !n(u)) {
                        E = d;
                        break
                    }
                    if (!f && (i = t.slice(E), a(g, m, this, [e, i, !0]))) break;
                    c = d === E ? u : t.slice(d, s), C.push(E - d), _.push(c), w.push(u), E = s + 1
                }
                E = -1, b = C.length, o = e(_.join("\n"));
                for (; ++E < b;) p[v] = (p[v] || 0) + C[E], v++;
                return h = this.enterBlock(), w = this.tokenizeBlock(w.join("\n"), y), h(), o({
                    type: "blockquote",
                    children: w
                })
            }
        },
        1528: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r) {
                var n, a, o, l = this.options,
                    i = t.length + 1,
                    s = -1,
                    u = e.now(),
                    c = "",
                    d = "";
                for (; ++s < i;) {
                    if (" " !== (n = t.charAt(s)) && "\t" !== n) {
                        s--;
                        break
                    }
                    c += n
                }
                o = 0;
                for (; ++s <= i;) {
                    if ("#" !== (n = t.charAt(s))) {
                        s--;
                        break
                    }
                    c += n, o++
                }
                if (o > 6) return;
                if (!o || !l.pedantic && "#" === t.charAt(s + 1)) return;
                i = t.length + 1, a = "";
                for (; ++s < i;) {
                    if (" " !== (n = t.charAt(s)) && "\t" !== n) {
                        s--;
                        break
                    }
                    a += n
                }
                if (!l.pedantic && 0 === a.length && n && "\n" !== n) return;
                if (r) return !0;
                c += a, a = "", d = "";
                for (; ++s < i && (n = t.charAt(s)) && "\n" !== n;)
                    if (" " === n || "\t" === n || "#" === n) {
                        for (;
                            " " === n || "\t" === n;) a += n, n = t.charAt(++s);
                        for (;
                            "#" === n;) a += n, n = t.charAt(++s);
                        for (;
                            " " === n || "\t" === n;) a += n, n = t.charAt(++s);
                        s--
                    } else d += a + n, a = "";
                return u.column += c.length, u.offset += c.length, e(c += d + a)({
                    type: "heading",
                    depth: o,
                    children: this.tokenizeInline(d, u)
                })
            }
        },
        1529: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r) {
                var n, a, o, l, i = -1,
                    s = t.length + 1,
                    u = "";
                for (; ++i < s && ("\t" === (n = t.charAt(i)) || " " === n);) u += n;
                if ("*" !== n && "-" !== n && "_" !== n) return;
                a = n, u += n, o = 1, l = "";
                for (; ++i < s;)
                    if ((n = t.charAt(i)) === a) o++, u += l + a, l = "";
                    else {
                        if (" " !== n) return o >= 3 && (!n || "\n" === n) ? (u += l, !!r || e(u)({
                            type: "thematicBreak"
                        })) : void 0;
                        l += n
                    }
            }
        },
        1530: function(e, t, r) {
            "use strict";
            var n = r(156),
                a = r(318),
                o = r(228),
                l = r(534),
                i = r(1531),
                s = r(320);
            e.exports = function(e, t, r) {
                var a, l, i, u, c, d, f, h, v, b, _, w, C, E, k, x, M, S, O, T, I, R, A, P, j = this.options.commonmark,
                    D = this.options.pedantic,
                    z = this.blockTokenizers,
                    F = this.interruptList,
                    B = 0,
                    L = t.length,
                    N = null,
                    U = 0;
                for (; B < L;) {
                    if ("\t" === (u = t.charAt(B))) U += 4 - U % 4;
                    else {
                        if (" " !== u) break;
                        U++
                    }
                    B++
                }
                if (U >= 4) return;
                if (u = t.charAt(B), a = j ? g : m, !0 === p[u]) c = u, i = !1;
                else {
                    for (i = !0, l = ""; B < L && (u = t.charAt(B), o(u));) l += u, B++;
                    if (u = t.charAt(B), !l || !0 !== a[u]) return;
                    N = parseInt(l, 10), c = u
                }
                if (" " !== (u = t.charAt(++B)) && "\t" !== u) return;
                if (r) return !0;
                B = 0, E = [], k = [], x = [];
                for (; B < L;) {
                    for (d = t.indexOf("\n", B), f = B, h = !1, P = !1, -1 === d && (d = L), A = B + 4, U = 0; B < L;) {
                        if ("\t" === (u = t.charAt(B))) U += 4 - U % 4;
                        else {
                            if (" " !== u) break;
                            U++
                        }
                        B++
                    }
                    if (U >= 4 && (P = !0), M && U >= M.indent && (P = !0), u = t.charAt(B), v = null, !P) {
                        if (!0 === p[u]) v = u, B++, U++;
                        else {
                            for (l = ""; B < L && (u = t.charAt(B), o(u));) l += u, B++;
                            u = t.charAt(B), B++, l && !0 === a[u] && (v = u, U += l.length + 1)
                        }
                        if (v)
                            if ("\t" === (u = t.charAt(B))) U += 4 - U % 4, B++;
                            else if (" " === u) {
                            for (A = B + 4; B < A && " " === t.charAt(B);) B++, U++;
                            B === A && " " === t.charAt(B) && (B -= 3, U -= 3)
                        } else "\n" !== u && "" !== u && (v = null)
                    }
                    if (v) {
                        if (!D && c !== v) break;
                        h = !0
                    } else j || P || " " !== t.charAt(f) ? j && M && (P = U >= M.indent || U > 4) : P = !0, h = !1, B = f;
                    if (_ = t.slice(f, d), b = f === B ? _ : t.slice(B, d), ("*" === v || "_" === v || "-" === v) && z.thematicBreak.call(this, e, _, !0)) break;
                    if (w = C, C = !n(b).length, P && M) M.value = M.value.concat(x, _), k = k.concat(x, _), x = [];
                    else if (h) 0 !== x.length && (M.value.push(""), M.trail = x.concat()), M = {
                        value: [_],
                        indent: U,
                        trail: []
                    }, E.push(M), k = k.concat(x, _), x = [];
                    else if (C) {
                        if (w) break;
                        x.push(_)
                    } else {
                        if (w) break;
                        if (s(F, z, this, [e, _, !0])) break;
                        M.value = M.value.concat(x, _), k = k.concat(x, _), x = []
                    }
                    B = d + 1
                }
                I = e(k.join("\n")).reset({
                    type: "list",
                    ordered: i,
                    start: N,
                    loose: null,
                    children: []
                }), S = this.enterList(), O = this.enterBlock(), T = !1, B = -1, L = E.length;
                for (; ++B < L;) M = E[B].value.join("\n"), R = e.now(), (M = e(M)(y(this, M, R), I)).loose && (T = !0), M = E[B].trail.join("\n"), B !== L - 1 && (M += "\n"), e(M);
                return S(), O(), I.loose = T, I
            };
            var u = /\n\n(?!\s*$)/,
                c = /^\[([ \t]|x|X)][ \t]/,
                d = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/,
                f = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/,
                h = /^( {1,4}|\t)?/gm,
                p = {
                    "*": !0,
                    "+": !0,
                    "-": !0
                },
                m = {
                    ".": !0
                },
                g = {};

            function y(e, t, r) {
                var n, a, o = e.offset,
                    l = e.options.pedantic ? v : b,
                    i = null;
                return t = l.apply(null, arguments), e.options.gfm && (n = t.match(c)) && (a = n[0].length, i = "x" === n[1].toLowerCase(), o[r.line] += a, t = t.slice(a)), {
                    type: "listItem",
                    loose: u.test(t) || "\n" === t.charAt(t.length - 1),
                    checked: i,
                    children: e.tokenizeBlock(t, r)
                }
            }

            function v(e, t, r) {
                var n = e.offset,
                    a = r.line;
                return t = t.replace(f, o), a = r.line, t.replace(h, o);

                function o(e) {
                    return n[a] = (n[a] || 0) + e.length, a++, ""
                }
            }

            function b(e, t, r) {
                var n, o, s, u, c, f, h, p = e.offset,
                    m = r.line;
                for (u = (t = t.replace(d, (function(e, t, r, l, i) {
                        o = t + r + l, s = i, Number(r) < 10 && o.length % 2 == 1 && (r = " " + r);
                        return (n = t + a(" ", r.length) + l) + s
                    }))).split("\n"), (c = i(t, l(n).indent).split("\n"))[0] = s, p[m] = (p[m] || 0) + o.length, m++, f = 0, h = u.length; ++f < h;) p[m] = (p[m] || 0) + u[f].length - c[f].length, m++;
                return c.join("\n")
            }
            g["."] = !0, g[")"] = !0
        },
        1531: function(e, t, r) {
            "use strict";
            var n = r(156),
                a = r(318),
                o = r(534);
            e.exports = function(e, t) {
                var r, l, i, s, u = e.split("\n"),
                    c = u.length + 1,
                    d = 1 / 0,
                    f = [];
                u.unshift(a(" ", t) + "!");
                for (; c--;)
                    if (l = o(u[c]), f[c] = l.stops, 0 !== n(u[c]).length) {
                        if (!l.indent) {
                            d = 1 / 0;
                            break
                        }
                        l.indent > 0 && l.indent < d && (d = l.indent)
                    } if (d !== 1 / 0)
                    for (c = u.length; c--;) {
                        for (i = f[c], r = d; r && !(r in i);) r--;
                        s = 0 !== n(u[c]).length && d && r !== d ? "\t" : "", u[c] = s + u[c].slice(r in i ? i[r] + 1 : 0)
                    }
                return u.shift(), u.join("\n")
            }
        },
        1532: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r) {
                var a, o, l, i, s, u = e.now(),
                    c = t.length,
                    d = -1,
                    f = "";
                for (; ++d < c;) {
                    if (" " !== (l = t.charAt(d)) || d >= 3) {
                        d--;
                        break
                    }
                    f += l
                }
                a = "", o = "";
                for (; ++d < c;) {
                    if ("\n" === (l = t.charAt(d))) {
                        d--;
                        break
                    }
                    " " === l || "\t" === l ? o += l : (a += o + l, o = "")
                }
                if (u.column += f.length, u.offset += f.length, f += a + o, l = t.charAt(++d), i = t.charAt(++d), "\n" !== l || !n[i]) return;
                f += l, o = i, s = n[i];
                for (; ++d < c;) {
                    if ((l = t.charAt(d)) !== i) {
                        if ("\n" !== l) return;
                        d--;
                        break
                    }
                    o += l
                }
                if (r) return !0;
                return e(f + o)({
                    type: "heading",
                    depth: s,
                    children: this.tokenizeInline(a, u)
                })
            };
            var n = {};
            n["="] = 1, n["-"] = 2
        },
        1533: function(e, t, r) {
            "use strict";
            var n = r(535).openCloseTag;
            e.exports = function(e, t, r) {
                var a, o, l, i, s, u, c, d = this.options.blocks,
                    f = t.length,
                    h = 0,
                    p = [
                        [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
                        [/^<!--/, /-->/, !0],
                        [/^<\?/, /\?>/, !0],
                        [/^<![A-Za-z]/, />/, !0],
                        [/^<!\[CDATA\[/, /\]\]>/, !0],
                        [new RegExp("^</?(" + d.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
                        [new RegExp(n.source + "\\s*$"), /^$/, !1]
                    ];
                for (; h < f && ("\t" === (i = t.charAt(h)) || " " === i);) h++;
                if ("<" !== t.charAt(h)) return;
                a = -1 === (a = t.indexOf("\n", h + 1)) ? f : a, o = t.slice(h, a), l = -1, s = p.length;
                for (; ++l < s;)
                    if (p[l][0].test(o)) {
                        u = p[l];
                        break
                    } if (!u) return;
                if (r) return u[2];
                if (h = a, !u[1].test(o))
                    for (; h < f;) {
                        if (a = -1 === (a = t.indexOf("\n", h + 1)) ? f : a, o = t.slice(h + 1, a), u[1].test(o)) {
                            o && (h = a);
                            break
                        }
                        h = a
                    }
                return c = t.slice(0, h), e(c)({
                    type: "html",
                    value: c
                })
            }
        },
        1534: function(e, t, r) {
            "use strict";
            var n = r(71),
                a = r(321);
            e.exports = l, l.notInList = !0, l.notInBlock = !0;
            var o = /^( {4}|\t)?/gm;

            function l(e, t, r) {
                var l, i, s, u, c, d, f, h, p, m, g, y, v = this.offset;
                if (this.options.footnotes) {
                    for (l = 0, i = t.length, s = "", u = e.now(), c = u.line; l < i && (p = t.charAt(l), n(p));) s += p, l++;
                    if ("[" === t.charAt(l) && "^" === t.charAt(l + 1)) {
                        for (l = (s += "[^").length, f = ""; l < i && "]" !== (p = t.charAt(l));) "\\" === p && (f += p, l++, p = t.charAt(l)), f += p, l++;
                        if (f && "]" === t.charAt(l) && ":" === t.charAt(l + 1)) {
                            if (r) return !0;
                            for (m = a(f), l = (s += f + "]:").length; l < i && ("\t" === (p = t.charAt(l)) || " " === p);) s += p, l++;
                            for (u.column += s.length, u.offset += s.length, f = "", d = "", h = ""; l < i;) {
                                if ("\n" === (p = t.charAt(l))) {
                                    for (h = p, l++; l < i && "\n" === (p = t.charAt(l));) h += p, l++;
                                    for (f += h, h = ""; l < i && " " === (p = t.charAt(l));) h += p, l++;
                                    if (0 === h.length) break;
                                    f += h
                                }
                                f && (d += f, f = ""), d += p, l++
                            }
                            return s += d, d = d.replace(o, (function(e) {
                                return v[c] = (v[c] || 0) + e.length, c++, ""
                            })), g = e(s), y = this.enterBlock(), d = this.tokenizeBlock(d, u), y(), g({
                                type: "footnoteDefinition",
                                identifier: m,
                                children: d
                            })
                        }
                    }
                }
            }
        },
        1535: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return String(e).replace(/\s+/g, " ")
            }
        },
        1536: function(e, t, r) {
            "use strict";
            var n = r(71),
                a = r(321);
            e.exports = o, o.notInList = !0, o.notInBlock = !0;

            function o(e, t, r) {
                for (var n, o, s, u, c, d, f, h, p = this.options.commonmark, m = 0, g = t.length, y = ""; m < g && (" " === (u = t.charAt(m)) || "\t" === u);) y += u, m++;
                if ("[" === (u = t.charAt(m))) {
                    for (m++, y += u, s = ""; m < g && "]" !== (u = t.charAt(m));) "\\" === u && (s += u, m++, u = t.charAt(m)), s += u, m++;
                    if (s && "]" === t.charAt(m) && ":" === t.charAt(m + 1)) {
                        for (d = s, m = (y += s + "]:").length, s = ""; m < g && ("\t" === (u = t.charAt(m)) || " " === u || "\n" === u);) y += u, m++;
                        if (s = "", n = y, "<" === (u = t.charAt(m))) {
                            for (m++; m < g && l(u = t.charAt(m));) s += u, m++;
                            if ((u = t.charAt(m)) === l.delimiter) y += "<" + s + u, m++;
                            else {
                                if (p) return;
                                m -= s.length + 1, s = ""
                            }
                        }
                        if (!s) {
                            for (; m < g && i(u = t.charAt(m));) s += u, m++;
                            y += s
                        }
                        if (s) {
                            for (f = s, s = ""; m < g && ("\t" === (u = t.charAt(m)) || " " === u || "\n" === u);) s += u, m++;
                            if (c = null, '"' === (u = t.charAt(m)) ? c = '"' : "'" === u ? c = "'" : "(" === u && (c = ")"), c) {
                                if (!s) return;
                                for (m = (y += s + u).length, s = ""; m < g && (u = t.charAt(m)) !== c;) {
                                    if ("\n" === u) {
                                        if (m++, "\n" === (u = t.charAt(m)) || u === c) return;
                                        s += "\n"
                                    }
                                    s += u, m++
                                }
                                if ((u = t.charAt(m)) !== c) return;
                                o = y, y += s + u, m++, h = s, s = ""
                            } else s = "", m = y.length;
                            for (; m < g && ("\t" === (u = t.charAt(m)) || " " === u);) y += u, m++;
                            return (u = t.charAt(m)) && "\n" !== u ? void 0 : !!r || (n = e(n).test().end, f = this.decode.raw(this.unescape(f), n, {
                                nonTerminated: !1
                            }), h && (o = e(o).test().end, h = this.decode.raw(this.unescape(h), o)), e(y)({
                                type: "definition",
                                identifier: a(d),
                                title: h || null,
                                url: f
                            }))
                        }
                    }
                }
            }

            function l(e) {
                return ">" !== e && "[" !== e && "]" !== e
            }

            function i(e) {
                return "[" !== e && "]" !== e && !n(e)
            }
            l.delimiter = ">"
        },
        1537: function(e, t, r) {
            "use strict";
            var n = r(71);
            e.exports = function(e, t, r) {
                var a, o, l, i, s, u, c, d, f, h, p, m, g, y, v, b, _, w, C, E, k, x, M, S;
                if (!this.options.gfm) return;
                a = 0, w = 0, u = t.length + 1, c = [];
                for (; a < u;) {
                    if (x = t.indexOf("\n", a), M = t.indexOf("|", a + 1), -1 === x && (x = t.length), -1 === M || M > x) {
                        if (w < 2) return;
                        break
                    }
                    c.push(t.slice(a, x)), w++, a = x + 1
                }
                i = c.join("\n"), o = c.splice(1, 1)[0] || [], a = 0, u = o.length, w--, l = !1, p = [];
                for (; a < u;) {
                    if ("|" === (f = o.charAt(a))) {
                        if (h = null, !1 === l) {
                            if (!1 === S) return
                        } else p.push(l), l = !1;
                        S = !1
                    } else if ("-" === f) h = !0, l = l || null;
                    else if (":" === f) l = "left" === l ? "center" : h && null === l ? "right" : "left";
                    else if (!n(f)) return;
                    a++
                }!1 !== l && p.push(l);
                if (p.length < 1) return;
                if (r) return !0;
                _ = -1, E = [], k = e(i).reset({
                    type: "table",
                    align: p,
                    children: E
                });
                for (; ++_ < w;) {
                    for (C = c[_], s = {
                            type: "tableRow",
                            children: []
                        }, _ && e("\n"), e(C).reset(s, k), u = C.length + 1, a = 0, d = "", m = "", g = !0, y = null, v = null; a < u;)
                        if ("\t" !== (f = C.charAt(a)) && " " !== f) {
                            if ("" === f || "|" === f)
                                if (g) e(f);
                                else {
                                    if (f && v) {
                                        d += f, a++;
                                        continue
                                    }!m && !f || g || (i = m, d.length > 1 && (f ? (i += d.slice(0, d.length - 1), d = d.charAt(d.length - 1)) : (i += d, d = "")), b = e.now(), e(i)({
                                        type: "tableCell",
                                        children: this.tokenizeInline(m, b)
                                    }, s)), e(d + f), d = "", m = ""
                                }
                            else if (d && (m += d, d = ""), m += f, "\\" === f && a !== u - 2 && (m += C.charAt(a + 1), a++), "`" === f) {
                                for (y = 1; C.charAt(a + 1) === f;) m += f, a++, y++;
                                v ? y >= v && (v = 0) : v = y
                            }
                            g = !1, a++
                        } else m ? d += f : e(f), a++;
                    _ || e("\n" + o)
                }
                return k
            }
        },
        1538: function(e, t, r) {
            "use strict";
            var n = r(156),
                a = r(228),
                o = r(319),
                l = r(320);
            e.exports = function(e, t, r) {
                var i, s, u, c, d, f = this.options,
                    h = f.commonmark,
                    p = f.gfm,
                    m = this.blockTokenizers,
                    g = this.interruptParagraph,
                    y = t.indexOf("\n"),
                    v = t.length;
                for (; y < v;) {
                    if (-1 === y) {
                        y = v;
                        break
                    }
                    if ("\n" === t.charAt(y + 1)) break;
                    if (h) {
                        for (c = 0, i = y + 1; i < v;) {
                            if ("\t" === (u = t.charAt(i))) {
                                c = 4;
                                break
                            }
                            if (" " !== u) break;
                            c++, i++
                        }
                        if (c >= 4) {
                            y = t.indexOf("\n", y + 1);
                            continue
                        }
                    }
                    if (s = t.slice(y + 1), l(g, m, this, [e, s, !0])) break;
                    if (m.list.call(this, e, s, !0) && (this.inList || h || p && !a(n.left(s).charAt(0)))) break;
                    if (i = y, -1 !== (y = t.indexOf("\n", y + 1)) && "" === n(t.slice(i, y))) {
                        y = i;
                        break
                    }
                }
                if (s = t.slice(0, y), "" === n(s)) return e(s), null;
                if (r) return !0;
                return d = e.now(), s = o(s), e(s)({
                    type: "paragraph",
                    children: this.tokenizeInline(s, d)
                })
            }
        },
        1539: function(e, t, r) {
            "use strict";
            var n = r(1540);

            function a(e, t, r) {
                var n, a;
                if ("\\" === t.charAt(0) && (n = t.charAt(1), -1 !== this.escape.indexOf(n))) return !!r || (a = "\n" === n ? {
                    type: "break"
                } : {
                    type: "text",
                    value: n
                }, e("\\" + n)(a))
            }
            e.exports = a, a.locator = n
        },
        1540: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return e.indexOf("\\", t)
            }
        },
        1541: function(e, t, r) {
            "use strict";
            var n = r(71),
                a = r(317),
                o = r(536);
            e.exports = i, i.locator = o, i.notInLink = !0;
            var l = "mailto:".length;

            function i(e, t, r) {
                var o, i, s, u, c, d, f, h, p, m, g;
                if ("<" === t.charAt(0)) {
                    for (this, o = "", i = t.length, s = 0, u = "", d = !1, f = "", s++, o = "<"; s < i && (c = t.charAt(s), !(n(c) || ">" === c || "@" === c || ":" === c && "/" === t.charAt(s + 1)));) u += c, s++;
                    if (u) {
                        if (f += u, u = "", f += c = t.charAt(s), s++, "@" === c) d = !0;
                        else {
                            if (":" !== c || "/" !== t.charAt(s + 1)) return;
                            f += "/", s++
                        }
                        for (; s < i && (c = t.charAt(s), !n(c) && ">" !== c);) u += c, s++;
                        if (c = t.charAt(s), u && ">" === c) return !!r || (p = f += u, o += f + c, (h = e.now()).column++, h.offset++, d && ("mailto:" === f.slice(0, l).toLowerCase() ? (p = p.substr(l), h.column += l, h.offset += l) : f = "mailto:" + f), m = this.inlineTokenizers, this.inlineTokenizers = {
                            text: m.text
                        }, g = this.enterLink(), p = this.tokenizeInline(p, h), this.inlineTokenizers = m, g(), e(o)({
                            type: "link",
                            title: null,
                            url: a(f, {
                                nonTerminated: !1
                            }),
                            children: p
                        }))
                    }
                }
            }
        },
        1542: function(e, t, r) {
            "use strict";
            var n = r(317),
                a = r(71),
                o = r(1543);
            e.exports = s, s.locator = o, s.notInLink = !0;
            var l = ["http://", "https://", "mailto:"],
                i = l.length;

            function s(e, t, r) {
                var o, s, u, c, d, f, h, p, m, g, y, v;
                if (this.options.gfm) {
                    for (o = "", c = -1, p = i; ++c < p;)
                        if (f = l[c], (h = t.slice(0, f.length)).toLowerCase() === f) {
                            o = h;
                            break
                        } if (o) {
                        for (c = o.length, p = t.length, m = "", g = 0; c < p && (u = t.charAt(c), !a(u) && "<" !== u) && ("." !== u && "," !== u && ":" !== u && ";" !== u && '"' !== u && "'" !== u && ")" !== u && "]" !== u || (y = t.charAt(c + 1)) && !a(y)) && ("(" !== u && "[" !== u || g++, ")" !== u && "]" !== u || !(--g < 0));) m += u, c++;
                        if (m) {
                            if (s = o += m, "mailto:" === f) {
                                if (-1 === (d = m.indexOf("@")) || d === p - 1) return;
                                s = s.substr("mailto:".length)
                            }
                            return !!r || (v = this.enterLink(), s = this.tokenizeInline(s, e.now()), v(), e(o)({
                                type: "link",
                                title: null,
                                url: n(o, {
                                    nonTerminated: !1
                                }),
                                children: s
                            }))
                        }
                    }
                }
            }
        },
        1543: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                var r, a = n.length,
                    o = -1,
                    l = -1;
                if (!this.options.gfm) return -1;
                for (; ++o < a;) - 1 !== (r = e.indexOf(n[o], t)) && (r < l || -1 === l) && (l = r);
                return l
            };
            var n = ["https://", "http://", "mailto:"]
        },
        1544: function(e, t, r) {
            "use strict";
            var n = r(532),
                a = r(536),
                o = r(535).tag;
            e.exports = s, s.locator = a;
            var l = /^<a /i,
                i = /^<\/a>/i;

            function s(e, t, r) {
                var a, s, u = t.length;
                if (!("<" !== t.charAt(0) || u < 3) && (a = t.charAt(1), (n(a) || "?" === a || "!" === a || "/" === a) && (s = t.match(o)))) return !!r || (s = s[0], !this.inLink && l.test(s) ? this.inLink = !0 : this.inLink && i.test(s) && (this.inLink = !1), e(s)({
                    type: "html",
                    value: s
                }))
            }
        },
        1545: function(e, t, r) {
            "use strict";
            var n = r(71),
                a = r(537);
            e.exports = s, s.locator = a;
            var o = {}.hasOwnProperty,
                l = {
                    '"': '"',
                    "'": "'"
                },
                i = {};

            function s(e, t, r) {
                var a, s, u, c, d, f, h, p, m, g, y, v, b, _, w, C, E, k, x, M = "",
                    S = 0,
                    O = t.charAt(0),
                    T = this.options.pedantic,
                    I = this.options.commonmark,
                    R = this.options.gfm;
                if ("!" === O && (m = !0, M = O, O = t.charAt(++S)), "[" === O && (m || !this.inLink)) {
                    for (M += O, w = "", S++, v = t.length, _ = 0, (E = e.now()).column += S, E.offset += S; S < v;) {
                        if (f = O = t.charAt(S), "`" === O) {
                            for (s = 1;
                                "`" === t.charAt(S + 1);) f += O, S++, s++;
                            u ? s >= u && (u = 0) : u = s
                        } else if ("\\" === O) S++, f += t.charAt(S);
                        else if (u && !R || "[" !== O) {
                            if ((!u || R) && "]" === O) {
                                if (!_) {
                                    if (!T)
                                        for (; S < v && (O = t.charAt(S + 1), n(O));) f += O, S++;
                                    if ("(" !== t.charAt(S + 1)) return;
                                    f += "(", a = !0, S++;
                                    break
                                }
                                _--
                            }
                        } else _++;
                        w += f, f = "", S++
                    }
                    if (a) {
                        for (g = w, M += w + f, S++; S < v && (O = t.charAt(S), n(O));) M += O, S++;
                        if (O = t.charAt(S), p = I ? i : l, w = "", c = M, "<" === O) {
                            for (S++, c += "<"; S < v && ">" !== (O = t.charAt(S));) {
                                if (I && "\n" === O) return;
                                w += O, S++
                            }
                            if (">" !== t.charAt(S)) return;
                            M += "<" + w + ">", C = w, S++
                        } else {
                            for (O = null, f = ""; S < v && (O = t.charAt(S), !f || !o.call(p, O));) {
                                if (n(O)) {
                                    if (!T) break;
                                    f += O
                                } else {
                                    if ("(" === O) _++;
                                    else if (")" === O) {
                                        if (0 === _) break;
                                        _--
                                    }
                                    w += f, f = "", "\\" === O && (w += "\\", O = t.charAt(++S)), w += O
                                }
                                S++
                            }
                            C = w, S = (M += w).length
                        }
                        for (w = ""; S < v && (O = t.charAt(S), n(O));) w += O, S++;
                        if (O = t.charAt(S), M += w, w && o.call(p, O))
                            if (S++, M += O, w = "", y = p[O], d = M, I) {
                                for (; S < v && (O = t.charAt(S)) !== y;) "\\" === O && (w += "\\", O = t.charAt(++S)), S++, w += O;
                                if ((O = t.charAt(S)) !== y) return;
                                for (b = w, M += w + O, S++; S < v && (O = t.charAt(S), n(O));) M += O, S++
                            } else
                                for (f = ""; S < v;) {
                                    if ((O = t.charAt(S)) === y) h && (w += y + f, f = ""), h = !0;
                                    else if (h) {
                                        if (")" === O) {
                                            M += w + y + f, b = w;
                                            break
                                        }
                                        n(O) ? f += O : (w += y + f + O, f = "", h = !1)
                                    } else w += O;
                                    S++
                                }
                        if (")" === t.charAt(S)) return !!r || (M += ")", C = this.decode.raw(this.unescape(C), e(c).test().end, {
                            nonTerminated: !1
                        }), b && (d = e(d).test().end, b = this.decode.raw(this.unescape(b), d)), x = {
                            type: m ? "image" : "link",
                            title: b || null,
                            url: C
                        }, m ? x.alt = this.decode.raw(this.unescape(g), E) || null : (k = this.enterLink(), x.children = this.tokenizeInline(g, E), k()), e(M)(x))
                    }
                }
            }
            i['"'] = '"', i["'"] = "'", i["("] = ")"
        },
        1546: function(e, t, r) {
            "use strict";
            var n = r(71),
                a = r(537),
                o = r(321);
            e.exports = l, l.locator = a;

            function l(e, t, r) {
                var a, l, i, s, u, c, d, f, h = t.charAt(0),
                    p = 0,
                    m = t.length,
                    g = "",
                    y = "",
                    v = "link",
                    b = "shortcut";
                if ("!" === h && (v = "image", y = h, h = t.charAt(++p)), "[" === h) {
                    if (p++, y += h, c = "", this.options.footnotes && "^" === t.charAt(p)) {
                        if ("image" === v) return;
                        y += "^", p++, v = "footnote"
                    }
                    for (f = 0; p < m;) {
                        if ("[" === (h = t.charAt(p))) d = !0, f++;
                        else if ("]" === h) {
                            if (!f) break;
                            f--
                        }
                        "\\" === h && (c += "\\", h = t.charAt(++p)), c += h, p++
                    }
                    if (g = c, a = c, "]" === (h = t.charAt(p))) {
                        for (p++, g += h, c = ""; p < m && (h = t.charAt(p), n(h));) c += h, p++;
                        if (h = t.charAt(p), "footnote" !== v && "[" === h) {
                            for (l = "", c += h, p++; p < m && "[" !== (h = t.charAt(p)) && "]" !== h;) "\\" === h && (l += "\\", h = t.charAt(++p)), l += h, p++;
                            "]" === (h = t.charAt(p)) ? (b = l ? "full" : "collapsed", c += l + h, p++) : l = "", g += c, c = ""
                        } else {
                            if (!a) return;
                            l = a
                        }
                        if ("full" === b || !d) return g = y + g, "link" === v && this.inLink ? null : !!r || ("footnote" === v && -1 !== a.indexOf(" ") ? e(g)({
                            type: "footnote",
                            children: this.tokenizeInline(a, e.now())
                        }) : ((i = e.now()).column += y.length, i.offset += y.length, s = {
                            type: v + "Reference",
                            identifier: o(l = "full" === b ? l : a)
                        }, "link" !== v && "image" !== v || (s.referenceType = b), "link" === v ? (u = this.enterLink(), s.children = this.tokenizeInline(a, i), u()) : "image" === v && (s.alt = this.decode.raw(this.unescape(a), i) || null), e(g)(s)))
                    }
                }
            }
        },
        1547: function(e, t, r) {
            "use strict";
            var n = r(156),
                a = r(71),
                o = r(1548);
            e.exports = l, l.locator = o;

            function l(e, t, r) {
                var o, l, i, s, u, c, d, f = 0,
                    h = t.charAt(f);
                if (!("*" !== h && "_" !== h || t.charAt(++f) !== h || (l = this.options.pedantic, u = (i = h) + i, c = t.length, f++, s = "", h = "", l && a(t.charAt(f)))))
                    for (; f < c;) {
                        if (d = h, !((h = t.charAt(f)) !== i || t.charAt(f + 1) !== i || l && a(d)) && (h = t.charAt(f + 2)) !== i) {
                            if (!n(s)) return;
                            return !!r || ((o = e.now()).column += 2, o.offset += 2, e(u + s + u)({
                                type: "strong",
                                children: this.tokenizeInline(s, o)
                            }))
                        }
                        l || "\\" !== h || (s += h, h = t.charAt(++f)), s += h, f++
                    }
            }
        },
        1548: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                var r = e.indexOf("**", t),
                    n = e.indexOf("__", t);
                if (-1 === n) return r;
                if (-1 === r) return n;
                return n < r ? n : r
            }
        },
        1549: function(e, t, r) {
            "use strict";
            var n = r(156),
                a = r(1550),
                o = r(71),
                l = r(1551);
            e.exports = i, i.locator = l;

            function i(e, t, r) {
                var l, i, s, u, c, d, f, h = 0,
                    p = t.charAt(h);
                if (!("*" !== p && "_" !== p || (i = this.options.pedantic, c = p, s = p, d = t.length, h++, u = "", p = "", i && o(t.charAt(h)))))
                    for (; h < d;) {
                        if (f = p, !((p = t.charAt(h)) !== s || i && o(f))) {
                            if ((p = t.charAt(++h)) !== s) {
                                if (!n(u) || f === s) return;
                                if (!i && "_" === s && a(p)) {
                                    u += s;
                                    continue
                                }
                                return !!r || ((l = e.now()).column++, l.offset++, e(c + u + s)({
                                    type: "emphasis",
                                    children: this.tokenizeInline(u, l)
                                }))
                            }
                            u += s
                        }
                        i || "\\" !== p || (u += p, p = t.charAt(++h)), u += p, h++
                    }
            }
        },
        1550: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return a.test("number" == typeof e ? n(e) : e.charAt(0))
            };
            var n = String.fromCharCode,
                a = /\w/
        },
        1551: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                var r = e.indexOf("*", t),
                    n = e.indexOf("_", t);
                if (-1 === n) return r;
                if (-1 === r) return n;
                return n < r ? n : r
            }
        },
        1552: function(e, t, r) {
            "use strict";
            var n = r(71),
                a = r(1553);
            e.exports = o, o.locator = a;

            function o(e, t, r) {
                var a, o, l, i = "",
                    s = "",
                    u = "",
                    c = "";
                if (this.options.gfm && "~" === t.charAt(0) && "~" === t.charAt(1) && !n(t.charAt(2)))
                    for (a = 1, o = t.length, (l = e.now()).column += 2, l.offset += 2; ++a < o;) {
                        if (!("~" !== (i = t.charAt(a)) || "~" !== s || u && n(u))) return !!r || e("~~" + c + "~~")({
                            type: "delete",
                            children: this.tokenizeInline(c, l)
                        });
                        c += s, u = s, s = i
                    }
            }
        },
        1553: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return e.indexOf("~~", t)
            }
        },
        1554: function(e, t, r) {
            "use strict";
            var n = r(71),
                a = r(1555);
            e.exports = o, o.locator = a;

            function o(e, t, r) {
                for (var a, o, l, i, s, u, c, d, f = t.length, h = 0, p = "", m = ""; h < f && "`" === t.charAt(h);) p += "`", h++;
                if (p) {
                    for (s = p, i = h, p = "", d = t.charAt(h), l = 0; h < f;) {
                        if (u = d, d = t.charAt(h + 1), "`" === u ? (l++, m += u) : (l = 0, p += u), l && "`" !== d) {
                            if (l === i) {
                                s += p + m, c = !0;
                                break
                            }
                            p += m, m = ""
                        }
                        h++
                    }
                    if (!c) {
                        if (i % 2 != 0) return;
                        p = ""
                    }
                    if (r) return !0;
                    for (a = "", o = "", f = p.length, h = -1; ++h < f;) u = p.charAt(h), n(u) ? o += u : (o && (a && (a += o), o = ""), a += u);
                    return e(s)({
                        type: "inlineCode",
                        value: a
                    })
                }
            }
        },
        1555: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return e.indexOf("`", t)
            }
        },
        1556: function(e, t, r) {
            "use strict";
            var n = r(1557);
            e.exports = a, a.locator = n;

            function a(e, t, r) {
                for (var n, a = t.length, o = -1, l = ""; ++o < a;) {
                    if ("\n" === (n = t.charAt(o))) {
                        if (o < 2) return;
                        return !!r || e(l += n)({
                            type: "break"
                        })
                    }
                    if (" " !== n) return;
                    l += n
                }
            }
        },
        1557: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                var r = e.indexOf("\n", t);
                for (; r > t && " " === e.charAt(r - 1);) r--;
                return r
            }
        },
        1558: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r) {
                var n, a, o, l, i, s, u, c, d, f;
                if (r) return !0;
                n = this.inlineMethods, l = n.length, a = this.inlineTokenizers, o = -1, d = t.length;
                for (; ++o < l;) "text" !== (c = n[o]) && a[c] && ((u = a[c].locator) || e.file.fail("Missing locator: `" + c + "`"), -1 !== (s = u.call(this, t, 1)) && s < d && (d = s));
                i = t.slice(0, d), f = e.now(), this.decode(i, f, (function(t, r, n) {
                    e(n || t)({
                        type: "text",
                        value: t
                    })
                }))
            }
        },
        1559: function(e, t, r) {
            var n = r(1560);
            e.exports = function() {
                return function(e) {
                    return n(e, "list", (function(e, t) {
                        var r, n, a = 0;
                        for (r = 0, n = t.length; r < n; r++) "list" === t[r].type && (a += 1);
                        for (r = 0, n = e.children.length; r < n; r++) {
                            var o = e.children[r];
                            o.index = r, o.ordered = e.ordered
                        }
                        e.depth = a
                    })), e
                }
            }
        },
        156: function(e, t) {
            (t = e.exports = function(e) {
                return e.replace(/^\s*|\s*$/g, "")
            }).left = function(e) {
                return e.replace(/^\s*/, "")
            }, t.right = function(e) {
                return e.replace(/\s*$/, "")
            }
        },
        1560: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r) {
                var n = [];
                "function" == typeof t && (r = t, t = null);

                function a(e) {
                    var o;
                    return t && e.type !== t || (o = r(e, n.concat())), e.children && !1 !== o ? function(e, t) {
                        var r, o = e.length,
                            l = -1;
                        n.push(t);
                        for (; ++l < o;)
                            if ((r = e[l]) && !1 === a(r)) return !1;
                        return n.pop(), !0
                    }(e.children, e) : o
                }
                a(e)
            }
        },
        1561: function(e, t, r) {
            "use strict";
            var n = r(229),
                a = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i,
                o = /^<(\/?)([a-z]+)\s*>$/;
            e.exports = function(e) {
                var t, r;
                return n(e, "html", (function(e, n, l) {
                    r !== l && (t = [], r = l);
                    var i = function(e) {
                        var t = e.value.match(a);
                        return !!t && t[1]
                    }(e);
                    if (i) return l.children.splice(n, 1, {
                        type: "virtualHtml",
                        tag: i,
                        position: e.position
                    }), !0;
                    var s = function(e, t) {
                        var r = e.value.match(o);
                        return !!r && {
                            tag: r[2],
                            opening: !r[1],
                            node: e
                        }
                    }(e);
                    if (!s) return !0;
                    var u = function(e, t) {
                        var r = e.length;
                        for (; r--;)
                            if (e[r].tag === t) return e.splice(r, 1)[0];
                        return !1
                    }(t, s.tag);
                    return u ? l.children.splice(n, 0, function(e, t, r) {
                        var n = r.children.indexOf(e.node),
                            a = r.children.indexOf(t.node),
                            o = r.children.splice(n, a - n + 1).slice(1, -1);
                        return {
                            type: "virtualHtml",
                            children: o,
                            tag: e.tag,
                            position: {
                                start: e.node.position.start,
                                end: t.node.position.end,
                                indent: []
                            }
                        }
                    }(s, u, l)) : s.opening || t.push(s), !0
                }), !0), e
            }
        },
        1562: function(e, t, r) {
            "use strict";
            var n = r(229);

            function a(e, t, r, n) {
                if ("remove" === n) r.children.splice(t, 1);
                else if ("unwrap" === n) {
                    var a = [t, 1];
                    e.children && (a = a.concat(e.children)), Array.prototype.splice.apply(r.children, a)
                }
            }
            t.ofType = function(e, t) {
                return function(t) {
                    return e.forEach((function(e) {
                        return n(t, e, r, !0)
                    })), t
                };

                function r(e, r, n) {
                    n && a(e, r, n, t)
                }
            }, t.ifNotMatch = function(e, t) {
                return function(e) {
                    return n(e, r, !0), e
                };

                function r(r, n, o) {
                    o && !e(r, n, o) && a(r, n, o, t)
                }
            }
        },
        1563: function(e, t, r) {
            "use strict";
            var n = r(0),
                a = r(95),
                o = r(233),
                l = {
                    start: {
                        line: 1,
                        column: 1,
                        offset: 0
                    },
                    end: {
                        line: 1,
                        column: 1,
                        offset: 0
                    }
                };

            function i(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    u = t.renderers[e.type];
                void 0 === e.position && (e.position = r.node && r.node.position || l);
                var c = e.position.start,
                    d = [e.type, c.line, c.column, a].join("-");
                if (!o.isValidElementType(u)) throw new Error("Renderer for type `".concat(e.type, "` not defined or is not renderable"));
                var f = s(e, d, t, u, r, a);
                return n.createElement(u, f, f.children || h() || void 0);

                function h() {
                    return e.children && e.children.map((function(r, n) {
                        return i(r, t, {
                            node: e,
                            props: f
                        }, n)
                    }))
                }
            }

            function s(e, t, r, o, l, s) {
                var c, d = {
                        key: t
                    },
                    f = "string" == typeof o;
                r.sourcePos && e.position && (d["data-sourcepos"] = [(c = e.position).start.line, ":", c.start.column, "-", c.end.line, ":", c.end.column].map(String).join("")), r.rawSourcePos && !f && (d.sourcePosition = e.position), r.includeNodeIndex && l.node && l.node.children && !f && (d.index = l.node.children.indexOf(e), d.parentChildCount = l.node.children.length);
                var h = null !== e.identifier && void 0 !== e.identifier ? r.definitions[e.identifier] || {} : null;
                switch (e.type) {
                    case "root":
                        u(d, {
                            className: r.className
                        });
                        break;
                    case "text":
                        d.nodeKey = t, d.children = e.value;
                        break;
                    case "heading":
                        d.level = e.depth;
                        break;
                    case "list":
                        d.start = e.start, d.ordered = e.ordered, d.tight = !e.loose, d.depth = e.depth;
                        break;
                    case "listItem":
                        d.checked = e.checked, d.tight = !e.loose, d.ordered = e.ordered, d.index = e.index, d.children = function(e, t) {
                            if (e.loose) return e.children;
                            if (t.node && e.index > 0 && t.node.children[e.index - 1].loose) return e.children;
                            return function(e) {
                                return e.children.reduce((function(e, t) {
                                    return e.concat("paragraph" === t.type ? t.children || [] : [t])
                                }), [])
                            }(e)
                        }(e, l).map((function(t, n) {
                            return i(t, r, {
                                node: e,
                                props: d
                            }, n)
                        }));
                        break;
                    case "definition":
                        u(d, {
                            identifier: e.identifier,
                            title: e.title,
                            url: e.url
                        });
                        break;
                    case "code":
                        u(d, {
                            language: e.lang && e.lang.split(/\s/, 1)[0]
                        });
                        break;
                    case "inlineCode":
                        d.children = e.value, d.inline = !0;
                        break;
                    case "link":
                        u(d, {
                            title: e.title || void 0,
                            target: "function" == typeof r.linkTarget ? r.linkTarget(e.url, e.children, e.title) : r.linkTarget,
                            href: r.transformLinkUri ? r.transformLinkUri(e.url, e.children, e.title) : e.url
                        });
                        break;
                    case "image":
                        u(d, {
                            alt: e.alt || void 0,
                            title: e.title || void 0,
                            src: r.transformImageUri ? r.transformImageUri(e.url, e.children, e.title, e.alt) : e.url
                        });
                        break;
                    case "linkReference":
                        u(d, a(h, {
                            href: r.transformLinkUri ? r.transformLinkUri(h.href) : h.href
                        }));
                        break;
                    case "imageReference":
                        u(d, {
                            src: r.transformImageUri && h.href ? r.transformImageUri(h.href, e.children, h.title, e.alt) : h.href,
                            title: h.title || void 0,
                            alt: e.alt || void 0
                        });
                        break;
                    case "table":
                    case "tableHead":
                    case "tableBody":
                        d.columnAlignment = e.align;
                        break;
                    case "tableRow":
                        d.isHeader = "tableHead" === l.node.type, d.columnAlignment = l.props.columnAlignment;
                        break;
                    case "tableCell":
                        u(d, {
                            isHeader: l.props.isHeader,
                            align: l.props.columnAlignment[s]
                        });
                        break;
                    case "virtualHtml":
                        d.tag = e.tag;
                        break;
                    case "html":
                        d.isBlock = e.position.start.line !== e.position.end.line, d.escapeHtml = r.escapeHtml, d.skipHtml = r.skipHtml;
                        break;
                    case "parsedHtml":
                        var p;
                        e.children && (p = e.children.map((function(t, n) {
                            return i(t, r, {
                                node: e,
                                props: d
                            }, n)
                        }))), d.escapeHtml = r.escapeHtml, d.skipHtml = r.skipHtml, d.element = function(e, t) {
                            var r = e.element;
                            if (Array.isArray(r)) {
                                var a = n.Fragment || "div";
                                return n.createElement(a, null, r)
                            }
                            if (r.props.children || t) {
                                var o = n.Children.toArray(r.props.children).concat(t);
                                return n.cloneElement(r, null, o)
                            }
                            return n.cloneElement(r, null)
                        }(e, p);
                        break;
                    default:
                        u(d, a(e, {
                            type: void 0,
                            position: void 0,
                            children: void 0
                        }))
                }
                return !f && e.value && (d.value = e.value), d
            }

            function u(e, t) {
                for (var r in t) void 0 !== t[r] && (e[r] = t[r])
            }
            e.exports = i
        },
        1564: function(e, t, r) {
            "use strict";
            var n = r(229);

            function a(e) {
                var t = e.children;
                e.children = [{
                    type: "tableHead",
                    align: e.align,
                    children: [t[0]],
                    position: t[0].position
                }], t.length > 1 && e.children.push({
                    type: "tableBody",
                    align: e.align,
                    children: t.slice(1),
                    position: {
                        start: t[1].position.start,
                        end: t[t.length - 1].position.end
                    }
                })
            }
            e.exports = function(e) {
                return n(e, "table", a), e
            }
        },
        1565: function(e, t, r) {
            "use strict";
            e.exports = function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (t.children || []).reduce((function(t, r) {
                    return "definition" === r.type && (t[r.identifier] = {
                        href: r.url,
                        title: r.title
                    }), e(r, t)
                }), r)
            }
        },
        1566: function(e, t, r) {
            "use strict";
            var n = ["http", "https", "mailto", "tel"];
            e.exports = function(e) {
                var t = (e || "").trim(),
                    r = t.charAt(0);
                if ("#" === r || "/" === r) return t;
                var a = t.indexOf(":");
                if (-1 === a) return t;
                for (var o = n.length, l = -1; ++l < o;) {
                    var i = n[l];
                    if (a === i.length && t.slice(0, i.length).toLowerCase() === i) return t
                }
                return -1 !== (l = t.indexOf("?")) && a > l ? t : -1 !== (l = t.indexOf("#")) && a > l ? t : "javascript:void(0)"
            }
        },
        1567: function(e, t, r) {
            "use strict";
            var n = r(95),
                a = r(0),
                o = parseInt((a.version || "16").slice(0, 2), 10) >= 16,
                l = a.createElement;

            function i(e, t) {
                return l(e, s(t), t.children)
            }

            function s(e) {
                return e["data-sourcepos"] ? {
                    "data-sourcepos": e["data-sourcepos"]
                } : {}
            }
            e.exports = {
                break: "br",
                paragraph: "p",
                emphasis: "em",
                strong: "strong",
                thematicBreak: "hr",
                blockquote: "blockquote",
                delete: "del",
                link: "a",
                image: "img",
                linkReference: "a",
                imageReference: "img",
                table: i.bind(null, "table"),
                tableHead: i.bind(null, "thead"),
                tableBody: i.bind(null, "tbody"),
                tableRow: i.bind(null, "tr"),
                tableCell: function(e) {
                    var t = e.align ? {
                            textAlign: e.align
                        } : void 0,
                        r = s(e);
                    return l(e.isHeader ? "th" : "td", t ? n({
                        style: t
                    }, r) : r, e.children)
                },
                root: function(e) {
                    var t = !e.className,
                        r = t && a.Fragment || "div";
                    return l(r, t ? null : e, e.children)
                },
                text: function(e) {
                    return o ? e.children : l("span", null, e.children)
                },
                list: function(e) {
                    var t = s(e);
                    null !== e.start && 1 !== e.start && void 0 !== e.start && (t.start = e.start.toString());
                    return l(e.ordered ? "ol" : "ul", t, e.children)
                },
                listItem: function(e) {
                    var t = null;
                    if (null !== e.checked && void 0 !== e.checked) {
                        var r = e.checked;
                        t = l("input", {
                            type: "checkbox",
                            checked: r,
                            readOnly: !0
                        })
                    }
                    return l("li", s(e), t, e.children)
                },
                definition: function() {
                    return null
                },
                heading: function(e) {
                    return l("h".concat(e.level), s(e), e.children)
                },
                inlineCode: function(e) {
                    return l("code", s(e), e.children)
                },
                code: function(e) {
                    var t = e.language && "language-".concat(e.language),
                        r = l("code", t ? {
                            className: t
                        } : null, e.value);
                    return l("pre", s(e), r)
                },
                html: function(e) {
                    if (e.skipHtml) return null;
                    var t = e.isBlock ? "div" : "span";
                    if (e.escapeHtml) {
                        var r = a.Fragment || t;
                        return l(r, null, e.value)
                    }
                    var n = {
                        dangerouslySetInnerHTML: {
                            __html: e.value
                        }
                    };
                    return l(t, n)
                },
                virtualHtml: function(e) {
                    return l(e.tag, s(e), e.children)
                },
                parsedHtml: function(e) {
                    return e["data-sourcepos"] ? a.cloneElement(e.element, {
                        "data-sourcepos": e["data-sourcepos"]
                    }) : e.element
                }
            }
        },
        1568: function(e, t, r) {
            "use strict";
            t.HtmlParser = "undefined" == typeof Symbol ? "__RMD_HTML_PARSER__" : Symbol("__RMD_HTML_PARSER__")
        },
        1574: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    quickReply: t,
                    sendQuickReply: r
                } = e, n = function(e) {
                    switch (e.type) {
                        case a.QuickReplyType.PhoneNumber:
                            return e.viewerPhoneNumber;
                        case a.QuickReplyType.Email:
                            return e.viewerEmailAddress;
                        case a.QuickReplyType.Birthday:
                            return e.viewerBirthday;
                        case a.QuickReplyType.State:
                            return e.viewerState;
                        case a.QuickReplyType.ZipCode:
                            return e.viewerZipCode;
                        default:
                            return e.title
                    }
                }(t), o = (0, s.useCallback)(() => {
                    r && r(n, t.platformToken)
                }, [t, r, n]);
                return s.default.createElement(d, {
                    size: l.PillSize.Medium,
                    onClick: o
                }, s.default.createElement(i.TextPill, {
                    text: n
                }))
            };
            var n, a = r(8),
                o = (n = r(1)) && n.__esModule ? n : {
                    default: n
                },
                l = c(r(127)),
                i = r(149),
                s = c(r(0));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }
            const d = (0, o.default)(l.default)({
                margin: "8px 4px 8px 4px"
            })
        },
        1579: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                children: e,
                isMessageSelected: t
            }) {
                const r = a.default.Children.count(e),
                    n = e => r > 1 && e < r - 1 ? {
                        marginRight: -4
                    } : void 0;
                return (a.default.createElement(i, null, a.default.Children.map(e, (e, r) => e ? a.default.createElement(s, {
                    style: n(r),
                    isMessageSelected: t,
                    key: r
                }, e) : null)))
            };
            var n = l(r(1)),
                a = l(r(0)),
                o = l(r(2));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const i = (0, n.default)(o.default)({
                    position: "absolute",
                    flexDirection: "row",
                    right: 0,
                    bottom: -22,
                    fontSize: 12,
                    lineHeight: "13px"
                }),
                s = (0, n.default)(o.default)(e => ({
                    backgroundColor: e.theme.semanticColors.bgSurfaceSecondary,
                    border: e.isMessageSelected ? e.theme.select({
                        light: "3px solid rgb(178, 178, 178)",
                        dark: `3px solid ${e.theme.colors.base10}`
                    }) : `3px solid ${e.theme.colors.base10}`,
                    padding: "3px 4px",
                    textAlign: "center",
                    borderRadius: 100
                }))
        },
        1580: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                mentionCount: e,
                theme: t
            }) {
                return e && e > 0 ? o.default.createElement("div", {
                    style: {
                        marginRight: -3,
                        marginLeft: -3
                    }
                }, o.default.createElement(s, null, e)) : o.default.createElement(a.default, {
                    size: 14,
                    color: t.colors.blue
                })
            };
            var n = i(r(1)),
                a = i(r(1581)),
                o = i(r(0)),
                l = i(r(2));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const s = (0, n.default)(l.default)(e => ({
                alignItems: "center",
                justifyContent: "center",
                height: 20,
                width: 20,
                fontSize: 13,
                borderRadius: "100%",
                backgroundColor: e.theme.colors.blue,
                color: e.theme.semanticColors.textWhite
            }))
        },
        1581: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("circle", {
                    cx: "8",
                    cy: "8",
                    r: "6",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1582: function(e, t, r) {
            e.exports = r.p + "assets/assets/icons/static-icons/status-sending.static.svg"
        },
        1583: function(e, t, r) {
            e.exports = r.p + "assets/assets/icons/static-icons/status-sent.static.svg"
        },
        1584: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = y(r(541)),
                a = y(r(59)),
                o = y(r(5)),
                l = r(28),
                i = y(r(1)),
                s = r(35),
                u = r(630),
                c = r(11),
                d = g(r(0)),
                f = g(r(2)),
                h = y(r(73)),
                p = y(r(4));

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function() {
                    return e
                }, e
            }

            function g(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const v = (0, i.default)(h.default)({
                    flexDirection: "row",
                    alignItems: "center",
                    textAlign: "center",
                    fontSize: 12,
                    lineHeight: "13px"
                }),
                b = (0, i.default)(f.default)({
                    margin: "5px 0px",
                    flexDirection: "row",
                    "> *": {
                        margin: "0px 2px"
                    }
                }),
                _ = (0, i.default)(f.FocusableView)({
                    flexDirection: "row",
                    verticalAlign: "middle"
                }),
                w = (0, i.default)(f.default)({
                    fontSize: 12,
                    width: 14,
                    height: 14
                }),
                C = (0, i.default)(w)(e => ({
                    marginRight: e.isLast ? 0 : 1
                })),
                E = (0, i.default)(w)(e => ({
                    top: e.theme.select({
                        mac: -4,
                        windows: 0
                    }),
                    marginRight: 2
                })),
                k = (0, i.default)(p.default)({
                    paddingLeft: "4px",
                    paddingRight: "2px",
                    fontSize: "10px",
                    fontWeight: 600,
                    opacity: .7
                });
            const x = {
                showModal: l.AppContextActions.showModal
            };
            var M = (0, c.connect)(null, x)((function({
                reactions: e,
                onReactionTooltipOpened: t,
                onReactionTooltipHidden: r,
                showModal: l
            }) {
                const {
                    windowKey: i
                } = (0, s.useWindowContext)(), c = function(e) {
                    const t = {};
                    for (const r of e) t[r.reaction] || (t[r.reaction] = 0), t[r.reaction]++;
                    return t
                }((0, a.default)({
                    messenger: e.map(e => ({
                        ...e,
                        reaction: "❤" === e.reaction ? "😍" : e.reaction
                    })),
                    workchat: e
                })), f = Object.values(c).map(Number).reduce((e, t) => e + t), h = Object.keys(c).sort((e, t) => c[t] - c[e]).slice(0, 3), m = h.map((e, t) => n.default[e] ? n.default[e].messageNub : d.default.createElement(C, {
                    key: t,
                    isLast: t === h.length - 1
                }, e)), g = (0, d.useMemo)(() => o.default._("Reactions. {list of reaction details}", [o.default._param("list of reaction details", e.map(e => `${e.actorName} ${(0,u.getReactionLabels)()[e.reaction]}`))], {
                    hk: "2UErA8"
                }).toString(), [e]);
                return d.default.createElement(v, {
                    onTooltipShown: t,
                    onTooltipHidden: r,
                    "aria-label": g.toString(),
                    focusable: !0,
                    tooltipProps: {
                        children: d.default.createElement(d.default.Fragment, null, e.slice(0, 8).map(e => {
                            var t;
                            return (d.default.createElement(b, {
                                key: e.actorId
                            }, (null === (t = n.default[e.reaction]) || void 0 === t ? void 0 : t.messageNub) || d.default.createElement(E, null, e.reaction), d.default.createElement(p.default, {
                                use: "caption"
                            }, e.actorName || "")))
                        }), e.length > 8 && d.default.createElement(b, {
                            key: "plus_row"
                        }, d.default.createElement(p.default, {
                            use: "caption"
                        }, o.default._("{extra_reactions} More", [o.default._param("extra_reactions", e.length - 8)], {
                            hk: "1LULMf"
                        }))))
                    }
                }, d.default.createElement(_, {
                    onActivate: () => l({
                        type: "Reactions",
                        reactions: e
                    }, i)
                }, m), f > h.length && d.default.createElement(k, null, f))
            }));
            t.default = M
        },
        1585: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(r(1)),
                a = o(r(2));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = (0, n.default)(a.default)(e => ({
                width: "14px",
                height: "14px",
                paddingTop: e.paddingTop,
                ":not(:first-of-type)": {
                    marginLeft: "3px"
                }
            }));
            t.default = l
        },
        1586: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("linearGradient", {
                    id: "AngryReactIcon__angry-react-workchat-a",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "67.194%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#E04300"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#FFA320"
                })), a.default.createElement("linearGradient", {
                    id: "AngryReactIcon__angry-react-workchat-f",
                    x1: "50%",
                    x2: "50%",
                    y1: "13.511%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#3D0D00"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#661C04"
                })), a.default.createElement("linearGradient", {
                    id: "AngryReactIcon__angry-react-workchat-g",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#191A33"
                }), a.default.createElement("stop", {
                    offset: "87.162%",
                    stopColor: "#3B426A"
                })), a.default.createElement("linearGradient", {
                    id: "AngryReactIcon__angry-react-workchat-l",
                    x1: "82.871%",
                    x2: "82.871%",
                    y1: "109.337%",
                    y2: "0%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#9A2F00"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#D44800"
                })), a.default.createElement("filter", {
                    id: "AngryReactIcon__angry-react-workchat-c",
                    width: "118.8%",
                    height: "118.8%",
                    x: "-9.4%",
                    y: "-9.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: "1"
                }), a.default.createElement("feOffset", {
                    dy: "-1",
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.731459466 0 0 0 0 0.0510349878 0 0 0 0 0.0184398032 0 0 0 0.353638549 0"
                })), a.default.createElement("filter", {
                    id: "AngryReactIcon__angry-react-workchat-d",
                    width: "169.5%",
                    height: "366.7%",
                    x: "-33.8%",
                    y: "-66.7%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feOffset", {
                    dy: "1",
                    in: "SourceAlpha",
                    result: "shadowOffsetOuter1"
                }), a.default.createElement("feGaussianBlur", {
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1",
                    stdDeviation: ".5"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowBlurOuter1",
                    values: "0 0 0 0 1 0 0 0 0 0.509680707 0 0 0 0 0 0 0 0 0.371206975 0"
                })), a.default.createElement("filter", {
                    id: "AngryReactIcon__angry-react-workchat-i",
                    width: "111.4%",
                    height: "138.5%",
                    x: "-5.7%",
                    y: "-19.2%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: ".5"
                }), a.default.createElement("feOffset", {
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.0387427847 0 0 0 0 0.0406182666 0 0 0 0 0.0875053146 0 0 0 1 0"
                })), a.default.createElement("filter", {
                    id: "AngryReactIcon__angry-react-workchat-j",
                    width: "106.4%",
                    height: "165.6%",
                    x: "-3.2%",
                    y: "-16.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feOffset", {
                    dy: ".6",
                    in: "SourceAlpha",
                    result: "shadowOffsetOuter1"
                }), a.default.createElement("feGaussianBlur", {
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1",
                    stdDeviation: ".05"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowBlurOuter1",
                    values: "0 0 0 0 0.565874787 0 0 0 0 0.151271555 0 0 0 0 0 0 0 0 0.150240385 0"
                })), a.default.createElement("path", {
                    id: "AngryReactIcon__angry-react-workchat-b",
                    d: "M16 8A8 8 0 110 8a8 8 0 0116 0"
                }), a.default.createElement("path", {
                    id: "AngryReactIcon__angry-react-workchat-e",
                    d: "M5.2 13.551c0 .528 1.253.444 2.8.444 1.546 0 2.8.084 2.8-.444 0-.636-1.254-1.051-2.8-1.051-1.547 0-2.8.415-2.8 1.051"
                }), a.default.createElement("path", {
                    id: "AngryReactIcon__angry-react-workchat-h",
                    d: "M3.6 9.831c0-.791.538-1.431 1.2-1.431.663 0 1.2.64 1.2 1.431 0 .329-.093.633-.252.874a.527.527 0 01-.318.22c-.15.036-.373.075-.63.075s-.481-.039-.63-.075a.524.524 0 01-.318-.22 1.588 1.588 0 01-.252-.874zm6.4 0c0-.791.537-1.431 1.2-1.431.662 0 1.2.64 1.2 1.431 0 .329-.094.633-.252.874a.524.524 0 01-.318.22 2.734 2.734 0 01-.63.075c-.257 0-.48-.039-.63-.075a.53.53 0 01-.319-.22A1.596 1.596 0 0110 9.831z"
                }), a.default.createElement("path", {
                    id: "AngryReactIcon__angry-react-workchat-k",
                    d: "M9 7.6c0-.446.163-.6.445-.6.28 0 .414.276.506 1.066 1.128 0 3.038-.534 3.222-.534.178 0 .277.085.317.267.035.158-.023.308-.221.4-.621.287-2.443.935-3.984.935-.168 0-.285-.086-.285-.301V7.6zm-2.951.466C6.141 7.276 6.275 7 6.555 7c.282 0 .445.154.445.6v1.233c0 .215-.117.301-.285.301-1.541 0-3.363-.648-3.984-.935-.198-.092-.256-.242-.221-.4.041-.182.14-.267.317-.267.184 0 2.094.534 3.222.534z"
                })), a.default.createElement("g", {
                    fill: "none"
                }, a.default.createElement("use", {
                    fill: "url(#AngryReactIcon__angry-react-workchat-a)",
                    href: "#AngryReactIcon__angry-react-workchat-b"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#AngryReactIcon__angry-react-workchat-c)",
                    href: "#AngryReactIcon__angry-react-workchat-b"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#AngryReactIcon__angry-react-workchat-d)",
                    href: "#AngryReactIcon__angry-react-workchat-e"
                }), a.default.createElement("use", {
                    fill: "url(#AngryReactIcon__angry-react-workchat-f)",
                    href: "#AngryReactIcon__angry-react-workchat-e"
                }), a.default.createElement("use", {
                    fill: "url(#AngryReactIcon__angry-react-workchat-g)",
                    href: "#AngryReactIcon__angry-react-workchat-h"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#AngryReactIcon__angry-react-workchat-i)",
                    href: "#AngryReactIcon__angry-react-workchat-h"
                }), a.default.createElement("path", {
                    fill: "#4F4F67",
                    d: "M4.968 9.333a.329.329 0 01.007.071c0 .201-.176.366-.394.366-.217 0-.393-.165-.393-.366 0-.083.03-.16.08-.221.224.053.459.104.7.15zm5.926.437c-.211 0-.383-.153-.393-.348.259-.038.516-.085.766-.136a.333.333 0 01.02.119c0 .2-.175.365-.393.365z"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#AngryReactIcon__angry-react-workchat-j)",
                    href: "#AngryReactIcon__angry-react-workchat-k"
                }), a.default.createElement("use", {
                    fill: "url(#AngryReactIcon__angry-react-workchat-l)",
                    href: "#AngryReactIcon__angry-react-workchat-k"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1587: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 180 180",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-c",
                    cx: "50.001%",
                    cy: "50%",
                    r: "50%",
                    fx: "50.001%",
                    fy: "50%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#F08423",
                    stopOpacity: "0"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#F08423",
                    stopOpacity: ".34"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-d",
                    cx: "50%",
                    cy: "44.086%",
                    r: "57.412%",
                    fx: "50%",
                    fy: "44.086%",
                    gradientTransform: "matrix(-1 0 0 -.83877 1 .81)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FFE874"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#FFE368",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-e",
                    cx: "10.82%",
                    cy: "52.019%",
                    r: "10.077%",
                    fx: "10.82%",
                    fy: "52.019%",
                    gradientTransform: "matrix(.91249 .4091 -.31644 .7058 .174 .109)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#F28A2D",
                    stopOpacity: ".5"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#F28A2D",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-f",
                    cx: "74.131%",
                    cy: "76.545%",
                    r: "28.284%",
                    fx: "74.131%",
                    fy: "76.545%",
                    gradientTransform: "rotate(-38.243 1.4 .537) scale(1 .40312)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#F28A2D",
                    stopOpacity: ".5"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#F28A2D",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-g",
                    cx: "31.849%",
                    cy: "12.675%",
                    r: "10.743%",
                    fx: "31.849%",
                    fy: "12.675%",
                    gradientTransform: "matrix(.98371 -.17976 .03575 .19562 0 .16)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#D45F00",
                    stopOpacity: ".25"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#D45F00",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-h",
                    cx: "68.023%",
                    cy: "12.637%",
                    r: "12.093%",
                    fx: "68.023%",
                    fy: "12.637%",
                    gradientTransform: "matrix(.9787 .20532 -.04083 .19462 .02 -.038)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#D45F00",
                    stopOpacity: ".25"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#D45F00",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-j",
                    cx: "50.709%",
                    cy: "66.964%",
                    r: "87.22%",
                    fx: "50.709%",
                    fy: "66.964%",
                    gradientTransform: "matrix(0 -.8825 1 0 -.163 1.117)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#3B446B"
                }), a.default.createElement("stop", {
                    offset: "68.84%",
                    stopColor: "#202340"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-k",
                    cx: "49.239%",
                    cy: "66.964%",
                    r: "87.22%",
                    fx: "49.239%",
                    fy: "66.964%",
                    gradientTransform: "matrix(0 -.8825 1 0 -.177 1.104)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#3B446B"
                }), a.default.createElement("stop", {
                    offset: "68.84%",
                    stopColor: "#202340"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-l",
                    cx: "48.317%",
                    cy: "42.726%",
                    r: "29.766%",
                    fx: "48.317%",
                    fy: "42.726%",
                    gradientTransform: "matrix(-.09519 -.96847 1.71516 -1.15488 -.204 1.389)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#E38200"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#CD6700"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-m",
                    cx: "50%",
                    cy: "29.807%",
                    r: "31.377%",
                    fx: "50%",
                    fy: "29.807%",
                    gradientTransform: "matrix(.07236 -.9819 2.22613 1.12405 -.2 .454)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#E38200"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#CD6700"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-p",
                    cx: "73.646%",
                    cy: "44.274%",
                    r: "29.002%",
                    fx: "73.646%",
                    fy: "44.274%",
                    gradientTransform: "matrix(.87148 .34792 -.3234 .93753 .238 -.228)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FF7091",
                    stopOpacity: ".7"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#FE6D8E",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-q",
                    cx: "26.749%",
                    cy: "29.688%",
                    r: "29.002%",
                    fx: "26.749%",
                    fy: "29.688%",
                    gradientTransform: "matrix(.87148 .34792 -.3234 .93753 .13 -.075)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FF7091",
                    stopOpacity: ".7"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#FE6D8E",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-r",
                    cx: "23.798%",
                    cy: "53.35%",
                    r: "24.89%",
                    fx: "23.798%",
                    fy: "53.35%",
                    gradientTransform: "matrix(-.18738 .97947 -1.25372 -.27758 .951 .449)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#9C0600",
                    stopOpacity: ".999"
                }), a.default.createElement("stop", {
                    offset: "26.692%",
                    stopColor: "#9C0600",
                    stopOpacity: ".94"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#9C0600",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-s",
                    cx: "97.063%",
                    cy: "54.555%",
                    r: "15.021%",
                    fx: "97.063%",
                    fy: "54.555%",
                    gradientTransform: "matrix(.8002 .50886 -.59365 1.08039 .518 -.538)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#C71C08",
                    stopOpacity: ".75"
                }), a.default.createElement("stop", {
                    offset: "53.056%",
                    stopColor: "#C71C08",
                    stopOpacity: ".704"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#C71C08",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-t",
                    cx: "4.056%",
                    cy: "24.23%",
                    r: "13.05%",
                    fx: "4.056%",
                    fy: "24.23%",
                    gradientTransform: "matrix(.8728 -.3441 .41218 1.20997 -.095 -.037)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#9C0600",
                    stopOpacity: ".5"
                }), a.default.createElement("stop", {
                    offset: "31.614%",
                    stopColor: "#9C0600",
                    stopOpacity: ".473"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#9C0600",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-u",
                    cx: "74.586%",
                    cy: "77.013%",
                    r: "17.563%",
                    fx: "74.586%",
                    fy: "77.013%",
                    gradientTransform: "matrix(.77041 .55955 -.56333 .89765 .605 -.339)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#9C0600",
                    stopOpacity: ".999"
                }), a.default.createElement("stop", {
                    offset: "45.7%",
                    stopColor: "#9C0600",
                    stopOpacity: ".934"
                }), a.default.createElement("stop", {
                    offset: "59.211%",
                    stopColor: "#9C0600",
                    stopOpacity: ".803"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#9C0600",
                    stopOpacity: "0"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-v",
                    cx: "50.001%",
                    cy: "50%",
                    r: "51.087%",
                    fx: "50.001%",
                    fy: "50%",
                    gradientTransform: "matrix(-.3809 .91219 -.97139 -.46943 1.176 .279)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#C71C08",
                    stopOpacity: "0"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#C71C08"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-x",
                    cx: "2.243%",
                    cy: "4.089%",
                    r: "122.873%",
                    fx: "2.243%",
                    fy: "4.089%",
                    gradientTransform: "scale(.78523 1) rotate(36.406 .025 .05)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#EDA83A"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#FFDC5E"
                })), a.default.createElement("radialGradient", {
                    id: "CareReactIcon__care-react-workchat-z",
                    cx: "100%",
                    cy: "7.011%",
                    r: "105.039%",
                    fx: "100%",
                    fy: "7.011%",
                    gradientTransform: "scale(-.90713 -1) rotate(-45.799 -.217 2.489)"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#F4B248"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#FFDD5F"
                })), a.default.createElement("linearGradient", {
                    id: "CareReactIcon__care-react-workchat-b",
                    x1: "50%",
                    x2: "50%",
                    y1: "95.035%",
                    y2: "7.417%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#F28A2D"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#FDE86F"
                })), a.default.createElement("linearGradient", {
                    id: "CareReactIcon__care-react-workchat-i",
                    x1: "49.985%",
                    x2: "49.985%",
                    y1: "-40.061%",
                    y2: "111.909%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#482314"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#9A4111"
                })), a.default.createElement("linearGradient", {
                    id: "CareReactIcon__care-react-workchat-o",
                    x1: "52.727%",
                    x2: "28.964%",
                    y1: "31.334%",
                    y2: "102.251%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#F34462"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#CC0820"
                })), a.default.createElement("path", {
                    id: "CareReactIcon__care-react-workchat-a",
                    d: "M180 90c0 49.71-40.29 90-90 90S0 139.71 0 90 40.29 0 90 0s90 40.29 90 90z"
                }), a.default.createElement("path", {
                    id: "CareReactIcon__care-react-workchat-n",
                    d: "M108.947 95.828c-23.47-7.285-31.71 8.844-31.71 8.844s2.376-17.954-21.095-25.24c-22.57-7.004-36.253 13.757-37.307 26.812-2.264 28.103 22.134 59.996 31.26 70.86a8.062 8.062 0 008.34 2.584c13.697-3.777 51.904-16.242 66.009-40.667 6.54-11.328 7.06-36.188-15.497-43.193z"
                }), a.default.createElement("path", {
                    id: "CareReactIcon__care-react-workchat-w",
                    d: "M180.642 90c0 49.71-40.289 90-90 90-49.71 0-90-40.29-90-90s40.29-90 90-90c49.711 0 90 40.29 90 90z"
                })), a.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, a.default.createElement("g", {
                    fillRule: "nonzero"
                }, a.default.createElement("g", {
                    transform: "translate(.005 -.004)"
                }, a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-b)",
                    href: "#CareReactIcon__care-react-workchat-a"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-c)",
                    href: "#CareReactIcon__care-react-workchat-a"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-d)",
                    href: "#CareReactIcon__care-react-workchat-a"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-e)",
                    href: "#CareReactIcon__care-react-workchat-a"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-f)",
                    href: "#CareReactIcon__care-react-workchat-a"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-g)",
                    href: "#CareReactIcon__care-react-workchat-a"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-h)",
                    href: "#CareReactIcon__care-react-workchat-a"
                })), a.default.createElement("path", {
                    fill: "url(#CareReactIcon__care-react-workchat-i)",
                    d: "M109.013 66.234c-1.14-3.051-36.872-3.051-38.011 0-1.322 3.558 6.806 8.396 19.012 8.255 12.192.14 20.306-4.71 18.999-8.255z",
                    transform: "translate(.005 -.004)"
                }), a.default.createElement("path", {
                    fill: "url(#CareReactIcon__care-react-workchat-j)",
                    d: "M68.006 46.125c.014 7.566-4.823 9.788-11.995 10.702-7.102 1.068-11.883-2.068-11.995-10.702-.099-7.256 3.81-16.116 11.995-16.284 8.17.168 11.981 9.028 11.995 16.284z",
                    transform: "translate(.005 -.004)"
                }), a.default.createElement("path", {
                    fill: "#4E506A",
                    d: "M54.807 35.054c1.18 1.378.97 3.769-.479 5.358-1.448 1.575-3.571 1.744-4.753.366-1.181-1.378-.97-3.77.478-5.344 1.449-1.59 3.572-1.744 4.754-.38z"
                }), a.default.createElement("path", {
                    fill: "url(#CareReactIcon__care-react-workchat-k)",
                    d: "M112.022 46.125c-.014 7.566 4.823 9.788 11.995 10.702 7.102 1.068 11.883-2.068 11.995-10.702.099-7.256-3.81-16.116-11.995-16.284-8.184.168-11.995 9.028-11.995 16.284z",
                    transform: "translate(.005 -.004)"
                }), a.default.createElement("path", {
                    fill: "#4E506A",
                    d: "M124.078 34.52c.957 1.547.38 3.881-1.293 5.217-1.674 1.336-3.797 1.181-4.753-.366-.957-1.546-.38-3.88 1.293-5.217 1.66-1.336 3.797-1.181 4.753.366z"
                }), a.default.createElement("path", {
                    fill: "url(#CareReactIcon__care-react-workchat-l)",
                    d: "M37.969 23.344c-2.349 1.983-.45 6.047 3.515 4.19 6.328-2.967 19.899-6.623 31.824-5.287 3.164.351 4.19-.113 3.487-4.022-.689-3.853-4.33-6.37-13.387-5.26-14.035 1.716-23.09 8.396-25.44 10.379z",
                    transform: "translate(.005 -.004)"
                }), a.default.createElement("path", {
                    fill: "url(#CareReactIcon__care-react-workchat-m)",
                    d: "M116.592 12.952c-9.056-1.111-12.698 1.42-13.387 5.259-.703 3.91.323 4.373 3.487 4.022 11.925-1.336 25.481 2.32 31.824 5.287 3.965 1.857 5.864-2.207 3.515-4.19-2.348-1.97-11.404-8.649-25.439-10.378z",
                    transform: "translate(.005 -.004)"
                })), a.default.createElement("g", {
                    fillRule: "nonzero"
                }, a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-o)",
                    href: "#CareReactIcon__care-react-workchat-n"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-p)",
                    href: "#CareReactIcon__care-react-workchat-n"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-q)",
                    href: "#CareReactIcon__care-react-workchat-n"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-r)",
                    href: "#CareReactIcon__care-react-workchat-n"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-s)",
                    href: "#CareReactIcon__care-react-workchat-n"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-t)",
                    href: "#CareReactIcon__care-react-workchat-n"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-u)",
                    href: "#CareReactIcon__care-react-workchat-n"
                }), a.default.createElement("use", {
                    fill: "url(#CareReactIcon__care-react-workchat-v)",
                    fillOpacity: ".5",
                    href: "#CareReactIcon__care-react-workchat-n"
                })), a.default.createElement("g", {
                    transform: "translate(-.637 -.004)"
                }, a.default.createElement("mask", {
                    id: "CareReactIcon__care-react-workchat-y",
                    fill: "#fff"
                }, a.default.createElement("use", {
                    href: "#CareReactIcon__care-react-workchat-w"
                })), a.default.createElement("path", {
                    fill: "url(#CareReactIcon__care-react-workchat-x)",
                    fillRule: "nonzero",
                    d: "M15.52 86.231C9.642 80.508-.708 77.892-1.89 91.153c-.927 10.364 3.93 27.694 16.234 37.763C45.282 154.23 74.742 139.667 75.628 122c.699-13.932-15.502-12.327-20.648-12.045a.35.35 0 01-.197-.647 48.147 48.147 0 004.725-3.488c4.036-3.403 1.968-9.31-3.67-7.607-.858.253-14.583 4.359-23.288 1.068-9.872-3.726-11.053-7.214-17.03-13.05z",
                    mask: "url(#CareReactIcon__care-react-workchat-y)"
                }), a.default.createElement("path", {
                    fill: "url(#CareReactIcon__care-react-workchat-z)",
                    fillRule: "nonzero",
                    d: "M161.081 88.2c3.502-6.778 9.066-4.401 12.194-3.359 4.61 1.537 7.353 4.4 7.353 11.572 0 17.001-2.812 32.765-17.002 48.6-25.987 28.982-69.935 25.143-73.675 6.862-3.094-15.16 13.066-16.678 18.34-17.381.365-.042.421-.605.098-.746a46.169 46.169 0 01-5.4-2.896c-5.444-3.403-3.989-10.051 2.405-9.07 6.806 1.012 15.23 2.924 22.486 2.207 21.009-2.11 24.975-19.87 33.201-35.789z",
                    mask: "url(#CareReactIcon__care-react-workchat-y)"
                }))))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1588: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("linearGradient", {
                    id: "HeartReactIcon__heart-react-workchat-a",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FF6680"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#E61739"
                })), a.default.createElement("filter", {
                    id: "HeartReactIcon__heart-react-workchat-c",
                    width: "118.8%",
                    height: "118.8%",
                    x: "-9.4%",
                    y: "-9.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: "1"
                }), a.default.createElement("feOffset", {
                    dy: "-1",
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"
                })), a.default.createElement("path", {
                    id: "HeartReactIcon__heart-react-workchat-b",
                    d: "M8 0a8 8 0 100 16A8 8 0 008 0z"
                })), a.default.createElement("g", {
                    fill: "none"
                }, a.default.createElement("use", {
                    fill: "url(#HeartReactIcon__heart-react-workchat-a)",
                    href: "#HeartReactIcon__heart-react-workchat-b"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#HeartReactIcon__heart-react-workchat-c)",
                    href: "#HeartReactIcon__heart-react-workchat-b"
                }), a.default.createElement("path", {
                    fill: "#fff",
                    d: "M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1589: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("linearGradient", {
                    id: "LaughReactIcon__laugh-react-workchat-a",
                    x1: "50%",
                    x2: "50%",
                    y1: "10.25%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FEEA70"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#F69B30"
                })), a.default.createElement("linearGradient", {
                    id: "LaughReactIcon__laugh-react-workchat-d",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#472315"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#8B3A0E"
                })), a.default.createElement("linearGradient", {
                    id: "LaughReactIcon__laugh-react-workchat-e",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "81.902%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FC607C"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#D91F3A"
                })), a.default.createElement("filter", {
                    id: "LaughReactIcon__laugh-react-workchat-c",
                    width: "118.8%",
                    height: "118.8%",
                    x: "-9.4%",
                    y: "-9.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: "1"
                }), a.default.createElement("feOffset", {
                    dy: "-1",
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0"
                })), a.default.createElement("path", {
                    id: "LaughReactIcon__laugh-react-workchat-b",
                    d: "M16 8A8 8 0 110 8a8 8 0 0116 0"
                })), a.default.createElement("g", {
                    fill: "none"
                }, a.default.createElement("use", {
                    fill: "url(#LaughReactIcon__laugh-react-workchat-a)",
                    href: "#LaughReactIcon__laugh-react-workchat-b"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#LaughReactIcon__laugh-react-workchat-c)",
                    href: "#LaughReactIcon__laugh-react-workchat-b"
                }), a.default.createElement("path", {
                    fill: "url(#LaughReactIcon__laugh-react-workchat-d)",
                    d: "M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008"
                }), a.default.createElement("path", {
                    fill: "url(#LaughReactIcon__laugh-react-workchat-e)",
                    d: "M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5"
                }), a.default.createElement("path", {
                    fill: "#2A3755",
                    d: "M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1590: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("linearGradient", {
                    id: "SadReactIcon__sad-react-workchat-a",
                    x1: "50%",
                    x2: "50%",
                    y1: "10.25%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FEEA70"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#F69B30"
                })), a.default.createElement("linearGradient", {
                    id: "SadReactIcon__sad-react-workchat-d",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#472315"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#8B3A0E"
                })), a.default.createElement("linearGradient", {
                    id: "SadReactIcon__sad-react-workchat-e",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#191A33"
                }), a.default.createElement("stop", {
                    offset: "87.162%",
                    stopColor: "#3B426A"
                })), a.default.createElement("linearGradient", {
                    id: "SadReactIcon__sad-react-workchat-h",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#E78E0D"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#CB6000"
                })), a.default.createElement("linearGradient", {
                    id: "SadReactIcon__sad-react-workchat-i",
                    x1: "50%",
                    x2: "50%",
                    y1: "81.899%",
                    y2: "17.94%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#35CAFC"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#007EDB"
                })), a.default.createElement("linearGradient", {
                    id: "SadReactIcon__sad-react-workchat-j",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#6AE1FF",
                    stopOpacity: ".287"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#A8E3FF",
                    stopOpacity: ".799"
                })), a.default.createElement("filter", {
                    id: "SadReactIcon__sad-react-workchat-c",
                    width: "118.8%",
                    height: "118.8%",
                    x: "-9.4%",
                    y: "-9.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: "1"
                }), a.default.createElement("feOffset", {
                    dy: "-1",
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0"
                })), a.default.createElement("filter", {
                    id: "SadReactIcon__sad-react-workchat-g",
                    width: "111.4%",
                    height: "137.5%",
                    x: "-5.7%",
                    y: "-18.8%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: ".5"
                }), a.default.createElement("feOffset", {
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.0411226772 0 0 0 0 0.0430885485 0 0 0 0 0.0922353316 0 0 0 0.819684222 0"
                })), a.default.createElement("path", {
                    id: "SadReactIcon__sad-react-workchat-b",
                    d: "M16 8A8 8 0 110 8a8 8 0 0116 0"
                }), a.default.createElement("path", {
                    id: "SadReactIcon__sad-react-workchat-f",
                    d: "M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.492.492 0 01-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 01-.3-.225 1.741 1.741 0 01-.239-.898zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.49.49 0 01-.301.225 2.371 2.371 0 01-1.189 0 .49.49 0 01-.301-.225 1.74 1.74 0 01-.238-.898z"
                })), a.default.createElement("g", {
                    fill: "none"
                }, a.default.createElement("use", {
                    fill: "url(#SadReactIcon__sad-react-workchat-a)",
                    href: "#SadReactIcon__sad-react-workchat-b"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#SadReactIcon__sad-react-workchat-c)",
                    href: "#SadReactIcon__sad-react-workchat-b"
                }), a.default.createElement("path", {
                    fill: "url(#SadReactIcon__sad-react-workchat-d)",
                    d: "M5.333 12.765c0 .137.094.235.25.235.351 0 .836-.625 2.417-.625s2.067.625 2.417.625c.156 0 .25-.098.25-.235C10.667 12.368 9.828 11 8 11c-1.828 0-2.667 1.368-2.667 1.765"
                }), a.default.createElement("use", {
                    fill: "url(#SadReactIcon__sad-react-workchat-e)",
                    href: "#SadReactIcon__sad-react-workchat-f"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#SadReactIcon__sad-react-workchat-g)",
                    href: "#SadReactIcon__sad-react-workchat-f"
                }), a.default.createElement("path", {
                    fill: "#4E506A",
                    d: "M4.616 7.986c.128.125.136.372.017.551-.12.178-.32.222-.448.096-.128-.125-.135-.372-.017-.55.12-.179.32-.222.448-.097zm6.489 0c.128.125.136.372.018.551-.12.178-.32.222-.45.096-.127-.125-.134-.372-.015-.55.119-.179.319-.222.447-.097z"
                }), a.default.createElement("path", {
                    fill: "url(#SadReactIcon__sad-react-workchat-h)",
                    d: "M4.157 5.153c.332-.153.596-.219.801-.219.277 0 .451.119.55.306.175.329.096.401-.198.459-1.106.224-2.217.942-2.699 1.39-.301.28-.589-.03-.436-.274.154-.244.774-1.105 1.982-1.662zm6.335.087c.099-.187.273-.306.55-.306.206 0 .469.066.801.219 1.208.557 1.828 1.418 1.981 1.662.153.244-.134.554-.435.274-.483-.448-1.593-1.166-2.7-1.39-.294-.058-.371-.13-.197-.459z"
                }), a.default.createElement("path", {
                    fill: "url(#SadReactIcon__sad-react-workchat-i)",
                    d: "M13.5 16c-.828 0-1.5-.748-1.5-1.671 0-.922.356-1.545.643-2.147.598-1.258.716-1.432.857-1.432.141 0 .259.174.857 1.432.287.602.643 1.225.643 2.147 0 .923-.672 1.671-1.5 1.671"
                }), a.default.createElement("path", {
                    fill: "url(#SadReactIcon__sad-react-workchat-j)",
                    d: "M13.5 13.606c-.328 0-.594-.296-.594-.66 0-.366.141-.613.255-.852.236-.498.283-.566.339-.566.056 0 .103.068.339.566.114.24.255.486.255.851s-.266.661-.594.661"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1591: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("linearGradient", {
                    id: "ThumbsUpReactIcon__thumbs-up-react-workchat-a",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#18AFFF"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#0062DF"
                })), a.default.createElement("filter", {
                    id: "ThumbsUpReactIcon__thumbs-up-react-workchat-c",
                    width: "118.8%",
                    height: "118.8%",
                    x: "-9.4%",
                    y: "-9.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: "1"
                }), a.default.createElement("feOffset", {
                    dy: "-1",
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"
                })), a.default.createElement("path", {
                    id: "ThumbsUpReactIcon__thumbs-up-react-workchat-b",
                    d: "M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"
                })), a.default.createElement("g", {
                    fill: "none"
                }, a.default.createElement("use", {
                    fill: "url(#ThumbsUpReactIcon__thumbs-up-react-workchat-a)",
                    href: "#ThumbsUpReactIcon__thumbs-up-react-workchat-b"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#ThumbsUpReactIcon__thumbs-up-react-workchat-c)",
                    href: "#ThumbsUpReactIcon__thumbs-up-react-workchat-b"
                }), a.default.createElement("path", {
                    fill: "#fff",
                    d: "M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1592: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("linearGradient", {
                    id: "WowReactIcon__wow-react-workchat-a",
                    x1: "50%",
                    x2: "50%",
                    y1: "10.25%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#FEEA70"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#F69B30"
                })), a.default.createElement("linearGradient", {
                    id: "WowReactIcon__wow-react-workchat-d",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#472315"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#8B3A0E"
                })), a.default.createElement("linearGradient", {
                    id: "WowReactIcon__wow-react-workchat-e",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#191A33"
                }), a.default.createElement("stop", {
                    offset: "87.162%",
                    stopColor: "#3B426A"
                })), a.default.createElement("linearGradient", {
                    id: "WowReactIcon__wow-react-workchat-j",
                    x1: "50%",
                    x2: "50%",
                    y1: "0%",
                    y2: "100%"
                }, a.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#E78E0D"
                }), a.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#CB6000"
                })), a.default.createElement("filter", {
                    id: "WowReactIcon__wow-react-workchat-c",
                    width: "118.8%",
                    height: "118.8%",
                    x: "-9.4%",
                    y: "-9.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: "1"
                }), a.default.createElement("feOffset", {
                    dy: "-1",
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0"
                })), a.default.createElement("filter", {
                    id: "WowReactIcon__wow-react-workchat-g",
                    width: "111.1%",
                    height: "133.3%",
                    x: "-5.6%",
                    y: "-16.7%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feGaussianBlur", {
                    in: "SourceAlpha",
                    result: "shadowBlurInner1",
                    stdDeviation: ".5"
                }), a.default.createElement("feOffset", {
                    in: "shadowBlurInner1",
                    result: "shadowOffsetInner1"
                }), a.default.createElement("feComposite", {
                    in: "shadowOffsetInner1",
                    in2: "SourceAlpha",
                    k2: "-1",
                    k3: "1",
                    operator: "arithmetic",
                    result: "shadowInnerInner1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowInnerInner1",
                    values: "0 0 0 0 0.0980392157 0 0 0 0 0.101960784 0 0 0 0 0.2 0 0 0 0.819684222 0"
                })), a.default.createElement("filter", {
                    id: "WowReactIcon__wow-react-workchat-h",
                    width: "204%",
                    height: "927.2%",
                    x: "-52.1%",
                    y: "-333.3%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feOffset", {
                    dy: "1",
                    in: "SourceAlpha",
                    result: "shadowOffsetOuter1"
                }), a.default.createElement("feGaussianBlur", {
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1",
                    stdDeviation: "1.5"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowBlurOuter1",
                    values: "0 0 0 0 0.803921569 0 0 0 0 0.388235294 0 0 0 0 0.00392156863 0 0 0 0.14567854 0"
                })), a.default.createElement("path", {
                    id: "WowReactIcon__wow-react-workchat-b",
                    d: "M16 8A8 8 0 110 8a8 8 0 0116 0"
                }), a.default.createElement("path", {
                    id: "WowReactIcon__wow-react-workchat-f",
                    d: "M3.5 5.5c0-.828.559-1.5 1.25-1.5S6 4.672 6 5.5C6 6.329 5.441 7 4.75 7S3.5 6.329 3.5 5.5zm6.5 0c0-.828.56-1.5 1.25-1.5.691 0 1.25.672 1.25 1.5 0 .829-.559 1.5-1.25 1.5C10.56 7 10 6.329 10 5.5z"
                }), a.default.createElement("path", {
                    id: "WowReactIcon__wow-react-workchat-i",
                    d: "M11.068 1.696c.052-.005.104-.007.157-.007.487 0 .99.204 1.372.562a.368.368 0 01.022.51.344.344 0 01-.496.024c-.275-.259-.656-.4-.992-.369a.8.8 0 00-.59.331.346.346 0 01-.491.068.368.368 0 01-.067-.507 1.49 1.49 0 011.085-.612zm-7.665.555a2.042 2.042 0 011.372-.562 1.491 1.491 0 011.242.619.369.369 0 01-.066.507.347.347 0 01-.492-.068.801.801 0 00-.59-.331c-.335-.031-.717.11-.992.369a.344.344 0 01-.496-.024.368.368 0 01.022-.51z"
                })), a.default.createElement("g", {
                    fill: "none"
                }, a.default.createElement("use", {
                    fill: "url(#WowReactIcon__wow-react-workchat-a)",
                    href: "#WowReactIcon__wow-react-workchat-b"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#WowReactIcon__wow-react-workchat-c)",
                    href: "#WowReactIcon__wow-react-workchat-b"
                }), a.default.createElement("path", {
                    fill: "url(#WowReactIcon__wow-react-workchat-d)",
                    d: "M5.643 10.888C5.485 12.733 6.369 14 8 14c1.63 0 2.515-1.267 2.357-3.112C10.2 9.042 9.242 8 8 8c-1.242 0-2.2 1.042-2.357 2.888"
                }), a.default.createElement("use", {
                    fill: "url(#WowReactIcon__wow-react-workchat-e)",
                    href: "#WowReactIcon__wow-react-workchat-f"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#WowReactIcon__wow-react-workchat-g)",
                    href: "#WowReactIcon__wow-react-workchat-f"
                }), a.default.createElement("path", {
                    fill: "#4E506A",
                    d: "M4.481 4.567c.186.042.29.252.232.469-.057.218-.254.36-.44.318-.186-.042-.29-.252-.232-.47.057-.216.254-.36.44-.317zm6.658.063c.206.047.322.28.258.52-.064.243-.282.4-.489.354-.206-.046-.322-.28-.258-.521.063-.242.282-.4.49-.353z"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#WowReactIcon__wow-react-workchat-h)",
                    href: "#WowReactIcon__wow-react-workchat-i"
                }), a.default.createElement("use", {
                    fill: "url(#WowReactIcon__wow-react-workchat-j)",
                    href: "#WowReactIcon__wow-react-workchat-i"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1593: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = e.lastReadBy.length - 9;
                return (l.default.createElement(f, {
                    singleHead: 1 == e.lastReadBy.length,
                    hasReaction: e.hasReaction
                }, t > 0 && l.default.createElement(u.default, {
                    tooltipProps: {
                        children: l.default.createElement(g, {
                            participants: e.lastReadBy
                        }),
                        placement: "bottom-end"
                    },
                    delay: 1e3
                }, l.default.createElement(h, {
                    key: "overflow"
                }, l.default.createElement(p, {
                    use: "caption"
                }, a.default._("+{reaction_overflow}", [a.default._param("reaction_overflow", t)], {
                    hk: "BJIcC"
                })))), e.lastReadBy.slice(0, 9).map(e => l.default.createElement(u.default, {
                    key: e.contactId,
                    tooltipProps: {
                        children: a.default._("Seen by {seen label}", [a.default._param("seen label", e.name)], {
                            hk: "2PYCEb"
                        }).toString(),
                        placement: "bottom-end"
                    },
                    delay: 1e3
                }, l.default.createElement(m, {
                    key: e.contactId
                }, l.default.createElement(s.default, {
                    key: e.contactId,
                    profilePictureUrl: (0, n.default)(e.profilePicture),
                    size: "xxsmall"
                }))))))
            };
            var n = d(r(27)),
                a = d(r(5)),
                o = d(r(1)),
                l = d(r(0)),
                i = d(r(2)),
                s = d(r(38)),
                u = d(r(73)),
                c = d(r(4));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, o.default)(i.default)(e => {
                    return {
                        ...e.singleHead ? (t = e.hasReaction, {
                            bottom: t ? "15px" : "0",
                            paddingBottom: t ? "4px" : "2px",
                            position: "absolute",
                            right: 0
                        }) : {
                            flexDirection: "row",
                            alignSelf: "flex-end",
                            margin: "4px 0 4px 0"
                        }
                    };
                    var t
                }),
                h = (0, o.default)(i.default)(e => ({
                    backgroundColor: e.theme.colors.base50,
                    borderRadius: 100,
                    padding: "0px 5px",
                    height: 14,
                    justifyContent: "center",
                    overflow: "hidden"
                })),
                p = (0, o.default)(c.default)({
                    lineHeight: 14
                }),
                m = (0, o.default)(i.default)(e => ({
                    marginLeft: "4px"
                }));

            function g(e) {
                return l.default.createElement(l.default.Fragment, null, l.default.createElement(c.default, {
                    key: 1,
                    use: "caption"
                }, a.default._("Seen by", null, {
                    hk: "13vvpq"
                })), e.participants.slice(9).map(e => l.default.createElement(c.default, {
                    key: e.contactId,
                    use: "caption"
                }, e.name)))
            }
        },
        1594: function(e, t, r) {
            e.exports = r.p + "assets/assets/icons/static-icons/pause.static.svg"
        },
        1595: function(e, t, r) {
            e.exports = r.p + "assets/assets/icons/static-icons/play.static.svg"
        },
        1596: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n, a = (n = r(1)) && n.__esModule ? n : {
                    default: n
                },
                o = r(89),
                l = d(r(0)),
                i = r(40),
                s = r(6),
                u = d(r(4));

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }
            const f = (0, a.default)(i.MessageBubbleContainer)(e => ({
                    backgroundColor: "transparent",
                    paddingLeft: 0,
                    paddingRight: 0
                })),
                h = (0, a.default)(u.default)(e => ({
                    fontSize: (0, u.rem)(3.2),
                    lineHeight: e.theme.select({
                        mac: (0, u.rem)(2.5),
                        windows: (0, u.rem)(3.75)
                    }),
                    paddingTop: e.theme.select({
                        mac: 5,
                        windows: 0
                    })
                }));
            var p = (0, l.memo)((function({
                isSenderViewer: e,
                messageText: t,
                onActivate: r,
                bubbleContextMenuHandler: n
            }) {
                const a = (0, s.useTheme)();
                return (l.default.createElement(f, {
                    isSenderViewer: e,
                    onActivate: r || null,
                    doNotRoundCorners: !0,
                    onKeyDown: e => (0, o.openContextMenuOnKeyShortcut)(e, a, () => null != n && n(e, t)),
                    onContextMenu: e => {
                        n && n(e, t)
                    }
                }, t.length < 9 ? l.default.createElement(h, {
                    wrapText: !0
                }, t) : l.default.createElement(u.default, {
                    use: "headline",
                    wrapText: !0
                }, t)))
            }));
            t.default = p
        },
        1597: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                onRetrySend: e
            }) {
                const t = (0, i.useTheme)(),
                    r = null != e,
                    a = r ? n.default._("Send failed. Click to try again.", null, {
                        hk: "2OceJG"
                    }) : n.default._("Send failed. Operation could not be completed.", null, {
                        hk: "2jwmLc"
                    });
                return o.default.createElement(c, {
                    onClick: r ? e : void 0
                }, o.default.createElement(s.default, {
                    use: "caption",
                    color: t.colors.red
                }, a))
            };
            var n = u(r(5)),
                a = u(r(1)),
                o = u(r(0)),
                l = u(r(2)),
                i = r(6),
                s = u(r(4));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, a.default)(l.default)({
                marginLeft: "auto",
                paddingRight: 28,
                flexDirection: "row",
                paddingLeft: 2
            })
        },
        1598: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("g", {
                    id: "AppMacFinderIcon__app-mac",
                    fill: "currentColor",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1"
                }, a.default.createElement("path", {
                    id: "AppMacFinderIcon__Path",
                    fillRule: "evenodd",
                    d: "M13 13a1 1 0 00-2 0v2a1 1 0 002 0v-2zm2.5 5.002a1 1 0 001 1h3.01c.028 1.358.112 2.642.226 3.848-.57.1-1.152.151-1.737.151a9.995 9.995 0 01-6.366-2.277.998.998 0 00-1.409.135 1.004 1.004 0 00.135 1.411 12.002 12.002 0 009.602 2.572c.145 1.088.312 2.088.482 2.976A.997.997 0 0119.46 29H8a2 2 0 01-2-2V9a2 2 0 012-2h7.459a.997.997 0 01.982 1.184 52.512 52.512 0 00-.94 9.818zM23.546 29a.997.997 0 01-.979-.79 51.028 51.028 0 01-.65-3.864 11.879 11.879 0 003.721-2.076c.427-.352.487-.985.135-1.411a.998.998 0 00-1.408-.135 9.876 9.876 0 01-2.667 1.564 48.532 48.532 0 01-.197-4.286 1 1 0 00-1-1h-2.99c.08-3.716.583-6.941 1.057-9.211a.996.996 0 01.98-.791H28a2 2 0 012 2v18a2 2 0 01-2 2h-4.454zM25 13a1 1 0 00-2 0v2a1 1 0 002 0v-2z"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1599: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M13.672 7.5a2 2 0 011.414.586l.828.828a2 2 0 001.414.586h10.505c.92 0 1.667.746 1.667 1.667 0 .46-.373.833-.833.833H7.5a1 1 0 01-1-1V9.5a2 2 0 012-2h5.172zM7.5 14a1 1 0 00-1 1v10.5a2 2 0 002 2h19a2 2 0 002-2V15a1 1 0 00-1-1h-21z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1600: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M11.814 11.192c.339.532 1.08.618 1.596.255a8 8 0 0112.587 6.302.245.245 0 01-.247.251h-1.415a.833.833 0 00-.703 1.28l2.915 4.582a.833.833 0 001.406 0l2.915-4.581A.833.833 0 0030.165 18H28.75a.255.255 0 01-.253-.25C28.364 12.065 23.715 7.5 18 7.5c-2.33 0-4.481.758-6.223 2.042-.398.293-.474.846-.209 1.264l.246.386zM24.186 24.808c-.339-.532-1.08-.618-1.596-.255a8 8 0 01-12.587-6.302.245.245 0 01.247-.251h1.415a.833.833 0 00.703-1.28l-2.915-4.582a.833.833 0 00-1.406 0L5.132 16.72A.833.833 0 005.835 18H7.25c.138 0 .25.113.253.25C7.636 23.935 12.285 28.5 18 28.5c2.33 0 4.481-.758 6.223-2.042.398-.293.474-.846.209-1.264l-.246-.386z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1601: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                attachments: e,
                isFirst: t,
                isLast: r,
                isSenderViewer: n,
                bubbleContextMenuHandler: a,
                openMediaViewer: l
            }) {
                const i = 1 === e.length,
                    s = 2 === e.length || 4 === e.length;
                return i ? _(e[0], t, r, n, !1, a, l) : s ? o.default.createElement(c, {
                    isSenderViewer: n,
                    isFirst: t,
                    isLast: r
                }, e.map((i, s) => o.default.createElement(f, {
                    isPair: !0,
                    borderRadii: v(s, t, r, n, e.length),
                    key: i.attachmentFbid
                }, _(i, !1, !1, n, !0, a, l)))) : o.default.createElement(d, {
                    isSenderViewer: n,
                    isFirst: t,
                    isLast: r
                }, e.map((i, s) => o.default.createElement(f, {
                    isPair: !1,
                    borderRadii: b(s, t, r, n, e.length),
                    key: i.attachmentFbid
                }, _(i, !1, !1, n, !0, a, l))))
            };
            var n = s(r(546)),
                a = s(r(1)),
                o = s(r(0)),
                l = s(r(2)),
                i = r(40);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, a.default)(l.default)(e => ({
                    display: "grid",
                    gridColumnGap: "3px",
                    gridRowGap: "3px",
                    overflow: "hidden",
                    marginBottom: "3px",
                    ...(0, i.getBorderRadiusStyles)(e.isSenderViewer, e.isFirst, e.isLast)
                })),
                c = (0, a.default)(u)({
                    gridTemplateColumns: "auto auto"
                }),
                d = (0, a.default)(u)({
                    gridTemplateColumns: "auto auto auto"
                }),
                f = (0, a.default)(l.default)(e => ({
                    flex: 1,
                    overflow: "hidden",
                    width: "100%",
                    height: 200,
                    border: e.theme.select({
                        light: "1px solid " + e.theme.colors.base40,
                        dark: "1px solid " + e.theme.colors.flatBase40
                    }),
                    ...e.borderRadii
                })),
                h = {
                    borderBottomLeftRadius: i.CORNER_BORDER_RADIUS,
                    borderTopLeftRadius: i.CORNER_BORDER_RADIUS,
                    borderTopRightRadius: i.CORNER_BORDER_RADIUS,
                    borderBottomRightRadius: i.CORNER_BORDER_RADIUS
                },
                p = e => {
                    e.borderTopLeftRadius = i.ROUND_BORDER_RADIUS
                },
                m = e => {
                    e.borderTopRightRadius = i.ROUND_BORDER_RADIUS
                },
                g = e => {
                    e.borderBottomLeftRadius = i.ROUND_BORDER_RADIUS
                },
                y = e => {
                    e.borderBottomRightRadius = i.ROUND_BORDER_RADIUS
                };

            function v(e, t, r, n, a) {
                let o = {
                    ...h
                };
                return 0 === e && (t || n) && p(o), 1 !== e || !t && n || m(o), (2 === e || 0 === e && 2 === a) && (r || n) && g(o), 3 !== e && (1 !== e || 2 !== a) || !r && n || y(o), o
            }

            function b(e, t, r, n, a) {
                let o = {
                    ...h
                };
                return 0 === e && (t || n) && p(o), 2 !== e || !t && n || m(o), e === 3 * Math.floor((a - 1) / 3) && (r || n) && g(o), e !== a - 1 || a % 3 != 0 || !r && n || y(o), o
            }

            function _(e, t, r, a, l, i, s) {
                return o.default.createElement(n.default, {
                    key: e.offlineAttachmentId || e.attachmentFbid,
                    isFirst: t,
                    isLast: r,
                    isSenderViewer: a,
                    attachment: e,
                    partOfGroup: l,
                    openMediaViewer: s,
                    bubbleContextMenuHandler: i
                })
            }
        },
        1602: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 72 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("filter", {
                    id: "DisneyIcon__disneyA",
                    width: "151.8%",
                    height: "225.9%",
                    x: "-25.3%",
                    y: "-63%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feMorphology", {
                    in: "SourceAlpha",
                    operator: "dilate",
                    radius: ".5",
                    result: "shadowSpreadOuter1"
                }), a.default.createElement("feOffset", {
                    in: "shadowSpreadOuter1",
                    result: "shadowOffsetOuter1"
                }), a.default.createElement("feGaussianBlur", {
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1",
                    stdDeviation: "4"
                }), a.default.createElement("feComposite", {
                    in: "shadowBlurOuter1",
                    in2: "SourceAlpha",
                    operator: "out",
                    result: "shadowBlurOuter1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowBlurOuter1",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                })), a.default.createElement("path", {
                    id: "DisneyIcon__disneyB",
                    d: "M33.73 11.257c.33.018.625.142.869.354.33.318.417.85.26 1.274-.608 1.274-2.054 2.125-3.042 2.407-.59.142-1.338.142-1.877-.07-.26.159-.48.673-.8.46-.46-.367-.062-.941-.328-1.348-.055-.085-.193-.09-.263-.228-.365-.814.087-1.592.591-2.212.84-.954 3.251-2.017 4.59-.637zm-2.8.637c-.469.089-.999.297-1.285.637-.287.34-.47.673-.296 1.027.608-.46.904-1.097 1.582-1.487 0-.07.104-.124 0-.177zm2.834.177c-1.2-.106-2.103.814-2.955 1.699-.052.142-.365.3-.121.46 1.147.106 2.242-.23 3.076-1.008.244-.23.417-.531.296-.85a.618.618 0 00-.296-.301zm10.396 5.274c.556 1.38 1.025 3.557 0 4.884-.278.319-.765.612-1.078.372-1.147-.938-1.634-2.283-2.347-3.486-.104-.053-.104.088-.156.141-.261 1.221.226 2.814-.591 3.77a.624.624 0 01-.713-.425c-.4-1.257.017-2.566.122-3.823.243-.637.347-1.38.886-1.858.87.354 1.286 1.345 1.79 2.07.366.55.661 1.169 1.078 1.664.365-.16.186-.644.174-.938-.139-1.15-.452-2.212-.747-3.31-.017-.282-.174-.76.121-.937.783.354 1.113 1.186 1.46 1.876zm-5.25-.425c0 .266-.209.597-.383.637-1.668.266-3.529.106-5.093.637-.052.195.174.23.296.283 1.338.213 2.746.266 4.05.602.69.178.939 1.009.99 1.7.033.543-.173 1.203-.694 1.574-1.287.832-3.251.796-4.555.035-.498-.284-.973-.743-1.008-1.309.003-.45.191-.804.504-.973 1.251-.514 2.799-.23 3.876.424.07.354-.307.335-.486.46-1.2.708-2.104-.796-3.216-.247-.157.106-.27.402-.087.495 1.373.62 2.903.177 4.259-.212.156-.053.347-.212.365-.372-.052-.566-.678-.69-1.078-.85-1.182-.3-2.486-.3-3.755-.424-.243-.053-.553-.226-.626-.425-.139-.424-.139-1.008.174-1.362 1.617-1.451 4.068-1.328 6.12-.938.138.053.295.106.347.265zm-7.597.673c.157 1.699.244 3.274.209 5.06-.035.231-.295.284-.47.373-.278.053-.637-.008-.747-.16-.4-.654-.26-1.54-.296-2.336.053-1.256.035-2.619.383-3.787.067-.17.26-.318.417-.212.418.212.487.637.504 1.062zm19.313-.248c.085.143.171.364 0 .46-.782.354-1.842.195-2.746.3-.243.213-.435.567-.348.886.087.053.165.134.26.124.557.035 1.391-.266 1.757.265.09.158-.012.748-.261.761-.678.088-1.794-.087-2.12.088-.418.284-.383.832-.54 1.275.296.194.606-.005.956-.053.644-.107 1.356-.301 2-.16.121.23.295.478.173.761-1.095.885-2.509 1.792-4.015 1.15-.565-.258-.817-1.132-.626-1.875.121-.531.66-1.044.33-1.61-.052-.249.087-.46.296-.514.573 0 .452-.726.747-1.062-.33-.372-1.165-.354-1.077-1.097.4-.212.886-.141 1.338-.212 1.026-.213 2.173-.337 3.216-.213.209.043.487.46.66.726zM25.803 13.31c1.604 1.335 3.685 3.61 3.424 6.23-.313 2.07-2.468 3.627-4.293 4.123-1.774.53-3.999.478-5.807.053-.121.336-.243.743-.625.885a.803.803 0 01-.748-.124c-.539-.513-.104-1.504-.887-1.823-1.53-.655-3.18-1.947-3.963-3.54-.104-.318.017-.637.209-.884 1.199-.974 2.711-1.363 4.224-1.664.087.036.052-.088.121-.124.087-1.061.122-2.141.452-3.097a.268.268 0 01.383-.088c.956.743.504 2.141.921 3.15 1.825.088 3.651.177 5.094 1.22.486.408.605 1.185.452 1.63-.154.443-.66.76-1.13.796-.313 0-.904.03-.87-.213.035-.243 1.064-.642.748-.973-.454-.477-2.726-.761-4.134-.938-.174-.035-.334.018-.334.212-.034 1.345-.139 2.832.087 4.124a.317.317 0 00.209.212c2.486.407 5.11.177 7.058-1.274.904-.744 1.2-1.788 1.043-2.938-.783-3.203-4.068-5.132-6.763-6.37a18.721 18.721 0 00-8.64-1.611c-.495.037-1.28.21-1.286.39-.005.178.89.121.783.46-.107.337-1.017.137-1.287.052-.27-.084-.243-.478-.173-.725.677-1.221 2.57-1.32 3.424-1.363 4.728-.124 9.3 1.71 12.308 4.212zm-8.518 4.743c-1.2.018-2.469.141-3.581.566-.226.088-.505.336-.33.637.451.62 1.097 1.128 1.703 1.487.605.358 1.408.814 2.138.92.174-1.15.174-2.283.157-3.469-.07-.035 0-.106-.087-.141zm35.932-1.61c-.052 1.54-1.46 2.495-1.46 4.034.051.053.086.124.156.089 1.13-1.257 2.242-3.044 3.894-3.575.434-.035.828.35.99.637.574 1.168.435 2.814-.364 3.876-.826 1.042-2.26 2.088-3.894 1.91a23.021 23.021 0 00-1.409 5.345c-.138.372-.469.036-.677-.035-1.408-1.132-.252-4.13-.157-4.513.096-.382.473-1.281.748-2.035-.66-1.203-.244-2.654.295-3.77.417-.743.991-1.486 1.67-2.052.086 0 .156.018.208.088zm2.798 1.91c-.208-.035-.295.248-.469.302-.8.92-1.6 1.84-2 2.937.54.07.992-.283 1.461-.478.8-.513 1.304-1.362 1.252-2.336-.035-.159-.174-.283-.244-.424z"
                })), a.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, a.default.createElement("path", {
                    d: "M0 0h72v36H0z"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#DisneyIcon__disneyA)",
                    href: "#DisneyIcon__disneyB"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    fillOpacity: ".5",
                    stroke: "currentColor",
                    strokeOpacity: ".06",
                    strokeWidth: ".5",
                    d: "M33.84 11.016c.345.037.66.178.932.415.395.38.517 1.012.313 1.562-.57 1.194-1.922 2.175-3.21 2.542-.62.149-1.338.143-1.887-.032l-.084.089-.027.03c-.33.366-.545.489-.892.255-.297-.236-.351-.479-.328-.945v-.014c.013-.257.004-.355-.05-.442.005.01.004.009-.008.002l-.058-.034a.55.55 0 01-.22-.235c-.363-.81-.09-1.593.632-2.48 1.17-1.33 3.596-1.937 4.888-.713zm-2.667 1.11a4.45 4.45 0 010-.001zm-.444-.226a.915.915 0 00-.004.003c-.253.156-.444.328-.717.628.239-.18.588-.32.97-.391l-.047-.246-.048.094-.077-.134-.077.046zm-1.064 1.018c-.182.2-.309.32-.467.44l.375.09c-.075-.153-.05-.313.092-.53zm4.03-.602c-.863-.059-1.492.37-2.675 1.595a.466.466 0 01-.058.086c1.001.033 1.923-.297 2.63-.957.22-.208.3-.405.237-.57a.38.38 0 00-.135-.154zm7.071 7.36a9.974 9.974 0 00-.024 1.029c.012 1.338-.08 1.916-.564 2.483l-.148.084a.876.876 0 01-.993-.595c-.191-.6-.222-1.225-.139-2.013.026-.245.053-.445.117-.869.08-.532.11-.755.148-1.106.047-.123.084-.233.156-.462l.027-.087c.227-.72.403-1.08.771-1.407l.117-.103.144.058c.584.239.957.657 1.472 1.485l.196.317c.092.147.163.257.236.362.114.171.2.312.386.628l.002.002c.202.342.335.559.46.735a3.356 3.356 0 00-.025-.233 1.99 1.99 0 01-.028-.238c-.085-.704-.23-1.376-.488-2.34-.044-.168-.042-.159-.173-.639-.04-.147-.04-.147-.088-.345a2.355 2.355 0 00-.025-.206 3.83 3.83 0 01-.023-.178c-.036-.364.027-.625.29-.784l.113-.067.12.054c.582.264.94.711 1.339 1.503l.204.414.037.074.009.02c.78 1.936.911 3.906-.044 5.142-.414.474-1.003.724-1.424.4-.744-.608-1.147-1.209-1.888-2.612l-.006-.012c-.11-.206-.192-.362-.264-.493zm-6.71-1.402a40.7 40.7 0 001.332.162c1.157.132 1.778.227 2.454.401.733.19 1.104.947 1.178 1.927.04.69-.245 1.397-.809 1.799-1.34.867-3.402.867-4.814.043-.65-.372-1.096-.903-1.134-1.529.003-.532.234-.974.659-1.203.197-.08.404-.144.616-.19a22.525 22.525 0 01-.696-.06c-.349-.076-.706-.304-.81-.59-.185-.565-.127-1.21.244-1.627 1.468-1.318 3.586-1.52 6.398-.976l-.023-.01.062.024c.23.09.366.19.434.397l.013.078c0 .367-.271.811-.593.884-.541.086-.985.123-1.989.183l-.06.004c-1.172.07-1.86.138-2.462.283zm-2.493-.698c.173 1.881.241 3.418.206 5.115-.038.254-.187.377-.46.494l-.066.028c-.044.02-.058.026-.144.058-.376.072-.82-.016-1.007-.274-.276-.452-.336-.9-.329-1.791l.001-.084c.003-.296.003-.425-.004-.602.007-.168.012-.311.021-.608.012-.385.018-.541.027-.75.047-1.055.14-1.802.351-2.51.127-.322.487-.534.764-.344.46.234.613.63.64 1.268zm16.427.77c-.147.15-.234.34-.228.499.026.018.028.019.047.02.115.007.22.001.492-.024l.17-.016c.637-.05 1.02.03 1.295.431.189.331-.02 1.11-.446 1.133-.226.03-.482.034-.876.024l-.181-.005c-.628-.02-.881-.01-.955.028-.172.117-.238.272-.33.706l-.003.016c-.014.07-.027.128-.04.179.07-.005.161-.026.302-.064.139-.038.218-.057.307-.07.106-.017.16-.027.404-.072.277-.052.43-.078.604-.1.416-.055.761-.055 1.085.016l.167.127.056.102c.196.357.254.58.127.875l-.073.096c-1.593 1.287-2.884 1.776-4.276 1.183-.675-.308-.989-1.293-.766-2.16.032-.138.084-.27.169-.45l.056-.116c.226-.462.262-.64.105-.936-.078-.37.13-.719.54-.815.147 0 .193-.064.292-.399l.011-.036c.04-.135.074-.237.114-.322a3.054 3.054 0 00-.23-.117l-.023-.01c-.574-.272-.806-.512-.743-1.054l.015-.13.116-.062c.266-.14.488-.176.984-.202l.068-.003c.162-.009.265-.017.353-.031 1.186-.246 2.314-.333 3.317-.213.271.056.462.288.82.834l.006.01c.185.316.225.626-.112.815-.463.209-.904.26-1.83.275l-.055.001c-.427.007-.64.014-.855.036zm-28.703 5.662l-.005.015c-.163.428-.35.684-.695.812-.326.119-.732.051-1.005-.177-.242-.23-.329-.481-.4-.948l-.01-.063c-.074-.503-.145-.658-.403-.763-1.73-.74-3.334-2.12-4.103-3.692-.124-.379-.015-.773.29-1.156 1.058-.86 2.275-1.3 4.26-1.7l.024-.311.006-.082c.102-1.374.185-1.975.446-2.72a.52.52 0 01.754-.163c.57.442.709.925.793 2.062l.002.03c.037.498.073.773.15 1.013 2.668.136 3.833.37 5.077 1.271.528.442.734 1.307.528 1.902-.182.526-.76.92-1.366.965h-.1a6.852 6.852 0 01-.248 0 1.658 1.658 0 01-.444-.057c-.213-.066-.358-.214-.325-.441.028-.194.04-.205.503-.544.15-.11.233-.18.28-.239.013-.016.018-.013.021-.005-.233-.208-1.114-.433-2.44-.634a60.153 60.153 0 00-1.553-.21c-.039-.007-.041-.016-.038-.02 0 .192-.005.33-.018.71-.017.496-.024.743-.029 1.032-.015.952.021 1.678.134 2.321-.002-.01.024.017.005.014 2.702.443 5.132.065 6.857-1.22.795-.654 1.107-1.584.959-2.686-.639-2.615-2.922-4.5-6.621-6.201a18.46 18.46 0 00-8.52-1.59 4.562 4.562 0 00-.673.107c.074.023.134.049.19.083.175.105.264.28.199.486-.155.489-.884.44-1.599.216-.41-.128-.47-.573-.318-1.086.6-1.08 1.75-1.396 3.636-1.491 4.536-.119 9.215 1.557 12.475 4.27h0c2.32 1.932 3.744 4.13 3.511 6.459-.3 1.985-2.283 3.732-4.469 4.325-1.665.499-3.81.517-5.718.106zm-1.703-5.9a1.349 1.349 0 010 0zm-.46.198c-1.321.03-2.407.194-3.33.546-.176.069-.257.187-.219.257.392.537.974 1.03 1.63 1.418.77.456 1.308.722 1.8.84.111-.852.136-1.695.118-3.061zm-.001-.014v-.06c.016.022.04.041.068.052l.097.019c-.053 0-.105.002-.157.003a.26.26 0 01-.008-.014zm34.923 1.739l.232-.279c.056-.068.368-.449.46-.559 1.16-1.404 1.946-2.104 3.049-2.451.491-.04.977.319 1.235.776.62 1.262.46 3.007-.393 4.14-1.008 1.273-2.449 2.102-3.926 2.021a23.259 23.259 0 00-1.338 5.168c-.138.369-.428.407-.746.246a2.258 2.258 0 01-.098-.054 3.488 3.488 0 00-.225-.12c-.603-.485-.831-1.272-.78-2.269a7.903 7.903 0 01.273-1.608c.081-.306.267-.901.265-.891.06-.242.09-.322.523-1.446l.04-.107c.06-.152.109-.284.154-.404-.556-1.111-.358-2.446.35-3.91.458-.815 1.058-1.564 1.727-2.122l.16-.058c.17 0 .309.052.41.19l.049.157c-.024.684-.217 1.15-.763 2.098l-.02.036c-.372.645-.563 1.047-.638 1.446zm3.877-1.36a7.836 7.836 0 00-.005.005s0 0 0 0a.744.744 0 01-.223.189c-.987 1.137-1.457 1.757-1.77 2.458.153-.04.331-.119.586-.249L54.66 21a1.88 1.88 0 01.212-.095c.754-.484 1.183-1.262 1.142-2.072a.49.49 0 00-.091-.161z"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1603: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 72 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("filter", {
                    id: "GiphyIcon__giphyA",
                    width: "158.5%",
                    height: "355.2%",
                    x: "-29.2%",
                    y: "-127.6%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feMorphology", {
                    in: "SourceAlpha",
                    operator: "dilate",
                    radius: ".5",
                    result: "shadowSpreadOuter1"
                }), a.default.createElement("feOffset", {
                    in: "shadowSpreadOuter1",
                    result: "shadowOffsetOuter1"
                }), a.default.createElement("feGaussianBlur", {
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1",
                    stdDeviation: "4"
                }), a.default.createElement("feComposite", {
                    in: "shadowBlurOuter1",
                    in2: "SourceAlpha",
                    operator: "out",
                    result: "shadowBlurOuter1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowBlurOuter1",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0399999991 0"
                })), a.default.createElement("path", {
                    id: "GiphyIcon__giphyB",
                    d: "M21.415 17.44c0-.26-.047-.354-.328-.346-.64.023-1.273.008-1.914.008h-2.007c-.172 0-.25.04-.242.228.015.536.015 1.072.008 1.608 0 .166.046.22.217.213.375-.016.742-.008 1.117 0 .304 0 .773-.102.882.048.157.219.079.63.063.953a.438.438 0 01-.203.3c-.5.291-1.055.378-1.625.354-.992-.039-1.734-.457-2.132-1.41a3.348 3.348 0 01-.188-1.955c.188-.93.633-1.64 1.594-1.884.968-.244 1.882-.103 2.687.528.226.181.334.134.5-.055.28-.323.585-.623.882-.93.352-.363.352-.355-.031-.694-1.117-1.009-2.453-1.277-3.89-1.119-1.984.22-3.39 1.206-4.07 3.153a5.266 5.266 0 00-.179 2.845c.312 1.483 1.031 2.646 2.468 3.255a6.053 6.053 0 003.96.3c.805-.205 1.562-.49 2.11-1.167a1.3 1.3 0 00.312-.882l.007-3.35h.002zm23.245.71l.008-4.32c0-.212-.031-.299-.274-.291a44.05 44.05 0 01-2.046 0c-.21-.008-.267.063-.267.27v2.932c0 .252-.078.291-.305.291a77.674 77.674 0 00-2.71 0c-.235.008-.274-.079-.268-.291l.008-2.964c0-.173-.03-.244-.217-.236h-2.138c-.172 0-.242.031-.242.228v8.765c0 .181.046.236.226.236h2.138c.217.008.235-.086.235-.26l-.008-2.932c0-.197.046-.252.242-.252h2.812c.227 0 .258.079.258.276l-.008 2.9c0 .205.039.276.258.27a42.39 42.39 0 012.007 0c.242.008.297-.063.297-.3l-.008-4.319.002-.003zm-12.427-4.595c-1.554-.04-3.107-.024-4.655-.04-.25 0-.329.064-.329.324l.008 4.311v4.35c0 .19.032.27.243.261a49.608 49.608 0 012.171 0c.203 0 .25-.063.25-.252l-.008-1.994c0-.197.055-.252.25-.252.617.008 1.234.015 1.851-.016.819-.04 1.601-.229 2.25-.773 1.03-.859 1.414-2.38.953-3.76a3.268 3.268 0 00-2.984-2.159zm-.562 4.5c-.524.008-1.04-.007-1.563.008-.217.008-.267-.07-.25-.27.016-.29 0-.575 0-.866v-.962c-.007-.158.047-.205.196-.197.554.008 1.101-.016 1.656.008.671.023 1.093.504 1.086 1.174-.024.686-.43 1.096-1.125 1.104v.002zm23.432-4.516c-.828 0-1.656-.008-2.492.008a.486.486 0 00-.343.197 94.65 94.65 0 00-1.664 2.664c-.164.276-.226.22-.367-.015l-1.578-2.641c-.093-.158-.195-.213-.375-.213l-2.429.008c-.086 0-.18.024-.267.04.039.07.07.15.117.219l3.234 5.091c.086.134.132.316.14.473v3.122c0 .197.032.283.258.275a46.787 46.787 0 012.109 0c.21.008.242-.07.242-.26L51.68 20.9c0-.512-.015-1.032.008-1.545a.98.98 0 01.156-.496l3.375-5.068c.046-.063.062-.142.101-.22a.666.666 0 00-.217-.03zm-29.642.205c0-.19-.055-.229-.234-.229h-2.072c-.234-.008-.273.071-.273.284l.008 4.311v4.375c0 .197.023.283.25.276a60.176 60.176 0 012.07 0c.18 0 .259-.016.259-.237l-.008-8.782v.002z"
                })), a.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, a.default.createElement("path", {
                    d: "M0 0h72v36H0z"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#GiphyIcon__giphyB)",
                    href: "#GiphyIcon__giphyB"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    fillOpacity: ".5",
                    stroke: "currentColor",
                    strokeOpacity: ".06",
                    strokeWidth: ".5",
                    d: "M21.663 17.664l-.008 3.12c.01.392-.114.734-.367 1.046-.52.645-1.192.984-2.242 1.252a6.303 6.303 0 01-4.12-.312c-1.431-.606-2.262-1.757-2.615-3.435a5.513 5.513 0 01.189-2.978c.694-1.988 2.141-3.083 4.278-3.319 1.62-.177 2.978.184 4.083 1.181.326.289.366.333.375.514.008.183-.03.231-.33.54-.062.065-.112.117-.225.231v.001c-.333.34-.478.492-.65.69-.263.3-.52.344-.842.087-.718-.563-1.543-.717-2.47-.483-.788.2-1.221.752-1.41 1.69a3.097 3.097 0 00.172 1.81c.344.823.968 1.22 1.912 1.258.578.024 1.067-.075 1.495-.325a.254.254 0 00.073-.092c.003-.06.006-.102.016-.221l.009-.107c.018-.26.005-.404-.04-.466.018.025-.114.016-.341.035l-.026.002c-.164.014-.23.018-.319.018a31.833 31.833 0 00-.56-.009 11.37 11.37 0 00-.542.01c-.312.01-.476-.156-.476-.467.008-.586.006-1.104-.008-1.594-.014-.333.173-.49.492-.49h2.007a71.929 71.929 0 01.958.006c.373 0 .664-.003.949-.013.417-.012.585.186.585.597v.223h-.002zm23.245.494l.008 4.315c0 .38-.173.562-.553.55a42.13 42.13 0 00-1.994 0c-.359.01-.515-.17-.515-.521l.008-2.9c0-.09.051-.026-.008-.026H39.05v.001l.008 2.933c0 .334-.135.523-.485.51h-2.138c-.32 0-.476-.168-.476-.486v-8.765c0-.333.175-.478.492-.478h2.128c.331-.014.477.166.477.487l-.008 2.97c-.002.098-.052.037.013.034a77.768 77.768 0 012.715 0c.112 0 .055.05.055-.041v-2.932c0-.35.174-.533.523-.52a43.79 43.79 0 002.032 0c.38-.012.532.175.532.542l-.008 4.32-.002.007zM32.483 13.32a3.52 3.52 0 012.97 2.316c.494 1.476.082 3.105-1.029 4.03-.638.536-1.42.783-2.397.83-.29.015-.595.022-.938.024-.259 0-.465-.001-.926-.007-.014-.029 0-.029 0 0l.008 1.996c0 .33-.162.502-.505.502-.72-.016-1.44-.016-2.155 0-.354.016-.504-.17-.504-.51v-4.35L27 13.839c0-.396.187-.573.581-.573.47.004.846.006 1.692.008 1.482.005 2.142.01 2.967.031l.244.006v.009zm-1.025 4.488v-.002l.21-.002c.557-.007.859-.305.878-.857.006-.545-.32-.903-.847-.921a15.74 15.74 0 00-.815-.01l-.165.001c-.294.003-.444.003-.61.001v.909a14.49 14.49 0 00.005.434c.003.177.001.31-.006.452.224-.006.439-.008.774-.007l.12.001h.456zm18.967-1.588a94.996 94.996 0 011.636-2.617c.117-.17.35-.306.546-.306.524-.01.941-.011 1.875-.009l.57.001h.051c.108 0 .203.013.297.045l.274.092-.13.258-.007.012a1.087 1.087 0 00-.025.064.653.653 0 01-.085.168l-3.378 5.073a.735.735 0 00-.111.365c-.01.226-.014.462-.013.768l.003.322.002.442.008 1.61c0 .338-.148.523-.498.51a46.53 46.53 0 00-2.094 0c-.366.012-.517-.177-.517-.526v-3.11a.763.763 0 00-.101-.35l-3.23-5.087a1.182 1.182 0 01-.083-.146l-.014-.029-.032-.063-.168-.305.342-.061.062-.012c.026-.006.026-.006.054-.01a1.05 1.05 0 01.195-.022l2.43-.008c.27 0 .452.103.59.335l1.551 2.596zm-24.714-2.476l.008 8.78c0 .356-.175.487-.511.487a55.312 55.312 0 00-2.06 0c-.368.012-.508-.174-.508-.526V18.11l-.008-4.312c0-.362.159-.546.523-.534h2.072c.32 0 .484.153.484.479h0z"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1604: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 72 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("defs", null, a.default.createElement("filter", {
                    id: "TenorIcon__tenorA",
                    width: "159.3%",
                    height: "308.7%",
                    x: "-29.6%",
                    y: "-104.4%",
                    filterUnits: "objectBoundingBox"
                }, a.default.createElement("feMorphology", {
                    in: "SourceAlpha",
                    operator: "dilate",
                    radius: ".5",
                    result: "shadowSpreadOuter1"
                }), a.default.createElement("feOffset", {
                    in: "shadowSpreadOuter1",
                    result: "shadowOffsetOuter1"
                }), a.default.createElement("feGaussianBlur", {
                    in: "shadowOffsetOuter1",
                    result: "shadowBlurOuter1",
                    stdDeviation: "4"
                }), a.default.createElement("feComposite", {
                    in: "shadowBlurOuter1",
                    in2: "SourceAlpha",
                    operator: "out",
                    result: "shadowBlurOuter1"
                }), a.default.createElement("feColorMatrix", {
                    in: "shadowBlurOuter1",
                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.0399999991 0"
                })), a.default.createElement("path", {
                    id: "TenorIcon__tenorB",
                    d: "M19.58 19.938c.063.483.202.916.447 1.305.576.915 1.412 1.35 2.484 1.342.88-.005 1.634-.327 2.284-.918.341-.311.82-.252 1.06.12.174.27.14.594-.1.836-.728.733-1.594 1.19-2.62 1.315-.672.083-1.341.067-1.994-.137-1.487-.464-2.476-1.457-2.916-2.95-.514-1.753-.24-3.383.973-4.784.824-.948 1.89-1.399 3.145-1.377 1.082.019 2.025.39 2.785 1.181.632.658.98 1.46 1.14 2.352.062.338.089.682.105 1.025.018.379-.275.674-.65.693-.054.003-.107 0-.16 0h-5.795c-.053-.003-.109-.003-.189-.003zm5.202-1.35a3.617 3.617 0 00-.27-.985c-.778-1.845-2.8-1.893-3.84-.994-.547.473-.869 1.077-1.029 1.775-.016.064-.021.129-.035.204h5.174zm12.27.695c.003-2.373 1.828-4.604 4.621-4.598 2.604.002 4.6 2.034 4.595 4.676-.005 2.596-2.041 4.62-4.65 4.623-2.514 0-4.571-2.116-4.566-4.7zm7.638.124c-.013-.921-.277-1.689-.855-2.339-1.18-1.328-3.337-1.277-4.47.092-.943 1.14-1.01 3.154.086 4.394.975 1.106 2.729 1.335 3.923.476.909-.656 1.29-1.582 1.316-2.623zm-15.284-3.418c.167-.16.303-.298.445-.427.682-.628 1.497-.885 2.406-.877.717.008 1.392.169 1.989.587.74.521 1.143 1.26 1.3 2.137.05.285.077.578.08.868.008 1.642.003 3.283.003 4.926a.773.773 0 01-.488.72c-.304.112-.589.066-.824-.17a.818.818 0 01-.237-.607c.003-1.522.008-3.041-.005-4.563-.003-.301-.045-.61-.117-.9-.227-.888-.858-1.428-1.762-1.533-.642-.075-1.253.027-1.788.42-.712.52-.997 1.26-1 2.12-.005 1.498 0 2.999-.002 4.497a.775.775 0 01-1.082.73c-.28-.116-.47-.422-.47-.765V15.474c0-.304.14-.534.395-.685a.723.723 0 01.797.016.73.73 0 01.36.623c.002.177 0 .35 0 .561zm-14.888-1.122h2.093c.287 0 .522.094.67.354a.693.693 0 01-.5 1.042c-.078.01-.16.014-.24.014h-2.023v4.942c0 .322.05.63.266.894.176.215.414.306.672.346.387.062.77.03 1.146-.089.357-.115.71.046.829.382.123.34-.05.676-.381.837-.448.22-.917.317-1.413.344a2.554 2.554 0 01-2.633-2.159 3.225 3.225 0 01-.034-.507c-.003-1.597-.003-3.195-.003-4.792v-.185c-.059-.003-.107-.008-.152-.008-.293 0-.586.005-.88-.003-.48-.013-.788-.376-.716-.832.05-.322.34-.564.706-.575.288-.008.578-.002.866-.002.176 0 .176 0 .176-.185v-1.866c0-.457.328-.806.765-.81.437-.006.78.345.783.807.003.626 0 1.254 0 1.88.003.05.003.104.003.171zm34.847 1.7c.23-.264.432-.524.666-.755.536-.526 1.165-.894 1.906-1.042.224-.045.458-.056.688-.045.434.024.76.39.76.819 0 .424-.331.784-.76.824-.318.03-.64.035-.952.102-.855.185-1.46.706-1.85 1.487-.34.682-.455 1.417-.458 2.172-.005 1.007 0 2.013 0 3.02 0 .467-.341.83-.78.827-.443-.003-.776-.35-.776-.816v-7.702c0-.35.245-.666.575-.75.363-.09.714.06.872.395a1.1 1.1 0 01.101.425c.016.298.005.598.005.899.003.045.003.088.003.14z"
                })), a.default.createElement("g", {
                    fill: "none",
                    fillRule: "evenodd"
                }, a.default.createElement("path", {
                    d: "M0 0h72v36H0z"
                }), a.default.createElement("use", {
                    fill: "currentColor",
                    filter: "url(#TenorIcon__tenorA)",
                    href: "#TenorIcon__tenorB"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    fillOpacity: ".5",
                    stroke: "currentColor",
                    strokeOpacity: ".06",
                    strokeWidth: ".5",
                    d: "M19.876 20.19c.072.346.191.648.363.92.522.831 1.272 1.233 2.27 1.225.799-.005 1.498-.29 2.117-.853.453-.413 1.114-.336 1.44.17.239.37.186.825-.134 1.147-.783.788-1.705 1.257-2.767 1.387-.766.095-1.452.056-2.099-.146-1.57-.49-2.618-1.55-3.08-3.119-.551-1.876-.22-3.582 1.023-5.018.865-.994 1.997-1.486 3.338-1.463 1.175.02 2.172.435 2.961 1.258.639.665 1.03 1.492 1.207 2.48.057.315.088.642.107 1.058.026.514-.37.929-.887.955a1.675 1.675 0 01-.123 0h-5.736zm4.611-1.852a3.677 3.677 0 00-.205-.638c-.639-1.513-2.382-1.823-3.447-.902-.462.4-.765.915-.924 1.54h4.576zm12.315.945c.003-2.657 2.077-4.854 4.872-4.848 2.742.002 4.85 2.147 4.844 4.927-.006 2.734-2.154 4.87-4.9 4.872-2.655 0-4.822-2.23-4.816-4.951zm0 0s0 0 0 0h0s0 0 0 0zm7.638.122c-.013-.879-.267-1.58-.792-2.17-1.077-1.212-3.053-1.17-4.09.084-.902 1.09-.897 2.964.08 4.07.897 1.017 2.507 1.216 3.59.438.793-.572 1.185-1.389 1.212-2.422zm-14.785-4.002l.026-.025c.705-.649 1.567-.952 2.58-.943.817.009 1.52.207 2.128.633.768.54 1.227 1.315 1.403 2.298.053.297.081.603.084.91a458.892 458.892 0 01.004 3.52l-.001 1.407c0 .42-.263.81-.651.954-.402.149-.788.074-1.086-.226a1.066 1.066 0 01-.312-.785l.001-.57.003-1.712c0-.854-.003-1.582-.009-2.28a3.67 3.67 0 00-.11-.839c-.2-.783-.742-1.253-1.548-1.346-.629-.074-1.16.041-1.612.372-.608.445-.894 1.083-.897 1.92-.002.644-.003 1.26-.002 2.247v2.249c0 .751-.735 1.246-1.428.96-.378-.155-.624-.555-.624-.995v-7.678c0-.39.183-.704.518-.9a.973.973 0 011.059.021c.292.188.46.466.474.808zm-14.89-.786h1.845c.394 0 .7.151.89.481a.944.944 0 01-.685 1.413c-.082.011-.17.016-.274.016h-1.773v4.692c0 .328.059.551.21.735.117.143.279.221.518.258.343.055.688.028 1.03-.08.483-.156.974.07 1.14.535.165.458-.057.928-.506 1.147-.455.223-.945.338-1.51.369a2.804 2.804 0 01-2.893-2.369 3.429 3.429 0 01-.037-.546c-.003-1.321-.003-2.38-.003-4.736h-.152c-.317.002-.458.002-.637-.003-.627-.017-1.052-.513-.956-1.12.07-.448.466-.772.946-.786.131-.004.267-.005.44-.005h.187l.172.002v-1.801c0-.591.436-1.054 1.012-1.06.58-.008 1.033.459 1.036 1.056.001.277.002.56.001.941v.861zm34.85 1.272c.086-.097.162-.177.241-.255.59-.58 1.267-.956 2.031-1.108.233-.048.484-.063.751-.05.564.03.996.502.996 1.068 0 .554-.43 1.02-.986 1.073a11.66 11.66 0 01-.274.021l-.05.004c-.283.02-.437.037-.598.072-.758.164-1.312.617-1.679 1.355-.297.594-.43 1.264-.432 2.061-.003.559-.003 1.006-.001 2.012l.001 1.007c0 .603-.45 1.08-1.032 1.077-.584-.004-1.024-.465-1.024-1.066v-7.702c0-.462.321-.88.764-.992.481-.12.952.089 1.159.53.075.158.118.342.125.518.006.12.009.225.009.375z"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1605: function(e, t, r) {
            "use strict";
            const n = r(1606),
                a = Symbol("max"),
                o = Symbol("length"),
                l = Symbol("lengthCalculator"),
                i = Symbol("allowStale"),
                s = Symbol("maxAge"),
                u = Symbol("dispose"),
                c = Symbol("noDisposeOnSet"),
                d = Symbol("lruList"),
                f = Symbol("cache"),
                h = Symbol("updateAgeOnGet"),
                p = () => 1;
            const m = (e, t, r) => {
                    const n = e[f].get(t);
                    if (n) {
                        const t = n.value;
                        if (g(e, t)) {
                            if (v(e, n), !e[i]) return
                        } else r && (e[h] && (n.value.now = Date.now()), e[d].unshiftNode(n));
                        return t.value
                    }
                },
                g = (e, t) => {
                    if (!t || !t.maxAge && !e[s]) return !1;
                    const r = Date.now() - t.now;
                    return t.maxAge ? r > t.maxAge : e[s] && r > e[s]
                },
                y = e => {
                    if (e[o] > e[a])
                        for (let t = e[d].tail; e[o] > e[a] && null !== t;) {
                            const r = t.prev;
                            v(e, t), t = r
                        }
                },
                v = (e, t) => {
                    if (t) {
                        const r = t.value;
                        e[u] && e[u](r.key, r.value), e[o] -= r.length, e[f].delete(r.key), e[d].removeNode(t)
                    }
                };
            class b {
                constructor(e, t, r, n, a) {
                    this.key = e, this.value = t, this.length = r, this.now = n, this.maxAge = a || 0
                }
            }
            const _ = (e, t, r, n) => {
                let a = r.value;
                g(e, a) && (v(e, r), e[i] || (a = void 0)), a && t.call(n, a.value, a.key, e)
            };
            e.exports = class {
                constructor(e) {
                    if ("number" == typeof e && (e = {
                            max: e
                        }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
                    this[a] = e.max || 1 / 0;
                    const t = e.length || p;
                    if (this[l] = "function" != typeof t ? p : t, this[i] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
                    this[s] = e.maxAge || 0, this[u] = e.dispose, this[c] = e.noDisposeOnSet || !1, this[h] = e.updateAgeOnGet || !1, this.reset()
                }
                set max(e) {
                    if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
                    this[a] = e || 1 / 0, y(this)
                }
                get max() {
                    return this[a]
                }
                set allowStale(e) {
                    this[i] = !!e
                }
                get allowStale() {
                    return this[i]
                }
                set maxAge(e) {
                    if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
                    this[s] = e, y(this)
                }
                get maxAge() {
                    return this[s]
                }
                set lengthCalculator(e) {
                    "function" != typeof e && (e = p), e !== this[l] && (this[l] = e, this[o] = 0, this[d].forEach(e => {
                        e.length = this[l](e.value, e.key), this[o] += e.length
                    })), y(this)
                }
                get lengthCalculator() {
                    return this[l]
                }
                get length() {
                    return this[o]
                }
                get itemCount() {
                    return this[d].length
                }
                rforEach(e, t) {
                    t = t || this;
                    for (let r = this[d].tail; null !== r;) {
                        const n = r.prev;
                        _(this, e, r, t), r = n
                    }
                }
                forEach(e, t) {
                    t = t || this;
                    for (let r = this[d].head; null !== r;) {
                        const n = r.next;
                        _(this, e, r, t), r = n
                    }
                }
                keys() {
                    return this[d].toArray().map(e => e.key)
                }
                values() {
                    return this[d].toArray().map(e => e.value)
                }
                reset() {
                    this[u] && this[d] && this[d].length && this[d].forEach(e => this[u](e.key, e.value)), this[f] = new Map, this[d] = new n, this[o] = 0
                }
                dump() {
                    return this[d].map(e => !g(this, e) && {
                        k: e.key,
                        v: e.value,
                        e: e.now + (e.maxAge || 0)
                    }).toArray().filter(e => e)
                }
                dumpLru() {
                    return this[d]
                }
                set(e, t, r) {
                    if ((r = r || this[s]) && "number" != typeof r) throw new TypeError("maxAge must be a number");
                    const n = r ? Date.now() : 0,
                        i = this[l](t, e);
                    if (this[f].has(e)) {
                        if (i > this[a]) return v(this, this[f].get(e)), !1;
                        const l = this[f].get(e).value;
                        return this[u] && (this[c] || this[u](e, l.value)), l.now = n, l.maxAge = r, l.value = t, this[o] += i - l.length, l.length = i, this.get(e), y(this), !0
                    }
                    const h = new b(e, t, i, n, r);
                    return h.length > this[a] ? (this[u] && this[u](e, t), !1) : (this[o] += h.length, this[d].unshift(h), this[f].set(e, this[d].head), y(this), !0)
                }
                has(e) {
                    if (!this[f].has(e)) return !1;
                    const t = this[f].get(e).value;
                    return !g(this, t)
                }
                get(e) {
                    return m(this, e, !0)
                }
                peek(e) {
                    return m(this, e, !1)
                }
                pop() {
                    const e = this[d].tail;
                    return e ? (v(this, e), e.value) : null
                }
                del(e) {
                    v(this, this[f].get(e))
                }
                load(e) {
                    this.reset();
                    const t = Date.now();
                    for (let r = e.length - 1; r >= 0; r--) {
                        const n = e[r],
                            a = n.e || 0;
                        if (0 === a) this.set(n.k, n.v);
                        else {
                            const e = a - t;
                            e > 0 && this.set(n.k, n.v, e)
                        }
                    }
                }
                prune() {
                    this[f].forEach((e, t) => m(this, t, !1))
                }
            }
        },
        1606: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = this;
                if (t instanceof n || (t = new n), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function(e) {
                    t.push(e)
                }));
                else if (arguments.length > 0)
                    for (var r = 0, a = arguments.length; r < a; r++) t.push(arguments[r]);
                return t
            }

            function a(e, t, r) {
                var n = t === e.head ? new i(r, null, t, e) : new i(r, t, t.next, e);
                return null === n.next && (e.tail = n), null === n.prev && (e.head = n), e.length++, n
            }

            function o(e, t) {
                e.tail = new i(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
            }

            function l(e, t) {
                e.head = new i(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
            }

            function i(e, t, r, n) {
                if (!(this instanceof i)) return new i(e, t, r, n);
                this.list = n, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null
            }
            e.exports = n, n.Node = i, n.create = n, n.prototype.removeNode = function(e) {
                if (e.list !== this) throw new Error("removing node which does not belong to this list");
                var t = e.next,
                    r = e.prev;
                return t && (t.prev = r), r && (r.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = r), e.list.length--, e.next = null, e.prev = null, e.list = null, t
            }, n.prototype.unshiftNode = function(e) {
                if (e !== this.head) {
                    e.list && e.list.removeNode(e);
                    var t = this.head;
                    e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
                }
            }, n.prototype.pushNode = function(e) {
                if (e !== this.tail) {
                    e.list && e.list.removeNode(e);
                    var t = this.tail;
                    e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
                }
            }, n.prototype.push = function() {
                for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
                return this.length
            }, n.prototype.unshift = function() {
                for (var e = 0, t = arguments.length; e < t; e++) l(this, arguments[e]);
                return this.length
            }, n.prototype.pop = function() {
                if (this.tail) {
                    var e = this.tail.value;
                    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
                }
            }, n.prototype.shift = function() {
                if (this.head) {
                    var e = this.head.value;
                    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
                }
            }, n.prototype.forEach = function(e, t) {
                t = t || this;
                for (var r = this.head, n = 0; null !== r; n++) e.call(t, r.value, n, this), r = r.next
            }, n.prototype.forEachReverse = function(e, t) {
                t = t || this;
                for (var r = this.tail, n = this.length - 1; null !== r; n--) e.call(t, r.value, n, this), r = r.prev
            }, n.prototype.get = function(e) {
                for (var t = 0, r = this.head; null !== r && t < e; t++) r = r.next;
                if (t === e && null !== r) return r.value
            }, n.prototype.getReverse = function(e) {
                for (var t = 0, r = this.tail; null !== r && t < e; t++) r = r.prev;
                if (t === e && null !== r) return r.value
            }, n.prototype.map = function(e, t) {
                t = t || this;
                for (var r = new n, a = this.head; null !== a;) r.push(e.call(t, a.value, this)), a = a.next;
                return r
            }, n.prototype.mapReverse = function(e, t) {
                t = t || this;
                for (var r = new n, a = this.tail; null !== a;) r.push(e.call(t, a.value, this)), a = a.prev;
                return r
            }, n.prototype.reduce = function(e, t) {
                var r, n = this.head;
                if (arguments.length > 1) r = t;
                else {
                    if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
                    n = this.head.next, r = this.head.value
                }
                for (var a = 0; null !== n; a++) r = e(r, n.value, a), n = n.next;
                return r
            }, n.prototype.reduceReverse = function(e, t) {
                var r, n = this.tail;
                if (arguments.length > 1) r = t;
                else {
                    if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
                    n = this.tail.prev, r = this.tail.value
                }
                for (var a = this.length - 1; null !== n; a--) r = e(r, n.value, a), n = n.prev;
                return r
            }, n.prototype.toArray = function() {
                for (var e = new Array(this.length), t = 0, r = this.head; null !== r; t++) e[t] = r.value, r = r.next;
                return e
            }, n.prototype.toArrayReverse = function() {
                for (var e = new Array(this.length), t = 0, r = this.tail; null !== r; t++) e[t] = r.value, r = r.prev;
                return e
            }, n.prototype.slice = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0) return r;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var a = 0, o = this.head; null !== o && a < e; a++) o = o.next;
                for (; null !== o && a < t; a++, o = o.next) r.push(o.value);
                return r
            }, n.prototype.sliceReverse = function(e, t) {
                (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
                var r = new n;
                if (t < e || t < 0) return r;
                e < 0 && (e = 0), t > this.length && (t = this.length);
                for (var a = this.length, o = this.tail; null !== o && a > t; a--) o = o.prev;
                for (; null !== o && a > e; a--, o = o.prev) r.push(o.value);
                return r
            }, n.prototype.splice = function(e, t, ...r) {
                e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
                for (var n = 0, o = this.head; null !== o && n < e; n++) o = o.next;
                var l = [];
                for (n = 0; o && n < t; n++) l.push(o.value), o = this.removeNode(o);
                null === o && (o = this.tail), o !== this.head && o !== this.tail && (o = o.prev);
                for (n = 0; n < r.length; n++) o = a(this, o, r[n]);
                return l
            }, n.prototype.reverse = function() {
                for (var e = this.head, t = this.tail, r = e; null !== r; r = r.prev) {
                    var n = r.prev;
                    r.prev = r.next, r.next = n
                }
                return this.head = t, this.tail = e, this
            };
            try {
                r(1607)(n)
            } catch (e) {}
        },
        1607: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                e.prototype[Symbol.iterator] = function*() {
                    for (let e = this.head; e; e = e.next) yield e.value
                }
            }
        },
        1608: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                onClick: e,
                className: t,
                ...r
            }) {
                const n = (0, i.useTheme)();
                return (o.default.createElement(d, c({
                    telemetryName: "openMediaViewer",
                    className: t,
                    size: l.RoundButtonSize.Small,
                    icon: a.default,
                    iconColor: n.semanticColors.textWhite,
                    iconSize: 16,
                    buttonColor: "rgba(0, 0, 0, 0.2)",
                    onClick: e
                }, r)))
            };
            var n = u(r(1)),
                a = u(r(412)),
                o = u(r(0)),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(22)),
                i = r(6);

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, n.default)(l.default)(e => ({
                position: "absolute",
                top: 5,
                right: 5,
                opacity: 0
            }))
        },
        1609: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                isSenderViewer: e,
                bubbleContextMenuHandler: t,
                isFirst: r,
                isLast: n,
                message: s
            }) {
                const u = (0, a.useTheme)(),
                    c = (0, l.useCallback)(e => {
                        t && t(e)
                    }, [t]);
                return l.default.createElement(i.RemovedMessageBubbleContainer, {
                    isSenderViewer: e,
                    isFirst: r,
                    isLast: n,
                    onKeyDown: e => (0, o.openContextMenuOnKeyShortcut)(e, u, () => null != t && t(e)),
                    onContextMenu: c,
                    onActivate: null
                }, l.default.createElement(d, {
                    use: "body",
                    wrapText: !0,
                    isSenderViewer: e
                }, s))
            };
            var n = c(r(1)),
                a = r(6),
                o = r(89),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                i = r(40),
                s = c(r(4));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = (0, n.default)(s.default)(e => ({
                color: e.theme.colors.base60,
                fontStyle: "italic",
                overflowWrap: "break-word",
                cursor: "text",
                display: "inline"
            }))
        },
        1610: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = b(r(546)),
                a = v(r(350)),
                o = b(r(547)),
                l = b(r(27)),
                i = r(8),
                s = b(r(5)),
                u = b(r(1)),
                c = b(r(1611)),
                d = v(r(0)),
                f = b(r(2)),
                h = r(40),
                p = r(30),
                m = r(6),
                g = b(r(4));

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function() {
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
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const _ = e => ({
                    paddingBottom: e.replyingToText ? 24 : 0,
                    paddingTop: e.replyingToText ? 6 : 0,
                    paddingLeft: e.isSenderViewer || e.replyingToText ? 12 : 0,
                    paddingRight: e.isSenderViewer && !e.replyingToText ? 0 : 12,
                    marginBottom: -19,
                    ...e.replyBorderStyles
                }),
                w = (0, u.default)(h.MessageBubbleContainer)(e => ({
                    backgroundColor: e.backgroundColor,
                    ..._(e)
                })),
                C = (0, u.default)(h.RemovedMessageBubbleContainer)(e => ({
                    ..._(e)
                })),
                E = (0, u.default)(f.default)(e => {
                    const {
                        replySourceType: t
                    } = e;
                    return {
                        "img, video": {
                            opacity: !(t && t === i.ReplySourceType.Story) ? .5 : 1,
                            maxWidth: 150
                        }
                    }
                }),
                k = (0, u.default)(f.default)({
                    flexDirection: "row"
                }),
                x = (0, u.default)(f.default)(e => ({
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    backgroundColor: e.theme.select({
                        light: "#FFFFFF",
                        dark: "#000000"
                    }),
                    ...e.replyBorderStyles,
                    marginLeft: -12,
                    marginTop: -6,
                    opacity: .75
                })),
                M = (0, u.default)(g.default)(e => ({
                    color: e.theme.select({
                        highContrast: e.theme.semanticColors.textInverted,
                        light: e.theme.colors.base70,
                        dark: e.theme.colors.base70
                    }),
                    overflowWrap: "break-word",
                    cursor: "text"
                })),
                S = (0, u.default)(g.default)(e => ({
                    fontStyle: "italic",
                    color: e.theme.colors.base70,
                    overflowWrap: "break-word",
                    cursor: "text"
                }));

            function O(e) {
                const {
                    message: t,
                    isSenderViewer: r,
                    iconColor: u
                } = e;
                switch (t.replyAttachmentType) {
                    case i.ReplyAttachmentType.Image:
                    case i.ReplyAttachmentType.MultipleImages:
                    case i.ReplyAttachmentType.Video:
                        return d.default.createElement(E, {
                            replySourceType: t.replySourceType
                        }, d.default.createElement(n.default, {
                            isFirst: !0,
                            isLast: !0,
                            isSenderViewer: r,
                            attachment: {
                                ...p.EmptyMsysAttachmentModel,
                                previewUrlInfo: t.replyMedia
                            }
                        }));
                    case i.ReplyAttachmentType.Sticker:
                        return d.default.createElement(E, {
                            replySourceType: t.replySourceType
                        }, d.default.createElement(a.default, {
                            isSenderViewer: r,
                            attachment: {
                                ...p.EmptyMsysAttachmentModel,
                                previewWidth: t.replyMediaPreviewWidth,
                                previewHeight: t.replyMediaPreviewHeight
                            },
                            sourceUrl: (0, l.default)(t.replyMedia)
                        }));
                    case i.ReplyAttachmentType.AnimatedImage:
                        return d.default.createElement(E, {
                            replySourceType: t.replySourceType
                        }, d.default.createElement(o.default, {
                            isFirst: !0,
                            isLast: !0,
                            isSenderViewer: r,
                            isInReplyContext: !0,
                            attachment: {
                                ...p.EmptyMsysAttachmentModel,
                                previewHeight: t.replyMediaPreviewHeight,
                                previewWidth: t.replyMediaPreviewWidth,
                                previewUrlInfo: t.replyMedia
                            }
                        }));
                    default:
                        return d.default.createElement(k, null, d.default.createElement(M, {
                            use: "caption",
                            wrapText: !0
                        }, s.default._("Attachment", null, {
                            hk: "ylfNV"
                        })), d.default.createElement(c.default, {
                            size: 13,
                            color: u
                        }))
                }
            }
            var T = (0, d.memo)((function({
                message: e,
                isSenderViewer: t,
                userID: r,
                threadTheme: n,
                onReplyClick: o
            }) {
                const l = (0, m.useTheme)(),
                    u = null != e.replyToUserId && e.replyToUserId.toString() === r,
                    c = n.replyBackgroundColor(!e.replyAttachmentType, u, l),
                    h = n.replyBorderStyles(!e.replyAttachmentType, u, t);
                if (e.replyStatus === i.MessageReplyStatus.Deleted) return d.default.createElement(f.default, null, d.default.createElement(C, {
                    isSenderViewer: t,
                    threadTheme: n,
                    repliedToViewer: u,
                    isReply: !0,
                    isFirst: !0,
                    onActivate: null,
                    isLast: !0,
                    replyingToText: !0,
                    replyBorderStyles: h
                }, d.default.createElement(S, {
                    use: "subtext",
                    wrapText: !0,
                    numberOfLines: 2
                }, s.default._("Message was removed", null, {
                    hk: "4dyXvM"
                }))));
                if (e.replyStatus === i.MessageReplyStatus.Valid) {
                    const r = Object.keys(a.LIKE_STICKER_SIZES),
                        i = e.replyMessageText ? d.default.createElement(M, {
                            use: "subtext",
                            wrapText: !0,
                            numberOfLines: 2
                        }, e.replyMessageText) : e.replyAttachmentId && r.includes(e.replyAttachmentId.toString()) ? d.default.createElement(a.Hotlike, {
                            stickerId: e.replyAttachmentId.toString(),
                            isSenderViewer: t,
                            threadTheme: n,
                            isReply: !0
                        }) : d.default.createElement(O, {
                            message: e,
                            isSenderViewer: t,
                            iconColor: l.colors.base70
                        });
                    return d.default.createElement(f.default, {
                        onClick: o ? () => o(e.replySourceId) : void 0
                    }, d.default.createElement(w, {
                        isSenderViewer: t,
                        threadTheme: n,
                        repliedToViewer: u,
                        isReply: !0,
                        isFirst: !0,
                        onActivate: null,
                        isLast: !0,
                        backgroundColor: c,
                        replyingToText: !e.replyAttachmentType,
                        replyBorderStyles: h
                    }, u && !e.replyAttachmentType && d.default.createElement(x, {
                        replyBorderStyles: h
                    }), i))
                }
                return null
            }));
            t.default = T
        },
        1611: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M16 8.5a2.75 2.75 0 00-2.75 2.75v11.5a4.75 4.75 0 109.5 0v-8.5a1.25 1.25 0 112.5 0v8.5a7.25 7.25 0 11-14.5 0v-11.5a5.25 5.25 0 1110.5 0v9.5a3.25 3.25 0 01-6.5 0V14a1.25 1.25 0 112.5 0v6.75a.75.75 0 001.5 0v-9.5A2.75 2.75 0 0016 8.5z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1612: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.messageAnnotationRanges = void 0;
            var n = r(1613),
                a = r(1615);
            const o = ({
                index: e,
                length: t,
                href: r
            }) => ({
                startIndex: e,
                length: t,
                href: r,
                annoType: "url"
            });
            t.messageAnnotationRanges = (e, t, r, l) => [(0, n.getFormattingRanges)(e), null != t ? t : [], l ? [...(0, a.getTicketMatches)(e), ...(0, a.getBloksFiddleMatches)(e), ...(0, a.getDiffMatches)(e), ...(0, a.getSevMatches)(e), ...(0, a.getPasteMatches)(e), ...(0, a.getNotebookMatches)(e), ...(0, a.getResortMatches)(e), ...(0, a.getCaseMatches)(e), ...(0, a.getMetric360Matches)(e), ...(0, a.getGoalsMatches)(e), ...(0, a.getSRTMatches)(e), ...(0, a.getLaunchManagerMatches)(e), ...(0, a.getAsyncJobTypeMatches)(e), ...(0, a.getFlowMatches)(e), ...(0, a.getBugReportMatches)(e), ...(0, a.getCaseConnectMatches)(e), ...(0, a.getCustomerCareMatches)(e), ...(0, a.getCommitCloudMatches)(e), ...(0, a.getQaMatches)(e), ...(0, a.getProgramsMatches)(e)].map(o) : [], null != r ? r : []].reduce((e, t) => e.concat(t.filter((e => t => {
                for (let r of e) {
                    if (t.startIndex >= r.startIndex && t.startIndex <= r.startIndex + r.length) return !1
                }
                return !0
            })(e))))
        },
        1613: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getFormattingRanges = function(e) {
                const t = [];
                return Object.values(o.TextFormatting).filter(e => "string" == typeof e).forEach(r => {
                    const n = o.TextFormatting[r],
                        {
                            regExp: l,
                            getCleanText: i,
                            tagIndex: s,
                            hasClosingTag: u
                        } = function(e) {
                            let t, r = e => e[2],
                                n = !0;
                            switch (e) {
                                case o.TextFormatting.Bold:
                                    t = a.default.boldConfig.pattern;
                                    break;
                                case o.TextFormatting.Italics:
                                    t = a.default.italicConfig.pattern;
                                    break;
                                case o.TextFormatting.StrikeThrough:
                                    t = a.default.strikethroughConfig.pattern;
                                    break;
                                case o.TextFormatting.InlineCode:
                                    t = a.default.codeConfig.pattern;
                                    break;
                                case o.TextFormatting.BlockQuote:
                                    t = a.default.blockQuoteConfig.pattern, n = !1;
                                    break;
                                case o.TextFormatting.InlineQuote:
                                    t = a.default.singleInlineBlockQuoteConfig.pattern, n = !1;
                                    break;
                                case o.TextFormatting.CodeBlock:
                                    r = e => {
                                        var t;
                                        return null !== (t = e[4]) && void 0 !== t ? t : e[5]
                                    }, t = a.default.codeBlockV2Config.pattern, n = !1;
                                    break;
                                default:
                                    throw new Error(`No pattern for ${e}`)
                            }
                            return {
                                regExp: new RegExp(t, "gm"),
                                getCleanText: r,
                                tagIndex: 1,
                                hasClosingTag: n
                            }
                        }(n);
                    let c;
                    for (; null != (c = l.exec(e));) {
                        let e = c.index,
                            r = c[0].length;
                        u && (e += c[s].length, r -= c[s].length);
                        const a = t => {
                                const n = e + r,
                                    a = t.startIndex + t.length;
                                return n > t.startIndex && e < a
                            },
                            o = i(c);
                        if (!t.find(a)) {
                            if (t.length > 0) {
                                const a = t[t.length - 1];
                                if ("formatting" === a.annoType && a.format === n && a.startIndex + a.length + 1 === e) {
                                    a.text += "\n" + o, a.length += r + 1;
                                    continue
                                }
                            }
                            t.push({
                                startIndex: e,
                                length: r,
                                text: o,
                                format: n,
                                annoType: "formatting"
                            })
                        }
                    }
                }), t
            };
            var n, a = (n = r(1614)) && n.__esModule ? n : {
                    default: n
                },
                o = r(548)
        },
        1614: function(e, t, r) {
            "use strict";
            e.exports = Object.freeze({
                boldConfig: {
                    pattern: "([\\s_~'\"(]|^)\\*(\\S(?:.*?\\S)??)\\*(?=[\\s_~,.;:!?'\")]|$)",
                    nonCapturingPattern: "(?:[\\s_~'\"(]|^)\\*(?:\\S(?:.*?\\S)??)\\*(?=[\\s_~,.;:!?'\")]|$)"
                },
                italicConfig: {
                    pattern: "([\\s*~'\"(]|^)_(\\S(?:.*?\\S)??)_(?=[\\s*~,.;:!?'\")]|$)",
                    nonCapturingPattern: "(?:[\\s*~'\"(]|^)_(?:\\S(?:.*?\\S)??)_(?=[\\s*~,.;:!?'\")]|$)"
                },
                strikethroughConfig: {
                    pattern: "([\\s*_'\"(]|^)~(\\S(?:.*?\\S)??)~(?=[\\s*_,.;:!?'\")]|$)",
                    nonCapturingPattern: "(?:[\\s*_'\"(]|^)~(?:\\S(?:.*?\\S)??)~(?=[\\s*_,.;:!?'\")]|$)"
                },
                codeConfig: {
                    pattern: "([\\s*_~'\"(]|^)`([^`\\r\\n](?:.*?[^`\\r\\n])??)`(?=[\\s\\w*_~,.;:!?'\")]|$)",
                    nonCapturingPattern: "(?:[\\s*_~'\"(]|^)`(?:[^`\\r\\n](?:.*?[^`\\r\\n])??)`(?=[\\s\\w*_~,.;:!?'\")]|$)"
                },
                codeBlockConfig: {
                    pattern: "(```)([\\s\\S]+?)```",
                    nonCapturingPattern: "(```)([\\s\\S]+?)```"
                },
                codeBlockV2Config: {
                    pattern: "(`{3,})(?:(?:((.*?)(?:\\r\\n?|\\n))([\\s\\S]*?))|(.+?))\\1\\s*?(?:\\r\\n?|\\n|$)",
                    nonCapturingPattern: "(`{3,})([\\s\\S]+?)\\1\\s*((\\r\\n)|\\r|\\n|$)"
                },
                blockQuoteConfig: {
                    pattern: "(^>>> ?)((.|(\\r\\n)|\\r|\\n)*?\\S(.|(\\r\\n)|\\r|\\n)*?)^<<<\\s*?((\\r\\n)|\\r|\\n|$)",
                    nonCapturingPattern: "(^>>> ?)((.|(\\r\\n)|\\r|\\n)*?\\S(.|(\\r\\n)|\\r|\\n)*?)^<<<\\s*((\\r\\n)|\\r|\\n|$)"
                },
                multipleInlineBlockQuoteConfig: {
                    pattern: "((^> )(.*\\S.*)((\\r\\n)|\\r|\\n)?)(^> ?(.*)((\\r\\n)|\\r|\\n)?)*",
                    nonCapturingPattern: "(^> (.*\\S.*)((\\r\\n)|\\r|\\n)?)(^> ?(.*)((\\r\\n)|\\r|\\n)?)*"
                },
                singleInlineBlockQuoteConfig: {
                    pattern: "(^> ?)(.*?$)",
                    nonCapturingPattern: "^> ?(.*?$)"
                }
            })
        },
        1615: function(e, t, r) {
            "use strict";

            function n(e, t) {
                const r = [];
                let n;
                for (; n = t.exec(e);) {
                    const [e, ...a] = n;
                    r.push({
                        index: t.lastIndex - e.length,
                        length: e.length,
                        matches: a
                    })
                }
                return r
            }

            function a(e, t, r, a = "", o = 0) {
                return n(e, t).map(({
                    index: e,
                    length: t,
                    matches: n
                }) => ({
                    index: e,
                    length: t,
                    href: `${r}${n[o]}${a}`
                }))
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getTicketMatches = function(e) {
                return a(e, /(?<=\b)T(\d{4,})(?=\b)/gi, "https://www.internalfb.com/intern/tasks/?t=")
            }, t.getBloksFiddleMatches = function(e) {
                return a(e, /(?<=\b)BK(\d{3,})(?=\b)/g, "https://www.internalfb.com/intern/bloks/fiddle/", "/")
            }, t.getDiffMatches = function(e) {
                return a(e, /(?<=\b)D(\d{4,})(?=\b)/g, "https://www.internalfb.com/intern/diff/D", "/")
            }, t.getSevMatches = function(e) {
                return a(e, /(?<=\b)S(\d{4,})(?=\b)/gi, "https://www.internalfb.com/intern/sevmanager/view/s/", "/")
            }, t.getPasteMatches = function(e) {
                return a(e, /(?<=\b)P(\d{4,})(?=\b)/gi, "https://www.internalfb.com/intern/paste/P", "/")
            }, t.getNotebookMatches = function(e) {
                return a(e, /(?<=\b)n(\d{4,})(?=\b)/gi, "https://www.internalfb.com/intern/anp/view/?id=")
            }, t.getResortMatches = function(e) {
                return a(e, /(?<=\b)re(\d{4,})(?=\b)/gi, "https://www.internalfb.com/intern/resort/?ticket_num=")
            }, t.getCaseMatches = function(e) {
                return a(e, /(?<=\b)(C|C#|CASE)(\d{3,})(?<=\b)/gi, "https://internalfb.com/cases/", "", 1)
            }, t.getMetric360Matches = function(e) {
                return a(e, /(?<=\b)(ME[0-9]{3,11})(?<=\b)/gi, "https://internalfb.com/intern/bunny/?q=", "", 0)
            }, t.getGoalsMatches = function(e) {
                return a(e, /(?<=\b)(G[1-9][0-9]*)(?<=\b)/gi, "https://internalfb.com/intern/bunny/?q=", "", 0)
            }, t.getSRTMatches = function(e) {
                return a(e, /(?<=\b)j(\d{4,})(?=\b)/gi, "https://internalfb.com/intern/bunny/?srt ")
            }, t.getLaunchManagerMatches = function(e) {
                return a(e, /(?<=\b)(L\d{5,}(?:[A-Z]{1,5}\d{0,})?)(?=\b)/gi, "https://internalfb.com/intern/bunny/?q=")
            }, t.getAsyncJobTypeMatches = function(e) {
                return a(e, /(?<=\b)async(?:\sjobtype)?\s?#?(\d+)(?=\b)/gi, "https://www.internalfb.com/intern/async/home/job/")
            }, t.getFlowMatches = function(e) {
                return a(e, /(?<=\b)f(\d{4,})(?=\b)/gi, "https://our.intern.facebook.com/intern/fblearner/details/", "/")
            }, t.getBugReportMatches = function(e) {
                return a(e, /(?<=\b)(br\d{4,})(?=\b)/gi, "https://internalfb.com/intern/bunny/?q=")
            }, t.getCaseConnectMatches = function(e) {
                return a(e, /(?<=\b)([Cc][Cc][Nn]\d+)(?=\b)/gi, "https://internalfb.com/intern/bunny/?q=")
            }, t.getCustomerCareMatches = function(e) {
                return a(e, /(?<=\b)cc(\d{4,})(?=\b)/gi, "https://www.internalfb.com/intern/customer-care?case_id=")
            }, t.getCommitCloudMatches = function(e) {
                return n(e, /(?<=\b)r(WWW|FBS|OVRSOURCE|IGSRVHG|OPSFILES)([0-9a-fA-F]{9,40})(?=\b)/g).map(({
                    index: e,
                    length: t,
                    matches: r
                }) => ({
                    index: e,
                    length: t,
                    href: `https://www.internalfb.com/intern/commit/cloud/${r[0]}/${r[1]}`
                }))
            }, t.getQaMatches = function(e) {
                return a(e, /(?<=\b)Q([0-9]{4,})(?=\b)/gi, "https://www.internalfb.com/intern/qa/")
            }, t.getProgramsMatches = function(e) {
                return a(e, /(?<=\b)(PROG[PWA](\d+))(?=\b)/gi, "https://internalfb.com/intern/bunny/?q=")
            }, t.getMatchUrl = a
        },
        1616: function(e, t, r) {
            "use strict";

            function n(e) {
                var t = Array.prototype.slice.call(arguments, 1);
                return t.forEach((function(t) {
                    t && Object.keys(t).forEach((function(r) {
                        e[r] = t[r]
                    }))
                })), e
            }

            function a(e) {
                return Object.prototype.toString.call(e)
            }

            function o(e) {
                return "[object Function]" === a(e)
            }

            function l(e) {
                return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }
            var i = {
                fuzzyLink: !0,
                fuzzyEmail: !0,
                fuzzyIP: !1
            };
            var s = {
                    "http:": {
                        validate: function(e, t, r) {
                            var n = e.slice(t);
                            return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
                        }
                    },
                    "https:": "http:",
                    "ftp:": "http:",
                    "//": {
                        validate: function(e, t, r) {
                            var n = e.slice(t);
                            return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && ":" === e[t - 3] ? 0 : t >= 3 && "/" === e[t - 3] ? 0 : n.match(r.re.no_http)[0].length : 0
                        }
                    },
                    "mailto:": {
                        validate: function(e, t, r) {
                            var n = e.slice(t);
                            return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
                        }
                    }
                },
                u = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

            function c(e) {
                var t = e.re = r(1617)(e.__opts__),
                    n = e.__tlds__.slice();

                function i(e) {
                    return e.replace("%TLDS%", t.src_tlds)
                }
                e.onCompile(), e.__tlds_replaced__ || n.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), n.push(t.src_xn), t.src_tlds = n.join("|"), t.email_fuzzy = RegExp(i(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(i(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(i(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(i(t.tpl_host_fuzzy_test), "i");
                var s = [];

                function u(e, t) {
                    throw new Error('(LinkifyIt) Invalid schema "' + e + '": ' + t)
                }
                e.__compiled__ = {}, Object.keys(e.__schemas__).forEach((function(t) {
                    var r = e.__schemas__[t];
                    if (null !== r) {
                        var n = {
                            validate: null,
                            link: null
                        };
                        if (e.__compiled__[t] = n, "[object Object]" === a(r)) return ! function(e) {
                            return "[object RegExp]" === a(e)
                        }(r.validate) ? o(r.validate) ? n.validate = r.validate : u(t, r) : n.validate = function(e) {
                            return function(t, r) {
                                var n = t.slice(r);
                                return e.test(n) ? n.match(e)[0].length : 0
                            }
                        }(r.validate), void(o(r.normalize) ? n.normalize = r.normalize : r.normalize ? u(t, r) : n.normalize = function(e, t) {
                            t.normalize(e)
                        });
                        ! function(e) {
                            return "[object String]" === a(e)
                        }(r) ? u(t, r): s.push(t)
                    }
                })), s.forEach((function(t) {
                    e.__compiled__[e.__schemas__[t]] && (e.__compiled__[t].validate = e.__compiled__[e.__schemas__[t]].validate, e.__compiled__[t].normalize = e.__compiled__[e.__schemas__[t]].normalize)
                })), e.__compiled__[""] = {
                    validate: null,
                    normalize: function(e, t) {
                        t.normalize(e)
                    }
                };
                var c = Object.keys(e.__compiled__).filter((function(t) {
                    return t.length > 0 && e.__compiled__[t]
                })).map(l).join("|");
                e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + c + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + c + ")", "ig"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"),
                    function(e) {
                        e.__index__ = -1, e.__text_cache__ = ""
                    }(e)
            }

            function d(e, t) {
                var r = e.__index__,
                    n = e.__last_index__,
                    a = e.__text_cache__.slice(r, n);
                this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = a, this.text = a, this.url = a
            }

            function f(e, t) {
                var r = new d(e, t);
                return e.__compiled__[r.schema].normalize(r, e), r
            }

            function h(e, t) {
                if (!(this instanceof h)) return new h(e, t);
                var r;
                t || (r = e, Object.keys(r || {}).reduce((function(e, t) {
                    return e || i.hasOwnProperty(t)
                }), !1) && (t = e, e = {})), this.__opts__ = n({}, i, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, s, e), this.__compiled__ = {}, this.__tlds__ = u, this.__tlds_replaced__ = !1, this.re = {}, c(this)
            }
            h.prototype.add = function(e, t) {
                return this.__schemas__[e] = t, c(this), this
            }, h.prototype.set = function(e) {
                return this.__opts__ = n(this.__opts__, e), this
            }, h.prototype.test = function(e) {
                if (this.__text_cache__ = e, this.__index__ = -1, !e.length) return !1;
                var t, r, n, a, o, l, i, s;
                if (this.re.schema_test.test(e))
                    for ((i = this.re.schema_search).lastIndex = 0; null !== (t = i.exec(e));)
                        if (a = this.testSchemaAt(e, t[2], i.lastIndex)) {
                            this.__schema__ = t[2], this.__index__ = t.index + t[1].length, this.__last_index__ = t.index + t[0].length + a;
                            break
                        } return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (s = e.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || s < this.__index__) && null !== (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) && (o = r.index + r[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = r.index + r[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e.indexOf("@") >= 0 && null !== (n = e.match(this.re.email_fuzzy)) && (o = n.index + n[1].length, l = n.index + n[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && l > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = l)), this.__index__ >= 0
            }, h.prototype.pretest = function(e) {
                return this.re.pretest.test(e)
            }, h.prototype.testSchemaAt = function(e, t, r) {
                return this.__compiled__[t.toLowerCase()] ? this.__compiled__[t.toLowerCase()].validate(e, r, this) : 0
            }, h.prototype.match = function(e) {
                var t = 0,
                    r = [];
                this.__index__ >= 0 && this.__text_cache__ === e && (r.push(f(this, t)), t = this.__last_index__);
                for (var n = t ? e.slice(t) : e; this.test(n);) r.push(f(this, t)), n = n.slice(this.__last_index__), t += this.__last_index__;
                return r.length ? r : null
            }, h.prototype.tlds = function(e, t) {
                return e = Array.isArray(e) ? e : [e], t ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter((function(e, t, r) {
                    return e !== r[t - 1]
                })).reverse(), c(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, c(this), this)
            }, h.prototype.normalize = function(e) {
                e.schema || (e.url = "http://" + e.url), "mailto:" !== e.schema || /^mailto:/i.test(e.url) || (e.url = "mailto:" + e.url)
            }, h.prototype.onCompile = function() {}, e.exports = h
        },
        1617: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                var t = {};
                t.src_Any = r(1618).source, t.src_Cc = r(1619).source, t.src_Z = r(1620).source, t.src_P = r(1621).source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
                return t.src_pseudo_letter = "(?:(?![><｜]|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|[><｜]|" + t.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + t.src_ZCc + "|[.]).|" + (e && e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t.src_ZCc + ").|\\!(?!" + t.src_ZCc + "|[!]).|\\?(?!" + t.src_ZCc + "|[?]).)+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
            }
        },
        1618: function(e, t) {
            e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
        },
        1619: function(e, t) {
            e.exports = /[\0-\x1F\x7F-\x9F]/
        },
        1620: function(e, t) {
            e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
        },
        1621: function(e, t) {
            e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
        },
        1622: function(e, t) {
            e.exports = ["aaa", "aarp", "abarth", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "adac", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afamilycompany", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "aigo", "airbus", "airforce", "airtel", "akdn", "al", "alfaromeo", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "budapest", "bugatti", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "cancerresearch", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "caseih", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "ceb", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cookingchannel", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "csc", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "duck", "dunlop", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "esurance", "et", "etisalat", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fiat", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "foodnetwork", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fujixerox", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glade", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hgtv", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "intel", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "iveco", "jaguar", "java", "jcb", "jcp", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "lancia", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "liaison", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "linde", "link", "lipsy", "live", "living", "lixil", "lk", "llc", "loan", "loans", "locker", "locus", "loft", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "lupin", "luxe", "luxury", "lv", "ly", "ma", "macys", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "maserati", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "metlife", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "movistar", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nadex", "nagoya", "name", "nationwide", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "newholland", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "off", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "onyourside", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "qvc", "racing", "radio", "raid", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "rightathome", "ril", "rio", "rip", "rmit", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scjohnson", "scor", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "ses", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "shriram", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "space", "sport", "spot", "spreadbetting", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiftcover", "swiss", "sx", "sy", "sydney", "symantec", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "telefonica", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelchannel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "vistaprint", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "कॉम", "セール", "佛山", "ಭಾರತ", "慈善", "集团", "在线", "한국", "ଭାରତ", "大众汽车", "点看", "คอม", "ভাৰত", "ভারত", "八卦", "موقع", "বাংলা", "公益", "公司", "香格里拉", "网站", "移动", "我爱你", "москва", "қаз", "католик", "онлайн", "сайт", "联通", "срб", "бг", "бел", "קום", "时尚", "微博", "淡马锡", "ファッション", "орг", "नेट", "ストア", "삼성", "சிங்கப்பூர்", "商标", "商店", "商城", "дети", "мкд", "ею", "ポイント", "新闻", "工行", "家電", "كوم", "中文网", "中信", "中国", "中國", "娱乐", "谷歌", "భారత్", "ලංකා", "電訊盈科", "购物", "クラウド", "ભારત", "通販", "भारतम्", "भारत", "भारोत", "网店", "संगठन", "餐厅", "网络", "ком", "укр", "香港", "诺基亚", "食品", "飞利浦", "台湾", "台灣", "手表", "手机", "мон", "الجزائر", "عمان", "ارامكو", "ایران", "العليان", "اتصالات", "امارات", "بازار", "موريتانيا", "پاکستان", "الاردن", "بارت", "بھارت", "المغرب", "ابوظبي", "السعودية", "ڀارت", "كاثوليك", "سودان", "همراه", "عراق", "مليسيا", "澳門", "닷컴", "政府", "شبكة", "بيتك", "عرب", "გე", "机构", "组织机构", "健康", "ไทย", "سورية", "招聘", "рус", "рф", "珠宝", "تونس", "大拿", "みんな", "グーグル", "ευ", "ελ", "世界", "書籍", "ഭാരതം", "ਭਾਰਤ", "网址", "닷넷", "コム", "天主教", "游戏", "vermögensberater", "vermögensberatung", "企业", "信息", "嘉里大酒店", "嘉里", "مصر", "قطر", "广东", "இலங்கை", "இந்தியா", "հայ", "新加坡", "فلسطين", "政务", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw"]
        },
        1623: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M13.25 16c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zM19.75 16c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zM18 24.5c3 0 5.5-2 5.5-4a.5.5 0 00-.5-.5H13a.5.5 0 00-.5.5c0 2 2.5 4 5.5 4z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M29 18c0 6.075-4.925 11-11 11S7 24.075 7 18 11.925 7 18 7s11 4.925 11 11zm-2.5 0a8.5 8.5 0 11-17 0 8.5 8.5 0 0117 0z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1624: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("g", {
                    id: "ReplyOutlineIcon__reply",
                    fill: "none",
                    fillRule: "evenodd",
                    stroke: "none",
                    strokeWidth: "1"
                }, a.default.createElement("path", {
                    id: "ReplyOutlineIcon__Fill-20",
                    d: "M0 36h36V0H0z"
                }), a.default.createElement("path", {
                    id: "ReplyOutlineIcon__Fill-19",
                    fill: "currentColor",
                    d: "M17 10.7v4.8h2c4.7 0 7.5 2 8.6 6.1-2.3-1.8-5.6-2.1-8.6-2.1h-2v4.8l-9.9-6.8 9.9-6.8M17.2 8.5c-.3 0-.7.1-1 .3L5.8 16c-1 .7-1 2.3 0 3l10.5 7.2c.3.2.6.3 1 .3.9 0 1.8-.7 1.8-1.8v-3.2c5 0 7.9 1 8.9 3.9.3.8.7 1.1 1.1 1.1.6 0 1-.4 1-1 0-7.8-3.9-12-11-12v-3.2c-.1-1.1-.9-1.8-1.9-1.8z"
                })))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1625: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return !t || !e.some(e => (e => {
                    try {
                        const t = new URL(e);
                        return n.some(e => t.host.endsWith(e)) && "/" === t.pathname
                    } catch (t) {
                        return console.warn("Failed to parse url: " + e), !1
                    }
                })(e.actionUrl))
            };
            const n = ["facebook.com", "workplace.com", "messenger.com"]
        },
        1650: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                children: e
            }) {
                const t = (0, n.useTheme)();
                return (l.default.createElement(u, null, e, l.default.createElement(o.default, {
                    size: 36,
                    color: t.colors.base70
                })))
            };
            var n = r(6),
                a = s(r(1)),
                o = s(r(263)),
                l = s(r(0)),
                i = s(r(2));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, a.default)(i.default)(e => ({
                width: 50,
                height: 50,
                backgroundColor: e.theme.colors.base30,
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"
            }))
        },
        1651: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(6),
                a = s(r(1)),
                o = s(r(263)),
                l = s(r(0)),
                i = s(r(2));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, a.default)(i.default)(e => ({
                width: 32,
                height: 32,
                backgroundColor: e.theme.colors.base30,
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
                marginRight: "auto"
            }));
            var c = ({
                children: e
            }) => {
                const t = (0, n.useTheme)();
                return (l.default.createElement(u, null, e, l.default.createElement(o.default, {
                    size: 28,
                    color: t.colors.base70
                })))
            };
            t.default = c
        },
        1652: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(6),
                a = r(8),
                o = r(52),
                l = r(101);
            var i = (e, t, r, i) => {
                const {
                    isNetworkConnected: s,
                    isRtcEnabled: u,
                    rtcStackStatus: c,
                    isPinned: d,
                    isLastPinned: f,
                    isFirstItem: h
                } = i, {
                    threadKey: p,
                    isUnread: m,
                    isMuted: g,
                    threadType: y,
                    capabilities: v
                } = e, b = (0, n.useTheme)();
                return [(0, l.getToggleThreadUnreadItem)(p, m), (0, l.getPopoutThreadItem)(p), (0, l.getPinItem)(d, p), (0, l.getMoveUpPinnedItem)(d, p, h), (0, l.getMoveDownPinnedItem)(d, p, f), (0, l.getNotificationsItem)(g, p, null), l.Separator, (0, l.getAudioCallMenuItem)(r.userID, p, v, {
                    isNetworkConnected: s,
                    isRtcEnabled: u,
                    rtcStackStatus: c,
                    participants: t
                }, a.OutgoingCallSource.CONTEXT_MENU), (0, l.getVideoCallMenuItem)(r.userID, p, v, {
                    isNetworkConnected: s,
                    isRtcEnabled: u,
                    rtcStackStatus: c,
                    participants: t
                }, a.OutgoingCallSource.CONTEXT_MENU), l.Separator, (0, l.getArchiveThreadMenuItem)(p), (0, l.getDeleteThreadMenuItem)(p), (0, o.isP2PThread)(y) ? null : (0, l.getLeaveGroupActionItem)(r.userID, p, b.colors.red, !1, !1)]
            };
            t.default = i
        },
        1653: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(r(5)),
                a = o(r(90));
            o(r(0));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let l = {
                    AND: "AND",
                    NONE: "NONE",
                    OR: "OR"
                },
                i = {
                    COMMA: "COMMA",
                    SEMICOLON: "SEMICOLON"
                },
                s = function(e, t, r) {
                    t = t || l.AND, r = r || i.COMMA;
                    let o = e.length;
                    if (0 === o) return "";
                    if (1 === o) return e[0];
                    let s = e[o - 1],
                        u = e[0];
                    for (let t = 1; t < o - 1; ++t) switch (r) {
                        case i.SEMICOLON:
                            u = n.default._("{previous items}; {following items}", [n.default._param("previous items", u), n.default._param("following items", e[t])], {
                                hk: "4hs4xq"
                            });
                            break;
                        default:
                            u = n.default._("{previous items}, {following items}", [n.default._param("previous items", u), n.default._param("following items", e[t])], {
                                hk: "2z8RMb"
                            })
                    }
                    return function(e, t, r, o) {
                        switch (r) {
                            case l.AND:
                                return n.default._("{list of items} and {last item}", [n.default._param("list of items", e), n.default._param("last item", t)], {
                                    hk: "17bm9d"
                                });
                            case l.OR:
                                return n.default._("{list of items} or {last item}", [n.default._param("list of items", e), n.default._param("last item", t)], {
                                    hk: "3q8AmB"
                                });
                            case l.NONE:
                                switch (o) {
                                    case i.SEMICOLON:
                                        return n.default._("{previous items}; {last item}", [n.default._param("previous items", e), n.default._param("last item", t)], {
                                            hk: "3i6hSW"
                                        });
                                    default:
                                        return n.default._("{list of items}, {last item}", [n.default._param("list of items", e), n.default._param("last item", t)], {
                                            hk: "3Q0iaX"
                                        })
                                }
                                default:
                                    (0, a.default)(!1)
                        }
                    }(u, s, t, r)
                };
            s.DELIMITERS = i, s.CONJUNCTIONS = l;
            var u = s;
            t.default = u
        },
        1656: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = u(r(75)),
                a = u(r(1)),
                o = u(r(1657)),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                i = r(6);

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, a.default)(n.default)(e => ({
                padding: 0,
                backgroundColor: e.color,
                width: 50,
                height: 28,
                borderRadius: 14
            }));
            var f = (0, l.memo)((function({
                color: e,
                ...t
            }) {
                const r = (0, i.useTheme)();
                return (l.default.createElement(d, c({
                    color: e
                }, t, {
                    silentPressedState: !0
                }), l.default.createElement(o.default, {
                    color: r.colors.base80,
                    size: 24
                })))
            }));
            t.default = f
        },
        1657: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M22.331 10.878a1.25 1.25 0 00-2.162-1.256l-8.02 13.814a.25.25 0 01-.394.051l-5.121-5.12a1.25 1.25 0 10-1.768 1.767l6.5 6.5a1.25 1.25 0 001.965-.256l9-15.5zM24.751 17a.75.75 0 00-.624 1.166l2.999 4.498a.75.75 0 001.248 0l2.998-4.498A.75.75 0 0030.75 17H24.75z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1663: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    resultType: t,
                    nickname: r
                } = e.suggestion;
                if (!e.viewerId || !t) return null;
                return (o.default.createElement(a.SecondarySuggestionText, {
                    use: "caption"
                }, o.default.createElement(n.default, {
                    searchResultType: t,
                    subtitle: null != r ? r : null,
                    participants: e.participants,
                    viewerId: e.viewerId
                })))
            };
            var n = l(r(560)),
                a = r(1665),
                o = l(r(0));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        1664: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    participants: t,
                    subtitle: r,
                    mutliCompanyBadgeTextStyle: l
                } = e, i = t.some(e => e.workForeignEntityType === a.WorkForeignEntityType.Foreign);
                return o.default.createElement(o.default.Fragment, null, i && o.default.createElement(o.default.Fragment, null, o.default.createElement(n.default, {
                    use: l,
                    isGroupChat: !0
                }), "· "), null != r ? r : (() => {
                    let e = [];
                    return t.map(t => e.push(t.name)), e.join(", ")
                })())
            };
            var n = l(r(368)),
                a = r(8),
                o = l(r(0));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        1665: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    nickname: t
                } = e.suggestion;
                return t ? a.default.createElement(i, {
                    use: "caption"
                }, t) : null
            }, t.SecondarySuggestionText = void 0;
            var n = l(r(1)),
                a = l(r(0)),
                o = l(r(4));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const i = (0, n.default)(o.default)(e => ({
                flex: 1,
                paddingLeft: 12,
                color: e.theme.semanticColors.textSecondary
            }));
            t.SecondarySuggestionText = i
        },
        172: function(e, t, r) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(t) {
                    const {
                        isWindowFocused: r,
                        isFirst: a,
                        isLast: I,
                        message: {
                            message: V,
                            attachments: q,
                            attachmentItems: G,
                            attachmentCTAs: $
                        },
                        messageReactions: te,
                        isRtcReady: re,
                        isSenderViewer: ne,
                        lastReadBy: ae,
                        deliveryStatus: oe = M.DeliveryStatus.None,
                        threadType: le,
                        canSeeDelivery: ie,
                        userID: se,
                        isEmployee: ue = !1,
                        suppressXMA: ce = !1,
                        showReactionPicker: de,
                        threadCannotUnsendReason: fe,
                        onMessageBubbleClick: he,
                        onReactionPickerHide: pe,
                        attachmentBubbleContextMenuHandler: me,
                        removedBubbleContextMenuHandler: ge,
                        textBubbleContextMenuHandler: ye,
                        onUrlClick: ve,
                        openMediaViewer: be,
                        enableReplies: _e,
                        enableReplyButton: we,
                        onReaction: Ce,
                        ctaHandlers: Ee,
                        onRetrySend: ke,
                        onReplyClick: xe,
                        startReply: Me,
                        duplicates: Se,
                        pollDetails: Oe,
                        isForwardedMessage: Te = !1,
                        isSaved: Ie = !1,
                        isPinned: Re = !1,
                        fullWidth: Ae = !1
                    } = t, Pe = (0, F.useContext)(T.default), je = (0, H.useTheme)(), {
                        threadTheme: De
                    } = (0, O.useThreadTheme)(), ze = De.messageBubbleBorder(ne, je), [Fe, Be] = (0, F.useState)(!1), Le = (0, F.useRef)(null);
                    (0, F.useEffect)(() => () => {
                        Le.current && clearTimeout(Le.current)
                    }, []), (0, F.useEffect)(() => {
                        Be(!!de)
                    }, [de, Be]);
                    const Ne = (0, F.useRef)(),
                        Ue = Pe.selectedMessageOTID === V.offlineThreadingId;
                    let We = null,
                        He = [],
                        Ve = !1,
                        Ke = null;
                    (0, y.isHotlike)(V.stickerId) && (We = function(e, t, r, n, a, o, l) {
                        return F.default.createElement(y.Hotlike, {
                            stickerId: e,
                            isSenderViewer: t,
                            threadTheme: r,
                            hotLikeContextMenuHandler: e => {
                                l && n && l(e, n, a, o)
                            }
                        })
                    }(V.stickerId, ne, De, q ? q[0] : void 0, qe(V), {
                        messageId: V.messageId,
                        messageOTID: V.offlineThreadingId,
                        threadKey: V.threadKey,
                        timestampMs: V.timestampMs
                    }, me));
                    if (V.isUnsent) He.push(F.default.createElement(m.default, {
                        isSenderViewer: ne,
                        bubbleContextMenuHandler: e => {
                            ge && ge(e, {
                                messageId: V.messageId,
                                messageOTID: V.offlineThreadingId,
                                threadKey: V.threadKey,
                                timestampMs: V.timestampMs
                            })
                        },
                        isFirst: a,
                        isLast: I,
                        message: ne ? x.default._("You removed a message", null, {
                            hk: "3JShFl"
                        }) : x.default._("{name of user} removed a message", [x.default._param("name of user", V.name)], {
                            hk: "33VTt3"
                        })
                    }));
                    else {
                        if (q && q.length > 0) {
                            let e = function(e, t, r = {}, n = [], a, o, l, i, s, u, d, f, m, g, v, C, x, M, S, O, T, I, R) {
                                let A = [],
                                    P = !1;
                                const j = [
                                    [e => e.attachmentType === k.AttachmentType.Image || e.attachmentType === k.AttachmentType.AnimatedImage, t => {
                                        t.length > 0 && A.push(F.default.createElement(p.default, {
                                            key: t[0].offlineAttachmentId || t[0].attachmentFbid,
                                            attachments: t,
                                            isFirst: a,
                                            isLast: o,
                                            isSenderViewer: l,
                                            bubbleContextMenuHandler: (t, r) => {
                                                M && M(t, r, u, s, void 0, e.sendStatusV2 === k.MessageSendStatus.Sending)
                                            },
                                            openMediaViewer: S
                                        }))
                                    }],
                                    [e => e.attachmentType === k.AttachmentType.File, e => {
                                        e.sort((e, t) => t.attachmentIndex - e.attachmentIndex).map((t, r) => {
                                            A.push(F.default.createElement(h.default, {
                                                key: t.attachmentFbid,
                                                attachment: t,
                                                isFirst: a && 0 === r,
                                                isLast: o && r === e.length - 1,
                                                isSenderViewer: l,
                                                bubbleContextMenuHandler: (e, t) => {
                                                    M && M(e, t, u, s)
                                                }
                                            }))
                                        })
                                    }]
                                ];
                                for (let e of j) {
                                    const [r, n] = e;
                                    n(t.filter(r))
                                }
                                const D = j.map(e => e[0]);
                                return t.filter(e => !D.some(t => t(e))).map(t => {
                                    const d = r[t.attachmentFbid];
                                    if (t.attachmentType === k.AttachmentType.Sticker) A.push(F.default.createElement(y.default, {
                                        key: t.attachmentFbid,
                                        attachment: t,
                                        sourceUrl: f && (0, E.default)(t.playableUrlInfo) || (0, E.default)(t.previewUrlInfo),
                                        isSenderViewer: l,
                                        bubbleContextMenuHandler: (e, t) => {
                                            M && M(e, t, u, s)
                                        }
                                    }));
                                    else if (t.attachmentType === k.AttachmentType.Video) A.push(F.default.createElement(b.default, {
                                        key: t.offlineAttachmentId || t.attachmentFbid,
                                        attachment: t,
                                        isSenderViewer: l,
                                        isFirst: a,
                                        isLast: o,
                                        openMediaViewer: S,
                                        threadKey: e.threadKey,
                                        bubbleContextMenuHandler: (e, t) => {
                                            M && M(e, t, u, s)
                                        }
                                    }));
                                    else if (I && t.listItemsId && t.listItemsDescriptionText) A.push(F.default.createElement(U.default, {
                                        threadKey: e.threadKey,
                                        pollId: t.listItemsId,
                                        title: t.listItemsDescriptionText,
                                        options: I,
                                        moreOptionsText: t.listItemsSecondaryDescriptionText
                                    }));
                                    else if (t.listItemsId && t.listItemsDescriptionText);
                                    else if (t.attachmentType === k.AttachmentType.XMA && d && d.length > 1) P = !0, A.push(F.default.createElement(w.default, {
                                        attachment: t,
                                        key: t.attachmentFbid,
                                        attachmentItems: d,
                                        isSenderViewer: l,
                                        isFirst: a,
                                        isLast: o,
                                        ctaHandlers: O,
                                        attachmentCTAs: n,
                                        setDisableTimeTooltip: v
                                    }));
                                    else if (t.attachmentType !== k.AttachmentType.XMA || m)
                                        if (t.attachmentType === k.AttachmentType.Audio) {
                                            const r = (0, E.default)(t.playableUrlInfo) || (0, E.default)(t.previewUrlInfo),
                                                n = t.playableDurationMs ? t.playableDurationMs / 1e3 : null;
                                            A.push(F.default.createElement(c.default, {
                                                isFirst: a,
                                                isLast: o,
                                                isSenderViewer: l,
                                                attachmentFbid: t.attachmentFbid,
                                                sourceUrl: r,
                                                duration: n,
                                                attachment: t,
                                                setDisableTimeTooltip: v,
                                                bubbleContextMenuHandler: (e, t) => {
                                                    M && M(e, t, u, s)
                                                },
                                                threadKey: e.threadKey
                                            }))
                                        } else m || A.push(F.default.createElement(_.default, {
                                            key: t.attachmentFbid,
                                            title: "Unsupported attachment",
                                            description: "Click to open in browser",
                                            isSenderViewer: l,
                                            onUrlClick: x,
                                            isFirst: a,
                                            isLast: o,
                                            attachment: t,
                                            setDisableTimeTooltip: v
                                        }));
                                    else(0, N.default)(n, g) && A.push(F.default.createElement(_.default, {
                                        key: t.attachmentFbid,
                                        imageUrl: (0, E.default)(t.playableUrlInfo) || (0, E.default)(t.previewUrlInfo),
                                        isSenderViewer: l,
                                        onUrlClick: x,
                                        isFirst: a,
                                        isLast: o,
                                        attachment: t,
                                        threadType: C,
                                        threadKey: e.threadKey,
                                        isRtcReady: i || !1,
                                        ctaHandlers: O,
                                        duplicates: T,
                                        bubbleContextMenuHandler: (e, t) => {
                                            M && M(e, t, u, s, n)
                                        },
                                        attachmentCTAs: n,
                                        setDisableTimeTooltip: v
                                    }))
                                }), {
                                    attachmentContent: A,
                                    fullWidth: P
                                }
                            }(V, q, G, $, a, I, ne, re, {
                                messageId: V.messageId,
                                messageOTID: V.offlineThreadingId,
                                threadKey: V.threadKey,
                                timestampMs: V.timestampMs
                            }, qe(V), 0, r, ce, ue, Be, le, ve, me, be, Ee, Se, Oe);
                            He = e.attachmentContent, Ve = e.fullWidth
                        }
                        V.text && (Ke = function(e, t, r, n, a, l, i, s, c, f, h) {
                            if (!e.text) return null;
                            return (0, o.isEmojiOnlyString)(e.text) ? F.default.createElement(d.default, {
                                key: e.offlineThreadingId,
                                isSenderViewer: n,
                                messageText: e.text,
                                bubbleContextMenuHandler: (e, t) => {
                                    f && f(e, l, s, t)
                                }
                            }) : e.isAdminMessage ? F.default.createElement(u.default, {
                                key: e.offlineThreadingId,
                                messageText: e.text,
                                threadKey: e.threadKey,
                                adminMsgCTAId: e.adminMsgCTAId,
                                adminMsgCTATitle: e.adminMsgCTATitle,
                                adminMsgCTAType: e.adminMsgCTAType
                            }) : F.default.createElement(v.default, {
                                key: e.offlineThreadingId,
                                messageId: e.messageId,
                                threadKey: e.threadKey,
                                isSenderViewer: n,
                                isForwardedMessage: i,
                                messageText: e.text,
                                hasAttachment: e.hasAttachment,
                                mentionIds: e.mentionIds,
                                mentionOffsets: e.mentionOffsets,
                                mentionLengths: e.mentionLengths,
                                isFirst: t,
                                isLast: r && !e.hasAttachment,
                                onUrlClick: c,
                                bubbleContextMenuHandler: (e, t, r) => {
                                    f && f(e, l, s, t, r)
                                },
                                threadTheme: a,
                                border: h
                            })
                        }(V, a, I, ne, De, {
                            messageId: V.messageId,
                            messageOTID: V.offlineThreadingId,
                            threadKey: V.threadKey,
                            timestampMs: V.timestampMs
                        }, Te, qe(V), ve, ye, ze))
                    }

                    function qe(e) {
                        return Date.now() - e.timestampMs < 6e5 && e.cannotUnsendReason === k.MessageCannotUnsendReason.MSGGlobalDeleteMessageUnsendabilityStatusCanUnsend && e.authorityLevel === k.MessageAuthorityLevel.AuthorityLevelAuthoritative && fe === k.ThreadCannotUnsendReason.MSGGlobalDeleteThreadUnsendabilityStatusCanUnsend
                    }
                    const Ge = (0, F.useCallback)(e => {
                            var t;
                            var r;
                            (null === (t = document.getElementById(V.messageId)) || void 0 === t ? void 0 : t.contains(e.target)) || (null === (r = window.getSelection()) || void 0 === r || r.empty(), 2 === e.nativeEvent.detail && (S.default.metrics.trackStrictEvent((0, C.UserInteractionEvent)({
                                event: "click",
                                target: "reply-double-click",
                                surface: "messenger"
                            })), Me && Me()))
                        }, [V.messageId, Me]),
                        $e = (e, t = !1) => F.default.createElement(Y, {
                            key: e && e.key ? e.key : void 0,
                            isAdminMessage: V.isAdminMessage,
                            isSenderViewer: ne,
                            hasBadges: t && (rt || Ie || Re),
                            style: {
                                width: "inherit"
                            },
                            readCount: tt.length > 0
                        }, F.default.createElement(X, {
                            isSenderViewer: ne,
                            delay: 1e3,
                            disable: Fe,
                            style: {
                                width: "inherit"
                            },
                            tooltipProps: {
                                children: () => F.default.createElement(K.default, {
                                    use: "caption",
                                    color: je.semanticColors.textPrimary
                                }, (0, A.computeMessageListTimestamp)(V.timestampMs)),
                                placement: "top"
                            }
                        }, e, t && !V.isAdminMessage && !V.isUnsent && F.default.createElement(n.default, {
                            isMessageSelected: Ue
                        }, Ie && F.default.createElement(Q, null, F.default.createElement(P.default, {
                            size: 19,
                            color: je.colors.orchid
                        })), Re && F.default.createElement(D.default, {
                            size: 14,
                            color: je.colors.blueGrey
                        }), rt && te && F.default.createElement(i.default, {
                            reactions: te,
                            onReactionTooltipOpened: () => Be(!0),
                            onReactionTooltipHidden: () => Be(!1)
                        })))),
                        [Xe, Je] = (0, F.useState)(!1),
                        Qe = F.default.createElement(L.default, {
                            "aria-label": x.default._("Open Reaction", null, {
                                hk: "17jBqW"
                            }).toString(),
                            telemetryName: "react-icon",
                            className: "messenger-bubble-react",
                            size: L.RoundButtonSize.Small,
                            use: L.RoundButtonUse.Transparent,
                            icon: j.default,
                            iconColor: je.semanticColors.secondary,
                            iconSize: 24,
                            onClick: e => {
                                Je(!0), he && he()
                            },
                            pressed: Xe,
                            css: {
                                margin: "4px",
                                visibility: Xe ? "visible" : "hidden"
                            }
                        }),
                        Ze = F.default.createElement(L.default, {
                            "aria-label": x.default._("Reply", null, {
                                hk: "3CA8jI"
                            }).toString(),
                            telemetryName: "reply-icon",
                            className: "messenger-bubble-reply",
                            size: L.RoundButtonSize.Small,
                            use: L.RoundButtonUse.Transparent,
                            icon: z.default,
                            iconColor: je.semanticColors.secondary,
                            iconSize: 24,
                            onClick: e => {
                                Me && Me()
                            },
                            css: {
                                margin: "4px -4px",
                                visibility: "hidden"
                            }
                        }),
                        Ye = Ce && !V.isAdminMessage && !V.isUnsent,
                        et = _e && !V.isAdminMessage && !V.isUnsent && we,
                        tt = ae ? ae.filter(e => !!e) : [],
                        rt = !V.isAdminMessage && te && te.length > 0,
                        nt = (0, F.useCallback)(() => {
                            Le.current && window.clearTimeout(Le.current), Le.current = null
                        }, [Le]),
                        at = "mac" === je.os ? x.default._('Message bubble. Press "control" and "i" key to open context menu.', null, {
                            hk: "BXBek"
                        }).toString() : x.default._('Message bubble. Press "shift" and "F10" key to open context menu.', null, {
                            hk: "4xNoYL"
                        }).toString();
                    return F.default.createElement(B.default, {
                        key: V.offlineThreadingId,
                        "data-automation-id": "message-bubble",
                        onClick: V.sendStatusV2 !== k.MessageSendStatus.Sending ? Ge : () => {}
                    }, F.default.createElement(J, {
                        isSenderViewer: ne,
                        isAdminMessage: V.isAdminMessage
                    }, ne && V.sendStatusV2 !== k.MessageSendStatus.Sending && F.default.createElement(Z, {
                        isSenderViewer: ne
                    }, et && Ze, Ye && Qe), F.default.createElement(B.default, {
                        className: "message-bubble-container",
                        id: V.messageId,
                        "aria-label": at,
                        css: {
                            zIndex: Ue ? R.default.ReactionPickerScrimAndSelectedMessage : void 0,
                            maxWidth: Ve ? "95%" : Ae ? "auto" : V.isAdminMessage ? "90%" : "60%",
                            width: Ve ? "100%" : "auto"
                        },
                        onMouseDown: e => {
                            e.persist(), !Ue && Ce && 0 === e.button && (Le.current = window.setTimeout(() => {
                                nt(), Ne.current = e, he && he()
                            }, 300))
                        },
                        onMouseMove: nt,
                        onMouseUp: nt,
                        onContextMenu: nt
                    }, F.default.createElement(W.default, {
                        onReaction: Ce,
                        currentReaction: ee(te, se),
                        messageDetails: {
                            messageId: V.messageId,
                            messageOTID: V.offlineThreadingId,
                            threadKey: V.threadKey,
                            timestampMs: V.timestampMs
                        },
                        clickEvent: Ne.current,
                        pickerVisible: de,
                        isViewerSender: ne,
                        width: Ve ? "100%" : "auto",
                        onHide: () => {
                            pe && pe(), Je(!1), e(() => Ne.current = void 0)
                        }
                    }, V.replySourceId && $e(F.default.createElement(g.default, {
                        message: V,
                        isSenderViewer: ne,
                        userID: se || "",
                        threadTheme: De,
                        onReplyClick: xe
                    }), !1), Ke && $e(Ke, !V.hasAttachment), We ? $e(We, !0) : He.map((e, t) => e && F.default.createElement(F.default.Fragment, {
                        key: t
                    }, $e(e, t === He.length - 1))))), !ne && V.sendStatusV2 !== k.MessageSendStatus.Sending && !Ve && F.default.createElement(Z, {
                        isSenderViewer: ne
                    }, Ye && Qe, et && Ze)), ie && (tt.length > 0 ? F.default.createElement(s.default, {
                        lastReadBy: tt,
                        hasReaction: rt
                    }) : ne && !V.isAdminMessage && F.default.createElement(l.default, {
                        status: oe,
                        hasReaction: rt
                    })), (V.sendStatusV2 === k.MessageSendStatus.NonRetriableError || V.sendStatusV2 === k.MessageSendStatus.RetriableError) && F.default.createElement(f.default, {
                        onRetrySend: V.sendStatusV2 === k.MessageSendStatus.RetriableError ? ke : void 0
                    }))
                };
                var n = $(r(1579)),
                    a = r(40),
                    o = r(225),
                    l = $(r(232)),
                    i = $(r(1584)),
                    s = $(r(1593)),
                    u = $(r(362)),
                    c = $(r(542)),
                    d = $(r(1596)),
                    f = $(r(1597)),
                    h = $(r(365)),
                    p = $(r(1601)),
                    m = $(r(1609)),
                    g = $(r(1610)),
                    y = G(r(350)),
                    v = $(r(351)),
                    b = $(r(547)),
                    _ = $(r(531)),
                    w = $(r(409)),
                    C = r(24),
                    E = $(r(27)),
                    k = r(8),
                    x = $(r(5)),
                    M = r(133),
                    S = $(r(9)),
                    O = r(41),
                    T = $(r(366)),
                    I = $(r(1)),
                    R = $(r(141)),
                    A = r(115),
                    P = $(r(633)),
                    j = $(r(1623)),
                    D = $(r(634)),
                    z = $(r(1624)),
                    F = G(r(0)),
                    B = $(r(2)),
                    L = G(r(22)),
                    N = $(r(1625)),
                    U = $(r(549)),
                    W = $(r(551)),
                    H = r(6),
                    V = $(r(73)),
                    K = $(r(4));

                function q() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap;
                    return q = function() {
                        return e
                    }, e
                }

                function G(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = q();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } return r.default = e, t && t.set(e, r), r
                }

                function $(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                const X = (0, I.default)(V.default)(a.MessageContainerStyles),
                    J = (0, I.default)(B.default)(e => ({
                        flexDirection: "row",
                        justifyContent: e.isAdminMessage ? "center" : e.isSenderViewer ? "flex-end" : "flex-start",
                        ":hover, :focus-within": {
                            ".messenger-bubble-react": {
                                visibility: "visible"
                            },
                            ".messenger-bubble-reply": {
                                visibility: "visible"
                            }
                        },
                        paddingRight: e.isSenderViewer && !e.isAdminMessage ? "20px" : 0
                    })),
                    Q = (0, I.default)(B.default)({
                        margin: -3
                    }),
                    Z = (0, I.default)(B.default)(() => ({
                        flexDirection: "row"
                    })),
                    Y = (0, I.default)(B.default)(e => ({
                        flexDirection: "row",
                        justifyContent: e.isAdminMessage ? "center" : e.isSenderViewer ? "flex-end" : "flex-start",
                        marginBottom: e.hasBadges && !e.readCount ? 22 : e.hasBadges && e.readCount ? 18 : 0
                    }));

                function ee(e, t) {
                    if (!t) return "";
                    const r = e.find(e => e.actorId === t);
                    return r ? r.reaction : ""
                }
            }).call(this, r(231).setImmediate)
        },
        1723: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M20.49 10.207c.285-.286.13-.77-.27-.82A17.972 17.972 0 006.11 13.734c-.476.42-.475 1.152-.026 1.601l.849.849c.449.449 1.175.444 1.658.032a14.447 14.447 0 018.943-3.459c.263-.008.516-.112.703-.298l2.252-2.252zM18.945 15.287h.001l2.195-2.195 2.827-2.828 2.9-2.898a1.25 1.25 0 111.767 1.768l-1.728 1.728a.515.515 0 00.113.806 17.959 17.959 0 012.869 2.066c.477.42.475 1.152.026 1.601l-.849.849c-.449.449-1.175.444-1.658.032a14.43 14.43 0 00-3.134-2.043.726.726 0 00-.827.149l-1.001 1.001c-.262.262-.159.71.183.852 1.065.445 2.08 1.05 3.006 1.816.49.404.486 1.138.037 1.587l-.848.848c-.45.45-1.174.442-1.679.057a8.455 8.455 0 00-3.822-1.63.715.715 0 00-.614.207l-2.165 2.164c-.073.074.002.203.104.18a6.005 6.005 0 014.71.872c.525.356.52 1.095.072 1.544l-2.581 2.581a1.2 1.2 0 01-1.698 0l-2.58-2.58c-.152-.152-.417-.206-.569-.054l-4.868 4.868a1.25 1.25 0 11-1.768-1.768l7.534-7.534h-.002l4.047-4.046zM14.454 16.243c.179-.18.012-.466-.229-.387a11.922 11.922 0 00-3.86 2.135c-.49.404-.486 1.138-.037 1.587l.042.042a.5.5 0 00.707 0l3.377-3.377z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        173: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = i(r(556)),
                a = i(r(27)),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function l() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var s = (0, o.memo)((function({
                size: e = "small",
                viewerId: t,
                participants: r,
                presence: l
            }) {
                const i = r.filter(e => e.contactId != t);
                return (o.default.createElement(n.default, {
                    size: e,
                    firstProfilePhotoUrl: (0, a.default)(i[0].profilePicture),
                    secondProfilePhotoUrl: (0, a.default)(i[1].profilePicture),
                    presence: l
                }))
            }));
            t.default = s
        },
        1742: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Separator = t.HourInput = t.TimeInput = t.TimeContainer = t.TimePickerContainer = void 0;
            var n = i(r(1)),
                a = i(r(103)),
                o = i(r(120)),
                l = i(r(60));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const s = (0, n.default)(o.default)({
                display: "flex",
                alignItems: "center"
            });
            t.TimePickerContainer = s;
            const u = (0, n.default)(a.default)(({
                theme: e
            }) => ({
                display: "flex",
                padding: e.select({
                    mac: "0 6px 1px",
                    windows: "2px 6px 3px"
                }),
                ...e.select({
                    mac: {
                        border: `1px solid ${e.semanticColors.bgLine}`,
                        borderRadius: 5
                    },
                    windows: {
                        border: `2px solid ${e.colors.flatBase50}`
                    }
                })
            }));
            t.TimeContainer = u;
            const c = (0, n.default)(l.default)(({
                theme: e,
                disabled: t
            }) => ({
                width: "1.5em",
                padding: 1,
                backgroundColor: "transparent",
                color: t ? e.colors.base40 : e.semanticColors.textPrimary,
                border: "none",
                ":disabled": {
                    backgroundColor: "transparent"
                }
            }));
            t.TimeInput = c;
            const d = (0, n.default)(c)({
                textAlign: "right"
            });
            t.HourInput = d;
            const f = n.default.div(({
                theme: e,
                disabled: t
            }) => ({
                display: "block",
                padding: "0 3px",
                color: t ? e.colors.base40 : e.semanticColors.textPrimary
            }));
            t.Separator = f
        },
        1743: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t, r) {
                return (0, a.useReducer)(o, function(e, t, r) {
                    const a = (0, n.getComponentsFromSeconds)(e, r);
                    return i({
                        current: e,
                        min: t,
                        render: a,
                        mode: r
                    }, a)
                }(e, t, r))
            };
            var n = r(39),
                a = r(0);

            function o(e, t) {
                switch (t.type) {
                    case "renderHour":
                        return {
                            ...e, render: l(e.render, t => (0, n.isValidHour)(t, e.mode), "hour", t.value)
                        };
                    case "renderMinute":
                        return {
                            ...e, render: l(e.render, n.isValidMinute, "minute", t.value)
                        };
                    case "changePeriod":
                        return "12h" === e.mode ? i(e, {
                            ...e.render,
                            period: t.value
                        }) : e;
                    case "constrain":
                        return i(e, e.render);
                    case "changeMin":
                        return i({
                            ...e,
                            min: t.min
                        }, e.render)
                }
            }

            function l(e, t, r, n) {
                return t(n) || "" === n ? {
                    ...e,
                    [r]: n.trim()
                } : e
            }

            function i(e, t) {
                const r = function(e, t) {
                    return {
                        hour: (r = e.hour, a = t.mode, "" === r ? "12h" === a ? "12" : "0" : r),
                        minute: (0, n.zeroize)(e.minute),
                        period: "12h" === t.mode ? e.period : void 0
                    };
                    var r, a
                }(t, e);
                if (function(e) {
                        return !isNaN((0, n.numberize)(e.hour)) && !isNaN((0, n.numberize)(e.minute))
                    }(r)) {
                    const t = Math.max(e.min, (0, n.getSecondsFromComponents)(r, e.mode));
                    return {
                        ...e,
                        current: t,
                        render: (0, n.getComponentsFromSeconds)(t, e.mode)
                    }
                }
                return {
                    ...e,
                    render: r
                }
            }
        },
        1748: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(142),
                a = c(r(1)),
                o = c(r(0)),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(22)),
                i = c(r(33)),
                s = r(6);

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = (0, a.default)(i.default)(e => ({
                    ...e.style || {},
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%"
                })),
                f = (0, a.default)(l.default)({
                    borderRadius: "0%",
                    height: 41,
                    flex: 1
                });
            var h = o.default.memo((function({
                currentCategory: e,
                onCategoryChanged: t,
                categories: r,
                style: a
            }) {
                const i = (0, s.useTheme)();
                return (o.default.createElement(d, {
                    direction: "horizontal",
                    style: a
                }, r.map(r => o.default.createElement(f, {
                    key: r,
                    "aria-label": n.EMOJI_CATEGORIES_HEADER_DISPLAY[r].toString(),
                    use: l.RoundButtonUse.Transparent,
                    icon: n.EMOJI_CATEGORIES_ICONS[r],
                    telemetryName: "change_emoji_category",
                    size: l.RoundButtonSize.Large,
                    iconColor: e === r ? i.colors.base80 : i.colors.base60,
                    silentPressedState: !0,
                    onClick: () => t(r)
                }))))
            }));
            t.default = h
        },
        1749: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = d(r(1750)),
                a = d(r(1)),
                o = d(r(367)),
                l = r(584),
                i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                s = d(r(33)),
                u = d(r(13));

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, a.default)(l.VariableSizeList)(e => ({
                "::-webkit-scrollbar": {
                    width: 7
                },
                "::-webkit-scrollbar-thumb": {
                    background: e.theme.semanticColors.bgLine
                }
            }));
            var h = i.default.memo(i.default.forwardRef((function({
                currentEmoji: e,
                defaultSkintone: t,
                hotlikeColor: r,
                onEmojiClick: a,
                showHotlike: l,
                pickerType: c = "normal",
                listRef: d,
                rows: h,
                onCategoryChanged: p,
                currentCategory: m,
                accessibilityRole: g
            }, y) {
                const v = (0, i.useCallback)(({
                    visibleStartIndex: e
                }) => {
                    const t = h[e];
                    t.category && t.category !== m && p && p(t.category)
                }, [p, m, h]);

                function b(e) {
                    return h[e].rowHeight
                }
                const _ = (0, i.useMemo)(() => ({
                    rows: h,
                    currentEmoji: e,
                    defaultSkintone: t,
                    hotlikeColor: r,
                    pickerType: c,
                    showHotlike: l,
                    onEmojiClick: a,
                    accessibilityRole: g
                }), [h, e, t, r, c, l, a, g]);
                return (i.default.createElement(u.default, {
                    name: "emojiGrid"
                }, i.default.createElement(s.default, {
                    css: {
                        flex: 1
                    }
                }, i.default.createElement(o.default, null, ({
                    width: e,
                    height: t
                }) => i.default.createElement(f, {
                    style: {
                        outline: "none"
                    },
                    width: e,
                    height: t,
                    itemData: _,
                    itemCount: h.length,
                    itemSize: b,
                    overscanCount: 10,
                    ref: d,
                    onItemsRendered: v
                }, n.default)))))
            })));
            t.default = h
        },
        1750: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = u(r(1751)),
                a = r(142),
                o = u(r(1)),
                l = u(r(0)),
                i = u(r(2)),
                s = u(r(186));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, o.default)(i.default)({
                flexDirection: "row",
                padding: "0 12px"
            });
            var d = l.default.memo((function(e) {
                const {
                    data: t,
                    index: r,
                    style: o
                } = e, {
                    rows: i,
                    currentEmoji: u,
                    defaultSkintone: d,
                    hotlikeColor: f,
                    pickerType: h,
                    onEmojiClick: p,
                    accessibilityRole: m
                } = t, {
                    type: g,
                    emojis: y,
                    header: v,
                    modifySkintones: b
                } = i[r];
                let _;
                return "header" === g && v ? _ = l.default.createElement(c, null, l.default.createElement(s.default, {
                    title: v.toString()
                })) : "emoji" === g && y && (_ = l.default.createElement(c, null, y.map(e => {
                    const t = Boolean(u === e || (null == u || "" == u) && e === a.HOTLIKE);
                    return (l.default.createElement(n.default, {
                        key: e,
                        defaultSkintone: b ? d : null,
                        selected: t,
                        emoji: e,
                        hotlikeColor: f,
                        pickerType: h,
                        onEmojiClick: p,
                        accessibilityRole: m
                    }))
                }))), l.default.createElement("div", {
                    style: o
                }, l.default.createElement("div", null, _))
            }));
            t.default = d
        },
        1751: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = p(r(188)),
                a = p(r(33)),
                o = p(r(91)),
                l = r(6),
                i = p(r(371)),
                s = r(330),
                u = p(r(1752)),
                c = p(r(354)),
                d = p(r(1)),
                f = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = h();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m() {
                return (m = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var g = f.default.memo((function(e) {
                const {
                    emoji: t,
                    defaultSkintone: r,
                    hotlikeColor: n,
                    selected: a,
                    onEmojiClick: o,
                    pickerType: l,
                    accessibilityRole: c
                } = e, [d, h] = (0, f.useState)(!1), p = (0, f.useRef)(null), g = (0, f.useCallback)(e => {
                    o(e), h(!1)
                }, [o]), y = (0, s.isSkintoneModifiable)(t);
                let b = t;
                y && null != r && (b = (0, s.applyToneModifier)(b, r));
                const _ = (0, f.useCallback)(() => {
                        d || o(b)
                    }, [b, o, d]),
                    w = (0, f.useCallback)(() => {
                        (0, s.isSkintoneModifiable)(t) && h(!0)
                    }, [t]),
                    C = (0, u.default)(w);
                return f.default.createElement(f.default.Fragment, null, f.default.createElement(i.default, m({
                    ref: p,
                    emoji: b,
                    onClick: _
                }, C, {
                    size: l,
                    pressed: a || d,
                    hotlikeColor: n,
                    accessibilityRole: c
                })), d && f.default.createElement(v, {
                    emojiTones: (0, s.getAllTonesForEmoji)(b),
                    onClick: g,
                    onDismiss: () => h(!1),
                    target: p.current
                }))
            }));
            t.default = g;
            const y = (0, d.default)(a.default)(e => ({
                backgroundColor: e.theme.semanticColors.bgElevatedSurface,
                borderRadius: 3,
                pointerEvents: "auto",
                flexDirection: "row"
            }));

            function v(e) {
                const t = (0, l.useTheme)(),
                    r = (0, f.useRef)(!1),
                    {
                        emojiTones: a,
                        onClick: s,
                        target: u,
                        onDismiss: d
                    } = e,
                    h = (0, f.useRef)(null);
                (0, c.default)(d, h);
                const p = (0, f.useCallback)(() => {
                        r.current = !0
                    }, []),
                    m = (0, f.useCallback)(e => {
                        r.current || s(e)
                    }, [s]);
                return f.default.createElement(o.default, {
                    target: u,
                    placement: "top",
                    showArrow: !0,
                    arrowSize: 7,
                    arrowStyle: {
                        backgroundColor: t.semanticColors.bgElevatedSurface
                    }
                }, f.default.createElement(n.default, {
                    ref: h
                }, f.default.createElement(y, {
                    direction: "horizontal"
                }, a.map(e => f.default.createElement(i.default, {
                    key: e,
                    emoji: e,
                    onMouseDown: p,
                    onMouseUp: () => m(e),
                    onClick: () => s(e),
                    size: "compact"
                })))))
            }
        },
        1752: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e = (() => {}), t = 300) {
                const [r, a] = (0, n.useState)(!1);
                return (0, n.useEffect)(() => {
                    let n = null;
                    return r ? n = setTimeout(e, t) : null != n && (clearTimeout(n), n = null), () => {
                        null != n && clearTimeout(n)
                    }
                }, [r, e, t]), {
                    onMouseDown: () => a(!0),
                    onMouseUp: () => a(!1),
                    onMouseLeave: () => a(!1),
                    onTouchStart: () => a(!0),
                    onTouchEnd: () => a(!1)
                }
            };
            var n = r(0)
        },
        1753: function(e, t, r) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = t.EmojiCategory = void 0, t.EmojiCategory = n,
                function(e) {
                    e.FrequentlyUsed = "frequently_used", e.SmileysAndPeople = "smileys_and_people", e.AnimalsAndNature = "animals_and_people", e.FoodAndDrink = "food_and_drink", e.Activity = "activity", e.TravelAndPlaces = "travel_and_places", e.Objects = "objects", e.Symbols = "symbols", e.Flags = "flags"
                }(n || (t.EmojiCategory = n = {}));
            var a = JSON.parse('{\n  "smileys_and_people":["😀","😃","😄","😁","😆","😅","😂","☺","😊","😇","🙂","😉","😌","😍","😘","😗","😙","😚","😋","😛","😝","😜","😎","😏","😒","😞","😔","😟","😕","🤔","😣","😖","😫","😩","😢","😭","😤","😠","😡","😳","😱","😨","😰","😥","😓","😶","😐","😑","😬","😯","😦","😧","😮","😲","😴","😪","😵","😷","😈","👿","👹","👺","💩","👻","💀","👽","👾","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","👐","🙌","👏","👍","👎","👊","✊","✌","👌","👈","👉","👆","👇","☝","✋","👋","💪","🙏","💄","💋","👄","👅","👂","👃","👣","👀","👤","👥","👶","👧","👦","👩","👨","👱","👵","👴","👲","👳","👮","👷","💂","👰","👸","🎅","👼","🙇","💁","🙅","🙆","🙋","🙎","🙍","💇","💆","💅","💃","👯","🚶","🏃","👫","👭","👬","💑","💏","👨‍❤️‍👨","👨‍❤️‍💋‍👨","👩‍❤️‍👩","👩‍❤️‍💋‍👩","👪","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👚","👕","👖","👔","👗","👙","👘","👠","👡","👢","👞","👟","🎩","👒","🎓","👑","💍","👝","👛","👜","💼","🎒","👓","🌂"],\n  "animals_and_people": ["🐶","🐱","🐭","🐹","🐰","🐻","🐼","🐨","🐯","🐮","🐷","🐽","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🐺","🐗","🐴","🐝","🐛","🐌","🐞","🐜","🐢","🐍","🐙","🐡","🐠","🐟","🐬","🐳","🐋","🐊","🐅","🐆","🐘","🐪","🐫","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🐐","🐕","🐩","🐈","🐓","🐇","🐁","🐀","🐾","🐉","🐲","🌵","🎄","🌲","🌳","🌴","🌱","🌿","🍀","🎍","🎋","🍃","🍂","🍁","🍄","🐚","🌾","💐","🌷","🌹","🌺","🌸","🌼","🌻","🌞","🌝","🌛","🌜","🌚","🌕","🌖","🌗","🌘","🌑","🌒","🌓","🌔","🌙","🌎","🌍","🌏","💫","⭐","🌟","✨","⚡","💥","🔥","🌈","☀","⛅","☁","❄","⛄","💨","💧","💦","☔","🌊"],\n  "food_and_drink": ["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🍍","🍅","🍆","🌽","🍠","🍞","🍳","🍗","🌭","🍖","🍔","🍟","🍕","🍝","🍜","🍲","🍛","🍣","🍱","🍤","🍙","🍚","🍘","🍥","🍢","🍡","🍧","🍨","🍦","🍰","🎂","🍮","🍭","🍬","🍫","🍩","🍪","🌰","🍯","🍼","☕","🍵","🍶","🍺","🍻","🍷","🍸","🍹","🍴"],\n  "activity": ["⚽","🏀","🏈","⚾","🎾","🏉","🎱","⛳","🎣","🎽","🎿","🏂","🏇","🏄","🏊","🚣","🚵","🚴","🏆","🎫","🎪","🎭","🎨","🎬","🎤","🎧","🎼","🎹","🎷","🎺","🎸","🎻","🎲","🎯","🎳","🎮","🎰"],\n  "travel_and_places": ["🚗","🚕","🚙","🚌","🚎","🚓","🚑","🚒","🚐","🚚","🚛","🚜","🚲","🚨","🚔","🚍","🚘","🚖","🚡","🚠","🚟","🚃","🚋","🚞","🚝","🚄","🚅","🚈","🚂","🚆","🚇","🚊","🚉","✈","💺","🚀","🚁","⛵","🚤","🚢","⚓","⛽","🚧","🚦","🚥","🚏","🗿","🗽","🗼","🏰","🏯","🎡","🎢","🎠","⛲","🌋","🗻","⛺","🏠","🏡","🏭","🏢","🏬","🏣","🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","⛪","🗾","🎑","🌅","🌄","🌠","🎇","🎆","🌇","🌆","🌃","🌌","🌉","🌁"],\n  "objects": ["⌚","📱","📲","💻","💽","💾","💿","📀","📼","📷","📹","🎥","📞","☎","📟","📠","📺","📻","⏰","⌛","⏳","📡","🔋","🔌","💡","🔦","💸","💵","💴","💶","💷","💰","💳","💎","🔧","🔨","🔩","🔫","💣","🔪","🚬","🔮","💈","🔭","🔬","💊","💉","🚽","🚰","🚿","🛁","🛀","🔑","🚪","🎁","🎈","🎏","🎀","🎊","🎉","🎎","🏮","🎐","✉","📩","📨","📧","💌","📥","📤","📦","📪","📫","📬","📭","📮","📯","📜","📃","📄","📑","📊","📈","📉","📆","📅","📇","📋","📁","📂","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🔖","🔗","📎","📐","📏","📌","📍","✂","✒","📝","✏","🔍","🔎","🔏","🔐","🔒","🔓"],\n  "symbols": ["❤","💛","💚","💙","💜","💔","💕","💞","💓","💗","💖","💘","💝","💟","🔯","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","🆔","🉑","📴","📳","🈶","🈚","🈸","🈺","🈷","✴","🆚","💮","🉐","㊙","㊗","🈴","🈵","🈹","🈲","🅰","🅱","🆎","🆑","🅾","🆘","❌","⭕","⛔","📛","🚫","💯","💢","♨","🚷","🚯","🚳","🚱","🔞","📵","🚭","❗","❕","❓","❔","‼","⁉","🔅","🔆","〽","⚠","🚸","🔱","🔰","♻","✅","🈯","💹","❇","✳","❎","🌐","💠","Ⓜ","🌀","💤","🏧","🚾","♿","🅿","🈳","🈂","🛂","🛃","🛄","🛅","🚹","🚺","🚼","🚻","🚮","🎦","📶","🈁","🔣","🔤","🔡","🔠","🆖","🆗","🆙","🆒","🆕","🆓","🔟","🔢","▶","⏩","⏪","⏫","⏬","◀","🔼","🔽","➡","⬅","⬆","⬇","↗","↘","↙","↖","↕","↔","↪","↩","⤴","⤵","🔀","🔁","🔂","🔄","🔃","🎵","🎶","➕","➖","➗","✖","💲","💱","™️","©️","®️","🔚","🔙","🔛","🔝","🔜","〰","➰","➿","✔","☑","🔘","⚪","⚫","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","🔳","🔲","▪","▫","◾","◽","◼","◻","⬛","⬜","🔈","🔇","🔉","🔊","🔔","🔕","📣","📢","💬","💭","♠","♣","♥","♦","🃏","🎴","🀄","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"],\n  "flags": ["🏁","🚩","🇦🇫","🇦🇽","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇶","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹","🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇦","🇧🇼","🇧🇷","🇮🇴","🇻🇬","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇮🇨","🇨🇻","🇧🇶","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳","🇨🇽","🇨🇨","🇨🇴","🇰🇲","🇨🇬","🇨🇩","🇨🇰","🇨🇷","🇨🇮","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇩🇰","🇩🇯","🇩🇲","🇩🇴","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇪🇹","🇪🇺","🇫🇰","🇫🇴","🇫🇯","🇫🇮","🇫🇷","🇬🇫","🇵🇫","🇹🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳","🇬🇼","🇬🇾","🇭🇹","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇱","🇮🇹","🇯🇲","🇯🇵","🎌","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇽🇰","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮","🇱🇹","🇱🇺","🇲🇴","🇲🇰","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽","🇫🇲","🇲🇩","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮","🇳🇪","🇳🇬","🇳🇺","🇳🇫","🇰🇵","🇲🇵","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇬","🇵🇾","🇵🇪","🇵🇭","🇵🇳","🇵🇱","🇵🇹","🇵🇷","🇶🇦","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🇼🇸","🇸🇲","🇸🇹","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱","🇸🇬","🇸🇽","🇸🇰","🇸🇮","🇬🇸","🇸🇧","🇸🇴","🇿🇦","🇰🇷","🇸🇸","🇪🇸","🇱🇰","🇧🇱","🇸🇭","🇰🇳","🇱🇨","🇵🇲","🇻🇨","🇸🇩","🇸🇷","🇸🇿","🇸🇪","🇨🇭","🇸🇾","🇹🇼","🇹🇯","🇹🇿","🇹🇭","🇹🇱","🇹🇬","🇹🇰","🇹🇴","🇹🇹","🇹🇳","🇹🇷","🇹🇲","🇹🇨","🇹🇻","🇻🇮","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🇺🇸","🇺🇾","🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇿🇲","🇿🇼"]\n}');
            t.default = a
        },
        1754: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M15.75 21.175c0 1.108 1.147 2.075 2.25 2.075 1 0 2.25-.966 2.25-2.075 0-.877-1.121-1.425-2.25-1.425-1.13 0-2.25.548-2.25 1.425z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M6.15 12.522c-.282-1.043-.15-2.165.253-3.17C6.745 8.5 7.787 7 9.489 7c1.663 0 3.126 1.353 3.908 2.815.146.272.49.382.76.235C15.393 9.38 16.71 9 18 9s2.606.379 3.842 1.05c.27.147.615.037.76-.235C23.384 8.353 24.847 7 26.51 7c1.702 0 2.744 1.5 3.086 2.353.403 1.004.535 2.126.253 3.169C29.54 13.66 28.5 15 26.998 15a.228.228 0 00-.202.328c.558 1.14.946 2.38 1.107 3.672.99 8-5.942 10-9.904 10-3.962 0-10.895-2-9.904-10 .158-1.279.54-2.506 1.087-3.635A.259.259 0 009 15c-1.756-.344-2.541-1.34-2.85-2.478zm6.6 5.978c1 0 1.25-1.004 1.25-1.75S13.75 15 12.75 15s-1.25.997-1.25 1.75.25 1.75 1.25 1.75zm10.5 0c1 0 1.25-1.004 1.25-1.75S24.25 15 23.25 15 22 15.997 22 16.75s.25 1.75 1.25 1.75zM18 27c1.968 0 4.428-1 3.936-4.5C21.658 20.52 20.46 18 18 18s-3.658 2.52-3.936 4.5C13.572 26 16.032 27 18 27z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1755: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M23.281 18.825c-.723.718-1.373 1.542-1.62 2.53l-.472 1.887a1 1 0 01-.97.758h-4.438a1 1 0 01-.97-.758l-.472-1.887c-.247-.988-.897-1.812-1.62-2.53A7.477 7.477 0 0110.5 13.5c0-4.142 3-7.5 7.5-7.5s7.5 3.358 7.5 7.5a7.477 7.477 0 01-2.219 5.325zM16 26a1 1 0 00-1 1v.586a1 1 0 00.293.707l1.414 1.414a1 1 0 00.707.293h1.172a1 1 0 00.707-.293l1.414-1.414a1 1 0 00.293-.707V27a1 1 0 00-1-1h-4z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1756: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M9.196 11.057C9.669 9.2 11.355 8 13.199 8H22.8c1.844 0 3.53 1.2 4.003 3.057.318 1.245.696 2.928.861 4.488.012.111.06.216.137.297l1.37 1.439A3 3 0 0130 19.35V27a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1.31a.503.503 0 00-.546-.499c-2.328.2-4.838.309-7.454.309-2.616 0-5.126-.109-7.454-.309a.503.503 0 00-.546.5V27a1 1 0 01-1 1H7a1 1 0 01-1-1v-7.65a3 3 0 01.828-2.069l1.37-1.44a.507.507 0 00.137-.296c.165-1.56.543-3.243.86-4.488zm15.826 3.608a.492.492 0 01-.527.568A88.843 88.843 0 0018 15c-2.26 0-4.442.081-6.495.232a.492.492 0 01-.527-.566c.169-1.027.41-2.086.64-2.991.174-.68.807-1.175 1.58-1.175h9.603c.774 0 1.407.495 1.58 1.175.232.905.472 1.964.641 2.99zm-1.983 5.566l.17.284a1 1 0 00.857.485H26c.828 0 1.5-.895 1.5-2v-.5a.5.5 0 00-.724-.446l-3.635 1.825a.25.25 0 00-.102.352zm-10.078 0l-.17.284a1 1 0 01-.857.485H10c-.828 0-1.5-.895-1.5-2v-.5a.5.5 0 01.724-.446l3.635 1.825a.25.25 0 01.102.352z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1757: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M11 6a1 1 0 00-1 1v22a1 1 0 001 1h.5a1 1 0 001-1V7a1 1 0 00-1-1H11zM14.5 9.502v12.496a1.5 1.5 0 002.17 1.342l12.497-6.248c1.105-.553 1.105-2.13 0-2.684L16.67 8.16A1.5 1.5 0 0014.5 9.502z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1758: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M9 7a1 1 0 011 1v7a1 1 0 102 0V8a1 1 0 011-1h.5a1 1 0 011 1v7a1 1 0 102 0V8a1 1 0 011-1h.5a1 1 0 011 1v8.91a4 4 0 01-1.716 3.284l-1.926 1.34a2 2 0 00-.858 1.642V28a1 1 0 01-1 1H13a1 1 0 01-1-1v-4.825a2 2 0 00-.858-1.641l-1.926-1.34A4 4 0 017.5 16.91V8a1 1 0 011-1H9zM21.5 12.053A5.053 5.053 0 0126.553 7c.523 0 .947.424.947.947V28a1 1 0 01-1 1H26a1 1 0 01-1-1v-6a1 1 0 00-1-1h-1.5a1 1 0 01-1-1v-7.947z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1759: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M22.75 8.25a1.25 1.25 0 112.5 0v2.25c0 .138.112.25.25.25h2.25a1.25 1.25 0 110 2.5H25.5a.25.25 0 00-.25.25v2.25a1.25 1.25 0 11-2.5 0V13.5a.25.25 0 00-.25-.25h-2.25a1.25 1.25 0 110-2.5h2.25a.25.25 0 00.25-.25V8.25zM16.997 10.354c.002-.042.003-.084.003-.127C17 8.721 15.83 7.5 14.386 7.5c-1.045 0-1.946.64-2.365 1.565a.024.024 0 01-.042 0C11.56 8.14 10.659 7.5 9.614 7.5 8.17 7.5 7 8.721 7 10.227c0 .043 0 .085.003.127.116 3.525 3.878 6.149 4.997 6.149 1.119 0 4.88-2.624 4.997-6.15zM16.831 20.878a1.25 1.25 0 00-2.162-1.256l-3.441 5.927a.15.15 0 01-.236.03l-1.858-1.858a1.25 1.25 0 00-1.768 1.768l3.145 3.145a1.25 1.25 0 001.965-.256l4.355-7.5zM21.25 19.25a2 2 0 00-2 2v5.5a2 2 0 002 2h5.5a2 2 0 002-2v-5.5a2 2 0 00-2-2h-5.5z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1760: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M10.127 11.532a.668.668 0 00-1.057.044A10.95 10.95 0 007 18c0 2.398.767 4.617 2.07 6.424a.668.668 0 001.057.044A9.96 9.96 0 0012.5 18a9.96 9.96 0 00-2.373-6.468z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M11.645 9.02c-.36.256-.382.77-.092 1.103A11.954 11.954 0 0114.5 18c0 3.014-1.111 5.769-2.947 7.877-.29.333-.268.847.092 1.103A10.95 10.95 0 0018 29c2.367 0 4.56-.748 6.355-2.02.36-.256.382-.77.092-1.103A11.954 11.954 0 0121.5 18c0-3.014 1.111-5.769 2.947-7.877.29-.333.268-.847-.092-1.103A10.95 10.95 0 0018 7c-2.367 0-4.56.748-6.355 2.02z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M23.5 18a9.96 9.96 0 012.373-6.468.668.668 0 011.057.044A10.95 10.95 0 0129 18a10.95 10.95 0 01-2.07 6.424.668.668 0 01-1.057.044A9.96 9.96 0 0123.5 18z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1786: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = d(r(1)),
                a = d(r(1787)),
                o = d(r(193)),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                i = d(r(75)),
                s = r(6),
                u = d(r(4));

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f() {
                return (f = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const h = n.default.div(e => ({
                height: 16,
                minWidth: 16,
                backgroundColor: e.theme.semanticColors.textPrimary,
                borderRadius: 8,
                padding: "1px 2px",
                textAlign: "center"
            }));
            var p = (0, l.memo)(l.default.forwardRef((function({
                className: e,
                buttonColor: t,
                textColor: r,
                unreadCount: n,
                ...c
            }, d) {
                const p = (0, s.useTheme)(),
                    m = null !== n && n > 0;
                return l.default.createElement(i.default, f({
                    className: e,
                    elementRef: d
                }, c, {
                    css: {
                        ...c.css || {},
                        borderRadius: "50%",
                        backgroundColor: "transparent",
                        alignItems: "center",
                        flexDirection: "row",
                        justifyContent: "center",
                        height: 32,
                        width: 32,
                        minHeight: 32,
                        minWidth: 32,
                        padding: 0
                    }
                }), m ? l.default.createElement(l.default.Fragment, null, l.default.createElement(a.default, {
                    width: 10,
                    height: 18,
                    color: p.semanticColors.textPrimary
                }), l.default.createElement(h, null, l.default.createElement(u.default, {
                    use: "caption",
                    color: p.semanticColors.bgSurface
                }, n <= 99 ? n : "99"))) : l.default.createElement(o.default, {
                    size: 30,
                    color: p.semanticColors.textPrimary
                }))
            })));
            t.default = p
        },
        1787: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 12 20",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M8.94 19.569l-8.5-8.504a1.5 1.5 0 010-2.122L8.94.44a1.499 1.499 0 112.122 2.121l-7.44 7.443 7.44 7.443a1.5 1.5 0 01-2.122 2.122z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1789: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ConnectedMessageBubble = z, t.default = void 0;
            var n = r(66),
                a = P(r(250)),
                o = P(r(172)),
                l = r(599),
                i = r(225),
                s = P(r(1792)),
                u = P(r(1793)),
                c = P(r(1794)),
                d = P(r(202)),
                f = P(r(195)),
                h = P(r(59)),
                p = r(8),
                m = P(r(5)),
                g = P(r(9)),
                y = r(84),
                v = r(21),
                b = r(41),
                _ = P(r(366)),
                w = P(r(1)),
                C = P(r(141)),
                E = P(r(153)),
                k = r(28),
                x = r(32),
                M = r(23),
                S = r(49),
                O = r(11),
                T = r(583),
                I = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = A();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                R = r(35);

            function A() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return A = function() {
                    return e
                }, e
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const j = w.default.div({
                    ".reaction-picker-scrim-enter": {
                        opacity: 0
                    },
                    ".reaction-picker-scrim-enter-active, .reaction-picker-scrim-enter-done": {
                        opacity: 1,
                        transition: "opacity 200ms ease-in-out"
                    },
                    ".reaction-picker-scrim-exit ": {
                        opacity: 1
                    },
                    ".reaction-picker-scrim-exit-active, .reaction-picker-scrim-exit-done": {
                        opacity: 0,
                        transition: "opacity 200ms ease-in-out"
                    }
                }),
                D = w.default.div({
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgb(0,0,0,0.3)",
                    zIndex: C.default.ReactionPickerScrimAndSelectedMessage
                });

            function z(e) {
                var t;
                const {
                    isWindowFocused: r,
                    message: p,
                    thread: v,
                    messageReactions: w,
                    canReact: C,
                    canSeeDelivery: E,
                    isPinnedMessage: k,
                    threadHasPinnedMessage: x,
                    isRtcEnabled: M,
                    isRtcReady: S,
                    isFirst: O,
                    lastReadBy: A,
                    messageOTID: P,
                    isLast: z,
                    isSenderViewer: F,
                    deliveryStatus: B,
                    threadType: L,
                    isWorkplace: N,
                    userID: U,
                    isEmployee: W,
                    threadCannotUnsendReason: H,
                    threadKey: V,
                    suppressXMA: K,
                    removeMessage: q,
                    globalRemoveMessage: G,
                    pinMessage: $,
                    unpinMessage: X,
                    reactToMessage: J,
                    downloadContent: Q,
                    startCall: Z,
                    openMediaViewer: Y,
                    enableReplies: ee,
                    startReplyForThread: te,
                    opposingParticipantName: re,
                    duplicates: ne,
                    isForwardedMessage: ae = !1,
                    pollDetails: oe,
                    showModal: le,
                    resumeSendingMessage: ie,
                    sendPostback: se,
                    handleReplyClick: ue,
                    enableVideoChatLinks: ce,
                    beginJoinMeetup: de,
                    joinMeetupWithCallback: fe,
                    showDownloadDialog: he,
                    isSaved: pe,
                    canSaveMessage: me,
                    saveOrUnsaveMessage: ge
                } = e, {
                    windowKey: ye
                } = (0, R.useWindowContext)(), {
                    showContextMenu: ve
                } = (0, n.useContextMenu)(), [be, _e] = (0, I.useState)(!1), we = (0, I.useContext)(_.default), {
                    threadTheme: Ce
                } = (0, b.useThreadTheme)(), Ee = (0, I.useCallback)(e => {
                    Y(V, e)
                }, [Y, V]), ke = (0, I.useCallback)(async (e, t) => {
                    await ve({
                        items: e,
                        target: t,
                        contextMenuStyles: {
                            accentColor: Ce.gradientColors || Ce.color
                        }
                    })
                }, [ve, Ce.color, Ce.gradientColors]), xe = (0, I.useCallback)((e, t, r, n, a, o) => {
                    const i = (0, l.getMediaMessageContextMenu)({
                        message: p,
                        thread: v,
                        details: n,
                        replyToMessage: te,
                        removeMessage: q,
                        globalRemoveMessage: G,
                        threadHasPinnedMessage: x,
                        isPinnedMessage: k,
                        pinMessage: $,
                        unpinMessage: X,
                        setShowReactionPicker: _e,
                        setSelectedMessageOTID: we.setSelectedMessageOTID,
                        canGlobalRemove: r,
                        canReact: C,
                        showModal: le,
                        isMessageSending: o,
                        canSave: me,
                        saveOrUnsaveMessage: ge
                    }, t, Q, Ee, he, a);
                    ke(i, e)
                }, [p, v, te, q, G, x, k, $, X, we.setSelectedMessageOTID, C, le, Q, Ee, ke, he, me, ge]), Me = (0, I.useCallback)((e, t) => {
                    const r = [(0, l.getRemoveMessageContextItem)(t, q)];
                    ke(r, e)
                }, [q, ke]), Se = (0, I.useCallback)((e, t, r, n, a) => {
                    const o = (0, l.getTextMessageContextMenu)({
                        message: p,
                        thread: v,
                        details: t,
                        replyToMessage: te,
                        removeMessage: q,
                        globalRemoveMessage: G,
                        threadHasPinnedMessage: x,
                        isPinnedMessage: k,
                        pinMessage: $,
                        unpinMessage: X,
                        setShowReactionPicker: _e,
                        setSelectedMessageOTID: we.setSelectedMessageOTID,
                        canGlobalRemove: r,
                        canReact: C,
                        showModal: le,
                        canSave: me,
                        saveOrUnsaveMessage: ge
                    }, e, n, a);
                    ke(o, e)
                }, [p, v, te, q, G, x, k, $, X, we.setSelectedMessageOTID, C, le, ke, me, ge]), Oe = (0, u.default)({
                    threadKey: V,
                    messageId: null == p ? void 0 : null === (t = p.message) || void 0 === t ? void 0 : t.messageId,
                    isWorkplace: N,
                    enableVideoChatLinks: ce,
                    isRtcReady: S,
                    beginJoinMeetup: de
                }), Te = (0, I.useCallback)(e => {
                    if (!e) return;
                    if ((0, f.default)(e)) ce && S ? de(e) : Oe(e);
                    else {
                        function t() {
                            g.default.platform.showErrorBox(m.default._("Not Supported", null, {
                                hk: "3vuJQH"
                            }).toString(), (0, h.default)({
                                messenger: m.default._("Sorry! Messenger Desktop does not support this feature yet!", null, {
                                    hk: "2Tl5wM"
                                }).toString(),
                                workchat: m.default._("Sorry! Workplace Chat does not support this feature yet!", null, {
                                    hk: "2ce5Qq"
                                }).toString()
                            }))
                        }
                        try {
                            const r = new URL(e);
                            "http:" === r.protocol || "https:" === r.protocol ? Oe(e) : t()
                        } catch (e) {
                            t()
                        }
                    }
                }, [de, S, ce, Oe]), Ie = (0, s.default)({
                    isRtcEnabled: M,
                    joinMeetupWithCallback: fe,
                    openUrl: Oe,
                    openNativeUrl: Te,
                    opposingParticipantName: re,
                    sendPostback: se,
                    showModal: le,
                    startCall: Z,
                    windowKey: ye,
                    threadKey: V,
                    threadType: L
                }), Re = (0, I.useCallback)((e, t) => J(e, t, w), [w, J]), Ae = (0, I.useCallback)(() => {
                    be && (we.clearSelectedMessageOTID(), _e(!1))
                }, [be, we]);
                return (0, y.useShortcut)("esc", Ae, !be), (0, i.isTypingIndicator)(P) ? I.default.createElement(d.default, null) : p ? I.default.createElement(I.default.Fragment, null, I.default.createElement(a.default, {
                    fallback: (e, t) => I.default.createElement(c.default, {
                        isFirst: O,
                        isLast: z,
                        isSenderViewer: F,
                        onUrlClick: Oe
                    }),
                    listenToGlobalErrors: !1,
                    component: "message-bubble"
                }, I.default.createElement(j, null, I.default.createElement(T.CSSTransition, {
                    in: be,
                    timeout: 200,
                    classNames: "reaction-picker-scrim",
                    unmountOnExit: !0
                }, I.default.createElement(D, null))), I.default.createElement(o.default, {
                    isWindowFocused: r,
                    message: p,
                    messageReactions: w,
                    isFirst: O,
                    isLast: z,
                    isSenderViewer: F,
                    isRtcReady: S,
                    lastReadBy: A,
                    deliveryStatus: B,
                    threadType: L,
                    canSeeDelivery: E,
                    isWorkplace: N,
                    userID: U,
                    isEmployee: W,
                    suppressXMA: K,
                    isForwardedMessage: ae,
                    showReactionPicker: be,
                    enableReplies: ee,
                    startReply: () => {
                        ee && te(p.message.offlineThreadingId)
                    },
                    threadCannotUnsendReason: H,
                    onRetrySend: () => {
                        ie(V, p.message.offlineThreadingId, Boolean(p.message.hasAttachment))
                    },
                    onMessageBubbleClick: () => {
                        p.message.isAdminMessage || p.message.isUnsent || (_e(!be), be ? we.clearSelectedMessageOTID() : we.setSelectedMessageOTID(p.message.offlineThreadingId))
                    },
                    onReactionPickerHide: () => {
                        _e(!1), we.clearSelectedMessageOTID()
                    },
                    attachmentBubbleContextMenuHandler: xe,
                    removedBubbleContextMenuHandler: Me,
                    textBubbleContextMenuHandler: Se,
                    onUrlClick: Oe,
                    openMediaViewer: Ee,
                    enableReplyButton: ee,
                    pollDetails: oe,
                    onReaction: C ? Re : null,
                    ctaHandlers: Ie,
                    onReplyClick: e => {
                        e && ue(e, V)
                    },
                    duplicates: ne,
                    isSaved: pe,
                    isPinned: k
                }))) : null
            }

            function F(e) {
                return Boolean(e && (0, E.default)(p.ThreadCapabilities.MESSAGE_REPLY, e.capabilities))
            }
            const B = {
                removeMessage: M.InboxActions.messages.removeMessage,
                globalRemoveMessage: M.InboxActions.messages.globalRemoveMessage,
                pinMessage: M.InboxActions.messages.pinMessage,
                unpinMessage: M.InboxActions.messages.unpinMessage,
                startReplyForThread: M.InboxActions.threads.startReplyForThread,
                reactToMessage: M.InboxActions.messages.reactToMessage,
                downloadContent: M.InboxActions.messages.downloadContent,
                sendPostback: M.InboxActions.messages.sendPostback,
                startCall: S.RtcActions.startCall,
                openMediaViewer: M.InboxActions.mediaViewer.openMediaViewer,
                showModal: k.AppContextActions.showModal,
                resumeSendingMessage: M.InboxActions.messages.resumeSendingMessage,
                handleReplyClick: M.InboxActions.messageIsland.handleReplyClick,
                beginJoinMeetup: S.RtcActions.beginJoinMeetup,
                joinMeetupWithCallback: S.RtcActions.joinMeetupWithCallback,
                saveOrUnsaveMessage: M.InboxActions.messages.saveOrUnsaveMessage
            };
            var L = (0, O.connect)((function() {
                const e = (0, M.getCommonInstanceSelectors)(),
                    t = [];
                return (r, n) => {
                    var a;
                    const o = (0, v.requireAuthenticationData)(r),
                        l = (0, M.getThreadModel)(r, n.threadKey),
                        i = (0, M.getThread)(r, n.threadKey),
                        s = null != i && (0, E.default)(p.ThreadCapabilities.SEEN_HEADS, i.capabilities) && !n.isBlockedP2PThread,
                        u = null != i && (0, E.default)(p.ThreadCapabilities.REACTIONS, i.capabilities) && !n.isBlockedP2PThread && (null == i ? void 0 : i.parentThreadKey) !== p.ThreadFolderParentKey.MessageRequests,
                        c = (0, M.getMessage)(r, n.threadKey, n.messageOTID),
                        d = null === (a = (0, M.getPinnedMessageForThread)(r, n.threadKey)) || void 0 === a ? void 0 : a.messageId,
                        f = (0, x.isGatekeeperEnabled)(r, "archon_hide_xma_previews_in_requests"),
                        m = (0, x.isGatekeeperEnabled)(r, "is_employee");
                    return {
                        isWindowFocused: (0, k.isWindowFocused)(r),
                        message: c,
                        thread: i,
                        messageReactions: (null == c ? void 0 : c.reactions) || t,
                        canReact: u,
                        canSeeDelivery: s,
                        threadHasPinnedMessage: null != d,
                        isPinnedMessage: d === (null == c ? void 0 : c.message.messageId),
                        isRtcEnabled: (0, S.isRtcEnabled)(r),
                        isRtcReady: (0, S.isRtcReady)(r),
                        isNetworkConnected: (0, k.isAppNetworkConnected)(r),
                        lastReadBy: e.selectLastReadInfoForMessage(r, n),
                        deliveryStatus: e.selectDeliveryStatusForMessage(r, n),
                        threadType: (0, M.getThreadType)(r, n.threadKey),
                        isWorkplace: o.isWorkplaceAccount || !1,
                        userID: o.userID,
                        isEmployee: m,
                        threadCannotUnsendReason: l ? l.cannotUnsendReason : -1,
                        enableReplies: F(i),
                        pollDetails: e.selectPollDetailsForMessage(r, n),
                        opposingParticipantName: (0, M.getOpposingParticipant)(r, n.threadKey, o.userID),
                        enableVideoChatLinks: (0, x.isGatekeeperEnabled)(r, "archon_enable_join_video_chat_links"),
                        showDownloadDialog: (0, x.isGatekeeperEnabled)(r, "worchon_show_download_dialog"),
                        suppressXMA: f && (null == i ? void 0 : i.parentThreadKey) === p.ThreadFolderParentKey.MessageRequests,
                        isSaved: (0, h.default)({
                            workchat: Boolean(null == c ? void 0 : c.isSaved),
                            messenger: !1
                        }),
                        canSaveMessage: (0, h.default)({
                            workchat: (0, x.isGatekeeperEnabled)(r, "worchon_saved_messages"),
                            messenger: !1
                        })
                    }
                }
            }), B)(z);
            t.default = L
        },
        1790: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getRemindMeContextItem = function(e, t) {
                return {
                    id: "remind_me",
                    label: a.default._("Remind me...", null, {
                        hk: "2NhYm2"
                    }).toString(),
                    onClick: () => {
                        t({
                            type: "RemindMe",
                            threadKey: e.threadKey,
                            messageId: e.messageId
                        })
                    }
                }
            };
            var n, a = (n = r(5)) && n.__esModule ? n : {
                default: n
            }
        },
        1791: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getUnpinMessageContextItem = t.getPinMessageContextItem = void 0;
            var n, a = (n = r(5)) && n.__esModule ? n : {
                    default: n
                },
                o = r(644);
            t.getPinMessageContextItem = (e, t) => ({
                id: "pin_message",
                label: a.default._("Pin", null, {
                    hk: "T86vH"
                }).toString(),
                onClick: e ? (0, o.repinConfirm)(t) : t
            });
            t.getUnpinMessageContextItem = e => ({
                id: "unpin_message",
                label: a.default._("Unpin", null, {
                    hk: "2x6FAG"
                }).toString(),
                onClick: (0, o.unpinConfirm)(e)
            })
        },
        1792: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    isRtcEnabled: t,
                    joinMeetupWithCallback: r,
                    openUrl: i,
                    openNativeUrl: s,
                    opposingParticipantName: u,
                    sendPostback: c,
                    showModal: d,
                    startCall: f,
                    windowKey: h,
                    threadKey: p,
                    threadType: m
                } = e, g = (0, l.useCallback)((e, r) => {
                    t && ((0, o.isGroupThreadType)(m) ? f(p, m, n.OutgoingCallSource.XMA, r) : (0, a.showRtcStartCallDialog)(p, m, r, u))
                }, [t, u, f, p, m]), y = (0, l.useCallback)(e => {
                    g(e, !0)
                }, [g]), v = (0, l.useCallback)(e => {
                    g(e, !1)
                }, [g]), b = (0, l.useCallback)(e => {
                    i(e.actionUrl)
                }, [i]), _ = (0, l.useCallback)(e => {
                    s(e.actionUrl)
                }, [s]), w = (0, l.useCallback)(e => {
                    d({
                        type: "Payment",
                        threadKey: p,
                        transactionId: e.targetId
                    }, h)
                }, [d, p, h]), C = (0, l.useCallback)(e => {
                    c(p, e.title, e.platformToken)
                }, [c, p]), E = (0, l.useCallback)(e => {
                    d({
                        type: "Location",
                        url: e.actionUrl
                    }, h)
                }, [d, h]), k = (0, l.useCallback)(e => {
                    r(e.actionUrl, p)
                }, [r, p]);
                return (0, l.useMemo)(() => ({
                    [n.AttachmentCTAType.XMA_RTC_MISSED_AUDIO]: y,
                    [n.AttachmentCTAType.XMA_RTC_ENDED_AUDIO]: y,
                    [n.AttachmentCTAType.XMA_RTC_AUDIO]: y,
                    [n.AttachmentCTAType.XMA_RTC_MISSED_VIDEO]: v,
                    [n.AttachmentCTAType.XMA_RTC_ENDED_VIDEO]: v,
                    [n.AttachmentCTAType.XMA_RTC_VIDEO]: v,
                    [n.AttachmentCTAType.XMA_OPEN_JOINABLE_CALL_INVITE_URL]: _,
                    [n.AttachmentCTAType.XMA_WEB_URL]: b,
                    [n.AttachmentCTAType.XMA_OPEN_NATIVE]: _,
                    [n.AttachmentCTAType.XMA_P2P_PAYMENT_DETAILS]: w,
                    [n.AttachmentCTAType.XMA_P2P_REQUEST_PAY]: w,
                    [n.AttachmentCTAType.XMA_P2P_PAYMENT_DETAILS_RECEIVE_MONEY]: w,
                    [n.AttachmentCTAType.XMA_P2P_VERIFY_INFO]: w,
                    [n.AttachmentCTAType.XMA_POSTBACK]: C,
                    [n.AttachmentCTAType.XMA_LIVE_LOCATION_SHARING]: E,
                    [n.AttachmentCTAType.XMA_ROOMS_SPEAKEASY_CALLBACK]: k
                }), [y, v, b, _, w, C, E, k])
            };
            var n = r(8),
                a = r(101),
                o = r(52),
                l = r(0)
        },
        1793: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    threadKey: t,
                    messageId: r,
                    isWorkplace: i,
                    enableVideoChatLinks: s,
                    isRtcReady: u,
                    beginJoinMeetup: c
                } = e;
                return (0, l.useCallback)(e => {
                    if (!r) return;
                    let l = e;
                    if (l || (l = i ? (0, n.default)(o.default.platform.hostname, `/chat/t/${t}`, {
                            queryParams: {
                                mid: r
                            }
                        }) : (0, n.default)("messenger.com", `m/${r}`)), l) {
                        (0, a.default)(l) && s && u ? c(l) : o.default.platform.openExternalURL(l)
                    }
                }, [i, r, t, s, c, u])
            };
            var n = i(r(187)),
                a = i(r(195)),
                o = i(r(9)),
                l = r(0);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        1794: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                isFirst: e,
                isLast: t,
                isSenderViewer: r,
                onUrlClick: a
            }) {
                return l.default.createElement(s.RoundedCornerMediaContainer, {
                    isSenderViewer: r,
                    isFirst: e,
                    onActivate: () => a(null),
                    isLast: t
                }, l.default.createElement(u.default, {
                    icon: l.default.createElement(d, null),
                    title: n.default._("Failed to render this message", null, {
                        hk: "3PyITy"
                    }),
                    caption: n.default._("Click to open in browser", null, {
                        hk: "24qxx2"
                    }),
                    CTAs: [],
                    containerWidth: void 0
                }))
            };
            var n = c(r(5)),
                a = r(6),
                o = c(r(50)),
                l = c(r(0)),
                i = c(r(2)),
                s = r(40),
                u = c(r(203));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d() {
                const e = (0, a.useTheme)();
                return (l.default.createElement(i.default, {
                    css: {
                        borderRadius: "100%",
                        backgroundColor: e.colors.red,
                        marginRight: 8,
                        height: 36,
                        width: 36,
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }, l.default.createElement(o.default, {
                    size: 26,
                    color: e.semanticColors.textWhite
                })))
            }
        },
        1805: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M27.134 21.884a1.25 1.25 0 01-1.768 0l-7.19-7.19a.25.25 0 00-.353 0l-7.19 7.19a1.25 1.25 0 01-1.767-1.768l8.25-8.25a1.25 1.25 0 011.768 0l8.25 8.25a1.25 1.25 0 010 1.768z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1806: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DetailTransition = h, t.default = void 0;
            var n = d(r(1)),
                a = r(46),
                o = c(r(0)),
                l = d(r(2)),
                i = c(r(82)),
                s = r(6);

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = u();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, a.animated)((0, n.default)(l.default)({
                marginRight: 8
            }));

            function h({
                config: e,
                isLoading: t = !1,
                children: r
            }) {
                return (0, s.useTheme)().select({
                    mac: r,
                    windows: o.default.createElement(a.Transition, {
                        config: e,
                        items: t,
                        from: {
                            transform: "scale(0)"
                        },
                        enter: {
                            transform: "scale(1)"
                        },
                        leave: {
                            visibility: "hidden",
                            transform: "scale(0)"
                        }
                    }, e => e ? e => o.default.createElement(f, {
                        style: e
                    }, o.default.createElement(i.default, {
                        size: i.SpinnerSize.XXSmall
                    })) : e => o.default.createElement(f, {
                        style: e
                    }, r))
                })
            }
            var p = (0, o.memo)(h);
            t.default = p
        },
        1807: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = f(r(1)),
                a = f(r(574)),
                o = r(46),
                l = d(r(0)),
                i = f(r(2)),
                s = d(r(82)),
                u = r(6);

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const h = (0, n.default)(i.default)({
                    justifyContent: "center",
                    width: 16,
                    margin: "0px 4px"
                }),
                p = (0, o.animated)((0, n.default)(i.default)({
                    height: 16
                }));
            var m = (0, l.memo)((function({
                config: e,
                isLoading: t = !1
            }) {
                const r = (0, u.useTheme)();
                return r.select({
                    windows: null,
                    mac: l.default.createElement(h, null, l.default.createElement(o.Transition, {
                        config: e,
                        items: t,
                        from: {
                            position: "absolute",
                            transform: "scale(0)"
                        },
                        enter: {
                            transform: "scale(1)"
                        },
                        leave: {
                            transform: "scale(0)"
                        }
                    }, e => e ? e => l.default.createElement(p, {
                        style: e
                    }, l.default.createElement(s.default, {
                        size: s.SpinnerSize.XXSmall
                    })) : e => l.default.createElement(p, {
                        style: e
                    }, l.default.createElement(a.default, {
                        size: 16,
                        color: r.semanticColors.textPrimary
                    }))))
                })
            }));
            t.default = m
        },
        1808: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RightIconTransition = y, t.default = void 0;
            var n = p(r(5)),
                a = p(r(1)),
                o = p(r(553)),
                l = p(r(50)),
                i = p(r(574)),
                s = r(46),
                u = h(r(0)),
                c = h(r(22)),
                d = r(6);

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function h(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = f();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const m = n.default._("Clear Search", null, {
                    hk: "2Lk4Ff"
                }).toString(),
                g = (0, a.default)(c.default)({
                    width: 16,
                    height: 16
                });

            function y({
                config: e,
                hasQuery: t,
                clearSearch: r
            }) {
                const n = (0, d.useTheme)();
                return n.select({
                    mac: u.default.createElement(s.Transition, {
                        config: e,
                        items: t,
                        from: {
                            opacity: 0,
                            transform: "scale(0)"
                        },
                        enter: {
                            opacity: 1,
                            transform: "scale(1)"
                        },
                        leave: {
                            visibility: "hidden"
                        }
                    }, e => e && (e => u.default.createElement(s.animated.div, {
                        style: e
                    }, u.default.createElement(g, {
                        "aria-label": m,
                        telemetryName: "clearSearch",
                        size: c.RoundButtonSize.Tiny,
                        icon: o.default,
                        onClick: r,
                        use: c.RoundButtonUse.Transparent,
                        iconColor: n.colors.base60,
                        iconSize: 20,
                        tabIndex: -1,
                        silentPressedState: "windows" === n.os
                    })))),
                    windows: u.default.createElement(s.Transition, {
                        config: e,
                        items: t,
                        from: {
                            opacity: 0,
                            transform: "scale(0)"
                        },
                        enter: {
                            opacity: 1,
                            transform: "scale(1)"
                        },
                        leave: {
                            visibility: "hidden"
                        }
                    }, e => e ? e => u.default.createElement(s.animated.div, {
                        style: e
                    }, u.default.createElement(g, {
                        "aria-label": m,
                        telemetryName: "clearSearch",
                        size: c.RoundButtonSize.XXSmall,
                        icon: l.default,
                        onClick: r,
                        use: c.RoundButtonUse.Transparent,
                        iconColor: n.colors.base60,
                        iconSize: 16,
                        tabIndex: -1,
                        silentPressedState: "windows" === n.os
                    })) : e => u.default.createElement(s.animated.div, {
                        style: e
                    }, u.default.createElement(i.default, {
                        size: 16,
                        color: n.semanticColors.textPrimary
                    })))
                })
            }
            var v = (0, u.memo)(y);
            t.default = v
        },
        1826: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RoomReducer = t.initialState = void 0;
            var n = r(140),
                a = r(65),
                o = r(39),
                l = r(8),
                i = r(51);
            const s = () => ({
                    activity: null,
                    customActivity: null,
                    scheduledForDate: null,
                    scheduledForTime: null,
                    roomPrivacy: l.RoomAudienceType.Anyone,
                    roomJoinPermission: l.RoomJoinPermission.AnyoneWhoCanLoadTheLink
                }),
                u = {
                    ownedRooms: null,
                    roomInboxUnitList: null,
                    activeScreenInfo: [],
                    currentRoom: {
                        roomInfo: null,
                        ownerInfo: null,
                        invitedParticipants: null,
                        activeParticipants: null
                    },
                    confirmationBox: null,
                    roomCreationData: s(),
                    optimisticClientToken: null
                };
            t.initialState = u;
            const c = (0, i.makeReducer)(u, (e, t) => {
                var r;
                switch (t.type) {
                    case a.RoomActions.clearRoomDialog.type:
                        e.activeScreenInfo = [], e.currentRoom = {
                            roomInfo: null,
                            ownerInfo: null,
                            invitedParticipants: null,
                            activeParticipants: null
                        }, e.roomCreationData = s();
                        break;
                    case a.RoomActions.roomGoBack.type:
                        e.activeScreenInfo = e.activeScreenInfo.slice();
                        const i = e.activeScreenInfo.pop();
                        if (i)
                            if (i.screen === n.RoomScreen.EDIT_ROOM || i.screen === n.RoomScreen.CREATE_ROOM) e.roomCreationData = s();
                            else if (i.screen === n.RoomScreen.MANAGE_PARTICIPANTS) {
                            const t = e.activeScreenInfo.length > 0 ? e.activeScreenInfo[e.activeScreenInfo.length - 1] : null;
                            t && t.screen === n.RoomScreen.CREATE_ROOM && (e.activeScreenInfo[e.activeScreenInfo.length - 1] = {
                                ...i,
                                screen: n.RoomScreen.EDIT_ROOM
                            })
                        }
                        break;
                    case a.RoomActions.storeOwnedRooms.type:
                        e.ownedRooms = t.payload.ownedRooms;
                        break;
                    case a.RoomActions.storeRoomInboxUnitList.type:
                        const {
                            list: u
                        } = t.payload;
                        e.roomInboxUnitList = u;
                        break;
                    case a.RoomActions.setActiveScreen.type:
                        e.activeScreenInfo.push(t.payload.activeScreenInfo);
                        break;
                    case a.RoomActions.createRoom.type:
                        e.optimisticClientToken = t.payload.args.optimisticClientToken;
                        break;
                    case a.RoomActions.beginCreateRoom.type:
                        e.activeScreenInfo.push({
                            screen: n.RoomScreen.CREATE_ROOM
                        }), e.funnelSessionId = t.payload.funnelSessionId;
                        break;
                    case a.RoomActions.enterEditRoom.type:
                        const {
                            room: c
                        } = t.payload;
                        e.activeScreenInfo.push({
                            screen: n.RoomScreen.EDIT_ROOM,
                            roomId: c.roomId
                        }), e.roomCreationData = {
                            activity: [c.emoji, c.name],
                            customActivity: null,
                            roomPrivacy: c.audienceType,
                            scheduledForDate: c.callStarttimestampMs > Date.now() ? new Date(c.callStarttimestampMs) : null,
                            scheduledForTime: c.callStarttimestampMs > Date.now() ? (0, o.getSecondsOfToday)(new Date(c.callStarttimestampMs)) : null,
                            roomJoinPermission: null !== (r = c.joinPermission) && void 0 !== r ? r : l.RoomJoinPermission.Unknown
                        };
                        break;
                    case a.RoomActions.storeCurrentRoomAndParticipants.type:
                        const {
                            roomInfo: f, invitedParticipants: h, activeParticipants: p
                        } = t.payload;
                        e.currentRoom.roomInfo = f, e.currentRoom.invitedParticipants = h, e.currentRoom.activeParticipants = p;
                        break;
                    case a.RoomActions.storeCurrentRoomOwnerInfo.type:
                        e.currentRoom.ownerInfo = t.payload.ownerInfo;
                        break;
                    case a.RoomActions.setModalConfirmationBox.type:
                        e.confirmationBox = t.payload.confirmationBox;
                        break;
                    case a.RoomActions.saveCustomRoomActivity.type:
                        e.roomCreationData.customActivity = t.payload.activity, e.roomCreationData.activity = t.payload.activity, d(e);
                        break;
                    case a.RoomActions.selectRoomActivity.type:
                        e.roomCreationData.activity = t.payload.activity, d(e);
                        break;
                    case a.RoomActions.selectScheduleForDate.type:
                        e.roomCreationData.scheduledForDate = t.payload.date;
                        break;
                    case a.RoomActions.selectScheduleForTime.type:
                        e.roomCreationData.scheduledForTime = t.payload.secondsInDay;
                        break;
                    case a.RoomActions.selectRoomPrivacy.type:
                        e.roomCreationData.roomPrivacy = t.payload.setting;
                        break;
                    case a.RoomActions.selectRoomJoinPermission.type:
                        e.roomCreationData.roomJoinPermission = t.payload.setting;
                        break;
                    case a.RoomActions.beginJoinRoom.type:
                        e.activeScreenInfo.push({
                            screen: n.RoomScreen.JOIN_ROOM,
                            roomId: t.payload.roomId
                        }), e.funnelSessionId = t.payload.funnelSessionId;
                        break;
                    case a.RoomActions.replaceCurrentScreen.type:
                        e.activeScreenInfo[e.activeScreenInfo.length - 1] = t.payload.newScreenInfo;
                        break;
                    case a.RoomActions.resetOptimisticClientToken.type:
                        e.optimisticClientToken = null
                }
            });

            function d(e) {
                const t = e.activeScreenInfo.findIndex(e => e.screen === n.RoomScreen.EDIT_ROOM || e.screen === n.RoomScreen.CREATE_ROOM);
                t >= 0 && (e.activeScreenInfo = e.activeScreenInfo.slice(0, t + 1))
            }
            t.RoomReducer = c
        },
        1829: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return a.default.createElement(s, null, a.default.createElement(o.default, {
                    css: {
                        marginBottom: 6
                    }
                }, a.default.createElement(l.CircleShimmer, {
                    size: 50
                })), a.default.createElement(l.TextShimmer, {
                    width: 44,
                    height: 8
                }), a.default.createElement(l.TextShimmer, {
                    width: 34,
                    height: 8
                }))
            };
            var n = i(r(1)),
                a = i(r(0)),
                o = i(r(2)),
                l = r(100);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const s = (0, n.default)(o.default)({
                alignItems: "center",
                margin: "0px 6px"
            })
        },
        1831: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    showingQuickReplies: t,
                    threadKey: r,
                    lastMessageOTID: f,
                    quickReplies: h,
                    sendQuickReply: p,
                    newMessageNotificationThreshold: m,
                    onScrollDownNubClick: g,
                    isInMessageIsland: y,
                    scrollView: v
                } = e, [b, _, w] = (0, u.default)(y), C = (0, d.useRef)(!1), E = (0, s.default)(y), k = (0, i.default)(r), x = (0, i.default)(f), [M, S] = (0, d.useState)(null);
                (0, d.useEffect)(() => {
                    if (!k.current && x.current && b) {
                        S(f);
                        const e = setTimeout(() => {
                            S(null)
                        }, 5e3);
                        return () => clearTimeout(e)
                    }
                    return () => {}
                }, [x, k, S, f, b]), (0, d.useLayoutEffect)(() => {
                    y && !E && _(!0)
                }), (0, d.useEffect)(() => {
                    C.current = y
                });
                const O = (0, d.useCallback)((0, l.throttle)(() => {
                    if (v && !C.current) {
                        const e = !(0, o.isScrolledDown)(v, m);
                        e !== w.current && (_(e), S(null))
                    }
                }, 200), [v]);
                (0, d.useEffect)(() => {
                    v && v.addEventListener("scroll", O)
                }, [v, O]);
                const T = !b && t;
                if (!r) return null;
                return (d.default.createElement(d.default.Fragment, null, null != M && b ? d.default.createElement(n.default, {
                    onScrollDownNubClick: () => {
                        S(null), g()
                    },
                    visible: null != M && b,
                    lastMessageOTID: M,
                    threadKey: r
                }) : T ? d.default.createElement(c.default, {
                    quickReplies: h,
                    sendQuickReply: p
                }) : b ? d.default.createElement(a.default, {
                    visible: b,
                    onClick: () => {
                        S(null), g()
                    }
                }) : null))
            };
            var n = h(r(1832)),
                a = h(r(1833)),
                o = r(374),
                l = r(117),
                i = h(r(190)),
                s = h(r(148)),
                u = h(r(1835)),
                c = h(r(261)),
                d = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        1832: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = h();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(369)),
                a = r(261),
                o = f(r(27)),
                l = r(21),
                i = r(23),
                s = f(r(1)),
                u = r(11),
                c = r(46),
                d = f(r(0));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }
            const p = (0, s.default)(a.CenteringWrapper)({
                bottom: -10
            });
            var m = (0, u.connect)((function(e, t) {
                const r = (0, l.requireAuthenticationData)(e);
                return {
                    message: (0, i.getMessage)(e, t.threadKey, t.lastMessageOTID),
                    thread: (0, i.getThread)(e, t.threadKey),
                    viewerId: r.userID
                }
            }))((function(e) {
                const {
                    visible: t,
                    onScrollDownNubClick: r,
                    message: a,
                    lastMessageOTID: l,
                    viewerId: i,
                    thread: s
                } = e;
                return a && s && i !== a.message.senderId ? d.default.createElement(c.Transition, {
                    items: t,
                    native: !0,
                    config: {
                        tension: 500,
                        friction: 26
                    },
                    from: {
                        transform: "translateY(0px)",
                        opacity: 0
                    },
                    enter: {
                        transform: "translateY(-15px)",
                        opacity: 1
                    },
                    leave: {
                        transform: "translateY(0px)",
                        opacity: 0
                    }
                }, e => e ? e => d.default.createElement(c.animated.div, {
                    style: e
                }, d.default.createElement(p, null, "typing_indicator" === l ? d.default.createElement(n.default, {
                    type: n.NotificationTypes.TYPING,
                    isGroupChat: !1,
                    imageUrl: (0, o.default)(a.message.profilePicture)
                }) : d.default.createElement(n.default, {
                    type: n.NotificationTypes.MESSAGE_TEXT,
                    text: s.snippet,
                    imageUrl: (0, o.default)(a.message.profilePicture),
                    onClick: r
                }))) : null) : null
            }));
            t.default = m
        },
        1833: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    onClick: t,
                    visible: r
                } = e, {
                    threadTheme: n
                } = (0, o.useThreadTheme)(), c = n.gradientColors && n.gradientColors[n.gradientColors.length - 1] || n.color;
                return i.default.createElement(l.Transition, {
                    items: r,
                    native: !0,
                    config: {
                        tension: 500,
                        friction: 26
                    },
                    from: {
                        transform: "translateY(0px)",
                        opacity: 0
                    },
                    enter: {
                        transform: "translateY(-15px)",
                        opacity: 1
                    },
                    leave: {
                        transform: "translateY(0px)",
                        opacity: 0
                    }
                }, e => e ? e => i.default.createElement(l.animated.div, {
                    style: e
                }, i.default.createElement(f, {
                    size: s.PillSize.Medium,
                    onClick: t
                }, i.default.createElement(u.IconPill, {
                    icon: a.default,
                    size: s.PillSize.Medium,
                    color: c
                }))) : null)
            };
            var n = d(r(1)),
                a = d(r(1834)),
                o = r(41),
                l = r(46),
                i = d(r(0)),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(127)),
                u = r(149);

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, n.default)(s.default)(e => ({
                position: "absolute",
                bottom: 0,
                left: `calc(50% - ${s.PILL_SIZES[s.PillSize.Medium]/2}px)`,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                height: 32,
                width: 32
            }))
        },
        1834: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M24.616 18.366a1.25 1.25 0 011.768 1.768l-7.5 7.5a1.25 1.25 0 01-1.768 0l-7.5-7.5a1.25 1.25 0 011.768-1.768l4.94 4.94a.25.25 0 00.426-.177V9.25a1.25 1.25 0 112.5 0v13.879c0 .222.27.334.427.176l4.94-4.939z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        1835: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const [t, r] = (0, n.useState)(e), a = (0, n.useRef)();
                return a.current = t, [t, r, a]
            };
            var n = r(0)
        },
        1836: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement(o.default, {
                    size: o.PillSize.Large,
                    onClick: e.onClick
                }, a.default.createElement(l.TextPill, {
                    text: n.default._("Load more...", null, {
                        hk: "ZpJfm"
                    }).toString()
                }))
            };
            var n = s(r(5)),
                a = s(r(0)),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(127)),
                l = r(149);

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        1837: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useScrollQueue = function(e) {
                return (0, n.useRef)(new l(e)).current
            };
            var n = r(0),
                a = r(1838),
                o = r(581);
            class l {
                constructor(e) {
                    this.scrollContainer = e, this.queue = void 0, this._currentRequest = void 0, this.runningOperation = void 0, this.queue = []
                }
                queueOperation(e) {
                    this.queue.push(e), this.tryExecuteOperations()
                }
                clear() {
                    this.runningOperation && (this.runningOperation.cancel(), this.runningOperation = void 0), this._currentRequest = void 0, this.queue = []
                }
                get currentRequest() {
                    return this._currentRequest
                }
                async tryExecuteOperations() {
                    if (this._currentRequest) return;
                    if (!this.scrollContainer.current) return;
                    const e = this.queue.shift();
                    if (e) {
                        switch (this._currentRequest = e, e.type) {
                            case "scroll_down":
                                await this.scrollTo(0, e.duration)
                        }
                        this.notifyOperationComplete()
                    }
                }
                notifyOperationComplete() {
                    this._currentRequest = void 0, this.tryExecuteOperations()
                }
                async scrollTo(e, t) {
                    if (!this.scrollContainer.current) return;
                    const r = (0, o.getScrollTop)(e, this.scrollContainer.current.clientHeight, this.scrollContainer.current.scrollHeight);
                    if (t <= 0) this.scrollContainer.current.scrollTop = r;
                    else try {
                        this.runningOperation = new a.SmoothScrollOperation(r, this.scrollContainer.current, t), await this.runningOperation.run()
                    } finally {
                        this.runningOperation = void 0
                    }
                }
            }
        },
        1838: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SmoothScrollOperation = void 0;
            var n = r(174);
            t.SmoothScrollOperation = class {
                constructor(e, t, r) {
                    this.desiredScrollTop = e, this.scrollContainer = t, this.duration = r, this.cancelled = !1, this.deferred = void 0, this.durationRemaining = void 0, this.lastFrameMs = void 0, this.lastScrollTop = void 0, this.desiredScrollTop = Math.min(this.desiredScrollTop, t.scrollHeight - t.clientHeight), this.durationRemaining = this.duration
                }
                run() {
                    return this.deferred = (0, n.defer)(), this.lastScrollTop = this.scrollContainer.scrollTop, window.requestAnimationFrame(() => {
                        const e = this.lastScrollTop > this.desiredScrollTop ? "up" : "down";
                        this.lastFrameMs = Date.now(), this.runDurationImpl(this.lastScrollTop, e)
                    }), this.deferred.promise
                }
                cancel() {
                    this.cancelled = !0
                }
                runDurationImpl(e, t) {
                    if (!this.duration || !this.durationRemaining) return void this.notifyComplete();
                    if (this.cancelled) return void this.notifyCancelled();
                    if (this.desiredScrollTop === this.lastScrollTop) return void this.notifyComplete();
                    const r = Date.now() - this.lastFrameMs;
                    this.durationRemaining -= r;
                    const n = Math.round(Math.abs(this.desiredScrollTop - e) * (this.duration - this.durationRemaining) / this.duration),
                        a = "up" === t ? Math.max(this.desiredScrollTop, e - n) : Math.min(this.desiredScrollTop, e + n);
                    this.scrollContainer.scrollTop = a, this.lastScrollTop = a, window.requestAnimationFrame(() => this.runDurationImpl(e, t))
                }
                notifyComplete() {
                    this.deferred.resolve()
                }
                notifyCancelled() {
                    this.deferred.reject("cancelled")
                }
            }
        },
        189: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    url: t,
                    offlineId: r
                } = e, l = (0, i.useRef)(null), s = (0, i.useRef)(null);
                let c = "string" == typeof t ? t : (0, n.default)(t);
                s.current && c !== s.current && (l.current = null);
                if (s.current = c, !l.current) {
                    if (!r || c.startsWith("https://") || c.startsWith("data:") || (c = `${c}?no-cache=${r}`), 0 === c.length) return null;
                    if (l.current = u[c], !l.current) {
                        let t;
                        t = "image" === e.mediaType ? function(e, t) {
                            const r = (0, a.defer)(),
                                n = new Image;
                            return n.src = e, n.onload = () => {
                                r.resolve(e)
                            }, n.onerror = () => {
                                console.error(e), o.default.log.error("Could not load attachment with ID", t)
                            }, r
                        }(c, r) : function(e, t, r) {
                            const n = (0, a.defer)(),
                                l = document.createElement("video"),
                                i = document.createElement("source");
                            return i.src = e, i.type = t, l.appendChild(i), l.oncanplay = () => {
                                n.resolve(e)
                            }, l.onerror = () => {
                                console.error(e), o.default.log.error("Could not load attachment with ID", r), n.reject(new Error("Could not load video attachment with ID " + r))
                            }, n
                        }(c, e.mimeType, r), u[c] = t, l.current = t
                    }
                }
                switch (l.current.status) {
                    case "pending":
                        throw l.current.promise;
                    case "fulfilled":
                        return l.current.result;
                    case "rejected":
                        return null
                }
            };
            var n = s(r(27)),
                a = r(174),
                o = s(r(9)),
                l = s(r(1605)),
                i = r(0);

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = new l.default({
                max: 100
            })
        },
        190: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t = !0) {
                const r = (0, a.default)(e),
                    n = (0, o.useRef)(void 0);
                if (!t && void 0 === n.current) return n.current = !1, n;
                return n.current = r !== e, n
            };
            var n, a = (n = r(148)) && n.__esModule ? n : {
                    default: n
                },
                o = r(0)
        },
        191: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                timeSeconds: e,
                onTimeChange: t = (() => {}),
                minSeconds: r = 0,
                disabled: u = !1,
                mode: c,
                textUse: d,
                fontSize: f
            }) {
                const h = function(e) {
                        const t = window.lang,
                            r = (0, l.useMemo)(() => (0, o.getTimeModeFromLocaleKey)(t), [t]);
                        return void 0 === e ? r : e
                    }(c),
                    [p, m] = (0, a.default)(e, r, h),
                    {
                        current: g
                    } = p,
                    [y, v] = (0, l.useState)(e);
                (0, l.useEffect)(() => {
                    g !== y && (v(g), t(g))
                }, [g, y, t]), (0, l.useEffect)(() => m({
                    type: "changeMin",
                    min: r
                }), [m, r]);
                const b = (0, l.useRef)(null),
                    _ = (0, l.useRef)(null),
                    w = "am" === p.render.period ? 0 : 1;
                return l.default.createElement(n.TimePickerContainer, null, l.default.createElement(n.TimeContainer, null, l.default.createElement(n.HourInput, {
                    value: p.render.hour,
                    onChange: e => m({
                        type: "renderHour",
                        value: e
                    }),
                    onFocus: () => {
                        var e;
                        return null == b ? void 0 : null === (e = b.current) || void 0 === e ? void 0 : e.select()
                    },
                    onBlur: () => m({
                        type: "constrain"
                    }),
                    disabled: u,
                    textUse: d,
                    fontSize: f,
                    ref: b
                }), l.default.createElement(n.Separator, {
                    disabled: u
                }, ":"), l.default.createElement(n.TimeInput, {
                    value: p.render.minute,
                    onChange: e => m({
                        type: "renderMinute",
                        value: e
                    }),
                    onFocus: () => {
                        var e;
                        return null == _ ? void 0 : null === (e = _.current) || void 0 === e ? void 0 : e.select()
                    },
                    onBlur: () => m({
                        type: "constrain"
                    }),
                    disabled: u,
                    textUse: d,
                    fontSize: f,
                    ref: _
                })), "12h" === h && l.default.createElement(s.default, null, l.default.createElement(i.default, {
                    items: ["AM", "PM"],
                    initialSelectedIndex: w,
                    selectedIndex: w,
                    onSelectionChanged: e => m({
                        type: "changePeriod",
                        value: "AM" === e ? "am" : "pm"
                    }),
                    disabled: u
                })))
            };
            var n = r(1742),
                a = c(r(1743)),
                o = r(39),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                i = c(r(160)),
                s = c(r(103));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        198: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Container = function(e) {
                return u.default.createElement(c.default, {
                    "data-automation-id": "login-screen",
                    css: {
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "flex-start",
                        paddingTop: "122px"
                    }
                }, u.default.createElement(h.default, {
                    name: "login"
                }, e.children))
            }, t.FormContainer = function(e) {
                return u.default.createElement(w, null, u.default.createElement(C, null, e.children))
            }, t.Header = function(e) {
                const t = e.logo,
                    r = u.default.createElement(c.default, {
                        css: {
                            height: 70,
                            width: 70
                        }
                    }),
                    a = e.title || n.default._("Sign in to Get Started", null, {
                        hk: "1fooXi"
                    });
                return u.default.createElement(c.default, {
                    css: {
                        alignItems: "center"
                    }
                }, t ? u.default.createElement(t, {
                    size: 70
                }) : r, u.default.createElement(c.default, {
                    css: {
                        margin: "24px 0 32px",
                        alignItems: "center"
                    }
                }, u.default.createElement(g.default, {
                    use: "headline"
                }, a), e.subtitle && u.default.createElement(c.default, {
                    css: {
                        margin: "8px",
                        opacity: .34,
                        paddingLeft: 40,
                        paddingRight: 40
                    }
                }, u.default.createElement(g.default, {
                    use: "title-semibold",
                    wrapText: !0,
                    textAlign: "center"
                }, e.subtitle))))
            }, t.PrimaryButton = x, t.SecondaryButton = M, t.BackButton = function(e) {
                const t = n.default._("Back", null, {
                    hk: "14fdZm"
                }).toString();
                return (u.default.createElement(M, _({
                    "aria-label": t,
                    telemetryName: "loginBackButton",
                    caption: t
                }, e)))
            }, t.WarningNotice = function(e) {
                const t = (0, m.useTheme)();
                return u.default.createElement(O, _({
                    icon: e => u.default.createElement(i.default, _({
                        color: t.colors.honey
                    }, e))
                }, e))
            }, t.InfoNotice = function(e) {
                const t = (0, m.useTheme)();
                return u.default.createElement(O, _({
                    icon: e => u.default.createElement(s.default, _({
                        color: t.colors.base70
                    }, e))
                }, e))
            }, t.Notice = O, t.CredentialsFields = function(e) {
                const [t, r] = (0, u.useState)(e.initialEmail || ""), [a, o] = (0, u.useState)(""), l = e.isAuthenticating ? n.default._("Logging in...", null, {
                    hk: "3pBSlm"
                }) : n.default._("Login", null, {
                    hk: "pVDeq"
                }), i = e.disableLogin || e.isAuthenticating || !t || !a;
                return u.default.createElement(u.default.Fragment, null, u.default.createElement(E, {
                    type: "text",
                    "data-automation-id": "email",
                    placeholder: n.default._("Email or phone number", null, {
                        hk: "3YsOFR"
                    }),
                    value: t,
                    onChange: r,
                    autoFocus: !0,
                    disabled: e.disableEmail || e.isAuthenticating
                }), u.default.createElement(E, {
                    type: "password",
                    "data-automation-id": "password",
                    placeholder: n.default._("Password", null, {
                        hk: "3n9LQx"
                    }),
                    value: a,
                    onChange: o,
                    disabled: e.disablePassword || e.isAuthenticating
                }), u.default.createElement(x, {
                    "aria-label": n.default._("Login", null, {
                        hk: "1bLcjg"
                    }).toString(),
                    telemetryName: "loginButton",
                    "data-automation-id": "login",
                    onClick: () => e.onLogin && e.onLogin(t, a),
                    caption: l,
                    disabled: i
                }))
            }, t.NavigationButtons = function(e) {
                const t = (0, m.useTheme)(),
                    r = () => {};
                return u.default.createElement(c.default, {
                    css: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        flexDirection: "row",
                        marginLeft: 15,
                        marginTop: 40
                    }
                }, !e.hideBack && u.default.createElement(f.default, {
                    "aria-label": n.default._("Go Back", null, {
                        hk: "jMd9L"
                    }).toString(),
                    icon: o.default,
                    size: f.RoundButtonSize.Medium,
                    use: f.RoundButtonUse.Transparent,
                    iconColor: t.semanticColors.textPrimary,
                    telemetryName: "messengerCredentialsLoginBackButton",
                    onClick: e.onBack || r,
                    disabled: e.disableBack
                }), !e.hideForward && u.default.createElement(f.default, {
                    "aria-label": n.default._("Go Forward", null, {
                        hk: "2VAQrz"
                    }).toString(),
                    icon: l.default,
                    size: f.RoundButtonSize.Medium,
                    use: f.RoundButtonUse.Transparent,
                    iconColor: t.semanticColors.textPrimary,
                    telemetryName: "messengerCredentialsLoginForwardButton",
                    onClick: e.onForward || r,
                    disabled: e.disableForward
                }))
            }, t.NoticesContainer = t.FooterContainer = t.LoginFormTextInput = void 0;
            var n = b(r(5)),
                a = b(r(1)),
                o = b(r(260)),
                l = b(r(628)),
                i = b(r(163)),
                s = b(r(363)),
                u = v(r(0)),
                c = b(r(2)),
                d = v(r(16)),
                f = v(r(22)),
                h = b(r(13)),
                p = b(r(60)),
                m = r(6),
                g = b(r(4));

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function() {
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
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _() {
                return (_ = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const w = (0, a.default)(c.default)({
                    "> fieldset > *": {
                        width: 380
                    },
                    "> label": {
                        fontSize: 12
                    }
                }).withComponent("form", {
                    target: "e1smwc2w0",
                    label: "Form"
                }),
                C = (0, a.default)(c.default)({}).withComponent("fieldset", {
                    target: "e1smwc2w1",
                    label: "Fields"
                }),
                E = (0, a.default)(p.default)(e => ({
                    backgroundColor: e.theme.select({
                        light: e.theme.colors.base20,
                        dark: e.theme.colors.base40
                    }),
                    height: "36px",
                    borderRadius: 10,
                    paddingTop: 8,
                    margin: "8px",
                    fontWeight: "normal",
                    "::placeholder": {
                        color: e.theme.semanticColors.textPrimary,
                        opacity: .34
                    }
                }));
            t.LoginFormTextInput = E;
            const k = (0, a.default)(c.default)({
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                marginBottom: 24,
                marginTop: "auto"
            });

            function x(e) {
                return u.default.createElement(c.default, {
                    css: {
                        marginTop: "16px",
                        marginLeft: "8px",
                        minWidth: 380
                    }
                }, u.default.createElement(d.default, _({
                    size: d.RectangleButtonSize.Jumbo,
                    use: d.RectangleButtonUse.Primary
                }, e)))
            }

            function M(e) {
                return u.default.createElement(d.default, _({}, e, {
                    size: d.RectangleButtonSize.Medium,
                    use: d.RectangleButtonUse.Secondary
                }))
            }
            t.FooterContainer = k;
            const S = (0, a.default)(c.default)({
                textAlign: "center",
                alignItems: "center",
                justifyContent: "flex-end",
                paddingLeft: 75,
                paddingRight: 75,
                flex: 1
            });

            function O(e) {
                const t = e.icon;
                return (u.default.createElement(c.default, {
                    css: {
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%"
                    }
                }, u.default.createElement(t, {
                    size: 36
                }), u.default.createElement(g.default, {
                    wrapText: !0,
                    css: {
                        paddingTop: 5
                    }
                }, e.text)))
            }
            t.NoticesContainer = S
        },
        227: function(e, t, r) {
            (function(e) {
                function r(e, t) {
                    for (var r = 0, n = e.length - 1; n >= 0; n--) {
                        var a = e[n];
                        "." === a ? e.splice(n, 1) : ".." === a ? (e.splice(n, 1), r++) : r && (e.splice(n, 1), r--)
                    }
                    if (t)
                        for (; r--; r) e.unshift("..");
                    return e
                }

                function n(e, t) {
                    if (e.filter) return e.filter(t);
                    for (var r = [], n = 0; n < e.length; n++) t(e[n], n, e) && r.push(e[n]);
                    return r
                }
                t.resolve = function() {
                    for (var t = "", a = !1, o = arguments.length - 1; o >= -1 && !a; o--) {
                        var l = o >= 0 ? arguments[o] : e.cwd();
                        if ("string" != typeof l) throw new TypeError("Arguments to path.resolve must be strings");
                        l && (t = l + "/" + t, a = "/" === l.charAt(0))
                    }
                    return (a ? "/" : "") + (t = r(n(t.split("/"), (function(e) {
                        return !!e
                    })), !a).join("/")) || "."
                }, t.normalize = function(e) {
                    var o = t.isAbsolute(e),
                        l = "/" === a(e, -1);
                    return (e = r(n(e.split("/"), (function(e) {
                        return !!e
                    })), !o).join("/")) || o || (e = "."), e && l && (e += "/"), (o ? "/" : "") + e
                }, t.isAbsolute = function(e) {
                    return "/" === e.charAt(0)
                }, t.join = function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return t.normalize(n(e, (function(e, t) {
                        if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                        return e
                    })).join("/"))
                }, t.relative = function(e, r) {
                    function n(e) {
                        for (var t = 0; t < e.length && "" === e[t]; t++);
                        for (var r = e.length - 1; r >= 0 && "" === e[r]; r--);
                        return t > r ? [] : e.slice(t, r - t + 1)
                    }
                    e = t.resolve(e).substr(1), r = t.resolve(r).substr(1);
                    for (var a = n(e.split("/")), o = n(r.split("/")), l = Math.min(a.length, o.length), i = l, s = 0; s < l; s++)
                        if (a[s] !== o[s]) {
                            i = s;
                            break
                        } var u = [];
                    for (s = i; s < a.length; s++) u.push("..");
                    return (u = u.concat(o.slice(i))).join("/")
                }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
                    if ("string" != typeof e && (e += ""), 0 === e.length) return ".";
                    for (var t = e.charCodeAt(0), r = 47 === t, n = -1, a = !0, o = e.length - 1; o >= 1; --o)
                        if (47 === (t = e.charCodeAt(o))) {
                            if (!a) {
                                n = o;
                                break
                            }
                        } else a = !1;
                    return -1 === n ? r ? "/" : "." : r && 1 === n ? "/" : e.slice(0, n)
                }, t.basename = function(e, t) {
                    var r = function(e) {
                        "string" != typeof e && (e += "");
                        var t, r = 0,
                            n = -1,
                            a = !0;
                        for (t = e.length - 1; t >= 0; --t)
                            if (47 === e.charCodeAt(t)) {
                                if (!a) {
                                    r = t + 1;
                                    break
                                }
                            } else -1 === n && (a = !1, n = t + 1);
                        return -1 === n ? "" : e.slice(r, n)
                    }(e);
                    return t && r.substr(-1 * t.length) === t && (r = r.substr(0, r.length - t.length)), r
                }, t.extname = function(e) {
                    "string" != typeof e && (e += "");
                    for (var t = -1, r = 0, n = -1, a = !0, o = 0, l = e.length - 1; l >= 0; --l) {
                        var i = e.charCodeAt(l);
                        if (47 !== i) - 1 === n && (a = !1, n = l + 1), 46 === i ? -1 === t ? t = l : 1 !== o && (o = 1) : -1 !== t && (o = -1);
                        else if (!a) {
                            r = l + 1;
                            break
                        }
                    }
                    return -1 === t || -1 === n || 0 === o || 1 === o && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
                };
                var a = "b" === "ab".substr(-1) ? function(e, t, r) {
                    return e.substr(t, r)
                } : function(e, t, r) {
                    return t < 0 && (t = e.length + t), e.substr(t, r)
                }
            }).call(this, r(223))
        },
        228: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                var t = "string" == typeof e ? e.charCodeAt(0) : e;
                return t >= 48 && t <= 57
            }
        },
        229: function(e, t, r) {
            "use strict";
            e.exports = i;
            var n = r(1522),
                a = n.CONTINUE,
                o = n.SKIP,
                l = n.EXIT;

            function i(e, t, r, a) {
                "function" == typeof t && "function" != typeof r && (a = r, r = t, t = null), n(e, t, (function(e, t) {
                    var n = t[t.length - 1],
                        a = n ? n.children.indexOf(e) : null;
                    return r(e, a, n)
                }), a)
            }
            i.CONTINUE = a, i.SKIP = o, i.EXIT = l
        },
        231: function(e, t, r) {
            (function(e) {
                var n = void 0 !== e && e || "undefined" != typeof self && self || window,
                    a = Function.prototype.apply;

                function o(e, t) {
                    this._id = e, this._clearFn = t
                }
                t.setTimeout = function() {
                    return new o(a.call(setTimeout, n, arguments), clearTimeout)
                }, t.setInterval = function() {
                    return new o(a.call(setInterval, n, arguments), clearInterval)
                }, t.clearTimeout = t.clearInterval = function(e) {
                    e && e.close()
                }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
                    this._clearFn.call(n, this._id)
                }, t.enroll = function(e, t) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                }, t.unenroll = function(e) {
                    clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                }, t._unrefActive = t.active = function(e) {
                    clearTimeout(e._idleTimeoutId);
                    var t = e._idleTimeout;
                    t >= 0 && (e._idleTimeoutId = setTimeout((function() {
                        e._onTimeout && e._onTimeout()
                    }), t))
                }, r(494), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
            }).call(this, r(54))
        },
        232: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, m.useTheme)(),
                    {
                        threadTheme: r,
                        themeIsPresent: i
                    } = (0, s.useThreadTheme)(),
                    u = {
                        sending: h.default.createElement(_, {
                            url: o.default,
                            color: i ? r.color : t.colors.base50,
                            gradientColors: i ? r.gradientColors : void 0
                        }),
                        sent: h.default.createElement(_, {
                            url: l.default,
                            color: i ? r.color : t.colors.base50,
                            gradientColors: i ? r.gradientColors : void 0
                        }),
                        delivered: h.default.createElement(_, {
                            url: a.default,
                            color: i ? r.color : t.colors.base50,
                            gradientColors: i ? r.gradientColors : void 0
                        }),
                        unread: h.default.createElement(n.default, {
                            mentionCount: e.mentionCount,
                            theme: t
                        }),
                        error: h.default.createElement(d.default, {
                            size: 14,
                            color: t.colors.red
                        }),
                        muted: h.default.createElement(f.default, {
                            size: 14,
                            color: t.colors.base50
                        }),
                        none: null,
                        read: null
                    };
                return h.default.createElement(v, {
                    inChatCell: e.inChatCell,
                    hasReaction: e.hasReaction,
                    hasStatus: !!u[e.status]
                }, h.default.createElement(g.default, {
                    tooltipProps: {
                        children: b[e.status],
                        placement: "bottom"
                    },
                    delay: 1e3
                }, u[e.status]))
            };
            var n = y(r(1580)),
                a = y(r(540)),
                o = y(r(1582)),
                l = y(r(1583)),
                i = y(r(5)),
                s = r(41),
                u = r(105),
                c = y(r(1)),
                d = y(r(251)),
                f = y(r(463)),
                h = y(r(0)),
                p = y(r(2)),
                m = r(6),
                g = y(r(73));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const v = (0, c.default)(p.default)(e => {
                    return {
                        ...e.inChatCell ? (r = e.hasStatus, {
                            marginLeft: r ? 8 : 0
                        }) : (t = e.hasReaction, {
                            paddingBottom: "1px",
                            bottom: t ? "22px" : "0",
                            position: "absolute",
                            right: 0
                        })
                    };
                    var t, r
                }),
                b = {
                    sending: i.default._("Sending", null, {
                        hk: "4rijdi"
                    }).toString(),
                    sent: i.default._("Sent", null, {
                        hk: "4mLj3K"
                    }).toString(),
                    delivered: i.default._("Delivered", null, {
                        hk: "3J3ENU"
                    }).toString(),
                    unread: i.default._("Unread", null, {
                        hk: "3pswk"
                    }).toString(),
                    error: i.default._("Error", null, {
                        hk: "2MzBTY"
                    }).toString(),
                    muted: i.default._("Muted", null, {
                        hk: "3MgplJ"
                    }).toString(),
                    none: "",
                    read: ""
                },
                _ = (0, c.default)(p.default)(e => ({
                    height: 14,
                    width: 14,
                    WebkitMask: `url(${e.url}) no-repeat 50% 50%`,
                    backgroundColor: e.gradientColors ? void 0 : e.color,
                    ...(0, u.getThreadThemeGradientBackground)(e.gradientColors)
                }))
        },
        242: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.TRANSITION_CONFIG = void 0;
            var n = r(166),
                a = r(37),
                o = b(r(85)),
                l = b(r(5)),
                i = r(84),
                s = r(123),
                u = b(r(1)),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = v();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                d = b(r(2)),
                f = r(121),
                h = b(r(1806)),
                p = b(r(1807)),
                m = b(r(1808)),
                g = r(6),
                y = b(r(4));

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function() {
                    return e
                }, e
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function _() {
                return (_ = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const w = {
                tension: 600,
                friction: 20,
                clamp: !0
            };
            t.TRANSITION_CONFIG = w;
            const C = (0, u.default)(d.default)(e => {
                    return {
                        alignItems: "center",
                        flexDirection: "row",
                        color: e.theme.semanticColors.textPrimary,
                        margin: "8px 12px 6px 12px",
                        minWidth: 60,
                        height: e.theme.select({
                            mac: 24,
                            windows: 32
                        }),
                        borderRadius: e.theme.select({
                            mac: 5,
                            windows: 2
                        }),
                        border: e.theme.select({
                            mac: "1px solid"
                        }),
                        borderColor: e.theme.select({
                            mac: e.theme.colors.base50
                        }),
                        outline: e.theme.select({
                            windows: e.isFocused ? "2px solid" : void 0
                        }),
                        outlineColor: e.theme.select({
                            windows: e.theme.colors.windowsBlue
                        }),
                        backgroundColor: e.theme.select({
                            mac: {
                                light: "rgba(255,255,255,0.34)",
                                dark: "rgba(255,255,255,0.12)"
                            },
                            windows: {
                                light: "rgba(0,0,0,0.06)",
                                dark: "rgba(255,255,255,0.12)"
                            }
                        }),
                        ...e.theme.select({
                            mac: {
                                animation: e.isFocused && `${t=e.theme,(0,a.keyframes)({"0%":{boxShadow:t.select({light:`0 0 0 34px ${(0,n.hexWithAlpha)((0,o.default)(t.semanticColors.primaryAccent).alpha(0))}`,dark:`0 0 0 34px ${(0,n.hexWithAlpha)((0,o.default)(t.semanticColors.primaryAccent).alpha(0))}`})},"32%":{boxShadow:t.select({light:`
                                0 0 0 30 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(0))
                                }
                                `,dark:`
                                0 0 0 30 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(0))
                                }
                                `})},"50%":{boxShadow:t.select({light:`
                                0 0 0 15 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.12))
                                }
                                `,dark:`
                                0 0 0 15 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.2))
                                }
                                `})},"80%":{boxShadow:t.select({light:`
                                0 0 0 9 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.24))
                                }
                                `,dark:`
                                0 0 0 9 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.24))
                                }
                                `})},"90%":{boxShadow:t.select({light:`
                                0 0 0 6 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.54))
                                }
                                `,dark:`
                                0 0 0 6 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.3))
                                }
                                `})},"100%":{boxShadow:t.select({light:`
                                0 0 0 3 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.6))
                                }
                                `,dark:`
                                0 0 0 3 px $ {
                                    (0, n.hexWithAlpha)((0, o.default)(t.semanticColors.primaryAccent).alpha(.4))
                                }
                                `})}})} 0.22s`,
                                animationFillMode: "forwards",
                                ":hover": {
                                    cursor: "text"
                                }
                            }
                        })
                    };
                    var t
                }),
                E = (0, u.default)(d.default)(e => ({
                    height: "100%",
                    flex: "1 1 0px",
                    color: e.theme.colors.base50,
                    paddingLeft: e.theme.select({
                        windows: 12
                    })
                })),
                k = (0, u.default)(d.default)(e => ({
                    flexDirection: "row",
                    alignItems: "center",
                    marginRight: e.theme.select({
                        mac: "4px",
                        windows: "12px"
                    })
                })),
                x = (0, u.default)(y.default)(e => ({
                    margin: e.theme.select({
                        mac: "0 4px"
                    }),
                    marginBottom: 1,
                    maxWidth: 40
                })),
                M = u.default.input(e => ({
                    flex: 1,
                    minWidth: 0,
                    fontSize: "13px",
                    paddingRight: 2,
                    margin: 0,
                    backgroundColor: "transparent",
                    color: e.theme.semanticColors.textPrimary,
                    "::placeholder": {
                        color: e.theme.select({
                            light: "rgba(0,0,0,0.34)",
                            dark: "rgba(255,255,255,0.34)"
                        })
                    },
                    outline: "none",
                    border: "none"
                }));
            var S = (0, c.memo)((0, c.forwardRef)((function(e, t) {
                const {
                    query: r,
                    placeholder: n,
                    onQueryChange: a,
                    focusShortcut: o,
                    shortcutDisabled: u = !1,
                    isLoading: d = !1,
                    rightSnippet: y,
                    ...v
                } = e, [b, S] = (0, c.useState)(!1), O = (0, c.useRef)(null), T = (0, g.useTheme)();
                (0, c.useImperativeHandle)(t, () => ({
                    focus: () => {
                        O && O.current && O.current.focus()
                    }
                }));
                const I = (0, c.useMemo)(() => T.select(o || {
                    mac: "cmd+k",
                    windows: "ctrl+k"
                }), [T, o]);
                (0, i.useShortcut)(u ? null : I, (0, c.useCallback)(() => (O.current && O.current.focus(), !0), []));
                const R = (0, c.useCallback)(e => {
                        const t = e.target.value;
                        a && a(t)
                    }, [a]),
                    A = (0, c.useCallback)(e => {
                        O.current && e.target !== O.current && O.current.focus(), S(!0)
                    }, []),
                    P = (0, c.useCallback)(() => {
                        S(!0)
                    }, []),
                    j = (0, c.useCallback)(() => {
                        S(!1)
                    }, []),
                    D = (0, c.useCallback)(() => {
                        a && a("")
                    }, [a]),
                    z = (0, c.useMemo)(() => n || (u ? l.default._("Search", null, {
                        hk: "4Af25D"
                    }).toString() : l.default._("Search ({keyboard shortcut})", [l.default._param("keyboard shortcut", (0, s.toHumanReadableString)((0, s.toKeyEvent)(I), T))], {
                        hk: "22BXfw"
                    }).toString()), [n, u, I, T]),
                    F = (0, c.useMemo)(() => y ? c.default.createElement(x, {
                        use: "caption",
                        color: T.colors.base70
                    }, y) : null, [y, T.colors.base70]);
                return c.default.createElement(C, {
                    isFocused: b,
                    onClick: A,
                    onFocus: P,
                    onBlur: j,
                    className: e.className
                }, c.default.createElement(p.default, {
                    config: w,
                    isLoading: d
                }), c.default.createElement(E, null, c.default.createElement(M, _({
                    [f.IS_FOCUSABLE_ATTR]: !e.disabled
                }, {
                    [f.AUTOFOCUS_ATTR]: e.autoFocus
                }, v, {
                    placeholder: z,
                    value: r,
                    ref: O,
                    onChange: R
                }))), c.default.createElement(k, null, c.default.createElement(h.default, {
                    config: w,
                    children: F,
                    isLoading: d
                }), c.default.createElement(m.default, {
                    config: w,
                    clearSearch: D,
                    hasQuery: !!r
                })))
            })));
            t.default = S
        },
        243: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                const [r, a] = (0, n.useState)(() => {
                    try {
                        const r = window.localStorage.getItem(e);
                        return null == r ? t : JSON.parse(r)
                    } catch (e) {
                        return t
                    }
                });
                return (0, n.useEffect)(() => {
                    try {
                        void 0 !== r ? window.localStorage.setItem(e, JSON.stringify(r)) : window.localStorage.removeItem(e)
                    } catch (t) {
                        console.warn("Failed to save", r, "to", e, t)
                    }
                }, [e, r]), [r, a]
            };
            var n = r(0)
        },
        245: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const [t] = (0, n.useUserSetting)("showAsAvailable");
                if (!t) return a.PresenceType.Offline;
                return null == e ? void 0 : e.status
            };
            var n = r(72),
                a = r(8)
        },
        249: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    isChecked: t,
                    onToggle: r,
                    disabled: n,
                    css: a,
                    ...l
                } = e, [i, s] = (0, o.useState)(!1);
                return o.default.createElement(c, u({
                    isChecked: t,
                    role: "switch",
                    "aria-checked": t,
                    "aria-disabled": n,
                    onActivate: () => {
                        r && r(!t)
                    },
                    onMouseDown: () => {
                        n || s(!0)
                    },
                    onMouseUp: () => s(!1),
                    onMouseLeave: () => s(!1),
                    disabled: n,
                    css: a
                }, l), o.default.createElement(d, {
                    isChecked: t,
                    isExpanded: i
                }))
            };
            var n, a = (n = r(1)) && n.__esModule ? n : {
                    default: n
                },
                o = s(r(0)),
                l = s(r(2));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function s(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const c = (0, a.default)(l.FocusableView)(e => ({
                    height: 20,
                    width: 44,
                    backgroundColor: e.isChecked ? e.theme.semanticColors.primaryAccent : e.theme.select({
                        mac: e.theme.select({
                            light: e.theme.semanticColors.bgSurfaceSecondary,
                            dark: e.theme.semanticColors.bgSelectedElevated
                        }),
                        windows: "white"
                    }),
                    borderRadius: 15,
                    border: e.theme.select({
                        windows: e.isChecked ? "" : "2px solid black"
                    }),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: e.theme.select({
                        mac: "0 2px 0 2px",
                        windows: "0 5px 0 5px"
                    }),
                    cursor: e.disabled ? void 0 : "pointer",
                    opacity: e.disabled ? e.theme.select({
                        light: .6,
                        dark: .5
                    }) : 1
                })),
                d = (0, a.default)(l.default)(e => ({
                    height: e.theme.select({
                        mac: 16,
                        windows: 10
                    }),
                    width: e.theme.select({
                        mac: e.isExpanded ? 22 : 16,
                        windows: e.isExpanded ? 12 : 10
                    }),
                    transition: "transform 160ms linear, width 160ms linear, margin-left 160ms linear",
                    borderRadius: 8,
                    backgroundColor: e.isChecked ? "white" : e.theme.select({
                        mac: "white",
                        windows: "black"
                    }),
                    border: e.theme.select({
                        mac: "0.5px solid rgba(0, 0, 0, 0.1)"
                    }),
                    boxShadow: e.theme.select({
                        mac: "0px 3px 3px 0px rgba(0, 0, 0, 0.05), 0px 2px 2px 0px rgba(0, 0, 0, 0.1), 0px 3px 1px 0px rgba(0, 0, 0, 0.05)"
                    }),
                    ...e.isChecked && {
                        transform: e.theme.select({
                            mac: "translate(17px)",
                            windows: "translate(22px)"
                        }),
                        marginLeft: e.isExpanded ? "0" : e.theme.select({
                            mac: 6,
                            windows: 2
                        })
                    }
                }))
        },
        251: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M8 16A8 8 0 108 0a8 8 0 000 16zM6.792 3.75a1.209 1.209 0 112.416 0l-.176 5.283a1 1 0 01-1 .967h-.065a1 1 0 01-1-.967L6.793 3.75zm2.458 8.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        252: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NewMessageChatCell = function(e) {
                const t = (0, w.useTheme)(),
                    {
                        onClick: r,
                        onDelete: n,
                        compact: a,
                        selected: i,
                        recipients: u
                    } = e,
                    d = (0, s.default)(),
                    f = (0, g.useCallback)(e => {
                        "Escape" === e.key && n()
                    }, [n]),
                    p = c.default._("Close New Message Chat Cell", null, {
                        hk: "4kWy7Q"
                    }).toString(),
                    _ = e => {
                        e.stopPropagation(), n()
                    },
                    k = "windows" === t.os ? g.default.createElement(b.default, {
                        icon: m.default,
                        size: b.RoundButtonSize.Small,
                        "aria-label": p,
                        use: b.RoundButtonUse.Transparent,
                        silentPressedState: !0,
                        telemetryName: "closeButton",
                        onClick: _
                    }) : g.default.createElement(v.default, {
                        size: 18,
                        "aria-label": p,
                        telemetryName: "closeButton",
                        onClick: _
                    }),
                    x = d ? l.default : o.default;
                return g.default.createElement(O, {
                    telemetryName: "newMessageChatCell",
                    selected: i,
                    paddingRight: 7,
                    onActivate: r,
                    onKeyDown: f,
                    isContextMenuOpen: !1
                }, g.default.createElement(x, null, a && g.default.createElement(R, {
                    "aria-label": p,
                    className: "compact-close",
                    telemetryName: "closeButton",
                    onClick: _
                })), !a && g.default.createElement(g.default.Fragment, null, g.default.createElement(A, {
                    height: 54
                }, g.default.createElement(y.default, {
                    css: {
                        paddingTop: 10
                    }
                }, g.default.createElement(E.default, {
                    use: "body-semibold",
                    color: t.colors.base70
                }, u && 0 !== u.length ? c.default._("Chat with {list of first names}", [c.default._param("list of first names", (0, h.default)(u.map(({
                    name: e
                }) => e), h.default.CONJUNCTIONS.AND, h.default.DELIMITERS.COMMA))], {
                    hk: "10tcHr"
                }) : c.default._("New message", null, {
                    hk: "wZm6I"
                })))), g.default.createElement(C.default, {
                    tooltipProps: {
                        children: c.default._("Discard Message", null, {
                            hk: "1J8U4N"
                        }).toString()
                    },
                    delay: 1e3
                }, k)))
            }, t.default = t.MainContent = t.ShimmerContainer = t.Container = void 0;
            var n = M(r(597)),
                a = M(r(640)),
                o = M(r(1650)),
                l = M(r(1651)),
                i = M(r(1652)),
                s = M(r(593)),
                u = r(166),
                c = M(r(5)),
                d = M(r(1)),
                f = r(89),
                h = M(r(1653)),
                p = M(r(558)),
                m = M(r(50)),
                g = x(r(0)),
                y = x(r(2)),
                v = M(r(262)),
                b = x(r(22)),
                _ = r(66),
                w = r(6),
                C = M(r(73)),
                E = M(r(4));

            function k() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return k = function() {
                    return e
                }, e
            }

            function x(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = k();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const S = e => ({
                    backgroundColor: e.selected ? e.theme.semanticColors.bgSelected : "transparent",
                    flexDirection: "row",
                    padding: "0px 8px",
                    paddingRight: e.paddingRight || void 0,
                    alignItems: "center",
                    justifyContent: e.compact ? "center" : void 0,
                    borderStyle: "solid",
                    borderWidth: 4,
                    borderColor: e.isContextMenuOpen ? `${(0,u.addAlpha)(e.theme.semanticColors.primaryAccent,.2)}` : "transparent",
                    "body.focus-is-visible &:focus": {
                        outline: "none",
                        borderColor: `${(0,u.addAlpha)(e.theme.semanticColors.primaryAccent,.2)}`
                    },
                    ":hover .compact-close": {
                        visibility: "visible"
                    },
                    ...e.theme.isHighContrast ? {
                        boxShadow: e.selected ? `inset 0 0 1px 1px ${e.theme.semanticColors.primary}` : void 0
                    } : {}
                }),
                O = (0, d.default)(y.FocusableView)(S);
            t.Container = O;
            const T = (0, d.default)(y.default)(S);
            t.ShimmerContainer = T;
            const I = (0, d.default)(y.default)(e => ({
                    position: "absolute",
                    top: "calc(50% - 6px)",
                    height: 12,
                    width: 12,
                    borderRadius: "100%",
                    right: -10,
                    backgroundColor: e.theme.semanticColors.primary
                })),
                R = (0, d.default)(v.default)({
                    position: "absolute",
                    top: -3,
                    right: -7,
                    visibility: "collapse"
                }),
                A = (0, d.default)(y.default)(e => ({
                    flex: 1,
                    height: e.height ? e.height : void 0,
                    margin: "0px 15px",
                    lineHeight: "20px",
                    paddingTop: e.noPadding ? 0 : 6,
                    paddingBottom: e.isTyping ? 4 : 6
                }));
            t.MainContent = A;
            var P = (0, g.forwardRef)((function(e, t) {
                const {
                    authData: r,
                    compact: o,
                    participants: l,
                    participantStatus: u,
                    profilePictureUrl: c,
                    presence: d,
                    listItem: {
                        threadName: h,
                        isUnread: m,
                        isMuted: v,
                        isPinned: b
                    },
                    onClick: E,
                    onDoubleClick: k,
                    selected: x,
                    deliveryStatus: M,
                    lastMessageInfo: S,
                    callStatus: T,
                    onJoinCallClick: R,
                    isNetworkConnected: A,
                    isRtcEnabled: P,
                    rtcStackStatus: j,
                    isLastPinned: D,
                    isFirstItem: z
                } = e, {
                    showContextMenu: F
                } = (0, _.useContextMenu)(), B = (0, i.default)(e.listItem, l, r, {
                    isNetworkConnected: A,
                    isRtcEnabled: P,
                    rtcStackStatus: j,
                    isPinned: b,
                    isLastPinned: !!D,
                    isFirstItem: !!z
                }), [L, N] = (0, g.useState)(!1), U = (0, w.useTheme)(), W = (0, s.default)(), H = `Chat with ${h} ${m?";Unread":""} ${v?";Muted":""}`, V = (0, g.useCallback)(async (e, t) => {
                    N(!0), await F({
                        target: e,
                        items: t
                    }), N(!1)
                }, [F]), K = (0, g.useCallback)(e => {
                    (0, f.openContextMenuOnKeyShortcut)(e, U, () => V(e, B)), (0, y.isActivateKey)(e) && E && E()
                }, [E, B, U, V]), q = W ? a.default : n.default, G = g.default.createElement(q, {
                    authData: r,
                    compact: o,
                    participants: l,
                    participantStatus: u,
                    listItem: e.listItem,
                    profilePictureUrl: c,
                    presence: d,
                    deliveryStatus: M,
                    lastMessageInfo: S,
                    onJoinCallClick: R,
                    callStatus: T,
                    lastMessageSeenHeadsUrls: e.lastMessageSeenHeadsUrls,
                    selected: x
                });
                return g.default.createElement(O, {
                    "data-automation-id": "chat-cell",
                    telemetryName: "chatCell",
                    compact: o,
                    selected: x,
                    isContextMenuOpen: L,
                    onActivate: null,
                    onKeyDown: K,
                    onClick: E,
                    onDoubleClick: k,
                    onContextMenu: e => V(e, B),
                    "aria-label": H,
                    role: "link",
                    ref: (0, p.default)(t)
                }, o ? g.default.createElement(C.default, {
                    tooltipProps: {
                        children: h
                    },
                    delay: 1e3
                }, G) : G, o && m && g.default.createElement(I, null))
            }));
            t.default = P
        },
        253: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    threadName: t,
                    threadType: r,
                    threadPictureUrl: c,
                    participants: m,
                    participantStatus: w,
                    viewerId: C,
                    presence: E,
                    commands: k,
                    overflowCommands: x,
                    callStatus: R,
                    inNullState: A,
                    onClick: P,
                    caption: j,
                    onJoinCallClick: D,
                    isSidebarEnabled: z
                } = e, F = (0, p.useRef)(null), {
                    showContextMenu: B
                } = (0, v.useContextMenu)(), [L, N] = (0, p.useState)(!1), [U, W] = (0, s.useUserSetting)("showSidebar"), H = (0, i.default)(E), V = (0, a.useTheme)(), {
                    threadTheme: K
                } = (0, u.useThreadTheme)(), {
                    headerIconColor: q
                } = K, G = l.default._("Chat Options", null, {
                    hk: "RtKUx"
                }).toString(), $ = l.default._("Page Options", null, {
                    hk: "4sotm1"
                }).toString(), X = l.default._("Chat Details", null, {
                    hk: "2nX92w"
                }).toString(), J = (0, p.useCallback)(async () => {
                    x && (N(!0), await B({
                        items: x,
                        target: F.current,
                        placement: "bottom-end",
                        contextMenuStyles: {
                            accentColor: K.gradientColors || K.color
                        }
                    }), N(!1))
                }, [x, K, B]), Q = (0, d.isThreadWithPage)(C, r, m);
                return p.default.createElement(M, null, p.default.createElement(M, null, !A && p.default.createElement(O, {
                    onClick: P
                }, !c && m.length > 2 ? p.default.createElement(b.default, {
                    size: "small",
                    viewerId: C,
                    participants: m,
                    presence: H
                }) : p.default.createElement(_.default, {
                    size: "small",
                    viewerId: C,
                    participants: m,
                    presence: H,
                    isDndModeOn: w.doNotDisturbEnabled,
                    profilePictureUrl: c
                }), p.default.createElement(S, null, p.default.createElement(T, {
                    use: "title"
                }, t), p.default.createElement(I, {
                    use: "caption",
                    color: V.colors.base70
                }, j)))), p.default.createElement(O, null, D && null != R && R != o.RtcCallStatus.NONE && p.default.createElement(g.default, {
                    onClick: () => D(R),
                    callStatus: R
                }), k && k.filter(e => e && "separator" !== e.type).map(e => p.default.createElement(y.default, {
                    key: e.id,
                    "aria-label": e.label,
                    title: e.label,
                    telemetryName: e.id,
                    onClick: e.onClick ? () => e.onClick(e) : void 0,
                    icon: e.icon,
                    size: y.RoundButtonSize.Large,
                    use: y.RoundButtonUse.Transparent,
                    disabled: e.disabled,
                    iconColor: q,
                    css: {
                        margin: "0px 4px"
                    }
                })), z && p.default.createElement(y.default, {
                    "aria-label": X,
                    title: X,
                    telemetryName: "chat-header-sidebar",
                    onClick: () => W(!U, {
                        userInitiated: !0
                    }),
                    icon: h.default,
                    size: y.RoundButtonSize.Large,
                    use: y.RoundButtonUse.Transparent,
                    iconColor: q,
                    css: {
                        margin: "0px 4px"
                    },
                    pressed: U
                }), x && (Q ? p.default.createElement(n.default, {
                    "aria-label": $,
                    title: $,
                    telemetryName: "pages-options-overflow",
                    elementRef: F,
                    onClick: J,
                    pressed: !0,
                    color: q
                }) : p.default.createElement(y.default, {
                    "aria-label": G,
                    title: G,
                    telemetryName: "chat-header-overflow",
                    elementRef: F,
                    onClick: J,
                    icon: f.default,
                    size: y.RoundButtonSize.Large,
                    use: y.RoundButtonUse.Transparent,
                    iconColor: q,
                    pressed: L,
                    css: {
                        margin: "0px 4px"
                    }
                }))))
            }, t.ChatHeaderShimmer = function() {
                return p.default.createElement(M, null, p.default.createElement(w.CircleShimmer, {
                    size: 32
                }), p.default.createElement(S, null, p.default.createElement(w.TextShimmer, {
                    width: "60%"
                })))
            };
            var n = x(r(1656)),
                a = r(6),
                o = r(8),
                l = x(r(5)),
                i = x(r(245)),
                s = r(72),
                u = r(41),
                c = x(r(1)),
                d = r(52),
                f = x(r(256)),
                h = x(r(363)),
                p = k(r(0)),
                m = x(r(2)),
                g = x(r(555)),
                y = k(r(22)),
                v = r(66),
                b = x(r(173)),
                _ = x(r(38)),
                w = r(100),
                C = x(r(4));

            function E() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return E = function() {
                    return e
                }, e
            }

            function k(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = E();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function x(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const M = (0, c.default)(m.default)({
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center"
                }),
                S = (0, c.default)(m.default)({
                    flex: 1,
                    margin: "0px 12px"
                }),
                O = (0, c.default)(m.default)({
                    flexDirection: "row",
                    alignItems: "center"
                }),
                T = (0, c.default)(C.default)({
                    userSelect: "text"
                }),
                I = (0, c.default)(C.default)({
                    lineHeight: 1.2
                })
        },
        261: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    quickReplies: t,
                    sendQuickReply: r
                } = e, l = (0, u.useTheme)(), i = (0, f.useRef)(null), [h, p] = (0, f.useState)({
                    start: !0,
                    end: !0
                }), m = (0, f.useCallback)((0, a.throttle)(() => {
                    if (i.current) {
                        const e = i.current.scrollWidth,
                            t = i.current.clientWidth,
                            r = i.current.scrollLeft;
                        p({
                            start: !1,
                            end: !1
                        }), e > t ? 0 === r ? p({
                            start: !0,
                            end: !1
                        }) : r === e - t && p({
                            start: !1,
                            end: !0
                        }) : p({
                            start: !0,
                            end: !0
                        })
                    }
                }, 200), []);
                (0, f.useEffect)(() => {
                    const e = i.current;
                    if (!e) throw new Error("Could not find the containing element for quick reply container.");
                    const t = new window.ResizeObserver(e => {
                        m()
                    });
                    return t.observe(e), () => {
                        t.unobserve(e)
                    }
                }, [m]);
                const b = o.default._("Scroll left", null, {
                        hk: "2rBxLZ"
                    }).toString(),
                    _ = o.default._("Scroll right", null, {
                        hk: "1kFKrP"
                    }).toString();
                return f.default.createElement(g, null, f.default.createElement(y, null, !h.start && f.default.createElement(s.default, {
                    telemetryName: "quickReplyScrollLeft",
                    "aria-label": b,
                    title: b,
                    size: s.RoundButtonSize.Small,
                    icon: c.default,
                    use: s.RoundButtonUse.Transparent,
                    iconColor: l.semanticColors.textPrimary,
                    onClick: () => {
                        i.current && i.current.scrollTo({
                            left: i.current.scrollLeft - 160,
                            behavior: "smooth"
                        })
                    },
                    silentPressedState: !0
                }), f.default.createElement(v, {
                    ref: i,
                    onScroll: m
                }, t.map((e, t) => f.default.createElement(n.default, {
                    key: t,
                    quickReply: e,
                    sendQuickReply: r
                }))), !h.end && f.default.createElement(s.default, {
                    telemetryName: "quickReplyScrollLeft",
                    "aria-label": _,
                    title: _,
                    size: s.RoundButtonSize.Small,
                    icon: d.default,
                    use: s.RoundButtonUse.Transparent,
                    iconColor: l.semanticColors.textPrimary,
                    onClick: () => {
                        i.current && i.current.scrollTo({
                            left: i.current.scrollLeft + 160,
                            behavior: "smooth"
                        })
                    },
                    silentPressedState: !0
                })))
            }, t.CenteringWrapper = void 0;
            var n = m(r(1574)),
                a = r(117),
                o = m(r(5)),
                l = m(r(1)),
                i = m(r(2)),
                s = p(r(22)),
                u = r(6),
                c = m(r(193)),
                d = m(r(161)),
                f = p(r(0));

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }

            function p(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = h();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const g = (0, l.default)(i.default)({
                height: 44,
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                position: "absolute",
                bottom: 0,
                paddingRight: 4,
                paddingLeft: 4
            });
            t.CenteringWrapper = g;
            const y = (0, l.default)(i.default)({
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden"
                }),
                v = (0, l.default)(i.default)({
                    flexDirection: "row",
                    alignItems: "center",
                    overflow: "hidden",
                    flex: 1
                })
        },
        262: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(75)),
                a = s(r(553)),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                l = r(6);

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            var c = (0, o.memo)((function({
                color: e,
                size: t = 24,
                ...r
            }) {
                const i = (0, l.useTheme)();
                return (o.default.createElement(n.default, u({}, r, {
                    css: {
                        ...r.css || {},
                        padding: 0,
                        backgroundColor: "transparent",
                        ":active": {
                            backgroundColor: "transparent"
                        }
                    }
                }), o.default.createElement(a.default, {
                    color: e || i.colors.base80,
                    size: t
                })))
            }));
            t.default = c
        },
        263: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M18 18c-2.554 0-4.75-1.793-4.75-5.695C13.25 9.123 15.25 7 18 7s4.75 2.123 4.75 5.305C22.75 16.207 20.554 18 18 18zM27 26.665c0 .74-.37 1.335-1.06 1.335H10.06C9.37 28 9 27.405 9 26.665 9 22.985 13.165 20 18 20s9 2.985 9 6.665z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        317: function(e, t, r) {
            "use strict";
            var n = r(1511),
                a = r(1512),
                o = r(228),
                l = r(1513),
                i = r(1514),
                s = r(1515);
            e.exports = function(e, t) {
                var r, o, l = {};
                t || (t = {});
                for (o in f) r = t[o], l[o] = null == r ? f[o] : r;
                (l.position.indent || l.position.start) && (l.indent = l.position.indent || [], l.position = l.position.start);
                return function(e, t) {
                    var r, o, l, f, b, _, w, C, E, k, x, M, S, O, T, I, R, A, P, j = t.additional,
                        D = t.nonTerminated,
                        z = t.text,
                        F = t.reference,
                        B = t.warning,
                        L = t.textContext,
                        N = t.referenceContext,
                        U = t.warningContext,
                        W = t.position,
                        H = t.indent || [],
                        V = e.length,
                        K = 0,
                        q = -1,
                        G = W.column || 1,
                        $ = W.line || 1,
                        X = "",
                        J = [];
                    "string" == typeof j && (j = j.charCodeAt(0));
                    I = Z(), C = B ? function(e, t) {
                        var r = Z();
                        r.column += t, r.offset += t, B.call(U, y[e], r, e)
                    } : d, K--, V++;
                    for (; ++K < V;)
                        if (10 === b && (G = H[q] || 1), 38 === (b = e.charCodeAt(K))) {
                            if (9 === (w = e.charCodeAt(K + 1)) || 10 === w || 12 === w || 32 === w || 38 === w || 60 === w || w != w || j && w === j) {
                                X += c(b), G++;
                                continue
                            }
                            for (M = S = K + 1, P = S, 35 === w ? (P = ++M, 88 === (w = e.charCodeAt(P)) || 120 === w ? (O = p, P = ++M) : O = "decimal") : O = h, r = "", x = "", f = "", T = g[O], P--; ++P < V && (w = e.charCodeAt(P), T(w));) f += c(w), O === h && u.call(n, f) && (r = f, x = n[f]);
                            (l = 59 === e.charCodeAt(P)) && (P++, (o = O === h && s(f)) && (r = f, x = o)), A = 1 + P - S, (l || D) && (f ? O === h ? (l && !x ? C(5, 1) : (r !== f && (P = M + r.length, A = 1 + P - M, l = !1), l || (E = r ? 1 : 3, t.attribute ? 61 === (w = e.charCodeAt(P)) ? (C(E, A), x = null) : i(w) ? x = null : C(E, A) : C(E, A))), _ = x) : (l || C(2, A), _ = parseInt(f, m[O]), (Q = _) >= 55296 && Q <= 57343 || Q > 1114111 ? (C(7, A), _ = c(65533)) : _ in a ? (C(6, A), _ = a[_]) : (k = "", v(_) && C(6, A), _ > 65535 && (k += c((_ -= 65536) >>> 10 | 55296), _ = 56320 | 1023 & _), _ = k + c(_))) : O !== h && C(4, A)), _ ? (Y(), I = Z(), K = P - 1, G += P - S + 1, J.push(_), (R = Z()).offset++, F && F.call(N, _, {
                                start: I,
                                end: R
                            }, e.slice(S - 1, P)), I = R) : (f = e.slice(S - 1, P), X += f, G += f.length, K = P - 1)
                        } else 10 === b && ($++, q++, G = 0), b == b ? (X += c(b), G++) : Y();
                    var Q;
                    return J.join("");

                    function Z() {
                        return {
                            line: $,
                            column: G,
                            offset: K + (W.offset || 0)
                        }
                    }

                    function Y() {
                        X && (J.push(X), z && z.call(L, X, {
                            start: I,
                            end: Z()
                        }), X = "")
                    }
                }(e, l)
            };
            var u = {}.hasOwnProperty,
                c = String.fromCharCode,
                d = Function.prototype,
                f = {
                    warning: null,
                    reference: null,
                    text: null,
                    warningContext: null,
                    referenceContext: null,
                    textContext: null,
                    position: {},
                    additional: null,
                    attribute: !1,
                    nonTerminated: !0
                },
                h = "named",
                p = "hexadecimal",
                m = {
                    hexadecimal: 16,
                    decimal: 10
                },
                g = {};
            g.named = i, g.decimal = o, g[p] = l;
            var y = {};

            function v(e) {
                return e >= 1 && e <= 8 || 11 === e || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || 65535 == (65535 & e) || 65534 == (65535 & e)
            }
            y[1] = "Named character references must be terminated by a semicolon", y[2] = "Numeric character references must be terminated by a semicolon", y[3] = "Named character references cannot be empty", y[4] = "Numeric character references cannot be empty", y[5] = "Named character references must be known", y[6] = "Numeric character references cannot be disallowed", y[7] = "Numeric character references cannot be outside the permissible Unicode range"
        },
        318: function(e, t, r) {
            "use strict";
            /*!
             * repeat-string <https://github.com/jonschlinkert/repeat-string>
             *
             * Copyright (c) 2014-2015, Jon Schlinkert.
             * Licensed under the MIT License.
             */
            var n, a = "";
            e.exports = function(e, t) {
                if ("string" != typeof e) throw new TypeError("expected a string");
                if (1 === t) return e;
                if (2 === t) return e + e;
                var r = e.length * t;
                if (n !== e || void 0 === n) n = e, a = "";
                else if (a.length >= r) return a.substr(0, r);
                for (; r > a.length && t > 1;) 1 & t && (a += e), t >>= 1, e += e;
                return a = (a += e).substr(0, r)
            }
        },
        319: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                var t = String(e),
                    r = t.length;
                for (;
                    "\n" === t.charAt(--r););
                return t.slice(0, r + 1)
            }
        },
        320: function(e, t, r) {
            "use strict";
            e.exports = function(e, t, r, n) {
                var a, o, l, i, s, u, c = ["pedantic", "commonmark"],
                    d = c.length,
                    f = e.length,
                    h = -1;
                for (; ++h < f;) {
                    for (a = e[h], o = a[1] || {}, l = a[0], i = -1, u = !1; ++i < d;)
                        if (void 0 !== o[s = c[i]] && o[s] !== r.options[s]) {
                            u = !0;
                            break
                        } if (!u && t[l].apply(r, n)) return !0
                }
                return !1
            }
        },
        321: function(e, t, r) {
            "use strict";
            var n = r(1535);
            e.exports = function(e) {
                return n(e).toLowerCase()
            }
        },
        323: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                isProgressing: e,
                shouldResetAnimation: t,
                duration: r,
                selectedTime: n,
                isSenderViewer: a = !0
            }) {
                const l = (0, o.useRef)(null);
                return (0, o.useEffect)(() => {
                    if (!l.current || null == n || isNaN(n)) return;
                    const e = l.current.getAnimations()[0];
                    e && (e.currentTime = 1e3 * n)
                }, [n]), o.default.createElement(c, {
                    ref: l,
                    isProgressing: e,
                    shouldResetAnimation: t,
                    duration: r,
                    isSenderViewer: a
                })
            };
            var n = r(37),
                a = s(r(1)),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                l = s(r(2));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, n.keyframes)({
                    "0%": {
                        transform: "translateX(-100%)"
                    },
                    "100%": {
                        transform: "translateX(0%)"
                    }
                }),
                c = (0, a.default)(l.default)(e => ({
                    backgroundColor: e.isSenderViewer ? e.theme.semanticColors.textWhite : e.theme.semanticColors.textPrimary,
                    opacity: e.isSenderViewer ? .2 : e.theme.select({
                        light: .04,
                        dark: .06
                    }),
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: 0,
                    top: 0,
                    transition: e.duration && !e.shouldResetAnimation ? `transform calc(${e.isProgressing?1:0}\n        * ${e.duration}s) linear` : "none",
                    animation: e.duration && !e.shouldResetAnimation ? `${u} ${e.duration}s` : "none",
                    animationPlayState: e.isProgressing ? "running" : "paused",
                    animationTimingFunction: "linear",
                    animationFillMode: "forwards",
                    transform: "translateX(-100%)"
                }))
        },
        324: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                height: e,
                isSenderViewer: t,
                width: r,
                ratio: o,
                delay: l
            }) {
                const s = function() {
                        if (!n.default) return 100;
                        return .6 * n.default.window.getBounds().width * .6
                    }(),
                    u = r ? Math.min(r, s) : s,
                    d = o ? o * u : e;
                return (0, a.default)(l) ? i.default.createElement(c, {
                    height: d || s,
                    width: u,
                    isSenderViewer: t,
                    onActivate: null
                }) : i.default.createElement("div", {
                    style: {
                        height: e || s,
                        width: r || s
                    }
                })
            };
            var n = u(r(9)),
                a = u(r(342)),
                o = u(r(1)),
                l = r(100),
                i = u(r(0)),
                s = r(40);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, o.default)(s.MessageBubbleContainer)(e => ({
                height: e.height,
                width: e.width,
                maxWidth: "100%",
                alignItems: "center",
                justifyContent: "center",
                ...(0, l.ShimmerAnimationStyles)(e)
            }))
        },
        325: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.EditableOption = function({
                showTextInput: e,
                uneditedElement: t,
                inputValue: r,
                finalize: n,
                onChange: a
            }) {
                return e ? s.default.createElement(C, {
                    onBlur: () => n(!1),
                    maxLength: 140,
                    enableEmoticonTranslation: !0,
                    autoFocus: !0,
                    textUse: "body-semibold",
                    placeholder: k,
                    enableClearButton: !0,
                    value: r,
                    onChange: a,
                    onKeyPress: e => {
                        e.metaKey || e.altKey || e.shiftKey || e.ctrlKey || "Enter" === e.key && n(!0)
                    }
                }) : t
            }, t.SelectableOption = function({
                enableSelectingOptions: e,
                isSelected: t,
                onActivate: r,
                threadTheme: n,
                iconContainerBackgroundColor: a,
                icon: o,
                onIconClick: l,
                children: c,
                id: d
            }) {
                const f = (0, h.useTheme)();
                return (s.default.createElement(u.default, {
                    css: {
                        flexDirection: "row"
                    },
                    id: d
                }, e && s.default.createElement(M, {
                    isSelected: t,
                    onClick: l,
                    onActivate: r || null,
                    useThreadColor: null == o && t,
                    backgroundColor: a,
                    threadTheme: n
                }, o || t && s.default.createElement(i.default, {
                    size: 14,
                    color: f.select({
                        light: f.semanticColors.bgSurfaceSecondary,
                        dark: f.colors.flatBase50
                    })
                })), s.default.createElement(u.default, {
                    css: {
                        flex: 1
                    }
                }, c)))
            }, t.OptionContent = function({
                option: e,
                optionString: t,
                widthPercentage: r,
                facepileTooltipContent: a,
                onActivate: o
            }) {
                const l = (0, h.useTheme)(),
                    i = (null == e ? void 0 : e.voters) ? e.voters.map(e => (0, n.default)(e.profilePicture)) : (null == e ? void 0 : e.voterProfilePhotos) || [],
                    d = (null == e ? void 0 : e.title) ? s.default.createElement(p.default, {
                        tooltipProps: {
                            children: () => s.default.createElement(m.default, {
                                use: "caption",
                                color: l.semanticColors.textPrimary
                            }, e.title)
                        },
                        delay: 1e3
                    }, s.default.createElement(R, {
                        use: "body-semibold",
                        textAlign: "left"
                    }, (null == e ? void 0 : e.title) || t)) : s.default.createElement(R, {
                        use: "body-semibold",
                        textAlign: "left"
                    }, (null == e ? void 0 : e.title) || t),
                    f = s.default.createElement(c.default, {
                        size: "xxsmall",
                        useCountBubble: !0,
                        displayExtraCountPlus: !0,
                        countBubblePlacement: "right",
                        countBubbleColor: l.colors.base40,
                        profilePictureUrls: i,
                        countBubbleTextColor: l.select({
                            light: l.semanticColors.textSecondary,
                            dark: "rgb(255, 255, 255, 0.7)"
                        })
                    }),
                    g = a ? s.default.createElement(T, {
                        tooltipProps: {
                            children: a,
                            placement: "right",
                            offset: 14,
                            popoverProps: {
                                showArrow: !0,
                                arrowSize: 12
                            }
                        }
                    }, f) : s.default.createElement(O, null, f),
                    y = s.default.createElement(I, {
                        "aria-label": null == e ? void 0 : e.title,
                        onActivate: o || null
                    }, e && e.percentVoted > 0 && s.default.createElement(S, {
                        widthPercentage: r || e.percentVoted
                    }), s.default.createElement(u.default, {
                        css: {
                            flex: "1 1 0px",
                            marginRight: 8
                        }
                    }, d), e && i.length > 0 && g);
                return s.default.createElement(w, null, y)
            }, t.IconContainer = t.cancelButtonString = t.addOptionString = t.TitleContainer = t.PollOptionContainer = t.ScrollContainer = t.Container = void 0;
            var n = y(r(27)),
                a = y(r(5)),
                o = r(105),
                l = y(r(1)),
                i = y(r(114)),
                s = y(r(0)),
                u = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = g();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(2)),
                c = y(r(171)),
                d = y(r(45)),
                f = y(r(60)),
                h = r(6),
                p = y(r(73)),
                m = y(r(4));

            function g() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return g = function() {
                    return e
                }, e
            }

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const v = (0, l.default)(u.default)(e => ({
                borderRadius: 18,
                backgroundColor: e.theme.select({
                    light: e.theme.semanticColors.bgSurfaceSecondary,
                    dark: e.theme.colors.flatBase50
                }),
                padding: 12
            }));
            t.Container = v;
            const b = (0, l.default)(d.default)({
                marginLeft: 18,
                maxHeight: 280
            });

            function _(e) {
                return {
                    borderRadius: 10,
                    backgroundColor: e.select({
                        light: e.semanticColors.bgSurfaceBlurred,
                        dark: e.colors.base30
                    }),
                    marginTop: 8,
                    height: 36,
                    alignItems: "center"
                }
            }
            t.ScrollContainer = b;
            const w = (0, l.default)(u.default)(e => ({
                ..._(e.theme),
                flexDirection: "row",
                paddingLeft: e.centerContent ? 0 : 10,
                justifyContent: e.centerContent ? "center" : void 0
            }));
            t.PollOptionContainer = w;
            const C = (0, l.default)(f.default)(e => ({
                    ..._(e.theme),
                    border: `1px solid ${e.theme.colors.base40}`,
                    flexDirection: "row",
                    paddingLeft: 9
                })),
                E = (0, l.default)(u.FocusableView)({
                    marginBottom: 4,
                    minHeight: 26
                });
            t.TitleContainer = E;
            const k = a.default._("Add option", null, {
                hk: "3SlfTV"
            }).toString();
            t.addOptionString = k;
            const x = a.default._("Cancel", null, {
                hk: "2TXC7C"
            }).toString();
            t.cancelButtonString = x;
            const M = (0, l.default)(u.FocusableView)(e => {
                var t, r;
                return {
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    height: 16,
                    width: 16,
                    borderRadius: "50%",
                    ...e.isSelected ? (0, o.getThreadThemeGradientBackground)(null === (t = e.threadTheme) || void 0 === t ? void 0 : t.gradientColors) : {},
                    backgroundColor: e.backgroundColor ? e.backgroundColor : e.useThreadColor && e.threadTheme ? null === (r = e.threadTheme) || void 0 === r ? void 0 : r.color : e.isSelected ? e.theme.semanticColors.primary : void 0,
                    border: e.isSelected ? void 0 : `2px solid ${e.theme.colors.base50}`,
                    marginRight: 14,
                    marginTop: 8
                }
            });
            t.IconContainer = M;
            const S = (0, l.default)(w)(e => ({
                    height: 28,
                    backgroundColor: e.theme.select({
                        light: e.theme.colors.base40,
                        dark: e.theme.semanticColors.bgFillPrimary
                    }),
                    position: "absolute",
                    paddingRight: 4,
                    left: -5,
                    bottom: -5,
                    width: `${e.widthPercentage}%`,
                    borderRadius: 8
                })),
                O = (0, l.default)(u.default)({
                    marginLeft: "auto",
                    marginRight: 12,
                    flex: "0 0 auto"
                }),
                T = (0, l.default)(p.default)({
                    marginLeft: "auto",
                    marginRight: 12,
                    flex: "0 0 auto"
                }),
                I = (0, l.default)(u.FocusableView)({
                    margin: 4,
                    marginLeft: 0,
                    width: "100%",
                    flexDirection: "row",
                    alignItems: "center"
                }),
                R = (0, l.default)(m.default)({
                    lineHeight: "18px"
                })
        },
        326: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("g", {
                    clipPath: "url(#ReplyIcon__clip0)"
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M8.001 12.09c0 .816-.853 1.303-1.49.85L.757 8.852c-.57-.404-.57-1.296 0-1.7L6.51 3.064c.638-.453 1.491.034 1.491.85v1.92c0 .138.114.25.252.252 4.422.075 7.41 2.15 7.411 7.017 0 .38-.262.647-.66.647-.294 0-.539-.17-.712-.692-.714-2.158-2.792-3.094-6.04-3.14a.248.248 0 00-.25.249L8 12.089z",
                    clipRule: "evenodd"
                })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "ReplyIcon__clip0"
                }, a.default.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h16v16H0z"
                }))))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        330: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSkintoneModifiable = o, t.removeToneModifiers = l, t.applyToneModifier = i, t.getAllTonesForEmoji = function(e) {
                return Object.keys(a).map(t => i(e, t))
            }, t.getModifierFromEmoji = function(e) {
                for (const t of Object.keys(a)) {
                    const r = a[t];
                    if (e.includes(r)) return t
                }
                return "none"
            };
            const n = JSON.parse('{"🎅":true,"🏃":true,"🏄":true,"🏊":true,"🏋":true,"👂":true,"👃":true,"👆":true,"👇":true,"👈":true,"👉":true,"👊":true,"👋":true,"👌":true,"👍":true,"👎":true,"👏":true,"👐":true,"👦":true,"👧":true,"👨":true,"👩":true,"👮":true,"👰":true,"👱":true,"👲":true,"👳":true,"👴":true,"👵":true,"👶":true,"👷":true,"👸":true,"👼":true,"💁":true,"💂":true,"💃":true,"💅":true,"💆":true,"💇":true,"💪":true,"🕵":true,"🖐":true,"🖕":true,"🖖":true,"🙅":true,"🙆":true,"🙇":true,"🙋":true,"🙌":true,"🙍":true,"🙎":true,"🙏":true,"🚣":true,"🚴":true,"🚵":true,"🚶":true,"🛀":true,"🤘":true,"☝":true,"⛹":true,"✊":true,"✋":true,"✌":true,"✍":true}'),
                a = {
                    none: null,
                    light: "🏻",
                    medium_light: "🏼",
                    medium: "🏽",
                    medium_dark: "🏾",
                    dark: "🏿"
                };

            function o(e) {
                return n[l(e)] || !1
            }

            function l(e) {
                let t = e;
                for (const e of Object.values(a)) e && (t = t.replace(e, ""));
                return t
            }

            function i(e, t) {
                if (!o(e)) return e;
                const r = l(e);
                return "none" !== t && t ? r + a[t] : r
            }
        },
        331: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                contactSuggestions: e,
                onSelect: t,
                isLoadingMore: r,
                selectedIndex: o,
                viewerId: i
            }) {
                const f = (0, c.useTheme)(),
                    h = Boolean(r) || null == e,
                    p = e && 0 === e.length && !r,
                    y = p ? 1 : (e || []).length + (h ? 1 : 0);
                return l.default.createElement(m, {
                    height: 48 * y
                }, l.default.createElement(u.default, null, l.default.createElement(g, {
                    role: "listbox",
                    id: "omnipickerlistbox"
                }, p ? l.default.createElement(_, {
                    id: "omnipickernoresults"
                }, l.default.createElement(d.default, {
                    use: "body-semibold"
                }, a.default._("No results", null, {
                    hk: "14Sxgu"
                }))) : l.default.createElement(l.default.Fragment, null, null != e && e.map((e, r) => l.default.createElement(n.default, {
                    id: `omnipickerlistbox-${r}`,
                    role: "option",
                    "aria-selected": r === o,
                    key: e.contactId,
                    viewerId: i,
                    isSelected: r === o,
                    suggestion: e,
                    onActivateSuggestion: () => {
                        t && t(e)
                    }
                })), h && l.default.createElement(b, null, l.default.createElement(w, {
                    size: s.SpinnerSize.Large
                }), l.default.createElement(C, {
                    use: "body-semibold",
                    color: f.semanticColors.textPrimary
                }, a.default._("Searching...", null, {
                    hk: "3yjoTQ"
                })))))))
            }, t.SuggestionRowContainer = t.popoverStyles = void 0;
            var n = h(r(559)),
                a = h(r(5)),
                o = h(r(1)),
                l = h(r(0)),
                i = h(r(2)),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(82)),
                u = h(r(45)),
                c = r(6),
                d = h(r(4));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const p = e => ({
                flex: "1 1 0px",
                backgroundColor: e.semanticColors.bgSurfaceBlurred,
                ...e.effects.blur,
                borderRadius: 8,
                boxShadow: "0px 4px 12px 2px " + e.select({
                    light: e.colors.base30,
                    dark: e.colors.base10
                }),
                width: 240,
                maxHeight: 220,
                transition: "height 300ms ease-in",
                pointerEvents: "auto"
            });
            t.popoverStyles = p;
            const m = (0, o.default)(i.default)(e => ({
                    height: e.height,
                    ...p(e.theme)
                })),
                g = (0, o.default)(i.default)(e => ({
                    boxSizing: "content-box",
                    cursor: "default",
                    flexDirection: "column"
                })),
                y = {
                    flex: 1,
                    flexDirection: "row",
                    padding: "6px 12px",
                    height: 48,
                    minHeight: 48,
                    maxHeight: 48,
                    alignItems: "center"
                },
                v = (0, o.default)(i.default)(e => ({
                    ...y,
                    ...e.isSelected ? {
                        backgroundColor: e.theme.select({
                            light: e.theme.colors.base20,
                            dark: e.theme.colors.base30
                        })
                    } : {}
                }));
            t.SuggestionRowContainer = v;
            const b = (0, o.default)(i.default)(y),
                _ = (0, o.default)(i.default)({
                    padding: 12
                }),
                w = (0, o.default)(s.default)({
                    margin: 0
                }),
                C = (0, o.default)(d.default)(e => ({
                    flex: 1,
                    paddingLeft: 12,
                    alignSelf: "center"
                }))
        },
        339: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    profilePictureUrl: t,
                    participantName: r,
                    subtitle: o,
                    onClick: i,
                    profilePhotoSize: u,
                    clipPathIcon: c,
                    presenceStatus: f,
                    doNotDisturbEnabled: g,
                    children: y,
                    ...v
                } = e, b = (0, a.useTheme)(), _ = l.default.createElement(l.default.Fragment, null, l.default.createElement(n.default, {
                    size: u || "small",
                    profilePictureUrl: t,
                    clipPathIcon: c,
                    presence: f,
                    isDndModeOn: g
                }), l.default.createElement(m, null, l.default.createElement(s.default, {
                    use: "body-semibold"
                }, r), o && l.default.createElement(s.default, {
                    use: "subtext-medium",
                    color: b.colors.base70,
                    wrapText: !1
                }, o)), y);
                if (i) return l.default.createElement(p, d({
                    onActivate: i,
                    "aria-label": r
                }, v), _);
                return (l.default.createElement(h, d({
                    "aria-label": r
                }, v), _))
            };
            var n = c(r(38)),
                a = r(6),
                o = c(r(1)),
                l = c(r(0)),
                i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(2)),
                s = c(r(4));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d() {
                return (d = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const f = ({
                    padded: e = !0
                }) => ({
                    height: 50,
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    paddingRight: e ? 12 : 0
                }),
                h = (0, o.default)(i.default)(f),
                p = (0, o.default)(i.FocusableView)(f),
                m = (0, o.default)(i.default)({
                    flex: 1,
                    marginTop: 0,
                    marginBottom: 0,
                    marginLeft: 15,
                    justifyContent: "center"
                })
        },
        340: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                const [r, o] = (0, a.useState)(e), l = (0, a.useCallback)((0, n.debounce)(o, t), [t]);
                return (0, a.useEffect)(() => {
                    l(e)
                }, [l, e]), r
            };
            var n = r(117),
                a = r(0)
        },
        345: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    profilePictureUrl: t,
                    secondaryPictureUrl: r,
                    participants: i,
                    viewerId: s,
                    presence: u,
                    lastActiveTimestampMs: c
                } = e;
                return (l.default.createElement(l.default.Fragment, null, !t && i.length > 2 && s ? l.default.createElement(a.default, {
                    size: "small",
                    viewerId: s,
                    participants: i,
                    presence: u
                }) : t && r ? l.default.createElement(o.default, {
                    firstProfilePhotoUrl: t,
                    secondProfilePhotoUrl: r,
                    size: "small",
                    presence: u
                }) : l.default.createElement(n.default, {
                    profilePictureUrl: t,
                    size: "small",
                    presence: u,
                    lastActiveTimestampMs: c
                })))
            };
            var n = i(r(38)),
                a = i(r(173)),
                o = i(r(556)),
                l = i(r(0));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        350: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isHotlike = function(e) {
                return e in h
            }, t.Hotlike = function({
                stickerId: e,
                isSenderViewer: t,
                threadTheme: r,
                isReply: n,
                hotLikeContextMenuHandler: a
            }) {
                const o = (0, c.useTheme)();
                return (s.default.createElement(p, {
                    onActivate: null,
                    onKeyDown: e => (0, i.openContextMenuOnKeyShortcut)(e, o, () => a && a(e)),
                    onContextMenu: a,
                    isSenderViewer: t
                }, s.default.createElement(m, {
                    size: h[e],
                    threadTheme: r,
                    isReply: n
                })))
            }, t.default = function(e) {
                const {
                    attachment: {
                        previewHeight: t,
                        previewWidth: r
                    },
                    isSenderViewer: a
                } = e, o = t && t / 2 || 120, l = r && r / 2 || 120;
                return s.default.createElement(s.default.Suspense, {
                    fallback: s.default.createElement(n.default, {
                        height: o,
                        width: l,
                        isSenderViewer: a,
                        delay: 500
                    })
                }, s.default.createElement(g, e))
            }, t.LIKE_STICKER_SIZES = void 0;
            var n = d(r(324)),
                a = d(r(189)),
                o = r(105),
                l = d(r(1)),
                i = r(89),
                s = d(r(0)),
                u = r(40),
                c = r(6);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = `data:image/svg+xml;base64,${btoa('\n  <svg width="36px" height="36px" viewBox="5 4.5 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g id="like" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n          <g id="Group">\n              <path d="M10,30 L7.75,30 C6.625,30 6,27.7515306 6,23.3673469 C6,18.9831633 6.625,16.7346939 7.75,16.7346939 L10,16.7346939 C10.552,16.7346939 11,17.1918367 11,17.755102 L11,28.9795918 C11,29.5428571 10.552,30 10,30 M17,6.02040816 C17,5.44540816 17.4195,5.00255102 18,5 C19.2035,5 22,5.79081633 22,10.6122449 C22,12.2443878 21.8015,13.130102 21.7195,13.7163265 C21.719,13.7183673 21.719,13.7204082 21.7185,13.722449 C21.6865,13.9566327 21.872,14.1647959 22.113,14.1647959 C26.908,14.1647959 29.469,15.4336735 29.469,16.7290816 C29.469,17.3612245 29.211,17.9321429 28.7975,18.3535714 C29.513,18.7591837 30,19.5091837 30,20.3780612 C30,21.3642857 29.4255,22.2045918 28.5475,22.5515306 C28.821,22.9326531 28.9845,23.3954082 28.9845,23.8969388 C28.9845,24.9704082 28.3395,25.8653061 27.3365,26.1438776 C27.4285,26.377551 27.4845,26.6290816 27.4845,26.8943878 C27.4845,28.0459184 25.5485,28.9795918 21,28.9795918 C17.675,28.9795918 15.3815,28.3857143 14.5,27.9591837 C13.851,27.6454082 13,27.0770408 13,25.4081633 L13,18.7755102 C13,15.0403061 17.25,13.7760204 17.25,10.1020408 C17.25,7.78826531 17,6.81326531 17,6.02040816" id="Fill-17" fill="#000000"></path>\n          </g>\n      </g>\n  </svg>\n  ')}`,
                h = {
                    227878347358915: 82,
                    369239263222822: 36,
                    369239343222814: 84,
                    369239383222810: 137
                };
            t.LIKE_STICKER_SIZES = h;
            const p = (0, l.default)(u.UnroundedCornerMediaContainer)({
                    padding: "6px 0 6px 0"
                }),
                m = l.default.div(e => ({
                    width: e.size,
                    height: e.size,
                    backgroundColor: e.threadTheme.color,
                    WebkitMask: `url(${f})`,
                    WebkitMaskSize: "contain",
                    opacity: e.isReply ? .5 : 1,
                    ...(0, o.getThreadThemeGradientBackground)(e.threadTheme.gradientColors)
                }));

            function g({
                isSenderViewer: e,
                attachment: t,
                sourceUrl: r,
                bubbleContextMenuHandler: n
            }) {
                const o = (0, a.default)({
                        url: r,
                        mediaType: "image"
                    }),
                    l = (0, c.useTheme)();
                if (!o) return null;
                const u = t.previewHeight && t.previewHeight / 2 || 120,
                    d = t.previewWidth && t.previewWidth / 2 || 120;
                return s.default.createElement(p, {
                    onActivate: null,
                    onKeyDown: e => (0, i.openContextMenuOnKeyShortcut)(e, l, () => null != n && n(e, t)),
                    isSenderViewer: e,
                    onContextMenu: e => {
                        n && n(e, t)
                    }
                }, s.default.createElement("img", {
                    src: o,
                    style: {
                        height: u,
                        width: d
                    }
                }))
            }
        },
        351: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TextMessage = P, t.TextWithAnnotations = j, t.getURLRanges = D, t.default = t.Blockquote = void 0;
            var n = r(1612),
                a = O(r(548)),
                o = O(r(187)),
                l = r(87),
                i = O(r(59)),
                s = r(8),
                u = O(r(9)),
                c = r(101),
                d = r(21),
                f = r(32),
                h = O(r(1)),
                p = r(89),
                m = r(632),
                g = r(28),
                y = r(23),
                v = r(49),
                b = r(11),
                _ = S(r(0)),
                w = r(2),
                C = r(66),
                E = r(40),
                k = r(6),
                x = S(r(4));

            function M() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return M = function() {
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
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function O(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const T = (0, h.default)(x.default)(e => ({
                    color: e.messageTextColor ? e.messageTextColor : e.isSenderViewer ? e.theme.select({
                        highContrast: {
                            light: e.theme.semanticColors.textPrimary,
                            dark: e.theme.semanticColors.textWhite
                        },
                        light: e.theme.semanticColors.textWhite,
                        dark: e.theme.semanticColors.textWhite
                    }) : void 0,
                    opacity: e.isForwardedMessage ? e.isSenderViewer ? .7 : e.theme.select({
                        light: .5,
                        dark: .7
                    }) : 1,
                    overflowWrap: "break-word",
                    cursor: "text",
                    display: "inline"
                })),
                I = (0, h.default)(w.FocusableView)(e => ({
                    color: e.isSenderViewer ? e.theme.semanticColors.textWhite : void 0,
                    textDecorationLine: "underline",
                    display: "inline",
                    cursor: "pointer"
                })),
                R = (0, h.default)(w.FocusableView)({}).withComponent("a", {
                    target: "evperd80",
                    label: "MentionLink"
                }),
                A = h.default.blockquote(e => {
                    const t = e.theme.select({
                        light: e.isSenderViewer ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.34)",
                        dark: e.isSenderViewer ? "rgba(255, 255, 255, 0.7)" : "rgba(255, 255, 255, 0.5)"
                    });
                    return {
                        margin: "4px 0",
                        paddingLeft: 10,
                        color: t,
                        position: "relative",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            opacity: .3,
                            top: 0,
                            bottom: 0,
                            width: 3,
                            left: 1,
                            borderRadius: "999em",
                            backgroundColor: t
                        }
                    }
                });

            function P({
                isFirst: e,
                isLast: t,
                isSenderViewer: r,
                isForwardedMessage: n,
                messageSearchQuery: a,
                isSelectedMessageSearchResult: o,
                isEmployee: i,
                messageText: u,
                messageId: d,
                hasAttachment: f,
                mentionIds: h,
                mentionLengths: m,
                mentionOffsets: g,
                isNetworkConnected: y,
                isRtcEnabled: v,
                rtcStackStatus: b,
                participants: w,
                userID: x,
                threadKey: M,
                onUrlClick: S,
                bubbleContextMenuHandler: O,
                threadTheme: I,
                border: R
            }) {
                const {
                    showContextMenu: P
                } = (0, C.useContextMenu)(), z = (0, k.useTheme)(), F = (0, _.useCallback)(async (e, t, r) => {
                    const n = t === x,
                        a = w.find(e => e.contactId === t);
                    a && t && P({
                        target: e.currentTarget,
                        items: [(0, c.getMentionFullNameItem)(r), !n && t && r ? (0, c.getMessageUser)(x, t, r) : null, !n && t ? (0, c.getAudioCallMenuItemForUser)(x, t, {
                            isNetworkConnected: y,
                            isRtcEnabled: v,
                            rtcStackStatus: b,
                            participants: [a]
                        }, s.OutgoingCallSource.CONTEXT_MENU, !0) : null, !n && t ? (0, c.getVideoCallMenuItemForUser)(x, t, {
                            isNetworkConnected: y,
                            isRtcEnabled: v,
                            rtcStackStatus: b,
                            participants: [a]
                        }, s.OutgoingCallSource.CONTEXT_MENU, !0) : null, (0, c.getViewProfileMenuItem)(a)]
                    })
                }, [x, y, v, b, w, P]), B = (0, _.useCallback)(e => {
                    O && O(e, u)
                }, [O, u]), [L, N] = (0, _.useState)(() => []);
                (0, _.useEffect)(() => {
                    const e = window.requestIdleCallback(() => {
                        const e = D(u);
                        (0, l.caution_deepEquals)(e, L) || N(e)
                    });
                    return () => {
                        window.cancelIdleCallback(e)
                    }
                }, [u, f]);
                const U = _.default.createElement(T, {
                    use: "body",
                    wrapText: !0,
                    id: d,
                    messageTextColor: r ? I.messageTextColor : I.incomingMessageTextColor,
                    isSenderViewer: r,
                    isForwardedMessage: n
                }, _.default.createElement(j, {
                    messageText: u,
                    isSenderViewer: r,
                    isEmployee: i,
                    mentionIds: h,
                    mentionLengths: m,
                    mentionOffsets: g,
                    participants: w,
                    onMentionClick: F,
                    onUrlClick: S,
                    onContextMenu: O,
                    urlRanges: L,
                    messageSearchQuery: a,
                    isSelectedMessageSearchResult: o,
                    userID: x,
                    threadKey: M
                }));
                return (_.default.createElement(E.MessageBubbleContainer, {
                    isSenderViewer: r,
                    threadTheme: I,
                    border: R,
                    isFirst: e,
                    isLast: t,
                    onKeyDown: e => (0, p.openContextMenuOnKeyShortcut)(e, z, () => null != O && O(e, u)),
                    onActivate: null,
                    onContextMenu: B
                }, n ? _.default.createElement(A, {
                    isSenderViewer: r
                }, U) : U))
            }

            function j({
                messageText: e,
                isSenderViewer: t,
                mentionIds: r,
                mentionLengths: l,
                mentionOffsets: s,
                participants: c,
                onMentionClick: d,
                onUrlClick: f,
                onContextMenu: h,
                urlRanges: p,
                isEmployee: m,
                messageSearchQuery: g,
                isSelectedMessageSearchResult: y,
                userID: v,
                threadKey: b
            }) {
                const w = function(e, t, r, n) {
                    if (!e || !t || !r) return [];
                    const a = [];
                    if (e && t && r) {
                        const l = e.split(","),
                            i = r.split(",").map(Number),
                            s = t.split(",").map(Number);
                        l.forEach((e, t) => {
                            const r = n && n.find(t => t.contactId === e);
                            a.push({
                                startIndex: i[t],
                                length: s[t],
                                annoType: "mention",
                                text: l[t],
                                href: (0, o.default)(u.default.platform.hostname, e),
                                mentionId: e,
                                name: r && r.name
                            })
                        })
                    }
                    return a
                }(r, l, s, c);
                return function(e, t, r, n, o, l, s, u, c, d) {
                    let f = 0,
                        h = [];
                    t.sort((function(e, t) {
                        return e.startIndex - t.startIndex
                    })), t.forEach((t, p) => {
                        const m = e.slice(f, t.startIndex),
                            g = t.startIndex + t.length,
                            y = e.slice(t.startIndex, g),
                            v = d ? z(m, c) : [m],
                            b = d ? z(y, c) : [y];
                        h.push(...v), "mention" === t.annoType ? h.push(_.default.createElement(R, {
                            key: p,
                            onClick: s ? e => {
                                e.stopPropagation(), t.href && s(e, t.mentionId, t.name)
                            } : void 0
                        }, _.default.createElement(x.MentionText, {
                            isSenderViewer: o,
                            isMentionedSelf: (0, i.default)({
                                workchat: t.mentionId === r || t.mentionId === n,
                                messenger: !1
                            })
                        }, b))) : "formatting" === t.annoType ? h.push(_.default.createElement(a.default, {
                            format: t.format,
                            key: p,
                            isSenderViewer: o
                        }, t.text)) : h.push(_.default.createElement(I, {
                            key: p,
                            onActivate: e => {
                                e.stopPropagation(), t.href && l && l(t.href)
                            },
                            onContextMenu: r => {
                                r.stopPropagation(), u && u(r, e, t.href)
                            },
                            isSenderViewer: o
                        }, b)), f = g
                    });
                    const p = e.slice(f);
                    d ? h.push(...z(p, c)) : h.push(p);
                    return (_.default.createElement(_.default.Fragment, null, h))
                }(e, (0, n.messageAnnotationRanges)(e, p, w, m), v, b, t, f, d, h, g, y)
            }

            function D(e) {
                const t = (0, m.getURLMatches)(e);
                return null != t ? t.map(e => ({
                    startIndex: e.index,
                    length: e.raw.length,
                    href: e.url,
                    annoType: "url"
                })) : []
            }

            function z(e, t) {
                if (!t) return [e];
                let r;
                try {
                    r = new RegExp(t, "gi")
                } catch (t) {
                    return [e]
                }
                const n = [];
                let a, o = 0;
                for (; a = r.exec(e);) {
                    const r = a.index,
                        l = r + t.length;
                    n.push(e.substring(o, r)), n.push(_.default.createElement(x.HighlightedText, {
                        key: `regexMatch:${e},query=${t},index=${r}`
                    }, e.substring(r, l))), o = l
                }
                return n.push(e.substring(o)), n
            }
            t.Blockquote = A;
            var F = (0, b.connect)((function(e, {
                messageId: t,
                threadKey: r
            }) {
                const n = (0, d.requireAuthenticationData)(e);
                return {
                    participants: (0, y.getParticipantListForThread)(e, r),
                    userID: n.userID,
                    isNetworkConnected: (0, g.isAppNetworkConnected)(e),
                    isRtcEnabled: (0, v.isRtcEnabled)(e),
                    rtcStackStatus: (0, v.getRtcStackStatus)(e),
                    isEmployee: (0, f.isGatekeeperEnabled)(e, "is_employee"),
                    messageSearchQuery: (0, y.getMessageSearchQuery)(e, r) || void 0,
                    isSelectedMessageSearchResult: t === (0, y.getSelectedMessageSearchResultId)(e, r) || !1
                }
            }))(P);
            t.default = F
        },
        352: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-1.062-18.002a1.065 1.065 0 012.124 0l.371 5.938a.5.5 0 00.217.381l3.654 2.502a1.08 1.08 0 01-1.077 1.865L17.462 19.4a1.495 1.495 0 01-.752-.634 1.49 1.49 0 01-.198-.96l.426-6.809z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        362: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(8),
                a = r(23),
                o = r(41),
                l = h(r(1)),
                i = h(r(2)),
                s = r(35),
                u = r(11),
                c = h(r(0)),
                d = h(r(116)),
                f = h(r(4));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const p = (0, l.default)(i.default)({
                    margin: "auto",
                    textAlign: "center",
                    flexDirection: "row",
                    padding: 5
                }),
                m = (0, l.default)(f.default)(e => {
                    var t;
                    return {
                        color: (null === (t = e.threadTheme) || void 0 === t ? void 0 : t.adminTextColor) || e.theme.colors.base70,
                        textTransform: e.capitalize ? "uppercase" : void 0
                    }
                }),
                g = (0, l.default)(f.default)({
                    display: "inline",
                    paddingLeft: 3
                }),
                y = (0, l.default)(d.default)({
                    textDecoration: "none"
                }),
                v = (0, l.default)(f.default)({
                    display: "inline",
                    color: "inherit"
                });
            const b = {
                openPoll: a.InboxActions.polls.openPoll
            };
            var _ = (0, u.connect)(null, b)((function({
                threadKey: e,
                messageText: t,
                capitalize: r,
                adminMsgCTAId: a,
                adminMsgCTATitle: l,
                adminMsgCTAType: i,
                openPoll: u
            }) {
                const {
                    windowKey: d
                } = (0, s.useWindowContext)(), {
                    threadTheme: f
                } = (0, o.useThreadTheme)();
                return c.default.createElement(p, null, c.default.createElement(m, {
                    use: "caption",
                    wrapText: !0,
                    capitalize: r,
                    threadTheme: f
                }, t, null != a && l && i === n.AdminMessageCTAType.ADMIN_MSG_WEB_URL && c.default.createElement(y, {
                    "aria-label": l,
                    href: "",
                    hideUnderline: !0,
                    displayAsLink: !0
                }, c.default.createElement(v, {
                    use: "caption"
                }, l)), null != a && i && e && i === n.AdminMessageCTAType.ADMIN_MSG_POLL_DETAILS && c.default.createElement(g, {
                    "aria-label": null != l ? l : void 0,
                    use: "caption-semibold",
                    onClick: () => u(e, a, d)
                }, l)))
            }));
            t.default = _
        },
        363: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm1.75-16.25a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM16.5 17.5a1 1 0 011-1h1a1 1 0 011 1V24a1 1 0 01-1 1h-1a1 1 0 01-1-1v-6.5z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        364: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPlayingAudioFbid = function(e, t) {
                if (e.audioVideo.audio[t] && e.audioVideo.audio[t].playingAudioFbid) return e.audioVideo.audio[t].playingAudioFbid;
                return null
            }, t.getAudioStateForFbid = function(e, t, r) {
                if (e.audioVideo.audio[t] && e.audioVideo.audio[t].audioState[r]) return e.audioVideo.audio[t].audioState[r];
                return n
            }, t.getVideoInfo = function(e, t, r) {
                if (r && e.audioVideo.video[t] && e.audioVideo.video[t][r.attachmentFbid]) return e.audioVideo.video[t][r.attachmentFbid];
                return null
            };
            const n = {
                state: r(170).AudioStates.Loading
            }
        },
        365: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.FileSizeLabel = j, t.RestartButton = B, t.DownloadStatusIndicator = L, t.FileMessageBase = N, t.default = t.FileMessageIcon = void 0;
            var n = O(r(27)),
                a = O(r(5)),
                o = O(r(9)),
                l = r(259),
                i = O(r(1)),
                s = r(6),
                u = r(89),
                c = O(r(1598)),
                d = O(r(276)),
                f = O(r(631)),
                h = O(r(1599)),
                p = O(r(1600)),
                m = O(r(251)),
                g = O(r(545)),
                y = r(197),
                v = r(527),
                b = r(11),
                _ = S(r(0)),
                w = O(r(2)),
                C = S(r(22)),
                E = r(40),
                k = r(203),
                x = O(r(4));

            function M() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return M = function() {
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
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function O(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function T() {
                return (T = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const I = (0, i.default)(w.default)(e => ({
                    flexDirection: "row",
                    minWidth: k.MIN_CONTAINER_WIDTH,
                    overflow: "hidden",
                    margin: 0,
                    padding: 12,
                    alignItems: "center"
                })),
                R = (0, i.default)(w.default)({
                    justifyContent: "center",
                    flex: 1
                }),
                A = (0, i.default)(w.default)(e => ({
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    color: "white",
                    padding: 4,
                    marginRight: 12,
                    backgroundColor: e.color || e.theme.colors.base50
                })),
                P = e => {
                    const t = (0, s.useTheme)(),
                        r = {
                            compressedFiles: t.colors.blueGrey75,
                            wordDocs: t.colors.steel,
                            powerpointDocs: t.colors.coral,
                            excelDocs: t.colors.green,
                            photoshop: t.colors.sky,
                            text: t.colors.sky,
                            openDocument: t.colors.blueGrey75,
                            pdf: t.colors.scarlet,
                            codeLike: t.colors.blueGrey75
                        },
                        n = {
                            "application/gzip": r.compressedFiles,
                            "application/msword": r.wordDocs,
                            "application/pdf": r.pdf,
                            "application/photoshop": r.photoshop,
                            "application/psd": r.photoshop,
                            "application/vnd.ms-excel": r.excelDocs,
                            "application/vnd.ms-powerpoint": r.powerpointDocs,
                            "application/vnd.oasis.opendocument.spreadsheet": r.openDocument,
                            "application/vnd.oasis.opendocument.text": r.openDocument,
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation": r.powerpointDocs,
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": r.excelDocs,
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document": r.wordDocs,
                            "application/x-7z-compressed": r.compressedFiles,
                            "application/x-photoshop": r.photoshop,
                            "application/x-rar-compressed": r.compressedFiles,
                            "application/x-tar": r.compressedFiles,
                            "image/psd": r.photoshop,
                            "image/vnd.adobe.photoshop": r.photoshop,
                            "text/html": r.codeLike,
                            "text/plain": r.text
                        },
                        a = {
                            "7z": r.compressedFiles,
                            doc: r.wordDocs,
                            docx: r.wordDocs,
                            gzip: r.compressedFiles,
                            pdf: r.pdf,
                            ppt: r.powerpointDocs,
                            pptx: r.powerpointDocs,
                            psd: r.photoshop,
                            rar: r.compressedFiles,
                            sketch: t.colors.honey,
                            tar: r.compressedFiles,
                            txt: r.text,
                            xls: r.excelDocs,
                            xlsx: r.excelDocs,
                            zip: r.compressedFiles
                        },
                        o = e.attachment.playableUrlMimeType,
                        l = e.attachment.filename,
                        i = l.includes(".") ? l.split(".").pop() : null,
                        u = n[o] || i && a[i] || void 0;
                    return _.default.createElement(A, {
                        color: u
                    }, _.default.createElement(d.default, null))
                };

            function j(e) {
                const t = (0, s.useTheme)(),
                    r = parseInt(e.fileSize);
                if (!r) return null;
                const n = t.select({
                        mac: 1e3,
                        windows: 1024
                    }),
                    a = n ** 2,
                    o = (e, t = {}) => {
                        try {
                            return new Intl.NumberFormat(window.lang, {
                                useGrouping: !0,
                                style: "decimal",
                                maximumFractionDigits: 1,
                                ...t
                            }).format(e)
                        } catch {
                            return Math.round(e)
                        }
                    };
                let l = null;
                return l = r < n ? `${r} B` : r < a ? `${o(r/n,{style:"integer"})} KB` : `${o(r/a)} MB`, _.default.createElement(x.default, {
                    color: t.semanticColors.textSecondary
                }, l)
            }
            t.FileMessageIcon = P;
            const D = (0, i.default)(w.default)(e => ({
                    flexDirection: "row",
                    marginLeft: 12
                })),
                z = (0, i.default)(w.default)(e => ({
                    width: 20,
                    height: 20,
                    marginRight: 12
                })),
                F = (0, i.default)(w.default)(e => ({
                    width: 24,
                    height: 24,
                    boxSizing: "content-box"
                }));

            function B(e) {
                const t = (0, s.useTheme)(),
                    {
                        attachment: r,
                        downloadStatus: o,
                        requestDownload: l
                    } = e,
                    i = (0, n.default)(r.playableUrlInfo),
                    u = (0, _.useCallback)(() => {
                        l(r.attachmentFbid, i)
                    }, [l, r.attachmentFbid, i]);
                return "errored" === o ? _.default.createElement(z, null, _.default.createElement(C.default, {
                    "aria-label": a.default._("Restart Download", null, {
                        hk: "c1EgK"
                    }).toString(),
                    size: C.RoundButtonSize.Small,
                    telemetryName: "restartDownload",
                    buttonColor: t.select({
                        dark: t.colors.base50,
                        light: t.colors.base10
                    }),
                    icon: p.default,
                    iconColor: t.semanticColors.textPrimary,
                    iconSize: 20,
                    onClick: u
                })) : null
            }

            function L(e) {
                const t = (0, s.useTheme)(),
                    r = t.select({
                        dark: t.colors.base50,
                        light: t.colors.base10
                    }),
                    {
                        attachment: l,
                        cancelDownload: i,
                        download: u,
                        downloadStatus: d,
                        requestDownload: p
                    } = e,
                    y = (0, n.default)(l.playableUrlInfo),
                    b = (0, _.useCallback)(() => {
                        u && u.localFile && o.default.downloads.revealInFinder(u.localFile.path)
                    }, [u]),
                    w = (0, _.useCallback)(() => {
                        p(l.attachmentFbid, y)
                    }, [p, l.attachmentFbid, y]),
                    E = (0, _.useCallback)(() => {
                        i(y)
                    }, [i, y]);
                return "errored" === d ? _.default.createElement(m.default, {
                    width: 24,
                    color: t.colors.red
                }) : null === d ? _.default.createElement(C.default, {
                    "aria-label": a.default._("Download File", null, {
                        hk: "19ICvx"
                    }).toString(),
                    size: C.RoundButtonSize.Small,
                    telemetryName: "startDownload",
                    buttonColor: r,
                    icon: f.default,
                    iconSize: 18,
                    onClick: w
                }) : u && "running" === d ? _.default.createElement(v.CircularProgressbarWithChildren, {
                    value: u.progress,
                    minValue: 0,
                    maxValue: 1,
                    strokeWidth: 10,
                    background: !0,
                    styles: (0, v.buildStyles)({
                        strokeLinecap: "round",
                        pathTransitionDuration: .5,
                        trailColor: r,
                        pathColor: t.semanticColors.primary,
                        backgroundColor: r
                    })
                }, _.default.createElement(C.default, {
                    "aria-label": a.default._("Cancel Download", null, {
                        hk: "3piCwJ"
                    }).toString(),
                    telemetryName: "cancelButton",
                    icon: g.default,
                    iconSize: 12,
                    size: C.RoundButtonSize.XSmall,
                    css: {
                        marginTop: -10
                    },
                    buttonColor: r,
                    iconColor: t.semanticColors.primary,
                    onClick: E
                })) : "completed" === d ? _.default.createElement(C.default, {
                    "aria-label": t.select({
                        windows: a.default._("Reveal file in Explorer", null, {
                            hk: "14hQcl"
                        }).toString(),
                        mac: a.default._("Reveal file in Finder", null, {
                            hk: "IPFLo"
                        }).toString()
                    }),
                    size: C.RoundButtonSize.Small,
                    onClick: b,
                    telemetryName: "revealInFinder",
                    buttonColor: r,
                    icon: t.select({
                        windows: h.default,
                        mac: c.default
                    }),
                    iconSize: 18
                }) : null
            }

            function N({
                isSenderViewer: e,
                attachment: t,
                download: r,
                downloadStatus: n,
                isFirst: a,
                isLast: o,
                bubbleContextMenuHandler: l,
                requestDownload: i,
                cancelDownload: c
            }) {
                const d = t.filename,
                    f = t.filesize,
                    h = (0, s.useTheme)();
                return _.default.createElement(E.RoundedCornerMediaContainer, {
                    isSenderViewer: e,
                    isFirst: a,
                    isLast: o,
                    onKeyDown: e => (0, u.openContextMenuOnKeyShortcut)(e, h, () => null != l && l(e, t)),
                    onActivate: e => {
                        e.stopPropagation()
                    },
                    onContextMenu: e => {
                        l && l(e, t)
                    }
                }, _.default.createElement(w.default, null, _.default.createElement(I, null, _.default.createElement(P, {
                    attachment: t
                }), _.default.createElement(R, null, _.default.createElement(x.default, {
                    use: "body-semibold",
                    numberOfLines: 1
                }, d), _.default.createElement(j, {
                    fileSize: f
                })), _.default.createElement(D, null, _.default.createElement(B, {
                    attachment: t,
                    downloadStatus: n,
                    requestDownload: i
                }), _.default.createElement(F, null, _.default.createElement(L, {
                    attachment: t,
                    download: r,
                    downloadStatus: n,
                    requestDownload: i,
                    cancelDownload: c
                }))))))
            }
            const U = {
                requestDownload: y.DownloadsActions.requestDownload,
                cancelDownload: y.DownloadsActions.cancelDownload
            };
            var W = (0, b.connect)(null, U)((function(e) {
                const t = (0, _.useCallback)(t => (0, l.getDownloadState)(t, e.attachment.attachmentFbid), [e.attachment.attachmentFbid]),
                    r = (0, _.useCallback)(t => (0, l.getDownloadStatus)(t, e.attachment.attachmentFbid), [e.attachment.attachmentFbid]),
                    n = (0, b.useSelector)(t),
                    a = (0, b.useSelector)(r);
                return _.default.createElement(N, T({}, e, {
                    download: n,
                    downloadStatus: a
                }))
            }));
            t.default = W
        },
        366: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = (0, r(0).createContext)({
                selectedMessageOTID: "",
                setSelectedMessageOTID: () => {},
                clearSelectedMessageOTID: () => {}
            });
            t.default = n
        },
        367: function(e, t, r) {
            "use strict";
            r.r(t),
                function(e) {
                    var n = r(0);

                    function a(t) {
                        var r;
                        r = "undefined" != typeof window ? window : "undefined" != typeof self ? self : e;
                        var n, a, o = "undefined" != typeof document && document.attachEvent;
                        if (!o) {
                            var l = (a = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function(e) {
                                    return r.setTimeout(e, 20)
                                }, function(e) {
                                    return a(e)
                                }),
                                i = (n = r.cancelAnimationFrame || r.mozCancelAnimationFrame || r.webkitCancelAnimationFrame || r.clearTimeout, function(e) {
                                    return n(e)
                                }),
                                s = function(e) {
                                    var t = e.__resizeTriggers__,
                                        r = t.firstElementChild,
                                        n = t.lastElementChild,
                                        a = r.firstElementChild;
                                    n.scrollLeft = n.scrollWidth, n.scrollTop = n.scrollHeight, a.style.width = r.offsetWidth + 1 + "px", a.style.height = r.offsetHeight + 1 + "px", r.scrollLeft = r.scrollWidth, r.scrollTop = r.scrollHeight
                                },
                                u = function(e) {
                                    if (!(e.target.className.indexOf("contract-trigger") < 0 && e.target.className.indexOf("expand-trigger") < 0)) {
                                        var t = this;
                                        s(this), this.__resizeRAF__ && i(this.__resizeRAF__), this.__resizeRAF__ = l((function() {
                                            (function(e) {
                                                return e.offsetWidth != e.__resizeLast__.width || e.offsetHeight != e.__resizeLast__.height
                                            })(t) && (t.__resizeLast__.width = t.offsetWidth, t.__resizeLast__.height = t.offsetHeight, t.__resizeListeners__.forEach((function(r) {
                                                r.call(t, e)
                                            })))
                                        }))
                                    }
                                },
                                c = !1,
                                d = "",
                                f = "animationstart",
                                h = "Webkit Moz O ms".split(" "),
                                p = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                                m = document.createElement("fakeelement");
                            if (void 0 !== m.style.animationName && (c = !0), !1 === c)
                                for (var g = 0; g < h.length; g++)
                                    if (void 0 !== m.style[h[g] + "AnimationName"]) {
                                        d = "-" + h[g].toLowerCase() + "-", f = p[g], c = !0;
                                        break
                                    } var y = "resizeanim",
                                v = "@" + d + "keyframes " + y + " { from { opacity: 0; } to { opacity: 0; } } ",
                                b = d + "animation: 1ms " + y + "; "
                        }
                        return {
                            addResizeListener: function(e, n) {
                                if (o) e.attachEvent("onresize", n);
                                else {
                                    if (!e.__resizeTriggers__) {
                                        var a = e.ownerDocument,
                                            l = r.getComputedStyle(e);
                                        l && "static" == l.position && (e.style.position = "relative"),
                                            function(e) {
                                                if (!e.getElementById("detectElementResize")) {
                                                    var r = (v || "") + ".resize-triggers { " + (b || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                                                        n = e.head || e.getElementsByTagName("head")[0],
                                                        a = e.createElement("style");
                                                    a.id = "detectElementResize", a.type = "text/css", null != t && a.setAttribute("nonce", t), a.styleSheet ? a.styleSheet.cssText = r : a.appendChild(e.createTextNode(r)), n.appendChild(a)
                                                }
                                            }(a), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = a.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), s(e), e.addEventListener("scroll", u, !0), f && (e.__resizeTriggers__.__animationListener__ = function(t) {
                                                t.animationName == y && s(e)
                                            }, e.__resizeTriggers__.addEventListener(f, e.__resizeTriggers__.__animationListener__))
                                    }
                                    e.__resizeListeners__.push(n)
                                }
                            },
                            removeResizeListener: function(e, t) {
                                if (o) e.detachEvent("onresize", t);
                                else if (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t), 1), !e.__resizeListeners__.length) {
                                    e.removeEventListener("scroll", u, !0), e.__resizeTriggers__.__animationListener__ && (e.__resizeTriggers__.removeEventListener(f, e.__resizeTriggers__.__animationListener__), e.__resizeTriggers__.__animationListener__ = null);
                                    try {
                                        e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__)
                                    } catch (e) {}
                                }
                            }
                        }
                    }
                    var o = function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        },
                        l = function() {
                            function e(e, t) {
                                for (var r = 0; r < t.length; r++) {
                                    var n = t[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                }
                            }
                            return function(t, r, n) {
                                return r && e(t.prototype, r), n && e(t, n), t
                            }
                        }(),
                        i = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = arguments[t];
                                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                            }
                            return e
                        },
                        s = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        },
                        u = function(e) {
                            function t() {
                                var e, r, n;
                                o(this, t);
                                for (var a = arguments.length, l = Array(a), i = 0; i < a; i++) l[i] = arguments[i];
                                return r = n = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), n.state = {
                                    height: n.props.defaultHeight || 0,
                                    width: n.props.defaultWidth || 0
                                }, n._onResize = function() {
                                    var e = n.props,
                                        t = e.disableHeight,
                                        r = e.disableWidth,
                                        a = e.onResize;
                                    if (n._parentNode) {
                                        var o = n._parentNode.offsetHeight || 0,
                                            l = n._parentNode.offsetWidth || 0,
                                            i = window.getComputedStyle(n._parentNode) || {},
                                            s = parseInt(i.paddingLeft, 10) || 0,
                                            u = parseInt(i.paddingRight, 10) || 0,
                                            c = parseInt(i.paddingTop, 10) || 0,
                                            d = parseInt(i.paddingBottom, 10) || 0,
                                            f = o - c - d,
                                            h = l - s - u;
                                        (!t && n.state.height !== f || !r && n.state.width !== h) && (n.setState({
                                            height: o - c - d,
                                            width: l - s - u
                                        }), a({
                                            height: o,
                                            width: l
                                        }))
                                    }
                                }, n._setRef = function(e) {
                                    n._autoSizer = e
                                }, s(n, r)
                            }
                            return function(e, t) {
                                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                                e.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: e,
                                        enumerable: !1,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                            }(t, e), l(t, [{
                                key: "componentDidMount",
                                value: function() {
                                    var e = this.props.nonce;
                                    this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode, this._detectElementResize = a(e), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), this._onResize())
                                }
                            }, {
                                key: "componentWillUnmount",
                                value: function() {
                                    this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize)
                                }
                            }, {
                                key: "render",
                                value: function() {
                                    var e = this.props,
                                        t = e.children,
                                        r = e.className,
                                        a = e.disableHeight,
                                        o = e.disableWidth,
                                        l = e.style,
                                        s = this.state,
                                        u = s.height,
                                        c = s.width,
                                        d = {
                                            overflow: "visible"
                                        },
                                        f = {},
                                        h = !1;
                                    return a || (0 === u && (h = !0), d.height = 0, f.height = u), o || (0 === c && (h = !0), d.width = 0, f.width = c), Object(n.createElement)("div", {
                                        className: r,
                                        ref: this._setRef,
                                        style: i({}, d, l)
                                    }, !h && t(f))
                                }
                            }]), t
                        }(n.PureComponent);
                    u.defaultProps = {
                        onResize: function() {},
                        disableHeight: !1,
                        disableWidth: !1,
                        style: {}
                    }, t.default = u
                }.call(this, r(54))
        },
        368: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                use: e,
                isGroupChat: t
            }) {
                const r = (0, a.useTheme)();
                return (l.default.createElement(u, {
                    use: null != e ? e : "subtext-bold",
                    color: r.semanticColors.error,
                    wrapText: !0
                }, t ? o.default._("Multi-company", null, {
                    hk: "1s6JMq"
                }) : o.default._("External", null, {
                    hk: "4aLp2E"
                }), " "))
            };
            var n = s(r(99)),
                a = r(6),
                o = s(r(5)),
                l = s(r(0)),
                i = s(r(4));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, n.default)(i.default, {
                target: "e4we3yo0",
                label: "InlineText"
            })({
                name: "6n7j50",
                styles: "display:inline;"
            })
        },
        369: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    type: t,
                    imageUrl: r,
                    name: o,
                    text: c,
                    isGroupChat: d,
                    typingParticipants: p
                } = e, m = a.default._("{Actor name} joined the call", [a.default._param("Actor name", o)], {
                    hk: "3xmson"
                }).toString(), g = a.default._("{Actor name} left the call", [a.default._param("Actor name", o)], {
                    hk: "4AnPV8"
                }).toString();
                return i.default.createElement(s.default, {
                    size: s.PillSize.Large,
                    onClick: e.onClick
                }, (() => {
                    switch (t) {
                        case n.NotificationTypes.JOIN_CALL:
                            return i.default.createElement(i.default.Fragment, null, r && i.default.createElement(u.ProfilePhotoPill, {
                                imageUrl: r
                            }), i.default.createElement(u.TextPill, {
                                text: m
                            }));
                        case n.NotificationTypes.LEAVE_CALL:
                            return i.default.createElement(i.default.Fragment, null, r && i.default.createElement(u.ProfilePhotoPill, {
                                imageUrl: r
                            }), i.default.createElement(u.TextPill, {
                                text: g
                            }));
                        case n.NotificationTypes.CONNECTING:
                            return i.default.createElement(i.default.Fragment, null, i.default.createElement(h, null), i.default.createElement(u.TextPill, {
                                text: a.default._("Connecting...", null, {
                                    hk: "4bBPS"
                                }).toString()
                            }));
                        case n.NotificationTypes.NO_NETWORK:
                            return i.default.createElement(i.default.Fragment, null, i.default.createElement(f, {
                                icon: l.default,
                                size: s.PillSize.Medium
                            }), i.default.createElement(u.TextPill, {
                                text: a.default._("No Network", null, {
                                    hk: "28CZmM"
                                }).toString()
                            }));
                        case n.NotificationTypes.MESSAGE_TEXT:
                            return i.default.createElement(i.default.Fragment, null, r && i.default.createElement(u.ProfilePhotoPill, {
                                imageUrl: r
                            }), c && i.default.createElement(u.TextPill, {
                                text: c
                            }));
                        case n.NotificationTypes.TYPING:
                            return null != d ? i.default.createElement(i.default.Fragment, null, r && i.default.createElement(u.ProfilePhotoPill, {
                                imageUrl: r
                            }), i.default.createElement(u.TypingIndicatorPill, {
                                isGroupChat: d,
                                participants: p
                            })) : null;
                        default:
                            return null
                    }
                })())
            }, Object.defineProperty(t, "NotificationTypes", {
                enumerable: !0,
                get: function() {
                    return n.NotificationTypes
                }
            });
            var n = r(272),
                a = d(r(5)),
                o = d(r(1)),
                l = d(r(1723)),
                i = d(r(0)),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(127)),
                u = r(149);

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, o.default)(u.IconPill)({
                    paddingLeft: 8
                }),
                h = (0, o.default)(u.LoadingPill)({
                    paddingLeft: 8
                })
        },
        371: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.EmojiButtonRole = void 0;
            var n = r(142),
                a = u(r(5)),
                o = u(r(1)),
                l = u(r(566)),
                i = u(r(0)),
                s = r(2);

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return (c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = o.default.p(e => ({
                    margin: 0,
                    lineHeight: e.theme.select({
                        mac: "34px",
                        windows: "26px"
                    }),
                    fontSize: e.theme.select({
                        mac: "31px",
                        windows: "25px"
                    }),
                    width: e.theme.select({
                        mac: "30px",
                        windows: "31px"
                    }),
                    height: "30px"
                })),
                f = (0, o.default)(s.FocusableView)(e => ({
                    margin: "normal" === e.size ? "8px" : "3.5px",
                    width: "normal" === e.size ? n.NORMAL_PICKER_BUTTON_DIMS : n.COMPACT_PICKER_BUTTON_DIMS,
                    height: "normal" === e.size ? n.NORMAL_PICKER_BUTTON_DIMS : n.COMPACT_PICKER_BUTTON_DIMS,
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    outlineColor: e.theme.colors.base80,
                    borderRadius: "30%",
                    color: e.iconColor,
                    backgroundColor: e.pressed ? e.theme.select({
                        light: e.theme.colors.base40,
                        dark: e.theme.colors.base50
                    }) : "transparent",
                    ":active": {
                        backgroundColor: e.theme.select({
                            light: e.theme.colors.base40,
                            dark: e.theme.colors.base50
                        })
                    }
                }));
            let h;
            t.EmojiButtonRole = h,
                function(e) {
                    e.Button = "button", e.RadioButton = "radio"
                }(h || (t.EmojiButtonRole = h = {}));
            var p = i.default.forwardRef((function(e, t) {
                const {
                    emoji: r,
                    onClick: o,
                    pressed: s,
                    size: u,
                    hotlikeColor: p,
                    children: m,
                    accessibilityRole: g = h.Button,
                    ...y
                } = e;
                return (i.default.createElement(f, c({
                    ref: t,
                    "data-is-focusable": !0,
                    "aria-label": r === n.HOTLIKE ? a.default._("Thumbs up", null, {
                        hk: "3pz9Ac"
                    }).toString() : r,
                    role: g,
                    "aria-checked": Boolean(s),
                    tabIndex: 0,
                    onActivate: o,
                    telemetryName: "emoji_" + r,
                    size: u,
                    pressed: s,
                    isSvg: r === n.HOTLIKE,
                    iconColor: r === n.HOTLIKE ? p : void 0
                }, y, {
                    css: void 0
                }), r === n.HOTLIKE ? i.default.createElement(l.default, {
                    size: 30
                }) : i.default.createElement(d, null, r)))
            }));
            t.default = p
        },
        372: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return l.default.createElement(u, null, e.isCompactMode && l.default.createElement(n.default, {
                    telemetryName: "backArrow",
                    "aria-label": a.default._("Back", null, {
                        hk: "t0AqH"
                    }).toString(),
                    onClick: e.activateMasterView,
                    unreadCount: e.unreadCount,
                    css: {
                        marginRight: 10
                    }
                }), l.default.createElement(c, null, e.children))
            };
            var n = s(r(1786)),
                a = s(r(5)),
                o = s(r(1)),
                l = s(r(0)),
                i = s(r(2));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, o.default)(i.default)(e => ({
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                    paddingTop: e.theme.select({
                        mac: 8,
                        windows: 18
                    })
                })),
                c = (0, o.default)(i.default)({
                    flex: 1
                })
        },
        374: function(e, t, r) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = function(t) {
                    const {
                        children: r,
                        threadKey: a,
                        lastMessageOTID: s,
                        itemCount: h,
                        isInMessageIsland: y,
                        bottomItemHash: v,
                        bottomItemSenderViewer: b,
                        showingQuickReplies: w = !1,
                        quickReplies: x = [],
                        sendQuickReply: M,
                        onScrolledToTop: S,
                        onScrolledToBottom: O,
                        shouldShowTopLoadingSpinner: T,
                        shouldShowBottomLoadingSpinner: I,
                        shouldShowSentinel: R,
                        clearMessageIsland: A,
                        isMessageSearchMode: P,
                        scrollViewRef: j
                    } = t, D = (0, o.default)(s), z = (0, o.default)(v), F = (0, o.default)(h, !1), B = (0, f.useRef)(!1), L = (0, f.useRef)(null), N = (0, f.useRef)(!1), U = (0, f.useRef)(!1), W = (0, l.default)(y), H = (0, f.useRef)(!0);
                    z.current && (H.current = k(j.current, 350));
                    (0, f.useLayoutEffect)(() => {
                        !y && W && q(!0, !0)
                    }), (0, f.useEffect)(() => {
                        U.current = y
                    });
                    const V = (0, f.useRef)({
                            reachedTop: !1,
                            lastItemCount: h,
                            lastClientHeight: -1,
                            lastScrollBottom: -1,
                            lastScrollHeight: -1
                        }),
                        K = (0, d.useScrollQueue)(j),
                        q = (0, f.useCallback)((e = !1, t = !1) => {
                            j.current && j.current.scrollTop < j.current.scrollHeight && (t || !N.current) && (e || H.current) && K.queueOperation({
                                type: "scroll_down",
                                duration: 500
                            })
                        }, [K, j]),
                        G = (0, f.useRef)(new window.ResizeObserver(e => {
                            X()
                        })),
                        $ = (0, f.useRef)(new window.ResizeObserver(e => {
                            J()
                        })),
                        X = (0, f.useCallback)(() => {
                            const e = j.current;
                            e && (e.scrollTop = (0, g.getScrollTop)(V.current.lastScrollBottom, e.clientHeight, e.scrollHeight))
                        }, [j]),
                        J = (0, f.useCallback)(() => {
                            const e = j.current;
                            if (e && V.current.lastScrollHeight !== e.scrollHeight && (!U.current || (t = 20, e.scrollTop < t))) {
                                var t;
                                if (!F.current && !z.current || K.currentRequest && 0 !== K.currentRequest.duration) {
                                    k(e, 200 + (e.scrollHeight - V.current.lastScrollHeight)) && K.queueOperation({
                                        type: "scroll_down",
                                        duration: 0
                                    })
                                }
                                V.current.lastScrollHeight = e.scrollHeight
                            }
                        }, [j, F, z, K]);
                    (0, f.useLayoutEffect)(() => {
                        const e = j.current;
                        e && F.current && V.current.reachedTop && e.scrollTo({
                            top: e.scrollHeight - V.current.lastScrollHeight
                        })
                    }), (0, f.useLayoutEffect)(() => {
                        window.requestAnimationFrame(() => {
                            if (j.current) {
                                const e = j.current.clientHeight,
                                    t = j.current.scrollHeight,
                                    r = Math.max(0, t - e);
                                j.current.scrollTop = r, V.current.lastScrollBottom = (0, g.getScrollBottom)(r, e, t)
                            }
                        })
                    }, [j]), (0, f.useEffect)(() => {
                        const e = j ? j.current : null;
                        if (e) {
                            const t = G.current;
                            return t.observe(e), () => {
                                t.unobserve(e)
                            }
                        }
                        return () => {}
                    }, [j]), (0, f.useEffect)(() => {
                        const e = L ? L.current : null;
                        if (e) {
                            const t = $.current;
                            return t.observe(e), () => {
                                t.unobserve(e)
                            }
                        }
                        return () => {}
                    }, [j]), (0, f.useLayoutEffect)(() => {
                        B.current ? U.current || e(() => q(b && D.current, !1)) : B.current = !0
                    }, [q, v, b, D]);
                    const Q = (0, f.useCallback)(() => {
                            j.current && V.current && (V.current.lastScrollBottom = (0, g.getScrollBottom)(j.current.scrollTop, j.current.clientHeight, j.current.scrollHeight))
                        }, [j]),
                        Z = (0, f.useCallback)(() => {
                            j.current && (j.current.scrollTop <= 30 ? V.current.reachedTop = !0 : V.current.reachedTop = !1, Q())
                        }, [j, Q]),
                        Y = (0, f.useCallback)(() => {
                            K.clear(), N.current = !0
                        }, [K]),
                        ee = (0, f.useCallback)(() => {
                            N.current = !1
                        }, []),
                        te = (0, f.useCallback)(e => {
                            e ? S && S() : O && O()
                        }, [S, O]),
                        re = (0, f.useCallback)(() => {
                            U.current ? A && A() : q(!0, !0)
                        }, [A, q]),
                        {
                            threadTheme: ne
                        } = (0, i.useThreadTheme)(),
                        ae = ne ? ne.gradientColors && ne.gradientColors[0] || ne.color : null,
                        oe = ne ? ne.gradientColors && ne.gradientColors[ne.gradientColors.length - 1] || ne.color : null,
                        le = e => f.default.createElement(E, null, f.default.createElement(u.default, {
                            onClick: () => te(e)
                        })),
                        ie = T ? P ? le(!0) : f.default.createElement(c.default, {
                            size: c.SpinnerSize.Small,
                            css: {
                                marginTop: 40,
                                marginBottom: 6
                            },
                            color: ae
                        }) : null,
                        se = I ? P ? le(!1) : f.default.createElement(c.default, {
                            size: c.SpinnerSize.Small,
                            css: {
                                marginTop: 6,
                                marginBottom: 2
                            },
                            color: oe
                        }) : null;
                    return f.default.createElement(C, null, f.default.createElement(m.default, {
                        innerRef: j,
                        scrollContentRef: L,
                        onScroll: Z,
                        onUserScrolled: Y,
                        onUserScrollFinished: ee
                    }, f.default.createElement(_, null, ie, R && !P && f.default.createElement(p.default, {
                        atSentinel: () => te(!0)
                    }), r, O && !P && f.default.createElement(p.default, {
                        atSentinel: () => te(!1),
                        leftSentinel: void 0
                    }), se)), !P && f.default.createElement(n.default, {
                        scrollView: j.current,
                        showingQuickReplies: w,
                        newMessageNotificationThreshold: 350,
                        quickReplies: x,
                        sendQuickReply: M,
                        threadKey: a,
                        lastMessageOTID: s,
                        isInMessageIsland: U.current,
                        onScrollDownNubClick: re
                    }))
                }, t.isScrolledDown = k;
                var n = b(r(1831)),
                    a = r(37),
                    o = b(r(190)),
                    l = b(r(148)),
                    i = r(41),
                    s = b(r(1)),
                    u = b(r(1836)),
                    c = v(r(82)),
                    d = r(1837),
                    f = v(r(0)),
                    h = b(r(2)),
                    p = b(r(614)),
                    m = b(r(45)),
                    g = r(581);

                function y() {
                    if ("function" != typeof WeakMap) return null;
                    var e = new WeakMap;
                    return y = function() {
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
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } return r.default = e, t && t.set(e, r), r
                }

                function b(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                const _ = (0, s.default)(h.default)({
                        flex: 1
                    }),
                    w = (0, a.keyframes)({
                        from: {
                            opacity: 0
                        },
                        to: {
                            opacity: 1
                        }
                    }),
                    C = (0, s.default)(h.default)({
                        flex: 1,
                        animation: `${w} 250ms ease-out`,
                        animationFillMode: "forwards"
                    }),
                    E = (0, s.default)(h.default)({
                        justifyContent: "center",
                        alignItems: "center"
                    });

                function k(e, t) {
                    if (!e) return !1;
                    return (0, g.getScrollBottom)(e.scrollTop, e.clientHeight, e.scrollHeight) < t
                }
            }).call(this, r(231).setImmediate)
        },
        41: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.extendThreadTheme = f, t.useThreadTheme = function() {
                return (0, c.useContext)(h)
            }, t.default = void 0;
            var n, a = (n = r(530)) && n.__esModule ? n : {
                    default: n
                },
                o = r(32),
                l = r(40),
                i = r(6),
                s = r(23),
                u = r(11),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = d();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function d() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return d = function() {
                    return e
                }, e
            }

            function f(e, t) {
                const r = {
                        rounded: !0,
                        ...e.senderBubble
                    },
                    n = {
                        rounded: !0,
                        ...e.recieverBubble
                    };
                return {
                    ...e,
                    background: t ? e.background : null,
                    get composerIconColor() {
                        return e.headerFooterButtonColor || e.gradientColors && e.gradientColors[e.gradientColors.length - 1] || e.color
                    },
                    get headerIconColor() {
                        return e.headerFooterButtonColor || e.gradientColors && e.gradientColors[0] || e.color
                    },
                    headerBackgroundColor: t ? e.headerColor : void 0,
                    composerBackgroundColor: t ? e.composerColor : void 0,
                    messageTextColor: t ? e.messageTextColor : void 0,
                    incomingMessageTextColor: t ? e.incomingMessageTextColor : void 0,
                    messageBubbleBorder: (t, r) => {
                        var n, a;
                        return t && (null === (n = e.senderBubble) || void 0 === n ? void 0 : n.outline) ? `1px solid ${e.senderBubble.outline}` : !t && (null === (a = e.recieverBubble) || void 0 === a ? void 0 : a.outline) ? `1px solid ${e.recieverBubble.outline}` : r.select({
                            highContrast: `1px solid ${t?r.semanticColors.primary:r.colors.base80}`
                        })
                    },
                    replyBackgroundColor: (t, r, n) => {
                        var a, o;
                        return t ? r ? (null === (a = e.senderBubble) || void 0 === a ? void 0 : a.color) || e && e.color : (null === (o = e.recieverBubble) || void 0 === o ? void 0 : o.color) || n.select({
                            light: n.colors.base30,
                            dark: n.colors.base60
                        }) : "transparent"
                    },
                    replyBorderStyles: (e, t, a) => e && t && r.rounded || e && !t && n.rounded ? function(e) {
                        return e ? {
                            borderRadius: l.ROUND_BORDER_RADIUS,
                            borderBottomLeftRadius: l.ROUND_BORDER_RADIUS,
                            borderBottomRightRadius: l.CORNER_BORDER_RADIUS
                        } : {
                            borderRadius: l.ROUND_BORDER_RADIUS,
                            borderBottomLeftRadius: l.CORNER_BORDER_RADIUS,
                            borderBottomRightRadius: l.ROUND_BORDER_RADIUS
                        }
                    }(a) : {
                        borderRadius: 0
                    }
                }
            }
            const h = (0, c.createContext)({
                threadTheme: f((0, a.default)(), !1),
                themeIsPresent: !1
            });
            var p = (0, u.connect)((function(e, t) {
                return {
                    threadTheme: (0, s.getThreadTheme)(e, t.threadKey, t.isAppDarkTheme),
                    customThemesEnabled: (0, o.isGatekeeperEnabled)(e, "archon_enable_custom_themes")
                }
            }))((function(e) {
                const t = (0, i.useTheme)(),
                    {
                        children: r,
                        threadTheme: n,
                        threadThemeOverride: o
                    } = e,
                    l = (0, c.useMemo)(() => ({
                        threadTheme: f({
                            ...o || n || (0, a.default)(t)
                        }, e.customThemesEnabled),
                        themeIsPresent: !0
                    }), [e.customThemesEnabled, t, n, o]);
                return c.default.createElement(h.Provider, {
                    value: l
                }, r)
            }));
            t.default = p
        },
        530: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = e => ({
                id: "default",
                normalThemeId: "default",
                isDarkVariant: !1,
                idx: 0,
                reverseGradientsForRadial: !1,
                accessibilityLabel: "",
                color: e && e.themeIsDark ? "#8d8b8a" : "#373E4C",
                deprecated: !1,
                themeType: 0,
                icon: {
                    primaryUrl: "",
                    expiryTimestamp: 0,
                    fallbackUrl: ""
                },
                background: {
                    primaryUrl: "",
                    expiryTimestamp: 0,
                    fallbackUrl: ""
                }
            });
            t.default = n
        },
        531: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                isSenderViewer: e,
                imageUrl: t,
                title: r,
                description: h,
                onUrlClick: p,
                isFirst: g,
                isLast: y,
                attachment: v,
                threadKey: b,
                threadType: _,
                isRtcReady: w = !1,
                ctaHandlers: C = {},
                duplicates: E,
                bubbleContextMenuHandler: k,
                attachmentCTAs: x,
                setDisableTimeTooltip: M
            }) {
                const S = (0, n.isRTCXMA)(v.defaultCtaType),
                    O = _ ? (0, u.isP2PThread)(_) : void 0,
                    T = (0, n.getAttachmentCTAs)(v, C, w, x, O),
                    I = function(e, t, r) {
                        return !(t || (0, n.isPaymentXMA)(e.cta1Type) || r)
                    }(v, T.length > 0, S),
                    R = [v.titleText, r, v.sourceText, v.descriptionText, h, v.subtitleText].filter(e => null != e && "" !== e),
                    A = R[0] || "",
                    P = R[1] || "",
                    j = (0, c.useCallback)(() => {
                        M && M(!0)
                    }, [M]),
                    D = (0, c.useCallback)(() => {
                        M && M(!1)
                    }, [M]),
                    z = v.defaultCtaType,
                    F = v.defaultCtaId,
                    B = v.actionUrl,
                    L = (0, c.useCallback)(() => {
                        let e = (0, n.getAttachmentCTAClickHandler)(z, String(F), C, x);
                        const t = (0, l.default)(B);
                        (!e || t) && p && I && (e = () => p(B)), e && e()
                    }, [x, C, z, F, B, I, p]),
                    N = {
                        attachment: v,
                        titleText: A,
                        captionText: P,
                        CTAs: T,
                        onButtonHover: j,
                        onButtonUnhover: D
                    },
                    U = function(e) {
                        if ((0, n.isRTCXMA)(e)) return o.XMATypes.RTC;
                        return o.XMATypes.Regular
                    }(v.cta1Type || v.defaultCtaType);
                let W = null;
                switch (U) {
                    case o.XMATypes.RTC:
                        W = c.default.createElement(o.RTCXMA, m({}, N, {
                            duplicates: E,
                            threadType: _
                        }));
                        break;
                    default:
                        W = c.default.createElement(a.default, m({}, N, {
                            imageUrl: t,
                            threadKey: b
                        }))
                }
                const H = (0, f.useTheme)();
                return (c.default.createElement(i.default, {
                    name: "xmaMessage"
                }, c.default.createElement(d.RoundedCornerMediaContainer, {
                    isSenderViewer: e,
                    isFirst: g,
                    isLast: y,
                    onKeyDown: e => (0, s.openContextMenuOnKeyShortcut)(e, H, () => null != k && k(e, v)),
                    isLink: I,
                    onActivate: e => {
                        e.stopPropagation(), L()
                    },
                    onContextMenu: e => {
                        k && k(e, v)
                    }
                }, W)))
            };
            var n = r(274),
                a = p(r(1487)),
                o = r(538),
                l = p(r(195)),
                i = p(r(13)),
                s = r(89),
                u = r(52),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = h();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                d = r(40),
                f = r(6);

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m() {
                return (m = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
        },
        532: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                var t = "string" == typeof e ? e.charCodeAt(0) : e;
                return t >= 97 && t <= 122 || t >= 65 && t <= 90
            }
        },
        533: function(e, t, r) {
            "use strict";
            e.exports = {
                position: !0,
                gfm: !0,
                commonmark: !1,
                footnotes: !1,
                pedantic: !1,
                blocks: r(1519)
            }
        },
        534: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                var t, r = 0,
                    a = 0,
                    o = e.charAt(r),
                    l = {};
                for (; o in n;) a += t = n[o], t > 1 && (a = Math.floor(a / t) * t), l[a] = r, o = e.charAt(++r);
                return {
                    indent: a,
                    stops: l
                }
            };
            var n = {
                " ": 1,
                "\t": 4
            }
        },
        535: function(e, t, r) {
            "use strict";
            var n = "<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^\"'=<>`\\u0000-\\u0020]+|'[^']*'|\"[^\"]*\"))?)*\\s*\\/?>",
                a = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>";
            t.openCloseTag = new RegExp("^(?:" + n + "|" + a + ")"), t.tag = new RegExp("^(?:" + n + "|" + a + "|\x3c!----\x3e|\x3c!--(?:-?[^>-])(?:-?[^-])*--\x3e|<[?].*?[?]>|<![A-Za-z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)")
        },
        536: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                return e.indexOf("<", t)
            }
        },
        537: function(e, t, r) {
            "use strict";
            e.exports = function(e, t) {
                var r = e.indexOf("[", t),
                    n = e.indexOf("![", t);
                if (-1 === n) return r;
                return r < n ? r : n
            }
        },
        538: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RTCXMA = function(e) {
                const {
                    attachment: t,
                    titleText: r,
                    captionText: d,
                    CTAs: f,
                    duplicates: h = 0,
                    threadType: p,
                    onButtonHover: m,
                    onButtonUnhover: g
                } = e, y = (0, c.useTheme)();
                let v = r,
                    b = d;
                const _ = t.defaultCtaType === l.AttachmentCTAType.XMA_RTC_MISSED_VIDEO || t.defaultCtaType === l.AttachmentCTAType.XMA_RTC_MISSED_AUDIO,
                    w = (0, u.useMemo)(() => u.default.createElement(n.default, {
                        faviconUrl: (0, o.default)(t.faviconUrlInfo),
                        forceBgColor: _ ? y.colors.red : void 0
                    }), [t.faviconUrlInfo, _, y.colors.red]);
                t.defaultCtaType === l.AttachmentCTAType.XMA_RTC_MISSED_VIDEO ? (v = i.default._("Missed Video Chat", null, {
                    hk: "1K7xvZ"
                }).toString(), h > 0 && (v = i.default._("{number of missed video chats} Missed Video Chats", [i.default._param("number of missed video chats", h + 1)], {
                    hk: "1sXlP0"
                }).toString())) : t.defaultCtaType === l.AttachmentCTAType.XMA_RTC_MISSED_AUDIO ? (v = i.default._("Missed Call", null, {
                    hk: "1x3bGV"
                }).toString(), h > 0 && (v = i.default._("{number of missed audio calls} Missed Calls", [i.default._param("number of missed audio calls", h + 1)], {
                    hk: "MCZXE"
                }).toString())) : t.defaultCtaType === l.AttachmentCTAType.XMA_RTC_ENDED_VIDEO || t.defaultCtaType === l.AttachmentCTAType.XMA_RTC_ENDED_AUDIO ? b = i.default._("Call ended · {time}", [i.default._param("time", b)], {
                    hk: "4rhpFI"
                }).toString() : p && (0, s.isGroupThreadType)(p) && (b = i.default._("Join or start new call", null, {
                    hk: "TLbfH"
                }).toString());
                return (u.default.createElement(a.default, {
                    title: v,
                    caption: b,
                    icon: w,
                    CTAs: f,
                    containerWidth: f.length > 0 ? a.MAX_CONTAINER_WIDTH : void 0,
                    onButtonHover: m,
                    onButtonUnhover: g
                }))
            }, t.RegularXMA = function(e) {
                const {
                    attachment: t,
                    titleText: r,
                    captionText: l,
                    CTAs: i,
                    imageUrl: s,
                    threadKey: c,
                    onButtonHover: d,
                    onButtonUnhover: f
                } = e, h = u.default.createElement(n.default, {
                    faviconUrl: (0, o.default)(t.faviconUrlInfo)
                });
                return u.default.createElement(a.default, {
                    title: r,
                    caption: l,
                    imageUrl: s,
                    threadKey: c,
                    attachment: t,
                    icon: h,
                    CTAs: i,
                    containerWidth: a.MAX_CONTAINER_WIDTH,
                    onButtonHover: d,
                    onButtonUnhover: f
                })
            }, t.XMATypes = void 0;
            var n = h(r(275)),
                a = f(r(203)),
                o = h(r(27)),
                l = r(8),
                i = h(r(5)),
                s = r(52),
                u = f(r(0)),
                c = r(6);

            function d() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return d = function() {
                    return e
                }, e
            }

            function f(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let p;
            t.XMATypes = p,
                function(e) {
                    e[e.RTC = 0] = "RTC", e[e.Regular = 1] = "Regular"
                }(p || (t.XMATypes = p = {}))
        },
        540: function(e, t, r) {
            e.exports = r.p + "assets/assets/icons/static-icons/status-delivered.static.svg"
        },
        541: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = h(r(1585)),
                a = h(r(1586)),
                o = h(r(1587)),
                l = h(r(1588)),
                i = h(r(1589)),
                s = h(r(1590)),
                u = h(r(1591)),
                c = h(r(1592)),
                d = h(r(1)),
                f = h(r(0));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const p = d.default.div(e => ({
                    position: "relative",
                    ...e.isModal ? {
                        height: 11,
                        lineHeight: "11px",
                        fontSize: 11,
                        top: 4,
                        left: -1
                    } : {
                        height: 14,
                        lineHeight: "14px",
                        fontSize: 14
                    }
                })),
                m = e => f.default.createElement(p, {
                    isModal: e.isModal
                }, "😍");
            var g = {
                "😠": {
                    messageNub: f.default.createElement(n.default, {
                        key: "angry"
                    }, f.default.createElement(a.default, null)),
                    modal: f.default.createElement(a.default, null),
                    category: a.default
                },
                "❤": {
                    messageNub: f.default.createElement(n.default, {
                        key: "heart"
                    }, f.default.createElement(l.default, null)),
                    modal: f.default.createElement(l.default, null),
                    category: l.default
                },
                "🤗": {
                    messageNub: f.default.createElement(n.default, {
                        key: "care"
                    }, f.default.createElement(o.default, null))
                },
                "😆": {
                    messageNub: f.default.createElement(n.default, {
                        key: "laugh"
                    }, f.default.createElement(i.default, null)),
                    modal: f.default.createElement(i.default, null),
                    category: i.default
                },
                "😢": {
                    messageNub: f.default.createElement(n.default, {
                        key: "sad"
                    }, f.default.createElement(s.default, null)),
                    modal: f.default.createElement(s.default, null),
                    category: s.default
                },
                "👍": {
                    messageNub: f.default.createElement(n.default, {
                        key: "thumbsup"
                    }, f.default.createElement(u.default, null)),
                    modal: f.default.createElement(u.default, null),
                    category: u.default
                },
                "😮": {
                    messageNub: f.default.createElement(n.default, {
                        key: "wow"
                    }, f.default.createElement(c.default, null)),
                    modal: f.default.createElement(c.default, null),
                    category: c.default
                },
                "😍": {
                    messageNub: f.default.createElement(n.default, {
                        key: "hearteyes"
                    }, f.default.createElement(m, null)),
                    modal: f.default.createElement(m, {
                        isModal: !0
                    }),
                    category: m
                }
            };
            t.default = g
        },
        542: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(40),
                a = E(r(5)),
                o = E(r(543)),
                l = r(170),
                i = r(205),
                s = r(364),
                u = r(41),
                c = r(105),
                d = E(r(1)),
                f = E(r(2)),
                h = E(r(75)),
                p = E(r(323)),
                m = r(89),
                g = E(r(1594)),
                y = E(r(1595)),
                v = r(11),
                b = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = C();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                _ = r(6),
                w = E(r(544));

            function C() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return C = function() {
                    return e
                }, e
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const k = (0, d.default)(n.MessageBubbleContainer)({
                    padding: 6
                }),
                x = (0, d.default)(f.default)(e => ({
                    width: e.playerWidth,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                })),
                M = (0, d.default)(h.default)(e => ({
                    textAlign: "center",
                    padding: 0,
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                    backgroundColor: e.buttonColor || "transparent",
                    opacity: e.disabled ? .5 : 1
                })),
                S = (0, d.default)(f.default)(e => ({
                    height: 16,
                    width: 16,
                    WebkitMask: `url(${e.url}) no-repeat 50% 50%`,
                    backgroundColor: e.color || e.threadTheme.color,
                    ...e.color ? {} : (0, c.getThreadThemeGradientBackground)(e.threadTheme.gradientColors)
                }));

            function O(e) {
                return e > 10 ? 240 : e > 5 ? 200 : e > 2 ? 160 : 120
            }
            const {
                Loading: T,
                Ready: I,
                Playing: R,
                Paused: A
            } = l.AudioStates;
            const P = {
                initializeAudio: i.AudioVideoActions.audio.initializeAudio,
                togglePlay: i.AudioVideoActions.audio.togglePlay,
                finishedLoading: i.AudioVideoActions.audio.finishedLoading,
                stopPlayback: i.AudioVideoActions.audio.stopPlayback,
                updateTime: i.AudioVideoActions.audio.updateTime
            };
            var j = (0, v.connect)((function(e, t) {
                const {
                    threadKey: r,
                    attachment: n
                } = t;
                return {
                    audioState: (0, s.getAudioStateForFbid)(e, r, n.attachmentFbid)
                }
            }), P)((function(e) {
                const {
                    isFirst: t,
                    isLast: r,
                    isSenderViewer: n,
                    attachmentFbid: l,
                    sourceUrl: i,
                    duration: s,
                    attachment: c,
                    threadKey: d,
                    setDisableTimeTooltip: f,
                    bubbleContextMenuHandler: h,
                    audioState: v,
                    initializeAudio: C,
                    togglePlay: E,
                    finishedLoading: P,
                    stopPlayback: j,
                    updateTime: D
                } = e, {
                    threadTheme: z
                } = (0, u.useThreadTheme)(), F = (0, _.useTheme)(), B = (0, b.useRef)(null), L = (0, o.default)({
                    isAvailable: v.state !== T,
                    audioElement: B.current,
                    duration: v.state !== T ? v.duration : 0,
                    isSenderViewer: n
                }), N = v.state === T, U = v.state === R, W = v.state === A, H = v.state === I;
                (0, b.useEffect)(() => {
                    if (N) C(d, l);
                    else if (v.state === R || v.state === A) {
                        if (!B.current) return;
                        const e = v.duration - v.currentTime;
                        if (null == e || isNaN(e)) return;
                        B.current.currentTime = e
                    }
                }, []), (0, b.useEffect)(() => () => {
                    const e = B.current;
                    e && !e.paused && e.addEventListener("timeupdate", () => {
                        D(d, l, s ? s - e.currentTime : 0)
                    }, {
                        once: !0
                    })
                }, []), (0, b.useEffect)(() => {
                    if ((v.state === R || v.state === A) && B.current) {
                        const e = v.duration - v.currentTime;
                        Math.abs(B.current.currentTime - e) > .2 && (B.current.currentTime = e)
                    }
                }, [v]), (0, b.useEffect)(() => {
                    s && N && P(d, l, s)
                }, [s, P, d, l, N]), (0, b.useEffect)(() => {
                    if (!U && !W && !H) return;
                    const e = B.current;
                    e && (U && e.play(), W && e.pause(), H && (e.currentTime = 0, e.pause()))
                }, [U, W, H, E, d, l, j]);
                const V = v.state === R ? a.default._("Stop Clip", null, {
                        hk: "40mkDx"
                    }).toString() : a.default._("Play Clip", null, {
                        hk: "1oeJxD"
                    }).toString(),
                    K = (0, b.useCallback)(() => {
                        E(d, l)
                    }, [l, d, E]),
                    q = (0, b.useCallback)(() => {
                        null !== B.current && D(d, l, B.current.duration - B.current.currentTime)
                    }, [d, l, D]),
                    G = (0, b.useCallback)(() => {
                        v.state !== R && E(d, l)
                    }, [l, d, E, v]),
                    $ = (0, b.useCallback)(() => {
                        v.state !== A && E(d, l)
                    }, [l, d, E, v]),
                    X = (0, b.useCallback)(() => {
                        j(d, l)
                    }, [l, j, d]),
                    J = (0, b.useCallback)(e => {
                        "Space" === e.key && E(d, l), L.onContainerKeyDown(e), (0, m.openContextMenuOnKeyShortcut)(e, F, () => null != h && h(e, c))
                    }, [d, l, E, F, c, h, L]);
                return b.default.createElement(k, {
                    isSenderViewer: n,
                    threadTheme: z,
                    isFirst: t,
                    isLast: r,
                    onClick: L.onContainerClick,
                    onMouseMove: L.onContainerMouseMove,
                    onMouseLeave: L.resetPreview,
                    onContextMenu: e => {
                        h && h(e, c)
                    },
                    onKeyDown: J,
                    onActivate: null
                }, b.default.createElement(p.default, {
                    isProgressing: v.state === R,
                    shouldResetAnimation: v.state === I,
                    selectedTime: v.state === R || v.state === A ? v.duration - v.currentTime : 0,
                    duration: s,
                    isSenderViewer: n
                }), L.scrubPreview, b.default.createElement("audio", {
                    muted: !1,
                    onTimeUpdate: q,
                    onPlay: G,
                    onPause: $,
                    onEnded: X,
                    ref: B
                }, b.default.createElement("source", {
                    src: i,
                    type: "audio/mpeg"
                })), b.default.createElement(x, {
                    playerWidth: O(v.state !== T ? v.duration : 0)
                }, b.default.createElement(M, {
                    telemetryName: "AudioClipPlayButton",
                    silentPressedState: !0,
                    "aria-label": V,
                    title: V,
                    onMouseEnter: () => f && f(!0),
                    onMouseLeave: () => f && f(!1),
                    onMouseMove: e => {
                        e.stopPropagation(), L.resetPreview()
                    },
                    onClick: e => {
                        e.stopPropagation(), K()
                    },
                    buttonColor: n ? F.semanticColors.textWhite : F.select({
                        light: F.colors.base10,
                        dark: F.colors.flatBase70
                    }),
                    disabled: v.state === T
                }, b.default.createElement(S, {
                    url: v.state === R ? g.default : y.default,
                    color: n ? void 0 : F.semanticColors.textPrimary,
                    threadTheme: z
                })), b.default.createElement(w.default, {
                    seconds: v.state === R || v.state === A ? v.currentTime : v.state === I ? v.duration : 0,
                    color: n ? void 0 : F.semanticColors.textPrimary,
                    backgroundColor: n ? F.semanticColors.textWhite : F.select({
                        light: F.colors.base10,
                        dark: F.colors.flatBase70
                    }),
                    threadTheme: z,
                    disabled: v.state === T
                })))
            }));
            t.default = j
        },
        543: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                isAvailable: e,
                isSenderViewer: t,
                audioElement: r,
                duration: n
            }) {
                const [i, s] = (0, l.useState)(0), u = (0, l.useCallback)(t => {
                    if (null == r || !e) return;
                    const n = function(e) {
                        if (e > 30) return 5;
                        if (e > 10) return 3;
                        if (e > 5) return 2;
                        if (e > 2) return 1;
                        return .5
                    }(r.duration);
                    switch (t.key) {
                        case "ArrowLeft":
                            return void(r.currentTime -= n);
                        case "ArrowRight":
                            return void(r.currentTime += n)
                    }
                }, [r, e]), c = (0, l.useCallback)(t => {
                    if (null == r || !e) return;
                    const n = (0, a.getClickPositionInsideScrubber)(t, {
                        current: t.currentTarget
                    });
                    r.currentTime = n ? Math.round(n * r.duration * 100) / 100 : r.currentTime
                }, [e, r]), d = (0, l.useCallback)(t => {
                    if (!e) return;
                    const r = (0, a.getClickPositionInsideScrubber)(t, {
                        current: t.currentTarget
                    });
                    s(r * n)
                }, [s, n, e]), f = (0, l.useCallback)(() => {
                    s(0)
                }, [s]);
                return {
                    onContainerKeyDown: u,
                    onContainerClick: c,
                    onContainerMouseMove: d,
                    resetPreview: f,
                    scrubPreview: e ? l.default.createElement(o.default, {
                        isProgressing: !1,
                        shouldResetAnimation: !1,
                        selectedTime: i,
                        duration: n,
                        isSenderViewer: t
                    }) : null
                }
            };
            var n, a = r(278),
                o = (n = r(323)) && n.__esModule ? n : {
                    default: n
                },
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }
        },
        544: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                seconds: e,
                color: t,
                backgroundColor: r,
                threadTheme: a,
                disabled: o = !1
            }) {
                return l.default.createElement(c, {
                    backgroundColor: r,
                    threadTheme: a,
                    disabled: o
                }, l.default.createElement(d, {
                    color: t,
                    threadTheme: a,
                    use: "subtext-semibold"
                }, (0, n.formatDuration)(e)))
            };
            var n = r(39),
                a = r(105),
                o = u(r(1)),
                l = u(r(0)),
                i = u(r(2)),
                s = u(r(4));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, o.default)(i.default)(e => ({
                    justifyContent: "center",
                    alignItems: "center",
                    height: 20,
                    width: 42,
                    borderRadius: 20,
                    opacity: e.disabled ? .5 : 1,
                    ...e.backgroundColor ? {} : (0, a.getThreadThemeGradientBackground)(e.threadTheme.gradientColors),
                    backgroundColor: e.backgroundColor
                })),
                d = (0, o.default)(s.default)(e => ({
                    userSelect: "none",
                    textAlign: "center",
                    width: 30,
                    color: e.color ? e.color : e.threadTheme && e.threadTheme.gradientColors ? "transparent" : e.threadTheme.color,
                    ...(0, a.getThreadThemeGradientBackground)(e.threadTheme.gradientColors),
                    WebkitBackgroundClip: "text"
                }))
        },
        545: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("rect", {
                    width: "18",
                    height: "18",
                    x: "9",
                    y: "9",
                    fill: "currentColor",
                    rx: "2"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        546: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    isSenderViewer: t,
                    attachment: r
                } = e;
                return (h.default.createElement(h.default.Suspense, {
                    fallback: h.default.createElement(n.default, {
                        isSenderViewer: t,
                        width: r.previewWidth,
                        ratio: r.previewHeight / r.previewWidth
                    })
                }, h.default.createElement(x, e)))
            };
            var n = b(r(324)),
                a = r(8),
                o = b(r(1602)),
                l = b(r(1603)),
                i = b(r(1604)),
                s = b(r(5)),
                u = b(r(189)),
                c = b(r(1)),
                d = b(r(1608)),
                f = r(89),
                h = v(r(0)),
                p = v(r(2)),
                m = r(40),
                g = r(6);

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function() {
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
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const _ = {
                    374882289330575: h.default.createElement(i.default, {
                        width: 72,
                        height: 36,
                        color: "white"
                    }),
                    406655189415060: h.default.createElement(l.default, {
                        width: 72,
                        height: 36,
                        color: "white"
                    }),
                    873232509426885: h.default.createElement(o.default, {
                        width: 72,
                        height: 36,
                        color: "white"
                    })
                },
                w = (0, c.default)(p.default)({
                    position: "absolute",
                    bottom: 0
                }),
                C = c.default.img(e => ({
                    maxHeight: 280,
                    maxWidth: "100%",
                    overflow: "hidden",
                    border: e.theme.select({
                        light: "1px solid " + e.theme.colors.base40,
                        dark: "1px solid " + e.theme.colors.flatBase40
                    })
                })),
                E = c.default.img({
                    width: "100%",
                    objectFit: "cover",
                    display: "flex",
                    flex: 1
                }),
                k = (0, c.default)(m.RoundedCornerMediaContainer)({
                    backgroundColor: "transparent"
                });

            function x({
                isFirst: e,
                isLast: t,
                isSenderViewer: r,
                attachment: n,
                partOfGroup: o,
                openMediaViewer: l,
                bubbleContextMenuHandler: i
            }) {
                const c = (0, u.default)({
                        url: n.previewUrlInfo,
                        mediaType: "image",
                        offlineId: n.offlineAttachmentId
                    }),
                    m = "0" !== n.attributionAppId ? _[n.attributionAppId] : null,
                    y = (0, h.useCallback)(() => {
                        l && l(n)
                    }, [n, l]),
                    v = h.default.createElement(d.default, {
                        "aria-label": s.default._("Open image in fullscreen", null, {
                            hk: "1oT6QF"
                        }).toString(),
                        tabIndex: -1,
                        "data-is-focusable": !1,
                        className: "messenger-media-viewer-button",
                        onClick: e => {
                            e.stopPropagation(), y()
                        }
                    }),
                    b = (0, g.useTheme)(),
                    x = (0, h.useCallback)(e => {
                        (0, p.isActivateKey)(e) && n.attachmentType === a.AttachmentType.Image && (y(), e.preventDefault(), e.stopPropagation()), (0, f.openContextMenuOnKeyShortcut)(e, b, () => null != i && i(e, n))
                    }, [n, b, y, i]);
                return c && 0 !== c.length ? o ? h.default.createElement(p.FocusableView, {
                    css: {
                        flex: 1,
                        ":hover .messenger-media-viewer-button": {
                            opacity: 1
                        }
                    },
                    onActivate: null,
                    onKeyDown: x,
                    onContextMenu: e => {
                        i && i(e, n)
                    },
                    onDoubleClick: n.attachmentType === a.AttachmentType.Image ? y : void 0
                }, n.attachmentType === a.AttachmentType.Image && v, h.default.createElement(E, {
                    src: c
                })) : h.default.createElement(k, {
                    onActivate: null,
                    onKeyDown: x,
                    isFirst: e,
                    isLast: t,
                    isSenderViewer: r,
                    css: {
                        ":hover .messenger-media-viewer-button": {
                            opacity: 1
                        }
                    },
                    onContextMenu: e => {
                        i && i(e, n)
                    }
                }, h.default.createElement(C, {
                    src: c,
                    onDoubleClick: n.attachmentType === a.AttachmentType.Image ? y : void 0
                }), n.attachmentType === a.AttachmentType.AnimatedImage && m && h.default.createElement(w, null, m), n.attachmentType === a.AttachmentType.Image && v) : null
            }
        },
        547: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = m(r(324)),
                a = m(r(189)),
                o = r(364),
                l = r(89),
                i = r(11),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                u = r(2),
                c = r(40),
                d = m(r(13)),
                f = r(6),
                h = m(r(347));

            function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function() {
                    return e
                }, e
            }

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function g(e) {
                const {
                    isFirst: t,
                    isLast: r,
                    isSenderViewer: n,
                    threadKey: o,
                    attachment: i,
                    isInReplyContext: p,
                    openMediaViewer: m,
                    bubbleContextMenuHandler: g,
                    videoInfo: y,
                    isMediaViewerOpen: v
                } = e, b = (0, f.useTheme)(), _ = (0, s.useCallback)(e => {
                    (0, u.isActivateKey)(e) && m && (m(i), e.preventDefault(), e.stopPropagation()), (0, l.openContextMenuOnKeyShortcut)(e, b, () => null != g && g(e, i))
                }, [m, b, i, g]), w = (0, a.default)({
                    url: i.playableUrlInfo.primaryUrl ? i.playableUrlInfo : i.previewUrlInfo,
                    mediaType: "video",
                    mimeType: i.playableUrlMimeType,
                    offlineId: i.offlineAttachmentId
                });
                return w ? s.default.createElement(d.default, {
                    name: "videoMessage"
                }, s.default.createElement(c.RoundedCornerMediaContainer, {
                    onActivate: null,
                    onKeyDown: _,
                    isFirst: t,
                    isLast: r,
                    isSenderViewer: n,
                    css: {
                        ":hover .messenger-open-media-viewer-button": {
                            visibility: "visible"
                        }
                    },
                    onContextMenu: e => {
                        g && g(e, i)
                    }
                }, p ? s.default.createElement("video", {
                    autoPlay: !0,
                    loop: !0,
                    style: {
                        objectFit: "contain"
                    }
                }, s.default.createElement("source", {
                    src: w,
                    type: i.playableUrlMimeType
                })) : s.default.createElement(h.default, {
                    attachment: i,
                    videoInfo: y,
                    openMediaViewer: m,
                    inThread: !0,
                    sourceUrl: w,
                    threadKey: o,
                    isMediaViewerOpen: v
                }))) : null
            }
            var y = (0, i.connect)((function(e, {
                threadKey: t,
                attachment: r
            }) {
                const n = Object.keys(e.inbox.mediaViewerInfo).length > 0;
                return {
                    videoInfo: (0, o.getVideoInfo)(e, t, r),
                    isMediaViewerOpen: n
                }
            }), {})((function(e) {
                const {
                    isSenderViewer: t
                } = e;
                return (s.default.createElement(s.default.Suspense, {
                    fallback: s.default.createElement(n.default, {
                        isSenderViewer: t
                    })
                }, s.default.createElement(g, e)))
            }));
            t.default = y
        },
        548: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                switch (e.format) {
                    case i.Bold:
                        return o.default.createElement(s, null, e.children);
                    case i.Italics:
                        return o.default.createElement(u, null, e.children);
                    case i.StrikeThrough:
                        return o.default.createElement(c, null, e.children);
                    case i.CodeBlock:
                        return o.default.createElement(d, null, e.children);
                    case i.InlineCode:
                        return o.default.createElement(f, null, e.children);
                    case i.BlockQuote:
                    case i.InlineQuote:
                        return o.default.createElement(n.Blockquote, {
                            isSenderViewer: e.isSenderViewer
                        }, e.children);
                    default:
                        const t = e.format;
                        console.warn(`No styles defined for ${t}`)
                }
                return (o.default.createElement("span", null, e.children))
            }, t.TextFormatting = void 0;
            var n = r(351),
                a = l(r(1)),
                o = l(r(0));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let i;
            t.TextFormatting = i,
                function(e) {
                    e[e.CodeBlock = 0] = "CodeBlock", e[e.InlineCode = 1] = "InlineCode", e[e.BlockQuote = 2] = "BlockQuote", e[e.InlineQuote = 3] = "InlineQuote", e[e.Bold = 4] = "Bold", e[e.Italics = 5] = "Italics", e[e.StrikeThrough = 6] = "StrikeThrough"
                }(i || (t.TextFormatting = i = {}));
            const s = a.default.span({
                    fontWeight: "bold"
                }),
                u = a.default.span({
                    fontStyle: "italic"
                }),
                c = a.default.span({
                    textDecoration: "line-through"
                }),
                d = a.default.div({
                    fontFamily: "monospace"
                }),
                f = a.default.span({
                    fontFamily: "monospace"
                })
        },
        549: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(35),
                a = c(r(550)),
                o = r(41),
                l = r(28),
                i = r(11),
                s = c(r(0)),
                u = r(2);

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = {
                showModal: l.AppContextActions.showModal
            };
            var f = (0, i.connect)(null, d)((function(e) {
                const {
                    title: t,
                    pollId: r,
                    threadKey: l,
                    options: i,
                    moreOptionsText: c,
                    debugOnShowModal: d,
                    showModal: f
                } = e, {
                    windowKey: h
                } = (0, n.useWindowContext)(), p = i.filter(e => e.selected), {
                    threadTheme: m
                } = (0, o.useThreadTheme)();
                return s.default.createElement(u.FocusableView, {
                    css: {
                        marginTop: 12
                    },
                    onActivate: () => {
                        f({
                            type: "ConsumePoll",
                            threadKey: l,
                            pollId: r,
                            title: t
                        }, h), d && d()
                    }
                }, s.default.createElement(a.default, {
                    pollId: r,
                    title: t,
                    options: i,
                    threadTheme: m,
                    selectedOptions: p,
                    enableSelectingOptions: !1,
                    subtitle: c,
                    makeScrollable: !1
                }))
            }));
            t.default = f
        },
        550: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    title: t,
                    options: r,
                    selectedOptions: a,
                    threadTheme: i,
                    makeScrollable: f = !0,
                    enableSelectingOptions: v,
                    additionalOptions: b,
                    subtitle: _,
                    onOptionClick: w,
                    onClick: C
                } = e, E = (0, c.useTheme)(), k = new Set, x = new Set;
                r.forEach(e => {
                    var t, r;
                    null === (t = e.voterProfilePhotos) || void 0 === t || t.forEach(e => k.add(e)), null === (r = e.voters) || void 0 === r || r.forEach(e => x.add(e.contactId))
                });
                const M = r.map(e => {
                    var t;
                    const r = null === (t = e.voters) || void 0 === t ? void 0 : t.map(e => s.default.createElement(u.default, {
                            key: e.contactId,
                            css: {
                                flexDirection: "row",
                                alignItems: "center"
                            }
                        }, s.default.createElement(m, {
                            size: "xxsmall",
                            profilePictureUrl: (0, l.default)(e.profilePicture)
                        }), s.default.createElement(g, {
                            use: "caption"
                        }, e.name))),
                        n = a.some(t => t.optionId == e.optionId);
                    let c = e.percentVoted;
                    return e.voterProfilePhotos && 0 !== k.size && 0 !== e.voterProfilePhotos.length ? c = e.voterProfilePhotos.length / k.size * 100 : e.voters && 0 !== x.size && 0 !== e.voters.length && (c = e.voters.length / x.size * 100), s.default.createElement(o.SelectableOption, {
                        key: e.optionId,
                        enableSelectingOptions: v,
                        isSelected: n,
                        threadTheme: i,
                        onActivate: () => v && w && w(e)
                    }, s.default.createElement(o.OptionContent, {
                        option: e,
                        widthPercentage: c,
                        facepileTooltipContent: r,
                        onActivate: () => v && w && w(e)
                    }))
                });
                b && M.push(...b);
                const S = s.default.createElement(o.Container, null, s.default.createElement(o.TitleContainer, {
                    onActivate: null
                }, s.default.createElement(d.default, {
                    use: "body-bold",
                    textAlign: "center",
                    wrapText: !0,
                    css: {
                        overflowWrap: "break-word"
                    }
                }, t)), s.default.createElement(n.default, null, M), _ && s.default.createElement(y, null, s.default.createElement(d.default, {
                    use: "subtext",
                    color: E.semanticColors.textSecondary
                }, _)));
                return (s.default.createElement(h, {
                    onClick: C
                }, f ? s.default.createElement(p, null, S) : S))
            };
            var n = f(r(33)),
                a = f(r(38)),
                o = r(325),
                l = f(r(27)),
                i = f(r(1)),
                s = f(r(0)),
                u = f(r(2)),
                c = r(6),
                d = f(r(4));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const h = (0, i.default)(u.default)({
                    maxWidth: 380,
                    minWidth: 303
                }),
                p = (0, i.default)(u.default)(e => ({
                    overflowY: "scroll",
                    maxHeight: 300,
                    "::-webkit-scrollbar": {
                        width: 4,
                        left: -100
                    },
                    "::-webkit-scrollbar-thumb": {
                        background: e.theme.semanticColors.bgLine,
                        borderRadius: 7
                    }
                })),
                m = (0, i.default)(a.default)({
                    padding: 3
                }),
                g = (0, i.default)(d.default)({
                    padding: 3
                }),
                y = (0, i.default)(u.default)({
                    paddingTop: 8
                })
        },
        551: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    className: t,
                    clickEvent: r,
                    children: n,
                    currentReaction: i,
                    messageDetails: s,
                    onHide: d,
                    onReaction: f,
                    pickerVisible: h,
                    isViewerSender: p,
                    width: m
                } = e, g = (0, o.useRef)(null), y = (0, o.useCallback)((e, t) => {
                    d(), f && window.setTimeout(() => f(e, t), 250)
                }, [d, f]);
                return o.default.createElement(l.default, {
                    className: t,
                    style: {
                        width: m
                    },
                    ref: g
                }, n, o.default.createElement(a.Transition, {
                    native: !0,
                    items: h,
                    config: {
                        tension: 500,
                        friction: 32,
                        velocity: 10
                    },
                    from: {
                        opacity: 0,
                        transform: "scale(0)"
                    },
                    enter: {
                        opacity: 1,
                        transform: "scale(1)"
                    },
                    leave: {
                        opacity: 0,
                        transform: "scale(0)"
                    }
                }, e => e ? e => o.default.createElement(o.Suspense, {
                    fallback: null
                }, o.default.createElement(u, {
                    key: "reaction-picker",
                    popoverTarget: r || g.current,
                    targetElement: g.current,
                    onCancel: d,
                    onReaction: y,
                    springProps: e,
                    messageDetails: s,
                    currentReaction: i,
                    onReferenceOutOfViewport: d,
                    isViewerSender: p
                })) : null), h && o.default.createElement(c, null))
            };
            var n = s(r(1)),
                a = r(46),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                l = s(r(2));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = o.default.lazy(() => r.e(98).then(r.t.bind(null, 1869, 7))),
                c = n.default.div({
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    pointerEvents: "auto"
                })
        },
        553: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M8 16A8 8 0 108 0a8 8 0 000 16zm3.425-11.425a.737.737 0 00-1.037.003L8.124 6.842a.182.182 0 01-.257 0l-2.26-2.259a.731.731 0 00-1.032-.008.737.737 0 00.003 1.037l2.26 2.26a.182.182 0 010 .257l-2.26 2.259a.737.737 0 00-.003 1.037.731.731 0 001.032-.008l2.26-2.26a.182.182 0 01.257 0l2.264 2.265a.737.737 0 001.037.003.731.731 0 00-.008-1.033L9.153 8.13a.182.182 0 010-.258l2.264-2.264a.731.731 0 00.008-1.032z",
                    clipRule: "evenodd"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        554: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return (0, a.default)({
                    messenger: e.threadName,
                    workchat: l(e)
                })
            };
            var n, a = (n = r(59)) && n.__esModule ? n : {
                    default: n
                },
                o = r(8);

            function l({
                threadName: e,
                threadType: t,
                participantStatus: r
            }) {
                return t === o.ThreadType.OnetoOne && (null == r ? void 0 : r.statusEmoji) ? `${e} ${r.statusEmoji}` : e
            }
        },
        555: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, u.useTheme)();
                return (s.default.createElement(n.default, {
                    onClick: e.onClick,
                    "aria-label": o.default._("Join Call Button", null, {
                        hk: "3nCILC"
                    }).toString(),
                    telemetryName: "joinCall",
                    css: {
                        textAlign: "center",
                        flexGrow: 0,
                        flexDirection: "row",
                        height: 28,
                        borderRadius: 14,
                        backgroundColor: t.colors.green
                    }
                }, e.callStatus === a.RtcCallStatus.VIDEO && s.default.createElement(l.default, {
                    size: 22,
                    color: "white"
                }), e.callStatus === a.RtcCallStatus.AUDIO && s.default.createElement(i.default, {
                    size: 22,
                    color: "white"
                }), s.default.createElement(c.default, {
                    use: "subtext-bold",
                    color: "white",
                    css: {
                        paddingLeft: 2,
                        textTransform: "uppercase"
                    }
                }, o.default._("Join", null, {
                    hk: "A1ipN"
                }))))
            };
            var n = d(r(75)),
                a = r(8),
                o = d(r(5)),
                l = d(r(78)),
                i = d(r(145)),
                s = d(r(0)),
                u = r(6),
                c = d(r(4));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        556: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(211),
                a = r(405),
                o = r(294),
                l = r(8),
                i = d(r(1)),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                u = d(r(2));

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, i.default)(u.default)(e => ({
                    height: e.size,
                    width: e.size
                })),
                h = {
                    small: {
                        imageSize: 22,
                        containerSize: 32,
                        clipPathId: a.PROFILE_GROUP_PATH_32
                    },
                    medium: {
                        imageSize: 26,
                        containerSize: 40,
                        clipPathId: a.PROFILE_GROUP_PATH_40
                    },
                    large: {
                        imageSize: 34,
                        containerSize: 50,
                        clipPathId: a.PROFILE_GROUP_PATH_50
                    }
                };
            var p = (0, s.memo)((function({
                size: e = "small",
                firstProfilePhotoUrl: t,
                secondProfilePhotoUrl: r,
                presence: a
            }) {
                const {
                    imageSize: i,
                    containerSize: u,
                    clipPathId: c
                } = h[e];
                return (s.default.createElement(f, {
                    size: u
                }, s.default.createElement(n.BaseProfilePhoto, {
                    src: t,
                    css: {
                        position: "absolute",
                        bottom: 0
                    },
                    size: i
                }), s.default.createElement(n.BaseProfilePhoto, {
                    src: r,
                    css: {
                        position: "absolute",
                        right: 0
                    },
                    size: i,
                    clipPathId: c
                }), a === l.PresenceType.Active && s.default.createElement(o.ProfilePhotoPresence, {
                    presence: a,
                    size: e
                })))
            }));
            t.default = p
        },
        557: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = s(r(639)),
                a = r(115),
                o = s(r(0)),
                l = r(6),
                i = s(r(4));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var u = o.default.memo((function({
                timestamp: e,
                use: t = "subtext",
                className: r
            }) {
                const s = (0, l.useTheme)(),
                    u = (0, n.default)(e, a.computeFriendlyTimestamp);
                return u ? o.default.createElement(i.default, {
                    use: t,
                    color: s.colors.base70,
                    className: r
                }, " · ", u) : null
            }));
            t.default = u
        },
        558: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, n.useRef)(null);
                return (0, n.useImperativeHandle)(e, () => ({
                    focus: () => {
                        t && t.current && t.current.focus()
                    }
                })), t
            };
            var n = r(0)
        },
        559: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = y(r(345)),
                a = y(r(1663)),
                o = y(r(27)),
                l = r(8),
                i = y(r(1)),
                s = y(r(161)),
                u = r(53),
                c = r(23),
                d = r(11),
                f = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = g();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                h = y(r(2)),
                p = r(6),
                m = y(r(4));

            function g() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return g = function() {
                    return e
                }, e
            }

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function v() {
                return (v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const b = {
                    flex: 1,
                    padding: "6px 12px",
                    height: 48,
                    minHeight: 48,
                    maxHeight: 48,
                    pointerEvents: "auto"
                },
                _ = (0, i.default)(h.default)({
                    flexDirection: "row",
                    alignItems: "center"
                }),
                w = (0, i.default)(h.default)(e => ({
                    ...b,
                    ...e.isSelected ? {
                        backgroundColor: e.theme.select({
                            light: e.theme.colors.base20,
                            dark: e.theme.colors.base30
                        })
                    } : {}
                })),
                C = (0, i.default)(m.default)(e => ({
                    flex: 1,
                    paddingLeft: 12
                }));
            const E = {
                openThreadFromSearchResult: c.InboxActions.search.openThreadFromSearchResult
            };
            var k = (0, d.connect)((function(e, t) {
                const {
                    suggestion: r
                } = t;
                return {
                    participants: null == r.contactId ? [] : (0, u.getParticipantListForThread)(e, r.contactId)
                }
            }), E)((function(e) {
                const {
                    onActivateSuggestion: t,
                    suggestion: r,
                    isSelected: i,
                    viewerId: u,
                    css: c,
                    participants: d,
                    hideAvatar: m = !1,
                    subtitle: g,
                    ...y
                } = e, b = (0, f.useRef)(null);
                (0, f.useLayoutEffect)(() => {
                    b.current && i && b.current.scrollIntoView({
                        block: "nearest"
                    })
                }, [i]);
                const E = (0, p.useTheme)(),
                    k = r.contactId === u,
                    x = r.resultType === l.SearchResultType.Group,
                    M = r.resultType === l.SearchResultType.Page;
                return f.default.createElement("div", {
                    ref: b
                }, f.default.createElement(w, v({
                    onMouseDown: () => {
                        t && t(r)
                    },
                    isSelected: i
                }, y), f.default.createElement(_, null, !m && f.default.createElement(n.default, {
                    profilePictureUrl: (0, o.default)(r.profilePicture),
                    secondaryPictureUrl: r.secondaryPictureUrl,
                    participants: d,
                    viewerId: u,
                    presence: r.isOnlineIndicatorVisible ? l.PresenceType.Active : l.PresenceType.Offline,
                    lastActiveTimestampMs: r.lastActiveTimestampMs
                }), f.default.createElement(h.default, {
                    css: {
                        flex: 1
                    }
                }, f.default.createElement(C, {
                    use: "body-semibold"
                }, r.name), f.default.createElement(a.default, {
                    participants: d,
                    suggestion: r,
                    viewerId: u
                })), (k || x || M) && f.default.createElement(s.default, {
                    size: 12,
                    color: E.semanticColors.textPrimary
                })), g && f.default.createElement(_, null, f.default.createElement(C, {
                    use: "subtext"
                }, g))))
            }));
            t.default = k
        },
        560: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = e.searchResultType,
                    r = e.participants;
                if (t === o.SearchResultType.Group) return l.default.createElement(n.default, {
                    participants: r,
                    subtitle: e.subtitle,
                    mutliCompanyBadgeTextStyle: "caption-bold"
                });
                return (l.default.createElement(a.default, {
                    otherUser: r.find(t => t.contactId != e.viewerId),
                    isForeignUser: t == o.SearchResultType.NonContact,
                    subtitle: e.subtitle,
                    mutliCompanyBadgeTextStyle: "caption-bold"
                }))
            };
            var n = i(r(1664)),
                a = i(r(561)),
                o = r(8),
                l = i(r(0));

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        561: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    isForeignUser: t,
                    subtitle: r,
                    mutliCompanyBadgeTextStyle: l,
                    isDeactivated: i,
                    otherUser: s
                } = e;
                return (o.default.createElement(o.default.Fragment, null, t && o.default.createElement(o.default.Fragment, null, o.default.createElement(n.default, {
                    use: l,
                    isGroupChat: !1
                }), "· "), i && o.default.createElement(o.default.Fragment, null, a.default._("Deactivated Account", null, {
                    hk: "Sfcn6"
                }), " · "), null != r ? r : null == s ? void 0 : s.workCompanyName))
            };
            var n = l(r(368)),
                a = l(r(5)),
                o = l(r(0));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        566: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("g", {
                    fill: "currentColor",
                    clipPath: "url(#LikeIcon__clip0)"
                }, a.default.createElement("path", {
                    d: "M7.992.333c.705 0 2.344.464 2.344 3.29 0 .787-.078 1.278-.133 1.62l-.031.2v.003a.23.23 0 00.23.26c2.811 0 4.312.743 4.312 1.502 0 .341-.128.652-.337.892a.07.07 0 00.015.104c.38.245.633.663.633 1.143 0 .55-.304 1.022-.776 1.242a.07.07 0 00-.029.1c.133.21.21.456.21.72 0 .605-.349 1.113-.898 1.297a.07.07 0 00-.043.087c.039.118.062.243.062.374 0 .675-1.135 1.222-3.8 1.222-1.95 0-3.294-.348-3.81-.598-.381-.184-.816-.517-.816-1.495V8.408c0-1.1.612-1.833 1.221-2.565.604-.725 1.206-1.447 1.206-2.52 0-.855-.058-1.398-.101-1.799-.025-.235-.045-.42-.045-.593 0-.337.246-.596.586-.598zM3.208 7.361H1.93c-.638 0-.958 1.716-.958 3.833 0 2.118.32 3.834.959 3.834h1.277a.639.639 0 00.64-.64V8a.639.639 0 00-.64-.639z"
                })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "LikeIcon__clip0"
                }, a.default.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h16v16H0z"
                }))))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        574: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillOpacity: ".34",
                    fillRule: "evenodd",
                    d: "M11.217 10.483l3.426 3.425-.735.735-3.425-3.426a5.195 5.195 0 11.735-.735zm-4.022.868a4.156 4.156 0 100-8.312 4.156 4.156 0 000 8.312z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        581: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getScrollBottom = function(e, t, r) {
                return r - t - e
            }, t.getScrollTop = function(e, t, r) {
                return r - t - e
            }
        },
        584: function(e, t, r) {
            "use strict";

            function n() {
                return (n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function a(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }

            function o(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function l(e, t) {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            r.r(t);
            var i = function(e, t) {
                    var r;
                    void 0 === t && (t = l);
                    var n, a = [],
                        o = !1;
                    return function() {
                        for (var l = [], i = 0; i < arguments.length; i++) l[i] = arguments[i];
                        return o && r === this && t(l, a) ? n : (n = e.apply(this, l), o = !0, r = this, a = l, n)
                    }
                },
                s = r(0);

            function u(e, t) {
                if (null == e) return {};
                var r, n, a = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
                return a
            }
            r.d(t, "VariableSizeGrid", (function() {
                return M
            })), r.d(t, "VariableSizeList", (function() {
                return j
            })), r.d(t, "FixedSizeGrid", (function() {
                return D
            })), r.d(t, "FixedSizeList", (function() {
                return z
            })), r.d(t, "areEqual", (function() {
                return B
            })), r.d(t, "shouldComponentUpdate", (function() {
                return L
            }));
            var c = "object" == typeof performance && "function" == typeof performance.now ? function() {
                return performance.now()
            } : function() {
                return Date.now()
            };

            function d(e) {
                cancelAnimationFrame(e.id)
            }

            function f(e, t) {
                var r = c();
                var n = {
                    id: requestAnimationFrame((function a() {
                        c() - r >= t ? e.call(null) : n.id = requestAnimationFrame(a)
                    }))
                };
                return n
            }
            var h = -1;
            var p = null;

            function m(e) {
                if (void 0 === e && (e = !1), null === p || e) {
                    var t = document.createElement("div"),
                        r = t.style;
                    r.width = "50px", r.height = "50px", r.overflow = "scroll", r.direction = "rtl";
                    var n = document.createElement("div"),
                        a = n.style;
                    return a.width = "100px", a.height = "100px", t.appendChild(n), document.body.appendChild(t), t.scrollLeft > 0 ? p = "positive-descending" : (t.scrollLeft = 1, p = 0 === t.scrollLeft ? "negative" : "positive-ascending"), document.body.removeChild(t), p
                }
                return p
            }
            var g = function(e) {
                var t = e.columnIndex;
                e.data;
                return e.rowIndex + ":" + t
            };

            function y(e) {
                var t, r, l = e.getColumnOffset,
                    u = e.getColumnStartIndexForOffset,
                    c = e.getColumnStopIndexForStartIndex,
                    p = e.getColumnWidth,
                    y = e.getEstimatedTotalHeight,
                    b = e.getEstimatedTotalWidth,
                    _ = e.getOffsetForColumnAndAlignment,
                    w = e.getOffsetForRowAndAlignment,
                    C = e.getRowHeight,
                    E = e.getRowOffset,
                    k = e.getRowStartIndexForOffset,
                    x = e.getRowStopIndexForStartIndex,
                    M = e.initInstanceProps,
                    S = e.shouldResetStyleCacheOnItemSizeChange,
                    O = e.validateProps;
                return r = t = function(e) {
                    function t(t) {
                        var r;
                        return (r = e.call(this, t) || this)._instanceProps = M(r.props, o(o(r))), r._resetIsScrollingTimeoutId = null, r._outerRef = void 0, r.state = {
                            instance: o(o(r)),
                            isScrolling: !1,
                            horizontalScrollDirection: "forward",
                            scrollLeft: "number" == typeof r.props.initialScrollLeft ? r.props.initialScrollLeft : 0,
                            scrollTop: "number" == typeof r.props.initialScrollTop ? r.props.initialScrollTop : 0,
                            scrollUpdateWasRequested: !1,
                            verticalScrollDirection: "forward"
                        }, r._callOnItemsRendered = void 0, r._callOnItemsRendered = i((function(e, t, n, a, o, l, i, s) {
                            return r.props.onItemsRendered({
                                overscanColumnStartIndex: e,
                                overscanColumnStopIndex: t,
                                overscanRowStartIndex: n,
                                overscanRowStopIndex: a,
                                visibleColumnStartIndex: o,
                                visibleColumnStopIndex: l,
                                visibleRowStartIndex: i,
                                visibleRowStopIndex: s
                            })
                        })), r._callOnScroll = void 0, r._callOnScroll = i((function(e, t, n, a, o) {
                            return r.props.onScroll({
                                horizontalScrollDirection: n,
                                scrollLeft: e,
                                scrollTop: t,
                                verticalScrollDirection: a,
                                scrollUpdateWasRequested: o
                            })
                        })), r._getItemStyle = void 0, r._getItemStyle = function(e, t) {
                            var n, a, o = r.props,
                                i = o.columnWidth,
                                s = o.direction,
                                u = o.rowHeight,
                                c = r._getItemStyleCache(S && i, S && s, S && u),
                                d = e + ":" + t;
                            c.hasOwnProperty(d) ? n = c[d] : c[d] = ((a = {
                                position: "absolute"
                            })["rtl" === s ? "right" : "left"] = l(r.props, t, r._instanceProps), a.top = E(r.props, e, r._instanceProps), a.height = C(r.props, e, r._instanceProps), a.width = p(r.props, t, r._instanceProps), n = a);
                            return n
                        }, r._getItemStyleCache = void 0, r._getItemStyleCache = i((function(e, t, r) {
                            return {}
                        })), r._onScroll = function(e) {
                            var t = e.currentTarget,
                                n = t.clientHeight,
                                a = t.clientWidth,
                                o = t.scrollLeft,
                                l = t.scrollTop,
                                i = t.scrollHeight,
                                s = t.scrollWidth;
                            r.setState((function(e) {
                                if (e.scrollLeft === o && e.scrollTop === l) return null;
                                var t = r.props.direction,
                                    u = o;
                                if ("rtl" === t) switch (m()) {
                                    case "negative":
                                        u = -o;
                                        break;
                                    case "positive-descending":
                                        u = s - a - o
                                }
                                u = Math.max(0, Math.min(u, s - a));
                                var c = Math.max(0, Math.min(l, i - n));
                                return {
                                    isScrolling: !0,
                                    horizontalScrollDirection: e.scrollLeft < o ? "forward" : "backward",
                                    scrollLeft: u,
                                    scrollTop: c,
                                    verticalScrollDirection: e.scrollTop < l ? "forward" : "backward",
                                    scrollUpdateWasRequested: !1
                                }
                            }), r._resetIsScrollingDebounced)
                        }, r._outerRefSetter = function(e) {
                            var t = r.props.outerRef;
                            r._outerRef = e, "function" == typeof t ? t(e) : null != t && "object" == typeof t && t.hasOwnProperty("current") && (t.current = e)
                        }, r._resetIsScrollingDebounced = function() {
                            null !== r._resetIsScrollingTimeoutId && d(r._resetIsScrollingTimeoutId), r._resetIsScrollingTimeoutId = f(r._resetIsScrolling, 150)
                        }, r._resetIsScrolling = function() {
                            r._resetIsScrollingTimeoutId = null, r.setState({
                                isScrolling: !1
                            }, (function() {
                                r._getItemStyleCache(-1)
                            }))
                        }, r
                    }
                    a(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return v(e, t), O(e), null
                    };
                    var r = t.prototype;
                    return r.scrollTo = function(e) {
                        var t = e.scrollLeft,
                            r = e.scrollTop;
                        void 0 !== t && (t = Math.max(0, t)), void 0 !== r && (r = Math.max(0, r)), this.setState((function(e) {
                            return void 0 === t && (t = e.scrollLeft), void 0 === r && (r = e.scrollTop), e.scrollLeft === t && e.scrollTop === r ? null : {
                                horizontalScrollDirection: e.scrollLeft < t ? "forward" : "backward",
                                scrollLeft: t,
                                scrollTop: r,
                                scrollUpdateWasRequested: !0,
                                verticalScrollDirection: e.scrollTop < r ? "forward" : "backward"
                            }
                        }), this._resetIsScrollingDebounced)
                    }, r.scrollToItem = function(e) {
                        var t = e.align,
                            r = void 0 === t ? "auto" : t,
                            n = e.columnIndex,
                            a = e.rowIndex,
                            o = this.props,
                            l = o.columnCount,
                            i = o.height,
                            s = o.rowCount,
                            u = o.width,
                            c = this.state,
                            d = c.scrollLeft,
                            f = c.scrollTop,
                            p = function(e) {
                                if (void 0 === e && (e = !1), -1 === h || e) {
                                    var t = document.createElement("div"),
                                        r = t.style;
                                    r.width = "50px", r.height = "50px", r.overflow = "scroll", document.body.appendChild(t), h = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                                }
                                return h
                            }();
                        void 0 !== n && (n = Math.max(0, Math.min(n, l - 1))), void 0 !== a && (a = Math.max(0, Math.min(a, s - 1)));
                        var m = y(this.props, this._instanceProps),
                            g = b(this.props, this._instanceProps) > u ? p : 0,
                            v = m > i ? p : 0;
                        this.scrollTo({
                            scrollLeft: void 0 !== n ? _(this.props, n, r, d, this._instanceProps, v) : d,
                            scrollTop: void 0 !== a ? w(this.props, a, r, f, this._instanceProps, g) : f
                        })
                    }, r.componentDidMount = function() {
                        var e = this.props,
                            t = e.initialScrollLeft,
                            r = e.initialScrollTop;
                        if (null != this._outerRef) {
                            var n = this._outerRef;
                            "number" == typeof t && (n.scrollLeft = t), "number" == typeof r && (n.scrollTop = r)
                        }
                        this._callPropsCallbacks()
                    }, r.componentDidUpdate = function() {
                        var e = this.props.direction,
                            t = this.state,
                            r = t.scrollLeft,
                            n = t.scrollTop;
                        if (t.scrollUpdateWasRequested && null != this._outerRef) {
                            var a = this._outerRef;
                            if ("rtl" === e) switch (m()) {
                                case "negative":
                                    a.scrollLeft = -r;
                                    break;
                                case "positive-ascending":
                                    a.scrollLeft = r;
                                    break;
                                default:
                                    var o = a.clientWidth,
                                        l = a.scrollWidth;
                                    a.scrollLeft = l - o - r
                            } else a.scrollLeft = Math.max(0, r);
                            a.scrollTop = Math.max(0, n)
                        }
                        this._callPropsCallbacks()
                    }, r.componentWillUnmount = function() {
                        null !== this._resetIsScrollingTimeoutId && d(this._resetIsScrollingTimeoutId)
                    }, r.render = function() {
                        var e = this.props,
                            t = e.children,
                            r = e.className,
                            a = e.columnCount,
                            o = e.direction,
                            l = e.height,
                            i = e.innerRef,
                            u = e.innerElementType,
                            c = e.innerTagName,
                            d = e.itemData,
                            f = e.itemKey,
                            h = void 0 === f ? g : f,
                            p = e.outerElementType,
                            m = e.outerTagName,
                            v = e.rowCount,
                            _ = e.style,
                            w = e.useIsScrolling,
                            C = e.width,
                            E = this.state.isScrolling,
                            k = this._getHorizontalRangeToRender(),
                            x = k[0],
                            M = k[1],
                            S = this._getVerticalRangeToRender(),
                            O = S[0],
                            T = S[1],
                            I = [];
                        if (a > 0 && v)
                            for (var R = O; R <= T; R++)
                                for (var A = x; A <= M; A++) I.push(Object(s.createElement)(t, {
                                    columnIndex: A,
                                    data: d,
                                    isScrolling: w ? E : void 0,
                                    key: h({
                                        columnIndex: A,
                                        data: d,
                                        rowIndex: R
                                    }),
                                    rowIndex: R,
                                    style: this._getItemStyle(R, A)
                                }));
                        var P = y(this.props, this._instanceProps),
                            j = b(this.props, this._instanceProps);
                        return Object(s.createElement)(p || m || "div", {
                            className: r,
                            onScroll: this._onScroll,
                            ref: this._outerRefSetter,
                            style: n({
                                position: "relative",
                                height: l,
                                width: C,
                                overflow: "auto",
                                WebkitOverflowScrolling: "touch",
                                willChange: "transform",
                                direction: o
                            }, _)
                        }, Object(s.createElement)(u || c || "div", {
                            children: I,
                            ref: i,
                            style: {
                                height: P,
                                pointerEvents: E ? "none" : void 0,
                                width: j
                            }
                        }))
                    }, r._callPropsCallbacks = function() {
                        var e = this.props,
                            t = e.columnCount,
                            r = e.onItemsRendered,
                            n = e.onScroll,
                            a = e.rowCount;
                        if ("function" == typeof r && t > 0 && a > 0) {
                            var o = this._getHorizontalRangeToRender(),
                                l = o[0],
                                i = o[1],
                                s = o[2],
                                u = o[3],
                                c = this._getVerticalRangeToRender(),
                                d = c[0],
                                f = c[1],
                                h = c[2],
                                p = c[3];
                            this._callOnItemsRendered(l, i, d, f, s, u, h, p)
                        }
                        if ("function" == typeof n) {
                            var m = this.state,
                                g = m.horizontalScrollDirection,
                                y = m.scrollLeft,
                                v = m.scrollTop,
                                b = m.scrollUpdateWasRequested,
                                _ = m.verticalScrollDirection;
                            this._callOnScroll(y, v, g, _, b)
                        }
                    }, r._getHorizontalRangeToRender = function() {
                        var e = this.props,
                            t = e.columnCount,
                            r = e.overscanColumnCount,
                            n = e.overscanColumnsCount,
                            a = e.overscanCount,
                            o = e.rowCount,
                            l = this.state,
                            i = l.horizontalScrollDirection,
                            s = l.isScrolling,
                            d = l.scrollLeft,
                            f = r || n || a || 1;
                        if (0 === t || 0 === o) return [0, 0, 0, 0];
                        var h = u(this.props, d, this._instanceProps),
                            p = c(this.props, h, d, this._instanceProps),
                            m = s && "backward" !== i ? 1 : Math.max(1, f),
                            g = s && "forward" !== i ? 1 : Math.max(1, f);
                        return [Math.max(0, h - m), Math.max(0, Math.min(t - 1, p + g)), h, p]
                    }, r._getVerticalRangeToRender = function() {
                        var e = this.props,
                            t = e.columnCount,
                            r = e.overscanCount,
                            n = e.overscanRowCount,
                            a = e.overscanRowsCount,
                            o = e.rowCount,
                            l = this.state,
                            i = l.isScrolling,
                            s = l.verticalScrollDirection,
                            u = l.scrollTop,
                            c = n || a || r || 1;
                        if (0 === t || 0 === o) return [0, 0, 0, 0];
                        var d = k(this.props, u, this._instanceProps),
                            f = x(this.props, d, u, this._instanceProps),
                            h = i && "backward" !== s ? 1 : Math.max(1, c),
                            p = i && "forward" !== s ? 1 : Math.max(1, c);
                        return [Math.max(0, d - h), Math.max(0, Math.min(o - 1, f + p)), d, f]
                    }, t
                }(s.PureComponent), t.defaultProps = {
                    direction: "ltr",
                    itemData: void 0,
                    useIsScrolling: !1
                }, r
            }
            var v = function(e, t) {
                    e.children, e.direction, e.height, e.innerTagName, e.outerTagName, e.overscanColumnsCount, e.overscanCount, e.overscanRowsCount, e.width, t.instance
                },
                b = function(e, t) {
                    var r = e.rowCount,
                        n = t.rowMetadataMap,
                        a = t.estimatedRowHeight,
                        o = t.lastMeasuredRowIndex,
                        l = 0;
                    if (o >= r && (o = r - 1), o >= 0) {
                        var i = n[o];
                        l = i.offset + i.size
                    }
                    return l + (r - o - 1) * a
                },
                _ = function(e, t) {
                    var r = e.columnCount,
                        n = t.columnMetadataMap,
                        a = t.estimatedColumnWidth,
                        o = t.lastMeasuredColumnIndex,
                        l = 0;
                    if (o >= r && (o = r - 1), o >= 0) {
                        var i = n[o];
                        l = i.offset + i.size
                    }
                    return l + (r - o - 1) * a
                },
                w = function(e, t, r, n) {
                    var a, o, l;
                    if ("column" === e ? (a = n.columnMetadataMap, o = t.columnWidth, l = n.lastMeasuredColumnIndex) : (a = n.rowMetadataMap, o = t.rowHeight, l = n.lastMeasuredRowIndex), r > l) {
                        var i = 0;
                        if (l >= 0) {
                            var s = a[l];
                            i = s.offset + s.size
                        }
                        for (var u = l + 1; u <= r; u++) {
                            var c = o(u);
                            a[u] = {
                                offset: i,
                                size: c
                            }, i += c
                        }
                        "column" === e ? n.lastMeasuredColumnIndex = r : n.lastMeasuredRowIndex = r
                    }
                    return a[r]
                },
                C = function(e, t, r, n) {
                    var a, o;
                    return "column" === e ? (a = r.columnMetadataMap, o = r.lastMeasuredColumnIndex) : (a = r.rowMetadataMap, o = r.lastMeasuredRowIndex), (o > 0 ? a[o].offset : 0) >= n ? E(e, t, r, o, 0, n) : k(e, t, r, Math.max(0, o), n)
                },
                E = function(e, t, r, n, a, o) {
                    for (; a <= n;) {
                        var l = a + Math.floor((n - a) / 2),
                            i = w(e, t, l, r).offset;
                        if (i === o) return l;
                        i < o ? a = l + 1 : i > o && (n = l - 1)
                    }
                    return a > 0 ? a - 1 : 0
                },
                k = function(e, t, r, n, a) {
                    for (var o = "column" === e ? t.columnCount : t.rowCount, l = 1; n < o && w(e, t, n, r).offset < a;) n += l, l *= 2;
                    return E(e, t, r, Math.min(n, o - 1), Math.floor(n / 2), a)
                },
                x = function(e, t, r, n, a, o, l) {
                    var i = "column" === e ? t.width : t.height,
                        s = w(e, t, r, o),
                        u = "column" === e ? _(t, o) : b(t, o),
                        c = Math.max(0, Math.min(u - i, s.offset)),
                        d = Math.max(0, s.offset - i + l + s.size);
                    switch ("smart" === n && (n = a >= d - i && a <= c + i ? "auto" : "center"), n) {
                        case "start":
                            return c;
                        case "end":
                            return d;
                        case "center":
                            return Math.round(d + (c - d) / 2);
                        case "auto":
                        default:
                            return a >= d && a <= c ? a : d > c ? d : a < d ? d : c
                    }
                },
                M = y({
                    getColumnOffset: function(e, t, r) {
                        return w("column", e, t, r).offset
                    },
                    getColumnStartIndexForOffset: function(e, t, r) {
                        return C("column", e, r, t)
                    },
                    getColumnStopIndexForStartIndex: function(e, t, r, n) {
                        for (var a = e.columnCount, o = e.width, l = w("column", e, t, n), i = r + o, s = l.offset + l.size, u = t; u < a - 1 && s < i;) u++, s += w("column", e, u, n).size;
                        return u
                    },
                    getColumnWidth: function(e, t, r) {
                        return r.columnMetadataMap[t].size
                    },
                    getEstimatedTotalHeight: b,
                    getEstimatedTotalWidth: _,
                    getOffsetForColumnAndAlignment: function(e, t, r, n, a, o) {
                        return x("column", e, t, r, n, a, o)
                    },
                    getOffsetForRowAndAlignment: function(e, t, r, n, a, o) {
                        return x("row", e, t, r, n, a, o)
                    },
                    getRowOffset: function(e, t, r) {
                        return w("row", e, t, r).offset
                    },
                    getRowHeight: function(e, t, r) {
                        return r.rowMetadataMap[t].size
                    },
                    getRowStartIndexForOffset: function(e, t, r) {
                        return C("row", e, r, t)
                    },
                    getRowStopIndexForStartIndex: function(e, t, r, n) {
                        for (var a = e.rowCount, o = e.height, l = w("row", e, t, n), i = r + o, s = l.offset + l.size, u = t; u < a - 1 && s < i;) u++, s += w("row", e, u, n).size;
                        return u
                    },
                    initInstanceProps: function(e, t) {
                        var r = e,
                            n = {
                                columnMetadataMap: {},
                                estimatedColumnWidth: r.estimatedColumnWidth || 50,
                                estimatedRowHeight: r.estimatedRowHeight || 50,
                                lastMeasuredColumnIndex: -1,
                                lastMeasuredRowIndex: -1,
                                rowMetadataMap: {}
                            };
                        return t.resetAfterColumnIndex = function(e, r) {
                            void 0 === r && (r = !0), t.resetAfterIndices({
                                columnIndex: e,
                                shouldForceUpdate: r
                            })
                        }, t.resetAfterRowIndex = function(e, r) {
                            void 0 === r && (r = !0), t.resetAfterIndices({
                                rowIndex: e,
                                shouldForceUpdate: r
                            })
                        }, t.resetAfterIndices = function(e) {
                            var r = e.columnIndex,
                                a = e.rowIndex,
                                o = e.shouldForceUpdate,
                                l = void 0 === o || o;
                            "number" == typeof r && (n.lastMeasuredColumnIndex = Math.min(n.lastMeasuredColumnIndex, r - 1)), "number" == typeof a && (n.lastMeasuredRowIndex = Math.min(n.lastMeasuredRowIndex, a - 1)), t._getItemStyleCache(-1), l && t.forceUpdate()
                        }, n
                    },
                    shouldResetStyleCacheOnItemSizeChange: !1,
                    validateProps: function(e) {
                        e.columnWidth, e.rowHeight
                    }
                }),
                S = function(e, t) {
                    return e
                };

            function O(e) {
                var t, r, l = e.getItemOffset,
                    u = e.getEstimatedTotalSize,
                    c = e.getItemSize,
                    h = e.getOffsetForIndexAndAlignment,
                    p = e.getStartIndexForOffset,
                    g = e.getStopIndexForStartIndex,
                    y = e.initInstanceProps,
                    v = e.shouldResetStyleCacheOnItemSizeChange,
                    b = e.validateProps;
                return r = t = function(e) {
                    function t(t) {
                        var r;
                        return (r = e.call(this, t) || this)._instanceProps = y(r.props, o(o(r))), r._outerRef = void 0, r._resetIsScrollingTimeoutId = null, r.state = {
                            instance: o(o(r)),
                            isScrolling: !1,
                            scrollDirection: "forward",
                            scrollOffset: "number" == typeof r.props.initialScrollOffset ? r.props.initialScrollOffset : 0,
                            scrollUpdateWasRequested: !1
                        }, r._callOnItemsRendered = void 0, r._callOnItemsRendered = i((function(e, t, n, a) {
                            return r.props.onItemsRendered({
                                overscanStartIndex: e,
                                overscanStopIndex: t,
                                visibleStartIndex: n,
                                visibleStopIndex: a
                            })
                        })), r._callOnScroll = void 0, r._callOnScroll = i((function(e, t, n) {
                            return r.props.onScroll({
                                scrollDirection: e,
                                scrollOffset: t,
                                scrollUpdateWasRequested: n
                            })
                        })), r._getItemStyle = void 0, r._getItemStyle = function(e) {
                            var t, n = r.props,
                                a = n.direction,
                                o = n.itemSize,
                                i = n.layout,
                                s = r._getItemStyleCache(v && o, v && i, v && a);
                            if (s.hasOwnProperty(e)) t = s[e];
                            else {
                                var u, d = l(r.props, e, r._instanceProps),
                                    f = c(r.props, e, r._instanceProps),
                                    h = "horizontal" === a || "horizontal" === i;
                                s[e] = ((u = {
                                    position: "absolute"
                                })["rtl" === a ? "right" : "left"] = h ? d : 0, u.top = h ? 0 : d, u.height = h ? "100%" : f, u.width = h ? f : "100%", t = u)
                            }
                            return t
                        }, r._getItemStyleCache = void 0, r._getItemStyleCache = i((function(e, t, r) {
                            return {}
                        })), r._onScrollHorizontal = function(e) {
                            var t = e.currentTarget,
                                n = t.clientWidth,
                                a = t.scrollLeft,
                                o = t.scrollWidth;
                            r.setState((function(e) {
                                if (e.scrollOffset === a) return null;
                                var t = r.props.direction,
                                    l = a;
                                if ("rtl" === t) switch (m()) {
                                    case "negative":
                                        l = -a;
                                        break;
                                    case "positive-descending":
                                        l = o - n - a
                                }
                                return l = Math.max(0, Math.min(l, o - n)), {
                                    isScrolling: !0,
                                    scrollDirection: e.scrollOffset < a ? "forward" : "backward",
                                    scrollOffset: l,
                                    scrollUpdateWasRequested: !1
                                }
                            }), r._resetIsScrollingDebounced)
                        }, r._onScrollVertical = function(e) {
                            var t = e.currentTarget,
                                n = t.clientHeight,
                                a = t.scrollHeight,
                                o = t.scrollTop;
                            r.setState((function(e) {
                                if (e.scrollOffset === o) return null;
                                var t = Math.max(0, Math.min(o, a - n));
                                return {
                                    isScrolling: !0,
                                    scrollDirection: e.scrollOffset < t ? "forward" : "backward",
                                    scrollOffset: t,
                                    scrollUpdateWasRequested: !1
                                }
                            }), r._resetIsScrollingDebounced)
                        }, r._outerRefSetter = function(e) {
                            var t = r.props.outerRef;
                            r._outerRef = e, "function" == typeof t ? t(e) : null != t && "object" == typeof t && t.hasOwnProperty("current") && (t.current = e)
                        }, r._resetIsScrollingDebounced = function() {
                            null !== r._resetIsScrollingTimeoutId && d(r._resetIsScrollingTimeoutId), r._resetIsScrollingTimeoutId = f(r._resetIsScrolling, 150)
                        }, r._resetIsScrolling = function() {
                            r._resetIsScrollingTimeoutId = null, r.setState({
                                isScrolling: !1
                            }, (function() {
                                r._getItemStyleCache(-1, null)
                            }))
                        }, r
                    }
                    a(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return T(e, t), b(e), null
                    };
                    var r = t.prototype;
                    return r.scrollTo = function(e) {
                        e = Math.max(0, e), this.setState((function(t) {
                            return t.scrollOffset === e ? null : {
                                scrollDirection: t.scrollOffset < e ? "forward" : "backward",
                                scrollOffset: e,
                                scrollUpdateWasRequested: !0
                            }
                        }), this._resetIsScrollingDebounced)
                    }, r.scrollToItem = function(e, t) {
                        void 0 === t && (t = "auto");
                        var r = this.props.itemCount,
                            n = this.state.scrollOffset;
                        e = Math.max(0, Math.min(e, r - 1)), this.scrollTo(h(this.props, e, t, n, this._instanceProps))
                    }, r.componentDidMount = function() {
                        var e = this.props,
                            t = e.direction,
                            r = e.initialScrollOffset,
                            n = e.layout;
                        if ("number" == typeof r && null != this._outerRef) {
                            var a = this._outerRef;
                            "horizontal" === t || "horizontal" === n ? a.scrollLeft = r : a.scrollTop = r
                        }
                        this._callPropsCallbacks()
                    }, r.componentDidUpdate = function() {
                        var e = this.props,
                            t = e.direction,
                            r = e.layout,
                            n = this.state,
                            a = n.scrollOffset;
                        if (n.scrollUpdateWasRequested && null != this._outerRef) {
                            var o = this._outerRef;
                            if ("horizontal" === t || "horizontal" === r)
                                if ("rtl" === t) switch (m()) {
                                    case "negative":
                                        o.scrollLeft = -a;
                                        break;
                                    case "positive-ascending":
                                        o.scrollLeft = a;
                                        break;
                                    default:
                                        var l = o.clientWidth,
                                            i = o.scrollWidth;
                                        o.scrollLeft = i - l - a
                                } else o.scrollLeft = a;
                                else o.scrollTop = a
                        }
                        this._callPropsCallbacks()
                    }, r.componentWillUnmount = function() {
                        null !== this._resetIsScrollingTimeoutId && d(this._resetIsScrollingTimeoutId)
                    }, r.render = function() {
                        var e = this.props,
                            t = e.children,
                            r = e.className,
                            a = e.direction,
                            o = e.height,
                            l = e.innerRef,
                            i = e.innerElementType,
                            c = e.innerTagName,
                            d = e.itemCount,
                            f = e.itemData,
                            h = e.itemKey,
                            p = void 0 === h ? S : h,
                            m = e.layout,
                            g = e.outerElementType,
                            y = e.outerTagName,
                            v = e.style,
                            b = e.useIsScrolling,
                            _ = e.width,
                            w = this.state.isScrolling,
                            C = "horizontal" === a || "horizontal" === m,
                            E = C ? this._onScrollHorizontal : this._onScrollVertical,
                            k = this._getRangeToRender(),
                            x = k[0],
                            M = k[1],
                            O = [];
                        if (d > 0)
                            for (var T = x; T <= M; T++) O.push(Object(s.createElement)(t, {
                                data: f,
                                key: p(T, f),
                                index: T,
                                isScrolling: b ? w : void 0,
                                style: this._getItemStyle(T)
                            }));
                        var I = u(this.props, this._instanceProps);
                        return Object(s.createElement)(g || y || "div", {
                            className: r,
                            onScroll: E,
                            ref: this._outerRefSetter,
                            style: n({
                                position: "relative",
                                height: o,
                                width: _,
                                overflow: "auto",
                                WebkitOverflowScrolling: "touch",
                                willChange: "transform",
                                direction: a
                            }, v)
                        }, Object(s.createElement)(i || c || "div", {
                            children: O,
                            ref: l,
                            style: {
                                height: C ? "100%" : I,
                                pointerEvents: w ? "none" : void 0,
                                width: C ? I : "100%"
                            }
                        }))
                    }, r._callPropsCallbacks = function() {
                        if ("function" == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
                            var e = this._getRangeToRender(),
                                t = e[0],
                                r = e[1],
                                n = e[2],
                                a = e[3];
                            this._callOnItemsRendered(t, r, n, a)
                        }
                        if ("function" == typeof this.props.onScroll) {
                            var o = this.state,
                                l = o.scrollDirection,
                                i = o.scrollOffset,
                                s = o.scrollUpdateWasRequested;
                            this._callOnScroll(l, i, s)
                        }
                    }, r._getRangeToRender = function() {
                        var e = this.props,
                            t = e.itemCount,
                            r = e.overscanCount,
                            n = this.state,
                            a = n.isScrolling,
                            o = n.scrollDirection,
                            l = n.scrollOffset;
                        if (0 === t) return [0, 0, 0, 0];
                        var i = p(this.props, l, this._instanceProps),
                            s = g(this.props, i, l, this._instanceProps),
                            u = a && "backward" !== o ? 1 : Math.max(1, r),
                            c = a && "forward" !== o ? 1 : Math.max(1, r);
                        return [Math.max(0, i - u), Math.max(0, Math.min(t - 1, s + c)), i, s]
                    }, t
                }(s.PureComponent), t.defaultProps = {
                    direction: "ltr",
                    itemData: void 0,
                    layout: "vertical",
                    overscanCount: 2,
                    useIsScrolling: !1
                }, r
            }
            var T = function(e, t) {
                    e.children, e.direction, e.height, e.layout, e.innerTagName, e.outerTagName, e.width, t.instance
                },
                I = function(e, t, r) {
                    var n = e.itemSize,
                        a = r.itemMetadataMap,
                        o = r.lastMeasuredIndex;
                    if (t > o) {
                        var l = 0;
                        if (o >= 0) {
                            var i = a[o];
                            l = i.offset + i.size
                        }
                        for (var s = o + 1; s <= t; s++) {
                            var u = n(s);
                            a[s] = {
                                offset: l,
                                size: u
                            }, l += u
                        }
                        r.lastMeasuredIndex = t
                    }
                    return a[t]
                },
                R = function(e, t, r, n, a) {
                    for (; n <= r;) {
                        var o = n + Math.floor((r - n) / 2),
                            l = I(e, o, t).offset;
                        if (l === a) return o;
                        l < a ? n = o + 1 : l > a && (r = o - 1)
                    }
                    return n > 0 ? n - 1 : 0
                },
                A = function(e, t, r, n) {
                    for (var a = e.itemCount, o = 1; r < a && I(e, r, t).offset < n;) r += o, o *= 2;
                    return R(e, t, Math.min(r, a - 1), Math.floor(r / 2), n)
                },
                P = function(e, t) {
                    var r = e.itemCount,
                        n = t.itemMetadataMap,
                        a = t.estimatedItemSize,
                        o = t.lastMeasuredIndex,
                        l = 0;
                    if (o >= r && (o = r - 1), o >= 0) {
                        var i = n[o];
                        l = i.offset + i.size
                    }
                    return l + (r - o - 1) * a
                },
                j = O({
                    getItemOffset: function(e, t, r) {
                        return I(e, t, r).offset
                    },
                    getItemSize: function(e, t, r) {
                        return r.itemMetadataMap[t].size
                    },
                    getEstimatedTotalSize: P,
                    getOffsetForIndexAndAlignment: function(e, t, r, n, a) {
                        var o = e.direction,
                            l = e.height,
                            i = e.layout,
                            s = e.width,
                            u = "horizontal" === o || "horizontal" === i ? s : l,
                            c = I(e, t, a),
                            d = P(e, a),
                            f = Math.max(0, Math.min(d - u, c.offset)),
                            h = Math.max(0, c.offset - u + c.size);
                        switch ("smart" === r && (r = n >= h - u && n <= f + u ? "auto" : "center"), r) {
                            case "start":
                                return f;
                            case "end":
                                return h;
                            case "center":
                                return Math.round(h + (f - h) / 2);
                            case "auto":
                            default:
                                return n >= h && n <= f ? n : n < h ? h : f
                        }
                    },
                    getStartIndexForOffset: function(e, t, r) {
                        return function(e, t, r) {
                            var n = t.itemMetadataMap,
                                a = t.lastMeasuredIndex;
                            return (a > 0 ? n[a].offset : 0) >= r ? R(e, t, a, 0, r) : A(e, t, Math.max(0, a), r)
                        }(e, r, t)
                    },
                    getStopIndexForStartIndex: function(e, t, r, n) {
                        for (var a = e.direction, o = e.height, l = e.itemCount, i = e.layout, s = e.width, u = "horizontal" === a || "horizontal" === i ? s : o, c = I(e, t, n), d = r + u, f = c.offset + c.size, h = t; h < l - 1 && f < d;) h++, f += I(e, h, n).size;
                        return h
                    },
                    initInstanceProps: function(e, t) {
                        var r = {
                            itemMetadataMap: {},
                            estimatedItemSize: e.estimatedItemSize || 50,
                            lastMeasuredIndex: -1
                        };
                        return t.resetAfterIndex = function(e, n) {
                            void 0 === n && (n = !0), r.lastMeasuredIndex = Math.min(r.lastMeasuredIndex, e - 1), t._getItemStyleCache(-1), n && t.forceUpdate()
                        }, r
                    },
                    shouldResetStyleCacheOnItemSizeChange: !1,
                    validateProps: function(e) {
                        e.itemSize
                    }
                }),
                D = y({
                    getColumnOffset: function(e, t) {
                        return t * e.columnWidth
                    },
                    getColumnWidth: function(e, t) {
                        return e.columnWidth
                    },
                    getRowOffset: function(e, t) {
                        return t * e.rowHeight
                    },
                    getRowHeight: function(e, t) {
                        return e.rowHeight
                    },
                    getEstimatedTotalHeight: function(e) {
                        var t = e.rowCount;
                        return e.rowHeight * t
                    },
                    getEstimatedTotalWidth: function(e) {
                        var t = e.columnCount;
                        return e.columnWidth * t
                    },
                    getOffsetForColumnAndAlignment: function(e, t, r, n, a, o) {
                        var l = e.columnCount,
                            i = e.columnWidth,
                            s = e.width,
                            u = Math.max(0, l * i - s),
                            c = Math.min(u, t * i),
                            d = Math.max(0, t * i - s + o + i);
                        switch ("smart" === r && (r = n >= d - s && n <= c + s ? "auto" : "center"), r) {
                            case "start":
                                return c;
                            case "end":
                                return d;
                            case "center":
                                var f = Math.round(d + (c - d) / 2);
                                return f < Math.ceil(s / 2) ? 0 : f > u + Math.floor(s / 2) ? u : f;
                            case "auto":
                            default:
                                return n >= d && n <= c ? n : d > c ? d : n < d ? d : c
                        }
                    },
                    getOffsetForRowAndAlignment: function(e, t, r, n, a, o) {
                        var l = e.rowHeight,
                            i = e.height,
                            s = e.rowCount,
                            u = Math.max(0, s * l - i),
                            c = Math.min(u, t * l),
                            d = Math.max(0, t * l - i + o + l);
                        switch ("smart" === r && (r = n >= d - i && n <= c + i ? "auto" : "center"), r) {
                            case "start":
                                return c;
                            case "end":
                                return d;
                            case "center":
                                var f = Math.round(d + (c - d) / 2);
                                return f < Math.ceil(i / 2) ? 0 : f > u + Math.floor(i / 2) ? u : f;
                            case "auto":
                            default:
                                return n >= d && n <= c ? n : d > c ? d : n < d ? d : c
                        }
                    },
                    getColumnStartIndexForOffset: function(e, t) {
                        var r = e.columnWidth,
                            n = e.columnCount;
                        return Math.max(0, Math.min(n - 1, Math.floor(t / r)))
                    },
                    getColumnStopIndexForStartIndex: function(e, t, r) {
                        var n = e.columnWidth,
                            a = e.columnCount,
                            o = e.width,
                            l = t * n,
                            i = Math.ceil((o + r - l) / n);
                        return Math.max(0, Math.min(a - 1, t + i - 1))
                    },
                    getRowStartIndexForOffset: function(e, t) {
                        var r = e.rowHeight,
                            n = e.rowCount;
                        return Math.max(0, Math.min(n - 1, Math.floor(t / r)))
                    },
                    getRowStopIndexForStartIndex: function(e, t, r) {
                        var n = e.rowHeight,
                            a = e.rowCount,
                            o = e.height,
                            l = t * n,
                            i = Math.ceil((o + r - l) / n);
                        return Math.max(0, Math.min(a - 1, t + i - 1))
                    },
                    initInstanceProps: function(e) {},
                    shouldResetStyleCacheOnItemSizeChange: !0,
                    validateProps: function(e) {
                        e.columnWidth, e.rowHeight
                    }
                }),
                z = O({
                    getItemOffset: function(e, t) {
                        return t * e.itemSize
                    },
                    getItemSize: function(e, t) {
                        return e.itemSize
                    },
                    getEstimatedTotalSize: function(e) {
                        var t = e.itemCount;
                        return e.itemSize * t
                    },
                    getOffsetForIndexAndAlignment: function(e, t, r, n) {
                        var a = e.direction,
                            o = e.height,
                            l = e.itemCount,
                            i = e.itemSize,
                            s = e.layout,
                            u = e.width,
                            c = "horizontal" === a || "horizontal" === s ? u : o,
                            d = Math.max(0, l * i - c),
                            f = Math.min(d, t * i),
                            h = Math.max(0, t * i - c + i);
                        switch ("smart" === r && (r = n >= h - c && n <= f + c ? "auto" : "center"), r) {
                            case "start":
                                return f;
                            case "end":
                                return h;
                            case "center":
                                var p = Math.round(h + (f - h) / 2);
                                return p < Math.ceil(c / 2) ? 0 : p > d + Math.floor(c / 2) ? d : p;
                            case "auto":
                            default:
                                return n >= h && n <= f ? n : n < h ? h : f
                        }
                    },
                    getStartIndexForOffset: function(e, t) {
                        var r = e.itemCount,
                            n = e.itemSize;
                        return Math.max(0, Math.min(r - 1, Math.floor(t / n)))
                    },
                    getStopIndexForStartIndex: function(e, t, r) {
                        var n = e.direction,
                            a = e.height,
                            o = e.itemCount,
                            l = e.itemSize,
                            i = e.layout,
                            s = e.width,
                            u = t * l,
                            c = "horizontal" === n || "horizontal" === i ? s : a,
                            d = Math.ceil((c + r - u) / l);
                        return Math.max(0, Math.min(o - 1, t + d - 1))
                    },
                    initInstanceProps: function(e) {},
                    shouldResetStyleCacheOnItemSizeChange: !0,
                    validateProps: function(e) {
                        e.itemSize
                    }
                });

            function F(e, t) {
                for (var r in e)
                    if (!(r in t)) return !0;
                for (var n in t)
                    if (e[n] !== t[n]) return !0;
                return !1
            }

            function B(e, t) {
                var r = e.style,
                    n = u(e, ["style"]),
                    a = t.style,
                    o = u(t, ["style"]);
                return !F(r, a) && !F(n, o)
            }

            function L(e, t) {
                return !B(this.props, e) || F(this.state, t)
            }
        },
        587: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                var t, r;
                const {
                    participant: s,
                    status: c,
                    showCompany: d = !0
                } = e, f = (0, n.useTheme)();
                if (null == s) return null;
                const h = [null !== (t = null == c ? void 0 : c.statusEmoji) && void 0 !== t ? t : null, null !== (r = null == c ? void 0 : c.statusText) && void 0 !== r ? r : null].filter(u).join(" "),
                    p = [d ? s.workCompanyName : null, s.workJobTitle, null != h ? h : null].filter(u).join(" ⋅ "),
                    m = s.workForeignEntityType === o.WorkForeignEntityType.Foreign;
                return l.default.createElement(i.default, {
                    use: "subtext-medium",
                    color: f.semanticColors.textSecondary,
                    wrapText: !1
                }, l.default.createElement(a.default, {
                    isDeactivated: e.isDeactivated,
                    isForeignUser: m,
                    subtitle: p
                }))
            };
            var n = r(6),
                a = s(r(561)),
                o = r(8),
                l = s(r(0)),
                i = s(r(4));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = e => null !== e && "" !== e
        },
        590: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                title: e,
                message: t,
                onDismiss: r,
                renderActions: a,
                icon: i,
                heroIcon: s,
                heroIconSize: f = "large",
                footer: h
            }) {
                const p = (0, c.useTheme)();
                return (l.default.createElement(g, null, l.default.createElement(M, null, s && l.default.createElement(C, {
                    size: f
                }, "string" == typeof s ? l.default.createElement(x, {
                    src: s
                }) : l.default.createElement(s, {
                    size: m[f].size,
                    color: p.semanticColors.textPrimary
                })), l.default.createElement(S, null, l.default.createElement(E, null, i && l.default.createElement(w, null, l.default.createElement(i, {
                    size: 18,
                    color: p.semanticColors.textPrimary
                })), l.default.createElement(k, null, l.default.createElement(d.default, {
                    use: "body-bold",
                    numberOfLines: 2
                }, e.toString()))), l.default.createElement(y, null, null != t && l.default.createElement(d.default, {
                    use: "subtext",
                    wrapText: !0
                }, t.toString())))), null != a && l.default.createElement(b, null, a()), null != r && l.default.createElement(v, {
                    telemetryName: "qpBannerClose",
                    icon: o.default,
                    size: u.RoundButtonSize.XXSmall,
                    "aria-label": n.default._("Close banner", null, {
                        hk: "2gRD51"
                    }).toString(),
                    buttonColor: p.colors.base40,
                    onClick: r
                }), h && l.default.createElement(O, {
                    use: "caption",
                    color: p.semanticColors.secondary,
                    textAlign: "center"
                }, h)))
            }, t.QPBannerPrimaryButton = function({
                caption: e,
                onClick: t
            }) {
                return l.default.createElement(_, {
                    "aria-label": e.toString(),
                    telemetryName: "qpBannerPrimaryButton",
                    use: s.RectangleButtonUse.Primary,
                    caption: e,
                    onClick: t,
                    wrapText: !1
                })
            }, t.QPBannerSecondaryButton = function({
                caption: e,
                onClick: t
            }) {
                return l.default.createElement(_, {
                    "aria-label": e.toString(),
                    telemetryName: "qpBannerSecondaryButton",
                    use: s.RectangleButtonUse.Secondary,
                    caption: e,
                    onClick: t,
                    wrapText: !1
                })
            };
            var n = p(r(5)),
                a = p(r(1)),
                o = p(r(50)),
                l = p(r(0)),
                i = p(r(2)),
                s = h(r(16)),
                u = h(r(22)),
                c = r(6),
                d = p(r(4));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function h(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = f();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const m = {
                    small: {
                        size: 32,
                        css: {
                            marginTop: 1,
                            marginRight: 8
                        }
                    },
                    large: {
                        size: 44,
                        css: {
                            marginRight: 4,
                            marginLeft: -5,
                            marginTop: -7
                        }
                    }
                },
                g = (0, a.default)(i.default)(e => ({
                    border: `1px solid ${e.theme.colors.base40}`,
                    borderRadius: 8,
                    padding: 12,
                    flexDirection: "column"
                })),
                y = (0, a.default)(i.default)({
                    paddingTop: 4
                }),
                v = (0, a.default)(u.default)({
                    position: "absolute",
                    top: 12,
                    right: 12
                }),
                b = (0, a.default)(i.default)({
                    flexDirection: "row",
                    paddingTop: 12
                }),
                _ = (0, a.default)(s.default)({
                    flex: 1,
                    ":not(:first-of-type)": {
                        marginLeft: 12
                    }
                }),
                w = (0, a.default)(i.default)({
                    marginRight: 3,
                    marginTop: 1
                }),
                C = (0, a.default)(i.default)(e => m[e.size].css),
                E = (0, a.default)(i.default)({
                    flexDirection: "row"
                }),
                k = (0, a.default)(i.default)({
                    flexShrink: 1
                }),
                x = a.default.img({
                    height: 44,
                    width: 44
                }),
                M = (0, a.default)(i.default)({
                    flexDirection: "row"
                }),
                S = (0, a.default)(i.default)({
                    flex: 1
                }),
                O = (0, a.default)(d.default)({
                    marginTop: 8
                })
        },
        593: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const e = (0, l.useSelector)(e => (0, o.isGatekeeperEnabled)(e, "archon_enable_dense_thread_list")),
                    {
                        userSettings: t
                    } = (0, a.default)();
                return e && t.denseThreadList
            };
            var n, a = (n = r(118)) && n.__esModule ? n : {
                    default: n
                },
                o = r(32),
                l = r(11)
        },
        595: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e;
                return !!(null === (e = (0, a.default)("rooms_simplification_desktop_dogfood")) || void 0 === e ? void 0 : e.is_simplification_enabled)
            };
            var n, a = (n = r(392)) && n.__esModule ? n : {
                default: n
            }
        },
        596: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getThemeLabel = function(e) {
                switch (e) {
                    case "light":
                        return a.default._("Light", null, {
                            hk: "cO3qU"
                        }).toString();
                    case "grey":
                        return a.default._("Grey", null, {
                            hk: "2bfr0i"
                        }).toString();
                    case "dark":
                        return a.default._("Dark", null, {
                            hk: "QTFnv"
                        }).toString();
                    case "highContrastDark":
                        return a.default._("High Contrast (Dark)", null, {
                            hk: "2IV1TL"
                        }).toString();
                    case "highContrastLight":
                        return a.default._("High Contrast (Light)", null, {
                            hk: "2nVess"
                        }).toString();
                    case "archonPurple":
                        return "Archon Purple"
                }
                return ""
            };
            var n, a = (n = r(5)) && n.__esModule ? n : {
                default: n
            }
        },
        597: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    authData: t,
                    compact: r,
                    participants: f,
                    participantStatus: p,
                    profilePictureUrl: _,
                    presence: C,
                    listItem: {
                        threadName: E,
                        isUnread: T,
                        isMuted: I,
                        lastActivityTimestampMs: R,
                        snippet: A,
                        isTyping: P,
                        threadType: j,
                        mentionCount: D
                    },
                    deliveryStatus: z,
                    lastMessageInfo: F,
                    callStatus: B,
                    onJoinCallClick: L
                } = e, [N] = (0, d.useUserSetting)("showAsAvailable"), U = (0, c.default)(C), W = C ? C.lastActiveTimestampMs : null, H = N && j === s.ThreadType.OnetoOne ? W : null, V = F && F.senderId === t.userID, K = I ? h.default.createElement(g.default, {
                    status: u.DeliveryStatus.Muted,
                    inChatCell: !0,
                    mentionCount: D
                }) : void 0, q = z === u.DeliveryStatus.Read && V && e.lastMessageSeenHeadsUrls ? h.default.createElement(b.default, {
                    size: "xxsmall",
                    profilePictureUrls: e.lastMessageSeenHeadsUrls.map(e => (0, l.default)(e)),
                    inChatCell: !0
                }) : h.default.createElement(g.default, {
                    status: z,
                    inChatCell: !0,
                    mentionCount: D
                }), G = (0, i.transformSnippetHotLike)(A);
                return h.default.createElement(h.default.Fragment, null, h.default.createElement(O, null, !_ && f.length > 2 ? h.default.createElement(v.default, {
                    size: "large",
                    viewerId: t.userID,
                    participants: f,
                    presence: U
                }) : h.default.createElement(n.default, {
                    size: "large",
                    viewerId: t.userID,
                    participants: f,
                    isDndModeOn: p.doNotDisturbEnabled,
                    presence: U,
                    profilePictureUrl: _,
                    lastActiveTimestampMs: H
                })), !r && h.default.createElement(h.default.Fragment, null, h.default.createElement(a.MainContent, {
                    isTyping: P
                }, h.default.createElement(k, {
                    use: T ? "body-bold" : "body-medium"
                }, (0, o.default)({
                    threadName: E,
                    threadType: j,
                    participantStatus: p
                })), P ? h.default.createElement(y.default, {
                    height: 5,
                    inThreadList: !0
                }) : h.default.createElement(x, null, h.default.createElement(M, {
                    use: T ? "subtext-bold" : "subtext",
                    unread: T
                }, G), h.default.createElement(w.default, {
                    timestamp: R
                }))), null != B && L && B != s.RtcCallStatus.NONE ? h.default.createElement(m.default, {
                    onClick: () => L(B),
                    callStatus: B
                }) : h.default.createElement(S, null, K, q)))
            }, t.ChatCellShimmer = function({
                compact: e,
                index: t
            }) {
                return h.default.createElement(a.ShimmerContainer, {
                    compact: e
                }, h.default.createElement(_.CircleShimmer, {
                    size: 50,
                    index: t
                }), !e && h.default.createElement(a.MainContent, null, h.default.createElement(T, {
                    index: t
                }), h.default.createElement(x, null, h.default.createElement(_.TextShimmer, {
                    index: t
                }))))
            };
            var n = E(r(38)),
                a = r(252),
                o = E(r(554)),
                l = E(r(27)),
                i = r(509),
                s = r(8),
                u = r(133),
                c = E(r(245)),
                d = r(72),
                f = E(r(1)),
                h = E(r(0)),
                p = E(r(2)),
                m = E(r(555)),
                g = E(r(232)),
                y = E(r(202)),
                v = E(r(173)),
                b = E(r(171)),
                _ = r(100),
                w = E(r(557)),
                C = E(r(4));

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const k = (0, f.default)(C.default)({
                    alignSelf: "flex-start"
                }),
                x = (0, f.default)(p.default)(e => ({
                    flexDirection: "row",
                    alignItems: "center",
                    lineHeight: "16px",
                    paddingTop: 3
                })),
                M = (0, f.default)(C.default)(e => ({
                    color: e.unread ? void 0 : e.theme.colors.flatBase70,
                    flex: "0 1 auto"
                })),
                S = (0, f.default)(p.default)(e => ({
                    flexDirection: "row",
                    alignItems: "center"
                })),
                O = (0, f.default)(p.default)(e => ({
                    marginTop: 2,
                    marginBottom: 2
                }));
            const T = (0, f.default)(_.TextShimmer)({
                height: 12
            })
        },
        599: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getChevronContextMenu = d, t.getTextMessageContextMenu = function(e, t, r, n) {
                const a = window.getSelection(),
                    o = [];
                n && (o.push(_(n)), o.push(b(n)), o.push({
                    type: "separator"
                }));
                o.push(function(e, t) {
                    return {
                        id: "copy_text",
                        label: l.default._("Copy", null, {
                            hk: "1IWSNO"
                        }).toString(),
                        onClick: () => {
                            t ? document.execCommand("copy") : i.default.clipboard.writeClipboard(e)
                        }
                    }
                }(r, null != a && "Range" === a.type));
                const s = function(e) {
                    return e.target instanceof Node ? {
                        id: "select_all",
                        label: l.default._("Select All", null, {
                            hk: "3ncIvh"
                        }).toString(),
                        onClick: () => {
                            const t = e.target,
                                r = window.getSelection();
                            if (!r) return;
                            const n = document.createRange();
                            n.selectNodeContents(t), r.removeAllRanges(), r.addRange(n)
                        }
                    } : null
                }(t);
                s && o.push(s);
                return o.push({
                    type: "separator"
                }), o.push(...d(e)), o
            }, t.getMediaMessageContextMenu = function(e, t, r, n, l, i) {
                const s = [],
                    u = t.attachmentType === o.AttachmentType.Video || t.attachmentType === o.AttachmentType.AnimatedImage,
                    c = t.attachmentType === o.AttachmentType.Image,
                    h = t.attachmentType === o.AttachmentType.XMA && t.defaultCtaType === o.AttachmentCTAType.XMA_WEB_URL;
                if (u) t.attachmentType === o.AttachmentType.Video && (s.push(f(t, n, !1)), s.push({
                    type: "separator"
                })), s.push(g(t, r, l)), s.push({
                    type: "separator"
                });
                else if (c) {
                    const e = (0, a.default)(t.playableUrlInfo) || (0, a.default)(t.previewUrlInfo);
                    s.push(f(t, n, !0)), s.push({
                        type: "separator"
                    }), s.push(y(e)), s.push(v(e)), s.push(g(t, r, l)), s.push({
                        type: "separator"
                    })
                } else h && i && i.length > 0 && (s.push(_(i[0].actionUrl)), s.push(b(i[0].actionUrl)), s.push({
                    type: "separator"
                }));
                return s.push(...d(e)), s
            }, t.getMediaContextMenu = function(e, t, r, n) {
                const l = [];
                if (e.attachmentType === o.AttachmentType.Image) {
                    const t = (0, a.default)(e.playableUrlInfo) || (0, a.default)(e.previewUrlInfo);
                    l.push(y(t)), l.push(v(t))
                }
                return l.push(g(e, t, n)), l.push(p({
                    attachment: e
                }, r)), l
            }, t.getRemoveMessageContextItem = m;
            var n = r(1790),
                a = c(r(27)),
                o = r(8),
                l = c(r(5)),
                i = c(r(9)),
                s = r(1791),
                u = c(r(153));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d(e) {
                const {
                    message: t,
                    thread: r,
                    details: a,
                    replyToMessage: c,
                    removeMessage: d,
                    globalRemoveMessage: f,
                    threadHasPinnedMessage: g,
                    isPinnedMessage: y,
                    pinMessage: v,
                    unpinMessage: b,
                    setShowReactionPicker: _,
                    setSelectedMessageOTID: w,
                    canGlobalRemove: C,
                    canReact: E,
                    showModal: k,
                    isMessageSending: x,
                    canSave: M,
                    saveOrUnsaveMessage: S
                } = e;
                if (x) return [];
                const O = E ? [h(_, () => w(a.messageOTID))] : [];
                if (function(e) {
                        return Boolean(e && (0, u.default)(o.ThreadCapabilities.MESSAGE_REPLY, e.capabilities))
                    }(r) && O.push(function(e, t) {
                        return {
                            id: "reply",
                            label: l.default._("Reply", null, {
                                hk: "1zoDHb"
                            }).toString(),
                            onClick: () => {
                                t(e.messageOTID)
                            }
                        }
                    }(a, c)), function(e) {
                        return Boolean(e && function(e = []) {
                            return e.filter(e => function(e) {
                                switch (e.attachmentType) {
                                    case o.AttachmentType.Image:
                                    case o.AttachmentType.AnimatedImage:
                                    case o.AttachmentType.Video:
                                    case o.AttachmentType.File:
                                    case o.AttachmentType.Audio:
                                    case o.AttachmentType.Sticker:
                                        return !0;
                                    case o.AttachmentType.XMA:
                                        return e.isSharable;
                                    default:
                                        return !1
                                }
                            }(e)).length > 0 || 0 === e.length
                        }(e.attachments) && e.message.messageId)
                    }(t) && O.push(p({
                        message: t
                    }, k)), y) {
                    const e = (0, s.getUnpinMessageContextItem)(() => b(a.threadKey, a.messageId));
                    e && (O.push({
                        type: "separator"
                    }), O.push(e))
                } else {
                    const e = (0, s.getPinMessageContextItem)(g, () => v(a.threadKey, a.messageId));
                    e && (O.push({
                        type: "separator"
                    }), O.push(e))
                }
                M && r && O.push(function(e, t, r, n) {
                    return {
                        id: e ? "unsave_message" : "save_message",
                        label: e ? l.default._("Unsave message", null, {
                            hk: "1GcIhj"
                        }).toString() : l.default._("Save message", null, {
                            hk: "3yG6fv"
                        }).toString(),
                        onClick: () => n(r, t, !e)
                    }
                }(Boolean(null == t ? void 0 : t.isSaved), a.messageId, r.threadKey, S));
                const T = (0, n.getRemindMeContextItem)(a, k);
                return T && O.push(T), O.push({
                    type: "separator"
                }), O.push(m(a, d)), C && O.push(function(e, t) {
                    return {
                        id: "remove_global",
                        label: l.default._("Remove for Everyone", null, {
                            hk: "2dWg2T"
                        }).toString(),
                        onClick: async () => {
                            0 === (await i.default.platform.showMessageBox({
                                type: "info",
                                detail: l.default._("You'll permanently remove this message for all chat members. They can see you removed a message and still report it.", null, {
                                    hk: "36BN7c"
                                }).toString(),
                                message: l.default._("Remove For Everyone", null, {
                                    hk: "10W1Ot"
                                }).toString(),
                                buttons: [l.default._("Remove", null, {
                                    hk: "Bsj7W"
                                }).toString(), l.default._("Cancel", null, {
                                    hk: "1J4v58"
                                }).toString()]
                            })).response && t(e)
                        }
                    }
                }(a.messageId, f)), O
            }

            function f(e, t, r) {
                return {
                    id: "open_media_viewer_media",
                    label: r ? l.default._("Open Image", null, {
                        hk: "IX2sg"
                    }).toString() : l.default._("Open Media", null, {
                        hk: "wgUlE"
                    }).toString(),
                    onClick: () => {
                        t(e)
                    }
                }
            }

            function h(e, t) {
                return {
                    id: "react",
                    label: l.default._("Add a Reaction", null, {
                        hk: "sRk7o"
                    }).toString(),
                    onClick: () => {
                        e(!0), t()
                    }
                }
            }

            function p(e, t) {
                return {
                    id: "forward_message",
                    label: l.default._("Forward", null, {
                        hk: "2HJdBu"
                    }).toString(),
                    onClick: () => {
                        t({
                            type: "Forward",
                            forwardViewInfo: e
                        })
                    }
                }
            }

            function m(e, t) {
                return {
                    id: "remove",
                    label: l.default._("Remove for You", null, {
                        hk: "2BLXqV"
                    }).toString(),
                    onClick: async () => {
                        0 === (await i.default.platform.showMessageBox({
                            type: "info",
                            noLink: !0,
                            cancelId: 2,
                            detail: l.default._("This message will be removed for you. Other chat members will still be able to see it.", null, {
                                hk: "2yieH"
                            }).toString(),
                            message: l.default._("Remove For You", null, {
                                hk: "44DN55"
                            }).toString(),
                            buttons: [l.default._("Remove", null, {
                                hk: "Bsj7W"
                            }).toString(), l.default._("Cancel", null, {
                                hk: "1J4v58"
                            }).toString()]
                        })).response && t(e)
                    }
                }
            }

            function g(e, t, r) {
                const n = e.attachmentType === o.AttachmentType.Image || e.attachmentType === o.AttachmentType.Video ? (0, a.default)(e.playableUrlInfo) : (0, a.default)(e.previewUrlInfo);
                return {
                    id: "save",
                    label: (r ? l.default._("Save File", null, {
                        hk: "4gUtg5"
                    }) : l.default._("Save to Downloads", null, {
                        hk: "waSIR"
                    })).toString(),
                    onClick: async () => {
                        t(n)
                    }
                }
            }

            function y(e) {
                return {
                    id: "copy_image",
                    label: l.default._("Copy Image", null, {
                        hk: "4vRfWn"
                    }).toString(),
                    onClick: async () => {
                        i.default.clipboard.writeImageToClipboard(e)
                    }
                }
            }

            function v(e) {
                return {
                    id: "copy_image_link",
                    label: l.default._("Copy Image Link", null, {
                        hk: "3xEBez"
                    }).toString(),
                    onClick: async () => {
                        i.default.clipboard.writeClipboard(e)
                    }
                }
            }

            function b(e) {
                return {
                    id: "copy_link",
                    label: l.default._("Copy Link", null, {
                        hk: "4zsDid"
                    }).toString(),
                    onClick: async () => {
                        i.default.clipboard.writeClipboard(e)
                    }
                }
            }

            function _(e) {
                return {
                    id: "open_link",
                    label: l.default._("Open Link", null, {
                        hk: "35o2JV"
                    }).toString(),
                    onClick: async () => {
                        i.default.platform.openExternalURL(e)
                    }
                }
            }
        },
        600: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 16 16",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("g", {
                    clipPath: "url(#ForwardIcon__clip0)"
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M15.468 8.915l-6.417 4.399c-.711.486-1.663-.037-1.663-.915V10.69a.25.25 0 00-.25-.25H1.889A1.222 1.222 0 01.667 9.22V6.777c0-.674.547-1.221 1.222-1.221h5.249a.25.25 0 00.25-.25V3.6c0-.878.952-1.402 1.663-.914l6.417 4.398a1.117 1.117 0 010 1.83",
                    clipRule: "evenodd"
                })), a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "ForwardIcon__clip0"
                }, a.default.createElement("path", {
                    fill: "#fff",
                    d: "M0 0h16v16H0z"
                }))))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        614: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, a.useRef)(null),
                    r = (0, a.useRef)(e.atSentinel);
                r.current = e.atSentinel;
                const o = (0, a.useRef)(e.leftSentinel);
                return o.current = e.leftSentinel, (0, a.useEffect)(() => {
                    const e = new IntersectionObserver((0, n.debounce)((function(e) {
                            if (e) {
                                const t = e[0].intersectionRatio;
                                1 === t && r.current ? r.current() : 0 === t && o.current && o.current()
                            }
                        }), 100)),
                        a = t.current;
                    return a ? (e.observe(a), () => e.unobserve(a)) : () => {}
                }, []), a.default.createElement("div", {
                    ref: t
                })
            };
            var n = r(117),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = o();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(r, a, l) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }
        },
        615: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    renderDetail: t,
                    renderMaster: r,
                    renderSidebar: n,
                    canCollapseMaster: l,
                    persistentStorageKey: s,
                    collapseMode: u = "hide_master",
                    startOnDetailView: c,
                    containerRef: v,
                    denseThreadList: b
                } = e;
                let _ = (0, o.useRef)(0),
                    w = (0, o.useRef)(0),
                    C = (0, o.useRef)(null),
                    E = (0, o.useRef)(null);
                const {
                    window: k
                } = (0, i.useWindowContext)(), x = (0, o.useMemo)(() => {
                    const e = k.localStorage.getItem("is_master_container_collapsed" + s);
                    return !!e && JSON.parse(e)
                }, [k.localStorage, s]), [M, S] = (0, o.useReducer)(y, {
                    isDetailActive: !!c,
                    isCompactMode: !1,
                    cursor: "default",
                    masterWidth: 310,
                    sidebarWidth: 280,
                    isMasterCollapsed: x,
                    denseThreadList: Boolean(b)
                }), O = (0, o.useRef)(null), T = (0, o.useRef)(null), I = (0, o.useCallback)(e => {
                    T.current = e, v && (v.current = e)
                }, [v]);
                (0, o.useEffect)(() => {
                    k.localStorage.setItem("is_master_container_collapsed", JSON.stringify(M.isMasterCollapsed))
                }, [M.isMasterCollapsed, k.localStorage]);
                const R = (0, o.useCallback)(() => {
                        S({
                            type: "activate master"
                        })
                    }, []),
                    A = (0, o.useCallback)(() => {
                        S({
                            type: "activate details"
                        })
                    }, []);
                (0, o.useEffect)(() => {
                    const e = T.current;
                    if (!e) throw new Error("Could not find the containing element for MasterDetailContainer.");
                    if (void 0 === k.ResizeObserver) return () => {};
                    const t = new k.ResizeObserver(e => {
                        const t = e[0].target.clientWidth;
                        S({
                            type: "container resized",
                            breakpoint: 650,
                            width: t
                        })
                    });
                    return t.observe(e), () => {
                        t.unobserve(e)
                    }
                }, [k]);
                const P = M.isCompactMode && "collapse_master" === u || M.isMasterCollapsed,
                    j = M.isCompactMode && "hide_master" === u,
                    D = e => o.default.createElement(p, {
                        role: "main",
                        key: "details",
                        style: e,
                        cursor: M.cursor
                    }, t({
                        isCompactMode: j,
                        activateMasterView: R
                    })),
                    z = function(e) {
                        let t = e.screenX - _.current;
                        if (O.current) {
                            O.current === E.current && (t *= -1);
                            let e = w.current + t;
                            O.current === C.current && l && S({
                                type: "update master collapsed",
                                width: e
                            }), e = Math.max(270, e), e = Math.min(360, e), O.current && (O.current.style.width = e + "px")
                        }
                    },
                    F = e => t => {
                        e && (O.current = e, e === C.current && M.isCompactMode || (S({
                            type: "start dragging"
                        }), _.current = t.screenX, w.current = e.clientWidth, k.addEventListener("mousemove", z), k.addEventListener("mouseup", (function t() {
                            const r = O.current === C.current ? 310 : 280;
                            S({
                                type: "stop dragging",
                                resizeKey: e === C.current ? "masterWidth" : "sidebarWidth",
                                finalWidth: O.current ? O.current.clientWidth : r
                            }), k.removeEventListener("mousemove", z), k.removeEventListener("mouseup", t)
                        }))))
                    },
                    B = (e, t) => o.default.createElement(h, {
                        style: {
                            ...e,
                            maxWidth: P ? d(Boolean(b)) : void 0,
                            width: j ? "100%" : M.masterWidth
                        },
                        ref: C,
                        key: "master",
                        role: "navigation",
                        isCompactMode: j,
                        cursor: M.cursor
                    }, r({
                        isAnimating: "enter" === t || "leave" === t,
                        isCompactMode: j,
                        activateDetailView: A,
                        isCollapsed: P
                    }), o.default.createElement("div", {
                        key: "line_adjuster"
                    }, o.default.createElement(g, {
                        key: "header"
                    }), o.default.createElement(m, {
                        align: "right",
                        key: "adjuster",
                        onMouseDown: F(C.current)
                    })));
                return o.default.createElement(f, {
                    ref: I
                }, j ? o.default.createElement(a.Transition, {
                    native: !0,
                    items: M.isDetailActive,
                    config: {
                        tension: 400,
                        friction: 26,
                        clamp: !0
                    },
                    from: e => ({
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        position: "absolute",
                        transform: e ? "translate3d(100%, 0, 0)" : "translate3d(0, 0, 0)"
                    }),
                    enter: e => ({
                        transform: e ? "translate3d(0, 0, 0)" : void 0
                    }),
                    leave: e => ({
                        transform: e ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)"
                    })
                }, (e, t) => e ? e => D(e) : e => B(e, t)) : [B(), D()], n && o.default.createElement("div", {
                    style: {
                        width: M.sidebarWidth,
                        position: "relative"
                    },
                    ref: E
                }, o.default.createElement(m, {
                    align: "left",
                    onMouseDown: F(E.current)
                }), n()))
            };
            var n = c(r(1)),
                a = r(46),
                o = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0)),
                l = c(r(2)),
                i = r(35),
                s = r(164);

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function d(e) {
                return e ? 68 : 80
            }
            const f = (0, n.default)(l.default)({
                    flex: 1,
                    flexDirection: "row"
                }),
                h = (0, a.animated)((0, n.default)(l.default)(e => ({
                    backgroundColor: e.theme.semanticColors.bgSurfaceSecondary,
                    flexDirection: "row",
                    borderRightColor: e.theme.colors.base50,
                    borderRightWidth: e.isCompactMode ? 0 : 1,
                    maxWidth: e.isCompactMode ? "100%" : 360,
                    cursor: e.cursor
                }))),
                p = (0, a.animated)((0, n.default)(l.default)(e => ({
                    backgroundColor: e.theme.semanticColors.bgSurface,
                    flexDirection: "row",
                    flex: 60,
                    maxWidth: "100%",
                    cursor: e.cursor,
                    zIndex: 1
                }))),
                m = (0, n.default)(l.default)(e => ({
                    fontSize: "15px",
                    textAlign: "center",
                    WebkitUserDrag: "none",
                    border: "2px solid transparent",
                    height: `calc(100% - ${(0,s.getTitleBarHeight)(e.theme)}px - 10px)`,
                    cursor: "col-resize",
                    position: "absolute",
                    bottom: 0,
                    [e.align]: 0,
                    zIndex: 2
                })),
                g = (0, n.default)(l.default)(e => ({
                    height: (0, s.getTitleBarHeight)(e.theme) + 10,
                    border: "2px solid transparent",
                    top: 0,
                    right: 0,
                    position: "absolute"
                }));

            function y(e, t) {
                const {
                    isCompactMode: r,
                    denseThreadList: n
                } = e;
                switch (t.type) {
                    case "container resized": {
                        const n = t.breakpoint,
                            a = t.width;
                        if (!r && a < n) return {
                            ...e,
                            isCompactMode: !0
                        };
                        if (r && a > n) return {
                            ...e,
                            isCompactMode: !1
                        };
                        break
                    }
                    case "start dragging":
                        return {
                            ...e, cursor: "col-resize"
                        };
                    case "stop dragging":
                        return {
                            ...e, [t.resizeKey]: t.finalWidth, cursor: "default"
                        };
                    case "activate details":
                        return {
                            ...e, isDetailActive: !0
                        };
                    case "activate master":
                        return {
                            ...e, isDetailActive: !1
                        };
                    case "update master collapsed":
                        if (e.isMasterCollapsed && t.width > 180) return {
                            ...e,
                            isMasterCollapsed: !1,
                            masterWidth: 270
                        };
                        if (!e.isMasterCollapsed && t.width < 100) return {
                            ...e,
                            masterWidth: d(n),
                            isMasterCollapsed: !0
                        }
                }
                return e
            }
        },
        627: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    nullstate: t,
                    sendPostback: r
                } = e, {
                    privacyText: o,
                    ctas: l
                } = t;
                return i.default.createElement(u, null, i.default.createElement(c, null, i.default.createElement(n.default, {
                    messageText: o
                })), l.map(e => i.default.createElement(a.default, {
                    key: e.ctaId,
                    ctaItem: e,
                    sendPostback: r
                })))
            };
            var n = s(r(362)),
                a = s(r(1481)),
                o = s(r(1)),
                l = s(r(2)),
                i = s(r(0));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, o.default)(l.default)({
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: 24
                }),
                c = (0, o.default)(l.default)({
                    marginBottom: 12
                })
        },
        628: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M18.366 11.384a1.25 1.25 0 011.768-1.768l7.5 7.5a1.25 1.25 0 010 1.768l-7.5 7.5a1.25 1.25 0 01-1.768-1.768l4.94-4.94a.25.25 0 00-.177-.426H9.25a1.25 1.25 0 110-2.5h13.879a.25.25 0 00.176-.427l-4.939-4.94z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        630: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getReactionLabels = void 0;
            var n, a = (n = r(5)) && n.__esModule ? n : {
                default: n
            };
            let o;
            t.getReactionLabels = () => (o || (o = {
                "😠": a.default._("angry reaction", null, {
                    hk: "EW0yK"
                }).toString(),
                "😍": a.default._("heart eyes reaction", null, {
                    hk: "3esdaB"
                }).toString(),
                "😆": a.default._("laugh reaction", null, {
                    hk: "m6qre"
                }).toString(),
                "😢": a.default._("sad reaction", null, {
                    hk: "1q6itO"
                }).toString(),
                "👎": a.default._("thumbs down reaction", null, {
                    hk: "4qqapo"
                }).toString(),
                "👍": a.default._("thumbs up reaction", null, {
                    hk: "12R0Zx"
                }).toString(),
                "😮": a.default._("wow reaction", null, {
                    hk: "s0LA4"
                }).toString(),
                "🤗": a.default._("care reaction", null, {
                    hk: "1Zpz6B"
                }).toString(),
                "❤": a.default._("heart reaction", null, {
                    hk: "1HXxVB"
                }).toString()
            }), o)
        },
        631: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M17.75 6.5a1 1 0 00-1 1v9.25a.25.25 0 01-.25.25h-1.998a1 1 0 00-.844 1.537l3.498 5.497a1 1 0 001.688 0l3.498-5.497A1 1 0 0021.498 17H19.5a.25.25 0 01-.25-.25V7.5a1 1 0 00-1-1h-.5zM7 28a1 1 0 011-1h20a1 1 0 011 1v.5a1 1 0 01-1 1H8a1 1 0 01-1-1V28z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        632: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getURLMatches = function(e) {
                return l.match(e)
            };
            var n = o(r(1616)),
                a = o(r(1622));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const l = (0, n.default)().tlds(a.default).set({
                fuzzyIP: !0
            })
        },
        633: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M10 11a4 4 0 014-4h8a4 4 0 014 4v15.998c0 1.73-2.048 2.644-3.336 1.488L19.336 25.5a2 2 0 00-2.672 0l-3.328 2.987C12.048 29.642 10 28.728 10 26.998V11z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        634: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M6.2 27.4h1l1.3 1.4v1l-6 6H.3v-2.4zM17.8 34h-1L2.2 19.2V18l.8-.7.7-.7 1-.6 1.2-.7.6-.1.4-.3h5.6l8.7 8.8v4.2l-.4 1.3-.3 1.3-.5 1-.8 1.3zm-5.4-19.2L19 8.4l8.8 8.9-6.5 6.3zm16.3 2c.6.2 1.1.9 1.9.8.6 0 1.3 0 1.8-.4l3.3-3.3v-1.6L23.8.3H22l-3 3.1c-.3 1-.4 2 0 3 0 .5.3 1 .7 1.2l9.1 9.3z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M23.8.2c-.7.1-1.8-.4-2.4.5l-2.6 2.6c-.4 1.2-.4 2.7.2 3.9l2 2 7.6 7.7c.7.5 1.7 1 2.7.9.9 0 1.5-.8 2.1-1.5l2.4-2.3c0-.9.3-1.8-.5-2.4L23.9.3V.2zm-5 8l-.4.5-6 6c-.1.2.2.4.3.6l8.4 8.4c.3.1.4-.2.6-.3l6.1-6c.2-.3-.1-.4-.3-.6L19 8.3z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M21.2 23.6l-8.8-8.8c-2.7-.3-5.6-.4-8 1a5 5 0 00-2.2 2.4c0 1.6 1.2 2.7 2.3 3.6 1 .8 1.7 1.7 2.6 2.6l9.5 9.6c1.7 0 3-1.4 3.7-2.9a14 14 0 00.9-7.5zM8 28l-.7-.8h-1l-.7.7-5.3 5.4-.1.8v1.7c.1.2.4 0 .6 0h1.9c.2 0 .4-.3.6-.5L8.6 30c.1-.3 0-.5 0-.8l-.1-.6L8 28z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M6 27.2l-6 6v2c0 .3 0 .8.3.8h2.4l3.1-3 3-3.2v-1.2L7.3 27H6.1zm12.9-19c-1 .7-1.8 1.6-2.7 2.4l-3.9 4a14.3 14.3 0 00-7.6 1c-1.1.5-2.2 1.4-2.5 2.6-.2 1.1.5 2.1 1.3 2.8 2.4 2.2 4.7 4.6 7 7l6 6c.6.2 1.3 0 1.8-.3A6 6 0 0021 30c.6-2 .8-4.1.5-6.2l6.6-6.4c0-.3-.4-.5-.5-.8l-8.4-8.4s-.2-.1-.2 0zM22.5 0c-.9 0-1.4.9-2 1.4-.6.7-1.4 1.2-2 2a5 5 0 00.4 3.8l3.8 4 5.8 5.8c.8.6 2 1.1 3 .9 1-.2 1.6-1 2.3-1.7l2.1-2.2v-1.4c-.1-.8-.9-1.3-1.4-1.9L24 .2c-.4-.2-1-.1-1.5-.2z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        638: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                message: e,
                onClose: t,
                wrapText: r,
                actions: o,
                compact: u
            }) {
                const c = (0, d.useTheme)();
                if (u) {
                    const t = o ? o.map(e => e.content.toString()) : [n.default._("OK", null, {
                        hk: "WU1Ku"
                    }).toString()];
                    return (i.default.createElement(p, {
                        color: c.colors.red,
                        onClick: async () => {
                            const r = await a.default.platform.showMessageBox({
                                type: "info",
                                message: e.toString(),
                                buttons: t
                            });
                            o && o[r.response].onActivate()
                        }
                    }, i.default.createElement(m, null, i.default.createElement(l.default, {
                        size: 20,
                        color: c.colors.base10
                    }))))
                }
                return (i.default.createElement(p, {
                    color: c.colors.red
                }, i.default.createElement(m, null, i.default.createElement(f.default, {
                    use: "subtext-medium",
                    color: c.semanticColors.textWhite,
                    wrapText: r
                }, i.default.createElement(s.default, null, e, o && o.map(e => i.default.createElement(g, {
                    key: e.content.toString(),
                    onClick: e.onActivate
                }, e.content))))), t && i.default.createElement(y, null, i.default.createElement(v, {
                    color: c.semanticColors.textWhite,
                    size: 18,
                    "aria-label": n.default._("Close", null, {
                        hk: "4ELtWr"
                    }).toString(),
                    telemetryName: "closeBannerButton",
                    onClick: t
                }))))
            };
            var n = h(r(5)),
                a = h(r(9)),
                o = h(r(1)),
                l = h(r(251)),
                i = h(r(0)),
                s = h(r(2)),
                u = h(r(262)),
                c = h(r(116)),
                d = r(6),
                f = h(r(4));

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const p = (0, o.default)(s.default)(e => ({
                    background: e.color,
                    marginBottom: "8px",
                    padding: 5,
                    flexDirection: "row",
                    justifyContent: "center"
                })),
                m = (0, o.default)(s.default)({
                    flexGrow: 1,
                    flexShrink: 1,
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center"
                }),
                g = (0, o.default)(c.default)({
                    alignItems: "stretch"
                }),
                y = (0, o.default)(s.default)({
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    marginLeft: 5
                }),
                v = (0, o.default)(u.default)(e => ({
                    ":active": {
                        opacity: .8
                    }
                }))
        },
        639: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                const r = (0, a.useRef)(),
                    [o, l] = (0, a.useState)("");
                return (0, a.useEffect)(() => {
                    if (null == e) return void l("");
                    l(t(e));
                    const a = (0, n.computeUpdatePeriod)(e, !0);
                    return null != a && (r.current = window.setTimeout((function a() {
                        if (null == e) return;
                        l(t(e));
                        const o = (0, n.computeUpdatePeriod)(e, !1);
                        null != o && (r.current = window.setTimeout(a, o))
                    }), a)), () => {
                        r.current && window.clearTimeout(r.current)
                    }
                }, [t, e]), o
            };
            var n = r(115),
                a = r(0)
        },
        640: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    authData: t,
                    compact: r,
                    participants: c,
                    participantStatus: f,
                    profilePictureUrl: m,
                    presence: g,
                    listItem: {
                        threadName: y,
                        isUnread: _,
                        isMuted: w,
                        threadType: C,
                        mentionCount: E
                    },
                    deliveryStatus: k,
                    selected: x
                } = e, [M] = (0, u.useUserSetting)("showAsAvailable"), S = (0, s.default)(g), O = g ? g.lastActiveTimestampMs : null, T = M && C === l.ThreadType.OnetoOne ? O : null, I = w ? d.default.createElement(h.default, {
                    status: i.DeliveryStatus.Muted,
                    inChatCell: !0,
                    mentionCount: E
                }) : void 0;
                return d.default.createElement(d.default.Fragment, null, !m && c.length > 2 ? d.default.createElement(p.default, {
                    size: "small",
                    viewerId: t.userID,
                    participants: c
                }) : d.default.createElement(n.default, {
                    size: "small",
                    viewerId: t.userID,
                    participants: c,
                    isDndModeOn: f.doNotDisturbEnabled,
                    presence: S,
                    profilePictureUrl: m,
                    lastActiveTimestampMs: T
                }), !r && d.default.createElement(d.default.Fragment, null, d.default.createElement(a.MainContent, null, d.default.createElement(v, {
                    use: _ ? "body-bold" : "body-medium",
                    active: _ || x
                }, (0, o.default)({
                    threadName: y,
                    threadType: C,
                    participantStatus: f
                }))), d.default.createElement(b, null, I, ![i.DeliveryStatus.Delivered, i.DeliveryStatus.Sending, i.DeliveryStatus.Sent, i.DeliveryStatus.Read].includes(k) && d.default.createElement(h.default, {
                    status: k,
                    inChatCell: !0,
                    mentionCount: E
                }))))
            }, t.ChatCellShimmer = function({
                compact: e,
                index: t
            }) {
                return d.default.createElement(a.ShimmerContainer, {
                    compact: e
                }, d.default.createElement(m.CircleShimmer, {
                    size: 32,
                    index: t
                }), !e && d.default.createElement(a.MainContent, null, d.default.createElement(_, {
                    index: t
                })))
            };
            var n = y(r(38)),
                a = r(252),
                o = y(r(554)),
                l = r(8),
                i = r(133),
                s = y(r(245)),
                u = r(72),
                c = y(r(1)),
                d = y(r(0)),
                f = y(r(2)),
                h = y(r(232)),
                p = y(r(173)),
                m = r(100),
                g = y(r(4));

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const v = (0, c.default)(g.default)(e => ({
                    alignSelf: "flex-start",
                    opacity: e.active ? 1 : .8
                })),
                b = (0, c.default)(f.default)(e => ({
                    flexDirection: "row",
                    alignItems: "center"
                }));
            const _ = (0, c.default)(m.TextShimmer)({
                height: 12
            })
        },
        641: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const [e, t] = (0, n.useState)(() => new Date);
                return (0, n.useEffect)(() => {
                    const e = setInterval(() => t(new Date), 1e4);
                    return () => clearInterval(e)
                }, []), e
            };
            var n = r(0)
        },
        644: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.unpinConfirm = t.repinConfirm = void 0;
            var n = o(r(5)),
                a = o(r(9));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.repinConfirm = e => async () => {
                0 === (await a.default.platform.showMessageBox({
                    type: "info",
                    noLink: !0,
                    cancelId: 2,
                    detail: n.default._("Are you sure you want to replace the current pin with this message?", null, {
                        hk: "1eNHQy"
                    }).toString(),
                    message: n.default._("Replace the current pin?", null, {
                        hk: "4tNEQn"
                    }).toString(),
                    buttons: [n.default._("Confirm", null, {
                        hk: "37bVqW"
                    }).toString(), n.default._("Cancel", null, {
                        hk: "1J4v58"
                    }).toString()]
                })).response && e()
            };
            t.unpinConfirm = e => async () => {
                0 === (await a.default.platform.showMessageBox({
                    type: "info",
                    noLink: !0,
                    cancelId: 2,
                    detail: n.default._("Are you sure you want to remove this pin?", null, {
                        hk: "gaJos"
                    }).toString(),
                    message: n.default._("Remove this pin?", null, {
                        hk: "2U68rk"
                    }).toString(),
                    buttons: [n.default._("Confirm", null, {
                        hk: "37bVqW"
                    }).toString(), n.default._("Cancel", null, {
                        hk: "1J4v58"
                    }).toString()]
                })).response && e()
            }
        },
        645: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                initialQuery: e = "",
                searchResultCount: t,
                searchQueryStatus: r,
                onSelectResult: u,
                issueSearchQuery: h,
                onClose: v
            }) {
                const b = (0, n.useTheme)(),
                    [_, x] = (0, f.useReducer)(k, {
                        state: "ready",
                        query: e,
                        searchResultCount: -1,
                        selectedResultIndex: 0
                    });
                (0, f.useEffect)(() => {
                    "" !== e && (x({
                        type: "issue search query"
                    }), x({
                        type: "query changed",
                        query: e
                    }))
                }, [e]);
                const M = (0, f.useCallback)(e => {
                        x({
                            type: "issue search query"
                        }), h(e)
                    }, [h]),
                    S = (0, i.default)(_.query, 250);
                (0, f.useEffect)(() => {
                    null != S && M(S)
                }, [M, S]), (0, f.useEffect)(() => {
                    "navigating" === _.state && x({
                        type: "thread changed"
                    })
                }, [null == r ? void 0 : r.threadKey]);
                const O = "navigating" === _.state ? _.selectedResultIndex : null;
                (0, f.useEffect)(() => {
                    "navigating" === _.state && null != O && u(O)
                }, [_.state, O, u]), (0, f.useEffect)(() => {
                    r && r.status === o.SearchQueryStatusType.Complete && x(t ? {
                        type: "search results found",
                        searchResultCount: t
                    } : {
                        type: "no search results"
                    })
                }, [r, t]);
                const T = (0, y.useWithSurface)("go_up_to_earlier_message", e => {}),
                    I = (0, y.useWithSurface)("go_down_to_recent_message", e => {}),
                    R = (0, y.useWithSurface)("close_message_search", e => {}),
                    A = (0, y.useWithSurface)("query_changed", e => {}),
                    P = (0, f.useCallback)(e => {
                        switch (e.key) {
                            case "Enter":
                            case "ArrowUp":
                                e.preventDefault(), x({
                                    type: "go up to earlier message"
                                }), "navigating" === _.state && T(e);
                                break;
                            case "ArrowDown":
                                e.preventDefault(), x({
                                    type: "go down to more recent message"
                                }), "navigating" === _.state && I(e);
                                break;
                            case "Escape":
                                e.preventDefault(), v(), R(e)
                        }
                    }, [R, I, T, v, _.state]),
                    j = (0, f.useMemo)(() => "navigating" === _.state ? l.default._("Done", null, {
                        hk: "1UTJB1"
                    }).toString() : l.default._("Cancel", null, {
                        hk: "zQl2G"
                    }).toString(), [_.state]);
                let D = void 0;
                "navigating" === _.state && -1 !== _.searchResultCount ? D = `${_.selectedResultIndex+1}/${_.searchResultCount}` : "empty" === _.state && (D = "0/0");
                const z = a.KeyboardShortcuts[a.KeyboardAction.OpenMessageSearch],
                    F = b.select({
                        ...z
                    });
                return f.default.createElement(w, {
                    onKeyDown: P
                }, f.default.createElement(C, null, f.default.createElement(g.default, {
                    placeholder: l.default._("Search in Conversation ({keyboard shortcut})", [l.default._param("keyboard shortcut", (0, s.toHumanReadableString)((0, s.toKeyEvent)(F), b))], {
                        hk: "4xIUSi"
                    }).toString(),
                    query: _.query,
                    onQueryChange: e => {
                        x({
                            type: "query changed",
                            query: e
                        }), A({
                            type: "keydown",
                            preventDefault: () => {}
                        })
                    },
                    focusShortcut: z,
                    autoFocus: !0,
                    isLoading: "loading" === _.state,
                    rightSnippet: D
                })), f.default.createElement(E, {
                    "aria-label": l.default._("Go up to earlier message", null, {
                        hk: "2RgS5v"
                    }).toString(),
                    telemetryName: "goUpToEarlierMessageSearchResultButton",
                    icon: d.default,
                    use: m.RoundButtonUse.Transparent,
                    size: m.RoundButtonSize.Small,
                    silentPressedState: !0,
                    onClick: () => x({
                        type: "go up to earlier message"
                    }),
                    disabled: "navigating" !== _.state || _.searchResultCount < 2
                }), f.default.createElement(E, {
                    "aria-label": l.default._("Go down to more recent message", null, {
                        hk: "3tzA9Q"
                    }).toString(),
                    telemetryName: "goDownToMoreRecentMessageSearchResultButton",
                    icon: c.default,
                    use: m.RoundButtonUse.Transparent,
                    size: m.RoundButtonSize.Small,
                    silentPressedState: !0,
                    onClick: () => x({
                        type: "go down to more recent message"
                    }),
                    disabled: "navigating" !== _.state || _.searchResultCount < 2
                }), f.default.createElement(p.default, {
                    "aria-label": j,
                    telemetryName: "closeMessageSearchButton",
                    size: p.RectangleButtonSize.Small,
                    caption: j,
                    onClick: v
                }))
            };
            var n = r(6),
                a = r(196),
                o = r(8),
                l = _(r(5)),
                i = _(r(340)),
                s = r(123),
                u = _(r(1)),
                c = _(r(388)),
                d = _(r(1805)),
                f = b(r(0)),
                h = _(r(2)),
                p = b(r(16)),
                m = b(r(22)),
                g = _(r(242)),
                y = r(13);

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function() {
                    return e
                }, e
            }

            function b(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = v();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const w = (0, u.default)(h.default)({
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "12px 0"
                }),
                C = (0, u.default)(h.default)({
                    flex: "1 1 0px",
                    marginRight: 8
                }),
                E = (0, u.default)(m.default)({
                    marginRight: 8,
                    ":disabled": {
                        opacity: .34
                    }
                });

            function k(e, t) {
                switch (t.type) {
                    case "query changed":
                        return {
                            ...e, query: t.query
                        };
                    case "thread changed":
                        return {
                            ...e, searchResultCount: -1, selectedResultIndex: 0
                        };
                    case "issue search query":
                        return "" === e.query ? {
                            ...e,
                            state: "ready"
                        } : {
                            ...e,
                            state: "loading"
                        };
                    case "search results found":
                        return {
                            ...e, state: "navigating", searchResultCount: t.searchResultCount, selectedResultIndex: 0
                        };
                    case "no search results":
                        return {
                            ...e, state: "empty"
                        };
                    case "go up to earlier message":
                        if ("navigating" !== e.state) return e;
                        const r = e.selectedResultIndex + 1 >= e.searchResultCount;
                        return {
                            ...e, selectedResultIndex: r ? 0 : e.selectedResultIndex + 1
                        };
                    case "go down to more recent message":
                        if ("navigating" !== e.state) return e;
                        const n = e.selectedResultIndex - 1 < 0;
                        return {
                            ...e, selectedResultIndex: n ? e.searchResultCount - 1 : e.selectedResultIndex - 1
                        }
                }
                return e
            }
        },
        651: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M5 13.5a4 4 0 014-4h10a4 4 0 014 4v9a4 4 0 01-4 4H9a4 4 0 01-4-4v-9zm8 0a1 1 0 112 0v3.25c0 .138.112.25.25.25h3.25a1 1 0 110 2h-3.25a.25.25 0 00-.25.25v3.25a1 1 0 11-2 0v-3.25a.25.25 0 00-.25-.25H9.5a1 1 0 110-2h3.25a.25.25 0 00.25-.25V13.5z",
                    clipRule: "evenodd"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M29.552 23.393l-3.723-1.861A1.5 1.5 0 0125 20.19v-4.38a1.5 1.5 0 01.829-1.342l3.723-1.861A1 1 0 0131 13.5V22.5a1 1 0 01-1.448.894z"
                }))
            };
            var n, a = (n = r(0)) && n.__esModule ? n : {
                default: n
            }
        },
        652: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RoomModule = void 0;
            var n = r(258),
                a = r(1826),
                o = r(194);
            const l = [{
                id: "room",
                reducerMap: {
                    room: a.RoomReducer
                },
                sagas: [o.RoomSaga]
            }, n.InboxModule];
            t.RoomModule = l
        },
        653: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return (0, s.useEffect)(() => {
                    l.default.performance.markEvent(o.PerformanceEvents.ROOMS_TRAY_SHIMMER_RENDERED)
                }, []), s.default.createElement(d, null, s.default.createElement(a.default, null), s.default.createElement(a.default, null), s.default.createElement(a.default, null), s.default.createElement(a.default, null), s.default.createElement(a.default, null), s.default.createElement(a.default, null), s.default.createElement(a.default, null))
            };
            var n = c(r(2)),
                a = c(r(1829)),
                o = r(8),
                l = c(r(9)),
                i = c(r(1)),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = (0, i.default)(n.default)({
                height: 105,
                flexDirection: "row",
                padding: "8px 12px"
            })
        },
        654: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = _(r(345)),
                a = _(r(560)),
                o = _(r(27)),
                l = r(8),
                i = r(166),
                s = _(r(5)),
                u = r(72),
                c = r(123),
                d = _(r(1)),
                f = _(r(558)),
                h = b(r(0)),
                p = b(r(2)),
                m = r(6),
                g = _(r(557)),
                y = _(r(4));

            function v() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return v = function() {
                    return e
                }, e
            }

            function b(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = v();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const w = (0, d.default)(p.FocusableView)(e => ({
                    height: 48,
                    flexDirection: "row",
                    padding: "8px 12px",
                    alignItems: "center",
                    borderStyle: "solid",
                    borderWidth: 4,
                    borderColor: "transparent",
                    "body.focus-is-visible &:focus": {
                        outline: "none",
                        borderColor: `${(0,i.addAlpha)(e.theme.semanticColors.primaryAccent,.2)}`
                    }
                })),
                C = (0, d.default)(p.default)({
                    flex: 1,
                    margin: "0px 12px"
                }),
                E = (0, d.default)(p.default)({
                    flexDirection: "row"
                }),
                k = (0, d.default)(y.default)({
                    flex: "0 1 auto"
                }),
                x = d.default.strong(e => ({
                    color: e.theme.colors.base80,
                    fontWeight: 600
                })),
                M = (0, d.default)(y.default)(e => ({
                    color: e.theme.colors.base60
                }));
            var S = (0, h.forwardRef)((function(e, t) {
                const {
                    searchResult: r,
                    onClick: i = (() => {}),
                    participants: d,
                    viewerId: p
                } = e, {
                    title: v,
                    subtitle: b,
                    serverQuery: _,
                    resultType: S,
                    profilePicture: O,
                    secondaryProfilePicture: T,
                    messageTimestampMs: I,
                    isOnlineIndicatorVisible: R,
                    lastActiveTimestampMs: A
                } = r, P = (0, m.useTheme)(), [j] = (0, u.useUserSetting)("showAsAvailable");
                let D = null;
                e.shortcut && (D = (0, c.toHumanReadableString)((0, c.toKeyEvent)(e.shortcut), P));
                const z = (0, o.default)(O),
                    F = (0, o.default)(T),
                    B = (0, h.useMemo)(() => {
                        if (!_ || !b || 0 === I) return null;
                        let e;
                        try {
                            e = new RegExp(_, "gi")
                        } catch (e) {
                            return null
                        }
                        const t = [];
                        let r, n = 0;
                        for (; r = e.exec(b);) {
                            const e = r.index,
                                a = e + _.length;
                            t.push(b.substring(n, e)), t.push(h.default.createElement(x, {
                                key: e
                            }, b.substring(e, a))), n = a
                        }
                        return t.push(b.substring(n)), h.default.createElement(k, {
                            use: "caption",
                            color: P.colors.base70
                        }, t)
                    }, [_, b, I, P.colors.base70]),
                    L = s.default._("Search result: Title: {Name given to a thread, or list of participant names}, Subtitle: {Snippet of the search result message, or the number of matches found if there are multiple results}", [s.default._param("Name given to a thread, or list of participant names", v), s.default._param("Snippet of the search result message, or the number of matches found if there are multiple results", b)], {
                        hk: "2uRGDk"
                    }).toString();
                return h.default.createElement(w, {
                    onActivate: i,
                    "aria-label": L,
                    role: "link",
                    telemetryName: "search-result",
                    ref: (0, f.default)(t)
                }, h.default.createElement(n.default, {
                    profilePictureUrl: z,
                    secondaryPictureUrl: F,
                    participants: d,
                    viewerId: p,
                    lastActiveTimestampMs: j ? A : void 0,
                    presence: R && j ? l.PresenceType.Active : l.PresenceType.Offline
                }), h.default.createElement(C, null, h.default.createElement(y.default, {
                    use: "body"
                }, v), h.default.createElement(E, null, h.default.createElement(k, {
                    use: "caption",
                    color: P.colors.base70
                }, h.default.createElement(a.default, {
                    searchResultType: S,
                    subtitle: B || b,
                    participants: d,
                    viewerId: p
                })), S === l.SearchResultType.IntegratedMessageSearchThread && 0 !== I && h.default.createElement(g.default, {
                    use: "caption",
                    timestamp: I
                }))), h.default.createElement(M, {
                    use: "subtext"
                }, D))
            }));
            t.default = S
        },
        655: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    onSearchQueryChange: t,
                    suggestions: r,
                    selectedUsers: a,
                    onChange: l,
                    isLoadingMoreContacts: c,
                    viewerId: d
                } = e, [f, b] = (0, o.useState)(!1), [_, w] = (0, o.useState)(""), [C, E] = (0, o.useState)(0), [k, x] = (0, o.useState)(null), M = (0, o.useRef)(null), S = () => {
                    M.current && M.current.focus()
                };
                (0, o.useEffect)(() => {
                    S()
                }, []), (0, o.useEffect)(() => {
                    E(0)
                }, [r, E]);
                const O = f && r && r.length > 0,
                    T = e => {
                        l([...a, e]), w(""), t(""), setTimeout(S, 0)
                    },
                    I = e => {
                        O && r && E("up" === e ? Math.max(0, C - 1) : Math.min(r.length - 1, C + 1))
                    };
                return o.default.createElement(h, {
                    htmlFor: "recipients-input"
                }, o.default.createElement(p, {
                    use: "body"
                }, n.default._("To:", null, {
                    hk: "1v4HGO"
                })), o.default.createElement(m, {
                    onKeyDown: e => {
                        switch (e.key) {
                            case "Backspace":
                                if (f && "" === _ && a.length > 0) l(a.slice(0, a.length - 1));
                                else if (!f && null != k) {
                                    const e = a.filter((e, t) => t !== k);
                                    l(e), x(null), S()
                                }
                                break;
                            case "Enter":
                                O && r && C < r.length && T(r[C]);
                                break;
                            case "ArrowUp":
                                e.preventDefault(), I("up");
                                break;
                            case "ArrowDown":
                                e.preventDefault(), I("down")
                        }
                    }
                }, a.map((e, t) => o.default.createElement(g, {
                    key: e.contactId,
                    onActivate: () => x(t),
                    selected: t === k
                }, o.default.createElement(u.default, {
                    use: "body-semibold"
                }, e.name))), o.default.createElement(y, {
                    role: "combobox",
                    "aria-expanded": f,
                    "aria-owns": "omnipickerlistbox"
                }, o.default.createElement(v, {
                    id: "recipients-input",
                    ref: M,
                    placeholder: a.length > 0 ? "" : n.default._("Type the name of a person or group", null, {
                        hk: "4do8vL"
                    }).toString(),
                    value: _,
                    onChange: e => {
                        const r = e.target.value;
                        w(r), t(r)
                    },
                    onFocus: () => {
                        b(!0), x(null)
                    },
                    onBlur: () => b(!1),
                    "aria-autocomplete": "list",
                    "aria-controls": "omnipickerlistbox",
                    "aria-activedescendant": 0 === r.length ? "omnipickernoresults" : `omnipickerlistbox-${C}`
                }), f && o.default.createElement(s.default, {
                    placement: "bottom-start",
                    target: M.current,
                    modifiers: {
                        preventOverflow: {
                            padding: 12
                        }
                    }
                }, o.default.createElement(i.default, {
                    contactSuggestions: r,
                    isLoadingMore: c,
                    onSelect: T,
                    viewerId: d,
                    selectedIndex: C
                })))))
            };
            var n = f(r(5)),
                a = f(r(1)),
                o = d(r(0)),
                l = d(r(2)),
                i = f(r(331)),
                s = f(r(91)),
                u = f(r(4));

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function d(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var o = n ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(r, a, o) : r[a] = e[a]
                    } return r.default = e, t && t.set(e, r), r
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const h = (0, a.default)(l.default)({
                    flexDirection: "row",
                    flex: 1
                }).withComponent("label", {
                    target: "e1evq9zd0",
                    label: "OmnipickerContainer"
                }),
                p = (0, a.default)(u.default)({
                    alignSelf: "start",
                    paddingTop: 2
                }),
                m = (0, a.default)(l.default)(e => ({
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    color: e.theme.semanticColors.textPrimary,
                    cursor: "text",
                    fontSize: "15px",
                    lineHeight: "20px",
                    marginLeft: 4
                })),
                g = (0, a.default)(l.FocusableView)(e => ({
                    backgroundColor: e.selected ? e.theme.select({
                        light: e.theme.colors.base40,
                        dark: e.theme.colors.base70
                    }) : e.theme.select({
                        light: e.theme.colors.base20,
                        dark: e.theme.colors.base50
                    }),
                    borderRadius: 5,
                    padding: "2px 6px",
                    display: "inline",
                    marginRight: 2,
                    marginBottom: 2
                })),
                y = (0, a.default)(l.default)({
                    flex: 1,
                    paddingTop: 2,
                    minWidth: 50
                }),
                v = (0, a.default)(l.default)(e => ({
                    flex: 1,
                    backgroundColor: "transparent",
                    fontSize: "15px",
                    lineHeight: "20px",
                    color: e.theme.semanticColors.textPrimary
                })).withComponent("input", {
                    target: "e1evq9zd1",
                    label: "RecipientsInput"
                })
        },
        656: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    thread: t,
                    nullstate: r
                } = e, o = (0, a.default)(t.threadPicture);
                return i.default.createElement(c, null, i.default.createElement(d, null, i.default.createElement(n.default, {
                    size: "xxlarge",
                    profilePictureUrl: o
                }), i.default.createElement(f, null, i.default.createElement(h, {
                    use: "title"
                }, t.threadName), i.default.createElement(p, {
                    use: "body",
                    wrapText: !0
                }, r.welcomeText))))
            };
            var n = u(r(38)),
                a = u(r(27)),
                o = u(r(1)),
                l = u(r(2)),
                i = u(r(0)),
                s = u(r(4));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, o.default)(l.default)({
                    flex: 1
                }),
                d = (0, o.default)(l.default)({
                    alignItems: "center"
                }),
                f = (0, o.default)(l.default)({
                    padding: "0 57px"
                }),
                h = (0, o.default)(s.default)(e => ({
                    textAlign: "center",
                    color: e.theme.semanticColors.textPrimary,
                    margin: "12px auto"
                })),
                p = (0, o.default)(s.default)(e => ({
                    textAlign: "center",
                    color: e.theme.semanticColors.textPrimary,
                    margin: "auto"
                }))
        },
        658: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    selectedSkintone: t,
                    onSkintoneSelected: r
                } = e, n = (0, a.getAllTonesForEmoji)("👍");
                return l.default.createElement(u, {
                    direction: "horizontal",
                    role: "radiogroup"
                }, n.map(e => l.default.createElement(c, {
                    role: "radio",
                    size: "normal",
                    emoji: e,
                    "aria-checked": (0, a.getModifierFromEmoji)(e) === t,
                    pressed: (0, a.getModifierFromEmoji)(e) === t,
                    onClick: () => {
                        const t = (0, a.getModifierFromEmoji)(e);
                        r(t)
                    },
                    key: e
                })))
            };
            var n = s(r(371)),
                a = r(330),
                o = s(r(1)),
                l = s(r(0)),
                i = s(r(33));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const u = (0, o.default)(i.default)({
                    flexDirection: "row"
                }),
                c = (0, o.default)(n.default)({
                    margin: 5
                })
        },
        71: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return a.test("number" == typeof e ? n(e) : e.charAt(0))
            };
            var n = String.fromCharCode,
                a = /\s/
        },
        89: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.openContextMenuOnKeyShortcut = function(e, t, r) {
                if (!r) return;
                "mac" === t.os ? !e.ctrlKey || "5" !== e.key && "i" !== e.key || r() : "windows" === t.os && e.shiftKey && "F10" === e.key && r()
            }
        },
        95: function(e, t) {
            e.exports = function() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n) r.call(n, a) && (e[a] = n[a])
                }
                return e
            };
            var r = Object.prototype.hasOwnProperty
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/InboxScreen~uiexplorer.bundle.js.map