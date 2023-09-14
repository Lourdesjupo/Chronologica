// import NotFoundPage from './NotFoundPage'

import './styles/core/app.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Home from './components/Home';
import AddTask_TrackTime from './components/AddTask_TrackTime';
import AddTask_OneTime from './components/AddTask_OneTime';
import Example from './components/Example';
import Example2 from './components/Example2';


function App() {
  
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addtrackedtask' element={<AddTask_TrackTime />} />
          <Route path='/addonetimetask' element={<AddTask_OneTime />} />
          <Route path='/Example' element={<Example/>}></Route>
          <Route path='/Example2' element={<Example2/>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
