(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"9f21":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("a15b"),a("26e9"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276"),a("96cf");var n=a("c973"),o=a.n(n),r=a("cf57"),i=a("4515"),s=a("af0d"),l={data:function(){return{db:{}}},created:function(){this.db=new s["a"]("db")},methods:{addToCollection:function(e,t){this.db.collection(e).add(t).then((function(e){console.log("Agregado")})).catch((function(e){console.log(e)}))},getDataCollection:function(e){var t=arguments,a=this;return o()(regeneratorRuntime.mark((function n(){var o,r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(o=t.length>1&&void 0!==t[1]?t[1]:"",r=t.length>2&&void 0!==t[2]?t[2]:"",i=[],""!==o||""!==r){n.next=8;break}return n.next=6,a.db.collection(e).get().then((function(e){i=e}));case 6:n.next=10;break;case 8:return n.next=10,a.db.collection(e).orderBy(o,r).get().then((function(e){i=e}));case 10:return n.abrupt("return",i);case 11:case"end":return n.stop()}}),n)})))()},getDataCollectionById:function(e,t){var a=arguments,n=this;return o()(regeneratorRuntime.mark((function o(){var r,i,s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(r=a.length>2&&void 0!==a[2]?a[2]:"",i=a.length>3&&void 0!==a[3]?a[3]:"",s=[],""!==r||""!==i){o.next=8;break}return o.next=6,n.db.collection(e).doc({id:t}).get().then((function(e){s=e}));case 6:o.next=10;break;case 8:return o.next=10,n.db.collection(e).doc({id:t}).orderBy(r,i).get().then((function(e){s=e}));case 10:return o.abrupt("return",s);case 11:case"end":return o.stop()}}),o)})))()},deleteDataCollection:function(e,t){var a=this;return o()(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a.db.collection(e).doc({id:t}).delete().then((function(e){console.log("Delete successful, now do something.")})).catch((function(e){console.log(e)}));case 1:case"end":return n.stop()}}),n)})))()},deleteDatabase:function(){var e=this;return o()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.db.delete();case 1:case"end":return t.stop()}}),t)})))()},isNumber:function(e){return!isNaN(parseFloat(e))&&!isNaN(e-0)},miles:function(e){if(e&&void 0!==e){"number"===typeof e&&(e=e.toString());var t=e.replace(/\./g,"");return this.isNumber(e)?isNaN(t)||(t=t.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,"$1."),t=t.split("").reverse().join("").replace(/^[.]/,"")):t="",t}},goTo:function(e){this.$router.push("/"+e).catch((function(e){e._name}))},alert:function(e,t){this.$q.notify({message:t,color:e})},activateLoading:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a={message:e};1===t?a.spinner=r["a"]:2===t&&(a.spinner=i["a"]),this.$q.loading.show(a)},disableLoading:function(){this.$q.loading.hide()}}}},f742:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-10 container"},[e._v("\n            Actualmente el análisis se encuentra diseñado para el año actual "+e._s(e.date.formatDate(new Date,"YYYY"))+".\n            "),e.valuesMonthSelected?a("div",[a("q-select",{attrs:{options:e.options,label:"Mes",required:""},on:{input:function(t){return e.init()}},scopedSlots:e._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"event"}})]},proxy:!0}],null,!1,3703588864),model:{value:e.monthSelected,callback:function(t){e.monthSelected=t},expression:"monthSelected"}}),a("br"),a("highcharts",{attrs:{options:e.chartOptions1}}),a("highcharts",{attrs:{options:e.chartOptions2}}),a("br"),a("h6",{staticClass:"text-h6 text-center"},[e._v("Tabla comparativa Ingresos - Gastos")]),a("q-table",{staticClass:"table",attrs:{dense:e.$q.screen.lt.md,data:e.dataCompativeTable,columns:e.columnsComparativeTable,"row-key":"name","rows-per-page-options":[0]},scopedSlots:e._u([{key:"body",fn:function(t){return[a("q-tr",{attrs:{props:t}},[a("q-td",{key:"detail",attrs:{props:t}},[e._v("\n                        "+e._s(t.row.detail)+"\n                      ")]),a("q-td",{key:"incoming",attrs:{props:t}},[e._v("\n                        "+e._s(e.miles(t.row.incoming))+"\n                      ")]),a("q-td",{key:"outcoming",attrs:{props:t}},[e._v("\n                        "+e._s(e.miles(t.row.outcoming))+"\n                      ")])],1)]}},{key:"bottom-row",fn:function(){return[a("q-tr",[a("q-td",{key:"detail",staticClass:"text-center"},[a("b",[e._v("Total")])]),a("q-td",{key:"incoming"}),a("q-td",{key:"outcoming",staticClass:"text-center"},[e._v("\n                        "+e._s(e.miles(e.totalComparativeTable))+"\n                      ")])],1)]},proxy:!0}],null,!1,1701062386)})],1):e._e()]),a("div",{staticClass:"col-1"})])])])},o=[],r=(a("7db0"),a("96cf"),a("c973")),i=a.n(r),s=a("9f21"),l=a("4452"),c=a("bd4c"),u={name:"analysis",mixins:[s["a"]],components:{highcharts:l["Chart"]},data:function(){return{date:c["b"],valuesMonthSelected:null,dataTiposPorMes:[],totalComparativeTable:0,columnsComparativeTable:[{name:"detail",align:"center",label:"Nombre",field:"detail",sortable:!0},{name:"incoming",align:"center",label:"Debitos",field:"incoming",sortable:!0},{name:"outcoming",align:"center",label:"Creditos",field:"outcoming",sortable:!0}],dataCompativeTable:[],monthSelected:{value:0,label:"Enero"},options:[{value:1,label:"Enero"},{value:2,label:"Febrero"},{value:3,label:"Marzo"},{value:4,label:"Abril"},{value:5,label:"Mayo"},{value:6,label:"Junio"},{value:7,label:"Julio"},{value:8,label:"Agosto"},{value:9,label:"Septiembre"},{value:10,label:"Octubre"},{value:11,label:"Noviembre"},{value:12,label:"Diciembre"}],dataTipos:[],dataGastos:[],chartOptions1:{chart:{type:"area"},title:{text:"Gastos este mes"},xAxis:{title:{text:"Dias"},categories:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]},yAxis:{title:{text:"Valor"}},plotOptions:{line:{dataLabels:{enabled:!0},enableMouseTracking:!1},area:{fillColor:{linearGradient:{x1:0,y1:0,x2:0,y2:1},stops:[[0,"#E9BC36"]]},marker:{radius:2},lineWidth:1,states:{hover:{lineWidth:1}},threshold:null}},series:[{name:"Gastos",data:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],color:"#E9BC36"}]},chartOptions2:{chart:{type:"pie"},plotOptions:{pie:{allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!0,format:"{point.name}: {point.percentage:.1f}%"},showInLegend:!0}},colorAxis:{minColor:"#F2f2f2",maxColor:"#E9BC36"},series:[{colorByPoint:!0,data:[{name:"",value:"1",color:"#E9BC36"}]}],title:{text:"Gastos por categoria"}}}},mounted:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=c["b"].formatDate(new Date,"M"),n=e.options.find((function(e){return e.value===parseInt(a)})),e.monthSelected=n,t.next=5,e.init();case 5:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getData();case 2:e.organiceByType(),e.organiceByMonth(),e.fillTable();case 5:case"end":return t.stop()}}),t)})))()},fillTable:function(){this.dataCompativeTable=[],this.totalComparativeTable=0;for(var e=this.valuesMonthSelected.incoming,t=this.dataTiposPorMes,a=0;a<e.length;a++)this.dataCompativeTable.push({detail:e[a].nombre,incoming:e[a].valor,outcoming:0}),this.totalComparativeTable=parseInt(this.totalComparativeTable)+parseInt(e[a].valor);for(var n=0;n<t.length;n++)this.dataCompativeTable.push({detail:t[n].nombre,outcoming:t[n].valor,incoming:0}),this.totalComparativeTable=parseInt(this.totalComparativeTable)-parseInt(t[n].valor)},getData:function(){var e=this;return i()(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDataCollection("tipos","id","desc");case 2:return e.dataTipos=t.sent,t.next=5,e.getDataCollection("gastos","id","desc");case 5:return e.dataGastos=t.sent,t.next=8,e.getDataCollection("ingresos","id","desc");case 8:e.dataIngresos=t.sent,e.valuesMonthSelected=e.selectMonth();case 10:case"end":return t.stop()}}),t)})))()},organiceByType:function(){this.chartOptions2.series[0].data=[];for(var e=0;e<this.dataTipos.length;e++){this.dataTiposPorMes[e]={id:this.dataTipos[e].id,valor:0,nombre:this.dataTipos[e].nombre,color:this.dataTipos[e].color};for(var t=0;t<this.valuesMonthSelected.outcoming.length;t++)this.dataTiposPorMes[e].id===this.valuesMonthSelected.outcoming[t].tipo.id&&(this.dataTiposPorMes[e].valor+=parseInt(this.valuesMonthSelected.outcoming[t].valor));this.chartOptions2.series[0].data.push({name:this.dataTiposPorMes[e].nombre,y:this.dataTiposPorMes[e].valor,color:this.dataTiposPorMes[e].color})}},organiceByMonth:function(){for(var e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],t=0;t<this.valuesMonthSelected.outcoming.length;t++){var a=new Date(this.valuesMonthSelected.outcoming[t].fecha),n=a.getUTCDate()-1;0===e[n]?e[n]=parseInt(this.valuesMonthSelected.outcoming[t].valor):e[n]+=parseInt(this.valuesMonthSelected.outcoming[t].valor)}this.chartOptions1.series[0].data=e},selectMonth:function(){var e=[],t=[];c["b"].formatDate(new Date,"M");for(var a=0;a<this.dataGastos.length;a++)parseInt(c["b"].formatDate(new Date(this.dataGastos[a].fecha),"M"))===this.monthSelected.value&&e.push(this.dataGastos[a]);for(var n=0;n<this.dataIngresos.length;n++)parseInt(c["b"].formatDate(new Date(this.dataIngresos[n].fecha),"M"))===this.monthSelected.value&&t.push(this.dataIngresos[n]);return console.log("resIngresos",t),{incoming:t,outcoming:e}}}},d=u,h=a("2877"),p=a("9989"),m=a("ddd8"),v=a("0016"),g=a("eaac"),b=a("bd08"),f=a("db86"),w=a("eebe"),T=a.n(w),x=Object(h["a"])(d,n,o,!1,null,null,null);t["default"]=x.exports;T()(x,"components",{QPage:p["a"],QSelect:m["a"],QIcon:v["a"],QTable:g["a"],QTr:b["a"],QTd:f["a"]})}}]);