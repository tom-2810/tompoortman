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
        margin-top: 22vh;
    }
</style>