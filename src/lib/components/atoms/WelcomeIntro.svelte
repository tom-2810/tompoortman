<script>
	export let data;
</script>

<p>
	{@html data.intro}
</p>

<style>
	p {
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: var(--size-m) auto 0 auto;
		font-size: clamp(1.8rem, 7vw, 3.8rem);
		text-wrap: pretty;
		letter-spacing: -3.6px;
	}
</style>
