(this["webpackJsonpcar-app"]=this["webpackJsonpcar-app"]||[]).push([[20],{808:function(e,c,s){},817:function(e,c,s){"use strict";s.r(c);var a=s(807),t=s(16),l=s(0),i=s(23),n=s(24),r=s(719),d=(s(808),s(39)),j=s(82),m=s(1);c.default=function(){var e=Object(n.a)((function(e){return e.ordersReducer})),c=e.orders,s=e.status,o=Object(i.a)(),h=o.GetAdminOrdersList,u=o.ChangeOrderStatus;Object(l.useEffect)((function(){h()}),[h]);var b=c.map((function(e){var c=e.id,l=e.dateCreated,i=e.statusName,n=e.items,d=e.consumerFirstName,j=e.consumerSecondName,o=e.consumerPhone,h=s.filter((function(e){return e.name===i})),b=Object(m.jsxs)("div",{className:"d-flex align-items-center",style:{minWidth:"100%"},children:[Object(m.jsxs)("div",{className:"col-1",children:["\u2116: ",c]}),Object(m.jsxs)("div",{className:"col-3",children:["\u0414\u0430\u0442\u0430 \u0437\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f: ",l]}),Object(m.jsxs)("div",{className:"col-3 p-2",onClick:function(e){return e.stopPropagation()},children:["\u0421\u0442\u0430\u0442\u0443\u0441: \xa0",Object(m.jsx)(r.a,{className:"",style:{width:"12rem"},value:h[0],options:s,onChange:function(e){var s=e.target.value;u(c,s.id,s.name)},optionLabel:"name"})]}),Object(m.jsxs)("div",{className:"col-3",children:["\u0417\u0430\u043c\u043e\u0432\u043d\u0438\u043a: ",d," ",j]}),Object(m.jsxs)("div",{className:"col-2",children:["\u0422\u0435\u043b: ",o]})]});return Object(m.jsx)(a.b,{header:b,children:n.map((function(e){var c=e.productName,s=e.quantity,a=e.buyPrice,l=e.productImage;return Object(m.jsx)("div",{className:"card bg-secondary m-2",children:Object(m.jsx)("div",{className:"card-body row",children:Object(m.jsx)("div",{className:"media",children:Object(m.jsxs)("div",{className:"row my-auto flex-column flex-md-row",children:[Object(m.jsx)("div",{className:"col align-self-center",children:Object(m.jsx)("img",{className:"img-fluid my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0",src:"https://vovalohika.tk/images/100_".concat(l[0]),width:"100",height:"56",alt:"https://vovalohika.tk/images/100_".concat(l[0])})}),Object(m.jsx)("div",{className:"col my-auto",children:Object(m.jsxs)("small",{children:["\u0422\u043e\u0432\u0430\u0440: ",c]})}),Object(m.jsx)("div",{className:"col my-auto",children:Object(m.jsxs)("small",{children:["\u0426\u0456\u043d\u0430 : ",a," $"]})}),Object(m.jsx)("div",{className:"col my-auto",children:Object(m.jsxs)("small",{children:["\u041a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c : ",s]})}),Object(m.jsx)("div",{className:"col my-auto",children:Object(m.jsxs)("h6",{className:"mb-0",children:["C\u0443\u043c\u0430 : ",a*s," $"]})})]})})})},Object(t.f)())}))},c)}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(d.a,{children:Object(m.jsx)("title",{children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"})}),Object(m.jsx)("div",{children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)("h2",{className:"text-center p-3",children:"\u0417\u0430\u043c\u043e\u0432\u043b\u0435\u043d\u043d\u044f"}),Object(m.jsx)(a.a,{className:"d-flex flex-column",activeIndex:null,children:b})]})})]})}}}]);
//# sourceMappingURL=20.9eb0d09e.chunk.js.map