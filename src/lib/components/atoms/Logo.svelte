<span data-text="TP">TP</span>

<style>
	span {
		position: relative;
		color: #fff;
		font-size: 3rem;
		font-weight: 900;
		letter-spacing: 0.3px;
		animation: shift 1s forwards;
	}

	span::before,
	span::after {
		width: 100%;
		content: attr(data-text);
		position: absolute;
		-webkit-text-stroke: 8.5px #202020;
		font-size: 1em;
		z-index: -1;
	}

	span::before {
		color: #202020;
		font-weight: 900;
		animation: shadow 1s forwards;
	}

	span:after {
		left: 0;
	}

	@keyframes shift {
		from {
			left: 0;
			top: 0;
		}
		to {
			left: -0.1em;
			top: -0.05em;
		}
	}

	@keyframes shadow {
		from {
			left: 0;
			top: -0.04em;
		}
		to {
			left: 0.1em;
			top: 0.015em;
		}
	}
</style>
