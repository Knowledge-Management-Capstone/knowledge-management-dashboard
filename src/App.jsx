import { Routes, Route } from 'react-router-dom'
import pages from './config/pages'

import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      {pages.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
