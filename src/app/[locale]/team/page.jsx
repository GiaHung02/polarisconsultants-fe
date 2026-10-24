import { team_data } from "@/data/team.data";
import style from "./page.module.scss";

export default async function TeamPage({ params }) {
  const { locale } = await params;
  const content = team_data[locale] ?? team_data.vi;

  return (
    <article className={style.team}>
      <div className="container">
        <header className={style.intro}>
          <p className={style.eyebrow}>{content.eyebrow}</p>
          <h1 className={style.title}>{content.title}</h1>
          <p className={style.description}>{content.description}</p>
        </header>

        {/* <ul className={style.member_grid}>
          {content.members.map((member, index) => (
            <li className={style.member_card} key={member.id}>
              <div className={style.portrait} aria-hidden="true">
                <span>{member.initials}</span>
                <span className={style.card_number}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={style.member_information}>
                <h2 className={style.member_name}>{member.name}</h2>
                <p className={style.member_role}>{member.role}</p>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </article>
  );
}
