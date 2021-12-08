(window.webpackJsonp = window.webpackJsonp || []).push([
    [91], {
        2159: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var l = h(n(1931)),
                a = h(n(5)),
                r = h(n(1)),
                o = n(28),
                u = n(23),
                d = n(11),
                i = function (e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = p();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var r = l ? Object.getOwnPropertyDescriptor(e, a) : null;
                            r && (r.get || r.set) ? Object.defineProperty(n, a, r) : n[a] = e[a]
                        } n.default = e, t && t.set(e, n);
                    return n
                }(n(0)),
                f = h(n(2)),
                c = n(58),
                s = h(n(45)),
                m = h(n(344));

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
            const y = (0, r.default)(f.default)({
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                height: 22,
                width: "100%",
                marginBottom: 8,
                paddingRight: 12
            });
            const g = {
                clearModal: o.AppContextActions.clearModal
            };
            var _ = (0, d.connect)((function (e, {
                threadKey: t
            }) {
                return {
                    thread: (0, u.getThread)(e, t)
                }
            }), g)((function (e) {
                const {
                    thread: t,
                    clearModal: n
                } = e, [r, o] = (0, i.useState)("list_all");
                if (null == t) return n(), null;
                const u = [{
                    name: a.default._("All", null, {
                        hk: "14fobj"
                    }).toString(),
                    key: "list_all",
                    ariaLabel: a.default._("All Members", null, {
                        hk: "2BrHUG"
                    }).toString()
                }, {
                    name: a.default._("Admins", null, {
                        hk: "4G7gHw"
                    }).toString(),
                    key: "list_admins",
                    ariaLabel: a.default._("Admin Members", null, {
                        hk: "XaKrh"
                    }).toString()
                }],
                    d = a.default._("Chat Members", null, {
                        hk: "264w7C"
                    }).toString();
                return i.default.createElement(c.Modal, {
                    onHideModal: n,
                    "aria-label": d
                }, i.default.createElement(c.ModalHeader, {
                    title: d,
                    onClose: n
                }), i.default.createElement(c.ModalContent, null, i.default.createElement(y, null, i.default.createElement(m.default, {
                    options: u,
                    selectedOptionKey: r,
                    onSelectionChange: o,
                    telemetryName: "thread_details_modal_group_members"
                })), i.default.createElement(s.default, {
                    key: "memberships"
                }, i.default.createElement(l.default, {
                    threadKey: t.threadKey,
                    onlyAdmins: "list_admins" === r
                }))))
            }));
            t.default = _
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/GroupMembersView.bundle.js.map