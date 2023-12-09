import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Join from './pages/Join';
import Plan from './pages/Plan';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
