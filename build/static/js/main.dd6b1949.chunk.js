(window.webpackJsonpacoes=window.webpackJsonpacoes||[]).push([[0],{36:function(e,t,n){e.exports=n(73)},47:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=n(17),s=n.n(o),u=n(31),i=n(18),m=n(76),p=n(77),f=n(35),d=n(78),h=n(9),E=(n(47),n(32)),v=n.n(E).a.create({responseType:"json"});var g=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),o=Object(i.a)(l,2),E=o[0],g=o[1],w=function(){var e=Object(u.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/apiAcoes");case 2:t=e.sent,n=t.data.acoes,c(n),g(n);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)(function(){return w()},[]),r.a.createElement(h.PullToRefresh,{pullDownContent:r.a.createElement(h.PullDownContent,null),releaseContent:r.a.createElement(h.ReleaseContent,null),refreshContent:r.a.createElement(h.RefreshContent,null),pullDownThreshold:200,onRefresh:w,triggerHeight:50,backgroundColor:"white",startInvisible:!0},r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{bg:"dark",variant:"dark"},r.a.createElement(m.a.Brand,{href:"#home"}," Cota\xe7\xf5es Hoje"),r.a.createElement(p.a,{inline:!0},r.a.createElement(f.a,{type:"text",placeholder:"Search",className:"mr-sm-2",onChange:function(e){return t=e.target.value.toUpperCase(),g(n.filter(function(e){return e.nome.includes(t)}));var t}}))),E.length>0?r.a.createElement(r.a.Fragment,null,E.map(function(e){var t=e._id,n=e.nome,a=e.ultima,c=e.data,l=e.variacao;return r.a.createElement(d.a,{key:t,className:"text-center"},r.a.createElement(d.a.Body,null,n,"  R$",a,"  ",c,r.a.createElement("span",{className:"".concat(l.includes("-")?"negativo":"positivo")}," ",l," ")))})):r.a.createElement(r.a.Fragment,null," ")))};l.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.dd6b1949.chunk.js.map