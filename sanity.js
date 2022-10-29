import imageUrlBuilder from '@sanity/image-url';
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "539pofpk",
  dataset: "production",
  apiVersion: "2022-10-25",
  useCdn: false
});

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
