
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import AddCart from './pages/AddCart'
import NotFound from './pages/notfound'
 function App() {
return(
  <BrowserRouter>
  <Header/>
   <Routes>
    <Route path='/' element = {<Home/>} />
    <Route path='/About' element = {<About/>} />
    <Route path='/Contact' element = {<Contact/>} />
    <Route path='/SingIn' element = {<SingIn/>} />
    <Route path='/SingUp' element = {<SingUp/>} />
    <Route path=':id' element={<AddCart/>}/>
    <Route path='/*' element = {<NotFound/>} />
   </Routes>
   <Footer/>
  </BrowserRouter>
)
}


export default App
