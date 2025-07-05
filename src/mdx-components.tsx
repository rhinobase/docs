import { createGenerator } from "fumadocs-typescript";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import * as TabsComponents from "fumadocs-ui/components/tabs";
import defaultMdxComponents from "fumadocs-ui/mdx";
import * as icons from "lucide-react";
import type { MDXComponents } from "mdx/types";
import { YoutubePlayer } from "./components/YoutubePlayer";

const generator = createGenerator();

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    ...TabsComponents,
    img: (props) => <ImageZoom {...(props as any)} />,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    YoutubePlayer,
    ...components,
  };
}
