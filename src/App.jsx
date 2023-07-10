// import NotFoundPage from './NotFoundPage'

import './styles/core/app.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Home from './components/Home';
import AddTask_TrackTime from './components/AddTask_TrackTime';
import AddTask_OneTime from './components/AddTask_OneTime';

function App() {
  
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addtrackedtask' element={<AddTask_TrackTime />} />
          <Route path='/addonetimetask' element={<AddTask_OneTime />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
