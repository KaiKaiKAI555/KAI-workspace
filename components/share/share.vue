<template>
	<view>
		<!-- 导航栏 -->
		<uni-nav-bar :statusBar="true" rightText="发布" left-icon="arrowleft"  @clickLeft="back" @clickRight="submit">
			<view style="display: flex; padding-left: 155rpx; font-size: 27rpx;" @tap="changeLook">
				<view>{{yinsi}}</view>
				<view><u-icon name="arrow-down"></u-icon></view>
			</view>
		</uni-nav-bar>
		<!-- 多行输入框 -->
		<view>
			<textarea v-model="text" placeholder="说些什么吧~" style="border: 1rpx solid #EEEEEE; width: 100%; padding: 10rpx;"></textarea>
		</view>
		<!-- 上传图片 -->
		<upload-images @upload="upload"></upload-images>
	</view>
</template>

<script>
	let changeLook=['所有人可见', '仅自己可见'];
	import uniNavBar from "../../components/uni-nav-bar/uni-nav-bar.vue";
	import uploadImages from "../../components/share/upload-images.vue";
	export default {
		components:{
			uniNavBar,
			uploadImages
		},
		data() {
			return {
				yinsi:"所有人可见",
				text:"",
				imageList:[]
			};
		},
		methods:{
			//back
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			//发布
			submit(){
				console.log("成功发布")
			},
			//隐私
			changeLook(){
				uni.showActionSheet({
				    itemList: changeLook,
				    success: (res)=> {
						this.yinsi=changeLook[res.tapIndex];
				    }
				});
			},
			upload(arr){
				this.imageList = arr;
			}
		}
	}
</script>

<style lang="scss">

</style>
