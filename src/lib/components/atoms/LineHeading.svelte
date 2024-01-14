<script>
	export let isOverview, text;
</script>

{#if isOverview}
	<h1>{text}</h1>
{:else}
	<h2>{text}</h2>
{/if}

<style>
	h1,
	h2 {
		border-bottom: 4px solid black;
		font-weight: 500;
		letter-spacing: -0.055em;
		font-size: 3rem;
	}
</style>
