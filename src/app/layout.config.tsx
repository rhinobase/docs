import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { FaBluesky, FaXTwitter } from "react-icons/fa6";
import Logo from "@/components/Logo";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Logo />,
  },
  links: [
    {
      type: "icon",
      icon: <FaXTwitter />,
      text: "X",
      url: "https://x.com/hono_hub",
    },
    {
      type: "icon",
      icon: <FaBluesky />,
      text: "BlueSky",
      url: "https://bsky.app/profile/honohub.dev",
    },
    // {
    //   type: "icon",
    //   icon: <FaDiscord />,
    //   text: "Discord",
    //   url: "https://discord.gg/3fWqvErPP5",
    // },
  ],
  githubUrl: "https://github.com/hono-hub",
};
