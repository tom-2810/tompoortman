<script>
	export let content;
	export let fontsize;
	export let position;
</script>

<span class="shadowText" style="font-size: {fontsize}; position: {position}" data-text={content}
	>{content}</span
>

<style>
	:root {
		--span-top: -0.05em;
		--span-left: -0.1em;

		--span-before-top: 0.08em;
		--span-before-left: 0.1em;
	}
	span {
		position: absolute;
		color: #fff;
		font-weight: 900;
		line-height: 100%;
		width: min-content;
	}

	span::before,
	span::after {
		width: min-content;
		content: attr(data-text);
		position: absolute;
		-webkit-text-stroke: 0.16em #202020;
		font-size: 1em;
		z-index: -1;
	}

	span::before {
		color: #202020;

		font-weight: 900;
	}

	span:after {
		/*   -webkit-text-stroke: .16em white; */
		left: 0em;
		top: 0;
	}

	span {
		top: -0.05em;
		left: -0.1em;
	}

	span::before {
		top: 0.08em;
		left: 0.1em;
	}

	span:hover {
		left: 0;
		top: 0.03em;
	}

	span:hover::before {
		left: 0;
		top: 0;
	}
</style>
