(this.webpackJsonpcriando_um_hook_de_carrinho_de_compras=this.webpackJsonpcriando_um_hook_de_carrinho_de_compras||[]).push([[0],{77:function(n,t,e){"use strict";e.r(t);var r,c=e(0),a=e.n(c),o=e(23),i=e.n(o),s=e(15),d=e(12),u=e(3),b=e(5),p=e.n(b),l=e(14),j=e(24),x=e(8),f=e(26),h=e(13),O=e(10),g=e(11),m=e(18),v=g.b.ul(r||(r=Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1")),y=e(45),k=e.n(y).a.create({baseURL:"http://localhost:3333"}),w=new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format,S=e(31),C=e(1),F=Object(c.createContext)({});function z(n){return I.apply(this,arguments)}function I(){return(I=Object(l.a)(p.a.mark((function n(t){var e,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.get("/products/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function R(n){return T.apply(this,arguments)}function T(){return(T=Object(l.a)(p.a.mark((function n(t){var e,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.get("/stock/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function _(n){var t=n.children,e=Object(c.useState)((function(){var n=localStorage.getItem("@RocketShoes:cart");return n?JSON.parse(n):[]})),r=Object(f.a)(e,2),a=r[0],o=r[1],i=function(){var n=Object(l.a)(p.a.mark((function n(t){var e,r,c,i,s,u;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,z(t);case 3:return e=n.sent,n.next=6,R(t);case 6:r=n.sent,c=a.map((function(n){return n.id})),c.includes(t)?(i=a.filter((function(n){return t===n.id}))[0],i.amount<r.amount?(s=a.map((function(n){return n.id===t?Object(x.a)(Object(x.a)({},n),{},{amount:n.amount+1}):n})),o(s),localStorage.setItem("@RocketShoes:cart",JSON.stringify(s))):d.b.error("Quantidade solicitada fora de estoque")):r.amount>0?(u=Object(x.a)(Object(x.a)({},e),{},{amount:1}),o([].concat(Object(S.a)(a),[u])),localStorage.setItem("@RocketShoes:cart",JSON.stringify([].concat(Object(S.a)(a),[u])))):d.b.error("Quantidade solicitada fora de estoque"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),d.b.error("Erro na adi\xe7\xe3o do produto");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=Object(l.a)(p.a.mark((function n(t){var e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,a.map((function(n){return n.id})).includes(t)){n.next=6;break}throw Error;case 6:e=a.filter((function(n){return n.id!==t})),o(e),localStorage.setItem("@RocketShoes:cart",JSON.stringify(e));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),d.b.error("Erro na remo\xe7\xe3o do produto");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(t){return n.apply(this,arguments)}}(),u=function(){var n=Object(l.a)(p.a.mark((function n(t){var e,r,c,i;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.productId,r=t.amount,n.prev=1,!(r<=0)){n.next=4;break}throw Error;case 4:return n.next=6,k.get("/stock/".concat(e));case 6:c=n.sent,i=c.data,r<=i.amount?(o(a.map((function(n){return n.id===e?(n.amount=r,n):n}))),localStorage.setItem("@RocketShoes:cart",JSON.stringify(a))):d.b.error("Quantidade solicitada fora de estoque"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),d.b.error("Erro na altera\xe7\xe3o de quantidade do produto");case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(t){return n.apply(this,arguments)}}();return Object(C.jsx)(F.Provider,{value:{cart:a,addProduct:i,removeProduct:s,updateProductAmount:u},children:t})}function P(){return Object(c.useContext)(F)}var A,L,N,E,J,q,B=function(){var n=Object(c.useState)([]),t=Object(f.a)(n,2),e=t[0],r=t[1],a=P(),o=a.addProduct,i=a.cart.reduce((function(n,t){return n=Object(x.a)(Object(x.a)({},n),{},Object(j.a)({},t.id,t.amount))}),{});return Object(c.useEffect)((function(){function n(){return(n=Object(l.a)(p.a.mark((function n(){var t,e;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.get("/products");case 2:t=n.sent,e=t.data.map((function(n){return Object(x.a)(Object(x.a)({},n),{},{priceFormatted:w(n.price)})})),r(e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(C.jsx)(v,{children:e.map((function(n){return Object(C.jsxs)("li",{children:[Object(C.jsx)("img",{src:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",alt:"T\xeanis de Caminhada Leve Confort\xe1vel"}),Object(C.jsx)("strong",{children:n.title}),Object(C.jsx)("span",{children:n.priceFormatted}),Object(C.jsxs)("button",{type:"button","data-testid":"add-product-button",onClick:function(){return t=n.id,void o(t);var t},children:[Object(C.jsxs)("div",{"data-testid":"cart-product-quantity",children:[Object(C.jsx)(h.b,{size:16,color:"#FFF"}),i[n.id]||0]}),Object(C.jsx)("span",{children:"ADICIONAR AO CARRINHO"})]})]},n.id)}))})},D=g.b.div(A||(A=Object(O.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1")),Q=g.b.table(L||(L=Object(O.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n\n    svg {\n      color: #7159c1;\n      transition: color 0.2s;\n    }\n\n    &:hover {\n      svg {\n        color: ",";\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: ",";\n        cursor: not-allowed;\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1"),Object(m.b)(.25,"#7159c1")),U=g.b.div(N||(N=Object(O.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]))),M=function(){var n=P(),t=n.cart,e=n.removeProduct,r=n.updateProductAmount,c=t.map((function(n){return Object(x.a)(Object(x.a)({},n),{},{priceFormatted:w(n.price),subTotal:w(n.price*n.amount)})})),a=w(t.reduce((function(n,t){return n+=t.price*t.amount}),0));return Object(C.jsxs)(D,{children:[Object(C.jsxs)(Q,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("th",{"aria-label":"product image"}),Object(C.jsx)("th",{children:"PRODUTO"}),Object(C.jsx)("th",{children:"QTD"}),Object(C.jsx)("th",{children:"SUBTOTAL"}),Object(C.jsx)("th",{"aria-label":"delete icon"})]})}),Object(C.jsx)("tbody",{children:c.map((function(n){return Object(C.jsxs)("tr",{"data-testid":"product",children:[Object(C.jsx)("td",{children:Object(C.jsx)("img",{src:"https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg",alt:"T\xeanis de Caminhada Leve Confort\xe1vel"})}),Object(C.jsxs)("td",{children:[Object(C.jsx)("strong",{children:n.title}),Object(C.jsx)("span",{children:n.priceFormatted})]}),Object(C.jsx)("td",{children:Object(C.jsxs)("div",{children:[Object(C.jsx)("button",{type:"button","data-testid":"decrement-product",disabled:n.amount<=1,onClick:function(){return function(n){r({productId:n.id,amount:n.amount-1})}(n)},children:Object(C.jsx)(h.d,{size:20})}),Object(C.jsx)("input",{type:"text","data-testid":"product-amount",readOnly:!0,value:n.amount}),Object(C.jsx)("button",{type:"button","data-testid":"increment-product",onClick:function(){return function(n){r({productId:n.id,amount:n.amount+1})}(n)},children:Object(C.jsx)(h.a,{size:20})})]})}),Object(C.jsx)("td",{children:Object(C.jsx)("strong",{children:n.subTotal})}),Object(C.jsx)("td",{children:Object(C.jsx)("button",{type:"button","data-testid":"remove-product",onClick:function(){return t=n.id,void e(t);var t},children:Object(C.jsx)(h.c,{size:20})})})]},n.id)}))})]}),Object(C.jsxs)("footer",{children:[Object(C.jsx)("button",{type:"button",children:"Finalizar pedido"}),Object(C.jsxs)(U,{children:[Object(C.jsx)("span",{children:"TOTAL"}),Object(C.jsx)("strong",{children:a})]})]})]})},H=function(){return Object(C.jsxs)(u.c,{children:[Object(C.jsx)(u.a,{path:"/",exact:!0,component:B}),Object(C.jsx)(u.a,{path:"/cart",component:M})]})},G=(e(76),e.p+"static/media/background.d1721c83.svg"),K=Object(g.a)(E||(E=Object(O.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),G),V=e.p+"static/media/logo.eb50c339.svg",W=g.b.header(J||(J=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n\n  a {\n    transition: opacity 0.2s;\n\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n"]))),X=Object(g.b)(s.b)(q||(q=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]))),Y=function(){var n=P().cart.length;return Object(C.jsxs)(W,{children:[Object(C.jsx)(s.b,{to:"/",children:Object(C.jsx)("img",{src:V,alt:"Rocketshoes"})}),Object(C.jsxs)(X,{to:"/cart",children:[Object(C.jsxs)("div",{children:[Object(C.jsx)("strong",{children:"Meu carrinho"}),Object(C.jsx)("span",{"data-testid":"cart-size",children:"".concat(n,1===n?" item":" itens")})]}),Object(C.jsx)(h.e,{size:36,color:"#FFF"})]})]})},Z=function(){return Object(C.jsx)(s.a,{children:Object(C.jsxs)(_,{children:[Object(C.jsx)(K,{}),Object(C.jsx)(Y,{}),Object(C.jsx)(H,{}),Object(C.jsx)(d.a,{autoClose:3e3})]})})},$=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,78)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))};i.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(Z,{})}),document.getElementById("root")),$()}},[[77,1,2]]]);
//# sourceMappingURL=main.36c655b3.chunk.js.map