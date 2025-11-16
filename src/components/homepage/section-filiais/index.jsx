import Image from "next/image";
import styles from "./styles.module.css";
import { FilialCard } from "@/components/filiais/filiais-card";
import { CustomSwiper } from "@/components/common/swiper";

export const SectionFiliais = async ({ filiais }) => {
  const hasFiliais = filiais && filiais.length > 0;

  const subtitleContent = hasFiliais ? (
    <>
      receitas <br />
      receitas
      <br />
      
    </>
  ) : (
    <>No momento não temos filiais cadastradas.</>
  );

  const slides = hasFiliais
    ? filiais.map((filial) => (
        <FilialCard
          key={filial.nome}
          nome={filial.nome}
          endereco={filial.endereco}
          imagem={filial.imagem?.url || "/imagem-filial.png"}
        />
      ))
    : null;

  return (
    <section className={styles.filiaisSection}>
      <Image
        src="/banners/receitas.png"
        alt="Fundo receitas"
        fill
        className={styles.backgroundImage}
        quality={100}
        priority
      />

      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* HEADER */}
          <span className={styles.tag}>
            receitas
            <div className={styles.divider}></div>
          </span>

          <h2 className={styles.title}>receitas section</h2>

          <p className={styles.subtitle}>{subtitleContent}</p>

          {hasFiliais && (
            <div className={styles.carouselWrapper}>
              <CustomSwiper
                slides={slides}
                pagination
                autoplay={true}
                autoplayDelay={3500}
                spaceBetween={24}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className={styles.filiaisSwiper}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
