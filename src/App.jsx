import Home from './pages/Home/Home.jsx'
import { Route, Routes } from 'react-router'
import Layout from './layouts/Layout.jsx'
import Booking from './pages/Booking/Booking.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rezerwacja" element={<Booking />} />
      </Route>
    </Routes>
  )
}

export default App
