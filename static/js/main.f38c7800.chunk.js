(this.webpackJsonprecipe=this.webpackJsonprecipe||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),i=c.n(s),r=c(4),o=c.n(r),u=c(6),l=c(2),j=(c(12),c(0)),p=function(e){var t=e.title,c=e.calories,n=e.image,a=e.ingredients;return Object(j.jsxs)("div",{className:"Recipes",children:[Object(j.jsx)("h1",{className:"title",children:t}),Object(j.jsx)("p",{className:"calories",children:"Calories "+Number(c).toFixed(2)+" J"}),Object(j.jsx)("ul",{className:"ingredients",children:a.map((function(e){return Object(j.jsx)("li",{children:e.text})}))}),Object(j.jsx)("img",{src:n})]})},b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("Waffles"),i=Object(l.a)(s,2),r=i[0],b=i[1],d=Object(n.useState)("Waffles"),f=Object(l.a)(d,2),h=f[0],m=f[1];Object(n.useEffect)((function(){O()}),[h]);var O=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("90dfbfd0","&app_key=").concat("51a563854aa56c5cca0bce46e6475c99"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits),console.log(c.hits);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m(r),b("")},className:"form",children:[Object(j.jsx)("input",{type:"text",id:"search-input",onChange:function(e){b(e.target.value)},value:r}),Object(j.jsx)("button",{type:"submit",id:"search-btn",children:"Search"})]}),Object(j.jsx)("div",{className:"recipe-box",children:c.map((function(e){return Object(j.jsx)(p,{title:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients})}))})]})};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.f38c7800.chunk.js.map