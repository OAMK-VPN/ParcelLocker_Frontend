import React, { useState } from 'react'
import CodePanel from './code-verifier/CodePanel';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParcelFinder from './parcel-finder/ParcelFinder';
import RoleSelector from "./role-selector/RoleSelector";

const MainPage = () => {

  return (
    <div>
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