(window.webpackJsonp = window.webpackJsonp || []).push([
    [20], {
        373: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.showNoNetworkMessageBox = async function () {
                return await a.default.platform.showMessageBox({
                    type: "info",
                    detail: o.default._("Please check your device's network connection and try again.", null, {
                        hk: "1PyhWB"
                    }).toString(),
                    message: o.default._("Network Unavailable", null, {
                        hk: "2w13s8"
                    }).toString(),
                    buttons: [o.default._("OK", null, {
                        hk: "uOXpd"
                    }).toString()]
                })
            };
            var o = u(n(5)),
                a = u(n(9));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/RoomModal~Rooms~uiexplorer.bundle.js.map