"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export const ProductsContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const sobreProduto = `
A Delícia Supreme é a margarina amanteigada feita com creme de leite. Então, se você quer fazer um prato digno de reality show, essa margarina vai te surpreender em performance e sabor, pode acreditar! Chegou a hora de explorar todas as possibilidades que a Delícia Supreme pode oferecer, do café da manhã ao jantar. Deixe o seu dia ainda mais Delícia.
`;

  const informacoesNutricionais = `
Porção de 10g (1 colher de sopa) referente à versão com sal.

Valor energético: 74 kcal = 311 kJ — VD 4%
Carboidratos: 0 g — VD 0%
Proteínas: 0 g — VD 0%
Gorduras totais: 8,2 g — VD 15%
Gorduras saturadas: 2,4 g — VD 11%
Gorduras trans: 0 g — VD **
Fibra alimentar: 0 g — VD 0%
Sódio: 51 mg — VD 2%

*% Valores Diários de referência com base em uma dieta de 2.000 Kcal.  
** VD não estabelecidos.
`;

  const ingredienteLista = `
Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, sal, 
leite desnatado reconstituído, creme de leite em pó, emulsificantes: mono e 
diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de 
potássio, acidulante ácido láctico, aromatizantes, antioxidantes: BHT, EDTA cálcio 
dissódico e ácido cítrico e corante natural de urucum e cúrcuma.

NÃO CONTÉM GLÚTEN.  
ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE. CONTÉM LACTOSE.
`;

  const accordions = [
    {
      titulo: "Sobre o produto",
      conteudo: sobreProduto,
    },
    {
      titulo: "Ingredientes",
      conteudo: ingredienteLista,
    },
    {
      titulo: "Informações nutricionais",
      conteudo: informacoesNutricionais,
    },
  ];

  return (
    <section className={styles.careersSection}>
      <h1 className={styles.title}>Delícia Supreme 500g</h1>

      <p className={styles.subtitle}>
        A cremosa de verdade feita com creme de leite, perfeita para qualquer
        hora do dia.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/produtos/pote-supreme-500.png"
            alt="Delícia Supreme 500g"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.vagasTitle}>Informações do produto</h2>

          {accordions.map((item, index) => (
            <div key={index} className={styles.vagaBox}>
              <button
                className={styles.vagaHeader}
                onClick={() => toggleAccordion(index)}
              >
                {item.titulo}
                <span className={styles.icon}>
                  {activeIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {activeIndex === index && (
                <div className={styles.vagaContent}>
                  <div className={styles.vagaSection}>
                    <div className={styles.nutriContent}>
                      {item.titulo === "Informações nutricionais" ? (
                        <pre className={styles.nutriTable}>{item.conteudo}</pre>
                      ) : (
                        <pre className={styles.preBlock}>{item.conteudo}</pre>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
