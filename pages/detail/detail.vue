<template>
	<view class="container">
		<view class="lunbo">
			<swiper indicator-dots='true'   autoplay="true" @change="change" class="lunbo">
				<swiper-item v-for="(item ,index) in lunbos" :key="index">
					<view>
						<image :src="item.src" mode="aspectFit" style="width: 100%;"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="price">
				￥{{detailList.sell_price}}
			</view>
			<view>{{item.title}}</view>
		</view>
		<view class="data">
			<view>货号：{{detailList.goods_no}}</view>
			<view>库存：{{detailList.stock_quantity}}</view>
		</view>
		<view class="detail">
			<view>详情介绍</view>
			<view v-html="contentList.content" id="content"></view>
		</view>
		<uni-goods-nav 
			:fill="true"  
			:options="options" 
			:buttonGroup="buttonGroup"  
			@click="onClick" 
			@buttonClick="buttonClick"
			class="goodsCart"
		/>
	</view>
</template>

<script>
	export default {
	    data () {
			return {
				options: [
					{
						id:'headphones',
						icon: 'headphones',
						text: '客服'
					}, {
						id:'shop',
						icon: 'shop',
						text: '店铺',
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						id:'cart',
						icon: 'cart',
						text: '购物车',
						info: 0
					},
				],
				buttonGroup: [
					{
						id:'addToCart',
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						id:'buyNow',
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					},
				],
				item:{},
				lunbos:[],
				lunboMessage:'',
				detailList:[],
				message:'',
				contentList:'',
				contentMessage:'',
				cartGoods:[],
			}
	    },
		onLoad(options) {
			this.item = JSON.parse(options.item);
			this.getDetailData();
			this.getDetailDesc();
			this.getLunbo();
		},
	    methods: {
			change(e) {
				this.current = e.detail.current;
			},
			
			onClick (e) {
				console.log(e);
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				});
				if(e.content.id === "cart"){
					uni.switchTab({
						url:'/pages/shoppingCart/shoppingCart',
						success: (res) => {
							console.log(res)
						},
						fail: (err) => {
							console.log(err)
						}
					});
				}
			},
			  
			buttonClick (e) {
				console.log(e);
				if(e.content.id === "addToCart"){
					this.options[2].info++;
					this.cartGoods = [this.options[2].info,this.item.id];
				}
				console.log(this.cartGoods)
			},
			
			async getLunbo(){
				const res = await this.$myRequest({
					url:'/api/getthumimages/'+this.item.id
				});
				console.log('lunbo',res);
				if(res.data.message.length != 0){
					this.lunbos = res.data.message
				}else{
					this.lunboMessage = '暂无图片数据'
				}
			},
			  
			async getDetailData(){
				const res = await this.$myRequest({
					url:'/api/goods/getinfo/'+this.item.id
				});
				console.log('详情数据',res)
				if(res.data.message.length != 0){
					this.detailList = res.data.message[0]
				}else{
					this.message = '获取数据失败'
				}
			},
			  
			async getDetailDesc(){
				const res = await this.$myRequest({
					url:'/api/goods/getdesc/'+this.item.id
				});
				console.log('详情介绍',res);
				if(res.data.message.length != 0){
					this.contentList = res.data.message[0]
				}else{
					this.contentMessage = '暂无内容'
				}
			},
	    }
	}
</script>

<style lang="scss">
	.container {
		background-color: #eeedef
	}
	.lunbo, .data, .detail, .goodsCart {
		background-color: #fff;
	}
	.data {
		margin: 10rpx 0;
	}
	.goodsCart {
		position: fixed;
		bottom: 0;
		width: 100%;
	}
	.detail {
		#content {
			.gomeImgLoad,.err-product  {
				width: 100%;
			}
		}
	}
</style>
