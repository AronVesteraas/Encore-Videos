import Image from "next/image";
import logo from "@/public/assets/encore-logo.png";

export default function Logo({ size = 34 }: { size?: number }) {
  return (
    <Image
      src={logo}
      alt="Encore Videos logo"
      width={size}
      height={size}
      priority
      style={{ width: size, height: size }}
    />
  );
}
