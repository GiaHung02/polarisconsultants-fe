import clsx from "clsx";
import { introduction_data } from "@/data/introduction.data";
import style from "./page.module.scss";

export default async function IntroductionPage({ params }) {
  const { locale } = await params;
  const content = introduction_data[locale] ?? introduction_data.vi;

  return (
    <article className={style.introduction}>
      <div className={clsx("container", style.introduction_inner)}>
        <div className={style.hero}>
          <h1 className={style.page_title}>{content.title}</h1>
          <h2 className={style.welcome}>{content.welcome}</h2>
          <div className={style.introductory_copy}>
            {content.introductory_paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <section
          className={style.company}
          aria-labelledby="company-information-title"
        >
          <h2
            id="company-information-title"
            className={style.company_title}
          >
            {content.company.title}
          </h2>
          <ul className={style.fact_list}>
            {content.company.facts.map((fact) => (
              <li className={style.fact} key={fact.id}>
                <strong>{fact.label}</strong>
                <span>{fact.value}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className={style.section_list}>
          {content.sections.map((section) => {
            const List = section.ordered ? "ol" : "ul";
            const section_title_id = `${section.id}-title`;

            return (
              <section
                className={style.content_section}
                key={section.id}
                aria-labelledby={section_title_id}
              >
                <h2 className={style.section_title} id={section_title_id}>
                  {section.title}
                </h2>
                <List
                  className={clsx(style.item_list, {
                    [style.ordered_list]: section.ordered,
                  })}
                >
                  {section.items.map((item) => (
                    <li className={style.item} key={item.id}>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </List>
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}
