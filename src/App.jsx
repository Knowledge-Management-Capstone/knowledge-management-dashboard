import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import ResearchDocumentation from './pages/ResearchDocumentation'
import ResearchDiscussion from './pages/ResearchDiscussion'
import RepositorySettings from './pages/RepositorySettings'
import RepositoryProposal from './pages/RepositoryProposal'
import UserProfile from './pages/UserProfile'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/documentation" element={<ResearchDocumentation />} />
      <Route path="/discussion" element={<ResearchDiscussion />} />
      <Route path="/settings" element={<RepositorySettings />} />
      <Route path="/proposal" element={<RepositoryProposal />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  )
}

export default App
