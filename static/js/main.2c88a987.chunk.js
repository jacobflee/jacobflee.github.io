(this.webpackJsonpanimations=this.webpackJsonpanimations||[]).push([[0],{119:function(t,e,n){t.exports=n(402)},123:function(t,e,n){},401:function(t,e,n){},402:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),o=n(14),r=n.n(o),s=(n(123),n(111)),h=n(112),c=n(24),u=n(118),l=n(117);n(124);var d=function(t){var e=t.draw,n=t.width,o=t.height,r=Object(a.useRef)(null);return Object(a.useEffect)((function(){var t,n=r.current.getContext("2d"),a=0;return function i(){a++,e(n,a),t=window.requestAnimationFrame(i)}(),function(){console.log("whats this"),window.cancelAnimationFrame(t)}}),[e]),i.a.createElement("canvas",{className:"border",ref:r,width:n,height:o})},w=(n(401),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);var a="Math.sin(x*Math.pow(t, 0.2)) > Math.cos(y*Math.pow(t, 0.2)) && x*x + y*y < t*t";return(t=e.call(this)).state={imgSrc:"https://www.visitaparadise.com/wp-content/themes/yootheme/cache/sunset-d863fdd4.jpeg",width:Math.min(window.innerWidth-8,window.innerHeight-8),height:Math.min(window.innerWidth-8,window.innerHeight-8),equation:a,conditions:new Function("x","y","t","return ("+a+")"),isValid:!1},t.draw=t.draw.bind(Object(c.a)(t)),t.handleChange=t.handleChange.bind(Object(c.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(c.a)(t)),t.isValidEquation=t.isValidEquation.bind(Object(c.a)(t)),t}return Object(h.a)(n,[{key:"draw",value:function(t,e){for(var n,a,i=t.createImageData(t.canvas.width,t.canvas.height),o=i.data,r=0,s=0,h=0;h<o.length;h+=4){n=r+1-this.state.width/2,a=this.state.height/2-s;var c,u=e%300;c=u<150?u:300-u-1,this.state.conditions(n,a,c)&&(o[h]=3*c%256,o[h+1]=2*c%256,o[h+2]=5*c%256),o[h+3]=255,++r===this.state.width&&(r=0,s++)}t.putImageData(i,0,0)}},{key:"isValidEquation",value:function(t){try{new Function("x","y","t","return ("+t+")")(0,0,0)}catch(e){return this.setState({isValid:!0}),!1}return this.setState({isValid:!1}),!0}},{key:"handleChange",value:function(t){this.setState({equation:t.target.value})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.isValidEquation(this.state.equation)&&this.setState({conditions:new Function("x","y","t","return ("+this.state.equation+")")})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",value:this.state.equation,onChange:this.handleChange}),i.a.createElement("button",null,"Enter"),i.a.createElement("span",{style:{display:this.state.isValid?"block":"none"}},"invalid equation syntax")),i.a.createElement("br",null),i.a.createElement(d,{draw:this.draw,width:this.state.width,height:this.state.height,source:this.state.imgSrc}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.2c88a987.chunk.js.map