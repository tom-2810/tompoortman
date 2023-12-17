<script>
	import { ConnectBtn } from '$lib/index.js';
	let active;
</script>

<ul>
	<li class="top">
		<ConnectBtn />
		<button class:active on:click={() => (active = !active)}>=</button>
    </li>
	<li><a href="/projects">Projects</a></li>
	<li><a href="/blog">Blog</a></li>
</ul>

<style>
	ul {
		position: relative;
		display: flex;
		flex-direction: column;
		list-style: none;
		height: 4rem;
		transition: 1s;
		padding: 1rem;
		width: fit-content;
		gap: 1rem;
		right: -1rem;
	}
	ul::before {
		content: '';
		position: absolute;
		top: -300px;
		left: -2px;
		width: 100%;
		height: 100%;
		border: 2px solid black;
		border-radius: 8px;
		transition: 0.4s;
		background-color: white;
		z-index: -1;
	}
	li:not(.top) {
		position: relative;
		top: -300px;
		transition: 0.4s;
	}
	.top {
		display: flex;
		gap: 1rem;
	}
	button {
		all: unset;
		cursor: pointer;
		display: grid;
		place-items: center;
		border: 2px solid black;
		border-radius: 50%;
		height: 2rem;
		background-color: white;
		aspect-ratio: 1/1;
	}
</style>
