import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './components/pages/HomePage'
import LoginRegister from './components/pages/LoginRegister'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='/authenticate' element={<LoginRegister />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
