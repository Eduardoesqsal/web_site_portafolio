import { CompanyContact } from "@/components/sections/company-contact";
import { CompanyHero } from "@/components/sections/company-hero";
import { CompanyPortfolio } from "@/components/sections/company-portfolio";
import { CompanyServices } from "@/components/sections/company-services";

export default function HomePage() {
  return (
    <main id="contenido">
      <CompanyHero />
      <CompanyServices />
      <CompanyPortfolio />
      <CompanyContact />
    </main>
  );
}
