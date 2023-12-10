<script>
	export let content;
	export let fontsize;
</script>

<span class="shadowText" style="font-size: {fontsize};" data-text={content}>{content}</span>

<style>
	:root {
		--span-top: -0.05em;
		--span-left: -0.1em;

		--span-before-top: 0.08em;
		--span-before-left: 0.1em;
	}
	span {
		position: relative;
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
		top: var(--span-top);
		left: var(--span-left);
	}

	span::before {
		top: var(--span-before-top);
		left: var(--span-before-left);
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
