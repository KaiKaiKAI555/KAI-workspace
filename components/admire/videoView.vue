<template>
	<view>
		<view class="videoBar">
			<video 
				class="vid"
				src="@/static/video/1.mp4"
				objectFit="fill"
				autoplay="true"
				show-fullscreen-btn="false"
			></video>
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
	.videoBar{
		display: flex;
		justify-content: center;
		padding: 20rpx;
		.vid{
			width: 150%;
			border-radius: 15rpx;
		}
	}
</style>
