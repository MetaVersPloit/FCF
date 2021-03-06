(window.webpackJsonp = window.webpackJsonp || []).push([
    [32], {
        635: function (e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = M(a(16)),
                n = v(a(33)),
                r = v(a(541)),
                o = v(a(339)),
                i = v(a(45)),
                u = a(6),
                c = v(a(27)),
                d = a(87),
                f = v(a(5)),
                s = v(a(1)),
                p = v(a(2)),
                m = a(28),
                g = a(11),
                h = M(a(0)),
                y = a(58),
                b = v(a(4));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function C() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return C = function () {
                    return e
                }, e
            }

            function M(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = C();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } return a.default = e, t && t.set(e, a), a
            }
            const k = (0, s.default)(n.default)({
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    height: 50,
                    paddingRight: 12
                }),
                P = (0, s.default)(l.default)({
                    borderRadius: "0%",
                    flex: 1
                }),
                _ = (0, s.default)(i.default)(e => ({
                    height: e.height
                }));
            const w = {
                clearModal: m.AppContextActions.clearModal
            };
            var S = (0, g.connect)(null, w)((function ({
                reactions: e,
                onClose: t,
                clearModal: a
            }) {
                const n = (0, h.useCallback)(() => {
                        t ? t() : a()
                    }, [a, t]),
                    i = f.default._("Message Reactions", null, {
                        hk: "CxGbX"
                    }).toString(),
                    [s, m] = (0, h.useState)(""),
                    g = (0, u.useTheme)(),
                    v = (0, h.useMemo)(() => null != e ? (0, d.createMapWithArrayValues)(e, e => e.reaction) : null, [e]);
                if (!e || !v) return null;
                let C = e;
                return "" != s && (C = v[s]), e ? h.default.createElement(y.Modal, {
                    width: 400,
                    height: 450,
                    onHideModal: n,
                    "aria-label": i
                }, h.default.createElement(y.ModalHeader, {
                    title: i,
                    onClose: n
                }), h.default.createElement(y.ModalContent, null, h.default.createElement(_, {
                    key: "reactions",
                    height: 366
                }, C.map(e => {
                    var t;
                    const a = (null === (t = r.default[e.reaction]) || void 0 === t ? void 0 : t.modal) || h.default.createElement(p.default, {
                        css: {
                            paddingTop: 4
                        }
                    }, h.default.createElement(b.default, {
                        use: "caption-xsmall-bold"
                    }, e.reaction));
                    return (h.default.createElement(o.default, {
                        profilePictureUrl: (0, c.default)(e.actorProfilePicture),
                        participantName: e.actorName,
                        key: e.actorId,
                        profilePhotoSize: "medium",
                        clipPathIcon: a
                    }))
                })), h.default.createElement(_, {
                    height: 55
                }, h.default.createElement(k, {
                    direction: "horizontal"
                }, h.default.createElement(P, {
                    key: "reaction-all",
                    "aria-label": f.default._("Message Reaction Category", null, {
                        hk: "1KdPne"
                    }).toString(),
                    caption: f.default._("All {number of reactions}", [f.default._param("number of reactions", e.length)], {
                        hk: "1gDrth"
                    }),
                    buttonColor: "transparent",
                    size: l.RectangleButtonSize.Small,
                    textColor: "" !== s ? g.semanticColors.textSecondary : void 0,
                    telemetryName: "reaction_modal_category",
                    silentPressedState: !0,
                    onClick: () => {
                        m("")
                    }
                }), Object.keys(v).map(e => {
                    var t;
                    return (h.default.createElement(P, {
                        key: e,
                        "aria-label": f.default._("Message Reaction Category", null, {
                            hk: "1KdPne"
                        }).toString(),
                        icon: null === (t = r.default[e]) || void 0 === t ? void 0 : t.category,
                        caption: `${r.default[e]?"":e}${v[e].length}`,
                        size: l.RectangleButtonSize.Small,
                        buttonColor: "transparent",
                        textColor: s !== e ? g.semanticColors.textSecondary : void 0,
                        telemetryName: "reaction_modal_category",
                        silentPressedState: !0,
                        onClick: () => {
                            m(e)
                        }
                    }))
                }))))) : null
            }));
            t.default = S
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/ReactionsModal.bundle.js.map