<script>
	/** @type {import("@prismicio/client").Content.FeaturedProjectsSlice} */
	export let slice;

	let items = slice.items;

	import { ProjectCard } from '$lib/index.js';
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
</section>

<style>
	section {
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
	}
	h2 {
		font-size: 6rem;
		width: min-content;
		line-height: 107%;
		font-weight: 500;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		row-gap: 5rem;
	}
	ul li {
		grid-column: span 2;
	}
	ul li:nth-child(2n) {
		margin-left: auto;
		grid-column: 2/3;
	}

	@media screen and (max-width: 1050px) {
		ul {
			display: flex;
			flex-direction: column;
		}
	}

	@media screen and (max-width: 800px) {
		ul {
			align-items: center;
		}
		ul li:nth-child(2n) {
			margin-left: unset;
		}
	}
</style>
