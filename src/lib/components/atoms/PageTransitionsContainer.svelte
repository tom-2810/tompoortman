<script>
    import { page } from "$app/stores";
	import { PageTransition } from '$lib/index.js';


    export let data;
</script>

{#key $page.url.pathname}
    <PageTransition {data} />
{/key}
