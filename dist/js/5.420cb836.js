webpackJsonp([5],{WCNi:function(e,t){},yywi:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mtWM"),r=a.n(s),o={name:"UserForm",model:{prop:"user"},props:{user:{type:Object,required:!0}},methods:{selectNewImage:function(){this.$refs.imageUpload.click()},upload:function(){var e=this,t="https://api.imgur.com/3/image",a=new FormData;a.append("image",this.$refs.imageUpload.files[0]);var s={headers:{Authorization:"Client-ID 3bef0b8892d4b04"}};r.a.post(t,a,s).then(function(e){return e.data}).then(function(t){e.user.picture=t.data.link,e.$refs.imageUpload.value=""})}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"form-group"},[a("label",[e._v("Имя")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstName,expression:"user.firstName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.firstName},on:{input:function(t){t.target.composing||e.$set(e.user,"firstName",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Фамилия")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastName,expression:"user.lastName"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.lastName},on:{input:function(t){t.target.composing||e.$set(e.user,"lastName",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Баланс")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.balance,expression:"user.balance"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.balance},on:{input:function(t){t.target.composing||e.$set(e.user,"balance",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Телефон")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Адрес")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.address,expression:"user.address"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.address},on:{input:function(t){t.target.composing||e.$set(e.user,"address",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Компания")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.company,expression:"user.company"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.user.company},on:{input:function(t){t.target.composing||e.$set(e.user,"company",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[e._v("Аватарка")]),a("div",[a("img",{staticClass:"img-thumbnail",attrs:{src:e.user.picture}})]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.picture,expression:"user.picture"}],staticClass:"form-control",attrs:{type:"email"},domProps:{value:e.user.picture},on:{input:function(t){t.target.composing||e.$set(e.user,"picture",t.target.value)}}}),a("input",{ref:"imageUpload",staticClass:"hidden",attrs:{type:"file"},on:{change:e.upload}}),a("button",{attrs:{type:"button"},on:{click:e.selectNewImage}},[e._v("Выбрать новую")])])])},n=[],u=a("XyMi");function l(e){a("WCNi")}var m=!1,p=l,c=null,d=null,v=Object(u["a"])(o,i,n,m,p,c,d);t["default"]=v.exports}});
//# sourceMappingURL=5.420cb836.js.map