import clsx from "clsx";
import style from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { header_data } from "@/data/header.data";

export default function Header({ locale }) {
    const content = header_data[locale] ?? header_data.vi;
    const { home_label, menu_label, top_header, main_header } = content;
    const is_english = locale === "en";
    const current_language = is_english
        ? { name: "English", icon: "/images/language/en.svg", href: "/en" }
        : { name: "Tiếng Việt", icon: "/images/language/vn.svg", href: "/vi" };
    const alternative_language = is_english
        ? { name: "Tiếng Việt", icon: "/images/language/vn.svg", href: "/vi" }
        : { name: "English", icon: "/images/language/en.svg", href: "/en" };
    const render_categories = (categories) =>
        categories.map((category) => (
            <div className={style.main_header_category} key={category.id}>
                <Link href={category.slug}>{category.name}</Link>
                {category.subcategories.length > 0 && (
                    <ul className={style.subcategory_list}>
                        {category.subcategories.map((subcategory) => (
                            <li key={subcategory.id}>
                                <Link href={subcategory.slug}>{subcategory.name}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        ));

    return (
        <header className={style.header}>
            <div className={style.top_header}>
                <div className={clsx("container", style.top_header_container)}>
                    <div className={style.top_header_left}>{top_header.company_name}</div>
                    <div className={style.top_header_center}>{top_header.slogan}</div>
                    <div className={style.top_header_right}>
                        {top_header.links.map((link) => (
                            <Link key={link.id} href={link.slug}>
                                {link.name}
                            </Link>
                        ))}
                        <div className={style.language_selector}>
                            <Link
                                className={style.language_link}
                                href={current_language.href}
                                aria-label={current_language.name}
                            >
                                <Image
                                    src={current_language.icon}
                                    alt=""
                                    width={24}
                                    height={24}
                                    unoptimized
                                />
                            </Link>
                            <ul className={style.language_list}>
                                <li>
                                    <Link
                                        className={style.language_link}
                                        href={alternative_language.href}
                                        aria-label={alternative_language.name}
                                    >
                                        <Image
                                            src={alternative_language.icon}
                                            alt=""
                                            width={24}
                                            height={24}
                                            unoptimized
                                        />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.main_header}>
                <div className={clsx("container", style.main_header_container)}>
                    <div className={style.main_header_left}>
                        {render_categories(main_header.left)}
                    </div>
                    <div className={style.main_header_center}>
                        <Link href={`/${locale}`} aria-label={home_label}>
                            <Image
                                src="/images/logo.svg"
                                alt="Polaris"
                                width={157}
                                height={48}
                                priority
                            />
                        </Link>
                    </div>
                    <div className={style.main_header_right}>
                        {render_categories(main_header.right)}
                    </div>
                    <button
                        className={style.main_header_menu}
                        type="button"
                        aria-label={menu_label}
                    >
                        <Image
                            src="/icons/hamburger-menu.svg"
                            alt=""
                            width={24}
                            height={24}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}
