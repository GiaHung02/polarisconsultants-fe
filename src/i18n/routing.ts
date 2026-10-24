import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['vi', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'vi',

  // Keep one internal App Router route while exposing locale-specific URLs.
  pathnames: {
    '/': '/',
    '/introduction': {
      vi: '/gioi-thieu',
      en: '/introduction'
    },
    '/contact': {
      vi: '/lien-he',
      en: '/contact'
    },
    '/team': {
      vi: '/doi-ngu',
      en: '/team'
    },
    '/design-consulting': {
      vi: '/tu-van-thiet-ke',
      en: '/design-consulting'
    },
    '/design-appraisal': {
      vi: '/tham-tra-thiet-ke',
      en: '/design-appraisal'
    },
    '/management-consulting': {
      vi: '/tu-van-quan-ly',
      en: '/management-consulting'
    }
  }
});
