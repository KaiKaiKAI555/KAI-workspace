<template>
	<view>
		<u-navbar :is-back="false" title="　" :border-bottom="false" :background="background">
			<view>
				<u-icon name="camera-fill" color="#ffffff" size="43" style="margin-left: 680rpx;"></u-icon>
			</view>
		</u-navbar>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30">
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140" style="margin: 5rpx;margin-right: 10rpx;"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20" style="color: #FFFFFF;">小瓷人队</view>
				<view class="u-font-14 u-tips-color" style="color: #FFFFFF;">ID:xiaociren</view>
			</view>
			<view class="vip" style="border-radius: 30rpx;">
				<view style="color: #397a62;"><u-icon name="star-fill" color="#397a62"></u-icon>金牌会员</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#ffffff" size="28"></u-icon>
			</view>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="chat" title="通知和消息" @click="toMessage()"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="star" title="我的积分"></u-cell-item>
				<u-cell-item icon="shopping-cart" title="商城" @click="toMall()"></u-cell-item>
				<u-cell-item icon="gift" title="寻宝"></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="setting" title="设置"></u-cell-item>
				<u-cell-item icon="scan" title="扫一扫" @click="scanUse()"></u-cell-item>
			</u-cell-group>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'https://img13.360buyimg.com/n7/jfs/t26659/192/906059439/266583/50738c83/5bbc5726N42648273.jpg',
				show:true,
				background: {
					backgroundImage: 'linear-gradient(to left, #397a62 0%,#52b18d 105%)',
				}
			}
		},
		onLoad() {
			
		},
		methods: {
			scanUse(){
				uni.scanCode({
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			},
			toMall(){
				this.$u.route('pages/mine/mall');
			},
			toMessage(){
				this.$u.route('pages/mine/message');
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #ededed;
	}
	
	.camera{
		width: 54px;
		height: 44px;
		
		&:active{
			background-color: #ededed;
		}
	}
	.user-box{
		background-color: #fff;
	}
	.u-flex{
		background: linear-gradient(to left, #397a62 0%,#52b18d 105%);
	}
	.vip{
		display: flex;
		line-height: 50rpx;
		width: 160rpx;
		justify-content: center;
		background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%);
	}
</style>

