(window.webpackJsonp=window.webpackJsonp||[]).push([[14,8,15,18,30,35,37],{344:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));n(131);var s=n(0);function i(){const e=Object(s.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function r(){const e=Object(s.h)(!1);return Object(s.e)(()=>{e.value=!0}),Object(s.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},345:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return b}));var s=n(347),i=n.n(s),r=(n(346),n(0)),o=n(1),a=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};const l=/^(\w+)\-/,c=r.b.extend({props:{icon:{type:String,default:""},link:{type:String,default:""}}});let u=class extends c{getClass(e){return l.test(e)?e.replace(l,(...e)=>"reco"===e[1]?"iconfont "+e[0]:`${e[1]} ${e[0]}`):e}go(e){""!==e&&window.open(e)}render(){return(0,arguments[0])("i",i()([{},{class:this.getClass(this.icon),on:{click:this.go.bind(this,this.link)}}]),[this.$slots.default])}};u=a([o.b],u);var p=u,f=function(e,t,n,s){var i,r=arguments.length,o=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(o=(r<3?i(o):r>3?i(t,n,o):i(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};const d=r.b.extend({props:{delay:{type:String,default:"0"},duration:{type:String,default:".25"},transform:{type:Array,default:()=>["translateY(-20px)","translateY(0)"]}}});let h=class extends d{setStyle(e){e.style.transition=`transform ${this.duration}s ease-in-out ${this.delay}s, opacity ${this.duration}s ease-in-out ${this.delay}s`,e.style.transform=this.transform[0],e.style.opacity=0}unsetStyle(e){e.style.transform=this.transform[1],e.style.opacity=1}render(){return(0,arguments[0])("transition",{attrs:{name:"module"},on:{enter:this.setStyle,appear:this.setStyle,"before-leave":this.setStyle,"after-appear":this.unsetStyle,"after-enter":this.unsetStyle}},[this.$slots.default])}};h=f([o.b],h);var b=h},346:function(e,t,n){"use strict";var s=n(34),i=n(3),r=n(348);s({global:!0},{Reflect:{}}),r(i.Reflect,"Reflect",!0)},347:function(e,t,n){"use strict";function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t,n=1;n<arguments.length;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)}var i=["attrs","props","domProps"],r=["class","style","directives"],o=["on","nativeOn"],a=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==i.indexOf(n))e[n]=s({},e[n],t[n]);else if(-1!==r.indexOf(n)){var l=e[n]instanceof Array?e[n]:[e[n]],c=t[n]instanceof Array?t[n]:[t[n]];e[n]=[].concat(l,c)}else if(-1!==o.indexOf(n))for(var u in t[n])if(e[n][u]){var p=e[n][u]instanceof Array?e[n][u]:[e[n][u]],f=t[n][u]instanceof Array?t[n][u]:[t[n][u]];e[n][u]=[].concat(p,f)}else e[n][u]=t[n][u];else if("hook"===n)for(var d in t[n])e[n][d]=e[n][d]?a(e[n][d],t[n][d]):t[n][d];else e[n]=t[n];else e[n]=t[n];return e}),{})}},348:function(e,t,n){"use strict";var s=n(26).f,i=n(13),r=n(35)("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,r)&&s(e,r,{configurable:!0,value:t})}},350:function(e,t,n){},356:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(17),r=n(345),o=n(344),a=Object(s.c)({components:{RecoIcon:r.b},props:{item:{required:!0}},setup(e,t){const n=Object(o.a)(),{item:r}=Object(s.i)(e),a=Object(s.a)(()=>Object(i.d)(r.value.link)),l=Object(s.a)(()=>n.$site.locales?Object.keys(n.$site.locales).some(e=>e===a.value):"/"===a.value);return{link:a,exact:l,isExternal:i.f,isMailto:i.g,isTel:i.h}}}),l=n(2),c=Object(l.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.isExternal(e.link)?n("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[n("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[n("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.default=c.exports},357:function(e,t,n){"use strict";n.r(t);var s=n(0),i=Object(s.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),r=(n(358),n(2)),o=Object(r.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=o.exports},358:function(e,t,n){"use strict";n(350)},359:function(e,t,n){},360:function(e,t,n){},367:function(e,t,n){},369:function(e,t,n){},373:function(e,t,n){"use strict";n(359)},374:function(e,t,n){"use strict";n(360)},379:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(401),r=n(383),o=n(17),a=n(344);var l=Object(s.c)({name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:r.default},props:["items","depth","sidebarDepth"],setup(e,t){const n=Object(a.a)(),{items:i}=Object(s.i)(e),r=Object(s.h)(0),l=()=>{const e=function(e,t){for(let n=0;n<t.length;n++){const s=t[n];if("group"===s.type&&s.children.some(t=>"page"===t.type&&Object(o.e)(e,t.path)))return n}return-1}(n.$route,i.value);e>-1&&(r.value=e)},c=()=>{const e=[].slice.call(document.querySelectorAll(".header-anchor")).filter(e=>-1!=decodeURIComponent(n.$route.fullPath).indexOf(decodeURIComponent(e.hash)));null==e||e.length<1||null==e[0].offsetTop||setTimeout((function(){window.scrollTo(0,e[0].offsetTop+160)}),100)},u=()=>{const e=document.getElementsByClassName("sidebar")[0];let t=document.getElementsByClassName("active sidebar-link")[1];if(null!=t&&null!=t&&null!=t.offsetTop||(t=document.getElementsByClassName("active sidebar-link")[0]),null==t||null==t||null==t.offsetTop)return;const n=e.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,s=t.offsetTop,i=t.offsetTop+t.offsetHeight,r=e.scrollTop;i<=n+r||(e.scrollTop=i+5-n);s>=r||(e.scrollTop=s-5)},p=e=>p(n.$route,e.regularPath);return l(),Object(s.e)(()=>{(()=>{const e=decodeURIComponent(n.$route.fullPath);if(!e||""==e)return;const t=[].slice.call(document.querySelectorAll(".sidebar-link"));for(let n=0;n<t.length;n++)if(-1!=decodeURIComponent(t[n].getAttribute("href")).indexOf(e))return void c()})(),u()}),Object(s.f)(()=>u()),{openGroupIndex:r,refreshIndex:l,toggleGroup:e=>{n.openGroupIndex=e===n.openGroupIndex?-1:e},isActive:p}},watch:{$route(){this.refreshIndex()}}}),c=n(2),u=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.items.length?n("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(t,s){return n("li",{key:s},["group"===t.type?n("SidebarGroup",{attrs:{item:t,open:s===e.openGroupIndex,collapsable:t.collapsable||t.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(s)}}}):n("SidebarLink",{attrs:{sidebarDepth:e.sidebarDepth,item:t}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=u.exports},381:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(345),r=n(356),o=n(357),a=Object(s.c)({components:{NavLink:r.default,DropdownTransition:o.default,RecoIcon:i.b},props:{item:{required:!0}},setup(e,t){const n=Object(s.h)(!1);return{open:n,toggle:()=>{n.value=!n.value}}}}),l=(n(373),n(2)),c=Object(l.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[n("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[n("span",{staticClass:"title"},[n("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),n("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(t,s){return n("li",{key:t.link||s,staticClass:"dropdown-item"},["links"===t.type?n("h4",[e._v(e._s(t.text))]):e._e(),e._v(" "),"links"===t.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(t.items,(function(e){return n("li",{key:e.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:e}})],1)})),0):n("NavLink",{attrs:{item:t}})],1)})),0)])],1)}),[],!1,null,null,null);t.default=c.exports},383:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(17);var r=Object(s.c)({functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:n,$route:s,$themeConfig:r,$themeLocaleConfig:o},props:{item:a,sidebarDepth:l}}){const c=Object(i.e)(s,a.path),u="auto"===a.type?c||a.children.some(e=>Object(i.e)(s,a.basePath+"#"+e.slug)):c;return function(e,t,n,s){return e("router-link",{props:{to:t,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}},n)}(e,a.path,a.title||a.path,u)}}),o=(n(374),n(2)),a=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.default=a.exports},386:function(e,t,n){"use strict";n(367)},389:function(e,t,n){"use strict";n(369)},390:function(e,t,n){},400:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(345),r=n(381),o=n(17),a=n(356),l=n(344),c=Object(s.c)({components:{NavLink:a.default,DropdownLink:r.default,RecoIcon:i.b},setup(e,t){const n=Object(l.a)(),i=Object(s.a)(()=>n.$themeLocaleConfig.nav||n.$themeConfig.nav||[]),r=Object(s.a)(()=>{const e=n.$site.locales||{};if(e&&Object.keys(e).length>1){const t=n.$page.path,s=n.$router.options.routes,r=n.$themeConfig.locales||{},o={text:n.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(i=>{const o=e[i],a=r[i]&&r[i].label||o.lang;let l;return o.lang===n.$lang?l=t:(l=t.replace(n.$localeConfig.path,i),s.some(e=>e.path===l)||(l=i)),{text:a,link:l}})};return[...i.value,o]}const t=n.$themeConfig.blogConfig||{},s=i.value.some(e=>!t.category||e.text===(t.category.text||"分类")),r=i.value.some(e=>!t.tag||e.text===(t.tag.text||"标签"));if(!s&&Object.hasOwnProperty.call(t,"category")){const e=t.category,s=n.$categories;i.value.splice(parseInt(e.location||2)-1,0,{items:s.list.map(e=>(e.link=e.path,e.text=e.name,e)),text:e.text||n.$recoLocales.category,type:"links",icon:"reco-category"})}if(!r&&Object.hasOwnProperty.call(t,"tag")){const e=t.tag;i.value.splice(parseInt(e.location||3)-1,0,{link:"/tag/",text:e.text||n.$recoLocales.tag,type:"links",icon:"reco-tag"})}return i.value}),a=Object(s.a)(()=>(n.nav||[]).map(e=>Object.assign(Object(o.j)(e),{items:(e.items||[]).map(o.j)}))),c=Object(s.a)(()=>{const{repo:e}=n.$themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:""}),u=Object(s.a)(()=>{if(!n.repoLink)return"";if(n.$themeConfig.repoLabel)return n.$themeConfig.repoLabel;const e=n.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let n=0;n<t.length;n++){const s=t[n];if(new RegExp(s,"i").test(e))return s}return"Source"});return{userNav:i,nav:r,userLinks:a,repoLink:c,repoLabel:u}}}),u=(n(386),n(2)),p=Object(u.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.userLinks.length||e.repoLink?n("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return n("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?n("DropdownLink",{attrs:{item:e}}):n("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?n("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[n("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),n("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null);t.default=p.exports},401:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(17),r=n(357),o=n(344),a=Object(s.c)({name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:r.default},setup:(e,t)=>(Object(o.a)().$options.components.SidebarLinks=n(379).default,{isActive:i.e})}),l=(n(389),n(2)),c=Object(l.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):n("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[n("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?n("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),n("DropdownTransition",[e.open||!e.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,sidebarDepth:e.item.sidebarDepth,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=c.exports},408:function(e,t,n){"use strict";n(390)},431:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(379),r=n(400),o=Object(s.c)({name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.default},props:["items"]}),a=(n(408),n(2)),l=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),t("NavLinks"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.default=l.exports}}]);