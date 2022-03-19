import NavigationBarMobile from './NavigationBarMobile'
import NavigationBarDesktop from './NavigationBarDesktop'

const NavigationBar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <NavigationBarMobile
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <NavigationBarDesktop />
    </>
  )
}

export default NavigationBar
