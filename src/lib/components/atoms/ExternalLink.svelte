<script>
	export let text;
	export let link;
</script>

<li>
	<a target="_blank" href={link}
		>{text}
		<span
			><svg
				width="10"
				height="10"
				viewBox="0 0 10 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M1 9L9 1L1 9ZM9 1V8.68V1ZM9 1H1.32H9Z" fill="#202020" />
				<path
					d="M1 9L9 1M9 1V8.68M9 1H1.32"
					stroke="#202020"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg></span
		></a
	>
</li>

<style>
	a {
		display: flex;
		justify-content: space-between;
	}
</style>
