"use client";

import clsx from "clsx";
import style from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { header_data } from "@/data/header.data";

export default function Header({ locale }) {
    const [is_mobile_menu_open, set_is_mobile_menu_open] = useState(false);
    const [open_category_id, set_open_category_id] = useState(null);
    const menu_button_ref = useRef(null);
    const close_button_ref = useRef(null);
    const content = header_data[locale] ?? header_data.vi;
    const { home_label, menu_label, top_header, main_header } = content;
    const is_english = locale === "en";
    const close_menu_label = is_english ? "Close main menu" : "Đóng menu chính";
    const mobile_navigation_label = is_english
        ? "Main navigation"
        : "Điều hướng chính";
    const all_categories = [...main_header.left, ...main_header.right];
    const current_language = is_english
        ? { name: "English", icon: "/images/language/en.svg", href: "/en" }
        : { name: "Tiếng Việt", icon: "/images/language/vn.svg", href: "/vi" };
    const alternative_language = is_english
        ? { name: "Tiếng Việt", icon: "/images/language/vn.svg", href: "/vi" }
        : { name: "English", icon: "/images/language/en.svg", href: "/en" };
    useEffect(() => {
        if (!is_mobile_menu_open) {
            return undefined;
        }

        const previous_overflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        close_button_ref.current?.focus();

        const close_on_escape = (event) => {
            if (event.key === "Escape") {
                set_is_mobile_menu_open(false);
                menu_button_ref.current?.focus();
            }
        };

        document.addEventListener("keydown", close_on_escape);

        return () => {
            document.body.style.overflow = previous_overflow;
            document.removeEventListener("keydown", close_on_escape);
        };
    }, [is_mobile_menu_open]);

    useEffect(() => {
        const compact_header_query = window.matchMedia("(max-width: 1200px)");
        const close_on_desktop = (event) => {
            if (!event.matches) {
                set_is_mobile_menu_open(false);
                set_open_category_id(null);
            }
        };

        compact_header_query.addEventListener("change", close_on_desktop);

        return () => {
            compact_header_query.removeEventListener("change", close_on_desktop);
        };
    }, []);

    const close_mobile_menu = () => {
        set_is_mobile_menu_open(false);
        set_open_category_id(null);
    };

    const toggle_mobile_category = (category_id) => {
        set_open_category_id((current_id) =>
            current_id === category_id ? null : category_id,
        );
    };

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
                        ref={menu_button_ref}
                        className={style.main_header_menu}
                        type="button"
                        aria-label={menu_label}
                        aria-controls="mobile-navigation"
                        aria-expanded={is_mobile_menu_open}
                        onClick={() => set_is_mobile_menu_open(true)}
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

            <button
                className={clsx(style.mobile_menu_overlay, {
                    [style.is_open]: is_mobile_menu_open,
                })}
                type="button"
                aria-label={close_menu_label}
                tabIndex={is_mobile_menu_open ? 0 : -1}
                onClick={close_mobile_menu}
            />
            <div
                id="mobile-navigation"
                className={clsx(style.mobile_menu, {
                    [style.is_open]: is_mobile_menu_open,
                })}
                role="dialog"
                aria-label={mobile_navigation_label}
                aria-modal="true"
                aria-hidden={!is_mobile_menu_open}
            >
                <div className={style.mobile_menu_header}>
                    <Link
                        href={`/${locale}`}
                        aria-label={home_label}
                        tabIndex={is_mobile_menu_open ? 0 : -1}
                        onClick={close_mobile_menu}
                    >
                        <Image
                            src="/images/logo.svg"
                            alt="Polaris"
                            width={157}
                            height={48}
                        />
                    </Link>
                    <button
                        ref={close_button_ref}
                        className={style.mobile_menu_close}
                        type="button"
                        aria-label={close_menu_label}
                        tabIndex={is_mobile_menu_open ? 0 : -1}
                        onClick={close_mobile_menu}
                    >
                        <span aria-hidden="true" />
                    </button>
                </div>

                <nav aria-label={mobile_navigation_label}>
                    <ul className={style.mobile_navigation_list}>
                        {all_categories.map((category) => {
                            const has_subcategories = category.subcategories.length > 0;
                            const is_category_open = open_category_id === category.id;
                            const subcategory_id = `mobile-subcategory-${category.id}`;

                            return (
                                <li key={category.id}>
                                    {has_subcategories ? (
                                        <>
                                            <button
                                                className={style.mobile_category_button}
                                                type="button"
                                                aria-controls={subcategory_id}
                                                aria-expanded={is_category_open}
                                                tabIndex={is_mobile_menu_open ? 0 : -1}
                                                onClick={() =>
                                                    toggle_mobile_category(category.id)
                                                }
                                            >
                                                <span>{category.name}</span>
                                                <span
                                                    className={style.mobile_category_icon}
                                                    aria-hidden="true"
                                                />
                                            </button>
                                            <ul
                                                id={subcategory_id}
                                                className={clsx(
                                                    style.mobile_subcategory_list,
                                                    {
                                                        [style.is_open]: is_category_open,
                                                    },
                                                )}
                                            >
                                                {category.subcategories.map((subcategory) => (
                                                    <li key={subcategory.id}>
                                                        <Link
                                                            href={subcategory.slug}
                                                            tabIndex={
                                                                is_mobile_menu_open && is_category_open
                                                                    ? 0
                                                                    : -1
                                                            }
                                                            onClick={close_mobile_menu}
                                                        >
                                                            {subcategory.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <Link
                                            className={style.mobile_category_link}
                                            href={category.slug}
                                            tabIndex={is_mobile_menu_open ? 0 : -1}
                                            onClick={close_mobile_menu}
                                        >
                                            {category.name}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
