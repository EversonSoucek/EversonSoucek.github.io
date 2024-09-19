
import React from 'react';
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import './MainPage.css'; // Adicione um novo arquivo CSS para a MainPage

export default function MainPage() {
  return (
    <div className="main-container">
      <Header />
      <Home />
    </div>
  );
}
