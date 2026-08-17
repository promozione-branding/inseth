import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "g22lxudk",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});
