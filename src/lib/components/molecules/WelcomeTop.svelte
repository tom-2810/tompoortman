<script>
	import { ShadowText, ConnectExternalLinkList, ColoredContainer, CursorTom } from '$lib/index.js';
	export let data;

	import { gsap } from 'gsap/dist/gsap';

	import { onMount } from 'svelte';

	onMount(() => {
		gsap.fromTo('.coloredContainer', { x: -1200, y: -100 }, { x: 0, y: 0, duration: 2, delay: 2 });
		gsap.fromTo(
			'.coloredContainer .cursorTom',
			{ left: '90%', top: '20%' },
			{ left: '100%', top: 0, duration: 0.5, delay: 4 }
		);
		gsap.fromTo(
			'.coloredContainer',
			{ width: document.querySelector('.coloredContainer').clientWidth - 30 },
			{ width: document.querySelector('.coloredContainer').clientWidth, duration: 1, delay: 5 }
		);
		gsap.to('.coloredContainer .cursorTom', {
			left: -800,
			top: -100,
			duration: 1,
			delay: 6.5,
			onComplete: () => {
				gsap.to('.coloredContainer .cursorTom', { display: 'none' });
			}
		});
	});
</script>

<div class="top">
	<div class="coloredContainer">
		<ColoredContainer baseColor="#23B1FF">
			<h1>
				<ShadowText
					fontsize="clamp(2.8rem, 9vw, 6rem)"
					content={data.name}
					position="relative"
				/>
			</h1>
		</ColoredContainer>

		<CursorTom />
	</div>
	<ConnectExternalLinkList />
</div>

<style>
	.top {
		display: flex;
		justify-content: space-between;
		align-items: end;
		border-bottom: 4px solid black;
		padding-bottom: var(--size-m);
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
	}

	.coloredContainer {
		position: relative;
	}



	@media screen and (max-width: 600px) {
		.top {
			flex-direction: column;
			align-items: unset;
			gap: var(--size-s);
		}
	}
</style>
