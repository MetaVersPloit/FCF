(window.webpackJsonp = window.webpackJsonp || []).push([[24], {
    1660: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var r = n(8)
            , o = n(39)
            , a = g(n(5))
            , i = g(n(641))
            , l = n(61)
            , u = n(23)
            , s = g(n(1))
            , c = g(n(352))
            , d = n(11)
            , f = g(n(0))
            , p = g(n(2))
            , m = n(6)
            , h = g(n(4));
        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = (0,
            s.default)(p.default)(e => ({
                display: "flex",
                flexDirection: "row",
                marginLeft: 54,
                paddingTop: 5,
                paddingRight: 5,
                marginBottom: -4,
                lineHeight: "15px"
            }))
            , v = (0,
                s.default)(h.default)(e => ({
                    color: e.theme.colors.base70,
                    marginLeft: 3
                }));
        var b = (0,
            d.connect)((function (e, t) {
                var n;
                const r = (0,
                    l.requireAuthenticationData)(e)
                    , { userID: o } = r
                    , a = (0,
                        u.getParticipantListForThread)(e, t.threadKey).find(e => e.contactId === o)
                    , i = a ? a.gmtOffsetMinutes : null
                    , s = (0,
                        u.getLastMessageInfoForThread)(e, t);
                return {
                    viewerGmtOffsetMinutes: i,
                    lastMessageTimestamp: null !== (n = null == s ? void 0 : s.timestamp) && void 0 !== n ? n : null
                }
            }
            ))((function ({ peer: e, viewerGmtOffsetMinutes: t, lastMessageTimestamp: n }) {
                const l = (0,
                    m.useTheme)()
                    , u = (0,
                        i.default)();
                if (e.contactTypeExact !== r.ContactTypeExact.FBUser || null == e.gmtOffsetMinutes)
                    return null;
                const s = (0,
                    o.getLocalTime)(u, e.gmtOffsetMinutes)
                    , d = new Intl.DateTimeFormat(void 0, {
                        hour: "numeric",
                        minute: "numeric"
                    }).format(s)
                    , p = !!n && Math.abs(n - u.getTime()) / 36e5 > 2
                    , h = s.getHours()
                    , g = h < 8 || h > 18
                    , b = null != t && t != e.gmtOffsetMinutes;
                return g && b && p ? f.default.createElement(y, null, f.default.createElement(c.default, {
                    size: 16,
                    color: l.colors.base70
                }), f.default.createElement(v, {
                    use: "subtext-semibold"
                }, a.default._({
                    "*": "It's {Local time for other thread participant} for {participant}"
                }, [a.default._param("Local time for other thread participant", d), a.default._name("participant", e.name, 3)], {
                    hk: "1keAGe"
                }), e.doNotDisturbEnabled && f.default.createElement(f.default.Fragment, null, ". ", a.default._("Sending a message will not send a notification.", null, {
                    hk: "1a83LU"
                })))) : null
            }
            ));
        t.default = b
    },
    1661: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { peerId: t, peerName: n, threadKey: a, threadType: i, isPageThread: d } = e
                    , f = (0,
                        u.useRef)(null)
                    , m = (0,
                        l.useTheme)()
                    , { showContextMenu: h } = (0,
                        s.useContextMenu)()
                    , g = (0,
                        u.useCallback)(async () => {
                            h({
                                placement: "top",
                                items: [t ? (0,
                                    o.getBlockMenuItem)(t, n) : null, (0,
                                        o.getDeleteThreadMenuItem)(a), (0,
                                            o.getReportingMenuItem)(a, i, d)],
                                target: f.current
                            })
                        }
                            , [h, t, n, a, i, d])
                    , y = t ? r.default._("Replying will let {other_participant_name} call you, see when you've read messages, see Active Status, and more.", [r.default._param("other_participant_name", n)], {
                        hk: "1xRF7j"
                    }) : r.default._("Replying will let others call you, see when you've read messages, see Active Status, and more.", null, {
                        hk: "4EbJAZ"
                    });
                return u.default.createElement(u.default.Fragment, null, u.default.createElement(c.default, {
                    use: "subtext",
                    wrapText: !0,
                    color: m.semanticColors.textSecondary
                }, y), u.default.createElement(p, {
                    onClick: g
                }, u.default.createElement(c.default, {
                    use: "subtext-bold",
                    wrapText: !0,
                    ref: f,
                    css: {
                        paddingTop: 8
                    },
                    color: m.semanticColors.textPrimary
                }, r.default._("Don't want to reply? See other actions", null, {
                    hk: "1OZAnP"
                }))))
            }
            ;
        var r = f(n(5))
            , o = n(101)
            , a = f(n(1))
            , i = f(n(116))
            , l = n(6)
            , u = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = d();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(0))
            , s = n(66)
            , c = f(n(4));
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
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0,
            a.default)(i.default)({
                textDecoration: "none",
                ":hover, :active": {
                    textDecoration: "underline"
                }
            })
    },
    1662: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var r = ee(n(559))
            , o = n(35)
            , a = n(196)
            , i = n(117)
            , l = ee(n(59))
            , u = n(8)
            , s = ee(n(1666))
            , c = n(81)
            , d = ee(n(5))
            , f = ee(n(9))
            , p = ee(n(562))
            , m = ee(n(1678))
            , h = ee(n(243))
            , g = ee(n(148))
            , y = n(72)
            , v = ee(n(1706))
            , b = ee(n(329))
            , k = n(123)
            , S = n(32)
            , _ = n(41)
            , C = ee(n(1))
            , w = ee(n(1710))
            , E = n(183)
            , M = ee(n(153))
            , P = n(510)
            , O = n(52)
            , T = ee(n(1713))
            , x = ee(n(1714))
            , j = n(28)
            , I = n(21)
            , R = n(23)
            , A = ee(n(227))
            , D = n(11)
            , F = Z(n(0))
            , K = ee(n(2))
            , N = ee(n(567))
            , U = Z(n(22))
            , B = n(1716)
            , W = n(66)
            , L = ee(n(568))
            , H = ee(n(254))
            , z = ee(n(175))
            , G = n(331)
            , V = ee(n(552))
            , Y = ee(n(45))
            , q = Z(n(13))
            , Q = n(6)
            , J = ee(n(569))
            , X = ee(n(327));
        function $() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return $ = function () {
                return e
            }
                ,
                e
        }
        function Z(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = $();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
                t && t.set(e, n),
                n
        }
        function ee(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const te = F.default.lazy(() => n.e(16).then(n.t.bind(null, 582, 7)))
            , ne = (0,
                C.default)(K.default)(e => ({
                    flexDirection: "column",
                    borderTop: e.theme.select({
                        highContrast: `1px solid ${e.theme.colors.base80}`
                    }),
                    backgroundColor: e.backgroundColor
                }))
            , re = (0,
                C.default)(K.default)(e => ({
                    margin: "0px 8px",
                    padding: "12px 0px",
                    textAlign: "center",
                    borderTop: `1px solid ${e.theme.semanticColors.bgSurfaceSecondary}`
                }))
            , oe = (0,
                C.default)(K.default)({
                    flexDirection: "row",
                    padding: "8px 12px 8px 8px"
                })
            , ae = (0,
                C.default)(K.default)(e => ({
                    ...(0,
                        G.popoverStyles)(e.theme),
                    width: (0,
                        l.default)({
                            messenger: 240,
                            workchat: 320
                        }),
                    position: "absolute",
                    overflow: "hidden"
                }))
            , ie = (0,
                F.forwardRef)((e, t) => F.default.createElement(ae, {
                    ref: t
                }, F.default.createElement(Y.default, null, e.children)))
            , le = (0,
                C.default)(K.default)(e => ({
                    flex: 1,
                    color: e.theme.semanticColors.textPrimary,
                    backgroundColor: e.isDragging ? e.theme.colors.blueGrey25 : e.theme.semanticColors.bgFillPrimary,
                    caretColor: e.caretColor,
                    padding: "4px 4px",
                    cursor: void 0,
                    margin: "0px 4px",
                    overflowY: "auto",
                    borderRadius: 18,
                    fontSize: "15px",
                    lineHeight: "20px",
                    ".DraftEditor-editorContainer": {
                        flex: "1 1 0px",
                        maxHeight: "150px",
                        cursor: "text",
                        overflowY: "auto"
                    },
                    ".DraftEditor-editorContainer::-webkit-scrollbar": {
                        width: 7
                    },
                    ".DraftEditor-editorContainer::-webkit-scrollbar-thumb": {
                        background: e.theme.colors.base70
                    }
                }))
            , ue = (0,
                C.default)(K.default)(e => ({
                    padding: "4px 8px",
                    paddingRight: e.theme.select({
                        mac: "4px",
                        windows: "6px"
                    })
                }))
            , se = (0,
                C.default)(K.default)({
                    flexDirection: "row"
                })
            , ce = (0,
                C.default)(ue)({
                    flex: 1,
                    justifyContent: "center"
                })
            , de = (0,
                C.default)(K.default)({
                    justifyContent: "flex-end",
                    flexDirection: "row",
                    alignItems: "flex-end"
                })
            , fe = (0,
                C.default)(K.default)({
                    justifyContent: "center",
                    alignItems: "flex-end",
                    flexDirection: "row",
                    minWidth: "32px",
                    padding: "2px 0"
                })
            , pe = (0,
                C.default)(K.default)({
                    paddingBottom: 4
                })
            , me = (0,
                C.default)(K.default)(e => ({
                    flex: 1,
                    backgroundColor: e.theme.semanticColors.bgFillPrimary,
                    margin: "0 4px",
                    padding: 4,
                    borderRadius: 18
                }))
            , he = (0,
                C.default)(K.default)(e => ({
                    flex: 1,
                    margin: e.isReply ? 0 : "0 4px"
                }))
            , ge = (0,
                C.default)(ue)({
                    alignItems: "flex-start",
                    height: "auto",
                    flexDirection: "row",
                    paddingBottom: 12
                })
            , ye = ({ mention: e, isFocused: t, searchValue: n, ...o }) => F.default.createElement("div", o, F.default.createElement(r.default, {
                isSelected: t,
                suggestion: e,
                hideAvatar: e.hideAvatar,
                subtitle: e.subtitle
            }));
        function ve({ editorState: e, onEditorStateChanged: t, handleReturn: n, disabled: r, editorRef: o, handleImagePaste: a, plugins: i, placeholderLabel: l }) {
            const u = (0,
                Q.useTheme)()
                , c = (0,
                    q.useWithSurface)("editor", n);
            return F.default.createElement(s.default, {
                ariaLabel: d.default._("Type to send a message", null, {
                    hk: "Vcnun"
                }).toString(),
                editorState: e,
                customStyleMap: {
                    disabled: {
                        color: u.colors.base70
                    }
                },
                webDriverTestID: "composer",
                onChange: t,
                stripPastedStyles: !0,
                handleReturn: e => e.shiftKey || e.altKey || e.ctrlKey ? "not-handled" : (c(e),
                    "handled"),
                placeholder: l,
                readOnly: r,
                ref: o,
                spellCheck: !0,
                handlePastedFiles: a,
                plugins: i
            })
        }
        const be = F.default.forwardRef((function ({ notice: e, userId: t, thread: n, isWorkplace: r, newThreadInfo: l, savedComposerState: s, saveComposerState: S, sendMessage: C, isInMessageIsland: j, sendMessageWithAttachment: I, sendGroupMessageToNewThread: R, showModal: D, customEmoji: K, replyContext: G, cancelReply: $, otherParticipants: Z, sendTypingIndicatorStatus: ee, isRichMediaPickerOpen: ae, onRichMediaPickerOpened: ue, onRichMediaPickerClosed: be, disableFocusOnKeyDown: Ce, clearMessageIsland: we, sendPostback: Ee, persistentMenus: Me, composerDisabledType: Pe, onEmojiPickerOpened: Oe, onEmojiPickerClosed: Te, isEmojiPickerOpen: xe, emojiPickerRef: je, emojiPickerTargetRef: Ie, enableStickers: Re, enableGIFs: Ae, enablePhotos: De, enableMentions: Fe, allowLargeAttachments: Ke, allowAllFileTypes: Ne, allowImagesOnly: Ue, selectedPhotos: Be, removeSelectedMediaPickerPhoto: We, voiceClipsEnabled: Le }, He) {
            const ze = (0,
                Q.useTheme)()
                , { windowKey: Ge } = (0,
                    o.useWindowContext)()
                , [Ve] = (0,
                    y.useUserSetting)("emojiSkintone")
                , [Ye, qe] = (0,
                    h.default)("emoji_picker", {})
                , Qe = (0,
                    F.useCallback)(() => {
                        Oe && Oe()
                    }
                        , [Oe])
                , Je = (0,
                    F.useCallback)(() => {
                        Te && Te()
                    }
                        , [Te])
                , Xe = n && n.threadKey
                , $e = l && l.isNewThreadOpen
                , Ze = $e
                , { threadTheme: et } = (0,
                    _.useThreadTheme)()
                , { composerIconColor: tt } = et
                , { showContextMenu: nt } = (0,
                    W.useContextMenu)()
                , rt = (0,
                    F.useRef)(null)
                , ot = (0,
                    b.default)()
                , at = (0,
                    F.useCallback)(() => {
                        ot.state.isOpen ? ot.actions.reset() : ot.actions.start()
                    }
                        , [ot.state.isOpen])
                , [it, lt] = (0,
                    F.useState)(s ? s.files : [])
                , ut = (0,
                    F.useRef)(it);
            ut.current = it;
            const [st, ct, dt] = function (e) {
                const [t, n] = (0,
                    F.useState)(e)
                    , r = (0,
                        F.useRef)(t);
                return [t, r, e => {
                    const t = e.getCurrentContent().getPlainText();
                    if (t.length > 2e4) {
                        const e = t.substr(0, 2e4)
                            , o = c.EditorState.createWithContent(c.ContentState.createFromText(e));
                        r.current = o,
                            n(c.EditorState.moveFocusToEnd(o))
                    } else
                        r.current = e,
                            n(e)
                }
                ]
            }(() => {
                const e = s && s.content ? s.content : c.ContentState.createFromText("");
                let t = c.EditorState.createWithContent(e);
                return Ze || setTimeout(() => {
                    t = c.EditorState.moveFocusToEnd(t)
                }
                    , 0),
                    t
            }
            )
                , ft = Pe === u.ComposerDisabledType.BlockedThread || Pe === u.ComposerDisabledType.CantMessage
                , pt = (0,
                    F.useRef)(null)
                , mt = (0,
                    F.useCallback)((e = !1, t = !0) => {
                        const n = () => {
                            pt.current && !ft && (pt.current.focus(),
                                e && dt(c.EditorState.moveFocusToEnd(st)))
                        }
                            ;
                        t ? setTimeout(n, 0) : n()
                    }
                        , [ft]);
            (0,
                F.useImperativeHandle)(He, () => ({
                    focus: mt
                }));
            const ht = ke(st.getCurrentContent(), it) && !ot.state.isOpen
                , gt = (e, t) => {
                    null != n ? t.length > 0 ? I({
                        threadKey: n.threadKey,
                        attachments: t,
                        sendSource: "composer",
                        ...e
                    }) : (e.messageContent || e.stickerId) && C({
                        threadKey: n.threadKey,
                        sendSource: "composer",
                        ...e
                    }) : $e && l && R({
                        participantContactIds: l.recipients.map(({ contactId: e }) => e),
                        sendSource: "composer",
                        ...e
                    }),
                        Xe && j && we(Xe, !0)
                }
                ;
            (0,
                F.useEffect)(() => {
                    Ze || mt(!0)
                }
                    , [Ze, mt]);
            const yt = (0,
                g.default)(G);
            (0,
                F.useEffect)(() => {
                    G && !yt && mt()
                }
                );
            const vt = null != Pe || ft
                , bt = Pe && Pe === u.ComposerDisabledType.NewThreadNoRecipients || ft;
            (0,
                F.useEffect)(() => {
                    vt && lt([])
                }
                    , [vt]);
            const kt = (0,
                F.useCallback)(() => {
                    Xe && (ee && ee(Xe, !1),
                        Wt.current = !1)
                }
                    , [ee, Xe])
                , St = (0,
                    F.useCallback)(() => {
                        const e = ot.getVoiceClip();
                        e && (gt({
                            senderId: t,
                            replySourceId: G && G.replyMessageId
                        }, [e]),
                            at())
                    }
                        , [at, gt, t, G])
                , _t = (0,
                    F.useCallback)(() => {
                        if (ot.state.isOpen)
                            return void St();
                        const e = ct.current.getCurrentContent();
                        if (bt || ke(e, it))
                            return;
                        const { mentionOffsets: n, mentionLengths: r, mentionIds: o, mentionTypes: a } = (0,
                            P.getMentions)(e, Xe);
                        gt({
                            senderId: t,
                            messageContent: e.getPlainText(),
                            mentionOffsets: n,
                            mentionLengths: r,
                            mentionIds: o,
                            mentionTypes: a,
                            replySourceId: G && G.replyMessageId,
                            startingNewThread: $e
                        }, it),
                            kt(),
                            dt(c.EditorState.moveFocusToEnd(c.EditorState.push(ct.current, c.ContentState.createFromText(""), void 0))),
                            Be && We(Xe, Be),
                            lt([])
                    }
                        , [$e, G, t, bt, gt, it, dt, ct, kt, St])
                , Ct = (0,
                    F.useCallback)(() => {
                        const e = K ? {
                            senderId: t,
                            messageContent: K
                        } : {
                            senderId: t,
                            stickerId: u.HOTLIKE_STICKER_ID
                        };
                        gt({
                            ...e,
                            mentionOffsets: null,
                            mentionLengths: null,
                            mentionIds: null,
                            replySourceId: G && G.replyMessageId,
                            startingNewThread: $e
                        }, [])
                    }
                        , [G, $e, K, t, gt])
                , wt = (0,
                    m.default)().current
                , Et = (0,
                    F.useCallback)(e => {
                        vt || lt(t => t.concat(e))
                    }
                        , [vt, lt])
                , Mt = e => {
                    lt(it.filter(t => t !== e)),
                        (null == e ? void 0 : e.path) && (null == Be ? void 0 : Be.includes(e.path)) && We(Xe, [e.path])
                }
                , Pt = e => {
                    if (e) {
                        const t = {
                            uuid: (0,
                                X.default)(),
                            dataUrl: e,
                            mimeType: "image/png"
                        };
                        Et(t)
                    }
                }
                ;
            (0,
                F.useEffect)(() => {
                    const e = it.map(e => e.path);
                    null == Be || Be.forEach(t => e.includes(t) ? null : (e => {
                        if (e) {
                            let t = A.default.extname(e);
                            "" != t && (t = t.slice(t.indexOf(".") + 1)),
                                "jpg" === t && (t = "jpeg");
                            const n = {
                                uuid: (0,
                                    X.default)(),
                                path: e,
                                mimeType: "image/" + t
                            };
                            Et(n)
                        }
                    }
                    )(t))
                }
                    , [Be]);
            const Ot = (0,
                p.default)(Et, Ke, Ne, Ue);
            (0,
                F.useEffect)(() => {
                    let e = e => {
                        if (Ce)
                            return;
                        const t = ze.select({
                            mac: e.metaKey,
                            windows: e.ctrlKey
                        });
                        "INPUT" != e.target.tagName.toUpperCase() && 1 == e.key.length && (!t || t && 86 === e.keyCode) && mt(!1, !1)
                    }
                        ;
                    return window.addEventListener("keydown", e),
                        () => {
                            window.removeEventListener("keydown", e)
                        }
                }
                    , [mt, ze, Ce]);
            const Tt = ze.select({
                mac: "Cmd+U",
                windows: "Ctrl+U"
            })
                , xt = ze.select(a.KeyboardShortcuts[a.KeyboardAction.OpenStickerPicker])
                , jt = ze.select(a.KeyboardShortcuts[a.KeyboardAction.OpenGIFPicker])
                , It = ze.select(a.KeyboardShortcuts[a.KeyboardAction.OpenPhotoPicker])
                , Rt = ze.select(a.KeyboardShortcuts[a.KeyboardAction.CloseRichMediaPicker])
                , At = ze.select(a.KeyboardShortcuts[a.KeyboardAction.OpenEmojiPicker])
                , Dt = ze.select(a.KeyboardShortcuts[a.KeyboardAction.CloseEmojiPicker])
                , [Ft, Kt, Nt] = (0,
                    v.default)(!!Fe, Z)
                , Ut = (0,
                    F.useCallback)(e => {
                        Kt(Z)
                    }
                        , [Kt, Z])
                , { MentionSuggestions: Bt } = wt
                , Wt = (0,
                    F.useRef)(!1)
                , Lt = (0,
                    F.useRef)((0,
                        i.debounce)(kt, 4e3))
                , Ht = (0,
                    F.useRef)((0,
                        i.debounce)(() => {
                            S(Xe, {
                                content: ct.current.getCurrentContent(),
                                files: ut.current
                            }, l && l.isNewThreadOpen)
                        }
                            , 500))
                , zt = (0,
                    F.useCallback)(e => {
                        dt((0,
                            B.translateEmoticonToEmoji)(e, Ve)),
                            Wt.current || ke(e.getCurrentContent(), it) || !Xe || (ee && ee(Xe, !0),
                                Wt.current = !0),
                            Lt.current(),
                            Ht.current()
                    }
                        , [dt, it, ee, Xe])
                , Gt = (0,
                    F.useCallback)(e => {
                        const t = ct.current.getCurrentContent()
                            , n = ct.current.getSelection()
                            , r = c.Modifier.replaceText(t, n, e)
                            , o = c.EditorState.push(ct.current, r, "insert-characters");
                        dt(o);
                        let a = {
                            ...Ye
                        };
                        null == a[e] && (a[e] = 0),
                            a[e] += 1,
                            qe(a)
                    }
                        , [Ye, qe])
                , Vt = (0,
                    k.toHumanReadableString)((0,
                        k.toKeyEvent)(xt), ze)
                , Yt = (0,
                    k.toHumanReadableString)((0,
                        k.toKeyEvent)(jt), ze)
                , qt = (0,
                    k.toHumanReadableString)((0,
                        k.toKeyEvent)(It), ze)
                , Qt = (0,
                    k.toHumanReadableString)((0,
                        k.toKeyEvent)(Rt), ze)
                , Jt = (0,
                    k.toHumanReadableString)((0,
                        k.toKeyEvent)(At), ze)
                , Xt = (0,
                    k.toHumanReadableString)((0,
                        k.toKeyEvent)(Dt), ze)
                , $t = (0,
                    F.useMemo)(() => Object.keys(Ye).sort((function (e, t) {
                        return Ye[t] - Ye[e]
                    }
                    )), [xe])
                , Zt = d.default._("Add Media", null, {
                    hk: "250eqg"
                }).toString()
                , en = d.default._("Close", null, {
                    hk: "2R3nVf"
                }).toString()
                , tn = d.default._("Record a Voice Clip", null, {
                    hk: "lvb4j"
                }).toString()
                , nn = d.default._("Add Attachment(s)", null, {
                    hk: "3kJcjP"
                }).toString()
                , rn = d.default._("Add Photo(s)", null, {
                    hk: "1Okdns"
                }).toString()
                , on = d.default._("Type a message...", null, {
                    hk: "R20TV"
                }).toString()
                , an = d.default._("Add Attachment(s)", null, {
                    hk: "1t0xMH"
                }).toString()
                , ln = d.default._("Add Photo(s)", null, {
                    hk: "1FxIkA"
                }).toString()
                , un = d.default._("Polls", null, {
                    hk: "2QPmwD"
                }).toString()
                , sn = ae ? d.default._("Close Sticker Picker ({keyboard shortcut})", [d.default._param("keyboard shortcut", Qt)], {
                    hk: "3cafjG"
                }).toString() : d.default._("Send a Sticker ({sticker keyboard shortcut})", [d.default._param("sticker keyboard shortcut", Vt)], {
                    hk: "2UaAG"
                }).toString()
                , cn = ae ? d.default._("Close GIF Picker ({keyboard shortcut})", [d.default._param("keyboard shortcut", Qt)], {
                    hk: "4Bqy7n"
                }).toString() : d.default._("Send a GIF ({sticker keyboard shortcut})", [d.default._param("sticker keyboard shortcut", Yt)], {
                    hk: "41ghEK"
                }).toString()
                , dn = ae ? d.default._("Close Sticker and GIF Picker ({keyboard shortcut})", [d.default._param("keyboard shortcut", Qt)], {
                    hk: "34ccDP"
                }).toString() : d.default._("Send a Sticker ({sticker keyboard shortcut}) or Send a GIF ({GIF keyboard shortcut})", [d.default._param("sticker keyboard shortcut", Vt), d.default._param("GIF keyboard shortcut", Yt)], {
                    hk: "3EedJX"
                }).toString()
                , fn = ae ? d.default._("Close Media Picker ({keyboard shortcut})", [d.default._param("keyboard shortcut", Qt)], {
                    hk: "AqDw7"
                }).toString() : d.default._("Send a Sticker ({sticker keyboard shortcut}), Send a GIF ({GIF keyboard shortcut}) or Send a Photo ({Photo keyboard shortcut})", [d.default._param("sticker keyboard shortcut", Vt), d.default._param("GIF keyboard shortcut", Yt), d.default._param("Photo keyboard shortcut", qt)], {
                    hk: "E2Eb8"
                }).toString()
                , pn = Re && Ae && De ? fn : Re && Ae ? dn : Re ? sn : cn
                , mn = xe ? d.default._("Close Emoji Picker ({Close emoji picker keyboard shortcut})", [d.default._param("Close emoji picker keyboard shortcut", Xt)], {
                    hk: "3F6yWa"
                }).toString() : d.default._("Send an Emoji ({Open emoji picker keyboard shortcut})", [d.default._param("Open emoji picker keyboard shortcut", Jt)], {
                    hk: "A3ZCe"
                }).toString()
                , hn = (0,
                    F.useCallback)(e => {
                        nt({
                            target: rt.current,
                            placement: "bottom-start",
                            contextMenuStyles: {
                                accentColor: et.gradientColors || et.color
                            },
                            items: [n && Le && (0,
                                M.default)(u.ThreadCapabilities.AUDIO_CLIPS, n.capabilities) ? {
                                id: "recordVoiceClip",
                                label: tn,
                                onClick: at
                            } : null, {
                                id: "addAttachment",
                                label: Ue ? rn : nn,
                                onClick: e
                            }, (0,
                                O.isGroupThreadType)(null == n ? void 0 : n.threadType) ? {
                                id: "createPoll",
                                label: un,
                                onClick: () => Xe && D({
                                    type: "CreatePoll",
                                    threadKey: Xe
                                }, Ge)
                            } : null]
                        })
                    }
                        , [Ge, null == n ? void 0 : n.capabilities])
                , gn = (0,
                    F.useCallback)(e => {
                        e.stopPropagation(),
                            ae ? be && be() : ue && ue()
                    }
                        , [ae, be, ue])
                , yn = (0,
                    F.useCallback)(() => {
                        xe ? Je() : Qe()
                    }
                        , [xe, Je, Qe])
                , vn = vt || bt || ft || xe
                , bn = ze.select({
                    light: ze.colors.base60,
                    dark: ze.colors.base70
                })
                , kn = (0,
                    F.useCallback)(e => {
                        Xe && Ee(Xe, e.title, e.platformToken)
                    }
                        , [Ee, Xe])
                , Sn = (0,
                    F.useCallback)(e => {
                        e.actionUrl && f.default.platform.openExternalURL(e.actionUrl)
                    }
                        , [])
                , _n = {
                    [u.PersistentMenuCTAType.MENU_POSTBACK]: kn,
                    [u.PersistentMenuCTAType.MENU_WEB_URL]: Sn
                }
                , Cn = Ue ? ["image/*"] : ["*"]
                , wn = a.KeyboardShortcuts[a.KeyboardAction.OpenEmojiPicker]
                , En = ze.select({
                    ...wn
                })
                , Mn = Ot ? Ue ? ln : an : on;
            return F.default.createElement(q.default, {
                name: "composer"
            }, F.default.createElement(ne, {
                onClick: () => mt(),
                backgroundColor: null == et ? void 0 : et.composerBackgroundColor
            }, e && F.default.createElement(re, null, e), F.default.createElement(oe, null, F.default.createElement(fe, null, F.default.createElement(H.default, {
                fileTypes: Cn,
                multiple: !0,
                onFilesSelected: e => {
                    (0,
                        E.handleFiles)(e, Et, Ke, Ne)
                }
                ,
                shortcut: vt ? null : Tt
            }, e => F.default.createElement(N.default, {
                "aria-label": ot.state.isOpen ? en : Zt,
                title: ot.state.isOpen ? en : Zt,
                telemetryName: "AddMedia",
                elementRef: rt,
                iconColor: vn ? bn : tt,
                use: U.RoundButtonUse.Transparent,
                isOpen: ot.state.isOpen,
                onClick: ot.state.isOpen ? at : () => hn(e),
                disabled: vt
            }))), ot.state.isOpen ? G ? F.default.createElement(me, null, F.default.createElement(pe, null, F.default.createElement(V.default, {
                replyContext: G,
                onCancel: $
            })), F.default.createElement(he, {
                isReply: !0
            }, F.default.createElement(J.default, {
                compact: !0,
                state: ot.state,
                toggle: ot.actions.toggle,
                audioSeeker: ot.audioSeeker
            }))) : F.default.createElement(he, null, F.default.createElement(J.default, {
                state: ot.state,
                toggle: ot.actions.toggle,
                audioSeeker: ot.audioSeeker
            })) : F.default.createElement(le, {
                caretColor: tt,
                isDragging: Ot,
                onContextMenu: () => {
                    !function (e, t) {
                        const n = f.default.clipboard.readClipboardImage();
                        window.contextMenuItems = [{
                            label: d.default._("Copy", null, {
                                hk: "3DiVYt"
                            }).toString(),
                            click: () => document.execCommand("copy"),
                            enabled: !t
                        }, {
                            label: d.default._("Paste", null, {
                                hk: "1bUjju"
                            }).toString(),
                            ...null != n ? {
                                click: () => e(n)
                            } : {
                                role: "paste"
                            }
                        }]
                    }(Pt, Se(ct.current.getCurrentContent()))
                }
            }, G && F.default.createElement(pe, null, F.default.createElement(V.default, {
                replyContext: G,
                onCancel: $
            })), it.length > 0 && F.default.createElement(Y.default, {
                key: it.length
            }, F.default.createElement(ge, null, it.map((e, t) => F.default.createElement(L.default, {
                key: t,
                file: e,
                onRemove: Mt
            })))), F.default.createElement(se, null, F.default.createElement(ce, null, F.default.createElement(ve, {
                editorState: st,
                onEditorStateChanged: zt,
                handleReturn: e => {
                    if ("handled" === wt.handleReturn(e))
                        return;
                    const t = e;
                    ze.select({
                        mac: t.metaKey,
                        windows: t.ctrlKey
                    }) && !t.repeat && ke(ct.current.getCurrentContent(), it) && Ct(),
                        t.shiftKey || t.altKey || t.ctrlKey || _t()
                }
                ,
                disabled: ft,
                editorRef: pt,
                handleImagePaste: () => {
                    if (vt)
                        return "handled";
                    const e = f.default.clipboard.readClipboardImage();
                    return e ? (Pt(e),
                        "handled") : "not-handled"
                }
                ,
                plugins: [wt],
                placeholderLabel: Mn
            }), _e(Z) && F.default.createElement(z.default, null, F.default.createElement(Bt, {
                onSearchChange: Nt,
                suggestions: Ft,
                onAddMention: Ut,
                entryComponent: ye,
                popoverComponent: F.default.createElement(ie, null)
            }))), F.default.createElement(de, null, F.default.createElement(U.default, {
                "aria-label": pn,
                title: pn,
                telemetryName: "rich_media_picker",
                icon: x.default,
                iconColor: vt ? bn : tt,
                use: U.RoundButtonUse.Transparent,
                onClick: gn,
                disabled: vt || !Ae && !Re,
                size: U.RoundButtonSize.Medium
            }), F.default.createElement("div", {
                ref: Ie
            }, F.default.createElement(U.default, {
                "aria-label": mn,
                title: mn,
                telemetryName: "emoji_picker",
                icon: T.default,
                iconColor: bt ? bn : tt,
                use: U.RoundButtonUse.Transparent,
                shortcut: xe ? "esc" : En,
                onClick: yn,
                disabled: bt,
                size: U.RoundButtonSize.Medium
            }))))), F.default.createElement(fe, null, F.default.createElement(w.default, {
                color: tt,
                emoji: K,
                showHotlike: ht,
                threadKey: n ? n.threadKey : null,
                onLike: Ct,
                onSend: e => {
                    mt(),
                        _t(),
                        e.stopPropagation()
                }
                ,
                disabled: bt,
                ctaHandlers: _n,
                persistentMenus: Me
            })))), xe && F.default.createElement(F.Suspense, {
                fallback: null
            }, F.default.createElement(te, {
                ref: je,
                onPickEmoji: Gt,
                target: Ie.current,
                sortedEmojiFrequencyList: $t
            })))
        }
        ));
        function ke(e, t) {
            const n = Se(e);
            return (!e.hasText() || n) && 0 === t.length
        }
        function Se(e) {
            return 0 === e.getPlainText().trim().length
        }
        function _e(e) {
            return e && e.length > 1
        }
        function Ce(e, t) {
            return _e(e) && t ? [...e, {
                contactId: t,
                name: "everyone",
                nickname: "",
                aux: !0,
                subtitle: d.default._("Mention everyone in this chat", null, {
                    hk: "3by1dj"
                }).toString(),
                hideAvatar: !0
            }, {
                contactId: t,
                name: "here",
                nickname: "",
                aux: !0,
                subtitle: d.default._("Mention everyone in this chat who is active", null, {
                    hk: "2ia1e"
                }).toString(),
                hideAvatar: !0
            }] : e
        }
        const we = {
            cancelReply: R.InboxActions.threads.cancelReplyForThread,
            saveComposerState: R.InboxActions.threads.saveComposerState,
            sendMessage: R.InboxActions.messages.sendMessage,
            sendMessageWithAttachment: R.InboxActions.messages.sendMessageWithAttachment,
            sendGroupMessageToNewThread: R.InboxActions.messages.sendGroupMessageToNewThread,
            sendTypingIndicatorStatus: R.InboxActions.messages.sendTypingIndicatorStatus,
            clearMessageIsland: R.InboxActions.messageIsland.clearMessageIsland,
            sendPostback: R.InboxActions.messages.sendPostback,
            showModal: j.AppContextActions.showModal,
            removeSelectedMediaPickerPhoto: R.InboxActions.media.removeSelectedMediaPickerPhoto
        };
        var Ee = (0,
            D.connect)((function () {
                const { selectOtherParticipantsForThread: e } = (0,
                    R.getCommonInstanceSelectors)()
                    , t = {
                        content: c.ContentState.createFromText(""),
                        files: []
                    };
                return (n, { threadKey: r }) => {
                    const o = (0,
                        I.requireAuthenticationData)(n)
                        , a = o.userID
                        , i = (0,
                            R.getThreadModel)(n, r)
                        , u = i && i.customEmoji
                        , s = e(n, {
                            threadKey: r
                        })
                        , c = (0,
                            S.isGatekeeperEnabled)(n, "archon_hide_persistent_menu")
                        , d = (0,
                            l.default)({
                                messenger: !1,
                                workchat: !(0,
                                    S.isGatekeeperEnabled)(n, "worchon_file_upload_enabled")
                            })
                        , f = !d && (0,
                            S.isGatekeeperEnabled)(n, "archon_allow_all_file_types");
                    return {
                        userId: a,
                        disableFocusOnKeyDown: null != (0,
                            j.currentModal)(n),
                        otherParticipants: (0,
                            l.default)({
                                messenger: s,
                                workchat: Ce(s, r)
                            }),
                        thread: r ? (0,
                            R.getThread)(n, r) : null,
                        isWorkplace: Boolean(o.isWorkplaceAccount),
                        savedComposerState: (0,
                            R.getSavedComposerState)(n, r) || t,
                        customEmoji: u,
                        isInMessageIsland: (0,
                            R.isInMessageIsland)(n, r),
                        newThreadInfo: (0,
                            R.getNewThreadInfo)(n),
                        replyContext: (0,
                            R.selectReplyContext)(n, {
                                threadKey: r
                            }),
                        persistentMenus: c ? [] : (0,
                            R.getPersistentMenus)(n, r) || [],
                        allowLargeAttachments: (0,
                            S.isGatekeeperEnabled)(n, "work_teamwork_large_file_size_uploader_gk"),
                        allowImagesOnly: d,
                        allowAllFileTypes: f,
                        voiceClipsEnabled: (0,
                            S.isGatekeeperEnabled)(n, "worchon_voice_clips_enabled"),
                        selectedPhotos: (0,
                            R.getSelectedMediaPickerPhotos)(n, r)
                    }
                }
            }
            ), we, null, {
                forwardRef: !0
            })(be);
        t.default = Ee
    },
    1666: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.composeDecorators = t.createEditorStateWithText = t.default = void 0;
        var r = i(n(1667))
            , o = i(n(1668))
            , a = i(n(1669));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = a.default;
        t.createEditorStateWithText = r.default,
            t.composeDecorators = o.default
    },
    1667: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(81);
        t.default = function (e) {
            return r.EditorState.createWithContent(r.ContentState.createFromText(e))
        }
    },
    1668: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                if (0 === t.length)
                    return function (e) {
                        return e
                    }
                        ;
                if (1 === t.length)
                    return t[0];
                var r = t[t.length - 1];
                return function () {
                    for (var e = r.apply(void 0, arguments), n = t.length - 2; n >= 0; n -= 1) {
                        var o = t[n];
                        e = o(e)
                    }
                    return e
                }
            }
    },
    1669: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
            , o = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                }
            }()
            , a = n(0)
            , i = h(a)
            , l = h(n(3))
            , u = n(81)
            , s = n(18)
            , c = h(n(1670))
            , d = h(n(1671))
            , f = h(n(1672))
            , p = h(n(1675))
            , m = h(n(1676));
        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function g(e, t) {
            var n = {};
            for (var r in e)
                t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }
        function y(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++)
                    n[t] = e[t];
                return n
            }
            return Array.from(e)
        }
        var v = function (e) {
            var t = void 0;
            return null != e.decorators ? t = e.decorators : null != e._decorators && (t = e._decorators),
                null != t.size ? t.size : t.length
        }
            , b = function (e) {
                function t(e) {
                    !function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = function (e, t) {
                        if (!e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                    return k.call(n),
                        [n.props].concat(y(n.resolvePlugins())).forEach((function (e) {
                            "function" == typeof e.initialize && e.initialize(n.getPluginMethods())
                        }
                        )),
                        c.default.forEach((function (e) {
                            n[e] = function () {
                                var t;
                                return (t = n.editor)[e].apply(t, arguments)
                            }
                        }
                        )),
                        n.state = {},
                        n
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t)
                        throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e),
                    o(t, [{
                        key: "componentWillMount",
                        value: function () {
                            var e = (0,
                                f.default)(this.props, this.getEditorState, this.onChange)
                                , t = u.EditorState.set(this.props.editorState, {
                                    decorator: e
                                });
                            this.onChange((0,
                                d.default)(t))
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function (e) {
                            var t = this.props.editorState.getDecorator()
                                , n = e.editorState.getDecorator();
                            if (t && !(t === n || t && n && v(t) === v(n))) {
                                var r = u.EditorState.set(e.editorState, {
                                    decorator: t
                                });
                                this.onChange((0,
                                    d.default)(r))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            var e = this;
                            this.resolvePlugins().forEach((function (t) {
                                t.willUnmount && t.willUnmount({
                                    getEditorState: e.getEditorState,
                                    setEditorState: e.onChange
                                })
                            }
                            ))
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this
                                , t = this.createPluginHooks()
                                , n = this.resolveCustomStyleMap()
                                , o = this.resolveAccessibilityProps()
                                , a = this.resolveblockRenderMap();
                            return i.default.createElement(u.Editor, r({}, this.props, o, t, {
                                readOnly: this.props.readOnly || this.state.readOnly,
                                customStyleMap: n,
                                blockRenderMap: a,
                                onChange: this.onChange,
                                editorState: this.props.editorState,
                                ref: function (t) {
                                    e.editor = t
                                }
                            }))
                        }
                    }]),
                    t
            }(a.Component);
        b.propTypes = {
            editorState: l.default.object.isRequired,
            onChange: l.default.func.isRequired,
            plugins: l.default.array,
            defaultKeyBindings: l.default.bool,
            defaultKeyCommands: l.default.bool,
            defaultBlockRenderMap: l.default.bool,
            customStyleMap: l.default.object,
            decorators: l.default.array
        },
            b.defaultProps = {
                defaultBlockRenderMap: !0,
                defaultKeyBindings: !0,
                defaultKeyCommands: !0,
                customStyleMap: {},
                plugins: [],
                decorators: []
            };
        var k = function () {
            var e = this;
            this.onChange = function (t) {
                var n = t;
                e.resolvePlugins().forEach((function (t) {
                    t.onChange && (n = t.onChange(n, e.getPluginMethods()))
                }
                )),
                    e.props.onChange && e.props.onChange(n, e.getPluginMethods())
            }
                ,
                this.getPlugins = function () {
                    return e.props.plugins.slice(0)
                }
                ,
                this.getProps = function () {
                    return r({}, e.props)
                }
                ,
                this.getReadOnly = function () {
                    return e.props.readOnly
                }
                ,
                this.setReadOnly = function (t) {
                    t !== e.state.readOnly && e.setState({
                        readOnly: t
                    })
                }
                ,
                this.getEditorRef = function () {
                    return e.editor
                }
                ,
                this.getEditorState = function () {
                    return e.props.editorState
                }
                ,
                this.getPluginMethods = function () {
                    return {
                        getPlugins: e.getPlugins,
                        getProps: e.getProps,
                        setEditorState: e.onChange,
                        getEditorState: e.getEditorState,
                        getReadOnly: e.getReadOnly,
                        setReadOnly: e.setReadOnly,
                        getEditorRef: e.getEditorRef
                    }
                }
                ,
                this.createEventHooks = function (t, n) {
                    return function () {
                        for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
                            o[a] = arguments[a];
                        var i = [].slice.apply(o);
                        return i.push(e.getPluginMethods()),
                            n.some((function (e) {
                                return "function" == typeof e[t] && !0 === e[t].apply(e, y(i))
                            }
                            ))
                    }
                }
                ,
                this.createHandleHooks = function (t, n) {
                    return function () {
                        for (var r = arguments.length, o = Array(r), a = 0; a < r; a++)
                            o[a] = arguments[a];
                        var i = [].slice.apply(o);
                        return i.push(e.getPluginMethods()),
                            n.some((function (e) {
                                return "function" == typeof e[t] && "handled" === e[t].apply(e, y(i))
                            }
                            )) ? "handled" : "not-handled"
                    }
                }
                ,
                this.createFnHooks = function (t, n) {
                    return function () {
                        for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
                            a[i] = arguments[i];
                        var l = [].slice.apply(a);
                        if (l.push(e.getPluginMethods()),
                            "blockRendererFn" === t) {
                            var u = {
                                props: {}
                            };
                            return n.forEach((function (e) {
                                if ("function" == typeof e[t]) {
                                    var n = e[t].apply(e, y(l));
                                    if (null != n) {
                                        var o = n.props
                                            , a = g(n, ["props"])
                                            , i = u
                                            , s = i.props
                                            , c = g(i, ["props"]);
                                        u = r({}, c, a, {
                                            props: r({}, s, o)
                                        })
                                    }
                                }
                            }
                            )),
                                !!u.component && u
                        }
                        if ("blockStyleFn" === t) {
                            var s = void 0;
                            return n.forEach((function (e) {
                                if ("function" == typeof e[t]) {
                                    var n = e[t].apply(e, y(l));
                                    null != n && (s = (s ? s + " " : "") + n)
                                }
                            }
                            )),
                                s || ""
                        }
                        var c = void 0
                            , d = n.some((function (e) {
                                return "function" == typeof e[t] && void 0 !== (c = e[t].apply(e, y(l)))
                            }
                            ));
                        return !!d && c
                    }
                }
                ,
                this.createPluginHooks = function () {
                    var t = {}
                        , n = []
                        , r = []
                        , o = []
                        , a = [e.props].concat(y(e.resolvePlugins()));
                    return a.forEach((function (e) {
                        Object.keys(e).forEach((function (e) {
                            "onChange" !== e && (-1 === n.indexOf(e) && -1 === o.indexOf(e) && (0 === e.indexOf("on") ? n.push(e) : 0 === e.indexOf("handle") ? r.push(e) : e.length - 2 === e.indexOf("Fn") && o.push(e)))
                        }
                        ))
                    }
                    )),
                        n.forEach((function (n) {
                            t[n] = e.createEventHooks(n, a)
                        }
                        )),
                        r.forEach((function (n) {
                            t[n] = e.createHandleHooks(n, a)
                        }
                        )),
                        o.forEach((function (n) {
                            t[n] = e.createFnHooks(n, a)
                        }
                        )),
                        t
                }
                ,
                this.resolvePlugins = function () {
                    var t = e.props.plugins.slice(0);
                    return !0 === e.props.defaultKeyBindings && t.push(p.default),
                        !0 === e.props.defaultKeyCommands && t.push(m.default),
                        t
                }
                ,
                this.resolveCustomStyleMap = function () {
                    return e.props.plugins.filter((function (e) {
                        return void 0 !== e.customStyleMap
                    }
                    )).map((function (e) {
                        return e.customStyleMap
                    }
                    )).concat([e.props.customStyleMap]).reduce((function (e, t) {
                        return r({}, e, t)
                    }
                    ), {})
                }
                ,
                this.resolveblockRenderMap = function () {
                    var t = e.props.plugins.filter((function (e) {
                        return void 0 !== e.blockRenderMap
                    }
                    )).reduce((function (e, t) {
                        return e.merge(t.blockRenderMap)
                    }
                    ), (0,
                        s.Map)({}));
                    return e.props.defaultBlockRenderMap && (t = u.DefaultDraftBlockRenderMap.merge(t)),
                        e.props.blockRenderMap && (t = t.merge(e.props.blockRenderMap)),
                        t
                }
                ,
                this.resolveAccessibilityProps = function () {
                    var t = {};
                    return [e.props].concat(y(e.resolvePlugins())).forEach((function (e) {
                        if ("function" == typeof e.getAccessibilityProps) {
                            var n = e.getAccessibilityProps()
                                , o = {};
                            void 0 === t.ariaHasPopup ? o.ariaHasPopup = n.ariaHasPopup : "true" === n.ariaHasPopup && (o.ariaHasPopup = "true"),
                                void 0 === t.ariaExpanded ? o.ariaExpanded = n.ariaExpanded : !0 === n.ariaExpanded && (o.ariaExpanded = !0),
                                t = r({}, t, n, o)
                        }
                    }
                    )),
                        t
                }
        };
        t.default = b
    },
    1670: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = ["focus", "blur", "setMode", "exitCurrentMode", "restoreEditorDOM", "setRenderGuard", "removeRenderGuard", "setClipboard", "getClipboard", "getEditorKey", "update", "onDragEnter", "onDragLeave"]
    },
    1671: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(81);
        t.default = function (e) {
            var t = e.getCurrentContent().getBlockMap()
                , n = t.last().getKey()
                , o = t.last().getLength()
                , a = new r.SelectionState({
                    anchorKey: n,
                    anchorOffset: o,
                    focusKey: n,
                    focusOffset: o
                });
            return r.EditorState.acceptSelection(e, a)
        }
    },
    1672: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(18)
            , o = i(n(1673))
            , a = i(n(1674));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = function (e) {
            return "function" == typeof e.getDecorations && "function" == typeof e.getComponentForKey && "function" == typeof e.getPropsForKey
        }
            , u = function (e) {
                var t = e.decorators
                    , n = e.plugins;
                return (0,
                    r.List)([{
                        decorators: t
                    }].concat(function (e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++)
                                n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(n))).filter((function (e) {
                        return void 0 !== e.decorators
                    }
                    )).flatMap((function (e) {
                        return e.decorators
                    }
                    ))
            };
        t.default = function (e, t, n) {
            var r = u(e)
                , i = (0,
                    o.default)(r.filter((function (e) {
                        return !l(e)
                    }
                    )), t, n)
                , s = r.filter((function (e) {
                    return l(e)
                }
                ));
            return new a.default(s.push(i))
        }
    },
    1673: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
            , a = n(0), i = (r = a) && r.__esModule ? r : {
                default: r
            }, l = n(18), u = n(81);
        t.default = function (e, t, n) {
            var r = (0,
                l.List)(e).map((function (e) {
                    var r = e.component;
                    return o({}, e, {
                        component: function (e) {
                            return i.default.createElement(r, o({}, e, {
                                getEditorState: t,
                                setEditorState: n
                            }))
                        }
                    })
                }
                )).toJS();
            return new u.CompositeDecorator(r)
        }
    },
    1674: function (e, t, n) {
        "use strict";
        var r, o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n),
                    r && e(t, r),
                    t
            }
        }(), a = n(18), i = (r = a) && r.__esModule ? r : {
            default: r
        };
        var l = function () {
            function e(t) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, e),
                    this.decorators = i.default.List(t)
            }
            return o(e, [{
                key: "getDecorations",
                value: function (e, t) {
                    var n = new Array(e.getText().length).fill(null);
                    return this.decorators.forEach((function (r, o) {
                        r.getDecorations(e, t).forEach((function (e, t) {
                            e && (n[t] = o + "-" + e)
                        }
                        ))
                    }
                    )),
                        i.default.List(n)
                }
            }, {
                key: "getComponentForKey",
                value: function (t) {
                    return this.getDecoratorForKey(t).getComponentForKey(e.getInnerKey(t))
                }
            }, {
                key: "getPropsForKey",
                value: function (t) {
                    return this.getDecoratorForKey(t).getPropsForKey(e.getInnerKey(t))
                }
            }, {
                key: "getDecoratorForKey",
                value: function (e) {
                    var t = e.split("-")
                        , n = Number(t[0]);
                    return this.decorators.get(n)
                }
            }], [{
                key: "getInnerKey",
                value: function (e) {
                    return e.split("-").slice(1).join("-")
                }
            }]),
                e
        }();
        e.exports = l
    },
    1675: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(81);
        t.default = {
            keyBindingFn: function (e) {
                return (0,
                    r.getDefaultKeyBinding)(e)
            }
        }
    },
    1676: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(81);
        t.default = {
            handleKeyCommand: function (e, t, n, o) {
                var a = o.setEditorState
                    , i = void 0;
                switch (e) {
                    case "backspace":
                    case "backspace-word":
                    case "backspace-to-start-of-line":
                        i = r.RichUtils.onBackspace(t);
                        break;
                    case "delete":
                    case "delete-word":
                    case "delete-to-end-of-block":
                        i = r.RichUtils.onDelete(t);
                        break;
                    default:
                        return "not-handled"
                }
                return null != i ? (a(i),
                    "handled") : "not-handled"
            }
        }
    },
    1677: function (e, t, n) {
        var r, o, a = n(458), i = n(459), l = 0, u = 0;
        e.exports = function (e, t, n) {
            var s = t && n || 0
                , c = t || []
                , d = (e = e || {}).node || r
                , f = void 0 !== e.clockseq ? e.clockseq : o;
            if (null == d || null == f) {
                var p = a();
                null == d && (d = r = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]),
                    null == f && (f = o = 16383 & (p[6] << 8 | p[7]))
            }
            var m = void 0 !== e.msecs ? e.msecs : (new Date).getTime()
                , h = void 0 !== e.nsecs ? e.nsecs : u + 1
                , g = m - l + (h - u) / 1e4;
            if (g < 0 && void 0 === e.clockseq && (f = f + 1 & 16383),
                (g < 0 || m > l) && void 0 === e.nsecs && (h = 0),
                h >= 1e4)
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
            l = m,
                u = h,
                o = f;
            var y = (1e4 * (268435455 & (m += 122192928e5)) + h) % 4294967296;
            c[s++] = y >>> 24 & 255,
                c[s++] = y >>> 16 & 255,
                c[s++] = y >>> 8 & 255,
                c[s++] = 255 & y;
            var v = m / 4294967296 * 1e4 & 268435455;
            c[s++] = v >>> 8 & 255,
                c[s++] = 255 & v,
                c[s++] = v >>> 24 & 15 | 16,
                c[s++] = v >>> 16 & 255,
                c[s++] = f >>> 8 | 128,
                c[s++] = 255 & f;
            for (var b = 0; b < 6; ++b)
                c[s + b] = d[b];
            return t || i(c)
        }
    },
    1678: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                const e = (0,
                    a.useRef)();
                if (!e.current) {
                    const t = (0,
                        o.default)({
                            positionSuggestions: ({ decoratorRect: e, popover: t }) => {
                                let n = void 0
                                    , r = void 0;
                                return e.left + t.offsetWidth > window.outerWidth - 12 ? r = "12px" : n = `${e.left}px`,
                                {
                                    left: n,
                                    right: r,
                                    top: `${e.top}px`,
                                    transform: "scale(1) translateY(-100%)",
                                    transformOrigin: "bottom 0% 0px",
                                    transition: void 0
                                }
                            }
                            ,
                            mentionPrefix: "@",
                            mentionTrigger: "@",
                            entityMutability: "SEGMENTED",
                            mentionComponent: u
                        })
                        , n = new RegExp("(\\W|^)\\@[\\w-À-ÖØ-öø-ÿĀ-ňŊ-ſА-я぀-ゟ゠-ヿ㄰-㆏가-힣一-黿]*", "g");
                    t.decorators[1].strategy = (e, t) => {
                        ((e, t, n) => {
                            const r = t.getText();
                            t.findEntityRanges(e => !e.getEntity(), (t, o) => {
                                const a = r.slice(t, o);
                                let i, l, u = e.lastIndex;
                                for (; null !== (i = e.exec(a)) && e.lastIndex !== u;)
                                    u = e.lastIndex,
                                        l = t + i.index,
                                        n(l, l + i[0].length)
                            }
                            )
                        }
                        )(n, e, t)
                    }
                        ,
                        e.current = t
                }
                return e
            }
            ;
        var r, o = (r = n(1679)) && r.__esModule ? r : {
            default: r
        }, a = function (e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = l();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            n.default = e,
                t && t.set(e, n);
            return n
        }(n(0)), i = n(4);
        function l() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return l = function () {
                return e
            }
                ,
                e
        }
        const u = e => a.default.createElement(i.MentionText, {
            isSenderViewer: !1
        }, e.children)
    },
    1679: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.defaultSuggestionsFilter = t.defaultTheme = t.MentionSuggestions = void 0;
        var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
            , o = n(1680);
        Object.defineProperty(t, "MentionSuggestions", {
            enumerable: !0,
            get: function () {
                return v(o).default
            }
        });
        var a = v(n(0))
            , i = n(18)
            , l = v(n(1698))
            , u = v(o)
            , s = v(n(1700))
            , c = v(n(1701))
            , d = v(n(1702))
            , f = v(n(1703))
            , p = v({
                mention: "draftJsMentionPlugin__mention__29BEd"
            })
            , m = v({
                mentionSuggestions: "draftJsMentionPlugin__mentionSuggestions__2DWjA"
            })
            , h = v({
                mentionSuggestionsEntry: "draftJsMentionPlugin__mentionSuggestionsEntry__3mSwm",
                mentionSuggestionsEntryFocused: "draftJsMentionPlugin__mentionSuggestionsEntryFocused__3LcTd draftJsMentionPlugin__mentionSuggestionsEntry__3mSwm",
                mentionSuggestionsEntryText: "draftJsMentionPlugin__mentionSuggestionsEntryText__3Jobq",
                mentionSuggestionsEntryAvatar: "draftJsMentionPlugin__mentionSuggestionsEntryAvatar__1xgA9"
            })
            , g = v(n(1704))
            , y = v(n(1705));
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var b = t.defaultTheme = {
            mention: p.default.mention,
            mentionSuggestions: m.default.mentionSuggestions,
            mentionSuggestionsEntry: h.default.mentionSuggestionsEntry,
            mentionSuggestionsEntryFocused: h.default.mentionSuggestionsEntryFocused,
            mentionSuggestionsEntryText: h.default.mentionSuggestionsEntryText,
            mentionSuggestionsEntryAvatar: h.default.mentionSuggestionsEntryAvatar
        };
        t.default = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , t = {
                    keyBindingFn: void 0,
                    handleKeyCommand: void 0,
                    handleReturn: void 0,
                    onChange: void 0
                }
                , n = {
                    ariaHasPopup: "false",
                    ariaExpanded: !1,
                    ariaOwneeID: void 0,
                    ariaActiveDescendantID: void 0
                }
                , o = (0,
                    i.Map)()
                , p = void 0
                , m = (0,
                    i.Map)()
                , h = void 0
                , g = {
                    getEditorState: void 0,
                    setEditorState: void 0,
                    getPortalClientRect: function (e) {
                        return m.get(e)()
                    },
                    getAllSearches: function () {
                        return o
                    },
                    isEscaped: function (e) {
                        return p === e
                    },
                    escapeSearch: function (e) {
                        p = e
                    },
                    resetEscapedSearch: function () {
                        p = void 0
                    },
                    register: function (e) {
                        o = o.set(e, e)
                    },
                    updatePortalClientRect: function (e, t) {
                        m = m.set(e, t)
                    },
                    unregister: function (e) {
                        o = o.delete(e),
                            m = m.delete(e)
                    },
                    getIsOpened: function () {
                        return h
                    },
                    setIsOpened: function (e) {
                        h = e
                    }
                }
                , v = e.mentionPrefix
                , k = void 0 === v ? "" : v
                , S = e.theme
                , _ = void 0 === S ? b : S
                , C = e.positionSuggestions
                , w = void 0 === C ? y.default : C
                , E = e.mentionComponent
                , M = e.mentionSuggestionsComponent
                , P = void 0 === M ? u.default : M
                , O = e.entityMutability
                , T = void 0 === O ? "SEGMENTED" : O
                , x = e.mentionTrigger
                , j = void 0 === x ? "@" : x
                , I = e.mentionRegExp
                , R = void 0 === I ? c.default : I
                , A = e.supportWhitespace
                , D = void 0 !== A && A
                , F = {
                    ariaProps: n,
                    callbacks: t,
                    theme: _,
                    store: g,
                    entityMutability: T,
                    positionSuggestions: w,
                    mentionTrigger: j,
                    mentionPrefix: k
                }
                , K = function (e) {
                    return a.default.createElement(P, r({}, e, F))
                }
                , N = function (e) {
                    return a.default.createElement(l.default, r({}, e, {
                        theme: _,
                        mentionComponent: E
                    }))
                }
                , U = function (e) {
                    return a.default.createElement(s.default, r({}, e, {
                        store: g
                    }))
                };
            return {
                MentionSuggestions: K,
                decorators: [{
                    strategy: (0,
                        d.default)(j),
                    component: N
                }, {
                    strategy: (0,
                        f.default)(j, D, R),
                    component: U
                }],
                getAccessibilityProps: function () {
                    return {
                        role: "combobox",
                        ariaAutoComplete: "list",
                        ariaHasPopup: n.ariaHasPopup,
                        ariaExpanded: n.ariaExpanded,
                        ariaActiveDescendantID: n.ariaActiveDescendantID,
                        ariaOwneeID: n.ariaOwneeID
                    }
                },
                initialize: function (e) {
                    var t = e.getEditorState
                        , n = e.setEditorState;
                    g.getEditorState = t,
                        g.setEditorState = n
                },
                keyBindingFn: function (e) {
                    return t.keyBindingFn && t.keyBindingFn(e)
                },
                handleReturn: function (e) {
                    return t.handleReturn && t.handleReturn(e)
                },
                onChange: function (e) {
                    return t.onChange ? t.onChange(e) : e
                }
            }
        }
            ;
        t.defaultSuggestionsFilter = g.default
    },
    1680: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.MentionSuggestions = void 0;
        var r = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }
            , o = function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                    }
                }
                return function (t, n, r) {
                    return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                }
            }()
            , a = n(0)
            , i = h(a)
            , l = h(n(3))
            , u = n(81)
            , s = h(n(563))
            , c = h(n(1692))
            , d = h(n(1693))
            , f = h(n(1695))
            , p = h(n(564))
            , m = h(n(1696));
        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function g(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function y(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var v = t.MentionSuggestions = function (e) {
            function t() {
                var e, n, r;
                g(this, t);
                for (var o = arguments.length, a = Array(o), i = 0; i < o; i++)
                    a[i] = arguments[i];
                return n = r = y(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))),
                    r.state = {
                        isActive: !1,
                        focusedOptionIndex: 0
                    },
                    r.componentDidUpdate = function (e, t) {
                        if (r.popover) {
                            var n = r.props.suggestions.length;
                            if (n > 0 && r.state.focusedOptionIndex >= n && r.setState({
                                focusedOptionIndex: n - 1
                            }),
                                !r.props.store.getAllSearches().has(r.activeOffsetKey))
                                return;
                            var o = r.props.store.getPortalClientRect(r.activeOffsetKey)
                                , a = r.props.positionSuggestions({
                                    decoratorRect: o,
                                    prevProps: e,
                                    prevState: t,
                                    props: r.props,
                                    state: r.state,
                                    popover: r.popover
                                });
                            Object.keys(a).forEach((function (e) {
                                r.popover.style[e] = a[e]
                            }
                            ))
                        }
                    }
                    ,
                    r.componentWillUnmount = function () {
                        r.props.callbacks.onChange = void 0
                    }
                    ,
                    r.onEditorStateChange = function (e) {
                        var t = r.props.store.getAllSearches();
                        if (0 === t.size)
                            return e;
                        var n = function () {
                            return r.props.store.resetEscapedSearch(),
                                r.closeDropdown(),
                                e
                        }
                            , o = e.getSelection()
                            , a = o.getAnchorKey()
                            , i = o.getAnchorOffset();
                        if (!o.isCollapsed() || !o.getHasFocus())
                            return n();
                        var l = t.map((function (e) {
                            return (0,
                                f.default)(e)
                        }
                        )).filter((function (e) {
                            return e.blockKey === a
                        }
                        )).map((function (t) {
                            var n = t.blockKey
                                , r = t.decoratorKey;
                            return e.getBlockTree(n).getIn([r])
                        }
                        ));
                        if (l.every((function (e) {
                            return void 0 === e
                        }
                        )))
                            return n();
                        var u = e.getCurrentContent().getPlainText()
                            , c = l.filter((function (e) {
                                return void 0 !== e
                            }
                            )).map((function (e) {
                                var t = e.start
                                    , n = e.end;
                                return 0 === t && i === r.props.mentionTrigger.length && u.charAt(i) !== r.props.mentionTrigger && new RegExp(String.raw({
                                    raw: "" + (0,
                                        s.default)(r.props.mentionTrigger)
                                }), "g").test(u) && i <= n || i > t + r.props.mentionTrigger.length && i <= n
                            }
                            ));
                        if (c.every((function (e) {
                            return !1 === e
                        }
                        )))
                            return n();
                        var d = r.activeOffsetKey;
                        return r.activeOffsetKey = c.filter((function (e) {
                            return !0 === e
                        }
                        )).keySeq().first(),
                            r.onSearchChange(e, o, r.activeOffsetKey, d),
                            r.props.store.isEscaped(r.activeOffsetKey) || r.props.store.resetEscapedSearch(),
                            !r.state.isActive && !r.props.store.isEscaped(r.activeOffsetKey) && r.props.suggestions.length > 0 && r.openDropdown(),
                            void 0 !== r.lastSelectionIsInsideWord && c.equals(r.lastSelectionIsInsideWord) || r.setState({
                                focusedOptionIndex: 0
                            }),
                            r.lastSelectionIsInsideWord = c,
                            e
                    }
                    ,
                    r.onSearchChange = function (e, t, n, o) {
                        var a = (0,
                            p.default)(e, t, r.props.mentionTrigger).matchingString;
                        r.lastSearchValue === a && n === o || (r.lastSearchValue = a,
                            r.props.onSearchChange({
                                value: a
                            }))
                    }
                    ,
                    r.onDownArrow = function (e) {
                        e.preventDefault();
                        var t = r.state.focusedOptionIndex + 1;
                        r.onMentionFocus(t >= r.props.suggestions.length ? 0 : t)
                    }
                    ,
                    r.onTab = function (e) {
                        e.preventDefault(),
                            r.commitSelection()
                    }
                    ,
                    r.onUpArrow = function (e) {
                        if (e.preventDefault(),
                            r.props.suggestions.length > 0) {
                            var t = r.state.focusedOptionIndex - 1;
                            r.onMentionFocus(t < 0 ? r.props.suggestions.length - 1 : t)
                        }
                    }
                    ,
                    r.onEscape = function (e) {
                        e.preventDefault();
                        var t = r.lastSelectionIsInsideWord.filter((function (e) {
                            return !0 === e
                        }
                        )).keySeq().first();
                        r.props.store.escapeSearch(t),
                            r.closeDropdown(),
                            r.props.store.setEditorState(r.props.store.getEditorState())
                    }
                    ,
                    r.onMentionSelect = function (e) {
                        if (e) {
                            r.props.onAddMention && r.props.onAddMention(e),
                                r.closeDropdown();
                            var t = (0,
                                d.default)(r.props.store.getEditorState(), e, r.props.mentionPrefix, r.props.mentionTrigger, r.props.entityMutability);
                            r.props.store.setEditorState(t)
                        }
                    }
                    ,
                    r.onMentionFocus = function (e) {
                        var t = "mention-option-" + r.key + "-" + e;
                        r.props.ariaProps.ariaActiveDescendantID = t,
                            r.setState({
                                focusedOptionIndex: e
                            }),
                            r.props.store.setEditorState(r.props.store.getEditorState())
                    }
                    ,
                    r.commitSelection = function () {
                        return r.props.store.getIsOpened() ? (r.onMentionSelect(r.props.suggestions[r.state.focusedOptionIndex]),
                            "handled") : "not-handled"
                    }
                    ,
                    r.openDropdown = function () {
                        r.props.callbacks.handleReturn = r.commitSelection,
                            r.props.callbacks.keyBindingFn = function (e) {
                                40 === e.keyCode && r.onDownArrow(e),
                                    38 === e.keyCode && r.onUpArrow(e),
                                    27 === e.keyCode && r.onEscape(e),
                                    9 === e.keyCode && r.onTab(e)
                            }
                            ;
                        var e = "mention-option-" + r.key + "-" + r.state.focusedOptionIndex;
                        r.props.ariaProps.ariaActiveDescendantID = e,
                            r.props.ariaProps.ariaOwneeID = "mentions-list-" + r.key,
                            r.props.ariaProps.ariaHasPopup = "true",
                            r.props.ariaProps.ariaExpanded = !0,
                            r.setState({
                                isActive: !0
                            }),
                            r.props.onOpen && r.props.onOpen()
                    }
                    ,
                    r.closeDropdown = function () {
                        r.props.callbacks.handleReturn = void 0,
                            r.props.callbacks.keyBindingFn = void 0,
                            r.props.ariaProps.ariaHasPopup = "false",
                            r.props.ariaProps.ariaExpanded = !1,
                            r.props.ariaProps.ariaActiveDescendantID = void 0,
                            r.props.ariaProps.ariaOwneeID = void 0,
                            r.setState({
                                isActive: !1
                            }),
                            r.props.onClose && r.props.onClose()
                    }
                    ,
                    y(r, n)
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
                o(t, [{
                    key: "componentWillMount",
                    value: function () {
                        this.key = (0,
                            u.genKey)(),
                            this.props.callbacks.onChange = this.onEditorStateChange
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        0 === e.suggestions.length && this.state.isActive ? this.closeDropdown() : e.suggestions.length > 0 && e.suggestions !== this.props.suggestions && !this.state.isActive && this.openDropdown()
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this;
                        if (!this.state.isActive)
                            return null;
                        var t = this.props
                            , n = t.entryComponent
                            , o = t.popoverComponent
                            , a = void 0 === o ? i.default.createElement("div", null) : o
                            , l = (t.onClose,
                                t.onOpen,
                                t.onAddMention,
                                t.onSearchChange,
                                t.suggestions,
                                t.ariaProps,
                                t.callbacks,
                                t.theme)
                            , u = void 0 === l ? {} : l
                            , s = (t.store,
                                t.entityMutability,
                                t.positionSuggestions,
                                t.mentionTrigger,
                                t.mentionPrefix,
                                function (e, t) {
                                    var n = {};
                                    for (var r in e)
                                        t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                                    return n
                                }(t, ["entryComponent", "popoverComponent", "onClose", "onOpen", "onAddMention", "onSearchChange", "suggestions", "ariaProps", "callbacks", "theme", "store", "entityMutability", "positionSuggestions", "mentionTrigger", "mentionPrefix"]));
                        return i.default.cloneElement(a, r({}, s, {
                            className: u.mentionSuggestions,
                            role: "listbox",
                            id: "mentions-list-" + this.key,
                            ref: function (t) {
                                e.popover = t
                            }
                        }), this.props.suggestions.map((function (t, r) {
                            return i.default.createElement(c.default, {
                                key: null != t.id ? t.id : t.name,
                                onMentionSelect: e.onMentionSelect,
                                onMentionFocus: e.onMentionFocus,
                                isFocused: e.state.focusedOptionIndex === r,
                                mention: t,
                                index: r,
                                id: "mention-option-" + e.key + "-" + r,
                                theme: u,
                                searchValue: e.lastSearchValue,
                                entryComponent: n || m.default
                            })
                        }
                        )))
                    }
                }]),
                t
        }(a.Component);
        v.propTypes = {
            entityMutability: l.default.oneOf(["SEGMENTED", "IMMUTABLE", "MUTABLE"]),
            entryComponent: l.default.func,
            onAddMention: l.default.func,
            suggestions: l.default.array
        },
            t.default = v
    },
    1681: function (e, t, n) {
        var r = n(1682);
        e.exports = function (e) {
            return null == e ? "" : r(e)
        }
    },
    1682: function (e, t, n) {
        var r = n(328)
            , o = n(1685)
            , a = n(1686)
            , i = n(1687)
            , l = r ? r.prototype : void 0
            , u = l ? l.toString : void 0;
        e.exports = function e(t) {
            if ("string" == typeof t)
                return t;
            if (a(t))
                return o(t, e) + "";
            if (i(t))
                return u ? u.call(t) : "";
            var n = t + "";
            return "0" == n && 1 / t == -1 / 0 ? "-0" : n
        }
    },
    1683: function (e, t, n) {
        var r = n(1684)
            , o = "object" == typeof self && self && self.Object === Object && self
            , a = r || o || Function("return this")();
        e.exports = a
    },
    1684: function (e, t, n) {
        (function (t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.exports = n
        }
        ).call(this, n(54))
    },
    1685: function (e, t) {
        e.exports = function (e, t) {
            for (var n = -1, r = null == e ? 0 : e.length, o = Array(r); ++n < r;)
                o[n] = t(e[n], n, e);
            return o
        }
    },
    1686: function (e, t) {
        var n = Array.isArray;
        e.exports = n
    },
    1687: function (e, t, n) {
        var r = n(1688)
            , o = n(1691);
        e.exports = function (e) {
            return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
        }
    },
    1688: function (e, t, n) {
        var r = n(328)
            , o = n(1689)
            , a = n(1690)
            , i = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
        }
    },
    1689: function (e, t, n) {
        var r = n(328)
            , o = Object.prototype
            , a = o.hasOwnProperty
            , i = o.toString
            , l = r ? r.toStringTag : void 0;
        e.exports = function (e) {
            var t = a.call(e, l)
                , n = e[l];
            try {
                e[l] = void 0;
                var r = !0
            } catch (e) { }
            var o = i.call(e);
            return r && (t ? e[l] = n : delete e[l]),
                o
        }
    },
    1690: function (e, t) {
        var n = Object.prototype.toString;
        e.exports = function (e) {
            return n.call(e)
        }
    },
    1691: function (e, t) {
        e.exports = function (e) {
            return null != e && "object" == typeof e
        }
    },
    1692: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n),
                    r && e(t, r),
                    t
            }
        }()
            , o = n(0)
            , a = l(o)
            , i = l(n(3));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var u = function (e) {
            function t(e) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function (e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.onMouseUp = function () {
                    n.mouseDown && (n.props.onMentionSelect(n.props.mention),
                        n.mouseDown = !1)
                }
                    ,
                    n.onMouseDown = function (e) {
                        e.preventDefault(),
                            n.mouseDown = !0
                    }
                    ,
                    n.onMouseEnter = function () {
                        n.props.onMentionFocus(n.props.index)
                    }
                    ,
                    n.mouseDown = !1,
                    n
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
                r(t, [{
                    key: "componentDidUpdate",
                    value: function () {
                        this.mouseDown = !1
                    }
                }, {
                    key: "render",
                    value: function () {
                        var e = this.props
                            , t = e.theme
                            , n = void 0 === t ? {} : t
                            , r = e.mention
                            , o = e.searchValue
                            , i = e.isFocused
                            , l = e.id
                            , u = i ? n.mentionSuggestionsEntryFocused : n.mentionSuggestionsEntry
                            , s = this.props.entryComponent;
                        return a.default.createElement(s, {
                            className: u,
                            onMouseDown: this.onMouseDown,
                            onMouseUp: this.onMouseUp,
                            onMouseEnter: this.onMouseEnter,
                            role: "option",
                            id: l,
                            "aria-selected": i ? "true" : null,
                            theme: n,
                            mention: r,
                            isFocused: i,
                            searchValue: o
                        })
                    }
                }]),
                t
        }(o.Component);
        u.propTypes = {
            entryComponent: i.default.any.isRequired,
            searchValue: i.default.string,
            onMentionSelect: i.default.func
        },
            t.default = u
    },
    1693: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(81)
            , o = i(n(564))
            , a = i(n(565));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function (e, t, n, i, l) {
            var u = e.getCurrentContent().createEntity((0,
                a.default)(i), l, {
                mention: t
            }).getLastCreatedEntityKey()
                , s = e.getSelection()
                , c = (0,
                    o.default)(e, s, i)
                , d = c.begin
                , f = c.end
                , p = s.merge({
                    anchorOffset: d,
                    focusOffset: f
                })
                , m = r.Modifier.replaceText(e.getCurrentContent(), p, "" + n + t.name, null, u)
                , h = p.getAnchorKey();
            e.getCurrentContent().getBlockForKey(h).getLength() === f && (m = r.Modifier.insertText(m, m.getSelectionAfter(), " "));
            var g = r.EditorState.push(e, m, "insert-mention");
            return r.EditorState.forceSelection(g, m.getSelectionAfter())
        }
    },
    1694: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t, n) {
                var r = e.substr(0, t)
                    , o = 0 === n.length ? 0 : r.lastIndexOf(n)
                    , a = 0 === n.length ? r : r.slice(o + n.length);
                return {
                    begin: o,
                    end: r.length,
                    matchingString: a
                }
            }
    },
    1695: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = function (e, t) {
            if (Array.isArray(e))
                return e;
            if (Symbol.iterator in Object(e))
                return function (e, t) {
                    var n = []
                        , r = !0
                        , o = !1
                        , a = void 0;
                    try {
                        for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value),
                            !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                            a = e
                    } finally {
                        try {
                            !r && l.return && l.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return n
                }(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };
        t.default = function (e) {
            var t = e.split("-")
                , n = r(t, 3)
                , o = n[0]
                , a = n[1]
                , i = n[2];
            return {
                blockKey: o,
                decoratorKey: parseInt(a, 10),
                leafKey: parseInt(i, 10)
            }
        }
    },
    1696: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(n(0))
            , o = a(n(1697));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = function (e) {
            var t = e.mention
                , n = e.theme
                , a = (e.isFocused,
                    e.searchValue,
                    function (e, t) {
                        var n = {};
                        for (var r in e)
                            t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }(e, ["mention", "theme", "isFocused", "searchValue"]));
            return r.default.createElement("div", a, r.default.createElement(o.default, {
                mention: t,
                theme: n
            }), r.default.createElement("span", {
                className: n.mentionSuggestionsEntryText
            }, t.name))
        }
    },
    1697: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(0), a = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function (e) {
            var t = e.mention
                , n = e.theme
                , r = void 0 === n ? {} : n;
            return t.avatar ? a.default.createElement("img", {
                src: t.avatar,
                className: r.mentionSuggestionsEntryAvatar,
                role: "presentation"
            }) : null
        }
    },
    1698: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = a(n(0))
            , o = a(n(1699));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = function (e) {
            var t = e.mention
                , n = e.children
                , o = e.className;
            return r.default.createElement("a", {
                href: t.link,
                className: o,
                spellCheck: !1
            }, n)
        }
            , l = function (e) {
                var t = e.children
                    , n = e.className;
                return r.default.createElement("span", {
                    className: n,
                    spellCheck: !1
                }, t)
            };
        t.default = function (e) {
            var t = e.entityKey
                , n = e.theme
                , a = void 0 === n ? {} : n
                , u = e.mentionComponent
                , s = e.children
                , c = e.decoratedText
                , d = e.className
                , f = e.contentState
                , p = (0,
                    o.default)(a.mention, d)
                , m = f.getEntity(t).getData().mention
                , h = u || (m.link ? i : l);
            return r.default.createElement(h, {
                entityKey: t,
                mention: m,
                theme: a,
                className: p,
                decoratedText: c
            }, s)
        }
    },
    1699: function (e, t, n) {
        "use strict";
        function r(e) {
            var t, n, o = "";
            if (e)
                if ("object" == typeof e)
                    if (e.push)
                        for (t = 0; t < e.length; t++)
                            e[t] && (n = r(e[t])) && (o && (o += " "),
                                o += n);
                    else
                        for (t in e)
                            e[t] && (n = r(t)) && (o && (o += " "),
                                o += n);
                else
                    "boolean" == typeof e || e.call || (o && (o += " "),
                        o += e);
            return o
        }
        n.r(t),
            t.default = function () {
                for (var e, t = 0, n = ""; t < arguments.length;)
                    (e = r(arguments[t++])) && (n && (n += " "),
                        n += e);
                return n
            }
    },
    1700: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                        r.configurable = !0,
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n),
                    r && e(t, r),
                    t
            }
        }(), a = n(0), i = (r = a) && r.__esModule ? r : {
            default: r
        };
        var l = function (e) {
            function t(e) {
                !function (e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var n = function (e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" != typeof t && "function" != typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return n.searchPortalRef = function (e) {
                    n.searchPortal = e
                }
                    ,
                    n
            }
            return function (e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, e),
                o(t, [{
                    key: "componentDidMount",
                    value: function () {
                        this.props.store.register(this.props.offsetKey),
                            this.props.store.setIsOpened(!0),
                            this.updatePortalClientRect(this.props),
                            this.props.setEditorState(this.props.getEditorState())
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                        this.updatePortalClientRect(e)
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function () {
                        this.props.store.unregister(this.props.offsetKey),
                            this.props.store.setIsOpened(!1)
                    }
                }, {
                    key: "updatePortalClientRect",
                    value: function (e) {
                        var t = this;
                        this.props.store.updatePortalClientRect(e.offsetKey, (function () {
                            return t.searchPortal.getBoundingClientRect()
                        }
                        ))
                    }
                }, {
                    key: "render",
                    value: function () {
                        return i.default.createElement("span", {
                            className: this.key,
                            ref: this.searchPortalRef
                        }, this.props.children)
                    }
                }]),
                t
        }(a.Component);
        t.default = l
    },
    1701: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = "[\\w-À-ÖØ-öø-ÿĀ-ňŊ-ſА-я぀-ゟ゠-ヿ㄰-㆏가-힣一-黿]*"
    },
    1702: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(565), a = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function (e) {
            return function (t, n, r) {
                t.findEntityRanges((function (t) {
                    var n = t.getEntity();
                    return null !== n && r.getEntity(n).getType() === (0,
                        a.default)(e)
                }
                ), n)
            }
        }
    },
    1703: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(563), a = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function (e, t, n) {
            var r = t ? new RegExp((0,
                a.default)(e) + "(" + n + "|\\s){0,}", "g") : new RegExp("(\\s|^)" + (0,
                    a.default)(e) + n, "g");
            return function (e, t) {
                !function (e, t, n) {
                    var r = t.getText();
                    t.findEntityRanges((function (e) {
                        return !e.getEntity()
                    }
                    ), (function (t, o) {
                        for (var a = r.slice(t, o), i = void 0, l = void 0, u = e.lastIndex; null !== (i = e.exec(a)) && e.lastIndex !== u;)
                            u = e.lastIndex,
                                l = t + i.index,
                                n(l, l + i[0].length)
                    }
                    ))
                }(r, e, t)
            }
        }
    },
    1704: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function (e, t) {
            var n = e.toLowerCase()
                , r = t.filter((function (e) {
                    return !n || e.name.toLowerCase().indexOf(n) > -1
                }
                ))
                , o = r.length < 5 ? r.length : 5;
            return r.slice(0, o)
        }
    },
    1705: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function (e) {
            var t = e.decoratorRect
                , n = e.popover
                , r = e.state
                , o = e.props
                , a = function e(t) {
                    return t ? "static" !== window.getComputedStyle(t).getPropertyValue("position") ? t : e(t.parentElement) : null
                }(n.parentElement)
                , i = {};
            if (a) {
                i.scrollLeft = a.scrollLeft,
                    i.scrollTop = a.scrollTop;
                var l = a.getBoundingClientRect();
                i.left = t.left - l.left,
                    i.top = t.bottom - l.top
            } else
                i.scrollTop = window.pageYOffset || document.documentElement.scrollTop,
                    i.scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                    i.top = t.bottom,
                    i.left = t.left;
            var u = i.left + i.scrollLeft
                , s = i.top + i.scrollTop
                , c = void 0
                , d = void 0;
            return r.isActive && (o.suggestions.length > 0 ? (c = "scale(1)",
                d = "all 0.25s cubic-bezier(.3,1.2,.2,1)") : (c = "scale(0)",
                    d = "all 0.35s cubic-bezier(.3,1,.2,1)")),
            {
                left: u + "px",
                top: s + "px",
                transform: c,
                transformOrigin: "1em 0%",
                transition: d
            }
        }
    },
    1706: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t) {
                const [n, i] = (0,
                    o.useState)([])
                    , l = (0,
                        o.useMemo)(() => t ? t.reduce((e, t) => (e[t.aux ? t.name : t.contactId] = {
                            nameTokens: a(t.name),
                            nicknameTokens: a(t.nickname),
                            participant: t
                        },
                            e), {}) : {}, [t])
                    , u = (0,
                        o.useCallback)(({ value: e }) => {
                            if (!t)
                                return;
                            const n = (0,
                                r.normalize)(e).toLowerCase()
                                , o = Object.keys(l).reduce((e, t) => {
                                    const { nameTokens: r, nicknameTokens: o } = l[t]
                                        , a = r.some(e => e.startsWith(n))
                                        , i = o.some(e => e.startsWith(n));
                                    return (a || i) && e.push({
                                        id: t,
                                        primaryName: a ? "name" : "nickname"
                                    }),
                                        e
                                }
                                    , []);
                            i(o.map(({ id: e, primaryName: t }) => {
                                const n = {
                                    ...l[e].participant
                                };
                                return "nickname" === t && (n.name = l[e].participant.nickname,
                                    n.nickname = l[e].participant.name),
                                    n
                            }
                            ))
                        }
                            , [t, l]);
                if (!e)
                    return [[], i, u];
                return [n, i, u]
            }
            ;
        var r = n(1707)
            , o = n(0);
        function a(e) {
            return e ? (0,
                r.normalize)(e.trim()).toLowerCase().split(/\s+/) : []
        }
    },
    1707: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.normalize = function (e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/gi, "")
            }
    },
    1708: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.encodeWAV = t.write8BitString = t.floatTo16BitPCM = t.interleave = t.mergeBuffers = void 0;
        t.mergeBuffers = (e, t) => {
            let n = new Float32Array(t)
                , r = 0;
            for (let t = 0; t < e.length; t++)
                n.set(e[t], r),
                    r += e[t].length;
            return n
        }
            ;
        t.interleave = (e, t) => {
            const n = e.length + t.length
                , r = new Float32Array(n);
            let o = 0
                , a = 0;
            for (; o < n;)
                r[o++] = e[a],
                    r[o++] = t[a],
                    a++;
            return r
        }
            ;
        const r = (e, t, n) => {
            for (let r = 0; r < n.length; r++,
                t += 2) {
                const o = Math.max(-1, Math.min(1, n[r]));
                e.setInt16(t, o < 0 ? 32768 * o : 32767 * o, !0)
            }
        }
            ;
        t.floatTo16BitPCM = r;
        const o = (e, t, n) => {
            for (let r = 0; r < n.length; r++)
                e.setUint8(t + r, n.charCodeAt(r))
        }
            ;
        t.write8BitString = o;
        t.encodeWAV = (e, t) => {
            const n = new ArrayBuffer(44 + 2 * e.length)
                , a = new DataView(n);
            return o(a, 0, "RIFF"),
                a.setUint32(4, 36 + 2 * e.length, !0),
                o(a, 8, "WAVE"),
                o(a, 12, "fmt "),
                a.setUint32(16, 16, !0),
                a.setUint16(20, 1, !0),
                a.setUint16(22, 2, !0),
                a.setUint32(24, t, !0),
                a.setUint32(28, 4 * t, !0),
                a.setUint16(32, 4, !0),
                a.setUint16(34, 16, !0),
                o(a, 36, "data"),
                a.setUint32(40, 2 * e.length, !0),
                r(a, 44, e),
                a
        }
    },
    1709: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getMediaPermissions = async function (e) {
                let t = null
                    , n = null
                    , r = "";
                if (i.default.platform.isMacPlatform())
                    try {
                        let r = !1;
                        const o = await i.default.platform.askForMicrophoneAccess();
                        e && (r = await i.default.platform.askForCameraAccess()),
                            n = o,
                            t = r
                    } catch (e) {
                        r = u(e),
                            i.default.log.error("Could not get media permissions on MacOS: ", r)
                    }
                else {
                    try {
                        (await navigator.mediaDevices.getUserMedia({
                            audio: !0
                        })).getTracks().forEach(e => {
                            e.stop()
                        }
                        ),
                            n = !0
                    } catch (e) {
                        n = !1,
                            r = u(e),
                            i.default.log.error("Could not get microphone permissions on Windows: ", r)
                    }
                    if (e)
                        try {
                            (await navigator.mediaDevices.getUserMedia({
                                video: !0
                            })).getTracks().forEach(e => {
                                e.stop()
                            }
                            ),
                                t = !0
                        } catch (e) {
                            t = !1,
                                r = u(e),
                                i.default.log.error("Could not get camera permissions on Windows: ", r)
                        }
                }
                return {
                    microphone: n,
                    camera: t,
                    errorMessage: r
                }
            }
            ,
            t.showMediaPermissionsErrorDialog = async function (e, t, n) {
                const l = !e
                    , u = n && !t
                    , s = i.default.platform.isMojaveOrHigher()
                    , c = i.default.platform.isWindows10OrHigher();
                let d = a.default._("Couldn't Connect to Your Microphone or Camera", null, {
                    hk: "3HQMll"
                }).toString()
                    , f = a.default._("Your camera or microphone are either not connected or not supported. You can learn more about troubleshooting suggestions in our help center.", null, {
                        hk: "1H3fZT"
                    }).toString();
                const p = "\n" + a.default._("Please also make sure that no other program is using your camera or microphone.", null, {
                    hk: "HczBF"
                }).toString();
                let m = !1;
                s ? u && l ? (d = a.default._("Allow {Application Name} Access to Your Camera and Microphone", [a.default._param("Application Name", o.displayName)], {
                    hk: "2pXO8h"
                }).toString(),
                    f = a.default._("Go to System Preferences to allow {Application Name} access to your camera and microphone so others can see and hear you.", [a.default._param("Application Name", o.displayName)], {
                        hk: "3IZPV8"
                    }).toString(),
                    m = !0) : u ? (d = a.default._("Allow {Application Name} Access to Your Camera", [a.default._param("Application Name", o.displayName)], {
                        hk: "2tUQuI"
                    }).toString(),
                        f = a.default._("Go to System Preferences to allow {Application Name} access to your camera so others on the call can see you.", [a.default._param("Application Name", o.displayName)], {
                            hk: "3Qrgwy"
                        }).toString(),
                        m = !0) : l && (d = a.default._("Allow {Application Name} Access to Your Microphone", [a.default._param("Application Name", o.displayName)], {
                            hk: "46Txd1"
                        }).toString(),
                            f = a.default._("Go to System Preferences to allow {Application Name} access to your microphone so others on the call can hear you.", [a.default._param("Application Name", o.displayName)], {
                                hk: "3NE2P6"
                            }).toString(),
                            m = !0) : c && (u && l ? (d = a.default._("Allow {Application Name} Access to Your Camera and/or Microphone", [a.default._param("Application Name", o.displayName)], {
                                hk: "3NOp7L"
                            }).toString(),
                                f = a.default._("Go to Settings to allow {Application Name} access to your camera and/or microphone so others can see and hear you.", [a.default._param("Application Name", o.displayName)], {
                                    hk: "TNh5C"
                                }).toString(),
                                m = !0) : u ? (d = a.default._("Allow {Application Name} Access to Your Camera", [a.default._param("Application Name", o.displayName)], {
                                    hk: "2tUQuI"
                                }).toString(),
                                    f = a.default._("Go to Settings to allow {Application Name} access to your camera so others on the call can see you.", [a.default._param("Application Name", o.displayName)], {
                                        hk: "3NeGnS"
                                    }).toString(),
                                    m = !0) : l && (d = a.default._("Allow {Application Name} Access to Your Microphone", [a.default._param("Application Name", o.displayName)], {
                                        hk: "46Txd1"
                                    }).toString(),
                                        f = a.default._("Go to Settings to allow {Application Name} access to your microphone so others on the call can hear you.", [a.default._param("Application Name", o.displayName)], {
                                            hk: "nlaDa"
                                        }).toString(),
                                        m = !0));
                const h = s ? a.default._("System Preferences", null, {
                    hk: "xlTet"
                }).toString() : a.default._("Settings", null, {
                    hk: "3DaA8U"
                }).toString()
                    , g = [m ? h : a.default._("Learn More", null, {
                        hk: "EB7tL"
                    }).toString(), a.default._("OK", null, {
                        hk: "36miRw"
                    }).toString()];
                if (0 === (await i.default.platform.showMessageBox({
                    type: "info",
                    message: d.toString(),
                    detail: f.toString() + p,
                    buttons: g
                })).response)
                    if (m) {
                        i.default.metrics.trackStrictEvent((0,
                            r.UserInteractionEvent)({
                                event: "click",
                                target: "mediaPermissionsError",
                                surface: "errorDialog",
                                context: {
                                    needsMicPermission: String(l),
                                    needsCameraPermission: String(u),
                                    isMojaveOrHigher: String(s),
                                    isWindows10OrHigher: String(c)
                                }
                            }));
                        const e = u && !l ? "cam" : "mic";
                        i.default.platform.openOSPrivacySettings(e)
                    } else
                        i.default.platform.openExternalURL("https://www.facebook.com/help/232232800134371")
            }
            ,
            t.showVoiceRecorderErrorDialog = async function () {
                const e = i.default.platform.isMojaveOrHigher()
                    , t = i.default.platform.isWindows10OrHigher();
                let n = a.default._("Couldn't Connect to Your Microphone", null, {
                    hk: "3ysbCs"
                }).toString()
                    , r = a.default._("Your microphone is either not connected or not supported. You can learn more about troubleshooting suggestions in our help center.", null, {
                        hk: "1yoUFi"
                    }).toString()
                    , l = !1;
                e ? (n = a.default._("Allow {Application Name} Access to Your Microphone", [a.default._param("Application Name", o.displayName)], {
                    hk: "2scVn7"
                }).toString(),
                    r = a.default._("Go to System Preferences to allow {Application Name} access to your microphone to record voice clip.", [a.default._param("Application Name", o.displayName)], {
                        hk: "ibbJd"
                    }).toString(),
                    l = !0) : t && (n = a.default._("Allow {Application Name} Access to Your Microphone", [a.default._param("Application Name", o.displayName)], {
                        hk: "2scVn7"
                    }).toString(),
                        r = a.default._("Go to Settings to allow {Application Name} access to your microphone to record voice clip.", [a.default._param("Application Name", o.displayName)], {
                            hk: "46yPOl"
                        }).toString(),
                        l = !0);
                const u = e ? a.default._("System Preferences", null, {
                    hk: "3cLmud"
                }).toString() : a.default._("Settings", null, {
                    hk: "3DaA8U"
                }).toString()
                    , s = [l ? u : a.default._("Learn More", null, {
                        hk: "e32ch"
                    }).toString(), a.default._("OK", null, {
                        hk: "3YoPVD"
                    }).toString()];
                0 === (await i.default.platform.showMessageBox({
                    type: "info",
                    message: n.toString(),
                    detail: r.toString(),
                    buttons: s
                })).response && (l ? i.default.platform.openOSPrivacySettings() : i.default.platform.openExternalURL("https://www.facebook.com/help/232232800134371"))
            }
            ;
        var r = n(24)
            , o = n(83)
            , a = l(n(5))
            , i = l(n(9));
        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function u(e) {
            return e.message && e.name ? e.name + ": " + e.message : e.toString()
        }
    },
    1710: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var r = g(n(2))
            , o = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = h();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(22))
            , a = g(n(1711))
            , i = n(66)
            , l = n(35)
            , u = g(n(5))
            , s = n(101)
            , c = g(n(1))
            , d = g(n(566))
            , f = g(n(598))
            , p = n(46)
            , m = g(n(0));
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
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = (0,
            p.animated)((0,
                c.default)(r.default)({
                    justifyContent: "flex-end"
                }));
        var v = m.default.memo((function (e) {
            const { color: t, emoji: n, threadKey: c, showHotlike: h, onLike: g, onSend: v, disabled: b, ctaHandlers: k, persistentMenus: S } = e
                , { windowKey: _ } = (0,
                    l.useWindowContext)()
                , C = u.default._("Send a {emoji}", [u.default._param("emoji", n || "Like")], {
                    hk: "Y4wQc"
                }).toString()
                , w = u.default._("Send Message", null, {
                    hk: "ZHFRa"
                }).toString()
                , { showContextMenu: E } = (0,
                    i.useContextMenu)();
            return m.default.createElement(p.Transition, {
                items: h,
                config: {
                    tension: 500,
                    friction: 26
                },
                initial: {
                    transform: "rotate(0deg) scale(1)",
                    opacity: 1,
                    height: "100%"
                },
                from: e => ({
                    position: "absolute",
                    opacity: 0,
                    transform: e ? "rotate(45deg) scale(0.8)" : "rotate(-15deg) scale(0.6)"
                }),
                enter: {
                    opacity: 1,
                    transform: "rotate(0deg) scale(1)"
                },
                leave: e => ({
                    opacity: 0,
                    transform: e ? "rotate(45deg) scale(0.8)" : "rotate(-15deg) scale(0.6)"
                })
            }, e => e ? e => m.default.createElement(y, {
                style: e
            }, S.length > 0 ? m.default.createElement(a.default, {
                persistentMenus: S,
                ctaHandlers: k,
                menuIconColor: t
            }) : m.default.createElement(r.default, {
                onContextMenu: e => (async e => {
                    c && await E({
                        target: e.currentTarget,
                        items: [(0,
                            s.getEditThreadEmojiItem)(c, _, !0)]
                    })
                }
                )(e)
            }, m.default.createElement(o.default, {
                "aria-label": C,
                title: C,
                key: "hotlike",
                telemetryName: "hotlike_" + (n || "like"),
                icon: d.default,
                iconColor: t,
                use: o.RoundButtonUse.Transparent,
                onClick: g,
                disabled: b,
                customEmoji: n
            }))) : e => m.default.createElement(y, {
                style: e
            }, m.default.createElement(o.default, {
                "aria-label": w,
                title: w,
                key: "send",
                telemetryName: "send_button",
                icon: f.default,
                iconColor: t,
                use: o.RoundButtonUse.Transparent,
                onClick: v,
                disabled: b
            })))
        }
        ));
        t.default = v
    },
    1711: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { persistentMenus: t, ctaHandlers: n, menuIconColor: a } = e
                    , c = (0,
                        f.useRef)(null)
                    , p = (0,
                        f.useRef)(null)
                    , [g, y] = (0,
                        s.default)(c, p)
                    , v = l.default._("View menu options", null, {
                        hk: "FxTn3"
                    }).toString()
                    , S = (0,
                        f.useCallback)(() => {
                            y(!g)
                        }
                            , [y, g])
                    , _ = (0,
                        f.useCallback)(() => {
                            y(!1)
                        }
                            , [y]);
                return (0,
                    u.useShortcut)("esc", _),
                    f.default.createElement(f.default.Fragment, null, f.default.createElement(r.default, {
                        "aria-label": v,
                        title: v,
                        telemetryName: "persistent_menus",
                        icon: d.default,
                        iconColor: a,
                        use: r.RoundButtonUse.Transparent,
                        onClick: S,
                        pressed: g,
                        elementRef: c
                    }), g && f.default.createElement(i.default, {
                        target: c.current,
                        placement: "top",
                        ref: p
                    }, f.default.createElement(o.default, null, f.default.createElement(b, null, f.default.createElement(k, null, f.default.createElement(h.default, {
                        use: "body-bold"
                    }, l.default._("Options", null, {
                        hk: "40IUrF"
                    }))), f.default.createElement(m.default, null, t.map(e => f.default.createElement(C, {
                        key: e.ctaId,
                        menuItem: e,
                        ctaHandlers: n,
                        onDismiss: _
                    })))))))
            }
            ;
        var r = v(n(22))
            , o = g(n(188))
            , a = n(274)
            , i = g(n(91))
            , l = g(n(5))
            , u = n(84)
            , s = g(n(143))
            , c = g(n(1))
            , d = g(n(1712))
            , f = v(n(0))
            , p = v(n(2))
            , m = g(n(45))
            , h = g(n(4));
        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function y() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return y = function () {
                return e
            }
                ,
                e
        }
        function v(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = y();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
                t && t.set(e, n),
                n
        }
        const b = (0,
            c.default)(p.default)(e => ({
                width: 260,
                maxHeight: 260,
                marginBottom: 10,
                pointerEvents: "auto",
                backgroundColor: e.theme.select({
                    light: e.theme.colors.base10,
                    dark: e.theme.colors.flatBase40
                }),
                borderRadius: e.theme.select({
                    mac: 5
                }),
                boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.20)"
            }))
            , k = (0,
                c.default)(p.default)({
                    paddingTop: 12,
                    paddingBottom: 8,
                    justifyContent: "center",
                    alignItems: "center"
                })
            , S = (0,
                c.default)(p.FocusableView)(e => ({
                    ":not(:last-child)": {
                        borderBottom: "1px solid " + e.theme.select({
                            light: e.theme.colors.base20,
                            dark: e.theme.colors.base50
                        })
                    }
                }))
            , _ = (0,
                c.default)(h.default)(e => ({
                    padding: "8px 12px"
                }));
        function C(e) {
            const { menuItem: t, ctaHandlers: n, onDismiss: r } = e
                , o = (0,
                    f.useCallback)(() => {
                        const e = (0,
                            a.getPersistentMenuItemClickHandler)(t, n);
                        e && (e(),
                            r())
                    }
                        , [t, n, r]);
            return f.default.createElement(S, {
                onActivate: o
            }, f.default.createElement(_, {
                use: "subtext",
                wrapText: !0
            }, t.title))
        }
    },
    1712: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "currentColor",
                    d: "M8.25 10a1.25 1.25 0 100 2.5h19.5a1.25 1.25 0 100-2.5H8.25zM7 18c0-.69.56-1.25 1.25-1.25h19.5a1.25 1.25 0 110 2.5H8.25C7.56 19.25 7 18.69 7 18zM7 24.75c0-.69.56-1.25 1.25-1.25h19.5a1.25 1.25 0 110 2.5H8.25C7.56 26 7 25.44 7 24.75z"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    1713: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-5.25-13c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zm7.5 0c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zm-7.52 5.464a1 1 0 011.41-.12 5.963 5.963 0 003.856 1.406c1.47 0 2.813-.528 3.856-1.406a1 1 0 111.288 1.53 7.962 7.962 0 01-5.144 1.876 7.962 7.962 0 01-5.144-1.877 1 1 0 01-.121-1.409z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    1714: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M12 8a4 4 0 00-4 4v12a4 4 0 004 4h5a1 1 0 001-1v-3a.257.257 0 00-.248-.257 7.984 7.984 0 01-5.228-2.164c-.375-.352-.347-.938.016-1.301.416-.415 1.097-.371 1.541.013a5.977 5.977 0 004.208 1.45.25.25 0 00.215-.153A6.001 6.001 0 0124 18h3a1 1 0 001-1v-5a4 4 0 00-4-4H12zm.75 7c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2zm7.5 0c0-1.25.563-2 1.5-2 .938 0 1.5.75 1.5 2s-.563 2-1.5 2c-.938 0-1.5-.75-1.5-2z",
                    clipRule: "evenodd"
                }), o.default.createElement("path", {
                    fill: "currentColor",
                    d: "M24 20h3c.89 0 1.33 1.077.7 1.707L21.707 27.7c-.63.63-1.707.19-1.707-.7v-3a4 4 0 014-4z"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    1715: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm-1-16a1 1 0 112 0v3.75c0 .138.112.25.25.25H23a1 1 0 110 2h-3.75a.25.25 0 00-.25.25V23a1 1 0 11-2 0v-3.75a.25.25 0 00-.25-.25H13a1 1 0 110-2h3.75a.25.25 0 00.25-.25V13z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    1716: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.translateEmoticonToEmoji = function (e, t) {
                const n = e.getSelection()
                    , i = n.getAnchorKey();
                let l = e.getCurrentContent();
                const u = l.getBlockForKey(i)
                    , s = (0,
                        o.findEmoticonInfo)(u.getText(), n.getFocusOffset());
                if (s) {
                    let { emoticonStart: o, emoticonEnd: i, emoji: c } = s
                        , d = !1;
                    if ((0,
                        r.isSkintoneModifiable)(c)) {
                        const e = (0,
                            r.applyToneModifier)(c, t);
                        e !== c && (d = !0,
                            c = e)
                    }
                    return function (e) {
                        let t = u.getLength() - (i - o) + 1;
                        return d && (t += 1),
                            "❤" === s.emoji && (t -= 1),
                            a.EditorState.forceSelection(e, n.merge({
                                anchorOffset: t,
                                focusOffset: t
                            }))
                    }(function () {
                        const t = n.merge({
                            anchorOffset: o,
                            focusOffset: i + 1
                        });
                        return l = a.Modifier.replaceText(l, t, c),
                            a.EditorState.push(e, l, "change-block-data")
                    }())
                }
                return e
            }
            ;
        var r = n(330)
            , o = n(390)
            , a = n(81)
    },
    1717: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "currentColor",
                    d: "M17 7a1 1 0 011 1v4a4 4 0 004 4h4a1 1 0 011 1v10a2 2 0 01-2 2H11a2 2 0 01-2-2V9a2 2 0 012-2h6z"
                }), o.default.createElement("path", {
                    fill: "currentColor",
                    d: "M26.01 14H22a2 2 0 01-2-2V7.99a.99.99 0 011.69-.7l5.02 5.02a.99.99 0 01-.7 1.69z"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    1718: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "currentColor",
                    d: "M10.667 9C8.642 9 7 10.79 7 13a1 1 0 001 1h4.892a.75.75 0 00.697-1.028l-1.4-3.5A.75.75 0 0011.492 9h-.825zM15.108 9a.75.75 0 00-.697 1.028l1.4 3.5a.75.75 0 00.697.472h4.384a.75.75 0 00.697-1.028l-1.4-3.5A.75.75 0 0019.492 9h-4.384zM23.108 9a.75.75 0 00-.697 1.028l1.4 3.5a.75.75 0 00.697.472H28a1 1 0 001-1c0-2.21-1.642-4-3.667-4h-2.225zM29 17a1 1 0 00-1-1H8a1 1 0 00-1 1v6c0 2.21 1.642 4 3.667 4h14.666C27.358 27 29 25.21 29 23v-6z"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    1719: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "currentColor",
                    d: "M14 11a4 4 0 018 0v5.5a4 4 0 01-8 0V11z"
                }), o.default.createElement("path", {
                    fill: "currentColor",
                    d: "M12.5 27.5a1 1 0 011-1h2.75a.5.5 0 00.5-.5v-.66a.522.522 0 00-.425-.505A8.503 8.503 0 019.5 16.5V16a1 1 0 011-1h.5a1 1 0 011 1v.5a6 6 0 0012 0V16a1 1 0 011-1h.5a1 1 0 011 1v.5a8.503 8.503 0 01-6.825 8.335.522.522 0 00-.425.505V26a.5.5 0 00.5.5h2.75a1 1 0 011 1v.5a1 1 0 01-1 1h-9a1 1 0 01-1-1v-.5z"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    1720: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var r = n(6)
            , o = n(642)
            , a = n(196)
            , i = n(84)
            , l = m(n(190))
            , u = m(n(243))
            , s = n(61)
            , c = n(23)
            , d = n(11)
            , f = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = p();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(0));
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
        const h = f.default.lazy(() => Promise.all([n.e(9), n.e(13), n.e(33), n.e(101)]).then(n.t.bind(null, 1865, 7)));
        const g = {
            sendMessage: c.InboxActions.messages.sendMessage,
            searchStickersResults: c.InboxActions.media.searchStickersResults,
            searchGIFResults: c.InboxActions.media.searchGIFResults,
            loadStickerPacks: c.InboxActions.media.loadStickerPacks,
            loadPhotoPaths: c.InboxActions.media.loadMediaPickerPhotoPaths,
            setPhotoPaths: c.InboxActions.media.setMediaPickerPhotoPaths
        };
        var y = (0,
            d.connect)((function (e, t) {
                return {
                    userId: (0,
                        s.requireAuthenticationData)(e).userID,
                    stickerPacks: (0,
                        c.getStickerPacks)(e),
                    recentStickers: (0,
                        c.getRecentStickers)(e),
                    stickerSearchResults: (0,
                        c.getStickerSearchInfo)(e).searchResults,
                    stickerSearchQueryStatus: (0,
                        c.getStickerSearchInfo)(e).searchQueryStatus,
                    gifSearchResults: (0,
                        c.getGIFSearchInfo)(e).searchResults,
                    gifSearchQueryStatus: (0,
                        c.getGIFSearchInfo)(e).searchQueryStatus,
                    trendingGIFs: (0,
                        c.getTrendingGIFsSearchInfo)(e).searchResults,
                    trendingGIFsSearchQueryStatus: (0,
                        c.getTrendingGIFsSearchInfo)(e).searchQueryStatus,
                    photoPaths: (0,
                        c.getMediaPickerPhotosByThread)(e, t.threadKey)
                }
            }
            ), g)((function (e) {
                const { canSendGIF: t, canSendSticker: n, disableShortcuts: s, gifSearchQueryStatus: d, gifSearchResults: p, isOpen: m, loadStickerPacks: g, onClose: y, onOpen: v, replyContext: b, searchGIFResults: k, searchStickersResults: S, sendMessage: _, stickerPacks: C, recentStickers: w, stickerSearchQueryStatus: E, stickerSearchResults: M, threadKey: P, trendingGIFs: O, trendingGIFsSearchQueryStatus: T, userId: x, loadPhotoPaths: j, photoPaths: I } = e
                    , R = (0,
                        l.default)(P, !1)
                    , A = (0,
                        r.useTheme)()
                    , [D, F] = (0,
                        u.default)("rich_media_picker_type", "sticker")
                    , K = (0,
                        f.useCallback)(e => {
                            F(e)
                        }
                            , [F]);
                (0,
                    f.useEffect)(() => {
                        m && R.current && y()
                    }
                        , [P, R, m, y]),
                    (0,
                        f.useEffect)(() => {
                            m && k("")
                        }
                            , [m, k]),
                    (0,
                        f.useEffect)(() => {
                            m && "sticker" === D && !C && g()
                        }
                            , [m, g, D, C]),
                    (0,
                        f.useEffect)(() => {
                            m && "photo" === D && !I && j(c.MEDIA_PICKER_START_PHOTO_COUNT)
                        }
                            , [m, j, D, I]);
                const N = (0,
                    f.useCallback)(() => { }
                        , [])
                    , U = (0,
                        f.useCallback)(() => {
                            F("gif"),
                                v()
                        }
                            , [F, v])
                    , B = (0,
                        f.useCallback)(() => {
                            F("sticker"),
                                v()
                        }
                            , [F, v])
                    , W = (0,
                        f.useCallback)(() => {
                            F("photo"),
                                v()
                        }
                            , [F, v])
                    , L = a.KeyboardShortcuts[a.KeyboardAction.OpenStickerPicker]
                    , H = A.select({
                        ...L
                    })
                    , z = a.KeyboardShortcuts[a.KeyboardAction.OpenGIFPicker]
                    , G = A.select({
                        ...z
                    });
                (0,
                    i.useShortcut)(H, s || !n ? N : B),
                    (0,
                        i.useShortcut)(G, s || !t ? N : U),
                    (0,
                        i.useShortcut)(A.select({
                            ...a.KeyboardShortcuts[a.KeyboardAction.OpenPhotoPicker]
                        }), W);
                const V = (0,
                    f.useCallback)(e => {
                        null != P && null != e && _({
                            threadKey: P,
                            senderId: x,
                            stickerId: e.stickerId,
                            previewUrl: (0,
                                o.getStickerAnimatedUrl)(e) || (0,
                                    o.getStickerStaticUrl)(e),
                            previewUrlMimeType: e.animatedImageMimeType || e.staticImageMimeType,
                            replySourceId: b && b.replyMessageId
                        })
                    }
                        , [_, P, x, b])
                    , Y = (0,
                        f.useCallback)(e => {
                            if (null != P) {
                                const { sourceUrl: t, appFbid: n, playableUrl: r, playableUrlMimeType: o, gifWidth: a, gifHeight: i } = e;
                                _({
                                    threadKey: P,
                                    senderId: x,
                                    replySourceId: b && b.replyMessageId,
                                    externalAttachmentUrl: t,
                                    attributionAppId: n,
                                    playableUrl: r,
                                    playableUrlMimeType: o,
                                    previewWidth: a,
                                    previewHeight: i,
                                    previewUrl: r,
                                    previewUrlMimeType: o
                                })
                            }
                        }
                            , [_, P, x, b]);
                return m ? f.default.createElement(f.Suspense, {
                    fallback: null
                }, f.default.createElement(h, {
                    stickerPacks: C,
                    recentStickers: w,
                    onClose: y,
                    onStickerSelect: V,
                    stickerSearchResults: M,
                    stickerQueryStatus: E,
                    onStickerSearch: S,
                    focusShortcut: "sticker" === D ? L : z,
                    onGIFSearch: k,
                    gifSearchResults: p,
                    gifSearchQueryStatus: d,
                    trendingGIFs: O,
                    trendingGIFsSearchQueryStatus: T,
                    onGIFSelect: Y,
                    onSelectingMediaType: K,
                    currentMediaPickerType: D,
                    enableStickers: n,
                    enableGIFs: t,
                    photoPaths: I,
                    threadKey: P
                })) : null
            }
            ));
        t.default = y
    },
    264: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var r = b(n(1660))
            , o = b(n(59))
            , a = n(8)
            , i = b(n(143))
            , l = n(101)
            , u = n(61)
            , s = n(23)
            , c = b(n(1661))
            , d = b(n(153))
            , f = n(52)
            , p = n(11)
            , m = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = v();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(0))
            , h = b(n(1662))
            , g = b(n(570))
            , y = b(n(1720));
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
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var k = (0,
            p.connect)((function (e, t) {
                var n;
                const r = (0,
                    u.requireAuthenticationData)(e)
                    , { userID: o } = r
                    , i = (0,
                        s.getThread)(e, t.threadKey)
                    , l = (0,
                        s.getParticipantListForThread)(e, t.threadKey)
                    , c = (0,
                        s.getNewThreadInfo)(e)
                    , p = (0,
                        f.getPeer)(o, i ? i.threadType : a.ThreadType.Unknown, l)
                    , m = (null == p ? void 0 : p.contactType) === a.ContactType.Page
                    , h = !!i && (0,
                        d.default)(a.ThreadCapabilities.STICKER, i.capabilities);
                return {
                    authData: r,
                    canSendGIF: !!i && (0,
                        d.default)(a.ThreadCapabilities.GIF, i.capabilities),
                    canSendSticker: h,
                    canSendPhoto: !!i && (0,
                        d.default)(a.ThreadCapabilities.MEDIA_PICKER, i.capabilities),
                    enableMentions: !!i && (0,
                        d.default)(a.ThreadCapabilities.MENTIONS, i.capabilities),
                    composerDisabledType: function (e, t, n, r) {
                        return null != t && t.isNewThreadOpen && 0 === t.recipients.length ? a.ComposerDisabledType.NewThreadNoRecipients : null != t && t.isNewThreadOpen && !t.previewThread ? a.ComposerDisabledType.NewThreadNoPreview : (0,
                            f.isViewerPartOfThread)(e, n, !0) ? (null == r ? void 0 : r.blockedByViewerStatus) ? a.ComposerDisabledType.BlockedThread : r && !r.canViewerMessage || r && r.contactReachabilityStatus === a.ContactReachabilityStatus.UNREACHABLE_USER_TYPE ? a.ComposerDisabledType.CantMessage : null : a.ComposerDisabledType.NotMember
                    }(o, c, l, p),
                    isMessageRequestsThread: Boolean(i && i.parentThreadKey === a.ThreadFolderParentKey.MessageRequests),
                    isNewThread: Boolean(c && c.isNewThreadOpen),
                    isPageThread: m,
                    peer: p,
                    replyContext: (0,
                        s.selectReplyContext)(e, t),
                    threadType: null == i ? void 0 : i.threadType,
                    cannotReplyReason: null !== (n = null == i ? void 0 : i.cannotReplyReason) && void 0 !== n ? n : null
                }
            }
            ), {})((function (e) {
                const { authData: t, canSendGIF: n, canSendSticker: u, canSendPhoto: s, enableMentions: d, composerDisabledType: p, isMessageRequestsThread: v, isNewThread: b, isPageThread: k, peer: S, replyContext: _, threadKey: C, threadType: w, cannotReplyReason: E } = e
                    , M = (0,
                        m.useRef)(null)
                    , P = (0,
                        m.useRef)(null)
                    , O = (0,
                        m.useRef)(null)
                    , [T, x] = (0,
                        i.default)(P, O)
                    , [j, I] = (0,
                        m.useState)(!1)
                    , R = (0,
                        m.useCallback)(() => {
                            x(!1)
                        }
                            , [x])
                    , A = (0,
                        m.useCallback)(() => {
                            I(!1),
                                M.current && M.current.focus()
                        }
                            , [])
                    , D = (0,
                        m.useCallback)(() => {
                            R(),
                                I(!0)
                        }
                            , [R])
                    , F = (0,
                        m.useCallback)(() => {
                            A(),
                                x(!0)
                        }
                            , [A, x])
                    , K = (0,
                        m.useCallback)(() => {
                            if (!S)
                                return;
                            const e = S.firstName || S.name;
                            k ? (0,
                                l.executePageUnblock)(S.contactId, e) : (0,
                                    f.isParticipantFacebookBlocked)(S) ? (0,
                                        l.executeFacebookUnblock)(e) : (0,
                                            l.executeMessengerUnblock)(S.contactId, e)
                        }
                            , [k, S]);
                return p === a.ComposerDisabledType.BlockedThread || p === a.ComposerDisabledType.CantMessage || p === a.ComposerDisabledType.NotMember ? m.default.createElement(g.default, {
                    firstName: (null == S ? void 0 : S.firstName) || (null == S ? void 0 : S.name) || "",
                    isPageThread: k,
                    onSomethingsWrongClick: () => (0,
                        l.openReportingMenu)(t, C || "", w || 0, k),
                    onUnblockClick: K,
                    disabledType: p,
                    cannotReplyReason: E
                }) : m.default.createElement(m.default.Fragment, null, (0,
                    o.default)({
                        messenger: null,
                        workchat: S && C && m.default.createElement(r.default, {
                            threadKey: C,
                            peer: S
                        })
                    }), m.default.createElement(y.default, {
                        threadKey: C,
                        canSendGIF: n,
                        canSendSticker: u,
                        disableShortcuts: null != p,
                        isOpen: j,
                        onOpen: D,
                        onClose: A,
                        replyContext: _
                    }), m.default.createElement(h.default, {
                        ref: M,
                        composerDisabledType: p,
                        threadKey: C,
                        notice: v && C && w && m.default.createElement(c.default, {
                            peerId: null == S ? void 0 : S.contactId,
                            peerName: (null == S ? void 0 : S.firstName) || (null == S ? void 0 : S.name) || "",
                            threadKey: C,
                            threadType: w,
                            isPageThread: k
                        }),
                        key: b ? "NEW" : C || void 0,
                        onRichMediaPickerOpened: D,
                        isRichMediaPickerOpen: j,
                        onRichMediaPickerClosed: A,
                        isEmojiPickerOpen: T,
                        onEmojiPickerOpened: F,
                        onEmojiPickerClosed: R,
                        emojiPickerRef: P,
                        emojiPickerTargetRef: O,
                        enableStickers: u,
                        enableGIFs: n,
                        enablePhotos: s,
                        enableMentions: d
                    }))
            }
            ));
        t.default = k
    },
    327: function (e, t, n) {
        var r = n(1677)
            , o = n(124)
            , a = o;
        a.v1 = r,
            a.v4 = o,
            e.exports = a
    },
    328: function (e, t, n) {
        var r = n(1683).Symbol;
        e.exports = r
    },
    329: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function () {
                const [e, t] = (0,
                    u.useReducer)(g, {
                        state: f,
                        isOpen: !1
                    })
                    , n = (0,
                        u.useRef)(null)
                    , c = (0,
                        u.useRef)(0)
                    , d = (0,
                        u.useRef)([])
                    , m = (0,
                        u.useRef)([])
                    , y = (0,
                        u.useRef)(0)
                    , v = (0,
                        u.useRef)(null)
                    , b = (0,
                        u.useRef)(null)
                    , k = (0,
                        u.useRef)(null)
                    , S = (0,
                        a.default)({
                            isSenderViewer: !0,
                            isAvailable: e.state !== f && e.state !== p,
                            duration: e.state !== f && e.state !== p ? e.duration : 0,
                            audioElement: v.current
                        })
                    , _ = (0,
                        u.useCallback)(() => {
                            const e = (0,
                                i.mergeBuffers)(d.current, y.current)
                                , n = (0,
                                    i.mergeBuffers)(m.current, y.current)
                                , r = (0,
                                    i.interleave)(e, n)
                                , o = (0,
                                    i.encodeWAV)(r, c.current);
                            let a = "";
                            const l = new Uint8Array(o.buffer)
                                , u = l.byteLength;
                            b.current = u;
                            for (let e = 0; e < u; e++)
                                a += String.fromCharCode(l[e]);
                            const s = window.btoa(a);
                            k.current = "data:audio/wav;base64," + s;
                            const f = new Blob([o], {
                                type: "audio/wav"
                            });
                            v.current && v.current.pause(),
                                v.current = new Audio(URL.createObjectURL(f)),
                                v.current.addEventListener("timeupdate", () => {
                                    null !== v.current && t({
                                        action: "update time",
                                        currentTime: v.current.duration - v.current.currentTime
                                    })
                                }
                                ),
                                v.current.addEventListener("durationchange", () => {
                                    null !== v.current && t({
                                        action: "update duration",
                                        duration: v.current.duration
                                    })
                                }
                                )
                        }
                            , [])
                    , C = (0,
                        u.useCallback)(() => (_(),
                            k.current && b.current ? {
                                uuid: (0,
                                    s.default)(),
                                mimeType: "audio/wav",
                                dataUrl: k.current,
                                size: b.current
                            } : null), [_])
                    , w = e.state === p;
                (0,
                    u.useEffect)(() => {
                        if (!w)
                            return () => { }
                                ;
                        y.current = 0,
                            d.current = [],
                            m.current = [];
                        let e = null;
                        return o.default.platform.askForMicrophoneAccess().then(r => {
                            r ? navigator.mediaDevices.getUserMedia({
                                audio: !0,
                                video: !1
                            }).then(t => {
                                n.current = new AudioContext;
                                const r = n.current.createMediaStreamSource(t)
                                    , o = r.context;
                                c.current = o.sampleRate,
                                    e = o.createScriptProcessor(4096, 2, 2),
                                    e.onaudioprocess = e => {
                                        d.current.push(Float32Array.from(e.inputBuffer.getChannelData(0))),
                                            m.current.push(Float32Array.from(e.inputBuffer.getChannelData(1))),
                                            y.current += e.inputBuffer.getChannelData(0).length
                                    }
                                    ,
                                    r.connect(e),
                                    e.connect(o.destination)
                            }
                            ).catch(e => {
                                (0,
                                    l.showVoiceRecorderErrorDialog)(),
                                    o.default.log.error(`Unable to record voice clip, media stream not available: ${e}`),
                                    t({
                                        action: "reset"
                                    })
                            }
                            ) : ((0,
                                l.showVoiceRecorderErrorDialog)(),
                                o.default.log.error("Unable to open voice clip recorder: Microphone permission denied"),
                                t({
                                    action: "reset"
                                }))
                        }
                        ),
                            () => {
                                _(),
                                    n.current && (n.current.close(),
                                        n.current = null),
                                    e && (e.onaudioprocess = null)
                            }
                    }
                        , [w, _]);
                const E = e.state === h;
                return (0,
                    u.useEffect)(() => v.current && E ? (v.current && v.current.play(),
                        () => {
                            v.current && v.current.pause()
                        }
                    ) : () => { }
                        , [E]),
                    (0,
                        u.useEffect)(() => {
                            if (!(e.state === p))
                                return () => { }
                                    ;
                            const n = setInterval(() => {
                                t({
                                    action: "duration ++"
                                })
                            }
                                , 1e3)
                                , o = setTimeout(() => t({
                                    action: "recording timeout"
                                }), (0,
                                    r.default)({
                                        minutes: 1
                                    }));
                            return () => {
                                clearInterval(n),
                                    clearTimeout(o)
                            }
                        }
                            , [e.state]),
                {
                    state: e,
                    actions: {
                        start: (0,
                            u.useCallback)(() => t({
                                action: "start"
                            }), []),
                        toggle: (0,
                            u.useCallback)(() => t({
                                action: "toggle"
                            }), []),
                        reset: (0,
                            u.useCallback)(() => t({
                                action: "reset"
                            }), [])
                    },
                    getVoiceClip: (0,
                        u.useCallback)(() => C(), [C]),
                    audioSeeker: S
                }
            }
            ,
            t.VoiceRecorderState = void 0;
        var r = c(n(47))
            , o = c(n(9))
            , a = c(n(543))
            , i = n(1708)
            , l = n(1709)
            , u = n(0)
            , s = c(n(327));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        let d;
        t.VoiceRecorderState = d,
            function (e) {
                e.Initial = "initial",
                    e.Recording = "recording",
                    e.Recorded = "recorded",
                    e.Playing = "playing"
            }(d || (t.VoiceRecorderState = d = {}));
        const { Initial: f, Recording: p, Recorded: m, Playing: h } = d;
        function g(e, t) {
            switch (t.action) {
                case "start":
                    return {
                        state: p,
                        duration: 0,
                        isOpen: !0
                    };
                case "toggle":
                    if (e.state === f)
                        return e;
                    if (e.state === m)
                        return {
                            ...e,
                            state: h
                        };
                    {
                        const t = e.state === h ? e.currentTime : e.duration;
                        return {
                            ...e,
                            state: m,
                            isOpen: !0,
                            currentTime: t
                        }
                    }
                case "duration ++":
                    if (e.state === p)
                        return {
                            ...e,
                            duration: e.duration + 1
                        };
                    break;
                case "update duration":
                    if (e.state === h || e.state === m)
                        return {
                            ...e,
                            duration: t.duration,
                            currentTime: t.duration
                        };
                    break;
                case "update time":
                    if (e.state === h || e.state === m)
                        return 0 === t.currentTime ? {
                            ...e,
                            state: m,
                            currentTime: e.duration
                        } : {
                            ...e,
                            currentTime: t.currentTime
                        };
                    break;
                case "recording timeout":
                    if (e.state === p)
                        return {
                            ...e,
                            state: m,
                            currentTime: 0
                        };
                    break;
                case "reset":
                    return {
                        state: f,
                        isOpen: !1
                    }
            }
            return e
        }
    },
    552: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { replyContext: { attachmentType: t, isSticker: n, isReplyingToSelf: u, replyMessageContactName: f, replyMessageText: m }, onCancel: h } = e;
                (0,
                    i.useShortcut)("esc", h);
                const g = u ? a.default._("Yourself", null, {
                    hk: "1dReyc"
                }) : f;
                let _;
                if (n)
                    _ = a.default._("Sticker", null, {
                        hk: "153Ghp"
                    });
                else if (null != t)
                    switch (t) {
                        case o.AttachmentType.Image:
                            _ = a.default._("Image", null, {
                                hk: "3Hyb5S"
                            });
                            break;
                        case o.AttachmentType.AnimatedImage:
                            _ = a.default._("Gif", null, {
                                hk: "3IThtf"
                            });
                            break;
                        case o.AttachmentType.Video:
                            _ = a.default._("Video", null, {
                                hk: "OXSv1"
                            });
                            break;
                        case o.AttachmentType.File:
                            _ = a.default._("File", null, {
                                hk: "4otxEU"
                            });
                            break;
                        case o.AttachmentType.Audio:
                            _ = a.default._("Audio Clip", null, {
                                hk: "4qOIDb"
                            });
                            break;
                        case o.AttachmentType.Sticker:
                            _ = a.default._("Sticker", null, {
                                hk: "153Ghp"
                            });
                            break;
                        default:
                            _ = m
                    }
                else
                    _ = m;
                const C = (0,
                    r.useTheme)()
                    , { threadTheme: w } = (0,
                        l.useThreadTheme)();
                return d.default.createElement(y, null, d.default.createElement(v, null, d.default.createElement(k, null, d.default.createElement(c.default, {
                    size: 17,
                    color: w.adminTextColor || C.semanticColors.textPrimary
                }), d.default.createElement(b, {
                    use: "caption",
                    threadTheme: w
                }, a.default._("Replying to", null, {
                    hk: "2QAHg1"
                })), d.default.createElement(b, {
                    use: "caption",
                    threadTheme: w
                }, d.default.createElement("b", null, g))), d.default.createElement(b, {
                    use: "subtext",
                    threadTheme: w
                }, _)), d.default.createElement(S, null, d.default.createElement(p.default, {
                    icon: s.default,
                    size: p.RoundButtonSize.XXSmall,
                    use: p.RoundButtonUse.Transparent,
                    buttonColor: C.select({
                        dark: C.colors.base40,
                        light: C.colors.base30
                    }),
                    "aria-label": a.default._("Cancel Reply", null, {
                        hk: "42BW60"
                    }).toString(),
                    telemetryName: "cancelReply",
                    onClick: h
                })))
            }
            ;
        var r = n(6)
            , o = n(8)
            , a = g(n(5))
            , i = n(84)
            , l = n(41)
            , u = g(n(1))
            , s = g(n(50))
            , c = g(n(326))
            , d = g(n(0))
            , f = g(n(2))
            , p = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = h();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(22))
            , m = g(n(4));
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
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = (0,
            u.default)(f.default)(e => ({
                flexDirection: "row",
                backgroundColor: e.theme.semanticColors.bgSelected,
                borderRadius: 14
            }))
            , v = (0,
                u.default)(f.default)({
                    flex: 1,
                    padding: 8,
                    paddingBottom: 10
                })
            , b = (0,
                u.default)(m.default)(e => ({
                    marginLeft: 4,
                    lineHeight: "normal",
                    color: e.threadTheme.adminTextColor
                }))
            , k = (0,
                u.default)(f.default)({
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                    marginBottom: 4
                })
            , S = (0,
                u.default)(f.default)({
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    padding: 8
                })
    },
    562: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e, t = !1, n = !1, u = !1) {
                const { window: s } = (0,
                    o.useWindowContext)()
                    , [c, d] = (0,
                        i.useState)(!1);
                return (0,
                    i.useEffect)(() => {
                        const o = e => {
                            e.preventDefault(),
                                e.stopPropagation(),
                                d(!0),
                                e.dataTransfer && (e.dataTransfer.dropEffect = "copy")
                        }
                            , i = e => {
                                d(!1)
                            }
                            , c = async o => {
                                o.preventDefault(),
                                    o.stopPropagation(),
                                    d(!1);
                                const i = o.dataTransfer ? o.dataTransfer.files : null;
                                if (i && i.length > 0)
                                    (0,
                                        a.handleFiles)(i, e, t, n, u);
                                else if (o.dataTransfer && o.dataTransfer.types.includes("text/uri-list")) {
                                    const t = o.dataTransfer.getData("text/uri-list");
                                    try {
                                        const { fileName: n, filePath: o, mimeType: a } = await r.default.platform.downloadImageToTempFile(t);
                                        e({
                                            uuid: (0,
                                                l.default)(),
                                            name: n,
                                            path: o,
                                            mimeType: a
                                        })
                                    } catch (e) {
                                        r.default.log.info(`User dragged image from ${t}, but it could not be loaded`)
                                    }
                                }
                            }
                            ;
                        return s.addEventListener("dragenter", o),
                            s.addEventListener("dragover", o),
                            s.addEventListener("dragleave", i),
                            s.addEventListener("drop", c),
                            () => {
                                s.removeEventListener("dragenter", o),
                                    s.removeEventListener("dragover", o),
                                    s.removeEventListener("dragleave", i),
                                    s.removeEventListener("drop", c)
                            }
                    }
                        , [t, e, s, n]),
                    c
            }
            ;
        var r = u(n(9))
            , o = n(35)
            , a = n(183)
            , i = n(0)
            , l = u(n(327));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    563: function (e, t, n) {
        var r = n(1681)
            , o = /[\\^$.*+?()[\]{}|]/g
            , a = RegExp(o.source);
        e.exports = function (e) {
            return (e = r(e)) && a.test(e) ? e.replace(o, "\\$&") : e
        }
    },
    564: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r, o = n(1694), a = (r = o) && r.__esModule ? r : {
            default: r
        };
        t.default = function (e, t, n) {
            var r = t.getAnchorKey()
                , o = t.getAnchorOffset()
                , i = e.getCurrentContent().getBlockForKey(r).getText();
            return (0,
                a.default)(i, o, n)
        }
    },
    565: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.default = function (e) {
            return "@" === e ? "mention" : e + "mention"
        }
    },
    567: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ isOpen: e, ...t }) {
                const { threadTheme: n } = (0,
                    r.useThreadTheme)()
                    , u = n.gradientColors && n.gradientColors[n.gradientColors.length - 1] || n.color;
                return i.default.createElement(a.Spring, {
                    native: !0,
                    config: {
                        tension: 400,
                        friction: 18
                    },
                    from: {
                        transform: "rotate(0deg)"
                    },
                    to: {
                        transform: `rotate(${e ? "45deg" : "0deg"})`
                    }
                }, e => i.default.createElement(a.animated.div, {
                    style: {
                        ...e
                    }
                }, i.default.createElement(l.default, c({
                    icon: o.default,
                    iconColor: u,
                    use: l.RoundButtonUse.Transparent
                }, t))))
            }
            ;
        var r = n(41)
            , o = s(n(1715))
            , a = n(46)
            , i = s(n(0))
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
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(22));
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
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function c() {
            return (c = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
    },
    568: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ file: e, onRemove: t }) {
                const n = (0,
                    g.useTheme)()
                    , a = function (e, t) {
                        const n = function (e) {
                            switch ((0,
                                i.getAttachmentTypeFromMimeType)(e)) {
                                case r.AttachmentType.Image:
                                case r.AttachmentType.AnimatedImage:
                                    return d.default;
                                case r.AttachmentType.Video:
                                    return s.default;
                                case r.AttachmentType.Audio:
                                    return c.default;
                                default:
                                    return u.default
                            }
                        }(e.mimeType);
                        if (S.includes(e.mimeType)) {
                            const n = e.path ? `${e.path}${e.uuid ? `?no-cache=${e.uuid}` : ""}` : e.dataUrl;
                            return (p.default.createElement(E, {
                                src: n,
                                theme: t
                            }))
                        }
                        if (_.includes(e.mimeType)) {
                            const n = `${e.path}${e.uuid ? `?no-cache=${e.uuid}` : ""}`;
                            return (p.default.createElement(p.default.Fragment, null, p.default.createElement(M, {
                                src: n,
                                type: e.mimeType,
                                theme: t
                            }), p.default.createElement(w, null, p.default.createElement(f.default, {
                                size: 20,
                                color: "white"
                            }))))
                        }
                        return (p.default.createElement(C, null, p.default.createElement(n, {
                            size: 35,
                            color: t.colors.base70
                        }), p.default.createElement(v.default, {
                            use: "body-bold",
                            color: t.colors.base70
                        }, e.name && (0,
                            i.getFileExtension)(e.name).toUpperCase())))
                    }(e, n)
                    , b = o.default._("Remove Attachment", null, {
                        hk: "49jVcm"
                    }).toString();
                return p.default.createElement(m.default, null, p.default.createElement(y.default, {
                    tooltipProps: {
                        children: e.name || String(o.default._("Attachment", null, {
                            hk: "NZHTF"
                        }))
                    },
                    delay: 1e3
                }, a), p.default.createElement(h.default, {
                    "aria-label": b,
                    title: b,
                    telemetryName: "removeMedia",
                    size: h.RoundButtonSize.XXSmall,
                    buttonColor: n.semanticColors.textPrimary,
                    silentPressedState: !0,
                    css: {
                        position: "absolute",
                        right: 13,
                        top: "-75px"
                    },
                    icon: l.default,
                    iconColor: n.colors.base10,
                    onClick: () => t(e)
                }))
            }
            ;
        var r = n(8)
            , o = k(n(5))
            , a = k(n(1))
            , i = n(183)
            , l = k(n(50))
            , u = k(n(1717))
            , s = k(n(1718))
            , c = k(n(1719))
            , d = k(n(257))
            , f = k(n(169))
            , p = k(n(0))
            , m = k(n(2))
            , h = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = b();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(22))
            , g = n(6)
            , y = k(n(73))
            , v = k(n(4));
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
        function k(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const S = ["image/png", "image/jpeg", "image/gif", "image/bmp"]
            , _ = ["video/quicktime", "video/mp4"]
            , C = (0,
                a.default)(m.default)(e => ({
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginRight: 8,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: e.theme.colors.base30
                }))
            , w = (0,
                a.default)(m.default)({
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    left: "24px",
                    top: "24px",
                    position: "absolute"
                })
            , E = C.withComponent("img", {
                target: "ecieh060",
                label: "ImageContainer"
            })
            , M = C.withComponent("video", {
                target: "ecieh061",
                label: "VideoContainer"
            })
    },
    569: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ state: e, toggle: t, compact: n, audioSeeker: r }) {
                const i = (0,
                    h.useTheme)()
                    , { threadTheme: f } = (0,
                        a.useThreadTheme)()
                    , y = f.gradientColors && f.gradientColors[f.gradientColors.length - 1] || f.color
                    , { Initial: v, Recording: w, Recorded: E, Playing: M } = o.VoiceRecorderState;
                return d.default.createElement(m.default, {
                    name: "voiceClipRecorder"
                }, d.default.createElement(c.Spring, {
                    config: {
                        tension: 500,
                        friction: 40
                    },
                    delay: 100,
                    from: {
                        opacity: 0,
                        transform: "translateX(-30%) scaleX(0.4)"
                    },
                    to: {
                        opacity: 1,
                        transform: "translateX(0) scaleX(1)"
                    }
                }, o => d.default.createElement(b, {
                    style: {
                        ...o
                    }
                }, d.default.createElement(k, {
                    color: y,
                    compact: n,
                    onClick: r.onContainerClick,
                    onMouseLeave: r.resetPreview,
                    onMouseMove: r.onContainerMouseMove,
                    onKeyDown: r.onContainerKeyDown
                }, d.default.createElement(l.default, {
                    isProgressing: e.state === w || e.state === M,
                    shouldResetAnimation: e.state === E && e.currentTime === e.duration,
                    selectedTime: e.state === E || e.state === M ? e.duration - e.currentTime : void 0,
                    duration: e.state === w ? 60 : e.state !== v ? e.duration : null
                }), r.scrubPreview, d.default.createElement(p.default, {
                    onClick: e => {
                        e.stopPropagation(),
                            t()
                    }
                    ,
                    onMouseMove: e => {
                        e.stopPropagation(),
                            r.resetPreview()
                    }
                    ,
                    telemetryName: "recordVoiceClipButton",
                    "aria-label": e.state === w ? S : e.state === M ? C : _,
                    title: e.state === w ? S : e.state === M ? C : _,
                    size: p.RoundButtonSize.XSmall,
                    icon: e.state === w || e.state === M ? s.default : u.default,
                    iconSize: 16,
                    iconColor: y,
                    buttonColor: i.semanticColors.textWhite
                }), d.default.createElement(g.default, {
                    seconds: e.state === M || e.state === E ? e.currentTime : e.state !== v ? e.duration : 0,
                    color: y,
                    backgroundColor: i.semanticColors.textWhite,
                    threadTheme: f
                })))))
            }
            ;
        var r = v(n(5))
            , o = n(329)
            , a = n(41)
            , i = v(n(1))
            , l = v(n(323))
            , u = v(n(169))
            , s = v(n(545))
            , c = n(46)
            , d = v(n(0))
            , f = v(n(2))
            , p = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = y();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(22))
            , m = v(n(13))
            , h = n(6)
            , g = v(n(544));
        function y() {
            if ("function" != typeof WeakMap)
                return null;
            var e = new WeakMap;
            return y = function () {
                return e
            }
                ,
                e
        }
        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const b = (0,
            c.animated)((0,
                i.default)(f.default)({
                    flexDirection: "row",
                    alignItems: "center"
                }))
            , k = (0,
                i.default)(f.default)(e => ({
                    height: e.compact ? 28 : 36,
                    flex: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: e.compact ? "8px 5px" : 8,
                    borderRadius: e.compact ? 14 : 18,
                    backgroundColor: e.color,
                    overflow: "hidden"
                }))
            , S = r.default._("Stop Recording", null, {
                hk: "5RF4o"
            }).toString()
            , _ = r.default._("Listen", null, {
                hk: "3wfLSx"
            }).toString()
            , C = r.default._("Stop", null, {
                hk: "4itgS1"
            }).toString()
    },
    570: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { firstName: t, isPageThread: n, onSomethingsWrongClick: l, onUnblockClick: f, cannotReplyReason: p, disabledType: v = a.ComposerDisabledType.CantMessage } = e
                    , b = (0,
                        c.useTheme)();
                let k = v === a.ComposerDisabledType.NotMember ? i.default._("You Can't Message This Group", null, {
                    hk: "1lR9AQ"
                }) : v === a.ComposerDisabledType.CantMessage ? i.default._("You can't message {name}", [i.default._param("name", t)], {
                    hk: "395mxX"
                }) : i.default._("You've blocked {name}", [i.default._param("name", t)], {
                    hk: "28Ox8R"
                })
                    , S = v === a.ComposerDisabledType.NotMember ? i.default._("You're no longer in this group and can't send or receive calls or messages unless you are added back to it.", null, {
                        hk: "mZYWH"
                    }) : i.default._("You can't message or call them in this chat, and you won't receive their messages or calls", null, {
                        hk: "2sjLP9"
                    });
                "recipients_inactive_work_account" === p && (k = i.default._("You Can't Send a Message to This Chat", null, {
                    hk: "tph4X"
                }),
                    S = i.default._("The profile you're trying to message has been deactivated.", null, {
                        hk: "1Bg5TS"
                    }));
                const _ = i.default._("You can't send or receive messages from this business.", null, {
                    hk: "1a88gj"
                })
                    , C = (0,
                        o.default)({
                            workchat: i.default._("Report", null, {
                                hk: "2mxOrw"
                            }),
                            messenger: i.default._("Something's Wrong", null, {
                                hk: "4ohY4N"
                            })
                        })
                    , w = i.default._("Unblock", null, {
                        hk: "pmMhX"
                    });
                return u.default.createElement(s.default, {
                    css: {
                        alignItems: "center",
                        padding: "10px 10px"
                    }
                }, u.default.createElement(m, null), u.default.createElement(g, {
                    use: "body-medium",
                    color: b.colors.base70
                }, k.toString()), u.default.createElement(d.default, {
                    use: "subtext",
                    color: b.colors.base70,
                    wrapText: !0,
                    textAlign: "center"
                }, n ? _.toString() : S.toString()), v === a.ComposerDisabledType.BlockedThread && u.default.createElement(s.default, {
                    css: {
                        flexDirection: "row",
                        width: "100%",
                        paddingTop: 10
                    }
                }, u.default.createElement(y, null, u.default.createElement(r.default, {
                    "aria-label": C.toString(),
                    use: r.RectangleButtonUse.Secondary,
                    size: r.RectangleButtonSize.Jumbo,
                    telemetryName: "blockedComposerSomethingsWrong",
                    onClick: l,
                    caption: C.toString()
                })), u.default.createElement(h, null), u.default.createElement(y, null, u.default.createElement(r.default, {
                    "aria-label": w.toString(),
                    use: r.RectangleButtonUse.Secondary,
                    size: r.RectangleButtonSize.Jumbo,
                    telemetryName: "blockedComposerUnblock",
                    onClick: f,
                    caption: w.toString()
                }))))
            }
            ;
        var r = function (e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = p();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            n.default = e,
                t && t.set(e, n);
            return n
        }(n(16))
            , o = f(n(59))
            , a = n(8)
            , i = f(n(5))
            , l = f(n(1))
            , u = f(n(0))
            , s = f(n(2))
            , c = n(6)
            , d = f(n(4));
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
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
        const m = (0,
            l.default)(s.default)(e => ({
                width: "100%",
                height: 1,
                marginBottom: 12,
                backgroundColor: e.theme.select({
                    light: e.theme.colors.base20,
                    dark: e.theme.colors.base50
                })
            }))
            , h = (0,
                l.default)(s.default)({
                    width: 10
                })
            , g = (0,
                l.default)(d.default)({
                    paddingBottom: 2
                })
            , y = (0,
                l.default)(s.default)({
                    flex: 1
                })
    },
    642: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getStickerAnimatedUrl = function (e) {
                return null != e.staticThumbnailImage ? (0,
                    o.default)(e.animatedImage) : e.animatedImageUrl
            }
            ,
            t.getStickerStaticUrl = function (e) {
                return null != e.staticThumbnailImage ? (0,
                    o.default)(e.staticThumbnailImage) : e.staticThumbnailImageUrl || ""
            }
            ;
        var r, o = (r = n(27)) && r.__esModule ? r : {
            default: r
        }
    }
}]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/Composer.bundle.js.map
