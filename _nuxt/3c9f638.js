(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(t,o,e){var content=e(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("3a3359aa",content,!0,{sourceMap:!1})},234:function(t,o,e){var content=e(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("66969563",content,!0,{sourceMap:!1})},235:function(t,o,e){var content=e(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("259cfa19",content,!0,{sourceMap:!1})},264:function(t,o,e){"use strict";e(189);var n={data:function(){return{parallax:0,copyrightDate:(new Date).getFullYear()}},computed:{small:function(){return this.$vuetify.breakpoint.smAndDown}},methods:{onScroll:function(){var t=document.body.scrollHeight||document.documentElement.scrollHeight,o=window.pageYOffset||window.screenTop||document.body.scrollTop||document.documentElement.scrollTop,e=window.innerHeight;this.parallax=0-Math.floor(o/(t-e)*128)}}},r=(e(333),e(335),e(80)),l=e(117),c=e.n(l),f=e(386),d=e(389),v=e(387),x=e(388),h=e(265),_=e(258),m=e(259),y=e.n(m),w=e(147),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("v-app",{attrs:{dark:""}},[o("div",{staticClass:"parallax-container"},[o("v-img",{staticClass:"parallax-image",style:{top:t.parallax+"px"},attrs:{src:"/vapor.jpg"}})],1),t._v(" "),o("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"parallax-foreground"},[o("v-app-bar",{attrs:{fixed:"",app:"",dense:t.small}},[o("v-toolbar-items",[o("v-btn",{attrs:{nuxt:"",to:"/"}},[t._v("Home")]),t._v(" "),o("v-btn",{attrs:{nuxt:"",to:"/blog"}},[t._v("Blog")]),t._v(" "),o("v-btn",{attrs:{nuxt:"",to:"/photos"}},[t._v("Photos")]),t._v(" "),o("v-btn",{attrs:{nuxt:"",to:"/social"}},[t._v("Social")]),t._v(" "),o("v-btn",{attrs:{nuxt:"",to:"/links"}},[t._v("Links")]),t._v(" "),o("v-btn",{attrs:{nuxt:"",to:"/resume"}},[t._v("Resume")])],1)],1),t._v(" "),o("Nuxt"),t._v(" "),o("v-footer",{staticClass:"d-flex justify-center",attrs:{app:""}},[o("span",[t._v("© "+t._s(t.copyrightDate))])])],1)])}),[],!1,null,"2af6d1c0",null);o.a=component.exports;c()(component,{VApp:f.a,VAppBar:d.a,VBtn:v.a,VFooter:x.a,VImg:h.a,VToolbarItems:_.a}),y()(component,{Scroll:w.b})},277:function(t,o,e){e(278),t.exports=e(279)},323:function(t,o,e){"use strict";e(232)},324:function(t,o,e){var n=e(32)((function(i){return i[1]}));n.push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),n.locals={},t.exports=n},329:function(t,o,e){var content=e(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("1523427e",content,!0,{sourceMap:!1})},330:function(t,o,e){var n=e(32)((function(i){return i[1]}));n.push([t.i,'@font-face{font-family:"OpenDyslexic";src:url(/fonts/open_dyslexic/OpenDyslexic-Regular.otf)}',""]),n.locals={},t.exports=n},333:function(t,o,e){"use strict";e(234)},334:function(t,o,e){var n=e(32)((function(i){return i[1]}));n.push([t.i,".parallax-container[data-v-2af6d1c0]{height:100vh;left:0;position:fixed;right:0;width:100vw;z-index:0}.parallax-container .parallax-image[data-v-2af6d1c0]{height:calc(100vh + 128px);position:relative;top:0}.parallax-foreground[data-v-2af6d1c0]{padding-top:64px;z-index:1}.v-btn.v-btn--active[data-v-2af6d1c0]:before{color:#bf00ff}",""]),n.locals={},t.exports=n},335:function(t,o,e){"use strict";e(235)},336:function(t,o,e){var n=e(32)((function(i){return i[1]}));n.push([t.i,".v-toolbar--dense .v-toolbar__content{padding-left:0;padding-right:0}",""]),n.locals={},t.exports=n},72:function(t,o,e){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(e(323),e(80)),l=e(117),c=e.n(l),f=e(386),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);o.a=component.exports;c()(component,{VApp:f.a})}},[[277,14,4,15]]]);