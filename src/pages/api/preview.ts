import { NextApiRequest, NextApiResponse } from 'next';

export default function preview(req: NextApiRequest, res: NextApiResponse) {
	if (!req.query.slug) {
		return res.status(401).json({ message: 'No slug' });
	}

	res.setPreviewData({});
	res.writeHead(307, {
		Location: `${process.env.NEXT_PUBLIC_VERCEL_URL}/${req.query.slug}`
	});
	res.end();
}
