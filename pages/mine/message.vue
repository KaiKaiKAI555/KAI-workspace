<template>
	<view class="content">
		<u-navbar back-icon-color="white" :back-icon-size="40" title="消息与通知 (3)" :background="{ background: 'linear-gradient(to left, #397a62 0%,#52b18d 105%)'  }" title-color="#ffffff" :border-bottom="false">
			<view class="slot-wrap" slot="right">
				<u-icon name="plus-circle" size="45" color="white" style="margin-right: 20rpx;" @click="show=true"></u-icon>
			</view>		
		</u-navbar>
		<view>
			<u-action-sheet :list="list1" v-model="show" @click="clickFun" border-radius="20"></u-action-sheet>
		</view>
		<view>
			<view style="margin: 10rpx;">
				<u-search placeholder="搜索" v-model="keyword" :show-action="false" shape="square" :height="80"></u-search>
			</view>
			<view>
				<u-swipe-action :show="item.show" :index="index" 
					v-for="(item, index) in list" :key="item.id" 
					@click="click" @open="open"
					:options="options"
					style="margin: 10rpx; height: 160rpx;"
				>
					<view class="item u-border-bottom" style="background: rgba(223, 223, 223, 0.6); border-radius: 15rpx;" @click="openChat(item)">
						<view>
							<image mode="aspectFill" :src="item.images" />
							<u-badge type="error" is-dot="true" absolute="true" style="margin-right: 565rpx;"></u-badge>
						</view>
						<!-- 此层wrap在此为必写的，否则可能会出现标题定位错误 -->
						<view>
							<view class="title-wrap">
								<text 
								class="title u-line-2" 
								style="color: #000000;"
								>{{ item.title }}</text>
							</view>
							<view>
								<text style="color: #717171; font-size: 25rpx; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; margin-top: 10rpx;">{{item.content}}</text>
							</view>
						</view>
					</view>
				</u-swipe-action>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			list: [
				{
					id: 1,
					userId:3,
					title: '瓷情好友1',
					content:'很高兴认识你！',
					images: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2013128738,1744245349&fm=26&gp=0.jpg',
					show: false
				},
				{
					id: 2,
					userId:4,
					title: '系统消息',
					content:'瓷情平台欢迎您的到来！有任何疑问可以联系客服。',
					images:require('@/static/img/logo36.png'),
					show: false
				},
				{
					id: 3,
					userId:2,
					title: '瓷情好友2',
					content:'快来看看我做的龙泉青瓷！',
					images: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2213620333,4126941077&fm=26&gp=0.jpg',
					show: false,
				}
			],
			list1: [{
				text: '添加朋友',
				color: '#397a62',
				fontSize: 28
			}, {
				text: '扫一扫',
				color: '#397a62',
				fontSize: 28 
			}],
			show: false,
			disabled: false,
			btnWidth: 180,
			show: false,
			options: [
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			]
		}
	},
	methods: {
		toPage(){
			uni.navigateBack({
			    delta: 1,
			    animationType: 'pop-out',
			    animationDuration: 200
			});
		},
		click(index, index1) {
			this.list.splice(index, 1);
			this.$u.toast(`删除成功`);
		},
		// 如果打开一个的时候，不需要关闭其他，则无需实现本方法
		open(index) {
			// 先将正在被操作的swipeAction标记为打开状态，否则由于props的特性限制，
			// 原本为'false'，再次设置为'false'会无效
			this.list[index].show = true;
			this.list.map((val, idx) => {
				if(index != idx) this.list[idx].show = false;
			})
		},
		clickFun(index) {
			console.log(`点击了第${index + 1}项，内容为：${this.list1[index].text}`)
		},
		openChat({ id, name, images ,userId }) {
			this.$u.route({
				url: 'components/chat/chat',
				params: { messageId: id,fromUserId:userId}
			});
		},
	}
};
</script>

<style lang="scss">
	.slot-wrap {
			display: flex;
			align-items: center;
	}
	.item {
		display: flex;
		padding: 20rpx;
	}
	
	image {
		width: 120rpx;
		flex: 0 0 120rpx;
		height: 120rpx;
		margin-right: 20rpx;
		border-radius: 15rpx;
	}
	
	.title {
		text-align: left;
		font-size: 30rpx;
		margin-top: 17rpx;
		color: $u-content-color;
	}
</style>
