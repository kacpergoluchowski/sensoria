import { Outlet } from 'react-router'
import Header from '../../components/header/Header.jsx'
import BackgroundDecorations from '../../components/background/BackgroundDecorations.jsx'

function MainLayout() {
  return (
    <>
      <BackgroundDecorations />
      <Header />
      <main className="relative z-10 px-page desktop:px-0">
        <Outlet />
      </main>
    </>
  )
}

export default MainLayout
