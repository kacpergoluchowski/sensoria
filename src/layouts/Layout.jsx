import { Outlet } from 'react-router'
import Header from './components/Header.jsx'

function Layout() {
  return (
    <>
      <Header />
      <main className="px-page desktop:px-0">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
