(this["webpackJsonpcar-app"]=this["webpackJsonpcar-app"]||[]).push([[15],{701:function(e,t,r){"use strict";var a=r(3),n=r(8),c=r(4),s=r(256),i=r.n(s),l=r(0),o=r(168),d=r(702),u=r.n(d),j=(r(384),r(9)),b=r.n(j),p=r(64),O=r(65),h=r(1);t.a=function(e){var t=e.onChange,r=e.field,s=e.error,d=e.touched,j=e.value,x=e.aspectRatio,m=void 0===x?16/9:x,f=Object(l.useState)(j),g=Object(c.a)(f,2),v=g[0],y=g[1],C=Object(l.useState)(),N=Object(c.a)(C,2),w=N[0],S=N[1],_=Object(l.useRef)(null),k=Object(l.useRef)(),F=Object(l.useState)(),R=Object(c.a)(F,2),I=R[0],q=R[1],z=Object(l.useState)(!1),B=Object(c.a)(z,2),G=B[0],L=B[1],M=function(){var e=Object(n.a)(Object(a.a)().mark((function e(t){var r,n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.target.files[0])){e.next=7;break}return n=URL.createObjectURL(r),e.next=5,y(n);case 5:null===w||void 0===w||w.replace(n),L(!0);case 7:t.target.value="";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){if(_.current){var e=new i.a(_.current,{aspectRatio:m,viewMode:1,preview:k.current});e.replace(v),S(e)}}),[G,v,m]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:u.a.formGroup,children:[Object(h.jsx)("label",{htmlFor:r,style:{height:"100%",width:"100%"},children:Object(h.jsxs)("div",{className:b()(u.a.labelInput,{"text-danger border border-danger rounded":d&&s},{"is-valid border border-success rounded":d&&!s}),children:[I&&Object(h.jsx)("img",{className:u.a.bgImg,src:I,alt:"asdas"}),!I&&Object(h.jsxs)(h.Fragment,{children:[j&&Object(h.jsx)("img",{style:{width:"100%"},src:j,alt:"asdasda"}),!j&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("i",{className:"fa fa-image fa-5x"}),Object(h.jsx)("span",{className:"d-block",children:"\u0414\u043b\u044f \u0432\u0438\u0431\u043e\u0440\u0443 \u0444\u043e\u0442\u043e \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c"})]})]}),s&&Object(h.jsx)("div",{children:s})]})}),Object(h.jsx)("input",{id:r,className:"d-none",type:"file",onChange:M})]}),G&&Object(h.jsx)(o.a,{onClose:function(){L(!1)},children:Object(h.jsxs)("div",{className:u.a.modalBody,children:[Object(h.jsx)("div",{className:u.a.image,children:Object(h.jsx)("img",{ref:_,src:j,alt:"asdds"})}),Object(h.jsx)("div",{ref:k,style:{height:"150px",width:"150px",border:"1px solid silver",overflow:"hidden"}}),Object(h.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[Object(h.jsx)("button",{onClick:function(){_.current&&(null===w||void 0===w||w.rotate(90))},type:"button",className:"btn btn-outline-secondary",children:Object(h.jsx)(p.a,{icon:O.e,size:"2x"})}),Object(h.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"150px"},children:[Object(h.jsx)("button",{onClick:function(){var e=null===w||void 0===w?void 0:w.getCroppedCanvas().toDataURL();q(e),L(!1),t(r,e)},type:"button",className:"btn btn-outline-success",children:Object(h.jsx)(p.a,{icon:O.a,size:"2x"})}),Object(h.jsx)("button",{onClick:function(){L(!1)},type:"button",className:"btn btn-outline-danger",children:Object(h.jsx)(p.a,{icon:O.f,size:"2x"})})]})]})]})})]})}},702:function(e,t,r){e.exports={modalBody:"CropperComponent_modalBody__2D_CS",image:"CropperComponent_image__2KbH0",formGroup:"CropperComponent_formGroup__31n-Q",labelInput:"CropperComponent_labelInput__3e2Hl",bgImg:"CropperComponent_bgImg__7A-8d"}},830:function(e,t,r){"use strict";r.r(t);var a=r(3),n=r(8),c=r(4),s=r(0),i=r(41),l=r(23),o=r(7),d=r(37),u=d.c({title:d.e().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c"),urlSlug:d.e().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c"),priority:d.e().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c")}),j=r(43),b=r(45),p=r(24),O=r(39),h=r(82),x=r(699),m=r(701),f=r(1);t.default=function(){var e=Object(l.a)(),t=e.CreateCategory,r=e.addFlashMessage,d=e.deleteFlashMessage,g=Object(p.a)((function(e){return e.userCrud})).loading,v=Object(s.useState)(!1),y=Object(c.a)(v,2),C=y[0],N=y[1],w=Object(o.m)(),S=function(){var e=Object(n.a)(Object(a.a)().mark((function e(n,c){var s,i,l,o,u,j;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.setFieldError,e.prev=1,N(!0),e.next=5,t(n);case 5:return i=e.sent,console.log(i),e.next=9,i;case 9:l=e.sent,w("/adminPanel/categories/"),N(!1),200===l.status&&(r({type:"success",message:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e"}),setTimeout((function(){return d()}),2e3)),e.next=22;break;case 15:e.prev=15,e.t0=e.catch(1),N(!1),o=e.t0,u=o.title,j=o.priority,0!==(null===u||void 0===u?void 0:u.length)&&s("title",u[0]),0!==(null===j||void 0===j?void 0:j.length)&&s("priority",j[0]);case 22:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,r){return e.apply(this,arguments)}}(),_=Object(b.d)({initialValues:{title:"",priority:"",urlSlug:"",image:""},validationSchema:u,onSubmit:S}),k=_.errors,F=_.touched,R=_.handleChange,I=_.handleSubmit,q=_.setFieldValue;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O.a,{children:Object(f.jsx)("title",{children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e"})}),Object(f.jsx)(h.a,{title:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",children:Object(f.jsx)(b.c,{value:_,children:Object(f.jsx)(b.b,{onSubmit:I,children:Object(f.jsxs)("div",{className:"row d-flex justify-content-around border border-secondary border-3 rounded-4 p-4 m-5",children:[Object(f.jsx)("div",{className:"col-6",children:Object(f.jsx)(m.a,{field:"image",onChange:q,error:k.image,touched:F.image})}),Object(f.jsxs)("div",{className:"col-6",children:[Object(f.jsx)(i.a,{field:"title",label:"\u041d\u0430\u0437\u0432\u0430",error:k.title,onChange:R,touched:F.title}),Object(f.jsx)(i.a,{field:"priority",label:"\u041f\u0440\u0456\u043e\u0440\u0456\u0442\u0435\u0442",error:k.priority,onChange:R,touched:F.priority}),Object(f.jsx)(i.a,{field:"urlSlug",label:"urlSlug",error:k.urlSlug,onChange:R,touched:F.urlSlug})]}),Object(f.jsx)("div",{className:"p-d-flex p-jc-center",children:Object(f.jsx)(x.a,{type:"submit",label:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",icon:"pi pi-plus",disabled:g})})]})})})}),C&&Object(f.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=15.a4f3d479.chunk.js.map