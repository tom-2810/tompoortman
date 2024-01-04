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
			<CardSubtitle text={project.data.client} />
		</div>
	</section>
</a>

<style>
	a {
		display: block;
		width: fit-content;
	}
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 30rem;
		padding: 1.2rem;
		border: 1px solid #aaaaaa;
		transition: 0.2s;
		border-radius: 12px;
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
	}
	img {
		transition: 0.2s;
		border: 3px solid #202020;
		border-radius: 6px;
		background-color: white;
		width: 100%;
		aspect-ratio: 16/11;
		object-fit: cover;
	}
	div {
		display: flex;
		flex-direction: column;
		/* gap: 8px; */
	}
</style>
