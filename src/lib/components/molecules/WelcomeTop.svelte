<script>
	import { ShadowText, ConnectExternalLinkList } from '$lib/index.js';
	export let data;
</script>

<div>
	<h1>
		<ShadowText fontsize="6rem" content={data.name} position="relative" />
	</h1>
	<ConnectExternalLinkList />
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: end;
		border-bottom: 5px solid black;
		padding-bottom: var(--size-m);
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
	}
</style>
