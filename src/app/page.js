import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.text_box}>
        <h1>Campo Millary, hospitalidad sureña.</h1>
        <p>
          Somos un emprendimiento familiar en el corazón del campo. Ponemos en
          valor la cocina campesina-mapuche con ingredientes frescos de nuestra
          propia huerta,
          <br /> atendido personalmente por nuestros anfitriones.
        </p>
      </div>
      <h1>Home</h1>
    </main>
  );
}
