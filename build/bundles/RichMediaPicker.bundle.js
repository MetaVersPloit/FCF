(window.webpackJsonp = window.webpackJsonp || []).push([
    [101], {
        1865: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.RECENT_STICKERS_CATEGORY = void 0;
            var r = C(n(22)),
                a = n(6),
                l = v(n(2124)),
                u = v(n(636)),
                i = v(n(27)),
                o = n(8),
                c = v(n(5)),
                d = v(n(340)),
                f = v(n(243)),
                s = n(123),
                h = v(n(1)),
                m = v(n(50)),
                p = C(n(0)),
                g = v(n(2)),
                S = v(n(2129)),
                k = v(n(2131)),
                y = v(n(45)),
                b = v(n(242)),
                E = v(n(344)),
                _ = v(n(13));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function w() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return w = function () {
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
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }
            t.RECENT_STICKERS_CATEGORY = "recent";
            const R = (0, h.default)(g.default)({
                    width: "100%",
                    flex: "0 1 355px"
                }),
                O = (0, h.default)(g.default)(e => ({
                    position: "absolute",
                    width: 4,
                    top: 0,
                    bottom: 0,
                    left: "-4px",
                    pointerEvents: "none"
                })),
                M = (0, h.default)(g.default)(e => ({
                    flex: 1,
                    overflow: "hidden",
                    backgroundColor: e.theme.colors.base30
                })),
                I = (0, h.default)(r.default)({
                    position: "absolute",
                    right: 0
                }),
                j = (0, h.default)(g.default)({
                    margin: "4px 0px 6px 0px"
                }),
                P = (0, h.default)(g.default)({
                    height: 22,
                    alignItems: "center",
                    margin: "12px 12px 0px 12px",
                    justifyContent: "center"
                }),
                T = (0, h.default)(g.default)({
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "center",
                    height: 22,
                    width: 276
                });
            var L = p.default.memo(p.default.forwardRef((function ({
                stickerPacks: e,
                recentStickers: t,
                onClose: n,
                onStickerSearch: h,
                onStickerSelect: g,
                focusShortcut: v,
                stickerSearchResults: w,
                stickerQueryStatus: C,
                onGIFSearch: L,
                gifSearchResults: A,
                gifSearchQueryStatus: x,
                trendingGIFs: F,
                onGIFSelect: N,
                onSelectingMediaType: D,
                currentMediaPickerType: G,
                trendingGIFsSearchQueryStatus: W,
                enableStickers: U,
                enableGIFs: K,
                photoPaths: B,
                threadKey: z
            }, H) {
                const q = (0, a.useTheme)(),
                    Q = (0, p.useRef)(null),
                    V = (0, p.useRef)(null),
                    [X, Y] = (0, p.useState)(null),
                    [J, Z] = (0, p.useState)(null);
                (0, p.useEffect)(() => {
                    Y(C ? C.searchStatus : null)
                }, [C]);
                const $ = (0, p.useCallback)(e => {
                        null != e && "" !== e && (V.current && (V.current.scrollTop = 0), "sticker" === G ? h && h(e) : L && L(e))
                    }, [G, L, h]),
                    ee = (0, d.default)(J, 250);
                (0, p.useEffect)(() => {
                    null != ee && $(ee)
                }, [$, ee]);
                const te = (0, p.useMemo)(() => function (e) {
                        const t = [];
                        return e ? (Object.keys(e).forEach(n => {
                            const {
                                thumbnailImage: r,
                                indexInTrayValue: a,
                                packLoadingState: l
                            } = e[n].packDetails;
                            l !== o.StickerPackLoadingState.NotInitiated && t.push({
                                name: n,
                                src: (0, i.default)(r),
                                index: a
                            })
                        }), t.sort((function (e, t) {
                            return e.index - t.index
                        })), t) : []
                    }(e), [e]),
                    ne = te.length > 0 ? te[0].name : "",
                    [re, ae] = (0, f.default)("current_sticker_pack", ne);
                (0, p.useEffect)(() => {
                    te.some(e => e.name === re) || "recent" === re || ae(ne)
                }, [re, ne, te, ae]);
                const le = (0, p.useCallback)(() => {
                        Q.current && Q.current.focus()
                    }, []),
                    ue = (0, p.useCallback)(e => {
                        ae(e), le(), V.current && (V.current.scrollTop = 0)
                    }, [le, ae]),
                    ie = (0, p.useCallback)(e => {
                        le(), g && g(e)
                    }, [le, g]),
                    oe = (0, p.useCallback)(e => {
                        le(), N && N(e)
                    }, [le, N]),
                    ce = null != J && 0 !== J.length,
                    de = !ce && "sticker" === G,
                    fe = v ? q.select({
                        ...v
                    }) : null;
                let se = [{
                    name: c.default._("Stickers", null, {
                        hk: "nKpEN"
                    }).toString(),
                    key: "sticker",
                    ariaLabel: c.default._("Stickers", null, {
                        hk: "4rGtc"
                    }).toString()
                }, {
                    name: c.default._("GIFs", null, {
                        hk: "2Bo3nM"
                    }).toString(),
                    key: "gif",
                    ariaLabel: c.default._("GIFs", null, {
                        hk: "2oh2qQ"
                    }).toString()
                }, {
                    name: c.default._("Photos", null, {
                        hk: "UA71L"
                    }).toString(),
                    key: "photo",
                    ariaLabel: c.default._("Photos", null, {
                        hk: "11RnGc"
                    }).toString()
                }];
                return (p.default.createElement(_.default, {
                    name: "richMediaPicker"
                }, p.default.createElement(R, {
                    onKeyDown: e => {
                        "Escape" === e.key && n()
                    }
                }, p.default.createElement(O, {
                    showRichMediaCategories: de
                }), p.default.createElement(M, null, p.default.createElement(P, null, p.default.createElement(T, null, U && K && p.default.createElement(E.default, {
                    options: se,
                    selectedOptionKey: G,
                    onSelectionChange: e => {
                        D(e), le(), V.current && (V.current.scrollTop = 0)
                    },
                    telemetryName: "rich_media_picker_control_tabs"
                })), p.default.createElement(I, {
                    icon: m.default,
                    size: r.RoundButtonSize.XSmall,
                    "aria-label": c.default._("Close sticker picker", null, {
                        hk: "3hUarj"
                    }).toString(),
                    buttonColor: q.colors.base40,
                    telemetryName: "close_sticker_picker_button",
                    onClick: n
                })), "sticker" === G || "gif" === G ? p.default.createElement(j, null, p.default.createElement(b.default, {
                    query: J || "",
                    onQueryChange: Z,
                    autoFocus: !0,
                    ref: Q,
                    placeholder: fe ? "sticker" === G ? c.default._("Search Sticker ({keyboard shortcut})", [c.default._param("keyboard shortcut", (0, s.toHumanReadableString)((0, s.toKeyEvent)(fe), q))], {
                        hk: "4hWp1N"
                    }).toString() : c.default._("Search GIF ({keyboard shortcut})", [c.default._param("keyboard shortcut", (0, s.toHumanReadableString)((0, s.toKeyEvent)(fe), q))], {
                        hk: "2uakvF"
                    }).toString() : void 0,
                    focusShortcut: v
                })) : null, "sticker" === G ? p.default.createElement(y.default, {
                    innerRef: V
                }, p.default.createElement(k.default, {
                    stickerList: "recent" === re ? t : e && e[re] ? e[re].stickersList : null,
                    onStickerSelect: ie,
                    searchResults: w,
                    isSearchMode: ce,
                    searchStatus: X,
                    packName: re
                })) : "gif" === G ? p.default.createElement(y.default, {
                    innerRef: V
                }, p.default.createElement(l.default, {
                    trendingGIFs: F,
                    onGIFSelect: oe,
                    searchResults: A,
                    isSearchMode: ce,
                    searchStatus: x ? x.searchStatus : null,
                    trendingGIFsSearchStatus: W ? W.searchStatus : null
                })) : p.default.createElement(u.default, {
                    photos: B,
                    threadKey: z
                })), de && p.default.createElement(S.default, {
                    categoryButtonInfo: te,
                    onCategoryChanged: ue,
                    currentCategory: re
                }))))
            })));
            t.default = L
        },
        1917: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadingSearchResultsContent = t.SingleResultShimmer = t.NoResults = t.LOADING_STICKERS_PLACEHOLDER_COUNT = t.RICH_MEDIA_BUTTON_MARGIN = void 0;
            var r = n(100),
                a = c(n(5)),
                l = c(n(1)),
                u = c(n(0)),
                i = c(n(2)),
                o = c(n(4));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.RICH_MEDIA_BUTTON_MARGIN = 6;
            t.LOADING_STICKERS_PLACEHOLDER_COUNT = 40;
            const d = (0, l.default)(i.default)({
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: 244
                }),
                f = (0, l.default)(o.default)(e => ({
                    color: e.theme.colors.base60,
                    margin: "24px auto"
                })),
                s = u.default.memo((function () {
                    return u.default.createElement(d, null, u.default.createElement(f, {
                        use: "body"
                    }, a.default._("No results found", null, {
                        hk: "3Bv3qN"
                    })))
                }));
            t.NoResults = s;
            const h = (0, l.default)(i.default)(e => ({
                    borderRadius: e.borderRadius || void 0,
                    overflow: "hidden",
                    height: e.height,
                    width: e.width || "100%"
                })),
                m = u.default.memo((function ({
                    height: e,
                    width: t,
                    borderRadius: n
                }) {
                    return u.default.createElement(h, {
                        height: e,
                        width: t,
                        borderRadius: n
                    }, u.default.createElement(r.RectangleShimmer, null))
                }));
            t.SingleResultShimmer = m;
            const p = u.default.memo((function ({
                height: e,
                width: t,
                borderRadius: n
            }) {
                return u.default.createElement(u.default.Fragment, null, [...Array(40)].map((r, a) => u.default.createElement(m, {
                    key: a,
                    height: e,
                    width: t,
                    borderRadius: n
                })))
            }));
            t.LoadingSearchResultsContent = p
        },
        2124: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = h(n(2125)),
                a = n(100),
                l = h(n(2126)),
                u = n(8),
                i = h(n(1)),
                o = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                c = h(n(2127)),
                d = n(1917),
                f = h(n(13));

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function () {
                    return e
                }, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const m = (0, i.default)(r.default)({
                    flex: 1,
                    paddingLeft: 12,
                    paddingRight: 8
                }),
                p = o.default.memo((function ({
                    gifList: e,
                    onGIFSelect: t,
                    itemWidth: n
                }) {
                    return null == e ? null : o.default.createElement(o.default.Fragment, null, e.map(e => o.default.createElement(l.default, {
                        gif: e,
                        onGIFSelect: t,
                        key: e.resultIndex,
                        width: n
                    })))
                })),
                g = o.default.memo((function (e) {
                    const t = (0, o.useMemo)(() => Array(40).fill(void 0).map((e, t) => Math.random() + .5), []);
                    return (o.default.createElement(o.default.Fragment, null, t.map((t, n) => o.default.createElement(a.RectangleShimmer, {
                        key: n,
                        width: e.itemWidth,
                        height: t * e.itemWidth
                    }))))
                })),
                S = o.default.memo((function ({
                    gifList: e,
                    searchStatus: t,
                    onGIFSelect: n
                }) {
                    const r = t === u.SearchQueryStatusType.Complete;
                    return r && e && 0 === e.length ? o.default.createElement(d.NoResults, null) : o.default.createElement(c.default, {
                        minColumnWidth: 200,
                        gutter: 6
                    }, t => r ? o.default.createElement(p, {
                        gifList: e,
                        onGIFSelect: n,
                        itemWidth: t
                    }) : o.default.createElement(g, {
                        itemWidth: t
                    }))
                }));
            var k = o.default.memo((function ({
                trendingGIFs: e,
                onGIFSelect: t,
                searchResults: n,
                isSearchMode: r,
                searchStatus: a,
                trendingGIFsSearchStatus: l
            }) {
                return o.default.createElement(f.default, {
                    name: "gifGrid"
                }, o.default.createElement(m, null, r ? o.default.createElement(S, {
                    gifList: n,
                    searchStatus: a,
                    onGIFSelect: t
                }) : o.default.createElement(S, {
                    gifList: e,
                    searchStatus: l,
                    onGIFSelect: t
                })))
            }));
            t.default = k
        },
        2125: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return a.default.createElement(l.FocusZoneImpl, {
                    direction: "vertical",
                    className: e.className,
                    getNextElement: o,
                    getPrevElement: c
                }, e.children)
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                    default: r
                },
                l = n(33),
                u = n(121);

            function i(e) {
                const t = [...e.querySelectorAll(`[${u.IS_FOCUSABLE_ATTR}='true']`)].map(e => {
                    const t = e.getBoundingClientRect();
                    return {
                        node: e,
                        top: t.top,
                        left: t.left
                    }
                });
                return t.sort((e, t) => e.left - t.left || e.top - t.top), t
            }

            function o(e, t) {
                const n = i(e);
                if (t) {
                    const e = t.getBoundingClientRect();
                    let r = n.filter(t => t.top > e.top && t.left === e.left);
                    return r.length > 0 ? r[0].node : (r = n.filter(t => t.left > e.left), r.length > 0 ? r[0].node : n[0].node)
                }
                return n[0].node
            }

            function c(e, t) {
                const n = i(e);
                if (t) {
                    const e = t.getBoundingClientRect();
                    let r = n.filter(t => t.top < e.top && t.left === e.left);
                    return r.length > 0 ? r[r.length - 1].node : (r = n.filter(t => t.left < e.left), r.length > 0 ? r[r.length - 1].node : n[n.length - 1].node)
                }
                return n[0].node
            }
        },
        2126: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function ({
                gif: e,
                width: t,
                onGIFSelect: n
            }) {
                const [r, a] = (0, u.useState)(!1), l = e.gifHeight / e.gifWidth * t, i = (0, u.useCallback)(() => {
                    n && n(e)
                }, [n, e]);
                return u.default.createElement(d, {
                    telemetryName: "gif_" + e.resultId,
                    disabled: !r,
                    isLoaded: r,
                    onActivate: i,
                    style: {
                        height: l,
                        width: t
                    }
                }, u.default.createElement(c, {
                    src: e.playableUrl,
                    isLoaded: r,
                    onLoad: () => a(!0)
                }))
            };
            var r, a = n(100),
                l = (r = n(1)) && r.__esModule ? r : {
                    default: r
                },
                u = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = o();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                i = n(2);

            function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function () {
                    return e
                }, e
            }
            const c = l.default.img(e => ({
                    position: "absolute",
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    display: e.isLoaded ? void 0 : "none"
                })),
                d = (0, l.default)(i.FocusableView)(e => ({
                    position: "relative",
                    backgroundColor: e.isLoaded ? void 0 : e.theme.select({
                        light: e.theme.colors.flatBase40,
                        dark: e.theme.colors.flatBase60
                    }),
                    ...e.isLoaded ? void 0 : (0, a.ShimmerAnimationStyles)(e)
                }))
        },
        2127: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    children: t,
                    gutter: n,
                    minColumnWidth: i,
                    ...o
                } = e, d = (0, l.default)("bricks"), f = (0, u.useRef)(null), s = (0, u.useRef)(null), h = (0, u.useRef)(), [m, p] = (0, u.useState)(null), g = (0, u.useCallback)(() => {
                    if (f.current) {
                        const {
                            numColumns: e,
                            columnWidth: t
                        } = function (e, t) {
                            const n = Math.floor(e / 200);
                            return {
                                numColumns: n,
                                columnWidth: e / n - 6
                            }
                        }(f.current.clientWidth);
                        p({
                            numColumns: e,
                            columnWidth: t,
                            containerWidth: f.current.clientWidth
                        })
                    }
                }, [i]), S = (0, u.useCallback)((0, r.throttle)(() => {
                    g()
                }, 100), []);
                return (0, u.useEffect)(() => {
                    m || g()
                }, [m, g]), (0, u.useEffect)(() => {
                    if (m && s.current) {
                        const e = (0, a.default)({
                            container: s.current,
                            packed: "data-packed",
                            sizes: [{
                                columns: m.numColumns,
                                gutter: n
                            }],
                            position: !0
                        });
                        h.current = e, window.requestAnimationFrame(() => e.pack())
                    }
                }, [d, m, n]), (0, u.useEffect)(() => {
                    if (f.current) {
                        new window.ResizeObserver(() => {
                            S()
                        }).observe(f.current)
                    }
                }, [S]), (0, u.useEffect)(() => {
                    h.current && h.current.pack()
                }), u.default.createElement("div", c({
                    style: {
                        width: "100%",
                        ...o.style || {}
                    },
                    ref: f
                }, o), u.default.createElement("div", {
                    id: d,
                    style: {
                        width: "100%"
                    },
                    ref: s
                }, m ? t(m.columnWidth) : null))
            };
            var r = n(117),
                a = o(n(2128)),
                l = o(n(591)),
                u = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function () {
                    return e
                }, e
            }

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return (c = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
        },
        2128: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                a = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = Object.create(null);

                    function n(e, n) {
                        return t[e] = t[e] || [], t[e].push(n), this
                    }

                    function a(e, t) {
                        return t._once = !0, n(e, t), this
                    }

                    function l(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return n ? t[e].splice(t[e].indexOf(n), 1) : delete t[e], this
                    }

                    function u(e) {
                        for (var n = this, r = arguments.length, a = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) a[u - 1] = arguments[u];
                        var i = t[e] && t[e].slice();
                        return i && i.forEach((function (t) {
                            t._once && l(e, t), t.apply(n, a)
                        })), this
                    }
                    return r({}, e, {
                        on: n,
                        once: a,
                        off: l,
                        emit: u
                    })
                };
            t.default = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = void 0,
                    n = void 0,
                    r = void 0,
                    l = void 0,
                    u = void 0,
                    i = void 0,
                    o = void 0,
                    c = void 0,
                    d = void 0,
                    f = void 0,
                    s = void 0,
                    h = void 0,
                    m = void 0,
                    p = 0 === e.packed.indexOf("data-") ? e.packed : "data-" + e.packed,
                    g = e.sizes.slice().reverse(),
                    S = !1 !== e.position,
                    k = e.container.nodeType ? e.container : document.querySelector(e.container),
                    y = {
                        all: function () {
                            return w(k.children)
                        },
                        new: function () {
                            return w(k.children).filter((function (e) {
                                return !e.hasAttribute("" + p)
                            }))
                        }
                    },
                    b = [O, M, I],
                    E = [j, P, T, L],
                    _ = a({
                        pack: F,
                        update: N,
                        resize: D
                    });
                return _;

                function v(e) {
                    e.forEach((function (e) {
                        return e()
                    }))
                }

                function w(e) {
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
                    return Array.prototype.slice.call(e)
                }

                function C(e) {
                    return Array.apply(null, Array(e)).map((function () {
                        return 0
                    }))
                }

                function R() {
                    return g.map((function (e) {
                        return e.mq && window.matchMedia("(min-width: " + e.mq + ")").matches
                    })).indexOf(!0)
                }

                function O() {
                    r = R()
                }

                function M() {
                    l = -1 === r ? g[g.length - 1] : g[r]
                }

                function I() {
                    i = C(l.columns)
                }

                function j() {
                    s = y[t ? "new" : "all"]()
                }

                function P() {
                    0 !== s.length && (h = s.map((function (e) {
                        return e.clientWidth
                    })), m = s.map((function (e) {
                        return e.clientHeight
                    })))
                }

                function T() {
                    s.forEach((function (e, t) {
                        u = i.indexOf(Math.min.apply(Math, i)), e.style.position = "absolute", o = i[u] + "px", c = u * h[t] + u * l.gutter + "px", S ? (e.style.top = o, e.style.left = c) : e.style.transform = "translate3d(" + c + ", " + o + ", 0)", e.setAttribute(p, ""), d = h[t], f = m[t], d && f && (i[u] += f + l.gutter)
                    }))
                }

                function L() {
                    k.style.position = "relative", k.style.width = l.columns * d + (l.columns - 1) * l.gutter + "px", k.style.height = Math.max.apply(Math, i) - l.gutter + "px"
                }

                function A() {
                    n || (window.requestAnimationFrame(x), n = !0)
                }

                function x() {
                    r !== R() && (F(), _.emit("resize", l)), n = !1
                }

                function F() {
                    return t = !1, v(b.concat(E)), _.emit("pack")
                }

                function N() {
                    return t = !0, v(E), _.emit("update")
                }

                function D() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = e ? "addEventListener" : "removeEventListener";
                    return window[t]("resize", A), _
                }
            }
        },
        2129: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = E(n(2)),
                a = E(n(75)),
                l = b(n(22)),
                u = n(35),
                i = E(n(73)),
                o = n(1865),
                c = E(n(5)),
                d = n(28),
                f = E(n(1)),
                s = E(n(352)),
                h = E(n(2130)),
                m = n(11),
                p = b(n(0)),
                g = E(n(33)),
                S = E(n(45)),
                k = E(n(13));

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function () {
                    return e
                }, e
            }

            function b(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = y();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const _ = (0, f.default)(g.default)(e => ({
                    flexDirection: "row",
                    alignItems: "center",
                    height: 56
                })),
                v = (0, f.default)(r.default)({
                    flexDirection: "row"
                }),
                w = (0, f.default)(r.default)(e => ({
                    borderRadius: 12,
                    height: 40,
                    width: 48,
                    backgroundColor: e.isSelected ? e.theme.select({
                        light: e.theme.colors.base40,
                        dark: e.theme.colors.base50
                    }) : "transparent",
                    margin: "0 5px",
                    alignItems: "center",
                    justifyContent: "center"
                })),
                C = (0, f.default)(a.default)({
                    backgroundColor: "transparent"
                }),
                R = f.default.img({
                    width: 28,
                    height: 28,
                    margin: 0,
                    objectFit: "contain"
                }),
                O = (0, f.default)(S.default)({
                    flex: 1
                }),
                M = (0, f.default)(l.default)(e => ({
                    height: "24px",
                    width: "24px",
                    backgroundColor: e.theme.select({
                        light: e.theme.colors.base50,
                        dark: e.theme.colors.base70
                    }),
                    margin: "16px",
                    flex: 0
                })),
                I = p.default.memo((function ({
                    src: e,
                    onClick: t,
                    isSelected: n,
                    categoryName: r
                }) {
                    const a = (0, p.useCallback)(() => {
                        t(r)
                    }, [r, t]);
                    return (p.default.createElement(w, {
                        isSelected: n
                    }, p.default.createElement(C, {
                        onClick: a,
                        telemetryName: r,
                        silentPressedState: !0,
                        "aria-label": c.default._("Sticker Pack: {name}", [c.default._param("name", r)], {
                            hk: "4CNAGc"
                        }).toString()
                    }, p.default.createElement(R, {
                        src: e
                    }))))
                })),
                j = p.default.memo((function (e) {
                    const {
                        categoryButtonInfo: t,
                        onCategoryChanged: n,
                        currentCategory: r,
                        showModal: a
                    } = e, d = (0, p.useCallback)(e => {
                        n(e)
                    }, [n]), {
                        windowKey: f
                    } = (0, u.useWindowContext)();
                    return p.default.createElement(k.default, {
                        name: "rich_media_categories"
                    }, p.default.createElement(v, null, p.default.createElement(O, null, p.default.createElement(_, {
                        direction: "horizontal"
                    }, p.default.createElement(i.default, {
                        key: "Recent",
                        tooltipProps: {
                            children: c.default._("Recent", null, {
                                hk: "3M4LZP"
                            }).toString()
                        },
                        delay: 1e3
                    }, p.default.createElement(w, {
                        isSelected: r === o.RECENT_STICKERS_CATEGORY
                    }, p.default.createElement(l.default, {
                        "aria-label": c.default._("Recent", null, {
                            hk: "19VPOS"
                        }).toString(),
                        size: l.RoundButtonSize.XXLarge,
                        use: l.RoundButtonUse.Transparent,
                        silentPressedState: !0,
                        telemetryName: "Recent-Stickers",
                        icon: s.default,
                        onClick: () => d(o.RECENT_STICKERS_CATEGORY)
                    }))), t.map(e => null == e.src ? null : p.default.createElement(i.default, {
                        key: e.name,
                        tooltipProps: {
                            children: c.default._("{Sticker pack title}", [c.default._param("Sticker pack title", e.name)], {
                                hk: "R3I3v"
                            }).toString()
                        },
                        delay: 1e3
                    }, p.default.createElement(I, {
                        src: e.src,
                        onClick: d,
                        isSelected: e.name === r,
                        categoryName: e.name
                    }))))), p.default.createElement(M, {
                        "aria-label": c.default._("Open Sticker Store", null, {
                            hk: "3LD84e"
                        }).toString(),
                        telemetryName: "sticker-store",
                        icon: h.default,
                        iconColor: "black",
                        use: l.RoundButtonUse.Transparent,
                        onClick: () => {
                            a({
                                type: "StickerStoreView"
                            }, f)
                        }
                    })))
                })),
                P = {
                    showModal: d.AppContextActions.showModal
                };
            var T = (0, m.connect)(null, P)(j);
            t.default = T
        },
        2130: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M12.164 14.88A3 3 0 016.5 13.5c0-1.03.967-3.294 1.699-4.858C8.674 7.625 9.705 7 10.828 7h14.345c1.122 0 2.153.625 2.628 1.642.732 1.564 1.699 3.827 1.699 4.858a3 3 0 01-5.664 1.38c-.066-.126-.276-.126-.342 0a3 3 0 01-5.324.008c-.066-.126-.274-.126-.34 0a3 3 0 01-5.324-.008c-.066-.126-.276-.126-.342 0zM12.479 17.714a.267.267 0 00-.288 0 4.976 4.976 0 01-3.086.77c-.315-.024-.605.211-.605.528v7.984a2 2 0 002 2h4a1 1 0 001-1v-5a1 1 0 011-1h3a1 1 0 011 1v5a1 1 0 001 1h4a2 2 0 002-2v-7.984c0-.317-.29-.552-.605-.527a4.976 4.976 0 01-3.086-.77.267.267 0 00-.288 0c-.776.496-1.7.785-2.691.785-.99 0-1.911-.288-2.687-.783a.267.267 0 00-.286 0 4.975 4.975 0 01-2.687.783 4.976 4.976 0 01-2.691-.786z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        2131: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = f(n(2132)),
                a = n(8),
                l = f(n(5)),
                u = f(n(1)),
                i = f(n(0)),
                o = f(n(33)),
                c = n(1917),
                d = f(n(13));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const s = (0, u.default)(o.default)({
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                    gridTemplateRows: "repeat(auto-fill, 120px)",
                    gridColumnGap: 2 * c.RICH_MEDIA_BUTTON_MARGIN,
                    gridRowGap: 2 * c.RICH_MEDIA_BUTTON_MARGIN,
                    paddingLeft: 12,
                    paddingRight: 12
                }),
                h = i.default.memo((function ({
                    stickerList: e,
                    onStickerSelect: t,
                    packName: n
                }) {
                    return null == e ? null : i.default.createElement(i.default.Fragment, null, e.map(e => {
                        const u = e.accessibilityLabel.length > 0 ? l.default._("{Sticker accessbility label}", [l.default._param("Sticker accessbility label", e.accessibilityLabel)], {
                            hk: "1Htsqo"
                        }).toString() : l.default._("Sticker from", null, {
                            hk: "3hHjEX"
                        }).toString() + " " + l.default._("{Sticker pack name}", [l.default._param("Sticker pack name", n)], {
                            hk: "2DVEHU"
                        }).toString() + " " + l.default._("sticker pack", null, {
                            hk: "13E62P"
                        }).toString();
                        return (i.default.createElement(r.default, {
                            sticker: e,
                            height: a.STICKER_DEFAULT_DIM,
                            width: a.STICKER_DEFAULT_DIM,
                            onStickerSelect: () => t && t(e),
                            accessibilityLabel: u,
                            key: e.stickerId
                        }))
                    }))
                })),
                m = i.default.memo((function ({
                    stickerList: e,
                    onStickerSelect: t
                }) {
                    return null == e ? null : i.default.createElement(i.default.Fragment, null, e.map(e => i.default.createElement(r.default, {
                        sticker: e,
                        height: a.STICKER_DEFAULT_DIM,
                        width: a.STICKER_DEFAULT_DIM,
                        onStickerSelect: () => t && t(e),
                        accessibilityLabel: l.default._("Sticker search result", null, {
                            hk: "36QuJZ"
                        }).toString(),
                        key: e.stickerId
                    })))
                }));
            var p = i.default.memo(i.default.forwardRef((function ({
                stickerList: e,
                onStickerSelect: t,
                searchResults: n,
                searchStatus: r,
                isSearchMode: l,
                packName: u
            }, o) {
                const f = l && r && r === a.SearchQueryStatusType.Complete && n && 0 === n.length;
                return i.default.createElement(d.default, {
                    name: "stickerGrid"
                }, f ? i.default.createElement(c.NoResults, null) : i.default.createElement(s, {
                    direction: "vertical"
                }, l ? r && r === a.SearchQueryStatusType.Complete && n && n.length > 0 ? i.default.createElement(m, {
                    stickerList: n,
                    onStickerSelect: t
                }) : i.default.createElement(c.LoadingSearchResultsContent, {
                    height: a.STICKER_DEFAULT_DIM,
                    width: a.STICKER_DEFAULT_DIM,
                    borderRadius: 12
                }) : i.default.createElement(h, {
                    stickerList: e,
                    onStickerSelect: t,
                    packName: u
                })))
            })));
            t.default = p
        },
        2132: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    height: t,
                    width: n
                } = e;
                return (c.default.createElement(c.default.Suspense, {
                    fallback: c.default.createElement(a.SingleResultShimmer, {
                        height: t,
                        width: n,
                        borderRadius: 12
                    })
                }, c.default.createElement(p, e)))
            };
            var r = f(n(75)),
                a = n(1917),
                l = n(642),
                u = n(8),
                i = f(n(189)),
                o = f(n(1)),
                c = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = d();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0));

            function d() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return d = function () {
                    return e
                }, e
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const s = (0, o.default)(r.default)(e => ({
                    borderRadius: 12,
                    height: e.height,
                    width: e.width,
                    backgroundColor: "transparent",
                    alignItems: "center",
                    justifyContent: "center",
                    justifySelf: "center",
                    ":active": {
                        backgroundColor: e.theme.select({
                            light: e.theme.colors.base40,
                            dark: e.theme.colors.base50
                        })
                    }
                })),
                h = o.default.img({
                    width: u.STICKER_DEFAULT_DIM,
                    height: u.STICKER_DEFAULT_DIM,
                    objectFit: "contain",
                    padding: 3
                }),
                m = c.default.memo((function ({
                    src: e,
                    onClick: t,
                    telemetryName: n,
                    animatedSrc: r,
                    height: a,
                    width: l,
                    accessibilityLabel: u
                }) {
                    const [i, o] = (0, c.useState)(!1);
                    return (c.default.createElement(s, {
                        onClick: () => t(),
                        onMouseEnter: () => o(!0),
                        onMouseLeave: () => o(!1),
                        telemetryName: n,
                        height: a,
                        width: l,
                        "aria-label": u
                    }, c.default.createElement(h, {
                        src: i && r ? r : e
                    })))
                }));

            function p({
                sticker: e,
                height: t,
                width: n,
                onStickerSelect: r,
                accessibilityLabel: a
            }) {
                const u = (0, i.default)({
                    url: (0, l.getStickerStaticUrl)(e),
                    mediaType: "image"
                });
                return u ? c.default.createElement(m, {
                    src: u,
                    onClick: () => r && r(e),
                    telemetryName: "sticker_" + e.stickerId,
                    animatedSrc: (0, l.getStickerAnimatedUrl)(e),
                    accessibilityLabel: a,
                    height: t,
                    width: n
                }) : null
            }
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/RichMediaPicker.bundle.js.map