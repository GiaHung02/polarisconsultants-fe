import { career_data } from "@/data/career.data";
import style from "../team/page.module.scss";

export default async function CareerPage({ params }) {
  const { locale } = await params;
  const content = career_data[locale] ?? career_data.vi;

  return (
    <article className={style.team}>
      <div className="container">
        <header className={style.intro}>
          <p className={style.eyebrow}>{content.eyebrow}</p>
          <h1 className={style.title}>{content.title}</h1>
          <p className={style.description}>{content.description}</p>
        </header>
      </div>
    </article>
  );
}
