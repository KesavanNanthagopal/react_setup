import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './container/Login'
import Layout from './component/Layout'
import Dashboard from './container/Dashboard'
import Menu from './container/Menu'
import ProfilePage from './container/Profile'
import OrderScreen from './container/Orders'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="menu" element={<Menu />} />
        <Route path="order" element={<OrderScreen />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}

export default App
