(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1ed2":function(e,t,n){"use strict";var r=n("4224"),a=n.n(r);a.a},4224:function(e,t,n){},6619:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-1"}),n("div",{staticClass:"col-10 container"},[n("q-form",{on:{submit:e.save}},[n("q-input",{attrs:{inputmode:"numeric",color:"green",label:"Valor"},on:{keyup:function(t){return e.milesInput(t,e.ingreso)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"attach_money"}})]},proxy:!0}]),model:{value:e.ingreso.valor,callback:function(t){e.$set(e.ingreso,"valor",t)},expression:"ingreso.valor"}}),n("br"),n("q-input",{attrs:{color:"green",label:"Nombre"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"description"}})]},proxy:!0}]),model:{value:e.ingreso.nombre,callback:function(t){e.$set(e.ingreso,"nombre",t)},expression:"ingreso.nombre"}}),n("br"),n("DateComponent",{model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}}),n("br"),n("q-btn",{staticClass:"full-width",attrs:{label:"Agregar",type:"submit",color:"positive"}})],1),n("br"),n("q-table",{staticClass:"table",attrs:{dense:e.$q.screen.lt.md,data:e.data,columns:e.columns,"row-key":"name","rows-per-page-options":[15]},scopedSlots:e._u([{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-td",{key:"nombre",attrs:{props:t}},[e._v("\n                      "+e._s(t.row.nombre)+"\n                      "),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(r){return[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.update(r,t.row,"nombre")}},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.nombre,callback:function(n){e.$set(t.row,"nombre",n)},expression:"props.row.nombre"}})],1),n("q-td",{key:"valor",attrs:{props:t}},[e._v("\n                      "+e._s(e.miles(t.row.valor))+"\n                      "),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(r){return[n("q-input",{attrs:{inputmode:"numeric",color:"green",dense:"",autofocus:"",counter:"",label:"Valor"},on:{keyup:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.update(r,t.row,"valor")},function(t){return e.milesInput(t)}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"attach_money"}})]},proxy:!0}],null,!0),model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.valor,callback:function(n){e.$set(t.row,"valor",n)},expression:"props.row.valor"}})],1),n("q-td",{key:"fecha",attrs:{props:t}},[e._v("\n                      "+e._s(t.row.fecha)+"\n                      "),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(r){return[n("DateComponent",{attrs:{enterEventParams:{scope:r,row:t.row,field:"fecha"}},on:{enterEvent:e.update},model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"scope.value"}}),n("br")]}}],null,!0),model:{value:t.row.fecha,callback:function(n){e.$set(t.row,"fecha",n)},expression:"props.row.fecha"}})],1),n("q-td",{key:"ops",attrs:{props:t}},[n("a",{staticClass:"text-red",staticStyle:{cursor:"pointer",padding:"5px"},on:{click:function(n){return e.del(t.row.id)}}},[n("q-icon",{attrs:{size:"md",name:"delete"}}),n("q-tooltip",{attrs:{delay:1e3,offset:[0,10]}},[e._v("eliminar")])],1)])],1)]}}])})],1),n("div",{staticClass:"col-1"})])])])},a=[],o=(n("c740"),n("a434"),n("ac1f"),n("5319"),n("96cf"),n("c973")),i=n.n(o),s=n("9f21"),c=n("bd4c"),u=n("c9c4"),l={name:"incomings",mixins:[s["a"]],components:{DateComponent:u["a"]},data:function(){return{ingreso:{},data:[],columns:[{name:"nombre",align:"center",label:"Nombre",field:"nombre",sortable:!0},{name:"valor",align:"center",label:"Valor",field:"valor",sortable:!0},{name:"fecha",align:"center",label:"Fecha",field:"fecha",sortable:!0},{name:"ops",align:"center",label:"Opciones",field:"ops",sortable:!0}],fecha:c["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}},created:function(){this.getData()},methods:{getData:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDataCollection("ingresos","id","desc");case 2:e.data=t.sent;case 3:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""!==e.ingreso.valor&&(e.ingreso.id=Date.now(),e.ingreso.valor=e.ingreso.valor.replace(/\./g,""),e.ingreso.fecha=e.fecha,e.addToCollection("ingresos",e.ingreso),e.data.push(e.ingreso),e.ingreso={},e.ingreso.fecha=c["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss"),e.alert("positive","Ingreso agregado"));case 1:case"end":return t.stop()}}),t)})))()},del:function(e){var t=this;return i()(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.data.findIndex((function(t){return t.id===e})),t.data.splice(r,1),n.next=4,t.deleteDataCollection("ingresos",e);case 4:case"end":return n.stop()}}),n)})))()},update:function(e,t,n){t[n]=e.value,this.updateDataOnCollectionById("ingresos",t.id,t)}}},p=l,d=n("2877"),f=n("9989"),m=n("0378"),h=n("27f9"),v=n("0016"),g=n("9c40"),b=n("eaac"),w=n("bd08"),k=n("db86"),y=n("42a1"),x=n("05c0"),q=n("eebe"),D=n.n(q),C=Object(d["a"])(p,r,a,!1,null,null,null);t["default"]=C.exports;D()(C,"components",{QPage:f["a"],QForm:m["a"],QInput:h["a"],QIcon:v["a"],QBtn:g["a"],QTable:b["a"],QTr:w["a"],QTd:k["a"],QPopupEdit:y["a"],QTooltip:x["a"]})},"9f21":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf");var r=n("c973"),a=n.n(r),o=n("cf57"),i=n("4515"),s=n("af0d"),c={data:function(){return{db:{}}},created:function(){this.db=new s["a"]("db")},methods:{addToCollection:function(e,t){this.db.collection(e).add(t).then((function(e){console.log("Agregado")})).catch((function(e){console.log(e)}))},getDataCollection:function(e){var t=arguments,n=this;return a()(regeneratorRuntime.mark((function r(){var a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=t.length>1&&void 0!==t[1]?t[1]:"",o=t.length>2&&void 0!==t[2]?t[2]:"",i=[],""!==a||""!==o){r.next=8;break}return r.next=6,n.db.collection(e).get().then((function(e){i=e}));case 6:r.next=10;break;case 8:return r.next=10,n.db.collection(e).orderBy(a,o).get().then((function(e){i=e}));case 10:return r.abrupt("return",i);case 11:case"end":return r.stop()}}),r)})))()},getDataCollectionById:function(e,t){var n=arguments,r=this;return a()(regeneratorRuntime.mark((function a(){var o,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=n.length>2&&void 0!==n[2]?n[2]:"",i=n.length>3&&void 0!==n[3]?n[3]:"",s=[],""!==o||""!==i){a.next=8;break}return a.next=6,r.db.collection(e).doc({id:t}).get().then((function(e){s=e}));case 6:a.next=10;break;case 8:return a.next=10,r.db.collection(e).doc({id:t}).orderBy(o,i).get().then((function(e){s=e}));case 10:return a.abrupt("return",s);case 11:case"end":return a.stop()}}),a)})))()},deleteDataCollection:function(e,t){var n=this;return a()(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n.db.collection(e).doc({id:t}).delete().then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return r.stop()}}),r)})))()},updateDataOnCollectionById:function(e,t,n){var r=this;return a()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r.db.collection(e).doc({id:t}).set(n).then((function(e){r.alert("positive","Datos actualizados correctamente")})).catch((function(e){console.log(e)}));case 1:case"end":return a.stop()}}),a)})))()},deleteDatabase:function(){var e=this;return a()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.db.delete();case 1:case"end":return t.stop()}}),t)})))()},isNumber:function(e){var t=e.replaceAll(".",""),n=t.replaceAll("-","");return/^\d+$/.test(n)},miles:function(e){if(e&&void 0!==e){"number"===typeof e&&(e=e.toString());var t=e.replace(/\./g,"");if(this.isNumber(e)){t=parseInt(t);var n={style:"decimal",useGrouping:!0};t=t.toLocaleString("es",n)}else t="";return t}return""},milesInput:function(e,t){var n=this.miles(e.target.value);e.target.value=n,t.valor=n,this.$emit("input",n)},goTo:function(e){this.$router.push("/"+e).catch((function(e){e._name}))},alert:function(e,t){this.$q.notify({message:t,color:e})},activateLoading:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={message:e};1===t?n.spinner=o["a"]:2===t&&(n.spinner=i["a"]),this.$q.loading.show(n)},disableLoading:function(){this.$q.loading.hide()}}}},c9c4:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-input",{attrs:{color:"green",label:"Fecha y hora",required:"",rules:[function(e){return!!e||"Tienes que llenar este campo"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterEventEmit()},input:e.handleInput},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},on:{input:e.handleInput},model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:e.handleInput},model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})],1)],1)]},proxy:!0}]),model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})},a=[],o={name:"DateComponent",props:["value","enterEventParams"],data:function(){return{fecha:this.value}},methods:{handleInput:function(e){this.$emit("input",this.fecha)},enterEventEmit:function(){this.enterEventParams&&this.$emit("enterEvent",this.enterEventParams.scope,this.enterEventParams.row,this.enterEventParams.field)}}},i=o,s=(n("1ed2"),n("2877")),c=n("27f9"),u=n("0016"),l=n("7cbe"),p=n("52ee"),d=n("ca78"),f=n("eebe"),m=n.n(f),h=Object(s["a"])(i,r,a,!1,null,"179b19d9",null);t["a"]=h.exports;m()(h,"components",{QInput:c["a"],QIcon:u["a"],QPopupProxy:l["a"],QDate:p["a"],QTime:d["a"]})}}]);