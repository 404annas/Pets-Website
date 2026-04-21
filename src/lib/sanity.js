import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "m951hq80", 
  dataset: "production",
  useCdn: false, // For latest data
  apiVersion: "2023-01-01", 
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  if (!source) return { url: () => "" };
  return builder.image(source);
};