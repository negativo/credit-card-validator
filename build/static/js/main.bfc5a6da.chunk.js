(this.webpackJsonppaw=this.webpackJsonppaw||[]).push([[0],{12:function(n,e,r){n.exports=r(21)},17:function(n,e,r){},18:function(n,e,r){},21:function(n,e,r){"use strict";r.r(e);var t=r(0),a=r.n(t),i=r(7),o=r.n(i),u=(r(17),r(18),r(11)),c=r(1),l=r(2);function d(){var n=Object(c.a)(["\n  font-size: 14px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #1a3b5d;\n  width: 100%;\n  display: block;\n  user-select: none;\n"]);return d=function(){return n},n}var p=l.a.div(d()),s=function(n){var e=n.children;return a.a.createElement(p,null,e)};function f(){var n=Object(c.a)(["\n  font-size: 18px;\n  border: 2px solid;\n\n  height: 40px;\n  border-color: ",";\n  border-radius: 5px;\n  padding-left: 5px;\n  padding-right: 5px;\n  :focus {\n    outline: none;\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n"]);return m=function(){return n},n}var x=l.a.div(m()),h=l.a.input(f(),(function(n){return n.isValid?"green":"tomato"})),g=function(n){var e=n.onChange,r=n.isValid,t=n.label,i=n.value;return a.a.createElement(x,null,a.a.createElement(s,null,t),a.a.createElement(h,{value:i,type:"text",onChange:e,isValid:r}))};function b(){var n=Object(c.a)(["\n  margin: auto;\n  width: 100%;\n  max-width: 570px;\n  box-sizing: border-box;\n  background: #fff;\n  box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);\n  border-radius: 10px;\n  padding: 35px;\n\n  @media screen and (max-width: 576px) {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 100%;\n    padding-right: 10px;\n    padding-left: 10px;\n  }\n"]);return b=function(){return n},n}var v=l.a.div(b()),w=function(n){var e=n.children;return a.a.createElement(v,null,e)};function E(){var n=Object(c.a)(["\n  width: 100%;\n  height: 55px;\n  line-height: 55px;\n  background: ",";\n  border: none;\n  border-radius: 5px;\n  font-size: 22px;\n  font-weight: 500;\n  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);\n  color: #fff;\n  margin-top: 20px;\n  cursor: pointer;\n  cursor: ",";\n\n  @media screen and (max-width: 480px) {\n    margin-top: 10px;\n  }\n"]);return E=function(){return n},n}var j=l.a.div(E(),(function(n){return n.disabled?"#aaa":"#2364d2"}),(function(n){return n.disabled?"default":"pointer"})),k=function(n){var e=n.disabled,r=n.children;return a.a.createElement(j,{disabled:e},r)},O=[{name:"Visa",rule:/^(?:4[0-9]{12}(?:[0-9]{3})?)$/},{name:"Mastercard",rule:/^(?:5[1-5][0-9]{14})$/},{name:"Amex",rule:/^(?:3[47][0-9]{13})$/}],$=function(n,e,r){var t=e;return r%2!==0&&(t=(t=2*e)>9?t-9:t),n+t},y=function(n){var e=n.replace(/ /g,"");return O.find((function(n){return n.rule.test(e)}))},V=function(n){var e=n.replace(/ /g,"");return!!function(n){return O.some((function(e){return e.rule.test(n)}))}(e)&&e.split("").reverse().map((function(n){return parseInt(n,10)})).reduce($)%10===0},z=function(n){n.children;var e=Object(t.useState)(""),r=Object(u.a)(e,2),i=r[0],o=r[1],c=y(i);return a.a.createElement(w,null,a.a.createElement(g,{onChange:function(n){if(n.currentTarget.value.length>19)return!1;var e=function(n){var e=y(n);return e&&"Amex"===e.name?n.replace(/[^\d0-9]/g,"").replace(/(.{4})/,"$1 ").replace(/(.{12})/,"$1 ").trim():n.replace(/[^\d0-9]/g,"").replace(/(.{4})/g,"$1 ").trim()}(n.currentTarget.value);o(e)},label:"Card Number".concat(c?": "+c.name:""),isValid:!!i&&V(i),value:i}),a.a.createElement("p",null),a.a.createElement(k,{disabled:!V(i)},"Submit"))};var A=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.bfc5a6da.chunk.js.map