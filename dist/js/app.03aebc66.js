webpackJsonp([1],{0:function(t,e,a){t.exports=a("NHnr")},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/5sW"),s=(a("Jmt5"),{name:"app"}),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top bg-dark"},[a("div",{staticClass:"collapse navbar-collapse"},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("router-link",{staticClass:"nav-item",attrs:{tag:"li","active-class":"active",exact:"",to:"/"}},[a("a",{staticClass:"nav-link"},[t._v("Главная")])]),a("router-link",{staticClass:"nav-item",attrs:{tag:"li","active-class":"active",to:"/users"}},[a("a",{staticClass:"nav-link"},[t._v("Список пользователей")])])],1)])]),a("div",{staticClass:"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light"},[a("router-view")],1)])},l=[],i=a("XyMi");function o(t){a("Om+z")}var u=!1,c=o,v=null,d=null,_=Object(i["a"])(s,r,l,u,c,v,d),m=_.exports,p=a("/ocq"),h={name:"IndexPage"},f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("\n    Стартовая страница\n")])},b=[],g=!1,x=null,C=null,k=null,y=Object(i["a"])(h,f,b,g,x,C,k),w=y.exports,O=a("mtWM"),j=a.n(O),E={name:"UsersTable",props:{users:{type:Array,required:!0}},computed:{total:function(){return this.users.length}}},$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-hover"},[t._m(0),a("tbody",t._l(t.users,function(e){return a("tr",{key:e.id},[a("td",[t._v("# "+t._s(e.id))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.username))]),a("td",[t._v(t._s(e.address.street))]),a("td",[t._v(t._s(e.email))]),a("td",[t._v(t._s(e.phone))]),a("td",[t._v(t._s(e.website))])])})),a("tfoot",[a("tr",[a("th",{attrs:{colspan:"8"}},[t._v("\n        Всего пользователей: "+t._s(t.total)+"\n      ")])])])])},J=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Имя")]),a("th",[t._v("Имя пользователя")]),a("th",[t._v("Адрес")]),a("th",[t._v("Email")]),a("th",[t._v("Телефон")]),a("th",[t._v("Сайт")])])])}],M=!1,P=null,T=null,q=null,z=Object(i["a"])(E,$,J,M,P,T,q),D=z.exports,H={name:"UsersListPage",components:{userTable:D},data:function(){return{users:[]}},methods:{loadData:function(){var t=this;j.a.get("https://jsonplaceholder.typicode.com/users").then(function(e){var a=e.data;t.users=a})}},mounted:function(){this.loadData()}},N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Список пользователей")]),t.users.length?a("user-table",{attrs:{users:t.users}}):a("div",{staticClass:"alert alert-warning"},[t._v("\n        Загрузка...\n    ")])],1)},U=[],W=!1,A=null,I=null,L=null,X=Object(i["a"])(H,N,U,W,A,I,L),B=X.exports;n["a"].use(p["a"]);var F=new p["a"]({mode:"history",routes:[{path:"/",name:"index",component:w},{path:"/users",name:"users",component:B}]});n["a"].config.productionTip=!1,new n["a"]({router:F,render:function(t){return t(m)}}).$mount("#app")},"Om+z":function(t,e){}},[0]);
//# sourceMappingURL=app.03aebc66.js.map