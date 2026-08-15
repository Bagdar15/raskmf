import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import ConstructionPage from './components/ConstructionPage.jsx'
import HomePage from './pages/HomePage.jsx'

const accessKey = 'raskmf-access'

export default function App() {
  const [hasAccess, setHasAccess] = useState(() => sessionStorage.getItem(accessKey) === 'granted')

  function unlockSite() {
    sessionStorage.setItem(accessKey, 'granted')
    setHasAccess(true)
  }

  if (!hasAccess) {
    return <ConstructionPage onUnlock={unlockSite} />
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
