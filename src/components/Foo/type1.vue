<template>
	<div>
		Foo type1
		<button @click="addCount">Foo-addCount</button>
	</div>
</template>
<script>
	export default {
		name: 'Foo',
		methods: {
			addCount() {
				this.$store.dispatch("addCount");
			}
		}
	}
</script>