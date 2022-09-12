import { craftingTime, description, files, status } from "~/utils/validation";

import BaseInput from "~/components/generic/form/BaseInput";
import FormModal from "~/components/FormModal";
import BaseFileUpload from "~/components/generic/form/BaseFileUpload";
import BaseSelect from "~/components/generic/form/BaseSelect";
import BaseTextArea from "~/components/generic/form/BaseTextArea";

function DocumentModal({ setOpen, ...props }) {
  const handleSubmit = async (values) => {
    // TODO: API call to Add Documents Here
    // eslint-disable-next-line no-console
    console.log(values);
    setOpen(false);
  };
  return (
    <FormModal
      validation={{ craftingTime, description, files, status }}
      handleSubmit={handleSubmit}
      setOpen={setOpen}
      {...props}
    >
      <BaseFileUpload label="Documents" name="files" id="files" />
      <BaseSelect label="Status" name="status">
        <option value="" disabled defaultValue>
          Select current status
        </option>
        <option value="ongoing">Ongoing</option>
        <option value="draft">Draft</option>
        <option value="done">Done</option>
        <option value="critical">Critical</option>
      </BaseSelect>
      <BaseInput
        label="Crafting Time (Hours)"
        name="craftingTime"
        type="number"
      />
      <BaseTextArea label="Description" name="description" />
    </FormModal>
  );
}

export default DocumentModal;
