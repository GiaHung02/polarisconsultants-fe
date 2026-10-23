"use client";

import clsx from "clsx";
import style from "./page.module.scss";

export default function ContactForm({ title, unavailableMessage }) {
  function handleSubmit(event) {
    event.preventDefault();
    window.alert(unavailableMessage);
  }

  return (
    <section className={style.form_section}>
      <div className="container">
        <h2 id="contact-form-title" className={style.form_title}>{title}</h2>
        <form className={style.contact_form} aria-labelledby="contact-form-title" onSubmit={handleSubmit}>
          <div className={style.form_field}>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder=" " />
            <label htmlFor="contact-name">Name</label>
          </div>

          <div className={style.form_field}>
            <input id="contact-email" name="email" type="email" autoComplete="email" placeholder=" " />
            <label htmlFor="contact-email">Email</label>
          </div>

          <div className={style.form_field}>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder=" " />
            <label htmlFor="contact-phone">Phone Number</label>
          </div>

          <div className={style.form_field}>
            <input id="contact-subject" name="subject" type="text" placeholder=" " />
            <label htmlFor="contact-subject">Subject</label>
          </div>

          <div className={clsx(style.form_field, style.message_field)}>
            <textarea id="contact-message" name="message" rows={5} placeholder=" "></textarea>
            <label htmlFor="contact-message">Message</label>
          </div>

          <button className={style.submit_button} type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}
