(window.webpackJsonp = window.webpackJsonp || []).push([
    [82], {
        1460: function (e, l, t) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = function ({
                onReturnCall: e,
                onClose: l
            }) {
                const t = (0, c.useTheme)(),
                    d = a.default._("Call Back", null, {
                        hk: "2B2CWd"
                    }).toString(),
                    f = a.default._("Close", null, {
                        hk: "4vmcQO"
                    });
                return u.default.createElement(u.default.Fragment, null, u.default.createElement(r.CallDialogButton, {
                    buttonProps: {
                        telemetryName: "closeButton",
                        onClick: l,
                        icon: o.default,
                        buttonColor: t.colors.red,
                        "aria-label": f.toString()
                    },
                    label: f
                }), u.default.createElement(r.CallDialogButton, {
                    buttonProps: {
                        telemetryName: "callBackButton",
                        onClick: e,
                        buttonColor: t.colors.green,
                        icon: n.default,
                        "aria-label": d.toString()
                    },
                    label: d
                }))
            };
            var a = d(t(5)),
                n = d(t(78)),
                o = d(t(50)),
                u = d(t(0)),
                r = t(295),
                c = t(6);

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        523: function (e, l, t) {
            "use strict";
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = function ({
                caller: e,
                onReturnCall: l,
                onClose: t
            }) {
                return o.default.createElement(u.default, {
                    mainContent: o.default.createElement(f, {
                        caller: e
                    }),
                    onRejectCall: t,
                    buttons: o.default.createElement(a.default, {
                        onReturnCall: l,
                        onClose: t
                    })
                })
            };
            var a = d(t(1460)),
                n = d(t(5)),
                o = d(t(0)),
                u = d(t(297)),
                r = d(t(296)),
                c = d(t(38));

            function d(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f({
                caller: e
            }) {
                return o.default.createElement(r.default, {
                    header: o.default.createElement(c.default, {
                        size: "xxlarge",
                        profilePictureUrl: e.profilePictureUri
                    }),
                    title: e.name,
                    body: n.default._("You missed a call from {caller_name}", [n.default._param("caller_name", e.name)], {
                        hk: "3frmbK"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/missed_call~uiexplorer.bundle.js.map