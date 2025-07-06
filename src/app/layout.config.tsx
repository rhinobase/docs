import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { FaBluesky, FaDiscord, FaXTwitter } from "react-icons/fa6";
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
      url: "https://x.com/rhinobaseio",
    },
    {
      type: "icon",
      icon: <FaBluesky />,
      text: "BlueSky",
      url: "https://bsky.app/profile/maditya.sh",
    },
    {
      type: "icon",
      icon: <FaDiscord />,
      text: "Discord",
      url: "https://discord.gg/4rNs6ywvtV",
    },
  ],
  githubUrl: "https://github.com/hono-hub",
};
