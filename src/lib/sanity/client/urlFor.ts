import imageUrlBuilder from '@sanity/image-url';
import { client } from './sanity.client';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
	return builder.image(source);
}

export default urlFor;
