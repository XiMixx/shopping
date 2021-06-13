<template>
	<view class="container">
		<view>
			<image src="../../static/0.jpg" mode="aspectFill" class="img"></image>
		</view>
		<view class="data">
			<view class="contact" @click="callPhone">联系我们：400-618-9090（点击拨打）</view>
			<view class="address">地址：浙江省杭州市下沙经济开发区4号大街187号盛泰时代山</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0, // 使用 marker点击事件 需要填写id
				title: 'map',
				latitude: 30.312065,
				longitude: 120.363192,
				covers: [{
					latitude: 30.312065,
					longitude: 120.363192,
					iconPath: '../../static/icon/MAP_PIN.png'
				}, {
					latitude: 30.312237,
					longitude: 120.362893,
					iconPath: '../../static/icon/MAP_PIN.png'
				}]
			}
		},
		onLoad() {

		},
		methods: {
			callPhone(){
				uni.makePhoneCall({
					phoneNumber:'400-618-9090'
				})
			}
		}
	}
</script>

<style lang="scss">
	.img {
		width: 750rpx;
	}

	.data {

		.contact,
		.address {
			padding: 20rpx;
			border-bottom: 1px solid #E9E9E9;
		}
	}

	.map {
		width: 750rpx;
		height: 509rpx;
	}
</style>
