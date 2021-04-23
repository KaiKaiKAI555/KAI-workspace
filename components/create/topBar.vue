<template>
	<view>
		<view class="topBar">
			<view>
				<text class="text">造 瓷</text>
			</view>
			<view>
				<uniIcon type="upload" size="20" color="white" @click="likes()"></uniIcon>
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
			likes:function(){
				uni.showToast({ title: 'share' });
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
			padding-left: 312rpx;
			font-size: 35rpx;
		}
	}
</style>
