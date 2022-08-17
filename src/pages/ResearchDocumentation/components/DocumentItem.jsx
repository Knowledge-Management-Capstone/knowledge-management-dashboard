import { Link } from 'react-router-dom'
import * as ContextMenu from '@radix-ui/react-context-menu'
import {
  DocumentTextIcon,
  FolderIcon,
  PencilAltIcon,
  TrashIcon,
} from '@heroicons/react/outline'

const DocumentItem = ({ type, onRename }) => {
  return (
    <Link
      to="#"
      className="max-w-md rounded-md hover:ring-2 hover:ring-primary hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <div className="flex flex-col items-center justify-center ">
            {type === 'file' ? (
              <DocumentTextIcon className="h-24 w-24 stroke-1 text-primary" />
            ) : (
              <FolderIcon className="h-24 w-24 stroke-1 text-primary" />
            )}
          </div>
          <div className="text-center">Dian Rahmaji Dokumen</div>
        </ContextMenu.Trigger>
        <ContextMenu.Content
          className="z-40 w-56 min-w-max rounded-md border border-gray-200 bg-white py-1 shadow-sm outline-none dark:border-gray-700 dark:bg-neutral-800"
          alignOffset={-5}
        >
          <ContextMenu.Item
            className="cursor-base flex h-8 w-full flex-shrink-0 items-center px-3 text-left text-sm focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700"
            onClick={() => onRename({ documentName: 'Dian Rahmaji Dokumen' })}
          >
            <PencilAltIcon className="mr-2 h-6 w-6" />
            <span className="mr-2 flex-1">Rename</span>
          </ContextMenu.Item>
          <ContextMenu.Item className="cursor-base flex h-8 w-full flex-shrink-0 items-center px-3 text-left text-sm focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700">
            <TrashIcon className="mr-2 h-6 w-6" />
            <span className="mr-2 flex-1">Delete</span>
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Root>
    </Link>
  )
}

export default DocumentItem
