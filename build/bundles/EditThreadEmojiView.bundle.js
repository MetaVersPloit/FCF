(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{2161:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(371),r=E(o(5)),a=E(o(341)),i=E(o(1)),l=o(28),u=o(21),c=o(23),d=o(11),f=E(o(0)),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=j();if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=n?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(o,r,a):o[r]=e[r]}o.default=e,t&&t.set(e,o);return o}(o(142)),m=o(58),p=E(o(13)),h=o(6);function j(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return j=function(){return e},e}function E(e){return e&&e.__esModule?e:{default:e}}const y=(0,i.default)(m.ModalHeader)({marginBottom:4}),b=(0,i.default)(s.default)(e=>({flex:1,maxWidth:336}));const w={clearModal:l.AppContextActions.clearModal,changeCustomEmoji:c.InboxActions.threads.changeCustomEmoji};var M=(0,d.connect)((function(e,{threadKey:t}){const o=(0,c.getThreadModel)(e,t),n=(0,u.requireAuthenticationData)(e),r=Boolean(n.isWorkplaceAccount);return{customEmoji:o&&o.customEmoji,isWorkplace:r}}),w)((function({threadKey:e,clearModal:t,changeCustomEmoji:o,customEmoji:i,isWorkplace:l}){const u=(0,h.useTheme)(),c=(0,a.default)(e);if(!e)return t(),null;const d=r.default._("Emoji",null,{hk:"35Tnhf"}).toString();return(f.default.createElement(p.default,{name:"editThreadEmoji"},f.default.createElement(m.Modal,{width:340,height:"mac"===u.os?335:345,"aria-label":d,onHideModal:t},f.default.createElement(y,{title:d,onClose:t}),f.default.createElement(b,{currentEmoji:i,onEmojiClick:n=>{e&&o(e,n===s.HOTLIKE?"":n),t()},showHotlike:!0,isWorkplace:l,threadTheme:c,accessibilityRole:n.EmojiButtonRole.RadioButton}))))}));t.default=M}}]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/EditThreadEmojiView.bundle.js.map