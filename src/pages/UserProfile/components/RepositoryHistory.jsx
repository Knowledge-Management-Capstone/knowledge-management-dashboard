import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'

import BaseTable from '~/components/generic/table/BaseTable'
import BaseTableItem from '~/components/generic/table/BaseTableItem'
import axios from 'axios'

const header = ['Name', 'Title', 'Time', 'Status', 'Year']
const repository = [
  {
    _id: 1,
    title: 'Capstone Project',
    time: 250,
    isDone: true,
    year: 2021
  },
  {
    _id: 2,
    title: 'Sistem Informasi Kesehatan',
    time: 500,
    isDone: false,
    year: 2020
  }
]

const RepositoryHistory = () => {
  const [teams, setTeams] = useState([])

  const {
    data: { _id }
  } = useSelector(state => state.user)

  useEffect(() => {
    async function fetchTeams() {
      const { data } = await axios.get(`/api/user/${_id}/team?all=true`)
      setTeams(data)
      console.log(data)
    }

    fetchTeams()
  }, [])

  return (
    <div className="py-6 max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        Repository Penelitian
      </h1>
      <BaseTable header={header}>
        {teams &&
          teams.map(t => (
            <tr key={t._id}>
              <BaseTableItem>{t.name}</BaseTableItem>
              <BaseTableItem>{t.repository.title}</BaseTableItem>
              {/* TODO: Add hours field */}
              <BaseTableItem>100 Hours</BaseTableItem>
              <BaseTableItem>
                <span
                  className={clsx(
                    'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
                    {
                      'bg-blue-100 text-blue-800': t.status === 'pending',
                      'bg-yellow-100 text-yellow-800': t.status === 'updated',
                      'bg-green-100 text-green-800': t.status === 'accepted',
                      'bg-red-100 text-red-800': !t.status === 'rejected'
                    }
                  )}
                >
                  {t.status}
                </span>
              </BaseTableItem>
              <BaseTableItem>
                {t.repository.startDate.slice(0, 4)}
              </BaseTableItem>
            </tr>
          ))}
      </BaseTable>
    </div>
  )
}

export default RepositoryHistory
