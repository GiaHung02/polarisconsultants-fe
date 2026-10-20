"use client";

import Image from "next/image";
import {
  A11y,
  Autoplay,
  EffectFade,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import styles from "./Hero.module.scss";

export default function Hero({ aria_label, slides }) {
  if (!slides?.length) {
    return null;
  }

  return (
    <section className={styles.hero} aria-label={aria_label}>
      <Swiper
        className={styles.slider}
        modules={[A11y, Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        slidesPerView={1}
        loop={slides.length > 1}
        pagination={slides.length > 1 ? { clickable: true } : false}
        autoplay={
          slides.length > 1
            ? { delay: 5000, disableOnInteraction: false }
            : false
        }
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id ?? index}>
            <div className={styles.slide}>
              <Image
                className={styles.image}
                src={slide.image}
                alt={slide.alt ?? ""}
                fill
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
