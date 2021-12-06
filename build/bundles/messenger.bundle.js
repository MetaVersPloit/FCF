! function(e) {
    function t(t) {
        for (var a, i, r = t[0], d = t[1], u = t[2], s = 0, f = []; s < r.length; s++) i = r[s], Object.prototype.hasOwnProperty.call(n, i) && n[i] && f.push(n[i][0]), n[i] = 0;
        for (a in d) Object.prototype.hasOwnProperty.call(d, a) && (e[a] = d[a]);
        for (c && c(t); f.length;) f.shift()();
        return l.push.apply(l, u || []), o()
    }

    function o() {
        for (var e, t = 0; t < l.length; t++) {
            for (var o = l[t], a = !0, r = 1; r < o.length; r++) {
                var d = o[r];
                0 !== n[d] && (a = !1)
            }
            a && (l.splice(t--, 1), e = i(i.s = o[0]))
        }
        return e
    }
    var a = {},
        n = {
            109: 0
        },
        l = [];

    function i(t) {
        if (a[t]) return a[t].exports;
        var o = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.e = function(e) {
        var t = [],
            o = n[e];
        if (0 !== o)
            if (o) t.push(o[2]);
            else {
                var a = new Promise((function(t, a) {
                    o = n[e] = [t, a]
                }));
                t.push(o[2] = a);
                var l, r = document.createElement("script");
                r.charset = "utf-8", r.timeout = 120, i.nc && r.setAttribute("nonce", i.nc), r.src = function(e) {
                    return i.p + "" + ({
                        0: "AddPeopleView~CreatePollModal~EditThreadColorView~EditThreadEmojiView~EditThreadNameView~Notificatio~a2bce9e9",
                        7: "ContextMenu~InboxScreen~TitleBar~native_fallback~uiexplorer",
                        8: "DnDModal~RemindMeModal~RoomModal~UserStatusModal~uiexplorer",
                        9: "GroupMembersView~MediaViewer~RichMediaPicker~screensharing~uiexplorer",
                        10: "Composer~ForwardViewModal~MediaViewer~uiexplorer",
                        11: "DnDModal~RemindMeModal~UserStatusModal~uiexplorer",
                        12: "InboxScreen~TitleBar~native_fallback~uiexplorer",
                        13: "MediaViewer~RichMediaPicker~StickerStoreView~uiexplorer",
                        14: "PaymentModal~RoomModal~StickerStoreView~uiexplorer",
                        16: "ComposerEmojiPicker",
                        17: "FeedbackModal~OSMetaWelcomeModal~uiexplorer",
                        18: "ForwardViewModal~MediaViewer~RoomModal",
                        19: "RemindMeModal~UserStatusModal~uiexplorer",
                        20: "RoomModal~Rooms~uiexplorer",
                        21: "TitleBar~native_fallback~uiexplorer",
                        23: "AddPeopleView~RingParticipantsView",
                        24: "Composer",
                        25: "CreatePollModal",
                        26: "DnDModal",
                        27: "FeedbackModal",
                        28: "InboxScreen~uiexplorer",
                        29: "NotificationsView~uiexplorer",
                        30: "OSMetaWelcomeModal",
                        31: "PollConsumptionModal",
                        32: "ReactionsModal",
                        33: "RichMediaPicker~uiexplorer",
                        34: "Rooms",
                        35: "TitleBar",
                        36: "UserStatusModal",
                        38: "locale0",
                        39: "locale10",
                        40: "locale12",
                        41: "locale14",
                        42: "locale16",
                        43: "locale18",
                        44: "locale2",
                        45: "locale20",
                        46: "locale22",
                        47: "locale24",
                        48: "locale26",
                        49: "locale28",
                        50: "locale30",
                        51: "locale32",
                        52: "locale34",
                        53: "locale36",
                        54: "locale38",
                        55: "locale4",
                        56: "locale40",
                        57: "locale42",
                        58: "locale44",
                        59: "locale46",
                        60: "locale48",
                        61: "locale50",
                        62: "locale52",
                        63: "locale54",
                        64: "locale56",
                        65: "locale58",
                        66: "locale6",
                        67: "locale60",
                        68: "locale62",
                        69: "locale64",
                        70: "locale66",
                        71: "locale68",
                        72: "locale70",
                        73: "locale72",
                        74: "locale74",
                        75: "locale76",
                        76: "locale78",
                        77: "locale8",
                        78: "locale80",
                        79: "locale82",
                        80: "locale84",
                        84: "AddPeopleView",
                        85: "ContextMenu",
                        86: "EditNicknamesView",
                        87: "EditThreadColorView",
                        88: "EditThreadEmojiView",
                        89: "EditThreadNameView",
                        90: "ForwardViewModal",
                        91: "GroupMembersView",
                        92: "GroupMembershipRequestsView",
                        93: "InboxScreen",
                        94: "LoginScreen",
                        95: "MediaViewer",
                        96: "NotificationsView",
                        97: "PaymentModal",
                        98: "ReactionPicker",
                        99: "RemindMeModal",
                        100: "ReportParticipant",
                        101: "RichMediaPicker",
                        102: "RingParticipantsView",
                        103: "RoomModal",
                        104: "SavedMessages",
                        105: "StickerStoreView",
                        106: "ThreadDescriptionModal"
                    } [e] || e) + ".bundle.js"
                }(e);
                var d = new Error;
                l = function(t) {
                    r.onerror = r.onload = null, clearTimeout(u);
                    var o = n[e];
                    if (0 !== o) {
                        if (o) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                                l = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + a + ": " + l + ")", d.name = "ChunkLoadError", d.type = a, d.request = l, o[1](d)
                        }
                        n[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: r
                    })
                }), 12e4);
                r.onerror = r.onload = l, document.head.appendChild(r)
            } return Promise.all(t)
    }, i.m = e, i.c = a, i.d = function(e, t, o) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (i.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e) i.d(o, a, function(t) {
                return e[t]
            }.bind(null, a));
        return o
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "bundles/", i.oe = function(e) {
        throw console.error(e), e
    };
    var r = window.webpackJsonp = window.webpackJsonp || [],
        d = r.push.bind(r);
    r.push = t, r = r.slice();
    for (var u = 0; u < r.length; u++) t(r[u]);
    var c = d;
    l.push([902, 2, 1, 4, 5, 3, 6, 22, 81]), o()
}({
    1434: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return (0, g.createStore)({
                initialState: {},
                extensions: [n.default, (0, y.getSagaExtension)(void 0, m)]
            }, s.GatekeeperModule, c.ExperimentationModule, r.AuthenticationModule, u.DownloadsModule, l.AppContextModule, f.NotificationModule, i.AudioVideoModule, p.SystemTrayModule, d.DeeplinkHandlingModule)
        };
        var a, n = (a = o(394)) && a.__esModule ? a : {
                default: a
            },
            l = o(395),
            i = o(1435),
            r = o(21),
            d = o(1437),
            u = o(1440),
            c = o(224),
            s = o(139),
            f = o(349),
            p = o(1443),
            y = o(1445),
            g = o(138);

        function m(e, t) {
            setTimeout(() => {
                throw e.info = t && t.sagaStack, e
            }, 0)
        }
    },
    1435: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AudioVideoModule = void 0;
        const a = {
            id: "audioVideo",
            reducerMap: {
                audioVideo: o(1436).AudioVideoReducer
            }
        };
        t.AudioVideoModule = a
    },
    1436: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AudioVideoReducer = t.AudioStateActions = t.initialState = void 0;
        var a = o(170),
            n = o(205),
            l = o(51);
        const i = {
            audio: {},
            video: {}
        };
        let r;
        t.initialState = i, t.AudioStateActions = r,
            function(e) {
                e.FinishedLoading = "finished loading", e.TogglePlay = "toggle play", e.StopPlayback = "stop playback", e.UpdateTime = "update time"
            }(r || (t.AudioStateActions = r = {}));
        const d = (0, l.makeReducer)(i, (e, t) => {
            switch (t.type) {
                case n.AudioVideoActions.audio.initializeAudio.type: {
                    const {
                        threadKey: o,
                        attachmentFbid: n
                    } = t.payload;
                    e.audio[o] || (e.audio[o] = {
                        playingAudioFbid: null,
                        audioState: {}
                    }), e.audio[o].audioState[n] = {
                        state: a.AudioStates.Loading
                    };
                    break
                }
                case n.AudioVideoActions.audio.finishedLoading.type: {
                    const {
                        threadKey: o,
                        attachmentFbid: a,
                        duration: n
                    } = t.payload;
                    e.audio[o] || (e.audio[o] = {
                        playingAudioFbid: null,
                        audioState: {}
                    });
                    const l = u(e.audio[o].audioState[a], {
                        type: r.FinishedLoading,
                        duration: n
                    });
                    e.audio[o].audioState[a] = l;
                    break
                }
                case n.AudioVideoActions.audio.togglePlay.type: {
                    const {
                        threadKey: o,
                        attachmentFbid: n
                    } = t.payload, l = e.audio[o].playingAudioFbid, i = e.audio[o].audioState[n];
                    if (i) {
                        const t = u(i, {
                            type: r.TogglePlay
                        });
                        if (e.audio[o].audioState[n] = t, l !== n) {
                            if (null != l) {
                                const t = u(e.audio[o].audioState[l], {
                                    type: r.StopPlayback
                                });
                                e.audio[o].audioState[l] = t
                            }
                            e.audio[o] = {
                                ...e.audio[o],
                                playingAudioFbid: n
                            }
                        }
                        t.state === a.AudioStates.Paused && (e.audio[o] = {
                            ...e.audio[o],
                            playingAudioFbid: null
                        })
                    }
                    break
                }
                case n.AudioVideoActions.audio.stopPlayback.type: {
                    const {
                        threadKey: o,
                        attachmentFbid: a
                    } = t.payload;
                    e.audio[o] || (e.audio[o] = {
                        playingAudioFbid: null,
                        audioState: {}
                    });
                    const n = u(e.audio[o].audioState[a], {
                        type: r.StopPlayback
                    });
                    e.audio[o].audioState[a] = n;
                    break
                }
                case n.AudioVideoActions.audio.updateTime.type: {
                    const {
                        threadKey: o,
                        attachmentFbid: a,
                        currentTime: n
                    } = t.payload;
                    if (!e.audio[o]) {
                        e.audio[o] = {
                            playingAudioFbid: null,
                            audioState: {}
                        };
                        break
                    }
                    const l = u(e.audio[o].audioState[a], {
                        type: r.UpdateTime,
                        currentTime: n
                    });
                    e.audio[o].audioState[a] = l;
                    break
                }
                case n.AudioVideoActions.video.persistVideoPlaytime.type: {
                    const {
                        threadKey: o,
                        attachmentFbid: n,
                        currentTime: l,
                        isPlaying: i,
                        continueInThread: r,
                        volume: d,
                        isMuted: u
                    } = t.payload.persistArgs;
                    e.video[o] || (e.video[o] = {}), e.video[o][n] = {
                        playTime: l,
                        playState: i ? a.PlayStates.Playing : a.PlayStates.Paused,
                        target: r ? a.Targets.Thread : a.Targets.Fullscreen,
                        volume: d,
                        isMuted: u
                    };
                    break
                }
                case n.AudioVideoActions.cleanUpThreadInfo.type: {
                    const {
                        threadKey: o
                    } = t.payload;
                    delete e.video[o], delete e.audio[o];
                    break
                }
            }
        });

        function u(e, t) {
            switch (t.type) {
                case r.FinishedLoading:
                    return {
                        state: a.AudioStates.Ready, duration: t.duration
                    };
                case r.TogglePlay:
                    if (e.state === a.AudioStates.Playing) return {
                        ...e,
                        state: a.AudioStates.Paused
                    };
                    if (e.state === a.AudioStates.Paused) return {
                        ...e,
                        state: a.AudioStates.Playing
                    };
                    if (e.state === a.AudioStates.Ready) return {
                        ...e,
                        state: a.AudioStates.Playing,
                        currentTime: e.duration
                    };
                    break;
                case r.StopPlayback:
                    if (e.state === a.AudioStates.Playing || e.state === a.AudioStates.Paused) return {
                        ...e,
                        state: a.AudioStates.Ready
                    };
                    break;
                case r.UpdateTime:
                    if (e.state === a.AudioStates.Loading) break;
                    const o = e.state === a.AudioStates.Ready ? a.AudioStates.Paused : e.state;
                    return {
                        ...e, state: o, currentTime: t.currentTime
                    }
            }
            return e
        }
        t.AudioVideoReducer = d
    },
    1437: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(1438);
        Object.keys(a).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e]
                }
            })
        }));
        var n = o(314);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var l = o(1439);
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }));
        var i = o(513);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var r = o(514);
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            })
        }));
        var d = o(515);
        Object.keys(d).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return d[e]
                }
            })
        }))
    },
    1438: function(e, t, o) {},
    1439: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DeeplinkHandlingModule = void 0;
        var a = o(513),
            n = o(514);
        const l = {
            id: "deeplinkHandling",
            reducerMap: {
                deeplinkHandling: a.DeeplinkHandlingReducer
            },
            sagas: [n.DeeplinkHandlingSaga]
        };
        t.DeeplinkHandlingModule = l
    },
    1440: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(1441);
        Object.keys(a).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e]
                }
            })
        }));
        var n = o(197);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }));
        var l = o(1442);
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }));
        var i = o(516);
        Object.keys(i).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return i[e]
                }
            })
        }));
        var r = o(517);
        Object.keys(r).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return r[e]
                }
            })
        }));
        var d = o(259);
        Object.keys(d).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return d[e]
                }
            })
        }))
    },
    1441: function(e, t, o) {},
    1442: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DownloadsModule = void 0;
        var a, n = o(516),
            l = (a = o(517)) && a.__esModule ? a : {
                default: a
            };
        const i = {
            id: "downloads",
            reducerMap: {
                downloads: n.DownloadsReducer
            },
            sagas: [l.default]
        };
        t.DownloadsModule = i
    },
    1443: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = o(1444);
        Object.keys(a).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return a[e]
                }
            })
        }));
        var n = o(518);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    },
    1444: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SystemTrayModule = void 0;
        const a = {
            id: "systemTray",
            sagas: [o(518).SystemTraySaga]
        };
        t.SystemTrayModule = a
    },
    1445: function(e, t, o) {
        "use strict";
        t.__esModule = !0,
            function(e) {
                for (var o in e) t.hasOwnProperty(o) || (t[o] = e[o])
            }(o(1446))
    },
    1446: function(e, t, o) {
        "use strict";
        t.__esModule = !0;
        var a = o(64),
            n = o(138),
            l = o(1456),
            i = o(522);
        t.getSagaExtension = function(e, t) {
            var o = a.default({
                    context: e,
                    sagaMonitor: void 0,
                    onError: t
                }),
                r = n.getRefCountedManager(l.getSagaManager(o), i.sagaEquals);
            return {
                middleware: [o],
                onModuleManagerCreated: function(t) {
                    e && (e.moduleManager = t)
                },
                onModuleAdded: function(e) {
                    e.sagas && r.add(e.sagas)
                },
                onModuleRemoved: function(e) {
                    e.sagas && r.remove(e.sagas)
                },
                dispose: function() {
                    r.dispose()
                }
            }
        }
    },
    1456: function(e, t, o) {
        "use strict";
        t.__esModule = !0;
        var a = o(522),
            n = o(138);
        t.getSagaManager = function(e) {
            var t = n.getMap(a.sagaEquals);
            return {
                getItems: function() {
                    return t.keys.slice()
                },
                add: function(o) {
                    o && o.forEach((function(o) {
                        o && !t.get(o) && t.add(o, function(e, t) {
                            if ("function" == typeof t) {
                                var o = t;
                                return e.run(o)
                            }
                            var a = t.saga,
                                n = t.argument;
                            return e.run(a, n)
                        }(e, o))
                    }))
                },
                remove: function(e) {
                    e && e.forEach((function(e) {
                        t.get(e) && t.remove(e).cancel()
                    }))
                },
                dispose: function() {
                    t.keys.forEach((function(e) {
                        return t.get(e).cancel()
                    }))
                }
            }
        }
    },
    314: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DeeplinkHandlingActions = void 0;
        var a = o(76);
        const n = {
            joinRoomWhenReady: (0, a.actionCreator)("deeplinkHandling/joinRoomWhenReady", e => ({
                roomUrl: e
            })),
            roomJoinHandled: (0, a.actionCreator)("deeplinkHandling/roomJoinHandled")
        };
        t.DeeplinkHandlingActions = n
    },
    513: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DeeplinkHandlingReducer = void 0;
        var a = o(314);
        const n = (0, o(51).makeReducer)({
            pendingRoomJoinUrl: null
        }, (e, t) => {
            switch (t.type) {
                case a.DeeplinkHandlingActions.joinRoomWhenReady.type:
                    e.pendingRoomJoinUrl = t.payload.roomUrl;
                    break;
                case a.DeeplinkHandlingActions.roomJoinHandled.type:
                    e.pendingRoomJoinUrl = null
            }
        });
        t.DeeplinkHandlingReducer = n
    },
    514: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DeeplinkHandlingSaga = function*() {
            const e = yield(0, g.call)(w);
            yield(0, g.fork)(k, e), yield(0, g.call)(v), yield(0, g.takeLatest)(l.AuthenticationActions.loginSucceeded.type, A), yield(0, g.takeLatest)(y.RtcActions.rtcReady.type, A), yield(0, g.call)(_), yield(0, g.takeLatest)(l.AuthenticationActions.loginSucceeded.type, _), yield(0, g.call)(M), yield(0, g.takeLatest)(l.AuthenticationActions.loginSucceeded.type, M), yield(0, g.takeLatest)(i.GatekeeperActionTypes.gatekeepersRefreshed, _);
            const t = yield(0, g.call)(b);
            yield(0, g.fork)(h, t)
        };
        var a, n = o(28),
            l = o(21),
            i = o(139),
            r = o(314),
            d = o(515),
            u = o(8),
            c = (a = o(9)) && a.__esModule ? a : {
                default: a
            },
            s = o(77),
            f = o(32),
            p = o(23),
            y = o(49),
            g = o(17),
            m = o(64);

        function* b() {
            return yield(0, g.call)(m.eventChannel, e => c.default.settings.listenForUserSettingChanges((t, o) => e({
                settings: t,
                changedPaths: o
            })))
        }

        function* h(e) {
            for (;;) {
                const {
                    changedPaths: t
                } = yield(0, g.take)(e);
                t.includes("useLocalServer") && (yield(0, g.call)(_))
            }
        }

        function* v() {
            const e = yield(0, g.call)(c.default.deeplink.getColdStartUrl);
            e && (yield(0, g.call)(S, {
                isWarmStart: !1,
                url: e
            }))
        }

        function* w() {
            return yield(0, g.call)(m.eventChannel, e => c.default.deeplink.subscribeAlwaysOnDeeplinks(e))
        }

        function* k(e) {
            try {
                for (;;) {
                    const t = yield(0, g.take)(e);
                    yield(0, g.call)(S, t)
                }
            } finally {
                e.close()
            }
        }

        function* _() {
            const e = yield(0, g.select)(l.isUserLoggedIn), t = yield(0, g.call)(c.default.settings.getUserSettings), o = yield(0, g.select)(f.isGatekeeperEnabled, "archon_enable_localserver"), a = yield(0, g.select)(f.isGatekeeperEnabled, "archon_enable_deeplinking_user_check");
            if (t.useLocalServer && e && o) {
                const e = yield(0, g.select)(l.requireAuthenticationData);
                yield(0, g.call)(c.default.localServer.start), yield(0, g.call)(c.default.localServer.setAuthData, e), yield(0, g.call)(c.default.localServer.setEnableUserCheck, a)
            } else yield(0, g.call)(c.default.localServer.clearAuthData), yield(0, g.call)(c.default.localServer.stop)
        }

        function* M() {
            if (yield(0, g.select)(l.isUserLoggedIn)) {
                const e = yield(0, g.select)(l.requireAuthenticationData);
                yield(0, g.call)(c.default.deeplink.setCurrentUserId, e.userID)
            } else yield(0, g.call)(c.default.deeplink.clearCurrentUserId)
        }

        function* S(e) {
            const t = function(e) {
                const t = e.hostname;
                switch (t) {
                    case "feedback":
                        return {
                            type: t, promotionID: e.searchParams.get("promotionID"), funnelId: e.searchParams.get("funnel_id")
                        };
                    case "room":
                        return {
                            type: t, joinUrl: e.searchParams.get("joinurl"), funnelId: e.searchParams.get("funnel_id")
                        };
                    case "thread":
                        return {
                            type: t, threadId: e.searchParams.get("threadid"), funnelId: e.searchParams.get("funnel_id")
                        };
                    case "settings": {
                        const o = ["general", "notifications", "availability", "theme", "locale"].filter(t => t === e.searchParams.get("pane")).shift() || "general";
                        return {
                            type: t,
                            pane: o,
                            funnelId: e.searchParams.get("funnel_id")
                        }
                    }
                    default:
                        return null
                }
            }(e.url);
            if (t) switch (t.type) {
                case "feedback": {
                    const e = yield(0, g.select)(l.requireAuthenticationData), o = t.promotionID, a = o ? c.default.promotions.getPromotionByID(o) : null;
                    yield(0, g.put)(n.AppContextActions.showModal({
                        type: "FeedbackForm",
                        promotion: null != a ? a : {
                            userID: e.userID,
                            type: "feedback"
                        }
                    }, null));
                    break
                }
                case "room": {
                    const e = t.joinUrl;
                    null != e && (yield(0, g.call)(P, e));
                    break
                }
                case "thread": {
                    yield(0, g.call)(c.default.log.error, "case: thread");
                    const e = t.threadId;
                    if (null != e) {
                        if (!(yield(0, g.select)(p.hasThread, e))) {
                            const t = yield(0, g.call)(c.default.msys.fetchInboxByThreadKey, e);
                            yield(0, g.put)(p.InboxActions.threads.setTempOpenedThread(t)), yield(0, g.call)(s.verifyThreadRowExists, e)
                        }
                        yield(0, g.put)(p.InboxActions.threads.openThread(e, !0))
                    }
                    break
                }
                case "settings":
                    yield(0, g.put)(n.AppContextActions.openOrFocusPortalWindow({
                        portalKey: u.PortalKey.Settings,
                        startingPane: t.pane
                    }))
            }
        }

        function* P(e) {
            yield(0, g.put)(r.DeeplinkHandlingActions.joinRoomWhenReady(e)), yield(0, g.call)(A)
        }

        function* A() {
            if (!(yield(0, g.select)(d.canJoinRoom))) return;
            const e = yield(0, g.select)(d.pendingRoomJoinUrl);
            null != e && (yield(0, g.call)(O, e), yield(0, g.put)(r.DeeplinkHandlingActions.roomJoinHandled()))
        }

        function* O(e) {
            (yield(0, g.select)(f.isGatekeeperEnabled, "archon_enable_join_video_chat_links")) && (yield(0, g.put)(y.RtcActions.beginJoinMeetup(e)))
        }
    },
    515: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.pendingRoomJoinUrl = function(e) {
            return e.deeplinkHandling.pendingRoomJoinUrl
        }, t.isWaitingAuthToJoinRoom = function(e) {
            return !(0, a.isUserLoggedIn)(e) && null != e.deeplinkHandling.pendingRoomJoinUrl
        }, t.canJoinRoom = function(e) {
            if (!(0, a.isUserLoggedIn)(e)) return !1;
            return !!e.rtc && (0, n.isRtcReady)(e)
        };
        var a = o(61),
            n = o(146)
    },
    516: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DownloadsReducer = void 0;
        var a = o(197);
        const n = (0, o(51).makeReducer)({
            downloadState: {},
            downloadUrlToId: {}
        }, (e, t) => {
            const {
                type: o,
                payload: n
            } = t;
            switch (o) {
                case a.DownloadsActions.requestDownload.type: {
                    const {
                        downloadId: t,
                        downloadUrl: o
                    } = n;
                    e.downloadUrlToId[o] = t;
                    break
                }
                case a.DownloadsActions.downloadStarted.type: {
                    const {
                        item: t
                    } = n, o = t.url, a = e.downloadUrlToId[o];
                    e.downloadState[a] = {
                        downloadId: a,
                        downloadUrl: o,
                        running: !0,
                        progress: 0,
                        finalized: !1
                    };
                    break
                }
                case a.DownloadsActions.downloadUpdated.type: {
                    const t = n.item.url,
                        o = e.downloadUrlToId[t] || t,
                        a = e.downloadState[o];
                    if (!a || a.finalized) break;
                    const l = n.item.receivedBytes / n.item.totalBytes;
                    "progressing" === n.state ? (e.downloadState[o].progress = l, e.downloadState[o].running = !0) : "interrupted" === n.state && (e.downloadState[o].progress = l, e.downloadState[o].running = !1);
                    break
                }
                case a.DownloadsActions.downloadDone.type: {
                    const t = n.item.url,
                        o = e.downloadUrlToId[t] || t,
                        a = e.downloadState[o];
                    if (!a || a.finalized) break;
                    "completed" === n.state ? (e.downloadState[o].progress = 1, e.downloadState[o].running = !1, e.downloadState[o].finalized = !0, e.downloadState[o].localFile = {
                        path: n.item.savePath,
                        lastUpdated: n.item.lastModifiedTime
                    }) : "interrupted" === n.state ? (e.downloadState[o].progress = 0, e.downloadState[o].running = !1, e.downloadState[o].error = !0, e.downloadState[o].finalized = !0, e.downloadState[o].localFile = void 0) : "cancelled" === n.state && (e.downloadState[o].progress = 0, e.downloadState[o].running = !1, e.downloadState[o].finalized = !0, e.downloadState[o].localFile = void 0);
                    break
                }
            }
        });
        t.DownloadsReducer = n
    },
    517: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function*() {
            const e = yield(0, d.call)(i.default.downloads.getUpdateEmitter), t = yield(0, d.call)(u.eventChannel, t => {
                const o = e => {
                        t(a.DownloadsActions.downloadStarted(e.item))
                    },
                    n = e => {
                        t(a.DownloadsActions.downloadUpdated(e.state, e.item))
                    },
                    l = e => {
                        t(a.DownloadsActions.downloadDone(e.state, e.item))
                    };
                return e.on("started", o), e.on("updated", n), e.on("done", l), () => {
                    e.off("started", o), e.off("updated", n), e.off("done", l)
                }
            });
            yield(0, d.fork)(s, t), yield(0, d.takeLatest)(a.DownloadsActions.requestDownload.type, f), yield(0, d.takeLatest)(a.DownloadsActions.cancelDownload.type, p), yield(0, d.takeLatest)(a.DownloadsActions.downloadDone.type, y)
        }, t._requestDownload = f, t._cancelDownload = p;
        var a = o(197),
            n = o(259),
            l = c(o(5)),
            i = c(o(9)),
            r = o(407),
            d = o(17),
            u = o(64);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function* s(e) {
            try {
                for (;;) {
                    const t = yield(0, d.take)(e);
                    yield(0, d.put)(t)
                }
            } finally {
                e.close()
            }
        }

        function* f(e) {
            const t = yield(0, d.select)(n.getDownloadState, e.payload.downloadUrl);
            t && !t.finalized || (yield(0, d.call)(i.default.downloads.downloadUrl, e.payload.downloadUrl))
        }

        function* p(e) {
            yield(0, d.call)(i.default.downloads.cancelDownload, e.payload.downloadUrl)
        }

        function* y(e) {
            if ("completed" === e.payload.state) {
                const t = e.payload.item.savePath;
                yield(0, d.call)(r.showToast, {
                    content: l.default._("Download Complete", null, {
                        hk: "3MCdnm"
                    }).toString(),
                    type: "success",
                    onClick: () => {
                        i.default.downloads.revealInFinder(t)
                    }
                })
            }
        }
    },
    518: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SystemTraySaga = function*() {
            yield(0, d.takeLeading)(r.AuthenticationActions.loginSucceeded.type, c), yield(0, d.takeLeading)(r.AuthenticationActions.finishLogout.type, s), (yield(0, d.select)(r.isUserLoggedIn)) && (yield(0, d.call)(c));
            if (!(yield(0, d.call)(i.default.platform.isWindowsPlatform))) return;
            const {
                hasShownWindowsSystemTrayNotification: e
            } = yield(0, d.call)(i.default.checkpoints.getCheckpointState);
            if (e) return;
            const t = yield(0, d.call)(f);
            yield(0, d.fork)(p, t)
        }, t._listenWindowsNotificationActivatedChannel = p;
        var a, n = o(28),
            l = o(8),
            i = (a = o(9)) && a.__esModule ? a : {
                default: a
            },
            r = o(21),
            d = o(17),
            u = o(64);

        function* c() {
            yield(0, d.call)(i.default.systemTray.init)
        }

        function* s() {
            yield(0, d.call)(i.default.systemTray.destroy)
        }

        function* f() {
            return yield(0, d.call)(u.eventChannel, e => {
                const t = i.default.systemTray.listenForWindowSystemTrayNotificationEvents(() => e(!0));
                return () => {
                    t()
                }
            })
        }

        function* p(e) {
            try {
                for (;;) {
                    yield(0, d.take)(e), yield(0, d.call)(i.default.window.show), yield(0, d.put)(n.AppContextActions.openOrFocusPortalWindow({
                        portalKey: l.PortalKey.Settings,
                        startingPane: "general"
                    }));
                    break
                }
            } finally {
                e.close()
            }
        }
    },
    522: function(e, t, o) {
        "use strict";
        t.__esModule = !0, t.sagaEquals = function(e, t) {
            if ("function" == typeof e && "function" == typeof t) return e === t;
            if (!e || !t) return e === t;
            if ("function" == typeof e) return (a = e) === (o = t).saga && !o.argument;
            if ("function" == typeof t) {
                var o = t;
                return (a = e).saga === o && !a.argument
            }
            var a;
            return o = t, (a = e).saga === o.saga && a.argument === o.argument
        }
    },
    619: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            const t = (0, a.useRef)(e),
                [o, n] = (0, a.useState)(e);
            return (0, a.useLayoutEffect)(() => {
                const o = document.body;
                if (o) {
                    e !== t.current && e && (t.current = e, o.addEventListener("transitionend", () => {
                        n(!0), setTimeout(() => {
                            document.body && (document.body.style.opacity = "1")
                        }, 300)
                    }), o.style.opacity = "0")
                }
            }, [e]), o
        };
        var a = o(0)
    },
    902: function(e, t, o) {
        o(106), e.exports = o(903)
    },
    903: function(e, t, o) {
        "use strict";
        o(904);
        var a = o(24),
            n = v(o(9)),
            l = o(21),
            i = v(o(108)),
            r = v(o(380)),
            d = v(o(270)),
            u = v(o(122)),
            c = v(o(13)),
            s = v(o(905)),
            f = o(101),
            p = v(o(1434)),
            y = v(o(29)),
            g = o(11),
            m = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = h();
                if (t && t.has(e)) return t.get(e);
                var o = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, n) : null;
                        l && (l.get || l.set) ? Object.defineProperty(o, n, l) : o[n] = e[n]
                    } o.default = e, t && t.set(e, o);
                return o
            }(o(0)),
            b = v(o(126));

        function h() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return h = function() {
                return e
            }, e
        }

        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function w(e) {
            const t = (0, m.useCallback)((e, t, o, l) => {
                n.default.metrics.trackStrictEvent((0, a.UserInteractionEvent)({
                    event: o,
                    target: t,
                    surface: e,
                    context: l
                }))
            }, []);
            return (m.default.createElement(d.default, null, m.default.createElement(u.default, {
                onEvent: t
            }, m.default.createElement(c.default, {
                name: "messenger"
            }, m.default.createElement(g.Provider, {
                store: e.store
            }, m.default.createElement(b.default, {
                pageTitle: "messenger",
                storeIsAvailable: !0
            }, m.default.createElement(r.default, null, m.default.createElement(s.default, null))))))))
        }
        const k = document.getElementById("root");
        let _, M = document.getElementById("splash");
        (0, i.default)(() => {
            if (_ = (0, p.default)(), (0, f.initializeMessengerMenuService)(_), k) {
                const e = new Promise(e => y.default.render(m.default.createElement(w, {
                        store: _
                    }), k, e)),
                    t = new Promise(e => setTimeout(e, 500));
                !async function() {
                    await Promise.all([t, e]), M && (M.style.animationPlayState = "running", M.addEventListener("animationend", () => {
                        window.requestIdleCallback(() => {
                            M && (M.remove(), M = null)
                        })
                    }))
                }(), window.addEventListener("beforeunload", () => {
                    y.default.unmountComponentAtNode(k), _.dispose()
                })
            }
            n.default.ipcRenderer.on("LOGOUT", () => {
                _.dispatch(l.AuthenticationActions.startLogout())
            })
        })
    },
    904: function(e, t, o) {
        e.exports = o.p + "assets/assets/splash.workchat.png"
    },
    905: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = o(8),
            n = b(o(5)),
            l = b(o(9)),
            i = o(84),
            r = b(o(118)),
            d = b(o(403)),
            u = b(o(906)),
            c = b(o(909)),
            s = o(28),
            f = b(o(911)),
            p = o(11),
            y = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = m();
                if (t && t.has(e)) return t.get(e);
                var o = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, n) : null;
                        l && (l.get || l.set) ? Object.defineProperty(o, n, l) : o[n] = e[n]
                    } o.default = e, t && t.set(e, o);
                return o
            }(o(0)),
            g = b(o(912));

        function m() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return m = function() {
                return e
            }, e
        }

        function b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const h = y.default.lazy(() => o.e(94).then(o.t.bind(null, 1867, 7))),
            v = y.default.lazy(() => Promise.all([o.e(7), o.e(12), o.e(28), o.e(93)]).then(o.t.bind(null, 1868, 7)));
        const w = {
            openOrFocusPortalWindow: s.AppContextActions.openOrFocusPortalWindow
        };
        var k = (0, p.connect)(e => ({
            isDeprecated: !1 === e.gatekeepers.archon_min_version
        }), w)((function({
            isDeprecated: e,
            openOrFocusPortalWindow: t
        }) {
            const {
                globalSettings: o
            } = (0, r.default)();
            (0, d.default)(), (0, i.useShortcut)("Cmd+shift+a+r+c", () => l.default.platform.openDevTools());
            const s = (0, y.useCallback)(() => t({
                portalKey: a.PortalKey.Feedback
            }), [t]);
            return (y.default.createElement(y.default.Fragment, null, e ? y.default.createElement(g.default, null) : y.default.createElement(f.default, {
                notLoggedIn: y.default.createElement(y.default.Suspense, {
                    fallback: null
                }, y.default.createElement(h, null)),
                loggedIn: y.default.createElement(y.default.Suspense, {
                    fallback: null
                }, y.default.createElement(v, null))
            }), o.enableInternalFeedback && y.default.createElement(c.default, {
                "aria-label": n.default._("File a bug", null, {
                    hk: "3p6fty"
                }).toString(),
                onClick: s,
                telemetryName: "bugNubButton"
            }), y.default.createElement(u.default, null)))
        }));
        t.default = k
    },
    906: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = o(139),
            n = o(92),
            l = o(24),
            i = o(8),
            r = v(o(5)),
            d = v(o(9)),
            u = o(72),
            c = o(35),
            s = o(6),
            f = o(42),
            p = o(168),
            y = o(21),
            g = o(36),
            m = o(11),
            b = o(0),
            h = v(o(338));

        function v(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const w = {
            openNextThread: g.InboxActions.threads.openNextThread,
            openNextUnreadThread: g.InboxActions.threads.openNextUnreadThread,
            openPrevThread: g.InboxActions.threads.openPrevThread,
            openPrevUnreadThread: g.InboxActions.threads.openPrevUnreadThread,
            showModal: f.AppContextActions.showModal,
            draftCreateNewThread: g.InboxActions.newThread.draftCreateNewThread,
            createMeetup: n.RtcActions.createMeetup,
            startLogout: p.AuthenticationActions.startLogout,
            openOrFocusPortalWindow: f.AppContextActions.openOrFocusPortalWindow,
            hideThread: g.InboxActions.threads.archiveThread
        };
        var k = (0, m.connect)((function(e) {
            var t, o;
            return {
                isUserLoggedIn: (0, y.isUserLoggedIn)(e),
                isInbox: (null === (t = e.inbox) || void 0 === t ? void 0 : t.openedThreadFolderParentKey) === i.ThreadFolderParentKey.Inbox,
                threadKey: null === (o = e.inbox) || void 0 === o ? void 0 : o.primaryThreadKey,
                isEmployee: (0, a.isGatekeeperEnabled)(e, "is_employee"),
                isWorkplaceRoomsEnabled: (0, a.isGatekeeperEnabled)(e, "worchon_rooms_enabled")
            }
        }), w)((function(e) {
            const {
                isUserLoggedIn: t,
                draftCreateNewThread: o,
                createMeetup: a,
                startLogout: n,
                openPrevThread: f,
                openNextUnreadThread: p,
                openNextThread: y,
                openPrevUnreadThread: g,
                showModal: m,
                openOrFocusPortalWindow: v,
                isInbox: w,
                threadKey: k,
                isEmployee: _,
                hideThread: M,
                isWorkplaceRoomsEnabled: S
            } = e, P = (0, s.useTheme)(), {
                windowKey: A
            } = (0, c.useWindowContext)(), [O] = (0, u.useGlobalSetting)("enableDebugMenus");
            return (0, b.useEffect)(() => {
                d.default.window.contributeMenuItems({
                    "root-after-about": [{
                        label: h.default.preferences.toString(),
                        click: () => {
                            v({
                                portalKey: i.PortalKey.Settings
                            })
                        },
                        visible: t
                    }],
                    "file-menu": [{
                        label: r.default._("File", null, {
                            hk: "14oT6l"
                        }).toString(),
                        visible: t,
                        submenu: [{
                            label: r.default._("New Chat", null, {
                                hk: "2NPsWT"
                            }).toString(),
                            click: () => o()
                        }, {
                            label: r.default._("Hide Conversation", null, {
                                hk: "35qrQC"
                            }).toString(),
                            enabled: w,
                            accelerator: P.select({
                                mac: "Cmd+Ctrl+A",
                                win: "Ctrl+Shift+A"
                            }),
                            click: () => k ? M(k) : void 0
                        }, S ? {
                            label: r.default._("Join Room", null, {
                                hk: "1mb1RS"
                            }).toString(),
                            visible: _,
                            click: () => m({
                                type: "JoinRoomFromLink"
                            }, A)
                        } : void 0, {
                            type: "separator"
                        }, {
                            label: r.default._("Log Out", null, {
                                hk: "48ebZF"
                            }).toString(),
                            click: async () => {
                                0 === (await d.default.platform.showMessageBox({
                                    type: "info",
                                    message: r.default._("Are you sure you want to log out?", null, {
                                        hk: "1Ox50y"
                                    }).toString(),
                                    noLink: !0,
                                    cancelId: 1,
                                    buttons: [r.default._("Log Out", null, {
                                        hk: "2IDb6F"
                                    }).toString(), r.default._("Cancel", null, {
                                        hk: "3xkGXq"
                                    }).toString()]
                                })).response && (d.default.metrics.trackStrictEventImmediate((0, l.ClientAuthenticationEvent)({
                                    action: "logOut",
                                    channel: "Manual"
                                })), n())
                            }
                        }, {
                            type: "separator"
                        }, {
                            label: r.default._("Close Window", null, {
                                hk: "1HpWe8"
                            }).toString(),
                            click: () => d.default.window.close()
                        }].filter(Boolean)
                    }],
                    "view-menu": [{
                        label: r.default._("Previous Chat", null, {
                            hk: "21nVUz"
                        }).toString(),
                        enabled: t,
                        click: () => f(),
                        accelerator: "mac" === P.os ? "Cmd+[" : void 0
                    }, {
                        label: r.default._("Next Chat", null, {
                            hk: "36ChYz"
                        }).toString(),
                        enabled: t,
                        click: () => y(),
                        accelerator: "mac" === P.os ? "Cmd+]" : void 0
                    }],
                    "submit-feedback": [{
                        label: r.default._("Submit Feedback", null, {
                            hk: "3xpjG0"
                        }).toString(),
                        accelerator: "mac" == P.os ? "CmdOrCtrl+B" : void 0,
                        visible: t,
                        click: () => v({
                            portalKey: i.PortalKey.Feedback
                        })
                    }],
                    "after-debug-root": [{
                        label: "Crash Renderer Process",
                        click: () => d.default.app.crash(),
                        visible: O
                    }, {
                        label: "Throw Exception in Renderer Process",
                        click: () => {
                            throw new Error("renderer process exception")
                        },
                        visible: O
                    }, {
                        label: "Send Notification",
                        click: () => {
                            d.default.notifications.local.native.post("test", {
                                title: "Test",
                                body: "Test notification",
                                groupID: "test"
                            })
                        },
                        visible: O
                    }]
                })
            }, [t, y, p, f, g, n, o, m, v, P.os, O, a, A, w, k, M, P, _, S]), null
        }));
        t.default = k
    },
    909: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            const t = (0, r.useTheme)();
            return (i.default.createElement(n.default, u({}, e, {
                css: {
                    ...e.css || {},
                    backgroundColor: t.colors.base10,
                    border: `1px solid ${t.colors.base80}`,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    borderBottom: 0,
                    cursor: "pointer",
                    position: "fixed",
                    bottom: 0,
                    left: 12,
                    width: 32,
                    height: 32,
                    zIndex: a.default.BugNub
                }
            }), i.default.createElement(l.default, {
                size: 20,
                color: t.colors.base80
            })))
        };
        var a = d(o(141)),
            n = d(o(75)),
            l = d(o(910)),
            i = d(o(0)),
            r = o(6);

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function u() {
            return (u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = arguments[t];
                    for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a])
                }
                return e
            }).apply(this, arguments)
        }
    },
    910: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return n.default.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 36 36",
                height: e.height ? e.height : e.size,
                width: e.width ? e.width : e.size,
                color: e.color
            }, n.default.createElement("path", {
                fill: "currentColor",
                d: "M22.5 11c0-2.21-1.5-4-4.5-4s-4.5 1.79-4.5 4a1 1 0 001 1h7a1 1 0 001-1zM16 14a1 1 0 011 1v13.052c0 .603-.531 1.073-1.112.912a8.016 8.016 0 01-4.449-3.188c-.109-.159-.296-.254-.48-.202A2 2 0 009.5 27.5a1 1 0 11-2 0 4 4 0 012.41-3.671.585.585 0 00.342-.67 8.196 8.196 0 01-.147-.713.523.523 0 00-.51-.446H7a1 1 0 110-2h2.5a.5.5 0 00.5-.5v-.954a.542.542 0 00-.307-.476A4 4 0 017.5 14.5a1 1 0 112 0c0 .514.194.983.513 1.337.197.22.532.125.7-.117A3.995 3.995 0 0114 14h2zM20.112 28.964c-.58.16-1.112-.31-1.112-.912V15a1 1 0 011-1h2c1.362 0 2.564.68 3.287 1.72.168.242.503.336.7.117.319-.354.513-.823.513-1.337a1 1 0 112 0 4 4 0 01-2.193 3.57.542.542 0 00-.307.476v.954a.5.5 0 00.5.5H29a1 1 0 110 2h-2.596a.523.523 0 00-.51.446 8.196 8.196 0 01-.146.712.585.585 0 00.343.67A4 4 0 0128.5 27.5a1 1 0 11-2 0 2 2 0 00-1.458-1.926c-.185-.052-.372.043-.481.202a8.016 8.016 0 01-4.45 3.188z"
            }))
        };
        var a, n = (a = o(0)) && a.__esModule ? a : {
            default: a
        }
    },
    911: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a, n = (a = o(619)) && a.__esModule ? a : {
                default: a
            },
            l = o(21);
        var i = (0, o(11).connect)((function(e, t) {
            return {
                isLoggedIn: (0, l.isUserLoggedIn)(e)
            }
        }))((function(e) {
            return (0, n.default)(e.isLoggedIn) && e.isLoggedIn ? e.loggedIn : e.notLoggedIn
        }));
        t.default = i
    },
    912: function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return (0, u.useEffect)(() => {
                r.default.metrics.trackStrictEvent((0, n.UserInteractionEvent)({
                    event: "impression",
                    target: "deprecatedHero",
                    surface: "messenger"
                }))
            }, []), u.default.createElement(a.default, {
                title: i.default._("Update {app name}", [i.default._param("app name", l.displayName)], {
                    hk: "3EqlS1"
                }),
                subtitle1: i.default._("Your {app name} app is out of date. To keep using it, update now.", [i.default._param("app name", l.displayName)], {
                    hk: "45pEIs"
                }),
                icon: c.default,
                cta: u.default.createElement(y, {
                    "aria-label": i.default._("Install Update", null, {
                        hk: "4CAAgp"
                    }).toString(),
                    telemetryName: "deprecatedUpdateButton",
                    caption: i.default._("Install Update", null, {
                        hk: "4CAAgp"
                    }),
                    onClick: () => {
                        const e = r.default.platform.getAppSource();
                        let t;
                        t = "windows_app_store" === e || "windows_app_store_beta" === e ? "ms-windows-store://downloadsandupdates" : "mac_app_store" === e ? "macappstore://showUpdatesPage" : "https://messenger.com/desktop", r.default.platform.openExternalURL(t)
                    }
                })
            })
        };
        var a = p(o(255)),
            n = o(24),
            l = o(83),
            i = p(o(5)),
            r = p(o(9)),
            d = p(o(1)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = f();
                if (t && t.has(e)) return t.get(e);
                var o = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var l = a ? Object.getOwnPropertyDescriptor(e, n) : null;
                        l && (l.get || l.set) ? Object.defineProperty(o, n, l) : o[n] = e[n]
                    } o.default = e, t && t.set(e, o);
                return o
            }(o(0)),
            c = p(o(119)),
            s = p(o(16));

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
        const y = (0, d.default)(s.default)({
            textTransform: "uppercase"
        })
    }
});
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/messenger.bundle.js.map