import React from "react";
import styles from "./Contato.module.css";
import foto from "../../assets/telefone.jpg";
import Head from "../Head/Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Loja | Contato" description="Entre em contato" />
      <img src={foto} alt="Telefone" />
      <div>
        <h1>Entre em contato</h1>
        <ul>
          <li>example@example.com</li>
          <li>19 9 87566 0606</li>
          <li>Rua aqui perto</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
