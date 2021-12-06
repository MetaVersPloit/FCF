(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        1465: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const [e, t] = (0, n.useState)(null);
                return (0, n.useEffect)(() => {
                    let e = !1;
                    return window.interactiveDeferred.promise.then(a => {
                        e || t(a)
                    }), () => {
                        e = !0
                    }
                }, []), {
                    isInteractive: null != e,
                    scenario: "scenario" === (null == e ? void 0 : e.type) ? e.scenario : null
                }
            };
            var n = a(0)
        },
        316: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = g(a(47)),
                o = a(37),
                r = g(a(85)),
                l = g(a(5)),
                u = g(a(9)),
                d = a(32),
                i = g(a(1)),
                s = a(11),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = b();
                    if (t && t.has(e)) return t.get(e);
                    var a = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        } a.default = e, t && t.set(e, a);
                    return a
                }(a(0)),
                p = a(2),
                f = g(a(273)),
                m = a(6),
                h = g(a(4));

            function b() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return b = function() {
                    return e
                }, e
            }

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const y = (0, i.default)(p.FocusableView)(e => {
                return {
                    maxWidth: 230,
                    opacity: .9,
                    backgroundColor: e.badgeColor,
                    animation: e.flash ? `${t=e.badgeColor,(0,o.keyframes)({"0%":{backgroundColor:(0,r.default)(t).rotate(90).toString()},"100%":{backgroundColor:t}})} 1500ms` : void 0,
                    borderRadius: "2px",
                    position: "relative",
                    marginTop: e.theme.select({
                        mac: 4,
                        windows: 6
                    }),
                    marginRight: 5,
                    padding: "2px 4px 2px 4px",
                    pointerEvents: "auto",
                    WebkitAppRegion: "no-drag",
                    ":active, :hover": {
                        opacity: 1
                    },
                    height: 18,
                    flexDirection: "row",
                    alignItems: "center"
                };
                var t
            });
            var v;
            ! function(e) {
                e[e.Dev = 0] = "Dev", e[e.Alpha = 1] = "Alpha", e[e.Beta = 2] = "Beta", e[e.Prod = 3] = "Prod"
            }(v || (v = {}));
            const k = (0, i.default)(h.default)(e => ({
                fontSize: 9
            }));

            function _(e) {
                const {
                    version: t,
                    buildInfo: a,
                    lastUpdateEvent: o,
                    updateBadgeEnabled: r,
                    releaseChannel: u
                } = e, {
                    timestamp: d,
                    buildType: i
                } = a;
                switch (i) {
                    case "dev":
                        return "DEV";
                    case "adhoc":
                        return `Ad-hoc build  •  ${E(d)}`;
                    case "official":
                        return function(e, t, a, o, r) {
                            if (!r) try {
                                switch (e.type) {
                                    case "update-available":
                                        return l.default._("Updates Available", null, {
                                            hk: "4m11iY"
                                        });
                                    case "update-cancelled":
                                        return l.default._("Update Cancelled", null, {
                                            hk: "hSNsC"
                                        });
                                    case "download-progress":
                                        const t = Math.round(e.info.percent);
                                        return l.default._("Downloading • {percent}%", [l.default._param("percent", t)], {
                                            hk: "3vc0OE"
                                        });
                                    case "update-downloaded":
                                        return l.default._("Click to Restart and Update", null, {
                                            hk: "3ZlNQH"
                                        });
                                    case "error":
                                        return l.default._("Update Error", null, {
                                            hk: "3bEfLV"
                                        })
                                }
                            } catch (e) {}
                            const u = v[o].toUpperCase();
                            return a && Date.now() - a > (0, n.default)({
                                days: 10
                            }) ? l.default._("{release_channel_name}: v{version} • {timestamp}", [l.default._param("release_channel_name", u), l.default._param("version", t), l.default._param("timestamp", E(a))], {
                                hk: "4AnSxf"
                            }) : l.default._("{release_channel_name}: v{version}", [l.default._param("release_channel_name", u), l.default._param("version", t)], {
                                hk: "2Z3xo7"
                            })
                        }(o, t, d, u, r);
                    default:
                        return `v${t}: unknown build type.`
                }
            }

            function w(e, t) {
                const {
                    buildInfo: a,
                    lastUpdateEvent: n,
                    updateBadgeEnabled: o
                } = e;
                if ("dev" === a.buildType || "adhoc" === a.buildType) return {
                    badgeColor: t.colors.honey,
                    textColor: t.colors.base10
                };
                if (!o) {
                    if (n && ("update-available" === n.type || "update-downloaded" === n.type)) return {
                        badgeColor: t.colors.green,
                        textColor: t.colors.base10
                    };
                    if (n && "error" === n.type) return {
                        badgeColor: t.colors.red,
                        textColor: t.colors.base10
                    };
                    if (n && "update-cancelled" === n.type) return {
                        badgeColor: t.colors.base20,
                        textColor: t.colors.red
                    }
                }
                return {
                    badgeColor: t.colors.base50,
                    textColor: t.colors.base80
                }
            }

            function E(e) {
                if (!e) return "??";
                const t = new Date(e),
                    a = new Date,
                    o = Math.max(0, Math.floor((a.getTime() - t.getTime()) / (0, n.default)({
                        days: 1
                    })));
                return 0 === o ? "today" : 1 === o ? "yesterday" : o + " days ago"
            }

            function x(e) {
                return e ? new Date(e).toISOString() : "N/A"
            }
            var C = (0, s.connect)((function(e) {
                let t = v.Prod;
                return (0, d.isGatekeeperEnabled)(e, "archon_release_channel_dev") ? t = v.Dev : (0, d.isGatekeeperEnabled)(e, "archon_release_channel_alpha") ? t = v.Alpha : (0, d.isGatekeeperEnabled)(e, "archon_release_channel_beta") && (t = v.Beta), {
                    releaseChannel: t
                }
            }))((function(e) {
                const t = (0, m.useTheme)(),
                    [a, n] = (0, c.useState)(e.lastUpdateEvent);
                (0, c.useEffect)(() => u.default.updates.subscribeToUpdateEvents(n), []);
                const {
                    buildInfo: o,
                    updateBadgeEnabled: r
                } = e, {
                    number: l,
                    timestamp: d,
                    branch: i,
                    revision: s
                } = o, {
                    message: p,
                    badgeColor: h,
                    textColor: b
                } = function(e, t) {
                    return {
                        message: _(e),
                        ...w(e, t)
                    }
                }({
                    ...e,
                    lastUpdateEvent: a
                }, t);
                return c.default.createElement(y, {
                    telemetryName: "versionBadge",
                    telemetryContext: {
                        lastUpdateEvent: a && a.type || ""
                    },
                    flash: e.isDev,
                    badgeColor: h,
                    title: `${p.toString()}\nClick for more info`,
                    onActivate: () => {
                        !r && a && "update-downloaded" === a.type ? u.default.updates.quitAndInstall() : u.default.platform.openContextMenu([{
                            label: `Build number: ${l||"N/A"}`,
                            click: () => {
                                l && u.default.platform.openExternalURL(`https://our.intern.facebook.com/intern/mobile/buildinfo/buildinfo?build=${l}`)
                            },
                            enabled: !!l
                        }, {
                            label: `Build time: ${x(d)}`,
                            click: () => {},
                            enabled: !1
                        }, {
                            label: `Branch: ${i||"N/A"} at ${s?s.substr(0,8):"N/A"}`,
                            click: () => {
                                s && u.default.platform.openExternalURL(`https://phabricator.internmc.facebook.com/rFBS${s}`)
                            },
                            enabled: !!s
                        }, {
                            label: `Update status: ${a&&a.type}`,
                            click: () => {
                                const e = "error" === a.type ? a.info.stack : JSON.stringify(a.info);
                                u.default.platform.showErrorBox("Update Error", `Update status: ${a.type}, extra info:\n\n${e}\n\nCheck out logs in Messenger -> Open logs directory`)
                            }
                        }, {
                            label: "Check for updates...",
                            click: () => {
                                u.default.updates.checkForUpdates()
                            },
                            enabled: u.default.updates.isUpdateSupported()
                        }])
                    }
                }, a && "checking-for-update" === a.type ? c.default.createElement(f.default, {
                    height: 14
                }) : c.default.createElement(k, {
                    use: "caption",
                    color: b
                }, p))
            }));
            t.default = C
        },
        525: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function() {
                const {
                    scenario: e
                } = (0, l.default)(), [t, a] = (0, d.useState)(!1), u = (0, r.useTheme)(), c = (0, d.useCallback)(() => {
                    a(!1)
                }, []);
                return d.default.createElement(i.default, null, d.default.createElement(f, {
                    onClick: () => {
                        a(!0)
                    },
                    badgeColor: e ? h(e.duration, u) : u.colors.base50
                }, d.default.createElement(m, {
                    use: "caption",
                    color: e ? u.semanticColors.textWhite : u.colors.base80
                }, `TTI: ${e?(e.duration/1e3).toFixed(3)+"s":""}`)), t && d.default.createElement(n.Modal, {
                    onHideModal: c
                }, d.default.createElement(n.ModalHeader, {
                    title: "Performance Information",
                    onClose: c
                }), d.default.createElement(o.default, {
                    css: {
                        padding: 8
                    }
                }, d.default.createElement(s.default, {
                    use: "title"
                }, "Scenario Name: ", null == e ? void 0 : e.name), d.default.createElement(s.default, {
                    use: "title"
                }, "Splits"), d.default.createElement("table", null, null == e ? void 0 : e.splits.map((e, t) => d.default.createElement("tr", {
                    key: t
                }, d.default.createElement("td", null, d.default.createElement(s.default, {
                    use: "body"
                }, e.name)), d.default.createElement("td", null, d.default.createElement(s.default, {
                    use: "body"
                }, e.timestamp))))))))
            };
            var n = a(58),
                o = p(a(45)),
                r = a(6),
                l = p(a(1465)),
                u = p(a(1)),
                d = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var t = c();
                    if (t && t.has(e)) return t.get(e);
                    var a = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if (Object.prototype.hasOwnProperty.call(e, o)) {
                            var r = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                            r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                        } a.default = e, t && t.set(e, a);
                    return a
                }(a(0)),
                i = p(a(2)),
                s = p(a(4));

            function c() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return c = function() {
                    return e
                }, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            const f = (0, u.default)(i.default)(e => ({
                    height: 18,
                    maxWidth: 230,
                    opacity: .9,
                    backgroundColor: e.badgeColor,
                    borderRadius: "2px",
                    position: "relative",
                    marginTop: e.theme.select({
                        mac: 4,
                        windows: 6
                    }),
                    marginRight: 5,
                    padding: "2px 4px 2px 4px",
                    pointerEvents: "auto",
                    WebkitAppRegion: "no-drag",
                    flexDirection: "row",
                    alignItems: "center"
                })),
                m = (0, u.default)(s.default)(e => ({
                    fontSize: 9
                }));

            function h(e, t) {
                return e < 5e3 ? t.colors.green : e < 1e4 ? t.colors.honey : t.colors.red
            }
        },
        526: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.UpdateBadge = _, t.default = function(e) {
                const [t, a] = (0, i.useState)(e.lastUpdateEvent);
                (0, i.useEffect)(() => l.default.updates.subscribeToUpdateEvents(a), []);
                const [u, d] = (0, i.useState)(!1);
                (0, i.useLayoutEffect)(() => {
                    let e;
                    return u || "update-downloaded" !== t.type ? u && "update-downloaded" !== t.type && d(!1) : e = window.setTimeout(() => d(!0), 2e3), () => {
                        e && clearTimeout(e)
                    }
                }, [t, d, u]);
                const s = (0, i.useMemo)(() => function(e, t) {
                    let a = null;
                    switch (e.type) {
                        case "update-available":
                        case "update-cancelled":
                            a = {
                                use: "notice",
                                message: r.default._("Update Now", null, {
                                    hk: "3zVPyH"
                                }),
                                onActivate: () => w({
                                    title: r.default._("A New Version of {Application Name} is Available", [r.default._param("Application Name", o.displayName)], {
                                        hk: "3RdXTu"
                                    }),
                                    text: r.default._("Update now to start using the latest version.", null, {
                                        hk: "4bN39P"
                                    }),
                                    primaryButton: r.default._("Update", null, {
                                        hk: "1Kao6G"
                                    }),
                                    secondaryButton: r.default._("Not Now", null, {
                                        hk: "3epnZn"
                                    }),
                                    action: () => {
                                        l.default.updates.startDownload()
                                    }
                                })
                            };
                            break;
                        case "download-progress":
                            const n = (e.info.transferred / 1e6).toFixed(2),
                                u = (e.info.total / 1e6).toFixed(2),
                                d = Math.round(e.info.percent);
                            a = {
                                use: "loading",
                                progress: d,
                                message: r.default._("{transferred} of {total} MB", [r.default._param("transferred", n), r.default._param("total", u)], {
                                    hk: "Ezuol"
                                }),
                                onActivate: () => w({
                                    title: r.default._("Are you sure you want to cancel this update?", null, {
                                        hk: "2W0cFT"
                                    }),
                                    text: r.default._("The download will stop and you won't have the latest version of {Application Name}.", [r.default._param("Application Name", o.displayName)], {
                                        hk: "2r7Rhk"
                                    }),
                                    primaryButton: r.default._("Cancel Update", null, {
                                        hk: "3TvMDP"
                                    }),
                                    secondaryButton: r.default._("Resume", null, {
                                        hk: "2KkDmG"
                                    }),
                                    action: () => {
                                        l.default.updates.cancelDownload()
                                    }
                                })
                            };
                            break;
                        case "update-downloaded":
                            const i = () => w({
                                title: r.default._("A New Version of {Application Name} Has Been Downloaded", [r.default._param("Application Name", o.displayName)], {
                                    hk: "4mKlCf"
                                }),
                                text: r.default._("Relaunch {Application Name} to start using it now.", [r.default._param("Application Name", o.displayName)], {
                                    hk: "3kUpH4"
                                }),
                                primaryButton: r.default._("Restart", null, {
                                    hk: "v2yWt"
                                }),
                                secondaryButton: r.default._("Not Now", null, {
                                    hk: "tJRXK"
                                }),
                                action: () => {
                                    l.default.updates.quitAndInstall()
                                }
                            });
                            a = t ? {
                                use: "notice",
                                message: r.default._("Relaunch to Complete Update", null, {
                                    hk: "43DJkI"
                                }),
                                onActivate: i
                            } : {
                                use: "loading",
                                progress: 100,
                                message: r.default._("Download Complete", null, {
                                    hk: "g4CrX"
                                }),
                                onActivate: i
                            };
                            break;
                        case "error":
                            a = {
                                use: "loading-failed",
                                progress: 100,
                                message: r.default._("Download Failed", null, {
                                    hk: "W1HUU"
                                }),
                                onActivate: () => w({
                                    title: r.default._("Download Failed", null, {
                                        hk: "ovu7M"
                                    }),
                                    text: r.default._("An error occurred while downloading this update. Please check your network connection and try again.", null, {
                                        hk: "2FZpc0"
                                    }),
                                    primaryButton: r.default._("Try Again", null, {
                                        hk: "aarVP"
                                    }),
                                    secondaryButton: r.default._("Cancel", null, {
                                        hk: "4xGpHN"
                                    }),
                                    action: () => {
                                        l.default.updates.checkForUpdates()
                                    }
                                })
                            };
                            break;
                        case "store-update-available":
                            a = {
                                use: "notice",
                                message: r.default._("Update Now", null, {
                                    hk: "3zVPyH"
                                }),
                                onActivate: () => w({
                                    title: r.default._("A New Version of {Application Name} is Available", [r.default._param("Application Name", o.displayName)], {
                                        hk: "4dBDoD"
                                    }),
                                    text: r.default._("Download the latest version of {Application Name} in the App Store.", [r.default._param("Application Name", o.displayName)], {
                                        hk: "3kYaBl"
                                    }),
                                    primaryButton: r.default._("Open App Store", null, {
                                        hk: "2QpdvV"
                                    }),
                                    secondaryButton: r.default._("Not Now", null, {
                                        hk: "pzCrm"
                                    }),
                                    action: () => {
                                        l.default.platform.openExternalURL(e.info.storeUri)
                                    }
                                })
                            }
                    }
                    if (null === a) return null;
                    return (i.default.createElement(_, b({
                        telemetryContext: {
                            lastUpdateEvent: e && e.type || ""
                        }
                    }, a)))
                }(t, u), [t, u]);
                return (0, i.useEffect)(() => {
                    s && l.default.metrics.trackStrictEvent((0, n.ImpressionEvent)({
                        target: "updateBadge",
                        targetType: "component",
                        surface: "messenger",
                        context: {
                            lastUpdateEventType: t.type
                        }
                    }))
                }, [s]), s
            };
            var n = a(24),
                o = a(83),
                r = h(a(5)),
                l = h(a(9)),
                u = h(a(1)),
                d = a(527),
                i = m(a(0)),
                s = m(a(2)),
                c = a(6),
                p = h(a(4));

            function f() {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function m(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = f();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o)) {
                        var r = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, o, r) : a[o] = e[o]
                    } return a.default = e, t && t.set(e, a), a
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function b() {
                return (b = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const g = (0, u.default)(s.FocusableView)(e => ({
                    height: "18px",
                    maxWidth: 230,
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: e.theme.colors.base20,
                    borderRadius: "3px",
                    position: "relative",
                    marginTop: e.theme.select({
                        mac: 4,
                        windows: 6
                    }),
                    marginRight: 4,
                    padding: "0px 4px",
                    lineHeight: "18px",
                    pointerEvents: "auto",
                    WebkitAppRegion: "no-drag",
                    ":active, :hover": {
                        opacity: 1
                    }
                })),
                y = (0, u.default)(p.default)(e => ({
                    fontWeight: 500,
                    fontSize: 9,
                    marginLeft: 4
                })),
                v = u.default.div(e => ({
                    height: 6.5,
                    width: 6.5,
                    borderRadius: "50%",
                    background: e.theme.colors.base80
                })),
                k = (0, u.default)(s.default)(e => ({
                    width: 8,
                    height: 8,
                    boxSizing: "content-box"
                }));

            function _(e) {
                const t = (0, c.useTheme)();
                return (i.default.createElement(g, {
                    telemetryName: "updateBadge",
                    telemetryContext: e.telemetryContext,
                    onActivate: e.onActivate || null
                }, "notice" === e.use ? i.default.createElement(v, null) : i.default.createElement(k, null, i.default.createElement(d.CircularProgressbar, {
                    value: e.progress || 0,
                    strokeWidth: 10,
                    background: !0,
                    styles: (0, d.buildStyles)({
                        strokeLinecap: "round",
                        pathTransitionDuration: .5,
                        trailColor: "transparent",
                        pathColor: "loading" == e.use ? t.semanticColors.primary : t.colors.red,
                        backgroundColor: "transparent"
                    })
                })), i.default.createElement(y, null, e.message)))
            }
            async function w({
                title: e,
                text: t,
                primaryButton: a,
                secondaryButton: n,
                action: o
            }) {
                const {
                    response: r
                } = await l.default.platform.showMessageBox({
                    type: "info",
                    detail: t.toString(),
                    message: e.toString(),
                    noLink: !0,
                    cancelId: 1,
                    buttons: [a.toString(), n.toString()]
                });
                0 === r && o()
            }
        }
    }
]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/TitleBar~native_fallback~uiexplorer.bundle.js.map