(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{"24fe":function(t,e,n){"use strict";var o=n("b46d"),a=n.n(o);a.a},"54e5":function(t,e,n){"use strict";n.r(e);var o=n("67f1"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"67f1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,a,i,s){try{var u=t[i](s),r=u.value}catch(c){return void n(c)}u.done?e(r):Promise.resolve(r).then(o,a)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var s=t.apply(e,n);function u(t){i(s,o,a,u,r,"next",t)}function r(t){i(s,o,a,u,r,"throw",t)}u(void 0)}))}}var u={data:function(){return{options:[{id:"headphones",icon:"headphones",text:"客服"},{id:"shop",icon:"shop",text:"店铺",infoBackgroundColor:"#007aff",infoColor:"red"},{id:"cart",icon:"cart",text:"购物车",info:0}],buttonGroup:[{id:"addToCart",text:"加入购物车",backgroundColor:"#ff0000",color:"#fff"},{id:"buyNow",text:"立即购买",backgroundColor:"#ffa200",color:"#fff"}],item:{},lunbos:[],lunboMessage:"",detailList:[],message:"",contentList:"",contentMessage:"",cartGoods:[]}},onLoad:function(t){this.item=JSON.parse(t.item),this.getDetailData(),this.getDetailDesc(),this.getLunbo()},methods:{change:function(t){this.current=t.detail.current},onClick:function(e){console.log(e),t.showToast({title:"点击".concat(e.content.text),icon:"none"}),"cart"===e.content.id&&t.switchTab({url:"/pages/shoppingCart/shoppingCart",success:function(t){console.log(t)},fail:function(t){console.log(t)}})},buttonClick:function(t){console.log(t),"addToCart"===t.content.id&&(this.options[2].info++,this.cartGoods=[this.options[2].info,this.item.id]),console.log(this.cartGoods)},getLunbo:function(){var t=this;return s(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getthumimages/"+t.item.id});case 2:n=e.sent,console.log("lunbo",n),0!=n.data.message.length?t.lunbos=n.data.message:t.lunboMessage="暂无图片数据";case 5:case"end":return e.stop()}}),e)})))()},getDetailData:function(){var t=this;return s(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/goods/getinfo/"+t.item.id});case 2:n=e.sent,console.log("详情数据",n),0!=n.data.message.length?t.detailList=n.data.message[0]:t.message="获取数据失败";case 5:case"end":return e.stop()}}),e)})))()},getDetailDesc:function(){var t=this;return s(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/goods/getdesc/"+t.item.id});case 2:n=e.sent,console.log("详情介绍",n),0!=n.data.message.length?t.contentList=n.data.message[0]:t.contentMessage="暂无内容";case 5:case"end":return e.stop()}}),e)})))()}}};e.default=u}).call(this,n("543d")["default"])},b46d:function(t,e,n){},d70e:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={uniGoodsNav:function(){return n.e("uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav").then(n.bind(null,"8295"))}},a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},e3cc:function(t,e,n){"use strict";(function(t){n("5a1f");o(n("66fd"));var e=o(n("e5a9"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},e5a9:function(t,e,n){"use strict";n.r(e);var o=n("d70e"),a=n("54e5");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("24fe");var s,u=n("f0c5"),r=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],s);e["default"]=r.exports}},[["e3cc","common/runtime","common/vendor"]]]);