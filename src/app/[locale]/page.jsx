import { Suspense } from "react";
import { company_overview_data } from "@/data/company-overview.data";
import { featured_projects_data } from "@/data/featured-projects.data";
import { hero_data } from "@/data/hero.data";
import CompanyOverview from "@/src/components/sections/CompanyOverview/CompanyOverview";
import FeaturedProjects from "@/src/components/sections/FeaturedProjects/FeaturedProjects";
import Hero from "@/src/components/sections/Hero/Hero";

export default async function Home({ params }) {
  const { locale } = await params;
  const hero_content = hero_data[locale] ?? hero_data.vi;
  const featured_projects_content =
    featured_projects_data[locale] ?? featured_projects_data.vi;
  const company_overview_content =
    company_overview_data[locale] ?? company_overview_data.vi;

  return (
    <>
      <Suspense fallback={null}>
        <Hero
          aria_label={hero_content.aria_label}
          slides={hero_content.slides}
        />
      </Suspense>
      <Suspense fallback={null}>
        <FeaturedProjects projects={featured_projects_content} />
      </Suspense>
      <CompanyOverview content={company_overview_content} />
    </>
  );
}
