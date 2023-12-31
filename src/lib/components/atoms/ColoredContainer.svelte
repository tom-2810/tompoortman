<script>
	export let baseColor;

	function hexToHSL(H) {
		// Convert hex to RGB first
		let r = 0,
			g = 0,
			b = 0;
		if (H.length == 4) {
			r = '0x' + H[1] + H[1];
			g = '0x' + H[2] + H[2];
			b = '0x' + H[3] + H[3];
		} else if (H.length == 7) {
			r = '0x' + H[1] + H[2];
			g = '0x' + H[3] + H[4];
			b = '0x' + H[5] + H[6];
		}
		// Then to HSL
		r /= 255;
		g /= 255;
		b /= 255;
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;

		if (delta == 0) h = 0;
		else if (cmax == r) h = ((g - b) / delta) % 6;
		else if (cmax == g) h = (b - r) / delta + 2;
		else h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		if (h < 0) h += 360;

		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);

		if (s > 0) {
			s = 100;
		}

		return 'hsl(' + h + ',' + s + '%,' + 98 + '%)';
	}
</script>

<div class="container" style="background-color: {hexToHSL(baseColor)}; border-color: {baseColor}">
	<slot />
	<div class="dot" style="background-color: {baseColor}"></div>
	<div class="dot" style="background-color: {baseColor}"></div>
	<div class="dot" style="background-color: {baseColor}"></div>
	<div class="dot" style="background-color: {baseColor}"></div>
</div>

<style>
	.container {
		position: relative;
		padding: 3rem;
        padding-right: 6rem;
		border: 2px solid;
		z-index: 0;
	}
	.dot {
		position: absolute;
		height: 8px;
		width: 8px;
		top: 0;
		left: 0;
		transform: translate(-5px, -5px);
	}
	.dot:nth-child(2n) {
		transform: translate(-3px, -5px);

		left: 100%;
	}
	.dot:nth-child(3n) {
		top: 100%;
		transform: translate(-5px, -3px);
	}
	.dot:nth-child(4n) {
		left: 100%;
		top: 100%;
		transform: translate(-3px, -3px);
	}
	@media screen and (max-width: 800px) {
		.container {
			padding: 1.5rem;
		}
	}
</style>
