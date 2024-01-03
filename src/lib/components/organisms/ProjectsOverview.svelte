<script>
	export let projects;
	import { ProjectCard } from '$lib/index.js';
</script>

<ul>
	{#each projects as project}
		<li>
			<ProjectCard {project} inOverview={true} />
		</li>
	{/each}
</ul>
