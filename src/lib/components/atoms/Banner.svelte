<script>
	export let html;
</script>

<div class="banner">
	<div class="banner-content">
		{@html html}{@html html}{@html html}{@html html}{@html html}{@html html}
	</div>
	<div class="banner-content">
		{@html html}{@html html}{@html html}{@html html}{@html html}{@html html}
	</div>
</div>

<style>
	.banner {
		position: relative;
		left: -55%;
		bottom: 5rem;
		rotate: 5deg;
		width: 230%;
		background-color: #202020;
		border: 2px solid white;
		box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
		flex-shrink: 0;
		display: flex;
		overflow: hidden;
		gap: 0.5rem;
		z-index: 1;
	}
	.banner-content {
		position: relative;
		display: flex;
		flex-direction: row;
		gap: 2rem;
		font-size: 1.2rem;
		font-weight: 500;
		flex-shrink: 0;
		animation: scroll 20s linear infinite;
		color: white;
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - 0.5rem));
		}
	}
</style>
