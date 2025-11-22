import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";
import { Wave } from "@/components/common/waves";
import { getProdutos } from "@/lib/produtos";

export const SectionThreeProductShow = async () => {
   const produtos = await getProdutos()

  return (
    <section className={styles.SectionThreeProductShow}>
      <Wave direction="up" />
      <div className={styles.containerFull}>
        <div className={styles.productContainer}>
          <h2 className={styles.productTitleCall}>Nossos Produtos</h2>

          <p className={styles.descriptionProducts}>
            Texturas que ajudam a significar
          nossa origem, trazem um tom
          de criatividade e um convite a
          exploramos todas as possibilidades
          que a margarina oferece na culinária.
          </p>

        </div>
        {/* <Wave direction="down" /> */}


        <div className={styles.productsGrid}>
          {produtos.map((p) => (
            <Link
              className={styles.productCardLink}
              href={`/produtos/${p.slug}`}
              key={p.slug}
            >
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={p.imagem}
                    alt={p.nome}
                    fill
                    className={styles.productImage}
                  />
                </div>

                <h3 className={styles.productTitle}>{p.nome}</h3>
                <p className={styles.productText}>{p.descricao}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
};
