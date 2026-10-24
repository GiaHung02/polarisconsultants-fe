import { services_data } from "@/data/services.data";

export default async function ManagementConsultingPage({ params }) {
  const { locale } = await params;
  const content =
    services_data.management_consulting[locale] ??
    services_data.management_consulting.vi;

  return (
    <article>
      <div className="container">
        <h1>{content.title}</h1>
      </div>
    </article>
  );
}
