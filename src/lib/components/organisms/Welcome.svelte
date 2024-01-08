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
		padding-top: 18rem;
	}
</style>
