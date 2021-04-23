<template>
	<view class="listPane">
		<view class="paneBody">
			<view class="goodsItem">
				<view class="goods">
					<view class="imageWrapper">
						<image 
						src="@/static/img/act2.png"
						mode="widthFix"
						style="width: 200rpx;display: flex; margin-top: 35rpx;margin-left: 35rpx;"
						></image>
					</view>
				</view>
			</view>
			<view style="margin-top: 20rpx;margin-right: 75rpx;color: white;">
				<view style="font-size: 35rpx;background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%); border-radius: 15rpx;width: 200rpx;color: #000000;">
					<uniIcon type="flag-filled" size="15" color="#397a62"></uniIcon>
					精彩活动：
				</view>
				<view style="font-size: 40rpx;">龙泉青瓷DIY竞赛</view>
				<view style="font-size: 20rpx;">快来用巧思创造你自己的龙泉青瓷吧！</view>
			</view>
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

<style lang="scss" scoped>
	.listPane{
		border-radius: 30upx;
		margin: 0 20rpx;
	}
	.paneHeader{
		line-height: 80upx;
		display: flex;
		justify-content: space-between;
		padding: 0 40upx;
		.title{
			font-size: 35upx;
			color: black;
		}
		.more{
			font-size: 25upx;
			color: #808080;
		}
		
	}
	.paneBody{
		padding-left: 15rpx;
		display: flex;
		flex-direction: row;
		padding-bottom: 30upx;
		background: linear-gradient(to left, #397a62 0%,#52b18d 105%);
		border-radius: 100rpx;
		.goodsItem{
			width:calc(100%/2);
			padding-right: 15upx;
			box-sizing: border-box;
			.goods{
				display: flex;
				flex-direction: row;
			}
		}
	}
</style>
