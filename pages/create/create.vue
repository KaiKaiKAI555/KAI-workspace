<template>
	<view>
		<view class="status_bar" style="background: linear-gradient(to left, #397a62 0%,#52b18d 105%);"></view>
		<topBar/>
		<view style="padding-top: 10rpx;">
			<u-notice-bar mode="horizontal" :list="list" border-radius="50" type="success"></u-notice-bar>
		</view>
		<steps/>
	</view>
</template>

<script>
	import topBar from "@/components/create/topBar.vue"
	import steps from "@/components/create/steps.vue"
	export default {
		components:{
			topBar,
			steps
		},
		data() {
			return {
				list: [
					'瓷情平台欢迎您！这里致力为您打造全新的赏瓷、购瓷体验',
					'体验中有任何问题可以向客服反馈',
					'感谢您的关注！'
				]
			}
		}
	}
</script>

<style lang="scss">

</style>
