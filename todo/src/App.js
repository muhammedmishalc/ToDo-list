import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import Body from './components/Body';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      {/* <Route path='/header' element={<Header/>}/>
      <Route path='/body' element={<Body/>}/> */}
        
        </Routes></BrowserRouter>
  );
}

export default App;
