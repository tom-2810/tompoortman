<a href="#">
	<div>Connect</div>
</a>

<style>
	a {
		border-radius: 3px;
		background-color: black;
		height: 2.1rem;
		z-index: -1;
	}
	div {
		display: flex;
		align-items: center;
		position: relative;
		padding: 0 0.75rem;
		height: 2.1rem;
		font-size: 1.05rem;
		background-color: white;
		border: 2px solid black;
		border-radius: 3px;
		transform: translateY(-2px);
	}
	a:active div {
		transform: translate(0);
		transition: 0s;
	}
</style>
