<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { ConnectExternalLinkList, ProjectExternalLinkList, Welcome, ProjectCard } from '$lib/index.js';

	export let data;

	console.log(data)
</script>

<!-- <Welcome {data} /> -->


<SliceZone slices={data.page.slices} {components} />
