!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function T(e){return l=e,f=setTimeout(O,t),s?p(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function O(){var e=b();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,a-(e-l)):n}(e))}function h(e){return f=void 0,m&&o?p(e):(o=i=void 0,u)}function w(){var e=b(),n=j(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return T(c);if(d)return f=setTimeout(O,t),p(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(b())},w}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var T=document.querySelector("form"),j=document.querySelector('input[name="email"]'),O=document.querySelector('textarea[name="message"]');T.addEventListener("submit",(function(e){e.preventDefault(),console.log("Email: ".concat(j.value,", Message: ").concat(O.value)),localStorage.removeItem("feedback-form-state"),T.reset()})),T.addEventListener("input",e(t)((function(e){var t=e.target,n=t.nodeName,o=t.value;switch(n){case"INPUT":w.email=o,localStorage.setItem("feedback-form-state",JSON.stringify(w));break;case"TEXTAREA":w.message=o,localStorage.setItem("feedback-form-state",JSON.stringify(w))}}),500));var h=localStorage.getItem("feedback-form-state"),w=h&&JSON.parse(h)||{};j.value=w.email?w.email:"",O.value=w.message?w.message:""}();
//# sourceMappingURL=03-feedback.61622148.js.map