
import React from 'react';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import './MainPage.css';
import SobreMim from '../components/SobreMim/SobreMim';
import Experiencias from '../components/Experiencias/Experiencias';

export default function MainPage() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Home />
      </div>
      <SobreMim />
      <Experiencias/>
    </>

  );
}
