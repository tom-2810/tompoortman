<script>
	import global from '../global.css';
	import { Header, PageTransitionsContainer, Bg } from '$lib/index.js';
	import { setContext } from 'svelte';
	import { page } from '$app/stores';

	export let data;
	setContext('connect-links', data);
</script>

<!-- <PageTransitionsContainer refresh={$page.url.pathname} /> -->


<Header />

<main>
	<Bg />
	<slot />
</main>

<footer></footer>

<style>
	main {
		position: relative;
		/* overflow: hidden; */
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
		/* width: 50rem; */
	}
</style>
