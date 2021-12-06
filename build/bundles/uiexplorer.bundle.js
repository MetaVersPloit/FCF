! function(e) {
    function t(t) {
        for (var l, u, o = t[0], i = t[1], d = t[2], c = 0, f = []; c < o.length; c++) u = o[c], Object.prototype.hasOwnProperty.call(n, u) && n[u] && f.push(n[u][0]), n[u] = 0;
        for (l in i) Object.prototype.hasOwnProperty.call(i, l) && (e[l] = i[l]);
        for (s && s(t); f.length;) f.shift()();
        return r.push.apply(r, d || []), a()
    }

    function a() {
        for (var e, t = 0; t < r.length; t++) {
            for (var a = r[t], l = !0, o = 1; o < a.length; o++) {
                var i = a[o];
                0 !== n[i] && (l = !1)
            }
            l && (r.splice(t--, 1), e = u(u.s = a[0]))
        }
        return e
    }
    var l = {},
        n = {
            114: 0
        },
        r = [];

    function u(t) {
        if (l[t]) return l[t].exports;
        var a = l[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, u), a.l = !0, a.exports
    }
    u.e = function(e) {
        var t = [],
            a = n[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var l = new Promise((function(t, l) {
                    a = n[e] = [t, l]
                }));
                t.push(a[2] = l);
                var r, o = document.createElement("script");
                o.charset = "utf-8", o.timeout = 120, u.nc && o.setAttribute("nonce", u.nc), o.src = function(e) {
                    return u.p + "" + ({
                        35: "TitleBar",
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
                        85: "ContextMenu",
                        98: "ReactionPicker",
                        101: "RichMediaPicker"
                    } [e] || e) + ".bundle.js"
                }(e);
                var i = new Error;
                r = function(t) {
                    o.onerror = o.onload = null, clearTimeout(d);
                    var a = n[e];
                    if (0 !== a) {
                        if (a) {
                            var l = t && ("load" === t.type ? "missing" : t.type),
                                r = t && t.target && t.target.src;
                            i.message = "Loading chunk " + e + " failed.\n(" + l + ": " + r + ")", i.name = "ChunkLoadError", i.type = l, i.request = r, a[1](i)
                        }
                        n[e] = void 0
                    }
                };
                var d = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: o
                    })
                }), 12e4);
                o.onerror = o.onload = r, document.head.appendChild(o)
            } return Promise.all(t)
    }, u.m = e, u.c = l, u.d = function(e, t, a) {
        u.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, u.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, u.t = function(e, t) {
        if (1 & t && (e = u(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (u.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var l in e) u.d(a, l, function(t) {
                return e[t]
            }.bind(null, l));
        return a
    }, u.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return u.d(t, "a", t), t
    }, u.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, u.p = "bundles/", u.oe = function(e) {
        throw console.error(e), e
    };
    var o = window.webpackJsonp = window.webpackJsonp || [],
        i = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var d = 0; d < o.length; d++) t(o[d]);
    var s = i;
    r.push([1476, 0, 2, 1, 4, 5, 3, 6, 8, 7, 9, 15, 12, 13, 11, 14, 10, 21, 16, 19, 20, 22, 17, 81, 28, 24, 34, 37, 27, 33, 83, 82, 30, 25, 31, 26, 29, 32, 36]), a()
}({
    134: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RTCMessages = t.groupVideo = t.groupAudio = t.incomingEndedVideo = t.incomingEndedAudio = t.outgoingEndedVideo = t.outgoingEndedAudio = t.outgoingMissedVideo = t.outgoingMissedAudio = t.incomingMissedVideoButton = t.incomingMissedVideo = t.incomingMissedAudioButton = t.incomingMissedAudio = t.removedMessageAttachment = t.XMAAttachment3CTAOnly = t.XMAAttachment3CTA = t.XMAAttachment2CTA = t.XMAAttachment1CTA = t.XMAAttachment = t.fileAttachment = t.videoAttachment = t.stickerAttachment = t.gifAttachment = t.bogusImageAttachment = t.imageAttachment = t.audioAttachment = t.forwardedImageMessage = t.forwardedTextMessage = t.rtcCallMessage = t.replyToSenderHotlikeMessage = t.replyToSenderMessage = t.replyToReceiverMessage = t.urlMessage = t.mentionPersonBAndUrlMessage = t.mentionPersonBMessage = t.mentionPersonAMessage = t.emojiReactionMessage = t.errorMessage = t.sendingMessage = t.emojiTextMessage = t.fileMessage = t.emojiMessage = t.attachmentMessage = t.stickerMessage = t.adminViewerChangedColorsMessage = t.adminMessage = t.veryLongMessage = t.longMessage = t.spacingMessage = t.shortMessage = void 0;
        var l = a(8),
            n = a(30);
        const r = {
            ...n.EmptyMsysMessageModel,
            text: "This is a test string!",
            messageId: "shortM",
            offlineThreadingId: "shortMessage"
        };
        t.shortMessage = r;
        const u = {
            ...n.EmptyMsysMessageModel,
            text: "Hey     5 spaces there          10 spaces just now   and 3 :)",
            messageId: "spacingM",
            offlineThreadingId: "spacingMessage"
        };
        t.spacingMessage = u;
        const o = {
            ...n.EmptyMsysMessageModel,
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nPellentesque eu tincidunt tortor aliquam nulla. Interdum velit euismod in pellentesque massa placerat duis. Morbi non arcu risus quis varius quam quisque id.",
            messageId: "longMessage"
        };
        t.longMessage = o;
        const i = {
            ...n.EmptyMsysMessageModel,
            text: "thisisonelongcontinuousstringthatshowshowwebreaklongstringsblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah",
            messageId: "veryLongMessage"
        };
        t.veryLongMessage = i;
        const d = {
            ...n.EmptyMsysMessageModel,
            isAdminMessage: !0,
            text: "Admin message: this app is amazing, the best messaging app ever created for macOS and Windows",
            messageId: "adminMessage"
        };
        t.adminMessage = d;
        const s = {
            ...n.EmptyMsysMessageModel,
            isAdminMessage: !0,
            text: "You changed the chat colors.",
            messageId: "adminViewerChangedColorsM",
            offlineThreadingId: "adminViewerChangedColorsMessage"
        };
        t.adminViewerChangedColorsMessage = s;
        const c = {
            ...n.EmptyMsysMessageModel,
            stickerId: "1",
            messageId: "stickerM",
            offlineThreadingId: "stickerMessage"
        };
        t.stickerMessage = c;
        const f = {
            ...n.EmptyMsysMessageModel,
            hasAttachment: !0,
            messageId: "attachmentM",
            offlineThreadingId: "attachmentMessage"
        };
        t.attachmentMessage = f;
        const m = {
            ...n.EmptyMsysMessageModel,
            text: "🎷🐛  ❤️",
            messageId: "emojiM",
            offlineThreadingId: "emojiMessage"
        };
        t.emojiMessage = m;
        const p = {
            ...n.EmptyMsysMessageModel,
            messageId: "fileM",
            offlineThreadingId: "fileMessage",
            hasAttachment: !0
        };
        t.fileMessage = p;
        const g = {
            ...n.EmptyMsysMessageModel,
            text: "❤️ and some text",
            messageId: "emojiTextM",
            offlineThreadingId: "emojiTextMessage"
        };
        t.emojiTextMessage = g;
        const y = {
            ...n.EmptyMsysMessageModel,
            text: "this message is sending",
            sendStatusV2: l.MessageSendStatus.Sending,
            messageId: "sendingM",
            offlineThreadingId: "sendingMessage"
        };
        t.sendingMessage = y;
        const E = {
            ...n.EmptyMsysMessageModel,
            text: "this message had an error sending",
            sendStatusV2: l.MessageSendStatus.NonRetriableError,
            messageId: "errorM",
            offlineThreadingId: "errorMessage"
        };
        t.errorMessage = E;
        const h = {
            ...n.EmptyMsysMessageModel,
            text: "This emoji is not an official reaction!",
            messageId: "emojiReactionM",
            offlineThreadingId: "emojiReactionMessage"
        };
        t.emojiReactionMessage = h;
        const b = {
            ...n.EmptyMsysMessageModel,
            messageId: "messageSearchId",
            text: "Hey @Person A look at how I can mention you",
            mentionIds: "1234567890",
            mentionOffsets: "4",
            mentionLengths: "9"
        };
        t.mentionPersonAMessage = b;
        const M = {
            ...n.EmptyMsysMessageModel,
            messageId: "messageSearchId",
            text: "Oh cool! @Person B look at how I can spam mention @Person C @Person C @Person C!",
            mentionIds: "1234567890,1234567890,1234567890,1234567890",
            mentionOffsets: "9,50,60,70",
            mentionLengths: "9,9,9,9"
        };
        t.mentionPersonBMessage = M;
        const w = {
            ...n.EmptyMsysMessageModel,
            text: "Look @Person B,  I can also share a clickable link www.messenger.com with it being an attachment!",
            mentionIds: "1234567890",
            mentionOffsets: "5",
            mentionLengths: "9"
        };
        t.mentionPersonBAndUrlMessage = w;
        const v = {
            ...n.EmptyMsysMessageModel,
            text: "look how this shows up as a clickable link: www.facebook.com and this: https://www.seattletimes.com/life/fashion/seattle-shows-its-style-in-new-mohai-exhibit-fashion-function/. Nifty, right?"
        };
        t.urlMessage = v;
        const S = {
            ...n.EmptyMsysMessageModel,
            replySourceId: "0",
            replyMessageText: "Rock climbing after work today? 🧗‍♀️",
            text: "Let's do it!"
        };
        t.replyToReceiverMessage = S;
        const k = {
            ...n.EmptyMsysMessageModel,
            replySourceId: "0",
            replyMessageText: "Have a wonderful day yayayyayyayaayayayaya yayayayayayayayayaya",
            text: "You too!",
            replyToUserId: "X"
        };
        t.replyToSenderMessage = k;
        const T = {
            ...n.EmptyMsysMessageModel,
            replySourceId: "0",
            text: "Yay!",
            replyAttachmentId: 369239263222822,
            replyAttachmentType: 1,
            replyToUserId: "X"
        };
        t.replyToSenderHotlikeMessage = T;
        const P = {
            ...n.EmptyMsysMessageModel,
            hasAttachment: !0,
            offlineThreadingId: "rtcCallMessage",
            messageId: "rtcCallM"
        };
        t.rtcCallMessage = P;
        const _ = {
            ...n.EmptyMsysMessageModel,
            replySourceTypeV2: 3,
            name: "Jon",
            text: "Let's do it!",
            offlineThreadingId: "forwardedTextMessage"
        };
        t.forwardedTextMessage = _;
        const O = {
            ...n.EmptyMsysMessageModel,
            replySourceTypeV2: 3,
            hasAttachment: !0,
            messageId: "attachmentM",
            offlineThreadingId: "forwardedImageMessage"
        };
        t.forwardedImageMessage = O;
        const C = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.Audio,
            playableUrlInfo: {
                primaryUrl: "https://www.redringtones.com/wp-content/uploads/2016/10/game-of-thrones-ringtone.mp3",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.audioAttachment = C;
        const R = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.Image,
            attachmentFbid: "image",
            previewUrlInfo: {
                primaryUrl: "https://i.redd.it/21vjpnyyevl21.jpg",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewHeight: 700,
            previewWidth: 700
        };
        t.imageAttachment = R;
        const x = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.Image,
            previewUrlInfo: {
                primaryUrl: "httpredd.it/21vjpnyyevl21.jpg",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewHeight: 700,
            previewWidth: 700
        };
        t.bogusImageAttachment = x;
        const A = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.AnimatedImage,
            attachmentFbid: "gif",
            previewUrlInfo: {
                primaryUrl: "https://i.imgur.com/monDU.gif",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewHeight: 357,
            previewWidth: 500,
            attributionAppId: "374882289330575"
        };
        t.gifAttachment = A;
        const I = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.Sticker,
            playableUrlInfo: {
                primaryUrl: "http://a.webpurr.com/y9ML.webp",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewHeight: 240,
            previewWidth: 240
        };
        t.stickerAttachment = I;
        const j = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.Video,
            playableUrlInfo: {
                primaryUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewHeight: 528,
            previewWidth: 496
        };
        t.videoAttachment = j;
        const D = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.File,
            attachmentFbid: "file",
            attachmentIndex: 0,
            filename: "randomJson.json",
            filesize: "2930",
            playableUrlInfo: {
                primaryUrl: "https://pkgstore.datahub.io/datahq/1mb-test/1mb-test_json/data/ca5fd34861cc68b4f519b1c1e15c510e/1mb-test_json.json",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.fileAttachment = D;
        const U = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            previewUrlInfo: {
                primaryUrl: "https://i.redd.it/21vjpnyyevl21.jpg",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewHeight: 300,
            previewWidth: 300,
            titleText: "Facebook - Log In or Sign Up",
            actionUrl: "https://www.facebook.com/",
            descriptionText: "Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
            sourceText: "facebook.com"
        };
        t.XMAAttachment = U;
        const B = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            imageUrlInfo: {
                primaryUrl: "https://i.imgur.com/monDU.gif",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewUrlInfo: {
                primaryUrl: "https://i.redd.it/21vjpnyyevl21.jpg",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewUrlMimeType: "image/jpeg",
            playableUrlMimeType: "image/jpeg",
            previewHeight: 300,
            previewWidth: 300,
            titleText: "Testing XMA with 1 CTA",
            actionUrl: "https://www.facebook.com/",
            subtitleText: "Answer any of these questions so we can help you out! Check out this awesome XMA!",
            cta1Id: "59",
            cta1Title: "Start",
            cta1Type: l.AttachmentCTAType.XMA_POSTBACK
        };
        t.XMAAttachment1CTA = B;
        const N = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            imageUrlInfo: {
                primaryUrl: "https://i.imgur.com/monDU.gif",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewUrlInfo: {
                primaryUrl: "https://i.redd.it/21vjpnyyevl21.jpg",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewUrlMimeType: "image/jpeg",
            playableUrlMimeType: "image/jpeg",
            previewHeight: 300,
            previewWidth: 300,
            titleText: "Testing XMA with 2 CTAs",
            actionUrl: "https://www.facebook.com/",
            subtitleText: "Answer any of these questions so we can help you out! Check out this awesome XMA!",
            cta1Id: "59",
            cta1Title: "Start",
            cta1Type: l.AttachmentCTAType.XMA_POSTBACK,
            cta2Id: "60",
            cta2Title: "Ready",
            cta2Type: l.AttachmentCTAType.XMA_POSTBACK
        };
        t.XMAAttachment2CTA = N;
        const L = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            imageUrlInfo: {
                primaryUrl: "https://i.imgur.com/monDU.gif",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewUrlInfo: {
                primaryUrl: "https://i.redd.it/21vjpnyyevl21.jpg",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            previewUrlMimeType: "image/jpeg",
            playableUrlMimeType: "image/jpeg",
            previewHeight: 300,
            previewWidth: 300,
            titleText: "Testing XMA with 3 CTAs",
            actionUrl: "https://www.facebook.com/",
            subtitleText: "Answer any of these questions so we can help you out! Check out this awesome XMA!",
            cta1Id: "59",
            cta1Title: "Start",
            cta1Type: l.AttachmentCTAType.XMA_POSTBACK,
            cta2Id: "60",
            cta2Title: "Ready",
            cta2Type: l.AttachmentCTAType.XMA_POSTBACK,
            cta3Id: "61",
            cta3Title: "Go",
            cta3Type: l.AttachmentCTAType.XMA_POSTBACK
        };
        t.XMAAttachment3CTA = L;
        const F = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            cta1Id: "59",
            cta1Title: "Start",
            cta1Type: l.AttachmentCTAType.XMA_POSTBACK,
            cta2Id: "60",
            cta2Title: "Ready",
            cta2Type: l.AttachmentCTAType.XMA_POSTBACK,
            cta3Id: "61",
            cta3Title: "Go",
            cta3Type: l.AttachmentCTAType.XMA_POSTBACK
        };
        t.XMAAttachment3CTAOnly = F;
        const W = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            descriptionText: "Alice Smith removed a message"
        };
        t.removedMessageAttachment = W;
        const z = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_MISSED_AUDIO,
            titleText: "Missed Audio Call",
            sourceText: "2:00 PM",
            playableUrlInfo: {
                primaryUrl: "http://techslides.com/demos/sample-videos/small.mp4",
                fallbackUrl: "",
                expiryTimestamp: 0
            },
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=phone-missed&iconColor=staticWhite&circleColor=red",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.incomingMissedAudio = z;
        const V = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_MISSED_AUDIO,
            cta1Id: "1",
            cta1Type: l.AttachmentCTAType.XMA_RTC_MISSED_AUDIO,
            titleText: "Missed Audio Call",
            cta1Title: "Call Back",
            sourceText: "2:00 PM",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=phone-missed&iconColor=staticWhite&circleColor=red",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.incomingMissedAudioButton = V;
        const G = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_MISSED_VIDEO,
            titleText: "Missed Video Chat",
            sourceText: "2:00 PM",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=camcorder-missed&iconColor=staticWhite&circleColor=red",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.incomingMissedVideo = G;
        const H = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_MISSED_VIDEO,
            cta1Id: "1",
            cta1Type: l.AttachmentCTAType.XMA_RTC_MISSED_VIDEO,
            cta1Title: "Call Back",
            titleText: "Missed Video Chat",
            sourceText: "2:00 PM",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=camcorder-missed&iconColor=staticWhite&circleColor=red",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.incomingMissedVideoButton = H;
        const K = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_MISSED_AUDIO,
            titleText: "Audio Call",
            sourceText: "2:00 PM",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=phone-missed&iconColor=staticWhite&circleColor=black34",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.outgoingMissedAudio = K;
        const X = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_MISSED_VIDEO,
            titleText: "Video Chat",
            sourceText: "2:00 PM",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=camcorder-missed&iconColor=staticWhite&circleColor=black34",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.outgoingMissedVideo = X;
        const q = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_ENDED_AUDIO,
            titleText: "Audio Call",
            subtitleText: "6 secs",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=phone-outgoing&iconColor=staticWhite&circleColor=black34",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.outgoingEndedAudio = q;
        const J = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_ENDED_VIDEO,
            titleText: "Video Chat",
            subtitleText: "3 mins 45 secs",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=camcorder-outgoing&iconColor=staticWhite&circleColor=black34",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.outgoingEndedVideo = J;
        const Y = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_ENDED_AUDIO,
            titleText: "Audio Call",
            subtitleText: "6 secs",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=phone-incoming&iconColor=staticWhite&circleColor=black34",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.incomingEndedAudio = Y;
        const Q = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_ENDED_VIDEO,
            titleText: "Video Chat",
            subtitleText: "3 mins 45 secs",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=camcorder-incoming&iconColor=staticWhite&circleColor=black34",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.incomingEndedVideo = Q;
        const $ = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_AUDIO,
            titleText: "Group Audio Call",
            subtitleText: "Tap to join",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=phone&iconColor=staticWhite&circleColor=green",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.groupAudio = $;
        const Z = {
            ...n.EmptyMsysAttachmentModel,
            attachmentType: l.AttachmentType.XMA,
            defaultCtaType: l.AttachmentCTAType.XMA_RTC_VIDEO,
            titleText: "Group Video Chat",
            subtitleText: "Tap to join",
            faviconUrlInfo: {
                primaryUrl: "ls://circleicon?icon=camcorder&iconColor=staticWhite&circleColor=green",
                fallbackUrl: "",
                expiryTimestamp: 0
            }
        };
        t.groupVideo = Z;
        t.RTCMessages = ["You missed a call from Helen.", "You missed a video chat with Helen.", "Hellen missed your call.", "Hellen missed your video chat.", "You called Helen.", "Hellen called you.", "The video chat ended."]
    },
    1476: function(e, t, a) {
        a(106), e.exports = a(1477)
    },
    1477: function(e, t, a) {
        "use strict";
        var l = i(a(108)),
            n = i(a(29)),
            r = i(a(0)),
            u = i(a(529)),
            o = i(a(126));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function d() {
            return r.default.createElement(o.default, null, r.default.createElement(u.default, null))
        }(0, l.default)(() => {
            const e = document.getElementById("root");
            e && n.default.render(r.default.createElement(d, null), e)
        })
    },
    1478: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, f.useTheme)(),
                t = (0, f.useSetTheme)(),
                a = Object.values((0, r.getColorThemes)()),
                u = a.map(e => (0, n.getThemeLabel)(e.name));
            return o.default.createElement(c.default, {
                name: "themeSelection"
            }, o.default.createElement(s.default, {
                css: {
                    flexDirection: "row",
                    flex: 1,
                    borderRadius: 4,
                    fontSize: 12
                },
                direction: "horizontal"
            }, o.default.createElement(l.default, {
                items: u,
                initialSelectedIndex: u.indexOf((0, n.getThemeLabel)(e.name)),
                onSelectionChanged: (l, n) => {
                    return r = a[n].name, t(r, e.os);
                    var r
                }
            }), o.default.createElement(p, null), o.default.createElement(d.default, {
                "aria-label": "Switch to mac",
                telemetryName: "macThemeSwitch",
                onClick: () => t(e.name, "mac"),
                css: g("mac" === e.os, e)
            }, "Mac"), o.default.createElement(d.default, {
                "aria-label": "Switch to windows",
                telemetryName: "windowsThemeSwitch",
                onClick: () => t(e.name, "windows"),
                css: g("windows" === e.os, e)
            }, "Windows")))
        };
        var l = m(a(160)),
            n = a(596),
            r = a(165),
            u = m(a(1)),
            o = m(a(0)),
            i = m(a(2)),
            d = m(a(75)),
            s = m(a(33)),
            c = m(a(13)),
            f = a(6);

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0, u.default)(i.default)(e => ({
                width: 1,
                height: 16,
                marginLeft: 6,
                marginRight: 6,
                alignSelf: "center",
                backgroundColor: e.theme.semanticColors.bgLine
            })),
            g = (e, t) => ({
                padding: 4,
                backgroundColor: "transparent",
                fontWeight: e ? "bold" : "normal",
                textTransform: "uppercase",
                color: t.semanticColors.textPrimary
            })
    },
    1479: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l = qe(a(1480)),
            n = qe(a(1482)),
            r = qe(a(1483)),
            u = qe(a(1484)),
            o = qe(a(1486)),
            i = qe(a(1569)),
            d = qe(a(1572)),
            s = qe(a(1573)),
            c = qe(a(1575)),
            f = qe(a(1578)),
            m = qe(a(1626)),
            p = qe(a(1635)),
            g = qe(a(1636)),
            y = qe(a(1637)),
            E = qe(a(1638)),
            h = qe(a(1640)),
            b = qe(a(1641)),
            M = qe(a(0)),
            w = qe(a(1642)),
            v = qe(a(1643)),
            S = qe(a(1644)),
            k = qe(a(1646)),
            T = qe(a(1647)),
            P = qe(a(1648)),
            _ = qe(a(1649)),
            O = qe(a(1655)),
            C = qe(a(1658)),
            R = qe(a(1659)),
            x = qe(a(1721)),
            A = qe(a(1722)),
            I = qe(a(1724)),
            j = qe(a(1741)),
            D = qe(a(1744)),
            U = qe(a(1745)),
            B = qe(a(1746)),
            N = qe(a(1747)),
            L = qe(a(1761)),
            F = qe(a(1762)),
            W = qe(a(1763)),
            z = qe(a(1764)),
            V = qe(a(1765)),
            G = qe(a(1766)),
            H = qe(a(1767)),
            K = qe(a(1768)),
            X = qe(a(1769)),
            q = qe(a(1770)),
            J = qe(a(1771)),
            Y = qe(a(1772)),
            Q = qe(a(1773)),
            $ = qe(a(1774)),
            Z = qe(a(1775)),
            ee = qe(a(1776)),
            te = qe(a(1777)),
            ae = qe(a(1781)),
            le = qe(a(1783)),
            ne = qe(a(1785)),
            re = qe(a(1788)),
            ue = qe(a(1795)),
            oe = qe(a(1796)),
            ie = qe(a(1797)),
            de = qe(a(1798)),
            se = qe(a(1799)),
            ce = qe(a(322)),
            fe = qe(a(1800)),
            me = qe(a(1801)),
            pe = qe(a(1802)),
            ge = qe(a(1803)),
            ye = qe(a(1804)),
            Ee = qe(a(1809)),
            he = qe(a(1811)),
            be = qe(a(1812)),
            Me = qe(a(1813)),
            we = qe(a(1816)),
            ve = qe(a(1817)),
            Se = qe(a(1820)),
            ke = qe(a(1822)),
            Te = qe(a(1823)),
            Pe = qe(a(1824)),
            _e = qe(a(1827)),
            Oe = qe(a(1828)),
            Ce = qe(a(1830)),
            Re = qe(a(1839)),
            xe = qe(a(1840)),
            Ae = qe(a(1841)),
            Ie = qe(a(1842)),
            je = qe(a(1843)),
            De = qe(a(1844)),
            Ue = qe(a(1845)),
            Be = qe(a(1846)),
            Ne = qe(a(1847)),
            Le = qe(a(1848)),
            Fe = qe(a(1849)),
            We = qe(a(1850)),
            ze = qe(a(1851)),
            Ve = qe(a(1852)),
            Ge = qe(a(1853)),
            He = qe(a(1854)),
            Ke = qe(a(1855)),
            Xe = qe(a(1856));

        function qe(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Je = [{
            name: "Welcome",
            modules: [{
                name: "Getting Started",
                spec: null,
                example: M.default.createElement(F.default, null)
            }, {
                name: "React Native",
                spec: null,
                example: M.default.createElement(c.default, null)
            }]
        }, {
            name: "Basic",
            modules: [{
                name: "Typography",
                spec: "https://our.internmc.facebook.com/intern/px/p/qMmZ",
                todo: ["Line height and font height combinations do not center well"],
                example: M.default.createElement(Ve.default, null)
            }, {
                name: "Colors",
                spec: null,
                example: M.default.createElement(Ne.default, null)
            }, {
                name: "Icons",
                spec: "https://our.internmc.facebook.com/intern/assets/set/messenger_icons",
                example: M.default.createElement(J.default, null)
            }, {
                name: "Layer",
                spec: null,
                example: M.default.createElement(Y.default, null)
            }, {
                name: "Loading Dots",
                spec: null,
                example: M.default.createElement(Z.default, null)
            }, {
                name: "Loading Spinner",
                spec: null,
                example: M.default.createElement(ee.default, null)
            }, {
                name: "Loading Shimmer",
                spec: null,
                example: M.default.createElement(je.default, null)
            }, {
                name: "Spring",
                spec: null,
                example: M.default.createElement(p.default, null)
            }, {
                name: "Banner",
                spec: null,
                example: M.default.createElement(w.default, null)
            }, {
                name: "QP Banner",
                spec: "https://www.figma.com/file/Pj3BTqXoPAL8lRzBQhN4F2/INBOX-QPs",
                example: M.default.createElement(g.default, null)
            }, {
                name: "Hero",
                spec: null,
                example: M.default.createElement(q.default, null)
            }]
        }, {
            name: "Buttons",
            modules: [{
                name: "Rectangle Buttons",
                spec: "https://our.internmc.facebook.com/intern/px/p/qMkt",
                example: M.default.createElement(v.default, null)
            }, {
                name: "Round Buttons",
                spec: "https://our.internmc.facebook.com/intern/px/p/qMm7",
                example: M.default.createElement(S.default, null)
            }, {
                name: "Segmented Controls",
                spec: "https://our.internmc.facebook.com/intern/px/p/rZ7k/",
                task: 41449108,
                windowsVersion: !0,
                windowsVersionReady: !1,
                example: M.default.createElement(Ie.default, null)
            }, {
                name: "Links",
                spec: null,
                example: M.default.createElement($.default, null)
            }, {
                name: "Toggle",
                spec: "https://our.internmc.facebook.com/intern/px/p/zH21/",
                example: M.default.createElement(We.default, null)
            }]
        }, {
            name: "Input Controls",
            modules: [{
                name: "Text Input",
                spec: null,
                example: M.default.createElement(Be.default, null)
            }, {
                name: "Checkbox",
                spec: null,
                example: M.default.createElement(C.default, null)
            }, {
                name: "Radio Button",
                spec: "https://www.figma.com/file/9c7fpyG2CrZ1bBCkqY0XEa/macOS?node-id=397%3A0&viewport=-25%2C444%2C0.4281737804412842",
                example: M.default.createElement(ke.default, null)
            }, {
                name: "Composer",
                spec: "https://our.internmc.facebook.com/intern/px/p/qNkB",
                task: 41791655,
                example: M.default.createElement(R.default, null)
            }, {
                name: "Search Field",
                spec: "https://our.internmc.facebook.com/intern/px/p/rZ5T/",
                windowsVersion: !0,
                windowsVersionReady: !0,
                example: M.default.createElement(Re.default, null)
            }, {
                name: "Omnipicker",
                spec: null,
                example: M.default.createElement(Ue.default, null)
            }, {
                name: "Message Search",
                spec: null,
                example: M.default.createElement(ye.default, null)
            }, {
                name: "Dropdown",
                spec: "https://our.internmc.facebook.com/intern/px/p/zH21/",
                example: M.default.createElement(B.default, null)
            }, {
                name: "Emoji Picker",
                spec: null,
                example: M.default.createElement(N.default, null)
            }, {
                name: "Voice Clip Recorder",
                spec: null,
                example: M.default.createElement(Xe.default, null)
            }, {
                name: "Time Picker",
                spec: null,
                example: M.default.createElement(Fe.default, null)
            }, {
                name: "Date Picker",
                spec: null,
                example: M.default.createElement(I.default, null)
            }, {
                name: "DateTimePicker",
                spec: null,
                example: M.default.createElement(j.default, null)
            }]
        }, {
            name: "File Input",
            modules: [{
                name: "File Selector",
                spec: null,
                example: M.default.createElement(K.default, null)
            }, {
                name: "Drag & Drop",
                spec: null,
                example: M.default.createElement(H.default, null)
            }]
        }, {
            name: "Message Bubbles",
            modules: [{
                name: "Message Types",
                spec: null,
                example: M.default.createElement(re.default, null)
            }, {
                name: "XMAs",
                spec: null,
                example: M.default.createElement(o.default, null)
            }, {
                name: "Typing Indicators",
                spec: null,
                example: M.default.createElement(pe.default, null)
            }, {
                name: "Reactions",
                spec: null,
                example: M.default.createElement(ce.default, null)
            }, {
                name: "Read Receipts",
                spec: null,
                example: M.default.createElement(fe.default, null)
            }, {
                name: "Delivery Status",
                spec: null,
                example: M.default.createElement(ue.default, null)
            }, {
                name: "P2P",
                spec: null,
                example: M.default.createElement(de.default, null)
            }, {
                name: "Group",
                spec: null,
                example: M.default.createElement(oe.default, null)
            }, {
                name: "Thread Themes",
                spec: null,
                example: M.default.createElement(me.default, null)
            }, {
                name: "Reply Context",
                spec: null,
                example: M.default.createElement(b.default, null)
            }, {
                name: "Reaction Picker",
                spec: null,
                example: M.default.createElement(Te.default, null)
            }, {
                name: "File Downloads",
                spec: null,
                example: M.default.createElement(U.default, null)
            }, {
                name: "Quick Replies",
                spec: null,
                example: M.default.createElement(s.default, null)
            }, {
                name: "Icebreaker",
                spec: null,
                example: M.default.createElement(l.default, null)
            }, {
                name: "Polls",
                spec: null,
                example: M.default.createElement(be.default, null)
            }, {
                name: "XMA Icon",
                spec: null,
                example: M.default.createElement(ge.default, null)
            }, {
                name: "XMA Image",
                spec: null,
                example: M.default.createElement(h.default, null)
            }]
        }, {
            name: "RTC",
            modules: [{
                name: "XMAs & Messages",
                spec: null,
                example: M.default.createElement(se.default, null)
            }, {
                name: "Grouped XMAs",
                spec: null,
                example: M.default.createElement(ie.default, null)
            }, {
                name: "Notification Pill",
                spec: null,
                example: M.default.createElement(A.default, null)
            }, {
                name: "Rooms",
                spec: null,
                example: M.default.createElement(_e.default, null)
            }]
        }, {
            name: "Lists",
            modules: [{
                name: "Profile Photo",
                spec: "https://our.internmc.facebook.com/intern/px/p/qMqB",
                example: M.default.createElement(Se.default, null)
            }, {
                name: "Profile Photo Recently Active",
                spec: null,
                example: M.default.createElement(d.default, null)
            }, {
                name: "Room POGs",
                spec: null,
                example: M.default.createElement(Pe.default, null)
            }, {
                name: "Chat Cells",
                spec: "https://our.internmc.facebook.com/intern/px/p/qMhW/",
                example: M.default.createElement(_.default, null)
            }, {
                name: "Participant Cells",
                spec: "https://our.internmc.facebook.com/intern/px/p/xLm2",
                example: M.default.createElement(he.default, null)
            }, {
                name: "Search Result Cells",
                spec: null,
                example: M.default.createElement(xe.default, null)
            }, {
                name: "Section Headers",
                todo: ["Action button pressed state"],
                spec: "https://our.internmc.facebook.com/intern/px/p/qMrl/",
                example: M.default.createElement(Ae.default, null)
            }, {
                name: "Chat Header",
                spec: null,
                todo: ["Context menus for overflow items T41731165"],
                example: M.default.createElement(O.default, null)
            }, {
                name: "Autoscroll",
                spec: null,
                example: M.default.createElement(Ce.default, null)
            }, {
                name: "Photo Grid",
                spec: null,
                example: M.default.createElement(m.default, null)
            }, {
                name: "Inbox Tray",
                spec: null,
                example: M.default.createElement(Oe.default, null)
            }]
        }, {
            name: "Dialogs",
            modules: [{
                name: "Incoming Call Dialog",
                spec: null,
                example: M.default.createElement(k.default, null)
            }, {
                name: "Missed Call Dialog",
                spec: null,
                example: M.default.createElement(T.default, null)
            }, {
                name: "Rooms Incoming Dialog",
                spec: null,
                example: M.default.createElement(P.default, null)
            }, {
                name: "Post Call Feedback",
                spec: null,
                example: M.default.createElement(ve.default, null)
            }]
        }, {
            name: "Utilities",
            modules: [{
                name: "Focus Zone",
                spec: null,
                example: M.default.createElement(X.default, null),
                todo: ["Nested focus zones", "Unmounting the active element will park focus on <body>", "Clicking and then moving does not highlight (:focus-visible heuristic does not apply)", "Arrows should optionally wrap to the first/last element"]
            }, {
                name: "Detail Header",
                spec: null,
                example: M.default.createElement(ne.default, null)
            }, {
                name: "Window Params",
                spec: null,
                example: M.default.createElement(G.default, null)
            }, {
                name: "Error Boundary",
                spec: null,
                example: M.default.createElement(L.default, null)
            }, {
                name: "Keyboard Shortcuts",
                spec: null,
                example: M.default.createElement(W.default, null)
            }, {
                name: "Native Context Menu",
                spec: null,
                example: M.default.createElement(y.default, null)
            }, {
                name: "MessageBoxExample",
                spec: null,
                example: M.default.createElement(z.default, null)
            }, {
                name: "Notifications",
                spec: null,
                example: M.default.createElement(V.default, null)
            }, {
                name: "Version Badge",
                spec: null,
                example: M.default.createElement(Ke.default, null)
            }, {
                name: "Update Badge",
                spec: null,
                example: M.default.createElement(Ge.default, null)
            }, {
                name: "Context Menu",
                spec: null,
                windowsVersion: !0,
                windowsVersionReady: !0,
                example: M.default.createElement(x.default, null)
            }, {
                name: "Tooltips",
                spec: null,
                windowsVersion: !0,
                windowsVersionReady: !0,
                example: M.default.createElement(ze.default, null)
            }, {
                name: "Popovers",
                spec: null,
                example: M.default.createElement(Me.default, null)
            }, {
                name: "Logging",
                spec: null,
                example: M.default.createElement(te.default, null)
            }, {
                name: "Star Rating",
                spec: null,
                example: M.default.createElement(De.default, null)
            }, {
                name: "Window Portals",
                spec: null,
                example: M.default.createElement(we.default, null)
            }, {
                name: "Layout Components",
                spec: null,
                example: M.default.createElement(Q.default, null)
            }, {
                name: "Interstitial Row",
                spec: null,
                example: M.default.createElement(r.default, null)
            }]
        }, {
            name: "Login Screen",
            modules: [{
                name: "Base Login Form",
                spec: null,
                example: M.default.createElement(ae.default, null)
            }, {
                name: "Messenger Credentials Form",
                spec: "https://our.internmc.facebook.com/intern/px/p/pwSF/",
                example: M.default.createElement(le.default, null)
            }, {
                name: "Two Factor",
                spec: null,
                example: M.default.createElement(E.default, null)
            }, {
                name: "Single Sign On",
                spec: null,
                example: M.default.createElement(u.default, null)
            }]
        }, {
            name: "Modals",
            modules: [{
                name: "OSMeta Welcome Modal",
                spec: "https://our.internmc.facebook.com/intern/px/p/LDMJ/",
                example: M.default.createElement(Ee.default, null)
            }, {
                name: "Feedback Modal",
                spec: "https://our.internmc.facebook.com/intern/px/p/LDMJ/",
                example: M.default.createElement(i.default, null)
            }, {
                name: "Reactions Modal",
                spec: "https://our.internmc.facebook.com/intern/px/p/D0QR/",
                example: M.default.createElement(f.default, null)
            }, {
                name: "DnD Modal",
                spec: "https://fburl.com/2zjlbb47",
                example: M.default.createElement(D.default, null)
            }, {
                name: "Custom User Status",
                spec: "https://fburl.com/0gwaftht",
                example: M.default.createElement(He.default, null)
            }]
        }, {
            name: "Message List",
            modules: [{
                name: "Thread Null State",
                spec: null,
                example: M.default.createElement(Le.default, null)
            }]
        }, {
            name: "Infra",
            modules: [{
                name: "CPUID",
                spec: null,
                example: M.default.createElement(n.default, null)
            }]
        }];
        t.default = Je
    },
    1480: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = [{
                    ...d.EmptyMsysThreadNullstateCTAModel,
                    title: "Is anyone available to chat?"
                }, {
                    ...d.EmptyMsysThreadNullstateCTAModel,
                    title: "I have a question. Can you help?"
                }, {
                    ...d.EmptyMsysThreadNullstateCTAModel,
                    title: "Get started"
                }],
                t = e => ({
                    ...d.EmptyMsysThreadNullstateDetailsModel,
                    privacyText: "When you tap Get Started, ARCHON will see your public profile info.",
                    ctas: e
                });
            return u.default.createElement(u.default.Fragment, null, u.default.createElement(r.Provider, {
                store: (0, i.getExampleStore)()
            }, u.default.createElement(c, null, u.default.createElement(f, null, u.default.createElement(l.default, {
                nullstate: t(e)
            }))), u.default.createElement(m, null), u.default.createElement(c, null, u.default.createElement(f, null, u.default.createElement(l.default, {
                nullstate: t(e.slice(1))
            }))), u.default.createElement(m, null), u.default.createElement(c, null, u.default.createElement(f, null, u.default.createElement(l.default, {
                nullstate: t(e.slice(2))
            })))))
        };
        var l = s(a(627)),
            n = s(a(1)),
            r = a(11),
            u = s(a(0)),
            o = s(a(2)),
            i = a(25),
            d = a(30);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(o.default)(e => ({
                height: 250,
                width: "100%",
                backgroundColor: e.theme.colors.base30
            })),
            f = (0, n.default)(o.default)(e => ({
                position: "absolute",
                bottom: 0,
                width: "100%"
            })),
            m = (0, n.default)(o.default)({
                height: 20
            })
    },
    1482: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(""), a = async () => {
                let e;
                try {
                    e = await n.default.msys.getCameraInfo()
                } catch (t) {
                    e = t
                }
                const a = n.default.asl;
                await a.incrementState(l.AslState.TestState, 1), await a.incrementStat(l.AslStat.TestStat, 1), await a.fetchState(l.AslState.TestState) > 5 && await a.latchStatesToStats(new Map([
                    [l.AslState.TestState, l.AslStat.TestStat]
                ]));
                const r = await a.fetchNonZeroStats(),
                    u = new Map;
                for (const [e, t] of r) u.set(l.AslStat[e], t);
                const o = {
                    build: await a.fetchState(l.AslState.BuildNumber),
                    state: {
                        name: l.AslState[l.AslState.TestState],
                        value: await a.fetchState(l.AslState.TestState)
                    },
                    stats: [...u],
                    cpuid: await n.default.systemInfo.getCPUID(),
                    machineInfo: await n.default.diagnostics.getMachineMetrics(),
                    cameraInfo: e
                };
                t(JSON.stringify(o, null, 2))
            };
            return (0, r.useEffect)(() => {
                a()
            }, []), r.default.createElement(u.default, null, r.default.createElement(i.default, {
                use: "body",
                wrapText: !0,
                css: {
                    display: "block"
                }
            }, r.default.createElement(o.default, {
                onClick: () => a()
            }, "Click here to requery...")), r.default.createElement("pre", {
                style: c
            }, e))
        };
        var l = a(67),
            n = s(a(9)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = s(a(2)),
            o = s(a(116)),
            i = s(a(4));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = {
            backgroundColor: "#100030",
            color: "#C0C0CC",
            fontFamily: "IBMVGA8, SF Mono, Monaco, Menlo, Consolas, monospace"
        }
    },
    1483: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, d.useTheme)();
            return (o.default.createElement(o.default.Fragment, null, o.default.createElement(c, null, o.default.createElement(l.default, {
                title: r.default._("Invite With a Link", null, {
                    hk: "3yFML5"
                }),
                subtitle: r.default._("Video chat with anyone just by sending a link.", null, {
                    hk: "nkweI"
                }),
                icon: n.default,
                style: {
                    marginTop: "24px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: e.colors.red,
                    width: "250px"
                }
            }))))
        };
        var l = s(a(248)),
            n = s(a(244)),
            r = s(a(5)),
            u = s(a(1)),
            o = s(a(0)),
            i = s(a(2)),
            d = a(6);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, u.default)(i.default)({
            flexDirection: "row"
        })
    },
    1484: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(o.default, null, u.default.createElement(d, null, u.default.createElement(r.default, {
                ssoState: l.default.Ready,
                isAuthenticating: !1,
                isWaitingAuthToJoinRoom: !1,
                initiateSso: () => {},
                onLogin: () => {},
                email: "example@fb.com",
                onUseCredentials: () => {},
                canGoForward: !1,
                allowedJoinVideoChatLink: !1
            })))
        };
        var l = i(a(192)),
            n = i(a(1)),
            r = i(a(1485)),
            u = i(a(0)),
            o = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(o.default)(e => ({
            width: 460,
            height: 660,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: e.theme.colors.base80
        }))
    },
    1485: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            const t = e.ssoState == l.default.Authenticating ? n.default._("Signing in...", null, {
                    hk: "1aQPgq"
                }).toString() : n.default._("Log In With Facebook", null, {
                    hk: "qbvAa"
                }).toString(),
                a = n.default._("Log in with phone or email", null, {
                    hk: "3ORBx1"
                }).toString(),
                r = e.ssoState === l.default.Ready,
                d = n.default._("Welcome to Messenger", null, {
                    hk: "Zad0s"
                }),
                c = n.default._("Sign in to Join Room", null, {
                    hk: "QQKl1"
                }),
                f = e.isWaitingAuthToJoinRoom && e.allowedJoinVideoChatLink ? c : d,
                m = n.default._("The simple way to text, call and video chat right from your desktop.", null, {
                    hk: "1MS70o"
                });
            return i.default.createElement(o.Container, null, i.default.createElement(o.NavigationButtons, {
                disableForward: !e.canGoForward,
                disableBack: !0,
                onForward: e.onUseCredentials
            }), i.default.createElement(o.Header, {
                logo: s.default,
                title: f,
                subtitle: m
            }), i.default.createElement(o.FooterContainer, null, i.default.createElement(p, null, i.default.createElement(g, null, i.default.createElement(o.PrimaryButton, {
                "aria-label": t,
                telemetryName: "signInWithFacebookButton",
                "data-automation-id": "signInWithFacebook",
                onClick: e.initiateSso,
                caption: t,
                disabled: !r
            })), i.default.createElement(u.default, {
                "aria-label": a,
                size: u.RectangleButtonSize.Small,
                use: u.RectangleButtonUse.Transparent,
                caption: a,
                telemetryName: "signInWithFacebookButton",
                onClick: e.onUseCredentials,
                silentPressedState: !0,
                textUse: "body"
            }))))
        };
        var l = m(a(192)),
            n = m(a(5)),
            r = m(a(1)),
            u = f(a(16)),
            o = f(a(198)),
            i = m(a(0)),
            d = m(a(2)),
            s = m(a(119));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = c();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0, r.default)(d.default)({
                alignItems: "center",
                justifyContent: "center",
                marginTop: 22,
                marginLeft: 8,
                marginBottom: "auto"
            }),
            g = (0, r.default)(d.default)({
                margin: 24,
                marginBottom: 18
            })
    },
    1486: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return o.default.createElement(u.Provider, {
                store: (0, r.getExampleStore)()
            }, o.default.createElement(i.default, null, o.default.createElement(l.default, {
                attachment: d.EmptyMsysAttachmentModel,
                title: "Unsupported attachment",
                description: "Click to open in browser",
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0
            }), o.default.createElement(l.default, {
                attachment: n.XMAAttachment,
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0
            }), o.default.createElement(l.default, {
                attachment: n.XMAAttachment,
                imageUrl: n.XMAAttachment.playableUrlInfo.primaryUrl || n.XMAAttachment.previewUrlInfo.primaryUrl || n.XMAAttachment.imageUrlInfo.primaryUrl,
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0
            }), o.default.createElement(l.default, {
                attachment: n.XMAAttachment1CTA,
                imageUrl: n.XMAAttachment1CTA.playableUrlInfo.primaryUrl || n.XMAAttachment1CTA.previewUrlInfo.primaryUrl || n.XMAAttachment1CTA.imageUrlInfo.primaryUrl,
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0
            }), o.default.createElement(l.default, {
                attachment: n.XMAAttachment2CTA,
                imageUrl: n.XMAAttachment2CTA.playableUrlInfo.primaryUrl || n.XMAAttachment2CTA.previewUrlInfo.primaryUrl || n.XMAAttachment2CTA.imageUrlInfo.primaryUrl,
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0
            }), o.default.createElement(l.default, {
                attachment: n.XMAAttachment3CTA,
                imageUrl: n.XMAAttachment3CTA.playableUrlInfo.primaryUrl || n.XMAAttachment3CTA.previewUrlInfo.primaryUrl || n.XMAAttachment3CTA.imageUrlInfo.primaryUrl,
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0
            }), o.default.createElement(l.default, {
                attachment: n.XMAAttachment3CTAOnly,
                imageUrl: n.XMAAttachment3CTAOnly.playableUrlInfo.primaryUrl || n.XMAAttachment3CTAOnly.previewUrlInfo.primaryUrl || n.XMAAttachment3CTAOnly.imageUrlInfo.primaryUrl,
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0
            })))
        };
        var l = s(a(531)),
            n = a(134),
            r = a(25),
            u = a(11),
            o = s(a(0)),
            i = s(a(2)),
            d = a(30);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1569: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(!1);
            return (r.default.createElement(u.default, null, r.default.createElement(i.default, {
                name: "osmetaWelcomeModalExample"
            }), r.default.createElement(o.default, {
                "aria-label": "showFeedbackModalExampleButton",
                telemetryName: "showFeedbackModalExampleButton",
                caption: "Show Feedback Modal",
                onClick: () => {
                    t(!0)
                }
            }), e && r.default.createElement(l.FeedbackModalBase, {
                onHideModal: () => t(!1),
                onSubmitFeedback: (e, t) => n.default.platform.showMessageBox({
                    title: "Feedback submitted",
                    message: `Star rating: ${e}, feedback text: ${t}`
                })
            })))
        };
        var l = a(629),
            n = s(a(9)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = s(a(2)),
            o = s(a(16)),
            i = s(a(13));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1572: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = e => {
                const t = [];
                for (let a = 0; a < 6; a++) {
                    t[a] = [];
                    for (let r = 0; r < 10; r++) t[a].push(o.default.createElement(i.default, {
                        css: {
                            padding: "5px 10px"
                        },
                        key: a
                    }, o.default.createElement(l.default, {
                        profilePictureUrl: s.default,
                        size: e,
                        presence: n.PresenceType.Offline,
                        lastActiveTimestampMs: Date.now() - 60 * (10 * a + r) * 1e3
                    })))
                }
                return t
            };
            return (o.default.createElement(o.default.Fragment, null, o.default.createElement(u.Provider, {
                store: (0, d.getExampleStore)()
            }, o.default.createElement(i.default, null, e("large").map((e, t) => o.default.createElement(f, {
                key: t
            }, e))), o.default.createElement(i.default, null, e("small").map((e, t) => o.default.createElement(f, {
                key: t
            }, e))))))
        };
        var l = c(a(38)),
            n = a(8),
            r = c(a(1)),
            u = a(11),
            o = c(a(0)),
            i = c(a(2)),
            d = a(25),
            s = c(a(43));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, r.default)(i.default)({
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10
        })
    },
    1573: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = [{
                ...o.EmptyMsysQuickReplyModel,
                title: "QR #1"
            }, {
                ...o.EmptyMsysQuickReplyModel,
                title: "quick reply"
            }, {
                ...o.EmptyMsysQuickReplyModel,
                title: "Another quick reply"
            }, {
                ...o.EmptyMsysQuickReplyModel,
                title: "😡"
            }, {
                ...o.EmptyMsysQuickReplyModel,
                title: "😡 QR"
            }, {
                ...o.EmptyMsysQuickReplyModel,
                title: "reply reply reply"
            }];
            return (r.default.createElement(r.default.Fragment, null, r.default.createElement(d, null, r.default.createElement(l.default, {
                quickReplies: e
            })), r.default.createElement(s, null), r.default.createElement(d, null, r.default.createElement(l.default, {
                quickReplies: e.slice(3)
            }))))
        };
        var l = i(a(261)),
            n = i(a(1)),
            r = i(a(0)),
            u = i(a(2)),
            o = a(30);

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(u.default)(e => ({
                height: 100,
                width: "100%",
                backgroundColor: e.theme.colors.base30
            })),
            s = (0, n.default)(u.default)({
                height: 20
            })
    },
    1575: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return o.default.createElement(i.default, null, o.default.createElement(s.default, {
                use: "body-bold",
                wrapText: !0
            }, "You should not be here! It is much faster to launch the react-native UI Explorer via"), o.default.createElement(s.default, {
                use: "body",
                wrapText: !0,
                style: {
                    marginTop: 10
                }
            }, "- yarn startrnuie"), o.default.createElement(s.default, {
                use: "body",
                wrapText: !0,
                style: {
                    marginTop: 5
                }
            }, "- From the Window menu 'Open RN UI Explorer'"), o.default.createElement(m, null), o.default.createElement(s.default, {
                use: "body",
                wrapText: !0,
                style: {
                    marginTop: 50
                }
            }, "Anyway, to run this example, start Metro bundler in your terminal:"), o.default.createElement(s.default, {
                use: "body",
                code: !0,
                wrapText: !0,
                style: {
                    marginTop: 10
                }
            }, "$ cd fbsource/xplat/archon/packages/rn && yarn start"), o.default.createElement(m, null), o.default.createElement(d.default, {
                "aria-label": "Launch React Native UI Explorer",
                use: d.RectangleButtonUse.Primary,
                telemetryName: "provideFeedbackButton",
                onClick: p,
                caption: "Launch React Native UI Explorer",
                size: d.RectangleButtonSize.Medium
            }))
        };
        var l = a(1576),
            n = a(1577),
            r = f(a(9)),
            u = f(a(1)),
            o = f(a(0)),
            i = f(a(2)),
            d = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(16)),
            s = f(a(4));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, u.default)(i.default)({
            height: 10
        });
        async function p() {
            const e = await r.default.intl.getCurrentLocale();
            r.default.msys.showReactNativeWindow("UIExplorer", {
                accessToken: l.UIExplorerDefaultAccessToken,
                gatekeepers: null,
                localeKey: e.localeKey,
                ttrc: {
                    markerId: n.QuickLogIdentifiersReactNativeTtrc.SHARED_RN_TTRC,
                    triggerEventOrigin: "UIExplorerExample",
                    instanceKey: (0, n.createInstanceKey)(),
                    startTimestampElectron: performance.timeOrigin + performance.now()
                },
                theme: "dark"
            })
        }
    },
    1576: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.UIExplorerDefaultAccessToken = void 0;
        t.UIExplorerDefaultAccessToken = ""
    },
    1577: function(e, t, a) {
        "use strict";
        let l, n, r;
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createInstanceKey = function() {
                return Math.round(2e9 * Math.random())
            }, t.QuickLogIdentifiersRtcPerf = t.QuickLogIdentifiersZeratul = t.QuickLogIdentifiersReactNativeTtrc = void 0, t.QuickLogIdentifiersReactNativeTtrc = l,
            function(e) {
                e[e.SHARED_RN_TTRC = 51904516] = "SHARED_RN_TTRC"
            }(l || (t.QuickLogIdentifiersReactNativeTtrc = l = {})), t.QuickLogIdentifiersZeratul = n,
            function(e) {
                e[e.APP_START_TO_APP_QUIT = 269228286] = "APP_START_TO_APP_QUIT", e[e.APP_START_TO_CHAT_READY = 269234628] = "APP_START_TO_CHAT_READY", e[e.APP_START_TO_LOGIN_RENDERED = 269228080] = "APP_START_TO_LOGIN_RENDERED", e[e.OPEN_THREAD = 269230719] = "OPEN_THREAD", e[e.APP_START_TO_RTC_READY = 269233502] = "APP_START_TO_RTC_READY", e[e.SSO_INTERSTITIAL_SHOWN_TO_INTERSTITIAL_COMPLETE = 269237954] = "SSO_INTERSTITIAL_SHOWN_TO_INTERSTITIAL_COMPLETE", e[e.SSO_LOGIN_STARTED_TO_CHAT_READY = 269228728] = "SSO_LOGIN_STARTED_TO_CHAT_READY", e[e.LOGIN_TO_CHAT_READY = 269224039] = "LOGIN_TO_CHAT_READY", e[e.OPEN_MEDIA_GALLERY = 269231179] = "OPEN_MEDIA_GALLERY", e[e.APP_START_TO_ROOMS_TRAY_READY = 269232157] = "APP_START_TO_ROOMS_TRAY_READY", e[e.APP_START_TO_SSO_READY = 269235598] = "APP_START_TO_SSO_READY", e[e.SSO_LOGIN_STARTED_TO_RTC_READY = 269231738] = "SSO_LOGIN_STARTED_TO_RTC_READY", e[e.LOGIN_TO_RTC_READY = 269223202] = "LOGIN_TO_RTC_READY", e[e.SSO_LOGIN_STARTED_TO_ROOMS_TRAY_READY = 269237261] = "SSO_LOGIN_STARTED_TO_ROOMS_TRAY_READY", e[e.LOGIN_TO_ROOMS_TRAY_READY = 269230988] = "LOGIN_TO_ROOMS_TRAY_READY", e[e.RTC_OUTGOING_CALL = 269232763] = "RTC_OUTGOING_CALL", e[e.INCOMING_CALL_DIALOG_START_TO_INCOMING_CALL_DIALOG_READY = 269237735] = "INCOMING_CALL_DIALOG_START_TO_INCOMING_CALL_DIALOG_READY", e[e.MISSED_CALL_DIALOG_START_TO_MISSED_CALL_DIALOG_READY = 269238174] = "MISSED_CALL_DIALOG_START_TO_MISSED_CALL_DIALOG_READY", e[e.ROOMS_INCOMING_DIALOG_START_TO_READY = 269224193] = "ROOMS_INCOMING_DIALOG_START_TO_READY", e[e.CREATE_MESSENGER_WINDOW = 269223833] = "CREATE_MESSENGER_WINDOW", e[e.LOAD_THREADS = 269228518] = "LOAD_THREADS", e[e.LOAD_MESSAGES = 269235297] = "LOAD_MESSAGES", e[e.LOAD_EARLIER_MESSAGES = 269232620] = "LOAD_EARLIER_MESSAGES", e[e.LOAD_NEWER_MESSAGES = 269238146] = "LOAD_NEWER_MESSAGES", e[e.OSMETA_READ_USER_ID = 269230010] = "OSMETA_READ_USER_ID", e[e.OSMETA_READ_ACCESS_TOKEN = 269228191] = "OSMETA_READ_ACCESS_TOKEN", e[e.OSMETA_MESSENGER_USER_UPGRADE = 269234986] = "OSMETA_MESSENGER_USER_UPGRADE", e[e.OSMETA_MESSENGER_UPGRADE_COMPLETED_TO_APP_READY = 269231249] = "OSMETA_MESSENGER_UPGRADE_COMPLETED_TO_APP_READY", e[e.OSMETA_MESSENGER_UPGRADE_COMPLETED_TO_RTC_READY = 269227387] = "OSMETA_MESSENGER_UPGRADE_COMPLETED_TO_RTC_READY", e[e.GET_PROMOTIONS_FOR_USER = 269226201] = "GET_PROMOTIONS_FOR_USER", e[e.MARK_PROMOTION_IMPRESSION = 269227842] = "MARK_PROMOTION_IMPRESSION", e[e.MARK_PROMOTION_ACTION = 269230070] = "MARK_PROMOTION_ACTION", e[e.RTC_PUSH_NOTIF_TO_INCOMING_CALL_DIALOG = 269225645] = "RTC_PUSH_NOTIF_TO_INCOMING_CALL_DIALOG", e[e.WARM_START_TO_WINDOW_OPEN = 269227099] = "WARM_START_TO_WINDOW_OPEN", e[e.USER_CREATE_NEW_THREAD = 269236301] = "USER_CREATE_NEW_THREAD", e[e.SEND_MESSAGE = 269227694] = "SEND_MESSAGE"
            }(n || (t.QuickLogIdentifiersZeratul = n = {})), t.QuickLogIdentifiersRtcPerf = r,
            function(e) {
                e[e.RTC_OUTGOING_CALL_START = 16252929] = "RTC_OUTGOING_CALL_START", e[e.RTC_INCOMING_CALL_START = 16252930] = "RTC_INCOMING_CALL_START"
            }(r || (t.QuickLogIdentifiersRtcPerf = r = {}))
    },
    1578: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, o.useState)(!1), a = (0, o.useCallback)(() => {
                t(!1)
            }, []);
            return o.default.createElement(i.default, null, o.default.createElement(u.Provider, {
                store: (0, l.getExampleStore)()
            }, o.default.createElement(s.default, {
                name: "reactionModalExample"
            }), o.default.createElement(d.default, {
                "aria-label": "reactionModalExampleButton",
                telemetryName: "reactionModalExampleButton",
                caption: "Show Reaction Modal",
                onClick: () => {
                    t(!0)
                }
            }), e && o.default.createElement(r.default, {
                reactions: [n.angryReaction, n.heartReaction, n.heartReaction, n.laughReaction, n.laughReaction, n.laughReaction, n.sadReaction, n.thumbsDownReaction, n.thumbsUpReaction, n.wowReaction, n.wowReaction],
                onClose: a
            })))
        };
        var l = a(25),
            n = a(322),
            r = f(a(635)),
            u = a(11),
            o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            i = f(a(2)),
            d = f(a(16)),
            s = f(a(13));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1626: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = [r.default, u.default, o.default, i.default, d.default];
            return (s.default.createElement(s.default.Fragment, null, s.default.createElement(l.default, null, s.default.createElement(l.default, {
                css: {
                    height: "250px"
                }
            }, s.default.createElement(c.default, {
                use: "display"
            }, "Standard Photo Grid"), s.default.createElement(n.default, {
                photos: e,
                threadKey: null
            })), s.default.createElement(l.default, {
                css: {
                    height: "250px"
                }
            }, s.default.createElement(c.default, {
                use: "display"
            }, "Empty Photo Grid"), s.default.createElement(n.default, {
                photos: null,
                threadKey: null
            })))))
        };
        var l = f(a(2)),
            n = f(a(636)),
            r = f(a(1630)),
            u = f(a(1631)),
            o = f(a(1632)),
            i = f(a(1633)),
            d = f(a(1634)),
            s = f(a(0)),
            c = f(a(4));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1630: function(e, t, a) {
        e.exports = a.p + "assets/packages/frontend/src/ui/richMediaPicker/UIExplorerPhotos/DogImage1.png"
    },
    1631: function(e, t, a) {
        e.exports = a.p + "assets/packages/frontend/src/ui/richMediaPicker/UIExplorerPhotos/DogImage2.png"
    },
    1632: function(e, t, a) {
        e.exports = a.p + "assets/packages/frontend/src/ui/richMediaPicker/UIExplorerPhotos/DogImage3.png"
    },
    1633: function(e, t, a) {
        e.exports = a.p + "assets/packages/frontend/src/ui/richMediaPicker/UIExplorerPhotos/DogImage4.png"
    },
    1634: function(e, t, a) {
        e.exports = a.p + "assets/packages/frontend/src/ui/richMediaPicker/UIExplorerPhotos/DogImage5.png"
    },
    1635: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(!1);
            return (r.default.createElement(u.default, null, r.default.createElement(n.Spring, {
                native: !0,
                from: {
                    transform: "translateX(0px)"
                },
                to: {
                    transform: "translate(100px)"
                }
            }, e => r.default.createElement(s, {
                style: e
            })), r.default.createElement(n.Transition, {
                native: !0,
                items: e,
                from: {
                    opacity: 0
                },
                enter: {
                    opacity: 1
                },
                leave: {
                    opacity: 0
                }
            }, e => e ? e => r.default.createElement(s, {
                style: e,
                key: "square"
            }) : null), r.default.createElement(o.default, {
                telemetryName: "",
                "aria-label": "",
                caption: "show",
                onClick: () => t(!e)
            })))
        };
        var l = d(a(1)),
            n = a(46),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(16));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.animated)((0, l.default)(u.default)({
            width: 50,
            height: 50,
            backgroundColor: "red"
        }))
    },
    1636: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, u.useRef)(300),
                [t, a] = (0, u.useState)(300),
                n = (0, u.useRef)(0),
                i = (0, u.useRef)(0),
                d = t => {
                    i.current = t.screenX - n.current, n.current = t.screenX;
                    let l = e.current + i.current;
                    l = Math.max(250, l), l = Math.min(500, l), e.current = l, a(l)
                };
            return u.default.createElement(o.default, {
                css: {
                    flexDirection: "row"
                }
            }, u.default.createElement(o.default, {
                style: {
                    width: t
                }
            }, u.default.createElement(f, null, u.default.createElement(r.default, {
                title: "Hello I'm a title",
                message: "Here's some info about your threads."
            })), u.default.createElement(f, null, u.default.createElement(r.default, {
                title: "Hello",
                message: "Have some time for feedback?",
                renderActions: () => u.default.createElement(u.default.Fragment, null, u.default.createElement(r.QPBannerPrimaryButton, {
                    caption: "Action",
                    onClick: () => {}
                }), u.default.createElement(r.QPBannerSecondaryButton, {
                    caption: "Dismiss",
                    onClick: () => {}
                }))
            })), u.default.createElement(f, null, u.default.createElement(r.default, {
                title: "Hello with Icon",
                message: "Have some time for feedback?",
                icon: l.default
            })), u.default.createElement(f, null, u.default.createElement(r.default, {
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                onDismiss: () => {},
                renderActions: () => u.default.createElement(u.default.Fragment, null, u.default.createElement(r.QPBannerPrimaryButton, {
                    caption: "Lorem ipsum dolor sit amet",
                    onClick: () => {}
                }), u.default.createElement(r.QPBannerSecondaryButton, {
                    caption: "Lorem ipsum dolor sit amet",
                    onClick: () => {}
                }))
            }))), u.default.createElement(c, {
                onMouseDown: e => {
                    n.current = e.screenX, window.addEventListener("mousemove", d), window.addEventListener("mouseup", () => {
                        window.removeEventListener("mousemove", d)
                    })
                }
            }))
        };
        var l = s(a(163)),
            n = s(a(1)),
            r = d(a(590)),
            u = d(a(0)),
            o = s(a(2));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = i();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(o.default)(e => ({
                fontSize: "15px",
                textAlign: "center",
                border: `2px solid ${e.theme.colors.blue}`,
                height: "100%",
                cursor: "col-resize"
            })),
            f = (0, n.default)(o.default)({
                margin: 12
            })
    },
    1637: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)("red");
            return (r.default.createElement("div", null, r.default.createElement(o.default, {
                use: "body"
            }, "Right-click the container below to bring up a context menu"), r.default.createElement(o.default, {
                use: "body"
            }, "that will allow you to change the container's background"), r.default.createElement(o.default, {
                use: "body"
            }, "color."), r.default.createElement(c, null), r.default.createElement(s, {
                backgroundColor: e,
                onContextMenu: () => {
                    l.default.platform.openContextMenu([{
                        label: "red",
                        click: () => {
                            t("red")
                        },
                        enabled: "red" !== e
                    }, {
                        label: "green",
                        click: () => {
                            t("green")
                        },
                        enabled: "green" !== e
                    }, {
                        label: "blue",
                        click: () => {
                            t("blue")
                        },
                        enabled: "blue" !== e
                    }])
                }
            }, e)))
        };
        var l = d(a(9)),
            n = d(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.default)(e => ({
                alignItems: "center",
                backgroundColor: e.backgroundColor,
                borderRadius: 20,
                width: 100,
                fontSize: 20,
                padding: 5
            })),
            c = (0, n.default)(u.default)({
                height: 20
            })
    },
    1638: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(d, null, r.default.createElement(l.default, {
                isAuthenticating: !1,
                login2FA: e => {},
                exit2FA: () => {},
                logo: o.default
            })))
        };
        var l = i(a(1639)),
            n = i(a(1)),
            r = i(a(0)),
            u = i(a(2)),
            o = i(a(119));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(u.default)(e => ({
            width: 460,
            height: 660,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: e.theme.colors.base80
        }))
    },
    1639: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            const [t, a] = (0, u.useState)(""), l = e.isAuthenticating ? n.default._("Logging in...", null, {
                hk: "3pBSlm"
            }).toString() : n.default._("Login", null, {
                hk: "pVDeq"
            }).toString(), o = n.default._("Back", null, {
                hk: "4yR9Rp"
            }).toString();
            return u.default.createElement(r.Container, null, u.default.createElement(r.Header, {
                logo: e.logo,
                title: n.default._("2-Factor Authentication", null, {
                    hk: "3meGvj"
                }),
                subtitle: n.default._("Enter the code sent to your phone", null, {
                    hk: "tEMWu"
                })
            }), u.default.createElement(r.FormContainer, null, u.default.createElement(r.LoginFormTextInput, {
                type: "text",
                "data-automation-id": "email",
                placeholder: n.default._("Enter code", null, {
                    hk: "3NSvwd"
                }),
                value: t,
                onChange: a,
                autoFocus: !0
            }), u.default.createElement(r.PrimaryButton, {
                "aria-label": l,
                telemetryName: "loginButton",
                "data-automation-id": "login",
                onClick: () => e.login2FA(t),
                caption: l,
                disabled: e.isAuthenticating || !t
            })), u.default.createElement(r.FooterContainer, null, u.default.createElement(r.SecondaryButton, {
                "aria-label": o,
                telemetryName: "cancel2FAButton",
                onClick: e.exit2FA,
                caption: o,
                disabled: e.isAuthenticating
            })))
        };
        var l, n = (l = a(5)) && l.__esModule ? l : {
                default: l
            },
            r = i(a(198)),
            u = i(a(0));

        function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return o = function() {
                return e
            }, e
        }

        function i(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = o();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }
    },
    1640: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return n.default.createElement(r.default, null, n.default.createElement(o.default, {
                use: "display"
            }, "Square Image"), n.default.createElement(u.default, {
                imageUrl: "https://i.redd.it/21vjpnyyevl21.jpg"
            }), n.default.createElement(d, null), n.default.createElement(o.default, {
                use: "display"
            }, "Wide Image"), n.default.createElement(u.default, {
                imageUrl: "https://i.redd.it/w8uxn0c9m4tz.png"
            }), n.default.createElement(d, null), n.default.createElement(o.default, {
                use: "display"
            }, "Tall Image"), n.default.createElement(u.default, {
                imageUrl: "https://external-preview.redd.it/rMZSRU-yI31R4c0Z-dbtjZRQgMq3K24IIH9dVZVKjy4.jpg?auto=webp&s=906429f88b35f778ddfe70e0c7501b8eee11562a"
            }), n.default.createElement(d, null), n.default.createElement(o.default, {
                use: "display"
            }, "Small Image"), n.default.createElement(u.default, {
                imageUrl: "https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/32/22215-dog-icon.png"
            }))
        };
        var l = i(a(1)),
            n = i(a(0)),
            r = i(a(2)),
            u = i(a(277)),
            o = i(a(4));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, l.default)(r.default)({
            height: 10
        })
    },
    1641: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(o.default, null, u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "Hello World",
                    attachmentType: null
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !0,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "Hello World",
                    attachmentType: null
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !0,
                    replyMessageContactName: "Alex",
                    replyMessageText: "Hello World",
                    attachmentType: null
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "😊",
                    attachmentType: null
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "",
                    attachmentType: n.AttachmentType.Image
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "",
                    attachmentType: n.AttachmentType.AnimatedImage
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "",
                    attachmentType: n.AttachmentType.Video
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "",
                    attachmentType: n.AttachmentType.File
                },
                onCancel: () => {}
            })), u.default.createElement(d, null, u.default.createElement(l.default, {
                replyContext: {
                    replyMessageId: "",
                    isReplyingToSelf: !1,
                    isSticker: !1,
                    replyMessageContactName: "Alex",
                    replyMessageText: "",
                    attachmentType: n.AttachmentType.Audio
                },
                onCancel: () => {}
            })))
        }, t.Row = void 0;
        var l = i(a(552)),
            n = a(8),
            r = i(a(1)),
            u = i(a(0)),
            o = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, r.default)(o.default)({
            marginTop: 10
        });
        t.Row = d
    },
    1642: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, l.useState)(!1), [a, u] = (0, l.useState)(!1);
            return l.default.createElement(n.default, null, l.default.createElement(r.default, {
                message: "This is a bad state"
            }), !e && l.default.createElement(r.default, {
                message: "This is a closeable bad state",
                onClose: () => t(!0)
            }), !a && l.default.createElement(r.default, {
                onClose: () => u(!0),
                wrapText: !0,
                message: "This is a bad state that can close. There is a lot of content in this message. Blah blah blah blah blah blahblah blah bblah blah blah blah blahlah blah blah"
            }))
        };
        var l = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = o();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            n = u(a(2)),
            r = u(a(638));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return o = function() {
                return e
            }, e
        }
    },
    1643: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(o.default, null, u.default.createElement(i.default, {
                name: "rectangleButtonExample"
            }, [l.RectangleButtonSize.Small, l.RectangleButtonSize.Medium, l.RectangleButtonSize.Jumbo].map(e => {
                return u.default.createElement(f, {
                    key: e
                }, u.default.createElement(d.default, {
                    use: "display"
                }, (t = e) && t[0].toUpperCase() + t.slice(1), " Buttons"), u.default.createElement(m, null, u.default.createElement(l.default, {
                    "aria-label": "Primary Button",
                    title: "Primary Button",
                    size: e,
                    use: l.RectangleButtonUse.Primary,
                    caption: "Button",
                    telemetryName: "primaryButton"
                }), u.default.createElement(p, null), u.default.createElement(l.default, {
                    "aria-label": "Secondary Button",
                    title: "Secondary Button",
                    size: e,
                    use: l.RectangleButtonUse.Secondary,
                    caption: "Button",
                    telemetryName: "secondaryButton"
                }), u.default.createElement(p, null), u.default.createElement(l.default, {
                    "aria-label": "Match Theme Button",
                    title: "Match Theme Button",
                    size: e,
                    use: l.RectangleButtonUse.MatchTheme,
                    caption: "Button",
                    telemetryName: "matchThemeButton"
                })), u.default.createElement(m, null, u.default.createElement(l.default, {
                    "aria-label": "Disabled Primary Button",
                    title: "Disabled Primary Button",
                    size: e,
                    use: l.RectangleButtonUse.Primary,
                    caption: "Button",
                    disabled: !0,
                    telemetryName: "disabledPrimaryButton"
                }), u.default.createElement(p, null), u.default.createElement(l.default, {
                    "aria-label": "Disabled Secondary Button",
                    title: "Disabled Secondary Button",
                    size: e,
                    use: l.RectangleButtonUse.Secondary,
                    caption: "Button",
                    disabled: !0,
                    telemetryName: "disabledSecondaryButton"
                }), u.default.createElement(p, null), u.default.createElement(l.default, {
                    "aria-label": "Disabled Match Theme Button",
                    title: "Disabled Match Theme Button",
                    size: e,
                    use: l.RectangleButtonUse.MatchTheme,
                    caption: "Button",
                    disabled: !0,
                    telemetryName: "disabledMatchThemeButton"
                })), u.default.createElement(m, null, u.default.createElement(l.default, {
                    "aria-label": "Primary Button",
                    title: "Primary Button",
                    size: e,
                    use: l.RectangleButtonUse.Primary,
                    caption: "Button",
                    telemetryName: "primaryButton",
                    icon: r.default
                }), u.default.createElement(p, null), u.default.createElement(l.default, {
                    "aria-label": "Secondary Button",
                    title: "Secondary Button",
                    size: e,
                    use: l.RectangleButtonUse.Secondary,
                    caption: "Button",
                    telemetryName: "secondaryButton",
                    icon: r.default
                }), u.default.createElement(p, null), u.default.createElement(l.default, {
                    "aria-label": "Match Theme Button",
                    title: "Match Theme Button",
                    size: e,
                    use: l.RectangleButtonUse.MatchTheme,
                    caption: "Button",
                    telemetryName: "matchThemeButton",
                    icon: r.default
                })));
                var t
            })))
        };
        var l = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(16)),
            n = s(a(1)),
            r = s(a(257)),
            u = s(a(0)),
            o = s(a(2)),
            i = s(a(13)),
            d = s(a(4));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }
        const f = (0, n.default)(o.default)({
                marginBottom: 40
            }),
            m = (0, n.default)(o.default)({
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center"
            }),
            p = (0, n.default)(o.default)({
                width: 10
            })
    },
    1644: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, m.useTheme)();
            return (i.default.createElement(d.default, null, i.default.createElement(f.default, {
                name: "roundButtonExample"
            }, i.default.createElement(y, null, i.default.createElement(E, null, [c.RoundButtonSize.Tiny, c.RoundButtonSize.XXSmall, c.RoundButtonSize.XSmall, c.RoundButtonSize.Small, c.RoundButtonSize.Medium, c.RoundButtonSize.Large, c.RoundButtonSize.XLarge, c.RoundButtonSize.XXLarge, c.RoundButtonSize.XXXLarge].map(e => i.default.createElement(i.default.Fragment, {
                key: e
            }, i.default.createElement(c.default, {
                "aria-label": `Round ${e} button`,
                title: `Round  ${e} button`,
                size: e,
                icon: o.default,
                telemetryName: `roundButton-${e}`
            }), i.default.createElement(h, null)))), i.default.createElement(E, null, [c.RoundButtonSize.Tiny, c.RoundButtonSize.XXSmall, c.RoundButtonSize.XSmall, c.RoundButtonSize.Small, c.RoundButtonSize.Medium, c.RoundButtonSize.Large, c.RoundButtonSize.XLarge, c.RoundButtonSize.XXLarge, c.RoundButtonSize.XXXLarge].map(e => i.default.createElement(i.default.Fragment, {
                key: e
            }, i.default.createElement(c.default, {
                "aria-label": `Round ${e} button disabled`,
                title: `Round ${e} button disabled`,
                size: e,
                icon: o.default,
                disabled: !0,
                telemetryName: `roundButtonDisabled-${e}`
            }), i.default.createElement(h, null)))), i.default.createElement(E, null, i.default.createElement(s.default, {
                "aria-label": "Multi Button",
                title: "Multi Button",
                icons: [u.default, r.default],
                iconBackgroundColors: [e.colors.red, e.colors.green],
                telemetryName: "multiButton"
            })), i.default.createElement(E, null, i.default.createElement(l.default, {
                "aria-label": "Close Button",
                title: "Close Button",
                telemetryName: "closeButton",
                onClick: () => window.alert("clicking on a close button")
            }), i.default.createElement(c.default, {
                "aria-label": "Close Button Silent State",
                title: "Close Button Silent State",
                size: c.RoundButtonSize.Small,
                telemetryName: "closeButtonSilentState",
                buttonColor: e.semanticColors.textPrimary,
                silentPressedState: !0,
                icon: u.default,
                iconColor: e.colors.base80,
                onClick: () => window.alert("clicking on a close button")
            })), i.default.createElement(E, null, ["🙃", "🙀", "🦋", "😍", "🍉", "🐥", "♥️", "◀️"].map(e => i.default.createElement(i.default.Fragment, {
                key: e
            }, i.default.createElement(c.default, {
                key: e,
                "aria-label": `Round ${e} button`,
                title: `Round ${e} button`,
                size: c.RoundButtonSize.Large,
                icon: o.default,
                customEmoji: e,
                telemetryName: `roundButton-${e}`
            }), i.default.createElement(h, null)))), i.default.createElement(E, null, ["🙃", "🙀", "🦋", "😍", "🍉", "🐥", "♥️", "◀️"].map(e => i.default.createElement(i.default.Fragment, {
                key: e
            }, i.default.createElement(c.default, {
                key: e,
                "aria-label": `Round ${e} button`,
                title: `Round ${e} button`,
                size: c.RoundButtonSize.Medium,
                icon: o.default,
                customEmoji: e,
                telemetryName: `roundButton-${e}`
            }), i.default.createElement(h, null)))), i.default.createElement(E, null, [c.RoundButtonSize.Large, c.RoundButtonSize.XLarge].map(e => i.default.createElement(i.default.Fragment, {
                key: e
            }, i.default.createElement(c.default, {
                "aria-label": `Round ${e} button`,
                title: `Round ${e} button`,
                size: e,
                icon: o.default,
                customEmoji: "😮",
                telemetryName: `roundButton-${e}`
            }), i.default.createElement(h, null)))), i.default.createElement(E, null, [e.colors.red, e.colors.green, e.colors.blue, e.colors.flatBase70].map(e => i.default.createElement(i.default.Fragment, {
                key: e
            }, i.default.createElement(c.default, {
                "aria-label": `Round ${e} button`,
                title: `Round ${e} button`,
                size: c.RoundButtonSize.Large,
                icon: o.default,
                telemetryName: `roundButton-${e}`,
                activateOnHover: !0,
                iconColor: e
            }), i.default.createElement(h, null)))), i.default.createElement(E, null, i.default.createElement(i.default.Fragment, null, i.default.createElement(c.default, {
                "aria-label": "Round blue button",
                title: "Round blue button",
                size: c.RoundButtonSize.XLarge,
                iconColor: e.colors.blue,
                telemetryName: "roundButton-blue"
            }), i.default.createElement(h, null), i.default.createElement(c.default, {
                "aria-label": "Round berry gradient button",
                title: "Round berry gradient button",
                size: c.RoundButtonSize.XXLarge,
                iconColor: "green",
                gradientColors: ["rgb(255, 46, 25)", "rgb(146, 0, 255)", "rgb(0, 95, 255)"],
                telemetryName: "roundButton-berry"
            }), i.default.createElement(h, null), i.default.createElement(c.default, {
                "aria-label": "Round mango gradient button",
                size: c.RoundButtonSize.XXXLarge,
                iconColor: "green",
                gradientColors: ["#ff4f00", "#ff9616", "#ffdc2d"],
                telemetryName: "roundButton-mango"
            })))))))
        };
        var l = g(a(262)),
            n = g(a(1)),
            r = g(a(78)),
            u = g(a(50)),
            o = g(a(1645)),
            i = g(a(0)),
            d = g(a(2)),
            s = g(a(461)),
            c = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = p();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(22)),
            f = g(a(13)),
            m = a(6);

        function p() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return p = function() {
                return e
            }, e
        }

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = (0, n.default)(d.default)({
                marginBottom: 40
            }),
            E = (0, n.default)(d.default)({
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center"
            }),
            h = (0, n.default)(d.default)({
                width: 20
            })
    },
    1645: function(e, t, a) {
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
                d: "M20.07 10.273a1.75 1.75 0 10.906-3.381 1.75 1.75 0 00-.905 3.38zM26.179 20.32a1.25 1.25 0 102.404.685c.527-1.85.575-3.862.042-5.852a10.954 10.954 0 00-2.962-5.047 1.25 1.25 0 10-1.74 1.795A8.455 8.455 0 0126.21 15.8a8.456 8.456 0 01-.031 4.52zM11.901 23.923a1.25 1.25 0 10-1.795 1.74 10.953 10.953 0 005.047 2.962c1.99.533 4.002.485 5.852-.042a1.25 1.25 0 10-.685-2.404 8.454 8.454 0 01-4.52.031 8.455 8.455 0 01-3.899-2.287zM16.828 8.24a1.25 1.25 0 01-.908 1.517 8.454 8.454 0 00-3.93 2.233 8.455 8.455 0 00-2.233 3.93 1.25 1.25 0 01-2.425-.609 10.955 10.955 0 012.89-5.09 10.955 10.955 0 015.09-2.889 1.25 1.25 0 011.516.908zM9.035 22.214a1.75 1.75 0 11-.906-3.381 1.75 1.75 0 01.906 3.38zM23.657 23.657a1.75 1.75 0 102.475 2.475 1.75 1.75 0 00-2.475-2.475zM24.279 16.318a1.75 1.75 0 11-3.381.905 1.75 1.75 0 013.38-.905z"
            }), n.default.createElement("path", {
                fill: "currentColor",
                d: "M14.62 18.906a3.5 3.5 0 013.98-4.355 1.25 1.25 0 00.432-2.463 6 6 0 102.818 10.515 1.25 1.25 0 10-1.605-1.916 3.5 3.5 0 01-5.626-1.78z"
            }))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    1646: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(c, null, r.default.createElement(p, {
                use: "display"
            }, "1:1 Audio"), r.default.createElement(f, null, r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "New Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !0,
                isVideoRequest: !1,
                inCall: !1,
                messageThread: null,
                participants: [E],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            })), r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "Existing Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !0,
                isVideoRequest: !1,
                inCall: !0,
                messageThread: null,
                participants: [E],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            }))), r.default.createElement(y, null), r.default.createElement(p, {
                use: "display"
            }, "1:1 Video"), r.default.createElement(f, null, r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "New Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !0,
                isVideoRequest: !0,
                inCall: !1,
                messageThread: null,
                participants: [E],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            })), r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "Existing Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !0,
                isVideoRequest: !0,
                inCall: !0,
                messageThread: null,
                participants: [E],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            }))), r.default.createElement(y, null), r.default.createElement(p, {
                use: "display"
            }, "Unnamed Group Audio Call"), r.default.createElement(f, null, r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "New Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !1,
                inCall: !1,
                messageThread: null,
                participants: [E, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            })), r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "Existing Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !1,
                inCall: !0,
                messageThread: null,
                participants: [E, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            }))), r.default.createElement(y, null), r.default.createElement(p, {
                use: "display"
            }, "Unnamed Group Video Call"), r.default.createElement(f, null, r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "New Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !0,
                inCall: !1,
                messageThread: null,
                participants: [E, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            })), r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "Existing Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !0,
                inCall: !0,
                messageThread: null,
                participants: [E, h, b, M, b, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            }))), r.default.createElement(y, null), r.default.createElement(p, {
                use: "display"
            }, "Named Group Audio Call"), r.default.createElement(f, null, r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "New Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !1,
                inCall: !1,
                messageThread: w,
                participants: [E, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            })), r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "Existing Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !1,
                inCall: !0,
                messageThread: w,
                participants: [E, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            }))), r.default.createElement(y, null), r.default.createElement(p, {
                use: "display"
            }, "Named Group Video Call"), r.default.createElement(f, null, r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "New Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !0,
                inCall: !1,
                messageThread: w,
                participants: [E, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            })), r.default.createElement(m, null, r.default.createElement(p, {
                use: "title"
            }, "Existing Call"), r.default.createElement(g, null), r.default.createElement(l.default, {
                isP2P: !1,
                isVideoRequest: !0,
                inCall: !0,
                messageThread: w,
                participants: [E, h, b, M, b],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            }))))
        };
        var l = s(a(460)),
            n = s(a(1)),
            r = s(a(0)),
            u = s(a(2)),
            o = s(a(31)),
            i = s(a(43)),
            d = s(a(4));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(u.default)({
                flexDirection: "column",
                margin: 10,
                padding: 10,
                backgroundColor: "lightgrey",
                justifyContent: "space-around",
                alignItems: "center"
            }),
            f = (0, n.default)(u.default)({
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 10
            }),
            m = (0, n.default)(u.default)({
                flexDirection: "column",
                margin: "auto",
                padding: 5,
                alignItems: "center"
            }),
            p = (0, n.default)(d.default)({
                color: "black"
            }),
            g = (0, n.default)(u.default)({
                height: 10
            }),
            y = (0, n.default)(u.default)({
                width: "100%",
                paddingTop: 20,
                borderTop: "5px solid white"
            }),
            E = {
                name: "Bojack Horseman",
                shortName: "Bojack",
                profilePictureUri: o.default
            },
            h = {
                name: "Diane Nguyen",
                shortName: "Diane",
                profilePictureUri: i.default
            },
            b = {
                name: "Princess Carolyn",
                shortName: "Princess",
                profilePictureUri: i.default
            },
            M = {
                name: "Mr.Peanutbutter",
                shortName: "Mr.Peanutbutter",
                profilePictureUri: o.default
            },
            w = {
                name: "Surf Crew",
                imageUri: i.default
            }
    },
    1647: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(d, null, r.default.createElement(s, null, r.default.createElement(l.default, {
                caller: c,
                onReturnCall: () => {},
                onClose: () => {}
            })))
        };
        var l = i(a(523)),
            n = i(a(1)),
            r = i(a(0)),
            u = i(a(2)),
            o = i(a(31));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(u.default)({
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "lightgrey"
            }),
            s = (0, n.default)(u.default)({
                height: 340,
                width: 350,
                margin: 10
            }),
            c = {
                name: "Bojack Horseman",
                shortName: "Bojack",
                profilePictureUri: o.default
            }
    },
    1648: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(d, null, r.default.createElement(s, null, r.default.createElement(c, null, r.default.createElement(l.default, {
                participants: [f],
                roomName: "Pizza Party",
                onAcceptCall: () => {},
                onRejectCall: () => {}
            })), r.default.createElement(c, null, r.default.createElement(l.default, {
                participants: [f],
                onAcceptCall: () => {},
                onRejectCall: () => {}
            }))))
        };
        var l = i(a(528)),
            n = i(a(1)),
            r = i(a(0)),
            u = i(a(2)),
            o = i(a(31));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(u.default)({
                flexDirection: "column",
                margin: 10,
                padding: 10,
                backgroundColor: "lightgrey",
                justifyContent: "space-around",
                alignItems: "center"
            }),
            s = (0, n.default)(u.default)({
                flexDirection: "row",
                flexWrap: "wrap",
                padding: 10
            }),
            c = (0, n.default)(u.default)({
                height: 340,
                width: 350,
                margin: 10
            }),
            f = {
                name: "Bojack Horseman",
                shortName: "Bojack",
                profilePictureUri: o.default
            }
    },
    1649: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, s.useState)(2);
            new Array(101).fill(p.default);
            const a = {
                accessToken: "T",
                analyticsClaim: "AC",
                userID: "C",
                username: "U",
                firstName: "F",
                fullName: "FN",
                deviceID: "D",
                familyDeviceID: "FD",
                machineID: "M"
            };
            return (s.default.createElement(c.default, null, s.default.createElement(d.Provider, {
                store: (0, f.getExampleStore)()
            }, s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: [w],
                selected: 1 === e,
                onClick: () => t(1),
                profilePictureUrl: p.default,
                listItem: {
                    ...M,
                    isUnread: !0,
                    threadName: "Planet Express Team - unread"
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Unread,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 2,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                selected: 2 === e,
                onClick: () => t(2),
                profilePictureUrl: p.default,
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - delivered"
                },
                presence: null,
                participants: k,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Delivered,
                lastMessageInfo: {
                    timestamp: 90,
                    status: 2,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                selected: 3 === e,
                onClick: () => t(3),
                profilePictureUrl: p.default,
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - sent"
                },
                presence: null,
                participants: k,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Sent,
                lastMessageInfo: {
                    timestamp: 90,
                    status: 2,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: k,
                selected: 4 === e,
                profilePictureUrl: p.default,
                onClick: () => t(4),
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - sending"
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Sending,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 1,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                selected: 5 === e,
                profilePictureUrl: p.default,
                onClick: () => t(5),
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - read"
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                participants: k,
                deliveryStatus: u.DeliveryStatus.Read,
                lastMessageInfo: {
                    timestamp: 90,
                    status: 2,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                lastMessageSeenHeadsUrls: [{
                    primaryUrl: p.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }, {
                    primaryUrl: g.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }, {
                    primaryUrl: p.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }, {
                    primaryUrl: g.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }],
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: k,
                profilePictureUrl: p.default,
                selected: 6 === e,
                onClick: () => t(6),
                listItem: {
                    ...M,
                    isTyping: !0
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Unread,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 2,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: k,
                selected: 7 === e,
                profilePictureUrl: p.default,
                onClick: () => t(7),
                listItem: {
                    ...M,
                    threadName: "A Very Very Very Very Long Team Name",
                    isMuted: !0,
                    isUnread: !0
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Unread,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 2,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: k,
                selected: 8 === e,
                profilePictureUrl: p.default,
                onClick: () => t(8),
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - muted",
                    isMuted: !0
                },
                lastMessageSeenHeadsUrls: [{
                    primaryUrl: p.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }, {
                    primaryUrl: g.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }],
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Read,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 2,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: k,
                selected: 9 === e,
                profilePictureUrl: p.default,
                onClick: () => t(9),
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - error"
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Error,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 0,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: [w],
                selected: 10 === e,
                profilePictureUrl: p.default,
                onClick: () => t(10),
                listItem: {
                    ...M,
                    threadName: "Self-thread (participant A)"
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Unread,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 0,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: k,
                selected: 11 === e,
                profilePictureUrl: p.default,
                onClick: () => t(11),
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - Ongoing Call"
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Error,
                callStatus: r.RtcCallStatus.AUDIO,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 0,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.default, {
                authData: a,
                participants: k,
                selected: 11 === e,
                profilePictureUrl: p.default,
                onClick: () => t(11),
                listItem: {
                    ...M,
                    threadName: "Planet Express Team - Ongoing Call"
                },
                presence: null,
                participantStatus: m.EmptyUserStatusInfo,
                deliveryStatus: u.DeliveryStatus.Error,
                callStatus: r.RtcCallStatus.VIDEO,
                lastMessageInfo: {
                    timestamp: 100,
                    status: 0,
                    isAdminMessage: !1,
                    senderId: "C"
                },
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running
            })), s.default.createElement(b, null, s.default.createElement(l.NewMessageChatCell, {
                selected: 12 === e,
                onClick: () => t(12),
                onDelete: () => window.alert("deleting new message chat cell"),
                recipients: []
            }), s.default.createElement(l.NewMessageChatCell, {
                selected: 13 === e,
                onClick: () => t(13),
                onDelete: () => window.alert("deleting new message chat cell"),
                recipients: [{
                    contactId: "1",
                    name: "Bob"
                }]
            }), s.default.createElement(l.NewMessageChatCell, {
                selected: 14 === e,
                onClick: () => t(14),
                onDelete: () => window.alert("deleting new message chat cell"),
                recipients: [{
                    contactId: "1",
                    name: "Bob"
                }, {
                    contactId: "2",
                    name: "Alice"
                }]
            }), s.default.createElement(l.NewMessageChatCell, {
                selected: 15 === e,
                onClick: () => t(15),
                onDelete: () => window.alert("deleting new message chat cell"),
                recipients: [{
                    contactId: "1",
                    name: "Bob"
                }, {
                    contactId: "2",
                    name: "Alice"
                }, {
                    contactId: "3",
                    name: "Charlie"
                }]
            })), s.default.createElement(b, null, s.default.createElement(n.default, {
                userId: "1",
                compact: !1
            })))))
        };
        var l = h(a(252)),
            n = y(a(1654)),
            r = a(8),
            u = a(133),
            o = y(a(1)),
            i = a(49),
            d = a(11),
            s = h(a(0)),
            c = y(a(2)),
            f = a(25),
            m = a(30),
            p = y(a(31)),
            g = y(a(43));

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function E() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return E = function() {
                return e
            }, e
        }

        function h(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = E();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }
        const b = (0, o.default)(c.default)({
                paddingTop: 10,
                paddingBottom: 10
            }),
            M = {
                ...m.EmptyInboxModel,
                threadName: "Planet Express Team",
                snippet: "Professor: Good news everyone! 🎉🎉🎉",
                lastActivityTimestampMs: 1e3,
                isUnread: !1
            },
            w = {
                ...m.EmptyMsysParticipantModel,
                profilePictureUrl: p.default,
                contactId: "A"
            },
            v = {
                ...m.EmptyMsysParticipantModel,
                profilePictureUrl: g.default,
                contactId: "B"
            },
            S = {
                ...m.EmptyMsysParticipantModel,
                profilePictureUrl: g.default,
                contactId: "C"
            },
            k = [w, v, S]
    },
    1654: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return null
        }
    },
    1655: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return s.default.createElement(c.default, null, s.default.createElement(l.default, {
                threadName: E.threadName,
                threadType: E.threadType,
                threadPictureUrl: "",
                participants: v,
                presence: f.EmptyMsysThreadPresenceModel,
                participantStatus: f.EmptyUserStatusInfo,
                viewerId: "C",
                commands: [{
                    id: "voice-call",
                    icon: d.default,
                    label: "Voice Call",
                    onClick: () => {}
                }, {
                    id: "video-call",
                    icon: u.default,
                    label: "Video Call",
                    onClick: () => {}
                }, {
                    id: "search",
                    icon: i.default,
                    label: "Search",
                    onClick: () => {}
                }],
                overflowCommands: [{
                    id: "add-people",
                    icon: o.default,
                    label: "Add People",
                    onClick: () => {}
                }]
            }), s.default.createElement(y, null), s.default.createElement(l.default, {
                threadName: E.threadName,
                threadType: E.threadType,
                threadPictureUrl: m.default,
                presence: f.EmptyMsysThreadPresenceModel,
                participantStatus: f.EmptyUserStatusInfo,
                participants: v,
                viewerId: "C",
                commands: [{
                    id: "voice-call",
                    icon: d.default,
                    label: "Voice Call",
                    onClick: () => {}
                }, {
                    id: "video-call",
                    icon: u.default,
                    label: "Video Call",
                    onClick: () => {}
                }, {
                    id: "search",
                    icon: i.default,
                    label: "Search",
                    onClick: () => {}
                }]
            }), s.default.createElement(y, null), s.default.createElement(l.default, {
                threadName: E.threadName,
                threadType: E.threadType,
                threadPictureUrl: m.default,
                presence: f.EmptyMsysThreadPresenceModel,
                participantStatus: f.EmptyUserStatusInfo,
                participants: v,
                viewerId: "A",
                commands: [{
                    id: "voice-call",
                    icon: d.default,
                    label: "Voice Call",
                    onClick: () => {}
                }, {
                    id: "video-call",
                    icon: u.default,
                    label: "Video Call",
                    onClick: () => {}
                }, {
                    id: "search",
                    icon: i.default,
                    label: "Search",
                    onClick: () => {}
                }]
            }), s.default.createElement(y, null), s.default.createElement(l.default, {
                threadName: "Page",
                threadType: E.threadType,
                threadPictureUrl: "",
                presence: f.EmptyMsysThreadPresenceModel,
                participants: S,
                participantStatus: f.EmptyUserStatusInfo,
                viewerId: "C",
                commands: [],
                overflowCommands: [{
                    id: "add-people",
                    icon: o.default,
                    label: "Add People",
                    onClick: () => {}
                }]
            }), s.default.createElement(y, null), s.default.createElement(l.default, {
                threadName: "Page",
                threadType: E.threadType,
                presence: f.EmptyMsysThreadPresenceModel,
                threadPictureUrl: "",
                participants: S,
                participantStatus: f.EmptyUserStatusInfo,
                viewerId: "C",
                commands: [],
                overflowCommands: [{
                    id: "add-people",
                    icon: o.default,
                    label: "Add People",
                    onClick: () => {}
                }],
                inNullState: !0
            }))
        };
        var l = g(a(253)),
            n = a(8),
            r = g(a(1)),
            u = g(a(78)),
            o = g(a(361)),
            i = g(a(462)),
            d = g(a(145)),
            s = g(a(0)),
            c = g(a(2)),
            f = a(30),
            m = g(a(31)),
            p = g(a(43));

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = (0, r.default)(c.default)({
                height: 10
            }),
            E = {
                ...f.EmptyInboxModel,
                threadName: "James Neumann",
                threadType: n.ThreadType.OnetoOne
            },
            h = {
                ...f.EmptyMsysParticipantModel,
                profilePictureUrl: m.default,
                contactId: "A",
                workCompanyName: "Facebook",
                workJobTitle: "Software Engineer"
            },
            b = {
                ...f.EmptyMsysParticipantModel,
                profilePictureUrl: p.default,
                contactId: "B",
                workCompanyName: "Facebook",
                workJobTitle: "Engineer",
                workForeignEntityType: n.WorkForeignEntityType.Foreign
            },
            M = {
                ...f.EmptyMsysParticipantModel,
                profilePictureUrl: p.default,
                contactId: "C",
                workCompanyName: "Facebook",
                workJobTitle: "Engineering"
            },
            w = {
                ...f.EmptyMsysParticipantModel,
                profilePictureUrl: p.default,
                contactId: "D",
                contactType: n.ContactType.Page
            },
            v = [h, b, M],
            S = [M, w]
    },
    1658: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement("div", null, r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "Basic Checkbox")), r.default.createElement(s, null, r.default.createElement(c, null, ({
                checked: e,
                setChecked: t
            }) => r.default.createElement(l.default, {
                label: e ? "Checked" : "Unchecked",
                checked: e,
                onChange: t
            }))), r.default.createElement(s, null, r.default.createElement(c, null, ({
                checked: e,
                setChecked: t
            }) => r.default.createElement(l.default, {
                label: "this is a really really really really long label",
                checked: e,
                onChange: t
            }))), r.default.createElement(s, null, r.default.createElement(c, null, ({
                checked: e,
                setChecked: t
            }) => r.default.createElement(l.default, {
                label: e ? "Checked" : "Unchecked",
                checked: e,
                size: "small",
                onChange: t
            }))), r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "Disabled Checkbox")), r.default.createElement(s, null, r.default.createElement(c, null, ({
                checked: e,
                setChecked: t
            }) => r.default.createElement(l.default, {
                label: "Not selected",
                checked: e,
                disabled: !0
            }))), r.default.createElement(s, null, r.default.createElement(l.default, {
                label: "Selected",
                checked: !0,
                disabled: !0
            })))
        };
        var l = d(a(167)),
            n = d(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.default)({
            flexDirection: "row",
            maxWidth: 250,
            paddingTop: 10,
            paddingBottom: 10
        });

        function c(e) {
            const [t, a] = (0, r.useState)(!1);
            return e.children({
                checked: t,
                setChecked: a
            })
        }
    },
    1659: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = {
                    ...(0, u.getDefaultInboxState)(),
                    replyMessageOTID: "reply",
                    threads: {
                        1: {
                            ...m.EmptyInboxModel
                        }
                    },
                    messages: {
                        1: {
                            reply: (0, f.makeMessage)(c.longMessage)
                        }
                    }
                },
                t = {
                    ...(0, u.getDefaultInboxState)(),
                    threads: {
                        1: {
                            ...m.EmptyInboxModel
                        }
                    },
                    messages: {
                        1: {
                            m1: (0, f.makeMessage)(c.longMessage)
                        }
                    },
                    primaryThreadKey: "1",
                    orderedMessageOTIDs: {
                        1: ["m1"]
                    },
                    persistentMenus: {
                        1: [{
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Start Over"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Share with Friends"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Country 🌎"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Help"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Start Over"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Share with Friendsssssssssssssss"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Pick your most favorite country ever in the entire worlds 🌎"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "More Help"
                        }, {
                            ...m.EmptyMsysPersistentMenuItem,
                            title: "Go Back"
                        }]
                    }
                };
            return i.default.createElement(d.default, null, i.default.createElement(d.default, {
                css: {
                    flex: 1,
                    justifyContent: "flex-end"
                }
            }, i.default.createElement(o.Provider, {
                store: (0, f.getExampleStore)(e)
            }, i.default.createElement(l.default, {
                threadKey: "foo"
            }), i.default.createElement(g, null), i.default.createElement(s.default, {
                firstName: "James",
                isPageThread: !1,
                onSomethingsWrongClick: () => {},
                onUnblockClick: () => {},
                disabledType: n.ComposerDisabledType.CantMessage,
                cannotReplyReason: null
            }), i.default.createElement(g, null), i.default.createElement(g, null), i.default.createElement(s.default, {
                firstName: "James",
                isPageThread: !1,
                onSomethingsWrongClick: () => {},
                onUnblockClick: () => {},
                disabledType: n.ComposerDisabledType.BlockedThread,
                cannotReplyReason: null
            }), i.default.createElement(g, null), i.default.createElement(g, null), i.default.createElement(s.default, {
                firstName: "Chloe",
                isPageThread: !1,
                onSomethingsWrongClick: () => {},
                onUnblockClick: () => {},
                cannotReplyReason: null,
                disabledType: n.ComposerDisabledType.NotMember
            }), i.default.createElement(g, null), i.default.createElement(l.default, {
                threadKey: "foo"
            }), i.default.createElement(g, null)), i.default.createElement(o.Provider, {
                store: (0, f.getExampleStore)({
                    ...e,
                    primaryThreadKey: "1"
                })
            }, i.default.createElement(i.default.Fragment, null, i.default.createElement(l.default, {
                threadKey: "foo"
            }))), i.default.createElement(o.Provider, {
                store: (0, f.getExampleStore)(t)
            }, i.default.createElement(l.default, {
                threadKey: "1"
            }))))
        };
        var l = p(a(264)),
            n = a(8),
            r = p(a(1)),
            u = a(23),
            o = a(11),
            i = p(a(0)),
            d = p(a(2)),
            s = p(a(570)),
            c = a(134),
            f = a(25),
            m = a(30);

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0, r.default)(d.default)({
            height: 20
        })
    },
    1721: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, i.useRef)(null),
                {
                    showContextMenu: t
                } = (0, r.useContextMenu)(),
                a = (0, n.useTheme)(),
                c = e => {
                    t({
                        target: e,
                        contextMenuStyles: {
                            accentColor: a.colors.green
                        },
                        items: [{
                            id: "reply",
                            label: "Reply",
                            icon: o.default,
                            accelerator: "Ctrl+R",
                            subtext: "Reply to a message"
                        }, {
                            id: "reply2",
                            label: "A very very  very long message that should be truncated",
                            icon: o.default,
                            accelerator: "Ctrl+Alt+R",
                            subtext: "Reply to a message"
                        }, {
                            id: "longitem1",
                            label: "pneumonoultramicroscopicsilicovolcanoconiosis",
                            icon: o.default,
                            subtext: "The longest word in English shall not break menu item layout"
                        }, {
                            type: "separator"
                        }, {
                            id: "2",
                            label: "Notify",
                            statusBadge: i.default.createElement(d.default, {
                                css: {
                                    width: 10,
                                    height: 10,
                                    borderRadius: "100%",
                                    backgroundColor: "red"
                                }
                            })
                        }, {
                            id: "2",
                            label: "Disabled",
                            disabled: !0
                        }, {
                            id: "2",
                            label: "Selected",
                            selected: !0
                        }, {
                            type: "separator"
                        }, {
                            id: "nested",
                            label: "Parent Item",
                            subtext: "This item contains other items",
                            icon: u.default,
                            submenu: [{
                                id: "nested1",
                                label: "Nested Item 1",
                                submenu: [{
                                    id: "nested3",
                                    label: "Inception?",
                                    icon: u.default
                                }]
                            }, {
                                id: "nested2",
                                label: "Nested Item 2",
                                icon: o.default
                            }]
                        }, {
                            id: "3",
                            label: "Do something else"
                        }, {
                            id: "4",
                            label: "World"
                        }]
                    })
                };
            return i.default.createElement(d.default, {
                onContextMenu: e => {
                    e.persist(), c(e)
                },
                css: {
                    height: 500,
                    outline: "1px solid red"
                }
            }, i.default.createElement(l.default, {
                "aria-label": "context-menu-example",
                telemetryName: "context-menu-example",
                caption: "Click me",
                onClick: () => c(e.current),
                elementRef: e
            }), i.default.createElement(s.default, {
                use: "body"
            }, "Or, right click in the red outline to open the menu"))
        };
        var l = f(a(16)),
            n = a(6),
            r = a(66),
            u = f(a(360)),
            o = f(a(326)),
            i = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            d = f(a(2)),
            s = f(a(4));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1722: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return n.default.createElement(r.default, null, n.default.createElement(f, null), n.default.createElement(u.default, {
                type: u.NotificationTypes.CONNECTING
            }), n.default.createElement(f, null), n.default.createElement(u.default, {
                type: u.NotificationTypes.NO_NETWORK
            }), n.default.createElement(m, null), n.default.createElement(u.default, {
                type: u.NotificationTypes.MESSAGE_TEXT,
                imageUrl: i.default,
                text: "Message Preview"
            }), n.default.createElement(f, null), n.default.createElement(u.default, {
                type: u.NotificationTypes.TYPING,
                isGroupChat: !0,
                typingParticipants: (0, o.getParticipants)().slice(1)
            }), n.default.createElement(f, null), n.default.createElement(u.default, {
                type: u.NotificationTypes.TYPING,
                isGroupChat: !1,
                typingParticipants: (0, o.getParticipants)()
            }), n.default.createElement(m, null), n.default.createElement(u.default, {
                type: u.NotificationTypes.JOIN_CALL,
                imageUrl: d.default,
                name: "Jason"
            }), n.default.createElement(f, null), n.default.createElement(u.default, {
                type: u.NotificationTypes.LEAVE_CALL,
                imageUrl: d.default,
                name: "Jason"
            }), n.default.createElement(f, null))
        };
        var l = c(a(1)),
            n = c(a(0)),
            r = c(a(2)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(369)),
            o = a(25),
            i = c(a(31)),
            d = c(a(43));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, l.default)(r.default)({
                height: "22px"
            }),
            m = (0, l.default)(r.default)({
                height: "55px"
            })
    },
    1724: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l = d(a(265)),
            n = d(a(333)),
            r = d(a(1)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = d(a(2));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, r.default)(o.default)({
            height: "90vh"
        });
        t.default = () => {
            const [e, t] = (0, u.useState)(new Date);
            return (u.default.createElement(s, null, u.default.createElement("p", null, "Last set date: ", e && e.toLocaleString()), u.default.createElement("h2", null, "Regular DatePicker"), u.default.createElement(l.default, {
                date: e,
                onChange: e => t(e)
            }), u.default.createElement("h2", null, "DatePicker with a weekday"), u.default.createElement(n.default, {
                date: e,
                onChange: e => t(e)
            }), u.default.createElement("h2", null, "Regular DatePicker disabled"), u.default.createElement(l.default, {
                date: e,
                onChange: () => {},
                disabled: !0
            })))
        }
    },
    1741: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l = i(a(370)),
            n = i(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = o();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = i(a(2));

        function o() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return o = function() {
                return e
            }, e
        }

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(u.default)({
            height: "90vh"
        });
        t.default = () => {
            const [e, t] = (0, r.useState)(-1);
            return (r.default.createElement(d, null, r.default.createElement("p", null, "Last set timestamp: ", e, ", ", new Date(1e3 * e).toString()), r.default.createElement("h2", null, "Regular DatePicker"), r.default.createElement(l.default, {
                onDateTimeChange: t
            }), r.default.createElement("h2", null, "DateTimePicker disabled"), r.default.createElement(l.default, {
                date: new Date("2020-09-01"),
                onDateTimeChange: () => {},
                disabled: !0
            })))
        }
    },
    1744: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, u.useState)(!1), [a, f] = (0, u.useState)(!0);
            return u.default.createElement(o.default, null, u.default.createElement(r.Provider, {
                store: (0, l.getExampleStore)()
            }, u.default.createElement(c.default, {
                name: "dndModalExample"
            }, u.default.createElement(s.default, null, u.default.createElement(d.default, null, u.default.createElement(i.default, {
                "aria-label": "showDnDModalExample",
                telemetryName: "showDnDModalExample",
                caption: "Show DnD Modal",
                onClick: () => {
                    f(!0), t(!0)
                }
            })), u.default.createElement(d.default, null, u.default.createElement(i.default, {
                "aria-label": "showDnDModalExample",
                telemetryName: "showDnDModalExample",
                caption: "Show DnD Modal / Disabled",
                onClick: () => {
                    f(!1), t(!0)
                }
            })))), e && u.default.createElement(n.default, {
                isDnDEnabled: a,
                testCloseModal: () => t(!1)
            })))
        };
        var l = a(25),
            n = m(a(643)),
            r = a(11),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = f();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = m(a(2)),
            i = m(a(16)),
            d = m(a(103)),
            s = m(a(120)),
            c = m(a(13));

        function f() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return f = function() {
                return e
            }, e
        }

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1745: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(s.default, {
                name: "fileDownloadsExample"
            }, r.default.createElement(E, null))
        };
        var l = a(8),
            n = p(a(1)),
            r = m(a(0)),
            u = p(a(2)),
            o = m(a(16)),
            i = a(365),
            d = a(30),
            s = p(a(13)),
            c = p(a(4));

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
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0, n.default)(u.default)(() => ({
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 120px)",
                gridColumnGap: 8,
                gridRowGap: 2
            })),
            y = (0, n.default)(u.default)(e => ({
                height: e.double ? 24 : 12
            }));

        function E() {
            const e = "https://pkgstore.datahub.io/datahq/1mb-test/1mb-test_json/data/ca5fd34861cc68b4f519b1c1e15c510e/1mb-test_json.json",
                t = function(e, t, a) {
                    return {
                        ...d.EmptyMsysAttachmentModel,
                        attachmentType: l.AttachmentType.File,
                        attachmentFbid: "file",
                        attachmentIndex: 0,
                        filename: e,
                        filesize: JSON.stringify(t),
                        playableUrl: a
                    }
                }("randomJson.json", 2930, e);
            return r.default.createElement(h, {
                downloadId: t.attachmentFbid,
                downloadUrl: e,
                downloadDurationMs: 4e3
            }, (e, a, l, n, d, s, f) => r.default.createElement(u.default, {
                css: {
                    alignItems: "flex-start"
                }
            }, r.default.createElement(i.FileMessageBase, {
                attachment: t,
                download: e,
                downloadStatus: a,
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !1,
                requestDownload: l,
                cancelDownload: n
            }), r.default.createElement(y, null), r.default.createElement(g, null, r.default.createElement(o.default, {
                "aria-label": "Match Theme Button",
                title: "Match Theme Button",
                telemetryName: "resetButton",
                caption: "Reset",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                onClick: s
            }), " ", r.default.createElement(o.default, {
                "aria-label": "Match Theme Button",
                title: "Match Theme Button",
                telemetryName: "Throw Error",
                caption: "Throw Error",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                onClick: f
            }), r.default.createElement(o.default, {
                "aria-label": "Match Theme Button",
                title: "Match Theme Button",
                telemetryName: "Pause",
                caption: "Pause",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                onClick: d
            })), r.default.createElement(y, {
                double: !0
            }), r.default.createElement(c.default, {
                use: "title"
            }, "Error State"), r.default.createElement(y, null), r.default.createElement(i.FileMessageBase, {
                attachment: t,
                download: {
                    downloadId: "downloadId",
                    downloadUrl: "downloadUrl",
                    running: !1,
                    progress: .5,
                    error: !0
                },
                downloadStatus: "errored",
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !1,
                requestDownload: () => {},
                cancelDownload: () => {}
            })))
        }

        function h(e) {
            const {
                downloadId: t,
                downloadUrl: a,
                downloadDurationMs: l
            } = e, [n, u] = (0, r.useState)(!1), [o, i] = (0, r.useState)(0), [d, s] = (0, r.useState)(!1), [c, f] = (0, r.useState)(!1), [m, p] = (0, r.useState)(null);
            (0, r.useEffect)(() => {
                const e = setInterval(() => {
                    if (n && o >= 1) u(!1), p("completed");
                    else if (n) {
                        const e = 1 / (l / 100),
                            t = Math.min(1, o + e);
                        i(t)
                    }
                }, 100);
                return () => clearInterval(e)
            }, [o, n, c, l]);
            const g = {
                downloadId: t,
                downloadUrl: a,
                running: n,
                progress: o,
                error: d
            };
            return r.default.createElement(r.default.Fragment, null, e.children(g, m, () => {
                u(!0), i(0), s(!1), f(!1), p("running")
            }, () => {
                u(!1), i(0), p(null)
            }, () => {
                f(!0)
            }, () => {
                u(!1), i(0), s(!1), f(!1), p(null)
            }, () => {
                u(!1), i(.5), s(!0), p("errored")
            }))
        }
    },
    1746: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = ["Apples", "Bananas", "Oranges", "Mango"],
                t = ["The quick brown fox jumps over the lay dog!", "Lorem ipsum dolor sit amet, consectetur adipiscing elit!"];
            return n.default.createElement(n.default.Fragment, null, n.default.createElement(r.default, null, "Dropdown with 4 options:"), n.default.createElement("br", null), n.default.createElement(l.default, {
                items: e
            }), n.default.createElement("br", null), n.default.createElement(r.default, null, "Dropdown with 4 options and a callback:"), n.default.createElement("br", null), n.default.createElement(l.default, {
                items: e,
                onSelectionChanged: (e, t) => {
                    alert(`Selected item ${t}: ${e.toString()}`)
                }
            }), n.default.createElement("br", null), n.default.createElement(r.default, null, "Dropdown with 2nd item selected initially:"), n.default.createElement("br", null), n.default.createElement(l.default, {
                items: e,
                initialSelectedIndex: 1
            }), n.default.createElement("br", null), n.default.createElement(r.default, null, "Dropdown with long item names:"), n.default.createElement("br", null), n.default.createElement(l.default, {
                items: t
            }), n.default.createElement("br", null), n.default.createElement(r.default, null, "Extra wide dropdown:"), n.default.createElement("br", null), n.default.createElement(l.default, {
                items: t,
                width: 400
            }), n.default.createElement("br", null), n.default.createElement(r.default, null, "Disabled:"), n.default.createElement("br", null), n.default.createElement(l.default, {
                items: t,
                width: 400,
                disabled: !0
            }), n.default.createElement("br", null), n.default.createElement(r.default, null, "Stock dropdown, for reference:"), n.default.createElement("br", null), n.default.createElement("select", null, n.default.createElement("option", null, "This is a native select element"), n.default.createElement("option", null, "Apples"), n.default.createElement("option", null, "Bananas"), n.default.createElement("option", null, "Grapes"), n.default.createElement("option", null, "Oranges")))
        };
        var l = u(a(160)),
            n = u(a(0)),
            r = u(a(4));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1747: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, o.useRef)(null),
                t = (0, o.useRef)(null),
                [a, l] = (0, o.useState)(!1),
                [n, g] = (0, o.useState)("Hey give me some emojis! 🎉"),
                [y, E] = (0, o.useState)(""),
                k = (0, o.useCallback)(e => {
                    g(t => t + e)
                }, [g]),
                T = (0, o.useCallback)(e => {
                    E(e)
                }, [E]);
            return o.default.createElement(u.Provider, {
                store: (0, s.getExampleStore)()
            }, o.default.createElement(f.default, {
                name: "emojiPickerExample"
            }, o.default.createElement(p.default, {
                use: "body"
            }, "Some examples of Emoji Picker."), o.default.createElement(w, null), o.default.createElement(p.default, {
                use: "body"
            }, "As a popover (toggle by clicking on happy face)."), o.default.createElement(p.default, {
                use: "body"
            }, "The picker can also be styled as desired. Here I give it a"), o.default.createElement(p.default, {
                use: "body"
            }, "box shadow and a carrot at the top."), o.default.createElement(w, null), o.default.createElement(h, null, o.default.createElement(i.default, {
                css: {
                    width: "100%"
                }
            }, o.default.createElement(m.default, {
                value: n,
                onChange: g
            })), o.default.createElement(M, {
                ref: t
            }, o.default.createElement(d.default, {
                "aria-label": "emojiPickerButton",
                telemetryName: "emojiPickerButton",
                icon: r.default,
                onClick: () => l(!a),
                use: d.RoundButtonUse.Transparent
            }))), a && o.default.createElement(c.default, {
                target: t.current,
                placement: "bottom-start",
                ref: e
            }, o.default.createElement(v, {
                onEmojiClick: k
            })), o.default.createElement(w, null), o.default.createElement(w, null), o.default.createElement(p.default, {
                use: "body"
            }, "Emoji Pickers can have a variable width & height."), o.default.createElement(p.default, {
                use: "body"
            }, "The behavior of clicking an emoji can be set to anything."), o.default.createElement(p.default, {
                use: "body-bold"
            }, "(Use a memoized function to avoid re-rendering the emoji"), o.default.createElement(p.default, {
                use: "body-bold"
            }, "grid on every click)"), o.default.createElement(w, null), o.default.createElement(h, null, o.default.createElement(S, {
                onEmojiClick: T,
                width: 288,
                height: 340,
                currentEmoji: "😀",
                showHotlike: !0
            }), o.default.createElement(w, null), o.default.createElement(S, {
                onEmojiClick: T,
                width: 288,
                height: 340,
                pickerType: "compact"
            }), y && o.default.createElement(b, {
                use: "body",
                css: {
                    width: 120,
                    alignText: "center"
                },
                numberOfLines: 2,
                textAlign: "center"
            }, `Yay you clicked ${y}`)), o.default.createElement(w, null)))
        };
        var l = E(a(142)),
            n = E(a(1)),
            r = E(a(299)),
            u = a(11),
            o = y(a(0)),
            i = E(a(2)),
            d = y(a(22)),
            s = a(25),
            c = E(a(91)),
            f = E(a(13)),
            m = E(a(60)),
            p = E(a(4));

        function g() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return g = function() {
                return e
            }, e
        }

        function y(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = g();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const h = (0, n.default)(i.default)({
                flexDirection: "row"
            }),
            b = (0, n.default)(p.default)({
                justifyContent: "center",
                margin: 12
            }),
            M = (0, n.default)(i.default)({
                marginTop: 3,
                marginLeft: -35
            }),
            w = (0, n.default)(i.default)({
                height: 12,
                width: 12
            }),
            v = (0, n.default)(l.default)(e => ({
                boxShadow: "0px 5px 20px 5px rgba(0, 0, 0, 0.3)",
                marginTop: 12,
                ":after": {
                    content: '""',
                    position: "absolute",
                    top: -10,
                    left: 288,
                    width: 0,
                    borderBottom: "10px solid",
                    borderColor: e.theme.select({
                        dark: e.theme.colors.flatBase40,
                        light: e.theme.colors.base10
                    }),
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent"
                }
            })),
            S = (0, n.default)(l.default)(e => ({
                height: e.height,
                width: e.height
            }))
    },
    1761: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, n.useState)(!1), [a, l] = (0, n.useState)(!1);
            if (e) throw new Error("Example error during rendering");
            return (0, n.useEffect)(() => {
                if (a) throw new Error("Example error during effect")
            }), n.default.createElement(r.default, null, n.default.createElement(o.default, {
                name: "errorBoundaryExample"
            }, n.default.createElement(u.default, {
                "aria-label": "Crash During Render",
                telemetryName: "crashDuringRenderButton",
                caption: "Crash during render",
                onClick: () => t(!0)
            }), n.default.createElement(s, null), n.default.createElement(u.default, {
                "aria-label": "Crash During Effect",
                telemetryName: "crashDuringEffectButton",
                caption: "Crash during effect",
                onClick: () => l(!0)
            }), n.default.createElement(s, null), n.default.createElement(u.default, {
                "aria-label": "Crash In Event Handler",
                telemetryName: "crashInEventHandlerButton",
                caption: "Crash in event handler",
                onClick: () => function() {
                    throw new Error("Example error during event processing")
                }()
            })))
        };
        var l = d(a(1)),
            n = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            r = d(a(2)),
            u = d(a(16)),
            o = d(a(13));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, l.default)(r.default)({
            height: 20
        })
    },
    1762: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(i.default, {
                use: "display"
            }, "This is UI Explorer"), r.default.createElement(i.default, {
                use: "body",
                wrapText: !0
            }, "Majority of work is happening here. In dev mode, this window will automatically reload and reflect your changes."), r.default.createElement(c, null), r.default.createElement(i.default, {
                use: "display"
            }, "Where's Messenger?"), r.default.createElement(i.default, {
                use: "body",
                wrapText: !0
            }, "The main app is still a very rough prototype. If you'd like to help dogfooding the messaging experience, go to Profiles → Add new user..."), r.default.createElement(c, null), r.default.createElement(i.default, {
                use: "display"
            }, "Can I use this for Workplace Chat?"), r.default.createElement(i.default, {
                use: "body",
                wrapText: !0
            }, "Yes, but the login flow doesn't work for some people. Enter your work email and personal account password. Don't forget to check the \"Use work account\" box."), r.default.createElement(c, null), r.default.createElement(i.default, {
                use: "display"
            }, "Feedback"), r.default.createElement(i.default, {
                use: "body",
                wrapText: !0
            }, "We are just starting with the application experience, so lots of things are missing or don't work. Please leave your feedback in this Quip doc"), r.default.createElement(f, null), r.default.createElement(o.default, {
                "aria-label": "Provide Feedback",
                use: o.RectangleButtonUse.Primary,
                telemetryName: "provideFeedbackButton",
                onClick: m,
                caption: "Provide Feedback",
                size: o.RectangleButtonSize.Medium
            }))
        };
        var l = s(a(9)),
            n = s(a(1)),
            r = s(a(0)),
            u = s(a(2)),
            o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(16)),
            i = s(a(4));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(u.default)(e => ({
                marginTop: 40,
                marginBottom: 20,
                height: 1,
                width: 200,
                backgroundColor: e.theme.colors.base40
            })),
            f = (0, n.default)(u.default)({
                height: 10
            });

        function m() {
            l.default.platform.openExternalURL("https://fburl.com/dogfoodarchon")
        }
    },
    1763: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(void 0), [a, n] = (0, r.useState)(["cmd+down", "cmd+up", "cmd+i", "q", "Ctrl+A"]), [d, s] = (0, r.useState)("");
            return (0, r.useEffect)(() => {
                const e = e => {
                    a.forEach(a => {
                        const n = (0, l.toKeyEvent)(a);
                        e.metaKey == n.metaKey && e.ctrlKey == n.ctrlKey && e.altKey == n.altKey && e.shiftKey == n.shiftKey && e.key.toLowerCase() == n.key.toLowerCase() && t(a)
                    })
                };
                return window.addEventListener("keydown", e, !0), () => {
                    window.removeEventListener("keydown", e, !0)
                }
            }, [a]), r.default.createElement(c, null, r.default.createElement(i.default, {
                use: "body"
            }, "Type in a new shortcut command in accelerator format."), r.default.createElement(i.default, {
                use: "body"
            }, "Then test it out."), r.default.createElement(i.default, {
                use: "body"
            }, "Your last used shortcut should be marked in bold."), r.default.createElement(f, null), r.default.createElement(o.default, {
                onChange: s,
                onKeyPress: e => {
                    "Enter" == e.nativeEvent.key && (n(a.concat(d)), s(""))
                },
                value: d
            }), r.default.createElement(i.default, {
                use: "display"
            }, "Registered commands:"), r.default.createElement(f, null), r.default.createElement(u.default, null, a.map((t, a) => {
                const l = e == t ? "body-bold" : "body";
                return (r.default.createElement(i.default, {
                    key: a,
                    use: l
                }, t))
            })))
        };
        var l = a(123),
            n = s(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = s(a(2)),
            o = s(a(60)),
            i = s(a(4));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(u.default)({
                flex: 1
            }),
            f = (0, n.default)(u.default)({
                width: 10,
                height: 10
            })
    },
    1764: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = e => {
                l.default.platform.showMessageBox({
                    title: "Message Box",
                    type: e,
                    message: "This is where you can add a message",
                    detail: "This area is for extra information.",
                    buttons: ["This is where you can add an action", "Cancel"]
                })
            };
            return (r.default.createElement(i.default, {
                name: "messageBoxExample"
            }, r.default.createElement(d.default, {
                use: "body"
            }, "Click on the any of the buttons below to bring up examples"), r.default.createElement(d.default, {
                use: "body"
            }, "of the corresponding message box types."), r.default.createElement(m, null), r.default.createElement(f, null, r.default.createElement(o.default, {
                "aria-label": "Info",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                caption: "Info",
                telemetryName: "infoButton",
                onClick: () => e("info")
            }), r.default.createElement(m, null), r.default.createElement(o.default, {
                "aria-label": "None",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                caption: "None",
                telemetryName: "noneButton",
                onClick: () => e("none")
            }), r.default.createElement(m, null), r.default.createElement(o.default, {
                "aria-label": "Error",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                caption: "Error",
                telemetryName: "errorButton",
                onClick: () => e("error")
            }), r.default.createElement(m, null), r.default.createElement(o.default, {
                "aria-label": "Question",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                caption: "Question",
                telemetryName: "questionButton",
                onClick: () => e("question")
            }), r.default.createElement(m, null), r.default.createElement(o.default, {
                "aria-label": "Warning",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Secondary,
                caption: "Warning",
                telemetryName: "warningButton",
                onClick: () => e("warning")
            }))))
        };
        var l = c(a(9)),
            n = c(a(1)),
            r = c(a(0)),
            u = c(a(2)),
            o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(16)),
            i = c(a(13)),
            d = c(a(4));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, n.default)(u.default)(e => ({
                width: 200
            })),
            m = (0, n.default)(u.default)({
                height: 20
            })
    },
    1765: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, o.useState)({}), [a, l] = (0, o.useState)({
                title: "",
                body: "",
                groupID: ""
            });
            return o.default.createElement(i.default, null, o.default.createElement(c.default, {
                name: "noficationsExample"
            }, o.default.createElement(i.default, null, o.default.createElement(d.default, {
                "aria-label": "Show renderer process notification button",
                telemetryName: "showRendererProcesssNotificationButton",
                caption: "Show a renderer process (HTML5) notification",
                onClick: () => function(e) {
                    const t = Math.floor(42 * Math.random()) + 1,
                        a = {};
                    Object.keys(e).forEach(t => {
                        e[t] && (a[t] = e[t])
                    }), new Notification(a.title || "Notification title", {
                        tag: `tag-${t}`,
                        body: `The random number is ${t}`,
                        icon: t % 2 == 0 ? s.default : "",
                        dir: "auto",
                        lang: "",
                        image: "",
                        badge: "",
                        sound: "",
                        vibrate: 0,
                        timestamp: 0,
                        renotify: !1,
                        silent: !1,
                        requireInteraction: !1,
                        data: null,
                        actions: [],
                        ...a
                    }).onclick = () => {
                        console.log(`onClick: ${t}`)
                    }
                }(e)
            }), o.default.createElement(E, {
                options: e,
                optionsToSet: [{
                    property: "title",
                    label: "Title"
                }, {
                    property: "body",
                    label: "Body"
                }, {
                    property: "icon",
                    label: "Icon"
                }, {
                    property: "tag",
                    label: "Tag"
                }],
                onChangeOptions: t
            })), o.default.createElement(i.default, null, o.default.createElement(d.default, {
                "aria-label": "Show custom native notification button",
                telemetryName: "showCustomNativeNotificationButton",
                caption: "Show a custom native notification",
                onClick: () => function(e, t) {
                    const a = {
                            title: "",
                            body: "",
                            groupID: ""
                        },
                        {
                            hasReplyListener: l,
                            ...n
                        } = t;
                    Object.keys(n).forEach(e => {
                        n[e] && (a[e] = t[e])
                    }), l && (a.replyListener = e => {
                        alert(`Response from notification: ${e}`)
                    });
                    a.clickListener = () => {
                        alert("Notification clicked!")
                    }, e.post("test", {
                        ...a
                    })
                }(r.default.notifications.local.native, a)
            }), o.default.createElement(E, {
                options: a,
                optionsToSet: [{
                    property: "title",
                    label: "Title"
                }, {
                    property: "body",
                    label: "Body"
                }, {
                    property: "icon",
                    label: "Icon"
                }, {
                    property: "groupID",
                    label: "GroupID"
                }, {
                    property: "hasReplyListener",
                    label: "Has Reply?",
                    type: "boolean"
                }],
                onChangeOptions: l
            }))))
        };
        var l = m(a(167)),
            n = m(a(60)),
            r = m(a(9)),
            u = m(a(1)),
            o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = f();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            i = m(a(2)),
            d = m(a(16)),
            s = m(a(31)),
            c = m(a(13));

        function f() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return f = function() {
                return e
            }, e
        }

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0, u.default)(i.default)({
                margin: 12,
                flexDirection: "row",
                alignItems: "center"
            }),
            g = u.default.label({
                marginRight: 12,
                width: 100
            }),
            y = (0, u.default)(n.default)(e => ({
                flex: 1,
                backgroundColor: e.theme.colors.base30
            }));

        function E({
            options: e,
            onChangeOptions: t,
            optionsToSet: a
        }) {
            return o.default.createElement(i.default, null, a.map(({
                property: a,
                label: n,
                type: r
            }) => o.default.createElement(p, {
                key: a
            }, "boolean" === r ? o.default.createElement(l.default, {
                label: n,
                checked: e[a],
                onChange: l => {
                    t({
                        ...e,
                        [a]: l
                    })
                }
            }) : o.default.createElement(o.default.Fragment, null, o.default.createElement(g, null, n, ":"), o.default.createElement(y, {
                value: e[a] || "",
                onChange: l => {
                    t({
                        ...e,
                        [a]: l
                    })
                },
                enableClearButton: !0
            })))))
        }
    },
    1766: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)({});
            return (0, l.default)(e), r.default.createElement(c, null, r.default.createElement(i.default, {
                name: "windowParamsExample"
            }, r.default.createElement(o.default, {
                "aria-label": "fixed300x600",
                caption: "Fixed 300×600",
                telemetryName: "fixed300x600",
                onClick: () => t({
                    width: 400,
                    height: 400,
                    resizable: !1,
                    maximizable: !1
                })
            }), r.default.createElement(f, null), r.default.createElement(o.default, {
                "aria-label": "resizable800x600",
                caption: "Resizable 800×600",
                telemetryName: "resizable800x600",
                onClick: () => t({
                    width: 800,
                    height: 600,
                    resizable: !0,
                    maximizable: !0
                })
            }), r.default.createElement(f, null), r.default.createElement(o.default, {
                "aria-label": "resizable800x800",
                caption: "Resizable 800×800",
                telemetryName: "resizable800x800",
                onClick: () => t({
                    width: 850,
                    height: 600,
                    resizable: !0,
                    maximizable: !0
                })
            })))
        };
        var l = s(a(247)),
            n = s(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = s(a(2)),
            o = s(a(16)),
            i = s(a(13));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(u.default)({
                flex: 1
            }),
            f = (0, n.default)(u.default)({
                flexBasis: 10
            })
    },
    1767: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, u.useState)([]), a = a => t(e.filter(e => e !== a));
            return (0, n.default)(e => t(t => t.concat(e))), u.default.createElement(o.default, null, u.default.createElement(i.default, {
                name: "drapDropExample"
            }, u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "body"
            }, "Drag any media files")), e.length > 0 && u.default.createElement(m, null, e.map((e, t) => u.default.createElement(l.default, {
                key: t,
                file: e,
                onRemove: a
            })))))
        };
        var l = c(a(568)),
            n = c(a(562)),
            r = c(a(1)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = c(a(2)),
            i = c(a(13)),
            d = c(a(4));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, r.default)(o.default)({
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10
            }),
            m = (0, r.default)(o.default)(e => ({
                alignItems: "flex-start",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "10px"
            }))
    },
    1768: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(null);
            return (r.default.createElement(u.default, null, r.default.createElement(i.default, {
                name: "fileSelectorExample"
            }, r.default.createElement(m, null, r.default.createElement(d.default, {
                use: "display"
            }, "Image/video selector")), r.default.createElement(m, null, r.default.createElement(l.default, {
                fileTypes: ["image/*", "video/*"],
                multiple: !0,
                onFilesSelected: t
            }, e => r.default.createElement(o.default, {
                "aria-label": "Open File Selector",
                telemetryName: "openFileSelectorButton",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Primary,
                caption: "Upload image(s) or video(s)",
                onClick: e
            }))), r.default.createElement(m, null, r.default.createElement(d.default, {
                use: "title"
            }, "Selected files:")), e && Array.from(e).map(e => {
                const t = e.name;
                return (r.default.createElement(d.default, {
                    key: t,
                    use: "body"
                }, t))
            }))))
        };
        var l = f(a(254)),
            n = f(a(1)),
            r = c(a(0)),
            u = f(a(2)),
            o = c(a(16)),
            i = f(a(13)),
            d = f(a(4));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = s();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, n.default)(u.default)({
            flexDirection: "row",
            paddingBottom: 10
        })
    },
    1769: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(o.default, {
                use: "body",
                wrapText: !0
            }, "Focus the first element, and then use the up/down arrows to focus subsequent elements"), r.default.createElement(l.default, null, r.default.createElement(s, {
                onActivate: null
            }), r.default.createElement(s, {
                onActivate: null
            }), r.default.createElement(s, {
                onActivate: null
            })))
        };
        var l = d(a(33)),
            n = d(a(1)),
            r = d(a(0)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(2)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.FocusableView)(e => ({
            width: 50,
            height: 50,
            backgroundColor: e.theme.colors.base50,
            margin: 10
        }))
    },
    1770: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(s, null, r.default.createElement(l.default, {
                title: "Something went wrong",
                subtitle1: "Our engineers know about the problem and are working to fix it!",
                subtitle2: " You can restart the application to try again",
                icon: o.default,
                cta: r.default.createElement(i.default, {
                    "aria-label": "Restart application",
                    telemetryName: "restart",
                    caption: "RESTART"
                })
            }))
        };
        var l = d(a(255)),
            n = d(a(1)),
            r = d(a(0)),
            u = d(a(2)),
            o = d(a(119)),
            i = d(a(16));

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.default)({
            height: 500
        })
    },
    1771: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, u.useTheme)();
            return (n.default.createElement(r.default, null, n.default.createElement(o.default, {
                use: "body"
            }, 'To use icons, directly import an SVG from the "assets/icons" folder (aliased as Icons) and render the result in React'), n.default.createElement(o.default, {
                use: "subtext",
                code: !0
            }, "import React from 'react';"), n.default.createElement(o.default, {
                use: "subtext",
                code: !0
            }, "import Camcorder from 'icons/camcorder.svg';"), n.default.createElement(o.default, {
                use: "subtext",
                code: !0
            }, "import {themedIcon} from '../icons/iconWithTheme';"), n.default.createElement(o.default, {
                use: "subtext",
                code: !0
            }, "return themedIcon(", "<Camcorder size={25} />", ");"), n.default.createElement(l.default, {
                size: 25,
                color: e.semanticColors.textPrimary
            })))
        };
        var l = i(a(78)),
            n = i(a(0)),
            r = i(a(2)),
            u = a(6),
            o = i(a(4));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1772: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(!1);
            return (r.default.createElement(u.default, null, r.default.createElement(i.default, {
                name: "layerExample"
            }, r.default.createElement(o.default, {
                "aria-label": "Render Layer",
                use: o.RectangleButtonUse.Primary,
                size: o.RectangleButtonSize.Medium,
                telemetryName: "renderInLayerToggle",
                onClick: () => t(!e),
                caption: e ? "Stop rendering in layer" : "Render in layer"
            }), e ? r.default.createElement(l.default, null, r.default.createElement(m, null, r.default.createElement(d.default, {
                use: "body"
            }, "Now rendering in a layer!"))) : r.default.createElement(m, null, r.default.createElement(d.default, {
                use: "body"
            }, "Rendering normally")))))
        };
        var l = f(a(175)),
            n = f(a(1)),
            r = c(a(0)),
            u = f(a(2)),
            o = c(a(16)),
            i = f(a(13)),
            d = f(a(4));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = s();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, n.default)(u.default)(e => ({
            backgroundColor: e.theme.colors.base40,
            width: 300,
            height: 30,
            marginBottom: 10,
            padding: 5
        }))
    },
    1773: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(n.default, {
                style: {
                    margin: 12
                }
            }, r.default.createElement(l.default, {
                style: {
                    background: "yellow"
                }
            }, "Default Row, 1 column")), r.default.createElement(n.default, {
                width: "100%",
                justify: "space-between",
                style: {
                    margin: 12
                }
            }, r.default.createElement(l.default, {
                styleFirstItem: {
                    background: "pink",
                    flexGrow: 2
                }
            }, "Row"), r.default.createElement(l.default, {
                style: {
                    background: "lime"
                }
            }, "3 columns"), r.default.createElement(l.default, {
                style: {
                    background: "lime"
                }
            }, "space-between")), r.default.createElement(n.default, {
                width: "50%",
                justify: "space-evenly",
                style: {
                    margin: 12,
                    padding: 12,
                    background: "#eec"
                }
            }, r.default.createElement(l.default, {
                style: {
                    background: "cyan"
                },
                grow: 2
            }, "Row"), r.default.createElement(l.default, {
                style: {
                    background: "cyan"
                },
                grow: 1
            }, "50%")))
        };
        var l = o(a(103)),
            n = o(a(120)),
            r = o(a(0)),
            u = o(a(2));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1774: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return n.default.createElement(r.default, null, n.default.createElement(u.default, {
                use: "body",
                wrapText: !0,
                css: {
                    display: "block"
                }
            }, n.default.createElement(l.default, {
                onClick: () => alert("Link clicked!")
            }, "This link is actually a button!")), n.default.createElement(u.default, {
                use: "headline",
                wrapText: !0,
                css: {
                    display: "block"
                }
            }, n.default.createElement(l.default, {
                onClick: () => alert("Link clicked!")
            }, "Links"), " inherit the font size/color of their parents"), n.default.createElement(u.default, {
                use: "body",
                wrapText: !0,
                css: {
                    display: "block"
                }
            }, n.default.createElement(l.default, {
                href: "https://www.example.com"
            }, "Links can also open websites in the user's default web browser")), n.default.createElement(u.default, {
                use: "body",
                wrapText: !0,
                css: {
                    textDecoration: "none"
                }
            }, n.default.createElement(l.default, {
                onClick: () => alert("custom styled link clicked!")
            }, "This link has no underline! (custom styling)")))
        };
        var l = o(a(116)),
            n = o(a(0)),
            r = o(a(2)),
            u = o(a(4));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1775: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(r.default.Fragment, null, r.default.createElement(i, null, r.default.createElement(l.default, {
                height: 40
            })), r.default.createElement(i, null, r.default.createElement(l.default, {
                height: 40,
                useSmallDot: !0
            })))
        };
        var l = o(a(273)),
            n = o(a(1)),
            r = o(a(0)),
            u = o(a(2));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0, n.default)(u.default)({
            flexDirection: "row"
        })
    },
    1776: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(r.default.Fragment, null, r.default.createElement(d, null, r.default.createElement(l.default, {
                size: l.SpinnerSize.XSmall
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Small
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Medium
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Large
            })), r.default.createElement(d, null, r.default.createElement(l.default, {
                size: l.SpinnerSize.XSmall,
                delay: 1e3
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Small,
                delay: 1e3
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Medium,
                delay: 1e3
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Large,
                delay: 1e3
            })), r.default.createElement(d, null, r.default.createElement(l.default, {
                size: l.SpinnerSize.XSmall,
                label: "Loading..."
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Small,
                label: "Loading..."
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Medium,
                label: "Loading..."
            }), r.default.createElement(l.default, {
                size: l.SpinnerSize.Large,
                label: "Loading..."
            })))
        };
        var l = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(82)),
            n = o(a(1)),
            r = o(a(0)),
            u = o(a(2));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }
        const d = (0, n.default)(u.default)({
            flexDirection: "row",
            maxHeigh: 250,
            paddingTop: 10,
            paddingBottom: 10
        })
    },
    1777: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, u.useContext)(o.UIExplorerEventContext);
            return (u.default.createElement(u.default.Fragment, null, u.default.createElement(s.default, {
                name: "loggingExample"
            }, u.default.createElement(g, null, u.default.createElement(s.default, {
                name: "innerLogingExample"
            }, u.default.createElement(d.default, {
                "aria-label": "Log Event",
                size: d.RectangleButtonSize.Medium,
                caption: "Log Event",
                use: d.RectangleButtonUse.Primary,
                onClick: () => {},
                telemetryName: "button_logEventsTest"
            })), u.default.createElement(y, null), u.default.createElement(s.default, {
                name: "otherInnerLoggingExample"
            }, u.default.createElement(d.default, {
                "aria-label": "Log Event",
                size: d.RectangleButtonSize.Medium,
                use: d.RectangleButtonUse.Secondary,
                caption: "Log Event 2",
                onClick: () => {},
                telemetryName: "button_logEventsTest_2"
            })))), u.default.createElement(E, null), u.default.createElement(c.default, {
                use: "title"
            }, "Latest UIExplorer Logging Events:"), u.default.createElement(E, null), u.default.createElement(i.default, null, e.reverse().map((e, t) => u.default.createElement(c.default, {
                css: {
                    opacity: 0 == t ? 1 : .6
                },
                wrapText: !0,
                key: t,
                code: !0
            }, e))), u.default.createElement(E, null), u.default.createElement(c.default, {
                use: "title"
            }, "Native Logging From JS:"), u.default.createElement(g, null, u.default.createElement(d.default, {
                "aria-label": "Native log",
                size: d.RectangleButtonSize.Medium,
                caption: "DBG",
                use: d.RectangleButtonUse.Primary,
                onClick: () => {
                    n.default.logging.logMessage({
                        message: "Hello from JS",
                        file: "/full/path/to/logging.example.tsx",
                        line: 88,
                        level: l.LogLevel.DBG
                    })
                },
                telemetryName: "button_logNativeDebug"
            }), u.default.createElement(y, null), u.default.createElement(d.default, {
                "aria-label": "Native log",
                size: d.RectangleButtonSize.Medium,
                caption: "INFO",
                use: d.RectangleButtonUse.Primary,
                onClick: () => {
                    n.default.logging.logMessage({
                        message: "Hello from JS",
                        file: "/full/path/to/logging.example.tsx",
                        line: 103,
                        level: l.LogLevel.INFO
                    })
                },
                telemetryName: "button_logNativeInfo"
            }), u.default.createElement(y, null), u.default.createElement(d.default, {
                "aria-label": "Native log",
                size: d.RectangleButtonSize.Medium,
                caption: "WARN",
                use: d.RectangleButtonUse.Primary,
                onClick: () => {
                    n.default.logging.logMessage({
                        message: "Hello from JS",
                        file: "/full/path/to/logging.example.tsx",
                        line: 118,
                        level: l.LogLevel.WARN
                    })
                },
                telemetryName: "button_logNativeWarn"
            }), u.default.createElement(y, null), u.default.createElement(d.default, {
                "aria-label": "Native log",
                size: d.RectangleButtonSize.Medium,
                caption: "ERR",
                use: d.RectangleButtonUse.Primary,
                onClick: () => {
                    n.default.logging.logMessage({
                        message: "Hello from JS",
                        file: "/full/path/to/logging.example.tsx",
                        line: 133,
                        level: l.LogLevel.ERR
                    })
                },
                telemetryName: "button_logNativeErr"
            }), u.default.createElement(y, null), u.default.createElement(d.default, {
                "aria-label": "Native log",
                size: d.RectangleButtonSize.Medium,
                caption: "DFATAL",
                use: d.RectangleButtonUse.Secondary,
                onClick: () => {
                    n.default.logging.logMessage({
                        message: "Hello from JS",
                        file: "/full/path/to/logging.example.tsx",
                        line: 148,
                        level: l.LogLevel.DFATAL
                    })
                },
                telemetryName: "button_logNativeDfatal"
            }), u.default.createElement(y, null), u.default.createElement(d.default, {
                "aria-label": "Native log",
                size: d.RectangleButtonSize.Medium,
                caption: "FATAL",
                use: d.RectangleButtonUse.Secondary,
                onClick: () => {
                    n.default.logging.logMessage({
                        message: "Hello from JS",
                        file: "/full/path/to/logging.example.tsx",
                        line: 172,
                        level: l.LogLevel.FATAL
                    })
                },
                telemetryName: "button_logNativeFatal"
            })), u.default.createElement(E, null), u.default.createElement(i.default, null, u.default.createElement(c.default, {
                use: "title"
            }, "Full native logging config:"), u.default.createElement(h, null, JSON.stringify(JSON.parse(n.default.logging.getFullLoggingConfig()), void 0, 4)))))
        };
        var l = a(1778),
            n = p(a(9)),
            r = p(a(1)),
            u = m(a(0)),
            o = a(529),
            i = p(a(2)),
            d = m(a(16)),
            s = p(a(13)),
            c = p(a(4));

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
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0, r.default)(i.default)({
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center"
            }),
            y = (0, r.default)(i.default)({
                width: 10
            }),
            E = (0, r.default)(i.default)({
                height: 20
            }),
            h = (0, r.default)(i.default)(e => ({
                maxWidth: "100%",
                color: e.color || e.theme.semanticColors.textPrimary,
                fontFamily: "Menlo, Consolas",
                whiteSpace: "pre"
            }))
    },
    1778: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var l = a(1779);
        Object.keys(l).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return l[e]
                }
            })
        }));
        var n = a(1780);
        Object.keys(n).forEach((function(e) {
            "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
                enumerable: !0,
                get: function() {
                    return n[e]
                }
            })
        }))
    },
    1779: function(e, t, a) {
        "use strict";
        let l;
        Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LogLevel = void 0, t.LogLevel = l,
            function(e) {
                e[e.DBG = 1e3] = "DBG", e[e.INFO = 2e3] = "INFO", e[e.WARN = 3e3] = "WARN", e[e.ERR = 4e3] = "ERR", e[e.CRITICAL = 5e3] = "CRITICAL", e[e.DFATAL = 2147483646] = "DFATAL", e[e.FATAL = 2147483647] = "FATAL"
            }(l || (t.LogLevel = l = {}))
    },
    1780: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.loadAndWrapLogging = function(e, t) {
            const a = require(n.default.resolve(t, "logging.node"));
            return a.initializeLogging(e), Object.freeze({
                getFullLoggingConfig: a.getFullLoggingConfig,
                setFullLoggingConfig: a.setFullLoggingConfig,
                logMessage: a.logMessage,
                flushNativeLogFiles: a.flushNativeLogFiles
            })
        };
        var l, n = (l = a(227)) && l.__esModule ? l : {
            default: l
        }
    },
    1781: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(o.default, null, u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Header"), u.default.createElement(l.Header, {
                logo: i.default
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Info notice"), u.default.createElement(l.InfoNotice, {
                text: "Example info notice text!"
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Warning notice"), u.default.createElement(l.WarningNotice, {
                text: "Example warning notice text!"
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Custom notice"), u.default.createElement(l.Notice, {
                icon: e => u.default.createElement(r.default, e),
                text: "Custom notice with different icon"
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Primary button"), u.default.createElement(l.PrimaryButton, {
                "aria-label": "foo",
                telemetryName: "foo",
                caption: "Login"
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Secondary button"), u.default.createElement(l.SecondaryButton, {
                "aria-label": "",
                telemetryName: "foo",
                caption: "Create New Account"
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Back button"), u.default.createElement(l.BackButton, {
                disabled: !1,
                onClick: () => {}
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Input"), u.default.createElement(l.LoginFormTextInput, {
                onChange: () => {}
            })), u.default.createElement(f, null, u.default.createElement(d.default, {
                use: "title"
            }, "Credentials Inputs"), u.default.createElement(l.FormContainer, null, u.default.createElement(l.CredentialsFields, {
                isAuthenticating: !1
            }))))
        };
        var l = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(198)),
            n = s(a(1)),
            r = s(a(1782)),
            u = s(a(0)),
            o = s(a(2)),
            i = s(a(119)),
            d = s(a(4));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }
        const f = (0, n.default)(o.default)({
            marginTop: 12,
            marginBottom: 12
        })
    },
    1782: function(e, t, a) {
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
                d: "M28.28 20.25l-7.061-5.884a1.012 1.012 0 01-.36-.702C20.52 9.184 19.567 5.5 18 5.5s-2.52 3.683-2.86 8.164c-.02.273-.149.527-.359.702L7.72 20.25A2 2 0 007 21.787v.967c0 .527.53.89 1.022.699l6.983-2.716a.25.25 0 01.34.208l.556 5.564a.75.75 0 01-.41.746l-2.076 1.038a.75.75 0 00-.415.67v.787c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-.787a.75.75 0 00-.415-.67l-2.075-1.038a.75.75 0 01-.411-.745l.556-5.565a.25.25 0 01.34-.208l6.983 2.716a.75.75 0 001.022-.7v-.966a2 2 0 00-.72-1.537z"
            }))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    1783: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(i, null, r.default.createElement(n.default, {
                isAuthenticating: !1,
                onLogin: () => {},
                email: "user@foo.com"
            })))
        };
        var l = o(a(1)),
            n = o(a(1784)),
            r = o(a(0)),
            u = o(a(2));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0, l.default)(u.default)(e => ({
            width: 460,
            height: 660,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: e.theme.colors.base80
        }))
    },
    1784: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            const t = l.default._("Create New Account", null, {
                    hk: "EfV09"
                }).toString(),
                a = l.default._("Forgot your password?", null, {
                    hk: "2ymhEg"
                }).toString(),
                {
                    onLogin: r
                } = e,
                i = (0, o.useCallback)((e, t) => {
                    r(e, t, !1)
                }, [r]),
                f = (0, o.useCallback)(() => n.default.platform.openRegistrationURL(), []);
            return o.default.createElement(u.Container, null, e.onBack && o.default.createElement(u.NavigationButtons, {
                disableForward: !0,
                disableBack: !e.onBack,
                onBack: e.onBack
            }), o.default.createElement(u.Header, {
                logo: d.default
            }), o.default.createElement(u.FormContainer, null, o.default.createElement(u.CredentialsFields, {
                initialEmail: e.email,
                isAuthenticating: e.isAuthenticating,
                onLogin: i
            })), o.default.createElement(u.NoticesContainer, null, o.default.createElement(g, null, o.default.createElement(c.default, {
                use: "body",
                wrapText: !0
            }, o.default.createElement(s.default, {
                telemetryName: "forgotPasswordLink",
                href: "https://www.facebook.com/recover/initiate",
                css: {
                    textDecoration: "none"
                }
            }, a))), e.showErrorWarning && o.default.createElement(u.WarningNotice, {
                text: l.default._("Oops! Something went wrong signing in. Please try again.", null, {
                    hk: "1ZyyF0"
                })
            })), o.default.createElement(u.FooterContainer, null, o.default.createElement(y, null, o.default.createElement(u.SecondaryButton, {
                "aria-label": t,
                telemetryName: "createAccountButton",
                caption: t,
                onClick: f
            }))))
        };
        var l = p(a(5)),
            n = p(a(9)),
            r = p(a(1)),
            u = m(a(198)),
            o = m(a(0)),
            i = p(a(2)),
            d = p(a(119)),
            s = p(a(116)),
            c = p(a(4));

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
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0, r.default)(i.default)({
                alignItems: "center",
                marginTop: 22,
                marginLeft: 8,
                marginBottom: "auto"
            }),
            y = (0, r.default)(i.default)({
                paddingLeft: 10,
                paddingRight: 10
            })
    },
    1785: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(l.default, {
                isCompactMode: !1,
                activateMasterView: () => {}
            }, r.default.createElement(o.default, {
                threadName: f.threadName,
                threadType: f.threadType,
                presence: i.EmptyMsysThreadPresenceModel,
                threadPictureUrl: f.threadPicture.primaryUrl,
                participants: m,
                participantStatus: i.EmptyUserStatusInfo,
                viewerId: "C"
            })), r.default.createElement(l.default, {
                isCompactMode: !0,
                activateMasterView: () => {}
            }, r.default.createElement(o.default, {
                threadName: f.threadName,
                presence: i.EmptyMsysThreadPresenceModel,
                threadType: f.threadType,
                threadPictureUrl: f.threadPicture.primaryUrl,
                participants: m,
                participantStatus: i.EmptyUserStatusInfo,
                viewerId: "C"
            })))
        };
        var l = c(a(372)),
            n = a(8),
            r = c(a(0)),
            u = c(a(2)),
            o = c(a(253)),
            i = a(30),
            d = c(a(31)),
            s = c(a(43));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = {
                ...i.EmptyInboxModel,
                threadName: "James Neumann",
                threadType: n.ThreadType.OnetoOne,
                threadPicture: {
                    primaryUrl: d.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            },
            m = [{
                ...i.EmptyMsysParticipantModel,
                profilePictureUrl: d.default,
                contactId: "A"
            }, {
                ...i.EmptyMsysParticipantModel,
                profilePictureUrl: s.default,
                contactId: "B"
            }]
    },
    1788: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return d.default.createElement(i.Provider, {
                store: (0, r.getExampleStore)()
            }, d.default.createElement(g.default, {
                use: "title"
            }, "Message Bubble Types"), d.default.createElement(s.default, null, d.default.createElement(c.default, {
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)(n.shortMessage),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)(n.spacingMessage),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)(n.veryLongMessage),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)(n.adminMessage),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [m.EmptyMsysAttachmentModel]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0,
                    isUnsent: !0
                }, [n.removedMessageAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(f.default, {
                isFirst: !0,
                attachment: n.audioAttachment,
                isLast: !0,
                isSenderViewer: !0,
                duration: 1,
                sourceUrl: "https://www.redringtones.com/wp-content/uploads/2017/03/kim-possible-text-tone.mp3",
                attachmentFbid: "1",
                threadKey: "1"
            }), d.default.createElement(f.default, {
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !0,
                attachment: n.audioAttachment,
                duration: 59,
                sourceUrl: "https://www.redringtones.com/wp-content/uploads/2016/10/game-of-thrones-ringtone.mp3",
                attachmentFbid: "1",
                threadKey: "1"
            }), d.default.createElement(f.default, {
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !1,
                attachment: n.audioAttachment,
                duration: 1,
                sourceUrl: "https://www.redringtones.com/wp-content/uploads/2017/03/kim-possible-text-tone.mp3",
                attachmentFbid: "1",
                threadKey: "1"
            }), d.default.createElement(f.default, {
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !1,
                attachment: n.audioAttachment,
                duration: 59,
                sourceUrl: "https://www.redringtones.com/wp-content/uploads/2016/10/game-of-thrones-ringtone.mp3",
                attachmentFbid: "1",
                threadKey: "1"
            }), d.default.createElement(c.default, {
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.videoAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)(n.emojiMessage),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.imageAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.stickerAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                showReactionPicker: !1,
                canSeeDelivery: !0,
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.gifAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.imageAttachment, n.gifAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)(n.fileMessage, [n.fileAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    isAdminMessage: !0,
                    text: "You missed a call from Helen."
                }),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.XMAAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.audioAttachment]),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [n.audioAttachment]),
                isSenderViewer: !1,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    text: "reply",
                    replySourceId: "0",
                    replySourceType: u.ReplySourceType.Message,
                    replyMessageText: "hello"
                }, []),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    text: "reply",
                    replySourceId: "0",
                    replySourceType: u.ReplySourceType.Message,
                    replyMessageText: "hello"
                }, []),
                isSenderViewer: !1,
                isWindowFocused: !0
            }), d.default.createElement(c.default, {
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, r.makeMessage)({
                    ...m.EmptyMsysMessageModel,
                    text: "reply",
                    replySourceId: "0",
                    replyAttachmentType: u.ReplyAttachmentType.Image,
                    replySourceType: u.ReplySourceType.Message,
                    replyMedia: {
                        primaryUrl: "https://i.redd.it/21vjpnyyevl21.jpg",
                        expiryTimestamp: 0,
                        fallbackUrl: ""
                    }
                }, []),
                isSenderViewer: !0,
                isWindowFocused: !0
            }), d.default.createElement(l.default, {
                messageOTIDs: ["forwardedImageMessage"],
                threadKey: "2",
                isSenderViewer: !0,
                parentThreadKey: u.ThreadFolderParentKey.Inbox,
                replySnippetType: u.MessageReplySourceType.Forward,
                replySnippet: "You forwarded an image",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: o.RtcStackStatus.Running,
                userId: "1",
                groupMessageInfo: {
                    participantId: "a",
                    participantName: "Person A",
                    fullName: "Person A",
                    participantIsAdmin: !1,
                    profilePictureUrl: p.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }), d.default.createElement(l.default, {
                messageOTIDs: ["forwardedTextMessage"],
                threadKey: "2",
                isSenderViewer: !1,
                parentThreadKey: u.ThreadFolderParentKey.Inbox,
                replySnippetType: u.MessageReplySourceType.Forward,
                replySnippet: "Helen forwarded a message",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: o.RtcStackStatus.Running,
                userId: "1",
                groupMessageInfo: {
                    participantId: "a",
                    participantName: "Person A",
                    fullName: "Person A",
                    participantIsAdmin: !1,
                    profilePictureUrl: p.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            })))
        };
        var l = y(a(125)),
            n = a(134),
            r = a(25),
            u = a(8),
            o = a(49),
            i = a(11),
            d = y(a(0)),
            s = y(a(2)),
            c = y(a(172)),
            f = y(a(542)),
            m = a(30),
            p = y(a(31)),
            g = y(a(4));

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1795: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return d.default.createElement(s.default, null, d.default.createElement(i.Provider, {
                store: (0, l.getExampleStore)()
            }, d.default.createElement(m.default, {
                use: "title"
            }, "Delivery Status"), d.default.createElement(s.default, null, [r.DeliveryStatus.Sending, r.DeliveryStatus.Sent, r.DeliveryStatus.Delivered, r.DeliveryStatus.Error, r.DeliveryStatus.Muted].map(e => d.default.createElement(g, {
                key: e
            }, d.default.createElement(f.default, {
                status: e
            })))), d.default.createElement(s.default, null, d.default.createElement(c.default, {
                messageOTIDs: ["emojiTextMessage", "sendingMessage", "errorMessage"],
                threadKey: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                participants: [],
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: u.RtcStackStatus.Running,
                userId: "1"
            }))))
        };
        var l = a(25),
            n = a(8),
            r = a(133),
            u = a(49),
            o = p(a(1)),
            i = a(11),
            d = p(a(0)),
            s = p(a(2)),
            c = p(a(125)),
            f = p(a(232)),
            m = p(a(4));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0, o.default)(s.default)({
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10
        })
    },
    1796: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return o.default.createElement(i.default, null, o.default.createElement(u.Provider, {
                store: (0, l.getGroupExampleStore)()
            }, o.default.createElement(f.default, {
                use: "title"
            }, "Group"), o.default.createElement(i.default, null, o.default.createElement(d.default, {
                messageOTIDs: ["shortMessage", "shortMessage", "stickerMessage", "longMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "a",
                    participantName: "Person A",
                    fullName: "Person A",
                    participantIsAdmin: !1,
                    profilePictureUrl: s.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }), o.default.createElement(d.default, {
                messageOTIDs: ["shortMessage", "shortMessage", "shortMessage", "attachmentMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "b",
                    participantName: "Person B",
                    fullName: "Person B",
                    participantIsAdmin: !1,
                    profilePictureUrl: c.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }), o.default.createElement(d.default, {
                messageOTIDs: ["adminMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox
            }), o.default.createElement(d.default, {
                messageOTIDs: ["shortMessage", "veryLongMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "b",
                    participantName: "Person B",
                    fullName: "Person B",
                    participantIsAdmin: !1,
                    profilePictureUrl: c.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }), o.default.createElement(d.default, {
                messageOTIDs: ["adminViewerChangedColorsMessage"],
                threadKey: "2",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), o.default.createElement(d.default, {
                messageOTIDs: ["mentionPersonAMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "a",
                    participantName: "Person A",
                    fullName: "Person A",
                    participantIsAdmin: !1,
                    profilePictureUrl: s.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }), o.default.createElement(d.default, {
                messageOTIDs: ["mentionPersonBMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "b",
                    participantName: "Person B",
                    fullName: "Person B",
                    participantIsAdmin: !1,
                    profilePictureUrl: c.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }), o.default.createElement(d.default, {
                messageOTIDs: ["mentionPersonBAndUrlMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "a",
                    participantName: "Person A",
                    fullName: "Person A",
                    participantIsAdmin: !1,
                    profilePictureUrl: s.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }))))
        };
        var l = a(25),
            n = a(8),
            r = a(49),
            u = a(11),
            o = m(a(0)),
            i = m(a(2)),
            d = m(a(125)),
            s = m(a(31)),
            c = m(a(43)),
            f = m(a(4));

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1797: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return i.default.createElement(o.Provider, {
                store: (0, l.getExampleStore)()
            }, i.default.createElement(f.default, {
                use: "title"
            }, "Grouped"), i.default.createElement(p, null), i.default.createElement(d.default, null, i.default.createElement(s.default, {
                messageOTIDs: ["shortMessage", "rtcCallMessage1", "rtcCallMessage2", "rtcCallMessage3", "rtcCallMessage4", "shortMessage"],
                threadKey: "1",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "b",
                    participantName: "Person B",
                    fullName: "Person B",
                    participantIsAdmin: !1,
                    profilePictureUrl: c.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                },
                messagesToIgnore: new Set(["rtcCallMessage1", "rtcCallMessage2"]),
                duplicateMessageCount: {
                    rtcCallMessage3: 2
                }
            })), i.default.createElement(f.default, {
                use: "title"
            }, "Not Grouped"), i.default.createElement(f.default, {
                use: "caption"
            }, "**Note the timestamps**"), i.default.createElement(p, null), i.default.createElement(d.default, null, i.default.createElement(s.default, {
                messageOTIDs: ["shortMessage", "rtcCallMessage1", "rtcCallMessage2", "rtcCallMessage3", "rtcCallMessage4", "shortMessage"],
                threadKey: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1",
                groupMessageInfo: {
                    participantId: "b",
                    participantName: "Person B",
                    fullName: "Person B",
                    participantIsAdmin: !1,
                    profilePictureUrl: c.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            })))
        };
        var l = a(25),
            n = a(8),
            r = a(49),
            u = m(a(1)),
            o = a(11),
            i = m(a(0)),
            d = m(a(2)),
            s = m(a(125)),
            c = m(a(31)),
            f = m(a(4));

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0, u.default)(d.default)({
            height: 10
        })
    },
    1798: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return o.default.createElement(i.default, null, o.default.createElement(u.Provider, {
                store: (0, l.getExampleStore)()
            }, o.default.createElement(s.default, {
                use: "title"
            }, "P2P"), o.default.createElement(i.default, null, o.default.createElement(d.default, {
                messageOTIDs: ["shortMessage", "emojiTextMessage", "stickerMessage", "emojiMessage", "longMessage"],
                threadKey: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), o.default.createElement(d.default, {
                messageOTIDs: ["shortMessage", "shortMessage", "shortMessage", "emojiMessage", "attachmentMessage"],
                threadKey: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), o.default.createElement(d.default, {
                messageOTIDs: ["adminMessage"],
                threadKey: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), o.default.createElement(d.default, {
                messageOTIDs: ["shortMessage", "veryLongMessage"],
                threadKey: "1",
                isSenderViewer: !0,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), o.default.createElement(d.default, {
                messageOTIDs: ["shortMessage"],
                threadKey: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), o.default.createElement(d.default, {
                messageOTIDs: ["urlMessage"],
                threadKey: "1",
                isSenderViewer: !1,
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }))))
        };
        var l = a(25),
            n = a(8),
            r = a(49),
            u = a(11),
            o = c(a(0)),
            i = c(a(2)),
            d = c(a(125)),
            s = c(a(4));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1799: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return o.default.createElement(u.Provider, {
                store: (0, n.getExampleStore)()
            }, o.default.createElement(c.default, {
                use: "title"
            }, "RTC XMAs"), o.default.createElement(c.default, {
                use: "caption"
            }, "Passes GK: rtc_lightspeed_sync_call_log_xma"), o.default.createElement(m, null), o.default.createElement(i.default, null, [l.incomingMissedAudio, l.incomingMissedAudioButton, l.incomingMissedVideo, l.incomingMissedVideoButton, l.incomingEndedAudio, l.incomingEndedVideo, l.outgoingMissedAudio, l.outgoingMissedVideo, l.outgoingEndedAudio, l.outgoingEndedVideo, l.groupAudio, l.groupVideo].map((e, t) => o.default.createElement(o.default.Fragment, null, o.default.createElement(m, null), o.default.createElement(d.default, {
                key: t,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, n.makeMessage)({
                    ...s.EmptyMsysMessageModel,
                    hasAttachment: !0
                }, [e]),
                isSenderViewer: t > 5,
                isRtcReady: !0,
                isWindowFocused: !0
            })))), o.default.createElement(m, null), o.default.createElement(c.default, {
                use: "title"
            }, "RTC Messages"), o.default.createElement(c.default, {
                use: "caption"
            }, "Fails GK: rtc_lightspeed_sync_call_log_xma"), o.default.createElement(i.default, null, l.RTCMessages.map((e, t) => o.default.createElement(o.default.Fragment, null, o.default.createElement(m, null), o.default.createElement(d.default, {
                key: t,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isFirst: !0,
                isLast: !0,
                messageReactions: [],
                message: (0, n.makeMessage)({
                    ...s.EmptyMsysMessageModel,
                    isAdminMessage: !0,
                    text: e
                }),
                isWindowFocused: !0,
                isSenderViewer: t < 2 || t > 4
            })))))
        };
        var l = a(134),
            n = a(25),
            r = f(a(1)),
            u = a(11),
            o = f(a(0)),
            i = f(a(2)),
            d = f(a(172)),
            s = a(30),
            c = f(a(4));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, r.default)(i.default)({
            height: 10
        })
    },
    1800: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return s.default.createElement(c.default, null, s.default.createElement(g.default, {
                use: "title"
            }, "Read Receipts - P2P"), s.default.createElement(d.Provider, {
                store: (0, n.getExampleStore)()
            }, s.default.createElement(c.default, null, s.default.createElement(m.default, {
                messageOTIDs: ["shortMessage"],
                threadKey: "1",
                isSenderViewer: !1,
                parentThreadKey: u.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running,
                userId: "1"
            }), s.default.createElement(m.default, {
                messageOTIDs: ["shortMessage"],
                threadKey: "1",
                isSenderViewer: !0,
                parentThreadKey: u.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running,
                userId: "1"
            }))), s.default.createElement(g.default, {
                use: "title"
            }, "Read Receipts - Groups"), s.default.createElement(d.Provider, {
                store: (0, n.getGroupExampleStore)()
            }, s.default.createElement(c.default, null, s.default.createElement(f.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [r.heartReaction, r.heartReaction, r.thumbsUpReaction]
                },
                messageReactions: [r.heartReaction, r.heartReaction, r.thumbsUpReaction],
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isSenderViewer: !0,
                isWindowFocused: !0,
                deliveryStatus: o.DeliveryStatus.Read
            })), s.default.createElement(c.default, null, s.default.createElement(m.default, {
                messageOTIDs: ["shortMessage", "longMessage"],
                threadKey: "2",
                isSenderViewer: !1,
                parentThreadKey: u.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running,
                userId: "1",
                groupMessageInfo: {
                    participantId: "b",
                    participantName: "Person B",
                    fullName: "Person B",
                    participantIsAdmin: !1,
                    profilePictureUrl: p.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }), s.default.createElement(m.default, {
                messageOTIDs: ["shortMessage"],
                threadKey: "2",
                isSenderViewer: !0,
                parentThreadKey: u.ThreadFolderParentKey.Inbox,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running,
                userId: "1"
            }), s.default.createElement(m.default, {
                messageOTIDs: ["shortMessage"],
                threadKey: "2",
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: i.RtcStackStatus.Running,
                userId: "1",
                isSenderViewer: !1,
                parentThreadKey: u.ThreadFolderParentKey.Inbox,
                groupMessageInfo: {
                    participantId: "b",
                    participantName: "Person B",
                    fullName: "Person B",
                    participantIsAdmin: !1,
                    profilePictureUrl: p.default,
                    lastMessageHasReactions: !1,
                    lastMessageHasMultipleHeads: !1
                }
            }))))
        };
        var l = a(134),
            n = a(25),
            r = a(322),
            u = a(8),
            o = a(133),
            i = a(49),
            d = a(11),
            s = y(a(0)),
            c = y(a(2)),
            f = y(a(172)),
            m = y(a(125)),
            p = y(a(43)),
            g = y(a(4));

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1801: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = e => m.default.createElement(f.Provider, {
                store: (0, l.getExampleStore)()
            }, m.default.createElement(u.default, {
                isAppDarkTheme: !1,
                threadKey: "1",
                threadThemeOverride: l.exampleThreadThemes[e]
            }, m.default.createElement(g.default, {
                threadName: e,
                threadType: 1,
                presence: i.EmptyMsysThreadPresenceModel,
                threadPictureUrl: h.default,
                participants: [],
                participantStatus: i.EmptyUserStatusInfo,
                viewerId: "",
                commands: [{
                    id: "voice-call",
                    icon: c.default,
                    label: "Voice Call",
                    onClick: () => {}
                }, {
                    id: "video-call",
                    icon: d.default,
                    label: "Video Call",
                    onClick: () => {}
                }, {
                    id: "more-info",
                    icon: s.default,
                    label: "More info",
                    onClick: () => {}
                }]
            }), m.default.createElement(p.default, null, m.default.createElement(E.default, {
                messageOTIDs: ["shortMessage"],
                threadKey: "1",
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isSenderViewer: !0,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), m.default.createElement(E.default, {
                messageOTIDs: ["veryLongMessage"],
                threadKey: "1",
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isSenderViewer: !0,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), m.default.createElement(E.default, {
                messageOTIDs: ["replyToReceiverMessage"],
                threadKey: "1",
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isSenderViewer: !1,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), m.default.createElement(E.default, {
                messageOTIDs: ["replyToSenderMessage"],
                threadKey: "1",
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isSenderViewer: !0,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), m.default.createElement(E.default, {
                messageOTIDs: ["shortMessage"],
                threadKey: "1",
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isSenderViewer: !1,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            }), m.default.createElement(E.default, {
                messageOTIDs: ["replyToSenderHotlikeMessage"],
                threadKey: "1",
                parentThreadKey: n.ThreadFolderParentKey.Inbox,
                isSenderViewer: !0,
                isNetworkConnected: !0,
                isRtcEnabled: !0,
                rtcStackStatus: r.RtcStackStatus.Running,
                userId: "1"
            })), m.default.createElement(y.default, {
                threadKey: "foo"
            })));
            return (m.default.createElement(p.default, null, m.default.createElement(b.default, {
                use: "body",
                css: {
                    paddingBottom: 10
                }
            }, "Scroll to view some different thread themes (chat colors)."), m.default.createElement(b.default, {
                use: "body"
            }, "For gradient themes, the message bubbles take on a gradient"), m.default.createElement(b.default, {
                use: "body"
            }, "background based off of 3 colors. The composer and chat"), m.default.createElement(b.default, {
                use: "body"
            }, "header are colored solid from either end of the gradient colors."), m.default.createElement(w, null), m.default.createElement(b.default, {
                use: "title-semibold"
            }, "Solid Color Example:"), m.default.createElement(w, null), e("Lavender Purple"), m.default.createElement(w, null), m.default.createElement(b.default, {
                use: "title-semibold"
            }, "Gradient Example:"), m.default.createElement(w, null), e("Berry"), m.default.createElement(w, null), m.default.createElement(b.default, {
                use: "title-semibold"
            }, "Gradient Example:"), m.default.createElement(w, null), e("Mango")))
        };
        var l = a(25),
            n = a(8),
            r = a(49),
            u = M(a(41)),
            o = M(a(1)),
            i = a(30),
            d = M(a(78)),
            s = M(a(256)),
            c = M(a(145)),
            f = a(11),
            m = M(a(0)),
            p = M(a(2)),
            g = M(a(253)),
            y = M(a(264)),
            E = M(a(125)),
            h = M(a(31)),
            b = M(a(4));

        function M(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const w = (0, o.default)(p.default)({
            height: 20
        })
    },
    1802: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(o.default, null, u.default.createElement(r.Provider, {
                store: (0, l.getExampleStore)()
            }, u.default.createElement(d.default, {
                use: "title"
            }, "Typing Indicators"), u.default.createElement(c, null), u.default.createElement(d.default, {
                use: "body"
            }, " P2P "), u.default.createElement(c, null), u.default.createElement(i.default, {
                isGroup: !1,
                typingUsers: (0, l.getParticipants)().slice(1)
            }), u.default.createElement(c, null), u.default.createElement(d.default, {
                use: "body"
            }, " showForSingle enabled "), u.default.createElement(c, null), u.default.createElement(i.default, {
                isGroup: !1,
                showProfilePicture: !0,
                typingUsers: (0, l.getParticipants)().slice(1)
            }), u.default.createElement(c, null), u.default.createElement(d.default, {
                use: "body"
            }, " Group "), u.default.createElement(c, null), u.default.createElement(i.default, {
                isGroup: !0,
                typingUsers: (0, l.getParticipants)().slice(1)
            }), u.default.createElement(c, null), u.default.createElement(i.default, {
                isGroup: !0,
                typingUsers: (0, l.getParticipants)()
            })))
        };
        var l = a(25),
            n = s(a(1)),
            r = a(11),
            u = s(a(0)),
            o = s(a(2)),
            i = s(a(202)),
            d = s(a(4));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(o.default)({
            height: 10
        })
    },
    1803: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return l.default.createElement(n.default, null, l.default.createElement(n.default, {
                style: {
                    padding: 5
                }
            }, l.default.createElement(r.default, null)), l.default.createElement(n.default, {
                style: {
                    padding: 5
                }
            }, l.default.createElement(r.default, {
                faviconUrl: "ls://circleicon?icon=phone-missed&circleColor=red"
            })), l.default.createElement(n.default, {
                style: {
                    padding: 5
                }
            }, l.default.createElement(r.default, {
                faviconUrl: "ls://circleicon?icon=phone-missed&circleColor=green"
            })))
        };
        var l = u(a(0)),
            n = u(a(2)),
            r = u(a(275));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1804: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, u.useState)(void 0), a = (0, u.useMemo)(() => b.map((t, a) => a === e ? u.default.createElement(E, {
                key: a
            }, u.default.createElement(g, {
                use: "body-semibold"
            }, "Message: ", a), u.default.createElement(r.default, {
                size: 18
            })) : u.default.createElement(g, {
                key: a,
                use: "body"
            }, "Message: ", a)), [e]);
            return u.default.createElement(o.default, null, u.default.createElement(m, null, u.default.createElement(s.default, {
                use: "display"
            }, "Initial"), u.default.createElement(p, null), u.default.createElement(h, null, u.default.createElement(i.default, {
                searchResultCount: null,
                searchQueryStatus: null,
                onSelectResult: () => {},
                issueSearchQuery: () => {},
                onClose: () => {}
            }))), u.default.createElement(m, null, u.default.createElement(s.default, {
                use: "display"
            }, "With Results"), u.default.createElement(p, null), u.default.createElement(h, null, u.default.createElement(i.default, {
                initialQuery: M.query || void 0,
                searchResultCount: 5,
                searchQueryStatus: M,
                onSelectResult: t,
                issueSearchQuery: () => {},
                onClose: () => {}
            }))), u.default.createElement(y, null, a))
        };
        var l = a(8),
            n = f(a(1)),
            r = f(a(260)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = f(a(2)),
            i = f(a(645)),
            d = a(30),
            s = f(a(4));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, n.default)(o.default)({
                padding: 12
            }),
            p = (0, n.default)(o.default)({
                height: 8
            }),
            g = (0, n.default)(s.default)({
                justifyContent: "center",
                padding: 4
            }),
            y = (0, n.default)(o.default)({
                flexDirection: "column-reverse"
            }),
            E = (0, n.default)(o.default)({
                flexDirection: "row",
                alignItems: "center"
            }),
            h = (0, n.default)(o.default)(e => ({
                padding: 12,
                border: `1px solid ${e.theme.colors.base80}`
            })),
            b = [...Array(5).keys()].map(e => ({
                ...d.EmptyMsysMessageSearchResultModel
            })),
            M = {
                query: "hey",
                status: l.SearchQueryStatusType.Complete,
                threadKey: ""
            }
    },
    1809: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(null);
            return (r.default.createElement(u.default, null, r.default.createElement(i.default, {
                name: "osmetaWelcomeModalExample"
            }, r.default.createElement(c, {
                "aria-label": "showOsmetaWelcomeModalExampleButton",
                telemetryName: "showOsmetaWelcomeModalExampleButton",
                caption: "Show OSMeta Welcome Modal",
                onClick: () => {
                    t("prod")
                }
            }), r.default.createElement(c, {
                "aria-label": "showBetaOsmetaWelcomeModalExampleButton",
                telemetryName: "showBetaOsmetaWelcomeModalExampleButton",
                caption: "Show Beta OSMeta Welcome Modal",
                onClick: () => {
                    t("beta")
                }
            }), null != e && r.default.createElement(l.OSMetaWelcomeModalBase, {
                isBeta: "beta" === e,
                onHideModal: () => t(null)
            }))))
        };
        var l = a(646),
            n = s(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = s(a(2)),
            o = s(a(16)),
            i = s(a(13));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(o.default)({
            margin: 12
        })
    },
    1811: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return d.default.createElement(s.default, null, d.default.createElement(i.Provider, {
                store: (0, c.getExampleStore)()
            }, d.default.createElement(h, null, d.default.createElement(m.default, {
                profilePictureUrl: b.profilePictureUrl,
                participantName: b.name
            })), d.default.createElement(h, null, d.default.createElement(m.default, {
                profilePictureUrl: M.profilePictureUrl,
                participantName: M.name
            }, d.default.createElement(E, {
                isChecked: !0
            }, d.default.createElement(u.default, {
                size: 20
            })))), d.default.createElement(h, null, d.default.createElement(m.default, {
                profilePictureUrl: w.profilePictureUrl,
                participantName: w.name
            }, d.default.createElement(E, {
                isChecked: !1
            }, d.default.createElement(o.default, {
                size: 20
            })))), d.default.createElement(h, null, d.default.createElement(m.default, {
                profilePictureUrl: w.profilePictureUrl,
                participantName: w.name,
                subtitle: "Added by John Doe"
            }, d.default.createElement(E, {
                isChecked: !1
            }, d.default.createElement(o.default, {
                size: 20
            })))), d.default.createElement(h, null, d.default.createElement(m.default, {
                profilePictureUrl: w.profilePictureUrl,
                participantName: w.name,
                subtitle: "This is a test of the long text non wrapping ellipsis system. Please remain calm and take no action."
            }, d.default.createElement(E, {
                isChecked: !1
            }, d.default.createElement(o.default, {
                size: 20
            })))), d.default.createElement(h, null, d.default.createElement(m.default, {
                profilePictureUrl: w.profilePictureUrl,
                participantName: w.name,
                subtitle: d.default.createElement(l.default, {
                    participant: w,
                    name: null
                })
            }, d.default.createElement(E, {
                isChecked: !1
            }, d.default.createElement(o.default, {
                size: 20
            }))))))
        };
        var l = y(a(587)),
            n = a(8),
            r = y(a(1)),
            u = y(a(114)),
            o = y(a(50)),
            i = a(11),
            d = y(a(0)),
            s = y(a(2)),
            c = a(25),
            f = a(30),
            m = y(a(339)),
            p = y(a(31)),
            g = y(a(43));

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const E = (0, r.default)(s.default)(e => ({
                alignItems: "center",
                justifyContent: "center",
                height: 24,
                width: 24,
                borderRadius: "50%",
                color: e.theme.colors.base10,
                backgroundColor: e.isChecked ? e.theme.colors.base80 : void 0,
                border: `2px solid ${e.theme.colors.base50}`,
                marginRight: 12
            })),
            h = (0, r.default)(s.default)({
                paddingTop: 10,
                paddingBottom: 10
            }),
            b = {
                profilePictureUrl: p.default,
                name: "Abigail"
            },
            M = {
                profilePictureUrl: g.default,
                name: "Beatrice"
            },
            w = {
                ...f.EmptyMsysParticipantModel,
                profilePictureUrl: g.default,
                name: "Clara",
                workCompanyName: "Facebook",
                workJobTitle: "Chololate sampler",
                workForeignEntityType: n.WorkForeignEntityType.Foreign
            }
    },
    1812: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, d.useState)(!1), [a, o] = (0, d.useState)(!1), s = (0, f.getParticipants)().concat((0, f.getParticipants)()), g = "Where should we eat?", y = [{
                title: "Vesta",
                optionId: "1",
                selected: !0,
                percentVoted: 100,
                voters: s
            }, {
                title: "Timber & Salt",
                optionId: "2",
                percentVoted: 24.9,
                voters: s
            }, {
                title: "Sushi Stop",
                optionId: "3",
                selected: !0,
                percentVoted: 0,
                voters: []
            }];
            return d.default.createElement(d.default.Fragment, null, d.default.createElement(i.Provider, {
                store: (0, f.getExampleStore)()
            }, d.default.createElement(E, null, d.default.createElement(h, null, d.default.createElement(p.default, {
                use: "display"
            }, "Creation"), d.default.createElement(r.default, {
                threadKey: "1",
                onPollCreated: () => {}
            })), d.default.createElement(h, null, d.default.createElement(p.default, {
                use: "display"
            }, "Consumption"), d.default.createElement(u.default, {
                threadKey: "1",
                pollId: "0",
                title: g,
                options: y,
                moreOptionsText: "2 more options",
                debugOnShowModal: () => o(!0)
            }))), d.default.createElement(m.default, {
                name: "createPollModalExample"
            }), d.default.createElement(c.default, {
                "aria-label": "createPollModalExampleButton",
                telemetryName: "createPollModalExampleButton",
                caption: "Show Create Poll Modal",
                onClick: () => {
                    t(!0)
                }
            }), e && d.default.createElement(l.default, {
                threadKey: "1"
            }), a && d.default.createElement(n.default, {
                threadKey: "1",
                pollId: "0",
                title: g,
                closeModal: () => o(!1)
            })))
        };
        var l = y(a(647)),
            n = y(a(648)),
            r = y(a(575)),
            u = y(a(549)),
            o = y(a(1)),
            i = a(11),
            d = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = g();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            s = y(a(2)),
            c = y(a(16)),
            f = a(25),
            m = y(a(13)),
            p = y(a(4));

        function g() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return g = function() {
                return e
            }, e
        }

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const E = (0, o.default)(s.default)({
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10
            }),
            h = (0, o.default)(s.default)({
                paddingLeft: 20,
                alignItems: "center"
            })
    },
    1813: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(o.default, null, u.default.createElement(s, null, u.default.createElement(o.default, null, u.default.createElement(i.default, {
                use: "display"
            }, "Poppers.js popovers"), u.default.createElement(i.default, {
                use: "body"
            }, u.default.createElement("a", {
                href: "https://github.com/FezVrasta/react-popper"
            }, "https://github.com/FezVrasta/react-popper")), u.default.createElement(n.default, null))), u.default.createElement(s, null, u.default.createElement(i.default, {
                use: "display"
            }, "Contact suggestions popover"), u.default.createElement(l.default, null)))
        };
        var l = d(a(1814)),
            n = d(a(1815)),
            r = d(a(1)),
            u = d(a(0)),
            o = d(a(2)),
            i = d(a(4));

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, r.default)(o.default)({
            marginBottom: 40
        })
    },
    1814: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, o.useRef)(null),
                t = (0, o.useRef)(null),
                [a, u] = (0, r.default)(t),
                [s, c] = (0, o.useState)(h),
                [p, g] = (0, o.useState)(!1);
            return o.default.createElement(i.default, null, o.default.createElement(f.default, {
                name: "contactSuggestionsPopoverExample"
            }, o.default.createElement(m.default, {
                use: "title-semibold",
                wrapText: !0
            }, "Scroll down for the popover to appear below the anchor element."), o.default.createElement(d.default, {
                "aria-label": "Show Popover Button",
                telemetryName: "showPopoverButton",
                use: d.RectangleButtonUse.Primary,
                size: d.RectangleButtonSize.Medium,
                onClick: () => u(!0),
                caption: "show popover"
            }), o.default.createElement(E, null, o.default.createElement(d.default, {
                "aria-label": "Set Short Suggestions",
                telemetryName: "setSuggestionsButton",
                use: d.RectangleButtonUse.Secondary,
                size: d.RectangleButtonSize.Medium,
                onClick: () => {
                    c(h), g(!1)
                },
                caption: "short list"
            }), o.default.createElement(d.default, {
                "aria-label": "Set Long Suggestions",
                telemetryName: "setSuggestionsButton",
                use: d.RectangleButtonUse.Secondary,
                size: d.RectangleButtonSize.Medium,
                onClick: () => {
                    c(b), g(!1)
                },
                caption: "long list"
            }), o.default.createElement(d.default, {
                "aria-label": "Set Empty Suggestions",
                telemetryName: "setSuggestionsButton",
                use: d.RectangleButtonUse.Secondary,
                size: d.RectangleButtonSize.Medium,
                onClick: () => {
                    c([]), g(!1)
                },
                caption: "no results"
            }), o.default.createElement(d.default, {
                "aria-label": "Set Null Suggestions",
                telemetryName: "setSuggestionsButton",
                use: d.RectangleButtonUse.Secondary,
                size: d.RectangleButtonSize.Medium,
                onClick: () => {
                    c(null), g(!1)
                },
                caption: "initial load (results null)"
            }), o.default.createElement(d.default, {
                "aria-label": "Set Short Suggestions",
                telemetryName: "setSuggestionsButton",
                use: d.RectangleButtonUse.Secondary,
                size: d.RectangleButtonSize.Medium,
                onClick: () => {
                    c(h), g(!0)
                },
                caption: "show loading"
            })), o.default.createElement(M, {
                ref: e
            }, o.default.createElement(m.default, {
                use: "body"
            }, "Anchor element (showing ", (e => null === e ? "initial load" : e === h ? "short list" : e === b ? "long list" : "no results")(s), ")")), a && o.default.createElement(n.default, {
                target: e.current,
                placement: "bottom-start",
                ref: t
            }, o.default.createElement(l.default, {
                contactSuggestions: s,
                viewerId: "",
                onSelect: e => {
                    window.alert(`Clicked on ${e.name}`)
                },
                isLoadingMore: p
            }))))
        };
        var l = y(a(331)),
            n = y(a(91)),
            r = y(a(143)),
            u = y(a(1)),
            o = g(a(0)),
            i = y(a(2)),
            d = g(a(16)),
            s = y(a(31)),
            c = y(a(43)),
            f = y(a(13)),
            m = y(a(4));

        function p() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return p = function() {
                return e
            }, e
        }

        function g(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = p();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const E = (0, u.default)(i.default)({
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
                margin: 12
            }),
            h = [{
                contactId: "1",
                name: "James Neumann",
                profilePicture: {
                    primaryUrl: s.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "2",
                name: "James Neumann with really long name",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }],
            b = [{
                contactId: "1",
                name: "James Neumann",
                profilePicture: {
                    primaryUrl: s.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "2",
                name: "James Neumann with really long name",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "3",
                name: "Person Foo",
                profilePicture: {
                    primaryUrl: s.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "4",
                name: "Person Bar",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "5",
                name: "Person Baz",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "6",
                name: "Blah blah blah",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }],
            M = (0, u.default)(i.default)(e => ({
                backgroundColor: e.theme.colors.green,
                marginBottom: 200,
                textAlign: "center",
                borderRadius: 8
            }))
    },
    1815: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, u.useRef)(null),
                t = (0, u.useRef)(null),
                a = (0, u.useRef)(null),
                [r, c] = (0, n.default)(e, a);
            return u.default.createElement(o.default, null, u.default.createElement(d.default, {
                name: "poppersExample"
            }, u.default.createElement(o.default, {
                ref: a
            }, u.default.createElement(i.default, {
                "aria-label": "Toggle Popover",
                telemetryName: "togglePopover",
                use: i.RectangleButtonUse.Primary,
                size: i.RectangleButtonSize.Medium,
                onClick: () => {
                    c(!r)
                },
                caption: "Toggle popover"
            })), u.default.createElement(g, {
                ref: t
            }, u.default.createElement(s.default, {
                use: "body"
            }, "Anchor element")), r && u.default.createElement(l.default, {
                target: t.current,
                placement: "bottom-start",
                ref: e
            }, u.default.createElement(p, null, u.default.createElement(s.default, {
                use: "body",
                wrapText: !0
            }, "Hi there I'm in a popover. Click outside me to close me.")))))
        };
        var l = m(a(91)),
            n = m(a(143)),
            r = m(a(1)),
            u = f(a(0)),
            o = m(a(2)),
            i = f(a(16)),
            d = m(a(13)),
            s = m(a(4));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = c();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const p = (0, r.default)(o.default)(e => ({
                width: 240,
                padding: 12,
                borderRadius: 8,
                backgroundColor: e.theme.select({
                    dark: e.theme.colors.base50,
                    light: e.theme.colors.base20
                }),
                pointerEvents: "auto"
            })),
            g = (0, r.default)(o.default)(e => ({
                backgroundColor: e.theme.colors.green,
                margin: 100,
                textAlign: "center",
                borderRadius: 8
            }))
    },
    1816: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, s.useState)(!1), a = (0, s.useRef)(null);
            return s.default.createElement(c.default, null, s.default.createElement(u.default, null, s.default.createElement(c.default, null, s.default.createElement(f.default, {
                "aria-label": "openWindowPortalButton",
                telemetryName: "openWindowPortalButton",
                caption: "Click me to open a window",
                onClick: () => {
                    e && a.current ? a.current.focus() : t(!0)
                }
            }), s.default.createElement(h, null), s.default.createElement(d.Provider, {
                store: (0, m.getExampleStore)((0, o.getDefaultInboxState)())
            }, s.default.createElement(l.default, {
                threadKey: null
            })), e && s.default.createElement(r.default, {
                ref: a,
                title: "Example window",
                id: "windowExample",
                modal: !0,
                onClose: () => {
                    t(!1)
                }
            }, s.default.createElement(h, null), s.default.createElement(d.Provider, {
                store: (0, m.getExampleStore)((0, o.getDefaultInboxState)())
            }, s.default.createElement(l.default, {
                threadKey: null
            }))))))
        };
        var l = g(a(264)),
            n = g(a(45)),
            r = g(a(346)),
            u = g(a(270)),
            o = a(23),
            i = g(a(1)),
            d = a(11),
            s = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = p();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            c = g(a(2)),
            f = g(a(16)),
            m = a(25);

        function p() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return p = function() {
                return e
            }, e
        }

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = (0, i.default)(n.default)({
                flex: 1,
                overflowX: "hidden"
            }),
            E = (0, i.default)(c.default)(e => ({
                alignItems: "center",
                justifyContent: "center",
                border: `1px solid ${e.theme.semanticColors.bgLine}`,
                width: "100%",
                height: 150,
                color: e.theme.semanticColors.textPrimary,
                backgroundColor: e.theme.semanticColors.bgSurfaceSecondary
            }));

        function h() {
            return s.default.createElement(c.default, {
                css: {
                    width: 200,
                    height: 400
                }
            }, s.default.createElement(y, null, Array.from(new Array(10)).map((e, t) => s.default.createElement(E, {
                key: t
            }, t))))
        }
    },
    1817: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, o.useState)(0);
            return (o.default.createElement(m, null, o.default.createElement(l.default, null), o.default.createElement(p, null), o.default.createElement(p, null), o.default.createElement(p, null), o.default.createElement(s.default, {
                use: "title-semibold"
            }, "Header"), o.default.createElement(g, null, o.default.createElement(r.default, {
                isVideoCall: !0,
                feedbackSubmitted: !1
            })), o.default.createElement(p, null), o.default.createElement(s.default, {
                use: "title-semibold"
            }, "Post-rating thank you"), o.default.createElement(g, null, o.default.createElement(r.default, {
                isVideoCall: !0,
                feedbackSubmitted: !0
            })), o.default.createElement(p, null), o.default.createElement(s.default, {
                use: "title-semibold"
            }, "Star Rating", e > 0 && ": " + e), o.default.createElement(g, null, o.default.createElement(d.default, {
                submitRating: e => t(e),
                ratingLocked: !1
            })), o.default.createElement(p, null), o.default.createElement(s.default, {
                use: "title-semibold"
            }, "Footer"), o.default.createElement(g, null, o.default.createElement(n.default, {
                showFeedback: !1,
                submitFeedback: t => alert(e + " stars: " + t)
            }))))
        };
        var l = f(a(1818)),
            n = f(a(576)),
            r = f(a(577)),
            u = f(a(1)),
            o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            i = f(a(2)),
            d = f(a(230)),
            s = f(a(4));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, u.default)(i.default)({
                flexDirection: "column"
            }),
            p = (0, u.default)(i.default)({
                height: 16,
                width: "100%"
            }),
            g = (0, u.default)(i.default)(e => ({
                backgroundColor: e.theme.select({
                    light: e.theme.colors.base50,
                    dark: e.theme.colors.flatBase30
                }),
                borderRadius: 12,
                padding: 12,
                margin: "12px 0"
            }))
    },
    1818: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, u.useState)(0), [a, r] = (0, u.useState)(!1), [o, d] = (0, u.useState)(!1);
            return (0, u.useEffect)(() => {
                e > 0 && e < 3 && r(!0)
            }, [e]), u.default.createElement(y, null, u.default.createElement(f, null, u.default.createElement(m, null, u.default.createElement(n.default, {
                isVideoCall: !0,
                feedbackSubmitted: o
            })), u.default.createElement(p, null, u.default.createElement(i.default, {
                submitRating: e => t(e),
                ratingLocked: o
            })), !o && u.default.createElement(g, null, u.default.createElement(l.default, {
                showFeedback: a,
                submitFeedback: t => {
                    d(!0),
                        function(t) {
                            alert(e + " stars: " + t)
                        }(t)
                }
            }))))
        };
        var l = c(a(576)),
            n = c(a(577)),
            r = c(a(1)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = c(a(2)),
            i = c(a(230)),
            d = a(6);

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, r.default)(o.default)(e => ({
                backgroundColor: e.theme.colors.flatBase30,
                borderRadius: 4,
                padding: 12
            })),
            m = (0, r.default)(o.default)({
                paddingTop: 2
            }),
            p = (0, r.default)(o.default)({
                padding: "12px 0"
            }),
            g = (0, r.default)(o.default)({
                paddingTop: 12
            });

        function y(e) {
            const t = (0, d.useTheme)(),
                a = (0, d.getTheme)("dark", t.os);
            return u.default.createElement(d.ThemeContextProvider, {
                theme: a
            }, e.children)
        }
    },
    1819: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function({
            feedbackValue: e,
            setFeedbackValue: t
        }) {
            return r.default.createElement(d, null, r.default.createElement(o.default, null, r.default.createElement(s, {
                placeholder: l.default._("Share your comments and feedback...", null, {
                    hk: "2wFiGM"
                }).toString(),
                value: e,
                onChange: e => t(e.target.value)
            })))
        };
        var l = i(a(5)),
            n = i(a(1)),
            r = i(a(0)),
            u = i(a(2)),
            o = i(a(45));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(u.default)(e => ({
                backgroundColor: e.theme.colors.flatBase20,
                margin: "0 4px",
                marginBottom: 12,
                height: 200,
                borderRadius: 4
            })),
            s = n.default.textarea(e => ({
                backgroundColor: "inherit",
                border: "none",
                borderRadius: 4,
                outline: "none",
                color: e.theme.semanticColors.textPrimary,
                fontSize: 13,
                fontWeight: 500,
                lineHeight: "16px",
                height: "195px",
                width: "100%",
                padding: 12,
                resize: "none",
                "::placeholder": {
                    color: e.theme.colors.base70
                }
            }))
    },
    1820: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return s.default.createElement(c.default, null, s.default.createElement(d.Provider, {
                store: (0, f.getExampleStore)()
            }, s.default.createElement(E, null, s.default.createElement(g.default, {
                use: "display"
            }, "Standard Profile Photo")), ["xxsmall", "xsmall", "small", "medium", "large", "xlarge", "xxlarge"].map(e => s.default.createElement(E, {
                key: e
            }, s.default.createElement(h, null, s.default.createElement(l.default, {
                size: e,
                profilePictureUrl: m.default
            })), s.default.createElement(h, null, s.default.createElement(l.default, {
                size: e,
                profilePictureUrl: m.default,
                presence: o.PresenceType.Active
            })), s.default.createElement(h, null, s.default.createElement(l.default, {
                size: e,
                profilePictureUrl: m.default,
                presence: o.PresenceType.Active,
                isDndModeOn: !0
            })))), s.default.createElement(E, null, s.default.createElement(g.default, {
                use: "display"
            }, "Profile Photo Group")), ["small", "medium", "large"].map(e => s.default.createElement(E, {
                key: e
            }, s.default.createElement(h, null, s.default.createElement(r.default, {
                size: e,
                viewerId: n.viewerId,
                participants: n.participants
            })), s.default.createElement(h, null, s.default.createElement(r.default, {
                size: e,
                viewerId: n.viewerId,
                participants: n.participants,
                presence: o.PresenceType.Active
            })))), s.default.createElement(E, null, s.default.createElement(g.default, {
                use: "display"
            }, "Fallback Profile Photo")), s.default.createElement(E, null, s.default.createElement(h, null, s.default.createElement(l.default, {
                profilePictureUrl: null
            })), s.default.createElement(h, null, s.default.createElement(r.default, {
                viewerId: n.viewerId,
                participants: n.bogusParticipants1
            })), s.default.createElement(h, null, s.default.createElement(r.default, {
                viewerId: n.viewerId,
                participants: n.bogusParticipants2
            })), s.default.createElement(h, null, s.default.createElement(r.default, {
                viewerId: n.viewerId,
                participants: n.bogusParticipants3
            }))), s.default.createElement(E, null, s.default.createElement(g.default, {
                use: "display"
            }, "Horizontal Facepile")), s.default.createElement(E, null, ["xxsmall", "xsmall", "small", "medium", "xlarge", "xxlarge"].map(e => s.default.createElement(h, {
                key: e
            }, s.default.createElement(u.default, {
                profilePictureUrls: [m.default, p.default, m.default],
                size: e
            })))), s.default.createElement(E, null, s.default.createElement(g.default, {
                use: "display"
            }, "Horizontal Facepile (+3)")), s.default.createElement(E, null, ["xxsmall", "xsmall", "small", "medium", "xlarge", "xxlarge"].map(e => s.default.createElement(h, {
                key: e
            }, s.default.createElement(u.default, {
                profilePictureUrls: [m.default, p.default, m.default, p.default],
                size: e,
                useCountBubble: !0
            })))), s.default.createElement(E, null, s.default.createElement(g.default, {
                use: "display"
            }, "Horizontal Facepile for Modals (+3)")), s.default.createElement(E, null, ["xxsmall", "xsmall", "small", "medium", "xlarge", "xxlarge"].map(e => s.default.createElement(h, {
                key: e
            }, s.default.createElement(u.default, {
                profilePictureUrls: [m.default, p.default, m.default, p.default],
                size: e,
                useCountBubble: !0,
                countBubblePlacement: "right",
                displayExtraCountPlus: !0
            }))))))
        };
        var l = y(a(38)),
            n = a(1821),
            r = y(a(173)),
            u = y(a(171)),
            o = a(8),
            i = y(a(1)),
            d = a(11),
            s = y(a(0)),
            c = y(a(2)),
            f = a(25),
            m = y(a(31)),
            p = y(a(43)),
            g = y(a(4));

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const E = (0, i.default)(c.default)({
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10
            }),
            h = (0, i.default)(c.default)({
                margin: 10
            })
    },
    1821: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.bogusParticipants3 = t.bogusParticipants2 = t.bogusParticipants1 = t.participants = t.viewerId = void 0;
        var l = a(30),
            n = u(a(31)),
            r = u(a(43));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.viewerId = "123456";
        const o = [{
            ...l.EmptyMsysParticipantModel,
            contactId: "234567",
            profilePictureUrl: n.default
        }, {
            ...l.EmptyMsysParticipantModel,
            contactId: "345678",
            profilePictureUrl: r.default
        }];
        t.participants = o;
        const i = [{
            ...l.EmptyMsysParticipantModel,
            contactId: "234567",
            profilePictureUrl: "bogus-image-1.jpg"
        }, {
            ...l.EmptyMsysParticipantModel,
            contactId: "345678",
            profilePictureUrl: "bogus-image-2.png"
        }];
        t.bogusParticipants1 = i;
        const d = [{
            ...l.EmptyMsysParticipantModel,
            contactId: "234567",
            profilePictureUrl: "bogus-image-1.jpg"
        }, {
            ...l.EmptyMsysParticipantModel,
            contactId: "345678",
            profilePictureUrl: r.default
        }];
        t.bogusParticipants2 = d;
        const s = [{
            ...l.EmptyMsysParticipantModel,
            contactId: "234567",
            profilePictureUrl: n.default
        }, {
            ...l.EmptyMsysParticipantModel,
            contactId: "345678",
            profilePictureUrl: "bogus-image-2.png"
        }];
        t.bogusParticipants3 = s
    },
    1822: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l = d(a(1)),
            n = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            r = d(a(2)),
            u = d(a(649)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, l.default)(r.default)({
                marginBottom: "12px"
            }),
            c = (0, l.default)(r.default)({
                flexDirection: "row"
            }),
            f = (0, l.default)(o.default)({
                margin: "50px 80px"
            }),
            m = [{
                id: 0,
                label: "Cool",
                info: {
                    detail: "wow!"
                }
            }, {
                id: 1,
                label: "Rad",
                info: {
                    detail: "woohoo!"
                }
            }, {
                id: 2,
                label: "The Best",
                info: {
                    detail: "yeehaw!"
                }
            }, {
                id: 3,
                label: "A disabled option",
                disabled: !0,
                info: {
                    detail: "Sorry!"
                }
            }];
        var p = function() {
            const [e, t] = (0, n.useState)(0);
            return (n.default.createElement(r.default, null, n.default.createElement(s, null, n.default.createElement(u.default, {
                options: m,
                selectedOptionId: e,
                onSelectOption: t
            })), n.default.createElement(c, null, n.default.createElement(o.default, {
                use: "subtext"
            }, "You are"), n.default.createElement(o.default, {
                use: "subtext-bold",
                css: {
                    marginLeft: 4
                }
            }, ` ${m[e].label.toLowerCase()}!`)), n.default.createElement(c, null, n.default.createElement(f, {
                use: "caption"
            }, m[e].info.detail.toLowerCase()))))
        };
        t.default = p
    },
    1823: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, r.useRef)(),
                t = (0, r.useRef)("😍"),
                [a, l] = (0, r.useState)(!1);
            return r.default.createElement(n.Provider, {
                store: (0, o.getExampleStore)()
            }, r.default.createElement(u.default, null, r.default.createElement(d.default, {
                use: "body"
            }, "Click in the box below to open the reaction picker:"), r.default.createElement(u.default, {
                css: {
                    alignItems: "center",
                    paddingTop: "10px"
                }
            }, r.default.createElement(i.default, {
                onReaction: (e, a) => {
                    t.current = a, l(!1)
                },
                currentReaction: t.current,
                messageDetails: {
                    messageId: "1",
                    messageOTID: "2",
                    threadKey: "1",
                    timestampMs: 2
                },
                clickEvent: e.current,
                isViewerSender: !0,
                pickerVisible: a,
                onHide: () => l(!1)
            }, r.default.createElement(f, {
                onClick: t => {
                    t.persist(), e.current = t, l(e => !e)
                }
            })))))
        };
        var l = c(a(1)),
            n = a(11),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = c(a(2)),
            o = a(25),
            i = c(a(551)),
            d = c(a(4));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, l.default)(u.default)(e => ({
            width: 100,
            height: 100,
            backgroundColor: e.theme.semanticColors.primaryAccent,
            borderRadius: "20px 20px"
        }))
    },
    1824: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return i.default.createElement(n.default, null, i.default.createElement(c.default, {
                use: "title"
            }, '"YOU" POGs'), i.default.createElement(m, null), i.default.createElement(n.default, {
                css: {
                    flexDirection: "row"
                }
            }, i.default.createElement(n.default, null, i.default.createElement(c.default, {
                use: "body"
            }, "Room Owner"), i.default.createElement(g, null, i.default.createElement(o.default, {
                profilePicture: y,
                numberOfOwnedRoom: 2,
                onClick: () => {}
            }))), i.default.createElement(p, null), i.default.createElement(n.default, null, i.default.createElement(c.default, {
                use: "body"
            }, "Not a Room Owner"), i.default.createElement(g, null, i.default.createElement(o.default, {
                profilePicture: y,
                numberOfOwnedRoom: 0,
                onClick: () => {}
            })))), i.default.createElement(m, null), i.default.createElement(c.default, {
                use: "title"
            }, "Active Now POGs"), i.default.createElement(m, null), i.default.createElement(n.default, {
                css: {
                    flexDirection: "row"
                }
            }, i.default.createElement(g, null, i.default.createElement(r.default, {
                contactId: "1",
                profilePicture: y,
                name: "Jane Doe"
            })), i.default.createElement(p, null), i.default.createElement(g, null, i.default.createElement(r.default, {
                contactId: "1",
                profilePicture: E,
                name: "Miss I have a long name you know"
            }))), i.default.createElement(m, null), i.default.createElement(c.default, {
                use: "title"
            }, "Join ROOM POGs"), i.default.createElement(m, null), i.default.createElement(n.default, {
                css: {
                    flexDirection: "row"
                }
            }, i.default.createElement(g, null, i.default.createElement(u.default, {
                participants: [d.default],
                name: "🍷 Happy Hour",
                badgeCount: 1
            })), i.default.createElement(p, null), i.default.createElement(g, null, i.default.createElement(u.default, {
                participants: [d.default, s.default],
                name: "🦄 Costume Party",
                badgeCount: 1
            })), i.default.createElement(p, null), i.default.createElement(g, null, i.default.createElement(u.default, {
                participants: [d.default, s.default, d.default],
                name: "🎲 Game Night",
                badgeCount: 1
            })), i.default.createElement(p, null), i.default.createElement(g, null, i.default.createElement(u.default, {
                participants: [d.default, s.default, s.default, d.default],
                name: "📚 Book Club",
                badgeCount: 1
            })), i.default.createElement(g, null, i.default.createElement(u.default, {
                participants: [d.default, s.default, s.default, d.default, s.default],
                name: "🐼 YOLO",
                badgeCount: 1
            }))))
        };
        var l = f(a(99)),
            n = f(a(2)),
            r = f(a(578)),
            u = f(a(579)),
            o = f(a(580)),
            i = f(a(0)),
            d = f(a(31)),
            s = f(a(43)),
            c = f(a(4));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, l.default)(n.default, {
                target: "e1kvol300",
                label: "VerticalSpacer"
            })({
                name: "1pg8bi",
                styles: "height:20px;"
            }),
            p = (0, l.default)(n.default, {
                target: "e1kvol301",
                label: "HorizontalSpacer"
            })({
                name: "yikrym",
                styles: "width:20px;"
            }),
            g = (0, l.default)(n.default, {
                target: "e1kvol302",
                label: "POGContainer"
            })({
                name: "1v2bgbq",
                styles: "height:100%;width:62px;align-items:center;margin-right:12px;"
            }),
            y = {
                primaryUrl: d.default,
                expiryTimestamp: 0,
                fallbackUrl: d.default
            },
            E = {
                primaryUrl: s.default,
                expiryTimestamp: 0,
                fallbackUrl: s.default
            }
    },
    1827: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(b, null, u.default.createElement(S, {
                theme: "light"
            }), u.default.createElement(S, {
                theme: "grey"
            }), u.default.createElement(S, {
                theme: "dark"
            }))
        };
        var l = a(8),
            n = a(140),
            r = E(a(1)),
            u = E(a(0)),
            o = E(a(2)),
            i = a(601),
            d = a(602),
            s = a(603),
            c = E(a(604)),
            f = a(608),
            m = E(a(612)),
            p = a(613),
            g = E(a(45)),
            y = a(6);

        function E(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const h = (0, r.default)(g.default)(e => ({
                padding: 10,
                backgroundColor: e.theme.colors.base10,
                height: "100%"
            })),
            b = (0, r.default)(o.default)(e => ({
                width: "100%",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, 424px)",
                gridColumnGap: 12
            })),
            M = (0, r.default)(o.default)(e => ({
                display: "grid",
                gridTemplateRows: "repeat(auto-fill, minmax(120px, 1fr))",
                gridRowGap: 12
            })),
            w = (0, r.default)(o.default)(e => ({
                width: 400,
                borderColor: e.theme.semanticColors.bgLine,
                borderThickness: 2,
                borderStyle: "solid",
                alignItems: "center",
                justifyContent: "center"
            }));

        function v(e) {
            const t = (0, y.useTheme)(),
                a = (0, y.getTheme)(e.themeName, t.os);
            return u.default.createElement(y.ThemeContextProvider, {
                theme: a
            }, u.default.createElement(h, null, e.children))
        }

        function S(e) {
            return u.default.createElement(v, {
                themeName: e.theme
            }, u.default.createElement(M, null, u.default.createElement(w, null, u.default.createElement(p.SelectRoomPrivacyForm, {
                roomPrivacy: l.RoomAudienceType.Anyone,
                setPrivacySetting: () => {},
                goBack: () => {}
            })), u.default.createElement(w, null, u.default.createElement(m.default, null)), u.default.createElement(w, null, u.default.createElement(s.CreateRoomActivityForm, {
                saveCustomRoomActivity: () => {},
                goBack: () => {}
            })), u.default.createElement(w, null, u.default.createElement(i.ChooseRoomActivityForm, {
                customActivity: ["🙂", "Hanging Out"],
                selectRoomActivity: () => {},
                setRoomScreen: () => {},
                goBack: () => {}
            })), u.default.createElement(w, null, u.default.createElement(c.default, {
                goBack: () => {}
            })), u.default.createElement(w, null, u.default.createElement(d.CreateARoomDialog, {
                activeScreenInfo: {
                    screen: n.RoomScreen.CREATE_ROOM
                },
                activity: ["🙂", "Hanging Out"],
                scheduledForDate: null,
                scheduledForTime: null,
                privacySetting: l.RoomAudienceType.InvitedOnly,
                joinPermission: l.RoomJoinPermission.AnyoneWhoCanLoadTheLink,
                createRoom: () => {},
                updateRoom: () => {},
                setScheduleForDate: () => {},
                setScheduleForTime: () => {},
                selectRoomScreen: () => {},
                goBack: () => {},
                firstName: "Jane",
                onClose: () => {},
                previousScreen: null,
                goToInviteToRoomView: () => {},
                isNetworkConnected: !0
            })), u.default.createElement(w, null, u.default.createElement(f.RoomsNuxInterstitial, {
                onClose: () => {},
                beginCreateRoom: () => {}
            }))))
        }
    },
    1828: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return n.default.createElement(r.default, null, n.default.createElement(u.default, {
                use: "title"
            }, "Shimmer"), n.default.createElement(l.default, null))
        };
        var l = o(a(653)),
            n = o(a(0)),
            r = o(a(2)),
            u = o(a(4));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1830: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(() => Array(25).fill({
                isDynamic: !1
            })), [a, l] = (0, r.useState)(0);
            return r.default.createElement(u.default, {
                css: {
                    flex: 1
                }
            }, r.default.createElement(i.default, {
                name: "autoscrollExample"
            }, r.default.createElement(o.default, {
                "aria-label": "Add 3 rectangles",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Primary,
                caption: "Add 3 rectangles",
                telemetryName: "injectRectanglesButton",
                onClick: () => {
                    t(e => [...e, ...Array(3).fill({
                        isDynamic: !1
                    })])
                }
            }), r.default.createElement(o.default, {
                "aria-label": "Add dynamic rectangle",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Primary,
                caption: "Add dynamic rectangle",
                telemetryName: "injectDynamicRectangleButton",
                onClick: () => {
                    t(e => [...e, {
                        isDynamic: !0
                    }])
                }
            }), r.default.createElement(o.default, {
                "aria-label": "Add heavy rectangle",
                size: o.RectangleButtonSize.Medium,
                use: o.RectangleButtonUse.Primary,
                caption: "Add heavy rectangle",
                telemetryName: "injectHeavyRectangleButton",
                onClick: () => {
                    t(e => [...e, {
                        isDynamic: !1,
                        isUserMessage: !0
                    }])
                }
            }), r.default.createElement(y, null), r.default.createElement(m, null, r.default.createElement(n.default, {
                onScrolledToTop: () => l(a + 10),
                itemCount: a + e.length,
                shouldShowSentinel: !0,
                threadKey: "1",
                lastMessageOTID: "1",
                shouldShowTopLoadingSpinner: !1,
                shouldShowBottomLoadingSpinner: !1,
                isInMessageIsland: !1,
                bottomItemHash: e.length.toString(),
                bottomItemSenderViewer: !!e[e.length - 1].isUserMessage,
                scrollViewRef: (0, r.useRef)(null)
            }, Array(a).fill(null).map((e, t) => r.default.createElement(E, {
                key: t
            }, r.default.createElement(d.default, {
                use: "body-bold"
            }, "top rectangle " + (a - t)))), e.map(({
                isDynamic: e
            }, t) => r.default.createElement(E, {
                key: t,
                autosize: e
            }, r.default.createElement(d.default, {
                use: "body-bold"
            }, t)))))))
        };
        var l = f(a(1)),
            n = f(a(374)),
            r = c(a(0)),
            u = f(a(2)),
            o = c(a(16)),
            i = f(a(13)),
            d = f(a(4));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = s();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, l.default)(u.default)(e => ({
                flex: 1,
                margin: 10,
                border: "1px solid silver"
            })),
            p = (0, l.default)(u.default)(e => ({
                alignItems: "center",
                backgroundColor: e.theme.colors.base50,
                color: e.theme.semanticColors.textPrimary,
                borderRadius: "18px",
                height: "30px",
                justifyContent: "center",
                margin: "10px",
                width: "200px"
            })),
            g = (0, l.default)(u.default)(e => ({
                alignItems: "center",
                backgroundColor: e.theme.colors.base50,
                color: e.theme.semanticColors.textPrimary,
                borderRadius: "18px",
                height: "500px",
                justifyContent: "center",
                margin: "10px",
                width: "200px"
            })),
            y = (0, l.default)(u.default)({
                width: 10,
                height: 10
            });

        function E(e) {
            const [t, a] = (0, r.useState)(!1);
            (0, r.useEffect)(() => {
                if (e.autosize) {
                    const e = window.setTimeout(() => a(!0), 1e3);
                    return () => {
                        window.clearTimeout(e)
                    }
                }
                return () => {}
            }, [e.autosize]);
            const l = () => {
                a(e => !e)
            };
            return t ? r.default.createElement(g, {
                onClick: l
            }, e.children) : r.default.createElement(p, {
                onClick: l
            }, e.children)
        }
    },
    1839: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(""), [a, l] = (0, r.useState)("dank memes"), [n, u] = (0, r.useState)("brunch"), [i, d] = (0, r.useState)("searching"), f = [{
                mac: "cmd+shift+a",
                windows: "ctrl+shift+a"
            }, {
                mac: "cmd+shift+b",
                windows: "ctrl+shift+b"
            }];
            return r.default.createElement("div", null, r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "Default")), r.default.createElement(s, null, r.default.createElement(c, {
                query: e,
                onQueryChange: t,
                focusShortcut: f[0]
            })), r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "Typing")), r.default.createElement(s, null, r.default.createElement(c, {
                autoFocus: !0,
                query: a,
                onQueryChange: l,
                focusShortcut: f[1]
            })), r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "With Result Index")), r.default.createElement(s, null, r.default.createElement(c, {
                query: n,
                onQueryChange: u,
                rightSnippet: "1/2"
            })), r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "Loading")), r.default.createElement(s, null, r.default.createElement(c, {
                query: i,
                onQueryChange: d,
                isLoading: !0
            })))
        };
        var l = d(a(242)),
            n = d(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.default)({
                flexDirection: "row",
                maxWidth: "258px",
                padding: 10
            }),
            c = (0, n.default)(l.default)({
                flex: 1
            })
    },
    1840: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return o.default.createElement(i.default, null, o.default.createElement(u.Provider, {
                store: (0, d.getExampleStore)()
            }, o.default.createElement(g, null, o.default.createElement(y, {
                use: "display"
            }, "Threads"), o.default.createElement(l.default, {
                searchResult: E,
                shortcut: "cmd+shift+1",
                participants: M,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: w,
                shortcut: "cmd+shift+2",
                participants: k,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: v,
                shortcut: "cmd+shift+3",
                participants: k,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: S,
                shortcut: "cmd+shift+4",
                participants: k,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: h,
                shortcut: "cmd+shift+1",
                participants: M,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: b,
                shortcut: "cmd+shift+5",
                participants: k,
                viewerId: "1"
            })), o.default.createElement(g, null, o.default.createElement(y, {
                use: "display"
            }, "Messages"), o.default.createElement(l.default, {
                searchResult: T,
                participants: M,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: P,
                participants: M,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: _,
                participants: k,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: O,
                participants: M,
                viewerId: "1"
            }), o.default.createElement(l.default, {
                searchResult: C,
                participants: k,
                viewerId: "1"
            }))))
        };
        var l = p(a(654)),
            n = a(8),
            r = p(a(1)),
            u = a(11),
            o = p(a(0)),
            i = p(a(2)),
            d = a(25),
            s = a(30),
            c = p(a(31)),
            f = p(a(43)),
            m = p(a(4));

        function p(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const g = (0, r.default)(i.default)({
                paddingBottom: 20
            }),
            y = (0, r.default)(m.default)({
                paddingBottom: 8
            }),
            E = {
                ...s.EmptyMsysSearchResultModel,
                title: "James Neumann",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            },
            h = {
                ...s.EmptyMsysSearchResultModel,
                title: "Peter Smith",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                subtitle: "Facebook · Wine Taster",
                resultType: n.SearchResultType.NonContact
            },
            b = {
                ...s.EmptyMsysSearchResultModel,
                title: "Marketing Team",
                subtitle: "Moshe, Jacob, Peter...",
                resultType: n.SearchResultType.Group
            },
            M = [{
                ...s.EmptyMsysParticipantModel,
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                contactId: "1"
            }],
            w = {
                ...s.EmptyMsysSearchResultModel,
                title: "James and Mary",
                profilePicture: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            },
            v = {
                ...s.EmptyMsysSearchResultModel,
                title: "Puppies",
                profilePicture: {
                    primaryUrl: "https://i.redd.it/21vjpnyyevl21.jpg",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            },
            S = {
                ...s.EmptyMsysSearchResultModel,
                title: "group chat",
                subtitle: "James and Mary"
            },
            k = [{
                ...s.EmptyMsysParticipantModel,
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                contactId: "1"
            }, {
                ...s.EmptyMsysParticipantModel,
                profilePicture: {
                    primaryUrl: f.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                contactId: "2"
            }, {
                ...s.EmptyMsysParticipantModel,
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                contactId: "3",
                workForeignEntityType: n.WorkForeignEntityType.Foreign
            }],
            T = {
                ...s.EmptyMsysSearchResultModel,
                title: "James Neumann",
                subtitle: "Did you see John today?",
                serverQuery: "john",
                messageTimestampMs: (new Date).getTime() - 108e5,
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                isOnlineIndicatorVisible: !0,
                resultType: n.SearchResultType.IntegratedMessageSearchThread
            },
            P = {
                ...s.EmptyMsysSearchResultModel,
                title: "Alice Chuang",
                subtitle: "2 matched messages",
                profilePicture: {
                    primaryUrl: c.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                resultType: n.SearchResultType.IntegratedMessageSearchThread
            },
            _ = {
                ...s.EmptyMsysSearchResultModel,
                title: "James and Mary",
                subtitle: "omg lol that's wild lol",
                serverQuery: "lol",
                messageTimestampMs: new Date(2016, 11, 17).getTime(),
                resultType: n.SearchResultType.IntegratedMessageSearchThread
            },
            O = {
                ...v,
                subtitle: "4 matched messages",
                resultType: n.SearchResultType.IntegratedMessageSearchThread
            },
            C = {
                ...s.EmptyMsysSearchResultModel,
                title: "James and Mary",
                subtitle: "let's meet outside the concert hall tomo?",
                serverQuery: "concert",
                messageTimestampMs: (new Date).getTime() - 2592e5,
                isOnlineIndicatorVisible: !0,
                resultType: n.SearchResultType.IntegratedMessageSearchThread
            }
    },
    1841: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement("div", null, r.default.createElement(i, null, r.default.createElement(l.default, {
                title: "Section header"
            })), r.default.createElement(i, null, r.default.createElement(l.default, {
                title: "section header",
                action: {
                    title: "Action",
                    onClick: () => console.log("action clicked"),
                    disabled: !1
                }
            })), r.default.createElement(i, null, r.default.createElement(l.default, {
                title: "section header",
                action: {
                    title: "Action",
                    onClick: () => console.log("action clicked"),
                    disabled: !0
                }
            })))
        };
        var l = o(a(186)),
            n = o(a(1)),
            r = o(a(0)),
            u = o(a(2));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0, n.default)(u.default)({
            paddingTop: 10,
            paddingBottom: 10
        })
    },
    1842: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)("1"), a = [{
                name: "Recent",
                key: "1",
                ariaLabel: "Recent"
            }, {
                name: "Missed",
                key: "2",
                ariaLabel: "Missed"
            }, {
                name: "Active",
                key: "3",
                ariaLabel: "Active"
            }], n = a.concat({
                name: "Disabled",
                key: "4",
                ariaLabel: "Disabled",
                disabled: !0
            });
            return r.default.createElement(u.default, null, r.default.createElement(o.default, {
                name: "segmentedControlsExample"
            }, r.default.createElement(c, null, r.default.createElement(l.default, {
                telemetryName: "threeItemsExample",
                options: a,
                selectedOptionKey: e,
                onSelectionChange: t
            }), r.default.createElement(s, null), r.default.createElement(l.default, {
                telemetryName: "twoItemsExample",
                options: [{
                    name: "Recent",
                    key: "1",
                    ariaLabel: "Recent"
                }, {
                    name: "Active",
                    key: "2",
                    ariaLabel: "Active"
                }],
                selectedOptionKey: e,
                onSelectionChange: t
            }), r.default.createElement(s, null), r.default.createElement(l.default, {
                telemetryName: "fourItemsExample",
                options: n,
                selectedOptionKey: e,
                onSelectionChange: t
            }))))
        };
        var l = d(a(344)),
            n = d(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(13));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.default)({
                width: 10,
                height: 20
            }),
            c = (0, n.default)(u.default)({
                width: "300px"
            })
    },
    1843: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(i, null, "Profile Photo", r.default.createElement(l.CircleShimmer, {
                size: 50
            })), r.default.createElement(i, null, "Text", r.default.createElement(l.TextShimmer, null)))
        };
        var l = a(100),
            n = o(a(1)),
            r = o(a(0)),
            u = o(a(2));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0, n.default)(u.default)({
            margin: 10
        })
    },
    1844: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(0), [a, i] = (0, r.useState)(!1);
            return r.default.createElement(u.default, {
                css: {
                    flexDirection: "row"
                }
            }, r.default.createElement(u.default, {
                css: {
                    paddingRight: 16
                }
            }, r.default.createElement(o.default, {
                use: "title-semibold"
            }, "Star Rating", e > 0 && ": " + e), r.default.createElement(l.default, {
                label: "Rating locked?",
                checked: a,
                onChange: i
            })), r.default.createElement(n.default, {
                submitRating: e => t(e),
                ratingLocked: a
            }))
        };
        var l = d(a(167)),
            n = d(a(230)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1845: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)([]), [a, o] = (0, r.useState)([]), [i, c] = (0, r.useState)(!1), [f, g] = (0, r.useState)(100), [y, E] = (0, r.useState)(400), h = (e, t) => e.filter(({
                name: e
            }) => e.toLowerCase().includes(t.toLowerCase())), [b, M] = (0, r.useState)(null), w = (0, r.useCallback)(e => {
                if (null == e) return void o([]);
                if (0 === e.trim().length) return void o([]);
                const t = h(m, e),
                    a = h(p, e);
                c(!0), setTimeout(() => o(t), f), setTimeout(() => {
                    o([...t, ...a]), c(!1)
                }, y)
            }, [f, y]), v = (0, n.default)(b, 200);
            return (0, r.useEffect)(() => {
                w(v)
            }, [w, v]), r.default.createElement(u.default, null, r.default.createElement(l.default, {
                onSearchQueryChange: M,
                suggestions: a,
                selectedUsers: e,
                viewerId: "",
                onChange: e => t(e),
                isLoadingMoreContacts: i
            }), r.default.createElement(u.default, {
                css: {
                    marginTop: 200
                }
            }, r.default.createElement(u.default, {
                css: {
                    flexDirection: "row",
                    justifyContent: "space-between"
                }
            }, r.default.createElement(u.default, null, r.default.createElement(s.default, {
                use: "body"
            }, "Local contacts:"), r.default.createElement("ul", null, m.map(({
                contactId: e,
                name: t
            }) => r.default.createElement("li", {
                key: e
            }, t)))), r.default.createElement(u.default, null, r.default.createElement(s.default, {
                use: "body"
            }, "Server contacts:"), r.default.createElement("ul", null, p.map(({
                contactId: e,
                name: t
            }) => r.default.createElement("li", {
                key: e
            }, t))))), r.default.createElement(u.default, null, r.default.createElement(s.default, {
                use: "body"
            }, "Local load time (ms)"), r.default.createElement(d.default, {
                placeholder: "Enter text here",
                value: f + "",
                onChange: e => g(parseInt(e, 10)),
                type: "number"
            })), r.default.createElement(u.default, null, r.default.createElement(s.default, {
                use: "body"
            }, "Server load time (ms)"), r.default.createElement(d.default, {
                placeholder: "Enter text here",
                value: y + "",
                onChange: e => E(parseInt(e, 10)),
                type: "number"
            }))))
        };
        var l = f(a(655)),
            n = f(a(340)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = f(a(2)),
            o = f(a(31)),
            i = f(a(43)),
            d = f(a(60)),
            s = f(a(4));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = [{
                contactId: "1",
                name: "Alice Smith",
                profilePicture: {
                    primaryUrl: o.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "2",
                name: "Bob Jones",
                profilePicture: {
                    primaryUrl: i.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "3",
                name: "Carl Stevens",
                profilePicture: {
                    primaryUrl: i.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }],
            p = [{
                contactId: "4",
                name: "Brenda Jones",
                profilePicture: {
                    primaryUrl: i.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }, {
                contactId: "5",
                name: "Andy Stevens",
                profilePicture: {
                    primaryUrl: i.default,
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }]
    },
    1846: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(""), [a, n] = (0, r.useState)(""), [i, d] = (0, r.useState)("");
            return r.default.createElement(u.default, null, r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "Basic Input")), r.default.createElement(s, null, r.default.createElement(u.default, null, r.default.createElement(l.default, {
                placeholder: "Enter text here",
                value: e,
                onChange: t
            }))), r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "With Error")), r.default.createElement(s, null, r.default.createElement(u.default, null, r.default.createElement(l.default, {
                invalid: !0,
                placeholder: "Enter text here",
                value: a,
                onChange: n
            }))), r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "display"
            }, "Disabled Input")), r.default.createElement(s, null, r.default.createElement(u.default, null, r.default.createElement(l.default, {
                disabled: !0,
                placeholder: "Enter text here",
                value: i,
                onChange: d
            }))))
        };
        var l = d(a(60)),
            n = d(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.default)({
            flexDirection: "row",
            paddingTop: 10,
            paddingBottom: 10
        })
    },
    1847: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const {
                colors: e
            } = (0, o.useTheme)();
            return (r.default.createElement(r.default.Fragment, null, r.default.createElement(i.default, {
                use: "display"
            }, "Semantic Text Colors"), r.default.createElement(p, null), r.default.createElement(M, null), r.default.createElement(p, null), r.default.createElement(i.default, {
                use: "display"
            }, "Colors"), r.default.createElement(p, null), r.default.createElement(y, null, r.default.createElement(g, {
                name: "Blue",
                color: e.blue
            }), r.default.createElement(g, {
                name: "Green",
                color: e.green
            }), r.default.createElement(g, {
                name: "Purple",
                color: e.purple
            }), r.default.createElement(g, {
                name: "Red",
                color: e.red
            })), r.default.createElement(p, null), r.default.createElement(y, null, r.default.createElement(g, {
                name: "Bubblegum",
                color: e.bubblegum
            }), r.default.createElement(g, {
                name: "Coral",
                color: e.coral
            }), r.default.createElement(g, {
                name: "Emerald",
                color: e.emerald
            }), r.default.createElement(g, {
                name: "Honey",
                color: e.honey
            }), r.default.createElement(g, {
                name: "Magenta",
                color: e.magenta
            }), r.default.createElement(g, {
                name: "Navy",
                color: e.navy
            }), r.default.createElement(g, {
                name: "Orchid",
                color: e.orchid
            }), r.default.createElement(g, {
                name: "Peach",
                color: e.peach
            }), r.default.createElement(g, {
                name: "Scarlet",
                color: e.scarlet
            }), r.default.createElement(g, {
                name: "Sky",
                color: e.sky
            }), r.default.createElement(g, {
                name: "Steel",
                color: e.steel
            }), r.default.createElement(g, {
                name: "Windows Blue",
                color: e.windowsBlue
            })), r.default.createElement(p, null), r.default.createElement(y, null, r.default.createElement(g, {
                name: "Blue Grey 25",
                color: e.blueGrey25
            }), r.default.createElement(g, {
                name: "Blue Grey 50",
                color: e.blueGrey50
            }), r.default.createElement(g, {
                name: "Blue Grey 75",
                color: e.blueGrey75
            }), r.default.createElement(g, {
                name: "Blue Grey",
                color: e.blueGrey
            })), r.default.createElement(p, null), r.default.createElement(i.default, {
                use: "display"
            }, "Grayscale"), r.default.createElement(i.default, {
                use: "body",
                wrapText: !0
            }, "Base colors go from low contrast (theme default background color) to high contrast."), r.default.createElement(m, {
                css: {
                    padding: 10
                }
            }, r.default.createElement(b, {
                baseNumber: 10
            }), r.default.createElement(b, {
                baseNumber: 20
            }), r.default.createElement(b, {
                baseNumber: 30
            }), r.default.createElement(b, {
                baseNumber: 40
            }), r.default.createElement(b, {
                baseNumber: 50
            }), r.default.createElement(b, {
                baseNumber: 60
            }), r.default.createElement(b, {
                baseNumber: 70
            }), r.default.createElement(b, {
                baseNumber: 80
            })), r.default.createElement(k, {
                themeName: "light"
            }, r.default.createElement(E, null)), r.default.createElement(k, {
                themeName: "dark"
            }, r.default.createElement(E, null)), r.default.createElement(k, {
                themeName: "grey"
            }, r.default.createElement(E, null)), r.default.createElement(p, null)))
        };
        var l = s(a(85)),
            n = s(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = s(a(2)),
            o = a(6),
            i = s(a(4));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, n.default)(u.default)(e => ({
                flex: 1,
                justifyContent: "space-between",
                height: 120,
                padding: 10,
                borderRadius: 8,
                backgroundColor: e.backgroundColor,
                fontSize: 12,
                border: e.border ? "1px solid gray" : "none",
                color: e.color
            })),
            f = (0, n.default)(u.default)(e => ({
                height: 50,
                padding: 2,
                flex: 1,
                backgroundColor: e.backgroundColor,
                alignItems: "center",
                justifyContent: "center"
            })),
            m = (0, n.default)(u.default)({
                flexDirection: "row"
            }),
            p = (0, n.default)(u.default)({
                width: 40,
                height: 40
            }),
            g = e => {
                const {
                    semanticColors: t
                } = (0, o.useTheme)(), {
                    textPrimary: a,
                    textInverted: l
                } = t, n = T(a, e.color) > T(l, e.color) ? a : l;
                return r.default.createElement(c, {
                    backgroundColor: e.color
                }, r.default.createElement(i.default, {
                    color: n
                }, e.name), r.default.createElement(i.default, {
                    color: n
                }, e.color))
            },
            y = (0, n.default)(u.default)({
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 120px)",
                gridColumnGap: 2,
                gridRowGap: 2
            });

        function E() {
            const e = (0, o.useTheme)();
            return (r.default.createElement(r.default.Fragment, null, r.default.createElement(i.default, {
                use: "subtext-semibold"
            }, e.name), r.default.createElement(m, null, r.default.createElement(h, {
                colorName: "base10"
            }), r.default.createElement(h, {
                colorName: "base20"
            }), r.default.createElement(h, {
                colorName: "base30"
            }), r.default.createElement(h, {
                colorName: "base40"
            }), r.default.createElement(h, {
                colorName: "base50"
            }), r.default.createElement(h, {
                colorName: "base60"
            }), r.default.createElement(h, {
                colorName: "base70"
            }), r.default.createElement(h, {
                colorName: "base80"
            }))))
        }

        function h(e) {
            const [t, a] = (0, r.useState)(!1), {
                colors: n
            } = (0, o.useTheme)(), u = n[e.colorName], d = (s = u, c = n.base10, (0, l.default)(s).alpha(1).mix((0, l.default)(c), 1 - (0, l.default)(s).alpha()));
            var s, c;
            const m = d.isDark() ? "white" : "black",
                p = Math.round(100 * (0, l.default)(u).alpha()) + "%",
                g = "Color value with alpha: " + u + "\nMixed with background: " + d.hex();
            return r.default.createElement(f, {
                title: g,
                backgroundColor: d.hex(),
                onMouseEnter: () => a(!0),
                onMouseLeave: () => a(!1)
            }, r.default.createElement(i.default, {
                use: "caption",
                color: m,
                numberOfLines: 2
            }, t ? p : ""))
        }

        function b(e) {
            return r.default.createElement(f, null, r.default.createElement(i.default, {
                use: "subtext"
            }, e.baseNumber))
        }

        function M() {
            const e = (0, o.useTheme)(),
                {
                    semanticColors: t
                } = e;
            return r.default.createElement(w, null, r.default.createElement(S, {
                name: "primary",
                color: t.primary,
                description: "Primary Messenger or app brand color. Used in places like main buttons."
            }), r.default.createElement(S, {
                name: "primaryAccent",
                color: t.primaryAccent,
                description: "This contains the OS level accent color (we overrite the blue), if possible to determine, otherwise it is the same as the brand primary color."
            }), r.default.createElement(S, {
                name: "secondary",
                color: t.secondary,
                description: ""
            }), r.default.createElement(S, {
                name: "disabled",
                color: t.disabled,
                description: "Fill color used for disabled UI elements such as toggles and checkboxes."
            }), r.default.createElement(S, {
                name: "error",
                color: t.error,
                description: "Color to use on error banners, text, etc..."
            }), r.default.createElement(S, {
                name: "bgSurface",
                color: t.bgSurface,
                description: "Background color for primary app surfaces. This should be the default window background color for most simple windows."
            }), r.default.createElement(S, {
                name: "bgSurfaceSecondary",
                color: t.bgSurfaceSecondary,
                description: "Background color for secondary app surfaces such as sidebars in Master/Detail views. "
            }), r.default.createElement(S, {
                name: "bgElevatedSurface",
                color: t.bgElevatedSurface,
                description: "Background for elevated surfaces such as dropdowns."
            }), r.default.createElement(S, {
                name: "bgLine",
                color: t.bgLine,
                description: "General purpose color for line dividers and stock borders."
            }), r.default.createElement(S, {
                name: "bgSelected",
                color: t.bgSelected,
                description: "General purpose color for selected elements (i.e. element background during click)"
            }), r.default.createElement(S, {
                name: "bgSelectedElevated",
                color: t.bgSelectedElevated,
                description: "General purpose color for selected elements sitting in elevated surfaces."
            }), r.default.createElement(S, {
                name: "textPrimary",
                color: t.textPrimary,
                description: "Primary color for text. Used in most places where text is needed."
            }), r.default.createElement(S, {
                name: "textSecondary",
                color: t.textSecondary,
                description: "Secondary color for text. Useful for places like subheaders or captions. Typically less contrasting than text primary."
            }), r.default.createElement(S, {
                name: "textWhite",
                color: t.textWhite,
                description: "White text. Useful for branded buttons, where we want white text regardless of theme."
            }), r.default.createElement(S, {
                name: "textInverted",
                color: t.textInverted,
                description: "WARNING Text color inverted of textPrimary. This is mostly useful when rendering text on top of a color without a scrim. This color will likely NOT BE USED in the actual application but it has useful applications in UIExplorer."
            }))
        }
        const w = (0, n.default)(u.default)(e => ({
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, 400px)",
                gridColumnGap: 120,
                gridRowGap: 24
            })),
            v = (0, n.default)(u.default)(e => ({
                backgroundColor: e.color,
                width: 120,
                height: 120,
                borderRadius: 8
            }));

        function S(e) {
            const {
                name: t,
                color: a,
                description: l
            } = e;
            return (r.default.createElement(m, null, r.default.createElement(v, {
                color: a
            }), r.default.createElement(u.default, {
                css: {
                    marginLeft: 12,
                    width: 0,
                    flex: 1
                }
            }, r.default.createElement(i.default, {
                use: "title"
            }, t), r.default.createElement(i.default, {
                use: "subtext"
            }, `${a}`), l && r.default.createElement(i.default, {
                use: "body",
                wrapText: !0
            }, l))))
        }

        function k(e) {
            const t = (0, o.useTheme)(),
                a = (0, o.getTheme)(e.themeName, t.os);
            return r.default.createElement(o.ThemeContextProvider, {
                theme: a
            }, r.default.createElement(u.default, {
                css: {
                    padding: 10,
                    backgroundColor: a.colors.base10
                }
            }, e.children))
        }

        function T(e, t) {
            return (0, l.default)(e).contrast((0, l.default)(t))
        }
    },
    1848: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return n.default.createElement(r.default, null, n.default.createElement(s.default, {
                use: "title"
            }, "1:1 Thread"), n.default.createElement(h, null, n.default.createElement(d.default, {
                thread: p,
                nullstate: y
            })), n.default.createElement(b, null), n.default.createElement(s.default, {
                use: "title"
            }, "Group Thread"), n.default.createElement(h, null, n.default.createElement(d.default, {
                thread: g,
                nullstate: E
            })))
        };
        var l = c(a(99)),
            n = c(a(0)),
            r = c(a(2)),
            u = a(30),
            o = c(a(31)),
            i = c(a(43)),
            d = c(a(656)),
            s = c(a(4));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = {
                primaryUrl: o.default,
                expiryTimestamp: 0,
                fallbackUrl: o.default
            },
            m = {
                primaryUrl: i.default,
                expiryTimestamp: 0,
                fallbackUrl: o.default
            },
            p = {
                ...u.EmptyInboxModel,
                threadPicture: f,
                threadName: "Mickey Mouse"
            },
            g = {
                ...u.EmptyInboxModel,
                threadPicture: m,
                threadName: "Mickey, Donald"
            },
            y = {
                ...u.EmptyMsysThreadNullstateDetailsModel,
                welcomeText: "1 mutual friend: Donald Duck"
            },
            E = {
                ...u.EmptyMsysThreadNullstateDetailsModel,
                welcomeText: "You're not connected to 1 member"
            },
            h = (0, l.default)(r.default, {
                target: "e1bugvax0",
                label: "Container"
            })({
                name: "19uzrm8",
                styles: "width:400px;height:250px;border:1px solid gray;padding:12px;"
            }),
            b = (0, l.default)(r.default, {
                target: "e1bugvax1",
                label: "Spacer"
            })({
                name: "1xzsyzi",
                styles: "height:10px;"
            })
    },
    1849: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, u.useMemo)(() => new Date, []),
                t = new Date;
            t.setDate(e.getDate() + 1), t.setHours(0, 0, 0, 0);
            const a = new Date(t);
            a.setHours(10, 15, 0, 0);
            const r = new Date(t);
            r.setHours(12, 0, 0, 0);
            const [d, s] = (0, u.useState)(null), m = e => s(e);
            return (u.default.createElement(u.default.Fragment, null, u.default.createElement(o.default, null, u.default.createElement(i.default, null, "12/24-hour based TimePicker with supported min value"), u.default.createElement(i.default, null, e.toString()), u.default.createElement(i.default, {
                style: {
                    margin: "10px 0",
                    padding: 10,
                    border: "1px solid green"
                }
            }, "Last changed value: ", u.default.createElement("strong", null, d))), u.default.createElement(c, null, u.default.createElement(f, null, u.default.createElement(i.default, {
                wrapText: !0
            }, "12h / Start at ", u.default.createElement("strong", null, "Date.now()"), " with min = Date.now()"), u.default.createElement(l.default, {
                onTimeChange: m,
                timeSeconds: (0, n.getSecondsOfToday)(e),
                minSeconds: (0, n.getSecondsOfToday)(e)
            })), u.default.createElement(f, null, u.default.createElement(i.default, {
                wrapText: !0
            }, "24h / Start at ", u.default.createElement("strong", null, "Date.now()"), " with min = Date.now()"), u.default.createElement(l.default, {
                onTimeChange: m,
                timeSeconds: (0, n.getSecondsOfToday)(e),
                minSeconds: (0, n.getSecondsOfToday)(e),
                mode: "24h"
            }))), u.default.createElement(c, null, u.default.createElement(f, null, u.default.createElement(i.default, {
                wrapText: !0
            }, "12h / Start at ", u.default.createElement("strong", null, "12:00 am tomorrow")), u.default.createElement(l.default, {
                timeSeconds: (0, n.getSecondsOfToday)(t),
                onTimeChange: m
            })), u.default.createElement(f, null, u.default.createElement(i.default, {
                wrapText: !0
            }, "24 / Start at ", u.default.createElement("strong", null, "12:00 am tomorrow")), u.default.createElement(l.default, {
                timeSeconds: (0, n.getSecondsOfToday)(t),
                onTimeChange: m,
                mode: "24h"
            }))), u.default.createElement(c, null, u.default.createElement(f, null, u.default.createElement(i.default, {
                wrapText: !0
            }, "12h / Start at ", u.default.createElement("strong", null, "12:00 pm tomorrow"), " with min = 10:15 am tomorrow"), u.default.createElement(l.default, {
                timeSeconds: (0, n.getSecondsOfToday)(r),
                minSeconds: (0, n.getSecondsOfToday)(a),
                onTimeChange: m
            })), u.default.createElement(f, null, u.default.createElement(i.default, {
                wrapText: !0
            }, "12h / Start at ", u.default.createElement("strong", null, "12:00 pm tomorrow"), " with min = 10:15 am tomorrow"), u.default.createElement(l.default, {
                timeSeconds: (0, n.getSecondsOfToday)(r),
                minSeconds: (0, n.getSecondsOfToday)(a),
                onTimeChange: m,
                mode: "24h"
            })))))
        };
        var l = s(a(191)),
            n = a(39),
            r = s(a(1)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = d();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = s(a(2)),
            i = s(a(4));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const c = (0, r.default)(o.default)({
                display: "flex",
                flexDirection: "row",
                margin: "10px 0"
            }),
            f = (0, r.default)(o.default)({
                width: "50%",
                boxSizing: "border-box",
                ":first-child": {
                    paddingRight: 20
                }
            })
    },
    1850: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, r.useState)(!0), [a, n] = (0, r.useState)(!1);
            return r.default.createElement(u.default, null, r.default.createElement(l.default, {
                disabled: !e,
                isChecked: a,
                onToggle: () => n(!a)
            }), r.default.createElement(s, {
                label: `Toggle switch ${e?"enabled":"disabled"}`,
                checked: e,
                onChange: t
            }))
        };
        var l = d(a(249)),
            n = d(a(1)),
            r = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            u = d(a(2)),
            o = d(a(167));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(o.default)({
            marginTop: 8
        })
    },
    1851: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return r.default.createElement(u.default, null, r.default.createElement(s, null, r.default.createElement(l.default, {
                tooltipProps: {
                    children: "I'm a tooltip",
                    placement: "top"
                }
            }, r.default.createElement(u.FocusableView, {
                onActivate: null
            }, r.default.createElement(c, {
                use: "body",
                wrapText: !0
            }, "Hover or focus me over me to see a top tooltip")))), r.default.createElement(s, null, r.default.createElement(l.default, {
                tooltipProps: {
                    children: "I'm a tooltip",
                    placement: "left"
                }
            }, r.default.createElement(u.FocusableView, {
                onActivate: null
            }, r.default.createElement(c, {
                use: "body",
                wrapText: !0
            }, "Hover or focus me to see a left tooltip")))), r.default.createElement(s, null, r.default.createElement(l.default, {
                tooltipProps: {
                    children: "I'm a tooltip",
                    placement: "right"
                }
            }, r.default.createElement(u.FocusableView, {
                onActivate: null
            }, r.default.createElement(c, {
                use: "body",
                wrapText: !0
            }, "Hover or focus me to see a right tooltip")))), r.default.createElement(s, null, r.default.createElement(l.default, {
                tooltipProps: {
                    children: "I'm a tooltip",
                    placement: "bottom"
                }
            }, r.default.createElement(u.FocusableView, {
                onActivate: null
            }, r.default.createElement(c, {
                use: "body",
                wrapText: !0
            }, "Hover or focus me to see a bottom tooltip")))), r.default.createElement(s, null, r.default.createElement(l.default, {
                tooltipProps: {
                    children: "I'm a tooltip",
                    placement: "bottom"
                },
                delay: 1e3
            }, r.default.createElement(u.FocusableView, {
                onActivate: null
            }, r.default.createElement(c, {
                use: "body",
                wrapText: !0
            }, "This tooltip will take 1s to display")))))
        };
        var l = d(a(73)),
            n = d(a(1)),
            r = d(a(0)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = i();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(2)),
            o = d(a(4));

        function i() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return i = function() {
                return e
            }, e
        }

        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const s = (0, n.default)(u.default)({
                padding: "10px 50px",
                width: "95%"
            }),
            c = (0, n.default)(o.default)({
                textAlign: "center",
                outline: "1px solid red"
            })
    },
    1852: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return u.default.createElement(o.default, null, u.default.createElement(d, null, u.default.createElement(s, null, u.default.createElement("tr", null, u.default.createElement("td", null, u.default.createElement(l.default, {
                use: "body",
                code: !0
            }, "Class")), u.default.createElement("td", null, u.default.createElement(l.default, {
                use: "body",
                code: !0
            }, "Weight")), u.default.createElement("td", null, u.default.createElement(l.default, {
                use: "body",
                code: !0
            }, "Size")), u.default.createElement("td", null, u.default.createElement(l.default, {
                use: "body",
                code: !0
            }, "Spacing")))), u.default.createElement("tbody", null, u.default.createElement(g, {
                use: "hero"
            }), u.default.createElement(p, null), u.default.createElement(g, {
                use: "headline"
            }), u.default.createElement(p, null), u.default.createElement(g, {
                use: "display"
            }), u.default.createElement(p, null), u.default.createElement(g, {
                use: "title"
            }), u.default.createElement(g, {
                use: "title-semibold"
            }), u.default.createElement(p, null), u.default.createElement(g, {
                use: "body"
            }), u.default.createElement(g, {
                use: "body-medium"
            }), u.default.createElement(g, {
                use: "body-semibold"
            }), u.default.createElement(g, {
                use: "body-bold"
            }), u.default.createElement(p, null), u.default.createElement(g, {
                use: "subtext"
            }), u.default.createElement(g, {
                use: "subtext-medium"
            }), u.default.createElement(g, {
                use: "subtext-semibold"
            }), u.default.createElement(g, {
                use: "subtext-bold"
            }), u.default.createElement(p, null), u.default.createElement(g, {
                use: "caption"
            }))), u.default.createElement(f, null, u.default.createElement(l.default, {
                use: "headline"
            }, "Line clamping support"), u.default.createElement(f, null, u.default.createElement(l.default, {
                use: "title"
            }, "1 line"), u.default.createElement(l.default, {
                use: "body"
            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien lectus, aliquam et placerat lobortis, consequat quis purus. Nunc non nulla ut erat suscipit mattis et ac ligula. Etiam viverra pretium diam. Praesent sodales eget sem pretium malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam enim urna, sollicitudin in facilisis at, blandit in diam. Suspendisse tempus rutrum velit, vel tempor nunc consequat et.")), u.default.createElement(f, null, u.default.createElement(l.default, {
                use: "title"
            }, "2 lines"), u.default.createElement(l.default, {
                use: "body",
                numberOfLines: 2
            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien lectus, aliquam et placerat lobortis, consequat quis purus. Nunc non nulla ut erat suscipit mattis et ac ligula. Etiam viverra pretium diam. Praesent sodales eget sem pretium malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam enim urna, sollicitudin in facilisis at, blandit in diam. Suspendisse tempus rutrum velit, vel tempor nunc consequat et.")), u.default.createElement(f, null, u.default.createElement(l.default, {
                use: "title"
            }, "3 lines"), u.default.createElement(l.default, {
                use: "body",
                numberOfLines: 3
            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien lectus, aliquam et placerat lobortis, consequat quis purus. Nunc non nulla ut erat suscipit mattis et ac ligula. Etiam viverra pretium diam. Praesent sodales eget sem pretium malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam enim urna, sollicitudin in facilisis at, blandit in diam. Suspendisse tempus rutrum velit, vel tempor nunc consequat et.")), u.default.createElement(f, null, u.default.createElement(l.default, {
                use: "title"
            }, "Wrap all"), u.default.createElement(l.default, {
                use: "body",
                wrapText: !0
            }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sapien lectus, aliquam et placerat lobortis, consequat quis purus. Nunc non nulla ut erat suscipit mattis et ac ligula. Etiam viverra pretium diam. Praesent sodales eget sem pretium malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam enim urna, sollicitudin in facilisis at, blandit in diam. Suspendisse tempus rutrum velit, vel tempor nunc consequat et."))))
        };
        var l = i(a(4)),
            n = a(200),
            r = i(a(1)),
            u = i(a(0)),
            o = i(a(2));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, r.default)("table")({
                borderCollapse: "collapse"
            }),
            s = (0, r.default)("thead")({
                opacity: .5
            }),
            c = (0, r.default)("tr")({
                height: 60
            }),
            f = (0, r.default)(o.default)({
                margin: 10
            }),
            m = (0, r.default)("tr")(e => ({
                borderBottomStyle: "solid",
                borderBottomWidth: 1,
                borderBottomColor: e.theme.colors.base40
            }));

        function p() {
            return u.default.createElement(m, null, u.default.createElement("td", null), u.default.createElement("td", null), u.default.createElement("td", null), u.default.createElement("td", null))
        }

        function g({
            use: e
        }) {
            const t = n.TextStyles[e];
            return (u.default.createElement(c, {
                key: y(e)
            }, u.default.createElement("td", null, u.default.createElement(l.default, {
                use: e
            }, y(e))), u.default.createElement("td", null, u.default.createElement(l.default, {
                use: "body",
                code: !0
            }, function(e) {
                const t = Object.keys(n.WEIGHTS).find(t => n.WEIGHTS[t] === e);
                if (!t) return e;
                return y(t)
            }(t.fontWeight || "regular"))), u.default.createElement("td", null, u.default.createElement(l.default, {
                use: "body",
                code: !0
            }, t.fontSize)), u.default.createElement("td", null, u.default.createElement(l.default, {
                use: "body",
                code: !0
            }, t.letterSpacing))))
        }

        function y(e) {
            if (e) {
                return e.split("-").map(e => e[0].toUpperCase() + e.slice(1)).join(" ")
            }
            return e
        }
    },
    1853: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, u.useState)(0), a = e => {
                e < 6.3 && (t(e => Math.min(e + Math.random(), 6.3)), setTimeout(a, 1e3, e))
            }, r = 0 === e ? "Update Now" : 6.3 == e ? "Download Complete" : e > 0 ? `${e.toFixed(1)} of 6.3 MB` : "Unknown", c = 0 === e ? "notice" : "loading", f = Math.round(e / 6.3 * 100), g = {
                isDev: !1,
                version: "1.2.3",
                buildInfo: {
                    number: "998877",
                    timestamp: Date.now() - (0, n.default)({
                        days: 8
                    }),
                    branch: "master",
                    revision: "0a4f5bbf625c2343c3d704b6a0cdb458e352bb13",
                    buildType: "official"
                },
                lastUpdateEvent: {
                    type: "idle"
                }
            };
            return u.default.createElement(o.default, null, u.default.createElement(p, null, u.default.createElement(d.default, null, "Update available"), u.default.createElement(l.UpdateBadge, {
                message: "Update Now",
                use: "notice"
            })), u.default.createElement(p, null, u.default.createElement(d.default, null, "Downloading"), u.default.createElement(l.UpdateBadge, {
                message: "50.2 of 82.3 MB",
                use: "loading",
                progress: 61
            })), u.default.createElement(p, null, u.default.createElement(d.default, null, "Download Failed"), u.default.createElement(l.UpdateBadge, {
                message: "Download Failed",
                use: "loading-failed",
                progress: 61
            })), u.default.createElement(p, null, u.default.createElement(d.default, null, "Download Failed"), u.default.createElement(l.UpdateBadge, {
                message: "Download Complete",
                use: "loading",
                progress: 100
            })), u.default.createElement(p, null, u.default.createElement(d.default, null, "A working example"), u.default.createElement(l.UpdateBadge, {
                message: r,
                use: c,
                progress: f,
                onActivate: () => a(0)
            })), u.default.createElement(p, null, u.default.createElement(d.default, null, "All 3 badges"), u.default.createElement(p, null, u.default.createElement(l.UpdateBadge, {
                message: "Update Now",
                use: "notice"
            }), u.default.createElement(s.default, m({}, g, {
                lastUpdateEvent: {
                    type: "update-not-available",
                    info: {
                        version: "1.2.3"
                    }
                }
            })), u.default.createElement(i.default, null))))
        };
        var l = a(526),
            n = f(a(47)),
            r = f(a(1)),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = c();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = f(a(2)),
            i = f(a(525)),
            d = f(a(4)),
            s = f(a(316));

        function c() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return c = function() {
                return e
            }, e
        }

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function m() {
            return (m = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l])
                }
                return e
            }).apply(this, arguments)
        }
        const p = (0, r.default)(o.default)({
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between"
        })
    },
    1854: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, u.useState)(!1);
            return (u.default.createElement(o.default, null, u.default.createElement(r.Provider, {
                store: (0, l.getExampleStore)()
            }, u.default.createElement(d.default, {
                name: "userStatusModalExample"
            }, u.default.createElement(i.default, {
                "aria-label": "userStatusModalExample",
                telemetryName: "userStatusModalExample",
                caption: "Show User Status Modal",
                onClick: () => {
                    t(!0)
                }
            })), e && u.default.createElement(n.default, {
                testCloseModal: () => t(!1)
            }))))
        };
        var l = a(25),
            n = c(a(657)),
            r = a(11),
            u = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            o = c(a(2)),
            i = c(a(16)),
            d = c(a(13));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
    },
    1855: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = {
                isDev: !1,
                version: "1.2.3",
                buildInfo: {
                    number: "998877",
                    timestamp: Date.now() - (0, n.default)({
                        days: 8
                    }),
                    branch: "master",
                    revision: "0a4f5bbf625c2343c3d704b6a0cdb458e352bb13",
                    buildType: "official"
                },
                lastUpdateEvent: {
                    type: "idle"
                }
            };
            return (o.default.createElement(d.default, null, o.default.createElement(m, null, o.default.createElement(s.default, null, "In development mode"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                isDev: !0,
                buildInfo: {
                    number: null,
                    timestamp: null,
                    branch: null,
                    revision: null,
                    buildType: "dev"
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Built locally 15m ago"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                isDev: !1,
                version: "1.2.3",
                buildInfo: {
                    number: null,
                    timestamp: Date.now() - (0, n.default)({
                        minutes: 15
                    }),
                    branch: null,
                    revision: null,
                    buildType: "adhoc"
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Built on sandcastle 2 days ago"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                isDev: !1,
                version: "1.2.3",
                buildInfo: {
                    number: "998877",
                    timestamp: Date.now() - (0, n.default)({
                        days: 2
                    }),
                    branch: "master",
                    revision: "0a4f5bbf625c2343c3d704b6a0cdb458e352bb13",
                    buildType: "official"
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Old sandcastle build"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                isDev: !1,
                version: "1.2.3",
                buildInfo: {
                    number: "998877",
                    timestamp: Date.now() - (0, n.default)({
                        days: 10
                    }),
                    branch: "master",
                    revision: "0a4f5bbf625c2343c3d704b6a0cdb458e352bb13",
                    buildType: "official"
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Checking for updates"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: {
                    type: "checking-for-update"
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Update not available"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: {
                    type: "update-not-available",
                    info: {
                        version: "1.2.3"
                    }
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Update available"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: {
                    type: "update-available",
                    info: {
                        version: "1.2.4"
                    }
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Update cancelled"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: {
                    type: "update-cancelled",
                    info: {
                        version: "1.2.4"
                    }
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Downloading update"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: {
                    type: "download-progress",
                    info: {
                        total: 1e3,
                        delta: 10,
                        transferred: 500,
                        percent: 50.2938472,
                        bytesPerSecond: 20
                    }
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Update downloaded"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: {
                    type: "update-downloaded"
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Update error"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: {
                    type: "error",
                    info: new Error("Permission denied /root")
                }
            })))), o.default.createElement(m, null, o.default.createElement(s.default, null, "Bad update event"), o.default.createElement(p, null, o.default.createElement(l.default, f({}, e, {
                lastUpdateEvent: null
            }))))))
        };
        var l = c(a(316)),
            n = c(a(47)),
            r = c(a(1)),
            u = a(11),
            o = c(a(0)),
            i = a(138),
            d = c(a(2)),
            s = c(a(4));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function f() {
            return (f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (e[l] = a[l])
                }
                return e
            }).apply(this, arguments)
        }
        const m = (0, r.default)(d.default)({
            position: "relative",
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between"
        });
        const p = ({
            children: e
        }) => {
            const t = ["dev", "alpha", "beta", "prod"],
                a = t[Math.floor(Math.random() * t.length)],
                l = (0, i.createStore)({
                    initialState: {
                        gatekeepers: "prod" === a ? {} : {
                            [`archon_release_channel_${a}`]: !0
                        }
                    }
                });
            return o.default.createElement(u.Provider, {
                store: l
            }, e)
        }
    },
    1856: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const e = (0, l.default)(),
                t = (0, l.default)(),
                a = (0, o.useRef)(null),
                {
                    showContextMenu: r
                } = (0, s.useContextMenu)(),
                p = c.exampleThreadThemes["Lavender Purple"],
                g = () => {
                    e.actions.start()
                };
            return (0, o.useEffect)(() => {
                t.actions.start()
            }, []), o.default.createElement(i.default, null, o.default.createElement(u.Provider, {
                store: (0, c.getExampleStore)()
            }, o.default.createElement(n.default, {
                threadKey: null,
                isAppDarkTheme: !1,
                threadThemeOverride: p
            }, o.default.createElement(E, null), o.default.createElement(f.default, {
                use: "display"
            }, "Entry point"), o.default.createElement(E, null), o.default.createElement(y, null, o.default.createElement(d.default, {
                "aria-label": "",
                title: "",
                telemetryName: "AddMedia",
                elementRef: a,
                isOpen: e.state.isOpen,
                onClick: e.state.isOpen ? () => {
                    e.actions.reset()
                } : () => {
                    r({
                        target: a.current,
                        placement: "bottom-start",
                        items: [{
                            id: "recordVoiceClip",
                            label: "Record a Voice Clip",
                            onClick: () => g()
                        }],
                        contextMenuStyles: {
                            accentColor: p.gradientColors || p.color
                        }
                    })
                },
                disabled: !1
            }), e.state.isOpen && o.default.createElement(h, null, o.default.createElement(m.default, {
                state: e.state,
                toggle: e.actions.toggle,
                audioSeeker: e.audioSeeker
            })))), o.default.createElement(n.default, {
                threadKey: null,
                isAppDarkTheme: !1
            }, o.default.createElement(E, null), o.default.createElement(E, null), o.default.createElement(f.default, {
                use: "display"
            }, "Already opened and recording"), o.default.createElement(E, null), o.default.createElement(y, null, t.state.isOpen && o.default.createElement(h, null, o.default.createElement(m.default, {
                state: t.state,
                toggle: t.actions.toggle,
                audioSeeker: t.audioSeeker
            }))), o.default.createElement(E, null), o.default.createElement(f.default, {
                use: "body"
            }, "(Refresh to start recording again)"))))
        };
        var l = g(a(329)),
            n = g(a(41)),
            r = g(a(1)),
            u = a(11),
            o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = p();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(0)),
            i = g(a(2)),
            d = g(a(567)),
            s = a(66),
            c = a(25),
            f = g(a(4)),
            m = g(a(569));

        function p() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return p = function() {
                return e
            }, e
        }

        function g(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const y = (0, r.default)(i.default)({
                padding: "30px 10px",
                flexDirection: "row",
                alignItems: "center",
                height: 36
            }),
            E = (0, r.default)(i.default)({
                width: 20,
                height: 20
            }),
            h = (0, r.default)(i.default)({
                flexGrow: 1,
                margin: "0 4px"
            })
    },
    1857: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return r.default.createElement(f, null, r.default.createElement(d.default, {
                use: "display"
            }, "Not Implemented Yet"), r.default.createElement(p, {
                taskNumber: e.taskNumber
            }))
        };
        var l = c(a(9)),
            n = c(a(1)),
            r = c(a(0)),
            u = c(a(2)),
            o = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = s();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(16)),
            i = c(a(13)),
            d = c(a(4));

        function s() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return s = function() {
                return e
            }, e
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, n.default)(u.default)({
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
            }),
            m = (0, n.default)(u.default)({
                flexBasis: 10
            });

        function p(e) {
            if (!e.taskNumber) return null;
            const t = "https://our.intern.facebook.com/intern/tasks/t | null=" + e.taskNumber;
            return (r.default.createElement(i.default, {
                name: "missingExample"
            }, r.default.createElement(m, null), r.default.createElement(o.default, {
                "aria-label": "View Task For Missing Example",
                size: o.RectangleButtonSize.Small,
                telemetryName: "viewTaskForMissingExample",
                caption: "T" + e.taskNumber,
                onClick: () => l.default.platform.openExternalURL(t)
            })))
        }
    },
    1858: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return i.default.createElement(f, null, e.todosCount > 0 ? i.default.createElement(p, {
                color: e.color
            }, i.default.createElement(s.default, {
                use: "caption",
                color: (0, l.default)(e.color).negate().toString()
            }, e.todosCount)) : null, e.windowsVersion && i.default.createElement(m, {
                ready: e.windowsVersionReady,
                title: "Windows design status"
            }, i.default.createElement(u.default, {
                size: 18,
                color: e.color
            })), i.default.createElement(m, {
                ready: e.designsReady,
                title: "Designs status"
            }, i.default.createElement(o.default, {
                size: 18,
                color: e.color
            })), i.default.createElement(m, {
                ready: e.codeReady,
                title: "Implementation status"
            }, i.default.createElement(r.default, {
                size: 18,
                color: e.color
            })))
        };
        var l = c(a(85)),
            n = c(a(1)),
            r = c(a(1859)),
            u = c(a(1860)),
            o = c(a(300)),
            i = c(a(0)),
            d = c(a(2)),
            s = c(a(4));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, n.default)(d.default)({
                flexDirection: "row",
                alignItems: "center"
            }),
            m = (0, n.default)(d.default)(e => ({
                opacity: e.ready ? 1 : .2
            })),
            p = (0, n.default)(d.default)(e => ({
                borderRadius: 8,
                minWidth: 16,
                backgroundColor: e.color,
                padding: "0px 4px",
                marginRight: 2
            }))
    },
    1859: function(e, t, a) {
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
                fillRule: "evenodd",
                d: "M18 29c6.075 0 11-4.925 11-11S24.075 7 18 7 7 11.925 7 18s4.925 11 11 11zm4.865-14.498a1 1 0 00-1.73-1.004l-3.829 6.595a.25.25 0 01-.393.05l-2.206-2.205a1 1 0 10-1.414 1.414l3.355 3.355a1 1 0 001.572-.205l4.645-8z",
                clipRule: "evenodd"
            }))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    1860: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return n.default.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                height: e.height ? e.height : e.size,
                width: e.width ? e.width : e.size,
                color: e.color
            }, n.default.createElement("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M19 30c-6.627 0-12-5.373-12-12S12.373 6 19 6s12 5.373 12 12-5.373 12-12 12zm-.5-17.5v5H24v-5.19a1 1 0 00-1.263-.966L18.5 12.5zm-1 .273l-3.763 1.026a1 1 0 00-.737.965V17.5h4.5v-4.727zm1 10.727l4.237 1.156A1 1 0 0024 23.69V18.5h-5.5v5zm-1-.273V18.5H13v2.736a1 1 0 00.737.965l3.763 1.026z"
            }))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    1861: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function({
            todo: e = []
        }) {
            if (0 === e.length) return null;
            return (n.default.createElement(i, null, n.default.createElement(u.default, {
                use: "subtext-bold"
            }, "TODO"), e.map(e => n.default.createElement(u.default, {
                use: "body",
                key: e
            }, e))))
        };
        var l = o(a(1)),
            n = o(a(0)),
            r = o(a(2)),
            u = o(a(4));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const i = (0, l.default)(r.default)(e => ({
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: e.theme.colors.base50,
            borderTopStyle: "solid"
        }))
    },
    244: function(e, t, a) {
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
                d: "M21.996 19.317c-1.405 1.406-3.747 1.408-5.23-.075a1.25 1.25 0 00-1.768 1.768c2.423 2.424 6.349 2.494 8.767.076l3.46-3.461c2.419-2.418 2.35-6.344-.075-8.767-2.423-2.424-6.348-2.494-8.766-.076l-.557.557a1.25 1.25 0 001.769 1.768l.556-.556c1.406-1.406 3.747-1.408 5.23.075 1.483 1.483 1.48 3.825.075 5.23l-3.46 3.461z"
            }), n.default.createElement("path", {
                fill: "currentColor",
                d: "M14.012 16.69c1.406-1.405 3.747-1.407 5.23.076a1.25 1.25 0 001.768-1.768c-2.423-2.424-6.348-2.493-8.766-.076l-3.462 3.462c-2.418 2.418-2.348 6.343.076 8.766 2.423 2.424 6.349 2.494 8.767.076l.556-.557a1.25 1.25 0 00-1.768-1.768l-.557.556c-1.405 1.406-3.747 1.408-5.23-.075-1.483-1.483-1.48-3.824-.075-5.23l3.461-3.461z"
            }))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    246: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l, n = a(8),
            r = (l = a(5)) && l.__esModule ? l : {
                default: l
            };
        var u = {
            privacyOptions: {
                [n.RoomAudienceType.Anyone]: r.default._("Friends you invite and people with the link", null, {
                    hk: "2bzOZl"
                }),
                [n.RoomAudienceType.InvitedOnly]: r.default._("Only friends you invite", null, {
                    hk: "1ieYA9"
                })
            },
            joinPermissions: {
                [n.RoomJoinPermission.AnyoneWhoCanLoadTheLink]: r.default._("Anyone with the link", null, {
                    hk: "36PYjB"
                }),
                [n.RoomJoinPermission.RequiresJoinRequest]: r.default._("Only people you approve", null, {
                    hk: "40bObz"
                })
            }
        };
        t.default = u
    },
    248: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            const {
                title: t,
                subtitle: a,
                style: l
            } = e, r = e.icon, i = (0, u.useTheme)();
            return n.default.createElement(d, {
                style: l
            }, n.default.createElement(r, {
                size: 36,
                color: i.colors.blueGrey75
            }), n.default.createElement(s, null, n.default.createElement(o.default, {
                use: "body-semibold",
                numberOfLines: 1
            }, t), n.default.createElement(o.default, {
                use: "caption",
                wrapText: !0,
                color: i.colors.base70
            }, a)))
        };
        var l = i(a(1)),
            n = i(a(0)),
            r = i(a(2)),
            u = a(6),
            o = i(a(4));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, l.default)(r.default)(e => ({
                width: "100%",
                minHeight: 48,
                paddingTop: 8,
                paddingBottom: 8,
                alignItems: "center",
                flexDirection: "row"
            })),
            s = (0, l.default)(r.default)(e => ({
                flex: 1,
                paddingLeft: 16
            }))
    },
    25: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGroupExampleStore = function() {
            const e = {
                ...(0, i.getDefaultInboxState)(),
                threads: {
                    2: {
                        ...s.EmptyInboxModel,
                        threadType: n.ThreadType.Group
                    }
                },
                orderedThreadKeys: ["2"],
                messages: {
                    2: p()
                },
                orderedMessageOTIDs: {
                    2: ["shortMessage", "longMessage", "veryLongMessage", "adminMessage", "adminViewerChangedColorsMessage", "stickerMessage", "attachmentMessage", "emojiMessage", "emojiTextMessage", "sendingMessage", "errorMessage", "forwardedTextMessage", "forwardedImageMessage"]
                },
                threadLastReadByInfo: {
                    2: {
                        shortMessage: ["A", "B"],
                        longMessage: ["A"]
                    }
                },
                participants: {
                    2: g()
                },
                primaryThreadKey: "2",
                savedComposerState: {},
                messageSearchInfo: {
                    2: {
                        ...(0, i.getDefaultMessageSearchInfo)(),
                        selectedResultMessageId: "messageSearchId",
                        mostRecentSearchQuery: "person"
                    }
                }
            };
            return (0, d.createStore)({
                initialState: {
                    inbox: e,
                    authentication: {
                        authenticationData: {
                            userID: "X"
                        }
                    },
                    rtc: {
                        isRtcEnabled: !0,
                        rtcStackStatus: "running"
                    },
                    appContext: {
                        network: {
                            isNetworkConnected: !0
                        },
                        modal: {
                            currentModal: null,
                            modalOptions: null
                        },
                        focus: {
                            isCurrentWindowFocused: !0
                        }
                    },
                    experiments: u.initialState,
                    gatekeepers: {
                        gatekeepers: o.initialState
                    }
                }
            })
        }, t.getExampleStore = function(e) {
            const t = {
                ...(0, i.getDefaultInboxState)(),
                threads: {
                    1: {
                        ...s.EmptyInboxModel
                    },
                    2: {
                        ...s.EmptyInboxModel
                    }
                },
                messages: {
                    1: p(),
                    2: p()
                },
                orderedMessageOTIDs: {
                    1: ["shortMessage", "longMessage", "veryLongMessage", "adminMessage", "adminViewerChangedColorsMessage", "stickerMessage", "attachmentMessage", "emojiMessage", "emojiTextMessage", "sendingMessage", "errorMessage", "forwardedTextMessage", "forwardedImageMessage"],
                    2: ["shortMessage", "longMessage", "veryLongMessage", "adminMessage", "adminViewerChangedColorsMessage", "stickerMessage", "attachmentMessage", "emojiMessage", "emojiTextMessage", "sendingMessage", "errorMessage", "forwardedTextMessage", "forwardedImageMessage"]
                },
                threadLastReadByInfo: {
                    1: {
                        shortMessage: ["A", "B"],
                        longMessage: ["A"]
                    },
                    2: {
                        shortMessage: ["A", "B"],
                        longMessage: ["A"]
                    }
                },
                participants: {
                    1: g(),
                    2: g()
                },
                primaryThreadKey: "1"
            };
            return (0, d.createStore)({
                initialState: {
                    inbox: e || t,
                    audioVideo: {
                        audio: {
                            1: {
                                playingAudioFbid: null,
                                audioState: {
                                    1: {
                                        state: r.AudioStates.Loading
                                    }
                                }
                            }
                        },
                        video: {}
                    },
                    authentication: {
                        authenticationData: {
                            userID: "X"
                        }
                    },
                    rtc: {
                        isRtcEnabled: !0,
                        rtcStackStatus: "running"
                    },
                    gatekeepers: {},
                    appContext: {
                        network: {
                            isNetworkConnected: !0
                        },
                        focus: {
                            currentWindowIsFocused: !0
                        },
                        modal: {
                            currentModal: null,
                            modalOptions: null
                        }
                    },
                    experiments: u.initialState,
                    downloads: {
                        downloadUrlToId: [],
                        downloadState: []
                    }
                }
            })
        }, t.getParticipants = y, t.getLastReadBy = E, t.makeMessages = function(e) {
            return e.map((e, t) => ({
                message: {
                    ...e,
                    messageId: e.messageId ? e.messageId : `message-${t}`,
                    offlineThreadingId: e.messageId ? e.messageId : `test-message-${t}`,
                    timestampMs: 100 * t,
                    sendStatusV2: 2
                }
            }))
        }, t.makeMessage = h, t.exampleThreadThemes = void 0;
        var l = a(134),
            n = a(8),
            r = a(170),
            u = a(224),
            o = a(298),
            i = a(23),
            d = a(138),
            s = a(30),
            c = m(a(31)),
            f = m(a(43));

        function m(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function p() {
            return {
                shortMessage: h(l.shortMessage),
                longMessage: h(l.longMessage),
                veryLongMessage: h(l.veryLongMessage),
                adminMessage: h(l.adminMessage),
                adminViewerChangedColorsMessage: h(l.adminViewerChangedColorsMessage),
                stickerMessage: h(l.stickerMessage),
                attachmentMessage: h(l.attachmentMessage),
                emojiMessage: h(l.emojiMessage),
                emojiTextMessage: h(l.emojiTextMessage),
                sendingMessage: h(l.sendingMessage),
                errorMessage: h(l.errorMessage),
                mentionPersonAMessage: h(l.mentionPersonAMessage),
                mentionPersonBMessage: h(l.mentionPersonBMessage),
                mentionPersonBAndUrlMessage: h(l.mentionPersonBAndUrlMessage),
                urlMessage: h(l.urlMessage),
                replyToSenderMessage: h(l.replyToSenderMessage),
                replyToSenderHotlikeMessage: h(l.replyToSenderHotlikeMessage),
                replyToReceiverMessage: h(l.replyToReceiverMessage),
                forwardedTextMessage: h(l.forwardedTextMessage),
                forwardedImageMessage: h(l.forwardedImageMessage, [l.imageAttachment]),
                rtcCallMessage1: h({
                    ...l.rtcCallMessage,
                    offlineThreadingId: "rtcCallMessage1",
                    messageId: "rtcCallM1"
                }, [{
                    ...l.incomingMissedAudio,
                    sourceText: "2:00 PM"
                }]),
                rtcCallMessage2: h({
                    ...l.rtcCallMessage,
                    offlineThreadingId: "rtcCallMessage2",
                    messageId: "rtcCallM2"
                }, [{
                    ...l.incomingMissedAudio,
                    sourceText: "2:01 PM"
                }]),
                rtcCallMessage3: h({
                    ...l.rtcCallMessage,
                    offlineThreadingId: "rtcCallMessage3",
                    messageId: "rtcCallM3"
                }, [{
                    ...l.incomingMissedAudio,
                    sourceText: "2:02 PM"
                }]),
                rtcCallMessage4: h(l.rtcCallMessage, [{
                    ...l.incomingMissedVideo,
                    sourceText: "2:02 PM"
                }])
            }
        }

        function g() {
            const e = y();
            return {
                map: {
                    A: e[0],
                    B: e[1]
                },
                list: [e[0], e[1]]
            }
        }

        function y() {
            return [{
                ...s.EmptyMsysParticipantModel,
                profilePictureUrl: c.default,
                contactId: "A",
                readWatermarkTimestampMs: 200,
                deliveredWatermarkTimestampMs: 200,
                name: "participant a"
            }, {
                ...s.EmptyMsysParticipantModel,
                profilePictureUrl: f.default,
                contactId: "B",
                readWatermarkTimestampMs: 300,
                deliveredWatermarkTimestampMs: 400,
                name: "participant b"
            }]
        }

        function E() {
            return {
                shortMessage: ["A", "B"],
                longMessage: ["A"]
            }
        }

        function h(e, t = []) {
            return {
                message: {
                    ...s.EmptyArchonMessageModel,
                    ...e,
                    messageId: e.messageId,
                    hasAttachment: e.hasAttachment,
                    offlineThreadingId: e.offlineThreadingId,
                    timestampMs: 350
                },
                attachments: t
            }
        }
        t.exampleThreadThemes = {
            "Default Blue": {
                id: "",
                idx: 0,
                normalThemeId: "",
                isDarkVariant: !1,
                reverseGradientsForRadial: !1,
                accessibilityLabel: "",
                color: "#0084FF",
                deprecated: !1,
                themeType: 0,
                icon: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                background: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            },
            "Lavender Purple": {
                id: "",
                idx: 0,
                normalThemeId: "",
                isDarkVariant: !1,
                reverseGradientsForRadial: !1,
                accessibilityLabel: "",
                color: "#D696BB",
                deprecated: !1,
                themeType: 0,
                icon: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                background: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            },
            Berry: {
                id: "",
                idx: 0,
                normalThemeId: "",
                isDarkVariant: !1,
                reverseGradientsForRadial: !1,
                accessibilityLabel: "",
                color: "#F01D6A",
                gradientColors: ["#005FFF", "#9200FF", "#FF2E19"],
                deprecated: !1,
                themeType: 0,
                icon: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                background: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            },
            Mango: {
                id: "",
                idx: 0,
                normalThemeId: "",
                isDarkVariant: !1,
                reverseGradientsForRadial: !1,
                accessibilityLabel: "",
                color: "#FF9C19",
                gradientColors: ["#FFdC2D", "#FF9616", "#FF4F00"],
                deprecated: !1,
                themeType: 0,
                icon: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                },
                background: {
                    primaryUrl: "",
                    fallbackUrl: "",
                    expiryTimestamp: 0
                }
            }
        }
    },
    31: function(e, t, a) {
        e.exports = a.p + "assets/packages/frontend/src/ui/profilePhoto/Image1.png"
    },
    322: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            return o.default.createElement(i.default, null, o.default.createElement(u.Provider, {
                store: (0, n.getExampleStore)()
            }, o.default.createElement(m, {
                use: "title"
            }, "Common reactions"), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [p, g, g, y, y, y, E, h, b, M, M]
                },
                messageReactions: [p, g, g, y, y, y, E, h, b, M, M],
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                isSenderViewer: !0,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [g, b, b, E]
                },
                showReactionPicker: !1,
                canSeeDelivery: !0,
                messageReactions: [g, b, b, E],
                isFirst: !0,
                isLast: !0,
                isSenderViewer: !1,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [p, M, M]
                },
                messageReactions: [p, M, M],
                isFirst: !0,
                isLast: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isSenderViewer: !0,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [h]
                },
                messageReactions: [h],
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !1,
                isSenderViewer: !1,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [E, y, p]
                },
                messageReactions: [E, y, p],
                isFirst: !1,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                isSenderViewer: !1,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [g]
                },
                messageReactions: [g],
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !1,
                isSenderViewer: !0,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [g, g, g]
                },
                messageReactions: [g, g, g],
                isFirst: !1,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                isSenderViewer: !0,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.emojiReactionMessage])[0],
                    reactions: [w]
                },
                messageReactions: [w],
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                isSenderViewer: !1,
                isWindowFocused: !0
            }), o.default.createElement(m, {
                use: "title"
            }, "Workplace saved & pinned messages"), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0]
                },
                messageReactions: [],
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                isSenderViewer: !1,
                isWindowFocused: !0,
                isSaved: !0,
                isPinned: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0]
                },
                messageReactions: [],
                isFirst: !0,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !1,
                isSenderViewer: !0,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0]
                },
                messageReactions: [],
                isFirst: !1,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !1,
                isSenderViewer: !0,
                isWindowFocused: !0,
                isSaved: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0]
                },
                messageReactions: [],
                isFirst: !1,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                isSenderViewer: !0,
                isWindowFocused: !0
            }), o.default.createElement(d.default, {
                message: {
                    ...(0, n.makeMessages)([l.shortMessage])[0],
                    reactions: [g, b, b, E]
                },
                messageReactions: [g, b, b, E],
                isFirst: !1,
                showReactionPicker: !1,
                canSeeDelivery: !0,
                isLast: !0,
                isSenderViewer: !1,
                isWindowFocused: !0,
                isSaved: !0,
                isPinned: !0
            })))
        }, t.nonStandardReaction = t.wowReaction = t.thumbsUpReaction = t.thumbsDownReaction = t.sadReaction = t.laughReaction = t.heartReaction = t.angryReaction = void 0;
        var l = a(134),
            n = a(25),
            r = f(a(1)),
            u = a(11),
            o = f(a(0)),
            i = f(a(2)),
            d = f(a(172)),
            s = a(30),
            c = f(a(4));

        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const m = (0, r.default)(c.default)({
                marginBottom: 20,
                "&:not(:first-child)": {
                    marginTop: 40
                }
            }),
            p = {
                ...s.EmptyMsysReactionModel,
                reaction: "😠",
                actor: {
                    ...s.EmptyMsysParticipantModel,
                    name: "John Doe"
                }
            };
        t.angryReaction = p;
        const g = {
            ...s.EmptyMsysReactionModel,
            reaction: "😍",
            actor: {
                ...s.EmptyMsysParticipantModel,
                name: "John Doe"
            }
        };
        t.heartReaction = g;
        const y = {
            ...s.EmptyMsysReactionModel,
            reaction: "😆",
            actor: {
                ...s.EmptyMsysParticipantModel,
                name: "John Doe"
            }
        };
        t.laughReaction = y;
        const E = {
            ...s.EmptyMsysReactionModel,
            reaction: "😢",
            actor: {
                ...s.EmptyMsysParticipantModel,
                name: "John Doe"
            }
        };
        t.sadReaction = E;
        const h = {
            ...s.EmptyMsysReactionModel,
            reaction: "👎",
            actor: {
                ...s.EmptyMsysParticipantModel,
                name: "John Doe"
            }
        };
        t.thumbsDownReaction = h;
        const b = {
            ...s.EmptyMsysReactionModel,
            reaction: "👍",
            actor: {
                ...s.EmptyMsysParticipantModel,
                name: "John Doe"
            }
        };
        t.thumbsUpReaction = b;
        const M = {
            ...s.EmptyMsysReactionModel,
            reaction: "😮",
            actor: {
                ...s.EmptyMsysParticipantModel,
                name: "John Doe"
            }
        };
        t.wowReaction = M;
        const w = {
            ...s.EmptyMsysReactionModel,
            reaction: "😈",
            actor: {
                ...s.EmptyMsysParticipantModel,
                name: "John Doe"
            }
        };
        t.nonStandardReaction = w
    },
    43: function(e, t, a) {
        e.exports = a.p + "assets/packages/frontend/src/ui/profilePhoto/Image2.png"
    },
    529: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function() {
            const [e, t] = (0, p.useState)([]), a = (0, p.useRef)(null);
            (0, p.useLayoutEffect)(() => {
                const e = document.getElementById("uiexplorer-" + f);
                a.current && e && e.parentElement && (a.current.scrollTop = e.parentElement.offsetTop)
            }, []), (0, c.default)(`${o.default.devName} UI Explorer`), (0, s.default)({
                width: 800,
                height: 600,
                resizable: !0,
                persistentWindowKey: "UI_EXPLORER"
            });
            const [f, E] = (0, d.default)("uiexplorer.name", y.default[0].modules[0].name), [M, P] = (0, p.useState)("");
            return p.default.createElement(_.default, {
                onEvent: (a, l, n, r) => {
                    (a => {
                        t(e.concat(JSON.stringify(a, null, 4)).slice(-25))
                    })({
                        surface: a,
                        target: l,
                        event: n,
                        context: r
                    }), i.default.metrics.trackStrictEvent((0, u.UserInteractionEvent)({
                        event: n,
                        target: l,
                        surface: a,
                        context: r
                    }))
                }
            }, p.default.createElement(z.Provider, {
                value: e
            }, p.default.createElement(O.default, {
                name: "uiExplorer"
            }, p.default.createElement(k.default, {
                persistentStorageKey: "uiExplorer",
                renderMaster: ({
                    isAnimating: e,
                    isCompactMode: t,
                    activateDetailView: a
                }) => p.default.createElement(j, null, p.default.createElement(T.default, {
                    query: M || "",
                    onQueryChange: P
                }), p.default.createElement(r.default, null, p.default.createElement(v.default, null, y.default.map((l, n) => p.default.createElement(V, {
                    key: n,
                    showSelection: !t || e,
                    section: l,
                    selectedExample: f,
                    onSelectModule: e => {
                        E(e.name), a()
                    },
                    exampleFilter: M
                })))), p.default.createElement(F, null, p.default.createElement(R.default, {
                    use: "body"
                }, "Theme"), p.default.createElement(g.default, null))),
                renderDetail: e => {
                    let t = null;
                    for (const e of y.default)
                        for (const a of e.modules)
                            if (a.name === f) {
                                t = a;
                                break
                            } if (!t) return null;
                    let a = null;
                    const {
                        spec: u
                    } = t;
                    return u && (a = p.default.createElement(h.default, {
                        "aria-label": "Open designs",
                        telemetryName: "openDesignsButton",
                        size: h.RoundButtonSize.Small,
                        onClick: () => i.default.platform.openExternalURL(u),
                        icon: m.default,
                        css: {
                            marginRight: 10
                        }
                    })), p.default.createElement(D, null, p.default.createElement(n.default, {
                        listenToGlobalErrors: !1,
                        component: "uiexplorer",
                        fallback: (e, t) => p.default.createElement(l.default, {
                            error: e,
                            info: t
                        })
                    }, p.default.createElement(r.default, null, p.default.createElement(U, null, p.default.createElement(B, null, p.default.createElement(S.default, e, p.default.createElement(N, null, p.default.createElement(R.default, {
                        use: "headline",
                        css: {
                            flex: 1
                        }
                    }, t.name), a))), t.example || p.default.createElement(b.default, {
                        taskNumber: t.task
                    }))), p.default.createElement(w.default, {
                        todo: t.todo
                    })))
                }
            }))))
        }, t.UIExplorerEventContext = void 0;
        var l = I(a(356)),
            n = I(a(250)),
            r = I(a(45)),
            u = a(24),
            o = I(a(83)),
            i = I(a(9)),
            d = I(a(243)),
            s = I(a(247)),
            c = I(a(343)),
            f = I(a(1)),
            m = I(a(300)),
            p = A(a(0)),
            g = I(a(1478)),
            y = I(a(1479)),
            E = A(a(2)),
            h = A(a(22)),
            b = I(a(1857)),
            M = I(a(1858)),
            w = I(a(1861)),
            v = I(a(33)),
            S = I(a(372)),
            k = I(a(615)),
            T = I(a(242)),
            P = I(a(186)),
            _ = I(a(122)),
            O = I(a(13)),
            C = a(6),
            R = I(a(4));

        function x() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return x = function() {
                return e
            }, e
        }

        function A(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = x();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function I(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const j = (0, f.default)(E.default)({
                flexGrow: 1,
                paddingTop: 40
            }),
            D = (0, f.default)(E.default)(e => ({
                flex: 1
            })),
            U = (0, f.default)(E.default)({
                flex: 1,
                padding: 28
            }),
            B = (0, f.default)(E.default)({
                flexDirection: "row",
                marginBottom: 20
            }),
            N = (0, f.default)(E.default)({
                flexDirection: "row",
                alignItems: "center"
            }),
            L = (0, f.default)(E.FocusableView)(e => ({
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
                height: 28,
                backgroundColor: e.active ? e.theme.semanticColors.primary : "transparent"
            })),
            F = (0, f.default)(E.default)(e => ({
                borderTopColor: e.theme.semanticColors.bgLine,
                borderTopWidth: 1,
                borderTopStyle: "solid",
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20
            })),
            W = e => p.default.createElement(E.default, {
                css: {
                    paddingLeft: 12
                }
            }, p.default.createElement(P.default, e)),
            z = (0, p.createContext)([]);

        function V(e) {
            const t = (0, C.useTheme)(),
                a = e.section.modules.filter(t => !e.exampleFilter || t.name.toLowerCase().includes(e.exampleFilter.toLowerCase())).map((a, l) => {
                    const n = a.name === e.selectedExample && e.showSelection,
                        r = null !== a.example,
                        u = n ? t.semanticColors.textWhite : t.semanticColors.textPrimary;
                    return p.default.createElement(L, {
                        id: "uiexplorer-" + a.name,
                        as: "button",
                        key: l,
                        active: n,
                        telemetryName: "menuItem",
                        onActivate: () => e.onSelectModule(a)
                    }, p.default.createElement(R.default, {
                        use: "body",
                        color: u
                    }, a.name), p.default.createElement(M.default, {
                        color: u,
                        todosCount: a.todo ? a.todo.length : 0,
                        windowsVersion: a.windowsVersion,
                        windowsVersionReady: a.windowsVersionReady,
                        designsReady: null != a.spec,
                        codeReady: r
                    }))
                });
            return 0 === a.length ? null : p.default.createElement(E.default, null, p.default.createElement(W, {
                title: e.section.name
            }), a)
        }
        t.UIExplorerEventContext = z
    },
    576: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function({
            showFeedback: e,
            submitFeedback: t
        }) {
            const [a, r] = (0, u.useState)(""), [o, d] = (0, u.useState)(e);
            (0, u.useEffect)(() => {
                d(e)
            }, [e]);
            const s = n.default._("Give Additional Feedback", null, {
                    hk: "hJSqz"
                }),
                c = n.default._("Submit", null, {
                    hk: "3TsYaE"
                });
            return u.default.createElement(f, null, o && u.default.createElement(l.default, {
                feedbackValue: a,
                setFeedbackValue: r
            }), u.default.createElement(m, {
                feedbackShown: o
            }, !o && u.default.createElement(i.default, {
                use: i.RectangleButtonUse.Secondary,
                "aria-label": s.toString(),
                telemetryName: "writeFeedback",
                caption: s,
                onClick: () => d(!0)
            }), u.default.createElement(i.default, {
                use: i.RectangleButtonUse.Primary,
                "aria-label": c.toString(),
                telemetryName: "submit",
                caption: c,
                onClick: () => t(a)
            })))
        };
        var l = c(a(1819)),
            n = c(a(5)),
            r = c(a(1)),
            u = s(a(0)),
            o = c(a(2)),
            i = s(a(16));

        function d() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return d = function() {
                return e
            }, e
        }

        function s(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = d();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const f = (0, r.default)(o.default)({
                flexDirection: "column"
            }),
            m = (0, r.default)(o.default)(e => ({
                flexDirection: "row",
                justifyContent: e.feedbackShown ? "flex-end" : "space-between"
            }))
    },
    577: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            const t = l.default._("How was the quality of your call?", null, {
                    hk: "hgDZU"
                }),
                a = l.default._("Thank you for your feedback!", null, {
                    hk: "23SL6h"
                });
            return r.default.createElement(d, null, r.default.createElement(s, null, r.default.createElement(o.default, {
                use: "body-semibold"
            }, t)), r.default.createElement(c, null, r.default.createElement(o.default, {
                use: "subtext-medium"
            }, e.feedbackSubmitted ? a : null)))
        };
        var l = i(a(5)),
            n = i(a(1)),
            r = i(a(0)),
            u = i(a(2)),
            o = i(a(4));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const d = (0, n.default)(u.default)({
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }),
            s = (0, n.default)(u.default)({
                lineHeight: "20px"
            }),
            c = (0, n.default)(u.default)({
                paddingTop: 12,
                lineHeight: "20px",
                opacity: .5
            })
    },
    594: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return n.default.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 80 80",
                height: e.height ? e.height : e.size,
                width: e.width ? e.width : e.size,
                color: e.color
            }, n.default.createElement("path", {
                fill: "url(#RoomsRebrandLogoIcon__paint0_linear)",
                d: "M0 0h80v80H0V0z"
            }), n.default.createElement("g", {
                filter: "url(#RoomsRebrandLogoIcon__filter0_di)"
            }, n.default.createElement("path", {
                fill: "url(#RoomsRebrandLogoIcon__paint1_linear)",
                fillRule: "evenodd",
                d: "M25.815 55h18.74c3.764 0 6.815-2.985 6.815-6.667V31.667c0-3.682-3.051-6.667-6.814-6.667H25.815C22.05 25 19 27.985 19 31.667v16.666C19 52.015 22.051 55 25.815 55zm7.666-23.333c0-.92.763-1.667 1.704-1.667s1.704.746 1.704 1.667v6.666h6.815c.94 0 1.703.747 1.703 1.667s-.762 1.667-1.703 1.667h-6.815v6.666c0 .92-.763 1.667-1.704 1.667-.94 0-1.704-.746-1.704-1.667v-6.666h-6.814c-.941 0-1.704-.747-1.704-1.667s.763-1.667 1.704-1.667h6.814v-6.666zm29.053 17.332l-6.344-3.106a2.497 2.497 0 01-1.412-2.238v-7.308c0-.948.547-1.815 1.412-2.239l6.344-3.105c1.134-.555 2.466.252 2.466 1.492v15.012c0 1.24-1.332 2.046-2.466 1.492z",
                clipRule: "evenodd"
            })), n.default.createElement("defs", null, n.default.createElement("linearGradient", {
                id: "RoomsRebrandLogoIcon__paint0_linear",
                x1: ".001",
                x2: "87.324",
                y1: "79.984",
                y2: "6.965",
                gradientUnits: "userSpaceOnUse"
            }, n.default.createElement("stop", {
                stopColor: "#09F"
            }), n.default.createElement("stop", {
                offset: ".5",
                stopColor: "#9F33FF"
            }), n.default.createElement("stop", {
                offset: ".821",
                stopColor: "#FF529D"
            }), n.default.createElement("stop", {
                offset: "1",
                stopColor: "#FF7161"
            })), n.default.createElement("linearGradient", {
                id: "RoomsRebrandLogoIcon__paint1_linear",
                x1: "21.558",
                x2: "45.958",
                y1: "53.332",
                y2: "15.918",
                gradientUnits: "userSpaceOnUse"
            }, n.default.createElement("stop", {
                stopColor: "#fff"
            }), n.default.createElement("stop", {
                offset: ".51",
                stopColor: "#F2F2F2"
            }), n.default.createElement("stop", {
                offset: "1",
                stopColor: "#fff"
            })), n.default.createElement("filter", {
                id: "RoomsRebrandLogoIcon__filter0_di",
                width: "60",
                height: "44",
                x: "14",
                y: "20",
                colorInterpolationFilters: "sRGB",
                filterUnits: "userSpaceOnUse"
            }, n.default.createElement("feFlood", {
                floodOpacity: "0",
                result: "BackgroundImageFix"
            }), n.default.createElement("feColorMatrix", {
                in: "SourceAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), n.default.createElement("feOffset", {
                dx: "2",
                dy: "2"
            }), n.default.createElement("feGaussianBlur", {
                stdDeviation: "3.5"
            }), n.default.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            }), n.default.createElement("feBlend", {
                in2: "BackgroundImageFix",
                result: "effect1_dropShadow"
            }), n.default.createElement("feBlend", {
                in: "SourceGraphic",
                in2: "effect1_dropShadow",
                result: "shape"
            }), n.default.createElement("feColorMatrix", {
                in: "SourceAlpha",
                result: "hardAlpha",
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            }), n.default.createElement("feOffset", {
                dx: "-1",
                dy: "-1"
            }), n.default.createElement("feGaussianBlur", {
                stdDeviation: "1.5"
            }), n.default.createElement("feComposite", {
                in2: "hardAlpha",
                k2: "-1",
                k3: "1",
                operator: "arithmetic"
            }), n.default.createElement("feColorMatrix", {
                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
            }), n.default.createElement("feBlend", {
                in2: "shape",
                result: "effect2_innerShadow"
            }))))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    601: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ChooseRoomActivityForm = _, t.default = void 0;
        var l = h(a(33)),
            n = h(a(13)),
            r = a(6),
            u = h(a(353)),
            o = h(a(5)),
            i = a(140),
            d = a(65),
            s = h(a(1)),
            c = a(11),
            f = h(a(0)),
            m = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = E();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(2)),
            p = a(113),
            g = h(a(45)),
            y = h(a(4));

        function E() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return E = function() {
                return e
            }, e
        }

        function h(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const b = (0, s.default)(g.default)(e => ({
                width: "100%",
                height: 500,
                padding: "2px 12px 16px 12px",
                alignItems: "center"
            })),
            M = (0, s.default)(l.default)(e => ({
                width: "100%",
                display: "grid",
                marginTop: 24,
                gridTemplateColumns: "repeat(auto-fill, 82px)",
                columnGap: 12,
                rowGap: 36
            })),
            w = (0, s.default)(m.FocusableView)(e => ({
                flexGrow: 0,
                justifyContent: "start",
                alignItems: "center"
            })),
            v = (0, s.default)(m.default)(e => ({
                width: 50,
                height: 50,
                backgroundColor: e.theme.semanticColors.bgSurfaceSecondary,
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
                padding: 12,
                marginBottom: 12,
                color: e.theme.semanticColors.textPrimary
            }));

        function S(e) {
            const {
                emoji: t,
                label: a
            } = e, l = (0, r.useTheme)().select({
                mac: "headline",
                win: "display"
            });
            return f.default.createElement(w, {
                role: "button",
                onActivate: () => {
                    e.onSelect && e.onSelect([t, a])
                }
            }, f.default.createElement(v, null, f.default.createElement(y.default, {
                use: l
            }, t)), f.default.createElement(y.default, {
                use: "caption",
                numberOfLines: 2,
                textAlign: "center"
            }, a))
        }

        function k(e) {
            const {
                onClick: t
            } = e;
            return (f.default.createElement(w, {
                role: "button",
                onActivate: () => {
                    t && t()
                }
            }, f.default.createElement(v, null, f.default.createElement(u.default, {
                size: 24
            })), f.default.createElement(y.default, {
                use: "caption"
            }, o.default._("New", null, {
                hk: "1lraKx"
            }))))
        }

        function T(e) {
            const {
                activities: t,
                customActivity: a,
                onBeginCreateActivity: l,
                onSelectActivity: n
            } = e;
            return (f.default.createElement(M, null, f.default.createElement(k, {
                onClick: l
            }), a && f.default.createElement(S, {
                key: a[0] + a[1],
                emoji: a[0],
                label: a[1],
                onSelect: n
            }), t.map(e => f.default.createElement(S, {
                key: e[0] + e[1],
                emoji: e[0],
                label: e[1],
                onSelect: n
            }))))
        }
        const P = [
            ["🙂", o.default._("Hanging Out", null, {
                hk: "2a7k5m"
            }).toString()],
            ["⚡️", o.default._("Join Me!", null, {
                hk: "3Aog3q"
            }).toString()],
            ["🛋", o.default._("Here All Day", null, {
                hk: "32xs9N"
            }).toString()],
            ["🤗", o.default._("Keep Me Company", null, {
                hk: "2DwYRg"
            }).toString()],
            ["👀", o.default._("Trying Rooms", null, {
                hk: "w36ms"
            }).toString()],
            ["🏠", o.default._("Bored At Home", null, {
                hk: "1aahqW"
            }).toString()],
            ["🎤", o.default._("Is This On?", null, {
                hk: "3plNXA"
            }).toString()],
            ["🍹", o.default._("TGIF", null, {
                hk: "2xIiS6"
            }).toString()],
            ["🎓", o.default._("Grad Party", null, {
                hk: "1AVXSl"
            }).toString()],
            ["🌴", o.default._("Happy Hour", null, {
                hk: "3dcuL2"
            }).toString()],
            ["🤹‍♂️", o.default._("Multi-Tasking", null, {
                hk: "4gHn4Q"
            }).toString()],
            ["☀️", o.default._("Rise and Shine", null, {
                hk: "XnpEs"
            }).toString()],
            ["☕️", o.default._("Coffee Chat", null, {
                hk: "3z7SIx"
            }).toString()],
            ["💪", o.default._("Workout", null, {
                hk: "NX2XG"
            }).toString()],
            ["📚", o.default._("Study Break", null, {
                hk: "dQISK"
            }).toString()],
            ["📺", o.default._("TV Time", null, {
                hk: "1IzEUu"
            }).toString()],
            ["💕", o.default._("Family", null, {
                hk: "RwBoN"
            }).toString()],
            ["🥘", o.default._("Dinner", null, {
                hk: "4bWFn9"
            }).toString()],
            ["🍽", o.default._("Lunch Club", null, {
                hk: "1F5gyq"
            }).toString()],
            ["🎲", o.default._("Game Night", null, {
                hk: "8Sn8F"
            }).toString()],
            ["🎂", o.default._("Birthday", null, {
                hk: "31xqV3"
            }).toString()],
            ["🎤", o.default._("Karaoke", null, {
                hk: "1SShlv"
            }).toString()],
            ["🕺", o.default._("Dance Party", null, {
                hk: "1Ow7Q2"
            }).toString()],
            ["😎", o.default._("Squad Hang", null, {
                hk: "1mLNwT"
            }).toString()]
        ];

        function _(e) {
            const {
                customActivity: t,
                selectRoomActivity: a,
                setRoomScreen: l,
                goBack: r
            } = e;
            return (0, p.useModalInfo)({
                title: o.default._("Pick Activity", null, {
                    hk: "45vIYr"
                }).toString(),
                onGoBack: r
            }), f.default.createElement(n.default, {
                name: "chooseRoomActivity"
            }, f.default.createElement(b, null, f.default.createElement(T, {
                onBeginCreateActivity: () => {
                    l({
                        screen: i.RoomScreen.CREATE_ROOM_ACTIVITY
                    })
                },
                onSelectActivity: e => {
                    a(e)
                },
                activities: P,
                customActivity: t
            })))
        }
        const O = {
            goBack: d.RoomActions.roomGoBack,
            selectRoomActivity: d.RoomActions.selectRoomActivity,
            setRoomScreen: d.RoomActions.setActiveScreen
        };
        var C = (0, c.connect)(e => ({
            customActivity: e.room.roomCreationData.customActivity
        }), O)(_);
        t.default = C
    },
    602: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CreateARoomDialog = F, t.default = void 0;
        var l = A(a(13)),
            n = A(a(246)),
            r = A(a(59)),
            u = a(39),
            o = a(8),
            i = A(a(161)),
            d = A(a(594)),
            s = A(a(5)),
            c = A(a(595)),
            f = a(144),
            m = a(21),
            p = a(140),
            g = a(65),
            y = a(240),
            E = A(a(1)),
            h = a(11),
            b = x(a(0)),
            M = x(a(2)),
            w = A(a(265)),
            v = A(a(116)),
            S = a(58),
            k = a(113),
            T = a(373),
            P = a(6),
            _ = A(a(191)),
            O = A(a(249)),
            C = A(a(4));

        function R() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return R = function() {
                return e
            }, e
        }

        function x(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = R();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }

        function A(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const I = (0, E.default)(M.default)({
                width: 80,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                overflow: "hidden"
            }),
            j = (0, E.default)(M.default)({
                width: "100%",
                flexGrow: 1,
                padding: "2px 24px 16px 24px",
                alignItems: "center"
            }),
            D = (0, E.default)(M.FocusableView)({
                width: "100%",
                flexDirection: "row",
                minHeight: 48,
                paddingTop: 8,
                paddingBottom: 8,
                alignItems: "center"
            }),
            U = (0, E.default)(M.default)({
                flexGrow: 1
            }),
            B = (0, E.default)(M.default)(e => ({
                width: "100%",
                height: 1,
                backgroundColor: e.theme.semanticColors.bgLine
            })),
            N = (0, E.default)(C.default)({
                marginLeft: 4,
                display: "inline"
            }),
            L = {
                cancel: s.default._("Cancel", null, {
                    hk: "36ZETq"
                }),
                close: s.default._("Close", null, {
                    hk: "XiP8W"
                }),
                createRoom: s.default._("Create Room", null, {
                    hk: "4Fl80M"
                }),
                editRoom: s.default._("Save", null, {
                    hk: "2vCSnX"
                }),
                whoCanDiscover: s.default._("Who can discover and join?", null, {
                    hk: "33QsKA"
                }),
                whoCanJoin: s.default._("Who can join?", null, {
                    hk: "3csm0D"
                }),
                scheduleForLater: s.default._("Schedule for later", null, {
                    hk: "1u1N5K"
                }),
                weProtectYourPrivacy: (0, r.default)({
                    messenger: s.default._("Messenger protects your privacy.", null, {
                        hk: "z0V1n"
                    }),
                    workchat: s.default._("Workplace protects your privacy.", null, {
                        hk: "2KV0BV"
                    })
                }),
                learnMore: s.default._("Learn more.", null, {
                    hk: "1aFfVi"
                }),
                whenYouJoin: (0, r.default)({
                    messenger: s.default._("When you join the room, people with the link or invite will be able to see your name and profile photo and that you're in it. This may include people you're not friends with on Facebook.", null, {
                        hk: "3I0Jcr"
                    }),
                    workchat: s.default._("When you join the room, people with the link or invite will be able to see your name and profile photo and that you're in it.", null, {
                        hk: "1oVjbH"
                    })
                }),
                roomActivity: s.default._("Room Activity", null, {
                    hk: "MdVro"
                }),
                on: s.default._("On", null, {
                    hk: "2Txd08"
                }),
                off: s.default._("Off", null, {
                    hk: "1v4PEp"
                }),
                startTime: s.default._("Start time", null, {
                    hk: "1OFAiO"
                })
            };

        function F(e) {
            const {
                activeScreenInfo: t,
                activity: a,
                goBack: r,
                privacySetting: f,
                joinPermission: m,
                selectRoomScreen: g,
                scheduledForDate: y,
                scheduledForTime: E,
                setScheduleForDate: h,
                setScheduleForTime: M,
                createRoom: R,
                updateRoom: x,
                firstName: A,
                previousScreen: F,
                goToInviteToRoomView: z,
                onClose: V,
                isNetworkConnected: G
            } = e;
            let H = a;
            H || (H = ["🙂", s.default._("{user's name}'s Room", [s.default._param("user's name", A)], {
                hk: "BLbkG"
            }).toString()]);
            const K = H[0],
                X = H[1],
                q = (0, P.useTheme)(),
                J = (0, c.default)();
            (0, k.useModalInfo)({
                onGoBack: null != F ? r : null
            });
            const Y = (0, b.useMemo)(() => new Date, []);
            if (!t) return null;
            const Q = t.screen !== p.RoomScreen.EDIT_ROOM;
            return (b.default.createElement(l.default, {
                name: "createARoom"
            }, b.default.createElement(j, null, b.default.createElement(I, null, b.default.createElement(d.default, {
                size: 80
            })), b.default.createElement(C.default, {
                use: "title",
                style: {
                    marginTop: 16
                }
            }, K, " ", X), b.default.createElement(D, {
                style: {
                    marginTop: 24
                },
                onActivate: () => {
                    g({
                        screen: p.RoomScreen.CHOOSE_ROOM_ACTIVITY
                    })
                }
            }, b.default.createElement(U, null, b.default.createElement(C.default, {
                use: "body-semibold"
            }, L.roomActivity), b.default.createElement(C.default, {
                use: "caption"
            }, K, " ", X)), b.default.createElement(i.default, {
                size: 18,
                color: q.semanticColors.textSecondary
            })), b.default.createElement(B, null), b.default.createElement(D, {
                onActivate: () => {
                    Q && g(J ? {
                        screen: p.RoomScreen.CHOOSE_ROOM_JOIN_PERMISSION
                    } : {
                        screen: p.RoomScreen.CHOOSE_ROOM_PRIVACY
                    })
                }
            }, b.default.createElement(U, null, b.default.createElement(C.default, {
                use: "body-semibold",
                color: Q ? void 0 : q.semanticColors.textSecondary
            }, J && m !== o.RoomJoinPermission.Unknown ? L.whoCanJoin : L.whoCanDiscover), b.default.createElement(C.default, {
                use: "caption",
                color: Q ? void 0 : q.semanticColors.textSecondary
            }, J && m !== o.RoomJoinPermission.Unknown ? n.default.joinPermissions[m] : n.default.privacyOptions[f])), b.default.createElement(i.default, {
                size: 18,
                color: q.semanticColors.textSecondary
            })), b.default.createElement(B, null), b.default.createElement(D, {
                onActivate: () => {}
            }, b.default.createElement(U, null, b.default.createElement(C.default, {
                use: "body-semibold"
            }, L.scheduleForLater)), b.default.createElement(O.default, {
                css: {
                    marginRight: 8
                },
                isChecked: null != y,
                onToggle: e => {
                    if (e) {
                        const e = new Date;
                        h(e), M((0, u.getSecondsOfToday)(e))
                    } else h(null), M(null)
                }
            }), b.default.createElement(C.default, {
                use: "body"
            }, y ? L.on : L.off)), b.default.createElement(B, null), y && null != E && b.default.createElement(b.default.Fragment, null, b.default.createElement(D, {
                onActivate: () => {}
            }, b.default.createElement(U, null, b.default.createElement(C.default, {
                use: "body-semibold"
            }, L.startTime)), b.default.createElement(w.default, {
                date: y,
                minDate: Y,
                onChange: h,
                fontSize: 17
            }), b.default.createElement(C.default, {
                css: {
                    marginLeft: 12
                },
                use: "body"
            }, b.default.createElement(_.default, {
                onTimeChange: M,
                timeSeconds: E,
                textUse: "body",
                fontSize: 17
            }))), b.default.createElement(B, null)), b.default.createElement(C.default, {
                css: {
                    width: "100%",
                    marginTop: 8
                },
                use: "caption",
                color: q.semanticColors.textSecondary
            }, L.weProtectYourPrivacy, b.default.createElement(v.default, {
                onClick: () => {
                    g({
                        screen: p.RoomScreen.PRIVACY_POLICY
                    })
                },
                displayAsLink: !0,
                hideUnderline: !0
            }, b.default.createElement(N, {
                use: "caption",
                wrapText: !1,
                color: q.colors.blue
            }, L.learnMore))), b.default.createElement(C.default, {
                css: {
                    width: "100%",
                    marginTop: 8
                },
                use: "caption",
                numberOfLines: 10,
                color: q.semanticColors.textSecondary
            }, L.whenYouJoin)), b.default.createElement(S.ModalFooter, {
                cancelButton: {
                    label: null != F ? L.cancel.toString() : L.close.toString(),
                    telemetryName: "cancelButton",
                    onClick: () => null != F ? r() : V()
                },
                primaryButton: t.screen === p.RoomScreen.EDIT_ROOM ? {
                    label: L.editRoom.toString(),
                    telemetryName: "editRoom",
                    onClick: () => {
                        G ? (x({
                            roomId: t.roomId,
                            emoji: K,
                            startTimeMs: y && null != E ? W(y, E) : Date.now(),
                            name: X,
                            audienceType: f
                        }), z(t.roomId)) : (0, T.showNoNetworkMessageBox)()
                    }
                } : {
                    label: L.createRoom.toString(),
                    telemetryName: "createRoom",
                    onClick: () => {
                        if (!G) return void(0, T.showNoNetworkMessageBox)();
                        let e = null;
                        y && null != E && (e = W(y, E));
                        const t = {
                            emoji: K,
                            callstartTimestampMs: e,
                            name: X,
                            audienceType: f,
                            inviteeType: o.RoomInviteeType.Unknown,
                            linkSurface: o.RoomLinkSurface.Messenger
                        };
                        J && (t.joinPermission = m), R(t)
                    }
                }
            })))
        }

        function W(e, t) {
            const a = new Date(e),
                {
                    hour: l,
                    minute: n
                } = (0, u.getComponentsFromSeconds)(t, "24h");
            return a.setHours(parseInt(l)), a.setMinutes(parseInt(n)), a.setSeconds(0), a.setMilliseconds(0), a.getTime()
        }
        const z = {
            goBack: g.RoomActions.roomGoBack,
            selectRoomScreen: g.RoomActions.setActiveScreen,
            setScheduleForDate: g.RoomActions.selectScheduleForDate,
            setScheduleForTime: g.RoomActions.selectScheduleForTime,
            createRoom: g.RoomActions.createRoom,
            updateRoom: g.RoomActions.updateRoomInfo,
            goToInviteToRoomView: g.RoomActions.goToInviteToRoomView
        };
        var V = (0, h.connect)((function(e) {
            const t = (0, m.requireAuthenticationData)(e);
            return {
                activeScreenInfo: (0, y.getActiveScreenInfo)(e),
                activity: e.room.roomCreationData.activity,
                scheduledForDate: e.room.roomCreationData.scheduledForDate,
                scheduledForTime: e.room.roomCreationData.scheduledForTime,
                privacySetting: e.room.roomCreationData.roomPrivacy,
                joinPermission: e.room.roomCreationData.roomJoinPermission,
                firstName: t.firstName,
                previousScreen: (0, y.getPreviousScreenInfo)(e),
                isNetworkConnected: (0, f.isAppNetworkConnected)(e)
            }
        }), z)(F);
        t.default = V
    },
    603: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.CreateRoomActivityForm = T, t.default = void 0;
        var l = h(a(16)),
            n = y(a(13)),
            r = y(a(5)),
            u = a(65),
            o = y(a(1)),
            i = a(11),
            d = h(a(0)),
            s = y(a(2)),
            c = y(a(142)),
            f = a(113),
            m = y(a(60)),
            p = a(6),
            g = y(a(4));

        function y(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function E() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return E = function() {
                return e
            }, e
        }

        function h(e) {
            if (e && e.__esModule) return e;
            if (null === e || "object" != typeof e && "function" != typeof e) return {
                default: e
            };
            var t = E();
            if (t && t.has(e)) return t.get(e);
            var a = {},
                l = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                    r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                } return a.default = e, t && t.set(e, a), a
        }
        const b = (0, o.default)(s.default)(e => ({
                width: "100%",
                height: 500,
                alignItems: "center"
            })),
            M = (0, o.default)(s.default)(e => ({
                width: "100%",
                flexGrow: 1,
                paddingLeft: 38,
                paddingRight: 38
            })),
            w = (0, o.default)(s.default)(e => ({
                width: 80,
                height: 80,
                marginTop: 24,
                marginBottom: 24,
                alignSelf: "center",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center"
            })),
            v = (0, o.default)(s.default)(e => ({
                width: "100%",
                padding: "12px 10px"
            })),
            S = (0, o.default)(m.default)(e => ({
                borderColor: e.theme.semanticColors.bgLine,
                borderWidth: 3,
                borderRadius: 8
            })),
            k = (0, o.default)(s.default)(e => ({
                alignSelf: "flex-end",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 12
            }));

        function T(e) {
            const {
                saveCustomRoomActivity: t,
                goBack: a
            } = e;
            (0, f.useModalInfo)({
                title: r.default._("New Room Activity", null, {
                    hk: "2a2qJU"
                }).toString(),
                onGoBack: a
            });
            const u = (0, p.useTheme)(),
                [o, i] = (0, d.useState)("😀"),
                [s, m] = (0, d.useState)("");
            return d.default.createElement(n.default, {
                name: "createRoomActivity"
            }, d.default.createElement(b, null, d.default.createElement(M, null, d.default.createElement(w, null, d.default.createElement(g.default, {
                use: "hero"
            }, o)), d.default.createElement(v, null, d.default.createElement(S, {
                placeholder: r.default._("Type your activity", null, {
                    hk: "t3gBz"
                }),
                value: s,
                onChange: m
            })), d.default.createElement(c.default, {
                defaultSkintone: null,
                onEmojiClick: i,
                pickerType: "compact",
                categoryPickerStyle: {
                    backgroundColor: u.semanticColors.bgSurface
                }
            })), d.default.createElement(k, null, d.default.createElement(l.default, {
                telemetryName: "cancelButton",
                size: l.RectangleButtonSize.Small,
                "aria-label": r.default._("Done", null, {
                    hk: "2XV9sq"
                }).toString(),
                caption: r.default._("Done", null, {
                    hk: "2XV9sq"
                }).toString(),
                disabled: s.trim().length < 1 || s.length > 20,
                onClick: () => {
                    t([o, s])
                }
            }))))
        }
        const P = {
            goBack: u.RoomActions.roomGoBack,
            saveCustomRoomActivity: u.RoomActions.saveCustomRoomActivity
        };
        var _ = (0, i.connect)((function(e) {
            return {}
        }), P)(T);
        t.default = _
    },
    604: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            (0, g.useModalInfo)({
                onGoBack: e.goBack
            });
            const t = (0, E.useTheme)(),
                a = (0, E.isAppDarkTheme)(t.name) ? f.default.createElement("img", {
                    src: i.default
                }) : f.default.createElement("img", {
                    src: d.default
                });
            return f.default.createElement(y.default, {
                name: "privacyNotice"
            }, f.default.createElement(M, null, a, f.default.createElement(w, {
                use: "display",
                numberOfLines: 2,
                textAlign: "center"
            }, v.howWeProtect.toString()), f.default.createElement(p.default, {
                title: s.default._("Room Link Privacy", null, {
                    hk: "1ZWhVq"
                }),
                subtitle: s.default._("Room links are unique and can be regenerated at any time.", null, {
                    hk: "28aTck"
                }),
                icon: o.default,
                style: {
                    marginTop: 24
                }
            }), f.default.createElement(p.default, {
                title: s.default._("Prevent Unwanted Participants", null, {
                    hk: "3OEarR"
                }),
                subtitle: s.default._("You can always lock your room if you don't want new people to join. The host can remove people at any time.", null, {
                    hk: "2cjAFs"
                }),
                icon: u.default
            }), f.default.createElement(p.default, {
                title: s.default._("Block People and Give Feedback", null, {
                    hk: "1FPLBk"
                }),
                subtitle: (0, n.default)({
                    messenger: s.default._("You can block anyone in a room on Facebook and Messenger. Anyone in a room can give feedback on the room. Messenger is encrypted, but not end-to-end encrypted.", null, {
                        hk: "1mGuIm"
                    }),
                    workchat: s.default._("You can block anyone in a room on Workplace. Anyone in a room can give feedback on the room. Workplace is encrypted, but not end-to-end encrypted.", null, {
                        hk: "14dlii"
                    })
                }),
                icon: r.default
            })), f.default.createElement(l.ModalFooter, {
                cancelButton: {
                    label: v.ok.toString(),
                    telemetryName: "closeButton",
                    onClick: () => {
                        e.goBack && e.goBack()
                    }
                }
            }))
        };
        var l = a(58),
            n = b(a(59)),
            r = b(a(163)),
            u = b(a(605)),
            o = b(a(244)),
            i = b(a(606)),
            d = b(a(607)),
            s = b(a(5)),
            c = b(a(1)),
            f = b(a(0)),
            m = b(a(2)),
            p = b(a(248)),
            g = a(113),
            y = b(a(13)),
            E = a(6),
            h = b(a(4));

        function b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const M = (0, c.default)(m.default)({
                flexGrow: 1,
                padding: "12px 22px 0 22px",
                alignItems: "center",
                justifyContent: "center"
            }),
            w = (0, c.default)(h.default)({
                marginTop: 16,
                marginLeft: 39,
                marginRight: 39
            }),
            v = {
                howWeProtect: (0, n.default)({
                    messenger: s.default._("How Messenger Protects your Privacy in Rooms", null, {
                        hk: "3d1aEn"
                    }),
                    workchat: s.default._("How Workplace Protects your Privacy in Rooms", null, {
                        hk: "XD7zw"
                    })
                }),
                ok: s.default._("OK", null, {
                    hk: "3d0SyZ"
                })
            }
    },
    605: function(e, t, a) {
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
                d: "M17.25 12.305C17.25 16.207 19.446 18 22 18s4.75-1.793 4.75-5.695C26.75 9.123 24.75 7 22 7s-4.75 2.123-4.75 5.305zM29.94 28c.69 0 1.06-.595 1.06-1.335C31 22.985 26.835 20 22 20s-9 2.985-9 6.665c0 .74.37 1.335 1.06 1.335h15.88zM13.865 12.502a1 1 0 00-1.73-1.004l-3.829 6.595a.25.25 0 01-.393.051l-2.206-2.206a1 1 0 00-1.414 1.414l3.355 3.355a1 1 0 001.572-.205l4.645-8z"
            }))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    606: function(e, t, a) {
        e.exports = a.p + "assets/assets/images/rebrand-shield-dark.png"
    },
    607: function(e, t, a) {
        e.exports = a.p + "assets/assets/images/rebrand-shield-light.png"
    },
    608: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.RoomsNuxInterstitial = S, t.default = void 0;
        var l = a(58),
            n = a(113),
            r = M(a(13)),
            u = M(a(609)),
            o = M(a(263)),
            i = M(a(244)),
            d = M(a(610)),
            s = M(a(611)),
            c = M(a(5)),
            f = a(65),
            m = M(a(1)),
            p = a(11),
            g = M(a(0)),
            y = M(a(2)),
            E = M(a(248)),
            h = a(6),
            b = M(a(4));

        function M(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const w = (0, m.default)(y.default)(e => ({
                flexGrow: 1,
                width: "100%",
                height: "100%",
                padding: 24,
                alignItems: "center",
                justifyContent: "center"
            })),
            v = {
                cancel: c.default._("Cancel", null, {
                    hk: "36ZETq"
                }),
                tryIt: c.default._("Try It", null, {
                    hk: "1pAgah"
                })
            };

        function S({
            onClose: e,
            beginCreateRoom: t
        }) {
            (0, n.useModalInfo)({
                onGoBack: null
            });
            const a = (0, h.useTheme)(),
                f = (0, h.isAppDarkTheme)(a.name) ? g.default.createElement("img", {
                    src: d.default
                }) : g.default.createElement("img", {
                    src: s.default
                });
            return g.default.createElement(r.default, {
                name: "privacyInterstitial"
            }, g.default.createElement(w, null, f, g.default.createElement(b.default, {
                use: "title",
                style: {
                    marginTop: 16
                }
            }, "Introducing Rooms"), g.default.createElement(E.default, {
                title: c.default._("Invite With a Link", null, {
                    hk: "3yFML5"
                }),
                subtitle: c.default._("Video chat with anyone just by sending a link.", null, {
                    hk: "nkweI"
                }),
                icon: i.default,
                style: {
                    marginTop: 24
                }
            }), g.default.createElement(E.default, {
                title: c.default._("Join Without an Account", null, {
                    hk: "4frjcu"
                }),
                subtitle: c.default._("There’s nothing to download or install.", null, {
                    hk: "ECFXK"
                }),
                icon: o.default
            }), g.default.createElement(E.default, {
                title: c.default._("Use Any Device", null, {
                    hk: "4jRiaF"
                }),
                subtitle: c.default._("Anyone can join from their computer, phone or tablet.", null, {
                    hk: "1BDqYx"
                }),
                icon: u.default
            })), g.default.createElement(l.ModalFooter, {
                cancelButton: {
                    label: v.cancel.toString(),
                    telemetryName: "cancelButton",
                    onClick: e
                },
                primaryButton: {
                    label: v.tryIt.toString(),
                    telemetryName: "tryItButton",
                    onClick: t
                }
            }))
        }
        const k = {
            beginCreateRoom: f.RoomActions.beginCreateRoom
        };
        var T = (0, p.connect)(null, k)(S);
        t.default = T
    },
    609: function(e, t, a) {
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
                fillRule: "evenodd",
                d: "M9 7.5a2 2 0 00-2 2V22a2 2 0 002 2h6.18a.25.25 0 01.242.31l-.233.933a1 1 0 01-.97.757h-.969a1.25 1.25 0 100 2.5h9.5a1.25 1.25 0 100-2.5h-.97a1 1 0 01-.97-.758l-.232-.931A.25.25 0 0120.82 24H27a2 2 0 002-2V9.5a2 2 0 00-2-2H9zm.75 2.5a.25.25 0 00-.25.25v9.5c0 .138.112.25.25.25h16.5a.25.25 0 00.25-.25v-9.5a.25.25 0 00-.25-.25H9.75z",
                clipRule: "evenodd"
            }))
        };
        var l, n = (l = a(0)) && l.__esModule ? l : {
            default: l
        }
    },
    610: function(e, t, a) {
        e.exports = a.p + "assets/assets/images/rebrand-rooms-interstitial-dark.png"
    },
    611: function(e, t, a) {
        e.exports = a.p + "assets/assets/images/rebrand-rooms-interstitial-light.png"
    },
    612: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SelectRoomJoinPermissionForm = T, t.default = void 0;
        var l = b(a(33)),
            n = b(a(13)),
            r = a(8),
            u = b(a(114)),
            o = b(a(5)),
            i = a(65),
            d = b(a(1)),
            s = a(11),
            c = b(a(0)),
            f = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = h();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(2)),
            m = a(113),
            p = b(a(246)),
            g = b(a(45)),
            y = a(6),
            E = b(a(4));

        function h() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return h = function() {
                return e
            }, e
        }

        function b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const M = (0, d.default)(g.default)({
                width: "100%",
                padding: "12px 24px 12px 24px",
                alignItems: "center"
            }),
            w = (0, d.default)(f.FocusableView)({
                width: "100%",
                paddingTop: 12,
                paddingBottom: 12,
                flexDirection: "row"
            }),
            v = (0, d.default)(f.default)(e => ({
                width: "100%",
                height: 1,
                backgroundColor: e.theme.semanticColors.bgLine
            })),
            S = (0, d.default)(f.default)(e => ({
                width: 24,
                height: 24
            }));

        function k(e) {
            const {
                optionSetting: t,
                goBack: a,
                selectedJoinPermission: l,
                setJoinPermission: n
            } = e, r = (0, y.useTheme)(), o = p.default.joinPermissions[t];
            return c.default.createElement(w, {
                role: "radio",
                "aria-checked": t === l,
                onActivate: () => {
                    n(t), a()
                }
            }, c.default.createElement(E.default, {
                style: {
                    flex: 1
                },
                wrapText: !0
            }, o), c.default.createElement(S, null, t === l && c.default.createElement(u.default, {
                color: r.semanticColors.textPrimary,
                size: 24
            })))
        }

        function T(e) {
            const {
                roomJoinPermission: t,
                setJoinPermission: a,
                goBack: u
            } = e, i = (0, y.useTheme)();
            return (0, m.useModalInfo)({
                title: o.default._("Who Can Join?", null, {
                    hk: "V2d4E"
                }).toString(),
                onGoBack: u
            }), c.default.createElement(n.default, {
                name: "selectRoomJoinPermission"
            }, c.default.createElement(M, null, c.default.createElement(l.default, {
                role: "radiogroup"
            }, c.default.createElement(k, {
                optionSetting: r.RoomJoinPermission.AnyoneWhoCanLoadTheLink,
                selectedJoinPermission: t,
                setJoinPermission: a,
                goBack: u
            }), c.default.createElement(v, null), c.default.createElement(k, {
                optionSetting: r.RoomJoinPermission.RequiresJoinRequest,
                selectedJoinPermission: t,
                setJoinPermission: a,
                goBack: u
            })), c.default.createElement(v, null), c.default.createElement(E.default, {
                use: "caption",
                style: {
                    marginTop: 12,
                    color: i.semanticColors.textSecondary
                },
                wrapText: !0
            }, o.default._("People with the link or room invite can join, even if they don’t have Facebook or Messenger.", null, {
                hk: "2P106X"
            }))))
        }
        const P = {
            goBack: i.RoomActions.roomGoBack,
            setJoinPermission: i.RoomActions.selectRoomJoinPermission
        };
        var _ = (0, s.connect)(e => ({
            roomJoinPermission: e.room.roomCreationData.roomJoinPermission
        }), P)(T);
        t.default = _
    },
    613: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.SelectRoomPrivacyForm = T, t.default = void 0;
        var l = b(a(33)),
            n = b(a(13)),
            r = a(8),
            u = b(a(114)),
            o = b(a(5)),
            i = a(65),
            d = b(a(1)),
            s = a(11),
            c = b(a(0)),
            f = function(e) {
                if (e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var t = h();
                if (t && t.has(e)) return t.get(e);
                var a = {},
                    l = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = l ? Object.getOwnPropertyDescriptor(e, n) : null;
                        r && (r.get || r.set) ? Object.defineProperty(a, n, r) : a[n] = e[n]
                    } a.default = e, t && t.set(e, a);
                return a
            }(a(2)),
            m = a(113),
            p = b(a(246)),
            g = b(a(45)),
            y = a(6),
            E = b(a(4));

        function h() {
            if ("function" != typeof WeakMap) return null;
            var e = new WeakMap;
            return h = function() {
                return e
            }, e
        }

        function b(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        const M = (0, d.default)(g.default)({
                width: "100%",
                padding: "12px 24px 12px 24px",
                alignItems: "center"
            }),
            w = (0, d.default)(f.FocusableView)({
                width: "100%",
                paddingTop: 12,
                paddingBottom: 12,
                flexDirection: "row"
            }),
            v = (0, d.default)(f.default)(e => ({
                width: "100%",
                height: 1,
                backgroundColor: e.theme.semanticColors.bgLine
            })),
            S = (0, d.default)(f.default)(e => ({
                width: 24,
                height: 24
            }));

        function k(e) {
            const {
                optionSetting: t,
                goBack: a,
                selectedPrivacySetting: l,
                setPrivacySetting: n
            } = e, r = (0, y.useTheme)(), o = p.default.privacyOptions[t];
            return c.default.createElement(w, {
                role: "radio",
                "aria-checked": t === l,
                onActivate: () => {
                    n(t), a()
                }
            }, c.default.createElement(E.default, {
                style: {
                    flex: 1
                },
                wrapText: !0
            }, o), c.default.createElement(S, null, t === l && c.default.createElement(u.default, {
                color: r.semanticColors.textPrimary,
                size: 24
            })))
        }

        function T(e) {
            const {
                roomPrivacy: t,
                setPrivacySetting: a,
                goBack: u
            } = e;
            return (0, m.useModalInfo)({
                title: o.default._("Who Can Discover and Join?", null, {
                    hk: "1H6wH7"
                }).toString(),
                onGoBack: u
            }), c.default.createElement(n.default, {
                name: "selectRoomPrivacy"
            }, c.default.createElement(M, null, c.default.createElement(l.default, {
                role: "radiogroup"
            }, c.default.createElement(k, {
                optionSetting: r.RoomAudienceType.Anyone,
                selectedPrivacySetting: t,
                setPrivacySetting: a,
                goBack: u
            }), c.default.createElement(v, null), c.default.createElement(k, {
                optionSetting: r.RoomAudienceType.InvitedOnly,
                selectedPrivacySetting: t,
                setPrivacySetting: a,
                goBack: u
            })), c.default.createElement(v, null), c.default.createElement(E.default, {
                use: "caption",
                style: {
                    marginTop: 12
                },
                wrapText: !0
            }, o.default._("People with the link or room invite can join, even if they don’t have Facebook or Messenger.", null, {
                hk: "2P106X"
            }))))
        }
        const P = {
            goBack: i.RoomActions.roomGoBack,
            setPrivacySetting: i.RoomActions.selectRoomPrivacy
        };
        var _ = (0, s.connect)(e => ({
            roomPrivacy: e.room.roomCreationData.roomPrivacy
        }), P)(T);
        t.default = _
    }
});
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/uiexplorer.bundle.js.map