import { useState } from 'react'
import { LogoutIcon } from '@heroicons/react/outline'
import dashboard from '~/config/dashboard'

import BaseCombobox from '~/components/generic/form/BaseCombobox'
import NavigationBarItem from './NavigationBarItem'

const people = [
  { id: 1, name: 'Leslie Alexander' },
  { id: 2, name: 'Dian Rahmaji' }
  // More users...
]

const NavigationBarDesktop = () => {
  const [query, setQuery] = useState('')
  const [selectedPerson, setSelectedPerson] = useState()

  const filteredPeople =
    query === ''
      ? people
      : people.filter(person => {
          return person.name.toLowerCase().includes(query.toLowerCase())
        })

  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div className="flex flex-col flex-grow pt-5 bg-primary overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div className="mt-5 flex-1 flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            <BaseCombobox
              className="mb-4"
              value={selectedPerson}
              onChange={setSelectedPerson}
              filteredPeople={filteredPeople}
              setQuery={setQuery}
            />
            {dashboard.map(({ navigation }) => (
              <NavigationBarItem {...navigation} key={navigation.name} />
            ))}
            <div className="pt-3">
              <NavigationBarItem
                name="Keluar"
                path="#"
                icon={LogoutIcon}
                onLogout={handleLogout}
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavigationBarDesktop
