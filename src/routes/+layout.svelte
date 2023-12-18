<script>
	import global from '../global.css';
	import { Header } from '$lib/index.js';
	import { setContext } from 'svelte';

	export let data;
	setContext('connect-links', data);
</script>

<Header />

<main>
	<slot />
</main>

<footer></footer>

<style>
</style>
