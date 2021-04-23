<template>
	<view>
		<view class="status_bar" style="background: linear-gradient(to left, #397a62 0%,#52b18d 105%);"></view>
		<topBar/>
		<videoView/>
		<u-tabs
		 :list="list" 
		 :is-scroll="false" 
		 :current="current" 
		 bar-width="100"
		 active-color="#397a62"
		 @change="change"></u-tabs>
		 <view>
			 <view v-show="showUp">
				 <view class="line1">
				 	<view>
				 		<image class="img1" src="https://img.alicdn.com/bao/uploaded/i2/4080454300/O1CN011hdRYgFhSwk2hRc_!!0-item_pic.jpg" mode="aspectFill"></image>
				 	</view>
				 	<view class="text1">
				 		<text>
				 			龙泉窑是中国瓷业史上最后形成的一个青瓷名窑，其文化内涵丰富，生产规模极为壮观，是南北两大瓷业文化交流和融合的典范，是官民瓷业相互关联、相互激荡的结果，是中国青瓷工艺发展的历史总成。
				 		</text>
				 	</view>
				 </view>
				 <view class="line2">
				 	<view>
				 		<image class="img2" src="https://img.alicdn.com/bao/uploaded/i1/2849963173/O1CN01rR9ftw1ZJHGjQyUyn_!!0-item_pic.jpg" mode="aspectFill"></image>
				 	</view>
				 	<view class="text2">
				 		<text>胎质较细，器型规整端巧，胎壁厚薄均匀，底部旋修光滑，圈足高而规整，釉面光洁，透着淡淡的青色，釉层稍薄。产品除碗、盘、壶、瓶、罐等日用品外，尚有专供随葬的冥器多管瓶及长颈盘口壶等。</text>
				 	</view>
				 </view>
				 <view style="display: flex; justify-content: center;">
				 	<image 
				 	src="@/static/img/CQlogo.png" 
				 	mode="widthFix" 
				 	style="width: 30%; align-self: center;"></image>
				 </view>
			 </view>
			 <view v-show="!showUp">
				 <view class="comment" v-for="(res, index) in commentList" :key="res.id">
				 	<view class="left"><image :src="res.url" mode="aspectFill"></image></view>
				 	<view class="right">
				 		<view class="top">
				 			<view class="name">{{ res.name }}</view>
				 			<view class="like" :class="{ highlight: res.isLike }">
				 				<view class="num">{{ res.likeNum }}</view>
				 				<u-icon v-if="!res.isLike" name="thumb-up" :size="30" color="#9a9a9a" @click="getLike(index)"></u-icon>
				 				<u-icon v-if="res.isLike" name="thumb-up-fill" :size="30" @click="getLike(index)"></u-icon>
				 			</view>
				 		</view>
				 		<view class="content">{{ res.contentText }}</view>
				 		<view class="reply-box">
				 			<view class="item" v-for="(item, index) in res.replyList" :key="item.index">
				 				<view class="username">{{ item.name }}</view>
				 				<view class="text">{{ item.contentStr }}</view>
				 			</view>
				 			<view class="all-reply" @tap="toAllReply" v-if="res.replyList != undefined">
				 				共{{ res.allReply }}条回复
				 				<u-icon class="more" name="arrow-right" :size="26"></u-icon>
				 			</view>
				 		</view>
				 		<view class="bottom">
				 			{{ res.date }}
				 			<view class="reply">回复</view>
				 		</view>
				 	</view>
				 </view>
			 </view>
		 </view>
	</view>
</template>

<script>
	import topBar from "../../components/admire/topBar.vue"
	import videoView from "@/components/admire/videoView.vue"
	export default {
		components:{
			topBar,
			videoView
		},
		data() {
			return {
				list: [{
						name: '图文详解'
					}, {
						name: '留言讨论'
					}],
					current: 0,
				showUp:true,
				commentList: []
			}
		},
		onLoad() {
			this.getComment();
		},
		methods:{
			change(index) {
				this.current = index;
				this.showUp = !this.showUp
			},
			getLike(index) {
				this.commentList[index].isLike = !this.commentList[index].isLike;
				if (this.commentList[index].isLike == true) {
					this.commentList[index].likeNum++;
				} else {
					this.commentList[index].likeNum--;
				}
			},
			// 评论列表
			getComment() {
				this.commentList = [
					{
						id: 1,
						name: '瓷情用户1',
						date: '07-17 18:58',
						contentText: '我爱龙泉青瓷，它太神奇了！',
						url: 'http://img1.imgtn.bdimg.com/it/u=2854192946,1245225515&fm=26&gp=0.jpg',
						allReply: 12,
						likeNum: 33,
						isLike: false,
						replyList: [
							{
								name: '2020要开心',
								contentStr: '我也爱它！'
							},
							{
								name: '心想事成',
								contentStr: '我也是一样的想法。'
							}
						]
					},
					{
						id: 2,
						name: '瓷情用户2',
						date: '07-17 13:58',
						contentText: '我也想亲手制作龙泉青瓷~',
						allReply: 0,
						likeNum: 11,
						isLike: true,
						url: 'https://cdn.uviewui.com/uview/template/niannian.jpg',
					},
					{
						id: 3,
						name: '瓷情用户3',
						date: '07-17 13:58',
						contentText: '看了这段介绍感觉自己受益匪浅啊。龙泉青瓷真有意思。',
						allReply: 0,
						likeNum: 155,
						isLike: true,
						allReply: 2,
						url: 'http://img1.imgtn.bdimg.com/it/u=1097733275,1281046490&fm=26&gp=0.jpg',
						replyList: [
							{
								name: 'Loves',
								contentStr: '同感...'
							},
							{
								name: '豆包',
								contentStr: '我想自己买一个放家里，一定很好看！'
							}
						]
					},
					{
						id: 4,
						name: '瓷情用户#',
						date: '07-17 10:22',
						contentText: '爱上龙泉青瓷了',
						url: 'http://img5.imgtn.bdimg.com/it/u=2988194555,259297122&fm=26&gp=0.jpg',
						allReply: 0,
						likeNum: 50,
						isLike: false
					}
				];
			}
		}
	}
</script>

<style lang="scss">
	.line1{
		display: flex;
		justify-content: space-between;
		background-color: #ffffff;
		margin: 10rpx;
		border-radius: 15rpx;
		.img1{
			width: 300rpx;
			height: 300rpx;
			padding: 20rpx;
			padding-left: 35rpx;
		}
		.text1{
			text-indent: 2em;
			padding-top: 20rpx;
			padding-left: 20rpx;
		}
	}
	.line2{
		display: flex;
		justify-content: space-between;
		background-color: #ffffff;
		margin: 10rpx;
		border-radius: 15rpx;
		.img2{
			width: 300rpx;
			height: 300rpx;
			padding: 20rpx;
			padding-left: 35rpx;
		}
		.text2{
			text-indent: 2em;
			padding-top: 20rpx;
			padding-left: 20rpx;
		}
	}
	.comment {
		display: flex;
		padding: 30rpx;
		.left {
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 50%;
				background-color: #f2f2f2;
			}
		}
		.right {
			flex: 1;
			padding-left: 20rpx;
			font-size: 30rpx;
			.top {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-bottom: 10rpx;
				.name {
					color: #5677fc;
				}
				.like {
					display: flex;
					align-items: center;
					color: #9a9a9a;
					font-size: 26rpx;
					.num {
						margin-right: 4rpx;
						color: #9a9a9a;
					}
				}
				.highlight {
					color: #5677fc;
					.num {
						color: #5677fc;
					}
				}
			}
			.content {
				margin-bottom: 10rpx;
			}
			.reply-box {
				background-color: rgb(242, 242, 242);
				border-radius: 12rpx;
				.item {
					padding: 20rpx;
					border-bottom: solid 2rpx $u-border-color;
					.username {
						font-size: 24rpx;
						color: #999999;
					}
				}
				.all-reply {
					padding: 20rpx;
					display: flex;
					color: #5677fc;
					align-items: center;
					.more {
						margin-left: 6rpx;
					}
				}
			}
			.bottom {
				margin-top: 20rpx;
				display: flex;
				font-size: 24rpx;
				color: #9a9a9a;
				.reply {
					color: #5677fc;
					margin-left: 10rpx;
				}
			}
		}
	}
</style>
