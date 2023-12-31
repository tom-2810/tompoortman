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
		padding: 0.2em 0.6em;
		border-radius: 3px;
		border: 2px solid black;
		background-color: white;
		height: 100%;
		transform: translateY(-3px);
		transition: 0.1s;
	}
	a:active div {
		transform: translate(0);
	}
</style>
