<script>
	import { BlogCard } from '$lib/index.js';

	export let blogs;
</script>

<!-- {#each blogs as blog}
	<BlogCard {blog} />
{/each} -->
<BlogCard blog={blogs[0]} />
