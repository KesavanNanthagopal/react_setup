import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './container/Login'
import Layout from './component/Layout'
import Dashboard from './container/Dashboard'
import Menu from './container/Menu'
import Orders from './container/Orders'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<Orders />} />
      </Route>
    </Routes>
  )
}

export default App
