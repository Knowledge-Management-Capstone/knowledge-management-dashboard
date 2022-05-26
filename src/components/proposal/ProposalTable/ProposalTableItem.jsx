import { Fragment } from 'react'
import clsx from 'clsx'
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline'

const ProposalTableItem = ({ proposal }) => {
  const handleEdit = () => {}
  const handleDelete = () => {}

  return (
    <Fragment>
      <tr>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
          {proposal.title}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <span
            className={clsx(
              'inline-flex rounded-full  px-2 text-xs font-semibold leading-5 ',
              {
                'bg-blue-100 text-blue-800': proposal.status === 'pending',
                'bg-green-100 text-green-800': proposal.status === 'accepted',
                'bg-red-100 text-red-800': !proposal.status === 'rejected'
              }
            )}
          >
            {proposal.status}
          </span>
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6  flex gap-2">
          <PencilAltIcon
            className="h-6 w-6 text-blue-500 hover:cursor-pointer hover:text-blue-700 hover:bg-black hover:bg-opacity-10"
            onClick={() => handleEdit()}
          />
          <TrashIcon
            className="h-6 w-6 text-red-500 hover:cursor-pointer hover:text-red-700 hover:bg-black hover:bg-opacity-10"
            onClick={() => handleDelete()}
          />
        </td>
      </tr>
    </Fragment>
  )
}

export default ProposalTableItem
