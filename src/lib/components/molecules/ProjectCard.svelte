<script>
	import { CardTitle, CardSubtitle } from '$lib/index.js';

	export let project;
</script>

<section>
	<img src={project.data.image.url} alt="" />
	<CardTitle text={project.data.title} />
	<CardSubtitle text={project.data.client} />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        width: 20rem;
    }
    img {
        width: 100%;
    }
</style>