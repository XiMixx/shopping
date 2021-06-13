<template>
	<view>
		<view class="infoDetail">
			<view class="title">{{infoDetail.title}}</view>
			<view class="timeClick">
				<view class="time">{{infoDetail.add_time}}</view>
				<view class="click">浏览：{{infoDetail.click}}</view>
			</view>
			<view v-html="infoDetail.content"></view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				infoDetail:[]
			}
		},
		props:['id'],
		onLoad() {
			this.getInfoDetail()
		},
		methods:{
			async getInfoDetail(){
				const res = await this.$myRequest({
					url:'/api/getnew/'+this.id
				})
				if(res.data.status == 0){
					if(res.data.message.length != 0){
						this.infoDetail = res.data.message[0]
						console.log(this.infoDetail)
					}else{
						uni.showToast({
							title:'暂无数据'
						})
					}
				}else{
					uni.showToast({
						title:'请求失败'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.infoDetail{
		margin: 20rpx;
		.title{
			text-align: center;
			line-height: 72rpx;
		}
		.timeClick{
			display: flex;
			justify-content: space-between;
			.time{
				flex: 4;
			}
			.click{
				flex: 1;
			}
		}
	}
</style>
