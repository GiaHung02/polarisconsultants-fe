import clsx from "clsx";
import style from "./Header.module.scss";

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
            <div className={style.main_header}>Main header</div>
        </header>
    );
}
