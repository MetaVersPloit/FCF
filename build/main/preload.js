module.exports = function(e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function(t) {
                return e[t]
            }.bind(null, r));
        return a
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 50)
}([function(e, t) {
    e.exports = require("electron")
}, function(e, t) {
    e.exports = require("path")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = n(67),
        r = n(0);
    const {
        getRemoteModules: s
    } = r.remote.require("./main");

    function o(e, t) {
        return new Proxy(e, {
            get: function(e, n, r) {
                if (t.hasOwnProperty(n)) {
                    const e = t[n];
                    return (...t) => {
                        a.ipcRenderer.send("fnf:call_function", {
                            functionIdentifier: e,
                            args: t
                        })
                    }
                }
                return e[n]
            }
        })
    }
    var i = function(e) {
        const t = a.ipcRenderer.sendSync("fnf:get_fnf_functions"),
            n = {};
        for (const a of Object.keys(t)) {
            const r = t[a],
                s = o(e[a], r);
            n[a] = s
        }
        return function(e, t) {
            return new Proxy(e, {
                get: (n, a, r) => t.hasOwnProperty(a) ? t[a] : e[a]
            })
        }(e, n)
    }(s());
    t.default = i
}, function(e, t) {
    e.exports = require("fs")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createIpcError = o, t.parseIpcError = i, t.createAsyncChannel = function(e) {
        return async (...t) => {
            const n = await s.ipcRenderer.invoke(e, ...t),
                a = i(n, e);
            if (a) throw a;
            return n
        }
    }, t.createAsyncChannelHandler = function(e) {
        return {
            registerHandler: t => {
                s.ipcMain.handle(e, (e, ...n) => {
                    try {
                        const e = t(...n);
                        return e && e.then && e.catch ? e.then(e => e, e => o(e)) : e
                    } catch (e) {
                        return o(e)
                    }
                })
            }
        }
    }, t.createChannel = function(e) {
        return (...t) => {
            const n = s.ipcRenderer.sendSync(e, ...t),
                a = i(n, e);
            if (a) throw a;
            return n
        }
    }, t.createChannelHandler = function(e) {
        return {
            registerHandler: t => {
                s.ipcMain.on(e, (e, ...n) => {
                    try {
                        e.returnValue = t(...n)
                    } catch (t) {
                        e.returnValue = o(t)
                    }
                })
            }
        }
    }, t.createFireAndForgetChannel = function(e) {
        return (...t) => {
            s.ipcRenderer.send(e, ...t)
        }
    }, t.createFireAndForgetChannelHandler = function(e) {
        return {
            registerHandler: t => {
                s.ipcMain.on(e, (e, ...n) => {
                    try {
                        t(...n)
                    } catch (e) {}
                })
            }
        }
    }, t.createRemoteEventEmitter = function(e) {
        const t = n(0).BrowserWindow;
        return {
            emit: function(n, ...a) {
                t.getAllWindows().forEach(t => t.webContents.send(e, {
                    eventType: n,
                    args: a
                }))
            }
        }
    }, t.createRemoteEventListener = function(e) {
        const t = {};
        return s.ipcRenderer.on(e, (e, ...n) => {
            if (1 !== n.length) return;
            const a = n[0],
                r = a.eventType;
            t[r] && t[r].forEach(e => e(...a.args))
        }), {
            on: function(e, n) {
                t[e] || (t[e] = []);
                t[e].push(n)
            },
            off: function(e, n) {
                t[e] && (t[e] = t[e].filter(e => e !== n))
            }
        }
    }, t.registerIpcChannels = function(e, t) {
        const n = Object.getOwnPropertyNames(t).filter(e => void 0 !== t[e] && void 0 !== t[e].registerHandler && "function" == typeof t[e].registerHandler).sort();
        for (const a of n) t[a].registerHandler((...t) => e[a](...t))
    };
    var a, r = (a = n(54)) && a.__esModule ? a : {
            default: a
        },
        s = n(0);

    function o(e) {
        if ("string" == typeof e) return {
            __ipcError: JSON.stringify({
                message: e
            })
        };
        const t = {};
        return Object.getOwnPropertyNames(e).forEach(n => t[n] = e[n], e), {
            __ipcError: JSON.stringify(t)
        }
    }

    function i(e, t) {
        const n = e && "object" == typeof e && e.__ipcError ? JSON.parse(e.__ipcError) : null;
        return n ? new r.default(n, t) : null
    }
}, function(e, t, n) {
    "use strict";
    let a, r;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clientUnixTimeLabel = t.heartbeatSequenceLabel = t.secSinceBootLabel = t.secSinceLastLabel = t.eventSequenceLabel = t.bootSequenceLabel = t.appSequenceLabel = t.AslStat = t.AslState = void 0, t.AslState = a,
        function(e) {
            e[e.Invalid = 0] = "Invalid", e[e.TestState = 1] = "TestState", e[e.BuildNumber = 2] = "BuildNumber", e[e.AslEventSequence = 3] = "AslEventSequence", e[e.AslEventLastEpoch = 4] = "AslEventLastEpoch", e[e.LeftOverDataUploaded = 5] = "LeftOverDataUploaded", e[e.PrevBuildDataUploaded = 6] = "PrevBuildDataUploaded", e[e.PigeonEventsOutstanding = 7] = "PigeonEventsOutstanding", e[e.HeartbeatEventsOutstanding = 8] = "HeartbeatEventsOutstanding", e[e.AppStartEventsOutstanding = 9] = "AppStartEventsOutstanding", e[e.PerformanceEventsOutstanding = 10] = "PerformanceEventsOutstanding", e[e.InteractionEventsOutstanding = 11] = "InteractionEventsOutstanding", e[e.MainProcessOutstanding = 12] = "MainProcessOutstanding", e[e.RsysRtcOutstanding = 13] = "RsysRtcOutstanding", e[e.ZenonRtcOutstanding = 14] = "ZenonRtcOutstanding", e[e.CrashReporterLastReport = 15] = "CrashReporterLastReport", e[e.AppInitializing = 16] = "AppInitializing", e[e.AppInteractive = 17] = "AppInteractive", e[e.AppQuitting = 18] = "AppQuitting", e[e.AppInFocus = 19] = "AppInFocus", e[e.RsysInCallContacting = 20] = "RsysInCallContacting", e[e.RsysInCallRingingIncoming = 21] = "RsysInCallRingingIncoming", e[e.RsysInCallRingingOutgoing = 22] = "RsysInCallRingingOutgoing", e[e.RsysInCallConnecting = 23] = "RsysInCallConnecting", e[e.RsysInCallPendingApproval = 24] = "RsysInCallPendingApproval", e[e.RsysInCallConnected = 25] = "RsysInCallConnected", e[e.AppVisible = 26] = "AppVisible", e[e.AppSequence = 27] = "AppSequence", e[e.CurrentBootId = 28] = "CurrentBootId", e[e.LastBootId = 29] = "LastBootId", e[e.LastSnapshotEpoch = 30] = "LastSnapshotEpoch", e[e.SecSinceBoot = 31] = "SecSinceBoot", e[e.CrashReporterLastUpload = 32] = "CrashReporterLastUpload", e[e.CrashReporterChecks = 33] = "CrashReporterChecks", e[e.StateCount = 34] = "StateCount", e[e.StateMax = 128] = "StateMax"
        }(a || (t.AslState = a = {})), t.AslStat = r,
        function(e) {
            e[e.Invalid = 0] = "Invalid", e[e.TestStat = 1] = "TestStat", e[e.AslOpened = 2] = "AslOpened", e[e.AslEventErrors = 3] = "AslEventErrors", e[e.AslEventContextErrors = 4] = "AslEventContextErrors", e[e.AslPrevBuildFileErrors = 5] = "AslPrevBuildFileErrors", e[e.AslPrevBuildDataErrors = 6] = "AslPrevBuildDataErrors", e[e.AslPigeonHandlingErrors = 7] = "AslPigeonHandlingErrors", e[e.PigeonEventsQueued = 8] = "PigeonEventsQueued", e[e.PigeonEventsSent = 9] = "PigeonEventsSent", e[e.PigeonEventsDropped = 10] = "PigeonEventsDropped", e[e.HeartbeatEventsSent = 11] = "HeartbeatEventsSent", e[e.HeartbeatEventsDropped = 12] = "HeartbeatEventsDropped", e[e.AppStartEventsSent = 13] = "AppStartEventsSent", e[e.AppStartEventsDropped = 14] = "AppStartEventsDropped", e[e.PerformanceEventsSent = 15] = "PerformanceEventsSent", e[e.PerformanceEventsDropped = 16] = "PerformanceEventsDropped", e[e.InteractionEventsSent = 17] = "InteractionEventsSent", e[e.InteractionEventsDropped = 18] = "InteractionEventsDropped", e[e.MainProcessStart = 19] = "MainProcessStart", e[e.MainProcessQuit = 20] = "MainProcessQuit", e[e.MainProcessQuitOnShutdown = 21] = "MainProcessQuitOnShutdown", e[e.MainProcessAbnormalDeath = 22] = "MainProcessAbnormalDeath", e[e.MainProcessAbnormalDeathInRsysRtc = 23] = "MainProcessAbnormalDeathInRsysRtc", e[e.MainProcessAbnormalDeathInZenonRtc = 24] = "MainProcessAbnormalDeathInZenonRtc", e[e.RenderProcessStart = 25] = "RenderProcessStart", e[e.RenderProcessAbnormalDeath = 26] = "RenderProcessAbnormalDeath", e[e.GpuProcessAbnormalDeath = 27] = "GpuProcessAbnormalDeath", e[e.RsysRtcEntered = 28] = "RsysRtcEntered", e[e.RsysRtcExit = 29] = "RsysRtcExit", e[e.RsysRtcLogCrash = 30] = "RsysRtcLogCrash", e[e.RsysRtcOutOfSyncCallEnded = 31] = "RsysRtcOutOfSyncCallEnded", e[e.ZenonRtcEntered = 32] = "ZenonRtcEntered", e[e.ZenonRtcExit = 33] = "ZenonRtcExit", e[e.ZenonRtcCrashed = 34] = "ZenonRtcCrashed", e[e.ZenonRtcLogCrash = 35] = "ZenonRtcLogCrash", e[e.AbortSignalReceived = 36] = "AbortSignalReceived", e[e.AbortSignalReceivedNoUEFFound = 37] = "AbortSignalReceivedNoUEFFound", e[e.SingleInstanceLockFailed = 38] = "SingleInstanceLockFailed", e[e.CrashReporterUploads = 39] = "CrashReporterUploads", e[e.BreakpadUploads = 40] = "BreakpadUploads", e[e.BreakpadUploadAttempts = 41] = "BreakpadUploadAttempts", e[e.ElectronJSCrashes = 42] = "ElectronJSCrashes", e[e.ElectronJSCrashesMainUncaught = 43] = "ElectronJSCrashesMainUncaught", e[e.ElectronJSCrashUploads = 44] = "ElectronJSCrashUploads", e[e.ElectronJSCrashUploadAttempts = 45] = "ElectronJSCrashUploadAttempts", e[e.ElectronJSCrashUploadBadResponse = 46] = "ElectronJSCrashUploadBadResponse", e[e.ElectronJSCrashUploadError = 47] = "ElectronJSCrashUploadError", e[e.RNJSCrashes = 48] = "RNJSCrashes", e[e.RNJSCrashesSaved = 49] = "RNJSCrashesSaved", e[e.RNJSCrashUploads = 50] = "RNJSCrashUploads", e[e.RNJSCrashUploadAttempts = 51] = "RNJSCrashUploadAttempts", e[e.RNJSCrashUploadBadResponse = 52] = "RNJSCrashUploadBadResponse", e[e.RNJSCrashUploadError = 53] = "RNJSCrashUploadError", e[e.RNJSSoftErrors = 54] = "RNJSSoftErrors", e[e.RNJSSoftErrorsSaved = 55] = "RNJSSoftErrorsSaved", e[e.RNJSSoftErrorUploads = 56] = "RNJSSoftErrorUploads", e[e.RNJSSoftErrorUploadAttempts = 57] = "RNJSSoftErrorUploadAttempts", e[e.RNJSSoftErrorUploadBadResponse = 58] = "RNJSSoftErrorUploadBadResponse", e[e.RNJSSoftErrorUploadError = 59] = "RNJSSoftErrorUploadError", e[e.SentMessages = 60] = "SentMessages", e[e.MoreMessagesRequested = 61] = "MoreMessagesRequested", e[e.MessageThreadSwitched = 62] = "MessageThreadSwitched", e[e.AppFocusCount = 63] = "AppFocusCount", e[e.AppFocusTime = 64] = "AppFocusTime", e[e.AppFocusSessions = 65] = "AppFocusSessions", e[e.RsysRtcTime = 66] = "RsysRtcTime", e[e.ZenonRtcTime = 67] = "ZenonRtcTime", e[e.RsysRtcFailed = 68] = "RsysRtcFailed", e[e.ZenonRtcFailed = 69] = "ZenonRtcFailed", e[e.AppStateChanges = 70] = "AppStateChanges", e[e.AppInitializingTime = 71] = "AppInitializingTime", e[e.AppInteractiveTime = 72] = "AppInteractiveTime", e[e.AppQuittingTime = 73] = "AppQuittingTime", e[e.AppInitializingCount = 74] = "AppInitializingCount", e[e.AppInteractiveCount = 75] = "AppInteractiveCount", e[e.AppQuittingCount = 76] = "AppQuittingCount", e[e.AppDeathLaunching = 77] = "AppDeathLaunching", e[e.AppDeathInitializing = 78] = "AppDeathInitializing", e[e.AppDeathInteractive = 79] = "AppDeathInteractive", e[e.AppDeathQuitting = 80] = "AppDeathQuitting", e[e.AppDeathInFocus = 81] = "AppDeathInFocus", e[e.RsysInCallContactingTime = 82] = "RsysInCallContactingTime", e[e.RsysInCallRingingIncomingTime = 83] = "RsysInCallRingingIncomingTime", e[e.RsysInCallRingingOutgoingTime = 84] = "RsysInCallRingingOutgoingTime", e[e.RsysInCallConnectingTime = 85] = "RsysInCallConnectingTime", e[e.RsysInCallPendingApprovalTime = 86] = "RsysInCallPendingApprovalTime", e[e.RsysInCallConnectedTime = 87] = "RsysInCallConnectedTime", e[e.RsysInCallStateChanges = 88] = "RsysInCallStateChanges", e[e.RsysInCallContactingCount = 89] = "RsysInCallContactingCount", e[e.RsysInCallRingingIncomingCount = 90] = "RsysInCallRingingIncomingCount", e[e.RsysInCallRingingOutgoingCount = 91] = "RsysInCallRingingOutgoingCount", e[e.RsysInCallConnectingCount = 92] = "RsysInCallConnectingCount", e[e.RsysInCallPendingApprovalCount = 93] = "RsysInCallPendingApprovalCount", e[e.RsysInCallConnectedCount = 94] = "RsysInCallConnectedCount", e[e.AppDeathInRsysContacting = 95] = "AppDeathInRsysContacting", e[e.AppDeathInRsysRingingIncoming = 96] = "AppDeathInRsysRingingIncoming", e[e.AppDeathInRsysRingingOutgoing = 97] = "AppDeathInRsysRingingOutgoing", e[e.AppDeathInRsysConnecting = 98] = "AppDeathInRsysConnecting", e[e.AppDeathInRsysPendingApproval = 99] = "AppDeathInRsysPendingApproval", e[e.AppDeathInRsysConnected = 100] = "AppDeathInRsysConnected", e[e.DialogIncomingCallCreated = 101] = "DialogIncomingCallCreated", e[e.DialogIncomingRoomsCallCreated = 102] = "DialogIncomingRoomsCallCreated", e[e.DialogMissedCallCreated = 103] = "DialogMissedCallCreated", e[e.DialogAcceptCall = 104] = "DialogAcceptCall", e[e.DialogRejectCall = 105] = "DialogRejectCall", e[e.DialogReturnCall = 106] = "DialogReturnCall", e[e.DialogIgnoreMissedCall = 107] = "DialogIgnoreMissedCall", e[e.DialogDismiss = 108] = "DialogDismiss", e[e.ShowRNCallWindowForAccept = 109] = "ShowRNCallWindowForAccept", e[e.ShowRNCallWindowForCallOrJoin = 110] = "ShowRNCallWindowForCallOrJoin", e[e.AppQuitOnAllWindowsClosed = 111] = "AppQuitOnAllWindowsClosed", e[e.AppQuitBeforeChatReady = 112] = "AppQuitBeforeChatReady", e[e.WindowCloseFromTitleBar = 113] = "WindowCloseFromTitleBar", e[e.WindowCloseFromBridge = 114] = "WindowCloseFromBridge", e[e.WindowClosing = 115] = "WindowClosing", e[e.WindowHidingInsteadOfClose = 116] = "WindowHidingInsteadOfClose", e[e.WindowContentsCrashed = 117] = "WindowContentsCrashed", e[e.WindowErrorContentsCrashed = 118] = "WindowErrorContentsCrashed", e[e.InboxShimmerRendered = 119] = "InboxShimmerRendered", e[e.InboxLoadThreads = 120] = "InboxLoadThreads", e[e.InboxThreadsLoaded = 121] = "InboxThreadsLoaded", e[e.InboxLoadMessages = 122] = "InboxLoadMessages", e[e.InboxMessagesLoaded = 123] = "InboxMessagesLoaded", e[e.InboxInitialSyncComplete = 124] = "InboxInitialSyncComplete", e[e.InboxStaleMessagesRendered = 125] = "InboxStaleMessagesRendered", e[e.InboxMessagesRendered = 126] = "InboxMessagesRendered", e[e.InboxCreateThreadRendered = 127] = "InboxCreateThreadRendered", e[e.MainJSUncaughtException = 128] = "MainJSUncaughtException", e[e.MainJSUnhandledRejection = 129] = "MainJSUnhandledRejection", e[e.RendererWindowOnError = 130] = "RendererWindowOnError", e[e.RendererWindowOnUnhandledRejection = 131] = "RendererWindowOnUnhandledRejection", e[e.ErrorBoundaryDidCatch = 132] = "ErrorBoundaryDidCatch", e[e.AppLaunchOnStartup = 133] = "AppLaunchOnStartup", e[e.AslTimerOutOfPeriodRange = 134] = "AslTimerOutOfPeriodRange", e[e.AslTimeClippedToPeriodRange = 135] = "AslTimeClippedToPeriodRange", e[e.AppInteractiveTimeWallClock = 136] = "AppInteractiveTimeWallClock", e[e.AppFocusTimeMs = 137] = "AppFocusTimeMs", e[e.AppFocusTimeWallClock = 138] = "AppFocusTimeWallClock", e[e.ZenonRtcTimeMs = 139] = "ZenonRtcTimeMs", e[e.RsysRtcTimeMs = 140] = "RsysRtcTimeMs", e[e.AppVisibleTime = 141] = "AppVisibleTime", e[e.AppVisibleTimeWallClock = 142] = "AppVisibleTimeWallClock", e[e.AppVisibleCount = 143] = "AppVisibleCount", e[e.AppDeathVisible = 144] = "AppDeathVisible", e[e.RNWindowThreadCreated = 145] = "RNWindowThreadCreated", e[e.RNWindowThreadInitialized = 146] = "RNWindowThreadInitialized", e[e.RNWindowThreadQuit = 147] = "RNWindowThreadQuit", e[e.RNWindowCreated = 148] = "RNWindowCreated", e[e.RNWindowInitialized = 149] = "RNWindowInitialized", e[e.RNWindowDestroyed = 150] = "RNWindowDestroyed", e[e.RNSoundPlayStart = 151] = "RNSoundPlayStart", e[e.RNSoundPlayEnd = 152] = "RNSoundPlayEnd", e[e.RNSoundSetOutputDevice = 153] = "RNSoundSetOutputDevice", e[e.RNSoundsMoveToNewDevice = 154] = "RNSoundsMoveToNewDevice", e[e.RNRTCVideoRegistered = 155] = "RNRTCVideoRegistered", e[e.RNRTCVideoFrames = 156] = "RNRTCVideoFrames", e[e.RNRTCInitializeAudio = 157] = "RNRTCInitializeAudio", e[e.RNRTCSetAudioInput = 158] = "RNRTCSetAudioInput", e[e.RNRTCSetPreferredAudioInput = 159] = "RNRTCSetPreferredAudioInput", e[e.RNRTCSetAudioOutput = 160] = "RNRTCSetAudioOutput", e[e.RNRTCSetPreferredAudioOutput = 161] = "RNRTCSetPreferredAudioOutput", e[e.RNRTCInitializeCamera = 162] = "RNRTCInitializeCamera", e[e.RNRTCSetCamera = 163] = "RNRTCSetCamera", e[e.RNRTCSetPreferredCamera = 164] = "RNRTCSetPreferredCamera", e[e.RNRTCSubmitStarRating1 = 165] = "RNRTCSubmitStarRating1", e[e.RNRTCSubmitStarRating2 = 166] = "RNRTCSubmitStarRating2", e[e.RNRTCSubmitStarRating3 = 167] = "RNRTCSubmitStarRating3", e[e.RNRTCSubmitStarRating4 = 168] = "RNRTCSubmitStarRating4", e[e.RNRTCSubmitStarRating5 = 169] = "RNRTCSubmitStarRating5", e[e.RNRTCSubmitStarRatingOther = 170] = "RNRTCSubmitStarRatingOther", e[e.RNRTCEffectEnabled = 171] = "RNRTCEffectEnabled", e[e.RNRTCScreenShareEnabled = 172] = "RNRTCScreenShareEnabled", e[e.RNRTCRoomScreenShareEnabled = 173] = "RNRTCRoomScreenShareEnabled", e[e.RNRTCSceneCompositionEnabled = 174] = "RNRTCSceneCompositionEnabled", e[e.RNRTCSelfieView = 175] = "RNRTCSelfieView", e[e.RNRTCScreenShareView = 176] = "RNRTCScreenShareView", e[e.RNRTCSettingsView = 177] = "RNRTCSettingsView", e[e.RNRTCEffectsPickerView = 178] = "RNRTCEffectsPickerView", e[e.RNRTCPresenterLayoutView = 179] = "RNRTCPresenterLayoutView", e[e.FeedbackFormShown = 180] = "FeedbackFormShown", e[e.FeedbackFormReporting = 181] = "FeedbackFormReporting", e[e.FeedbackFormUploadSuccess = 182] = "FeedbackFormUploadSuccess", e[e.FeedbackFormUploadError = 183] = "FeedbackFormUploadError", e[e.WindowRequestCloseFromTitleBar = 184] = "WindowRequestCloseFromTitleBar", e[e.DialogIncomingCallDismissed = 185] = "DialogIncomingCallDismissed", e[e.DialogIncomingRoomCallDismissed = 186] = "DialogIncomingRoomCallDismissed", e[e.DialogRejectCallByClosing = 187] = "DialogRejectCallByClosing", e[e.DialogMissedCallDismissed = 188] = "DialogMissedCallDismissed", e[e.DialogIgnoreMissedCallByClosing = 189] = "DialogIgnoreMissedCallByClosing", e[e.RNJSStart = 190] = "RNJSStart", e[e.RNJSStartWindow = 191] = "RNJSStartWindow", e[e.RNRTCCallEndedView = 192] = "RNRTCCallEndedView", e[e.RNRTCRoomFailedView = 193] = "RNRTCRoomFailedView", e[e.RNRTCSpeakerView = 194] = "RNRTCSpeakerView", e[e.RNRTCGridView = 195] = "RNRTCGridView", e[e.RNRTCMosaicGridView = 196] = "RNRTCMosaicGridView", e[e.RNRTCCowatchView = 197] = "RNRTCCowatchView", e[e.RNRTCCallIntermediateView = 198] = "RNRTCCallIntermediateView", e[e.AppDeathDetectedAfterSystemReboot = 199] = "AppDeathDetectedAfterSystemReboot", e[e.SecsToRelaunch = 200] = "SecsToRelaunch", e[e.SecsToRelaunchAfterAppDeath = 201] = "SecsToRelaunchAfterAppDeath", e[e.CrashReporterReports = 202] = "CrashReporterReports", e[e.CrashReporterUploadAttempts = 203] = "CrashReporterUploadAttempts", e[e.CrashReporterInitialReports = 204] = "CrashReporterInitialReports", e[e.MainProcessQuitForUpdate = 205] = "MainProcessQuitForUpdate", e[e.AnalyticsEmptyBatch = 206] = "AnalyticsEmptyBatch", e[e.AnalyticsBadBatch = 207] = "AnalyticsBadBatch", e[e.AnalyticsFailedUploadAttempt = 208] = "AnalyticsFailedUploadAttempt", e[e.AppRelaunchQueuedForLogout = 209] = "AppRelaunchQueuedForLogout", e[e.AppRelaunchQueuedForError = 210] = "AppRelaunchQueuedForError", e[e.AppRelaunchQueued = 211] = "AppRelaunchQueued", e[e.AppRelaunching = 212] = "AppRelaunching", e[e.AppRelaunched = 213] = "AppRelaunched", e[e.StatCount = 214] = "StatCount", e[e.StatMax = 320] = "StatMax"
        }(r || (t.AslStat = r = {}));
    t.appSequenceLabel = "AppSequence";
    t.bootSequenceLabel = "BootSequence";
    t.eventSequenceLabel = "EventSequence";
    t.secSinceLastLabel = "SecSinceLast";
    t.secSinceBootLabel = "SecSinceBoot";
    t.heartbeatSequenceLabel = "HeartbeatSequence";
    t.clientUnixTimeLabel = "ClientUnixTime"
}, function(e, t) {
    e.exports = require("util")
}, function(e, t, n) {
    "use strict";
    var a;
    try {
        a = n(0)
    } catch (e) {
        a = null
    }

    function r() {
        return s("app")
    }

    function s(e) {
        return a ? a[e] ? a[e] : a.remote ? a.remote[e] : null : null
    }

    function o() {
        return "browser" === process.type && a && a.ipcMain ? a.ipcMain : "renderer" === process.type && a && a.ipcRenderer ? a.ipcRenderer : null
    }
    e.exports = {
        getName: function() {
            var e = r();
            return e ? "name" in e ? e.name : e.getName() : null
        },
        getPath: function(e) {
            var t = r();
            if (!t) return null;
            try {
                return t.getPath(e)
            } catch (e) {
                return null
            }
        },
        getVersion: function() {
            var e = r();
            return e ? "version" in e ? e.version : e.getVersion() : null
        },
        isDev: function() {
            var e = r();
            return !!e && (!e.isPackaged || "1" === process.env.ELECTRON_IS_DEV)
        },
        isElectron: function() {
            return "browser" === process.type || "renderer" === process.type
        },
        isIpcChannelListened: function(e) {
            var t = o();
            return !!t && t.listenerCount(e) > 0
        },
        loadRemoteModule: function(e) {
            if ("browser" === process.type) r().on("web-contents-created", (function(t, n) {
                n.executeJavaScript('try {require("' + e + '")} catch(e){}')
            }));
            else if ("renderer" === process.type) try {
                (function() {
                    if (a && a.remote) return a.remote;
                    return null
                })().require(e)
            } catch (e) {}
        },
        onIpc: function(e, t) {
            var n = o();
            n && n.on(e, t)
        },
        sendIpc: function(e, t) {
            "browser" === process.type ? function(e, t) {
                if (!a || !a.BrowserWindow) return;
                a.BrowserWindow.getAllWindows().forEach((function(n) {
                    n.webContents && n.webContents.send(e, t)
                }))
            }(e, t) : "renderer" === process.type && function(e, t) {
                var n = o();
                n && n.send(e, t)
            }(e, t)
        },
        showErrorBox: function(e, t) {
            var n = s("dialog");
            if (!n) return;
            n.showErrorBox(e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(15),
        r = n(25),
        s = n(26);

    function o(e, t, n) {
        return t.reduce((function(t, n) {
            return n(t, e)
        }), n || e.data)
    }
    e.exports = {
        applyAnsiStyles: r.applyAnsiStyles,
        customFormatterFactory: function(e) {
            if ("string" == typeof e) return function(t, n) {
                return o(n, [s.templateVariables, s.templateDate, s.templateText], [e].concat(t))
            };
            if ("function" == typeof e) return function(t, n) {
                var a = Object.assign({}, n, {
                        data: t
                    }),
                    r = e(a, t);
                return [].concat(r)
            };
            return function(e) {
                return e
            }
        },
        maxDepthFactory: a.maxDepthFactory,
        removeStyles: r.removeStyles,
        toJSON: a.toJSON,
        toString: a.toString,
        transform: o
    }
}, function(e, t, n) {
    "use strict";
    var a = n(23),
        r = n(7),
        s = n(12).log,
        o = n(24),
        i = n(27),
        c = n(32),
        l = n(33);
    e.exports = function e(t) {
        var n = {
            catchErrors: function(e) {
                var t = Object.assign({}, {
                    log: n.error,
                    showDialog: "browser" === process.type
                }, e || {});
                a(t)
            },
            create: e,
            functions: {},
            hooks: [],
            isDev: r.isDev(),
            levels: ["error", "warn", "info", "verbose", "debug", "silly"],
            logId: t,
            variables: {
                processType: process.type
            }
        };
        return n.transports = {
            console: o(n),
            file: i(n),
            remote: l(n),
            ipc: c(n)
        }, n.levels.forEach((function(e) {
            n[e] = s.bind(null, n, e), n.functions[e] = n[e]
        })), n.log = s.bind(null, n, "info"), n.functions.log = n.log, n
    }("default"), e.exports.default = e.exports
}, function(e, t, n) {
    "use strict";
    let a, r, s, o, i, c, l;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TraceLogFileNamePrefix = t.RtcLogFileNamePrefix = t.MsysLogFileNamePrefix = t.ArchonLogFileNamePrefix = t.LogFileNameTimestampFormat = t.RendererLogFileName = t.MainLogFileName = t.MacNotificationSetting = t.WindowsNotificationSetting = t.EmptyTincanKeyNames = t.WindowsStartupTaskState = t.RoomsBadgeType = t.StoriesAndActiveNowItemType = t.RoomJoinPermission = t.RoomInviteeType = t.RoomLinkSurface = t.RoomAudienceType = t.RoomCreationState = t.ThreadCapabilities = t.MeetupLockStatus = t.MeetupCreationErrorType = t.PaymentPasscodeState = t.TransactionType = t.PaymentActivitySearchResultStatus = t.ProductType = t.PaymentCredentialType = t.UNAUTHENTICATED_USERID = t.STICKER_DEFAULT_DIM = t.GIF_DEFAULT_DIM = t.RtcCallStatus = t.ComposerDisabledType = t.WorkForeignEntityType = t.MsysAppState = t.PortalKey = t.MsysStatsShortName = t.SyncGroupsModelIds = t.SyncGroupsSyncStatus = t.AdminMessageCTAType = t.PersistentMenuCTAType = t.AttachmentCTAType = t.AttachmentStatus = t.BlockedByViewerStatus = t.SearchSource = t.OutgoingCallSource = t.PerformanceEvents = t.MessengerThreadThemeType = t.NullstateCTAType = t.QuickReplyType = t.ContactReachabilityStatus = t.ContactTypeExact = t.ContactType = t.ThreadCannotUnsendReason = t.MessageCannotUnsendReason = t.MessageReplyStatus = t.MessageReplySourceType = t.MessageAuthorityLevel = t.MessageSendStatus = t.MessagesLoadMoreState = t.SearchResultType = t.SearchQueryStatusType = t.PresenceType = t.StickerPackLoadingState = t.HOTLIKE_STICKER_ID = t.ReplySourceType = t.ReplyAttachmentType = t.ThreadFolderParentKey = t.MediaType = t.ThreadType = t.AttachmentMediaGroup = t.AttachmentType = void 0, t.AttachmentType = a,
        function(e) {
            e[e.None = 0] = "None", e[e.Sticker = 1] = "Sticker", e[e.Image = 2] = "Image", e[e.AnimatedImage = 3] = "AnimatedImage", e[e.Video = 4] = "Video", e[e.Audio = 5] = "Audio", e[e.File = 6] = "File", e[e.XMA = 7] = "XMA"
        }(a || (t.AttachmentType = a = {})), t.AttachmentMediaGroup = r,
        function(e) {
            e[e.PhotosAndVideos = 0] = "PhotosAndVideos", e[e.FilesOnly = 1] = "FilesOnly"
        }(r || (t.AttachmentMediaGroup = r = {})), t.ThreadType = s,
        function(e) {
            e[e.EncryptedOnetoOne = -1] = "EncryptedOnetoOne", e[e.Unknown = 0] = "Unknown", e[e.OnetoOne = 1] = "OnetoOne", e[e.Group = 2] = "Group", e[e.Room = 3] = "Room", e[e.Montage = 4] = "Montage", e[e.Marketplace = 5] = "Marketplace", e[e.Folder = 6] = "Folder", e[e.CommunityGroup = 18] = "CommunityGroup"
        }(s || (t.ThreadType = s = {})), t.MediaType = o,
        function(e) {
            e[e.JPG = 0] = "JPG", e[e.PNG = 1] = "PNG", e[e.GIF = 2] = "GIF", e[e.WEBP = 3] = "WEBP", e[e.MP4 = 4] = "MP4", e[e.WEBM = 5] = "WEBM"
        }(o || (t.MediaType = o = {})), t.ThreadFolderParentKey = i,
        function(e) {
            e.Inbox = "0", e.MessageRequests = "-1", e.Other = "-2", e.Archived = "-10", e.Marketplace = "-12", e.InboxUnread = "-100"
        }(i || (t.ThreadFolderParentKey = i = {})), t.ReplyAttachmentType = c,
        function(e) {
            e[e.Image = 1] = "Image", e[e.Video = 2] = "Video", e[e.AnimatedImage = 3] = "AnimatedImage", e[e.Sticker = 4] = "Sticker", e[e.MultipleImages = 6] = "MultipleImages"
        }(c || (t.ReplyAttachmentType = c = {})), t.ReplySourceType = l,
        function(e) {
            e[e.None = 0] = "None", e[e.Message = 1] = "Message", e[e.Story = 2] = "Story"
        }(l || (t.ReplySourceType = l = {}));
    let d, u, h, S, p, f, A, _, g, E, y, m, T, C, M, R, I, v, O, D, N, P, w, b, L, k, F, U, x, G, W, B, H;
    t.HOTLIKE_STICKER_ID = "369239263222822", t.StickerPackLoadingState = d,
        function(e) {
            e[e.NotInitiated = 0] = "NotInitiated", e[e.InProgress = 1] = "InProgress", e[e.Complete = 2] = "Complete"
        }(d || (t.StickerPackLoadingState = d = {})), t.PresenceType = u,
        function(e) {
            e[e.Offline = 1] = "Offline", e[e.Active = 2] = "Active"
        }(u || (t.PresenceType = u = {})), t.SearchQueryStatusType = h,
        function(e) {
            e[e.Pending = 1] = "Pending", e[e.Complete = 2] = "Complete", e[e.Failed = 3] = "Failed"
        }(h || (t.SearchQueryStatusType = h = {})), t.SearchResultType = S,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Contact = 1] = "Contact", e[e.NonContact = 2] = "NonContact", e[e.Group = 3] = "Group", e[e.Page = 4] = "Page", e[e.IntegratedMessageSearchThread = 5] = "IntegratedMessageSearchThread"
        }(S || (t.SearchResultType = S = {})), t.MessagesLoadMoreState = p,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.HasMoreLocal = 1] = "HasMoreLocal", e[e.HasMoreRemote = 2] = "HasMoreRemote", e[e.IsLoadingMoreRemote = 3] = "IsLoadingMoreRemote", e[e.FullyLoaded = 4] = "FullyLoaded"
        }(p || (t.MessagesLoadMoreState = p = {})), t.MessageSendStatus = f,
        function(e) {
            e[e.None = 0] = "None", e[e.Sending = 1] = "Sending", e[e.ServerReceived = 2] = "ServerReceived", e[e.NonRetriableError = 4] = "NonRetriableError", e[e.RetriableError = 5] = "RetriableError", e[e.SentOnly = 6] = "SentOnly"
        }(f || (t.MessageSendStatus = f = {})), t.MessageAuthorityLevel = A,
        function(e) {
            e[e.AuthorityLevelOptimisitc = 20] = "AuthorityLevelOptimisitc", e[e.AuthorityLevelClientPartial = 40] = "AuthorityLevelClientPartial", e[e.AuthorityLevelServerPartial = 60] = "AuthorityLevelServerPartial", e[e.AuthorityLevelAuthoritative = 80] = "AuthorityLevelAuthoritative", e[e.AuthorityLevelClientAuthoritativeDelete = 100] = "AuthorityLevelClientAuthoritativeDelete"
        }(A || (t.MessageAuthorityLevel = A = {})), t.MessageReplySourceType = _,
        function(e) {
            e[e.None = 0] = "None", e[e.Message = 1] = "Message", e[e.Story = 2] = "Story", e[e.Forward = 3] = "Forward"
        }(_ || (t.MessageReplySourceType = _ = {})), t.MessageReplyStatus = g,
        function(e) {
            e[e.None = 0] = "None", e[e.Valid = 1] = "Valid", e[e.Deleted = 2] = "Deleted", e[e.Unavailable = 3] = "Unavailable", e[e.Expired = 4] = "Expired"
        }(g || (t.MessageReplyStatus = g = {})), t.MessageCannotUnsendReason = E,
        function(e) {
            e[e.MSGGlobalDeleteMessageUnsendabilityStatusCanUnsend = 0] = "MSGGlobalDeleteMessageUnsendabilityStatusCanUnsend", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyLogMessage = 1] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyLogMessage", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyTombstoneMessage = 2] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyTombstoneMessage", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyForNonSender = 3] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyForNonSender", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyP2PPayment = 4] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyP2PPayment", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyStoryReaction = 5] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyStoryReaction", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyBlobAttachment = 6] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyBlobAttachment", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyMessageNotFound = 7] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyMessageNotFound"
        }(E || (t.MessageCannotUnsendReason = E = {})), t.ThreadCannotUnsendReason = y,
        function(e) {
            e[e.MSGGlobalDeleteThreadUnsendabilityStatusCanUnsend = 0] = "MSGGlobalDeleteThreadUnsendabilityStatusCanUnsend", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyForSpecificIDs = 1] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyForSpecificIDs", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsPAU = 2] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsPAU", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsWorkUser = 3] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsWorkUser", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfPageThread = 4] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfPageThread", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfMarketplaceThread = 5] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfMarketplaceThread", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfCannotLoadThread = 6] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfCannotLoadThread"
        }(y || (t.ThreadCannotUnsendReason = y = {})), t.ContactType = m,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.User = 1] = "User", e[e.Page = 2] = "Page"
        }(m || (t.ContactType = m = {})), t.ContactTypeExact = T,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.FBUser = 1] = "FBUser", e[e.MessengerOnly = 2] = "MessengerOnly", e[e.DeactivatedAllowedOnMessenger = 3] = "DeactivatedAllowedOnMessenger", e[e.MessengerKid = 4] = "MessengerKid", e[e.FBPage = 5] = "FBPage", e[e.FBPagePersona = 6] = "FBPagePersona"
        }(T || (t.ContactTypeExact = T = {})), t.ContactReachabilityStatus = C,
        function(e) {
            e[e.REACHABLE = 0] = "REACHABLE", e[e.UNREACHABLE_USER_TYPE = 1] = "UNREACHABLE_USER_TYPE"
        }(C || (t.ContactReachabilityStatus = C = {})), t.QuickReplyType = M,
        function(e) {
            e.Text = "quick_reply_text", e.PhoneNumber = "quick_reply_phone", e.Email = "quick_reply_email", e.Birthday = "quick_reply_birthday", e.State = "quick_reply_state", e.ZipCode = "quick_reply_zip_code"
        }(M || (t.QuickReplyType = M = {})), t.NullstateCTAType = R,
        function(e) {
            e[e.None = 0] = "None", e[e.GetStarted = 1] = "GetStarted", e[e.Icebreakers = 2] = "Icebreakers"
        }(R || (t.NullstateCTAType = R = {})), t.MessengerThreadThemeType = I,
        function(e) {
            e[e.ColorGradient = 1] = "ColorGradient", e[e.Theme = 2] = "Theme"
        }(I || (t.MessengerThreadThemeType = I = {})), t.PerformanceEvents = v,
        function(e) {
            e.APP_START = "APP_START", e.APP_QUIT = "APP_QUIT", e.APP_JS_CRASH = "APP_JS_CRASH", e.APP_NATIVE_CRASH = "APP_NATIVE_CRASH", e.TTI = "TTI", e.CREATE_MESSENGER_WINDOW = "CREATE_MESSENGER_WINDOW", e.CREATE_WINDOW = "CREATE_WINDOW", e.WINDOW_READY_TO_SHOW = "WINDOW_READY_TO_SHOW", e.CREATE_THREAD_RENDERED = "CREATE_THREAD_RENDERED", e.LEGACY_MESSAGES_RENDERED = "LEGACY_MESSAGES_RENDERED", e.MESSAGES_RENDERED = "MESSAGES_RENDERED", e.MESSAGES_CONTAINER_MOUNT_START = "MESSAGES_CONTAINER_MOUNT_START", e.MESSAGES_CONTAINER_MOUNT_END = "MESSAGES_CONTAINER_MOUNT_END", e.MESSAGES_CONTAINER_UNMOUNT = "MESSAGES_CONTAINER_UNMOUNT", e.STALE_MESSAGES_RENDERED = "STALE_MESSAGES_RENDERED", e.SHIMMER_RENDERED = "SHIMMER_RENDERED", e.FIRST_RUN_RENDERED = "FIRST_RUN_RENDERED", e.ERROR_HERO_RENDERED = "ERROR_HERO_RENDERED", e.WINDOW_SHOW = "WINDOW_SHOW", e.INSTALL_MOVE_TO_APP_FOLDER_AND_RESTART = "INSTALL_MOVE_TO_APP_FOLDER_AND_RESTART", e.OPEN_OR_SHOW_MESSENGER_WINDOW = "OPEN_OR_SHOW_MESSENGER_WINDOW", e.TRY_SHOW_NOT_VISIBLE_WINDOW = "TRY_SHOW_NOT_VISIBLE_WINDOW", e.TRY_SHOW_VISIBLE_WINDOW = "TRY_SHOW_VISIBLE_WINDOW", e.LOGIN_RENDERED = "LOGIN_RENDERED", e.LOGIN_START = "LOGIN_START", e.LOGIN_FAILED = "LOGIN_FAILED", e.LOGIN_SSO_GET_TOKENS_STARTED = "LOGIN_SSO_GET_TOKENS_STARTED", e.LOGIN_SSO_GET_TOKENS_COMPLETED = "LOGIN_SSO_GET_TOKENS_COMPLETED", e.LOGIN_SSO_GET_TOKENS_FAILED = "LOGIN_SSO_GET_TOKENS_FAILED", e.LOGIN_SSO_SHOW_INTERSTITIAL = "LOGIN_SSO_SHOW_INTERSTITIAL", e.LOGIN_SSO_INTERSTITIAL_FAILED = "LOGIN_SSO_INTERSTITIAL_FAILED", e.LOGIN_SSO_INTERSTITIAL_SUCCEEDED_AUTH_STARTED = "LOGIN_SSO_INTERSTITIAL_SUCCEEDED_AUTH_STARTED", e.LOGIN_SSO_AUTH_FAILED = "LOGIN_SSO_AUTH_FAILED", e.LOGIN_SSO_AUTH_SUCCEEDED = "LOGIN_SSO_AUTH_SUCCEEDED", e.SYNC_STARTED = "SYNC_STARTED", e.SYNC_COMPLETED = "SYNC_COMPLETED", e.SYSTEM_SUSPENDED = "SYSTEM_SUSPENDED", e.SYSTEM_RESUMED = "SYSTEM_RESUMED", e.NETWORK_ONLINE = "NETWORK_ONLINE", e.NETWORK_OFFLINE = "NETWORK_OFFLINE", e.OPEN_THREAD = "OPEN_THREAD", e.LOAD_THREADS = "LOAD_THREADS", e.THREADS_LOADED = "THREADS_LOADED", e.LOAD_MESSAGES = "LOAD_MESSAGES", e.MESSAGES_LOADED = "MESSAGES_LOADED", e.USER_OPEN_THREAD = "USER_OPEN_THREAD", e.THREAD_ITEM_SELECTED = "THREAD_ITEM_SELECTED", e.LOAD_THREAD_START = "LOAD_THREAD_START", e.LOAD_THREAD_END = "LOAD_THREAD_END", e.LOAD_THREAD_MODEL_START = "LOAD_THREAD_MODEL_START", e.LOAD_THREAD_MODEL_END = "LOAD_THREAD_MODEL_END", e.LOAD_MESSAGES_START = "LOAD_MESSAGES_START", e.LOAD_MESSAGES_END = "LOAD_MESSAGES_END", e.MSYS_FETCH_MESSAGES_START = "MSYS_FETCH_MESSAGES_START", e.MSYS_FETCH_MESSAGES_END = "MSYS_FETCH_MESSAGES_END", e.MSYS_FETCH_ATTACHMENTS_START = "MSYS_FETCH_ATTACHMENTS_START", e.MSYS_FETCH_ATTACHMENTS_END = "MSYS_FETCH_ATTACHMENTS_END", e.MSYS_FETCH_ATTACHMENT_ITEM_LIST_START = "MSYS_FETCH_ATTACHMENT_ITEM_LIST_START", e.MSYS_FETCH_ATTACHMENT_ITEM_LIST_END = "MSYS_FETCH_ATTACHMENT_ITEM_LIST_END", e.MSYS_FETCH_REACTIONS_START = "MSYS_FETCH_REACTIONS_START", e.MSYS_FETCH_REACTIONS_END = "MSYS_FETCH_REACTIONS_END", e.MSYS_FETCH_QUICK_REPLIES_START = "MSYS_FETCH_QUICK_REPLIES_START", e.MSYS_FETCH_QUICK_REPLIES_END = "MSYS_FETCH_QUICK_REPLIES_END", e.MSYS_FETCH_ATTACHMENT_CTAS_START = "MSYS_FETCH_ATTACHMENT_CTAS_START", e.MSYS_FETCH_ATTACHMENT_CTAS_END = "MSYS_FETCH_ATTACHMENT_CTAS_END", e.USER_START_NEW_THREAD = "USER_START_NEW_THREAD", e.EARLIER_MESSAGES_REQUESTED = "EARLIER_MESSAGES_REQUESTED", e.PAGING_EARLIER_MESSAGES = "PAGING_EARLIER_MESSAGES", e.EARLIER_MESSAGES_LOADED = "EARLIER_MESSAGES_LOADED", e.NEWER_MESSAGES_REQUESTED = "NEWER_MESSAGES_REQUESTED", e.PAGING_NEWER_MESSAGES = "PAGING_NEWER_MESSAGES", e.NEWER_MESSAGES_LOADED = "NEWER_MESSAGES_LOADED", e.RTC_START = "RTC_START", e.RTC_WINDOW_CREATED = "RTC_WINDOW_CREATED", e.RTC_INJECTED = "RTC_INJECTED", e.RTC_READY = "RTC_READY", e.RTC_LOADED = "RTC_LOADED", e.RTC_LOAD_FAILED = "RTC_LOAD_FAILED", e.RTC_FAILED = "RTC_FAILED", e.RTC_FAILED_FINAL = "RTC_FAILED_FINAL", e.RTC_DEFERRED = "RTC_DEFERRED", e.OUTGOING_CALL_ATTEMPT = "OUTGOING_CALL_ATTEMPT", e.AUDIO_CALL = "AUDIO_CALL", e.VIDEO_CHAT = "VIDEO_CHAT", e.NO_NETWORK_CONNECTION = "NO_NETWORK_CONNECTION", e.ALREADY_IN_CALL = "ALREADY_IN_CALL", e.LOAD_PARTICIPANTS_FAILED = "LOAD_PARTICIPANTS_FAILED", e.MEDIA_PERMISSIONS_ERROR = "MEDIA_PERMISSIONS_ERROR", e.OUTGOING_CALL_FAILED_RTC_LOADING = "OUTGOING_CALL_FAILED_RTC_LOADING", e.OUTGOING_CALL_FAILED_RTC_LOAD_FAILED = "OUTGOING_CALL_FAILED_RTC_LOAD_FAILED", e.OUTGOING_CALL_PLACED = "OUTGOING_CALL_PLACED", e.CALL_WINDOW_LOADED = "CALL_WINDOW_LOADED", e.CALL_WINDOW_LOAD_FAILED = "CALL_WINDOW_LOAD_FAILED", e.INCOMING_CALL_START = "INCOMING_CALL_START", e.INCOMING_CALL_PARTICIPANTS_LOADED = "INCOMING_CALL_PARTICIPANTS_LOADED", e.INCOMING_CALL_WINDOW_CREATED = "INCOMING_CALL_WINDOW_CREATED", e.INCOMING_CALL_DIALOG_SHOWN = "INCOMING_CALL_DIALOG_SHOWN", e.MISSED_CALL_START = "MISSED_CALL_START", e.MISSED_CALL_WINDOW_CREATED = "MISSED_CALL_WINDOW_CREATED", e.MISSED_CALL_DIALOG_SHOWN = "MISSED_CALL_DIALOG_SHOWN", e.ROOMS_INCOMING_START = "ROOMS_INCOMING_START", e.ROOMS_INCOMING_WINDOW_CREATED = "ROOMS_INCOMING_WINDOW_CREATED", e.ROOMS_INCOMING_PARTICIPANTS_LOADED = "ROOMS_INCOMING_PARTICIPANTS_LOADED", e.ROOMS_INCOMING_DIALOG_SHOWN = "ROOMS_INCOMING_DIALOG_SHOWN", e.OSMETA_READ_USER_ID_START = "OSMETA_READ_USER_ID_START", e.OSMETA_READ_USER_ID_SUCCEEDED = "OSMETA_READ_USER_ID_SUCCEEDED", e.OSMETA_READ_USER_ID_FAILED = "OSMETA_READ_USER_ID_FAILED", e.OSMETA_READ_ACCESS_TOKEN_START = "OSMETA_READ_ACCESS_TOKEN_START", e.OSMETA_READ_TOKEN_BLOB_START = "OSMETA_READ_TOKEN_BLOB_START", e.OSMETA_CREATE_BUFFER_START = "OSMETA_CREATE_BUFFER_START", e.OSMETA_DECRYPT_TOKEN_START = "OSMETA_DECRYPT_TOKEN_START", e.OSMETA_TOKEN_TO_STRING_START = "OSMETA_TOKEN_TO_STRING_START", e.OSMETA_READ_ACCESS_TOKEN_SUCCEEDED = "OSMETA_READ_ACCESS_TOKEN_SUCCEEDED", e.OSMETA_READ_ACCESS_TOKEN_FAILED = "OSMETA_READ_ACCESS_TOKEN_FAILED", e.OSMETA_CLEANUP_DATABASE_START = "OSMETA_CLEANUP_DATABASE_START", e.OSMETA_CLEANUP_DATABASE_SUCCEEDED = "OSMETA_CLEANUP_DATABASE_SUCCEEDED", e.OSMETA_CLEANUP_DATABASE_FAILED = "OSMETA_CLEANUP_DATABASE_FAILED", e.OSMETA_UPGRADE_STARTED = "OSMETA_UPGRADE_STARTED", e.OSMETA_UPGRADE_EXCHANGE_TOKEN_START = "OSMETA_UPGRADE_EXCHANGE_TOKEN_START", e.OSMETA_UPGRADE_SUCCEEDED = "OSMETA_UPGRADE_SUCCEEDED", e.OSMETA_UPGRADE_FAILED = "OSMETA_UPGRADE_FAILED", e.GET_PROMOTIONS = "GET_PROMOTIONS", e.GET_PROMOTIONS_SUCCEEDED = "GET_PROMOTIONS_SUCCEEDED", e.GET_PROMOTIONS_FAILED = "GET_PROMOTIONS_FAILED", e.MARK_PROMOTION_IMPRESSION = "MARK_PROMOTION_IMPRESSION", e.MARK_PROMOTION_IMPRESSION_SUCCEEDED = "MARK_PROMOTION_IMPRESSION_SUCCEEDED", e.MARK_PROMOTION_IMPRESSION_FAILED = "MARK_PROMOTION_IMPRESSION_FAILED", e.MARK_PROMOTION_ACTION = "MARK_PROMOTION_ACTION", e.MARK_PROMOTION_ACTION_SUCCEEDED = "MARK_PROMOTION_ACTION_SUCCEEDED", e.MARK_PROMOTION_ACTION_FAILED = "MARK_PROMOTION_ACTION_FAILED", e.APP_OPEN_FROM_RTC_PUSH_NOTIF = "APP_OPEN_FROM_PUSH_NOTIF", e.CALL_ACCEPTED = "CALL_ACCEPTED", e.CALL_REJECTED = "CALL_REJECTED", e.ROOMS_TRAY_SHIMMER_RENDERED = "ROOMS_TRAY_SHIMMER_RENDERED", e.ROOMS_TRAY_RENDERED = "ROOMS_TRAY_RENDERED", e.OPEN_MEDIA_GALLERY = "OPEN_MEDIA_GALLERY", e.LOAD_THREAD_MEDIA = "LOAD_THREAD_MEDIA", e.FORCE_LOAD_THREAD_MEDIA = "FORCE_LOAD_THREAD_MEDIA", e.OPEN_MEDIA_GALLERY_SUCCESS = "OPEN_MEDIA_GALLERY_SUCCESS", e.OPEN_MEDIA_GALLERY_FAILURE = "OPEN_MEDIA_GALLERY_FAILURE", e.MSYS_INIT_MAIN_THREAD_PART_1_START = "MSYS_INIT_MAIN_THREAD_PART_1_START", e.MSYS_INIT_UPDATE_LOGGING = "MSYS_INIT_UPDATE_LOGGING", e.MSYS_INIT_CREATE_ANALYTICS_STACK = "MSYS_INIT_CREATE_ANALYTICS_STACK", e.MSYS_INIT_REGISTER_CQL_MAPPINGS = "MSYS_INIT_REGISTER_CQL_MAPPINGS", e.MSYS_INIT_CREATE_DATABASE = "MSYS_INIT_CREATE_DATABASE", e.MSYS_INIT_OPEN_DATABASE_REQUEST = "MSYS_INIT_OPEN_DATABASE_REQUEST", e.MSYS_INIT_CREATE_DASM_CONFIG = "MSYS_INIT_CREATE_DASM_CONFIG", e.MSYS_INIT_CREATE_DB_HEALTH_MONITOR = "MSYS_INIT_CREATE_DB_HEALTH_MONITOR", e.MSYS_INIT_CREATE_EXPERIMENT_CACHE = "MSYS_INIT_CREATE_EXPERIMENT_CACHE", e.MSYS_INIT_OPEN_DATABASE_COMPLETE = "MSYS_INIT_OPEN_DATABASE_COMPLETE", e.MSYS_INIT_CREATE_AUTH_CONTEXT = "MSYS_INIT_CREATE_AUTH_CONTEXT", e.MSYS_INIT_CREATE_JOB_SCHEDULER = "MSYS_INIT_CREATE_JOB_SCHEDULER", e.MSYS_INIT_CREATE_MAILBOX_PROVIDER = "MSYS_INIT_CREATE_MAILBOX_PROVIDER", e.MSYS_INIT_CREATE_MAILBOX = "MSYS_INIT_CREATE_MAILBOX", e.MSYS_INIT_GET_SYNC = "MSYS_INIT_GET_SYNC", e.MSYS_INIT_TRACE_MAILBOX_SYNC = "MSYS_INIT_TRACE_MAILBOX_SYNC", e.MSYS_INIT_TRACE_MESSAGE_SEND = "MSYS_INIT_TRACE_MESSAGE_SEND", e.MSYS_INIT_INSTALL_SYNC_OBSERVER = "MSYS_INIT_INSTALL_SYNC_OBSERVER", e.MSYS_INIT_INSTALL_RSYS_OBSERVER = "MSYS_INIT_INSTALL_RSYS_OBSERVER", e.MSYS_INIT_INSTALL_INVALID_ACCESS_TOKEN_OBSERVER = "MSYS_INIT_INSTALL_INVALID_ACCESS_TOKEN_OBSERVER", e.MSYS_INIT_INSTALL_INVALID_SESSION_OBSERVER = "MSYS_INIT_INSTALL_INVALID_SESSION_OBSERVER", e.MSYS_INIT_MAIN_THREAD_PART_1_DONE = "MSYS_INIT_MAIN_THREAD_PART_1_DONE", e.MSYS_INIT_DB_THREAD_PART_START = "MSYS_INIT_DB_THREAD_PART_START", e.MSYS_INIT_SET_MAILBOX_SYNC_PARAMETERS = "MSYS_INIT_SET_MAILBOX_SYNC_PARAMETERS", e.MSYS_INIT_SET_ARFX_SYNC_PARAMETERS = "MSYS_INIT_SET_ARFX_SYNC_PARAMETERS", e.MSYS_INIT_SET_EXPERIMENT_SYNC_PARAMETERS = "MSYS_INIT_SET_EXPERIMENT_SYNC_PARAMETERS", e.MSYS_INIT_DB_THREAD_PART_DONE = "MSYS_INIT_DB_THREAD_PART_DONE", e.MSYS_INIT_MAIN_THREAD_PART_2_START = "MSYS_INIT_MAIN_THREAD_PART_2_START", e.MSYS_INIT_SET_MAILBOX_ACTIVE = "MSYS_INIT_SET_MAILBOX_ACTIVE", e.MSYS_INIT_INITIALIZE_MQTT_HANDLER = "MSYS_INIT_INITIALIZE_MQTT_HANDLER", e.MSYS_INIT_GET_MQTT_CHANNEL = "MSYS_INIT_GET_MQTT_CHANNEL", e.MSYS_INIT_LOAD_EXPERIMENT_CACHE_REQUEST = "MSYS_INIT_LOAD_EXPERIMENT_CACHE_REQUEST", e.MSYS_INIT_LOAD_EXPERIMENT_CACHE_COMPLETE = "MSYS_INIT_LOAD_EXPERIMENT_CACHE_COMPLETE", e.MSYS_INIT_CREATE_OVERLAY_CONFIG_MANAGER = "MSYS_INIT_CREATE_OVERLAY_CONFIG_MANAGER", e.MSYS_INIT_GET_APP_DISPLAY_NAME = "MSYS_INIT_GET_APP_DISPLAY_NAME", e.MSYS_INIT_CREATE_CAPTURE_CONTROLLER = "MSYS_INIT_CREATE_CAPTURE_CONTROLLER", e.MSYS_INIT_CREATE_RSYS_CALL_MANAGER = "MSYS_INIT_CREATE_RSYS_CALL_MANAGER", e.MSYS_INIT_START_RSYS_PRECALL_ACTIONS = "MSYS_INIT_START_RSYS_PRECALL_ACTIONS", e.MSYS_INIT_ADD_ACTIVE_CALL_LISTENER = "MSYS_INIT_ADD_ACTIVE_CALL_LISTENER", e.MSYS_INIT_MAIN_THREAD_PART_2_END = "MSYS_INIT_MAIN_THREAD_PART_2_END", e.USER_SEND_MESSAGE = "USER_SEND_MESSAGE", e.SEND_MESSAGE_START = "SEND_MESSAGE_START", e.SEND_MESSAGE_END = "SEND_MESSAGE_END", e.NEW_SENT_MESSAGE_RENDERED = "NEW_SENT_MESSAGE_RENDERED", e.INBOX_SYNC_SHOULD_LOAD_MESSAGES = "INBOX_SYNC_SHOULD_LOAD_MESSAGES"
        }(v || (t.PerformanceEvents = v = {})), t.OutgoingCallSource = O,
        function(e) {
            e.CHAT_HEADER = "chat_header", e.CHAT_CELL = "chat_cell", e.CONTEXT_MENU = "context_menu", e.XMA = "xma", e.MISSED_CALL_DIALOG = "missed_call_dialog"
        }(O || (t.OutgoingCallSource = O = {})), t.SearchSource = D,
        function(e) {
            e.ThreadList = "thread_list", e.Omnipicker = "omnipicker", e.ThreadDetails = "thread_details"
        }(D || (t.SearchSource = D = {})), t.BlockedByViewerStatus = N,
        function(e) {
            e[e.Unblocked = 0] = "Unblocked", e[e.MessageBlocked = 1] = "MessageBlocked", e[e.FullyBlocked = 2] = "FullyBlocked"
        }(N || (t.BlockedByViewerStatus = N = {})), t.AttachmentStatus = P,
        function(e) {
            e[e.Supported = 0] = "Supported", e[e.FileTooLarge = 1] = "FileTooLarge", e[e.TypeNotSupported = 2] = "TypeNotSupported"
        }(P || (t.AttachmentStatus = P = {})), t.AttachmentCTAType = w,
        function(e) {
            e.XMA_PAGE_SHARE = "xma_page_share", e.XMA_ELEMENT_SHARE = "xma_element_share", e.XMA_PAYMENT = "xma_payment", e.XMA_P2P_PAYMENT_DETAILS = "xma_p2p_payment_details", e.XMA_P2P_PAYMENT_DETAILS_RECEIVE_MONEY = "xma_p2p_payment_details_receive_money", e.XMA_P2P_REQUEST_PAY = "xma_p2p_request_pay", e.XMA_P2P_VERIFY_INFO = "xma_p2p_verify_info", e.XMA_GAME_PLAY = "xma_game_play", e.XMA_WEB_URL = "xma_web_url", e.XMA_EXTENSION = "xma_extension", e.XMA_POSTBACK = "xma_postback", e.XMA_OPEN_NATIVE = "xma_open_native", e.XMA_BRANDED_CAMERA = "xma_branded_camera", e.XMA_ACCOUNT_LINK = "xma_account_link", e.XMA_ACCOUNT_UNLINK = "xma_account_unlink", e.XMA_DIRECT_SEND = "xma_direct_send", e.XMA_LIVE_LOCATION_SHARING = "xma_live_location_sharing", e.XMA_SPONSORED_MESSAGE_WEB_URL = "xma_sponsored_message_web_url", e.XMA_SPONSORED_MESSAGE_POSTBACK = "xma_sponsored_message_postback", e.XMA_RTC_AUDIO = "xma_rtc_audio", e.XMA_RTC_VIDEO = "xma_rtc_video", e.XMA_RTC_MISSED_AUDIO = "xma_rtc_missed_audio", e.XMA_RTC_MISSED_VIDEO = "xma_rtc_missed_video", e.XMA_RTC_ENDED_AUDIO = "xma_rtc_ended_audio", e.XMA_RTC_ENDED_VIDEO = "xma_rtc_ended_video", e.XMA_OPEN_JOINABLE_CALL_INVITE_URL = "xma_open_joinable_call_invite_url", e.XMA_ROOMS_SPEAKEASY_INVITE = "xma_rooms_speakeasy_invite", e.XMA_ROOMS_SPEAKEASY_INTERESTED = "xma_rooms_speakeasy_interested", e.XMA_ROOMS_SPEAKEASY_EDIT = "xma_rooms_speakeasy_edit", e.XMA_ROOMS_SPEAKEASY_EXPIRED = "xma_rooms_speakeasy_expired", e.XMA_ROOMS_SPEAKEASY_UNDO = "xma_rooms_speakeasy_undo", e.XMA_ROOMS_SPEAKEASY_CALLBACK = "xma_rooms_speakeasy_callback"
        }(w || (t.AttachmentCTAType = w = {})), t.PersistentMenuCTAType = b,
        function(e) {
            e.MENU_NESTED = "menu_nested", e.MENU_PAGE_SHARE = "menu_page_share", e.MENU_ELEMENT_SHARE = "menu_element_share", e.MENU_PAYMENT = "menu_payment", e.MENU_GAME_PLAY = "menu_game_play", e.MENU_WEB_URL = "menu_web_url", e.MENU_EXTENSION = "menu_extension", e.MENU_POSTBACK = "menu_postback", e.MENU_PHONE_NUMBER = "menu_phone_number", e.MENU_OPEN_NATIVE = "menu_open_native", e.MENU_BRANDED_CAMERA = "menu_branded_camera"
        }(b || (t.PersistentMenuCTAType = b = {})), t.AdminMessageCTAType = L,
        function(e) {
            e.ADMIN_MSG_MANAGE_AD = "admin_msg_manage_ad", e.ADMIN_MSG_WEB_URL = "admin_msg_web_url", e.ADMIN_MSG_P2B_USER_CONTROLS = "admin_msg_p2b_user_controls", e.ADMIN_MSG_EDIT_NICKNAME = "admin_msg_edit_nickname", e.ADMIN_MSG_POLL_DETAILS = "admin_msg_poll_details"
        }(L || (t.AdminMessageCTAType = L = {})), t.SyncGroupsSyncStatus = k,
        function(e) {
            e[e.MCAMailboxSyncStatusUnknown = 0] = "MCAMailboxSyncStatusUnknown", e[e.MCAMailboxSyncStatusInitializing = 1] = "MCAMailboxSyncStatusInitializing", e[e.MCAMailboxSyncStatusComplete = 2] = "MCAMailboxSyncStatusComplete", e[e.MCAMailboxSyncStatusResnapshotting = 3] = "MCAMailboxSyncStatusResnapshotting"
        }(k || (t.SyncGroupsSyncStatus = k = {})), t.SyncGroupsModelIds = F,
        function(e) {
            e[e.MailboxSyncGroup = 1] = "MailboxSyncGroup", e[e.ExperimentsSyncGroup = 8] = "ExperimentsSyncGroup", e[e.SettingsSyncGroup = 16] = "SettingsSyncGroup"
        }(F || (t.SyncGroupsModelIds = F = {})), t.MsysStatsShortName = U,
        function(e) {
            e.NetworkBytesIn = "NTI"
        }(U || (t.MsysStatsShortName = U = {})), t.PortalKey = x,
        function(e) {
            e.Settings = "Settings", e.Feedback = "Feedback"
        }(x || (t.PortalKey = x = {})), t.MsysAppState = G,
        function(e) {
            e[e.Foreground = 0] = "Foreground", e[e.Background = 1] = "Background"
        }(G || (t.MsysAppState = G = {})), t.WorkForeignEntityType = W,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Foreign = 1] = "Foreign", e[e.NotForeign = 2] = "NotForeign"
        }(W || (t.WorkForeignEntityType = W = {})), t.ComposerDisabledType = B,
        function(e) {
            e[e.NewThreadNoPreview = 1] = "NewThreadNoPreview", e[e.NewThreadNoRecipients = 2] = "NewThreadNoRecipients", e[e.BlockedThread = 3] = "BlockedThread", e[e.CantMessage = 4] = "CantMessage", e[e.NotMember = 5] = "NotMember"
        }(B || (t.ComposerDisabledType = B = {})), t.RtcCallStatus = H,
        function(e) {
            e[e.NONE = 0] = "NONE", e[e.AUDIO = 1] = "AUDIO", e[e.VIDEO = 2] = "VIDEO"
        }(H || (t.RtcCallStatus = H = {}));
    t.GIF_DEFAULT_DIM = 250;
    t.STICKER_DEFAULT_DIM = 120;
    let j, Y, K, V, $, q, Q, z, J, X, Z, ee, te, ne, ae, re;
    t.UNAUTHENTICATED_USERID = "0", t.PaymentCredentialType = j,
        function(e) {
            e[e.CARD = 0] = "CARD", e[e.PAYPAL = 1] = "PAYPAL"
        }(j || (t.PaymentCredentialType = j = {})), t.ProductType = Y,
        function(e) {
            e.P2P = "p2p", e.PAGES_COMMERCE = "pages_commerce", e.NMOR_PAGES_COMMERCE = "nmor_pages_commerce", e.MESSENGER_COMMERCE = "messenger_commerce"
        }(Y || (t.ProductType = Y = {})), t.PaymentActivitySearchResultStatus = K,
        function(e) {
            e[e.Pending = 0] = "Pending", e[e.Failed = 1] = "Failed", e[e.Succeeded = 2] = "Succeeded", e[e.Initiated = -1] = "Initiated"
        }(K || (t.PaymentActivitySearchResultStatus = K = {})), t.TransactionType = V,
        function(e) {
            e[e.PayMoney = 0] = "PayMoney", e[e.RequestMoney = 1] = "RequestMoney", e[e.P2MCheckOut = 2] = "P2MCheckOut"
        }(V || (t.TransactionType = V = {})), t.PaymentPasscodeState = $,
        function(e) {
            e[e.Active = 65] = "Active", e[e.Deleted = 68] = "Deleted", e[e.Locked = 76] = "Locked", e[e.Disabled = 88] = "Disabled"
        }($ || (t.PaymentPasscodeState = $ = {})), t.MeetupCreationErrorType = q,
        function(e) {
            e.AccountTooEarly = "account_early", e.RateLimit = "rate_limit", e.Timeout = "timeout", e.Unknown = "unknown"
        }(q || (t.MeetupCreationErrorType = q = {})), t.MeetupLockStatus = Q,
        function(e) {
            e[e.OPEN = 0] = "OPEN", e[e.LOCKED_BY_OWNER = 1] = "LOCKED_BY_OWNER", e[e.LOCKED_BY_OWNER_DISCONNECT = 2] = "LOCKED_BY_OWNER_DISCONNECT"
        }(Q || (t.MeetupLockStatus = Q = {})), t.ThreadCapabilities = z,
        function(e) {
            e[e.PAYMENT = 0] = "PAYMENT", e[e.CAMERA = 1] = "CAMERA", e[e.MEDIA_PICKER = 2] = "MEDIA_PICKER", e[e.STICKER = 3] = "STICKER", e[e.GIF = 4] = "GIF", e[e.GO_TO_SECRET_CONVERSATION = 5] = "GO_TO_SECRET_CONVERSATION", e[e.COLOR_CUSTOMIZATION = 6] = "COLOR_CUSTOMIZATION", e[e.EMOJI_CUSTOMIZATION = 7] = "EMOJI_CUSTOMIZATION", e[e.THREAD_DETAILS_PROFILE_BUTTON = 8] = "THREAD_DETAILS_PROFILE_BUTTON", e[e.NICKNAMES = 9] = "NICKNAMES", e[e.BLOCK = 10] = "BLOCK", e[e.CALIBRA = 12] = "CALIBRA", e[e.MESSENGER_KIDS_MANAGE_KID_ACCOUNT = 13] = "MESSENGER_KIDS_MANAGE_KID_ACCOUNT", e[e.AUDIO_CLIPS = 14] = "AUDIO_CLIPS", e[e.SHARED_MEDIA = 15] = "SHARED_MEDIA", e[e.BLOCK_GROUP_MEMBER = 16] = "BLOCK_GROUP_MEMBER", e[e.FEEDBACK_AND_REPORT = 17] = "FEEDBACK_AND_REPORT", e[e.REACTIONS = 18] = "REACTIONS", e[e.MUTE_THREAD = 19] = "MUTE_THREAD", e[e.SEEN_HEADS = 20] = "SEEN_HEADS", e[e.MESSAGE_REQUEST_COMPOSER_BANNER = 21] = "MESSAGE_REQUEST_COMPOSER_BANNER", e[e.IN_THREAD_PROFILE_BUTTON = 22] = "IN_THREAD_PROFILE_BUTTON", e[e.THREAD_DETAILS = 23] = "THREAD_DETAILS", e[e.RTC_VIDEO_CALL = 24] = "RTC_VIDEO_CALL", e[e.RTC_VOICE_CALL = 25] = "RTC_VOICE_CALL", e[e.MEMBER_LIST = 26] = "MEMBER_LIST", e[e.ADD_MEMBER = 27] = "ADD_MEMBER", e[e.LEAVE_THREAD = 28] = "LEAVE_THREAD", e[e.BLOCKED_USER_INTERSTITIAL = 29] = "BLOCKED_USER_INTERSTITIAL", e[e.OPTIMISTIC_THREAD_FEEDBACK_AND_REPORT = 30] = "OPTIMISTIC_THREAD_FEEDBACK_AND_REPORT", e[e.LOCATION_SHARING = 31] = "LOCATION_SHARING", e[e.IGNORE_MESSAGES = 32] = "IGNORE_MESSAGES", e[e.FOCUS_MODE = 33] = "FOCUS_MODE", e[e.SEARCH_IN_CONVERSATION = 34] = "SEARCH_IN_CONVERSATION", e[e.CREATE_GROUP = 35] = "CREATE_GROUP", e[e.POLL_CREATION = 36] = "POLL_CREATION", e[e.DISPLAY_ACTOR_TYPE_IN_THREAD_VIEW_HEADER = 37] = "DISPLAY_ACTOR_TYPE_IN_THREAD_VIEW_HEADER", e[e.DISAPPEARING_MODE = 38] = "DISAPPEARING_MODE", e[e.FORCE_ONE_PHASE_SEND = 39] = "FORCE_ONE_PHASE_SEND", e[e.SPLIT_MULTI_SEND = 40] = "SPLIT_MULTI_SEND", e[e.THREAD_DETAILS_IG_PROFILE_BUTTON = 41] = "THREAD_DETAILS_IG_PROFILE_BUTTON", e[e.MESSAGE_REPLY = 42] = "MESSAGE_REPLY", e[e.MENTIONS = 43] = "MENTIONS", e[e.DISABLE_LINKS = 44] = "DISABLE_LINKS", e[e.THREAD_NAME_CUSTOMIZATION = 60] = "THREAD_NAME_CUSTOMIZATION", e[e.THREAD_PHOTO_CUSTOMIZATION = 61] = "THREAD_PHOTO_CUSTOMIZATION"
        }(z || (t.ThreadCapabilities = z = {})), t.RoomCreationState = J,
        function(e) {
            e[e.Pending = 0] = "Pending", e[e.Done = 1] = "Done", e[e.Failed = 2] = "Failed"
        }(J || (t.RoomCreationState = J = {})), t.RoomAudienceType = X,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Anyone = 1] = "Anyone", e[e.InvitedOnly = 2] = "InvitedOnly"
        }(X || (t.RoomAudienceType = X = {})), t.RoomLinkSurface = Z,
        function(e) {
            e[e.Messenger = 1] = "Messenger", e[e.FriendJoinups = 2] = "FriendJoinups", e[e.Group = 3] = "Group", e[e.Event = 4] = "Event", e[e.Dating = 5] = "Dating", e[e.Workplace = 6] = "Workplace", e[e.Instagram = 7] = "Instagram", e[e.WhatsApp = 8] = "WhatsApp", e[e.MessengerV2 = 9] = "MessengerV2", e[e.WorplaceGroup = 10] = "WorplaceGroup", e[e.Generic = 11] = "Generic"
        }(Z || (t.RoomLinkSurface = Z = {})), t.RoomInviteeType = ee,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Friends = 1] = "Friends", e[e.Custom = 2] = "Custom", e[e.FriendsAndCustom = 3] = "FriendsAndCustom"
        }(ee || (t.RoomInviteeType = ee = {})), t.RoomJoinPermission = te,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.RequiresJoinRequest = 1] = "RequiresJoinRequest", e[e.AnyoneWhoCanLoadTheLink = 2] = "AnyoneWhoCanLoadTheLink"
        }(te || (t.RoomJoinPermission = te = {})), t.StoriesAndActiveNowItemType = ne,
        function(e) {
            e[e.AddToStory = 0] = "AddToStory", e[e.ActiveNow = 1] = "ActiveNow", e[e.Story = 2] = "Story", e[e.Room = 3] = "Room", e[e.CreateOrYourRooms = 4] = "CreateOrYourRooms"
        }(ne || (t.StoriesAndActiveNowItemType = ne = {})), t.RoomsBadgeType = ae,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Ongoing = 1] = "Ongoing", e[e.Joinable = 2] = "Joinable", e[e.Scheduled = 3] = "Scheduled", e[e.Locked = 4] = "Locked"
        }(ae || (t.RoomsBadgeType = ae = {})), t.WindowsStartupTaskState = re,
        function(e) {
            e[e.disabled = 0] = "disabled", e[e.disabledByUser = 1] = "disabledByUser", e[e.enabled = 2] = "enabled", e[e.disabledByPolicy = 3] = "disabledByPolicy", e[e.enabledByPolicy = 4] = "enabledByPolicy"
        }(re || (t.WindowsStartupTaskState = re = {}));
    let se, oe;
    t.EmptyTincanKeyNames = ["MasterEncryptedKey", "identityKeyPublicKey", "identityKeyPrivateKey", "lastResortPreKeyPublicKey", "lastResortPreKeyPrivateKey", "DEKDecryptedKey"], t.WindowsNotificationSetting = se,
        function(e) {
            e[e.enabled = 0] = "enabled", e[e.disabledForApplication = 1] = "disabledForApplication", e[e.disabledForUser = 2] = "disabledForUser", e[e.disabledByGroupPolicy = 3] = "disabledByGroupPolicy", e[e.disabledByManifest = 4] = "disabledByManifest"
        }(se || (t.WindowsNotificationSetting = se = {})), t.MacNotificationSetting = oe,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
        }(oe || (t.MacNotificationSetting = oe = {}));
    t.MainLogFileName = "main";
    t.RendererLogFileName = "renderer";
    t.LogFileNameTimestampFormat = "[-d]YYYYMMDD[-t]HHmmss";
    t.ArchonLogFileNamePrefix = "archon-";
    t.MsysLogFileNamePrefix = "msys-";
    t.RtcLogFileNamePrefix = "rtc-";
    t.TraceLogFileNamePrefix = "trace-"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = n(17),
        r = n(5),
        s = n(20),
        o = n(14),
        i = n(21),
        c = n(22),
        l = h(n(9)),
        d = n(0),
        u = h(n(1));

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class S extends a.AslBase {
        constructor(...e) {
            super(...e), this._appName = void 0, this._buildNumber = void 0, this._trackedEvents = new Map([
                [s.EventNames.HeartbeatEventName, {
                    sentStat: r.AslStat.HeartbeatEventsSent,
                    droppedStat: r.AslStat.HeartbeatEventsDropped,
                    outstandingState: r.AslState.HeartbeatEventsOutstanding
                }],
                [s.EventNames.AppStartEventName, {
                    sentStat: r.AslStat.AppStartEventsSent,
                    droppedStat: r.AslStat.AppStartEventsDropped,
                    outstandingState: r.AslState.AppStartEventsOutstanding
                }],
                [s.EventNames.PerformanceEventName, {
                    sentStat: r.AslStat.PerformanceEventsSent,
                    droppedStat: r.AslStat.PerformanceEventsDropped,
                    outstandingState: r.AslState.PerformanceEventsOutstanding
                }],
                [s.EventNames.UserInteractionEventName, {
                    sentStat: r.AslStat.InteractionEventsSent,
                    droppedStat: r.AslStat.InteractionEventsDropped,
                    outstandingState: r.AslState.InteractionEventsOutstanding
                }]
            ])
        }
        initializeProcessAsl(e) {
            if (this._native || this.getProcessAsl()) return void this.logError("ERR: Process ASL already initialized!");
            const t = require(u.default.resolve(c.buildDir, "systeminfo.node"));
            this._buildNumber = parseInt(null !== i.number && void 0 !== i.number ? i.number : "") || 0;
            const n = this._buildNumber.toString();
            this._appName = o.app.getName();
            const a = t.initializeAsl(this._appName, n, e);
            this.setProcessAslHandle(a, t), this.incrementStat(r.AslStat.AslOpened, 1), e ? (this.incrementStat(r.AslStat.MainProcessStart, 1), this.onMainProcessStart()) : this.incrementStat(r.AslStat.RenderProcessStart, 1)
        }
        onPigeonEventQueued(e, t) {
            this.onPigeonEventQueuedAsync(e, t).catch(t => {
                this.logError(`ASL: Failed pigeon queued processing ${e}: ${t}`);
                try {
                    this.incrementStat(r.AslStat.AslPigeonHandlingErrors, 1)
                } catch {}
            })
        }
        onPigeonEventsSent(e) {
            this.onPigeonEventsSentAsync(e).catch(e => {
                this.logError(`ASL: Failed pigeon sent processing: ${e}`);
                try {
                    this.incrementStat(r.AslStat.AslPigeonHandlingErrors, 1)
                } catch {}
            })
        }
        logError(e) {
            l.default.error(e)
        }
        async onMainProcessStart() {
            await this.getProcessAsl().latchOutstandingStatesToStats(), await this.setState(r.AslState.MainProcessOutstanding, 1), this.startTrackingTime(r.AslStat.AppInitializingTime), o.app.on("quit", () => {
                this._timeTracker.endAllTracking(), this._native.onAppQuit()
            }), o.app.on("renderer-process-crashed", () => {
                this.incrementStat(r.AslStat.RenderProcessAbnormalDeath, 1)
            }), o.app.on("gpu-process-crashed", () => {
                this.incrementStat(r.AslStat.GpuProcessAbnormalDeath, 1)
            }), this.setState(r.AslState.BuildNumber, this._buildNumber), this.setState(r.AslState.LeftOverDataUploaded, 0)
        }
        async onPigeonEventQueuedAsync(e, t) {
            this.incrementStat(r.AslStat.PigeonEventsQueued, 1), this.incrementState(r.AslState.PigeonEventsOutstanding, 1);
            const n = this._trackedEvents.get(e);
            n && this.incrementState(n.outstandingState, 1)
        }
        async onPigeonEventsSentAsync(e) {
            this.incrementStat(r.AslStat.PigeonEventsSent, e.length), this.incrementState(r.AslState.PigeonEventsOutstanding, -e.length);
            for (const t of e) {
                const e = this._trackedEvents.get(t.name);
                e && (this.incrementStat(e.sentStat, 1), this.incrementState(e.outstandingState, -1))
            }
            for (const t of e)
                if (t.name === s.EventNames.HeartbeatEventName) {
                    const e = t.extra;
                    super.onHeartbeatEventSent(0 != e.aslStats.length)
                }
        }
        async updateCrashReporterStats() {
            const e = await this.fetchState(r.AslState.CrashReporterLastReport),
                t = new Date(1e3 * e),
                n = d.crashReporter.getUploadedReports();
            if (n.length) {
                n.sort((e, t) => t.date.getTime() - e.date.getTime());
                let e = 0;
                for (const a of n) {
                    if (a.date <= t) break;
                    e++
                }
                if (e) {
                    this.incrementStat(r.AslStat.CrashReporterUploads, e);
                    const t = n[0];
                    this.setState(r.AslState.CrashReporterLastReport, this.getUtcSecSinceEpoch(t.date))
                }
            }
        }
        async fetchAslList() {
            return this._native.fetchAslList(this._appName)
        }
        validateLatchInfo(e) {
            const t = new Map([
                [r.AslState.PigeonEventsOutstanding, r.AslStat.PigeonEventsDropped]
            ]);
            for (const e of this._trackedEvents.values()) t.set(e.outstandingState, e.droppedStat);
            for (const n of t) e.get(n[0]) != n[1] && this.logError(`ASL: JS crash state not added to or does not match native table! ${n[0]}/${n[1]}`)
        }
    }
    var p = new S;
    t.default = p
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && r(e[a], t, n)
    }

    function r(e, t, n) {
        "function" == typeof e && !1 !== e.level && s(n.levels, e.level, t.level) && (t = function(e, t, n) {
            if (!e || !e.length) return n;
            for (var a = 0; a < e.length && (n = e[a](n, t)); a++);
            return n
        }(n.hooks, e, t)) && e(t)
    }

    function s(e, t, n) {
        var a = e.indexOf(t),
            r = e.indexOf(n);
        return -1 === r || -1 === a || r <= a
    }
    e.exports = {
        compareLevels: s,
        log: function(e, t) {
            var n = e.transports,
                r = {
                    data: Array.prototype.slice.call(arguments, 2),
                    date: new Date,
                    level: t,
                    variables: e.variables
                };
            a(n, r, e)
        },
        runTransport: r,
        runTransports: a
    }
}, function(e, t) {
    e.exports = require("os")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isProduction = function() {
        return a.isPackaged
    }, t.app = void 0;
    const a = n(0).app || n(0).remote.app;
    t.app = a
}, function(e, t, n) {
    "use strict";
    var a = n(6);

    function r(e, t) {
        if (t instanceof Error) {
            var n = Object.assign({
                constructor: t.constructor && t.constructor.name || "Error"
            }, t, {
                stack: t.stack
            });
            return n.stack || (n.message = t.message), t.constructor && t.constructor.name && (n.constructor = t.constructor.name), n
        }
        return t ? "function" == typeof t.toJSON ? t.toJSON() : "function" == typeof t ? "[function] " + t.toString() : t : t
    }
    e.exports = {
        maxDepthFactory: function(e) {
            return e = e || 6,
                function(t) {
                    return function e(t, n) {
                        if (!t) return t;
                        if (n < 1) return t.map ? "[array]" : "object" == typeof t ? "[object]" : t;
                        if ("function" == typeof t.map) return t.map((function(t) {
                            return e(t, n - 1)
                        }));
                        if ("object" != typeof t) return t;
                        if (t && "function" == typeof t.toISOString) return t;
                        if (null === t) return null;
                        if (t instanceof Error) return t;
                        var a = {};
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (a[r] = e(t[r], n - 1));
                        return a
                    }(t, e)
                }
        },
        serialize: r,
        toJSON: function(e) {
            return JSON.parse(JSON.stringify(e, r))
        },
        toString: function(e) {
            var t = e.map((function(e) {
                if (void 0 !== e) return JSON.parse(JSON.stringify(e, r, "  "))
            }));
            return a.format.apply(a, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const t = e ? r.default.resolve(__dirname, "..") : r.default.resolve(__dirname, "..", "..", "..", "build"),
            n = __dirname,
            a = r.default.resolve(__dirname, ".."),
            s = r.default.resolve(__dirname, "..", "..");
        return {
            buildDir: t,
            mainDir: n,
            srcDir: a,
            rootDir: s
        }
    };
    var a, r = (a = n(1)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AslBase = t.AslFile = void 0;
    var a = n(18),
        r = n(5),
        s = n(19);
    class o {
        constructor(e, t) {
            this._native = void 0, this._handle = void 0, this._flushTimer = void 0, this._native = e, this._handle = t, this._flushTimer = 0
        }
        async fetchState(e) {
            return (await this.fetchStates([e]))[0]
        }
        async fetchStates(e) {
            return this._native.fetchAslStates(this._handle, e)
        }
        setStates(e) {
            this.queueFlush();
            const t = [];
            for (const [n, a] of e) t.push(n, a);
            return this._native.setAslStates(this._handle, t)
        }
        incrementState(e, t) {
            return this.queueFlush(), this._native.incAslState(this._handle, e, t)
        }
        latchStatesToStats(e) {
            this.queueFlush();
            const t = [];
            for (const [n, a] of e) t.push(n, a);
            return this._native.latchAslStatesToStats(this._handle, t)
        }
        incrementStats(e) {
            this.queueFlush();
            const t = [];
            for (const [n, a] of e) t.push(n, a);
            return this._native.incAslStats(this._handle, t)
        }
        async fetchNonZeroStats() {
            const e = await this._native.fetchAslNonZeroStats(this._handle, r.AslStat.StatCount),
                t = new Map;
            for (let n = 0; n + 1 < e.length; n += 2) t.set(e[n], e[n + 1]);
            return t
        }
        flush() {
            return this._native.flushAsl(this._handle)
        }
        async close() {
            const e = this._handle;
            this._flushTimer && (clearTimeout(this._flushTimer), this._flushTimer = 0, await this._native.flushAsl(e)), this._handle = 0, await this._native.closeAsl(e)
        }
        fetchHeader() {
            return this._native.getAslHeader(this._handle)
        }
        latchOutstandingStatesToStats() {
            return this._native.latchOutstandingStatesToStats(this._handle)
        }
        queueFlush() {
            this._flushTimer || (this._flushTimer = setTimeout(() => {
                this._flushTimer = 0, this.flush()
            }, 3e5))
        }
    }
    t.AslFile = o;
    if (t.AslBase = class {
            constructor() {
                this._native = void 0, this._timeTracker = new s.TimeTracker(this), this._outstandingEvent = void 0, this._heartbeatSequence = 0
            }
            setProcessAslHandle(e, t) {
                if (this._native || this.getProcessAsl()) return void this.logError("ERR: Process ASL already initialized!");
                this._native = t, this.setProcessAsl(new o(this._native, e));
                const n = this._native.fetchLatchInfo(),
                    a = new Map;
                for (let e = 0; e + 1 < n.length; e += 2) a.set(n[e], n[e + 1]);
                this._timeTracker.validateCrashedStatesToLatch(a), this.validateLatchInfo(a), this.getProcessAsl().fetchHeader().then(e => {
                    this.checkValueMatch("stat max", e.statMax, r.AslStat.StatMax), this.checkValueMatch("stat cnt", e.statCount, r.AslStat.StatCount), this.checkValueMatch("state max", e.stateMax, r.AslState.StateMax), this.checkValueMatch("state cnt", e.stateCount, r.AslState.StateCount)
                })
            }
            async fetchState(e) {
                return this.getProcessAsl().fetchState(e)
            }
            fetchStates(e) {
                return this.getProcessAsl().fetchStates(e)
            }
            setState(e, t) {
                return this.setStates(new Map([
                    [e, t]
                ]))
            }
            setStates(e) {
                return this.getProcessAsl().setStates(e)
            }
            incrementState(e, t) {
                return this.getProcessAsl().incrementState(e, t)
            }
            latchStatesToStats(e) {
                return this.getProcessAsl().latchStatesToStats(e)
            }
            incrementStat(e, t) {
                return this.incrementStats(new Map([
                    [e, t]
                ]))
            }
            incrementStats(e) {
                return this.getProcessAsl().incrementStats(e)
            }
            fetchNonZeroStats() {
                return this.getProcessAsl().fetchNonZeroStats()
            }
            async getAslStatsForHeartbeat() {
                try {
                    if (this._heartbeatSequence++, this._outstandingEvent) return {
                        aslStats: [],
                        aslPrevBuildStats: []
                    };
                    await this.updateCrashReporterStats();
                    const e = {
                        reportedStats: {
                            rawStats: new Map,
                            aslStats: []
                        },
                        prevBuildAsls: new Map
                    };
                    e.reportedStats = await this.getAslStatsForFile(this.getProcessAsl());
                    const t = [];
                    if (!await this.fetchState(r.AslState.PrevBuildDataUploaded)) try {
                        const n = await this.getProcessAsl().fetchHeader(),
                            a = this.getBuildNumberFromAslPath(n.path),
                            s = await this.fetchAslList();
                        for (const n of s) try {
                            const s = this.getBuildNumberFromAslPath(n);
                            if (!s || s == a) continue;
                            const i = new o(this._native, await this._native.loadAsl(n));
                            if ((await i.fetchStates([r.AslState.LeftOverDataUploaded]))[0]) continue;
                            await i.latchOutstandingStatesToStats(), t.push([s.toString(), (await this.getAslStatsForFile(i)).aslStats]), e.prevBuildAsls.set(s, i)
                        } catch (e) {
                            this.logError(`ASL: Failed processing ${n}: ${e}`), this.incrementStat(r.AslStat.AslPrevBuildFileErrors, 1)
                        }
                    } catch (e) {
                        this.logError(`ASL: Failed prev build asl processing: ${e}`), this.incrementStat(r.AslStat.AslPrevBuildDataErrors, 1)
                    }
                    return this._outstandingEvent = e, {
                        aslStats: e.reportedStats.aslStats,
                        aslPrevBuildStats: t
                    }
                } catch (e) {
                    return this.logError(`ASL: Failed generating asl event data ${e}`), this.incrementStat(r.AslStat.AslEventErrors, 1), {
                        aslStats: [],
                        aslPrevBuildStats: []
                    }
                }
            }
            async onHeartbeatEventSent(e) {
                if (e) {
                    if (!this._outstandingEvent) return this.logError("ASL: No event context for heartbeat event with asl data!"), void this.incrementStat(r.AslStat.AslEventContextErrors, 1);
                    const e = this._outstandingEvent;
                    this._outstandingEvent = null, this.setState(r.AslState.PrevBuildDataUploaded, 1);
                    for (const t of e.prevBuildAsls.values()) t.setStates(new Map([
                        [r.AslState.LeftOverDataUploaded, 1]
                    ])), t.close();
                    const t = await this.fetchState(r.AslState.AslEventSequence);
                    this.setState(r.AslState.AslEventSequence, t + 1), this.setState(r.AslState.AslEventLastEpoch, this.getUtcSecSinceEpoch(new Date));
                    const n = e.reportedStats.rawStats,
                        a = new Map;
                    for (const [e, t] of n) a.set(e, -t);
                    this.incrementStats(a)
                } else this._outstandingEvent && (this.logError("ASL: Heartbeat without asl data but pending context!"), this._outstandingEvent = null, this.incrementStat(r.AslStat.AslEventContextErrors, 1))
            }
            startTrackingTime(e) {
                this._timeTracker.startTrackingTime(e)
            }
            stopTrackingTime(e) {
                this._timeTracker.stopTrackingTime(e)
            }
            stopTrackingTimeForGroup(e) {
                this._timeTracker.stopTrackingTimeForGroup(e)
            }
            getProcessAslPath() {
                return this.getProcessAslPathAsync()
            }
            async getProcessAslPathAsync() {
                return (await this.getProcessAsl().fetchHeader()).path
            }
            setProcessAsl(e) {
                globalThis.__processAsl = e
            }
            getProcessAsl() {
                return globalThis.__processAsl
            }
            checkValueMatch(e, t, n) {
                t != n && this.logError(`ASL: Native/JS mismatch on ${e}: ${t}/${n}`)
            }
            getUtcSecSinceEpoch(e) {
                return Math.floor(e.getTime() / 1e3)
            }
            async getAslStatsForFile(e) {
                const t = await e.fetchNonZeroStats(),
                    n = new Map;
                for (const [e, a] of t) n.set(r.AslStat[e], a);
                const [a, s, o, i] = await e.fetchStates([r.AslState.AslEventSequence, r.AslState.AppSequence, r.AslState.CurrentBootId, r.AslState.SecSinceBoot]);
                n.set(r.eventSequenceLabel, a + 1), n.set(r.appSequenceLabel, s), n.set(r.bootSequenceLabel, o), n.set(r.secSinceBootLabel, i);
                const c = await e.fetchStates([r.AslState.AslEventLastEpoch]),
                    l = this.getUtcSecSinceEpoch(new Date);
                let d = c[0] ? l - c[0] : 0;
                return n.set(r.secSinceLastLabel, d), n.set(r.heartbeatSequenceLabel, this._heartbeatSequence), n.set(r.clientUnixTimeLabel, this.getUtcSecSinceEpoch(new Date)), {
                    rawStats: t,
                    aslStats: [...n]
                }
            }
            getBuildNumberFromAslPath(e) {
                const t = (0, a.pathBaseName)(e, (0, a.pathExtName)(e));
                return parseInt(t) || 0
            }
        }, r.AslState.StateCount > r.AslState.StateMax) throw new Error("Asl state max need to be increased!");
    if (r.AslStat.StatCount > r.AslStat.StatMax) throw new Error("Asl stat max need to be increased!")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.pathExtName = function(e) {
        const t = /(\.[^\.\/\\]*)$/.exec(e);
        return t ? t[1] : ""
    }, t.pathBaseName = function(e, t) {
        const n = /(\/|\\)([^(\/|\\)]+)$/g.exec(e.replace(/(\/|\\)$/, ""));
        if (!n) return "";
        const a = n[2];
        if (t && e.substring(e.length - t.length).toLowerCase() === t.toLowerCase()) return a.substring(0, a.length - t.length);
        return a
    }, t.pathDirName = function(e) {
        return e.replace(/((.*)(\/|\\))?(.*?\..*$)?/, "$2")
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TimeTracker = void 0;
    var a = n(5);
    const r = [{
            timeStat: a.AslStat.AppInitializingTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.AppInitializingCount,
            parentStat: a.AslStat.AppStateChanges,
            crashStat: a.AslStat.AppDeathInitializing,
            outstandingState: a.AslState.AppInitializing
        }, {
            timeStat: a.AslStat.AppInteractiveTime,
            timeInSecStat: null,
            wallClockTimeStat: a.AslStat.AppInteractiveTimeWallClock,
            countStat: a.AslStat.AppInteractiveCount,
            parentStat: a.AslStat.AppStateChanges,
            crashStat: a.AslStat.AppDeathInteractive,
            outstandingState: a.AslState.AppInteractive
        }, {
            timeStat: a.AslStat.AppQuittingTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.AppQuittingCount,
            parentStat: a.AslStat.AppStateChanges,
            crashStat: a.AslStat.AppDeathQuitting,
            outstandingState: a.AslState.AppQuitting
        }, {
            timeStat: a.AslStat.RsysInCallContactingTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.RsysInCallContactingCount,
            parentStat: a.AslStat.RsysInCallStateChanges,
            crashStat: a.AslStat.AppDeathInRsysContacting,
            outstandingState: a.AslState.RsysInCallContacting
        }, {
            timeStat: a.AslStat.RsysInCallRingingIncomingTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.RsysInCallRingingIncomingCount,
            parentStat: a.AslStat.RsysInCallStateChanges,
            crashStat: a.AslStat.AppDeathInRsysRingingIncoming,
            outstandingState: a.AslState.RsysInCallRingingIncoming
        }, {
            timeStat: a.AslStat.RsysInCallRingingOutgoingTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.RsysInCallRingingOutgoingCount,
            parentStat: a.AslStat.RsysInCallStateChanges,
            crashStat: a.AslStat.AppDeathInRsysRingingOutgoing,
            outstandingState: a.AslState.RsysInCallRingingOutgoing
        }, {
            timeStat: a.AslStat.RsysInCallConnectingTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.RsysInCallConnectingCount,
            parentStat: a.AslStat.RsysInCallStateChanges,
            crashStat: a.AslStat.AppDeathInRsysConnecting,
            outstandingState: a.AslState.RsysInCallConnecting
        }, {
            timeStat: a.AslStat.RsysInCallPendingApprovalTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.RsysInCallPendingApprovalCount,
            parentStat: a.AslStat.RsysInCallStateChanges,
            crashStat: a.AslStat.AppDeathInRsysPendingApproval,
            outstandingState: a.AslState.RsysInCallPendingApproval
        }, {
            timeStat: a.AslStat.RsysInCallConnectedTime,
            timeInSecStat: null,
            wallClockTimeStat: null,
            countStat: a.AslStat.RsysInCallConnectedCount,
            parentStat: a.AslStat.RsysInCallStateChanges,
            crashStat: a.AslStat.AppDeathInRsysConnected,
            outstandingState: a.AslState.RsysInCallConnected
        }, {
            timeStat: a.AslStat.AppFocusTimeMs,
            timeInSecStat: a.AslStat.AppFocusTime,
            wallClockTimeStat: a.AslStat.AppFocusTimeWallClock,
            countStat: a.AslStat.AppFocusCount,
            parentStat: null,
            crashStat: a.AslStat.AppDeathInFocus,
            outstandingState: a.AslState.AppInFocus
        }, {
            timeStat: a.AslStat.ZenonRtcTimeMs,
            timeInSecStat: a.AslStat.ZenonRtcTime,
            wallClockTimeStat: null,
            countStat: a.AslStat.ZenonRtcEntered,
            parentStat: null,
            crashStat: a.AslStat.MainProcessAbnormalDeathInZenonRtc,
            outstandingState: a.AslState.ZenonRtcOutstanding
        }, {
            timeStat: a.AslStat.RsysRtcTimeMs,
            timeInSecStat: a.AslStat.RsysRtcTime,
            wallClockTimeStat: null,
            countStat: a.AslStat.RsysRtcEntered,
            parentStat: null,
            crashStat: a.AslStat.MainProcessAbnormalDeathInRsysRtc,
            outstandingState: a.AslState.RsysRtcOutstanding
        }],
        s = new Map;
    for (const e of r) s.set(e.timeStat, e);
    t.TimeTracker = class {
        constructor(e) {
            this._asl = void 0, this._snapshotTimer = 0, this._lastSnapshotTime = new Date, this._outstanding = new Map, this._asl = e
        }
        async startTrackingTime(e) {
            const t = this.findConfig(e);
            if (!t) return;
            const n = this.getKeyStat(t),
                a = this._outstanding.get(n);
            if (a) {
                if (a.config.timeStat == e) return;
                this.stopTrackingTime(a.config.timeStat)
            }
            const r = {
                config: t,
                startTime: new Date
            };
            this._outstanding.set(n, r), null != t.countStat && this._asl.incrementStat(t.countStat, 1), null != t.parentStat && this._asl.incrementStat(t.parentStat, 1), null != t.outstandingState && this._asl.setState(t.outstandingState, 1), this._snapshotTimer || (this._lastSnapshotTime = new Date, this._snapshotTimer = setInterval(this.snapshotTimes.bind(this), 5e3))
        }
        async stopTrackingTime(e) {
            const t = this.findConfig(e);
            if (!t) return;
            const n = this.getKeyStat(t),
                a = this._outstanding.get(n);
            if (!a) return void this._asl.logError("ASL: called stopTrackingTime for stat not outstanding: {$timeStat}");
            if (a.config.timeStat != e) return void this._asl.logError(`ASL: called stopTrackingTime for wrong stat in group: ${a.config.timeStat} vs ${e}`);
            this._outstanding.delete(n), this._outstanding.size || (clearInterval(this._snapshotTimer), this._snapshotTimer = 0);
            const r = new Date;
            this.captureTimeToAsl(a, r), null != t.outstandingState && this._asl.setState(t.outstandingState, 0)
        }
        async stopTrackingTimeForGroup(e) {
            const t = this._outstanding.get(e);
            t ? (null == t.config.parentStat && this._asl.logError(`ASL: called stopTrackingTimeForGroup for individual stat: ${e}`), this.stopTrackingTime(t.config.timeStat)) : this._asl.logError(`ASL: called stopTrackingTimeForGroup for group not being tracked: ${e}`)
        }
        endAllTracking() {
            const e = this._outstanding.values();
            for (const t of e) this.stopTrackingTime(t.config.timeStat);
            (this._outstanding.size || this._snapshotTimer) && this._asl.logError(`ASL: endAllTracking did not clear all outstanding ${this._outstanding.size} or timer...`)
        }
        validateCrashedStatesToLatch(e) {
            for (const t of r) null != t.outstandingState && null != t.crashStat && e.get(t.outstandingState) != t.crashStat && this._asl.logError(`ASL: time tracker crash state not added to or does not match native table! ${t.outstandingState}/${t.crashStat}`)
        }
        captureTimeToAsl(e, t) {
            let n = t.getTime() - e.startTime.getTime();
            e.startTime = t, n < 0 && (n = 0), null != e.config.wallClockTimeStat && this._asl.incrementStat(e.config.wallClockTimeStat, n), n > 6e3 && (this._asl.incrementStat(a.AslStat.AslTimeClippedToPeriodRange, 1), n = 6e3), this._asl.incrementStat(e.config.timeStat, n), null != e.config.timeInSecStat && n >= 1e3 && this._asl.incrementStat(e.config.timeInSecStat, n / 1e3)
        }
        getUtcSecSinceEpoch() {
            return Math.floor((new Date).getTime() / 1e3)
        }
        snapshotTimes() {
            this._asl.setState(a.AslState.LastSnapshotEpoch, this.getUtcSecSinceEpoch());
            const e = new Date,
                t = e.getTime() - this._lastSnapshotTime.getTime();
            this._lastSnapshotTime = e, t > 6e3 && this._asl.incrementStat(a.AslStat.AslTimerOutOfPeriodRange, 1);
            for (const t of this._outstanding.values()) this.captureTimeToAsl(t, e)
        }
        findConfig(e) {
            const t = s.get(e);
            return t || this._asl.logError("ASL: Need to add config for tracking timeStat " + e), t
        }
        getKeyStat(e) {
            return null != e.parentStat ? e.parentStat : e.timeStat
        }
    }
}, function(e, t, n) {
    "use strict";
    let a, r, s, o, i;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AppStartEvent = function(e) {
            return {
                name: i.AppStartEventName,
                launchType: e.launchType,
                launchContext: e.launchContext,
                ...e.machineInfo,
                operatingSystem: e.operatingSystem,
                accessibility: e.accessibility,
                preInstallSource: e.preInstallSource,
                preferredLocaleKey: e.preferredLocaleKey
            }
        }, t.ClientAuthenticationEvent = function(e) {
            return {
                name: "messenger_desktop_client_authentication",
                ...e,
                context: e.context || {}
            }
        }, t.IncomingMessageReadEvent = function(e) {
            return {
                name: "messenger_desktop_client_incoming_message_read",
                threadKey: e.threadKey,
                isThreadFocused: e.isThreadFocused,
                messageId: e.message.messageId,
                sentTimestamp: e.message.timestampMs,
                readTimestamp: Date.now()
            }
        }, t.MessageSendFailedEvent = function(e) {
            return {
                name: "messenger_desktop_client_message_send_failed",
                isThreadFocused: !0,
                ...e
            }
        }, t.OsmetaUpgradeErrorEvent = function(e) {
            return {
                name: "messenger_desktop_client_osmeta_upgrade_error",
                ...e
            }
        }, t.MessageSendEvent = function(e) {
            return {
                name: "messenger_desktop_client_message_send",
                isThreadFocused: !0,
                ...e
            }
        }, t.UserInteractionEvent = function(e) {
            return {
                name: i.UserInteractionEventName,
                event: e.event,
                target: e.target,
                surface: e.surface,
                context: e.context || {}
            }
        }, t.PerformanceEvent = function(e) {
            return {
                name: i.PerformanceEventName,
                scenarioName: e.scenarioName,
                scenarioStart: e.start,
                scenarioEnd: e.end,
                scenarioDuration: e.duration,
                splits: e.splits
            }
        }, t.WatchdogRunEvent = function(e) {
            return {
                name: "messenger_desktop_client_watchdog_run",
                ...e
            }
        }, t.HeartbeatEvent = function(e) {
            return {
                name: i.HeartbeatEventName,
                ...e
            }
        }, t.NotificationEvent = function(e) {
            return {
                name: "messenger_desktop_notification",
                ...e
            }
        }, t.ImpressionEvent = function(e) {
            return {
                name: "messenger_desktop_client_impressions",
                ...e,
                context: e.context || {}
            }
        }, t.SettingChangedEvent = function(e) {
            return {
                name: "messenger_desktop_client_setting_changed",
                ...e
            }
        }, t.MsysStatsEvent = function(e) {
            return {
                name: "messenger_desktop_client_msys_stats",
                ...e
            }
        }, t.ClientAutoUpdaterEvent = function(e) {
            return {
                name: "messenger_desktop_client_autoupdater",
                ...e
            }
        }, t.NativeSSLValidationFailureEvent = function(e) {
            return {
                name: "messenger_desktop_ssl_error",
                ...e
            }
        }, t.AuthenticationFailureEvent = function(e) {
            return {
                name: "messenger_desktop_client_auth_failures",
                ...e
            }
        }, t.MessengerRoomEvent = function(e) {
            return {
                name: "messenger_desktop_client_room_event",
                ...e
            }
        }, t.ExperimentImpressionEvent = function(e, t) {
            if (!e.conditionFBID) throw new Error("Cannot log impression for incomplete ExperimentConfig, impressionFBID missing.");
            return {
                name: "qe2_log_exposure",
                unit_id: t,
                auto_exposure: !0 === e.autoLogExposure,
                cond_fbid: e.conditionFBID
            }
        }, t.WindowsStartupTaskEvent = function(e) {
            return {
                name: "messenger_desktop_client_windows_startup_task",
                ...e
            }
        }, t.NativeRtcEvent = function(e) {
            return {
                name: "messenger_desktop_client_native_rtc",
                ...e
            }
        }, t.DeeplinkEvent = function(e) {
            return {
                name: "messenger_desktop_deeplink_event",
                event_location: "client",
                ...e
            }
        }, t.RtcStarRatingShownEvent = function(e) {
            return {
                name: "ls_rtc_star_rating_shown",
                ...e
            }
        }, t.NavigationEvent = function(e) {
            return {
                name: "navigation",
                ...e
            }
        }, t.TimeSpentBitArrayEvent = function(e) {
            return {
                name: "time_spent_bit_array",
                ...e
            }
        }, t.AppStateEvent = function(e) {
            return {
                name: "app_state",
                ...e
            }
        }, t.EventNames = t.AppCodename = t.AppState = t.NativeRtcEvents = t.DeeplinkEvents = void 0, t.DeeplinkEvents = a,
        function(e) {
            e.RECEIVED_LOCALHOST_DEEPLINK = "receive_localhost_deeplink", e.FETCHING_DECRYPTED_PAYLOAD = "fetching_decrypted_payload", e.RECEIVED_DECRYPTED_PAYLOAD = "received_decrypted_payload", e.INVALID_LOCALHOST_DEEPLINK = "invalid_localhost_deeplink", e.LOCALHOST_DEEPLINK_ACTION_COMPLETED = "localhost_deeplink_action_completed", e.RECEIVED_CUSTOM_PROTOCOL_DEEPLINK = "received_custom_protocol_deeplink", e.INVALID_CUSTOM_PROTOCOL_DEEPLINK = "invalid_custom_protocol_deeplink", e.CUSTOM_PROTOCOL_DEEPLINK_ACTION_COMPLETED = "custom_protocol_deeplink_action_completed"
        }(a || (t.DeeplinkEvents = a = {})), t.NativeRtcEvents = r,
        function(e) {
            e.APPROOT_START = "approot_start", e.UI_ERROR = "ui_error", e.PARTICIPANT_RENDER = "participant_render", e.MEDIA_ACCESS_ERROR = "media_access_error", e.SCREEN_SHARE_MEDIA_ACCESS_ERROR = "screen_share_media_access_error", e.OUT_OF_SYNC_CALL_ENDED = "out_of_sync_call_ended", e.GATEKEEPERS_UNDEFINED = "gatekeepers_undefined", e.GATEKEEPER_NOT_FOUND = "gatekeeper_not_found", e.ALREADY_IN_CALL = "already_in_call", e.I18N_LOADED_TRANSLATIONS = "i18n_loaded_translations", e.I18N_ERROR = "i18n_error", e.MEDIA_ISSUES_FROM_PARTICIPANT = "media_issues_from_participant", e.AUDIO_DEVICES_LOAD_SETTING = "audio_devices_load_setting", e.AUDIO_DEVICES_SELECT = "audio_devices_select", e.AUDIO_DEVICES_UPDATED = "audio_devices_updated", e.INCALL_NOTIFICATION_ADD_ITEM = "incall_notification_add_item", e.INCALL_NOTIFICATION_REMOVE_ITEM = "incall_notification_remove_item", e.NETWORK_INDICATOR_SHOWN = "network_indicator_shown"
        }(r || (t.NativeRtcEvents = r = {})), t.AppState = s,
        function(e) {
            e.FOREGROUND = "foreground", e.BACKGROUND = "background", e.ACTIVE = "active", e.RESIGN = "resign", e.SHUTDOWN = "shutdown", e.LAUNCH = "launch"
        }(s || (t.AppState = s = {})), t.AppCodename = o,
        function(e) {
            e.Archon = "archon", e.Zeratul = "zeratul"
        }(o || (t.AppCodename = o = {})), t.EventNames = i,
        function(e) {
            e.AppStartEventName = "messenger_desktop_client_appstart", e.UserInteractionEventName = "messenger_desktop_client_user_interaction", e.PerformanceEventName = "messenger_desktop_client_performance", e.HeartbeatEventName = "messenger_desktop_client_heartbeat"
        }(i || (t.EventNames = i = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.revision = t.branch = t.timestamp = t.number = t.buildType = void 0;
    t.buildType = "official";
    t.number = "332019425";
    t.timestamp = 1636631872664;
    t.branch = "releases/release-archon-messenger-2021.05.10";
    t.revision = "41779b2736e8ee95b1a9147baf5cf8e8b9d934f4"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.assetsDir = t.rootDir = t.srcDir = t.htmlDir = t.bridgeDir = t.mainDir = t.intlDir = t.buildDir = void 0;
    var a, r = n(14),
        s = (a = n(1)) && a.__esModule ? a : {
            default: a
        };
    const o = (0, r.isProduction)() ? s.default.resolve(__dirname, "..") : s.default.resolve(__dirname, "..", "..", "..", "build");
    t.buildDir = o;
    const i = (0, r.isProduction)() ? s.default.resolve(__dirname, "..", "..", "intl") : s.default.resolve(__dirname, "..", "..", "..", "intl");
    t.intlDir = i;
    const c = __dirname;
    t.mainDir = c;
    const l = (0, r.isProduction)() ? s.default.resolve(o, "main") : s.default.resolve(__dirname, "..", "..", "bridge", "src");
    t.bridgeDir = l;
    const d = (0, r.isProduction)() ? o : s.default.resolve(__dirname, "..", "html");
    t.htmlDir = d;
    const u = s.default.resolve(__dirname, "..");
    t.srcDir = u;
    const h = s.default.resolve(__dirname, "..", "..");
    t.rootDir = h;
    const S = (0, r.isProduction)() ? s.default.resolve(__dirname, "..", "..", "assets") : s.default.resolve(__dirname, "..", "..", "..", "assets");
    t.assetsDir = S
}, function(e, t, n) {
    "use strict";
    var a = n(7),
        r = !1;
    e.exports = function(e) {
        return r ? {
            stop: i
        } : (r = !0, "renderer" === process.type ? (window.addEventListener("error", s), window.addEventListener("unhandledrejection", o)) : (process.on("uncaughtException", t), process.on("unhandledRejection", n)), {
            stop: i
        });

        function t(t) {
            try {
                if ("function" == typeof e.onError && !1 === e.onError(t)) return;
                if (e.log(t), e.showDialog && t.name.indexOf("UnhandledRejection") < 0) {
                    var n = process.type || "main";
                    a.showErrorBox("A JavaScript error occurred in the " + n + " process", t.stack)
                }
            } catch (e) {
                console.error(t)
            }
        }

        function n(e) {
            if (e instanceof Error) {
                var n = "UnhandledRejection " + e.name,
                    a = Object.getPrototypeOf(e),
                    r = Object.getOwnPropertyDescriptor(a, "name");
                return r && r.writable || (e = new Error(e.message)), e.name = n, void t(e)
            }
            var s = new Error(JSON.stringify(e));
            s.name = "UnhandledRejection", t(s)
        }

        function s(e) {
            e.preventDefault(), t(e.error)
        }

        function o(e) {
            e.preventDefault(), n(e.reason)
        }

        function i() {
            r = !1, "renderer" === process.type ? (window.removeEventListener("error", s), window.removeEventListener("unhandledrejection", o)) : (process.removeListener("uncaughtException", t), process.removeListener("unhandledRejection", n))
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(8),
        r = {
            context: console,
            error: console.error,
            warn: console.warn,
            info: console.info,
            verbose: console.verbose,
            debug: console.debug,
            silly: console.silly,
            log: console.log
        };
    e.exports = function() {
        return e.level = "silly", e.forceStyles = Boolean(process.env.FORCE_STYLES), e.format = s[process.type] || s.browser, e;

        function e(t) {
            if ("renderer" !== process.type && "worker" !== process.type) {
                var n, r, c, l = e.forceStyles || (n = t.level, (r = "error" === n || "warn" === n ? process.stderr : process.stdout) && r.isTTY),
                    d = a.transform(t, [(c = e.format, function(e, t) {
                        return c !== s.browser ? e : ["color:" + i(t.level), "color:unset"].concat(e)
                    }), a.customFormatterFactory(e.format), l ? a.applyAnsiStyles : a.removeStyles, a.maxDepthFactory(10), a.toJSON]);
                o(t.level, d)
            } else {
                var u = a.transform(t, [a.customFormatterFactory(e.format)]);
                o(t.level, u)
            }
        }
    };
    var s = {
        browser: "%c{h}:{i}:{s}.{ms}%c " + ("win32" === process.platform ? ">" : "›") + " {text}",
        renderer: "{h}:{i}:{s}.{ms} › {text}",
        worker: "{h}:{i}:{s}.{ms} › {text}"
    };

    function o(e, t) {
        r[e] ? r[e].apply(r.context, t) : r.log.apply(r.context, t)
    }

    function i(e) {
        switch (e) {
            case "error":
                return "red";
            case "warn":
                return "yellow";
            case "info":
                return "cyan";
            default:
                return "unset"
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports = {
        applyAnsiStyles: function(e) {
            return o(e, r, s)
        },
        removeStyles: function(e) {
            return o(e, (function() {
                return ""
            }))
        },
        transformStyles: o
    };
    var a = {
        unset: "[0m",
        black: "[30m",
        red: "[31m",
        green: "[32m",
        yellow: "[33m",
        blue: "[34m",
        magenta: "[35m",
        cyan: "[36m",
        white: "[37m"
    };

    function r(e) {
        var t = e.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
        return a[t] || ""
    }

    function s(e) {
        return e + a.unset
    }

    function o(e, t, n) {
        var a = 0;
        return e.reduce((function(e, r, s, o) {
            return a > 0 ? (a -= 1, e) : ("string" == typeof r && (r = r.replace(/%c/g, (function(e) {
                var n = o[s + (a += 1)];
                return n ? t(n, r) : e
            })), a > 0 && n && (r = n(r))), e.push(r), e)
        }), [])
    }
}, function(e, t, n) {
    "use strict";
    var a = n(15);

    function r(e, t) {
        return e.replace("{y}", String(t.getFullYear())).replace("{m}", o(t.getMonth() + 1)).replace("{d}", o(t.getDate())).replace("{h}", o(t.getHours())).replace("{i}", o(t.getMinutes())).replace("{s}", o(t.getSeconds())).replace("{ms}", o(t.getMilliseconds(), 3)).replace("{z}", s(t.getTimezoneOffset())).replace("{iso}", t.toISOString())
    }

    function s(e) {
        var t = Math.abs(e);
        return (e >= 0 ? "-" : "+") + o(Math.floor(t / 60)) + ":" + o(t % 60)
    }

    function o(e, t) {
        return t = t || 2, (new Array(t + 1).join("0") + e).substr(-t, t)
    }
    e.exports = {
        formatDate: r,
        formatTimeZone: s,
        pad: o,
        templateDate: function(e, t) {
            var n = e[0];
            if ("string" != typeof n) return e;
            return e[0] = r(n, t.date), e
        },
        templateVariables: function(e, t) {
            var n = e[0],
                a = t.variables;
            if ("string" != typeof n || !t.variables) return e;
            for (var r in a) Object.prototype.hasOwnProperty.call(a, r) && (n = n.replace("{" + r + "}", a[r]));
            return n = n.replace("{level}", t.level), e[0] = n, e
        },
        templateText: function(e) {
            var t = e[0];
            if ("string" != typeof t) return e;
            if (t.lastIndexOf("{text}") === t.length - 6) return e[0] = t.replace(/\s?{text}/, ""), e;
            return [t.replace("{text}", a.toString(e.slice(1)))]
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(3),
        r = n(1),
        s = n(6),
        o = n(8),
        i = n(28).FileRegistry,
        c = n(30);
    e.exports = function(e, t) {
        var n = c.getPathVariables(process.platform),
            i = t || l;
        return i.on("error", (function(e, t) {
                u("Can't write to " + t, e)
            })), d.archiveLog = function(e) {
                var t = e.toString(),
                    n = r.parse(t);
                try {
                    a.renameSync(t, r.join(n.dir, n.name + ".old" + n.ext))
                } catch (t) {
                    u("Could not rotate log", t);
                    var s = Math.round(d.maxSize / 4);
                    e.crop(Math.min(s, 262144))
                }
            }, d.fileName = function() {
                switch (process.type) {
                    case "renderer":
                        return "renderer.log";
                    case "worker":
                        return "worker.log";
                    default:
                        return "main.log"
                }
            }(), d.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}", d.getFile = h, d.level = "silly", d.maxSize = 1048576, d.resolvePath = function(e) {
                return r.join(e.libraryDefaultDir, e.fileName)
            }, d.sync = !0, d.writeOptions = {
                flag: "a",
                mode: 438,
                encoding: "utf8"
            },
            function() {
                var e = " is deprecated and will be removed in v5.",
                    t = " property" + e;

                function n() {
                    return h().path
                }
                Object.defineProperties(d, {
                    bytesWritten: {
                        get: s.deprecate((function() {
                            return h().bytesWritten
                        }), "bytesWritten" + t)
                    },
                    file: {
                        get: s.deprecate(n, "file" + t),
                        set: s.deprecate((function(e) {
                            d.resolvePath = function() {
                                return e
                            }
                        }), "file" + t)
                    },
                    fileSize: {
                        get: s.deprecate((function() {
                            return h().size
                        }), "file" + t)
                    }
                }), d.clear = s.deprecate((function() {
                    h().clear()
                }), "clear()" + e), d.findLogPath = s.deprecate(n, "findLogPath()" + e), d.init = s.deprecate((function() {}), "init()" + e)
            }(), d;

        function d(e) {
            var t = h(e);
            d.maxSize > 0 && t.size > d.maxSize && (d.archiveLog(t), t.reset());
            var n = o.transform(e, [o.removeStyles, o.customFormatterFactory(d.format), o.maxDepthFactory(10), o.toString]);
            t.writeLine(n)
        }

        function u(t, n) {
            var a = ["electron-log.transports.file: " + t];
            n && a.push(n), e.transports.console({
                data: a,
                date: new Date,
                level: "warn"
            })
        }

        function h(e) {
            var t = Object.assign({}, n, {
                    fileName: d.fileName
                }),
                a = d.resolvePath(t, e);
            return i.provide(a, d.writeOptions, !d.sync)
        }
    };
    var l = new i
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        r = n(3),
        s = n(13),
        o = n(1),
        i = n(6),
        c = Number(process.version.match(/^v(\d+\.\d+)/)[1].replace(/\.(\d)$/, ".0$1"));

    function l(e, t, n) {
        a.call(this), this.path = e, this.initialSize = void 0, this.bytesWritten = 0, this.writeAsync = Boolean(n), this.asyncWriteQueue = [], this.writeOptions = t || {
            flag: "a",
            mode: 438,
            encoding: "utf8"
        }, Object.defineProperty(this, "size", {
            get: this.getSize.bind(this)
        })
    }

    function d(e) {
        l.call(this, e)
    }

    function u() {
        a.call(this), this.store = {}, this.emitError = this.emitError.bind(this)
    }
    e.exports = {
        File: l,
        FileRegistry: u,
        NullFile: d
    }, i.inherits(l, a), l.prototype.clear = function() {
        try {
            return r.writeFileSync(this.path, "", {
                mode: this.writeOptions.mode,
                flag: "w"
            }), this.reset(), !0
        } catch (e) {
            return "ENOENT" === e.code || (this.emit("error", e, this), !1)
        }
    }, l.prototype.crop = function(e) {
        try {
            var t = (n = this.path, a = e || 4096, o = Buffer.alloc(a), i = r.statSync(n), c = Math.min(i.size, a), l = Math.max(0, i.size - a), d = r.openSync(n, "r"), u = r.readSync(d, o, 0, c, l), r.closeSync(d), o.toString("utf8", 0, u));
            this.clear(), this.writeLine("[log cropped]" + s.EOL + t)
        } catch (e) {
            this.emit("error", new Error("Couldn't crop file " + this.path + ". " + e.message), this)
        }
        var n, a, o, i, c, l, d, u
    }, l.prototype.toString = function() {
        return this.path
    }, l.prototype.reset = function() {
        this.initialSize = void 0, this.bytesWritten = 0
    }, l.prototype.writeLine = function(e) {
        if (e += s.EOL, this.writeAsync) return this.asyncWriteQueue.push(e), void this.nextAsyncWrite();
        try {
            r.writeFileSync(this.path, e, this.writeOptions), this.increaseBytesWrittenCounter(e)
        } catch (e) {
            this.emit("error", new Error("Couldn't write to " + this.path + ". " + e.message), this)
        }
    }, l.prototype.getSize = function() {
        if (void 0 === this.initialSize) try {
            var e = r.statSync(this.path);
            this.initialSize = e.size
        } catch (e) {
            this.initialSize = 0
        }
        return this.initialSize + this.bytesWritten
    }, l.prototype.isNull = function() {
        return !1
    }, l.prototype.increaseBytesWrittenCounter = function(e) {
        this.bytesWritten += Buffer.byteLength(e, this.writeOptions.encoding)
    }, l.prototype.nextAsyncWrite = function() {
        var e = this;
        if (!(this.asyncWriteQueue.length < 1)) {
            var t = this.asyncWriteQueue.shift();
            r.writeFile(this.path, t, this.writeOptions, (function(n) {
                n ? e.emit("error", new Error("Couldn't write to " + e.path + ". " + n.message), this) : e.increaseBytesWrittenCounter(t), e.nextAsyncWrite()
            }))
        }
    }, i.inherits(d, l), d.prototype.clear = function() {}, d.prototype.crop = function() {}, d.prototype.writeLine = function() {}, d.prototype.getSize = function() {
        return 0
    }, d.prototype.isNull = function() {
        return !0
    }, i.inherits(u, a), u.prototype.provide = function(e, t, n) {
        var a;
        try {
            if (e = o.resolve(e), this.store[e]) return this.store[e];
            a = this.createFile(e, t, Boolean(n))
        } catch (t) {
            a = new d(e), this.emitError(t, a)
        }
        return a.on("error", this.emitError), this.store[e] = a, a
    }, u.prototype.createFile = function(e, t, n) {
        return this.testFileWriting(e), new l(e, t, n)
    }, u.prototype.emitError = function(e, t) {
        this.emit("error", e, t)
    }, u.prototype.testFileWriting = function(e) {
        ! function e(t) {
            if (c >= 10.12) return r.mkdirSync(t, {
                recursive: !0
            }), !0;
            try {
                return r.mkdirSync(t), !0
            } catch (n) {
                if ("ENOENT" === n.code) return e(o.dirname(t)) && e(t);
                try {
                    if (r.statSync(t).isDirectory()) return !0;
                    throw n
                } catch (e) {
                    throw e
                }
            }
        }(o.dirname(e)), r.writeFileSync(e, "", {
            flag: "a"
        })
    }
}, function(e, t) {
    e.exports = require("events")
}, function(e, t, n) {
    "use strict";
    var a = n(13),
        r = n(1),
        s = n(7),
        o = n(31);

    function i(e) {
        var t = s.getPath("appData");
        if (t) return t;
        var n = c();
        switch (e) {
            case "darwin":
                return r.join(n, "Library/Application Support");
            case "win32":
                return process.env.APPDATA || r.join(n, "AppData/Roaming");
            default:
                return process.env.XDG_CONFIG_HOME || r.join(n, ".config")
        }
    }

    function c() {
        return a.homedir ? a.homedir() : process.env.HOME
    }

    function l(e, t) {
        return "darwin" === e ? r.join(c(), "Library/Logs", t) : r.join(h(e, t), "logs")
    }

    function d(e) {
        return "darwin" === e ? r.join(c(), "Library/Logs", "{appName}") : r.join(i(e), "{appName}", "logs")
    }

    function u() {
        var e = s.getName(),
            t = s.getVersion();
        if (e && t) return {
            name: e,
            version: t
        };
        var n = o.readPackageJson();
        return e || (e = n.name), t || (t = n.version), {
            name: e,
            version: t
        }
    }

    function h(e, t) {
        return s.getPath("userData") || r.join(i(e), t)
    }
    e.exports = {
        getAppData: i,
        getLibraryDefaultDir: l,
        getLibraryTemplate: d,
        getNameAndVersion: u,
        getPathVariables: function(e) {
            var t = u(),
                n = t.name,
                r = t.version;
            return {
                appData: i(e),
                appName: n,
                appVersion: r,
                electronDefaultDir: s.getPath("logs"),
                home: c(),
                libraryDefaultDir: l(e, n),
                libraryTemplate: d(e),
                temp: s.getPath("temp") || a.tmpdir(),
                userData: h(e, n)
            }
        },
        getUserData: h
    }
}, function(e, t, n) {
    "use strict";
    var a = n(3),
        r = n(1);

    function s(e) {
        try {
            var t = o("package.json", e = r.join.apply(r, arguments));
            if (!t) return null;
            var n = JSON.parse(a.readFileSync(t, "utf8")),
                s = n.productName || n.name;
            if (!s || "electron" === s.toLowerCase()) return null;
            if (n.productName || n.name) return {
                name: s,
                version: n.version
            }
        } catch (e) {
            return null
        }
    }

    function o(e, t) {
        for (var n = t;;) {
            var s = r.parse(n),
                o = s.root,
                i = s.dir;
            if (a.existsSync(r.join(n, e))) return r.resolve(r.join(n, e));
            if (n === o) return null;
            n = i
        }
    }
    e.exports = {
        readPackageJson: function() {
            return s(n.c[n.s] && n.c[n.s].filename) || s(process.resourcesPath, "app.asar") || s(process.cwd()) || {
                name: null,
                version: null
            }
        },
        tryReadJsonAt: s
    }
}, function(e, t, n) {
    "use strict";
    var a = n(8),
        r = n(7),
        s = n(12);
    e.exports = function(e) {
        if (t.eventId = "__ELECTRON_LOG_IPC_" + e.logId + "__", t.level = !!e.isDev && "silly", r.isIpcChannelListened(t.eventId)) return function() {};
        return r.onIpc(t.eventId, (function(t, n) {
            n.date = new Date(n.date), s.runTransport(e.transports.console, n, e)
        })), r.loadRemoteModule("electron-log"), r.isElectron() ? t : null;

        function t(e) {
            var n = Object.assign({}, e, {
                data: a.transform(e, [a.removeStyles, a.maxDepthFactory(), a.toJSON])
            });
            r.sendIpc(t.eventId, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(34),
        r = n(35),
        s = n(36),
        o = n(12),
        i = n(8);
    e.exports = function(e) {
        return t.client = {
            name: "electron-application"
        }, t.depth = 6, t.level = !1, t.requestOptions = {}, t.url = null, t;

        function t(n) {
            t.url && function(e, t, n) {
                var o = s.parse(e),
                    i = "https:" === o.protocol ? r : a,
                    c = JSON.stringify(n),
                    l = {
                        hostname: o.hostname,
                        port: o.port,
                        path: o.path,
                        method: "POST",
                        headers: {
                            "Content-Length": c.length,
                            "Content-Type": "application/json"
                        }
                    };
                Object.assign(l, t);
                var d = i.request(l);
                return d.write(c), d.end(), d
            }(t.url, t.requestOptions, {
                client: t.client,
                data: i.transform(n, [i.removeStyles, i.toJSON, i.maxDepthFactory(t.depth + 1)]),
                date: n.date.getTime(),
                level: n.level,
                variables: n.variables
            }).on("error", (function(n) {
                var a = {
                        data: ["electron-log.transports.remote: cannot send HTTP request to " + t.url, n],
                        date: new Date,
                        level: "warn"
                    },
                    r = [e.transports.console, e.transports.ipc, e.transports.file];
                o.runTransports(r, a, e)
            }))
        }
    }
}, function(e, t) {
    e.exports = require("http")
}, function(e, t) {
    e.exports = require("https")
}, function(e, t) {
    e.exports = require("url")
}, function(e, t, n) {
    "use strict";
    let a;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.LogLevel = void 0, t.LogLevel = a,
        function(e) {
            e[e.DBG = 1e3] = "DBG", e[e.INFO = 2e3] = "INFO", e[e.WARN = 3e3] = "WARN", e[e.ERR = 4e3] = "ERR", e[e.CRITICAL = 5e3] = "CRITICAL", e[e.DFATAL = 2147483646] = "DFATAL", e[e.FATAL = 2147483647] = "FATAL"
        }(a || (t.LogLevel = a = {}))
}, function(e, t, n) {
    var a = n(64);
    e.exports = function() {
        return a.randomBytes(16)
    }
}, function(e, t) {
    for (var n = [], a = 0; a < 256; ++a) n[a] = (a + 256).toString(16).substr(1);
    e.exports = function(e, t) {
        var a = t || 0,
            r = n;
        return [r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], "-", r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]], r[e[a++]]].join("")
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TimeSpentChannel = t.PerformanceChannel = t.PromotionChannel = t.MetricsChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        trackStrictEvent: a.createFireAndForgetChannel("MetricsChannel/trackStrictEvent"),
        trackStrictEvents: a.createFireAndForgetChannel("MetricsChannel/trackStrictEvents"),
        trackRawMsysEvent: a.createFireAndForgetChannel("MetricsChannel/trackRawMsysEvent"),
        trackExperimentImpressions: a.createFireAndForgetChannel("MetricsChannel/trackExperimentImpressions"),
        trackStrictError: a.createFireAndForgetChannel("MetricsChannel/trackStrictError")
    };
    t.MetricsChannel = s;
    const o = {
        getPromotionForUser: a.createAsyncChannel("PromotionChannel/getPromotionForUser"),
        markPromotionImpression: a.createFireAndForgetChannel("PromotionChannel/markPromotionImpression"),
        markPromotionAction: a.createFireAndForgetChannel("PromotionChannel/markPromotionAction"),
        getOsmetaFeedbackPromotionInfo: a.createAsyncChannel("PromotionChannel/getOsmetaFeedbackPromotionInfo"),
        setOsmetaFeedbackPromotionInfo: a.createFireAndForgetChannel("PromotionChannel/setOsmetaFeedbackPromotionInfo")
    };
    t.PromotionChannel = o;
    const i = {
        isAppInteractive: a.createAsyncChannel("PerformanceChannel/isAppInteractive"),
        markEvent: a.createFireAndForgetChannel("PerformanceChannel/markEvent")
    };
    t.PerformanceChannel = i;
    const c = {
        recordInteraction: a.createFireAndForgetChannel("TimeSpentChannel/recordInteraction")
    };
    t.TimeSpentChannel = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    t.default = class {
        constructor() {
            this._callbacks = new Map
        }
        addCallback(e) {
            const t = this;

            function n() {
                t._callbacks.delete(n)
            }
            return this._callbacks.set(n, e), n
        }
        empty() {
            return 0 === this._callbacks.size
        }
        invoke(e) {
            this._callbacks.forEach(t => t(e))
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isWindowsPlatform = function() {
        return process.platform === a.Windows
    }, t.isMacPlatform = function() {
        return process.platform === a.Mac
    }, t.Platforms = void 0;
    const a = Object.freeze({
        Mac: "darwin",
        Windows: "win32",
        FreeBSD: "freebsd",
        Linux: "linux",
        OpenBSD: "openbsd",
        SunOS: "sunos",
        AIX: "aix"
    });
    t.Platforms = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.revision = t.branch = t.timestamp = t.number = t.buildType = void 0;
    t.buildType = "official";
    t.number = "332019425";
    t.timestamp = 1636631872664;
    t.branch = "releases/release-archon-messenger-2021.05.10";
    t.revision = "41779b2736e8ee95b1a9147baf5cf8e8b9d934f4"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            IntlService: t
        } = r.default, n = t.getCurrentLocale().localeKey;
        return {
            spellcheck: {
                initializeSpellcheck() {
                    const t = new a.default;
                    t.switchLanguage(o[n] || n), e.window.webContents.on("context-menu", async (n, a) => {
                        const s = a.misspelledWord;
                        let o = [];
                        s && (o = await t.getCorrectionsForMisspelling(s) || []);
                        const i = window.contextMenuItems || [];
                        if (o.length > 0 || i.length > 0) {
                            n.preventDefault();
                            const t = new r.default.electron.Menu;
                            o.length > 0 && (o.map(n => {
                                t.append(new r.default.electron.MenuItem({
                                    label: n,
                                    click: () => e.window.webContents.replaceMisspelling(n)
                                }))
                            }), window.contextMenuItems && t.append(new r.default.electron.MenuItem({
                                type: "separator"
                            }))), window.contextMenuItems && (window.contextMenuItems.map(e => t.append(new r.default.electron.MenuItem(e))), window.contextMenuItems = null), t.popup()
                        }
                    })
                }
            }
        }
    };
    var a = s(n(97)),
        r = s(n(2));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const o = {
        es_LA: "es_ES"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.normalizeLanguageCode = function(e) {
        let t = (0, a.parse)(e.replace(/[_-]/g, "-"));
        if (!t || !t.langtag.language || !t.langtag.region) throw new Error(`${e} is not a valid language code`);
        return `${t.langtag.language.language.toLowerCase()}-${t.langtag.region.toUpperCase()}`
    }, t.d = function(...e) {
        return void 0;
        console.log(...e)
    };
    var a = n(99)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, "win32" === process.platform && (process.env.SPELLCHECKER_PREFER_HUNSPELL = 1);
    var a = n(101);
    t.default = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            MenuService: t,
            SafetyService: n,
            WindowService: l
        } = i.default;
        let d;

        function u(t) {
            t === e.windowKey && (d = !0)
        }

        function h(t) {
            t === e.windowKey && (d = !1)
        }
        return l.windowEvents.on("windowFocused", u), l.windowEvents.on("windowBlurred", h), window.addEventListener("beforeunload", () => {
            l.windowEvents.off("windowFocused", u), l.windowEvents.off("windowBlurred", h)
        }), {
            window: {
                isActive: () => d,
                addTouchScrollStartListener(t) {
                    function n(n) {
                        n === e.windowKey && t()
                    }
                    return l.windowEvents.on("scrollTouchStarted", n), () => {
                        l.windowEvents.off("scrollTouchStarted", n)
                    }
                },
                addTouchScrollEndListener(t) {
                    function n(n) {
                        n === e.windowKey && t()
                    }
                    return l.windowEvents.on("scrollTouchEnded", n), () => {
                        l.windowEvents.off("scrollTouchEnded", n)
                    }
                },
                addFocusListener(t) {
                    function n(n) {
                        n === e.windowKey && t()
                    }
                    return l.windowEvents.on("windowFocused", n), () => {
                        l.windowEvents.off("windowFocused", n)
                    }
                },
                addBlurListener(t) {
                    function n(n) {
                        n === e.windowKey && t()
                    }
                    return l.windowEvents.on("windowBlurred", n), () => {
                        l.windowEvents.off("windowBlurred", n)
                    }
                },
                getWindow: () => e.window,
                getBounds: () => e.window.getBounds(),
                setBounds(t, n) {
                    const a = {
                            ...t
                        },
                        r = e.window.webContents.zoomFactor;
                    for (const e in a) a.hasOwnProperty(e) && "number" == typeof a[e] && ("width" !== e && "height" !== e || (a[e] *= r), a[e] = Math.round(a[e]));
                    e.window.setBounds(a, n)
                },
                setColorScheme(t) {
                    e.window && !e.window.isDestroyed() && e.window.setBackgroundColor("light" === t ? "#eee" : "#333")
                },
                setResizable(t) {
                    e.window.setResizable(t)
                },
                setScale(t) {
                    l.setWindowScale(e.windowKey, t)
                },
                setMaximizable(t) {
                    e.window.setMaximizable(t)
                },
                close() {
                    r.default.incrementStat(s.AslStat.WindowCloseFromBridge, 1), e.window.close()
                },
                minimize() {
                    e.window.minimize()
                },
                maximize() {
                    e.window.maximize()
                },
                unmaximize() {
                    e.window.unmaximize()
                },
                isMaximized: () => e.window.isMaximized(),
                isMaximizable: () => e.window.isMaximizable(),
                isFullScreen: () => e.window.isFullScreen(),
                setFullScreen(t) {
                    e.window.setFullScreen(t)
                },
                setHideOnClose(t) {
                    l.setWindowHideOnClose(e.windowKey, t)
                },
                show() {
                    l.showWindow(e.windowKey)
                },
                setAlwaysOnTop(t) {
                    e.window.setAlwaysOnTop(t)
                },
                restorePersistentWindow: t => l.restorePersistentWindow(e.windowKey, t),
                flash() {
                    e.window.isFocused() || (e.window.once("focus", () => e.window.flashFrame(!1)), e.window.flashFrame(!0))
                },
                contributeMenuItems: n => {
                    t.contributeWindowMenuItems(e.windowKey, n)
                },
                createReportingWindow(e) {
                    n.createReportingWindow(e)
                },
                createRoomsReportingWindow(e) {
                    n.createRoomsReportingWindow(e)
                },
                createLicenseWindow() {
                    "dev" !== o.buildType && l.createLicenseWindow()
                },
                destroyAndCreateMessengerWindow(t, n) {
                    const a = e.windowKey;
                    l.destroyAndCreateMessengerWindow(a, t, n)
                },
                takeScreenshotOfMessengerWindow: e => new Promise((t, n) => {
                    const a = l.getUserMessengerWindow(e);
                    null != a ? a.capturePage().then(e => t(e)) : n(new Error("Could not find the Messenger window"))
                }),
                getDoubleClickBehavior: () => (0, a.isMacPlatform)() ? c.remote.systemPreferences.getUserDefault("AppleActionOnDoubleClick", "string") : "Maximize"
            }
        }
    };
    var a = n(42),
        r = l(n(11)),
        s = n(5),
        o = n(43),
        i = l(n(2)),
        c = n(0);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";

    function a(e, ...t) {
        const n = {};
        for (const a of t) {
            const t = a(e);
            for (const e in t) {
                if (n[e]) throw new Error(`Bridge contribution with key ${e} was already defined!`);
                const a = Object.getOwnPropertyDescriptor(t, e);
                a && Object.defineProperty(n, e, a)
            }
        }
        return n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a, t.extendBridge = function(e, t, ...n) {
        const r = a(e, ...n),
            s = {};
        for (const e in t) {
            const n = Object.getOwnPropertyDescriptor(t, e);
            n && Object.defineProperty(s, e, n)
        }
        for (const e in r) {
            const t = Object.getOwnPropertyDescriptor(r, e);
            t && Object.defineProperty(s, e, t)
        }
        return s
    }
}, function(e, t, n) {
    "use strict";
    let a, r;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.MentionTypes = t.ALWAYS_ON_DEEPLINKS = t.QEUnitType = t.RtcStackType = void 0, t.RtcStackType = a,
        function(e) {
            e.Zenon = "Zenon", e.Rsys = "Rsys"
        }(a || (t.RtcStackType = a = {})), t.QEUnitType = r,
        function(e) {
            e[e.USER = 9] = "USER"
        }(r || (t.QEUnitType = r = {}));
    let s;
    t.ALWAYS_ON_DEEPLINKS = ["feedback", "room", "thread", "settings"], t.MentionTypes = s,
        function(e) {
            e.NONE = "n", e.PROFILE = "p", e.THREAD = "t", e.THREAD_ACTIVE = "a"
        }(s || (t.MentionTypes = s = {}))
}, function(e, t, n) {
    "use strict";
    var a = n(10),
        r = l(n(11)),
        s = l(n(51)),
        o = l(n(2)),
        i = l(n(9)),
        c = n(0);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default.initializeProcessAsl(!1), o.default.appConfig.isTest && (window.require = n(121));
    let d = a.UNAUTHENTICATED_USERID;
    i.default.debug("Creating the bridge");
    const u = c.remote.getCurrentWindow(),
        h = u.id;
    o.default.WindowService.windowEvents.on("windowUserChanged", (e, t) => {
        e === h && (d = t)
    });
    const S = {
            window: u,
            windowKey: h,
            get userId() {
                return d === a.UNAUTHENTICATED_USERID && (d = o.default.WindowService.getUserIdForWindowKey(u.id) || a.UNAUTHENTICATED_USERID), d
            },
            onUserIdChanged: e => {
                function t(t, n) {
                    t === h && e(n)
                }
                return o.default.WindowService.windowEvents.on("windowUserChanged", t), () => {
                    o.default.WindowService.windowEvents.off("windowUserChanged", t)
                }
            }
        },
        p = (0, s.default)(S);
    window.__bridge = p
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const t = (0, I.default)(e, r.default, s.default, o.default, i.default, c.default, l.default, d.default, u.default, h.default, S.default, p.default, f.default, A.default, _.default, g.default, E.default, y.default, m.default, T.default, C.default, M.default, R.default);
        return t.logging.logMessage({
            message: "Created bridge",
            file: "xplat\\archon\\packages\\bridge\\src\\createMessengerBridge.tsx",
            line: 56,
            level: a.LogLevel.INFO
        }), t
    };
    var a = n(37),
        r = v(n(52)),
        s = v(n(55)),
        o = v(n(57)),
        i = v(n(58)),
        c = v(n(69)),
        l = v(n(70)),
        d = v(n(72)),
        u = v(n(74)),
        h = v(n(80)),
        S = v(n(89)),
        p = v(n(90)),
        f = v(n(96)),
        A = v(n(105)),
        _ = v(n(106)),
        g = v(n(107)),
        E = v(n(44)),
        y = v(n(109)),
        m = v(n(113)),
        T = v(n(117)),
        C = v(n(118)),
        M = v(n(120)),
        R = v(n(47)),
        I = v(n(48));

    function v(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return {
            authentication: {
                onLoginSuccessful: a.AuthenticationChannel.loginUser,
                loadLoggedInUser: () => {},
                onLogout: () => a.AuthenticationChannel.logoutUser(e.userId),
                initiateMessengerSso: a.AuthenticationChannel.initiateMessengerSso,
                prepareForMessengerSso: a.AuthenticationChannel.prepareForMessengerSso,
                finishMessengerSso: a.AuthenticationChannel.finishMessengerSso,
                canUpgradeOsmetaUser: a.AuthenticationChannel.canUpgradeOsmetaUser,
                getOsmetaMessengerUser: a.AuthenticationChannel.getOsmetaMessengerUser,
                getKeychainServiceName: a.AuthenticationChannel.getKeychainServiceName,
                loginWithAccessTokenExchange: a.AuthenticationChannel.loginWithAccessTokenExchange,
                setTincanKeys: a.AuthenticationChannel.setTincanKeys,
                clearTincanKeyInfo: t => a.AuthenticationChannel.clearTincanKeyInfo(e.userId, t)
            }
        }
    };
    var a = n(53)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AuthenticationChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        loginUser: a.createAsyncChannel("AuthenticationChannel/loginUser"),
        logoutUser: a.createAsyncChannel("AuthenticationChannel/logoutUser"),
        initiateMessengerSso: a.createAsyncChannel("AuthenticationChannel/initiateMessengerSso"),
        prepareForMessengerSso: a.createAsyncChannel("AuthenticationChannel/prepareForMessengerSso"),
        finishMessengerSso: a.createAsyncChannel("AuthenticationChannel/finishMessengerSso"),
        canUpgradeOsmetaUser: a.createAsyncChannel("AuthenticationChannel/canUpgradeOsmetaUser"),
        getOsmetaMessengerUser: a.createAsyncChannel("AuthenticationChannel/getOsmetaMessengerUser"),
        getKeychainServiceName: a.createAsyncChannel("AuthenticationChannel/getKeychainServiceName"),
        loginWithAccessTokenExchange: a.createAsyncChannel("AuthenticationChannel/loginWithAccessTokenExchange"),
        setTincanKeys: a.createAsyncChannel("AuthenticationChannel/setTincanKeys"),
        clearTincanKeyInfo: a.createAsyncChannel("AuthenticationChannel/clearTincanKeyInfo")
    };
    t.AuthenticationChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isIpcError = function(e) {
        return !0 === e.__ipcError
    }, t.default = void 0;
    class a extends Error {
        constructor(e, t) {
            super(), this._innerError = e, this.__ipcError = !0, this.message = `An error occurred while invoking an IPC function (${t}). Message: ${this._getInnerMessage()}`, this.name = "IpcError"
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
    t.default = a
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return {
            checkpoints: {
                getCheckpointState: a.CheckpointChannel.getCheckpointState,
                updateCheckpointState: a.CheckpointChannel.updateCheckpointState
            }
        }
    };
    var a = n(56)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.CheckpointChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        getCheckpointState: a.createAsyncChannel("CheckpointChannel/getCheckpointState"),
        updateCheckpointState: a.createFireAndForgetChannel("CheckpointChannel/updateCheckpointState")
    };
    t.CheckpointChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return {
            clipboard: {
                readClipboard: () => a.clipboard.readText(),
                readClipboardImage() {
                    const e = a.clipboard.readImage();
                    return e.isEmpty() ? null : e.toDataURL()
                },
                writeClipboard(e) {
                    a.clipboard.writeText(e)
                },
                writeImageToClipboard(e) {
                    const t = new Image;
                    t.onload = () => {
                        const e = document.createElement("canvas");
                        e.width = t.width, e.height = t.height;
                        const n = e.getContext("2d");
                        if (!n) throw new Error("Canvas not available, so we cannot copy an image");
                        n.drawImage(t, 0, 0);
                        const r = e.toDataURL("image/png", 1),
                            s = a.nativeImage.createFromDataURL(r);
                        a.clipboard.writeImage(s)
                    }, t.src = e
                }
            }
        }
    };
    var a = n(0)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        const {
            uploadJSCrash: e,
            deviceID: t,
            appConfig: {
                appInfo: {
                    appID: n
                },
                appSource: h,
                appVersion: p,
                isMacStore: f,
                buildInfo: A,
                isOfficialBuild: _,
                isProduction: g
            }
        } = c.default, {
            buildDir: E
        } = (0, i.default)(g);
        return (0, r.startCrashReporter)({
            isMain: !1,
            appID: n,
            deviceID: t,
            buildDirectory: E,
            dumpsDirectory: s.DiagnosticsChannel.getCrashReporterDumpDirectory(),
            appSource: h,
            appVersion: p,
            isMacStore: f,
            buildInfo: A,
            isOfficialBuild: _
        }), {
            diagnostics: {
                getAslStatsForHeartbeat: s.DiagnosticsChannel.getAslStatsForHeartbeat,
                getMachineMetrics: s.DiagnosticsChannel.getMachineMetrics,
                getOsMetrics: s.DiagnosticsChannel.getOsMetrics,
                getMainCPUUSage: s.DiagnosticsChannel.getMainCPUUsage,
                getRendererCPUUsage: async () => process.getCPUUsage(),
                getMainProcessMemoryUsage: async () => {
                    const e = await s.DiagnosticsChannel.getMainProcessMemoryUsage();
                    return e ? S(e) : e
                },
                getRendererProcessMemoryUsage: async () => {
                    try {
                        return S(await process.getProcessMemoryInfo())
                    } catch (e) {
                        return l.default.error(`Error getting renderer process memory: ${e.stack}`), null
                    }
                },
                getWebFrameResourceUsage: () => {
                    try {
                        return d.webFrame.getResourceUsage() || null
                    } catch (e) {
                        return l.default.error(`Error getting webFrame resource usage: ${e.stack}`), null
                    }
                },
                getV8HeapStats: () => {
                    try {
                        return u.default.getHeapStatistics() || null
                    } catch (e) {
                        return l.default.error(`Error getting webFrame resource usage: ${e.stack}`), null
                    }
                },
                getMemoryInfoString: async () => {
                    function e(e) {
                        return (e / 1e6).toFixed(2)
                    }
                    let t = "\nMEMORY USAGE: \n";
                    const n = await s.DiagnosticsChannel.getMainProcessMemoryUsage();
                    if (n) {
                        const e = S(n);
                        t += "Main process (MB):\n", Object.entries(e).map(e => {
                            t += `   ${e[0]}: ${e[1]}\n`
                        })
                    }
                    const a = await s.DiagnosticsChannel.getMainProcessMemoryUsage();
                    if (a) {
                        const e = S(a);
                        t += "\nRenderer process (MB):\n", Object.entries(e).map(e => {
                            t += `   ${e[0]}: ${e[1]}\n`
                        })
                    }
                    const r = d.webFrame.getResourceUsage();
                    return t += "\nRESOURCE USAGE: \n", Object.entries(r).map(n => {
                        const a = n[1];
                        t += `${n[0]} count: ${a.count} size(MB): ${e(a.size)} liveSize(MB): ${e(a.liveSize)}\n`
                    }), t += "\nV8 HEAP STATISTICS (MB): \n", Object.entries(u.default.getHeapStatistics()).map(n => {
                        const a = n[1];
                        t += `${n[0]}: ${e(a)}\n`
                    }), t
                },
                addCrashReporterParameter: (e, t) => {
                    s.DiagnosticsChannel.addCrashReporterParameter(e, t), (0, r.addCrashReporterParameter)(e, t, f)
                },
                setCrashReporterApplicationState: e => {
                    s.DiagnosticsChannel.setCrashReporterApplicationState(e), (0, r.setCrashReporterApplicationState)(e, f)
                },
                uploadJSCrash: async (t, n, r) => {
                    try {
                        const a = await s.DiagnosticsChannel.getCrashReporterExtraFields();
                        e(t, n, r, a)
                    } catch (e) {
                        o.MetricsChannel.trackStrictError(a.UNAUTHENTICATED_USERID, new Error(`Could not upload JS crash report to LogView: ${e}`), "main", "crashUploader", void 0)
                    }
                    l.default.error(`JS crash: stack: ${t}, reactStack: ${n}`)
                }
            }
        }
    };
    var a = n(10),
        r = n(59),
        s = n(66),
        o = n(40),
        i = h(n(16)),
        c = h(n(2)),
        l = h(n(9)),
        d = n(0),
        u = h(n(68));

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function S(e) {
        return {
            residentSetMb: e.residentSet ? e.residentSet / 1024 : null,
            privateMb: e.private / 1024,
            sharedMb: e.shared / 1024
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.startCrashReporter = function(e) {
        const t = A(e.isMain, e.deviceID, "breakpad", e.buildInfo, e.appID, e.appVersion, e.appSource);
        e.isMacStore ? (n = "Messenger", a = p + S, s = e.appVersion, o = t, i = e.buildDirectory, l = e.dumpsDirectory, f = (0, r.loadAndWrapBreakpad)(i), f.initBreakpad(n, a, s, o, l)) : function(e, t, n, a) {
            c.crashReporter.start({
                productName: e,
                companyName: "Facebook",
                submitURL: t,
                uploadToServer: a || !1,
                ignoreSystemCrashHandler: !0,
                extra: n
            })
        }("Messenger", p + S, t, e.isOfficialBuild || !1);
        var n, a, s, o, i, l
    }, t.addCrashReporterParameter = _, t.setCrashReporterApplicationState = function(e, t) {
        _("application_state", e, t)
    }, t.reportRNException = function(e, t, n, r, c, h) {
        const S = r;
        S === a.RNExceptionType.SoftException ? s.default.incrementStat(o.AslStat.RNJSSoftErrors, 1) : s.default.incrementStat(o.AslStat.RNJSCrashes, 1);
        let p = e + ", stack:\n";
        t.forEach(e => {
            p += e.methodName + "@" + d.default.basename(e.fileName), null != e.line && (p += ":" + e.line), null != e.column && (p += ":" + e.column), p += "\n"
        });
        const f = {
                ...A(h.isMain, h.deviceID, "js", h.buildInfo, h.appID, h.appVersion, h.appSource),
                platform: process.platform,
                stack_trace: p,
                js_error_context: "rn",
                rn_exception_type: S,
                rn_exception_id: n,
                rn_bundle_name: c
            },
            _ = d.default.join(h.dumpsDirectory, "rnexception-" + (0, u.default)());
        try {
            l.default.writeFileSync(_, JSON.stringify(f)), S === a.RNExceptionType.SoftException ? s.default.incrementStat(o.AslStat.RNJSSoftErrorsSaved, 1) : s.default.incrementStat(o.AslStat.RNJSCrashesSaved, 1)
        } catch (e) {
            i.default.error(`CrashReporter: Unable to save crash report: ${_} - Error: ${e.message}`)
        }
    }, t.CRASH_HOST = t.RN_EXCEPTION_PREFIX = t.CRASH_PATH = void 0;
    var a = n(60),
        r = n(61),
        s = h(n(11)),
        o = n(5),
        i = h(n(9)),
        c = n(0),
        l = h(n(3)),
        d = h(n(1)),
        u = h(n(62));

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const S = "/workchat/desktop/crash_upload";
    t.CRASH_PATH = S;
    t.RN_EXCEPTION_PREFIX = "rnexception-";
    const p = "https://www.workplace.com";
    t.CRASH_HOST = p;
    let f;

    function A(e, t, n, a, r, s, o) {
        return {
            flavor: "workchat",
            device_id: t,
            mobile_app_id: r,
            mobile_app_version: s,
            archon_build_number: a.number || "0",
            archon_build_revision: a.revision || "local",
            process_type: e ? "main" : "renderer",
            electron_version: process.versions.electron,
            in_rtc_call: "false",
            app_source: o,
            crash_type: n
        }
    }

    function _(e, t, n) {
        e.length > 64 || t.length > 64 ? i.default.error(`Tried to add too long of a crash reporter parameter ${e}: ${t}`) : n ? f.addParameter(e, t) : c.crashReporter.addExtraParameter(e, t)
    }
}, function(e, t, n) {
    "use strict";
    let a;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RNExceptionType = void 0, t.RNExceptionType = a,
        function(e) {
            e.SoftException = "rn_soft_exception", e.FatalException = "rn_fatal_exception"
        }(a || (t.RNExceptionType = a = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadAndWrapBreakpad = function(e) {
        const t = require(r.default.resolve(e, "breakpad.node"));
        return Object.freeze({
            initBreakpad: t.initBreakpad,
            addParameter: t.addParameter
        })
    };
    var a, r = (a = n(1)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    var a = n(63),
        r = n(65),
        s = r;
    s.v1 = a, s.v4 = r, e.exports = s
}, function(e, t, n) {
    var a, r, s = n(38),
        o = n(39),
        i = 0,
        c = 0;
    e.exports = function(e, t, n) {
        var l = t && n || 0,
            d = t || [],
            u = (e = e || {}).node || a,
            h = void 0 !== e.clockseq ? e.clockseq : r;
        if (null == u || null == h) {
            var S = s();
            null == u && (u = a = [1 | S[0], S[1], S[2], S[3], S[4], S[5]]), null == h && (h = r = 16383 & (S[6] << 8 | S[7]))
        }
        var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
            f = void 0 !== e.nsecs ? e.nsecs : c + 1,
            A = p - i + (f - c) / 1e4;
        if (A < 0 && void 0 === e.clockseq && (h = h + 1 & 16383), (A < 0 || p > i) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        i = p, c = f, r = h;
        var _ = (1e4 * (268435455 & (p += 122192928e5)) + f) % 4294967296;
        d[l++] = _ >>> 24 & 255, d[l++] = _ >>> 16 & 255, d[l++] = _ >>> 8 & 255, d[l++] = 255 & _;
        var g = p / 4294967296 * 1e4 & 268435455;
        d[l++] = g >>> 8 & 255, d[l++] = 255 & g, d[l++] = g >>> 24 & 15 | 16, d[l++] = g >>> 16 & 255, d[l++] = h >>> 8 | 128, d[l++] = 255 & h;
        for (var E = 0; E < 6; ++E) d[l + E] = u[E];
        return t || o(d)
    }
}, function(e, t) {
    e.exports = require("crypto")
}, function(e, t, n) {
    var a = n(38),
        r = n(39);
    e.exports = function(e, t, n) {
        var s = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var o = (e = e || {}).random || (e.rng || a)();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t)
            for (var i = 0; i < 16; ++i) t[s + i] = o[i];
        return t || r(o)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DiagnosticsChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        getCrashReporterDumpDirectory: a.createChannel("DiagnosticsChannel/getCrashReporterDumpDirectory"),
        getMachineMetrics: a.createAsyncChannel("DiagnosticsChannel/getMachineMetrics"),
        getOsMetrics: a.createAsyncChannel("DiagnosticsChannel/getOsMetrics"),
        getMainCPUUsage: a.createAsyncChannel("DiagnosticsChannel/getMainCPUUsage"),
        getMainProcessMemoryUsage: a.createAsyncChannel("DiagnosticsChannel/getMainProcessMemoryUsage"),
        addCrashReporterParameter: a.createFireAndForgetChannel("DiagnosticsChannel/addCrashReporterParameter"),
        setCrashReporterApplicationState: a.createFireAndForgetChannel("DiagnosticsChannel/setCrashReporterApplicationState"),
        getCrashReporterExtraFields: a.createAsyncChannel("DiagnosticsChannel/getCrashReporterExtraFields"),
        getAslStatsForHeartbeat: a.createAsyncChannel("DiagnosticsChannel/getAslStatsForHeartbeat")
    };
    t.DiagnosticsChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ipcRenderer = t.ipcMain = void 0;
    var a = n(0);
    const r = a.ipcMain;
    t.ipcMain = r;
    const s = a.ipcRenderer;
    t.ipcRenderer = s
}, function(e, t) {
    e.exports = require("v8")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            DialogService: t
        } = r.default;
        return {
            rooms: {
                joinRoom: () => {
                    t.acceptCall(e.windowKey, !0)
                },
                reject: () => {
                    t.rejectCall(e.windowKey)
                }
            },
            incomingCallDialog: {
                show: (n, a, r) => (null == r ? void 0 : r.roomName) ? t.showRoomsIncomingCall(e.windowKey, n, r.roomName) : t.showIncomingCall(e.windowKey, n, a, null, n.length <= 1, !1),
                dismiss() {
                    t.dismiss(e.windowKey)
                },
                acceptCall: async n => {
                    await t.acceptCall(e.windowKey, n)
                },
                rejectCall: () => {
                    t.rejectCall(e.windowKey)
                }
            },
            missedCallDialog: {
                returnCall: () => {
                    t.returnCall(e.windowKey)
                },
                close: () => {
                    t.ignoreMissedCall(e.windowKey)
                }
            }
        }
    };
    var a, r = (a = n(2)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            DownloadsService: t
        } = s.default;
        return {
            downloads: {
                downloadUrl: t => {
                    r.DownloadsChannel.download(e.windowKey, t)
                },
                cancelDownload: t => {
                    r.DownloadsChannel.cancel(e.windowKey, t)
                },
                getUpdateEmitter: () => t.getUpdateEmitter(e.window),
                revealInFinder: e => {
                    o.shell.showItemInFolder(e)
                },
                download: e => "",
                getDownloadEmitter: () => ({
                    addListener: e => {},
                    removeListener: e => {}
                })
            }
        }
    };
    var a, r = n(71),
        s = (a = n(2)) && a.__esModule ? a : {
            default: a
        },
        o = n(0)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DownloadsChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        download: a.createFireAndForgetChannel("DownloadsChannel/download"),
        cancel: a.createFireAndForgetChannel("DownloadsChannel/cancel")
    };
    t.DownloadsChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        return {
            intl: a.IntlChannel
        }
    };
    var a = n(73)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IntlChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        getCurrentLocale: a.createAsyncChannel("IntlChannel/getCurrentLocale"),
        getLocaleList: a.createChannel("IntlChannel/getLocaleList"),
        getTranslationsForCurrentLocale: a.createAsyncChannel("IntlChannel/getTranslationsForCurrentLocale")
    };
    t.IntlChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        let t;
        const {
            appConfig: n,
            SettingsService: i
        } = s.default, {
            tracingStartup: c
        } = i.getGlobalSettings();
        return {
            get logging() {
                if (!t) {
                    let e = (0, o.getUserFromQuery)();
                    const i = "renderer",
                        l = e ? e.userID : null,
                        d = s.default.paths.logs,
                        {
                            buildDir: u
                        } = (0, r.default)(n.isProduction);
                    t = (0, a.loadAndWrapLogging)({
                        logsDir: d,
                        process: i,
                        userId: l,
                        tracingStartup: c
                    }, u)
                }
                return t
            }
        }
    };
    var a = n(75),
        r = i(n(16)),
        s = i(n(2)),
        o = n(77);

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(37);
    Object.keys(a).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return a[e]
            }
        })
    }));
    var r = n(76);
    Object.keys(r).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e]
            }
        })
    }))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadAndWrapLogging = function(e, t) {
        const n = require(r.default.resolve(t, "logging.node"));
        return n.initializeLogging(e), Object.freeze({
            getFullLoggingConfig: n.getFullLoggingConfig,
            setFullLoggingConfig: n.setFullLoggingConfig,
            logMessage: n.logMessage,
            flushNativeLogFiles: n.flushNativeLogFiles
        })
    };
    var a, r = (a = n(1)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getUserFromQuery = function() {
        const e = window.location.search,
            t = (0, a.parseQueryString)(e);
        let n = null;
        if (t.user) try {
            const e = JSON.parse(t.user);
            (function(e) {
                return null != e && e.accessToken && "string" == typeof e.accessToken && null != e.userID && "string" == typeof e.userID
            })(e) && (n = e)
        } catch (e) {}
        return n
    };
    var a = n(78)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.parseQueryString = function(e) {
        if (!e) return {};
        const t = {},
            n = ("?" === e[0] ? e.substr(1) : e).split("&");
        for (let e = 0; e < n.length; e++) {
            const a = n[e].split("=");
            2 === a.length && (t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || ""))
        }
        return t
    }, t.constructUrl = function(e, t, n, a) {
        let s = `https://${t}.${e}`;
        n && (n.startsWith("/") || (s += "/"), s += n);
        a && Object.keys(a).length > 0 && (s += "?", s += r.default.stringify(a));
        return s
    }, t.getQueryParams = function(e, t) {
        const n = {
            ...t
        };
        e && (n.locale = e);
        0;
        return n
    }, t.isWhitelistedRtcUrl = function(e) {
        const t = new RegExp(/^https:\/\/(www|our|work)\./.source + /([\w\d\.]+\.(\w{3}\d|od|sb)\.)?/.source + /(facebook|workplace)\.com/.source + /\/messenger\/zenoncall/.source + /($|\?|\/|\.)/.source);
        return !!e.match(t)
    };
    var a, r = (a = n(79)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t) {
    e.exports = require("querystring")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            storedProcedureNames: t,
            messagingLoadingDirection: n
        } = o.MsysServiceChannel.msysAddonConsts();
        let a = null;
        const l = new r.default,
            d = new r.default,
            u = new r.default,
            h = new r.default,
            S = new r.default,
            p = {
                storedProcedureNames: t,
                messagingLoadingDirection: n,
                ...s.MsysAddon,
                setPerformanceListener: e => a = e,
                addSyncListener: e => l.addCallback(e),
                addRsysListener: e => d.addCallback(e),
                addAccessTokenInvalidListener: e => u.addCallback(e),
                addMqttInvalidSessionListener: e => h.addCallback(e),
                addRNElectronCallback: e => S.addCallback(e),
                mobileConfigGetBool: () => !0,
                mobileConfigGetBoolWithoutLogging: () => !0,
                mobileConfigGetDouble: () => 0,
                mobileConfigGetDoubleWithoutLogging: () => 0,
                mobileConfigGetInt64: () => "0",
                mobileConfigGetInt64WithoutLogging: () => "0",
                mobileConfigGetString: () => "",
                mobileConfigGetStringWithoutLogging: () => "",
                openUserDataDirectory: () => null,
                resetMailbox: async () => {}
            };
        return c.ipcRenderer.on(i.ON_PERFORMANCE_EVENT, (e, ...t) => {
            a && a(t[0])
        }), c.ipcRenderer.on(i.ON_SYNC_EVENT, (e, ...t) => {
            l.invoke(t[0])
        }), c.ipcRenderer.on(i.ON_RSYS_EVENT, (e, ...t) => {
            d.invoke(t[0])
        }), c.ipcRenderer.on(i.ON_ACCESS_TOKEN_INVALID_EVENT, (e, ...t) => {
            u.invoke(t[0])
        }), c.ipcRenderer.on(i.ON_MQTT_INVALID_SESSION_EVENT, (e, ...t) => {
            h.invoke(t[0])
        }), c.ipcRenderer.on(i.ON_RN_ELECTRON_EVENT, (e, ...t) => {
            S.invoke(t[0])
        }), {
            get msys() {
                return p
            },
            skipFetchStats: () => o.MsysServiceChannel.skipFetchStats(),
            msysDispatchQueue: () => o.MsysServiceChannel.msysDispatchQueue(),
            getProxyConfig: () => o.MsysServiceChannel.getProxyConfig()
        }
    };
    var a, r = (a = n(41)) && a.__esModule ? a : {
            default: a
        },
        s = n(81),
        o = n(82),
        i = n(83),
        c = n(0)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MsysAddon = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        mobileConfigGetBool: a.createAsyncChannel("MsysAddon/mobileConfigGetBool"),
        mobileConfigGetBoolWithoutLogging: a.createAsyncChannel("MsysAddon/mobileConfigGetBoolWithoutLogging"),
        mobileConfigGetDouble: a.createAsyncChannel("MsysAddon/mobileConfigGetDouble"),
        mobileConfigGetDoubleWithoutLogging: a.createAsyncChannel("MsysAddon/mobileConfigGetDoubleWithoutLogging"),
        mobileConfigGetInt64: a.createAsyncChannel("MsysAddon/mobileConfigGetInt64"),
        mobileConfigGetInt64WithoutLogging: a.createAsyncChannel("MsysAddon/mobileConfigGetInt64WithoutLogging"),
        mobileConfigGetString: a.createAsyncChannel("MsysAddon/mobileConfigGetString"),
        mobileConfigGetStringWithoutLogging: a.createAsyncChannel("MsysAddon/mobileConfigGetStringWithoutLogging"),
        addParticipantsToThread: a.createAsyncChannel("MsysAddon/addParticipantsToThread"),
        removeParticipantFromThread: a.createAsyncChannel("MsysAddon/removeParticipantFromThread"),
        authSessionLogin: a.createAsyncChannel("MsysAddon/authSessionLogin"),
        encryptPassword: a.createAsyncChannel("MsysAddon/encryptPassword"),
        authSessionLoadUser: a.createAsyncChannel("MsysAddon/authSessionLoadUser"),
        blockParticipant: a.createAsyncChannel("MsysAddon/blockParticipant"),
        unblockParticipant: a.createAsyncChannel("MsysAddon/unblockParticipant"),
        copyAndRedactDatabase: a.createAsyncChannel("MsysAddon/copyAndRedactDatabase"),
        setAppState: a.createAsyncChannel("MsysAddon/setAppState"),
        sendTextMessage: a.createAsyncChannel("MsysAddon/sendTextMessage"),
        sendStickerMessage: a.createAsyncChannel("MsysAddon/sendStickerMessage"),
        issueThreadAttachmentsFetch: a.createAsyncChannel("MsysAddon/issueThreadAttachmentsFetch"),
        fetchMediaForThread: a.createAsyncChannel("MsysAddon/fetchMediaForThread"),
        fetchThreads: a.createAsyncChannel("MsysAddon/fetchThreads"),
        fetchThreadModel: a.createAsyncChannel("MsysAddon/fetchThreadModel"),
        fetchAdvancedThreadModel: a.createAsyncChannel("MsysAddon/fetchAdvancedThreadModel"),
        fetchThreadThemeColorModels: a.createAsyncChannel("MsysAddon/fetchThreadThemeColorModels"),
        fetchThreadsPage: a.createAsyncChannel("MsysAddon/fetchThreadsPage"),
        verifyMessageExists: a.createAsyncChannel("MsysAddon/verifyMessageExists"),
        setMessageReminder: a.createAsyncChannel("MsysAddon/setMessageReminder"),
        fetchMessages: a.createAsyncChannel("MsysAddon/fetchMessages"),
        fetchMessagesPage: a.createAsyncChannel("MsysAddon/fetchMessagesPage"),
        fetchSavedMessages: a.createAsyncChannel("MsysAddon/fetchSavedMessages"),
        fetchSavedMessagesPagingInfo: a.createAsyncChannel("MsysAddon/fetchSavedMessagesPagingInfo"),
        fetchSavedMessagesPage: a.createAsyncChannel("MsysAddon/fetchSavedMessagesPage"),
        fetchSavedMessagesAttachments: a.createAsyncChannel("MsysAddon/fetchSavedMessagesAttachments"),
        fetchSavedMessagesAttachmentsItems: a.createAsyncChannel("MsysAddon/fetchSavedMessagesAttachmentsItems"),
        fetchSavedMessagesAttachmentsCTAs: a.createAsyncChannel("MsysAddon/fetchSavedMessagesAttachmentsCTAs"),
        saveOrUnsaveMessage: a.createAsyncChannel("MsysAddon/saveOrUnsaveMessage"),
        fetchUnreadNotifications: a.createAsyncChannel("MsysAddon/fetchUnreadNotifications"),
        resumeSendingMessage: a.createAsyncChannel("MsysAddon/resumeSendingMessage"),
        createAndSendOptimisticGroupMessage: a.createAsyncChannel("MsysAddon/createAndSendOptimisticGroupMessage"),
        createAndSendOptimisticMessageWithAttachment: a.createAsyncChannel("MsysAddon/createAndSendOptimisticMessageWithAttachment"),
        createAndSendOptimisticMessageWithAttachments: a.createAsyncChannel("MsysAddon/createAndSendOptimisticMessageWithAttachments"),
        createAndSendOptimisticReaction: a.createAsyncChannel("MsysAddon/createAndSendOptimisticReaction"),
        fetchAttachments: a.createAsyncChannel("MsysAddon/fetchAttachments"),
        fetchAttachmentItemList: a.createAsyncChannel("MsysAddon/fetchAttachmentItemList"),
        fetchAdminMessageCTA: a.createAsyncChannel("MsysAddon/fetchAdminMessageCTA"),
        fetchReactions: a.createAsyncChannel("MsysAddon/fetchReactions"),
        fetchQuickReplies: a.createAsyncChannel("MsysAddon/fetchQuickReplies"),
        fetchAttachmentCTAs: a.createAsyncChannel("MsysAddon/fetchAttachmentCTAs"),
        fetchThreadPresenceForThread: a.createAsyncChannel("MsysAddon/fetchThreadPresenceForThread"),
        fetchThreadPresences: a.createAsyncChannel("MsysAddon/fetchThreadPresences"),
        fetchThreadGroupMembershipRequests: a.createAsyncChannel("MsysAddon/fetchThreadGroupMembershipRequests"),
        verifyContactRowExists: a.createAsyncChannel("MsysAddon/verifyContactRowExists"),
        removeMessage: a.createAsyncChannel("MsysAddon/removeMessage"),
        globalRemoveMessage: a.createAsyncChannel("MsysAddon/globalRemoveMessage"),
        fetchSearchResults: a.createAsyncChannel("MsysAddon/fetchSearchResults"),
        fetchSearchQueryStatus: a.createAsyncChannel("MsysAddon/fetchSearchQueryStatus"),
        clearSearchTables: a.createAsyncChannel("MsysAddon/clearSearchTables"),
        issueSearchQuery: a.createAsyncChannel("MsysAddon/issueSearchQuery"),
        fetchMessageSearchResults: a.createAsyncChannel("MsysAddon/fetchMessageSearchResults"),
        fetchMessageSearchQueryStatus: a.createAsyncChannel("MsysAddon/fetchMessageSearchQueryStatus"),
        clearMessageSearchTable: a.createAsyncChannel("MsysAddon/clearMessageSearchTable"),
        issueMessageSearchQuery: a.createAsyncChannel("MsysAddon/issueMessageSearchQuery"),
        fetchParticipants: a.createAsyncChannel("MsysAddon/fetchParticipants"),
        fetchParticipantsForThread: a.createAsyncChannel("MsysAddon/fetchParticipantsForThread"),
        fetchInboxByThreadKey: a.createAsyncChannel("MsysAddon/fetchInboxByThreadKey"),
        fetchDeliveryInfo: a.createAsyncChannel("MsysAddon/fetchDeliveryInfo"),
        verifyThreadRowExists: a.createAsyncChannel("MsysAddon/verifyThreadRowExists"),
        fetchMessagesRangeInfoModelForThread: a.createAsyncChannel("MsysAddon/fetchMessagesRangeInfoModelForThread"),
        fetchThreadsRangeInfoModel: a.createAsyncChannel("MsysAddon/fetchThreadsRangeInfoModel"),
        fetchMessagesOtidModel: a.createAsyncChannel("MsysAddon/fetchMessagesOtidModel"),
        fetchContactById: a.createAsyncChannel("MsysAddon/fetchContactById"),
        fetchContactList: a.createAsyncChannel("MsysAddon/fetchContactList"),
        fetchGroupThreadsWithParticipant: a.createAsyncChannel("MsysAddon/fetchGroupThreadsWithParticipant"),
        notifyAppEnterForeground: a.createAsyncChannel("MsysAddon/notifyAppEnterForeground"),
        forceReconnect: a.createAsyncChannel("MsysAddon/forceReconnect"),
        networkOnlineCallback: a.createAsyncChannel("MsysAddon/networkOnlineCallback"),
        networkOfflineCallback: a.createAsyncChannel("MsysAddon/networkOfflineCallback"),
        markThreadUnreadStatus: a.createAsyncChannel("MsysAddon/markThreadUnreadStatus"),
        muteThread: a.createAsyncChannel("MsysAddon/muteThread"),
        unmuteThread: a.createAsyncChannel("MsysAddon/unmuteThread"),
        showReactNativeWindow: a.createAsyncChannel("MsysAddon/showReactNativeWindow"),
        isNativeWindowOpen: a.createAsyncChannel("MsysAddon/isNativeWindowOpen"),
        endCall: a.createFireAndForgetChannel("MsysAddon/endCall"),
        QPLMarkerStartBackdated: a.createFireAndForgetChannel("MsysAddon/QPLMarkerStartBackdated"),
        archiveThread: a.createAsyncChannel("MsysAddon/archiveThread"),
        ignoreMessagesForThread: a.createAsyncChannel("MsysAddon/ignoreMessagesForThread"),
        deleteThread: a.createAsyncChannel("MsysAddon/deleteThread"),
        reportPresenceSetting: a.createAsyncChannel("MsysAddon/reportPresenceSetting"),
        setOptimisticThreadParticipantAdminStatus: a.createAsyncChannel("MsysAddon/setOptimisticThreadParticipantAdminStatus"),
        updateThreadName: a.createAsyncChannel("MsysAddon/updateThreadName"),
        updateThreadTheme: a.createAsyncChannel("MsysAddon/updateThreadTheme"),
        changeCustomEmoji: a.createAsyncChannel("MsysAddon/changeCustomEmoji"),
        updateThreadParticipantNickname: a.createAsyncChannel("MsysAddon/updateThreadParticipantNickname"),
        sendTypingIndicatorStatus: a.createAsyncChannel("MsysAddon/sendTypingIndicatorStatus"),
        sendAttachmentForward: a.createAsyncChannel("MsysAddon/sendAttachmentForward"),
        sendMessageForward: a.createAsyncChannel("MsysAddon/sendMessageForward"),
        pinMessage: a.createAsyncChannel("MsysAddon/pinMessage"),
        unpinMessage: a.createAsyncChannel("MsysAddon/unpinMessage"),
        fetchPinnedMessageForThread: a.createAsyncChannel("MsysAddon/fetchPinnedMessageForThread"),
        setNeedsAdminApprovalForNewParticipant: a.createAsyncChannel("MsysAddon/setNeedsAdminApprovalForNewParticipant"),
        respondToAdminApprovalRequest: a.createAsyncChannel("MsysAddon/respondToAdminApprovalRequest"),
        fetchSyncGroupModels: a.createAsyncChannel("MsysAddon/fetchSyncGroupModels"),
        fetchMailboxInfo: a.createAsyncChannel("MsysAddon/fetchMailboxInfo"),
        fetchStats: a.createAsyncChannel("MsysAddon/fetchStats"),
        fetchStickers: a.createAsyncChannel("MsysAddon/fetchStickers"),
        fetchStickerPacks: a.createAsyncChannel("MsysAddon/fetchStickerPacks"),
        fetchStickerSearchResults: a.createAsyncChannel("MsysAddon/fetchStickerSearchResults"),
        issueNewStickerSearchQuery: a.createAsyncChannel("MsysAddon/issueNewStickerSearchQuery"),
        insertRecentSticker: a.createAsyncChannel("MsysAddon/insertRecentSticker"),
        fetchRecentStickers: a.createAsyncChannel("MsysAddon/fetchRecentStickers"),
        fetchStickerSearchResultStatus: a.createAsyncChannel("MsysAddon/fetchStickerSearchResultStatus"),
        issueNewGIFSearchQuery: a.createAsyncChannel("MsysAddon/issueNewGIFSearchQuery"),
        storeQueryStickerStore: a.createAsyncChannel("MsysAddon/storeQueryStickerStore"),
        packListFetchResults: a.createAsyncChannel("MsysAddon/packListFetchResults"),
        downloadStickerPack: a.createAsyncChannel("MsysAddon/downloadStickerPack"),
        fetchGIFSearchResultStatus: a.createAsyncChannel("MsysAddon/fetchGIFSearchResultStatus"),
        fetchGIFSearchResults: a.createAsyncChannel("MsysAddon/fetchGIFSearchResults"),
        sendGIFMessage: a.createAsyncChannel("MsysAddon/sendGIFMessage"),
        getUnreadPendingThreadCount: a.createAsyncChannel("MsysAddon/getUnreadPendingThreadCount"),
        configureTincanHandlers: a.createAsyncChannel("MsysAddon/configureTincanHandlers"),
        markInboxSeen: a.createAsyncChannel("MsysAddon/markInboxSeen"),
        updateDEK: a.createAsyncChannel("MsysAddon/updateDEK"),
        generateTincanKeys: a.createAsyncChannel("MsysAddon/generateTincanKeys"),
        fetchPersistentMenuItems: a.createAsyncChannel("MsysAddon/fetchPersistentMenuItems"),
        fetchThreadNullstateCTAListAndDetails: a.createAsyncChannel("MsysAddon/fetchThreadNullstateCTAListAndDetails"),
        fetchPinnedThreads: a.createAsyncChannel("MsysAddon/fetchPinnedThreads"),
        databaseIsNowInteractive: a.createAsyncChannel("MsysAddon/databaseIsNowInteractive"),
        changeThreadImage: a.createAsyncChannel("MsysAddon/changeThreadImage"),
        changeThreadPhoto: a.createAsyncChannel("MsysAddon/changeThreadPhoto"),
        removeThreadImage: a.createAsyncChannel("MsysAddon/removeThreadImage"),
        optimisticDeclineTransfer: a.createAsyncChannel("MsysAddon/optimisticDeclineTransfer"),
        optimisticCancelPaymentRequest: a.createAsyncChannel("MsysAddon/optimisticCancelPaymentRequest"),
        acceptPaymentRequest: a.createAsyncChannel("MsysAddon/acceptPaymentRequest"),
        sendPayment: a.createAsyncChannel("MsysAddon/sendPayment"),
        fetchPaymentMethodList: a.createAsyncChannel("MsysAddon/fetchPaymentMethodList"),
        pinThread: a.createAsyncChannel("MsysAddon/pinThread"),
        unpinThread: a.createAsyncChannel("MsysAddon/unpinThread"),
        fetchPollDetails: a.createAsyncChannel("MsysAddon/fetchPollDetails"),
        fetchPollVoterList: a.createAsyncChannel("MsysAddon/fetchPollVoterList"),
        createPoll: a.createAsyncChannel("MsysAddon/createPoll"),
        updatePoll: a.createAsyncChannel("MsysAddon/updatePoll"),
        setPaymentMethodDefault: a.createAsyncChannel("MsysAddon/setPaymentMethodDefault"),
        requestPayment: a.createAsyncChannel("MsysAddon/requestPayment"),
        declinePayment: a.createAsyncChannel("MsysAddon/declinePayment"),
        deletePaymentCredential: a.createAsyncChannel("MsysAddon/deletePaymentCredential"),
        deletePayPalFundingOptions: a.createAsyncChannel("MsysAddon/deletePayPalFundingOptions"),
        addNewPaymentMethodCard: a.createAsyncChannel("MsysAddon/addNewPaymentMethodCard"),
        cancelTransfer: a.createAsyncChannel("MsysAddon/cancelTransfer"),
        queryPaymentActivityForTransaction: a.createAsyncChannel("MsysAddon/queryPaymentActivityForTransaction"),
        fetchTransactionDetails: a.createAsyncChannel("MsysAddon/fetchTransactionDetails"),
        fetchPaymentUserAuth: a.createAsyncChannel("MsysAddon/fetchPaymentUserAuth"),
        resolveVideoChatLink: a.createAsyncChannel("MsysAddon/resolveVideoChatLink"),
        fetchVideoChatLinkInfo: a.createAsyncChannel("MsysAddon/fetchVideoChatLinkInfo"),
        clearOptimisticSortingOfSentMessages: a.createAsyncChannel("MsysAddon/clearOptimisticSortingOfSentMessages"),
        mailboxLogoutAndDelete: a.createAsyncChannel("MsysAddon/mailboxLogoutAndDelete"),
        mailboxShutdown: a.createAsyncChannel("MsysAddon/mailboxShutdown"),
        fetchRoomsByOwnerId: a.createAsyncChannel("MsysAddon/fetchRoomsByOwnerId"),
        fetchRoomInviteesList: a.createAsyncChannel("MsysAddon/fetchRoomInviteesList"),
        fetchRoomById: a.createAsyncChannel("MsysAddon/fetchRoomById"),
        addRoomInvitees: a.createAsyncChannel("MsysAddon/addRoomInvitees"),
        revokeRoom: a.createAsyncChannel("MsysAddon/revokeRoom"),
        updateRoomInfo: a.createAsyncChannel("MsysAddon/updateRoomInfo"),
        createRoom: a.createAsyncChannel("MsysAddon/createRoom"),
        setRoomInterest: a.createAsyncChannel("MsysAddon/setRoomInterest"),
        fetchRoomInboxUnitList: a.createAsyncChannel("MsysAddon/fetchRoomInboxUnitList"),
        fetchLinkedGroupForThread: a.createAsyncChannel("MsysAddon/fetchLinkedGroupForThread"),
        fetchLinkedGroupDetails: a.createAsyncChannel("MsysAddon/fetchLinkedGroupDetails"),
        fetchActionItemsForThread: a.createAsyncChannel("MsysAddon/fetchActionItemsForThread"),
        fetchRoomActiveList: a.createAsyncChannel("MsysAddon/fetchRoomActiveList"),
        fetchWorkplaceNotificationSchedule: a.createAsyncChannel("MsysAddon/fetchWorkplaceNotificationSchedule"),
        fetchWorkplaceStatusAffectingSchedule: a.createAsyncChannel("MsysAddon/fetchWorkplaceStatusAffectingSchedule"),
        fetchWorkplaceStatusAffectingEvent: a.createAsyncChannel("MsysAddon/fetchWorkplaceStatusAffectingEvent"),
        fetchWorkplaceStatusOwnStatus: a.createAsyncChannel("MsysAddon/fetchWorkplaceStatusOwnStatus"),
        enableDoNotDisturbMode: a.createAsyncChannel("MsysAddon/enableDoNotDisturbMode"),
        disableDoNotDisturbMode: a.createAsyncChannel("MsysAddon/disableDoNotDisturbMode"),
        setAvailabilityStatus: a.createAsyncChannel("MsysAddon/setAvailabilityStatus"),
        setWorkNotificationSchedule: a.createAsyncChannel("MsysAddon/setWorkNotificationSchedule"),
        fetchRemovedMessages: a.createAsyncChannel("MsysAddon/fetchRemovedMessages"),
        ignoreThread: a.createAsyncChannel("MsysAddon/ignoreThread"),
        unignoreThread: a.createAsyncChannel("MsysAddon/unignoreThread"),
        unarchiveThread: a.createAsyncChannel("MsysAddon/unarchiveThread"),
        fetchRsysAppModel_expensive: a.createAsyncChannel("MsysAddon/fetchRsysAppModel_expensive"),
        setMailbox_DEPRECATED: a.createAsyncChannel("MsysAddon/setMailbox_DEPRECATED"),
        setMailbox: a.createAsyncChannel("MsysAddon/setMailbox"),
        waitForMailbox: a.createAsyncChannel("MsysAddon/waitForMailbox"),
        resetMailbox: a.createAsyncChannel("MsysAddon/resetMailbox"),
        setSyncTraceType: a.createAsyncChannel("MsysAddon/setSyncTraceType"),
        getCameraInfo: a.createAsyncChannel("MsysAddon/getCameraInfo"),
        openUserDataDirectory: a.createFireAndForgetChannel("MsysAddon/openUserDataDirectory"),
        optimisticUpdateThreadDescription: a.createAsyncChannel("MsysAddon/optimisticUpdateThreadDescription")
    };
    t.MsysAddon = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.MsysServiceChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        msysAddonConsts: a.createChannel("MsysServiceChannel/msysAddonConsts"),
        msysDispatchQueue: a.createAsyncChannel("MsysServiceChannel/msysDispatchQueue"),
        skipFetchStats: a.createAsyncChannel("MsysServiceChannel/skipFetchStats"),
        getProxyConfig: a.createAsyncChannel("MsysServiceChannel/getProxyConfig")
    };
    t.MsysServiceChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(84);
    Object.keys(a).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return a[e]
            }
        })
    }));
    var r = n(85);
    Object.keys(r).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e]
            }
        })
    }))
}, function(e, t, n) {
    "use strict";
    let a;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.WorkUserAvailabilityStatusDoNotDisturbSettingMode = t.ON_RN_ELECTRON_EVENT = t.ON_PERFORMANCE_EVENT = t.ON_RSYS_EVENT = t.ON_MQTT_INVALID_SESSION_EVENT = t.ON_ACCESS_TOKEN_INVALID_EVENT = t.ON_SYNC_EVENT = t.CardType = void 0, t.CardType = a,
        function(e) {
            e[e.AMEX = 65] = "AMEX", e[e.DISCOVER = 68] = "DISCOVER", e[e.JCB = 74] = "JCB", e[e.MASTERCARD = 77] = "MASTERCARD", e[e.VISA = 86] = "VISA", e[e.RUPAY = 82] = "RUPAY", e[e.DEFAULT = 0] = "DEFAULT"
        }(a || (t.CardType = a = {}));
    t.ON_SYNC_EVENT = "msys/onSyncEvent";
    t.ON_ACCESS_TOKEN_INVALID_EVENT = "msys/onAccessTokenInvalidEvent";
    t.ON_MQTT_INVALID_SESSION_EVENT = "msys/onMqttInvalidSessionEvent";
    t.ON_RSYS_EVENT = "msys/onRsysEvent";
    t.ON_PERFORMANCE_EVENT = "msys/onPerformanceEvent";
    let r;
    t.ON_RN_ELECTRON_EVENT = "msys/onRnElectronEvent", t.WorkUserAvailabilityStatusDoNotDisturbSettingMode = r,
        function(e) {
            e[e.DEFAULT = 0] = "DEFAULT", e[e.ENABLE_DND = 1] = "ENABLE_DND", e[e.DISABLE_DND = 2] = "DISABLE_DND"
        }(r || (t.WorkUserAvailabilityStatusDoNotDisturbSettingMode = r = {}))
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadAndWrapMsys = function(e, t, n, s, u, S, p) {
        const {
            buildDir: f
        } = (0, r.default)(s), A = require(l.default.resolve(f, "addon.node"));
        let _;
        _ = null === A ? "missingAddon" : "function" == typeof A.fetchBuildVersion ? A.fetchBuildVersion() : "missingFunction";
        if (_ !== e.appVersion) throw Error("Version mismatch. Native has " + _ + " JS has " + e.appVersion);
        A.init(e.userAgent, e.appInfo, e.workspace, e.appVersion, e.keytarServiceName, t, {
            appBuildNumber: e.appBuildNumber,
            aslPath: S
        }, e.proxyConfig);
        const g = (0, a.default)(f);
        let E = (0, o.defer)();
        const y = new h,
            m = new h,
            T = new h,
            C = new h,
            M = new h;
        let R = null;
        return Object.freeze({
            mobileConfigGetBool: A.mobileConfigGetBool,
            mobileConfigGetBoolWithoutLogging: A.mobileConfigGetBoolWithoutLogging,
            mobileConfigGetDouble: A.mobileConfigGetDouble,
            mobileConfigGetDoubleWithoutLogging: A.mobileConfigGetDoubleWithoutLogging,
            mobileConfigGetInt64: A.mobileConfigGetInt64,
            mobileConfigGetInt64WithoutLogging: A.mobileConfigGetInt64WithoutLogging,
            mobileConfigGetString: A.mobileConfigGetString,
            mobileConfigGetStringWithoutLogging: A.mobileConfigGetStringWithoutLogging,
            notification: A.notification,
            storedProcedureNames: A.storedProcedureNames,
            messagingLoadingDirection: A.messagingLoadingDirection,
            notifyAppEnterForeground: A.notifyAppEnterForeground,
            forceReconnect: A.forceReconnect,
            networkOnlineCallback: A.networkOnlineCallback,
            networkOfflineCallback: A.networkOfflineCallback,
            addParticipantsToThread: A.addParticipantsToThread,
            authSessionLogin: A.authSessionLogin,
            removeParticipantFromThread: A.removeParticipantFromThread,
            authSessionLoadUser: A.authSessionLoadUser,
            blockParticipant: A.blockParticipant,
            unblockParticipant: A.unblockParticipant,
            copyAndRedactDatabase: async e => {
                const t = e + ".sql.log",
                    n = l.default.resolve(c.default.tmpdir(), t);
                return await A.copyAndRedactDatabase(n), {
                    databaseFilename: t,
                    databaseFilepath: n
                }
            },
            fetchThreads: A.fetchThreads,
            fetchDeliveryInfo: A.fetchDeliveryInfo,
            fetchThreadModel: A.fetchThreadModel,
            fetchAdvancedThreadModel: A.fetchAdvancedThreadModel,
            fetchThreadThemeColorModels: A.fetchThreadThemeColorModels,
            fetchThreadsPage: A.fetchThreadsPage,
            verifyMessageExists: A.verifyMessageExists,
            setMessageReminder: A.setMessageReminder,
            fetchMessages: A.fetchMessages,
            fetchMessagesPage: A.fetchMessagesPage,
            fetchSavedMessages: A.fetchSavedMessages,
            fetchSavedMessagesPage: A.fetchSavedMessagesPage,
            fetchSavedMessagesPagingInfo: A.fetchSavedMessagesPagingInfo,
            saveOrUnsaveMessage: A.saveOrUnsaveMessage,
            fetchSavedMessagesAttachments: A.fetchSavedMessagesAttachments,
            fetchSavedMessagesAttachmentsItems: A.fetchSavedMessagesAttachmentsItems,
            fetchSavedMessagesAttachmentsCTAs: A.fetchSavedMessagesAttachmentsCTAs,
            fetchUnreadNotifications: A.fetchUnreadNotifications,
            fetchAttachments: A.fetchAttachments,
            fetchAttachmentItemList: A.fetchAttachmentItemList,
            fetchReactions: A.fetchReactions,
            fetchQuickReplies: A.fetchQuickReplies,
            fetchAttachmentCTAs: A.fetchAttachmentCTAs,
            fetchSearchResults: A.fetchSearchResults,
            fetchSearchQueryStatus: A.fetchSearchQueryStatus,
            clearSearchTables: A.clearSearchTables,
            issueSearchQuery: A.issueSearchQuery,
            fetchMessageSearchResults: A.fetchMessageSearchResults,
            fetchMessageSearchQueryStatus: A.fetchMessageSearchQueryStatus,
            clearMessageSearchTable: A.clearMessageSearchTable,
            issueMessageSearchQuery: A.issueMessageSearchQuery,
            fetchMessagesRangeInfoModelForThread: A.fetchMessagesRangeInfoModelForThread,
            fetchThreadsRangeInfoModel: A.fetchThreadsRangeInfoModel,
            fetchThreadPresences: A.fetchThreadPresences,
            fetchThreadPresenceForThread: A.fetchThreadPresenceForThread,
            fetchThreadGroupMembershipRequests: A.fetchThreadGroupMembershipRequests,
            verifyContactRowExists: A.verifyContactRowExists,
            resumeSendingMessage: A.resumeSendingMessage,
            createAndSendOptimisticGroupMessage: A.createAndSendOptimisticGroupMessage,
            createAndSendOptimisticMessageWithAttachment: A.createAndSendOptimisticMessageWithAttachment,
            configureTincanHandlers: A.configureTincanHandlers,
            generateTincanKeys: A.generateTincanKeys,
            createAndSendOptimisticMessageWithAttachments: A.createAndSendOptimisticMessageWithAttachments,
            removeMessage: A.removeMessage,
            globalRemoveMessage: A.globalRemoveMessage,
            setAppState: A.setAppState,
            sendTextMessage: A.sendTextMessage,
            sendStickerMessage: A.sendStickerMessage,
            createAndSendOptimisticReaction: A.createAndSendOptimisticReaction,
            fetchParticipants: A.fetchParticipants,
            fetchParticipantsForThread: A.fetchParticipantsForThread,
            fetchInboxByThreadKey: A.fetchInboxByThreadKey,
            verifyThreadRowExists: A.verifyThreadRowExists,
            fetchMessagesOtidModel: A.fetchMessagesOtidModel,
            fetchContactById: A.fetchContactById,
            fetchContactList: A.fetchContactList,
            markThreadUnreadStatus: A.markThreadUnreadStatus,
            muteThread: A.muteThread,
            unmuteThread: A.unmuteThread,
            showReactNativeWindow: (e, t) => {
                if (t.ttrc) {
                    const {
                        markerId: e,
                        instanceKey: n,
                        startTimestampElectron: a
                    } = t.ttrc, r = d.performance.timeOrigin + d.performance.now() - a;
                    t.ttrc.backdatingDeltaUsedForTraceStart = r, A.QPLMarkerStartBackdated(e, n, r)
                }
                return Promise.resolve(A.showReactNativeWindow(e, JSON.stringify(t), p, u, (e, t) => M.onEvent({
                    type: e,
                    payload: t
                })))
            },
            isNativeWindowOpen: A.isNativeWindowOpen,
            endCall: A.endCall,
            QPLMarkerStartBackdated: A.QPLMarkerStartBackdated,
            archiveThread: A.archiveThread,
            ignoreMessagesForThread: A.ignoreMessagesForThread,
            deleteThread: A.deleteThread,
            fetchGroupThreadsWithParticipant: A.fetchGroupThreadsWithParticipant,
            reportPresenceSetting: A.reportPresenceSetting,
            setOptimisticThreadParticipantAdminStatus: A.setOptimisticThreadParticipantAdminStatus,
            updateThreadName: A.updateThreadName,
            updateThreadTheme: A.updateThreadTheme,
            changeCustomEmoji: A.changeCustomEmoji,
            updateThreadParticipantNickname: A.updateThreadParticipantNickname,
            sendTypingIndicatorStatus: A.sendTypingIndicatorStatus,
            sendAttachmentForward: A.sendAttachmentForward,
            sendMessageForward: A.sendMessageForward,
            pinMessage: A.pinMessage,
            unpinMessage: A.unpinMessage,
            fetchPinnedMessageForThread: A.fetchPinnedMessageForThread,
            setNeedsAdminApprovalForNewParticipant: A.setNeedsAdminApprovalForNewParticipant,
            respondToAdminApprovalRequest: A.respondToAdminApprovalRequest,
            fetchSyncGroupModels: A.fetchSyncGroupModels,
            fetchMailboxInfo: A.fetchMailboxInfo,
            fetchStats: A.fetchStats,
            fetchAdminMessageCTA: A.fetchAdminMessageCTA,
            fetchStickerPacks: A.fetchStickerPacks,
            fetchStickers: A.fetchStickers,
            fetchStickerSearchResults: A.fetchStickerSearchResults,
            issueThreadAttachmentsFetch: A.issueThreadAttachmentsFetch,
            fetchMediaForThread: A.fetchMediaForThread,
            issueNewStickerSearchQuery: A.issueNewStickerSearchQuery,
            storeQueryStickerStore: A.storeQueryStickerStore,
            insertRecentSticker: A.insertRecentSticker,
            fetchRecentStickers: A.fetchRecentStickers,
            fetchStickerSearchResultStatus: A.fetchStickerSearchResultStatus,
            issueNewGIFSearchQuery: A.issueNewGIFSearchQuery,
            fetchGIFSearchResultStatus: A.fetchGIFSearchResultStatus,
            fetchGIFSearchResults: A.fetchGIFSearchResults,
            getUnreadPendingThreadCount: A.getUnreadPendingThreadCount,
            fetchPersistentMenuItems: A.fetchPersistentMenuItems,
            sendGIFMessage: A.sendGIFMessage,
            fetchThreadNullstateCTAListAndDetails: A.fetchThreadNullstateCTAListAndDetails,
            fetchPinnedThreads: A.fetchPinnedThreads,
            databaseIsNowInteractive: A.databaseIsNowInteractive,
            encryptPassword: A.encryptPassword,
            removeThreadImage: A.removeThreadImage,
            changeThreadImage: A.changeThreadImage,
            changeThreadPhoto: A.changeThreadPhoto,
            optimisticDeclineTransfer: A.optimisticDeclineTransfer,
            optimisticCancelPaymentRequest: A.optimisticCancelPaymentRequest,
            acceptPaymentRequest: A.acceptPaymentRequest,
            sendPayment: A.sendPayment,
            fetchPaymentMethodList: A.fetchPaymentMethodList,
            pinThread: A.pinThread,
            unpinThread: A.unpinThread,
            fetchPollDetails: A.fetchPollDetails,
            fetchPollVoterList: A.fetchPollVoterList,
            createPoll: A.createPoll,
            updatePoll: A.updatePoll,
            setPaymentMethodDefault: A.setPaymentMethodDefault,
            requestPayment: A.requestPayment,
            declinePayment: A.declinePayment,
            deletePaymentCredential: A.deletePaymentCredential,
            deletePayPalFundingOptions: A.deletePayPalFundingOptions,
            addNewPaymentMethodCard: A.addNewPaymentMethodCard,
            cancelTransfer: A.cancelTransfer,
            queryPaymentActivityForTransaction: A.queryPaymentActivityForTransaction,
            fetchTransactionDetails: A.fetchTransactionDetails,
            fetchPaymentUserAuth: A.fetchPaymentUserAuth,
            resolveVideoChatLink: A.resolveVideoChatLink,
            fetchVideoChatLinkInfo: A.fetchVideoChatLinkInfo,
            fetchActionItemsForThread: A.fetchActionItemsForThread,
            clearOptimisticSortingOfSentMessages: A.clearOptimisticSortingOfSentMessages,
            mailboxLogoutAndDelete: A.mailboxLogoutAndDelete,
            mailboxShutdown: async () => (E = (0, o.defer)(), A.mailboxShutdown()),
            fetchRoomsByOwnerId: A.fetchRoomsByOwnerId,
            fetchRoomInviteesList: A.fetchRoomInviteesList,
            fetchRoomById: A.fetchRoomById,
            addRoomInvitees: A.addRoomInvitees,
            revokeRoom: A.revokeRoom,
            updateRoomInfo: A.updateRoomInfo,
            createRoom: A.createRoom,
            markInboxSeen: A.markInboxSeen,
            setRoomInterest: A.setRoomInterest,
            fetchRoomInboxUnitList: A.fetchRoomInboxUnitList,
            fetchRoomActiveList: A.fetchRoomActiveList,
            fetchWorkplaceNotificationSchedule: A.fetchWorkplaceNotificationSchedule,
            fetchWorkplaceStatusAffectingSchedule: A.fetchWorkplaceStatusAffectingSchedule,
            fetchWorkplaceStatusAffectingEvent: A.fetchWorkplaceStatusAffectingEvent,
            fetchWorkplaceStatusOwnStatus: A.fetchWorkplaceStatusOwnStatus,
            enableDoNotDisturbMode: A.enableDoNotDisturbMode,
            disableDoNotDisturbMode: A.disableDoNotDisturbMode,
            setAvailabilityStatus: A.setAvailabilityStatus,
            setWorkNotificationSchedule: A.setWorkNotificationSchedule,
            updateDEK: A.updateDEK,
            fetchLinkedGroupForThread: A.fetchLinkedGroupForThread,
            fetchLinkedGroupDetails: A.fetchLinkedGroupDetails,
            fetchRemovedMessages: A.fetchRemovedMessages,
            packListFetchResults: A.packListFetchResults,
            ignoreThread: A.ignoreThread,
            unignoreThread: A.unignoreThread,
            unarchiveThread: A.unarchiveThread,
            downloadStickerPack: A.downloadStickerPack,
            setSyncTraceType: A.setSyncTraceType,
            fetchRsysAppModel_expensive: A.fetchRsysAppModel_expensive,
            loadPrivacyFlowTrigger: A.loadPrivacyFlowTrigger,
            optimisticUpdateThreadDescription: A.optimisticUpdateThreadDescription,
            setMailbox_DEPRECATED: async (e, t, a, r, s, o, c, l, d) => {
                if ("pending" === E.status) try {
                    R && R(i.PerformanceEvents.SYNC_STARTED);
                    const u = n(e.userID);
                    await A.initializeMsys(e, u, g, t, e => y.onEvent(e), e => m.onEvent(e), e => {
                        T.onEvent(e)
                    }, e => {
                        C.onEvent({})
                    }, {
                        enableRsys: a,
                        enableMicrophoneNoiseSuppression: r,
                        enableWatchTogether: s,
                        enableSyncTrace: o,
                        enableSendTrace: c
                    }, l, null, (e, t) => {
                        R && R(e)
                    }, d), E.resolve()
                } catch (e) {
                    throw E.reject(e), e
                }
            },
            setMailbox: async (e, t, a, r, s) => {
                if ("pending" === E.status) try {
                    R && R(i.PerformanceEvents.SYNC_STARTED);
                    const o = n(e.userID);
                    await A.initializeMsys(e, o, g, t, e => y.onEvent(e), e => m.onEvent(e), e => {
                        T.onEvent(e)
                    }, e => {
                        C.onEvent({})
                    }, a, r, null, (e, t) => {
                        R && R(e)
                    }, s), E.resolve()
                } catch (e) {
                    throw E.reject(e), e
                }
            },
            waitForMailbox: () => E.promise,
            addSyncListener: e => y.addCallback(e),
            addRsysListener: e => m.addCallback(e),
            addAccessTokenInvalidListener: e => T.addCallback(e),
            addMqttInvalidSessionListener: e => C.addCallback(e),
            addRNElectronCallback: e => M.addCallback(e),
            setPerformanceListener: e => {
                R = e
            },
            getCameraInfo: A.getCameraInfo,
            openUserDataDirectory: A.openUserDataDirectory,
            resetMailbox: A.resetMailbox
        })
    };
    var a = u(n(86)),
        r = u(n(16)),
        s = u(n(41)),
        o = n(87),
        i = n(10),
        c = u(n(13)),
        l = u(n(1)),
        d = n(88);

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class h {
        constructor() {
            this._events = [], this._callbackManager = new s.default
        }
        onEvent(e) {
            this._callbackManager.empty() ? this._events.push(e) : this._callbackManager.invoke(e)
        }
        addCallback(e) {
            return this._events.forEach(t => e(t)), this._events = [], this._callbackManager.addCallback(e)
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return require(r.default.resolve(e, "dasm", "dasm"))
    };
    var a, r = (a = n(1)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.defer = function() {
        let e = () => {},
            t = void 0,
            n = void 0,
            a = () => {},
            r = "pending";
        const s = new Promise((s, o) => {
            e = e => {
                r = "fulfilled", t = e, s(e)
            }, a = e => {
                r = "rejected", n = e, o(e)
            }
        });
        return {
            get resolve() {
                return e
            },
            get reject() {
                return a
            },
            get result() {
                return t
            },
            get error() {
                return n
            },
            get promise() {
                return s
            },
            get status() {
                return r
            }
        }
    }
}, function(e, t) {
    e.exports = require("perf_hooks")
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            LocalNotificationService: t,
            PushNotificationService: n
        } = r.default;
        return {
            notifications: {
                local: {
                    get native() {
                        return function(e, t) {
                            const {
                                post: n,
                                clearWithGroupIDs: a,
                                clearWithTags: r,
                                clearGroupIDsForDeliveredMessageIDs: s,
                                clear: o
                            } = t;
                            return t.setUserID(e), {
                                post: n,
                                clearWithGroupIDs: a,
                                clearWithTags: r,
                                clearGroupIDsForDeliveredMessageIDs: s,
                                clear: o
                            }
                        }(e.userId, t.nativeHandler)
                    }
                },
                push: {
                    requestPushToken: n.requestPushToken,
                    getQueuedLaunchInfo: n.getQueuedLaunchInfo,
                    clearQueuedLaunchInfo: () => n.setQueuedLaunchInfo(null),
                    unregisterPushToken: n.unregisterPushToken
                }
            }
        }
    };
    var a, r = (a = n(2)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            electron: t,
            MenuService: n,
            WindowService: A,
            URLService: g,
            PermissionsService: E,
            downloadImageToTempFile: y,
            appConfig: m,
            maybeQueueRelaunch: T
        } = l.default, C = "Windows_NT" === p.default.type() ? "windows" : "mac", M = p.default.release(), R = [], I = console.warn;
        console.warn = function(e) {
            if ("string" == typeof e) {
                if (R.some(t => e.includes(t))) return
            }
            I.apply(console, arguments)
        };
        const v = console.error;
        return console.error = function(e, ...t) {
            "string" == typeof e && e.includes("Warning: %s is deprecated in StrictMode.") && "findDOMNode" === t[1] && "string" == typeof t[2] && (t[2].includes("DraftEditor") || t[2].includes("Transition")) || "string" == typeof e && e.includes("Warning: moveSelectionBackward should only be called with a collapsed SelectionState") || v.apply(console, arguments)
        }, {
            app: {
                addAppFocusListener: e => (A.windowEvents.on("appFocusChanged", e), () => {
                    A.windowEvents.off("appFocusChanged", e)
                }),
                isAppFocused: () => A.isAppFocused,
                factoryReset: () => n.executeFactoryReset(!0),
                relaunch: () => {
                    T(h.remote.app), h.remote.app.exit(0)
                },
                crash: () => {
                    process.crash()
                }
            },
            platform: {
                osName: C,
                deviceID: l.default.deviceID,
                hostname: l.default.hostname,
                getAppVersion: () => m.appVersion,
                getBuildInfo: () => ({
                    branch: c.branch,
                    buildType: c.buildType,
                    number: c.number,
                    revision: c.revision,
                    timestamp: c.timestamp
                }),
                getAppInfo: () => m.appInfo,
                getBufferFromDataUri: _,
                isMacPlatform: a.isMacPlatform,
                isWindowsPlatform: a.isWindowsPlatform,
                isMojaveOrHigher: () => "mac" === C && (0, r.isVersionSameOrHigher)(M, "18.0.0"),
                isWindows10OrHigher: () => "mac" !== C && (0, r.isVersionSameOrHigher)(M, "10.0.0"),
                openOSPrivacySettings: e => {
                    A.openOSPrivacySettings(e)
                },
                isMacStore: () => m.isMacStore,
                isWindowsStore: () => m.isWindowsStore,
                isWindowsStoreBeta: () => m.isWindowsStoreBeta,
                getAppSource: () => m.appSource,
                askForMicrophoneAccess: () => "mac" !== C ? Promise.resolve(!0) : E.askForMicrophoneAccess(),
                askForCameraAccess: () => "mac" !== C ? Promise.resolve(!0) : E.askForCameraAccess(),
                setBadgeCountForUser(t) {
                    "windows" === C ? t > 0 ? o.BadgeChannel.setOverlayImage(e.windowKey, (0, d.drawWindowsBadge)(t)) : o.BadgeChannel.setOverlayImage(e.windowKey, null) : o.BadgeChannel.setBadgeCountForUser(e.userId, t)
                },
                openExternalURL(e, n) {
                    let a = e;
                    n && (a = g.addQueryParams(n, e)), t.shell.openExternal(a)
                },
                openRegistrationURL() {
                    t.shell.openExternal(`https://www.facebook.com/reg/?cid=${m.appInfo.appID}&app_version=${m.appVersion}`)
                },
                openURLInWebWindow(e, t) {
                    A.createWebWindow({
                        userID: t,
                        url: e,
                        width: 910
                    })
                },
                getDarkTemplarLogFiles(e) {
                    const t = l.default.paths.logs;
                    return (0, u.readFilesFromDirectory)(t, {
                        fileNamePrefixes: [s.ArchonLogFileNamePrefix],
                        maxResults: e
                    })
                },
                getMsysLogFiles(e) {
                    const t = l.default.paths.logs;
                    return (0, u.readFilesFromDirectory)(t, {
                        fileNamePrefixes: [s.MsysLogFileNamePrefix],
                        excludePhrases: ["unknown"],
                        maxResults: e
                    })
                },
                getRtcLogFiles(e) {
                    const t = l.default.paths.logs;
                    return (0, u.readFilesFromDirectory)(t, {
                        fileNamePrefixes: [s.RtcLogFileNamePrefix],
                        excludePhrases: ["unknown"],
                        maxResults: e
                    })
                },
                getElectronLogFiles() {
                    const e = l.default.paths.logs;
                    return (0, u.readFilesFromDirectory)(e, {
                        fileNamePrefixes: [s.MainLogFileName, s.RendererLogFileName]
                    })
                },
                getSquirrelLogFiles() {
                    if ("mac" !== C) return null;
                    const e = l.default.paths.squirrelMacLogs;
                    return (0, u.readFilesFromDirectory)(e, {
                        fileNamePrefixes: ["ShipIt"]
                    })
                },
                fetchExperiments: i.ExperimentationChannel.getForUser,
                fetchGatekeepers: i.GatekeeperChannel.getForUser,
                getLoggedOutGatekeepers: i.GatekeeperChannel.getLoggedOut,
                listenForPowerEvent: (e, n) => (t.powerMonitor.on(e, n), () => {
                    t.powerMonitor.off(e, n)
                }),
                openContextMenu(e) {
                    h.remote.Menu.buildFromTemplate(e).popup({})
                },
                openMenuOptions() {
                    n.popupMenu()
                },
                showErrorBox(e, t) {
                    h.remote.dialog.showErrorBox(e, t)
                },
                showMessageBox: t => h.remote.dialog.showMessageBox(e.window, t),
                downloadImageToTempFile: e => y(e),
                openDevTools() {
                    e.window.webContents.openDevTools()
                },
                getPhotoFileNames: async e => (await (0, u.readAllDirs)([l.default.paths.downloads, l.default.paths.media, l.default.paths.desktop])).slice(0, e)
            },
            fs: S.default,
            path: f.default,
            ipcRenderer: h.ipcRenderer
        }
    };
    var a = n(42),
        r = n(91),
        s = n(10),
        o = n(92),
        i = n(93),
        c = n(43),
        l = A(n(2)),
        d = n(94),
        u = n(95),
        h = n(0),
        S = A(n(3)),
        p = A(n(13)),
        f = A(n(1));

    function A(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function _(e) {
        if (!/^data\:/i.test(e)) throw new Error('`uri` does not appear to be a Data URI (must begin with "data:")');
        const t = e.replace(/\r?\n/g, ""),
            n = t.indexOf(",");
        if (-1 === n || n <= 4) throw new Error("malformed data: URI");
        const a = t.substring(5, n).split(";");
        let r = !1;
        for (let e = 1; e < a.length; e++) "base64" == a[e] && (r = !0);
        const s = unescape(t.substring(n + 1)),
            o = r ? "base64" : "ascii";
        return Buffer.from(s, o)
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isVersionSameOrHigher = function(e, t) {
        const n = e.split("."),
            a = t.split("."),
            r = Math.min(n.length, a.length);
        for (let e = 0; e < r; ++e) {
            const t = parseInt(n[e], 10),
                r = parseInt(a[e], 10);
            if (t > r) return !0;
            if (t < r) return !1
        }
        return n.length >= a.length
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.BadgeChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        setOverlayImage: a.createFireAndForgetChannel("BadgeChannel/setOverlayImage"),
        setBadgeCountForUser: a.createFireAndForgetChannel("BadgeChannel/setBadgeCountForUser")
    };
    t.BadgeChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GatekeeperChannel = t.ExperimentationChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        getForUser: a.createAsyncChannel("ExperimentationChannel/getForUser")
    };
    t.ExperimentationChannel = s;
    const o = {
        getForUser: a.createAsyncChannel("GatekeeperChannel/getForUser"),
        getLoggedOut: a.createAsyncChannel("GatekeeperChannel/getLoggedOut")
    };
    t.GatekeeperChannel = o
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.drawWindowsBadge = function(e) {
        const t = document.createElement("canvas");
        t.width = Math.ceil(20), t.height = t.width;
        const n = t.getContext("2d");
        if (!n) return null;
        return n.clearRect(0, 0, t.width, t.height), n.fillStyle = "red", n.beginPath(), n.arc(10, 10, 10, 0, 2 * Math.PI), n.fill(), n.font = "14px segoe ui", n.textAlign = "center", n.textBaseline = "middle", n.fillStyle = "white", n.fillText(e.toString(), 10, 10), t.toDataURL()
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.sortFilesByCreationTime = c, t.readFilesFromDirectory = async function(e, t) {
        const {
            excludePhrases: n,
            fileNamePrefixes: a,
            maxResults: i
        } = t;
        let l = await (0, o.promisify)(r.default.readdir)(e);
        null != a && (l = l.filter(e => a.some(t => e.startsWith(t))));
        n && (l = l.filter(e => !n.some(t => e.includes(t))));
        null != i && (await c(e, l, "desc"), l = l.slice(0, i));
        const d = {};
        return await Promise.all(l.map(async t => {
            d[t] = await (0, o.promisify)(r.default.readFile)(s.default.resolve(e, t), "utf8")
        })), d
    }, t.readAllDirs = async function(e) {
        const t = await Promise.all(e.map(async e => async function e(t) {
            let n;
            try {
                n = await (0, o.promisify)(r.default.readdir)(t)
            } catch (e) {
                return a.default.error(`Failed to read directory ${t}, error: ${e}`), []
            }
            const i = await Promise.all(n.map(async n => {
                let i, c;
                try {
                    c = s.default.extname(n), i = (await (0, o.promisify)(r.default.stat)(s.default.resolve(t, n))).isDirectory()
                } catch (e) {
                    return a.default.error(`Failed to read directory ${t}, error: ${e}`), []
                }
                return i && ".asar" !== c ? e(s.default.join(t, n)) : ".jpg" === c || ".jpeg" === c || ".png" === c ? Promise.resolve([s.default.join(t, n)]) : void 0
            }));
            let c = [];
            return i.forEach(e => {
                e && (c = c.concat(e))
            }), c
        }(e)));
        let n = [];
        return t.forEach(e => {
            n = n.concat(e)
        }), await c("", n, "desc"), n
    };
    var a = i(n(9)),
        r = i(n(3)),
        s = i(n(1)),
        o = n(6);

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    async function c(e, t, n) {
        const i = {};
        return await Promise.all(t.map(async t => {
            let n;
            try {
                n = await (0, o.promisify)(r.default.stat)(s.default.resolve(e, t))
            } catch (e) {
                return void a.default.error(`error: ${e}`)
            }
            i[t] = n.birthtimeMs
        })), "desc" === n ? t.sort((e, t) => i[t] - i[e]) : t.sort((e, t) => i[e] - i[t]), Promise.resolve()
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            WindowService: t
        } = o.default;
        return {
            portal: {
                createPortalBridge: (t, n) => {
                    const o = (0, s.extendBridge)({
                        ...e,
                        window: t,
                        windowKey: t.id
                    }, n, r.default, a.default);
                    return o.spellcheck.initializeSpellcheck(), o
                },
                getPortalWindow: e => t.getPortalWindow(e),
                getPortalWindowKey(e) {
                    const n = t.getPortalWindow(e);
                    return n ? n.id : null
                }
            }
        }
    };
    var a = i(n(44)),
        r = i(n(47)),
        s = n(48),
        o = i(n(2));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = o(n(98)),
        r = n(45),
        s = o(n(102));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    let i;
    const c = "darwin" === process.platform;
    let l = "renderer" === process.type ? n(0).webFrame : null;
    const d = ["ain't", "aren't", "can't", "could've", "couldn't", "couldn't've", "didn't", "doesn't", "don't", "hadn't", "hadn't've", "hasn't", "haven't", "he'd", "he'd've", "he'll", "he's", "how'd", "how'll", "how's", "I'd", "I'd've", "I'll", "I'm", "I've", "isn't", "it'd", "it'd've", "it'll", "it's", "let's", "ma'am", "mightn't", "mightn't've", "might've", "mustn't", "must've", "needn't", "not've", "o'clock", "shan't", "she'd", "she'd've", "she'll", "she's", "should've", "shouldn't", "shouldn't've", "that'll", "that's", "there'd", "there'd've", "there're", "there's", "they'd", "they'd've", "they'll", "they're", "they've", "wasn't", "we'd", "we'd've", "we'll", "we're", "we've", "weren't", "what'll", "what're", "what's", "what've", "when's", "where'd", "where's", "where've", "who'd", "who'll", "who're", "who's", "who've", "why'll", "why're", "why's", "won't", "would've", "wouldn't", "wouldn't've", "y'all", "y'all'd've", "you'd", "you'd've", "you'll", "you're", "you've"].reduce((e, t) => (e[t.replace(/'.*/, "")] = !0, e), {});
    t.default = class {
        constructor() {
            if (this._dictionarySync = void 0, this._currentSpellchecker = void 0, this._currentSpellcheckerLanguage = void 0, this._isMisspelledCache = void 0, this.handleElectronSpellCheck = (e, t) => {
                    if (!this._currentSpellchecker) return void t([]);
                    t(e.filter(e => this._isMispelled(e)))
                }, i = n(46).default.Spellchecker, this._dictionarySync = new a.default, this._currentSpellchecker = null, this._currentSpellcheckerLanguage = null, this._isMisspelledCache = new s.default({
                    max: 5e3
                }), c) return this._currentSpellchecker = new i, this._currentSpellcheckerLanguage = "en-US", void(l && this.setSpellcheckProvider(l))
        }
        async switchLanguage(e) {
            if (this._isMisspelledCache.reset(), c && this._currentSpellchecker) return this._currentSpellcheckerLanguage = e, this._currentSpellchecker.setDictionary(e); {
                let t, n;
                try {
                    const {
                        dictionary: a,
                        language: r
                    } = await this._loadDictionaryForLanguageWithAlternatives(e);
                    t = r, n = a
                } catch (t) {
                    throw (0, r.d)(`Failed to load dictionary ${e}: ${t.message}`), t
                }
                if (!n) return (0, r.d)(`dictionary for ${e}_${t} is not available`), this._currentSpellcheckerLanguage = t, void(this._currentSpellchecker = null);
                (0, r.d)(`Setting current spellchecker to ${t}, requested language was ${e}`), this._currentSpellcheckerLanguage === t && this._currentSpellchecker || ((0, r.d)("Creating node-spellchecker instance"), this._currentSpellchecker = new i, this._currentSpellchecker.setDictionary(t, n), this._currentSpellcheckerLanguage = t, l && this.setSpellcheckProvider(l))
            }
        }
        async getCorrectionsForMisspelling(e) {
            return this._currentSpellchecker ? this._currentSpellchecker.getCorrectionsForMisspelling(e) : null
        }
        async _loadDictionaryForLanguageWithAlternatives(e) {
            if (!this._dictionarySync) return {
                dictionary: null,
                language: e
            };
            try {
                const t = await this._dictionarySync.loadDictionaryForLanguage(e);
                return (0, r.d)("Loaded dictionary", t), {
                    dictionary: t,
                    language: e
                }
            } catch (t) {
                return (0, r.d)("Loading dictionary failed", t), {
                    dictionary: null,
                    language: e
                }
            }
        }
        _isMispelled(e) {
            const t = this._isMisspelledCache.get(e);
            if (void 0 !== t) return t;
            const n = (() => {
                if (d[e.toLocaleLowerCase()]) return !1;
                if (!this._currentSpellchecker) return !1;
                if (c) return this._currentSpellchecker.isMisspelled(e); {
                    const t = this._currentSpellchecker.checkSpelling(e);
                    return !(t.length < 1) && (0 !== t[0].start || this._currentSpellchecker.isMisspelled(e.toLocaleLowerCase()))
                }
            })();
            return this._isMisspelledCache.set(e, n), n
        }
        setSpellcheckProvider(e) {
            this._currentSpellcheckerLanguage && e.setSpellCheckProvider(this._currentSpellcheckerLanguage, {
                spellCheck: this.handleElectronSpellCheck
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var a = n(45),
        r = n(0),
        s = l(n(3)),
        o = l(n(100)),
        i = l(n(1)),
        c = n(6);

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    const d = (0, c.promisify)(s.default.exists),
        u = (0, c.promisify)(s.default.readFile),
        h = (0, c.promisify)(s.default.unlink),
        S = "renderer" === process.type ? n(0).remote.app : n(0).app;
    let p;
    t.default = class {
        constructor() {
            this.cacheDir = void 0, p = n(46).default.getURLForHunspellDictionary, this.cacheDir = i.default.join(S.getPath("userData"), "dictionaries"), o.default.sync(this.cacheDir)
        }
        async loadDictionaryForLanguage(e) {
            if ("darwin" === process.platform) return new Buffer([]);
            const t = (0, a.normalizeLanguageCode)(e),
                n = i.default.join(this.cacheDir, `${t}.bdic`);
            let r = !1;
            try {
                if (await d(n)) {
                    r = !0, (0, a.d)(`Returning local copy: ${n}`);
                    let e = await u(n, {});
                    if (e.length < 8192) throw new Error("File exists but is most likely bogus");
                    return e
                }
            } catch (e) {
                (0, a.d)(`Failed to read file ${n}: ${e.message}`)
            }
            if (r) try {
                await h(n)
            } catch (e) {
                throw (0, a.d)("Can't clear out file, bailing"), e
            }
            let s = p(t);
            (0, a.d)(`Actually downloading ${s}`), await this.downloadFileOrUrl(s, n);
            let o = await u(n, {});
            if (o.length < 8192) throw new Error("File exists but is most likely bogus");
            return o
        }
        async downloadFileOrUrl(e, t) {
            await r.ipcRenderer.invoke("spellcheck/download_dictionary", e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    e.exports.parse = function(e) {
        var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
        if (!n) return null;
        n.shift();
        var a = null,
            r = [];
        n[2] && (a = (t = n[2].split("-")).shift(), r = t);
        var s = [];
        n[5] && (s = n[5].split("-")).shift();
        var o = [];
        if (n[6]) {
            var i;
            (t = n[6].split("-")).shift();
            for (var c = []; t.length;) {
                var l = t.shift();
                1 === l.length ? i ? (o.push({
                    singleton: i,
                    extension: c
                }), i = l, c = []) : i = l : c.push(l)
            }
            o.push({
                singleton: i,
                extension: c
            })
        }
        var d = [];
        n[7] && ((d = n[7].split("-")).shift(), d.shift());
        var u = [];
        return n[8] && (u = n[8].split("-")).shift(), {
            langtag: {
                language: {
                    language: a,
                    extlang: r
                },
                script: n[3] || null,
                region: n[4] || null,
                variant: s,
                extension: o,
                privateuse: d
            },
            privateuse: u,
            grandfathered: {
                irregular: n[0] || null,
                regular: n[1] || null
            }
        }
    }
}, function(e, t, n) {
    var a = n(1),
        r = n(3),
        s = parseInt("0777", 8);

    function o(e, t, n, i) {
        "function" == typeof t ? (n = t, t = {}) : t && "object" == typeof t || (t = {
            mode: t
        });
        var c = t.mode,
            l = t.fs || r;
        void 0 === c && (c = s & ~process.umask()), i || (i = null);
        var d = n || function() {};
        e = a.resolve(e), l.mkdir(e, c, (function(n) {
            if (!n) return d(null, i = i || e);
            switch (n.code) {
                case "ENOENT":
                    o(a.dirname(e), t, (function(n, a) {
                        n ? d(n, a) : o(e, t, d, a)
                    }));
                    break;
                default:
                    l.stat(e, (function(e, t) {
                        e || !t.isDirectory() ? d(n, i) : d(null, i)
                    }))
            }
        }))
    }
    e.exports = o.mkdirp = o.mkdirP = o, o.sync = function e(t, n, o) {
        n && "object" == typeof n || (n = {
            mode: n
        });
        var i = n.mode,
            c = n.fs || r;
        void 0 === i && (i = s & ~process.umask()), o || (o = null), t = a.resolve(t);
        try {
            c.mkdirSync(t, i), o = o || t
        } catch (r) {
            switch (r.code) {
                case "ENOENT":
                    o = e(a.dirname(t), n, o), e(t, n, o);
                    break;
                default:
                    var l;
                    try {
                        l = c.statSync(t)
                    } catch (e) {
                        throw r
                    }
                    if (!l.isDirectory()) throw r
            }
        }
        return o
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setDictionary = u, t.isMisspelled = function() {
        return d(), l.isMisspelled.apply(l, arguments)
    }, t.checkSpelling = function() {
        return d(), l.checkSpelling.apply(l, arguments)
    }, t.add = function() {
        d(), l.add.apply(l, arguments)
    }, t.remove = function() {
        d(), l.remove.apply(l, arguments)
    }, t.getCorrectionsForMisspelling = function() {
        return d(), l.getCorrectionsForMisspelling.apply(l, arguments)
    }, t.getAvailableDictionaries = function() {
        return d(), l.getAvailableDictionaries.apply(l, arguments)
    }, t.getURLForHunspellDictionary = function(e) {
        const t = ["ko", "sh", "sq", "sr"];
        let n = e.replace(/_/g, "-").toLowerCase();
        const a = n.split("-")[0];
        for (let e = 0; e < t.length; e++) a === t[e] && (n = t[e]);
        return "https://redirector.gvt1.com/edgedl/chrome/dict/" + n + ({
            "tr-tr": "-4-0",
            "tg-tg": "-5-0",
            "en-ca": "-7-1",
            "en-gb": "-7-1",
            "en-us": "-7-1",
            "fa-ir": "-7-0"
        } [n] || "-3-0") + ".bdic"
    }, t.Spellchecker = void 0;
    const a = n(1),
        r = n(3);
    let s, o = a.resolve(__dirname, "..");
    const i = a.resolve(o, `spellchecker_${"win32"===process.platform?"win":"mac"}.node`);
    s = (process.platform, require(i));
    const c = s.Spellchecker;
    t.Spellchecker = c;
    let l = null;
    const d = function() {
        if (l) return;
        let e = process.env.LANG;
        e = e ? e.split(".")[0] : "en_US", l = new c, u(e, a.join(__dirname, "..", "vendor", "hunspell_dictionaries"))
    };

    function u(e, t) {
        d();
        const n = a.join(t, e.replace(/_/g, "-") + ".bdic");
        let s = null;
        try {
            s = r.readFileSync(n)
        } catch (e) {
            return !1
        }
        return l.setDictionary(e, s)
    }
}, function(e, t, n) {
    "use strict";
    const a = n(103),
        r = Symbol("max"),
        s = Symbol("length"),
        o = Symbol("lengthCalculator"),
        i = Symbol("allowStale"),
        c = Symbol("maxAge"),
        l = Symbol("dispose"),
        d = Symbol("noDisposeOnSet"),
        u = Symbol("lruList"),
        h = Symbol("cache"),
        S = Symbol("updateAgeOnGet"),
        p = () => 1;
    const f = (e, t, n) => {
            const a = e[h].get(t);
            if (a) {
                const t = a.value;
                if (A(e, t)) {
                    if (g(e, a), !e[i]) return
                } else n && (e[S] && (a.value.now = Date.now()), e[u].unshiftNode(a));
                return t.value
            }
        },
        A = (e, t) => {
            if (!t || !t.maxAge && !e[c]) return !1;
            const n = Date.now() - t.now;
            return t.maxAge ? n > t.maxAge : e[c] && n > e[c]
        },
        _ = e => {
            if (e[s] > e[r])
                for (let t = e[u].tail; e[s] > e[r] && null !== t;) {
                    const n = t.prev;
                    g(e, t), t = n
                }
        },
        g = (e, t) => {
            if (t) {
                const n = t.value;
                e[l] && e[l](n.key, n.value), e[s] -= n.length, e[h].delete(n.key), e[u].removeNode(t)
            }
        };
    class E {
        constructor(e, t, n, a, r) {
            this.key = e, this.value = t, this.length = n, this.now = a, this.maxAge = r || 0
        }
    }
    const y = (e, t, n, a) => {
        let r = n.value;
        A(e, r) && (g(e, n), e[i] || (r = void 0)), r && t.call(a, r.value, r.key, e)
    };
    e.exports = class {
        constructor(e) {
            if ("number" == typeof e && (e = {
                    max: e
                }), e || (e = {}), e.max && ("number" != typeof e.max || e.max < 0)) throw new TypeError("max must be a non-negative number");
            this[r] = e.max || 1 / 0;
            const t = e.length || p;
            if (this[o] = "function" != typeof t ? p : t, this[i] = e.stale || !1, e.maxAge && "number" != typeof e.maxAge) throw new TypeError("maxAge must be a number");
            this[c] = e.maxAge || 0, this[l] = e.dispose, this[d] = e.noDisposeOnSet || !1, this[S] = e.updateAgeOnGet || !1, this.reset()
        }
        set max(e) {
            if ("number" != typeof e || e < 0) throw new TypeError("max must be a non-negative number");
            this[r] = e || 1 / 0, _(this)
        }
        get max() {
            return this[r]
        }
        set allowStale(e) {
            this[i] = !!e
        }
        get allowStale() {
            return this[i]
        }
        set maxAge(e) {
            if ("number" != typeof e) throw new TypeError("maxAge must be a non-negative number");
            this[c] = e, _(this)
        }
        get maxAge() {
            return this[c]
        }
        set lengthCalculator(e) {
            "function" != typeof e && (e = p), e !== this[o] && (this[o] = e, this[s] = 0, this[u].forEach(e => {
                e.length = this[o](e.value, e.key), this[s] += e.length
            })), _(this)
        }
        get lengthCalculator() {
            return this[o]
        }
        get length() {
            return this[s]
        }
        get itemCount() {
            return this[u].length
        }
        rforEach(e, t) {
            t = t || this;
            for (let n = this[u].tail; null !== n;) {
                const a = n.prev;
                y(this, e, n, t), n = a
            }
        }
        forEach(e, t) {
            t = t || this;
            for (let n = this[u].head; null !== n;) {
                const a = n.next;
                y(this, e, n, t), n = a
            }
        }
        keys() {
            return this[u].toArray().map(e => e.key)
        }
        values() {
            return this[u].toArray().map(e => e.value)
        }
        reset() {
            this[l] && this[u] && this[u].length && this[u].forEach(e => this[l](e.key, e.value)), this[h] = new Map, this[u] = new a, this[s] = 0
        }
        dump() {
            return this[u].map(e => !A(this, e) && {
                k: e.key,
                v: e.value,
                e: e.now + (e.maxAge || 0)
            }).toArray().filter(e => e)
        }
        dumpLru() {
            return this[u]
        }
        set(e, t, n) {
            if ((n = n || this[c]) && "number" != typeof n) throw new TypeError("maxAge must be a number");
            const a = n ? Date.now() : 0,
                i = this[o](t, e);
            if (this[h].has(e)) {
                if (i > this[r]) return g(this, this[h].get(e)), !1;
                const o = this[h].get(e).value;
                return this[l] && (this[d] || this[l](e, o.value)), o.now = a, o.maxAge = n, o.value = t, this[s] += i - o.length, o.length = i, this.get(e), _(this), !0
            }
            const S = new E(e, t, i, a, n);
            return S.length > this[r] ? (this[l] && this[l](e, t), !1) : (this[s] += S.length, this[u].unshift(S), this[h].set(e, this[u].head), _(this), !0)
        }
        has(e) {
            if (!this[h].has(e)) return !1;
            const t = this[h].get(e).value;
            return !A(this, t)
        }
        get(e) {
            return f(this, e, !0)
        }
        peek(e) {
            return f(this, e, !1)
        }
        pop() {
            const e = this[u].tail;
            return e ? (g(this, e), e.value) : null
        }
        del(e) {
            g(this, this[h].get(e))
        }
        load(e) {
            this.reset();
            const t = Date.now();
            for (let n = e.length - 1; n >= 0; n--) {
                const a = e[n],
                    r = a.e || 0;
                if (0 === r) this.set(a.k, a.v);
                else {
                    const e = r - t;
                    e > 0 && this.set(a.k, a.v, e)
                }
            }
        }
        prune() {
            this[h].forEach((e, t) => f(this, t, !1))
        }
    }
}, function(e, t, n) {
    "use strict";

    function a(e) {
        var t = this;
        if (t instanceof a || (t = new a), t.tail = null, t.head = null, t.length = 0, e && "function" == typeof e.forEach) e.forEach((function(e) {
            t.push(e)
        }));
        else if (arguments.length > 0)
            for (var n = 0, r = arguments.length; n < r; n++) t.push(arguments[n]);
        return t
    }

    function r(e, t, n) {
        var a = t === e.head ? new i(n, null, t, e) : new i(n, t, t.next, e);
        return null === a.next && (e.tail = a), null === a.prev && (e.head = a), e.length++, a
    }

    function s(e, t) {
        e.tail = new i(t, e.tail, null, e), e.head || (e.head = e.tail), e.length++
    }

    function o(e, t) {
        e.head = new i(t, null, e.head, e), e.tail || (e.tail = e.head), e.length++
    }

    function i(e, t, n, a) {
        if (!(this instanceof i)) return new i(e, t, n, a);
        this.list = a, this.value = e, t ? (t.next = this, this.prev = t) : this.prev = null, n ? (n.prev = this, this.next = n) : this.next = null
    }
    e.exports = a, a.Node = i, a.create = a, a.prototype.removeNode = function(e) {
        if (e.list !== this) throw new Error("removing node which does not belong to this list");
        var t = e.next,
            n = e.prev;
        return t && (t.prev = n), n && (n.next = t), e === this.head && (this.head = t), e === this.tail && (this.tail = n), e.list.length--, e.next = null, e.prev = null, e.list = null, t
    }, a.prototype.unshiftNode = function(e) {
        if (e !== this.head) {
            e.list && e.list.removeNode(e);
            var t = this.head;
            e.list = this, e.next = t, t && (t.prev = e), this.head = e, this.tail || (this.tail = e), this.length++
        }
    }, a.prototype.pushNode = function(e) {
        if (e !== this.tail) {
            e.list && e.list.removeNode(e);
            var t = this.tail;
            e.list = this, e.prev = t, t && (t.next = e), this.tail = e, this.head || (this.head = e), this.length++
        }
    }, a.prototype.push = function() {
        for (var e = 0, t = arguments.length; e < t; e++) s(this, arguments[e]);
        return this.length
    }, a.prototype.unshift = function() {
        for (var e = 0, t = arguments.length; e < t; e++) o(this, arguments[e]);
        return this.length
    }, a.prototype.pop = function() {
        if (this.tail) {
            var e = this.tail.value;
            return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, e
        }
    }, a.prototype.shift = function() {
        if (this.head) {
            var e = this.head.value;
            return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, e
        }
    }, a.prototype.forEach = function(e, t) {
        t = t || this;
        for (var n = this.head, a = 0; null !== n; a++) e.call(t, n.value, a, this), n = n.next
    }, a.prototype.forEachReverse = function(e, t) {
        t = t || this;
        for (var n = this.tail, a = this.length - 1; null !== n; a--) e.call(t, n.value, a, this), n = n.prev
    }, a.prototype.get = function(e) {
        for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
        if (t === e && null !== n) return n.value
    }, a.prototype.getReverse = function(e) {
        for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
        if (t === e && null !== n) return n.value
    }, a.prototype.map = function(e, t) {
        t = t || this;
        for (var n = new a, r = this.head; null !== r;) n.push(e.call(t, r.value, this)), r = r.next;
        return n
    }, a.prototype.mapReverse = function(e, t) {
        t = t || this;
        for (var n = new a, r = this.tail; null !== r;) n.push(e.call(t, r.value, this)), r = r.prev;
        return n
    }, a.prototype.reduce = function(e, t) {
        var n, a = this.head;
        if (arguments.length > 1) n = t;
        else {
            if (!this.head) throw new TypeError("Reduce of empty list with no initial value");
            a = this.head.next, n = this.head.value
        }
        for (var r = 0; null !== a; r++) n = e(n, a.value, r), a = a.next;
        return n
    }, a.prototype.reduceReverse = function(e, t) {
        var n, a = this.tail;
        if (arguments.length > 1) n = t;
        else {
            if (!this.tail) throw new TypeError("Reduce of empty list with no initial value");
            a = this.tail.prev, n = this.tail.value
        }
        for (var r = this.length - 1; null !== a; r--) n = e(n, a.value, r), a = a.prev;
        return n
    }, a.prototype.toArray = function() {
        for (var e = new Array(this.length), t = 0, n = this.head; null !== n; t++) e[t] = n.value, n = n.next;
        return e
    }, a.prototype.toArrayReverse = function() {
        for (var e = new Array(this.length), t = 0, n = this.tail; null !== n; t++) e[t] = n.value, n = n.prev;
        return e
    }, a.prototype.slice = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new a;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var r = 0, s = this.head; null !== s && r < e; r++) s = s.next;
        for (; null !== s && r < t; r++, s = s.next) n.push(s.value);
        return n
    }, a.prototype.sliceReverse = function(e, t) {
        (t = t || this.length) < 0 && (t += this.length), (e = e || 0) < 0 && (e += this.length);
        var n = new a;
        if (t < e || t < 0) return n;
        e < 0 && (e = 0), t > this.length && (t = this.length);
        for (var r = this.length, s = this.tail; null !== s && r > t; r--) s = s.prev;
        for (; null !== s && r > e; r--, s = s.prev) n.push(s.value);
        return n
    }, a.prototype.splice = function(e, t) {
        e > this.length && (e = this.length - 1), e < 0 && (e = this.length + e);
        for (var n = 0, a = this.head; null !== a && n < e; n++) a = a.next;
        var s = [];
        for (n = 0; a && n < t; n++) s.push(a.value), a = this.removeNode(a);
        null === a && (a = this.tail), a !== this.head && a !== this.tail && (a = a.prev);
        for (n = 2; n < arguments.length; n++) a = r(this, a, arguments[n]);
        return s
    }, a.prototype.reverse = function() {
        for (var e = this.head, t = this.tail, n = e; null !== n; n = n.prev) {
            var a = n.prev;
            n.prev = n.next, n.next = a
        }
        return this.head = t, this.tail = e, this
    };
    try {
        n(104)(a)
    } catch (e) {}
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        e.prototype[Symbol.iterator] = function*() {
            for (let e = this.head; e; e = e.next) yield e.value
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        const {
            DeeplinkEventsHandler: e,
            LocalServerService: t,
            ProtocolActivationService: n
        } = s.default;
        return {
            deeplink: {
                subscribeAlwaysOnDeeplinks: t => (r.ALWAYS_ON_DEEPLINKS.forEach(n => {
                    e.activationEvents.on(n, t)
                }), () => {
                    r.ALWAYS_ON_DEEPLINKS.forEach(n => {
                        e.activationEvents.off(n, t)
                    })
                }),
                getColdStartUrl: () => n.getColdStartActivationUrl(),
                setCurrentUserId: e => n.setCurrentUserId(e),
                clearCurrentUserId: () => n.clearCurrentUserId()
            },
            localServer: {
                async start() {
                    await t.startLocalServer()
                },
                stop() {
                    t.stopLocalServer()
                },
                setAuthData(e) {
                    t.setAuthData(e)
                },
                clearAuthData() {
                    t.clearAuthData()
                },
                setEnableUserCheck(e) {
                    t.setEnableUserCheck(e)
                }
            }
        }
    };
    var a, r = n(49),
        s = (a = n(2)) && a.__esModule ? a : {
            default: a
        }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            RtcService: t
        } = s.default;
        return {
            rtc: {
                initRtc: async (n, a = r.RtcStackType.Zenon) => await t.initRtc(e.windowKey, n, a),
                destroyRtc: () => t.destroyRtc(e.windowKey),
                checkRtcHealth: () => t.checkRtcHealth(e.windowKey),
                getRtcEventEmitter: () => t.getRtcEventEmitter(e.windowKey),
                bringCallWindowToForeground: n => {
                    n !== r.RtcStackType.Rsys && t.bringCallWindowToForeground(e.windowKey)
                },
                getDesktopCapturerSources: o.desktopCapturer.getSources,
                getSelectDisplayMediaDeferred: t.getSelectDisplayMediaDeferred
            }
        }
    };
    var a, r = n(49),
        s = (a = n(2)) && a.__esModule ? a : {
            default: a
        },
        o = n(0)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        return {
            settings: {
                getGlobalSettings: a.SettingsChannel.getGlobalSettings,
                setGlobalSettings: a.SettingsChannel.setGlobalSettings,
                getUserSettings: () => a.SettingsChannel.getUserSettings(e.userId),
                setUserSettings: (t, n) => {
                    a.SettingsChannel.setUserSettings(e.userId, t, n)
                },
                getSystemSettings: a.SettingsChannel.getSystemSettings,
                getAppSettings: () => a.SettingsChannel.getAppSettings(e.userId),
                listenForGlobalSettingChanges: e => (a.SettingsChannel.remoteSettingsEvents.on("globalSettingsChanged", e), () => {
                    a.SettingsChannel.remoteSettingsEvents.off("globalSettingsChanged", e)
                }),
                listenForUserSettingChanges: t => {
                    let n = `settings-changed:${e.userId}`;
                    a.SettingsChannel.remoteSettingsEvents.on(n, t);
                    const r = e.onUserIdChanged(e => {
                        a.SettingsChannel.remoteSettingsEvents.off(n, t), n = `settings-changed:${e}`, a.SettingsChannel.remoteSettingsEvents.on(n, t)
                    });
                    return () => {
                        r(), a.SettingsChannel.remoteSettingsEvents.off(n, t)
                    }
                },
                listenForSystemSettingChanges: e => (a.SettingsChannel.remoteSettingsEvents.on("systemSettingsChanged", e), () => {
                    a.SettingsChannel.remoteSettingsEvents.off("systemSettingsChanged", e)
                }),
                getOSNotificationSettings: () => a.SettingsChannel.getOSNotificationSettings(),
                startup: {
                    setStartupTaskSetting(t) {
                        a.SettingsChannel.setStartupTaskSetting(e.userId, t)
                    },
                    getElectronLoginItemSettings: () => a.SettingsChannel.getElectronLoginItemSettings()
                }
            }
        }
    };
    var a = n(108)
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SettingsChannel = void 0;
    var a = function(e) {
        if (e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var t = r();
        if (t && t.has(e)) return t.get(e);
        var n = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var s in e)
            if (Object.prototype.hasOwnProperty.call(e, s)) {
                var o = a ? Object.getOwnPropertyDescriptor(e, s) : null;
                o && (o.get || o.set) ? Object.defineProperty(n, s, o) : n[s] = e[s]
            } n.default = e, t && t.set(e, n);
        return n
    }(n(4));

    function r() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return r = function() {
            return e
        }, e
    }
    const s = {
        getGlobalSettings: a.createAsyncChannel("SettingsChannel/getGlobalSettings"),
        setGlobalSettings: a.createFireAndForgetChannel("SettingsChannel/setGlobalSettings"),
        getUserSettings: a.createAsyncChannel("SettingsChannel/getUserSettings"),
        setUserSettings: a.createFireAndForgetChannel("SettingsChannel/setUserSettings"),
        getSystemSettings: a.createAsyncChannel("SettingsChannel/getSystemSettings"),
        getAppSettings: a.createAsyncChannel("SettingsChannel/getAppSettings"),
        getOSNotificationSettings: a.createAsyncChannel("SettingsChannel/getOSNotificationSettings"),
        setStartupTaskSetting: a.createFireAndForgetChannel("SettingsChannel/setStartupTaskSetting"),
        getElectronLoginItemSettings: a.createAsyncChannel("SettingsChannel/getElectronLoginItemSettings"),
        remoteSettingsEvents: a.createRemoteEventListener("SettingsChannel/remoteSettingsEvents")
    };
    t.SettingsChannel = s
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        let t;
        const {
            appConfig: n
        } = s.default;
        return {
            get startTime() {
                if (!t) {
                    const {
                        buildDir: e
                    } = (0, a.default)(n.isProduction);
                    t = (0, r.loadAndWrapStartTime)(e)
                }
                return t
            }
        }
    };
    var a = o(n(16)),
        r = n(110),
        s = o(n(2));

    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(111);
    Object.keys(a).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return a[e]
            }
        })
    }));
    var r = n(112);
    Object.keys(r).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e]
            }
        })
    }))
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadAndWrapStartTime = function(e) {
        const t = require(r.default.resolve(e, "starttime.node"));
        return Object.freeze({
            getProcessStartDate: t.getProcessStartDate
        })
    };
    var a, r = (a = n(1)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        let t;
        const {
            appConfig: n
        } = o.default;
        return {
            asl: r.default,
            get systemInfo() {
                if (!t) {
                    const {
                        buildDir: e
                    } = (0, a.default)(n.isProduction);
                    t = (0, s.loadAndWrapSystemInfo)(e)
                }
                return t
            }
        }
    };
    var a = i(n(16)),
        r = i(n(11)),
        s = n(114),
        o = i(n(2));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(115);
    Object.keys(a).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return a[e]
            }
        })
    }));
    var r = n(116);
    Object.keys(r).forEach((function(e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return r[e]
            }
        })
    }))
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.loadAndWrapSystemInfo = function(e) {
        const t = require(r.default.resolve(e, "systeminfo.node"));
        return Object.freeze({
            fetchSystemInfo: t.fetchSystemInfo,
            getCPUID: t.getCPUID
        })
    };
    var a, r = (a = n(1)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            SystemTrayService: t
        } = r.default;
        return {
            systemTray: {
                init: () => t.init(e.userId),
                destroy: () => t.destroyTray(),
                isActive: () => t.isActive(),
                listenForWindowSystemTrayNotificationEvents: e => (t.windowsSystemTrayNotificationEvents.on("activated", e), () => {
                    t.windowsSystemTrayNotificationEvents.off("activated", e)
                })
            }
        }
    };
    var a, r = (a = n(2)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function(e) {
        const {
            PromotionService: t,
            PerformanceService: n,
            paths: u
        } = i.default;
        return function(e, t) {
            l.default.transports.file.file = d.default.resolve(t, a.RendererLogFileName + `-time${(0,c.default)().format(a.LogFileNameTimestampFormat)}.log`), l.default.transports.file.format = `[{y}-{m}-{d} {h}:{i}:{s}.{ms}{z}][renderer][window:${e}][{level}] {text}`, l.default.transports.file.sync = !1, l.default.transports.file.maxSize = 4194304, l.default.hooks.push(S), l.default.catchErrors({
                showDialog: !1,
                onError: e => ((null == e ? void 0 : e.name) && e.name.startsWith("UnhandledRejection") ? s.default.incrementStat(o.AslStat.RendererWindowOnUnhandledRejection, 1) : s.default.incrementStat(o.AslStat.RendererWindowOnError, 1), null != e)
            })
        }(e.windowKey, u.logs), {
            promotions: {
                getPromotionsForUser: () => r.PromotionChannel.getPromotionForUser(e.userId),
                markPromotionImpression: t => window.requestIdleCallback(() => r.PromotionChannel.markPromotionImpression(e.userId, t)),
                markPromotionDismissAction: t => window.requestIdleCallback(() => r.PromotionChannel.markPromotionAction(e.userId, t, "DISMISS")),
                markPromotionPrimaryAction: t => window.requestIdleCallback(() => r.PromotionChannel.markPromotionAction(e.userId, t, "PRIMARY")),
                getOsmetaFeedbackPromotionInfo: () => r.PromotionChannel.getOsmetaFeedbackPromotionInfo(e.userId),
                setOsmetaFeedbackPromotionInfo: t => {
                    r.PromotionChannel.setOsmetaFeedbackPromotionInfo(e.userId, t)
                },
                getPromotionByID: t.getPromotionByID
            },
            performance: {
                isAppInteractive: r.PerformanceChannel.isAppInteractive,
                markEvent: t => {
                    const n = window.performance.now() + window.performance.timeOrigin;
                    window.requestIdleCallback(() => r.PerformanceChannel.markEvent(e.userId, t, n, e.windowKey))
                },
                addScenarioListener: e => (n.performanceEvents.on("scenariosChanged", e), () => {
                    n.performanceEvents.off("scenariosChanged", e)
                }),
                addInteractiveListener: e => (n.performanceEvents.on("appInteractive", e), () => {
                    n.performanceEvents.off("appInteractive", e)
                })
            },
            metrics: {
                UNAUTHENTICATED_USERID: a.UNAUTHENTICATED_USERID,
                trackStrictEvent: t => window.requestIdleCallback(() => {
                    r.MetricsChannel.trackStrictEvent(e.userId, t), "messenger_desktop_client_user_interaction" === t.name && r.TimeSpentChannel.recordInteraction(e.userId)
                }),
                trackStrictEventImmediate: t => r.MetricsChannel.trackStrictEvent(e.userId, t),
                trackStrictEvents: t => window.requestIdleCallback(() => r.MetricsChannel.trackStrictEvents(e.userId, t)),
                trackRawMsysEvent: (t, n) => window.requestIdleCallback(() => r.MetricsChannel.trackRawMsysEvent(e.userId, t, n)),
                trackRawMsysEventImmediate: (t, n) => r.MetricsChannel.trackRawMsysEvent(e.userId, t, n),
                trackExperimentImpressions: (...t) => r.MetricsChannel.trackExperimentImpressions(e.userId, ...t),
                trackStrictError: (t, n, a, s) => window.requestIdleCallback(() => r.MetricsChannel.trackStrictError(e.userId, t, n, a, s), {
                    timeout: 5e3
                })
            },
            log: {
                error(...e) {
                    l.default.error(...e)
                },
                warn(...e) {
                    l.default.warn(...e)
                },
                info(...e) {
                    l.default.info(...e)
                },
                debug(...e) {
                    l.default.debug(...e)
                }
            }
        }
    };
    var a = n(10),
        r = n(40),
        s = h(n(11)),
        o = n(5),
        i = h(n(2)),
        c = h(n(119)),
        l = h(n(9)),
        d = h(n(1)),
        u = h(n(6));

    function h(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function S(e, t) {
        const {
            formatWithOptions: n
        } = u.default;
        if (t === l.default.transports.file && "function" == typeof n) {
            const t = {
                compact: !0,
                breakLength: 1 / 0,
                getters: !0
            };
            e.data = [n(t, ...e.data).replace(/\n/g, " ")]
        }
        return e
    }
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        var e = "millisecond",
            t = "second",
            n = "minute",
            a = "hour",
            r = "day",
            s = "week",
            o = "month",
            i = "quarter",
            c = "year",
            l = "date",
            d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,
            u = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            h = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            },
            S = function(e, t, n) {
                var a = String(e);
                return !a || a.length >= t ? e : "" + Array(t + 1 - a.length).join(n) + e
            },
            p = {
                s: S,
                z: function(e) {
                    var t = -e.utcOffset(),
                        n = Math.abs(t),
                        a = Math.floor(n / 60),
                        r = n % 60;
                    return (t <= 0 ? "+" : "-") + S(a, 2, "0") + ":" + S(r, 2, "0")
                },
                m: function e(t, n) {
                    if (t.date() < n.date()) return -e(n, t);
                    var a = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                        r = t.clone().add(a, o),
                        s = n - r < 0,
                        i = t.clone().add(a + (s ? -1 : 1), o);
                    return +(-(a + (n - r) / (s ? r - i : i - r)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(d) {
                    return {
                        M: o,
                        y: c,
                        w: s,
                        d: r,
                        D: l,
                        h: a,
                        m: n,
                        s: t,
                        ms: e,
                        Q: i
                    } [d] || String(d || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            },
            f = "en",
            A = {};
        A[f] = h;
        var _ = function(e) {
                return e instanceof m
            },
            g = function(e, t, n) {
                var a;
                if (!e) return f;
                if ("string" == typeof e) A[e] && (a = e), t && (A[e] = t, a = e);
                else {
                    var r = e.name;
                    A[r] = e, a = r
                }
                return !n && a && (f = a), a || !n && f
            },
            E = function(e, t) {
                if (_(e)) return e.clone();
                var n = "object" == typeof t ? t : {};
                return n.date = e, n.args = arguments, new m(n)
            },
            y = p;
        y.l = g, y.i = _, y.w = function(e, t) {
            return E(e, {
                locale: t.$L,
                utc: t.$u,
                x: t.$x,
                $offset: t.$offset
            })
        };
        var m = function() {
                function h(e) {
                    this.$L = this.$L || g(e.locale, null, !0), this.parse(e)
                }
                var S = h.prototype;
                return S.parse = function(e) {
                    this.$d = function(e) {
                        var t = e.date,
                            n = e.utc;
                        if (null === t) return new Date(NaN);
                        if (y.u(t)) return new Date;
                        if (t instanceof Date) return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                            var a = t.match(d);
                            if (a) {
                                var r = a[2] - 1 || 0,
                                    s = (a[7] || "0").substring(0, 3);
                                return n ? new Date(Date.UTC(a[1], r, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, s)) : new Date(a[1], r, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, s)
                            }
                        }
                        return new Date(t)
                    }(e), this.$x = e.x || {}, this.init()
                }, S.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                }, S.$utils = function() {
                    return y
                }, S.isValid = function() {
                    return !("Invalid Date" === this.$d.toString())
                }, S.isSame = function(e, t) {
                    var n = E(e);
                    return this.startOf(t) <= n && n <= this.endOf(t)
                }, S.isAfter = function(e, t) {
                    return E(e) < this.startOf(t)
                }, S.isBefore = function(e, t) {
                    return this.endOf(t) < E(e)
                }, S.$g = function(e, t, n) {
                    return y.u(e) ? this[t] : this.set(n, e)
                }, S.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, S.valueOf = function() {
                    return this.$d.getTime()
                }, S.startOf = function(e, i) {
                    var d = this,
                        u = !!y.u(i) || i,
                        h = y.p(e),
                        S = function(e, t) {
                            var n = y.w(d.$u ? Date.UTC(d.$y, t, e) : new Date(d.$y, t, e), d);
                            return u ? n : n.endOf(r)
                        },
                        p = function(e, t) {
                            return y.w(d.toDate()[e].apply(d.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), d)
                        },
                        f = this.$W,
                        A = this.$M,
                        _ = this.$D,
                        g = "set" + (this.$u ? "UTC" : "");
                    switch (h) {
                        case c:
                            return u ? S(1, 0) : S(31, 11);
                        case o:
                            return u ? S(1, A) : S(0, A + 1);
                        case s:
                            var E = this.$locale().weekStart || 0,
                                m = (f < E ? f + 7 : f) - E;
                            return S(u ? _ - m : _ + (6 - m), A);
                        case r:
                        case l:
                            return p(g + "Hours", 0);
                        case a:
                            return p(g + "Minutes", 1);
                        case n:
                            return p(g + "Seconds", 2);
                        case t:
                            return p(g + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, S.endOf = function(e) {
                    return this.startOf(e, !1)
                }, S.$set = function(s, i) {
                    var d, u = y.p(s),
                        h = "set" + (this.$u ? "UTC" : ""),
                        S = (d = {}, d[r] = h + "Date", d[l] = h + "Date", d[o] = h + "Month", d[c] = h + "FullYear", d[a] = h + "Hours", d[n] = h + "Minutes", d[t] = h + "Seconds", d[e] = h + "Milliseconds", d)[u],
                        p = u === r ? this.$D + (i - this.$W) : i;
                    if (u === o || u === c) {
                        var f = this.clone().set(l, 1);
                        f.$d[S](p), f.init(), this.$d = f.set(l, Math.min(this.$D, f.daysInMonth())).$d
                    } else S && this.$d[S](p);
                    return this.init(), this
                }, S.set = function(e, t) {
                    return this.clone().$set(e, t)
                }, S.get = function(e) {
                    return this[y.p(e)]()
                }, S.add = function(e, i) {
                    var l, d = this;
                    e = Number(e);
                    var u = y.p(i),
                        h = function(t) {
                            var n = E(d);
                            return y.w(n.date(n.date() + Math.round(t * e)), d)
                        };
                    if (u === o) return this.set(o, this.$M + e);
                    if (u === c) return this.set(c, this.$y + e);
                    if (u === r) return h(1);
                    if (u === s) return h(7);
                    var S = (l = {}, l[n] = 6e4, l[a] = 36e5, l[t] = 1e3, l)[u] || 1,
                        p = this.$d.getTime() + e * S;
                    return y.w(p, this)
                }, S.subtract = function(e, t) {
                    return this.add(-1 * e, t)
                }, S.format = function(e) {
                    var t = this;
                    if (!this.isValid()) return "Invalid Date";
                    var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                        a = y.z(this),
                        r = this.$locale(),
                        s = this.$H,
                        o = this.$m,
                        i = this.$M,
                        c = r.weekdays,
                        l = r.months,
                        d = function(e, a, r, s) {
                            return e && (e[a] || e(t, n)) || r[a].substr(0, s)
                        },
                        h = function(e) {
                            return y.s(s % 12 || 12, e, "0")
                        },
                        S = r.meridiem || function(e, t, n) {
                            var a = e < 12 ? "AM" : "PM";
                            return n ? a.toLowerCase() : a
                        },
                        p = {
                            YY: String(this.$y).slice(-2),
                            YYYY: this.$y,
                            M: i + 1,
                            MM: y.s(i + 1, 2, "0"),
                            MMM: d(r.monthsShort, i, l, 3),
                            MMMM: d(l, i),
                            D: this.$D,
                            DD: y.s(this.$D, 2, "0"),
                            d: String(this.$W),
                            dd: d(r.weekdaysMin, this.$W, c, 2),
                            ddd: d(r.weekdaysShort, this.$W, c, 3),
                            dddd: c[this.$W],
                            H: String(s),
                            HH: y.s(s, 2, "0"),
                            h: h(1),
                            hh: h(2),
                            a: S(s, o, !0),
                            A: S(s, o, !1),
                            m: String(o),
                            mm: y.s(o, 2, "0"),
                            s: String(this.$s),
                            ss: y.s(this.$s, 2, "0"),
                            SSS: y.s(this.$ms, 3, "0"),
                            Z: a
                        };
                    return n.replace(u, (function(e, t) {
                        return t || p[e] || a.replace(":", "")
                    }))
                }, S.utcOffset = function() {
                    return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                }, S.diff = function(e, l, d) {
                    var u, h = y.p(l),
                        S = E(e),
                        p = 6e4 * (S.utcOffset() - this.utcOffset()),
                        f = this - S,
                        A = y.m(this, S);
                    return A = (u = {}, u[c] = A / 12, u[o] = A, u[i] = A / 3, u[s] = (f - p) / 6048e5, u[r] = (f - p) / 864e5, u[a] = f / 36e5, u[n] = f / 6e4, u[t] = f / 1e3, u)[h] || f, d ? A : y.a(A)
                }, S.daysInMonth = function() {
                    return this.endOf(o).$D
                }, S.$locale = function() {
                    return A[this.$L]
                }, S.locale = function(e, t) {
                    if (!e) return this.$L;
                    var n = this.clone(),
                        a = g(e, t, !0);
                    return a && (n.$L = a), n
                }, S.clone = function() {
                    return y.w(this.$d, this)
                }, S.toDate = function() {
                    return new Date(this.valueOf())
                }, S.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, S.toISOString = function() {
                    return this.$d.toISOString()
                }, S.toString = function() {
                    return this.$d.toUTCString()
                }, h
            }(),
            T = m.prototype;
        return E.prototype = T, [
            ["$ms", e],
            ["$s", t],
            ["$m", n],
            ["$H", a],
            ["$W", r],
            ["$M", o],
            ["$y", c],
            ["$D", l]
        ].forEach((function(e) {
            T[e[1]] = function(t) {
                return this.$g(t, e[0], e[1])
            }
        })), E.extend = function(e, t) {
            return e(t, m, E), E
        }, E.locale = g, E.isDayjs = _, E.unix = function(e) {
            return E(1e3 * e)
        }, E.en = A[f], E.Ls = A, E.p = {}, E
    }()
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = function() {
        const {
            UpdateService: e
        } = r.default;
        return {
            updates: {
                getLastUpdateEvent: () => e.lastEvent,
                subscribeToUpdateEvents: t => (e.lastEventChanges.on("change", t), () => {
                    e.lastEventChanges.off("change", t)
                }),
                checkForUpdates: e.checkForUpdates,
                quitAndInstall: e.quitAndInstall,
                isUpdateSupported: e.isUpdateSupported,
                cancelDownload: e.cancelDownload,
                startDownload: e.startDownload,
                hasUpdatedFromOldWorkChatApp: e.hasUpdateFromOldWorkChatApp
            }
        }
    };
    var a, r = (a = n(2)) && a.__esModule ? a : {
        default: a
    }
}, function(e, t) {
    function n(e) {
        var t = new Error("Cannot find module '" + e + "'");
        throw t.code = "MODULE_NOT_FOUND", t
    }
    n.keys = function() {
        return []
    }, n.resolve = n, e.exports = n, n.id = 121
}]);
//# sourceMappingURL=../sourcemaps/preload.js.map