<template>
	<view>
		<view class="user" @click="getUser">
			<view class="userImg">
				<image :src="avatarUrl" mode="" class="img" />
			</view>
			<view class="userInfo">
				<view class="userName">
					{{userName}}
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				avatarUrl:'../../static/icon/member.png',
				userName:'user'
			}
		},
		
		methods:{
			getUser(){
				uni.authorize({
					scope:'scopr.userInfo',
					success: () => {
						uni.login({
							provider:'weixin',
							success: (res) => {
								console.log(res);
								uni.getUserInfo({
									provider:'weixin',
									success: (userInfoRes) => {
										console.log(userInfoRes);
										this.userName = userInfoRes.userInfo.nickName;
										this.avatarUrl = userInfoRes.userInfo.avatarUrl;
										console.log(this.avatarUrl)
									}
								})
							}
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.user{
		display: flex;
		.userImg{
			flex: 1;
			.img{
				width: 150rpx;
				height: 150rpx;
				margin: 50% 0 0 50%;
				transform: translate(-50%,-50%);
			}
		}
		.userInfo{
			flex: 2;
			.userName{
				margin-top: 25%;
				transform: translate(0,-50%);
			}
		}
	}
</style>
