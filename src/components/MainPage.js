import React, { useState } from 'react'
import styles from './MainPage.module.css'
import CodePanel from './code-verifier/CodePanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Button, DropdownMenu, img } from 'react-bootstrap'
import ParcelFinder from './parcel-finder/ParcelFinder';
import RoleSelector from "./role-selector/RoleSelector";

const MainPage = () => {
  
  return (
    <div className={styles.parent_container}>
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<ParcelFinder />} />
        <Route path="code" exact element={<CodePanel />} />
        <Route path="role" exact element={<RoleSelector />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default MainPage;