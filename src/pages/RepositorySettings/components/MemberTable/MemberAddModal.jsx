import { useEffect, useState } from 'react'
import axios from 'axios'
import debounce from 'lodash.debounce'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Combobox } from '@headlessui/react'

import { fullName, role } from '~/utils/validation'

import FormModal from '~/components/FormModal'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ResearcherCombobox = ({ filteredItem, setQuery, ...props }) => {
  return (
    <Combobox as="div" {...props}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Search by Full Name or Email
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Input
          className="w-full text-primary font-bold rounded-md border border-accent bg-white py-2 pl-3 pr-10 shadow-sm focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
          onChange={event => setQuery(event.target.value)}
          displayValue={item => item?.fullName}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <SelectorIcon className="h-5 w-5 text-primary" aria-hidden="true" />
        </Combobox.Button>

        {filteredItem.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredItem.map(item => (
              <Combobox.Option
                key={item._id}
                value={item}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-primary text-secondary' : 'text-primary'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <div className="flex">
                      <span
                        className={classNames(
                          'truncate',
                          selected && 'font-semibold'
                        )}
                      >
                        {item.fullName}
                      </span>
                      <span
                        className={classNames(
                          'ml-2 truncate text-gray-500',
                          active ? 'text-indigo-200' : 'text-gray-500'
                        )}
                      >
                        {item.email}
                      </span>
                    </div>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-primary'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
}

const MemberAddModal = props => {
  const [researchers, setResearchers] = useState([])
  const [selectedReseracher, setSelectedResearcher] = useState(null)

  useEffect(() => {
    fetchResearchers('')
  }, [])

  const handleQuery = debounce(query => {
    fetchResearchers(query)
  }, 500)

  const fetchResearchers = async query => {
    const { data } = await axios.get(`/api/user/search?param=${query}`)
    setResearchers(data)
  }

  return (
    <FormModal
      title="Add Member"
      initialValues={{ fullName: '', role: '' }}
      validation={{ fullName, role }}
      handleSubmit={console.log}
      {...props}
    >
      <ResearcherCombobox
        value={selectedReseracher}
        onChange={setSelectedResearcher}
        filteredItem={researchers}
        setQuery={handleQuery}
      />
    </FormModal>
  )
}

export default MemberAddModal
