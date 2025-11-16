import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import Link from "next/link";

const cards = [
  {
    icon: "/produtos/pote-creme-500.png",
    title: "Creme de leite",
    text: ".",
  },
  {
    icon: "/produtos/pote-creme-sal-500.png",
    title: "Creme sal",
    text: ".",
  },
  {
    icon: "/produtos/pote-ervas-500.png",
    title: "Ervas",
    text: ".",
  },
  {
    icon: "/produtos/pote-alho-500.png",
    title: "Alho",
    text: ".",
  },
  {
    icon: "/produtos/pote-supreme-500.png",
    title: "Supreme",
    text: "Supreme.",
  },
];

export const SectionPracticeAreas = () => {
  const renderedCards = cards.map((card, index) => (
    <div className={styles.card} key={index}>
      <Image
        src={card.icon}
        alt={`ícone ${card.title}`}
        width={82}
        height={82}
        className={styles.icon}
      />
      <div className={styles.textWrapper}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardText}>{card.text}</p>
      </div>
    </div>
  ));

  return (
    <section className={styles.sectionPractice}>
      <div className={styles.contentWrapper}>
        <span className={styles.tag}>
          Products section
          <div className={styles.divider}></div>
        </span>
        <h2 className={styles.title}>Products section</h2>
        <p className={styles.subtitle}>
          Products section{" "}
          <strong>Products section</strong>, Products section
          
        </p>

        <CustomSwiper
          slides={renderedCards}
          slidesPerView={1}
          spaceBetween={20}
          pagination
          mobileOnly
          fallbackClass={styles.grid}
          autoplay={true}
          className={styles.practiceSwiper}
        />

        <Link href="/areas-de-atuacao">
          <button className={styles.button}>Products section</button>
        </Link>
      </div>
    </section>
  );
};
