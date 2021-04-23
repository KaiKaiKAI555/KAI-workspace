<template>
	<view>
		<view class="topBar">
			<view>
				<u-icon name="arrow-left" size="35" color="white" @click="toPage"></u-icon>
			</view>
			<view>
				<text class="text">青瓷风采</text>
			</view>
			<view>
				<uniIcon type="heart" size="20" color="white" v-show="showUp" @click="likes"></uniIcon>
				<uniIcon type="heart-filled" size="20" color="#e25759" v-show="!showUp"></uniIcon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showUp:true
			};
		},
		methods:{
			likes(){
				uni.showToast({ title: '感谢您的喜爱' });
				this.showUp = !this.showUp
			},
			toPage(){
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			}
		}
	}
</script>

<style lang="scss">
	.topBar{
		padding:20rpx;
		background: linear-gradient(to left, #397a62 0%,#52b18d 105%);
		display: flex;
		justify-content: space-between;
		.text{
			color: white;
			word-spacing: 20rpx;
			padding-left: 25rpx;
			font-size: 35rpx;
		}
	}
</style>
