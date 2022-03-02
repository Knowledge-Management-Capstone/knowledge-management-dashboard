import { Routes, Route } from 'react-router-dom'
import pages from './config/pages'

function App() {
  return (
    <Routes>
      {pages.map(({ route, navigation }) => (
        <Route {...route} key={navigation.name} />
      ))}
    </Routes>
  )
}

export default App
