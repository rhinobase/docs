import { YouTubeEmbed } from "@next/third-parties/google";
import type { ComponentPropsWithoutRef } from "react";

export type YoutubePlayer = Omit<
  ComponentPropsWithoutRef<typeof YouTubeEmbed>,
  "params"
> & { params?: string[] };

export function YoutubePlayer({
  videoid,
  params = [
    "accelerometer",
    "autoplay",
    "clipboard-write",
    "encrypted-media",
    "gyroscope",
    "picture-in-picture",
  ],
  playlabel = "Play Dezyne Ecole Video",
  style,
  ...props
}: YoutubePlayer) {
  return (
    <YouTubeEmbed
      {...props}
      videoid={videoid}
      playlabel={playlabel}
      params={params.join(";")}
      style={`max-width:100%;background-image:url('https://i.ytimg.com/vi/${videoid}/maxresdefault.jpg');`}
    />
  );
}
