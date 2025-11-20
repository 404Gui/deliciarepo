import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";
import { Wave } from "@/components/common/waves";

export const SectionThreeProductShow = () => {
   const cards = [
    {
      icon: "/produtos/pote-creme-500.png",
      title: "Delícia com creme de leite",
      text: "A Delícia com creme de leite traz uma explosão de sabor e muita cremosidade.",
      slug: "delicia-com-creme-de-leite",
    },
    {
      icon: "/produtos/pote-supreme-500.png",
      title: "Delícia Supreme",
      text: "A Delícia Supreme é a margarina amanteigada feita com creme de leite.",
      slug: "delicia-supreme",
    },
    {
      icon: "/produtos/pote-ervas-500.png",
      title: "Delícia Toque de Chef com Ervas Aromáticas",
      text: "A margarina Delícia Toque de Chef com Ervas Aromáticas é feita com pedacinhos de ervas, de verdade, acredita?",
      slug: "delicia-toque-de-chef-com-ervas-aromaticas",
    },
    {
      icon: "/produtos/pote-alho-500.png",
      title: "Delícia Toque de Chef com Alho e Cebola",
      text: "A margarina Delícia Toque de Chef com Alho e Cebola é feita com pedacinhos de alho e cebola e, de verdade, sabia?",
      slug: "delicia-toque-de-chef-com-alho-e-cebola",
    },
  ]

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
          {cards.map((card) => (
            <Link className={styles.productCardLink} href={`/produtos/${card.slug}`} key={card.slug}>
              <div className={styles.productCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    quality={100}
                    className={styles.productImage}
                  />
                </div>

                <h3 className={styles.productTitle}>{card.title}</h3>
                <p className={styles.productText}>{card.text}</p>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
};
