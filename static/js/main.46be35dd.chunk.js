(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(t,e,c){"use strict";c.r(e);var n=c(3),a=c.n(n),i=c(5),s=c(1),b=(c(10),c(11),c(4)),d=c.n(b),l=c(0),r=function(t){var e=t.tabs,c=t.selectedTabId,n=t.onTabSelected;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:e.map((function(t){return Object(l.jsx)("li",{className:d()({"is-active":t.id===c}),children:Object(l.jsx)("a",{href:"#".concat(t.id),onClick:function(){n(t)},children:t.title})},t.id)}))})})})},o=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(o[0]),e=Object(i.a)(t,2),c=e[0],n=e[1];return Object(l.jsxs)("div",{className:"section",children:[Object(l.jsxs)("h1",{className:"title",children:["Selected tab is\xa0",c.title]}),Object(l.jsx)(r,{tabs:o,selectedTabId:c.id,onTabSelected:function(t){c.id!==t.id&&n(t)}}),Object(l.jsx)("div",{children:Object(l.jsx)("div",{className:"block","data-cy":"tab-content",children:c.content})})]})};a.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.46be35dd.chunk.js.map