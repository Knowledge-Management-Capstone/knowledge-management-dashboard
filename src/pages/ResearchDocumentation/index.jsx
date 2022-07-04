import { DocumentAddIcon, FolderAddIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'

import BaseBreadcrumbs from '~/components/generic/breadcrumbs/BaseBreadcrumbs'
import DashboardLayout from '~/layouts/DashboardLayout'
import DocumentContainer from './components/DocumentContainer'

const pages = [
  { name: 'Capstone Projects', redirect: '#', current: false },
  { name: 'C-251', redirect: '#', current: true }
]

const ResearchDocumentation = () => {
  return (
    <DashboardLayout>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <BaseBreadcrumbs pages={pages} separator={ChevronRightIcon} />
        </div>
        <div className="flex gap-3 max-w-7xl mx-auto px-4 py-4 sm:px-6 md:px-8 items-center">
          <div className="flex gap-2 cursor-pointer items-center hover:bg-slate-200 py-2 px-3 rounded-md">
            <FolderAddIcon className="h-6 w-6" /> New Folder
          </div>
          <div className="flex gap-2 cursor-pointer items-center hover:bg-slate-200 py-2 px-3 rounded-md">
            <DocumentAddIcon className="h-6 w-6" /> New Document
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 md:px-8">
          <DocumentContainer />
        </div>
      </div>
    </DashboardLayout>
  )
}

export default ResearchDocumentation
