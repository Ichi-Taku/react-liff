(this["webpackJsonpreact-liff"]=this["webpackJsonpreact-liff"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),i=t(2),a=t.n(i),r=(t(9),t(3)),l=(t(10),function(){var e=Object(o.useState)(),n=Object(r.a)(e,2),t=n[0],i=n[1];return c.a.createElement("div",{className:"App"},c.a.createElement("button",{className:"button",onClick:function(){liff.init({liffId:"1654378552-7Xrpwr3D"}).then((function(){liff.isLoggedIn()||liff.login({});liff.getIDToken();fetch("https://api.line.me/oauth2/v2.1/verify").then((function(e){return console.log("\u6210\u529f\u3057\u3066\u3044\u308b"),e.json()})).then((function(e){console.log("\u5931\u6557\u3057\u3066\u3044\u308b"),i(e)})).catch((function(e){return console.log("\u30a8\u30e9\u30fc\u51fa\u3066\u3044\u308b")}))}))}},"Send Message"),t)});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.df6f22ee.chunk.js.map