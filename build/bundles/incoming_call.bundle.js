!function(e){function t(t){for(var n,a,c=t[0],u=t[1],i=t[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(f&&f(t);d.length;)d.shift()();return r.push.apply(r,i||[]),l()}function l(){for(var e,t=0;t<r.length;t++){for(var l=r[t],n=!0,c=1;c<l.length;c++){var u=l[c];0!==o[u]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=l[0]))}return e}var n={},o={108:0},r=[];function a(t){if(n[t])return n[t].exports;var l=n[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,a),l.l=!0,l.exports}a.e=function(e){var t=[],l=o[e];if(0!==l)if(l)t.push(l[2]);else{var n=new Promise((function(t,n){l=o[e]=[t,n]}));t.push(l[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+""+({7:"ContextMenu~InboxScreen~TitleBar~native_fallback~uiexplorer",12:"InboxScreen~TitleBar~native_fallback~uiexplorer",21:"TitleBar~native_fallback~uiexplorer",35:"TitleBar",38:"locale0",39:"locale10",40:"locale12",41:"locale14",42:"locale16",43:"locale18",44:"locale2",45:"locale20",46:"locale22",47:"locale24",48:"locale26",49:"locale28",50:"locale30",51:"locale32",52:"locale34",53:"locale36",54:"locale38",55:"locale4",56:"locale40",57:"locale42",58:"locale44",59:"locale46",60:"locale48",61:"locale50",62:"locale52",63:"locale54",64:"locale56",65:"locale58",66:"locale6",67:"locale60",68:"locale62",69:"locale64",70:"locale66",71:"locale68",72:"locale70",73:"locale72",74:"locale74",75:"locale76",76:"locale78",77:"locale8",78:"locale80",79:"locale82",80:"locale84",85:"ContextMenu"}[e]||e)+".bundle.js"}(e);var u=new Error;r=function(t){c.onerror=c.onload=null,clearTimeout(i);var l=o[e];if(0!==l){if(l){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,l[1](u)}o[e]=void 0}};var i=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,l){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(a.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(l,n,function(t){return e[t]}.bind(null,n));return l},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="bundles/",a.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=u;r.push([894,2,1,4,5,3,6,15,37]),l()}({894:function(e,t,l){l(106),e.exports=l(895)},895:function(e,t,l){"use strict";var n=u(l(896)),o=u(l(108)),r=u(l(29)),a=u(l(0)),c=u(l(126));function u(e){return e&&e.__esModule?e:{default:e}}function i(){return a.default.createElement(c.default,{hideTitlebar:!0},a.default.createElement(n.default,null))}(0,o.default)(()=>{const e=document.getElementById("root");e&&r.default.render(a.default.createElement(i,null),e)})},896:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){const e=window.location.search,t=(0,o.parseQueryString)(e),l=t.dialog_props?JSON.parse(t.dialog_props):null,d=(e,t,l,o)=>{a.default.metrics.trackStrictEvent((0,n.UserInteractionEvent)({event:l,target:t,surface:e,context:o}))};if((0,c.default)(r.default,!0,!0===(null==l?void 0:l.soundEnabled)),l)return i.default.createElement(s.default,{onEvent:d},i.default.createElement(u.default,{name:"incomingCallDialog"},i.default.createElement(f.default,p({},l,{onAcceptCall:a.default.incomingCallDialog.acceptCall,onRejectCall:a.default.incomingCallDialog.rejectCall}))));return null};var n=l(24),o=l(104),r=d(l(897)),a=d(l(9)),c=d(l(898)),u=d(l(13)),i=d(l(0)),f=d(l(460)),s=d(l(122));function d(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}},897:function(e,t,l){e.exports=l.p+"assets/assets/sounds/ringtone.mp3"},898:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t=!0,l=!0){const o=(0,n.useRef)(new Audio(e));o.current.loop=t,(0,n.useEffect)(()=>{l?o.current.play():o.current.pause()},[l])};var n=l(0)}});
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/incoming_call.bundle.js.map