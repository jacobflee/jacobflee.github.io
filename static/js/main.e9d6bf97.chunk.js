(this.webpackJsonppaintingsrepository=this.webpackJsonppaintingsrepository||[]).push([[0],{26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n(1),i=n.n(r),s=n(18),l=n.n(s),j=(n(26),n(8)),o=n(2),b=n(19);n.n(b).a.ajax({url:"/photos/",dataType:"json",async:!1,success:function(e){a=e}});var u=a;var h=function(){var e=u.map((function(e){return Object(c.jsx)("div",{className:"photo-preview-container",children:Object(c.jsx)(j.b,{to:"/"+e,children:Object(c.jsx)("img",{className:"photo-preview",src:"/photos/"+e,alt:"oops"})})},e)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title",children:" Paintings Repository "}),Object(c.jsx)(j.b,{to:"/animation",children:Object(c.jsx)("div",{className:"photo-preview-container",children:Object(c.jsx)("img",{className:"photo-preview",src:"blank.png",alt:"oops"})})}),e]})};var d=function(){var e=Object(o.f)().id,t=e.indexOf("___"),n=e.substring(0,t).replaceAll("_"," "),a=e.substring(t+3,e.length-4).replaceAll("_"," ");return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)(j.b,{to:"/",children:Object(c.jsxs)("button",{children:[" ","<"," "]})}),Object(c.jsxs)("div",{className:"painting-title",children:[Object(c.jsx)("span",{className:"artwork",children:a}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{className:"artist",children:n}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]}),Object(c.jsx)("img",{className:"photo-preview",src:"/photos/"+e,alt:"oops"})]})},O=n(10),p=n(7),x=n(11);var m=function(e,t,n,a,c,r,i){for(var s,l,j,o,b,u,h,d=r?e.getImageData(0,0,e.canvas.width,e.canvas.height):e.createImageData(e.canvas.width,e.canvas.height),O=d.data,p=0,x=0,m=0;m<O.length;m+=4,p++){p===n&&(p=0,x++),s=p+1-Math.floor(n/2),l=Math.floor(a/2)-x;var g=t%(2*c);j=g<c?g:2*c-g-1,o=O[m],b=O[m+1],u=O[m+2],h=O[m+3],i.graph(s,l,j,o,b,u,h)&&(O[m]=i.red(s,l,j,o,b,u,h),O[m+1]=i.green(s,l,j,o,b,u,h),O[m+2]=i.blue(s,l,j,o,b,u,h)),O[m+3]=i.alpha(s,l,j,o,b,u,h)}e.putImageData(d,0,0)};var g=function(e){var t=e.width,n=e.height,a=e.tmax,i=e.reuse,s=e.condition,l=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=l.current.getContext("2d"),c=0;return function r(){m(e,c,t,n,a,i,s),c=window.requestAnimationFrame(r)}(),function(){window.cancelAnimationFrame(c)}}),[t,n,a,i,s]),Object(c.jsx)("canvas",{className:"animation",ref:l,width:t,height:n})};var v=function(e){var t=e.tmax,n=e.reuse,a=e.equation,r=e.inputValid,i=e.component,s=e.handleChange,l=e.handleSubmit;return Object(c.jsx)("div",{className:"graph",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("label",{className:"graph-title",children:" graph "}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("label",{children:" Equation "}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{name:"equation",id:"graph",value:a,onChange:s}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" Operation "}),Object(c.jsxs)("select",{name:"operation",id:"graph",onChange:s,children:[Object(c.jsx)("option",{}),Object(c.jsx)("option",{value:"&&",children:" AND "}),Object(c.jsx)("option",{value:"||",children:" OR "})]}),Object(c.jsx)("button",{id:"graph",onClick:l,children:" Add "}),Object(c.jsx)("br",{}),!r&&Object(c.jsx)("span",{className:"error-message",children:"invalid syntax"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" T Max "}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"number",name:"tmax",value:t,onChange:s}),Object(c.jsx)("br",{}),Object(c.jsx)("input",{type:"checkbox",name:"reuse",checked:n,onChange:s}),Object(c.jsx)("label",{children:" Reuse Canvas "})]}),Object(c.jsx)("div",{className:"column",children:i})]})})};var f=function(e){var t=e.id,n=e.equation,a=e.inputValid,r=e.component,i=e.handleChange,s=e.handleSubmit;return Object(c.jsx)("div",{className:t,children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("label",{className:t+"-title",children:[" ",t," "]}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{className:"column",children:[Object(c.jsx)("label",{children:" Equation "}),Object(c.jsx)("br",{}),Object(c.jsx)("textarea",{name:"equation",id:t,value:n,onChange:i}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:" Operation "}),Object(c.jsxs)("select",{name:"operation",id:t,onChange:i,children:[Object(c.jsx)("option",{}),Object(c.jsx)("option",{value:"+",children:" + "}),Object(c.jsx)("option",{value:"-",children:" - "}),Object(c.jsx)("option",{value:"*",children:" * "}),Object(c.jsx)("option",{value:"/",children:" / "}),Object(c.jsx)("option",{value:"%",children:" % "})]}),Object(c.jsx)("button",{id:t,onClick:s,children:" Add "}),Object(c.jsx)("br",{}),a?Object(c.jsx)("br",{}):Object(c.jsx)("span",{className:"error-message",children:"invalid syntax"})]}),Object(c.jsx)("div",{className:"column",children:r})]})})};var q=function(e){var t=e.tmax,n=e.reuse,a=e.equation,r=e.validity,i=e.component,s=e.handleChange,l=e.handleSubmit,j=["red","green","blue","alpha"].map((function(e){return Object(c.jsx)(f,{id:e,equation:a[e],inputValid:r[e],component:i[e],handleChange:s,handleSubmit:l},e)}));return Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)(v,{tmax:t,reuse:n,equation:a.graph,inputValid:r.graph,component:i.graph,handleChange:s,handleSubmit:l}),j]})};var C=function(){var e=Math.floor(Math.min(.9*window.innerWidth,.9*window.innerHeight)),t=e,n=Object(r.useState)(200),a=Object(x.a)(n,2),i=a[0],s=a[1],l=Object(r.useState)(!0),j=Object(x.a)(l,2),o=j[0],b=j[1],u=Object(r.useState)({graph:null,red:null,green:null,blue:null,alpha:null}),h=Object(x.a)(u,2),d=h[0],m=h[1],v=Object(r.useState)({graph:"",red:"",green:"",blue:"",alpha:""}),f=Object(x.a)(v,2),C=f[0],w=f[1],y=Object(r.useReducer)((function(e,t){var n=t.name,a=t.id,c=t.value,r=[];return"equation"===n?(e[a].forEach((function(e){r.push(e)})),r.push({op:d[a],eq:C[a]}),1===r.length&&(r[0].op=null)):"remove"===n&&(e[a].forEach((function(e){e.eq!==c&&r.push(e)})),r[0]&&r[0].op&&(r[0].op=null)),Object(p.a)(Object(p.a)({},e),{},Object(O.a)({},a,r))}),{graph:[{op:null,eq:"x*x + y*y < t*t"},{op:"&&",eq:"Math.cos(t*x)>Math.sin(y)"},{op:"||",eq:"Math.cos(t*y)>Math.sin(y)"}],red:[{op:null,eq:"(3 * t) % 256"},{op:"-",eq:"(Math.cos(t*y)>Math.sin(y) ? -100 : 0)"}],green:[{op:null,eq:"(5 * t) % 256"}],blue:[{op:null,eq:"(2 * t) % 256"},{op:"+",eq:"(x*x + y*y < t*t ? -100 : 0)"}],alpha:[{op:null,eq:"255"}]}),N=Object(x.a)(y,2),k=N[0],S=N[1],M=Object(r.useState)({graph:!0,red:!0,green:!0,blue:!0,alpha:!0}),F=Object(x.a)(M,2),A=F[0],R=F[1],E={graph:Object(r.useCallback)(new Function("x","y","t","r","g","b","a","return "+I("graph")),[k.graph]),red:Object(r.useCallback)(new Function("x","y","t","r","g","b","a","return "+I("red")),[k.red]),green:Object(r.useCallback)(new Function("x","y","t","r","g","b","a","return "+I("green")),[k.green]),blue:Object(r.useCallback)(new Function("x","y","t","r","g","b","a","return "+I("blue")),[k.blue]),alpha:Object(r.useCallback)(new Function("x","y","t","r","g","b","a","return "+I("alpha")),[k.alpha])},D={graph:Object(r.useCallback)(_("graph"),[k.graph]),red:Object(r.useCallback)(_("red"),[k.red]),green:Object(r.useCallback)(_("green"),[k.green]),blue:Object(r.useCallback)(_("blue"),[k.blue]),alpha:Object(r.useCallback)(_("alpha"),[k.alpha])};function I(e){var t="";return k[e].forEach((function(e){e.op&&(t+=e.op),t+=e.eq})),t}function _(e){return k[e].map((function(t){var n="";return t.op&&(n+="&&"===t.op?"AND ":"||"===t.op?"OR ":t.op+" "),n+=t.eq,Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{name:"remove",id:e,value:t.eq,onClick:T,children:" X "}),Object(c.jsxs)("span",{children:[" ",n," "]})]},t.eq)}))}function T(e){var t=e.target,n=t.name,a=t.id,c=t.value,r=t.checked;"tmax"===n?s(c):"reuse"===n?b(r):"operation"===n?m(Object(p.a)(Object(p.a)({},d),{},Object(O.a)({},a,c))):"equation"===n?w(Object(p.a)(Object(p.a)({},C),{},Object(O.a)({},a,c))):S({name:"remove",id:a,value:c})}return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"title",children:" Animations "}),Object(c.jsx)(g,{width:e,height:t,tmax:i,reuse:o,condition:E}),Object(c.jsx)("br",{}),Object(c.jsx)(q,{tmax:i,reuse:o,equation:C,validity:A,component:D,handleChange:T,handleSubmit:function(e){e.preventDefault();var t=e.target.id;console.log(t);var n=function(e){var t=d[e],n=C[e];if(!t&&k[e].length>0||0===n.trim().length)return!1;for(var a=0;a<k[e].length;a++)if(k[e][a].eq===n)return!1;return!0}(t);R(Object(p.a)(Object(p.a)({},A),{},Object(O.a)({},t,n))),n&&S({name:"equation",id:t})}})]})};var w=function(){return Object(c.jsx)("div",{children:Object(c.jsx)(j.a,{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{path:"/",exact:!0,component:h}),Object(c.jsx)(o.a,{path:"/animation",exact:!0,component:C}),Object(c.jsx)(o.a,{path:"/:id",exact:!0,component:d}),Object(c.jsx)(o.a,{path:"/",render:function(){return Object(c.jsx)("div",{children:"404 ERROR"})}})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.e9d6bf97.chunk.js.map