import { services_data } from "@/data/services.data";

export default async function DesignAppraisalPage({ params }) {
  const { locale } = await params;
  const content =
    services_data.design_appraisal[locale] ??
    services_data.design_appraisal.vi;

  return (
    <article>
      <div className="container">
        <h1>{content.title}</h1>
      </div>
    </article>
  );
}
