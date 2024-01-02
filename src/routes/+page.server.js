import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const page = await client.getSingle('home', {
		fetchLinks: ['project.title', 'project.client', 'project.image']
	});
	// const blogs = await client.getAllByType('blog');

	return { page: page.data };
}
