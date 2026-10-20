import { Suspense } from "react";
import { featured_projects_data } from "@/data/featured-projects.data";
import { hero_data } from "@/data/hero.data";
import FeaturedProjects from "@/src/components/sections/FeaturedProjects/FeaturedProjects";
import Hero from "@/src/components/sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Hero slides={hero_data} />
      </Suspense>
      <Suspense fallback={null}>
        <FeaturedProjects projects={featured_projects_data} />
      </Suspense>
    </>
  );
}
