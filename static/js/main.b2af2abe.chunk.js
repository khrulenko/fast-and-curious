(this["webpackJsonpfast-and-curious"]=this["webpackJsonpfast-and-curious"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),c=n(4),i=n.n(c),o=(n(10),n(3)),r=(n(11),n(0)),l=function(t){var e=t.doctor;return Object(r.jsxs)("a",{className:"doctorCard",href:e.link,target:"_blank",children:[Object(r.jsx)("img",{className:"doctorPhoto",src:e.avatar,alt:"doctor ".concat(e.firstName," ").concat(e.lastName)}),Object(r.jsxs)("p",{className:"doctorName",children:[e.firstName," ",e.lastName]}),Object(r.jsx)("p",{className:"speciality",children:"".concat("object"===typeof e.speciality?e.speciality.join(" \u2022 "):e.speciality)})]})},u=(n(13),function(t){var e=t.DoctorsToShow;return Object(r.jsx)("ul",{className:"doctorsList",children:e.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(l,{doctor:t})},t.id)}))})}),j=n(5),p=n.n(j);n(15);function d(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(a.useState)(1),i=Object(o.a)(c,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){fetch("https://5fe21e077a94870017682132.mockapi.io/api/testtask/doctors").then((function(t){return t.json()})).then((function(t){return s(t)}))}),[l]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"heading",children:[Object(r.jsx)("h2",{children:"\u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b"}),Object(r.jsx)("p",{className:"description",children:"\u0412\u044b\u0441\u043e\u043a\u043e\u043a\u0432\u0430\u043b\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432\u0440\u0430\u0447\u0438-\u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438 AstraDent \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e \u043f\u043e\u0441\u0435\u0449\u0430\u044e\u0442 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0441\u0442\u0435\u0440-\u043a\u043b\u0430\u0441\u0441\u044b \u0438 \u0441\u0442\u0430\u0436\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u0423\u043a\u0440\u0430\u0438\u043d\u0435 \u0438 \u0437\u0430 \u0440\u0443\u0431\u0435\u0436\u043e\u043c, \u0447\u0442\u043e\u0431\u044b \u0431\u044b\u0442\u044c \u0432 \u043a\u0443\u0440\u0441\u0435 \u0432\u0441\u0435\u0445 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0442\u0435\u043d\u0434\u0435\u043d\u0446\u0438\u0439 \u0434\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0439 \u043c\u0435\u0434\u0438\u0446\u0438\u043d\u044b. \u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u043e\u0441\u043d\u0430\u0449\u0435\u043d\u044b \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u043e\u0439 \u043c\u0438\u0440\u043e\u0432\u044b\u0445 \u043b\u0438\u0434\u0435\u0440\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0430 \u0441\u0442\u043e\u043c\u0430\u0442\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b\u0441\u043e\u043a\u043e\u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043e\u0442 \u0432\u0435\u0434\u0443\u0449\u0438\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439."})]}),Object(r.jsx)(u,{DoctorsToShow:function(t,e){return t.slice((l-1)*e,(l-1)*e+e)}(n,9)}),!!n.length&&Object(r.jsx)(p.a,{onPageChange:function(t){return j(t.selected+1)},pageCount:Math.ceil(n.length/9),containerClassName:"pagination",pageClassName:"paginationPage",previousClassName:"paginationPrevious",nextClassName:"paginationNext",breakClassName:"paginationEllipsis",activeClassName:"paginationActive",pageLinkClassName:"paginationLink",previousLinkClassName:"paginationPreviousLink",nextLinkClassName:"paginationNextLink",previousLabel:"<",nextLabel:">"})]})}var h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(d,{})}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.b2af2abe.chunk.js.map