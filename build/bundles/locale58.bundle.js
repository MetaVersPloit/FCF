(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{688:function(_,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,M=(s=e(185))&&s.__esModule?s:{default:s};const o="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),d="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),m="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),i=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function l(_,t,e){return"m"===e?t?"минута":"минуту":`${_} ${function(_,t){const e=_.split("_");return t%10==1&&t%100!=11?e[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?e[1]:e[2]}({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[e],+_)}`}const a={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:(_,t)=>i.test(t)?o[_.month()]:n[_.month()],monthsShort:(_,t)=>i.test(t)?d[_.month()]:m[_.month()],weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm",l:"DD MMM"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:l,mm:l,h:"час",hh:l,d:"день",dd:l,M:"месяц",MM:l,y:"год",yy:l},ordinal:_=>_};M.default.locale(a,void 0,!0);var r=a;t.default=r}}]);