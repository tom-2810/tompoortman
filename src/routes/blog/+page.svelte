<script>
	import { BlogsOverview } from '$lib/index.js';

	export let data;
</script>

<section>
	<h1>Overview of blogs</h1>
	<BlogsOverview blogs={data.blogs} />
</section>
