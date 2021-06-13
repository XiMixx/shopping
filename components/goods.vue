<template>
	<view>
		<view class="goods">
			<view class="goodsCard" v-for="(item,index) in goodsList">
				<uni-card 
					mode="style" 
					:is-shadow="true"
					:thumbnail="item.img_url"
				>
					<view class="goodsTitle">{{item.title}}</view>
					<text class="sellPrice">￥{{item.sell_price}}</text>
				</uni-card>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goods",
		props:[
			'goodsList'
		]
		data() {
			return {
				message:''
			};
		},
		created(){
			console.log(props.goodsList)
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
.goods{
		display: flex;
		flex-wrap: wrap;
		.goodsCard{
			width: 50%;
			// flex: 1;
			.goodsTitle{
				display: -webkit-box;
				-webkit-line-clamp: 2;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical;
			}
			.sellPrice{
				color: red;
			}
		}
	}
	.message{
		color: #999999;
		text-align: center;
	}
</style>
