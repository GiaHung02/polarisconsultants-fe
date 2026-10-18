import { useTranslations } from 'next-intl';
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      </main>
    </div>
  );
}
