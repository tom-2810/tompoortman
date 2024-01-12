<script>
	import { WelcomeTop, WelcomeIntro } from '$lib/index.js';
	export let data;
</script>

<section class="welcome">
	<WelcomeTop {data} />
	<WelcomeIntro {data} />
</section>

<style>
	section {
		padding-top: clamp(15rem, 18vw, 22rem);
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
	}
</style>
