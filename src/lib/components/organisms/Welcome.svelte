<script>
	import { WelcomeCard, ShadowText } from '$lib/index.js';
</script>

<ShadowText content="TP" fontsize={'3rem'} position={'absolute'} />
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
		min-height: 45rem;
	}

	@media only screen and (max-width: 800px) {
		section {
			height: unset;
			margin-top: 6rem;
			min-height: 0;
		}
	}
</style>
