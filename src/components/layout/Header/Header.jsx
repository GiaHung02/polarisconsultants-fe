import clsx from "clsx";
import style from "./Header.module.scss";
import Image from "next/image";

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
                        <div>Lĩnh Vực Kinh Doanh</div>
                        <div> Tin Tức</div>
                        <div>Phát Triển Bền Vững</div>
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
                        <div>Giới Thiệu</div>
                        <div>Dự Án</div>
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
