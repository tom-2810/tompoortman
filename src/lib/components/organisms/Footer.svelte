<script>
	import { Connect } from '$lib/index.js';
	export let data;
</script>

<footer>
	<Connect {data} />
</footer>

<style>
	footer {
		display: flex;
		justify-content: center;
		min-height: 100vh;
		background-color: #202020;
	}
</style>
