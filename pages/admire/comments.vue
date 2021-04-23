<template>
	<view class="content">
		<view class="status_bar" style="background: linear-gradient(to left, #397a62 0%,#52b18d 105%);"></view>
		<view class="topBanner" style="background: linear-gradient(to left, #397a62 0%,#52b18d 105%);">
			<view style="display: flex; padding: 10rpx;">
				<u-search :show-action="false" action-text="搜索" :animation="true" placeholder="搜索#标签#/关键字" :height="80"></u-search>
				<view style="display: flex; align-items: center;">
					<image src="../../static/icon/fabu.png" @click="toShare" mode="widthFix" style="width: 60rpx; padding: 0 20rpx; padding-right: 10rpx;"></image>
				</view>
			</view>
			<view style="display: flex;">
				<view>
					<image src="@/static/img/lastly.png" mode="widthFix" style="width: 220rpx;margin-top: 10rpx;"></image>
				</view>
				<view style="display: flex; flex-direction: column; margin-top: 20rpx;">
					<view style="display: flex;">
						<view background="#000000" style="margin: 10rpx; margin-left: 100rpx; border-radius: 15rpx; background: rgba(234, 234, 234, 0.6)">
							<view>#老物件#</view>
						</view>
						<view style="margin: 10rpx; margin-left: 25rpx; border-radius: 15rpx; background: rgba(234, 234, 234, 0.6)">
							<view>#花瓶#</view>
						</view>
						<view style="margin: 10rpx; margin-left: 25rpx; border-radius: 15rpx; background: rgba(234, 234, 234, 0.6)">
							<view>#洗#</view>
						</view>
					</view>
					<view style="display: flex;">
						<view style="margin: 10rpx; margin-left: 50rpx; border-radius: 15rpx; background: rgba(234, 234, 234, 0.6)">
							<view>#哥窑#</view>
						</view>
						<view style="margin: 10rpx; margin-left: 25rpx; border-radius: 15rpx; background: rgba(234, 234, 234, 0.6)">
							<view>#童年#</view>
						</view>
						<view style="margin: 10rpx; margin-left: 25rpx; border-radius: 15rpx; background: rgba(234, 234, 234, 0.6)">
							<view>#梅子青#</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<daily/>
		<u-back-top :scroll-top="scrollTop" top="300"></u-back-top>
		<u-divider bg-color="" border-color="#397a62" color="#397a62">到底了</u-divider>
	</view>
</template>

<script>
	import daily from "@/components/admire/daily.vue"
	export default {
		components:{
			daily
		},
		data() {
			return {
				scrollTop: 0
			};
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		methods:{
			toShare(){
				this.$u.route('components/share/share');
			}
		}
	}
</script>

<style lang="scss">
	.content{
		background-image: url('~@/static/img/styleBack.jpg');
		background-size: 100%;
		width: 100%;
		height: 3000rpx;
	}
</style>
