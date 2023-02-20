import React from "react";
import styles from "@/components/Letter/Letter.module.css";

interface Letter {
  letter: string;
}

const Letter = ({ letter }: Letter) => {
  return (
    <span className={styles.letter}>{letter}</span>
  );
}

export default Letter