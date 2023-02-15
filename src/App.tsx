/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useAppSelector } from './hooks';
import Departments from './pages/Departments';
import Home from './pages/Home';

const App = () => {
  const { currentDepartment } = useAppSelector((state) => state.departments);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path={"/departments/" + currentDepartment?.displayName}
          element={<Departments />}
        ></Route>
      </Routes>
    </Router>
  );
};

export default App;
