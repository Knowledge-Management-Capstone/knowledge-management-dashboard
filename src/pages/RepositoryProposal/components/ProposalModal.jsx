import BaseInput from "~/components/generic/form/BaseInput";
import BaseMultipleInput from "~/components/generic/form/BaseMultipleInput";
import BaseTextArea from "~/components/generic/form/BaseTextArea";
import FormModal from "~/components/FormModal";

import {
  name,
  title,
  topics,
  description,
  date,
  files,
} from "~/utils/validation";
import BaseFileUpload from "~/components/generic/form/BaseFileUpload";

const initialValues = {
  name: "",
  title: "",
  topics: [],
  description: "",
  startDate: "",
  endDate: "",
  files: [],
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
        files,
      }}
      initialValues={initialValues}
      {...props}
    >
      <BaseInput label="Nama Tim" name="name" type="text" />
      <BaseInput label="Judul Repositori" name="title" type="text" />
      <BaseMultipleInput label="Topik" name="topics" />
      <div className="grid grid-cols-2 gap-3">
        <BaseInput label="Tanggal Mulai" name="startDate" type="date" />
        <BaseInput label="Tanggal Selesai" name="endDate" type="date" />
      </div>
      <BaseTextArea label="Deskripsi" name="description" />
      <BaseFileUpload
        label="Dokumen"
        name="files"
        id="files"
        location="proposal"
      />
    </FormModal>
  );
}

export default ProposalModal;
