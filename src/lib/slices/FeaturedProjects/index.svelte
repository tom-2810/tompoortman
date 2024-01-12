<script>
	/** @type {import("@prismicio/client").Content.FeaturedProjectsSlice} */
	export let slice;

	let items = slice.items;

	import { ProjectCard, Button } from '$lib/index.js';
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<ul>
		<h2>Featured Projects</h2>
		{#each items as item}
			<li>
				<ProjectCard project={item.project} />
			</li>
		{/each}
	</ul>
	<div class="more">

		<Button link={'/projects'} text={'All projects'} />
	</div>
</section>

<style>
	section {
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
	}
	h2 {
		font-size: clamp(3rem, 12vw, 6.9rem);
		width: min-content;
		line-height: 100%;
		font-weight: 500;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 3rem;
	}
	ul li {
		grid-column: span 2;
		width: clamp(15rem, 45vw, 30rem);
	}
	ul li:nth-child(2n) {
		margin-left: auto;
		grid-column: 2/3;
	}

	.more {
		width: fit-content;
		margin-inline: auto;
		margin-top: 2rem;
	}

	@media screen and (max-width: 1050px) {
		ul {
			display: flex;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 700px) {
		ul {
			row-gap: 1rem;
		}
		ul li {
			width: 100%;
		}
	}
</style>
