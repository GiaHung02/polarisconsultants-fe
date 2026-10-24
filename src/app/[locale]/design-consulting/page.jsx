import { services_data } from "@/data/services.data";

export default async function DesignConsultingPage({ params }) {
  const { locale } = await params;
  const content =
    services_data.design_consulting[locale] ??
    services_data.design_consulting.vi;

  return (
    <article>
      <div className="container">
        <h1>{content.title}</h1>
      </div>
    </article>
  );
}
