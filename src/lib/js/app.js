(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],p=0,u=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0a9b":function(t,e,n){},"3cae":function(t,e,n){"use strict";n("ad3e")},"3f2d":function(t,e,n){"use strict";n("b4ec")},"511b":function(t,e,n){},"531e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PodcastRedirectWrapper")},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("div",{staticClass:"podcast-widget-wrapper"},[!0===t.embedded?n("div",{class:[{"mt-10":t.themeInt.allowActionSwitching}]},[t.embedded?n("PodcastRedirectWidget",{attrs:{urls:t.urls,primaryApps:t.primaryApps,action:t.actionInt,socialLinks:t.socialLinks,theme:t.themeInt,embedded:!0}}):t._e(),t.themeInt.allowActionSwitching?n("ActionSwitch",{attrs:{action:t.actionInt,theme:t.themeInt,embedded:!0},on:{click:t.toggleAction}}):t._e()],1):t._e(),!1===t.embedded?n("v-container",{staticClass:"background-wrapper",attrs:{fluid:"","fill-height":""}},[n("div",{class:["background",{image:t.backgroundIsImage}],style:t.backgroundStyle}),n("div",{staticClass:"background tint",style:t.tintStyle}),n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"content",attrs:{cols:"12",sm:"9",md:"5",lg:"4"}},[n("PodcastRedirectWidget",{attrs:{urls:t.urls,primaryApps:t.primaryApps,action:t.actionInt,socialLinks:t.socialLinks,theme:t.themeInt},on:{"app-choice":function(e){return t.$emit("app-choice",e)}}}),t.themeInt.allowActionSwitching?n("ActionSwitch",{attrs:{action:t.actionInt,theme:t.themeInt},on:{click:t.toggleAction}}):t._e(),t.themeInt.showCallout?n("CtaCallout",{attrs:{message:t.actionNiceName+"!"}}):t._e()],1)],1)],1):t._e()],1)])},s=[],c=(n("99af"),n("caad"),n("2532"),n("5530")),l=n("2909"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{class:["widget-wrapper",{embedded:!0===t.embedded}]},[!0===t.theme.showCover?n("v-img",{staticClass:"white--text align-end",attrs:{height:t.theme.coverHeight,src:t.theme.cover,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"}},[n("v-spacer"),n("v-card-title",[t._v(t._s(t.theme.title))]),t.haveSubtitle?n("v-card-subtitle",{staticClass:"white--text"},[t._v(" "+t._s(t.theme.subtitle)+" ")]):t._e(),n("SocialLinks",{staticClass:"top-right text-right ma-1 pa-0",attrs:{links:t.socialLinks,color:t.theme.coverButtonColor}})],1):t._e(),!1===t.haveSelectedApp?n("AppList",{attrs:{allAppData:t.allAppData,order:t.appOrder.primary,ctaText:t.actionNiceName,hasSibling:t.appOrder.secondary.length>0,action:t.action},on:{click:t.selectApp}}):t._e(),!1===t.haveSelectedApp&&t.appOrder.secondary.length>0&&t.theme.showSecondaryApps?n("AppIconList",{attrs:{allAppData:t.allAppData,order:t.appOrder.secondary,actionNiceName:t.actionNiceName},on:{click:t.selectApp}}):t._e(),t.haveSelectedApp?n("InstructionList",{attrs:{appData:t.selectedApp,action:t.action},on:{close:t.deselectApp}}):t._e(),t._e()],1)},p=[],u=(n("4160"),n("a434"),n("b64b"),n("498a"),n("159b"),n("faac")),h=n.n(u),m=(n("ac1f"),n("5319"),n("9911"),n("d4ec")),f=n("bee2"),v=(n("1276"),n("53ca")),b={themeDefault:{title:"War and Peace in just 7 Years",subtitle:"'My Dad Wrote a Porno' but Russia, no porno, and dad is Leo Tolstoy",showCover:!0,coverHeight:"250px",cover:"img/demo/WarAndPeaceIn7Years_WAPIN7_cover_alt_@x2.jpg",coverButtonColor:"#F44336",background:"",backgroundTintColor:"#311B92",backgroundTintOpacity:"0.7",numPrimaryApps:3,showSecondaryApps:!0,rateText:"Rate & Review",subscribeText:"Subscribe",showCallout:!0,allowActionSwitching:!0,switchTitleTextRate:"Don't forget to...",switchButtonTextRate:"Subscribe!",switchTitleTextSubscribe:"Already subscribed?",switchButtonTextSubscribe:"Leave a rating!",switchTitleColor:"white",switchButtonColor:"#F44336",switchAlwaysCompactStyle:!1},primaryAppsDefault:["apple-podcasts-mobile","spotify-mobile","google-podcasts","stitcher","podcast-addict","acast"],actions:{rate:"rate",subscribe:"subscribe"},iconUrl:"https://cdn.jsdelivr.net/gh/stephenbeckett/podcast-widget-cdn/dist/img/app-icons"};b.validActions=Object.keys(b.actions);var g=b,y=function(){function t(){Object(m["a"])(this,t)}return Object(f["a"])(t,null,[{key:"hasProperty",value:function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}},{key:"isObject",value:function(t){return"object"===Object(v["a"])(t)&&null!==t}},{key:"isString",value:function(t){return"string"===typeof t||t instanceof String}},{key:"actionNiceName",value:function(t,e){return t["".concat(e,"Text")]}},{key:"makeIconUrl",value:function(t){return"".concat(g.iconUrl,"/").concat(t,".png")}},{key:"deepFindReplaceTemplateTags",value:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return 0===a?(console.warn("Utils: deepFindReplaceTemplateTags: Reached maximum depth, aborting without applying template."),t):(Object.keys(t).forEach((function(i){n.isObject(t[i])?t[i]=n.deepFindReplaceTemplateTags(t[i],e,a-1):n.isString(t[i])&&(t[i]=n.findReplaceTemplateTags(t[i],e))})),t)}},{key:"findReplaceTemplateTags",value:function(t,e){var n,a=/{{ ?(?:([A-Za-z0-9-_.]+))+ ?}}/g,i=t;while(null!==(n=a.exec(t)))if(n.index===a.lastIndex&&a.lastIndex++,n.length>0){var o=n[0],r=n[1],s=this.getValueFromObjectPath(e,r);void 0!==s&&(i=i.replace(o,s))}return i}},{key:"getValueFromObjectPath",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=e.trim().split("."),i=t,o=!1;return a.forEach((function(t,e){o||0===e&&n||(void 0===i[t]&&(o=!0),i=i[t])})),o?void 0:i}}]),t}(),k=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(m["a"])(this,t),this.data=e,this}return Object(f["a"])(t,[{key:"get",value:function(t,e){var n=Object(c["a"])({},this.data);Object.keys(e).forEach((function(t){!1===y.hasProperty(n,t)&&(n[t]={}),n[t].url=e[t]}));var a=Object(c["a"])({},this.data);return Object.keys(a).forEach((function(e){(!1===y.hasProperty(a[e].actions,t)||!1===y.hasProperty(a[e],"url"))&&delete a[e]})),y.deepFindReplaceTemplateTags(a,n),a}},{key:"add",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=n;""===i&&(i=t.toLowerCase().replace(" ","-"));var o=a;""===o&&(o=i);var r=y.makeIconUrl(o);r||console.warn("AppData: Could not find an icon for '".concat(o,"'"));var s={id:i,name:t,icon:r,addAction:function(t,n){return e.addAction(i,t,n)},actions:{},setTheme:function(t){return s.color=t,s}};return this.data[i]=s,s}},{key:"addAction",value:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!1===g.validActions.includes(e))return console.error("PlatformData: addAction: '".concat(e,"' is not a valid action name, must be one of: ").concat(g.validActions)),this.data[t];var i={instructions:[],addStep:function(a){return n.addInstructionStep(t,e,a)},addAction:function(e){return n.addAction(t,e)}};return a.length>0&&(i.ctaOverride=a),this.data[t].actions[e]=i,i}},{key:"addInstructionStep",value:function(t,e,n){var a=this,i={message:n,withLink:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Open";return i.link={url:t,title:e},i},withImage:function(t){return i.image={url:t},i},addStep:function(n){return a.addInstructionStep(t,e,n)},addAction:function(e,n){return a.addAction(t,e,n)}};return this.data[t].actions[e].instructions.push(i),i}},{key:"clone",value:function(){return new t(Object(c["a"])({},this.data))}}]),t}(),w=g.actions.subscribe,A={spotifyDesktop:function(t){return t.add("Spotify","spotify-desktop","spotify").setTheme("green").addAction(w)},podchaser:function(t){return t.add("Podchaser").setTheme("green").addAction(w)},spotifyMobile:function(t){return t.add("Spotify","spotify-mobile","spotify").setTheme("green").addAction(w)},acast:function(t){return t.add("Acast").setTheme("black").addAction(w)},stitcher:function(t){return t.add("Stitcher").setTheme("blue").addAction(w)},pocketCasts:function(t){return t.add("Pocket Casts").setTheme("red accent-2").addAction(w)},tuneIn:function(t){return t.add("TuneIn").setTheme("teal").addAction(w)},podbean:function(t){return t.add("Podbean").setTheme("green darken-1").addAction(w)},iheartRadio:function(t){return t.add("iHeart Radio").setTheme("red").addAction(w)},deezer:function(t){return t.add("Deezer").setTheme("black").addAction(w)}},_=new k;_.add("Podcast Addict").setTheme("orange").addAction(g.actions.subscribe),_.add("Google Podcasts").setTheme("yellow darken-2").addAction(g.actions.subscribe),A.spotifyMobile(_),A.acast(_),A.stitcher(_),A.pocketCasts(_),A.iheartRadio(_),A.tuneIn(_),A.podbean(_),A.deezer(_);var S=_,I=new k;I.add("Apple Podcasts","apple-podcasts-mobile","apple-podcasts").setTheme("purple").addAction(g.actions.subscribe),A.spotifyMobile(I),A.acast(I),A.stitcher(I),A.pocketCasts(I),A.tuneIn(I),A.podbean(I),A.deezer(I);var x=I,O={windows:["Windows","Windows Server 2008 R2 / 7","Windows Server 2008 / Vista","Windows XP"],osx:["OS X"],android:["Android"],ios:["iOS"],"windows-phone":["Windows Phone"],linux:["Linux","Ubuntu","Debian","Fedora","Red Hat","SuSE"]},T={android:S,ios:x,auto:x},C=O[h.a.os.family];y.hasProperty(T,C)?T.auto=T[C]:console.warn("PodcastRedirectWidget: Unrecognised platform family '".concat(h.a.os.family,"'"));var j=T,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"py-0",attrs:{"two-line":""}},[n("v-list-item-group",t._l(t.order,(function(e,a){return n("AppListItem",{key:e,attrs:{appData:t.allAppData[e],divider:a<t.appCount-1||!0===t.hasSibling,ctaText:t.ctaText,action:t.action},on:{click:function(e){return t.$emit("click",e)}}})})),1)],1)},V=[],L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item",{on:{click:t.selected}},[n("v-list-item-avatar",{attrs:{size:"55"}},[n("v-img",{attrs:{src:t.appData.icon}})],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.appData.name))])],1),n("v-list-item-action",[n("v-btn",{attrs:{rounded:"",outlined:"",color:t.appData.color}},[t._v(" "+t._s(t.ctaTextCustomised)+" ")])],1)],1),t.divider?n("v-divider"):t._e()],1)},D=[],R={props:{appData:{type:Object,default:function(){return{}}},ctaText:{type:String,default:"Subscribe"},divider:{type:Boolean,default:!0},action:String},methods:{selected:function(){this.$emit("click",this.appData.id)}},computed:{ctaTextCustomised:function(){return y.hasProperty(this.appData.actions[this.action],"ctaOverride")?this.appData.actions[this.action].ctaOverride:this.ctaText}}},N=R,$=n("2877"),E=n("6544"),z=n.n(E),B=n("8336"),W=n("ce7e"),F=n("adda"),M=n("da13"),U=n("1800"),H=n("8270"),G=n("5d23"),Z=Object($["a"])(N,L,D,!1,null,null,null),J=Z.exports;z()(Z,{VBtn:B["a"],VDivider:W["a"],VImg:F["a"],VListItem:M["a"],VListItemAction:U["a"],VListItemAvatar:H["a"],VListItemContent:G["a"],VListItemTitle:G["c"]});var X={components:{AppListItem:J},props:{allAppData:{type:Object,default:function(){return{}}},order:{type:Array,default:function(){return[]}},ctaText:{type:String,default:"Subscribe"},hasSibling:{type:Boolean,default:!1},action:String},computed:{appCount:function(){return this.order.length}}},Y=X,q=n("8860"),K=n("1baa"),Q=Object($["a"])(Y,P,V,!1,null,null,null),tt=Q.exports;z()(Q,{VList:q["a"],VListItemGroup:K["a"]});var et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-list-item",[n("v-list-item-action",[n("v-btn",{attrs:{rounded:"",fab:"",small:"",outlined:"",color:"grey"},on:{click:function(e){return t.$emit("close")}}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),n("v-list-item-content",{staticClass:"text-right"},[n("v-list-item-title",[t._v(t._s(t.appData.name))]),n("v-list-item-subtitle",[t._v(" Follow these steps to "+t._s(this.action))])],1),n("v-list-item-avatar",{attrs:{size:"55"}},[n("v-img",{attrs:{src:t.appData.icon}})],1)],1),n("v-divider"),n("v-list",{staticClass:"py-0"},t._l(t.instructions,(function(t,e){return n("InstructionListStep",{key:e,attrs:{step:t,index:e+1}})})),1)],1)},nt=[],at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.hasImage?n("v-img",{attrs:{src:this.step.image.url,height:"150"}}):t._e(),n("v-list-item",{on:{click:t.selected}},[n("v-list-item-avatar",{attrs:{size:"30"}},[n("v-chip",[t._v(" "+t._s(t.index)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(t.step.message))])],1),t.hasLink?n("v-list-item-action",[n("v-btn",{attrs:{rounded:"",outlined:""}},[t._v(" "+t._s(t.step.link.title)+" ")])],1):t._e()],1),n("v-divider")],1)},it=[],ot={props:["step","index"],computed:{hasImage:function(){return y.hasProperty(this.step,"image")},hasLink:function(){return y.hasProperty(this.step,"link")}},methods:{selected:function(){this.hasLink&&window.open(this.step.link.title,"_blank")}}},rt=ot,st=n("cc20"),ct=Object($["a"])(rt,at,it,!1,null,null,null),lt=ct.exports;z()(ct,{VBtn:B["a"],VChip:st["a"],VDivider:W["a"],VImg:F["a"],VListItem:M["a"],VListItemAction:U["a"],VListItemAvatar:H["a"],VListItemContent:G["a"],VListItemTitle:G["c"]});var dt={components:{InstructionListStep:lt},props:["appData","action"],computed:{instructions:function(){return this.appData.actions[this.action].instructions}}},pt=dt,ut=n("132d"),ht=Object($["a"])(pt,et,nt,!1,null,null,null),mt=ht.exports;z()(ht,{VBtn:B["a"],VDivider:W["a"],VIcon:ut["a"],VImg:F["a"],VList:q["a"],VListItem:M["a"],VListItemAction:U["a"],VListItemAvatar:H["a"],VListItemContent:G["a"],VListItemSubtitle:G["b"],VListItemTitle:G["c"]});var ft=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" select platform ")])},vt=[],bt={},gt=Object($["a"])(bt,ft,vt,!1,null,null,null),yt=gt.exports,kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",t._l(t.order,(function(e){return n("v-tooltip",{key:e,attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on;return[n("v-col",t._g({staticClass:"hoverable pointer",on:{click:function(n){return t.$emit("click",e)}}},i),[n("a",[n("v-img",{staticClass:"mx-auto",attrs:{src:t.allAppData[e].icon,"max-width":"40"}})],1)])]}}],null,!0)},[n("span",[t._v(" "+t._s(t.actionNiceName+" on "+t.allAppData[e].name)+" ")])])})),1)],1)},wt=[],At={props:{allAppData:{type:Object,default:function(){return{}}},order:{type:Array,default:function(){return[]}},actionNiceName:String}},_t=At,St=(n("c25c"),n("62ad")),It=n("a523"),xt=n("0fd9"),Ot=n("3a2f"),Tt=Object($["a"])(_t,kt,wt,!1,null,null,null),Ct=Tt.exports;z()(Tt,{VCol:St["a"],VContainer:It["a"],VImg:F["a"],VRow:xt["a"],VTooltip:Ot["a"]});var jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.validLinks,(function(e,a){return n("v-btn",{key:a,attrs:{color:t.color,plain:"",fab:"",small:"",href:e,target:"_blank"}},[n("v-icon",[t._v(t._s("mdi-"+a))])],1)})),1)},Pt=[],Vt=(n("4de4"),n("13d5"),{props:{links:{type:Object,default:function(){return{}}},color:{type:String,default:"red"}},methods:{isValid:function(t){return t&&""!=t.trim()}},computed:{validLinks:function(){var t=this;return Object.keys(this.links).filter((function(e){return t.isValid(t.links[e])})).reduce((function(e,n){return e[n]=t.links[n],e}),{})}}}),Lt=Vt,Dt=Object($["a"])(Lt,jt,Pt,!1,null,null,null),Rt=Dt.exports;z()(Dt,{VBtn:B["a"],VIcon:ut["a"]});var Nt={components:{AppList:tt,InstructionList:mt,PlatformSelect:yt,AppIconList:Ct,SocialLinks:Rt},props:["title","subtitle","theme","urls","primaryApps","action","socialLinks","inlineActionSwitch","embedded"],data:function(){return{selectedAppId:"",selectedPlatform:"auto"}},computed:{appOrder:function(){var t=this,e=Object.keys(this.allAppData);if(-1===this.theme.numPrimaryApps)return{primary:e,secondary:[]};if(0===this.theme.numPrimaryApps)return{primary:[],secondary:e};var n=[];this.primaryApps.forEach((function(e){y.hasProperty(t.allAppData,e)&&n.push(e)}));var a=[];return n.length>this.theme.numPrimaryApps&&(a=n.splice(this.theme.numPrimaryApps,n.length-this.theme.numPrimaryApps)),e.forEach((function(e){!1===t.primaryApps.includes(e)&&a.push(e)})),n.length<this.theme.numPrimaryApps&&(n=[].concat(Object(l["a"])(n),Object(l["a"])(a.splice(0,Math.min(a.length,this.theme.numPrimaryApps-n.length))))),{primary:n,secondary:a}},actionNiceName:function(){return y.actionNiceName(this.theme,this.action)},allAppData:function(){return j[this.selectedPlatform].get(this.action,this.urls)},haveSubtitle:function(){return this.theme.subtitle.trim().length>0},haveSelectedApp:function(){return""!==this.selectedAppId&&y.hasProperty(this.allAppData,this.selectedAppId)},selectedApp:function(){return this.allAppData[this.selectedAppId]}},methods:{selectApp:function(t){var e=this.allAppData[t];e.actions[this.action].instructions.length>0?this.selectedAppId=t:window.open(e.url,"_blank"),this.$emit("app-choice",t)},deselectApp:function(){this.selectedAppId=""}},mounted:function(){}},$t=Nt,Et=(n("3cae"),n("b0af")),zt=n("99d9"),Bt=n("2fa4"),Wt=Object($["a"])($t,d,p,!1,null,null,null),Ft=Wt.exports;z()(Wt,{VCard:Et["a"],VCardSubtitle:zt["a"],VCardTitle:zt["b"],VImg:F["a"],VSpacer:Bt["a"]});var Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"callout-wrapper d-xs-none d-sm-none d-md-block"},[n("div",{staticClass:"text",style:t.colorStyle},[n("span",[t._v(" "+t._s(t.message)+" ")])]),n("SvgArrow",{attrs:{flip:!0,color:t.color,size:"200px"}})],1)},Ut=[],Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:[{flip:t.flip}],style:t.sizeStyle,attrs:{"xmlns:dc":"http://purl.org/dc/elements/1.1/","xmlns:cc":"http://creativecommons.org/ns#","xmlns:rdf":"http://www.w3.org/1999/02/22-rdf-syntax-ns#","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:sodipodi":"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd","xmlns:inkscape":"http://www.inkscape.org/namespaces/inkscape",viewBox:"0 0 210 297",version:"1.1",id:"svg3631","inkscape:version":"0.92.4 (5da689c313, 2019-01-14)","sodipodi:docname":"arrow18.svg"}},[n("defs",{attrs:{id:"defs3625"}},[n("clipPath",{attrs:{clipPathUnits:"userSpaceOnUse",id:"clipPath18"}},[n("path",{attrs:{d:"M 0,600.949 H 847.559 V 0 H 0 Z",id:"path16","inkscape:connector-curvature":"0"}})]),n("linearGradient",{attrs:{id:"a",x1:"104.73",x2:"494.51999",y1:"335.72",y2:"895.84003",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#e00",offset:"0",id:"stop2"}}),n("stop",{attrs:{"stop-color":"#9a0000",offset:"1",id:"stop4"}})],1)],1),n("sodipodi:namedview",{attrs:{id:"base",pagecolor:"#ffffff",bordercolor:"#666666",borderopacity:"1.0","inkscape:pageopacity":"0.0","inkscape:pageshadow":"2","inkscape:zoom":"0.4576767","inkscape:cx":"486.20124","inkscape:cy":"463.86391","inkscape:document-units":"mm","inkscape:current-layer":"g938",showgrid:"false",showguides:"true","inkscape:guide-bbox":"true","inkscape:window-width":"1920","inkscape:window-height":"1001","inkscape:window-x":"-9","inkscape:window-y":"-9","inkscape:window-maximized":"1"}},[n("sodipodi:guide",{attrs:{position:"72.922013,252.88982",orientation:"0,1",id:"guide4178","inkscape:locked":"false"}}),n("sodipodi:guide",{attrs:{position:"99.099147,43.94019",orientation:"0,1",id:"guide4180","inkscape:locked":"false"}})],1),n("metadata",{attrs:{id:"metadata3628"}},[n("rdf:RDF",[n("cc:Work",{attrs:{"rdf:about":""}},[n("dc:format",[t._v("image/svg+xml")]),n("dc:type",{attrs:{"rdf:resource":"http://purl.org/dc/dcmitype/StillImage"}}),n("dc:title")],1)],1)],1),n("g",{attrs:{"inkscape:label":"Layer 1","inkscape:groupmode":"layer",id:"layer1"}},[n("g",{attrs:{id:"g11993",transform:"translate(0.01320793,-14.655723)"}},[n("g",{attrs:{id:"g938",transform:"translate(7.1550781,23.640221)"}},[n("path",{staticClass:"fil1",staticStyle:{fill:"none",stroke:"none","stroke-width":"0.00749315"},attrs:{id:"path8-5",d:"m 163.22441,154.00651 c 7.95772,-28.46647 -7.4332,0.64441 8.07012,3.03473 13.98971,2.16552 2.77996,-29.46307 5.56741,-10.15322 1.4237,9.87596 14.48426,13.06805 21.27305,6.60147","inkscape:connector-curvature":"0"}}),n("g",{style:t.colorStyle,attrs:{id:"g1083",transform:"translate(37.303701,62.795897)"}},[n("path",{staticClass:"fil0",staticStyle:{stroke:"none","stroke-width":"0.03296788"},attrs:{id:"path24",d:"M 5.4005246,-17.271749 C -18.665982,42.795629 -42.864414,167.18334 60.456859,135.69903 91.974084,126.07242 85.446464,122.21525 115.44719,117.9953 101.56778,124.42407 73.709949,139.42443 63.226157,143.47945 -52.886657,188.57955 -37.523593,38.147209 5.4005246,-17.271749 Z","inkscape:connector-curvature":"0"}}),n("path",{staticClass:"fil0",staticStyle:{stroke:"none","stroke-width":"0.03296788"},attrs:{id:"path28",d:"m 94.809384,90.467169 c 30.989746,7.285869 21.659836,6.263921 46.583516,4.681421 18.56091,-1.153874 -11.14312,34.48437 -12.42884,36.66027 -17.76966,29.50626 -12.59377,20.80274 -20.40711,38.9021 -6.09907,-13.05532 9.23099,-45.52864 21.56098,-63.628 -13.38494,-0.62609 -19.35216,-6.4287 -35.308546,-16.615791 z m 46.352736,16.187241 c 0.42871,0.0308 0.85718,0 1.2528,-0.13185 z","inkscape:connector-curvature":"0"}})])])])])],1)},Gt=[],Zt={props:{color:{type:String,default:"red"},size:{type:String,default:"300px"},flip:{type:Boolean,default:!1}},computed:{colorStyle:function(){return"fill: ".concat(this.color,";")},sizeStyle:function(){return"width: ".concat(this.size,"; height: ").concat(this.size)}}},Jt=Zt,Xt=(n("d45f"),Object($["a"])(Jt,Ht,Gt,!1,null,null,null)),Yt=Xt.exports,qt={components:{SvgArrow:Yt},props:{color:{type:String,default:"white"},message:{type:String,default:""}},computed:{colorStyle:function(){return"color: ".concat(this.color)}}},Kt=qt,Qt=(n("9235"),Object($["a"])(Kt,Mt,Ut,!1,null,null,null)),te=Qt.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["mode-switch-wrapper",{compact:t.$vuetify.breakpoint.smAndDown||t.theme.switchAlwaysCompactStyle,embedded:!0===t.embedded}]},[n("div",{staticClass:"title question mb-3 d-none d-sm-block",style:t.fontStyle},[t._v(" "+t._s(this.titleText[this.action])+" ")]),n("v-btn",{staticClass:"button",attrs:{rounded:"",dark:"",large:"",color:t.theme.switchButtonColor},on:{click:function(e){return t.$emit("click")}}},[t._v(" "+t._s(this.buttonText[this.action])+" ")])],1)},ne=[],ae={props:["action","theme","embedded"],computed:{fontStyle:function(){return"color: ".concat(this.theme.switchTitleColor,";")},titleText:function(){return{rate:this.theme.switchTitleTextRate,subscribe:this.theme.switchTitleTextSubscribe}},buttonText:function(){return{rate:this.theme.switchButtonTextRate,subscribe:this.theme.switchButtonTextSubscribe}}}},ie=ae,oe=(n("ed6d"),Object($["a"])(ie,ee,ne,!1,null,null,null)),re=oe.exports;z()(oe,{VBtn:B["a"]});var se={components:{PodcastRedirectWidget:Ft,CtaCallout:te,ActionSwitch:re},props:{action:{type:String,default:"subscribe"},embedded:{type:Boolean,default:!1},theme:{type:Object,default:function(){return{}}},urls:{type:Object,default:function(){return{website:"https://wapin7.com",podchaser:"https://podchaser.com/wapin7","podcast-addict":"https://podcastaddict.com/wapin7",castbox:"https://castbox.com/wapin7","apple-podcasts-mobile":"https://fakelink.com/wapin7","spotify-mobile":"https://fakelink.com/wapin7","spotify-desktop":"https://fakelink.com/wapin7",acast:"https://fakelink.com/wapin7",stitcher:"https://fakelink.com/wapin7","pocket-casts":"https://fakelink.com/wapin7",tunein:"https://fakelink.com/wapin7",podbean:"https://fakelink.com/wapin7",deezer:"https://fakelink.com/wapin7","google-podcasts":"https://fakelink.com/wapin7","iheart-radio":"https://fakelink.com/wapin7"}}},primaryApps:{type:Array,default:function(){return Object(l["a"])(g.primaryAppsDefault)}},socialLinks:{type:Object,default:function(){return{web:"https://wapin7.com",instagram:"https://instagram.com/wapin7podcast"}}}},data:function(){return{actionInt:""}},methods:{toggleAction:function(){this.actionInt===g.actions.subscribe?this.actionInt=g.actions.rate:this.actionInt=g.actions.subscribe}},computed:{themeInt:function(){return Object(c["a"])(Object(c["a"])({},g.themeDefault),this.theme)},backgroundStyle:function(){return""===this.themeInt.background?"":this.backgroundIsImage?"background-image: url('".concat(this.themeInt.background,"')"):"background-color: ".concat(this.themeInt.background)},tintStyle:function(){return""===this.tintColor?"":"background-color: ".concat(this.themeInt.backgroundTintColor,"; opacity: ").concat(this.themeInt.backgroundTintOpacity,";")},backgroundIsImage:function(){return this.themeInt.background.includes("/")},actionNiceName:function(){return y.actionNiceName(this.themeInt,this.action)}},watch:{action:function(t){this.actionInt=t},actionInt:function(t){this.$emit("action-changed",t)}},mounted:function(){this.actionInt=this.action}},ce=se,le=(n("3f2d"),n("7496")),de=Object($["a"])(ce,r,s,!1,null,null,null),pe=de.exports;z()(de,{VApp:le["a"],VCol:St["a"],VContainer:It["a"],VRow:xt["a"]});var ue={name:"App",components:{PodcastRedirectWrapper:pe},data:function(){return{}}},he=ue,me=Object($["a"])(he,i,o,!1,null,null,null),fe=me.exports,ve=n("f309");a["a"].use(ve["a"]);var be=new ve["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:be,render:function(t){return t(fe)}}).$mount("#app")},"585e":function(t,e,n){},9235:function(t,e,n){"use strict";n("511b")},ad3e:function(t,e,n){},b4ec:function(t,e,n){},c25c:function(t,e,n){"use strict";n("531e")},d45f:function(t,e,n){"use strict";n("585e")},ed6d:function(t,e,n){"use strict";n("0a9b")}});
//# sourceMappingURL=app.js.map