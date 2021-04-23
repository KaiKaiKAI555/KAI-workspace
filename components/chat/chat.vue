<template>
	<view>
		<u-navbar back-icon-color="white" :back-icon-size="40" title="相遇·瓷情" :background="background" title-color="#ffffff" :border-bottom="true">
		</u-navbar>
		<scroll-view id="scrollview" scroll-y 
		:scroll-top="scrollTop" 
		:scroll-with-animation="true" 
		:style="{height: style.contentH+'px'}">
			<!--聊天列表-->
			<block v-for="(item,index) in list" :key="index">
				<chat-list :item="item" :index="index"></chat-list>
			</block>
		</scroll-view>
		<!--输入框-->
		<chat-bottom @submit="submit"></chat-bottom>
	</view>
</template>

<script>
	import chatBottom from '@/components/chat/chat-bottom.vue';
	import time from "../../components/chat/time.js";
	import chatList from "../../components/chat/chat-list.vue"
	export default {
		components:{
			chatBottom,
			chatList
		},
		data() {
			return {
				scrollTop:0,
				background:{ background: 'linear-gradient(to left, #397a62 0%,#52b18d 105%)' },
				style:{
					contentH:0,
					itemH:0,
				},
				list:[
					
				]
			};
		},
		onLoad() {
			this.getdata();
			this.initdata();
		},
		onReady() {
			this.pageToBottom();
		},
		methods:{
			//初始化参数
			initdata(){
				try {
				    const res = uni.getSystemInfoSync();
				    this.style.contentH = res.windowHeight - uni.upx2px(250);
				} catch (e) { }
			},
			pageToBottom(){
				let q=uni.createSelectorQuery();
				q.select('#scrollview').boundingClientRect();
				q.selectAll('.chat-item').boundingClientRect();
				q.exec((res)=>{
					res[1].forEach((ret)=>{
						this.style.itemH += ret.height;
					});
					if(this.style.itemH > this.style.contentH){
						this.scrollTop = this.style.itemH;
					}
				})
			},
			//getMessage
			getdata(){
				//从服务器获取数据
				let arr=[
					{
						isme:false,
						userpic:"../../static/img/face.jpg",
						type:"text",
						data:"hhh",
						time:"1595923796",
					},
					{
						isme:true,
						userpic:"../../static/img/logo36.png",
						type:"img",
						data:"../../static/img/tabBar/home-on.png",
						time:"1795925174",
					},
				];
				for (let i = 0; i < arr.length; i++) {
					arr[i].gstime=time.gettime.getChatTime(arr[i].time,i>0?arr[i-1].time:0);
				}
				this.list=arr;
			},
			submit(data){
				//构建数据
				let now=new Date().getTime();
				let obj={
					isme:true,
					userpic:"../../static/img/logo36.png",
					type:"text",
					data: data,
					time: now,
					gstime: time.gettime.getChatTime(now,this.list[this.list.length-1].time)
				};
				this.list.push(obj);
				this.pageToBottom();
			}
		}
	}
</script>

<style lang="scss">
	
</style>
