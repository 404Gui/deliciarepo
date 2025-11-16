import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";

export const SectionNews = async ({ novidades }) => {
  // const slides = novidades.map((news, index) => (
  //   <div key={index} className={styles.newsSlide}>
  //     <div className={styles.imageWrapper}>
  //       <Image
  //         src={news.imagem || "/delicia-default.png"}
  //         alt={news.titulo || "Delícia com creme de leite"}
  //         fill
  //         className={styles.image}
  //       />
  //     </div>
  //     <div className={styles.newsContent}>
  //       <h3 className={styles.newsTitle}>
  //         {news.titulo ||
  //           "Quando o sabor vira o jogo"}
  //       </h3>
  //       <p className={styles.newsText}>
  //         {news.texto ||
  //           "A gente acredita que nada está tão bom que não possa virar uma Delícia. Do pão quentinho àquele refogado cheinho de vontade, tudo fica cremoooso de verdade com o nosso creme de leite."}
  //       </p>
  //     </div>
  //   </div>
  // ));

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag}>VIRA DELÍCIA</span>
          <div className={styles.divider}></div>

          <h2 className={styles.title}>A CREMOOOOSA DE VERDADE</h2>

          <p className={styles.description}>
            Todas podem ser cremosas, mas só Delícia é cremoooosa DE VERDADE.
            Somos a única margarina com creme de leite do mercado, que além de
            ter uma textura ultra-mega-blaster cremosa, é mais fácil de espalhar
            e muito mais indulgente para você.
          </p>
        </div>

        <div className={styles.right}>
          {/* <CustomSwiper
            slides={slides}
            pagination={true}
            autoplay={false}
            autoplayDelay={8000}
            className={styles.newsSwiper}
          /> */}
        </div>
      </div>
    </section>
  );
};
