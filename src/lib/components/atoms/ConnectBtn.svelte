<a href="#">
	<div>Connect</div>
</a>

<style>
	a {
		all: unset;
		position: relative;
		display: flex;
		border-radius: 3px;
		background-color: black;
		width: fit-content;
		height: 2.2rem;
		cursor: pointer;
		z-index: 1;
	}
	div {
		position: relative;
		padding: 0.2em 0.7em;
		border-radius: 3px;
		border: 2px solid black;
		background-color: white;
		height: 100%;
		transform: translateY(-2px);
		transition: 0.08s;
	}
	a:active div {
		transform: translate(0);
		transition: 0s;
	}
</style>
