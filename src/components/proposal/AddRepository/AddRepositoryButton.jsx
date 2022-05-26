import { PlusSmIcon } from '@heroicons/react/outline'

const AddRepositoryButton = ({ setOpen }) => {
  return (
    <button
      type="button"
      className="inline-flex items-center p-3 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      onClick={() => setOpen(true)}
    >
      <PlusSmIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}

export default AddRepositoryButton
