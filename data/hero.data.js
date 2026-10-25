const images = [
  {
    id: 1,
    image: "/images/hero-image-1.jpg",
  },
  {
    id: 2,
    image: "/images/hero-image-2.jpg",
  },
  {
    id: 3,
    image: "/images/hero-image-3.jpg",
  },
  {
    id: 4,
    image: "/images/hero-image-4.jpg",
  },
];

export const hero_data = {
  vi: {
    aria_label: "Trình chiếu hình ảnh dự án",
    slides: images.map((image, index) => ({
      ...image,
      alt: `Hình ảnh dự án ${index + 1}`,
    })),
  },
  en: {
    aria_label: "Project image carousel",
    slides: images.map((image, index) => ({
      ...image,
      alt: `Project image ${index + 1}`,
    })),
  },
};
