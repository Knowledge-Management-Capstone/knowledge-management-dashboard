import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "~/config/firebase";

import { title, note, files } from "~/utils/validation";
import useSelectedTeam from "~/hooks/useSelectedTeam";

import BaseInput from "~/components/generic/form/BaseInput";
import FormModal from "~/components/FormModal";
import TextEditorInput from "~/components/TextEditorInput";
import BaseFileUpload from "~/components/generic/form/BaseFileUpload";

function DocumentModal(props) {
  const {
    repository: { _id: repositoryId },
  } = useSelectedTeam();

  const handleSubmit = async (values) => {
    // TODO: Move this to BaseFileUploadComponent
    const { files } = values;
    const storageDir = `/files/${repositoryId}/`;

    // https://www.makeuseof.com/upload-files-to-firebase-using-reactjs/#:~:text=Add%20Firebase%20to%20React&text=const%20storage%20%3D%20getStorage(app)%3B,the%20rest%20of%20your%20app.
    try {
      const storageRef = await ref(storage, storageDir);
      const documents = await Promise.all([
        files.map((file) => uploadBytesResumable(storageRef, file)),
      ]);
      const urls = await Promise.all([
        documents.map((document) => document.ref.getDownloadURL()),
      ]);
      console.log(urls);
      // eslint-disable-next-line no-empty
    } catch (_) {}
  };
  return (
    <FormModal
      validation={{ title, note, files }}
      handleSubmit={handleSubmit}
      {...props}
    >
      <BaseInput label="Document Name" name="title" />
      <TextEditorInput label="Note" name="note" />
      <BaseFileUpload label="Documents" name="files" id="files" />
    </FormModal>
  );
}

export default DocumentModal;
