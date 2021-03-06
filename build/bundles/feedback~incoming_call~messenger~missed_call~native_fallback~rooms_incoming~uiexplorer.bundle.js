(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    103: function (e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = ((r = n(1)) && r.__esModule ? r : {
            default: r
        }).default.div(({ grow: e = "initial", width: t = "auto", styleFirstItem: n = {} }) => ({
            width: t,
            flexGrow: e,
            marginLeft: 6,
            "&:first-of-type": {
                marginLeft: 0,
                ...n
            }
        }));
        t.default = o
    },
    104: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.parseQueryString = function (e) {
                if (!e)
                    return {};
                const t = {}
                    , n = ("?" === e[0] ? e.substr(1) : e).split("&");
                for (let e = 0; e < n.length; e++) {
                    const r = n[e].split("=");
                    2 === r.length && (t[decodeURIComponent(r[0])] = decodeURIComponent(r[1] || ""))
                }
                return t
            }
            ,
            t.constructUrl = function (e, t, n, r) {
                let i = `https://${t}.${e}`;
                n && (n.startsWith("/") || (i += "/"),
                    i += n);
                r && Object.keys(r).length > 0 && (i += "?",
                    i += o.default.stringify(r));
                return i
            }
            ,
            t.getQueryParams = function (e, t) {
                const n = {
                    ...t
                };
                e && (n.locale = e);
                0;
                return n
            }
            ,
            t.isWhitelistedRtcUrl = function (e) {
                const t = new RegExp(/^https:\/\/(www|our|work)\./.source + /([\w\d\.]+\.(\w{3}\d|od|sb)\.)?/.source + /(facebook|workplace)\.com/.source + /\/messenger\/zenoncall/.source + /($|\?|\/|\.)/.source);
                return !!e.match(t)
            }
            ;
        var r, o = (r = n(779)) && r.__esModule ? r : {
            default: r
        }
    },
    109: function (e, t, n) {
        var r = n(48)
            , o = n(414).f
            , i = n(93)
            , a = n(151)
            , s = n(280)
            , c = n(857)
            , l = n(425);
        e.exports = function (e, t) {
            var n, u, d, f, p, h = e.target, E = e.global, _ = e.stat;
            if (n = E ? r : _ ? r[h] || s(h, {}) : (r[h] || {}).prototype)
                for (u in t) {
                    if (f = t[u],
                        d = e.noTargetGet ? (p = o(n, u)) && p.value : n[u],
                        !l(E ? u : h + (_ ? "." : "#") + u, e.forced) && void 0 !== d) {
                        if (typeof f == typeof d)
                            continue;
                        c(f, d)
                    }
                    (e.sham || d && d.sham) && i(f, "sham", !0),
                        a(n, u, f, e)
                }
        }
    },
    11: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0)
            , o = n.n(r)
            , i = n(3)
            , a = n.n(i)
            , s = o.a.createContext(null);
        var c = function (e) {
            e()
        }
            , l = {
                notify: function () { }
            };
        function u() {
            var e = c
                , t = []
                , n = [];
            return {
                clear: function () {
                    n = null,
                        t = null
                },
                notify: function () {
                    var r = t = n;
                    e((function () {
                        for (var e = 0; e < r.length; e++)
                            r[e]()
                    }
                    ))
                },
                get: function () {
                    return n
                },
                subscribe: function (e) {
                    var r = !0;
                    return n === t && (n = t.slice()),
                        n.push(e),
                        function () {
                            r && null !== t && (r = !1,
                                n === t && (n = t.slice()),
                                n.splice(n.indexOf(e), 1))
                        }
                }
            }
        }
        var d = function () {
            function e(e, t) {
                this.store = e,
                    this.parentSub = t,
                    this.unsubscribe = null,
                    this.listeners = l,
                    this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
            }
            var t = e.prototype;
            return t.addNestedSub = function (e) {
                return this.trySubscribe(),
                    this.listeners.subscribe(e)
            }
                ,
                t.notifyNestedSubs = function () {
                    this.listeners.notify()
                }
                ,
                t.handleChangeWrapper = function () {
                    this.onStateChange && this.onStateChange()
                }
                ,
                t.isSubscribed = function () {
                    return Boolean(this.unsubscribe)
                }
                ,
                t.trySubscribe = function () {
                    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper),
                        this.listeners = u())
                }
                ,
                t.tryUnsubscribe = function () {
                    this.unsubscribe && (this.unsubscribe(),
                        this.unsubscribe = null,
                        this.listeners.clear(),
                        this.listeners = l)
                }
                ,
                e
        }();
        function f(e) {
            var t = e.store
                , n = e.context
                , i = e.children
                , a = Object(r.useMemo)((function () {
                    var e = new d(t);
                    return e.onStateChange = e.notifyNestedSubs,
                    {
                        store: t,
                        subscription: e
                    }
                }
                ), [t])
                , c = Object(r.useMemo)((function () {
                    return t.getState()
                }
                ), [t]);
            Object(r.useEffect)((function () {
                var e = a.subscription;
                return e.trySubscribe(),
                    c !== t.getState() && e.notifyNestedSubs(),
                    function () {
                        e.tryUnsubscribe(),
                            e.onStateChange = null
                    }
            }
            ), [a, c]);
            var l = n || s;
            return o.a.createElement(l.Provider, {
                value: a
            }, i)
        }
        f.propTypes = {
            store: a.a.shape({
                subscribe: a.a.func.isRequired,
                dispatch: a.a.func.isRequired,
                getState: a.a.func.isRequired
            }),
            context: a.a.object,
            children: a.a.any
        };
        var p = f
            , h = n(34)
            , E = n(44)
            , _ = n(335)
            , v = n.n(_)
            , S = n(90)
            , y = n.n(S)
            , g = n(233)
            , m = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? r.useLayoutEffect : r.useEffect
            , A = []
            , b = [null, null];
        function O(e, t) {
            var n = e[1];
            return [t.payload, n + 1]
        }
        var T = function () {
            return [null, 0]
        };
        function R(e, t) {
            void 0 === t && (t = {});
            var n = t
                , i = n.getDisplayName
                , a = void 0 === i ? function (e) {
                    return "ConnectAdvanced(" + e + ")"
                }
                    : i
                , c = n.methodName
                , l = void 0 === c ? "connectAdvanced" : c
                , u = n.renderCountProp
                , f = void 0 === u ? void 0 : u
                , p = n.shouldHandleStateChanges
                , _ = void 0 === p || p
                , S = n.storeKey
                , R = void 0 === S ? "store" : S
                , C = n.withRef
                , I = void 0 !== C && C
                , N = n.forwardRef
                , M = void 0 !== N && N
                , D = n.context
                , x = void 0 === D ? s : D
                , w = Object(E.a)(n, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);
            y()(void 0 === f, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension"),
                y()(!I, "withRef is removed. To access the wrapped instance, use a ref on the connected component");
            y()("store" === R, "storeKey has been removed and does not do anything. To use a custom Redux store for specific components, create a custom React context with React.createContext(), and pass the context object to React Redux's Provider and specific components like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. You may also pass a {context : MyContext} option to connect");
            var P = x;
            return function (t) {
                var n = t.displayName || t.name || "Component"
                    , i = a(n)
                    , s = Object(h.a)({}, w, {
                        getDisplayName: a,
                        methodName: l,
                        renderCountProp: f,
                        shouldHandleStateChanges: _,
                        storeKey: R,
                        displayName: i,
                        wrappedComponentName: n,
                        WrappedComponent: t
                    })
                    , c = w.pure;
                var u = c ? r.useMemo : function (e) {
                    return e()
                }
                    ;
                function p(n) {
                    var a = Object(r.useMemo)((function () {
                        var e = n.forwardedRef
                            , t = Object(E.a)(n, ["forwardedRef"]);
                        return [n.context, e, t]
                    }
                    ), [n])
                        , c = a[0]
                        , l = a[1]
                        , f = a[2]
                        , p = Object(r.useMemo)((function () {
                            return c && c.Consumer && Object(g.isContextConsumer)(o.a.createElement(c.Consumer, null)) ? c : P
                        }
                        ), [c, P])
                        , v = Object(r.useContext)(p)
                        , S = Boolean(n.store) && Boolean(n.store.getState) && Boolean(n.store.dispatch)
                        , R = Boolean(v) && Boolean(v.store);
                    y()(S || R, 'Could not find "store" in the context of "' + i + '". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ' + i + " in connect options.");
                    var C = S ? n.store : v.store
                        , I = Object(r.useMemo)((function () {
                            return function (t) {
                                return e(t.dispatch, s)
                            }(C)
                        }
                        ), [C])
                        , N = Object(r.useMemo)((function () {
                            if (!_)
                                return b;
                            var e = new d(C, S ? null : v.subscription)
                                , t = e.notifyNestedSubs.bind(e);
                            return [e, t]
                        }
                        ), [C, S, v])
                        , M = N[0]
                        , D = N[1]
                        , x = Object(r.useMemo)((function () {
                            return S ? v : Object(h.a)({}, v, {
                                subscription: M
                            })
                        }
                        ), [S, v, M])
                        , w = Object(r.useReducer)(O, A, T)
                        , L = w[0][0]
                        , k = w[1];
                    if (L && L.error)
                        throw L.error;
                    var j = Object(r.useRef)()
                        , F = Object(r.useRef)(f)
                        , U = Object(r.useRef)()
                        , W = Object(r.useRef)(!1)
                        , G = u((function () {
                            return U.current && f === F.current ? U.current : I(C.getState(), f)
                        }
                        ), [C, L, f]);
                    m((function () {
                        F.current = f,
                            j.current = G,
                            W.current = !1,
                            U.current && (U.current = null,
                                D())
                    }
                    )),
                        m((function () {
                            if (_) {
                                var e = !1
                                    , t = null
                                    , n = function () {
                                        if (!e) {
                                            var n, r, o = C.getState();
                                            try {
                                                n = I(o, F.current)
                                            } catch (e) {
                                                r = e,
                                                    t = e
                                            }
                                            r || (t = null),
                                                n === j.current ? W.current || D() : (j.current = n,
                                                    U.current = n,
                                                    W.current = !0,
                                                    k({
                                                        type: "STORE_UPDATED",
                                                        payload: {
                                                            error: r
                                                        }
                                                    }))
                                        }
                                    };
                                M.onStateChange = n,
                                    M.trySubscribe(),
                                    n();
                                return function () {
                                    if (e = !0,
                                        M.tryUnsubscribe(),
                                        M.onStateChange = null,
                                        t)
                                        throw t
                                }
                            }
                        }
                        ), [C, M, I]);
                    var B = Object(r.useMemo)((function () {
                        return o.a.createElement(t, Object(h.a)({}, G, {
                            ref: l
                        }))
                    }
                    ), [l, t, G]);
                    return Object(r.useMemo)((function () {
                        return _ ? o.a.createElement(p.Provider, {
                            value: x
                        }, B) : B
                    }
                    ), [p, B, x])
                }
                var S = c ? o.a.memo(p) : p;
                if (S.WrappedComponent = t,
                    S.displayName = i,
                    M) {
                    var C = o.a.forwardRef((function (e, t) {
                        return o.a.createElement(S, Object(h.a)({}, e, {
                            forwardedRef: t
                        }))
                    }
                    ));
                    return C.displayName = i,
                        C.WrappedComponent = t,
                        v()(C, t)
                }
                return v()(S, t)
            }
        }
        var C = Object.prototype.hasOwnProperty;
        function I(e, t) {
            return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
        }
        function N(e, t) {
            if (I(e, t))
                return !0;
            if ("object" != typeof e || null === e || "object" != typeof t || null === t)
                return !1;
            var n = Object.keys(e)
                , r = Object.keys(t);
            if (n.length !== r.length)
                return !1;
            for (var o = 0; o < n.length; o++)
                if (!C.call(t, n[o]) || !I(e[n[o]], t[n[o]]))
                    return !1;
            return !0
        }
        var M = n(96);
        function D(e) {
            return function (t, n) {
                var r = e(t, n);
                function o() {
                    return r
                }
                return o.dependsOnOwnProps = !1,
                    o
            }
        }
        function x(e) {
            return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length
        }
        function w(e, t) {
            return function (t, n) {
                n.displayName;
                var r = function (e, t) {
                    return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e)
                };
                return r.dependsOnOwnProps = !0,
                    r.mapToProps = function (t, n) {
                        r.mapToProps = e,
                            r.dependsOnOwnProps = x(e);
                        var o = r(t, n);
                        return "function" == typeof o && (r.mapToProps = o,
                            r.dependsOnOwnProps = x(o),
                            o = r(t, n)),
                            o
                    }
                    ,
                    r
            }
        }
        var P = [function (e) {
            return "function" == typeof e ? w(e) : void 0
        }
            , function (e) {
                return e ? void 0 : D((function (e) {
                    return {
                        dispatch: e
                    }
                }
                ))
            }
            , function (e) {
                return e && "object" == typeof e ? D((function (t) {
                    return Object(M.bindActionCreators)(e, t)
                }
                )) : void 0
            }
        ];
        var L = [function (e) {
            return "function" == typeof e ? w(e) : void 0
        }
            , function (e) {
                return e ? void 0 : D((function () {
                    return {}
                }
                ))
            }
        ];
        function k(e, t, n) {
            return Object(h.a)({}, n, {}, e, {}, t)
        }
        var j = [function (e) {
            return "function" == typeof e ? function (e) {
                return function (t, n) {
                    n.displayName;
                    var r, o = n.pure, i = n.areMergedPropsEqual, a = !1;
                    return function (t, n, s) {
                        var c = e(t, n, s);
                        return a ? o && i(c, r) || (r = c) : (a = !0,
                            r = c),
                            r
                    }
                }
            }(e) : void 0
        }
            , function (e) {
                return e ? void 0 : function () {
                    return k
                }
            }
        ];
        function F(e, t, n, r) {
            return function (o, i) {
                return n(e(o, i), t(r, i), i)
            }
        }
        function U(e, t, n, r, o) {
            var i, a, s, c, l, u = o.areStatesEqual, d = o.areOwnPropsEqual, f = o.areStatePropsEqual, p = !1;
            function h(o, p) {
                var h, E, _ = !d(p, a), v = !u(o, i);
                return i = o,
                    a = p,
                    _ && v ? (s = e(i, a),
                        t.dependsOnOwnProps && (c = t(r, a)),
                        l = n(s, c, a)) : _ ? (e.dependsOnOwnProps && (s = e(i, a)),
                            t.dependsOnOwnProps && (c = t(r, a)),
                            l = n(s, c, a)) : v ? (h = e(i, a),
                                E = !f(h, s),
                                s = h,
                                E && (l = n(s, c, a)),
                                l) : l
            }
            return function (o, u) {
                return p ? h(o, u) : (s = e(i = o, a = u),
                    c = t(r, a),
                    l = n(s, c, a),
                    p = !0,
                    l)
            }
        }
        function W(e, t) {
            var n = t.initMapStateToProps
                , r = t.initMapDispatchToProps
                , o = t.initMergeProps
                , i = Object(E.a)(t, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"])
                , a = n(e, i)
                , s = r(e, i)
                , c = o(e, i);
            return (i.pure ? U : F)(a, s, c, e, i)
        }
        function G(e, t, n) {
            for (var r = t.length - 1; r >= 0; r--) {
                var o = t[r](e);
                if (o)
                    return o
            }
            return function (t, r) {
                throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".")
            }
        }
        function B(e, t) {
            return e === t
        }
        var H, Y, z, V, K, q, X, J, $, Q, Z, ee, te = (z = (Y = void 0 === H ? {} : H).connectHOC,
            V = void 0 === z ? R : z,
            K = Y.mapStateToPropsFactories,
            q = void 0 === K ? L : K,
            X = Y.mapDispatchToPropsFactories,
            J = void 0 === X ? P : X,
            $ = Y.mergePropsFactories,
            Q = void 0 === $ ? j : $,
            Z = Y.selectorFactory,
            ee = void 0 === Z ? W : Z,
            function (e, t, n, r) {
                void 0 === r && (r = {});
                var o = r
                    , i = o.pure
                    , a = void 0 === i || i
                    , s = o.areStatesEqual
                    , c = void 0 === s ? B : s
                    , l = o.areOwnPropsEqual
                    , u = void 0 === l ? N : l
                    , d = o.areStatePropsEqual
                    , f = void 0 === d ? N : d
                    , p = o.areMergedPropsEqual
                    , _ = void 0 === p ? N : p
                    , v = Object(E.a)(o, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"])
                    , S = G(e, q, "mapStateToProps")
                    , y = G(t, J, "mapDispatchToProps")
                    , g = G(n, Q, "mergeProps");
                return V(ee, Object(h.a)({
                    methodName: "connect",
                    getDisplayName: function (e) {
                        return "Connect(" + e + ")"
                    },
                    shouldHandleStateChanges: Boolean(e),
                    initMapStateToProps: S,
                    initMapDispatchToProps: y,
                    initMergeProps: g,
                    pure: a,
                    areStatesEqual: c,
                    areOwnPropsEqual: u,
                    areStatePropsEqual: f,
                    areMergedPropsEqual: _
                }, v))
            }
        );
        function ne() {
            var e = Object(r.useContext)(s);
            return y()(e, "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"),
                e
        }
        function re(e) {
            void 0 === e && (e = s);
            var t = e === s ? ne : function () {
                return Object(r.useContext)(e)
            }
                ;
            return function () {
                return t().store
            }
        }
        var oe = re();
        function ie(e) {
            void 0 === e && (e = s);
            var t = e === s ? oe : re(e);
            return function () {
                return t().dispatch
            }
        }
        var ae = ie()
            , se = function (e, t) {
                return e === t
            };
        function ce(e) {
            void 0 === e && (e = s);
            var t = e === s ? ne : function () {
                return Object(r.useContext)(e)
            }
                ;
            return function (e, n) {
                void 0 === n && (n = se),
                    y()(e, "You must pass a selector to useSelectors");
                var o = t();
                return function (e, t, n, o) {
                    var i, a = Object(r.useReducer)((function (e) {
                        return e + 1
                    }
                    ), 0)[1], s = Object(r.useMemo)((function () {
                        return new d(n, o)
                    }
                    ), [n, o]), c = Object(r.useRef)(), l = Object(r.useRef)(), u = Object(r.useRef)();
                    try {
                        i = e !== l.current || c.current ? e(n.getState()) : u.current
                    } catch (e) {
                        var f = "An error occurred while selecting the store state: " + e.message + ".";
                        throw c.current && (f += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\nOriginal stack trace:"),
                        new Error(f)
                    }
                    return m((function () {
                        l.current = e,
                            u.current = i,
                            c.current = void 0
                    }
                    )),
                        m((function () {
                            function e() {
                                try {
                                    var e = l.current(n.getState());
                                    if (t(e, u.current))
                                        return;
                                    u.current = e
                                } catch (e) {
                                    c.current = e
                                }
                                a({})
                            }
                            return s.onStateChange = e,
                                s.trySubscribe(),
                                e(),
                                function () {
                                    return s.tryUnsubscribe()
                                }
                        }
                        ), [n, s]),
                        i
                }(e, n, o.store, o.subscription)
            }
        }
        var le, ue = ce(), de = n(29);
        n.d(t, "Provider", (function () {
            return p
        }
        )),
            n.d(t, "connectAdvanced", (function () {
                return R
            }
            )),
            n.d(t, "ReactReduxContext", (function () {
                return s
            }
            )),
            n.d(t, "connect", (function () {
                return te
            }
            )),
            n.d(t, "batch", (function () {
                return de.unstable_batchedUpdates
            }
            )),
            n.d(t, "useDispatch", (function () {
                return ae
            }
            )),
            n.d(t, "createDispatchHook", (function () {
                return ie
            }
            )),
            n.d(t, "useSelector", (function () {
                return ue
            }
            )),
            n.d(t, "createSelectorHook", (function () {
                return ce
            }
            )),
            n.d(t, "useStore", (function () {
                return oe
            }
            )),
            n.d(t, "createStoreHook", (function () {
                return re
            }
            )),
            n.d(t, "shallowEqual", (function () {
                return N
            }
            )),
            le = de.unstable_batchedUpdates,
            c = le
    },
    110: function (e, t, n) {
        var r = n(55);
        e.exports = !r((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }
        ))
    },
    117: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.debounce = function (e, t) {
                let n;
                const r = function () {
                    const r = () => e.apply(this, arguments);
                    clearTimeout(n),
                        n = setTimeout(r, t)
                };
                return r.cancel = () => clearTimeout(n),
                    r
            }
            ,
            t.leadingDebounce = function (e, t) {
                let n;
                return function () {
                    const r = () => {
                        clearTimeout(n)
                    }
                        , o = !n;
                    clearTimeout(n),
                        n = setTimeout(r, t),
                        o && e.apply(this, arguments)
                }
            }
            ,
            t.debounceWithArgsSelector = function (e, t, n) {
                let r, o = [];
                return function (...i) {
                    o.push(i);
                    clearTimeout(r),
                        r = setTimeout(() => {
                            e.call(this, ...t(o) || []),
                                o = []
                        }
                            , n)
                }
            }
            ,
            t.throttle = function (e, t) {
                let n, r, o, i;
                const a = function (...a) {
                    const s = Date.now();
                    !o || !i && s - o >= t ? (o = s,
                        e.apply(this, a)) : (n = a,
                            r = this,
                            i || (i = setTimeout(() => {
                                const t = n
                                    , a = r;
                                n = void 0,
                                    r = void 0,
                                    i = void 0,
                                    o = Date.now(),
                                    e.apply(a, t)
                            }
                                , t - (s - o))))
                };
                return a.cancel = () => {
                    clearTimeout(i),
                        i = void 0
                }
                    ,
                    a
            }
    },
    119: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const t = (0,
                    o.useTheme)();
                return (0,
                    a.useMemo)(() => a.default.createElement(i.default, c({
                        color: t.colors.base80
                    }, e)), [t.colors.base80, e])
            }
            ;
        var r, o = n(6), i = (r = n(836)) && r.__esModule ? r : {
            default: r
        }, a = function (e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = s();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (Object.prototype.hasOwnProperty.call(e, o)) {
                    var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                    i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                }
            n.default = e,
                t && t.set(e, n);
            return n
        }(n(0));
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
    120: function (e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var o = ((r = n(1)) && r.__esModule ? r : {
            default: r
        }).default.div(({ justify: e = "flex-start", width: t = "100%" }) => ({
            display: "flex",
            flexDirection: "row",
            justifyContent: e,
            width: t
        }));
        t.default = o
    },
    128: function (e, t, n) {
        var r = n(110)
            , o = n(417)
            , i = n(80)
            , a = n(416)
            , s = Object.defineProperty;
        t.f = r ? s : function (e, t, n) {
            if (i(e),
                t = a(t, !0),
                i(n),
                o)
                try {
                    return s(e, t, n)
                } catch (e) { }
            if ("get" in n || "set" in n)
                throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value),
                e
        }
    },
    137: function (e, t) {
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
        e.exports = n
    },
    14: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return c
        }
        )),
            n.d(t, "b", (function () {
                return p
            }
            )),
            n.d(t, "c", (function () {
                return v
            }
            )),
            n.d(t, "d", (function () {
                return a
            }
            )),
            n.d(t, "e", (function () {
                return d
            }
            )),
            n.d(t, "f", (function () {
                return _
            }
            )),
            n.d(t, "g", (function () {
                return i
            }
            )),
            n.d(t, "h", (function () {
                return l
            }
            )),
            n.d(t, "i", (function () {
                return f
            }
            )),
            n.d(t, "j", (function () {
                return u
            }
            )),
            n.d(t, "k", (function () {
                return s
            }
            )),
            n.d(t, "l", (function () {
                return h
            }
            )),
            n.d(t, "m", (function () {
                return E
            }
            )),
            n.d(t, "n", (function () {
                return o
            }
            ));
        var r = n(20)
            , o = function (e) {
                return null == e
            }
            , i = function (e) {
                return null != e
            }
            , a = function (e) {
                return "function" == typeof e
            }
            , s = function (e) {
                return "string" == typeof e
            }
            , c = Array.isArray
            , l = function (e) {
                return e && !c(e) && "object" == typeof e
            }
            , u = function (e) {
                return e && a(e.then)
            }
            , d = function (e) {
                return e && a(e.next) && a(e.throw)
            }
            , f = function e(t) {
                return t && (s(t) || E(t) || a(t) || c(t) && t.every(e))
            }
            , p = function (e) {
                return e && a(e.take) && a(e.close)
            }
            , h = function (e) {
                return a(e) && e.hasOwnProperty("toString")
            }
            , E = function (e) {
                return Boolean(e) && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
            }
            , _ = function (e) {
                return p(e) && e[r.e]
            }
            , v = function (e) {
                return e && e[r.c]
            }
    },
    144: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.isAppNetworkConnected = function (e) {
                return e.appContext.network.isNetworkConnected
            }
            ,
            t.currentModal = function (e) {
                return e.appContext.modal.currentModal
            }
            ,
            t.getCurrentPromotion = function (e) {
                return e.appContext.promotion.currentPromotion
            }
            ,
            t.isPortalWindowOpen = function (e, t) {
                return Boolean(e.appContext.portalWindow.portalWindowOpen[t])
            }
            ,
            t.getPortalWindowOpenOptions = function (e, t) {
                return e.appContext.portalWindow.portalWindowOpen[t]
            }
            ,
            t.isAppFocused = function (e) {
                return e.appContext.focus.appIsFocused
            }
            ,
            t.isWindowFocused = function (e) {
                return e.appContext.focus.currentWindowIsFocused
            }
            ,
            t.isUserActive = function (e) {
                return e.appContext.focus.userIsActive
            }
    },
    150: function (e, t) {
        e.exports = function (e) {
            if (null == e)
                throw TypeError("Can't call method on " + e);
            return e
        }
    },
    151: function (e, t, n) {
        var r = n(48)
            , o = n(93)
            , i = n(68)
            , a = n(280)
            , s = n(419)
            , c = n(176)
            , l = c.get
            , u = c.enforce
            , d = String(String).split("String");
        (e.exports = function (e, t, n, s) {
            var c = !!s && !!s.unsafe
                , l = !!s && !!s.enumerable
                , f = !!s && !!s.noTargetGet;
            "function" == typeof n && ("string" != typeof t || i(n, "name") || o(n, "name", t),
                u(n).source = d.join("string" == typeof t ? t : "")),
                e !== r ? (c ? !f && e[t] && (l = !0) : delete e[t],
                    l ? e[t] = n : o(e, t, n)) : l ? e[t] = n : a(t, n)
        }
        )(Function.prototype, "toString", (function () {
            return "function" == typeof this && l(this).source || s(this)
        }
        ))
    },
    152: function (e, t, n) {
        var r = n(210)
            , o = Math.min;
        e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
        }
    },
    158: function (e, t, n) {
        (function (t) {
            var n = /^\s+|\s+$/g
                , r = /^[-+]0x[0-9a-f]+$/i
                , o = /^0b[01]+$/i
                , i = /^0o[0-7]+$/i
                , a = parseInt
                , s = "object" == typeof t && t && t.Object === Object && t
                , c = "object" == typeof self && self && self.Object === Object && self
                , l = s || c || Function("return this")()
                , u = Object.prototype.toString
                , d = Math.max
                , f = Math.min
                , p = function () {
                    return l.Date.now()
                };
            function h(e, t, n) {
                var r, o, i, a, s, c, l = 0, u = !1, h = !1, v = !0;
                if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                function S(t) {
                    var n = r
                        , i = o;
                    return r = o = void 0,
                        l = t,
                        a = e.apply(i, n)
                }
                function y(e) {
                    return l = e,
                        s = setTimeout(m, t),
                        u ? S(e) : a
                }
                function g(e) {
                    var n = e - c;
                    return void 0 === c || n >= t || n < 0 || h && e - l >= i
                }
                function m() {
                    var e = p();
                    if (g(e))
                        return A(e);
                    s = setTimeout(m, function (e) {
                        var n = t - (e - c);
                        return h ? f(n, i - (e - l)) : n
                    }(e))
                }
                function A(e) {
                    return s = void 0,
                        v && r ? S(e) : (r = o = void 0,
                            a)
                }
                function b() {
                    var e = p()
                        , n = g(e);
                    if (r = arguments,
                        o = this,
                        c = e,
                        n) {
                        if (void 0 === s)
                            return y(c);
                        if (h)
                            return s = setTimeout(m, t),
                                S(c)
                    }
                    return void 0 === s && (s = setTimeout(m, t)),
                        a
                }
                return t = _(t) || 0,
                    E(n) && (u = !!n.leading,
                        i = (h = "maxWait" in n) ? d(_(n.maxWait) || 0, t) : i,
                        v = "trailing" in n ? !!n.trailing : v),
                    b.cancel = function () {
                        void 0 !== s && clearTimeout(s),
                            l = 0,
                            r = c = o = s = void 0
                    }
                    ,
                    b.flush = function () {
                        return void 0 === s ? a : A(p())
                    }
                    ,
                    b
            }
            function E(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function _(e) {
                if ("number" == typeof e)
                    return e;
                if (function (e) {
                    return "symbol" == typeof e || function (e) {
                        return !!e && "object" == typeof e
                    }(e) && "[object Symbol]" == u.call(e)
                }(e))
                    return NaN;
                if (E(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = E(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(n, "");
                var s = o.test(e);
                return s || i.test(e) ? a(e.slice(2), s ? 2 : 8) : r.test(e) ? NaN : +e
            }
            e.exports = function (e, t, n) {
                var r = !0
                    , o = !0;
                if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                return E(n) && (r = "leading" in n ? !!n.leading : r,
                    o = "trailing" in n ? !!n.trailing : o),
                    h(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: o
                    })
            }
        }
        ).call(this, n(54))
    },
    159: function (e, t, n) {
        (function (t) {
            var n = /^\s+|\s+$/g
                , r = /^[-+]0x[0-9a-f]+$/i
                , o = /^0b[01]+$/i
                , i = /^0o[0-7]+$/i
                , a = parseInt
                , s = "object" == typeof t && t && t.Object === Object && t
                , c = "object" == typeof self && self && self.Object === Object && self
                , l = s || c || Function("return this")()
                , u = Object.prototype.toString
                , d = Math.max
                , f = Math.min
                , p = function () {
                    return l.Date.now()
                };
            function h(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            function E(e) {
                if ("number" == typeof e)
                    return e;
                if (function (e) {
                    return "symbol" == typeof e || function (e) {
                        return !!e && "object" == typeof e
                    }(e) && "[object Symbol]" == u.call(e)
                }(e))
                    return NaN;
                if (h(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = h(t) ? t + "" : t
                }
                if ("string" != typeof e)
                    return 0 === e ? e : +e;
                e = e.replace(n, "");
                var s = o.test(e);
                return s || i.test(e) ? a(e.slice(2), s ? 2 : 8) : r.test(e) ? NaN : +e
            }
            e.exports = function (e, t, n) {
                var r, o, i, a, s, c, l = 0, u = !1, _ = !1, v = !0;
                if ("function" != typeof e)
                    throw new TypeError("Expected a function");
                function S(t) {
                    var n = r
                        , i = o;
                    return r = o = void 0,
                        l = t,
                        a = e.apply(i, n)
                }
                function y(e) {
                    return l = e,
                        s = setTimeout(m, t),
                        u ? S(e) : a
                }
                function g(e) {
                    var n = e - c;
                    return void 0 === c || n >= t || n < 0 || _ && e - l >= i
                }
                function m() {
                    var e = p();
                    if (g(e))
                        return A(e);
                    s = setTimeout(m, function (e) {
                        var n = t - (e - c);
                        return _ ? f(n, i - (e - l)) : n
                    }(e))
                }
                function A(e) {
                    return s = void 0,
                        v && r ? S(e) : (r = o = void 0,
                            a)
                }
                function b() {
                    var e = p()
                        , n = g(e);
                    if (r = arguments,
                        o = this,
                        c = e,
                        n) {
                        if (void 0 === s)
                            return y(c);
                        if (_)
                            return s = setTimeout(m, t),
                                S(c)
                    }
                    return void 0 === s && (s = setTimeout(m, t)),
                        a
                }
                return t = E(t) || 0,
                    h(n) && (u = !!n.leading,
                        i = (_ = "maxWait" in n) ? d(E(n.maxWait) || 0, t) : i,
                        v = "trailing" in n ? !!n.trailing : v),
                    b.cancel = function () {
                        void 0 !== s && clearTimeout(s),
                            l = 0,
                            r = c = o = s = void 0
                    }
                    ,
                    b.flush = function () {
                        return void 0 === s ? a : A(p())
                    }
                    ,
                    b
            }
        }
        ).call(this, n(54))
    },
    164: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getTitleBarHeight = function (e) {
                return e.select({
                    mac: 22,
                    windows: 30
                })
            }
    },
    168: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AuthenticationActions = void 0;
        var r = n(76);
        const o = {
            login: (0,
                r.actionCreator)("authentication/login", (e, t, n, r) => ({
                    email: e,
                    password: t,
                    isWorkplaceAccount: n,
                    challengeID: r
                })),
            login2FARequired: (0,
                r.actionCreator)("authentication/login2FARequired", (e, t, n) => ({
                    uid: e,
                    isWorkplaceAccount: t,
                    loginFirstFactor: n
                })),
            login2FA: (0,
                r.actionCreator)("authentication/login2FA", e => ({
                    code: e
                })),
            loginSucceeded: (0,
                r.actionCreator)("authentication/loginSucceeded", (e, t = !1, n = !1) => ({
                    authenticationData: e,
                    pendingTokenExchange: n,
                    isFirstRun: t
                })),
            loginFailed: (0,
                r.actionCreator)("authentication/loginFailed", e => ({
                    error: e
                })),
            exit2FA: (0,
                r.actionCreator)("authentication/exit2FA"),
            clearUserStorageKey: (0,
                r.actionCreator)("authentication/clearUserStorageKey"),
            startLogout: (0,
                r.actionCreator)("authentication/startLogout"),
            finishLogout: (0,
                r.actionCreator)("authentication/finishLogout"),
            initiateMessengerSso: (0,
                r.actionCreator)("authentication/initiateMessengerSso"),
            setMessengerSsoState: (0,
                r.actionCreator)("authentication/setMessengerSsoState", e => ({
                    newState: e
                })),
            tokenExchangeFailed: (0,
                r.actionCreator)("authentication/tokenExchangeFailed"),
            setDidTryUpgradeOnRun: (0,
                r.actionCreator)("authentication/didTryUpgradeOnRun", e => ({
                    didTryUpgradeOnRun: e
                }))
        };
        t.AuthenticationActions = o
    },
    17: function (e, t, n) {
        "use strict";
        n.r(t);
        n(20),
            n(34);
        var r = n(14)
            , o = n(7)
            , i = (n(234),
                function (e) {
                    return {
                        done: !0,
                        value: e
                    }
                }
            )
            , a = {};
        function s(e) {
            return Object(r.b)(e) ? "channel" : Object(r.l)(e) ? String(e) : Object(r.d)(e) ? e.name : String(e)
        }
        function c(e, t, n) {
            var r, s, c, l = t;
            function u(t, n) {
                if (l === a)
                    return i(t);
                if (n && !s)
                    throw l = a,
                    n;
                r && r(t);
                var o = n ? e[s](n) : e[l]();
                return l = o.nextState,
                    c = o.effect,
                    r = o.stateUpdater,
                    s = o.errorState,
                    l === a ? i(t) : c
            }
            return Object(o.ab)(u, (function (e) {
                return u(null, e)
            }
            ), n)
        }
        function l(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                r[i - 2] = arguments[i];
            var a, l = {
                done: !1,
                value: Object(o.l)(e)
            }, u = function (e) {
                return {
                    done: !1,
                    value: o.m.apply(void 0, [t].concat(r, [e]))
                }
            }, d = function (e) {
                return a = e
            };
            return c({
                q1: function () {
                    return {
                        nextState: "q2",
                        effect: l,
                        stateUpdater: d
                    }
                },
                q2: function () {
                    return {
                        nextState: "q1",
                        effect: u(a)
                    }
                }
            }, "q1", "takeEvery(" + s(e) + ", " + t.name + ")")
        }
        function u(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                r[i - 2] = arguments[i];
            var a, l, u = {
                done: !1,
                value: Object(o.l)(e)
            }, d = function (e) {
                return {
                    done: !1,
                    value: o.m.apply(void 0, [t].concat(r, [e]))
                }
            }, f = function (e) {
                return {
                    done: !1,
                    value: Object(o.n)(e)
                }
            }, p = function (e) {
                return a = e
            }, h = function (e) {
                return l = e
            };
            return c({
                q1: function () {
                    return {
                        nextState: "q2",
                        effect: u,
                        stateUpdater: h
                    }
                },
                q2: function () {
                    return a ? {
                        nextState: "q3",
                        effect: f(a)
                    } : {
                        nextState: "q1",
                        effect: d(l),
                        stateUpdater: p
                    }
                },
                q3: function () {
                    return {
                        nextState: "q1",
                        effect: d(l),
                        stateUpdater: p
                    }
                }
            }, "q1", "takeLatest(" + s(e) + ", " + t.name + ")")
        }
        function d(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                r[i - 2] = arguments[i];
            var a, l = {
                done: !1,
                value: Object(o.l)(e)
            }, u = function (e) {
                return {
                    done: !1,
                    value: o.o.apply(void 0, [t].concat(r, [e]))
                }
            }, d = function (e) {
                return a = e
            };
            return c({
                q1: function () {
                    return {
                        nextState: "q2",
                        effect: l,
                        stateUpdater: d
                    }
                },
                q2: function () {
                    return {
                        nextState: "q1",
                        effect: u(a)
                    }
                }
            }, "q1", "takeLeading(" + s(e) + ", " + t.name + ")")
        }
        function f(e, t, n) {
            for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
                i[a - 3] = arguments[a];
            var l, u, d = {
                done: !1,
                value: Object(o.p)(t, Object(o.r)(1))
            }, f = function () {
                return {
                    done: !1,
                    value: Object(o.l)(u)
                }
            }, p = function (e) {
                return {
                    done: !1,
                    value: o.m.apply(void 0, [n].concat(i, [e]))
                }
            }, h = {
                done: !1,
                value: Object(o.v)(e)
            }, E = function (e) {
                return l = e
            }, _ = function (e) {
                return u = e
            };
            return c({
                q1: function () {
                    return {
                        nextState: "q2",
                        effect: d,
                        stateUpdater: _
                    }
                },
                q2: function () {
                    return {
                        nextState: "q3",
                        effect: f(),
                        stateUpdater: E
                    }
                },
                q3: function () {
                    return {
                        nextState: "q4",
                        effect: p(l)
                    }
                },
                q4: function () {
                    return {
                        nextState: "q2",
                        effect: h
                    }
                }
            }, "q1", "throttle(" + s(t) + ", " + n.name + ")")
        }
        function p(e, t, n) {
            for (var r = e, i = arguments.length, s = new Array(i > 3 ? i - 3 : 0), l = 3; l < i; l++)
                s[l - 3] = arguments[l];
            var u = {
                done: !1,
                value: o.o.apply(void 0, [n].concat(s))
            }
                , d = {
                    done: !1,
                    value: Object(o.v)(t)
                };
            return c({
                q1: function () {
                    return {
                        nextState: "q2",
                        effect: u,
                        errorState: "q10"
                    }
                },
                q2: function () {
                    return {
                        nextState: a
                    }
                },
                q10: function (e) {
                    if ((r -= 1) <= 0)
                        throw e;
                    return {
                        nextState: "q1",
                        effect: d
                    }
                }
            }, "q1", "retry(" + n.name + ")")
        }
        function h(e, t, n) {
            for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
                i[a - 3] = arguments[a];
            var l, u, d = {
                done: !1,
                value: Object(o.l)(t)
            }, f = {
                done: !1,
                value: Object(o.w)({
                    action: Object(o.l)(t),
                    debounce: Object(o.v)(e)
                })
            }, p = function (e) {
                return {
                    done: !1,
                    value: o.m.apply(void 0, [n].concat(i, [e]))
                }
            }, h = function (e) {
                return {
                    done: !1,
                    value: e
                }
            }, E = function (e) {
                return l = e
            }, _ = function (e) {
                return u = e
            };
            return c({
                q1: function () {
                    return {
                        nextState: "q2",
                        effect: d,
                        stateUpdater: E
                    }
                },
                q2: function () {
                    return {
                        nextState: "q3",
                        effect: f,
                        stateUpdater: _
                    }
                },
                q3: function () {
                    return u.debounce ? {
                        nextState: "q1",
                        effect: p(l)
                    } : {
                        nextState: "q2",
                        effect: h(u.action),
                        stateUpdater: E
                    }
                }
            }, "q1", "debounce(" + s(t) + ", " + n.name + ")")
        }
        function E(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                r[i - 2] = arguments[i];
            return o.m.apply(void 0, [l, e, t].concat(r))
        }
        function _(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                r[i - 2] = arguments[i];
            return o.m.apply(void 0, [u, e, t].concat(r))
        }
        function v(e, t) {
            for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
                r[i - 2] = arguments[i];
            return o.m.apply(void 0, [d, e, t].concat(r))
        }
        function S(e, t, n) {
            for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
                i[a - 3] = arguments[a];
            return o.m.apply(void 0, [f, e, t, n].concat(i))
        }
        function y(e, t, n) {
            for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
                i[a - 3] = arguments[a];
            return o.o.apply(void 0, [p, e, t, n].concat(i))
        }
        function g(e, t, n) {
            for (var r = arguments.length, i = new Array(r > 3 ? r - 3 : 0), a = 3; a < r; a++)
                i[a - 3] = arguments[a];
            return o.m.apply(void 0, [h, e, t, n].concat(i))
        }
        n.d(t, "actionChannel", (function () {
            return o.p
        }
        )),
            n.d(t, "all", (function () {
                return o.B
            }
            )),
            n.d(t, "apply", (function () {
                return o.a
            }
            )),
            n.d(t, "call", (function () {
                return o.o
            }
            )),
            n.d(t, "cancel", (function () {
                return o.n
            }
            )),
            n.d(t, "cancelled", (function () {
                return o.H
            }
            )),
            n.d(t, "cps", (function () {
                return o.D
            }
            )),
            n.d(t, "delay", (function () {
                return o.v
            }
            )),
            n.d(t, "effectTypes", (function () {
                return o.x
            }
            )),
            n.d(t, "flush", (function () {
                return o.I
            }
            )),
            n.d(t, "fork", (function () {
                return o.m
            }
            )),
            n.d(t, "getContext", (function () {
                return o.J
            }
            )),
            n.d(t, "join", (function () {
                return o.F
            }
            )),
            n.d(t, "put", (function () {
                return o.z
            }
            )),
            n.d(t, "putResolve", (function () {
                return o.A
            }
            )),
            n.d(t, "race", (function () {
                return o.w
            }
            )),
            n.d(t, "select", (function () {
                return o.G
            }
            )),
            n.d(t, "setContext", (function () {
                return o.K
            }
            )),
            n.d(t, "spawn", (function () {
                return o.E
            }
            )),
            n.d(t, "take", (function () {
                return o.l
            }
            )),
            n.d(t, "takeMaybe", (function () {
                return o.y
            }
            )),
            n.d(t, "debounce", (function () {
                return g
            }
            )),
            n.d(t, "retry", (function () {
                return y
            }
            )),
            n.d(t, "takeEvery", (function () {
                return E
            }
            )),
            n.d(t, "takeLatest", (function () {
                return _
            }
            )),
            n.d(t, "takeLeading", (function () {
                return v
            }
            )),
            n.d(t, "throttle", (function () {
                return S
            }
            ))
    },
    176: function (e, t, n) {
        var r, o, i, a = n(421), s = n(48), c = n(79), l = n(93), u = n(68), d = n(281), f = n(209), p = s.WeakMap;
        if (a) {
            var h = new p
                , E = h.get
                , _ = h.has
                , v = h.set;
            r = function (e, t) {
                return v.call(h, e, t),
                    t
            }
                ,
                o = function (e) {
                    return E.call(h, e) || {}
                }
                ,
                i = function (e) {
                    return _.call(h, e)
                }
        } else {
            var S = d("state");
            f[S] = !0,
                r = function (e, t) {
                    return l(e, S, t),
                        t
                }
                ,
                o = function (e) {
                    return u(e, S) ? e[S] : {}
                }
                ,
                i = function (e) {
                    return u(e, S)
                }
        }
        e.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (e) {
                return i(e) ? o(e) : r(e, {})
            },
            getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!c(t) || (n = o(t)).type !== e)
                        throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    },
    177: function (e, t, n) {
        var r = n(150);
        e.exports = function (e) {
            return Object(r(e))
        }
    },
    178: function (e, t) {
        e.exports = {}
    },
    1864: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0)
            , o = n.n(r)
            , i = n(3)
            , a = n.n(i)
            , s = (n(413),
                n(429),
                n(288),
                n(438),
                n(439),
                n(441),
                n(443),
                n(445),
                n(449),
                n(158))
            , c = n.n(s)
            , l = n(159)
            , u = n.n(l)
            , d = n(238)
            , f = n.n(d)
            , p = n(239)
            , h = n(137)
            , E = n.n(h)
            , _ = (n(451),
                n(452),
                n(292),
                n(453),
                n(457),
                null)
            , v = null;
        function S() {
            if (null === _) {
                if ("undefined" == typeof document)
                    return _ = 0;
                var e = document.body
                    , t = document.createElement("div");
                t.classList.add("simplebar-hide-scrollbar"),
                    e.appendChild(t);
                var n = t.getBoundingClientRect().right;
                e.removeChild(t),
                    _ = n
            }
            return _
        }
        function y(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window
        }
        function g(e) {
            return e && e.ownerDocument ? e.ownerDocument : document
        }
        E.a && window.addEventListener("resize", (function () {
            v !== window.devicePixelRatio && (v = window.devicePixelRatio,
                _ = null)
        }
        ));
        var m = function () {
            function e(t, n) {
                var r = this;
                this.onScroll = function () {
                    var e = y(r.el);
                    r.scrollXTicking || (e.requestAnimationFrame(r.scrollX),
                        r.scrollXTicking = !0),
                        r.scrollYTicking || (e.requestAnimationFrame(r.scrollY),
                            r.scrollYTicking = !0)
                }
                    ,
                    this.scrollX = function () {
                        r.axis.x.isOverflowing && (r.showScrollbar("x"),
                            r.positionScrollbar("x")),
                            r.scrollXTicking = !1
                    }
                    ,
                    this.scrollY = function () {
                        r.axis.y.isOverflowing && (r.showScrollbar("y"),
                            r.positionScrollbar("y")),
                            r.scrollYTicking = !1
                    }
                    ,
                    this.onMouseEnter = function () {
                        r.showScrollbar("x"),
                            r.showScrollbar("y")
                    }
                    ,
                    this.onMouseMove = function (e) {
                        r.mouseX = e.clientX,
                            r.mouseY = e.clientY,
                            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseMoveForAxis("x"),
                            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseMoveForAxis("y")
                    }
                    ,
                    this.onMouseLeave = function () {
                        r.onMouseMove.cancel(),
                            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseLeaveForAxis("x"),
                            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseLeaveForAxis("y"),
                            r.mouseX = -1,
                            r.mouseY = -1
                    }
                    ,
                    this.onWindowResize = function () {
                        r.scrollbarWidth = r.getScrollbarWidth(),
                            r.hideNativeScrollbar()
                    }
                    ,
                    this.hideScrollbars = function () {
                        r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(),
                            r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(),
                            r.isWithinBounds(r.axis.y.track.rect) || (r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),
                                r.axis.y.isVisible = !1),
                            r.isWithinBounds(r.axis.x.track.rect) || (r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),
                                r.axis.x.isVisible = !1)
                    }
                    ,
                    this.onPointerEvent = function (e) {
                        var t, n;
                        r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(),
                            r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(),
                            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && (t = r.isWithinBounds(r.axis.x.track.rect)),
                            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && (n = r.isWithinBounds(r.axis.y.track.rect)),
                            (t || n) && (e.preventDefault(),
                                e.stopPropagation(),
                                "mousedown" === e.type && (t && (r.axis.x.scrollbar.rect = r.axis.x.scrollbar.el.getBoundingClientRect(),
                                    r.isWithinBounds(r.axis.x.scrollbar.rect) ? r.onDragStart(e, "x") : r.onTrackClick(e, "x")),
                                    n && (r.axis.y.scrollbar.rect = r.axis.y.scrollbar.el.getBoundingClientRect(),
                                        r.isWithinBounds(r.axis.y.scrollbar.rect) ? r.onDragStart(e, "y") : r.onTrackClick(e, "y"))))
                    }
                    ,
                    this.drag = function (t) {
                        var n = r.axis[r.draggedAxis].track
                            , o = n.rect[r.axis[r.draggedAxis].sizeAttr]
                            , i = r.axis[r.draggedAxis].scrollbar
                            , a = r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr]
                            , s = parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr], 10);
                        t.preventDefault(),
                            t.stopPropagation();
                        var c = (("y" === r.draggedAxis ? t.pageY : t.pageX) - n.rect[r.axis[r.draggedAxis].offsetAttr] - r.axis[r.draggedAxis].dragOffset) / (o - i.size) * (a - s);
                        "x" === r.draggedAxis && (c = r.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? c - (o + i.size) : c,
                            c = r.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -c : c),
                            r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] = c
                    }
                    ,
                    this.onEndDrag = function (e) {
                        var t = g(r.el)
                            , n = y(r.el);
                        e.preventDefault(),
                            e.stopPropagation(),
                            r.el.classList.remove(r.classNames.dragging),
                            t.removeEventListener("mousemove", r.drag, !0),
                            t.removeEventListener("mouseup", r.onEndDrag, !0),
                            r.removePreventClickId = n.setTimeout((function () {
                                t.removeEventListener("click", r.preventClick, !0),
                                    t.removeEventListener("dblclick", r.preventClick, !0),
                                    r.removePreventClickId = null
                            }
                            ))
                    }
                    ,
                    this.preventClick = function (e) {
                        e.preventDefault(),
                            e.stopPropagation()
                    }
                    ,
                    this.el = t,
                    this.minScrollbarWidth = 20,
                    this.options = Object.assign({}, e.defaultOptions, {}, n),
                    this.classNames = Object.assign({}, e.defaultOptions.classNames, {}, this.options.classNames),
                    this.axis = {
                        x: {
                            scrollOffsetAttr: "scrollLeft",
                            sizeAttr: "width",
                            scrollSizeAttr: "scrollWidth",
                            offsetSizeAttr: "offsetWidth",
                            offsetAttr: "left",
                            overflowAttr: "overflowX",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        },
                        y: {
                            scrollOffsetAttr: "scrollTop",
                            sizeAttr: "height",
                            scrollSizeAttr: "scrollHeight",
                            offsetSizeAttr: "offsetHeight",
                            offsetAttr: "top",
                            overflowAttr: "overflowY",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        }
                    },
                    this.removePreventClickId = null,
                    e.instances.has(this.el) || (this.recalculate = c()(this.recalculate.bind(this), 64),
                        this.onMouseMove = c()(this.onMouseMove.bind(this), 64),
                        this.hideScrollbars = u()(this.hideScrollbars.bind(this), this.options.timeout),
                        this.onWindowResize = u()(this.onWindowResize.bind(this), 64, {
                            leading: !0
                        }),
                        e.getRtlHelpers = f()(e.getRtlHelpers),
                        this.init())
            }
            e.getRtlHelpers = function () {
                var t = document.createElement("div");
                t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                var n = t.firstElementChild;
                document.body.appendChild(n);
                var r = n.firstElementChild;
                n.scrollLeft = 0;
                var o = e.getOffset(n)
                    , i = e.getOffset(r);
                n.scrollLeft = 999;
                var a = e.getOffset(r);
                return {
                    isRtlScrollingInverted: o.left !== i.left && i.left - a.left != 0,
                    isRtlScrollbarInverted: o.left !== i.left
                }
            }
                ,
                e.getOffset = function (e) {
                    var t = e.getBoundingClientRect()
                        , n = g(e)
                        , r = y(e);
                    return {
                        top: t.top + (r.pageYOffset || n.documentElement.scrollTop),
                        left: t.left + (r.pageXOffset || n.documentElement.scrollLeft)
                    }
                }
                ;
            var t = e.prototype;
            return t.init = function () {
                e.instances.set(this.el, this),
                    E.a && (this.initDOM(),
                        this.scrollbarWidth = this.getScrollbarWidth(),
                        this.recalculate(),
                        this.initListeners())
            }
                ,
                t.initDOM = function () {
                    var e = this;
                    g(this.el);
                    if (Array.prototype.filter.call(this.el.children, (function (t) {
                        return t.classList.contains(e.classNames.wrapper)
                    }
                    )).length)
                        this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper),
                            this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper),
                            this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl),
                            this.offsetEl = this.el.querySelector("." + this.classNames.offset),
                            this.maskEl = this.el.querySelector("." + this.classNames.mask),
                            this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder),
                            this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl),
                            this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl),
                            this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal),
                            this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
                    else {
                        for (this.wrapperEl = document.createElement("div"),
                            this.contentWrapperEl = document.createElement("div"),
                            this.offsetEl = document.createElement("div"),
                            this.maskEl = document.createElement("div"),
                            this.contentEl = document.createElement("div"),
                            this.placeholderEl = document.createElement("div"),
                            this.heightAutoObserverWrapperEl = document.createElement("div"),
                            this.heightAutoObserverEl = document.createElement("div"),
                            this.wrapperEl.classList.add(this.classNames.wrapper),
                            this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                            this.offsetEl.classList.add(this.classNames.offset),
                            this.maskEl.classList.add(this.classNames.mask),
                            this.contentEl.classList.add(this.classNames.contentEl),
                            this.placeholderEl.classList.add(this.classNames.placeholder),
                            this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                            this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;)
                            this.contentEl.appendChild(this.el.firstChild);
                        this.contentWrapperEl.appendChild(this.contentEl),
                            this.offsetEl.appendChild(this.contentWrapperEl),
                            this.maskEl.appendChild(this.offsetEl),
                            this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                            this.wrapperEl.appendChild(this.maskEl),
                            this.wrapperEl.appendChild(this.placeholderEl),
                            this.el.appendChild(this.wrapperEl)
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var t = document.createElement("div")
                            , n = document.createElement("div");
                        t.classList.add(this.classNames.track),
                            n.classList.add(this.classNames.scrollbar),
                            t.appendChild(n),
                            this.axis.x.track.el = t.cloneNode(!0),
                            this.axis.x.track.el.classList.add(this.classNames.horizontal),
                            this.axis.y.track.el = t.cloneNode(!0),
                            this.axis.y.track.el.classList.add(this.classNames.vertical),
                            this.el.appendChild(this.axis.x.track.el),
                            this.el.appendChild(this.axis.y.track.el)
                    }
                    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar),
                        this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar),
                        this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
                            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
                        this.el.setAttribute("data-simplebar", "init")
                }
                ,
                t.initListeners = function () {
                    var e = this
                        , t = y(this.el);
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
                        ["mousedown", "click", "dblclick"].forEach((function (t) {
                            e.el.addEventListener(t, e.onPointerEvent, !0)
                        }
                        )),
                        ["touchstart", "touchend", "touchmove"].forEach((function (t) {
                            e.el.addEventListener(t, e.onPointerEvent, {
                                capture: !0,
                                passive: !0
                            })
                        }
                        )),
                        this.el.addEventListener("mousemove", this.onMouseMove),
                        this.el.addEventListener("mouseleave", this.onMouseLeave),
                        this.contentWrapperEl.addEventListener("scroll", this.onScroll),
                        t.addEventListener("resize", this.onWindowResize);
                    var n = !1
                        , r = t.ResizeObserver || p.a;
                    this.resizeObserver = new r((function () {
                        n && e.recalculate()
                    }
                    )),
                        this.resizeObserver.observe(this.el),
                        this.resizeObserver.observe(this.contentEl),
                        t.requestAnimationFrame((function () {
                            n = !0
                        }
                        )),
                        this.mutationObserver = new t.MutationObserver(this.recalculate),
                        this.mutationObserver.observe(this.contentEl, {
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        })
                }
                ,
                t.recalculate = function () {
                    var e = y(this.el);
                    this.elStyles = e.getComputedStyle(this.el),
                        this.isRtl = "rtl" === this.elStyles.direction;
                    var t = this.heightAutoObserverEl.offsetHeight <= 1
                        , n = this.heightAutoObserverEl.offsetWidth <= 1
                        , r = this.contentEl.offsetWidth
                        , o = this.contentWrapperEl.offsetWidth
                        , i = this.elStyles.overflowX
                        , a = this.elStyles.overflowY;
                    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft,
                        this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
                    var s = this.contentEl.scrollHeight
                        , c = this.contentEl.scrollWidth;
                    this.contentWrapperEl.style.height = t ? "auto" : "100%",
                        this.placeholderEl.style.width = n ? r + "px" : "auto",
                        this.placeholderEl.style.height = s + "px";
                    var l = this.contentWrapperEl.offsetHeight;
                    this.axis.x.isOverflowing = c > r,
                        this.axis.y.isOverflowing = s > l,
                        this.axis.x.isOverflowing = "hidden" !== i && this.axis.x.isOverflowing,
                        this.axis.y.isOverflowing = "hidden" !== a && this.axis.y.isOverflowing,
                        this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible,
                        this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible,
                        this.hideNativeScrollbar();
                    var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0
                        , d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > o - d,
                        this.axis.y.isOverflowing = this.axis.y.isOverflowing && s > l - u,
                        this.axis.x.scrollbar.size = this.getScrollbarSize("x"),
                        this.axis.y.scrollbar.size = this.getScrollbarSize("y"),
                        this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px",
                        this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px",
                        this.positionScrollbar("x"),
                        this.positionScrollbar("y"),
                        this.toggleTrackVisibility("x"),
                        this.toggleTrackVisibility("y")
                }
                ,
                t.getScrollbarSize = function (e) {
                    if (void 0 === e && (e = "y"),
                        !this.axis[e].isOverflowing)
                        return 0;
                    var t, n = this.contentEl[this.axis[e].scrollSizeAttr], r = this.axis[e].track.el[this.axis[e].offsetSizeAttr], o = r / n;
                    return t = Math.max(~~(o * r), this.options.scrollbarMinSize),
                        this.options.scrollbarMaxSize && (t = Math.min(t, this.options.scrollbarMaxSize)),
                        t
                }
                ,
                t.positionScrollbar = function (t) {
                    if (void 0 === t && (t = "y"),
                        this.axis[t].isOverflowing) {
                        var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr]
                            , r = this.axis[t].track.el[this.axis[t].offsetSizeAttr]
                            , o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10)
                            , i = this.axis[t].scrollbar
                            , a = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]
                            , s = (a = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -a : a) / (n - o)
                            , c = ~~((r - i.size) * s);
                        c = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? c + (r - i.size) : c,
                            i.el.style.transform = "x" === t ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
                    }
                }
                ,
                t.toggleTrackVisibility = function (e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].track.el
                        , n = this.axis[e].scrollbar.el;
                    this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible",
                        this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll") : (t.style.visibility = "hidden",
                            this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden"),
                        this.axis[e].isOverflowing ? n.style.display = "block" : n.style.display = "none"
                }
                ,
                t.hideNativeScrollbar = function () {
                    this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0,
                        this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
                }
                ,
                t.onMouseMoveForAxis = function (e) {
                    void 0 === e && (e = "y"),
                        this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect(),
                        this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(),
                        this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),
                        this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e),
                            this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover)
                }
                ,
                t.onMouseLeaveForAxis = function (e) {
                    void 0 === e && (e = "y"),
                        this.axis[e].track.el.classList.remove(this.classNames.hover),
                        this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)
                }
                ,
                t.showScrollbar = function (e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].scrollbar.el;
                    this.axis[e].isVisible || (t.classList.add(this.classNames.visible),
                        this.axis[e].isVisible = !0),
                        this.options.autoHide && this.hideScrollbars()
                }
                ,
                t.onDragStart = function (e, t) {
                    void 0 === t && (t = "y");
                    var n = g(this.el)
                        , r = y(this.el)
                        , o = this.axis[t].scrollbar
                        , i = "y" === t ? e.pageY : e.pageX;
                    this.axis[t].dragOffset = i - o.rect[this.axis[t].offsetAttr],
                        this.draggedAxis = t,
                        this.el.classList.add(this.classNames.dragging),
                        n.addEventListener("mousemove", this.drag, !0),
                        n.addEventListener("mouseup", this.onEndDrag, !0),
                        null === this.removePreventClickId ? (n.addEventListener("click", this.preventClick, !0),
                            n.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId),
                                this.removePreventClickId = null)
                }
                ,
                t.onTrackClick = function (e, t) {
                    var n = this;
                    if (void 0 === t && (t = "y"),
                        this.options.clickOnTrack) {
                        var r = y(this.el);
                        this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect();
                        var o = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr]
                            , i = parseInt(this.elStyles[this.axis[t].sizeAttr], 10)
                            , a = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]
                            , s = ("y" === t ? this.mouseY - o : this.mouseX - o) < 0 ? -1 : 1
                            , c = -1 === s ? a - i : a + i;
                        !function e() {
                            var o, i;
                            -1 === s ? a > c && (a -= 40,
                                n.contentWrapperEl.scrollTo(((o = {})[n.axis[t].offsetAttr] = a,
                                    o)),
                                r.requestAnimationFrame(e)) : a < c && (a += 40,
                                    n.contentWrapperEl.scrollTo(((i = {})[n.axis[t].offsetAttr] = a,
                                        i)),
                                    r.requestAnimationFrame(e))
                        }()
                    }
                }
                ,
                t.getContentElement = function () {
                    return this.contentEl
                }
                ,
                t.getScrollElement = function () {
                    return this.contentWrapperEl
                }
                ,
                t.getScrollbarWidth = function () {
                    try {
                        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : S()
                    } catch (e) {
                        return S()
                    }
                }
                ,
                t.removeListeners = function () {
                    var e = this
                        , t = y(this.el);
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
                        ["mousedown", "click", "dblclick"].forEach((function (t) {
                            e.el.removeEventListener(t, e.onPointerEvent, !0)
                        }
                        )),
                        ["touchstart", "touchend", "touchmove"].forEach((function (t) {
                            e.el.removeEventListener(t, e.onPointerEvent, {
                                capture: !0,
                                passive: !0
                            })
                        }
                        )),
                        this.el.removeEventListener("mousemove", this.onMouseMove),
                        this.el.removeEventListener("mouseleave", this.onMouseLeave),
                        this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
                        t.removeEventListener("resize", this.onWindowResize),
                        this.mutationObserver.disconnect(),
                        this.resizeObserver.disconnect(),
                        this.recalculate.cancel(),
                        this.onMouseMove.cancel(),
                        this.hideScrollbars.cancel(),
                        this.onWindowResize.cancel()
                }
                ,
                t.unMount = function () {
                    this.removeListeners(),
                        e.instances.delete(this.el)
                }
                ,
                t.isWithinBounds = function (e) {
                    return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
                }
                ,
                t.findChild = function (e, t) {
                    var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                    return Array.prototype.filter.call(e.children, (function (e) {
                        return n.call(e, t)
                    }
                    ))[0]
                }
                ,
                e
        }();
        m.defaultOptions = {
            autoHide: !0,
            forceVisible: !1,
            clickOnTrack: !0,
            classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging"
            },
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            timeout: 1e3
        },
            m.instances = new WeakMap;
        var A = m;
        function b(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function O() {
            return (O = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function T(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                    n.push.apply(n, r)
            }
            return n
        }
        function R(e, t) {
            if (null == e)
                return {};
            var n, r, o = function (e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                        t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        var C = o.a.forwardRef((function (e, t) {
            var n, i = e.children, a = e.scrollableNodeProps, s = void 0 === a ? {} : a, c = R(e, ["children", "scrollableNodeProps"]), l = Object(r.useRef)(), u = Object(r.useRef)(), d = Object(r.useRef)(), f = {}, p = {}, h = [];
            return Object.keys(c).forEach((function (e) {
                Object.prototype.hasOwnProperty.call(A.defaultOptions, e) ? f[e] = c[e] : e.match(/data-simplebar-(.+)/) ? h.push({
                    name: e,
                    value: c[e]
                }) : p[e] = c[e]
            }
            )),
                h.length && console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' ???> 'autoHide=\"false\"'\n      "),
                Object(r.useEffect)((function () {
                    var e;
                    return l = s.ref || l,
                        u.current && (n = new A(u.current, function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? T(n, !0).forEach((function (t) {
                                    b(e, t, n[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(n).forEach((function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }
                                ))
                            }
                            return e
                        }({}, (e = h,
                            Array.prototype.reduce.call(e, (function (e, t) {
                                var n = t.name.match(/data-simplebar-(.+)/);
                                if (n) {
                                    var r = n[1].replace(/\W+(.)/g, (function (e, t) {
                                        return t.toUpperCase()
                                    }
                                    ));
                                    switch (t.value) {
                                        case "true":
                                            e[r] = !0;
                                            break;
                                        case "false":
                                            e[r] = !1;
                                            break;
                                        case void 0:
                                            e[r] = !0;
                                            break;
                                        default:
                                            e[r] = t.value
                                    }
                                }
                                return e
                            }
                            ), {})), {}, f, {}, l && {
                                scrollableNode: l.current
                            }, {}, d.current && {
                                contentNode: d.current
                            })),
                            t && (t.current = n)),
                        function () {
                            n.unMount(),
                                n = null
                        }
                }
                ), []),
                o.a.createElement("div", O({
                    ref: u,
                    "data-simplebar": !0
                }, p), o.a.createElement("div", {
                    className: "simplebar-wrapper"
                }, o.a.createElement("div", {
                    className: "simplebar-height-auto-observer-wrapper"
                }, o.a.createElement("div", {
                    className: "simplebar-height-auto-observer"
                })), o.a.createElement("div", {
                    className: "simplebar-mask"
                }, o.a.createElement("div", {
                    className: "simplebar-offset"
                }, "function" == typeof i ? i({
                    scrollableNodeRef: l,
                    contentNodeRef: d
                }) : o.a.createElement("div", O({}, s, {
                    className: "simplebar-content-wrapper".concat(s.className ? " ".concat(s.className) : "")
                }), o.a.createElement("div", {
                    className: "simplebar-content"
                }, i)))), o.a.createElement("div", {
                    className: "simplebar-placeholder"
                })), o.a.createElement("div", {
                    className: "simplebar-track simplebar-horizontal"
                }, o.a.createElement("div", {
                    className: "simplebar-scrollbar"
                })), o.a.createElement("div", {
                    className: "simplebar-track simplebar-vertical"
                }, o.a.createElement("div", {
                    className: "simplebar-scrollbar"
                })))
        }
        ));
        C.displayName = "SimpleBar",
            C.propTypes = {
                children: a.a.oneOfType([a.a.node, a.a.func]),
                scrollableNodeProps: a.a.object
            };
        t.default = C
    },
    192: function (e, t, n) {
        "use strict";
        let r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = t.MessengerSsoState = void 0,
            t.MessengerSsoState = r,
            function (e) {
                e.Preparing = "preparing",
                    e.Ready = "ready",
                    e.Authenticating = "authenticating",
                    e.Failed = "failed",
                    e.Disabled = "disabled"
            }(r || (t.MessengerSsoState = r = {}));
        var o = r;
        t.default = o
    },
    199: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(789);
        Object.keys(r).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return r[e]
                }
            })
        }
        ));
        var o = n(790);
        Object.keys(o).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return o[e]
                }
            })
        }
        ));
        var i = n(791);
        Object.keys(i).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e]
                }
            })
        }
        ))
    },
    20: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return o
        }
        )),
            n.d(t, "b", (function () {
                return i
            }
            )),
            n.d(t, "c", (function () {
                return a
            }
            )),
            n.d(t, "d", (function () {
                return s
            }
            )),
            n.d(t, "e", (function () {
                return c
            }
            )),
            n.d(t, "f", (function () {
                return l
            }
            )),
            n.d(t, "g", (function () {
                return h
            }
            )),
            n.d(t, "h", (function () {
                return u
            }
            )),
            n.d(t, "i", (function () {
                return d
            }
            )),
            n.d(t, "j", (function () {
                return f
            }
            )),
            n.d(t, "k", (function () {
                return p
            }
            ));
        var r = function (e) {
            return "@@redux-saga/" + e
        }
            , o = r("CANCEL_PROMISE")
            , i = r("CHANNEL_END")
            , a = r("IO")
            , s = r("MATCH")
            , c = r("MULTICAST")
            , l = r("SAGA_ACTION")
            , u = r("SELF_CANCELLATION")
            , d = r("TASK")
            , f = r("TASK_CANCEL")
            , p = r("TERMINATE")
            , h = r("LOCATION")
    },
    206: function (e, t, n) {
        var r = n(207)
            , o = n(150);
        e.exports = function (e) {
            return r(o(e))
        }
    },
    207: function (e, t, n) {
        var r = n(55)
            , o = n(208)
            , i = "".split;
        e.exports = r((function () {
            return !Object("z").propertyIsEnumerable(0)
        }
        )) ? function (e) {
            return "String" == o(e) ? i.call(e, "") : Object(e)
        }
            : Object
    },
    208: function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1)
        }
    },
    209: function (e, t) {
        e.exports = {}
    },
    21: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(828);
        Object.keys(r).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return r[e]
                }
            })
        }
        ));
        var o = n(168);
        Object.keys(o).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return o[e]
                }
            })
        }
        ));
        var i = n(400);
        Object.keys(i).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e]
                }
            })
        }
        ));
        var a = n(401);
        Object.keys(a).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return a[e]
                }
            })
        }
        ));
        var s = n(402);
        Object.keys(s).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return s[e]
                }
            })
        }
        ));
        var c = n(61);
        Object.keys(c).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return c[e]
                }
            })
        }
        ))
    },
    210: function (e, t) {
        var n = Math.ceil
            , r = Math.floor;
        e.exports = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    },
    22: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = {};
        t.default = void 0;
        var o = d(n(75))
            , i = n(617);
        Object.keys(i).forEach((function (e) {
            "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(r, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e]
                }
            }))
        }
        ));
        var a = d(n(85))
            , s = d(n(1))
            , c = function (e) {
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
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(0))
            , l = n(6);
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
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function f() {
            return (f = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        const p = s.default.div(e => ({
            fontSize: e.theme.select({
                mac: i.EMOJI_FONT_SIZES_MAC[e.size],
                windows: i.EMOJI_FONT_SIZES_WINDOWS[e.size]
            }),
            height: "100%",
            fontFamily: `${"windows" === e.theme.os ? "FacebookEmoji, " : ""}-apple-system, BlinkMacSystemFont, 'Apple Color Emoji',\n    'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif`
        }))
            , h = s.default.div(e => ({
                height: i.COLOR_SIZES[e.size],
                width: i.COLOR_SIZES[e.size],
                borderRadius: "50%",
                background: e.color,
                backgroundImage: e.gradient ? `linear-gradient(${e.gradient.join(",")})` : "none"
            }));
        var E = c.default.memo(c.default.forwardRef((function ({ size: e = i.RoundButtonSize.Large, buttonColor: t, iconColor: n, iconSize: r, icon: s, use: u = i.RoundButtonUse.Standard, customEmoji: d, activateOnHover: E, gradientColors: _, className: v, children: S, ...y }, g) {
            const m = (0,
                l.useTheme)()
                , [A, b] = (0,
                    c.useState)(!1);
            return c.default.createElement(o.default, f({
                className: v,
                elementRef: g,
                onMouseEnter: () => b(!0),
                onMouseLeave: () => b(!1)
            }, y, {
                css: {
                    ...y.css || {},
                    padding: e === i.RoundButtonSize.Tiny || e === i.RoundButtonSize.XXSmall || e === i.RoundButtonSize.XSmall ? 0 : void 0,
                    textAlign: "center",
                    height: i.BUTTON_SIZES[e],
                    width: i.BUTTON_SIZES[e],
                    borderRadius: "50%",
                    backgroundColor: t || ("transparent" === u ? "transparent" : void 0)
                }
            }), S || (d ? c.default.createElement(p, {
                size: e
            }, d) : s ? c.default.createElement(s, {
                color: A && E ? (0,
                    a.default)(n || m.semanticColors.textPrimary).mix((0,
                        a.default)(m.colors.base80), .5).hex() : n || m.semanticColors.textPrimary,
                size: r || i.ICON_SIZES[e]
            }) : c.default.createElement(h, {
                color: n,
                size: e,
                gradient: _
            })))
        }
        )));
        t.default = E
    },
    233: function (e, t, n) {
        "use strict";
        e.exports = n(820)
    },
    234: function (e, t, n) {
        "use strict";
        var r = n(20);
        t.a = function (e, t) {
            var n;
            void 0 === t && (t = !0);
            var o = new Promise((function (r) {
                n = setTimeout(r, e, t)
            }
            ));
            return o[r.a] = function () {
                clearTimeout(n)
            }
                ,
                o
        }
    },
    238: function (e, t, n) {
        (function (t) {
            var n = /^\[object .+?Constructor\]$/
                , r = "object" == typeof t && t && t.Object === Object && t
                , o = "object" == typeof self && self && self.Object === Object && self
                , i = r || o || Function("return this")();
            var a, s = Array.prototype, c = Function.prototype, l = Object.prototype, u = i["__core-js_shared__"], d = (a = /[^.]+$/.exec(u && u.keys && u.keys.IE_PROTO || "")) ? "Symbol(src)_1." + a : "", f = c.toString, p = l.hasOwnProperty, h = l.toString, E = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), _ = s.splice, v = T(i, "Map"), S = T(Object, "create");
            function y(e) {
                var t = -1
                    , n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            function g(e) {
                var t = -1
                    , n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            function m(e) {
                var t = -1
                    , n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }
            function A(e, t) {
                for (var n, r, o = e.length; o--;)
                    if ((n = e[o][0]) === (r = t) || n != n && r != r)
                        return o;
                return -1
            }
            function b(e) {
                return !(!C(e) || (t = e,
                    d && d in t)) && (function (e) {
                        var t = C(e) ? h.call(e) : "";
                        return "[object Function]" == t || "[object GeneratorFunction]" == t
                    }(e) || function (e) {
                        var t = !1;
                        if (null != e && "function" != typeof e.toString)
                            try {
                                t = !!(e + "")
                            } catch (e) { }
                        return t
                    }(e) ? E : n).test(function (e) {
                        if (null != e) {
                            try {
                                return f.call(e)
                            } catch (e) { }
                            try {
                                return e + ""
                            } catch (e) { }
                        }
                        return ""
                    }(e));
                var t
            }
            function O(e, t) {
                var n, r, o = e.__data__;
                return ("string" == (r = typeof (n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? o["string" == typeof t ? "string" : "hash"] : o.map
            }
            function T(e, t) {
                var n = function (e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return b(n) ? n : void 0
            }
            function R(e, t) {
                if ("function" != typeof e || t && "function" != typeof t)
                    throw new TypeError("Expected a function");
                var n = function () {
                    var r = arguments
                        , o = t ? t.apply(this, r) : r[0]
                        , i = n.cache;
                    if (i.has(o))
                        return i.get(o);
                    var a = e.apply(this, r);
                    return n.cache = i.set(o, a),
                        a
                };
                return n.cache = new (R.Cache || m),
                    n
            }
            function C(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            y.prototype.clear = function () {
                this.__data__ = S ? S(null) : {}
            }
                ,
                y.prototype.delete = function (e) {
                    return this.has(e) && delete this.__data__[e]
                }
                ,
                y.prototype.get = function (e) {
                    var t = this.__data__;
                    if (S) {
                        var n = t[e];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return p.call(t, e) ? t[e] : void 0
                }
                ,
                y.prototype.has = function (e) {
                    var t = this.__data__;
                    return S ? void 0 !== t[e] : p.call(t, e)
                }
                ,
                y.prototype.set = function (e, t) {
                    return this.__data__[e] = S && void 0 === t ? "__lodash_hash_undefined__" : t,
                        this
                }
                ,
                g.prototype.clear = function () {
                    this.__data__ = []
                }
                ,
                g.prototype.delete = function (e) {
                    var t = this.__data__
                        , n = A(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : _.call(t, n, 1),
                        !0)
                }
                ,
                g.prototype.get = function (e) {
                    var t = this.__data__
                        , n = A(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }
                ,
                g.prototype.has = function (e) {
                    return A(this.__data__, e) > -1
                }
                ,
                g.prototype.set = function (e, t) {
                    var n = this.__data__
                        , r = A(n, e);
                    return r < 0 ? n.push([e, t]) : n[r][1] = t,
                        this
                }
                ,
                m.prototype.clear = function () {
                    this.__data__ = {
                        hash: new y,
                        map: new (v || g),
                        string: new y
                    }
                }
                ,
                m.prototype.delete = function (e) {
                    return O(this, e).delete(e)
                }
                ,
                m.prototype.get = function (e) {
                    return O(this, e).get(e)
                }
                ,
                m.prototype.has = function (e) {
                    return O(this, e).has(e)
                }
                ,
                m.prototype.set = function (e, t) {
                    return O(this, e).set(e, t),
                        this
                }
                ,
                R.Cache = m,
                e.exports = R
        }
        ).call(this, n(54))
    },
    239: function (e, t, n) {
        "use strict";
        (function (e) {
            var n = function () {
                if ("undefined" != typeof Map)
                    return Map;
                function e(e, t) {
                    var n = -1;
                    return e.some((function (e, r) {
                        return e[0] === t && (n = r,
                            !0)
                    }
                    )),
                        n
                }
                return (function () {
                    function t() {
                        this.__entries__ = []
                    }
                    return Object.defineProperty(t.prototype, "size", {
                        get: function () {
                            return this.__entries__.length
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                        t.prototype.get = function (t) {
                            var n = e(this.__entries__, t)
                                , r = this.__entries__[n];
                            return r && r[1]
                        }
                        ,
                        t.prototype.set = function (t, n) {
                            var r = e(this.__entries__, t);
                            ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                        }
                        ,
                        t.prototype.delete = function (t) {
                            var n = this.__entries__
                                , r = e(n, t);
                            ~r && n.splice(r, 1)
                        }
                        ,
                        t.prototype.has = function (t) {
                            return !!~e(this.__entries__, t)
                        }
                        ,
                        t.prototype.clear = function () {
                            this.__entries__.splice(0)
                        }
                        ,
                        t.prototype.forEach = function (e, t) {
                            void 0 === t && (t = null);
                            for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                var o = r[n];
                                e.call(t, o[1], o[0])
                            }
                        }
                        ,
                        t
                }())
            }()
                , r = "undefined" != typeof window && "undefined" != typeof document && window.document === document
                , o = void 0 !== e && e.Math === Math ? e : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")()
                , i = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function (e) {
                    return setTimeout((function () {
                        return e(Date.now())
                    }
                    ), 1e3 / 60)
                }
                ;
            var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"]
                , s = "undefined" != typeof MutationObserver
                , c = function () {
                    function e() {
                        this.connected_ = !1,
                            this.mutationEventsAdded_ = !1,
                            this.mutationsObserver_ = null,
                            this.observers_ = [],
                            this.onTransitionEnd_ = this.onTransitionEnd_.bind(this),
                            this.refresh = function (e, t) {
                                var n = !1
                                    , r = !1
                                    , o = 0;
                                function a() {
                                    n && (n = !1,
                                        e()),
                                        r && c()
                                }
                                function s() {
                                    i(a)
                                }
                                function c() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - o < 2)
                                            return;
                                        r = !0
                                    } else
                                        n = !0,
                                            r = !1,
                                            setTimeout(s, t);
                                    o = e
                                }
                                return c
                            }(this.refresh.bind(this), 20)
                    }
                    return e.prototype.addObserver = function (e) {
                        ~this.observers_.indexOf(e) || this.observers_.push(e),
                            this.connected_ || this.connect_()
                    }
                        ,
                        e.prototype.removeObserver = function (e) {
                            var t = this.observers_
                                , n = t.indexOf(e);
                            ~n && t.splice(n, 1),
                                !t.length && this.connected_ && this.disconnect_()
                        }
                        ,
                        e.prototype.refresh = function () {
                            this.updateObservers_() && this.refresh()
                        }
                        ,
                        e.prototype.updateObservers_ = function () {
                            var e = this.observers_.filter((function (e) {
                                return e.gatherActive(),
                                    e.hasActive()
                            }
                            ));
                            return e.forEach((function (e) {
                                return e.broadcastActive()
                            }
                            )),
                                e.length > 0
                        }
                        ,
                        e.prototype.connect_ = function () {
                            r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_),
                                window.addEventListener("resize", this.refresh),
                                s ? (this.mutationsObserver_ = new MutationObserver(this.refresh),
                                    this.mutationsObserver_.observe(document, {
                                        attributes: !0,
                                        childList: !0,
                                        characterData: !0,
                                        subtree: !0
                                    })) : (document.addEventListener("DOMSubtreeModified", this.refresh),
                                        this.mutationEventsAdded_ = !0),
                                this.connected_ = !0)
                        }
                        ,
                        e.prototype.disconnect_ = function () {
                            r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_),
                                window.removeEventListener("resize", this.refresh),
                                this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
                                this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh),
                                this.mutationsObserver_ = null,
                                this.mutationEventsAdded_ = !1,
                                this.connected_ = !1)
                        }
                        ,
                        e.prototype.onTransitionEnd_ = function (e) {
                            var t = e.propertyName
                                , n = void 0 === t ? "" : t;
                            a.some((function (e) {
                                return !!~n.indexOf(e)
                            }
                            )) && this.refresh()
                        }
                        ,
                        e.getInstance = function () {
                            return this.instance_ || (this.instance_ = new e),
                                this.instance_
                        }
                        ,
                        e.instance_ = null,
                        e
                }()
                , l = function (e, t) {
                    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                        var o = r[n];
                        Object.defineProperty(e, o, {
                            value: t[o],
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        })
                    }
                    return e
                }
                , u = function (e) {
                    return e && e.ownerDocument && e.ownerDocument.defaultView || o
                }
                , d = v(0, 0, 0, 0);
            function f(e) {
                return parseFloat(e) || 0
            }
            function p(e) {
                for (var t = [], n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
                return t.reduce((function (t, n) {
                    return t + f(e["border-" + n + "-width"])
                }
                ), 0)
            }
            function h(e) {
                var t = e.clientWidth
                    , n = e.clientHeight;
                if (!t && !n)
                    return d;
                var r = u(e).getComputedStyle(e)
                    , o = function (e) {
                        for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                            var o = r[n]
                                , i = e["padding-" + o];
                            t[o] = f(i)
                        }
                        return t
                    }(r)
                    , i = o.left + o.right
                    , a = o.top + o.bottom
                    , s = f(r.width)
                    , c = f(r.height);
                if ("border-box" === r.boxSizing && (Math.round(s + i) !== t && (s -= p(r, "left", "right") + i),
                    Math.round(c + a) !== n && (c -= p(r, "top", "bottom") + a)),
                    !function (e) {
                        return e === u(e).document.documentElement
                    }(e)) {
                    var l = Math.round(s + i) - t
                        , h = Math.round(c + a) - n;
                    1 !== Math.abs(l) && (s -= l),
                        1 !== Math.abs(h) && (c -= h)
                }
                return v(o.left, o.top, s, c)
            }
            var E = "undefined" != typeof SVGGraphicsElement ? function (e) {
                return e instanceof u(e).SVGGraphicsElement
            }
                : function (e) {
                    return e instanceof u(e).SVGElement && "function" == typeof e.getBBox
                }
                ;
            function _(e) {
                return r ? E(e) ? function (e) {
                    var t = e.getBBox();
                    return v(0, 0, t.width, t.height)
                }(e) : h(e) : d
            }
            function v(e, t, n, r) {
                return {
                    x: e,
                    y: t,
                    width: n,
                    height: r
                }
            }
            var S = function () {
                function e(e) {
                    this.broadcastWidth = 0,
                        this.broadcastHeight = 0,
                        this.contentRect_ = v(0, 0, 0, 0),
                        this.target = e
                }
                return e.prototype.isActive = function () {
                    var e = _(this.target);
                    return this.contentRect_ = e,
                        e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                }
                    ,
                    e.prototype.broadcastRect = function () {
                        var e = this.contentRect_;
                        return this.broadcastWidth = e.width,
                            this.broadcastHeight = e.height,
                            e
                    }
                    ,
                    e
            }()
                , y = function (e, t) {
                    var n, r, o, i, a, s, c, u = (r = (n = t).x,
                        o = n.y,
                        i = n.width,
                        a = n.height,
                        s = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                        c = Object.create(s.prototype),
                        l(c, {
                            x: r,
                            y: o,
                            width: i,
                            height: a,
                            top: o,
                            right: r + i,
                            bottom: a + o,
                            left: r
                        }),
                        c);
                    l(this, {
                        target: e,
                        contentRect: u
                    })
                }
                , g = function () {
                    function e(e, t, r) {
                        if (this.activeObservations_ = [],
                            this.observations_ = new n,
                            "function" != typeof e)
                            throw new TypeError("The callback provided as parameter 1 is not a function.");
                        this.callback_ = e,
                            this.controller_ = t,
                            this.callbackCtx_ = r
                    }
                    return e.prototype.observe = function (e) {
                        if (!arguments.length)
                            throw new TypeError("1 argument required, but only 0 present.");
                        if ("undefined" != typeof Element && Element instanceof Object) {
                            if (!(e instanceof u(e).Element))
                                throw new TypeError('parameter 1 is not of type "Element".');
                            var t = this.observations_;
                            t.has(e) || (t.set(e, new S(e)),
                                this.controller_.addObserver(this),
                                this.controller_.refresh())
                        }
                    }
                        ,
                        e.prototype.unobserve = function (e) {
                            if (!arguments.length)
                                throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" != typeof Element && Element instanceof Object) {
                                if (!(e instanceof u(e).Element))
                                    throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e),
                                    t.size || this.controller_.removeObserver(this))
                            }
                        }
                        ,
                        e.prototype.disconnect = function () {
                            this.clearActive(),
                                this.observations_.clear(),
                                this.controller_.removeObserver(this)
                        }
                        ,
                        e.prototype.gatherActive = function () {
                            var e = this;
                            this.clearActive(),
                                this.observations_.forEach((function (t) {
                                    t.isActive() && e.activeObservations_.push(t)
                                }
                                ))
                        }
                        ,
                        e.prototype.broadcastActive = function () {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_
                                    , t = this.activeObservations_.map((function (e) {
                                        return new y(e.target, e.broadcastRect())
                                    }
                                    ));
                                this.callback_.call(e, t, e),
                                    this.clearActive()
                            }
                        }
                        ,
                        e.prototype.clearActive = function () {
                            this.activeObservations_.splice(0)
                        }
                        ,
                        e.prototype.hasActive = function () {
                            return this.activeObservations_.length > 0
                        }
                        ,
                        e
                }()
                , m = "undefined" != typeof WeakMap ? new WeakMap : new n
                , A = function e(t) {
                    if (!(this instanceof e))
                        throw new TypeError("Cannot call a class as a function.");
                    if (!arguments.length)
                        throw new TypeError("1 argument required, but only 0 present.");
                    var n = c.getInstance()
                        , r = new g(t, n, this);
                    m.set(this, r)
                };
            ["observe", "unobserve", "disconnect"].forEach((function (e) {
                A.prototype[e] = function () {
                    var t;
                    return (t = m.get(this))[e].apply(t, arguments)
                }
            }
            ));
            var b = void 0 !== o.ResizeObserver ? o.ResizeObserver : A;
            t.a = b
        }
        ).call(this, n(54))
    },
    24: function (e, t, n) {
        "use strict";
        let r, o, i, a, s;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AppStartEvent = function (e) {
                return {
                    name: s.AppStartEventName,
                    launchType: e.launchType,
                    launchContext: e.launchContext,
                    ...e.machineInfo,
                    operatingSystem: e.operatingSystem,
                    accessibility: e.accessibility,
                    preInstallSource: e.preInstallSource,
                    preferredLocaleKey: e.preferredLocaleKey
                }
            }
            ,
            t.ClientAuthenticationEvent = function (e) {
                return {
                    name: "messenger_desktop_client_authentication",
                    ...e,
                    context: e.context || {}
                }
            }
            ,
            t.IncomingMessageReadEvent = function (e) {
                return {
                    name: "messenger_desktop_client_incoming_message_read",
                    threadKey: e.threadKey,
                    isThreadFocused: e.isThreadFocused,
                    messageId: e.message.messageId,
                    sentTimestamp: e.message.timestampMs,
                    readTimestamp: Date.now()
                }
            }
            ,
            t.MessageSendFailedEvent = function (e) {
                return {
                    name: "messenger_desktop_client_message_send_failed",
                    isThreadFocused: !0,
                    ...e
                }
            }
            ,
            t.OsmetaUpgradeErrorEvent = function (e) {
                return {
                    name: "messenger_desktop_client_osmeta_upgrade_error",
                    ...e
                }
            }
            ,
            t.MessageSendEvent = function (e) {
                return {
                    name: "messenger_desktop_client_message_send",
                    isThreadFocused: !0,
                    ...e
                }
            }
            ,
            t.UserInteractionEvent = function (e) {
                return {
                    name: s.UserInteractionEventName,
                    event: e.event,
                    target: e.target,
                    surface: e.surface,
                    context: e.context || {}
                }
            }
            ,
            t.PerformanceEvent = function (e) {
                return {
                    name: s.PerformanceEventName,
                    scenarioName: e.scenarioName,
                    scenarioStart: e.start,
                    scenarioEnd: e.end,
                    scenarioDuration: e.duration,
                    splits: e.splits
                }
            }
            ,
            t.WatchdogRunEvent = function (e) {
                return {
                    name: "messenger_desktop_client_watchdog_run",
                    ...e
                }
            }
            ,
            t.HeartbeatEvent = function (e) {
                return {
                    name: s.HeartbeatEventName,
                    ...e
                }
            }
            ,
            t.NotificationEvent = function (e) {
                return {
                    name: "messenger_desktop_notification",
                    ...e
                }
            }
            ,
            t.ImpressionEvent = function (e) {
                return {
                    name: "messenger_desktop_client_impressions",
                    ...e,
                    context: e.context || {}
                }
            }
            ,
            t.SettingChangedEvent = function (e) {
                return {
                    name: "messenger_desktop_client_setting_changed",
                    ...e
                }
            }
            ,
            t.MsysStatsEvent = function (e) {
                return {
                    name: "messenger_desktop_client_msys_stats",
                    ...e
                }
            }
            ,
            t.ClientAutoUpdaterEvent = function (e) {
                return {
                    name: "messenger_desktop_client_autoupdater",
                    ...e
                }
            }
            ,
            t.NativeSSLValidationFailureEvent = function (e) {
                return {
                    name: "messenger_desktop_ssl_error",
                    ...e
                }
            }
            ,
            t.AuthenticationFailureEvent = function (e) {
                return {
                    name: "messenger_desktop_client_auth_failures",
                    ...e
                }
            }
            ,
            t.MessengerRoomEvent = function (e) {
                return {
                    name: "messenger_desktop_client_room_event",
                    ...e
                }
            }
            ,
            t.ExperimentImpressionEvent = function (e, t) {
                if (!e.conditionFBID)
                    throw new Error("Cannot log impression for incomplete ExperimentConfig, impressionFBID missing.");
                return {
                    name: "qe2_log_exposure",
                    unit_id: t,
                    auto_exposure: !0 === e.autoLogExposure,
                    cond_fbid: e.conditionFBID
                }
            }
            ,
            t.WindowsStartupTaskEvent = function (e) {
                return {
                    name: "messenger_desktop_client_windows_startup_task",
                    ...e
                }
            }
            ,
            t.NativeRtcEvent = function (e) {
                return {
                    name: "messenger_desktop_client_native_rtc",
                    ...e
                }
            }
            ,
            t.DeeplinkEvent = function (e) {
                return {
                    name: "messenger_desktop_deeplink_event",
                    event_location: "client",
                    ...e
                }
            }
            ,
            t.RtcStarRatingShownEvent = function (e) {
                return {
                    name: "ls_rtc_star_rating_shown",
                    ...e
                }
            }
            ,
            t.NavigationEvent = function (e) {
                return {
                    name: "navigation",
                    ...e
                }
            }
            ,
            t.TimeSpentBitArrayEvent = function (e) {
                return {
                    name: "time_spent_bit_array",
                    ...e
                }
            }
            ,
            t.AppStateEvent = function (e) {
                return {
                    name: "app_state",
                    ...e
                }
            }
            ,
            t.EventNames = t.AppCodename = t.AppState = t.NativeRtcEvents = t.DeeplinkEvents = void 0,
            t.DeeplinkEvents = r,
            function (e) {
                e.RECEIVED_LOCALHOST_DEEPLINK = "receive_localhost_deeplink",
                    e.FETCHING_DECRYPTED_PAYLOAD = "fetching_decrypted_payload",
                    e.RECEIVED_DECRYPTED_PAYLOAD = "received_decrypted_payload",
                    e.INVALID_LOCALHOST_DEEPLINK = "invalid_localhost_deeplink",
                    e.LOCALHOST_DEEPLINK_ACTION_COMPLETED = "localhost_deeplink_action_completed",
                    e.RECEIVED_CUSTOM_PROTOCOL_DEEPLINK = "received_custom_protocol_deeplink",
                    e.INVALID_CUSTOM_PROTOCOL_DEEPLINK = "invalid_custom_protocol_deeplink",
                    e.CUSTOM_PROTOCOL_DEEPLINK_ACTION_COMPLETED = "custom_protocol_deeplink_action_completed"
            }(r || (t.DeeplinkEvents = r = {})),
            t.NativeRtcEvents = o,
            function (e) {
                e.APPROOT_START = "approot_start",
                    e.UI_ERROR = "ui_error",
                    e.PARTICIPANT_RENDER = "participant_render",
                    e.MEDIA_ACCESS_ERROR = "media_access_error",
                    e.SCREEN_SHARE_MEDIA_ACCESS_ERROR = "screen_share_media_access_error",
                    e.OUT_OF_SYNC_CALL_ENDED = "out_of_sync_call_ended",
                    e.GATEKEEPERS_UNDEFINED = "gatekeepers_undefined",
                    e.GATEKEEPER_NOT_FOUND = "gatekeeper_not_found",
                    e.ALREADY_IN_CALL = "already_in_call",
                    e.I18N_LOADED_TRANSLATIONS = "i18n_loaded_translations",
                    e.I18N_ERROR = "i18n_error",
                    e.MEDIA_ISSUES_FROM_PARTICIPANT = "media_issues_from_participant",
                    e.AUDIO_DEVICES_LOAD_SETTING = "audio_devices_load_setting",
                    e.AUDIO_DEVICES_SELECT = "audio_devices_select",
                    e.AUDIO_DEVICES_UPDATED = "audio_devices_updated",
                    e.INCALL_NOTIFICATION_ADD_ITEM = "incall_notification_add_item",
                    e.INCALL_NOTIFICATION_REMOVE_ITEM = "incall_notification_remove_item",
                    e.NETWORK_INDICATOR_SHOWN = "network_indicator_shown"
            }(o || (t.NativeRtcEvents = o = {})),
            t.AppState = i,
            function (e) {
                e.FOREGROUND = "foreground",
                    e.BACKGROUND = "background",
                    e.ACTIVE = "active",
                    e.RESIGN = "resign",
                    e.SHUTDOWN = "shutdown",
                    e.LAUNCH = "launch"
            }(i || (t.AppState = i = {})),
            t.AppCodename = a,
            function (e) {
                e.Archon = "archon",
                    e.Zeratul = "zeratul"
            }(a || (t.AppCodename = a = {})),
            t.EventNames = s,
            function (e) {
                e.AppStartEventName = "messenger_desktop_client_appstart",
                    e.UserInteractionEventName = "messenger_desktop_client_user_interaction",
                    e.PerformanceEventName = "messenger_desktop_client_performance",
                    e.HeartbeatEventName = "messenger_desktop_client_heartbeat"
            }(s || (t.EventNames = s = {}))
    },
    255: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const t = e.icon;
                return (o.default.createElement(c, null, o.default.createElement(l, null, o.default.createElement(t, {
                    size: 130
                })), o.default.createElement(d, {
                    use: "headline",
                    wrapText: !0
                }, e.title), e.subtitle1 && o.default.createElement(a.default, {
                    use: "title-semibold",
                    wrapText: !0
                }, e.subtitle1), e.subtitle2 && o.default.createElement(a.default, {
                    use: "title-semibold",
                    wrapText: !0
                }, e.subtitle2), e.cta && o.default.createElement(u, {
                    padding: e.ctaPadding || 50
                }, e.cta)))
            }
            ;
        var r = s(n(1))
            , o = s(n(0))
            , i = s(n(2))
            , a = s(n(4));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0,
            r.default)(i.default)({
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center"
            })
            , l = (0,
                r.default)(i.default)({
                    padding: 10
                })
            , u = (0,
                r.default)(i.default)(e => ({
                    padding: e.padding
                }))
            , d = (0,
                r.default)(a.default)({
                    padding: "20px 0px"
                })
    },
    268: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.GatekeeperSaga = function* () {
                if (yield (0,
                    d.setContext)({
                        refreshTask: (0,
                            r.createRef)(null)
                    }),
                    yield (0,
                        d.takeLatest)(u.AuthenticationActions.startLogout.type, _),
                    yield (0,
                        d.select)(u.isUserLoggedIn)) {
                    const { userID: e, accessToken: t } = yield (0,
                        d.select)(u.requireAuthenticationData);
                    yield (0,
                        d.call)(p),
                        yield (0,
                            d.fork)(h, e, t, !0),
                        yield (0,
                            d.fork)(v)
                } else {
                    yield (0,
                        d.takeLatest)(u.AuthenticationActions.loginSucceeded, v);
                    const e = yield (0,
                        d.call)(l.default.platform.getLoggedOutGatekeepers);
                    yield (0,
                        d.put)(o.GatekeeperActions.loadGatekeepers(e))
                }
                yield (0,
                    d.call)(r.waitUntillCancelled)
            }
            ,
            t.restoreGatekeepers = p,
            t.refreshGatekeepersInBackground = h,
            t.loadGatekeepers = E,
            t.resetGatekeepers = _,
            t.STORAGE_KEY = void 0;
        var r = n(74)
            , o = n(269)
            , i = n(32)
            , a = n(24)
            , s = n(199)
            , c = f(n(47))
            , l = f(n(9))
            , u = n(21)
            , d = n(17);
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function* p() {
            const e = yield (0,
                d.call)([localStorage, localStorage.getItem], "gatekeepers");
            if (e)
                try {
                    const t = JSON.parse(e);
                    yield (0,
                        d.put)(o.GatekeeperActions.restoreGatekeepers(t))
                } catch (e) {
                    yield (0,
                        d.call)(l.default.log.error, `Failed to restore Gatekeeper values from Local Storage. Error: ${e}.`),
                        yield (0,
                            d.call)([localStorage, localStorage.removeItem], "gatekeepers")
                }
            else
                yield (0,
                    d.call)(l.default.log.info, "No Gatekeeper values in Local Storage; using default/initial values instead.")
        }
        function* h(e, t, n) {
            try {
                yield (0,
                    d.call)(E, e, t)
            } catch (t) {
                yield (0,
                    d.call)(l.default.log.debug, `Failed to refresh gatekeepers for user ${e}: ${t}`),
                    s.AccessDeniedError.isAccessDeniedError(t) && n && (yield (0,
                        d.call)(l.default.log.debug, `Caught access denied error while loading GKs; logging out user ${e}`),
                        yield (0,
                            d.call)(l.default.metrics.trackStrictEventImmediate, (0,
                                a.ClientAuthenticationEvent)({
                                    action: "logOut",
                                    channel: "GK access denied"
                                })),
                        yield (0,
                            d.put)(u.AuthenticationActions.startLogout()))
            }
        }
        function* E(e, t) {
            yield (0,
                d.call)(l.default.log.debug, `Loading gatekeepers for user ${e}`);
            const n = yield (0,
                d.select)(i.allGatekeeperNames)
                , r = yield (0,
                    d.call)(l.default.platform.fetchGatekeepers, e, t, n);
            yield (0,
                d.call)([localStorage, localStorage.setItem], "gatekeepers", JSON.stringify(r)),
                yield (0,
                    d.call)(S, r),
                yield (0,
                    d.put)(o.GatekeeperActions.loadGatekeepers(r)),
                yield (0,
                    d.put)(o.GatekeeperActions.gatekeepersRefreshed())
        }
        function* _() {
            yield (0,
                d.call)([localStorage, localStorage.removeItem], "gatekeepers"),
                yield (0,
                    d.put)(o.GatekeeperActions.resetGatekeepers());
            const e = yield (0,
                d.getContext)("refreshTask");
            e.current && (yield (0,
                d.cancel)(e.current))
        }
        function* v() {
            const e = yield (0,
                d.getContext)("refreshTask");
            e.current || (e.current = yield (0,
                d.fork)((function* () {
                    for (; ;)
                        try {
                            yield (0,
                                d.delay)((0,
                                    c.default)({
                                        hours: 2
                                    }));
                            const e = yield (0,
                                d.select)(u.requireAuthenticationData);
                            yield (0,
                                d.call)(h, e.userID, e.accessToken)
                        } catch (e) {
                            l.default.log.warn("Could not refresh gatekeepers", e.message)
                        }
                }
                )))
        }
        function* S(e) {
            const t = yield (0,
                d.call)(l.default.settings.getGlobalSettings);
            t.enableWorkplaceLogin = t.enableWorkplaceLogin || e.archon_enable_workplace_login,
                t.enableMultiProfile = t.enableMultiProfile || e.archon_enable_multi_profiles,
                t.enableDebugMenus = t.enableDebugMenus || e.archon_enable_debug_menus,
                t.enablePerformanceInformation = t.enablePerformanceInformation || e.archon_enable_performance_information,
                t.enableInternalFeedback = t.enableInternalFeedback || e.archon_enable_internal_feedback,
                t.enableVersionBadge = e.archon_enable_version_pill,
                t.enableSyncTrace = e.archon_enable_ls_sync_trace,
                t.enableSendTrace = e.archon_enable_ls_send_trace,
                e.archon_use_gcd_like && (t.dispatchQueue = "gcd-like"),
                t.enableOpenAtLogin = e.archon_enable_open_at_login;
            const n = yield (0,
                d.call)(l.default.platform.isWindowsPlatform);
            t.enableSystemTray = n ? (t.enableSystemTray || e.is_employee) && e.archon_windows_minimize_system_tray : e.archon_mac_enable_menu_bar,
                t.enableUpdateBadge = e.archon_enable_update_badge,
                t.enableLocalServer = e.archon_enable_localserver,
                yield (0,
                    d.call)(l.default.settings.setGlobalSettings, t)
        }
        t.STORAGE_KEY = "gatekeepers"
    },
    269: function (e, t, n) {
        "use strict";
        let r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.GatekeeperActions = t.GatekeeperActionTypes = void 0,
            t.GatekeeperActionTypes = r,
            function (e) {
                e.restoreGatekeepers = "gatekeeper/restore",
                    e.loadGatekeepers = "gatekeeper/load",
                    e.resetGatekeepers = "gatekeeper/reset",
                    e.gatekeepersRefreshed = "gatekeeper/refreshed"
            }(r || (t.GatekeeperActionTypes = r = {}));
        const o = {
            restoreGatekeepers: e => ({
                type: r.restoreGatekeepers,
                payload: {
                    gatekeepers: e
                }
            }),
            loadGatekeepers: e => ({
                type: r.loadGatekeepers,
                payload: {
                    gatekeepers: e
                }
            }),
            resetGatekeepers: () => ({
                type: r.resetGatekeepers
            }),
            gatekeepersRefreshed: () => ({
                type: r.gatekeepersRefreshed
            })
        };
        t.GatekeeperActions = o
    },
    273: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                const { height: t, useSmallDot: n } = e;
                return (i.default.createElement(u, {
                    height: t
                }, i.default.createElement(d, {
                    delay: 200,
                    useSmallDot: n
                }), i.default.createElement(d, {
                    delay: 300,
                    useSmallDot: n
                }), i.default.createElement(d, {
                    delay: 400,
                    useSmallDot: n
                })))
            }
            ;
        var r = n(37)
            , o = s(n(1))
            , i = s(n(0))
            , a = s(n(2));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0,
            r.keyframes)({
                "0%": {
                    transform: "translateY(0px)"
                },
                "28%": {
                    transform: "translateY(-5px)"
                },
                "44%": {
                    transform: "translateY(0px)"
                }
            })
            , l = (0,
                r.keyframes)({
                    "0%": {
                        transform: "translateY(0px)"
                    },
                    "28%": {
                        transform: "translateY(-3px)"
                    },
                    "44%": {
                        transform: "translateY(0px)"
                    }
                })
            , u = (0,
                o.default)(a.default)(e => ({
                    ...e.css || {},
                    alignItems: "center",
                    flexDirection: "row",
                    display: "flex",
                    height: e.height ? e.height : "16px"
                }))
            , d = (0,
                o.default)(a.default)(e => ({
                    borderRadius: "3px",
                    display: "inline-block",
                    backgroundColor: e.theme.select({
                        light: e.theme.colors.blueGrey75,
                        dark: e.theme.colors.base70
                    }),
                    height: e.useSmallDot ? "5px" : "6px",
                    marginRight: "2px",
                    marginLeft: "2px",
                    width: e.useSmallDot ? "5px" : "6px",
                    animation: `${e.useSmallDot ? l : c} 1.4s linear infinite`,
                    animationDelay: e.delay + "ms"
                }))
    },
    279: function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    28: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = n(822);
        Object.keys(r).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return r[e]
                }
            })
        }
        ));
        var o = n(42);
        Object.keys(o).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return o[e]
                }
            })
        }
        ));
        var i = n(395);
        Object.keys(i).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return i[e]
                }
            })
        }
        ));
        var a = n(144);
        Object.keys(a).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return a[e]
                }
            })
        }
        ));
        var s = n(396);
        Object.keys(s).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return s[e]
                }
            })
        }
        ));
        var c = n(397);
        Object.keys(c).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return c[e]
                }
            })
        }
        ));
        var l = n(398);
        Object.keys(l).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return l[e]
                }
            })
        }
        ));
        var u = n(399);
        Object.keys(u).forEach((function (e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function () {
                    return u[e]
                }
            })
        }
        ))
    },
    280: function (e, t, n) {
        var r = n(48)
            , o = n(93);
        e.exports = function (e, t) {
            try {
                o(r, e, t)
            } catch (n) {
                r[e] = t
            }
            return t
        }
    },
    281: function (e, t, n) {
        var r = n(422)
            , o = n(283)
            , i = r("keys");
        e.exports = function (e) {
            return i[e] || (i[e] = o(e))
        }
    },
    282: function (e, t) {
        e.exports = !1
    },
    283: function (e, t) {
        var n = 0
            , r = Math.random();
        e.exports = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
        }
    },
    284: function (e, t, n) {
        var r = n(859)
            , o = n(48)
            , i = function (e) {
                return "function" == typeof e ? e : void 0
            };
        e.exports = function (e, t) {
            return arguments.length < 2 ? i(r[e]) || i(o[e]) : r[e] && r[e][t] || o[e] && o[e][t]
        }
    },
    285: function (e, t) {
        e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    },
    286: function (e, t, n) {
        var r = n(426)
            , o = n(207)
            , i = n(177)
            , a = n(152)
            , s = n(863)
            , c = [].push
            , l = function (e) {
                var t = 1 == e
                    , n = 2 == e
                    , l = 3 == e
                    , u = 4 == e
                    , d = 6 == e
                    , f = 5 == e || d;
                return function (p, h, E, _) {
                    for (var v, S, y = i(p), g = o(y), m = r(h, E, 3), A = a(g.length), b = 0, O = _ || s, T = t ? O(p, A) : n ? O(p, 0) : void 0; A > b; b++)
                        if ((f || b in g) && (S = m(v = g[b], b, y),
                            e))
                            if (t)
                                T[b] = S;
                            else if (S)
                                switch (e) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return v;
                                    case 6:
                                        return b;
                                    case 2:
                                        c.call(T, v)
                                }
                            else if (u)
                                return !1;
                    return d ? -1 : l || u ? u : T
                }
            };
        e.exports = {
            forEach: l(0),
            map: l(1),
            filter: l(2),
            some: l(3),
            every: l(4),
            find: l(5),
            findIndex: l(6)
        }
    },
    287: function (e, t, n) {
        var r = n(110)
            , o = n(55)
            , i = n(68)
            , a = Object.defineProperty
            , s = function (e) {
                throw e
            };
        e.exports = function (e, t) {
            t || (t = {});
            var n = [][e]
                , c = !!i(t, "ACCESSORS") && t.ACCESSORS
                , l = i(t, 0) ? t[0] : s
                , u = i(t, 1) ? t[1] : void 0;
            return !!n && !o((function () {
                if (c && !r)
                    return !0;
                var e = {
                    length: -1
                }
                    , t = function (t) {
                        c ? a(e, t, {
                            enumerable: !0,
                            get: s
                        }) : e[t] = 1
                    };
                t(1),
                    t(2147483646),
                    t(4294967294),
                    n.call(e, l, u)
            }
            ))
        }
    },
    288: function (e, t, n) {
        "use strict";
        var r = n(206)
            , o = n(869)
            , i = n(178)
            , a = n(176)
            , s = n(434)
            , c = a.set
            , l = a.getterFor("Array Iterator");
        e.exports = s(Array, "Array", (function (e, t) {
            c(this, {
                type: "Array Iterator",
                target: r(e),
                index: 0,
                kind: t
            })
        }
        ), (function () {
            var e = l(this)
                , t = e.target
                , n = e.kind
                , r = e.index++;
            return !t || r >= t.length ? (e.target = void 0,
            {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: r,
                done: !1
            } : "values" == n ? {
                value: t[r],
                done: !1
            } : {
                value: [r, t[r]],
                done: !1
            }
        }
        ), "values"),
            i.Arguments = i.Array,
            o("keys"),
            o("values"),
            o("entries")
    },
    289: function (e, t, n) {
        var r = n(128).f
            , o = n(68)
            , i = n(62)("toStringTag");
        e.exports = function (e, t, n) {
            e && !o(e = n ? e : e.prototype, i) && r(e, i, {
                configurable: !0,
                value: t
            })
        }
    },
    290: function (e, t, n) {
        var r = {};
        r[n(62)("toStringTag")] = "z",
            e.exports = "[object z]" === String(r)
    },
    291: function (e, t, n) {
        var r = n(209)
            , o = n(79)
            , i = n(68)
            , a = n(128).f
            , s = n(283)
            , c = n(879)
            , l = s("meta")
            , u = 0
            , d = Object.isExtensible || function () {
                return !0
            }
            , f = function (e) {
                a(e, l, {
                    value: {
                        objectID: "O" + ++u,
                        weakData: {}
                    }
                })
            }
            , p = e.exports = {
                REQUIRED: !1,
                fastKey: function (e, t) {
                    if (!o(e))
                        return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!i(e, l)) {
                        if (!d(e))
                            return "F";
                        if (!t)
                            return "E";
                        f(e)
                    }
                    return e[l].objectID
                },
                getWeakData: function (e, t) {
                    if (!i(e, l)) {
                        if (!d(e))
                            return !0;
                        if (!t)
                            return !1;
                        f(e)
                    }
                    return e[l].weakData
                },
                onFreeze: function (e) {
                    return c && p.REQUIRED && d(e) && !i(e, l) && f(e),
                        e
                }
            };
        r[l] = !0
    },
    292: function (e, t, n) {
        "use strict";
        var r = n(109)
            , o = n(293);
        r({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== o
        }, {
            exec: o
        })
    },
    293: function (e, t, n) {
        "use strict";
        var r, o, i = n(888), a = n(889), s = RegExp.prototype.exec, c = String.prototype.replace, l = s, u = (r = /a/,
            o = /b*/g,
            s.call(r, "a"),
            s.call(o, "a"),
            0 !== r.lastIndex || 0 !== o.lastIndex), d = a.UNSUPPORTED_Y || a.BROKEN_CARET, f = void 0 !== /()??/.exec("")[1];
        (u || f || d) && (l = function (e) {
            var t, n, r, o, a = this, l = d && a.sticky, p = i.call(a), h = a.source, E = 0, _ = e;
            return l && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"),
                _ = String(e).slice(a.lastIndex),
                a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (h = "(?: " + h + ")",
                    _ = " " + _,
                    E++),
                n = new RegExp("^(?:" + h + ")", p)),
                f && (n = new RegExp("^" + h + "$(?!\\s)", p)),
                u && (t = a.lastIndex),
                r = s.call(l ? n : a, _),
                l ? r ? (r.input = r.input.slice(E),
                    r[0] = r[0].slice(E),
                    r.index = a.lastIndex,
                    a.lastIndex += r[0].length) : a.lastIndex = 0 : u && r && (a.lastIndex = a.global ? r.index + r[0].length : t),
                f && r && r.length > 1 && c.call(r[0], n, (function () {
                    for (o = 1; o < arguments.length - 2; o++)
                        void 0 === arguments[o] && (r[o] = void 0)
                }
                )),
                r
        }
        ),
            e.exports = l
    },
    3: function (e, t, n) {
        e.exports = n(818)()
    },
    32: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.allGatekeeperNames = function (e) {
                return Object.keys(e.gatekeepers)
            }
            ,
            t.isGatekeeperEnabled = i,
            t.getPassingGatekeepers = function (e) {
                return Object.keys(e.gatekeepers).filter(t => i(e, t))
            }
            ,
            t.getAllGatekeepers = function (e) {
                return e.gatekeepers
            }
            ;
        var r, o = (r = n(355)) && r.__esModule ? r : {
            default: r
        };
        function i(e, t) {
            var n, r;
            return null !== (n = null === (r = o.default.get("gatekeeper_overrides")) || void 0 === r ? void 0 : r[t]) && void 0 !== n ? n : e.gatekeepers[t]
        }
    },
    335: function (e, t, n) {
        "use strict";
        var r = n(233)
            , o = {
                childContextTypes: !0,
                contextType: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDefaultProps: !0,
                getDerivedStateFromError: !0,
                getDerivedStateFromProps: !0,
                mixins: !0,
                propTypes: !0,
                type: !0
            }
            , i = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            }
            , a = {
                $$typeof: !0,
                compare: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0,
                type: !0
            }
            , s = {};
        function c(e) {
            return r.isMemo(e) ? a : s[e.$$typeof] || o
        }
        s[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        };
        var l = Object.defineProperty
            , u = Object.getOwnPropertyNames
            , d = Object.getOwnPropertySymbols
            , f = Object.getOwnPropertyDescriptor
            , p = Object.getPrototypeOf
            , h = Object.prototype;
        e.exports = function e(t, n, r) {
            if ("string" != typeof n) {
                if (h) {
                    var o = p(n);
                    o && o !== h && e(t, o, r)
                }
                var a = u(n);
                d && (a = a.concat(d(n)));
                for (var s = c(t), E = c(n), _ = 0; _ < a.length; ++_) {
                    var v = a[_];
                    if (!(i[v] || r && r[v] || E && E[v] || s && s[v])) {
                        var S = f(n, v);
                        try {
                            l(t, v, S)
                        } catch (e) { }
                    }
                }
            }
            return t
        }
    },
    336: function (e, t, n) {
        "use strict";
        (function (e, r) {
            var o, i = n(586);
            o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
            var a = Object(i.a)(o);
            t.a = a
        }
        ).call(this, n(54), n(821)(e))
    },
    34: function (e, t, n) {
        "use strict";
        function r() {
            return (r = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        n.d(t, "a", (function () {
            return r
        }
        ))
    },
    355: function (e, t, n) {
        "use strict";
        function r(e) {
            return `__DEV_SETTINGS__${e}`
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t._getLocalStorageKey = r,
            t.default = void 0;
        var o = {
            set: function (e, t) {
                null == t ? window.localStorage.removeItem(r(e)) : window.localStorage.setItem(r(e), JSON.stringify(t))
            },
            get: function (e) {
                const t = window.localStorage.getItem(r(e));
                if (null !== t)
                    try {
                        return JSON.parse(t)
                    } catch (e) {
                        return
                    }
            }
        };
        t.default = o
    },
    357: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ onRestart: e, showBugButton: t = !1 }) {
                const { globalSettings: n } = (0,
                    l.default)();
                return (0,
                    u.useEffect)(() => {
                        c.default.metrics.trackStrictEvent((0,
                            i.UserInteractionEvent)({
                                event: "impression",
                                target: "errorHero",
                                surface: "messenger"
                            })),
                            c.default.performance.markEvent(a.PerformanceEvents.ERROR_HERO_RENDERED)
                    }
                        , []),
                    u.default.createElement(o.default, {
                        title: s.default._("Something went wrong", null, {
                            hk: "2fok4q"
                        }),
                        subtitle1: s.default._("Our engineers know about the problem and are working to fix it!", null, {
                            hk: "2DGvLH"
                        }),
                        subtitle2: s.default._("You can restart the application to try again", null, {
                            hk: "46ZFjZ"
                        }),
                        icon: d.default,
                        cta: u.default.createElement(r.default, {
                            onRestart: e,
                            showBugButton: t && n.enableInternalFeedback
                        })
                    })
            }
            ;
        var r = p(n(834))
            , o = p(n(255))
            , i = n(24)
            , a = n(8)
            , s = p(n(5))
            , c = p(n(9))
            , l = p(n(118))
            , u = function (e) {
                if (e && e.__esModule)
                    return e;
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return {
                        default: e
                    };
                var t = f();
                if (t && t.has(e))
                    return t.get(e);
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(0))
            , d = p(n(119));
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
    379: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var r = n(164)
            , o = s(n(1))
            , i = s(n(2))
            , a = s(n(141));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var c = (0,
            o.default)(i.default)(e => ({
                position: "fixed",
                top: 3,
                left: 0,
                right: 0,
                height: (0,
                    r.getTitleBarHeight)(e.theme),
                flexDirection: "row",
                justifyContent: e.theme.select({
                    mac: "flex-end",
                    windows: "space-between"
                }),
                color: e.theme.semanticColors.textPrimary,
                pointerEvents: "none",
                WebkitAppRegion: "drag",
                fontSize: 10,
                zIndex: a.default.TitleBar
            }));
        t.default = c
    },
    384: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.GraphApiError = void 0;
        class r extends Error {
            static isGraphApiError(e) {
                return "GraphApiError" === e.name
            }
            constructor(e, t, n) {
                if (super(""),
                    this.name = "GraphApiError",
                    this.message = `Graph API request to '${e}' failed with status code '${t}'`,
                    n)
                    try {
                        const e = JSON.stringify(n);
                        this.message += ` and error: ${e}`
                    } catch (e) {
                        this.message += "; could not serialize error object."
                    }
            }
        }
        t.GraphApiError = r
    },
    391: function (e, t, n) {
        "use strict";
        function r(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
        }
        function o(e) {
            return !!e && !!e[Z]
        }
        function i(e) {
            return !!e && (function (e) {
                if (!e || "object" != typeof e)
                    return !1;
                var t = Object.getPrototypeOf(e);
                return !t || t === Object.prototype
            }(e) || Array.isArray(e) || !!e[Q] || !!e.constructor[Q] || p(e) || h(e))
        }
        function a(e) {
            return o(e) || r(23, e),
                e[Z].t
        }
        function s(e, t, n) {
            void 0 === n && (n = !1),
                0 === c(e) ? (n ? Object.keys : te)(e).forEach((function (r) {
                    n && "symbol" == typeof r || t(r, e[r], e)
                }
                )) : e.forEach((function (n, r) {
                    return t(r, n, e)
                }
                ))
        }
        function c(e) {
            var t = e[Z];
            return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : p(e) ? 2 : h(e) ? 3 : 0
        }
        function l(e, t) {
            return 2 === c(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
        }
        function u(e, t) {
            return 2 === c(e) ? e.get(t) : e[t]
        }
        function d(e, t, n) {
            var r = c(e);
            2 === r ? e.set(t, n) : 3 === r ? (e.delete(t),
                e.add(n)) : e[t] = n
        }
        function f(e, t) {
            return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
        }
        function p(e) {
            return q && e instanceof Map
        }
        function h(e) {
            return X && e instanceof Set
        }
        function E(e) {
            return e.o || e.t
        }
        function _(e) {
            if (Array.isArray(e))
                return Array.prototype.slice.call(e);
            var t = ne(e);
            delete t[Z];
            for (var n = te(t), r = 0; r < n.length; r++) {
                var o = n[r]
                    , i = t[o];
                !1 === i.writable && (i.writable = !0,
                    i.configurable = !0),
                    (i.get || i.set) && (t[o] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: i.enumerable,
                        value: e[o]
                    })
            }
            return Object.create(Object.getPrototypeOf(e), t)
        }
        function v(e, t) {
            y(e) || o(e) || !i(e) || (c(e) > 1 && (e.set = e.add = e.clear = e.delete = S),
                Object.freeze(e),
                t && s(e, (function (e, t) {
                    return v(t, !0)
                }
                ), !0))
        }
        function S() {
            r(2)
        }
        function y(e) {
            return null == e || "object" != typeof e || Object.isFrozen(e)
        }
        function g(e) {
            var t = re[e];
            return t || r(19, e),
                t
        }
        function m(e, t) {
            re[e] = t
        }
        function A() {
            return V
        }
        function b(e, t) {
            t && (g("Patches"),
                e.u = [],
                e.s = [],
                e.v = t)
        }
        function O(e) {
            T(e),
                e.p.forEach(C),
                e.p = null
        }
        function T(e) {
            e === V && (V = e.l)
        }
        function R(e) {
            return V = {
                p: [],
                l: V,
                h: e,
                m: !0,
                _: 0
            }
        }
        function C(e) {
            var t = e[Z];
            0 === t.i || 1 === t.i ? t.j() : t.g = !0
        }
        function I(e, t) {
            t._ = t.p.length;
            var n = t.p[0]
                , o = void 0 !== e && e !== n;
            return t.h.O || g("ES5").S(t, e, o),
                o ? (n[Z].P && (O(t),
                    r(4)),
                    i(e) && (e = N(t, e),
                        t.l || D(t, e)),
                    t.u && g("Patches").M(n[Z], e, t.u, t.s)) : e = N(t, n, []),
                O(t),
                t.u && t.v(t.u, t.s),
                e !== $ ? e : void 0
        }
        function N(e, t, n) {
            if (y(t))
                return t;
            var r = t[Z];
            if (!r)
                return s(t, (function (o, i) {
                    return M(e, r, t, o, i, n)
                }
                ), !0),
                    t;
            if (r.A !== e)
                return t;
            if (!r.P)
                return D(e, r.t, !0),
                    r.t;
            if (!r.I) {
                r.I = !0,
                    r.A._--;
                var o = 4 === r.i || 5 === r.i ? r.o = _(r.k) : r.o;
                s(3 === r.i ? new Set(o) : o, (function (t, i) {
                    return M(e, r, o, t, i, n)
                }
                )),
                    D(e, o, !1),
                    n && e.u && g("Patches").R(r, n, e.u, e.s)
            }
            return r.o
        }
        function M(e, t, n, r, a, s) {
            if (o(a)) {
                var c = N(e, a, s && t && 3 !== t.i && !l(t.D, r) ? s.concat(r) : void 0);
                if (d(n, r, c),
                    !o(c))
                    return;
                e.m = !1
            }
            if (i(a) && !y(a)) {
                if (!e.h.N && e._ < 1)
                    return;
                N(e, a),
                    t && t.A.l || D(e, a)
            }
        }
        function D(e, t, n) {
            void 0 === n && (n = !1),
                e.h.N && e.m && v(t, n)
        }
        function x(e, t) {
            var n = e[Z];
            return (n ? E(n) : e)[t]
        }
        function w(e, t) {
            if (t in e)
                for (var n = Object.getPrototypeOf(e); n;) {
                    var r = Object.getOwnPropertyDescriptor(n, t);
                    if (r)
                        return r;
                    n = Object.getPrototypeOf(n)
                }
        }
        function P(e) {
            e.P || (e.P = !0,
                e.l && P(e.l))
        }
        function L(e) {
            e.o || (e.o = _(e.t))
        }
        function k(e, t, n) {
            var r = p(t) ? g("MapSet").T(t, n) : h(t) ? g("MapSet").F(t, n) : e.O ? function (e, t) {
                var n = Array.isArray(e)
                    , r = {
                        i: n ? 1 : 0,
                        A: t ? t.A : A(),
                        P: !1,
                        I: !1,
                        D: {},
                        l: t,
                        t: e,
                        k: null,
                        o: null,
                        j: null,
                        C: !1
                    }
                    , o = r
                    , i = oe;
                n && (o = [r],
                    i = ie);
                var a = Proxy.revocable(o, i)
                    , s = a.revoke
                    , c = a.proxy;
                return r.k = c,
                    r.j = s,
                    c
            }(t, n) : g("ES5").J(t, n);
            return (n ? n.A : A()).p.push(r),
                r
        }
        function j(e) {
            return o(e) || r(22, e),
                function e(t) {
                    if (!i(t))
                        return t;
                    var n, r = t[Z], o = c(t);
                    if (r) {
                        if (!r.P && (r.i < 4 || !g("ES5").K(r)))
                            return r.t;
                        r.I = !0,
                            n = F(t, o),
                            r.I = !1
                    } else
                        n = F(t, o);
                    return s(n, (function (t, o) {
                        r && u(r.t, t) === o || d(n, t, e(o))
                    }
                    )),
                        3 === o ? new Set(n) : n
                }(e)
        }
        function F(e, t) {
            switch (t) {
                case 2:
                    return new Map(e);
                case 3:
                    return Array.from(e)
            }
            return _(e)
        }
        function U() {
            function e(e, t) {
                var n = i[e];
                return n ? n.enumerable = t : i[e] = n = {
                    configurable: !0,
                    enumerable: t,
                    get: function () {
                        var t = this[Z];
                        return oe.get(t, e)
                    },
                    set: function (t) {
                        var n = this[Z];
                        oe.set(n, e, t)
                    }
                },
                    n
            }
            function t(e) {
                for (var t = e.length - 1; t >= 0; t--) {
                    var o = e[t][Z];
                    if (!o.P)
                        switch (o.i) {
                            case 5:
                                r(o) && P(o);
                                break;
                            case 4:
                                n(o) && P(o)
                        }
                }
            }
            function n(e) {
                for (var t = e.t, n = e.k, r = te(n), o = r.length - 1; o >= 0; o--) {
                    var i = r[o];
                    if (i !== Z) {
                        var a = t[i];
                        if (void 0 === a && !l(t, i))
                            return !0;
                        var s = n[i]
                            , c = s && s[Z];
                        if (c ? c.t !== a : !f(s, a))
                            return !0
                    }
                }
                var u = !!t[Z];
                return r.length !== te(t).length + (u ? 0 : 1)
            }
            function r(e) {
                var t = e.k;
                if (t.length !== e.t.length)
                    return !0;
                var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                return !(!n || n.get)
            }
            var i = {};
            m("ES5", {
                J: function (t, n) {
                    var r = Array.isArray(t)
                        , o = function (t, n) {
                            if (t) {
                                for (var r = Array(n.length), o = 0; o < n.length; o++)
                                    Object.defineProperty(r, "" + o, e(o, !0));
                                return r
                            }
                            var i = ne(n);
                            delete i[Z];
                            for (var a = te(i), s = 0; s < a.length; s++) {
                                var c = a[s];
                                i[c] = e(c, t || !!i[c].enumerable)
                            }
                            return Object.create(Object.getPrototypeOf(n), i)
                        }(r, t)
                        , i = {
                            i: r ? 5 : 4,
                            A: n ? n.A : A(),
                            P: !1,
                            I: !1,
                            D: {},
                            l: n,
                            t: t,
                            k: o,
                            o: null,
                            g: !1,
                            C: !1
                        };
                    return Object.defineProperty(o, Z, {
                        value: i,
                        writable: !0
                    }),
                        o
                },
                S: function (e, n, i) {
                    i ? o(n) && n[Z].A === e && t(e.p) : (e.u && function e(t) {
                        if (t && "object" == typeof t) {
                            var n = t[Z];
                            if (n) {
                                var o = n.t
                                    , i = n.k
                                    , a = n.D
                                    , c = n.i;
                                if (4 === c)
                                    s(i, (function (t) {
                                        t !== Z && (void 0 !== o[t] || l(o, t) ? a[t] || e(i[t]) : (a[t] = !0,
                                            P(n)))
                                    }
                                    )),
                                        s(o, (function (e) {
                                            void 0 !== i[e] || l(i, e) || (a[e] = !1,
                                                P(n))
                                        }
                                        ));
                                else if (5 === c) {
                                    if (r(n) && (P(n),
                                        a.length = !0),
                                        i.length < o.length)
                                        for (var u = i.length; u < o.length; u++)
                                            a[u] = !1;
                                    else
                                        for (var d = o.length; d < i.length; d++)
                                            a[d] = !0;
                                    for (var f = Math.min(i.length, o.length), p = 0; p < f; p++)
                                        void 0 === a[p] && e(i[p])
                                }
                            }
                        }
                    }(e.p[0]),
                        t(e.p))
                },
                K: function (e) {
                    return 4 === e.i ? n(e) : r(e)
                }
            })
        }
        function W() {
            function e(t) {
                if (!i(t))
                    return t;
                if (Array.isArray(t))
                    return t.map(e);
                if (p(t))
                    return new Map(Array.from(t.entries()).map((function (t) {
                        return [t[0], e(t[1])]
                    }
                    )));
                if (h(t))
                    return new Set(Array.from(t).map(e));
                var n = Object.create(Object.getPrototypeOf(t));
                for (var r in t)
                    n[r] = e(t[r]);
                return n
            }
            function t(t) {
                return o(t) ? e(t) : t
            }
            var n = "add";
            m("Patches", {
                $: function (t, o) {
                    return o.forEach((function (o) {
                        for (var i = o.path, a = o.op, s = t, l = 0; l < i.length - 1; l++)
                            "object" != typeof (s = u(s, i[l])) && r(15, i.join("/"));
                        var d = c(s)
                            , f = e(o.value)
                            , p = i[i.length - 1];
                        switch (a) {
                            case "replace":
                                switch (d) {
                                    case 2:
                                        return s.set(p, f);
                                    case 3:
                                        r(16);
                                    default:
                                        return s[p] = f
                                }
                            case n:
                                switch (d) {
                                    case 1:
                                        return s.splice(p, 0, f);
                                    case 2:
                                        return s.set(p, f);
                                    case 3:
                                        return s.add(f);
                                    default:
                                        return s[p] = f
                                }
                            case "remove":
                                switch (d) {
                                    case 1:
                                        return s.splice(p, 1);
                                    case 2:
                                        return s.delete(p);
                                    case 3:
                                        return s.delete(o.value);
                                    default:
                                        return delete s[p]
                                }
                            default:
                                r(17, a)
                        }
                    }
                    )),
                        t
                },
                R: function (e, r, o, i) {
                    switch (e.i) {
                        case 0:
                        case 4:
                        case 2:
                            return function (e, r, o, i) {
                                var a = e.t
                                    , c = e.o;
                                s(e.D, (function (e, s) {
                                    var d = u(a, e)
                                        , f = u(c, e)
                                        , p = s ? l(a, e) ? "replace" : n : "remove";
                                    if (d !== f || "replace" !== p) {
                                        var h = r.concat(e);
                                        o.push("remove" === p ? {
                                            op: p,
                                            path: h
                                        } : {
                                            op: p,
                                            path: h,
                                            value: f
                                        }),
                                            i.push(p === n ? {
                                                op: "remove",
                                                path: h
                                            } : "remove" === p ? {
                                                op: n,
                                                path: h,
                                                value: t(d)
                                            } : {
                                                op: "replace",
                                                path: h,
                                                value: t(d)
                                            })
                                    }
                                }
                                ))
                            }(e, r, o, i);
                        case 5:
                        case 1:
                            return function (e, r, o, i) {
                                var a = e.t
                                    , s = e.D
                                    , c = e.o;
                                if (c.length < a.length) {
                                    var l = [c, a];
                                    a = l[0],
                                        c = l[1];
                                    var u = [i, o];
                                    o = u[0],
                                        i = u[1]
                                }
                                for (var d = 0; d < a.length; d++)
                                    if (s[d] && c[d] !== a[d]) {
                                        var f = r.concat([d]);
                                        o.push({
                                            op: "replace",
                                            path: f,
                                            value: t(c[d])
                                        }),
                                            i.push({
                                                op: "replace",
                                                path: f,
                                                value: t(a[d])
                                            })
                                    }
                                for (var p = a.length; p < c.length; p++) {
                                    var h = r.concat([p]);
                                    o.push({
                                        op: n,
                                        path: h,
                                        value: t(c[p])
                                    })
                                }
                                a.length < c.length && i.push({
                                    op: "replace",
                                    path: r.concat(["length"]),
                                    value: a.length
                                })
                            }(e, r, o, i);
                        case 3:
                            return function (e, t, r, o) {
                                var i = e.t
                                    , a = e.o
                                    , s = 0;
                                i.forEach((function (e) {
                                    if (!a.has(e)) {
                                        var i = t.concat([s]);
                                        r.push({
                                            op: "remove",
                                            path: i,
                                            value: e
                                        }),
                                            o.unshift({
                                                op: n,
                                                path: i,
                                                value: e
                                            })
                                    }
                                    s++
                                }
                                )),
                                    s = 0,
                                    a.forEach((function (e) {
                                        if (!i.has(e)) {
                                            var a = t.concat([s]);
                                            r.push({
                                                op: n,
                                                path: a,
                                                value: e
                                            }),
                                                o.unshift({
                                                    op: "remove",
                                                    path: a,
                                                    value: e
                                                })
                                        }
                                        s++
                                    }
                                    ))
                            }(e, r, o, i)
                    }
                },
                M: function (e, t, n, r) {
                    n.push({
                        op: "replace",
                        path: [],
                        value: t
                    }),
                        r.push({
                            op: "replace",
                            path: [],
                            value: e.t
                        })
                }
            })
        }
        function G() {
            function e(e, t) {
                function n() {
                    this.constructor = e
                }
                a(e, t),
                    e.prototype = (n.prototype = t.prototype,
                        new n)
            }
            function t(e) {
                e.o || (e.D = new Map,
                    e.o = new Map(e.t))
            }
            function n(e) {
                e.o || (e.o = new Set,
                    e.t.forEach((function (t) {
                        if (i(t)) {
                            var n = k(e.A.h, t, e);
                            e.p.set(t, n),
                                e.o.add(n)
                        } else
                            e.o.add(t)
                    }
                    )))
            }
            function o(e) {
                e.g && r(3, JSON.stringify(E(e)))
            }
            var a = function (e, t) {
                return (a = Object.setPrototypeOf || {
                    __proto__: []
                } instanceof Array && function (e, t) {
                    e.__proto__ = t
                }
                    || function (e, t) {
                        for (var n in t)
                            t.hasOwnProperty(n) && (e[n] = t[n])
                    }
                )(e, t)
            }
                , c = function () {
                    function n(e, t) {
                        return this[Z] = {
                            i: 2,
                            l: t,
                            A: t ? t.A : A(),
                            P: !1,
                            I: !1,
                            o: void 0,
                            D: void 0,
                            t: e,
                            k: this,
                            C: !1,
                            g: !1
                        },
                            this
                    }
                    e(n, Map);
                    var r = n.prototype;
                    return Object.defineProperty(r, "size", {
                        get: function () {
                            return E(this[Z]).size
                        }
                    }),
                        r.has = function (e) {
                            return E(this[Z]).has(e)
                        }
                        ,
                        r.set = function (e, n) {
                            var r = this[Z];
                            return o(r),
                                E(r).has(e) && E(r).get(e) === n || (t(r),
                                    P(r),
                                    r.D.set(e, !0),
                                    r.o.set(e, n),
                                    r.D.set(e, !0)),
                                this
                        }
                        ,
                        r.delete = function (e) {
                            if (!this.has(e))
                                return !1;
                            var n = this[Z];
                            return o(n),
                                t(n),
                                P(n),
                                n.D.set(e, !1),
                                n.o.delete(e),
                                !0
                        }
                        ,
                        r.clear = function () {
                            var e = this[Z];
                            o(e),
                                E(e).size && (t(e),
                                    P(e),
                                    e.D = new Map,
                                    s(e.t, (function (t) {
                                        e.D.set(t, !1)
                                    }
                                    )),
                                    e.o.clear())
                        }
                        ,
                        r.forEach = function (e, t) {
                            var n = this;
                            E(this[Z]).forEach((function (r, o) {
                                e.call(t, n.get(o), o, n)
                            }
                            ))
                        }
                        ,
                        r.get = function (e) {
                            var n = this[Z];
                            o(n);
                            var r = E(n).get(e);
                            if (n.I || !i(r))
                                return r;
                            if (r !== n.t.get(e))
                                return r;
                            var a = k(n.A.h, r, n);
                            return t(n),
                                n.o.set(e, a),
                                a
                        }
                        ,
                        r.keys = function () {
                            return E(this[Z]).keys()
                        }
                        ,
                        r.values = function () {
                            var e, t = this, n = this.keys();
                            return (e = {})[ee] = function () {
                                return t.values()
                            }
                                ,
                                e.next = function () {
                                    var e = n.next();
                                    return e.done ? e : {
                                        done: !1,
                                        value: t.get(e.value)
                                    }
                                }
                                ,
                                e
                        }
                        ,
                        r.entries = function () {
                            var e, t = this, n = this.keys();
                            return (e = {})[ee] = function () {
                                return t.entries()
                            }
                                ,
                                e.next = function () {
                                    var e = n.next();
                                    if (e.done)
                                        return e;
                                    var r = t.get(e.value);
                                    return {
                                        done: !1,
                                        value: [e.value, r]
                                    }
                                }
                                ,
                                e
                        }
                        ,
                        r[ee] = function () {
                            return this.entries()
                        }
                        ,
                        n
                }()
                , l = function () {
                    function t(e, t) {
                        return this[Z] = {
                            i: 3,
                            l: t,
                            A: t ? t.A : A(),
                            P: !1,
                            I: !1,
                            o: void 0,
                            t: e,
                            k: this,
                            p: new Map,
                            g: !1,
                            C: !1
                        },
                            this
                    }
                    e(t, Set);
                    var r = t.prototype;
                    return Object.defineProperty(r, "size", {
                        get: function () {
                            return E(this[Z]).size
                        }
                    }),
                        r.has = function (e) {
                            var t = this[Z];
                            return o(t),
                                t.o ? !!t.o.has(e) || !(!t.p.has(e) || !t.o.has(t.p.get(e))) : t.t.has(e)
                        }
                        ,
                        r.add = function (e) {
                            var t = this[Z];
                            return o(t),
                                this.has(e) || (n(t),
                                    P(t),
                                    t.o.add(e)),
                                this
                        }
                        ,
                        r.delete = function (e) {
                            if (!this.has(e))
                                return !1;
                            var t = this[Z];
                            return o(t),
                                n(t),
                                P(t),
                                t.o.delete(e) || !!t.p.has(e) && t.o.delete(t.p.get(e))
                        }
                        ,
                        r.clear = function () {
                            var e = this[Z];
                            o(e),
                                E(e).size && (n(e),
                                    P(e),
                                    e.o.clear())
                        }
                        ,
                        r.values = function () {
                            var e = this[Z];
                            return o(e),
                                n(e),
                                e.o.values()
                        }
                        ,
                        r.entries = function () {
                            var e = this[Z];
                            return o(e),
                                n(e),
                                e.o.entries()
                        }
                        ,
                        r.keys = function () {
                            return this.values()
                        }
                        ,
                        r[ee] = function () {
                            return this.values()
                        }
                        ,
                        r.forEach = function (e, t) {
                            for (var n = this.values(), r = n.next(); !r.done;)
                                e.call(t, r.value, r.value, this),
                                    r = n.next()
                        }
                        ,
                        t
                }();
            m("MapSet", {
                T: function (e, t) {
                    return new c(e, t)
                },
                F: function (e, t) {
                    return new l(e, t)
                }
            })
        }
        function B() {
            U(),
                G(),
                W()
        }
        function H(e) {
            return e
        }
        function Y(e) {
            return e
        }
        n.r(t),
            n.d(t, "Immer", (function () {
                return ae
            }
            )),
            n.d(t, "applyPatches", (function () {
                return fe
            }
            )),
            n.d(t, "castDraft", (function () {
                return H
            }
            )),
            n.d(t, "castImmutable", (function () {
                return Y
            }
            )),
            n.d(t, "createDraft", (function () {
                return pe
            }
            )),
            n.d(t, "current", (function () {
                return j
            }
            )),
            n.d(t, "enableAllPlugins", (function () {
                return B
            }
            )),
            n.d(t, "enableES5", (function () {
                return U
            }
            )),
            n.d(t, "enableMapSet", (function () {
                return G
            }
            )),
            n.d(t, "enablePatches", (function () {
                return W
            }
            )),
            n.d(t, "finishDraft", (function () {
                return he
            }
            )),
            n.d(t, "immerable", (function () {
                return Q
            }
            )),
            n.d(t, "isDraft", (function () {
                return o
            }
            )),
            n.d(t, "isDraftable", (function () {
                return i
            }
            )),
            n.d(t, "nothing", (function () {
                return $
            }
            )),
            n.d(t, "original", (function () {
                return a
            }
            )),
            n.d(t, "produce", (function () {
                return ce
            }
            )),
            n.d(t, "produceWithPatches", (function () {
                return le
            }
            )),
            n.d(t, "setAutoFreeze", (function () {
                return ue
            }
            )),
            n.d(t, "setUseProxies", (function () {
                return de
            }
            ));
        var z, V, K = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), q = "undefined" != typeof Map, X = "undefined" != typeof Set, J = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, $ = K ? Symbol.for("immer-nothing") : ((z = {})["immer-nothing"] = !0,
            z), Q = K ? Symbol.for("immer-draftable") : "__$immer_draftable", Z = K ? Symbol.for("immer-state") : "__$immer_state", ee = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", te = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            }
                : Object.getOwnPropertyNames, ne = Object.getOwnPropertyDescriptors || function (e) {
                    var t = {};
                    return te(e).forEach((function (n) {
                        t[n] = Object.getOwnPropertyDescriptor(e, n)
                    }
                    )),
                        t
                }
            , re = {}, oe = {
                get: function (e, t) {
                    if (t === Z)
                        return e;
                    var n = E(e);
                    if (!l(n, t))
                        return function (e, t, n) {
                            var r, o = w(t, n);
                            return o ? "value" in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(e.k) : void 0
                        }(e, n, t);
                    var r = n[t];
                    return e.I || !i(r) ? r : r === x(e.t, t) ? (L(e),
                        e.o[t] = k(e.A.h, r, e)) : r
                },
                has: function (e, t) {
                    return t in E(e)
                },
                ownKeys: function (e) {
                    return Reflect.ownKeys(E(e))
                },
                set: function (e, t, n) {
                    var r = w(E(e), t);
                    if (null == r ? void 0 : r.set)
                        return r.set.call(e.k, n),
                            !0;
                    if (!e.P) {
                        var o = x(E(e), t)
                            , i = null == o ? void 0 : o[Z];
                        if (i && i.t === n)
                            return e.o[t] = n,
                                e.D[t] = !1,
                                !0;
                        if (f(n, o) && (void 0 !== n || l(e.t, t)))
                            return !0;
                        L(e),
                            P(e)
                    }
                    return e.o[t] = n,
                        e.D[t] = !0,
                        !0
                },
                deleteProperty: function (e, t) {
                    return void 0 !== x(e.t, t) || t in e.t ? (e.D[t] = !1,
                        L(e),
                        P(e)) : delete e.D[t],
                        e.o && delete e.o[t],
                        !0
                },
                getOwnPropertyDescriptor: function (e, t) {
                    var n = E(e)
                        , r = Reflect.getOwnPropertyDescriptor(n, t);
                    return r ? {
                        writable: !0,
                        configurable: 1 !== e.i || "length" !== t,
                        enumerable: r.enumerable,
                        value: n[t]
                    } : r
                },
                defineProperty: function () {
                    r(11)
                },
                getPrototypeOf: function (e) {
                    return Object.getPrototypeOf(e.t)
                },
                setPrototypeOf: function () {
                    r(12)
                }
            }, ie = {};
        s(oe, (function (e, t) {
            ie[e] = function () {
                return arguments[0] = arguments[0][0],
                    t.apply(this, arguments)
            }
        }
        )),
            ie.deleteProperty = function (e, t) {
                return oe.deleteProperty.call(this, e[0], t)
            }
            ,
            ie.set = function (e, t, n) {
                return oe.set.call(this, e[0], t, n, e[0])
            }
            ;
        var ae = function () {
            function e(e) {
                this.O = J,
                    this.N = !1,
                    "boolean" == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
                    "boolean" == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze),
                    this.produce = this.produce.bind(this),
                    this.produceWithPatches = this.produceWithPatches.bind(this)
            }
            var t = e.prototype;
            return t.produce = function (e, t, n) {
                if ("function" == typeof e && "function" != typeof t) {
                    var o = t;
                    t = e;
                    var a = this;
                    return function (e) {
                        var n = this;
                        void 0 === e && (e = o);
                        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
                            i[s - 1] = arguments[s];
                        return a.produce(e, (function (e) {
                            var r;
                            return (r = t).call.apply(r, [n, e].concat(i))
                        }
                        ))
                    }
                }
                var s;
                if ("function" != typeof t && r(6),
                    void 0 !== n && "function" != typeof n && r(7),
                    i(e)) {
                    var c = R(this)
                        , l = k(this, e, void 0)
                        , u = !0;
                    try {
                        s = t(l),
                            u = !1
                    } finally {
                        u ? O(c) : T(c)
                    }
                    return "undefined" != typeof Promise && s instanceof Promise ? s.then((function (e) {
                        return b(c, n),
                            I(e, c)
                    }
                    ), (function (e) {
                        throw O(c),
                        e
                    }
                    )) : (b(c, n),
                        I(s, c))
                }
                if (!e || "object" != typeof e) {
                    if ((s = t(e)) === $)
                        return;
                    return void 0 === s && (s = e),
                        this.N && v(s, !0),
                        s
                }
                r(21, e)
            }
                ,
                t.produceWithPatches = function (e, t) {
                    var n, r, o = this;
                    return "function" == typeof e ? function (t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
                            r[i - 1] = arguments[i];
                        return o.produceWithPatches(t, (function (t) {
                            return e.apply(void 0, [t].concat(r))
                        }
                        ))
                    }
                        : [this.produce(e, t, (function (e, t) {
                            n = e,
                                r = t
                        }
                        )), n, r]
                }
                ,
                t.createDraft = function (e) {
                    i(e) || r(8),
                        o(e) && (e = j(e));
                    var t = R(this)
                        , n = k(this, e, void 0);
                    return n[Z].C = !0,
                        T(t),
                        n
                }
                ,
                t.finishDraft = function (e, t) {
                    var n = (e && e[Z]).A;
                    return b(n, t),
                        I(void 0, n)
                }
                ,
                t.setAutoFreeze = function (e) {
                    this.N = e
                }
                ,
                t.setUseProxies = function (e) {
                    e && !J && r(20),
                        this.O = e
                }
                ,
                t.applyPatches = function (e, t) {
                    var n;
                    for (n = t.length - 1; n >= 0; n--) {
                        var r = t[n];
                        if (0 === r.path.length && "replace" === r.op) {
                            e = r.value;
                            break
                        }
                    }
                    var i = g("Patches").$;
                    return o(e) ? i(e, t) : this.produce(e, (function (e) {
                        return i(e, t.slice(n + 1))
                    }
                    ))
                }
                ,
                e
        }()
            , se = new ae
            , ce = se.produce
            , le = se.produceWithPatches.bind(se)
            , ue = se.setAutoFreeze.bind(se)
            , de = se.setUseProxies.bind(se)
            , fe = se.applyPatches.bind(se)
            , pe = se.createDraft.bind(se)
            , he = se.finishDraft.bind(se);
        t.default = ce
    },
    395: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AppContextModule = void 0;
        var r, o = n(823), i = (r = n(824)) && r.__esModule ? r : {
            default: r
        }, a = n(825), s = n(396), c = n(397), l = n(826), u = n(827), d = n(398), f = n(399);
        const p = {
            id: "appContext",
            reducerMap: {
                appContext: (0,
                    n(96).combineReducers)({
                        focus: o.FocusReducer,
                        network: s.NetworkReducer,
                        modal: a.ModalReducer,
                        promotion: d.PromotionReducer,
                        portalWindow: l.PortalWindowReducer
                    })
            },
            sagas: [i.default, c.NetworkSaga, u.PortalWindowSaga, f.PromotionSaga]
        };
        t.AppContextModule = p
    },
    396: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.NetworkReducer = void 0;
        var r = n(42);
        const o = (0,
            n(51).makeReducer)({
                isNetworkConnected: !0
            }, (e, t) => {
                switch (t.type) {
                    case r.AppContextActions.networkConnectionChanged.type:
                        e.isNetworkConnected = t.payload.isNetworkConnected
                }
            }
            );
        t.NetworkReducer = o
    },
    397: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.NetworkSaga = function* () {
                yield (0,
                    s.call)(l);
                const e = yield (0,
                    s.call)(u);
                yield (0,
                    s.fork)(d, e)
            }
            ,
            t._checkNetworkConnection = l,
            t._createNetworkConnectionChannel = u,
            t._listenNetworkConnectionChannel = d;
        var r, o = n(42), i = n(8), a = (r = n(9)) && r.__esModule ? r : {
            default: r
        }, s = n(17), c = n(64);
        function* l() {
            const e = window.navigator.onLine;
            yield (0,
                s.put)(o.AppContextActions.networkConnectionChanged(e))
        }
        function* u() {
            return yield (0,
                s.call)(c.eventChannel, e => (window.addEventListener("online", e, !1),
                    window.addEventListener("offline", e, !1),
                    () => {
                        window.removeEventListener("online", e, !1),
                            window.removeEventListener("offline", e, !1)
                    }
                ))
        }
        function* d(e) {
            try {
                for (; ;) {
                    const t = yield (0,
                        s.take)(e);
                    yield (0,
                        s.call)(a.default.log.info, `Network status is ${t.type}`),
                        "offline" === t.type && (yield (0,
                            s.put)(o.AppContextActions.networkConnectionChanged(!1)),
                            yield (0,
                                s.call)(a.default.performance.markEvent, i.PerformanceEvents.NETWORK_OFFLINE)),
                        "online" === t.type && (yield (0,
                            s.put)(o.AppContextActions.networkConnectionChanged(!0)),
                            yield (0,
                                s.call)(a.default.performance.markEvent, i.PerformanceEvents.NETWORK_ONLINE))
                }
            } finally {
                e.close()
            }
        }
    },
    398: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.PromotionReducer = void 0;
        var r = n(42);
        const o = (0,
            n(51).makeReducer)({
                currentPromotion: null
            }, (e, t) => {
                switch (t.type) {
                    case r.AppContextActions.setCurrentPromotion.type:
                        e.currentPromotion = t.payload.promotion;
                        break;
                    case r.AppContextActions.clearPromotion.type:
                        e.currentPromotion = null
                }
            }
            );
        t.PromotionReducer = o
    },
    399: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.PromotionSaga = function* () {
                const e = yield (0,
                    d.select)(u.isGatekeeperEnabled, "archon_enable_qp");
                if ((yield (0,
                    d.select)(c.isWorkplace)) && !e)
                    return;
                yield (0,
                    d.takeLatest)(r.AppContextActions.promotionImpression.type, g),
                    yield (0,
                        d.takeLatest)(r.AppContextActions.promotionAction.type, m),
                    e ? yield (0,
                        d.fork)(S) : yield (0,
                            d.fork)(y);
                (yield (0,
                    d.select)(u.isGatekeeperEnabled, "archon_enable_interruptive_osmeta_feedback")) && (yield (0,
                        d.takeLatest)(r.AppContextActions.setWindowFocusState.type, E))
            }
            ,
            t._windowFocusChanged = E;
        var r = n(42)
            , o = n(144)
            , i = f(n(47))
            , a = n(8)
            , s = f(n(9))
            , c = n(61)
            , l = n(21)
            , u = n(32)
            , d = n(17);
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0,
            i.default)({
                hours: 1
            })
            , h = (0,
                i.default)({
                    days: 1
                });
        function* E(e) {
            if (e.payload.isFocused) {
                const e = yield (0,
                    d.select)(o.getCurrentPromotion);
                if (!e)
                    return;
                if (null != (yield (0,
                    d.select)(o.currentModal)))
                    return;
                "feedback" === e.type && (yield (0,
                    d.put)(r.AppContextActions.showModal({
                        type: "FeedbackForm",
                        promotion: e
                    }, null))),
                    yield (0,
                        d.put)(r.AppContextActions.clearPromotion())
            }
        }
        function* _() {
            const e = yield (0,
                d.select)(c.requireAuthenticationData);
            (yield (0,
                d.call)(v)) && (yield (0,
                    d.put)(r.AppContextActions.setCurrentPromotion({
                        userID: e.userID,
                        type: "feedback"
                    })))
        }
        function* v() {
            if (!(yield (0,
                d.select)(u.isGatekeeperEnabled, "archon_enable_osmeta_feedback")))
                return !1;
            if (!(yield (0,
                d.call)(s.default.settings.getGlobalSettings)).wasOsmetaMessengerUser)
                return !1;
            const e = yield (0,
                d.call)(s.default.promotions.getOsmetaFeedbackPromotionInfo);
            if (e && e.feedbackCompleted)
                return !1;
            const t = (new Date).getTime();
            let n;
            return e ? n = e.upgradeTimestamp : (s.default.promotions.setOsmetaFeedbackPromotionInfo({
                upgradeTimestamp: t,
                feedbackCompleted: !1
            }),
                n = t),
                !(h - (t - n) > 0)
        }
        function* S() {
            for (; ;) {
                s.default.performance.markEvent(a.PerformanceEvents.GET_PROMOTIONS);
                const e = yield (0,
                    d.call)(s.default.promotions.getPromotionsForUser);
                s.default.performance.markEvent(a.PerformanceEvents.GET_PROMOTIONS_SUCCEEDED),
                    null != e && (yield (0,
                        d.put)(r.AppContextActions.setCurrentPromotion(e))),
                    yield (0,
                        d.delay)(p)
            }
        }
        function* y() {
            for ((yield (0,
                d.select)(c.isUserLoggedIn)) || (yield (0,
                    d.take)(l.AuthenticationActions.loginSucceeded.type)); ;)
                yield (0,
                    d.call)(_),
                    yield (0,
                        d.delay)(p)
        }
        function* g(e) {
            const { promotion: t } = e.payload;
            yield (0,
                d.call)(s.default.performance.markEvent, a.PerformanceEvents.MARK_PROMOTION_IMPRESSION),
                t.qpInfo && (yield (0,
                    d.call)(s.default.promotions.markPromotionImpression, t))
        }
        function* m(e) {
            const { promotion: t, actionType: n } = e.payload;
            if (yield (0,
                d.call)(s.default.performance.markEvent, a.PerformanceEvents.MARK_PROMOTION_ACTION),
                t.qpInfo)
                "DISMISS" === n ? yield (0,
                    d.call)(s.default.promotions.markPromotionDismissAction, t) : yield (0,
                        d.call)(s.default.promotions.markPromotionPrimaryAction, t);
            else if ("feedback" === t.type) {
                const e = yield (0,
                    d.call)(s.default.promotions.getOsmetaFeedbackPromotionInfo);
                e && s.default.promotions.setOsmetaFeedbackPromotionInfo({
                    ...e,
                    feedbackCompleted: !0
                })
            }
            yield (0,
                d.put)(r.AppContextActions.clearPromotion())
        }
    },
    400: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AuthenticationModule = void 0;
        var r = n(401)
            , o = n(402);
        const i = {
            id: "authentication",
            reducerMap: {
                authentication: r.AuthenticationReducer
            },
            sagas: [o.AuthenticationSaga]
        };
        t.AuthenticationModule = i
    },
    401: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AuthenticationReducer = void 0;
        var r, o = n(168), i = (r = n(192)) && r.__esModule ? r : {
            default: r
        };
        const a = (0,
            n(51).makeReducer)({
                isAuthenticating: !1,
                isLoggingOut: !1,
                messengerSsoState: i.default.Preparing
            }, (e, t) => {
                switch (t.type) {
                    case o.AuthenticationActions.login.type:
                        e.authenticationData = void 0,
                            e.error = void 0,
                            e.isAuthenticating = !0,
                            e.isLoggingOut = !1;
                        break;
                    case o.AuthenticationActions.login2FARequired.type:
                        {
                            const { uid: n, isWorkplaceAccount: r, loginFirstFactor: o } = t.payload;
                            e.isAuthenticating = !1,
                                e.isLoggingOut = !1,
                                e.error = void 0,
                                e.pending2FA = {
                                    uid: n,
                                    isWorkplaceAccount: r,
                                    loginFirstFactor: o
                                };
                            break
                        }
                    case o.AuthenticationActions.login2FA.type:
                        e.isAuthenticating = !0,
                            e.error = void 0,
                            e.isLoggingOut = !1;
                        break;
                    case o.AuthenticationActions.loginSucceeded.type:
                        e.authenticationData = t.payload.authenticationData,
                            e.pendingTokenExchange = t.payload.pendingTokenExchange,
                            e.isFirstRun = t.payload.isFirstRun,
                            e.pending2FA = void 0,
                            e.error = void 0,
                            e.isAuthenticating = !1;
                        break;
                    case o.AuthenticationActions.clearUserStorageKey.type:
                        e.authenticationData && (e.authenticationData = {
                            ...e.authenticationData,
                            userStorageKey: null
                        });
                        break;
                    case o.AuthenticationActions.loginFailed.type:
                        e.error = t.payload.error,
                            e.isAuthenticating = !1;
                        break;
                    case o.AuthenticationActions.startLogout.type:
                        e.isLoggingOut = !0;
                        break;
                    case o.AuthenticationActions.finishLogout.type:
                    case o.AuthenticationActions.exit2FA.type:
                        e.authenticationData = void 0,
                            e.isLoggingOut = !1,
                            e.pending2FA = void 0,
                            e.error = void 0;
                        break;
                    case o.AuthenticationActions.setMessengerSsoState.type:
                        e.messengerSsoState = t.payload.newState;
                        break;
                    case o.AuthenticationActions.tokenExchangeFailed.type:
                        e.authenticationData = void 0,
                            e.tokenExchangeFailed = !0;
                        break;
                    case o.AuthenticationActions.setDidTryUpgradeOnRun.type:
                        e.didTryUpgradeOnRun = t.payload.didTryUpgradeOnRun
                }
            }
            );
        t.AuthenticationReducer = a
    },
    402: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AuthenticationSaga = function* () {
                yield (0,
                    h.call)(S),
                    yield (0,
                        h.fork)(_),
                    yield (0,
                        h.call)(d.default.diagnostics.setCrashReporterApplicationState, "not_logged_in"),
                    yield (0,
                        h.takeLatest)(r.AuthenticationActions.login.type, g),
                    yield (0,
                        h.takeLatest)(r.AuthenticationActions.login2FA.type, m),
                    yield (0,
                        h.takeLatest)(r.AuthenticationActions.startLogout.type, R),
                    yield (0,
                        h.takeLatest)(r.AuthenticationActions.initiateMessengerSso.type, v)
            }
            ,
            t._prepareForMessengerSso = _,
            t._initiateMessengerSso = v,
            t._tryLoadSessionFromQuery = S,
            t._tryLoadSessionFromOsmetaMessenger = y,
            t._loginSaga = g,
            t._login2FASaga = m,
            t._startLogout = R;
        var r = n(168)
            , o = n(61)
            , i = n(829)
            , a = n(830)
            , s = E(n(192))
            , c = n(24)
            , l = n(831)
            , u = n(8)
            , d = E(n(9))
            , f = n(268)
            , p = n(32)
            , h = n(17);
        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function* _() {
            try {
                yield (0,
                    h.call)(d.default.authentication.prepareForMessengerSso),
                    yield (0,
                        h.put)(r.AuthenticationActions.setMessengerSsoState(s.default.Ready))
            } catch (e) {
                yield (0,
                    h.call)(d.default.log.error, `Failed to prepare for Messenger SSO: ${e}`),
                    yield (0,
                        h.put)(r.AuthenticationActions.setMessengerSsoState(s.default.Disabled))
            }
        }
        function* v() {
            try {
                const e = yield (0,
                    h.call)(d.default.authentication.initiateMessengerSso);
                yield (0,
                    h.put)(r.AuthenticationActions.setMessengerSsoState(s.default.Authenticating));
                const t = yield (0,
                    h.call)(d.default.authentication.finishMessengerSso, e);
                yield (0,
                    h.call)(A, t.sessionCookies, "initiateMessengerSso"),
                    yield (0,
                        h.call)(b, t, !0)
            } catch (e) {
                yield (0,
                    h.call)(d.default.log.error, `Failed to initiate Messenger SSO: ${e}`),
                    yield (0,
                        h.put)(r.AuthenticationActions.setMessengerSsoState(s.default.Failed))
            }
        }
        function* S() {
            const e = (0,
                i.getUserFromQuery)();
            e ? yield (0,
                h.put)(r.AuthenticationActions.loginSucceeded(e, !1)) : yield (0,
                    h.fork)(y)
        }
        function* y() {
            if (!(yield (0,
                h.call)(d.default.authentication.canUpgradeOsmetaUser)))
                return;
            yield (0,
                h.put)(r.AuthenticationActions.setDidTryUpgradeOnRun(!0));
            const e = yield (0,
                h.call)(d.default.authentication.getOsmetaMessengerUser);
            if (e) {
                yield (0,
                    h.put)(r.AuthenticationActions.loginSucceeded(e, !0, !0));
                try {
                    const t = yield (0,
                        h.call)(d.default.authentication.loginWithAccessTokenExchange, e);
                    if (!t)
                        throw new Error("Token exchange failed!");
                    yield (0,
                        h.call)(A, t.sessionCookies, "tryLoadSessionFromOsmetaMessenger"),
                        yield (0,
                            h.call)(b, t, !1),
                        yield (0,
                            h.call)(d.default.performance.markEvent, u.PerformanceEvents.OSMETA_UPGRADE_SUCCEEDED)
                } catch (e) {
                    yield (0,
                        h.call)(d.default.log.error, "Error during OSMeta upgrade:"),
                        yield (0,
                            h.call)(d.default.log.error, e),
                        yield (0,
                            h.put)(r.AuthenticationActions.tokenExchangeFailed()),
                        yield (0,
                            h.call)(d.default.performance.markEvent, u.PerformanceEvents.OSMETA_UPGRADE_FAILED)
                }
            }
        }
        function* g(e) {
            const { email: t, password: n, isWorkplaceAccount: o, challengeID: i } = e.payload
                , a = yield (0,
                    h.call)(O);
            yield (0,
                h.call)(d.default.diagnostics.setCrashReporterApplicationState, "logging_in");
            try {
                const e = yield (0,
                    h.call)(d.default.msys.encryptPassword, n, a)
                    , r = yield (0,
                        h.call)(d.default.msys.authSessionLogin, t, e, o, null, a, null, i);
                yield (0,
                    h.call)(A, r.sessionCookies, "loginSaga"),
                    yield (0,
                        h.call)(b, r, o)
            } catch (e) {
                const t = (0,
                    l.isIpcError)(e) ? e.innerError : e;
                if (406 === t.code && t.userInfo) {
                    const e = t.userInfo.uid
                        , n = t.userInfo.loginFirstFactor;
                    yield (0,
                        h.put)(r.AuthenticationActions.login2FARequired(e, o, n))
                } else
                    yield (0,
                        h.call)(d.default.diagnostics.setCrashReporterApplicationState, "login_failed"),
                        yield (0,
                            h.put)(r.AuthenticationActions.loginFailed(t))
            }
        }
        function* m(e) {
            const { code: t } = e.payload
                , { uid: n, isWorkplaceAccount: i, loginFirstFactor: a } = yield (0,
                    h.select)(o.getPending2FAInformation);
            yield (0,
                h.call)(d.default.diagnostics.setCrashReporterApplicationState, "logging_in");
            const s = yield (0,
                h.call)(O);
            try {
                const e = yield (0,
                    h.call)(d.default.msys.authSessionLogin, n, t, i, a, s, null, null);
                yield (0,
                    h.call)(A, e.sessionCookies, "login2FASaga"),
                    yield (0,
                        h.call)(b, e, i)
            } catch (e) {
                yield (0,
                    h.put)(r.AuthenticationActions.loginFailed(e))
            }
        }
        function* A(e, t) {
            const n = new Set(Object.values(a.CookieNames));
            if (e)
                for (const t of e)
                    n.has(t.name) && n.delete(t.name);
            n.size > 0 && (yield (0,
                h.call)(d.default.metrics.trackStrictEvent, (0,
                    c.ClientAuthenticationEvent)({
                        action: "missing_cookies",
                        channel: t,
                        context: {
                            missingCookies: JSON.stringify(Array.from(n).sort())
                        }
                    })))
        }
        function* b(e, t) {
            yield (0,
                h.call)(d.default.diagnostics.setCrashReporterApplicationState, "loading_user");
            const n = yield (0,
                h.call)(d.default.msys.authSessionLoadUser, e);
            yield (0,
                h.call)(T, n.userID, n.accessToken);
            const o = {
                ...n,
                sessionCookies: e.sessionCookies,
                userStorageKey: e.userStorageKey,
                isWorkplaceAccount: t
            };
            yield (0,
                h.call)(d.default.authentication.onLoginSuccessful, o),
                yield (0,
                    h.put)(r.AuthenticationActions.loginSucceeded(o, !0))
        }
        async function O() {
            const e = d.default.platform.deviceID;
            return {
                accessToken: "",
                userID: "",
                username: "",
                firstName: "",
                fullName: "",
                deviceID: e,
                familyDeviceID: e,
                machineID: e
            }
        }
        function* T(e, t) {
            if (yield (0,
                h.call)(f.loadGatekeepers, e, t),
                !(yield (0,
                    h.select)(p.isGatekeeperEnabled, "archon_enabled")))
                throw yield (0,
                    h.call)(f.resetGatekeepers),
                new Error("Messenger Desktop is not available yet.")
        }
        function* R(e) {
            try {
                yield (0,
                    h.call)(d.default.notifications.local.native.clear)
            } catch (e) {
                yield (0,
                    h.call)(d.default.log.error, `Error while clearing notifs: ${e.toString()}`)
            }
            try {
                yield (0,
                    h.call)(d.default.authentication.clearTincanKeyInfo, u.EmptyTincanKeyNames)
            } catch (e) {
                yield (0,
                    h.call)(d.default.log.error, "Error while clearing tincan keys:"),
                    yield (0,
                        h.call)(d.default.log.error, e)
            }
            try {
                yield (0,
                    h.call)(d.default.rtc.destroyRtc)
            } catch (e) {
                yield (0,
                    h.call)(d.default.log.error, "Error while cleaning up RTC Api"),
                    yield (0,
                        h.call)(d.default.log.error, e)
            }
            try {
                yield (0,
                    h.call)(d.default.authentication.onLogout)
            } catch (e) {
                yield (0,
                    h.call)(d.default.log.error, "Error while logging out:"),
                    yield (0,
                        h.call)(d.default.log.error, e)
            }
            yield (0,
                h.put)(r.AuthenticationActions.finishLogout())
        }
    },
    413: function (e, t, n) {
        "use strict";
        var r = n(109)
            , o = n(286).filter
            , i = n(866)
            , a = n(287)
            , s = i("filter")
            , c = a("filter");
        r({
            target: "Array",
            proto: !0,
            forced: !s || !c
        }, {
            filter: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    414: function (e, t, n) {
        var r = n(110)
            , o = n(415)
            , i = n(279)
            , a = n(206)
            , s = n(416)
            , c = n(68)
            , l = n(417)
            , u = Object.getOwnPropertyDescriptor;
        t.f = r ? u : function (e, t) {
            if (e = a(e),
                t = s(t, !0),
                l)
                try {
                    return u(e, t)
                } catch (e) { }
            if (c(e, t))
                return i(!o.f.call(e, t), e[t])
        }
    },
    415: function (e, t, n) {
        "use strict";
        var r = {}.propertyIsEnumerable
            , o = Object.getOwnPropertyDescriptor
            , i = o && !r.call({
                1: 2
            }, 1);
        t.f = i ? function (e) {
            var t = o(this, e);
            return !!t && t.enumerable
        }
            : r
    },
    416: function (e, t, n) {
        var r = n(79);
        e.exports = function (e, t) {
            if (!r(e))
                return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                return o;
            if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e)))
                return o;
            if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e)))
                return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    417: function (e, t, n) {
        var r = n(110)
            , o = n(55)
            , i = n(418);
        e.exports = !r && !o((function () {
            return 7 != Object.defineProperty(i("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }
        ))
    },
    418: function (e, t, n) {
        var r = n(48)
            , o = n(79)
            , i = r.document
            , a = o(i) && o(i.createElement);
        e.exports = function (e) {
            return a ? i.createElement(e) : {}
        }
    },
    419: function (e, t, n) {
        var r = n(420)
            , o = Function.toString;
        "function" != typeof r.inspectSource && (r.inspectSource = function (e) {
            return o.call(e)
        }
        ),
            e.exports = r.inspectSource
    },
    42: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AppContextActions = void 0;
        var r = n(76);
        const o = {
            networkConnectionChanged: (0,
                r.actionCreator)("appContext/network/network_connection_changed", e => ({
                    isNetworkConnected: e
                })),
            showModal: (0,
                r.actionCreator)("appContext/modal/show_modal", (e, t, n) => ({
                    modalInfo: e,
                    hostWindowKey: t,
                    modalOptions: n
                })),
            clearModal: (0,
                r.actionCreator)("appContext/modal/clear_modal"),
            setCurrentPromotion: (0,
                r.actionCreator)("appContext/promotion/set_current_promotion", e => ({
                    promotion: e
                })),
            clearPromotion: (0,
                r.actionCreator)("appContext/promotion/clear_promotion"),
            promotionImpression: (0,
                r.actionCreator)("appContext/promotion/impression", e => ({
                    promotion: e
                })),
            promotionAction: (0,
                r.actionCreator)("appContext/promotion/action", (e, t) => ({
                    promotion: e,
                    actionType: t
                })),
            setPortalWindowInfo: (0,
                r.actionCreator)("appContext/windows/set_portal_window_info", (e, t) => ({
                    portalKey: e,
                    portalWindowInfo: t
                })),
            closePortalWindow: (0,
                r.actionCreator)("appContext/windows/close_portal_window", e => ({
                    portalKey: e
                })),
            openOrFocusPortalWindow: (0,
                r.actionCreator)("appContext/windows/open_or_focus_portal_window", e => ({
                    options: e
                })),
            setAppFocusState: (0,
                r.actionCreator)("appContext/app/set_app_focus_state", e => ({
                    isFocused: e
                })),
            setWindowFocusState: (0,
                r.actionCreator)("appContext/windows/set_window_focus_state", e => ({
                    isFocused: e
                })),
            setUserActiveState: (0,
                r.actionCreator)("appContext/app/set_user_active_state", e => ({
                    isActive: e
                }))
        };
        t.AppContextActions = o
    },
    420: function (e, t, n) {
        var r = n(48)
            , o = n(280)
            , i = r["__core-js_shared__"] || o("__core-js_shared__", {});
        e.exports = i
    },
    421: function (e, t, n) {
        var r = n(48)
            , o = n(419)
            , i = r.WeakMap;
        e.exports = "function" == typeof i && /native code/.test(o(i))
    },
    422: function (e, t, n) {
        var r = n(282)
            , o = n(420);
        (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
        }
        )("versions", []).push({
            version: "3.6.3",
            mode: r ? "pure" : "global",
            copyright: "?? 2020 Denis Pushkarev (zloirock.ru)"
        })
    },
    423: function (e, t, n) {
        var r = n(68)
            , o = n(206)
            , i = n(861).indexOf
            , a = n(209);
        e.exports = function (e, t) {
            var n, s = o(e), c = 0, l = [];
            for (n in s)
                !r(a, n) && r(s, n) && l.push(n);
            for (; t.length > c;)
                r(s, n = t[c++]) && (~i(l, n) || l.push(n));
            return l
        }
    },
    424: function (e, t) {
        t.f = Object.getOwnPropertySymbols
    },
    425: function (e, t, n) {
        var r = n(55)
            , o = /#|\.prototype\./
            , i = function (e, t) {
                var n = s[a(e)];
                return n == l || n != c && ("function" == typeof t ? r(t) : !!t)
            }
            , a = i.normalize = function (e) {
                return String(e).replace(o, ".").toLowerCase()
            }
            , s = i.data = {}
            , c = i.NATIVE = "N"
            , l = i.POLYFILL = "P";
        e.exports = i
    },
    426: function (e, t, n) {
        var r = n(427);
        e.exports = function (e, t, n) {
            if (r(e),
                void 0 === t)
                return e;
            switch (n) {
                case 0:
                    return function () {
                        return e.call(t)
                    }
                        ;
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    }
                        ;
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    }
                        ;
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    },
    427: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e)
                throw TypeError(String(e) + " is not a function");
            return e
        }
    },
    428: function (e, t, n) {
        var r = n(55);
        e.exports = !!Object.getOwnPropertySymbols && !r((function () {
            return !String(Symbol())
        }
        ))
    },
    429: function (e, t, n) {
        "use strict";
        var r = n(109)
            , o = n(430);
        r({
            target: "Array",
            proto: !0,
            forced: [].forEach != o
        }, {
            forEach: o
        })
    },
    430: function (e, t, n) {
        "use strict";
        var r = n(286).forEach
            , o = n(431)
            , i = n(287)
            , a = o("forEach")
            , s = i("forEach");
        e.exports = a && s ? [].forEach : function (e) {
            return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    },
    431: function (e, t, n) {
        "use strict";
        var r = n(55);
        e.exports = function (e, t) {
            var n = [][e];
            return !!n && r((function () {
                n.call(null, t || function () {
                    throw 1
                }
                    , 1)
            }
            ))
        }
    },
    432: function (e, t, n) {
        var r, o = n(80), i = n(870), a = n(285), s = n(209), c = n(871), l = n(418), u = n(281), d = u("IE_PROTO"), f = function () { }, p = function (e) {
            return "<script>" + e + "<\/script>"
        }, h = function () {
            try {
                r = document.domain && new ActiveXObject("htmlfile")
            } catch (e) { }
            var e, t;
            h = r ? function (e) {
                e.write(p("")),
                    e.close();
                var t = e.parentWindow.Object;
                return e = null,
                    t
            }(r) : ((t = l("iframe")).style.display = "none",
                c.appendChild(t),
                t.src = String("javascript:"),
                (e = t.contentWindow.document).open(),
                e.write(p("document.F=Object")),
                e.close(),
                e.F);
            for (var n = a.length; n--;)
                delete h.prototype[a[n]];
            return h()
        };
        s[d] = !0,
            e.exports = Object.create || function (e, t) {
                var n;
                return null !== e ? (f.prototype = o(e),
                    n = new f,
                    f.prototype = null,
                    n[d] = e) : n = h(),
                    void 0 === t ? n : i(n, t)
            }
    },
    433: function (e, t, n) {
        var r = n(423)
            , o = n(285);
        e.exports = Object.keys || function (e) {
            return r(e, o)
        }
    },
    434: function (e, t, n) {
        "use strict";
        var r = n(109)
            , o = n(872)
            , i = n(436)
            , a = n(437)
            , s = n(289)
            , c = n(93)
            , l = n(151)
            , u = n(62)
            , d = n(282)
            , f = n(178)
            , p = n(435)
            , h = p.IteratorPrototype
            , E = p.BUGGY_SAFARI_ITERATORS
            , _ = u("iterator")
            , v = function () {
                return this
            };
        e.exports = function (e, t, n, u, p, S, y) {
            o(n, t, u);
            var g, m, A, b = function (e) {
                if (e === p && I)
                    return I;
                if (!E && e in R)
                    return R[e];
                switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            }, O = t + " Iterator", T = !1, R = e.prototype, C = R[_] || R["@@iterator"] || p && R[p], I = !E && C || b(p), N = "Array" == t && R.entries || C;
            if (N && (g = i(N.call(new e)),
                h !== Object.prototype && g.next && (d || i(g) === h || (a ? a(g, h) : "function" != typeof g[_] && c(g, _, v)),
                    s(g, O, !0, !0),
                    d && (f[O] = v))),
                "values" == p && C && "values" !== C.name && (T = !0,
                    I = function () {
                        return C.call(this)
                    }
                ),
                d && !y || R[_] === I || c(R, _, I),
                f[t] = I,
                p)
                if (m = {
                    values: b("values"),
                    keys: S ? I : b("keys"),
                    entries: b("entries")
                },
                    y)
                    for (A in m)
                        !E && !T && A in R || l(R, A, m[A]);
                else
                    r({
                        target: t,
                        proto: !0,
                        forced: E || T
                    }, m);
            return m
        }
    },
    435: function (e, t, n) {
        "use strict";
        var r, o, i, a = n(436), s = n(93), c = n(68), l = n(62), u = n(282), d = l("iterator"), f = !1;
        [].keys && ("next" in (i = [].keys()) ? (o = a(a(i))) !== Object.prototype && (r = o) : f = !0),
            null == r && (r = {}),
            u || c(r, d) || s(r, d, (function () {
                return this
            }
            )),
            e.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: f
            }
    },
    436: function (e, t, n) {
        var r = n(68)
            , o = n(177)
            , i = n(281)
            , a = n(873)
            , s = i("IE_PROTO")
            , c = Object.prototype;
        e.exports = a ? Object.getPrototypeOf : function (e) {
            return e = o(e),
                r(e, s) ? e[s] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? c : null
        }
    },
    437: function (e, t, n) {
        var r = n(80)
            , o = n(874);
        e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1, n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []),
                    t = n instanceof Array
            } catch (e) { }
            return function (n, i) {
                return r(n),
                    o(i),
                    t ? e.call(n, i) : n.__proto__ = i,
                    n
            }
        }() : void 0)
    },
    438: function (e, t, n) {
        var r = n(109)
            , o = n(875);
        r({
            target: "Object",
            stat: !0,
            forced: Object.assign !== o
        }, {
            assign: o
        })
    },
    439: function (e, t, n) {
        var r = n(290)
            , o = n(151)
            , i = n(876);
        r || o(Object.prototype, "toString", i, {
            unsafe: !0
        })
    },
    44: function (e, t, n) {
        "use strict";
        function r(e, t) {
            if (null == e)
                return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++)
                n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }
        n.d(t, "a", (function () {
            return r
        }
        ))
    },
    440: function (e, t, n) {
        var r = n(290)
            , o = n(208)
            , i = n(62)("toStringTag")
            , a = "Arguments" == o(function () {
                return arguments
            }());
        e.exports = r ? o : function (e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) { }
            }(t = Object(e), i)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r
        }
    },
    441: function (e, t, n) {
        var r = n(109)
            , o = n(877);
        r({
            global: !0,
            forced: parseInt != o
        }, {
            parseInt: o
        })
    },
    442: function (e, t) {
        e.exports = "\t\n\v\f\r ???????????????????????????????????????????????\u2028\u2029\ufeff"
    },
    443: function (e, t, n) {
        "use strict";
        var r = n(444).charAt
            , o = n(176)
            , i = n(434)
            , a = o.set
            , s = o.getterFor("String Iterator");
        i(String, "String", (function (e) {
            a(this, {
                type: "String Iterator",
                string: String(e),
                index: 0
            })
        }
        ), (function () {
            var e, t = s(this), n = t.string, o = t.index;
            return o >= n.length ? {
                value: void 0,
                done: !0
            } : (e = r(n, o),
                t.index += e.length,
            {
                value: e,
                done: !1
            })
        }
        ))
    },
    444: function (e, t, n) {
        var r = n(210)
            , o = n(150)
            , i = function (e) {
                return function (t, n) {
                    var i, a, s = String(o(t)), c = r(n), l = s.length;
                    return c < 0 || c >= l ? e ? "" : void 0 : (i = s.charCodeAt(c)) < 55296 || i > 56319 || c + 1 === l || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? e ? s.charAt(c) : i : e ? s.slice(c, c + 2) : a - 56320 + (i - 55296 << 10) + 65536
                }
            };
        e.exports = {
            codeAt: i(!1),
            charAt: i(!0)
        }
    },
    445: function (e, t, n) {
        "use strict";
        var r, o = n(48), i = n(446), a = n(291), s = n(880), c = n(886), l = n(79), u = n(176).enforce, d = n(421), f = !o.ActiveXObject && "ActiveXObject" in o, p = Object.isExtensible, h = function (e) {
            return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, E = e.exports = s("WeakMap", h, c);
        if (d && f) {
            r = c.getConstructor(h, "WeakMap", !0),
                a.REQUIRED = !0;
            var _ = E.prototype
                , v = _.delete
                , S = _.has
                , y = _.get
                , g = _.set;
            i(_, {
                delete: function (e) {
                    if (l(e) && !p(e)) {
                        var t = u(this);
                        return t.frozen || (t.frozen = new r),
                            v.call(this, e) || t.frozen.delete(e)
                    }
                    return v.call(this, e)
                },
                has: function (e) {
                    if (l(e) && !p(e)) {
                        var t = u(this);
                        return t.frozen || (t.frozen = new r),
                            S.call(this, e) || t.frozen.has(e)
                    }
                    return S.call(this, e)
                },
                get: function (e) {
                    if (l(e) && !p(e)) {
                        var t = u(this);
                        return t.frozen || (t.frozen = new r),
                            S.call(this, e) ? y.call(this, e) : t.frozen.get(e)
                    }
                    return y.call(this, e)
                },
                set: function (e, t) {
                    if (l(e) && !p(e)) {
                        var n = u(this);
                        n.frozen || (n.frozen = new r),
                            S.call(this, e) ? g.call(this, e, t) : n.frozen.set(e, t)
                    } else
                        g.call(this, e, t);
                    return this
                }
            })
        }
    },
    446: function (e, t, n) {
        var r = n(151);
        e.exports = function (e, t, n) {
            for (var o in t)
                r(e, o, t[o], n);
            return e
        }
    },
    447: function (e, t, n) {
        var r = n(80)
            , o = n(881)
            , i = n(152)
            , a = n(426)
            , s = n(882)
            , c = n(883)
            , l = function (e, t) {
                this.stopped = e,
                    this.result = t
            };
        (e.exports = function (e, t, n, u, d) {
            var f, p, h, E, _, v, S, y = a(t, n, u ? 2 : 1);
            if (d)
                f = e;
            else {
                if ("function" != typeof (p = s(e)))
                    throw TypeError("Target is not iterable");
                if (o(p)) {
                    for (h = 0,
                        E = i(e.length); E > h; h++)
                        if ((_ = u ? y(r(S = e[h])[0], S[1]) : y(e[h])) && _ instanceof l)
                            return _;
                    return new l(!1)
                }
                f = p.call(e)
            }
            for (v = f.next; !(S = v.call(f)).done;)
                if ("object" == typeof (_ = c(f, y, S.value, u)) && _ && _ instanceof l)
                    return _;
            return new l(!1)
        }
        ).stop = function (e) {
            return new l(!0, e)
        }
    },
    448: function (e, t) {
        e.exports = function (e, t, n) {
            if (!(e instanceof t))
                throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        }
    },
    449: function (e, t, n) {
        var r = n(48)
            , o = n(450)
            , i = n(288)
            , a = n(93)
            , s = n(62)
            , c = s("iterator")
            , l = s("toStringTag")
            , u = i.values;
        for (var d in o) {
            var f = r[d]
                , p = f && f.prototype;
            if (p) {
                if (p[c] !== u)
                    try {
                        a(p, c, u)
                    } catch (e) {
                        p[c] = u
                    }
                if (p[l] || a(p, l, d),
                    o[d])
                    for (var h in i)
                        if (p[h] !== i[h])
                            try {
                                a(p, h, i[h])
                            } catch (e) {
                                p[h] = i[h]
                            }
            }
        }
    },
    45: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.addScrollbarTo = function (e, t, n) {
                const r = e.getElementsByClassName(t)[0];
                r.className = [t, f(n)].join(" "),
                    r.hasAttribute("data-simplebar") || new a.default(r)
            }
            ,
            t.default = function (e) {
                const { children: t, innerRef: n, scrollContentRef: a, onUserScrolled: c, onUserScrollFinished: l, ...p } = e
                    , h = (0,
                        s.useTheme)()
                    , E = (0,
                        o.useRef)(void 0)
                    , [_, v] = (0,
                        o.useState)("")
                    , [S, y] = (0,
                        o.useState)(!1);
                function g(e) {
                    S || (c && c(),
                        v([_, "simplebar-scrollbar-shown"].join(" ")),
                        y(!0)),
                        window.clearTimeout(E.current),
                        E.current = setTimeout(() => {
                            l && l(),
                                v(_.replace("simplebar-scrollbar-shown", "")),
                                y(!1)
                        }
                            , 1200)
                }
                return (0,
                    o.useLayoutEffect)(() => {
                        v(f(h))
                    }
                        , [h]),
                    o.default.createElement(i.default, u({}, p, {
                        onWheel: (0,
                            r.leadingDebounce)(g, 20),
                        onTouchStart: (0,
                            r.leadingDebounce)(g, 20),
                        className: [_, e.className].join(" "),
                        style: {
                            ...d,
                            ...e.style
                        },
                        scrollableNodeProps: {
                            ref: e.innerRef
                        }
                    }), o.default.createElement("div", {
                        style: {
                            flex: 1
                        },
                        ref: a
                    }, e.children))
            }
            ;
        var r = n(117)
            , o = function (e) {
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
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(0))
            , i = c(n(1864))
            , a = c(n(890))
            , s = n(6);
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
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
        function u() {
            return (u = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        const d = {
            display: "flex",
            minHeight: 0,
            minWidth: 0
        };
        function f(e) {
            return [e.select({
                mac: "",
                windows: "simplebar-scrollbar-windows"
            }), e.select({
                light: "",
                dark: "simplebar-scrollbar-dark"
            })].join(" ")
        }
    },
    450: function (e, t) {
        e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    },
    451: function (e, t, n) {
        "use strict";
        var r = n(109)
            , o = n(887).left
            , i = n(431)
            , a = n(287)
            , s = i("reduce")
            , c = a("reduce", {
                1: 0
            });
        r({
            target: "Array",
            proto: !0,
            forced: !s || !c
        }, {
            reduce: function (e) {
                return o(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    },
    452: function (e, t, n) {
        var r = n(110)
            , o = n(128).f
            , i = Function.prototype
            , a = i.toString
            , s = /^\s*function ([^ (]*)/;
        !r || "name" in i || o(i, "name", {
            configurable: !0,
            get: function () {
                try {
                    return a.call(this).match(s)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    },
    453: function (e, t, n) {
        "use strict";
        var r = n(454)
            , o = n(80)
            , i = n(152)
            , a = n(150)
            , s = n(455)
            , c = n(456);
        r("match", 1, (function (e, t, n) {
            return [function (t) {
                var n = a(this)
                    , r = null == t ? void 0 : t[e];
                return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
            }
                , function (e) {
                    var r = n(t, e, this);
                    if (r.done)
                        return r.value;
                    var a = o(e)
                        , l = String(this);
                    if (!a.global)
                        return c(a, l);
                    var u = a.unicode;
                    a.lastIndex = 0;
                    for (var d, f = [], p = 0; null !== (d = c(a, l));) {
                        var h = String(d[0]);
                        f[p] = h,
                            "" === h && (a.lastIndex = s(l, i(a.lastIndex), u)),
                            p++
                    }
                    return 0 === p ? null : f
                }
            ]
        }
        ))
    },
    454: function (e, t, n) {
        "use strict";
        n(292);
        var r = n(151)
            , o = n(55)
            , i = n(62)
            , a = n(293)
            , s = n(93)
            , c = i("species")
            , l = !o((function () {
                var e = /./;
                return e.exec = function () {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    },
                        e
                }
                    ,
                    "7" !== "".replace(e, "$<a>")
            }
            ))
            , u = "$0" === "a".replace(/./, "$0")
            , d = i("replace")
            , f = !!/./[d] && "" === /./[d]("a", "$0")
            , p = !o((function () {
                var e = /(?:)/
                    , t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments)
                }
                    ;
                var n = "ab".split(e);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            }
            ));
        e.exports = function (e, t, n, d) {
            var h = i(e)
                , E = !o((function () {
                    var t = {};
                    return t[h] = function () {
                        return 7
                    }
                        ,
                        7 != ""[e](t)
                }
                ))
                , _ = E && !o((function () {
                    var t = !1
                        , n = /a/;
                    return "split" === e && ((n = {}).constructor = {},
                        n.constructor[c] = function () {
                            return n
                        }
                        ,
                        n.flags = "",
                        n[h] = /./[h]),
                        n.exec = function () {
                            return t = !0,
                                null
                        }
                        ,
                        n[h](""),
                        !t
                }
                ));
            if (!E || !_ || "replace" === e && (!l || !u || f) || "split" === e && !p) {
                var v = /./[h]
                    , S = n(h, ""[e], (function (e, t, n, r, o) {
                        return t.exec === a ? E && !o ? {
                            done: !0,
                            value: v.call(t, n, r)
                        } : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {
                            done: !1
                        }
                    }
                    ), {
                        REPLACE_KEEPS_$0: u,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f
                    })
                    , y = S[0]
                    , g = S[1];
                r(String.prototype, e, y),
                    r(RegExp.prototype, h, 2 == t ? function (e, t) {
                        return g.call(e, this, t)
                    }
                        : function (e) {
                            return g.call(e, this)
                        }
                    )
            }
            d && s(RegExp.prototype[h], "sham", !0)
        }
    },
    455: function (e, t, n) {
        "use strict";
        var r = n(444).charAt;
        e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1)
        }
    },
    456: function (e, t, n) {
        var r = n(208)
            , o = n(293);
        e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var i = n.call(e, t);
                if ("object" != typeof i)
                    throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== r(e))
                throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e, t)
        }
    },
    457: function (e, t, n) {
        "use strict";
        var r = n(454)
            , o = n(80)
            , i = n(177)
            , a = n(152)
            , s = n(210)
            , c = n(150)
            , l = n(455)
            , u = n(456)
            , d = Math.max
            , f = Math.min
            , p = Math.floor
            , h = /\$([$&'`]|\d\d?|<[^>]*>)/g
            , E = /\$([$&'`]|\d\d?)/g;
        r("replace", 2, (function (e, t, n, r) {
            var _ = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                , v = r.REPLACE_KEEPS_$0
                , S = _ ? "$" : "$0";
            return [function (n, r) {
                var o = c(this)
                    , i = null == n ? void 0 : n[e];
                return void 0 !== i ? i.call(n, o, r) : t.call(String(o), n, r)
            }
                , function (e, r) {
                    if (!_ && v || "string" == typeof r && -1 === r.indexOf(S)) {
                        var i = n(t, e, this, r);
                        if (i.done)
                            return i.value
                    }
                    var c = o(e)
                        , p = String(this)
                        , h = "function" == typeof r;
                    h || (r = String(r));
                    var E = c.global;
                    if (E) {
                        var g = c.unicode;
                        c.lastIndex = 0
                    }
                    for (var m = []; ;) {
                        var A = u(c, p);
                        if (null === A)
                            break;
                        if (m.push(A),
                            !E)
                            break;
                        "" === String(A[0]) && (c.lastIndex = l(p, a(c.lastIndex), g))
                    }
                    for (var b, O = "", T = 0, R = 0; R < m.length; R++) {
                        A = m[R];
                        for (var C = String(A[0]), I = d(f(s(A.index), p.length), 0), N = [], M = 1; M < A.length; M++)
                            N.push(void 0 === (b = A[M]) ? b : String(b));
                        var D = A.groups;
                        if (h) {
                            var x = [C].concat(N, I, p);
                            void 0 !== D && x.push(D);
                            var w = String(r.apply(void 0, x))
                        } else
                            w = y(C, p, I, N, D, r);
                        I >= T && (O += p.slice(T, I) + w,
                            T = I + C.length)
                    }
                    return O + p.slice(T)
                }
            ];
            function y(e, n, r, o, a, s) {
                var c = r + e.length
                    , l = o.length
                    , u = E;
                return void 0 !== a && (a = i(a),
                    u = h),
                    t.call(s, u, (function (t, i) {
                        var s;
                        switch (i.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return n.slice(0, r);
                            case "'":
                                return n.slice(c);
                            case "<":
                                s = a[i.slice(1, -1)];
                                break;
                            default:
                                var u = +i;
                                if (0 === u)
                                    return t;
                                if (u > l) {
                                    var d = p(u / 10);
                                    return 0 === d ? t : d <= l ? void 0 === o[d - 1] ? i.charAt(1) : o[d - 1] + i.charAt(1) : t
                                }
                                s = o[u - 1]
                        }
                        return void 0 === s ? "" : s
                    }
                    ))
            }
        }
        ))
    },
    47: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ milliseconds: e, seconds: t, minutes: n, hours: r, days: o }) {
                const i = (r ? 60 * r * 60 * 1e3 : 0) + (o ? 24 * o * 60 * 60 * 1e3 : 0) + (n ? 60 * n * 1e3 : 0) + (t ? 1e3 * t : 0) + (e || 0);
                if (!Number.isSafeInteger(i)) {
                    if (isNaN(i) || null == i)
                        throw new Error("Duration is either NaN or null. Please pass in a numerical value");
                    throw new Error("Duration overflowed integer. Please use smaller numbers.")
                }
                return i
            }
    },
    48: function (e, t, n) {
        (function (t) {
            var n = function (e) {
                return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
        }
        ).call(this, n(54))
    },
    50: function (e, t, n) {
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
                    d: "M12.631 25.138l5.196-5.189a.25.25 0 01.353 0l5.197 5.189a1.241 1.241 0 001.76 0 1.241 1.241 0 000-1.761L19.95 18.18a.25.25 0 010-.354l5.189-5.196a1.241 1.241 0 000-1.76 1.241 1.241 0 00-1.761 0l-5.197 5.188a.25.25 0 01-.353 0l-5.196-5.189a1.241 1.241 0 00-1.76 0 1.241 1.241 0 000 1.761l5.188 5.196a.25.25 0 010 .354l-5.189 5.196a1.241 1.241 0 000 1.76 1.241 1.241 0 001.761 0z"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    51: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.makeReducer = function (e, t) {
                return (n, o) => (0,
                    r.default)(n || e, e => t(e, o))
            }
            ;
        var r = function (e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" != typeof e && "function" != typeof e)
                return {
                    default: e
                };
            var t = o();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
                , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            n.default = e,
                t && t.set(e, n);
            return n
        }(n(391));
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
        (0,
            r.enableAllPlugins)(),
            (0,
                r.setAutoFreeze)(!1)
    },
    55: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    586: function (e, t, n) {
        "use strict";
        function r(e) {
            var t, n = e.Symbol;
            return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"),
                n.observable = t) : t = "@@observable",
                t
        }
        n.d(t, "a", (function () {
            return r
        }
        ))
    },
    61: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.is2FAPending = function (e) {
                return null != e.authentication.pending2FA
            }
            ,
            t.isAuthenticating = function (e) {
                return e.authentication.isAuthenticating
            }
            ,
            t.isWorkplace = function (e) {
                return !!e.authentication.authenticationData && !!e.authentication.authenticationData.isWorkplaceAccount
            }
            ,
            t.isUserLoggedIn = function (e) {
                return null != e.authentication.authenticationData
            }
            ,
            t.getPending2FAInformation = function (e) {
                return e.authentication.pending2FA
            }
            ,
            t.requireAuthenticationData = function (e) {
                if (!e.authentication.authenticationData)
                    throw new Error("AuthenticationData was requested, but none exists. No user is logged in");
                return e.authentication.authenticationData
            }
            ,
            t.getAccessToken = function (e) {
                return e.authentication.authenticationData && e.authentication.authenticationData.accessToken || void 0
            }
            ,
            t.getUserIDForLogging = function (e) {
                return e.authentication.authenticationData ? e.authentication.authenticationData.userID : o.default.metrics.UNAUTHENTICATED_USERID
            }
            ,
            t.getAuthenticationError = function (e) {
                return e.authentication.error
            }
            ,
            t.getMessengerSsoState = function (e) {
                return e.authentication.messengerSsoState
            }
            ,
            t.getPendingTokenExchange = function (e) {
                return e.authentication.pendingTokenExchange
            }
            ,
            t.getIsFirstRun = function (e) {
                return e.authentication.isFirstRun
            }
            ,
            t.getDidTryUpgradeOnRun = function (e) {
                return e.authentication.didTryUpgradeOnRun
            }
            ;
        var r, o = (r = n(9)) && r.__esModule ? r : {
            default: r
        }
    },
    617: function (e, t, n) {
        "use strict";
        let r, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.COLOR_SIZES = t.EMOJI_FONT_SIZES_MAC = t.EMOJI_FONT_SIZES_WINDOWS = t.ICON_SIZES = t.BUTTON_SIZES = t.RoundButtonUse = t.RoundButtonSize = void 0,
            t.RoundButtonSize = r,
            function (e) {
                e.Tiny = "tiny",
                    e.XXSmall = "xxsmall",
                    e.XSmall = "xsmall",
                    e.Small = "small",
                    e.Medium = "medium",
                    e.Large = "large",
                    e.XLarge = "xlarge",
                    e.XXLarge = "xxlarge",
                    e.XXXLarge = "xxxlarge"
            }(r || (t.RoundButtonSize = r = {})),
            t.RoundButtonUse = o,
            function (e) {
                e.Standard = "standard",
                    e.Transparent = "transparent"
            }(o || (t.RoundButtonUse = o = {}));
        const i = {
            [r.Tiny]: 14,
            [r.XXSmall]: 16,
            [r.XSmall]: 20,
            [r.Small]: 24,
            [r.Medium]: 28,
            [r.Large]: 32,
            [r.XLarge]: 40,
            [r.XXLarge]: 50,
            [r.XXXLarge]: 70
        };
        t.BUTTON_SIZES = i;
        const a = {
            [r.Tiny]: 12,
            [r.XXSmall]: 14,
            [r.XSmall]: 16,
            [r.Small]: 20,
            [r.Medium]: 26,
            [r.Large]: 26,
            [r.XLarge]: 28,
            [r.XXLarge]: 36,
            [r.XXXLarge]: 50
        };
        t.ICON_SIZES = a;
        const s = {
            [r.Medium]: 16,
            [r.Large]: 24,
            [r.XLarge]: 30
        };
        t.EMOJI_FONT_SIZES_WINDOWS = s;
        const c = {
            [r.Medium]: 22,
            [r.Large]: 30,
            [r.XLarge]: 36
        };
        t.EMOJI_FONT_SIZES_MAC = c;
        const l = {
            [r.Tiny]: 9,
            [r.XXSmall]: 11,
            [r.XSmall]: 14,
            [r.Small]: 17,
            [r.Medium]: 25,
            [r.Large]: 23,
            [r.XLarge]: 30,
            [r.XXLarge]: 38,
            [r.XXXLarge]: 54
        };
        t.COLOR_SIZES = l
    },
    62: function (e, t, n) {
        var r = n(48)
            , o = n(422)
            , i = n(68)
            , a = n(283)
            , s = n(428)
            , c = n(865)
            , l = o("wks")
            , u = r.Symbol
            , d = c ? u : u && u.withoutSetter || a;
        e.exports = function (e) {
            return i(l, e) || (s && i(u, e) ? l[e] = u[e] : l[e] = d("Symbol." + e)),
                l[e]
        }
    },
    64: function (e, t, n) {
        "use strict";
        n.r(t);
        var r = n(20)
            , o = n(34)
            , i = n(44)
            , a = n(14)
            , s = n(7)
            , c = n(96);
        function l() {
            var e = {};
            return e.promise = new Promise((function (t, n) {
                e.resolve = t,
                    e.reject = n
            }
            )),
                e
        }
        var u = l
            , d = (n(234),
                [])
            , f = 0;
        function p(e) {
            try {
                _(),
                    e()
            } finally {
                v()
            }
        }
        function h(e) {
            d.push(e),
                f || (_(),
                    S())
        }
        function E(e) {
            try {
                return _(),
                    e()
            } finally {
                S()
            }
        }
        function _() {
            f++
        }
        function v() {
            f--
        }
        function S() {
            var e;
            for (v(); !f && void 0 !== (e = d.shift());)
                p(e)
        }
        var y = function (e) {
            return function (t) {
                return e.some((function (e) {
                    return O(e)(t)
                }
                ))
            }
        }
            , g = function (e) {
                return function (t) {
                    return e(t)
                }
            }
            , m = function (e) {
                return function (t) {
                    return t.type === String(e)
                }
            }
            , A = function (e) {
                return function (t) {
                    return t.type === e
                }
            }
            , b = function () {
                return s.U
            };
        function O(e) {
            var t = "*" === e ? b : Object(a.k)(e) ? m : Object(a.a)(e) ? y : Object(a.l)(e) ? m : Object(a.d)(e) ? g : Object(a.m)(e) ? A : null;
            if (null === t)
                throw new Error("invalid pattern: " + e);
            return t(e)
        }
        var T = {
            type: r.b
        }
            , R = function (e) {
                return e && e.type === r.b
            };
        function C(e) {
            void 0 === e && (e = Object(s.O)());
            var t = !1
                , n = [];
            return {
                take: function (r) {
                    t && e.isEmpty() ? r(T) : e.isEmpty() ? (n.push(r),
                        r.cancel = function () {
                            Object(s.bb)(n, r)
                        }
                    ) : r(e.take())
                },
                put: function (r) {
                    if (!t) {
                        if (0 === n.length)
                            return e.put(r);
                        n.shift()(r)
                    }
                },
                flush: function (n) {
                    t && e.isEmpty() ? n(T) : n(e.flush())
                },
                close: function () {
                    if (!t) {
                        t = !0;
                        var e = n;
                        n = [];
                        for (var r = 0, o = e.length; r < o; r++) {
                            (0,
                                e[r])(T)
                        }
                    }
                }
            }
        }
        function I(e, t) {
            void 0 === t && (t = Object(s.X)());
            var n, r = !1, o = C(t), i = function () {
                r || (r = !0,
                    Object(a.d)(n) && n(),
                    o.close())
            };
            return n = e((function (e) {
                R(e) ? i() : o.put(e)
            }
            )),
                n = Object(s.Y)(n),
                r && n(),
            {
                take: o.take,
                flush: o.flush,
                close: i
            }
        }
        function N() {
            var e, t = !1, n = [], o = n;
            var i = function () {
                o === n && (o = n.slice())
            }
                , a = function () {
                    t = !0;
                    var e = n = o;
                    o = [],
                        e.forEach((function (e) {
                            e(T)
                        }
                        ))
                };
            return (e = {})[r.e] = !0,
                e.put = function (e) {
                    if (!t)
                        if (R(e))
                            a();
                        else
                            for (var i = n = o, s = 0, c = i.length; s < c; s++) {
                                var l = i[s];
                                l[r.d](e) && (l.cancel(),
                                    l(e))
                            }
                }
                ,
                e.take = function (e, n) {
                    void 0 === n && (n = b),
                        t ? e(T) : (e[r.d] = n,
                            i(),
                            o.push(e),
                            e.cancel = Object(s.Y)((function () {
                                i(),
                                    Object(s.bb)(o, e)
                            }
                            )))
                }
                ,
                e.close = a,
                e
        }
        function M() {
            var e = N()
                , t = e.put;
            return e.put = function (e) {
                e[r.f] ? t(e) : h((function () {
                    t(e)
                }
                ))
            }
                ,
                e
        }
        function D(e, t) {
            var n = e[r.a];
            Object(a.d)(n) && (t.cancel = n),
                e.then(t, (function (e) {
                    t(e, !0)
                }
                ))
        }
        var x, w = 0, P = function () {
            return ++w
        };
        function L(e) {
            e.isRunning() && e.cancel()
        }
        var k = ((x = {})[s.u] = function (e, t, n) {
            var o = t.channel
                , i = void 0 === o ? e.channel : o
                , s = t.pattern
                , c = t.maybe
                , l = function (e) {
                    e instanceof Error ? n(e, !0) : !R(e) || c ? n(e) : n(r.k)
                };
            try {
                i.take(l, Object(a.g)(s) ? O(s) : null)
            } catch (e) {
                return void n(e, !0)
            }
            n.cancel = l.cancel
        }
            ,
            x[s.q] = function (e, t, n) {
                var r = t.channel
                    , o = t.action
                    , i = t.resolve;
                h((function () {
                    var t;
                    try {
                        t = (r ? r.put : e.dispatch)(o)
                    } catch (e) {
                        return void n(e, !0)
                    }
                    i && Object(a.j)(t) ? D(t, n) : n(t)
                }
                ))
            }
            ,
            x[s.b] = function (e, t, n, r) {
                var o = r.digestEffect
                    , i = w
                    , c = Object.keys(t);
                if (0 !== c.length) {
                    var l = Object(s.V)(t, n);
                    c.forEach((function (e) {
                        o(t[e], i, l[e], e)
                    }
                    ))
                } else
                    n(Object(a.a)(t) ? [] : {})
            }
            ,
            x[s.s] = function (e, t, n, r) {
                var o = r.digestEffect
                    , i = w
                    , c = Object.keys(t)
                    , l = Object(a.a)(t) ? Object(s.W)(c.length) : {}
                    , u = {}
                    , d = !1;
                c.forEach((function (e) {
                    var t = function (t, r) {
                        d || (r || Object(s.cb)(t) ? (n.cancel(),
                            n(t, r)) : (n.cancel(),
                                d = !0,
                                l[e] = t,
                                n(l)))
                    };
                    t.cancel = s.db,
                        u[e] = t
                }
                )),
                    n.cancel = function () {
                        d || (d = !0,
                            c.forEach((function (e) {
                                return u[e].cancel()
                            }
                            )))
                    }
                    ,
                    c.forEach((function (e) {
                        d || o(t[e], i, u[e], e)
                    }
                    ))
            }
            ,
            x[s.d] = function (e, t, n, r) {
                var o = t.context
                    , i = t.fn
                    , c = t.args
                    , l = r.task;
                try {
                    var u = i.apply(o, c);
                    if (Object(a.j)(u))
                        return void D(u, n);
                    if (Object(a.e)(u))
                        return void Y(e, u, l.context, w, Object(s.T)(i), !1, n);
                    n(u)
                } catch (e) {
                    n(e, !0)
                }
            }
            ,
            x[s.C] = function (e, t, n) {
                var r = t.context
                    , o = t.fn
                    , i = t.args;
                try {
                    var s = function (e, t) {
                        Object(a.n)(e) ? n(t) : n(e, !0)
                    };
                    o.apply(r, i.concat(s)),
                        s.cancel && (n.cancel = s.cancel)
                } catch (e) {
                    n(e, !0)
                }
            }
            ,
            x[s.g] = function (e, t, n, r) {
                var o = t.context
                    , i = t.fn
                    , c = t.args
                    , l = t.detached
                    , u = r.task
                    , d = function (e) {
                        var t = e.context
                            , n = e.fn
                            , r = e.args;
                        try {
                            var o = n.apply(t, r);
                            if (Object(a.e)(o))
                                return o;
                            var i = !1;
                            return Object(s.ab)((function (e) {
                                return i ? {
                                    value: e,
                                    done: !0
                                } : (i = !0,
                                {
                                    value: o,
                                    done: !Object(a.j)(o)
                                })
                            }
                            ))
                        } catch (e) {
                            return Object(s.ab)((function () {
                                throw e
                            }
                            ))
                        }
                    }({
                        context: o,
                        fn: i,
                        args: c
                    })
                    , f = function (e, t) {
                        return e.isSagaIterator ? {
                            name: e.meta.name
                        } : Object(s.T)(t)
                    }(d, i);
                E((function () {
                    var t = Y(e, d, u.context, w, f, l, void 0);
                    l ? n(t) : t.isRunning() ? (u.queue.addTask(t),
                        n(t)) : t.isAborted() ? u.queue.abort(t.error()) : n(t)
                }
                ))
            }
            ,
            x[s.k] = function (e, t, n, r) {
                var o = r.task
                    , i = function (e, t) {
                        if (e.isRunning()) {
                            var n = {
                                task: o,
                                cb: t
                            };
                            t.cancel = function () {
                                e.isRunning() && Object(s.bb)(e.joiners, n)
                            }
                                ,
                                e.joiners.push(n)
                        } else
                            e.isAborted() ? t(e.error(), !0) : t(e.result())
                    };
                if (Object(a.a)(t)) {
                    if (0 === t.length)
                        return void n([]);
                    var c = Object(s.V)(t, n);
                    t.forEach((function (e, t) {
                        i(e, c[t])
                    }
                    ))
                } else
                    i(t, n)
            }
            ,
            x[s.L] = function (e, t, n, o) {
                var i = o.task;
                t === r.h ? L(i) : Object(a.a)(t) ? t.forEach(L) : L(t),
                    n()
            }
            ,
            x[s.t] = function (e, t, n) {
                var r = t.selector
                    , o = t.args;
                try {
                    n(r.apply(void 0, [e.getState()].concat(o)))
                } catch (e) {
                    n(e, !0)
                }
            }
            ,
            x[s.N] = function (e, t, n) {
                var r = t.pattern
                    , o = C(t.buffer)
                    , i = O(r)
                    , a = function t(n) {
                        R(n) || e.channel.take(t, i),
                            o.put(n)
                    }
                    , s = o.close;
                o.close = function () {
                    a.cancel(),
                        s()
                }
                    ,
                    e.channel.take(a, i),
                    n(o)
            }
            ,
            x[s.P] = function (e, t, n, r) {
                n(r.task.isCancelled())
            }
            ,
            x[s.Q] = function (e, t, n) {
                t.flush(n)
            }
            ,
            x[s.h] = function (e, t, n, r) {
                n(r.task.context[t])
            }
            ,
            x[s.R] = function (e, t, n, r) {
                var o = r.task;
                Object(s.Z)(o.context, t),
                    n()
            }
            ,
            x);
        function j(e, t) {
            return e + "?" + t
        }
        function F(e) {
            var t = e.name
                , n = e.location;
            return n ? t + "  " + j(n.fileName, n.lineNumber) : t
        }
        var U = null
            , W = []
            , G = function () {
                U = null,
                    W.length = 0
            }
            , B = function () {
                var e, t, n, r, o = W[0], i = W.slice(1), a = o.crashedEffect ? (e = o.crashedEffect,
                    (t = Object(s.fb)(e)) ? t.code + "  " + j(t.fileName, t.lineNumber) : "") : null;
                return ["The above error occurred in task " + F(o.meta) + (a ? " \n when executing effect " + a : "")].concat(i.map((function (e) {
                    return "    created by " + F(e.meta)
                }
                )), [(n = W,
                    r = Object(s.eb)((function (e) {
                        return e.cancelledTasks
                    }
                    ), n),
                    r.length ? ["Tasks cancelled due to error:"].concat(r).join("\n") : "")]).join("\n")
            };
        function H(e, t, n, o, i, a, c) {
            var l;
            void 0 === c && (c = s.db);
            var d, f, p = 0, h = null, E = [], _ = Object.create(n), v = function (e, t, n) {
                var r, o = [], i = !1;
                function a(e) {
                    t(),
                        l(),
                        n(e, !0)
                }
                function c(t) {
                    o.push(t),
                        t.cont = function (c, l) {
                            i || (Object(s.bb)(o, t),
                                t.cont = s.db,
                                l ? a(c) : (t === e && (r = c),
                                    o.length || (i = !0,
                                        n(r))))
                        }
                }
                function l() {
                    i || (i = !0,
                        o.forEach((function (e) {
                            e.cont = s.db,
                                e.cancel()
                        }
                        )),
                        o = [])
                }
                return c(e),
                {
                    addTask: c,
                    cancelAll: l,
                    abort: a,
                    getTasks: function () {
                        return o
                    }
                }
            }(t, (function () {
                E.push.apply(E, v.getTasks().map((function (e) {
                    return e.meta.name
                }
                )))
            }
            ), S);
            function S(t, n) {
                if (n) {
                    if (p = 2,
                        (a = {
                            meta: i,
                            cancelledTasks: E
                        }).crashedEffect = U,
                        W.push(a),
                        y.isRoot) {
                        var o = B();
                        G(),
                            e.onError(t, {
                                sagaStack: o
                            })
                    }
                    f = t,
                        h && h.reject(t)
                } else
                    t === r.j ? p = 1 : 1 !== p && (p = 3),
                        d = t,
                        h && h.resolve(t);
                var a;
                y.cont(t, n),
                    y.joiners.forEach((function (e) {
                        e.cb(t, n)
                    }
                    )),
                    y.joiners = null
            }
            var y = ((l = {})[r.i] = !0,
                l.id = o,
                l.meta = i,
                l.isRoot = a,
                l.context = _,
                l.joiners = [],
                l.queue = v,
                l.cancel = function () {
                    0 === p && (p = 1,
                        v.cancelAll(),
                        S(r.j, !1))
                }
                ,
                l.cont = c,
                l.end = S,
                l.setContext = function (e) {
                    Object(s.Z)(_, e)
                }
                ,
                l.toPromise = function () {
                    return h ? h.promise : (h = u(),
                        2 === p ? h.reject(f) : 0 !== p && h.resolve(d),
                        h.promise)
                }
                ,
                l.isRunning = function () {
                    return 0 === p
                }
                ,
                l.isCancelled = function () {
                    return 1 === p || 0 === p && 1 === t.status
                }
                ,
                l.isAborted = function () {
                    return 2 === p
                }
                ,
                l.result = function () {
                    return d
                }
                ,
                l.error = function () {
                    return f
                }
                ,
                l);
            return y
        }
        function Y(e, t, n, o, i, c, l) {
            var u = e.finalizeRunEffect((function (t, n, o) {
                if (Object(a.j)(t))
                    D(t, o);
                else if (Object(a.e)(t))
                    Y(e, t, f.context, n, i, !1, o);
                else if (t && t[r.c]) {
                    (0,
                        k[t.type])(e, t.payload, o, p)
                } else
                    o(t)
            }
            ));
            h.cancel = s.db;
            var d = {
                meta: i,
                cancel: function () {
                    0 === d.status && (d.status = 1,
                        h(r.j))
                },
                status: 0
            }
                , f = H(e, d, n, o, i, c, l)
                , p = {
                    task: f,
                    digestEffect: E
                };
            return l && (l.cancel = f.cancel),
                h(),
                f;
            function h(e, n) {
                try {
                    var i;
                    n ? (i = t.throw(e),
                        G()) : Object(s.gb)(e) ? (d.status = 1,
                            h.cancel(),
                            i = Object(a.d)(t.return) ? t.return(r.j) : {
                                done: !0,
                                value: r.j
                            }) : i = Object(s.hb)(e) ? Object(a.d)(t.return) ? t.return() : {
                                done: !0
                            } : t.next(e),
                        i.done ? (1 !== d.status && (d.status = 3),
                            d.cont(i.value)) : E(i.value, o, h)
                } catch (e) {
                    if (1 === d.status)
                        throw e;
                    d.status = 2,
                        d.cont(e, !0)
                }
            }
            function E(t, n, r, o) {
                void 0 === o && (o = "");
                var i, a = P();
                function c(n, o) {
                    i || (i = !0,
                        r.cancel = s.db,
                        e.sagaMonitor && (o ? e.sagaMonitor.effectRejected(a, n) : e.sagaMonitor.effectResolved(a, n)),
                        o && function (e) {
                            U = e
                        }(t),
                        r(n, o))
                }
                e.sagaMonitor && e.sagaMonitor.effectTriggered({
                    effectId: a,
                    parentEffectId: n,
                    label: o,
                    effect: t
                }),
                    c.cancel = s.db,
                    r.cancel = function () {
                        i || (i = !0,
                            c.cancel(),
                            c.cancel = s.db,
                            e.sagaMonitor && e.sagaMonitor.effectCancelled(a))
                    }
                    ,
                    u(t, a, c)
            }
        }
        function z(e, t) {
            var n = e.channel
                , r = void 0 === n ? M() : n
                , o = e.dispatch
                , i = e.getState
                , a = e.context
                , l = void 0 === a ? {} : a
                , u = e.sagaMonitor
                , d = e.effectMiddlewares
                , f = e.onError
                , p = void 0 === f ? s.c : f;
            for (var h = arguments.length, _ = new Array(h > 2 ? h - 2 : 0), v = 2; v < h; v++)
                _[v - 2] = arguments[v];
            var S = t.apply(void 0, _);
            var y, g = P();
            if (u && (u.rootSagaStarted = u.rootSagaStarted || s.db,
                u.effectTriggered = u.effectTriggered || s.db,
                u.effectResolved = u.effectResolved || s.db,
                u.effectRejected = u.effectRejected || s.db,
                u.effectCancelled = u.effectCancelled || s.db,
                u.actionDispatched = u.actionDispatched || s.db,
                u.rootSagaStarted({
                    effectId: g,
                    saga: t,
                    args: _
                })),
                d) {
                var m = c.compose.apply(void 0, d);
                y = function (e) {
                    return function (t, n, r) {
                        return m((function (t) {
                            return e(t, n, r)
                        }
                        ))(t)
                    }
                }
            } else
                y = s.f;
            var A = {
                channel: r,
                dispatch: Object(s.e)(o),
                getState: i,
                sagaMonitor: u,
                onError: p,
                finalizeRunEffect: y
            };
            return E((function () {
                var e = Y(A, S, l, g, Object(s.T)(t), !0, void 0);
                return u && u.effectResolved(g, e),
                    e
            }
            ))
        }
        var V = function (e) {
            var t, n = void 0 === e ? {} : e, r = n.context, a = void 0 === r ? {} : r, c = n.channel, l = void 0 === c ? M() : c, u = n.sagaMonitor, d = Object(i.a)(n, ["context", "channel", "sagaMonitor"]);
            function f(e) {
                var n = e.getState
                    , r = e.dispatch;
                return t = z.bind(null, Object(o.a)({}, d, {
                    context: a,
                    channel: l,
                    dispatch: r,
                    getState: n,
                    sagaMonitor: u
                })),
                    function (e) {
                        return function (t) {
                            u && u.actionDispatched && u.actionDispatched(t);
                            var n = e(t);
                            return l.put(t),
                                n
                        }
                    }
            }
            return f.run = function () {
                return t.apply(void 0, arguments)
            }
                ,
                f.setContext = function (e) {
                    Object(s.Z)(a, e)
                }
                ,
                f
        };
        n.d(t, "CANCEL", (function () {
            return r.a
        }
        )),
            n.d(t, "SAGA_LOCATION", (function () {
                return r.g
            }
            )),
            n.d(t, "buffers", (function () {
                return s.i
            }
            )),
            n.d(t, "detach", (function () {
                return s.j
            }
            )),
            n.d(t, "END", (function () {
                return T
            }
            )),
            n.d(t, "channel", (function () {
                return C
            }
            )),
            n.d(t, "eventChannel", (function () {
                return I
            }
            )),
            n.d(t, "isEnd", (function () {
                return R
            }
            )),
            n.d(t, "multicastChannel", (function () {
                return N
            }
            )),
            n.d(t, "runSaga", (function () {
                return z
            }
            )),
            n.d(t, "stdChannel", (function () {
                return M
            }
            ));
        t.default = V
    },
    67: function (e, t, n) {
        "use strict";
        let r, o;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.clientUnixTimeLabel = t.heartbeatSequenceLabel = t.secSinceBootLabel = t.secSinceLastLabel = t.eventSequenceLabel = t.bootSequenceLabel = t.appSequenceLabel = t.AslStat = t.AslState = void 0,
            t.AslState = r,
            function (e) {
                e[e.Invalid = 0] = "Invalid",
                    e[e.TestState = 1] = "TestState",
                    e[e.BuildNumber = 2] = "BuildNumber",
                    e[e.AslEventSequence = 3] = "AslEventSequence",
                    e[e.AslEventLastEpoch = 4] = "AslEventLastEpoch",
                    e[e.LeftOverDataUploaded = 5] = "LeftOverDataUploaded",
                    e[e.PrevBuildDataUploaded = 6] = "PrevBuildDataUploaded",
                    e[e.PigeonEventsOutstanding = 7] = "PigeonEventsOutstanding",
                    e[e.HeartbeatEventsOutstanding = 8] = "HeartbeatEventsOutstanding",
                    e[e.AppStartEventsOutstanding = 9] = "AppStartEventsOutstanding",
                    e[e.PerformanceEventsOutstanding = 10] = "PerformanceEventsOutstanding",
                    e[e.InteractionEventsOutstanding = 11] = "InteractionEventsOutstanding",
                    e[e.MainProcessOutstanding = 12] = "MainProcessOutstanding",
                    e[e.RsysRtcOutstanding = 13] = "RsysRtcOutstanding",
                    e[e.ZenonRtcOutstanding = 14] = "ZenonRtcOutstanding",
                    e[e.CrashReporterLastReport = 15] = "CrashReporterLastReport",
                    e[e.AppInitializing = 16] = "AppInitializing",
                    e[e.AppInteractive = 17] = "AppInteractive",
                    e[e.AppQuitting = 18] = "AppQuitting",
                    e[e.AppInFocus = 19] = "AppInFocus",
                    e[e.RsysInCallContacting = 20] = "RsysInCallContacting",
                    e[e.RsysInCallRingingIncoming = 21] = "RsysInCallRingingIncoming",
                    e[e.RsysInCallRingingOutgoing = 22] = "RsysInCallRingingOutgoing",
                    e[e.RsysInCallConnecting = 23] = "RsysInCallConnecting",
                    e[e.RsysInCallPendingApproval = 24] = "RsysInCallPendingApproval",
                    e[e.RsysInCallConnected = 25] = "RsysInCallConnected",
                    e[e.AppVisible = 26] = "AppVisible",
                    e[e.AppSequence = 27] = "AppSequence",
                    e[e.CurrentBootId = 28] = "CurrentBootId",
                    e[e.LastBootId = 29] = "LastBootId",
                    e[e.LastSnapshotEpoch = 30] = "LastSnapshotEpoch",
                    e[e.SecSinceBoot = 31] = "SecSinceBoot",
                    e[e.CrashReporterLastUpload = 32] = "CrashReporterLastUpload",
                    e[e.CrashReporterChecks = 33] = "CrashReporterChecks",
                    e[e.StateCount = 34] = "StateCount",
                    e[e.StateMax = 128] = "StateMax"
            }(r || (t.AslState = r = {})),
            t.AslStat = o,
            function (e) {
                e[e.Invalid = 0] = "Invalid",
                    e[e.TestStat = 1] = "TestStat",
                    e[e.AslOpened = 2] = "AslOpened",
                    e[e.AslEventErrors = 3] = "AslEventErrors",
                    e[e.AslEventContextErrors = 4] = "AslEventContextErrors",
                    e[e.AslPrevBuildFileErrors = 5] = "AslPrevBuildFileErrors",
                    e[e.AslPrevBuildDataErrors = 6] = "AslPrevBuildDataErrors",
                    e[e.AslPigeonHandlingErrors = 7] = "AslPigeonHandlingErrors",
                    e[e.PigeonEventsQueued = 8] = "PigeonEventsQueued",
                    e[e.PigeonEventsSent = 9] = "PigeonEventsSent",
                    e[e.PigeonEventsDropped = 10] = "PigeonEventsDropped",
                    e[e.HeartbeatEventsSent = 11] = "HeartbeatEventsSent",
                    e[e.HeartbeatEventsDropped = 12] = "HeartbeatEventsDropped",
                    e[e.AppStartEventsSent = 13] = "AppStartEventsSent",
                    e[e.AppStartEventsDropped = 14] = "AppStartEventsDropped",
                    e[e.PerformanceEventsSent = 15] = "PerformanceEventsSent",
                    e[e.PerformanceEventsDropped = 16] = "PerformanceEventsDropped",
                    e[e.InteractionEventsSent = 17] = "InteractionEventsSent",
                    e[e.InteractionEventsDropped = 18] = "InteractionEventsDropped",
                    e[e.MainProcessStart = 19] = "MainProcessStart",
                    e[e.MainProcessQuit = 20] = "MainProcessQuit",
                    e[e.MainProcessQuitOnShutdown = 21] = "MainProcessQuitOnShutdown",
                    e[e.MainProcessAbnormalDeath = 22] = "MainProcessAbnormalDeath",
                    e[e.MainProcessAbnormalDeathInRsysRtc = 23] = "MainProcessAbnormalDeathInRsysRtc",
                    e[e.MainProcessAbnormalDeathInZenonRtc = 24] = "MainProcessAbnormalDeathInZenonRtc",
                    e[e.RenderProcessStart = 25] = "RenderProcessStart",
                    e[e.RenderProcessAbnormalDeath = 26] = "RenderProcessAbnormalDeath",
                    e[e.GpuProcessAbnormalDeath = 27] = "GpuProcessAbnormalDeath",
                    e[e.RsysRtcEntered = 28] = "RsysRtcEntered",
                    e[e.RsysRtcExit = 29] = "RsysRtcExit",
                    e[e.RsysRtcLogCrash = 30] = "RsysRtcLogCrash",
                    e[e.RsysRtcOutOfSyncCallEnded = 31] = "RsysRtcOutOfSyncCallEnded",
                    e[e.ZenonRtcEntered = 32] = "ZenonRtcEntered",
                    e[e.ZenonRtcExit = 33] = "ZenonRtcExit",
                    e[e.ZenonRtcCrashed = 34] = "ZenonRtcCrashed",
                    e[e.ZenonRtcLogCrash = 35] = "ZenonRtcLogCrash",
                    e[e.AbortSignalReceived = 36] = "AbortSignalReceived",
                    e[e.AbortSignalReceivedNoUEFFound = 37] = "AbortSignalReceivedNoUEFFound",
                    e[e.SingleInstanceLockFailed = 38] = "SingleInstanceLockFailed",
                    e[e.CrashReporterUploads = 39] = "CrashReporterUploads",
                    e[e.BreakpadUploads = 40] = "BreakpadUploads",
                    e[e.BreakpadUploadAttempts = 41] = "BreakpadUploadAttempts",
                    e[e.ElectronJSCrashes = 42] = "ElectronJSCrashes",
                    e[e.ElectronJSCrashesMainUncaught = 43] = "ElectronJSCrashesMainUncaught",
                    e[e.ElectronJSCrashUploads = 44] = "ElectronJSCrashUploads",
                    e[e.ElectronJSCrashUploadAttempts = 45] = "ElectronJSCrashUploadAttempts",
                    e[e.ElectronJSCrashUploadBadResponse = 46] = "ElectronJSCrashUploadBadResponse",
                    e[e.ElectronJSCrashUploadError = 47] = "ElectronJSCrashUploadError",
                    e[e.RNJSCrashes = 48] = "RNJSCrashes",
                    e[e.RNJSCrashesSaved = 49] = "RNJSCrashesSaved",
                    e[e.RNJSCrashUploads = 50] = "RNJSCrashUploads",
                    e[e.RNJSCrashUploadAttempts = 51] = "RNJSCrashUploadAttempts",
                    e[e.RNJSCrashUploadBadResponse = 52] = "RNJSCrashUploadBadResponse",
                    e[e.RNJSCrashUploadError = 53] = "RNJSCrashUploadError",
                    e[e.RNJSSoftErrors = 54] = "RNJSSoftErrors",
                    e[e.RNJSSoftErrorsSaved = 55] = "RNJSSoftErrorsSaved",
                    e[e.RNJSSoftErrorUploads = 56] = "RNJSSoftErrorUploads",
                    e[e.RNJSSoftErrorUploadAttempts = 57] = "RNJSSoftErrorUploadAttempts",
                    e[e.RNJSSoftErrorUploadBadResponse = 58] = "RNJSSoftErrorUploadBadResponse",
                    e[e.RNJSSoftErrorUploadError = 59] = "RNJSSoftErrorUploadError",
                    e[e.SentMessages = 60] = "SentMessages",
                    e[e.MoreMessagesRequested = 61] = "MoreMessagesRequested",
                    e[e.MessageThreadSwitched = 62] = "MessageThreadSwitched",
                    e[e.AppFocusCount = 63] = "AppFocusCount",
                    e[e.AppFocusTime = 64] = "AppFocusTime",
                    e[e.AppFocusSessions = 65] = "AppFocusSessions",
                    e[e.RsysRtcTime = 66] = "RsysRtcTime",
                    e[e.ZenonRtcTime = 67] = "ZenonRtcTime",
                    e[e.RsysRtcFailed = 68] = "RsysRtcFailed",
                    e[e.ZenonRtcFailed = 69] = "ZenonRtcFailed",
                    e[e.AppStateChanges = 70] = "AppStateChanges",
                    e[e.AppInitializingTime = 71] = "AppInitializingTime",
                    e[e.AppInteractiveTime = 72] = "AppInteractiveTime",
                    e[e.AppQuittingTime = 73] = "AppQuittingTime",
                    e[e.AppInitializingCount = 74] = "AppInitializingCount",
                    e[e.AppInteractiveCount = 75] = "AppInteractiveCount",
                    e[e.AppQuittingCount = 76] = "AppQuittingCount",
                    e[e.AppDeathLaunching = 77] = "AppDeathLaunching",
                    e[e.AppDeathInitializing = 78] = "AppDeathInitializing",
                    e[e.AppDeathInteractive = 79] = "AppDeathInteractive",
                    e[e.AppDeathQuitting = 80] = "AppDeathQuitting",
                    e[e.AppDeathInFocus = 81] = "AppDeathInFocus",
                    e[e.RsysInCallContactingTime = 82] = "RsysInCallContactingTime",
                    e[e.RsysInCallRingingIncomingTime = 83] = "RsysInCallRingingIncomingTime",
                    e[e.RsysInCallRingingOutgoingTime = 84] = "RsysInCallRingingOutgoingTime",
                    e[e.RsysInCallConnectingTime = 85] = "RsysInCallConnectingTime",
                    e[e.RsysInCallPendingApprovalTime = 86] = "RsysInCallPendingApprovalTime",
                    e[e.RsysInCallConnectedTime = 87] = "RsysInCallConnectedTime",
                    e[e.RsysInCallStateChanges = 88] = "RsysInCallStateChanges",
                    e[e.RsysInCallContactingCount = 89] = "RsysInCallContactingCount",
                    e[e.RsysInCallRingingIncomingCount = 90] = "RsysInCallRingingIncomingCount",
                    e[e.RsysInCallRingingOutgoingCount = 91] = "RsysInCallRingingOutgoingCount",
                    e[e.RsysInCallConnectingCount = 92] = "RsysInCallConnectingCount",
                    e[e.RsysInCallPendingApprovalCount = 93] = "RsysInCallPendingApprovalCount",
                    e[e.RsysInCallConnectedCount = 94] = "RsysInCallConnectedCount",
                    e[e.AppDeathInRsysContacting = 95] = "AppDeathInRsysContacting",
                    e[e.AppDeathInRsysRingingIncoming = 96] = "AppDeathInRsysRingingIncoming",
                    e[e.AppDeathInRsysRingingOutgoing = 97] = "AppDeathInRsysRingingOutgoing",
                    e[e.AppDeathInRsysConnecting = 98] = "AppDeathInRsysConnecting",
                    e[e.AppDeathInRsysPendingApproval = 99] = "AppDeathInRsysPendingApproval",
                    e[e.AppDeathInRsysConnected = 100] = "AppDeathInRsysConnected",
                    e[e.DialogIncomingCallCreated = 101] = "DialogIncomingCallCreated",
                    e[e.DialogIncomingRoomsCallCreated = 102] = "DialogIncomingRoomsCallCreated",
                    e[e.DialogMissedCallCreated = 103] = "DialogMissedCallCreated",
                    e[e.DialogAcceptCall = 104] = "DialogAcceptCall",
                    e[e.DialogRejectCall = 105] = "DialogRejectCall",
                    e[e.DialogReturnCall = 106] = "DialogReturnCall",
                    e[e.DialogIgnoreMissedCall = 107] = "DialogIgnoreMissedCall",
                    e[e.DialogDismiss = 108] = "DialogDismiss",
                    e[e.ShowRNCallWindowForAccept = 109] = "ShowRNCallWindowForAccept",
                    e[e.ShowRNCallWindowForCallOrJoin = 110] = "ShowRNCallWindowForCallOrJoin",
                    e[e.AppQuitOnAllWindowsClosed = 111] = "AppQuitOnAllWindowsClosed",
                    e[e.AppQuitBeforeChatReady = 112] = "AppQuitBeforeChatReady",
                    e[e.WindowCloseFromTitleBar = 113] = "WindowCloseFromTitleBar",
                    e[e.WindowCloseFromBridge = 114] = "WindowCloseFromBridge",
                    e[e.WindowClosing = 115] = "WindowClosing",
                    e[e.WindowHidingInsteadOfClose = 116] = "WindowHidingInsteadOfClose",
                    e[e.WindowContentsCrashed = 117] = "WindowContentsCrashed",
                    e[e.WindowErrorContentsCrashed = 118] = "WindowErrorContentsCrashed",
                    e[e.InboxShimmerRendered = 119] = "InboxShimmerRendered",
                    e[e.InboxLoadThreads = 120] = "InboxLoadThreads",
                    e[e.InboxThreadsLoaded = 121] = "InboxThreadsLoaded",
                    e[e.InboxLoadMessages = 122] = "InboxLoadMessages",
                    e[e.InboxMessagesLoaded = 123] = "InboxMessagesLoaded",
                    e[e.InboxInitialSyncComplete = 124] = "InboxInitialSyncComplete",
                    e[e.InboxStaleMessagesRendered = 125] = "InboxStaleMessagesRendered",
                    e[e.InboxMessagesRendered = 126] = "InboxMessagesRendered",
                    e[e.InboxCreateThreadRendered = 127] = "InboxCreateThreadRendered",
                    e[e.MainJSUncaughtException = 128] = "MainJSUncaughtException",
                    e[e.MainJSUnhandledRejection = 129] = "MainJSUnhandledRejection",
                    e[e.RendererWindowOnError = 130] = "RendererWindowOnError",
                    e[e.RendererWindowOnUnhandledRejection = 131] = "RendererWindowOnUnhandledRejection",
                    e[e.ErrorBoundaryDidCatch = 132] = "ErrorBoundaryDidCatch",
                    e[e.AppLaunchOnStartup = 133] = "AppLaunchOnStartup",
                    e[e.AslTimerOutOfPeriodRange = 134] = "AslTimerOutOfPeriodRange",
                    e[e.AslTimeClippedToPeriodRange = 135] = "AslTimeClippedToPeriodRange",
                    e[e.AppInteractiveTimeWallClock = 136] = "AppInteractiveTimeWallClock",
                    e[e.AppFocusTimeMs = 137] = "AppFocusTimeMs",
                    e[e.AppFocusTimeWallClock = 138] = "AppFocusTimeWallClock",
                    e[e.ZenonRtcTimeMs = 139] = "ZenonRtcTimeMs",
                    e[e.RsysRtcTimeMs = 140] = "RsysRtcTimeMs",
                    e[e.AppVisibleTime = 141] = "AppVisibleTime",
                    e[e.AppVisibleTimeWallClock = 142] = "AppVisibleTimeWallClock",
                    e[e.AppVisibleCount = 143] = "AppVisibleCount",
                    e[e.AppDeathVisible = 144] = "AppDeathVisible",
                    e[e.RNWindowThreadCreated = 145] = "RNWindowThreadCreated",
                    e[e.RNWindowThreadInitialized = 146] = "RNWindowThreadInitialized",
                    e[e.RNWindowThreadQuit = 147] = "RNWindowThreadQuit",
                    e[e.RNWindowCreated = 148] = "RNWindowCreated",
                    e[e.RNWindowInitialized = 149] = "RNWindowInitialized",
                    e[e.RNWindowDestroyed = 150] = "RNWindowDestroyed",
                    e[e.RNSoundPlayStart = 151] = "RNSoundPlayStart",
                    e[e.RNSoundPlayEnd = 152] = "RNSoundPlayEnd",
                    e[e.RNSoundSetOutputDevice = 153] = "RNSoundSetOutputDevice",
                    e[e.RNSoundsMoveToNewDevice = 154] = "RNSoundsMoveToNewDevice",
                    e[e.RNRTCVideoRegistered = 155] = "RNRTCVideoRegistered",
                    e[e.RNRTCVideoFrames = 156] = "RNRTCVideoFrames",
                    e[e.RNRTCInitializeAudio = 157] = "RNRTCInitializeAudio",
                    e[e.RNRTCSetAudioInput = 158] = "RNRTCSetAudioInput",
                    e[e.RNRTCSetPreferredAudioInput = 159] = "RNRTCSetPreferredAudioInput",
                    e[e.RNRTCSetAudioOutput = 160] = "RNRTCSetAudioOutput",
                    e[e.RNRTCSetPreferredAudioOutput = 161] = "RNRTCSetPreferredAudioOutput",
                    e[e.RNRTCInitializeCamera = 162] = "RNRTCInitializeCamera",
                    e[e.RNRTCSetCamera = 163] = "RNRTCSetCamera",
                    e[e.RNRTCSetPreferredCamera = 164] = "RNRTCSetPreferredCamera",
                    e[e.RNRTCSubmitStarRating1 = 165] = "RNRTCSubmitStarRating1",
                    e[e.RNRTCSubmitStarRating2 = 166] = "RNRTCSubmitStarRating2",
                    e[e.RNRTCSubmitStarRating3 = 167] = "RNRTCSubmitStarRating3",
                    e[e.RNRTCSubmitStarRating4 = 168] = "RNRTCSubmitStarRating4",
                    e[e.RNRTCSubmitStarRating5 = 169] = "RNRTCSubmitStarRating5",
                    e[e.RNRTCSubmitStarRatingOther = 170] = "RNRTCSubmitStarRatingOther",
                    e[e.RNRTCEffectEnabled = 171] = "RNRTCEffectEnabled",
                    e[e.RNRTCScreenShareEnabled = 172] = "RNRTCScreenShareEnabled",
                    e[e.RNRTCRoomScreenShareEnabled = 173] = "RNRTCRoomScreenShareEnabled",
                    e[e.RNRTCSceneCompositionEnabled = 174] = "RNRTCSceneCompositionEnabled",
                    e[e.RNRTCSelfieView = 175] = "RNRTCSelfieView",
                    e[e.RNRTCScreenShareView = 176] = "RNRTCScreenShareView",
                    e[e.RNRTCSettingsView = 177] = "RNRTCSettingsView",
                    e[e.RNRTCEffectsPickerView = 178] = "RNRTCEffectsPickerView",
                    e[e.RNRTCPresenterLayoutView = 179] = "RNRTCPresenterLayoutView",
                    e[e.FeedbackFormShown = 180] = "FeedbackFormShown",
                    e[e.FeedbackFormReporting = 181] = "FeedbackFormReporting",
                    e[e.FeedbackFormUploadSuccess = 182] = "FeedbackFormUploadSuccess",
                    e[e.FeedbackFormUploadError = 183] = "FeedbackFormUploadError",
                    e[e.WindowRequestCloseFromTitleBar = 184] = "WindowRequestCloseFromTitleBar",
                    e[e.DialogIncomingCallDismissed = 185] = "DialogIncomingCallDismissed",
                    e[e.DialogIncomingRoomCallDismissed = 186] = "DialogIncomingRoomCallDismissed",
                    e[e.DialogRejectCallByClosing = 187] = "DialogRejectCallByClosing",
                    e[e.DialogMissedCallDismissed = 188] = "DialogMissedCallDismissed",
                    e[e.DialogIgnoreMissedCallByClosing = 189] = "DialogIgnoreMissedCallByClosing",
                    e[e.RNJSStart = 190] = "RNJSStart",
                    e[e.RNJSStartWindow = 191] = "RNJSStartWindow",
                    e[e.RNRTCCallEndedView = 192] = "RNRTCCallEndedView",
                    e[e.RNRTCRoomFailedView = 193] = "RNRTCRoomFailedView",
                    e[e.RNRTCSpeakerView = 194] = "RNRTCSpeakerView",
                    e[e.RNRTCGridView = 195] = "RNRTCGridView",
                    e[e.RNRTCMosaicGridView = 196] = "RNRTCMosaicGridView",
                    e[e.RNRTCCowatchView = 197] = "RNRTCCowatchView",
                    e[e.RNRTCCallIntermediateView = 198] = "RNRTCCallIntermediateView",
                    e[e.AppDeathDetectedAfterSystemReboot = 199] = "AppDeathDetectedAfterSystemReboot",
                    e[e.SecsToRelaunch = 200] = "SecsToRelaunch",
                    e[e.SecsToRelaunchAfterAppDeath = 201] = "SecsToRelaunchAfterAppDeath",
                    e[e.CrashReporterReports = 202] = "CrashReporterReports",
                    e[e.CrashReporterUploadAttempts = 203] = "CrashReporterUploadAttempts",
                    e[e.CrashReporterInitialReports = 204] = "CrashReporterInitialReports",
                    e[e.MainProcessQuitForUpdate = 205] = "MainProcessQuitForUpdate",
                    e[e.AnalyticsEmptyBatch = 206] = "AnalyticsEmptyBatch",
                    e[e.AnalyticsBadBatch = 207] = "AnalyticsBadBatch",
                    e[e.AnalyticsFailedUploadAttempt = 208] = "AnalyticsFailedUploadAttempt",
                    e[e.AppRelaunchQueuedForLogout = 209] = "AppRelaunchQueuedForLogout",
                    e[e.AppRelaunchQueuedForError = 210] = "AppRelaunchQueuedForError",
                    e[e.AppRelaunchQueued = 211] = "AppRelaunchQueued",
                    e[e.AppRelaunching = 212] = "AppRelaunching",
                    e[e.AppRelaunched = 213] = "AppRelaunched",
                    e[e.StatCount = 214] = "StatCount",
                    e[e.StatMax = 320] = "StatMax"
            }(o || (t.AslStat = o = {}));
        t.appSequenceLabel = "AppSequence";
        t.bootSequenceLabel = "BootSequence";
        t.eventSequenceLabel = "EventSequence";
        t.secSinceLastLabel = "SecSinceLast";
        t.secSinceBootLabel = "SecSinceBoot";
        t.heartbeatSequenceLabel = "HeartbeatSequence";
        t.clientUnixTimeLabel = "ClientUnixTime"
    },
    68: function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t)
        }
    },
    7: function (e, t, n) {
        "use strict";
        n.d(t, "a", (function () {
            return ae
        }
        )),
            n.d(t, "b", (function () {
                return k
            }
            )),
            n.d(t, "c", (function () {
                return S
            }
            )),
            n.d(t, "d", (function () {
                return F
            }
            )),
            n.d(t, "e", (function () {
                return m
            }
            )),
            n.d(t, "f", (function () {
                return l
            }
            )),
            n.d(t, "g", (function () {
                return W
            }
            )),
            n.d(t, "h", (function () {
                return K
            }
            )),
            n.d(t, "i", (function () {
                return w
            }
            )),
            n.d(t, "j", (function () {
                return $
            }
            )),
            n.d(t, "k", (function () {
                return G
            }
            )),
            n.d(t, "l", (function () {
                return Q
            }
            )),
            n.d(t, "m", (function () {
                return ce
            }
            )),
            n.d(t, "n", (function () {
                return de
            }
            )),
            n.d(t, "o", (function () {
                return ie
            }
            )),
            n.d(t, "p", (function () {
                return pe
            }
            )),
            n.d(t, "q", (function () {
                return L
            }
            )),
            n.d(t, "r", (function () {
                return D
            }
            )),
            n.d(t, "s", (function () {
                return j
            }
            )),
            n.d(t, "t", (function () {
                return H
            }
            )),
            n.d(t, "u", (function () {
                return P
            }
            )),
            n.d(t, "v", (function () {
                return Se
            }
            )),
            n.d(t, "w", (function () {
                return re
            }
            )),
            n.d(t, "x", (function () {
                return X
            }
            )),
            n.d(t, "y", (function () {
                return Z
            }
            )),
            n.d(t, "z", (function () {
                return ee
            }
            )),
            n.d(t, "A", (function () {
                return te
            }
            )),
            n.d(t, "B", (function () {
                return ne
            }
            )),
            n.d(t, "C", (function () {
                return U
            }
            )),
            n.d(t, "D", (function () {
                return se
            }
            )),
            n.d(t, "E", (function () {
                return le
            }
            )),
            n.d(t, "F", (function () {
                return ue
            }
            )),
            n.d(t, "G", (function () {
                return fe
            }
            )),
            n.d(t, "H", (function () {
                return he
            }
            )),
            n.d(t, "I", (function () {
                return Ee
            }
            )),
            n.d(t, "J", (function () {
                return _e
            }
            )),
            n.d(t, "K", (function () {
                return ve
            }
            )),
            n.d(t, "L", (function () {
                return B
            }
            )),
            n.d(t, "M", (function () {
                return u
            }
            )),
            n.d(t, "N", (function () {
                return Y
            }
            )),
            n.d(t, "O", (function () {
                return x
            }
            )),
            n.d(t, "P", (function () {
                return z
            }
            )),
            n.d(t, "Q", (function () {
                return V
            }
            )),
            n.d(t, "R", (function () {
                return q
            }
            )),
            n.d(t, "S", (function () {
                return y
            }
            )),
            n.d(t, "T", (function () {
                return R
            }
            )),
            n.d(t, "U", (function () {
                return s
            }
            )),
            n.d(t, "V", (function () {
                return T
            }
            )),
            n.d(t, "W", (function () {
                return g
            }
            )),
            n.d(t, "X", (function () {
                return M
            }
            )),
            n.d(t, "Y", (function () {
                return h
            }
            )),
            n.d(t, "Z", (function () {
                return d
            }
            )),
            n.d(t, "ab", (function () {
                return v
            }
            )),
            n.d(t, "bb", (function () {
                return p
            }
            )),
            n.d(t, "cb", (function () {
                return O
            }
            )),
            n.d(t, "db", (function () {
                return c
            }
            )),
            n.d(t, "eb", (function () {
                return f
            }
            )),
            n.d(t, "fb", (function () {
                return C
            }
            )),
            n.d(t, "gb", (function () {
                return b
            }
            )),
            n.d(t, "hb", (function () {
                return A
            }
            ));
        var r = n(20)
            , o = n(34)
            , i = n(14)
            , a = n(234)
            , s = function (e) {
                return function () {
                    return e
                }
            }(!0)
            , c = function () { };
        var l = function (e) {
            return e
        };
        "function" == typeof Symbol && Symbol.asyncIterator && Symbol.asyncIterator;
        function u(e, t, n) {
            if (!t(e))
                throw new Error(n)
        }
        var d = function (e, t) {
            Object(o.a)(e, t),
                Object.getOwnPropertySymbols && Object.getOwnPropertySymbols(t).forEach((function (n) {
                    e[n] = t[n]
                }
                ))
        }
            , f = function (e, t) {
                var n;
                return (n = []).concat.apply(n, t.map(e))
            };
        function p(e, t) {
            var n = e.indexOf(t);
            n >= 0 && e.splice(n, 1)
        }
        function h(e) {
            var t = !1;
            return function () {
                t || (t = !0,
                    e())
            }
        }
        var E = function (e) {
            throw e
        }
            , _ = function (e) {
                return {
                    value: e,
                    done: !0
                }
            };
        function v(e, t, n) {
            void 0 === t && (t = E),
                void 0 === n && (n = "iterator");
            var r = {
                meta: {
                    name: n
                },
                next: e,
                throw: t,
                return: _,
                isSagaIterator: !0
            };
            return "undefined" != typeof Symbol && (r[Symbol.iterator] = function () {
                return r
            }
            ),
                r
        }
        function S(e, t) {
            var n = t.sagaStack;
            console.error(e),
                console.error(n)
        }
        var y = function (e) {
            return new Error("\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project's github repo.\n  Error: " + e + "\n")
        }
            , g = function (e) {
                return Array.apply(null, new Array(e))
            }
            , m = function (e) {
                return function (t) {
                    return e(Object.defineProperty(t, r.f, {
                        value: !0
                    }))
                }
            }
            , A = function (e) {
                return e === r.k
            }
            , b = function (e) {
                return e === r.j
            }
            , O = function (e) {
                return A(e) || b(e)
            };
        function T(e, t) {
            var n = Object.keys(e)
                , r = n.length;
            var o, a = 0, s = Object(i.a)(e) ? g(r) : {}, l = {};
            return n.forEach((function (e) {
                var n = function (n, i) {
                    o || (i || O(n) ? (t.cancel(),
                        t(n, i)) : (s[e] = n,
                            ++a === r && (o = !0,
                                t(s))))
                };
                n.cancel = c,
                    l[e] = n
            }
            )),
                t.cancel = function () {
                    o || (o = !0,
                        n.forEach((function (e) {
                            return l[e].cancel()
                        }
                        )))
                }
                ,
                l
        }
        function R(e) {
            return {
                name: e.name || "anonymous",
                location: C(e)
            }
        }
        function C(e) {
            return e[r.g]
        }
        var I = {
            isEmpty: s,
            put: c,
            take: c
        };
        function N(e, t) {
            void 0 === e && (e = 10);
            var n = new Array(e)
                , r = 0
                , o = 0
                , i = 0
                , a = function (t) {
                    n[o] = t,
                        o = (o + 1) % e,
                        r++
                }
                , s = function () {
                    if (0 != r) {
                        var t = n[i];
                        return n[i] = null,
                            r--,
                            i = (i + 1) % e,
                            t
                    }
                }
                , c = function () {
                    for (var e = []; r;)
                        e.push(s());
                    return e
                };
            return {
                isEmpty: function () {
                    return 0 == r
                },
                put: function (s) {
                    var l;
                    if (r < e)
                        a(s);
                    else
                        switch (t) {
                            case 1:
                                throw new Error("Channel's Buffer overflow!");
                            case 3:
                                n[o] = s,
                                    i = o = (o + 1) % e;
                                break;
                            case 4:
                                l = 2 * e,
                                    n = c(),
                                    r = n.length,
                                    o = n.length,
                                    i = 0,
                                    n.length = l,
                                    e = l,
                                    a(s)
                        }
                },
                take: s,
                flush: c
            }
        }
        var M = function () {
            return I
        }
            , D = function (e) {
                return N(e, 3)
            }
            , x = function (e) {
                return N(e, 4)
            }
            , w = Object.freeze({
                __proto__: null,
                none: M,
                fixed: function (e) {
                    return N(e, 1)
                },
                dropping: function (e) {
                    return N(e, 2)
                },
                sliding: D,
                expanding: x
            })
            , P = "TAKE"
            , L = "PUT"
            , k = "ALL"
            , j = "RACE"
            , F = "CALL"
            , U = "CPS"
            , W = "FORK"
            , G = "JOIN"
            , B = "CANCEL"
            , H = "SELECT"
            , Y = "ACTION_CHANNEL"
            , z = "CANCELLED"
            , V = "FLUSH"
            , K = "GET_CONTEXT"
            , q = "SET_CONTEXT"
            , X = Object.freeze({
                __proto__: null,
                TAKE: P,
                PUT: L,
                ALL: k,
                RACE: j,
                CALL: F,
                CPS: U,
                FORK: W,
                JOIN: G,
                CANCEL: B,
                SELECT: H,
                ACTION_CHANNEL: Y,
                CANCELLED: z,
                FLUSH: V,
                GET_CONTEXT: K,
                SET_CONTEXT: q
            })
            , J = function (e, t) {
                var n;
                return (n = {})[r.c] = !0,
                    n.combinator = !1,
                    n.type = e,
                    n.payload = t,
                    n
            }
            , $ = function (e) {
                return J(W, Object(o.a)({}, e.payload, {
                    detached: !0
                }))
            };
        function Q(e, t) {
            return void 0 === e && (e = "*"),
                Object(i.i)(e) ? J(P, {
                    pattern: e
                }) : Object(i.f)(e) && Object(i.g)(t) && Object(i.i)(t) ? J(P, {
                    channel: e,
                    pattern: t
                }) : Object(i.b)(e) ? J(P, {
                    channel: e
                }) : void 0
        }
        var Z = function () {
            var e = Q.apply(void 0, arguments);
            return e.payload.maybe = !0,
                e
        };
        function ee(e, t) {
            return Object(i.n)(t) && (t = e,
                e = void 0),
                J(L, {
                    channel: e,
                    action: t
                })
        }
        var te = function () {
            var e = ee.apply(void 0, arguments);
            return e.payload.resolve = !0,
                e
        };
        function ne(e) {
            var t = J(k, e);
            return t.combinator = !0,
                t
        }
        function re(e) {
            var t = J(j, e);
            return t.combinator = !0,
                t
        }
        function oe(e, t) {
            var n, r = null;
            return Object(i.d)(e) ? n = e : (Object(i.a)(e) ? (r = e[0],
                n = e[1]) : (r = e.context,
                    n = e.fn),
                r && Object(i.k)(n) && Object(i.d)(r[n]) && (n = r[n])),
            {
                context: r,
                fn: n,
                args: t
            }
        }
        function ie(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return J(F, oe(e, n))
        }
        function ae(e, t, n) {
            void 0 === n && (n = []);
            return J(F, oe([e, t], n))
        }
        function se(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return J(U, oe(e, n))
        }
        function ce(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return J(W, oe(e, n))
        }
        function le(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return $(ce.apply(void 0, [e].concat(n)))
        }
        function ue(e) {
            return J(G, e)
        }
        function de(e) {
            return void 0 === e && (e = r.h),
                J(B, e)
        }
        function fe(e) {
            void 0 === e && (e = l);
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return J(H, {
                selector: e,
                args: n
            })
        }
        function pe(e, t) {
            return J(Y, {
                pattern: e,
                buffer: t
            })
        }
        function he() {
            return J(z, {})
        }
        function Ee(e) {
            return J(V, e)
        }
        function _e(e) {
            return J(K, e)
        }
        function ve(e) {
            return J(q, e)
        }
        var Se = ie.bind(null, a.a)
    },
    74: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.waitUntillCancelled = function* () {
                yield (0,
                    i.take)("__cancelled__")
            }
            ,
            t.createRef = function (e) {
                return {
                    current: e
                }
            }
            ,
            t.getSyncChannel = function (e) {
                return (0,
                    i.call)((function* () {
                        return yield (0,
                            i.call)(a.eventChannel, t => (o.default.msys.addSyncListener(n => {
                                n ? e && !n.some(t => e.includes(t)) || t(n) : console.error("MSYS provided a NULL notification.")
                            }
                            ),
                                () => { }
                            ), a.buffers.sliding(50))
                    }
                    ))
            }
            ,
            t.getRsysChannel = function () {
                return (0,
                    i.call)((function* () {
                        return yield (0,
                            i.call)(a.eventChannel, e => (o.default.msys.addRsysListener(t => e(t)),
                                () => { }
                            ), a.buffers.sliding(50))
                    }
                    ))
            }
            ,
            t.getRnElectronChannel = function () {
                return (0,
                    i.call)((function* () {
                        return yield (0,
                            i.call)(a.eventChannel, e => (o.default.msys.addRNElectronCallback(t => e(t)),
                                () => { }
                            ), a.buffers.sliding(50))
                    }
                    ))
            }
            ,
            t.getInvalidSessionChannel = function () {
                return (0,
                    i.call)((function* () {
                        return yield (0,
                            i.call)(a.eventChannel, e => (o.default.msys.addAccessTokenInvalidListener(t => e(t)),
                                () => { }
                            ), a.buffers.sliding(50))
                    }
                    ))
            }
            ,
            t.getMqttInvalidSessionChannel = function () {
                return (0,
                    i.call)((function* () {
                        return yield (0,
                            i.call)(a.eventChannel, e => (o.default.msys.addMqttInvalidSessionListener(t => e(t)),
                                () => { }
                            ), a.buffers.sliding(50))
                    }
                    ))
            }
            ;
        var r, o = (r = n(9)) && r.__esModule ? r : {
            default: r
        }, i = n(17), a = n(64)
    },
    76: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.actionCreator = function (e, t) {
                const n = (...n) => {
                    const r = t ? t(...n) : void 0;
                    return {
                        type: e,
                        payload: r
                    }
                }
                    ;
                return n.type = e,
                    n
            }
    },
    779: function (e, t, n) {
        "use strict";
        t.decode = t.parse = n(780),
            t.encode = t.stringify = n(781)
    },
    780: function (e, t, n) {
        "use strict";
        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        e.exports = function (e, t, n, i) {
            t = t || "&",
                n = n || "=";
            var a = {};
            if ("string" != typeof e || 0 === e.length)
                return a;
            var s = /\+/g;
            e = e.split(t);
            var c = 1e3;
            i && "number" == typeof i.maxKeys && (c = i.maxKeys);
            var l = e.length;
            c > 0 && l > c && (l = c);
            for (var u = 0; u < l; ++u) {
                var d, f, p, h, E = e[u].replace(s, "%20"), _ = E.indexOf(n);
                _ >= 0 ? (d = E.substr(0, _),
                    f = E.substr(_ + 1)) : (d = E,
                        f = ""),
                    p = decodeURIComponent(d),
                    h = decodeURIComponent(f),
                    r(a, p) ? o(a[p]) ? a[p].push(h) : a[p] = [a[p], h] : a[p] = h
            }
            return a
        }
            ;
        var o = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    },
    781: function (e, t, n) {
        "use strict";
        var r = function (e) {
            switch (typeof e) {
                case "string":
                    return e;
                case "boolean":
                    return e ? "true" : "false";
                case "number":
                    return isFinite(e) ? e : "";
                default:
                    return ""
            }
        };
        e.exports = function (e, t, n, s) {
            return t = t || "&",
                n = n || "=",
                null === e && (e = void 0),
                "object" == typeof e ? i(a(e), (function (a) {
                    var s = encodeURIComponent(r(a)) + n;
                    return o(e[a]) ? i(e[a], (function (e) {
                        return s + encodeURIComponent(r(e))
                    }
                    )).join(t) : s + encodeURIComponent(r(e[a]))
                }
                )).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : ""
        }
            ;
        var o = Array.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
            ;
        function i(e, t) {
            if (e.map)
                return e.map(t);
            for (var n = [], r = 0; r < e.length; r++)
                n.push(t(e[r], r));
            return n
        }
        var a = Object.keys || function (e) {
            var t = [];
            for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t
        }
    },
    789: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.AccessDeniedError = void 0;
        var r = n(384);
        class o extends r.GraphApiError {
            static isAccessDeniedError(e) {
                return "AccessDeniedError" === e.name
            }
            constructor(e, t, n) {
                super(e, t, n),
                    this.name = "AccessDeniedError"
            }
        }
        t.AccessDeniedError = o
    },
    79: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    790: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.RtcTimeoutError = void 0;
        class r extends Error {
            static isRtcTimeoutError(e) {
                return e instanceof Error && "RtcTimeoutError" === e.name
            }
            constructor(e, t, n, r) {
                super(""),
                    this.partitionId = void 0,
                    this.storePartitionId = void 0,
                    this.redactedCookies = void 0,
                    this.name = "RtcTimeoutError",
                    this.message = `Timed out while waiting for the RTC window to inject an API. Loaded URL: ${e}.`,
                    this.partitionId = t,
                    this.storePartitionId = n,
                    this.redactedCookies = r
            }
            toJSON() {
                return {
                    name: this.name,
                    message: this.message,
                    partitionId: this.partitionId,
                    storePartitionId: this.storePartitionId,
                    redactedCookies: this.redactedCookies
                }
            }
        }
        t.RtcTimeoutError = r
    },
    791: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.RtcWindowDestroyedError = void 0;
        class r extends Error {
            constructor() {
                super(""),
                    this.name = "RtcWindowDestroyedError",
                    this.message = "Timed out while waiting for the RTC window to inject an API, and the window was destroyed."
            }
        }
        t.RtcWindowDestroyedError = r
    },
    8: function (e, t, n) {
        "use strict";
        let r, o, i, a, s, c, l;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.TraceLogFileNamePrefix = t.RtcLogFileNamePrefix = t.MsysLogFileNamePrefix = t.ArchonLogFileNamePrefix = t.LogFileNameTimestampFormat = t.RendererLogFileName = t.MainLogFileName = t.MacNotificationSetting = t.WindowsNotificationSetting = t.EmptyTincanKeyNames = t.WindowsStartupTaskState = t.RoomsBadgeType = t.StoriesAndActiveNowItemType = t.RoomJoinPermission = t.RoomInviteeType = t.RoomLinkSurface = t.RoomAudienceType = t.RoomCreationState = t.ThreadCapabilities = t.MeetupLockStatus = t.MeetupCreationErrorType = t.PaymentPasscodeState = t.TransactionType = t.PaymentActivitySearchResultStatus = t.ProductType = t.PaymentCredentialType = t.UNAUTHENTICATED_USERID = t.STICKER_DEFAULT_DIM = t.GIF_DEFAULT_DIM = t.RtcCallStatus = t.ComposerDisabledType = t.WorkForeignEntityType = t.MsysAppState = t.PortalKey = t.MsysStatsShortName = t.SyncGroupsModelIds = t.SyncGroupsSyncStatus = t.AdminMessageCTAType = t.PersistentMenuCTAType = t.AttachmentCTAType = t.AttachmentStatus = t.BlockedByViewerStatus = t.SearchSource = t.OutgoingCallSource = t.PerformanceEvents = t.MessengerThreadThemeType = t.NullstateCTAType = t.QuickReplyType = t.ContactReachabilityStatus = t.ContactTypeExact = t.ContactType = t.ThreadCannotUnsendReason = t.MessageCannotUnsendReason = t.MessageReplyStatus = t.MessageReplySourceType = t.MessageAuthorityLevel = t.MessageSendStatus = t.MessagesLoadMoreState = t.SearchResultType = t.SearchQueryStatusType = t.PresenceType = t.StickerPackLoadingState = t.HOTLIKE_STICKER_ID = t.ReplySourceType = t.ReplyAttachmentType = t.ThreadFolderParentKey = t.MediaType = t.ThreadType = t.AttachmentMediaGroup = t.AttachmentType = void 0,
            t.AttachmentType = r,
            function (e) {
                e[e.None = 0] = "None",
                    e[e.Sticker = 1] = "Sticker",
                    e[e.Image = 2] = "Image",
                    e[e.AnimatedImage = 3] = "AnimatedImage",
                    e[e.Video = 4] = "Video",
                    e[e.Audio = 5] = "Audio",
                    e[e.File = 6] = "File",
                    e[e.XMA = 7] = "XMA"
            }(r || (t.AttachmentType = r = {})),
            t.AttachmentMediaGroup = o,
            function (e) {
                e[e.PhotosAndVideos = 0] = "PhotosAndVideos",
                    e[e.FilesOnly = 1] = "FilesOnly"
            }(o || (t.AttachmentMediaGroup = o = {})),
            t.ThreadType = i,
            function (e) {
                e[e.EncryptedOnetoOne = -1] = "EncryptedOnetoOne",
                    e[e.Unknown = 0] = "Unknown",
                    e[e.OnetoOne = 1] = "OnetoOne",
                    e[e.Group = 2] = "Group",
                    e[e.Room = 3] = "Room",
                    e[e.Montage = 4] = "Montage",
                    e[e.Marketplace = 5] = "Marketplace",
                    e[e.Folder = 6] = "Folder",
                    e[e.CommunityGroup = 18] = "CommunityGroup"
            }(i || (t.ThreadType = i = {})),
            t.MediaType = a,
            function (e) {
                e[e.JPG = 0] = "JPG",
                    e[e.PNG = 1] = "PNG",
                    e[e.GIF = 2] = "GIF",
                    e[e.WEBP = 3] = "WEBP",
                    e[e.MP4 = 4] = "MP4",
                    e[e.WEBM = 5] = "WEBM"
            }(a || (t.MediaType = a = {})),
            t.ThreadFolderParentKey = s,
            function (e) {
                e.Inbox = "0",
                    e.MessageRequests = "-1",
                    e.Other = "-2",
                    e.Archived = "-10",
                    e.Marketplace = "-12",
                    e.InboxUnread = "-100"
            }(s || (t.ThreadFolderParentKey = s = {})),
            t.ReplyAttachmentType = c,
            function (e) {
                e[e.Image = 1] = "Image",
                    e[e.Video = 2] = "Video",
                    e[e.AnimatedImage = 3] = "AnimatedImage",
                    e[e.Sticker = 4] = "Sticker",
                    e[e.MultipleImages = 6] = "MultipleImages"
            }(c || (t.ReplyAttachmentType = c = {})),
            t.ReplySourceType = l,
            function (e) {
                e[e.None = 0] = "None",
                    e[e.Message = 1] = "Message",
                    e[e.Story = 2] = "Story"
            }(l || (t.ReplySourceType = l = {}));
        let u, d, f, p, h, E, _, v, S, y, g, m, A, b, O, T, R, C, I, N, M, D, x, w, P, L, k, j, F, U, W, G, B;
        t.HOTLIKE_STICKER_ID = "369239263222822",
            t.StickerPackLoadingState = u,
            function (e) {
                e[e.NotInitiated = 0] = "NotInitiated",
                    e[e.InProgress = 1] = "InProgress",
                    e[e.Complete = 2] = "Complete"
            }(u || (t.StickerPackLoadingState = u = {})),
            t.PresenceType = d,
            function (e) {
                e[e.Offline = 1] = "Offline",
                    e[e.Active = 2] = "Active"
            }(d || (t.PresenceType = d = {})),
            t.SearchQueryStatusType = f,
            function (e) {
                e[e.Pending = 1] = "Pending",
                    e[e.Complete = 2] = "Complete",
                    e[e.Failed = 3] = "Failed"
            }(f || (t.SearchQueryStatusType = f = {})),
            t.SearchResultType = p,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.Contact = 1] = "Contact",
                    e[e.NonContact = 2] = "NonContact",
                    e[e.Group = 3] = "Group",
                    e[e.Page = 4] = "Page",
                    e[e.IntegratedMessageSearchThread = 5] = "IntegratedMessageSearchThread"
            }(p || (t.SearchResultType = p = {})),
            t.MessagesLoadMoreState = h,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.HasMoreLocal = 1] = "HasMoreLocal",
                    e[e.HasMoreRemote = 2] = "HasMoreRemote",
                    e[e.IsLoadingMoreRemote = 3] = "IsLoadingMoreRemote",
                    e[e.FullyLoaded = 4] = "FullyLoaded"
            }(h || (t.MessagesLoadMoreState = h = {})),
            t.MessageSendStatus = E,
            function (e) {
                e[e.None = 0] = "None",
                    e[e.Sending = 1] = "Sending",
                    e[e.ServerReceived = 2] = "ServerReceived",
                    e[e.NonRetriableError = 4] = "NonRetriableError",
                    e[e.RetriableError = 5] = "RetriableError",
                    e[e.SentOnly = 6] = "SentOnly"
            }(E || (t.MessageSendStatus = E = {})),
            t.MessageAuthorityLevel = _,
            function (e) {
                e[e.AuthorityLevelOptimisitc = 20] = "AuthorityLevelOptimisitc",
                    e[e.AuthorityLevelClientPartial = 40] = "AuthorityLevelClientPartial",
                    e[e.AuthorityLevelServerPartial = 60] = "AuthorityLevelServerPartial",
                    e[e.AuthorityLevelAuthoritative = 80] = "AuthorityLevelAuthoritative",
                    e[e.AuthorityLevelClientAuthoritativeDelete = 100] = "AuthorityLevelClientAuthoritativeDelete"
            }(_ || (t.MessageAuthorityLevel = _ = {})),
            t.MessageReplySourceType = v,
            function (e) {
                e[e.None = 0] = "None",
                    e[e.Message = 1] = "Message",
                    e[e.Story = 2] = "Story",
                    e[e.Forward = 3] = "Forward"
            }(v || (t.MessageReplySourceType = v = {})),
            t.MessageReplyStatus = S,
            function (e) {
                e[e.None = 0] = "None",
                    e[e.Valid = 1] = "Valid",
                    e[e.Deleted = 2] = "Deleted",
                    e[e.Unavailable = 3] = "Unavailable",
                    e[e.Expired = 4] = "Expired"
            }(S || (t.MessageReplyStatus = S = {})),
            t.MessageCannotUnsendReason = y,
            function (e) {
                e[e.MSGGlobalDeleteMessageUnsendabilityStatusCanUnsend = 0] = "MSGGlobalDeleteMessageUnsendabilityStatusCanUnsend",
                    e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyLogMessage = 1] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyLogMessage",
                    e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyTombstoneMessage = 2] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyTombstoneMessage",
                    e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyForNonSender = 3] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyForNonSender",
                    e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyP2PPayment = 4] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyP2PPayment",
                    e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyStoryReaction = 5] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyStoryReaction",
                    e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyBlobAttachment = 6] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyBlobAttachment",
                    e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyMessageNotFound = 7] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyMessageNotFound"
            }(y || (t.MessageCannotUnsendReason = y = {})),
            t.ThreadCannotUnsendReason = g,
            function (e) {
                e[e.MSGGlobalDeleteThreadUnsendabilityStatusCanUnsend = 0] = "MSGGlobalDeleteThreadUnsendabilityStatusCanUnsend",
                    e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyForSpecificIDs = 1] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyForSpecificIDs",
                    e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsPAU = 2] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsPAU",
                    e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsWorkUser = 3] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsWorkUser",
                    e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfPageThread = 4] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfPageThread",
                    e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfMarketplaceThread = 5] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfMarketplaceThread",
                    e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfCannotLoadThread = 6] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfCannotLoadThread"
            }(g || (t.ThreadCannotUnsendReason = g = {})),
            t.ContactType = m,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.User = 1] = "User",
                    e[e.Page = 2] = "Page"
            }(m || (t.ContactType = m = {})),
            t.ContactTypeExact = A,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.FBUser = 1] = "FBUser",
                    e[e.MessengerOnly = 2] = "MessengerOnly",
                    e[e.DeactivatedAllowedOnMessenger = 3] = "DeactivatedAllowedOnMessenger",
                    e[e.MessengerKid = 4] = "MessengerKid",
                    e[e.FBPage = 5] = "FBPage",
                    e[e.FBPagePersona = 6] = "FBPagePersona"
            }(A || (t.ContactTypeExact = A = {})),
            t.ContactReachabilityStatus = b,
            function (e) {
                e[e.REACHABLE = 0] = "REACHABLE",
                    e[e.UNREACHABLE_USER_TYPE = 1] = "UNREACHABLE_USER_TYPE"
            }(b || (t.ContactReachabilityStatus = b = {})),
            t.QuickReplyType = O,
            function (e) {
                e.Text = "quick_reply_text",
                    e.PhoneNumber = "quick_reply_phone",
                    e.Email = "quick_reply_email",
                    e.Birthday = "quick_reply_birthday",
                    e.State = "quick_reply_state",
                    e.ZipCode = "quick_reply_zip_code"
            }(O || (t.QuickReplyType = O = {})),
            t.NullstateCTAType = T,
            function (e) {
                e[e.None = 0] = "None",
                    e[e.GetStarted = 1] = "GetStarted",
                    e[e.Icebreakers = 2] = "Icebreakers"
            }(T || (t.NullstateCTAType = T = {})),
            t.MessengerThreadThemeType = R,
            function (e) {
                e[e.ColorGradient = 1] = "ColorGradient",
                    e[e.Theme = 2] = "Theme"
            }(R || (t.MessengerThreadThemeType = R = {})),
            t.PerformanceEvents = C,
            function (e) {
                e.APP_START = "APP_START",
                    e.APP_QUIT = "APP_QUIT",
                    e.APP_JS_CRASH = "APP_JS_CRASH",
                    e.APP_NATIVE_CRASH = "APP_NATIVE_CRASH",
                    e.TTI = "TTI",
                    e.CREATE_MESSENGER_WINDOW = "CREATE_MESSENGER_WINDOW",
                    e.CREATE_WINDOW = "CREATE_WINDOW",
                    e.WINDOW_READY_TO_SHOW = "WINDOW_READY_TO_SHOW",
                    e.CREATE_THREAD_RENDERED = "CREATE_THREAD_RENDERED",
                    e.LEGACY_MESSAGES_RENDERED = "LEGACY_MESSAGES_RENDERED",
                    e.MESSAGES_RENDERED = "MESSAGES_RENDERED",
                    e.MESSAGES_CONTAINER_MOUNT_START = "MESSAGES_CONTAINER_MOUNT_START",
                    e.MESSAGES_CONTAINER_MOUNT_END = "MESSAGES_CONTAINER_MOUNT_END",
                    e.MESSAGES_CONTAINER_UNMOUNT = "MESSAGES_CONTAINER_UNMOUNT",
                    e.STALE_MESSAGES_RENDERED = "STALE_MESSAGES_RENDERED",
                    e.SHIMMER_RENDERED = "SHIMMER_RENDERED",
                    e.FIRST_RUN_RENDERED = "FIRST_RUN_RENDERED",
                    e.ERROR_HERO_RENDERED = "ERROR_HERO_RENDERED",
                    e.WINDOW_SHOW = "WINDOW_SHOW",
                    e.INSTALL_MOVE_TO_APP_FOLDER_AND_RESTART = "INSTALL_MOVE_TO_APP_FOLDER_AND_RESTART",
                    e.OPEN_OR_SHOW_MESSENGER_WINDOW = "OPEN_OR_SHOW_MESSENGER_WINDOW",
                    e.TRY_SHOW_NOT_VISIBLE_WINDOW = "TRY_SHOW_NOT_VISIBLE_WINDOW",
                    e.TRY_SHOW_VISIBLE_WINDOW = "TRY_SHOW_VISIBLE_WINDOW",
                    e.LOGIN_RENDERED = "LOGIN_RENDERED",
                    e.LOGIN_START = "LOGIN_START",
                    e.LOGIN_FAILED = "LOGIN_FAILED",
                    e.LOGIN_SSO_GET_TOKENS_STARTED = "LOGIN_SSO_GET_TOKENS_STARTED",
                    e.LOGIN_SSO_GET_TOKENS_COMPLETED = "LOGIN_SSO_GET_TOKENS_COMPLETED",
                    e.LOGIN_SSO_GET_TOKENS_FAILED = "LOGIN_SSO_GET_TOKENS_FAILED",
                    e.LOGIN_SSO_SHOW_INTERSTITIAL = "LOGIN_SSO_SHOW_INTERSTITIAL",
                    e.LOGIN_SSO_INTERSTITIAL_FAILED = "LOGIN_SSO_INTERSTITIAL_FAILED",
                    e.LOGIN_SSO_INTERSTITIAL_SUCCEEDED_AUTH_STARTED = "LOGIN_SSO_INTERSTITIAL_SUCCEEDED_AUTH_STARTED",
                    e.LOGIN_SSO_AUTH_FAILED = "LOGIN_SSO_AUTH_FAILED",
                    e.LOGIN_SSO_AUTH_SUCCEEDED = "LOGIN_SSO_AUTH_SUCCEEDED",
                    e.SYNC_STARTED = "SYNC_STARTED",
                    e.SYNC_COMPLETED = "SYNC_COMPLETED",
                    e.SYSTEM_SUSPENDED = "SYSTEM_SUSPENDED",
                    e.SYSTEM_RESUMED = "SYSTEM_RESUMED",
                    e.NETWORK_ONLINE = "NETWORK_ONLINE",
                    e.NETWORK_OFFLINE = "NETWORK_OFFLINE",
                    e.OPEN_THREAD = "OPEN_THREAD",
                    e.LOAD_THREADS = "LOAD_THREADS",
                    e.THREADS_LOADED = "THREADS_LOADED",
                    e.LOAD_MESSAGES = "LOAD_MESSAGES",
                    e.MESSAGES_LOADED = "MESSAGES_LOADED",
                    e.USER_OPEN_THREAD = "USER_OPEN_THREAD",
                    e.THREAD_ITEM_SELECTED = "THREAD_ITEM_SELECTED",
                    e.LOAD_THREAD_START = "LOAD_THREAD_START",
                    e.LOAD_THREAD_END = "LOAD_THREAD_END",
                    e.LOAD_THREAD_MODEL_START = "LOAD_THREAD_MODEL_START",
                    e.LOAD_THREAD_MODEL_END = "LOAD_THREAD_MODEL_END",
                    e.LOAD_MESSAGES_START = "LOAD_MESSAGES_START",
                    e.LOAD_MESSAGES_END = "LOAD_MESSAGES_END",
                    e.MSYS_FETCH_MESSAGES_START = "MSYS_FETCH_MESSAGES_START",
                    e.MSYS_FETCH_MESSAGES_END = "MSYS_FETCH_MESSAGES_END",
                    e.MSYS_FETCH_ATTACHMENTS_START = "MSYS_FETCH_ATTACHMENTS_START",
                    e.MSYS_FETCH_ATTACHMENTS_END = "MSYS_FETCH_ATTACHMENTS_END",
                    e.MSYS_FETCH_ATTACHMENT_ITEM_LIST_START = "MSYS_FETCH_ATTACHMENT_ITEM_LIST_START",
                    e.MSYS_FETCH_ATTACHMENT_ITEM_LIST_END = "MSYS_FETCH_ATTACHMENT_ITEM_LIST_END",
                    e.MSYS_FETCH_REACTIONS_START = "MSYS_FETCH_REACTIONS_START",
                    e.MSYS_FETCH_REACTIONS_END = "MSYS_FETCH_REACTIONS_END",
                    e.MSYS_FETCH_QUICK_REPLIES_START = "MSYS_FETCH_QUICK_REPLIES_START",
                    e.MSYS_FETCH_QUICK_REPLIES_END = "MSYS_FETCH_QUICK_REPLIES_END",
                    e.MSYS_FETCH_ATTACHMENT_CTAS_START = "MSYS_FETCH_ATTACHMENT_CTAS_START",
                    e.MSYS_FETCH_ATTACHMENT_CTAS_END = "MSYS_FETCH_ATTACHMENT_CTAS_END",
                    e.USER_START_NEW_THREAD = "USER_START_NEW_THREAD",
                    e.EARLIER_MESSAGES_REQUESTED = "EARLIER_MESSAGES_REQUESTED",
                    e.PAGING_EARLIER_MESSAGES = "PAGING_EARLIER_MESSAGES",
                    e.EARLIER_MESSAGES_LOADED = "EARLIER_MESSAGES_LOADED",
                    e.NEWER_MESSAGES_REQUESTED = "NEWER_MESSAGES_REQUESTED",
                    e.PAGING_NEWER_MESSAGES = "PAGING_NEWER_MESSAGES",
                    e.NEWER_MESSAGES_LOADED = "NEWER_MESSAGES_LOADED",
                    e.RTC_START = "RTC_START",
                    e.RTC_WINDOW_CREATED = "RTC_WINDOW_CREATED",
                    e.RTC_INJECTED = "RTC_INJECTED",
                    e.RTC_READY = "RTC_READY",
                    e.RTC_LOADED = "RTC_LOADED",
                    e.RTC_LOAD_FAILED = "RTC_LOAD_FAILED",
                    e.RTC_FAILED = "RTC_FAILED",
                    e.RTC_FAILED_FINAL = "RTC_FAILED_FINAL",
                    e.RTC_DEFERRED = "RTC_DEFERRED",
                    e.OUTGOING_CALL_ATTEMPT = "OUTGOING_CALL_ATTEMPT",
                    e.AUDIO_CALL = "AUDIO_CALL",
                    e.VIDEO_CHAT = "VIDEO_CHAT",
                    e.NO_NETWORK_CONNECTION = "NO_NETWORK_CONNECTION",
                    e.ALREADY_IN_CALL = "ALREADY_IN_CALL",
                    e.LOAD_PARTICIPANTS_FAILED = "LOAD_PARTICIPANTS_FAILED",
                    e.MEDIA_PERMISSIONS_ERROR = "MEDIA_PERMISSIONS_ERROR",
                    e.OUTGOING_CALL_FAILED_RTC_LOADING = "OUTGOING_CALL_FAILED_RTC_LOADING",
                    e.OUTGOING_CALL_FAILED_RTC_LOAD_FAILED = "OUTGOING_CALL_FAILED_RTC_LOAD_FAILED",
                    e.OUTGOING_CALL_PLACED = "OUTGOING_CALL_PLACED",
                    e.CALL_WINDOW_LOADED = "CALL_WINDOW_LOADED",
                    e.CALL_WINDOW_LOAD_FAILED = "CALL_WINDOW_LOAD_FAILED",
                    e.INCOMING_CALL_START = "INCOMING_CALL_START",
                    e.INCOMING_CALL_PARTICIPANTS_LOADED = "INCOMING_CALL_PARTICIPANTS_LOADED",
                    e.INCOMING_CALL_WINDOW_CREATED = "INCOMING_CALL_WINDOW_CREATED",
                    e.INCOMING_CALL_DIALOG_SHOWN = "INCOMING_CALL_DIALOG_SHOWN",
                    e.MISSED_CALL_START = "MISSED_CALL_START",
                    e.MISSED_CALL_WINDOW_CREATED = "MISSED_CALL_WINDOW_CREATED",
                    e.MISSED_CALL_DIALOG_SHOWN = "MISSED_CALL_DIALOG_SHOWN",
                    e.ROOMS_INCOMING_START = "ROOMS_INCOMING_START",
                    e.ROOMS_INCOMING_WINDOW_CREATED = "ROOMS_INCOMING_WINDOW_CREATED",
                    e.ROOMS_INCOMING_PARTICIPANTS_LOADED = "ROOMS_INCOMING_PARTICIPANTS_LOADED",
                    e.ROOMS_INCOMING_DIALOG_SHOWN = "ROOMS_INCOMING_DIALOG_SHOWN",
                    e.OSMETA_READ_USER_ID_START = "OSMETA_READ_USER_ID_START",
                    e.OSMETA_READ_USER_ID_SUCCEEDED = "OSMETA_READ_USER_ID_SUCCEEDED",
                    e.OSMETA_READ_USER_ID_FAILED = "OSMETA_READ_USER_ID_FAILED",
                    e.OSMETA_READ_ACCESS_TOKEN_START = "OSMETA_READ_ACCESS_TOKEN_START",
                    e.OSMETA_READ_TOKEN_BLOB_START = "OSMETA_READ_TOKEN_BLOB_START",
                    e.OSMETA_CREATE_BUFFER_START = "OSMETA_CREATE_BUFFER_START",
                    e.OSMETA_DECRYPT_TOKEN_START = "OSMETA_DECRYPT_TOKEN_START",
                    e.OSMETA_TOKEN_TO_STRING_START = "OSMETA_TOKEN_TO_STRING_START",
                    e.OSMETA_READ_ACCESS_TOKEN_SUCCEEDED = "OSMETA_READ_ACCESS_TOKEN_SUCCEEDED",
                    e.OSMETA_READ_ACCESS_TOKEN_FAILED = "OSMETA_READ_ACCESS_TOKEN_FAILED",
                    e.OSMETA_CLEANUP_DATABASE_START = "OSMETA_CLEANUP_DATABASE_START",
                    e.OSMETA_CLEANUP_DATABASE_SUCCEEDED = "OSMETA_CLEANUP_DATABASE_SUCCEEDED",
                    e.OSMETA_CLEANUP_DATABASE_FAILED = "OSMETA_CLEANUP_DATABASE_FAILED",
                    e.OSMETA_UPGRADE_STARTED = "OSMETA_UPGRADE_STARTED",
                    e.OSMETA_UPGRADE_EXCHANGE_TOKEN_START = "OSMETA_UPGRADE_EXCHANGE_TOKEN_START",
                    e.OSMETA_UPGRADE_SUCCEEDED = "OSMETA_UPGRADE_SUCCEEDED",
                    e.OSMETA_UPGRADE_FAILED = "OSMETA_UPGRADE_FAILED",
                    e.GET_PROMOTIONS = "GET_PROMOTIONS",
                    e.GET_PROMOTIONS_SUCCEEDED = "GET_PROMOTIONS_SUCCEEDED",
                    e.GET_PROMOTIONS_FAILED = "GET_PROMOTIONS_FAILED",
                    e.MARK_PROMOTION_IMPRESSION = "MARK_PROMOTION_IMPRESSION",
                    e.MARK_PROMOTION_IMPRESSION_SUCCEEDED = "MARK_PROMOTION_IMPRESSION_SUCCEEDED",
                    e.MARK_PROMOTION_IMPRESSION_FAILED = "MARK_PROMOTION_IMPRESSION_FAILED",
                    e.MARK_PROMOTION_ACTION = "MARK_PROMOTION_ACTION",
                    e.MARK_PROMOTION_ACTION_SUCCEEDED = "MARK_PROMOTION_ACTION_SUCCEEDED",
                    e.MARK_PROMOTION_ACTION_FAILED = "MARK_PROMOTION_ACTION_FAILED",
                    e.APP_OPEN_FROM_RTC_PUSH_NOTIF = "APP_OPEN_FROM_PUSH_NOTIF",
                    e.CALL_ACCEPTED = "CALL_ACCEPTED",
                    e.CALL_REJECTED = "CALL_REJECTED",
                    e.ROOMS_TRAY_SHIMMER_RENDERED = "ROOMS_TRAY_SHIMMER_RENDERED",
                    e.ROOMS_TRAY_RENDERED = "ROOMS_TRAY_RENDERED",
                    e.OPEN_MEDIA_GALLERY = "OPEN_MEDIA_GALLERY",
                    e.LOAD_THREAD_MEDIA = "LOAD_THREAD_MEDIA",
                    e.FORCE_LOAD_THREAD_MEDIA = "FORCE_LOAD_THREAD_MEDIA",
                    e.OPEN_MEDIA_GALLERY_SUCCESS = "OPEN_MEDIA_GALLERY_SUCCESS",
                    e.OPEN_MEDIA_GALLERY_FAILURE = "OPEN_MEDIA_GALLERY_FAILURE",
                    e.MSYS_INIT_MAIN_THREAD_PART_1_START = "MSYS_INIT_MAIN_THREAD_PART_1_START",
                    e.MSYS_INIT_UPDATE_LOGGING = "MSYS_INIT_UPDATE_LOGGING",
                    e.MSYS_INIT_CREATE_ANALYTICS_STACK = "MSYS_INIT_CREATE_ANALYTICS_STACK",
                    e.MSYS_INIT_REGISTER_CQL_MAPPINGS = "MSYS_INIT_REGISTER_CQL_MAPPINGS",
                    e.MSYS_INIT_CREATE_DATABASE = "MSYS_INIT_CREATE_DATABASE",
                    e.MSYS_INIT_OPEN_DATABASE_REQUEST = "MSYS_INIT_OPEN_DATABASE_REQUEST",
                    e.MSYS_INIT_CREATE_DASM_CONFIG = "MSYS_INIT_CREATE_DASM_CONFIG",
                    e.MSYS_INIT_CREATE_DB_HEALTH_MONITOR = "MSYS_INIT_CREATE_DB_HEALTH_MONITOR",
                    e.MSYS_INIT_CREATE_EXPERIMENT_CACHE = "MSYS_INIT_CREATE_EXPERIMENT_CACHE",
                    e.MSYS_INIT_OPEN_DATABASE_COMPLETE = "MSYS_INIT_OPEN_DATABASE_COMPLETE",
                    e.MSYS_INIT_CREATE_AUTH_CONTEXT = "MSYS_INIT_CREATE_AUTH_CONTEXT",
                    e.MSYS_INIT_CREATE_JOB_SCHEDULER = "MSYS_INIT_CREATE_JOB_SCHEDULER",
                    e.MSYS_INIT_CREATE_MAILBOX_PROVIDER = "MSYS_INIT_CREATE_MAILBOX_PROVIDER",
                    e.MSYS_INIT_CREATE_MAILBOX = "MSYS_INIT_CREATE_MAILBOX",
                    e.MSYS_INIT_GET_SYNC = "MSYS_INIT_GET_SYNC",
                    e.MSYS_INIT_TRACE_MAILBOX_SYNC = "MSYS_INIT_TRACE_MAILBOX_SYNC",
                    e.MSYS_INIT_TRACE_MESSAGE_SEND = "MSYS_INIT_TRACE_MESSAGE_SEND",
                    e.MSYS_INIT_INSTALL_SYNC_OBSERVER = "MSYS_INIT_INSTALL_SYNC_OBSERVER",
                    e.MSYS_INIT_INSTALL_RSYS_OBSERVER = "MSYS_INIT_INSTALL_RSYS_OBSERVER",
                    e.MSYS_INIT_INSTALL_INVALID_ACCESS_TOKEN_OBSERVER = "MSYS_INIT_INSTALL_INVALID_ACCESS_TOKEN_OBSERVER",
                    e.MSYS_INIT_INSTALL_INVALID_SESSION_OBSERVER = "MSYS_INIT_INSTALL_INVALID_SESSION_OBSERVER",
                    e.MSYS_INIT_MAIN_THREAD_PART_1_DONE = "MSYS_INIT_MAIN_THREAD_PART_1_DONE",
                    e.MSYS_INIT_DB_THREAD_PART_START = "MSYS_INIT_DB_THREAD_PART_START",
                    e.MSYS_INIT_SET_MAILBOX_SYNC_PARAMETERS = "MSYS_INIT_SET_MAILBOX_SYNC_PARAMETERS",
                    e.MSYS_INIT_SET_ARFX_SYNC_PARAMETERS = "MSYS_INIT_SET_ARFX_SYNC_PARAMETERS",
                    e.MSYS_INIT_SET_EXPERIMENT_SYNC_PARAMETERS = "MSYS_INIT_SET_EXPERIMENT_SYNC_PARAMETERS",
                    e.MSYS_INIT_DB_THREAD_PART_DONE = "MSYS_INIT_DB_THREAD_PART_DONE",
                    e.MSYS_INIT_MAIN_THREAD_PART_2_START = "MSYS_INIT_MAIN_THREAD_PART_2_START",
                    e.MSYS_INIT_SET_MAILBOX_ACTIVE = "MSYS_INIT_SET_MAILBOX_ACTIVE",
                    e.MSYS_INIT_INITIALIZE_MQTT_HANDLER = "MSYS_INIT_INITIALIZE_MQTT_HANDLER",
                    e.MSYS_INIT_GET_MQTT_CHANNEL = "MSYS_INIT_GET_MQTT_CHANNEL",
                    e.MSYS_INIT_LOAD_EXPERIMENT_CACHE_REQUEST = "MSYS_INIT_LOAD_EXPERIMENT_CACHE_REQUEST",
                    e.MSYS_INIT_LOAD_EXPERIMENT_CACHE_COMPLETE = "MSYS_INIT_LOAD_EXPERIMENT_CACHE_COMPLETE",
                    e.MSYS_INIT_CREATE_OVERLAY_CONFIG_MANAGER = "MSYS_INIT_CREATE_OVERLAY_CONFIG_MANAGER",
                    e.MSYS_INIT_GET_APP_DISPLAY_NAME = "MSYS_INIT_GET_APP_DISPLAY_NAME",
                    e.MSYS_INIT_CREATE_CAPTURE_CONTROLLER = "MSYS_INIT_CREATE_CAPTURE_CONTROLLER",
                    e.MSYS_INIT_CREATE_RSYS_CALL_MANAGER = "MSYS_INIT_CREATE_RSYS_CALL_MANAGER",
                    e.MSYS_INIT_START_RSYS_PRECALL_ACTIONS = "MSYS_INIT_START_RSYS_PRECALL_ACTIONS",
                    e.MSYS_INIT_ADD_ACTIVE_CALL_LISTENER = "MSYS_INIT_ADD_ACTIVE_CALL_LISTENER",
                    e.MSYS_INIT_MAIN_THREAD_PART_2_END = "MSYS_INIT_MAIN_THREAD_PART_2_END",
                    e.USER_SEND_MESSAGE = "USER_SEND_MESSAGE",
                    e.SEND_MESSAGE_START = "SEND_MESSAGE_START",
                    e.SEND_MESSAGE_END = "SEND_MESSAGE_END",
                    e.NEW_SENT_MESSAGE_RENDERED = "NEW_SENT_MESSAGE_RENDERED",
                    e.INBOX_SYNC_SHOULD_LOAD_MESSAGES = "INBOX_SYNC_SHOULD_LOAD_MESSAGES"
            }(C || (t.PerformanceEvents = C = {})),
            t.OutgoingCallSource = I,
            function (e) {
                e.CHAT_HEADER = "chat_header",
                    e.CHAT_CELL = "chat_cell",
                    e.CONTEXT_MENU = "context_menu",
                    e.XMA = "xma",
                    e.MISSED_CALL_DIALOG = "missed_call_dialog"
            }(I || (t.OutgoingCallSource = I = {})),
            t.SearchSource = N,
            function (e) {
                e.ThreadList = "thread_list",
                    e.Omnipicker = "omnipicker",
                    e.ThreadDetails = "thread_details"
            }(N || (t.SearchSource = N = {})),
            t.BlockedByViewerStatus = M,
            function (e) {
                e[e.Unblocked = 0] = "Unblocked",
                    e[e.MessageBlocked = 1] = "MessageBlocked",
                    e[e.FullyBlocked = 2] = "FullyBlocked"
            }(M || (t.BlockedByViewerStatus = M = {})),
            t.AttachmentStatus = D,
            function (e) {
                e[e.Supported = 0] = "Supported",
                    e[e.FileTooLarge = 1] = "FileTooLarge",
                    e[e.TypeNotSupported = 2] = "TypeNotSupported"
            }(D || (t.AttachmentStatus = D = {})),
            t.AttachmentCTAType = x,
            function (e) {
                e.XMA_PAGE_SHARE = "xma_page_share",
                    e.XMA_ELEMENT_SHARE = "xma_element_share",
                    e.XMA_PAYMENT = "xma_payment",
                    e.XMA_P2P_PAYMENT_DETAILS = "xma_p2p_payment_details",
                    e.XMA_P2P_PAYMENT_DETAILS_RECEIVE_MONEY = "xma_p2p_payment_details_receive_money",
                    e.XMA_P2P_REQUEST_PAY = "xma_p2p_request_pay",
                    e.XMA_P2P_VERIFY_INFO = "xma_p2p_verify_info",
                    e.XMA_GAME_PLAY = "xma_game_play",
                    e.XMA_WEB_URL = "xma_web_url",
                    e.XMA_EXTENSION = "xma_extension",
                    e.XMA_POSTBACK = "xma_postback",
                    e.XMA_OPEN_NATIVE = "xma_open_native",
                    e.XMA_BRANDED_CAMERA = "xma_branded_camera",
                    e.XMA_ACCOUNT_LINK = "xma_account_link",
                    e.XMA_ACCOUNT_UNLINK = "xma_account_unlink",
                    e.XMA_DIRECT_SEND = "xma_direct_send",
                    e.XMA_LIVE_LOCATION_SHARING = "xma_live_location_sharing",
                    e.XMA_SPONSORED_MESSAGE_WEB_URL = "xma_sponsored_message_web_url",
                    e.XMA_SPONSORED_MESSAGE_POSTBACK = "xma_sponsored_message_postback",
                    e.XMA_RTC_AUDIO = "xma_rtc_audio",
                    e.XMA_RTC_VIDEO = "xma_rtc_video",
                    e.XMA_RTC_MISSED_AUDIO = "xma_rtc_missed_audio",
                    e.XMA_RTC_MISSED_VIDEO = "xma_rtc_missed_video",
                    e.XMA_RTC_ENDED_AUDIO = "xma_rtc_ended_audio",
                    e.XMA_RTC_ENDED_VIDEO = "xma_rtc_ended_video",
                    e.XMA_OPEN_JOINABLE_CALL_INVITE_URL = "xma_open_joinable_call_invite_url",
                    e.XMA_ROOMS_SPEAKEASY_INVITE = "xma_rooms_speakeasy_invite",
                    e.XMA_ROOMS_SPEAKEASY_INTERESTED = "xma_rooms_speakeasy_interested",
                    e.XMA_ROOMS_SPEAKEASY_EDIT = "xma_rooms_speakeasy_edit",
                    e.XMA_ROOMS_SPEAKEASY_EXPIRED = "xma_rooms_speakeasy_expired",
                    e.XMA_ROOMS_SPEAKEASY_UNDO = "xma_rooms_speakeasy_undo",
                    e.XMA_ROOMS_SPEAKEASY_CALLBACK = "xma_rooms_speakeasy_callback"
            }(x || (t.AttachmentCTAType = x = {})),
            t.PersistentMenuCTAType = w,
            function (e) {
                e.MENU_NESTED = "menu_nested",
                    e.MENU_PAGE_SHARE = "menu_page_share",
                    e.MENU_ELEMENT_SHARE = "menu_element_share",
                    e.MENU_PAYMENT = "menu_payment",
                    e.MENU_GAME_PLAY = "menu_game_play",
                    e.MENU_WEB_URL = "menu_web_url",
                    e.MENU_EXTENSION = "menu_extension",
                    e.MENU_POSTBACK = "menu_postback",
                    e.MENU_PHONE_NUMBER = "menu_phone_number",
                    e.MENU_OPEN_NATIVE = "menu_open_native",
                    e.MENU_BRANDED_CAMERA = "menu_branded_camera"
            }(w || (t.PersistentMenuCTAType = w = {})),
            t.AdminMessageCTAType = P,
            function (e) {
                e.ADMIN_MSG_MANAGE_AD = "admin_msg_manage_ad",
                    e.ADMIN_MSG_WEB_URL = "admin_msg_web_url",
                    e.ADMIN_MSG_P2B_USER_CONTROLS = "admin_msg_p2b_user_controls",
                    e.ADMIN_MSG_EDIT_NICKNAME = "admin_msg_edit_nickname",
                    e.ADMIN_MSG_POLL_DETAILS = "admin_msg_poll_details"
            }(P || (t.AdminMessageCTAType = P = {})),
            t.SyncGroupsSyncStatus = L,
            function (e) {
                e[e.MCAMailboxSyncStatusUnknown = 0] = "MCAMailboxSyncStatusUnknown",
                    e[e.MCAMailboxSyncStatusInitializing = 1] = "MCAMailboxSyncStatusInitializing",
                    e[e.MCAMailboxSyncStatusComplete = 2] = "MCAMailboxSyncStatusComplete",
                    e[e.MCAMailboxSyncStatusResnapshotting = 3] = "MCAMailboxSyncStatusResnapshotting"
            }(L || (t.SyncGroupsSyncStatus = L = {})),
            t.SyncGroupsModelIds = k,
            function (e) {
                e[e.MailboxSyncGroup = 1] = "MailboxSyncGroup",
                    e[e.ExperimentsSyncGroup = 8] = "ExperimentsSyncGroup",
                    e[e.SettingsSyncGroup = 16] = "SettingsSyncGroup"
            }(k || (t.SyncGroupsModelIds = k = {})),
            t.MsysStatsShortName = j,
            function (e) {
                e.NetworkBytesIn = "NTI"
            }(j || (t.MsysStatsShortName = j = {})),
            t.PortalKey = F,
            function (e) {
                e.Settings = "Settings",
                    e.Feedback = "Feedback"
            }(F || (t.PortalKey = F = {})),
            t.MsysAppState = U,
            function (e) {
                e[e.Foreground = 0] = "Foreground",
                    e[e.Background = 1] = "Background"
            }(U || (t.MsysAppState = U = {})),
            t.WorkForeignEntityType = W,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.Foreign = 1] = "Foreign",
                    e[e.NotForeign = 2] = "NotForeign"
            }(W || (t.WorkForeignEntityType = W = {})),
            t.ComposerDisabledType = G,
            function (e) {
                e[e.NewThreadNoPreview = 1] = "NewThreadNoPreview",
                    e[e.NewThreadNoRecipients = 2] = "NewThreadNoRecipients",
                    e[e.BlockedThread = 3] = "BlockedThread",
                    e[e.CantMessage = 4] = "CantMessage",
                    e[e.NotMember = 5] = "NotMember"
            }(G || (t.ComposerDisabledType = G = {})),
            t.RtcCallStatus = B,
            function (e) {
                e[e.NONE = 0] = "NONE",
                    e[e.AUDIO = 1] = "AUDIO",
                    e[e.VIDEO = 2] = "VIDEO"
            }(B || (t.RtcCallStatus = B = {}));
        t.GIF_DEFAULT_DIM = 250;
        t.STICKER_DEFAULT_DIM = 120;
        let H, Y, z, V, K, q, X, J, $, Q, Z, ee, te, ne, re, oe;
        t.UNAUTHENTICATED_USERID = "0",
            t.PaymentCredentialType = H,
            function (e) {
                e[e.CARD = 0] = "CARD",
                    e[e.PAYPAL = 1] = "PAYPAL"
            }(H || (t.PaymentCredentialType = H = {})),
            t.ProductType = Y,
            function (e) {
                e.P2P = "p2p",
                    e.PAGES_COMMERCE = "pages_commerce",
                    e.NMOR_PAGES_COMMERCE = "nmor_pages_commerce",
                    e.MESSENGER_COMMERCE = "messenger_commerce"
            }(Y || (t.ProductType = Y = {})),
            t.PaymentActivitySearchResultStatus = z,
            function (e) {
                e[e.Pending = 0] = "Pending",
                    e[e.Failed = 1] = "Failed",
                    e[e.Succeeded = 2] = "Succeeded",
                    e[e.Initiated = -1] = "Initiated"
            }(z || (t.PaymentActivitySearchResultStatus = z = {})),
            t.TransactionType = V,
            function (e) {
                e[e.PayMoney = 0] = "PayMoney",
                    e[e.RequestMoney = 1] = "RequestMoney",
                    e[e.P2MCheckOut = 2] = "P2MCheckOut"
            }(V || (t.TransactionType = V = {})),
            t.PaymentPasscodeState = K,
            function (e) {
                e[e.Active = 65] = "Active",
                    e[e.Deleted = 68] = "Deleted",
                    e[e.Locked = 76] = "Locked",
                    e[e.Disabled = 88] = "Disabled"
            }(K || (t.PaymentPasscodeState = K = {})),
            t.MeetupCreationErrorType = q,
            function (e) {
                e.AccountTooEarly = "account_early",
                    e.RateLimit = "rate_limit",
                    e.Timeout = "timeout",
                    e.Unknown = "unknown"
            }(q || (t.MeetupCreationErrorType = q = {})),
            t.MeetupLockStatus = X,
            function (e) {
                e[e.OPEN = 0] = "OPEN",
                    e[e.LOCKED_BY_OWNER = 1] = "LOCKED_BY_OWNER",
                    e[e.LOCKED_BY_OWNER_DISCONNECT = 2] = "LOCKED_BY_OWNER_DISCONNECT"
            }(X || (t.MeetupLockStatus = X = {})),
            t.ThreadCapabilities = J,
            function (e) {
                e[e.PAYMENT = 0] = "PAYMENT",
                    e[e.CAMERA = 1] = "CAMERA",
                    e[e.MEDIA_PICKER = 2] = "MEDIA_PICKER",
                    e[e.STICKER = 3] = "STICKER",
                    e[e.GIF = 4] = "GIF",
                    e[e.GO_TO_SECRET_CONVERSATION = 5] = "GO_TO_SECRET_CONVERSATION",
                    e[e.COLOR_CUSTOMIZATION = 6] = "COLOR_CUSTOMIZATION",
                    e[e.EMOJI_CUSTOMIZATION = 7] = "EMOJI_CUSTOMIZATION",
                    e[e.THREAD_DETAILS_PROFILE_BUTTON = 8] = "THREAD_DETAILS_PROFILE_BUTTON",
                    e[e.NICKNAMES = 9] = "NICKNAMES",
                    e[e.BLOCK = 10] = "BLOCK",
                    e[e.CALIBRA = 12] = "CALIBRA",
                    e[e.MESSENGER_KIDS_MANAGE_KID_ACCOUNT = 13] = "MESSENGER_KIDS_MANAGE_KID_ACCOUNT",
                    e[e.AUDIO_CLIPS = 14] = "AUDIO_CLIPS",
                    e[e.SHARED_MEDIA = 15] = "SHARED_MEDIA",
                    e[e.BLOCK_GROUP_MEMBER = 16] = "BLOCK_GROUP_MEMBER",
                    e[e.FEEDBACK_AND_REPORT = 17] = "FEEDBACK_AND_REPORT",
                    e[e.REACTIONS = 18] = "REACTIONS",
                    e[e.MUTE_THREAD = 19] = "MUTE_THREAD",
                    e[e.SEEN_HEADS = 20] = "SEEN_HEADS",
                    e[e.MESSAGE_REQUEST_COMPOSER_BANNER = 21] = "MESSAGE_REQUEST_COMPOSER_BANNER",
                    e[e.IN_THREAD_PROFILE_BUTTON = 22] = "IN_THREAD_PROFILE_BUTTON",
                    e[e.THREAD_DETAILS = 23] = "THREAD_DETAILS",
                    e[e.RTC_VIDEO_CALL = 24] = "RTC_VIDEO_CALL",
                    e[e.RTC_VOICE_CALL = 25] = "RTC_VOICE_CALL",
                    e[e.MEMBER_LIST = 26] = "MEMBER_LIST",
                    e[e.ADD_MEMBER = 27] = "ADD_MEMBER",
                    e[e.LEAVE_THREAD = 28] = "LEAVE_THREAD",
                    e[e.BLOCKED_USER_INTERSTITIAL = 29] = "BLOCKED_USER_INTERSTITIAL",
                    e[e.OPTIMISTIC_THREAD_FEEDBACK_AND_REPORT = 30] = "OPTIMISTIC_THREAD_FEEDBACK_AND_REPORT",
                    e[e.LOCATION_SHARING = 31] = "LOCATION_SHARING",
                    e[e.IGNORE_MESSAGES = 32] = "IGNORE_MESSAGES",
                    e[e.FOCUS_MODE = 33] = "FOCUS_MODE",
                    e[e.SEARCH_IN_CONVERSATION = 34] = "SEARCH_IN_CONVERSATION",
                    e[e.CREATE_GROUP = 35] = "CREATE_GROUP",
                    e[e.POLL_CREATION = 36] = "POLL_CREATION",
                    e[e.DISPLAY_ACTOR_TYPE_IN_THREAD_VIEW_HEADER = 37] = "DISPLAY_ACTOR_TYPE_IN_THREAD_VIEW_HEADER",
                    e[e.DISAPPEARING_MODE = 38] = "DISAPPEARING_MODE",
                    e[e.FORCE_ONE_PHASE_SEND = 39] = "FORCE_ONE_PHASE_SEND",
                    e[e.SPLIT_MULTI_SEND = 40] = "SPLIT_MULTI_SEND",
                    e[e.THREAD_DETAILS_IG_PROFILE_BUTTON = 41] = "THREAD_DETAILS_IG_PROFILE_BUTTON",
                    e[e.MESSAGE_REPLY = 42] = "MESSAGE_REPLY",
                    e[e.MENTIONS = 43] = "MENTIONS",
                    e[e.DISABLE_LINKS = 44] = "DISABLE_LINKS",
                    e[e.THREAD_NAME_CUSTOMIZATION = 60] = "THREAD_NAME_CUSTOMIZATION",
                    e[e.THREAD_PHOTO_CUSTOMIZATION = 61] = "THREAD_PHOTO_CUSTOMIZATION"
            }(J || (t.ThreadCapabilities = J = {})),
            t.RoomCreationState = $,
            function (e) {
                e[e.Pending = 0] = "Pending",
                    e[e.Done = 1] = "Done",
                    e[e.Failed = 2] = "Failed"
            }($ || (t.RoomCreationState = $ = {})),
            t.RoomAudienceType = Q,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.Anyone = 1] = "Anyone",
                    e[e.InvitedOnly = 2] = "InvitedOnly"
            }(Q || (t.RoomAudienceType = Q = {})),
            t.RoomLinkSurface = Z,
            function (e) {
                e[e.Messenger = 1] = "Messenger",
                    e[e.FriendJoinups = 2] = "FriendJoinups",
                    e[e.Group = 3] = "Group",
                    e[e.Event = 4] = "Event",
                    e[e.Dating = 5] = "Dating",
                    e[e.Workplace = 6] = "Workplace",
                    e[e.Instagram = 7] = "Instagram",
                    e[e.WhatsApp = 8] = "WhatsApp",
                    e[e.MessengerV2 = 9] = "MessengerV2",
                    e[e.WorplaceGroup = 10] = "WorplaceGroup",
                    e[e.Generic = 11] = "Generic"
            }(Z || (t.RoomLinkSurface = Z = {})),
            t.RoomInviteeType = ee,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.Friends = 1] = "Friends",
                    e[e.Custom = 2] = "Custom",
                    e[e.FriendsAndCustom = 3] = "FriendsAndCustom"
            }(ee || (t.RoomInviteeType = ee = {})),
            t.RoomJoinPermission = te,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.RequiresJoinRequest = 1] = "RequiresJoinRequest",
                    e[e.AnyoneWhoCanLoadTheLink = 2] = "AnyoneWhoCanLoadTheLink"
            }(te || (t.RoomJoinPermission = te = {})),
            t.StoriesAndActiveNowItemType = ne,
            function (e) {
                e[e.AddToStory = 0] = "AddToStory",
                    e[e.ActiveNow = 1] = "ActiveNow",
                    e[e.Story = 2] = "Story",
                    e[e.Room = 3] = "Room",
                    e[e.CreateOrYourRooms = 4] = "CreateOrYourRooms"
            }(ne || (t.StoriesAndActiveNowItemType = ne = {})),
            t.RoomsBadgeType = re,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.Ongoing = 1] = "Ongoing",
                    e[e.Joinable = 2] = "Joinable",
                    e[e.Scheduled = 3] = "Scheduled",
                    e[e.Locked = 4] = "Locked"
            }(re || (t.RoomsBadgeType = re = {})),
            t.WindowsStartupTaskState = oe,
            function (e) {
                e[e.disabled = 0] = "disabled",
                    e[e.disabledByUser = 1] = "disabledByUser",
                    e[e.enabled = 2] = "enabled",
                    e[e.disabledByPolicy = 3] = "disabledByPolicy",
                    e[e.enabledByPolicy = 4] = "enabledByPolicy"
            }(oe || (t.WindowsStartupTaskState = oe = {}));
        let ie, ae;
        t.EmptyTincanKeyNames = ["MasterEncryptedKey", "identityKeyPublicKey", "identityKeyPrivateKey", "lastResortPreKeyPublicKey", "lastResortPreKeyPrivateKey", "DEKDecryptedKey"],
            t.WindowsNotificationSetting = ie,
            function (e) {
                e[e.enabled = 0] = "enabled",
                    e[e.disabledForApplication = 1] = "disabledForApplication",
                    e[e.disabledForUser = 2] = "disabledForUser",
                    e[e.disabledByGroupPolicy = 3] = "disabledByGroupPolicy",
                    e[e.disabledByManifest = 4] = "disabledByManifest"
            }(ie || (t.WindowsNotificationSetting = ie = {})),
            t.MacNotificationSetting = ae,
            function (e) {
                e[e.Unknown = 0] = "Unknown",
                    e[e.Disabled = 1] = "Disabled",
                    e[e.Enabled = 2] = "Enabled"
            }(ae || (t.MacNotificationSetting = ae = {}));
        t.MainLogFileName = "main";
        t.RendererLogFileName = "renderer";
        t.LogFileNameTimestampFormat = "[-d]YYYYMMDD[-t]HHmmss";
        t.ArchonLogFileNamePrefix = "archon-";
        t.MsysLogFileNamePrefix = "msys-";
        t.RtcLogFileNamePrefix = "rtc-";
        t.TraceLogFileNamePrefix = "trace-"
    },
    80: function (e, t, n) {
        var r = n(79);
        e.exports = function (e) {
            if (!r(e))
                throw TypeError(String(e) + " is not an object");
            return e
        }
    },
    818: function (e, t, n) {
        "use strict";
        var r = n(819);
        function o() { }
        function i() { }
        i.resetWarningCache = o,
            e.exports = function () {
                function e(e, t, n, o, i, a) {
                    if (a !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation",
                        s
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return n.PropTypes = n,
                    n
            }
    },
    819: function (e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    820: function (e, t, n) {
        "use strict";
        /** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && Symbol.for
            , o = r ? Symbol.for("react.element") : 60103
            , i = r ? Symbol.for("react.portal") : 60106
            , a = r ? Symbol.for("react.fragment") : 60107
            , s = r ? Symbol.for("react.strict_mode") : 60108
            , c = r ? Symbol.for("react.profiler") : 60114
            , l = r ? Symbol.for("react.provider") : 60109
            , u = r ? Symbol.for("react.context") : 60110
            , d = r ? Symbol.for("react.async_mode") : 60111
            , f = r ? Symbol.for("react.concurrent_mode") : 60111
            , p = r ? Symbol.for("react.forward_ref") : 60112
            , h = r ? Symbol.for("react.suspense") : 60113
            , E = r ? Symbol.for("react.suspense_list") : 60120
            , _ = r ? Symbol.for("react.memo") : 60115
            , v = r ? Symbol.for("react.lazy") : 60116
            , S = r ? Symbol.for("react.fundamental") : 60117
            , y = r ? Symbol.for("react.responder") : 60118
            , g = r ? Symbol.for("react.scope") : 60119;
        function m(e) {
            if ("object" == typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                    case o:
                        switch (e = e.type) {
                            case d:
                            case f:
                            case a:
                            case c:
                            case s:
                            case h:
                                return e;
                            default:
                                switch (e = e && e.$$typeof) {
                                    case u:
                                    case p:
                                    case v:
                                    case _:
                                    case l:
                                        return e;
                                    default:
                                        return t
                                }
                        }
                    case i:
                        return t
                }
            }
        }
        function A(e) {
            return m(e) === f
        }
        t.typeOf = m,
            t.AsyncMode = d,
            t.ConcurrentMode = f,
            t.ContextConsumer = u,
            t.ContextProvider = l,
            t.Element = o,
            t.ForwardRef = p,
            t.Fragment = a,
            t.Lazy = v,
            t.Memo = _,
            t.Portal = i,
            t.Profiler = c,
            t.StrictMode = s,
            t.Suspense = h,
            t.isValidElementType = function (e) {
                return "string" == typeof e || "function" == typeof e || e === a || e === f || e === c || e === s || e === h || e === E || "object" == typeof e && null !== e && (e.$$typeof === v || e.$$typeof === _ || e.$$typeof === l || e.$$typeof === u || e.$$typeof === p || e.$$typeof === S || e.$$typeof === y || e.$$typeof === g)
            }
            ,
            t.isAsyncMode = function (e) {
                return A(e) || m(e) === d
            }
            ,
            t.isConcurrentMode = A,
            t.isContextConsumer = function (e) {
                return m(e) === u
            }
            ,
            t.isContextProvider = function (e) {
                return m(e) === l
            }
            ,
            t.isElement = function (e) {
                return "object" == typeof e && null !== e && e.$$typeof === o
            }
            ,
            t.isForwardRef = function (e) {
                return m(e) === p
            }
            ,
            t.isFragment = function (e) {
                return m(e) === a
            }
            ,
            t.isLazy = function (e) {
                return m(e) === v
            }
            ,
            t.isMemo = function (e) {
                return m(e) === _
            }
            ,
            t.isPortal = function (e) {
                return m(e) === i
            }
            ,
            t.isProfiler = function (e) {
                return m(e) === c
            }
            ,
            t.isStrictMode = function (e) {
                return m(e) === s
            }
            ,
            t.isSuspense = function (e) {
                return m(e) === h
            }
    },
    821: function (e, t) {
        e.exports = function (e) {
            if (!e.webpackPolyfill) {
                var t = Object.create(e);
                t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l
                        }
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i
                        }
                    }),
                    Object.defineProperty(t, "exports", {
                        enumerable: !0
                    }),
                    t.webpackPolyfill = 1
            }
            return t
        }
    },
    822: function (e, t, n) {
        "use strict";
        n(8)
    },
    823: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.FocusReducer = void 0;
        var r = n(42);
        const o = (0,
            n(51).makeReducer)({
                appIsFocused: !1,
                currentWindowIsFocused: !1,
                userIsActive: !1
            }, (e, t) => {
                switch (t.type) {
                    case r.AppContextActions.setWindowFocusState.type:
                        e.currentWindowIsFocused !== t.payload.isFocused && (e.currentWindowIsFocused = t.payload.isFocused);
                        break;
                    case r.AppContextActions.setAppFocusState.type:
                        e.appIsFocused !== t.payload.isFocused && (e.appIsFocused = t.payload.isFocused);
                        break;
                    case r.AppContextActions.setUserActiveState.type:
                        e.userIsActive !== t.payload.isActive && (e.userIsActive = t.payload.isActive)
                }
            }
            );
        t.FocusReducer = o
    },
    824: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function* () {
                const e = yield (0,
                    a.call)(i.default.app.isAppFocused);
                yield (0,
                    a.put)(r.AppContextActions.setAppFocusState(e));
                const t = yield (0,
                    a.call)(i.default.window.isActive);
                yield (0,
                    a.put)(r.AppContextActions.setWindowFocusState(t)),
                    yield (0,
                        a.takeLatest)(r.AppContextActions.setAppFocusState.type, p);
                const n = yield (0,
                    a.call)(l);
                yield (0,
                    a.fork)(d, n);
                const o = yield (0,
                    a.call)(u);
                yield (0,
                    a.fork)(f, o)
            }
            ,
            t._createWindowFocusChannel = l,
            t._createAppFocusChannel = u,
            t._listenWindowFocusChannel = d,
            t._listenAppFocusChannel = f,
            t._appFocusChanged = p;
        var r = n(42)
            , o = c(n(47))
            , i = c(n(9))
            , a = n(17)
            , s = n(64);
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function* l() {
            return yield (0,
                a.call)(s.eventChannel, e => {
                    const t = [i.default.window.addFocusListener((function () {
                        e(!0)
                    }
                    )), i.default.window.addBlurListener((function () {
                        e(!1)
                    }
                    ))];
                    return () => {
                        t.forEach(e => e())
                    }
                }
                )
        }
        function* u() {
            return yield (0,
                a.call)(s.eventChannel, e => i.default.app.addAppFocusListener(t => {
                    e(t)
                }
                ))
        }
        function* d(e) {
            try {
                for (; ;) {
                    const t = yield (0,
                        a.take)(e);
                    yield (0,
                        a.put)(r.AppContextActions.setWindowFocusState(t))
                }
            } finally {
                e.close()
            }
        }
        function* f(e) {
            try {
                for (; ;) {
                    const t = yield (0,
                        a.take)(e);
                    yield (0,
                        a.put)(r.AppContextActions.setAppFocusState(t))
                }
            } finally {
                e.close()
            }
        }
        function* p(e) {
            e.payload.isFocused ? yield (0,
                a.put)(r.AppContextActions.setUserActiveState(!0)) : (yield (0,
                    a.delay)((0,
                        o.default)({
                            minutes: 15
                        })),
                    yield (0,
                        a.put)(r.AppContextActions.setUserActiveState(!1)))
        }
    },
    825: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.ModalReducer = void 0;
        var r = n(42);
        const o = (0,
            n(51).makeReducer)({
                currentModal: null,
                modalOptions: null,
                hostWindowKey: null
            }, (e, t) => {
                switch (t.type) {
                    case r.AppContextActions.showModal.type:
                        e.hostWindowKey = t.payload.hostWindowKey,
                            e.currentModal = t.payload.modalInfo,
                            e.modalOptions = t.payload.modalOptions || null;
                        break;
                    case r.AppContextActions.clearModal.type:
                        e.currentModal = null,
                            e.modalOptions = null
                }
            }
            );
        t.ModalReducer = o
    },
    826: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.PortalWindowReducer = void 0;
        var r = n(42)
            , o = n(8);
        const i = (0,
            n(51).makeReducer)({
                portalWindowOpen: {}
            }, (e, t) => {
                switch (t.type) {
                    case r.AppContextActions.openOrFocusPortalWindow.type:
                        {
                            const { options: n } = t.payload;
                            n.portalKey === o.PortalKey.Settings ? e.portalWindowOpen[o.PortalKey.Settings] = n : e.portalWindowOpen[o.PortalKey.Feedback] = n;
                            break
                        }
                    case r.AppContextActions.closePortalWindow.type:
                        {
                            const { portalKey: n } = t.payload;
                            e.portalWindowOpen[n] && delete e.portalWindowOpen[n];
                            break
                        }
                }
            }
            );
        t.PortalWindowReducer = i
    },
    827: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.PortalWindowSaga = function* () {
                yield (0,
                    a.fork)(s)
            }
            ,
            t.PortalWindowListener = s,
            t._openOrFocusPortalWindow = c;
        var r, o = n(42), i = (r = n(9)) && r.__esModule ? r : {
            default: r
        }, a = n(17);
        function* s() {
            yield (0,
                a.takeLatest)(o.AppContextActions.openOrFocusPortalWindow.type, c)
        }
        function* c(e) {
            const { options: t } = e.payload
                , n = i.default.portal.getPortalWindow(t.portalKey);
            n && n.focus()
        }
    },
    828: function (e, t, n) { },
    829: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.getUserFromQuery = function () {
                const e = window.location.search
                    , t = (0,
                        r.parseQueryString)(e);
                let n = null;
                if (t.user)
                    try {
                        const e = JSON.parse(t.user);
                        (function (e) {
                            return null != e && e.accessToken && "string" == typeof e.accessToken && null != e.userID && "string" == typeof e.userID
                        }
                        )(e) && (n = e)
                    } catch (e) { }
                return n
            }
            ;
        var r = n(104)
    },
    830: function (e, t, n) {
        "use strict";
        let r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.CookieNames = void 0,
            t.CookieNames = r,
            function (e) {
                e.CurrentUser = "c_user",
                    e.Session = "xs",
                    e.FacebookRetargeting = "fr",
                    e.MachineId = "datr"
            }(r || (t.CookieNames = r = {}))
    },
    831: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.isIpcError = function (e) {
                return !0 === e.__ipcError
            }
            ,
            t.default = void 0;
        class r extends Error {
            constructor(e, t) {
                super(),
                    this._innerError = e,
                    this.__ipcError = !0,
                    this.message = `An error occurred while invoking an IPC function (${t}). Message: ${this._getInnerMessage()}`,
                    this.name = "IpcError"
            }
            toString() {
                return `${this.message}\nInner Message: ${this._getInnerMessage()}\nInner Stack: ${this._getInnerStack()}`
            }
            get innerError() {
                return this._innerError
            }
            _getInnerMessage() {
                return this._innerError.message || "No message provided"
            }
            _getInnerStack() {
                return this._innerError.stack || "No stack provided"
            }
        }
        t.default = r
    },
    834: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function ({ onRestart: e, showBugButton: t }) {
                return s.default.createElement(u.default, null, t && s.default.createElement(l.default, null, s.default.createElement(r.default, null)), s.default.createElement(l.default, null, s.default.createElement(c.default, {
                    "aria-label": i.default._("Restart", null, {
                        hk: "3om0ET"
                    }).toString(),
                    telemetryName: "restart",
                    caption: i.default._("Restart", null, {
                        hk: "3om0ET"
                    }),
                    onClick: () => {
                        a.default.metrics.trackStrictEventImmediate((0,
                            o.UserInteractionEvent)({
                                event: "click",
                                target: "restart",
                                surface: "messenger"
                            })),
                            e()
                    }
                    ,
                    use: c.RectangleButtonUse.Primary
                })))
            }
            ;
        var r = f(n(835))
            , o = n(24)
            , i = f(n(5))
            , a = f(n(9))
            , s = f(n(0))
            , c = function (e) {
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
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(16))
            , l = f(n(103))
            , u = f(n(120));
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
    },
    835: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = void 0;
        var r = n(24)
            , o = n(8)
            , i = f(n(5))
            , a = f(n(9))
            , s = n(28)
            , c = n(11)
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
                var n = {}
                    , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var i = r ? Object.getOwnPropertyDescriptor(e, o) : null;
                        i && (i.get || i.set) ? Object.defineProperty(n, o, i) : n[o] = e[o]
                    }
                n.default = e,
                    t && t.set(e, n);
                return n
            }(n(0))
            , u = f(n(16));
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
        const p = {
            openOrFocusPortalWindow: s.AppContextActions.openOrFocusPortalWindow
        };
        var h = (0,
            c.connect)(null, p)((function ({ openOrFocusPortalWindow: e }) {
                const t = (0,
                    l.useCallback)(() => e({
                        portalKey: o.PortalKey.Feedback
                    }), [e]);
                return (l.default.createElement(u.default, {
                    "aria-label": i.default._("File a bug", null, {
                        hk: "2msK0Z"
                    }).toString(),
                    telemetryName: "reportBug",
                    caption: i.default._("File a bug", null, {
                        hk: "2msK0Z"
                    }),
                    onClick: () => {
                        a.default.metrics.trackStrictEventImmediate((0,
                            r.UserInteractionEvent)({
                                event: "click",
                                target: "reportBugErrorScreen",
                                surface: "messenger"
                            })),
                            t()
                    }
                }))
            }
            ));
        t.default = h
    },
    836: function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
            t.default = function (e) {
                return o.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 72 72",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, o.default.createElement("path", {
                    fill: "#20252D",
                    fillRule: "evenodd",
                    d: "M36 0C16.117 0 0 16.117 0 36c0 6.71 1.838 12.99 5.035 18.368L2.123 67.49a2 2 0 002.385 2.386l13.124-2.91A35.826 35.826 0 0036 72c19.882 0 36-16.117 36-36S55.882 0 36 0z",
                    clipRule: "evenodd"
                }), o.default.createElement("path", {
                    fill: "#fff",
                    fillRule: "evenodd",
                    d: "M55.289 46.721c-.684.815-2.051 2.08-3.905 2.08-2.784 0-3.682-1.996-4.526-4.105L42.74 34.455l-4.228 10.241c-.71 1.747-1.479 4.109-4.53 4.109-3.05 0-3.824-2.362-4.535-4.109l-7.087-17h6.053l5.569 13.951 4.263-10.336c.665-1.636 1.457-4.106 4.49-4.106 3.033 0 3.83 2.471 4.498 4.106l4.506 11.191a17.39 17.39 0 002.91-9.658c0-9.67-7.864-17.51-17.566-17.51-5.537 0-10.743 2.15-14.659 6.053A20.497 20.497 0 0016.354 36c0 5.52 2.16 10.71 6.076 14.614 3.916 3.903 9.13 6.053 14.667 6.053 1.9 0 3.268-.168 5.085-.672v5.492c-1.852.4-3.191.513-5.085.513a26.064 26.064 0 01-18.458-7.615 25.906 25.906 0 01-5.588-8.264A25.77 25.77 0 0111 36c0-3.509.69-6.914 2.05-10.121a25.905 25.905 0 015.59-8.264 25.999 25.999 0 018.29-5.57A25.993 25.993 0 0137.082 10C49.74 10 60 20.228 60 32.844c0 5.22-1.756 10.03-4.711 13.877z",
                    clipRule: "evenodd"
                }))
            }
            ;
        var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        }
    },
    857: function (e, t, n) {
        var r = n(68)
            , o = n(858)
            , i = n(414)
            , a = n(128);
        e.exports = function (e, t) {
            for (var n = o(t), s = a.f, c = i.f, l = 0; l < n.length; l++) {
                var u = n[l];
                r(e, u) || s(e, u, c(t, u))
            }
        }
    },
    858: function (e, t, n) {
        var r = n(284)
            , o = n(860)
            , i = n(424)
            , a = n(80);
        e.exports = r("Reflect", "ownKeys") || function (e) {
            var t = o.f(a(e))
                , n = i.f;
            return n ? t.concat(n(e)) : t
        }
    },
    859: function (e, t, n) {
        var r = n(48);
        e.exports = r
    },
    860: function (e, t, n) {
        var r = n(423)
            , o = n(285).concat("length", "prototype");
        t.f = Object.getOwnPropertyNames || function (e) {
            return r(e, o)
        }
    },
    861: function (e, t, n) {
        var r = n(206)
            , o = n(152)
            , i = n(862)
            , a = function (e) {
                return function (t, n, a) {
                    var s, c = r(t), l = o(c.length), u = i(a, l);
                    if (e && n != n) {
                        for (; l > u;)
                            if ((s = c[u++]) != s)
                                return !0
                    } else
                        for (; l > u; u++)
                            if ((e || u in c) && c[u] === n)
                                return e || u || 0;
                    return !e && -1
                }
            };
        e.exports = {
            includes: a(!0),
            indexOf: a(!1)
        }
    },
    862: function (e, t, n) {
        var r = n(210)
            , o = Math.max
            , i = Math.min;
        e.exports = function (e, t) {
            var n = r(e);
            return n < 0 ? o(n + t, 0) : i(n, t)
        }
    },
    863: function (e, t, n) {
        var r = n(79)
            , o = n(864)
            , i = n(62)("species");
        e.exports = function (e, t) {
            var n;
            return o(e) && ("function" != typeof (n = e.constructor) || n !== Array && !o(n.prototype) ? r(n) && null === (n = n[i]) && (n = void 0) : n = void 0),
                new (void 0 === n ? Array : n)(0 === t ? 0 : t)
        }
    },
    864: function (e, t, n) {
        var r = n(208);
        e.exports = Array.isArray || function (e) {
            return "Array" == r(e)
        }
    },
    865: function (e, t, n) {
        var r = n(428);
        e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
    },
    866: function (e, t, n) {
        var r = n(55)
            , o = n(62)
            , i = n(867)
            , a = o("species");
        e.exports = function (e) {
            return i >= 51 || !r((function () {
                var t = [];
                return (t.constructor = {})[a] = function () {
                    return {
                        foo: 1
                    }
                }
                    ,
                    1 !== t[e](Boolean).foo
            }
            ))
        }
    },
    867: function (e, t, n) {
        var r, o, i = n(48), a = n(868), s = i.process, c = s && s.versions, l = c && c.v8;
        l ? o = (r = l.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = r[1]),
            e.exports = o && +o
    },
    868: function (e, t, n) {
        var r = n(284);
        e.exports = r("navigator", "userAgent") || ""
    },
    869: function (e, t, n) {
        var r = n(62)
            , o = n(432)
            , i = n(128)
            , a = r("unscopables")
            , s = Array.prototype;
        null == s[a] && i.f(s, a, {
            configurable: !0,
            value: o(null)
        }),
            e.exports = function (e) {
                s[a][e] = !0
            }
    },
    870: function (e, t, n) {
        var r = n(110)
            , o = n(128)
            , i = n(80)
            , a = n(433);
        e.exports = r ? Object.defineProperties : function (e, t) {
            i(e);
            for (var n, r = a(t), s = r.length, c = 0; s > c;)
                o.f(e, n = r[c++], t[n]);
            return e
        }
    },
    871: function (e, t, n) {
        var r = n(284);
        e.exports = r("document", "documentElement")
    },
    872: function (e, t, n) {
        "use strict";
        var r = n(435).IteratorPrototype
            , o = n(432)
            , i = n(279)
            , a = n(289)
            , s = n(178)
            , c = function () {
                return this
            };
        e.exports = function (e, t, n) {
            var l = t + " Iterator";
            return e.prototype = o(r, {
                next: i(1, n)
            }),
                a(e, l, !1, !0),
                s[l] = c,
                e
        }
    },
    873: function (e, t, n) {
        var r = n(55);
        e.exports = !r((function () {
            function e() { }
            return e.prototype.constructor = null,
                Object.getPrototypeOf(new e) !== e.prototype
        }
        ))
    },
    874: function (e, t, n) {
        var r = n(79);
        e.exports = function (e) {
            if (!r(e) && null !== e)
                throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        }
    },
    875: function (e, t, n) {
        "use strict";
        var r = n(110)
            , o = n(55)
            , i = n(433)
            , a = n(424)
            , s = n(415)
            , c = n(177)
            , l = n(207)
            , u = Object.assign
            , d = Object.defineProperty;
        e.exports = !u || o((function () {
            if (r && 1 !== u({
                b: 1
            }, u(d({}, "a", {
                enumerable: !0,
                get: function () {
                    d(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b)
                return !0;
            var e = {}
                , t = {}
                , n = Symbol();
            return e[n] = 7,
                "abcdefghijklmnopqrst".split("").forEach((function (e) {
                    t[e] = e
                }
                )),
                7 != u({}, e)[n] || "abcdefghijklmnopqrst" != i(u({}, t)).join("")
        }
        )) ? function (e, t) {
            for (var n = c(e), o = arguments.length, u = 1, d = a.f, f = s.f; o > u;)
                for (var p, h = l(arguments[u++]), E = d ? i(h).concat(d(h)) : i(h), _ = E.length, v = 0; _ > v;)
                    p = E[v++],
                        r && !f.call(h, p) || (n[p] = h[p]);
            return n
        }
            : u
    },
    876: function (e, t, n) {
        "use strict";
        var r = n(290)
            , o = n(440);
        e.exports = r ? {}.toString : function () {
            return "[object " + o(this) + "]"
        }
    },
    877: function (e, t, n) {
        var r = n(48)
            , o = n(878).trim
            , i = n(442)
            , a = r.parseInt
            , s = /^[+-]?0[Xx]/
            , c = 8 !== a(i + "08") || 22 !== a(i + "0x16");
        e.exports = c ? function (e, t) {
            var n = o(String(e));
            return a(n, t >>> 0 || (s.test(n) ? 16 : 10))
        }
            : a
    },
    878: function (e, t, n) {
        var r = n(150)
            , o = "[" + n(442) + "]"
            , i = RegExp("^" + o + o + "*")
            , a = RegExp(o + o + "*$")
            , s = function (e) {
                return function (t) {
                    var n = String(r(t));
                    return 1 & e && (n = n.replace(i, "")),
                        2 & e && (n = n.replace(a, "")),
                        n
                }
            };
        e.exports = {
            start: s(1),
            end: s(2),
            trim: s(3)
        }
    },
    879: function (e, t, n) {
        var r = n(55);
        e.exports = !r((function () {
            return Object.isExtensible(Object.preventExtensions({}))
        }
        ))
    },
    880: function (e, t, n) {
        "use strict";
        var r = n(109)
            , o = n(48)
            , i = n(425)
            , a = n(151)
            , s = n(291)
            , c = n(447)
            , l = n(448)
            , u = n(79)
            , d = n(55)
            , f = n(884)
            , p = n(289)
            , h = n(885);
        e.exports = function (e, t, n) {
            var E = -1 !== e.indexOf("Map")
                , _ = -1 !== e.indexOf("Weak")
                , v = E ? "set" : "add"
                , S = o[e]
                , y = S && S.prototype
                , g = S
                , m = {}
                , A = function (e) {
                    var t = y[e];
                    a(y, e, "add" == e ? function (e) {
                        return t.call(this, 0 === e ? 0 : e),
                            this
                    }
                        : "delete" == e ? function (e) {
                            return !(_ && !u(e)) && t.call(this, 0 === e ? 0 : e)
                        }
                            : "get" == e ? function (e) {
                                return _ && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                            }
                                : "has" == e ? function (e) {
                                    return !(_ && !u(e)) && t.call(this, 0 === e ? 0 : e)
                                }
                                    : function (e, n) {
                                        return t.call(this, 0 === e ? 0 : e, n),
                                            this
                                    }
                    )
                };
            if (i(e, "function" != typeof S || !(_ || y.forEach && !d((function () {
                (new S).entries().next()
            }
            )))))
                g = n.getConstructor(t, e, E, v),
                    s.REQUIRED = !0;
            else if (i(e, !0)) {
                var b = new g
                    , O = b[v](_ ? {} : -0, 1) != b
                    , T = d((function () {
                        b.has(1)
                    }
                    ))
                    , R = f((function (e) {
                        new S(e)
                    }
                    ))
                    , C = !_ && d((function () {
                        for (var e = new S, t = 5; t--;)
                            e[v](t, t);
                        return !e.has(-0)
                    }
                    ));
                R || ((g = t((function (t, n) {
                    l(t, g, e);
                    var r = h(new S, t, g);
                    return null != n && c(n, r[v], r, E),
                        r
                }
                ))).prototype = y,
                    y.constructor = g),
                    (T || C) && (A("delete"),
                        A("has"),
                        E && A("get")),
                    (C || O) && A(v),
                    _ && y.clear && delete y.clear
            }
            return m[e] = g,
                r({
                    global: !0,
                    forced: g != S
                }, m),
                p(g, e),
                _ || n.setStrong(g, e, E),
                g
        }
    },
    881: function (e, t, n) {
        var r = n(62)
            , o = n(178)
            , i = r("iterator")
            , a = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (o.Array === e || a[i] === e)
        }
    },
    882: function (e, t, n) {
        var r = n(440)
            , o = n(178)
            , i = n(62)("iterator");
        e.exports = function (e) {
            if (null != e)
                return e[i] || e["@@iterator"] || o[r(e)]
        }
    },
    883: function (e, t, n) {
        var r = n(80);
        e.exports = function (e, t, n, o) {
            try {
                return o ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && r(i.call(e)),
                t
            }
        }
    },
    884: function (e, t, n) {
        var r = n(62)("iterator")
            , o = !1;
        try {
            var i = 0
                , a = {
                    next: function () {
                        return {
                            done: !!i++
                        }
                    },
                    return: function () {
                        o = !0
                    }
                };
            a[r] = function () {
                return this
            }
                ,
                Array.from(a, (function () {
                    throw 2
                }
                ))
        } catch (e) { }
        e.exports = function (e, t) {
            if (!t && !o)
                return !1;
            var n = !1;
            try {
                var i = {};
                i[r] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }
                    ,
                    e(i)
            } catch (e) { }
            return n
        }
    },
    885: function (e, t, n) {
        var r = n(79)
            , o = n(437);
        e.exports = function (e, t, n) {
            var i, a;
            return o && "function" == typeof (i = t.constructor) && i !== n && r(a = i.prototype) && a !== n.prototype && o(e, a),
                e
        }
    },
    886: function (e, t, n) {
        "use strict";
        var r = n(446)
            , o = n(291).getWeakData
            , i = n(80)
            , a = n(79)
            , s = n(448)
            , c = n(447)
            , l = n(286)
            , u = n(68)
            , d = n(176)
            , f = d.set
            , p = d.getterFor
            , h = l.find
            , E = l.findIndex
            , _ = 0
            , v = function (e) {
                return e.frozen || (e.frozen = new S)
            }
            , S = function () {
                this.entries = []
            }
            , y = function (e, t) {
                return h(e.entries, (function (e) {
                    return e[0] === t
                }
                ))
            };
        S.prototype = {
            get: function (e) {
                var t = y(this, e);
                if (t)
                    return t[1]
            },
            has: function (e) {
                return !!y(this, e)
            },
            set: function (e, t) {
                var n = y(this, e);
                n ? n[1] = t : this.entries.push([e, t])
            },
            delete: function (e) {
                var t = E(this.entries, (function (t) {
                    return t[0] === e
                }
                ));
                return ~t && this.entries.splice(t, 1),
                    !!~t
            }
        },
            e.exports = {
                getConstructor: function (e, t, n, l) {
                    var d = e((function (e, r) {
                        s(e, d, t),
                            f(e, {
                                type: t,
                                id: _++,
                                frozen: void 0
                            }),
                            null != r && c(r, e[l], e, n)
                    }
                    ))
                        , h = p(t)
                        , E = function (e, t, n) {
                            var r = h(e)
                                , a = o(i(t), !0);
                            return !0 === a ? v(r).set(t, n) : a[r.id] = n,
                                e
                        };
                    return r(d.prototype, {
                        delete: function (e) {
                            var t = h(this);
                            if (!a(e))
                                return !1;
                            var n = o(e);
                            return !0 === n ? v(t).delete(e) : n && u(n, t.id) && delete n[t.id]
                        },
                        has: function (e) {
                            var t = h(this);
                            if (!a(e))
                                return !1;
                            var n = o(e);
                            return !0 === n ? v(t).has(e) : n && u(n, t.id)
                        }
                    }),
                        r(d.prototype, n ? {
                            get: function (e) {
                                var t = h(this);
                                if (a(e)) {
                                    var n = o(e);
                                    return !0 === n ? v(t).get(e) : n ? n[t.id] : void 0
                                }
                            },
                            set: function (e, t) {
                                return E(this, e, t)
                            }
                        } : {
                            add: function (e) {
                                return E(this, e, !0)
                            }
                        }),
                        d
                }
            }
    },
    887: function (e, t, n) {
        var r = n(427)
            , o = n(177)
            , i = n(207)
            , a = n(152)
            , s = function (e) {
                return function (t, n, s, c) {
                    r(n);
                    var l = o(t)
                        , u = i(l)
                        , d = a(l.length)
                        , f = e ? d - 1 : 0
                        , p = e ? -1 : 1;
                    if (s < 2)
                        for (; ;) {
                            if (f in u) {
                                c = u[f],
                                    f += p;
                                break
                            }
                            if (f += p,
                                e ? f < 0 : d <= f)
                                throw TypeError("Reduce of empty array with no initial value")
                        }
                    for (; e ? f >= 0 : d > f; f += p)
                        f in u && (c = n(c, u[f], f, l));
                    return c
                }
            };
        e.exports = {
            left: s(!1),
            right: s(!0)
        }
    },
    888: function (e, t, n) {
        "use strict";
        var r = n(80);
        e.exports = function () {
            var e = r(this)
                , t = "";
            return e.global && (t += "g"),
                e.ignoreCase && (t += "i"),
                e.multiline && (t += "m"),
                e.dotAll && (t += "s"),
                e.unicode && (t += "u"),
                e.sticky && (t += "y"),
                t
        }
    },
    889: function (e, t, n) {
        "use strict";
        var r = n(55);
        function o(e, t) {
            return RegExp(e, t)
        }
        t.UNSUPPORTED_Y = r((function () {
            var e = o("a", "y");
            return e.lastIndex = 2,
                null != e.exec("abcd")
        }
        )),
            t.BROKEN_CARET = r((function () {
                var e = o("^r", "gy");
                return e.lastIndex = 2,
                    null != e.exec("str")
            }
            ))
    },
    890: function (e, t, n) {
        "use strict";
        n.r(t);
        n(429),
            n(891);
        var r = n(137)
            , o = n.n(r)
            , i = (n(413),
                n(288),
                n(438),
                n(439),
                n(441),
                n(443),
                n(445),
                n(449),
                n(158))
            , a = n.n(i)
            , s = n(159)
            , c = n.n(s)
            , l = n(238)
            , u = n.n(l)
            , d = n(239)
            , f = (n(451),
                n(452),
                n(292),
                n(453),
                n(457),
                null)
            , p = null;
        function h() {
            if (null === f) {
                if ("undefined" == typeof document)
                    return f = 0;
                var e = document.body
                    , t = document.createElement("div");
                t.classList.add("simplebar-hide-scrollbar"),
                    e.appendChild(t);
                var n = t.getBoundingClientRect().right;
                e.removeChild(t),
                    f = n
            }
            return f
        }
        o.a && window.addEventListener("resize", (function () {
            p !== window.devicePixelRatio && (p = window.devicePixelRatio,
                f = null)
        }
        ));
        var E = function (e) {
            return Array.prototype.reduce.call(e, (function (e, t) {
                var n = t.name.match(/data-simplebar-(.+)/);
                if (n) {
                    var r = n[1].replace(/\W+(.)/g, (function (e, t) {
                        return t.toUpperCase()
                    }
                    ));
                    switch (t.value) {
                        case "true":
                            e[r] = !0;
                            break;
                        case "false":
                            e[r] = !1;
                            break;
                        case void 0:
                            e[r] = !0;
                            break;
                        default:
                            e[r] = t.value
                    }
                }
                return e
            }
            ), {})
        };
        function _(e) {
            return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window
        }
        function v(e) {
            return e && e.ownerDocument ? e.ownerDocument : document
        }
        var S = function () {
            function e(t, n) {
                var r = this;
                this.onScroll = function () {
                    var e = _(r.el);
                    r.scrollXTicking || (e.requestAnimationFrame(r.scrollX),
                        r.scrollXTicking = !0),
                        r.scrollYTicking || (e.requestAnimationFrame(r.scrollY),
                            r.scrollYTicking = !0)
                }
                    ,
                    this.scrollX = function () {
                        r.axis.x.isOverflowing && (r.showScrollbar("x"),
                            r.positionScrollbar("x")),
                            r.scrollXTicking = !1
                    }
                    ,
                    this.scrollY = function () {
                        r.axis.y.isOverflowing && (r.showScrollbar("y"),
                            r.positionScrollbar("y")),
                            r.scrollYTicking = !1
                    }
                    ,
                    this.onMouseEnter = function () {
                        r.showScrollbar("x"),
                            r.showScrollbar("y")
                    }
                    ,
                    this.onMouseMove = function (e) {
                        r.mouseX = e.clientX,
                            r.mouseY = e.clientY,
                            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseMoveForAxis("x"),
                            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseMoveForAxis("y")
                    }
                    ,
                    this.onMouseLeave = function () {
                        r.onMouseMove.cancel(),
                            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseLeaveForAxis("x"),
                            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseLeaveForAxis("y"),
                            r.mouseX = -1,
                            r.mouseY = -1
                    }
                    ,
                    this.onWindowResize = function () {
                        r.scrollbarWidth = r.getScrollbarWidth(),
                            r.hideNativeScrollbar()
                    }
                    ,
                    this.hideScrollbars = function () {
                        r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(),
                            r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(),
                            r.isWithinBounds(r.axis.y.track.rect) || (r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),
                                r.axis.y.isVisible = !1),
                            r.isWithinBounds(r.axis.x.track.rect) || (r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),
                                r.axis.x.isVisible = !1)
                    }
                    ,
                    this.onPointerEvent = function (e) {
                        var t, n;
                        r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(),
                            r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(),
                            (r.axis.x.isOverflowing || r.axis.x.forceVisible) && (t = r.isWithinBounds(r.axis.x.track.rect)),
                            (r.axis.y.isOverflowing || r.axis.y.forceVisible) && (n = r.isWithinBounds(r.axis.y.track.rect)),
                            (t || n) && (e.preventDefault(),
                                e.stopPropagation(),
                                "mousedown" === e.type && (t && (r.axis.x.scrollbar.rect = r.axis.x.scrollbar.el.getBoundingClientRect(),
                                    r.isWithinBounds(r.axis.x.scrollbar.rect) ? r.onDragStart(e, "x") : r.onTrackClick(e, "x")),
                                    n && (r.axis.y.scrollbar.rect = r.axis.y.scrollbar.el.getBoundingClientRect(),
                                        r.isWithinBounds(r.axis.y.scrollbar.rect) ? r.onDragStart(e, "y") : r.onTrackClick(e, "y"))))
                    }
                    ,
                    this.drag = function (t) {
                        var n = r.axis[r.draggedAxis].track
                            , o = n.rect[r.axis[r.draggedAxis].sizeAttr]
                            , i = r.axis[r.draggedAxis].scrollbar
                            , a = r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr]
                            , s = parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr], 10);
                        t.preventDefault(),
                            t.stopPropagation();
                        var c = (("y" === r.draggedAxis ? t.pageY : t.pageX) - n.rect[r.axis[r.draggedAxis].offsetAttr] - r.axis[r.draggedAxis].dragOffset) / (o - i.size) * (a - s);
                        "x" === r.draggedAxis && (c = r.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? c - (o + i.size) : c,
                            c = r.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -c : c),
                            r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] = c
                    }
                    ,
                    this.onEndDrag = function (e) {
                        var t = v(r.el)
                            , n = _(r.el);
                        e.preventDefault(),
                            e.stopPropagation(),
                            r.el.classList.remove(r.classNames.dragging),
                            t.removeEventListener("mousemove", r.drag, !0),
                            t.removeEventListener("mouseup", r.onEndDrag, !0),
                            r.removePreventClickId = n.setTimeout((function () {
                                t.removeEventListener("click", r.preventClick, !0),
                                    t.removeEventListener("dblclick", r.preventClick, !0),
                                    r.removePreventClickId = null
                            }
                            ))
                    }
                    ,
                    this.preventClick = function (e) {
                        e.preventDefault(),
                            e.stopPropagation()
                    }
                    ,
                    this.el = t,
                    this.minScrollbarWidth = 20,
                    this.options = Object.assign({}, e.defaultOptions, {}, n),
                    this.classNames = Object.assign({}, e.defaultOptions.classNames, {}, this.options.classNames),
                    this.axis = {
                        x: {
                            scrollOffsetAttr: "scrollLeft",
                            sizeAttr: "width",
                            scrollSizeAttr: "scrollWidth",
                            offsetSizeAttr: "offsetWidth",
                            offsetAttr: "left",
                            overflowAttr: "overflowX",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        },
                        y: {
                            scrollOffsetAttr: "scrollTop",
                            sizeAttr: "height",
                            scrollSizeAttr: "scrollHeight",
                            offsetSizeAttr: "offsetHeight",
                            offsetAttr: "top",
                            overflowAttr: "overflowY",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        }
                    },
                    this.removePreventClickId = null,
                    e.instances.has(this.el) || (this.recalculate = a()(this.recalculate.bind(this), 64),
                        this.onMouseMove = a()(this.onMouseMove.bind(this), 64),
                        this.hideScrollbars = c()(this.hideScrollbars.bind(this), this.options.timeout),
                        this.onWindowResize = c()(this.onWindowResize.bind(this), 64, {
                            leading: !0
                        }),
                        e.getRtlHelpers = u()(e.getRtlHelpers),
                        this.init())
            }
            e.getRtlHelpers = function () {
                var t = document.createElement("div");
                t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                var n = t.firstElementChild;
                document.body.appendChild(n);
                var r = n.firstElementChild;
                n.scrollLeft = 0;
                var o = e.getOffset(n)
                    , i = e.getOffset(r);
                n.scrollLeft = 999;
                var a = e.getOffset(r);
                return {
                    isRtlScrollingInverted: o.left !== i.left && i.left - a.left != 0,
                    isRtlScrollbarInverted: o.left !== i.left
                }
            }
                ,
                e.getOffset = function (e) {
                    var t = e.getBoundingClientRect()
                        , n = v(e)
                        , r = _(e);
                    return {
                        top: t.top + (r.pageYOffset || n.documentElement.scrollTop),
                        left: t.left + (r.pageXOffset || n.documentElement.scrollLeft)
                    }
                }
                ;
            var t = e.prototype;
            return t.init = function () {
                e.instances.set(this.el, this),
                    o.a && (this.initDOM(),
                        this.scrollbarWidth = this.getScrollbarWidth(),
                        this.recalculate(),
                        this.initListeners())
            }
                ,
                t.initDOM = function () {
                    var e = this;
                    v(this.el);
                    if (Array.prototype.filter.call(this.el.children, (function (t) {
                        return t.classList.contains(e.classNames.wrapper)
                    }
                    )).length)
                        this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper),
                            this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper),
                            this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl),
                            this.offsetEl = this.el.querySelector("." + this.classNames.offset),
                            this.maskEl = this.el.querySelector("." + this.classNames.mask),
                            this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder),
                            this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl),
                            this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl),
                            this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal),
                            this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
                    else {
                        for (this.wrapperEl = document.createElement("div"),
                            this.contentWrapperEl = document.createElement("div"),
                            this.offsetEl = document.createElement("div"),
                            this.maskEl = document.createElement("div"),
                            this.contentEl = document.createElement("div"),
                            this.placeholderEl = document.createElement("div"),
                            this.heightAutoObserverWrapperEl = document.createElement("div"),
                            this.heightAutoObserverEl = document.createElement("div"),
                            this.wrapperEl.classList.add(this.classNames.wrapper),
                            this.contentWrapperEl.classList.add(this.classNames.contentWrapper),
                            this.offsetEl.classList.add(this.classNames.offset),
                            this.maskEl.classList.add(this.classNames.mask),
                            this.contentEl.classList.add(this.classNames.contentEl),
                            this.placeholderEl.classList.add(this.classNames.placeholder),
                            this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),
                            this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;)
                            this.contentEl.appendChild(this.el.firstChild);
                        this.contentWrapperEl.appendChild(this.contentEl),
                            this.offsetEl.appendChild(this.contentWrapperEl),
                            this.maskEl.appendChild(this.offsetEl),
                            this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),
                            this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                            this.wrapperEl.appendChild(this.maskEl),
                            this.wrapperEl.appendChild(this.placeholderEl),
                            this.el.appendChild(this.wrapperEl)
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var t = document.createElement("div")
                            , n = document.createElement("div");
                        t.classList.add(this.classNames.track),
                            n.classList.add(this.classNames.scrollbar),
                            t.appendChild(n),
                            this.axis.x.track.el = t.cloneNode(!0),
                            this.axis.x.track.el.classList.add(this.classNames.horizontal),
                            this.axis.y.track.el = t.cloneNode(!0),
                            this.axis.y.track.el.classList.add(this.classNames.vertical),
                            this.el.appendChild(this.axis.x.track.el),
                            this.el.appendChild(this.axis.y.track.el)
                    }
                    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar),
                        this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar),
                        this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible),
                            this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),
                        this.el.setAttribute("data-simplebar", "init")
                }
                ,
                t.initListeners = function () {
                    var e = this
                        , t = _(this.el);
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter),
                        ["mousedown", "click", "dblclick"].forEach((function (t) {
                            e.el.addEventListener(t, e.onPointerEvent, !0)
                        }
                        )),
                        ["touchstart", "touchend", "touchmove"].forEach((function (t) {
                            e.el.addEventListener(t, e.onPointerEvent, {
                                capture: !0,
                                passive: !0
                            })
                        }
                        )),
                        this.el.addEventListener("mousemove", this.onMouseMove),
                        this.el.addEventListener("mouseleave", this.onMouseLeave),
                        this.contentWrapperEl.addEventListener("scroll", this.onScroll),
                        t.addEventListener("resize", this.onWindowResize);
                    var n = !1
                        , r = t.ResizeObserver || d.a;
                    this.resizeObserver = new r((function () {
                        n && e.recalculate()
                    }
                    )),
                        this.resizeObserver.observe(this.el),
                        this.resizeObserver.observe(this.contentEl),
                        t.requestAnimationFrame((function () {
                            n = !0
                        }
                        )),
                        this.mutationObserver = new t.MutationObserver(this.recalculate),
                        this.mutationObserver.observe(this.contentEl, {
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        })
                }
                ,
                t.recalculate = function () {
                    var e = _(this.el);
                    this.elStyles = e.getComputedStyle(this.el),
                        this.isRtl = "rtl" === this.elStyles.direction;
                    var t = this.heightAutoObserverEl.offsetHeight <= 1
                        , n = this.heightAutoObserverEl.offsetWidth <= 1
                        , r = this.contentEl.offsetWidth
                        , o = this.contentWrapperEl.offsetWidth
                        , i = this.elStyles.overflowX
                        , a = this.elStyles.overflowY;
                    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft,
                        this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
                    var s = this.contentEl.scrollHeight
                        , c = this.contentEl.scrollWidth;
                    this.contentWrapperEl.style.height = t ? "auto" : "100%",
                        this.placeholderEl.style.width = n ? r + "px" : "auto",
                        this.placeholderEl.style.height = s + "px";
                    var l = this.contentWrapperEl.offsetHeight;
                    this.axis.x.isOverflowing = c > r,
                        this.axis.y.isOverflowing = s > l,
                        this.axis.x.isOverflowing = "hidden" !== i && this.axis.x.isOverflowing,
                        this.axis.y.isOverflowing = "hidden" !== a && this.axis.y.isOverflowing,
                        this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible,
                        this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible,
                        this.hideNativeScrollbar();
                    var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0
                        , d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    this.axis.x.isOverflowing = this.axis.x.isOverflowing && c > o - d,
                        this.axis.y.isOverflowing = this.axis.y.isOverflowing && s > l - u,
                        this.axis.x.scrollbar.size = this.getScrollbarSize("x"),
                        this.axis.y.scrollbar.size = this.getScrollbarSize("y"),
                        this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px",
                        this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px",
                        this.positionScrollbar("x"),
                        this.positionScrollbar("y"),
                        this.toggleTrackVisibility("x"),
                        this.toggleTrackVisibility("y")
                }
                ,
                t.getScrollbarSize = function (e) {
                    if (void 0 === e && (e = "y"),
                        !this.axis[e].isOverflowing)
                        return 0;
                    var t, n = this.contentEl[this.axis[e].scrollSizeAttr], r = this.axis[e].track.el[this.axis[e].offsetSizeAttr], o = r / n;
                    return t = Math.max(~~(o * r), this.options.scrollbarMinSize),
                        this.options.scrollbarMaxSize && (t = Math.min(t, this.options.scrollbarMaxSize)),
                        t
                }
                ,
                t.positionScrollbar = function (t) {
                    if (void 0 === t && (t = "y"),
                        this.axis[t].isOverflowing) {
                        var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr]
                            , r = this.axis[t].track.el[this.axis[t].offsetSizeAttr]
                            , o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10)
                            , i = this.axis[t].scrollbar
                            , a = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]
                            , s = (a = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -a : a) / (n - o)
                            , c = ~~((r - i.size) * s);
                        c = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? c + (r - i.size) : c,
                            i.el.style.transform = "x" === t ? "translate3d(" + c + "px, 0, 0)" : "translate3d(0, " + c + "px, 0)"
                    }
                }
                ,
                t.toggleTrackVisibility = function (e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].track.el
                        , n = this.axis[e].scrollbar.el;
                    this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible",
                        this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll") : (t.style.visibility = "hidden",
                            this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden"),
                        this.axis[e].isOverflowing ? n.style.display = "block" : n.style.display = "none"
                }
                ,
                t.hideNativeScrollbar = function () {
                    this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0,
                        this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
                }
                ,
                t.onMouseMoveForAxis = function (e) {
                    void 0 === e && (e = "y"),
                        this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect(),
                        this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(),
                        this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover),
                        this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e),
                            this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover)
                }
                ,
                t.onMouseLeaveForAxis = function (e) {
                    void 0 === e && (e = "y"),
                        this.axis[e].track.el.classList.remove(this.classNames.hover),
                        this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)
                }
                ,
                t.showScrollbar = function (e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].scrollbar.el;
                    this.axis[e].isVisible || (t.classList.add(this.classNames.visible),
                        this.axis[e].isVisible = !0),
                        this.options.autoHide && this.hideScrollbars()
                }
                ,
                t.onDragStart = function (e, t) {
                    void 0 === t && (t = "y");
                    var n = v(this.el)
                        , r = _(this.el)
                        , o = this.axis[t].scrollbar
                        , i = "y" === t ? e.pageY : e.pageX;
                    this.axis[t].dragOffset = i - o.rect[this.axis[t].offsetAttr],
                        this.draggedAxis = t,
                        this.el.classList.add(this.classNames.dragging),
                        n.addEventListener("mousemove", this.drag, !0),
                        n.addEventListener("mouseup", this.onEndDrag, !0),
                        null === this.removePreventClickId ? (n.addEventListener("click", this.preventClick, !0),
                            n.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId),
                                this.removePreventClickId = null)
                }
                ,
                t.onTrackClick = function (e, t) {
                    var n = this;
                    if (void 0 === t && (t = "y"),
                        this.options.clickOnTrack) {
                        var r = _(this.el);
                        this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect();
                        var o = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr]
                            , i = parseInt(this.elStyles[this.axis[t].sizeAttr], 10)
                            , a = this.contentWrapperEl[this.axis[t].scrollOffsetAttr]
                            , s = ("y" === t ? this.mouseY - o : this.mouseX - o) < 0 ? -1 : 1
                            , c = -1 === s ? a - i : a + i;
                        !function e() {
                            var o, i;
                            -1 === s ? a > c && (a -= 40,
                                n.contentWrapperEl.scrollTo(((o = {})[n.axis[t].offsetAttr] = a,
                                    o)),
                                r.requestAnimationFrame(e)) : a < c && (a += 40,
                                    n.contentWrapperEl.scrollTo(((i = {})[n.axis[t].offsetAttr] = a,
                                        i)),
                                    r.requestAnimationFrame(e))
                        }()
                    }
                }
                ,
                t.getContentElement = function () {
                    return this.contentEl
                }
                ,
                t.getScrollElement = function () {
                    return this.contentWrapperEl
                }
                ,
                t.getScrollbarWidth = function () {
                    try {
                        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : h()
                    } catch (e) {
                        return h()
                    }
                }
                ,
                t.removeListeners = function () {
                    var e = this
                        , t = _(this.el);
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter),
                        ["mousedown", "click", "dblclick"].forEach((function (t) {
                            e.el.removeEventListener(t, e.onPointerEvent, !0)
                        }
                        )),
                        ["touchstart", "touchend", "touchmove"].forEach((function (t) {
                            e.el.removeEventListener(t, e.onPointerEvent, {
                                capture: !0,
                                passive: !0
                            })
                        }
                        )),
                        this.el.removeEventListener("mousemove", this.onMouseMove),
                        this.el.removeEventListener("mouseleave", this.onMouseLeave),
                        this.contentWrapperEl.removeEventListener("scroll", this.onScroll),
                        t.removeEventListener("resize", this.onWindowResize),
                        this.mutationObserver.disconnect(),
                        this.resizeObserver.disconnect(),
                        this.recalculate.cancel(),
                        this.onMouseMove.cancel(),
                        this.hideScrollbars.cancel(),
                        this.onWindowResize.cancel()
                }
                ,
                t.unMount = function () {
                    this.removeListeners(),
                        e.instances.delete(this.el)
                }
                ,
                t.isWithinBounds = function (e) {
                    return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
                }
                ,
                t.findChild = function (e, t) {
                    var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                    return Array.prototype.filter.call(e.children, (function (e) {
                        return n.call(e, t)
                    }
                    ))[0]
                }
                ,
                e
        }();
        S.defaultOptions = {
            autoHide: !0,
            forceVisible: !1,
            clickOnTrack: !0,
            classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging"
            },
            scrollbarMinSize: 25,
            scrollbarMaxSize: 0,
            timeout: 1e3
        },
            S.instances = new WeakMap,
            S.initDOMLoadedElements = function () {
                document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                    window.removeEventListener("load", this.initDOMLoadedElements),
                    Array.prototype.forEach.call(document.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function (e) {
                        S.instances.has(e) || new S(e, E(e.attributes))
                    }
                    ))
            }
            ,
            S.removeObserver = function () {
                this.globalObserver.disconnect()
            }
            ,
            S.initHtmlApi = function () {
                this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this),
                    "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(S.handleMutations),
                        this.globalObserver.observe(document, {
                            childList: !0,
                            subtree: !0
                        })),
                    "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements),
                        window.addEventListener("load", this.initDOMLoadedElements))
            }
            ,
            S.handleMutations = function (e) {
                e.forEach((function (e) {
                    Array.prototype.forEach.call(e.addedNodes, (function (e) {
                        1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !S.instances.has(e) && new S(e, E(e.attributes)) : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar]:not([data-simplebar="init"])'), (function (e) {
                            !S.instances.has(e) && new S(e, E(e.attributes))
                        }
                        )))
                    }
                    )),
                        Array.prototype.forEach.call(e.removedNodes, (function (e) {
                            1 === e.nodeType && (e.hasAttribute('[data-simplebar="init"]') ? S.instances.has(e) && S.instances.get(e).unMount() : Array.prototype.forEach.call(e.querySelectorAll('[data-simplebar="init"]'), (function (e) {
                                S.instances.has(e) && S.instances.get(e).unMount()
                            }
                            )))
                        }
                        ))
                }
                ))
            }
            ,
            S.getOptions = E,
            o.a && S.initHtmlApi(),
            t.default = S
    },
    891: function (e, t, n) {
        var r = n(48)
            , o = n(450)
            , i = n(430)
            , a = n(93);
        for (var s in o) {
            var c = r[s]
                , l = c && c.prototype;
            if (l && l.forEach !== i)
                try {
                    a(l, "forEach", i)
                } catch (e) {
                    l.forEach = i
                }
        }
    },
    90: function (e, t, n) {
        "use strict";
        e.exports = function (e, t, n, r, o, i, a, s) {
            if (!e) {
                var c;
                if (void 0 === t)
                    c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, r, o, i, a, s]
                        , u = 0;
                    (c = new Error(t.replace(/%s/g, (function () {
                        return l[u++]
                    }
                    )))).name = "Invariant Violation"
                }
                throw c.framesToPop = 1,
                c
            }
        }
    },
    93: function (e, t, n) {
        var r = n(110)
            , o = n(128)
            , i = n(279);
        e.exports = r ? function (e, t, n) {
            return o.f(e, t, i(1, n))
        }
            : function (e, t, n) {
                return e[t] = n,
                    e
            }
    },
    96: function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "__DO_NOT_USE__ActionTypes", (function () {
                return i
            }
            )),
            n.d(t, "applyMiddleware", (function () {
                return _
            }
            )),
            n.d(t, "bindActionCreators", (function () {
                return d
            }
            )),
            n.d(t, "combineReducers", (function () {
                return l
            }
            )),
            n.d(t, "compose", (function () {
                return E
            }
            )),
            n.d(t, "createStore", (function () {
                return s
            }
            ));
        var r = n(336)
            , o = function () {
                return Math.random().toString(36).substring(7).split("").join(".")
            }
            , i = {
                INIT: "@@redux/INIT" + o(),
                REPLACE: "@@redux/REPLACE" + o(),
                PROBE_UNKNOWN_ACTION: function () {
                    return "@@redux/PROBE_UNKNOWN_ACTION" + o()
                }
            };
        function a(e) {
            if ("object" != typeof e || null === e)
                return !1;
            for (var t = e; null !== Object.getPrototypeOf(t);)
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        function s(e, t, n) {
            var o;
            if ("function" == typeof t && "function" == typeof n || "function" == typeof n && "function" == typeof arguments[3])
                throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
            if ("function" == typeof t && void 0 === n && (n = t,
                t = void 0),
                void 0 !== n) {
                if ("function" != typeof n)
                    throw new Error("Expected the enhancer to be a function.");
                return n(s)(e, t)
            }
            if ("function" != typeof e)
                throw new Error("Expected the reducer to be a function.");
            var c = e
                , l = t
                , u = []
                , d = u
                , f = !1;
            function p() {
                d === u && (d = u.slice())
            }
            function h() {
                if (f)
                    throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                return l
            }
            function E(e) {
                if ("function" != typeof e)
                    throw new Error("Expected the listener to be a function.");
                if (f)
                    throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                var t = !0;
                return p(),
                    d.push(e),
                    function () {
                        if (t) {
                            if (f)
                                throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");
                            t = !1,
                                p();
                            var n = d.indexOf(e);
                            d.splice(n, 1),
                                u = null
                        }
                    }
            }
            function _(e) {
                if (!a(e))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type)
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (f)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    f = !0,
                        l = c(l, e)
                } finally {
                    f = !1
                }
                for (var t = u = d, n = 0; n < t.length; n++) {
                    (0,
                        t[n])()
                }
                return e
            }
            function v(e) {
                if ("function" != typeof e)
                    throw new Error("Expected the nextReducer to be a function.");
                c = e,
                    _({
                        type: i.REPLACE
                    })
            }
            function S() {
                var e, t = E;
                return (e = {
                    subscribe: function (e) {
                        if ("object" != typeof e || null === e)
                            throw new TypeError("Expected the observer to be an object.");
                        function n() {
                            e.next && e.next(h())
                        }
                        return n(),
                        {
                            unsubscribe: t(n)
                        }
                    }
                })[r.a] = function () {
                    return this
                }
                    ,
                    e
            }
            return _({
                type: i.INIT
            }),
                (o = {
                    dispatch: _,
                    subscribe: E,
                    getState: h,
                    replaceReducer: v
                })[r.a] = S,
                o
        }
        function c(e, t) {
            var n = t && t.type;
            return "Given " + (n && 'action "' + String(n) + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
        }
        function l(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                0,
                    "function" == typeof e[o] && (n[o] = e[o])
            }
            var a, s = Object.keys(n);
            try {
                !function (e) {
                    Object.keys(e).forEach((function (t) {
                        var n = e[t];
                        if (void 0 === n(void 0, {
                            type: i.INIT
                        }))
                            throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
                        if (void 0 === n(void 0, {
                            type: i.PROBE_UNKNOWN_ACTION()
                        }))
                            throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')
                    }
                    ))
                }(n)
            } catch (e) {
                a = e
            }
            return function (e, t) {
                if (void 0 === e && (e = {}),
                    a)
                    throw a;
                for (var r = !1, o = {}, i = 0; i < s.length; i++) {
                    var l = s[i]
                        , u = n[l]
                        , d = e[l]
                        , f = u(d, t);
                    if (void 0 === f) {
                        var p = c(l, t);
                        throw new Error(p)
                    }
                    o[l] = f,
                        r = r || f !== d
                }
                return (r = r || s.length !== Object.keys(e).length) ? o : e
            }
        } 
        function u(e, t) {  // useReactCallback function t -> object very well
            return function () {
                return t(e.apply(this, arguments))
            }
        }
        function d(e, t) {
            if ("function" == typeof e)
                return u(e, t);
            if ("object" != typeof e || null === e)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            var n = {};
            for (var r in e) {
                var o = e[r];
                "function" == typeof o && (n[r] = u(o, t))
            }
            return n
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function p(e, t) {
            var n = Object.keys(e);
            return Object.getOwnPropertySymbols && n.push.apply(n, Object.getOwnPropertySymbols(e)),
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n
        }
        function h(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(n, !0).forEach((function (t) {
                    f(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(n).forEach((function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function E() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return 0 === t.length ? function (e) {
                return e
            }
                : 1 === t.length ? t[0] : t.reduce((function (e, t) {
                    return function () {
                        return e(t.apply(void 0, arguments))
                    }
                }
                ))
        }
        function _() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function (e) {
                return function () {
                    var n = e.apply(void 0, arguments)
                        , r = function () {
                            throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")
                        }
                        , o = {
                            getState: n.getState,
                            dispatch: function () {
                                return r.apply(void 0, arguments)
                            }
                        }
                        , i = t.map((function (e) {
                            return e(o)
                        }
                        ));
                    return h({}, n, {
                        dispatch: r = E.apply(void 0, i)(n.dispatch)
                    })
                }
            }
        }
    }
}]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/feedback~incoming_call~messenger~missed_call~native_fallback~rooms_incoming~uiexplorer.bundle.js.map
