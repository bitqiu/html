webpackJsonp([12],{FH0I:function(A,a){},HUVZ:function(A,a){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAmCAYAAABOFCLqAAAABHNCSVQICAgIfAhkiAAAAadJREFUWIXtmO9VgzAUxe/zOAAj1AnEDeoEdQPqBmzQ4wTWCWwnUCcoI9AJYAPZ4PqBxJOmhARJq/VwP3GS9/J+5A+8PCBAJHOSFckkxN7wWyq/2RA/36BztloP8ElIfpIsQn1kwOAbABmAO9W0ADC3zEoAhYh8kHwD8ADgRkTq0DihMAnJRr2tT9omeCaHwqxUgJJk7YEpSL6r51VMiITkToMYbU4ZvqVqeo0FszPiVAok9cxMRnLBwyUdB8T2SMeUveEHwVSRYXZ98a57QBIAjz9+k0tX70ePMY+lDijy5OxTy5EBSADUIrI1YOhyHAHzPQEkMwAzAA2ArX10STI3YWLLGHt9tLk77IszwRR231XsZRijCcalCcalCcalCcalPw/TnJ1Ci4epZUMyNfpO+W+aq3hauQl1lJ+eEqYrri+5Omk+Y8u3gV8is/SO571rs91DGwC3Vte9wyUF8Gy17QEsRaTsi+W8HWiJSEny6ISJSGd1wbGyjQ8EuIDvzK/p38N0FYbiFYvY1uZMbTz2duYfdOEfUkZL0V70nCfJstcAdWgZ7QsgovJnyu7/ewAAAABJRU5ErkJggg=="},QLps:function(A,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={name:"downLoad",data:function(){return{appLogo:"",info:"",appImgAndroid:"",appUrlAndroid:"",appImgIOS:"",appUrlIOS:"",appImgAndroidIOS:"",appUrlAndroidIOS:"",url:""}},created:function(){this.getErCode()},methods:{getErCode:function(){var A=this;A.$axios.post("/fhConfig/getDownloadCfg",{}).then(function(a){a.data.ok?(A.appLogo=a.data.appLogo,A.info=a.data.appDescription,A.appImgAndroid=a.data.appImgAndroid,A.appUrlAndroid=a.data.appUrlAndroid,A.appImgIOS=a.data.appImgIOS,A.appUrlIOS=a.data.appUrlIOS,A.appImgAndroidIOS=a.data.appImgAndroidIOS,A.appUrlAndroidIOS=a.data.appUrlAndroidIOS):Toast(a.data.msg)})},See:function(A){this.url=1==A?this.appUrlAndroid:2==A?this.appUrlIOS:this.appUrlAndroidIOS,window.location.href=this.url}}},n={render:function(){var A=this,a=A.$createElement,t=A._self._c||a;return t("div",{staticClass:"downLoad"},[t("div",{staticClass:"logo"},[t("img",{attrs:{src:A.appLogo,alt:""}})]),A._v(" "),t("div",{staticClass:"info"},[A._v(A._s(A.info))]),A._v(" "),t("div",{staticClass:"title"},[A._v("下载官方APP")]),A._v(" "),t("ul",[A.appImgAndroid&&A.appUrlAndroid?t("li",[t("div",{staticClass:"erImg"},[t("img",{attrs:{src:A.appImgAndroid,alt:""}})]),A._v(" "),t("div",{staticClass:"erTitle"},[A._v("Android扫码下载")]),A._v(" "),t("div",{staticClass:"erBtn",on:{click:function(a){A.See(1)}}},[t("img",{attrs:{src:i("HUVZ"),alt:""}}),A._v("\n        Android下载\n      ")])]):A._e(),A._v(" "),A.appImgIOS&&A.appUrlIOS?t("li",[t("div",{staticClass:"erImg"},[t("img",{attrs:{src:A.appImgIOS,alt:""}})]),A._v(" "),t("div",{staticClass:"erTitle"},[A._v("iOS扫码下载")]),A._v(" "),t("div",{staticClass:"erBtn ios",on:{click:function(a){A.See(2)}}},[t("img",{attrs:{src:i("yswB"),alt:""}}),A._v("\n        iOS下载\n      ")])]):A._e(),A._v(" "),A.appImgAndroidIOS&&A.appUrlAndroidIOS?t("li",[t("div",{staticClass:"erImg"},[t("img",{attrs:{src:A.appImgAndroidIOS,alt:""}})]),A._v(" "),t("div",{staticClass:"erTitle"},[A._v("iOS＆Android扫码下载")]),A._v(" "),t("div",{staticClass:"erBtn two",on:{click:function(a){A.See(3)}}},[A._v("iOS＆Android下载")])]):A._e()])])},staticRenderFns:[]},d=i("VU/8")(t,n,!1,function(A){i("FH0I")},"data-v-6d5c9c0c",null);a.default=d.exports},yswB:function(A,a){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAApCAYAAAC7t0ACAAAABHNCSVQICAgIfAhkiAAAAeBJREFUWIXFmNFx2kAQhv/V5N3qICpBHVglpAOTCnAqgA5MB7iDkApCKoAOEBWAK/jycKcYizsC47nlf9IcSPfN3u7e7koFBDTAC7AB5iX2uLR5DSz5KD8IoAV2nOubJ8QmAQBQewHMMwArF4AIkToGgNYLoM0ALFwAIsRzAsA9LE/94RVobv2GXblRbWbHzG+dpFrSevwf4DE+7s2sv4mMkHSmibA7AD+Bp1ToETLlFPidOKIdMLvKUvEjh4yzjbWMQCngnA7A9BLAOOWW1DIFsHAE+ABSRYBOUt5EZfQm6ZckfYkLM2eAvaR2iCYjeOvOEeBNUmdm22GhktQ5AkjS4hRggPC5ZN71Ol7whviTypyVpAdHiG1q0dsSyfuncgTIyhsieXlVCnHrpcfUYqWMsxRSA0xSELcVG5/XjFEt4m0JKfjFyxhi7QwhSRNChVZLscYEeklf7wDTS5oPIXoPa0jhaH4Mlmglbe4E8v1fyQ+slYnjgtqbWXOaMX27pqCza13A2rHI7cf5YoDINbcldJY5T0E8Sv/L0UhoAbcFAY5cM70h9JTHQgDXF1EE/7hkkRUwAboI3RFGAzn4bQ7gv6MB4FnSMIHrFbLrKjcqiO9MFFqJRqGkW5nZeThG/QWvlhZ6JGvW+QAAAABJRU5ErkJggg=="}});