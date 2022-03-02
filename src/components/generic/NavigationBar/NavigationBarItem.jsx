import { Link, useLocation } from 'react-router-dom'
import { classNames } from '../../../utils/classNames'

const NavigationBarItem = ({ name, path, icon: NavIcon }) => {
  const { pathname } = useLocation()

  return (
    <Link
      key={name}
      to={path}
      className={classNames(
        pathname === path
          ? 'bg-indigo-800 text-white'
          : 'text-indigo-100 hover:bg-indigo-600',
        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
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
