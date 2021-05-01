<template>
	<div id="container">
		<strong>{{ name }}</strong>
		<ion-input
			class="url-input"
			placeholder="Enter URL"
			v-model="inputVal"
			v-on:keyup.enter="submitURL"
			v-on:submit="submitURL"
			value="inputVal"
		></ion-input>
	</div>
</template>

<script lang="ts">
import { IonInput } from "@ionic/vue";
import { callFetch } from "@/components/twitter/fetch";

export default {
	name: "TwitterContainer",
	components: { IonInput },
	props: {
		name: String
	},
	data() {
		return {
			inputVal: ""
		};
	},
	methods: {
		submitURL: async function({ target: { value } }: { target: HTMLInputElement }) {
			const tweetId: any = value
				?.split("/")
				?.pop()
				?.split("?")[0];
			const res = await callFetch(tweetId);
			console.log(res);
		}
	}
};
</script>

<style lang="scss" scoped>
#container {
	text-align: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	display: flex;
	align-items: center;
	flex-direction: column;

	.url-input {
		border: 1px white solid;
		width: 75%;
	}
}

#container strong {
	font-size: 20px;
	line-height: 26px;
}

#container p {
	font-size: 16px;
	line-height: 22px;
	color: #8c8c8c;
	margin: 0;
}

#container a {
	text-decoration: none;
}
</style>
