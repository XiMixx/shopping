(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/market"],{6154:function(t,n,e){},"8a16":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={uniCard:function(){return e.e("uni_modules/uni-card/components/uni-card/uni-card").then(e.bind(null,"b9bd"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"930e":function(t,n,e){"use strict";e.r(n);var r=e("f86d"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=o.a},d1c0:function(t,n,e){"use strict";e.r(n);var r=e("8a16"),o=e("930e");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("dcbb");var u,i=e("f0c5"),c=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);n["default"]=c.exports},dcbb:function(t,n,e){"use strict";var r=e("6154"),o=e.n(r);o.a},f86d:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=o(e("a34a"));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return f(t)||c(t)||i(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,n){if(t){if("string"===typeof t)return s(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?s(t,n):void 0}}function c(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function f(t){if(Array.isArray(t))return s(t)}function s(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function d(t,n,e,r,o,a,u){try{var i=t[a](u),c=i.value}catch(f){return void e(f)}i.done?n(c):Promise.resolve(c).then(r,o)}function l(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function u(t){d(a,r,o,u,i,"next",t)}function i(t){d(a,r,o,u,i,"throw",t)}u(void 0)}))}}var m={data:function(){return{number:1,goods:[],message:""}},onLoad:function(){this.getGoods()},onReachBottom:function(){this.number+=1,this.getGoods()},methods:{getGoods:function(){var t=this;return l(r.default.mark((function n(){var e;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$myRequest({url:"/api/getgoods?pageindex="+t.number});case 2:e=n.sent,console.log("商品列表",e),0!=e.data.message.length?t.goods=[].concat(a(t.goods),a(e.data.message)):t.message="暂无更多数据";case 5:case"end":return n.stop()}}),n)})))()},getDetail:function(){t.navigateTo({url:"/pages/detail/detail"})}}};n.default=m}).call(this,e("543d")["default"])},fedb:function(t,n,e){"use strict";(function(t){e("5a1f");r(e("66fd"));var n=r(e("d1c0"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["fedb","common/runtime","common/vendor"]]]);