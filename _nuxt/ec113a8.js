(window.webpackJsonp=window.webpackJsonp||[]).push([[2,6,7,8],{361:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2NjFfNzI5OTcpIj4KPHBhdGggZD0iTTI5LjY0IDM0LjM2TDQ4IDUyLjY4TDY2LjM2IDM0LjM2TDcyIDQwTDQ4IDY0TDI0IDQwTDI5LjY0IDM0LjM2WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjYxXzcyOTk3Ij4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},364:function(t,M,n){"use strict";n.r(M);n(178);var l=[function(){var t=this._self._c;return t("div",{staticClass:"c-input inputWithIcon pb-3 searchInput"},[t("input",{attrs:{type:"text",placeholder:"搜尋"}}),this._v(" "),t("img",{attrs:{src:n(367),alt:""}})])}],I=(n(38),n(370)),c=n.n(I),e=n(371),o=n.n(e),N=n(372),j=n.n(N),z=n(373),D=n.n(z),r=n(374),A=n.n(r),L={data:function(){return{login:!0,searchActive:!1,menuActive:!1,headerLeftGroup:[{title:"首頁",link:"/"},{title:"品味誌",link:"#"},{title:"探索",link:"/search"},{title:"發起專案",link:"#"}],headerRightGroup:{link:[{title:"登入",link:"/account/login"},{title:"註冊",link:"/account/register"}],icon:{default:[{src:c.a,link:"#"}],login:[{src:o.a,link:"#"},{src:j.a,link:"#"}]},profile:{src:D.a,link:"#"},close:{src:A.a,link:"#"}},menu:{link:{default:[{title:"首頁",link:"/"},{title:"品味誌",link:"#"},{title:"探索",link:"/search"},{title:"發起專案",link:"#"}],login:[{title:"會員專區",link:"",subLink:[{title:"個人頁面",link:"/user"},{title:"我的收藏",link:"#"},{title:"購物車",link:"#"},{title:"交易紀錄",link:"#"},{title:"我的提案",link:"#"},{title:"編輯個人資料",link:"#"},{title:"變更密碼",link:"#"}]}]},button:{default:[{title:"登入",style:"solid",color:"blue",link:"/account/login",icon:null},{title:"註冊",style:"outline",color:"blue",link:"/account/register",icon:null}]}}}},methods:{activeSearchBar:function(){var t=this;this.searchActive=!0,setTimeout((function(){t.$refs.searchInput.focus()}),0)},closeSearchBar:function(){this.searchActive=!1},toggleMoblieMenu:function(){this.menuActive=!this.menuActive},logoutAccount:function(){this.login=!1}},mounted:function(){var t=this;window.onresize=function(){t.searchActive=!1,t.menuActive=!1}}},y=n(70),component=Object(y.a)(L,(function(){var t=this,M=t._self._c;return M("div",{staticClass:"l-header"},[M("div",{staticClass:"container topBar"},[M("div",{staticClass:"row py-lg-4 py-3 justify-content-between align-items-center"},[t.searchActive?t._e():M("div",{staticClass:"col-auto d-flex align-items-center headerLeftGroup"},[M("NuxtLink",{staticClass:"mr-3 logo",attrs:{to:"/"}},[M("img",{attrs:{src:n(368),alt:""}})]),t._v(" "),M("div",{staticClass:"d-lg-flex d-none linkGroup"},t._l(t.headerLeftGroup,(function(link,n){return M("NuxtLink",{key:n+"headerLeftGroupLink",staticClass:"link",attrs:{to:link.link}},[t._v(t._s(link.title))])})),1)],1),t._v(" "),M("div",{staticClass:"col-auto d-flex headerRightGroup",class:[t.searchActive?"flex-fill":""]},[M("div",{staticClass:"d-lg-flex d-none flex-fill pc align-items-center"},[M("div",{staticClass:"iconGroup d-flex flex-fill align-items-center"},[t._l(t.headerRightGroup.icon.default,(function(n,l){return M("NuxtLink",{key:l+"headerRightGroupIconDefault",staticClass:"icon",attrs:{to:n.link},nativeOn:{click:function(M){return t.activeSearchBar.apply(null,arguments)}}},[M("img",{attrs:{src:n.src,alt:""}})])})),t._v(" "),t.searchActive?M("div",{staticClass:"searchInput d-flex flex-fill"},[M("input",{ref:"searchInput",staticClass:"flex-fill",attrs:{type:"text",id:"",placeholder:"請輸入關鍵字"}})]):t._e(),t._v(" "),t.searchActive?M("NuxtLink",{staticClass:"icon",attrs:{to:"#"},nativeOn:{click:function(M){return t.closeSearchBar.apply(null,arguments)}}},[M("img",{attrs:{src:t.headerRightGroup.close.src,alt:""}})]):t._e(),t._v(" "),t.login&&!t.searchActive?M("div",t._l(t.headerRightGroup.icon.login,(function(t,n){return M("NuxtLink",{key:n+"headerRightGroupIconLogin",staticClass:"icon",attrs:{to:t.link}},[M("img",{attrs:{src:t.src,alt:""}})])})),1):t._e()],2),t._v(" "),t.login&&!t.searchActive?M("NuxtLink",{staticClass:"profile icon",attrs:{to:t.headerRightGroup.profile.link},nativeOn:{click:function(M){return t.toggleMoblieMenu.apply(null,arguments)}}},[M("img",{attrs:{src:t.headerRightGroup.profile.src,alt:""}})]):t._e(),t._v(" "),t.login&&!t.searchActive&&t.menuActive?M("div",{staticClass:"pcMenu"},[t._l(t.menu.link.login[0].subLink,(function(link){return M("NuxtLink",{key:link.title,staticClass:"pcMenuLink",attrs:{to:link.link}},[t._v("\n                            "+t._s(link.title)+"\n                        ")])})),t._v(" "),M("div",{staticClass:"c-button c-botton-red pcMenuButton"},[M("NuxtLink",{attrs:{to:"#"},nativeOn:{click:function(M){return t.logoutAccount.apply(null,arguments)}}},[M("p",[t._v("登出")])])],1)],2):t._e(),t._v(" "),t.login||t.searchActive?t._e():M("div",{staticClass:"linkGroup d-flex align-items-center ml-3"},t._l(t.headerRightGroup.link,(function(link,n){return M("NuxtLink",{key:n+"headerRightGroupLink",staticClass:"link",attrs:{to:link.link}},[t._v(t._s(link.title))])})),1)],1),t._v(" "),M("div",{staticClass:"d-lg-none d-flex mobile"},[M("NuxtLink",{staticClass:"icon",attrs:{to:"#"},nativeOn:{click:function(M){return t.toggleMoblieMenu.apply(null,arguments)}}},[M("img",{attrs:{src:n(369),alt:""}})])],1)])])]),t._v(" "),t.menuActive?M("div",{staticClass:"mobileMenu d-lg-none"},[M("div",{staticClass:"container h-100"},[M("div",{staticClass:"row h-100"},[M("div",{staticClass:"col-12 d-flex flex-column h-100"},[t._m(0),t._v(" "),M("div",{staticClass:"linkGroup d-flex flex-column mb-3 flex-fill"},[t._l(t.menu.link.default,(function(link,n){return M("div",{key:n+"mobileMenuLinkListDefault",staticClass:"link d-flex flex-column",attrs:{to:link.link}},[M("NuxtLink",{staticClass:"mainLink",attrs:{to:link.link}},[t._v("\n                                "+t._s(link.title)+"\n                            ")]),t._v(" "),link.subLink?M("div",{staticClass:"subLink"},t._l(link.subLink,(function(n){return M("NuxtLink",{key:n.title,staticClass:"subLink",attrs:{to:n.link}},[t._v("\n                                    "+t._s(n.title)+"\n                                ")])})),1):t._e()],1)})),t._v(" "),t.login?M("div",t._l(t.menu.link.login,(function(link,n){return M("div",{key:n+"mobileMenuLinkListLogin",staticClass:"link d-flex flex-column",attrs:{to:link.link}},[M("NuxtLink",{staticClass:"mainLink",attrs:{to:link.link}},[t._v("\n                                    "+t._s(link.title)+"\n                                ")]),t._v(" "),link.subLink?M("div",{staticClass:"subLinkGroup d-flex flex-column"},t._l(link.subLink,(function(n){return M("NuxtLink",{key:n.title,staticClass:"subLink",attrs:{to:n.link}},[t._v("\n                                        "+t._s(n.title)+"\n                                    ")])})),1):t._e()],1)})),0):t._e()],2),t._v(" "),t.login?M("div",{staticClass:"buttonGroup d-flex flex-column"},[M("div",{staticClass:"c-button c-botton-red"},[M("NuxtLink",{attrs:{to:"#"},nativeOn:{click:function(M){return t.logoutAccount.apply(null,arguments)}}},[M("p",[t._v("登出")])])],1)]):M("div",{staticClass:"buttonGroup d-flex flex-column"},[M("div",{staticClass:"c-button c-botton-blue"},[M("NuxtLink",{attrs:{to:"/account/login"}},[M("p",[t._v("登入")])])],1),t._v(" "),M("div",{staticClass:"c-button c-botton-outline-blue"},[M("NuxtLink",{attrs:{to:"/account/register"}},[M("p",[t._v("註冊")])])],1)])])])])]):t._e()])}),l,!1,null,null,null);M.default=component.exports},365:function(t,M,n){"use strict";n.r(M);n(178);var l=n(375),I=n.n(l),c=n(376),e=n.n(c),o=n(377),N=n.n(o),line=n(378),j=n.n(line),z=n(379),D=n.n(z),r={data:function(){return{footerInfo:{top:{imgSrc:I.a,subtitle:"亞洲最大跨國集資平台"},center:[{title:"來逛逛",linkButton:[{title:"群眾募資",link:"/"},{title:"產品館",link:"/"},{title:"品味誌",link:"/"},{title:"品牌旗艦館",link:"/"},{title:"全球好物推薦",link:"/"}]},{title:"來提案",linkButton:[{title:"發起專案",link:"/"},{title:"提案諮詢",link:"/"},{title:"品牌資源",link:"/"}]},{title:"來瞭解",linkButton:[{title:"關於我們",link:"/"},{title:"常見問題",link:"/"},{title:"品味誌",link:"/"},{title:"隱私權保護條款",link:"/"},{title:"消費者服務條款",link:"/"},{title:"保固及售後服務",link:"/"},{title:"EZWAY服務說明",link:"/"}]}],bottom:{linkButton:[{imgSrc:e.a,link:"/"},{imgSrc:N.a,link:"/"},{imgSrc:j.a,link:"/"},{imgSrc:D.a,link:"/"}],copyRight:"All right reserved ⓒ MYFEEL.Inc 2022"}}}},methods:{}},A=n(70),component=Object(A.a)(r,(function(){var t=this,M=t._self._c;return M("div",{staticClass:"l-footer"},[M("div",{staticClass:"container"},[M("div",{staticClass:"row top"},[M("div",{staticClass:"col-12 d-flex align-items-end justify-content-md-start justify-content-center"},[M("img",{staticClass:"mr-2",attrs:{src:t.footerInfo.top.imgSrc,alt:""}}),t._v(" "),M("p",{staticClass:"a-font size-075 color-white d-md-inline d-none"},[t._v(t._s(t.footerInfo.top.subtitle))])])]),t._v(" "),M("div",{staticClass:"row center"},t._l(t.footerInfo.center,(function(n,l){return M("div",{key:"footerInfoCenter"+l,staticClass:"col-md-4 col-12 linkGroup"},[M("div",{staticClass:"footerTitle mb-3"},[M("h4",{staticClass:"a-font color-white"},[t._v(t._s(n.title))])]),t._v(" "),M("div",{staticClass:"footerLinkButton"},t._l(n.linkButton,(function(n,l){return M("div",{key:"footerLinkButton"+l,staticClass:"footerLink"},[M("NuxtLink",{staticClass:"a-font color-white",attrs:{to:n.link}},[t._v(t._s(n.title))])],1)})),0)])})),0),t._v(" "),M("div",{staticClass:"row bottom"},[M("div",{staticClass:"col-12 linkGroup"},t._l(t.footerInfo.bottom.linkButton,(function(t,n){return M("NuxtLink",{key:"footerInfoBottomLink"+n,staticClass:"linkButton",attrs:{to:t.link}},[M("img",{attrs:{src:t.imgSrc,alt:""}})])})),1),t._v(" "),M("div",{staticClass:"col-12 d-flex justify-content-center"},[M("p",{staticClass:"a-font size-075 color-white"},[t._v(t._s(t.footerInfo.bottom.copyRight))])])])])])}),[],!1,null,null,null);M.default=component.exports},366:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2NjFfNzMwMDApIj4KPHBhdGggZD0iTTI5LjY0IDYxLjY0TDQ4IDQzLjMyTDY2LjM2IDYxLjY0TDcyIDU2TDQ4IDMyTDI0IDU2TDI5LjY0IDYxLjY0WiIgZmlsbD0iYmxhY2siLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNjYxXzczMDAwIj4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},367:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE0MjdfNzI3MzcpIj4KPHBhdGggZD0iTTYyIDU2SDU4Ljg0TDU3LjcyIDU0LjkyQzYxLjY0IDUwLjM2IDY0IDQ0LjQ0IDY0IDM4QzY0IDIzLjY0IDUyLjM2IDEyIDM4IDEyQzIzLjY0IDEyIDEyIDIzLjY0IDEyIDM4QzEyIDUyLjM2IDIzLjY0IDY0IDM4IDY0QzQ0LjQ0IDY0IDUwLjM2IDYxLjY0IDU0LjkyIDU3LjcyTDU2IDU4Ljg0VjYyTDc2IDgxLjk2TDgxLjk2IDc2TDYyIDU2Wk0zOCA1NkMyOC4wNCA1NiAyMCA0Ny45NiAyMCAzOEMyMCAyOC4wNCAyOC4wNCAyMCAzOCAyMEM0Ny45NiAyMCA1NiAyOC4wNCA1NiAzOEM1NiA0Ny45NiA0Ny45NiA1NiAzOCA1NloiIGZpbGw9IiM5RTlFOUUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNDI3XzcyNzM3Ij4KPHJlY3Qgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},368:function(t,M,n){t.exports=n.p+"img/Logo.3e1411c.svg"},369:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzc2M18xMjg5MzIpIj4KPHBhdGggZD0iTTMwIDE5LjVINlYxNi41SDMwVjE5LjVaIiBmaWxsPSIjOUU5RTlFIi8+CjxwYXRoIGQ9Ik0zMCAyNS41SDZWMjIuNUgzMFYyNS41WiIgZmlsbD0iIzlFOUU5RSIvPgo8cGF0aCBkPSJNNiAxMy41VjEwLjVIMzBWMTMuNUg2WiIgZmlsbD0iIzlFOUU5RSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzc2M18xMjg5MzIiPgo8cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},370:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzgyNV81MzM5OCkiPgo8cGF0aCBkPSJNMjIuNjY2NyAyMC42NjY3SDIxLjYxMzNMMjEuMjQgMjAuMzA2N0MyMi41NDY3IDE4Ljc4NjcgMjMuMzMzMyAxNi44MTMzIDIzLjMzMzMgMTQuNjY2N0MyMy4zMzMzIDkuODggMTkuNDUzMyA2IDE0LjY2NjcgNkM5Ljg4IDYgNiA5Ljg4IDYgMTQuNjY2N0M2IDE5LjQ1MzMgOS44OCAyMy4zMzMzIDE0LjY2NjcgMjMuMzMzM0MxNi44MTMzIDIzLjMzMzMgMTguNzg2NyAyMi41NDY3IDIwLjMwNjcgMjEuMjRMMjAuNjY2NyAyMS42MTMzVjIyLjY2NjdMMjcuMzMzMyAyOS4zMkwyOS4zMiAyNy4zMzMzTDIyLjY2NjcgMjAuNjY2N1pNMTQuNjY2NyAyMC42NjY3QzExLjM0NjcgMjAuNjY2NyA4LjY2NjY3IDE3Ljk4NjcgOC42NjY2NyAxNC42NjY3QzguNjY2NjcgMTEuMzQ2NyAxMS4zNDY3IDguNjY2NjcgMTQuNjY2NyA4LjY2NjY3QzE3Ljk4NjcgOC42NjY2NyAyMC42NjY3IDExLjM0NjcgMjAuNjY2NyAxNC42NjY3QzIwLjY2NjcgMTcuOTg2NyAxNy45ODY3IDIwLjY2NjcgMTQuNjY2NyAyMC42NjY3WiIgZmlsbD0iIzlFOUU5RSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzgyNV81MzM5OCI+CjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},371:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzgyNV81MzQwMCkiPgo8cGF0aCBkPSJNMjQuNjY3IDZIMTEuMzMzN0M5Ljg2Njk5IDYgOC42NjY5OSA3LjIgOC42NjY5OSA4LjY2NjY3VjMwTDE4LjAwMDMgMjZMMjcuMzMzNyAzMFY4LjY2NjY3QzI3LjMzMzcgNy4yIDI2LjEzMzcgNiAyNC42NjcgNlpNMjQuNjY3IDI2TDE4LjAwMDMgMjMuMDkzM0wxMS4zMzM3IDI2VjguNjY2NjdIMjQuNjY3VjI2WiIgZmlsbD0iIzlFOUU5RSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzgyNV81MzQwMCI+CjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIgMikiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},372:function(t,M,n){t.exports=n.p+"img/navBarCart.2e97463.svg"},373:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzEzOTNfNzI4NjMpIj4KPHBhdGggZD0iTTE4IDBDOC4wNjQgMCAwIDguMDY0IDAgMThDMCAyNy45MzYgOC4wNjQgMzYgMTggMzZDMjcuOTM2IDM2IDM2IDI3LjkzNiAzNiAxOEMzNiA4LjA2NCAyNy45MzYgMCAxOCAwWk0yOS40NDggMjYuNjk0QzI2Ljg3NCAyMy41NjIgMjAuNjI4IDIyLjUgMTggMjIuNUMxNS4zNzIgMjIuNSA5LjEyNiAyMy41NjIgNi41NTIgMjYuNjk0QzQuNzE2IDI0LjI4MiAzLjYgMjEuMjc2IDMuNiAxOEMzLjYgMTAuMDYyIDEwLjA2MiAzLjYgMTggMy42QzI1LjkzOCAzLjYgMzIuNCAxMC4wNjIgMzIuNCAxOEMzMi40IDIxLjI3NiAzMS4yODQgMjQuMjgyIDI5LjQ0OCAyNi42OTRaTTE4IDcuMkMxNC41MDggNy4yIDExLjcgMTAuMDA4IDExLjcgMTMuNUMxMS43IDE2Ljk5MiAxNC41MDggMTkuOCAxOCAxOS44QzIxLjQ5MiAxOS44IDI0LjMgMTYuOTkyIDI0LjMgMTMuNUMyNC4zIDEwLjAwOCAyMS40OTIgNy4yIDE4IDcuMloiIGZpbGw9IiM5RTlFOUUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMzkzXzcyODYzIj4KPHJlY3Qgd2lkdGg9IjM2IiBoZWlnaHQ9IjM2IiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},374:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzgyNV81MzE1NCkiPgo8cGF0aCBkPSJNMjguNSA5LjYxNUwyNi4zODUgNy41TDE4IDE1Ljg4NUw5LjYxNSA3LjVMNy41IDkuNjE1TDE1Ljg4NSAxOEw3LjUgMjYuMzg1TDkuNjE1IDI4LjVMMTggMjAuMTE1TDI2LjM4NSAyOC41TDI4LjUgMjYuMzg1TDIwLjExNSAxOEwyOC41IDkuNjE1WiIgZmlsbD0iIzlFOUU5RSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzgyNV81MzE1NCI+CjxyZWN0IHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},375:function(t,M,n){t.exports=n.p+"img/LogoWhite.798c2c4.svg"},376:function(t,M,n){t.exports=n.p+"img/instagram.96db730.svg"},377:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwLjM3NSAyLjI1SDUuNjI1QzQuNzI5ODkgMi4yNSAzLjg3MTQ1IDIuNjA1NTggMy4yMzg1MSAzLjIzODUxQzIuNjA1NTggMy44NzE0NSAyLjI1IDQuNzI5ODkgMi4yNSA1LjYyNUwyLjI1IDMwLjM3NUMyLjI1IDMxLjI3MDEgMi42MDU1OCAzMi4xMjg2IDMuMjM4NTEgMzIuNzYxNUMzLjg3MTQ1IDMzLjM5NDQgNC43Mjk4OSAzMy43NSA1LjYyNSAzMy43NUgxNS4yNzU0VjIzLjA0MDdIMTAuODQ1N1YxOEgxNS4yNzU0VjE0LjE1ODFDMTUuMjc1NCA5Ljc4ODIgMTcuODc3IDcuMzc0MzcgMjEuODYxNiA3LjM3NDM3QzIzLjc2OTggNy4zNzQzNyAyNS43NjUzIDcuNzE0NjkgMjUuNzY1MyA3LjcxNDY5VjEyLjAwMzhIMjMuNTY2NkMyMS40MDAzIDEyLjAwMzggMjAuNzI0NiAxMy4zNDgxIDIwLjcyNDYgMTQuNzI3VjE4SDI1LjU2MDdMMjQuNzg3MyAyMy4wNDA3SDIwLjcyNDZWMzMuNzVIMzAuMzc1QzMxLjI3MDEgMzMuNzUgMzIuMTI4NiAzMy4zOTQ0IDMyLjc2MTUgMzIuNzYxNUMzMy4zOTQ0IDMyLjEyODYgMzMuNzUgMzEuMjcwMSAzMy43NSAzMC4zNzVWNS42MjVDMzMuNzUgNC43Mjk4OSAzMy4zOTQ0IDMuODcxNDUgMzIuNzYxNSAzLjIzODUxQzMyLjEyODYgMi42MDU1OCAzMS4yNzAxIDIuMjUgMzAuMzc1IDIuMjVaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},378:function(t,M,n){t.exports=n.p+"img/line.c007b80.svg"},379:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM0LjM1MzIgOS43NTUxOUMzMy45NjA3IDguMjc3MDYgMzIuODA0IDcuMTEyOTQgMzEuMzM1NSA2LjcxNzg4QzI4LjY3MzYgNiAxNy45OTk4IDYgMTcuOTk5OCA2QzE3Ljk5OTggNiA3LjMyNjA0IDYgNC42NjQxMSA2LjcxNzg4QzMuMTk1NTQgNy4xMTMgMi4wMzg5MiA4LjI3NzA2IDEuNjQ2MzYgOS43NTUxOUMwLjkzMzEwNSAxMi40MzQ0IDAuOTMzMTA1IDE4LjAyNDMgMC45MzMxMDUgMTguMDI0M0MwLjkzMzEwNSAxOC4wMjQzIDAuOTMzMTA1IDIzLjYxNDEgMS42NDYzNiAyNi4yOTMzQzIuMDM4OTIgMjcuNzcxNCAzLjE5NTU0IDI4Ljg4NzEgNC42NjQxMSAyOS4yODIxQzcuMzI2MDQgMzAgMTcuOTk5OCAzMCAxNy45OTk4IDMwQzE3Ljk5OTggMzAgMjguNjczNSAzMCAzMS4zMzU1IDI5LjI4MjFDMzIuODA0IDI4Ljg4NzEgMzMuOTYwNyAyNy43NzE0IDM0LjM1MzIgMjYuMjkzM0MzNS4wNjY1IDIzLjYxNDEgMzUuMDY2NSAxOC4wMjQzIDM1LjA2NjUgMTguMDI0M0MzNS4wNjY1IDE4LjAyNDMgMzUuMDY2NSAxMi40MzQ0IDM0LjM1MzIgOS43NTUxOVpNMTQuNTA4OSAyMy4wOTk0VjEyLjk0OTFMMjMuNDMgMTguMDI0NEwxNC41MDg5IDIzLjA5OTRaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"},380:function(t,M,n){"use strict";n.r(M);var l={props:["dropDownData"],data:function(){return{selected:""}},methods:{getData:function(t){this.selected=t.target.innerText}},mounted:function(){this.selected=this.dropDownData.placeholder}},I=n(70),component=Object(I.a)(l,(function(){var t=this,M=t._self._c;return M("div",{staticClass:"dropdown c-bootstrapDropDown w-100"},[M("NuxtLink",{staticClass:"dropdown-toggle",attrs:{role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false",to:"/"}},[M("p",[t._v(t._s(t.selected))]),t._v(" "),M("img",{staticClass:"arrowDown",attrs:{src:n(361),alt:""}}),t._v(" "),M("img",{staticClass:"arrowUp",attrs:{src:n(366),alt:""}})]),t._v(" "),M("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuLink"}},t._l(t.dropDownData.li,(function(n){return M("li",{on:{click:t.getData}},[M("NuxtLink",{staticClass:"dropdown-item",attrs:{to:"#"},domProps:{textContent:t._s(n)}})],1)})),0)],1)}),[],!1,null,null,null);M.default=component.exports},399:function(t,M){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE2OTlfNTY5NjUpIj4KPHBhdGggZD0iTTI0IDEyQzI0IDUuMzcyNDQgMTguNjI3NiAwIDEyIDBDNS4zNzI0NCAwIDAgNS4zNzI0NCAwIDEyQzAgMTcuOTg5MyA0LjM4NzU2IDIyLjk1NDcgMTAuMTI0NCAyMy44NTQyVjE1LjQ2ODRINy4wNzczM1YxMkgxMC4xMjQ0VjkuMzU2NDRDMTAuMTI0NCA2LjM0ODQ0IDExLjkxNjQgNC42ODggMTQuNjU3OCA0LjY4OEMxNS45NzE2IDQuNjg4IDE3LjM0NCA0LjkyMjY3IDE3LjM0NCA0LjkyMjY3VjcuODc1NTZIMTUuODMxMUMxNC4zNDEzIDcuODc1NTYgMTMuODc1NiA4LjggMTMuODc1NiA5Ljc0OTMzVjEySDE3LjIwMzZMMTYuNjcyIDE1LjQ2ODRIMTMuODc1NlYyMy44NTQyQzE5LjYxMjQgMjIuOTU0NyAyNCAxNy45ODkzIDI0IDEyWiIgZmlsbD0iIzQ2NzZFRCIvPgo8cGF0aCBkPSJNMTYuNjcwNCAxNS40Njg0TDE3LjIwMTkgMTJIMTMuODczOVY5Ljc0OTMyQzEzLjg3MzkgOC43OTk5OSAxNC4zMzc5IDcuODc1NTQgMTUuODI5NSA3Ljg3NTU0SDE3LjM0MjRWNC45MjI2NUMxNy4zNDI0IDQuOTIyNjUgMTUuOTY5OSA0LjY4Nzk5IDE0LjY1NjEgNC42ODc5OUMxMS45MTQ4IDQuNjg3OTkgMTAuMTIyOCA2LjM0ODQzIDEwLjEyMjggOS4zNTY0M1YxMkg3LjA3NTY4VjE1LjQ2ODRIMTAuMTIyOFYyMy44NTQyQzEwLjczNDQgMjMuOTUwMiAxMS4zNjAxIDI0IDExLjk5ODQgMjRDMTIuNjM2NiAyNCAxMy4yNjI0IDIzLjk1MDIgMTMuODczOSAyMy44NTQyVjE1LjQ2ODRIMTYuNjcwNFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTY5OV81Njk2NSI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"},400:function(t,M,n){t.exports=n.p+"img/googleColorful.4d1680b.svg"},401:function(t,M,n){t.exports=n.p+"img/lineColorful.90e4dff.svg"}}]);