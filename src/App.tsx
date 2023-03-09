import { Routes, Route, useLocation } from 'react-router-dom';
import axios from 'axios';

import ErrorPage from '@/404';
import MainPage from '@/Pages/Main';

axios.defaults.withCredentials = true;

function App() {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
