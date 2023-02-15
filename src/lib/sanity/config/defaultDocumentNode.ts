import Iframe from 'sanity-plugin-iframe-pane';
import { DefaultDocumentNodeResolver } from 'sanity/desk';

// TODO: add link to deploy

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
	S,
	{ schemaType }
) => {
	switch (schemaType) {
		case `projects`:
			return S.document().views([
				S.view.form(),
				S.view
					.component(Iframe)
					.options({
						url: (doc) =>
							doc?.slug?.current
								? `http://localhost:3000/api/preview?slug=/projects/${doc.slug.current}`
								: `http://localhost:3000/api/preview`
					})
					.title('Preview')
			]);
		default:
			return S.document().views([S.view.form()]);
	}
};
