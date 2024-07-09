import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { Blogs } from './pages/Blogs'
import { RecoilRoot } from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/blog/:id' element={<Blog />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
