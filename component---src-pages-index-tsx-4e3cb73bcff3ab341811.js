/*! For license information please see component---src-pages-index-tsx-4e3cb73bcff3ab341811.js.LICENSE.txt */
(self.webpackChunkaltmeta_pixel_demo=self.webpackChunkaltmeta_pixel_demo||[]).push([[691],{3720:function(e,t,n){!function(){var t={808:function(e,t,n){var r,o,i;void 0===(o="function"==typeof(r=i=function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(t,n,i){if("undefined"!=typeof document){"number"==typeof(i=e({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var c=JSON.stringify(n);/^[\{\[]/.test(c)&&(n=c)}catch(e){}n=r.write?r.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var a="";for(var u in i)i[u]&&(a+="; "+u,!0!==i[u]&&(a+="="+i[u].split(";")[0]));return document.cookie=t+"="+n+a}}function c(e,n){if("undefined"!=typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],c=0;c<i.length;c++){var a=i[c].split("="),u=a.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var l=t(a[0]);if(u=(r.read||r)(u,l)||t(u),n)try{u=JSON.parse(u)}catch(e){}if(o[l]=u,e===l)break}catch(e){}}return e?o[e]:o}}return o.set=i,o.get=function(e){return c(e,!1)},o.getJSON=function(e){return c(e,!0)},o.remove=function(t,n){i(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))})?r.call(t,n,t,e):r)||(e.exports=o),e.exports=i()},703:function(e,t,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},697:function(e,t,n){e.exports=n(703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};!function(){"use strict";o.r(i),o.d(i,{Cookies:function(){return u()},OPTIONS:function(){return g},SAME_SITE_OPTIONS:function(){return O},VISIBLE_OPTIONS:function(){return T},default:function(){return A},getCookieConsentValue:function(){return w},resetCookieConsentValue:function(){return S}});var e=n(7294),t=o.n(e),r=o(697),c=o.n(r),a=o(808),u=o.n(a);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var s=["children"];function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={TOP:"top",BOTTOM:"bottom",NONE:"none"},O={STRICT:"strict",LAX:"lax",NONE:"none"},T={HIDDEN:"hidden",SHOW:"show",BY_COOKIE_VALUE:"byCookieValue"},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=u().get(e);return void 0===t&&(t=u().get(C(e))),t},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;u().remove(e)},C=function(e){return"".concat(e,"-legacy")},k="CookieConsent",x=function(e){var t=e.condition,n=e.wrapper,r=e.children;return t?n(r):r},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),v(h(t=i.call(this,e)),"handleScroll",(function(){var e=t.props.acceptOnScrollPercentage,n=document.documentElement,r=document.body,o="scrollTop",i="scrollHeight";(n[o]||r[o])/((n[i]||r[i])-n.clientHeight)*100>e&&t.accept(!0)})),v(h(t),"removeScrollListener",(function(){t.props.acceptOnScroll&&window.removeEventListener("scroll",t.handleScroll)})),t.state={visible:!1,style:{alignItems:"baseline",background:"#353535",color:"white",display:"flex",flexWrap:"wrap",justifyContent:"space-between",left:"0",position:"fixed",width:"100%",zIndex:"999"},buttonStyle:{background:"#ffd42d",border:"0",borderRadius:"0px",boxShadow:"none",color:"black",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},declineButtonStyle:{background:"#c12a2a",border:"0",borderRadius:"0px",boxShadow:"none",color:"#e5e5e5",cursor:"pointer",flex:"0 0 auto",padding:"5px 10px",margin:"15px"},contentStyle:{flex:"1 0 300px",margin:"15px"},overlayStyle:{position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999",backgroundColor:"rgba(0,0,0,0.3)"}},t}return(n=[{key:"componentDidMount",value:function(){var e=this.props.debug;(void 0===this.getCookieValue()||e)&&(this.setState({visible:!0}),this.props.acceptOnScroll&&window.addEventListener("scroll",this.handleScroll,{passive:!0}))}},{key:"componentWillUnmount",value:function(){this.removeScrollListener()}},{key:"accept",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.props,n=t.cookieName,r=t.cookieValue,o=t.hideOnAccept,i=t.onAccept;this.setCookie(n,r),i(null!=e&&e),o&&(this.setState({visible:!1}),this.removeScrollListener())}},{key:"decline",value:function(){var e=this.props,t=e.cookieName,n=e.declineCookieValue,r=e.hideOnDecline,o=e.onDecline;e.setDeclineCookie&&this.setCookie(t,n),o(),r&&this.setState({visible:!1})}},{key:"setCookie",value:function(e,t){var n=this.props,r=n.extraCookieOptions,o=n.expires,i=n.sameSite,c=this.props.cookieSecurity;void 0===c&&(c=!location||"https:"===location.protocol);var a=d(d({expires:o},r),{},{sameSite:i,secure:c});i===O.NONE&&u().set(C(e),t,a),u().set(e,t,a)}},{key:"getCookieValue",value:function(){var e=this.props.cookieName;return w(e)}},{key:"render",value:function(){var e=this;switch(this.props.visible){case T.HIDDEN:return null;case T.BY_COOKIE_VALUE:if(!this.state.visible)return null}var n=this.props,r=n.location,o=n.style,i=n.buttonStyle,c=n.declineButtonStyle,a=n.contentStyle,u=n.disableStyles,l=n.buttonText,s=n.declineButtonText,p=n.containerClasses,y=n.contentClasses,b=n.buttonClasses,h=n.buttonWrapperClasses,m=n.declineButtonClasses,v=n.buttonId,O=n.declineButtonId,w=n.disableButtonStyles,S=n.enableDeclineButton,C=n.flipButtons,k=n.ButtonComponent,E=n.overlay,A=n.overlayClasses,j=n.overlayStyle,P=n.ariaAcceptLabel,I=n.ariaDeclineLabel,B={},L={},_={},N={},D={};switch(u?(B=f({},o),L=f({},i),_=f({},c),N=f({},a),D=f({},j)):(B=f({},d(d({},this.state.style),o)),N=f({},d(d({},this.state.contentStyle),a)),D=f({},d(d({},this.state.overlayStyle),j)),w?(L=f({},i),_=f({},c)):(L=f({},d(d({},this.state.buttonStyle),i)),_=f({},d(d({},this.state.declineButtonStyle),c)))),r){case g.TOP:B.top="0";break;case g.BOTTOM:B.bottom="0"}var R=[];return S&&R.push(t().createElement(k,{key:"declineButton",style:_,className:m,id:O,"aria-label":I,onClick:function(){e.decline()}},s)),R.push(t().createElement(k,{key:"acceptButton",style:L,className:b,id:v,"aria-label":P,onClick:function(){e.accept()}},l)),C&&R.reverse(),t().createElement(x,{condition:E,wrapper:function(e){return t().createElement("div",{style:D,className:A},e)}},t().createElement("div",{className:"".concat(p),style:B},t().createElement("div",{style:N,className:y},this.props.children),t().createElement("div",{className:"".concat(h)},R.map((function(e){return e})))))}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,n),c}(e.Component);E.propTypes={location:c().oneOf(Object.keys(g).map((function(e){return g[e]}))),visible:c().oneOf(Object.keys(T).map((function(e){return T[e]}))),sameSite:c().oneOf(Object.keys(O).map((function(e){return O[e]}))),style:c().object,buttonStyle:c().object,declineButtonStyle:c().object,contentStyle:c().object,children:c().any,disableStyles:c().bool,hideOnAccept:c().bool,hideOnDecline:c().bool,onAccept:c().func,onDecline:c().func,buttonText:c().oneOfType([c().string,c().func,c().element]),declineButtonText:c().oneOfType([c().string,c().func,c().element]),cookieName:c().string,cookieValue:c().oneOfType([c().string,c().bool,c().number]),declineCookieValue:c().oneOfType([c().string,c().bool,c().number]),setDeclineCookie:c().bool,debug:c().bool,expires:c().number,containerClasses:c().string,contentClasses:c().string,buttonClasses:c().string,buttonWrapperClasses:c().string,declineButtonClasses:c().string,buttonId:c().string,declineButtonId:c().string,extraCookieOptions:c().object,disableButtonStyles:c().bool,enableDeclineButton:c().bool,flipButtons:c().bool,ButtonComponent:c().elementType,cookieSecurity:c().bool,overlay:c().bool,overlayClasses:c().string,overlayStyle:c().object,ariaAcceptLabel:c().string,ariaDeclineLabel:c().string,acceptOnScroll:c().bool,acceptOnScrollPercentage:c().number},E.defaultProps={disableStyles:!1,hideOnAccept:!0,hideOnDecline:!0,location:g.BOTTOM,visible:T.BY_COOKIE_VALUE,onAccept:function(){},onDecline:function(){},cookieName:k,cookieValue:!0,declineCookieValue:!1,setDeclineCookie:!0,buttonText:"I understand",declineButtonText:"I decline",debug:!1,expires:365,containerClasses:"CookieConsent",contentClasses:"",buttonClasses:"",buttonWrapperClasses:"",declineButtonClasses:"",buttonId:"rcc-confirm-button",declineButtonId:"rcc-decline-button",extraCookieOptions:{},disableButtonStyles:!1,enableDeclineButton:!1,flipButtons:!1,sameSite:O.LAX,ButtonComponent:function(e){var n=e.children,r=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,s);return t().createElement("button",r,n)},overlay:!1,overlayClasses:"",ariaAcceptLabel:"Accept cookies",ariaDeclineLabel:"Decline cookies",acceptOnScroll:!1,acceptOnScrollPercentage:25};var A=E}(),e.exports=i}()},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,c){if(e===c)return!0;if(e&&c&&"object"==typeof e&&"object"==typeof c){if(e.constructor!==c.constructor)return!1;var a,u,l,s;if(Array.isArray(e)){if((a=e.length)!=c.length)return!1;for(u=a;0!=u--;)if(!i(e[u],c[u]))return!1;return!0}if(n&&e instanceof Map&&c instanceof Map){if(e.size!==c.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!c.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],c.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&c instanceof Set){if(e.size!==c.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!c.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(c)){if((a=e.length)!=c.length)return!1;for(u=a;0!=u--;)if(e[u]!==c[u])return!1;return!0}if(e.constructor===RegExp)return e.source===c.source&&e.flags===c.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===c.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===c.toString();if((a=(l=Object.keys(e)).length)!==Object.keys(c).length)return!1;for(u=a;0!=u--;)if(!Object.prototype.hasOwnProperty.call(c,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=a;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],c[l[u]]))return!1;return!0}return e!=e&&c!=c}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var c=o.prototype;return c.UNSAFE_componentWillMount=function(){l.push(this),s()},c.componentDidUpdate=function(){s()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},c.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",a),f}}},4456:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Le}});var r,o,i,c,a=n(7294),u=n(5697),l=n.n(u),s=n(4839),f=n.n(s),p=n(2993),d=n.n(p),y=n(6494),b=n.n(y),h="bodyAttributes",m="htmlAttributes",v="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(g).map((function(e){return g[e]})),"charset"),T="cssText",w="href",S="http-equiv",C="innerHTML",k="itemprop",x="name",E="property",A="rel",j="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},B="defaultTitle",L="defer",_="encodeSpecialCharacters",N="onChangeClientState",D="titleTemplate",R=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),M=[g.NOSCRIPT,g.SCRIPT,g.STYLE],q="data-react-helmet",Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=G(e,g.TITLE),n=G(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=G(e,B);return t||r||void 0},K=function(e){return G(e,N)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return V({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),c=0;c<i.length;c++){var a=i[c],u=a.toLowerCase();-1===t.indexOf(u)||n===A&&"canonical"===e[n].toLowerCase()||u===A&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(a)||a!==C&&a!==T&&a!==k||(n=a)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),c=0;c<i.length;c++){var a=i[c],u=b()({},r[a],o[a]);r[a]=u}return e}),[]).reverse()},G=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(g.BODY,r),ue(g.HTML,o),ae(f,p);var d={baseTag:le(g.BASE,n),linkTags:le(g.LINK,i),metaTags:le(g.META,c),noscriptTags:le(g.NOSCRIPT,a),scriptTags:le(g.SCRIPT,l),styleTags:le(g.STYLE,s)},y={},b={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(y[e]=n),r.length&&(b[e]=d[e].oldTags)})),t&&t(),u(e,y,b)},ce=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(g.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],i=[].concat(o),c=Object.keys(t),a=0;a<c.length;a++){var u=c[a],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==c.join(",")&&n.setAttribute(q,c.join(","))}},le=function(e,t){var n=document.head||document.querySelector(g.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],c=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var a=void 0===t[r]?"":t[r];n.setAttribute(r,a)}n.setAttribute(q,"true"),o.some((function(e,t){return c=t,n.isEqualNode(e)}))?o.splice(c,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=fe(n,r),[a.createElement(g.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ce(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+W(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case m:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===C||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",c=-1===M.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(c?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,c=e.metaTags,a=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(g.BASE,t,r),bodyAttributes:pe(h,n,r),htmlAttributes:pe(m,o,r),link:pe(g.LINK,i,r),meta:pe(g.META,c,r),noscript:pe(g.NOSCRIPT,a,r),script:pe(g.SCRIPT,u,r),style:pe(g.STYLE,l,r),title:pe(g.TITLE,{title:f,titleAttributes:p},r)}},ye=f()((function(e){return{baseTag:X([w,P],e),bodyAttributes:J(h,e),defer:G(e,L),encode:G(e,_),htmlAttributes:J(m,e),linkTags:$(g.LINK,[A,w],e),metaTags:$(g.META,[x,O,S,E,k],e),noscriptTags:$(g.NOSCRIPT,[C],e),onChangeClientState:K(e),scriptTags:$(g.SCRIPT,[j,C],e),styleTags:$(g.STYLE,[T],e),title:z(e),titleAttributes:J(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),de)((function(){return null})),be=(o=ye,c=i=function(e){function t(){return U(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return V({},r,((t={})[n.type]=[].concat(r[n.type]||[],[V({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(r.type){case g.TITLE:return V({},o,((t={})[r.type]=c,t.titleAttributes=V({},i),t));case g.BODY:return V({},o,{bodyAttributes:V({},i)});case g.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((n={})[r.type]=V({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=V({},t);return Object.keys(e).forEach((function(t){var r;n=V({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(F(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=V({},n);return t&&(r=this.mapChildrenToProps(t,r)),a.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(a.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},c);be.renderStatic=be.rewind;var he=n(3720),me=n.n(he),ve=n(9499),ge=n(7394),Oe=n(5444),Te=n(3339),we={marginTop:0,marginBottom:64,maxWidth:640},Se=function(){return(0,Te.tZ)("header",null,(0,Te.tZ)("title",null,"Altmeta.org Pixel Test"),(0,Te.tZ)(Oe.Link,{to:"/"},(0,Te.tZ)("h1",{style:we},"Altmeta.org Pixel Test")))};var Ce=a.createContext(void 0),ke=function(e){var t=e.children,n=(0,a.useState)({}),r=n[0],o=n[1];return(0,a.useEffect)((function(){var e;e=function(e){o(e)},void 0!==window.fbq?e({fbq:window.fbq}):Object.defineProperty(window,"fbq",{configurable:!0,set:function(t){delete window.fbq,window.fbq=t,e({fbq:t})}})}),[o]),(0,Te.tZ)(Ce.Provider,{value:r},t)},xe={maxWidth:650},Ee={color:"#232129",padding:96,fontFamily:"-apple-system, Roboto, sans-serif, serif"},Ae=function(e){var t=e.children,n=(0,ve.useLocation)();return(0,Te.tZ)(ke,null,(0,Te.tZ)(be,{title:"Altmeta.org Pixel Test",meta:[{name:"description",content:"a website for testing facebook pixel"},{name:"keywords",content:"facebook, pixel"},{name:"author",content:"Zack Spellman"}]},(0,Te.tZ)("html",{lang:"en"})),(0,Te.tZ)("div",{style:xe},(0,Te.tZ)(Se,null),(0,Te.tZ)("main",{style:Ee},t),(0,Te.tZ)(me(),{cookieName:"cookie-consent",onAccept:function(){return(0,ge.initializeAndTrack)(n)}},"This website uses cookies to enhance the user experience.")))},je={marginBottom:48},Pe=function(e){var t=e.fbq;return(0,Te.tZ)(a.Fragment,null,(0,Te.tZ)("h2",{style:je},"Test events"),(0,Te.tZ)("button",{name:"SubscribeButtonClick"},"Subscribe"),(0,Te.tZ)("button",{name:"Purchase",onClick:function(){t("track","Purchase",{order_id:"test_order_id",value:115,currency:"USD"})}},"Purchase"))},Ie=function(){return(0,Te.tZ)("h2",{style:je},"You must allow tracking to test facebook pixel.")},Be=function(){var e=function(){var e=a.useContext(Ce);if(null==e)throw new Error("useFacebookPixel must be used within a FacebookPixelProvider");return e.fbq}();return console.log("Rendering MainContent, ",void 0!==e),void 0!==e?(0,Te.tZ)(Pe,{fbq:e}):(0,Te.tZ)(Ie,null)},Le=function(){return(0,Te.tZ)(Ae,null,(0,Te.tZ)(Be,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-4e3cb73bcff3ab341811.js.map