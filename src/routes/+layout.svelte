<script>
	import global from '../global.css';
	import { Header, PageTransitionsContainer } from '$lib/index.js';
	import { setContext } from 'svelte';
    import { page } from "$app/stores";

	export let data;
	setContext('connect-links', data);
</script>

<PageTransitionsContainer refresh={$page.url.pathname} />

<Header />

<main>
	<slot />
</main>

<footer></footer>

<style>
	main {
		overflow-x: hidden;
	}
</style>
