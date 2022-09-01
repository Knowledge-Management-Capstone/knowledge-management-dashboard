import { useDispatch } from "react-redux";

import BaseInput from "~/components/generic/form/BaseInput";
import FormModal from "~/components/FormModal";

import { title } from "~/utils/validation";
import { createFolder } from "~/store/actions/folderActions";

function FolderModal(props) {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(createFolder(values));
  };
  return (
    <FormModal validation={{ title }} handleSubmit={handleSubmit} {...props}>
      <BaseInput label="Folder Name" name="title" />
    </FormModal>
  );
}

export default FolderModal;
