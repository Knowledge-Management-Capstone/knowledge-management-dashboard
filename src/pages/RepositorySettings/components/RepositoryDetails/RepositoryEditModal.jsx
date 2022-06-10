import FormModal from '~/components/FormModal'

const RepositoryEditModal = ({ open, setOpen, ...props }) => {
  return (
    <FormModal
      title="Edit Repository"
      open={open}
      setOpen={setOpen}
    ></FormModal>
  )
}

export default RepositoryEditModal
