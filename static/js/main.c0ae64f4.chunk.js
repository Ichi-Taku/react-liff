(this["webpackJsonpreact-liff"]=this["webpackJsonpreact-liff"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),i=t.n(o),a=t(2),c=t.n(a),r=(t(9),t(3)),l=(t(10),function(){var e=Object(o.useState)(),n=Object(r.a)(e,2),t=n[0],a=n[1];return i.a.createElement("div",{className:"App"},i.a.createElement("button",{className:"button",onClick:function(){liff.init({liffId:"1654378552-7Xrpwr3D"}).then((function(){liff.isLoggedIn()||liff.login({});var e={id_token:liff.getIDToken(),client_id:"1654378552"};fetch("https://api.line.me/oauth2/v2.1/verify",{body:JSON.stringify(e)}).then((function(e){a("soiya")})).catch((function(e){a("\u30a8\u30e9\u30fc\uff01")}))}))}},"Send Message"),i.a.createElement("p",null," ",t," "))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c0ae64f4.chunk.js.map