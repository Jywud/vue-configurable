<template>
	<div>
		Hoo default
		<button @click="addCount">Hoo-addCount</button>
	</div>
</template>
<script>
	export default {
		name: 'Hoo',
		methods: {
			addCount() {
				this.$store.dispatch("addCount");
			}
		}
	}
</script>