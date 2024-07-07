import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import Signup from './pages/Signup'
import Signin from './pages/Signin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/signup' element={<Signup />}/>
          <Route path='/signin' element={<Signin />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
