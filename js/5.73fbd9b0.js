(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"4bb5":function(e,t,n){"use strict";var o=n("ad66"),r=n.n(o);r.a},"9f21":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("d3b7"),n("ac1f"),n("25f0"),n("5319"),n("96cf");var o=n("c973"),r=n.n(o),a=n("cf57"),i=n("4515"),s=n("af0d"),c={data:function(){return{db:{}}},created:function(){this.db=new s["a"]("db")},methods:{addToCollection:function(e,t){this.db.collection(e).add(t).then((function(e){console.log("Agregado")})).catch((function(e){console.log(e)}))},getDataCollection:function(e){var t=arguments,n=this;return r()(regeneratorRuntime.mark((function o(){var r,a,i;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(r=t.length>1&&void 0!==t[1]?t[1]:"",a=t.length>2&&void 0!==t[2]?t[2]:"",i=[],""!==r||""!==a){o.next=8;break}return o.next=6,n.db.collection(e).get().then((function(e){i=e}));case 6:o.next=10;break;case 8:return o.next=10,n.db.collection(e).orderBy(r,a).get().then((function(e){i=e}));case 10:return o.abrupt("return",i);case 11:case"end":return o.stop()}}),o)})))()},getDataCollectionById:function(e,t){var n=arguments,o=this;return r()(regeneratorRuntime.mark((function r(){var a,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(a=n.length>2&&void 0!==n[2]?n[2]:"",i=n.length>3&&void 0!==n[3]?n[3]:"",s=[],""!==a||""!==i){r.next=8;break}return r.next=6,o.db.collection(e).doc({id:t}).get().then((function(e){s=e}));case 6:r.next=10;break;case 8:return r.next=10,o.db.collection(e).doc({id:t}).orderBy(a,i).get().then((function(e){s=e}));case 10:return r.abrupt("return",s);case 11:case"end":return r.stop()}}),r)})))()},deleteDataCollection:function(e,t){var n=this;return r()(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:n.db.collection(e).doc({id:t}).delete().then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return o.stop()}}),o)})))()},updateDataOnCollectionById:function(e,t,n){var o=this;return r()(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:o.db.collection(e).doc({id:t}).set(n).then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return r.stop()}}),r)})))()},deleteDatabase:function(){var e=this;return r()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.db.delete();case 1:case"end":return t.stop()}}),t)})))()},isNumber:function(e){var t=e.replaceAll(".","");return/^\d+$/.test(t)},miles:function(e){if(e&&void 0!==e){"number"===typeof e&&(e=e.toString());var t=e.replace(/\./g,"");if(this.isNumber(e)){if(!isNaN(t)){t=parseInt(t);var n={style:"decimal",useGrouping:!0};t=t.toLocaleString("es",n)}}else t="";return t}},milesInput:function(e){e.target.value=this.miles(e.target.value)},goTo:function(e){this.$router.push("/"+e).catch((function(e){e._name}))},alert:function(e,t){this.$q.notify({message:t,color:e})},activateLoading:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={message:e};1===t?n.spinner=a["a"]:2===t&&(n.spinner=i["a"]),this.$q.loading.show(n)},disableLoading:function(){this.$q.loading.hide()}}}},ad66:function(e,t,n){},d8f4:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",[n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-1"}),n("div",{staticClass:"col-10 container"},[n("q-form",{on:{submit:e.save}},[n("q-input",{attrs:{color:"green",required:"",label:"Nombre"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"account_balance"}})]},proxy:!0}]),model:{value:e.type.nombre,callback:function(t){e.$set(e.type,"nombre",t)},expression:"type.nombre"}}),n("br"),n("q-input",{staticClass:"my-input",attrs:{label:"Color (click en el icono)",required:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"palette"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-color",{model:{value:e.type.color,callback:function(t){e.$set(e.type,"color",t)},expression:"type.color"}})],1)],1)]},proxy:!0}]),model:{value:e.type.color,callback:function(t){e.$set(e.type,"color",t)},expression:"type.color"}}),n("br"),n("q-btn",{staticClass:"full-width",attrs:{type:"submit",label:"Agregar",color:"positive"}})],1),n("br"),n("q-separator"),n("div",{staticClass:"text-h6"},[e._v("Tipos actuales")]),n("q-table",{staticClass:"table",attrs:{dense:e.$q.screen.lt.md,data:e.data,columns:e.columns,"row-key":"name"},scopedSlots:e._u([{key:"body",fn:function(t){return[n("q-tr",{attrs:{props:t}},[n("q-td",{key:"name",attrs:{props:t}},[e._v("\n                      "+e._s(t.row.nombre)+"\n                      "),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(o){return[n("q-input",{attrs:{dense:"",autofocus:"",counter:""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.update(o,t.row,"nombre")}},model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.nombre,callback:function(n){e.$set(t.row,"nombre",n)},expression:"props.row.nombre"}})],1),n("q-td",{key:"color",attrs:{props:t}},[n("div",{staticClass:"type-color",style:"background: "+t.row.color}),n("q-popup-edit",{scopedSlots:e._u([{key:"default",fn:function(o){return[n("q-input",{staticClass:"my-input",attrs:{label:"Color (click en el icono)",required:""},on:{keyup:function(n){return!n.type.indexOf("key")&&e._k(n.keyCode,"enter",13,n.key,"Enter")?null:e.update(o,t.row,"color")}},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"palette"}},[n("q-popup-proxy",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-color",{model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"scope.value"}})],1)],1)]},proxy:!0}],null,!0),model:{value:o.value,callback:function(t){e.$set(o,"value",t)},expression:"scope.value"}})]}}],null,!0),model:{value:t.row.color,callback:function(n){e.$set(t.row,"color",n)},expression:"props.row.color"}})],1),n("q-td",{key:"ops",attrs:{props:t}},[n("a",{staticClass:"text-red",staticStyle:{cursor:"pointer",padding:"5px"},on:{click:function(n){return e.del(t.row)}}},[n("q-icon",{attrs:{size:"md",name:"delete"}}),n("q-tooltip",{attrs:{delay:1e3,offset:[0,10]}},[e._v("eliminar")])],1)])],1)]}}])})],1),n("div",{staticClass:"col-1"})])])])},r=[],a=(n("4de4"),n("c740"),n("a434"),n("96cf"),n("c973")),i=n.n(a),s=n("9f21"),c={name:"expenses-types",mixins:[s["a"]],data:function(){return{type:{},columns:[{name:"name",align:"center",label:"Nombre",field:"name",sortable:!0},{name:"color",align:"center",label:"Color",field:"color",sortable:!0},{name:"ops",align:"center",label:"Opciones",field:"ops",sortable:!0}],data:[]}},mounted:function(){this.getData()},methods:{save:function(){""!==this.type.nombre?(this.type.id=Date.now(),this.addToCollection("tipos",this.type),this.data.push(this.type),this.type={},this.alert("positive","Tipo agregado")):this.alert("negative","El nombre es obligatorio")},getData:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDataCollection("tipos","id","desc");case 2:e.data=t.sent;case 3:case"end":return t.stop()}}),t)})))()},del:function(e){var t=this;return i()(regeneratorRuntime.mark((function n(){var o,r,a,i,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getDataCollection("gastos","id","desc");case 2:if(o=n.sent,r=o.filter((function(t){return t.tipo.id===e.id})),!(r.length>0)){n.next=13;break}if(a=confirm("Este tipo de gasto tiene asociado gastos, si lo eliminas, la gráfica relacionada con los tipos de gastos puede que se dañe el mes que se generen"),!a){n.next=11;break}return i=t.data.findIndex((function(t){return t.id===e.id})),t.data.splice(i,1),n.next=11,t.deleteDataCollection("tipos",e.id);case 11:n.next=17;break;case 13:return s=t.data.findIndex((function(t){return t.id===e.id})),t.data.splice(s,1),n.next=17,t.deleteDataCollection("tipos",e.id);case 17:case"end":return n.stop()}}),n)})))()},update:function(e,t,n){t[n]=e.value,this.updateDataOnCollectionById("tipos",t.id,t)}}},l=c,u=(n("4bb5"),n("2877")),d=n("9989"),p=n("0378"),f=n("27f9"),m=n("0016"),b=n("7cbe"),g=n("b498"),h=n("9c40"),v=n("eb85"),y=n("eaac"),k=n("bd08"),w=n("db86"),x=n("42a1"),q=n("05c0"),C=n("eebe"),_=n.n(C),D=Object(u["a"])(l,o,r,!1,null,"4714f107",null);t["default"]=D.exports;_()(D,"components",{QPage:d["a"],QForm:p["a"],QInput:f["a"],QIcon:m["a"],QPopupProxy:b["a"],QColor:g["a"],QBtn:h["a"],QSeparator:v["a"],QTable:y["a"],QTr:k["a"],QTd:w["a"],QPopupEdit:x["a"],QTooltip:q["a"]})}}]);