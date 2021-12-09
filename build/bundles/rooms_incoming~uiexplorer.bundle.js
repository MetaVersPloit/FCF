(window.webpackJsonp = window.webpackJsonp || []).push([
    [83], {
        1469: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function ({
                onAcceptCall: e,
                onRejectCall: t
            }) {
                const l = (0, c.useTheme)(),
                    i = a.default._("Decline", null, {
                        hk: "1wSU9h"
                    }),
                    d = a.default._("Accept", null, {
                        hk: "2RTMTA"
                    });
                return u.default.createElement(u.default.Fragment, null, u.default.createElement(r.CallDialogButton, {
                    buttonProps: {
                        telemetryName: "rejectCallButton",
                        telemetryContext: {
                            callType: "joinRoom"
                        },
                        onClick: t,
                        icon: o.default,
                        buttonColor: l.colors.red,
                        "aria-label": i.toString()
                    },
                    label: i
                }), u.default.createElement(r.CallDialogButton, {
                    buttonProps: {
                        telemetryName: "acceptCallButton",
                        telemetryContext: {
                            callType: "joinRoom"
                        },
                        onClick: e,
                        buttonColor: l.colors.green,
                        icon: n.default,
                        "aria-label": d.toString()
                    },
                    label: d
                }))
            };
            var a = i(l(5)),
                n = i(l(78)),
                o = i(l(50)),
                u = i(l(0)),
                r = l(295),
                c = l(6);

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        1470: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function ({
                participants: e,
                roomName: t
            }) {
                const l = a.default._("{caller_name} wants to join {room_name}", [a.default._param("caller_name", e[0].name), a.default._param("room_name", t || "your room")], {
                        hk: "2EOFEv"
                    }),
                    r = a.default._("Your video will be shared as soon as you accept", null, {
                        hk: "2zYTsF"
                    });
                return n.default.createElement(n.default.Fragment, null, n.default.createElement(o.default, {
                    header: n.default.createElement(u.default, {
                        size: "large",
                        profilePictureUrl: e[0].profilePictureUri
                    }),
                    title: l,
                    body: r
                }))
            };
            var a = r(l(5)),
                n = r(l(0)),
                o = r(l(296)),
                u = r(l(38));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        },
        528: function (e, t, l) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function ({
                onAcceptCall: e,
                onRejectCall: t,
                participants: l,
                roomName: r
            }) {
                return o.default.createElement(u.default, {
                    mainContent: o.default.createElement(n.default, {
                        participants: l,
                        roomName: r
                    }),
                    buttons: o.default.createElement(a.default, {
                        onAcceptCall: e,
                        onRejectCall: t
                    }),
                    onRejectCall: t
                })
            };
            var a = r(l(1469)),
                n = r(l(1470)),
                o = r(l(0)),
                u = r(l(297));

            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/rooms_incoming~uiexplorer.bundle.js.map