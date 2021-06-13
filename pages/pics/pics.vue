<template>
	<view>
		<view class="list">
			<scroll-view scroll-y="true" class="listLeft">
				<view 
					v-for="(item,index) in imgCategory"
					class="listNav"
					:key="item.id"
					@click="getImages(item.id)"
				>
					{{item.title}}
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="listRight">
				<view v-if="images.length != 0" v-for="item in images">
					<image :src="item.img_url" mode="aspectFill" class="img"/>
					<view>{{item.title}}</view>
				</view>
				<view v-if="message">{{message}}</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				imgCategory:[],
				images:[],
				message:''
			}
		},
		onLoad() {
			this.getImgCategory();
		},
		methods:{
			async getImgCategory(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory'
				});
				console.log(res);
				this.imgCategory = res.data.message;
			},
			async getImages(id){
				const res = await this.$myRequest({
					url:'/api/getimages/'+id
				});
				console.log(res,id,'社区图片');
				if(res.data.message.length != 0){
					this.images = res.data.message
				}else{
					this.message = '暂无数据'
				}
				console.log(this.messaage)
			},
		}
	}
</script>

<style lang="scss">
	.list {
		display: flex;
		.listLeft {
			flex: 1;
			border-right: 1rpx solid #e4e4e4;
			.listNav{
				height: 100rpx;
				text-align: center;
				line-height: 100rpx;
				border-bottom: 1rpx solid #e4e4e4;
			}
		}
		.listRight{
			flex: 3;
			.img{
				width: 100%;
				
			}
		}
	}
</style>
