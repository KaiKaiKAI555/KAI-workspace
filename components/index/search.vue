<template>
	<view>
		<view class="searchWapper">
			<view class="input-box">
				<input
					style="margin-left: 30rpx;"
					placeholder="默认关键字"
					placeholder-style="color:#c0c0c0;"
					@tap="toSearch()"
				/>
				<u-icon name="search" color="black" size="30" style="position: absolute;margin-left: 10rpx;"></u-icon>
			</view>
			<image class="img1" src="@/static/icon/scan.png" @click="scanUse()"></image>
			<image class="img2" src="@/static/icon/data.png" @click="dataUse()"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			toSearch() {
				uni.showToast({ title: '搜索功能待完善' });
			},
			scanUse(){
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			dataUse(){
				uni.showToast({ title: '签到功能待完善' });
			}
		}
	}
</script>

<style lang="scss">
	.searchWapper{
		padding:20rpx;
		padding-right: 10rpx;
		display: flex;
		justify-content: space-between;
		.input-box {
			width: 100%;
			height: 60upx;
			background-color: #f5f5f5;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;
			input {
				padding-left: 20upx;
				height: 28upx;
				font-size: 28upx;
			}
		}
		.img1{
			width: 50rpx;
			height: 45rpx;
			margin-top: 8rpx;
			margin-left: 20rpx;
		}
		.img2{
			width: 55rpx;
			height: 50rpx;
			margin-top: 6rpx;
			margin-left: 20rpx;
		}
	}
</style>
