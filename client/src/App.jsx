import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
 

  return (
<BrowserRouter>

<Navbar />
<Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/signin' element={<SignIn />}></Route>
      <Route path='/profile' element={<Profile />}></Route>

</Routes>


</BrowserRouter>
  )
}

export default App
