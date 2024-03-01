import React from 'react'
import TopHeader from './components/containers/TopHeader/TopHeader'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <main>
        <TopHeader />
        <Outlet />
    </main>
  )
}

export default Layout