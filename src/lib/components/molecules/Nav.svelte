<script>
	import { HamburgerMenu, ShadowText, ConnectBtn } from '$lib/index.js';
</script>

<nav>
	<a href="/"><ShadowText fontsize="2.5rem" content="TP" /></a>

	<div>
		<ConnectBtn />
		<HamburgerMenu />
	</div>
</nav>

<style>
	nav {
		position: absolute;
		display: flex;
		justify-content: space-between;
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin-top: 2rem;
	}
	div {
		position: relative;
		display: flex;
		z-index: 2;
	}
	a {
		position: relative;
		z-index: 3;
	}
</style>
