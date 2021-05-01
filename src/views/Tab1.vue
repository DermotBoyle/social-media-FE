<template>
	<ion-page>
		<ion-header>
			<ion-toolbar>
				<ion-title>Twitter Download</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content :fullscreen="true">
			<TwitterContainer name="Insert twitter URL" />
		</ion-content>
	</ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue";
import TwitterContainer from "@/components/twitter/twitter-container.vue";

export default {
	name: "Tab1",
	components: { TwitterContainer, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
};
</script>
