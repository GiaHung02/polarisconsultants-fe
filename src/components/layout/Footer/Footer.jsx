import Image from "next/image";
import Link from "next/link";
import { footer_data } from "@/data/footer.data";
import styles from "./Footer.module.scss";

export default function Footer({ locale = "vi" }) {
  const content = footer_data[locale] ?? footer_data.vi;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer_container}`}>
        <div className={styles.footer_content}>
          <div className={styles.brand}>
            <Link
              className={styles.logo}
              href={`/${locale}`}
              aria-label={`${content.company_name} - ${content.navigation[0].name}`}
            >
              <Image
                src="/images/logo.svg"
                alt="Polaris"
                width={78}
                height={101}
              />
            </Link>
            <p className={styles.company_name}>{content.company_name}</p>
            <p className={styles.description}>{content.description}</p>
          </div>

          <nav aria-label={content.navigation_title}>
            <h2 className={styles.column_title}>{content.navigation_title}</h2>
            <ul className={styles.link_list}>
              {content.navigation.map((item) => (
                <li key={item.id}>
                  {item.href !== undefined ? (
                    <Link
                      className={styles.footer_link}
                      href={`/${locale}${item.href}`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span className={styles.pending_link}>{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={styles.column_title}>{content.services_title}</h2>
            <ul className={styles.service_list}>
              {content.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className={styles.contact}>
            <p>{content.phone_number}</p>
            <p>{content.email_address}</p>
            <p>{content.contact1}</p>
            <p>{content.contact2}</p>
          </div>
        </div>

        <div className={styles.footer_bottom}>
          <p>© Polaris Consultants. {content.copyright}</p>
          <p className={styles.tagline}>Polaris Consultants</p>
        </div>
      </div>
    </footer>
  );
}
