<script>
	import { ShadowText, ConnectExternalLinkList } from '$lib/index.js';
	export let data;
</script>

<div>
	<h1>
		<ShadowText fontsize="clamp(3.2rem, 10vw, 7.5rem)" content={data.name} position="relative" />
	</h1>
	<ConnectExternalLinkList />
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: end;
		border-bottom: 4px solid black;
		padding-bottom: var(--size-m);
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
	}

	@media screen and (max-width: 600px) {
		div {
			flex-direction: column;
			align-items: unset;
            gap: var(--size-s);
		}
	}
</style>
