import BaseInput from '~/components/generic/form/BaseInput'
import BaseTextArea from '~/components/generic/form/BaseTextArea'
import FormModal from '~/components/FormModal'

const ProposalEditModal = props => {
  return (
    <FormModal {...props} handleSubmit={console.log}>
      <BaseInput label="Title" name="title" type="text" />
      <BaseTextArea label="Description" name="description" />
    </FormModal>
  )
}

export default ProposalEditModal
