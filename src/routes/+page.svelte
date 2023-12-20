<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { ConnectExternalLinkList, ProjectExternalLinkList, Welcome } from '$lib/index.js';

	export let data;
</script>

<Welcome {data} />

<SliceZone slices={data.slices} {components} />
