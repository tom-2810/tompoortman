<script>
	import { ConnectBtn } from '$lib/index.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const hamburgerBtn = document.querySelector('#hamburger');
		const menu = document.querySelector('#menu');

		const items = document.querySelectorAll('#menu li');
		const links = document.querySelectorAll('a');
		const images = document.querySelectorAll('#menu img');

		hamburgerBtn.addEventListener('click', () => {
			hamburgerBtn.classList.toggle('open');
			menu.classList.toggle('show');
		});

		links.forEach((link) => {
			link.addEventListener('click', () => {
				hamburgerBtn.classList.remove('open');
				menu.classList.remove('show');
			});
		});

		items.forEach((item, index) => {
			item.addEventListener('mouseover', () => {
				images.forEach((image) => {
					image.classList.remove('active');
				});
				images[index].classList.toggle('active');
			});
			item.addEventListener('mouseleave', () => {
				images.forEach((image) => {
					image.classList.remove('active');
					images[0].classList.add('active');
				});
			});
		});
	});
</script>

<button id="hamburger">
	<div></div>
	<div></div>
</button>

<div id="menu">
	<ul>
		<li class="home"><a href="/">HOME</a></li>
		<li class="work"><a href="/work">WORK</a></li>
		<li class="blog"><a href="/blog">BLOG</a></li>
		<li class="contact"><a href="#contact">CONTACT</a></li>
	</ul>
	<img src="/bean.gif" class="home active" alt="" />
	<img src="/working.gif" class="work" alt="" />
	<img src="/cat-typing.gif" class="blog" alt="" />
	<img src="/contact.gif" class="contact" alt="" />
</div>

<style>
	button {
		all: unset;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 6px;
		height: 2rem;
		aspect-ratio: 1/1;
		border: 2px solid black;
		border-radius: 50%;
		margin-left: 1rem;
		z-index: 1;
	}
	button div {
		display: block;
		position: relative;
		height: 2px;
		width: 20px;
		border-radius: 1px;
		background-color: black;
	}
	#menu {
		position: fixed;
		top: 0;
		right: -110vw;
		width: 100%;
		height: 100dvh;
		background-color: white;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5rem;
		border-left: 5px solid black;
		transition: 0.5s;
	}

	#menu img {
		display: none;
		width: 20rem;
		height: 25rem;
		object-fit: cover;
		border: 4px solid black;
		border-radius: 8px;
	}
	#menu img.home {
		rotate: 5deg;
	}
	#menu img.work {
		rotate: -6deg;
	}
	#menu img.blog {
		rotate: 3deg;
	}
	#menu img.contact {
		rotate: -8deg;
	}
	#menu .active {
		display: block;
	}
	ul {
		list-style: none;
		font-size: clamp(3rem, 7vw, 7rem);
	}
	ul li {
		line-height: 100%;
	}
	ul li:hover {
		text-decoration: underline;
	}

	@media screen and (max-width: 800px) {
		#menu {
			justify-content: start;
			align-items: start;
			padding: 10rem 0 0 1rem;
		}
		#menu img {
			display: none !important;
		}
	}
</style>
