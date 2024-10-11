import styles from "./page.module.css";
import Dessert from "../../../public/imgs/homepage/dessert";
import NaturalFood from "../../../public/imgs/homepage/naturalFood";
import Vegetable from "../../../public/imgs/homepage/vegetable";
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <section>
        <h1>Welcome to my gastronomy</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolorem ratione laudantium voluptates ex, tempora ullam reiciendis
          mollitia, aliquid voluptas nisi hic numquam. Dolores nam officiis
          ducimus praesentium doloremque. Beatae.
        </p>
      </section>

      <section className={styles.foodSection}>
        <div>
          <i>
            <NaturalFood />
          </i>
          <h4>Excellence in Every Life</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            deserunt! Quasi, nisi. Eveniet, esse odit.
          </p>
        </div>

        <div>
          <i>
            <Vegetable />
          </i>
          <h4>Excellence in Every Life</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            deserunt! Quasi, nisi. Eveniet, esse odit.
          </p>
        </div>

        <div>
          <i>
            <Dessert />
          </i>
          <h4>Taste for everyone</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            deserunt! Quasi, nisi. Eveniet, esse odit.
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <h1>Stay Updated!</h1>
        <p>
          Enter the world of My Gastronomy by following us on social media.
          You'll always be updated on our culinary creations, special events,
          and gourmet surprises. Don't miss out on a single bite!
        </p>
        <div className={styles.socialButtonsContainer}>
          <button className={styles.socialButton}>
            <FaInstagram /> Instagram
          </button>
          <button className={styles.socialButton}>
            <FaFacebookSquare /> Facebook
          </button>
          <button className={styles.socialButton}>
            <FaWhatsapp /> Whatsapp
          </button>
          <button className={styles.socialButton}>
            <FaMapMarkerAlt />
            Location
          </button>
        </div>
      </section>
    </div>
  );
}
