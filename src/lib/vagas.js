// app/(onde-estiver)/getProdutos.js

export async function getProdutos() {
  await new Promise((r) => setTimeout(r, 200));

  return [
    {
      tituloProduto: "Delícia Supreme 500g",
      imagem: "/produtos/pote-supreme-500.png",

      sobre: `
A Delícia Supreme é a margarina amanteigada feita com creme de leite. 
Se você quer fazer um prato digno de reality show, essa margarina vai te surpreender 
em performance e sabor! Explore todas as possibilidades que a Delícia Supreme oferece, 
do café da manhã ao jantar. Deixe o seu dia ainda mais Delícia.`,

      ingredientes: `
Óleos vegetais líquidos e interesterificados (contém óleo de soja*), água, sal, 
leite desnatado reconstituído, creme de leite em pó, emulsificantes: mono e 
diglicerídeos de ácidos graxos e lecitina de soja*, conservador sorbato de potássio, 
acidulante ácido láctico, aromatizantes, antioxidantes: BHT, EDTA cálcio dissódico 
e ácido cítrico e corante natural de urucum e cúrcuma.

NÃO CONTÉM GLÚTEN.
ALÉRGICOS: CONTÉM DERIVADOS DE SOJA E LEITE. CONTÉM LACTOSE.
`,

      informacoesNutricionais: `
Porção de 10g (1 colher de sopa)

Valor energético: 74 kcal = 311 kJ — VD 4%
Carboidratos: 0 g — VD 0%
Proteínas: 0 g — VD 0%
Gorduras totais: 8,2 g — VD 15%
Gorduras saturadas: 2,4 g — VD 11%
Gorduras trans: 0 g
Fibra alimentar: 0 g — VD 0%
Sódio: 51 mg — VD 2%

*% Valores Diários com base em 2.000 Kcal.
`,

    },
  ];
}
