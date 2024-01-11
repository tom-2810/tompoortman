<script>
	export let data;
</script>

<p>
	<span><img src="emojis/waving-hand.png" alt="" height="48" />Hello there,</span>

	{data.intro}

	<span>- Let's <a href="/connect">connect</a></span>
</p>

<style>
	p {
		display: flex;
		flex-direction: column;
		margin-top: var(--size-m);
		font-size: clamp(1.8rem, 5.4vw, 2.9rem);
		letter-spacing: -3.4px;
		text-wrap: balance;
	}
	img {
		margin-right: 0.4rem;
		height: 1.3em;
	}
	span:first-child {
		font-weight: 600;
	}
	span:last-child {
		margin-top: 2rem;
	}
</style>
