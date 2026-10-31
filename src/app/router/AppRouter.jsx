import { Route, Routes } from 'react-router'
import HomePage from '../../pages/home/HomePage.jsx'
import BookingPage from '../../pages/booking/BookingPage.jsx'
import MainLayout from '../layouts/MainLayout.jsx'

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="rezerwacja" element={<BookingPage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
