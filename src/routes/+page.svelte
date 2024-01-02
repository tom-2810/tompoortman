<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import {
		ConnectExternalLinkList,
		ProjectExternalLinkList,
		Welcome,
		ProjectCard
	} from '$lib/index.js';

	export let data;
</script>

<Welcome data={data.page} />

<SliceZone slices={data.page.slices} {components} />

<h2>Recent blogs</h2>
{#each data.blogs as blog}
	<h3>{blog.data.title}</h3>
{/each}
