import defaultMdxComponents from "fumadocs-ui/mdx";
import * as ObsidianComponents from "fumadocs-obsidian/ui";
import type { MDXComponents } from "mdx/types";

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...ObsidianComponents,
    ...components,
  };
}
