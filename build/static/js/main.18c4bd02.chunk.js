(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(n,e,t){n.exports=t(25)},20:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),l=t(1),c=(t(20),t(2)),p="767px",d="768px",u="992px",s=function(){return"@media (max-width: ".concat(p,")")},f=function(){return"@media (min-width: ".concat(d,")")},g=function(){return"@media (min-width: ".concat(u,")")},m="#FFFFFF",x=10;function b(){var n=Object(l.a)(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: ",";\n  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);\n  min-height: 56px;\n  z-index: ",";\n\n  "," {\n    min-height: 80px;\n    padding: 12px 24px;\n    left: 88px;\n  }\n"]);return b=function(){return n},n}var h=c.b.header(b(),m,x,f),w=function(){return r.a.createElement(h,null)},v=t(3),E=t(12),k=t.n(E),y=function(n){var e=n.activeIndex,t=n.components,i=void 0===t?[]:t,o=n.expandAll,l=void 0!==o&&o,c=Object(a.useState)(e),p=Object(v.a)(c,2),d=p[0],u=p[1];return r.a.createElement(a.Fragment,null,i.map(function(n,e){if(!n)return null;var t=n.header,i=n.content;return r.a.createElement(a.Fragment,{key:e},r.a.createElement(k.a,{open:l||e===d,triggerTagName:"div",handleTriggerClick:function(){var n;u(n=d===(n=e)?null:n)},trigger:t},i))}))};function F(){var n=Object(l.a)(["\n  display: block;\n\n  span {\n    width: 24px;\n    height: 24px;\n    border: 1px solid rgba(125,125,125,0.5);\n    border-radius: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 0 auto;\n    cursor: pointer;\n    transition: all 0.5s ease;\n\n    &:hover {\n      box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);\n      transform: translateY(-2px);\n    }\n  }\n"]);return F=function(){return n},n}var j=c.b.div(F()),C=function(){return r.a.createElement(j,{className:"plus-icon",onClick:function(){return alert("Click Add More")}},r.a.createElement("span",null,"+"))};function O(){var n=Object(l.a)(["\n  display: inline-block;\n  width: 100%;\n  border: 1px solid rgba(125,125,125,0.5);\n  background-color: #FFFFFF;\n  border-radius: 4px;\n  box-shadow: 0px 0px 16px rgba(0,0,0,0.1);\n  margin: 40px 0 16px;\n\n  "," {\n    width: 80%;\n    margin: 40px 40px 16px;\n  }\n  "," {\n    width: 70%;\n  }\n\n  .Collapsible {\n    padding: 12px 16px;\n    min-height: 68px;\n\n    &:not(:last-child){\n      border-bottom: 1px solid rgba(125,125,125,0.5);\n    }\n\n    .header {\n      position: relative;\n      display: flex;\n      align-items: center;\n\n      "," {\n        flex-wrap: wrap;\n      }\n\n      .left-col {\n        width: 100%;\n        "," {\n          width: 40%;\n        }\n  \n        p {\n          font-size: 15px;\n          line-height: 1.2;\n          letter-spacing: -0.3px;\n          font-weight: 500;\n          margin-bottom: 0;\n\n          ","{\n            font-size: 18px;\n            line-height: 1.33;\n            letter-spacing: -0.29px;\n          }\n        }\n      }\n      \n      .right-col {\n        width: 100%;\n        display: flex;\n        justify-content: flex-end;\n        ","{\n          margin-top: 12px;\n        }\n        "," {\n          width: 60%;\n        }\n  \n        .btn {\n          font-weight: 500;\n          border-color: rgba(125,125,125,0.5);\n          padding: 8px 16px;\n\n          ","{\n            font-size: 15px;\n            letter-spacing: -0.3px;\n            padding: 8px 12px;\n          }\n\n          &:not(:last-child){\n            margin-right: 10px;\n            ","{\n              margin-right: 16px;\n            }\n          }\n\n          &.expand {\n            ",'{\n              min-width: 96px;\n            }\n              \n            \n            &:after {\n              content: "Expand";\n            }\n          }\n        }\n\n        .group-btn-action {\n          opacity: 0;\n          visibility: hidden;\n          padding-right: 10px;\n          transition: opacity .5s ease-in-out;\n          width: 100%;\n          display: flex;\n          justify-content: flex-end;\n\n          ','{\n            padding-right: 16px;\n          }\n          \n          .file-icon, .delete-icon {\n            &:after {\n              content: "";\n              width: 13px;\n              height: 13px; \n              display: inline-block;\n              vertical-align: middle;\n\n              ','{\n                width: 16px;\n                height: 16px; \n              }\n            }\n          }\n  \n          .file-icon {\n            &:after {\n              background: url("./image/file.svg") no-repeat center / contain;\n            }\n          }\n          .delete-icon {  \n            &:after {\n              background: url("./image/delete.svg") no-repeat center / contain;\n            }\n\n            &:hover {\n              background-color: rgb(241, 95, 117);\n              border-color: rgb(241, 95, 117);\n              &:after {\n                filter: invert(1);\n              }\n            }\n          }\n        }\n      }\n    }\n\n    .is-open {\n      .header .right-col {\n        .group-btn-action {\n          opacity: 1;\n          visibility: visible;\n        }\n\n        .btn.expand:after {\n          content: "Collapse";\n        }\n      }\n    }\n\n    .Collapsible__contentOuter {\n      .Collapsible__contentInner {\n        display: flex;\n        flex-wrap: wrap;\n        margin-top: 32px;\n\n        .image-card {\n          width: 218px;\n          height: 218px;\n          background-color: #f3f3f3;\n          margin: 0 16px 16px 0;\n          display: flex;\n          flex-wrap: wrap;\n          flex-direction: column;\n          justify-content: center;\n          border: 1px solid rgba(125,125,125,0.5);\n          border-radius: 3px;\n          transition: all 0.5s ease;\n          cursor: pointer;\n\n          ',"{\n            width: 278px;\n            height: 278px;\n          }\n\n          &:hover {\n            box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);\n            transform: translateY(-2px);\n          }\n\n          figure {\n            height: 178px;\n            width: 100%;\n            margin-bottom: 0;\n            ","{\n              height: 238px;\n            }\n          }\n\n          .btn-action {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n\n            span {\n              flex: 1;\n              font-weight: 500;\n              text-align: center;\n              padding: 8px;\n              border: solid rgba(125,125,125,0.5);\n              border-width: 1px 1px 0 0;\n              height: 38px;\n              cursor: pointer;\n\n              &:last-child {\n                border-right-width: 0;\n              }\n\n              &:hover {\n                background-color: #4A90E2;\n                color: #FFFFFF;\n                border-color: #4A90E2;\n                margin-left: -1px;\n\n                &:first-child {\n                  border-bottom-left-radius: 2px;\n                  margin-left: 0px;\n                }\n\n                &:last-child {\n                  border-bottom-right-radius: 2px;\n\n                }\n\n                img {\n                  filter: invert(1);\n                }\n              }\n            }\n          }\n\n          "," {\n            width: auto;\n            margin: 0;\n\n            span {\n              width: 40px;\n              height: 40px;\n              font-size: 24px;\n              background-color: #aaaaaa;\n              color: #f1f1f1;\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return O=function(){return n},n}var N=c.b.div(O(),f,g,s,f,f,s,f,s,g,f,g,f,g,g,j);function z(){var n=Object(l.a)(["\n    top: 30%;\n  "]);return z=function(){return n},n}function _(){var n=Object(l.a)(["\n  position: fixed;\n  width: 320px;\n  height: 320px;\n  background-color: #FFFFFF;\n  z-index: 10;\n  -webkit-transition: all 0.3s ease-out 0s;\n  transition: all 0.3s ease-out 0s;\n  top: -100%;\n  left: 50%;\n  margin-top: -156px;\n  margin-left: -156px;\n  border-radius: 4px;\n  box-shadow: 0px 0px 16px rgba(0,0,0,0.1);\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n\n  ","\n\n  p {\n    font-size: 15px;\n    line-height: 1.2;\n    letter-spacing: -0.3px;\n    margin-bottom: 16px;\n\n    span {\n      display: block;\n      font-size: 16px;\n      line-height: 1.125;\n      letter-spacing: -0.26px;\n      font-weight: 500;\n      margin-bottom: 8px;\n\n      "," {\n        font-size: 18px;\n        line-height: 1.33;\n        letter-spacing: -0.29px;\n      }\n    }\n  }\n\n  .btn-wrapper {\n    .btn {\n      padding: 8px 16px;\n\n      &:not(:last-child){\n        margin-right: 12px;\n      }\n\n      &.yes {\n        background-color: #f44336;\n        border-color: #f44336;\n        color: #FFFFFF;\n      }\n    }\n  }\n"]);return _=function(){return n},n}function A(){var n=Object(l.a)(["\n    width: 100%;\n    opacity: 1;\n  "]);return A=function(){return n},n}function Y(){var n=Object(l.a)(["\n  position: fixed;\n  left: 0px;\n  top: 0;\n  width: 0px;\n  opacity: 0;\n  height: 100vh;\n  z-index: ",";\n  background-color: rgba(69, 69, 69, 0.5);\n  transition: opacity 0.3s ease 0s;\n\n  ",";\n"]);return Y=function(){return n},n}var I=c.b.div(Y(),x,function(n){return n.open&&Object(c.a)(A())}),D=c.b.div(_(),function(n){return n.open&&Object(c.a)(z())},f),M=function(n){var e=n.isOpen,t=void 0!==e&&e,i=n.closeModal;return r.a.createElement(a.Fragment,null,r.a.createElement(I,{open:t}),r.a.createElement(D,{open:t},r.a.createElement("p",null,r.a.createElement("span",null,"Are you sure?"),"You App data will be delete this widge. Are you sure want to change it?"),r.a.createElement("div",{className:"btn-wrapper"},r.a.createElement("button",{className:"btn yes",onClick:function(){return alert("Yes, delete it!")}},"Yes, delete it!"),r.a.createElement("button",{className:"btn btn-primary",onClick:i},"Cancel"))))},P=function(){var n=Object(a.useState)(!1),e=Object(v.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)({}),l=Object(v.a)(o,2),c=l[0],p=l[1],d=function(n){n&&n.stopPropagation()};Object(a.useEffect)(function(){Object.keys(c).length>0||fetch("https://www.mocky.io/v2/5e8a7b512d00003c1a1a4665").then(function(n){return n.json()}).then(function(n){p(n)}).catch(function(n){return n})},[]),console.log(c.homepage_data);var u=c.homepage_data&&c.homepage_data.map(function(n){return{header:r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"left-col",onClick:function(n){return d(n)}},r.a.createElement("p",null,n.title)),r.a.createElement("div",{className:"right-col"},r.a.createElement("div",{className:"group-btn-action",onClick:function(n){return d(n)}},r.a.createElement("button",{className:"btn file-icon",onClick:function(){return alert("Click File Icon")}}),r.a.createElement("button",{className:"btn delete-icon",onClick:function(n){return function(n){n&&n.preventDefault(),n&&n.stopPropagation(),i(!0),document.body.classList.add("scroll-locked")}(n)}}),r.a.createElement("button",{className:"btn",onClick:function(){return alert("Click Hide")}},"Hide")),r.a.createElement("button",{className:"btn expand"}))),content:r.a.createElement(a.Fragment,null,n.data.map(function(n,e){return r.a.createElement("div",{className:"image-card",key:e,onClick:function(e){return function(n,e){n&&n.preventDefault(),n&&n.stopPropagation(),window.location.href=e}(e,n.href_url)}},r.a.createElement("figure",{style:{background:"url(".concat(n.image_url,") no-repeat center / cover")}}),r.a.createElement("div",{className:"btn-action"},r.a.createElement("span",{onClick:function(){return alert("Click Update")}},"Update"),r.a.createElement("span",{onClick:function(){return alert("Click Edit")}},"Edit"),r.a.createElement("span",{onClick:function(){return alert("Click Delete")}},r.a.createElement("img",{src:"./image/delete.svg",alt:"delete"}))))}),r.a.createElement("div",{className:"image-card",onClick:function(){return alert("Click Add Card")}},r.a.createElement(C,null)))}});return r.a.createElement(a.Fragment,null,r.a.createElement(N,null,r.a.createElement(y,{components:u})),r.a.createElement(M,{isOpen:t,closeModal:function(){i(!1),document.body.classList.remove("scroll-locked")}}))};function S(){var n=Object(l.a)(["\n  width: 100%;\n  min-height: 100vh;\n  transition: all 0.3s;\n  margin-left: 88px;\n  background-color: #f3f3f3;\n  ","{\n    margin-left: 0;\n    width: 100%;\n  }\n\n  "," {\n    margin: 0 40px 80px;\n\n    ","{\n      width: 80%;\n    }\n    ","{\n      width: 70%;\n    }\n  }\n"]);return S=function(){return n},n}function H(){var n=Object(l.a)(["\n  background: #1f2530;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  overflow: hidden;\n  overflow-y: scroll;\n  transition: all 0.3s;\n  min-width: 88px;\n  max-width: 88px;\n  box-shadow: -2px 0px 8px rgba(0, 0, 0, 0.13);\n  margin-right: -88px;\n\n  ","{\n    display: none;\n  }\n"]);return H=function(){return n},n}var J=c.b.aside(H(),s),L=c.b.div(S(),s,j,f,g),T=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(J,null),r.a.createElement(L,null,r.a.createElement(w,null),r.a.createElement("div",{className:"content-wrap"},r.a.createElement(P,null),r.a.createElement(C,null))))};function U(){var n=Object(l.a)(["\n  display: flex;\n"]);return U=function(){return n},n}var B=c.b.div(U()),q=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(B,null,r.a.createElement(T,null)))};o.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.18c4bd02.chunk.js.map