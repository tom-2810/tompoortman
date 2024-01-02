<script>
	/** @type {import("@prismicio/client").Content.FeaturedProjectsSlice} */
	export let slice;

	import { ProjectCard } from '$lib/index.js';
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<h2>Featured Projects</h2>
	<ProjectCard project={slice.items[0].project} />
</section>
