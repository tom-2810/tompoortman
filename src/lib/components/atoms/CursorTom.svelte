<div class="cursorTom">
	<svg xmlns="http://www.w3.org/2000/svg" width="25" height="27" viewBox="0 0 25 27" fill="none">
		<path
			d="M5.25155 1.55585L5.25136 1.55572C4.90293 1.32319 4.49346 1.199 4.07457 1.19883C3.65567 1.19865 3.2461 1.32248 2.89747 1.55472C2.54885 1.78696 2.27677 2.1172 2.11555 2.50383C1.95439 2.8903 1.91119 3.31581 1.9914 3.72678C1.99143 3.72694 1.99146 3.72711 1.9915 3.72728L5.9356 23.9655C5.9356 23.9655 5.93561 23.9656 5.93562 23.9656C6.01551 24.3757 6.21473 24.7531 6.50826 25.0504C6.80183 25.3478 7.17667 25.5519 7.58577 25.637C7.99486 25.7221 8.41999 25.6846 8.80782 25.529C9.19556 25.3735 9.52874 25.107 9.7656 24.7629C9.76566 24.7628 9.76572 24.7627 9.76578 24.7626L14.1011 18.4667C14.1188 18.441 14.1457 18.4231 14.1762 18.4167L21.6576 16.8474C22.0666 16.7618 22.4412 16.5573 22.7344 16.2595C23.0276 15.9618 23.2263 15.5841 23.3057 15.1739C23.385 14.7636 23.3415 14.339 23.1805 13.9534C23.0195 13.5679 22.7482 13.2384 22.4006 13.0064L5.25155 1.55585Z"
			fill="#23b1ff"
			stroke="#202020"
			stroke-width="2"
		/>
	</svg>
	<div class="label"><span>Tom</span></div>
</div>

<style>
	.cursorTom {
		position: absolute;
	}
	.label {
		all: unset;
		position: absolute;
		top: 1.6rem;
		left: 1.3rem;
		display: flex;
		border-radius: 3px;
		background-color: #23b1ff;
		width: fit-content;
		height: 2.2rem;
		z-index: 1;
	}
	.label span {
		position: relative;
		padding: 0.2em 1em;
		border-radius: 3px;
		border: 2px solid black;
		background-color: white;
		height: 100%;
		transform: translate(-2px, -2px);
	}
</style>
