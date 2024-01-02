<script>
	import { WelcomeTop, WelcomeIntro } from '$lib/index.js';
    export let data
</script>

<section class="welcome">
    <WelcomeTop {data} />
    <WelcomeIntro {data} />
</section>

<style>
    section {
        margin-top: clamp(3.8rem, 12vw, 9rem);
    }
</style>