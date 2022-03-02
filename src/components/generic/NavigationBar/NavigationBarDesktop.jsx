import routes from '../../../config/routes'

import NavigationBarItem from './NavigationBarItem'

const NavigationBarDesktop = () => {
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div className="mt-5 flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {routes.map(item => (
              <NavigationBarItem item={item} key={item.name} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavigationBarDesktop