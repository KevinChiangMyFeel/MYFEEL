(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{362:function(t,c,o){"use strict";o.r(c);o(26);var e={props:["cardData"],data:function(){return{favoriteButtonActive:!1,projectStatus:""}},computed:{getPercentage:function(){return Math.round(this.cardData.price.accumulationAmount/this.cardData.price.goalAmount*100)},getStartNow:function(){return Date.now()-this.cardData.date.startingDate},getExpirationNow:function(){return Date.now()-this.cardData.date.expirationDate},getCountDown:function(){if(this.getStartNow<0){var t=this.convertMilliseconds(-this.getStartNow);return"倒數 "+t[0]+" 天 "+t[1]+" 時 "+t[2]+" 分 "+t[3]+" 秒"}if(this.getExpirationNow<0&&this.getStartNow>0){var c=this.convertMilliseconds(-this.getExpirationNow);return c[0]>1?"倒數 "+c[0]+" 天":"倒數 "+c[1]+" 時 "+c[2]+" 分 "+c[3]+" 秒"}return this.getPercentage>=100?"募資成功":"已結束"},returnProjectStatus:function(){return"crowdfunding"==this.cardData.type||"subscription"==this.cardData.type||"longTerm"==this.cardData.type?this.getStartNow<0?(this.projectStatus="commingSoon","commingSoon"):this.getExpirationNow<0&&this.getStartNow>0?(this.projectStatus="progressing","progressing"):(this.projectStatus="finished","finished"):0}},methods:{toggleFavoriteButton:function(){this.favoriteButtonActive=!this.favoriteButtonActive},convertMilliseconds:function(t){var c=Math.floor(t/1e3),o=c%3600;return[Math.floor(c/3600/24),Math.floor(c/3600%24),Math.floor(o/60),o%60]}},mounted:function(){}},r=o(70),component=Object(r.a)(e,(function(){var t=this,c=t._self._c;return c("NuxtLink",{staticClass:"c-card",class:[t.cardData.type,t.returnProjectStatus],attrs:{to:"/"}},[c("div",{staticClass:"favoriteButton",class:{active:t.favoriteButtonActive},on:{click:t.toggleFavoriteButton}},[c("img",{staticClass:"default",attrs:{src:o(363),alt:""}}),t._v(" "),c("img",{staticClass:"hover",attrs:{src:o(364),alt:""}})]),t._v(" "),c("div",{staticClass:"imgBox"},[c("img",{attrs:{src:t.cardData.bannerSrc,alt:""}})]),t._v(" "),c("div",{staticClass:"cardInfomation"},["media"!=t.cardData.type?c("div",{staticClass:"supplier"},[c("p",[t._v("發起人："+t._s(t.cardData.supplier))])]):c("div",{staticClass:"editor"},[c("img",{attrs:{src:t.cardData.editor.imgSrc,alt:""}}),t._v(" "),c("p",[t._v("作者："+t._s(t.cardData.editor.name))])]),t._v(" "),c("div",{staticClass:"title"},[c("p",[t._v(t._s(t.cardData.title))])]),t._v(" "),"crowdfunding"==t.cardData.type||"subscription"==t.cardData.type||"longTerm"==t.cardData.type?c("div",{staticClass:"crowdfundingData"},[c("div",{staticClass:"topData"},["commingSoon"!=t.projectStatus?c("div",{staticClass:"accumulationAmount"},[c("p",[t._v("\n                        NT "+t._s(t.cardData.price.accumulationAmount)+"\n                    ")])]):t._e(),t._v(" "),c("div",{staticClass:"countDown"},[c("p",[t._v("\n                        "+t._s(t.getCountDown)+"\n                    ")])]),t._v(" "),"commingSoon"==t.projectStatus?c("div",[c("p",{staticClass:"a-font weight-bold size-075 color-gray500"},[t._v("即將上市")])]):t._e()]),t._v(" "),c("div",{staticClass:"dataBar"},["commingSoon"!=t.projectStatus?c("div",{staticClass:"bar",style:{width:t.getPercentage>=100?"100%":t.getPercentage+"%"}}):t._e()]),t._v(" "),"commingSoon"!=t.projectStatus?c("div",{staticClass:"bottomData"},[c("div",{staticClass:"accumulationSponsor"},[c("p",[t._v("累積 "+t._s(t.cardData.accumulationSponsor)+" 人支持")])]),t._v(" "),c("div",{staticClass:"accumulationPercentage"},[c("p",[t._v(t._s(t.getPercentage)+" %")])])]):t._e()]):t._e(),t._v(" "),"product"==t.cardData.type?c("div",{staticClass:"productPrice",class:[null!=t.cardData.price.hotPrice?"hot":""]},[t.cardData.price.hotPrice?c("div",{staticClass:"hotPrice"},[c("p",[t._v("NT$ "+t._s(t.cardData.price.hotPrice))])]):t._e(),t._v(" "),c("div",{staticClass:"price"},[c("p",[t._v("NT$ "+t._s(t.cardData.price.ogPrice))])])]):t._e(),t._v(" "),"media"==t.cardData.type?c("div",{staticClass:"mediaData"},[c("div",{staticClass:"discription"},[c("p",[t._v(t._s(t.cardData.discription))])]),t._v(" "),c("div",{staticClass:"dataGroup"},[c("div",{staticClass:"releaseDate"},[c("p",[t._v("發布時間:")])]),t._v(" "),c("div",{staticClass:"accumulationViewer"},[c("img",{attrs:{src:o(365),alt:""}}),t._v(" "),c("p",[t._v(t._s(t.cardData.accumulationViewer))])])])]):t._e()])])}),[],!1,null,null,null);c.default=component.exports},363:function(t,c){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1MzJfNzI3NTMpIj4KPHBhdGggZD0iTTY4IDEySDI4QzIzLjYgMTIgMjAgMTUuNiAyMCAyMFY4NEw0OCA3Mkw3NiA4NFYyMEM3NiAxNS42IDcyLjQgMTIgNjggMTJaTTY4IDcyTDQ4IDYzLjI4TDI4IDcyVjIwSDY4VjcyWiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNTMyXzcyNzUzIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},364:function(t,c){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE1MzJfNzI3NTApIj4KPHBhdGggZD0iTTY4IDEySDI4QzIzLjYgMTIgMjAgMTUuNiAyMCAyMFY4NEw0OCA3Mkw3NiA4NFYyMEM3NiAxNS42IDcyLjQgMTIgNjggMTJaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE1MzJfNzI3NTAiPgo8cmVjdCB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},365:function(t,c){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2MDFfNzUzNTMpIj4KPHBhdGggZD0iTTQ4IDE4QzI4IDE4IDEwLjkyIDMwLjQ0IDQgNDhDMTAuOTIgNjUuNTYgMjggNzggNDggNzhDNjggNzggODUuMDggNjUuNTYgOTIgNDhDODUuMDggMzAuNDQgNjggMTggNDggMThaTTQ4IDcwQzMyLjg0IDcwIDE5LjMyIDYxLjQ4IDEyLjcyIDQ4QzE5LjMyIDM0LjUyIDMyLjg0IDI2IDQ4IDI2QzYzLjE2IDI2IDc2LjY4IDM0LjUyIDgzLjI4IDQ4Qzc2LjY4IDYxLjQ4IDYzLjE2IDcwIDQ4IDcwWk00OCAzMEMzOC4wOCAzMCAzMCAzOC4wOCAzMCA0OEMzMCA1Ny45MiAzOC4wOCA2NiA0OCA2NkM1Ny45MiA2NiA2NiA1Ny45MiA2NiA0OEM2NiAzOC4wOCA1Ny45MiAzMCA0OCAzMFpNNDggNThDNDIuNDggNTggMzggNTMuNTIgMzggNDhDMzggNDIuNDggNDIuNDggMzggNDggMzhDNTMuNTIgMzggNTggNDIuNDggNTggNDhDNTggNTMuNTIgNTMuNTIgNTggNDggNThaIiBmaWxsPSJibGFjayIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzE2MDFfNzUzNTMiPgo8cmVjdCB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);