!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.YuiToast=t():e.YuiToast=t()}(self,(function(){return(()=>{"use strict";var e={826:(e,t,o)=>{function n(e,t,o){const n={success:"#67c23a",warn:"#e6a23c",danger:"#f56c6c",info:"#161618"};let i=document.querySelector("body");i.style.overflow="hidden";let s=r(document.createElement("div"),{position:"fixed",top:"0",left:"0",width:"100%",height:"100%"}),a=r(document.createElement("div"),{position:"relative",top:"50%",left:"50%",padding:"20px",width:"50%",transform:"translate(-50%, -50%)",borderRadius:"4px",opacity:0,fontSize:"15px",color:"#fff",lineHeight:"1.5em",textAlign:"center"}),l=document.createTextNode(t);a.appendChild(l),s.appendChild(a),i.appendChild(s),setTimeout((()=>{o&&(s&&(s.style.transition="background-color 0.5s ease-in-out"),s&&(s.style.backgroundColor="rgba(0,0,0,0.5)")),a&&(a.style.transition="all 0.5s"),a&&(a.style.backgroundColor=n[e]),a&&(a.style.opacity="1")})),setTimeout((()=>{i&&i.removeChild(s),i&&(i.style.overflow="")}),2500)}function r(e,t){for(let o in t)e.style[o]=t[o];return e}o.r(t),o.d(t,{Toast:()=>i});const i={name:"$yToast",success(e="",t=!1){n("success",e,t)},warn(e="",t=!1){n("warn",e,t)},danger(e="",t=!1){n("danger",e,t)},info(e="",t=!1){n("info",e,t)},install:e=>{e.prototype[i.name]=i}}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}return o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(826)})()}));