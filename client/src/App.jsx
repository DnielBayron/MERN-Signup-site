import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import SignUp from './pages/SignUp';

function App() {
 

  return (
<BrowserRouter>

<Navbar />
<Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/sign-in' element={<SignIn />}></Route>
      <Route path='/sign-up' element={<SignUp />}></Route>
      <Route path='/profile' element={<Profile />}></Route>

</Routes>


</BrowserRouter>
  )
}

export default App
