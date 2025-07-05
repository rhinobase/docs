import Link from "next/link";
import Logo from "@/components/Logo";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center">
      <Logo />
      <h2 className="m-2 text-lg font-semibold">
        The MCP Development Platform
      </h2>
      <p className="text-fd-muted-foreground">
        You can open{" "}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{" "}
        and see the documentation.
      </p>
    </main>
  );
}
