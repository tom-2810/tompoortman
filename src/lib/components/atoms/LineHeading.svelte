<script>
	export let isOverview, text;
</script>

{#if isOverview}
	<h1>{text}</h1>
{:else}
	<h2>{text}</h2>
{/if}

<style>
    h1, h2 {
        border-bottom: 4px solid black;
    }
    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 2rem;
    }
</style>