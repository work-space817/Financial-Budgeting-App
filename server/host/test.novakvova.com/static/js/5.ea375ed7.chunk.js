(this["webpackJsonpcar-app"]=this["webpackJsonpcar-app"]||[]).push([[5],{828:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(8),s=n(0),o=n.n(s),r=n(39),c=n(7),l=n(23),p=n(24),u=n(43),m=n(254),h=n(82),d=n(703),b=n(16),f=n(700),v=n(152);function j(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},k(e,t)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){if(t&&("object"===g(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return w(this,n)}}var E,N,C,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(s,e);var t,n,i,a=O(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=a.call(this,e)).state={maskVisible:!1,previewVisible:!1,rotate:0,scale:1},t.onImageClick=t.onImageClick.bind(y(t)),t.onMaskClick=t.onMaskClick.bind(y(t)),t.onDownload=t.onDownload.bind(y(t)),t.rotateRight=t.rotateRight.bind(y(t)),t.rotateLeft=t.rotateLeft.bind(y(t)),t.zoomIn=t.zoomIn.bind(y(t)),t.zoomOut=t.zoomOut.bind(y(t)),t.onEntering=t.onEntering.bind(y(t)),t.onEntered=t.onEntered.bind(y(t)),t.onPreviewImageClick=t.onPreviewImageClick.bind(y(t)),t.onExit=t.onExit.bind(y(t)),t.onExiting=t.onExiting.bind(y(t)),t.onExited=t.onExited.bind(y(t)),t.previewRef=o.a.createRef(),t}return t=s,(n=[{key:"onImageClick",value:function(){var e=this;this.props.preview&&(this.setState({maskVisible:!0}),setTimeout((function(){e.setState({previewVisible:!0})}),25))}},{key:"onPreviewImageClick",value:function(){this.previewClick=!0}},{key:"onMaskClick",value:function(){this.previewClick||(this.setState({previewVisible:!1}),this.setState({rotate:0}),this.setState({scale:1})),this.previewClick=!1}},{key:"onDownload",value:function(){var e=this.props,t=e.alt,n=e.src;b.b.saveAs({name:t,src:n}),this.previewClick=!0}},{key:"rotateRight",value:function(){this.setState((function(e){return{rotate:e.rotate+90}})),this.previewClick=!0}},{key:"rotateLeft",value:function(){this.setState((function(e){return{rotate:e.rotate-90}})),this.previewClick=!0}},{key:"zoomIn",value:function(){this.setState((function(e){return{scale:e.scale+.1}})),this.previewClick=!0}},{key:"zoomOut",value:function(){this.setState((function(e){return{scale:e.scale-.1}})),this.previewClick=!0}},{key:"onEntering",value:function(){b.g.set("modal",this.mask,v.d.autoZIndex,v.d.zIndex.modal)}},{key:"onEntered",value:function(){this.props.onShow&&this.props.onShow()}},{key:"onExit",value:function(){b.b.addClass(this.mask,"p-component-overlay-leave")}},{key:"onExiting",value:function(){this.props.onHide&&this.props.onHide()}},{key:"onExited",value:function(e){b.g.clear(e),this.setState({maskVisible:!1})}},{key:"componentWillUnmount",value:function(){this.mask&&b.g.clear(this.container)}},{key:"renderElement",value:function(){var e=this,t=this.props.downloadable,n={transform:"rotate("+this.state.rotate+"deg) scale("+this.state.scale+")"},i=this.state.scale<=.5||this.state.scale>=1.5;return o.a.createElement("div",{ref:function(t){return e.mask=t},className:"p-image-mask p-component-overlay p-component-overlay-enter",onClick:this.onMaskClick},o.a.createElement("div",{className:"p-image-toolbar"},t&&o.a.createElement("button",{className:"p-image-action p-link",onClick:this.onDownload,type:"button"},o.a.createElement("i",{className:"pi pi-download"})),o.a.createElement("button",{className:"p-image-action p-link",onClick:this.rotateRight,type:"button"},o.a.createElement("i",{className:"pi pi-refresh"})),o.a.createElement("button",{className:"p-image-action p-link",onClick:this.rotateLeft,type:"button"},o.a.createElement("i",{className:"pi pi-undo"})),o.a.createElement("button",{className:"p-image-action p-link",onClick:this.zoomOut,type:"button",disabled:i},o.a.createElement("i",{className:"pi pi-search-minus"})),o.a.createElement("button",{className:"p-image-action p-link",onClick:this.zoomIn,type:"button",disabled:i},o.a.createElement("i",{className:"pi pi-search-plus"})),o.a.createElement("button",{className:"p-image-action p-link",type:"button",onClick:this.hidePreview},o.a.createElement("i",{className:"pi pi-times"}))),o.a.createElement(d.a,{nodeRef:this.previewRef,classNames:"p-image-preview",in:this.state.previewVisible,timeout:{enter:150,exit:150},unmountOnExit:!0,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited},o.a.createElement("div",{ref:this.previewRef},o.a.createElement("img",{src:this.props.src,className:"p-image-preview",style:n,onClick:this.onPreviewImageClick,alt:this.props.alt}))))}},{key:"render",value:function(){var e=this,t=Object(b.h)("p-image p-component",this.props.className,{"p-image-preview-container":this.props.preview}),n=this.renderElement(),i=this.props.template?b.e.getJSXElement(this.props.template,this.props):o.a.createElement("i",{className:"p-image-preview-icon pi pi-eye"}),a=this.props,s=a.src,r=a.alt,c=a.width,l=a.height;return o.a.createElement("span",{ref:function(t){return e.container=t},className:t,style:this.props.style},o.a.createElement("img",{src:s,className:this.props.imageClassName,width:c,height:l,style:this.props.imageStyle,alt:r}),this.props.preview&&o.a.createElement("div",{className:"p-image-preview-indicator",onClick:this.onImageClick},i),this.state.maskVisible&&o.a.createElement(f.a,{element:n,appendTo:document.body}))}}])&&j(t.prototype,n),i&&j(t,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(s.Component);C={preview:!1,className:null,downloadable:!1,style:null,imageStyle:null,imageClassName:null,template:null,src:null,alt:null,width:null,height:null},(N="defaultProps")in(E=S)?Object.defineProperty(E,N,{value:C,enumerable:!0,configurable:!0,writable:!0}):E[N]=C;var I=n(21),P=n(699),R=n(1);t.default=function(){var e=Object(c.o)().id,t=Object(c.m)(),n=Object(p.a)((function(e){return e.categoryCrud})),o=n.categoryData,d=n.loading,b=Object(l.a)(),f=b.getCategoryById,v=b.addFlashMessage,j=b.deleteFlashMessage,y=o.title,k=o.urlSlug,g=o.image,w=o.priority,x=Object(s.useCallback)(Object(a.a)(Object(i.a)().mark((function n(){var a,s;return Object(i.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f(e);case 3:if(a=n.sent,s=a.status,console.log(s),204!==s){n.next=11;break}return t("/categories"),n.next=10,v({type:"error",message:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"});case 10:setTimeout((function(){j()}),2e3);case 11:n.next=15;break;case 13:n.prev=13,n.t0=n.catch(0);case 15:case"end":return n.stop()}}),n,null,[[0,13]])}))),[f,v,j,e,t]);return Object(s.useEffect)((function(){x()}),[x]),e?Object(R.jsxs)("section",{children:[Object(R.jsx)(r.a,{children:Object(R.jsx)("title",{children:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e"})}),Object(R.jsxs)(h.a,{title:"\u0406\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u043f\u0440\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u044e",children:[Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-3",children:Object(R.jsx)(S,{src:"https://vovalohika.tk/images/300_".concat(g),alt:"avatar"})}),Object(R.jsxs)("div",{className:"col",children:[Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-sm-2",children:Object(R.jsx)("p",{className:"mb-0",children:"\u041d\u0430\u0437\u0432\u0430 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457"})}),Object(R.jsx)("div",{className:"col-sm-9",children:Object(R.jsx)("p",{className:"text-muted mb-0",children:y})})]}),Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-sm-2",children:Object(R.jsx)("p",{className:"mb-0",children:"ID"})}),Object(R.jsx)("div",{className:"col-sm-9",children:Object(R.jsx)("p",{className:"text-muted mb-0",children:e})})]}),Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-sm-2",children:Object(R.jsx)("p",{className:"mb-0",children:"\u041f\u0440\u0456\u043e\u0440\u0456\u0442\u0435\u0442"})}),Object(R.jsx)("div",{className:"col-sm-9",children:Object(R.jsx)("p",{className:"text-muted mb-0",children:w})})]}),Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{className:"col-sm-2",children:Object(R.jsx)("p",{className:"mb-0",children:"urlSlug"})}),Object(R.jsx)("div",{className:"col-sm-9",children:Object(R.jsx)("p",{className:"text-muted mb-0",children:k})})]})]})]}),Object(R.jsx)("div",{className:"col-2 p-mt-6",children:Object(R.jsx)(I.b,{to:"/adminPanel/categories",children:Object(R.jsx)(P.a,{label:"\u041d\u0430\u0437\u0430\u0434",icon:"pi pi-chevron-circle-left"})})})]}),d&&Object(R.jsx)(u.a,{})]}):Object(R.jsx)(m.a,{})}}}]);
//# sourceMappingURL=5.ea375ed7.chunk.js.map