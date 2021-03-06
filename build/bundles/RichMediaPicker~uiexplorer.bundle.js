(window.webpackJsonp = window.webpackJsonp || []).push([
    [33], {
        1627: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = r(241),
                o = r(6),
                a = d(r(1628)),
                l = d(r(190)),
                u = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = i();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function () {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = u.default.memo((function (e) {
                const {
                    photos: t,
                    height: r,
                    width: i,
                    threadKey: d,
                    loadMorePhotos: c
                } = e, f = (0, o.useTheme)(), s = (0, l.default)(d, !1), h = (0, u.useRef)(), p = (0, u.useMemo)(() => (0, n.itemsPerRow)(i), [i]), m = (0, u.useMemo)(() => {
                    const e = [];
                    if (t)
                        for (let r = 0; r < t.length; r += p) e.push({
                            photos: t.slice(r, r + p)
                        });
                    return {
                        chunks: e,
                        width: i,
                        threadKey: d
                    }
                }, [t, i, d, p]), y = m.chunks.length, b = (0, u.useCallback)(({
                    visibleStopIndex: e
                }) => {
                    e !== y - 1 || s.current || c()
                }, [y, s, c]);
                return u.default.createElement(n.MinimalScrollBarList, {
                    theme: f,
                    ref: h,
                    width: i,
                    height: r,
                    itemData: m,
                    itemCount: y,
                    itemSize: i / p,
                    onItemsRendered: b,
                    overscanCount: 2
                }, a.default)
            }));
            t.default = c
        },
        1628: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = a(r(1629)),
                o = a(r(0));

            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var l = o.default.memo((function (e) {
                const {
                    data: t,
                    index: r,
                    style: a
                } = e, {
                    chunks: l,
                    width: u,
                    threadKey: i
                } = t, d = l[r];
                return o.default.createElement("div", {
                    style: a
                }, d.photos.map(e => o.default.createElement(n.default, {
                    photo: e,
                    key: e,
                    width: u,
                    threadKey: i
                })))
            }));
            t.default = l
        },
        1629: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = p(r(99)),
                o = p(r(2)),
                a = r(241),
                l = r(6),
                u = p(r(540)),
                i = p(r(5)),
                d = r(23),
                c = r(41),
                f = r(11),
                s = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = h();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(0));

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function () {
                    return e
                }, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const m = (0, n.default)("div", {
                    target: "e1luyknc0",
                    label: "GridCell"
                })(e => ({
                    display: "inline-block",
                    position: "relative",
                    width: `calc(100% / ${(0,a.itemsPerRow)(e.gridWidth)})`,
                    ":after": {
                        paddingBottom: "100%",
                        display: "block",
                        content: '""'
                    },
                    img: {
                        objectFit: "cover",
                        objectPosition: "center",
                        height: "100%",
                        width: "100%"
                    }
                }), ""),
                y = (0, n.default)(o.default, {
                    target: "e1luyknc1",
                    label: "CheckMaskElement"
                })(e => ({
                    height: 14,
                    width: 14,
                    WebkitMask: `url(${e.url})`,
                    WebkitMaskPositionX: "right",
                    position: "absolute",
                    right: 15,
                    top: 15,
                    backgroundColor: e.theme.semanticColors.textPrimary
                }), ""),
                b = s.default.memo((function (e) {
                    const {
                        photo: t,
                        width: r,
                        selectedPhotos: n,
                        addSelectedPhoto: o,
                        threadKey: d
                    } = e, f = (0, s.useCallback)(() => {
                        o(d, t)
                    }, [t, o, d]), {
                        threadTheme: h
                    } = (0, c.useThreadTheme)(), p = (0, l.useTheme)();
                    return s.default.createElement(m, {
                        gridWidth: r
                    }, s.default.createElement(a.ThumbnailContainer, null, s.default.createElement(a.ImageView, {
                        src: t,
                        telemetryName: "photoGalleryImage",
                        onActivate: f,
                        "aria-label": i.default._("Photo", null, {
                            hk: "1RgEbw"
                        }),
                        opacity: (null == n ? void 0 : n.includes(t)) ? .4 : 1
                    })), (null == n ? void 0 : n.includes(t)) && s.default.createElement(y, {
                        url: u.default,
                        threadTheme: h,
                        theme: p
                    }))
                }));
            const v = {
                addSelectedPhoto: d.InboxActions.media.addSelectedMediaPickerPhoto
            };
            var g = (0, f.connect)((function (e, t) {
                return {
                    selectedPhotos: (0, d.getSelectedMediaPickerPhotos)(e, t.threadKey)
                }
            }), v)(b);
            t.default = g
        },
        636: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = b(r(99)),
                o = b(r(2)),
                a = b(r(33)),
                l = y(r(82)),
                u = r(241),
                i = b(r(1627)),
                d = b(r(5)),
                c = r(23),
                f = r(11),
                s = b(r(367)),
                h = y(r(0)),
                p = b(r(4));

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function () {
                    return e
                }, e
            }

            function y(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = e[o]
                    } return r.default = e, t && t.set(e, r), r
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const v = (0, n.default)(o.default, {
                target: "euutmxv0",
                label: "GridView"
            })({
                name: "1s78loa",
                styles: "width:100%;height:100%;padding:0px 8px;margin-top:8px;padding-bottom:44px;"
            });
            const g = {
                loadMoreMediaPickerPhotos: c.InboxActions.media.loadMoreMediaPickerPhotos
            };
            var P = (0, f.connect)(null, g)((function (e) {
                const {
                    photos: t,
                    threadKey: r,
                    loadMoreMediaPickerPhotos: n
                } = e, o = (0, h.useCallback)(() => {
                    n(r)
                }, [n, r]);
                return h.default.createElement(h.default.Fragment, null, t ? 0 === (null == t ? void 0 : t.length) ? h.default.createElement(u.ContentContainer, null, h.default.createElement(p.default, {
                    use: "title"
                }, d.default._("No photos yet.", null, {
                    hk: "1dU8Or"
                }))) : h.default.createElement(v, null, h.default.createElement(a.default, {
                    css: {
                        flex: 1
                    }
                }, h.default.createElement(s.default, null, ({
                    height: e,
                    width: n
                }) => h.default.createElement(i.default, {
                    height: e,
                    width: n,
                    photos: t,
                    threadKey: r,
                    loadMorePhotos: o
                })))) : h.default.createElement(l.default, {
                    size: l.SpinnerSize.Large
                }))
            }));
            t.default = P
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/RichMediaPicker~uiexplorer.bundle.js.map