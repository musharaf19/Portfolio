import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactStyles.module.css";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("Email send error:", error.text);
          setStatus("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="formGroup">
          <input type="text" name="user_name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <input type="email" name="user_email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <textarea name="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
        {status && <p>{status}</p>}
      </form>
    </section>
  );
}

export default Contact;
