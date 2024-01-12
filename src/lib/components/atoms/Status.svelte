<script>
    export let html
</script>

<p>{@html html}</p>

<style>
	p {
		font-style: italic;
	}

	@media screen and (min-width: 900px) {
		p {
			display: flex;
			flex-direction: column;
			font-size: 1.1rem;
		}
	}
</style>
