import React from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArchivedNotePage from './components/ArchivedNotePage';
import DetailNotePage from './components/DetailNotePage';
import AddNotePage from './components/AddNotePage';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1><Link to='/'>Aplikasi Catatan</Link></h1>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/archives' element={<ArchivedNotePage />} />
          <Route path='/notes' element={<Navigate to='/' replace />} />
          <Route path='/notes/new' element={<AddNotePage />} />
          <Route path='/notes/:id' element={<DetailNotePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
