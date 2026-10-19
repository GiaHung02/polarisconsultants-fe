import clsx from "clsx";
import style from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { header_data } from "@/data/header.data";

export default function Header() {
    const { top_header, main_header } = header_data;

    return (
        <header className={style.header}>
            <div className={style.top_header}>
                <div className={clsx("container", style.top_header_container)}>
                    <div className={style.top_header_left}>{top_header.company_name}</div>
                    <div className={style.top_header_center}>{top_header.slogan}</div>
                    <div className={style.top_header_right}>
                        {top_header.links.map((link) => (
                            <div key={link.id}>{link.name}</div>
                        ))}
                        <div>{top_header.language}</div>
                    </div>
                </div>
            </div>

            <div className={style.main_header}>
                <div className={clsx("container", style.main_header_container)}>
                    <div className={style.main_header_left}>
                        {main_header.left.map((category) => (
                            <Link key={category.id} href={category.slug}>
                                {category.name}
                            </Link>
                        ))}
                    </div>
                    <div className={style.main_header_center}>
                        <Image
                            src="/icons/temporary-logo.svg"
                            alt="Polaris"
                            width={157}
                            height={48}
                            priority
                        />
                    </div>
                    <div className={style.main_header_right}>
                        {main_header.right.map((category) => (
                            <Link key={category.id} href={category.slug}>
                                {category.name}
                            </Link>
                        ))}
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
