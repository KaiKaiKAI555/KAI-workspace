<template>
	<view>
		<view class="status_bar" style="background: linear-gradient(to left, #397a62 0%,#52b18d 105%);"></view>
		<view class="topBar">
			<view>
				<u-icon name="arrow-left" size="35" color="white" @click="toPage"></u-icon>
			</view>
			<view>
				<text class="text">瓶·《平步青云》·《入瓷三分》</text>
			</view>
			<view>
				<uniIcon type="heart" size="20" color="white" v-show="showUpheart" @click="likes"></uniIcon>
				<uniIcon type="heart-filled" size="20" color="#e25759" v-show="!showUpheart"></uniIcon>
			</view>
		</view>
		<u-tabs
		 :list="list" 
		 :is-scroll="false" 
		 :current="current" 
		 bar-width="100"
		 active-color="#397a62"
		 @change="change"></u-tabs>
		<view v-show="showUp" class="contentDetail" style="display: flex; flex-direction: column;">
			<view>
				<view style="display: flex; justify-content:center; font-size: 45rpx; margin-top: 20rpx;"><image src="@/static/icon/profess.png" mode="widthFix" style="width: 6%; align-self: center; margin-right: 10rpx; margin-top: 5rpx;"></image>专家讲解</view>
				<view style="display: flex; justify-content: center;"><u-line color="black" length="70%" hair-line="false" margin="10rpx"></u-line></view>
			</view>
			<view style="background-color: #397a62; border-radius: 20rpx; margin-top: 0rpx;margin: 10rpx; background: rgba(179, 194, 186, 0.6)">
				<view>
					<view style="display: flex; margin: 10rpx;">
						<image
						src="@/static/img/bottle21.jpg" 
						mode="widthFix" 
						style="width: 450%; border-radius: 15rpx; margin-right: 10rpx; margin-top: 20rpx;"></image>
						<view style="margin-top: 30rpx;">
							<view style="font-size: 35rpx; font-weight: bold; text-align: center; margin-bottom: 10rpx;">《平步青云》</view>
							<view style="margin: 0 10rpx; text-indent: 2em;">哥窑长颈瓶器型，天青釉色，露胎装饰带，书法线条如云雾缭绕，翰逸神超，浑朴流润，有绵里裹铁之妙。字中积釉，露胎的质朴无华与青釉的晶莹剔透交融，既显青瓷如玉之质，又呈书法素浊之韵。</view>
						</view>
					</view>
					<view style="display: flex; justify-content: center;"><image src="@/static/img/boader/bird2.png" mode="widthFix" style="width: 40%;"></image></view>
					<view style="display: flex; margin: 20rpx;">
						<view>
							<view style="font-size: 35rpx; font-weight: bold; text-align: center; margin-bottom: 10rpx;">《入瓷三分》</view>
							<view style="margin: 0 10rpx; text-indent: 2em;">取型源于传统梅瓶器形，此作使其造型线条更加流畅，简洁大气，满瓶而饰，书法的运气节奏与梅瓶造型节奏统一，一气呵成，干练有力。瓶的顶部与底部，装饰写意画云与山水，动静相宜，相伴成趣。</view>
						</view>
						<image src="@/static/img/bottle22.jpg" mode="widthFix" style="border-radius: 15rpx; width:400%;"></image>
					</view>
				</view>
			</view>
			<view>
				<view style="display: flex; justify-content:center; font-size: 45rpx; margin-top: 20rpx;"><image src="@/static/icon/look.png" mode="widthFix" style="width: 7%; align-self: center; margin-right: 10rpx; margin-top: 5rpx;"></image>青瓷风采</view>
				<view style="display: flex; justify-content: center;"><u-line color="black" length="70%" hair-line="false" margin="10rpx"></u-line></view>
			</view>
			<view style="background: rgba(179, 194, 186, 0.6); margin-top: 0rpx; margin: 10rpx; border-radius: 20rpx;">
				<view style="display: flex; justify-content: center;">
					<image src="@/static/img/bottle24.jpg" mode="widthFix" style="width: 95%; border-radius: 15rpx; margin-top: 20rpx;"></image>
				</view>
				<view style="display: flex; justify-content: space-between; margin: 20rpx;">
					<image src="@/static/img/bottle23.jpg" mode="widthFix" style="width: 48%; border-radius: 15rpx;"></image>
					<image src="@/static/img/bottle25.jpg" mode="widthFix" style="width: 50%; border-radius: 15rpx;"></image>
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
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						name: '图文详解'
					}, {
						name: '留言讨论'
					}],
					current: 0,
				showUp:true,
				showUpheart:true,
				commentList: []
			};
		},
		onLoad() {
			this.getComment();
		},
		methods:{
			likes(){
				uni.showToast({ title: '感谢您的喜爱' });
				this.showUpheart = !this.showUpheart
			},
			toPage(){
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			},
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
	.contentDetail{
		background-image: url('~@/static/img/styleBack.jpg');
		background-size: 100%;
		width: 100%;
		height: 3150rpx;
	}
</style>





