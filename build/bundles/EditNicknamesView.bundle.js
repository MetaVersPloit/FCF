(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{2165:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=v(a(27)),l=v(a(5)),r=v(a(1)),o=v(a(114)),u=v(a(623)),c=a(28),i=a(23),d=a(11),f=_(a(0)),s=_(a(2)),m=_(a(22)),p=a(58),h=v(a(38)),b=v(a(45)),k=_(a(13)),g=v(a(60)),y=a(6),E=v(a(4));function S(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return S=function(){return e},e}function _(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=S();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var r=n?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,t&&t.set(e,a),a}function v(e){return e&&e.__esModule?e:{default:e}}const w=(0,r.default)(s.default)({height:50,flexDirection:"row",width:"100%",alignItems:"center",paddingLeft:12,paddingRight:12}),x=(0,r.default)(s.FocusableView)({flex:1,margin:"0px 12px 0px 15px",justifyContent:"center"}),P=(0,r.default)(s.default)({paddingRight:12}),C=(0,r.default)(g.default)(e=>({padding:5,backgroundColor:e.theme.select({light:e.theme.colors.base10,dark:e.theme.colors.base50}),border:`1px solid ${e.theme.colors.base40}`}));function I({value:e,onChange:t,handleReturn:a,placeholder:n}){const l=(0,k.useWithSurface)("edit_nickname_text_input",(function(e){a()}));return f.default.createElement(C,{value:e,onChange:t,onKeyPress:function(e){e.metaKey||e.altKey||e.shiftKey||e.ctrlKey||"Enter"===e.key&&l(e)},autoFocus:!0,enableEmoticonTranslation:!0,enableClearButton:!0,placeholder:n,maxLength:50})}const M={clearModal:c.AppContextActions.clearModal,updateThreadParticipantNickname:i.InboxActions.participants.updateThreadParticipantNickname};var N=(0,d.connect)((function(e,{threadKey:t}){return{participants:(0,i.selectSortedParticipantListForThread)(e,{threadKey:t})}}),M)((function({participants:e,threadKey:t,clearModal:a,updateThreadParticipantNickname:r}){const c=(0,y.useTheme)();let i={};for(let t of e)i[t.contactId]=t.nickname;const[d,s]=(0,f.useState)(i),[g,S]=(0,f.useState)(""),[_,v]=(0,f.useState)(null),C=e=>()=>{S(e.nickname||""),v(e.contactId)},M=e=>{s(t=>({...t,[e.contactId]:g})),r(t,e.contactId,g),v(null)},N=l.default._("Nicknames",null,{hk:"2zJsaN"}).toString();return f.default.createElement(k.default,{name:"EditNicknames"},f.default.createElement(p.Modal,{width:400,height:300,onHideModal:a,"aria-label":N},f.default.createElement(p.ModalHeader,{title:N,onClose:a}),f.default.createElement(b.default,null,e.map(e=>f.default.createElement(w,{key:e.contactId},f.default.createElement(h.default,{size:m.RoundButtonSize.Small,profilePictureUrl:(0,n.default)(e.profilePicture)}),_===e.contactId?(e=>f.default.createElement(f.default.Fragment,null,f.default.createElement(x,{onActivate:null},f.default.createElement(P,null,f.default.createElement(I,{value:g,onChange:S,handleReturn:()=>M(e),placeholder:l.default._("Set Nickname",null,{hk:"2Y0YTc"})}))),f.default.createElement(m.default,{icon:o.default,size:m.RoundButtonSize.Small,"aria-label":l.default._("Submit nickname",null,{hk:"1KYU5z"}).toString(),buttonColor:c.colors.base40,telemetryName:"submit_nickname",onClick:()=>M(e)})))(e):(e=>{const t=d[e.contactId]?c.semanticColors.textPrimary:c.colors.base70,a=c.colors.base70;return f.default.createElement(f.default.Fragment,null,f.default.createElement(x,{onActivate:C(e)},f.default.createElement(E.default,{color:t,use:"body-semibold"},d[e.contactId]?d[e.contactId]:l.default._("Set Nickname",null,{hk:"26rxie"}).toString()),f.default.createElement(E.default,{color:a,use:"subtext"},e.name)),f.default.createElement(m.default,{icon:u.default,size:m.RoundButtonSize.Small,use:m.RoundButtonUse.Transparent,"aria-label":l.default._("Edit Nickname",null,{hk:"m270c"}).toString(),telemetryName:"select_participant",onClick:C(e)}))})(e))))))}));t.default=N}}]);
//# sourceMappingURL=https://intern.facebook.com/intern/messenger/desktop/sourcemaps?archon_build_number=332019425&map_path=../sourcemaps/EditNicknamesView.bundle.js.map