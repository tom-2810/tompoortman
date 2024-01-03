<script>
	import { ProjectsOverview } from '$lib/index.js';

	export let data;
</script>

<section>
	<h1>Overview of projects</h1>
	<ProjectsOverview projects={data.projects} />
</section>
