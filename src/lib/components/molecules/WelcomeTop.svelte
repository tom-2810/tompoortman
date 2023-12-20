<script>
	import { ShadowText, ConnectExternalLinkList } from '$lib/index.js';
    export let data
</script>

<div>
	<h1>
		<ShadowText fontsize="4rem" content={data.name} position="absolute" />
	</h1>
	<ConnectExternalLinkList />
</div>

<style>
	div {
        display: flex;
        justify-content: space-between;
		border-bottom: 4px solid black;
        padding-bottom: var(--size-m);
        width: var(--default-width);
        max-width: var(--default-max-width);
        margin: 0 auto;
	}
    h1 {
        position: relative;
        top: -5rem;
    }
</style>
