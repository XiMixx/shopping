<template>
	<view class="infoList">
		<view class="listItem" v-for="item in infoList" :key="item.id" @click="getInfoDetail(item.id)">
			<view class="itemLeft">
				<image :src="item.img_url" mode="" class="img"></image>
			</view>
			<view class="itemRight">
				<view class="rightTitle">{{item.title}}</view>
				<view class="rightTime">发布时间：{{item.add_time}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				infoList:[]
			}
		},
		onLoad() {
			this.getInfo()
		},
		methods:{
			async getInfo () {
				const res = await this.$myRequest({
					url:'/api/getnewslist'
				});
				console.log(res);
				this.infoList = res.data.message;
			},
			
			getInfoDetail(id){
				uni.navigateTo({
					url:'/pages/infoDetail/infoDetail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.infoList{
		.listItem{
			display: flex;
			border-bottom: 1rpx solid #FF0000;
			padding: 10rpx;
			.itemLeft{
				flex: 1;
				.img{
					width: 100%;
					height: 100%;
				}
			}
			.itemRight{
				flex: 2;
				display: flex;
				flex-direction: column;
				.rightTitle{
					flex: 1;
					font-size: 30rpx;
					margin-bottom: 30rpx;
				}
				.rightTime{
					flex: 1;
					font-size: 20rpx;
				}
			}
		}
	}
</style>
