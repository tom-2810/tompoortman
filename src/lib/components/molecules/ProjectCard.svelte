<script>
	import { CardTitle, CardSubtitle } from '$lib/index.js';

	export let project;
	export let inOverview;
</script>

<a href="/projects/{project.uid}">
	<!-- <section class={inOverview ? "in-overview project-card" : "project-card"}> -->
	<section>
		<div style="background-color: {project.data.color};" class="image">
			<img src={project.data.image.url} alt="" />
		</div>
		<div class="text">
			<div>
				{#if inOverview}
					<h2>
						<CardTitle text={project.data.title} />
					</h2>
				{:else}
					<h3>
						<CardTitle text={project.data.title} />
					</h3>
				{/if}
				<CardSubtitle text={project.data.services} />
			</div>
			<div class="arrow">
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M2 13L13 2L2 13ZM13 2V12.56V2ZM13 2H2.44H13Z" fill="var(--c-arrow)" />
					<path
						d="M2 13L13 2M13 2V12.56M13 2H2.44"
						stroke="var(--c-arrow)"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</div>
	</section>
</a>

<style>
	:root {
		--c-arrow: #202020;
	}
	a {
		display: block;
		width: fit-content;
	}
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: clamp(0.8rem, 3vw, 1.2rem);
		border: 1px solid #aaaaaa;
		transition: 0.2s;
		border-radius: 12px;
		background-color: white;
	}
	section .image {
		position: relative;
		margin-bottom: 1rem;
		border-radius: 6px;
	}
	section:hover .image img {
		transform: translateY(-8px);
		transition: 0.1s;
	}
	section:hover {
		background-color: rgb(250, 250, 250);
		--c-arrow: white;
	}
	a:active .image img {
		transform: translateY(0);
	}
	img {
		transition: 0.2s;
		border: 3px solid #202020;
		border-radius: 6px;
		background-color: white;
		width: 100%;
		aspect-ratio: 15/11;
		object-fit: cover;
	}
	div {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
	.text {
		flex-direction: row;
	}
	.arrow {
		display: grid;
		place-items: center;
		margin: auto 0 0 auto;
		background-color: #f1f1f1;
		height: 2.5rem;
		width: 2.5rem;
		aspect-ratio: 1/1;
		border-radius: 50%;
	}
	section .arrow svg {
		transition: 0.2s;
	}
	section:hover .arrow {
		background-color: #202020;
	}
	section:hover .arrow svg {
		rotate: 45deg;
		transition: 0.1s;
	}
</style>
