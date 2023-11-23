import React, { useState } from 'react'
import styles from './MainPage.module.css'
import LocationsView from "./PickupLocation/LocationsView";
import CodePanel from './CodeVerifier/CodePanel';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Button, DropdownMenu, img } from 'react-bootstrap'
import ParcelFinder from './ParcelFinder';

const MainPage = () => {
  return (
    <div className={styles.parent_container}>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<ParcelFinder />} />
        <Route path="/code" exact element={<CodePanel />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default MainPage;