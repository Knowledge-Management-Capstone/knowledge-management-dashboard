import { useState } from 'react'
import AddRepositoryButton from './AddRepositoryButton'
import AddRepositoryDialog from './AddRepositoryDialog'

const AddRepository = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex justify-end mt-3">
      <AddRepositoryButton setOpen={setOpen} />
      <AddRepositoryDialog open={open} setOpen={setOpen} />
    </div>
  )
}

export default AddRepository
