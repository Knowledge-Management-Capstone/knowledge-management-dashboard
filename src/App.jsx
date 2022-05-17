import { Routes, Route } from 'react-router-dom'
import dashboard from './config/dashboard'

import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import NotActivated from './pages/NotActivated'

function App() {
  return (
    <Routes>
      {dashboard.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/not-activated" element={<NotActivated />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
