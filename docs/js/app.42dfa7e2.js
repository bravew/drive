(function(t){function e(e){for(var n,l,s=e[0],r=e[1],c=e[2],d=0,f=[];d<s.length;d++)l=s[d],i[l]&&f.push(i[l][0]),i[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,l=1;l<o.length;l++){var r=o[l];0!==i[r]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},i={app:0},a=[];function l(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4735e6c5"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=i[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise(function(e,n){o=i[t]=[e,n]});e.push(o[2]=n);var a,r=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=l(t),a=function(e){c.onerror=c.onload=null,clearTimeout(d);var o=i[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,l=new Error("Loading chunk "+t+" failed.\n("+n+": "+a+")");l.type=n,l.request=a,o[1](l)}i[t]=void 0}};var d=setTimeout(function(){a({type:"timeout",target:c})},12e4);c.onerror=c.onload=a,r.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0252":function(t,e,o){},"0b8a":function(t,e,o){"use strict";var n=o("db31"),i=o.n(n);i.a},"0cc6":function(t,e,o){},"0da5":function(t,e,o){"use strict";var n=o("e7f3"),i=o.n(n);i.a},"16f4":function(t,e,o){},1726:function(t,e,o){"use strict";var n=o("469a"),i=o.n(n);i.a},"285b":function(t,e,o){"use strict";var n=o("f44f"),i=o.n(n);i.a},"469a":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var n={};o.r(n);var i={};o.r(i),o.d(i,"getContents",function(){return ut});o("cadf"),o("551c"),o("097d");var a=o("2b0e"),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("router-view")],1)},s=[],r=(o("7c55"),o("2877")),c={},d=Object(r["a"])(c,l,s,!1,null,null,null);d.options.__file="App.vue";var u=d.exports,f=o("ce5b"),v=o.n(f),m=o("8c4f"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"media-home"},[o("media-nav-bar"),o("media-content"),o("media-tool-model"),o("media-settings"),o("media-tool-model"),o("media-rename-model"),o("media-confirm-delete-model"),o("media-create-folder-model"),o("media-file-menu"),o("media-folder-menu"),o("media-infrobar"),o("media-alert"),o("media-online-state")],1)},p=[],_={name:"media-home",mounted:function(){this.$store.dispatch("getContents",20)}},b=_,g=Object(r["a"])(b,h,p,!1,null,null,null);g.options.__file="Home.vue";var w=g.exports;a["default"].use(m["a"]);var k,x=new m["a"]({base:"",routes:[{path:"/",name:"home",component:w},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),S=o("2f62"),O={contents:[],showConfirmDeleteModal:!1,showCreateFolderModal:!1,showPreviewModal:!1,showShareModal:!1,showRenameModal:!1,showSettings:!1,showFileMenu:!1,showFileMenuX:0,showFileMenuY:0,showFolderMenu:!1,showFolderMenuX:0,showFolderMenuY:0,showToolModal:!1,showInfoBar:!1,showsnackbar:!1,showsnackbardata:"",showsnackbarcolor:"default",previewItem:null,loadingValue:0,isLoading:!1,loadMoreProgress:!1,search:""},M=o("bc3a"),E=o.n(M),C="SET_IS_LOADING",y="SELECT_DIRECTORY",$="SELECT_BROWSER_ITEM",D="SELECT_BROWSER_ITEMS",j="UNSELECT_BROWSER_ITEM",I="UNSELECT_ALL_BROWSER_ITEMS",F="INCREASE_GRID_SIZE",T="DECREASE_GRID_SIZE",L="LOAD_CONTENTS_SUCCESS",A="LOAD_FULL_CONTENTS_SUCCESS",R="CREATE_DIRECTORY_SUCCESS",N="UPLOAD_SUCCESS",H="SHOW_CREATE_FOLDER_MODAL",U="HIDE_CREATE_FOLDER_MODAL",P="SHOW_CONFIRM_DELETE_MODAL",W="HIDE_CONFIRM_DELETE_MODAL",B="SHOW_FILE_MENU",Y="HIDE_FILE_MENU",G="SHOW_FOLDER_MENU",q="HIDE_FOLDER_MENU",z="SHOW_TOOL_MODAL",X="HIDE_TOOL_MODAL",V="SHOW_INFOBAR",J="HIDE_INFOBAR",K="SHOW_SNACKBAR",Q="HIDE_SNACKBAR",Z="SHOW_SETTINGS",tt="HIDE_SETTINGS",et="DELETE_SUCCESS",ot="CHANGE_LIST_VIEW",nt="SHOW_PREVIEW_MODAL",it="HIDE_PREVIEW_MODAL",at="SHOW_RENAME_MODAL",lt="HIDE_RENAME_MODAL",st="RENAME_SUCCESS",rt="SHOW_SHARE_MODAL",ct="HIDE_SHARE_MODAL",dt="SET_SEARCH_QUERY",ut=function(t,e){t.commit(C,!0),E.a.get("getContents").then(function(e){t.commit(L,e.data.contents),t.commit(C,!1)}).catch(function(o){e&&console.log(o);var n={data:"500 (Internal Server Error)",color:"error"};t.commit(K,n)})},ft=o("ade3"),vt=(o("20d6"),o("2909")),mt=(o("f751"),o("7514"),["xs","sm","md","lg","xl"]),ht=(k={},Object(ft["a"])(k,y,function(t,e){t.selectedDirectory=e}),Object(ft["a"])(k,L,function(t,e){t.contents=e}),Object(ft["a"])(k,N,function(t,e){var o=e,n=!t.files.some(function(t){return t.path===o.path});if(n){var i=t.directories.find(function(t){return t.path===o.directory}),a=t.directories.indexOf(i);t.files.push(o),t.directories.splice(a,1,Object.assign({},i,{files:Object(vt["a"])(i.files).concat([o.path])}))}}),Object(ft["a"])(k,R,function(t,e){var o=e,n=!t.directories.some(function(t){return t.path===o.path});if(n){var i=t.directories.find(function(t){return t.path===o.directory}),a=t.directories.indexOf(i);t.directories.push(o),t.directories.splice(a,1,Object.assign({},i,{directories:Object(vt["a"])(i.directories).concat([o.path])}))}}),Object(ft["a"])(k,st,function(t,e){var o=e.item,n=e.oldPath;if("file"===o.type){var i=t.files.findIndex(function(t){return t.path===n});t.files.splice(i,1,o)}else{var a=t.directories.findIndex(function(t){return t.path===n});t.directories.splice(a,1,o)}}),Object(ft["a"])(k,et,function(t,e){var o=e;"file"===o.type&&t.files.splice(t.files.findIndex(function(t){return t.path===o.path}),1),"dir"===o.type&&t.directories.splice(t.directories.findIndex(function(t){return t.path===o.path}),1)}),Object(ft["a"])(k,$,function(t,e){t.selectedItems.push(e)}),Object(ft["a"])(k,D,function(t,e){t.selectedItems=e}),Object(ft["a"])(k,j,function(t,e){var o=e;t.selectedItems.splice(t.selectedItems.findIndex(function(t){return t.path===o.path}),1)}),Object(ft["a"])(k,I,function(t,e){t.selectedItems=[]}),Object(ft["a"])(k,H,function(t){t.showCreateFolderModal=!0}),Object(ft["a"])(k,U,function(t){t.showCreateFolderModal=!1}),Object(ft["a"])(k,z,function(t){t.showToolModal=!0}),Object(ft["a"])(k,X,function(t){t.showToolModal=!1}),Object(ft["a"])(k,G,function(t,e){var o=window.event;o.preventDefault(),console.log(e),t.showFolderMenuX=o.clientX,t.showFolderMenuY=o.clientY}),Object(ft["a"])(k,q,function(t,e){console.log(e),t.showFolderMenu=!1}),Object(ft["a"])(k,B,function(t,e){var o=window.event;o.preventDefault(),console.log(e),t.showFileMenuX=o.clientX,t.showFileMenuY=o.clientY}),Object(ft["a"])(k,Y,function(t,e){console.log(e),t.showFileMenu=!1}),Object(ft["a"])(k,V,function(t){t.showInfoBar=!0}),Object(ft["a"])(k,J,function(t){t.showInfoBar=!1}),Object(ft["a"])(k,ot,function(t,e){t.listView=e}),Object(ft["a"])(k,A,function(t,e){t.previewItem=e}),Object(ft["a"])(k,nt,function(t){t.showPreviewModal=!0}),Object(ft["a"])(k,it,function(t){t.showPreviewModal=!1}),Object(ft["a"])(k,C,function(t,e){t.isLoading=e}),Object(ft["a"])(k,at,function(t){t.showRenameModal=!0}),Object(ft["a"])(k,lt,function(t){t.showRenameModal=!1}),Object(ft["a"])(k,Z,function(t){t.showSettings=!0}),Object(ft["a"])(k,tt,function(t){t.showSettings=!1}),Object(ft["a"])(k,K,function(t,e){t.showsnackbardata=e.data,t.showsnackbarcolor=e.color,t.showsnackbar=!0}),Object(ft["a"])(k,Q,function(t){t.showsnackbardata="",t.showsnackbarcolor="default",t.showsnackbar=!1}),Object(ft["a"])(k,rt,function(t){t.showShareModal=!0}),Object(ft["a"])(k,ct,function(t){t.showShareModal=!1}),Object(ft["a"])(k,F,function(t){var e=mt.indexOf(t.gridSize);e>=0&&e<mt.length-1&&(t.gridSize=mt[++e])}),Object(ft["a"])(k,T,function(t){var e=mt.indexOf(t.gridSize);e>0&&e<mt.length&&(t.gridSize=mt[--e])}),Object(ft["a"])(k,dt,function(t,e){t.search=e}),Object(ft["a"])(k,P,function(t){t.showConfirmDeleteModal=!0}),Object(ft["a"])(k,W,function(t){t.showConfirmDeleteModal=!1}),k);a["default"].use(S["a"]);var pt=new S["a"].Store({state:O,getters:n,actions:i,mutations:ht,strict:!1}),_t=o("9483");Object(_t["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var bt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-snackbar",{attrs:{bottom:"bottom"===t.y,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode,color:this.$store.state.showsnackbarcolor},model:{value:t.snackbarState,callback:function(e){t.snackbarState=e},expression:"snackbarState"}},[t._v("\n    "+t._s(this.$store.state.showsnackbardata)+"\n    "),o("v-btn",{attrs:{color:"white",flat:""},on:{click:function(e){t.close()}}},[t._v("\n    Close\n")])],1)},gt=[],wt={name:"Alert",data:function(){return{y:"bottom",x:"left",mode:"",timeout:6e3}},props:{},computed:{snackbarState:{get:function(){return this.$store.state.showsnackbar},set:function(){setTimeout(function(){this.$store.commit(Q)}.bind(this),1e3)}}},methods:{close:function(){this.$store.commit(Q)}}},kt=wt,xt=Object(r["a"])(kt,bt,gt,!1,null,null,null);xt.options.__file="Alert.vue";var St=xt.exports,Ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"media-confirm-model"}},[o("v-dialog",{attrs:{persistent:"",width:"500px"},model:{value:this.$store.state.showConfirmDeleteModal,callback:function(e){t.$set(this.$store.state,"showConfirmDeleteModal",e)},expression:"this.$store.state.showConfirmDeleteModal"}},[o("v-card",[o("v-card-title",{staticClass:"grey lighten-4 title"},[t._v("\n                Confirm Delete\n                "),o("v-spacer"),o("v-icon",[t._v("delete")])],1),o("v-container",[o("div",{staticClass:"confirm-text"},[o("strong",[t._v(t._s(t.text))])])]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"error"},on:{click:function(e){t.hideConfirmDeleteModal()}}},[t._v("Cancel")]),o("v-btn",{attrs:{color:"success"}},[t._v("Confirm")])],1)],1)],1)],1)},Mt=[],Et={name:"media-confirm-model",data:function(){return{}},props:{text:{type:String,required:!1,default:"Are you sure want to delete ?"}},computed:{},methods:{hideConfirmDeleteModal:function(){this.$store.commit(W)}}},Ct=Et,yt=(o("285b"),Object(r["a"])(Ct,Ot,Mt,!1,null,null,null));yt.options.__file="ConfirmDeleteModel.vue";var $t=yt.exports,Dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-content",{attrs:{id:"media-content"}},[o("v-container",{attrs:{fluid:"","grid-list-md":""}},[o("div",{staticClass:"media-toolbar"},[this.$store.state.isLoading?o("div",{staticClass:"media-loader"}):t._e()]),o("v-breadcrumbs",{attrs:{items:t.items}},[o("v-icon",{attrs:{slot:"divider"},slot:"divider"},[t._v("chevron_right")])],1),o("div",{staticClass:"media-toolbar"}),this.$store.state.contents.quick?o("v-layout",{staticClass:"section",attrs:{row:"",wrap:""}},[o("span",{staticClass:"media-section-title"},[o("strong",[t._v("Recents & Quick Access")])])]):t._e(),o("v-layout",{attrs:{row:"",wrap:""}},t._l(t.quicks,function(t){return o("media-file",{key:t.id,attrs:{item:t}})})),this.$store.state.contents.folders?o("v-layout",{staticClass:"section",attrs:{row:"",wrap:""}},[o("span",{staticClass:"media-section-title"},[o("strong",[t._v("Folders")])])]):t._e(),o("v-layout",{attrs:{row:"",wrap:""}},t._l(t.folders,function(t){return o("media-folder",{key:t.id,attrs:{item:t}})})),this.$store.state.contents.files?o("v-layout",{staticClass:"section",attrs:{row:"",wrap:""}},[o("span",{staticClass:"media-section-title"},[o("strong",[t._v("Files")])])]):t._e(),o("v-layout",{attrs:{row:"",wrap:""}},t._l(t.getFiles,function(t){return o("media-file",{key:t.id,attrs:{item:t}})})),this.$store.state.loadMoreProgress?o("v-progress-circular",{attrs:{size:50,color:"primary",indeterminate:""}}):t._e()],1)],1)},jt=[],It={name:"media-content",data:function(){return{response:"",items:[{text:"Home",disabled:!1,href:"#/"},{text:"about",disabled:!1,href:"#/about"}]}},computed:{getFiles:function(){return this.$store.state.contents.files},folders:function(){return this.$store.state.contents.folders},quicks:function(){return this.$store.state.contents.quick}}},Ft=It,Tt=(o("1726"),Object(r["a"])(Ft,Dt,jt,!1,null,null,null));Tt.options.__file="Content.vue";var Lt=Tt.exports,At=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"media-create-folder"}},[o("v-dialog",{attrs:{persistent:"",width:"500px"},model:{value:this.$store.state.showCreateFolderModal,callback:function(e){t.$set(this.$store.state,"showCreateFolderModal",e)},expression:"this.$store.state.showCreateFolderModal"}},[o("v-card",[o("v-card-title",{staticClass:"grey lighten-4 title"},[t._v("\n                New Folder\n                "),o("v-spacer"),o("v-icon",[t._v("folder")])],1),o("v-container",[o("v-flex",[o("v-text-field",{attrs:{solo:"",autofocus:"",label:"Folder name"},on:{focus:function(t){t.target.select()}},model:{value:t.defaultData,callback:function(e){t.defaultData=e},expression:"defaultData"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"error"},on:{click:function(e){t.hideCreateFolderModal()}}},[t._v("Cancel")]),o("v-btn",{attrs:{color:"success"}},[t._v("Create")])],1)],1)],1)],1)},Rt=[],Nt={name:"media-create-folder",data:function(){return{defaultData:"Untitled Folder"}},props:{text:{type:String,default:""}},methods:{hideCreateFolderModal:function(){this.$store.commit(U)}}},Ht=Nt,Ut=(o("93a5"),Object(r["a"])(Ht,At,Rt,!1,null,null,null));Ut.options.__file="CreateNewFolderModel.vue";var Pt=Ut.exports,Wt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-navigation-drawer",{attrs:{right:"",dark:"",clipped:"",app:"",width:"330",fixed:"",stateless:!0},model:{value:t.menuState,callback:function(e){t.menuState=e},expression:"menuState"}},[o("v-list",{attrs:{dense:""}},[o("v-list-tile",{on:{click:function(e){e.stopPropagation(),t.hideInforbar()}}},[o("v-list-tile-action",[o("v-icon",[t._v("exit_to_app")])],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v("Click to close")])],1)],1)],1)],1)},Bt=[],Yt={name:"Details",data:function(){return{right:!0}},props:{},components:{},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)},menuState:{get:function(){return this.$store.state.showInfoBar},set:function(){}}},methods:{about:function(t){console.log(t)},settings:function(t){console.log(t)},hideInforbar:function(){this.$store.commit(J)},fire:function(t){this[t](t)}}},Gt=Yt,qt=Object(r["a"])(Gt,Wt,Bt,!1,null,null,null);qt.options.__file="InfoBar.vue";var zt=qt.exports,Xt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"file",attrs:{"item-data":t.item.id,id:"media-file"},on:{contextmenu:function(e){t.show(this,t.item.id)}}},[o("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.hover;return o("v-card",{staticClass:"mx-auto",class:"elevation-"+(n?12:2)+" "+(t.selectedState?"selected":"unselected"),attrs:{width:"150",height:"140"}},[o("v-img",{attrs:{"aspect-ratio":16/9,src:t.item.imgUrl,"lazy-src":t.item.imgLazyUrl}},[o("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[o("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1),o("v-card-title",[o("span",{staticClass:"file-text"},[t._v(t._s(t.item.name))])])],1)}}])})],1)},Vt=[],Jt={name:"media-file",data:function(){return{selectedState:!1}},props:["item"],methods:{show:function(t,e){var o=this;t=t||window.event,t.preventDefault(),this.$store.commit(q,e),this.$store.commit(Y,e),this.$store.commit(B,e),this.$nextTick(function(){o.$store.state.showFileMenu=!0})}}},Kt=Jt,Qt=(o("0b8a"),Object(r["a"])(Kt,Xt,Vt,!1,null,null,null));Qt.options.__file="File.vue";var Zt=Qt.exports,te=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-menu",{attrs:{"position-x":this.$store.state.showFileMenuX,"position-y":this.$store.state.showFileMenuY,absolute:"","offset-y":"",transition:"scale-transition",id:"media-file-menu"},model:{value:t.menuState,callback:function(e){t.menuState=e},expression:"menuState"}},[o("v-list",t._l(t.items,function(e,n){return o("v-list-tile",{key:n,on:{click:function(o){t.fire(e.link,t.itemId)}}},[e.icon?o("v-list-tile-action",[o("v-icon",[t._v(t._s(e.icon))])],1):t._e(),o("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)},ee=[],oe={name:"media-file-menu",data:function(){return{itemId:Math.floor(1e8*Math.random()+1),n:Math.floor(17*Math.random()+1),items:[{title:"Preview",icon:"remove_red_eye",link:"preview"},{title:"Edit",icon:"edit",link:"edit"},{title:"Delete",icon:"delete",link:"delete"},{title:"Share",icon:"share",link:"share"},{title:"Rename",icon:"spellcheck",link:"rename"},{title:"Download",icon:"cloud_download",link:"download"},{title:"Stars",icon:"stars",link:"stars"},{title:"View Details",icon:"priority_high",link:"viewDetails"},{title:"Get shareable link",icon:"link",link:"getShareableLike"}]}},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)},menuState:{get:function(){return this.$store.state.showFileMenu},set:function(){}}},methods:{delete:function(t){this.showConfirmDeleteModal(),console.log(t)},edit:function(t){console.log(t)},preview:function(t){console.log(t)},download:function(t){console.log(t)},getShareableLike:function(t){console.log(t)},viewDetails:function(t){this.$store.commit(V),console.log(t)},stars:function(t){console.log(t)},showConfirmDeleteModal:function(){this.$store.commit(P)},rename:function(){this.$store.commit(at)},share:function(){console.log("share")},fire:function(t,e){this.$store.commit(Y),this[t](e)}}},ne=oe,ie=Object(r["a"])(ne,te,ee,!1,null,null,null);ie.options.__file="FileMenu.vue";var ae=ie.exports,le=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-xs-center folder",attrs:{id:"media-folder"},on:{contextmenu:function(e){t.show(this,t.item.id)}}},[o("v-tooltip",{attrs:{top:""}},[o("v-chip",{staticClass:"chip-size",attrs:{slot:"activator",color:t.item.color,"text-color":"white",width:"100px"},slot:"activator"},[o("v-avatar",[o("v-icon",{staticClass:"chip-folder"},[t._v("folder")])],1),t._v("\n      "+t._s(t.item.name)+"\n    ")],1),o("span",[t._v(t._s(t.item.name))])],1)],1)},se=[],re={name:"media-folder",data:function(){return{}},props:["item"],methods:{show:function(t,e){var o=this;t=t||window.event,t.preventDefault(),this.$store.commit(Y,e),this.$store.commit(q,e),this.$store.commit(G,e),this.$nextTick(function(){o.$store.state.showFolderMenu=!0})}}},ce=re,de=(o("ea2f"),Object(r["a"])(ce,le,se,!1,null,null,null));de.options.__file="Folder.vue";var ue=de.exports,fe=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-menu",{attrs:{"position-x":this.$store.state.showFolderMenuX,"position-y":this.$store.state.showFolderMenuYX,absolute:"","offset-y":"",transition:"scale-transition",id:"media-folder-menu"},model:{value:t.menuState,callback:function(e){t.menuState=e},expression:"menuState"}},[o("v-list",t._l(t.items,function(e,n){return o("v-list-tile",{key:n,on:{click:function(o){t.fire(e.link,t.itemId)}}},[e.icon?o("v-list-tile-action",[o("v-icon",[t._v(t._s(e.icon))])],1):t._e(),o("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)},ve=[],me={name:"media-folder-menu",data:function(){return{itemId:Math.floor(1e8*Math.random()+1),items:[{title:"Delete",icon:"delete",link:"delete"},{title:"Share",icon:"share",link:"share"},{title:"Rename",icon:"spellcheck",link:"rename"},{title:"Download",icon:"cloud_download",link:"download"},{title:"Change Color",icon:"color_lens",link:"changeColor"},{title:"Stars",icon:"stars",link:"stars"},{title:"View Details",icon:"priority_high",link:"viewDetails"},{title:"Get shareable link",icon:"link",link:"getShareableLink"}]}},computed:{rand:function(){return Math.floor(1e8*Math.random()+1)},menuState:{get:function(){return this.$store.state.showFolderMenu},set:function(){}}},methods:{delete:function(t){this.showConfirmDeleteModal(),console.log(t)},getShareableLink:function(t){console.log(t)},changeColor:function(t){console.log(t)},download:function(t){console.log(t)},getShareableLike:function(t){console.log(t)},viewDetails:function(t){this.$store.commit(V),console.log(t)},stars:function(t){console.log(t)},showConfirmDeleteModal:function(){this.$store.commit(P)},rename:function(){this.$store.commit(at)},share:function(){console.log("share")},fire:function(t,e){this.$store.commit(q),this[t](e)}}},he=me,pe=(o("0da5"),Object(r["a"])(he,fe,ve,!1,null,null,null));pe.options.__file="FolderMenu.vue";var _e=pe.exports,be=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"navbar",attrs:{id:"media-navbar"}},[o("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:"",app:"",width:"250"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{dense:""}},[t._l(t.items,function(e){return[e.heading?o("v-layout",{key:e.heading,attrs:{row:"","align-center":""}},[o("v-flex",{attrs:{xs6:""}},[e.heading?o("v-subheader",[t._v("\n                        "+t._s(e.heading)+"\n                    ")]):t._e()],1),o("v-flex",{staticClass:"text-xs-center",attrs:{xs6:""}},[o("a",{staticClass:"body-2 black--text",attrs:{href:"#!"}},[t._v("EDIT")])])],1):e.children?o("v-list-group",{key:e.text,attrs:{"prepend-icon":e.model?e.icon:e["icon-alt"],"append-icon":""},model:{value:e.model,callback:function(o){t.$set(e,"model",o)},expression:"item.model"}},[o("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[o("v-list-tile-content",[o("v-list-tile-title",[t._v("\n                        "+t._s(e.text)+"\n                    ")])],1)],1),t._l(e.children,function(e,n){return o("v-list-tile",{key:n,on:{click:function(t){}}},[e.icon?o("v-list-tile-action",[o("v-icon",[t._v(t._s(e.icon))])],1):t._e(),o("v-list-tile-content",[o("v-list-tile-title",[t._v("\n                    "+t._s(e.text)+"\n                ")])],1)],1)})],2):o("v-list-tile",{key:e.text,on:{click:function(o){t.fire(e.link)}}},[o("v-list-tile-action",[o("v-icon",[t._v(t._s(e.icon))])],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v("\n                "+t._s(e.text)+"\n            ")])],1)],1)]})],2)],1),o("v-toolbar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,color:"blue darken-3",dark:"",app:"",fixed:""}},[o("v-toolbar-title",{staticClass:"ml-0",staticStyle:{width:"300px"}},[o("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),o("span",{staticClass:"hidden-sm-and-down"},[t._v("Media Manager")])],1),o("v-text-field",{staticClass:"hidden-sm-and-down",attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"search",label:"Search"}}),o("v-spacer"),o("v-badge",{attrs:{color:"cyan",left:"",overlap:""}},[o("span",{attrs:{slot:"badge"},slot:"badge"},[t._v("6")]),o("v-btn",{attrs:{icon:""}},[o("v-icon",{attrs:{large:""}},[t._v("notifications")])],1)],1),o("v-btn",{attrs:{icon:"",large:""}},[o("v-avatar",{attrs:{size:"32px",tile:""}},[o("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/logos/logo.svg",alt:"Media Manager"}})])],1)],1),o("media-settings",{attrs:{dialog:t.dialogSettings}})],1)},ge=[],we={name:"media-navbar",data:function(){return{dialog:!1,drawer:null,loading:null,dialogSettings:null,items:[{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Upload",model:!1,children:[{icon:"upload_file",text:"File upload"},{icon:"upload_file",text:"Folder upload"}]},{icon:"create_new_folder",text:"New Folder",link:"newFolder"},{icon:"history",text:"Frequently contacted",link:"about"},{icon:"content_copy",text:"Duplicates",link:"about"},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Labels",model:!0,link:"about",children:[{icon:"add",text:"Create label"}]},{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"More",model:!1,children:[{text:"Import"},{text:"Export"},{text:"Print"},{text:"Undo changes"},{text:"Other contacts"}]},{icon:"settings",text:"Settings",link:"settings"},{icon:"chat_bubble",text:"Send feedback",link:"about"},{icon:"help",text:"Help",link:"about"},{icon:"phonelink",text:"App downloads",link:"about"},{icon:"keyboard",text:"Go to the old version",link:"about"}]}},props:{source:String},components:{},mounted:function(){},methods:{newFolder:function(t){this.$store.commit(H),console.log(t)},settings:function(t){this.$store.commit(Z),console.log(t)},fire:function(t){this[t](t)}}},ke=we,xe=(o("ecfb"),Object(r["a"])(ke,be,ge,!1,null,null,null));xe.options.__file="NavBar.vue";var Se=xe.exports,Oe=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"media-online"}},[o("v-dialog",{attrs:{persistent:"",width:"300px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)},Me=[],Ee={name:"media-online",props:{},data:function(){return{dialog:!1}},mounted:function(){var t=this;window.addEventListener("load",function(){window.addEventListener("online",t.updateOnlineStatus),window.addEventListener("offline",t.updateOnlineStatus)})},beforeDestroy:function(){window.removeEventListener("online",this.updateOnlineStatus),window.removeEventListener("offline",this.updateOnlineStatus)},methods:{updateOnlineStatus:function(){var t=navigator.onLine||!1;if(1==t){var e={data:"You are online.",color:"success"};this.$store.commit(K,e),this.dialog=!1}else e={data:"You are offline. Some functionality may be unavaliable.",color:"error"},this.$store.commit(K,e),this.dialog=!0}}},Ce=Ee,ye=(o("e6f6"),Object(r["a"])(Ce,Oe,Me,!1,null,null,null));ye.options.__file="OnlineState.vue";var $e,De,je=ye.exports,Ie={},Fe=Object(r["a"])(Ie,$e,De,!1,null,null,null);Fe.options.__file="ProgressBar.vue";var Te=Fe.exports,Le=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"media-tool"}},[o("v-btn",{attrs:{fab:"",bottom:"",right:"",color:"info",dark:"",fixed:"",large:""},on:{click:function(e){t.showToolModal()}}},[o("v-icon",[t._v("cloud_upload")])],1),o("v-dialog",{attrs:{persistent:"",width:"500px"},model:{value:this.$store.state.showToolModal,callback:function(e){t.$set(this.$store.state,"showToolModal",e)},expression:"this.$store.state.showToolModal"}},[o("v-card",[o("v-card-title",{staticClass:"grey lighten-4 py-4 title"},[t._v(" Upload")]),o("v-container",{staticClass:"pa-4",attrs:{"grid-list-sm":""}}),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{flat:"",color:"error"},on:{click:function(e){t.hideToolModal()}}},[t._v("Close")]),o("v-btn",{attrs:{color:"success"},on:{click:function(e){t.hideToolModal()}}},[t._v("Done")]),o("v-spacer")],1)],1)],1)],1)},Ae=[],Re={name:"media-tool",data:function(){return{dialog:!1}},methods:{hideToolModal:function(){this.$store.commit(X)},showToolModal:function(){this.$store.commit(z)}}},Ne=Re,He=Object(r["a"])(Ne,Le,Ae,!1,null,null,null);He.options.__file="ToolModel.vue";var Ue=He.exports,Pe=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"media-rename"}},[o("v-dialog",{attrs:{persistent:"",width:"500px"},model:{value:this.$store.state.showRenameModal,callback:function(e){t.$set(this.$store.state,"showRenameModal",e)},expression:"this.$store.state.showRenameModal"}},[o("v-card",[o("v-card-title",{staticClass:"grey lighten-4 title"},[t._v("\n                Rename\n                "),o("v-spacer"),o("v-icon",[t._v("folder")])],1),o("v-container",[o("v-flex",[o("v-text-field",{attrs:{solo:"",autofocus:"",label:"Folder name"},on:{focus:function(t){t.target.select()}},model:{value:t.defaultData,callback:function(e){t.defaultData=e},expression:"defaultData"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"error"},on:{click:function(e){t.hideRenameModal()}}},[t._v("Cancel")]),o("v-btn",{attrs:{color:"success"}},[t._v("Ok")])],1)],1)],1)],1)},We=[],Be={name:"media-rename",data:function(){return{defaultData:"Untitled Folder"}},props:{},methods:{hideRenameModal:function(){this.$store.commit(lt)}}},Ye=Be,Ge=(o("845f"),Object(r["a"])(Ye,Pe,We,!1,null,null,null));Ge.options.__file="RenameModel.vue";var qe=Ge.exports,ze=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"media-settings"}},[o("v-layout",{attrs:{row:"","justify-center":""}},[o("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition",scrollable:""},model:{value:this.$store.state.showSettings,callback:function(e){t.$set(this.$store.state,"showSettings",e)},expression:"this.$store.state.showSettings"}},[o("v-card",{attrs:{tile:""}},[o("v-toolbar",{attrs:{card:"",dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.hideSettings()}}},[o("v-icon",[t._v("close")])],1),o("v-toolbar-title",[t._v("Settings")]),o("v-spacer"),o("v-toolbar-items",[o("v-btn",{attrs:{dark:"",flat:""},on:{click:function(e){t.hideSettings()}}},[t._v("Save")])],1),o("v-menu",{attrs:{bottom:"",right:"","offset-y":""}},[o("v-btn",{attrs:{slot:"activator",dark:"",icon:""},slot:"activator"},[o("v-icon",[t._v("more_vert")])],1),o("v-list",t._l(t.items,function(e,n){return o("v-list-tile",{key:n,on:{click:function(t){}}},[o("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),o("v-card-text",[o("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){t.dialog2=!t.dialog2}}},[t._v("Open Dialog 2")]),o("v-tooltip",{attrs:{right:""}},[o("v-btn",{attrs:{slot:"activator"},slot:"activator"},[t._v("Tool Tip Activator")]),t._v("\n                        Tool Tip\n                    ")],1),o("v-list",{attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("User Controls")]),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-content",[o("v-list-tile-title",[t._v("Content filtering")]),o("v-list-tile-sub-title",[t._v("Set the content filtering level to restrict apps that can be downloaded")])],1)],1),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-content",[o("v-list-tile-title",[t._v("Password")]),o("v-list-tile-sub-title",[t._v("Require password for purchase or use password to restrict purchase")])],1)],1)],1),o("v-divider"),o("v-list",{attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("General")]),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-action",[o("v-checkbox",{model:{value:t.notifications,callback:function(e){t.notifications=e},expression:"notifications"}})],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v("Notifications")]),o("v-list-tile-sub-title",[t._v("Notify me about updates to apps or games that I downloaded")])],1)],1),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-action",[o("v-checkbox",{model:{value:t.sound,callback:function(e){t.sound=e},expression:"sound"}})],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v("Sound")]),o("v-list-tile-sub-title",[t._v("Auto-update apps at any time. Data charges may apply")])],1)],1),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-action",[o("v-checkbox",{model:{value:t.widgets,callback:function(e){t.widgets=e},expression:"widgets"}})],1),o("v-list-tile-content",[o("v-list-tile-title",[t._v("Auto-add widgets")]),o("v-list-tile-sub-title",[t._v("Automatically add home screen widgets")])],1)],1)],1)],1),o("div",{staticStyle:{flex:"1 1 auto"}})],1)],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[o("v-card",[o("v-card-title",[t._v("\n                    Dialog 2\n                ")]),o("v-card-text",[o("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){t.dialog3=!t.dialog3}}},[t._v("Open Dialog 3")]),o("v-select",{attrs:{items:t.select,label:"A Select List","item-value":"text"}})],1),o("v-card-actions",[o("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog2=!1}}},[t._v("Close")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog3,callback:function(e){t.dialog3=e},expression:"dialog3"}},[o("v-card",[o("v-card-title",[o("span",[t._v("Dialog 3")]),o("v-spacer"),o("v-menu",{attrs:{bottom:"",left:""}},[o("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[o("v-icon",[t._v("more_vert")])],1),o("v-list",t._l(t.items,function(e,n){return o("v-list-tile",{key:n,on:{click:function(t){}}},[o("v-list-tile-title",[t._v(t._s(e.title))])],1)}))],1)],1),o("v-card-actions",[o("v-btn",{attrs:{color:"primary",flat:""},on:{click:function(e){t.dialog3=!1}}},[t._v("Close")])],1)],1)],1)],1)],1)},Xe=[],Ve={name:"media-settings",data:function(){return{dialog2:!1,dialog3:!1,notifications:!1,sound:!0,widgets:!1,items:[{title:"Click Me"},{title:"Click Me"},{title:"Click Me"},{title:"Click Me 2"}],select:[{text:"State 1"},{text:"State 2"},{text:"State 3"},{text:"State 4"},{text:"State 5"},{text:"State 6"},{text:"State 7"}]}},props:{},methods:{hideSettings:function(){this.$store.commit(tt)}}},Je=Ve,Ke=Object(r["a"])(Je,ze,Xe,!1,null,null,null);Ke.options.__file="Settings.vue";var Qe=Ke.exports;o("bf40"),o("16f4");a["default"].use(v.a),a["default"].component("media-alert",St),a["default"].component("media-file",Zt),a["default"].component("media-folder",ue),a["default"].component("media-online-state",je),a["default"].component("media-progress-bar",Te),a["default"].component("media-content",Lt),a["default"].component("media-nav-bar",Se),a["default"].component("media-infrobar",zt),a["default"].component("media-tool-model",Ue),a["default"].component("media-confirm-delete-model",$t),a["default"].component("media-create-folder-model",Pt),a["default"].component("media-rename-model",qe),a["default"].component("media-settings",Qe),a["default"].component("media-file-menu",ae),a["default"].component("media-folder-menu",_e),a["default"].config.productionTip=!1,new a["default"]({router:x,store:pt,render:function(t){return t(u)}}).$mount("#app")},"5c48":function(t,e,o){},"7c55":function(t,e,o){"use strict";var n=o("5c48"),i=o.n(n);i.a},"7d9e":function(t,e,o){},"845f":function(t,e,o){"use strict";var n=o("7d9e"),i=o.n(n);i.a},8965:function(t,e,o){},"91e5":function(t,e,o){},"93a5":function(t,e,o){"use strict";var n=o("91e5"),i=o.n(n);i.a},db31:function(t,e,o){},e6f6:function(t,e,o){"use strict";var n=o("8965"),i=o.n(n);i.a},e7f3:function(t,e,o){},ea2f:function(t,e,o){"use strict";var n=o("0252"),i=o.n(n);i.a},ecfb:function(t,e,o){"use strict";var n=o("0cc6"),i=o.n(n);i.a},f44f:function(t,e,o){}});
//# sourceMappingURL=app.42dfa7e2.js.map