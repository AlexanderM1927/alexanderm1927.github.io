(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{2809:function(e,t,n){"use strict";var a=n("45c3"),i=n.n(a);i.a},"45c3":function(e,t,n){},"713b":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("q-header",{staticClass:"bg-primary",attrs:{elevated:""}},[n("q-toolbar",[n("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),n("q-toolbar-title",[e._v("\n        MyGuardMoney\n      ")])],1)],1),n("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-primary text-white"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[n("q-list",[n("q-item-label",{attrs:{header:""}},[n("div",{staticClass:"text-white text-center text-h6"},[e._v("MyGuardMoney")]),n("div",{staticClass:"text-white text-center text-subtitle2"},[e._v("Manejar tus gastos nunca había sido tan fácil")])]),e._l(e.essentialLinks,(function(t){return n("EssentialLink",e._b({key:t.title,attrs:{view:e.view}},"EssentialLink",t,!1))}))],2)],1),n("q-page-container",[n("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-item",{class:e.view===e.link?"marked":"",attrs:{clickable:"",tag:"a",target:"_blank"},on:{click:function(t){return e.goTo(e.link)}}},[e.icon?n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.icon}})],1):e._e(),n("q-item-section",[n("q-item-label",[e._v(e._s(e.title))]),n("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},o=[],c=n("9f21"),s={name:"EssentialLink",mixins:[c["a"]],props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""},view:{type:String,default:""}}},l=s,u=(n("2809"),n("2877")),d=n("66e5"),f=n("4074"),p=n("0016"),g=n("0170"),h=n("eebe"),m=n.n(h),b=Object(u["a"])(l,r,o,!1,null,"1f122eb0",null),v=b.exports;m()(b,"components",{QItem:d["a"],QItemSection:f["a"],QIcon:p["a"],QItemLabel:g["a"]});var w=[{title:"Gastos",icon:"attach_money",link:"expenses"},{title:"Tipos gastos",icon:"article",link:"expenses-types"},{title:"Ingresos",icon:"account_balance",link:"incomings"},{title:"Análisis",icon:"analytics",link:"analysis"},{title:"Configuración",icon:"settings",link:"settings"}],k={name:"MainLayout",components:{EssentialLink:v},mixins:[c["a"]],data:function(){return{leftDrawerOpen:!1,essentialLinks:w}},props:["view"]},x=k,y=n("4d5a"),q=n("e359"),_=n("65c6"),L=n("9c40"),D=n("6ac5"),Q=n("9404"),C=n("1c1c"),I=n("09e3"),R=Object(u["a"])(x,a,i,!1,null,null,null);t["default"]=R.exports;m()(R,"components",{QLayout:y["a"],QHeader:q["a"],QToolbar:_["a"],QBtn:L["a"],QToolbarTitle:D["a"],QDrawer:Q["a"],QList:C["a"],QItemLabel:g["a"],QPageContainer:I["a"]})},"9f21":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf");var a=n("c973"),i=n.n(a),r=n("cf57"),o=n("4515"),c=n("af0d"),s={data:function(){return{db:{}}},created:function(){this.db=new c["a"]("db")},methods:{addToCollection:function(e,t){this.db.collection(e).add(t).then((function(e){console.log("Agregado")})).catch((function(e){console.log(e)}))},getDataCollection:function(e){var t=arguments,n=this;return i()(regeneratorRuntime.mark((function a(){var i,r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=t.length>1&&void 0!==t[1]?t[1]:"",r=t.length>2&&void 0!==t[2]?t[2]:"",o=[],""!==i||""!==r){a.next=8;break}return a.next=6,n.db.collection(e).get().then((function(e){o=e}));case 6:a.next=10;break;case 8:return a.next=10,n.db.collection(e).orderBy(i,r).get().then((function(e){o=e}));case 10:return a.abrupt("return",o);case 11:case"end":return a.stop()}}),a)})))()},getDataCollectionById:function(e,t){var n=arguments,a=this;return i()(regeneratorRuntime.mark((function i(){var r,o,c;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(r=n.length>2&&void 0!==n[2]?n[2]:"",o=n.length>3&&void 0!==n[3]?n[3]:"",c=[],""!==r||""!==o){i.next=8;break}return i.next=6,a.db.collection(e).doc({id:t}).get().then((function(e){c=e}));case 6:i.next=10;break;case 8:return i.next=10,a.db.collection(e).doc({id:t}).orderBy(r,o).get().then((function(e){c=e}));case 10:return i.abrupt("return",c);case 11:case"end":return i.stop()}}),i)})))()},deleteDataCollection:function(e,t){var n=this;return i()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.db.collection(e).doc({id:t}).delete().then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return a.stop()}}),a)})))()},updateDataOnCollectionById:function(e,t,n){var a=this;return i()(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:a.db.collection(e).doc({id:t}).set(n).then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return i.stop()}}),i)})))()},deleteDatabase:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.db.delete();case 1:case"end":return t.stop()}}),t)})))()},isNumber:function(e){var t=e.replaceAll(".","");return/^\d+$/.test(t)},miles:function(e){if(e&&void 0!==e){"number"===typeof e&&(e=e.toString());var t=e.replace(/\./g,"");if(this.isNumber(e)){if(!isNaN(t)){t=parseInt(t);var n={style:"decimal",useGrouping:!0};t=t.toLocaleString("es",n)}}else t="";return t}},milesInput:function(e){e.target.value=this.miles(e.target.value)},goTo:function(e){this.$router.push("/"+e).catch((function(e){e._name}))},alert:function(e,t){this.$q.notify({message:t,color:e})},activateLoading:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={message:e};1===t?n.spinner=r["a"]:2===t&&(n.spinner=o["a"]),this.$q.loading.show(n)},disableLoading:function(){this.$q.loading.hide()}}}}}]);