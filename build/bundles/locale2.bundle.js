(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{660:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s,r=(s=t(185))&&s.__esModule?s:{default:s};function _(e){return e>1&&e<5&&1!=~~(e/10)}function d(e,n,t,s){const r=`${e} `;switch(t){case"s":return n||s?"pár sekund":"pár sekundami";case"m":return n?"minuta":s?"minutu":"minutou";case"mm":return n||s?r+(_(e)?"minuty":"minut"):`${r}minutami`;case"h":return n?"hodina":s?"hodinu":"hodinou";case"hh":return n||s?r+(_(e)?"hodiny":"hodin"):`${r}hodinami`;case"d":return n||s?"den":"dnem";case"dd":return n||s?r+(_(e)?"dny":"dní"):`${r}dny`;case"M":return n||s?"měsíc":"měsícem";case"MM":return n||s?r+(_(e)?"měsíce":"měsíců"):`${r}měsíci`;case"y":return n||s?"rok":"rokem";case"yy":return n||s?r+(_(e)?"roky":"let"):`${r}lety`}}const o={name:"cs",weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),months:"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),monthsShort:"led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),weekStart:1,ordinal:e=>`${e}.`,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"DD MMM"},relativeTime:{future:"za %s",past:"před %s",s:d,m:d,mm:d,h:d,hh:d,d:d,dd:d,M:d,MM:d,y:d,yy:d}};r.default.locale(o,void 0,!0);var u=o;n.default=u}}]);