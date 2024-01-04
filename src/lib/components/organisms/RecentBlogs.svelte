<script>
	import { BlogCard } from '$lib/index.js';

	export let blogs;
</script>

<h2>Recent blogs</h2>
{#each blogs as blog}
	<BlogCard {blog} />
{/each}
