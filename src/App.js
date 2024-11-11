import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';

const Admin = lazy(() => import('./Compnants/Admin/Admin'));
const User = lazy(() => import('./Compnants/User/User'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/admin/*" element={<Admin/>} />
          {/* <Route path="/*" element={<User/>} /> */}
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
