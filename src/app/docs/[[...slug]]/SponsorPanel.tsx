import Image from "next/image";
import { cn } from "@/lib/cn";

type SponsorTier = "gold" | "silver" | "bronze";

export type Sponsor = {
  name: string;
  url: string;
  image: string;
  tier: SponsorTier;
};

export default async function SponsorPanel() {
  const sponsors: Sponsor[] = [];

  const [fullSizeSponsors, smallSizeSponsors] = sponsors.reduce(
    (acc, sponsor) => {
      if (sponsor.tier === "bronze") {
        acc[1].push(sponsor);
      } else {
        acc[0].push(sponsor);
      }
      return acc;
    },
    [[], []] as [Sponsor[], (Sponsor | undefined)[]],
  );

  if (smallSizeSponsors.length % 2 === 1) {
    smallSizeSponsors.push(undefined);
  }

  return (
    <div className="space-y-1 rounded-xl overflow-hidden">
      {fullSizeSponsors.map((sponsor) => (
        <SponsorBlock key={sponsor.name} sponsor={sponsor} />
      ))}
      <div className="grid grid-cols-2 gap-1">
        {smallSizeSponsors.map((sponsor, index) => (
          <SponsorBlock key={sponsor?.name ?? index} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}

function SponsorBlock(props: { sponsor?: Sponsor }) {
  const { sponsor } = props;

  if (!sponsor)
    return <div className="p-3 bg-neutral-200 dark:bg-neutral-800" />;

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center justify-center group bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 hover:dark:bg-white transition-all",
        sponsor.tier === "gold" ? "p-5" : "p-3",
      )}
    >
      <Image
        src={sponsor.image}
        alt={sponsor.name}
        className={cn(
          "max-w-full object-contain grayscale group-hover:grayscale-0",
          sponsor.tier === "gold"
            ? "max-h-16"
            : sponsor.tier === "silver"
              ? "max-h-12"
              : "max-h-10",
        )}
        width={150}
        height={150}
      />
    </a>
  );
}
