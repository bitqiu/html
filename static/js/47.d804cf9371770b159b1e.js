webpackJsonp([47],{CqIT:function(e,s){},jAWV:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t("Au9i"),o={name:"forgetPwd",data:function(){return{imgreg:"",username:"",phonereg:"",password1:"",password2:"",regjpg:"",time:this.$t("m.forgetPsd.gets"),sesId:"",btnFlag:!1,langType:"",stepflag:!0}},created:function(){"zh-CN"==this.$i18n.locale?this.langType="ZhCn":this.langType="EnUs";var e=this;e.$axios.post("/fhSession/getId").then(function(s){e.sesId=s.data,e.regImg()})},mounted:function(){var e=this,s=document.documentElement.clientHeight;window.onresize=function(){var t,a=document.documentElement.clientHeight;s-a>50?((t=navigator.userAgent).indexOf("Android")>-1||t.indexOf("Adr")>-1)&&setTimeout(function(){e.ScrollClass.scrollIntoView(!0)},100):((t=navigator.userAgent).indexOf("Android")>-1||t.indexOf("Adr")>-1)&&setTimeout(function(){e.ScrollClass.scrollIntoView(!1)},100)}},methods:{focus:function(){},blurs:function(){},back:function(){this.stepflag?this.$router.push("/login"):(this.stepflag=!0,this.username="",this.imgreg="")},getClass:function(e){this.ScrollClass=e.target.parentNode},regImg:function(){this.regjpg="";var e=this;window.setTimeout(function(){e.regjpg=e.$store.state.httpUrl+"/fhImage/code?sessionId="+e.sesId+"&random="+Math.random()},10)},regTime:function(){var e=this;this.time==this.$t("m.forgetPsd.gets")&&(this.password1.length<6?Object(a.Toast)({message:this.$t("m.forgetPsd.psdMsg"),duration:1600}):this.password1==this.password2?(this.time=60,e.$axios.post("/fhUser/sendCodeForResetPwd",{sessionId:e.sesId,phone:e.username,imgCode:e.imgreg,langType:e.langType}).then(function(s){if(s.data.ok){Object(a.Toast)({message:e.$t("m.forgetPsd.send"),duration:1600});var t=window.setInterval(function(){0==--e.time&&(e.time=e.$t("m.forgetPsd.gets"),clearInterval(t))},1e3)}else e.time=e.$t("m.forgetPsd.gets"),e.stepflag=!0,e.username="",e.imgreg="",Object(a.Toast)({message:s.data.msg,duration:1600})},function(s){e.time=e.$t("m.forgetPsd.gets")}).catch(function(e){})):Object(a.Toast)({message:this.$t("m.forgetPsd.surePsdMsg"),duration:1600}))},regIn1:function(){/^1[3456789]\d{9}$/.test(this.username)?this.imgreg.length<4?Object(a.Toast)({message:this.$t("m.forgetPsd.picMsg"),duration:1600}):(this.stepflag=!1,this.password1="",this.password2="",this.phonereg=""):Object(a.Toast)({message:this.$t("m.forgetPsd.phoneMsg"),duration:1600})},regIn:function(){if(/^1[3456789]\d{9}$/.test(this.username))if(this.password1.length<6)Object(a.Toast)({message:this.$t("m.forgetPsd.psdMsg"),duration:1600});else if(this.password1==this.password2)if(this.imgreg.length<4)Object(a.Toast)({message:this.$t("m.forgetPsd.picMsg"),duration:1600});else{var e=this;a.Indicator.open(),e.$axios.post("/fhUser/resetPassword",{sessionId:e.sesId,phoneNum:e.username,newPassword:e.password1,repeatPassword:e.password2,imgValCode:e.imgreg,phoneValCode:e.phonereg,langType:e.langType}).then(function(s){a.Indicator.close(),s.data.ok?(Object(a.Toast)({message:s.data.msg,duration:1600}),setTimeout(function(){e.$router.push("/login")},1600)):(Object(a.Toast)({message:s.data.msg,duration:1600}),e.regImg())}).catch(function(e){})}else Object(a.Toast)({message:this.$t("m.forgetPsd.surePsdMsg"),duration:1600});else Object(a.Toast)({message:this.$t("m.forgetPsd.phoneMsg"),duration:1600})}},components:{}},i={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"forgetPwd"},[t("div",{staticClass:"back"},[t("i",{staticClass:"iconfont icon-jiantou_xiangzuo",on:{click:e.back}}),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:e.stepflag,expression:"stepflag"}]},[e._v(e._s(e.$t("m.forgetPsd.lookpaw")))]),e._v(" "),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.stepflag,expression:"!stepflag"}]},[e._v(e._s(e.$t("m.forgetPsd.forGetPsd")))])]),e._v(" "),t("div",{staticClass:"clearfix prompt"},[t("div",{staticClass:"center clearfix"},[t("div",{class:{fl:!0,step:!0,steps:e.stepflag}},[e._m(0),e._v(" "),t("div",{staticClass:"tit"},[e._v(e._s(e.$t("m.forgetPsd.person")))])]),e._v(" "),t("div",{staticClass:"fl line"},[e._v("------")]),e._v(" "),t("div",{class:{fr:!0,step:!0,steps:!e.stepflag}},[e._m(1),e._v(" "),t("div",{staticClass:"tit"},[e._v(e._s(e.$t("m.forgetPsd.forGetPsd")))])])])]),e._v(" "),t("div",{staticClass:"regContent"},[t("div",{staticClass:"content"},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.stepflag,expression:"stepflag"}],staticClass:"chearfix"},[t("label",{attrs:{for:"mobile"}},[e._v(e._s(e.$t("m.forgetPsd.phoneNo1")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"number",id:"mobile",placeholder:e.$t("m.forgetPsd.phoneNo")},domProps:{value:e.username},on:{click:function(s){e.getClass(s)},focus:e.focus,blur:e.blurs,input:function(s){s.target.composing||(e.username=s.target.value)}}})]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:e.stepflag,expression:"stepflag"}],staticClass:"chearfix"},[t("label",{attrs:{for:"pic"}},[e._v(e._s(e.$t("m.forgetPsd.picCode1")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.imgreg,expression:"imgreg"}],attrs:{type:"text",id:"pic",placeholder:e.$t("m.forgetPsd.picCode")},domProps:{value:e.imgreg},on:{click:function(s){e.getClass(s)},focus:e.focus,blur:e.blurs,input:function(s){s.target.composing||(e.imgreg=s.target.value)}}}),e._v(" "),t("img",{staticClass:"inputRt",staticStyle:{top:"0.15rem"},attrs:{src:e.regjpg,alt:""},on:{click:function(s){e.regImg()}}})]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.stepflag,expression:"!stepflag"}],staticClass:"chearfix"},[t("label",{attrs:{for:"password"}},[e._v(e._s(e.$t("m.forgetPsd.psd1")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"password",id:"password",placeholder:e.$t("m.forgetPsd.psd")},domProps:{value:e.password1},on:{click:function(s){e.getClass(s)},focus:e.focus,blur:e.blurs,input:function(s){s.target.composing||(e.password1=s.target.value)}}})]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.stepflag,expression:"!stepflag"}],staticClass:"chearfix"},[t("label",{attrs:{for:"repeatPassword"}},[e._v(e._s(e.$t("m.forgetPsd.surePsd1")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",id:"repeatPassword",placeholder:e.$t("m.forgetPsd.surePsd")},domProps:{value:e.password2},on:{click:function(s){e.getClass(s)},focus:e.focus,blur:e.blurs,input:function(s){s.target.composing||(e.password2=s.target.value)}}})]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.stepflag,expression:"!stepflag"}],staticClass:"chearfix"},[t("label",{attrs:{for:"phone"}},[e._v(e._s(e.$t("m.forgetPsd.phoneCode1")))]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phonereg,expression:"phonereg"}],attrs:{type:"number",id:"phone",placeholder:e.$t("m.forgetPsd.phoneCode")},domProps:{value:e.phonereg},on:{click:function(s){e.getClass(s)},focus:e.focus,blur:e.blurs,input:function(s){s.target.composing||(e.phonereg=s.target.value)}}}),e._v(" "),t("span",{staticClass:"inputRt",on:{click:function(s){e.regTime()}}},[e._v(e._s(e.time)+e._s(e.time==e.$t("m.forgetPsd.gets")?"":"s"))])])])]),e._v(" "),t("div",{staticClass:"registerBtn"},[t("p",{directives:[{name:"show",rawName:"v-show",value:e.stepflag,expression:"stepflag"}],class:{regBtn:!0,bgcolor:""!=e.username&&""!=e.imgreg},on:{click:e.regIn1}},[e._v(e._s(e.$t("m.forgetPsd.change1")))]),e._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!e.stepflag,expression:"!stepflag"}],class:{regBtn:!0,bgcolor:""!=e.password1&&""!=e.password2&""!=e.phonereg},on:{click:e.regIn}},[e._v(e._s(e.$t("m.forgetPsd.change")))])])])},staticRenderFns:[function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("i",{staticClass:"iconfont icon-yanzheng"})])},function(){var e=this.$createElement,s=this._self._c||e;return s("div",[s("i",{staticClass:"iconfont icon-zhongzhimima"})])}]},r=t("VU/8")(o,i,!1,function(e){t("CqIT")},"data-v-6cffbda4",null);s.default=r.exports}});