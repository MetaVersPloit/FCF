(window.webpackJsonp = window.webpackJsonp || []).push([
    [105], {
        2187: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = f(r(113)),
                a = r(2188),
                o = f(r(2190)),
                c = r(28),
                l = r(23),
                i = r(11),
                u = function (e) {
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
                }(r(0));

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function () {
                    return e
                }, e
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = {
                loadStickerStore: l.InboxActions.media.queryStickerStore,
                clearModal: c.AppContextActions.clearModal
            };
            var p = (0, i.connect)((function (e) {
                return {
                    stickerStoreStickerPacks: (0, l.getStickerStoreStickerPacks)(e)
                }
            }), d)((function (e) {
                const {
                    stickerStoreStickerPacks: t,
                    loadStickerStore: r,
                    clearModal: c
                } = e;
                (0, u.useEffect)(() => {
                    r()
                }, [r]);
                const l = (0, u.useCallback)(() => {
                        c()
                    }, [c]),
                    [i, s] = (0, u.useState)(null),
                    [f, d] = (0, u.useState)(0);
                return u.default.createElement(n.default, {
                    onClose: l,
                    width: 420
                }, i ? u.default.createElement(o.default, {
                    setCurrentPreviewPack: s,
                    currentPreviewPack: i
                }) : u.default.createElement(a.StickerStoreList, {
                    openToIndex: f,
                    storeStickerPacks: t,
                    setCurrentPreviewPack: s,
                    setOpenToIndex: d
                }))
            }));
            t.default = p
        },
        2188: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.StickerStoreList = function (e) {
                const {
                    storeStickerPacks: t,
                    setCurrentPreviewPack: r,
                    openToIndex: c,
                    setOpenToIndex: u
                } = e, s = (0, o.useTheme)(), d = (0, i.useRef)();
                (0, i.useEffect)(() => {
                    var e;
                    null === (e = d.current) || void 0 === e || e.scrollToItem(c, "center")
                }, [d, c]), (0, a.useModalInfo)({
                    title: l.default._("Sticker Store", null, {
                        hk: "2P9iHH"
                    }).toString(),
                    height: 450
                });
                const p = (0, i.useMemo)(() => ({
                    storeStickerPacks: t,
                    setCurrentPreviewPack: r,
                    setOpenToIndex: u
                }), [r, u, t]);
                return (i.default.createElement(n.MinimalScrollBarList, {
                    theme: s,
                    width: 400,
                    height: 450,
                    ref: d,
                    itemData: p,
                    itemCount: t.length,
                    itemSize: 75,
                    overscanCount: 2
                }, f))
            };
            var n = r(241),
                a = r(113),
                o = r(6),
                c = s(r(2189)),
                l = s(r(5)),
                i = function (e) {
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
                return u = function () {
                    return e
                }, e
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = i.default.memo((function (e) {
                const {
                    data: t,
                    index: r,
                    style: n
                } = e, {
                    storeStickerPacks: a,
                    setCurrentPreviewPack: o,
                    setOpenToIndex: l
                } = t, u = a[r];
                return i.default.createElement("div", {
                    style: n
                }, i.default.createElement(c.default, {
                    stickerPack: u,
                    setCurrentPreviewPack: o,
                    setOpenToIndex: l,
                    currentPreviewPackIndex: r
                }))
            }))
        },
        2189: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function ({
                stickerPack: e,
                setCurrentPreviewPack: t,
                setOpenToIndex: r,
                currentPreviewPackIndex: n
            }) {
                const a = (0, o.useTheme)();
                return (c.default.createElement(s, {
                    onActivate: () => {
                        t(e), r(n)
                    },
                    "aria-label": e.name
                }, c.default.createElement(f, {
                    src: e.profileImageUrl
                }), c.default.createElement(d, null, c.default.createElement(l.default, {
                    use: "body-semibold",
                    color: a.semanticColors.textPrimary
                }, e.name), c.default.createElement(l.default, {
                    use: "subtext",
                    color: a.semanticColors.textSecondary,
                    css: {
                        paddingBottom: "10px"
                    }
                }, e.artist))))
            };
            var n = u(r(99)),
                a = function (e) {
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
                }(r(2)),
                o = r(6),
                c = u(r(0)),
                l = u(r(4));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function () {
                    return e
                }, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const s = (0, n.default)(a.FocusableView, {
                    target: "e2prxgw0",
                    label: "StickerCell"
                })({
                    name: "12u5rhg",
                    styles: "flex-direction:row;align-items:center;justify-content:center;padding-bottom:6px;"
                }),
                f = (0, n.default)("img", {
                    target: "e2prxgw1",
                    label: "StickerImageContainer"
                })({
                    name: "fgg5vc",
                    styles: "width:60px;height:60px;object-fit:contain;margin-left:20px;"
                }),
                d = (0, n.default)(a.default, {
                    target: "e2prxgw2",
                    label: "MainContent"
                })({
                    name: "1kkr1hj",
                    styles: "flex:1;margin:0px 15px;line-height:20px;padding-top:6px;padding-bottom:6px;"
                })
        },
        2190: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = d(r(99)),
                a = r(58),
                o = r(113),
                c = d(r(45)),
                l = d(r(13)),
                i = d(r(5)),
                u = r(23),
                s = r(11),
                f = d(r(0));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const p = (0, n.default)("img", {
                    target: "e1600xpw0",
                    label: "PreviewImage"
                })({
                    name: "1e2pi10",
                    styles: "width:80%;object-fit:contain;margin:10px 0px 0px 40px;"
                }),
                k = (0, n.default)(c.default, {
                    target: "e1600xpw1",
                    label: "PreviewContainer"
                })({
                    name: "1rr4qq7",
                    styles: "flex:1;"
                }),
                P = (0, n.default)(a.ModalFooter, {
                    target: "e1600xpw2",
                    label: "FlexModalFooter"
                })({
                    name: "72fd9l",
                    styles: "flex:0;"
                });
            const m = {
                addStickerPack: u.InboxActions.media.addStickerPack
            };
            var v = (0, s.connect)((function (e) {
                return {
                    stickerPacks: (0, u.getStickerPacks)(e)
                }
            }), m)((function (e) {
                const {
                    setCurrentPreviewPack: t,
                    currentPreviewPack: r,
                    addStickerPack: n,
                    stickerPacks: a
                } = e;
                return (0, o.useModalInfo)({
                    title: null == r ? void 0 : r.name,
                    height: 450,
                    onGoBack: () => t(null)
                }), f.default.createElement(l.default, {
                    name: "preview"
                }, f.default.createElement(k, null, f.default.createElement(p, {
                    src: null == r ? void 0 : r.stickersPreviewImageUrl
                })), f.default.createElement(P, {
                    primaryButton: {
                        label: i.default._("Download Pack", null, {
                            hk: "1sDTk8"
                        }).toString(),
                        telemetryName: "download pack button",
                        onClick: () => n(r.packId),
                        disabled: a && null != a[r.name] || void 0
                    }
                }))
            }));
            t.default = v
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/StickerStoreView.bundle.js.map