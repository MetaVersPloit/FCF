(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{460:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({onAcceptCall:e,onRejectCall:t,participants:l,isVideoRequest:r,messageThread:c,isP2P:i,inCall:d}){return u.default.createElement(o.default,{mainContent:u.default.createElement(n.default,{isP2P:i,participants:l,isVideoRequest:r,messageThread:c}),buttons:u.default.createElement(a.default,{inCall:d,isVideoRequest:r,onAcceptCall:e,onRejectCall:t}),onRejectCall:t})};var a=r(l(899)),n=r(l(901)),u=r(l(0)),o=r(l(297));function r(e){return e&&e.__esModule?e:{default:e}}},899:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({inCall:e,isVideoRequest:t,onAcceptCall:l,onRejectCall:s}){const f=(0,d.useTheme)(),m=a.default._("Decline",null,{hk:"1wSU9h"}),p=a.default._("Accept",null,{hk:"2RTMTA"}),h=a.default._("End and Accept",null,{hk:"3hTMRl"}),C=t?"video-chat":"audio-call";return c.default.createElement(c.default.Fragment,null,c.default.createElement(i.CallDialogButton,{buttonProps:{telemetryName:"rejectCallButton",telemetryContext:{callType:C},onClick:s,icon:u.default,buttonColor:f.colors.red,"aria-label":m.toString()},label:m}),e?c.default.createElement(i.CallDialogMultiButton,{buttonProps:{telemetryName:"switchCallButton",telemetryContext:{callType:C},onClick:()=>l(t),icons:[o.default,t?n.default:r.default],iconBackgroundColors:[f.colors.red,f.colors.green],"aria-label":h.toString()},label:h}):c.default.createElement(i.CallDialogButton,{buttonProps:{telemetryName:"acceptCallButton",telemetryContext:{callType:C},onClick:()=>l(t),buttonColor:f.colors.green,icon:t?n.default:r.default,"aria-label":p.toString()},label:p}))};var a=s(l(5)),n=s(l(78)),u=s(l(50)),o=s(l(900)),r=s(l(145)),c=s(l(0)),i=l(295),d=l(6);function s(e){return e&&e.__esModule?e:{default:e}}},900:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 36 36",height:e.height?e.height:e.size,width:e.width?e.width:e.size,color:e.color},n.default.createElement("path",{fill:"currentColor",d:"M4.865 18.073c-.522 1.043-.396 2.26-.146 3.4a2.12 2.12 0 001.547 1.602c.403.099.812.175 1.234.175 1.276 0 2.505-.2 3.659-.568.642-.205 1.085-.775 1.206-1.438l.472-2.599a.488.488 0 01.28-.36A11.959 11.959 0 0118 17.25c1.739 0 3.392.37 4.883 1.035.148.066.251.202.28.36l.472 2.599c.12.663.564 1.233 1.206 1.438 1.154.369 2.383.568 3.66.568.421 0 .83-.077 1.233-.175a2.12 2.12 0 001.547-1.601c.25-1.14.377-2.358-.146-3.401-1.722-3.44-7.06-5.323-13.135-5.323S6.587 14.633 4.865 18.073z"}))};var a,n=(a=l(0))&&a.__esModule?a:{default:a}},901:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({isP2P:e,participants:t,messageThread:l}){const c=!e&&t.length>1,i=null!=l?l.imageUri:null,d=null!=l?l.name:c?a.default._("{caller_names} are calling you",[a.default._param("caller_names",t.map(e=>e.shortName).join(", "))],{hk:"2uf9n"}):a.default._("{caller_name} is calling you",[a.default._param("caller_name",t[0].name)],{hk:"RMNcB"}),s=a.default._("The call will start as soon as you accept",null,{hk:"3fsNaE"});return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.default,{header:c&&!i?n.default.createElement(o.default,{size:"medium",profilePictureUrls:t.map(e=>e.profilePictureUri),useCountBubble:!0,displayExtraCountPlus:!0,countBubblePlacement:"right"}):n.default.createElement(r.default,{size:"large",profilePictureUrl:i||t[0].profilePictureUri}),title:d,body:s}))};var a=c(l(5)),n=c(l(0)),u=c(l(296)),o=c(l(171)),r=c(l(38));function c(e){return e&&e.__esModule?e:{default:e}}}}]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/incoming_call~uiexplorer.bundle.js.map