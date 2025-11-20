import styles from "./styles.module.css";
import { SectionTitle } from "@/components/common/section-title";

export const SectionTwoTop = () => {
  const cards = [
    {
      icon: "/produtos/primor_original.png",
      title: "Margarina Primor 500g",
      text: "A margarina perfeita para forno, fogão e receitas do dia a dia.",
      slug: "primor-original",
    },
    {
      icon: "/produtos/primor_balde.png",
      title: "Margarina Primor Balde 3kg",
      text: "Ideal para uso culinário intenso, com sabor e performance profissional.",
      slug: "primor-balde",
    },
    {
      icon: "/produtos/primor_gordura.png",
      title: "Gordura Vegetal 500g",
      text: "Gordura vegetal ideal para massas, frituras e usos culinários diversos.",
      slug: "primor-gordura-vegetal",
    },
  ];

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <SectionTitle width="380px">A cremosa de Verdade</SectionTitle>

        <p className={styles.description}>
          Todas podem ser cremosas, mas só Delícia é cremoooosa DE VERDADE.
          Somos a única margarina com creme de leite do mercado, que além de ter
          uma textura ultra-mega-blaster cremosa, é mais fácil de espalhar e
          muito mais indulgente para você.
        </p>
      </div>
    </section>
  );
};
