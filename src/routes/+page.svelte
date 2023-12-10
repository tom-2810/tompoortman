<script>
	import { SliceZone } from '@prismicio/svelte';
	import { Welcome } from '$lib/index.js';
	import { components } from '$lib/slices';

	export let data;
</script>

<div>

	<Welcome {data} />
	
	<SliceZone slices={data.slices} {components} />
</div>

<style>
	div {
		height: 400vh;
	}
</style>
