<template>
	<view class="content">
		<view class="status_bar" style="background: linear-gradient(to left, #397a62 0%,#52b18d 105%);"></view>
		<search/>
		<banner/>
		<wordsBar/>
		<activity/>
		<knowledgeBar/>
	</view>
</template>

<script>
	import search from "@/components/index/search.vue"
	import banner from "../../components/index/banner.vue"
	import wordsBar from "../../components/index/wordsBar.vue"
	import knowledgeBar from "../../components/index/knowledgeBar.vue"
	import activity from "@/components/index/activity.vue"
	export default {
		components:{
			search,
			banner,
			wordsBar,
			activity,
			knowledgeBar
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.content{
		background-image: url('~@/static/img/bigBack.jpg');
		background-size: 100%;
		width: 100%;
		height: 1500rpx;
	}
</style>
