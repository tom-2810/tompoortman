<script>
	import { CardTitle, CardSubtitle } from '$lib/index.js';

	export let blog, inOverview;

	let date =
		blog.last_publication_date != undefined
			? blog.last_publication_date.split('-')
			: blog.primary.blog.last_publication_date;

	let year = date[0];
	let month = date[1];
	let day = date[2].slice(0, 2);
	day = day[0] == 0 ? day[1] : day;

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	let fullMonth = monthNames[month - 1];
</script>

<a href="/blog/{blog.uid}">
	<section>
		<div class="colored-top" style="background-color: {blog.data.color};">
			<p>Read</p>
		</div>
		<div>
			{#if inOverview}
				<h2>
					<CardTitle text={blog.data.title} />
				</h2>
			{:else}
				<h3>
					<CardTitle text={blog.data.title} />
				</h3>
			{/if}
			<CardSubtitle text={day + ' ' + fullMonth + ', ' + year} />
		</div>
	</section>
</a>

<style>
	a {
		display: block;
		width: fit-content;
	}
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 22rem;
		width: 20rem;
		border: 2px solid #202020;
		border-radius: 6px;
		background-color: white;
		transition: 0.2s;
		/* border-bottom: 6px solid #202020; */
	}
	section:hover {
		background-color: rgb(250, 250, 250);
		transform: translateY(-16px);
		transition: 0.1s;
	}
	section > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
		padding: 1rem;
	}
	.colored-top {
		display: flex;
        flex-direction: row;
		justify-content: end;
		align-items: center;
		height: 4rem;
		padding: 0 1rem;
		border-radius: 4px 4px 0px 0px;
		border-bottom: 2px solid #202020;
	}
	.colored-top > p {
		padding: 0.5rem 1rem;
		border: 1px solid #202020;
		border-radius: 3px;
		background-color: white;
	}
</style>
