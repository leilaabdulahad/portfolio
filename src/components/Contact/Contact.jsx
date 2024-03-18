import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"
import contact from "../../data/contact.json"

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <p className={styles.contactText}>
        Feel free to reach out to me for any inquiries. You can contact me through the following channels:
      </p>
      <ul className={styles.links}>
        {contact.map((info, index) => (
          <li key={index} className={styles.link}>
            <a href={info.href}>
              <img className={styles.contactIcon} src={getImageUrl(info.src)} alt={info.alt} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Contact