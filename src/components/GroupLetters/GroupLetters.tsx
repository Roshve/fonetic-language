import React from "react";
import styles from "@/components/GroupLetters/GroupLetters.module.css";
import Letter from "@/components/Letter/Letter";

interface GroupLetters {
  listLetters: Array<string>;
  subtitle?: string;
}

const GroupLetters = ({ subtitle, listLetters }: GroupLetters) => {


  return (
    <div className={styles.container}>
      {subtitle ?
        <span className={styles.subtitle}>{subtitle}</span>
        : null
      }
      {listLetters.map((letter) => (
        <Letter letter={letter} />
      ))}
    </div>
  );
}

export default GroupLetters