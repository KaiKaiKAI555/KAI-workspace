<template>
	<view>
		<view class="feedback-body feedback-uploader">
		    <view class="uni-uploader">
		        <view class="uni-uploader-head">
		            <view class="uni-uploader-title">选择要分享的图片</view>
		            <view class="uni-uploader-info">{{imageList.length}}/9</view>
		        </view>
		        <view class="uni-uploader-body">
		            <view class="uni-uploader__files">
		                <block v-for="(image,index) in imageList" :key="index">
		                    <view class="uni-uploader__file" style="position: relative;">
		                        <image class="uni-uploader__img" :src="image" @tap="previewImage"></image>
		                        <view class="close-view" @click="close(index)">x</view>
		                    </view>
		                </block>
		                <view class="uni-uploader__input-box" v-show="imageList.length < 9">
		                	<view class="uni-uploader__input" @tap="chooseImg"></view>
		                </view>
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
				imageList: [],
			};
		},
		methods:{
			close(e){
			    this.imageList.splice(e,1);
				this.$emit('upload',this.imageList);
			},
			chooseImg() { //选择图片
			    uni.chooseImage({
			        sourceType: ["camera", "album"],
			        sizeType: "compressed",
			        count: 9 - this.imageList.length,
			        success: (res) => {
			            this.imageList = this.imageList.concat(res.tempFilePaths);
						this.$emit('upload',this.imageList);
			        }
			    })
			},
			previewImage() { //预览图片
			    uni.previewImage({
			        urls: this.imageList
			    });
			}
		}
	}
</script>

<style lang="scss">
	.close-view{
	    text-align: center;line-height:14px;height: 16px;width: 16px;border-radius: 50%;background: #FF5053;color: #FFFFFF;position: absolute;top: -6px;right: -4px;font-size: 12px;
	}
	/* 上传 */
	.uni-uploader {
		flex: 1;
		flex-direction: column;
	}
	.uni-uploader-head {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.uni-uploader-info {
		color: #B2B2B2;
	}
	.uni-uploader-body {
		margin-top: 16upx;
	}
	.uni-uploader__files {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.uni-uploader__file {
		margin: 10upx;
		width: 210upx;
		height: 210upx;
	}
	.uni-uploader__img {
		display: block;
		width: 210upx;
		height: 210upx;
	}
	.uni-uploader__input-box {
		position: relative;
		margin:10upx;
		width: 208upx;
		height: 208upx;
		border: 2upx solid #D9D9D9;
	}
	.uni-uploader__input-box:before,
	.uni-uploader__input-box:after {
		content: " ";
		position: absolute;
		top: 50%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		background-color: #D9D9D9;
	}
	.uni-uploader__input-box:before {
		width: 4upx;
		height: 79upx;
	}
	.uni-uploader__input-box:after {
		width: 79upx;
		height: 4upx;
	}
	.uni-uploader__input-box:active {
		border-color: #999999;
	}
	.uni-uploader__input-box:active:before,
	.uni-uploader__input-box:active:after {
		background-color: #999999;
	}
	.uni-uploader__input {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
	}
	.feedback-uploader {
		padding: 22upx 20upx;
	}
</style>
