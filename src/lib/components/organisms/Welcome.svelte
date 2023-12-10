<script>
	import { WelcomeCard } from '$lib/index.js';
</script>

<section>
	<WelcomeCard />
</section>

<style>
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		/* min-height: 40rem; */
	}

	@media only screen and (max-width: 800px) {
		section {
			height: unset;
			margin-top: 6rem;
		}
	}
</style>
