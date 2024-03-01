import { Button } from './components/ui/button'
import './App.css'
import TopHeader from './components/containers/TopHeader/TopHeader'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './components/pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
