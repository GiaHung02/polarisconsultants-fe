// "use client"
import clsx from "clsx";
import { contact_data } from "@/data/contact.data";
import style from "./page.module.scss";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const content = contact_data[locale] ?? contact_data.vi;

  // console.log("content: ", content);


  return (
    <article className={style.contact}>
      <div className={clsx("container", style.contact_inner)}>
        <div className={style.contact_container}>
          <div className={style.information}>
            <h1 className={style.title}>{content.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content.address1 }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.address2 }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.working_time }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.phone_number }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.email_address }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.website }}></div>
            <div><p><strong>Phó Giám Đốc: </strong>Lê Thiện Nhân</p></div>
            <div><p><strong>SĐT: </strong>0941811879</p></div>
          </div>
          <div className={style.logo}>
            <div className={style.logo_container}>
              <Image src={`/images/logo/horizontal-logo-${locale}.svg`} alt="logo" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>

      <ContactForm
        title={content.form_title}
        unavailableMessage={content.form_unavailable_message}
      />
    </article>
  );
}
