webpackJsonp([41],{Q0EH:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("2Hch"),s=a("Au9i"),c={name:"leave",data:function(){return{text:"",ctext:""}},computed:{count:function(){var t=this.text.length;return t>100?(this.text=this.ctext,Object(s.Toast)("已超出字数限制了"),100):(this.ctext=this.text,t)}},components:{commonHead:n.a}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"leave"},[a("common-head",{attrs:{title:"留言"}}),t._v(" "),a("div",{staticClass:"save"},[t._v("保存")]),t._v(" "),a("div",{staticClass:"leaveContent"},[a("div",{staticClass:"content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"con",attrs:{placeholder:"请留言"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),a("div",{staticClass:"number"},[t._v("100/"+t._s(t.count))])])])],1)},staticRenderFns:[]},o=a("VU/8")(c,i,!1,function(t){a("aZL+")},"data-v-5b3afd56",null);e.default=o.exports},"aZL+":function(t,e){}});