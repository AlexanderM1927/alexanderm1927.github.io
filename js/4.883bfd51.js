(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1ed2":function(e,n,t){"use strict";var r=t("4224"),o=t.n(r);o.a},4224:function(e,n,t){},6619:function(e,n,t){"use strict";t.r(n);var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-page",[t("div",{staticClass:"q-pa-md"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-1"}),t("div",{staticClass:"col-10 container"},[t("q-form",{on:{submit:e.save}},[t("q-input",{attrs:{inputmode:"numeric",color:"green",label:"Valor"},on:{keyup:function(n){return e.milesInput(n)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"attach_money"}})]},proxy:!0}]),model:{value:e.ingreso.valor,callback:function(n){e.$set(e.ingreso,"valor",n)},expression:"ingreso.valor"}}),t("br"),t("q-input",{attrs:{color:"green",label:"Nombre"},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"description"}})]},proxy:!0}]),model:{value:e.ingreso.nombre,callback:function(n){e.$set(e.ingreso,"nombre",n)},expression:"ingreso.nombre"}}),t("br"),t("DateComponent",{model:{value:e.fecha,callback:function(n){e.fecha=n},expression:"fecha"}}),t("br"),t("q-btn",{staticClass:"full-width",attrs:{label:"Agregar",type:"submit",color:"positive"}})],1),t("br"),t("q-table",{staticClass:"table",attrs:{dense:e.$q.screen.lt.md,data:e.data,columns:e.columns,"row-key":"name"},scopedSlots:e._u([{key:"body",fn:function(n){return[t("q-tr",{attrs:{props:n}},[t("q-td",{key:"nombre",attrs:{props:n}},[e._v("\n                      "+e._s(n.row.nombre)+"\n                      "),t("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(r){return[t("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.update(r,n.row,"nombre")}},model:{value:r.value,callback:function(n){e.$set(r,"value",n)},expression:"scope.value"}})]}}],null,!0),model:{value:n.row.nombre,callback:function(t){e.$set(n.row,"nombre",t)},expression:"props.row.nombre"}})],1),t("q-td",{key:"valor",attrs:{props:n}},[e._v("\n                      "+e._s(e.miles(n.row.valor))+"\n                      "),t("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(r){return[t("q-input",{attrs:{inputmode:"numeric",color:"green",dense:"",autofocus:"",counter:"",label:"Valor"},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.update(r,n.row,"valor")},function(n){return e.milesInput(n)}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"attach_money"}})]},proxy:!0}],null,!0),model:{value:r.value,callback:function(n){e.$set(r,"value",n)},expression:"scope.value"}})]}}],null,!0),model:{value:n.row.valor,callback:function(t){e.$set(n.row,"valor",t)},expression:"props.row.valor"}})],1),t("q-td",{key:"fecha",attrs:{props:n}},[e._v("\n                      "+e._s(n.row.fecha)+"\n                      "),t("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(r){return[t("DateComponent",{attrs:{enterEventParams:{scope:r,row:n.row,field:"fecha"}},on:{enterEvent:e.update},model:{value:r.value,callback:function(n){e.$set(r,"value",n)},expression:"scope.value"}}),t("br")]}}],null,!0),model:{value:n.row.fecha,callback:function(t){e.$set(n.row,"fecha",t)},expression:"props.row.fecha"}})],1),t("q-td",{key:"ops",attrs:{props:n}},[t("a",{staticClass:"text-red",staticStyle:{cursor:"pointer",padding:"5px"},on:{click:function(t){return e.del(n.row.id)}}},[t("q-icon",{attrs:{size:"md",name:"delete"}}),t("q-tooltip",{attrs:{delay:1e3,offset:[0,10]}},[e._v("eliminar")])],1)])],1)]}}])})],1),t("div",{staticClass:"col-1"})])])])},o=[],a=(t("c740"),t("a434"),t("ac1f"),t("5319"),t("96cf"),t("c973")),i=t.n(a),s=t("9f21"),c=t("bd4c"),u=t("c9c4"),l={name:"incomings",mixins:[s["a"]],components:{DateComponent:u["a"]},data:function(){return{ingreso:{},data:[],columns:[{name:"nombre",align:"center",label:"Nombre",field:"nombre",sortable:!0},{name:"valor",align:"center",label:"Valor",field:"valor",sortable:!0},{name:"fecha",align:"center",label:"Fecha",field:"fecha",sortable:!0},{name:"ops",align:"center",label:"Opciones",field:"ops",sortable:!0}],fecha:c["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}},created:function(){this.getData()},methods:{getData:function(){var e=this;return i()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getDataCollection("ingresos","id","desc");case 2:e.data=n.sent;case 3:case"end":return n.stop()}}),n)})))()},save:function(){var e=this;return i()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:""!==e.ingreso.valor&&(e.ingreso.id=Date.now(),e.ingreso.valor=e.ingreso.valor.replace(/\./g,""),e.ingreso.fecha=e.fecha,e.addToCollection("ingresos",e.ingreso),e.data.push(e.ingreso),e.ingreso={},e.ingreso.fecha=c["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss"),e.alert("positive","Ingreso agregado"));case 1:case"end":return n.stop()}}),n)})))()},del:function(e){var n=this;return i()(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=n.data.findIndex((function(n){return n.id===e})),n.data.splice(r,1),t.next=4,n.deleteDataCollection("ingresos",e);case 4:case"end":return t.stop()}}),t)})))()},update:function(e,n,t){n[t]=e.value,this.updateDataOnCollectionById("ingresos",n.id,n)}}},d=l,p=t("2877"),f=t("9989"),m=t("0378"),h=t("27f9"),v=t("0016"),g=t("9c40"),b=t("eaac"),w=t("bd08"),k=t("db86"),y=t("42a1"),x=t("05c0"),q=t("eebe"),D=t.n(q),C=Object(p["a"])(d,r,o,!1,null,null,null);n["default"]=C.exports;D()(C,"components",{QPage:f["a"],QForm:m["a"],QInput:h["a"],QIcon:v["a"],QBtn:g["a"],QTable:b["a"],QTr:w["a"],QTd:k["a"],QPopupEdit:y["a"],QTooltip:x["a"]})},"9f21":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("96cf");var r=t("c973"),o=t.n(r),a=t("cf57"),i=t("4515"),s=t("af0d"),c={data:function(){return{db:{}}},created:function(){this.db=new s["a"]("db")},methods:{addToCollection:function(e,n){this.db.collection(e).add(n).then((function(e){console.log("Agregado")})).catch((function(e){console.log(e)}))},getDataCollection:function(e){var n=arguments,t=this;return o()(regeneratorRuntime.mark((function r(){var o,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=n.length>1&&void 0!==n[1]?n[1]:"",a=n.length>2&&void 0!==n[2]?n[2]:"",i=[],""!==o||""!==a){r.next=8;break}return r.next=6,t.db.collection(e).get().then((function(e){i=e}));case 6:r.next=10;break;case 8:return r.next=10,t.db.collection(e).orderBy(o,a).get().then((function(e){i=e}));case 10:return r.abrupt("return",i);case 11:case"end":return r.stop()}}),r)})))()},getDataCollectionById:function(e,n){var t=arguments,r=this;return o()(regeneratorRuntime.mark((function o(){var a,i,s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(a=t.length>2&&void 0!==t[2]?t[2]:"",i=t.length>3&&void 0!==t[3]?t[3]:"",s=[],""!==a||""!==i){o.next=8;break}return o.next=6,r.db.collection(e).doc({id:n}).get().then((function(e){s=e}));case 6:o.next=10;break;case 8:return o.next=10,r.db.collection(e).doc({id:n}).orderBy(a,i).get().then((function(e){s=e}));case 10:return o.abrupt("return",s);case 11:case"end":return o.stop()}}),o)})))()},deleteDataCollection:function(e,n){var t=this;return o()(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.db.collection(e).doc({id:n}).delete().then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return r.stop()}}),r)})))()},updateDataOnCollectionById:function(e,n,t){var r=this;return o()(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:r.db.collection(e).doc({id:n}).set(t).then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return o.stop()}}),o)})))()},deleteDatabase:function(){var e=this;return o()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.db.delete();case 1:case"end":return n.stop()}}),n)})))()},isNumber:function(e){var n=e.replaceAll(".","");return/^\d+$/.test(n)},miles:function(e){if(e&&void 0!==e){"number"===typeof e&&(e=e.toString());var n=e.replace(/\./g,"");if(this.isNumber(e)){if(!isNaN(n)){n=parseInt(n);var t={style:"decimal",useGrouping:!0};n=n.toLocaleString("es",t)}}else n="";return n}},milesInput:function(e){e.target.value=this.miles(e.target.value)},goTo:function(e){this.$router.push("/"+e).catch((function(e){e._name}))},alert:function(e,n){this.$q.notify({message:n,color:e})},activateLoading:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t={message:e};1===n?t.spinner=a["a"]:2===n&&(t.spinner=i["a"]),this.$q.loading.show(t)},disableLoading:function(){this.$q.loading.hide()}}}},c9c4:function(e,n,t){"use strict";var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("q-input",{attrs:{color:"green",label:"Fecha y hora",required:"",rules:[function(e){return!!e||"Tienes que llenar este campo"}]},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.enterEventEmit()},input:e.handleInput},scopedSlots:e._u([{key:"prepend",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[t("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},on:{input:e.handleInput},model:{value:e.fecha,callback:function(n){e.fecha=n},expression:"fecha"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[t("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[t("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:e.handleInput},model:{value:e.fecha,callback:function(n){e.fecha=n},expression:"fecha"}})],1)],1)]},proxy:!0}]),model:{value:e.fecha,callback:function(n){e.fecha=n},expression:"fecha"}})},o=[],a={name:"DateComponent",props:["value","enterEventParams"],data:function(){return{fecha:this.value}},methods:{handleInput:function(e){this.$emit("input",this.fecha)},enterEventEmit:function(){this.enterEventParams&&this.$emit("enterEvent",this.enterEventParams.scope,this.enterEventParams.row,this.enterEventParams.field)}}},i=a,s=(t("1ed2"),t("2877")),c=t("27f9"),u=t("0016"),l=t("7cbe"),d=t("52ee"),p=t("ca78"),f=t("eebe"),m=t.n(f),h=Object(s["a"])(i,r,o,!1,null,"179b19d9",null);n["a"]=h.exports;m()(h,"components",{QInput:c["a"],QIcon:u["a"],QPopupProxy:l["a"],QDate:d["a"],QTime:p["a"]})}}]);