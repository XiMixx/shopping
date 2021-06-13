<template>
	<view class="container">
		<swiper indicator-dots='true'   autoplay="true" @change="change" class="lunbo">
			<swiper-item v-for="(item ,index) in info" :key="index">
				<view>
					<image :src="item.img" mode="aspectFit" style="width: 100%;"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="nav">
			<view class="navItem" v-for="(item,index) in navs" :key="index" @click="getPath(item)">
				<view class="iconStyle">
					<view :class="item.icon" class="icon"></view>
				</view>
				<view>{{item.title}}</view>
			</view>
		</view>
		<view class="recommend">推荐商品</view>
		<view class="goods" >
			<view class="goodsCard" v-for="(item,index) in goods" >
				<uni-card 
					mode="style" 
					:is-shadow="true"
					:thumbnail="item.img_url"
					@click="getDetail(item)"
				>
					<view class="goodsTitle">{{item.title}}</view>
					<text class="sellPrice">￥{{item.sell_price}}</text>
				</uni-card>
			</view>
		</view>
		<view class="message">
			{{message}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [],
				current: 0,
				mode: 'round',
				navs:[
					{
						icon:'iconfont icon-market',
						title:'哔哩超市',
						path:'/pages/market/market'
					},
					{
						icon:'iconfont icon-message',
						title:'联系我们',
						path:'/pages/message/message'
					},
					{
						icon:'iconfont icon-image',
						title:'社区图片',
						path:'/pages/pics/pics'
					},
					{
						icon:'iconfont icon-video',
						title:'学习视频',
						path:'/pages/studyVideo/studyVideo'
					}
				],
				goods:[],
				number:1,
				message:''
			}
		},
		
		onLoad() {
			this.getSwipers();
			this.getGoods();
		},
		
		onReachBottom(){
			console.log("触底了",this.number);
			this.number += 1;
			this.getGoods();
			console.log(this.number);
		},
		
		methods: {
			change(e) {
				this.current = e.detail.current;
			},

			//获取轮播图的数据
			async getSwipers() {
				console.log("获取轮播图的数据")
				// uni.request({
				// 	url:"http://localhost:8082/api/getlunbo",
				// 	success:res => {
				// 		console.log("获取数据成功",res);
				// 		if(res.data.status===0){
				// 			this.info = res.data.message
				// 		}else{
				// 			return uni.showToast({
				// 				title:'获取数据失败'
				// 			})
				// 		}
				// 	}
				// })
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				});
				console.log(res);
				this.info = res.data.message
			},
			
			getPath(item){
				uni.navigateTo({
					url:item.path
				})
				console.log(item)
			},
			
			async getGoods(){
				const res = await this.$myRequest({
					url:"/api/getgoods?pageindex="+this.number
				}) ;
				console.log("获取商品",res,this.number);
				if(res.data.message.length != 0){
					this.goods = [...this.goods,...res.data.message]
				}else{
					console.log("没有更多数据了")
					this.message = "没有更多数据了"
				}
			},
			
			getDetail(item){
				console.log('detail',item)
				uni.navigateTo({
					url:'/pages/detail/detail?item='+JSON.stringify(item),
				})
			}
		},
		
		
	}
</script>

<style lang="scss">
	@import "./index.scss";
</style>
