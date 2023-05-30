(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"04fb":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 container"},[e.options.length>0?n("q-form",{on:{submit:e.save}},[n("q-input",{attrs:{inputmode:"numeric",color:"green",label:"Valor"},on:{keyup:function(t){return e.milesInput(t,e.gasto)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"attach_money"}})]},proxy:!0}],null,!1,2568092296),model:{value:e.gasto.valor,callback:function(t){e.$set(e.gasto,"valor",t)},expression:"gasto.valor"}}),n("br"),n("q-input",{attrs:{color:"green",label:"Nombre"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"description"}})]},proxy:!0}],null,!1,736773578),model:{value:e.gasto.nombre,callback:function(t){e.$set(e.gasto,"nombre",t)},expression:"gasto.nombre"}}),n("br"),n("q-select",{attrs:{options:e.options,label:"Tipo",required:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"account_balance"}})]},proxy:!0}],null,!1,4264257012),model:{value:e.gasto.tipo,callback:function(t){e.$set(e.gasto,"tipo",t)},expression:"gasto.tipo"}}),n("br"),n("DateComponent",{model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}}),n("br"),n("q-btn",{staticClass:"full-width",attrs:{label:"Agregar",type:"submit",color:"positive"}})],1):n("div",[e._v("\n              Para comenzar, debes ingresar un tipo de gasto.\n              "),n("q-btn",{staticClass:"full-width",attrs:{label:"Ir a crear tipo de gasto",color:"primary"},on:{click:function(t){return e.goTo("expenses-types")}}}),n("br"),n("br"),n("b",[e._v("Nota:")]),e._v(" Los gastos van vinculados a un tipo de gasto, de esta forma podrás organizar diferentes gasto de una misma clase, es decir, si el tipo de gasto es comida, podrás adjuntar varios gastos de la misma causa.\n            ")],1),n("br"),n("q-separator"),n("br"),n("q-table",{staticClass:"table",attrs:{dense:e.$q.screen.lt.md,data:e.data,columns:e.columns,"row-key":"name","rows-per-page-options":[15]},scopedSlots:e._u([{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-td",{key:"tipo",attrs:{props:t}},[e._v("\n                    "+e._s(e.getNombre(t.row.tipo))+"\n                  ")]),n("q-td",{key:"nombre",attrs:{props:t}},[e._v("\n                    "+e._s(t.row.nombre)+"\n                    "),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(a){return[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.update(a,t.row,"nombre")}},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.nombre,callback:function(n){e.$set(t.row,"nombre",n)},expression:"props.row.nombre"}})],1),n("q-td",{key:"valor",attrs:{props:t}},[e._v("\n                    "+e._s(e.miles(t.row.valor))+"\n                    "),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(a){return[n("q-input",{attrs:{inputmode:"numeric",color:"green",dense:"",autofocus:"",counter:"",label:"Valor"},on:{keyup:[function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.update(a,t.row,"valor")},function(t){return e.milesInput(t)}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"attach_money"}})]},proxy:!0}],null,!0),model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.valor,callback:function(n){e.$set(t.row,"valor",n)},expression:"props.row.valor"}})],1),n("q-td",{key:"fecha",attrs:{props:t}},[e._v("\n                    "+e._s(t.row.fecha)+"\n                    "),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(a){return[n("DateComponent",{attrs:{enterEventParams:{scope:a,row:t.row,field:"fecha"}},on:{enterEvent:e.update},model:{value:a.value,callback:function(t){e.$set(a,"value",t)},expression:"scope.value"}}),n("br")]}}],null,!0),model:{value:t.row.fecha,callback:function(n){e.$set(t.row,"fecha",n)},expression:"props.row.fecha"}})],1),n("q-td",{key:"ops",attrs:{props:t}},[n("a",{staticClass:"text-red",staticStyle:{cursor:"pointer",padding:"5px"},on:{click:function(n){return e.del(t.row.id)}}},[n("q-icon",{attrs:{size:"md",name:"delete"}}),n("q-tooltip",{attrs:{delay:1e3,offset:[0,10]}},[e._v("eliminar")])],1)])],1)]}}])})],1)])])])},o=[],r=(n("c740"),n("a434"),n("ac1f"),n("5319"),n("96cf"),n("c973")),s=n.n(r),i=n("9f21"),c=n("bd4c"),l=n("c9c4"),u={name:"expenses",mixins:[i["a"]],components:{DateComponent:l["a"]},data:function(){return{gasto:{},options:[],data:[],columns:[{name:"tipo",align:"center",label:"Tipo",field:"tipo",sortable:!0},{name:"nombre",align:"center",label:"Nombre",field:"nombre",sortable:!0},{name:"valor",align:"center",label:"Valor",field:"valor",sortable:!0},{name:"fecha",align:"center",label:"Fecha",field:"fecha",sortable:!0},{name:"ops",align:"center",label:"Opciones",field:"ops",sortable:!0}],fecha:c["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss")}},created:function(){this.getData(),this.getTypes()},methods:{getTypes:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDataCollection("tipos");case 2:for(n=t.sent,a=0;a<n.length;a++)e.options.push({label:n[a].nombre,value:n[a].id});case 4:case"end":return t.stop()}}),t)})))()},getData:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDataCollection("gastos","id","desc");case 2:e.data=t.sent;case 3:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return s()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===e.gasto.valor){t.next=12;break}return e.gasto.id=Date.now(),e.gasto.valor=e.gasto.valor.replace(/\./g,""),t.next=5,e.getDataCollectionById("tipos",e.gasto.tipo.value);case 5:e.gasto.tipo=t.sent,e.gasto.fecha=e.fecha,e.addToCollection("gastos",e.gasto),e.data.push(e.gasto),e.gasto={},e.gasto.fecha=c["b"].formatDate(Date.now(),"YYYY-MM-DD HH:mm:ss"),e.alert("positive","Gasto agregado");case 12:case"end":return t.stop()}}),t)})))()},del:function(e){var t=this;return s()(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.data.findIndex((function(t){return t.id===e})),t.data.splice(a,1),n.next=4,t.deleteDataCollection("gastos",e);case 4:case"end":return n.stop()}}),n)})))()},getNombre:function(e){var t="";return t=void 0!==e?e.nombre:e,t},update:function(e,t,n){t[n]=e.value,this.updateDataOnCollectionById("gastos",t.id,t)}}},p=u,d=n("2877"),f=n("9989"),m=n("0378"),h=n("27f9"),v=n("0016"),g=n("ddd8"),b=n("9c40"),k=n("eb85"),w=n("eaac"),y=n("bd08"),x=n("db86"),q=n("42a1"),_=n("05c0"),D=n("eebe"),C=n.n(D),$=Object(d["a"])(p,a,o,!1,null,null,null);t["default"]=$.exports;C()($,"components",{QPage:f["a"],QForm:m["a"],QInput:h["a"],QIcon:v["a"],QSelect:g["a"],QBtn:b["a"],QSeparator:k["a"],QTable:w["a"],QTr:y["a"],QTd:x["a"],QPopupEdit:q["a"],QTooltip:_["a"]})},"1ed2":function(e,t,n){"use strict";var a=n("4224"),o=n.n(a);o.a},4224:function(e,t,n){},"9f21":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf");var a=n("c973"),o=n.n(a),r=n("cf57"),s=n("4515"),i=n("af0d"),c={data:function(){return{db:{}}},created:function(){this.db=new i["a"]("db")},methods:{addToCollection:function(e,t){this.db.collection(e).add(t).then((function(e){console.log("Agregado")})).catch((function(e){console.log(e)}))},getDataCollection:function(e){var t=arguments,n=this;return o()(regeneratorRuntime.mark((function a(){var o,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:"",r=t.length>2&&void 0!==t[2]?t[2]:"",s=[],""!==o||""!==r){a.next=8;break}return a.next=6,n.db.collection(e).get().then((function(e){s=e}));case 6:a.next=10;break;case 8:return a.next=10,n.db.collection(e).orderBy(o,r).get().then((function(e){s=e}));case 10:return a.abrupt("return",s);case 11:case"end":return a.stop()}}),a)})))()},getDataCollectionById:function(e,t){var n=arguments,a=this;return o()(regeneratorRuntime.mark((function o(){var r,s,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(r=n.length>2&&void 0!==n[2]?n[2]:"",s=n.length>3&&void 0!==n[3]?n[3]:"",i=[],""!==r||""!==s){o.next=8;break}return o.next=6,a.db.collection(e).doc({id:t}).get().then((function(e){i=e}));case 6:o.next=10;break;case 8:return o.next=10,a.db.collection(e).doc({id:t}).orderBy(r,s).get().then((function(e){i=e}));case 10:return o.abrupt("return",i);case 11:case"end":return o.stop()}}),o)})))()},deleteDataCollection:function(e,t){var n=this;return o()(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n.db.collection(e).doc({id:t}).delete().then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return a.stop()}}),a)})))()},updateDataOnCollectionById:function(e,t,n){var a=this;return o()(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:a.db.collection(e).doc({id:t}).set(n).then((function(e){a.alert("positive","Datos actualizados correctamente")})).catch((function(e){console.log(e)}));case 1:case"end":return o.stop()}}),o)})))()},deleteDatabase:function(){var e=this;return o()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.db.delete();case 1:case"end":return t.stop()}}),t)})))()},isNumber:function(e){var t=e.replaceAll(".",""),n=t.replaceAll("-","");return/^\d+$/.test(n)},miles:function(e){if(e&&void 0!==e){"number"===typeof e&&(e=e.toString());var t=e.replace(/\./g,"");if(this.isNumber(e)){t=parseInt(t);var n={style:"decimal",useGrouping:!0};t=t.toLocaleString("es",n)}else t="";return t}return""},milesInput:function(e,t){var n=this.miles(e.target.value);e.target.value=n,t.valor=n,this.$emit("input",n)},goTo:function(e){this.$router.push("/"+e).catch((function(e){e._name}))},alert:function(e,t){this.$q.notify({message:t,color:e})},activateLoading:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={message:e};1===t?n.spinner=r["a"]:2===t&&(n.spinner=s["a"]),this.$q.loading.show(n)},disableLoading:function(){this.$q.loading.hide()}}}},c9c4:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-input",{attrs:{color:"green",label:"Fecha y hora",required:"",rules:[function(e){return!!e||"Tienes que llenar este campo"}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterEventEmit()},input:e.handleInput},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},on:{input:e.handleInput},model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:e.handleInput},model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})],1)],1)]},proxy:!0}]),model:{value:e.fecha,callback:function(t){e.fecha=t},expression:"fecha"}})},o=[],r={name:"DateComponent",props:["value","enterEventParams"],data:function(){return{fecha:this.value}},methods:{handleInput:function(e){this.$emit("input",this.fecha)},enterEventEmit:function(){this.enterEventParams&&this.$emit("enterEvent",this.enterEventParams.scope,this.enterEventParams.row,this.enterEventParams.field)}}},s=r,i=(n("1ed2"),n("2877")),c=n("27f9"),l=n("0016"),u=n("7cbe"),p=n("52ee"),d=n("ca78"),f=n("eebe"),m=n.n(f),h=Object(i["a"])(s,a,o,!1,null,"179b19d9",null);t["a"]=h.exports;m()(h,"components",{QInput:c["a"],QIcon:l["a"],QPopupProxy:u["a"],QDate:p["a"],QTime:d["a"]})}}]);