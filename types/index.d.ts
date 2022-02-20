import { MdxNode } from "next-mdx/server";

type Post = MdxNode<{
  title: string;
  excerpt?: string;
  category?: string;
  date?: string;
}>;
