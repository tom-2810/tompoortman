import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const page = await client.getSingle('home', {
		fetchLinks: ['project.title', 'project.client', 'project.image', 'project.color']
	});
	const blogs = await client.getAllByType('blog', {
		limit: 3,
		orderings: {
			field: 'document.last_publication_date',
			direction: 'desc'
		}
	});

	return { page: page.data, blogs: blogs };
}
