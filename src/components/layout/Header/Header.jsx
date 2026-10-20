import clsx from "clsx";
import style from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { header_data } from "@/data/header.data";

export default function Header({ locale }) {
    const { top_header, main_header } = header_data;
    const is_english = locale === "en";
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
                            <Link href={is_english ? "/en" : "/vi"}>
                                {is_english ? "EN" : "VN"}
                            </Link>
                            <ul className={style.language_list}>
                                <li>
                                    <Link href={is_english ? "/vi" : "/en"}>
                                        {is_english ? "VN" : "EN"}
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
                        <Link href={`/${locale}`} aria-label="Polaris - Trang chủ">
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
                        aria-label="Mở menu chính"
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
