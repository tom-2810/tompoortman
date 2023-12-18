<script>
    export let repo
    export let live

	import { ExternalLink } from '$lib/index.js';
</script>

<ul>
	{#if repo}
    <ExternalLink text={"Github repository"} link={repo} />
    {/if}
    {#if live}
    <ExternalLink text={"Live site"} link={live} />
    {/if}
</ul>

<style>
	ul {
		width: 12rem;
	}
</style>