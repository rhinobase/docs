import Image from "next/image";
import LogoImage from "../../public/logo.png";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={LogoImage} alt="HonoHub Logo" width={20} />
      <h1 className="text-xl">HonoHub</h1>
    </div>
  );
}
