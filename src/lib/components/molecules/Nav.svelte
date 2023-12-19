<script>
	import { HamburgerMenu, ShadowText, ConnectBtn } from '$lib/index.js';
</script>

<nav>
	<a href="/"><ShadowText fontsize="2rem" content="TP" /></a>

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
	}
	a {
		position: relative;
		z-index: 1;
	}
</style>
