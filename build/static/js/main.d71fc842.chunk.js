/*! For license information please see main.d71fc842.chunk.js.LICENSE.txt */
(this["webpackJsonptime-series-dashboard"]=this["webpackJsonptime-series-dashboard"]||[]).push([[0],{46:function(e,t,a){var n=n||"undefined"!==typeof navigator&&navigator.msSaveOrOpenBlob&&navigator.msSaveOrOpenBlob.bind(navigator)||function(e){"use strict";if("undefined"===typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var t=e.document,a=e.URL||e.webkitURL||e,n=t.createElementNS("http://www.w3.org/1999/xhtml","a"),r=!e.externalHost&&"download"in n,o=e.webkitRequestFileSystem,i=e.requestFileSystem||o||e.mozRequestFileSystem,c=function(t){(e.setImmediate||e.setTimeout)((function(){throw t}),0)},s=0,l=[],m=function(){for(var e=l.length;e--;){var t=l[e];"string"===typeof t?a.revokeObjectURL(t):t.remove()}l.length=0},u=function(e,t,a){for(var n=(t=[].concat(t)).length;n--;){var r=e["on"+t[n]];if("function"===typeof r)try{r.call(e,a||e)}catch(o){c(o)}}},d=function(a,c){var m,d,p,f=this,h=a.type,b=!1,E=function(){var t=(e.URL||e.webkitURL||e).createObjectURL(a);return l.push(t),t},v=function(){u(f,"writestart progress write writeend".split(" "))},g=function(){!b&&m||(m=E()),d?d.location.href=m:window.open(m,"_blank"),f.readyState=f.DONE,v()},N=function(e){return function(){if(f.readyState!==f.DONE)return e.apply(this,arguments)}},O={create:!0,exclusive:!1};if(f.readyState=f.INIT,c||(c="download"),r){m=E(),t=e.document,(n=t.createElementNS("http://www.w3.org/1999/xhtml","a")).href=m,n.download=c;var y=t.createEvent("MouseEvents");return y.initMouseEvent("click",!0,!1,e,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(y),f.readyState=f.DONE,void v()}e.chrome&&h&&"application/octet-stream"!==h&&(p=a.slice||a.webkitSlice,a=p.call(a,0,a.size,"application/octet-stream"),b=!0),o&&"download"!==c&&(c+=".download"),("application/octet-stream"===h||o)&&(d=e),i?(s+=a.size,i(e.TEMPORARY,s,N((function(e){e.root.getDirectory("saved",O,N((function(e){var t=function(){e.getFile(c,O,N((function(e){e.createWriter(N((function(t){t.onwriteend=function(t){d.location.href=e.toURL(),l.push(e),f.readyState=f.DONE,u(f,"writeend",t)},t.onerror=function(){var e=t.error;e.code!==e.ABORT_ERR&&g()},"writestart progress write abort".split(" ").forEach((function(e){t["on"+e]=f["on"+e]})),t.write(a),f.abort=function(){t.abort(),f.readyState=f.DONE},f.readyState=f.WRITING})),g)})),g)};e.getFile(c,{create:!1},N((function(e){e.remove(),t()})),N((function(e){e.code===e.NOT_FOUND_ERR?t():g()})))})),g)})),g)):g()},p=d.prototype,f=function(e,t){return new d(e,t)};return p.abort=function(){this.readyState=this.DONE,u(this,"abort")},p.readyState=p.INIT=0,p.WRITING=1,p.DONE=2,p.error=p.onwritestart=p.onprogress=p.onwrite=p.onabort=p.onerror=p.onwriteend=null,e.addEventListener("unload",m,!1),f.unload=function(){m(),e.removeEventListener("unload",m,!1)},f}}("undefined"!==typeof window.self&&window.self||"undefined"!==typeof window&&window||this.content);e.exports=n},52:function(e,t,a){e.exports=a(88)},57:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(42),i=a.n(o),c=(a(57),a(2)),s=a(3),l=a(5),m=a(4),u=a(8),d=a(7),p=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={gerarSeriesHabilitado:n.props.isSintetico?"":"nav-item-disabled"},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("div",{className:"logo"},r.a.createElement(u.b,{to:"/",className:"simple-text"},"TS Forecast Analysis")),r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"nav-item "+this.state.gerarSeriesHabilitado},r.a.createElement(u.c,{className:"nav-link",to:"/gerarSeries"},r.a.createElement("p",null,"Gerar s\xe9ries"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{className:"nav-link",to:"/importarPredicoes"},r.a.createElement("p",null,"Importar predi\xe7\xf5es"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(u.c,{className:"nav-link",to:"/metricas"},r.a.createElement("p",null,"M\xe9tricas"))))))}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"In\xedcio")))}}]),a}(n.Component),h=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",null,r.a.createElement("ul",{className:"footer-menu"},r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Home"))),r.a.createElement("p",{className:"copyright text-center"},"\xa9 2020"))))}}]),a}(n.Component),b=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isVersaoReduzida:!0,seriesTemporaisMetricas:JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas"))},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},null==this.state.seriesTemporaisMetricas?r.a.createElement("p",null,'V\xe1 em "IMPORTAR PREDI\xc7\xd5ES" para gerar as m\xe9tricas das suas s\xe9ries temporais!'):r.a.createElement("div",null,this.state.isVersaoReduzida?r.a.createElement(d.a,{from:"*",to:"/metricasReduzidas"}):r.a.createElement(d.a,{from:"*",to:"/metricasCompletas"}))))}}]),a}(n.Component),E=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={seriesTemporaisMetricas:JSON.parse(localStorage.getItem("@time-series-dashboard/seriesTemporaisMetricas"))},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},this.state.seriesTemporaisMetricas.map((function(e){return r.a.createElement("div",null,r.a.createElement("h4",null,e.nome," - (",e.modelo,")"),r.a.createElement("hr",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5"},r.a.createElement("img",{className:"img-fluid",src:"data:image/jpeg;base64,".concat(e.imagem),alt:e.nome})),r.a.createElement("div",{className:"col-7"},r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,e.metricas.map((function(e){return e.metrica})).map((function(e){return r.a.createElement("th",null,r.a.createElement("b",null,e))})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,e.metricas.map((function(e){return e.valor})).map((function(e){return r.a.createElement("td",null,e)}))))))))}))))}}]),a}(n.Component),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("p",null,"M\xe9tricas completas")))}}]),a}(n.Component),g=a(50),N=a(15),O=a(43),y=a.n(O).a.create({baseURL:"https://tsforecastanalysisapi.herokuapp.com/",responseType:"json"}),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-input"},r.a.createElement("label",null,r.a.createElement("h3",{className:"card-input-title"},"Dados reais"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",required:!0,onChange:function(t){return e.props.onDadosReaisChange(t,e.props.id)},accept:".csv"})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-input"},r.a.createElement("label",null,r.a.createElement("h3",{className:"card-input-title"},"Predi\xe7\xe3o"),r.a.createElement("br",null),r.a.createElement("input",{type:"file",required:!0,onChange:function(t){return e.props.onPredicoesChange(t,e.props.id)},accept:".csv"})))),r.a.createElement("div",{className:"col-md-4"},r.a.createElement("div",{className:"card card-input"},r.a.createElement("label",null,r.a.createElement("h3",{className:"card-input-title"},"Modelo utilizado"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",className:"form-control",placeholder:"ARIMA",required:!0,onChange:function(t){return e.props.onNomeModeloChange(t,e.props.id)}}))))),r.a.createElement("br",null))}}]),a}(n.Component),w=function(e){return new Promise((function(t){var a=new FileReader;a.onload=function(e){t(e.target.result)},a.readAsDataURL(e)}))},S=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={dados:[],inputsPredicoes:[r.a.createElement(j,{id:0,onDadosReaisChange:function(e,t){return n.onDadosReaisChange(e,t)},onPredicoesChange:function(e,t){return n.onPredicoesChange(e,t)},onNomeModeloChange:function(e,t){return n.onNomeModeloChange(e,t)}})]},n.appendInputPredicoes=n.appendInputPredicoes.bind(Object(N.a)(n)),n.onFormSubmit=n.onFormSubmit.bind(Object(N.a)(n)),n.onDadosReaisChange=n.onDadosReaisChange.bind(Object(N.a)(n)),n.onPredicoesChange=n.onPredicoesChange.bind(Object(N.a)(n)),n.onNomeModeloChange=n.onNomeModeloChange.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"appendInputPredicoes",value:function(){var e=this;this.setState({inputsPredicoes:[].concat(Object(g.a)(this.state.inputsPredicoes),[r.a.createElement(j,{id:this.state.dados.length,onDadosReaisChange:function(t,a){return e.onDadosReaisChange(t,a)},onPredicoesChange:function(t,a){return e.onPredicoesChange(t,a)},onNomeModeloChange:function(t,a){return e.onNomeModeloChange(t,a)}})])})}},{key:"onFormSubmit",value:function(e){var t=this;e.preventDefault();var a=[];new Promise((function(e,n){t.state.dados.forEach((function(n,r){w(n.dadosReais).then((function(o){w(n.predicoes).then((function(i){a.push({nomeModelo:n.nomeModelo,dadosReais:o,predicoes:i}),r===t.state.dados.length-1&&e()}))}))}))})).then((function(){y.post("/metricas",a).then((function(e){console.log(e.data),localStorage.setItem("@time-series-dashboard/seriesTemporaisMetricas",JSON.stringify(e.data)),alert("Importa\xe7\xe3o realizada com sucesso!")})).catch((function(e){alert("Ocorreu um erro ao tentar importar os arquivos."),console.log(e)}))}))}},{key:"onDadosReaisChange",value:function(e,t){this.initInDadosIfNotExists(t),this.state.dados[t].dadosReais=e.target.files[0]}},{key:"onPredicoesChange",value:function(e,t){this.initInDadosIfNotExists(t),this.state.dados[t].predicoes=e.target.files[0]}},{key:"onNomeModeloChange",value:function(e,t){this.initInDadosIfNotExists(t),this.state.dados[t].nomeModelo=e.target.value}},{key:"initInDadosIfNotExists",value:function(e){null==this.state.dados.find((function(t){return t.id===e}))&&this.state.dados.push({id:e,nomeModelo:"",dadosReais:null,predicoes:null})}},{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("form",{id:"form-importar-predicoes",onSubmit:this.onFormSubmit,encType:"multipart/form-data"},this.state.inputsPredicoes.map((function(e){return e})),r.a.createElement("input",{className:"btn-centralized btn-primary",type:"submit",value:"Enviar"})),r.a.createElement("button",{type:"button",className:"btn-centralized btn-primary",onClick:this.appendInputPredicoes},"Adicionar novos dados")))}}]),a}(n.Component),C=a(29),k=a.n(C),R=a(31),I=a(44),M=a(101),D=a(103),P=a(102),T=a(45),x=a.n(T),F=a(46),z=a.n(F),L=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={isLoading:!0,ts:[]},n.donwloadFiles=n.donwloadFiles.bind(Object(N.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("button",{type:"button",className:"btn-primary btn-centralized",onClick:this.donwloadFiles},"Baixar s\xe9ries temporais"),r.a.createElement(M.a,{className:"grid-list-title",cellHeight:"auto",cols:2},this.state.ts.map((function(e){return r.a.createElement(D.a,{key:e.nome},r.a.createElement("img",{src:"data:image/jpeg;base64,".concat(e.imagem),alt:e.nome}),r.a.createElement(P.a,{title:e.nome,titlePosition:"top",actionPosition:"left",className:"grid-list-title-bar"}))})))))}},{key:"donwloadFiles",value:function(){var e=new x.a;this.state.ts.forEach((function(t){e.file(t.nome+".csv",t.csv,{base64:!0}),e.file(t.nome+".png",t.imagem,{base64:!0})})),e.generateAsync({type:"blob"}).then((function(e){z()(e,"s\xe9ries temporais.zip")}))}},{key:"componentDidMount",value:function(){var e=Object(I.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get("seriesTemporaisSinteticas");case 2:t=e.sent,console.log(t.data),this.setState(Object(R.a)(Object(R.a)({},this.state),{isLoading:!1,ts:t.data}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),a}(n.Component),A=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-panel"},r.a.createElement(f,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/gerarSeries",component:L}),r.a.createElement(d.b,{path:"/importarPredicoes",component:S}),r.a.createElement(d.b,{path:"/metricas",component:b}),r.a.createElement(d.b,{path:"/metricasReduzidas",component:E}),r.a.createElement(d.b,{path:"/metricasCompletas",component:v}),this.props.isSintetico?r.a.createElement(d.a,{from:"*",to:"/gerarSeries"}):r.a.createElement(d.a,{from:"*",to:"/importarPredicoes"})),r.a.createElement(h,null))}}]),a}(n.Component),U=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.location.data;return r.a.createElement("div",{className:"wrapper"},r.a.createElement(u.a,null,r.a.createElement(p,{isSintetico:e.isSintetico}),r.a.createElement(d.b,{path:"/",render:function(t){return r.a.createElement(A,Object.assign({},t,{isSintetico:e.isSintetico}))}})))}}]),a}(n.Component),q=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),n=t.call(this,e),localStorage.clear(),n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"vertical-center"},r.a.createElement("ul",{className:"ul-without-bullets"},r.a.createElement("li",null,r.a.createElement(u.b,{to:{pathname:"/init",data:{isSintetico:!0}}},r.a.createElement("button",{type:"button",className:"btn-primary"},"Dados sint\xe9ticos"))),r.a.createElement("li",null,r.a.createElement(u.b,{to:{pathname:"/init",data:{isSintetico:!1}}},r.a.createElement("button",{type:"button",className:"btn-primary"},"Dados reais")))))))}}]),a}(n.Component),B=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/init",component:U}),r.a.createElement(d.b,{path:"/selecao",component:q}),r.a.createElement(d.a,{from:"*",to:"/selecao"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(85),a(86),a(87);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.d71fc842.chunk.js.map