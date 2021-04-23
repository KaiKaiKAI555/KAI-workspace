<template>
	<view class="listPane">
		<view class="paneHeader">
			<view class="title"><uniIcon type="map-filled" size="15"></uniIcon>趣味科普</view>
			<view class="more">查看全部<uniIcon type="arrowright" size="15"></uniIcon></view>
		</view>
		<view class="paneBody">
			<view class="goodsItem">
				<view class="goods">
					<view class="imageWrapper">
						<image 
						src="@/static/img/1know.jpg"
						mode="widthFix"
						style="width: 100%; border-radius: 15rpx;"
						></image>
					</view>
				</view>
			</view>
			<view class="goodsItem">
				<view class="goods">
					<view class="imageWrapper">
						<image 
						src="@/static/img/2know.jpg"
						mode="widthFix"
						style="width: 100%; border-radius: 15rpx;"
						></image>
					</view>
				</view>
			</view>
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
		padding: 0 20upx;
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
		.goodsItem{
			width:calc(100%/2);
			padding-right: 15upx;
			box-sizing: border-box;
			.goods{
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
