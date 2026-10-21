"use client"
import Image from "next/image";
import styles from "./CompanyOverview.module.scss";
import CountUp from 'react-countup';

export default function CompanyOverview({ content }) {
  if (!content) {
    return null;
  }

  const { eyebrow, title, description, stats } = content;

  return (
    <section
      className={styles.company_overview}
      aria-labelledby="company-overview-title"
    >
      <div className="container">
        <div className={styles.intro}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          {title && (
            <h2 className={styles.title} id="company-overview-title">
              {title}
            </h2>
          )}
          {description && (
            <p className={styles.description}>{description}</p>
          )}
        </div>

        {stats?.length > 0 && (
          <ul className={styles.stats}>
            {stats.map((stat) => (
              <li className={styles.stat} key={stat.id}>
                {stat.icon && (
                  <Image
                    className={styles.icon}
                    src={stat.icon}
                    alt=""
                    width={56}
                    height={56}
                  />
                )}
                <CountUp
                  start={0}
                  end={Number(stat.value)}
                  duration={2}
                  enableScrollSpy= {true}
                >
                  {({ countUpRef, start }) => (
                    <strong ref={countUpRef} className={styles.value}>{stat.value}</strong>
                  )}
                </CountUp>
                <span className={styles.label}>{stat.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
