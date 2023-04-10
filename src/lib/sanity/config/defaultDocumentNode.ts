import { DefaultDocumentNodeResolver } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';

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
						url: (doc: any) =>
							doc?.slug?.current
								? `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/preview?slug=/projects/${doc.slug.current}`
								: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/preview`
					})
					.title('Preview')
			]);
		default:
			return S.document().views([S.view.form()]);
	}
};
