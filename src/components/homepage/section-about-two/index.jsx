import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAboutTwo = () => {
  return (
    <section className={styles.sectionAboutTwo}>
      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <span className={styles.tag}>
            Gente aberta a curtir o que existe de melhor.
            <div className={styles.divider}></div>
          </span>

          <p className={styles.description}>
            Falamos com pessoas que têm um apetite insaciável por delícias e um
            gosto pela vida que inspira. Aqui, convidamos todos a fazer parte
            dessa onda deliciosa afinal, não há nada tão bom que não possa virar
            uma Delícia.
          </p>

          <Link href="/sobre">
            <button className={styles.button}>CONHEÇA NOSSA HISTÓRIA</button>
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas_2.png"
            alt="imagem reservada"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};
