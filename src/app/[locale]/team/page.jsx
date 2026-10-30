import { team_data } from "@/data/team.data";
import style from "./page.module.scss";

function MemberBranch({ member, childrenByParent, employeeLabel }) {
  const children = childrenByParent.get(member.id) ?? [];

  return (
    <li className={style.branch}>
      <article className={style.member_card}>
        <div className={style.member_information}>
          <h2 className={style.member_name}>{member.name}</h2>
          <p className={style.member_role}>{member.role}</p>
          <p className={style.member_degree}>{member.bachelor_degree}</p>
        </div>
      </article>

      {children.length > 0 && (
        <ul className={style.children}>
          {children.map((child) => (
            <MemberBranch
              key={child.id}
              member={child}
              childrenByParent={childrenByParent}
              employeeLabel={employeeLabel}
            />
          ))}
        </ul>
      )}

      {children.length === 0 && (
        <ul className={style.children}>
          <li className={style.branch}>
            <article className={`${style.member_card} ${style.employee_card}`}>
              <p className={style.employee_label}>{employeeLabel}</p>
            </article>
          </li>
        </ul>
      )}
    </li>
  );
}

export default async function TeamPage({ params }) {
  const { locale } = await params;
  const content = team_data[locale] ?? team_data.vi;
  const visibleMembers = content.members.filter(
    (member) => member.status !== "hidden",
  );
  const childrenByParent = new Map();

  visibleMembers.forEach((member) => {
    const parentId = member.reports_to ?? "root";
    const siblings = childrenByParent.get(parentId) ?? [];

    siblings.push(member);
    childrenByParent.set(parentId, siblings);
  });

  const rootMembers = childrenByParent.get("root") ?? [];

  return (
    <article className={style.team}>
      <div className="container">
        <header className={style.intro}>
          <p className={style.eyebrow}>{content.eyebrow}</p>
          <h1 className={style.title}>{content.title}</h1>
          <p className={style.description}>{content.description}</p>
        </header>

        <section className={style.org_chart} aria-label={content.eyebrow}>
          <ul className={style.tree_root}>
            {rootMembers.map((member) => (
              <MemberBranch
                key={member.id}
                member={member}
                childrenByParent={childrenByParent}
                employeeLabel={content.employee_label}
              />
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
