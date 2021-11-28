(this.webpackJsonpautofleet=this.webpackJsonpautofleet||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(13),r=n.n(a),s=n(16),i=n(36),l=n(21),o=n(14),u={vehicles:[],filteredVehicles:[]};var d=Object(l.b)({vehicleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VEHICLES":return Object(o.a)(Object(o.a)({},e),{},{vehicles:t.vehicles});case"SET_FILTERES_VEHICLES":return Object(o.a)(Object(o.a)({},e),{},{filteredVehicles:t.vehicles});default:return e}}}),j=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,h=Object(l.d)(d,j(Object(l.a)(i.a))),b=n(19),f=n(5),p=n(7),O=n.p+"static/media/logo.9ea2b80b.png",v=n(1);function m(){var e=Object(c.useState)(!1),t=Object(p.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!0),s=Object(p.a)(r,2),i=s[0],l=s[1];Object(c.useEffect)((function(){return window.addEventListener("scroll",o),function(){window.removeEventListener("scroll",o)}}),[]);var o=function(){l(0===window.pageYOffset)};return Object(v.jsxs)("header",{className:"app-header flex space-between ".concat(i?"":"scroll"),children:[Object(v.jsxs)(b.b,{to:"/",className:"logo",children:[Object(v.jsx)("img",{src:O,alt:"logo"}),Object(v.jsx)("span",{children:"autofleet"})]}),Object(v.jsxs)("div",{className:"btn-menu ".concat(n&&"open"),onClick:function(){return a(!n)},children:[Object(v.jsx)("span",{className:"btn-menu-top"}),Object(v.jsx)("span",{className:"btn-menu-middle"}),Object(v.jsx)("span",{className:"btn-menu-bottom"})]}),Object(v.jsxs)("ul",{className:"main-nav clean-list flex ".concat(n&&"open"),children:[Object(v.jsx)(b.b,{to:"/",className:"nav-item",children:"Fleet"}),Object(v.jsx)(b.b,{to:"/about",className:"nav-item",children:"Statistics"})]})]})}var x=n(10),g=n.n(x),E=n(15),y=n(26),w=n(37),N="/",C=n.n(w).a.create({withCredentials:!0}),S=function(e,t){return k(e,"GET",t)};function k(e){return L.apply(this,arguments)}function L(){return L=Object(E.a)(g.a.mark((function e(t){var n,c,a,r=arguments;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:"GET",c=r.length>2&&void 0!==r[2]?r[2]:null,e.prev=2,e.next=5,C({url:"".concat(N).concat(t),method:n,data:c,params:"GET"===n?c:null});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(t,", with data: ").concat(c)),console.dir(e.t0),e.t0.response&&e.t0.response.status,e.t0;case 15:case"end":return e.stop()}}),e,null,[[2,9]])}))),L.apply(this,arguments)}var T=function(){var e=Object(E.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S("api/vehicle",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I={query:T},V=function(){return function(){var e=Object(E.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.query();case 3:n=e.sent,t({type:"SET_VEHICLES",vehicles:n}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Vehicle Actions: err in loadVehicles",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},_=n.p+"static/media/car.000ab4b3.png",M=n.p+"static/media/icon-car.7dff49e1.svg",A=n.p+"static/media/icon-van.05f784d9.svg",R=n.p+"static/media/icon-moped.f665533d.svg",F=n.p+"static/media/icon-bicycle.8b3c5fdd.svg",B=n.p+"static/media/icon-online.02231f50.svg",D=n.p+"static/media/icon-inride.50b8af09.svg",G=function(e){switch(e){case"A":case"E":return M;case"B":return A;case"C":return R;case"D":return F;case"online":return B;case"in-ride":return D;default:return _}},H=function(e){var t={};return e.reduce((function(e,t){var n=t.class.name;return e[n]=e[n]?e[n]+1:1,e}),t),t},J=function(e){var t={};return e.reduce((function(e,t){var n=t.state;return e[n]=e[n]?e[n]+1:1,e}),t),t},P=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<e;c++)t+=n.charAt(Math.floor(Math.random()*n.length));return t},z=function(e){var t=Object.keys(e).sort((function(e,t){return e.charCodeAt()-t.charCodeAt()}));return{labels:t.map((function(e){return"Class "+e})),datasets:[{backgroundColor:["#28e6c0","#52c0fa"],borderColor:"transparent",borderWidth:2,data:t.map((function(t){return e[t]}))}]}},W=function(){var e=Object(s.c)((function(e){return e.vehicleReducer})).vehicles,t=Object(s.b)(),n=Object(c.useState)({}),a=Object(p.a)(n,2),r=a[0],i=a[1],l=Object(c.useState)({}),o=Object(p.a)(l,2),u=o[0],d=o[1],j=Object(c.useState)({labels:[],datasets:[]}),h=Object(p.a)(j,2),b=h[0],f=h[1],O=Object(c.useState)({labels:[],datasets:[]}),m=Object(p.a)(O,2),x=m[0],w=m[1];Object(c.useEffect)((function(){N()}),[]);var N=function(){var n=Object(E.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.length||t(V()),C(),S();case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),C=function(){var t=J(e);d(t),w(z(t))},S=function(){var t=H(e);i(t),f(z(t))};return Object(v.jsxs)("section",{className:"charts",children:[Object(v.jsx)("p",{className:"head",children:"Gain full control on your fleet"}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Easily index your vehicles"}),Object(v.jsx)("div",{className:"chart bar",children:Object(v.jsx)(y.a,{data:b,options:{plugins:{legend:{display:!1}}}})}),Object(v.jsx)("div",{className:"cards",children:Object.keys(r).sort((function(e,t){return e.charCodeAt()-t.charCodeAt()})).map((function(e){return Object(v.jsxs)("div",{className:"card flex col center align-center",children:[Object(v.jsx)("img",{src:G(e),alt:"car"}),Object(v.jsxs)("h1",{children:["class ",e]}),Object(v.jsxs)("p",{children:[r[e]," Vehicles"]})]},P())}))})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h2",{children:"Monitor your vehicles status"}),Object(v.jsx)("div",{className:"chart pie",children:Object(v.jsx)(y.b,{data:x,options:{plugins:{legend:{display:!1}}}})}),Object(v.jsx)("div",{className:"cards",children:Object.keys(u).map((function(e){return Object(v.jsxs)("div",{className:"card flex col center align-center",children:[Object(v.jsx)("img",{src:G(e),alt:"car"}),Object(v.jsxs)("h1",{children:["Vehicles ",e]}),Object(v.jsxs)("p",{children:[u[e],"  Vehicles"]})]},P())}))})]})]})]})},q=n(39),U=function(){return Object(v.jsx)("div",{className:"marker",children:Object(v.jsx)("img",{src:_,alt:"car"})})},K=function(e){var t=e.vehicles,n=e.filterVehicles,a=Object(c.useState)(null),r=Object(p.a)(a,2),s=r[0],i=r[1],l=Object(c.useState)(null),u=Object(p.a)(l,2),d=u[0],j=u[1];Object(c.useEffect)((function(){n(s)}),[s]);var h={center:{lat:51.503130606915335,lng:-.06902345895766882},zoom:12},b=function(e,t){var n={fillColor:"#aadaff",strokeColor:"#9fcee7",fillOpacity:.35,strokeWeight:2,strokeOpacity:.9,clickable:!0,editable:!0,draggable:!0,zIndex:1},c=new t.drawing.DrawingManager({drawingControl:!0,drawingControlOptions:{position:t.ControlPosition.TOP_CENTER,drawingModes:[t.drawing.OverlayType.CIRCLE,t.drawing.OverlayType.RECTANGLE]},circleOptions:n,rectangleOptions:n});t.event.addListener(c,"overlaycomplete",(function(e){var n=e.overlay,a=e.type;d&&d.setMap(null),j(n),c.setDrawingMode(null),function(e,t){var n={};if("circle"===t&&(n={lat:e.center.lat(),lng:e.center.lng(),radius:e.radius}),"rectangle"===t){var c=e.getBounds().getNorthEast(),a=e.getBounds().getSouthWest();n={lat:{min:Math.min(c.lat(),a.lat()),max:Math.max(c.lat(),a.lat())},lng:{min:Math.min(c.lng(),a.lng()),max:Math.max(c.lng(),a.lng())}}}i(n)}(n,a),t.event.addListener(n,"contextmenu",(function(){i(null),n.setMap(null)}))})),c.setMap(e)};return Object(v.jsx)("div",{className:"map-container",children:Object(v.jsx)(q.a,{bootstrapURLKeys:{key:"AIzaSyBbmFIBNJYR3chQJIgeDLJpuACCex0uK0s",libraries:"drawing"},defaultCenter:h.center,defaultZoom:h.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map,n=e.maps;return b(t,n)},children:t.map((function(e){return Object(v.jsx)(U,Object(o.a)({},e.location),e._id)}))})})},X=function(e){var t=e.vehicle;return Object(v.jsxs)("section",{className:"vehicle-preview flex align-center",title:t.location.lat+" , "+t.location.lng,children:[Object(v.jsx)("img",{src:G(t.class.name),alt:"car"}),Object(v.jsxs)("div",{className:"content flex col",children:[Object(v.jsx)("p",{className:"vehicle-id",children:t._id}),Object(v.jsx)("p",{className:"vehicle-loc",children:t.location.lat+" , "+t.location.lng})]})]})},Y=function(e){var t=e.vehicles,n=t.length?"Right click on shape to remove it and reset filtering":"No vehicles for display";return Object(v.jsxs)("section",{className:"vehicle-list flex col",children:[Object(v.jsx)("p",{className:"head",children:"Marked Vehicles"}),Object(v.jsx)("p",{className:"info",children:n}),!!t.length&&Object(v.jsx)("div",{children:t.map((function(e){return Object(v.jsx)(X,{vehicle:e},e._id)}))})]})},Q=function(){var e=Object(s.c)((function(e){return e.vehicleReducer})),t=e.vehicles,n=e.filteredVehicles,a=Object(s.b)();return Object(c.useEffect)((function(){a(V())}),[]),t&&t.length?Object(v.jsxs)("section",{className:"fleet-map",children:[Object(v.jsx)(K,{vehicles:t,filterVehicles:function(e){return a(function(e){return function(){var t=Object(E.a)(g.a.mark((function t(n){var c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=5;break}return n({type:"SET_FILTERES_VEHICLES",vehicles:[]}),t.abrupt("return");case 5:return t.prev=5,t.next=8,I.query(e);case 8:c=t.sent,n({type:"SET_FILTERES_VEHICLES",vehicles:c}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),console.log("Vehicle Actions: err in filterVehicles",t.t0);case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e){return t.apply(this,arguments)}}()}(e))}}),Object(v.jsx)(Y,{vehicles:n})]}):Object(v.jsx)("h1",{className:"fleet-map main",children:"Loading.."})},Z=function(){return Object(v.jsx)(b.a,{children:Object(v.jsxs)("section",{className:"app",children:[Object(v.jsx)(m,{}),Object(v.jsxs)(f.c,{children:[Object(v.jsx)(f.a,{path:"/",element:Object(v.jsx)(Q,{})}),Object(v.jsx)(f.a,{path:"/about",element:Object(v.jsx)(W,{})})]})]})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(69);r.a.render(Object(v.jsx)(s.a,{store:h,children:Object(v.jsx)(Z,{})}),document.getElementById("root")),$()}},[[70,1,2]]]);
//# sourceMappingURL=main.f5bc5765.chunk.js.map