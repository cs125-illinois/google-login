(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4Wt7":function(e,t,n){e.exports=n.p+"static/favicon-f25d706569b844cbb70f4d1b4fa67ac4.png"},"8+s/":function(e,t,n){"use strict";n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var r,i=n("q1tI"),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(p,"canUseDOM",c),p}}},FtJ3:function(e,t,n){"use strict";var r=n("VLSD");t.a=r.instance},ZhWT:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),p=r(n);if(u&&p){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=p)return!1;var d=t instanceof Date,f=n instanceof Date;if(d!=f)return!1;if(d&&f)return t.getTime()==n.getTime();var h=t instanceof RegExp,m=n instanceof RegExp;if(h!=m)return!1;if(h&&m)return t.toString()==n.toString();var b=i(t);if((s=b.length)!==i(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,b[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=b[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},pfKO:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return se})),n.d(t,"default",(function(){return pe}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("7ljp"),i=(n("jm62"),n("ioFf"),n("q1tI")),o=n.n(i),a=n("qhky"),c=n("pVnL"),s=n.n(c),l=n("TSYQ"),u=n.n(l),p=n("ZeOK"),d=n("ICNK"),f=n("Y53p"),h=n("H+2d");function m(e){var t=e.children,n=e.className,r=e.content,i=e.fluid,a=e.text,c=e.textAlign,l=u()("ui",Object(p.a)(a,"text"),Object(p.a)(i,"fluid"),Object(p.c)(c),"container",n),b=Object(d.a)(m,e),y=Object(f.a)(m,e);return o.a.createElement(y,s()({},b,{className:l}),h.a.isNil(t)?r:t)}m.handledProps=["as","children","className","content","fluid","text","textAlign"];var b=m,y=n("85CM");n("Wt1U");function g(e){var t=e.children,n=e.className,r=e.compact,i=e.content,a=e.horizontal,c=e.piled,l=e.raised,m=e.size,b=e.stacked,y=u()("ui",m,Object(p.a)(r,"compact"),Object(p.a)(a,"horizontal"),Object(p.a)(c,"piled"),Object(p.a)(l,"raised"),Object(p.a)(b,"stacked"),"segments",n),v=Object(d.a)(g,e),O=Object(f.a)(g,e);return o.a.createElement(O,s()({},v,{className:y}),h.a.isNil(t)?i:t)}g.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"];var v=g;function O(e){var t=e.children,n=e.className,r=e.content,i=u()("inline",n),a=Object(d.a)(O,e),c=Object(f.a)(O,e);return o.a.createElement(c,s()({},a,{className:i}),h.a.isNil(t)?r:t)}O.handledProps=["as","children","className","content"];var T=O;function j(e){var t=e.attached,n=e.basic,r=e.children,i=e.circular,a=e.className,c=e.clearing,l=e.color,m=e.compact,b=e.content,y=e.disabled,g=e.floated,v=e.inverted,O=e.loading,T=e.placeholder,w=e.padded,k=e.piled,E=e.raised,C=e.secondary,S=e.size,A=e.stacked,x=e.tertiary,P=e.textAlign,R=e.vertical,N=u()("ui",l,S,Object(p.a)(n,"basic"),Object(p.a)(i,"circular"),Object(p.a)(c,"clearing"),Object(p.a)(m,"compact"),Object(p.a)(y,"disabled"),Object(p.a)(v,"inverted"),Object(p.a)(O,"loading"),Object(p.a)(T,"placeholder"),Object(p.a)(k,"piled"),Object(p.a)(E,"raised"),Object(p.a)(C,"secondary"),Object(p.a)(A,"stacked"),Object(p.a)(x,"tertiary"),Object(p.a)(R,"vertical"),Object(p.b)(t,"attached"),Object(p.b)(w,"padded"),Object(p.c)(P),Object(p.d)(g,"floated"),"segment",a),L=Object(d.a)(j,e),I=Object(f.a)(j,e);return o.a.createElement(I,s()({},L,{className:N}),h.a.isNil(r)?b:r)}j.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],j.Group=v,j.Inline=T;var w=j,k=(n("Zz4T"),n("MVZn")),E=n.n(k),C=n("lwsE"),S=n.n(C),A=n("W8MJ"),x=n.n(A),P=n("a1gu"),R=n.n(P),N=n("Nsbk"),L=n.n(N),I=n("PJYZ"),W=n.n(I),M=n("7W2i"),U=n.n(M),B=n("lSNA"),D=n.n(B),F=n("Og4/"),q=n.n(F),z=n("FtJ3"),H=n("nPHS"),Y=n("J2iB"),_=n.n(Y),K=function(e,t){var n=t.maxWidth;return function(e,t){return!!_()(t)||e>=t}(e,t.minWidth)&&function(e,t){return!!_()(t)||e<=t}(e,n)},V=function(e){function t(){var e,n;S()(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return n=R()(this,(e=L()(t)).call.apply(e,[this].concat(i))),D()(W()(n),"state",{visible:!0}),D()(W()(n),"handleResize",(function(e){n.ticking||(n.ticking=!0,n.frameId=requestAnimationFrame((function(){return n.handleUpdate(e)})))})),D()(W()(n),"handleUpdate",(function(e){n.ticking=!1;var t=n.state.visible,r=q()(n.props,"getWidth"),i=K(r,n.props);t!==i&&n.setState({visible:i}),q()(n.props,"onUpdate",e,E()({},n.props,{width:r}))})),n}return U()(t,e),x()(t,[{key:"componentDidMount",value:function(){var e=this.props.fireOnMount;z.a.sub("resize",this.handleResize,{target:"window"}),e&&this.handleUpdate()}},{key:"componentWillUnmount",value:function(){z.a.unsub("resize",this.handleResize,{target:"window"}),cancelAnimationFrame(this.frameId)}},{key:"render",value:function(){var e=this.props.children,n=this.state.visible,r=Object(f.a)(t,this.props),i=Object(d.a)(t,this.props);return n?o.a.createElement(r,i,e):null}}],[{key:"getDerivedStateFromProps",value:function(e){var t=q()(e,"getWidth");return{visible:K(t,e)}}}]),t}(i.Component);function G(e){var t=e.attached,n=e.children,r=e.className,i=e.close,a=e.content,c=e.dividing,l=e.internal,m=e.position,b=e.size,y=u()("ui",m,b,Object(p.a)(t,"attached"),Object(p.a)(c,"dividing"),Object(p.a)(l,"internal"),Object(p.b)(i,"close"),"rail",r),g=Object(d.a)(G,e),v=Object(f.a)(G,e);return o.a.createElement(v,s()({},g,{className:y}),h.a.isNil(n)?a:n)}D()(V,"defaultProps",{getWidth:function(){return Object(H.a)()?window.innerWidth:0}}),D()(V,"onlyMobile",{minWidth:320,maxWidth:767}),D()(V,"onlyTablet",{minWidth:768,maxWidth:991}),D()(V,"onlyComputer",{minWidth:992}),D()(V,"onlyLargeScreen",{minWidth:1200,maxWidth:1919}),D()(V,"onlyWidescreen",{minWidth:1920}),D()(V,"handledProps",["as","children","fireOnMount","getWidth","maxWidth","minWidth","onUpdate"]),G.handledProps=["as","attached","children","className","close","content","dividing","internal","position","size"];var J=G,Z=n("U8pU"),X=function(e){return null!==e&&"object"===Object(Z.a)(e)&&e.hasOwnProperty("current")},$=function(e){function t(){var e,n;S()(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return n=R()(this,(e=L()(t)).call.apply(e,[this].concat(o))),D()(W()(n),"state",{sticky:!1}),D()(W()(n),"stickyRef",Object(i.createRef)()),D()(W()(n),"triggerRef",Object(i.createRef)()),D()(W()(n),"addListeners",(function(e){var t=e.scrollContext,r=X(t)?t.current:t;r&&(z.a.sub("resize",n.handleUpdate,{target:r}),z.a.sub("scroll",n.handleUpdate,{target:r}))})),D()(W()(n),"removeListeners",(function(){var e=n.props.scrollContext,t=X(e)?e.current:e;t&&(z.a.unsub("resize",n.handleUpdate,{target:t}),z.a.unsub("scroll",n.handleUpdate,{target:t}))})),D()(W()(n),"update",(function(e){var t=n.state.pushing;if(n.ticking=!1,n.assignRects(),t)return n.didReachStartingPoint()?n.stickToContextTop(e):n.didTouchScreenBottom()?n.stickToScreenBottom(e):n.stickToContextBottom(e);if(n.isOversized()){if(n.contextRect.top>0)return n.stickToContextTop(e);if(n.contextRect.bottom<window.innerHeight)return n.stickToContextBottom(e)}return n.didTouchScreenTop()?n.didReachContextBottom()?n.stickToContextBottom(e):n.stickToScreenTop(e):n.stickToContextTop(e)})),D()(W()(n),"handleUpdate",(function(e){n.ticking||(n.ticking=!0,n.frameId=requestAnimationFrame((function(){return n.update(e)})))})),D()(W()(n),"assignRects",(function(){var e=n.props.context,t=X(e)?e.current:e||document.body;n.triggerRect=n.triggerRef.current.getBoundingClientRect(),n.contextRect=t.getBoundingClientRect(),n.stickyRect=n.stickyRef.current.getBoundingClientRect()})),D()(W()(n),"didReachContextBottom",(function(){var e=n.props.offset;return n.stickyRect.height+e>=n.contextRect.bottom})),D()(W()(n),"didReachStartingPoint",(function(){return n.stickyRect.top<=n.triggerRect.top})),D()(W()(n),"didTouchScreenTop",(function(){return n.triggerRect.top<n.props.offset})),D()(W()(n),"didTouchScreenBottom",(function(){var e=n.props.bottomOffset;return n.contextRect.bottom+e>window.innerHeight})),D()(W()(n),"isOversized",(function(){return n.stickyRect.height>window.innerHeight})),D()(W()(n),"pushing",(function(e){n.props.pushing&&n.setState({pushing:e})})),D()(W()(n),"stick",(function(e,t){n.setState({bound:t,sticky:!0}),q()(n.props,"onStick",e,n.props)})),D()(W()(n),"unstick",(function(e,t){n.setState({bound:t,sticky:!1}),q()(n.props,"onUnstick",e,n.props)})),D()(W()(n),"stickToContextBottom",(function(e){q()(n.props,"onBottom",e,n.props),n.stick(e,!0),n.pushing(!0)})),D()(W()(n),"stickToContextTop",(function(e){q()(n.props,"onTop",e,n.props),n.unstick(e,!1),n.pushing(!1)})),D()(W()(n),"stickToScreenBottom",(function(e){var t=n.props.bottomOffset;n.stick(e,!1),n.setState({bottom:t,top:null})})),D()(W()(n),"stickToScreenTop",(function(e){var t=n.props.offset;n.stick(e,!1),n.setState({top:t,bottom:null})})),n}return U()(t,e),x()(t,[{key:"componentDidMount",value:function(){Object(H.a)()&&(this.props.active&&(this.handleUpdate(),this.addListeners(this.props)))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props,n=t.active,r=t.scrollContext,i=e.active,o=e.scrollContext;if(n!==i){if(i)return this.handleUpdate(),void this.addListeners(e);this.removeListeners(),this.setState({sticky:!1})}else r!==o&&(this.removeListeners(),this.addListeners(e))}},{key:"componentWillUnmount",value:function(){Object(H.a)()&&(this.props.active&&(this.removeListeners(),cancelAnimationFrame(this.frameId)))}},{key:"computeStyle",value:function(){var e=this.props.styleElement,t=this.state,n=t.bottom,r=t.bound,i=t.sticky,o=t.top;return i?E()({bottom:r?0:n,top:r?void 0:o,width:this.triggerRect.width},e):e}},{key:"render",value:function(){var e=this.props,n=e.children,r=e.className,i=this.state,a=i.bottom,c=i.bound,l=i.sticky,p=Object(d.a)(t,this.props),h=Object(f.a)(t,this.props),m=u()(l&&"ui",l&&"stuck-container",l&&(c?"bound-container":"fixed-container"),r),b=u()("ui",l&&(c?"bound bottom":"fixed"),l&&!c&&(null===a?"top":"bottom"),"sticky"),y=l&&this.stickyRect?{height:this.stickyRect.height}:{};return o.a.createElement(h,s()({},p,{className:m}),o.a.createElement("div",{ref:this.triggerRef,style:y}),o.a.createElement("div",{className:b,ref:this.stickyRef,style:this.computeStyle()},n))}}]),t}(i.Component);D()($,"defaultProps",{active:!0,bottomOffset:0,offset:0,scrollContext:Object(H.a)()?window:null}),D()($,"handledProps",["active","as","bottomOffset","children","className","context","offset","onBottom","onStick","onTop","onUnstick","pushing","scrollContext","styleElement"]);var Q=n("5XkN"),ee=n("4Wt7"),te=n.n(ee),ne=n("mvAy");function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var oe=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){ie(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({code:ne.a},ne.e),ae=function(e){var t=e.children,n=Object(i.useRef)();return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"@cs125/react-google-login"),o.a.createElement("meta",{name:"description",content:"React support for Google client-side login."}),o.a.createElement("link",{rel:"preconnect",href:"https://accounts.google.com",crossOrigin:"use-credentials"}),o.a.createElement("link",{rel:"preconnect",href:"https://ssl.gstatic.com",crossOrigin:"use-credentials"}),o.a.createElement("link",{rel:"preconnect",href:"https://apis.google.com",crossOrigin:"use-credentials"})),o.a.createElement(b,{text:!0},o.a.createElement(y.a,{innerRef:n},o.a.createElement(w,{basic:!0},o.a.createElement(V,{minWidth:1200},o.a.createElement(J,{position:"right"},o.a.createElement($,{context:n},o.a.createElement(w,{basic:!0,style:{paddingTop:64}},o.a.createElement(ne.d,null))))),o.a.createElement(Q.a,{floated:"right",src:te.a,style:{width:"4rem"},href:"https://cs125.cs.illinois.edu"}),o.a.createElement(r.a,{components:oe},t)))))},ce=n("b9Ze");var se={},le={_frontmatter:se},ue=ae;function pe(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(r.b)(ue,Object.assign({},le,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,Object(r.b)("inlineCode",{parentName:"h1"},"@cs125/react-google-login")),Object(r.b)(ne.b,{mdxType:"Lead"},Object(r.b)("p",null,"React Typescript support for ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://developers.google.com/identity/sign-in/web/sign-in"}),"Google Sign-in"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),"npm i @cs125/react-google-login\n")),Object(r.b)("h2",null,"Use"),Object(r.b)("p",null,"Visit the ",Object(r.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/cs125-illinois/react-google-login/"}),"documentation here"),"."),Object(r.b)("h2",null,"Demo"),Object(r.b)("p",null,"The login button below will open the standard Google Sign-in dialog.\nOnce you are signed in, your name, email address, photo, and a login token will be displayed."),Object(r.b)(ne.c,{mdxType:"LoginButton"}),Object(r.b)(ce.a,{mdxType:"WithUser"}))}pe.isMDXComponent=!0},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));n("dZ+Y"),n("KKXr"),n("2Spj"),n("eM6i"),n("8+KV"),n("0l/t"),n("LK8F"),n("pIFo"),n("V+eJ"),n("/SS/"),n("hHhE"),n("91GP"),n("HAE/"),n("rE2o"),n("ioFf"),n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx");var r,i,o,a,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),p=n("ZhWT"),d=n.n(p),f=n("q1tI"),h=n.n(f),m=n("MgzW"),b=n.n(m),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(O).map((function(e){return O[e]})),"charset"),j="cssText",w="href",k="http-equiv",E="innerHTML",C="itemprop",S="name",A="property",x="rel",P="src",R="target",N={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",W="encodeSpecialCharacters",M="onChangeClientState",U="titleTemplate",B=Object.keys(N).reduce((function(e,t){return e[N[t]]=t,e}),{}),D=[O.NOSCRIPT,O.SCRIPT,O.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},_=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,O.TITLE),n=$(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,L);return t||r||void 0},G=function(e){return $(e,M)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Z=function(e,t){return t.filter((function(e){return void 0!==e[O.BASE]})).map((function(e){return e[O.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],s=c.toLowerCase();-1===t.indexOf(s)||n===x&&"canonical"===e[n].toLowerCase()||s===x&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==E&&c!==j&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],s=b()({},r[c],i[c]);r[c]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:e.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;se(O.BODY,r),se(O.HTML,i),ce(p,d);var f={baseTag:le(O.BASE,n),linkTags:le(O.LINK,o),metaTags:le(O.META,a),noscriptTags:le(O.NOSCRIPT,c),scriptTags:le(O.SCRIPT,l),styleTags:le(O.STYLE,u)},h={},m={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=f[e].oldTags)})),t&&t(),s(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(O.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===i.indexOf(s)&&i.push(s);var u=o.indexOf(s);-1!==u&&o.splice(u,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);i.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===E)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[N[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case O.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,i=pe(n,r),[h.a.createElement(O.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=ue(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+K(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=N[e]||e;if(n===E||n===j){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),h.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===E||e===j)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(O.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,i,r),link:de(O.LINK,o,r),meta:de(O.META,a,r),noscript:de(O.NOSCRIPT,c,r),script:de(O.SCRIPT,s,r),style:de(O.STYLE,l,r),title:de(O.TITLE,{title:p,titleAttributes:d},r)}},he=u()((function(e){return{baseTag:Z([w,R],e),bodyAttributes:J(y,e),defer:$(e,I),encode:$(e,W),htmlAttributes:J(g,e),linkTags:X(O.LINK,[x,w],e),metaTags:X(O.META,[S,T,k,A,C],e),noscriptTags:X(O.NOSCRIPT,[E],e),onChangeClientState:G(e),scriptTags:X(O.SCRIPT,[P,E],e),styleTags:X(O.STYLE,[j],e),title:V(e),titleAttributes:J(v,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),fe)((function(){return null})),me=(i=he,a=o=function(e){function t(){return q(this,t),_(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:t};case O.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case O.TITLE:return H({},i,((t={})[r.type]=a,t.titleAttributes=H({},o),t));case O.BODY:return H({},i,{bodyAttributes:H({},o)});case O.HTML:return H({},i,{htmlAttributes:H({},o)})}return H({},i,((n={})[r.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(Y(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(i,r)},z(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(h.a.Component),o.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-mdx-bb0a393613fa0b60ebda.js.map