import { DocumentAddIcon, FolderAddIcon } from '@heroicons/react/outline'

const ActionContainer = () => {
  return (
    <div className="flex gap-3 max-w-7xl mx-auto px-4 pt-3 pb-4 sm:px-6 md:px-8 items-center">
      <div className="flex gap-2 cursor-pointer items-center hover:bg-slate-200 py-2 px-3 rounded-md">
        <FolderAddIcon className="h-6 w-6" /> New Folder
      </div>
      <div className="flex gap-2 cursor-pointer items-center hover:bg-slate-200 py-2 px-3 rounded-md">
        <DocumentAddIcon className="h-6 w-6" /> New Document
      </div>
    </div>
  )
}

export default ActionContainer
