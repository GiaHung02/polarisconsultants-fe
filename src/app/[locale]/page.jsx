import { Suspense } from "react";
import { hero_data } from "@/data/hero.data";
import Hero from "@/src/components/sections/Hero/Hero";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Hero slides={hero_data} />
    </Suspense>
  );
}
