import Link from "next/link";
import Image from "next/image";
import style from "./Navigator.module.css";

export function Navigator({ links }) {
  const logocampomillary = {
    display: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    maxWidth: "100vw",
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    backgroundImage:
      "linear-gradient(rgba(4, 9, 30, 0.7), rgba(4, 9, 30, 0.7))",
  };
  return (
    <>
      <nav className={style.nav}>
        <a href="index.html">
          <Image
            src="/images/logito.png"
            priority
            width={150}
            height={150}
            alt="logo campo millary"
          />
        </a>
        <div className={style.nav_links} id="navLinks">
          <i className="fa fa-times" />
          <ul>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <i className="fa fa-bars" />
      </nav>
      <section className={style.header}>
        <Image
          className={style.backgroundcampomillary}
          src="/images/domoinicio.jpg"
          priority
          width={3605}
          height={2767}
          alt="domocm"
        />
      </section>
    </>
  );
}
