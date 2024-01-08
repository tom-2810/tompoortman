<script>
	export let data;
</script>

<p>
	{@html data.intro}
</p>

<style>
	p {
		margin-top: var(--size-m);
		font-size: clamp(1.8rem, 5vw, 2.5rem);
		letter-spacing: -3.6px;
	}
</style>
