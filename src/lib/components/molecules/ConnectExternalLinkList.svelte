<script>
	import { getContext } from 'svelte';
	import { ExternalLink } from '$lib/index.js';

	const connect = getContext('connect-links');
</script>

<ul>
	{#each connect.connect_link as connectLink}
		<ExternalLink text={connectLink.text} link={connectLink.link} />
	{/each}
</ul>

<style>
	ul {
		width: 12rem;
	}

	@media screen and (max-width: 600px) {
		ul {
			width: unset;
		}
	}
</style>
