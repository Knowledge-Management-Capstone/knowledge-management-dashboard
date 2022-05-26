import { Fragment, useState } from 'react'
import AddRepositoryButton from './AddRepositoryButton'
import AddRepositoryDialog from './AddRepositoryDialog'

const AddRepository = () => {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <AddRepositoryButton setOpen={setOpen} />
      <AddRepositoryDialog open={open} setOpen={setOpen} />
    </Fragment>
  )
}

export default AddRepository
