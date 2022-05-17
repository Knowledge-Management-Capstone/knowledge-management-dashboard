import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const NavigationBarItem = ({ name, path, icon: NavIcon }) => {
  const { pathname } = useLocation()

  return (
    <Link
      key={name}
      to={path}
      className={clsx(
        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
        {
          'bg-indigo-800 text-white': pathname === path,
          'text-indigo-100 hover:bg-indigo-600': pathname !== path
        }
      )}
    >
      <NavIcon
        className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
        aria-hidden="true"
      />
      {name}
    </Link>
  )
}

export default NavigationBarItem
