webpackJsonp([24],{"2ZVv":function(s,t){},A5AR:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"issue",data:function(){return{priceflag:!0,numflag:!0,typeflag:!0,text:"定量",coinflag:!1}},components:{commonHead:a("2Hch").a}},c={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"issue"},[a("common-head",{attrs:{title:"发布挂单"}}),s._v(" "),a("div",{staticClass:"issueContent"},[a("div",{staticClass:"bgs"},[a("ul",{staticClass:"orderType"},[a("li",{staticClass:"clearfix"},[a("span",{staticClass:"fl name"},[s._v("交易类型")]),a("span",{staticClass:"fr"},[a("button",{class:{active:s.typeflag},on:{click:function(t){s.typeflag=!0}}},[s._v("购买")]),a("button",{class:{active:!s.typeflag},on:{click:function(t){s.typeflag=!1}}},[s._v("出售")])])]),s._v(" "),a("li",{staticClass:"clearfix",on:{click:function(t){s.coinflag=!s.coinflag}}},[a("span",{staticClass:"fl name"},[s._v("币种")]),s._v(" "),a("i",{staticClass:"iconfont icon-jiantouyou fr"}),a("span",{staticClass:"fr cons"},[s._v("USDT")])]),s._v(" "),a("li",{staticClass:"clearfix",on:{click:function(t){s.$router.push("/choseCoin")}}},[a("span",{staticClass:"fl name"},[s._v("法币")]),s._v(" "),a("i",{staticClass:"iconfont icon-jiantouyou fr"}),a("span",{staticClass:"fr cons"},[s._v("CNY")])]),s._v(" "),a("li",{staticClass:"clearfix",on:{click:function(t){s.$router.push("/issuePayway")}}},[a("span",{staticClass:"fl name"},[s._v("付款方式")]),s._v(" "),a("i",{staticClass:"iconfont icon-jiantouyou fr"}),a("span",{staticClass:"fr cons chose"},[s._v("请选择")])]),s._v(" "),s._m(0)]),s._v(" "),a("div",{staticClass:"setprice"},[a("div",{staticClass:"title clearfix"},[a("span",{staticClass:"fl name"},[s._v("定价方式")]),a("span",{staticClass:"fr"},[a("button",{class:{active:s.priceflag},on:{click:function(t){s.priceflag=!0}}},[s._v("浮动价")]),a("button",{class:{active:!s.priceflag},on:{click:function(t){s.priceflag=!1}}},[s._v("一口价")])])]),s._v(" "),s.priceflag?a("div",{staticClass:"sets"},[s._m(1),s._v(" "),s._m(2),s._v(" "),a("div",{staticClass:"prompt1"},[s._v("浮动价6.35258")])]):s._e(),s._v(" "),s.priceflag?a("div",{staticClass:"sets"},[s._m(3),s._v(" "),s._m(4),s._v(" "),a("div",{staticClass:"prompt2"},[s._v("价格浮动至改价格以上，则不予成交")])]):s._e(),s._v(" "),s.priceflag?s._e():a("div",{staticClass:"sets"},[s._m(5),s._v(" "),s._m(6),s._v(" "),a("div",{staticClass:"prompt"},[s._v("广告发布后，该价格不会因市场被动而改变")])])]),s._v(" "),a("div",{staticClass:"place"},[a("div",{staticClass:"title clearfix"},[a("div",{staticClass:"fl name"},[s._v("购买"+s._s(s.text)+"的"),a("span",{staticClass:"icon"},[s._v("USDT")])]),a("span",{staticClass:"fr"},[a("button",{class:{active:s.numflag},on:{click:function(t){s.text="定量",s.numflag=!0}}},[s._v("定量")]),a("button",{class:{active:!s.numflag},on:{click:function(t){s.text="定额",s.numflag=!1}}},[s._v("定额")])])]),s._v(" "),s._m(7),s._v(" "),a("div",{staticClass:"money"},[s._v("余额 132.221USDT 合 24165465CNY")]),s._v(" "),a("div",{staticClass:"leave",on:{click:function(t){s.$router.push("/leave")}}},[a("div",{staticClass:"tit fl"},[s._v("留言")]),s._v(" "),a("div",{staticClass:"con fl"},[s._v("1.付款需要一些时间，请耐心等待了，不要着急。")]),s._v(" "),a("i",{staticClass:"iconfont icon-jiantouyou fr"})])]),s._v(" "),a("div",{staticClass:"btn"},[s._v("发布")])])]),s._v(" "),a("mt-popup",{attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:s.coinflag,callback:function(t){s.coinflag=t},expression:"coinflag"}},[a("div",{staticClass:"coinCon"},[a("div",{staticClass:"clearfix search"},[a("input",{staticClass:"fl",attrs:{placeholder:"搜索币种"}}),a("i",{staticClass:"iconfont icon-sousuo1 fr"})]),s._v(" "),a("ul",[a("li",{staticClass:"clearfix"},[a("i",{staticClass:"iconfont icon-btc1 fl"}),a("span",{staticClass:"fl"},[s._v("BTC")])]),s._v(" "),a("li",{staticClass:"clearfix"},[a("i",{staticClass:"iconfont icon-btc1 fl"}),a("span",{staticClass:"fl"},[s._v("ETH")])]),s._v(" "),a("li",{staticClass:"clearfix"},[a("i",{staticClass:"iconfont icon-btc1 fl"}),a("span",{staticClass:"fl"},[s._v("USDT")])])])])])],1)},staticRenderFns:[function(){var s=this.$createElement,t=this._self._c||s;return t("li",{staticClass:"clearfix"},[t("span",{staticClass:"fl name"},[this._v("付款期限")]),t("span",{staticClass:"fr con"},[this._v("15分钟")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tit"},[t("span",[this._v("设置溢价")]),t("i",{staticClass:"iconfont icon-wenhao"}),t("span",{staticClass:"pri"},[this._v("市场参考价5.962")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"clearfix  price"},[t("input",{staticClass:"fl",attrs:{placeholder:"建议-10到0"}}),t("span",{staticClass:"fr "},[this._v("%")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tit"},[t("span",[this._v("最高单价")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"clearfix  price"},[t("input",{staticClass:"fl",attrs:{placeholder:"选填"}}),t("span",{staticClass:"fr "},[this._v("CNY")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tit"},[t("span",[this._v("固定单价")]),t("span",{staticClass:"pri"},[this._v("市场参考价5.962")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"clearfix  price"},[t("input",{staticClass:"fl",attrs:{placeholder:"不随市价浮动"}}),t("span",{staticClass:"fr "},[this._v("CNY")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"limit"},[t("input",{staticClass:"fl ",attrs:{placeholder:"单笔下限"}}),this._v(" "),t("div",{staticClass:"fl line"},[this._v("——")]),this._v(" "),t("input",{staticClass:"fr",attrs:{placeholder:"单笔上限"}})])}]},l=a("VU/8")(i,c,!1,function(s){a("yJOZ"),a("2ZVv")},"data-v-689cce47",null);t.default=l.exports},yJOZ:function(s,t){}});