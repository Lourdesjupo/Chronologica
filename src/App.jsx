// import NotFoundPage from './NotFoundPage'

import './styles/core/app.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <HashRouter>
          <Header/>
        <Routes>
          {/* <Route path='/' element={<Page1 />} />
          <Route path='/2' element={<Page2 />} /> */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
