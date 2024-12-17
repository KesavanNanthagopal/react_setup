import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './container/Login'
import Layout from './component/Layout'
import Dashboard from './container/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
