import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Notfound } from './components/Notfound';
import { Categories } from './pages/Categories';
import { Register } from './pages/Register';
import { Confirmation } from './pages/Confirmation';
import { Footer } from './components/Footer';
import { CategoriesSession } from './components/CategoriesSession';
import { CategoriesSubSession } from './components/CategoriesSubSession';

function App() {
  return (
    <>
      <div className='App'>  
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/categories' element={<Categories/>}>
            <Route path=':sessions' element={<CategoriesSession/>}>
              <Route path=':subsessions' element={<CategoriesSubSession/>} />
            </Route>
          </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/confirmation' element={<Confirmation/>}></Route>
          <Route path='*' element={<Notfound/>} />
        </Routes>
        <Footer/>
      </div>
    </>
  );
}

export default App;
