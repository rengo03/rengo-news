import React from "react";
import Container from "react-bootstrap/Container";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <Container>
        <p className={`${styles.textcolor} text-center m-0 py-3`}>
          Rengo`s news © 2021. Toate drepturile rezervate.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
