import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image
            src="/lorem-logo.png"
            alt="Lorem ipsum"
            width={120}
            height={60}
          />
        </div>

        <nav className={styles.footerMenu}>
          <Link href="/home">Home</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/filiais">Receitas</Link>
          <Link href="/sobre">Nossa História</Link>
          <Link href="/trabalhe-conosco">Fale Conosco</Link>
        </nav>
        

        <div className={styles.footerSocial}>
          <Link href="#">
            <Image
              src="/icones/iLinkedin.png"
              alt="LinkedIn"
              width={45}
              height={45}
            />
          </Link>

          <Link href="#">
            <Image
              src="/icones/iInstagramm.png"
              alt="Instagram"
              width={38}
              height={38}
            />
          </Link>

          <Link href="#">
            <Image
              src="/icones/iWhats.png"
              alt="WhatsApp"
              width={29}
              height={29}
            />
          </Link>
        </div>
      </div>

      <hr className={styles.footerDivider} />

      <div className={styles.footerCopy}>
        © Lorem ipsum dolor sit amet — Lorem ipsum dolor — 2023
      </div>
    </footer>
  );
};
