"use client";

import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./FeaturedProjects.module.scss";

const MAX_VISIBLE_PROJECTS = 4;

function ProjectCard({ item }) {
  const content = (
    <article className={styles.card}>
      <div className={styles.image_wrapper}>
        {item.image && (
          <Image
            className={styles.image}
            src={item.image}
            alt={item.alt ?? item.title ?? ""}
            fill
            sizes="(max-width: 576px) 82vw, (max-width: 992px) 45vw, (max-width: 1200px) 31vw, 20vw"
          />
        )}
        <div className={styles.card_content}>
          {item.title && (
            <h3 className={styles.project_title}>{item.title}</h3>
          )}
          {item.address && (
            <p className={styles.project_address}>{item.address}</p>
          )}
        </div>
      </div>
    </article>
  );

  if (!item.href) {
    return content;
  }

  return (
    <Link className={styles.card_link} href={item.href}>
      {content}
    </Link>
  );
}

export default function FeaturedProjects({ projects }) {
  const { title, description, items } = projects;
  const title_id = useId();

  if (!items?.length) {
    return null;
  }

  const has_desktop_overflow = items.length > MAX_VISIBLE_PROJECTS;

  return (
    <section id="featured-projects" className={styles.featured_projects} aria-labelledby={title_id}>
      <div className="container">
        <h2 className={styles.title} id={title_id}>
          {title}
        </h2>

        <Swiper
          className={styles.slider}
          modules={[A11y, Autoplay, Navigation]}
          slidesPerView={1.15}
          slidesPerGroup={1}
          spaceBetween={16}
          loop={has_desktop_overflow}
          autoplay={
            has_desktop_overflow
              ? {
                  delay: 3500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          navigation={has_desktop_overflow}
          watchOverflow
          breakpoints={{
            576: { slidesPerView: 2, spaceBetween: 16 },
            993: { slidesPerView: 3, spaceBetween: 24 },
            1201: {
              slidesPerView: MAX_VISIBLE_PROJECTS,
              spaceBetween: 24,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id ?? index}>
              <ProjectCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
