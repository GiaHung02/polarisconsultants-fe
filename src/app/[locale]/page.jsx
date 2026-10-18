import { useTranslations } from 'next-intl';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>{t('title')}</h1>
        <p>xinchao</p>
      </main>
    </div>
  );
}
