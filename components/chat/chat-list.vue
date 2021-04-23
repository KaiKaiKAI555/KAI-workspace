<template>
	<view class="chat-item">
		<view v-if="item.gstime" class="chat-time">{{item.gstime}}</view>
		<view class="chat-list" :class="{'chat-me':item.isme}">
			<image v-if="!item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
			<view class="chat-list-body">
				<!-- 文字 -->
				<text v-if="item.type=='text'">{{item.data}}</text>
				<!-- 图片 -->
				<image v-if="item.type=='img'" :src="item.data" mode="widthFix" lazy-load></image>
			</view>
			<image v-if="item.isme" :src="item.userpic" mode="widthFix" lazy-load></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		}
	}
</script>

<style lang="scss" scoped>
	.chat-list{
		padding: 20rpx 10rpx;
		display: flex;
	}
	.chat-list>image{
		width: 100rpx;
		height: 100rpx;
		border-radius: 100%;
		flex-shrink: 0;
	}
	.chat-list-body{
		position: relative;
		background: #f4f4f4;
		padding: 25rpx;
		margin-left: 20rpx;
		border-radius: 20rpx;
		margin-right: 90rpx;
		display: flex;
		align-items: center;
		
	}
	.chat-list-body:after{
		position: absolute;
		left: -30rpx;
		right: 0;
		top: 30rpx;
		content: '';
		width: 0;
		height: 0;
		border: 16rpx solid #f4f4f4;
		border-color: transparent #f4f4f4 transparent transparent;
	}
	.chat-me{
		justify-content: flex-end;
	}
	.chat-me .chat-list-body{
		margin-right: 20rpx;
		margin-left: 100rpx;
	}
	.chat-me .chat-list-body:after{
		left: auto;
		right: -30rpx;
		border-color: transparent transparent transparent #f4f4f4;
	}
	.chat-list-body>image{
		max-width: 150rpx;
		max-height: 200rpx;
	}
	.chat-time{
		display: flex;
		justify-content: center;
		padding: 50rpx 0;
		color: #a2a2a2;
		font-size: 24rpx;
	}
</style>
