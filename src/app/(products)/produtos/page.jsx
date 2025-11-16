import { ProductsContent } from "@/components/products";
import { getProdutos } from "@/lib/vagas";



export const metadata = {
  title: "Delicia",
  description: "delicia",
  author: "",
  icons: {
    icon: "/",
  },
};
;


  const ProductsPage = async () => {
  const vagas = (await getProdutos()) || [];
  
    return (
      <section className="all-content">
        <main className="content-page">
          <ProductsContent vagas={vagas} />
        </main>
      </section>
    );
  }
  
  export default ProductsPage;