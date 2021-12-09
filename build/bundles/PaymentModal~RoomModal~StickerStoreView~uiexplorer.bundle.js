(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        113: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    children: t,
                    width: n,
                    onClose: a,
                    hideCloseButton: u
                } = e, [i, d] = (0, o.useState)({
                    title: null,
                    onGoBack: null,
                    height: null
                }), c = (0, o.useCallback)(e => {
                    d(e)
                }, []), f = (0, o.useMemo)(() => ({
                    setModalInfo: c
                }), [c]), {
                    title: s,
                    height: p,
                    onGoBack: h
                } = i;
                return o.default.createElement(r.Provider, {
                    value: f
                }, o.default.createElement(l.Modal, {
                    modalType: p ? "standard" : "autosize",
                    "aria-label": s || "",
                    onHideModal: a,
                    height: p || void 0,
                    width: n
                }, (s || h) && o.default.createElement(l.ModalHeader, {
                    title: s || "",
                    onBack: h || void 0,
                    onClose: a,
                    hideCloseButton: u
                }), t))
            }, t.useModalInfo = function (e) {
                const {
                    setModalInfo: t
                } = (0, o.useContext)(r), n = (null == e ? void 0 : e.title) || null, l = (null == e ? void 0 : e.onGoBack) || null, a = (null == e ? void 0 : e.height) || null;
                (0, o.useEffect)(() => {
                    t({
                        title: n,
                        onGoBack: l,
                        height: a
                    })
                }, [n, l, a, t])
            };
            var o = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = a();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var l in e)
                        if (Object.prototype.hasOwnProperty.call(e, l)) {
                            var r = o ? Object.getOwnPropertyDescriptor(e, l) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, l, r) : n[l] = e[l]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                l = n(58);

            function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function () {
                    return e
                }, e
            }
            const r = o.default.createContext({
                setModalInfo: () => {}
            })
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/PaymentModal~RoomModal~StickerStoreView~uiexplorer.bundle.js.map