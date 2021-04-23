<template>
	<view style="display: flex; flex-direction: column;">
		<view>
			<u-steps :list="numList" active-color="#397a62" mode="number"></u-steps>
		</view>
		<view class="videoBar">
			<video 
				class="vid2"
				src="@/static/video/2.mp4"
				objectFit="fill"
				autoplay="true"
				show-fullscreen-btn="false"
			></video>
		</view>
		<view>
			<view class="step1" style="display: flex; background: linear-gradient(to right, #407a7a 0%,#6bcaca 105%); border-radius: 20rpx; margin: 20rpx;">
				<view style="align-self: center;">
					<image 
					src="@/static/img/step1.png"
					mode="widthFix"
					style="width: 200rpx; margin-left: 10rpx;"
					></image>
				</view>
				<view style="margin: 20rpx; color: white; ">
					<view style="background: rgba(234, 234, 234, 0.6); border-radius: 15rpx; font-size: 30rpx; width: 190rpx; color: #ffffff;">
						<view><u-icon name="star-fill" size="30" color="#ffffff" style="padding-right: 10rpx;"></u-icon>原料加工：</view>
					</view>
					<view style="font-size: 25rpx;">瓷土经水碓舂细、淘洗，除去杂质，沉淀后制成砖状的泥块。然后再用水调和泥块，去掉渣质，反复翻扑或敲打踏练，把泥团中的空气挤压出来，使泥中的水分均匀、组织细密，以改善胎泥的成形性能。</view>
				</view>
			</view>
			<view class="step2" style="display: flex; background: linear-gradient(to left, #449375 0%,#60cfa5 105%); border-radius: 20rpx; margin: 20rpx;">
				<view style="align-self: center;">
					<image 
					src="@/static/img/step2.png"
					mode="widthFix"
					style="width: 200rpx; margin-left: 10rpx;"
					></image>
				</view>
				<view style="margin: 20rpx; color: white; ">
					<view style="background: rgba(234, 234, 234, 0.6); border-radius: 15rpx; font-size: 30rpx; width: 130rpx; color: #ffffff;">
						<view><u-icon name="star-fill" size="30" color="#ffffff" style="padding-right: 10rpx;"></u-icon>成型：</view>
					</view>
					<view style="font-size: 25rpx;">手工拉坯成型。将练好的胎泥置于辘轳车的转盘中心，随手法的屈伸收放拉制出坯体的大致模样。</view>
				</view>
			</view>
			<view class="step3" style="display: flex; background: linear-gradient(to left, #559043 0%,#7ace60 105%); border-radius: 20rpx; margin: 20rpx;">
				<view style="align-self: center;">
					<image 
					src="@/static/img/step3.png"
					mode="widthFix"
					style="width: 200rpx; margin-left: 10rpx;"
					></image>
				</view>
				<view style="margin: 20rpx; color: white; ">
					<view style="background: rgba(234, 234, 234, 0.6); border-radius: 15rpx; font-size: 30rpx; width: 130rpx; color: #ffffff;">
						<view><u-icon name="star-fill" size="30" color="#ffffff" style="padding-right: 10rpx;"></u-icon>修坯：</view>
					</view>
					<view style="font-size: 25rpx;">对已干燥（或半干）的坯体，进行外形的修平、磨光、挖底、钻眼等精修工作。分干修和湿修两种。前者因干燥后的坯体含水分低，修坯时不易变形，但粉尘较大。后者坯体水分含量较高，修坯时粉尘较小，但掌握不好，坯体容易变形。</view>
				</view>
			</view>
			<view class="step4" style="display: flex; background: linear-gradient(to left, #c58300 0%,#ffd070 105%); border-radius: 20rpx; margin: 20rpx;">
				<view style="align-self: center;">
					<image 
					src="@/static/img/step4.png"
					mode="widthFix"
					style="width: 200rpx; margin-left: 10rpx;"
					></image>
				</view>
				<view style="margin: 20rpx; color: white; ">
					<view style="background: rgba(234, 234, 234, 0.6); border-radius: 15rpx; font-size: 30rpx; width: 130rpx; color: #ffffff;">
						<view><u-icon name="star-fill" size="30" color="#ffffff" style="padding-right: 10rpx;"></u-icon>装饰：</view>
					</view>
					<view style="font-size: 25rpx;">这是美化瓷器的重要工序，以增强器物的审美效果。常见的装饰技法有印花、刻花、划花、镂空、贴花、剔花、等。装饰均在施釉前进行。而印花则是在坯体半干湿时进行。</view>
				</view>
			</view>
			<view class="step5" style="display: flex; background: linear-gradient(to left, #dd5d4c 0%,#ffa886 105%); border-radius: 20rpx; margin: 20rpx;">
				<view style="align-self: center;">
					<image 
					src="@/static/img/step5.png"
					mode="widthFix"
					style="width: 200rpx; margin-left: 10rpx;"
					></image>
				</view>
				<view style="margin: 20rpx; color: white; ">
					<view style="background: rgba(234, 234, 234, 0.6); border-radius: 15rpx; font-size: 30rpx; width: 130rpx; color: #ffffff;">
						<view><u-icon name="star-fill" size="30" color="#ffffff" style="padding-right: 10rpx;"></u-icon>烧制：</view>
					</view>
					<view style="font-size: 25rpx;">烧窑是陶瓷制作的最后一道工序。将陶瓷坯件装入窑炉中焙烧，时间约一昼夜至三昼夜，温度在1100-1300℃左右。焙烧时，陶瓷器的胎、釉发生一系列的物理变化和化学反应，使瓷器获得所需要的强度、光泽和其他性能。</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numList: [{
					name: '新手入门'
				}, {
					name: '原料加工',
				}, {
					name: '成型'
				}, {
					name: '修坯',
				}, {
					name: '装饰'
				}, {
					name: '烧制'
				}, ],
			};
		}
	}
</script>

<style lang="scss">
	.videoBar{
		display: flex;
		justify-content: center;
		padding: 20rpx;
		.vid2{
			width: 100%;
			border-radius: 20rpx;
		}
	}
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
