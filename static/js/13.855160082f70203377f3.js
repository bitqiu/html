webpackJsonp([13],{"/UCV":function(t,s){},"E/l2":function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("mvHQ"),i=a.n(e),c=a("Au9i"),n={name:"c2c",data:function(){return{closes:!1,closePay:!1,buysFlag:!1,sellsFlag:!1,orderFlag:!1,tabnum:1,limitFlag:!1,priceSearch:!1,buyFlag:!0,sellFlag:!1,moneyFlag:!1,numFlag:!0,moneyFlags:!1,numFlags:!0,secs:30,time:"",orderType:1,typeFlag:!1,types:"",buys:!1,buylist:[],selllist:[],dataList:[],type:null,moneyKind:"USDT",money:0,pageNo:1,pageSize:10,searchMoney:"",changetype:!1,buyId:"",buyItem:"",buyCount:"",fmoney:"",sellId:"",sellItem:"",sellCount:"",fmoneys:0,sellquality:0,starTime:"",endTime:"",allLoaded:!1,topStatus:"",bottomStatus:"",wrapperHeight:0,flag:!1,flags:!1,r:!1,assest:{},canMoney:0,list:{},showlist:{},merchant:!1,sortType:"createAt",sortOrder:"decs"}},mounted:function(){this.wrapperHeight=document.documentElement.clientHeight-this.$refs.wrapper.getBoundingClientRect().top},created:function(){var t=this;if(t.$store.commit("socketSend",{act:"fwUser_getMoneyInfo",fn:function(s){if(s.ok){for(var a in t.list=s.coinMap,t.list)t.list[a].canCount=t.Subtr(t.list[a].count,t.list[a].frozenCount);t.showlist=t.list.USDT}}}),this.getSess("quickJump"))this.tab(2);else if(this.getSess("tab")&&null!=this.getSess("tab")){var s=Number(this.getSess("tab"));this.tab(s),window.sessionStorage.removeItem("tab")}else this.tab(1)},methods:{handleTopChange:function(t){this.topStatus=t},loadTop:function(){var t=this;setTimeout(function(){t.buylist=[],t.selllist=[],t.dataList=[],t.pageNo=1,t.allLoaded=!1,3==t.tabnum?t.getOrderData():t.allData(),t.$refs.loadmore.onTopLoaded()},200)},handleBottomChange:function(t){this.bottomStatus=t},loadBottom:function(){var t=this;t.pageNo++,setTimeout(function(){t.allLoaded=!1,3==t.tabnum?t.getOrderData():t.allData(),t.$refs.loadmore.onBottomLoaded()},200)},changeKind:function(t){this.moneyKind=t,this.buylist=[],this.selllist=[],this.pageNo=1,this.money=0,this.type=null,this.changetype=!1,this.showlist="BTC"==t?this.list.BTC:"USDT"==t?this.list.USDT:this.list.ETH,this.allData()},tab:function(t){1==t?(this.buyFlag=!0,this.sellFlag=!1,this.orderFlag=!1,this.merchant=!1,this.tabnum=1,this.buys=!1,this.buylist=[],this.selllist=[],this.dataList=[],this.pageNo=1,this.money=0,this.type=null,this.typeFlag=!1,this.changetype=!1,this.allData()):2==t?(this.buyFlag=!1,this.sellFlag=!0,this.orderFlag=!1,this.merchant=!1,this.tabnum=2,this.buys=!0,this.buylist=[],this.selllist=[],this.dataList=[],this.pageNo=1,this.money=0,this.type=null,this.typeFlag=!1,this.changetype=!1,this.allData()):(this.buyFlag=!1,this.sellFlag=!1,this.orderFlag=!0,this.merchant=!1,this.sortType="createAt",this.sortOrder="desc",this.buylist=[],this.selllist=[],this.dataList=[],this.pageNo=1,this.tabnum=3,this.starTime="",this.endTime="",this.orderType=1,this.type="",this.typeFlag=!1,this.changetype=!1,this.getOrderData())},chose:function(t){this.orderType=t,this.types=1==t?"":2==t,this.typeFlag=!1,this.pageNo=1,this.dataList=[],this.getOrderData()},cheak:function(t){this.merchant=t,this.loadTop()},allData:function(){var t=this;t.allLoaded=!1,1==this.pageNo&&(this.buylist=[],this.selllist=[],this.dataList=[]),c.Indicator.open(),this.$store.commit("socketSend",{act:"fwC2c_myAdList",data:{coinType:t.moneyKind,money:t.money,buy:t.buys,payKindType:t.type,onlyWorker:t.merchant,pageBean:{pageNo:t.pageNo,pageSize:t.pageSize}},fn:function(s){c.Indicator.close(),s.ok?0==s.pageBean.data.length?t.allLoaded=!0:t.buys?t.selllist=t.selllist.concat(s.pageBean.data):t.buylist=t.buylist.concat(s.pageBean.data):Object(c.Toast)(s.msg)}})},direction:function(){this.sortType="price","asc"==this.sortOrder?this.sortOrder="desc":this.sortOrder="asc",this.dataList=[],this.pageNo=1,this.getOrderData()},getOrderData:function(){var t=this;t.allLoaded=!1,c.Indicator.open(),t.$store.commit("socketSend",{act:"fwC2cOrder_list",data:{buy:t.types,createAtFrom:t.starTime,createAtTo:t.endTime,pageBean:{orderField:t.sortType,orderDirection:t.sortOrder,pageNo:t.pageNo,pageSize:6}},fn:function(s){c.Indicator.close(),s.ok?s.pageBean.data.length>0?t.dataList=t.dataList.concat(s.pageBean.data):t.allLoaded=!0:Object(c.Toast)(s.msg)}})},buy:function(t){var s=this;c.Indicator.open(),this.$store.commit("socketSend",{act:"fwC2c_canBuyCheckOrder",fn:function(a){c.Indicator.close(),a.ok?s.$store.commit("socketSend",{act:"fwC2c_canBuy",fn:function(a){c.Indicator.close(),a.ok?(s.setSess({buyItem:i()(t)}),s.setSess({tab:1}),s.$router.push("/payPlace")):Object(c.Toast)(a.msg)}}):Object(c.Toast)("您有未完成的订单，请前往订单详情查看")}})},sell:function(t){var s=this;c.Indicator.open(),this.$store.commit("socketSend",{act:"fwC2c_canSell",fn:function(a){c.Indicator.close(),a.ok?(s.setSess({sellItem:i()(t)}),s.setSess({tab:2}),s.$router.push("/sellPlace")):Object(c.Toast)(a.msg)}})},toDetil:function(t){if(t.dealcount=t.count,t.orderId=t.id,t.buy){var s=this;c.Indicator.open(),this.$store.commit("socketSend",{act:"fwC2cOrder_getPayKindList",data:{id:t.id},fn:function(a){c.Indicator.close(),a.ok&&(t.payway=a.list,s.setSess({buyItem:i()(t)}),"Waiting"==t.status?s.$router.push("/pay"):"Confirming"==t.status&&s.$router.push("/release"))}})}else this.setSess({sellItem:i()(t)}),"Waiting"==t.status?this.$router.push("/sellpay"):"Confirming"==t.status&&this.$router.push("/sellrelease");this.setSess({tab:3})}},destroyed:function(){window.sessionStorage.removeItem("quickJump")}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"c2c"},[e("div",{staticClass:"head"},[e("div",{directives:[{name:"show",rawName:"v-show",value:3!=t.tabnum,expression:"tabnum!=3"}],staticClass:"chose",on:{click:function(s){t.changetype=!t.changetype}}},[e("i",{staticClass:"iconfont icon-duoxuan1"}),t._v(" "+t._s(t.moneyKind))]),t._v(" "),e("div",{on:{click:function(s){t.$router.push("/quickPay")}}},[e("i",{staticClass:"iconfont icon-jiantou_xiangzuo back"})]),t._v(" "),e("div",{staticClass:"name"},[e("span",{staticClass:"fl ",on:{click:function(s){t.$router.push("/quickPay")}}},[t._v("快捷区")]),t._v(" "),e("span",{staticClass:"fl active"},[t._v("自选区")])]),t._v(" "),e("ul",{directives:[{name:"show",rawName:"v-show",value:t.changetype,expression:"changetype"}],staticClass:"icontype"},[e("li",{class:{active:"USDT"==t.moneyKind},on:{click:function(s){t.changeKind("USDT")}}},[t._v("USDT")]),t._v(" "),e("li",{class:{active:"ETH"==t.moneyKind},on:{click:function(s){t.changeKind("ETH")}}},[t._v("ETH")]),t._v(" "),e("li",{class:{active:"BTC"==t.moneyKind},on:{click:function(s){t.changeKind("BTC")}}},[t._v("BTC")])])]),t._v(" "),e("div",{staticClass:"c2cContent",attrs:{id:"h"}},[e("div",{staticClass:"bgs"},[e("div",{staticClass:"tophead"},[e("ul",{staticClass:"nav clerafix"},[e("li",{class:{fl:!0,active:1==t.tabnum},on:{click:function(s){t.tab(1)}}},[t._v(t._s(t.$t("m.c2c.buys")))]),t._v(" "),e("li",{class:{fl:!0,active:2==t.tabnum},on:{click:function(s){t.tab(2)}}},[t._v(t._s(t.$t("m.c2c.sells")))]),t._v(" "),e("li",{class:{fl:!0,active:3==t.tabnum},on:{click:function(s){t.tab(3)}}},[t._v("订单记录")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:3!=t.tabnum,expression:"tabnum!=3"}],staticClass:"assest clearfix"},[e("div",{staticClass:"fl"},[e("span",{staticClass:"tit fl"},[t._v(t._s(t.$t("m.c2c.can"))+" :  ")]),e("span",{staticClass:"money fl"},[t._v(t._s(t.showlist.canCount)+" "+t._s(t.moneyKind))])]),t._v(" "),e("div",{staticClass:"fr"},[e("span",{staticClass:"tit fl"},[t._v(t._s(t.$t("m.c2c.frozen"))+" :  ")]),e("span",{staticClass:"money fl"},[t._v(t._s(t.showlist.frozenCount)+" "+t._s(t.moneyKind))])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:3==t.tabnum,expression:"tabnum==3"}],staticClass:"assest clearfix"},[e("div",{staticClass:"fr",staticStyle:{width:"100%"}},[e("span",{staticClass:"fl chosemoney",on:{click:t.direction}},[t._v(t._s(t.$t("m.c2c.filter")))]),e("i",{staticClass:"iconfont icon-shaixuan1 fr all",on:{click:function(s){t.typeFlag=!t.typeFlag}}}),e("span",{staticClass:"tit fr",on:{click:function(s){t.typeFlag=!t.typeFlag}}},[t._v(t._s(1==t.orderType?t.$t("m.c2cOrderRecord.type1"):2==t.orderType?t.$t("m.c2cOrderRecord.type2"):t.$t("m.c2cOrderRecord.type3")))])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:3!=t.tabnum,expression:"tabnum!=3"}],staticClass:"attest clearfix"},[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.merchant,expression:"!merchant"}],staticClass:"chosem fl",on:{click:function(s){t.cheak(!0)}}}),e("i",{directives:[{name:"show",rawName:"v-show",value:t.merchant,expression:"merchant"}],staticClass:" fl  check iconfont icon-CheckboxChecked",on:{click:function(s){t.cheak(!1)}}}),e("span",{staticClass:"merchant fl"},[t._v(t._s(t.$t("m.c2c.certified")))])]),t._v(" "),t.typeFlag?e("ul",{staticClass:"chose"},[e("li",{class:{active:1==t.orderType},on:{click:function(s){t.chose(1)}}},[t._v(t._s(t.$t("m.c2cOrderRecord.type1")))]),t._v(" "),e("li",{class:{active:2==t.orderType},on:{click:function(s){t.chose(2)}}},[t._v(t._s(t.$t("m.c2cOrderRecord.type2")))]),t._v(" "),e("li",{class:{active:3==t.orderType},on:{click:function(s){t.chose(3)}}},[t._v(t._s(t.$t("m.c2cOrderRecord.type3")))])]):t._e()]),t._v(" "),e("div",{staticClass:"content"},[e("div",{ref:"wrapper",staticClass:"contents",style:{height:t.wrapperHeight+"px"}},[e("mt-loadmore",{ref:"loadmore",staticStyle:{"margin-bottom":"1rem"},attrs:{"auto-fill":!1,"bottom-method":t.loadBottom,"bottom-all-loaded":t.allLoaded,"top-method":t.loadTop},on:{"bottom-status-change":t.handleBottomChange,"top-status-change":t.handleTopChange}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.buyFlag,expression:"buyFlag"}],staticClass:"sellP"},t._l(t.buylist,function(s,a){return e("div",{key:a,staticClass:"sell clearfix"},[e("div",{staticClass:"lf clearfix"},[e("div",{staticClass:"person clearfix"},[e("img",{attrs:{src:s.profileImg}}),t._v(" "),e("span",[t._v(t._s("zh-CN"==t.$i18n.locale?s.nickname:s.enNickname))])]),t._v(" "),e("div",{staticClass:"price"},[t._v(t._s(t.$t("m.c2c.limit"))+" : "),e("span",[t._v("￥"+t._s(t._f("moneyFil")(s.min)))]),t._v(" - "),e("span",[t._v("￥"+t._s(t._f("moneyFil")(s.max)))])]),t._v(" "),e("div",{staticClass:"num"},[t._v(t._s(t.$t("m.c2c.count"))+" : "),e("span",[t._v(t._s(t._f("numFil")(s.min/s.price,2))+" "+t._s(s.coinType))]),t._v(" - "),e("span",[t._v(t._s(t._f("numFil")(s.max/s.price,2))+" "+t._s(s.coinType))])]),t._v(" "),e("div",{staticClass:"payWay clearfix"},t._l(s.payKindTypes,function(s,a){return e("span",{key:a,staticClass:"fl"},[e("i",{directives:[{name:"show",rawName:"v-show",value:"Bank"==s,expression:"items=='Bank'"}],staticClass:"iconfont icon-yinhangqia3 fl bank",class:{imgs:0==a},staticStyle:{color:"#d9ad00"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:"Bao"==s,expression:"items=='Bao' "}],staticClass:"iconfont icon-umidd1 fl zhi",class:{imgs:0==a},staticStyle:{color:"#1297db"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:"Wechat"==s,expression:"items=='Wechat'"}],staticClass:"iconfont icon-weixin1 fl wei",class:{imgs:0==a},staticStyle:{color:"#68b94a"}})])}))]),t._v(" "),e("div",{staticClass:"rt"},[e("div",{staticClass:"tit"},[t._v(t._s(s.tradeCount)+t._s(t.$t("m.c2c.single")))]),t._v(" "),e("div",{staticClass:"prc"},[t._v("￥"+t._s(t._f("moneyFil")(s.price)))]),t._v(" "),e("div",{staticClass:"gou clearfix"},[e("span",{staticClass:"buy",on:{click:function(a){t.buy(s)}}},[t._v("买入")])])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.sellFlag,expression:"sellFlag"}],staticClass:"sellP sellB"},t._l(t.selllist,function(s,a){return e("div",{key:a,staticClass:"sell clearfix"},[e("div",{staticClass:"lf clearfix"},[e("div",{staticClass:"person clearfix"},[e("img",{attrs:{src:s.profileImg}}),t._v(" "),e("span",[t._v(t._s("zh-CN"==t.$i18n.locale?s.nickname:s.enNickname))])]),t._v(" "),e("div",{staticClass:"price"},[t._v(t._s(t.$t("m.c2c.limit"))+" : "),e("span",[t._v("￥"+t._s(t._f("moneyFil")(s.min)))]),t._v(" - "),e("span",[t._v("￥"+t._s(t._f("moneyFil")(s.max)))])]),t._v(" "),e("div",{staticClass:"num"},[t._v(t._s(t.$t("m.c2c.count"))+" : "),e("span",[t._v(t._s(t._f("numFil")(s.min/s.price,2))+" "+t._s(s.coinType))]),t._v(" - "),e("span",[t._v(t._s(t._f("numFil")(s.max/s.price,2))+" "+t._s(s.coinType))])])]),t._v(" "),e("div",{staticClass:"rt"},[e("div",{staticClass:"tit"},[t._v(t._s(s.tradeCount)+t._s(t.$t("m.c2c.single")))]),t._v(" "),e("div",{staticClass:"prc"},[t._v("￥"+t._s(t._f("moneyFil")(s.price)))]),t._v(" "),e("div",{staticClass:"gou clearfix"},[e("span",{staticClass:"buy",on:{click:function(a){t.sell(s)}}},[t._v("卖出")])])])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.orderFlag,expression:"orderFlag"}],staticClass:"order"},t._l(t.dataList,function(s,i){return e("div",{key:i,staticClass:"orderlist",on:{click:function(a){t.toDetil(s)}}},[e("div",{staticClass:"title clearfix"},[e("span",{class:{type:!0,fl:!0,rbg:!s.buy}},[t._v(t._s(s.buy?t.$t("m.c2cOrderRecord.Otype1"):t.$t("m.c2cOrderRecord.Otype2")))]),e("span",{staticClass:"name fl"},[t._v(t._s(s.coinType))]),t._v(" "),e("span",{class:{fr:!0,status:!0,rcolor:"Confirming"==s.status||"Waiting"==s.status,gcolor:"Done"==s.status}},[t._v("\n                    "+t._s("Done"==s.status&&s.buy?t.$t("m.c2cOrderRecord.status7"):"Done"!=s.status||s.buy?"Confirming"==s.status&&s.buy?t.$t("m.c2cOrderRecord.status2"):"Confirming"!=s.status||s.buy?"Canceled"==s.status?t.$t("m.c2cOrderRecord.status3"):"Timeout"==s.status?t.$t("m.c2cOrderRecord.status4"):s.buy?t.$t("m.c2cOrderRecord.status5"):t.$t("m.c2cOrderRecord.status6"):t.$t("m.c2cOrderRecord.status8"):t.$t("m.c2cOrderRecord.status1")))])]),t._v(" "),e("div",{staticClass:"ordercon"},[e("p",{staticClass:"clearfix"},[e("span",{staticClass:"name fl"},[t._v(t._s(s.buy?t.$t("m.c2cOrderRecord.sellp"):t.$t("m.c2cOrderRecord.buyp")))]),e("span",{staticClass:"con fr"},[e("img",{attrs:{src:a("JgJ5")}}),t._v(t._s("zh-CN"==t.$i18n.locale?s.nickname:s.enNickname))])]),t._v(" "),e("p",{staticClass:"clearfix"},[e("span",{staticClass:"name fl"},[t._v(t._s(t.$t("m.c2cOrderRecord.price"))+" CNY")]),e("span",{staticClass:"con fr"},[t._v(t._s(t._f("moneyFil")(s.price)))])]),t._v(" "),e("p",{staticClass:"clearfix"},[e("span",{staticClass:"name fl"},[t._v(t._s(t.$t("m.c2cOrderRecord.num")))]),e("span",{staticClass:"con fr"},[t._v(t._s(s.count))])]),t._v(" "),e("p",{staticClass:"clearfix"},[e("span",{staticClass:"name fl"},[t._v(t._s(t.$t("m.c2cOrderRecord.total"))+" CNY")]),e("span",{staticClass:"con fr"},[t._v(t._s(t._f("moneyFil")(s.price*s.count)))])])]),t._v(" "),e("div",{staticClass:"ordernum clearfix"},[e("span",{staticClass:"name fl"},[t._v(t._s(t.$t("m.c2cOrderRecord.order"))+"："+t._s(s.refNo))]),e("span",{staticClass:"fr"},[t._v(t._s(t.$t("m.c2c.comment")))])])])})),t._v(" "),t.allLoaded?e("div",{staticClass:"noThing"},[e("span",[t._v(t._s(t.$t("m.Public.noData")))])]):t._e(),t._v(" "),e("div",{staticClass:"mint-loadmore-bottom",attrs:{slot:"bottom"},slot:"bottom"},[e("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.bottomStatus,expression:"bottomStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.bottomStatus}},[e("i",{staticClass:"iconfont icon-iconset0414"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.bottomStatus,expression:"bottomStatus === 'loading'"}]},[e("mt-spinner",{attrs:{type:"snake"}})],1)]),t._v(" "),e("div",{staticClass:"mint-loadmore-top",attrs:{slot:"top"},slot:"top"},[e("span",{directives:[{name:"show",rawName:"v-show",value:"loading"!==t.topStatus,expression:"topStatus !== 'loading'"}],class:{"is-rotate":"drop"===t.topStatus}},[e("i",{staticClass:"iconfont icon-iconset0413"})]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.topStatus,expression:"topStatus === 'loading'"}]},[e("mt-spinner",{attrs:{type:"snake"}})],1)])])],1)])])])])},staticRenderFns:[]},l=a("VU/8")(n,o,!1,function(t){a("pVxO"),a("/UCV")},"data-v-d752409c",null);s.default=l.exports},JgJ5:function(t,s,a){t.exports=a.p+"static/img/photo.e3b8bd2.png"},pVxO:function(t,s){}});