(this["webpackJsonpcar-app"]=this["webpackJsonpcar-app"]||[]).push([[14],{701:function(e,t,a){"use strict";var n=a(3),c=a(8),r=a(4),s=a(256),l=a.n(s),i=a(0),o=a(168),d=a(702),u=a.n(d),j=(a(384),a(9)),b=a.n(j),m=a(64),h=a(65),O=a(1);t.a=function(e){var t=e.onChange,a=e.field,s=e.error,d=e.touched,j=e.value,x=e.aspectRatio,f=void 0===x?16/9:x,p=Object(i.useState)(j),v=Object(r.a)(p,2),g=v[0],w=v[1],N=Object(i.useState)(),y=Object(r.a)(N,2),C=y[0],k=y[1],_=Object(i.useRef)(null),S=Object(i.useRef)(),F=Object(i.useState)(),I=Object(r.a)(F,2),R=I[0],T=I[1],P=Object(i.useState)(!1),D=Object(r.a)(P,2),U=D[0],B=D[1],H=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){var a,c;return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=t.target.files[0])){e.next=7;break}return c=URL.createObjectURL(a),e.next=5,w(c);case 5:null===C||void 0===C||C.replace(c),B(!0);case 7:t.target.value="";case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){if(_.current){var e=new l.a(_.current,{aspectRatio:f,viewMode:1,preview:S.current});e.replace(g),k(e)}}),[U,g,f]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:u.a.formGroup,children:[Object(O.jsx)("label",{htmlFor:a,style:{height:"100%",width:"100%"},children:Object(O.jsxs)("div",{className:b()(u.a.labelInput,{"text-danger border border-danger rounded":d&&s},{"is-valid border border-success rounded":d&&!s}),children:[R&&Object(O.jsx)("img",{className:u.a.bgImg,src:R,alt:"asdas"}),!R&&Object(O.jsxs)(O.Fragment,{children:[j&&Object(O.jsx)("img",{style:{width:"100%"},src:j,alt:"asdasda"}),!j&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("i",{className:"fa fa-image fa-5x"}),Object(O.jsx)("span",{className:"d-block",children:"\u0414\u043b\u044f \u0432\u0438\u0431\u043e\u0440\u0443 \u0444\u043e\u0442\u043e \u043d\u0430\u0442\u0438\u0441\u043d\u0456\u0442\u044c"})]})]}),s&&Object(O.jsx)("div",{children:s})]})}),Object(O.jsx)("input",{id:a,className:"d-none",type:"file",onChange:H})]}),U&&Object(O.jsx)(o.a,{onClose:function(){B(!1)},children:Object(O.jsxs)("div",{className:u.a.modalBody,children:[Object(O.jsx)("div",{className:u.a.image,children:Object(O.jsx)("img",{ref:_,src:j,alt:"asdds"})}),Object(O.jsx)("div",{ref:S,style:{height:"150px",width:"150px",border:"1px solid silver",overflow:"hidden"}}),Object(O.jsxs)("div",{className:"d-flex justify-content-around mt-2",children:[Object(O.jsx)("button",{onClick:function(){_.current&&(null===C||void 0===C||C.rotate(90))},type:"button",className:"btn btn-outline-secondary",children:Object(O.jsx)(m.a,{icon:h.e,size:"2x"})}),Object(O.jsxs)("div",{className:"d-flex justify-content-between",style:{width:"150px"},children:[Object(O.jsx)("button",{onClick:function(){var e=null===C||void 0===C?void 0:C.getCroppedCanvas().toDataURL();T(e),B(!1),t(a,e)},type:"button",className:"btn btn-outline-success",children:Object(O.jsx)(m.a,{icon:h.a,size:"2x"})}),Object(O.jsx)("button",{onClick:function(){B(!1)},type:"button",className:"btn btn-outline-danger",children:Object(O.jsx)(m.a,{icon:h.f,size:"2x"})})]})]})]})})]})}},702:function(e,t,a){e.exports={modalBody:"CropperComponent_modalBody__2D_CS",image:"CropperComponent_image__2KbH0",formGroup:"CropperComponent_formGroup__31n-Q",labelInput:"CropperComponent_labelInput__3e2Hl",bgImg:"CropperComponent_bgImg__7A-8d"}},728:function(e,t,a){"use strict";var n=a(3),c=a(8),r=a(82),s=a(45),l=a(37),i=l.c({name:l.e().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c"),text:l.e().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c"),slug:l.e().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c"),dateTimePublish:l.e().required("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043f\u043e\u0432\u0438\u043d\u043d\u0435 \u0431\u0443\u0442\u0438 \u043f\u0443\u0441\u0442\u0438\u043c")}),o=a(41),d=a(699),u=a(730),j=a.n(u),b=(a(731),a(132)),m=a(2),h=a(19),O=a(9),x=a.n(O),f=a(732),p=a.n(f),v=a(750),g=a(1),w=["label","field","touched","error","onChange"],N=function(e){var t=e.label,a=e.field,n=e.touched,c=void 0===n?null:n,r=e.error,s=void 0===r?null:r,l=e.onChange,i=Object(h.a)(e,w);return Object(g.jsxs)("div",{className:"mb-3",children:[Object(g.jsx)("label",{htmlFor:a,className:"form-label",children:t}),Object(g.jsx)(p.a,Object(m.a)({name:a,autoComplete:"off",locale:v.a,dateFormat:"dd/MM/yyyy",className:x()("form-control",{"is-invalid":c&&s},{"is-valid":c&&!s}),onChange:l},i)),c&&s&&Object(g.jsx)("div",{className:"invalid-feedback",children:s})]})},y=a(43),C=a(715),k=a(23),_=a(24),S=a(701),F=a(0),I=a(131),R=a(704),T=a(7);t.a=function(e){var t=Object(T.m)(),a=Object(k.a)().uploadImages,l=Object(_.a)((function(e){return e.news})).images,u=Object(F.useRef)(null),m=Object(_.a)((function(e){return e.news})).loading,h=new j.a,O=e.initVal,x=e.addUpdateHandler,f=e.buttonText,p=e.header,v=e.toaastDetail,w=O,P=function(){var e=Object(c.a)(Object(n.a)().mark((function e(t){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(t);case 3:null!==u.current&&u.current.show({severity:"info",summary:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e",detail:"\u0424\u043e\u0442\u043e \u0434\u043e\u0434\u0430\u043d\u043e",life:3e3}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),null!==u.current&&u.current.show({severity:"error",summary:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e",detail:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",life:3e3});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(Object(n.a)().mark((function e(a){return Object(n.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(a);case 3:null!==u.current&&u.current.show({severity:"info",summary:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e",detail:v,life:3e3}),t("/adminPanel/newsList"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),null!==u.current&&u.current.show({severity:"error",summary:"\u0412\u0438\u043a\u043e\u043d\u0430\u043d\u043e",detail:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a",life:3e3});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),U=Object(s.d)({initialValues:w,validationSchema:i,onSubmit:D,enableReinitialize:!0}),B=U.errors,H=U.touched,L=U.handleChange,q=U.handleSubmit,z=U.setFieldValue,V=U.values;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(R.a,{ref:u}),Object(g.jsxs)(r.a,{style:{padding:"1rem"},children:[Object(g.jsx)("h1",{className:"text-center",children:p}),Object(g.jsx)(s.c,{value:U,children:Object(g.jsxs)(s.b,{onSubmit:q,children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-3",children:[Object(g.jsx)(o.a,{field:"name",label:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",error:B.name,onChange:L,onBlur:function(){return z("slug",h.transform(V.name,"-"))},touched:H.name,value:V.name}),Object(g.jsx)("label",{htmlFor:"image",children:"\u0424\u043e\u0442\u043e \u043d\u043e\u0432\u0438\u043d\u0438"}),Object(g.jsx)("div",{className:"form-control mb-1",children:Object(g.jsx)(S.a,{field:"image",onChange:z,error:B.image,touched:H.image,value:V.image})}),Object(g.jsx)("label",{htmlFor:"isShow",children:"\u0412\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u043d\u043e\u0432\u0438\u043d\u0438"}),Object(g.jsx)("div",{className:"m-2",children:Object(g.jsx)(C.a,{checked:V.isShow,onChange:function(e){return z("isShow",e.value)}})}),Object(g.jsx)(o.a,{field:"slug",label:"Slug",error:B.slug,onChange:L,onBlur:function(){return z("slug",h.transform(V.slug,"-"))},touched:H.slug,value:V.slug}),Object(g.jsx)(N,{field:"dateTimePublish",label:"\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457",error:B.dateTimePublish,touched:H.dateTimePublish,value:V.dateTimePublish,onChange:function(e){z("dateTimePublish",e.toLocaleDateString("uk-UA")),console.log(V.dateTimePublish)}})]}),Object(g.jsxs)("div",{className:"col-9",children:[Object(g.jsx)(b.a,{value:V.text,field:"text",label:"\u0422\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u0438\u043d\u0438",error:B.text,touched:H.text,onEditorChange:function(e){z("text",e)}}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-3",children:[Object(g.jsx)("label",{htmlFor:"addImage",className:" p-2",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"}),Object(g.jsx)(I.a,{onChange:function(){},field:"addImage",uploadImageHandler:P})]}),Object(g.jsxs)("div",{className:"col-9",children:[Object(g.jsx)("label",{htmlFor:"addImage",className:" p-2",children:"\u0410\u0434\u0440\u0435\u0441\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043e\u043a"}),Object(g.jsx)("p",{className:"form-control h-100",children:l.map((function(e,t){return Object(g.jsx)("p",{children:e.name},t)}))})]})]})]})]}),Object(g.jsx)("div",{className:"d-flex",children:Object(g.jsx)(d.a,{type:"submit",label:f,icon:"pi pi-plus"})})]})}),m&&Object(g.jsx)(y.a,{})]})]})}},815:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(23),r=a(39),s=a(728),l=a(24),i=a(7),o=a(0),d=a(1);t.default=function(){var e=Object(c.a)(),t=e.getInfoNews,a=e.editNews,u=Object(l.a)((function(e){return e.news})).newsData,j=Object(i.o)().slug;Object(o.useEffect)((function(){j&&t(j)}),[t,j]);var b=Object(n.a)(Object(n.a)({},u),{},{image:"https://vovalohika.tk/images/1200_".concat(u.image)});return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(r.a,{children:Object(d.jsx)("title",{children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u043d\u0443"})}),Object(d.jsx)(s.a,{initVal:b,addUpdateHandler:a,buttonText:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",header:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043d\u043e\u0432\u0438\u043d\u0443",toaastDetail:"\u041d\u043e\u0432\u0438\u043d\u0443 \u0432\u0456\u0434\u0440\u0435\u0434\u0430\u0433\u043e\u0432\u0430\u043d\u043e"})]})}}}]);
//# sourceMappingURL=14.3f661ac3.chunk.js.map