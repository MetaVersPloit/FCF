(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        100: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TextShimmer = t.CircleShimmer = t.RectangleShimmer = t.TextShimmerContainer = t.ShimmerAnimationStyles = void 0;
            var r = n(37),
                a = u(n(1)),
                l = function(e) {
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
                }(n(0)),
                o = u(n(2));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, r.keyframes)({
                    "0%": {
                        opacity: 1
                    },
                    "50%": {
                        opacity: .5
                    },
                    "100%": {
                        opacity: 1
                    }
                }),
                s = e => ({
                    backgroundColor: e.theme.select({
                        light: e.theme.colors.flatBase40,
                        dark: e.theme.colors.flatBase60
                    }),
                    animation: `${c} 2s infinite cubic-bezier(0.5, 0, .5, 1)`,
                    animationDelay: `${200*(e.index||0)}ms`
                });
            t.ShimmerAnimationStyles = s;
            const d = (0, a.default)(o.default)(e => ({
                    height: e.height || "100%",
                    width: e.width || "100%",
                    ...s(e)
                })),
                f = (0, a.default)(o.default)(e => ({
                    height: e.size,
                    width: e.size,
                    borderRadius: "100%",
                    ...s(e)
                })),
                p = (0, a.default)(o.default)(e => ({
                    height: e.height || 10,
                    width: e.width || `${Math.floor(56*Math.random())+40}%`,
                    margin: "4px 0px",
                    borderRadius: "100px",
                    ...s(e)
                }));
            t.TextShimmerContainer = p;
            const m = (0, l.memo)((function({
                index: e,
                height: t,
                width: n,
                children: r
            }) {
                return l.default.createElement(d, {
                    index: e,
                    height: t,
                    width: n
                }, r)
            }));
            t.RectangleShimmer = m;
            const h = (0, l.memo)((function({
                className: e,
                index: t,
                size: n
            }) {
                return l.default.createElement(f, {
                    className: `archon-shimmer${e?` ${e}`:""}`,
                    index: t,
                    size: n
                })
            }));
            t.CircleShimmer = h;
            const g = (0, l.memo)((function(e) {
                return l.default.createElement(p, {
                    className: `archon-shimmer${e.className?` ${e.className}`:""}`,
                    index: e.index,
                    width: e.width,
                    height: e.height
                })
            }));
            t.TextShimmer = g
        },
        114: function(e, t, n) {
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
                    d: "M26.378 9.169c.597.347.8 1.112.453 1.709l-9 15.5a1.25 1.25 0 01-1.965.256l-6.5-6.5a1.25 1.25 0 111.768-1.768l5.121 5.121a.25.25 0 00.393-.05L24.67 9.621a1.25 1.25 0 011.709-.453z",
                    clipRule: "evenodd"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        115: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.computeFriendlyTimestamp = function(e) {
                const t = (0, a.default)(),
                    n = (0, a.default)(e);
                switch (i(t, n)) {
                    case "just_now":
                        return l.default._("Just now", null, {
                            hk: "10NbGL"
                        }).toString();
                    case "same_day":
                        return n.format("LT");
                    case "same_7_days":
                        return n.format("ddd");
                    case "same_year":
                        return n.format(u() ? "l" : "MMM DD");
                    default:
                        return n.format("L")
                }
            }, t.computeUpdatePeriod = function(e, t) {
                const n = (0, a.default)(),
                    r = (0, a.default)(e);
                switch (i(n, r)) {
                    case "just_now":
                        return t ? 0 : 6e4;
                    case "same_day":
                        return n.add(1, "day").startOf("day").diff(n, "millisecond");
                    case "same_7_days":
                        const e = n.diff(r, "day");
                        return n.add(7 - e, "day").startOf("day").diff(n, "millisecond");
                    default:
                        return null
                }
            }, t.getDateCategory = i, t.extractDateWithFormat = function(e, t) {
                const n = new Date(e);
                t.year || (new Date).getFullYear() === n.getFullYear() || (t.year = "numeric");
                return n.toLocaleDateString(void 0, t)
            }, t.extractTimeWithFormat = function(e, t) {
                return new Date(e).toLocaleTimeString(void 0, t)
            }, t.isSameDay = function(e, t) {
                const n = new Date(e),
                    r = new Date(t);
                return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate()
            }, t.computeMessageListTimestamp = function(e) {
                const t = (0, a.default)(),
                    n = (0, a.default)(e),
                    r = t.diff(n, "day");
                return r < 1 && t.day() === n.day() ? n.format("LT") : r < 7 ? n.format("ddd LT") : t.year() === n.year() ? n.format(u() ? "l, LT" : "MMM DD, LT") : n.format("L, LT")
            }, t.computeHoursMinutesSeconds = function(e) {
                const t = [3600, 60, 1];
                let n = "";
                for (let r of t) {
                    const t = Math.floor(e / r);
                    n += `${t.toString().padStart(2,"0")}:`, e %= r
                }
                return n.slice(0, -1).replace(/^0(?:0:0?)?/, "")
            }, t.computeRecentlyActiveTimestamp = function(e) {
                const t = Date.now() - e,
                    n = Math.round(t / 1e3 / 60);
                if (c(e)) return n;
                return null
            }, t.timestampIsInLast60Min = c;
            var r = o(n(855)),
                a = o(n(185)),
                l = o(n(5));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            a.default.extend(r.default);

            function i(e, t) {
                if (e.year() !== t.year()) return "diff_year";
                const n = e.diff(t, "day");
                if (n < 1 && e.day() === t.day()) {
                    return e.diff(t, "minute") < 1 ? "just_now" : "same_day"
                }
                return n < 7 && e.day() !== t.day() ? "same_7_days" : "same_year"
            }

            function u() {
                return "en" !== (0, a.default)().locale()
            }

            function c(e) {
                return Date.now() - e < 36e5
            }
        },
        123: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toKeyEvent = function(e) {
                let t = {
                    metaKey: !1,
                    ctrlKey: !1,
                    altKey: !1,
                    shiftKey: !1,
                    key: ""
                };
                return e.split("+").forEach(e => {
                    const n = e.match(r);
                    if (n) {
                        const e = n[0].toLowerCase();
                        t = function(e, t) {
                            switch (t) {
                                case "command":
                                case "cmd":
                                    return Object.assign({}, e, {
                                        metaKey: !0,
                                        key: "Meta"
                                    });
                                case "control":
                                case "ctrl":
                                    return Object.assign({}, e, {
                                        ctrlKey: !0,
                                        key: "Control"
                                    });
                                case "option":
                                case "alt":
                                    return Object.assign({}, e, {
                                        altKey: !0,
                                        key: "Alt"
                                    });
                                case "shift":
                                    return Object.assign({}, e, {
                                        shiftKey: !0,
                                        key: "Shift"
                                    });
                                default:
                                    return e
                            }
                        }(t, e)
                    } else {
                        const n = e.match(a);
                        if (n) {
                            const r = n[0].toLowerCase();
                            r in l ? (o = t, i = l[r], t = Object.assign({}, o, {
                                key: i
                            })) : 1 == e.length && (t = function(e, t) {
                                const n = t.toLowerCase();
                                return Object.assign({}, e, {
                                    key: n
                                })
                            }(t, e))
                        }
                    }
                    var o, i
                }), t
            }, t.toHumanReadableString = function(e, t) {
                const n = [];
                e.metaKey && n.push(t.select({
                    mac: "⌘",
                    windows: "⊞"
                }));
                e.shiftKey && n.push(t.select({
                    mac: "⇧",
                    windows: "Shift+"
                }));
                e.ctrlKey && n.push(t.select({
                    mac: "^",
                    windows: "Ctrl+"
                }));
                e.altKey && n.push(t.select({
                    mac: "⌥",
                    windows: "Alt+"
                }));
                return n.push(function(e) {
                    if (e === l.enter) return "↵";
                    return e.toUpperCase()
                }(e.key)), n.join("")
            };
            const r = /^(CommandOrControl|CmdOrCtrl|Command|Cmd|Control|Ctrl|Option|Alt|Shift)/i,
                a = /^(Plus|Space|Tab|Backspace|Delete|Insert|Return|Enter|Up|Down|Left|Right|Home|End|PageUp|PageDown|Escape|Esc|[0-9A-Z)!@#$%^&*(:+<_>?~{|}";=,\-./`[\\\]'])/i,
                l = {
                    plus: "Add",
                    space: " ",
                    tab: "Tab",
                    backspace: "Backspace",
                    delete: "Delete",
                    insert: "Insert",
                    return: "Return",
                    enter: "Return",
                    up: "ArrowUp",
                    down: "ArrowDown",
                    left: "ArrowLeft",
                    right: "ArrowRight",
                    home: "Home",
                    end: "End",
                    pageup: "PageUp",
                    pagedown: "PageDown",
                    escape: "Escape",
                    esc: "Escape"
                }
        },
        124: function(e, t, n) {
            var r = n(458),
                a = n(459);
            e.exports = function(e, t, n) {
                var l = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var o = (e = e || {}).random || (e.rng || r)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
                    for (var i = 0; i < 16; ++i) t[l + i] = o[i];
                return t || a(o)
            }
        },
        126: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, f.useRef)({
                        registerCommand: function(e, t) {
                            n.current.has(e) || n.current.set(e, []);
                            const r = n.current.get(e) || [];
                            r.includes(t) || r.push(t);
                            n.current.set(e, r)
                        },
                        unregisterCommand: function(e, t) {
                            if (n.current.has(e)) {
                                const r = n.current.get(e) || [];
                                if (r.includes(t)) {
                                    const a = r.filter(e => e !== t);
                                    0 === a.length ? n.current.delete(e) : n.current.set(e, a)
                                }
                            }
                        }
                    }),
                    n = (0, f.useRef)(new Map),
                    {
                        document: s,
                        window: p
                    } = (0, r.useWindowContext)(),
                    S = (0, f.useMemo)(() => (0, b.default)(i.default.platform.osName), []),
                    T = (0, f.useMemo)(() => e.emotionCache || (0, l.default)({
                        prefix: !1
                    }), [e.emotionCache]);
                (0, f.useEffect)(() => {
                    function e() {
                        s.body && (s.body.className = "")
                    }

                    function t(e) {
                        ! function(e) {
                            n.current.forEach((t = [], n) => {
                                if (e.defaultPrevented) return;
                                const r = (0, c.toKeyEvent)(n);
                                e.metaKey === r.metaKey && e.ctrlKey === r.ctrlKey && e.altKey === r.altKey && e.shiftKey === r.shiftKey && e.key.toLowerCase() === r.key.toLowerCase() && t.slice().reverse().forEach(t => {
                                    if (e.defaultPrevented) return;
                                    t(e) && (e.stopPropagation(), e.preventDefault())
                                })
                            })
                        }(e), e.defaultPrevented || ("ArrowLeft" !== e.key && "ArrowRight" !== e.key && "ArrowDown" !== e.key && "ArrowUp" !== e.key && "Tab" !== e.key || s.body && (s.body.className = "focus-is-visible"), "Escape" === e.key && s.body && (s.body.className = ""))
                    }
                    return p.addEventListener("mousedown", e, !0), p.addEventListener("keydown", t, !0), () => {
                        p.removeEventListener("mousedown", e, !0), p.removeEventListener("keydown", t, !0)
                    }
                }, [s, p]);
                const {
                    inPortal: A
                } = (0, r.useWindowContext)(), k = (0, f.useCallback)(() => p.location.reload(), []), L = f.default.createElement(x, null, f.default.createElement(C.default, null, f.default.createElement(M.default, null), f.default.createElement(h.ContextMenuHost, null, e.hideTitlebar ? f.default.createElement(a.default, null) : f.default.createElement(f.default.Suspense, {
                    fallback: null
                }, f.default.createElement(R, {
                    showPerformanceInformation: "messenger" === e.pageTitle,
                    storeIsAvailable: e.storeIsAvailable
                })), e.children)));
                return f.default.createElement(f.StrictMode, null, f.default.createElement(y.default, {
                    fallback: (e, t) => f.default.createElement(g.default, {
                        error: e,
                        info: t
                    }),
                    listenToGlobalErrors: !1,
                    component: "uiroot"
                }, f.default.createElement(o.CacheProvider, {
                    value: T
                }, f.default.createElement(o.Global, {
                    styles: S
                }), f.default.createElement(m.default, null), f.default.createElement(_.default, null), f.default.createElement(v.default, null), f.default.createElement(P.default, null), f.default.createElement(y.default, {
                    listenToGlobalErrors: !0,
                    fallback: (t, n) => f.default.createElement(O.ThemeContextProvider, null, e.storeIsAvailable ? f.default.createElement(d.default, null, f.default.createElement(E.default, {
                        showBugButton: !0,
                        onRestart: k
                    })) : f.default.createElement(E.default, {
                        onRestart: k
                    })),
                    component: "app"
                }, f.default.createElement(f.default.Suspense, {
                    fallback: null
                }, f.default.createElement(w.default, null, f.default.createElement(u.default.Provider, {
                    value: t.current
                }, A ? L : f.default.createElement(O.ThemeContextProvider, null, L))))))))
            };
            var r = n(35),
                a = T(n(379)),
                l = T(n(235)),
                o = n(37),
                i = T(n(9)),
                u = T(n(84)),
                c = n(123),
                s = T(n(1)),
                d = T(n(380)),
                f = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = S();
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
                p = T(n(2)),
                m = T(n(404)),
                h = n(66),
                g = T(n(356)),
                y = T(n(250)),
                b = T(n(201)),
                E = T(n(357)),
                _ = T(n(271)),
                v = T(n(405)),
                P = T(n(406)),
                w = T(n(837)),
                O = n(6),
                C = T(n(838)),
                M = T(n(407));

            function S() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return S = function() {
                    return e
                }, e
            }

            function T(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const R = f.default.lazy(() => Promise.all([n.e(7), n.e(12), n.e(21), n.e(35)]).then(n.t.bind(null, 524, 7))),
                x = (0, s.default)(p.default)(e => ({
                    flex: 1,
                    border: e.theme.select({
                        windows: `1px solid ${e.theme.semanticColors.bgLine}`,
                        mac: void 0
                    })
                }))
        },
        127: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    onClick: t,
                    size: n,
                    children: a,
                    ...o
                } = e;
                return (l.default.createElement(c, u({
                    onActivate: t || null,
                    height: r.PILL_SIZES[n]
                }, o, {
                    css: {}
                }), a))
            }, Object.defineProperty(t, "PILL_SIZES", {
                enumerable: !0,
                get: function() {
                    return r.PILL_SIZES
                }
            }), Object.defineProperty(t, "PillSize", {
                enumerable: !0,
                get: function() {
                    return r.PillSize
                }
            });
            var r = n(272),
                a = i(n(1)),
                l = i(n(0)),
                o = n(2);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u() {
                return (u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            const c = (0, a.default)(o.FocusableView)(e => ({
                height: e.height,
                backgroundColor: e.theme.select({
                    light: e.theme.colors.base10,
                    dark: e.theme.colors.flatBase40
                }),
                borderRadius: 18,
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                margin: 4,
                width: "fit-content",
                boxShadow: e.theme.select({
                    light: "1px 1px 4px 3px rgba(0, 0, 0, 0.08)",
                    dark: void 0
                })
            }))
        },
        143: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(...e) {
                const [t, n] = (0, l.useState)(!1);
                return (0, a.default)(() => n(!1), ...e), [t, n]
            };
            var r, a = (r = n(354)) && r.__esModule ? r : {
                    default: r
                },
                l = n(0)
        },
        145: function(e, t, n) {
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
                    d: "M25.753 28.2c1.07-.357 1.816-1.275 2.423-2.225a2.05 2.05 0 00.037-2.151 4.998 4.998 0 00-.723-.963 11.594 11.594 0 00-2.888-2.112c-.58-.299-1.272-.212-1.808.159l-2.098 1.452a.472.472 0 01-.437.055 11.557 11.557 0 01-4.045-2.63 11.554 11.554 0 01-2.63-4.044.472.472 0 01.056-.437l1.453-2.098c.37-.536.457-1.228.158-1.807A11.587 11.587 0 0013.14 8.51a4.995 4.995 0 00-.963-.723 2.05 2.05 0 00-2.15.037c-.951.607-1.87 1.353-2.225 2.424-1.174 3.527 1.187 8.461 5.338 12.613 4.152 4.151 9.086 6.512 12.614 5.338z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        149: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IconPill = function(e) {
                const {
                    color: t,
                    icon: n,
                    size: r
                } = e;
                return (i.default.createElement(E, {
                    className: e.className
                }, i.default.createElement(n, {
                    size: a.PILL_ICON_SIZES[r],
                    color: t
                })))
            }, t.TextPill = function(e) {
                const {
                    text: t
                } = e;
                return (i.default.createElement(_, null, i.default.createElement(m.default, {
                    use: "body-semibold"
                }, t)))
            }, t.ProfilePhotoPill = function(e) {
                const {
                    imageUrl: t
                } = e;
                return (i.default.createElement(E, null, i.default.createElement(p.default, {
                    profilePictureUrl: t,
                    size: "xsmall"
                })))
            }, t.ButtonPill = function(e) {
                const {
                    icon: t,
                    buttonColor: n,
                    iconColor: r,
                    ariaLabel: a,
                    telemetryName: l,
                    size: o,
                    onClick: u,
                    silentPressedState: s,
                    className: d
                } = e;
                return (i.default.createElement(E, {
                    className: d
                }, i.default.createElement(c.default, {
                    css: {
                        padding: "4px"
                    },
                    "aria-label": a,
                    size: b[o],
                    icon: t,
                    buttonColor: n,
                    iconColor: r,
                    telemetryName: l,
                    silentPressedState: s,
                    onClick: u
                })))
            }, t.TypingIndicatorPill = function(e) {
                const {
                    isGroupChat: t,
                    participants: n
                } = e;
                return (i.default.createElement(v, {
                    hasParticipants: null != n
                }, i.default.createElement(f.default, {
                    showProfilePicture: !0,
                    isGroup: t,
                    typingUsers: n
                })))
            }, t.LoadingPill = function({
                className: e
            }) {
                return i.default.createElement(E, {
                    className: e
                }, i.default.createElement(d.default, {
                    size: d.SpinnerSize.XSmall
                }))
            }, t.MoreButtonPill = function(e) {
                const {
                    buttonColor: t,
                    activeButtonColor: n,
                    iconColor: r,
                    activeIconColor: a,
                    ariaLabel: l,
                    telemetryName: u,
                    size: d,
                    contextMenuItems: f,
                    silentPressedState: p
                } = e, m = (0, i.useRef)(null), {
                    showContextMenu: h
                } = (0, s.useContextMenu)(), [g, y] = (0, i.useState)(!1);
                return i.default.createElement(E, null, i.default.createElement(c.default, {
                    icon: o.default,
                    "aria-label": l,
                    size: b[d],
                    buttonColor: g ? n : t,
                    iconColor: g ? a : r,
                    elementRef: m,
                    onClick: async e => {
                        y(!0), await h({
                            items: f,
                            target: m.current
                        }), y(!1)
                    },
                    telemetryName: u,
                    silentPressedState: p
                }))
            }, Object.defineProperty(t, "ICON_SIZES", {
                enumerable: !0,
                get: function() {
                    return a.PILL_ICON_SIZES
                }
            }), t.BUTTON_SIZES = void 0;
            var r = n(127),
                a = n(272),
                l = y(n(1)),
                o = y(n(256)),
                i = g(n(0)),
                u = y(n(2)),
                c = g(n(22)),
                s = n(66),
                d = g(n(82)),
                f = y(n(202)),
                p = y(n(38)),
                m = y(n(4));

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }

            function g(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = h();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const b = {
                [r.PillSize.Medium]: c.RoundButtonSize.XSmall,
                [r.PillSize.Large]: c.RoundButtonSize.Large
            };
            t.BUTTON_SIZES = b;
            const E = (0, l.default)(u.default)({
                    justifyContent: "center"
                }),
                _ = (0, l.default)(E)(e => ({
                    paddingLeft: 8,
                    paddingRight: 12,
                    flex: 1
                })),
                v = (0, l.default)(E)(e => ({
                    paddingLeft: e.hasParticipants ? 0 : 8
                }))
        },
        160: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    items: t,
                    initialSelectedIndex: n,
                    disabled: r = !1
                } = e, l = (0, f.useTheme)(), c = (0, u.useRef)(null), p = (0, u.useRef)(null);
                let m = null;
                const [h, g] = (0, u.useState)(n || 0), [O, C] = (0, a.default)(c), [M, S] = (0, u.useState)(!1);
                (0, u.useEffect)(() => {
                    "number" == typeof e.selectedIndex && g(e.selectedIndex)
                }, [e.selectedIndex, h]);
                const T = t.map(() => u.default.createRef());
                (0, u.useEffect)(() => {
                    O && !M && m && m.current && m.current.focus()
                }, [O, M, m]);
                const R = (0, u.useMemo)(() => ({
                    flip: {
                        enabled: !1
                    },
                    offset: {
                        offset: `0, ${l.select({windows:-6-32*(h+1),mac:-4-22*(h+1)})}`
                    }
                }), [h, l.os]);
                return u.default.createElement(y, {
                    ref: p,
                    onKeyDownCapture: e => {
                        let t = null;
                        !(e.metaKey || e.altKey || e.shiftKey || e.ctrlKey) ? "Escape" === e.key ? (t = !1, p.current && p.current.focus()) : "Tab" === e.key && (t = !1): !e.altKey || e.metaKey || e.shiftKey || e.ctrlKey || "ArrowDown" !== e.key || (t = !0), null != t && C(t)
                    },
                    onActivate: () => {
                        C(!O), O && p.current && p.current.focus()
                    },
                    onMouseDown: () => {
                        S(!0)
                    },
                    onMouseUp: () => {
                        S(!1)
                    },
                    onMouseLeave: () => {
                        S(!1)
                    },
                    "aria-expanded": O,
                    width: e.width,
                    disabled: r,
                    role: "listbox"
                }, u.default.createElement(b, {
                    disabled: r
                }, e.items[h]), u.default.createElement(E, {
                    isExpanded: O,
                    "aria-expanded": O,
                    isMouseDown: M,
                    disabled: r
                }, u.default.createElement(i.default, {
                    size: 12,
                    color: l.semanticColors.textPrimary
                })), O && u.default.createElement(d.default, {
                    target: p.current,
                    placement: "bottom",
                    modifiers: R,
                    disableDefaultAnimation: !0
                }, u.default.createElement(_, {
                    width: p.current.clientWidth,
                    ref: c,
                    "aria-setsize": t.length
                }, u.default.createElement(s.default, null, t.map((n, r) => {
                    const a = r === h;
                    a && (m = T[r]);
                    const i = "mac" === l.os ? a ? u.default.createElement(o.default, {
                        size: 12,
                        color: l.semanticColors.textPrimary
                    }) : u.default.createElement(w, null) : null;
                    return (u.default.createElement(v, {
                        ref: T[r],
                        key: r,
                        onActivate: () => ((t, n) => {
                            const {
                                onSelectionChanged: r
                            } = e;
                            r && r(t, n), g(n)
                        })(n, r),
                        onMouseEnter: () => (e => {
                            const t = T[e];
                            t.current && t.current.focus()
                        })(r),
                        role: "option",
                        "aria-label": n.toString(),
                        "aria-selected": a,
                        "aria-setsize": t.length,
                        "aria-posinset": r + 1
                    }, i, u.default.createElement(P, null, n)))
                })))))
            };
            var r = g(n(141)),
                a = g(n(143)),
                l = g(n(1)),
                o = g(n(114)),
                i = g(n(388)),
                u = h(n(0)),
                c = h(n(2)),
                s = g(n(33)),
                d = g(n(91)),
                f = n(6),
                p = g(n(4));

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function() {
                    return e
                }, e
            }

            function h(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const y = (0, l.default)(c.FocusableView)(e => ({
                    height: e.theme.select({
                        mac: 22,
                        windows: 28
                    }),
                    flexDirection: "row",
                    borderRadius: e.theme.select({
                        mac: 5,
                        windows: 2
                    }),
                    cursor: e.disabled ? "auto" : "pointer"
                })),
                b = (0, l.default)(p.default)(e => ({
                    flex: 1,
                    color: e.disabled ? e.theme.colors.base40 : e.theme.semanticColors.textPrimary,
                    ...e.theme.select({
                        mac: {
                            border: `1px solid ${e.theme.semanticColors.bgLine}`,
                            borderRadius: "5px 0 0 5px",
                            padding: "0 6px 0 6px",
                            fontSize: 13,
                            lineHeight: "20px"
                        },
                        windows: {
                            border: `2px solid ${e.theme.colors.flatBase50}`,
                            padding: "0 10px 0 10px",
                            fontSize: 15,
                            lineHeight: "24px"
                        }
                    }),
                    borderRightWidth: 0
                })),
                E = (0, l.default)(c.default)(e => ({
                    justifyContent: "center",
                    alignItems: "center",
                    width: e.theme.select({
                        mac: 20,
                        windows: 32
                    }),
                    borderBottomRightRadius: e.theme.select({
                        mac: 5,
                        windows: 2
                    }),
                    borderTopRightRadius: e.theme.select({
                        mac: 5,
                        windows: 2
                    }),
                    height: "100%",
                    ...e.theme.select({
                        mac: {
                            backgroundColor: e.disabled ? e.theme.colors.base60 : e.isMouseDown || e.isExpanded ? e.theme.colors.base60 : e.theme.semanticColors.primaryAccent,
                            "*": {
                                color: e.theme.semanticColors.textWhite
                            }
                        },
                        windows: {
                            backgroundColor: e.disabled ? e.theme.colors.base60 : e.isMouseDown || e.isExpanded ? e.theme.colors.base60 : e.theme.colors.base30,
                            border: `2px solid ${e.theme.colors.flatBase50}`,
                            borderLeftWidth: 0,
                            borderRadius: "0 2px 2px 0",
                            fill: e.theme.colors.base80
                        }
                    })
                })),
                _ = (0, l.default)(c.default)(e => ({
                    width: e.width,
                    pointerEvents: "auto",
                    maxHeight: "100vh",
                    overflowY: "auto",
                    paddingTop: 4,
                    paddingBottom: 4,
                    textColor: e.theme.select({
                        dark: "white",
                        light: "black"
                    }),
                    backgroundColor: e.theme.select({
                        dark: e.theme.colors.flatBase40,
                        light: e.theme.colors.base10
                    }),
                    marginLeft: e.theme.select({
                        mac: -12
                    }),
                    borderRadius: e.theme.select({
                        mac: 5
                    }),
                    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.20)",
                    zIndex: r.default.DropdownCallout
                })),
                v = (0, l.default)(c.FocusableView)(e => ({
                    height: e.theme.select({
                        mac: 22,
                        windows: 32
                    }),
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: e.theme.select({
                        mac: 3,
                        windows: 9
                    }),
                    color: "black",
                    ":focus": {
                        backgroundColor: e.theme.semanticColors.bgSelected
                    }
                })),
                P = (0, l.default)(p.default)(e => ({
                    paddingLeft: 3,
                    fontSize: e.theme.select({
                        mac: 13,
                        windows: 15
                    }),
                    flex: 1,
                    lineHeight: "22px"
                })),
                w = (0, l.default)(c.default)({
                    width: 12
                })
        },
        161: function(e, t, n) {
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
                    d: "M14.116 27.134a1.25 1.25 0 010-1.768l7.19-7.19a.25.25 0 000-.353l-7.19-7.19a1.25 1.25 0 011.768-1.767l8.25 8.25a1.25 1.25 0 010 1.768l-8.25 8.25a1.25 1.25 0 01-1.768 0z",
                    clipRule: "evenodd"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        162: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLoggingMeta = function(e, t) {
                return {
                    eventName: e,
                    eventPayload: t
                }
            }, t.LoggingActions = t.LOG_EVENT_PAYLOAD = t.LOG_EVENT_NAME = void 0;
            var r = n(76);
            t.LOG_EVENT_NAME = "eventName";
            t.LOG_EVENT_PAYLOAD = "eventPayload";
            const a = {
                logMessagesRead: (0, r.actionCreator)("logging/log_messages_read", (e, t) => ({
                    isThreadFocused: t,
                    threadKey: e
                })),
                updateMessageReadAlreadyLogged: (0, r.actionCreator)("logging/update_messages_read_already_logged", (e, t, n) => ({
                    threadKey: e,
                    earliestMessageTimestamp: t,
                    latestMessageTimestamp: n
                })),
                createMessageSendInfo: (0, r.actionCreator)("logging/add_messages_send_info", (e, t, n, r) => ({
                    offlineThreadingIds: e,
                    attachmentInfo: t,
                    startingNewThread: n,
                    sendSource: r
                })),
                updateMessageSendServerReceivedInfo: (0, r.actionCreator)("logging/update_message_send_server_received_info", e => ({
                    loggingInfo: e
                })),
                updateMessageSendDeliveredInfoAndLog: (0, r.actionCreator)("logging/update_messag_send_delivered_info_and_log", e => ({
                    loggingInfo: e
                })),
                logMessageSendFailures: (0, r.actionCreator)("logging/log_message_send_failures", e => ({
                    loggingInfo: e
                })),
                cleanUpMessageSends: (0, r.actionCreator)("logging/clean_up_message_sends", e => ({
                    offlineThreadingIds: e
                })),
                markExperimentImpression: (0, r.actionCreator)("logging/mark_experiment_impression", e => ({
                    experiment: e
                }))
            };
            t.LoggingActions = a
        },
        167: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(37),
                a = f(n(591)),
                l = f(n(1)),
                o = f(n(114)),
                i = function(e) {
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
                }(n(0)),
                u = f(n(2)),
                c = n(6),
                s = f(n(4));

            function d() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return d = function() {
                    return e
                }, e
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            const m = {
                    small: 16,
                    normal: 26
                },
                h = (0, r.keyframes)({
                    "0%": {
                        left: "50%",
                        right: "50%",
                        top: "50%",
                        bottom: "50%"
                    },
                    "100%": {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                }),
                g = (0, l.default)(u.default)(e => ({
                    opacity: 0,
                    position: "absolute",
                    ":focus-visible + label > .checkbox_glyph": {
                        border: `2px solid ${e.disabled?e.theme.colors.base60:e.theme.semanticColors.primaryAccent}`,
                        filter: !e.disabled && e.checked ? "saturate(400%)" : ""
                    }
                })).withComponent("input", {
                    target: "e17bph0y0",
                    label: "HiddenInput"
                }),
                y = (0, l.default)(u.default)(e => ({
                    opacity: e.disabled ? .5 : 1,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                })).withComponent("label", {
                    target: "e17bph0y1",
                    label: "Label"
                }),
                b = (0, l.default)(s.default)({
                    display: "block",
                    flexShrink: 1,
                    textOverflow: "ellipsis",
                    overflowX: "hidden",
                    whiteSpace: "nowrap"
                }),
                E = (0, l.default)(u.default)(e => ({
                    height: m[e.size],
                    width: m[e.size],
                    marginRight: 6,
                    border: `2px solid ${e.checked&&!e.disabled?e.theme.semanticColors.primaryAccent:e.disabled?e.theme.colors.base70:e.theme.colors.base60}`,
                    borderRadius: 3,
                    transition: "border-color linear 150ms",
                    "::before": e.checked ? {
                        content: '""',
                        animation: `${h} 50ms ease-in-out`,
                        position: "absolute",
                        backgroundColor: e.disabled ? e.theme.colors.base70 : e.theme.semanticColors.primaryAccent,
                        animationFillMode: "forwards"
                    } : {}
                })),
                _ = l.default.div(e => ({
                    display: "flex",
                    position: "absolute",
                    left: -1,
                    top: -1,
                    opacity: e.visible ? 1 : 0,
                    transition: "opacity 100ms linear"
                }));
            var v = (0, i.memo)((function(e) {
                const {
                    checked: t,
                    className: n,
                    disabled: r,
                    label: l,
                    size: s = "normal",
                    onChange: d
                } = e, [f, h] = (0, i.useState)(!1), v = (0, c.useTheme)(), P = () => {
                    r || d && d(!t)
                }, w = {
                    checked: t,
                    disabled: r
                }, O = "mac" === v.os && !r && f, C = (0, a.default)("checkbox");
                return i.default.createElement(u.default, {
                    className: n
                }, i.default.createElement(g, p({
                    id: C,
                    onChange: P
                }, w)), i.default.createElement(y, p({
                    htmlFor: C
                }, w, {
                    onClick: P,
                    onMouseEnter: () => {
                        h(!0)
                    },
                    onMouseLeave: () => {
                        h(!1)
                    }
                }), i.default.createElement(E, p({}, w, {
                    size: s,
                    className: "checkbox_glyph"
                }), i.default.createElement(_, {
                    visible: t || O
                }, i.default.createElement(o.default, {
                    size: m[s || "normal"] - 1,
                    color: t ? v.semanticColors.textWhite : v.colors.base70
                }))), i.default.createElement(b, {
                    use: "small" === s ? "subtext" : "body"
                }, l)))
            }));
            t.default = v
        },
        169: function(e, t, n) {
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
                    d: "M10 25.498V10.502a1.5 1.5 0 012.17-1.342l14.997 7.498c1.105.553 1.105 2.13 0 2.684L12.17 26.84A1.5 1.5 0 0110 25.498z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        170: function(e, t, n) {
            "use strict";
            let r, a, l;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Targets = t.PlayStates = t.AudioStates = void 0, t.AudioStates = r,
                function(e) {
                    e.Loading = "loading", e.Ready = "ready", e.Playing = "playing", e.Paused = "paused"
                }(r || (t.AudioStates = r = {})), t.PlayStates = a,
                function(e) {
                    e.Playing = "playing", e.Paused = "paused"
                }(a || (t.PlayStates = a = {})), t.Targets = l,
                function(e) {
                    e.Thread = "thread", e.Fullscreen = "fullscreen"
                }(l || (t.Targets = l = {}))
        },
        171: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(211),
                a = n(406),
                l = d(n(1)),
                o = function(e) {
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
                i = d(n(2)),
                u = n(6),
                c = d(n(4));

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, l.default)(i.default)(e => ({
                    height: e.height,
                    flexDirection: "row",
                    marginLeft: e.inChatCell ? 8 : void 0
                })),
                p = (0, l.default)(i.default)(e => ({
                    height: e.size,
                    minWidth: e.minWidth,
                    padding: e.isRound ? "2px 4px" : "2px 4px 2px 0px",
                    backgroundColor: e.color,
                    borderRadius: e.isRound ? e.size / 2 : `0px ${e.size/2}px ${e.size/2}px 0px`,
                    marginRight: e.marginRight,
                    alignItems: e.isRound ? "center" : "flex-start",
                    justifyContent: "center",
                    lineHeight: e.lineHeight
                })),
                m = (0, l.default)(i.default)(e => ({
                    height: e.height,
                    width: e.width,
                    marginLeft: e.marginLeft,
                    backgroundColor: e.color,
                    clipPath: e.clipPathId && `url(#${e.clipPathId})`
                })),
                h = {
                    xxsmall: "caption",
                    xsmall: "caption",
                    small: "title-semibold",
                    medium: "title-semibold",
                    xlarge: "headline",
                    xxlarge: "headline"
                },
                g = {
                    xxsmall: "caption-bold",
                    xsmall: "caption",
                    small: "caption",
                    medium: "body-bold",
                    xlarge: "display",
                    xxlarge: "display"
                },
                y = Object.freeze({
                    xxsmall: {
                        size: 16,
                        offset: 2,
                        clipPathId: a.PROFILE_GROUP_HORIZONTAL_PATH_16,
                        numberBubbleClipPath: a.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_16,
                        numberBubbleClipPathWidth: 4,
                        numberBubbleClipPathMarginLeft: 1.75,
                        numberBubbleLineHeight: 10
                    },
                    xsmall: {
                        size: 28,
                        offset: 4,
                        clipPathId: a.PROFILE_GROUP_HORIZONTAL_PATH_28,
                        numberBubbleClipPath: a.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_28,
                        numberBubbleClipPathWidth: 7,
                        numberBubbleClipPathMarginLeft: 2,
                        numberBubbleLineHeight: "normal"
                    },
                    small: {
                        size: 35,
                        offset: 6,
                        clipPathId: a.PROFILE_GROUP_HORIZONTAL_PATH_35,
                        numberBubbleClipPath: a.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_35,
                        numberBubbleClipPathWidth: 8.75,
                        numberBubbleClipPathMarginLeft: 4,
                        numberBubbleLineHeight: "normal"
                    },
                    medium: {
                        size: 50,
                        offset: 10,
                        clipPathId: a.PROFILE_GROUP_HORIZONTAL_PATH_50,
                        numberBubbleClipPath: a.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_50,
                        numberBubbleClipPathWidth: 12.5,
                        numberBubbleClipPathMarginLeft: 5,
                        numberBubbleLineHeight: "normal"
                    },
                    xlarge: {
                        size: 60,
                        offset: 12,
                        clipPathId: a.PROFILE_GROUP_HORIZONTAL_PATH_60,
                        numberBubbleClipPath: a.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_60,
                        numberBubbleClipPathWidth: 15,
                        numberBubbleClipPathMarginLeft: 6,
                        numberBubbleLineHeight: "normal"
                    },
                    xxlarge: {
                        size: 80,
                        offset: 16,
                        clipPathId: a.PROFILE_GROUP_HORIZONTAL_PATH_80,
                        numberBubbleClipPath: a.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_80,
                        numberBubbleClipPathWidth: 20,
                        numberBubbleClipPathMarginLeft: 8,
                        numberBubbleLineHeight: "normal"
                    }
                });
            var b = (0, o.memo)((function({
                profilePictureUrls: e,
                size: t = "small",
                useCountBubble: n,
                countBubblePlacement: a = "left",
                displayExtraCountPlus: l,
                inChatCell: i,
                countBubbleColor: s,
                countBubbleTextColor: d
            }) {
                const b = e.slice(0, 3),
                    E = (0, u.useTheme)(),
                    _ = s || E.select({
                        light: E.colors.base60,
                        dark: E.colors.base70
                    }),
                    {
                        size: v,
                        offset: P,
                        clipPathId: w,
                        numberBubbleClipPath: O,
                        numberBubbleClipPathWidth: C,
                        numberBubbleClipPathMarginLeft: M,
                        numberBubbleLineHeight: S
                    } = y[t];
                let T;
                if (e.length <= 3 || !n) T = b.map((t, n) => o.default.createElement(r.BaseProfilePhoto, {
                    key: n,
                    src: t,
                    size: v,
                    clipPathId: 0 !== n ? w : void 0,
                    css: {
                        marginRight: n == e.length - 1 ? void 0 : -P
                    }
                }));
                else {
                    const i = e.slice(0, 2),
                        u = e.length - 2,
                        s = (l ? "+" : "") + u,
                        f = i.map((e, t) => {
                            const l = 0 !== t || "left" === a && n;
                            return (o.default.createElement(r.BaseProfilePhoto, {
                                key: t,
                                src: e,
                                size: v,
                                clipPathId: l ? w : void 0,
                                css: {
                                    marginRight: 2 == t ? void 0 : -P
                                }
                            }))
                        }),
                        y = "left" === a ? 0 : 2,
                        b = 2 === y,
                        E = o.default.createElement(o.default.Fragment, null, b && o.default.createElement(m, {
                            height: v,
                            width: C,
                            color: _,
                            clipPathId: O,
                            marginLeft: M
                        }), o.default.createElement(p, {
                            key: y,
                            size: v,
                            lineHeight: S,
                            minWidth: b ? v - C - M : v,
                            color: _,
                            isRound: !b,
                            marginRight: b ? void 0 : -P
                        }, o.default.createElement(c.default, {
                            color: d || "white",
                            use: u > 9 || l ? g[t] : h[t]
                        }, s)));
                    T = [0 === y ? E : null, ...f, 2 === y ? E : null]
                }
                return (o.default.createElement(f, {
                    height: v,
                    inChatCell: i
                }, T))
            }));
            t.default = b
        },
        186: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = c(n(1)),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
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
                l = c(n(2)),
                o = n(6),
                i = c(n(4));

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

            function s() {
                return (s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            const d = (0, r.default)(l.default)({
                paddingTop: 8,
                paddingBottom: 8,
                flexDirection: "row",
                alignItems: "center"
            });
            var f = (0, a.memo)((function(e) {
                const {
                    title: t,
                    action: n,
                    ...r
                } = e, l = (0, o.useTheme)();
                return a.default.createElement(d, s({
                    role: "heading"
                }, r, {
                    css: void 0
                }), a.default.createElement(i.default, {
                    use: "subtext-semibold",
                    color: l.select({
                        dark: l.colors.base70,
                        light: l.colors.base60
                    }),
                    css: {
                        flex: 1,
                        textTransform: "uppercase"
                    }
                }, e.title), n && a.default.createElement(i.default, {
                    as: "button",
                    use: "subtext",
                    disabled: n.disabled,
                    color: n.disabled ? l.semanticColors.disabled : void 0,
                    onClick: n.disabled ? void 0 : n.onClick,
                    css: {
                        backgroundColor: "transparent",
                        ":active": {
                            opacity: n.disabled ? void 0 : .6
                        }
                    }
                }, n.title))
            }));
            t.default = f
        },
        193: function(e, t, n) {
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
                    d: "M21.884 8.866a1.25 1.25 0 010 1.768l-7.19 7.19a.25.25 0 000 .353l7.19 7.19a1.25 1.25 0 01-1.768 1.767l-8.25-8.25a1.25 1.25 0 010-1.768l8.25-8.25a1.25 1.25 0 011.768 0z",
                    clipRule: "evenodd"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        202: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = p(n(27)),
                a = n(87),
                l = p(n(5)),
                o = p(n(1)),
                i = p(n(273)),
                u = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
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
                c = p(n(2)),
                s = n(40),
                d = p(n(171));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const m = (0, o.default)(s.MessageContainer)({
                    justifyContent: "center"
                }),
                h = (0, o.default)(c.default)({
                    marginRight: 8,
                    justifyContent: "center"
                });
            var g = (0, u.memo)((function(e) {
                const {
                    typingUsers: t,
                    isGroup: n,
                    showProfilePicture: a = !!n,
                    height: o,
                    inThreadList: f
                } = e;
                return u.default.createElement(c.default, {
                    css: {
                        flexDirection: "row"
                    }
                }, (() => {
                    if (a && t) {
                        const e = t.map(e => (0, r.default)(e.profilePicture));
                        return (u.default.createElement(h, null, u.default.createElement(d.default, {
                            size: "xsmall",
                            profilePictureUrls: e
                        })))
                    }
                    return null
                })(), u.default.createElement(m, null, u.default.createElement(s.TypingIndicatorContainer, {
                    isSenderViewer: !1,
                    isFirst: !0,
                    isLast: !0,
                    onActivate: null,
                    inThreadList: f,
                    "aria-label": l.default._("User is typing", null, {
                        hk: "3sgSfY"
                    }).toString()
                }, u.default.createElement(i.default, {
                    height: o,
                    useSmallDot: f
                }))))
            }), a.caution_deepEquals);
            t.default = g
        },
        203: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                title: e,
                caption: t,
                imageUrl: n,
                attachment: l,
                icon: s,
                CTAs: f,
                threadKey: p,
                containerWidth: P,
                onButtonHover: w,
                onButtonUnhover: O,
                fitContainerHeight: C = !1
            }) {
                var M;
                const S = (0, c.useTheme)(),
                    T = n || e || t,
                    R = !n && (e || t),
                    x = e || t || f && f.length > 0;
                let A = null;
                const k = null == l ? void 0 : null === (M = l.playableUrlMimeType) || void 0 === M ? void 0 : M.includes("video");
                n && (A = k && l && p ? o.default.createElement(d.default, {
                    attachment: l,
                    videoInfo: null,
                    inThread: !0,
                    sourceUrl: n,
                    threadKey: p
                }) : o.default.createElement(r.default, {
                    imageUrl: n
                }));
                return (o.default.createElement(m, {
                    containerWidth: P,
                    fitContainerHeight: C
                }, o.default.createElement(i.default, null, A), x && o.default.createElement(g, null, T && o.default.createElement(h, {
                    hasButtons: f.length > 0
                }, R && o.default.createElement(i.default, {
                    css: {
                        alignSelf: "flex-start"
                    }
                }, s), o.default.createElement(y, null, o.default.createElement(b, {
                    use: "body-semibold",
                    wrapText: !0,
                    numberOfLines: 3
                }, e), o.default.createElement(E, null, o.default.createElement(_, {
                    use: "subtext",
                    wrapText: !0,
                    color: S.colors.base70,
                    numberOfLines: 5
                }, t)))), f.map((e, t) => {
                    const n = a.default._("Button to execute action: {button title}", [a.default._param("button title", e.ctaTitle)], {
                        hk: "1qyN7m"
                    }).toString();
                    return (o.default.createElement(v, {
                        key: t,
                        telemetryName: "xmaCTA",
                        telemetryContext: {
                            title: e.ctaTitle
                        },
                        size: u.RectangleButtonSize.Jumbo,
                        use: u.RectangleButtonUse.MatchTheme,
                        "aria-label": n,
                        caption: e.ctaTitle,
                        disabled: !e.enabled || !e.onClick,
                        onClick: e.onClick,
                        buttonColor: S.select({
                            dark: S.colors.base50,
                            light: "#FFFFFF"
                        }),
                        title: e.label || void 0,
                        onMouseEnter: () => {
                            e.label && w && w()
                        },
                        onMouseLeave: () => {
                            e.label && O && O()
                        }
                    }))
                }))))
            }, t.MAX_CONTAINER_WIDTH = t.MIN_CONTAINER_WIDTH = void 0;
            var r = p(n(277)),
                a = p(n(5)),
                l = p(n(1)),
                o = p(n(0)),
                i = p(n(2)),
                u = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(16)),
                c = n(6),
                s = p(n(4)),
                d = p(n(347));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.MIN_CONTAINER_WIDTH = "157px";
            t.MAX_CONTAINER_WIDTH = "264px";
            const m = (0, l.default)(i.default)(e => ({
                    width: e.containerWidth,
                    minWidth: "157px",
                    fontSize: 15,
                    overflow: "hidden",
                    margin: 0,
                    padding: 0,
                    height: 1 == e.fitContainerHeight ? "100%" : "auto"
                })),
                h = (0, l.default)(i.default)(e => ({
                    width: "100%",
                    paddingBottom: e.hasButtons ? 12 : 0,
                    flexDirection: "row",
                    alignItems: "center"
                })),
                g = (0, l.default)(i.default)({
                    padding: 12,
                    flex: 1,
                    justifyContent: "space-between"
                }),
                y = (0, l.default)(i.default)({
                    flex: 1,
                    paddingRight: 4
                }),
                b = (0, l.default)(s.default)({
                    lineHeight: "20px"
                }),
                E = (0, l.default)(i.default)({
                    justifyContent: "center"
                }),
                _ = (0, l.default)(s.default)({
                    lineHeight: "18px"
                }),
                v = (0, l.default)(u.default)({
                    margin: 0,
                    ":not(:last-child)": {
                        marginBottom: 8
                    }
                })
        },
        204: function(e, t, n) {
            "use strict";
            let r, a;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Reducer = function(e, t) {
                    switch (t.type) {
                        case a.FinishedLoading:
                            if (e.playState === r.Loading) return e.shouldBePlaying ? {
                                volume: e.volume,
                                isMuted: e.isMuted,
                                playState: r.Playing,
                                duration: t.duration,
                                timeRemaining: t.duration - e.currentTime
                            } : 0 === e.currentTime ? {
                                volume: e.volume,
                                isMuted: e.isMuted,
                                playState: r.Ready,
                                duration: t.duration,
                                timeRemaining: t.duration
                            } : {
                                volume: e.volume,
                                isMuted: e.isMuted,
                                playState: r.Paused,
                                duration: t.duration,
                                timeRemaining: t.duration - e.currentTime
                            };
                            break;
                        case a.TogglePlay:
                            if (e.playState === r.Playing) return {
                                ...e,
                                playState: r.Paused
                            };
                            if (e.playState === r.Paused) return {
                                ...e,
                                playState: r.Playing
                            };
                            if (e.playState === r.Ready) return {
                                ...e,
                                playState: r.Playing
                            };
                            break;
                        case a.Pause:
                            if (e.playState === r.Playing) return {
                                ...e,
                                playState: r.Paused
                            };
                            break;
                        case a.StopPlayback:
                            if (e.playState === r.Playing) return {
                                ...e,
                                isMuted: !0,
                                playState: r.Ready,
                                timeRemaining: e.duration
                            };
                            break;
                        case a.Play:
                            if (e.playState === r.Paused) return {
                                ...e,
                                playState: r.Playing
                            };
                            if (e.playState === r.Ready) return {
                                ...e,
                                playState: r.Playing,
                                timeRemaining: e.duration
                            };
                            break;
                        case a.Seek:
                            if (e.playState === r.Playing || e.playState === r.Paused) return {
                                ...e,
                                timeRemaining: t.timeRemaining
                            };
                            if (e.playState === r.Ready) return {
                                ...e,
                                playState: r.Paused,
                                timeRemaining: t.timeRemaining
                            };
                            break;
                        case a.ChangeVolume:
                            return {
                                ...e, volume: t.volume, isMuted: !1
                            };
                        case a.ToggleMute:
                            return {
                                ...e, isMuted: !e.isMuted
                            };
                        case a.TimeUpdate:
                            if (e.playState !== r.Loading) return {
                                ...e,
                                timeRemaining: Math.min(Math.max(0, e.duration - t.currentTime), e.duration)
                            };
                            break;
                        case a.PersistPlayState:
                            if (e.playState === r.Loading) return {
                                ...e,
                                currentTime: t.currentTime,
                                shouldBePlaying: t.isPlaying,
                                volume: t.volume,
                                isMuted: t.isMuted
                            }; {
                                const n = e.duration - t.currentTime;
                                return {
                                    ...e,
                                    timeRemaining: n,
                                    playState: t.isPlaying ? r.Playing : r.Paused,
                                    volume: t.volume,
                                    isMuted: t.isMuted
                                }
                            }
                    }
                    return e
                }, t.Actions = t.States = void 0, t.States = r,
                function(e) {
                    e.Loading = "loading", e.Ready = "ready", e.Playing = "playing", e.Paused = "paused"
                }(r || (t.States = r = {})), t.Actions = a,
                function(e) {
                    e.FinishedLoading = "finished loading", e.TogglePlay = "toggle play", e.Play = "play", e.Pause = "pause", e.StopPlayback = "stop playback", e.Seek = "seek", e.ChangeVolume = "change volume", e.ToggleMute = "toggle mute", e.TimeUpdate = "time update", e.PersistPlayState = "persist play state"
                }(a || (t.Actions = a = {}))
        },
        205: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.AudioVideoActions = void 0;
            var r = n(76);
            const a = {
                audio: {
                    initializeAudio: (0, r.actionCreator)("audioVideo/initializeAudio", (e, t) => ({
                        threadKey: e,
                        attachmentFbid: t
                    })),
                    togglePlay: (0, r.actionCreator)("audioVideo/toggleAudio", (e, t) => ({
                        threadKey: e,
                        attachmentFbid: t
                    })),
                    finishedLoading: (0, r.actionCreator)("audioVideo/finishedLoading", (e, t, n) => ({
                        threadKey: e,
                        attachmentFbid: t,
                        duration: n
                    })),
                    stopPlayback: (0, r.actionCreator)("audioVideo/stopPlayback", (e, t) => ({
                        threadKey: e,
                        attachmentFbid: t
                    })),
                    updateTime: (0, r.actionCreator)("audioVideo/updateTime", (e, t, n) => ({
                        threadKey: e,
                        attachmentFbid: t,
                        currentTime: n
                    }))
                },
                video: {
                    persistVideoPlaytime: (0, r.actionCreator)("audioVideo/persistVideoPlaytime", e => ({
                        persistArgs: e
                    }))
                },
                cleanUpThreadInfo: (0, r.actionCreator)("audioVideo/clean_up_thread_info", e => ({
                    threadKey: e
                }))
            };
            t.AudioVideoActions = a
        },
        211: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BaseProfilePhoto = function(e) {
                const t = (0, i.useTheme)(),
                    [n, r] = (0, l.useState)(!1);
                return l.default.createElement(s, {
                    css: e.css,
                    clipPathId: e.clipPathId,
                    size: e.size
                }, n || !e.src ? l.default.createElement(a.default, {
                    color: t.select({
                        dark: t.colors.base50,
                        light: t.colors.base30
                    })
                }) : l.default.createElement(d, {
                    src: e.src,
                    onError: () => r(!0),
                    onLoad: () => r(!1)
                }))
            };
            var r = c(n(1)),
                a = c(n(892)),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
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
                o = c(n(2)),
                i = n(6);

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
            const s = (0, r.default)(o.default)(e => ({
                    clipPath: e.clipPathId ? `url(#${e.clipPathId})` : void 0,
                    borderRadius: "50%",
                    overflow: "hidden",
                    height: e.size,
                    width: e.size
                }), e => e.css),
                d = r.default.img({
                    height: "100%",
                    width: "100%",
                    objectFit: "cover"
                })
        },
        247: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, a.default)(),
                    {
                        width: n,
                        height: r,
                        gravity: o = "center",
                        resizable: i,
                        persistentWindowKey: u,
                        maximizable: c,
                        hideOnClose: s
                    } = e;
                (0, l.useLayoutEffect)(() => {
                    let e = !1;
                    void 0 !== u && (e = t.window.restorePersistentWindow(u)), n && r && !e && t.window.setBounds(function(e, t) {
                        const {
                            x: n,
                            y: r,
                            width: a,
                            height: l
                        } = e, o = a - t.width, i = l - t.height, u = (e, t, n) => {
                            switch (e) {
                                case "start":
                                    return t + n;
                                case "center":
                                    return t + n / 2;
                                default:
                                    return t
                            }
                        };
                        return {
                            x: u(t.gravity, n, o),
                            y: u(t.gravity, r, i),
                            width: t.width,
                            height: t.height
                        }
                    }(t.window.getBounds(), {
                        width: n,
                        height: r,
                        gravity: o
                    }), !0), null != i && t.window.setResizable(i), null != c && t.window.setMaximizable(c), null != s && t.window.setHideOnClose(s)
                }, [n, r, i, c, o, u, s, t])
            };
            var r, a = (r = n(102)) && r.__esModule ? r : {
                    default: r
                },
                l = n(0)
        },
        250: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, a = n(8),
                l = n(67),
                o = (r = n(9)) && r.__esModule ? r : {
                    default: r
                },
                i = n(0);
            class u extends i.Component {
                constructor(...e) {
                    super(...e), this._loggedReactError = !1, this.state = {
                        error: null,
                        info: null
                    }
                }
                componentDidMount() {
                    this.props.listenToGlobalErrors && (window.onerror = (e, t, n, r, l) => {
                        var i;
                        "ResizeObserver loop limit exceeded" !== e && ((null == l ? void 0 : null === (i = l.stack) || void 0 === i ? void 0 : i.match(/react-dom\.(development|production\.min)\.js/m)) || (o.default.performance.markEvent(a.PerformanceEvents.APP_JS_CRASH), o.default.diagnostics.uploadJSCrash(l ? l.stack ? l.stack : l.toString() : e.toString()), this.setState({
                            error: l || e,
                            info: l && l.info
                        })))
                    })
                }
                componentDidCatch(e, t) {
                    o.default.asl.incrementStat(l.AslStat.ErrorBoundaryDidCatch, 1), this._loggedReactError = !0;
                    const n = `Component stack: ${t.componentStack}`;
                    o.default.metrics.trackStrictError(e, "ErrorBoundary", "unknown-target", {
                        "react-stack": n
                    }), o.default.diagnostics.uploadJSCrash(e.stack || e.toString(), n, this.props.component), this.setState({
                        error: e,
                        info: n
                    })
                }
                render() {
                    const {
                        children: e,
                        fallback: t
                    } = this.props, {
                        error: n,
                        info: r
                    } = this.state;
                    return n ? t(n, r) : e || null
                }
            }
            t.default = u
        },
        254: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, o.useRef)(null),
                    n = (0, o.useCallback)(() => {
                        const e = t.current;
                        null != e && (e.value = "", e.click())
                    }, [t]);
                return (0, a.useShortcut)(e.shortcut, n), o.default.createElement(o.default.Fragment, null, o.default.createElement(u, {
                    accept: e.fileTypes.join(","),
                    multiple: e.multiple,
                    type: "file",
                    ref: t,
                    onChange: t => {
                        t.currentTarget.files && e.onFilesSelected(t.currentTarget.files)
                    }
                }), e.children(n))
            };
            var r, a = n(84),
                l = (r = n(1)) && r.__esModule ? r : {
                    default: r
                },
                o = function(e) {
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
                return i = function() {
                    return e
                }, e
            }
            const u = l.default.input({
                display: "none"
            })
        },
        256: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 18 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M9 12.5A2.25 2.25 0 119 8a2.25 2.25 0 010 4.5zM9 20.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM6.75 25.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        27: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = i, t.getMediaUrlWithFallbackRewrite = u, t.getMediaUrlFromUserProfile = function(e, t) {
                if (!e) return "";
                return u((0, r.default)(e), t)
            };
            var r = o(n(840)),
                a = o(n(408)),
                l = o(n(185));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e) {
                if (!e) return "";
                const {
                    primaryUrl: t,
                    expiryTimestamp: n,
                    fallbackUrl: r
                } = e;
                return t ? n >= (0, l.default)().subtract(1, "minute").unix() || 0 === n ? t : r : ""
            }

            function u(e, t) {
                const n = e.fallbackUrl ? (0, a.default)(e.fallbackUrl, t) : "";
                return i({
                    primaryUrl: e.primaryUrl,
                    expiryTimestamp: e.expiryTimestamp,
                    fallbackUrl: n
                })
            }
        },
        270: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, o.useMemo)(() => ({
                    createPortalWindow: s
                }), []);
                return (o.default.createElement(u.Provider, {
                    value: t
                }, e.children))
            }, t.useWindowPortalManager = function() {
                return (0, o.useContext)(u)
            };
            var r, a = (r = n(9)) && r.__esModule ? r : {
                    default: r
                },
                l = n(387),
                o = function(e) {
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
                return i = function() {
                    return e
                }, e
            }
            const u = (0, o.createContext)({
                    createPortalWindow: () => null
                }),
                c = {
                    resizable: !1,
                    maximizable: !1,
                    width: void 0,
                    height: void 0,
                    modal: !1
                };

            function s(e, t) {
                const n = JSON.stringify({
                        ...c,
                        ...e
                    }),
                    r = window.open("about:blank", n);
                if (r) {
                    r.document.write("<!doctype html><html><body></body></html>");
                    const n = r.document.createElement("div");
                    n.id = "root", r.document.body.appendChild(n), r.document.body.style.backgroundColor = l.windowbackgroundColorsByVibrancy[t];
                    const o = a.default.portal.getPortalWindowKey(e.id);
                    if (o) {
                        const t = a.default.portal.getPortalWindow(e.id);
                        return o && t ? {
                            container: n,
                            portalWindow: r,
                            portalWindowKey: o,
                            portalBridge: a.default.portal.createPortalBridge(t, a.default)
                        } : null
                    }
                }
                return null
            }
        },
        271: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.PRESENCE_RECENTLY_ACTIVE_PATH_XLONG_32 = t.PRESENCE_RECENTLY_ACTIVE_PATH_LONG_32 = t.PRESENCE_RECENTLY_ACTIVE_PATH_MEDIUM_32 = t.PRESENCE_RECENTLY_ACTIVE_PATH_SHORT_32 = t.PRESENCE_RECENTLY_ACTIVE_PATH_XLONG_50 = t.PRESENCE_RECENTLY_ACTIVE_PATH_LONG_50 = t.PRESENCE_RECENTLY_ACTIVE_PATH_MEDIUM_50 = t.PRESENCE_RECENTLY_ACTIVE_PATH_SHORT_50 = t.APP_HEADER_PHOTO_PATH_32 = t.PRESENCE_PATH = void 0;
            var r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, l) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, l, o) : n[l] = e[l]
                    } n.default = e, t && t.set(e, n);
                return n
            }(n(0));

            function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function() {
                    return e
                }, e
            }
            t.PRESENCE_PATH = "presenceClipPath";
            t.APP_HEADER_PHOTO_PATH_32 = "appHeaderPhotoPath32";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_SHORT_50 = "presenceRecentlyActivePathShort50";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_MEDIUM_50 = "presenceRecentlyActivePathMedium50";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_LONG_50 = "presenceRecentlyActivePathLong50";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_XLONG_50 = "presenceRecentlyActivePathXLong50";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_SHORT_32 = "presenceRecentlyActivePathShort32";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_MEDIUM_32 = "presenceRecentlyActivePathMedium32";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_LONG_32 = "presenceRecentlyActivePathLong32";
            t.PRESENCE_RECENTLY_ACTIVE_PATH_XLONG_32 = "presenceRecentlyActivePathXLong32";
            const l = r.default.createElement("path", {
                    d: "M27.4347 38.5725C25.1364 39.4934 22.6273 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20C40 22.6273 39.4934 25.1364 38.5725 27.4347C37.2765 26.5304 35.7002 26 34 26C29.5817 26 26 29.5817 26 34C26 35.7002 26.5304 37.2765 27.4347 38.5725Z",
                    fill: "black"
                }),
                o = r.default.createElement("path", {
                    d: "M29.2429 49.6414C27.8638 49.8772 26.4463 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 28.2067 49.3962 31.2724 48.2962 34.0897C47.0195 33.3948 45.5559 33 44 33H34C29.0294 33 25 37.0294 25 42C25 45.224 26.6952 48.052 29.2429 49.6414Z",
                    fill: "black"
                }),
                i = r.default.createElement("path", {
                    d: "M23.8203 49.9727C20.9546 48.4672 19 45.4618 19 42C19 37.0294 23.0294 33 28 33H44C45.5559 33 47.0195 33.3948 48.2962 34.0897C49.3962 31.2724 50 28.2067 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.4117 10.5609 49.3567 23.8203 49.9727Z",
                    fill: "black"
                }),
                u = r.default.createElement("path", {
                    d: "M18.5444 49.1585C16.39 47.5142 15 44.9194 15 42C15 37.0294 19.0294 33 24 33H44C45.5559 33 47.0195 33.3948 48.2962 34.0897C49.3962 31.2724 50 28.2067 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 36.5748 7.86618 46.3124 18.5444 49.1585Z",
                    fill: "black"
                }),
                c = r.default.createElement("path", {
                    d: "M8.11385 43.4354C8.03893 42.968 8 42.4885 8 42C8 37.0294 12.0294 33 17 33H44C45.5559 33 47.0195 33.3948 48.2962 34.0897C49.3962 31.2724 50 28.2067 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 32.2977 3.12684 38.8651 8.11385 43.4354Z",
                    fill: "black"
                }),
                s = r.default.createElement("path", {
                    d: "M13.9747 31.873C12.7524 30.6128 12 28.8943 12 27C12 23.134 15.134 20 19 20H27C28.5285 20 29.9426 20.4899 31.0938 21.3213C31.6807 19.6565 32 17.8656 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.1505 6.09433 30.8776 13.9747 31.873Z",
                    fill: "black"
                }),
                d = r.default.createElement("path", {
                    d: "M6.19411 28.6439C6.06722 28.1167 6 27.5662 6 27C6 23.134 9.13401 20 13 20H27C28.5285 20 29.9426 20.4899 31.0938 21.3213C31.6807 19.6565 32 17.8656 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 21.1416 2.42522 25.7167 6.19411 28.6439Z",
                    fill: "black"
                }),
                f = r.default.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M31.8905 14.118C30.713 14.6833 29.3935 15 28 15C23.0294 15 19 10.9706 19 6C19 4.02191 19.6382 2.19288 20.7198 0.707531C19.2279 0.247604 17.6429 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 15.3633 31.9628 14.7353 31.8905 14.118Z",
                    fill: "black"
                }),
                p = r.default.createElement("path", {
                    d: "M6.19411 28.6439C6.06722 28.1167 6 27.5662 6 27C6 23.134 9.13401 20 13 20H27C28.5285 20 29.9426 20.4899 31.0938 21.3213C31.6807 19.6565 32 17.8656 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 21.1416 2.42522 25.7167 6.19411 28.6439Z",
                    fill: "black"
                }),
                m = r.default.createElement("path", {
                    d: "M1.94316 23.6487C3.18563 21.4693 5.5306 20 8.21875 20H26.7812C28.3844 20 29.8655 20.5226 31.0634 21.4067C31.6697 19.7179 32 17.8975 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 18.7704 0.70412 21.3764 1.94316 23.6487Z",
                    fill: "black"
                });

            function h(e) {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: `presenceClipPath${e}`,
                    transform: `scale(${e/40})`
                }, l)))
            }

            function g() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathShort50"
                }, o)))
            }

            function y() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathMedium50"
                }, i)))
            }

            function b() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathLong50"
                }, u)))
            }

            function E() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathXLong50"
                }, c)))
            }

            function _() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathShort32"
                }, s)))
            }

            function v() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathMedium32"
                }, d)))
            }

            function P() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "appHeaderPhotoPath32"
                }, f)))
            }

            function w() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathLong32"
                }, p)))
            }

            function O() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "presenceRecentlyActivePathXLong32"
                }, m)))
            }
            var C = (0, r.memo)((function() {
                return r.default.createElement(r.default.Fragment, null, h(14), h(28), h(32), h(40), h(50), h(60), h(80), r.default.createElement(g, null), r.default.createElement(y, null), r.default.createElement(b, null), r.default.createElement(E, null), r.default.createElement(_, null), r.default.createElement(v, null), r.default.createElement(w, null), r.default.createElement(O, null), r.default.createElement(P, null))
            }));
            t.default = C
        },
        272: function(e, t, n) {
            "use strict";
            let r;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.NotificationTypes = t.PILL_ICON_SIZES = t.PILL_SIZES = t.PillSize = void 0, t.PillSize = r,
                function(e) {
                    e.Medium = "medium", e.Large = "large"
                }(r || (t.PillSize = r = {}));
            const a = {
                [r.Medium]: 28,
                [r.Large]: 36
            };
            t.PILL_SIZES = a;
            const l = {
                [r.Medium]: 22,
                [r.Large]: 28
            };
            let o;
            t.PILL_ICON_SIZES = l, t.NotificationTypes = o,
                function(e) {
                    e.JOIN_CALL = "join_call", e.LEAVE_CALL = "leave_call", e.CONNECTING = "connecting", e.NO_NETWORK = "no_network", e.MESSAGE_TEXT = "message", e.TYPING = "typing", e.PEER_START_SCREEN_SHARE = "peer_start_screen_share", e.PEER_STOP_SCREEN_SHARE = "peer_stop_screen_share", e.MODERATOR_ENABLE_SCREEN_SHARE = "moderator_enable_screen_share", e.MODERATOR_DISABLE_SCREEN_SHARE = "moderator_disable_screen_share", e.YOU_ENABLED_SCREEN_SHARE = "you_enabled_screen_share", e.YOU_DISABLED_SCREEN_SHARE = "you_disabled_screen_share", e.COWATCH_NOT_AVAILABLE = "cowatch_not_available", e.COWATCH_REMOTE_PLAY = "cowatch_play_action", e.COWATCH_REMOTE_PAUSE = "cowatch_remote_pause", e.COWATCH_REMOTE_STOP = "cowatch_remote_stop", e.COWATCH_REMOTE_RESUME = "cowatch_remote_resume", e.COWATCH_REMOTE_SEEK_FORWARD = "cowatch_remote_seek_forward", e.COWATCH_REMOTE_SEEK_BACKWARD = "cowatch_remote_seek_backward", e.COWATCH_REMOTE_AUTOPLAY = "cowatch_remote_autoplay", e.COWATCH_REMOTE_ACTION = "cowatch_remote_action", e.COWATCH_USER_ENDED = "cowatch_user_ended", e.SOFT_MUTE = "soft_mute", e.AUDIO_INPUT_OUTPUT_DEVICE_CHANGED = "audio_input_output_device_changed", e.AUDIO_INPUT_DEVICE_CHANGED = "audio_input_device_changed", e.AUDIO_OUTPUT_DEVICE_CHANGED = "audio_output_device_changed", e.ACTIVE_SPEAKER = "active_speaker"
                }(o || (t.NotificationTypes = o = {}))
        },
        274: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getAttachmentCTAs = function(e, t, n, r, a) {
                const l = [];
                e.cta1Id && l.push({
                    ctaId: e.cta1Id,
                    ctaType: e.cta1Type,
                    ctaTitle: e.cta1Title,
                    enabled: !u(e.cta1Type) || !!n,
                    onClick: o(e.cta1Type, e.cta1Id, t, r, a),
                    label: i(e.cta1Type)
                });
                e.cta2Id && l.push({
                    ctaId: e.cta2Id,
                    ctaType: e.cta2Type,
                    ctaTitle: e.cta2Title,
                    enabled: !u(e.cta2Type) || !!n,
                    onClick: o(e.cta2Type, e.cta2Id, t, r, a)
                });
                e.cta3Id && l.push({
                    ctaId: e.cta3Id,
                    ctaType: e.cta3Type,
                    ctaTitle: e.cta3Title,
                    enabled: !u(e.cta3Type) || !!n,
                    onClick: o(e.cta3Type, e.cta3Id, t, r, a)
                });
                return l
            }, t.getAttachmentCTAClickHandler = o, t.getPersistentMenuItemClickHandler = function(e, t) {
                const n = t[e.ctaType];
                if (n) return () => n(e);
                return
            }, t.isRTCXMA = u, t.isPaymentXMA = c, t.isLiveLocationSharing = s, t.findAttachmentCTA = d;
            var r, a = n(8),
                l = (r = n(5)) && r.__esModule ? r : {
                    default: r
                };

            function o(e, t, n, r = [], a) {
                const l = d(t, r);
                if (l && n[e]) return () => {
                    n[e](l)
                }
            }

            function i(e) {
                return c(e) ? l.default._("Open Facebook Pay", null, {
                    hk: "1Fn8ll"
                }).toString() : s(e) ? l.default._("Open Map", null, {
                    hk: "3IFIW8"
                }).toString() : void 0
            }

            function u(e) {
                return e === a.AttachmentCTAType.XMA_RTC_ENDED_AUDIO || e === a.AttachmentCTAType.XMA_RTC_ENDED_VIDEO || e === a.AttachmentCTAType.XMA_RTC_AUDIO || e === a.AttachmentCTAType.XMA_RTC_VIDEO || e === a.AttachmentCTAType.XMA_RTC_MISSED_AUDIO || e === a.AttachmentCTAType.XMA_RTC_MISSED_VIDEO
            }

            function c(e) {
                return e === a.AttachmentCTAType.XMA_P2P_PAYMENT_DETAILS || e === a.AttachmentCTAType.XMA_P2P_REQUEST_PAY || e === a.AttachmentCTAType.XMA_P2P_PAYMENT_DETAILS_RECEIVE_MONEY || e === a.AttachmentCTAType.XMA_P2P_VERIFY_INFO
            }

            function s(e) {
                return e === a.AttachmentCTAType.XMA_LIVE_LOCATION_SHARING
            }

            function d(e, t) {
                if (!t) return;
                return t.find(t => t.ctaId === Number(e))
            }
        },
        275: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    faviconUrl: t,
                    forceBgColor: n
                } = e, r = (0, y.useTheme)();
                if (!t) return h.default.createElement(_, null, h.default.createElement(s.default, null));
                const g = new URL(t);
                if ("ls:" === g.protocol) {
                    const e = g.searchParams.get("icon"),
                        t = (e => {
                            const t = {
                                red: r.colors.red,
                                green: r.colors.green
                            };
                            return e && t[e] ? t[e] : r.colors.base50
                        })(g.searchParams.get("circleColor"));
                    return h.default.createElement(_, {
                        color: n || t
                    }, function(e) {
                        switch (e) {
                            case "phone-missed":
                                return h.default.createElement(f.default, null);
                            case "phone-incoming":
                                return h.default.createElement(d.default, null);
                            case "phone-outgoing":
                                return h.default.createElement(p.default, null);
                            case "camcorder-missed":
                                return h.default.createElement(l.default, null);
                            case "camcorder-incoming":
                                return h.default.createElement(a.default, null);
                            case "camcorder-outgoing":
                                return h.default.createElement(o.default, null);
                            case "phone":
                                return h.default.createElement(m.default, null);
                            case "camcorder":
                                return h.default.createElement(i.default, null);
                            case "currency-usd":
                                return h.default.createElement(u.default, null);
                            case "document-complete":
                                return h.default.createElement(c.default, null);
                            default:
                                return h.default.createElement(s.default, null)
                        }
                    }(e))
                }
                return h.default.createElement(_, {
                    noPadding: !0
                }, h.default.createElement(E, {
                    src: t
                }))
            };
            var r = b(n(1)),
                a = b(n(842)),
                l = b(n(843)),
                o = b(n(844)),
                i = b(n(78)),
                u = b(n(845)),
                c = b(n(276)),
                s = b(n(846)),
                d = b(n(847)),
                f = b(n(848)),
                p = b(n(849)),
                m = b(n(145)),
                h = b(n(0)),
                g = b(n(2)),
                y = n(6);

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const E = r.default.img({
                    width: "100%",
                    height: "100%",
                    objectFit: "cover !important"
                }),
                _ = (0, r.default)(g.default)(e => ({
                    height: "36px",
                    width: "36px",
                    backgroundColor: e.color || e.theme.colors.base50,
                    borderRadius: "50%",
                    color: "white",
                    padding: e.noPadding ? 0 : 5,
                    marginRight: "12px",
                    overflow: "hidden"
                }))
        },
        276: function(e, t, n) {
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
                    d: "M18 8a1 1 0 00-1-1h-6a2 2 0 00-2 2v18a2 2 0 002 2h14a2 2 0 002-2V17a1 1 0 00-1-1h-4a4 4 0 01-4-4V8zm-6 7a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm1 3.5a1 1 0 100 2h10a1 1 0 100-2H13zm0 4.5a1 1 0 100 2h10a1 1 0 100-2H13z",
                    clipRule: "evenodd"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M22 14h4.01a.99.99 0 00.7-1.69l-5.02-5.02a.99.99 0 00-1.69.7V12a2 2 0 002 2z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        277: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                imageUrl: e
            }) {
                const [t, n] = (0, a.useState)(!1);
                return (a.default.createElement(a.default.Fragment, null, a.default.createElement(o.default, {
                    loaded: t,
                    renderLoadingContent: () => a.default.createElement(f, null, a.default.createElement(i.RectangleShimmer, null)),
                    renderLoadedContent: () => a.default.createElement(s, null, a.default.createElement(d, {
                        imageUrl: e
                    }), a.default.createElement("img", {
                        src: e,
                        style: {
                            height: "100%",
                            borderRadius: 0,
                            position: "absolute",
                            objectFit: "scale-down"
                        }
                    }))
                }), a.default.createElement("img", {
                    src: e,
                    onLoad: () => n(!0),
                    style: {
                        display: "none"
                    }
                })))
            };
            var r = c(n(1)),
                a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
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
                l = c(n(2)),
                o = c(n(589)),
                i = n(100);

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
            const s = (0, r.default)(l.default)({
                alignItems: "center",
                width: "100%",
                height: 250,
                borderRadius: 0,
                overflow: "hidden"
            });
            const d = (0, r.default)(l.default)(e => {
                    return {
                        filter: "blur(50px)",
                        backgroundImage: e.imageUrl ? (t = e.imageUrl, "url('" + t.replace(/[\ud800-\udfff].|[^-a-zA-Z0-9./_?]/g, e => "\\" + e.codePointAt(0).toString(16) + " ") + "')") : void 0,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        position: "relative",
                        transform: "scale(2.0)",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden"
                    };
                    var t
                }),
                f = (0, r.default)(l.default)({
                    minHeight: 250
                })
        },
        278: function(e, t, n) {
            "use strict";

            function r(e) {
                if (e.current) {
                    const t = e.current.getBoundingClientRect();
                    return {
                        x: t.left,
                        y: t.top,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    }
                }
                return null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getElementPosition = r, t.getClickPositionInsideScrubber = function(e, t) {
                const n = e.clientX,
                    a = r(t);
                if (a) {
                    const e = (n - a.x) / a.width;
                    return Math.min(Math.max(0, e), 1)
                }
                return 0
            }
        },
        294: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ProfilePhotoRecentlyActivePillXLong32 = t.ProfilePhotoRecentlyActivePillLong32 = t.ProfilePhotoRecentlyActivePillMedium32 = t.ProfilePhotoRecentlyActivePillShort32 = t.ProfilePhotoRecentlyActivePillXLong50 = t.ProfilePhotoRecentlyActivePillLong50 = t.ProfilePhotoRecentlyActivePillMedium50 = t.ProfilePhotoRecentlyActivePillShort50 = t.ProfilePhotoPresence = void 0;
            var r = n(8),
                a = n(166),
                l = c(n(1)),
                o = n(6),
                i = c(n(358)),
                u = c(n(0));

            function c(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const s = {
                    xxsmall: {
                        presenceSize: 3.5,
                        presenceLeft: 10,
                        presenceBottom: 1
                    },
                    xsmall: {
                        presenceSize: 7,
                        presenceLeft: 20,
                        presenceBottom: 1
                    },
                    small: {
                        presenceSize: 8,
                        presenceLeft: 23,
                        presenceBottom: 1
                    },
                    medium: {
                        presenceSize: 10,
                        presenceLeft: 29,
                        presenceBottom: 1
                    },
                    large: {
                        presenceSize: 12,
                        presenceLeft: 36,
                        presenceBottom: 2
                    },
                    xlarge: {
                        presenceSize: 15,
                        presenceLeft: 43,
                        presenceBottom: 2
                    },
                    xxlarge: {
                        presenceSize: 20,
                        presenceLeft: 58,
                        presenceBottom: 2
                    }
                },
                d = {
                    xxsmall: {
                        size: 5,
                        left: 9,
                        bottom: 9
                    },
                    xsmall: {
                        size: 11,
                        left: 18,
                        bottom: 2
                    },
                    small: {
                        size: 13,
                        left: 21,
                        bottom: 0
                    },
                    medium: {
                        size: 16,
                        left: 26,
                        bottom: -2
                    },
                    large: {
                        size: 18,
                        left: 33,
                        bottom: -2
                    },
                    xlarge: {
                        size: 24,
                        left: 39,
                        bottom: -3
                    },
                    xxlarge: {
                        size: 32,
                        left: 51,
                        bottom: -4
                    }
                },
                f = ({
                    dnd: e = !1,
                    presence: t,
                    size: n
                }) => {
                    const r = (0, o.useTheme)();
                    return e ? u.default.createElement(m, {
                        size: n
                    }, u.default.createElement(i.default, {
                        size: d[n].size,
                        color: r.colors.base60
                    })) : u.default.createElement(p, {
                        presence: t,
                        size: n
                    })
                };
            t.ProfilePhotoPresence = f;
            const p = l.default.div(e => ({
                borderRadius: "50%",
                height: s[e.size].presenceSize,
                width: s[e.size].presenceSize,
                backgroundColor: e.presence === r.PresenceType.Active ? e.theme.colors.green : void 0,
                position: "absolute",
                left: s[e.size].presenceLeft,
                bottom: s[e.size].presenceBottom
            }), e => e.css);
            f.defaultProps = {
                size: "small"
            };
            const m = l.default.div(e => ({
                    position: "absolute",
                    height: d[e.size].size,
                    width: d[e.size].size,
                    left: d[e.size].left,
                    bottom: d[e.size].bottom
                })),
                h = l.default.div(e => ({
                    borderRadius: 6,
                    padding: "0px 2px",
                    backgroundColor: e.theme.select({
                        dark: `${(0,a.addAlpha)(e.theme.colors.green,.25)}`,
                        light: `${(0,a.addAlpha)(e.theme.colors.green,.15)}`
                    }),
                    position: "absolute"
                })),
                g = (0, l.default)(h)(e => ({
                    height: 12.5,
                    width: e.width,
                    left: 28,
                    bottom: 2
                }));
            t.ProfilePhotoRecentlyActivePillShort50 = g;
            const y = (0, l.default)(h)(e => ({
                height: 12.5,
                width: e.width,
                left: 22,
                bottom: 2
            }));
            t.ProfilePhotoRecentlyActivePillMedium50 = y;
            const b = (0, l.default)(h)(e => ({
                height: 14,
                width: e.width,
                left: 18,
                bottom: 1
            }));
            t.ProfilePhotoRecentlyActivePillLong50 = b;
            const E = (0, l.default)(h)(e => ({
                height: 14,
                width: e.width,
                left: 11,
                bottom: 1
            }));
            t.ProfilePhotoRecentlyActivePillXLong50 = E;
            const _ = (0, l.default)(h)(e => ({
                height: 10,
                width: e.width,
                left: 14.4,
                bottom: .5
            }));
            t.ProfilePhotoRecentlyActivePillShort32 = _;
            const v = (0, l.default)(h)(e => ({
                height: 10,
                width: e.width,
                left: 7.5,
                bottom: .5
            }));
            t.ProfilePhotoRecentlyActivePillMedium32 = v;
            const P = (0, l.default)(h)(e => ({
                height: 11,
                width: e.width,
                left: 8,
                bottom: -1
            }));
            t.ProfilePhotoRecentlyActivePillLong32 = P;
            const w = (0, l.default)(h)(e => ({
                height: 11,
                width: e.width,
                left: 2.5,
                bottom: -.5
            }));
            t.ProfilePhotoRecentlyActivePillXLong32 = w
        },
        343: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    document: t
                } = (0, a.useContext)(r.WindowContext);
                (0, a.useEffect)(() => {
                    t.title = e.toString()
                }, [e, t])
            };
            var r = n(35),
                a = n(0)
        },
        346: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(35),
                a = n(270),
                l = n(165),
                o = m(n(235)),
                i = m(n(102)),
                u = m(n(403)),
                c = m(n(29)),
                s = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = p();
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
                d = m(n(126)),
                f = n(6);

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

            function h(e) {
                return (0, u.default)(), s.default.createElement(d.default, {
                    emotionCache: e.emotionCache
                }, e.children)
            }
            var g = (0, s.forwardRef)((function(e, t) {
                const {
                    id: n,
                    onClose: u,
                    children: d,
                    title: p,
                    resizable: m,
                    maximizable: g,
                    width: y,
                    height: b,
                    modal: E,
                    skipParent: _
                } = e, v = (0, f.useTheme)(), P = (0, a.useWindowPortalManager)(), [w, O] = (0, s.useState)(null), C = (0, i.default)(), M = null == w ? void 0 : w.portalBridge;
                (0, s.useEffect)(() => {
                    const e = P.createPortalWindow({
                        id: n,
                        title: p,
                        resizable: m,
                        maximizable: g,
                        width: y,
                        height: b,
                        modal: E,
                        skipParent: _
                    }, (0, l.getVibrancyForTheme)(v.name));
                    if (e) {
                        const t = C.portal.getPortalWindow(n);
                        if (t) return t.once("close", u), O(e), () => {
                            t.isDestroyed() || t.close()
                        }
                    }
                    return () => {}
                }, [n, u, P, C]), (0, s.useImperativeHandle)(t, () => ({
                    focus: () => {
                        if (w) {
                            const e = C.portal.getPortalWindow(n);
                            e && !e.isDestroyed() && e.focus()
                        }
                    }
                })), (0, s.useEffect)(() => {
                    M && setTimeout(() => M.window.show(), 250)
                }, [M]);
                const S = w ? w.container : null,
                    T = (0, s.useMemo)(() => S ? (0, o.default)({
                        prefix: !1,
                        container: S
                    }) : null, [S]),
                    R = (0, s.useMemo)(() => w ? {
                        inPortal: !0,
                        window: w.portalWindow,
                        document: w.portalWindow.document,
                        windowKey: w.portalWindowKey,
                        bridge: w.portalBridge
                    } : null, [w]);
                if (w && T && R) {
                    const e = s.default.createElement(r.WindowContext.Provider, {
                        value: R
                    }, s.default.createElement(h, {
                        emotionCache: T
                    }, d));
                    return c.default.createPortal(e, S)
                }
                return null
            }));
            t.default = g
        },
        347: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = y(n(850)),
                a = n(204),
                l = y(n(854)),
                o = y(n(5)),
                i = y(n(1)),
                u = y(n(169)),
                c = g(n(0)),
                s = g(n(2)),
                d = n(6),
                f = n(170),
                p = n(205),
                m = n(11);

            function h() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return h = function() {
                    return e
                }, e
            }

            function g(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = h();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function y(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const b = (0, i.default)(s.default)(e => ({
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "50%",
                height: 60,
                justifyContent: "center",
                left: "50%",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: 60
            }));

            function E(e, t) {
                return Math.abs(e - t) < 1
            }
            var _ = c.default.memo(c.default.forwardRef((function(e, t) {
                const {
                    attachment: n,
                    videoInfo: i,
                    sourceUrl: h,
                    threadKey: g,
                    openMediaViewer: y,
                    inThread: _,
                    onActivate: v,
                    onContextMenu: P,
                    playOnHover: w,
                    className: O,
                    telemetryName: C,
                    enableVideoPlayer: M = !0,
                    isMediaViewerOpen: S = !1
                } = e, [T, R] = (0, c.useReducer)(a.Reducer, {
                    playState: a.States.Loading,
                    volume: 1,
                    isMuted: !1,
                    shouldBePlaying: !1,
                    currentTime: 0
                }), x = (0, m.useDispatch)(), A = (0, d.useTheme)();
                let k = (0, c.useRef)(null);
                const L = (0, c.useRef)(null),
                    j = (0, c.useRef)(null),
                    [I, N] = (0, c.useState)(!1),
                    [D, z] = (0, c.useState)(null),
                    F = (0, c.useCallback)(e => {
                        "function" == typeof t ? t(e) : null != t && (t.current = e), k.current = e
                    }, [t]);
                (0, c.useEffect)(() => () => {
                    const e = k.current;
                    if (e) {
                        const t = e.currentTime,
                            r = !e.paused;
                        x(p.AudioVideoActions.video.persistVideoPlaytime({
                            threadKey: g,
                            attachmentFbid: n.attachmentFbid,
                            currentTime: t,
                            isPlaying: r,
                            continueInThread: !0,
                            volume: e.volume,
                            isMuted: e.muted
                        }))
                    }
                }, [n, g, x, k]);
                const H = T.playState === a.States.Playing,
                    B = T.playState === a.States.Paused,
                    U = T.isMuted,
                    W = T.isMuted ? 0 : T.volume;
                let V = 0;
                T.playState !== a.States.Loading && (V = T.duration - T.timeRemaining), (0, c.useEffect)(() => {
                    k.current && (L.current || (L.current = new IntersectionObserver((e, t) => {
                        e.forEach(e => {
                            e.isVisible || !k.current || k.current.paused || R({
                                type: a.Actions.Pause
                            })
                        })
                    }, {
                        threshold: 1
                    })), L.current && L.current.observe(k.current))
                }, [h]), (0, c.useEffect)(() => {
                    S && H && _ && R({
                        type: a.Actions.Pause
                    })
                }, [S, H, _]), (0, c.useEffect)(() => {
                    if (!H && !B) return;
                    const e = k.current;
                    if (e && (H && e.play(), B && e.pause(), e.muted = U, e.volume = W, !E(e.currentTime, V)))
                        if (E(e.currentTime, 0) && E(e.duration, V)) e.pause();
                        else {
                            if (null == V || isNaN(V)) return;
                            e.currentTime = V
                        }
                }, [H, B, U, W, V]);
                const G = e => {
                        R({
                            type: a.Actions.TogglePlay
                        }), e.stopPropagation()
                    },
                    Y = e => {
                        R({
                            type: a.Actions.Pause
                        });
                        const t = T.playState !== a.States.Loading ? T.duration - T.timeRemaining : 0;
                        x(p.AudioVideoActions.video.persistVideoPlaytime({
                            threadKey: g,
                            attachmentFbid: n.attachmentFbid,
                            currentTime: t,
                            isPlaying: T.playState === a.States.Playing,
                            continueInThread: !1,
                            volume: T.volume,
                            isMuted: T.isMuted
                        })), y && y(n), e.stopPropagation()
                    };
                (0, c.useEffect)(() => {
                    if (i) {
                        const e = k.current,
                            t = _ && i.target === f.Targets.Thread || !_ && i.target === f.Targets.Fullscreen;
                        e && t && R({
                            type: a.Actions.PersistPlayState,
                            currentTime: i.playTime || 0,
                            isPlaying: i.playState === f.PlayStates.Playing,
                            volume: i.volume,
                            isMuted: i.isMuted
                        })
                    }
                }, [_, i, k]);
                const Z = () => {
                        w && R({
                            type: a.Actions.Play
                        })
                    },
                    K = () => {
                        w && (R({
                            type: a.Actions.Pause
                        }), k.current && (k.current.currentTime = 0))
                    },
                    $ = () => {
                        R({
                            type: a.Actions.ChangeVolume,
                            volume: Math.max(T.volume - .1, 0)
                        })
                    };
                return c.default.createElement(s.FocusableView, {
                    onMouseEnter: Z,
                    onMouseLeave: K,
                    onMouseMove: () => {
                        D && clearTimeout(D), z(setTimeout(() => {
                            N(!1)
                        }, 2500)), N(!0)
                    },
                    onKeyDown: e => {
                        w || ("ArrowLeft" === e.key && e.altKey ? (e.preventDefault(), e.stopPropagation(), (() => {
                            if (T.playState != a.States.Loading) {
                                const e = Math.min(T.timeRemaining + 5, T.duration);
                                R({
                                    type: a.Actions.Seek,
                                    timeRemaining: e
                                })
                            }
                        })()) : "ArrowRight" === e.key && e.altKey ? (e.preventDefault(), e.stopPropagation(), (() => {
                            if (T.playState != a.States.Loading) {
                                const e = Math.max(T.timeRemaining - 5, 0);
                                R({
                                    type: a.Actions.Seek,
                                    timeRemaining: e
                                })
                            }
                        })()) : "ArrowUp" === e.key ? (e.preventDefault(), e.stopPropagation(), R({
                            type: a.Actions.ChangeVolume,
                            volume: Math.min(T.volume + .1, 1)
                        })) : "ArrowDown" === e.key ? (e.preventDefault(), e.stopPropagation(), $()) : "ArrowDown" === e.key && (e.preventDefault(), e.stopPropagation(), $()))
                    },
                    onActivate: e => {
                        v ? v(e) : _ ? function(e) {
                            e.persist(), 1 === e.detail ? j.current = window.setTimeout(() => {
                                j.current && window.clearTimeout(j.current), G(e), j.current = null
                            }, 150) : null != j.current && (2 === e.detail && Y(e), window.clearTimeout(j.current), j.current = null), e.stopPropagation()
                        }(e) : G(e)
                    },
                    onContextMenu: P,
                    className: O,
                    telemetryName: C,
                    onFocus: () => {
                        D && clearTimeout(D), N(!0), Z()
                    },
                    onBlur: () => {
                        D && clearTimeout(D), z(setTimeout(() => {
                            N(!1)
                        }, 2500)), K()
                    },
                    css: {
                        justifyContent: "center",
                        height: "inherit",
                        width: "inherit",
                        border: _ ? A.select({
                            light: "1px solid " + A.colors.base20,
                            dark: "1px solid " + A.colors.flatBase30
                        }) : "undefined"
                    }
                }, c.default.createElement("video", {
                    className: "messenger-media-viewer-content",
                    muted: !0,
                    "aria-label": o.default._("Video", null, {
                        hk: "wi63p"
                    }).toString(),
                    loop: w,
                    style: {
                        maxWidth: "100%",
                        maxHeight: _ ? 560 : "100%"
                    },
                    onCanPlay: () => {
                        const e = k.current;
                        if (e && T.playState === a.States.Loading) {
                            const t = e.duration;
                            R({
                                type: a.Actions.FinishedLoading,
                                duration: t
                            })
                        }
                    },
                    onEnded: () => {
                        R({
                            type: a.Actions.StopPlayback
                        })
                    },
                    onTimeUpdate: () => {
                        const e = k.current;
                        e && R({
                            type: a.Actions.TimeUpdate,
                            currentTime: e.currentTime
                        })
                    },
                    ref: F
                }, c.default.createElement("source", {
                    src: h,
                    type: n.playableUrlMimeType
                })), w || !M ? c.default.createElement(l.default, {
                    videoState: T,
                    dispatch: R
                }) : T.playState === a.States.Ready ? c.default.createElement(b, null, c.default.createElement(u.default, {
                    size: 35,
                    color: A.semanticColors.textWhite
                })) : c.default.createElement(r.default, {
                    inThread: _,
                    openFullscreen: null != y ? Y : null,
                    videoState: T,
                    dispatch: R,
                    isVisible: I,
                    timeRemaining: T.playState === a.States.Loading ? 0 : T.timeRemaining,
                    videoDuration: T.playState === a.States.Loading ? 0 : T.duration
                }))
            })));
            t.default = _
        },
        354: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, ...t) {
                const {
                    window: n
                } = (0, a.useWindowContext)();
                (0, r.useEffect)(() => {
                    const r = n => {
                        t.every(e => e.current && !e.current.contains(n.target)) && e()
                    };
                    return n.document.addEventListener("mousedown", r, !1), () => {
                        n.document.removeEventListener("mousedown", r, !1)
                    }
                }, [t, e, n])
            };
            var r = n(0),
                a = n(35)
        },
        356: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                error: e,
                info: t
            }) {
                return (0, l.useLayoutEffect)(() => {
                    const {
                        body: e,
                        head: t
                    } = document;
                    if (e && t) {
                        e.style.margin = "0px";
                        const n = document.createElement("style");
                        n.innerHTML = p, t.appendChild(n)
                    }
                }, []), l.default.createElement("div", {
                    style: u
                }, l.default.createElement("div", {
                    style: c
                }), l.default.createElement("center", null, l.default.createElement("span", {
                    style: d
                }, a.default.devName)), l.default.createElement("center", {
                    style: {
                        marginTop: 20
                    }
                }, "An error has occurred, which we have logged"), l.default.createElement("center", {
                    style: {
                        marginTop: 10
                    }
                }, l.default.createElement("button", {
                    style: f,
                    onClick: () => window.location.reload()
                }, "Refresh the Window")), l.default.createElement("pre", {
                    style: s
                }, e.toString()), l.default.createElement("pre", {
                    style: s
                }, t), l.default.createElement("pre", {
                    style: s
                }, e instanceof Error ? e.stack : ""))
            };
            var r, a = (r = n(83)) && r.__esModule ? r : {
                    default: r
                },
                l = function(e) {
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
                }(n(0));

            function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }
            const i = {
                    fontFamily: "IBMVGA8, SF Mono, Monaco, Menlo, Consolas, monospace"
                },
                u = {
                    ...i,
                    height: "100vh",
                    width: "100vw",
                    overflow: "auto",
                    padding: 10,
                    paddingTop: 50,
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    backgroundColor: "#0300CD",
                    color: "#C0C0CC",
                    boxSizing: "border-box"
                },
                c = {
                    WebkitAppRegion: "drag",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50px"
                },
                s = {
                    ...i,
                    fontSize: 16
                },
                d = {
                    ...i,
                    padding: "4px 10px",
                    backgroundColor: "#C0C0CC",
                    color: "#0300CD"
                },
                f = {
                    ...i,
                    fontSize: 16,
                    margin: 10,
                    backgroundColor: "transparent",
                    outline: "#C0C0CC",
                    color: "#C0C0CC"
                },
                p = "\n@font-face {\n  font-family: 'IBMVGA8';\n  src: url(https://int10h.org/webfonts/ibm_vga8.eot);\n  src: url(https://int10h.org/webfonts/ibm_vga8.eot?#iefix) format('embedded-opentype'),\n      url(https://int10h.org/webfonts/ibm_vga8.woff2) format('woff2'),\n      url(https://int10h.org/webfonts/ibm_vga8.woff) format('woff'),\n      url(https://int10h.org/webfonts/ibm_vga8.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n};\n"
        },
        358: function(e, t, n) {
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
                    d: "M28.05 21.933c.266-.597-.383-1.151-1.005-.953a9.995 9.995 0 01-3.045.472c-5.523 0-10-4.477-10-10 0-1.061.165-2.084.472-3.044.199-.623-.356-1.27-.953-1.004A11.002 11.002 0 007 17.453c0 6.075 4.925 11 11 11 4.48 0 8.334-2.678 10.05-6.52z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        38: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                profilePictureUrl: e,
                size: t = "small",
                viewerId: n,
                participants: s,
                presence: m,
                isDndModeOn: y = !1,
                clipPathIcon: b,
                lastActiveTimestampMs: E,
                includeAppHeaderClipPath: _
            }) {
                const {
                    imageSize: v,
                    clipPathId: P
                } = h[t], w = (0, c.default)(), O = e || (null == n || null == s || 0 === s.length ? null : 1 === s.length ? (0, i.default)(s[0].profilePicture) : (0, i.default)((s[0].contactId === n ? s[1] : s[0]).profilePicture));
                if (!y) {
                    if (m === u.PresenceType.Offline && E && (0, d.timestampIsInLast60Min)(E) && E && O) return f.default.createElement(o.default, {
                        src: O,
                        lastActiveTimestampMs: E,
                        onLapsedOutOfRecentlyActive: w,
                        profilePhotoSize: t
                    })
                }
                return (f.default.createElement(p.default, null, f.default.createElement(r.BaseProfilePhoto, {
                    src: O,
                    size: v,
                    clipPathId: _ ? a.APP_HEADER_PHOTO_PATH_32 : y || m === u.PresenceType.Active || null != b ? P : void 0
                }), null != P && (y || m === u.PresenceType.Active) && f.default.createElement(l.ProfilePhotoPresence, {
                    presence: m,
                    dnd: y,
                    size: t
                }), null != P && null != b && f.default.createElement(g, null, b)))
            };
            var r = n(211),
                a = n(271),
                l = n(294),
                o = m(n(893)),
                i = m(n(27)),
                u = n(8),
                c = m(n(618)),
                s = m(n(1)),
                d = n(115),
                f = m(n(0)),
                p = m(n(2));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const h = {
                    xxsmall: {
                        imageSize: 14,
                        clipPathId: `${a.PRESENCE_PATH}14`
                    },
                    xsmall: {
                        imageSize: 28,
                        clipPathId: `${a.PRESENCE_PATH}28`
                    },
                    small: {
                        imageSize: 32,
                        clipPathId: `${a.PRESENCE_PATH}32`
                    },
                    medium: {
                        imageSize: 40,
                        clipPathId: `${a.PRESENCE_PATH}40`
                    },
                    large: {
                        imageSize: 50,
                        clipPathId: `${a.PRESENCE_PATH}50`
                    },
                    xlarge: {
                        imageSize: 60,
                        clipPathId: `${a.PRESENCE_PATH}60`
                    },
                    xxlarge: {
                        imageSize: 80,
                        clipPathId: `${a.PRESENCE_PATH}80`
                    }
                },
                g = s.default.div({
                    left: 29,
                    bottom: 6,
                    height: 10,
                    width: 10,
                    position: "absolute"
                })
        },
        380: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = d(n(787)),
                a = n(8),
                l = d(n(5)),
                o = d(n(346)),
                i = n(28),
                u = n(11),
                c = function(e) {
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
                }(n(0));

            function s() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = {
                closePortalWindow: i.AppContextActions.closePortalWindow
            };
            var p = (0, u.connect)((function(e) {
                return {
                    isFeedbackPortalOpen: !!(0, i.isPortalWindowOpen)(e, a.PortalKey.Feedback)
                }
            }), f)((function({
                isFeedbackPortalOpen: e,
                closePortalWindow: t,
                children: n
            }) {
                const i = (0, c.useCallback)(() => t(a.PortalKey.Feedback), [t]);
                return (c.default.createElement(c.default.Fragment, null, n, e && c.default.createElement(o.default, {
                    id: a.PortalKey.Feedback,
                    title: l.default._("Send Feedback", null, {
                        hk: "3deIww"
                    }).toString(),
                    modal: !0,
                    onClose: i
                }, c.default.createElement(r.default, null))))
            }));
            t.default = p
        },
        381: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                isEmployee: e,
                isNativeRtcEnabled: t,
                userID: n,
                userAccessToken: s,
                databaseFilepath: f,
                windowOptions: m
            }) {
                const [h, y] = (0, d.useState)(null);
                (0, c.default)(o.default._("Send Feedback", null, {
                    hk: "3deIww"
                })), (0, u.default)({
                    width: 460,
                    height: h ? 160 : 460,
                    resizable: !1,
                    maximizable: !1
                });
                const b = (0, i.default)(),
                    E = (0, d.useCallback)(() => {
                        b.window.close()
                    }, [b]),
                    _ = (0, d.useCallback)(e => {
                        y(e)
                    }, [y]);
                return d.default.createElement(p.default, {
                    onEvent: (e, t, n, r) => {
                        b.metrics.trackStrictEvent((0, l.UserInteractionEvent)({
                            event: n,
                            target: t,
                            surface: e,
                            context: r
                        }))
                    }
                }, d.default.createElement(g, null, h ? d.default.createElement(a.default, {
                    isEmployee: e,
                    bugReportID: h,
                    onCloseForm: E
                }) : d.default.createElement(r.default, {
                    userID: n,
                    userAccessToken: s,
                    databaseFilepath: f,
                    onCloseForm: E,
                    onSubmitSuccess: _,
                    isNativeRtcEnabled: t,
                    windowOptions: m
                })))
            };
            var r = h(n(788)),
                a = h(n(816)),
                l = n(24),
                o = h(n(5)),
                i = h(n(102)),
                u = h(n(247)),
                c = h(n(343)),
                s = h(n(1)),
                d = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = m();
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
                f = h(n(2)),
                p = h(n(122));

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function() {
                    return e
                }, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const g = (0, s.default)(f.default)({
                flex: 1,
                justifyContent: "flex-start",
                paddingTop: "40px"
            })
        },
        382: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.reportBug = async function(e, t, n, a, l, o, s, d, f = !1, p) {
                const m = new FormData;

                function h(e, t, n, r) {
                    null != n && m.append(e, new Blob([n], {
                        type: r
                    }), t)
                }
                m.append("user_identifier", n), m.append("config_id", "624618737631578"), m.append("client_time", String(Math.floor(Date.now() / 1e3))), m.append("metadata[description]", t), m.append("metadata[category_id]", i), null != l && h("screenshot", "screenshot.png", l.toPNG(), "image/png");
                null != o && o.forEach(e => {
                    const t = e.name;
                    m.append(t, e, t)
                });
                e.logging.flushNativeLogFiles();
                const g = {};
                let y, b, E, _, v;
                try {
                    y = await e.platform.getDarkTemplarLogFiles(4)
                } catch (e) {
                    g.readDarkTemplarLogsError = e.toString()
                }
                try {
                    b = await e.platform.getMsysLogFiles(4)
                } catch (e) {
                    g.readMsysLogsError = e.toString()
                }
                try {
                    E = await e.platform.getElectronLogFiles()
                } catch (e) {
                    g.readElectronLogsError = e.toString()
                }
                try {
                    _ = await e.platform.getRtcLogFiles(4)
                } catch (e) {
                    g.readRTCLogsError = e.toString()
                }
                try {
                    v = await e.platform.getSquirrelLogFiles()
                } catch (e) {
                    g.readSquirrelLogsError = e.toString()
                }
                const P = {
                    ...y,
                    ...b,
                    ...E,
                    ..._,
                    ...v
                };
                Object.keys(P).forEach(e => {
                    h(e, e, P[e], "text/plain")
                }), s && Object.keys(s).forEach(e => {
                    h(e, e, s[e], "application/octet-stream")
                });
                const w = e.platform.getBuildInfo(),
                    O = await e.diagnostics.getOsMetrics(),
                    C = await e.diagnostics.getMachineMetrics(),
                    M = await e.diagnostics.getMemoryInfoString();
                g.BuildTime = w.timestamp ? new Date(w.timestamp).toString() : null, g.Version = e.platform.getAppVersion(), C && (g.MachineName = `${C.machine.manufacturer} ${C.machine.model}`);
                O && (g.OS = `${O.distro} ${O.release}`);
                g.blocks = d ? c[u[d]].task : "", g["memory info"] = M;
                let S = f && d && "Video & audio calls" === u[d];
                ((null == p ? void 0 : p.localCallId) || (null == p ? void 0 : p.sharedCallId)) && (g.localCallId = p.localCallId || "", g.sharedCallId = p.sharedCallId || "", S = !0);
                let T = "#archon";
                T = S ? T + " #NATIVE_RTC" : T, T += " #worchon-bug", g.tags = T, m.append("metadata[misc_info]", JSON.stringify(g)), m.append("metadata[build_num]", w.number);
                const {
                    id: R
                } = await (0, r.sendGraphApiRequest)("post", e.platform.hostname, `${n}/bugs`, a, m);
                return R
            }, t.FEATURE_AREA_INFO = t.FEATURE_AREAS = void 0;
            var r = n(383),
                a = o(n(83)),
                l = o(n(5));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const i = a.default.flytrapCategoryId,
                u = ["Other", "Chat", "Video & audio calls", "Notifications", "Authentication", "My messages aren't updating"];
            t.FEATURE_AREAS = u;
            const c = {
                Other: {
                    fbt: l.default._("Other", null, {
                        hk: "2ngNj7"
                    }),
                    task: ""
                },
                Chat: {
                    fbt: l.default._("Chat", null, {
                        hk: "1nwbkS"
                    }),
                    task: "T46759375"
                },
                "Video & audio calls": {
                    fbt: l.default._("Video & audio calls", null, {
                        hk: "4t8IaJ"
                    }),
                    task: "T47084972"
                },
                Notifications: {
                    fbt: l.default._("Notifications", null, {
                        hk: "21MvX5"
                    }),
                    task: "T43318614"
                },
                Authentication: {
                    fbt: l.default._("Authentication", null, {
                        hk: "2YQZuA"
                    }),
                    task: "T39257134"
                },
                "My messages aren't updating": {
                    fbt: l.default._("My messages aren't updating", null, {
                        hk: "bSbRq"
                    }),
                    task: "T43557524"
                }
            };
            t.FEATURE_AREA_INFO = c
        },
        383: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.sendGraphApiRequest = async function(e, t, n, u, c, s = {}, d = {}, f) {
                if ("post" !== e && c) throw new Error(`Can not add a body to a ${e.toUpperCase()} request.`);
                "get" === e && (s.access_token = u);
                let p;
                "undefined" != typeof FormData && c instanceof FormData || c instanceof i.default ? (c.append("access_token", u), p = c) : c && (d["Content-Type"] = "application/json", p = JSON.stringify({
                    access_token: u,
                    ...c
                }));
                const m = f || l.default,
                    h = await m((0, o.constructUrl)(t, "graph", n, s), {
                        method: e,
                        headers: d,
                        body: p
                    }),
                    g = await h.json();
                if (400 === h.status && g.error && "OAuthException" === g.error.type) throw new a.AccessDeniedError(n, h.status, g.error);
                if (!h.ok) throw new r.GraphApiError(n, h.status, g.error);
                return g
            };
            var r = n(384),
                a = n(199),
                l = u(n(792)),
                o = n(104),
                i = u(n(793));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        388: function(e, t, n) {
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
                    d: "M8.866 14.116a1.25 1.25 0 011.768 0l7.19 7.19a.25.25 0 00.353 0l7.19-7.19a1.25 1.25 0 011.767 1.768l-8.25 8.25a1.25 1.25 0 01-1.768 0l-8.25-8.25a1.25 1.25 0 010-1.768z",
                    clipRule: "evenodd"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        39: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.formatDuration = function(e) {
                const t = Math.round(e);
                let n = String(t % 60);
                Number(n) < 10 && (n = "0" + n);
                return Math.floor(t / 60) + ":" + n
            }, t.getSecondsOfToday = function(e) {
                return 3600 * e.getHours() + 60 * e.getMinutes() + e.getSeconds()
            }, t.getHour24From12 = l, t.getHour12From24 = o, t.getComponentsFromSeconds = function(e, t) {
                if (e < 0 || e >= 86400) throw new TypeError(`Invalid seconds: ${e}`);
                const n = Math.floor(e / 3600),
                    r = i(Math.floor((e - 3600 * n) / 60).toString());
                switch (t) {
                    case "12h":
                        const {
                            hour: e, period: t
                        } = o(n);
                        return {
                            hour: e, minute: r, period: t
                        };
                    case "24h":
                        return {
                            hour: n.toString(), minute: r
                        }
                }
            }, t.getSecondsFromComponents = function(e, t) {
                const n = u(e.hour),
                    r = u(e.minute);
                if ("12h" === t) return 3600 * l(n, e.period) + 60 * r;
                return 3600 * n + 60 * r
            }, t.isValidHour = function(e, t) {
                const n = u(e);
                return "12h" === t ? n >= 1 && n <= 12 : n >= 0 && n <= 23
            }, t.isValidMinute = function(e) {
                const t = u(e);
                return t >= 0 && t <= 59
            }, t.zeroize = i, t.numberize = u, t.isToday = function(e) {
                const t = new Date;
                return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
            }, t.getUnixTimestamp = c, t.getFirstDayOfWeek = function() {
                return "mon"
            }, t.getDayName = function(e, t) {
                const n = d(t);
                return e.toLocaleString("" === n ? void 0 : n, {
                    weekday: "short"
                })
            }, t.getTimeDiff = s, t.getTimeModeFromLocaleKey = function(e) {
                const t = d(e);
                if ("" !== e) {
                    const e = Intl.DateTimeFormat(t, {
                        timeStyle: "short"
                    }).format(new Date).toLowerCase();
                    return e.includes("am") || e.includes("pm") ? "12h" : "24h"
                }
                return "24h"
            }, t.getFormattedDatetime = function(e, t) {
                return e.toLocaleString(null != t ? t : void 0, {
                    dateStyle: "medium",
                    timeStyle: "short"
                })
            }, t.getTimeLeftUntil = function(e, t) {
                const n = Date.now(),
                    r = new Date(n),
                    l = f(n),
                    o = f(e.getTime()),
                    i = f(p(r, {
                        hours: 0
                    }).getTime()),
                    u = f((s = r, s.setFullYear(s.getFullYear() + 1), s.setMonth(0), s.setDate(1), s.setHours(0), s.setMinutes(0), s.setSeconds(0), s).getTime()),
                    c = o - l;
                var s;
                let d;
                if (l === o) d = a.default._("now", null, {
                    hk: "3itEwP"
                });
                else if (o < l) d = a.default._("in the past", null, {
                    hk: "1o0zPJ"
                });
                else if (c < 3600) {
                    const e = Math.floor(c / 60);
                    d = a.default._({
                        "*": "for {minute_count} minutes",
                        _1: "for {minute_count} minute"
                    }, [a.default._param("minute_count", e), a.default._plural(e)], {
                        hk: "1wQ4lA"
                    })
                } else if (o < i + 86400) {
                    const n = e.toLocaleTimeString(t, {
                        hour: "numeric",
                        minute: "numeric"
                    });
                    d = o >= i ? a.default._("until tomorrow at {until_time}", [a.default._param("until_time", n)], {
                        hk: "1EqNMS"
                    }) : a.default._("until {until_time}", [a.default._param("until_time", n)], {
                        hk: "1hBkz7"
                    })
                } else if (o < u) {
                    const n = e.toLocaleTimeString(t, {
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric"
                    });
                    d = a.default._("until {until_date}", [a.default._param("until_date", n)], {
                        hk: "1bhz11"
                    })
                } else {
                    const n = e.toLocaleTimeString(t, {
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        year: "numeric"
                    });
                    d = a.default._("until {until_date}", [a.default._param("until_date", n)], {
                        hk: "17Kc1H"
                    })
                }
                return d.toString()
            }, t.getTomorrowAt = p, t.getNextWeekMondayAt = m, t.getUnixTimestampFromLabel = function(e) {
                const t = c(new Date);
                switch (e) {
                    case "1hour":
                        return s(t, {
                            hour: 1
                        });
                    case "2hours":
                        return s(t, {
                            hour: 2
                        });
                    case "4hours":
                        return s(t, {
                            hour: 4
                        });
                    case "today":
                        return c(p(new Date, {
                            hours: 8
                        }));
                    case "thisweek":
                        return c(m(new Date, {
                            hours: 0
                        }));
                    case "indefinite":
                        return -1
                }
            }, t.getLocalTime = function(e, t) {
                const n = 60 * e.getTimezoneOffset() * 1e3;
                return new Date(e.getTime() + n + 60 * t * 1e3)
            }, t.formatTimeSecondsToHMS = function(e) {
                const t = Math.floor(e / 3600),
                    n = Math.floor(e / 60 % 60),
                    r = Math.floor(e % 60);
                return t ? a.default._("{hours}:{minutes}:{seconds}", [a.default._param("hours", t), a.default._param("minutes", h(n, 2)), a.default._param("seconds", h(r, 2))], {
                    hk: "20uFdY"
                }) : a.default._("{minutes}:{seconds}", [a.default._param("minutes", n), a.default._param("seconds", h(r, 2))], {
                    hk: "1rX8OV"
                })
            }, t.addHours = function(e, t) {
                return c(e) + 60 * t * 60
            }, t.SECONDS_IN_WEEK = t.SECONDS_IN_DAY = t.HOURS_IN_DAY = t.SECONDS_IN_HOUR = t.MINUTES_IN_HOUR = t.SECONDS_IN_MINUTE = void 0;
            var r, a = (r = n(5)) && r.__esModule ? r : {
                default: r
            };
            t.SECONDS_IN_MINUTE = 60;
            t.MINUTES_IN_HOUR = 60;
            t.SECONDS_IN_HOUR = 3600;
            t.HOURS_IN_DAY = 24;
            t.SECONDS_IN_DAY = 86400;

            function l(e, t) {
                return "am" === t ? e % 12 : e % 12 + 12
            }

            function o(e) {
                return {
                    hour: (e % 12 == 0 ? 12 : e % 12).toString(),
                    period: e < 12 ? "am" : "pm"
                }
            }

            function i(e) {
                return e.padStart(2, "0")
            }

            function u(e) {
                return parseInt(e, 10)
            }

            function c(e) {
                return f(e.getTime())
            }

            function s(e, {
                second: t = 0,
                minute: n = 0,
                hour: r = 0,
                day: a = 0,
                week: l = 0
            }) {
                return e + t + 60 * n + 3600 * r + 86400 * a + 604800 * l
            }

            function d(e) {
                return "string" == typeof e ? e.replace("_", "-") : ""
            }

            function f(e) {
                return Math.floor(e / 1e3)
            }

            function p(e, t) {
                return e.setDate(e.getDate() + 1), e.setHours(t.hours, 0, 0, 0), e
            }

            function m(e, t) {
                const n = e.getDay(),
                    r = 0 === n ? 1 : 8 - n;
                return e.setDate(e.getDate() + r), e.setHours(t.hours), e.setMinutes(0), e.setSeconds(0), e
            }

            function h(e, t) {
                const n = String(e);
                return n.length >= t ? n : "0".repeat(t - n.length) + n
            }
            t.SECONDS_IN_WEEK = 604800
        },
        390: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.findEmoticonInfo = a, t.translateEmoticonToEmojiInText = function(e) {
                const t = a(e, e.length);
                if (t) {
                    const {
                        emoticonStart: n,
                        emoticonEnd: r,
                        emoji: a
                    } = t;
                    return e.slice(0, n) + a + e.slice(r + 1)
                }
                return e
            };
            const r = Object.freeze({
                ":-)": "🙂",
                ":)": "🙂",
                ":]": "🙂",
                "=)": "😊",
                "(:": "🙂",
                "(=": "😊",
                ":-(": "😞",
                ":(": "😞",
                ":[": "😞",
                "=(": "😞",
                ")=": "😞",
                ";-P": "😜",
                ";P": "😜",
                ";-p": "😜",
                ";p": "😜",
                ":-P": "😛",
                ":P": "😛",
                ":-p": "😛",
                ":p": "😛",
                "=P": "😛",
                "=p": "😛",
                ":-D": "😀",
                ":D": "😀",
                "=D": "😃",
                ":-O": "😮",
                ":O": "😮",
                ":-o": "😮",
                ":o": "😮",
                ";-)": "😉",
                ";)": "😉",
                ">:(": "😠",
                ">:-(": "😠",
                ":/": "😕",
                ":-/": "😕",
                ":\\": "😕",
                ":-\\": "😕",
                "=/": "😕",
                "=\\": "😕",
                ":'(": "😢",
                ":’(": "😢",
                "3:)": "😈",
                "3:-)": "😈",
                ":-*": "😗",
                ":*": "😗",
                ";-*": "😘",
                ";*": "😘",
                "<3": "❤",
                "&lt;3": "❤",
                "^_^": "😊",
                "^~^": "😊",
                ">:O": "😠",
                ">:-O": "😠",
                ">:o": "😠",
                ">:-o": "😠",
                ">_<": "😣",
                ">.<": "😣",
                '<(")': "🐧",
                ":poop:": "💩",
                ":dog:": "🐶",
                ":like:": "👍",
                "(y)": "👍",
                "(Y)": "👍",
                ":+1:": "👍",
                "(n)": "👎",
                "(N)": "👎",
                "-_-": "😑",
                "'-_-": "😓",
                "’-_-": "😓",
                ":-|": "😐",
                ":|": "😐",
                "8-)": "😎",
                "8)": "😎",
                "B-)": "😎",
                "B)": "😎",
                "O:)": "😇",
                "O:-)": "😇",
                "0:)": "😇",
                "0:-)": "😇",
                "-3-": "😚",
                "0_0": "😳",
                o_o: "😳",
                O_O: "😳",
                T_T: "😭",
                ToT: "😭",
                "T-T": "😭",
                "T.T": "😭"
            });

            function a(e, t) {
                if (t >= 2 && " " === e[t - 1]) {
                    let n = t - 2,
                        a = n;
                    for (let t = n; t >= 0; t--)
                        if (0 === t || " " === e[t]) {
                            a = 0 === t ? 0 : t + 1;
                            const l = e.slice(a, n + 1),
                                o = r.hasOwnProperty(l) ? r[l] : void 0;
                            return o ? {
                                emoticonStart: a,
                                emoticonEnd: n,
                                emoji: o
                            } : void 0
                        }
                }
            }
        },
        392: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                let t;
                try {
                    const n = (0, i.useDispatch)(),
                        r = (0, i.useSelector)(t => (0, l.getExperimentConfig)(t, e)),
                        a = (0, i.useSelector)(t => (0, l.isUserInExperiment)(t, e));
                    (0, u.useEffect)(() => {
                        a && r.autoLogExposure && n(o.LoggingActions.markExperimentImpression(r))
                    }, []), t = (0, i.useSelector)(t => (0, l.getExperimentParameters)(t, e))
                } catch (e) {
                    a.default.log.info("Tried to load experiment params in a Redux store-less context")
                }
                return t || {}
            }, t.useGetExperimentParametersWithoutLoggingImpression = function(e) {
                let t;
                try {
                    t = (0, i.useSelector)(t => (0, l.getExperimentParameters)(t, e))
                } catch (e) {
                    a.default.log.info("Tried to load experiment params in a Redux store-less context")
                }
                return t || {}
            };
            var r, a = (r = n(9)) && r.__esModule ? r : {
                    default: r
                },
                l = n(393),
                o = n(162),
                i = n(11),
                u = n(0)
        },
        393: function(e, t, n) {
            "use strict";

            function r(e, t) {
                const n = e.experiments[t];
                if (null == n) throw new Error(`Experiment ${t} not found in state when attempting to fetch parameters.`);
                return Date.now() < n.expiration && null != n.conditionName && null != n.conditionFBID && null != n.experimentFBID
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getExperimentParameters = function(e, t) {
                const n = e.experiments[t];
                return r(e, t) ? n.conditionParameters : n.defaultParameters
            }, t.isUserInExperiment = r, t.getExperimentConfig = function(e, t) {
                return e.experiments[t]
            }, t.hasAlreadyLoggedStartupExperimentImpressions = function(e) {
                return e.hasLoggedStartupExperimentImpressions
            }
        },
        394: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.dumpActionsToLog = function() {
                a.default.log.debug(`Dumping last ${l.length} Chat actions to the log file`), l.forEach(({
                    action: e,
                    timestamp: t
                }) => {
                    a.default.log.debug(`[${t}]: ${JSON.stringify(e.type)}`)
                })
            }, t.default = void 0;
            var r, a = (r = n(9)) && r.__esModule ? r : {
                default: r
            };
            const l = [];
            var o = {
                middleware: [e => e => t => {
                    ! function(e) {
                        l.push({
                            timestamp: (new Date).toISOString(),
                            action: e
                        }), l.length > 200 && l.shift()
                    }(t), e(t)
                }]
            };
            t.default = o
        },
        40: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getBorderRadiusStyles = y, t.RemovedMessageBubbleContainer = t.TypingIndicatorContainer = t.MessageBubbleContainer = t.RoundedCornerMediaContainer = t.UnroundedCornerMediaContainer = t.MessageContainer = t.MessageContainerStyles = t.CORNER_BORDER_RADIUS = t.ROUND_BORDER_RADIUS = void 0;
            var r, a = n(409),
                l = n(105),
                o = (r = n(1)) && r.__esModule ? r : {
                    default: r
                },
                i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(2));

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }
            t.ROUND_BORDER_RADIUS = 18;
            t.CORNER_BORDER_RADIUS = 4;
            const c = {
                whiteSpace: "pre-line",
                wordBreak: "break-word",
                flexDirection: "row",
                maxWidth: "inherit"
            };
            t.MessageContainerStyles = c;
            const s = (0, o.default)(i.default)(c);
            t.MessageContainer = s;
            const d = (0, o.default)(i.FocusableView)(e => ({
                    userSelect: "text",
                    whiteSpace: "pre-wrap",
                    margin: "1px 0px",
                    backgroundColor: "transparent",
                    marginLeft: e.isSenderViewer ? "auto" : void 0,
                    marginRight: e.isSenderViewer ? void 0 : "auto"
                })),
                f = (0, o.default)(d)({
                    img: {
                        objectFit: "contain"
                    }
                });
            t.UnroundedCornerMediaContainer = f;
            const p = (0, o.default)(f)(e => ({
                padding: 0,
                backgroundColor: e.theme.select({
                    dark: e.theme.colors.flatBase50,
                    light: e.theme.colors.flatBase20
                }),
                ...y(e.isSenderViewer, e.isFirst, e.isLast, e.xmaLayout),
                overflow: "hidden",
                img: {
                    ...y(e.isSenderViewer, e.isFirst, e.isLast, e.xmaLayout)
                },
                video: {
                    ...y(e.isSenderViewer, e.isFirst, e.isLast, e.xmaLayout)
                },
                cursor: e.isLink ? "pointer" : "default"
            }));
            t.RoundedCornerMediaContainer = p;
            const m = (0, o.default)(d)(e => {
                var t, n, r, a, o, i, u, c, s, d, f, p, m;
                return {
                    padding: "6px 12px",
                    opacity: e.isSenderViewer ? null === (t = e.threadTheme) || void 0 === t ? void 0 : null === (n = t.senderBubble) || void 0 === n ? void 0 : n.opacity : null === (r = e.threadTheme) || void 0 === r ? void 0 : null === (a = r.recieverBubble) || void 0 === a ? void 0 : a.opacity,
                    backgroundColor: e.theme.isHighContrast ? e.theme.colors.base10 : e.isSenderViewer ? (null === (o = e.threadTheme) || void 0 === o ? void 0 : null === (i = o.senderBubble) || void 0 === i ? void 0 : i.color) || (null === (u = e.threadTheme) || void 0 === u ? void 0 : u.color) : (null === (c = e.threadTheme) || void 0 === c ? void 0 : null === (s = c.recieverBubble) || void 0 === s ? void 0 : s.color) || e.theme.select({
                        highContrast: e.theme.colors.base10,
                        dark: e.theme.colors.flatBase50,
                        light: e.theme.colors.flatBase20
                    }),
                    ...e.isSenderViewer && !1 === (null === (d = e.threadTheme) || void 0 === d ? void 0 : null === (f = d.senderBubble) || void 0 === f ? void 0 : f.rounded) || !e.isSenderViewer && !1 === (null === (p = e.threadTheme) || void 0 === p ? void 0 : null === (m = p.recieverBubble) || void 0 === m ? void 0 : m.rounded) || e.doNotRoundCorners ? [] : y(e.isSenderViewer, e.isFirst, e.isLast),
                    ...(e.isSenderViewer && !e.isReply || e.repliedToViewer && e.replyingToText) && e.threadTheme && e.threadTheme.gradientColors ? (0, l.getThreadThemeGradientBackground)(e.threadTheme.gradientColors) : [],
                    "*::selection": {
                        background: e.isSenderViewer ? "#eee" : void 0
                    },
                    border: e.border,
                    overflow: "hidden"
                }
            });
            t.MessageBubbleContainer = m;
            const h = (0, o.default)(d)(e => ({
                justifyContent: "center",
                padding: e.inThreadList ? 7 : "6px 8px",
                backgroundColor: e.theme.select({
                    light: e.theme.colors.base20,
                    dark: e.theme.colors.base50
                }),
                ...y(e.isSenderViewer, e.isFirst, e.isLast)
            }));
            t.TypingIndicatorContainer = h;
            const g = (0, o.default)(d)(e => ({
                backgroundColor: "transparent",
                padding: "6px 12px",
                ...y(e.isSenderViewer, e.isFirst, e.isLast),
                border: `1px solid ${e.theme.colors.base40}`,
                "*::selection": {
                    background: e.isSenderViewer ? "#eee" : void 0
                }
            }));

            function y(e, t = !1, n = !1, r = null) {
                return r == a.XMALayoutType.HSCROLL ? {
                    borderBottomLeftRadius: t ? 18 : 0,
                    borderTopLeftRadius: t ? 18 : 0,
                    borderTopRightRadius: n ? 18 : 0,
                    borderBottomRightRadius: n ? 18 : 0
                } : e ? {
                    borderBottomLeftRadius: 18,
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: t ? 18 : 4,
                    borderBottomRightRadius: n ? 18 : 4
                } : {
                    borderBottomRightRadius: 18,
                    borderTopRightRadius: 18,
                    borderTopLeftRadius: t ? 18 : 4,
                    borderBottomLeftRadius: n ? 18 : 4
                }
            }
            t.RemovedMessageBubbleContainer = g
        },
        403: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const e = (0, a.default)(),
                    [t] = (0, l.useUserSetting)("uiScale");
                (0, o.useEffect)(() => {
                    e.window.setScale(t)
                }, [e, t])
            };
            var r, a = (r = n(102)) && r.__esModule ? r : {
                    default: r
                },
                l = n(72),
                o = n(0)
        },
        404: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = t.MULTI_BUTTON_CLIP_PATH = void 0;
            var r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = a();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var o = r ? Object.getOwnPropertyDescriptor(e, l) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, l, o) : n[l] = e[l]
                    } n.default = e, t && t.set(e, n);
                return n
            }(n(0));

            function a() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return a = function() {
                    return e
                }, e
            }
            t.MULTI_BUTTON_CLIP_PATH = "overlappingButtonTopLeft";
            var l = (0, r.memo)((function() {
                return r.default.createElement("svg", {
                    width: "0",
                    height: "0",
                    viewBox: "0 0 25 25"
                }, r.default.createElement("defs", null, r.default.createElement("clipPath", {
                    id: "overlappingButtonTopLeft"
                }, r.default.createElement("path", {
                    d: "M24.9797095,13.2182554 C18.9914786,14.2677375 14.2677375,18.9914786 13.2182554,24.9797095 C12.9805526,24.9931756 12.7410733,25 12.5,25 C5.59644063,25 0,19.4035594 0,12.5 C0,5.59644063 5.59644063,0 12.5,0 C19.4035594,0 25,5.59644063 25,12.5 C25,12.7410733 24.9931756,12.9805526 24.9797095,13.2182554 Z"
                }))))
            }));
            t.default = l
        },
        405: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return a.default.createElement(a.default.Fragment, null, a.default.createElement(l, null), a.default.createElement(o, null), a.default.createElement(i, null))
            }, t.PROFILE_GROUP_PATH_50 = t.PROFILE_GROUP_PATH_40 = t.PROFILE_GROUP_PATH_32 = void 0;
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            };
            t.PROFILE_GROUP_PATH_32 = "facepileClipPath32";
            t.PROFILE_GROUP_PATH_40 = "facepileClipPath40";

            function l() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "facepileClipPath32"
                }, a.default.createElement("path", {
                    d: "M0.274112,8.01992068 C1.6007965,3.3890815 5.8663672,0 10.9235003,0 C17.0408822,0 22,4.95911783 22,11.0764997 C22,16.1336328 18.6109185,20.3992035 13.9800793,21.725888 C13.9933006,21.4856068 14,21.2435858 14,21 C14,13.8202983 8.1797017,8 1,8 C0.7564142,8 0.5143932,8.00669941 0.2741111,8.01992401 L0.274112,8.01992068 Z"
                }))))
            }

            function o() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "facepileClipPath40"
                }, a.default.createElement("path", {
                    d: "M0.1467142,11.0404602 C1.0916072,4.79048259 6.486365,0 13,0 C20.1797017,0 26,5.82029825 26,13 C26,19.513635 21.2095174,24.9083928 14.9595398,25.8532858 C14.3984943,17.9306897 8.0693103,11.6015057 0.1467142,11.0404602 Z",
                    fill: "black"
                }))))
            }

            function i() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "facepileClipPath50"
                }, a.default.createElement("path", {
                    d: "M0.63686,13.0032306 C2.4345077,5.54286962 9.1521402,0 17.1643793,0 C26.55322,0 34.1643793,7.61115925 34.1643793,17 C34.1643793,25.0726377 28.5376272,31.8310769 20.9921083,33.5673325 C20.9973578,33.378862 21,33.1897396 21,33 C21,21.954305 12.045695,13 1,13 C0.8786981,13 0.7576484,13.0010799 0.63686,13.0032306 Z"
                }))))
            }
            t.PROFILE_GROUP_PATH_50 = "facepileClipPath50"
        },
        406: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                return a.default.createElement(a.default.Fragment, null, a.default.createElement(i, null), a.default.createElement(u, null), a.default.createElement(c, null), a.default.createElement(s, null), a.default.createElement(d, null), a.default.createElement(f, null), a.default.createElement(p, null), a.default.createElement(m, null), a.default.createElement(h, null), a.default.createElement(g, null), a.default.createElement(y, null), a.default.createElement(b, null))
            }, t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_80 = t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_60 = t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_50 = t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_35 = t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_28 = t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_16 = t.PROFILE_GROUP_HORIZONTAL_PATH_80 = t.PROFILE_GROUP_HORIZONTAL_PATH_60 = t.PROFILE_GROUP_HORIZONTAL_PATH_50 = t.PROFILE_GROUP_HORIZONTAL_PATH_35 = t.PROFILE_GROUP_HORIZONTAL_PATH_28 = t.PROFILE_GROUP_HORIZONTAL_PATH_16 = void 0;
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            };
            t.PROFILE_GROUP_HORIZONTAL_PATH_16 = "horizontalFacepileClipPath16";
            t.PROFILE_GROUP_HORIZONTAL_PATH_28 = "horizontalFacepileClipPath28";
            t.PROFILE_GROUP_HORIZONTAL_PATH_35 = "horizontalFacepileClipPath35";
            t.PROFILE_GROUP_HORIZONTAL_PATH_50 = "horizontalFacepileClipPath50";
            t.PROFILE_GROUP_HORIZONTAL_PATH_60 = "horizontalFacepileClipPath60";
            t.PROFILE_GROUP_HORIZONTAL_PATH_80 = "horizontalFacepileClipPath80";
            t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_16 = "horizontalFacepileNumberClipPath16";
            t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_28 = "horizontalFacepileNumberClipPath28";
            t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_35 = "horizontalFacepileNumberClipPath35";
            t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_50 = "horizontalFacepileNumberClipPath50";
            t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_60 = "horizontalFacepileNumberClipPath60";
            t.PROFILE_GROUP_HORIZONTAL_NUMBER_PATH_80 = "horizontalFacepileNumberClipPath80";
            const l = a.default.createElement("path", {
                    d: "M11,67.8845958 C17.0606085,60.2180453 20.6784114,50.5315142 20.6784114,40 C20.6784114,29.4684858 17.0606085,19.7819547 11,12.1154042 C18.2675074,4.64231429 28.4308241,0 39.6784114,0 C61.7698014,0 79.6784114,17.90861 79.6784114,40 C79.6784114,62.09139 61.7698014,80 39.6784114,80 C28.4308241,80 18.2675074,75.3576857 11,67.8845958 Z"
                }),
                o = a.default.createElement("path", {
                    d: "M0 14.6146C1.28232 15.4889 2.832 16 4.50108 16V8V0C2.83249 0 1.28322 0.510838 0.00111537 1.38465C1.55723 3.14736 2.50146 5.46291 2.50146 7.99899C2.50146 10.5357 1.55678 12.8517 0 14.6146Z"
                });

            function i() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileClipPath80"
                }, l)))
            }

            function u() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileClipPath60",
                    transform: "scale(0.75)"
                }, l)))
            }

            function c() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileClipPath50",
                    transform: "scale(0.625)"
                }, l)))
            }

            function s() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileClipPath35",
                    transform: "scale(0.4375)"
                }, l)))
            }

            function d() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileClipPath28",
                    transform: "scale(0.35)"
                }, l)))
            }

            function f() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileClipPath16",
                    transform: "scale(0.2)"
                }, l)))
            }

            function p() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileNumberClipPath16"
                }, o)))
            }

            function m() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileNumberClipPath28",
                    transform: "scale(1.75)"
                }, o)))
            }

            function h() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileNumberClipPath35",
                    transform: "scale(2.19)"
                }, o)))
            }

            function g() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileNumberClipPath50",
                    transform: "scale(3.142)"
                }, o)))
            }

            function y() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileNumberClipPath60",
                    transform: "scale(3.75)"
                }, o)))
            }

            function b() {
                return a.default.createElement("svg", {
                    width: "0",
                    height: "0"
                }, a.default.createElement("defs", null, a.default.createElement("clipPath", {
                    id: "horizontalFacepileNumberClipPath80",
                    transform: "scale(5)"
                }, o)))
            }
        },
        407: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.showToast = function(e) {
                s && s.showToast(e)
            }, t.default = function() {
                const e = (0, l.useRef)();
                return (0, l.useEffect)(() => {
                    s || (s = e.current)
                }, []), l.default.createElement(d, {
                    ref: e
                })
            };
            var r = u(n(839)),
                a = u(n(47)),
                l = function(e) {
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
                }(n(0)),
                o = u(n(124));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
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
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            let s = null;
            const d = (0, l.forwardRef)((function(e, t) {
                const [n, i] = (0, l.useState)(null), u = (0, l.useRef)(null), s = (0, l.useRef)(null), d = (0, l.useCallback)(() => {
                    null != s.current && (clearTimeout(s.current), s.current = null)
                }, []), f = (0, l.useCallback)(() => {
                    d(), i(null), u.current = null
                }, [d]), p = (0, l.useCallback)(e => {
                    d(), u.current = e, i((0, o.default)()), s.current = setTimeout(f, (0, a.default)({
                        seconds: 3
                    }))
                }, [d, f]);
                return (0, l.useImperativeHandle)(t, () => ({
                    showToast: p
                })), null != n && u.current ? l.default.createElement(r.default, c({
                    key: n
                }, u.current)) : null
            }))
        },
        408: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                return `https://facebook.com${e}&access_token=${t}`
            }
        },
        409: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                attachment: e,
                attachmentItems: t,
                isSenderViewer: n,
                isFirst: d,
                isLast: f,
                ctaHandlers: p = {},
                attachmentCTAs: h,
                setDisableTimeTooltip: g
            }) {
                const y = Math.max(t.length - 1, 0),
                    b = (0, s.useCallback)(() => {
                        g && g(!0)
                    }, [g]),
                    E = (0, s.useCallback)(() => {
                        g && g(!0)
                    }, [g]),
                    _ = e.xmaLayoutType === m.HSCROLL,
                    v = (e = m.SINGLE) => t.map((t, u) => {
                        const c = (0, i.default)(t.playableUrlInfo) || (0, i.default)(t.previewUrlInfo) || t.imageUrl,
                            g = t.titleText || "",
                            _ = t.subtitleText || "",
                            v = (0, r.getAttachmentCTAs)(t, p, void 0, h),
                            P = s.default.createElement(l.default, {
                                faviconUrl: (0, i.default)(t.faviconUrlInfo),
                                forceBgColor: void 0
                            });
                        return s.default.createElement(a.RoundedCornerMediaContainer, {
                            isSenderViewer: n,
                            isFirst: d && 0 === u,
                            isLast: f && u === y,
                            key: u,
                            xmaLayout: e,
                            style: {
                                marginLeft: e == m.HSCROLL ? 3 : "auto"
                            },
                            onActivate: null
                        }, s.default.createElement(o.default, {
                            title: g,
                            caption: _,
                            imageUrl: c,
                            icon: P,
                            containerWidth: o.MAX_CONTAINER_WIDTH,
                            CTAs: v,
                            onButtonHover: b,
                            onButtonUnhover: E,
                            fitContainerHeight: !0
                        }))
                    });
                if (_) return s.default.createElement(c.default, {
                    entryWidth: 267,
                    content: v(m.HSCROLL)
                });
                return (s.default.createElement(u.default, null, v()))
            }, t.XMALayoutType = void 0;
            var r = n(274),
                a = n(40),
                l = p(n(275)),
                o = f(n(203)),
                i = p(n(27)),
                u = p(n(2)),
                c = p(n(856)),
                s = f(n(0));

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
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let m;
            t.XMALayoutType = m,
                function(e) {
                    e[e.SINGLE = 0] = "SINGLE", e[e.HSCROLL = 1] = "HSCROLL", e[e.XCENTER = 2] = "XCENTER"
                }(m || (t.XMALayoutType = m = {}))
        },
        410: function(e, t, n) {
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
                    d: "M30.135 8.37a1.253 1.253 0 00-1.77 0l-7.044 7.04-.031.029-6.403 6.402a.814.814 0 00-.024.025L9.37 27.363a1.252 1.252 0 000 1.77 1.241 1.241 0 001.76 0l4.779-4.778a1 1 0 011.423.01l3.09 3.173c.94.964 2.575.3 2.575-1.046v-8.395a2 2 0 01.586-1.415l6.552-6.543a1.252 1.252 0 000-1.77zM22.997 9.784a1 1 0 01-.293.707L11.347 21.846c-.37.371-.998.394-1.198-.091a1.993 1.993 0 01-.15-.76v-5.998a2 2 0 012-1.999h3.366a1.5 1.5 0 001.075-.453l3.982-4.09c.94-.965 2.575-.3 2.575 1.045v.284z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        411: function(e, t, n) {
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
                    d: "M18.425 8.455C19.365 7.49 21 8.155 21 9.5V26.5c0 1.346-1.636 2.01-2.575 1.046l-3.983-4.091A1.5 1.5 0 0013.367 23H10a2 2 0 01-2-2v-6a2 2 0 012-2h3.367a1.5 1.5 0 001.075-.454l3.983-4.091zM24.25 14.008c-.394-.567-.405-1.353.083-1.842.488-.488 1.287-.492 1.707.056A9.459 9.459 0 0128 18c0 2.174-.731 4.177-1.96 5.779-.42.547-1.219.543-1.707.055-.488-.488-.477-1.275-.083-1.842A6.968 6.968 0 0025.5 18c0-1.484-.462-2.86-1.25-3.992z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        412: function(e, t, n) {
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
                    d: "M20.928 10.121a1 1 0 01.49-1.683l6.361-1.413a1 1 0 011.194 1.193l-1.414 6.36a1 1 0 01-1.683.49l-1.414-1.413a.25.25 0 00-.353 0l-3.048 3.048a1 1 0 01-1.415 0l-.353-.353a1 1 0 010-1.415l3.048-3.048a.25.25 0 000-.353l-1.413-1.413zM15.069 25.875a1 1 0 01-.49 1.683l-6.361 1.414a1 1 0 01-1.193-1.194l1.413-6.36a1 1 0 011.683-.49l1.414 1.413a.25.25 0 00.353 0l3.048-3.048a1 1 0 011.415 0l.353.353a1 1 0 010 1.415l-3.048 3.048a.25.25 0 000 .353l1.413 1.413z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        458: function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var r = new Uint8Array(16);
                e.exports = function() {
                    return n(r), r
                }
            } else {
                var a = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), a[t] = e >>> ((3 & t) << 3) & 255;
                    return a
                }
            }
        },
        459: function(e, t) {
            for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var r = t || 0,
                    a = n;
                return [a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], "-", a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]], a[e[r++]]].join("")
            }
        },
        583: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(34),
                a = n(44);

            function l(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            n(3);

            function o(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var i = n(0),
                u = n.n(i),
                c = n(29),
                s = n.n(c),
                d = {
                    disabled: !1
                },
                f = u.a.createContext(null),
                p = "entering",
                m = "entered",
                h = function(e) {
                    function t(t, n) {
                        var r;
                        r = e.call(this, t, n) || this;
                        var a, l = n && !n.isMounting ? t.enter : t.appear;
                        return r.appearStatus = null, t.in ? l ? (a = "exited", r.appearStatus = p) : a = m : a = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited", r.state = {
                            status: a
                        }, r.nextCallback = null, r
                    }
                    l(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && "unmounted" === t.status ? {
                            status: "exited"
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== p && n !== m && (t = p) : n !== p && n !== m || (t = "exiting")
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, r = this.props.timeout;
                        return e = t = n = r, null != r && "number" != typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        if (void 0 === e && (e = !1), null !== t) {
                            this.cancelNextCallback();
                            var n = s.a.findDOMNode(this);
                            t === p ? this.performEnter(n, e) : this.performExit(n)
                        } else this.props.unmountOnExit && "exited" === this.state.status && this.setState({
                            status: "unmounted"
                        })
                    }, n.performEnter = function(e, t) {
                        var n = this,
                            r = this.props.enter,
                            a = this.context ? this.context.isMounting : t,
                            l = this.getTimeouts(),
                            o = a ? l.appear : l.enter;
                        !t && !r || d.disabled ? this.safeSetState({
                            status: m
                        }, (function() {
                            n.props.onEntered(e)
                        })) : (this.props.onEnter(e, a), this.safeSetState({
                            status: p
                        }, (function() {
                            n.props.onEntering(e, a), n.onTransitionEnd(e, o, (function() {
                                n.safeSetState({
                                    status: m
                                }, (function() {
                                    n.props.onEntered(e, a)
                                }))
                            }))
                        })))
                    }, n.performExit = function(e) {
                        var t = this,
                            n = this.props.exit,
                            r = this.getTimeouts();
                        n && !d.disabled ? (this.props.onExit(e), this.safeSetState({
                            status: "exiting"
                        }, (function() {
                            t.props.onExiting(e), t.onTransitionEnd(e, r.exit, (function() {
                                t.safeSetState({
                                    status: "exited"
                                }, (function() {
                                    t.props.onExited(e)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: "exited"
                        }, (function() {
                            t.props.onExited(e)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, t.nextCallback = null, e(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t, n) {
                        this.setNextCallback(n);
                        var r = null == t && !this.props.addEndListener;
                        e && !r ? (this.props.addEndListener && this.props.addEndListener(e, this.nextCallback), null != t && setTimeout(this.nextCallback, t)) : setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if ("unmounted" === e) return null;
                        var t = this.props,
                            n = t.children,
                            r = Object(a.a)(t, ["children"]);
                        if (delete r.in, delete r.mountOnEnter, delete r.unmountOnExit, delete r.appear, delete r.enter, delete r.exit, delete r.timeout, delete r.addEndListener, delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, "function" == typeof n) return u.a.createElement(f.Provider, {
                            value: null
                        }, n(e, r));
                        var l = u.a.Children.only(n);
                        return (u.a.createElement(f.Provider, {
                            value: null
                        }, u.a.cloneElement(l, r)))
                    }, t
                }(u.a.Component);

            function g() {}
            h.contextType = f, h.propTypes = {}, h.defaultProps = {
                in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: g,
                onEntering: g,
                onEntered: g,
                onExit: g,
                onExiting: g,
                onExited: g
            }, h.UNMOUNTED = 0, h.EXITED = 1, h.ENTERING = 2, h.ENTERED = 3, h.EXITING = 4;
            var y = h,
                b = function(e, t) {
                    return e && t && t.split(" ").forEach((function(t) {
                        return r = t, void((n = e).classList ? n.classList.remove(r) : "string" == typeof n.className ? n.className = o(n.className, r) : n.setAttribute("class", o(n.className && n.className.baseVal || "", r)));
                        var n, r
                    }))
                },
                E = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, t.onEnter = function(e, n) {
                            t.removeClasses(e, "exit"), t.addClass(e, n ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
                        }, t.onEntering = function(e, n) {
                            var r = n ? "appear" : "enter";
                            t.addClass(e, r, "active"), t.props.onEntering && t.props.onEntering(e, n)
                        }, t.onEntered = function(e, n) {
                            var r = n ? "appear" : "enter";
                            t.removeClasses(e, r), t.addClass(e, r, "done"), t.props.onEntered && t.props.onEntered(e, n)
                        }, t.onExit = function(e) {
                            t.removeClasses(e, "appear"), t.removeClasses(e, "enter"), t.addClass(e, "exit", "base"), t.props.onExit && t.props.onExit(e)
                        }, t.onExiting = function(e) {
                            t.addClass(e, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                        }, t.onExited = function(e) {
                            t.removeClasses(e, "exit"), t.addClass(e, "exit", "done"), t.props.onExited && t.props.onExited(e)
                        }, t.getClassNames = function(e) {
                            var n = t.props.classNames,
                                r = "string" == typeof n,
                                a = r ? "" + (r && n ? n + "-" : "") + e : n[e];
                            return {
                                baseClassName: a,
                                activeClassName: r ? a + "-active" : n[e + "Active"],
                                doneClassName: r ? a + "-done" : n[e + "Done"]
                            }
                        }, t
                    }
                    l(t, e);
                    var n = t.prototype;
                    return n.addClass = function(e, t, n) {
                        var r = this.getClassNames(t)[n + "ClassName"];
                        "appear" === t && "done" === n && (r += " " + this.getClassNames("enter").doneClassName), "active" === n && e && e.scrollTop, this.appliedClasses[t][n] = r,
                            function(e, t) {
                                e && t && t.split(" ").forEach((function(t) {
                                    return r = t, void((n = e).classList ? n.classList.add(r) : function(e, t) {
                                        return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                                    }(n, r) || ("string" == typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
                                    var n, r
                                }))
                            }(e, r)
                    }, n.removeClasses = function(e, t) {
                        var n = this.appliedClasses[t],
                            r = n.base,
                            a = n.active,
                            l = n.done;
                        this.appliedClasses[t] = {}, r && b(e, r), a && b(e, a), l && b(e, l)
                    }, n.render = function() {
                        var e = this.props,
                            t = (e.classNames, Object(a.a)(e, ["classNames"]));
                        return u.a.createElement(y, Object(r.a)({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, t
                }(u.a.Component);
            E.defaultProps = {
                classNames: ""
            }, E.propTypes = {};
            var _ = E;

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function P(e, t) {
                var n = Object.create(null);
                return e && i.Children.map(e, (function(e) {
                    return e
                })).forEach((function(e) {
                    n[e.key] = function(e) {
                        return t && Object(i.isValidElement)(e) ? t(e) : e
                    }(e)
                })), n
            }

            function w(e, t, n) {
                return null != n[t] ? n[t] : e.props[t]
            }

            function O(e, t, n) {
                var r = P(e.children),
                    a = function(e, t) {
                        function n(n) {
                            return n in t ? t[n] : e[n]
                        }
                        e = e || {}, t = t || {};
                        var r, a = Object.create(null),
                            l = [];
                        for (var o in e) o in t ? l.length && (a[o] = l, l = []) : l.push(o);
                        var i = {};
                        for (var u in t) {
                            if (a[u])
                                for (r = 0; r < a[u].length; r++) {
                                    var c = a[u][r];
                                    i[a[u][r]] = n(c)
                                }
                            i[u] = n(u)
                        }
                        for (r = 0; r < l.length; r++) i[l[r]] = n(l[r]);
                        return i
                    }(t, r);
                return Object.keys(a).forEach((function(l) {
                    var o = a[l];
                    if (Object(i.isValidElement)(o)) {
                        var u = l in t,
                            c = l in r,
                            s = t[l],
                            d = Object(i.isValidElement)(s) && !s.props.in;
                        !c || u && !d ? c || !u || d ? c && u && Object(i.isValidElement)(s) && (a[l] = Object(i.cloneElement)(o, {
                            onExited: n.bind(null, o),
                            in: s.props.in,
                            exit: w(o, "exit", e),
                            enter: w(o, "enter", e)
                        })) : a[l] = Object(i.cloneElement)(o, {
                            in: !1
                        }) : a[l] = Object(i.cloneElement)(o, {
                            onExited: n.bind(null, o),
                            in: !0,
                            exit: w(o, "exit", e),
                            enter: w(o, "enter", e)
                        })
                    }
                })), a
            }
            var C = Object.values || function(e) {
                    return Object.keys(e).map((function(t) {
                        return e[t]
                    }))
                },
                M = function(e) {
                    function t(t, n) {
                        var r, a = (r = e.call(this, t, n) || this).handleExited.bind(v(v(r)));
                        return r.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: a,
                            firstRender: !0
                        }, r
                    }
                    l(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, n.componentWillUnmount = function() {
                        this.mounted = !1
                    }, t.getDerivedStateFromProps = function(e, t) {
                        var n, r, a = t.children,
                            l = t.handleExited;
                        return {
                            children: t.firstRender ? (n = e, r = l, P(n.children, (function(e) {
                                return Object(i.cloneElement)(e, {
                                    onExited: r.bind(null, e),
                                    in: !0,
                                    appear: w(e, "appear", n),
                                    enter: w(e, "enter", n),
                                    exit: w(e, "exit", n)
                                })
                            }))) : O(e, a, l),
                            firstRender: !1
                        }
                    }, n.handleExited = function(e, t) {
                        var n = P(this.props.children);
                        e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                            var n = Object(r.a)({}, t.children);
                            return delete n[e.key], {
                                children: n
                            }
                        })))
                    }, n.render = function() {
                        var e = this.props,
                            t = e.component,
                            n = e.childFactory,
                            r = Object(a.a)(e, ["component", "childFactory"]),
                            l = this.state.contextValue,
                            o = C(this.state.children).map(n);
                        return delete r.appear, delete r.enter, delete r.exit, null === t ? u.a.createElement(f.Provider, {
                            value: l
                        }, o) : u.a.createElement(f.Provider, {
                            value: l
                        }, u.a.createElement(t, r, o))
                    }, t
                }(u.a.Component);
            M.propTypes = {}, M.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            var S = M,
                T = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).handleEnter = function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            return t.handleLifecycle("onEnter", 0, n)
                        }, t.handleEntering = function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            return t.handleLifecycle("onEntering", 0, n)
                        }, t.handleEntered = function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            return t.handleLifecycle("onEntered", 0, n)
                        }, t.handleExit = function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            return t.handleLifecycle("onExit", 1, n)
                        }, t.handleExiting = function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            return t.handleLifecycle("onExiting", 1, n)
                        }, t.handleExited = function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            return t.handleLifecycle("onExited", 1, n)
                        }, t
                    }
                    l(t, e);
                    var n = t.prototype;
                    return n.handleLifecycle = function(e, t, n) {
                        var r, a = this.props.children,
                            l = u.a.Children.toArray(a)[t];
                        l.props[e] && (r = l.props)[e].apply(r, n), this.props[e] && this.props[e](s.a.findDOMNode(this))
                    }, n.render = function() {
                        var e = this.props,
                            t = e.children,
                            n = e.in,
                            r = Object(a.a)(e, ["children", "in"]),
                            l = u.a.Children.toArray(t),
                            o = l[0],
                            i = l[1];
                        return delete r.onEnter, delete r.onEntering, delete r.onEntered, delete r.onExit, delete r.onExiting, delete r.onExited, u.a.createElement(S, r, n ? u.a.cloneElement(o, {
                            key: "first",
                            onEnter: this.handleEnter,
                            onEntering: this.handleEntering,
                            onEntered: this.handleEntered
                        }) : u.a.cloneElement(i, {
                            key: "second",
                            onEnter: this.handleExit,
                            onEntering: this.handleExiting,
                            onEntered: this.handleExited
                        }))
                    }, t
                }(u.a.Component);
            T.propTypes = {};
            var R, x, A = T;
            var k = "out-in",
                L = "in-out",
                j = function(e, t, n) {
                    return function() {
                        var r;
                        e.props[t] && (r = e.props)[t].apply(r, arguments), n()
                    }
                },
                I = ((R = {})[k] = function(e) {
                    var t = e.current,
                        n = e.changeState;
                    return u.a.cloneElement(t, {
                        in: !1,
                        onExited: j(t, "onExited", (function() {
                            n(p, null)
                        }))
                    })
                }, R[L] = function(e) {
                    var t = e.current,
                        n = e.changeState,
                        r = e.children;
                    return [t, u.a.cloneElement(r, {
                        in: !0,
                        onEntered: j(r, "onEntered", (function() {
                            n(p)
                        }))
                    })]
                }, R),
                N = ((x = {})[k] = function(e) {
                    var t = e.children,
                        n = e.changeState;
                    return u.a.cloneElement(t, {
                        in: !0,
                        onEntered: j(t, "onEntered", (function() {
                            n(m, u.a.cloneElement(t, {
                                in: !0
                            }))
                        }))
                    })
                }, x[L] = function(e) {
                    var t = e.current,
                        n = e.children,
                        r = e.changeState;
                    return [u.a.cloneElement(t, {
                        in: !1,
                        onExited: j(t, "onExited", (function() {
                            r(m, u.a.cloneElement(n, {
                                in: !0
                            }))
                        }))
                    }), u.a.cloneElement(n, {
                        in: !0
                    })]
                }, x),
                D = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                        return (t = e.call.apply(e, [this].concat(r)) || this).state = {
                            status: m,
                            current: null
                        }, t.appeared = !1, t.changeState = function(e, n) {
                            void 0 === n && (n = t.state.current), t.setState({
                                status: e,
                                current: n
                            })
                        }, t
                    }
                    l(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.appeared = !0
                    }, t.getDerivedStateFromProps = function(e, t) {
                        return null == e.children ? {
                            current: null
                        } : t.status === p && e.mode === L ? {
                            status: p
                        } : !t.current || (n = t.current, r = e.children, n === r || u.a.isValidElement(n) && u.a.isValidElement(r) && null != n.key && n.key === r.key) ? {
                            current: u.a.cloneElement(e.children, {
                                in: !0
                            })
                        } : {
                            status: "exiting"
                        };
                        var n, r
                    }, n.render = function() {
                        var e, t = this.props,
                            n = t.children,
                            r = t.mode,
                            a = this.state,
                            l = a.status,
                            o = a.current,
                            i = {
                                children: n,
                                current: o,
                                changeState: this.changeState,
                                status: l
                            };
                        switch (l) {
                            case p:
                                e = N[r](i);
                                break;
                            case "exiting":
                                e = I[r](i);
                                break;
                            case m:
                                e = o
                        }
                        return u.a.createElement(f.Provider, {
                            value: {
                                isMounting: !this.appeared
                            }
                        }, e)
                    }, t
                }(u.a.Component);
            D.propTypes = {}, D.defaultProps = {
                mode: k
            };
            var z = D;
            n.d(t, "CSSTransition", (function() {
                return _
            })), n.d(t, "ReplaceTransition", (function() {
                return A
            })), n.d(t, "SwitchTransition", (function() {
                return z
            })), n.d(t, "TransitionGroup", (function() {
                return S
            })), n.d(t, "Transition", (function() {
                return y
            })), n.d(t, "config", (function() {
                return d
            }))
        },
        588: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                var e;
                const t = (0, l.useSelector)(e => (0, a.isGatekeeperEnabled)(e, "archon_enable_rsys")),
                    n = !!(null === (e = (0, r.useGetExperimentParametersWithoutLoggingImpression)("native_rtc")) || void 0 === e ? void 0 : e.enabled);
                return t || n
            };
            var r = n(392),
                a = n(32),
                l = n(11)
        },
        589: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                className: e,
                renderLoadingContent: t,
                renderLoadedContent: n,
                loaded: r
            }) {
                const [i, u] = (0, l.useState)(r), [d, f] = (0, l.useState)(r);
                (0, l.useEffect)(() => {
                    !1 === r && (u(!1), f(!1))
                }, [r]), (0, l.useLayoutEffect)(() => {
                    let e;
                    return r && !d && (e = window.setTimeout(() => f(!0), 300)), () => {
                        e && clearTimeout(e)
                    }
                }, [r, d]);
                return l.default.createElement(c, null, l.default.createElement(l.default.Fragment, null, l.default.createElement(a.CSSTransition, {
                    in: !d,
                    timeout: 300,
                    classNames: "loading-container",
                    onExited: () => {
                        u(!0)
                    },
                    unmountOnExit: !0
                }, l.default.createElement(s, {
                    className: e
                }, t())), r && l.default.createElement(a.CSSTransition, {
                    in: i,
                    appear: !0,
                    classNames: "loaded-container",
                    timeout: 300
                }, l.default.createElement(o.default, {
                    className: "loaded-container",
                    css: {
                        flex: 1
                    }
                }, n()))))
            };
            var r = u(n(1)),
                a = n(583),
                l = function(e) {
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
                }(n(0)),
                o = u(n(2));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const c = (0, r.default)(o.default)({
                    flex: 1,
                    ".loading-container-enter-active, .loading-container-enter-done": {
                        opacity: 1
                    },
                    ".loading-container-exit": {
                        opacity: 1
                    },
                    ".loading-container-exit-active": {
                        opacity: 0,
                        transition: "all 300ms cubic-bezier(0.4, 0, 1, 1)",
                        ".archon-shimmer": {
                            animationPlayState: "paused"
                        }
                    },
                    ".loaded-container,  .loaded-container-enter": {
                        opacity: 0
                    },
                    ".loaded-container-enter-active,  .loaded-container-enter-done": {
                        transition: "all 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)",
                        opacity: 1
                    }
                }),
                s = (0, r.default)(o.default)({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                })
        },
        591: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e = "id") {
                return (0, r.useRef)(`${e}-${a++}`).current
            };
            var r = n(0);
            let a = 1
        },
        60: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(390),
                a = n(200),
                l = f(n(5)),
                o = f(n(9)),
                i = f(n(1)),
                u = function(e) {
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
                }(n(0)),
                c = n(121),
                s = n(6);

            function d() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return d = function() {
                    return e
                }, e
            }

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p() {
                return (p = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            const m = i.default.input(e => ({
                backgroundColor: e.theme.colors.base50,
                color: e.theme.semanticColors.textPrimary,
                border: "1px solid transparent",
                borderColor: `${e.invalid?e.theme.colors.red:"transparent"}`,
                borderRadius: "2px",
                padding: "10px",
                outline: "none",
                textAlign: e.textAlign ? e.textAlign : void 0,
                transition: "border-color linear 150ms",
                flex: e.multiline ? 1 : void 0,
                "::placeholder": {
                    color: e.theme.colors.base70
                },
                ":hover:not(:disabled):not(:focus)": {
                    borderColor: `${e.removeBorder?void 0:e.invalid?e.theme.colors.red:e.theme.colors.base70}`
                },
                ":focus": {
                    borderColor: `${e.removeBorder?void 0:e.invalid?e.theme.colors.red:e.theme.semanticColors.primaryAccent}`
                },
                ":disabled": {
                    backgroundColor: e.theme.colors.base40,
                    "::placeholder": {
                        color: e.theme.colors.base60
                    }
                },
                ...e.textUse ? a.TextStyles[e.textUse] : [],
                fontSize: e.fontSize
            }));
            var h = (0, u.memo)(u.default.forwardRef((function(e, t) {
                const {
                    invalid: n = !1,
                    disabled: a = !1,
                    multiline: i = !1,
                    placeholder: d,
                    onKeyPress: f,
                    value: h,
                    childRef: g,
                    enableClearButton: y,
                    className: b,
                    maxLength: E,
                    onChange: _,
                    type: v,
                    autoFocus: P,
                    textUse: w,
                    textAlign: O,
                    removeBorder: C,
                    enableEmoticonTranslation: M = !1,
                    fontSize: S = 14,
                    ...T
                } = e, R = (0, s.useTheme)(), x = (0, u.useRef)(null), A = (0, u.useCallback)(e => {
                    "function" == typeof t ? t(e) : null != t && (t.current = e), x.current = e
                }, [t]), k = (0, u.useCallback)(e => {
                    const t = e.target,
                        n = M ? (0, r.translateEmoticonToEmojiInText)(t.value) : t.value;
                    _ && _(n)
                }, [_, M]), L = (0, u.useCallback)(() => {
                    if (!x.current || a) return;
                    let e = window.getSelection();
                    e && "Range" === e.type || x.current.select(), o.default.platform.openContextMenu([{
                        label: l.default._("Copy", null, {
                            hk: "3DiVYt"
                        }).toString(),
                        role: "copy"
                    }, {
                        label: l.default._("Paste", null, {
                            hk: "1bUjju"
                        }).toString(),
                        role: "paste"
                    }])
                }, [a]);
                return u.default.createElement(m, p({
                    [c.IS_FOCUSABLE_ATTR]: !a
                }, {
                    [c.AUTOFOCUS_ATTR]: P
                }, {
                    as: i ? "textarea" : "input",
                    placeholder: d ? d.toString() : void 0
                }, T, {
                    autoFocus: P,
                    invalid: n,
                    theme: R,
                    multiline: i,
                    disabled: a,
                    onChange: k,
                    onContextMenu: L,
                    onKeyPress: f,
                    value: h,
                    ref: A,
                    onFocus: e.onFocus,
                    onBlur: e.onBlur,
                    textUse: w,
                    textAlign: O,
                    removeBorder: C,
                    className: b,
                    type: v || (y ? "search" : "text"),
                    maxLength: E,
                    fontSize: S
                }))
            })));
            t.default = h
        },
        618: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const [e, t] = (0, r.useState)(!1);
                return () => t(e => !e)
            };
            var r = n(0)
        },
        66: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ContextMenuHost = function(e) {
                const [t, n] = (0, l.useState)(!1), o = (0, l.useRef)(null), s = (0, l.useRef)(), d = (0, l.useCallback)(e => (s.current = (0, r.defer)(), o.current = e, e.target && (0, a.isEvent)(e.target) && e.target.persist(), n(!0), s.current.promise), []), f = (0, l.useCallback)(() => {
                    n(!1), o.current = null, s.current && (s.current.resolve(), s.current = void 0)
                }, []), p = (0, l.useMemo)(() => ({
                    showContextMenu: d
                }), [d]);
                return l.default.createElement(c.Provider, {
                    value: p
                }, t && o.current && l.default.createElement(l.default.Suspense, {
                    fallback: null
                }, l.default.createElement(u, i({}, o.current, {
                    onHide: () => {
                        var e, t;
                        (null === (e = o.current) || void 0 === e ? void 0 : e.onHide) && (null === (t = o.current) || void 0 === t || t.onHide()), f()
                    }
                }))), e.children)
            }, t.useContextMenu = function() {
                return (0, l.useContext)(c)
            };
            var r = n(174),
                a = n(267),
                l = function(e) {
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
                }(n(0));

            function o() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return o = function() {
                    return e
                }, e
            }

            function i() {
                return (i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            const u = l.default.lazy(() => Promise.all([n.e(7), n.e(85)]).then(n.t.bind(null, 1866, 7))),
                c = l.default.createContext({
                    showContextMenu: e => Promise.resolve()
                })
        },
        78: function(e, t, n) {
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
                }, a.default.createElement("g", {
                    fill: "currentColor",
                    clipPath: "url(#CamcorderIcon__clip0)"
                }, a.default.createElement("path", {
                    d: "M9 9.5a4 4 0 00-4 4v9a4 4 0 004 4h10a4 4 0 004-4v-9a4 4 0 00-4-4H9zM25.829 21.532l3.723 1.861A1 1 0 0031 22.5V13.5a1 1 0 00-1.448-.894l-3.723 1.861A1.5 1.5 0 0025 15.81v4.38a1.5 1.5 0 00.829 1.342z"
                })))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        787: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const e = (0, f.useSelector)(s.requireAuthenticationData),
                    t = (0, p.useCallback)(e => (0, d.isGatekeeperEnabled)(e, "is_employee"), []),
                    n = (0, f.useSelector)(t),
                    m = (0, i.default)(),
                    h = (0, p.useCallback)(e => (0, c.getPortalWindowOpenOptions)(e, l.PortalKey.Feedback), []),
                    g = (0, f.useSelector)(h),
                    [y, b] = (0, p.useState)(void 0),
                    E = null == g ? void 0 : g.loggedRTCActions;
                return (0, p.useEffect)(() => {
                    o.default.log.debug("User requested the feedback window"), (0, u.dumpActionsToLog)(), async function() {
                        const e = await o.default.msys.fetchRsysAppModel_expensive();
                        e && o.default.log.debug("Native RTC state:", JSON.stringify((0, a.caution_copyAndRedactRsysModel)(e)))
                    }(), E && E.length > 0 && (o.default.log.debug(`Dumping last ${E.length} RTC actions to the log file`), E.forEach(({
                        action: e,
                        timestamp: t
                    }) => {
                        o.default.log.debug(`[${t}]: ${JSON.stringify(e.type)}`)
                    })), async function() {
                        await o.default.msys.waitForMailbox();
                        try {
                            const t = await o.default.msys.copyAndRedactDatabase(e.userID);
                            t && b(t.databaseFilepath)
                        } catch (e) {
                            o.default.log.error(`Could not retrieve redacted database: ${e instanceof Error?e:JSON.stringify(e)}`)
                        }
                    }()
                }, [e, E]), p.default.createElement(r.default, {
                    isEmployee: n,
                    userID: e.userID,
                    userAccessToken: e.accessToken,
                    databaseFilepath: y,
                    isNativeRtcEnabled: m,
                    windowOptions: g
                })
            };
            var r = h(n(381)),
                a = n(817),
                l = n(8),
                o = h(n(9)),
                i = h(n(588)),
                u = n(394),
                c = n(28),
                s = n(21),
                d = n(32),
                f = n(11),
                p = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = m();
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

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function() {
                    return e
                }, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        788: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    globalSettings: t
                } = (0, u.default)(), [n, r] = (0, d.useState)(!t.enableInternalFeedback), a = (0, i.default)();
                return d.default.createElement(M, null, d.default.createElement(_.default, {
                    name: "feedbackForm"
                }, n ? d.default.createElement(z, e) : d.default.createElement(I, null, d.default.createElement(N, {
                    "aria-label": l.default._("File Bug", null, {
                        hk: "jsmhg"
                    }).toString(),
                    size: p.RectangleButtonSize.Medium,
                    use: p.RectangleButtonUse.Primary,
                    caption: "Bug",
                    telemetryName: "viewBugFormButton",
                    onClick: () => r(!0)
                }), d.default.createElement(N, {
                    "aria-label": l.default._("Feature Request", null, {
                        hk: "2Q9286"
                    }).toString(),
                    size: p.RectangleButtonSize.Medium,
                    use: p.RectangleButtonUse.Primary,
                    caption: "Feature Request",
                    telemetryName: "viewFeatureRequestButton",
                    onClick: () => {
                        a.platform.openExternalURL("https://fb.workplace.com/groups/1876526029303130/"), e.onCloseForm()
                    }
                }))))
            };
            var r = n(67),
                a = n(83),
                l = C(n(5)),
                o = n(382),
                i = C(n(102)),
                u = C(n(118)),
                c = C(n(1)),
                s = C(n(50)),
                d = O(n(0)),
                f = C(n(2)),
                p = O(n(16)),
                m = O(n(22)),
                h = C(n(167)),
                g = C(n(160)),
                y = C(n(254)),
                b = O(n(82)),
                E = C(n(186)),
                _ = C(n(13)),
                v = C(n(60)),
                P = C(n(4));

            function w() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return w = function() {
                    return e
                }, e
            }

            function O(e) {
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

            function C(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const M = (0, c.default)(f.default)({
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 30,
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "space-between"
                }),
                S = (0, c.default)(f.default)({
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    height: 36
                }),
                T = (0, c.default)(f.default)({
                    paddingTop: 10,
                    paddingBottom: 10
                }),
                R = (0, c.default)(f.default)({
                    marginTop: 2,
                    flexDirection: "row"
                }),
                x = (0, c.default)(P.default)({
                    marginLeft: 4
                }),
                A = (0, c.default)(f.default)({
                    width: 10
                }),
                k = (0, c.default)(f.default)({
                    height: 20
                }),
                L = c.default.img({
                    marginTop: 10,
                    width: 80,
                    border: "1px solid"
                }),
                j = e => d.default.createElement(f.default, {
                    css: {
                        paddingLeft: 12
                    }
                }, d.default.createElement(E.default, e)),
                I = (0, c.default)(f.default)({
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }),
                N = (0, c.default)(p.default)({
                    width: "50%",
                    margin: 5
                }),
                D = (0, c.default)(f.default)({
                    width: 75
                });

            function z(e) {
                const [t, n] = (0, d.useState)(""), [u, c] = (0, d.useState)(!1), [f, E] = (0, d.useState)(null), [_, P] = (0, d.useState)(!1), [w, O] = (0, d.useState)(null), [C, M] = (0, d.useState)([]), [I, N] = (0, d.useState)(0), z = (0, i.default)();
                (0, d.useEffect)(() => {
                    z.asl.incrementStat(r.AslStat.FeedbackFormShown, 1)
                }, [z.asl]), (0, d.useEffect)(() => {
                    f && z.platform.showErrorBox("Error", f.message || "Unknown error!")
                }, [f, z]);
                const F = (0, d.useCallback)(e => {
                    M([...C, ...Array.from(e).filter(e => !C.some(t => t.name === e.name && t.size === e.size && t.lastModified === e.lastModified))].slice(0, 5))
                }, [C, M]);
                const H = "Video & audio calls" !== o.FEATURE_AREAS[I];
                return (d.default.createElement(d.default.Fragment, null, d.default.createElement(j, {
                    title: l.default._("What happened?", null, {
                        hk: "fA1hL"
                    }).toString()
                }), d.default.createElement(v.default, {
                    placeholder: l.default._("Explain the problem in as much detail as possible.", null, {
                        hk: "1T1n8I"
                    }).toString(),
                    value: t,
                    onChange: n,
                    multiline: !0,
                    autoFocus: !0
                }), d.default.createElement(j, {
                    title: l.default._("What area of the product was it?", null, {
                        hk: "X4vhM"
                    }).toString()
                }), d.default.createElement(g.default, {
                    items: o.FEATURE_AREAS.map(e => o.FEATURE_AREA_INFO[e].fbt),
                    onSelectionChanged: (e, t) => N(t)
                }), d.default.createElement(T, null, d.default.createElement(y.default, {
                    fileTypes: ["image/*", "video/*"],
                    multiple: !0,
                    onFilesSelected: F
                }, e => d.default.createElement(p.default, {
                    "aria-label": l.default._("Upload Attachments", null, {
                        hk: "4b7wyD"
                    }).toString(),
                    size: p.RectangleButtonSize.Medium,
                    use: p.RectangleButtonUse.Primary,
                    caption: l.default._("Upload Attachment(s)", null, {
                        hk: "31Gy4c"
                    }).toString(),
                    telemetryName: "uploadAttachmentButton",
                    disabled: C.length >= 5,
                    onClick: e
                })), C.map(e => d.default.createElement(R, {
                    key: e.name + e.size + e.lastModified
                }, d.default.createElement(m.default, {
                    "aria-label": l.default._("Remove Attachment", null, {
                        hk: "Qx4rM"
                    }).toString(),
                    icon: s.default,
                    size: m.RoundButtonSize.Small,
                    use: m.RoundButtonUse.Transparent,
                    telemetryName: "removeAttachmentButton",
                    onClick: () => M(C.filter(t => t !== e))
                }), d.default.createElement(x, {
                    use: "body"
                }, e.name)))), H && d.default.createElement(h.default, {
                    label: l.default._("Include a screenshot of {app name}", [l.default._param("app name", a.displayName)], {
                        hk: "1WpPGo"
                    }),
                    checked: _,
                    size: "small",
                    onChange: t => {
                        t ? z.window.takeScreenshotOfMessengerWindow(e.userID).then(e => {
                            O(e), P(!0)
                        }).catch(e => {
                            E(e)
                        }) : (O(null), P(!1))
                    }
                }), w ? d.default.createElement(L, {
                    src: w.toDataURL()
                }) : d.default.createElement(k, null), d.default.createElement(S, null, d.default.createElement(D, null, d.default.createElement(p.default, {
                    "aria-label": l.default._("Cancel Bug Report", null, {
                        hk: "1o8AQG"
                    }).toString(),
                    size: p.RectangleButtonSize.Medium,
                    use: p.RectangleButtonUse.Secondary,
                    caption: l.default._("Cancel", null, {
                        hk: "2cgFh"
                    }).toString(),
                    telemetryName: "cancelButton",
                    onClick: e.onCloseForm
                })), d.default.createElement(A, null), u ? d.default.createElement(D, null, d.default.createElement(b.default, {
                    size: b.SpinnerSize.Medium
                })) : d.default.createElement(D, null, d.default.createElement(p.default, {
                    "aria-label": l.default._("Submit Bug Report", null, {
                        hk: "2kbRh5"
                    }).toString(),
                    size: p.RectangleButtonSize.Medium,
                    use: p.RectangleButtonUse.Primary,
                    caption: l.default._("Submit", null, {
                        hk: "4hWR6C"
                    }).toString(),
                    disabled: u || "" === t.trim(),
                    telemetryName: "submitButton",
                    onClick: function() {
                        z.asl.incrementStat(r.AslStat.FeedbackFormReporting, 1), c(!0);
                        const n = function() {
                            const t = {};
                            if (e.databaseFilepath) try {
                                const n = z.fs.readFileSync(e.databaseFilepath);
                                z.fs.unlinkSync(e.databaseFilepath), t[z.path.basename(e.databaseFilepath)] = n
                            } catch (e) {
                                let t = "";
                                try {
                                    t = e.stack && e.message ? e : JSON.stringify(e)
                                } catch (e) {
                                    t = "Could not get error message"
                                }
                                z.log.error(`Could not load redacted database file: ${t}`)
                            }
                            return t
                        }();
                        (0, o.reportBug)(z, t, e.userID, e.userAccessToken, w || void 0, C, n, I, e.isNativeRtcEnabled, e.windowOptions).then(t => {
                            z.asl.incrementStat(r.AslStat.FeedbackFormUploadSuccess, 1), e.onSubmitSuccess(t)
                        }, e => {
                            z.asl.incrementStat(r.AslStat.FeedbackFormUploadError, 1), c(!1), E(e)
                        })
                    }
                })))))
            }
        },
        792: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = "undefined" != typeof window && window.fetch ? window.fetch : () => {
                throw new Error("Global fetch function not found.\n        Please import one from require('electron-fetch') instead of using\n        @archon/common/fetch")
            };
            t.default = r
        },
        793: function(e, t) {
            e.exports = "object" == typeof self ? self.FormData : window.FormData
        },
        816: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = p(n(5)),
                a = p(n(102)),
                l = p(n(1)),
                o = f(n(0)),
                i = p(n(2)),
                u = f(n(16)),
                c = p(n(13)),
                s = p(n(4));

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
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const m = (0, l.default)(i.default)({
                    width: "100%",
                    flex: 1,
                    alignItems: "center"
                }),
                h = (0, l.default)(s.default)({
                    marginTop: 16,
                    marginBottom: 10
                }),
                g = (0, l.default)(i.default)({
                    flexDirection: "row"
                }),
                y = (0, l.default)(i.default)({
                    width: 10
                });
            var b = (0, o.memo)((function(e) {
                const t = (0, a.default)();
                return (o.default.createElement(c.default, {
                    name: "feedbackForm"
                }, o.default.createElement(m, null, o.default.createElement(h, {
                    use: "title"
                }, r.default._("Thank you for the feedback!", null, {
                    hk: "Ibfrz"
                })), o.default.createElement(g, null, o.default.createElement(u.default, {
                    "aria-label": r.default._("Close", null, {
                        hk: "2Jpz5q"
                    }).toString(),
                    size: u.RectangleButtonSize.Medium,
                    use: u.RectangleButtonUse.Secondary,
                    caption: "Close",
                    onClick: e.onCloseForm,
                    telemetryName: "closeButton"
                }), o.default.createElement(y, null), e.isEmployee && o.default.createElement(u.default, {
                    "aria-label": r.default._("View Bug Report", null, {
                        hk: "YmvB5"
                    }).toString(),
                    size: u.RectangleButtonSize.Medium,
                    use: u.RectangleButtonUse.Primary,
                    caption: "View Bug Report",
                    telemetryName: "viewBugReportButton",
                    onClick: () => t.platform.openExternalURL(`https://our.intern.facebook.com/intern/bug/${e.bugReportID}/`)
                })))))
            }));
            t.default = b
        },
        817: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.caution_copyAndRedactRsysModel = function(e) {
                return (0, a.default)(e, e => function e(t) {
                    if (null == t || "object" != typeof t) return;
                    for (const n of Object.keys(t)) {
                        l.some(e => n.toUpperCase().includes(e.toUpperCase())) ? t[n] = "<REDACTED>" : "object" == typeof t[n] && null != t[n] && e(t[n])
                    }
                }(e))
            };
            var r, a = (r = n(391)) && r.__esModule ? r : {
                default: r
            };
            const l = Object.freeze(["name", "screenSharingPeers", "url"])
        },
        837: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(174),
                a = u(n(9)),
                l = function(e) {
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
                }(n(0)),
                o = u(n(385));

            function i() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return i = function() {
                    return e
                }, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let c;
            var s = e => {
                const [t, n, i] = function() {
                    switch ((0, l.useEffect)(() => () => {
                            c = void 0
                        }, []), c || (c = (0, r.defer)(), Promise.all([a.default.settings.getUserSettings(), a.default.settings.getGlobalSettings(), a.default.settings.getSystemSettings()]).then(([e, t, n]) => {
                            c && c.resolve([e, t, n])
                        })), c.status) {
                        case "pending":
                            throw c.promise;
                        case "fulfilled":
                            return c.result;
                        case "rejected":
                            return c.error
                    }
                }(), [u, s] = (0, l.useState)(t), [d, f] = (0, l.useState)(n), [p, m] = (0, l.useState)(i);
                (0, l.useEffect)(() => {
                    const e = a.default.settings.listenForGlobalSettingChanges(e => {
                            f(e)
                        }),
                        t = a.default.settings.listenForUserSettingChanges((e, t) => {
                            s(e)
                        }),
                        n = a.default.settings.listenForSystemSettingChanges(e => {
                            m(e)
                        });
                    return () => {
                        e(), t(), n()
                    }
                }, [s, f, m]);
                return l.default.createElement(o.default.Provider, {
                    value: {
                        globalSettings: d,
                        setGlobalSettings: e => {
                            a.default.settings.setGlobalSettings(e)
                        },
                        userSettings: u,
                        setUserSettings: (e, t) => {
                            a.default.settings.setUserSettings(e, t)
                        },
                        systemSettings: p
                    }
                }, e.children)
            };
            t.default = s
        },
        838: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const t = (0, o.useTheme)();
                return (0, l.useEffect)(() => {
                    function e(e) {
                        if (e.clientY < (0, i.getTitleBarHeight)(t)) {
                            const e = a.default.window.getDoubleClickBehavior(),
                                t = a.default.window.getWindow();
                            switch (e) {
                                case "Maximize":
                                    t.isResizable() && (a.default.window.isMaximized() ? a.default.window.unmaximize() : a.default.window.maximize());
                                    break;
                                case "Minimize":
                                    t.isMinimizable() && a.default.window.minimize()
                            }
                        }
                    }
                    return window.addEventListener("dblclick", e, !0), () => {
                        window.removeEventListener("dblclick", e, !0)
                    }
                }, [t]), l.default.createElement(l.default.Fragment, null, e.children)
            };
            var r, a = (r = n(9)) && r.__esModule ? r : {
                    default: r
                },
                l = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = u();
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
                o = n(6),
                i = n(164);

            function u() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return u = function() {
                    return e
                }, e
            }
        },
        839: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    icon: t,
                    content: n,
                    type: o,
                    onClick: c
                } = e, f = (0, a.useTheme)(), {
                    toastIcon: p,
                    iconColor: g
                } = function(e, t, n) {
                    let r = e,
                        a = "";
                    switch (t || "success") {
                        case "success":
                            r = r || l.default, a = n.colors.green
                    }
                    return {
                        toastIcon: r,
                        iconColor: a
                    }
                }(t, o, f);
                return u.default.createElement(d.default, null, u.default.createElement(i.Spring, {
                    native: !0,
                    config: {
                        tension: 300,
                        friction: 30,
                        clamp: !0
                    },
                    from: {
                        transform: "translateY(-50px)"
                    },
                    to: {
                        transform: "translateY(15px)"
                    }
                }, e => u.default.createElement(m, {
                    style: e
                }, u.default.createElement(h, {
                    size: r.PillSize.Large,
                    onClick: c
                }, u.default.createElement(s.IconPill, {
                    icon: p,
                    color: g,
                    size: r.PillSize.Large
                }), u.default.createElement(s.TextPill, {
                    text: n
                })))))
            };
            var r = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(127)),
                a = n(6),
                l = f(n(114)),
                o = f(n(1)),
                i = n(46),
                u = f(n(0)),
                c = f(n(2)),
                s = n(149),
                d = f(n(175));

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function() {
                    return e
                }, e
            }
            const m = (0, i.animated)((0, o.default)(c.default)({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    pointerEvents: "none"
                })),
                h = (0, o.default)(r.default)({
                    margin: "auto",
                    pointerEvents: "all"
                })
        },
        840: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    profilePictureUrl: t,
                    profilePictureUrlExpirationTimestampMs: n,
                    profilePictureUrlFallback: r
                } = e;
                return {
                    primaryUrl: null != t ? t : "",
                    expiryTimestamp: Number(n),
                    fallbackUrl: null != r ? r : ""
                }
            }
        },
        841: function(e, t, n) {
            "use strict";
            var r = Array.isArray,
                a = Object.keys,
                l = Object.prototype.hasOwnProperty;
            e.exports = function e(t, n) {  // arg1: URL filtered Object
                if (t === n) return !0; 
                if (t && n && "object" == typeof t && "object" == typeof n) {   // [URL REGEX]# check function
                    var o, i, u, c = r(t),
                        s = r(n);
                    if (c && s) {
                        if ((i = t.length) != n.length) return !1;
                        for (o = i; 0 != o--;)
                            if (!e(t[o], n[o])) return !1;
                        return !0
                    }
                    if (c != s) return !1;
                    var d = t instanceof Date,
                        f = n instanceof Date;
                    if (d != f) return !1;
                    if (d && f) return t.getTime() == n.getTime();
                    var p = t instanceof RegExp,
                        m = n instanceof RegExp;
                    if (p != m) return !1;
                    if (p && m) return t.toString() == n.toString();
                    var h = a(t);
                    if ((i = h.length) !== a(n).length) return !1;
                    for (o = i; 0 != o--;)
                        if (!l.call(n, h[o])) return !1;
                    for (o = i; 0 != o--;)
                        if (!e(t[u = h[o]], n[u])) return !1;
                    return !0
                }
                return t != t && n != n
            }
        },
        842: function(e, t, n) {
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
                    d: "M5 13.5a4 4 0 014-4h10a4 4 0 014 4v9a4 4 0 01-4 4H9a4 4 0 01-4-4v-9zm11.577 8.06a1 1 0 00.49-1.683l-1.585-1.585a.25.25 0 010-.354l3.225-3.224c.391-.391.395-1.035.004-1.426a1.005 1.005 0 00-1.419.01l-3.225 3.225a.25.25 0 01-.353 0L12.12 14.93a1 1 0 00-1.683.49l-1.414 6.36a1 1 0 001.193 1.194l6.361-1.414z",
                    clipRule: "evenodd"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M25.829 21.532l3.723 1.861A1 1 0 0031 22.5V13.5a1 1 0 00-1.448-.894l-3.723 1.861A1.5 1.5 0 0025 15.81v4.38a1.5 1.5 0 00.829 1.342z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        843: function(e, t, n) {
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
                    d: "M5 13.5a4 4 0 014-4h10a4 4 0 014 4v9a4 4 0 01-4 4H9a4 4 0 01-4-4v-9zm13.703 7.785c.391.39.395 1.035.004 1.425-.39.391-1.028.38-1.419-.01l-3.113-3.113a.25.25 0 00-.353 0L10.709 22.7a1.005 1.005 0 01-1.42.01 1.013 1.013 0 01.005-1.425l3.113-3.113a.25.25 0 000-.354L9.3 14.712a1.005 1.005 0 01-.01-1.42 1.013 1.013 0 011.425.005l3.107 3.106a.25.25 0 00.353 0l3.107-3.106a1.013 1.013 0 011.425-.004c.391.39.38 1.028-.01 1.419l-3.107 3.107a.25.25 0 000 .353l3.113 3.113z",
                    clipRule: "evenodd"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M25.829 21.532l3.723 1.861A1 1 0 0031 22.5V13.5a1 1 0 00-1.448-.894l-3.723 1.861A1.5 1.5 0 0025 15.81v4.38a1.5 1.5 0 00.829 1.342z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        844: function(e, t, n) {
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
                    d: "M5 13.5a4 4 0 014-4h10a4 4 0 014 4v9a4 4 0 01-4 4H9a4 4 0 01-4-4v-9zm6.424.938a1 1 0 00-.49 1.683l1.585 1.585a.25.25 0 010 .354l-3.225 3.225a1.013 1.013 0 00-.004 1.425c.39.391 1.028.38 1.419-.01l3.225-3.225a.25.25 0 01.353 0l1.594 1.594a1 1 0 001.683-.49l1.414-6.361a1 1 0 00-1.193-1.194l-6.361 1.414z",
                    clipRule: "evenodd"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M25.829 21.532l3.723 1.861A1 1 0 0031 22.5V13.5a1 1 0 00-1.448-.894l-3.723 1.861A1.5 1.5 0 0025 15.81v4.38a1.5 1.5 0 00.829 1.342z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        845: function(e, t, n) {
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
                    d: "M17 9.5a.5.5 0 00-.5-.5H9a3 3 0 00-3 3v12a3 3 0 003 3h7.5a.5.5 0 00.5-.5v-1.355a.534.534 0 00-.435-.514c-1.16-.24-2.337-.872-3.153-2.123a1 1 0 111.676-1.093c.55.844 1.378 1.225 2.247 1.314.906.093 1.745-.147 2.156-.41l.012-.008.013-.007c.72-.433 1.07-1.216.96-1.808-.086-.47-.572-1.277-2.587-1.502h-.002c-2.498-.279-4.07-1.461-4.516-3.093-.429-1.562.294-3.195 1.625-4.035l.01-.006.01-.006c.42-.252.952-.428 1.53-.523a.531.531 0 00.454-.515V9.5z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M19 26.5a.5.5 0 00.5.5H27a3 3 0 003-3V12a3 3 0 00-3-3h-7.5a.5.5 0 00-.5.5v1.515c0 .232.16.431.381.5.998.312 1.976.936 2.518 2.047a1 1 0 01-1.798.876c-.299-.612-.976-1.009-1.888-1.143-.92-.135-1.781.047-2.16.268-.64.411-.93 1.168-.754 1.81.158.574.811 1.41 2.811 1.633h.004c2.484.279 4.021 1.447 4.33 3.129.285 1.554-.595 3.095-1.887 3.877a4.526 4.526 0 01-1.164.507.531.531 0 00-.393.503V26.5z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        846: function(e, t, n) {
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
                    d: "M23.504 22.125c0-.953-1.493-1.035-2.291-1.833-.798-.798-1.027-1.375-1.834-1.375-.807 0-1.375-.357-1.375-.917s-.595-.917-.916-.917c-.321 0-.917-.208-.917-.916 0-.708.565-.917 1.375-.917.986 0 1.386.917 2.292.917.304 0 .458-.224.458-.459 0-.516-.917-.787-.917-1.375 0-.804.86-1.317 1.375-1.833.516-.516.917-.94.917-1.833 0-.73-.968-1.687-2.292-1.687-.398 0-.458.413-.458 1.228 0 .816-.235.917-.458.917-.602 0-.986-2.077-1.834-2.077-1.69 0-4.583 1.171-4.583 3.91 0 3.654 2.302 3.677 3.667 5.042.956.956 1.375 1.601 1.375 3.208 0 1.154.53 1.905.916 2.292.388.387.459.802.459 2.75 0 .763.151.863.458.863.4 0 .734-.222 2.292-1.78 1.284-1.284 2.291-1.469 2.291-3.208zM18.004 29c-6.075 0-11-4.925-11-11s4.925-11 11-11c6.076 0 11 4.925 11 11s-4.924 11-11 11z",
                    clipRule: "evenodd"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        847: function(e, t, n) {
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
                    d: "M27.507 13.096a.93.93 0 01-.456 1.566l-5.918 1.315a.93.93 0 01-1.11-1.11l1.315-5.918a.93.93 0 011.566-.456l1.418 1.418a.25.25 0 00.353 0l2.618-2.618a1 1 0 111.414 1.414l-2.618 2.618a.25.25 0 000 .354l1.418 1.417z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M28.176 25.975c-.607.95-1.353 1.868-2.423 2.224-3.528 1.174-8.462-1.187-12.614-5.338-4.151-4.152-6.512-9.086-5.338-12.614.356-1.07 1.274-1.816 2.224-2.423a2.05 2.05 0 012.151-.037c.343.207.675.435.963.723a11.587 11.587 0 012.112 2.889c.299.579.213 1.271-.158 1.807l-1.453 2.098a.472.472 0 00-.055.437 11.554 11.554 0 002.63 4.045 11.557 11.557 0 004.044 2.63.472.472 0 00.437-.056l2.098-1.453c.536-.37 1.228-.457 1.808-.158 1.04.536 2.016 1.24 2.888 2.112.288.288.516.62.723.963a2.05 2.05 0 01-.037 2.15z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        848: function(e, t, n) {
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
                    d: "M28.707 7.293a1 1 0 010 1.414l-2.616 2.616a.25.25 0 000 .354l2.616 2.616a1 1 0 01-1.414 1.414l-2.616-2.616a.25.25 0 00-.354 0l-2.616 2.616a1 1 0 01-1.414-1.414l2.616-2.616a.25.25 0 000-.354l-2.616-2.616a1 1 0 011.414-1.414l2.616 2.616a.25.25 0 00.354 0l2.616-2.616a1 1 0 011.414 0z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M28.176 25.975c-.607.95-1.353 1.868-2.423 2.224-3.528 1.174-8.462-1.187-12.614-5.338-4.151-4.152-6.512-9.086-5.338-12.614.356-1.07 1.274-1.816 2.224-2.423a2.05 2.05 0 012.151-.037c.343.207.675.435.963.723a11.587 11.587 0 012.112 2.889c.299.579.213 1.271-.158 1.807l-1.453 2.098a.472.472 0 00-.055.437 11.554 11.554 0 002.63 4.045 11.557 11.557 0 004.044 2.63.472.472 0 00.437-.056l2.098-1.453c.536-.37 1.228-.457 1.808-.158 1.04.536 2.016 1.24 2.888 2.112.288.288.516.62.723.963a2.05 2.05 0 01-.037 2.15z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        849: function(e, t, n) {
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
                    d: "M21.493 9.904a.93.93 0 01.456-1.566l5.918-1.315a.93.93 0 011.11 1.11l-1.315 5.918a.93.93 0 01-1.566.456l-1.418-1.418a.25.25 0 00-.353 0l-2.618 2.618a1 1 0 01-1.414-1.414l2.618-2.618a.25.25 0 000-.354l-1.418-1.417z"
                }), a.default.createElement("path", {
                    fill: "currentColor",
                    d: "M28.176 25.975c-.607.95-1.353 1.868-2.423 2.224-3.528 1.174-8.462-1.187-12.614-5.338-4.151-4.152-6.512-9.086-5.338-12.614.356-1.07 1.274-1.816 2.224-2.423a2.05 2.05 0 012.151-.037c.343.207.675.435.963.723a11.587 11.587 0 012.112 2.889c.299.579.213 1.271-.158 1.807l-1.453 2.098a.472.472 0 00-.055.437 11.554 11.554 0 002.63 4.045 11.557 11.557 0 004.044 2.63.472.472 0 00.437-.056l2.098-1.453c.536-.37 1.228-.457 1.808-.158 1.04.536 2.016 1.24 2.888 2.112.288.288.516.62.723.963a2.05 2.05 0 01-.037 2.15z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        850: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    inThread: t,
                    openFullscreen: n,
                    videoState: c,
                    dispatch: m,
                    timeRemaining: g,
                    videoDuration: y,
                    isVisible: b
                } = e, E = (0, r.useTheme)(), M = (0, p.useCallback)(e => {
                    m({
                        type: a.Actions.TogglePlay
                    }), e.stopPropagation()
                }, [m]), S = (0, p.useCallback)(e => {
                    m({
                        type: a.Actions.ChangeVolume,
                        volume: e
                    })
                }, [m]), T = (0, p.useCallback)(e => {
                    m({
                        type: a.Actions.ToggleMute
                    }), e.stopPropagation()
                }, [m]);
                return p.default.createElement(_, null, p.default.createElement(v, {
                    isVisible: b
                }, p.default.createElement(P, null, p.default.createElement(h.default, {
                    "aria-label": c.playState === a.States.Playing ? u.default._("Pause Video", null, {
                        hk: "1HV8j4"
                    }).toString() : u.default._("Play Video", null, {
                        hk: "G0Okm"
                    }).toString(),
                    telemetryName: "videoPlayPauseButton",
                    size: h.RoundButtonSize.Medium,
                    icon: c.playState === a.States.Playing ? s.default : d.default,
                    iconColor: E.semanticColors.textWhite,
                    buttonColor: "transparent",
                    onClick: M,
                    silentPressedState: !0
                })), p.default.createElement(w, null, p.default.createElement(O, {
                    use: "subtext-medium"
                }, (0, i.formatDuration)(g))), p.default.createElement(l.default, {
                    videoState: c,
                    dispatch: m,
                    videoDuration: y
                }), t && n && p.default.createElement(C, {
                    "aria-label": u.default._("Open video in fullscreen", null, {
                        hk: "2Pkm4o"
                    }).toString(),
                    telemetryName: "openMediaViewer",
                    size: h.RoundButtonSize.Medium,
                    icon: f.default,
                    iconColor: E.semanticColors.textWhite,
                    buttonColor: "transparent",
                    onClick: n,
                    silentPressedState: !0
                }), p.default.createElement(o.default, {
                    isMuted: c.isMuted,
                    volume: c.volume,
                    onVolumeChange: S,
                    onToggleMute: T
                })))
            };
            var r = n(6),
                a = n(204),
                l = E(n(851)),
                o = E(n(852)),
                i = n(39),
                u = E(n(5)),
                c = E(n(1)),
                s = E(n(853)),
                d = E(n(169)),
                f = E(n(412)),
                p = b(n(0)),
                m = E(n(2)),
                h = b(n(22)),
                g = E(n(4));

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function() {
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
            const _ = (0, c.default)(m.default)(e => ({
                    width: "100%",
                    position: "absolute",
                    bottom: "0",
                    padding: 8,
                    alignItems: "center"
                })),
                v = (0, c.default)(m.default)(e => ({
                    maxWidth: 500,
                    width: "100%",
                    height: 40,
                    flexDirection: "row",
                    padding: "6px 12px 6px 12px",
                    borderRadius: 12,
                    opacity: e.isVisible ? 1 : 0,
                    backgroundColor: "rgba(0, 0, 0, 0.34)",
                    backdropFilter: "blur(15px)"
                })),
                P = (0, c.default)(m.default)({
                    width: 28,
                    alignItems: "center",
                    justifyContent: "center"
                }),
                w = (0, c.default)(m.default)({
                    width: 50,
                    alignItems: "center",
                    justifyContent: "center"
                }),
                O = (0, c.default)(g.default)(e => ({
                    color: e.theme.semanticColors.textWhite,
                    fontWeight: "bold"
                })),
                C = (0, c.default)(h.default)({
                    marginLeft: 4,
                    marginRight: 6
                })
        },
        851: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    videoState: t,
                    dispatch: n,
                    videoDuration: o
                } = e, u = (0, i.useRef)(null), [c, s] = (0, i.useState)(!1), [d, y] = (0, i.useState)(0), [b, E] = (0, i.useState)(r.States.Paused), _ = e => {
                    if (u.current && t.playState != r.States.Loading) {
                        n({
                            type: r.Actions.Pause
                        });
                        const t = (0, a.getClickPositionInsideScrubber)(e, u),
                            l = Math.max(0, Math.min(o, o * t));
                        y(l)
                    }
                }, v = t.playState === r.States.Loading ? 0 : t.duration - t.timeRemaining, P = c ? d : v, w = function(e, t) {
                    if (0 === t) return 0;
                    return t / e * 100
                }(o, P);
                return i.default.createElement(f, {
                    onClick: e => e.stopPropagation(),
                    onMouseDown: e => {
                        E(t.playState), _(e), s(!0), e.stopPropagation()
                    },
                    onMouseMove: e => {
                        c && _(e), e.stopPropagation()
                    },
                    onMouseUp: e => {
                        if (c && t.playState != r.States.Loading) {
                            const e = d,
                                a = t.duration - e;
                            n({
                                type: r.Actions.Seek,
                                timeRemaining: a
                            })
                        }
                        b === r.States.Playing && n({
                            type: r.Actions.Play
                        }), s(!1), e.stopPropagation()
                    },
                    "aria-label": l.default._("Seek Slider", null, {
                        hk: "3gUFZr"
                    }).toString(),
                    role: "slider",
                    "aria-valuemin": 0,
                    "aria-valuemax": o,
                    "aria-valuenow": P,
                    onActivate: null
                }, i.default.createElement(p, null, i.default.createElement(m, {
                    ref: u
                }, i.default.createElement(h, {
                    width: w
                })), i.default.createElement(g, {
                    position: w,
                    engaged: c
                })))
            };
            var r = n(204),
                a = n(278),
                l = d(n(5)),
                o = d(n(1)),
                i = s(n(0)),
                u = s(n(2));

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function s(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, o.default)(u.FocusableView)({
                    height: "100%",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }),
                p = (0, o.default)(u.default)({
                    width: "95%",
                    height: "6px"
                }),
                m = (0, o.default)(u.default)({
                    width: "100%",
                    height: "6px",
                    flexDirection: "row",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: "3px",
                    overflow: "hidden"
                }),
                h = (0, o.default)(u.default)(e => ({
                    backgroundColor: e.theme.semanticColors.textWhite,
                    borderRadius: "3px",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: `${e.width}%`
                })),
                g = (0, o.default)(u.default)(e => ({
                    height: e.engaged ? "18px" : "16px",
                    width: e.engaged ? "18px" : "16px",
                    backgroundColor: e.theme.semanticColors.textWhite,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                    borderRadius: "50%",
                    position: "absolute",
                    top: e.engaged ? -6 : -5,
                    left: `calc(${e.position}% - ${e.engaged?9:7}px);`
                }))
        },
        852: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    volume: t,
                    isMuted: n,
                    onVolumeChange: i,
                    onToggleMute: d
                } = e, p = (0, r.useTheme)(), m = (0, s.useRef)(null), h = (0, s.useRef)(null), [P, w] = (0, s.useState)(!1), O = (0, s.useCallback)((0, l.throttle)(e => {
                    const t = M(e.clientY);
                    i(t), e.stopPropagation()
                }, 30), []), C = e => {
                    window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", C), e.stopPropagation()
                }, M = e => {
                    const t = (0, a.getElementPosition)(m),
                        n = (0, a.getElementPosition)(h),
                        r = n ? n.height : 0;
                    if (t) {
                        const n = t.y - e + t.height + r / 2;
                        return Math.max(0, Math.min(1, n / t.height))
                    }
                    return 0
                };
                return s.default.createElement(g, {
                    onClick: e => {
                        const t = M(e.clientY);
                        i(t), e.stopPropagation()
                    },
                    onMouseEnter: () => {
                        w(!0)
                    },
                    onMouseLeave: () => {
                        w(!1)
                    },
                    onFocus: () => {
                        w(!0)
                    },
                    onBlur: () => {
                        w(!1)
                    }
                }, s.default.createElement(f.default, {
                    "aria-label": n ? o.default._("Unmute Video", null, {
                        hk: "NNXg6"
                    }).toString() : o.default._("Mute Video", null, {
                        hk: "4gdtmD"
                    }).toString(),
                    telemetryName: "videoToggleAudioButton",
                    size: f.RoundButtonSize.Medium,
                    icon: 0 === t || n ? u.default : c.default,
                    iconColor: p.semanticColors.textWhite,
                    buttonColor: "transparent",
                    onClick: d,
                    silentPressedState: !0
                }), s.default.createElement(y, {
                    hovered: P,
                    onMouseDown: e => {
                        window.addEventListener("mousemove", O), window.addEventListener("mouseup", C), e.stopPropagation()
                    }
                }, s.default.createElement(b, {
                    onActivate: null,
                    "aria-label": o.default._("Volume Slider", null, {
                        hk: "1Fn51m"
                    }).toString(),
                    role: "slider",
                    "aria-valuemin": 0,
                    "aria-valuemax": 1,
                    "aria-valuenow": t
                }, s.default.createElement(E, {
                    ref: m
                }), s.default.createElement(_, {
                    volume: n ? 0 : 100 * t
                }), s.default.createElement(v, {
                    volume: n ? 0 : 78 * t,
                    ref: h
                }))))
            };
            var r = n(6),
                a = n(278),
                l = n(117),
                o = h(n(5)),
                i = h(n(1)),
                u = h(n(410)),
                c = h(n(411)),
                s = m(n(0)),
                d = m(n(2)),
                f = m(n(22));

            function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function() {
                    return e
                }, e
            }

            function m(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = p();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const g = (0, i.default)(d.default)({
                    width: "28px",
                    alignItems: "center",
                    justifyContent: "center"
                }),
                y = (0, i.default)(d.default)(e => ({
                    height: 82,
                    position: "absolute",
                    bottom: 27,
                    opacity: e.hovered ? 1 : 0,
                    justifyContent: "flex-end",
                    paddingBottom: 3
                })),
                b = (0, i.default)(d.FocusableView)({
                    width: 28,
                    height: 52,
                    alignItems: "center"
                }),
                E = (0, i.default)(d.default)({
                    height: "100%",
                    width: "6px",
                    backgroundColor: "rgba(255, 255, 255, 0.5)",
                    borderRadius: "3px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)"
                }),
                _ = (0, i.default)(d.default)(e => ({
                    height: `${e.volume}%`,
                    width: "6px",
                    backgroundColor: e.theme.semanticColors.textWhite,
                    borderRadius: "3px",
                    position: "absolute",
                    bottom: 0
                })),
                v = (0, i.default)(d.default)(e => ({
                    height: "12px",
                    width: "12px",
                    backgroundColor: e.theme.semanticColors.textWhite,
                    borderRadius: "50%",
                    position: "absolute",
                    bottom: `${e.volume}%`,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)"
                }))
        },
        853: function(e, t, n) {
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
                    d: "M11 8.5A1.5 1.5 0 009.5 10v16a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5V10A1.5 1.5 0 0015 8.5h-4zM21 8.5a1.5 1.5 0 00-1.5 1.5v16a1.5 1.5 0 001.5 1.5h4a1.5 1.5 0 001.5-1.5V10A1.5 1.5 0 0025 8.5h-4z"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        854: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                const {
                    videoState: t,
                    dispatch: n
                } = e, l = (0, c.useCallback)(e => {
                    n({
                        type: r.Actions.ToggleMute
                    }), e.stopPropagation()
                }, [n]), f = (0, o.computeHoursMinutesSeconds)(t.playState !== r.States.Loading ? t.duration : 0);
                return c.default.createElement(s.default, {
                    css: {
                        ":focus, :hover": {
                            ".messenger-video-preview-volume": {
                                opacity: 1
                            }
                        }
                    }
                }, t.playState !== r.States.Playing && c.default.createElement(b, {
                    use: "subtext-medium"
                }, f), c.default.createElement(g, {
                    className: "messenger-video-preview-volume"
                }, c.default.createElement(y, {
                    telemetryName: "audioToggle",
                    "aria-label": t.isMuted ? a.default._("Unmute", null, {
                        hk: "1a91Ob"
                    }).toString() : a.default._("Mute", null, {
                        hk: "2hOnDD"
                    }).toString(),
                    size: d.RoundButtonSize.Small,
                    icon: t.isMuted ? i.default : u.default,
                    iconColor: "white",
                    iconSize: 20,
                    use: d.RoundButtonUse.Transparent,
                    silentPressedState: !0,
                    onClick: l
                })))
            };
            var r = n(204),
                a = h(n(5)),
                l = h(n(1)),
                o = n(115),
                i = h(n(410)),
                u = h(n(411)),
                c = m(n(0)),
                s = h(n(2)),
                d = m(n(22)),
                f = h(n(4));

            function p() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return p = function() {
                    return e
                }, e
            }

            function m(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = p();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const g = (0, l.default)(s.default)({
                    bottom: 0,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    padding: 5,
                    position: "absolute",
                    opacity: 0,
                    width: "100%"
                }),
                y = (0, l.default)(d.default)({
                    filter: "drop-shadow(0px 0px 1px rgba(0, 0, 0, .7))"
                }),
                b = (0, l.default)(f.default)({
                    position: "absolute",
                    color: "#FFFFFF",
                    bottom: 5,
                    left: 5,
                    padding: 5,
                    textShadow: "0px 0px 6px #000000"
                })
        },
        855: function(e, t, n) {
            e.exports = function() {
                "use strict";
                return function(e, t, n) {
                    var r = t.prototype,
                        a = r.format,
                        l = {
                            LTS: "h:mm:ss A",
                            LT: "h:mm A",
                            L: "MM/DD/YYYY",
                            LL: "MMMM D, YYYY",
                            LLL: "MMMM D, YYYY h:mm A",
                            LLLL: "dddd, MMMM D, YYYY h:mm A"
                        };
                    n.en.formats = l, r.format = function(e) {
                        void 0 === e && (e = "YYYY-MM-DDTHH:mm:ssZ");
                        var t = this.$locale().formats,
                            n = void 0 === t ? {} : t,
                            r = e.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(e, t, r) {
                                var a = r && r.toUpperCase();
                                return t || n[r] || l[r] || n[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, n) {
                                    return t || n.slice(1)
                                }))
                            }));
                        return a.call(this, r)
                    }
                }
            }()
        },
        856: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function({
                content: e,
                entryWidth: t
            }) {
                const [{
                    showLeft: n,
                    showRight: l
                }, o] = (0, s.useReducer)(v, {
                    showLeft: !1,
                    showRight: !1
                }), p = (0, f.useTheme)(), m = (0, s.useRef)(null), h = a.default._("Horizontal Scrolling Area", null, {
                    hk: "1rYM8w"
                }).toString(), y = (0, s.useCallback)(() => {
                    if (!m.current) return;
                    const e = m.current.scrollLeft,
                        t = m.current.scrollWidth - m.current.clientWidth;
                    o({
                        type: "scroll_changed",
                        scrollLeft: e,
                        maxScrollLeft: t
                    })
                }, []), P = e.length;
                (0, s.useEffect)(() => {
                    y()
                }, [P, y]);
                const w = (0, s.useCallback)(() => {
                        m.current && m.current.scrollTo({
                            left: m.current.scrollLeft - t,
                            behavior: "smooth"
                        })
                    }, []),
                    O = (0, s.useCallback)(() => {
                        m.current && m.current.scrollTo({
                            left: m.current.scrollLeft + t,
                            behavior: "smooth"
                        })
                    }, []);
                return s.default.createElement(r.default, {
                    style: {
                        width: "100%"
                    }
                }, s.default.createElement(d.default, {
                    id: "horizontal-scroll-view",
                    style: {
                        width: "100%"
                    },
                    innerRef: m,
                    onScroll: y
                }, s.default.createElement(g, {
                    "aria-label": h
                }, e)), s.default.createElement(c.Transition, {
                    items: n,
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
                }, e => e ? e => s.default.createElement(E, null, s.default.createElement(b, {
                    "aria-label": a.default._("Scroll Left", null, {
                        hk: "2of6De"
                    }).toString(),
                    telemetryName: "scroll_left_button",
                    style: e,
                    onActivate: w
                }, s.default.createElement(i.default, {
                    size: 20,
                    color: p.colors.base80
                }))) : null), s.default.createElement(c.Transition, {
                    items: l,
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
                }, e => e ? e => s.default.createElement(_, null, s.default.createElement(b, {
                    "aria-label": a.default._("Scroll Right", null, {
                        hk: "5ZJcG"
                    }).toString(),
                    style: e,
                    telemetryName: "scroll_right_button",
                    onActivate: O
                }, s.default.createElement(u.default, {
                    size: 20,
                    color: p.colors.base80
                }))) : null))
            };
            var r = h(n(2)),
                a = p(n(5)),
                l = p(n(1)),
                o = p(n(33)),
                i = p(n(193)),
                u = p(n(161)),
                c = n(46),
                s = h(n(0)),
                d = p(n(45)),
                f = n(6);

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function() {
                    return e
                }, e
            }

            function h(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if (Object.prototype.hasOwnProperty.call(e, a)) {
                        var l = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                        l && (l.get || l.set) ? Object.defineProperty(n, a, l) : n[a] = e[a]
                    } return n.default = e, t && t.set(e, n), n
            }
            const g = (0, l.default)(o.default)({
                    flexDirection: "row",
                    padding: "8px 12px"
                }),
                y = (0, l.default)(r.default)(e => ({
                    position: "absolute",
                    height: "50%",
                    width: 24,
                    top: 0,
                    alignItems: "center",
                    justifyContent: "flex-end"
                })),
                b = (0, l.default)(r.FocusableView)(e => ({
                    backgroundColor: e.theme.colors.base20,
                    ...e.theme.effects.blur,
                    borderRadius: 12
                })),
                E = (0, c.animated)((0, l.default)(y)({
                    left: 16
                })),
                _ = (0, c.animated)((0, l.default)(y)({
                    right: 16
                }));

            function v(e, t) {
                let n = e;
                switch (t.type) {
                    case "scroll_changed":
                        t.scrollLeft > 50 && !e.showLeft ? n = {
                            ...n,
                            showLeft: !0
                        } : t.scrollLeft < 50 && e.showLeft && (n = {
                            ...n,
                            showLeft: !1
                        }), t.scrollLeft < t.maxScrollLeft - 50 && !e.showRight ? n = {
                            ...n,
                            showRight: !0
                        } : t.scrollLeft > t.maxScrollLeft - 50 && e.showRight && (n = {
                            ...n,
                            showRight: !1
                        })
                }
                return n
            }
        },
        87: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createMap = function(e, t) {
                if (!e) throw new Error("createMap: Was given a null or undefined value");
                const n = {};
                for (const r of e) {
                    const e = t(r);
                    if (n[e]) throw new Error(`createMap: Found duplicate key (${e}) in source list`);
                    n[e] = r
                }
                return n
            }, t.createMapWithArrayValues = function(e, t) {
                if (!e) throw new Error("createMapWithArrayValues: Was given a null or undefined value");
                const n = {};
                for (const r of e) {
                    const e = t(r);
                    n[e] || (n[e] = []), n[e].push(r)
                }
                return n
            }, t.diffAndMutate = function(e, t, n) {
                return i(e, o(e, t, n))
            }, t.mapDict = function(e, t) {
                const n = {};
                for (const r in e || {}) n[r] = t(e[r]);
                return n
            }, t.diffMaps = o, t.applyDiffToMap = i, t.arrayEqualsIgnoreOrder = function(e, t) {
                if (e.length !== t.length) return !1;
                const n = new Set(e);
                return t.every(e => n.has(e))
            }, t.getNonrecursiveObjectSchema = function e(t) {
                const n = {};
                return Object.keys(t).forEach(r => {
                    null === t[r] ? n[r] = "null" : "object" == typeof t[r] ? n[r] = e(t[r]) : n[r] = typeof t[r]
                }), n
            }, t.removeUndefinedKeys = function(e) {
                return Object.keys(e).forEach(t => void 0 === e[t] && delete e[t]), e
            }, t.deepMerge = function e(t, n, r = !0) {
                if (t === n || null == t || null == n || "object" != typeof t || "object" != typeof n) return n;
                if (Array.isArray(n)) {
                    if (!Array.isArray(t)) return n;
                    const {
                        length: r
                    } = n;
                    let a = t.length !== r ? t.slice(0, r) : t;
                    for (let l = 0; l < r; l++) {
                        const o = t[l],
                            i = e(o, n[l]);
                        i !== o && (a === t && (a = t.slice(0, r)), a[l] = i)
                    }
                    return a
                }
                if (Array.isArray(t)) return n; {
                    let a = t;
                    for (const l in n) {
                        const o = t[l],
                            i = e(o, n[l], r);
                        i !== o && (a === t && (a = {
                            ...t
                        }), a[l] = i)
                    }
                    if (r)
                        for (const e in t) l.call(n, e) || (a === t && (a = {
                            ...t
                        }), delete a[e]);
                    return a
                }
            }, t.pick = function(e, ...t) {
                if (!t.length) throw new Error("keys cannot be empty");
                const n = {};
                for (const r of t) n[r] = e[r];
                return n
            }, t.caution_deepEquals = void 0;
            var r, a = (r = n(841)) && r.__esModule ? r : {
                default: r
            };
            const {
                hasOwnProperty: l
            } = Object.prototype;

            function o(e, t, n) {
                if (!e) return {
                    changed: {
                        ...t
                    } || {},
                    removed: {},
                    areEqual: e == t
                };
                if (!t) return {
                    removed: {
                        ...e
                    } || {},
                    changed: {},
                    areEqual: e == t
                };
                const r = {};
                for (const n in t)
                    if (t.hasOwnProperty(n)) {
                        const l = e[n],
                            o = t[n];
                        (0, a.default)(l, o) || (r[n] = o)
                    } const l = {};
                for (const r in e) e.hasOwnProperty(r) && (void 0 !== t[r] || n && n(e[r]) || (l[r] = e[r]));
                return {
                    changed: r,
                    removed: l,
                    areEqual: 0 === Object.keys(r).length && 0 === Object.keys(l).length
                }
            }

            function i(e, t) {
                let n = !1;
                const {
                    changed: r,
                    removed: a
                } = t;
                for (const t in r) n = !0, e[t] = r[t];
                for (const t in a) n = !0, delete e[t];
                return n
            }
            const u = a.default;
            t.caution_deepEquals = u
        },
        892: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e) {
                return a.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 32 32",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, a.default.createElement("path", {
                    id: "NullProfileIcon__null-profile",
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M16.267 21.333c-3.902 0-7.243 1.66-8.695 4.029a.738.738 0 00-.105.384c0 .224.098.44.275.58a13.561 13.561 0 008.525 3.007c3.237 0 6.196-1.135 8.524-3.006a.743.743 0 00.276-.581.738.738 0 00-.105-.384c-1.453-2.369-4.794-4.029-8.695-4.029m-.267-16c-3.195 0-5.867 2.8-5.867 6.43 0 4.73 2.715 6.904 5.867 6.904s5.867-2.173 5.867-6.903c0-3.632-2.671-6.43-5.867-6.43M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16"
                }))
            };
            var r, a = (r = n(0)) && r.__esModule ? r : {
                default: r
            }
        },
        893: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(6),
                a = n(211),
                l = n(271),
                o = n(294),
                i = p(n(5)),
                u = n(115),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
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
                s = p(n(2)),
                d = p(n(4));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const m = {
                small: {
                    photoSize: 32,
                    textBottomPosition: 0,
                    textSize: "caption-xsmall-bold",
                    stringWidthThreshold: {
                        medium: 16,
                        long: 22,
                        xlong: 20
                    },
                    pillWidth: {
                        short: 18,
                        medium: 24,
                        long: 24,
                        xlong: 29
                    },
                    pillClipPath: {
                        short: l.PRESENCE_RECENTLY_ACTIVE_PATH_SHORT_32,
                        medium: l.PRESENCE_RECENTLY_ACTIVE_PATH_MEDIUM_32,
                        long: l.PRESENCE_RECENTLY_ACTIVE_PATH_LONG_32,
                        xlong: l.PRESENCE_RECENTLY_ACTIVE_PATH_XLONG_32
                    },
                    pillComponent: {
                        short: o.ProfilePhotoRecentlyActivePillShort32,
                        medium: o.ProfilePhotoRecentlyActivePillMedium32,
                        long: o.ProfilePhotoRecentlyActivePillLong32,
                        xlong: o.ProfilePhotoRecentlyActivePillXLong32
                    }
                },
                large: {
                    photoSize: 50,
                    textBottomPosition: 1,
                    textSize: "caption-small-bold",
                    stringWidthThreshold: {
                        medium: 18,
                        long: 24,
                        xlong: 31
                    },
                    pillWidth: {
                        short: 22,
                        medium: 28,
                        long: 32,
                        xlong: 39
                    },
                    pillClipPath: {
                        short: l.PRESENCE_RECENTLY_ACTIVE_PATH_SHORT_50,
                        medium: l.PRESENCE_RECENTLY_ACTIVE_PATH_MEDIUM_50,
                        long: l.PRESENCE_RECENTLY_ACTIVE_PATH_LONG_50,
                        xlong: l.PRESENCE_RECENTLY_ACTIVE_PATH_XLONG_50
                    },
                    pillComponent: {
                        short: o.ProfilePhotoRecentlyActivePillShort50,
                        medium: o.ProfilePhotoRecentlyActivePillMedium50,
                        long: o.ProfilePhotoRecentlyActivePillLong50,
                        xlong: o.ProfilePhotoRecentlyActivePillXLong50
                    }
                }
            };
            var h = (0, c.memo)((function({
                src: e,
                lastActiveTimestampMs: t,
                onLapsedOutOfRecentlyActive: n,
                profilePhotoSize: l
            }) {
                const o = (0, c.useRef)(),
                    [f, p] = (0, c.useState)(null),
                    [h, g] = (0, c.useState)(null),
                    y = m[l],
                    [b, E] = (0, c.useState)(y.textSize),
                    [_, v] = (0, c.useState)(y.textBottomPosition),
                    P = (0, c.useRef)(null),
                    w = (0, r.useTheme)();
                if ((0, c.useEffect)(() => (g((0, u.computeRecentlyActiveTimestamp)(t)), (0, u.timestampIsInLast60Min)(t) && (o.current = setInterval(() => {
                        const e = (0, u.computeRecentlyActiveTimestamp)(t);
                        g(e), null === e && clearInterval(o.current), (0, u.timestampIsInLast60Min)(t) || n()
                    }, 6e4)), () => {
                        clearInterval(o.current)
                    }), [t, n]), (0, c.useEffect)(() => {
                        P.current && p(P.current.offsetWidth)
                    }, [h, b]), !h) return null;
                let O = "xlong";
                null != f && (f < y.stringWidthThreshold.medium ? O = "short" : f < y.stringWidthThreshold.long ? O = "medium" : f < y.stringWidthThreshold.xlong ? O = "long" : (O = "xlong", "small" === l && "caption-xxsmall-bold" !== b && (E("caption-xxsmall-bold"), v(2))));
                const C = y.pillWidth[O],
                    M = null != f ? (C - f) / 2 : 0,
                    S = y.pillComponent[O],
                    T = y.pillClipPath[O],
                    R = c.default.createElement(d.default, {
                        use: b,
                        ref: P,
                        color: w.colors.green,
                        css: {
                            left: M,
                            bottom: _,
                            position: "absolute",
                            minWidth: "fit-content"
                        }
                    }, i.default._("{recently active timestamp}m", [i.default._param("recently active timestamp", h)], {
                        hk: "3PLxRc"
                    })),
                    x = null != S ? c.default.createElement(S, {
                        width: C
                    }, R) : null;
                return c.default.createElement(s.default, null, c.default.createElement(a.BaseProfilePhoto, {
                    src: e,
                    size: y.photoSize,
                    clipPathId: T
                }), x)
            }));
            t.default = h
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/feedback~incoming_call~messenger~missed_call~rooms_incoming~uiexplorer.bundle.js.map