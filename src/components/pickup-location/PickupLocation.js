import React from "react";
import styles from "./PickupLocation.module.css";
import {Link, Routes, Route, useNavigate} from "react-router-dom"
import CodePanel from "../code-verifier/CodePanel";

/* This component is used to display a single pickup loction in the pickup location view. */

export default function PickupLocation({ id, name, address }) {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("lockerId", id);
    navigate("role")
  }

  return (
    <div className={styles.location} key={id} data-testid={`location-${id}`}>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div>{address}</div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={handleClick}>Choose</button>
      </div>
    </div>
  );
}
