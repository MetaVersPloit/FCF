(window.webpackJsonp = window.webpackJsonp || []).push([
    [34], {
        1825: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    participants: t
                } = e, r = Math.min(t.length, 4), o = f[r];
                return n.default.createElement(i, null, t.slice(0, r).map((e, t) => n.default.createElement(c, {
                    style: o ? o[t] : void 0,
                    key: t
                }, n.default.createElement(u, {
                    imageUrl: e || ""
                }))))
            };
            var o = l(r(1)),
                n = l(r(0)),
                a = l(r(2));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const i = (0, o.default)(a.default)({
                borderRadius: "100%",
                overflow: "hidden",
                height: 50,
                width: 50,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gridAutoFlow: "column",
                gridColumnGap: 2,
                gridRowGap: 2
            });
            const u = (0, o.default)(a.default)(e => {
                    return {
                        backgroundImage: e.imageUrl ? (t = e.imageUrl, "url('" + t.replace(/[\ud800-\udfff].|[^-a-zA-Z0-9./_?]/g, e => "\\" + e.codePointAt(0).toString(16) + " ") + "')") : void 0,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        position: "relative",
                        overflow: "hidden",
                        height: "100%",
                        width: "100%"
                    };
                    var t
                }),
                c = (0, o.default)(a.default)({
                    height: "100%",
                    width: "100%"
                }),
                f = {
                    1: {
                        0: {
                            gridColumn: "1/3",
                            gridRow: "1/3"
                        }
                    },
                    2: {
                        0: {
                            gridRow: "1/3"
                        },
                        1: {
                            gridRow: "1/3"
                        }
                    },
                    3: {
                        2: {
                            gridRow: "1/3"
                        }
                    }
                }
        },
        578: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    contactId: t,
                    profilePicture: r,
                    name: a,
                    onClick: u
                } = e;
                return (i.default.createElement(d, null, i.default.createElement(m, {
                    role: "button",
                    "aria-label": a,
                    telemetryName: "active_now_pog",
                    onActivate: () => u && u(t, a, r)
                }, i.default.createElement(l.default, {
                    size: "large",
                    presence: n.PresenceType.Active,
                    profilePictureUrl: (0, o.default)(r)
                })), i.default.createElement(c.default, {
                    use: "caption",
                    wrapText: !0,
                    textAlign: "center",
                    numberOfLines: 2
                }, a)))
            };
            var o = s(r(27)),
                n = r(8),
                a = s(r(1)),
                l = s(r(38)),
                i = s(r(0)),
                u = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, n) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(2)),
                c = s(r(4));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function () {
                    return e
                }, e
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = (0, a.default)(u.default)({
                    height: "100%",
                    width: "100%",
                    alignItems: "center"
                }),
                m = (0, a.default)(u.FocusableView)({
                    position: "relative",
                    height: 50,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    marginBottom: 6
                })
        },
        579: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    participants: t,
                    name: r,
                    onClick: a,
                    startTimestampMs: u,
                    badgeCount: d
                } = e, p = (0, n.useTheme)(), h = (0, l.default)(Date.now()).valueOf();
                let y;
                if (u && u > h) {
                    const e = (0, c.computeMessageListTimestamp)(u);
                    y = s.default.createElement(O, null, s.default.createElement(m.default, {
                        use: e.length < 5 ? "caption-small-bold" : "caption-xsmall-bold",
                        numberOfLines: 1,
                        color: p.colors.green
                    }, e))
                } else d > 0 && (y = s.default.createElement(v, null, s.default.createElement(R, null, s.default.createElement(f.default, null)), s.default.createElement(m.default, {
                    use: "caption-small-bold",
                    numberOfLines: 1,
                    color: p.semanticColors.textWhite
                }, d)));
                return (s.default.createElement(g, null, s.default.createElement(b, {
                    role: "button",
                    "aria-label": i.default._("Join a room", null, {
                        hk: "4pQHK3"
                    }).toString(),
                    telemetryName: "join_room_pog",
                    onActivate: () => a && a()
                }, s.default.createElement(o.default, {
                    participants: t
                }), s.default.createElement(w, null, y)), r && s.default.createElement(m.default, {
                    use: "caption",
                    wrapText: !0,
                    textAlign: "center",
                    numberOfLines: 2
                }, r)))
            };
            var o = h(r(1825)),
                n = r(6),
                a = r(650),
                l = h(r(185)),
                i = h(r(5)),
                u = h(r(1)),
                c = r(115),
                f = h(r(78)),
                s = h(r(0)),
                d = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, n) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(2)),
                m = h(r(4));

            function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function () {
                    return e
                }, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const g = (0, u.default)(d.default)({
                    height: "100%",
                    width: a.POG_WIDTH,
                    alignItems: "center",
                    marginRight: 12
                }),
                b = (0, u.default)(d.FocusableView)({
                    position: "relative",
                    height: 50,
                    justifyContent: "flex-end",
                    alignItems: "center",
                    marginBottom: 6
                }),
                w = (0, u.default)(d.default)(e => ({
                    position: "absolute",
                    bottom: -3,
                    justifyContent: "center",
                    alignItems: "center",
                    width: a.POG_WIDTH
                })),
                y = (0, u.default)(d.default)({
                    padding: "1px 5px",
                    borderRadius: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: a.POG_WIDTH - 4
                }),
                v = (0, u.default)(y)(e => ({
                    backgroundColor: e.theme.colors.green,
                    height: 16,
                    flexDirection: "row"
                })),
                O = (0, u.default)(y)(e => ({
                    backgroundColor: "#EBFAE7",
                    height: 14,
                    boxShadow: e.theme.select({
                        light: "1px 1px 6px rgba(0, 0, 0, 0.04)",
                        dark: void 0
                    })
                })),
                R = (0, u.default)(d.default)(e => ({
                    width: 15,
                    color: e.theme.semanticColors.textWhite,
                    marginRight: 1
                }))
        },
        580: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    onClick: t,
                    numberOfOwnedRoom: r
                } = e, n = (0, a.useTheme)(), u = r > 0, f = u ? o.default._("Your Rooms", null, {
                    hk: "1un6u"
                }).toString() : o.default._("Create a Room", null, {
                    hk: "KEUci"
                }).toString();
                return i.default.createElement(d, null, i.default.createElement(m, {
                    role: "button",
                    "aria-label": f,
                    telemetryName: u ? "your_rooms_pog" : "create_a_room_pog",
                    onActivate: () => t && t()
                }, i.default.createElement(g, null, i.default.createElement(l.default, {
                    size: 28,
                    color: n.semanticColors.textPrimary
                })), u && i.default.createElement(p, null, i.default.createElement(h, {
                    use: "caption-bold",
                    wrapText: !0,
                    textAlign: "center"
                }, r))), i.default.createElement(c.default, {
                    use: "caption",
                    wrapText: !0,
                    textAlign: "center",
                    numberOfLines: 2
                }, f))
            };
            var o = s(r(5)),
                n = s(r(1)),
                a = r(6),
                l = s(r(651)),
                i = s(r(0)),
                u = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var a = o ? Object.getOwnPropertyDescriptor(e, n) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n]
                        } r.default = e, t && t.set(e, r);
                    return r
                }(r(2)),
                c = s(r(4));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function () {
                    return e
                }, e
            }

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = (0, n.default)(u.default)({
                    height: "100%",
                    width: "100%",
                    alignItems: "center"
                }),
                m = (0, n.default)(u.FocusableView)({
                    position: "relative",
                    height: 50,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    marginBottom: 6
                }),
                p = (0, n.default)(u.default)(e => ({
                    borderRadius: "50%",
                    backgroundColor: e.theme.select({
                        light: e.theme.semanticColors.textWhite,
                        dark: e.theme.colors.flatBase50,
                        highContrast: {
                            light: e.theme.colors.base10,
                            dark: e.theme.colors.flatBase50
                        }
                    }),
                    height: 24,
                    width: 24,
                    padding: 4,
                    position: "absolute",
                    bottom: -3,
                    right: -3,
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: e.theme.select({
                        light: "1px 1px 6px rgba(0, 0, 0, 0.08)",
                        dark: void 0
                    })
                })),
                h = (0, n.default)(c.default)(e => ({
                    color: e.theme.semanticColors.textPrimary
                })),
                g = (0, n.default)(u.default)(e => ({
                    height: 50,
                    width: 50,
                    borderRadius: "100%",
                    backgroundColor: e.theme.select({
                        light: e.theme.colors.flatBase40,
                        dark: e.theme.colors.flatBase30
                    }),
                    alignItems: "center",
                    justifyContent: "center"
                }))
        },
        650: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function () {
                return k.default.createElement(x.DynamicModuleLoader, {
                    strictMode: !0,
                    modules: [g.RoomModule]
                }, k.default.createElement(G, null))
            }, t.POG_WIDTH = void 0;
            var o = L(r(2)),
                n = M(r(578)),
                a = M(r(579)),
                l = M(r(580)),
                i = M(r(27)),
                u = r(8),
                c = M(r(5)),
                f = M(r(9)),
                s = r(72),
                d = r(42),
                m = r(144),
                p = r(36),
                h = r(65),
                g = r(652),
                b = r(240),
                w = M(r(1)),
                y = M(r(33)),
                v = r(35),
                O = M(r(193)),
                R = M(r(161)),
                _ = r(11),
                E = r(46),
                k = L(r(0)),
                x = r(138),
                P = r(373),
                C = M(r(45)),
                T = M(r(13)),
                j = r(6);

            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function I() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return I = function () {
                    return e
                }, e
            }

            function L(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = I();
                if (t && t.has(e)) return t.get(e);
                var r = {},
                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var a = o ? Object.getOwnPropertyDescriptor(e, n) : null;
                        a && (a.get || a.set) ? Object.defineProperty(r, n, a) : r[n] = e[n]
                    } return r.default = e, t && t.set(e, r), r
            }
            t.POG_WIDTH = 62;
            const A = (0, w.default)(y.default)({
                    height: 105,
                    flexDirection: "row",
                    padding: "8px 12px",
                    alignItems: "center"
                }),
                S = (0, w.default)(o.default)({
                    height: "100%",
                    width: 62,
                    alignItems: "center",
                    marginRight: 12
                }),
                D = (0, w.default)(o.FocusableView)(e => ({
                    position: "absolute",
                    height: 24,
                    width: 20,
                    backgroundColor: e.theme.colors.base20,
                    ...e.theme.effects.blur,
                    top: 22,
                    alignItems: "center",
                    justifyContent: "center"
                })),
                W = (0, E.animated)((0, w.default)(D)({
                    left: 10,
                    borderTopLeftRadius: "100%",
                    borderBottomLeftRadius: "100%",
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4
                })),
                N = (0, E.animated)((0, w.default)(D)({
                    right: 10,
                    borderTopRightRadius: "100%",
                    borderBottomRightRadius: "100%",
                    borderTopLeftRadius: 4,
                    borderBottomLeftRadius: 4
                }));

            function U(e, t) {
                let r = e;
                switch (t.type) {
                    case "scroll_changed":
                        t.scrollLeft > 50 && !e.showLeft ? r = {
                            ...r,
                            showLeft: !0
                        } : t.scrollLeft < 50 && e.showLeft && (r = {
                            ...r,
                            showLeft: !1
                        }), t.scrollLeft < t.maxScrollLeft - 50 && !e.showRight ? r = {
                            ...r,
                            showRight: !0
                        } : t.scrollLeft > t.maxScrollLeft - 50 && e.showRight && (r = {
                            ...r,
                            showRight: !1
                        })
                }
                return r
            }

            function B(e) {
                const t = [];
                return e.otherParticipantOneUrl && t.push(e.otherParticipantOneUrl), e.otherParticipantTwoUrl && t.push(e.otherParticipantTwoUrl), e.otherParticipantThreeUrl && t.push(e.otherParticipantThreeUrl), t
            }
            const F = {
                    showModal: d.AppContextActions.showModal,
                    enterRoomsExperience: h.RoomActions.enterRoomsExperience,
                    openActiveNowThread: p.InboxActions.newThread.openOrCreateThread
                },
                G = (0, _.connect)((function (e) {
                    const t = (0, b.getOwnedRooms)(e);
                    return {
                        numberOfOwnedRoom: t ? t.length : 0,
                        roomInboxUnitList: (0, b.getRoomInboxUnitList)(e),
                        isNetworkConnected: (0, m.isAppNetworkConnected)(e)
                    }
                }), F)((function ({
                    showModal: e,
                    numberOfOwnedRoom: t,
                    roomInboxUnitList: r,
                    enterRoomsExperience: d,
                    openActiveNowThread: m,
                    isNetworkConnected: p
                }) {
                    const [{
                        showLeft: h,
                        showRight: g
                    }, b] = (0, k.useReducer)(U, {
                        showLeft: !1,
                        showRight: !1
                    }), w = (0, j.useTheme)(), {
                        windowKey: y
                    } = (0, v.useWindowContext)(), _ = (0, k.useRef)(null), [x] = (0, s.useUserSetting)("showAsAvailable");
                    (0, k.useEffect)(() => {
                        f.default.performance.markEvent(u.PerformanceEvents.ROOMS_TRAY_RENDERED)
                    }, []);
                    const M = (0, k.useCallback)((e, t, r) => {
                            m(e)
                        }, [m]),
                        I = (0, k.useCallback)(t => {
                            p ? (e({
                                type: "Room"
                            }, y), d(t)) : (0, P.showNoNetworkMessageBox)()
                        }, [p, e, y, d]),
                        L = c.default._("Rooms Inbox Tray", null, {
                            hk: "2sRbJ9"
                        }).toString(),
                        D = [];
                    r && r.map(e => {
                        let r = null;
                        const o = e.contactId;
                        switch (e.itemType) {
                            case u.StoriesAndActiveNowItemType.CreateOrYourRooms:
                                r = k.default.createElement(l.default, {
                                    onClick: () => I(o),
                                    numberOfOwnedRoom: t
                                });
                                break;
                            case u.StoriesAndActiveNowItemType.Room:
                                r = k.default.createElement(a.default, {
                                    participants: [(0, i.default)(e.profilePicture)].concat(B(e)),
                                    name: e.name,
                                    badgeCount: e.badgeCount,
                                    onClick: () => I(o),
                                    startTimestampMs: parseInt(e.callStartTimestampMs)
                                });
                                break;
                            case u.StoriesAndActiveNowItemType.ActiveNow:
                                r = x ? k.default.createElement(n.default, {
                                    onClick: M,
                                    contactId: o,
                                    profilePicture: e.profilePicture,
                                    name: e.name
                                }) : null
                        }
                        r && D.push(k.default.createElement(S, {
                            key: o
                        }, r))
                    });
                    const F = (0, k.useCallback)(() => {
                            if (!_.current) return;
                            const e = _.current.scrollLeft,
                                t = _.current.scrollWidth - _.current.clientWidth;
                            b({
                                type: "scroll_changed",
                                scrollLeft: e,
                                maxScrollLeft: t
                            })
                        }, []),
                        G = D.length;
                    (0, k.useEffect)(() => {
                        F()
                    }, [G, F]);
                    const z = (0, k.useCallback)(() => {
                            _.current && _.current.scrollTo({
                                left: _.current.scrollLeft - 186,
                                behavior: "smooth"
                            })
                        }, []),
                        H = (0, k.useCallback)(() => {
                            _.current && _.current.scrollTo({
                                left: _.current.scrollLeft + 186,
                                behavior: "smooth"
                            })
                        }, []);
                    return k.default.createElement(T.default, {
                        name: "roomInboxTray"
                    }, k.default.createElement(o.default, null, k.default.createElement(C.default, {
                        innerRef: _,
                        onScroll: F
                    }, k.default.createElement(A, {
                        "aria-label": L
                    }, D)), k.default.createElement(E.Transition, {
                        items: h,
                        native: !0,
                        config: {
                            tension: 500,
                            friction: 26
                        },
                        from: {
                            transform: "scale(0)",
                            opacity: 0
                        },
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: {
                            transform: "scale(0)",
                            opacity: 0
                        }
                    }, e => e ? e => k.default.createElement(W, {
                        "aria-label": c.default._("Scroll Left", null, {
                            hk: "3KgvDF"
                        }).toString(),
                        telemetryName: "scroll_left_button",
                        style: e,
                        onActivate: z
                    }, k.default.createElement(O.default, {
                        size: 20,
                        color: w.colors.base80
                    })) : null), k.default.createElement(E.Transition, {
                        items: g,
                        native: !0,
                        from: {
                            transform: "scale(0)",
                            opacity: 0
                        },
                        enter: {
                            transform: "scale(1)",
                            opacity: 1
                        },
                        leave: {
                            transform: "scale(0)",
                            opacity: 0
                        }
                    }, e => e ? e => k.default.createElement(N, {
                        "aria-label": c.default._("Scroll Right", null, {
                            hk: "21Mamv"
                        }).toString(),
                        style: e,
                        telemetryName: "scroll_right_button",
                        onActivate: H
                    }, k.default.createElement(R.default, {
                        size: 20,
                        color: w.colors.base80
                    })) : null)))
                }))
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/Rooms.bundle.js.map