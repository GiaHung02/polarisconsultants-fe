import clsx from "clsx";
import style from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.top_header}>
                <div className={clsx("container", style.top_header_container)}>
                    <div className={style.top_header_left}> Công Ty TNHH Tư Vấn Thiêt Kế Xây Dựng Polaris </div>
                    <div className={style.top_header_center}> Minh bạch - Chuyên nghiệp - Bền vững </div>
                    <div className={style.top_header_right}>
                        <div>Tuyển Dụng</div>
                        <div>Liên Hệ</div>
                        <div>VN</div>
                    </div>
                </div>
            </div>

            <div className={style.main_header}>
                <div className={clsx("container", style.main_header_container)}>
                    <div className={style.main_header_left}>
                        <Link href="#">Lĩnh Vực Kinh Doanh</Link>
                        <Link href="#">Tin Tức</Link>
                        <Link href="#">Phát Triển Bền Vững</Link>
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
                        <Link href="#">Giới Thiệu</Link>
                        <Link href="#">Dự Án</Link>
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
