(this.webpackJsonpbudgety=this.webpackJsonpbudgety||[]).push([[0],{35:function(n,e,t){},89:function(n,e,t){"use strict";t.r(e);var r,c,a,o,i,u,l,s,d,b,j,f,O=t(18),h=t.n(O),g=t(6),m=t(3),x=t(1),p=t(30),v=t(4),y=Object(v.a)(r||(r=Object(m.a)(["\n  *,\n  *::after,\n  *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: inherit;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    font-family: Roboto;\n    box-sizing: border-box;\n\n    color: var(--color-black)\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n\n  :root {\n    // COLORS\n    --color-red: #E53E3E;\n    --color-gray: #CBD5E0;\n    --color-gray-dark: #1A202C;\n    --color-green: #48BB78;\n    --color-black: #222;\n    --color-white: #fff;\n    --color-blue-light: #90CDF4;\n\n    // TRANSITIONS\n    --trans-default: all .2s ease;\n    \n    // SHADOWS\n    --shadow-default: 0px 5px 30px 2px rgba(0, 0, 0, 0.2);\n  }\n"]))),E=t(21),w=t.n(E),T=t(24),C=t(9),_=t(37),A=t.n(_),I="36rem",S="48rem",D="62rem",N="75rem",R=v.b.button(c||(c=Object(m.a)(["\n  border-radius: 1rem;\n  border: ",";\n  width: 100%;\n  font-size: 1.8rem;\n  padding: 1.1rem;\n  color: ",";\n  background-color: ",";\n  font-family: inherit;\n  transition: var(--trans-default);\n\n  :hover,\n  :focus {\n    outline: none;\n    transform: translateY(-5%);\n    cursor: pointer;\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.3);\n    ",";\n  }\n\n  :active {\n    transform: translateY(2%);\n    box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.5);\n  }\n"])),(function(n){return n.secondary?"2px solid var(--color-".concat(n.color,")"):"none"}),(function(n){return"var(--color-".concat(n.textColor,")")}),(function(n){return n.secondary?"var(--color-white)":"var(--color-".concat(n.color,")")}),(function(n){return n.secondary&&"background-color: var(--color-".concat(n.color,"); color: var(--color-white)")})),k=v.b.nav(a||(a=Object(m.a)(["\n  color: #111;\n  letter-spacing: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 3.5rem;\n  position: relative;\n"]))),U=v.b.div(o||(o=Object(m.a)(["\n  display: flex;\n  align-items: center;\n\n  h1 {\n    font-weight: 400;\n    font-size: 3rem;\n    margin-right: 2rem;\n    display: none;\n\n    @media (min-width: ",") {\n      display: block;\n    }\n  }\n"])),S),L=v.b.button(i||(i=Object(m.a)(["\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 35%;\n  background-color: #111;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 11;\n  position: fixed;\n  right: 3.5rem;\n  transition: var(--trans-default);\n\n  :focus {\n    outline: none;\n  }\n\n  :hover {\n    cursor: pointer;\n  }\n\n  @media (min-width: ",") {\n    display: none;\n  }\n"])),S),G=v.b.div(u||(u=Object(m.a)(["\n  pointer-events: none;\n  width: 2.2rem;\n  height: 3px;\n  background-color: #fff;\n\n  transform: ",";\n\n  transition: var(--trans-default);\n\n  ::after {\n    content: '';\n    display: block;\n    width: 2.2rem;\n    height: 3px;\n    background-color: #fff;\n    transition: var(--trans-default);\n    transform: ",";\n  }\n\n  ::before {\n    content: '';\n    display: block;\n    width: 2.2rem;\n    height: 3px;\n    background-color: #fff;\n    transition: var(--trans-default);\n    transform: ",";\n\n    display: ",";\n  }\n"])),(function(n){return n.opened?"rotate(225deg) scale(1.3)":"rotate(0) scale(1)"}),(function(n){return n.opened?"rotate(90deg) translateY(0)":"rotate(0) translateY(".concat(n.focused?"250%":"125%",")")}),(function(n){return n.focused?"translateY(-350%)":"translateY(-225%)"}),(function(n){return n.opened?"none":"block"})),z=v.b.div(l||(l=Object(m.a)(["\n  background-color: #111;\n  position: fixed;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n\n  transition: var(--trans-default);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  transform: ",";\n\n  ul {\n    transition: var(--trans-default);\n    transition-delay: 0.1s;\n    flex-direction: column;\n    align-items: center;\n    display: flex;\n    padding: 0;\n    margin: 0;\n    margin-bottom: 25%;\n\n    transform: ",";\n\n    li {\n      :not(:last-child) {\n        margin-bottom: 4rem;\n      }\n    }\n  }\n\n  @media (min-width: ",") {\n    display: none;\n  }\n"])),(function(n){return n.opened?"translateX(0)":"translateX(-100%)"}),(function(n){return n.opened?"translateX(0)":"translateX(-100%)"}),S),B=v.b.ul(s||(s=Object(m.a)(["\n  width: 47rem;\n  justify-content: space-around;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  li {\n    margin: 0;\n    padding: 0;\n    :not(:last-child) {\n    }\n  }\n\n  display: none;\n  @media (min-width: ",") {\n    display: flex;\n  }\n"])),S),F=Object(v.b)(p.b)(d||(d=Object(m.a)(["\n  font-size: 2.5rem;\n  text-decoration: none;\n  text-transform: capitalize;\n\n  color: #fff;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  @media (min-width: ",") {\n    color: #222;\n    font-size: 1.6rem;\n  }\n\n  @media (min-width: ",") {\n    font-size: 2rem;\n  }\n"])),S,N),M=v.b.div(b||(b=Object(m.a)(["\n  border-radius: 50%;\n  background-image: ",";\n  background-size: cover;\n  padding: 2rem;\n  margin-right: 1.5rem;\n"])),(function(n){return"url('".concat(n.url,"')")})),Y=Object(v.b)(R)(j||(j=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0.9rem;\n\n  svg {\n    margin-right: 0.5rem;\n  }\n"]))),V=t(40),P=["overview","budgets","payments","statistics"],X="https://budgety-server.herokuapp.com",H=t(10);!function(n){n.LOGIN="LOGIN",n.LOGOUT="LOGOUT"}(f||(f={}));var q,J=function(){try{var n=localStorage.getItem("state");if(null===n)return;return JSON.parse(n)}catch(e){return void console.error(e)}},W=t(32),K=t(5),Q=t(31);!function(n){n.ADD_BUDGET="ADD_BUDGET",n.REMOVE_BUDGET="REMOVE_BUDGET",n.EDIT_BUDGET="EDIT_BUDGET",n.CHANGE_TRANSACTIONS="CHANGE_TRANSACTIONS",n.REMOVE_BUDGET_ALL="REMOVE_BUDGET_ALL"}(q||(q={}));var Z;!function(n){n.UPDATE_CURRENCY="UPDATE_CURRENCY",n.SET_PRIMARY_CURRENCY="SET_PRIMARY_CURRENCY"}(Z||(Z={}));var $;!function(n){n.SET_LOADING="SET_LOADING",n.UNSET_LOADING="UNSET_LOADING"}($||($={}));var nn,en=function(){return Object(H.action)($.SET_LOADING)},tn=function(){return Object(H.action)($.UNSET_LOADING)};!function(n){n.ADD_TRANSACTION="ADD_TRANSACTION",n.REMOVE_TRANSACTION="REMOVE_TRANSACTION",n.REMOVE_TRANSACTIONS_BUDGET="REMOVE_TRANSACTIONS_BUDGET",n.EDIT_TRANSACTION="EDIT_TRANSACTION",n.REMOVE_TRANSACTION_ALL="REMOVE_TRANSACTION_ALL"}(nn||(nn={}));var rn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.b,cn=J(),an=Object(W.c)(Object(W.a)({budgets:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case q.ADD_BUDGET:return[].concat(Object(Q.a)(n),[e.payload.budget]);case q.REMOVE_BUDGET:return n.filter((function(n){return n._id!==e.payload.budgetId}));case q.EDIT_BUDGET:return n.map((function(n){return n._id===e.payload.budget._id?e.payload.budget:n}));case q.CHANGE_TRANSACTIONS:return n.map((function(n){n.amount.actual=n.amount.starting,n.amount.diff=0;var t=e.payload.currency;return e.payload.transactions.forEach((function(e){var r=e.amount/t.currencies[e.currency]*t.currencies[n.amount.currency];e.budgetId===n._id&&(n=Object(K.a)(Object(K.a)({},n),{},{amount:Object(K.a)(Object(K.a)({},n.amount),{},{actual:n.amount.actual+r,diff:n.amount.actual+r-n.amount.starting})}))})),n}));case q.REMOVE_BUDGET_ALL:return[];default:return n}},transactions:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case nn.ADD_TRANSACTION:return[].concat(Object(Q.a)(n),[e.payload.transaction]);case nn.REMOVE_TRANSACTION:return n.filter((function(n){return n._id!==e.payload.transactionId}));case nn.REMOVE_TRANSACTIONS_BUDGET:return n.filter((function(n){return n.budgetId!==e.payload.budgetId}));case nn.EDIT_TRANSACTION:return n.map((function(n){return n._id===e.payload.transaction._id?e.payload.transaction:n}));case nn.REMOVE_TRANSACTION_ALL:return[];default:return n}},googleUser:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f.LOGIN:return Object(K.a)({},e.payload.userInfo);case f.LOGOUT:return null;default:return n}},currency:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dateFetched:new Date(0),source:"USD",currencies:{},primaryCurrency:"USD"},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case Z.UPDATE_CURRENCY:return e.payload.currency;case Z.SET_PRIMARY_CURRENCY:return Object(K.a)(Object(K.a)({},n),{},{primaryCurrency:e.payload.currencyString});default:return n}},loader:function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case $.SET_LOADING:return!0;case $.UNSET_LOADING:return!1;default:return n}}}),cn,rn());an.subscribe((function(){var n=an.getState(),e=n.budgets.filter((function(n){return null===n.userId})),t=n.transactions.filter((function(n){return null===n.userId})),r=n.currency,c=n.loader;null===n.googleUser&&function(n){try{var e=JSON.stringify(n);localStorage.setItem("state",e)}catch(t){console.error(t)}}({budgets:e,transactions:t,currency:r,loader:c,googleUser:null})}));var on=an,un=function(n){return Object(H.action)(q.ADD_BUDGET,{budget:n})},ln=function(n){return Object(H.action)(q.REMOVE_BUDGET,{budgetId:n})},sn=function(n){return Object(H.action)(q.EDIT_BUDGET,{budget:n})},dn=function(){var n=on.getState().transactions,e=on.getState().currency;return Object(H.action)(q.CHANGE_TRANSACTIONS,{transactions:n,currency:e})};Date.prototype.getFancyDate=function(){var n=this.getDate().toString(),e=(this.getMonth()+1).toString();return parseInt(n)<10&&(n="0".concat(n)),parseInt(e)<10&&(e="0".concat(e)),"".concat(n,"/").concat(e,"/").concat(this.getFullYear())},Date.prototype.getFancyHours=function(){var n=this.getHours().toString(),e=this.getMinutes().toString();return parseInt(e)<10&&(e="0".concat(e)),parseInt(n)<10&&(n="0".concat(n)),"".concat(n,":").concat(e)};var bn,jn,fn,On,hn,gn,mn,xn,pn,vn,yn,En,wn,Tn,Cn,_n,An,In,Sn,Dn,Nn,Rn,kn,Un,Ln,Gn,zn,Bn,Fn,Mn,Yn,Vn,Pn,Xn,Hn,qn=function(n){return new Promise((function(e){return setTimeout(e,n)}))},Jn=function(n){return Object(H.action)(nn.ADD_TRANSACTION,{transaction:n})},Wn=function(n){return Object(H.action)(nn.REMOVE_TRANSACTIONS_BUDGET,{budgetId:n})},Kn=function(n){return Object(H.action)(Z.SET_PRIMARY_CURRENCY,{currencyString:n})},Qn=t(2),Zn=function(){var n=Object(x.useState)(!1),e=Object(C.a)(n,2),t=e[0],r=e[1],c=Object(x.useState)(!1),a=Object(C.a)(c,2),o=a[0],i=a[1],u=Object(x.useRef)(null),l=Object(g.b)(),s=Object(g.c)((function(n){return n.googleUser})),d=function(n){r(!t),n.target!==u.current&&window.scrollTo(0,0)},b=function(n){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n.map((function(n,r){return Object(Qn.jsx)("li",{children:Object(Qn.jsx)(F,{tabIndex:e||t?0:-1,onClick:d,to:"/".concat(n),children:n})},r)}))},j=function(n){var e;n.profileObj&&l((e=n.profileObj,Object(H.action)(f.LOGIN,{userInfo:e})))},O=function(){var n=Object(T.a)(w.a.mark((function n(){var e;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=J(),l(Object(H.action)(f.LOGOUT)),!e){n.next=9;break}return n.next=5,qn(100);case 5:e.budgets.forEach((function(n){return l(un(n))})),e.transactions.forEach((function(n){return l(Jn(n))})),l(Kn(e.currency.primaryCurrency)),l(dn());case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(Qn.jsxs)(k,{children:[Object(Qn.jsxs)(U,{children:[Object(Qn.jsx)("h1",{style:{marginRight:"1rem"},children:"Budgety"}),null===s?Object(Qn.jsx)(A.a,{clientId:"118372615416-g77a8gaf92slnb4f50jr6o9cmh0f4ho1.apps.googleusercontent.com",buttonText:"Login",onSuccess:j,onFailure:j,cookiePolicy:"single_host_origin",isSignedIn:!0,render:function(n){return Object(Qn.jsxs)(Y,{color:"red",textColor:"white",onClick:n.onClick,disabled:n.disabled,children:[Object(Qn.jsx)(V.a,{}),"Login"]})}}):Object(Qn.jsxs)(Qn.Fragment,{children:[Object(Qn.jsx)(M,{url:s.imageUrl}),Object(Qn.jsx)(_.GoogleLogout,{clientId:"118372615416-cjlib17tonjdhn4tqtpnetm7mif08ah9.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:O,render:function(n){return Object(Qn.jsxs)(Y,{color:"red",textColor:"white",onClick:n.onClick,disabled:n.disabled,children:[Object(Qn.jsx)(V.a,{}),"Logout"]})}})]})]}),Object(Qn.jsx)(L,{"aria-label":"Navigation button",onClick:d,onFocus:function(){return i(!0)},onBlur:function(){return i(!1)},ref:u,children:Object(Qn.jsx)(G,{opened:t,focused:o})}),Object(Qn.jsx)(z,{opened:t,children:Object(Qn.jsx)("ul",{children:b(P,!1)})}),Object(Qn.jsx)(B,{children:b(P)})]})},$n=t(8),ne=t(93),ee=t(91),te=function(){return Object(Qn.jsx)("div",{})},re=v.b.ul(bn||(bn=Object(m.a)(["\n  list-style: none;\n  margin: 4rem auto;\n  padding: 0;\n  justify-content: center;\n  gap: 4rem;\n  grid-template-columns: repeat(auto-fit, 23rem);\n  padding: 0 4rem;\n\n  display: grid;\n"]))),ce=v.b.div(jn||(jn=Object(m.a)(["\n  width: 23rem;\n  height: 23rem;\n  box-shadow: var(--shadow-default);\n  border-radius: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 2rem;\n"]))),ae=t(13),oe=t.n(ae),ie=v.b.div(fn||(fn=Object(m.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),ue=v.b.h1(On||(On=Object(m.a)(["\n  font-weight: 400;\n  font-size: 2.8rem;\n"]))),le=v.b.span(hn||(hn=Object(m.a)(["\n  font-size: 3rem;\n  height: 4rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  border: solid 1px transparent;\n  border-radius: 1rem;\n\n  :focus,\n  :hover {\n    outline: none;\n    border-color: var(--color-blue-light);\n    transition: var(--trans-default);\n  }\n"]))),se=v.b.div(gn||(gn=Object(m.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]))),de=t(22),be=v.b.div(mn||(mn=Object(m.a)(["\n  position: fixed;\n  z-index: 20;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100vw;\n  height: 100vh;\n  transition: var(--trans-default);\n  opacity: ",";\n"])),(function(n){return n.animating?"0":"100%"})),je=v.b.div(xn||(xn=Object(m.a)(["\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  z-index: 21;\n  background-color: var(--color-white);\n  width: 75%;\n  padding: 2rem 2rem;\n  border-radius: 1rem;\n\n  @media (min-width: ",") {\n    width: 50%;\n  }\n\n  @media (min-width: ",") {\n    width: 50rem;\n  }\n"])),D,N),fe=v.b.div(pn||(pn=Object(m.a)(["\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n"]))),Oe=document.getElementById("modal"),he=Object(x.createContext)({handleClose:function(){}}),ge=function(n){var e=n.children,t=n.closeModal,r=n.closable,c=void 0===r||r,a=n.container,o=void 0===a||a,i=Object(x.useState)(!0),u=Object(C.a)(i,2),l=u[0],s=u[1],d=Object(x.useRef)(null);Object(x.useEffect)((function(){s(!1)}),[]);var b=function(){s(!0),setTimeout((function(){return t()}),200)};return h.a.createPortal(Object(Qn.jsx)(be,{animating:l,ref:d,onClick:function(n){return function(n){n.target===d.current&&c&&b()}(n)},children:o?Object(Qn.jsx)(je,{children:Object(Qn.jsx)(he.Provider,{value:{handleClose:b},children:e})}):Object(Qn.jsx)(he.Provider,{value:{handleClose:b},children:Object(Qn.jsx)(fe,{children:e})})}),Oe)},me=t(19),xe=function(n){for(var e={},t=0,r=Object.entries(n);t<r.length;t++){var c=Object(C.a)(r[t],2),a=c[0],o=c[1];e=Object(K.a)(Object(K.a)({},e),{},Object(me.a)({},a,Object(K.a)(Object(K.a)({},o),{},{checked:!0})))}var i=Object(x.useState)(e),u=Object(C.a)(i,2),l=u[0],s=u[1];return[l,s,function(n){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];s(Object(K.a)(Object(K.a)({},l),{},Object(me.a)({},n,Object(K.a)(Object(K.a)({},l[n]),{},{checked:e}))))},function(n){var e=!l[n.target.name].required||!!n.target.value;s(Object(K.a)(Object(K.a)({},l),{},Object(me.a)({},n.target.name,Object(K.a)(Object(K.a)({},l[n.target.name]),{},{value:n.target.value,checked:e}))))}]},pe=v.b.input(vn||(vn=Object(m.a)(["\n  padding: 1rem 2rem;\n  border: 1px solid var(--color-gray);\n  border-radius: 1rem;\n  transition: var(--trans-default);\n  font-size: 1.6rem;\n  background-color: var(--color-white);\n  font-family: inherit;\n  width: 100%;\n\n  :focus {\n    outline: none;\n    border-color: var(--color-blue-light);\n  }\n"]))),ve=v.b.form(yn||(yn=Object(m.a)(["\n  margin: 5rem auto;\n  padding: 0 4rem;\n  margin-top: 0;\n\n  @media (min-width: ",") {\n    width: 80%;\n  }\n\n  @media (min-width: ",") {\n    width: 60%;\n  }\n\n  @media (min-width: ",") {\n    width: 55%;\n  }\n"])),I,S,N),ye=v.b.label(En||(En=Object(m.a)(["\n  font-size: 2.5rem;\n  display: block;\n  margin-bottom: 1rem;\n  width: max-content;\n"]))),Ee=v.b.div(wn||(wn=Object(m.a)(["\n  :not(:first-child) {\n    margin: 4rem 0;\n  }\n"]))),we=v.b.p(Tn||(Tn=Object(m.a)(["\n  font-size: 1.3rem;\n  color: var(--color-red);\n  position: absolute;\n  margin-top: 0.7rem;\n"]))),Te=v.b.select(Cn||(Cn=Object(m.a)(["\n  padding: 0.2rem 0.2rem;\n  border: 1px solid var(--color-gray);\n  border-radius: 1rem;\n  transition: var(--trans-default);\n  font-size: 3rem;\n  background-color: var(--color-white);\n  font-family: inherit;\n  color: ",";\n\n  :focus {\n    outline: none;\n    border-color: var(--color-blue-light);\n  }\n"])),(function(n){return"var(--color-".concat(n.color,")")})),Ce=function(n){var e=n.color,t=n.onChangeAction,r=n.style,c=n.currency,a=Object(g.c)((function(n){return n.currency.currencies})),o=Object(g.c)((function(n){return n.currency.primaryCurrency})),i=Object(x.useState)(o),u=Object(C.a)(i,2),l=u[0],s=u[1];Object(x.useEffect)((function(){c&&s(c)}),[c]),Object(x.useEffect)((function(){!c&&s(o)}),[o,c]);return Object(Qn.jsx)(Te,{color:e,onChange:function(n){s(n.target.value),t(n)},value:l,style:r,children:Object.entries(a).map((function(n){return Object(Qn.jsx)("option",{value:n[0],children:n[0]},n[0])}))})},_e=function(n){var e=n.handleSubmit,t=n.disabled,r=void 0!==t&&t,c=n.children,a=n.childrenBefore,o=n.button,i=void 0===o||o,u=n.data,l=n.currency,s=n.style,d=xe(u||{title:{value:"",required:!0},amount:{value:"",required:!0}}),b=Object(C.a)(d,4),j=b[0],f=b[1],O=b[2],h=b[3],m=Object(g.c)((function(n){return n.currency.primaryCurrency})),p=Object(x.useState)(m),v=Object(C.a)(p,2),y=v[0],E=v[1],w=j.title,T=j.amount;Object(x.useEffect)((function(){l&&E(l)}),[l]),Object(x.useEffect)((function(){!l&&E(m)}),[m,l]);return Object(Qn.jsxs)(ve,{onSubmit:function(n){if(n.preventDefault(),!r){var t=T.required&&!T.value,c=w.required&&!w.value;if(t&&c){for(var a={},o=0,i=Object.entries(j);o<i.length;o++){var u=Object(C.a)(i[o],2),l=u[0],s=u[1];a=Object(K.a)(Object(K.a)({},a),{},Object(me.a)({},l,Object(K.a)(Object(K.a)({},s),{},{checked:!1})))}f(a)}else c&&O("title"),t&&O("amount");if(t||c)return;var d=parseFloat(j.amount.value);e(w.value,d,y),f({title:Object(K.a)(Object(K.a)({},w),{},{value:""}),amount:Object(K.a)(Object(K.a)({},T),{},{value:""})})}},noValidate:!0,autoComplete:"off",style:s,children:[Object(Qn.jsx)(Ee,{children:a}),Object(Qn.jsxs)(Ee,{children:[Object(Qn.jsx)(ye,{htmlFor:"title",children:"Title"}),Object(Qn.jsx)(pe,{id:"title",name:"title",type:"text",placeholder:"Enter budget title",value:w.value,onChange:h}),!w.checked&&Object(Qn.jsx)(we,{children:"Fill out this field!"})]}),Object(Qn.jsxs)(Ee,{style:{position:"relative"},children:[Object(Qn.jsx)(ye,{htmlFor:"amount",children:"Amount"}),Object(Qn.jsx)(pe,{id:"amount",name:"amount",type:"number",placeholder:"Enter budget amount",value:T.value,onChange:h}),Object(Qn.jsx)(Ce,{color:"black",onChangeAction:function(n){E(n.target.value)},style:{fontSize:"2.7rem",position:"absolute",right:"0"},currency:y}),!T.checked&&Object(Qn.jsx)(we,{children:"Fill out this field!"})]}),Object(Qn.jsx)(Ee,{children:c}),i&&Object(Qn.jsx)(R,{color:"green",textColor:"white",children:"Add"})]})},Ae=function(n){var e=n._id,t=n.title,r=n.amount,c=Object(g.b)(),a=Object(x.useContext)(he),o=Object(g.c)((function(n){return n.googleUser})),i=function(){return a.handleClose()};return Object(Qn.jsxs)(Qn.Fragment,{children:[Object(Qn.jsxs)(ie,{children:[Object(Qn.jsx)(le,{tabIndex:0,children:Object(Qn.jsx)(de.c,{})}),Object(Qn.jsx)(ue,{children:"Edit"}),Object(Qn.jsx)(le,{tabIndex:0,style:{fontSize:"3.5rem",height:"4.5rem"},onClick:i,onKeyPress:function(n){return function(n,e){"Enter"===n.key&&e()}(n,i)},children:Object(Qn.jsx)(de.e,{})})]}),Object(Qn.jsx)("div",{style:{marginTop:"3.5rem"},children:Object(Qn.jsx)(_e,{handleSubmit:function(n,t,r){var i={_id:e,userId:(null===o||void 0===o?void 0:o.googleId)?null===o||void 0===o?void 0:o.googleId:null,title:n,amount:{actual:t,currency:r,diff:0,starting:t},date:new Date};o?(c(en()),oe.a.patch("".concat(X,"/budgets/").concat(e),Object(K.a)({},i)).then((function(n){c(sn(n.data)),c(dn()),c(tn())}))):(c(sn(i)),c(dn())),a.handleClose()},button:!1,data:{title:{value:t,required:!0},amount:{value:r.starting.toFixed(2),required:!0}},style:{padding:0},currency:r.currency,children:Object(Qn.jsxs)(se,{children:[Object(Qn.jsx)(R,{color:"gray-dark",textColor:"gray-dark",secondary:!0,style:{width:"48%"},onClick:function(){a.handleClose(),o?(c(en()),oe.a.delete("".concat(X,"/budgets/").concat(e)).then((function(){c(ln(e)),c(Wn(e)),c(tn())}))):(c(ln(e)),c(Wn(e)))},type:"button",children:"Delete"}),Object(Qn.jsx)(R,{color:"gray-dark",textColor:"white",style:{width:"48%"},children:"Save"})]})})})]})},Ie=v.b.h1(_n||(_n=Object(m.a)(["\n  font-size: 3rem;\n  font-weight: 400;\n  margin: 0;\n  text-align: center;\n  letter-spacing: 1px;\n"]))),Se=v.b.h2(An||(An=Object(m.a)(["\n  font-size: 2.5rem;\n  color: ",";\n  font-weight: 400;\n  text-align: center;\n  margin: 0;\n  margin-bottom: 0.5rem;\n"])),(function(n){return"var(--color-".concat(n.color,")")})),De=v.b.div(In||(In=Object(m.a)(["\n  font-size: 2.5rem;\n  color: ",";\n  font-weight: 400;\n  text-align: center;\n  margin-left: 0;\n  margin-bottom: 0.5rem;\n  position: relative;\n  height: 5rem;\n"])),(function(n){return"var(--color-".concat(n.color,")")})),Ne=v.b.h3(Sn||(Sn=Object(m.a)(["\n  font-size: 2rem;\n  font-weight: 400;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n"]))),Re=v.b.i(Dn||(Dn=Object(m.a)(["\n  position: absolute;\n  top: ",";\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n"])),(function(n){return n.amount>0?"25%":"90%"})),ke=function(n){return n>0?"green":n<0?"red":"black"},Ue=function(n){var e=n.title,t=n.amount;return Object(Qn.jsxs)(Qn.Fragment,{children:[Object(Qn.jsx)(Ie,{children:e}),Object(Qn.jsxs)("div",{children:[Object(Qn.jsxs)(Se,{color:ke(t.actual),children:[t.actual.toFixed(2)," ",t.currency]}),Object(Qn.jsxs)(De,{color:ke(t.diff),children:[Object(Qn.jsxs)(Ne,{children:[t.diff.toFixed(2)," ",t.currency]}),Object(Qn.jsx)(Re,{amount:t.diff,children:t.diff>0?Object(Qn.jsx)(de.b,{}):t.diff<0?Object(Qn.jsx)(de.a,{}):Object(Qn.jsx)(de.d,{})})]})]})]})},Le=function(n){var e=Object(x.useState)(!1),t=Object(C.a)(e,2),r=t[0],c=t[1];return Object(Qn.jsxs)(Qn.Fragment,{children:[Object(Qn.jsxs)(ce,{children:[Object(Qn.jsx)(Ue,Object(K.a)({},n)),Object(Qn.jsx)(R,{color:"gray-dark",textColor:"white",onClick:function(){return c(!0)},children:"Edit"})]}),r&&Object(Qn.jsx)(ge,{closeModal:function(){return c(!1)},children:Object(Qn.jsx)(Ae,Object(K.a)({},n))})]})},Ge=(t(35),function(){var n=Object(g.c)((function(n){return n.budgets}));return Object(Qn.jsx)(re,{children:Object(Qn.jsx)(ne.a,{component:null,children:n.map((function(n){return Object(Qn.jsx)(ee.a,{timeout:200,classNames:"slide",children:Object(Qn.jsx)("li",{children:Object(Qn.jsx)(Le,Object(K.a)({},n))})},n._id)}))})})}),ze=t(92),Be=function(){var n=Object(g.b)(),e=Object(g.c)((function(n){return n.googleUser}));return Object(Qn.jsx)(_e,{handleSubmit:function(t,r,c){var a={_id:Object(ze.a)(),userId:e?null===e||void 0===e?void 0:e.googleId:null,title:t,amount:{actual:r,currency:c,diff:0,starting:r},date:new Date};e?(n(en()),oe.a.post("".concat(X,"/budgets"),Object(K.a)({},a)).then((function(e){n(un(e.data)),n(tn())}))):n(un(a))}})},Fe=v.b.h2(Nn||(Nn=Object(m.a)(["\n  font-size: 3.5rem;\n  font-weight: 400;\n  color: var(--color-green);\n  letter-spacing: 1px;\n  text-align: center;\n  margin-bottom: 2.5rem;\n"]))),Me=function(){var n=Object(g.b)(),e=Object(g.c)((function(n){return n.budgets})),t=Object(g.c)((function(n){return n.currency})),r=Object(g.c)((function(n){return n.currency.primaryCurrency})),c=Object(g.c)((function(n){var e;return null===(e=n.googleUser)||void 0===e?void 0:e.googleId})),a=0;e.forEach((function(n){return a+=n.amount.actual/t.currencies[n.amount.currency]})),a=a/t.currencies.USD*t.currencies[r];return Object(Qn.jsxs)(Fe,{children:[a.toFixed(2)," ",Object(Qn.jsx)(Ce,{color:"green",onChangeAction:function(e){c?(n(en()),oe.a.patch("".concat(X,"/users/").concat(c),{currency:e.target.value}).then((function(){n(Kn(e.target.value)),n(tn())}))):n(Kn(e.target.value))}})]})},Ye=function(){return Object(Qn.jsxs)("div",{children:[Object(Qn.jsx)(Me,{}),Object(Qn.jsx)(Be,{}),Object(Qn.jsx)(Ge,{})]})},Ve=v.b.select(Rn||(Rn=Object(m.a)(["\n  padding: 1rem 2rem;\n  border: 1px solid var(--color-gray);\n  border-radius: 1rem;\n  transition: var(--trans-default);\n  font-size: 1.6rem;\n  background-color: var(--color-white);\n  font-family: inherit;\n  width: 100%;\n\n  :focus {\n    outline: none;\n    border-color: var(--color-blue-light);\n  }\n"]))),Pe=v.b.div(kn||(kn=Object(m.a)(["\n  margin-top: 4rem;\n  display: flex;\n  justify-content: space-between;\n  height: 14rem;\n  flex-direction: column;\n"]))),Xe=function(){var n=Object(g.b)(),e=Object(g.c)((function(n){return n.budgets})),t=Object(g.c)((function(n){return n.googleUser})),r=Object(x.useState)(""),c=Object(C.a)(r,2),a=c[0],o=c[1],i=Object(x.useRef)(-1);Object(x.useEffect)((function(){return i.current!==e.length&&(e[0]?o(e[0]._id):o("")),function(){i.current=e.length}}),[e]);var u=e.filter((function(n){return n._id===a}))[0];return Object(Qn.jsx)(_e,{handleSubmit:function(e,r,c){var o={_id:Object(ze.a)(),currency:c,budgetId:a,userId:t?t.googleId:null,title:e,amount:r,date:new Date};t?(n(en()),oe.a.post("".concat(X,"/transactions"),Object(K.a)({},o)).then((function(e){n(Jn(e.data)),n(dn()),n(tn())}))):(n(Jn(o)),n(dn()))},disabled:!e.length,button:!1,currency:u&&u.amount.currency,childrenBefore:Object(Qn.jsxs)(Qn.Fragment,{children:[Object(Qn.jsx)(ye,{htmlFor:"selectBudget",children:"Select a budget"}),Object(Qn.jsx)(Ve,{id:"selectBudget",onChange:function(n){o(n.target.value)},value:a,children:e.map((function(n){return Object(Qn.jsxs)("option",{value:n._id,children:[n.title,": ",n.amount.actual.toFixed(2)," ",n.amount.currency]},n._id)}))})]}),children:Object(Qn.jsxs)(Qn.Fragment,{children:[e[0]&&Object(Qn.jsx)(Pe,{children:a&&Object(Qn.jsx)(Ue,Object(K.a)({},u))}),Object(Qn.jsx)(R,{color:"green",textColor:"white",style:{marginTop:"3rem",opacity:e[0]?1:.6},onClick:function(n){return!e[0]&&n.preventDefault()},children:e[0]?"Add":"Add a budget"})]})})},He=v.b.h1(Un||(Un=Object(m.a)(["\n  font-size: 2.5rem;\n  text-align: center;\n  font-weight: 500;\n  margin-bottom: 2rem;\n"]))),qe=v.b.div(Ln||(Ln=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]))),Je=function(n){var e=n.handleAction,t=Object(x.useContext)(he);return Object(Qn.jsxs)("div",{children:[Object(Qn.jsx)(He,{children:"Are you sure?"}),Object(Qn.jsxs)(qe,{children:[Object(Qn.jsx)(R,{color:"gray-dark",textColor:"gray-dark",secondary:!0,style:{width:"48%"},onClick:function(){return t.handleClose()},type:"button",children:"Cancel"}),Object(Qn.jsx)(R,{color:"gray-dark",textColor:"white",style:{width:"48%"},onClick:e,children:"Delete"})]})]})},We=v.b.div(Gn||(Gn=Object(m.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),Ke=v.b.div(zn||(zn=Object(m.a)(["\n  color: ",";\n  font-size: 2.1rem;\n  margin: 0 1rem;\n"])),(function(n){return"var(--color-".concat(n.color,")")})),Qe=v.b.h1(Bn||(Bn=Object(m.a)(["\n  font-size: 2rem;\n  font-weight: 500;\n"]))),Ze=v.b.h2(Fn||(Fn=Object(m.a)(["\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: var(--color-gray-dark);\n  opacity: 0.9;\n"]))),$e=v.b.h3(Mn||(Mn=Object(m.a)(["\n  font-size: 1.3rem;\n  font-weight: 500;\n  color: var(--color-gray-dark);\n  opacity: 0.8;\n"]))),nt=Object(v.b)(R)(Yn||(Yn=Object(m.a)(["\n  padding: 0.5rem;\n  display: flex;\n  align-items: center;\n\n  @media (min-width: ",") {\n    padding: 1rem;\n  }\n"])),I),et=Object(v.b)(de.e)(Vn||(Vn=Object(m.a)(["\n  font-size: 3rem;\n\n  @media (min-width: ",") {\n    display: none;\n  }\n"])),I),tt=v.b.p(Pn||(Pn=Object(m.a)(["\n  display: none;\n\n  @media (min-width: ",") {\n    display: inline;\n  }\n"])),I),rt=function(n){var e=n._id,t=n.budgetId,r=n.title,c=n.amount,a=n.date,o=n.currency,i=Object(g.b)(),u=Object(x.useState)(!1),l=Object(C.a)(u,2),s=l[0],d=l[1],b=Object(x.useState)(null),j=Object(C.a)(b,2),f=j[0],O=j[1],h=Object(g.c)((function(n){return n.budgets})),m=Object(g.c)((function(n){return n.googleUser})),p=new Date(a);Object(x.useEffect)((function(){var n=h.filter((function(n){return n._id===t}))[0];n&&O(n)}),[h,t]);return Object(Qn.jsxs)(Qn.Fragment,{children:[Object(Qn.jsxs)(We,{children:[Object(Qn.jsxs)("div",{style:{flex:1},children:[Object(Qn.jsx)(Qe,{children:r}),f&&Object(Qn.jsx)(Ze,{children:f.title}),Object(Qn.jsxs)($e,{children:[p.getFancyDate()," | ",p.getFancyHours()]})]}),Object(Qn.jsxs)(Ke,{color:ke(c),children:[c," ",o]}),Object(Qn.jsx)("div",{children:Object(Qn.jsxs)(nt,{color:"red",textColor:"white",onClick:function(){return d(!0)},children:[Object(Qn.jsx)(et,{}),Object(Qn.jsx)(tt,{children:"Delete"})]})})]}),s&&Object(Qn.jsx)(ge,{closeModal:function(){return d(!1)},children:Object(Qn.jsx)(Je,{handleAction:function(){m&&(i(en()),oe.a.delete("".concat(X,"/transactions/").concat(e)).then((function(){var n;i((n=e,Object(H.action)(nn.REMOVE_TRANSACTION,{transactionId:n}))),i(dn()),i(tn())})))}})})]})},ct=v.b.ul(Xn||(Xn=Object(m.a)(["\n  list-style-type: none;\n  margin: 4rem auto;\n  padding: 0 4rem;\n\n  @media (min-width: ",") {\n    width: 80%;\n  }\n\n  @media (min-width: ",") {\n    width: 60%;\n  }\n\n  @media (min-width: ",") {\n    width: 55%;\n  }\n\n  li {\n    margin: 0;\n    padding: 0;\n\n    :not(:last-child) {\n      margin-bottom: 3rem;\n    }\n  }\n"])),I,S,N),at=function(){var n=Object(g.c)((function(n){return n.transactions}));return Object(Qn.jsx)(ct,{children:Object(Qn.jsx)(ne.a,{component:null,children:n.map((function(n){return Object(Qn.jsx)(ee.a,{timeout:200,classNames:"slide",children:Object(Qn.jsx)("li",{children:Object(Qn.jsx)(rt,Object(K.a)({},n))})},n._id)}))})})},ot=function(){return Object(Qn.jsxs)("div",{children:[Object(Qn.jsx)(Me,{}),Object(Qn.jsx)(Xe,{}),Object(Qn.jsx)(at,{})]})},it=function(){return Object(Qn.jsx)("div",{children:"Statistics"})},ut=function(){var n=Object($n.f)();return Object(Qn.jsx)(ne.a,{component:null,children:Object(Qn.jsx)(ee.a,{timeout:200,classNames:"fade",children:Object(Qn.jsxs)($n.c,{location:n,children:[Object(Qn.jsx)($n.a,{exact:!0,path:"/overview",children:Object(Qn.jsx)(te,{})}),Object(Qn.jsx)($n.a,{exact:!0,path:"/budgets",children:Object(Qn.jsx)(Ye,{})}),Object(Qn.jsx)($n.a,{exact:!0,path:"/payments",children:Object(Qn.jsx)(ot,{})}),Object(Qn.jsx)($n.a,{exact:!0,path:"/statistics",children:Object(Qn.jsx)(it,{})})]})},n.key)})},lt=function(){var n=Object(T.a)(w.a.mark((function n(e){var t,r,c,a,o,i,u,l,s,d,b;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t=new Date,r=new Date(e.dateFetched),864e5,!(Math.floor((t.getTime()-r.getTime())/864e5)>=7)){n.next=16;break}return n.next=7,oe.a.get("https://v1.nocodeapi.com/kriziuu/cx/FPLWrEBmjQDFHLdf/rates");case 7:return n.next=9,n.sent.data;case 9:for(c=n.sent,a={},o=0,i=Object.entries(c.rates);o<i.length;o++)u=Object(C.a)(i[o],2),l=u[0],s=u[1],d=Object(me.a)({},l,s),a=Object(K.a)(Object(K.a)({},a),d);return b={dateFetched:t,source:c.source,currencies:a,primaryCurrency:e.primaryCurrency},n.abrupt("return",b);case 16:return n.abrupt("return",e);case 17:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),st=function(){var n=Object(T.a)(w.a.mark((function n(e,t,r){var c,a,o;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(),n.next=3,oe.a.get("".concat(X,"/budgets"),{params:{userId:null===e||void 0===e?void 0:e.googleId}});case 3:return n.next=5,n.sent.data;case 5:return c=n.sent,n.next=8,oe.a.get("".concat(X,"/transactions"),{params:{userId:null===e||void 0===e?void 0:e.googleId}});case 8:return n.next=10,n.sent.data;case 10:return a=n.sent,o="",n.next=14,oe.a.get("".concat(X,"/users/").concat(null===e||void 0===e?void 0:e.googleId)).then((function(n){o=n.data.currency})).catch((function(){oe.a.post("".concat(X,"/users"),{_id:null===e||void 0===e?void 0:e.googleId,currency:"USD"})}));case 14:return c=c.map((function(n){return n.date=new Date(n.date),n})),a.map((function(n){return n.date=new Date(n.date),n})),r(),n.abrupt("return",{budgets:c,transactions:a,userCurrency:o});case 18:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),dt=t(53),bt=t.n(dt),jt=v.b.div(Hn||(Hn=Object(m.a)(["\n  width: 100vw;\n  margin-left: auto;\n  margin-right: auto;\n\n  @media (min-width: ",") {\n    width: 75vw;\n  }\n"])),N),ft=function(){var n=Object(g.b)(),e=Object(g.c)((function(n){return n.googleUser})),t=Object(g.c)((function(n){return n.currency})),r=Object(x.useRef)(!0),c=Object(g.c)((function(n){return n.loader})),a=Object(x.useCallback)((function(){return n(en())}),[n]),o=Object(x.useCallback)((function(){return n(tn())}),[n]);return Object(x.useEffect)((function(){return r.current||(n(Object(H.action)(nn.REMOVE_TRANSACTION_ALL)),n(Object(H.action)(q.REMOVE_BUDGET_ALL)),n(dn())),e&&st(e,a,o).then((function(e){e.budgets.forEach((function(e){n(un(e))})),e.transactions.forEach((function(e){n(Jn(e))})),n(Kn(e.userCurrency)),n(dn())})),function(){r.current=!1}}),[e,n,a,o]),Object(x.useEffect)((function(){lt(t).then((function(e){n(function(n){return Object(H.action)(Z.UPDATE_CURRENCY,{currency:n})}(e))}))}),[t,n]),Object(Qn.jsxs)(Qn.Fragment,{children:[Object(Qn.jsx)(y,{}),Object(Qn.jsx)(jt,{children:Object(Qn.jsxs)(p.a,{children:[Object(Qn.jsx)(Zn,{}),Object(Qn.jsx)("main",{style:{position:"relative"},children:Object(Qn.jsx)(ut,{})})]})}),c&&Object(Qn.jsx)(ge,{closeModal:function(){},container:!1,closable:!1,children:Object(Qn.jsx)(bt.a,{size:"8rem",color:"silver"})})]})};h.a.render(Object(Qn.jsx)(g.a,{store:on,children:Object(Qn.jsx)(ft,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.4557ab2d.chunk.js.map