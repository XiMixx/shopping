<template>
	<view>
		<view class="goods">
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
	// import goods from '../../components/goods.vue';
	export default{
		data(){
			return{
				number:1,
				goods:[],
				message:''
			}
		},
		onLoad() {
			this.getGoods()
		},
		onReachBottom(){
			this.number += 1
			this.getGoods()
		},
		methods:{
			async getGoods(){
				const res = await this.$myRequest({
					url:'/api/getgoods?pageindex='+this.number
				});
				console.log('商品列表',res);
				if(res.data.message.length != 0){
					this.goods = [...this.goods,...res.data.message]
				}else{
					this.message = '暂无更多数据'
				}
			},
			getDetail(){
				uni.navigateTo({
					url:'/pages/detail/detail'
				})
			}
		},
		// components:{
		// 	goods
		// }
	}
</script>

<style lang="scss">
	@import "./market.scss";
</style>
