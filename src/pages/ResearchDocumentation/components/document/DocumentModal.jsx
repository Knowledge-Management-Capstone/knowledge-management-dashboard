import BaseInput from "~/components/generic/form/BaseInput";
import FormModal from "~/components/FormModal";
import TextEditorInput from "~/components/TextEditorInput";

import { title, note } from "~/utils/validation";

function DocumentModal(props) {
  return (
    <FormModal validation={{ title, note }} {...props}>
      <BaseInput label="Document Name" name="title" />
      <TextEditorInput label="Note" name="note" />
    </FormModal>
  );
}

export default DocumentModal;
