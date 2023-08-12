import { definePreview } from 'next-sanity/preview'
import { dataset, projectId } from '@/lib/sanity/client/sanity.client'

if (!projectId || !dataset) {
	throw new Error(`Missing projectId or dataset. Check your sanity.json or .env`)
}

export const useSanityPreview = definePreview({ projectId, dataset })
