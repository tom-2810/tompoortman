<script>
	import { HamburgerMenu, ShadowText, Button } from '$lib/index.js';
</script>

<nav>
	<a href="/"><ShadowText fontsize="2.2rem" content="TP" /></a>

	<div>
		<Button link={'/connect'} text={'Connect'} />
		<HamburgerMenu />
	</div>
</nav>

<style>
	nav {
		position: relative;
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
