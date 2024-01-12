<script>
	import { ShadowText, Status, Banner } from '$lib/index.js';
	export let data;

	import { gsap } from 'gsap/dist/gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		// const defaultContainerWidth = document.querySelector('.coloredContainer').clientWidth;
		// gsap.fromTo('.coloredContainer', { x: -1200, y: -100 }, { x: 0, y: 0, duration: 2, delay: 2 });
		// gsap.fromTo(
		// 	'.coloredContainer .cursorTom',
		// 	{ left: '90%', top: '20%' },
		// 	{ left: '100%', top: 0, duration: 0.5, delay: 4 }
		// );
		// gsap.fromTo(
		// 	'.coloredContainer',
		// 	{ width: defaultContainerWidth - 30 },
		// 	{ width: defaultContainerWidth, duration: 1, delay: 5 }
		// );
		// gsap.to('.coloredContainer .cursorTom', {
		// 	left: -800,
		// 	top: -100,
		// 	duration: 1,
		// 	delay: 6.5,
		// 	onComplete: () => {
		// 		gsap.to('.coloredContainer .cursorTom', { display: 'none' });
		// 	}
		// });
	});
</script>

<div class="top">
	<Banner html={data.banner} />
	<div class="content">
		<h1>
			<ShadowText
				fontsize="clamp(2.9rem, 12.5vw, 6.9rem)"
				content={data.name}
				position="relative"
			/>
		</h1>

		<div class="status">
			<Status html={data.status} />
		</div>
	</div>
</div>

<style>
	.top {
		display: flex;
		flex-direction: column;
	}
	.content {
		display: grid;
		align-items: end;
		grid-template-columns: repeat(4, 1fr);
		border-bottom: 4px solid black;
		padding-bottom: var(--size-m);
	}
	h1 {
		position: relative;
		margin-left: clamp(4px, 3.8vw, 1.4rem);
		grid-column: span 3;
	}
	.status {
		grid-column: 4/5;
	}

	@media screen and (max-width: 800px) {
		.content {
			display: flex;
			flex-direction: column;
			align-items: unset;
			gap: var(--size-s);
		}
	}
</style>
