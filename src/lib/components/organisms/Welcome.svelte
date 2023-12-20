<script>
	import { WelcomeTop, WelcomeIntro } from '$lib/index.js';
    export let data
</script>

<section>
    <WelcomeTop {data} />
    <WelcomeIntro {data} />
</section>

<style>
    section {
        margin-top: clamp(4rem, 14vw, 10rem);
    }
</style>