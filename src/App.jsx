// import NotFoundPage from './NotFoundPage'

import './styles/core/app.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Home from './components/Home';



function App() {
  return (
    <>
      <HashRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<Home />} />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
