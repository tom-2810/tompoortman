<script>
	import { ShadowText, Status, DrawnLine } from '$lib/index.js';
	import { onMount } from 'svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		const card = document.querySelector('.card');
		document.documentElement.style.setProperty('--span-top', 0.03 + 'em');
		document.documentElement.style.setProperty('--span-left', 0);

		document.documentElement.style.setProperty('--span-before-top', 0);
		document.documentElement.style.setProperty('--span-before-left', 0);

		document.documentElement.style.setProperty('--inner-card-x', 0);
		document.documentElement.style.setProperty('--inner-card-y', 0);

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: card,
				start: `-200% top`,
				end: `bottom top`,
				toggleActions: 'play reset play play',
				scrub: false,
				markers: false
			}
		});

		tl.fromTo(
			'html',
			.1,
			{
				'--span-shift-animation': 'none',
				'--span-before-shift-animation': 'none',
				'--shift-animation': 'none'
			},
			{
				delay: 0,
				'--span-shift-animation': 'var(--welcome-delay) span-shift forwards',
				'--span-before-shift-animation': 'var(--welcome-delay) span-before-shift forwards',
				'--shift-animation': 'var(--welcome-delay) shift forwards',
			}
		);
	});
</script>

<div class="card">
	<div class="inner-card">
		<div class="content">
			<ShadowText content={'Tom Poortman'} fontsize={'clamp(1.5rem, 9vw, 9rem)'} />
			<div class="status">
				<Status />
				<DrawnLine />
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--inner-card-x: 0;
		--inner-card-y: 0;
	}
	.card,
	.inner-card {
		border-radius: 15px;
	}
	.card {
		width: 70%;
		aspect-ratio: 2/1.05;
		background-color: #ffb649;
		z-index: -2;
	}
	.inner-card {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		background-color: white;
		border: 0px solid #202020;
		transform: translate(var(--inner-card-x), var(--inner-card-y));
		z-index: 0;
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		flex-direction: column;
		width: min-content;
	}
	.status {
		margin-left: auto;
		width: min-content;
	}

	
</style>
