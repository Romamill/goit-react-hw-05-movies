"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[310],{580:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(439),i=n(87),u=n(689),c=n(184);function a(t){var e=t.title,n=t.id,a=(0,i.lr)(),o=(0,r.Z)(a,1)[0];return(0,c.jsx)("li",{children:(0,c.jsx)(i.rU,{to:"/goit-react-hw-05-movies/movies/".concat(n),state:{location:(0,u.TH)().pathname,search:o.get("query")},children:e})})}function o(t){var e=t.movies;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title;return(0,c.jsx)(a,{title:n,id:e},e)}))})})}},310:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,i=n(439),u=n(626),c=n(580),a=n(791),o=n(87),s=n(168),l=n(686).Z.form(r||(r=(0,s.Z)(["\npadding: 10px 0;\n"]))),f=n(184);function h(){var t=(0,a.useState)(""),e=(0,i.Z)(t,2),n=e[0],r=e[1],s=(0,a.useState)([]),h=(0,i.Z)(s,2),d=h[0],m=h[1],v=(0,o.lr)(),p=(0,i.Z)(v,2),x=p[0],j=p[1],g=x.get("query");function Z(t){try{(0,u.z1)(t).then((function(t){m(t.results)}))}catch(e){}}(0,a.useEffect)((function(){g&&Z(g)}),[g]);return(0,f.jsxs)("main",{children:[(0,f.jsxs)(l,{onSubmit:function(t){t.preventDefault(),j({query:n})},children:[(0,f.jsx)("input",{type:"text",onChange:function(t){r(t.target.value)},value:n}),(0,f.jsx)("button",{onClick:function(){return Z(n)},children:"Search"})]}),0!==d.length&&(0,f.jsx)(c.Z,{movies:d})]})}}}]);
//# sourceMappingURL=310.390dd721.chunk.js.map