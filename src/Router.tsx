import { Route, Routes } from 'react-router-dom'

import { DefaultLayout } from './Layout'
import { Details } from './pages/Details'
import { Home } from './pages/Home'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Route>
    </Routes>
  )
}
