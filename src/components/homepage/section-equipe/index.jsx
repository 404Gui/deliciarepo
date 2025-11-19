import Image from "next/image";
import styles from "./styles.module.css";
import { getDicas } from "@/lib/dicas";
import { SectionDicas } from "../section-dicas";

const dicas = await getDicas();

export const SectionEquipe = () => {
  return (
    <section className={styles.equipeSection}>
      <div className={styles.trabalheConosco}>
        <div className={styles.text}>
          <h3 className={styles.tag}>
            Gente aberta a curtir o que existe de melhor.
          </h3>
          <p className={styles.textDescription}>
            Falamos com pessoas que têm um apetite insaciável por delícias e um
            gosto pela vida que inspira. Aqui, convidamos todos a fazer parte
            dessa onda deliciosa afinal, não há nada tão bom que não possa virar
            uma Delícia.
          </p>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/genericas/Chamadas_2.png"
            alt="Delícia - equipe"
            width={600}
            height={400}
            className={styles.image}
            quality={100}
          />
        </div>
      </div>
      <SectionDicas dicas={dicas} />
    </section>
  );
};
