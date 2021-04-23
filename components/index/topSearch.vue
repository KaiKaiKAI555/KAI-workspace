<template>
	<view>
		<view class="searchWapper">
			<view class="searchView">
				<icon type="search" size="18"></icon>
				<text style="padding-left: 10upx;">搜索关键词</text>
			</view>
			<image class="img1" src="../static/icon/扫一扫.png" ></image>
			<image class="img2" src="../static/icon/签到.png" ></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.searchWapper{
		padding:20rpx;
		padding-right: 10rpx;
		background-color: #397a62;
		display: flex;
		justify-content: space-between;
		.searchView{
			background: #eff3f9;
			width: 100%;
			height: 80rpx;
			border-radius: 40rpx;
			font-size: 30rpx;
			color: #C0C0C0;
			display: flex;
			align-items: center;
			padding: 0 20rpx;
			box-sizing: border-box;
		}
		.img1{
			width: 50rpx;
			height: 45rpx;
			margin-top: 18rpx;
			margin-left: 20rpx;
		}
		.img2{
			width: 55rpx;
			height: 50rpx;
			margin-top: 15rpx;
			margin-left: 20rpx;
		}
	}
</style>
