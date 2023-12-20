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
		font-size: clamp(1.3rem, 5.4vw, 3rem);
        line-height: 150%;
        text-wrap: pretty;
	}
</style>
