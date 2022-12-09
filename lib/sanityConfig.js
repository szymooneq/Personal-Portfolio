import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET,
  apiVersion: "2022-10-25",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
