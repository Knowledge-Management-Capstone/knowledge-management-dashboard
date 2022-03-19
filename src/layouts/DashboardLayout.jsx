import { useState } from 'react'

import Header from '../components/common/Header'
import NavigationBar from '../components/common/NavigationBar'

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <NavigationBar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="md:pl-64 flex flex-col flex-1">
          <Header setSidebarOpen={setSidebarOpen} />

          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout
