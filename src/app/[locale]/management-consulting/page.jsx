import { services_data } from "@/data/services.data";
import style from "./page.module.scss";

export default async function ManagementConsultingPage({ params }) {
  const { locale } = await params;
  const content =
    services_data.management_consulting[locale] ??
    services_data.management_consulting.vi;

  return (
    <article className={style.management_consulting}>
      <div className="container">
        <header className={style.introduction}>
          <h1 className={style.title}>{content.title}</h1>
          <p className={style.description}>{content.description}</p>
        </header>

        <ul className={style.service_list}>
          {content.services.map((service) => (
            <li className={style.service} key={service.id}>
              <h2 className={style.service_title}>{service.title}</h2>
              <p className={style.service_description}>
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
