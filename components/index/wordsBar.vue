<template>
	<view class="listPane">
		<view class="paneHeader">
			<u-section title="哥窑探索" sub-title="" color="#000000" font-size="35"></u-section>
		</view>
		<view style="width: 600rpx;">
			<u-tabs-swiper
			:list="list" 
			:is-scroll="false" 
			:current="current" 
			@change="change"
			 bg-color=""
			 font-size="23"
			 bar-height="8"
			 bar-width="60"
			 inactive-color="#a2a2a2"
			active-color="#397a62"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" style="height: 230rpx;">
			<swiper-item class="sp1">
				<view class="paneBody">
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/cha1.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx;"
								@click="openCha1"
								></image>
							</view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/cha2.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx"
								@click="openCha2"
								></image>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item class="sp2">
				<view class="paneBody">
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/plate1.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx;"
								@click="openPlate1"
								></image>
							</view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/plate2.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx"
								@click="openPlate2"
								></image>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item class="sp3">
				<view class="paneBody">
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/xi.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx;"
								@click="openPen1"
								></image>
							</view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/pen2.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx"
								@click="openPen2"
								></image>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
			<swiper-item class="sp4">
				<view class="paneBody">
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/bottle1.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx;"
								@click="openBottle1"
								></image>
							</view>
						</view>
					</view>
					<view class="goodsItem">
						<view class="goods">
							<view class="imageWrapper">
								<image 
								src="@/static/img/bottle2.jpg"
								mode="widthFix"
								style="width: 100%; border-radius: 15rpx"
								@click="openBottle2"
								></image>
							</view>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '茶具孕茶香'
					}, {
						name: '碗盘承烟火'
					}, {
						name: '书具彰气韵'
					}, {
						name: '瓶中绽点红'
					}],
					current: 0,
					swiperCurrent: 0
			};
		},
		methods: {
			change(index) {
				this.current = index;
				this.swiperCurrent = index;
			},
			openCha1(){
				this.$u.route('components/index/tea1');
			},
			openCha2(){
				this.$u.route('components/index/tea2');
			},
			openPlate1(){
				this.$u.route('components/index/plate1');
			},
			openPlate2(){
				this.$u.route('components/index/plate2');
			},
			openPen1(){
				this.$u.route('components/index/pen1');
			},
			openPen2(){
				this.$u.route('components/index/pen2');
			},
			openBottle1(){
				this.$u.route('components/index/bottle1');
			},
			openBottle2(){
				this.$u.route('components/index/bottle2');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.listPane{
		border-radius: 30upx;
		margin: 0 20rpx;
		margin-bottom: 0;
	}
	.paneHeader{
		line-height: 20upx;
		display: flex;
		justify-content: space-between;
		padding: 0 20upx;
		padding-top: 30rpx;
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
