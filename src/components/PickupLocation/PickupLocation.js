import React from "react";
import styles from "./PickupLocation.module.css";
import {Link, Routes, Route} from "react-router-dom"
import CodePanel from "../CodeVerifier/CodePanel";

/* This component is used to display a single pickup loction in the pickup location view. */

export default function PickupLocation({ id, name, address }) {
  return (
    <div className={styles.location} key={id} data-testid={`location-${id}`}>
      <div>{name}</div>
      <div>{address}</div>
      <div>
        {/* Replace anchor element with router Link */}
        <Link to="code">Choose</Link>
      </div>
    </div>
  );
}
