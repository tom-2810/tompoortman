<script>
	import { HamburgerMenu, ShadowText } from '$lib/index.js';
</script>

<nav>
	<a href="/"><ShadowText fontsize="2rem" content="TP" /></a>
	<HamburgerMenu />
</nav>

<style>
	nav {
		position: absolute;
		display: flex;
		justify-content: space-between;
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin-top: 0.5rem;
	}
	a {
		position: relative;
		margin-top: 1rem;
	}
</style>
