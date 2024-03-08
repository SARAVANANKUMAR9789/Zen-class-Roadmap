import React from 'react'
import CybSec from './com/CybSec';
import DataSci from './com/DataSci';
import FullStdev from './com/FullStdev';
import Header from './com/Header';
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (<div>
    <Header />
    <Routes>
      <Route path='/CybSec' element={<CybSec />} />
      <Route path='/Datasci' element={<DataSci />} />
      <Route path='/FullStdev' element={<FullStdev />} />
    </Routes>
  </div>
  )
}
