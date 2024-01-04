<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import {
		ConnectExternalLinkList,
		ProjectExternalLinkList,
		Welcome,
		ProjectCard,
		RecentBlogs
	} from '$lib/index.js';

	export let data;
</script>

<Welcome data={data.page} />

<SliceZone slices={data.page.slices} {components} />

<RecentBlogs blogs={data.blogs} />
