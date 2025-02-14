import { MenuPrimary } from "@/options/Menu";
import { SiteLogo, SiteName } from "@/options/SiteIdentity";
import Image from "next/image";

export default function SiteHeader({ theme }) {
  return (
    <div className="w-full">
      <div className="w-full max-w-7xl mx-auto p-6 flex">
        <div>
          <Image src={SiteLogo(theme)} height={40} width={120} alt={SiteName} />
        </div>
        <div>
          {MenuPrimary.map((item, idx) => (
            <div key={idx}>{item.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
