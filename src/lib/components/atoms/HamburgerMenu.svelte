<script>
	import { ConnectBtn } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		document.querySelector('#hamburger').checked = false;
	});
</script>

<label for="hamburger" aria-label="hamburger menu"></label>
<input type="checkbox" id="hamburger" />

<ul>
	<li><a href="/projects">Projects</a></li>
	<li><a href="/blog">Blog</a></li>
</ul>

<style>
	ul {
		position: absolute;
		display: flex;
		flex-direction: column;
		list-style: none;
		padding: 1rem;
		width: 100%;
		border: 2px solid black;
		border-radius: 8px;
		gap: 1rem;
		top: 3rem;
		right: 0;
	}
	input#hamburger:not(:checked) ~ ul {
		top: -300px;
	}
	input {
		all: unset;
		cursor: pointer;
		display: grid;
		place-items: center;
		border: 2px solid black;
		border-radius: 50%;
		height: 2rem;
		margin-left: 1rem;
		background-color: white;
		aspect-ratio: 1/1;
	}
	input::before {
		position: absolute;
		content: '=';
	}
	input:checked::before {
		content: 'x';
	}
</style>
