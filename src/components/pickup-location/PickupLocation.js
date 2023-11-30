import React from "react";
import styles from "./PickupLocation.module.css";
import {Link, Routes, Route, useNavigate} from "react-router-dom"
import CodePanel from "../code-verifier/CodePanel";

/* This component is used to display a single pickup loction in the pickup location view. */

export default function PickupLocation({ id, name, address }) {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem("lockerId", id);
    navigate("role", {state: {lockerId: id}})
  }

  return (
    <div className={styles.location} key={id} data-testid={`location-${id}`}>
      <div>{name}</div>
      <div>{address}</div>
      <div>
        {/* Replace anchor element with router Link */}
        <button onClick={handleClick}>Choose</button>
      </div>
    </div>
  );
}
