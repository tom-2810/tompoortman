<div class="bg">
	<div></div>
	<div></div>
	<div></div>
	<div></div>
	<div></div>
</div>

<style>
	.bg {
		display: flex;
		justify-content: space-between;
		position: absolute;
		top: 0;
		height: 100%;
		background-color: white;
		width: var(--default-width);
		max-width: var(--default-max-width);
		margin: 0 auto;
		left: 50%;
		transform: translateX(-50%);
		z-index: -1;
	}
	.bg > div {
		width: 1px;
		background: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 5px,
			#cdcdcd 5px,
			#cdcdcd 10px
		);
	}
</style>
