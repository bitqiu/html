webpackJsonp([22],{"/IZZ":function(t,e){},JeC5:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("2Hch"),s=a("Au9i"),n={name:"moneyTransferRecord",data:function(){return{type:this.$t("m.moneyTransferRecord.section1"),typeNum:0,actions:[{name:this.$t("m.moneyTransferRecord.section1"),method:this.change},{name:this.$t("m.moneyTransferRecord.section2"),method:this.change},{name:this.$t("m.moneyTransferRecord.section3"),method:this.change}],sheetVisible:!1,dataList:[],allLoaded:!1,topStatus:"",bottomStatus:"",pageNo:1,wrapperHeight:0}},created:function(){this.getDate(this.actions[0],0)},mounted:function(){this.wrapperHeight=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top},methods:{change:function(t,e){this.type=t.name,this.typeNum=e,this.pageNo=1,this.dataList=[],this.allLoaded=!1,this.getDate()},actionSheet:function(){this.sheetVisible=!0},getDate:function(){var t=this;s.Indicator.open(),t.$store.commit("socketSend",{act:"fwC2c_usdtTransferLog",data:{type:t.typeNum,pageBean:{pageNo:t.pageNo,pageSize:10}},fn:function(e){s.Indicator.close(),e.ok?e.pageBean.data.length>0?t.dataList=t.dataList.concat(e.pageBean.data):t.allLoaded=!0:Object(s.Toast)(e.msg)}})},handleTopChange:function(t){this.topStatus=t},handleBottomChange:function(t){this.bottomStatus=t},loadTop:function(){var t=this;t.pageNo=1,setTimeout(function(){t.dataList=[],t.allLoaded=!1,t.getDate(),t.$refs.loadmore.onTopLoaded()},1e3)},loadBottom:function(){var t=this;t.pageNo++,setTimeout(function(){t.allLoaded=!1,t.getDate(),t.$refs.loadmore.onBottomLoaded()},500)}},components:{commonHead:o.a}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"moneyTransferRecord"},[a("common-head",{attrs:{title:t.$t("m.moneyTransferRecord.title"),rt:!0}}),t._v(" "),a("div",{staticClass:"mtContent"},[a("div",{staticClass:"title clearfix"},[t._v(t._s(t.$t("m.moneyTransferRecord.title"))),a("span",{staticClass:"fr",on:{click:t.actionSheet}},[t._v(t._s(t.type)+" "),a("i",{staticClass:"iconfont icon-xiala"})])]),t._v(" "),a("div",{staticClass:"cont"},[a("div",{ref:"wrapper",staticClass:"list",style:{height:t.wrapperHeight+"px"}},[a("mt-loadmore",{ref:"loadmore",staticStyle:{"margin-bottom":"0.5rem"},attrs:{"auto-fill":!1,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"top-method":t.loadTop},on:{"bottom-status-change":t.handleBottomChange,"top-status-change":t.handleTopChange}},[a("ul",{staticClass:"mtRecords"},[t._l(t.dataList,function(e,o){return a("li",{key:o,class:{active:o%2!=0}},[a("span",{staticClass:"toWhere"},[t._v(t._s("zh-CN"==t.$i18n.locale?e.note:e.enNote))]),t._v(" "),a("span",{staticClass:"count"},[t._v(t._s(t._f("toNonExponential")(e.count)))]),t._v(" "),a("span",{staticClass:"time"},[t._v(t._s(e.createAt))])])}),t._v(" "),t.allLoaded?a("div",{staticClass:"nothing"},[t._v("\n              "+t._s(t.$t("m.Public.noData"))+"\n            ")]):t._e()],2),t._v(" "),a("div",{staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.bottomStatus,expression:"bottomStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.bottomStatus}},[t._v("↑")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.bottomStatus,expression:"bottomStatus === 'loading'"}]},[a("mt-spinner",{attrs:{type:"snake"}})],1)]),t._v(" "),a("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.topStatus}},[t._v("↓")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[a("mt-spinner",{attrs:{type:"snake"}})],1)])])],1)]),t._v(" "),a("mt-actionsheet",{attrs:{actions:t.actions,cancelText:t.$t("m.moneyTransferRecord.section4")},model:{value:t.sheetVisible,callback:function(e){t.sheetVisible=e},expression:"sheetVisible"}})],1)],1)},staticRenderFns:[]},c=a("VU/8")(n,i,!1,function(t){a("WEnd"),a("/IZZ")},"data-v-30aab69a",null);e.default=c.exports},WEnd:function(t,e){}});