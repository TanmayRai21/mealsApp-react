(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],[,,,,function(e,t,n){e.exports={meal:"MealItem_meal__3AWbX",heading:"MealItem_heading__N5MA2",description:"MealItem_description__3m3qj",price:"MealItem_price__G70_U",veg:"MealItem_veg__1OnH-",nonveg:"MealItem_nonveg__29W11"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3J7Ll",summary:"CartItem_summary__PPGcJ",price:"CartItem_price__Tro-u",amount:"CartItem_amount__1jB_K",actions:"CartItem_actions__aFfea"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__kdyhf",total:"Cart_total__2aPWw",actions:"Cart_actions__3Ch_4","button--alt":"Cart_button--alt__S3knx",button:"Cart_button__12nYp"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2gLAq",icon:"HeaderCartButton_icon__3R_w8",badge:"HeaderCartButton_badge__2OPbY",bump:"HeaderCartButton_bump__1ggob"}},,function(e,t,n){e.exports={backdrop:"Modal_backdrop__u7bRK",modal:"Modal_modal__1GFIs","slide-down":"Modal_slide-down__3sC0J"}},,function(e,t,n){e.exports={header:"Header_header__69SL3","main-image":"Header_main-image__19x3V"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__2VhG6"}},function(e,t,n){e.exports={card:"Card_card__2LD_P"}},function(e,t,n){e.exports={input:"Input_input__iOakD"}},function(e,t,n){e.exports={form:"MealItemForm_form__1xrjm"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__3SBNp","meals-appear":"AvailableMeals_meals-appear__xdegZ"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),c=(n(24),n(3)),r=n(1),o=n.n(r),s=n(0),l=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(s.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),m=n(9),u=n.n(m),j=function(e){var t=Object(r.useState)(!1),n=Object(c.a)(t,2),a=n[0],i=n[1],o=Object(r.useContext)(d).items,m=o.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){i(!0);var e=setTimeout((function(){i(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(s.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(s.jsx)("span",{className:u.a.icon,children:Object(s.jsx)(l,{})}),Object(s.jsx)("span",{children:"Cart"}),Object(s.jsx)("span",{className:u.a.badge,children:m})]})},b=n.p+"static/media/meals.2971f633.jpg",p=n(13),h=n.n(p),x=function(e){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsxs)("header",{className:h.a.header,children:[Object(s.jsxs)("h1",{children:["Meals ",Object(s.jsx)("span",{children:"PANDA"})]}),Object(s.jsx)(j,{onClick:e.onShowCart})]}),Object(s.jsx)("div",{className:h.a["main-image"],children:Object(s.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},O=n(15),_=n.n(O),f=function(){return Object(s.jsxs)("section",{className:_.a.summary,children:[Object(s.jsx)("h2",{children:"Taste is the New Trending"}),Object(s.jsx)("p",{children:"Enjoy a delicious lunch or dinner at home. Choose your favorite item from our broad selection of available meals. Cooked hygienically with high-quality ingredients, just-in-time, served to you HOT and Fresh."})]})},v=n(16),g=n.n(v),C=function(e){return Object(s.jsx)("div",{className:g.a.card,children:e.children})},y=n(2),N=n(17),k=n.n(N),A=o.a.forwardRef((function(e,t){return Object(s.jsxs)("div",{className:k.a.input,children:[Object(s.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(s.jsx)("input",Object(y.a)({ref:t},e.input))]})})),w=n(18),I=n.n(w),M=function(e){var t=Object(r.useState)(!0),n=Object(c.a)(t,2),a=n[0],i=n[1],o=Object(r.useRef)();return Object(s.jsxs)("form",{className:I.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?i(!1):e.onAddToCart(a)},children:[Object(s.jsx)(A,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(s.jsx)("button",{children:"Add"}),!a&&Object(s.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},P=n(4),H=n.n(P),B=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(s.jsxs)("li",{className:H.a.meal,children:[Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:H.a.heading,children:[Object(s.jsx)("h3",{children:e.name}),"veg"===e.type&&Object(s.jsx)("span",{className:H.a.veg,children:"VEG \u25cf"}),"non-veg"===e.type&&Object(s.jsx)("span",{className:H.a.nonveg,children:"N.VEG \u25cf"})]}),Object(s.jsx)("div",{className:H.a.description,children:e.description}),Object(s.jsx)("div",{className:H.a.price,children:n})]}),Object(s.jsx)("div",{children:Object(s.jsx)(M,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price,type:e.type})}})})]})},F=n(19),D=n.n(F),E=[{id:"m1",name:"Aloo matar",description:"Potatoes and peas in curry",price:100,type:"veg"},{id:"m2",name:"Dum aloo",description:"Potatoes cooked in curry",price:120,type:"veg"},{id:"m3",name:"Kadai paneer",description:"Paneer and green peppers in tomato gravy",price:150,type:"veg"},{id:"m4",name:"Kadhi pakoda\t",description:"\tGram flour with yogurt with gramflour fried balls",price:140,type:"veg"},{id:"m5",name:"Gobhi matar",description:"Cauliflower in a tomato sauce",price:130,type:"veg"},{id:"m6",name:"Chole bhature",description:"Main course with Chick peas, assorted spices, wheat flour and bhatura yeast.",price:100,type:"veg"},{id:"m7",name:"Dal makhani (kali dal)",description:"A main course with lentils",price:150,type:"veg"},{id:"m8",name:"Butter chicken",description:"dish, originating in the Indian subcontinent, of chicken in a mildly spiced tomato sauce. It is also known as murgh mahal",price:180,type:"non-veg"},{id:"m9",name:"Chicken Tikka masala",description:"\tChicken marinated in a Yogurt tomato sauce. It is known to have a creamy texture.",price:190,type:"non-veg"},{id:"m10",name:"Biryani",description:"Mixed rice dish, optional spices, optional vegetables, meats or seafood. Can be served with plain yogurt.!",price:165,type:"non-veg"},{id:"m11",name:"Jalebi",description:"A North Indian twisted noodle like sweet dish dipped in sugary syrup",price:50,type:"veg"},{id:"m12",name:"Gajar ka halwa",description:"sweet dish native to U.P. / Punjab. Carrot, Milk, Ghee, Cashew",price:60,type:"veg"}],G=function(){var e=E.map((function(e){return Object(s.jsx)(B,{id:e.id,name:e.name,description:e.description,price:e.price,type:e.type},e.id)}));return Object(s.jsx)("section",{className:D.a.meals,children:Object(s.jsx)(C,{children:Object(s.jsx)("ul",{children:e})})})},S=function(){return Object(s.jsxs)(r.Fragment,{children:[Object(s.jsx)(f,{}),Object(s.jsx)(G,{})]})},T=n(11),R=n.n(T),V=function(e){return Object(s.jsx)("div",{className:R.a.backdrop,onClick:e.onClose})},J=function(e){return Object(s.jsx)("div",{className:R.a.modal,children:Object(s.jsx)("div",{className:R.a.content,children:e.children})})},K=document.getElementById("overlays"),L=function(e){return Object(s.jsxs)(r.Fragment,{children:[i.a.createPortal(Object(s.jsx)(V,{onClose:e.onClose}),K),i.a.createPortal(Object(s.jsx)(J,{children:e.children}),K)]})},q=n(5),z=n.n(q),W=function(e){var t="$".concat(e.price.toFixed(2));return console.log(e),Object(s.jsxs)("li",{className:z.a["cart-item"],children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:e.name}),Object(s.jsxs)("div",{className:z.a.summary,children:[Object(s.jsx)("span",{className:z.a.price,children:t}),Object(s.jsxs)("span",{className:z.a.amount,children:["x ",e.amount]})]})]}),Object(s.jsxs)("div",{className:z.a.actions,children:[Object(s.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(s.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Y=n(6),$=n.n(Y),U=function(e){var t=Object(r.useContext)(d),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,i=function(e){t.removeItem(e)},c=function(e){t.addItem(Object(y.a)(Object(y.a)({},e),{},{amount:1}))},o=Object(s.jsx)("ul",{className:$.a["cart-items"],children:t.items.map((function(e){return Object(s.jsx)(W,{name:e.name,amount:e.amount,price:e.price,onRemove:i.bind(null,e.id),onAdd:c.bind(null,e)},e.id)}))});return Object(s.jsxs)(L,{onClose:e.onClose,children:[o,Object(s.jsxs)("div",{className:$.a.total,children:[Object(s.jsx)("span",{children:"Total Amount"}),Object(s.jsx)("span",{children:n})]}),Object(s.jsxs)("div",{className:$.a.actions,children:[Object(s.jsx)("button",{className:$.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(s.jsx)("button",{className:$.a.button,children:"Order"})]})]})},X=n(14),Z={items:[],totalAmount:0},Q=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,i=e.items.findIndex((function(e){return e.id===t.item.id})),c=e.items[i];if(c){var r=Object(y.a)(Object(y.a)({},c),{},{amount:c.amount+t.item.amount});(n=Object(X.a)(e.items))[i]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],d=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(y.a)(Object(y.a)({},l),{},{amount:l.amount-1});(o=Object(X.a)(e.items))[s]=m}return{items:o,totalAmount:d}}return Z},ee=function(e){var t=Object(r.useReducer)(Q,Z),n=Object(c.a)(t,2),a=n[0],i=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){i({type:"ADD",item:e})},removeItem:function(e){i({type:"REMOVE",id:e})}};return Object(s.jsx)(d.Provider,{value:o,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(s.jsxs)(ee,{children:[n&&Object(s.jsx)(U,{onClose:function(){a(!1)}}),Object(s.jsx)(x,{onShowCart:function(){a(!0)}}),Object(s.jsx)("main",{children:Object(s.jsx)(S,{})})]})};i.a.render(Object(s.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.d6ff08e4.chunk.js.map