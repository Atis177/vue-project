webpackJsonp([9],{"9BQ9":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("mtWM"),n=a.n(i),s={name:"uploadPhoto",props:{user:{type:Object,required:!0}},methods:{selectNewImage:function(){this.$refs.imageUpload.click()},upload:function(){var t=this,e="https://api.imgur.com/3/image",a=new FormData;a.append("image",this.$refs.imageUpload.files[0]);var i={headers:{Authorization:"Client-ID 3bef0b8892d4b04"}};n.a.post(e,a,i).then(function(t){return t.data}).then(function(e){t.user.picture=e.data.link,t.$refs.imageUpload.value=""})}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",[t._v("Аватарка")]),a("div",[a("img",{staticClass:"img-thumbnail",attrs:{src:t.user.picture}})]),a("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:t.selectNewImage}},[t._v("Выбрать новую")]),a("input",{ref:"imageUpload",staticClass:"hidden",attrs:{type:"file"},on:{change:t.upload}})])},o=[],l=a("XyMi");function u(t){a("l7r0")}var c=!1,p=u,d=null,f=null,m=Object(l["a"])(s,r,o,c,p,d,f);e["default"]=m.exports},l7r0:function(t,e){}});
//# sourceMappingURL=9.a948526e.js.map