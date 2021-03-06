(window.webpackJsonp = window.webpackJsonp || []).push([
    [97], {
        1890: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PaymentActions = void 0;
            var a, r = n(76),
                o = (a = n(124)) && a.__esModule ? a : {
                    default: a
                };
            const c = {
                paymentsReady: (0, r.actionCreator)("payment/ready"),
                declineTransfer: (0, r.actionCreator)("payment/decline_transfer", e => ({
                    transactionId: e
                })),
                cancelPaymentRequest: (0, r.actionCreator)("payment/cancel_payment_request", e => ({
                    transactionId: e
                })),
                openExternalPaymentsOverviewPage: (0, r.actionCreator)("payment/open_external_payments_overview_page", e => ({
                    threadType: e
                })),
                sendPayment: (0, r.actionCreator)("payment/send_payment", e => ({
                    paymentInfo: e
                })),
                fetchPaymentMethodList: (0, r.actionCreator)("payment/fetch_payment_method_list"),
                storePaymentMethods: (0, r.actionCreator)("payment/store_payment_methods", e => ({
                    paymentMethods: e
                })),
                setPaymentMethodDefault: (0, r.actionCreator)("payment/set_payment_method_default", e => ({
                    credentialId: e
                })),
                requestPayment: (0, r.actionCreator)("payment/request_payment", e => ({
                    paymentInfo: e
                })),
                declinePayment: (0, r.actionCreator)("payment/decline_payment", e => ({
                    transactionId: e
                })),
                deletePaymentCredential: (0, r.actionCreator)("payment/delete_payment_credential", e => ({
                    credentialId: e
                })),
                deletePayPalFundingOptions: (0, r.actionCreator)("payment/delete_paypal_funding_options"),
                addNewPaymentMethodCard: (0, r.actionCreator)("payment/add_new_payment_method_card", e => ({
                    cardInfo: e
                })),
                cancelTransfer: (0, r.actionCreator)("payment/cancel_transfer", e => ({
                    transactionId: e
                })),
                beginTransactionDetailsRequest: (0, r.actionCreator)("payment/begin_transaction_details_request", () => ({
                    requestId: (0, o.default)()
                })),
                storeTransactionDetails: (0, r.actionCreator)("payment/store_transaction_details", (e, t) => ({
                    requestId: e,
                    serverResponse: t
                })),
                storeTransactionId: (0, r.actionCreator)("payment/store_transaction_id", e => ({
                    transactionId: e
                })),
                enterExistingTransactionFlow: (0, r.actionCreator)("enter_existing_transaction_flow", e => ({
                    transactionId: e
                })),
                beginAcceptTransaction: (0, r.actionCreator)("payment/begin_accept_transaction"),
                onAddingOrUpdatingCard: (0, r.actionCreator)("payment/on_adding_or_updating_card"),
                onCancelAddOrUpdateCard: (0, r.actionCreator)("payment/on_cancel_add_or_update_card"),
                onCardAdded: (0, r.actionCreator)("payment/on_card_added"),
                onSelectPaymentMethod: (0, r.actionCreator)("payment/on_select_payment_method"),
                onCancelSelectPaymentMethod: (0, r.actionCreator)("payment/on_cancel_select_payment_method"),
                onPaymentMethodSelected: (0, r.actionCreator)("payment/on_payment_method_selected"),
                onConfirmPayment: (0, r.actionCreator)("payment/on_confirm_payment"),
                onCancelConfirmPayment: (0, r.actionCreator)("payment/on_cancel_confirm_payment"),
                storePaymentUserAuth: (0, r.actionCreator)("payment/store_payment_user_auth", e => ({
                    userAuthInfo: e
                }))
            };
            t.PaymentActions = c
        },
        1891: function (e, t, n) {
            "use strict";

            function a(e) {
                return e.payment.paymentMethodList
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isPaymentsModuleReady = function (e) {
                return e.payment.moduleReady
            }, t.getPaymentMethods = a, t.getTransactionDetails = function (e) {
                return e.payment.transaction
            }, t.getTransactionId = function (e) {
                return e.payment.transactionId
            }, t.getPendingTransactionRequestId = function (e) {
                return e.payment.pendingTransactionRequestId
            }, t.getFormattedTransactionDetails = function (e) {
                var t;
                const n = JSON.parse(e.payment.transaction.context || "{}"),
                    a = n.other_participant,
                    r = n.additional_instruction,
                    o = (null == n ? void 0 : n.sections) && (null == n ? void 0 : n.sections.length) > 0 && (null == n ? void 0 : n.sections[0]),
                    c = (null == n ? void 0 : n.sections) && (null == n ? void 0 : n.sections.length) > 1 && (null == n ? void 0 : n.sections[1]),
                    l = (null == o ? void 0 : o.components) && (null == o ? void 0 : o.components.length) > 0 ? null == o ? void 0 : o.components[0] : void 0,
                    i = l ? l.extension : void 0,
                    s = null == i ? void 0 : null === (t = i.amount) || void 0 === t ? void 0 : t.formatted,
                    d = i && i.status_rows && i.status_rows.length > 0 ? i.status_rows[0] : void 0,
                    u = i && i.status_rows && i.status_rows.length > 1 ? i.status_rows[1] : void 0,
                    y = null == i ? void 0 : i.actions;
                return {
                    requestResultStatus: e.payment.transaction.requestResult,
                    amount: s || "",
                    status: d && d.text ? d.text : "",
                    statusCaption: u && u.text ? u.text : "",
                    actions: y || [],
                    participantImageUrl: a && a.image_url ? a.image_url : "",
                    participantName: a && a.title ? a.title : "",
                    participantRole: a && a.subtitle ? a.subtitle : "",
                    transactionInfoComponents: c && c.components ? c.components : [],
                    additionalInstruction: r
                }
            }, t.getCurrentScreen = function (e) {
                return e.payment.currentScreen
            }, t.getUserAuth = function (e) {
                return e.payment.userAuth
            }, t.selectPreferredPaymentMethod = void 0;
            const r = (0, n(348).createSelector)(a, e => e ? e.find(e => e.isPreferred) : null);
            t.selectPreferredPaymentMethod = r
        },
        1923: function (e, t, n) {
            "use strict";
            let a, r, o;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.PaymentActionIdentifier = t.ButtonStyle = t.PaymentScreen = void 0, t.PaymentScreen = a,
                function (e) {
                    e.Composer = "compose", e.TransactionDetails = "transaction_details", e.NUX = "nux", e.AddOrUpdateCard = "add_update", e.IDV = "idv", e.ConfirmPayment = "confirm_payment", e.SelectPaymentMethod = "select_payment_method", e.EnterPin = "pin", e.TransactionFollowUp = "follow_up", e.None = "none", e.Web = "web"
                }(a || (t.PaymentScreen = a = {})), t.ButtonStyle = r,
                function (e) {
                    e.Primary = "PRIMARY", e.Secondary = "SECONDARY"
                }(r || (t.ButtonStyle = r = {})), t.PaymentActionIdentifier = o,
                function (e) {
                    e.P2P_PAY_REQUEST = "P2P_PAY_REQUEST", e.P2P_DECLINE_REQUEST = "P2P_DECLINE_REQUEST", e.P2P_CANCEL_REQUEST = "P2P_CANCEL_REQUEST"
                }(o || (t.PaymentActionIdentifier = o = {}))
        },
        1950: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                const {
                    paymentMethod: t
                } = e, n = (0, l.useTheme)();
                return o.default.createElement(d, null, o.default.createElement(m, {
                    paymentMethod: t
                }), o.default.createElement(u, null, o.default.createElement(i.default, {
                    use: "body"
                }, (0, a.getPaymentMethodDisplayName)(t.cardType), " ", t.number), o.default.createElement(i.default, {
                    use: "caption",
                    color: n.semanticColors.textSecondary
                }, "Expires ", t.expireMonth, "/", t.expireYear)))
            };
            var a = n(2170),
                r = s(n(1)),
                o = s(n(0)),
                c = s(n(2)),
                l = n(6),
                i = s(n(4));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const d = (0, r.default)(c.default)({
                    flexDirection: "row",
                    flex: 1,
                    marginTop: "auto",
                    marginBottom: "auto"
                }),
                u = (0, r.default)(c.default)({
                    flex: 1
                });
            const y = (0, r.default)(c.default)(e => ({
                backgroundColor: e.theme.colors.base80,
                borderRadius: 3,
                padding: 3,
                marginRight: 8,
                marginTop: "auto",
                marginBottom: "auto"
            }));

            function m(e) {
                const {
                    paymentMethod: t
                } = e, n = (0, l.useTheme)();
                return o.default.createElement(y, null, o.default.createElement(i.default, {
                    use: "subtext",
                    color: n.semanticColors.textInverted
                }, (0, a.getPaymentMethodAcronym)(t.cardType)))
            }
        },
        2168: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return m.default.createElement(f.DynamicModuleLoader, {
                    strictMode: !0,
                    modules: [s.PaymentModule]
                }, m.default.createElement(g, e))
            };
            var a = h(n(113)),
                r = h(n(2169)),
                o = h(n(2171)),
                c = h(n(2174)),
                l = n(1923),
                i = n(1890),
                s = n(2175),
                d = n(1891),
                u = n(28),
                y = n(11),
                m = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = P();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, r, o) : n[r] = e[r]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                f = n(138),
                p = h(n(13));

            function P() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return P = function () {
                    return e
                }, e
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const _ = {
                    clearModal: u.AppContextActions.clearModal,
                    enterExistingTransactionFlow: i.PaymentActions.enterExistingTransactionFlow
                },
                g = (0, y.connect)((function (e) {
                    return {
                        moduleReady: (0, d.isPaymentsModuleReady)(e),
                        currentScreen: (0, d.getCurrentScreen)(e)
                    }
                }), _)((function ({
                    moduleReady: e,
                    threadKey: t,
                    clearModal: n,
                    enterExistingTransactionFlow: i,
                    transactionId: s,
                    currentScreen: d
                }) {
                    if ((0, m.useEffect)(() => {
                            e && i(s)
                        }, [i, s, e]), !t) return n(), null;
                    if (!e) return null;
                    let u;
                    switch (d) {
                        case l.PaymentScreen.TransactionDetails:
                            u = m.default.createElement(c.default, {
                                threadKey: t
                            });
                            break;
                        case l.PaymentScreen.ConfirmPayment:
                            u = m.default.createElement(r.default, null);
                            break;
                        case l.PaymentScreen.SelectPaymentMethod:
                            u = m.default.createElement(o.default, null)
                    }
                    return (m.default.createElement(p.default, {
                        name: "paymentModal"
                    }, m.default.createElement(a.default, {
                        width: 340,
                        onClose: n
                    }, u)))
                }))
        },
        2169: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = f();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r)) {
                            var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, r, o) : n[r] = e[r]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(16)),
                r = n(113),
                o = m(n(1950)),
                c = m(n(5)),
                l = n(1890),
                i = m(n(1)),
                s = n(1891),
                d = n(11),
                u = m(n(0)),
                y = m(n(2));

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function () {
                    return e
                }, e
            }
            const p = (0, i.default)(y.default)({
                flex: 1,
                padding: "8px 12px"
            });
            const P = {
                selectPaymentMethod: l.PaymentActions.onSelectPaymentMethod
            };
            var h = (0, d.connect)((function (e) {
                return {
                    paymentMethod: (0, s.selectPreferredPaymentMethod)(e)
                }
            }), P)((function (e) {
                const {
                    paymentMethod: t,
                    selectPaymentMethod: n
                } = e;
                (0, r.useModalInfo)({
                    title: c.default._("Confirm Payment", null, {
                        hk: "pfJPT"
                    }).toString()
                });
                const l = c.default._("Change", null, {
                    hk: "2TL4Qt"
                }).toString();
                return (u.default.createElement(p, null, u.default.createElement(y.default, {
                    css: {
                        flexDirection: "row"
                    }
                }, t && u.default.createElement(o.default, {
                    paymentMethod: t
                }), u.default.createElement(a.default, {
                    "aria-label": l,
                    telemetryName: "changePaymentMethod",
                    use: a.RectangleButtonUse.Secondary,
                    caption: l,
                    onClick: n
                }))))
            }));
            t.default = h
        },
        2170: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getPaymentMethodDisplayName = function (e) {
                switch (e) {
                    case a.CardType.AMEX:
                        return "AMEX";
                    case a.CardType.DISCOVER:
                        return "DISCOVER";
                    case a.CardType.JCB:
                        return "JCB";
                    case a.CardType.MASTERCARD:
                        return "MASTERCARD";
                    case a.CardType.RUPAY:
                        return "RUPAY";
                    case a.CardType.VISA:
                        return "VISA";
                    default:
                        return ""
                }
            }, t.getPaymentMethodAcronym = function (e) {
                switch (e) {
                    case a.CardType.AMEX:
                        return "AMEX";
                    case a.CardType.DISCOVER:
                        return "DSC";
                    case a.CardType.JCB:
                        return "JCB";
                    case a.CardType.MASTERCARD:
                        return "MC";
                    case a.CardType.RUPAY:
                        return "RP";
                    case a.CardType.VISA:
                        return "VISA";
                    default:
                        return ""
                }
            };
            var a = n(624)
        },
        2171: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n(113),
                r = n(2172),
                o = u(n(5)),
                c = n(1891),
                l = u(n(1)),
                i = n(11),
                s = u(n(0)),
                d = u(n(2));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const y = (0, l.default)(d.default)({
                flex: 1,
                padding: "8px 12px"
            });
            var m = (0, i.connect)((function (e) {
                return {
                    paymentMethods: (0, c.getPaymentMethods)(e)
                }
            }), {})((function (e) {
                const {
                    paymentMethods: t
                } = e;
                return (0, a.useModalInfo)({
                    title: o.default._("Select Payment Method", null, {
                        hk: "34w1vE"
                    }).toString()
                }), s.default.createElement(y, null, t.map(e => s.default.createElement(r.PaymentMethodButton, {
                    paymentMethod: e,
                    selected: !0,
                    onClick: () => {},
                    key: e.paymentMethodId
                })), s.default.createElement(r.AddPaymentMethodButton, {
                    onClick: () => {}
                }))
            }));
            t.default = m
        },
        2172: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PaymentMethodButton = function (e) {
                const {
                    paymentMethod: t,
                    selected: n,
                    onClick: a
                } = e, o = (0, u.useTheme)(), l = (0, s.useCallback)(() => {
                    a(t)
                }, [t, a]);
                return s.default.createElement(P, {
                    onActivate: l,
                    telemetryName: "select-payment-method"
                }, s.default.createElement(r.default, {
                    paymentMethod: t
                }), n && s.default.createElement(c.default, {
                    color: o.semanticColors.textSecondary,
                    size: 18
                }))
            }, t.AddPaymentMethodButton = function (e) {
                const {
                    onClick: t
                } = e, n = (0, u.useTheme)(), a = i.default._("Add Debit Card", null, {
                    hk: "2pPPZe"
                }).toString();
                return s.default.createElement(P, {
                    onActivate: t,
                    "aria-label": a,
                    telemetryName: "add-debit-card"
                }, s.default.createElement(_, null, s.default.createElement(o.default, {
                    size: 36,
                    color: n.colors.base80
                })), s.default.createElement(h, {
                    use: "body"
                }, a), s.default.createElement(l.default, {
                    size: 18,
                    color: n.semanticColors.textSecondary
                }))
            };
            var a = p(n(99)),
                r = p(n(1950)),
                o = p(n(2173)),
                c = p(n(114)),
                l = p(n(161)),
                i = p(n(5)),
                s = f(n(0)),
                d = f(n(2)),
                u = n(6),
                y = p(n(4));

            function m() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return m = function () {
                    return e
                }, e
            }

            function f(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : n[r] = e[r]
                    } return n.default = e, t && t.set(e, n), n
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const P = (0, a.default)(d.FocusableView, {
                target: "e1hc0thr0",
                label: "PaymentMethodButtonContainer"
            })({
                name: "1tbn9xs",
                styles: "flex-direction:row;align-items:center;padding:4px 0;"
            });
            const h = (0, a.default)(y.default, {
                    target: "e1hc0thr1",
                    label: "AddPaymentMethodText"
                })({
                    name: "1khf6jl",
                    styles: "flex:1;margin-right:8px;"
                }),
                _ = (0, a.default)(d.default, {
                    target: "e1hc0thr2",
                    label: "AddPaymentMethodIcon"
                })({
                    name: "12z0wuy",
                    styles: "margin-right:8px;"
                })
        },
        2173: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e) {
                return r.default.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 36 36",
                    height: e.height ? e.height : e.size,
                    width: e.width ? e.width : e.size,
                    color: e.color
                }, r.default.createElement("path", {
                    fill: "currentColor",
                    d: "M6 12a3 3 0 013-3h18a3 3 0 013 3v.5a.5.5 0 01-.5.5h-23a.5.5 0 01-.5-.5V12z"
                }), r.default.createElement("path", {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    d: "M6 15.5a.5.5 0 01.5-.5h23a.5.5 0 01.5.5V24a3 3 0 01-3 3H9a3 3 0 01-3-3v-8.5zm4 2.5a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1v-2a1 1 0 00-1-1h-3z",
                    clipRule: "evenodd"
                }))
            };
            var a, r = (a = n(0)) && a.__esModule ? a : {
                default: a
            }
        },
        2174: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = v(n(2)),
                r = v(n(16)),
                o = v(n(82)),
                c = n(113),
                l = M(n(339)),
                i = M(n(13)),
                s = n(6),
                d = n(8),
                u = M(n(5)),
                y = M(n(9)),
                m = n(32),
                f = n(23),
                p = n(1923),
                P = n(1890),
                h = n(1891),
                _ = M(n(1)),
                g = n(11),
                C = v(n(0)),
                S = M(n(4));

            function M(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function A() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return A = function () {
                    return e
                }, e
            }

            function v(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = A();
                if (t && t.has(e)) return t.get(e);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        var o = a ? Object.getOwnPropertyDescriptor(e, r) : null;
                        o && (o.get || o.set) ? Object.defineProperty(n, r, o) : n[r] = e[r]
                    } return n.default = e, t && t.set(e, n), n
            }
            const E = (0, _.default)(a.default)({
                    marginTop: 20
                }),
                b = (0, _.default)(a.default)({
                    marginTop: 8,
                    marginBottom: 8
                }),
                T = (0, _.default)(a.default)({
                    marginBottom: 8
                }),
                R = (0, _.default)(a.default)({
                    justifyContent: "center",
                    alignItems: "center"
                }),
                I = (0, _.default)(a.default)({
                    flex: 1,
                    padding: "0 12px"
                }),
                w = (0, _.default)(a.FocusableView)(e => ({
                    color: e.theme.semanticColors.textPrimary,
                    fontSize: "11px",
                    ":hover": {
                        textDecorationLine: "underline"
                    },
                    display: "inline",
                    cursor: "pointer"
                })),
                x = (0, _.default)(a.default)({
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                    width: "100%",
                    padding: "16px 12px",
                    flexDirection: "row-reverse"
                }),
                k = (0, _.default)(r.default)({
                    ":not(:last-child)": {
                        marginLeft: 8
                    }
                });

            function O({
                components: e,
                theme: t
            }) {
                return e ? C.default.createElement(E, null, e.map((e, n) => C.default.createElement(T, {
                    key: n
                }, C.default.createElement(S.default, {
                    use: "subtext",
                    wrapText: !0
                }, e.title), C.default.createElement(S.default, {
                    use: "caption",
                    color: t.semanticColors.textSecondary,
                    wrapText: !0
                }, e.subtitle)))) : null
            }

            function D({
                amount: e,
                status: t,
                caption: n,
                theme: a
            }) {
                return C.default.createElement(R, null, C.default.createElement(b, null, C.default.createElement(S.default, {
                    use: "hero",
                    wrapText: !0
                }, e)), C.default.createElement(S.default, {
                    use: "subtext",
                    wrapText: !0
                }, t), C.default.createElement(S.default, {
                    use: "caption",
                    color: a.semanticColors.textSecondary,
                    wrapText: !0
                }, n))
            }

            function q({
                additionalInstruction: e
            }) {
                const t = e.ranges && e.ranges.length > 0 ? e.ranges[0].entity.url : "",
                    n = e.ranges && e.ranges.length > 1 ? e.ranges[1].entity.url : "";
                return C.default.createElement(a.default, {
                    css: {
                        flexDirection: "row",
                        margin: "22px 0 20px 0"
                    }
                }, C.default.createElement(w, {
                    onActivate: () => y.default.platform.openExternalURL(t)
                }, u.default._("Terms", null, {
                    hk: "16gPPJ"
                }).toString()), C.default.createElement(a.default, {
                    css: {
                        marginLeft: 4,
                        marginRight: 4
                    }
                }, C.default.createElement(S.default, {
                    use: "caption",
                    wrapText: !1
                }, "???")), C.default.createElement(w, {
                    onActivate: () => y.default.platform.openExternalURL(n)
                }, u.default._("Help", null, {
                    hk: "2lCVAk"
                }).toString()))
            }

            function j({
                actions: e,
                onDeclinePayment: t,
                onCancelPaymentRequest: n,
                onAcceptPaymentRequest: a
            }) {
                return null == e ? null : C.default.createElement(x, null, e.map((e, o) => C.default.createElement(k, {
                    "aria-label": u.default._("Pay", null, {
                        hk: "2x5Nbh"
                    }).toString(),
                    use: e.style === p.ButtonStyle.Primary ? r.RectangleButtonUse.Primary : r.RectangleButtonUse.Secondary,
                    caption: e.title,
                    telemetryName: "action_button_" + e.action_identifier,
                    disabled: !1,
                    size: r.RectangleButtonSize.Small,
                    onClick: U(e.action_identifier, t, n, a),
                    key: o
                })))
            }

            function U(e, t, n, a) {
                switch (e) {
                    case p.PaymentActionIdentifier.P2P_PAY_REQUEST:
                        return () => a();
                    case p.PaymentActionIdentifier.P2P_DECLINE_REQUEST:
                        return () => t();
                    case p.PaymentActionIdentifier.P2P_CANCEL_REQUEST:
                        return () => n()
                }
                return () => {}
            }
            const L = {
                declinePayment: P.PaymentActions.declinePayment,
                cancelPaymentRequest: P.PaymentActions.cancelPaymentRequest,
                beginAcceptPaymentRequest: P.PaymentActions.beginAcceptTransaction,
                openExternalPaymentsOverviewPage: P.PaymentActions.openExternalPaymentsOverviewPage
            };
            var N = (0, g.connect)((function (e, {
                threadKey: t
            }) {
                var n;
                return {
                    transactionDetails: (0, h.getFormattedTransactionDetails)(e),
                    transactionId: (0, h.getTransactionId)(e),
                    enableAcceptTransaction: (0, m.isGatekeeperEnabled)(e, "archon_enable_accept_transaction"),
                    threadType: null === (n = (0, f.getThreadModel)(e, t)) || void 0 === n ? void 0 : n.threadType
                }
            }), L)((function (e) {
                const {
                    transactionDetails: t,
                    transactionId: n,
                    declinePayment: a,
                    cancelPaymentRequest: r,
                    beginAcceptPaymentRequest: y,
                    enableAcceptTransaction: m,
                    openExternalPaymentsOverviewPage: f,
                    threadType: p
                } = e, P = (0, s.useTheme)(), {
                    requestResultStatus: h,
                    participantImageUrl: _,
                    participantName: g,
                    participantRole: S,
                    amount: M,
                    status: A,
                    statusCaption: v,
                    transactionInfoComponents: E,
                    additionalInstruction: b,
                    actions: T
                } = t, R = (0, C.useCallback)(() => {
                    n && a(n)
                }, [a, n]), w = (0, C.useCallback)(() => {
                    n && r(n)
                }, [r, n]), x = (0, C.useCallback)(() => {
                    m ? y() : p && f(p)
                }, [m, y, p, f]);
                return (0, c.useModalInfo)({
                    title: u.default._("Payment Details", null, {
                        hk: "2lMd3L"
                    }).toString()
                }), C.default.createElement(i.default, {
                    name: "transactionDetails"
                }, h !== d.PaymentActivitySearchResultStatus.Succeeded ? C.default.createElement(o.default, {
                    size: o.SpinnerSize.Large
                }) : C.default.createElement(C.default.Fragment, null, C.default.createElement(I, null, C.default.createElement(l.default, {
                    profilePictureUrl: _,
                    participantName: g,
                    subtitle: S
                }), C.default.createElement(D, {
                    amount: M,
                    status: A,
                    caption: v,
                    theme: P
                }), C.default.createElement(O, {
                    components: E,
                    theme: P
                }), b && C.default.createElement(q, {
                    additionalInstruction: b
                })), C.default.createElement(j, {
                    actions: T,
                    onDeclinePayment: R,
                    onCancelPaymentRequest: w,
                    onAcceptPaymentRequest: x
                })))
            }));
            t.default = N
        },
        2175: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PaymentModule = void 0;
            var a = n(2176),
                r = n(2177);
            const o = {
                id: "payment",
                reducerMap: {
                    payment: a.PaymentReducer
                },
                sagas: [r.PaymentSaga]
            };
            t.PaymentModule = o
        },
        2176: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PaymentReducer = t.initialState = t.getDefaultPaymentInfo = void 0;
            var a = n(1923),
                r = n(1890),
                o = n(8),
                c = n(51);
            const l = () => ({
                requestId: "",
                requestResult: o.PaymentActivitySearchResultStatus.Initiated,
                errorMessage: null,
                errorTitle: null,
                errorCode: null,
                context: null,
                transactionId: null
            });
            t.getDefaultPaymentInfo = l;
            const i = {
                moduleReady: !1,
                currentScreen: a.PaymentScreen.None,
                paymentMethodList: [],
                transaction: l(),
                transactionId: null,
                pendingTransactionRequestId: null,
                userAuth: null
            };
            t.initialState = i;
            const s = (0, c.makeReducer)(i, (e, t) => {
                switch (t.type) {
                    case r.PaymentActions.paymentsReady.type:
                        e.moduleReady = !0;
                        break;
                    case r.PaymentActions.storePaymentMethods.type: {
                        const {
                            paymentMethods: n
                        } = t.payload;
                        e.paymentMethodList = n;
                        break
                    }
                    case r.PaymentActions.beginTransactionDetailsRequest.type: {
                        const {
                            requestId: n
                        } = t.payload;
                        e.pendingTransactionRequestId = n;
                        break
                    }
                    case r.PaymentActions.storeTransactionDetails.type: {
                        const {
                            requestId: n,
                            serverResponse: a
                        } = t.payload;
                        n === e.pendingTransactionRequestId && (e.transaction = a, a.requestResult === o.PaymentActivitySearchResultStatus.Succeeded && (e.pendingTransactionRequestId = null));
                        break
                    }
                    case r.PaymentActions.storeTransactionId.type: {
                        const {
                            transactionId: n
                        } = t.payload;
                        e.transactionId = n;
                        break
                    }
                    case r.PaymentActions.enterExistingTransactionFlow.type:
                        e.currentScreen === a.PaymentScreen.None && (e.currentScreen = a.PaymentScreen.TransactionDetails);
                        break;
                    case r.PaymentActions.beginAcceptTransaction.type:
                        e.paymentMethodList.length > 0 ? e.currentScreen = a.PaymentScreen.ConfirmPayment : e.currentScreen = a.PaymentScreen.AddOrUpdateCard;
                        break;
                    case r.PaymentActions.onAddingOrUpdatingCard.type:
                        e.currentScreen === a.PaymentScreen.AddOrUpdateCard ? e.currentScreen = a.PaymentScreen.SelectPaymentMethod : e.currentScreen === a.PaymentScreen.SelectPaymentMethod && (e.currentScreen = a.PaymentScreen.AddOrUpdateCard);
                        break;
                    case r.PaymentActions.onCancelAddOrUpdateCard.type:
                        e.currentScreen === a.PaymentScreen.AddOrUpdateCard && (e.paymentMethodList.length > 0 ? e.currentScreen = a.PaymentScreen.SelectPaymentMethod : e.currentScreen = a.PaymentScreen.TransactionDetails);
                        break;
                    case r.PaymentActions.onCardAdded.type:
                        e.currentScreen === a.PaymentScreen.AddOrUpdateCard && (e.currentScreen = a.PaymentScreen.SelectPaymentMethod);
                        break;
                    case r.PaymentActions.onSelectPaymentMethod.type:
                        e.currentScreen === a.PaymentScreen.ConfirmPayment && (e.currentScreen = a.PaymentScreen.SelectPaymentMethod);
                        break;
                    case r.PaymentActions.onCancelSelectPaymentMethod.type:
                    case r.PaymentActions.onPaymentMethodSelected.type:
                        e.currentScreen === a.PaymentScreen.SelectPaymentMethod && (e.currentScreen = a.PaymentScreen.ConfirmPayment);
                        break;
                    case r.PaymentActions.onConfirmPayment.type:
                        e.currentScreen === a.PaymentScreen.ConfirmPayment && e.userAuth && e.userAuth.status === o.PaymentPasscodeState.Active && (e.currentScreen = a.PaymentScreen.EnterPin);
                        break;
                    case r.PaymentActions.onCancelConfirmPayment.type:
                        e.currentScreen === a.PaymentScreen.ConfirmPayment && (e.currentScreen = a.PaymentScreen.TransactionDetails);
                        break;
                    case r.PaymentActions.storePaymentUserAuth.type: {
                        const {
                            userAuthInfo: n
                        } = t.payload;
                        e.userAuth = n;
                        break
                    }
                }
            });
            t.PaymentReducer = s
        },
        2177: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PaymentSaga = function* () {
                const e = yield(0, s.fork)((function* () {
                    yield(0, s.call)(l.default.msys.waitForMailbox), yield(0, s.takeLatest)(a.PaymentActions.beginTransactionDetailsRequest.type, b), yield(0, s.takeLatest)(a.PaymentActions.declineTransfer.type, m), yield(0, s.takeLatest)(a.PaymentActions.cancelPaymentRequest.type, f), yield(0, s.takeLatest)(a.PaymentActions.openExternalPaymentsOverviewPage.type, p), yield(0, s.takeLatest)(a.PaymentActions.sendPayment.type, P), yield(0, s.takeLatest)(a.PaymentActions.fetchPaymentMethodList.type, h), yield(0, s.takeLatest)(a.PaymentActions.setPaymentMethodDefault.type, _), yield(0, s.takeLatest)(a.PaymentActions.requestPayment.type, g), yield(0, s.takeLatest)(a.PaymentActions.declinePayment.type, C), yield(0, s.takeLatest)(a.PaymentActions.deletePaymentCredential.type, S), yield(0, s.takeLatest)(a.PaymentActions.deletePayPalFundingOptions.type, M), yield(0, s.takeLatest)(a.PaymentActions.addNewPaymentMethodCard.type, A), yield(0, s.takeLatest)(a.PaymentActions.cancelTransfer.type, v), yield(0, s.takeLatest)(a.PaymentActions.enterExistingTransactionFlow.type, E);
                    const e = yield(0, r.getSyncChannel)([l.default.msys.storedProcedureNames.MCQPaymentsGetServerRequestResponseStoredProcedureName]);
                    yield(0, s.fork)(I, e), yield(0, s.put)(a.PaymentActions.paymentsReady()), yield(0, s.call)(u)
                }));
                try {
                    yield(0, s.call)(r.waitUntillCancelled)
                } finally {
                    yield(0, s.cancel)(e)
                }
            }, t._beginTransactionDetailsRequest = b, t._fetchPaymentUserAuth = T, t.tryFetchTransactionDetails = R, t._listenToSyncChannel = I;
            var a = n(1890),
                r = n(74),
                o = n(1891),
                c = d(n(187)),
                l = d(n(9)),
                i = n(52),
                s = n(17);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function* u() {
                yield(0, s.call)(h), yield(0, s.call)(T)
            }

            function y(e) {
                return e.includes(l.default.msys.storedProcedureNames.MCQPaymentsGetServerRequestResponseStoredProcedureName)
            }

            function* m(e) {
                const {
                    transactionId: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.optimisticDeclineTransfer, t)
            }

            function* f(e) {
                const {
                    transactionId: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.optimisticCancelPaymentRequest, t), yield(0, s.put)(a.PaymentActions.beginTransactionDetailsRequest())
            }

            function* p(e) {
                const {
                    threadType: t
                } = e.payload, n = yield(0, s.select)(o.getTransactionId);
                if (t) {
                    const e = (0, c.default)(l.default.platform.hostname, "facebook_pay/payment/" + ((0, i.isP2PThread)(t) ? n : ""));
                    l.default.platform.openExternalURL(e)
                }
            }

            function* P(e) {
                const {
                    paymentInfo: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.sendPayment, t)
            }

            function* h() {
                const e = yield(0, s.call)(l.default.msys.fetchPaymentMethodList);
                yield(0, s.put)(a.PaymentActions.storePaymentMethods(e))
            }

            function* _(e) {
                const {
                    credentialId: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.setPaymentMethodDefault, t)
            }

            function* g(e) {
                const {
                    paymentInfo: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.requestPayment, t)
            }

            function* C(e) {
                const {
                    transactionId: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.declinePayment, t), yield(0, s.put)(a.PaymentActions.beginTransactionDetailsRequest())
            }

            function* S(e) {
                const {
                    credentialId: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.deletePaymentCredential, t)
            }

            function* M(e) {
                yield(0, s.call)(l.default.msys.deletePayPalFundingOptions)
            }

            function* A(e) {
                const {
                    cardInfo: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.addNewPaymentMethodCard, t)
            }

            function* v(e) {
                const {
                    transactionId: t
                } = e.payload;
                yield(0, s.call)(l.default.msys.cancelTransfer, t)
            }

            function* E(e) {
                const {
                    transactionId: t
                } = e.payload;
                yield(0, s.put)(a.PaymentActions.storeTransactionId(t)), yield(0, s.put)(a.PaymentActions.beginTransactionDetailsRequest())
            }

            function* b(e) {
                const {
                    requestId: t
                } = e.payload, n = yield(0, s.select)(o.getTransactionId);
                yield(0, s.call)(l.default.msys.queryPaymentActivityForTransaction, n, t)
            }

            function* T() {
                const e = yield(0, s.call)(l.default.msys.fetchPaymentUserAuth);
                e && (yield(0, s.put)(a.PaymentActions.storePaymentUserAuth(e)))
            }

            function* R() {
                const e = yield(0, s.select)(o.getPendingTransactionRequestId);
                if (null != e) {
                    const t = yield(0, s.call)(l.default.msys.fetchTransactionDetails, e);
                    t && (yield(0, s.put)(a.PaymentActions.storeTransactionDetails(e, t)))
                }
            }

            function* I(e) {
                try {
                    for (;;) {
                        y(yield(0, s.take)(e)) && (yield(0, s.call)(R))
                    }
                } finally {
                    e.close()
                }
            }
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/PaymentModal.bundle.js.map