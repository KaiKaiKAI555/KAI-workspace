<template>
	<view>
		<view class="talk" style="display: flex; background-color: #dddddd; height: 120upx; position: fixed; bottom: 0; width: 100%;">
			<view style="display: flex; align-items: center;">
				<u-input 
				v-model="text" 
				:type="type" 
				:border="border" 
				:height="height" 
				:placeholder="placeholder"
				:auto-height="autoHeight"
				style="border-radius: 15rpx; width: 500rpx; background-color: #ffffff; margin-left: 10rpx;"></u-input>
			</view>
			<view style="display: flex; align-items: center; margin: 0 15rpx;"><u-icon name="plus-circle" size="58"></u-icon></view>
			<view style="display: flex; align-items: center;">
				<u-button 
				:hair-line="false"
				type="success"
				ripple="true"
				@tap="submit"
				style="height: 60rpx; font-weight: bold;">发送</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "",
				type: 'textarea',
				border: true,
				height: 30,
				placeholder: '',
				autoHeight: true,
			};
		},
		methods:{
			submit(){
				this.$emit('submit',this.text);
				this.text="";
			}
		}
	}
</script>

<style lang="scss">

</style>
