(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"9f21":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf");var r=n("c973"),a=n.n(r),o=n("cf57"),i=n("4515"),c=n("af0d"),s={data:function(){return{db:{}}},created:function(){this.db=new c["a"]("db")},methods:{addToCollection:function(e,t){this.db.collection(e).add(t).then((function(e){console.log("Agregado")})).catch((function(e){console.log(e)}))},getDataCollection:function(e){var t=arguments,n=this;return a()(regeneratorRuntime.mark((function r(){var a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=t.length>1&&void 0!==t[1]?t[1]:"",o=t.length>2&&void 0!==t[2]?t[2]:"",i=[],""!==a||""!==o){r.next=8;break}return r.next=6,n.db.collection(e).get().then((function(e){i=e}));case 6:r.next=10;break;case 8:return r.next=10,n.db.collection(e).orderBy(a,o).get().then((function(e){i=e}));case 10:return r.abrupt("return",i);case 11:case"end":return r.stop()}}),r)})))()},getDataCollectionById:function(e,t){var n=arguments,r=this;return a()(regeneratorRuntime.mark((function a(){var o,i,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=n.length>2&&void 0!==n[2]?n[2]:"",i=n.length>3&&void 0!==n[3]?n[3]:"",c=[],""!==o||""!==i){a.next=8;break}return a.next=6,r.db.collection(e).doc({id:t}).get().then((function(e){c=e}));case 6:a.next=10;break;case 8:return a.next=10,r.db.collection(e).doc({id:t}).orderBy(o,i).get().then((function(e){c=e}));case 10:return a.abrupt("return",c);case 11:case"end":return a.stop()}}),a)})))()},deleteDataCollection:function(e,t){var n=this;return a()(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.db.collection(e).doc({id:t}).delete().then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return r.stop()}}),r)})))()},updateDataOnCollectionById:function(e,t,n){var r=this;return a()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r.db.collection(e).doc({id:t}).set(n).then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return a.stop()}}),a)})))()},deleteDatabase:function(){var e=this;return a()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.db.delete();case 1:case"end":return t.stop()}}),t)})))()},isNumber:function(e){var t=e.replaceAll(".","");return/^\d+$/.test(t)},miles:function(e){if(e&&void 0!==e){"number"===typeof e&&(e=e.toString());var t=e.replace(/\./g,"");if(this.isNumber(e)){if(!isNaN(t)){t=parseInt(t);var n={style:"decimal",useGrouping:!0};t=t.toLocaleString("es",n)}}else t="";return t}},milesInput:function(e){e.target.value=this.miles(e.target.value)},goTo:function(e){this.$router.push("/"+e).catch((function(e){e._name}))},alert:function(e,t){this.$q.notify({message:t,color:e})},activateLoading:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={message:e};1===t?n.spinner=o["a"]:2===t&&(n.spinner=i["a"]),this.$q.loading.show(n)},disableLoading:function(){this.$q.loading.hide()}}}},b41f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-1"}),n("div",{staticClass:"col-10 container"},[n("q-btn",{staticClass:"full-width",attrs:{label:"Actualizar aplicación",color:"primary"},on:{click:e.updateApp}}),n("br"),n("q-separator"),n("br"),n("q-btn",{staticClass:"full-width",attrs:{label:"Eliminar datos",color:"primary"},on:{click:e.deleteData}})],1),n("div",{staticClass:"col-1"})])])])},a=[],o=(n("e260"),n("d81d"),n("d3b7"),n("e6cf"),n("3ca3"),n("ddb0"),n("96cf"),n("c973")),i=n.n(o),c=n("9f21"),s={name:"expenses",mixins:[c["a"]],data:function(){return{}},created:function(){},methods:{updateApp:function(){caches.keys().then((function(e){return Promise.all(e.map((function(e){return caches.delete(e)})))})),location.reload()},deleteData:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.deleteDatabase();case 2:e.alert("positive","La base de datos fue eliminada exitosamente");case 3:case"end":return t.stop()}}),t)})))()}}},u=s,l=n("2877"),d=n("9989"),f=n("9c40"),h=n("eb85"),p=n("eebe"),g=n.n(p),m=Object(l["a"])(u,r,a,!1,null,null,null);t["default"]=m.exports;g()(m,"components",{QPage:d["a"],QBtn:f["a"],QSeparator:h["a"]})}}]);