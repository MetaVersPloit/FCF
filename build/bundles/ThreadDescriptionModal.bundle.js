(window.webpackJsonp = window.webpackJsonp || []).push([
    [106], {
        2186: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = b(a(2)),
                l = a(351),
                r = b(a(5)),
                o = b(a(9)),
                i = a(28),
                u = a(23),
                d = b(a(1)),
                c = M(a(16)),
                s = a(58),
                f = b(a(13)),
                p = a(11),
                m = M(a(0)),
                g = b(a(60)),
                h = b(a(4));

            function y() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return y = function() {
                    return e
                }, e
            }

            function M(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = y();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var l in e)
                    if (Object.prototype.hasOwnProperty.call(e, l)) {
                        var r = n ? Object.getOwnPropertyDescriptor(e, l) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, l, r) : a[l] = e[l]
                    } return a.default = e, t && t.set(e, a), a
            }

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const v = (0, d.default)(n.default)({
                    marginRight: 12
                }),
                k = (0, d.default)(n.default)({
                    marginTop: 12
                }),
                w = (0, d.default)(h.default)({
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    marginTop: 12,
                    marginBottom: 12
                }),
                D = (0, d.default)(g.default)(e => ({
                    background: e.theme.semanticColors.bgFillPrimary
                }));
            const E = {
                clearModal: i.AppContextActions.clearModal,
                updateThreadDescription: u.InboxActions.threads.updateThreadDescription
            };
            var T = (0, p.connect)((function(e, {
                threadKey: t
            }) {
                const a = (0, u.getThread)(e, t);
                return {
                    chatDescription: (0, u.getThreadDescription)(e, t),
                    groupDescription: (0, u.getLinkedGroupDescription)(e, t),
                    threadName: null == a ? void 0 : a.threadName
                }
            }), E)((function(e) {
                var t, a, n;
                const i = null !== (t = null !== (a = e.groupDescription) && void 0 !== a ? a : e.chatDescription) && void 0 !== t ? t : "",
                    [u, d] = (0, m.useState)(null !== (n = e.isEditing) && void 0 !== n && n),
                    [p, g] = (0, m.useState)(i),
                    h = (0, l.getURLRanges)(i),
                    y = (0, m.useCallback)(e => {
                        e && o.default.platform.openExternalURL(e)
                    }, []);
                return m.default.createElement(f.default, {
                    name: "roomModal"
                }, m.default.createElement(s.Modal, {
                    modalType: "autosize",
                    "aria-label": e.threadName,
                    onHideModal: e.clearModal,
                    width: 460
                }, m.default.createElement(s.ModalContent, null, m.default.createElement(s.ModalHeader, {
                    title: e.threadName,
                    onClose: e.clearModal
                }), m.default.createElement(v, null, u ? m.default.createElement(D, {
                    value: p,
                    onChange: g,
                    multiline: !0
                }) : m.default.createElement(w, {
                    use: "body",
                    wrapText: !0
                }, m.default.createElement(l.TextWithAnnotations, {
                    messageText: p,
                    isSenderViewer: !1,
                    isEmployee: !1,
                    mentionIds: null,
                    mentionLengths: null,
                    mentionOffsets: null,
                    participants: [],
                    onMentionClick: () => {},
                    onUrlClick: y,
                    onContextMenu: () => {},
                    urlRanges: h,
                    userID: "",
                    threadKey: ""
                })), m.default.createElement(k, null, u ? m.default.createElement(c.default, {
                    "aria-label": r.default._("Save", null, {
                        hk: "HH24H"
                    }).toString(),
                    telemetryName: "saveDescriptionButton",
                    onClick: () => {
                        p !== i && e.updateThreadDescription(e.threadKey, p), d(!1), e.clearModal()
                    },
                    caption: r.default._("Save", null, {
                        hk: "HH24H"
                    }),
                    size: c.RectangleButtonSize.Medium,
                    use: c.RectangleButtonUse.Primary
                }) : m.default.createElement(c.default, {
                    "aria-label": r.default._("Edit Description", null, {
                        hk: "Tz802"
                    }).toString(),
                    telemetryName: "editDescriptionButton",
                    onClick: () => d(!0),
                    caption: r.default._("Edit Description", null, {
                        hk: "Tz802"
                    }),
                    size: c.RectangleButtonSize.Medium,
                    use: c.RectangleButtonUse.Secondary
                }))))))
            }));
            t.default = T
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/ThreadDescriptionModal.bundle.js.map