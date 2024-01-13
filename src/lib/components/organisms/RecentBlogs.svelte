<script>
	import { BlogCard, LineHeading, Button } from '$lib/index.js';

	export let blogs;
</script>

<section>
	<LineHeading text={'Recent blogs'} />
	<ul>
		{#each blogs as blog}
			<li>
				<BlogCard {blog} />
			</li>
		{/each}
	</ul>
	<div class="more">
		<Button link={'/blog'} text={'All blogs'} />
	</div>
</section>

<style>
	section {
		width: var(--default-width);
		max-width: 65rem;
		margin-inline: auto;
	}
	ul {
		margin-top: 2rem;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}
	.more {
		width: fit-content;
		margin-inline: auto;
		margin-top: 2rem;
	}
</style>
