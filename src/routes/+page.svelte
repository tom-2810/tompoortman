<script>
	import { SliceZone } from '@prismicio/svelte';
	import { ConnectBtn, HamburgerMenu } from '$lib/index.js';
	import { components } from '$lib/slices';

	export let data;
</script>

<SliceZone slices={data.slices} {components} />
