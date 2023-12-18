<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { ConnectExternalLinkList } from '$lib/index.js';

	export let data;
</script>

<SliceZone slices={data.slices} {components} />

<ConnectExternalLinkList />
