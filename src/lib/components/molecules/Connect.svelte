<script>
	import { ConnectExternalLinkList } from '$lib/index.js';
	export let data;
</script>

<section>
	<h2>LET'S CONNECT</h2>

	<span>Me</span>
	<ul>
		<li>{data.name}</li>
	</ul>
	<ConnectExternalLinkList />
</section>

<style>
	span {
		opacity: 0.75;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: end;
		padding: clamp(5rem, 20vw, 6%) 0;
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin-inline: auto;
	}
	h2 {
		font-size: clamp(3rem, 20vw, 14rem);
		width: min-content;
		line-height: 100%;
		font-weight: 400;
		letter-spacing: -0.055em;
		margin-bottom: auto;
	}
	ul {
		margin-bottom: 2rem;
	}
</style>
