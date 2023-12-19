<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { ConnectExternalLinkList, ProjectExternalLinkList } from '$lib/index.js';

	export let data;
</script>

<SliceZone slices={data.slices} {components} />
asdf