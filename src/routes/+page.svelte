<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';
	import { Welcome, RecentBlogs, Footer } from '$lib/index.js';

	export let data;
</script>

<Welcome data={data.page} />

<SliceZone slices={data.page.slices} {components} />

<RecentBlogs blogs={data.blogs} />

<Footer data={data.page} />
