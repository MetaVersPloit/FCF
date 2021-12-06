module.exports = function(e) {
    var t = {};

    function n(a) {
        if (t[a]) return t[a].exports;
        var s = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(s.exports, s, s.exports, n), s.l = !0, s.exports
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
            for (var s in e) n.d(a, s, function(t) {
                return e[t]
            }.bind(null, s));
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
    }, n.p = "", n(n.s = 122)
}([function(e, t) {
    e.exports = require("electron")
}, function(e, t) {
    e.exports = require("path")
}, , function(e, t) {
    e.exports = require("fs")
}, , function(e, t, n) {
    "use strict";
    let a, s;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.clientUnixTimeLabel = t.heartbeatSequenceLabel = t.secSinceBootLabel = t.secSinceLastLabel = t.eventSequenceLabel = t.bootSequenceLabel = t.appSequenceLabel = t.AslStat = t.AslState = void 0, t.AslState = a,
        function(e) {
            e[e.Invalid = 0] = "Invalid", e[e.TestState = 1] = "TestState", e[e.BuildNumber = 2] = "BuildNumber", e[e.AslEventSequence = 3] = "AslEventSequence", e[e.AslEventLastEpoch = 4] = "AslEventLastEpoch", e[e.LeftOverDataUploaded = 5] = "LeftOverDataUploaded", e[e.PrevBuildDataUploaded = 6] = "PrevBuildDataUploaded", e[e.PigeonEventsOutstanding = 7] = "PigeonEventsOutstanding", e[e.HeartbeatEventsOutstanding = 8] = "HeartbeatEventsOutstanding", e[e.AppStartEventsOutstanding = 9] = "AppStartEventsOutstanding", e[e.PerformanceEventsOutstanding = 10] = "PerformanceEventsOutstanding", e[e.InteractionEventsOutstanding = 11] = "InteractionEventsOutstanding", e[e.MainProcessOutstanding = 12] = "MainProcessOutstanding", e[e.RsysRtcOutstanding = 13] = "RsysRtcOutstanding", e[e.ZenonRtcOutstanding = 14] = "ZenonRtcOutstanding", e[e.CrashReporterLastReport = 15] = "CrashReporterLastReport", e[e.AppInitializing = 16] = "AppInitializing", e[e.AppInteractive = 17] = "AppInteractive", e[e.AppQuitting = 18] = "AppQuitting", e[e.AppInFocus = 19] = "AppInFocus", e[e.RsysInCallContacting = 20] = "RsysInCallContacting", e[e.RsysInCallRingingIncoming = 21] = "RsysInCallRingingIncoming", e[e.RsysInCallRingingOutgoing = 22] = "RsysInCallRingingOutgoing", e[e.RsysInCallConnecting = 23] = "RsysInCallConnecting", e[e.RsysInCallPendingApproval = 24] = "RsysInCallPendingApproval", e[e.RsysInCallConnected = 25] = "RsysInCallConnected", e[e.AppVisible = 26] = "AppVisible", e[e.AppSequence = 27] = "AppSequence", e[e.CurrentBootId = 28] = "CurrentBootId", e[e.LastBootId = 29] = "LastBootId", e[e.LastSnapshotEpoch = 30] = "LastSnapshotEpoch", e[e.SecSinceBoot = 31] = "SecSinceBoot", e[e.CrashReporterLastUpload = 32] = "CrashReporterLastUpload", e[e.CrashReporterChecks = 33] = "CrashReporterChecks", e[e.StateCount = 34] = "StateCount", e[e.StateMax = 128] = "StateMax"
        }(a || (t.AslState = a = {})), t.AslStat = s,
        function(e) {
            e[e.Invalid = 0] = "Invalid", e[e.TestStat = 1] = "TestStat", e[e.AslOpened = 2] = "AslOpened", e[e.AslEventErrors = 3] = "AslEventErrors", e[e.AslEventContextErrors = 4] = "AslEventContextErrors", e[e.AslPrevBuildFileErrors = 5] = "AslPrevBuildFileErrors", e[e.AslPrevBuildDataErrors = 6] = "AslPrevBuildDataErrors", e[e.AslPigeonHandlingErrors = 7] = "AslPigeonHandlingErrors", e[e.PigeonEventsQueued = 8] = "PigeonEventsQueued", e[e.PigeonEventsSent = 9] = "PigeonEventsSent", e[e.PigeonEventsDropped = 10] = "PigeonEventsDropped", e[e.HeartbeatEventsSent = 11] = "HeartbeatEventsSent", e[e.HeartbeatEventsDropped = 12] = "HeartbeatEventsDropped", e[e.AppStartEventsSent = 13] = "AppStartEventsSent", e[e.AppStartEventsDropped = 14] = "AppStartEventsDropped", e[e.PerformanceEventsSent = 15] = "PerformanceEventsSent", e[e.PerformanceEventsDropped = 16] = "PerformanceEventsDropped", e[e.InteractionEventsSent = 17] = "InteractionEventsSent", e[e.InteractionEventsDropped = 18] = "InteractionEventsDropped", e[e.MainProcessStart = 19] = "MainProcessStart", e[e.MainProcessQuit = 20] = "MainProcessQuit", e[e.MainProcessQuitOnShutdown = 21] = "MainProcessQuitOnShutdown", e[e.MainProcessAbnormalDeath = 22] = "MainProcessAbnormalDeath", e[e.MainProcessAbnormalDeathInRsysRtc = 23] = "MainProcessAbnormalDeathInRsysRtc", e[e.MainProcessAbnormalDeathInZenonRtc = 24] = "MainProcessAbnormalDeathInZenonRtc", e[e.RenderProcessStart = 25] = "RenderProcessStart", e[e.RenderProcessAbnormalDeath = 26] = "RenderProcessAbnormalDeath", e[e.GpuProcessAbnormalDeath = 27] = "GpuProcessAbnormalDeath", e[e.RsysRtcEntered = 28] = "RsysRtcEntered", e[e.RsysRtcExit = 29] = "RsysRtcExit", e[e.RsysRtcLogCrash = 30] = "RsysRtcLogCrash", e[e.RsysRtcOutOfSyncCallEnded = 31] = "RsysRtcOutOfSyncCallEnded", e[e.ZenonRtcEntered = 32] = "ZenonRtcEntered", e[e.ZenonRtcExit = 33] = "ZenonRtcExit", e[e.ZenonRtcCrashed = 34] = "ZenonRtcCrashed", e[e.ZenonRtcLogCrash = 35] = "ZenonRtcLogCrash", e[e.AbortSignalReceived = 36] = "AbortSignalReceived", e[e.AbortSignalReceivedNoUEFFound = 37] = "AbortSignalReceivedNoUEFFound", e[e.SingleInstanceLockFailed = 38] = "SingleInstanceLockFailed", e[e.CrashReporterUploads = 39] = "CrashReporterUploads", e[e.BreakpadUploads = 40] = "BreakpadUploads", e[e.BreakpadUploadAttempts = 41] = "BreakpadUploadAttempts", e[e.ElectronJSCrashes = 42] = "ElectronJSCrashes", e[e.ElectronJSCrashesMainUncaught = 43] = "ElectronJSCrashesMainUncaught", e[e.ElectronJSCrashUploads = 44] = "ElectronJSCrashUploads", e[e.ElectronJSCrashUploadAttempts = 45] = "ElectronJSCrashUploadAttempts", e[e.ElectronJSCrashUploadBadResponse = 46] = "ElectronJSCrashUploadBadResponse", e[e.ElectronJSCrashUploadError = 47] = "ElectronJSCrashUploadError", e[e.RNJSCrashes = 48] = "RNJSCrashes", e[e.RNJSCrashesSaved = 49] = "RNJSCrashesSaved", e[e.RNJSCrashUploads = 50] = "RNJSCrashUploads", e[e.RNJSCrashUploadAttempts = 51] = "RNJSCrashUploadAttempts", e[e.RNJSCrashUploadBadResponse = 52] = "RNJSCrashUploadBadResponse", e[e.RNJSCrashUploadError = 53] = "RNJSCrashUploadError", e[e.RNJSSoftErrors = 54] = "RNJSSoftErrors", e[e.RNJSSoftErrorsSaved = 55] = "RNJSSoftErrorsSaved", e[e.RNJSSoftErrorUploads = 56] = "RNJSSoftErrorUploads", e[e.RNJSSoftErrorUploadAttempts = 57] = "RNJSSoftErrorUploadAttempts", e[e.RNJSSoftErrorUploadBadResponse = 58] = "RNJSSoftErrorUploadBadResponse", e[e.RNJSSoftErrorUploadError = 59] = "RNJSSoftErrorUploadError", e[e.SentMessages = 60] = "SentMessages", e[e.MoreMessagesRequested = 61] = "MoreMessagesRequested", e[e.MessageThreadSwitched = 62] = "MessageThreadSwitched", e[e.AppFocusCount = 63] = "AppFocusCount", e[e.AppFocusTime = 64] = "AppFocusTime", e[e.AppFocusSessions = 65] = "AppFocusSessions", e[e.RsysRtcTime = 66] = "RsysRtcTime", e[e.ZenonRtcTime = 67] = "ZenonRtcTime", e[e.RsysRtcFailed = 68] = "RsysRtcFailed", e[e.ZenonRtcFailed = 69] = "ZenonRtcFailed", e[e.AppStateChanges = 70] = "AppStateChanges", e[e.AppInitializingTime = 71] = "AppInitializingTime", e[e.AppInteractiveTime = 72] = "AppInteractiveTime", e[e.AppQuittingTime = 73] = "AppQuittingTime", e[e.AppInitializingCount = 74] = "AppInitializingCount", e[e.AppInteractiveCount = 75] = "AppInteractiveCount", e[e.AppQuittingCount = 76] = "AppQuittingCount", e[e.AppDeathLaunching = 77] = "AppDeathLaunching", e[e.AppDeathInitializing = 78] = "AppDeathInitializing", e[e.AppDeathInteractive = 79] = "AppDeathInteractive", e[e.AppDeathQuitting = 80] = "AppDeathQuitting", e[e.AppDeathInFocus = 81] = "AppDeathInFocus", e[e.RsysInCallContactingTime = 82] = "RsysInCallContactingTime", e[e.RsysInCallRingingIncomingTime = 83] = "RsysInCallRingingIncomingTime", e[e.RsysInCallRingingOutgoingTime = 84] = "RsysInCallRingingOutgoingTime", e[e.RsysInCallConnectingTime = 85] = "RsysInCallConnectingTime", e[e.RsysInCallPendingApprovalTime = 86] = "RsysInCallPendingApprovalTime", e[e.RsysInCallConnectedTime = 87] = "RsysInCallConnectedTime", e[e.RsysInCallStateChanges = 88] = "RsysInCallStateChanges", e[e.RsysInCallContactingCount = 89] = "RsysInCallContactingCount", e[e.RsysInCallRingingIncomingCount = 90] = "RsysInCallRingingIncomingCount", e[e.RsysInCallRingingOutgoingCount = 91] = "RsysInCallRingingOutgoingCount", e[e.RsysInCallConnectingCount = 92] = "RsysInCallConnectingCount", e[e.RsysInCallPendingApprovalCount = 93] = "RsysInCallPendingApprovalCount", e[e.RsysInCallConnectedCount = 94] = "RsysInCallConnectedCount", e[e.AppDeathInRsysContacting = 95] = "AppDeathInRsysContacting", e[e.AppDeathInRsysRingingIncoming = 96] = "AppDeathInRsysRingingIncoming", e[e.AppDeathInRsysRingingOutgoing = 97] = "AppDeathInRsysRingingOutgoing", e[e.AppDeathInRsysConnecting = 98] = "AppDeathInRsysConnecting", e[e.AppDeathInRsysPendingApproval = 99] = "AppDeathInRsysPendingApproval", e[e.AppDeathInRsysConnected = 100] = "AppDeathInRsysConnected", e[e.DialogIncomingCallCreated = 101] = "DialogIncomingCallCreated", e[e.DialogIncomingRoomsCallCreated = 102] = "DialogIncomingRoomsCallCreated", e[e.DialogMissedCallCreated = 103] = "DialogMissedCallCreated", e[e.DialogAcceptCall = 104] = "DialogAcceptCall", e[e.DialogRejectCall = 105] = "DialogRejectCall", e[e.DialogReturnCall = 106] = "DialogReturnCall", e[e.DialogIgnoreMissedCall = 107] = "DialogIgnoreMissedCall", e[e.DialogDismiss = 108] = "DialogDismiss", e[e.ShowRNCallWindowForAccept = 109] = "ShowRNCallWindowForAccept", e[e.ShowRNCallWindowForCallOrJoin = 110] = "ShowRNCallWindowForCallOrJoin", e[e.AppQuitOnAllWindowsClosed = 111] = "AppQuitOnAllWindowsClosed", e[e.AppQuitBeforeChatReady = 112] = "AppQuitBeforeChatReady", e[e.WindowCloseFromTitleBar = 113] = "WindowCloseFromTitleBar", e[e.WindowCloseFromBridge = 114] = "WindowCloseFromBridge", e[e.WindowClosing = 115] = "WindowClosing", e[e.WindowHidingInsteadOfClose = 116] = "WindowHidingInsteadOfClose", e[e.WindowContentsCrashed = 117] = "WindowContentsCrashed", e[e.WindowErrorContentsCrashed = 118] = "WindowErrorContentsCrashed", e[e.InboxShimmerRendered = 119] = "InboxShimmerRendered", e[e.InboxLoadThreads = 120] = "InboxLoadThreads", e[e.InboxThreadsLoaded = 121] = "InboxThreadsLoaded", e[e.InboxLoadMessages = 122] = "InboxLoadMessages", e[e.InboxMessagesLoaded = 123] = "InboxMessagesLoaded", e[e.InboxInitialSyncComplete = 124] = "InboxInitialSyncComplete", e[e.InboxStaleMessagesRendered = 125] = "InboxStaleMessagesRendered", e[e.InboxMessagesRendered = 126] = "InboxMessagesRendered", e[e.InboxCreateThreadRendered = 127] = "InboxCreateThreadRendered", e[e.MainJSUncaughtException = 128] = "MainJSUncaughtException", e[e.MainJSUnhandledRejection = 129] = "MainJSUnhandledRejection", e[e.RendererWindowOnError = 130] = "RendererWindowOnError", e[e.RendererWindowOnUnhandledRejection = 131] = "RendererWindowOnUnhandledRejection", e[e.ErrorBoundaryDidCatch = 132] = "ErrorBoundaryDidCatch", e[e.AppLaunchOnStartup = 133] = "AppLaunchOnStartup", e[e.AslTimerOutOfPeriodRange = 134] = "AslTimerOutOfPeriodRange", e[e.AslTimeClippedToPeriodRange = 135] = "AslTimeClippedToPeriodRange", e[e.AppInteractiveTimeWallClock = 136] = "AppInteractiveTimeWallClock", e[e.AppFocusTimeMs = 137] = "AppFocusTimeMs", e[e.AppFocusTimeWallClock = 138] = "AppFocusTimeWallClock", e[e.ZenonRtcTimeMs = 139] = "ZenonRtcTimeMs", e[e.RsysRtcTimeMs = 140] = "RsysRtcTimeMs", e[e.AppVisibleTime = 141] = "AppVisibleTime", e[e.AppVisibleTimeWallClock = 142] = "AppVisibleTimeWallClock", e[e.AppVisibleCount = 143] = "AppVisibleCount", e[e.AppDeathVisible = 144] = "AppDeathVisible", e[e.RNWindowThreadCreated = 145] = "RNWindowThreadCreated", e[e.RNWindowThreadInitialized = 146] = "RNWindowThreadInitialized", e[e.RNWindowThreadQuit = 147] = "RNWindowThreadQuit", e[e.RNWindowCreated = 148] = "RNWindowCreated", e[e.RNWindowInitialized = 149] = "RNWindowInitialized", e[e.RNWindowDestroyed = 150] = "RNWindowDestroyed", e[e.RNSoundPlayStart = 151] = "RNSoundPlayStart", e[e.RNSoundPlayEnd = 152] = "RNSoundPlayEnd", e[e.RNSoundSetOutputDevice = 153] = "RNSoundSetOutputDevice", e[e.RNSoundsMoveToNewDevice = 154] = "RNSoundsMoveToNewDevice", e[e.RNRTCVideoRegistered = 155] = "RNRTCVideoRegistered", e[e.RNRTCVideoFrames = 156] = "RNRTCVideoFrames", e[e.RNRTCInitializeAudio = 157] = "RNRTCInitializeAudio", e[e.RNRTCSetAudioInput = 158] = "RNRTCSetAudioInput", e[e.RNRTCSetPreferredAudioInput = 159] = "RNRTCSetPreferredAudioInput", e[e.RNRTCSetAudioOutput = 160] = "RNRTCSetAudioOutput", e[e.RNRTCSetPreferredAudioOutput = 161] = "RNRTCSetPreferredAudioOutput", e[e.RNRTCInitializeCamera = 162] = "RNRTCInitializeCamera", e[e.RNRTCSetCamera = 163] = "RNRTCSetCamera", e[e.RNRTCSetPreferredCamera = 164] = "RNRTCSetPreferredCamera", e[e.RNRTCSubmitStarRating1 = 165] = "RNRTCSubmitStarRating1", e[e.RNRTCSubmitStarRating2 = 166] = "RNRTCSubmitStarRating2", e[e.RNRTCSubmitStarRating3 = 167] = "RNRTCSubmitStarRating3", e[e.RNRTCSubmitStarRating4 = 168] = "RNRTCSubmitStarRating4", e[e.RNRTCSubmitStarRating5 = 169] = "RNRTCSubmitStarRating5", e[e.RNRTCSubmitStarRatingOther = 170] = "RNRTCSubmitStarRatingOther", e[e.RNRTCEffectEnabled = 171] = "RNRTCEffectEnabled", e[e.RNRTCScreenShareEnabled = 172] = "RNRTCScreenShareEnabled", e[e.RNRTCRoomScreenShareEnabled = 173] = "RNRTCRoomScreenShareEnabled", e[e.RNRTCSceneCompositionEnabled = 174] = "RNRTCSceneCompositionEnabled", e[e.RNRTCSelfieView = 175] = "RNRTCSelfieView", e[e.RNRTCScreenShareView = 176] = "RNRTCScreenShareView", e[e.RNRTCSettingsView = 177] = "RNRTCSettingsView", e[e.RNRTCEffectsPickerView = 178] = "RNRTCEffectsPickerView", e[e.RNRTCPresenterLayoutView = 179] = "RNRTCPresenterLayoutView", e[e.FeedbackFormShown = 180] = "FeedbackFormShown", e[e.FeedbackFormReporting = 181] = "FeedbackFormReporting", e[e.FeedbackFormUploadSuccess = 182] = "FeedbackFormUploadSuccess", e[e.FeedbackFormUploadError = 183] = "FeedbackFormUploadError", e[e.WindowRequestCloseFromTitleBar = 184] = "WindowRequestCloseFromTitleBar", e[e.DialogIncomingCallDismissed = 185] = "DialogIncomingCallDismissed", e[e.DialogIncomingRoomCallDismissed = 186] = "DialogIncomingRoomCallDismissed", e[e.DialogRejectCallByClosing = 187] = "DialogRejectCallByClosing", e[e.DialogMissedCallDismissed = 188] = "DialogMissedCallDismissed", e[e.DialogIgnoreMissedCallByClosing = 189] = "DialogIgnoreMissedCallByClosing", e[e.RNJSStart = 190] = "RNJSStart", e[e.RNJSStartWindow = 191] = "RNJSStartWindow", e[e.RNRTCCallEndedView = 192] = "RNRTCCallEndedView", e[e.RNRTCRoomFailedView = 193] = "RNRTCRoomFailedView", e[e.RNRTCSpeakerView = 194] = "RNRTCSpeakerView", e[e.RNRTCGridView = 195] = "RNRTCGridView", e[e.RNRTCMosaicGridView = 196] = "RNRTCMosaicGridView", e[e.RNRTCCowatchView = 197] = "RNRTCCowatchView", e[e.RNRTCCallIntermediateView = 198] = "RNRTCCallIntermediateView", e[e.AppDeathDetectedAfterSystemReboot = 199] = "AppDeathDetectedAfterSystemReboot", e[e.SecsToRelaunch = 200] = "SecsToRelaunch", e[e.SecsToRelaunchAfterAppDeath = 201] = "SecsToRelaunchAfterAppDeath", e[e.CrashReporterReports = 202] = "CrashReporterReports", e[e.CrashReporterUploadAttempts = 203] = "CrashReporterUploadAttempts", e[e.CrashReporterInitialReports = 204] = "CrashReporterInitialReports", e[e.MainProcessQuitForUpdate = 205] = "MainProcessQuitForUpdate", e[e.AnalyticsEmptyBatch = 206] = "AnalyticsEmptyBatch", e[e.AnalyticsBadBatch = 207] = "AnalyticsBadBatch", e[e.AnalyticsFailedUploadAttempt = 208] = "AnalyticsFailedUploadAttempt", e[e.AppRelaunchQueuedForLogout = 209] = "AppRelaunchQueuedForLogout", e[e.AppRelaunchQueuedForError = 210] = "AppRelaunchQueuedForError", e[e.AppRelaunchQueued = 211] = "AppRelaunchQueued", e[e.AppRelaunching = 212] = "AppRelaunching", e[e.AppRelaunched = 213] = "AppRelaunched", e[e.StatCount = 214] = "StatCount", e[e.StatMax = 320] = "StatMax"
        }(s || (t.AslStat = s = {}));
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

    function s() {
        return r("app")
    }

    function r(e) {
        return a ? a[e] ? a[e] : a.remote ? a.remote[e] : null : null
    }

    function i() {
        return "browser" === process.type && a && a.ipcMain ? a.ipcMain : "renderer" === process.type && a && a.ipcRenderer ? a.ipcRenderer : null
    }
    e.exports = {
        getName: function() {
            var e = s();
            return e ? "name" in e ? e.name : e.getName() : null
        },
        getPath: function(e) {
            var t = s();
            if (!t) return null;
            try {
                return t.getPath(e)
            } catch (e) {
                return null
            }
        },
        getVersion: function() {
            var e = s();
            return e ? "version" in e ? e.version : e.getVersion() : null
        },
        isDev: function() {
            var e = s();
            return !!e && (!e.isPackaged || "1" === process.env.ELECTRON_IS_DEV)
        },
        isElectron: function() {
            return "browser" === process.type || "renderer" === process.type
        },
        isIpcChannelListened: function(e) {
            var t = i();
            return !!t && t.listenerCount(e) > 0
        },
        loadRemoteModule: function(e) {
            if ("browser" === process.type) s().on("web-contents-created", (function(t, n) {
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
            var n = i();
            n && n.on(e, t)
        },
        sendIpc: function(e, t) {
            "browser" === process.type ? function(e, t) {
                if (!a || !a.BrowserWindow) return;
                a.BrowserWindow.getAllWindows().forEach((function(n) {
                    n.webContents && n.webContents.send(e, t)
                }))
            }(e, t) : "renderer" === process.type && function(e, t) {
                var n = i();
                n && n.send(e, t)
            }(e, t)
        },
        showErrorBox: function(e, t) {
            var n = r("dialog");
            if (!n) return;
            n.showErrorBox(e, t)
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(15),
        s = n(25),
        r = n(26);

    function i(e, t, n) {
        return t.reduce((function(t, n) {
            return n(t, e)
        }), n || e.data)
    }
    e.exports = {
        applyAnsiStyles: s.applyAnsiStyles,
        customFormatterFactory: function(e) {
            if ("string" == typeof e) return function(t, n) {
                return i(n, [r.templateVariables, r.templateDate, r.templateText], [e].concat(t))
            };
            if ("function" == typeof e) return function(t, n) {
                var a = Object.assign({}, n, {
                        data: t
                    }),
                    s = e(a, t);
                return [].concat(s)
            };
            return function(e) {
                return e
            }
        },
        maxDepthFactory: a.maxDepthFactory,
        removeStyles: s.removeStyles,
        toJSON: a.toJSON,
        toString: a.toString,
        transform: i
    }
}, function(e, t, n) {
    "use strict";
    var a = n(23),
        s = n(7),
        r = n(12).log,
        i = n(24),
        o = n(27),
        S = n(32),
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
            isDev: s.isDev(),
            levels: ["error", "warn", "info", "verbose", "debug", "silly"],
            logId: t,
            variables: {
                processType: process.type
            }
        };
        return n.transports = {
            console: i(n),
            file: o(n),
            remote: l(n),
            ipc: S(n)
        }, n.levels.forEach((function(e) {
            n[e] = r.bind(null, n, e), n.functions[e] = n[e]
        })), n.log = r.bind(null, n, "info"), n.functions.log = n.log, n
    }("default"), e.exports.default = e.exports
}, function(e, t, n) {
    "use strict";
    let a, s, r, i, o, S, l;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.TraceLogFileNamePrefix = t.RtcLogFileNamePrefix = t.MsysLogFileNamePrefix = t.ArchonLogFileNamePrefix = t.LogFileNameTimestampFormat = t.RendererLogFileName = t.MainLogFileName = t.MacNotificationSetting = t.WindowsNotificationSetting = t.EmptyTincanKeyNames = t.WindowsStartupTaskState = t.RoomsBadgeType = t.StoriesAndActiveNowItemType = t.RoomJoinPermission = t.RoomInviteeType = t.RoomLinkSurface = t.RoomAudienceType = t.RoomCreationState = t.ThreadCapabilities = t.MeetupLockStatus = t.MeetupCreationErrorType = t.PaymentPasscodeState = t.TransactionType = t.PaymentActivitySearchResultStatus = t.ProductType = t.PaymentCredentialType = t.UNAUTHENTICATED_USERID = t.STICKER_DEFAULT_DIM = t.GIF_DEFAULT_DIM = t.RtcCallStatus = t.ComposerDisabledType = t.WorkForeignEntityType = t.MsysAppState = t.PortalKey = t.MsysStatsShortName = t.SyncGroupsModelIds = t.SyncGroupsSyncStatus = t.AdminMessageCTAType = t.PersistentMenuCTAType = t.AttachmentCTAType = t.AttachmentStatus = t.BlockedByViewerStatus = t.SearchSource = t.OutgoingCallSource = t.PerformanceEvents = t.MessengerThreadThemeType = t.NullstateCTAType = t.QuickReplyType = t.ContactReachabilityStatus = t.ContactTypeExact = t.ContactType = t.ThreadCannotUnsendReason = t.MessageCannotUnsendReason = t.MessageReplyStatus = t.MessageReplySourceType = t.MessageAuthorityLevel = t.MessageSendStatus = t.MessagesLoadMoreState = t.SearchResultType = t.SearchQueryStatusType = t.PresenceType = t.StickerPackLoadingState = t.HOTLIKE_STICKER_ID = t.ReplySourceType = t.ReplyAttachmentType = t.ThreadFolderParentKey = t.MediaType = t.ThreadType = t.AttachmentMediaGroup = t.AttachmentType = void 0, t.AttachmentType = a,
        function(e) {
            e[e.None = 0] = "None", e[e.Sticker = 1] = "Sticker", e[e.Image = 2] = "Image", e[e.AnimatedImage = 3] = "AnimatedImage", e[e.Video = 4] = "Video", e[e.Audio = 5] = "Audio", e[e.File = 6] = "File", e[e.XMA = 7] = "XMA"
        }(a || (t.AttachmentType = a = {})), t.AttachmentMediaGroup = s,
        function(e) {
            e[e.PhotosAndVideos = 0] = "PhotosAndVideos", e[e.FilesOnly = 1] = "FilesOnly"
        }(s || (t.AttachmentMediaGroup = s = {})), t.ThreadType = r,
        function(e) {
            e[e.EncryptedOnetoOne = -1] = "EncryptedOnetoOne", e[e.Unknown = 0] = "Unknown", e[e.OnetoOne = 1] = "OnetoOne", e[e.Group = 2] = "Group", e[e.Room = 3] = "Room", e[e.Montage = 4] = "Montage", e[e.Marketplace = 5] = "Marketplace", e[e.Folder = 6] = "Folder", e[e.CommunityGroup = 18] = "CommunityGroup"
        }(r || (t.ThreadType = r = {})), t.MediaType = i,
        function(e) {
            e[e.JPG = 0] = "JPG", e[e.PNG = 1] = "PNG", e[e.GIF = 2] = "GIF", e[e.WEBP = 3] = "WEBP", e[e.MP4 = 4] = "MP4", e[e.WEBM = 5] = "WEBM"
        }(i || (t.MediaType = i = {})), t.ThreadFolderParentKey = o,
        function(e) {
            e.Inbox = "0", e.MessageRequests = "-1", e.Other = "-2", e.Archived = "-10", e.Marketplace = "-12", e.InboxUnread = "-100"
        }(o || (t.ThreadFolderParentKey = o = {})), t.ReplyAttachmentType = S,
        function(e) {
            e[e.Image = 1] = "Image", e[e.Video = 2] = "Video", e[e.AnimatedImage = 3] = "AnimatedImage", e[e.Sticker = 4] = "Sticker", e[e.MultipleImages = 6] = "MultipleImages"
        }(S || (t.ReplyAttachmentType = S = {})), t.ReplySourceType = l,
        function(e) {
            e[e.None = 0] = "None", e[e.Message = 1] = "Message", e[e.Story = 2] = "Story"
        }(l || (t.ReplySourceType = l = {}));
    let c, _, E, A, u, T, d, p, R, I, C, N, m, h, g, D, O, M, f, y, L, v, P, b, U, w, G, F, k, H, B, x, Y;
    t.HOTLIKE_STICKER_ID = "369239263222822", t.StickerPackLoadingState = c,
        function(e) {
            e[e.NotInitiated = 0] = "NotInitiated", e[e.InProgress = 1] = "InProgress", e[e.Complete = 2] = "Complete"
        }(c || (t.StickerPackLoadingState = c = {})), t.PresenceType = _,
        function(e) {
            e[e.Offline = 1] = "Offline", e[e.Active = 2] = "Active"
        }(_ || (t.PresenceType = _ = {})), t.SearchQueryStatusType = E,
        function(e) {
            e[e.Pending = 1] = "Pending", e[e.Complete = 2] = "Complete", e[e.Failed = 3] = "Failed"
        }(E || (t.SearchQueryStatusType = E = {})), t.SearchResultType = A,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Contact = 1] = "Contact", e[e.NonContact = 2] = "NonContact", e[e.Group = 3] = "Group", e[e.Page = 4] = "Page", e[e.IntegratedMessageSearchThread = 5] = "IntegratedMessageSearchThread"
        }(A || (t.SearchResultType = A = {})), t.MessagesLoadMoreState = u,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.HasMoreLocal = 1] = "HasMoreLocal", e[e.HasMoreRemote = 2] = "HasMoreRemote", e[e.IsLoadingMoreRemote = 3] = "IsLoadingMoreRemote", e[e.FullyLoaded = 4] = "FullyLoaded"
        }(u || (t.MessagesLoadMoreState = u = {})), t.MessageSendStatus = T,
        function(e) {
            e[e.None = 0] = "None", e[e.Sending = 1] = "Sending", e[e.ServerReceived = 2] = "ServerReceived", e[e.NonRetriableError = 4] = "NonRetriableError", e[e.RetriableError = 5] = "RetriableError", e[e.SentOnly = 6] = "SentOnly"
        }(T || (t.MessageSendStatus = T = {})), t.MessageAuthorityLevel = d,
        function(e) {
            e[e.AuthorityLevelOptimisitc = 20] = "AuthorityLevelOptimisitc", e[e.AuthorityLevelClientPartial = 40] = "AuthorityLevelClientPartial", e[e.AuthorityLevelServerPartial = 60] = "AuthorityLevelServerPartial", e[e.AuthorityLevelAuthoritative = 80] = "AuthorityLevelAuthoritative", e[e.AuthorityLevelClientAuthoritativeDelete = 100] = "AuthorityLevelClientAuthoritativeDelete"
        }(d || (t.MessageAuthorityLevel = d = {})), t.MessageReplySourceType = p,
        function(e) {
            e[e.None = 0] = "None", e[e.Message = 1] = "Message", e[e.Story = 2] = "Story", e[e.Forward = 3] = "Forward"
        }(p || (t.MessageReplySourceType = p = {})), t.MessageReplyStatus = R,
        function(e) {
            e[e.None = 0] = "None", e[e.Valid = 1] = "Valid", e[e.Deleted = 2] = "Deleted", e[e.Unavailable = 3] = "Unavailable", e[e.Expired = 4] = "Expired"
        }(R || (t.MessageReplyStatus = R = {})), t.MessageCannotUnsendReason = I,
        function(e) {
            e[e.MSGGlobalDeleteMessageUnsendabilityStatusCanUnsend = 0] = "MSGGlobalDeleteMessageUnsendabilityStatusCanUnsend", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyLogMessage = 1] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyLogMessage", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyTombstoneMessage = 2] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyTombstoneMessage", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyForNonSender = 3] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyForNonSender", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyP2PPayment = 4] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyP2PPayment", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyStoryReaction = 5] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyStoryReaction", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyBlobAttachment = 6] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyBlobAttachment", e[e.MSGGlobalDeleteMessageUnsendabilityStatusDenyMessageNotFound = 7] = "MSGGlobalDeleteMessageUnsendabilityStatusDenyMessageNotFound"
        }(I || (t.MessageCannotUnsendReason = I = {})), t.ThreadCannotUnsendReason = C,
        function(e) {
            e[e.MSGGlobalDeleteThreadUnsendabilityStatusCanUnsend = 0] = "MSGGlobalDeleteThreadUnsendabilityStatusCanUnsend", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyForSpecificIDs = 1] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyForSpecificIDs", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsPAU = 2] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsPAU", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsWorkUser = 3] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfThreadContainsWorkUser", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfPageThread = 4] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfPageThread", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfMarketplaceThread = 5] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfMarketplaceThread", e[e.MSGGlobalDeleteThreadUnsendabilityStatusDenyIfCannotLoadThread = 6] = "MSGGlobalDeleteThreadUnsendabilityStatusDenyIfCannotLoadThread"
        }(C || (t.ThreadCannotUnsendReason = C = {})), t.ContactType = N,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.User = 1] = "User", e[e.Page = 2] = "Page"
        }(N || (t.ContactType = N = {})), t.ContactTypeExact = m,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.FBUser = 1] = "FBUser", e[e.MessengerOnly = 2] = "MessengerOnly", e[e.DeactivatedAllowedOnMessenger = 3] = "DeactivatedAllowedOnMessenger", e[e.MessengerKid = 4] = "MessengerKid", e[e.FBPage = 5] = "FBPage", e[e.FBPagePersona = 6] = "FBPagePersona"
        }(m || (t.ContactTypeExact = m = {})), t.ContactReachabilityStatus = h,
        function(e) {
            e[e.REACHABLE = 0] = "REACHABLE", e[e.UNREACHABLE_USER_TYPE = 1] = "UNREACHABLE_USER_TYPE"
        }(h || (t.ContactReachabilityStatus = h = {})), t.QuickReplyType = g,
        function(e) {
            e.Text = "quick_reply_text", e.PhoneNumber = "quick_reply_phone", e.Email = "quick_reply_email", e.Birthday = "quick_reply_birthday", e.State = "quick_reply_state", e.ZipCode = "quick_reply_zip_code"
        }(g || (t.QuickReplyType = g = {})), t.NullstateCTAType = D,
        function(e) {
            e[e.None = 0] = "None", e[e.GetStarted = 1] = "GetStarted", e[e.Icebreakers = 2] = "Icebreakers"
        }(D || (t.NullstateCTAType = D = {})), t.MessengerThreadThemeType = O,
        function(e) {
            e[e.ColorGradient = 1] = "ColorGradient", e[e.Theme = 2] = "Theme"
        }(O || (t.MessengerThreadThemeType = O = {})), t.PerformanceEvents = M,
        function(e) {
            e.APP_START = "APP_START", e.APP_QUIT = "APP_QUIT", e.APP_JS_CRASH = "APP_JS_CRASH", e.APP_NATIVE_CRASH = "APP_NATIVE_CRASH", e.TTI = "TTI", e.CREATE_MESSENGER_WINDOW = "CREATE_MESSENGER_WINDOW", e.CREATE_WINDOW = "CREATE_WINDOW", e.WINDOW_READY_TO_SHOW = "WINDOW_READY_TO_SHOW", e.CREATE_THREAD_RENDERED = "CREATE_THREAD_RENDERED", e.LEGACY_MESSAGES_RENDERED = "LEGACY_MESSAGES_RENDERED", e.MESSAGES_RENDERED = "MESSAGES_RENDERED", e.MESSAGES_CONTAINER_MOUNT_START = "MESSAGES_CONTAINER_MOUNT_START", e.MESSAGES_CONTAINER_MOUNT_END = "MESSAGES_CONTAINER_MOUNT_END", e.MESSAGES_CONTAINER_UNMOUNT = "MESSAGES_CONTAINER_UNMOUNT", e.STALE_MESSAGES_RENDERED = "STALE_MESSAGES_RENDERED", e.SHIMMER_RENDERED = "SHIMMER_RENDERED", e.FIRST_RUN_RENDERED = "FIRST_RUN_RENDERED", e.ERROR_HERO_RENDERED = "ERROR_HERO_RENDERED", e.WINDOW_SHOW = "WINDOW_SHOW", e.INSTALL_MOVE_TO_APP_FOLDER_AND_RESTART = "INSTALL_MOVE_TO_APP_FOLDER_AND_RESTART", e.OPEN_OR_SHOW_MESSENGER_WINDOW = "OPEN_OR_SHOW_MESSENGER_WINDOW", e.TRY_SHOW_NOT_VISIBLE_WINDOW = "TRY_SHOW_NOT_VISIBLE_WINDOW", e.TRY_SHOW_VISIBLE_WINDOW = "TRY_SHOW_VISIBLE_WINDOW", e.LOGIN_RENDERED = "LOGIN_RENDERED", e.LOGIN_START = "LOGIN_START", e.LOGIN_FAILED = "LOGIN_FAILED", e.LOGIN_SSO_GET_TOKENS_STARTED = "LOGIN_SSO_GET_TOKENS_STARTED", e.LOGIN_SSO_GET_TOKENS_COMPLETED = "LOGIN_SSO_GET_TOKENS_COMPLETED", e.LOGIN_SSO_GET_TOKENS_FAILED = "LOGIN_SSO_GET_TOKENS_FAILED", e.LOGIN_SSO_SHOW_INTERSTITIAL = "LOGIN_SSO_SHOW_INTERSTITIAL", e.LOGIN_SSO_INTERSTITIAL_FAILED = "LOGIN_SSO_INTERSTITIAL_FAILED", e.LOGIN_SSO_INTERSTITIAL_SUCCEEDED_AUTH_STARTED = "LOGIN_SSO_INTERSTITIAL_SUCCEEDED_AUTH_STARTED", e.LOGIN_SSO_AUTH_FAILED = "LOGIN_SSO_AUTH_FAILED", e.LOGIN_SSO_AUTH_SUCCEEDED = "LOGIN_SSO_AUTH_SUCCEEDED", e.SYNC_STARTED = "SYNC_STARTED", e.SYNC_COMPLETED = "SYNC_COMPLETED", e.SYSTEM_SUSPENDED = "SYSTEM_SUSPENDED", e.SYSTEM_RESUMED = "SYSTEM_RESUMED", e.NETWORK_ONLINE = "NETWORK_ONLINE", e.NETWORK_OFFLINE = "NETWORK_OFFLINE", e.OPEN_THREAD = "OPEN_THREAD", e.LOAD_THREADS = "LOAD_THREADS", e.THREADS_LOADED = "THREADS_LOADED", e.LOAD_MESSAGES = "LOAD_MESSAGES", e.MESSAGES_LOADED = "MESSAGES_LOADED", e.USER_OPEN_THREAD = "USER_OPEN_THREAD", e.THREAD_ITEM_SELECTED = "THREAD_ITEM_SELECTED", e.LOAD_THREAD_START = "LOAD_THREAD_START", e.LOAD_THREAD_END = "LOAD_THREAD_END", e.LOAD_THREAD_MODEL_START = "LOAD_THREAD_MODEL_START", e.LOAD_THREAD_MODEL_END = "LOAD_THREAD_MODEL_END", e.LOAD_MESSAGES_START = "LOAD_MESSAGES_START", e.LOAD_MESSAGES_END = "LOAD_MESSAGES_END", e.MSYS_FETCH_MESSAGES_START = "MSYS_FETCH_MESSAGES_START", e.MSYS_FETCH_MESSAGES_END = "MSYS_FETCH_MESSAGES_END", e.MSYS_FETCH_ATTACHMENTS_START = "MSYS_FETCH_ATTACHMENTS_START", e.MSYS_FETCH_ATTACHMENTS_END = "MSYS_FETCH_ATTACHMENTS_END", e.MSYS_FETCH_ATTACHMENT_ITEM_LIST_START = "MSYS_FETCH_ATTACHMENT_ITEM_LIST_START", e.MSYS_FETCH_ATTACHMENT_ITEM_LIST_END = "MSYS_FETCH_ATTACHMENT_ITEM_LIST_END", e.MSYS_FETCH_REACTIONS_START = "MSYS_FETCH_REACTIONS_START", e.MSYS_FETCH_REACTIONS_END = "MSYS_FETCH_REACTIONS_END", e.MSYS_FETCH_QUICK_REPLIES_START = "MSYS_FETCH_QUICK_REPLIES_START", e.MSYS_FETCH_QUICK_REPLIES_END = "MSYS_FETCH_QUICK_REPLIES_END", e.MSYS_FETCH_ATTACHMENT_CTAS_START = "MSYS_FETCH_ATTACHMENT_CTAS_START", e.MSYS_FETCH_ATTACHMENT_CTAS_END = "MSYS_FETCH_ATTACHMENT_CTAS_END", e.USER_START_NEW_THREAD = "USER_START_NEW_THREAD", e.EARLIER_MESSAGES_REQUESTED = "EARLIER_MESSAGES_REQUESTED", e.PAGING_EARLIER_MESSAGES = "PAGING_EARLIER_MESSAGES", e.EARLIER_MESSAGES_LOADED = "EARLIER_MESSAGES_LOADED", e.NEWER_MESSAGES_REQUESTED = "NEWER_MESSAGES_REQUESTED", e.PAGING_NEWER_MESSAGES = "PAGING_NEWER_MESSAGES", e.NEWER_MESSAGES_LOADED = "NEWER_MESSAGES_LOADED", e.RTC_START = "RTC_START", e.RTC_WINDOW_CREATED = "RTC_WINDOW_CREATED", e.RTC_INJECTED = "RTC_INJECTED", e.RTC_READY = "RTC_READY", e.RTC_LOADED = "RTC_LOADED", e.RTC_LOAD_FAILED = "RTC_LOAD_FAILED", e.RTC_FAILED = "RTC_FAILED", e.RTC_FAILED_FINAL = "RTC_FAILED_FINAL", e.RTC_DEFERRED = "RTC_DEFERRED", e.OUTGOING_CALL_ATTEMPT = "OUTGOING_CALL_ATTEMPT", e.AUDIO_CALL = "AUDIO_CALL", e.VIDEO_CHAT = "VIDEO_CHAT", e.NO_NETWORK_CONNECTION = "NO_NETWORK_CONNECTION", e.ALREADY_IN_CALL = "ALREADY_IN_CALL", e.LOAD_PARTICIPANTS_FAILED = "LOAD_PARTICIPANTS_FAILED", e.MEDIA_PERMISSIONS_ERROR = "MEDIA_PERMISSIONS_ERROR", e.OUTGOING_CALL_FAILED_RTC_LOADING = "OUTGOING_CALL_FAILED_RTC_LOADING", e.OUTGOING_CALL_FAILED_RTC_LOAD_FAILED = "OUTGOING_CALL_FAILED_RTC_LOAD_FAILED", e.OUTGOING_CALL_PLACED = "OUTGOING_CALL_PLACED", e.CALL_WINDOW_LOADED = "CALL_WINDOW_LOADED", e.CALL_WINDOW_LOAD_FAILED = "CALL_WINDOW_LOAD_FAILED", e.INCOMING_CALL_START = "INCOMING_CALL_START", e.INCOMING_CALL_PARTICIPANTS_LOADED = "INCOMING_CALL_PARTICIPANTS_LOADED", e.INCOMING_CALL_WINDOW_CREATED = "INCOMING_CALL_WINDOW_CREATED", e.INCOMING_CALL_DIALOG_SHOWN = "INCOMING_CALL_DIALOG_SHOWN", e.MISSED_CALL_START = "MISSED_CALL_START", e.MISSED_CALL_WINDOW_CREATED = "MISSED_CALL_WINDOW_CREATED", e.MISSED_CALL_DIALOG_SHOWN = "MISSED_CALL_DIALOG_SHOWN", e.ROOMS_INCOMING_START = "ROOMS_INCOMING_START", e.ROOMS_INCOMING_WINDOW_CREATED = "ROOMS_INCOMING_WINDOW_CREATED", e.ROOMS_INCOMING_PARTICIPANTS_LOADED = "ROOMS_INCOMING_PARTICIPANTS_LOADED", e.ROOMS_INCOMING_DIALOG_SHOWN = "ROOMS_INCOMING_DIALOG_SHOWN", e.OSMETA_READ_USER_ID_START = "OSMETA_READ_USER_ID_START", e.OSMETA_READ_USER_ID_SUCCEEDED = "OSMETA_READ_USER_ID_SUCCEEDED", e.OSMETA_READ_USER_ID_FAILED = "OSMETA_READ_USER_ID_FAILED", e.OSMETA_READ_ACCESS_TOKEN_START = "OSMETA_READ_ACCESS_TOKEN_START", e.OSMETA_READ_TOKEN_BLOB_START = "OSMETA_READ_TOKEN_BLOB_START", e.OSMETA_CREATE_BUFFER_START = "OSMETA_CREATE_BUFFER_START", e.OSMETA_DECRYPT_TOKEN_START = "OSMETA_DECRYPT_TOKEN_START", e.OSMETA_TOKEN_TO_STRING_START = "OSMETA_TOKEN_TO_STRING_START", e.OSMETA_READ_ACCESS_TOKEN_SUCCEEDED = "OSMETA_READ_ACCESS_TOKEN_SUCCEEDED", e.OSMETA_READ_ACCESS_TOKEN_FAILED = "OSMETA_READ_ACCESS_TOKEN_FAILED", e.OSMETA_CLEANUP_DATABASE_START = "OSMETA_CLEANUP_DATABASE_START", e.OSMETA_CLEANUP_DATABASE_SUCCEEDED = "OSMETA_CLEANUP_DATABASE_SUCCEEDED", e.OSMETA_CLEANUP_DATABASE_FAILED = "OSMETA_CLEANUP_DATABASE_FAILED", e.OSMETA_UPGRADE_STARTED = "OSMETA_UPGRADE_STARTED", e.OSMETA_UPGRADE_EXCHANGE_TOKEN_START = "OSMETA_UPGRADE_EXCHANGE_TOKEN_START", e.OSMETA_UPGRADE_SUCCEEDED = "OSMETA_UPGRADE_SUCCEEDED", e.OSMETA_UPGRADE_FAILED = "OSMETA_UPGRADE_FAILED", e.GET_PROMOTIONS = "GET_PROMOTIONS", e.GET_PROMOTIONS_SUCCEEDED = "GET_PROMOTIONS_SUCCEEDED", e.GET_PROMOTIONS_FAILED = "GET_PROMOTIONS_FAILED", e.MARK_PROMOTION_IMPRESSION = "MARK_PROMOTION_IMPRESSION", e.MARK_PROMOTION_IMPRESSION_SUCCEEDED = "MARK_PROMOTION_IMPRESSION_SUCCEEDED", e.MARK_PROMOTION_IMPRESSION_FAILED = "MARK_PROMOTION_IMPRESSION_FAILED", e.MARK_PROMOTION_ACTION = "MARK_PROMOTION_ACTION", e.MARK_PROMOTION_ACTION_SUCCEEDED = "MARK_PROMOTION_ACTION_SUCCEEDED", e.MARK_PROMOTION_ACTION_FAILED = "MARK_PROMOTION_ACTION_FAILED", e.APP_OPEN_FROM_RTC_PUSH_NOTIF = "APP_OPEN_FROM_PUSH_NOTIF", e.CALL_ACCEPTED = "CALL_ACCEPTED", e.CALL_REJECTED = "CALL_REJECTED", e.ROOMS_TRAY_SHIMMER_RENDERED = "ROOMS_TRAY_SHIMMER_RENDERED", e.ROOMS_TRAY_RENDERED = "ROOMS_TRAY_RENDERED", e.OPEN_MEDIA_GALLERY = "OPEN_MEDIA_GALLERY", e.LOAD_THREAD_MEDIA = "LOAD_THREAD_MEDIA", e.FORCE_LOAD_THREAD_MEDIA = "FORCE_LOAD_THREAD_MEDIA", e.OPEN_MEDIA_GALLERY_SUCCESS = "OPEN_MEDIA_GALLERY_SUCCESS", e.OPEN_MEDIA_GALLERY_FAILURE = "OPEN_MEDIA_GALLERY_FAILURE", e.MSYS_INIT_MAIN_THREAD_PART_1_START = "MSYS_INIT_MAIN_THREAD_PART_1_START", e.MSYS_INIT_UPDATE_LOGGING = "MSYS_INIT_UPDATE_LOGGING", e.MSYS_INIT_CREATE_ANALYTICS_STACK = "MSYS_INIT_CREATE_ANALYTICS_STACK", e.MSYS_INIT_REGISTER_CQL_MAPPINGS = "MSYS_INIT_REGISTER_CQL_MAPPINGS", e.MSYS_INIT_CREATE_DATABASE = "MSYS_INIT_CREATE_DATABASE", e.MSYS_INIT_OPEN_DATABASE_REQUEST = "MSYS_INIT_OPEN_DATABASE_REQUEST", e.MSYS_INIT_CREATE_DASM_CONFIG = "MSYS_INIT_CREATE_DASM_CONFIG", e.MSYS_INIT_CREATE_DB_HEALTH_MONITOR = "MSYS_INIT_CREATE_DB_HEALTH_MONITOR", e.MSYS_INIT_CREATE_EXPERIMENT_CACHE = "MSYS_INIT_CREATE_EXPERIMENT_CACHE", e.MSYS_INIT_OPEN_DATABASE_COMPLETE = "MSYS_INIT_OPEN_DATABASE_COMPLETE", e.MSYS_INIT_CREATE_AUTH_CONTEXT = "MSYS_INIT_CREATE_AUTH_CONTEXT", e.MSYS_INIT_CREATE_JOB_SCHEDULER = "MSYS_INIT_CREATE_JOB_SCHEDULER", e.MSYS_INIT_CREATE_MAILBOX_PROVIDER = "MSYS_INIT_CREATE_MAILBOX_PROVIDER", e.MSYS_INIT_CREATE_MAILBOX = "MSYS_INIT_CREATE_MAILBOX", e.MSYS_INIT_GET_SYNC = "MSYS_INIT_GET_SYNC", e.MSYS_INIT_TRACE_MAILBOX_SYNC = "MSYS_INIT_TRACE_MAILBOX_SYNC", e.MSYS_INIT_TRACE_MESSAGE_SEND = "MSYS_INIT_TRACE_MESSAGE_SEND", e.MSYS_INIT_INSTALL_SYNC_OBSERVER = "MSYS_INIT_INSTALL_SYNC_OBSERVER", e.MSYS_INIT_INSTALL_RSYS_OBSERVER = "MSYS_INIT_INSTALL_RSYS_OBSERVER", e.MSYS_INIT_INSTALL_INVALID_ACCESS_TOKEN_OBSERVER = "MSYS_INIT_INSTALL_INVALID_ACCESS_TOKEN_OBSERVER", e.MSYS_INIT_INSTALL_INVALID_SESSION_OBSERVER = "MSYS_INIT_INSTALL_INVALID_SESSION_OBSERVER", e.MSYS_INIT_MAIN_THREAD_PART_1_DONE = "MSYS_INIT_MAIN_THREAD_PART_1_DONE", e.MSYS_INIT_DB_THREAD_PART_START = "MSYS_INIT_DB_THREAD_PART_START", e.MSYS_INIT_SET_MAILBOX_SYNC_PARAMETERS = "MSYS_INIT_SET_MAILBOX_SYNC_PARAMETERS", e.MSYS_INIT_SET_ARFX_SYNC_PARAMETERS = "MSYS_INIT_SET_ARFX_SYNC_PARAMETERS", e.MSYS_INIT_SET_EXPERIMENT_SYNC_PARAMETERS = "MSYS_INIT_SET_EXPERIMENT_SYNC_PARAMETERS", e.MSYS_INIT_DB_THREAD_PART_DONE = "MSYS_INIT_DB_THREAD_PART_DONE", e.MSYS_INIT_MAIN_THREAD_PART_2_START = "MSYS_INIT_MAIN_THREAD_PART_2_START", e.MSYS_INIT_SET_MAILBOX_ACTIVE = "MSYS_INIT_SET_MAILBOX_ACTIVE", e.MSYS_INIT_INITIALIZE_MQTT_HANDLER = "MSYS_INIT_INITIALIZE_MQTT_HANDLER", e.MSYS_INIT_GET_MQTT_CHANNEL = "MSYS_INIT_GET_MQTT_CHANNEL", e.MSYS_INIT_LOAD_EXPERIMENT_CACHE_REQUEST = "MSYS_INIT_LOAD_EXPERIMENT_CACHE_REQUEST", e.MSYS_INIT_LOAD_EXPERIMENT_CACHE_COMPLETE = "MSYS_INIT_LOAD_EXPERIMENT_CACHE_COMPLETE", e.MSYS_INIT_CREATE_OVERLAY_CONFIG_MANAGER = "MSYS_INIT_CREATE_OVERLAY_CONFIG_MANAGER", e.MSYS_INIT_GET_APP_DISPLAY_NAME = "MSYS_INIT_GET_APP_DISPLAY_NAME", e.MSYS_INIT_CREATE_CAPTURE_CONTROLLER = "MSYS_INIT_CREATE_CAPTURE_CONTROLLER", e.MSYS_INIT_CREATE_RSYS_CALL_MANAGER = "MSYS_INIT_CREATE_RSYS_CALL_MANAGER", e.MSYS_INIT_START_RSYS_PRECALL_ACTIONS = "MSYS_INIT_START_RSYS_PRECALL_ACTIONS", e.MSYS_INIT_ADD_ACTIVE_CALL_LISTENER = "MSYS_INIT_ADD_ACTIVE_CALL_LISTENER", e.MSYS_INIT_MAIN_THREAD_PART_2_END = "MSYS_INIT_MAIN_THREAD_PART_2_END", e.USER_SEND_MESSAGE = "USER_SEND_MESSAGE", e.SEND_MESSAGE_START = "SEND_MESSAGE_START", e.SEND_MESSAGE_END = "SEND_MESSAGE_END", e.NEW_SENT_MESSAGE_RENDERED = "NEW_SENT_MESSAGE_RENDERED", e.INBOX_SYNC_SHOULD_LOAD_MESSAGES = "INBOX_SYNC_SHOULD_LOAD_MESSAGES"
        }(M || (t.PerformanceEvents = M = {})), t.OutgoingCallSource = f,
        function(e) {
            e.CHAT_HEADER = "chat_header", e.CHAT_CELL = "chat_cell", e.CONTEXT_MENU = "context_menu", e.XMA = "xma", e.MISSED_CALL_DIALOG = "missed_call_dialog"
        }(f || (t.OutgoingCallSource = f = {})), t.SearchSource = y,
        function(e) {
            e.ThreadList = "thread_list", e.Omnipicker = "omnipicker", e.ThreadDetails = "thread_details"
        }(y || (t.SearchSource = y = {})), t.BlockedByViewerStatus = L,
        function(e) {
            e[e.Unblocked = 0] = "Unblocked", e[e.MessageBlocked = 1] = "MessageBlocked", e[e.FullyBlocked = 2] = "FullyBlocked"
        }(L || (t.BlockedByViewerStatus = L = {})), t.AttachmentStatus = v,
        function(e) {
            e[e.Supported = 0] = "Supported", e[e.FileTooLarge = 1] = "FileTooLarge", e[e.TypeNotSupported = 2] = "TypeNotSupported"
        }(v || (t.AttachmentStatus = v = {})), t.AttachmentCTAType = P,
        function(e) {
            e.XMA_PAGE_SHARE = "xma_page_share", e.XMA_ELEMENT_SHARE = "xma_element_share", e.XMA_PAYMENT = "xma_payment", e.XMA_P2P_PAYMENT_DETAILS = "xma_p2p_payment_details", e.XMA_P2P_PAYMENT_DETAILS_RECEIVE_MONEY = "xma_p2p_payment_details_receive_money", e.XMA_P2P_REQUEST_PAY = "xma_p2p_request_pay", e.XMA_P2P_VERIFY_INFO = "xma_p2p_verify_info", e.XMA_GAME_PLAY = "xma_game_play", e.XMA_WEB_URL = "xma_web_url", e.XMA_EXTENSION = "xma_extension", e.XMA_POSTBACK = "xma_postback", e.XMA_OPEN_NATIVE = "xma_open_native", e.XMA_BRANDED_CAMERA = "xma_branded_camera", e.XMA_ACCOUNT_LINK = "xma_account_link", e.XMA_ACCOUNT_UNLINK = "xma_account_unlink", e.XMA_DIRECT_SEND = "xma_direct_send", e.XMA_LIVE_LOCATION_SHARING = "xma_live_location_sharing", e.XMA_SPONSORED_MESSAGE_WEB_URL = "xma_sponsored_message_web_url", e.XMA_SPONSORED_MESSAGE_POSTBACK = "xma_sponsored_message_postback", e.XMA_RTC_AUDIO = "xma_rtc_audio", e.XMA_RTC_VIDEO = "xma_rtc_video", e.XMA_RTC_MISSED_AUDIO = "xma_rtc_missed_audio", e.XMA_RTC_MISSED_VIDEO = "xma_rtc_missed_video", e.XMA_RTC_ENDED_AUDIO = "xma_rtc_ended_audio", e.XMA_RTC_ENDED_VIDEO = "xma_rtc_ended_video", e.XMA_OPEN_JOINABLE_CALL_INVITE_URL = "xma_open_joinable_call_invite_url", e.XMA_ROOMS_SPEAKEASY_INVITE = "xma_rooms_speakeasy_invite", e.XMA_ROOMS_SPEAKEASY_INTERESTED = "xma_rooms_speakeasy_interested", e.XMA_ROOMS_SPEAKEASY_EDIT = "xma_rooms_speakeasy_edit", e.XMA_ROOMS_SPEAKEASY_EXPIRED = "xma_rooms_speakeasy_expired", e.XMA_ROOMS_SPEAKEASY_UNDO = "xma_rooms_speakeasy_undo", e.XMA_ROOMS_SPEAKEASY_CALLBACK = "xma_rooms_speakeasy_callback"
        }(P || (t.AttachmentCTAType = P = {})), t.PersistentMenuCTAType = b,
        function(e) {
            e.MENU_NESTED = "menu_nested", e.MENU_PAGE_SHARE = "menu_page_share", e.MENU_ELEMENT_SHARE = "menu_element_share", e.MENU_PAYMENT = "menu_payment", e.MENU_GAME_PLAY = "menu_game_play", e.MENU_WEB_URL = "menu_web_url", e.MENU_EXTENSION = "menu_extension", e.MENU_POSTBACK = "menu_postback", e.MENU_PHONE_NUMBER = "menu_phone_number", e.MENU_OPEN_NATIVE = "menu_open_native", e.MENU_BRANDED_CAMERA = "menu_branded_camera"
        }(b || (t.PersistentMenuCTAType = b = {})), t.AdminMessageCTAType = U,
        function(e) {
            e.ADMIN_MSG_MANAGE_AD = "admin_msg_manage_ad", e.ADMIN_MSG_WEB_URL = "admin_msg_web_url", e.ADMIN_MSG_P2B_USER_CONTROLS = "admin_msg_p2b_user_controls", e.ADMIN_MSG_EDIT_NICKNAME = "admin_msg_edit_nickname", e.ADMIN_MSG_POLL_DETAILS = "admin_msg_poll_details"
        }(U || (t.AdminMessageCTAType = U = {})), t.SyncGroupsSyncStatus = w,
        function(e) {
            e[e.MCAMailboxSyncStatusUnknown = 0] = "MCAMailboxSyncStatusUnknown", e[e.MCAMailboxSyncStatusInitializing = 1] = "MCAMailboxSyncStatusInitializing", e[e.MCAMailboxSyncStatusComplete = 2] = "MCAMailboxSyncStatusComplete", e[e.MCAMailboxSyncStatusResnapshotting = 3] = "MCAMailboxSyncStatusResnapshotting"
        }(w || (t.SyncGroupsSyncStatus = w = {})), t.SyncGroupsModelIds = G,
        function(e) {
            e[e.MailboxSyncGroup = 1] = "MailboxSyncGroup", e[e.ExperimentsSyncGroup = 8] = "ExperimentsSyncGroup", e[e.SettingsSyncGroup = 16] = "SettingsSyncGroup"
        }(G || (t.SyncGroupsModelIds = G = {})), t.MsysStatsShortName = F,
        function(e) {
            e.NetworkBytesIn = "NTI"
        }(F || (t.MsysStatsShortName = F = {})), t.PortalKey = k,
        function(e) {
            e.Settings = "Settings", e.Feedback = "Feedback"
        }(k || (t.PortalKey = k = {})), t.MsysAppState = H,
        function(e) {
            e[e.Foreground = 0] = "Foreground", e[e.Background = 1] = "Background"
        }(H || (t.MsysAppState = H = {})), t.WorkForeignEntityType = B,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Foreign = 1] = "Foreign", e[e.NotForeign = 2] = "NotForeign"
        }(B || (t.WorkForeignEntityType = B = {})), t.ComposerDisabledType = x,
        function(e) {
            e[e.NewThreadNoPreview = 1] = "NewThreadNoPreview", e[e.NewThreadNoRecipients = 2] = "NewThreadNoRecipients", e[e.BlockedThread = 3] = "BlockedThread", e[e.CantMessage = 4] = "CantMessage", e[e.NotMember = 5] = "NotMember"
        }(x || (t.ComposerDisabledType = x = {})), t.RtcCallStatus = Y,
        function(e) {
            e[e.NONE = 0] = "NONE", e[e.AUDIO = 1] = "AUDIO", e[e.VIDEO = 2] = "VIDEO"
        }(Y || (t.RtcCallStatus = Y = {}));
    t.GIF_DEFAULT_DIM = 250;
    t.STICKER_DEFAULT_DIM = 120;
    let W, K, V, J, j, Q, q, X, z, Z, $, ee, te, ne, ae, se;
    t.UNAUTHENTICATED_USERID = "0", t.PaymentCredentialType = W,
        function(e) {
            e[e.CARD = 0] = "CARD", e[e.PAYPAL = 1] = "PAYPAL"
        }(W || (t.PaymentCredentialType = W = {})), t.ProductType = K,
        function(e) {
            e.P2P = "p2p", e.PAGES_COMMERCE = "pages_commerce", e.NMOR_PAGES_COMMERCE = "nmor_pages_commerce", e.MESSENGER_COMMERCE = "messenger_commerce"
        }(K || (t.ProductType = K = {})), t.PaymentActivitySearchResultStatus = V,
        function(e) {
            e[e.Pending = 0] = "Pending", e[e.Failed = 1] = "Failed", e[e.Succeeded = 2] = "Succeeded", e[e.Initiated = -1] = "Initiated"
        }(V || (t.PaymentActivitySearchResultStatus = V = {})), t.TransactionType = J,
        function(e) {
            e[e.PayMoney = 0] = "PayMoney", e[e.RequestMoney = 1] = "RequestMoney", e[e.P2MCheckOut = 2] = "P2MCheckOut"
        }(J || (t.TransactionType = J = {})), t.PaymentPasscodeState = j,
        function(e) {
            e[e.Active = 65] = "Active", e[e.Deleted = 68] = "Deleted", e[e.Locked = 76] = "Locked", e[e.Disabled = 88] = "Disabled"
        }(j || (t.PaymentPasscodeState = j = {})), t.MeetupCreationErrorType = Q,
        function(e) {
            e.AccountTooEarly = "account_early", e.RateLimit = "rate_limit", e.Timeout = "timeout", e.Unknown = "unknown"
        }(Q || (t.MeetupCreationErrorType = Q = {})), t.MeetupLockStatus = q,
        function(e) {
            e[e.OPEN = 0] = "OPEN", e[e.LOCKED_BY_OWNER = 1] = "LOCKED_BY_OWNER", e[e.LOCKED_BY_OWNER_DISCONNECT = 2] = "LOCKED_BY_OWNER_DISCONNECT"
        }(q || (t.MeetupLockStatus = q = {})), t.ThreadCapabilities = X,
        function(e) {
            e[e.PAYMENT = 0] = "PAYMENT", e[e.CAMERA = 1] = "CAMERA", e[e.MEDIA_PICKER = 2] = "MEDIA_PICKER", e[e.STICKER = 3] = "STICKER", e[e.GIF = 4] = "GIF", e[e.GO_TO_SECRET_CONVERSATION = 5] = "GO_TO_SECRET_CONVERSATION", e[e.COLOR_CUSTOMIZATION = 6] = "COLOR_CUSTOMIZATION", e[e.EMOJI_CUSTOMIZATION = 7] = "EMOJI_CUSTOMIZATION", e[e.THREAD_DETAILS_PROFILE_BUTTON = 8] = "THREAD_DETAILS_PROFILE_BUTTON", e[e.NICKNAMES = 9] = "NICKNAMES", e[e.BLOCK = 10] = "BLOCK", e[e.CALIBRA = 12] = "CALIBRA", e[e.MESSENGER_KIDS_MANAGE_KID_ACCOUNT = 13] = "MESSENGER_KIDS_MANAGE_KID_ACCOUNT", e[e.AUDIO_CLIPS = 14] = "AUDIO_CLIPS", e[e.SHARED_MEDIA = 15] = "SHARED_MEDIA", e[e.BLOCK_GROUP_MEMBER = 16] = "BLOCK_GROUP_MEMBER", e[e.FEEDBACK_AND_REPORT = 17] = "FEEDBACK_AND_REPORT", e[e.REACTIONS = 18] = "REACTIONS", e[e.MUTE_THREAD = 19] = "MUTE_THREAD", e[e.SEEN_HEADS = 20] = "SEEN_HEADS", e[e.MESSAGE_REQUEST_COMPOSER_BANNER = 21] = "MESSAGE_REQUEST_COMPOSER_BANNER", e[e.IN_THREAD_PROFILE_BUTTON = 22] = "IN_THREAD_PROFILE_BUTTON", e[e.THREAD_DETAILS = 23] = "THREAD_DETAILS", e[e.RTC_VIDEO_CALL = 24] = "RTC_VIDEO_CALL", e[e.RTC_VOICE_CALL = 25] = "RTC_VOICE_CALL", e[e.MEMBER_LIST = 26] = "MEMBER_LIST", e[e.ADD_MEMBER = 27] = "ADD_MEMBER", e[e.LEAVE_THREAD = 28] = "LEAVE_THREAD", e[e.BLOCKED_USER_INTERSTITIAL = 29] = "BLOCKED_USER_INTERSTITIAL", e[e.OPTIMISTIC_THREAD_FEEDBACK_AND_REPORT = 30] = "OPTIMISTIC_THREAD_FEEDBACK_AND_REPORT", e[e.LOCATION_SHARING = 31] = "LOCATION_SHARING", e[e.IGNORE_MESSAGES = 32] = "IGNORE_MESSAGES", e[e.FOCUS_MODE = 33] = "FOCUS_MODE", e[e.SEARCH_IN_CONVERSATION = 34] = "SEARCH_IN_CONVERSATION", e[e.CREATE_GROUP = 35] = "CREATE_GROUP", e[e.POLL_CREATION = 36] = "POLL_CREATION", e[e.DISPLAY_ACTOR_TYPE_IN_THREAD_VIEW_HEADER = 37] = "DISPLAY_ACTOR_TYPE_IN_THREAD_VIEW_HEADER", e[e.DISAPPEARING_MODE = 38] = "DISAPPEARING_MODE", e[e.FORCE_ONE_PHASE_SEND = 39] = "FORCE_ONE_PHASE_SEND", e[e.SPLIT_MULTI_SEND = 40] = "SPLIT_MULTI_SEND", e[e.THREAD_DETAILS_IG_PROFILE_BUTTON = 41] = "THREAD_DETAILS_IG_PROFILE_BUTTON", e[e.MESSAGE_REPLY = 42] = "MESSAGE_REPLY", e[e.MENTIONS = 43] = "MENTIONS", e[e.DISABLE_LINKS = 44] = "DISABLE_LINKS", e[e.THREAD_NAME_CUSTOMIZATION = 60] = "THREAD_NAME_CUSTOMIZATION", e[e.THREAD_PHOTO_CUSTOMIZATION = 61] = "THREAD_PHOTO_CUSTOMIZATION"
        }(X || (t.ThreadCapabilities = X = {})), t.RoomCreationState = z,
        function(e) {
            e[e.Pending = 0] = "Pending", e[e.Done = 1] = "Done", e[e.Failed = 2] = "Failed"
        }(z || (t.RoomCreationState = z = {})), t.RoomAudienceType = Z,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Anyone = 1] = "Anyone", e[e.InvitedOnly = 2] = "InvitedOnly"
        }(Z || (t.RoomAudienceType = Z = {})), t.RoomLinkSurface = $,
        function(e) {
            e[e.Messenger = 1] = "Messenger", e[e.FriendJoinups = 2] = "FriendJoinups", e[e.Group = 3] = "Group", e[e.Event = 4] = "Event", e[e.Dating = 5] = "Dating", e[e.Workplace = 6] = "Workplace", e[e.Instagram = 7] = "Instagram", e[e.WhatsApp = 8] = "WhatsApp", e[e.MessengerV2 = 9] = "MessengerV2", e[e.WorplaceGroup = 10] = "WorplaceGroup", e[e.Generic = 11] = "Generic"
        }($ || (t.RoomLinkSurface = $ = {})), t.RoomInviteeType = ee,
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
        }(ae || (t.RoomsBadgeType = ae = {})), t.WindowsStartupTaskState = se,
        function(e) {
            e[e.disabled = 0] = "disabled", e[e.disabledByUser = 1] = "disabledByUser", e[e.enabled = 2] = "enabled", e[e.disabledByPolicy = 3] = "disabledByPolicy", e[e.enabledByPolicy = 4] = "enabledByPolicy"
        }(se || (t.WindowsStartupTaskState = se = {}));
    let re, ie;
    t.EmptyTincanKeyNames = ["MasterEncryptedKey", "identityKeyPublicKey", "identityKeyPrivateKey", "lastResortPreKeyPublicKey", "lastResortPreKeyPrivateKey", "DEKDecryptedKey"], t.WindowsNotificationSetting = re,
        function(e) {
            e[e.enabled = 0] = "enabled", e[e.disabledForApplication = 1] = "disabledForApplication", e[e.disabledForUser = 2] = "disabledForUser", e[e.disabledByGroupPolicy = 3] = "disabledByGroupPolicy", e[e.disabledByManifest = 4] = "disabledByManifest"
        }(re || (t.WindowsNotificationSetting = re = {})), t.MacNotificationSetting = ie,
        function(e) {
            e[e.Unknown = 0] = "Unknown", e[e.Disabled = 1] = "Disabled", e[e.Enabled = 2] = "Enabled"
        }(ie || (t.MacNotificationSetting = ie = {}));
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
        s = n(5),
        r = n(20),
        i = n(14),
        o = n(21),
        S = n(22),
        l = E(n(9)),
        c = n(0),
        _ = E(n(1));

    function E(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    class A extends a.AslBase {
        constructor(...e) {
            super(...e), this._appName = void 0, this._buildNumber = void 0, this._trackedEvents = new Map([
                [r.EventNames.HeartbeatEventName, {
                    sentStat: s.AslStat.HeartbeatEventsSent,
                    droppedStat: s.AslStat.HeartbeatEventsDropped,
                    outstandingState: s.AslState.HeartbeatEventsOutstanding
                }],
                [r.EventNames.AppStartEventName, {
                    sentStat: s.AslStat.AppStartEventsSent,
                    droppedStat: s.AslStat.AppStartEventsDropped,
                    outstandingState: s.AslState.AppStartEventsOutstanding
                }],
                [r.EventNames.PerformanceEventName, {
                    sentStat: s.AslStat.PerformanceEventsSent,
                    droppedStat: s.AslStat.PerformanceEventsDropped,
                    outstandingState: s.AslState.PerformanceEventsOutstanding
                }],
                [r.EventNames.UserInteractionEventName, {
                    sentStat: s.AslStat.InteractionEventsSent,
                    droppedStat: s.AslStat.InteractionEventsDropped,
                    outstandingState: s.AslState.InteractionEventsOutstanding
                }]
            ])
        }
        initializeProcessAsl(e) {
            if (this._native || this.getProcessAsl()) return void this.logError("ERR: Process ASL already initialized!");
            const t = require(_.default.resolve(S.buildDir, "systeminfo.node"));
            this._buildNumber = parseInt(null !== o.number && void 0 !== o.number ? o.number : "") || 0;
            const n = this._buildNumber.toString();
            this._appName = i.app.getName();
            const a = t.initializeAsl(this._appName, n, e);
            this.setProcessAslHandle(a, t), this.incrementStat(s.AslStat.AslOpened, 1), e ? (this.incrementStat(s.AslStat.MainProcessStart, 1), this.onMainProcessStart()) : this.incrementStat(s.AslStat.RenderProcessStart, 1)
        }
        onPigeonEventQueued(e, t) {
            this.onPigeonEventQueuedAsync(e, t).catch(t => {
                this.logError(`ASL: Failed pigeon queued processing ${e}: ${t}`);
                try {
                    this.incrementStat(s.AslStat.AslPigeonHandlingErrors, 1)
                } catch {}
            })
        }
        onPigeonEventsSent(e) {
            this.onPigeonEventsSentAsync(e).catch(e => {
                this.logError(`ASL: Failed pigeon sent processing: ${e}`);
                try {
                    this.incrementStat(s.AslStat.AslPigeonHandlingErrors, 1)
                } catch {}
            })
        }
        logError(e) {
            l.default.error(e)
        }
        async onMainProcessStart() {
            await this.getProcessAsl().latchOutstandingStatesToStats(), await this.setState(s.AslState.MainProcessOutstanding, 1), this.startTrackingTime(s.AslStat.AppInitializingTime), i.app.on("quit", () => {
                this._timeTracker.endAllTracking(), this._native.onAppQuit()
            }), i.app.on("renderer-process-crashed", () => {
                this.incrementStat(s.AslStat.RenderProcessAbnormalDeath, 1)
            }), i.app.on("gpu-process-crashed", () => {
                this.incrementStat(s.AslStat.GpuProcessAbnormalDeath, 1)
            }), this.setState(s.AslState.BuildNumber, this._buildNumber), this.setState(s.AslState.LeftOverDataUploaded, 0)
        }
        async onPigeonEventQueuedAsync(e, t) {
            this.incrementStat(s.AslStat.PigeonEventsQueued, 1), this.incrementState(s.AslState.PigeonEventsOutstanding, 1);
            const n = this._trackedEvents.get(e);
            n && this.incrementState(n.outstandingState, 1)
        }
        async onPigeonEventsSentAsync(e) {
            this.incrementStat(s.AslStat.PigeonEventsSent, e.length), this.incrementState(s.AslState.PigeonEventsOutstanding, -e.length);
            for (const t of e) {
                const e = this._trackedEvents.get(t.name);
                e && (this.incrementStat(e.sentStat, 1), this.incrementState(e.outstandingState, -1))
            }
            for (const t of e)
                if (t.name === r.EventNames.HeartbeatEventName) {
                    const e = t.extra;
                    super.onHeartbeatEventSent(0 != e.aslStats.length)
                }
        }
        async updateCrashReporterStats() {
            const e = await this.fetchState(s.AslState.CrashReporterLastReport),
                t = new Date(1e3 * e),
                n = c.crashReporter.getUploadedReports();
            if (n.length) {
                n.sort((e, t) => t.date.getTime() - e.date.getTime());
                let e = 0;
                for (const a of n) {
                    if (a.date <= t) break;
                    e++
                }
                if (e) {
                    this.incrementStat(s.AslStat.CrashReporterUploads, e);
                    const t = n[0];
                    this.setState(s.AslState.CrashReporterLastReport, this.getUtcSecSinceEpoch(t.date))
                }
            }
        }
        async fetchAslList() {
            return this._native.fetchAslList(this._appName)
        }
        validateLatchInfo(e) {
            const t = new Map([
                [s.AslState.PigeonEventsOutstanding, s.AslStat.PigeonEventsDropped]
            ]);
            for (const e of this._trackedEvents.values()) t.set(e.outstandingState, e.droppedStat);
            for (const n of t) e.get(n[0]) != n[1] && this.logError(`ASL: JS crash state not added to or does not match native table! ${n[0]}/${n[1]}`)
        }
    }
    var u = new A;
    t.default = u
}, function(e, t, n) {
    "use strict";

    function a(e, t, n) {
        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && s(e[a], t, n)
    }

    function s(e, t, n) {
        "function" == typeof e && !1 !== e.level && r(n.levels, e.level, t.level) && (t = function(e, t, n) {
            if (!e || !e.length) return n;
            for (var a = 0; a < e.length && (n = e[a](n, t)); a++);
            return n
        }(n.hooks, e, t)) && e(t)
    }

    function r(e, t, n) {
        var a = e.indexOf(t),
            s = e.indexOf(n);
        return -1 === s || -1 === a || s <= a
    }
    e.exports = {
        compareLevels: r,
        log: function(e, t) {
            var n = e.transports,
                s = {
                    data: Array.prototype.slice.call(arguments, 2),
                    date: new Date,
                    level: t,
                    variables: e.variables
                };
            a(n, s, e)
        },
        runTransport: s,
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

    function s(e, t) {
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
                        for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (a[s] = e(t[s], n - 1));
                        return a
                    }(t, e)
                }
        },
        serialize: s,
        toJSON: function(e) {
            return JSON.parse(JSON.stringify(e, s))
        },
        toString: function(e) {
            var t = e.map((function(e) {
                if (void 0 !== e) return JSON.parse(JSON.stringify(e, s, "  "))
            }));
            return a.format.apply(a, t)
        }
    }
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.AslBase = t.AslFile = void 0;
    var a = n(18),
        s = n(5),
        r = n(19);
    class i {
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
            const e = await this._native.fetchAslNonZeroStats(this._handle, s.AslStat.StatCount),
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
    t.AslFile = i;
    if (t.AslBase = class {
            constructor() {
                this._native = void 0, this._timeTracker = new r.TimeTracker(this), this._outstandingEvent = void 0, this._heartbeatSequence = 0
            }
            setProcessAslHandle(e, t) {
                if (this._native || this.getProcessAsl()) return void this.logError("ERR: Process ASL already initialized!");
                this._native = t, this.setProcessAsl(new i(this._native, e));
                const n = this._native.fetchLatchInfo(),
                    a = new Map;
                for (let e = 0; e + 1 < n.length; e += 2) a.set(n[e], n[e + 1]);
                this._timeTracker.validateCrashedStatesToLatch(a), this.validateLatchInfo(a), this.getProcessAsl().fetchHeader().then(e => {
                    this.checkValueMatch("stat max", e.statMax, s.AslStat.StatMax), this.checkValueMatch("stat cnt", e.statCount, s.AslStat.StatCount), this.checkValueMatch("state max", e.stateMax, s.AslState.StateMax), this.checkValueMatch("state cnt", e.stateCount, s.AslState.StateCount)
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
                    if (!await this.fetchState(s.AslState.PrevBuildDataUploaded)) try {
                        const n = await this.getProcessAsl().fetchHeader(),
                            a = this.getBuildNumberFromAslPath(n.path),
                            r = await this.fetchAslList();
                        for (const n of r) try {
                            const r = this.getBuildNumberFromAslPath(n);
                            if (!r || r == a) continue;
                            const o = new i(this._native, await this._native.loadAsl(n));
                            if ((await o.fetchStates([s.AslState.LeftOverDataUploaded]))[0]) continue;
                            await o.latchOutstandingStatesToStats(), t.push([r.toString(), (await this.getAslStatsForFile(o)).aslStats]), e.prevBuildAsls.set(r, o)
                        } catch (e) {
                            this.logError(`ASL: Failed processing ${n}: ${e}`), this.incrementStat(s.AslStat.AslPrevBuildFileErrors, 1)
                        }
                    } catch (e) {
                        this.logError(`ASL: Failed prev build asl processing: ${e}`), this.incrementStat(s.AslStat.AslPrevBuildDataErrors, 1)
                    }
                    return this._outstandingEvent = e, {
                        aslStats: e.reportedStats.aslStats,
                        aslPrevBuildStats: t
                    }
                } catch (e) {
                    return this.logError(`ASL: Failed generating asl event data ${e}`), this.incrementStat(s.AslStat.AslEventErrors, 1), {
                        aslStats: [],
                        aslPrevBuildStats: []
                    }
                }
            }
            async onHeartbeatEventSent(e) {
                if (e) {
                    if (!this._outstandingEvent) return this.logError("ASL: No event context for heartbeat event with asl data!"), void this.incrementStat(s.AslStat.AslEventContextErrors, 1);
                    const e = this._outstandingEvent;
                    this._outstandingEvent = null, this.setState(s.AslState.PrevBuildDataUploaded, 1);
                    for (const t of e.prevBuildAsls.values()) t.setStates(new Map([
                        [s.AslState.LeftOverDataUploaded, 1]
                    ])), t.close();
                    const t = await this.fetchState(s.AslState.AslEventSequence);
                    this.setState(s.AslState.AslEventSequence, t + 1), this.setState(s.AslState.AslEventLastEpoch, this.getUtcSecSinceEpoch(new Date));
                    const n = e.reportedStats.rawStats,
                        a = new Map;
                    for (const [e, t] of n) a.set(e, -t);
                    this.incrementStats(a)
                } else this._outstandingEvent && (this.logError("ASL: Heartbeat without asl data but pending context!"), this._outstandingEvent = null, this.incrementStat(s.AslStat.AslEventContextErrors, 1))
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
                for (const [e, a] of t) n.set(s.AslStat[e], a);
                const [a, r, i, o] = await e.fetchStates([s.AslState.AslEventSequence, s.AslState.AppSequence, s.AslState.CurrentBootId, s.AslState.SecSinceBoot]);
                n.set(s.eventSequenceLabel, a + 1), n.set(s.appSequenceLabel, r), n.set(s.bootSequenceLabel, i), n.set(s.secSinceBootLabel, o);
                const S = await e.fetchStates([s.AslState.AslEventLastEpoch]),
                    l = this.getUtcSecSinceEpoch(new Date);
                let c = S[0] ? l - S[0] : 0;
                return n.set(s.secSinceLastLabel, c), n.set(s.heartbeatSequenceLabel, this._heartbeatSequence), n.set(s.clientUnixTimeLabel, this.getUtcSecSinceEpoch(new Date)), {
                    rawStats: t,
                    aslStats: [...n]
                }
            }
            getBuildNumberFromAslPath(e) {
                const t = (0, a.pathBaseName)(e, (0, a.pathExtName)(e));
                return parseInt(t) || 0
            }
        }, s.AslState.StateCount > s.AslState.StateMax) throw new Error("Asl state max need to be increased!");
    if (s.AslStat.StatCount > s.AslStat.StatMax) throw new Error("Asl stat max need to be increased!")
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
    const s = [{
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
        r = new Map;
    for (const e of s) r.set(e.timeStat, e);
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
            const s = {
                config: t,
                startTime: new Date
            };
            this._outstanding.set(n, s), null != t.countStat && this._asl.incrementStat(t.countStat, 1), null != t.parentStat && this._asl.incrementStat(t.parentStat, 1), null != t.outstandingState && this._asl.setState(t.outstandingState, 1), this._snapshotTimer || (this._lastSnapshotTime = new Date, this._snapshotTimer = setInterval(this.snapshotTimes.bind(this), 5e3))
        }
        async stopTrackingTime(e) {
            const t = this.findConfig(e);
            if (!t) return;
            const n = this.getKeyStat(t),
                a = this._outstanding.get(n);
            if (!a) return void this._asl.logError("ASL: called stopTrackingTime for stat not outstanding: {$timeStat}");
            if (a.config.timeStat != e) return void this._asl.logError(`ASL: called stopTrackingTime for wrong stat in group: ${a.config.timeStat} vs ${e}`);
            this._outstanding.delete(n), this._outstanding.size || (clearInterval(this._snapshotTimer), this._snapshotTimer = 0);
            const s = new Date;
            this.captureTimeToAsl(a, s), null != t.outstandingState && this._asl.setState(t.outstandingState, 0)
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
            for (const t of s) null != t.outstandingState && null != t.crashStat && e.get(t.outstandingState) != t.crashStat && this._asl.logError(`ASL: time tracker crash state not added to or does not match native table! ${t.outstandingState}/${t.crashStat}`)
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
            const t = r.get(e);
            return t || this._asl.logError("ASL: Need to add config for tracking timeStat " + e), t
        }
        getKeyStat(e) {
            return null != e.parentStat ? e.parentStat : e.timeStat
        }
    }
}, function(e, t, n) {
    "use strict";
    let a, s, r, i, o;
    Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.AppStartEvent = function(e) {
            return {
                name: o.AppStartEventName,
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
                name: o.UserInteractionEventName,
                event: e.event,
                target: e.target,
                surface: e.surface,
                context: e.context || {}
            }
        }, t.PerformanceEvent = function(e) {
            return {
                name: o.PerformanceEventName,
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
                name: o.HeartbeatEventName,
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
        }(a || (t.DeeplinkEvents = a = {})), t.NativeRtcEvents = s,
        function(e) {
            e.APPROOT_START = "approot_start", e.UI_ERROR = "ui_error", e.PARTICIPANT_RENDER = "participant_render", e.MEDIA_ACCESS_ERROR = "media_access_error", e.SCREEN_SHARE_MEDIA_ACCESS_ERROR = "screen_share_media_access_error", e.OUT_OF_SYNC_CALL_ENDED = "out_of_sync_call_ended", e.GATEKEEPERS_UNDEFINED = "gatekeepers_undefined", e.GATEKEEPER_NOT_FOUND = "gatekeeper_not_found", e.ALREADY_IN_CALL = "already_in_call", e.I18N_LOADED_TRANSLATIONS = "i18n_loaded_translations", e.I18N_ERROR = "i18n_error", e.MEDIA_ISSUES_FROM_PARTICIPANT = "media_issues_from_participant", e.AUDIO_DEVICES_LOAD_SETTING = "audio_devices_load_setting", e.AUDIO_DEVICES_SELECT = "audio_devices_select", e.AUDIO_DEVICES_UPDATED = "audio_devices_updated", e.INCALL_NOTIFICATION_ADD_ITEM = "incall_notification_add_item", e.INCALL_NOTIFICATION_REMOVE_ITEM = "incall_notification_remove_item", e.NETWORK_INDICATOR_SHOWN = "network_indicator_shown"
        }(s || (t.NativeRtcEvents = s = {})), t.AppState = r,
        function(e) {
            e.FOREGROUND = "foreground", e.BACKGROUND = "background", e.ACTIVE = "active", e.RESIGN = "resign", e.SHUTDOWN = "shutdown", e.LAUNCH = "launch"
        }(r || (t.AppState = r = {})), t.AppCodename = i,
        function(e) {
            e.Archon = "archon", e.Zeratul = "zeratul"
        }(i || (t.AppCodename = i = {})), t.EventNames = o,
        function(e) {
            e.AppStartEventName = "messenger_desktop_client_appstart", e.UserInteractionEventName = "messenger_desktop_client_user_interaction", e.PerformanceEventName = "messenger_desktop_client_performance", e.HeartbeatEventName = "messenger_desktop_client_heartbeat"
        }(o || (t.EventNames = o = {}))
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
    var a, s = n(14),
        r = (a = n(1)) && a.__esModule ? a : {
            default: a
        };
    const i = (0, s.isProduction)() ? r.default.resolve(__dirname, "..") : r.default.resolve(__dirname, "..", "..", "..", "build");
    t.buildDir = i;
    const o = (0, s.isProduction)() ? r.default.resolve(__dirname, "..", "..", "intl") : r.default.resolve(__dirname, "..", "..", "..", "intl");
    t.intlDir = o;
    const S = __dirname;
    t.mainDir = S;
    const l = (0, s.isProduction)() ? r.default.resolve(i, "main") : r.default.resolve(__dirname, "..", "..", "bridge", "src");
    t.bridgeDir = l;
    const c = (0, s.isProduction)() ? i : r.default.resolve(__dirname, "..", "html");
    t.htmlDir = c;
    const _ = r.default.resolve(__dirname, "..");
    t.srcDir = _;
    const E = r.default.resolve(__dirname, "..", "..");
    t.rootDir = E;
    const A = (0, s.isProduction)() ? r.default.resolve(__dirname, "..", "..", "assets") : r.default.resolve(__dirname, "..", "..", "..", "assets");
    t.assetsDir = A
}, function(e, t, n) {
    "use strict";
    var a = n(7),
        s = !1;
    e.exports = function(e) {
        return s ? {
            stop: o
        } : (s = !0, "renderer" === process.type ? (window.addEventListener("error", r), window.addEventListener("unhandledrejection", i)) : (process.on("uncaughtException", t), process.on("unhandledRejection", n)), {
            stop: o
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
                    s = Object.getOwnPropertyDescriptor(a, "name");
                return s && s.writable || (e = new Error(e.message)), e.name = n, void t(e)
            }
            var r = new Error(JSON.stringify(e));
            r.name = "UnhandledRejection", t(r)
        }

        function r(e) {
            e.preventDefault(), t(e.error)
        }

        function i(e) {
            e.preventDefault(), n(e.reason)
        }

        function o() {
            s = !1, "renderer" === process.type ? (window.removeEventListener("error", r), window.removeEventListener("unhandledrejection", i)) : (process.removeListener("uncaughtException", t), process.removeListener("unhandledRejection", n))
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(8),
        s = {
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
        return e.level = "silly", e.forceStyles = Boolean(process.env.FORCE_STYLES), e.format = r[process.type] || r.browser, e;

        function e(t) {
            if ("renderer" !== process.type && "worker" !== process.type) {
                var n, s, S, l = e.forceStyles || (n = t.level, (s = "error" === n || "warn" === n ? process.stderr : process.stdout) && s.isTTY),
                    c = a.transform(t, [(S = e.format, function(e, t) {
                        return S !== r.browser ? e : ["color:" + o(t.level), "color:unset"].concat(e)
                    }), a.customFormatterFactory(e.format), l ? a.applyAnsiStyles : a.removeStyles, a.maxDepthFactory(10), a.toJSON]);
                i(t.level, c)
            } else {
                var _ = a.transform(t, [a.customFormatterFactory(e.format)]);
                i(t.level, _)
            }
        }
    };
    var r = {
        browser: "%c{h}:{i}:{s}.{ms}%c " + ("win32" === process.platform ? ">" : "›") + " {text}",
        renderer: "{h}:{i}:{s}.{ms} › {text}",
        worker: "{h}:{i}:{s}.{ms} › {text}"
    };

    function i(e, t) {
        s[e] ? s[e].apply(s.context, t) : s.log.apply(s.context, t)
    }

    function o(e) {
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
            return i(e, s, r)
        },
        removeStyles: function(e) {
            return i(e, (function() {
                return ""
            }))
        },
        transformStyles: i
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

    function s(e) {
        var t = e.replace(/color:\s*(\w+).*/, "$1").toLowerCase();
        return a[t] || ""
    }

    function r(e) {
        return e + a.unset
    }

    function i(e, t, n) {
        var a = 0;
        return e.reduce((function(e, s, r, i) {
            return a > 0 ? (a -= 1, e) : ("string" == typeof s && (s = s.replace(/%c/g, (function(e) {
                var n = i[r + (a += 1)];
                return n ? t(n, s) : e
            })), a > 0 && n && (s = n(s))), e.push(s), e)
        }), [])
    }
}, function(e, t, n) {
    "use strict";
    var a = n(15);

    function s(e, t) {
        return e.replace("{y}", String(t.getFullYear())).replace("{m}", i(t.getMonth() + 1)).replace("{d}", i(t.getDate())).replace("{h}", i(t.getHours())).replace("{i}", i(t.getMinutes())).replace("{s}", i(t.getSeconds())).replace("{ms}", i(t.getMilliseconds(), 3)).replace("{z}", r(t.getTimezoneOffset())).replace("{iso}", t.toISOString())
    }

    function r(e) {
        var t = Math.abs(e);
        return (e >= 0 ? "-" : "+") + i(Math.floor(t / 60)) + ":" + i(t % 60)
    }

    function i(e, t) {
        return t = t || 2, (new Array(t + 1).join("0") + e).substr(-t, t)
    }
    e.exports = {
        formatDate: s,
        formatTimeZone: r,
        pad: i,
        templateDate: function(e, t) {
            var n = e[0];
            if ("string" != typeof n) return e;
            return e[0] = s(n, t.date), e
        },
        templateVariables: function(e, t) {
            var n = e[0],
                a = t.variables;
            if ("string" != typeof n || !t.variables) return e;
            for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (n = n.replace("{" + s + "}", a[s]));
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
        s = n(1),
        r = n(6),
        i = n(8),
        o = n(28).FileRegistry,
        S = n(30);
    e.exports = function(e, t) {
        var n = S.getPathVariables(process.platform),
            o = t || l;
        return o.on("error", (function(e, t) {
                _("Can't write to " + t, e)
            })), c.archiveLog = function(e) {
                var t = e.toString(),
                    n = s.parse(t);
                try {
                    a.renameSync(t, s.join(n.dir, n.name + ".old" + n.ext))
                } catch (t) {
                    _("Could not rotate log", t);
                    var r = Math.round(c.maxSize / 4);
                    e.crop(Math.min(r, 262144))
                }
            }, c.fileName = function() {
                switch (process.type) {
                    case "renderer":
                        return "renderer.log";
                    case "worker":
                        return "worker.log";
                    default:
                        return "main.log"
                }
            }(), c.format = "[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}", c.getFile = E, c.level = "silly", c.maxSize = 1048576, c.resolvePath = function(e) {
                return s.join(e.libraryDefaultDir, e.fileName)
            }, c.sync = !0, c.writeOptions = {
                flag: "a",
                mode: 438,
                encoding: "utf8"
            },
            function() {
                var e = " is deprecated and will be removed in v5.",
                    t = " property" + e;

                function n() {
                    return E().path
                }
                Object.defineProperties(c, {
                    bytesWritten: {
                        get: r.deprecate((function() {
                            return E().bytesWritten
                        }), "bytesWritten" + t)
                    },
                    file: {
                        get: r.deprecate(n, "file" + t),
                        set: r.deprecate((function(e) {
                            c.resolvePath = function() {
                                return e
                            }
                        }), "file" + t)
                    },
                    fileSize: {
                        get: r.deprecate((function() {
                            return E().size
                        }), "file" + t)
                    }
                }), c.clear = r.deprecate((function() {
                    E().clear()
                }), "clear()" + e), c.findLogPath = r.deprecate(n, "findLogPath()" + e), c.init = r.deprecate((function() {}), "init()" + e)
            }(), c;

        function c(e) {
            var t = E(e);
            c.maxSize > 0 && t.size > c.maxSize && (c.archiveLog(t), t.reset());
            var n = i.transform(e, [i.removeStyles, i.customFormatterFactory(c.format), i.maxDepthFactory(10), i.toString]);
            t.writeLine(n)
        }

        function _(t, n) {
            var a = ["electron-log.transports.file: " + t];
            n && a.push(n), e.transports.console({
                data: a,
                date: new Date,
                level: "warn"
            })
        }

        function E(e) {
            var t = Object.assign({}, n, {
                    fileName: c.fileName
                }),
                a = c.resolvePath(t, e);
            return o.provide(a, c.writeOptions, !c.sync)
        }
    };
    var l = new o
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        s = n(3),
        r = n(13),
        i = n(1),
        o = n(6),
        S = Number(process.version.match(/^v(\d+\.\d+)/)[1].replace(/\.(\d)$/, ".0$1"));

    function l(e, t, n) {
        a.call(this), this.path = e, this.initialSize = void 0, this.bytesWritten = 0, this.writeAsync = Boolean(n), this.asyncWriteQueue = [], this.writeOptions = t || {
            flag: "a",
            mode: 438,
            encoding: "utf8"
        }, Object.defineProperty(this, "size", {
            get: this.getSize.bind(this)
        })
    }

    function c(e) {
        l.call(this, e)
    }

    function _() {
        a.call(this), this.store = {}, this.emitError = this.emitError.bind(this)
    }
    e.exports = {
        File: l,
        FileRegistry: _,
        NullFile: c
    }, o.inherits(l, a), l.prototype.clear = function() {
        try {
            return s.writeFileSync(this.path, "", {
                mode: this.writeOptions.mode,
                flag: "w"
            }), this.reset(), !0
        } catch (e) {
            return "ENOENT" === e.code || (this.emit("error", e, this), !1)
        }
    }, l.prototype.crop = function(e) {
        try {
            var t = (n = this.path, a = e || 4096, i = Buffer.alloc(a), o = s.statSync(n), S = Math.min(o.size, a), l = Math.max(0, o.size - a), c = s.openSync(n, "r"), _ = s.readSync(c, i, 0, S, l), s.closeSync(c), i.toString("utf8", 0, _));
            this.clear(), this.writeLine("[log cropped]" + r.EOL + t)
        } catch (e) {
            this.emit("error", new Error("Couldn't crop file " + this.path + ". " + e.message), this)
        }
        var n, a, i, o, S, l, c, _
    }, l.prototype.toString = function() {
        return this.path
    }, l.prototype.reset = function() {
        this.initialSize = void 0, this.bytesWritten = 0
    }, l.prototype.writeLine = function(e) {
        if (e += r.EOL, this.writeAsync) return this.asyncWriteQueue.push(e), void this.nextAsyncWrite();
        try {
            s.writeFileSync(this.path, e, this.writeOptions), this.increaseBytesWrittenCounter(e)
        } catch (e) {
            this.emit("error", new Error("Couldn't write to " + this.path + ". " + e.message), this)
        }
    }, l.prototype.getSize = function() {
        if (void 0 === this.initialSize) try {
            var e = s.statSync(this.path);
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
            s.writeFile(this.path, t, this.writeOptions, (function(n) {
                n ? e.emit("error", new Error("Couldn't write to " + e.path + ". " + n.message), this) : e.increaseBytesWrittenCounter(t), e.nextAsyncWrite()
            }))
        }
    }, o.inherits(c, l), c.prototype.clear = function() {}, c.prototype.crop = function() {}, c.prototype.writeLine = function() {}, c.prototype.getSize = function() {
        return 0
    }, c.prototype.isNull = function() {
        return !0
    }, o.inherits(_, a), _.prototype.provide = function(e, t, n) {
        var a;
        try {
            if (e = i.resolve(e), this.store[e]) return this.store[e];
            a = this.createFile(e, t, Boolean(n))
        } catch (t) {
            a = new c(e), this.emitError(t, a)
        }
        return a.on("error", this.emitError), this.store[e] = a, a
    }, _.prototype.createFile = function(e, t, n) {
        return this.testFileWriting(e), new l(e, t, n)
    }, _.prototype.emitError = function(e, t) {
        this.emit("error", e, t)
    }, _.prototype.testFileWriting = function(e) {
        ! function e(t) {
            if (S >= 10.12) return s.mkdirSync(t, {
                recursive: !0
            }), !0;
            try {
                return s.mkdirSync(t), !0
            } catch (n) {
                if ("ENOENT" === n.code) return e(i.dirname(t)) && e(t);
                try {
                    if (s.statSync(t).isDirectory()) return !0;
                    throw n
                } catch (e) {
                    throw e
                }
            }
        }(i.dirname(e)), s.writeFileSync(e, "", {
            flag: "a"
        })
    }
}, function(e, t) {
    e.exports = require("events")
}, function(e, t, n) {
    "use strict";
    var a = n(13),
        s = n(1),
        r = n(7),
        i = n(31);

    function o(e) {
        var t = r.getPath("appData");
        if (t) return t;
        var n = S();
        switch (e) {
            case "darwin":
                return s.join(n, "Library/Application Support");
            case "win32":
                return process.env.APPDATA || s.join(n, "AppData/Roaming");
            default:
                return process.env.XDG_CONFIG_HOME || s.join(n, ".config")
        }
    }

    function S() {
        return a.homedir ? a.homedir() : process.env.HOME
    }

    function l(e, t) {
        return "darwin" === e ? s.join(S(), "Library/Logs", t) : s.join(E(e, t), "logs")
    }

    function c(e) {
        return "darwin" === e ? s.join(S(), "Library/Logs", "{appName}") : s.join(o(e), "{appName}", "logs")
    }

    function _() {
        var e = r.getName(),
            t = r.getVersion();
        if (e && t) return {
            name: e,
            version: t
        };
        var n = i.readPackageJson();
        return e || (e = n.name), t || (t = n.version), {
            name: e,
            version: t
        }
    }

    function E(e, t) {
        return r.getPath("userData") || s.join(o(e), t)
    }
    e.exports = {
        getAppData: o,
        getLibraryDefaultDir: l,
        getLibraryTemplate: c,
        getNameAndVersion: _,
        getPathVariables: function(e) {
            var t = _(),
                n = t.name,
                s = t.version;
            return {
                appData: o(e),
                appName: n,
                appVersion: s,
                electronDefaultDir: r.getPath("logs"),
                home: S(),
                libraryDefaultDir: l(e, n),
                libraryTemplate: c(e),
                temp: r.getPath("temp") || a.tmpdir(),
                userData: E(e, n)
            }
        },
        getUserData: E
    }
}, function(e, t, n) {
    "use strict";
    var a = n(3),
        s = n(1);

    function r(e) {
        try {
            var t = i("package.json", e = s.join.apply(s, arguments));
            if (!t) return null;
            var n = JSON.parse(a.readFileSync(t, "utf8")),
                r = n.productName || n.name;
            if (!r || "electron" === r.toLowerCase()) return null;
            if (n.productName || n.name) return {
                name: r,
                version: n.version
            }
        } catch (e) {
            return null
        }
    }

    function i(e, t) {
        for (var n = t;;) {
            var r = s.parse(n),
                i = r.root,
                o = r.dir;
            if (a.existsSync(s.join(n, e))) return s.resolve(s.join(n, e));
            if (n === i) return null;
            n = o
        }
    }
    e.exports = {
        readPackageJson: function() {
            return r(n.c[n.s] && n.c[n.s].filename) || r(process.resourcesPath, "app.asar") || r(process.cwd()) || {
                name: null,
                version: null
            }
        },
        tryReadJsonAt: r
    }
}, function(e, t, n) {
    "use strict";
    var a = n(8),
        s = n(7),
        r = n(12);
    e.exports = function(e) {
        if (t.eventId = "__ELECTRON_LOG_IPC_" + e.logId + "__", t.level = !!e.isDev && "silly", s.isIpcChannelListened(t.eventId)) return function() {};
        return s.onIpc(t.eventId, (function(t, n) {
            n.date = new Date(n.date), r.runTransport(e.transports.console, n, e)
        })), s.loadRemoteModule("electron-log"), s.isElectron() ? t : null;

        function t(e) {
            var n = Object.assign({}, e, {
                data: a.transform(e, [a.removeStyles, a.maxDepthFactory(), a.toJSON])
            });
            s.sendIpc(t.eventId, n)
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(34),
        s = n(35),
        r = n(36),
        i = n(12),
        o = n(8);
    e.exports = function(e) {
        return t.client = {
            name: "electron-application"
        }, t.depth = 6, t.level = !1, t.requestOptions = {}, t.url = null, t;

        function t(n) {
            t.url && function(e, t, n) {
                var i = r.parse(e),
                    o = "https:" === i.protocol ? s : a,
                    S = JSON.stringify(n),
                    l = {
                        hostname: i.hostname,
                        port: i.port,
                        path: i.path,
                        method: "POST",
                        headers: {
                            "Content-Length": S.length,
                            "Content-Type": "application/json"
                        }
                    };
                Object.assign(l, t);
                var c = o.request(l);
                return c.write(S), c.end(), c
            }(t.url, t.requestOptions, {
                client: t.client,
                data: o.transform(n, [o.removeStyles, o.toJSON, o.maxDepthFactory(t.depth + 1)]),
                date: n.date.getTime(),
                level: n.level,
                variables: n.variables
            }).on("error", (function(n) {
                var a = {
                        data: ["electron-log.transports.remote: cannot send HTTP request to " + t.url, n],
                        date: new Date,
                        level: "warn"
                    },
                    s = [e.transports.console, e.transports.ipc, e.transports.file];
                i.runTransports(s, a, e)
            }))
        }
    }
}, function(e, t) {
    e.exports = require("http")
}, function(e, t) {
    e.exports = require("https")
}, function(e, t) {
    e.exports = require("url")
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var a, s = (a = n(11)) && a.__esModule ? a : {
            default: a
        },
        r = n(0),
        i = n(10),
        o = n(123),
        S = n(124);
    s.default.initializeProcessAsl(!1);
    const {
        getRemoteModules: l
    } = r.remote.require("./main"), c = l(), {
        DialogService: _,
        RtcService: E,
        WindowService: A,
        PerformanceService: u,
        GatekeeperService: T,
        SettingsService: d
    } = c, p = Object.freeze({
        injectRtcApi: e => {
            E.injectRtcApi(I(), e)
        },
        window: {
            showSelf() {
                A.showWindow(I())
            },
            hideSelf() {
                A.hideWindow(I())
            }
        },
        dialog: {
            rooms: {
                showIncoming: (e, t) => _.showRoomsIncomingCall(I(), e, t),
                dismiss() {
                    _.dismiss(I())
                },
                markStart() {
                    u.markEvent(i.UNAUTHENTICATED_USERID, i.PerformanceEvents.ROOMS_INCOMING_START)
                },
                markParticipantsLoaded() {
                    u.markEvent(i.UNAUTHENTICATED_USERID, i.PerformanceEvents.ROOMS_INCOMING_PARTICIPANTS_LOADED)
                }
            },
            incomingCall: {
                show: (e, t, n) => _.showIncomingCall(I(), e, t, n, e.length <= 1, !1),
                dismiss() {
                    _.dismiss(I())
                },
                markStart() {
                    u.markEvent(i.UNAUTHENTICATED_USERID, i.PerformanceEvents.INCOMING_CALL_START)
                },
                markParticipantsLoaded() {
                    u.markEvent(i.UNAUTHENTICATED_USERID, i.PerformanceEvents.INCOMING_CALL_PARTICIPANTS_LOADED)
                }
            },
            missedCall: {
                show: e => _.showMissedCall(I(), e),
                dismiss() {
                    _.dismiss(I())
                },
                markStart() {
                    u.markEvent(i.UNAUTHENTICATED_USERID, i.PerformanceEvents.MISSED_CALL_START)
                }
            }
        },
        getValueForGK(e) {
            const t = A.getUserIdForWindowKey(I());
            return !!t && T.getGKValue(t, e)
        },
        getMediaDeviceSettings() {
            const e = A.getUserIdForWindowKey(I());
            return e ? d.getUserSettings(e).rtcPreferences : null
        },
        setMediaDeviceSettings(e) {
            const t = A.getUserIdForWindowKey(I());
            if (!t) return;
            const n = d.getUserSettings(t);
            d.setUserSettings(t, {
                ...n,
                rtcPreferences: e
            }, {
                userInitiated: !0
            })
        },
        settings: {
            getUserSettings: () => {
                const e = A.getUserIdForWindowKey(I());
                return e ? d.getUserSettings(e) : (0, o.getDefaultUserSettings)()
            }
        }
    });
    let R;

    function I() {
        return R || (R = r.remote.getCurrentWindow().id), R
    }
    window.__archonBridge = p, window.navigator.mediaDevices.getDisplayMedia = async ({
        video: e
    }) => {
        let t = 1280,
            n = 720,
            a = 15;
        if (e && "boolean" != typeof e) {
            const {
                width: s,
                height: r,
                frameRate: i
            } = e;
            s && (t = ("number" != typeof s ? s.max : s) || t), r && (n = ("number" != typeof r ? r.max : r) || n), i && (a = ("number" != typeof i ? i.max : i) || a)
        }
        try {
            const e = await E.selectDisplayMedia(I());
            return await navigator.mediaDevices.getUserMedia({
                audio: !1,
                video: {
                    mandatory: {
                        chromeMediaSource: "desktop",
                        chromeMediaSourceId: e,
                        maxWidth: t,
                        maxHeight: n,
                        maxFrameRate: a
                    }
                }
            })
        } catch (e) {
            if (S.RtcScreenSelectionCanceledError.isRtcScreenSelectionCanceledError(e)) throw new DOMException("Permission denied", "NotAllowedError")
        }
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getDefaultUserSettings = function() {
        return {
            showAsAvailable: !0,
            emojiSkintone: null,
            notifications: {
                doNotDisturb: !1,
                showPreviews: !0,
                useSound: !0
            },
            themePreference: "os",
            uiScale: "normal",
            denseThreadList: !1,
            rtcPreferences: {
                videoInput: "default",
                audioInput: "default",
                audioOutput: "default",
                enableNoiseSuppression: !0
            },
            showSidebar: !1,
            useLocalServer: !0,
            betaOptIn: !1,
            defaultedOpenAtLoginEnabled: !1,
            openInAppOptOut: !1
        }
    }, t.getDefaultGlobalSettings = function(e) {
        return {
            enableWorkplaceLogin: !e,
            enableMultiProfile: !e,
            enableDebugMenus: !e,
            enablePerformanceInformation: !e,
            enableInternalFeedback: !e,
            enableVersionBadge: !e,
            wasOsmetaMessengerUser: !1,
            preferredLocaleKey: null,
            isInSystemTrayExperiment: !1,
            isInSampleExperiment: !1,
            inSampleTest: !1,
            enableSyncTrace: !1,
            enableSendTrace: !1,
            dispatchQueue: "folly",
            tracingStartup: !1,
            skipFetchStats: !1,
            enableOpenAtLogin: !0,
            enableSystemTray: !1,
            useSystemTray: !1,
            enableUpdateBadge: !1,
            enableLocalServer: !1
        }
    }, t.getFallbackSystemSettings = function(e) {
        return {
            themeVibrancy: "light",
            highContrast: !1,
            systemAccent: null,
            launchOnStartup: {
                windowsStartupTask: {
                    state: null,
                    error: null
                },
                electronLoginItemSettings: null,
                loginItemSettings: {
                    openAtLogin: e,
                    wasOpenedAtLogin: !0
                }
            },
            notificationSettings: null
        }
    }, t.DefaultDeviceId = void 0;
    t.DefaultDeviceId = "default"
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RtcScreenSelectionCanceledError = void 0;
    const a = "RtcScreenSelectionCanceledError";
    class s extends Error {
        static isRtcScreenSelectionCanceledError(e) {
            return e.name === a
        }
        constructor() {
            super(""), this.innerError = void 0, this.name = a, this.message = "User canceled screen/window selection."
        }
        toJSON() {
            return {
                name: this.name,
                message: this.message
            }
        }
    }
    t.RtcScreenSelectionCanceledError = s
}]);
//# sourceMappingURL=../sourcemaps/rtcPreload.js.map