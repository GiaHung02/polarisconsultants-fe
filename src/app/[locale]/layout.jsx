import { Manrope } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/src/i18n/routing";
import "../../../styles/global.scss";
import Header from "@/src/components/layout/Header/Header";
import Footer from "@/src/components/layout/Footer/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Polaris",
  description: "Polaris Consultants",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  return (
    <html lang={locale} className={`${manrope.className}`}>
      <body>
        <NextIntlClientProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
