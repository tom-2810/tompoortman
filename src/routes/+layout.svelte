<script>
	import global from '../global.css';
	import { Header, PageTransitionsContainer, Bg } from '$lib/index.js';
	import { setContext } from 'svelte';
	import { page } from '$app/stores';

	export let data;
	setContext('connect-links', data);
</script>

<PageTransitionsContainer refresh={$page.url.pathname} />

<Header />

<main>
	<Bg />
	<slot />
</main>

<footer></footer>

<style>
	main {
		position: relative;
		overflow: hidden;
		animation: 0.2s fade-in forwards;
		min-height: 100vh;
	}
	@keyframes fade-in {
		from {
			opacity: 0;
		}

		to {
			opacity: 1;
		}
	}
</style>
