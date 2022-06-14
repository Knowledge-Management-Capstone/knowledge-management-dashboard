import { ChevronRightIcon } from '@heroicons/react/solid'

import BaseBreadcrumbs from '~/components/generic/breadcrumbs/BaseBreadcrumbs'
import DashboardLayout from '~/layouts/DashboardLayout'

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8"></div>
      </div>
    </DashboardLayout>
  )
}

export default ResearchDocumentation
