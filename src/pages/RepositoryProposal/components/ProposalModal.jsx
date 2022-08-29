import BaseInput from "~/components/generic/form/BaseInput";
import BaseMultipleInput from "~/components/generic/form/BaseMultipleInput";
import FormModal from "~/components/FormModal";
import TextEditorInput from "~/components/TextEditorInput";

import { name, title, topics, description, date } from "~/utils/validation";

const initialValues = {
  name: "",
  title: "",
  topics: [],
  description: "",
  startDate: "",
  endDate: "",
};

function ProposalModal(props) {
  return (
    <FormModal
      validation={{
        name,
        title,
        description,
        topics,
        startDate: date,
        endDate: date,
      }}
      initialValues={initialValues}
      {...props}
    >
      <BaseInput label="Team Name" name="name" type="text" />
      <BaseInput label="Repository Title" name="title" type="text" />
      <BaseMultipleInput label="Topics" name="topics" />
      <div className="grid grid-cols-2 gap-3">
        <BaseInput label="Start Date" name="startDate" type="date" />
        <BaseInput label="End Date" name="endDate" type="date" />
      </div>
      <TextEditorInput label="Description" name="description" />
    </FormModal>
  );
}

export default ProposalModal;
